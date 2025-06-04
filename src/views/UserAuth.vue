<template>
<TechHeader v-if="authed"></TechHeader>
<main class="main" :class="{auth: !authed}">
        <div class="main__container">
            <div class="form-after" v-if="!authed"></div>
            <form v-if="!authed" class="form" id="authForm">
                <!-- <div class="form__logo">
 <img src="@/assets/logo.svg" alt="" width="100">
                </div> -->
                <div class="form__content">
                    <h2>Вхід</h2>
                    <p>Lyceum173 Web App</p>
                <!-- <img src="@/assets/logo.svg" alt="" width="100"> -->
                <!-- <br>
                <div class="input">
                    <label for="username">Login</label>
                    <input type="text" placeholder="-" id="username">
                </div>
                <div class="input">
                    <label for="password">Password</label>
                    <input type="password" placeholder="-" id="password">
                </div> -->
                <br>
                <p>Увійдіть використовуючи шкільни пошту</p>
            <p><strong>mail@lyceum173.kyiv.ua</strong></p>
                <br>
                <br>
                <button @click="authLogin">
                    <span  id="auth-button-text">
                    Увійти
                </span>

                <div class="loading" id="auth-button-loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button> 
            <br>
            <p class="comment">Використовуючи цей додаток Ви погоджуєтесь з <a class="policy" href="/privacy-policy" target="_blank">політикою конфіденційності</a> та <a class="policy" href="/terms-of-service" target="_blank">умовами користування</a></p>
                </div>
             
            </form>
            <div v-else class="page__content">
               <aside>
                <nav>
<router-link to="/manager/">Головна</router-link>
<router-link to="/manager/posts/">Публікації</router-link>
<router-link to="/">Сайт</router-link>
                </nav>
               
               </aside>
               <div class="content">
                asff
               </div>
            </div>
        </div></main>

</template>
<script setup>
// import "@/assets/css/"
import HeaderComponent from '@/components/HeaderComponent.vue';
import DashboardTemplate from '@/templates/DashboardTemplate.vue';
import TechHeader from '@/components/TechHeader.vue';
import { onMounted, ref } from 'vue';
const authed = ref(false)
import { auth, signInWithPopup, provider, signOut } from '@/assets/js/app';
// setTimeout(() => {
//     authed.value = true
// }, 5000)

onMounted(()=>{
    document.getElementById("authForm").addEventListener("submit", (e) => {
        e.preventDefault()
        // authed.value = true
    })
    // signOut(auth)

  
})
const authLogin = () => {
    document.getElementById("auth-button-text").classList.add("hide")
    document.getElementById("auth-button-loading").classList.add("show")
    signInWithPopup(auth, provider).then(u => {
        console.log(u)
    })
}


</script>
<style scoped>

.main {
    margin-top: 2.5rem;
}
p {
    color: black !important;
    opacity: 1 !important;
}
.comment {
    opacity: 0.5 !important;
    font-size: 0.75rem;
}
/* form img {
    margin: 0 auto;
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
} */
 .form__content {
    border-radius: 1rem;
    /* z-index: 200 !important; */
 }

 .form__content::after {
    position: absolute;
    bottom: -.5rem;
    border-radius: 1.5rem 1.5rem 1.5rem 1.5rem;
    right:-.5rem;
    content: " ";
    width: calc(100% + 1rem);
    height:calc(100% + 1rem);
    background: linear-gradient(45deg, var(--primary), var(--accent));

    z-index: -1!important;
 }
 button {
    position: relative;
 }

 a.policy {
    color: #269C8CFF;
    font-weight: bold;
 }
.loading {
    position: absolute;
    /* border:red solid .5px; */
    display: flex;
    justify-self: center;
    gap: .25rem;
    height: 18px;
    top: 50%;
    opacity: 0;
    transform-origin: center;
    left: 50%;
    transform: translate(-50%, -50%);
}
.loading[hidden] {
    display: none;
}

.loading {
  display: flex;
  gap: 8px;
}
#auth-button-text, #auth-button-loading {
    transition: all 0.3s ease-in;
}
#auth-button-text.hide {
    opacity: 0;
}
#auth-button-loading.show {
    opacity: 1;
   
}
.loading span {
  height: 7px;
  width: 7px;
  border-radius: 9999px;
  background-color: white;
  animation: loadingSteps 1.5s infinite ease-in-out;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes loadingSteps {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
 
  50% {
    transform: translateY(10px);
    opacity: 0.8;
  }
  
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.form-after {
    background: linear-gradient(45deg, var(--primary), var(--accent));
    top: 0;
    left: 0;
    width: 50dvw;
    height: 100dvh;
    content: " ";
    position: absolute;
}
.form-after::after {
    position: absolute;
    font-family: "MTA";
    content: "173";
    font-weight: bold;
    font-size: clamp(10rem, 32.5vw, 40rem);
    bottom: 0 !important;
    height: min-content;
    width: 100%;
    /* transform: translateY(3rem); */
    /* right: -12.5dvw; */
    /* transform: translateY(-50%) rotate(-90deg); */
    color: rgba(255, 255, 255, 0.245);

}

.main.auth {
    overflow: hidden;
    margin-top: 0px;
    /* background: linear-gradient(var(--accent), var(--primary)); */
}
form {
    display: flex;
    /* flex-direction: column; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 25rem;
    margin: 0 auto;
    background-color: white;;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    
    border-radius: 0.5rem;
}
@media (min-width: 768px) {

    .form__content {
        /* max-width: 50dvw !important;
        width: 100%!important;
    border-radius: 0rem; */
    margin: 0 auto;
 }
 .form__content::after {
    display: none;
 }
 form {
    max-width: 50dvw;
    height: 100dvh;
    width: 50dvw !important;
    display: flex;
    align-items: center;
    right: 0;
    top: 0;
    transform: none;
 }
}

@media (max-width: 768px) {
    form {
        flex-direction: column;
        /* border: red solid; */
    }
    .form__logo {
        width: 100%;
        display: block;
        max-width: none !important;
    }
    .form-after {
        width: 100dvw;
    }

    .form-after::after {
        font-size: 25rem;
    }
}
form > div {
    padding: 2rem;
    width: 100%;
}

form .form__logo {
    background: linear-gradient(-45deg, var(--accent) 30%, var(--primary));background-color: var(--primary);
    max-width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

form .form__content {
    background-color: white;
    max-width: 30rem;
    box-sizing: border-box;
    width: 100%;
}
form button {
    margin: 0 auto;
    width: 100%;
}

.main{
    width: 100%;
    height: 100%;
    max-width: 100dvw;

    padding: 0;
    overflow: hidden !important;
    margin-top: 3rem;
}
.main__container {
    max-width: 100dvw;
    padding: 0px;
    overflow: hidden;
}
/* .main.auth {
    background: linear-gradient(var(--primary), var(--accent));
} */

.form__content h2 {
    font-family: "MTA";
    font-weight: bold !important;
}
.form__content > p {
    margin-top: 8px;
    opacity: 0.5;
}
 .page__content {
    display: flex;
    /* border:red solid; */
    overflow: hidden !important;
    min-height: calc(100dvh - 48px) !important;
 }
.content {
    padding: 0.5rem;
}
 aside {
    background-color: var(--bg-dark);
    color: white;
    min-height: 100%;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
 }

 aside nav {
    display: flex;
    flex-direction: column;
 }
</style>