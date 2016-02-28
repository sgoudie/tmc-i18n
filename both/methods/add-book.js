Meteor.methods({

  addBook(book) {
    check(book, {
      title: String,
      author: String,
    });
    try {
      Books.insert(book);
    } catch (exception) {
      return exception;
    }
  },

});
