<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">{{$t('modalDeleteNote.deleteNote')}}</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
       {{$t('modalDeleteNote.modalCardDeleteText')}}
      </section>
      <footer class="modal-card-foot is-justify-content-end">
        <button class="button" @click="closeModal">{{$t('main.cancel')}}</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">{{$t('main.delete')}}</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/* imports */

import { onClickOutside } from '@vueuse/core'
import {ref} from 'vue'
import {useStoreNotes} from '@/stores/storeNotes'

/* props */

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId: {
        type: String,
        required: true
    }
})

/* click outside to close */

const modalCardRef = ref(null)
 

onClickOutside(modalCardRef, (event) => {
  showModalMobile.value = false
  })


/* emits */

const emit = defineEmits(['update:modelValue'])

/* store */

const storeNotes = useStoreNotes()

/* close modal */

const closeModal = () => {
    emit('update:modelValue', false)
}
</script>