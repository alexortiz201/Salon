var AppRouter = Backbone.Router.extend({
    routes: {
        "page/:id": "getPage",
        "*other": "defaultRoute" // Backbone will try match the route above first
    },

    rich: function(){
        alert( "So Rich... What did you expect to find here?");
    },

    getPage: function(id){
        alert( "Get page view " + id );
    },

    defaultRoute: function(other){
        var other = other || 'Home';

        // get View
        if (other.toLowerCase() === 'rich'){
            // easter egg
            this.rich();
        }

        console.log('Page: ' + other );
    }
});

// Instantiate the router
var app_router = new AppRouter();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();