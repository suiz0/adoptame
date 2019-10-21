var home = {
    template: `
    <div>
        <!-- start banner Area -->
        <home-banner id="home"></home-banner>
        <!-- End banner Area -->

        <!-- Start image-carusel Area -->
        <carousel :items="[{src:'img/c1.jpg'},{src:'img/c2.jpg'},{src:'img/c3.jpg'},{src:'img/c4.jpg'},{src:'img/c1.jpg'},{src:'img/c2.jpg'},{src:'img/c3.jpg'},{src:'img/c4.jpg'},{src:'img/c1.jpg'},{src:'img/c2.jpg'},{src:'img/c3.jpg'},{src:'img/c4.jpg'},{src:'img/c1.jpg'},{src:'img/c2.jpg'},{src:'img/c3.jpg'},{src:'img/c4.jpg'}]"></carousel>
        <!-- End image-carusel Area -->
        <!-- Start process Area -->
        <section class="process-area section-gap">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="menu-content pb-60 col-lg-8">
                        <div class="title text-center">
                            <h1 class="mb-10">Proceso</h1>
                            <p>Un miembro nuevo en la familia.</p>
                        </div>
                    </div>
                </div>					
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-process">
                            <span class="lnr lnr-thumbs-up"></span>
                            <a href="#">
                                <h4>
                                    Úbica a la mascota
                                </h4>
                            </a>
                            <p>
                                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-process">
                            <span class="lnr lnr-user"></span>
                            <a href="#">
                                <h4>
                                    Llena el Formulario
                                </h4>
                            </a>
                            <p>
                                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-process">
                            <span class="lnr lnr-magic-wand"></span>
                            <a href="#">
                                <h4>
                                    Llevalo a casa
                                </h4>
                            </a>
                            <p>
                                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.
                            </p>
                        </div>
                    </div>																		
                </div>
            </div>	
        </section>
        <!-- End process Area -->
    </div>
    `
};

exports.default = home;