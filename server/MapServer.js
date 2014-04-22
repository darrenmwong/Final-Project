if (Meteor.isServer) { 
  Meteor.startup(function () { 
    Meteor.methods({ 
        alertSave: function(data) {
         
         Profile.update({id: Meteor.userId}, {$set: {alerts: true}});
        },
        
        profileSave: function(data) {
               console.log(data);
         Profile.update({id: Meteor.userId()}, {$set: {info: data}});

        }
 
    }); 
});

};
