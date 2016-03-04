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
        required: TAPi18n.__('add_book.title_error_required'),
      },
      author: {
        required: TAPi18n.__('add_book.author_error_required'),
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
          Bert.alert(TAPi18n.__('add_book.action_error'), 'warning');
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
