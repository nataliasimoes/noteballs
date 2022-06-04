<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ contentLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link href="#" :to="`/noteEdit/${note.id}`" class="card-footer-item has-text-success-dark">Editar</router-link>
      <a href="#" class="card-footer-item has-text-success-dark" @click.prevent="storeNotes.deleteNote(note.id)">Deletar</a>
    </footer>
  </div>
</template>

<script setup>
/* imports */

import {computed} from 'vue'
import {useStoreNotes} from '@/stores/storeNotes'

/* store */

const storeNotes = useStoreNotes()


/* props */
const props = defineProps({
  note: Object,
});

/* content lengh */

const contentLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'Caracteres' : 'Caracter'

    return `${ length } ${description}`
})

</script>