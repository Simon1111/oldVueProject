<template>
    <v-layout align-center>
        <v-flex>
            <h1 class="display-3">Ошибка 404</h1>
            
            <p class="subheading">Такой страницы не существует</p>

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
