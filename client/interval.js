user = Meteor.userId();

if (Meteor.isClient) {
    var interval = function() {
        setInterval(function() {
            if(Alerts.find({id: user})) {
                console.log('FOUND');
            }
        }, 8000);
    }
    interval();
}
