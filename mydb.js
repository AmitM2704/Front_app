const mysql = require('mysql');
const dbconn = mysql.createConnection({

    host : 'localhost',
    user: 'root',
    password:'',
    database:'mydb'
    
});

dbconn.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Database Connected!");
    }
});

module.exports =  dbconn;
