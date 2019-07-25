const express = require('express');
const request = require('request');
const app = express();
const locus = require('locus');


app.set('view engine','ejs');
app.use(express.static('public'));


app.get('/search',(req,res)=>{
    
    /**
     * Whenever we use form to submit a data the input field automatically make the url as
     * <URL>?<nameofinputfield> = <whatever we write in input field>
     */
    console.log("WE ARE DOOMED")
    var query = req.query.search;
    console.log(query);
    request('http://www.omdbapi.com/?apikey=thewdb&s='+query,(error,response,body)=>{
    var data = JSON.parse(body);
    if(error)
            console.log(error);
        else
            console.log(data);
         res.render('filter',{data:data});      
    })
   
})


app.get('/',(req,res)=>{
    res.render('search');
})


// request('https://jsonplaceholder.typicode.com/users/1',(error,response,body)=>{
//    //eval(locus); 
//    if(error)
//     {
//         console.log("Something goes wrong");
//         console.log(error);
//     }
//     else
//     {
//         var temp = {"pawan":"bisht"};
//         if(response.statusCode==200)
//         {
//             var data = JSON.parse(body);
//             console.log(data["address"]["city"]);
//         }
        
//     }
// })

console.log('We are here');
app.listen(4300,function(){
    console.log("Server is listening at port 4300 ");
})