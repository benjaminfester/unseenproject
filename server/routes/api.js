const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const Meal = require('../models/meal')
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const saltRounds = 10

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

router.post('/register', (req, res) => {
    bcryptjs.hash(req.body.password, saltRounds, function(err, hash) {
        try{
            var user = new User({email: req.body.email, password: hash})
            if(req.body.email == null || req.body.email == '' || req.body.password == null || req.body.password == '') {
                res.send('Ensure email and password were provided')
            } else {
                user.save((err) => {
                    if(err) {
                        res.send(err + ' Email already exists')
                    } else {
                        const token = jwt.sign({
                            user: req.body.email
                        },
                        'secretKey',
                        {
                            expiresIn: "1h"
                        }
                        )
                        res.status(200).json({
                            message: 'User with email: ' + req.body.email + ' was created.',
                            token: token
                        })
                    }
                })
            }
        } catch(err) {
            console.log(err)
            res.status(400).send(err)
        }
    }) 
})

router.post('/login', (req, res) => {
    try {
        var user = User.findOne({email: req.body.email}).then(function(user) {
            if(!user) {
                return res.status(401).json({
                    message: 'Authentication failed. Wrong email or password'
                })
            } else {
                bcryptjs.compare(req.body.password, user.password, function(err, result) {
                    if(result) {
                        const token = jwt.sign({
                            email: req.body.email,
                        },
                        'secretKey',
                        {
                            expiresIn: "1h"
                        }
                        )
                        return res.status(200).json({
                            message: req.body.email + ' is now logged in.',
                            token: token    
                        })

                    } else {
                        res.status(401).json({
                            message: 'Authentication failed. Wrong email or password',
                            error: err
                        })
                    }
                })
            }
        })
    } catch(err) {
        console.log(err)
    }
})

router.post('/dietdiary', (req, res) => {
    let meal = new Meal({title: req.body.title, content: req.body.content, calories: req.body.calories})
    if(req.body.title == null || req.body.title == '' || req.body.calories == '' || req.body.calories == null) {
        res.send('Make sure to type in title and calories.')
    } else {

        meal.save((error, addedMeal) => {
            if(error) {
                console.log(error)
            } else {
                res.status(200).send(addedMeal)
            }
        })
    }
})

router.get('/dietdiary', (req, res) => {
    //get meals
})

module.exports = router