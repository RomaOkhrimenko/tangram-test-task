<template>
  <div class="layout">
    <Header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style scoped>
.layout {
  overflow: auto;
}
</style>
