<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class=" columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{dateFormatted}}</small>
          <small class="column  has-text-right">{{ contentLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link href="#" :to="`/noteEdit/${note.id}`" class="card-footer-item has-text-success-dark">{{$t('main.edit')}}</router-link>
      <a href="#" class="card-footer-item has-text-success-dark" @click.prevent="modals.deleteNote = true">{{$t('main.delete')}}</a>
    </footer>
    <ModalDeleteNote :noteId="note.id" v-if="modals.deleteNote" v-model="modals.deleteNote"/>
  </div>
</template>

<script setup>
/* imports */

import {computed, reactive} from 'vue'
import { useDateFormat } from '@vueuse/core'
import {useStoreNotes} from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/notes/modalDeleteNote.vue'

/* store */

const storeNotes = useStoreNotes()


/* props */

const props = defineProps({
  note: Object,
});

/* date formatted */

const dateFormatted = computed(()=>{
  let date = new Date(parseInt(props.note.date))
  return useDateFormat(date, 'DD/MM/YYYY HH:mm')
})

/* content lengh */

const contentLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'Caracteres' : 'Caracter'
    return `${ length } ${description}`
})

/* modals */
const modals = reactive({
  deleteNote: false 
})
</script>