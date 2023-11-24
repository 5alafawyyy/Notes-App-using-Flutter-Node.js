// Initialization
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Note = require('./models/Note');

// For securing the credintial of DB
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// Use them in your MongoDB connection string
const connectionURL = `mongodb+srv://${username}:${password}@cluster0.fnv7hai.mongodb.net/notesdb`;

// Connect to MongoDB
mongoose.connect(connectionURL)
    .then(() => {
        console.log('Connected to MongoDB');

        // App Routes
        app.get('/', function (req, res) {
            const response = { statuscode: res.statusCode, message: "API Works!" };
            res.json(response);
        });

        const noteRouter = require('./routes/Note');
        app.use("/notes", noteRouter);
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

// Strating Server on a PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server started at PORT: " + PORT);
});
