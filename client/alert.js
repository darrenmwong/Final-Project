Template.alertTemplate.events({
    
    'click #alertSubmit' : function(e) {
        e.preventDefault();
        var data = $('#alertDescription').val();
            console.log(data);
        alertSubmit();
        Meteor.call('alertSave', data, function(err, data) {
            if (err)
                console.log(err);
        });
    $('#alertFormContainer').toggleClass('toggle_profile');
    },
    
    'click #alertDescription' : function() {
    $('#alertDescription').css('height','85px');
    }

});


Template.alertTemplate.alertFeed = function() {
    return Alerts.find({id: Meteor.userId()});
    
};
