import i18next from "i18next";
import {initReactI18next}from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import{ TRANSLATIONS_EN } from "./en/translations"
import { TRANSLATIONS_FR } from "./fr/translations";

i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources:{
        en:{translation:TRANSLATIONS_EN},
        fr:{translation:TRANSLATIONS_FR}
    }
})
i18next.changeLanguage('en');