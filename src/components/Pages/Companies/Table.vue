
<template>
    <v-data-table
        :headers="headers"
        :items="items"
        rowsPerPageText="Результатов на странице"
        class="elevation-1">
        <template slot="items" slot-scope="props">
            <tr class="clikcable-column">
                <td class="text-xs-left" :class="props.index==activeColumn?'grey lighten-2':''" style="padding-right: 0;">
                    <v-btn :color="props.index!=activeColumn?'green':'warning'" class="btn-small" title="Подробнее" @click="show_more(props.index)">
                        <v-icon size="20" color="white" v-if="props.index!=activeColumn">arrow_forward</v-icon>
                        <v-icon size="20" color="white" v-else>close</v-icon>
                    </v-btn>
                    <template v-if="props.index==activeColumn">
                        <v-btn color="green" class="btn-small" title="Редактировать компанию" @click="addItemOpen(props.item.id)">
                            <v-icon size="20" color="white">create</v-icon>
                        </v-btn>
                        <v-btn color="error" class="btn-small" title="Удалить компанию" @click="goTo(deleteItem, 'Вы уверены что хотите удалить компанию «'+props.item.name+'»?')">
                            <v-icon size="20" color="white">delete</v-icon>
                        </v-btn>
                    </template>
                </td>
                <td>
                    <span v-if="props.index!=activeColumn">{{ props.item.name }}</span>
                    <b v-else>{{ props.item.name }}</b>
                </td>
                <td width="50px">{{ props.item.material }}</td>
                <td>{{ props.item.shows }}</td>
                <td>{{ props.item.clicks }}</td>
                <td>{{ props.item.ctr }}</td>
                <td>{{ props.item.expense }}</td>
                <td width="100px">
                    <div>
                        <input
                            v-model="props.item.limit"
                            label=""
                            class="v-input__column-field"
                            width="80px"
                            />
                    </div>
                </td>
                <td>{{ props.item.status }}</td>
            </tr>
            <tr v-if="props.index==activeColumn" :class="props.index==activeColumn?'grey lighten-3':''">
                <td colspan="16">
                    <CompaniesFilter />
                    <v-toolbar class="" flat color="grey lighten-5">
                        <v-btn color="light-green" @click="addAdsOpen(props.item.id)" dark>Добавить объявление</v-btn>
                        <!-- <v-toolbar-title><v-subheader class="padding-zero">Список объявлений</v-subheader></v-toolbar-title> -->
                        <v-spacer />
                    </v-toolbar>
                    <TableAds @addAdsOpen=addAdsOpen :curentId=props.item.id />
                    <br />
                </td>
            </tr>
        </template>
    </v-data-table>
</template>

<script>
import TableAds from './TableAds'
import goTo from '@/mixins/goTo.js'
import CompaniesFilter from './Filter'

export default {
    mixins: [goTo],
    components: {
        CompaniesFilter,
        TableAds
    },
    data:() => ({
            activeColumn: null,
            headers: [
                { text: '', sortable: false },
                {
                    text: 'Компания',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Материалов акт. / Всего', sortable: false, value: 'material', width: '50px' },
                { text: 'Показы', sortable: false, value: 'shows' },
                { text: 'Клики', sortable: false, value: 'clicks' },
                { text: 'CTR', sortable: false, value: 'ctr' },           
                { text: 'Расход', sortable: false, value: 'expense' },
                { text: 'Лимит', sortable: false, value: 'limit' },
                { text: 'Cтатус', sortable: false, value: 'status' }
            ],
            items: [
                {
                    id: 1,
                    name: 'Женский сайт',
                    price: 12,
                    material: 23,
                    limit: 43,
                    shows: 154,
                    clicks: 6.2,
                    ctr: 2,
                    expense: 24,
                    status: 'Активен',
                    date: '10-02-2008'
                },
                {
                    id: 2,
                    name: 'Style Wedding',
                    material: 23,
                    price: 12,
                    limit: 43,
                    shows: 154,
                    clicks: 6.0,
                    ctr: 2,
                    expense: 24,
                    status: 'Активен',
                    date: '10-02-2008'
                }
            ]
        }),
    watch: {
        'items.limit': function(newVal){            
            this.$set(this, 'props.item.limit', newVal.replace(/[^0-9]/gi, ''))
        }
    },
    methods:{
        show_more(id){
            (this.activeColumn != id) ? this.activeColumn = id : this.activeColumn = null;
        },
        addItemOpen(id){
            this.$emit('addItemOpen',id);
        },
        addAdsOpen(ids){
            this.$emit('adsFormOpen',ids);
        },
        deleteItem(){
            alert('действие удаление')
        }
    }
}
</script>