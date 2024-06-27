<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/BarraNavegador.vue'
</script>

<template>
  <header>
    <Nav></Nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
