if (Meteor.isClient) {

  Template.mapPost.rendered = function() {

         map = new google.maps.Map(document.getElementById("map-canvas"), watchId);
    if (navigator.geolocation) { //Checks if browser supports geolocation

       var watchId = navigator.geolocation.watchPosition(success, error, options);

       var options = {
             enableHighAccuracy: true,
             timeout: 60000,
             maximumAge: 1000
        };
//Error
        function error() {
        alert("Sorry, no position available.");
        };
//Watcher
        function success(location) {
            console.log("changing");
            var myLatlng = new google.maps.LatLng(location.coords.latitude,location.coords.longitude);
                map.setCenter(myLatlng);
                map.setZoom(15);
    //show current location on map
                marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: im
         });
         var sunCircle = {
            strokeColor: "#19A3D1",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#19A3D1",
            fillOpacity: 0.35,
            map: map,
            center: new google.maps.LatLng(location.coords.latitude,location.coords.longitude),
            radius: 804.672 // in meters
        };
        cityCircle = new google.maps.Circle(sunCircle)
        cityCircle.bindTo('center', marker, 'position');
 
        navigator.geolocation.clearWatch(watchId);
     //  });
     }


        }
//Sets Marker
        var im = "http://www.robotwoods.com/dev/misc/bluecircle.png"
    //    var marker = new google.maps.Marker({
    //          position: coords,
    //          title: 'Your Location',
    //          map: map,
    //          icon: im
    //     });
//Geolocation Marker

//Radius around current location

     //  });
     }
   }; 




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
