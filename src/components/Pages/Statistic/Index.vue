<template>
    <div>
        <h1 class="display-3">Статистика</h1>
        <p>По выкупаемости трафика</p>
        <div class="hr-cust--par">
            <hr class="hr-cust">
        </div>
        <!-- <p>Статистика по выкупаемости трафика<br />Группировка: SSP, дата, компании, объявления, время суток, платформа, девайс, сайт<br />Фильтры (множественный): SSP, дата, компании, объявления, время суток, платформа, девайс, сайт <br />Представление: запросов, показы, клики, цена клика, CTR, прибыль DSP, CPM, реальная стоимость клика<br />Создать шаблон предствления:<br />1. Название<br />2. поля из представления<br />3. Выбрать группировки<br />4. Выбрать фильтры</p> -->
        <v-tabs dark color="light-blue darken-3" show-arrows>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
                v-for="i in templates"
                :href="'#tab-' + i"
                :key="i.id"
            >
                {{ i.name }}
            </v-tab>
        </v-tabs>

        <AddTemplate :templates=templates :isAddTemplate=isAddTemplate />

        <v-card>
            <statistic-groups />
            <v-divider />
            <statistic-filter />
        </v-card>

        <div style="padding: 20px 0">
            <v-btn color="info"
                    @click="clear()">
                Сбросить
                <v-icon style="margin-left:10px;margin-right:-10px">close</v-icon>
            </v-btn>  
            <v-btn color="success" @click="applyFilters">
                Применить
            </v-btn>
            <v-btn color="warning" @click="isAddTemplate=true">
                Сохранить как шаблон
            </v-btn>
        </div>
        <Table :isAddTemplate=isAddTemplate />
    </div>
</template>

<script>
import AddTemplate from './AddTemplate'
import Table from './Table'
import StatisticFilter from './Filter'
import StatisticGroups from './Groups'

export default {
    name: 'About',
    components: {
        AddTemplate,
        Table,
        StatisticFilter,
        StatisticGroups
    },
    data(){
        return{
            new: true,
            isAddTemplate: false,
            templates: [
                { id: 0, name: 'Основная', param: [1,23,5,9] },
                { id: 1, name: 'Вечерний пуш', param: [1,23,5,9] },
                { id: 2, name: 'Дневной пуш', param: [1,23,5,9] },
                { id: 3, name: 'По медицин тизер', param: [1,23,5,9] },
                // { id: 4, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 5, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 6, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 7, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 8, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 9, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 10, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 11, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 12, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 13, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 14, name: 'Вечерний пуш', param: [1,23,5,9] },
                // { id: 15, name: 'Вечерний пуш', param: [1,23,5,9] },
            ]
        }
    },
    methods: {
        applyFilters(){
            alert(123)
            // axios ..
        }
        // fetch () {
        //     if (this.breweries.length) return

        //     return fetch('https://api.openbrewerydb.org/breweries')
        //         .then(res => res.json())
        //         .then(data => (this.breweries = data))
        //         .catch(err => console.log(err))
        // },
    }
}
</script>

<style>
    .scroll-y{
        overflow-y: inherit !important;
    }
</style>
