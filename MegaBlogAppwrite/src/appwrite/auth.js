import conf from "../confg/confg";
import client from "./client";
import { Account, ID } from "appwrite";

export class AuthService {
 
  account;

  constructor() {
    
    this.account = new Account(client);
  }

  // Create user + auto login
 async createAccount({ email, password, name, role = "author" }) {
  try {
    // 1. Create the account
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
    console.log("User account created:", userAccount);

    if (!userAccount) {
      return null;
    }

    // 2. Auto login (creates a session so user is no longer "guest")
    await this.login({ email, password });

    // 3. Now update prefs (requires an active session)
    await this.account.updatePrefs({ role });

    // 4. Return the full current user with prefs
    return await this.getCurrentUser();
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
}


  // Email + Password login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // 🔥 Google OAuth login
 async loginWithGoogle() {
  return this.account.createOAuth2Session(
    "google",
    "http://localhost:3000/oauth-callback", // success redirect
    "http://localhost:3000/login"           // failure redirect
  );
}

async getCurrentUser() {
  try {
    return await this.client.account.get();
  } catch (error) {
    return null;
  }
}


  // Get current user
 async getCurrentUser() {
  try {
    const user = await this.account.get();
    return {
      ...user,
      role: user.prefs?.role || "author", // default if not set
    };
  } catch (error) {
    console.log("appwrite service: current user : ", error);
  }
  return null;
}

  // Logout
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite service: logout ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
