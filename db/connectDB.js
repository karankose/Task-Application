import mysql2 from 'mysql2';
const pool = mysql2.createPool({
    user : 'root',
    password : 'W@2915djkq#',
    host : 'localhost',
    connectionLimit : 100,
    database : 'Task_app'
})

export default pool;