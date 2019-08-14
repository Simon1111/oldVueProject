<template>
    <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
<!-- Фильтры (множественный): SSP, дата, компании, объявления, время суток, платформа, девайс, сайт -->
            <v-layout row wrap>
                <v-flex xs12 sm12 md6 lg6 xl6>
                    <v-card-text>
                        Здесь будут фильтры
                    </v-card-text>
                </v-flex>
                <!-- <v-flex xs12 sm12 md4 lg3 xl3>
                    <v-card-text>
                        <v-select
                            label="Объявления"
                            item-text="name"
                            item-value="id"
                            clearable
                        ></v-select>
                        <v-select
                            v-model="device"
                            :items=$store.state.devices
                            label="Устройства"
                            item-text="name"
                            item-value="id"
                            clearable
                            multiple
                        />
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm12 md4 lg3 xl3>
                    <v-card-text>
                        <v-select
                            v-model="platform"
                            :items=$store.state.platforms
                            label="Платформа"
                            item-text="name"
                            item-value="id"
                            clearable
                            multiple
                        />
                        <v-autocomplete
                            :items=$store.state.sites
                            :loading="isLoading"
                            :search-input.sync="search"
                            color="white"
                            item-text="Description"
                            item-value="API"
                            label="Сайты"
                            return-object
                            />
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm12 md4 lg3 xl3>
                    <v-card-text>
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
                            min-width="290px" >
                            <v-text-field
                                slot="activator"
                                v-model="date_from"
                                label="Дата с"
                                prepend-icon="event"
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
                            min-width="290px">
                            <v-text-field
                                slot="activator"
                                v-model="date_to"
                                label="Дата по"
                                prepend-icon="event"
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
                    </v-card-text>
                </v-flex> -->
                <v-card-text class="v-card__text--btn">
                    <!-- <v-btn color="info"
                            @click="clear()">
                        Сбросить
                        <v-icon style="margin-left:10px;margin-right:-10px">close</v-icon>
                    </v-btn> -->
                    <v-btn color=info
                        @click="resetData()"
                        :disabled="!valid"
                        >
                        Применить
                    </v-btn>
                </v-card-text>
            </v-layout>
        </v-form>
    </v-card>
</template>

<script>
    export default {
        name: "TopPushFilter",

        data(){
            return {
                valid: false,
                email: '',
                device: 0,
                platform: 0,
                timeOfDay: 2,
                isLoading: false,
                menu1: '',
                menu2: '',
                date_from: '2019-01-01',
                date_to: '2019-02-01',
                rules: {
                    required: value => !!value || 'Обязателен для заполнения'
                },
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