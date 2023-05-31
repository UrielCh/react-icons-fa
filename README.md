# Font Awesome icons for deno / Preact

**License** [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)

**Project** [https://fontawesome.com/](https://fontawesome.com/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=fa)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/fa":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-fa@1.0.1/mod.ts",
    "react-icons/fa/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-fa/ico/",
  }
}
```

## Direct import sample

```ts
import { Fa500Px } from "https://deno.land/x/react_icons_fa@1.0.1/mod.ts"
```

## import_map import sample

```ts
import { Fa500Px } from "react-icons/fa"
```

## minimal import

```ts
import { Fa500Px } from "react-icons/fa/Fa500Px.ts"
```

## minimal import using default export

```ts
import Fa500Px from "react-icons/fa/Fa500Px.ts"
```

