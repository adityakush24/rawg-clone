<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div bg-indigo-500>
    <RouterView />
  </div>
  <!-- <Navbar /> -->
</template>

<style>
  #app {
    background-color: black;
  }
</style>