const getUsers = (UserCollection, app) => {
    app.get('/getUsers', async (req, res) => {
        const result = await UserCollection.find({}).sort({ _id: -1 }).toArray();
        res.send(result);
    })
}
module.exports = { getUsers }