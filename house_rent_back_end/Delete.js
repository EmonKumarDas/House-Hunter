const deleteBookedHouse = (app, bookedCollection, ObjectId) => {
    app.delete('/deleteBookedHouse/:id', async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookedCollection.deleteOne(filter);
        res.send(result);
    })
}
module.exports = { deleteBookedHouse }