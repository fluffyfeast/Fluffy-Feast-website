import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 導入語言文件
import enTranslation from '/Users/jimmyng/Downloads/project/src/locales/eng/translation.json'; // 修正路徑
import zhCNTranslation from '/Users/jimmyng/Downloads/project/src/locales/sp-ch/translation.json'; // 修正路徑
import zhTWTranslation from '/Users/jimmyng/Downloads/project/src/locales/td-ch/translation.json'; // 修正路徑

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      'zh-CN': {
        translation: zhCNTranslation,
      },
      'zh-TW': {
        translation: zhTWTranslation,
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;