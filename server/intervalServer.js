 Meteor.methods({                                                                   
   alertsRemove: function(userid){                                                   
     try {
     Alerts.remove({_id: userid._id});                                               
     } catch(error) {
     console.log(error);
     } 
  }
 }); 
