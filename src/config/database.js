const Mongoose = require('mongoose');


function connectDB() {
    const url = process.env.MONGO_URI;
    try {
        Mongoose.connect(url);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    const dbConnection = Mongoose.connection;

    dbConnection.on("connected", () => {
        console.log('Mongoose connected to', url);
    });


    dbConnection.on("error", (err) => {
        console.log('Mongoose connection error: ', err);
    });

    dbConnection.on("disconnected", () => {
        console.log('Mongoose disconnected');
    });

    process.on('SIGINT', () => {
        console.log('connection disconnnected')
    });
}




module.exports = {
    connectDB,
    Mongoose
}