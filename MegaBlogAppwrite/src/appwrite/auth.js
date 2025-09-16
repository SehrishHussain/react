import conf from "../confg/confg";
import client from "./client";
import { Account, ID } from "appwrite";

export class AuthService {
  account;

  constructor() {
    this.account = new Account(client);
  }

  // Create user + auto login
  async createAccount({ email, password, name, role = "reader" }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (!userAccount) return null;

      // Auto login
      await this.login({ email, password });

      // Set initial role (default: reader)
      await this.account.updatePrefs({ role });

      return await this.getCurrentUser();
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  }

  // Email + Password login
  async login({ email, password }) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  // Google OAuth login
  async loginWithGoogle() {
    return this.account.createOAuth2Session(
      "google",
      "http://localhost:5173/oauth-callback",
      "http://localhost:5173/login"
    );
  }

  // Ensure every user always has a role
  async ensureRole(defaultRole = "reader") {
    try {
      const user = await this.account.get();

      if (!user.prefs?.role) {
        await this.account.updatePrefs({ role: defaultRole });
        user.prefs = { ...user.prefs, role: defaultRole };
      }

      return {
        ...user,
        role: user.prefs.role,
      };
    } catch (error) {
      console.error("Error ensuring role:", error);
      throw error;
    }
  }

  // Get current user
 // Get current user (always fresh prefs)
async getCurrentUser() {
  try {
    const user = await this.account.get(); // fetches current user from Appwrite

    // Ensure prefs exist
    if (!user.prefs) {
      user.prefs = {};
    }

    // If role missing, fallback to "reader"
    const role = user.prefs.role || "reader";

    return {
      ...user,
      role,
    };
  } catch (error) {
    console.log("appwrite service: current user : ", error);
    return null;
  }
}


  async logout() {
    await this.account.deleteSessions();
  }
}

const authService = new AuthService();
export default authService;
