FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('MasterLayout', { top: "Header", main: "BooksList" });
  }
});

FlowRouter.route('/add-book', {
  action: function() {
    BlazeLayout.render('MasterLayout', { top: "Header", main: "BooksForm" });
  }
});