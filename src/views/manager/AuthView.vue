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
                    <h2>Sign In</h2>
                    <p>Адміністрування</p>
                <!-- <img src="@/assets/logo.svg" alt="" width="100"> -->
                <br>
                <div class="input">
                    <label for="username">Login</label>
                    <input type="text" placeholder="-" id="username">
                </div>
                <div class="input">
                    <label for="password">Password</label>
                    <input type="password" placeholder="-" id="password">
                </div>
                <br>
                <button>Увійти</button>
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
// setTimeout(() => {
//     authed.value = true
// }, 5000)
onMounted(()=>{
    document.getElementById("authForm").addEventListener("submit", (e) => {
        e.preventDefault()
        authed.value = true
    })
})
</script>
<style scoped>

.main {
    margin-top: 2.5rem;
}
/* form img {
    margin: 0 auto;
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
} */
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