const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mealSchema = new Schema({
    title: String,
    content: String,
    calories: Number
})

module.exports = mongoose.model('meal', mealSchema, 'unseenbiomeals')