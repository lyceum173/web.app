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
                        НОВИНИ
                    </div>
                </div>
            </div>

            <section>
                <div class="hr">
                    <span>ОСТАННІ НОВИНИ</span>
                </div>
                <div class="news">
                    <div v-for="n in paginatedPosts" :key="n.id" class="news-item">

                        <div class="news-item__content">
                          
                            <div class="news-item__title">  <h3>{{ n.title }}</h3></div>
                            <div class="news-item__description"><p>{{ n.description }}</p></div>
                            <div class="news-item__date"><p>{{ n.date.split(" ")[1] }}</p></div>
                            <button class="news-item__button"><router-link :to="`/news/${n.id}`" news-item__button>Перейти
                            </router-link></button>
   
                        <div class="news-item__corner"></div>
                        <div class="news-item__corner"></div>
                        </div> 
                    </div>

                </div>
                <div v-if="posts.length > 8" class="pagination__container">
                    <div class="pagination">
<button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1" style="padding: 0px; "  class="pagination__item"><svg style="rotate: 180deg; transform: translateY(-5px);" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path d="M9.00005 6L15 12L9 18" stroke="#000000" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></button>
  <button
    v-for="page in totalPages"
    :key="page"
    @click="goToPage(page)"
    :class="{ current: page === currentPage }"
    class="pagination__item"
  >
    {{ page }}
  </button>
  
  <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages" style="padding: 0px; "  class="pagination__item"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path d="M9.00005 6L15 12L9 18" stroke="#000000" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></button>
</div>
                </div>


         </section>
        </div>
    </main>
    <FooterComponent></FooterComponent>
   
</template>
<style scoped>
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
    background: linear-gradient(45deg,  #425080FF, var(--accent));
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
.hero__text__item {
        font-family: "MTA";

        font-weight: bold;
        color: var(--primary)
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

.pagination__container {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
}
.pagination {
    position: relative;
    height: 32px !important;
    display: flex;
}
.pagination button:first-child{
    border-radius: 0.5rem 0 0 0.5rem !important;
    padding-left: 4px !important;
}
.pagination button:first-child::after{
    border-radius: 0.5rem 0 0 0.5rem !important;
    right: 0 !important;
    left: unset;
    width: 0%;
    height: 100%;
}

.pagination button:first-child:hover::after{
    border-radius: 0.5rem 0 0 0.5rem !important;
    width: 100%;
}
.pagination button:last-child{
    border-radius: 0 0.5rem 0.5rem 0 !important;
    padding-right: 4px !important;
}
.pagination button:last-child::after{
    border-radius: 0 0.5rem  0.5rem 0 !important;
    right: unset !important;
    left: 0;
    width: 0%;
    height: 100%;
}

.pagination button:last-child:hover::after{
    width: 100%;
}
.pagination button:disabled {
    cursor: not-allowed;
}
.pagination button:disabled::after {
    background-color: rgba(8, 8, 8, 0.139);
}
.pagination button:disabled *{
    stroke: rgb(178, 178, 178);
}
.pagination button {
    background-color: white;
    padding: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    top:0;
    height: 32px !important;
    position: relative;
    color: var(--primary);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
.pagination button::after  {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    content: " ";
    background-color: #4251802F;
    transition: all 0.5s ease;

}
.pagination button.current {
    background-color: var(--primary);
    color: white;
}
.pagination button:hover::after {
    height: 100%;
}
</style><script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useHead } from '@vueuse/head';


const posts = ref([]);
const postsPerPage = 12;

const route = useRoute();
const router = useRouter();

useHead({
      title: "Новини | Lyceum173",
      meta: [
        {
          name: 'description',
          content: "Останні новини з інтерактивного життя ліцею", 
        },
        {
          property: 'og:title',
          content: 'Новини',
        },
        {
          property: 'og:description',
          content:"Останні новини з інтерактивного життя ліцею", 
        },
        {
          property: 'og:url',
          content: "https://lyceum173.web.app/news/"        
        }
      ],
    })

// Set currentPage from URL, fallback to 1
const currentPage = ref(parseInt(route.query.page) || 1);

// Watch for route changes (e.g., browser navigation)
watch(
  () => route.query.page,
  (newPage) => {
    const parsed = parseInt(newPage);
    if (!isNaN(parsed)) currentPage.value = parsed;
  }
);

// // Load data
// import {posts as p} from "https://lyceum173.web.app/api/cms/posts.js"
// posts.value = p.filter(i => i.published === true)
// // Pagination logic
// const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage));
// const paginatedPosts = computed(() => {
//   const start = (currentPage.value - 1) * postsPerPage;
//   return posts.value.slice(start, start + postsPerPage);
// });

// // Change page + update URL
// function goToPage(page) {
//   if (page >= 1 && page <= totalPages.value) {
//     currentPage.value = page;
//     router.replace({ query: { ...route.query, page: page.toString() } });
//     scrollToTop();
//   }
// }

// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }
</script>
