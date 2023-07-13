import { createApp } from 'vue'
import "./style.css";
import App from "./App.vue";
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import store from './store/store';

const app = createApp(App)


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  components,
  directives,
});

app.use(store)
app.use(router)
app.use(vuetify)
app.mount('#app')