<template>
    <div>
        <h1 class="display-3">Лог запросов</h1>
        <div class="hr-cust--par">
            <hr class="hr-cust">
        </div>

        <v-toolbar class="light-blue darken-3" dark>
            <v-toolbar-title>SSP</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                class="mx-3 search-field"
                flat
                label="Поиск"
                prepend-inner-icon="search"
                solo-inverted
            />       
        </v-toolbar>
        <v-list>
            <div v-for="(item, index) in getNav" :key="index">
                <v-divider v-if="index!=0" />
                <v-list-tile :to="item.path">
                    <span v-html="item.text" />
                </v-list-tile>
            </div>
        </v-list>
        <router-view />
    </div>
</template>

<script>
    import Nav from '@/router/sspLog/requests'
    
    export default {
        name: "Logs",
        data: () =>({
            nav: Nav,
            search: ''
        }),
        computed: {
            getNav() {
                return this.nav.filter((item) => {
                    return item.text.toLowerCase().includes(this.search.toLowerCase());
                });
            }
        }
    }
</script>

<style lang="scss">
    .search-field{
        .v-input__slot{
            margin-bottom: 0 !important;
        }
    }
</style>
