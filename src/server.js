const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const query = `INSERT INTO users ( nome, email, data_nascimento ) VALUES ( 'nicholas', 'nicholasndev@gmail.com', STR_TO_DATE('29-03-1994', '%d-%m-%Y') )`
    db.query(query, (errors, result) => {
        console.log(errors)
        console.log(result)
    })
})

app.listen(3000, () => console.log('Server is running'))