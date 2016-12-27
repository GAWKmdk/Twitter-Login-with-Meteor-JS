import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.content.users = function () {
  return Meteor.users.find();
};


//login update
Meteor.users.update({_id:Meteor.userId()}, {$set {"profile.twitterpic":user.services.twitter.profile_image_url}});