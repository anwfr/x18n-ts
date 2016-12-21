import * as x18n from "x18n";

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
        this.i18n[lang] = i18nMessages

        // update x18n configuration
        x18n.register(lang, this.i18n[lang])
    }

    override(lang, i18nMessages) {
        // override current messages
        let currentMessages = this.i18n[lang] || {}
        Object.assign(currentMessages, currentMessages, i18nMessages)

        this.set(lang, i18nMessages)
    }

    setLang(lang) {
        x18n.set(lang)
    }

    setLangDefault(langDefault) {
        x18n.setDefault(langDefault)
    }

    t(messageKey, ...params) {
        params.unshift(messageKey)
        return x18n.t.apply(this, params)
    }
}
