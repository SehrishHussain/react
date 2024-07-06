import conf from '../conf.js'
import {Client, Account, ID} from 'appwrite'




export class AuthSerice {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId);

        this.account = new Account(this.client);
    }

async createAccount({email, password, name}){
    try {
        const userAccount = await this.account.create(ID.unique(),email, password, name)
        if (userAccount) {
        // call another method    return userAccount
          return this.login({email, password}) ;
        } else {
            return userAccount;
            
        }
    } catch (error) {
        throw error;
        
    }
}
async login({email, password}){
    try {
        return await this.account.createEmailPasswordSession(email, password);
        
    } catch (error) {
        throw error;
        
    }
}
async getCurrentUser(){
    try {
        return await this.account.get();
        
    } catch (error) {
        throw error;
        
    }
    return null;
}

async logout(){
    try {
        await this.account.deleteSessions();
        
    } catch (error) {
        throw error;
        
    }
}

}



const authService = new AuthSerice();

export default authService;