<template>
    <v-dialog
        v-model="addItem"
        fullscreen hide-overlay transition="dialog-bottom-transition"
        >
        <v-card>
            <v-toolbar dark color="light-blue darken-3">
                <v-btn icon dark @click="$emit('addItemOpen',false)">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Создать компанию</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="$emit('addItemOpen',false)">Сохранить</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-list three-line subheader>
                {{def}}
                <br>
                {{item}}
                <v-form>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md6 lg6 xl6>
                            <v-card-text>
                                <v-text-field
                                    v-model="item.nameCompany"
                                    :counter="10"
                                    label="Название"
                                    required
                                />
                                <v-select
                                    v-model="item.teasers"
                                    :items="$store.state.teasers"
                                    item-text="name"
                                    item-value="id"
                                    multiple
                                    label="Тип компании (пока что тизеры)"
                                    required
                                    chips
                                />
                                <v-text-field
                                    v-model="item.limit"
                                    :counter="10"
                                    label="Лимит"
                                    required
                                />
                            </v-card-text>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg6 xl6>
                            <v-card-text>
                                <v-select
                                    v-model="item.devices"
                                    :items="$store.state.devices"
                                    label="Девайс (множественное, по умолч все)"
                                    item-text="name"
                                    item-value="id"
                                    />
                                <v-select
                                    v-model="item.countries"
                                    :items="$store.state.countries"
                                    item-text="name"
                                    item-value="id"
                                    multiple
                                    label="ГЕО (множественное, по умолч ру)"
                                    chips
                                    required
                                />
                                <v-select
                                    v-model="item.platforms"
                                    :items="$store.state.platforms"
                                    label="Платформы (множественное, по умолч все)"
                                    item-text="name"
                                    item-value="id"
                                    multiple
                                    chips
                                />
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
                <v-card-text>
                    <v-toolbar flat class="white toolbar-add">
                        <v-btn color="green" dark @click="changeAds">Добавить объявление</v-btn>
                        <!-- <v-toolbar-title><v-subheader class="padding-zero">Объявления</v-subheader></v-toolbar-title> -->
                        <v-spacer />
                    </v-toolbar>
                    <v-data-table
                        :headers="headers"
                        :items="adsItems"
                        no-data-text="Объявления не добавлены"
                        class="elevation-1 v-datatable--ads"
                        hide-actions >
                        <template slot="items" slot-scope="propsAds">
                            <tr>
                                <td width="100px">{{ propsAds.item.id }}</td>
                                <td width="300px">
                                    <img :src=propsAds.item.image alt="" width="100px">
                                    <img :src=propsAds.item.imagePrev alt="" width="100px">
                                    <h4>{{ propsAds.item.title }}</h4>
                                    <p>{{ propsAds.item.text }}</p>
                                </td>
                                <td>{{ propsAds.item.status }}</td>
                                <td>{{ propsAds.item.shows }}</td>
                                <td>{{ propsAds.item.clicks }}</td>
                                <td>{{ propsAds.item.lid }}</td>
                                <td>{{ propsAds.item.ctr }}</td>
                                <td>{{ propsAds.item.cpm }}</td>
                                <td width="100px">{{ propsAds.item.price }}</td>
                                <td>Шок: Нет<br>премиум: Нет<br>Категория: Услуги в ТиВ<br /> ???</td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-list>
        </v-card>
    </v-dialog>
</template>

<script>
import cloneObject from '@/mixins/cloneObject';

export default {
    name: 'AddEditCompany',
    props: ['addItem','adsForm','curentId'],
    mixins: [cloneObject],
    data:() => ({
        dialog2: false,
        item: {
            nameCompany: '',
            devices: 0,
            platforms: 0,
            countries: 0,
            teasers: 1,
            limit: 3,
        },
        def: null,
        headers: [
            { text: 'ID', sortable: false},
            { text: 'Превью', sortable: false, value: 'preview' },
            { text: 'Статус', sortable: false, value: 'status' },
            { text: 'Показов', sortable: false, value: 'shows' },
            { text: 'Кликов', sortable: false, value: 'clicks' },
            { text: 'Лидов', sortable: false, value: 'lid' },
            { text: 'CTR', sortable: false, value: 'ctr' },
            { text: 'CPM', sortable: false, value: 'cpm' },
            { text: 'Цена', sortable: false, value: 'price' },
            { text: 'Тип материала', sortable: false, value: 'tipMaterial' }
        ],
        adsItems: []
        //      {
        //         id: 0, 
        //         title: 'Во Франции найдена заброшенная коллекция из 80 авто',
        //         text: '	Во Франции нашли заброшенную коллекцию из 81 автомобилей, среди которых...',
        //         image: '/images/teasers/1234.jpg',
        //         imagePrev: '/images/teasers/1234_min.jpg',
        //         price: 12,
        //         status: 'Активен',
        //         shows: 12,
        //         clicks: 12,
        //         lid: 12,
        //         ctr: 12,
        //         cpm: 12,
        //         tipMaterial: ''
        //     },
        //     {
        //         id: 1, 
        //         title: 'Во Франции найдена заброшенная коллекция из 80 авто',
        //         text: '	Во Франции нашли заброшенную коллекцию из 81 автомобилей, среди которых...',
        //         image: '/images/teasers/1234.jpg',
        //         imagePrev: '/images/teasers/1234_min.jpg',
        //         price: 12,
        //         status: 'Активен',
        //         shows: 12,
        //         clicks: 12,
        //         lid: 12,
        //         ctr: 12,
        //         cpm: 12,
        //         tipMaterial: ''
        //     }
        // ]
    }),
    watch: {
        curentId(id){
            (id)?this.getData(id):this.item=this.def;
        }
    },
    methods:{
        changeAds(id){
            this.$emit('adsFormOpen',id);
        },
        getData(id){
            axios.get('/json/newCompany.json').then(
                (response) => {
                    this.item = response.data[0]
                    //  = {
                    //     nameCompany: 'Test',
                    //     devices: 0,
                    //     platforms: 0,
                    //     countries: 0,
                    //     teasers: 1,
                    //     limit: 425,
                    // }
                    // response.data.map((item) => {
                    //     this.items.push(item);
                    // })
                },
                (err) => {
                    console.log(err.response)
                }
            );
        }
    },
    mounted() {
        this.def = this.cloneObject(this.item)
    }
}
</script>
