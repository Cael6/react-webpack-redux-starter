import i18next from 'i18next';

/**
  Here you can define your i18n (internationalization) configuration.
  Currently, it is using the dead-simple configuration (no async pulling).
  If you determine that async fetch would be better, please feel free to
  update.

  I also chose the first i18n component I found that had a "resonable" number of
  downloads. There may exist better options out there.

  To test another language, set lng to its key (ie; fr)

  In order to access these values, you need to include HoC into your components.
  Take a look at the counter for an example.
**/
export default i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "add": "Add",
        "add_slowly":  "Add Slowly"
      }
    },
    fr: {
      translation: {
        "add": "Ajouter",
        "add_slowly":  "Ajouter lentement"
      }
    }
  }
});
