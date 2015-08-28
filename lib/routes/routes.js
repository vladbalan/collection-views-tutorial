FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('MasterLayout', { top: "Header", main: "BooksList" });
  }
  , name: 'books.all'
});

FlowRouter.route('/add-book', {
  action: function() {
    BlazeLayout.render('MasterLayout', { top: "Header", main: "BooksForm" });
  }
});