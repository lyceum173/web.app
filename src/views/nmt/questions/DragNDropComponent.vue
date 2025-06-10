<template>

      <div class="dropdown">
        <!-- QUESTIONS -->
        <div class="dropdown-list dropdown-list_questions">
          <div
            class="dropdown-row"
            v-for="(question, index) in questions"
            :key="'q' + index"
          >
            <span class="dropdown--item_question">{{ index + 1 }}. {{ question }}</span>
            <span class="arrow">&#8594;</span>
            <span
              class="dropdown--item_blank"
              @drop="handleDrop($event, index)"
              @dragover.prevent
            >
              <span v-if="matches[index]" class="dropdown--item">
                {{
                  letter[allAnswers.findIndex(a => a === matches[index])]
                }}
                {{ matches[index] }}
                <button class="dropdown--close" @click="removeAnswer(index)">
                  <span>&#10005;</span>
                </button>
              </span>
            </span>
          </div>
        </div>
  
        <!-- ANSWERS -->
        <!-- ANSWERS -->
<div class="dropdown-list dropdown-list_answers">
  <div
    class="dropdown-row"
    v-for="(answer, index) in availableAnswers"
    :key="'a' + index"
  >
    <span
      class="dropdown--item"
      :class="{ dragging: draggedAnswer === answer }"
      draggable="true"
      @dragstart="startDrag(answer)"
    >
    
      {{ letter[allAnswers.findIndex(a => a === answer)] }}
      {{ answer }}
    </span>
  </div>
</div>


    </div>
  </template>
  <script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['save', 'update:modelValue'])

const props = defineProps({
  data: {
    type: Array,
    required: true,
    validator: arr => arr.length === 2 && arr.every(a => Array.isArray(a)),
  },
  savedAnswers: {
    type: Object,
    default: () => ({})
  },
  modelValue: {
    type: Array,
    default: () => null
  }
})

const letter = ref(["А.","Б.","В.","Г.","Д.","Е.","Ж."])

const [questionList, answerList] = props.data
const questions = ref(questionList)
const allAnswers = ref(answerList)

const matches = ref([])

// Initialize matches from modelValue or fallback to savedAnswers
function initMatches() {
  if (props.modelValue && Array.isArray(props.modelValue)) {
    matches.value = [...props.modelValue]
  } else {
    matches.value = questionList.map((_, i) =>
      props.savedAnswers?.hasOwnProperty(i)
        ? answerList[props.savedAnswers[i]]
        : null
    )
  }
}
initMatches()

// Watch modelValue from parent and sync internal matches
watch(() => props.modelValue, (newVal) => {
  if (newVal && Array.isArray(newVal)) {
    matches.value = [...newVal]
  }
})

const draggedAnswer = ref(null)

const availableAnswers = computed(() => {
  return allAnswers.value.filter(a => !matches.value.includes(a))
})

function startDrag(answer) {
  draggedAnswer.value = answer
  console.log(this)
}

function handleDrop(e, questionIndex) {
  if (draggedAnswer.value !== null) {
    matches.value[questionIndex] = draggedAnswer.value
    draggedAnswer.value = null
    emit('update:modelValue', [...matches.value])
  }
}

function removeAnswer(questionIndex) {
  matches.value[questionIndex] = null
  emit('update:modelValue', [...matches.value])
}

// Method parent calls to save current matches as savedAnswers
function triggerSave() {
  const result = {}
  matches.value.forEach((answer, questionIndex) => {
    if (answer !== null) {
      const answerIndex = allAnswers.value.findIndex(a => a === answer)
      if (answerIndex !== -1) {
        result[questionIndex] = answerIndex
      }
    }
  })
  emit('save', result)
}

defineExpose({ triggerSave })
</script>

  
  
<style scoped>
* {
     box-sizing: border-box;
}
.main {
    margin-top: 5rem;
}
 .dropdown {
  display: flex;
  flex: 1 1 !important;
  /* justify-content: center; */
  position: relative;
  /* gap:0.5rem; */
  width: 100% !important;
  max-width:  100% ;
  /* box-sizing: border-box; */
}
 .dropdown-list_questions {

  box-sizing: border-box;
  background-color: #d7fdfb;
  width: calc(70% - 10px);
  margin-right: 20px;
 
}
.dropdown-list_questions .dropdown-row {

    display: grid !important;
    grid-template-columns: repeat(9, 1fr) !important;
}
.dropdown-row .dropdown--item_question{
    grid-column: span 4 / span 4;
}
.dropdown-row .dropdown--item_blank{
    grid-column: span 4 / span 4;
}
.dropdown-list_answers {
  width: calc(40% - 10px);
    flex-shrink: 0;
    box-sizing: border-box;
}

.dropdown--item.dropdown--item_blank:has(.dropdown--item) {
    padding: 0 !important;
    border: none;
}
.dropdown--item.dropdown--item_blank:has(.dropdown--item) .dropdown--item {
    margin: 0;
}
.dropdown-list {
  padding: 15px;
  border: 1px solid #999;
  border-radius: 10px;

  box-sizing: border-box;
}

.dropdown-list_answers {
      background-color: #D6FDD1;
}
 .dropdown-row {
  display: flex;
  position: relative;
  z-index: 1;
}
.dropdown-list.dropdown-list_questions {
  display: flex;
  flex-direction: column;
  gap:0.5rem;
}
.dropdown--item_question {
  padding: 10px;

  font-size: 16px;
  display: inline-block;
  width: 100%;

  border: 1px solid silver;
  border-radius: 5px;
  background-color: #bde5fd;
  word-break: break-word;
}
 .dropdown--item_blank .dropdown--item {
  background-color: #92f97c;
  width: 100%;
  margin-bottom: 0;
}
.dropdown--item_blank:has(.dropdown--item) {
  padding: 0;
  border: none;
}
.dropdown--item {
  padding: 10px;
  display: flex !important;
  font-size: 16px;
  display: inline-block;
  border: 1px solid silver;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: #bde5fd;
  word-break: break-word;
}

.dropdown--item button::after {
    content: "\00d7";
}

.dropdown--item button {
    font-size: 0.7rem;;
    padding: 0.5rem !important;
    position: relative;
    align-self: center;
    border: 1px solid #999;
    background: #eee;
    color: black;
    border-radius: 8px !important;
    box-shadow: none;
    display: flex;
    align-items: center;
    width: 24px;
  height: 24px;
  line-height: 20px;
    justify-content: center;
    border-radius: 4px;
}
.comparison_block .dropdown--close {
  display: none;
  background: #eee;
  border: 1px solid #999;
  border-radius: 4px;
  vertical-align: middle;
  margin-left: 10px;
  color: #222;
  padding: 0 5px;
  width: 24px;
  height: 24px;
  line-height: 20px;
}
.dropdown--item button:hover {
    background: #e62050;
    background-color: rgb(230, 32, 80);
    background-image: none;
  box-shadow: inset 0 1px 0 0 #e13f66;
  cursor: pointer;
  background-color: #d01d48;
  background-image: -webkit-linear-gradient(#d01d48,#b30c34);
  background-image: linear-gradient(#d01d48,#b30c34);
  transition: color .25s ease-in-out, background .25s ease-in-out, box-shadow .25s ease-in-out;
  color: #fff;
  text-shadow: 0 1px 0 #a6042c;
  border-color: #a6042c;

  border-radius: 8px !important;
}
.dropdown--item {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
}
.dropdown--item button span {
   font-weight: bold;
}
.dropdown--item button::after, .dropdown--item button::before {
    display: none !important
}
.dropdown--item_blank {
  padding: 10px;
  display: flex !important;
  font-size: 16px;
  display: inline-block;
  border: 1px solid silver;
  border-radius: 5px;

  background-color: #FFFFFFFF;
  word-break: break-word;
}
.dropdown-list_answers .dropdown--item {
    background-color: #92f97c;
    width: 100%;
}

span.arrow {
    text-align: center;
    height: min-content;
    align-self: center;
    color: grey;
    font-size: 2rem;
}
img {
    border:red solid;
    max-width: calc(100% - 2rem) !important;
}
</style>
<!-- <script setup>
function saveAnswer() {
  const rows = document.querySelectorAll('.dropdown-list_questions .dropdown-row');
  rows.forEach((row, index) => {
    const answerSpan = row.querySelector('.dropdown--item_blank .dropdown--item');
    if (answerSpan) {
      const answerText = answerSpan.textContent.trim();
      console.log(`${index}: ${answerText}`);
    }
  });
}

import CMS from '@/lib/cms';import { ref, computed } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const draggedAnswer = ref(null);

const questions = ref([
  { id: 1, text: 'електроліт (розчин кухонної солі)', answer: null },
  { id: 2, text: 'напівпровідник (силіцій)', answer: null },
  { id: 3, text: 'метал (ртуть)', answer: null },
  { id: 4, text: 'газ (аргон)', answer: null },
]);

let q = {"t": "st", "q": "set matvhing", a: [["1", "2", "3"],["a", "b", "c"]], c:{0:1, 1:0, 2:2}}

const allAnswers = ref([
  { id: 1, label: 'А.', text: 'wer' },
  { id: 2, label: 'Б.', text: 'за охолодження до температури, що близька до абсолютного нуля, електричний опір зникає' },
  { id: 3, label: 'В.', text: 'наслідком проходження електричного струму є виділення речовини на електродах' },
  { id: 4, label: 'Г.', text: 'за нагрівання до високої температури (понад 1000 °С) середовище з діелектрика стає провідником' },
  { id: 5, label: 'Д.', text: 'магнітної дії струму не спостерігають' },
]);

const availableAnswers = computed(() => {
  const usedIds = questions.value
    .filter(q => q.answer)
    .map(q => q.answer.id);
  return allAnswers.value.filter(a => !usedIds.includes(a.id));
});

function startDrag(answer) {
  draggedAnswer.value = answer;
}

function handleDrop(e, questionId) {
  const question = questions.value.find(q => q.id === questionId);
  if (question && draggedAnswer.value) {
    question.answer = draggedAnswer.value;
    draggedAnswer.value = null;
  }
}

function removeAnswer(questionId) {
  const question = questions.value.find(q => q.id === questionId);
  if (question) question.answer = null;
}

</script> -->