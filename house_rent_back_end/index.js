const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001;
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;

//implement jwt token
const jwt = require('jsonwebtoken');

const {RegisterUser } = require('./PostData');
const { getUsers } = require('./GetData');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.1mzdz4e.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("houseRent").collection("users");
        RegisterUser(userCollection, app)
        getUsers(userCollection, app)
      }

     finally { }
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})
