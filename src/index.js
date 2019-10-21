import Vue from 'vue';
import VueRouter from 'vue-router';

var banner = require('./js/components/banner').default;
var gBanner = require('./js/components/general-banner').default;
var hBanner = require('./js/components/home-banner').default;
var carousel = require('./js/components/carousel').default;

Vue.component('banner', banner);
Vue.component('general-banner', gBanner);
Vue.component('home-banner', hBanner);
Vue.component('carousel', carousel);


var home = require('./js/components/home').default;

Vue.use(VueRouter);

var routes = [
    {path: '/', component: home}
];

var router = new VueRouter({routes});

var app = new Vue({
    router,
    el: "#app"
});