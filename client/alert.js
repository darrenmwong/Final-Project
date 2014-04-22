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
    },

    'click #feedId' : function() {
        var that = this;
        console.log(this);   
        var info = Profile.findOne({id: that.id});  
        console.log(info);
        $('#fadeOut').fadeOut(1000, function() {
            $('.alertInfo').show('fast'); 
        });
    },

    'click #alertBack' : function() {
        $('.alertInfo').fadeOut('fast', function() {
            $('#fadeOut').show('slow');
        });
    }


});


Template.alertTemplate.alertFeed = function() {
    return Alerts.find({id: Meteor.userId()});
    
};
