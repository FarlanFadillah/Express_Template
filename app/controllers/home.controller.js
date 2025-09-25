function homePage(req, res, next){
    res.status(200).render('pages/home');
}

module.exports = {
    homePage
};