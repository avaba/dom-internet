$(document).ready(function() {
    // yandex map
    if ($('.map-wrapper').length) {
        var location = $('.map-wrapper').data('location');
        function init_contacts_map() {
            var myMap = new ymaps.Map("map", {
                center: location,
                zoom: 11,
                controls: []
            });
            
        };
        ymaps.ready(init_contacts_map);
    }
 });