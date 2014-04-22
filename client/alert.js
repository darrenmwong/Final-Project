Template.alertTemplate.events({
    
    'click #alertSubmit' : function(e) {
        e.preventDefault();
        var data = $('#alertDescription').val();
            console.log(data);
        Meteor.call('alertSave', function(err, data) {
            if (err)
                console.log(err);
        });
               console.log('ALERTING');
    $('#alertFormContainer').toggleClass('toggle_profile');
    }
});

