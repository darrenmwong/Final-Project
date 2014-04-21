//setTimeout(function(){
    Template.profile.helpers({
      picture:function(){
        var user = Profile.findOne({id: Meteor.userId()}).picture;
          return user;

     }
    });
//}, 3000);
