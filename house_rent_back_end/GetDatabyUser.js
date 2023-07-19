const getHousesByOwners = (GetHouses, app) => {
    app.get('/getHousesByOwners/:user_email', async (req, res) => {
        const { user_email } = req.params;
        try {
            const result = await GetHouses.find({ owner_name: user_email }).sort({ _id: -1 }).toArray();
            res.send(result);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error retrieving houses by owners');
        }
    });
};
const getBookedHouses = (bookedHousesCollection, app) => {
    app.get('/getBookedHouses/:user_email', async (req, res) => {
        const { user_email } = req.params;
        try {
            const result = await bookedHousesCollection.find({ "appendData.user_email": user_email }).sort({ _id: -1 }).toArray();
            res.send(result);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error retrieving houses by owners');
        }
    });
};


module.exports = { getHousesByOwners, getBookedHouses };
