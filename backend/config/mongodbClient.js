const mongoose = require('mongoose');

const dbConnData = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE
};

mongoose
    .connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(response => {
        console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    })
    .catch(error => console.error('Error connecting to MongoDB', error));

module.exports = mongoose;