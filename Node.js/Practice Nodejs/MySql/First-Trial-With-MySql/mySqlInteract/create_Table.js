const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS PERSONS(
        ID INTEGER AUTO_INCREMENT PRIMARY KEY,
        NAME VARCHAR(50),
        AGE INTEGER
    )
    `,
    function(err,result)
    {
        if(err)
            console.log(err);
        else
            console.log("Created table successfully "+result);    
    }
)