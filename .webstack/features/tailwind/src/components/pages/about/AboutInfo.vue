<script setup lang="ts">
// @webstack:about-info-imports

const features = [
  // @webstack:about-features
  { title: "Modern Vue 3", icon: "⚡" },
  { title: "TypeScript", icon: "📘" },
  { title: "Performance", icon: "🚀" },
  { title: "Modern Styling", icon: "🎨" }
]
</script>

<template>
  <div class="grid grid-cols-2 gap-3 w-full max-w-md">
    <div
      v-for="feature in features"
      class="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
      :key="feature.title"
    >
      <span class="text-xl">{{ feature.icon }}</span>
      <span class="text-sm font-medium text-gray-300">
        {{ feature.title }}
      </span>
    </div>
  </div>
</template>
