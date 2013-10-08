// Salon namespace
var Salon = Salon || {};

Salon.utils.namespace('Salon.utils');

Salon = (function (){
  "use strict";
  return {
      init: function (){
        window.alert('Hello Rich!');
      }
  };
})();

$(document).ready(function () {
    "use strict";
    Salon.init();

});