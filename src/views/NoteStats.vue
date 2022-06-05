<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>{{$t('noteStats.stat')}}</th>
          <th>{{$t('noteStats.value')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{$t('noteStats.numberNotes')}}</td>
          <td>{{storeNotes.totalNotesCount}}</td>
        </tr>
        <tr>
          <td>{{$t('noteStats.numberCharacters')}}</td>
          <td>{{storeNotes.totalLengthCharacters}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
/* imports */
import { useStoreNotes } from '@/stores/storeNotes';



/* store */
const storeNotes = useStoreNotes()
</script>