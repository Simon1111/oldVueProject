<template>
    <div>
        <h1 class="display-3">Финансы</h1>
        <div class="hr-cust--par">
            <hr class="hr-cust">
        </div>
        <Table :items=items />
        <!-- <infinite-loading @infiniteHandler=infiniteHandler /> -->
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import Table from './Table'
// import loadData from '@/mixins/loadData.ts'

export default {
    name: 'Finance',
    components: { 
        Table,
        InfiniteLoading
    },
    // mixins: [loadData],
    data(){
        return{
            page: 1,
            items: [],
            // Затестить когда заработает пагинация
            // newsType: 'story', 
            // infiniteId: +new Date(), 
        }
    },
    methods:{
        // Ниже вариант подкл

        // infiniteHandler($state) {
        //     axios.get(api, {
        //         params: {
        //             page: this.page,
        //             tags: this.newsType,
        //         },
        //     }).then(({ data }) => {
        //         if (data.hits.length) {
        //             this.page += 1;
        //             this.items.push(...data.hits);
        //             $state.loaded();
        //         } else {
        //             $state.complete();
        //         }
        //     });
        // },
        // changeType() {
        //     this.page = 1;
        //     this.items = [];
        //     this.infiniteId += 1;
        // },+

        loadData() {            
            axios.get('/json/finance.json').then(
                (response) => {
                    response.data.map((item) => {
                        this.items.push(item);
                    })
                },
                (err) => {
                    console.log(err.response)
                }
            );
        },
        infiniteHandler(state) {
            this.state = state;
            this.loadData();
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>
