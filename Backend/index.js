const express = require("express");
const { MongoClient } = require("mongodb");
const userRoutes = require("./routes/user-routes");

const app = express();
const uri =
  "mongodb+srv://<username>:<password>@cluster0.lrw8npz.mongodb.net/?retryWrites=true&w=majority";

app.use("/api/user", userRoutes);

async function connectDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to database successfully!");
    const db = client.db("SocialMediaApp");
    const blogCollection = db.collection("Blog");
    return blogCollection;
  } catch (err) {
    console.log(err);
  }
}


connectDB();

const port = 3000
app.listen(port,()=>{
  console.log(`Server is Running on port ${port}`);
});
