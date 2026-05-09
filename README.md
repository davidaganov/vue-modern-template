# Vue Modern Template

Vue 3 + Vite template: clean architecture, TypeScript, Tailwind CSS, and optional Pinia, vue-i18n, and Vitest—composed via `.webstack` when you use the official generator.

**Repository:** [github.com/davidaganov/vue-modern-template](https://github.com/davidaganov/vue-modern-template)

## Recommended setup: WebStack CLI

Use **[`@davidaganov/stack`](https://www.npmjs.com/package/@davidaganov/stack)** ([CLI source](https://github.com/davidaganov/stack)):

```bash
npx @davidaganov/stack
```

Pick **Vue Modern Template**, then:

| Mode            | What you get                                                                      |
| :-------------- | :-------------------------------------------------------------------------------- |
| **Empty**       | Minimal app from `.webstack/template-empty`.                                      |
| **Recommended** | Demo pages plus **Pinia**, **i18n** (vue-i18n + Polyglot Keeper), and **Vitest**. |
| **Custom**      | Demo pages; toggle **Pinia**, **i18n**, and **Unit tests** independently.         |

Vue Router and the demo routes/views live in the baseline **demo-pages** slice for any non-empty preset; they are not optional in the wizard. Disabling **i18n** or **Pinia** yields static English UI where those layers are omitted.

Maintainers: **[GUIDLINE.md](https://github.com/davidaganov/stack/blob/main/GUIDLINE.md)** in [davidaganov/stack](https://github.com/davidaganov/stack).

---

## Manual setup (clone this repository)

1. `npm install`
2. `npm run dev`
3. `npm run build` for production assets.

Requires **Node.js** v18+.

---

## Features

- Vite + Vue 3 with HMR.
- Clean and modern project structure.
- Tailwind CSS.
- Optional Pinia, vue-i18n + typed locale files, Vitest + Vue Test Utils.

---

## Internationalization (when enabled)

Locale JSON under `src/i18n/locales/`. Typical usage:

```typescript
import { useI18n } from "vue-i18n"

const { t } = useI18n()
t("home.hero.title")
```

`npm run translate` runs Polyglot Keeper sync when the **i18n** layer is present.

---

## Testing

```bash
npm test
npm run test:coverage
npm run lint
```

Vitest is only present when the **tests** module was selected in the wizard (or when working from the full reference checkout).

---

## Layout

- `src/` — Components, views, stores, router.
- `public/` — Static assets.
- `src/types/` — Shared TypeScript surface where applicable.

---

## License

MIT © David Aganov
