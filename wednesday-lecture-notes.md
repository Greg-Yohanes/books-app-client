#Part one!

#Run LIVE-SERVER instead of nodemon from now on becasue nodemon is a static liver server where as "live-server" displays dynamicaly the back end to display an artifical version of fully functioning website 

#TIME STAMP 2:25pm VERBAL BREAKDOWN!!! Steps 1-6 
This will allow you to call a functino/object anytime you want

Change api url to launch heroku
work on master not branch when deplyoing to/from heroku
github takes a few minutes when deploying and updating from master

for step 1: add endpoint for GET request to api/vi/books/:id
^^this will get the specific ID of the row you want to retrieve from our books database

create a route, which has a corresponding GET function
that gunction will render a view and what it retrieves will pull from our backend database

#Step 2

#Demo for #1 2:40pm
HOW TO FETCH ONE!
app.get('api/vi/books/:id')
[req.params.id] in this part of the demo refers to REQUEST PARAMERTER OF ID
This is also were we put the query request for...
SELECT * FROM books WHERE book_id=$1

.then() sets your respond!

implimetn where we have our sections in index to from the you tube vido to new container clsses based off new title author
<div = "book-container">
<p>{{isbnl}}</p>
<img src = {{img_url}}></img>
<p>{{title}}</p>
<p>{{author}}</p>
<p>{{descirption}}</p>
<button type="button" <a href="/books/{{books_id}}"></a> </buton>
</div>

thus us dynanuicamky gernerateing the anchor tags. We now have to setup ajax to listen to those anchor tag 

#Video 2: Setting the ajax listern within book.js
INDEX SHould be complete y then now writing code into book.js
Books.load all is like an array and event listener is something we can always look into for more data'

time stapmp 3:24pm

bookviedw.js allows oyu to hide and see everyting you need to see
call back tempokate "hadnlebars" from indx here

Tie in route.js component to intercept index anchors and templates 
The first line wil render the index to get data
2nd line for fetch one! based on params 
DONT FORGET TO INSTALL CDN FOR PAGES INTO SCTIP TAG IN THE INDEX
#END TME STAMP 3:50PM

#PART 3
Middle ware:
express- its a middle ware
it catches a requset, generates a thing, and makes a respond
So anything that falles along those lines, page.js, app.get, then., etc.

app.get is a request and a call back/end point

a request listener

