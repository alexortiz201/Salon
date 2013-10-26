var AppRouter = Backbone.Router.extend({
    routes: {
        "page/:id": "getPage",
        "*other": "defaultRoute" // Backbone will try match the route above first
    },

    getPage: function(id){
        alert( "Get page view " + id );
    },

    defaultRoute: function(other){
        console.log('Invalid. You attempted to reach:' + other);
        if (!actions){
            var other = 'Home';
        }
        alert( other );
        //take to home page by default
    }
});

// Instantiate the router
var app_router = new AppRouter();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();