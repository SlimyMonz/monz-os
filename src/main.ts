// Vue3
import { createApp } from 'vue'
import App from './App.vue'

// Tailwind CSS
import './style.css';

// Pinia
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);

app.use(pinia)
app.mount('#app')