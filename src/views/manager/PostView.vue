<template>

     <TechHeader tech></TechHeader>
<main class="main" :class="{auth: !authed}" cms>
        <!-- <div class="main-after">
            <h1>Lyceum 173</h1>
        </div> -->

        <div class="main__container">
          
            <div class="page__content">
              <ManagerSidebar></ManagerSidebar>
               <div class="content">
  <div class="comment">Публікації</div>
  <br>
  <div class="post-edit">

    <div class="input">
    <label for="title">Title</label>
    <input type="text" id="title" v-model="post.title">
  </div>
  <div class="input">
    <label for="title">Опис</label>
    <input type="text" id="title" v-model="post.description">
  </div>
<br>
  <button @click="logHtml">Log</button>
  <Editor
    v-model="post.content"
     api-key="h6kkl7o9fencgnuc885qssdmevh4s162qqazim8y1nni16j1"
     
    :init="{
      height: 300,
      menubar: false,
//        menubar:{
//     edit: { title: 'Edit', items: 'undo, redo, selectall' }
//   },
      plugins: 'code',
      toolbar: 'undo redo | styles | bold italic underline strikethrough superscript subscript codeformat | alignleft aligncenter alignright alignjustify | outdent indent | code',
    }"
  />
</div>
  </div>

            </div>
        </div></main>
</template>

<script setup type="module">
// import "@/assets/css/views/cms.css"
import HeaderComponent from '@/components/HeaderComponent.vue';
import TechHeader from '@/components/TechHeader.vue';
import { ref, onMounted, nextTick } from 'vue';
import ManagerSidebar from '@/components/ManagerSidebar.vue';
import { useRoute } from 'vue-router';
// At the top of your <script setup>

const router = useRoute()
const id = ref(router.params.id)
const authed = ref(false)
const post = ref({})
const froalaInstance = ref(null)

function saveHtml() {
  if (froalaInstance.value) {
    const html = froalaInstance.value.html.get();
    localStorage.setItem('froala-content', html);
    console.log('Збережено у LocalStorage');
  }
}

// import {posts} from "https://lyceum173.web.app/api/cms/posts.js"
// post.value = posts.filter(e => e.id === id.value)[0]
// // fetch("https://lyceum173.web.app/api/cms/posts")
// //   .then(res => {
// //     if (!res.ok) throw new Error("Network response was not ok");
// //     return res.json();
// //   })
// //   .then(data => {
// //     console.log(data, "origin");
// //     post.value =  (data.filter(e => e.id === id.value)[0]);
  
// //   })
// //   .catch(error => {
// //     console.error("Fetch error:", error);
// //   });

// import Editor from '@tinymce/tinymce-vue';

// const content = ref('<p>Hello World</p>');
// function logHtml() {
//   console.log(post.value.content)
// }
</script>



<style scoped>

.main {
    margin-top: 2.5rem;
}
.post-edit {
  max-width: 50rem;
  margin: auto;
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
    text-align: left;
}
table tbody tr {
    border-top: solid 1px grey !important;
    background-color: rgb(248, 248, 248);
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

</style>