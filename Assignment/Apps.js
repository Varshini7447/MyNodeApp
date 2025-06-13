const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const logger=require('./Middlewares/log');
const Auth=require('./Middlewares/Auth');
const Errorhandler=require('./Middlewares/Error');
app.use(logger);

const PostBooks = require('./PostBooks')
const GetBooks= require('./GetBooks')
const GetID=require('./GetID')
const Putbooks=require('./Putbooks')
const DeleteBooks = require('./DeleteBooks')
const SearchBook=require('./Searchbook')

app.use('/add-book', PostBooks); 
app.use('/get-book',GetBooks);
app.use('/get-id',GetID);
app.use('/update',Auth,Putbooks);
app.use('/delete',Auth,DeleteBooks);
app.use('/search',SearchBook)

app.use(Errorhandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
