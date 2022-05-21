<template>
    <div class="card mb-4">
      <div class="card-content">
        <div class="content">
         {{note.content}}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Editar</a>
        <a href="#" class="card-footer-item">Deletar</a>
      </footer>
    </div>
</template>

<script setup>
defineProps({
    note: Object
})
</script>