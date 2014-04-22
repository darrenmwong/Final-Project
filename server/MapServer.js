if (Meteor.isServer) { 
  Meteor.startup(function () { 
    Meteor.methods({ 
        alertSave: function(data) {
         
         Profile.update({id: Meteor.userId}, {$set: {alerts: true}});
        },
        
        profileSave: function(data) {
               console.log(data);
         Profile.update({id: Meteor.userId()}, {$set: {info: data}});

        },
 
        feedClick: function(data) {
                console.log(data);
         Alerts.update({description: data.description}, {$set: {click: true}});
        },


        feedFalse: function() {
            Alerts.update({click: true}, {$set: {click: false}});
     }
    }); 
});

};
