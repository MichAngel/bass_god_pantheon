// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 47.6205, lng: -122.3493 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 18,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}


// Smooth Scrolling
$('#main-nav a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      750
    );
  }
});



