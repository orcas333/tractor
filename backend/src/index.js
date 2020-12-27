const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");


// Play loop
// 1. Deal & Bid cards
// 2. 


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/../../frontend/build")));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // res.send("Sending y'all a file...")
    // res.sendFile(path.join(__dirname, 'index.html'));
    res.sendFile(path.join(__dirname + "/../../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening http://localhost:${PORT}`);
});