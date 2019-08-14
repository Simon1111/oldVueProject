<template>
    <div>
        <h1 class="display-3">Лог запросов по MarketGid</h1>
        <p>Расшифровка полей: <a href="https://help.marketgid.com/blog/rukovodstvo-po-integratsii-openrtb-dsp/#BidRequest">MarketGid запросы</a></p>
        <div class="hr-cust--par">
            <hr class="hr-cust">
        </div>
        <!-- <pre>
            id String,
            tmax Int32,
            at Int8,
            device_dnt UInt8,
            device_type UInt8,
            device_js UInt8,
            device_ip String,
            device_os String,
            device_ua String,
            device_language String,
            device_geo_country String,
            user_id String,
            user_buyer_id String,
            user_buyer_uid String,
            user_ext_pageview_number Int32,
            ext_ad_types Array(String),
            ext_img_size_id Int32,
            ext_category Int32,
            site_id String,
            site_domain String,
            site_page String,
            site_ref String,
            site_name String,
            site_cat Array(String),
            site_publisher_id String,
            site_publisher_name String,
            imp_id String,
            imp_bid_floor float,
            imp_instl UInt8,
            imp_secure UInt8,
            imp_native_request String,
            imp_native_ver String,
            imp_native_battr Array(Int32),
            cur Array(String),
            bcat Array(String),
            source_pchain String,
            event_date Date
        </pre> -->
        <v-filter />
        <br />
        <div v-for="item in mgItems" :key="item.id">
            <v-expansion-panel>
                <v-expansion-panel-content ripple>
                    <div slot="header">
                        IP: <b>{{item.device.ip}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DOMAIN: <b>{{item.site.domain}}</b>
                    </div>
                    <v-card>
                        <v-card-text>
                            <vue-json-pretty
                                :path="'res'"
                                :data="item"
                                :dataVisiable=false
                                @click="handleClick" />
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </div>
        <!-- <Table :headers=headers :items=mgItems />     -->
    </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import Table from './Table'
import Filter from './Filter'

export default {
    name: 'Requests',
    components: {
        VueJsonPretty,
        Table,
        'v-filter': Filter
    },
    data(){
        return {
            search: '',
            headers: [
                { text: 'Уникальный ID запроса (id)', sortable: false, value: 'id' },
                { text: 'Макс.время ожидания от DSP (tmax)', align: 'left', sortable: false, value: 'tmax' },
                { text: 'Аукцион второй цены включен (at)', sortable: false, value: 'at' },
                { text: 'Подробная информация об устройстве пользователя (device)', sortable: false, value: 'device' },
                { text: 'Подробная информация о пользователе (user)', sortable: false, value: 'user' },
                { text: 'Массив объектов, состоящий из imp. Cм. "imp: объекты и параметры" (imp)', sortable: false, value: 'imp' },
                { text: 'Используется для расширения параметров запроса (ext)', sortable: false, value: 'ext' },
                { text: 'Подробная информация по сайту (site)', sortable: false, value: 'site' },
                { text: 'Разрешенные валюты (cur)', sortable: false, value: 'cur' },
                { text: 'Заблокированные категории рекламодателей, использующих категории IAB (bcat)', sortable: false, value: 'bcat' },
                { text: 'Идентификатор платежа (source.pchain)', value: 'source' }
            ],
            mgItems: [
                {
                    "id":"0b95904b-38e5-11e8-9ae2-141877676018",
                    "tmax":150,
                    "at":2,
                    "device":{
                        "dnt":0,
                        "devicetype":2,
                        "js":1,
                        "ip":"36.76.94.171",
                        "os":"iOS",
                        "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
                        "language":"en",
                        "geo":{
                            "country":"IDN"
                        }
                    },
                    "user":{
                        "id":"h6cOQQM5nUC0",
                        "buyerid":"",
                        "buyeruid":"",
                        "ext":{
                                "pageview_number": 2
                        }
                    },
                    "ext":{
                        "ad_types":[
                            "pg",
                            "r",
                            "nc17",
                            "nsfw"
                        ],
                        "imgSizeId":19,
                        "category":101
                    },
                    "site":{
                        "id":"5646077",
                        "domain":"example.com",
                        "page":"http://example.com/",
                        "ref":"http://example.com/example?page=2",
                        "name":"example.com",
                        "cat":[ "IAB1" ],
                        "publisher":{
                            "id":"284527",
                            "name":"example.com"
                        }
                    },
                    "cur":[
                        "USD",
                        "RUB",
                        "UAH"
                    ],
                    "bcat":[
                        "IAB13",
                        "IAB13-7",
                        "IAB18",
                        "IAB19"
                    ],
                    "imp":[
                        {
                            "id":"1",
                            "bidfloor":0.09382198952879581,
                            "instl":0,
                            "secure":0,
                            "native":{
                                "request":"{\"native\":{\"ver\":\"1\",\"layout\":1,\"adunit\":2,\"plcmtcnt\":4,\"plcmttype\":2,\"assets\":[{\"id\":1,\"required\":1,\"title\":{\"len\":90}},{\"id\":2,\"required\":1,\"img\":{\"wmin\":492,\"hmin\":328,\"type\":3,\"mimes\":[\"image/jpeg\",\"image/png\"]}},{\"id\":3,\"required\":0,\"data\":{\"type\":2,\"len\":75}},{\"id\":4,\"required\":0,\"data\":{\"type\":6}},{\"id\":5,\"required\":0,\"data\":{\"type\":7}},{\"id\":6,\"required\":0,\"data\":{\"type\":11}}]}}\n",
                                "ver":"1",
                                "battr":[
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                8,
                                9,
                                10,
                                14
                                ]
                            }
                        }
                    ],
                    "source":{ 
                        "pchain":"d4c29acad76ce94f:5651930" 
                    }
                }
            ],
            // items: [
            //     {
            //         value: false,
            //         ssp: 'Market Gid',
            //         site: 'yoga.ru',
            //         ads: 'Объявление в миниатюре',
            //         timeOfDay: 'Ночь (00:00-06:00)',
            //         platforms: 'Все платформы',
            //         devices: 'Все устройства',
            //         date: '2019-02-01',
            //         // companies: 6.0,
            //     },{
            //         value: false,
            //         ssp: 'Market Gid',
            //         site: 'yandex.ru',
            //         ads: 24,
            //         timeOfDay: 'Ночь (00:00-06:00)',
            //         platforms: 'Все платформы',
            //         devices: 'Все устройства',
            //         date: '2019-02-01',
            //         // companies: 6.0,
            //     },{
            //         value: false,
            //         ssp: 'Market Gid',
            //         site: 'google.ru',
            //         ads: 24,
            //         timeOfDay: 'Ночь (00:00-06:00)',
            //         platforms: 'Все платформы',
            //         devices: 'Все устройства',
            //         date: '2019-02-01',
            //         // companies: 6.0,
            //     }
            // ]
        }
    },
    methods: {
        // заглушка пока
        handleClick(){

        }
    }
}
</script>
