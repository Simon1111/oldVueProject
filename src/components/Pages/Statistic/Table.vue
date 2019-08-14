
<template>
    <v-data-table
        :headers="headers"
        :items="desserts"
        hide-actions
        class="elevation-1" >
        <template slot="items" slot-scope="props">
            <td>{{ props.item.request }}</td>
            <td class="text-xs-left">{{ props.item.shows }}</td>
            <td class="text-xs-left">{{ props.item.clicks }}</td>
            <td class="text-xs-left">{{ props.item.clicksPrice }}</td>
            <td class="text-xs-left">{{ props.item.CTR }}</td>
            <td class="text-xs-left">{{ props.item.profit }}</td>
            <td class="text-xs-left">{{ props.item.DSP }}</td>
            <td class="text-xs-left">{{ props.item.CPM }}</td>
            <td class="text-xs-left">{{ props.item.expense }}</td>
            <td class="text-xs-left">{{ props.item.clicksPriceReal }}</td>
        </template>
    </v-data-table>
    <!-- SSP, дата, компании, объявления, время суток, платформа, девайс, сайт  -->
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Запросы',
            align: 'left',
            sortable: false,
            value: 'request'
          },
          { text: 'Показы', sortable: false, value: 'shows' },
          { text: 'Клики', sortable: false, value: 'clicks' },
          { text: 'Цена клика', sortable: false, value: 'clicksPrice' },
          { text: 'Время суток', sortable: false, value: 'CTR' },
          { text: 'CTR', sortable: false, value: 'profit' },
          { text: 'Прибыль DSP', sortable: false, value: 'DSP' },
          { text: 'CPM', sortable: false, value: 'CPM' },
          { text: 'Расход', sortable: false, value: 'expense' },
          { text: 'Реальная стоимость клика', sortable: false, value: 'clicksPriceReal' },
        ],
        desserts: [
          {
            value: false,
            request: 23,
            shows: 123,
            clicks: 12,
            clicksPrice: 0.5,
            CTR: 1.5,
            profit: 1004,
            DSP: 1902,
            CPM: 1321,
            expense: 1321,
            clicksPriceReal: 0.4,
          }
        ]
      }
    }
  }
</script>