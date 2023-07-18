const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001;
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})