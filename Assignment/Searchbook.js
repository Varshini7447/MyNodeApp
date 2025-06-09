const {Router} = require('express');
const router=new Router();
const Books=require('./BookStore');
router.get('/books/search',(req,res,next)=>{
    try{
    const {Title}= req.query;
    const searchtitle=Books.filter(book=>book.Title.toLowerCase().includes(Title.toLowerCase()));
    if(searchtitle.length===0){
        res.status(404).send("no book found");

    }
    res.send(searchtitle);
}
catch(error){
    next(error);
}

})
module.exports=router;