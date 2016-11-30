# X18n-ts
- Typescript wrapper for X18n - A sane JavaScript internationalisation library

## Usage

```javascript
import {X18nLoader} from '../lib/x18n-ts'

let lang = 'fr'
let langDefault = 'en'
let bundle = new X18nLoader(lang, langDefault) // optional parameters - can be set later with setLang() or setLangDefault()

// set i18n messages
bundle.set('fr', {
    'hello': 'Bonjour',
    'bye': 'Au revoir'
})
bundle.set('en', {
    'hello': 'Hello',
    'bye': 'Bye'
})
bundle.set('fr', {
    'hello': 'Bonjour override' // override previous value
})

// get i18n message in current lang
bundle.get('hello') // 'Bonjour override'

// switch lang
bundle.setLang('en')

// switch default lang
bundle.setLangDefault('fr')

// get i18n message in current lang
bundle.get('hello') // 'Hello'
```
