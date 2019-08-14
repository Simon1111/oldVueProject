<template>
    <div>
        <h1 class="display-3">RTB</h1>
        <div class="hr-cust--par">
            <hr class="hr-cust">
        </div>
            <v-icon>compare_arrows</v-icon>
        <p>5. Главная (сделать виджетами типа как на medicineteaser.ru)<br />
        Топ площадок (список площадок которые используются для рассчета цтр, возможность посмотреть площадки которые использовались при рассчете цтр в любой момент обновления списка (площадки топ логируются в лог топ площадок со структурой: дата, id обновления топа площадок)
        </p>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <Chards />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <!-- <Cropper /> -->
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Chards from '@/components/Common/Widgets/Chards'

export default {
    name: 'Home',
    components: {
        Chards,
    },
    data(){
        return{
        }
    }
}
</script>
