# X18n-ts
- Typescript wrapper for X18n - A sane JavaScript internationalisation library

## Usage

```javascript
import {X18nLoader} from '../lib/x18n-ts'

let lang = 'fr'
let langDefault = 'en'
let bundle = new X18nLoader(lang, langDefault) // optional parameters - can be set later

// set i18n messages
bundle.set('fr', {
    'hello': 'Bonjour',
    'bye': 'Au revoir'
})
bundle.set('en', {
    'hello': 'Hello',
    'bye': 'Bye'
})

// override i18n messages
bundle.override('fr', {
    'hello': 'Bonjour override'
})

// get i18n message in current lang
bundle.t('hello') // 'Bonjour override'

// switch lang
bundle.setLang('en')

// switch default lang
bundle.setLangDefault('fr')

// get i18n message in current lang
bundle.t('hello') // 'Hello'
```

## Credits
- [x18n](https://github.com/florian/x18n)