import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/styles/index.css'
import './assets/tailwind.css'

// On page load or when changing tdhsemes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark')
  localStorage.theme = 'dark'
} else {
  document.querySelector('html').classList.remove('dark')
}

createApp(App).use(store).use(router).mount('#app')
