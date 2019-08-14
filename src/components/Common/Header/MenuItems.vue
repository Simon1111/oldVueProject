<template>
    <v-menu v-if="children" offset-y color="light-blue darken-3">
        <v-btn
            slot="activator"
            color="white"
            flat >
            {{ text }}
        </v-btn>
        <v-list class="light-blue darken-3">
            <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"
                    :to="item.path">
                    <span class="accent--text text--lighten-5" v-html="item.text"/>
            </v-list-tile>
        </v-list>
    </v-menu>
    <v-btn v-else tag="a" :to="path" color="white" flat>
        {{ text }}
    </v-btn>
</template>

<script>
    export default {
        name: 'MenuItem',
        props: {
            'text' : {
                'required' : true,
            },
            'path' : {
                'required' : true,
            },
            'children' : {
                'required' : false,
            },
            'isMenu' : {
                'required' : false,
            }
        },
        data () {
            return {
                // currentPath: this.$router.currentRoute.path,
                // isActive: false
            }
        },
        computed: {
            items() {
                return this.children;
            }
        }
    }
</script>