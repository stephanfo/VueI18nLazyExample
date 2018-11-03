import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/lang/en-US'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: { 'en-US': messages }
})

const loadedLanguages = ['en-US'] // our default language that is preloaded

export const languagesAvailable = ['en-US', 'fr', 'de']

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function navigatorCloseLanguage () {
  const userLanguage = navigator.language
  if (languagesAvailable.includes(userLanguage)) {
    return loadLanguageAsync(userLanguage)
  } else if (userLanguage.includes('-')) {
    const userLanguageSplit = userLanguage.split('-')
    if (languagesAvailable.includes(userLanguageSplit[0])) {
      return loadLanguageAsync(userLanguageSplit[0])
    }
  }
  return 'en-US'
}

export function loadLanguageAsync (lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
