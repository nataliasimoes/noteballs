<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item" is-size-4 >NOTEBALLS</div>

        <a
          @click.prevent="showModalMobile = !showModalMobile"
          class="navbar-burger"
          :class="{ 'is-active' : showModalMobile}"
          aria-expanded="false"
          aria-label="menu"
          data-target="navbarBasicExample"
          role="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu " :class="{ 'is-active' : showModalMobile}">
        <div class="navbar-end">
          <RouterLink active-class="is-active" to="/" class="navbar-item">
            Notes
          </RouterLink>
          <RouterLink active-class="is-active" to="/starts" class="navbar-item">
            Starts
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ref} from 'vue'

const showModalMobile = ref(false)
</script>

<style scoped>
@media (max-width: 1023px) {
    .navbar-menu{
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>