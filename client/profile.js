Template.profile.profilePicture = function() {
        return Profile.find({id: Meteor.userId()});
};


Template.profile.events({
    'click #submit-profile' : function(e) {
        e.preventDefault();
        var name = $('#petName').val();
        var type = $('#petType').val();
        var contact = $('#profileContact').val();
        var data = {
             name: name, 
             type: type,
             contact: contact
        }
        Meteor.call('profileSave',data, function(err,data) {
        if (err) {
            console.log(err);
        } else {
        }
        });
    }


});
