const express = require("express");
const path = require("path");
const fs = require("fs");
const ejs = require('ejs');
const app = express();
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const port = 80;
mongoose.connect('mongodb://localhost/classForms', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
// EXPRESS SPECIFIC STUFF
app.use(express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
app.set('view engine' , 'ejs') //set ejs 
// ENDPOINTS
app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('index.pug', params);
})

app.get('/factorial', (req, res)=>{
    
    const params = {}
    res.status(200).render('factorial.pug', params);
})
app.get('/fibonacci', (req, res)=>{
    
    const params = {}
    res.status(200).render('fibonacci.pug', params);
})
app.get('/temperature', (req, res)=>{
    
    const params = {}
    res.status(200).render('temperature.pug', params);
})
app.get('/currency', (req, res)=>{
    
    const params = {}
    res.status(200).render('currency.pug', params);
})
app.get('/square', (req, res)=>{
    
    const params = {}
    res.status(200).render('square.pug', params);
})
app.get('/registration', (req, res)=>{
    
    const params = {}
    res.status(200).render('registration.pug', params);
})
// 
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we are conected");
// });

const RegistrationSchema = new mongoose.Schema({
     name: String,
     scholer: String,
     phone: String,
     email: String
  });
  const Contact = mongoose.model('Contact', RegistrationSchema);
app.post("/registration" , (req , res)=>{

    var myData = new Contact(req.body);
       myData.save().then(()=>{
       res.send("Your data has been recorded in the database")
        
       }).catch(()=>{
       res.status(400).send("Sorry Your Data Is not Saved In Mongodb databse")
       })
})




// START THE SERVER
app.listen(port , ()=>{
    console.log(`your web page is loaded at localhost ${port}`)
});
