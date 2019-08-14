<template>
    <v-layout align-center>
        <v-flex>
            <h1 class="display-3">Ошибка 405</h1>
            
            <p class="subheading">У вас нет прав для просмотра данной страницы</p>

            <v-btn
                class="mx-0"
                color="primary"
                to="/"
                large
            >
                На главную
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
    name: 'NotFound'
}
</script>
