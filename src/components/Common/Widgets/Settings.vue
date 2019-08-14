<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" class="btn-small" color="success" title="Настройки профиля">
          <v-icon color="white">settings</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Настройки профиля</span>
        </v-card-title>
        <v-card-text>
            <v-form v-model="valid">
                <v-flex
                    xs12
                    >
                    <v-text-field
                        v-model="countReguest"
                        :counter="10"
                        label="Шаг запросов"
                        required
                    />
                </v-flex>
                <v-flex
                    xs12
                    >
                    <v-text-field
                        v-model="countReguestForTest"
                        :counter="10"
                        label="Кол-во запросов для теста новой площадки"
                        required
                    />
                </v-flex>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'Settings',
    data(){
        return{
            countReguestForTest: 20000,
            countReguest: 100,
            valid: true,
            dialog: false
        }
    }
}
</script>
