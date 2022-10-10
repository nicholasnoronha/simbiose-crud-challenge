const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./app/routes/usersRoutes')
const bodyParser = require('body-parser')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(3000, () => console.log('Server is running'))