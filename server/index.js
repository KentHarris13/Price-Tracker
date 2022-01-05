require("dotenv").config()
const {PORT} = process.env
const express = require("express")
const cors = require("cors")
const app = express()
const controller = require("./controller")
const { favoriteList, getProducts, saveFavorite } = require('./controller.js')

app.use(express.json())
app.use(cors())

// app.get("/", (req, res) => {res.send("Hello World")})

app.post("/api/user",controller.postUsers)
app.get('/products', getProducts)
app.put('/favorite', favoriteList)
app.post('/saveFavorite/:id', saveFavorite)


app.listen(PORT,() => {console.log(`We have our headding to ${PORT}`)})