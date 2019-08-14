<template>
    <v-form ref="form" v-model="valid" lazy-validation class="v-card-text--fitler">
        <!-- SSP, дата, компании, объявления, время суток, платформа, девайс, сайт -->
        <v-layout>
            <v-subheader style="padding:0">Группировка</v-subheader>
            <!-- <v-btn flat class="btn-small" @click="addGroup"><v-icon>add</v-icon></v-btn> -->
        </v-layout>
        <!-- <code>Здесь будут другие группировки, какие именно не ясно</code> -->
        <v-layout row wrap v-for="i in countOfGroup" :key="i">
            <v-flex xs12 sm12 md4 lg4 xl4>
                <v-select
                    :items=$store.state.groupsBy
                    label="Параметры группировки"
                    item-text="name"
                    item-value="id"
                    multiple
                    chips
                />
            </v-flex>
            <v-flex xs12 sm12 md3 lg3 xl3>
                <div class="v-card-text--fitler custom__to-top">
                    <v-layout row wrap>                            
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-menu
                                ref="menu1"
                                :close-on-content-click="false"
                                v-model="menu1"
                                :nudge-right="40"
                                :return-value.sync="date_from"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                            >
                                <v-text-field
                                    slot="activator"
                                    v-model="date_from"
                                    label="Дата с"
                                    readonly
                                />
                                <v-date-picker
                                    locale="ru-ru"
                                    min="2018-03-01"
                                    v-model="date_from"
                                    @input="$refs.menu1.save(date_from)"
                                    :max="maxDateTo"
                                />
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-menu
                                ref="menu2"
                                :close-on-content-click="false"
                                v-model="menu2"
                                :nudge-right="40"
                                :return-value.sync="date_to"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                                style="padding-left:10px">
                                <v-text-field
                                    slot="activator"
                                    v-model="date_to"
                                    label="Дата по"
                                    readonly
                                />
                                <v-date-picker
                                    locale="ru-ru"
                                    :min='minDateFrom'
                                    v-model="date_to"
                                    @input="$refs.menu2.save(date_to)"
                                    :max="new Date().toISOString().substr(0, 10)"
                                />
                            </v-menu>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
            <v-flex xs12 sm12 md3 lg3 xl3>
                <div class="custom__to-top">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-menu
                                ref="menu3"
                                :close-on-content-click="false"
                                v-model="menu3"
                                :nudge-right="40"
                                :return-value.sync="time1"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                max-width="290px"
                                min-width="290px"
                            >
                                <v-text-field
                                    slot="activator"
                                    v-model="time1"
                                    label="Время от"
                                    readonly
                                    />
                                <v-time-picker
                                    v-if="menu3"
                                    v-model="time1"
                                    full-width
                                    format="24hr"
                                    @change="$refs.menu3.save(time1)"
                                    />
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-menu
                                ref="menu4"
                                :close-on-content-click="false"
                                v-model="menu4"
                                :nudge-right="40"
                                :return-value.sync="time2"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                max-width="290px"
                                min-width="290px"
                                style="padding-left:10px">
                                <v-text-field
                                    slot="activator"
                                    v-model="time2"
                                    label="Время до"
                                    readonly
                                    />
                                <v-time-picker
                                    v-if="menu4"
                                    v-model="time2"
                                    full-width
                                    format="24hr"
                                    @change="$refs.menu4.save(time2)"
                                    />
                            </v-menu>
                        </v-flex>
                    </v-layout>
                </div>   
            </v-flex> 
            <!-- <v-flex xs12 sm6 md2 lg2 xl2>
                <v-btn flat class="btn-small" @click="delGroup">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-flex> -->
        </v-layout>
    </v-form>
</template>

<script>
export default {
    data(){
        return{
            valid: false,
            email: '',
            isLoading: false,
            countOfGroup: 1,

            // Раскидать массив
            valid: false,
            email: '',
            isLoading: false,
            menu1: '',
            menu2: '',
            menu3: '',
            menu4: '',
            time1: '',
            time2: '',
            time3: '',
            time4: '',
            search: '',
            maxDateTo: '',
            minDateTo: '',
            minDateFrom: '',
            maxDateFrom: '',
            date_from: '2019-01-01',
            date_to: '2019-02-01',
            datetimeFormat: 'YYYY-MM-DD HH:mm',
            datetimeLabel:'Дата публикации',
            
            // вынести в массив ...
            platform: '',
            
            groups: ['a', 'b', 'c'],    
            datetimeFormat: 'YYYY-MM-DD HH:mm',
            datetimeLabel:'Дата публикации',
            statuses: [
                { id: 0, name: 'Активен' },
                { id: 1, name: 'Ожидает оплаты' },
                { id: 2, name: 'Модерация' },
                { id: 3, name: 'Приостановлен' },
            ],
            // вынести в массив ...
            platform: '',
        }
    },
    methods: {
        addGroup(){
            this.countOfGroup=++this.countOfGroup
        },
        delGroup(){
            this.countOfGroup=--this.countOfGroup
        }
    }
}
</script>

<style lang="scss">
    .custom__to-top{
        .v-text-field{
            input{
                // margin: 0 0 10px;
            }
        }
    }
</style>
