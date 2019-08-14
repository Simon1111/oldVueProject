<template>
    <v-form ref="form" lazy-validation style="padding-top:20px;margin-bottom:-27px">
            <!-- SSP, дата, компании, объявления, время суток, платформа, девайс, сайт -->
        <v-layout row wrap>
            <v-flex xs12 sm12 md4 lg4 xl4>
                <v-select
                    :items=$store.state.statuses
                    label="Статус"
                    item-text="name"
                    item-value="id"
                    multiple
                    box
                    chips
                />
            </v-flex>
            <v-flex xs12 sm12 md3 lg3 xl3>
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
                                    box
                                />
                                <v-date-picker
                                    locale="ru-ru"
                                    min="2018-03-01"
                                    v-model="date_from"
                                    @input="$refs.menu1.save(date_from)"
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
                                    box
                                />
                                <v-date-picker
                                    locale="ru-ru"
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
                <v-btn color="success">Применить</v-btn>
            </v-flex>
        </v-layout>
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
                time: '',
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

            applyFiltersSend(){
                // collectionFinters
                this.$emit('applyFilters',1234)
            },

            clear() {
                this.$refs.form.reset()
                this.$emit('resetAll')
            }
        }
    }
</script>