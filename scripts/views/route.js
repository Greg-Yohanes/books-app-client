'use strict';

page('/', app.Book.fetchAll(app.bookView.initIndexPage))
page('/books:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage))

page() //call back for the a'bove code

//Part two crazy load of info!! ! !! ! !! ! !!
