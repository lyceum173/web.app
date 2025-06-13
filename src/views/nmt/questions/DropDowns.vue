<template>
    <div class="dropdown-component">
      <!-- Main question text -->

      <!-- Subquestions with dropdowns -->
      <div class="subquestion" v-for="(subquestion, subIndex) in subquestions" :key="subIndex">
        <span class="subquestion-text">{{ subquestion.question }}</span>
        <select
          class="dropdown"
          v-model="matches[subIndex]"
          @change="handleUpdate"
        >
          <option value="" selected disabled hidden>Виберіть відповідь</option>
          <option
            v-for="(option, optionIndex) in subquestion.a"
            :key="optionIndex"
            :value="optionIndex"
          >
            {{ option }}
          </option>
        </select>
      </div>
  
      <!-- Warning message -->
      <div v-if="question.warn" class="warning">
        Будь ласка, виберіть відповідь для всіх підпитань.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const emit = defineEmits(['update', 'save']);
  
  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
    savedAnswers: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
    question: {
      type: Object,
      required: true,
    },
  });
  
  // Initialize subquestions from props.question.subquestions or fallback to single subquestion
  const subquestions = ref(
    props.question.subquestions || [{ text: props.question.q }]
  );
  
  // Initialize matches: use modelValue if valid, else savedAnswers, else empty array
  const matches = ref(
    Array.isArray(props.modelValue) && props.modelValue.length
      ? [...props.modelValue]
      : props.savedAnswers.length
      ? [...props.savedAnswers]
      : Array(subquestions.value.length).fill('')
  );
  
  // Sync matches with modelValue changes
  watch(
    () => props.modelValue,
    (newVal) => {
      if (Array.isArray(newVal)) {
        matches.value = [...newVal];
      }
    },
    { immediate: true }
  );
  
  // Sync matches with savedAnswers changes
  watch(
    () => props.savedAnswers,
    (newVal) => {
      if (Array.isArray(newVal) && newVal.length) {
        matches.value = [...newVal];
      }
    },
    { immediate: true }
  );
  
  // Update parent when selections change
  const handleUpdate = () => {
    emit('update', [...matches.value]);
  };
  
  // Validate and save answers
  const saveAnswers = () => {
    if (matches.value.some(match => match === '')) {
      console.log('warn');
      props.question.warn = true;
      console.log(props.question);
  
      setTimeout(() => {
        delete props.question.warn;
      }, 3000);
  
      return;
    }
    delete props.question.warn; // Clear warning if valid
    const result = matches.value.map((match, index) => (match !== '' ? parseInt(match) : null));
    emit('save', result);
  };
  
  defineExpose({ saveAnswers });
  </script>
  
  <style scoped>
  .dropdown-component {
    margin-bottom: 20px;
  }
  .question-text {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .subquestion {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .subquestion-text {
margin-bottom: 0.5rem;

  }
  .dropdown {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
  }
  .warning {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }
  </style>