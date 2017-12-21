'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexView = function () {
    $('.container').hide()
    $('.book-view').show()
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')))
  }

  bookView.initDetailPage = function() {
    $('.container').hide()
    $('.detail-view').show()
    $('#detail-desc').empty()
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-detail-template')));
  }

  module.bookView = bookView
})(app)

// $(function() {
//   app.Book.fetchAll(app.bookView.initIndexView)
// }) //$means jquery version of DOcument.ready