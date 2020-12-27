const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Sending y'all a file...")
//   res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening http://localhost:${PORT}`);
});