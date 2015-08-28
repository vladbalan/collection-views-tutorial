FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('MasterLayout', { top: "Header", main: "BooksList" });
  }
  , name: 'books.all'
});

FlowRouter.route('/top10', {
  action: function() {
    BlazeLayout.render('MasterLayout', { top: "Header", main: "TopList" });
  }
});

FlowRouter.route('/add-book', {
  action: function() {
    BlazeLayout.render('MasterLayout', { top: "Header", main: "BooksForm" });
  }
});