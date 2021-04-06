const express = require('express');
const app = express();

app.use(express.json());

app.post('/mercadopago', (req, res) => {
  res.send(`hi ${req.body.name}`);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('server on port 3000');
});