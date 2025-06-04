<template>


<aside>
    <nav>
        <router-link to="/manager/"><p>Головна</p></router-link>
        <router-link to="/manager/posts/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/sticky-note-02-stroke-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#FFFFFFFF">
    <path d="M21.8999 14.975L19.0509 14.2627C18.4846 14.1211 17.9179 14.4927 17.8219 15.0685L17.0214 19.8715M16.4626 20.1344L10.8767 21.5308C9.83026 21.7924 8.76489 21.1771 8.46857 20.14L5.54944 9.92305C5.24599 8.86098 5.86098 7.75401 6.92305 7.45056L17.0536 4.5561C18.1248 4.25006 19.2395 4.87817 19.5326 5.95291L21.6946 13.8803C21.8835 14.5727 21.6868 15.3132 21.1793 15.8207L17.3917 19.6083C17.1354 19.8646 16.8142 20.0464 16.4626 20.1344Z" stroke="#FFFFFFFF" stroke-width="1.5"></path>
    <path d="M8 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H15C16.1046 2 17 2.89543 17 4V5" stroke="#FFFFFFFF" stroke-width="1.5"></path>
    </svg>
    <p>Публікації</p></router-link>
        <router-link to="/">Сайт</router-link>
    </nav>
   </aside>
</template>

<style scoped>
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

 aside nav a {
    /* border:red solid; */
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
    gap: 0.25rem;

 }
 </style>