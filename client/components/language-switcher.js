Template.languageSwitcher.helpers({

  languages() {
    const obj = TAPi18n.getLanguages();
    const languages = [];
    for (const key in obj) {
      if (key) languages.push({ code: key, labels: obj[key] });
    }
    if (languages) return languages;
  },

  currentLanguage() {
    const currentLanguageCode = TAPi18n.getLanguage();
    const appLanguages = TAPi18n.getLanguages();
    for (const code in appLanguages) {
      if (code === currentLanguageCode) return appLanguages[code].name;
    }
  },

});


Template.languageSwitcher.events({

  'click [data-action="change-language"]'(e) {
    const lang = $(e.target).data('language');
    TAPi18n.setLanguage(lang);
    mo.setLocale(lang);
    moment.locale(lang);
  },

});
