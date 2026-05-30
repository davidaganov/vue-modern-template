<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: var(--color-background, #111827);
  color: var(--color-text, #ffffff);
}
</style>
