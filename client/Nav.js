if (Meteor.isClient) {
Template.menu.events({

    'click .menu-toggle' : function() {
        console.log('clicked toggle menu');
        $('.menu-border'._id).slideUp('slow');
        console.log('WORKING AS INTENDED');
    },

    'click #sign-up' : function() {
        var signUp = Meteor.render('register');
        console.log('render sign-up');
        console.log(signUp);
    },

    'click #profile' : function() {
        console.log('render function of profile');
    },
    
    'click #log-out' : function() {
        console.log('clicked log-out');
    },

    'click #contact' : function() {
        console.log('clicked contact');
    },

    'click #alert' : function() {
        console.log('clicked alert');
    }
 //   'click #log-out' : function() {
 //   };
});

};


