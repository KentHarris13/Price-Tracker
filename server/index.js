require("dotenv").config()
const {PORT} = process.env
const express = require("express")
const cors = require("cors")
const app = express()
const controller = require("./controller")
const { favoriteList, getProducts, saveFavorite } = require('./controller.js')
const path = require ("path");

app.use(express.json())
app.use(cors())

//Added to try and get this to deploy
app.use(express.static(path.resolve(__dirname, "../build")));



// app.get("/", (req, res) => {res.send("Hello World")})

app.post("/api/user",controller.postUsers)
app.get('/products', getProducts)
app.put('/favorite', favoriteList)
app.post('/saveFavorite/:id', saveFavorite)

//added to try to get this to deploy
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})


app.listen(PORT,() => {console.log(`We have our headding to ${PORT}`)})