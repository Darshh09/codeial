const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', () => {
    console.log('Connected to Database :: MongoDb');
})

module.exports = db;