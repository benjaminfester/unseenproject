const express = require('express')
const bodyparser = require('body-parser')
const port = 3000
const api = require('./routes/api')
const app = express()


app.use(bodyparser.json())

app.use('/api', api)

app.get('/', (req, res) => {
    res.send('From server')
})

app.listen(port, function() {
    console.log('Server running on port ' + port + '...') 
})