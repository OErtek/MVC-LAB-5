const express = require('express');
const app = express();
const PORT = 3000;

const booksController = require('./controllers/books');
const authorsController = require('./controllers/authors');
const homeController = require('./controllers/home');

app.set('view engine', 'ejs');

app.get('/', homeController.getHomePage);
app.get('/book/list', booksController.getBooksList);
app.get('/author/list', authorsController.getAuthorsList);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
