const getHouses = (GetHouses, app) => {
    app.get('/getHouses', async (req, res) => {
        const result = await GetHouses.find({}).sort({ _id: -1 }).toArray();
        res.send(result);
    })
}

module.exports = { getHouses }