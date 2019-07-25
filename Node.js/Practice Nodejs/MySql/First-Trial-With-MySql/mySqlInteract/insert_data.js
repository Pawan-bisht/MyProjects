const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})

const insert  = {
    name : process.argv[2],
    age:parseInt(process.argv[3]),
    
}
connection.query(
    `INSERT INTO PERSONS (NAME,AGE) VALUES(
        '${insert.name}',
        ${insert.age}
    )
    `,
    function(err,results){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(results);
        }
        connection.close();
    }
)