const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');



let checkUserExistence = function(req,res,next){
    UserModel.find({email:req.body.email})
    .then(result=>{
        console.log(result);
        if(result.length>=1)
        {
            res.status(409).json({
            message:"Mail Id existed"
            })
        }
        else
        {
            next();
        }
        
    })
    .catch(err=>{
        next();
    })
}


router.post('/signup',checkUserExistence,(req,res,next)=>{

    bcrypt.hash(req.body.password,10,function(err,hash){
        if(err)
            {
                return res.status(500).json({
                error:err
            })
        }
        else
        {
                const user = new UserModel({
                name:req.body.name,
                email:req.body.email,
                password: hash   
                });
                user
                .save()
                .then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message:'User Created'
                    })
                })
                .catch(err=>{
                    console.log(err)
                    res.status(500).json({
                    message:err
                    })
                })
        }    
    })
    
})


router.post('/login',(req,res,next)=>{
   
    UserModel.findOne({email:req.body.email})
    .then(result=>{
        console.log("1");
        console.log(result.length);
        // if(result.length<1)
        // {
            
        //     return res.status(401).json({
        //         message:"Auth fialed"
        //     })
            
        // }
        bcrypt.compare(req.body.password, result.password, function(err, result1) {
            // res == true
            if(err)
            {
               return  res.status(404).json({
                    errorMessage:"Auth Failed"
                })
            }
            if(result1) 
            {
                const token = jwt.sign({
                    email:result.email,
                    userId:result._id
                },"process.env.JWT_KEY",
                {
                    expiresIn:"1h"
                },
                 )
                
                return res.status(200).json({
                    WelcomeMessage:"Welcome  "+ req.body.email,
                    Token : token
                })
            }
            res.status(404).json({
                errorMessage:"Auth Failed"
            })  
            
        });    
    })
    .catch(err=>{
        res.status(404).json({
            errorMessage:"Auth Failed"
        })
    })
})

module.exports = router;