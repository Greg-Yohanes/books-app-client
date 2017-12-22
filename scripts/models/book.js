'use strict'

var app = app || {};

(function(module) {
  var __API_URL__ = 'http://localhost:3000';
  // var __API_URL__ = 'https://gn-yd-booklist.herokuapp.com';

  function errorCallBack(err) {
    console.error(err)
    module.errorView.initErrorView(err)
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).map(key => this[key] = rawBookObj[key]);
  }

  Book.prototype.toHtml = function(templateId) {
    let template = Handlebars.compile($(`#${templateId}`).text())
    return template(this);
    // return Handlebars.compile($(`#${templateId}`).text())(this)
  }

  Book.all = [];

  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

  Book.fetchOne = (id, callback) =>
  $.get(`${__API_URL__}/api/v1/books/${id}`)
  .then(Book.loadAll)
  .then(callback)
  .catch(errorCallBack)
  // Book.fetchOne = callback =>
  //   $.get(`${__API_URL__`)

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallBack)

  
//   Book.prototype.insertRecord = function(callback) {
//     $.post(`${__API_URL__}`, {author: this.author, image_url: this.image_url, body: this.description, isbn: this.isbn, title: this.title})
//    .then(console.log)
//    .then(callback);
// };

Book.create = function(book) {

  $.post(`${__API_URL__}/api/v1/books/new`,book)
    // .then(console.log('record inserted'))
    .catch(errorCallback)
}
//searches Google Books api for matches
Book.find = function(book, callback) {
  //console.log('book', book)

  $.get(`${__API_URL__}/api/v1/books/find`,book)
    .then(data => {
    //  console.log('find data', data)
      Book.loadAll(data);
    })
    .then(callback)
    .catch(errorCallback)
}

Book.delete = function(ctx) {
  $.ajax({
    url: `${__API_URL__}/api/v1/books/delete/${ctx.params.id}`,
    method: 'DELETE'
  })
    // .then(data => {
    //   console.log(data)
    // })
    .then(() => page('/'))
}

  module.Book = Book;
})(app)