const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const port = 3000
const api = require('./routes/api')
const app = express()

app.use(cors())
app.use(bodyparser.json())

app.use('/api', api)

app.listen(port, function() {
    console.log('Server running on port ' + port + '...') 
})