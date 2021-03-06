// Salon namespace
var Salon = Salon || {};

Salon.utils = (function(){
    "use strict";
    return {
        namespace: function (ns_string) {

            var parts = ns_string.split('.'),
                parent = Salon,
                i; // strip redundant leading global

            if (parts[0] === 'Salon') {
                parts = parts.slice(1);
            }

            for (i = 0; i < parts.length; i += 1) {
                // create a property if it doesn't exist
                if (typeof parent[parts[i]] === 'undefined') {
                    parent[parts[i]] = {};
                }
                parent = parent[parts[i]];
            }

            return parent;
        },

        fetchTemplate: function (path, onSuccess) {
            $.ajax({
                url: window.location.pathname + path, //ex. /scripts/templates/users.html
                cache: false,
                success: function (data) {
                    // add to DOMs
                    $('body').append(data);

                    if (onSuccess && typeof onSuccess === 'function'){
                        onSuccess();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('RV.utils.loadTemplate error');
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        }
    };

})();