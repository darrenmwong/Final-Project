if (Meteor.isClient) {
   Template.menu.events({

    'click .menu-toggle' : function() {
        console.log('clicked toggle menu');
        $('.menu-border'._id).slideUp('slow');
        console.log('WORKING AS INTENDED');
    },

    'click #sign-up' : function() {
        if (document.getElementById('signup-form')) {
        $('#signup-form').remove();
        }
        
        else {
         console.log('render sign-up');
         $("body").prepend(Template.signup);
        }
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
        console.log('clicked alert');
    }
  });

};


