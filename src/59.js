const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/post', (req, res) => {
  const { body } = req;
  
  // Your code here
  console.log(body);
  res.send(body);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
