import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import Home from '/imports/ui/pages/Home.vue'
import User from '/imports/ui/pages/User.vue'
import Test from '/imports/ui/pages/Test.vue'
import NotFound from '/imports/ui/pages/NotFound.vue'

RouterFactory.configure(factory => {
    // Simple routes
    factory.addRoutes([
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/user',
            name: 'user',
            component: User,
        },
        {
            path: '/test',
            name: 'test',
            component: Test,
        },
        {
            path: '*',
            component: NotFound,
        }
    ])
})