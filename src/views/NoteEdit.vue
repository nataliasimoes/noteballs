<template>
  <div>
    <AddNewNote v-model="noteContent" bgColor="success" label="Editar Nota" ref="addEditNoteRef" :placeholder="$t('noteEdit.editNotePlaceholder')">
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-success is-light mr-2"
        >
          {{$t('main.cancel')}}
        </button>
        <button
        @click="saveClicked"
          class="button is-success has-success-success"
          :disabled="!noteContent"
        >
          {{$t('main.save')}}
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