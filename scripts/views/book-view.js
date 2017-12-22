'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexView = function () {
    $('.container').hide()
    $('.book-view').show()
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')))
  }

  bookView.initNewBook = function() {
    $('.container').hide()
    $('#one').show()
    $('#new-form').on('change', 'input, textarea', bookView.create);
    $('#new-form').on('submit', bookView.submit);
  }

  bookView.initDetailPage = function() {
    $('.container').hide()
    $('.detail-view').show()
    $('#detail-desc').empty()
    module.Book.all.map(book => {
      console.log(book);
      $('#detail-desc').append(book.toHtml('book-detail-template'))});      
  }

  bookView.create = function () {
    var book;
    $('#book-list').empty()
    book = new app.Book({
      author: $('#article-author').val(),
      title: $('#article-title').val(),
      isbn: $('#article-category').val(),
      image_url: $('#article-author-url').val(),
      description: $('#article-body').val(),
    });
    console.log('current book: ', book)
    $('#book-list').append(book.toHtml('book-list-template'));
   };

  bookView.submit = event => {
    event.preventDefault();
    let book = new app.Book({
      author: $('#article-author').val(),
      title: $('#article-title').val(),
      isbn: $('#article-category').val(),
      image_url: $('#article-author-url').val(),
      description: $('#article-body').val(),
    });
    console.log('book', book);
    book.insertRecord();
   
    window.location = '/';
  }

  module.bookView = bookView
})(app)

// $(function() {
//   app.Book.fetchAll(app.bookView.initIndexView)
// }) //$means jquery version of DOcument.ready