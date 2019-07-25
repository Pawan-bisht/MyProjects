const router = require('express').Router();

const db = require('../db.js');

router.get('/',(req,res)=>{

    db.getAllUsers()
    .then((persons)=>{
        res.send(persons)
    })
    .catch(err=>{
        res.send({error:err});
    })
})

router.post('/',(req,res)=>{
    let person = {
        NAME: req.body.name,
        AGE: req.body.age
    } 
    db.AddingUser(person)
    .then(ressult=>{
        console.log("We are at then")
        res.redirect('/api');
    })
    .catch(err=>{
        console.log("we are at catch");
        console.log(err);
        res.send("Error happened!!!!");
    })
})

 module.exports = router;