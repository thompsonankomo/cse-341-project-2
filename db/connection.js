const mongoose = require('mongoose');

// Connection to database function
async function dbConnect(uri) {
    try {
        const conn = await mongoose.connect(uri, {
            dbName: 'test'
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = dbConnect;