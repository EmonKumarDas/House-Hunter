const RegisterUser = (userCollection, app) => {
    app.post('/RegisterUser', async (req, res) => {
        try {
            const user = req.body;
            // Check if the user with the provided email already exists in the collection
            const existingUser = await userCollection.findOne({ user_email: user.user_email });
            if (existingUser) {
                res.send('exits');
            } else {
                const result = await userCollection.insertOne(user);
                res.send(result);
            }
        } catch (err) {
            console.error(err);
            res.status(500).send('Error inserting user into the database');
        }
    });
};

module.exports = { RegisterUser }