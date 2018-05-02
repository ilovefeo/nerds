function initMap() {
    var uluru = {lat: 59.939239, lng: 30.324703};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: 'img/map-marker.png'
      
    });
  }