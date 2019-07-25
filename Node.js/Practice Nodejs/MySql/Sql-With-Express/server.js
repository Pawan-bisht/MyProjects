const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const apiRoutes = require('./routes/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','hbs');
app.use('/api',apiRoutes);
app.use('/public',express.static(__dirname+'/public'))

// app.get('/',(req,res)=>{
//     db.getAllUsers()
//     .then((persons)=>{
//         console.log(persons);
//         res.render('persons',{persons})
//     })
//     .catch(err=>{
//         res.render('error');
        
//     })
    
// })


// app.get('/add',(req,res)=>{
//     res.render('person_add');
// })


// app.post('/add',(req,res)=>{
//     let person = {
//         NAME: req.body.name,
//         AGE: req.body.age
//     } 
//     db.AddingUser(person)
//     .then()
//     .catch()
//     console.log(person);
//     res.redirect('/');

// })








app.listen(4000,()=>{
    console.log('Server runnig at 4000');
})