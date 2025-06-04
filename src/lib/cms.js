
import { databases, ID } from './appwrite';

const DATABASE_ID = "683c81c300019b08ad2a";  // example database ID
const COLLECTION_ID = "cms"; // example collection ID (e.g., "cmsSettings")
// src/lib/cmsService.js
const CMS = {
  // Create a new CMS settings document
  create: (data = {}) =>
    databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), data),

  // Get a specific document by ID
  get: (documentId) =>
    databases.getDocument(DATABASE_ID, COLLECTION_ID, documentId),

  // Update an existing document
  update: (documentId, data = {}) =>
    databases.updateDocument(DATABASE_ID, COLLECTION_ID, documentId, data),

  // Delete a document
  delete: (documentId) =>
    databases.deleteDocument(DATABASE_ID, COLLECTION_ID, documentId),

  // List all documents
  list: () =>
    databases.listDocuments(DATABASE_ID, COLLECTION_ID)
};

export default CMS;
