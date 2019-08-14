<template>
    <div>
        <h1 class="display-3">Лог кликов</h1>
        <div class="hr-cust--par">
            <hr class="hr-cust">
        </div>
        <v-filter />
        <br />
        <Table :headers=headers :items=items />    
    </div>
</template>

<script>
import Table from '@/components/Pages/Logs/Table'
import Filter from '../Filter'

export default {
    name: 'Clicks',
    components: {
        Table,
        'v-filter': Filter
    },
    data () {
        return {
            headers: [
                {
                    text: 'SSP',
                    align: 'left',
                    sortable: false,
                    value: 'ssp'
                },
                { text: 'Сайт', sortable: false, value: 'sites' },
                // { text: 'Companies', value: 'companies' },
                { text: 'Объявления', sortable: false, value: 'ads' },
                { text: 'Время суток', sortable: false, value: 'timeOfDay' },
                { text: 'Платформа', sortable: false, value: 'platforms' },
                { text: 'Девайс', sortable: false, value: 'devices' },
                { text: 'Дата', sortable: false, value: 'date' }
            ],
            items: [
                {
                    value: false,
                    ssp: 'Market Gid',
                    site: 'yoga.ru',
                    ads: 'Объявление в миниатюре',
                    timeOfDay: '00:00-06:00',
                    platforms: 'Все платформы',
                    devices: 'Все устройства',
                    date: '2019-02-01',
                    // companies: 6.0,
                },{
                    value: false,
                    ssp: 'Market Gid',
                    site: 'yandex.ru',
                    ads: 24,
                    timeOfDay: '00:00-06:00',
                    platforms: 'Все платформы',
                    devices: 'Все устройства',
                    date: '2019-02-01',
                    // companies: 6.0,
                },{
                    value: false,
                    ssp: 'Market Gid',
                    site: 'google.ru',
                    ads: 24,
                    timeOfDay: '00:00-06:00',
                    platforms: 'Все платформы',
                    devices: 'Все устройства',
                    date: '2019-02-01',
                    // companies: 6.0,
                }
            ]
        }
    }
}
</script>
