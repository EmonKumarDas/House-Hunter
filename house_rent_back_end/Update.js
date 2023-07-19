const UpdateBooked = (app, houseCollection, ObjectId) => {
    app.put('/UpdateBooked/:id', async (req, res) => {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
            return res.status(400).send('Invalid ID');
        }

        try {
            const result = await houseCollection.updateOne(
                { _id: new ObjectId(id) },
                { $set: { isAvailable: false } }
            );

            if (result.modifiedCount === 1) {
                res.send('House availability updated successfully.');
            } else {
            }
        } catch (err) {
        }
    });
};

module.exports = { UpdateBooked };
