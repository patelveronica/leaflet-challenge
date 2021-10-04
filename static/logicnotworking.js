
//   // Create the base layers.
//   var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   })

//   var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//   });
  
// var tectonicplates = new L.layerGroup();
// var earthquakes = new L.LayerGroup();

//   // Create a baseMaps object.
//   var baseMaps = {
//     "Street Map": street,
//     "Topographic Map": topo
//   };

//   // Create an overlay object to hold our overlay.
//   var overlayMaps = {
//     "Earthquakes": earthquakes,
//     "Tectonic Plates": tectonicplates
//   };

//   // Create our map, giving it the streetmap and earthquakes layers to display on load.
//   var myMap = L.map("map", {
//     center: [
//       0, 0
//     ],
//     zoom: 2,
//     layers: [street, earthquakes]
//   });
  
//   // Create a layer control.
//   // Pass it our baseMaps and overlayMaps.
//   // Add the layer control to the map.
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);

//   d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", function(data) {

//   // This function returns the style data for each of the earthquakes we plot on
//   // the map. We pass the magnitude of the earthquake into two separate functions
//   // to calculate the color and radius.
//   function generateearthquakestyle(feature) {
//     return {
//       opacity: 1,
//       fillOpacity: 1,
//       fillColor: generatecolor(feature.geometry.coordinates[2]),
//       color: "#000000",
//       radius: getRadius(feature.properties.mag),
//       stroke: true,
//       weight: 0.5
//     };
//   }

//   // create function to show color for earthquake
//   function generatecolor(earthquakedepth) {
//     if (earthquakedepth > 90) {
//       return "#60397f"
//     }
//     if (earthquakedepth > 70) {
//       return "#734498"
//     }
//     if (earthquakedepth > 50) {
//       return "#864fb2"
//     }
//     if (earthquakedepth > 30) {
//       return "#9a5acb"
//     }
//     if (earthquakedepth > 10) {
//       return "#ad66e5"
//     }

//   }  
//   // get the radius of the earthquake based on its magnitude
//   function getRadius(magnitude) {
//     if(magnitude == 0) {
//       return 1;
//     }
//     return magnitude *4;
//   }
// //   add a GeoJSON layer to map
// L.geoJSON(data, {
//     pointToLayer: function(feature, latlong) {
//         return L.circleMaker(latlong);
//     },
//     // set the style for each circleMaker
//     style: generateearthquakestyle,

//     // Give each feature a popup that describes the place and time of the earthquake.  
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup (
//       "Earthquake magnitude: " + feature.properties.mag 
//                                + "<br>Earthquake Location:<br> " + feature.properties.place
//                                + "<br>Depth: " + feature.geometry.coordinates[2]
//     );
//   }
// }).addTo(earthquakes);

// // add layer to the map
// earthquakes.addTo(myMap);

// //    create a legend and add it to the map
//   var legend = L.control({ position: 'bottomright' });

//   legend.onAdd = function () {
//     var div = L.DomUtil.create('div', 'info legend'),
//       var grades = [0, 10, 30, 50, 70, 90]
//       var colors = [ "#60397f","#734498","#864fb2","#9a5acb","#ad66e5"]   

//     // loop throught the depth and generate a lable with c color 
//     for (var i = 0; i < grades.length; i++) {
//       div.innerHTML += '<i style="background:' + colors[i] + "'></i> " + grades[i] + 
//       (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//     };
//     return div;
//   };
// //   add legend to the map
//   legend.addTo(myMap);  
// // make JAX call to get Tectonic plate geoJSON data
// d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json",
//   function(platedata) {
//     //   add layer
//     L.geoJson(platedata, {
//         color: "orange",
//         weight: 2
//     }).addTo(tectonicplates);
//     tectonicplates.addTo(myMap);
//   }
// )

// //   // Create a GeoJSON layer that contains the features array on the earthquakeData object.
// //   // Run the onEachFeature function once for each piece of data in the array.
// //   var earthquakes = L.geoJSON(data.features, {
// //     onEachFeature: bindpopuptomarker,
// //     style: generateearthquakestyle,
// //     pointToLayer: generatemarker
// //   });

// // //   // Send our earthquakes layer to the createMap function/
// // //   createMap(earthquakes);
// });




var graymap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
});

var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-v9",
  accessToken: API_KEY
});

var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/outdoors-v11",
  accessToken: API_KEY
});

// We then create the map object with options. Adding the tile layers we just
// created to an array of layers.
var map = L.map("mapid", {
  center: [
    40.7, -94.5
  ],
  zoom: 3,
  layers: [graymap, satellitemap, outdoors]
});

// Adding our 'graymap' tile layer to the map.
graymap.addTo(map);

// We create the layers for our two different sets of data, earthquakes and
// tectonicplates.
var tectonicplates = new L.LayerGroup();
var earthquakes = new L.LayerGroup();

// Defining an object that contains all of our different map choices. Only one
// of these maps will be visible at a time!
var baseMaps = {
  Satellite: satellitemap,
  Grayscale: graymap,
  Outdoors: outdoors
};

// We define an object that contains all of our overlays. Any combination of
// these overlays may be visible at the same time!
var overlays = {
  "Tectonic Plates": tectonicplates,
  Earthquakes: earthquakes
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L
  .control
  .layers(baseMaps, overlays)
  .addTo(map);

// Our AJAX call retrieves our earthquake geoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", function(data) {

  // This function returns the style data for each of the earthquakes we plot on
  // the map. We pass the magnitude of the earthquake into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // This function determines the color of the marker based on the magnitude of the earthquake.
  function getColor(depth) {
    switch (true) {
    case depth > 90:
      return "#ea2c2c";
    case depth > 70:
      return "#ea822c";
    case depth > 50:
      return "#ee9c00";
    case depth > 30:
      return "#eecc00";
    case depth > 10:
      return "#d4ee00";
    default:
      return "#98ee00";
    }
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }

    return magnitude * 4;
  }

  // Here we add a GeoJSON layer to the map once the file is loaded.
  L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each marker to display the magnitude and location of
    // the earthquake after the marker has been created and styled
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "Magnitude: "
          + feature.properties.mag
          + "<br>Depth: "
          + feature.geometry.coordinates[2]
          + "<br>Location: "
          + feature.properties.place
      );
    }
    // We add the data to the earthquake layer instead of directly to the map.
  }).addTo(earthquakes);

  // Then we add the earthquake layer to our map.
  earthquakes.addTo(map);

  // Here we create a legend control object.
  var legend = L.control({
    position: "bottomright"
  });

  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");

    var grades = [-10, 10, 30, 50, 70, 90];
    var colors = [
      "#98ee00",
      "#d4ee00",
      "#eecc00",
      "#ee9c00",
      "#ea822c",
      "#ea2c2c"];

    // Loop through our intervals and generate a label with a colored square for each interval.
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML += "<i style='background: "
        + colors[i]
        + "'></i> "
        + grades[i]
        + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // We add our legend to the map.
  legend.addTo(map);

  // Here we make an AJAX call to get our Tectonic Plate geoJSON data.
  d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json",
    function(platedata) {
      // Adding our geoJSON data, along with style information, to the tectonicplates
      // layer.
      L.geoJson(platedata, {
        color: "orange",
        weight: 2
      })
      .addTo(tectonicplates);

      // Then add the tectonicplates layer to the map.
      tectonicplates.addTo(map);
    });
});