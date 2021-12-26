import db from "./db";

import { ObjectId } from "mongodb";

const listContacts = async () => {
  const client = await db;
  const collection = await client.db().collection("contacts");
  const result = await collection.find().toArray();
  return result;
};

const getContactById = async (contactId) => {
  const client = await db;
  const collection = await client.db().collection("contacts");
  const id = ObjectId(contactId);
  const result = await collection.find({ _id: id }).toArray();
  return result;
};

const removeContact = async (contactId) => {
  const client = await db;
  const collection = await client.db().collection("contacts");
  const id = ObjectId(contactId);
  const { value: result } = await collection.findOneAndDelete({ _id: id });
  return result;
};

const addContact = async ({ body }) => {
  const client = await db;
  const collection = await client.db().collection("contacts");
  const newContact = {
    favorite: false,
    ...body,
  };
  const result = await collection.insertOne(newContact);
  return result;
};

const updateContact = async (contactId, body) => {
  const client = await db;
  const collection = await client.db().collection("contacts");
  const id = ObjectId(contactId);
  const { value: result } = await collection.findOneAndUpdate(
    { _id: id },
    { $set: body },
    { returnDocument: "after" }
  );
  return result;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
