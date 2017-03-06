import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/m1',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/m1/Dashboard.vue'], resolve)
                },
                {
                    path: '/account',
                    component: resolve => require(['../components/m1/Account.vue'], resolve)
                }
            ]
        },
        {
            path: '/page',
            component: resolve => require(['../components/page/Page.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/PageList.vue'], resolve)
                }
            ]
        },
        {
            path: '/contact',
            component: resolve => require(['../components/contact/Contact.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/contact/ContactList.vue'], resolve)
                }
            ]
        },
        {
            path: '/edm',
            component: resolve => require(['../components/edm/EDM.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/edm/EDMList.vue'], resolve)
                }
            ]
        },
        {
            path: '/sms',
            component: resolve => require(['../components/sms/SMS.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/sms/SMSList.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/common/Login.vue'], resolve)
        }
    ]
})
