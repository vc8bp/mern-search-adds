const mongoose = require('mongoose')
const { Schema } = mongoose;

const add = new Schema({
    companyId: {type: Number, require: true},
    primaryText: {type: String, require: true},
    headline: {type: String, require: true},
    description: {type: String, require: true},
    CTA: {type: String, require: true},
    imageUrl: {type: String, require: true}
})

module.exports = mongoose.model("Add", add);
