const express = require('express');
const app = express();
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello World' };
  res.json(data);
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
