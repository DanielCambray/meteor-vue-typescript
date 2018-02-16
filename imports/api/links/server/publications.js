// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.collection';

Meteor.publish('links', function () {
  return Links.find();
});
