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
        <div class="input">
            <input type="text" placeholder="Шукати">
        </div>
      <br>
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
        <div class="course-students">
          <p>{{course.students?.length || 0}}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/user-multiple-02-bulk-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path opacity="0.4" d="M4.25 7C4.25 4.37665 6.37665 2.25 9 2.25C11.6234 2.25 13.75 4.37665 13.75 7C13.75 9.62335 11.6234 11.75 9 11.75C6.37665 11.75 4.25 9.62335 4.25 7Z" fill="#FFFFFFFF"></path>
<path opacity="0.4" d="M1.25 19C1.25 15.8244 3.82436 13.25 7 13.25H11C14.1756 13.25 16.75 15.8244 16.75 19C16.75 20.5188 15.5188 21.75 14 21.75H4C2.48122 21.75 1.25 20.5188 1.25 19Z" fill="#FFFFFFFF"></path>
<path opacity="0.7" d="M13.374 11.4644C13.8812 11.6492 14.4288 11.75 15 11.75C17.6233 11.75 19.75 9.62335 19.75 7C19.75 4.37665 17.6233 2.25 15 2.25C14.4288 2.25 13.8812 2.35081 13.374 2.5356C14.5317 3.67 15.25 5.25111 15.25 7C15.25 8.74889 14.5317 10.33 13.374 11.4644Z" fill="#FFFFFFFF"></path>
<path opacity="0." d="M17.24 21.75H19.9995C21.5183 21.75 22.7495 20.5188 22.7495 19C22.7495 15.8244 20.1752 13.25 16.9995 13.25H15.416C17.1391 14.5754 18.2495 16.658 18.2495 19C18.2495 20.0488 17.8697 21.0088 17.24 21.75Z" fill="#FFFFFFFF"></path>
</svg>
  
        </div>
        <!-- SVG Background -->
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300 100">
          <defs>
            <filter id="blur" filterUnits="userSpaceOnUse" x="0" y="0" width="1000" height="500">
              <feGaussianBlur stdDeviation="100" />
            </filter>
            <filter id="noise" x="0" y="0" width="100%" height="100%">
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
              y="-60"
              width="600"
              height="320"
              :fill="color"
            />
          </g>
          <rect width="1000" height="500" style="mix-blend-mode: luminosity; filter: url(#noise); opacity: 20%" />
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
<div class="course-tags">
  <div class="tag" v-for="t in course.tags">{{ t }}</div>
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


const themeColors = {
  blue: ["#009DE5", "#01FFDD"],
  red: ["#FF0101", "#FFA07A"],
  green: ["#32CD32", "#7CFC00"],
  purple: ["#800080", "#DA70D6"],
  orange: ["#FFA500", "#FF6347"],
  yellow: ["#FFD700", "#FFFF00"],
  indigo: ["#4B0082", "#8A2BE2"],
  teal: ["#008080", "#20B2AA"],
  brown: ["#A52A2A", "#D2B48C"],
  gray: ["#708090", "#A9A9A9"],
  pink: ["#FFC0CB", "#FF69B4"],
  darkblue: ["#00008B", "#1E90FF"],
  silver: ["#C0C0C0", "#B0C4DE"],
  bluegray: ["#4682B4", "#B0E0E6"],
  darkgreen: ["#006400", "#32CD32"],
  peach: ["#FFDAB9", "#FFE4B5"],
  lime: ["#00FF00", "#ADFF2F"],
  amber: ["#FFBF00", "#FFD700"],
  lightblue: ["#ADD8E6", "#87CEFA"],
  magenta: ["#FF00FF", "#DA70D6"]
};

function generateStudents(count = 5) {
  return Array.from({ length: count }, (_, i) => `student${i + 1}`);
}

const rawCourses = [
  { id: 1, title: "Демо курс", description: "Демонстраційний курс", theme: "blue" },
  { id: 2, title: "Дизайн курс", description: "Основи дизайну", theme: "red" },
  { id: 3, title: "Кодування", description: "Веб розробка", theme: "green" },
  { id: 4, title: "UI/UX Основи", description: "Інтерфейси", theme: "purple" },
  { id: 5, title: "Мобільна розробка", description: "iOS/Android", theme: "orange" },
  { id: 6, title: "Основи Python", description: "Python 101", theme: "yellow" },
  { id: 7, title: "Машинне навчання", description: "AI/ML", theme: "indigo" },
  { id: 8, title: "React Native", description: "Кросплатформна розробка", theme: "teal" },
  { id: 9, title: "Бази даних", description: "SQL і NoSQL", theme: "brown" },
  { id: 10, title: "DevOps", description: "CI/CD", theme: "gray" },
  { id: 11, title: "Веб дизайн", description: "Графіка та UX", theme: "pink" },
  { id: 12, title: "Кібербезпека", description: "Захист систем", theme: "darkblue" },
  { id: 13, title: "Project Management", description: "Agile/Scrum", theme: "silver" },
  { id: 14, title: "TypeScript", description: "JS з типами", theme: "bluegray" },
  { id: 15, title: "Node.js API", description: "Бекенд розробка", theme: "darkgreen" },
  { id: 16, title: "HTML/CSS", description: "Фронтенд основи", theme: "peach" },
  { id: 17, title: "Vue 3", description: "Сучасний фронтенд", theme: "lime" },
  { id: 18, title: "Firebase", description: "Бекенд як сервіс", theme: "amber" },
  { id: 19, title: "SwiftUI", description: "iOS додатки", theme: "lightblue" },
  { id: 20, title: "GraphQL", description: "Гнучкий API", theme: "magenta" }
];

const courses = ref(
  rawCourses.map(course => {
    const colors = themeColors[course.theme] || ["#000", "#fff"];
    return {
      ...course,
      colors,
      tags: [...colors],
      students: generateStudents(Math.random() * 100)
    };
  })
);


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
.course-tags {
  display: flex;
  margin-top: 0.5rem;
  gap: 0.25rem;
  font-size: 0.75rem;
}
.tag {
  /* border: var(--accent) solid 1px !important; */
  color: #777777FF;
  background-color: #D7D7D74C;
  padding: 0.25rem;
  padding-left: 0.5rem;
  width: min-content;
  padding-right: 0.5rem;
  border-radius: .5rem;
}
@media (prefers-color-scheme: dark) {
.tag {
  /* border: var(--accent) solid 1px !important; */
  color: #62FFEAFF;
  background-color: #57F6E152;
  padding: 0.25rem;
  padding-left: 0.5rem;
  width: min-content;
  padding-right: 0.5rem;
  border-radius: .5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);


}
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.5rem;
}
.course-title {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  gap:0.5rem;
}
.course {
    background-color: rgb(255, 255, 255);
    padding: 0.5rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 1rem;
    border: ghostwhite solid 1px
}
@media (prefers-color-scheme: dark) {
    .course {
    background-color: #2C3554FF !important;
    padding: 0.5rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 1rem;
    border: rgb(53, 53, 84) solid 1px !important;
    color:  white;
}
}
.course-image {
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
    position: relative
}
.course-image svg {
    width: 100%;
    width: 100%;
    border-radius: .5rem;
}
.courses-actions {
    margin-top: 0.5rem;
    display: flex;
justify-self: end;
    gap: 0.25rem;
}

.course-students {
  position: absolute;
  display: flex;
  user-select: none;
  gap: 0.25rem;
  background-color: #D2D4D824;
  padding: 0.25rem;
  color: white;
  top: 0.5rem;
  left: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  backdrop-filter: blur(3px);
  box-shadow: 0 1px 3px 0 rgba(178, 162, 162, 0.1), 0 1px 2px -1px rgba(105, 105, 105, 0.1);
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  /* box-shadow: 0px 4px 24px 1px rgba(0, 0, 0, 0.28); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 0.25rem;
}
</style>