FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('MasterLayout', { top: "Header", main: "BooksForm" });
  }
});