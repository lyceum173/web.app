<template>
   <HeaderComponent></HeaderComponent>
    <main class="main">
        <div class="main__container">
            <div class="hero">
                <div class="hero__text">
                    <div class="hero__text__item">
                        ІНТЕРАКТИВНА
                    </div>
                    <div class="hero__text__item">
                        <mark>WEB</mark> ПЛАТФОРМА
                    </div>
                    <div class="hero__text__item">
                        <strong>ЛІЦЕЮ 173 </strong>
                    </div>
                </div>
                <!-- <div class="hero__card">
                    Інтерактивна освітня платформа для учнів, вчителів та батьків. <br><br>
                    Навчайся зручно, ефективно та цікаво.
                    <button @click="goToAuth">
                        Увійти
                    </button>
                </div> -->
               
            </div>
            <br><br>
            <br>
            <div class="hero__card" style="justify-self: center; text-align: center;">
                    <h2 style="color: white; font-family: 'MTA';">У розробці...</h2>

                </div>
    
            <!-- <section class="about">
                <div class="hr">
                    <span>ПРО ПЛАТФОРМУ</span>
                </div>
                <strong>🎯 Система балів і досягнень</strong> <p>— отримуй бали за активність, участь у заходах, навчання та ініціативність. Змагайся з друзями або класами!</p>
<strong>📊 Голосування та опитування</strong>
<p> — впливай на події у ліцеї: обирай теми заходів, учасників конкурсів або фільм для перегляду на перерві.
</p>
<strong>🗳️ Соціальні ініціативи</strong>
<p> — пропонуй ідеї, створюй опитування, обговорюй важливі шкільні теми.</p>
<strong>🧠 Ігрові завдання та челенджі</strong>
<p> —  пройди квест або вікторину та виграй приємні бонуси.</p>
<strong>🗓️ Календар подій</strong>
<p> — слідкуй за шкільними святами, флешмобами, олімпіадами та тематичними днями</p>
            </section> -->
            <!-- <br>
            <section>
                <div class="hr">
                    <span>ПОДІЇ</span>
                </div>
            </section>
            <br> -->
            <!-- <section>
                <div class="hr">
                    <span>НОВИНИ</span>
                </div>
                <div class="news">
                    <div v-for="n in posts.slice(0, 8)" :key="n.id" class="news-item">
                        <div class="news-item__content">
                          
                            <div class="news-item__title">  <h3>{{ n.title }}</h3></div>
                            <div class="news-item__description"><p>{{ n.description }}</p></div>
                            <div class="news-item__date"><p>{{ n.date }}</p></div>
                            <button class="news-item__button"><router-link :to="`/news/${n.id}`" news-item__button>Перейти
                            </router-link></button>
   
                        <div class="news-item__corner"></div>
                        <div class="news-item__corner"></div>
                        </div> 
                    </div>

                </div>
                <div class="more" v-if="posts.length > 8">
                    <router-link to="news/">Більше</router-link>
                </div>
            </section> -->
            <!-- <section>
                <div class="hr">
                    <span>єБали</span>
                </div>
            </section> -->
            <!-- <div class="item">
    <h2><strong>Lyceum173</strong><br></h2>
    <p style="width: 100%; text-align: center; color: var(--accent)">Найкоротший шлях до знань</p>
    <br><br>
    <p>Сервіс для створення коротких посилань.</p>
    <p>Швидко ділись важливими ресурсами, організовуй навчальні матеріали та отримуй доступ до інформації за секунди.</p>

</div> -->

        </div>
    </main>
    <FooterComponent></FooterComponent>
   
</template>
<style scoped>
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
    p {
        line-height: 1.5;
        text-align: center;
    }

    h2 {
        font-family: "MTA";
        text-align: center;
        font-weight: normal;
        color: var(--primary);
        
    }

    h2 strong {
        margin-bottom: 0.5rem;
          color: var(--primary);
    }
/* .main {
    display: flex;
    justify-content: center;
    align-items: center;
} */

.more {
    width: 100%;
    text-align: center ;
    margin-top: 2rem;
    margin-bottom: 1rem;
}
.more a {
    --a: transparent !important;
    transition: all 0.3s ease;
}

.more a::before {
    position: absolute;
    bottom: -0.125rem;;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 2rem !important;
    background-color: var(--primary) !important;
    height: 2px !important;
    transition: all 0.3s ease;
    z-index: -1;
}
.more a:hover {
    color: white;
}
.more a:hover::before {
    height: calc(100% + 0.25rem) !important;
    width: calc(100% + 0.5rem)!important;
    padding: 0.5rem;
    /* border-radius: 0.5rem; */
    
}
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
    gap: 2rem;
    margin-top: calc(1rem + 48px);
    margin-bottom: 1rem;
}
.hero__card {
    width: min-content;
    background: linear-gradient(45deg,  #425080FF, var(--accent));
    color: white;
    padding: 1rem;
    max-width: 15rem;
    width: 100%;
    border-radius: 1rem;
    position: relative;
}

@media (max-width: 768px) {
    .hero__text {
   
    font-size: 2.5rem !important;
   
}
}
.hero__text {
    font-family: "Nunito";
    font-size: 3rem;
    gap:0.5rem;
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
        margin-top: 1rem;
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
.hero__text__item:first-child {
    justify-content: end;
}
.hero__text__item:last-child {
    justify-content: end;

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
section, p {
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

.about p {
    margin-bottom: 0.5rem;
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
    width :100dvw;
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
@keyframes main-h1 {
    0%{
        color: transparent;
    } 100% {
        color: white;
    
    }
}
@keyframes main {
    0%{
        height: 100dvh;
    } 100% {
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
    width:100%;
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

    line-clamp: 1;    display: -webkit-box;
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
    line-clamp: 2;    display: -webkit-box;
    padding-bottom: 0.125rem;
    line-height: 1 !important;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 2.75rem;
}
.news-item{
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
    transition: all 0.5s ease
}
.news-item__content:has(.news-item__button:hover) .news-item__corner::after {
  border-radius: 0 !important;
}
.news-item__button:hover {
    border-radius: 0 0  !important;
}
.news-item__button::after  {
    transition: all 0.5s ease;
    background-color:var(--accent);
    width: 2px;
    height: 0;
    content: " ";
    position: absolute;
    bottom: -0.25rem;
    right:-0.25rem;
}
.news-item__button::before  {
    transition: all 0.5s ease;
    background-color: var(--accent);
    height: 2px;
    width: 0;
    content: " ";
    position: absolute;
    bottom: -0.25rem;
    right:-0.25rem;
}
.news-item__button:hover::after {

    height: 100%;
    bottom: -0.25rem;
    right:-0.25rem;
}

.news-item__button:hover::before {

width: 100%;
bottom: -0.25rem;
right:-0.25rem;
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
</style>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CMS from '@/lib/cms';
import {onMounted, ref} from "vue"
import router from '@/router';

const posts = ref([])
import { useHead } from '@vueuse/head';
useHead({
      title: "Lyceum173 Web App",
      meta: [
        {
          name: 'description',
          content: "Інтерактивна система Ліцею 173", 
        },
        {
          property: 'og:title',
          content: "Lyceum173 Web App",
        },
        {
          property: 'og:description',
          content:"Інтерактивна система Ліцею 173", 
        },
        {
          property: 'og:url',
          content: "https://lyceum173.web.app/"        
        }
      ],
    })

// onMounted(() => {


//     posts.value = p.filter(i => i.published === true)

// })


function goToAuth() {
    router.push("/auth/")
}

</script>