if (Meteor.isClient) {
    var interval = function() {

        setInterval(function() {
            var user = Meteor.userId();
            var a = Alerts.findOne({id: user});
            if(a) {
                des = a.description;
                $('body').prepend(Template.alertProfile);
                   $('#alertDescription').append(des); 
               Meteor.call('alertsRemove', Alerts.findOne({id: user}));
            } else {
              }
        }, 8000);
    }
    interval();


}


    



