import Statistic    from '@/components/Pages/Statistic/Index.vue' // Statistic
import Logs         from '@/components/Pages/Logs/Index.vue' // Logs
import Cliks        from '@/components/Pages/Logs/Clicks/Index.vue' // Logs
import Requests     from '@/components/Pages/Logs/Requests/Index.vue' // Logs
import Shows        from '@/components/Pages/Logs/Shows/Index.vue' // Logs
import Finance      from '@/components/Pages/Finance/Index.vue' // Finance
import Companies    from '@/components/Pages/Companies/Index.vue' // Finance

export default [
    { path: '/companies', text: 'Компании', component: Companies },
    { path: '/statistic', text: 'Статистика', component: Statistic },
    {
        path: '', text: 'Логи', component: Logs, view: true,
        children: [
            { path: '/log/cliks', name: 'cliks', text: 'Лог кликов', component: Cliks, view: true },
            { path: '/log/requests', name: 'requests', text: 'Лог запросов', component: Requests, view: true },
            { path: '/log/shows', name: 'shows', text: 'Лог показов', component: Shows, view: true }
        ]
    },
    { path: '/finance', text: 'Финанасы', component: Finance },
]