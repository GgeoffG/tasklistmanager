const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use('/api', api)
app.use(express.static('public'));

app.get('/', (_req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('*', (_req, res)=> res.sendFile('public/404.html'));


app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));