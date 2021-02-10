import Vue from 'vue';
import app from './mathgame.vue';

new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(app)
    }
  })
