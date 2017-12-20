'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexView = function () {
    $('.container').hide()
    $('.book-view').show()
    module.Book.all.map(book => $('#book-list').append(book.toHtml()))
  }

  module.bookView = bookView
})(app)

$(function() {
  app.Book.fetchAll(app.bookView.initIndexView)
}) //$means jquery version of DOcument.ready