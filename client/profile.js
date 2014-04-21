Template.profile.helpers({
    picture:function(){
       return Profile.findOne({id: Meteor.userId()}).picture;

 }
});
