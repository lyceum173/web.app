
<template>
  <HeaderComponent></HeaderComponent>
  <main class="main">
    <!-- <div class="main-after">
                <h1>Lyceum 173</h1>
            </div> -->
    <div class="main__container">  
      <div class="hero">
        <div class="hero__text">
          <div class="hero__text__item">
            Умови користування
          </div>
        </div>
      </div>
      <section>
          <p class="published-on">Дата набуття чинності: 4 червня 2025 р.</p>

          <p>Будь ласка, уважно прочитайте ці умови перед використанням вебдодатку «Ліцей №173».

Використовуючи наш додаток, ви погоджуєтесь з наведеними нижче умовами. Якщо ви не згодні з будь-яким з пунктів, будь ласка, не використовуйте сервіс.

</p>
<h3>1. Загальні положення</h3>
<p>Цей додаток створений для учнів, викладачів та адміністрації Ліцею №173 з метою покращення навчального процесу та комунікації.</p>
<ul>
  <li>Інформація з Google-акаунту (ім’я, електронна пошта, зображення профілю) — при вході через Google.</li>
  <li>Інформація, яку ви надаєте вручну — наприклад, якщо ви заповнюєте форми на сайті.</li>
</ul>
<h3>2. Реєстрація та аутентифікація</h3>
<ul>
  <li>Для доступу до деяких функцій вам може знадобитися увійти через Google-акаунт або інші засоби авторизації.</li>
  <li>Ви зобов’язуєтесь використовувати лише свої особисті облікові дані та не передавати доступ третім особам.</li>

</ul>
<h3>3. Використання сервісу</h3>
<ul>
  <li>
    Ви погоджуєтесь використовувати додаток лише в освітніх та організаційних цілях.
  </li>
  <li>Заборонено завантаження або поширення образливого, неправдивого, неетичного чи незаконного контенту.
  </li>
  <li>
    Адміністрація залишає за собою право тимчасово або повністю обмежити доступ до сервісу при порушенні правил.
  </li>
</ul>

<h3>4. Збір та обробка даних</h3>
<p>Ви маєте право:</p>
<ul>
  <li>Ми можемо збирати мінімальні персональні дані, необхідні для роботи сервісу.</li>
  <li>Дані можуть бути передані адміністрації ліцею у разі обґрунтованої потреби.</li>
 <p>Для детальнішої інформації перегляньте нашу <a href="/privacy-policy">Політику конфіденційності</a>.</p>
</ul>
<h3>5. Відповідальність</h3>
<p>
  Ми прагнемо забезпечити безперебійну та безпечну роботу додатку, але не несемо відповідальності за можливі тимчасові збої, втрату доступу чи інші технічні несправності.


</p>
<h3>6.  Зміни до умов</h3>
<p>Ми можемо періодично оновлювати ці умови. Про важливі зміни ви будете повідомлені у додатку або через електронну пошту.
</p>
<h3>7. Контакти</h3>
<p>Якщо у вас є питання щодо цих умов, звертайтесь на <a href="mailto:chat-support@lyceum173.kyiv.ua">chat-support@lyceum173.kyiv.ua</a></p>


      </section>
    </div>
  </main>
  <FooterComponent></FooterComponent>
</template>
<style scoped>
ul {
  margin-left: 1rem;
  line-height: 1.2;
}


.main {
  margin-top: calc(1rem + 48px);
}
.hero {
  margin-bottom: 1rem;
}
button {
  cursor: pointer;
}
h1 {
  font-family: "MTA";
  color: var(--primary);
  text-align: center;
}
mark {
  color: var(--accent);
  background-color: transparent;
}
 a {
  color: var(--accent);
  font-weight: bold;
  /* transition: color 0.3s ease-in; */
}
a:hover {
  color: var(--accent);
  font-weight: bold;
  /* transition: color 0.3s ease-in; */
}
p {
  line-height: 1.5;
  text-align: center;
}

h3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "MTA";
  /* text-align: center; */
  font-weight: bold;
  color: var(--primary);
}

h3 strong {
  margin-bottom: 0.5rem;
  color: var(--primary);
}
/* .main {
        display: flex;
        justify-content: center;
        align-items: center;
    } */
.item {
  max-height: 65vh;
  padding: 1.25rem;

  max-width: 25rem;
  margin: 0 auto;
  border-radius: 0.625rem;
  background-color: var(--bg-light);
  -webkit-box-shadow: 0.0625rem 0.0625rem 0.3125rem 0rem #dde1ed;
  box-shadow: 0.0625rem 0.0625rem 0.3125rem 0rem #dde1ed;
  overflow-y: auto;
}
.hero {
  display: flex;
  width: 100%;
  gap: 1rem;
}
.hero__card {
  width: min-content;
  background: linear-gradient(45deg, #425080ff, var(--accent));
  color: white;
  padding: 1rem;
  max-width: 15rem;
  width: 100%;
  border-radius: 1rem;
  position: relative;
}

.hero__text {
  font-family: "Nunito";
  font-size: 3rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.hero__text mark {
  font-size: 2rem;
  align-self: center;
}
@media screen and (max-width: 777px) {
  .hero {
    flex-direction: column;
  }

  .hero__card {
    max-width: 480px;
    width: 100%;
  }
}
.hero__text__item {
  flex-wrap: nowrap;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.hero__text__item {
  justify-content: center;
}

.hero__text mark {
  border: solid 2px var(--accent);
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 9999px;
  flex: 0 1;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
section,
p {
  text-align: start;
  align-items: start;
}
section .hr {
  position: relative;
  font-weight: bold;
  margin-bottom: 1rem;
}
section .hr::after {
  position: absolute;
  top: 50%;
  left: 0;

  width: 100%;
  height: 1px;
  transform: translateY(-50%);
  background-color: grey;
  content: " ";
  z-index: -1 !important;
}
hr {
  position: relative;
}

.main-after * {
  position: absolute;
  top: 50% !important;
  left: 50%;
  color: transparent;
  transform: translate(-50%, -110%);
  animation: main-h1 1s forwards ease-in-out;
}
.main-after {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  text-align: center;
  content: "Lyceum 173";
  color: white;
  background-color: var(--accent);
  z-index: 100000;
  animation-delay: 1s;
  animation: main 2s forwards ease-in-out;
  /* & * {
            animation: main 5s forwards;
        } */
}

.hero__text__item {
  font-family: "MTA";
  font-size: 2rem !important;
  font-weight: bold;
  color: var(--primary);
}
@keyframes main-h1 {
  0% {
    color: transparent;
  }
  100% {
    color: white;
  }
}
@keyframes main {
  0% {
    height: 100dvh;
  }
  100% {
    height: 0;
  }
}
hr::after {
  position: absolute;
  top: 50%;
  left: 0;

  width: 100%;
  height: 1px;
  transform: translateY(-50%);
  background-color: grey;
  content: " ";
  z-index: -1 !important;
}
section .hr span {
  background-color: var(--bg-body);
  padding-right: 0.5rem;
}
.news {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
}

.news-item {
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); */
}
.news-item__date p {
  height: min-content;
}
.news-item__date {
  display: flex;
  width: 100%;
  align-items: end;
  height: 24px !important;
  color: grey;
  bottom: 1rem;
  left: 1rem;
  margin-top: 0.5rem;
}

.news-item h3 {
  margin-bottom: 0.5rem;
}
.news-item__title {
  display: flex;
  flex: 1 1;

  line-clamp: 1;
  display: -webkit-box;
  padding-bottom: 0.125rem;
  line-height: 1 !important;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  max-height: 1.2rem;
}
.news-item__description {
  display: flex;
  flex: 1 1;
  max-width: calc(100% - 1rem);
  line-clamp: 2;
  display: -webkit-box;
  padding-bottom: 0.125rem;
  line-height: 1 !important;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 2.75rem;
}
.news-item {
  padding: 1rem;
  width: 100%;
  border-radius: 1rem;
  position: relative;
}
.news-item {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}
.news-item__button a {
  width: 100%;
  --a: transparent !important;
  height: 100%;
  padding: 0.75rem;
}
.news-item__button {
  width: 4.75rem !important;
  height: 2.5rem;
  padding: 0px !important;
  border-radius: 1rem 0 1rem 0 !important;
  transition: all 0.5s ease;
}
.news-item__content:has(.news-item__button:hover) .news-item__corner::after {
  border-radius: 0 !important;
}
.news-item__button:hover {
  border-radius: 0 0 !important;
}
.news-item__button::after {
  transition: all 0.5s ease;
  background-color: var(--accent);
  width: 2px;
  height: 0;
  content: " ";
  position: absolute;
  bottom: -0.25rem;
  right: -0.25rem;
}
.news-item__button::before {
  transition: all 0.5s ease;
  background-color: var(--accent);
  height: 2px;
  width: 0;
  content: " ";
  position: absolute;
  bottom: -0.25rem;
  right: -0.25rem;
}
.news-item__button:hover::after {
  height: 100%;
  bottom: -0.25rem;
  right: -0.25rem;
}

.news-item__button:hover::before {
  width: 100%;
  bottom: -0.25rem;
  right: -0.25rem;
}

.news-item__corner {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: var(--accent);
  bottom: 0;
  right: 4.75rem;
}
.news-item__corner:last-of-type {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: var(--accent);
  bottom: 2.5rem;
  right: 0rem;
}
.news-item__corner:last-of-type::after {
  position: absolute;
  content: " ";
  width: 2rem;
  height: 2rem;
  background: white;
  bottom: 0;
  z-index: 1000;
  right: 0;
  border-radius: 0 0 1rem 0;
}
.news-item__corner::after {
  position: absolute;
  content: " ";
  width: 2rem;
  height: 2rem;
  background: white;
  bottom: 0;
  z-index: 1000;
  right: 0;
  border-radius: 0 0 1rem 0;
  transition: 0.5s all ease;
}
.news-item__button {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: var(--accent);
  color: white;
  border-radius: 1rem;
  z-index: 60 !important;
}

.news-item__content {
  flex: 1 1;
  display: flex;
  flex-direction: column;
}
.published-on {
  width: 100%;
  text-align: end;
  opacity: 0.6;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
 <script setup type="module">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { useHead } from '@vueuse/head'

const route = useRoute()
const newsTitle = ref('')
const newsContent = ref('')
const publishedOn = ref('')

//   onMounted(() => {
//     const nID = route.params.id || route.path.split('/')[2]
//     // const posts = await res.json()
//     console.log(nID)
//     const post = posts.find(p => p.id === nID)
//     console.log(post.published)
//     if (post && post.published === true) {
//       useHead({
//         title: post.title + " | Новини Lyceum173",
//         meta: [
//           {
//             name: 'description',
//             content: post.description.slice(0, 150) + '...', 
//           },
//           {
//             property: 'og:title',
//             content: post.title,
//           },
//           {
//             property: 'og:description',
//             content: post.description.slice(0, 150) + '...',
//           },
//           {
//             property: 'og:url',
//             content: "https://lyceum173.web.app/news/" + post.id,
//           },
//           {
//             property: 'og:article:author',
//             content: "Lyceum173",
//           },
//           {
//             property: 'og:type',
//             content: "article"
//           },
//         ],
//       })
//       newsTitle.value = post.title
//       newsContent.value = post.content
//       publishedOn.value = post.date.split(' ')[1]
//     } else {
//       newsTitle.value = 'Новину не знайдено'
//     }
//   }) 

</script>

