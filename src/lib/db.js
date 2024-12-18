// db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',    // Your MySQL host (usually localhost)
  user: 'root',         // MySQL username (root by default)
  password: '', // Your MySQL password
  database: 'vle'       // Your MySQL database name
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database as ID ' + connection.threadId);
});

// Example Query
connection.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Query failed:', err.stack);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end();
