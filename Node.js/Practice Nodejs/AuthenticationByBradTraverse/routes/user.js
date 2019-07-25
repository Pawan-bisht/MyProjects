var express = require('express');

var router = express.Router();


//register
router.get('/register',(req,res)=>{
    res.render('register');
})

//login
router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/register',

(req,res)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    // console.log(req.body.name);
    // req.checkBody('name','name cant be empty').notEmpty();
    // var error = req.validationErrors();
    // if(error)
    //     console.log('yes error');
    // res.end();
})


module.exports = router;