<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" ref="newNoteRef" v-model="newNote" placeholder="Digite uma nova nota"></textarea>
        </div>
      </div>
  
      <div class="field is-grouped is-grouped-right ">
        <div class="control">
          <button @click.prevent="addNewNote" :disabled="!newNote" class="button is-link has-background-success">Adicionar Nota</button>
        </div>
      </div>
    </div>

    <Note
    :note="note"
    v-for="note in storeNotes.notes" :key="note.id"
    />    
  </div>
</template>


<script setup>
/* imports */

import {ref} from 'vue'
import Note from '@/components/notes/Note.vue'
import {useStoreNotes} from '@/stores/storeNotes'

/* store */

const storeNotes = useStoreNotes()

/* notes */

const newNote = ref('')
const newNoteRef = ref(null)

const addNewNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    newNoteRef.value.focus()
}


</script>
