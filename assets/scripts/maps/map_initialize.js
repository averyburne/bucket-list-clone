// const store = require('./../store')

// const places = store.pointers
const places = [{lat: 42.353289, lng: -71.057545}]

// Initialize and add the map
function initMap() {

  // The location of Uluru
  // const uluru = makeMarker(42.353289, -71.057545);


  // The map, centered at Uluru
  const map = new google.maps.Map(
      document.getElementById('map'), {zoom: 2, center: {lat: 42.353289, lng: -71.057545}});

  // The marker, positioned at Uluru
  // const marker = new google.maps.Marker({position: uluru, map: map});

  // const marker2 = new google.maps.Marker({position: {lat: 50, lng: -70}, map: map});

  for (let i=0; i < places.length; i++) {
    new google.maps.Marker({position: places[i], map: map})
  }
}

// window.eqfeed_callback = function(result) {
//         for (var i = 0; i < results.features.length; i++) {
//           var coords = results.features[i].geometry.coordinates;
//           var latLng = new google.maps.LatLng(coords[1],coords[0]);
//           var marker = new google.maps.Marker({
//             position: latLng,
//             map: map
//           });
//         }
//       }
