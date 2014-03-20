if (Meteor.isClient) {

  Template.mapPost.rendered = function() {
    if (navigator.geolocation) { //Checks if browser supports geolocation
        navigator.geolocation.getCurrentPosition(function (position) {                                                              
        var latitude = position.coords.latitude;                    
        var longitude = position.coords.longitude;                 
        var coords = new google.maps.LatLng(latitude, longitude); 
   //  var directionsService = new google.maps.DirectionsService();
  //   var directionsDisplay = new google.maps.DirectionsRenderer();
         var mapOptions = //Sets map options
             {
                 zoom: 15,  //Sets zoom level (0-21)
                 center: coords, //zoom in on users location
                 mapTypeControl: true, //allows you to select map type eg. map or satellite
                 navigationControlOptions:
                 {
                 style: google.maps.NavigationControlStyle.SMALL //sets map controls size eg. zoom
                 },
                 mapTypeId: google.maps.MapTypeId.ROADMAP
             };
         map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
         var marker = new google.maps.Marker({
              position: coords,
              title: 'Your Location',
              map: map
         });
        var sunCircle = {
        strokeColor: "#19A3D1",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#19A3D1",
        fillOpacity: 0.35,
        map: map,
        center: coords,
        radius: 804.672 // in meters
         };
        cityCircle = new google.maps.Circle(sunCircle)
        cityCircle.bindTo('center', marker, 'position');
       });
     }
   }; 

  Template.hello.greeting = function () {
    return "Welcome to Final.Project.";
  };

  Template.hello.events({
    'click input': function () {
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
