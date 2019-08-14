<template>
    <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1" >
        <template slot="items" slot-scope="props">
            <td>{{ props.item.ssp }}</td>
            <td class="text-xs-left">{{ props.item.expenseDsp }}</td>
            <td class="text-xs-left">{{ props.item.expenseSsp }}</td>
            <td class="text-xs-left">{{ props.item.rates }}</td>
            <td class="text-xs-left">{{ props.item.date }}</td>
        </template>
    </v-data-table>
</template>

<script>
export default {
    props: ['items'],
    data(){
        return{
            headers: [
                { text: 'SSP', sortable: false, value: 'ssp' },
                {
                    text: 'Расход по DSP',
                    align: 'left',
                    sortable: false,
                    value: 'expenseDsp'
                },
                { text: 'Расход по SSP', sortable: false, value: 'expenseSsp' },
                { text: 'Остаток', sortable: false, value: 'rates' },
                { text: 'Дата', sortable: false, value: 'date'}
            ]
        }
    }
}
</script>