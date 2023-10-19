import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
// import VueAxios from 'vue-axios'

import { createApp } from 'vue'
import App from './App.vue' // SFC
const app = createApp(App)
app.use(ElementPlus)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
app.use(axios)

