<template>
    <v-dialog v-model="status" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">{{question}}</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="dialog = false">Отмена</v-btn>
                <v-btn color="green darken-1" flat @click="dialog = false">Продолжить</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'SureForm',
    props: ['question','status']
}
</script>
