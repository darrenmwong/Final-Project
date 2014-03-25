if (Meteor.isClient) {
Template.menu.events({
    'click .menu-toggle' : function() {
        console.log('clicked toggle menu');
        $('.menu-border'._id).slideUp('slow');
        console.log('WORKING AS INTENDED');
    }
});
};
