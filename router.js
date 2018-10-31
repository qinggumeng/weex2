import Router from 'vue-router'
import ViewHome from './components/HelloWorld.vue'

Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: ViewHome }
    ]
})