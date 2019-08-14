import Home         from '@/components/Pages/Home/Index.vue'
import NotFound     from '@/components/Pages/Errors/e_404.vue'

export default [
    { path: '/404', text: 'Ошибка 404', component: NotFound },  
    { path: '*', text: '', redirect: '/404' },
    { path: '/', text: 'Главная', component: Home }
]