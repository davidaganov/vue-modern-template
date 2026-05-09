<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { type Locale, LOCALES } from "@/types"

const { locale } = useI18n()

const availableLocales = computed(() => Object.values(LOCALES))

const switchLocale = (newLocale: Locale) => {
  locale.value = newLocale
}
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="l in availableLocales"
      class="lang-switcher__btn"
      :key="l"
      :class="{ 'lang-switcher__btn--active': locale === l }"
      @click="switchLocale(l)"
    >
      <span
        class="lang-switcher__text"
        :class="{ 'lang-switcher__text--active': locale === l }"
      >
        {{ l }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  padding: 0.25rem;
  backdrop-filter: blur(12px);
}

.lang-switcher__btn {
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  transition: all 0.3s;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  opacity: 0.6;
}

.lang-switcher__btn:hover {
  opacity: 1;
}

.lang-switcher__btn--active {
  background-color: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.3);
  opacity: 1;
}

.lang-switcher__text {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #9ca3af;
}

.lang-switcher__text--active {
  color: var(--color-primary, #8b5cf6);
}
</style>
