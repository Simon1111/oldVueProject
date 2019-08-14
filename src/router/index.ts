import Vue              from 'vue'
import Router           from 'vue-router'
// import VueRouterMiddleware, { middleware } from 'vue-router-middleware'
import Route_Default    from './default'
import Route_Menu       from './routes'
import Route_Hide       from './hide'
import Route_SSP_req    from './sspLog/requests'

// import Route_Auth       from '@/components/Middleware/Login'


Vue.use(Router);
// Vue.use(VueRouterMiddleware,{
//     Router,
//     middlewares: {
//       // Convert to camelcase to dash string ex. requireAuth saves require-auth
//       requireAuth(params, to, from, next) {
//         // Logic here
//       },
//       checkPermission(params, to, from, next) {
//         // Get params
//         next( params.includes('super-user') )
//       }
//     }
// });

export default new Router({
    mode: 'history',
    routes: [].concat(Route_Default,Route_Menu,Route_Hide,Route_SSP_req)
    // routes: [
    //     ...middleware('require-auth', [].concat(Route_Default,Route_Menu,Route_Hide)),
    //     {
    //         // Route without middlewares
    //         path: '/login',
    //         name: 'login',
    //         component: Route_Auth
    //     }
    // ]
})