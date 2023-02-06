const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

client.connect();

const createTableQuery = `
CREATE TABLE IF NOT EXISTS menu_items (
  id SERIAL PRIMARY KEY,
  value VARCHAR(255)
)`;

client.query(createTableQuery, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Table created successfully');
});

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/menu1', (req, res) => {
    res.render('menu1');
});

app.post('/menu2', (req, res) => {
    const { inputValue } = req.body;

    const insertQuery = `
    INSERT INTO menu_items (value)
    VALUES ($1)`;

    client.query(insertQuery, [inputValue], (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data inserted successfully');
        res.send({ status: 'success' });
    });
});

app.get('/menu2', (req, res) => {
    const selectQuery = `
    SELECT * FROM menu_items`;

    client.query(selectQuery, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        const items = result.rows;
        res.render('menu2', { items });
    });
});

const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
