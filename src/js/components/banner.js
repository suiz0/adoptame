var banner = {
    template: `<section class="banner-area relative" :id="id">
    <slot></slot>
</section>`,
    props: {
        id: {type: String, default: 'banner'}
    }
};

exports.default = banner;