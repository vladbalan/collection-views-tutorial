Tracker.autorun(function() {
	Meteor.subscribe(FlowRouter.getRouteName());
});

Template.BooksList.helpers({
	books: function () {
		return Books.find();
	}
});