<template>
    <header class="header">
    <div class="header__container">
        <a href="/nmt/" @drag.prevent @dragstart.prevent><h1><mark>NMT</mark>Lyceum173</h1></a>
       <div class="dropdown" v-if="isLogin">

        <div class="dropdown__name">
            <a href="/nmt/dashboard">Pryima</a>
        </div>
        <div class="dropdown__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-up-01-solid-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.7448 14.6842 18.809 15.0068 18.6929 15.287C18.5768 15.5673 18.3033 15.75 18 15.75H6C5.69665 15.75 5.42318 15.5673 5.30709 15.287C5.191 15.0068 5.25517 14.6842 5.46967 14.4697L11.4697 8.46967Z" fill="#000000"></path>
</svg>
        </div>
       </div>
    </div>
</header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.header__container > a {
--a: transparent !important;
}

header {
position: fixed;
width:100%;
z-index: 1000;
top: 0px;
}
header, footer {
font-family: "MTA";
color: var(--primary);

background: var(--bg-light);
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.header__container {
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
}

header mark {
color: #e62050 !important;
background-color: transparent;
font-family: "Open Sans";
font-weight: 600;
}

.dropdown {
    display: flex;
    font-family: "Open Sans";
    color: black;
    align-items: center;
    justify-content: center;
    gap:0.25rem;
}
.dropdown a{
    font-weight: bold;
    transition: all 0.3s;
}
.dropdown a:hover {
    color: #90102F;
}

.dropdown .dropdown__icon:hover  svg * {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
.dropdown .dropdown__icon:hover  svg *{
    fill: #90102F;
}
.dropdown svg {
    transform: rotate(180deg);
}
</style>

<script setup>
import { ref } from 'vue';
const isLogin = ref(false)
console.log(window.location.pathname === "/nmt/login")
isLogin.value = window.location.pathname !== "/nmt/login"
</script>