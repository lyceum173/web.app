<template>
    <HeaderLogin relative></HeaderLogin>
    <main v-if="isSeb" class="main" nmt>
<dialog id="code" class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Код доступу до блоку</h3>
        <br>
        <input type="text" maxlength="3" v-model="accessCode">
        <p class="py-4"></p>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn" @click="startExam()">Перейти до тесту</button>
            </form>
        </div>
</div>
</dialog>
        <div class="main__container">
            <p>Вступні випробування</p>
            <div  class="exam-item" v-if="agreeAccepted">
      <div class="exam-item__image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
      </div>
      <div class="exam-item__info">
        <p id="test-title">{{ testTitle }}</p>
        <button onclick="code.showModal()" id="start-exam" class="exam-button">
          <p v-if="testEnded">ТЕСТУВАННЯ ЗАВЕРШЕНО</p>
          <p v-else> ПЕРЕЙТИ ДО ТЕСТУ</p>
        </button>
      </div>
    </div>
            <div class="agreement-section" v-if="!agreeAccepted">
          <div class="agreement-content" id="agreementContent">
            <div class="agreement-content__text">
              <div class="agreement-content-text">
                <p>Ви увійшли на персональну сторінку в програмному засобі, за допомогою якого проводять НМТ (далі – сервіс НМТ).<strong> Перевірте</strong>, будь ласка, чи <strong>зазначені </strong>нижче<strong> прізвище, ім’я, по батькові</strong> (за наявності) та <strong>номер Сертифіката збігаються з Вашими</strong>. Якщо ні&nbsp;‒ повідомте про це старшого інструктора.</p>

<p>&nbsp; &nbsp; ПІБ - <b>{{  displayName }}</b>.<br>
<!-- &nbsp; &nbsp; Номер сертифіката - <b>749326969</b> -->
</p>

<p>Ознайомтеся з правилами проходження НМТ та правилами роботи із сервісом НМТ.</p>

<p><strong>Правила проходження НМТ</strong></p>

<p>1) ввічливо ставитися до учасників НМТ і працівників ТЕЦ;<br>
2) виконувати вказівки та вимоги працівників ТЕЦ щодо процедури проходження НМТ;<br>
3) ознайомитися з правилами проходження НМТ, підтвердити факт ознайомлення з ними та дотримуватися їх;<br>
4) після завершення часу, відведеного на виконання завдань, повернути старшому інструктору надані аркуші паперу для власних записів (далі – чернетка) та інші матеріали НМТ.</p>

<p><strong>Вам заборонено</strong>:</p>

<p>1) мати небезпечні предмети або речовини, що становлять загрозу для життя і здоров’я людини;<br>
2) копіювати (переписувати) завдання НМТ;<br>
3) виносити за межі аудиторії чернетку та інші матеріали НМТ;<br>
4) використовувати засоби зв’язку, пристрої зчитування, обробки, збереження, приймання, передавання та відтворення інформації під час перерви між етапами та протягом часу перебування в укритті.<br>
5) протягом часу, відведеного на виконання завдань:</p>

<ul>
	<li>порушувати правила проходження НМТ;</li>
	<li>заважати іншим учасникам;</li>
	<li>спілкуватися в будь-якій формі з іншим учасником, отримувати від нього чи передавати йому інформацію або матеріальні носії інформації;&nbsp;</li>
	<li>користуватися ресурсами мережі Інтернет, не передбачені процедурою НМТ;</li>
	<li>мати при собі або на своєму робочому місці засоби зв’язку, пристрої зчитування, обробки, збереження, приймання, передавання та відтворення інформації, а також окремі елементи, які можуть бути складовими частинами відповідних технічних засобів чи пристроїв, друковані або рукописні матеріали, інші засоби, предмети, прилади, що не передбачені процедурою НМТ (крім дозволених виробів медичного призначення, про наявність яких маєте повідомити працівників ТЕЦ до початку виконання роботи).</li>
</ul>

<p>Пам’ятайте, що в разі невиконання цих вимог Вас буде позбавлено права продовжувати роботу над тестом, а Ваші <strong>результати анулюють</strong>.</p>

<p><strong>Повідомте </strong>старшому інструктору, якщо у Вас <strong>погіршився стан здоров’я</strong> чи виникли <strong>проблеми в роботі сервісу НМТ</strong>.</p>

<p>Якщо Ви вважаєте, що щодо Вас допущено порушення процедури проведення НМТ, що може вплинути на Ваш результат, – <strong>до виходу з ТЕЦ</strong> подайте <strong>відповідальному за ТЕЦ апеляційну заяву</strong> щодо порушення процедури. Зауважте, подати таку заяву <strong>після виходу </strong>з ТЕЦ<strong> не можна.</strong></p>

<p>У разі <strong>оголошення повітряної тривоги</strong> Вас буде повідомлено про це, а&nbsp;<strong>роботу</strong> над тестом <strong>заблоковано</strong>. Ви матимете чітко дотримуватися вказівок старшого інструктора.</p>

<p>Якщо Ви <strong>не зможете завершити виконання роботи</strong> через виникнення нестандартних ситуацій в ТЕЦ або через різке погіршення стану здоров’я – Вам <strong>буде надано змогу</strong> пройти тест під час <strong>додаткових </strong>сесій (якщо в установлені терміни подасте заяву щодо участі в додаткових сесіях).</p>

<p>Після завершення виконання <strong>завдань кожного етапу</strong> Ви маєте підійти до старшого інструктора, <strong>здати чернетку</strong> й поставити підпис в Аудиторному протоколі.</p>

<p><strong>Правила роботи із сервісом НМТ</strong></p>

<p>Після натискання на кнопку «Розпочати роботу над тестом» Ви маєте ввести код доступу, який повідомить старший інструктор, після чого автоматично розпочнеться відлік часу, відведеного на виконання завдань. Розпочати роботу Ви можете з будь-якого предмета певного етапу. Час між предметами розподіляйте самостійно. Переходячи від одного предмета до іншого, уважно читайте спливні повідомлення. Повернутися до виконання завдань з окремого предмета й надати та зберегти відповіді можна протягом усього часу, відведеного на виконання завдань тільки певного етапу. Зауважте: після завершення першого етапу повернутися до виконання завдань з української мови та математики буде неможливо.</p>

<p>Для зарахування відповіді на завдання потрібно натиснути на кнопку «Зберегти відповідь», для виправлення відповіді – вибрати інший варіант і повторно натиснути на кнопку «Зберегти відповідь». На бічній панелі справа відображатиметься інформація про опрацювання Вами завдань.</p>

<p>За потреби можете користуватися довідковими матеріалами, що містяться у вкладці «Довідкові матеріали».</p>

<p>Якщо дочасно завершите роботу над завданнями відповідного етапу ‒ можете завершити його, натиснувши на кнопку «Завершити роботу над тестом». <strong>Будьте уважні</strong>: на екрані з’явиться напис з інформацією про те, на які завдання Ви не надали та/або не зберегли відповідей, – поверніться до них, надайте і збережіть відповіді.</p>

<p>Після натискання на кнопку «Завершити роботу над тестом» буде зараховано тільки збережені відповіді, а повернутися до завдань буде неможливо.</p>
              </div>
            </div>
            <div class="agreement-content__control">
              <div class="agreement-content-control">
                <div class="agreement-content-control__countdown_timer">
                  <span id="countdownTimer" class="timer"></span>
                </div>
                <button id="acceptAgreementButton" :disabled="!agreeTime" class="btn" @click="handleAgree">З правилами та правами ознайомився/ознайомилася</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main v-else class="main">
      <div class="main__container error">
        <h2>Помилка: доступ заборонено</h2>
        <h3>Цей іспит доступний лише за допомогою "Безпечного браузера іспитів"</h3>
      </div>
    </main>
    <div v-if="showLogDialog" class="log-dialog-overlay" @click.self="closeLogDialog">
  <div class="log-dialog">
    <h3>Console Logs</h3>
    <pre>{{ logs.join('\n') }}</pre>
    <button @click="closeLogDialog">Close</button>
  </div>
</div>
</template>
<script setup>
import HeaderLogin from '@/components/nmt/HeaderLogin.vue';
import { useHead } from '@vueuse/head';
import { onMounted, ref } from 'vue';
import "@/assets/nmt/css/style.css"
import router from '@/router';
const agreeTime = ref(false)
const agreeAccepted = ref( localStorage.getItem("agreeAccepted"))
const displayName = ref(sessionStorage.getItem("n_displayName"))
const accessCode = ref("")
const isSeb = ref(window.navigator.userAgent.includes("Seb"))
useHead({
    "title": "НМТ | Авторизація"
})
onMounted(() => {
    setTimeout(() => {
        agreeTime.value = true
    }, 5000
)
})

function startExam() {
  if (accessCode.value == "173") {
    router.push("/nmt/demo")
  } else {
    alert("Невірний код доступу")
  }
  
}

function handleAgree() {
  localStorage.setItem("agreeAccepted", true)
    agreeAccepted.value = true
}
const testTitle = ref("Demo 2025")
</script>
<style scoped>
[hidden] {
    display: none !important
}
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
    padding-top: 5rem;
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


button{

    font-size: 1.2rem;
    font-weight: 600;

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

.exam-button {
    background-color: transparent !important;
    border: #E62050 solid 1px;
    max-width: 20rem !important;
    padding-left: 1rem;
    
    font-weight: bold !important;
    padding-right: 1rem;;
    color: #E62050;
    font-size: 0.8rem !important;
}
.exam-button:disabled {
    color: grey;
    border-color: grey !important;
}
.exam-button:not(:disabled):hover {
    background-color: #E62050 !important;
    color: white;
}
button::after,
button::before {
    display: none;
}
button::after{
    display: flex !important;
    top:-2.5rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    content: "" ;
    font-size: 0.75rem;
    position: absolute;
    width:100%;
    max-width: 5rem;
    max-height: 2rem;
    justify-content: center;
    height: 100%;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.5rem;
    color: rgb(255, 255, 255);
    background-color: rgb(122, 122, 122) !important;
}
button.btn:hover::after {
    opacity: 1 !important;
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
/* 
.agreement-section {
    background-color: white;
    padding: 4rem;
    border-radius: 0.25rem;
    border: #ccc solid 1px;
} */
.agreement-content-control__agreement_button, .btn {
    width: 100%;
    height: auto;
    border-radius: 0.75rem;
    max-width: 35rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.agreement-content {
  /* display: none; */
  border: 1px solid #ccc;
  padding: 15px;
  margin: 20px 0;
  line-height: 1.2;
  border-radius: 5px;
}
.agreement-content-text {
  padding: 40px;

}
@media (max-width: 768px) {
  .agreement-content-text {
  padding: 16px !important;

}
}
p + p, ul + p, ol + p {
  margin-top: 20px;
}
.agreement-content-control .tooltip {
  position: relative;
  display: inline-block;

}
.tooltip .tooltiptext {
  visibility: visible;
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.5s;
}
.agreement-content-control {
    width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 60px 10px 20px 10px;
}


.exam-item {
  border: rgba(128, 128, 128, 0.276) solid 1px;
  min-width: 40rem;
  width: fit-content;
  margin-top: 1rem;
  height: 7rem;
  display: flex;
  animation: intro 0.3s forwards;
}

@keyframes intro {
  0% {
    opacity: 0;
  }

  100% {
    opaciry: 1;
  }
}


.exam-item__image {
  background-color: #D40A4F;
  color: white;
  width: 20rem !important;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}

.exam-item__image[disabled="true"],
.exam-item__image[disabled] {
  background-color: grey;
}

.exam-item__image[disabled="false"] {
  background-color: var(--nmt);
}

.exam-item__image svg {
  width: 70px;
  fill: white;
  color: white !important;
}

.exam-item__info {
  display: flex;
  text-transform: uppercase;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
}
@media (max-width: 600px) {
  .exam-item {
    flex-direction: column;
    min-width: 100% !important;
    max-width: 20rem !important; 
    height: auto;
  }
  .exam-item__info {
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap:1rem;
  }
  .exam-item__image {
    width: 100% !important;
    height: 6rem !important;
  }

}

.error * {
  color: black;
  font-weight: normal;
    opacity: 1;
}
.error h3 {
  opacity: 0.5
}
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.modal-box {
  max-width: 17rem !important;
  text-align: center;
}

.modal-box input {
  width: 100%;
}
</style>