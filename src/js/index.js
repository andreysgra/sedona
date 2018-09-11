"use strict";

(function() {
  // Форма поиска гостиницы
  const buttonSearch = document.getElementById("search-button");
  const formSearch = document.querySelector(".form-search");

  if (buttonSearch && formSearch) {
    formSearch.classList.add("form-search--closed");
    buttonSearch.addEventListener("click", toggleFormSearch);
  }

  function toggleFormSearch(event) {
    event.preventDefault();
    formSearch.classList.toggle("form-search--closed");
    formSearch.classList.toggle("form-search--opened");
  }
})();

svg4everybody();

// Google карта
function initMap() {
  let latLng = new google.maps.LatLng(34.868633, -111.761734);

  let mapOptions = {
    center: latLng,
    zoom: 9,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    scrollwheel: false,
    disableDefaultUI: true
  };

  let map = new google.maps.Map(document.getElementById("map"), mapOptions);
  let marker = new google.maps.Marker({
    map: map,
    position: latLng
  });
}
