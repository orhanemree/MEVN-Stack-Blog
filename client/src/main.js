import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "./assets/style.css"

createApp(App).use(router).use(VueAxios, axios).mount('#app')
