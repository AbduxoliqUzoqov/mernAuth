import mysql from 'mysql2';

//delete from users where id = 2;
const pool = mysql.createPool({
    host: "localhost", 
    user: "root", 
    password: "",
    database: "chat_app"
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

const db=pool.promise();
export { db };