<template>
    <v-dialog
        v-model="adsForm"
        fullscreen hide-overlay transition="dialog-bottom-transition"
        >
        <v-card>
            <v-toolbar dark color="light-blue darken-3">
                <v-btn icon dark @click="$emit('adsFormOpen',false)">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Создать объявление</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="$emit('adsFormOpen',false)">Сохранить</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-list three-line subheader>
                <v-form>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md4 lg4 xl4>
                            <v-card-text>
                                <Cropper />
                            </v-card-text>
                        </v-flex>
                        <v-flex xs12 sm12 md8 lg8 xl8>
                            <v-card-text>
                                <v-text-field
                                    v-model="url"
                                    label="Url*"
                                    required
                                />
                                <v-text-field
                                    v-model="title"
                                    :counter="50"
                                    label="Заголовок*"
                                    required
                                />
                                <v-text-field
                                    v-model="text"
                                    name="input-7-1"
                                    :counter="100"
                                    label="Текст объявления*"
                                    />
                                <v-layout row wrap>
                                    <v-flex xs12 sm12 md6 lg6 xl6>
                                        <v-text-field
                                            v-model="rates"
                                            :counter="10"
                                            label="Ставка*"
                                            required
                                        />
                                    </v-flex>
                                    <v-flex xs12 sm12 md6 lg6 xl6>
                                        <v-text-field
                                            v-model="rates"
                                            :counter="10"
                                            label="Лимит*"
                                            required
                                            style="padding-left:20px"
                                        />
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-list>
        </v-card>
    </v-dialog>
</template>

<script>
import Cropper from '@/components/Common/Widgets/Cropper'
export default {
    name: 'AddEditAds',
    props: ['adsForm'],
    components: {
        Cropper
    },
    data(){
        return{
            url: '',
            title: '',
            text: '',
            rates: '',
            countries: '',
        }
    }
}
</script>
