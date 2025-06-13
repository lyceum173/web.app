<template math>
  <HeaderLogin relative></HeaderLogin>

  <TabsComponent start></TabsComponent>
  <main class="main" nmt v-if="!blockAuthed">
    <div class="main__container">
      <div class="auth-cont">
        <h2>Код доступу</h2>
        <input type="text" maxlength="3" v-model="authCode">
        <button @click="verify">Верифікувати</button>
      </div>
    </div>
  </main>
  <main class="main" nmt v-else>
    <div class="main__container">
      
      <div class="test-header">
            <div class="test-header__top">
              <h3 class="test-header__title">Демо іспит</h3>
              <button @click="startTest">Розпочати тест</button>
            </div>
            <div class="test-header__bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                <path d="M9.00005 6L15 12L9 18" stroke="var(--nmt)" stroke-width="1.5" stroke-miterlimit="16"
                  stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div data-title>Національний мультипредметний тест</div>
            </div>
            <div class="test-header__bottom__bottom">

              <router-link data-title class="title_nmt" > <span class="icon fa fa-pencil-square-o" aria-hidden="true"></span>НМТ</router-link>
            </div>
          </div>

    </div>
  </main>
  <br>
  <footer class="wrapper wrapper-footer">
    <div class="holder">
      <div class="footer-holder">
        <div class="partner-item">
          <img src="/assets/img/logo_small.webp" alt="" @dragstart.prevent style="width: 100px">
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import TabsComponent from './components/TabsComponent.vue'
import HeaderLogin from '@/components/nmt/HeaderLogin.vue'
import DragNDropComponent from './questions/DragNDropComponent.vue'
import router from '@/router'
const blockAuthed = ref(false)
const authCode = ref("")
function verify() {
  if (authCode.value === "173") {
    blockAuthed.value = true
  }
}

function startTest() {
  router.push("/nmt/demo")
}

</script>
<style scoped>
.auth-cont {
  background-color: #ccc;
  border: gray solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem
}



.test-header__title {
  font-size: 2rem;
}

.test-header__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #e7e7e7;
}

.test-header__bottom {
  display: flex;
  flex-direction: row !important;
  margin-left: 2rem;
  margin-top: 1rem;
  padding-bottom: 0.25rem;
  border-bottom: #e7e7e7 solid 1px;
  width: calc(100% - 1rem);
}

.test-header__bottom__bottom {
  display: flex;
  margin-left: 4rem;
  flex-direction: row !important;
  margin-top: 1rem;
  padding-bottom: 0.25rem;
  border-bottom: #e7e7e7 solid 1px;
  width: calc(100% - 1rem);
  margin-bottom: 1rem;
  flex-direction: column;
}

.title_nmt {
  color: var(--nmt) !important;
}

.test-header__bottom svg {
  transform: rotate(90deg) !important;
}

.test-header {
  padding: 0px;
  border: 1px solid #e7e7e7;
  background-color: #fff;
  max-width: 1920px;
  margin: 0 auto;
}

</style>