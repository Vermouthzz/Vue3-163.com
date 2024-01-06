<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import NavFixed from './components/NavFixed.vue'
import { RouterView } from 'vue-router'
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)
const scrollBox = ref('')
</script>

<template>
  <div class="layout-container">
    <NavFixed v-if="y > 135" />
    <Header />
    <Nav ref="scrollBox" />
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>