Meteor.publish('book-list', function () {
  const books = Books.find({}, { sort: { createdAt: -1 } });

  if (books) return books;

  return this.ready();
});
