import conf from "../confg/confg";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // Create user + auto login
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log("User account created:", userAccount);

      if (userAccount) {
        return this.login({ email, password }); // auto login
      } else {
        return userAccount; // could be null
      }
    } catch (error) {
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
  loginWithGoogle() {
    try {
      // redirect-based login
      return this.account.createOAuth2Session(
        "google",
        window.location.origin, // success redirect
        window.location.origin + "/login" // failure redirect
      );
    } catch (error) {
      throw error;
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      return await this.account.get();
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
