if (Meteor.isClient) {

  Template.mapPost.rendered = function() {
    if (navigator.geolocation) { //Checks if browser supports geolocation
        navigator.geolocation.getCurrentPosition(function (position) {                                                              
        var latitude = position.coords.latitude;                    
        var longitude = position.coords.longitude;                 
        var coords = new google.maps.LatLng(latitude, longitude); 
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

//Radius around current location

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
        function autoUpdate() {
             navigator.geolocation.getCurrentPosition(function(position) {  
             var newPoint = new google.maps.LatLng(position.coords.latitude, 
                                          position.coords.longitude);

             if (marker) {
              // Marker already created - Move it
             marker.setPosition(newPoint);
             }
            else {
             // Marker does not exist - Create it
             marker = new google.maps.Marker({
             position: newPoint,
             map: map
             });
           }

            // Center the map on the new position
             map.setCenter(newPoint);
             }); 

           // Call the autoUpdate() function every 5 seconds
             setTimeout(autoUpdate, 5000);
            }

            autoUpdate();
    
       });
     }
   }; 


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
