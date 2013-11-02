// Salon namespace
var Salon = Salon || {};

_.templateSettings.variable = "rc";

$(document).ready(function () {
    "use strict";
    var template = _.template(
        $( "script.template" ).html()
    );
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

    //render hompage
    (function(){
        var template = _.template(
            $( "script.page" ).html()
        );

        // Define our render data (to be put into the "rc" variable).
        var templateData = {
            listTitle: "Olympic Volleyball Players",
            listItems: [
                {
                    name: "Misty May-Treanor",
                    hasOlympicGold: true
                },
                {
                    name: "Kerri Walsh Jennings",
                    hasOlympicGold: true
                },
                {
                    name: "Jennifer Kessy",
                    hasOlympicGold: false
                },
                {
                    name: "April Ross",
                    hasOlympicGold: false
                }
            ]
        };

        // Render the underscore template and inject it after the H1
        // in our current DOM.
        $( "content" ).html(
            template( templateData )
        );
    }());

});