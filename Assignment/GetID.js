const {Router} = require('express');
const router = new Router(); 
const Books=require('./BookStore');
router.get('/books/:ID', (req, res,next) => {
    try{
    const bookid = req.params.ID;
    const book = Books.find(b => b.ID == bookid);

    if (!book) {
        return res.status(404).send("Book not found");
    }

    res.json(book);
}
catch(error){
    next(error);
}
});




module.exports=router;