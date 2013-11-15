// Salon namespace
var Salon = Salon || {};

_.templateSettings.variable = "rc";

$(document).ready(function () {
    "use strict";

    $('.nav').on('click', 'li', function(){

        if ($(this).hasClass('dropdown') || $(this).parent().hasClass('dropdown-menu') ){
            console.log('dd menu');
        } else {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.brand').on('click', function() {

        $('.nav').children('.active').removeClass('active');
        $('.nav li:first-child').addClass('active');
    });

    // init function
    (function(){

        Salon.utils.fetchTemplate('/js/views/page.html', function(){

            //var compiled = _.template(data);

            var template = _.template(
                $( "script.page" ).html()
            );

            // Define our render data (to be put into the "rc" variable).
            var templateData = HomePage;

            // Render the underscore template and inject it after the H1
            // in our current DOM.
            $( "#content" ).html(
                template(templateData)
            );
        });

    }());

});