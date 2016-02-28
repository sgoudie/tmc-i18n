Meteor.methods({

  deleteBook(bookId) {
    check(bookId, String);
    Books.remove(bookId);
  },

});
