<template>
        <header class="header">
        <div class="header__container">
            <router-link to="/"><h1><mark>LMS</mark>Lyceum173</h1></router-link>
            <!-- <button>
                Увійти
            </button> -->
        </div>
    </header>
</template>
<style scoped>
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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.042), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
.header__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

header mark {
    color: var(--accent);
    background-color: transparent;
}

header button {
  background-color: black;
  color: white;
  padding-left: 1rem;
  cursor: pointer;
  padding-right: 1rem;
  border-radius: 9999px;
}</style>

<script setup>
</script>