<template>
    <HeaderLogin relative login></HeaderLogin>
    <main  class="main">
        <div class="main__container">

            <form id="login" class="login-form" tabindex="-1" @submit.prevent>
                <div class="auth-error" hidden>
                <h4>Неможливо увійти.</h4>
                <ul>
                    <li>Невірно введені логін або пароль.</li>
                </ul>
            </div>
                <h2>Увійти</h2>
                <div class="form-field text-username">
                    <label for="login-username">
                        <span class="label-text">Логін</span>

                        <span id="login-username-required-label" class="label-required ">

                        </span>
                        <span class="icon fa" id="login-username-validation-icon"></span>
                    </label>

                    <input id="login-username" type="text" name="username" 
                    v-model = "username"
                        aria-describedby="login-username-desc login-username-validation-error" minlength="3"
                        maxlength="254" required="" value="">
                    <span id="login-username-validation-error" class="tip error" aria-live="assertive">
                        <span class="sr-only"></span>
                        <span id="login-username-validation-error-msg">
                            <ul class="fa-ul"></ul>
                        </span>
                    </span>
                    <span class="tip tip-input" id="login-username-desc">Уведіть логін, отриманий для входу до
                        системи</span>
                </div>
     
                <div class="form-field password-password">

                    <label for="login-password">
                        <span class="label-text">Пароль</span>

                        <span id="login-password-required-label" class="label-required hidden">

                        </span>
                        <span class="icon fa" id="login-password-validation-icon" aria-hidden="true"></span>


                    </label>
                    <input id="login-password" type="password" name="password" class="input-block " required=""
                        value=""
                        v-model = "password">


                    <span id="login-password-validation-error" class="tip error" aria-live="assertive">
                        <span class="sr-only"></span>
                        <span id="login-password-validation-error-msg">
                            <ul class="fa-ul"></ul>
                        </span>
                    </span>
                </div>

                <button type="submit" class="action action-primary action-update js-login login-button">Увійти</button>



            </form>
        </div>
    </main>
    <!-- <main v-else class="main">
      <div class="main__container seb-error">
        <h2>Помилка: доступ заборонено</h2>
        <h3>Цей іспит доступний лише за допомогою "Безпечного браузера іспитів"</h3>
      </div>
    </main> -->
    <footer class="footer ftr" style="box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75)">
        <div class="footer__container">
            <h2>СТВОРЕНО ЗА ПІДТРИМКИ</h2>
            <div class="footer__partners">
                <div class="partner-item">
                    <img src="https://lyceum173.kyiv.ua/assets/img/template/logo_small.webp" alt="" @dragstart.prevent>
                </div>
                <div class="partner-item">
                    <img src="https://pryima-oleksandr.web.app/assets/logo-header-CYQuUW4g.png" alt="" @dragstart.prevent>
                </div>
                <div class="partner-item">
                    <img src="https://roskad.work/assets/img/roskad.jpg" alt="" @dragstart.prevent>
                </div>
            </div>
        </div>
    </footer>
  

</template>
<script setup>
import HeaderLogin from '@/components/nmt/HeaderLogin.vue';
import { useHead } from '@vueuse/head';
import { onMounted, ref } from 'vue';
import "@/assets/nmt/css/style.css"
import router from '@/router';
const isSeb = ref(window.navigator.userAgent.includes("Seb"))
const username = ref("")
const password = ref("")
useHead({
    "title": "НМТ | Авторизація"
})




// Override console methods




// Keyboard shortcut: Cmd+L or Ctrl+L


function error(message) {
    document.querySelector(".auth-error").removeAttribute("hidden")
}

onMounted(() => {


    console.log(window.navigator.userAgent)
    const login_el = document.getElementById("login-username")
    // login_el.setCustomValidity("?")
        const password_el = document.getElementById("login-password")
        const admins = {"ad01fsa": "Росковшенко Адріан Олегович"}
    document.getElementById("login").addEventListener("submit", () => {
    
        if (username.value === "aud327") {
        if (password.value === "admin") {
            sessionStorage.setItem("n_displayName", "Колесникова Світлана Сергіївна")
           router.push("/nmt/admin/")
        } else {
            error("gds")
        }
       } 
       if (username.value === "tst173") {
        if (password.value === "tst173") {
            sessionStorage.setItem("n_displayName", "Тестовий користувач")
           router.push("/nmt/dashboard/")
        } else {
            error("gds")
        }
       } else {
         document.querySelector(".auth-error").setAttribute("hidden", true)
        setTimeout(() =>{
            error("gds")
        }, 300)
        
       }

        // router.push("/nmt/dashboard/")
    })

})

function exportLogs() {
    console.log("")
  const blob = new Blob([logs.value.join('\n')], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'console-output.txt';
  a.click();
}

</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    margin: 0 auto;
    width: 100%;
    max-width: 20rem;
    margin-top: 1rem;
}
input::-webkit-validation-bubble-icon {
display: none !important;
}
input::-webkit-validation-bubble-icon {
background: url(http://google.com/favicon.ico);
}
form h2 {
    margin-bottom: 0.5rem;
    color: #A0060E;
    font-size: 24px !important;
  line-height: 35.52px;
}
h2 {
    color: #e62050;
    font-weight: normal !important;
}
.footer {
    box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    font-family: "Open Sans";
}
* {
    overflow: hidden;
}
.main {

    font-family: "Open Sans";
    background-color: white;
}

.footer__partners {
    justify-content: center;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
}
.form-field input {
    padding: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    bordeR: rgba(128, 128, 128, 0.717) solid 1px;
    height: 2rem;
    line-height: 1.5em;
  border-radius: 0;
  font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 500;
}
.form-field span{
    font-size: 0.875rem;
}
.footer__container h2 {
    text-align: center;
    margin-top: 1rem;
    font-weight: 600 !important;
    margin-bottom: 1rem;
    width: 100%;
}

.log-dialog-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.log-dialog {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
}

.log-dialog pre {
  white-space: pre-wrap;
  font-family: monospace;
  max-height: 60vh;
  overflow-y: auto;
  margin-top: 1rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
}
label {
    font-weight: bold;
}

button{
    max-width: 7rem;
font-family: "Open Sans";
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6rem;padding: 1ex 1em;
    border-radius: 0px !important;
    box-shadow: inset 0 1px 0 0 #ff3d5c;
}
.partner-item img {
    border-radius: 9999px;
    max-width: 100px;
    height: 100px
    ;
    width: 100px;
}
.partner-item:first-child img {
    scale: 1.15
}
button {
    background-color: #e62050 !important;
    color: white;
    padding: 4px;
    border-color: #e62050 !important;
    border-radius: 4px;
}

button::after,
button::before {
    display: none;
}

.auth-error {
    background-color: #FAF3F3;
    padding: 1.5rem;
    border-bottom: 2px solid #A0060E;
    margin-bottom: 1rem;
}

.auth-error h4{
    color: #A0060E;
    margin-bottom: 0.5rem !important;
}

.seb-error * {
  color: black;
  font-weight: normal;
    opacity: 1;
}
.seb-error h3 {
  opacity: 0.5
}
.seb-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  align-items: center;
}
</style>