if (Meteor.isClient) {

  Template.mapPost.rendered = function() {
    if (navigator.geolocation) { //Checks if browser supports geolocation

      var map,
                currentPositionMarker,
                mapCenter = new google.maps.LatLng(40.700683, -73.925972),
                map;

            function initializeMap()
            {
                map = new google.maps.Map(document.getElementById('map-canvas'), {
                   zoom: 16,
                   center: mapCenter,
                   mapTypeId: google.maps.MapTypeId.ROADMAP
                 });
            }

            function locError(error) {
                // the current position could not be located
                alert("The current position could not be found!");
            }

            function setCurrentPosition(pos) {
              var im = "http://i.imgur.com/TJqBMd9.png"

                currentPositionMarker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(
                        pos.coords.latitude,
                        pos.coords.longitude
                    ),
                    title: "You are here",
                    icon: im
                });
                map.panTo(new google.maps.LatLng(
                        pos.coords.latitude,
                        pos.coords.longitude
                    ));
            /*  var sunCircle = {
                  strokeColor: "#19A3D1",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: "#19A3D1",
                  fillOpacity: 0.35,
                  map: map,
                  center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude ),
                  radius: 402.336 // in meters
             };
                  cityCircle = new google.maps.Circle(sunCircle)
                 cityCircle.bindTo('center', currentPositionMarker, 'position'); */
            }

            function displayAndWatch(position) {
                // set current position
                setCurrentPosition(position);
                // watch position
                watchCurrentPosition();
            }

            function watchCurrentPosition() {
                var positionTimer = navigator.geolocation.watchPosition(
                    function (position) {
                        setMarkerPosition(
                            currentPositionMarker,
                            position
                        );
                    console.log("changed position");
                var myLatlng = new google.maps.LatLng(
                        position.coords.latitude,
                        position.coords.longitude
                        );

  //                  console.log(myLatlng);
  //                  Meteor.call('savePosition', this._id, {coords : myLatlng});

            if(Profile.findOne({id: Meteor.userId()})) {
            
             Profile.update({_id: this._id}, {$set: { coords: myLatlng}});

            }
            else {

             Profile.insert({id: Meteor.userId() , coords: myLatlng });

            } 
             
            });
            }

            function setMarkerPosition(marker, position) {
                marker.setPosition(
                    new google.maps.LatLng(
                        position.coords.latitude,
                        position.coords.longitude)
                );
            }

            function initLocationProcedure() {
                 var options = {
                   enableHighAccuracy: true,
                   timeout: 60000,
                   maximumAge: 1000
                }
                initializeMap();
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(displayAndWatch, locError, options);
                } else {
                    alert("Your browser does not support the Geolocation API");
                }
            }
            

            $(document).ready(function() {
                initLocationProcedure();
            });

}
}
}
