<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" is-size-4>NOTEBALLS</router-link>

        <a
          @click.prevent="showModalMobile = !showModalMobile"
          class="navbar-burger"
          :class="{ 'is-active' : showModalMobile}"
          aria-expanded="false"
          aria-label="menu"
          data-target="navbarBasicExample"
          role="button"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" ref="navBarMenuRef" class="navbar-menu " :class="{ 'is-active' : showModalMobile}">
        <div class="navbar-end">
          <RouterLink  @click="showModalMobile = false" active-class="is-active" to="/" class="navbar-item">
            {{$t('main.notes')}}
          </RouterLink>
          <RouterLink @click="showModalMobile = false" active-class="is-active" to="/stats" class="navbar-item">
            {{$t('main.stats')}}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/* imports */
import {ref} from 'vue'
import { onClickOutside } from '@vueuse/core'

/* click outside to close */

const navBarMenuRef = ref(null)
const navbarBurgerRef= ref(null)
 

onClickOutside(navBarMenuRef, (event) => {
  showModalMobile.value = false
  }, {
    ignore: [navbarBurgerRef]
  })


/* show modal  */
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