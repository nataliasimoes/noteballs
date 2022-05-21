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
          <button @click="addNewNote" :disabled="!newNote" class="button is-link has-background-success">Adicionar Nota</button>
        </div>
      </div>
    </div>

    <Note
    :note="note"
    v-for="note in notes" :key="note.id"
    @deleteClicked="deleteNotes"
    />    
  </div>
</template>


<script setup>
/* imports */

import {ref} from 'vue'
import Note from '@/components/notes/Note.vue'

/* notes */

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
    {
        id: '1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neiaculis mauris.'
    },
    {
        id: '2',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
])

const addNewNote = () => {
    let currentTime = new Date().getTime(),
        id = currentTime.toString()

    let note = {
        id,
        content: newNote.value
    }

    notes.value.unshift(note)
    newNote.value = ''
    newNoteRef.value.focus()
}

const deleteNotes = idToDelete => {
    notes.value = notes.value.filter(note => {
      return note.id !== idToDelete
    })
}

</script>
