class Book {
    constructor(id, title, year, authorId) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.authorId = authorId;
    }
}

const books = [];

const getBooksList = (req, res) => {
    res.render('books', {
        pageTitle: 'Books',
        books: books.length > 0 ? books : null
    });
};

const getAddBookForm = (req, res) => {
    res.render('partials/add-book', { pageTitle: 'Add Book' });
};

const addBook = (req, res) => {
    const { title, year, authorId } = req.body;
    const id = books.length + 1;
    const newBook = new Book(id, title, year, authorId);
    books.push(newBook);
    res.redirect('/book/list');
};

const deleteBook = (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
        books.splice(index, 1);
    }
    res.redirect('/book/list');
};

module.exports = { getBooksList, getAddBookForm, addBook, deleteBook, Book };
