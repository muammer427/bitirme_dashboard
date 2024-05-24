const express = require('express');
const pool = require('./db');
const router = express.Router();

// Define fixed columns for the product table
const columns = [
  { field: "id", type: "SERIAL PRIMARY KEY" },
  { field: "img", type: "TEXT" },
  { field: "barcode", type: "VARCHAR(150)" },
  { field: "title", type: "VARCHAR(250)" },
  // Add other fields here
];

// Create product table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS product (
    ${columns.map(col => `${col.field} ${col.type}`).join(', ')}
  );
`;

pool.query(createTableQuery, (err, res) => {
  if (err) {
    console.error('Error creating table:', err.stack);
  } else {
    console.log('Table "product" is ready');
  }
});

// Insert data into table
router.post('/add-product', async (req, res) => {
  const data = req.body;
  console.log('Received data to insert:', data);

  const fields = Object.keys(data).join(', ');
  const values = Object.values(data);
  const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

  const query = `INSERT INTO product (${fields}) VALUES (${placeholders}) RETURNING *`;

  try {
    const result = await pool.query(query, values);
    console.log('Data inserted:', result.rows[0]);
    res.status(200).send(result.rows[0]);
  } catch (err) {
    console.error('Error inserting data:', err.message);
    res.status(500).send(err.message);
  }
});

router.get('/products', async (req, res) => {
  console.log('Received request to fetch all products');
  const query = 'SELECT * FROM product';

  try {
    const result = await pool.query(query);
    console.log('Fetched products:', result.rows);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).send(err.message);
  }
});

router.get('/products/count', async (req, res) => {
  try {
    const result = await pool.query('SELECT COUNT(*) FROM product');
    const count = result.rows[0].count;
    res.json({ count });
  } catch (err) {
    console.error('Error fetching products count:', err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
