const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to GitHub!</h1>
    <p>Feel free to send me your own GitHub project if you'd like.</p>
  `);
});

app.listen(3000, () => console.log('Example app is running on http://localhost:3000'));
