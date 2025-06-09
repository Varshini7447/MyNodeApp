const {Router}=require('express')
const router =new Router();
const Books=require('./BookStore');
router.put('/books/:ID',(req,res)=>
{   
    const bookid = req.params.ID;
    const book = Books.find(b => b.ID == bookid);
    if (!book) {
        res.status(404).send("Book with ID not found");
    }
    const{newtitle,newauthor,newisbn}=req.body;
    const existISBN=Books.some(b=>b.ISBN===newisbn);
    if(existISBN){
        res.send(`Book with ISBN ${newisbn} already exists`);
    }
    book.Title=newtitle;
    book.Author=newauthor;
    book.ISBN=newisbn;
   res.send("book updated successfully")

})
module.exports=router;
