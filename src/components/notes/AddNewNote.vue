<template>
    <div class="card teste-bg p-4 mb-5" :class="`has-background-${ bgColor }-dark`">
      <div class="field">
        <div class="control">
          <label v-if="label" class="label has-text-white" :label="label">{{label}}</label>

          <textarea
            v-model="modelValue"
            @input="$emit('update:modelValue', modelValue)"
            class="textarea"
            :placeholder="placeholder"
            ref="textareaRef"
            v-autofocus
            maxlength="600"
          ></textarea>
        </div>
      </div>
  
      <div class="field is-grouped is-grouped-right ">
        <div class="control">
          <slot name="buttons"/>
        </div>
      </div>
    </div>
</template>

<script setup>
/* import */

import {ref} from 'vue'
import {vAutofocus} from '@/directives/vAutofocus'

/* props */

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor:{
      type: String,
      default: 'success'
    },
    placeholder:{
      type: String,
      default: 'Type something...'
    },
    label: {
      type: String
    }
})

/* emits */

const emits = defineEmits(['update:modelValue'])

/* focusTextarea */
const textareaRef = ref(null)

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})
</script>
