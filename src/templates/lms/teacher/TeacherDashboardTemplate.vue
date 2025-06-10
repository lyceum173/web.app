<template>
    <main class="main" lms>
        <div class="main__container">
            <HeaderComponent></HeaderComponent>
            <div class="lms-container">
                <SidebarComponent></SidebarComponent>
                <div class="lms-content">
                    <slot/>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import "@/assets/css/lms/style.css"
    import SidebarComponent from '@/components/lms/teacher/SidebarComponent.vue';
    import HeaderComponent from '@/components/lms/teacher/HeaderComponent.vue';
</script>
<style scoped>
.main {
    padding: 0px;
    background-color: var(--bg-dark);
    margin-top:0 !important;
}

@media (prefers-color-scheme: dark) {
    .main {
    padding: 0px;
    background-color: var(--lms-bg-dark);
} 

.lms-content {
        width: 100%;
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: var(--lms-dark) !important;
        
    }
}
    .main__container {
        display: flex;
        flex-direction: column !important;

        max-width: none;
        padding: 0px;
        min-height: 100dvh;
    }

    .lms-container {
        display: flex;
        padding: 1rem;
        gap: 1rem;
    }

    .lms-content {
        width: 100%;
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: white;
        height: fit-content !important;
    }
</style>