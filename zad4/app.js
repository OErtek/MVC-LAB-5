const express = require('express');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override');

const booksController = require('./controllers/books');
const authorsController = require('./controllers/authors');
const homeController = require('./controllers/home');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get('/', homeController.getHomePage);
app.get('/book/list', booksController.getBooksList);
app.get('/author/list', authorsController.getAuthorsList);
app.get('/book/add', booksController.getAddBookForm);
app.post('/book/add', booksController.addBook);
app.delete('/book/delete/:id', booksController.deleteBook);
app.get('/book/:id', booksController.getBookById); // Yeni yol ekledik

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
