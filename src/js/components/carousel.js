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
    }
};

exports.default = carousel;