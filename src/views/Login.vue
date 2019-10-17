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
                                        >
                                            Login
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
                                                    Ainda Não tem uma conta? Cadastro
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
            email: null,
            password: null,
            show_password: false,
        }),
        computed: {
            formIsValid() {
                return this.email && this.password
            },
        },
    }
</script>

<style>
</style>