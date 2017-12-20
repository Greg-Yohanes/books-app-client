'user strict';

var app = app || {}; //semicolon necessary so it isnn't a run on to the next IFFEE line of code. 

(function(module) {
    var __API_URL__ = 'http://localhost:3000'; //in the IFFEE so the local host doesnt show to the client

    //ERROR function for the client to see
    function errorCallBack(err) {
        cjonsole.error(err)
        module.errorView.initErrorPage(err) 
    }

    function Book(RawBookObj) {
        Object.keys(rawBookObj).map(key => this[key] = rawBookObj[key]) //this creates a property for each book instance
    }

    Book.prototype.toHtml = function () {
           // let template = Handlebars.compile($('#book-list-template').text())
           // return template(this)
        return Handlebars.compile($('#book-list-template').text())(this)
    }

    Book.all = []
    //this take an array of book objects to book.all and create an object constructor and create new instance by book title
    Book.loadAll = rows => Book.all = rows.sort((a, b) => a.title - b.title).map(book => new Book(book))
    Book.fetchAll = callback =>
      $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback) //continue the console log off error from above


    module.Book = Book
})(app)

//TEST IN SERVER WITHOUT FRONT END
//api.jquery.com
//$.get(http://localhost:3000/avi/vi1/books')
//.then(console.log)
//TIMESTAMP 3:15 for 
//terminal: curl "http url thing like above paste here no postophies" and will run your back end work