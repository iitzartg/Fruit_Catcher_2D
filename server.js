const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the Unity WebGL build folder
app.use(express.static(path.join(__dirname, '/Build')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
