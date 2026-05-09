/// <reference types="vite/client" />

// JSON imports for i18n locales
declare module "*.json" {
  const value: Record<string, unknown>
  export default value
}
