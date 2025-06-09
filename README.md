....INSTRUCTIONS ON HOW TO RUN THE APPLICATION....
STEPS:
1.Navigate into the project folder using the following command:"cd Assignment"
2.Run the application :"Node Apps.js"
3.You should see this message in the terminal : "Server is running on http://localhost:3000"
4.Open PostMan to test the Routes:
-> POST http://localhost:3000/add-book/books                         (TO ADD BOOKS)
-> GET http://localhost:3000/get-book/books                          (TO GET ALL BOOKS DETAILS)
-> GET http://localhost:3000/get-id/books/:ID                        (TO GET SINGLE BOOK DETAILS USING ID)
-> PUT http://localhost:3000/update/books/:ID                        (TO UPDATE DETAILS OF A BOOK USING ID)
-> DELETE http://localhost:3000/delete/books/:ID                     (TO DELETE DETAILS OF A BOOK USING ID)
-> GET http://localhost:3000/search/books/search?Title=(title name) (TO SEARCH FOR A BOOK USING TITLE )
