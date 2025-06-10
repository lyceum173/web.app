<template>
  <div class="short-answer">
    <input
      type="text"
      v-model="answer"
      placeholder="Ваша відповідь..."
      @input="emitUpdate"
      :class="{ saved: isSaved }"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['save', 'update'])

const props = defineProps({
  savedAnswers: {
    type: String,
    default: '',
  },
})

const answer = ref(props.savedAnswers || '')

const isSaved = computed(() => answer.value.trim() !== '' && answer.value === props.savedAnswers)

function emitUpdate() {
  emit('update', answer.value)
}

function emitSave() {
  emit('save', answer.value)
}

defineExpose({ emitSave })
</script>

<style scoped>
.short-answer input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  transition: border-color 0.3s, background-color 0.3s;
  max-width: 160px;
}

/* Styling when saved */
.short-answer input.saved {
  border-color: var(--nmt);
}
</style>
