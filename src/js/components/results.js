var results = {
    template: `<section class="cat-list-area section-gap">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6" v-for="item in items">
                <div class="single-cat-list">
                    <img src="img/c1.jpg" alt="" class="img-fluid">
                    <div class="overlay">
                        <div class="text">Siamese Dog</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    props: {
        items: {type: Array, default: () => { return []; }}
    }
};

exports.default = results;