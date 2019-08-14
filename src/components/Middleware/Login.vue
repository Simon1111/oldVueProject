<template>
    <div class="main-page">
        <v-container fill-height text-xs-center>
            <v-layout row wrap align-center>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-card-text>
                            <v-form
                                ref="authForm"
                                v-model="valid"
                                lazy-validation
                                method="POST"
                                >
                                <span class="rtb-logo rtb-logo--auth-form">RTB</span>
                                <v-text-field v-model="email" label="Email или Телефон*" required :rules="rules.email"></v-text-field>
                                <v-text-field v-model="password" label="Пароль*" type="password" required :rules="rules.password"></v-text-field>
                                <v-btn color="warning" @click="authMethod">Войти</v-btn>
                            </v-form>
                            <!-- <form class="login" @submit.prevent="login">
                                <h1>Sign in</h1>
                                <label>User name</label>
                                <input required v-model="email" type="text" placeholder="Snoopy"/>
                                <label>Password</label>
                                <input required v-model="password" type="password" placeholder="Password"/>
                                <hr/>
                                <button type="submit">Login</button>
                            </form> -->
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    data(){
        return{
            email: '',
            tel: '',
            password: '',
            valid: false,
            rules: {
                email: [v => !!v || 'Заполните поле'],
                password: [v => !!v || 'Заполните поле']
            }
        }
    },
    methods:{
        authMethod(){
            if(this.$refs.authForm.validate()) this.$emit('authState',true);
        },
        login: function () {
            const { email, password } = this
            this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
                this.$router.push('/')
            })
        },
    }
}
</script>
