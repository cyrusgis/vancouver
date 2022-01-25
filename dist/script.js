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
    "type":"Feature",
    "properties":{
      "name":"Garibaldi Lake",
      "popupContent":"Garibaldi Lake is a turquoise-coloured alpine lake in British Columbia, Canada, located 37 km north of Squamish and 19 km south of Whistler. The lake lies within Garibaldi Provincial Park, which features mountains, glaciers, trails, forests, flowers, meadows, waterfalls."
    },
    "geometry":{
      "type":"Point",
      "coordinates":[
        -123.01814034934785,49.929176024669395
      ]
    }
  }
  {
    "type":"Feature",
    "properties":{
      "name":"Garibaldi Lake",
      "popupContent":"2"
    },
    "geometry":{
      "type":"Point",
      "coordinates":[
        -122.01814034934785,49.929176024669395
      ]
    }
  }
],
            {
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(feature.properties.popupContent);
                }}).addTo(map);
