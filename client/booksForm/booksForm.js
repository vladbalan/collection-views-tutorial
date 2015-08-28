Template.BooksForm.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var doc = {};
    _.each($(e.currentTarget).find('input'), function (input) {
      doc[$(input).attr('name')] = $(input).val();
    });
    doc = _.extend(doc, { createdAt: new Date() });
    Books.insert(doc);
    $(e.currentTarget).find('input').val('');
  }
});
