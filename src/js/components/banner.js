import Vue from 'vue';

Vue.component('banner', {
    template: `<section class="banner-area relative" :id="id">
    <slot></slot>
</section>`,
    props: {
        id: {type: String, default: 'banner'}
    }
});

Vue.component('home-banner', {
    template: `<banner :id="id">
        <div class='container'>
            <div class="overlay overlay-bg"></div>
            <div class="row fullscreen d-flex align-items-center justify-content-start">
                <div class="banner-content col-lg-8 col-md-12">
                    <h1 class="text-uppercase">
                        Adopta. <br>
                        Y cambia sus vidas
                    </h1>
                    <p class="text-white sub-head">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
                        or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </p>
                    <a href="#" class="primary-btn header-btn text-uppercase">Encuentra una mascota para ti</a>
                </div>											
            </div>
        </div>
    </banner>`,
    props: {
        id: {type:String}
    }
});