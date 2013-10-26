// Salon namespace
var Salon = Salon || {};

// MODELS

Salon.Product = Backbone.Model.extend({
    defaults: {
        brand: '',
        type: '',
        cost: ''
    },
    initialize: function(){
        alert("Products");
    }
});

Salon.ProductCollection = Backbone.Collection.extend({
    model: Salon.Product,
    url:"../products"
});

var shampoo = new Salon.Product({ brand:'Salerm', cost:'$10.00' });