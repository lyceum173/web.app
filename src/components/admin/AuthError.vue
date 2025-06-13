<template>
    <main class="main">
      <div class="main__container error">
        <h1>401</h1>
        <h2>Помилка: доступ заборонено</h2>
      </div>
    </main>
</template>
<style scoped>

.error * {
  color: black;
  font-weight: normal;
    opacity: 1;
}
.error h3 {
  opacity: 0.5
}
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}
</style>