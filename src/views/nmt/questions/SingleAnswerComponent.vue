<template>
  <div class="single-answer">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="answer-option"
      :class="{
        selected: selectedIndex === index,
        saved: savedAnswers === index
      }"
      @click="selectAnswer(index)"
    >
      <input
        type="radio"
        :id="randomIds[index]"
        :value="option"
        v-model="selected"
        @change.stop
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
    type: [Number, null],
    default: null,
  },
})

const letters = ['А.', 'Б.', 'В.', 'Г.', 'Д.', 'Е.', 'Ж.']
const options = props.data

const randomIds = ref([])
function generateRandomId() {
  return 'option-' + Math.random().toString(36).substring(2, 10)
}


  randomIds.value = options.map(() => generateRandomId())

const selectedIndex = ref(props.savedAnswers)
const selected = ref(props.savedAnswers !== null ? options[props.savedAnswers] : null)

watch(selected, (newVal) => {
  selectedIndex.value = options.findIndex(opt => opt === newVal)
  emit('update', selectedIndex.value)
})

function emitSave() {
  emit('save', selectedIndex.value)
}
defineExpose({ emitSave })

function selectAnswer(index) {
  selectedIndex.value = index
  selected.value = options[index]
}
</script>

<style scoped>
.single-answer {
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
