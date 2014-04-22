Template.profile.helpers({
      picture:function(){
        var user = Profile.findOne({id: Meteor.userId()}).picture;
          return user;

     }  
});


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
            console.log('saved');
        }
        });
    }


});
