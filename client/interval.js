
if (Meteor.isClient) {
    var interval = function() {
        setInterval(function() {
            var user = Meteor.userId();
                console.log(user);
            if(Alerts.findOne({id: user})) {
                console.log('FOUND');
            } else {
                console.log('not Found');
              }
        }, 8000);
    }
    interval();
}
