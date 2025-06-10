<template>
    <TeacherDashboardTemplate>
        <!-- <header class="lms-header">
                wet
        </header> -->
        <div class="breadcrumb">
            <div class="breadcrumb-item">
                Огляд
            </div>
        </div>
        <div class="courses">

             <div
      v-for="(course, index) in courses"
      :key="course.id"
      class="course"
      :class="course.theme"
      :data-theme="course.theme"
      ref="courseRefs"
    >
      <div class="course-image">
        <!-- SVG Background -->
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300 100">
          <defs>
            <filter id="blur" filterUnits="userSpaceOnUse" x="0" y="-100" width="400" height="300">
              <feGaussianBlur stdDeviation="100" />
            </filter>
            <filter id="noise" x="0" y="-10" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="1" octaves="3" result="turbulence" stitchTiles="stitch" />
              <feBlend in="SourceGraphic" in2="turbulence" mode="overlay" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#F000" />
          <g filter="url(#blur)">
            <rect
              v-for="(color, i) in course.colors"
              :key="i"
              :x="100 + i * 50"
              y="10"
              width="600"
              height="320"
              :fill="color"
            />
          </g>
          <rect width="100" height="100" style="mix-blend-mode: luminosity; filter: url(#noise); opacity: 20%" />
        </svg>
      </div>

      <div class="course-info">
        <div class="course-title">
          <!-- <div class="course-icon">
            <img
              :src="`https://cdn.hugeicons.com/icons/${course.icon}.svg`"
              alt="Course Icon"
              width="24"
              height="24"
            />
          </div> -->
          <h3>{{ course.title }}</h3>
        </div>
        <p class="course-description">{{ course.description }}</p>
      </div>

      <div class="courses-actions">
        <button @click="logRef(index)">Переглянути</button>
        <button @click="logRef(index)">Редагувати</button>
      </div>
    </div>
        </div>
    </TeacherDashboardTemplate>

</template>
<script setup>
import TeacherDashboardTemplate from '@/templates/lms/teacher/TeacherDashboardTemplate.vue'
import { ref, onMounted } from 'vue';

const courses = ref([
  {
    id: 1,
    title: "Демо курс",
    description: "Демонстраційний курс",
    theme: "blue",
    colors: ["#009DE5", "#01FFDDFF"],
  },
  {
    id: 2,
    title: "Дизайн курс",
    description: "Основи дизайну",
    theme: "red",
    colors: ["#FF0101", "#FFA07A"],
  },
  {
    id: 3,
    title: "Кодування",
    description: "Веб розробка",
    theme: "green",
    colors: ["#FF00FBFF", "#480064FF"],
  },
    {
    id: 3,
    title: "Кодування",
    description: "Веб розробка",
    theme: "black",
    colors: ["#000000FF", "#000000FF"],
  }
]);

const courseRefs = ref([]);

const logRef = (index) => {
  const element = courseRefs.value[index];
  console.log('Clicked course DOM element:', element);
};

onMounted(() => {
  console.log('All course refs:', courseRefs.value);
});
</script>
<style scoped>
.breadcrumb {
    display: flex;
    margin-bottom: 0.5rem;
}

.breadcrumb-item {
    color: rgb(132, 132, 132);
    opacity: 0.6
}

@media (prefers-color-scheme: dark) {
    .breadcrumb-item {
    color: rgb(180, 224, 255);
    opacity: 0.6
}
 
}
@media (prefers-color-scheme: dark) {
    .course {
    background-color: #2C3554FF !important;
    padding: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 0.5rem;
    border: rgb(62, 62, 117) solid 1px !important;
    color:  white;
}
}
.course-icon {
    background-color: rgba(255, 144, 85, 0.22);
    border-radius: 0.25rem;
    padding: 0.25rem;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1 !important;
}
.course-title {
    display: flex;
    gap: 0.5rem;
    align-items: center;

}
.course-icon svg * {
    stroke: rgb(255, 144, 85)
}
.courses {
  background-color: var(--lms-course-bg);
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

.course {
    background-color: rgb(255, 255, 255);
    padding: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 0.5rem;
    border: ghostwhite solid 1px;
    display: flex;
    flex-direction: row !important;
}
.course-image {
    border-radius: 0.5rem;
    overflow: hidden;
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;

}
.course-image svg {
    width: 100%;
    border-radius: 0.5rem !important;
    width: 30px !important;
    height: 30px !important;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.courses-actions {
    margin-top: 0rem;
    display: flex;
    margin-left: auto !important;
justify-self: end !important;
    gap: 0.25rem;
}
</style>