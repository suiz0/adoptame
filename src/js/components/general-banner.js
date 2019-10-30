var generalBanner = {
    template: `<banner :id=id>
    <div class="overlay overlay-bg"></div>
    <div class="container">				
        <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
                <h1 class="text-white">
                    {{sectionText}}
                </h1>	
                <p class="text-white link-nav"><router-link to="/">Inicio</router-link><span class="lnr lnr-arrow-right"></span>  {{sectionText}}</p>
            </div>	
        </div>
    </div>
    </banner>`,
    props: {
        id: {type: String},
        sectionText: {type: String}
    }
};

exports.default = generalBanner;