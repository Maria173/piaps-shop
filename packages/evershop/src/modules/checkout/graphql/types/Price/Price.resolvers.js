const { getSetting } = require('../../../../setting/services/setting');

module.exports = {
  Price: {
    value: (rawPrice) => parseFloat(rawPrice), // TODO: Format for decimal value?
    currency: async (_, { currency }) => {
      const curr = currency || (await getSetting('storeCurrency', 'RUB'));
      return curr;
    },
    text: async (rawPrice, { currency }) => {
      const price = parseFloat(rawPrice); // TODO: Format for decimal value?
      const curr = currency || (await getSetting('storeCurrency', 'RUB'));
      const language = await getSetting('storeLanguage', 'ru');
      return new Intl.NumberFormat(language, {
        style: 'currency',
        currency: curr
      }).format(price);
    }
  }
};
