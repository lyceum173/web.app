<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="footer__top__container">
            <p>Створено учнями Ліцею 173!</p>
            <br>
            <a href="mailto:chat-support@lyceum173.kyiv.ua">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M22 7L12.8944 11.5528C12.3314 11.8343 11.6686 11.8343 11.1056 11.5528L2 7" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
                <p>chat-support@lyceum173.kyiv.ua</p>
            </a>
        </div>
        </div>
        <div class="footer__copy">
            <div class="footer__copy__container">
            &copy; <span id="currentYear">{{ year }}</span> <a href="https://lyceum173.kyiv.ua">Ліцей №173</a>&nbsp; <span>|</span>&nbsp; <a href="https://pryima-oleksandr.web.app" target="_blank">Pryima Oleksandr</a>
        </div>
        </div>
       
    </footer>
</template>
<script setup>
import { ref } from 'vue';
const year = ref("")
year.value = new Date().getFullYear()
</script>