// triggered when the user scrolls the page
window.addEventListener("scroll", loadMapOnScroll);

// checks if the map container is within the viewport. If the map container is visible, remove the event listener and load the Leaflet map
let mapLoaded = false;

function loadMapOnScroll() {
  const mapContainer = document.getElementById("map");
  const rect = mapContainer.getBoundingClientRect();

  if (!mapLoaded && rect.top <= window.innerHeight && rect.bottom >= 0) {
    // The map container is in the viewport, remove the event listener and load the map
    window.removeEventListener("scroll", loadMapOnScroll);
    mapLoaded = true;
    loadLeafletMap();
  }
}

// Call the function once to check if the map is visible on page load
loadMapOnScroll();

// initialize the map on the "map" div with a given center and zoom
function loadLeafletMap() {
  var map = L.map("map", {
    center: [41.3876, 2.17539], // Latitude, Longitude
    zoom: 13, // Zoom on the map
    scrollWheelZoom: false, // Disables scrolling to allow user to scroll down more easily
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  var marker = L.marker([41.3876, 2.17539])
    .addTo(map)
    .bindPopup("Palau de la Música") // Name of the marker of the map
    .openPopup();
}
