<template>
    <v-toolbar color="light-blue darken-3" dark 
        fixed
        scroll-off-screen
        scroll-target="#scrolling-techniques">
        <!-- <v-toolbar-title>
        </v-toolbar-title> -->
        <router-link to="/" class="rtb-logo header-rtb__logo">
            <!-- <img class="header-rtb__logo--image" src="/images/logo.png" alt="" /> -->
            <span>RTB</span>
        </router-link>
        <v-spacer></v-spacer>
        <Menu />
        <!-- <Settings /> -->
        <v-btn to="/settings" class="btn-small" color="success" title="Настройки профиля">
            <v-icon color="white">settings</v-icon>
        </v-btn>
        <v-btn color="warning" @click="goTo(isAuth, 'Вы уверены что хотите выйти?')" class="btn-small" title="Выйти">
            <v-icon>exit_to_app</v-icon>
        </v-btn>
        <!-- <menu-mob /> -->
    </v-toolbar>
</template>

<script>
import Menu from './Menu.vue'
import goTo from '@/mixins/goTo.js'
// import MenuMob from './MenuMob.vue'
// import Settings from '@/components/Common/Widgets/Settings'

export default {
    name: 'Nav',
    props: ['auth'], 
    mixins: [goTo],
    components: {
        Menu,
        // Settings
    },
    data(){
        return{
            SureForm: false
        }
    },
    methods:{
        isAuth(){
            this.$emit('authState',false)
        }
    }
}
</script>

<style>
    .full-height .v-dialog__activator{
        height: 100%;
    }
</style>