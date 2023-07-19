const getHouses = (GetHouses, app) => {
    app.get('/getHouses', async (req, res) => {
        const result = await GetHouses.find({}).sort({ _id: -1 }).toArray();
        res.send(result);
    })
}
const bookedHouses = (bookhousesCollection, app) => {
    app.get('/bookedHouses', async (req, res) => {
        const result = await bookhousesCollection.find({}).sort({ _id: -1 }).toArray();
        res.send(result);
    })
}

module.exports = { getHouses,bookedHouses }