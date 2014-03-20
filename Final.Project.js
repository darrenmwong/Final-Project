if (Meteor.isClient) {

  Template.mapPost.rendered = function() {
    var mapOptions = {
        center: new google.maps.LatLng(37.7645, -122.4294),
        zoom: 10
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
    };

  google.maps.event.addDomListener(window, 'load', initialize);  

  Template.hello.greeting = function () {
    return "Welcome to Final.Project.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
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
