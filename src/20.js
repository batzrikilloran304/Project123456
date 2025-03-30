let express = require('express');
let app = express();

app.use(express.json());

// Sample route function
app.get('/api/data', (req, res) => {
  let data = {
    key1: 'value1',
    key2: 'value2'
  };

  return res.status(200).json(data);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
