<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop py-2 px-4">
    <router-view></router-view>
  </div>
</template>

<script setup>
/* imports */
import {onMounted} from 'vue'
import NavBar from "@/components/layout/NavBar.vue";
import {useStoreNotes} from '@/stores/storeNotes'

/* store */

const storeNotes = useStoreNotes()

/* mountend */

  onMounted(() => {
    storeNotes.getNotes()
  })
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
