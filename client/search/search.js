Meteor.subscribe('books.all');

Template.Search.events({
  'keyup form': function(e, tmpl) {
  	e.preventDefault();
		var myBooks = Books;
  	_.each($(e.currentTarget).find('input'), function (input) {
			if (! _.isUndefined($(input).val()) && $(input).val().length > 0) {
				// Build query
				var query = {};
	      query[$(input).attr('name')] = { $regex: RegExp.escape($(input).val()), $options: 'i' };
	      // Chain where method to narrow the search
				myBooks = myBooks.where(query);
			}
    });
    Session.set('books', myBooks.find().fetch());
  }
});

Template.Search.helpers({
	books: function () {
		return Session.get('books') || Books.find().fetch();
	}
});

// RegExp escape function (http://stackoverflow.com/a/3561711)
RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};