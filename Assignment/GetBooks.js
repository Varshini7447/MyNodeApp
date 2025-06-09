const {Router} = require('express');
const router = new Router();
const Books=require('./BookStore');
router.get('/books',(req,res,next)=>
{  
    try{
    if(Books.length=== 0){
        return res.send("No books available");
}
    res.json(Books);
}
catch(error){
    next(error);  
}  
});

module.exports=router;