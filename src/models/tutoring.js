const mongoose = require('mongoose');

const tutoringSchema = new mongoose.Schema({
    day: { type: String, required: true },
    times: [{ type: String, required: true }]
});

const Tutoring = mongoose.model('Tutoring', tutoringSchema);

module.exports = Tutoring;
