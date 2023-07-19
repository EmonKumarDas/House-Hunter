const RegisterUser = (userCollection, app) => {
    app.post('/RegisterUser', async (req, res) => {
        try {
            const user = req.body;
            // Check if the user with the provided email already exists in the collection
            const existingUser = await userCollection.findOne({ user_email: user.user_email });
            if (existingUser) {
                res.send('exists');
            } else {
                const result = await userCollection.insertOne(user);
                res.send(result);
            }
        } catch (err) {
            res.status(500).send('Error inserting user into the database');
        }
    });
};

const LoginUser = (userCollection, app, jwt, JWT_secret) => {
    app.post('/LoginUser', async (req, res) => {
        const { user_email, user_password } = req.body;
        try {
            const existUser = await userCollection.findOne({ user_email });

            if (!existUser) {
                return res.json({ error: "User not found" });
            }

            if (user_password === existUser.user_password) {
                const token = jwt.sign({ user_email: existUser.user_email }, JWT_secret);
                return res.status(201).json({ status: "ok", data: token });
            }

            res.json({ status: "error", error: "Invalid Password" });
        } catch (err) {
            res.status(500).json({ error: "An error occurred" });
        }
    });
};

const userData = (userCollection, app, jwt, JWT_secret) => {
    app.post('/userData', async (req, res) => {
        const { token } = req.body;
        try {
            const user = jwt.verify(token, JWT_secret);
            const userEmail = user.user_email;
            userCollection
                .findOne({ user_email: userEmail }) // Use 'user_email' instead of 'email'
                .then((data) => {
                    res.send({ status: "ok", data: data });
                })
                .catch((error) => {
                    res.send({ status: "error", data: error });
                });
        } catch (err) {
            res.send({ status: "error", data: err.message });
        }
    });
};

const addHouse = (houseCollection, app) => {
    app.post('/addHouse', async (req, res) => {
        try {
            const user = req.body;
            const result = await houseCollection.insertOne(user);
            res.send(result);
        }
        catch (err) {
            res.status(500).send('Error inserting user into the database');
        }
    });
};

module.exports = { RegisterUser, LoginUser, userData, addHouse };
