Books = new Mongo.Collection('books');

Books.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const BooksSchema = new SimpleSchema({

  title: {
    type: String,
    label: 'Title',
  },

  author: {
    type: String,
    label: 'Author',
  },

  read: {
    type: Boolean,
    label: 'Read',
    defaultValue: false,
  },

  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue() {
      const timestamp = new Date();
      if (this.isInsert) {
        return new Date();
      } else if (!this.isUpsert) {
        this.unset();
      } else {
        return {
          $setOnInsert: timestamp,
        };
      }
    },
  },

});

Books.attachSchema(BooksSchema);
