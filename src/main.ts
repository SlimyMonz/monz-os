// Vue3
import { createApp } from 'vue'
import App from './App.vue'

// Tailwind CSS
import './style.css';

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { ConfirmationService, DialogService, ToastService } from 'primevue';

import Tooltip from 'primevue/tooltip';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.directive('tooltip', Tooltip);

app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);

app.mount('#app');
