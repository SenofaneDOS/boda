import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

createApp(App).use(router).mount('#app')