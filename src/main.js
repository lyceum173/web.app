import "./assets/main.css"


import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

// Optional IP check (disabled):
// fetch('https://freeipapi.com/api/json/')
//   .then(res => res.json())
//   .then(data => {
//     if (data.ipAddress === "79.110.132.143") {
//       console.log("authorized")
//     }
//   })
//   .catch(err => {
//     console.error('Failed to get IP info:', err);
//   });

import { createHead } from '@vueuse/head'

const head = createHead()


const logs =JSON.parse(sessionStorage.getItem("logs") || "[]");


// Helper to format time
function formatTimestamp() {
  return new Date().toLocaleTimeString();
}

// Extract origin (file:line)
function getCallerInfo() {
  try {
    const err = new Error();
    const stackLines = err.stack?.split("\n") || [];
    const targetLine = stackLines[3] || ""; // 0:Error, 1:log call, 2:proxy log, 3:caller
    const match = targetLine.match(/(?:at\s+)?(.+):(\d+):(\d+)/);
    if (match) {
      return `${match[1].split("/").pop()}:${match[2]}`;
    }
  } catch {}
  return "unknown";
}

// Save logs to sessionStorage
function persistLogs() {
  sessionStorage.setItem("logs", JSON.stringify(logs));
}

function addLog(type, ...args) {
  const tags = {
    log: "[ + ]",
    warn: "[ ! ]",
    error: "[ - ]",
  };
  const message = args.join(" ");
  const entry = {
    tag: tags[type] || "[ ? ]",
    msg: message,
    timestamp: formatTimestamp(),
    origin: getCallerInfo(),
    type,
  };
  logs.push(entry);
  persistLogs();
}

const original = {
    log: console.log,
    warn: console.warn,
    error: console.error,
  };

  console.log = (...args) => {
    addLog("log", ...args);
    original.log(...args);
  };
  console.warn = (...args) => {
    addLog("warn", ...args);
    original.warn(...args);
  };
  console.error = (...args) => {
    addLog("error", ...args);
    original.error(...args);
  };

  // Keyboard shortcut
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "l") {
      e.preventDefault();
      sessionStorage.setItem('originUrl', router.currentRoute.value.fullPath);
      if (prompt("Auth Code") === "log092n") {
    
        router.push("/dev/logs")
      }
    }
  });
  const v = "0.3.6";
  console.log(`%cApp Version: ${v}`, 'background: #2dbdaa; color: white; padding: 4px; border-radius: 4px;');
  
const app = createApp(App) 
app.use(head)
app.use(router)
app.mount('#app')
