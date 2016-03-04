Template.bookList.onCreated(function () {
  this.dataReady = new ReactiveVar();
  this.autorun(() => {
    const handle = this.subscribe('book-list');
    this.dataReady.set(handle.ready());
  });
  mo.setLocale('en');
});

Template.bookList.onRendered(function () {

});

Template.bookList.helpers({

  books() {
    const books = Books.find();
    if (books) return books;
  },

  unreadBooks() {
    const bookCount = Books.find({ read: false }).count();
    return bookCount;
  },

  lastAdded() {
    const lastAdded = Books.findOne({}, { sort: { createdAt: -1 }});
    if (lastAdded) return lastAdded;
  }


});

Template.bookList.events({

  'click [data-action="toggle-read"]'() {
    const bookId = this._id;
    Meteor.call('toggleRead', bookId);
  },

  'click [data-action="delete-book"]'() {
    const bookId = this._id;
    const title = this.title;
    Meteor.call('deleteBook', bookId, (err) => {
      if (err) {
        Bert.alert('Delete book failed', 'warning');
      } else {
        Bert.alert(`${title} deleted`, 'success');
      }
    });
  }

});
