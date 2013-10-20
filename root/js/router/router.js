var AppRouter = Backbone.Router.extend({
    routes: {
        //"posts/:id": "getPost",
        "*actions": "defaultRoute" // Backbone will try match the route above first
    }
});

// Instantiate the router
var app_router = new AppRouter;

app_router.on('route:getPost', function (id) {
    // Note the variable in the route definition being passed in here
    alert( "Get post number " + id );
});

app_router.on('route:defaultRoute', function (actions) {
    if (actions){
        var actions = 'Home';
    }
    alert( actions );
    //take to home page by default
});
// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();