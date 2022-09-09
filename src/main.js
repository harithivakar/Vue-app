import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import flash from './directives/flash.js';

createApp(App)
    .use(router)
    .directive('flash', flash)
    .mount('#app')
