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
 
 
const NewTaskSchema = {
    name: 'string'
 }
 
 const Taskies = mongoose.model("Taskies", NewTaskSchema);
  //API routes
app.get('/ToDo', function(req, res) {
    Taskies.find().then(movies => res.json(movies));
})

 app.post('/newTasks', function(req, res) {
     const name = req.body.name;
     const newTaskies = new Taskies({
         name
     });
    newTaskies.save();
 });


app.listen(port, function() {
    console.log("express is running");
})