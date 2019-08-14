<template>
    <div>
        <h1 class="display-3">Настройки профиля</h1>
        <p>Настроек будем много..</p>
        <div class="hr-cust--par">
            <hr class="hr-cust">
        </div>
        <v-form v-model="valid">
            <v-flex xs12>
                <v-text-field
                    v-model="countReguest"
                    :counter="10"
                    label="Шаг запросов"
                    required
                />
            </v-flex>
            <v-flex xs12>
                <v-text-field
                    v-model="countReguestForTest"
                    :counter="10"
                    label="Кол-во запросов для теста новой площадки"
                    required
                />
            </v-flex>
            <v-btn color="success">Сохранить</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'Settings'
}
</script>
