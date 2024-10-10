import i18nConfig from "../../i18n.config.json"

export const INTL_JSON_DIR = "src/intl"
export const TRANSLATIONS_DIR = "public/content/translations"
export const TRANSLATED_IMAGES_DIR = "/content/translations"

export const DEFAULT_LOCALE = "en"
export const FAKE_LOCALE = "default"


const BUILD_LOCALES = process.env.BUILD_LOCALES
export const LOCALES_CODES = BUILD_LOCALES
  ? BUILD_LOCALES.split(",")
  : i18nConfig.map(({ code }) => code)