var format = require('date-fns/format')

var locales = {
  en: require('date-fns/locale/en-US'),
  vi: require('date-fns/locale/vi'),
}

module.exports = function (date, formatStr) {
  return format(date, formatStr, {
    locale: locales[window.__localeId__] 
  })
}