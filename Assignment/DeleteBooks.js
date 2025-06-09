const { Router } = require('express');
const router = new Router();
const Books = require('./BookStore');

router.delete('/books/:ID', (req, res) => {
    const bookid = req.params.ID;
    const index = Books.findIndex(b => b.ID == bookid);

    if (index === -1) {
        return res.status(404).send("Book with ID not found");
    }

    Books.splice(index, 1); 
    res.send("Book deleted successfully");
});

module.exports = router;
