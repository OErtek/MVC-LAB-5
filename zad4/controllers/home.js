const getHomePage = (req, res) => {
    res.render('home', {
        pageTitle: 'Home'
    });
};

module.exports = { getHomePage };
