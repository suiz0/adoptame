var carousel = {
    template: `
    <section class="image-carusel-area">
    <div class="container">
        <div class="row">
            <div class="active-image-carusel">
                <div class="single-image-carusel" v-for="item in items">
                    <img class="img-fluid" :src="item.src" alt="">
                </div>									
            </div>
        </div>
    </div>	
</section>
    `,
    props: {
        items: {type: Array, default: () => {return [];}}
    },
    mounted: function() {
        $(this.$el).find('.active-image-carusel').owlCarousel({
            items: 4,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                900: {
                    items: 4,
                }
    
            }
        });
    }
};

export default carousel;