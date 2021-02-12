import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './mathgame.vue';
import home from './components/pages/home.vue';
import addition from './components/pages/addition.vue';
import subtraction from './components/pages/subtraction.vue';
import multiplication from './components/pages/multiplication.vue';
import division from './components/pages/division.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: home },
    { path: '/addition', component: addition },
    { path: '/subtraction', component: subtraction },
    { path: '/multiplication', component: multiplication },
    { path: '/division', component: division }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: function(createElement) {
        return createElement(app)
    }
  })
