// Date to ' x days ago'
Template.registerHelper('countBackDate', (date) => moment(date).fromNow());

// Date to dd/mm/yyyy
Template.registerHelper('calendarDate', (date) => moment(date).format('DD / MM / YYYY'));
