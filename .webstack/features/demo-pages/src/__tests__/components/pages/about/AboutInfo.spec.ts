import { describe, expect, it } from "vitest"
import AboutInfo from "@/components/pages/about/AboutInfo.vue"
import { mountWithPlugins } from "@/__tests__/utils"

describe("AboutInfo", () => {
  it("renders feature items", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    const text = wrapper.text()
    // Check for some common features that are likely to be present
    const hasBaseFeatures = text.includes("Modern Vue 3")
    const hasI18nFeatures = text.includes("i18n Support") || text.includes("Поддержка i18n")
    expect(hasBaseFeatures || hasI18nFeatures).toBe(true)
  })

  it("renders feature items correctly", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    const items = wrapper.findAll(".about-info__item") // BEM
    const itemsTw = wrapper.findAll(".grid > div") // Tailwind
    expect(items.length > 0 || itemsTw.length > 0).toBe(true)
  })

  it("renders feature icons", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    const text = wrapper.text()
    // Check for some emoji icons
    const icons = ["⚡", "📘", "🚀", "🎨", "🏗️", "🌍", "📦", "🧪"]
    const found = icons.some(icon => text.includes(icon))
    expect(found).toBe(true)
  })
})
