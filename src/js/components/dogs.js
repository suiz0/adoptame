var dogs = {
    template: ` 
    <div>
    <!-- start banner Area -->
    <general-banner id="dogs" section-text="Dogs"></general-banner>
    <!-- End banner Area -->
        <results :items="items"></results>
        </div>`,
    props: {
        items: {type: Array, default: () => { return [1,2,3]; }}
    }
};

exports.default = dogs;