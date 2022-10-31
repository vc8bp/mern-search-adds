const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/data"


const connectToMongo = () => {

    mongoose.connect(mongoURL)
    .then(
        () => console.log("connected successfullly")
    )
    .catch((err) => {
        console.log(err)
    })
}

module.exports = connectToMongo;