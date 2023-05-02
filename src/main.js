import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Welcome from './components/Welcome.vue'
import Registration from './components/Registration.vue'
import Info from './components/Info.vue'


const routes = [
    { path: '/', component: Welcome },
    { path: '/registration', component: Registration },
    { path: '/info', component: Info },
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(), //createWebHashHistory
    routes,
})


const app = createApp(App)

app.use(ArcoVue)
app.use(ArcoVueIcon);
app.use(router)
app.mount('#app')
