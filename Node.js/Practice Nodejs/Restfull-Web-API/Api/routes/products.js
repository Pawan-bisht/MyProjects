const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ProductModel = require('../models/product');


router.get('/',(req,res,next)=>{
    ProductModel.find()
    .select("name price _id")
    .then(result =>{
        console.log(result);
        const response = {
            count:result.length,
            products:result.map(doc=>{
                return {
                    name:doc.name,
                    price:doc.price,
                    _id:doc._id,
                    request:{
                        type:'GET'
                    }
                }
            })
        }
        res.status(200).json(
            response
        )
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message:err
        })
    })
});

router.post('/',(req,res,next)=>{
    console.log(req.body);

    let product = new ProductModel({
        name:req.body.name,
        price:req.body.price
    })
    console.log("We are at post");
    console.log(product);
    product.save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message:"This is the post route",
            createdProduct:{
                name:result.name,
                _id:result._id,
                price:result.price
            }
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message:err,
        })
    })  
});

router.patch('/:productId',(req,res,next)=>{
    const ID = req.params.productId;
    const updateOps = {};
    console.log(typeof req.body)
    
    for(const ops of req.body)
    {
        updateOps[ops.propName] = ops.value;
    }
    ProductModel.update({_id:ID},{$set:updateOps})
    .then(res=>{
        console.log(res);
        res.status(200).json(res);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})
router.get('/:productId',(req,res,next)=>{
    const ID = req.params.productId;
    ProductModel.findById(ID)
    .select('name price _id')
    .then(result=>{
        console.log(result);
        if(result==null)
        {
            res.status(201).json({
                message:"Document not found according to ur given ID"
            })
        }
        else
        {
            res.status(201).json({
                message:result
            })
        }
        
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message:err
        })
    })
});

router.delete('/:productId',(req,res,next)=>{
    const ID = req.params.productId
    ProductModel.remove({_id:ID})
    .then(result=>{
        console.log(result)
        res.status(200).json({
            message:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message:err
        })
    })
});

module.exports = router;