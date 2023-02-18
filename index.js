const express = require('express')
const mongoose=require("mongoose")
const studentRoutes= require('./routes/studentRoutes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const db=require("./config/keys").mongoURI
mongoose.connect(db)

const connection=mongoose.connection;
connection.once("open", () => {
    console.log("database connected")
})

app.use(studentRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})