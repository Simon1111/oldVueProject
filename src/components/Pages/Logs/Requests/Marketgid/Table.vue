
<template>
    <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1" >
        <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.tmax }}</td>
            <td><span v-if="props.item.at==2">Включен</span><span v-else>Выключен</span></td>
            <td>
                <!-- props.item.device.dnt -->
                <div v-if=props.item.device.dnt>
                    Отслеживание запрещено
                </div> 
                <div v-else>
                    <b>IP:</b> {{ props.item.device.ip }} <br />
                    <b>Тип устройства:</b> {{ props.item.device.devicetype }} <br />
                    <b>OS:</b> {{ props.item.device.os }} <br />
                    <b>Браузер:</b> {{ props.item.device.ua }} <br />
                    <b>Страна:</b> {{ props.item.device.geo.country }} <br />
                    <b>Язык:</b> {{ props.item.device.language }}
                </div>                
            </td>
            <td>{{ props.item.user }}</td>
            <td>{{ props.item.imp }}</td>
            <td class="text-xs-left">{{ props.item.ext }}</td>
            <td class="text-xs-left">
                domain: <a :href=props.item.site.page>{{ props.item.site.domain }}</a><br />
                ref: <a :href=props.item.site.ref>{{ props.item.site.ref }}</a>
            </td>
            <td class="text-xs-left">{{ props.item.cur }}</td>
            <td class="text-xs-left">{{ props.item.bcat }}</td>
            <td class="text-xs-left">{{ props.item.source.pchain }}</td>
        </template>
         <!-- SSP, дата, компании, объявления, время суток, платформа, девайс, сайт -->
    </v-data-table>
</template>

<script>
export default {
    props: ['items','headers']
}
</script>