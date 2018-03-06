// Import client startup through a single index entry point

//import './routes.js';



// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

import VueMeta from 'vue-meta';
Vue.use(VueMeta)

// Main app
import App from '/imports/ui/App.vue';
import store from '/imports/vuex/store'

Meteor.startup(() => {
    new Vue({
        store,
        render: h => h(App),
}).$mount('app');
});