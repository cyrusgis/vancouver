//Init Overlays
var overlays = {};

//Init BaseMaps
var basemaps = {
  "OpenStreetMaps": L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      minZoom: 2,
      maxZoom: 19,
      id: "osm.streets"
    }
  ),
  "Google-Map": L.tileLayer(
    "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
    {
      minZoom: 2,
      maxZoom: 19,
      id: "google.street"
    }
  ),
  "Google-Satellite": L.tileLayer(
    "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    {
      minZoom: 2,
      maxZoom: 19,
      id: "google.satellite"
    }
  ),
  "Google-Hybrid": L.tileLayer(
    "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
    {
      minZoom: 2,
      maxZoom: 19,
      id: "google.hybrid"
    }
  )
};

//Map Options
var mapOptions = {
  zoomControl: false,
  attributionControl: false,
  center: [49.249094796388015, -123.14231872558592],
  zoom: 6,
  layers: [basemaps.OpenStreetMaps]
};

//Render Main Map
var map = L.map("map", mapOptions);

//Render Zoom Control
L.control
  .zoom({
    position: "topleft"
  })
  .addTo(map);

var sidebar = L.control
  .sidebar({
    autopan: false,
    container: "sidebar",
    position: "right"
  })
  .addTo(map);

//Render Layer Control & Move to Sidebar
var layerControl = L.control
  .layers(basemaps, overlays, {
    position: "topright",
    collapsed: false
  })
  .addTo(map);
var oldLayerControl = layerControl.getContainer();
var newLayerControl = $("#layercontrol");
newLayerControl.append(oldLayerControl);
$(".leaflet-control-layers-list").prepend("<strong class='title'>Layers</strong><br>");

var layer = L.geoJson(
            [
  {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Garibaldi Lake",
        "Description": "Garibaldi Lake is a turquoise-coloured alpine lake in British Columbia, Canada, located 37 km north of Squamish and 19 km south of Whistler. The lake lies within Garibaldi Provincial Park, which features mountains, glaciers, trails, forests, flowers, meadows, waterfalls.",
        },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.03039550781249,
          49.93796363805727
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Joffre Lake",
        "Description": "The Joffre Lake hike offers a little bit of everything you could want in a day hike. At 10 km, the hike to Joffre Lakes not too long, but with a steady uphill climb and several technical sections, it still offers a challenge. There are three turquoise, glacier-fed lakes, each more spectacular than the last."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.47687339782715,
          50.34693926919953
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-symbol": "",
        "Name": "Tunnel Bluffs",
        "Description": "Tunnel Bluffs is a lookout point over the Howe Sound near the village of Lions Bay on the Sea to Sky Highway, providing one of the best views of the Howe Sound in the region."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.23786087139511,
		  49.49022708470253
        ]
      }
    },
	{
      "type": "Feature",
      "properties": {
        "marker-symbol": "",
        "Name": "Eagle Bluffs",
        "Description": "The Eagle Bluffs trail in Cypress Provincial Park is one of the most popular hikes in Vancouver. Its close proximity to the city, moderate difficulty and amazing views over downtown Vancouver and Howe Sound make it a favourite Vancouver hike amongst tourists and locals alike."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.23458878385831,
		  49.38278655595352
        ]
      }
    }
  ]
}
],
            {
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(feature.properties.Description);
                }}).addTo(map);
