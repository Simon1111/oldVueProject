<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-expansion-panel>
            <v-expansion-panel-content ripple>
                <div slot="header">
                    <v-subheader style="padding-left:0;margin-left: -.5em;">Фильтры</v-subheader>
                </div>
                <v-card>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md8 lg9 xl9>
                            <v-layout row wrap>
                                <v-flex xs12 sm12 md4 lg4 xl4>
                                    <div class="v-card-text--fitler">
                                        <v-select
                                            :items=$store.state.devices
                                            label="Устройства"
                                            item-text="name"
                                            item-value="id"
                                        />
                                    </div>
                                </v-flex>
                                <v-flex xs12 sm12 md4 lg4 xl4>
                                    <v-layout row wrap>                        
                                        <v-flex xs12 sm6 md6 lg6 xl6>  
                                    <!-- <datetime v-model="time" type="time"></datetime> -->
                                    <!-- <datetime
                                        type="time"
                                        v-model="time"
                                        :placeholder="datetimeLabel"
                                        format="HH:mm"
                                        @input="updateDatetime" /> -->                      
                                            <v-menu
                                                ref="timeFilter1"
                                                :close-on-content-click="false"
                                                v-model="timeFilter1"
                                                :nudge-right="40"
                                                :return-value.sync="timeFilter1"
                                                lazy
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                max-width="290px"
                                                min-width="290px"
                                            >
                                                <v-text-field
                                                    slot="activator"
                                                    v-model="time_from"
                                                    label="Время от"
                                                    readonly
                                                    />
                                                <v-time-picker
                                                    v-if="timeFilter1"
                                                    v-model="time_from"
                                                    full-width
                                                    format="24hr"
                                                    @change="$refs.timeFilter1.save(time_from)"
                                                    />
                                            </v-menu>
                                        </v-flex>                    
                                        <v-flex xs12 sm6 md6 lg6 xl6>                        
                                            <v-menu
                                                ref="timeFilter2"
                                                :close-on-content-click="false"
                                                v-model="timeFilter2"
                                                :nudge-right="40"
                                                :return-value.sync="time_to"
                                                lazy
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                max-width="290px"
                                                min-width="290px"
                                                style="padding-left:10px">
                                                <v-text-field
                                                    slot="activator"
                                                    v-model="time_to"
                                                    label="Время до"
                                                    readonly
                                                    />
                                                <v-time-picker
                                                    v-if="timeFilter2"
                                                    v-model="time_to"
                                                    full-width
                                                    format="24hr"
                                                    @change="$refs.timeFilter2.save(time_to)"
                                                    />
                                            </v-menu>                        
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 sm12 md4 lg4 xl4>
                                    <div class="v-card-text--fitler">
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
                            </v-layout>
                        </v-flex>

                        <v-flex xs12 sm12 md12 lg12 x12>
                            <v-layout row wrap>   
                                <v-flex xs12 sm12 md3 lg3 xl3>
                                    <div class="v-card-text--fitler">
                                        <v-select
                                            :items=$store.state.companies
                                            label="Компании"
                                            item-text="name"
                                            item-value="id"
                                            attach
                                            chips
                                            multiple
                                        />
                                    </div>
                                </v-flex>    
                                <v-flex xs12 sm12 md3 lg3 xl3>
                                    <div class="v-card-text--fitler">
                                        <v-autocomplete
                                            :items=$store.state.ads
                                            label="Объявления"
                                            item-text="name"
                                            item-value="id"
                                            attach
                                            chips
                                            multiple
                                        />
                                    </div>
                                </v-flex>
                                <v-flex xs12 sm12 md3 lg2 xl2>
                                    <div class="v-card-text--fitler">
                                        <v-select
                                            :items=$store.state.ssp
                                            label="SSP"
                                            item-text="name"
                                            item-value="id"
                                            attach
                                            chips
                                            multiple
                                        />
                                    </div>
                                </v-flex>
                                <v-flex xs12 sm12 md3 lg2 xl2>
                                    <div class="v-card-text--fitler">
                                        <v-select
                                            v-model="platform"
                                            :items=$store.state.platforms
                                            label="Платформа"
                                            item-text="name"
                                            item-value="id"
                                            clearable
                                            attach
                                            chips
                                            multiple
                                        />
                                    </div>
                                </v-flex>
                                <v-flex xs12 sm12 md3 lg2 xl2>
                                    <div class="v-card-text--fitler">
                                        <v-autocomplete
                                            :items=$store.state.sites
                                            :loading="isLoading"
                                            :search-input.sync="search"
                                            color="white"
                                            item-text="name"
                                            item-value="id"
                                            label="Сайты"
                                            return-object
                                            attach
                                            chips
                                            multiple
                                        />
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-form>
</template>

<script>
    export default {
        name: "TopPushFilter",

        data(){
            return {
                valid: false,
                email: '',
                isLoading: false,
                menu1: '',
                menu2: '',
                menu3: '',
                menu4: '',
                time1: '',
                time2: '',
                time_from: '',
                time_to: '',
                timeFilter1: '',
                timeFilter2: '',
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

                rules: {
                    required: value => !!value || 'Обязателен для заполнения'
                },
                collectionFinters: []
            }
        },

        methods: {
            resetData(){
                this.$emit('resetData')
            },

            clear() {
                this.$refs.form.reset()
                this.$emit('resetAll')
            }
        }
    }
</script>