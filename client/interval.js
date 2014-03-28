if (Meteor.isClient) {
    var interval = function() {

        setInterval(function() {
            var user = Meteor.userId();
            var a = Alerts.findOne({id: user});
            if(a) {
                console.log('Alerting');
                des = a.description;
                $('body').prepend(Template.alertProfile);
                   $('#alertDescription').append(des); 
               Meteor.call('alertsRemove', Alerts.findOne({id: user}));
            } else {
                console.log('Nothing to Alert');
              }
        }, 8000);
    }
    interval();


}


    



