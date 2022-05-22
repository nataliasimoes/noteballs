<template>
  <div>
    <AddNewNote v-model="noteContent" bgColor="link" ref="addEditNoteRef">
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link is-light mr-2"
        >
          Cancelar
        </button>
        <button
        @click="saveClicked"
          class="button is-link has-link-success"
          :disabled="!noteContent"
          placeholder="Edit note"
        >
          Salvar Nota
        </button>
      </template>
    </AddNewNote>
  </div>
</template>

<script setup>
/* imports */
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import AddNewNote from '../components/notes/AddNewNote.vue'
import { useStoreNotes } from '../stores/storeNotes';

/* router */

const route = useRoute()
const router = useRouter()

/* store */

const storeNotes = useStoreNotes()

/* note */

const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

/*save clicked */

const saveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
    
}

</script>