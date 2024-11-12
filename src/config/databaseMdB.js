const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost/gitProject');
    console.log("mongodB connected");
};

module.exports = connect;