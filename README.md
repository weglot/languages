# Weglot Languages

### Flags

Available on cdn.weglot.com

`https://cdn.weglot.com/flags/{flag_type}/{code}.svg`

Where `flag_type` is one of
- rectangle_mat
- shiny
- circle
- square

And `code` is country code: `gb` or a language code `en`

Examples

- https://cdn.weglot.com/flags/rectangle_mat/fr.svg
- https://cdn.weglot.com/flags/circle/it.svg
- https://cdn.weglot.com/flags/square/en.svg
- https://cdn.weglot.com/flags/shiny/es.svg

**Remember:** country code has priority on language code

Example if you want a flag for the Belarusian language (ISO language code `be`),
`be` code is wrong because it's the Belgium ISO country code.
Languages don't have official flag. In this example you should use `by` country
code.


### JS usage

CommonJS

```js
const { languages } = require("@weglot/languages");
```

ESM

```js
import { languages } from "@weglot/languages";
```