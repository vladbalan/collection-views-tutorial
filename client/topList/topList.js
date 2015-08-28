Meteor.subscribe('books.top');

Template.TopList.helpers({
	books: function () {
		return Books.where({}, { limit: 10 }).find();
	}
});