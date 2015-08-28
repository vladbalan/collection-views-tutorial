Template.BooksList.helpers({
	books: function () {
		return Books.find();
	}
});