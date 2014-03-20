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
       mapTypeId: google.maps.MapTypeId.ROADMAP //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRIAN
     };
     map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
     var marker = new google.maps.Marker({
              position: coords,
              title: 'Your Location',
              map: map
            });
    // directionsDisplay.setMap(map);
    // directionsDisplay.setPanel(document.getElementById('panel'));
    // var request = {
    //   origin: coords,
     //  destination: 'BT42 1FL',
     //  travelMode: google.maps.DirectionsTravelMode.DRIVING
    // };

    // directionsService.route(request, function (response, status) {
     //  if (status == google.maps.DirectionsStatus.OK) {
      //   directionsDisplay.setDirections(response);
      // }
    // });
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
