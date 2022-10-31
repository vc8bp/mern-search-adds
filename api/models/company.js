const mongoose = require('mongoose')
const { Schema } = mongoose;

const company = new Schema({
    name: {type: String, require: true},
    url: {type: String, require: true}
})

module.exports = mongoose.model("Company", company);

