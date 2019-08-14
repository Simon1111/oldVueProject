<template>
    <v-data-table
        :headers="headersAds"
        :items="ads"
        hide-actions
        class="elevation-2 v-datatable--ads"
        >
        <template slot="items" slot-scope="propsAds">
            <tr>
                <td width="50px" class="text-xs-center">
                    {{ propsAds.item.id }} <br />
                    <!-- {{ props.item.id }} -->
                    <v-btn color="green" class="btn-small" title="Редактировать объявление" @click="changeAds(propsAds.item.id)">
                        <v-icon size="20" color="white">create</v-icon>
                    </v-btn>
                    <v-btn color="error" class="btn-small" title="Удалить объявление" @click="goto(deletee)">
                        <v-icon size="20" color="white">delete</v-icon>
                    </v-btn>
                </td>
                <td width="280px">
                    <img :src=propsAds.item.image alt="" width="100px">
                    <img :src=propsAds.item.imagePrev alt="" width="100px">
                    <h4>{{ propsAds.item.title }}</h4>
                    <p>{{ propsAds.item.text }}</p>
                </td>
                <td>
                    {{propsAds.item.id}}<br />
                    {{ propsAds.item.status }}
                </td>
                <td>{{ propsAds.item.shows }}</td>
                <td>{{ propsAds.item.clicks }}</td>
                <td>{{ propsAds.item.lid }}</td>
                <td>{{ propsAds.item.ctr }}</td>
                <td>{{ propsAds.item.cpm }}</td>
                <td width="100px">
                    <input
                        v-model="propsAds.item.limit"
                        label=""
                        class="v-input__column-field"
                        />
                </td>
                <td width="100px">
                    <input
                        v-model="propsAds.item.price"
                        label=""
                        class="v-input__column-field"
                        />
                </td>
                <td>Шок: Нет<br>премиум: Нет<br>Категория: Услуги в ТиВ<br /> ???</td>
            </tr>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'TableAds',
    props: ['curentId'],
    data: ()=>({
        headersAds: [
            { text: 'ID', class: 'text-xs-center', sortable: false},
            { text: 'Превью', sortable: false, value: 'preview' },
            { text: 'ID/Статус', sortable: false, value: 'status' },
            { text: 'Показов', sortable: false, value: 'shows' },
            { text: 'Кликов', sortable: false, value: 'clicks' },
            { text: 'Лидов', sortable: false, value: 'lid' },
            { text: 'CTR', sortable: false, value: 'ctr' },
            { text: 'CPM', sortable: false, value: 'cpm' },
            { text: 'Лимит', sortable: false, value: 'limit' },
            { text: 'Цена', sortable: false, value: 'price' },
            { text: 'Тип материала', sortable: false, value: 'tipMaterial' }
        ],
        ads: [
                {
                    id: 345, 
                    title: 'Во Франции найдена заброшенная коллекция из 80 авто',
                    text: '	Во Франции нашли заброшенную коллекцию из 81 автомобилей, среди которых...',
                    image: '/images/teasers/1234.jpg',
                    imagePrev: '/images/teasers/1234_min.jpg',
                    status: 'Активен',
                    shows: 12,
                    clicks: 12,
                    lid: 12,
                    ctr: 12,
                    cpm: 12,
                    limit: 120,
                    price: 12,
                    tipMaterial: ''
                },
                {
                    id: 3456, 
                    title: 'Во Франции найдена заброшенная коллекция из 80 авто',
                    text: '	Во Франции нашли заброшенную коллекцию из 81 автомобилей, среди которых...',
                    image: '/images/teasers/1234.jpg',
                    imagePrev: '/images/teasers/1234_min.jpg',
                    status: 'Активен',
                    shows: 12,
                    clicks: 12,
                    lid: 12,
                    ctr: 12,
                    cpm: 12,
                    limit: 120,
                    price: 12,
                    tipMaterial: ''
                }
            ]
        }
    ),
    methods: {
        changeAds(id){
            let params = { id: this.curentId, idAds: id }
            this.$emit('addAdsOpen', params);
        },
        deleteItem(){
            alert('действие удаление')
        }
    }
}
</script>

