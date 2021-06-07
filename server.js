const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
mongoose.connect('mongodb+srv://Jon:Password@cluster0.mipjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const todosboi = {
    text: String,
    }

const Todosinit = mongoose.model("Todosinit", todosboi);


app.use(bodyParser.json());
app.use(cors());
 
//data schema and model
const movieSchema = {
    title: String,
    genre: String,
    year: String
}

const Movie = mongoose.model("Movie", movieSchema);

//API routes
app.get('/movies', function(req, res) {
    Movie.find().then(movies => res.json(movies));
})

app.listen(port, function() {
    console.log("express is running");
})