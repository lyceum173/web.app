

<template>
  <div class="multiple-answers">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="answer-option"
      :class="{
        selected: selectedIndices.includes(index),
        saved: savedAnswers.includes(index)
      }"
    >
      <input
        type="checkbox"
        :disabled="!selectedIndices.includes(index) && selectedIndices.length >= 3"
        @change="toggleAnswer(index)"
        :id="randomIds[index]"
        :checked="selectedIndices.includes(index)"
      />
      <label :for="randomIds[index]">{{ option }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['save', 'update'])

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  savedAnswers: {
    type: Array,
    default: () => [],
  },
})

const options = props.data
const selectedIndices = ref([...props.savedAnswers])

// Generate stable random IDs once
const randomIds = ref(options.map(() => 'option-' + Math.random().toString(36).slice(2, 10)))

function toggleAnswer(index) {
  const pos = selectedIndices.value.indexOf(index)
  if (pos === -1 && selectedIndices.value.length < 3) {
    selectedIndices.value.push(index)
  } else if (pos !== -1) {
    selectedIndices.value.splice(pos, 1)
  }
  emit('update', [...selectedIndices.value])
}

function emitSave() {
  emit('save', [...selectedIndices.value])
}

defineExpose({ emitSave })
</script>


<style scoped>
.multiple-answers {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.answer-option {
  display: flex;
  align-items: center;
  transition: all 0.3s;
  gap: 0.5rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  background: transparent;
}
.answer-option.selected {
  border-color: var(--nmt);
}
.answer-option:hover {
  border-color: var(--nmt);
}

label {
  cursor: pointer;
}
</style>
