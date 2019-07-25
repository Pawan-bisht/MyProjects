const express = require('express');
const router = express.Router();
const OrderModel = require('../models/order');
const ProductModel = require('../models/product');
const mongoose = require('mongoose');


router.get('/',(req,res,next)=>{
    OrderModel.find()
        .populate('product','name price _id')
        .then(result=>{
        console.log(result)
        res.status(200).json({
            OrdersCount:result.length,
            Orders:result.map(docs=>{
                return {
                    _id:docs._id,
                    product:docs.product,
                    quantity:docs.quantity,
                    request:{
                        type:'GET',
                        url:'http://localhost:3000/orders/'+docs._id
                    }
                }
            })
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            ErrorMessage:err
        })
    })
    // res.status(200).json({
    //     message:'This is the order route to handling GET request'
    // })
});

router.post('/',(req,res,next)=>{
    
    ProductModel.findById(req.body.productId)
    .then(product=>{
        console.log(product);
        if(!product)
        {
            res.status(404).json({
                message:"NO PRODUCT FOUND!!!"
            });
        }
        let order = new OrderModel({
            quantity:req.body.quantity,
            product:req.body.productId
    
        })
        console.log(order);
         order.save()
        .then(result=>{
            console.log(result);
            res.status(201).json({
                message:"Order Created succesfully",
                createdOrderDetails:result,
                
            });
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json(err);
        }) 
    }) 
    .catch(err=>{
        res.status(500).json({
            ErrorMessage:err
        })
    })
});




router.patch('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'This is the patch for Order Id '+ req.params.orderId
    })
})


router.get('/:orderId',(req,res,next)=>{
    OrderModel.findById(req.params.orderId) 
    .select('quantity _id product')
    .populate('product')
    .exec()
    .then(doc=>{
        if(doc!==null)
        {
            console.log("We are here")
            res.status(201).json({
                orderDetails:doc
            })
        }
        else
        {
            res.status(500).json({
                message:"No product Exist for given ID"
            })
        }
        
    })
    .catch(err=>{
        res.status(501).json({
            message:err
        })
    })
});

router.delete('/:orderId',(req,res,next)=>{
    OrderModel.remove({_id:req.body.orderId}).exec()
    .then(data=>{
        console.log(data)
        res.status(201).json({
            message:"Order Deleted successfully",
            orderDetail:data
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:"Order Deleted successfully",
            orderDetail:data
        })
    })
});

module.exports = router;