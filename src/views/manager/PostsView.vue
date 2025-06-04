<template>

     <TechHeader tech></TechHeader>
<main class="main" :class="{auth: !authed}" cms>
        <!-- <div class="main-after">
            <h1>Lyceum 173</h1>
        </div> -->

        <div class="main__container">
          
            <div class="page__content">
               <aside>
                <nav>
                    <router-link to="/manager/">Головна</router-link>
                    <router-link to="/manager/posts/">Публікації</router-link>
                    <router-link to="/">Сайт</router-link>
                </nav>
               </aside>
               <div class="content">
                <div class="comment">Публікації</div>
                <table>
                    <thead>
                        <th>№</th>
                        <th>Назва</th>
                        <th>Опис</th>
                        <th>Дії</th>
                        <th>Дата публікації</th>
                        <th>URL</th>
                    </thead>
                    <tbody>
                        <tr v-for="(post, p) in posts">
                            <td>{{ p+1 }}</td>
                            <td>
                                <div>{{ post.title }}</div>
                            </td>
                            <td>{{ post.description }}</td>
                            <td>
                                <div class="post-actions">
                                    <button @click="goToEdit(post.id)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/edit-03-solid-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#FFFFFFFF">
<path d="M19.5371 10.4763L21.0911 8.92233C21.9697 8.04364 21.9697 6.61899 21.091 5.74032L18.2595 2.90897C17.3809 2.03033 15.9563 2.03034 15.0776 2.90901L13.5237 4.46293L19.5371 10.4763Z" fill="#FFFFFFFF"></path>
<path d="M18.4764 11.537L9.97772 20.0359C9.57751 20.4361 9.06355 20.7031 8.50599 20.8004L3.12908 21.7388C2.88849 21.7808 2.64251 21.703 2.46981 21.5303C2.2971 21.3576 2.21931 21.1117 2.2613 20.8711L3.1996 15.4945C3.29691 14.9369 3.56389 14.423 3.9641 14.0227L12.4631 5.5236L18.4764 11.537Z" fill="#FFFFFFFF"></path>
</svg></button>
                                    <button v-if="!post.published" class="publish">Опублікувати</button>
                                    <button v-else>Зняти з публікації
                                    </button>
                                    <button v-if="post.published" @click="viewPage(post.id)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/view-solid-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#FFFFFFFF">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.3815 12.1545L22.3754 12.1633C22.2302 12.372 21.8157 12.9676 21.5581 13.3017C21.0364 13.9783 20.2801 14.8824 19.3424 15.7891C17.4969 17.5738 14.814 19.5 11.75 19.5C8.68603 19.5 6.00305 17.5738 4.15756 15.7891C3.21994 14.8824 2.46362 13.9783 1.94192 13.3017C1.68461 12.968 1.27049 12.373 1.12481 12.1636L1.12477 12.1636L1.11818 12.1541C0.960607 11.9077 0.960607 11.5923 1.11818 11.3459L1.12475 11.3365C1.27037 11.1272 1.68457 10.532 1.94192 10.1983C2.46362 9.52169 3.21994 8.61758 4.15756 7.71086C6.00305 5.92619 8.68603 4 11.75 4C14.814 4 17.4969 5.92619 19.3424 7.71086C20.2801 8.61758 21.0364 9.52169 21.5581 10.1983C21.8155 10.5321 22.2298 11.1275 22.3754 11.3366L22.3818 11.3459C22.5394 11.5923 22.5391 11.9082 22.3815 12.1545ZM11.75 15.5C9.67893 15.5 8 13.8211 8 11.75C8 9.67893 9.67893 8 11.75 8C13.8211 8 15.5 9.67893 15.5 11.75C15.5 13.8211 13.8211 15.5 11.75 15.5Z" fill="#FFFFFFFF"></path>
</svg></button>
                                </div>
                            </td>
                            <td>{{  post .date }}</td>
                            <td>{{  post .id }}</td>
                        </tr>
                    </tbody>
                </table>
               </div>
            </div>
        </div></main>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import TechHeader from '@/components/TechHeader.vue';

const router = useRouter();
const authed = ref(false);
const posts = ref([]);

const goToEdit = (id) => {
  router.push(`/manager/posts/${id}/edit`);
};

const viewPage = (id) => {
    router.push(`/news/${id}/`);
}
setTimeout(() => {
  authed.value = true;
}, 1000);


</script>

<style scoped>

.main {
    margin-top: 2.5rem;
}

form {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 20rem;
    margin: 0 auto;
    background-color: white;;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
}
form button {
    margin: 0 auto;
    width: 100%;
}

.content {
    /* border: red solid; */
    height: calc(100dvh - 48px);
    overflow: auto;
}
/* * {
    overflow: hidden !important;
} */

table {
    background-color: white;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
}
table {
    column-gap: 0.5rem !important;
}
table {
    text-align: left;
}
table tbody tr:nth-child(odd) {
    border-top: solid 1px grey !important;
    background-color: rgb(239, 239, 239);
}
tr td:first-child {
    font-weight: bold;
    text-align: center;
}
table
{
    border-collapse:separate;
    border-spacing:0.5rem 0.5rem !important;
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

 .page__content {
    display: flex;
    overflow: hidden !important;
    min-height: calc(100dvh - 48px) !important;
 }
.content {
    padding: 0.5rem;
        width: 100%;
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
.publish {
    background-color: #3C9FA8FF;
}
.publish:hover {
    background-color: #43B0BAFF;
}

.publish:focus:active {
    background-color: #348C94FF;
}
 aside nav {
    display: flex;
    flex-direction: column;
 }
 .post-actions {
    display: flex;
    gap: 0.25rem;

 }
 .post-actions button {
    padding: 0.25rem !important; 
    display: flex;
    align-items: center;
    justify-content: center;
 }
</style>