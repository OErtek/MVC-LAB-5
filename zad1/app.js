const express = require('express');
const app = express();
const PORT = 3000;


const Book = require('./models/book');
const Author = require('./models/author');


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Continuing...');
});


app.use((req, res, next) => {
    res.status(404).send('Not Found');
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
