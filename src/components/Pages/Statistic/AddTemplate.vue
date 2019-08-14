<template>
    <v-layout row justify-center>
        <v-dialog v-model="isAddTemplate" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="$parent.isAddTemplate=false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Создать шаблон предствления</v-toolbar-title>
                    <v-spacer />
                    <v-toolbar-items>
                        <v-btn dark flat @click="addTemplate">Сохранить</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-card-text>
                            <v-text-field
                                label="Название шаблона"
                                v-model="nameTemplate"
                                :counter="50"
                                :rules="rules.nameTemplate"
                                outline
                            />
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider />
                <v-layout row wrap>
                    <v-flex xs12 sm12 md6 lg6 xl6>
                        <v-card-text>
                            <v-select
                                v-model="fieldsGroupsBy"
                                :items=$store.state.groupsBy
                                label="Группировки"
                                item-text="name"
                                item-value="id"
                                multiple
                                required 
                                :rules="rules.fieldsGroupsBy"
                            />
                        </v-card-text>
                    </v-flex>
                    <v-flex xs12 sm12 md6 lg6 xl6>
                        <v-card-text>
                            <v-select
                                v-model="fieldsTemplate"
                                :items=$store.state.viewsTemplate
                                label="Поля из представления"
                                item-text="name"
                                item-value="id"
                                multiple
                                required 
                                :rules="rules.fieldsTemplate"
                            />
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider />
                <v-subheader>Фильтры</v-subheader>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md6 lg6 xl6>
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex xs12 sm6 md6 lg6 xl6>
                                    <v-menu
                                        ref="menu3"
                                        :close-on-content-click="false"
                                        v-model="menu3"
                                        :nudge-right="40"
                                        :return-value.sync="time"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        max-width="290px"
                                        min-width="290px"
                                    >
                                        <v-text-field
                                            slot="activator"
                                            v-model="time"
                                            label="Время от"
                                            prepend-icon="access_time"
                                            readonly
                                            />
                                        <v-time-picker
                                            v-if="menu3"
                                            v-model="time"
                                            full-width
                                            format="24hr"
                                            @change="$refs.menu.save(time)"
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
                                    >
                                        <v-text-field
                                            slot="activator"
                                            v-model="time2"
                                            label="Время до"
                                            prepend-icon="access_time"
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
                            <v-select
                                :items=$store.state.devices
                                label="Устройства"
                                item-text="name"
                                item-value="id"
                                multiple
                            />
                            <v-autocomplete
                                :items=$store.state.sites
                                :search-input.sync="search"
                                color="white"
                                item-text="Description"
                                item-value="API"
                                label="Сайты"
                                return-object
                                multiple
                            />
                            <v-select
                                v-model="platform"
                                :items=$store.state.platforms
                                label="Платформа"
                                item-text="name"
                                item-value="id"
                                clearable
                                multiple
                            />
                        </v-card-text>
                    </v-flex>
                    <v-flex xs12 sm12 md6 lg6 xl6>
                        <v-card-text>
                            <v-select
                                :items=$store.state.companies
                                label="Компании"
                                item-text="name"
                                item-value="id"
                                multiple
                            />
                            <v-select
                                label="Объявления"
                                item-text="name"
                                item-value="id"
                                multiple
                            />
                            <v-select
                                :items=$store.state.ssp
                                label="SSP"
                                item-text="name"
                                item-value="id"
                                multiple
                            />
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
                                            prepend-icon="event"
                                            readonly
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
                                            v-model="date_to"
                                            @input="$refs.menu2.save(date_to)"
                                            :max="new Date().toISOString().substr(0, 10)"
                                        />
                                    </v-menu>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
    name: 'AddTemplate',
    props: ['templates','isAddTemplate'],
    data(){
        return{
            nameTemplate: '',
            fieldsGroupsBy: '',
            fieldsTemplate: '',
            search: '',
            menu1: '',
            menu2: '',
            menu3: '',
            menu4: '',
            time: '',
            time2: '',
            date_to: '',
            date_from: '',
            platform: '',
            rules: {
                nameTemplate: [v => !!v || 'Заполните поле'],
                fieldsGroupsBy: [v => !!v || 'Заполните поле'],
                fieldsTemplate: [v => !!v || 'Заполните поле']
            }
        }
    },
    methods: {
        addTemplate(){
            this.templates.push({ id: 1, name: this.nameTemplate, param: [1,23,5,9]})
            this.$parent.isAddTemplate = false
        }
    }
}
</script>
