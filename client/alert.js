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
    $('#alertDescription').val('');
    $('#alertDescription').css('height', '');
    },
    
    'click #alertDescription' : function() {
    $('#alertDescription').css('height','85px');
    },

    'click #feedId' : function() {
        var that = this;
        console.log(this);
        var info = Profile.findOne({id: that.id});  
        Meteor.call('feedClick', info, function(err,data) {
            if(err)
                console.log(err);
            });
        


        $('#fadeOut').fadeOut(800, function() {
            $('.alertInfo').show('fast'); 
        });
        
    },




    'click #alertBack' : function() {
        $('#alertDescription').css('height', '');
        $('.alertInfo').fadeOut('fast', function() {
            $('#fadeOut').show('slow');
        });
    }


});


Template.alertTemplate.alertFeed = function() {
    return Alerts.find({id: Meteor.userId()});
    
};

Template.alertTemplate.alertDes = function() {
         return Profile.find({click: true});
 };
    

