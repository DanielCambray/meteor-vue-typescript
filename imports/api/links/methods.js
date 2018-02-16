// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.collection';

Meteor.methods({
    'links.insert'(title, url) {
        check(url, String);
        check(title, String);

        return Links.insert({
            url,
            title,
            createdAt: new Date(),
        });
    },
    'links.remove'(_id) {
        Links.remove(_id);
    }

});
