Template.addBook.onRendered(function () {

  $('#add-book').validate({
    rules: {
      title: {
        required: true,
      },
      author: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Add a title',
      },
      author: {
        required: 'Add an author',
      }
    },
    submitHandler(form) {
      const $submitButton = $(form).find('input[type="submit"]').button('loading');

      const book = {
        title: $(form).find('[name="title"]').val(),
        author: $(form).find('[name="author"]').val(),
      }

      Meteor.call('addBook', book, (err) => {
        $submitButton.button('reset');
        if (err) {
          Bert.alert('Adding book failed', 'warning');
        } else {
          Bert.alert(`${book.title} added`, 'success');
          $(form).find('input[type="text"]').val('');
        }
      });
    }
  });

});

Template.addBook.events({

  'submit form'(e) {
    e.preventDefault();
  },

});
