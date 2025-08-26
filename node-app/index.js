const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});
app.listen(3000, () => console.log('Express.js running on port 3000'));
