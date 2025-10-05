// Vue3
import { createApp } from 'vue'
import App from './App.vue'

// Draggable-Resizable
import DraggableResizableVue from 'draggable-resizable-vue3';

// Tailwind CSS
import './style.css';

// Pinia
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);

app.use(DraggableResizableVue);
app.use(pinia);
app.mount('#app');