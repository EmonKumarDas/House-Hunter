const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001;
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;

//implement jwt token
const jwt = require('jsonwebtoken');
const JWT_secret = "jkfhj3hkjh4k343435hk3jh50(){}e[]ddfdds66d667d76282992";
const { RegisterUser, LoginUser, userData, addHouse, bookHouse } = require('./PostData');
const { getHouses, bookedHouses } = require('./GetData');
const { getHousesByOwners, getBookedHouses } = require('./GetDatabyUser');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
})
// Middleware for JWT authentication
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Missing Token' });
    }

    jwt.verify(token, JWT_secret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden: Invalid Token' });
        }
        req.user = user;
        next();
    });
};

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
        const houseCollection = client.db("houseRent").collection("houses");
        const BookHouseCollection = client.db("houseRent").collection("booked");

        RegisterUser(userCollection, app)
        LoginUser(userCollection, app, jwt, JWT_secret)
        userData(userCollection, app, jwt, JWT_secret)
        getHouses(houseCollection, app)
        addHouse(houseCollection, app)
        getHousesByOwners(houseCollection, app)
        bookHouse(BookHouseCollection, app)
        getBookedHouses(BookHouseCollection, app)
        bookedHouses(BookHouseCollection, app)
    }
    finally { }
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})
