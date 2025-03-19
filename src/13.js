const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Project123456</title>
</head>
<body>
    <h1>Welcome to Project123456!</h1>
    <p>This is a simple school project to demonstrate how to use GitHub.</p>
</body>
</html>`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
