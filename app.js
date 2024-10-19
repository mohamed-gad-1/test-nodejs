const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js app on port 3030!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
