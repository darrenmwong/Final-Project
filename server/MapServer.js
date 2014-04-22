if (Meteor.isServer) { 
  Meteor.startup(function () { 
    Meteor.methods({ 
        alertSave: function() {
    
         var hi = Profile.update({_id: this._id}, {$set: {alerts: true}});
        return hi 
        }
         
 
    }); 
});

};
