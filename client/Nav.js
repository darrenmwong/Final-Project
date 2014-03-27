if (Meteor.isClient) {

 alertSubmit = function() {
    console.log('hi');
    var des = $('#alertDescription').val();
    console.log(des);

    var woot = Profile.findOne({id: Meteor.userId()});
        console.log(woot.coords);
//        if(navigator.geolocation) {
//            navigator.geolocation.getCurrentPosition(function(position) {
//            console.log('geolocation is on');
//        var center = position.coords;  
//            console.log(point);
//            });
    
        
             
    };

   Template.menu.events({

    'click .menu-toggle' : function() {
        $(".navBarContainer").toggleClass('shift');
        console.log('clicked toggle menu');
        console.log('WORKING AS INTENDED');
    },

    'click #profile' : function() {
        if (document.getElementById("profile-page")) { 

            $('#profile-page').remove(); 
            console.log('deleted dom element profile-page');
           }     
        else {
             console.log('render of profile');
             $("body").prepend(Template.profile);
             }
    },
    
    'click #log-out' : function() {
        Meteor.logout(function(err) {
         if (err) {
            //show error message
         } else {
            //show alert that says logged out
         }
       }); 
        console.log('clicked log-out');
    },

    'click #contact' : function() {
        console.log('clicked contact');
    },

    'click #alert' : function() {
        if (document.getElementById('alert-form')) {
            $('#alert-form').remove();
        }
        else {
            $('body').prepend(Template.alertTemplate);
             $('#alertSubmit').click(function() {
                         alertSubmit();
                
            
    });
 
        }
     }

  });
    
   

};


