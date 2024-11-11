// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Initialize express and set the port
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup for parsing JSON requests
app.use(bodyParser.json());

// MySQL Connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hc920_tests',
    password: 'Test123!harry',
    database: 'hc920_testing',
    port: 3306
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Sign Up API Endpoint
app.post('/api/signup', (req, res) => {
    const { name, email, dob, gender, height, weight, password } = req.body;
    const sql = 'INSERT INTO users (name, email, dob, gender, height, weight, password) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [name, email, dob, gender, height, weight, password], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User created successfully!' });
    });
});

// Login API Endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';

    db.query(sql, [username, password], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
