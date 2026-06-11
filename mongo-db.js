// const { MongoClient } = require("mongodb");

import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
export const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.log("Error while connecting to MongoDB",err);
  }
}