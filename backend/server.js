require('dotenv').config();


const mongoose = require('mongoose');

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
            res.send('Hello from main route');
        });

        app.get('/notes', function (req, res) {
            res.send('This is the notes page');
        });

    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

