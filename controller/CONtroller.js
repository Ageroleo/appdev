module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    faqs: (req, res) => {
        res.render('faqs');
    },
    more: (req, res) => {
        res.render('more');
    }
};