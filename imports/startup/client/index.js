// Import client startup through a single index entry point

import './routes.js';

// Import the router factory
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

// Create router instance
const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior,
})

// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

import VueMeta from 'vue-meta';
Vue.use(VueMeta)

// Main app
import AppLayout from '/imports/ui/layouts/AppLayout.vue';

import store from '/imports/vuex/store'

Meteor.startup(() => {

    const router = routerFactory.create();

    new Vue({
        store,
        router,
        render: h => h(AppLayout),
}).$mount('app');
});