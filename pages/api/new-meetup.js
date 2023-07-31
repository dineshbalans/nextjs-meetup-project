import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://dineshbalan:gbZYZ3bF2MJ3vmA2@cluster0.pvdzydv.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup Inserted SuccessFully"});
  }
};

export default handler;