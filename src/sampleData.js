// sampleData.js

const mongoose = require('mongoose');
const Tutoring = require('./models/tutoring');

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
    console.log("Connected to MongoDB");

    try {
        await Tutoring.deleteMany({});

        const tutoringData = [
            {
                day: "Monday",
                times: ["10:00 AM", "1:00 PM"]
            },
            {
                day: "Tuesday",
                times: ["9:00 AM", "12:00 PM", "3:00 PM"]
            },
            {
                day: "Wednesday",
                times: ["11:00 AM", "2:00 PM", "5:00 PM"]
            },
            {
                day: "Thursday",
                times: ["10:00 AM", "1:00 PM", "4:00 PM"]
            },
            {
                day: "Friday",
                times: ["9:00 AM", "12:00 PM", "3:00 PM"]
            },
            {
                day: "Saturday",
                times: ["11:00 AM", "5:00 PM"]
            }
        ];

        await Tutoring.insertMany(tutoringData);
        console.log("Sample data inserted successfully");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting sample data:", error);
    }
});
