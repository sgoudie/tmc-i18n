Meteor.methods({

  toggleRead(bookId) {
    check(bookId, String);

    const book = Books.findOne(bookId, { read: 1 });
    const setting = book.read ? false : true;

    Books.update(bookId, {
      $set: {
        read: setting
      }
    });
  },

});
