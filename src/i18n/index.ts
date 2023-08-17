import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esTranslation from './locales/es.json'
import enTranslation from './locales/en.json'

i18n.use(initReactI18next).init({
  resources: {
    es: { global: esTranslation },
    en: { global: enTranslation }
  },
  lng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
