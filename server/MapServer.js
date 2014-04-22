if (Meteor.isServer) { 
  Meteor.startup(function () { 
    Meteor.methods({ 
        alertSave: function(data) {
         
         Profile.update({_id: this._id}, {$set: {alerts: true}});
        }
         
 
    }); 
});

};
