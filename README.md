# Font Awesome icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/fa)](https://jsr.io/@preact-icons/fa)

**License** [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)

**Project** [https://fontawesome.com/](https://fontawesome.com/)

[See available icons here](https://react-icons.deno.dev/fa)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/fa": "jsr:@preact-icons/fa@^1.0.11/mod.ts",
    "react-icons/fa/": "jsr:@preact-icons/fa@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib fa

```ts
import { Fa500Px } from "jsr:preact-icons/fa@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { Fa500Px } from "react-icons/fa"
```

## import a single icon, downloading just one icon

```ts
import { Fa500Px } from "react-icons/fa/Fa500Px.ts"
```

or using default export

```ts
import Fa500Px from "react-icons/fa/Fa500Px.ts"
```

