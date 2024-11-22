// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that listens for GET requests on the /comments endpoint
app.get('/comments', (req, res) => {
  // Respond with a JSON object
  res.json({
    comments: [
      { username: 'Todd', comment: 'lol' },
      { username: 'Skyler', comment: 'rofl' }
    ]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});