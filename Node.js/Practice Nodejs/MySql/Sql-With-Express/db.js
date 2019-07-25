const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'myuser',
    password:'mypass',
    database: 'mytestdb'
})

function getAllUsers()
{
    return new Promise(function(resolve,reject){
        connection.query(
            'SELECT * FROM PERSONS',
            function(err,rows,cols){
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve(rows);
                }
            }
        )
    })
}
function AddingUser(personObject)
{
    return new Promise((resolve,reject)=>{

        let age = parseInt(personObject.AGE);
        connection.query(
            `INSERT INTO PERSONS(NAME,AGE) VALUES(?,?)`,
            [personObject.NAME,personObject.AGE],
            function(err,result)
            {
                if(err)
                {
                    console.log("Error Happened " +err);
                    reject(err);
                }
                else
                {
                    console.log("result happened");
                    console.log(result);
                    resolve(result);
                }
                
            }
        )
    })
    
    
}
exports = module.exports = {
    getAllUsers,
    AddingUser
}