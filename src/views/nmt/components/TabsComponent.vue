<template>
    <nav class="tabs">
        <div class="tabs__container">
        <a class="tab active">
            Іспит
        </a>
        <a  v-if="sub.includes('m')" class="tab" target="_blank"href="https://testportal.gov.ua/wp-content/uploads/2022/04/ZNO_Math_dovidkovy-materialy.pdf">
            Математика: довідкові матеріали
        </a>
        <a v-if="sub.includes('p')" class="tab" target="_blank"href="https://testportal.gov.ua/wp-content/uploads/2024/01/Fizyka_dovidkovi-materialy-1.pdf">
            Фізика: довідкові матеріали
        </a>
        <a v-if="sub.includes('c')" class="tab" target="_blank"href="https://testportal.gov.ua/wp-content/uploads/2023/02/Hmiya_dovidkovi-materialy.pdf">
            Хімія: довідкові матеріали
        </a>
    </div>
   
</nav>
    
</template>
<script setup>

const { sub } = defineProps({
  sub: {
    type: Array,
    required: false
  }
});


</script>
<style scoped>
.tabs {
    
    width: 100%;
        padding-top: 2rem;
        background-color: white;
}
    .tabs__container {
        display: flex;
        width: 100%;
        background-color: white;
    }

    .tab {
        --a: transparent !important;
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
    }
    .tab {
       
        width: min-content;
        background-color: white;
        font-style: normal;
  font-size: 1rem;
  padding: 10px 15px 13px 15px;
  transition: all 0.5s;
  border-bottom-style: solid;
  background-color: transparent;
  border-bottom: solid 4px;
  border-color: transparent
    }
    .tab:hover {
        color: #e62050;
  border-bottom-style: solid;
  background-color: transparent;
  border-bottom: solid 4px;
    }
    .tab.active {
        color: #e62050;
  border-bottom-style: solid;
  background-color: transparent;
  border-bottom: solid 4px;
    }
</style>