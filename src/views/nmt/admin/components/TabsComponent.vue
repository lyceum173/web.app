<template>
    <nav class="tabs">
        <div class="tabs__container">
        <a class="tab active">
            Сесія
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
        border-bottom: rgb(196, 196, 196) solid 1px;
}
    .tabs__container {
        display: flex;
        width: 100%;
        padding: 0px;
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
  border-color: transparent;
  border-color: var(--nmt) !important;
    }
    .tab:hover {
        color: #000000;
  border-bottom-style: solid;
  background-color: transparent;
  border-bottom: solid 4px;
  
    }
    .tab.active {
        color: #000000;
        border-color: var(--nmt);
  border-bottom-style: solid;
  background-color: transparent;
  border-bottom: solid 4px;
    }
</style>