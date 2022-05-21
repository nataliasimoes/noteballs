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
      <a href="#" class="card-footer-item">Editar</a>
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClicked">Deletar</a>
    </footer>
  </div>
</template>

<script setup>
/* imports */

import {computed} from 'vue'


/* props */
const props = defineProps({
  note: Object,
});

/* emits */
const emit = defineEmits([
    'deleteClicked'
])

/* content lengh */

const contentLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'Caracteres' : 'Caracter'

    return `${ length } ${description}`
})

/* method delete */

const handleDeleteClicked = () => {
    emit('deleteClicked', props.note.id)
}
</script>