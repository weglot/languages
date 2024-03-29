# Weglot Languages

### Flags

Available on cdn.weglot.com

`https://cdn.weglot.com/flags/{flag_type}/{country_flag_code}.svg`

Where `flag_type` is one of
- rectangle_mat
- shiny
- circle
- square

And `country_flag_code` is country code: `gb`

Examples:

- https://cdn.weglot.com/flags/rectangle_mat/fr.svg
- https://cdn.weglot.com/flags/circle/it.svg
- https://cdn.weglot.com/flags/square/gb.svg
- https://cdn.weglot.com/flags/shiny/es.svg

### JS usage

CommonJS

```js
const { languages } = require("@weglot/languages");
```

ESM

```js
import { languages } from "@weglot/languages";
```

### How to make changes
After making a change on this repo, in order to make them available you need to do the followings:

- Change `$languages-repository-version` in `assets/css/styles.scss` with expected new version
- Run `npm run build`
- Tag your commit with expected new version 