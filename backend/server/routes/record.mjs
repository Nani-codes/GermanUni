import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("german");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("german");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    imageURL: req.body.Logo,
    title: req.body.University_Name,
    degree: req.body.Course_Sub_Type,
    subject: req.body.Course_Name,
    Course_Link: req.body.Course_Link,
    Application_Link: req.body.Application_Link,
    City: req.body.City,
    State: req.body.State,
    Course_Ranking: req.body.Course_Ranking,
    Duration: req.body.Duration,
    German_Ranking: req.body.German_Ranking,
    Teaching_Language: req.body.Teaching_Language,
    Tuition_Fee: req.body.Tuition_Fee,
    Type_of_University: req.body.Type_of_University,
  };
  let collection = await db.collection("german");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      imageURL: req.body.Logo,
      title: req.body.University_Name,
      degree: req.body.Course_Sub_Type,
      subject: req.body.Course_Name,
      Course_Link: req.body.Course_Link,
      Application_Link: req.body.Application_Link,
      City: req.body.City,
      State: req.body.State,
      Course_Ranking: req.body.Course_Ranking,
      Duration: req.body.Duration,
      German_Ranking: req.body.German_Ranking,
      Teaching_Language: req.body.Teaching_Language,
      Tuition_Fee: req.body.Tuition_Fee,
      Type_of_University: req.body.Type_of_University,
    },
  };

  let collection = await db.collection("german");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("german");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
