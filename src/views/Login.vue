<template>
    <v-content>
        <v-container fluid fill-heigh>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-6">
                        <v-toolbar color="white" dark text class="elevation-0">
                            <v-toolbar-title>
                                <v-flex xs12>
                                    <v-img
                                            :src="require('../assets/TECHNURSE_logo.jpg')"
                                            class="my-3"
                                            contain
                                            height="150"
                                    ></v-img>
                                </v-flex>
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                        placeholder="E-mail"
                                        outlined
                                        label="E-mail"
                                        v-model="email"
                                        prepend-icon="alternate_email"
                                        type="email"
                                        color="teal accent-3"
                                ></v-text-field>

                                <v-text-field
                                        outlined
                                        placeholder="Senha"
                                        label="Senha"
                                        v-model="password"
                                        prepend-icon="lock"
                                        :append-icon="show_password ? 'visibility' : 'visibility_off'"
                                        :type="show_password ? 'text' : 'password'"
                                        @click:append="show_password = !show_password"
                                        color="teal accent-3"
                                ></v-text-field>
                            </v-form>

                            <v-layout align-center justify-center row wrap>
                                <v-flex xs12>
                                    <div class="text-center">
                                        <v-btn
                                                block
                                                tile
                                                class="white--text"
                                                color="teal accent-3"
                                                :disabled="!formIsValid"
                                                :loading="loading"
                                                @click="loader = 'loading'"
                                        >
                                            Login
                                            <template v-slot:loader>
                                                <span>Aguarde...</span>
                                            </template>
                                        </v-btn>
                                        <br/>
                                        <v-flex xs12>
                                            <div>
                                                <v-btn
                                                        block
                                                        tile
                                                        outlined
                                                        color="teal accent-3"
                                                        to="/"
                                                >
                                                    Ainda Não tem uma conta? <v-icon>touch_app</v-icon> Cadastro
                                                </v-btn>
                                            </div>
                                        </v-flex>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data: () => ({
            size: null,
            AZ: null,
            number: null,
            loader: null,
            loading: false,
            email: null,
            password: null,
            show_password: false,
        }),
        computed: {
            formIsValid() {
                return this.email && this.password && this.size === true && this.AZ === true && this.number == true
            },
        },
        watch: {
            password(val) {
                if (val.length >= 6) {
                    this.size = true
                } else {
                    this.size = false
                }
                if (val.toLowerCase() == val) {
                    this.AZ = false
                } else {
                    this.AZ = true
                }
                if (val.replace(/[^0-9]/g, '').length > 0) {
                    this.number = true
                } else {
                    this.number = false
                }
            },
            loader () {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this.redirect()), 3000)

                this.loader = null
            },
        },
        methods:{
            redirect(){
                this.$router.push('/Administration')
            },
        }
    }
</script>

<style>
</style>