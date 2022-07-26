/*const express = require('express')
const bodyParser = require('body-parser')*/

import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express()

const PORT = 5000;

app.use(bodyParser.json())

//routes

app.use('/users', usersRoutes)

app.get("/",(request,response) => {response.send("Hello Yassine!!") })

app.listen (PORT, () => {
    console.log(`Server running on Port :${PORT}`)
})