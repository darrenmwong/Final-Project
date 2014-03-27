if (Meteor.isServer) { 
  Meteor.startup(function () { 
    Meteor.methods({ 
        savePosition: function(coords) { 

            if(Profile.findOne({id: Meteor.userId()})) {
            
             Profile.update({ coords: coords });

            }
            else {

             Profile.insert({id: Meteor.userId() , coords: coords });

            } 
                      
        }
        
         
 
    }); 
});

};
