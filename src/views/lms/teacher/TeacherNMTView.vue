<template>
    <TeacherDashboardTemplate>
        <!-- <header class="lms-header">
                wet
        </header> -->
        
        <dialog id="newNmt" class="modal">
          <div class="modal-box">
            <h3 class="text-lg font-bold"></h3>
            <p class="py-4"></p>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn">Close</button>
              </form>
            </div>
        </div>
        </dialog>
        <div class="breadcrumb">
            <div class="breadcrumb-item">
                Огляд
            </div>
        </div>
        <button class="btn" onclick="newNmt.showModal()">Створити</button>
        <div class="input">
            <input type="text" placeholder="Шукати">
        </div>
      <br>
        <div class="courses">

             <div
      v-for="(nmt, index) in nmtList"
      :key="nmt.id"
      class="course"
      :class="nmt.theme"
      :data-theme="nmt.theme"
    >

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
          <h3>{{ nmt.title }}</h3>
        </div>
        <p class="course-description">{{ nmt.description }}</p>
      </div>
<div class="course-tags">
  <div class="tag">{{ nmt.s }}</div>
</div>
      <div class="courses-actions">
        <button>Переглянути</button>
        <button>Редагувати</button>
      </div>
    </div>
        </div>
    </TeacherDashboardTemplate>

</template>
<script setup>
import TeacherDashboardTemplate from '@/templates/lms/teacher/TeacherDashboardTemplate.vue'
import { ref, onMounted } from 'vue';

function generateStudents(count = 5) {
  return Array.from({ length: count }, (_, i) => `student${i + 1}`);
}

const nmtList = ref( [
  { id: 1, title: "Демо НМТ", description: "Демонстраційний Варіант НМТ", s: "Математика" },
]);


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