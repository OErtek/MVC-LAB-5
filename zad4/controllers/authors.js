class Author {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const getAuthorsList = (req, res) => {
    const authors = [];
    res.render('authors', {
        pageTitle: 'Authors',
        authors: authors.length > 0 ? authors : null
    });
};

module.exports = { getAuthorsList, Author };
