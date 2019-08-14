
<template>
    <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1" >
        <template slot="items" slot-scope="props">
            <td>{{ props.item.ssp }}</td>
            <td class="text-xs-left">{{ props.item.ads }}</td>
            <td class="text-xs-left">{{ props.item.site }}</td>
            <td class="text-xs-left">{{ props.item.timeOfDay }}</td>
            <td class="text-xs-left">{{ props.item.platforms }}</td>
            <td class="text-xs-left">{{ props.item.devices }}</td>
            <td class="text-xs-left">{{ props.item.date }}</td>
        </template>
         <!-- SSP, дата, компании, объявления, время суток, платформа, девайс, сайт -->
    </v-data-table>
</template>

<script>
export default {
    props: ['items','headers']
}
</script>