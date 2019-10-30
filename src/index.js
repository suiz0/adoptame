import Vue from 'vue';
import VueRouter from 'vue-router';

var banner = require('./js/components/banner').default;
var gBanner = require('./js/components/general-banner').default;
var hBanner = require('./js/components/home-banner').default;
var carousel = require('./js/components/carousel').default;
var results = require('./js/components/results').default;

Vue.component('banner', banner);
Vue.component('general-banner', gBanner);
Vue.component('home-banner', hBanner);
Vue.component('carousel', carousel);
Vue.component('results', results);

var homeView = require('./js/components/home').default;
var dogsView = require('./js/components/dogs').default;

Vue.use(VueRouter);

var routes = [
    {path: '/', component: homeView, name: "Home"},
    {path: '/dogs', component: dogsView, name: "Dogs"}
];

var router = new VueRouter({routes});

var app = new Vue({
    router,
    el: "#app"
});