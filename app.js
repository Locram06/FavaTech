const express = require('express');
const ADODB = require('adodb');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\lenovo\Documents\sito\database.accdb;');
    const records = await connection.query('SELECT * FROM TableName');
    res.json(records);
    connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
