const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Meal = require('../models/meal')
const mongoose = require('mongoose')

const db = "mongodb+srv://benjamin:yankee92@cluster0-j4bhw.mongodb.net/unseenbiodb?retryWrites=true&w=majority"

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, err => {
    if(err) {
        console.log('Error ' + err)
    } else {
        console.log('Connected to mongoDB')
    }
})

router.get('/', (req, res) => {
    res.send('From api ')
})

router.post('/dietdiary', (req, res) => {
    let meal = new Meal({title: req.body.title, content: req.body.content, calories: req.body.calories})
    meal.save((error, addedMeal) => {
        if(error) {
            console.log(error)
        } else {
            res.status(200).send(addedMeal)
        }
    })
})

router.get('/dietdiary', (req, res) => {
    //get meals
})

module.exports = router