const express = require('express');

const cors = require('cors');

const path = require('path');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/static', express.static(path.join(__dirname + '/public')));

app.get('/api', (req, res) => {
  res.json({ msg: 'API Route' });
});

app.post('/post/:data', (req, res) => {
  const data = req.params.data;

  console.log(data);

  res.json({ msg: `Data logged ${data}` });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
