import { Client, Databases, Account, ID } from "appwrite";
const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('683c81b60027617ce9c2').setDevKey("")

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases, ID };


const DATABASE_ID = "683c81c300019b08ad2a";
const COLLECTION_ID = "cms"; 