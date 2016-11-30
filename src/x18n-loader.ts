import * as x18n from 'x18n'

export class X18nLoader {
    private i18n = {}

    constructor(lang?:string, langDefault?:string) {
        if (lang) {
            this.setLang(lang)
        }
        if (langDefault) {
            this.setLangDefault(langDefault)
        }
    }

    set(lang, i18nMessages) {
        // update plandynI18n object
        if (!this.i18n[lang]) {
            this.i18n[lang] = {}
        }
        Object.assign(this.i18n[lang], this.i18n[lang], i18nMessages)

        // update x18n configuration
        x18n.register(lang, this.i18n[lang])
    }

    setLang(lang) {
        x18n.set(lang)
    }

    setLangDefault(langDefault) {
        x18n.setDefault(langDefault)
    }

    t(messageKey, params?) {
        return x18n.t(messageKey, params)
    }
}