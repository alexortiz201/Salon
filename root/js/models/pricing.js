// Salon namespace
var Salon = Salon || {};

// MODELS

Salon.Pricing = Backbone.Model.extend({
    defaults: {
        brand: '',
        type: '',
        cost: ''
    },
    initialize: function(){
        alert("Pricing");
    }
});

Salon.ProductCollection = Backbone.Collection.extend({
    model: Salon.Pricing,
    url:"../pricing"
});