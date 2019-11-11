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

Vue.prototype.$utils = 
{
    $: function(ele) {
        return document.querySelector(ele);
    },
    $$: function(ele) {
        return document.querySelectorAll(ele);
    },
    hasScrollbars: function() {
        if (typeof window.innerWidth === 'number')
            return window.innerWidth > document.documentElement.clientWidth;
    },
    applyViewDimmensions: function() {
        var window_width = document.body.clientWidth,
        window_height = window.innerHeight;

        this.$('.fullscreen').style.height = window_height + 'px';
    }
};

var app = new Vue({
    router,
    el: "#app"
});