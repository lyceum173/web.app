<template>
    <main class="main">
      <form  @submit.prevent class="main__container" style="max-width: 25rem;">
        <h2>🔒 Admin Setup</h2>
        <br>
        <p>This will authorize this machine for future admin login.</p>
  <br>
        <div class="form-field">
          <label for="setup-code">Setup Code</label>
          <input id="setup-code" v-model="setupCode" type="password" required @input="clearError"/>
        </div>
  <br>
        <button @click="authorizeDevice" style="padding: 0.5rem;">Authorize Device</button>
  
        <p v-if="setupStatus" style="margin-top: 1rem;">{{ setupStatus }}</p>
        <!-- <p v-if="fingerPrint" style="word-break: break-all;">🧬 Fingerprint: {{ fingerPrint }}</p> -->
    </form>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { encodeSecret, decodeSecret } from '@/assets/js/hash';
  
  const router = useRouter();
  const setupCode = ref('');
  const fingerPrint = ref(null);
  const setupStatus = ref('');

console.log(encodeSecret("admin"))
  onMounted(() => {
    ThumbmarkJS.getFingerprint().then((fp) => {
      fingerPrint.value = fp;
    });
  });
  console.log(md5("setup-nmt-0194"), "=")
  function authorizeDevice() {
    const MASTER_HASH = 'a1b55aefefc7a6f866dbdd155ce765a2'; // md5("setup-2025-lyceum")
    const userHash = md5(setupCode.value.trim());
  
    if (userHash === MASTER_HASH) {
      localStorage.setItem(encodeSecret('admin-auth'), encodeSecret("true"));
      localStorage.setItem(encodeSecret('admin-fingerprint'), encodeSecret(fingerPrint.value));
      setupStatus.value = '✅ Device successfully authorized as admin.';
      router.push('/nmt/admin/dashboard/');
    } else {
      setupStatus.value = '❌ Incorrect setup code.';
    }
  }

  function clearError() {
    setupStatus.value = '';
  }
  </script>
  

<style scoped>

form {
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    margin: 0 auto;
    width: 100%;
    max-width: 20rem;
    margin-top: 1rem;
}
input::-webkit-validation-bubble-icon {
display: none !important;
}
input::-webkit-validation-bubble-icon {
background: url(http://google.com/favicon.ico);
}
form h2 {
    margin-bottom: 0.5rem;
    color: #A0060E;
    font-size: 24px !important;
  line-height: 35.52px;
}
h2 {
    color: #e62050;
    font-weight: normal !important;
}
.footer {
    box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    font-family: "Open Sans";
}
* {
    overflow: hidden;
}
.main {

    font-family: "Open Sans";
    background-color: white;
}

.footer__partners {
    justify-content: center;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
}
.form-field input {
    padding: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    bordeR: rgba(128, 128, 128, 0.717) solid 1px;
    height: 2rem;
    line-height: 1.5em;
  border-radius: 0;
  font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 500;
}
.form-field span{
    font-size: 0.875rem;
}
.footer__container h2 {
    text-align: center;
    margin-top: 1rem;
    font-weight: 600 !important;
    margin-bottom: 1rem;
    width: 100%;
}

.log-dialog-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.log-dialog {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
}

.log-dialog pre {
  white-space: pre-wrap;
  font-family: monospace;
  max-height: 60vh;
  overflow-y: auto;
  margin-top: 1rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
}
label {
    font-weight: bold;
}


 button:focus:active {
    border: 1px solid #b40b34;
  box-shadow: inset 0 0 4px 1px #a40c30,inset 0 0 4px 1px #a40c30;
}
 button:hover {
    background: var(--nmt);
    background-color: rgb(230, 32, 80);
    background-image: none;
  box-shadow: inset 0 1px 0 0 #e13f66;
  cursor: pointer;
  background-color: #d01d48;
  background-image: -webkit-linear-gradient(#d01d48,#b30c34);
  background-image: linear-gradient(#d01d48,#b30c34);
  transition: color .25s ease-in-out, background .25s ease-in-out, box-shadow .25s ease-in-out;
  color: #fff;
  text-shadow: 0 1px 0 #a6042c;
  border-color: #a6042c;
  border-radius: 10px !important;
}

 button.submit:hover {
    border-radius: 10px !important;
}
 button {
    border-radius: 10px !important;
font-family: "Open Sans";
  border-color:  var(--nmt);
  background:  var(--nmt);
  color: #fcfcfc;
  border-radius: 10px;
  border: var(--nmt) solid 1px;
  transition: all;
  transition: all 0.5s;
  box-shadow: none;
}
.partner-item img {
    border-radius: 9999px;
    max-width: 100px;
    height: 100px
    ;
    width: 100px;
}
.partner-item:first-child img {
    scale: 1.15
}
button {
    background-color: #e62050 !important;
    color: white;
    padding: 4px;
    border-color: #e62050 !important;
    border-radius: 4px;
}

button::after,
button::before {
    display: none;
}

.auth-error {
    background-color: #FAF3F3;
    padding: 1.5rem;
    border-bottom: 2px solid #A0060E;
    margin-bottom: 1rem;
}

.auth-error h4{
    color: #A0060E;
    margin-bottom: 0.5rem !important;
}

.seb-error * {
  color: black;
  font-weight: normal;
    opacity: 1;
}
.seb-error h3 {
  opacity: 0.5
}
.seb-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  align-items: center;
}
</style>