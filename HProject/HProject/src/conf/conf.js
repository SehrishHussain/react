const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), // Fixed typo here
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), // Fixed typo here
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), // Fixed typo here
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID) // Fixed typo here
}
console.log("Appwrite Configuration:", conf);
export default conf;
