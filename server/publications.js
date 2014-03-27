Meteor.publish('Profile', function() {
        return Profile.find();
    });
Meteor.publish('Alerts', function() {
        return Alerts.find();
    });
