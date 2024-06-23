import conf from "../confg/confg";

import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor() { //made constructor cz want to make client n acct only when client is made
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name);
           if (userAccount) {
            // call another method
            this.login({email, password}) //want to login directly if userAccount is succfully made
            
           } else {
            return userAccount //if acct not made userAcount can be null
            
           }
        } catch (error) {
            throw error;
            
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
            
        }
    }

    async getCurrentUser() {
        try {
            await this.account.get();
            
        } catch (error) {
           // throw error;
            console.log("appwrite service: current user : ", error);
            
        }

        return null;

    }

    async logout() {
        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            console.log("appwrite service: : logout ", error);
            
        }
    }
}

const authService = new AuthService(); // exporting obj with all fn instead of AuthService class

export default authService

