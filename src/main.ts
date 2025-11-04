import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// PrimeVue
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import ToggleSwitch from 'primevue/toggleswitch';
import Menubar from 'primevue/menubar';

// CSS
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

// global components
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('PButton', Button);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Select', Select);
app.component('ToggleSwitch', ToggleSwitch);
app.component('Menubar', Menubar);

app.mount('#app');
