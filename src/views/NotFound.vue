<template>
  <HeaderComponent></HeaderComponent>
  <main class="main">
    <div class="main__container">
      <div id="error" >
        <div class="error-wrap">
          <h2>4<mark>0</mark>4</h2>
          <p>Сторінку не знайдено</p>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent></FooterComponent>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style scoped>
.hidden {
  opacity: 0;
}
* {
  opacity: 1;
}
#error {
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-family: "MTA";
  color: var(--primary);
}
.error-wrap {
  text-align: center;
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
  font-weight: bold;
  color: var(--primary);
  font-size: 7rem;
}

h2 strong {
  margin-bottom: 0.5rem;
  color: var(--primary);
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
