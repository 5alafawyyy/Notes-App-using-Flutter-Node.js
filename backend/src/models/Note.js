const mongoose = require('mongoose');

// 1. Define Schema -> Note: id, userId, title, content, dateAdded
const noteSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    dateadded: {
        type: Date,
        default: Date.now,
    }
});

// 2. Create Model -> <model name> <schema> Note
module.exports = mongoose.model('Note', noteSchema);
