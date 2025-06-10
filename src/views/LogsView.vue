<template>
  <main class="main">
    <div class="main__container">
      <div class="console item">
        <button class="clear" @click="clear" style="margin-right: 0.5rem !important;">Clear</button>
        <button class="clear"  @click="downloadLogsAsPDF">Download</button>
        <br>
        <br>
  <h3>Console Output</h3>
  <ul class="logs">
    <li style="font-size:2rem !important">LMS Lyceum173 <strong>Log Export</strong></li>
    <li>Origin url : <router-link :to="originUrl"> <strong>{{ originUrl }}</strong></router-link></li>

    <li v-for="(log, index) in logs" :key="index" :class="[log.type, { v: log.msg.startsWith('%cApp Version') }]">

      <span class="tag" v-if="log.msg.startsWith('%cApp Version')">[ <span style="font-size: 1.5rem">&#9881;</span> ]</span>
      <span class="tag" v-else>{{ log.tag }}</span>
      <span class="msg"  v-if="log.msg.startsWith('%cApp Version')">App Version {{ log.msg.split(" ")[2] }}</span>
      <span class="msg"  v-else>{{ log.msg }}</span>
      <span class="meta" v-if="!log.msg.startsWith('%cApp Version')">({{ log.origin }} @ {{ log.timestamp }})</span>
    </li>


  </ul>
</div>

    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { useHead } from '@vueuse/head';
import router from '@/router';
const logs = ref([]);

function goBack() {
  router.push(originUrl)
}

useHead({
  title: "Logs"
})
const originUrl = ref('');

function clear() {
  sessionStorage.clear()
  window.location.reload()
}
onMounted(() => {
  originUrl.value = sessionStorage.getItem('originUrl') || 'Unknown';
  const savedLogs = sessionStorage.getItem("logs");
  if (savedLogs) {
    try {
      logs.value = JSON.parse(savedLogs);

    } catch (e) {
      console.error("Failed to parse logs from localStorage", e);
    }
  }
});
import html2pdf from 'html2pdf.js';

function downloadLogsAsPDF() {
  const element = document.querySelector('.logs'); // the container of logs
  if (!element) return;

  // Options to keep styles and good quality
  const opt = {
    margin:       0.5,
    filename:     'console-logs.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}


function formatTimestamp() {
  return new Date().toLocaleTimeString();
}

function getCallerInfo() {
  try {
    const err = new Error();
    const stack = err.stack?.split("\n")[3] || "";
    const match = stack.match(/(?:at\s+)?(.+):(\d+):(\d+)/);
    if (match) return `${match[1].split("/").pop()}:${match[2]}`;
  } catch {}
  return "unknown";
}


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
  margin-bottom: .5rem;
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

  max-width: 50rem;
  margin: 0 auto;
  border-radius: .625rem;
  background-color: var(--bg-light);
  -webkit-box-shadow: .0625rem .0625rem .3125rem 0rem #dde1ed;
  box-shadow: .0625rem .0625rem .3125rem 0rem #dde1ed;
  overflow-y: auto;
}

.logs {
  font-family: monospace;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column-reverse;
}
.logs li {
  line-height: 1.5;
  margin: .25rem 0;
}
.logs li:first-child {
  order: 2;
}
.logs li:nth-child(2) {
  order: 1;
}
.logs li .tag {
  font-weight: bold;
  margin-right: .5rem;
}

.logs li {
  padding: .5rem;
}
.logs li .meta {
  color: #888;
  font-size: .85rem;
  margin-left: .5rem;
}
.logs li.log .tag { color: rgb(53, 145, 231); }
.logs li.warn .tag { color: rgb(255, 183, 0); }
.logs li.error .tag { color: #f00; }
.logs li.error {
  background-color: rgba(255, 100, 126, 0.325);
}

.logs li.warn {
  background-color: rgba(255, 216, 144, 0.272);
}
.logs li.v .tag { color: rgb(153, 255, 209); }
.logs li.v {
  background-color: var(--accent);
  color: white;
  font-weight: bold;
}
</style>
