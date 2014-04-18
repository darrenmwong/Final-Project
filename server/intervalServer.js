 Meteor.methods({                                                                   
   alertsRemove: function(userid){                                                   
        if(Alerts.findOne({id: null})) {
            Alerts.remove({id: null});
        };
     try {
     Alerts.remove({_id: userid._id});       
     } catch(error) {
     } 
  }
 }); 
