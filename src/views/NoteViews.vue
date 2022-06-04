<template>
  <div class="notes">
    <AddNewNote v-model="newNote" placeholder="Add a new note" ref="addEditNoteRef"> 
      <template #buttons>
        <button
          :disabled="!newNote"
          @click="addNewNote"
          class="button is-link has-background-success"
        >Adicionar Nota</button>
      </template>
    </AddNewNote>

    <Note
    :note="note"
    v-for="note in storeNotes.notes" :key="note.id"
    />    
  </div>
</template>


<script setup>
/* imports */

import {ref, watch} from 'vue'
import AddNewNote from '@/components/notes/AddNewNote.vue'
import Note from '@/components/notes/Note.vue'
import {useStoreNotes} from '@/stores/storeNotes'

/* store */

const storeNotes = useStoreNotes()

/* notes */

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNewNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
}

/* watch characters */

  watch(newNote, (newValue) => {
    if(newValue.length === 600){
      alert('Only 600 characters')
    }
  })


</script>
