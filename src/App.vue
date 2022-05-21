<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop py-2 px-4">
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from "@/components/layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
