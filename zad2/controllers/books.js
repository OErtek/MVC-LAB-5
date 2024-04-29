class Book {
    constructor(id, title, year, authorId) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.authorId = authorId;
    }
}

const getBooksList = (req, res) => {
    const books = [];
    res.render('books', {
        pageTitle: 'Books',
        books: books.length > 0 ? books : null
    });
};

module.exports = { getBooksList, Book };
