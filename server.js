const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()
const PORT = 5000


//engine 
const jsxEngine = require('jsx-view-engine')

// middleware
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//root route
app.get('/', (req, res) =>{
    res.send("Welcome to the pokemon app")
})

app.get('/pokemon', (req, res) =>{
    res.render("Index")
})

app.get('/pokemon/:id', (req, res) =>{
    res.render("Show", {place: req.params.id})
})

app.listen(PORT, () =>{
    console.log("listening to port "+ PORT)
})