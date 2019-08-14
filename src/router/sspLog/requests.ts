import Requests  from '@/components/Pages/Logs/Requests/Marketgid/Index.vue' // Logs

export default [
    { path: '/log/requests/marketgid', name: 'requests', text: 'Маркет-Гит', component: Requests, view: true },
    { path: '/log/requests/marketgid', name: 'requests', text: 'Не маркет-Гит', component: Requests, view: true },
]