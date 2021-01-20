const express = require('express');
const app = express();
const port = 5000; //process.env.PORT || change after development

const API_KEY = process.env.MOVIE_DB_API_KEY;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api', (req, res) => {
  res.send({ api_key: API_KEY });
});