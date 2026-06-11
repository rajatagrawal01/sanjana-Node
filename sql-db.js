const mysql = require('mysql2');

export const connection = mysql.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: 'root',  
  database: 'student_info'       
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to DB:', err);
    return;
  }
  console.log('✅ Connected to DB as id ' + connection.threadId);
});