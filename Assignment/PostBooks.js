const { Router } = require('express');
const router = new Router();
const Books = require('./BookStore');
router.post('/books', (req, res,next) => {
    try{
    const newBooks = req.body;
    for (const book of newBooks) {
        const { ID, Title, Author, ISBN } = book;
        if (!Title || !Author || !ISBN || !ID) {
            return res.status(400).send("Each book must have ID,Title, Author, and ISBN");
        }
        const existID = Books.some(b => b.ID === book.ID);
        const existISBN = Books.some(b => b.ISBN === book.ISBN);
        if (existISBN) {
            return res.status(400).send(`Book with ISBN ${ISBN} already exists`);
        }
        else if (existID) {
            return res.status(400).send(`Book with ID ${ID} already exists`);
        }
        else {
            Books.push(book);
        }
    }

    res.status(201).send(`${newBooks.length} books added successfully`);
}
catch(error){
    next(error);
}
});

module.exports = router;






