<template>
    <v-app v-if="auth" class="hide-overflow">
        <Header :auth=auth @authState=authState />
        <div
            id="scrolling-techniques"
            class="scroll-y main-app-rtb" >
            <v-card-text>
                <router-view />
            </v-card-text>
        </div>
    </v-app>
    <v-app v-else>
        <Auth :auth=auth @authState=authState />
    </v-app>
</template>

<script>
import Auth from '@/components/Middleware/Login'
import Header from '@/components/Common/Header/Index'
import router from '@/router/routes'

export default {
    name: 'app',
    components: {
        Header,
        Auth
    },
    data(){ // удалить
        return{
            auth: true,
            items: []
        }
    },
    methods: { // удалить
        authState(){
            this.auth = !this.auth
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/scss/settings.scss';
</style>

<!-- 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
-->