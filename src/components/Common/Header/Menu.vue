<template> 
    <v-toolbar-items class="hidden-sm-and-down">
        <MenuItems v-for="(route, index) in nav" :key="index" v-bind="route" />
    </v-toolbar-items>
</template>

<script>
import MenuItems from './MenuItems.vue'
import Nav from '@/router/routes'

export default {
    name: 'Menu',
    components: {
        MenuItems
    },
    data(){
        return {
            nav: Nav
        }
    }
}
</script>
