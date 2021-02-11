import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './mathgame.vue';
import addition from './components/addition.vue';
import subtraction from './components/subtraction.vue';
import multiplication from './components/multiplication.vue';
import division from './components/division.vue';

Vue.use(VueRouter);

const routes = [
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
