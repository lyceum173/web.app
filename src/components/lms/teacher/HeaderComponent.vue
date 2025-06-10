<template>
    <header class="lms-header">
        <div class="lms-header__content">
            <div class="header-logo">
                <h2><mark>e</mark>Lyceum173</h2>
            </div>
        </div>
    </header>
</template>
<style>
.lms-header {
    padding: 0 1rem 0 1rem;

    background-color: transparent;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: none;
}

.lms-header__content {
    background-color: rgb(255, 255, 255) !important;
    padding: 1rem;
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.header-logo {
    font-family: "MTA";
    font-weight: bold;

}

.header-logo mark {
    background-color: transparent;
    color: var(--accent)
}

@media (prefers-color-scheme: dark) {
    .lms-header__content {
        background-color: var(--lms-dark) !important;
    }

    .header-logo {
        color: white;
    }
}
</style>
<script setup >
import { ref } from 'vue';
const sidebarOpen = ref(false)

</script>