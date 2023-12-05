import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '656e9576651d71a965a4';
export const COLLECTION_ID_MESSAGES = '656e9bfe806083e2b328';
export const DATABASE_ID = '656e9bf1bbe1c4e419b1';

const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656e9576651d71a965a4');


export const databases = new Databases(client);
export const account = new Account(client);

export default client;