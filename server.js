const express = require('express');
const mongoose = require('mongoose');

const api = require('./routers/api/api');

const app = express();

//DB Config
const db = require('./config/config').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello Palash!'));

//Use Routes
app.use('/api', api);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
