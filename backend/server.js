// Initialization
const express = require('express');
const app = express();


// App Routes
app.get('/', function (req, res) {
    res.send('Hello from main route');
});

app.get('/notes', function (req, res) {
    res.send('This is the notes page');
});


// Strating Server on PORT 3000
app.listen(3000, function () {
    console.log("Server started at PORT: 3000");
});
