<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar color="primary" dark text>
                            <v-toolbar-title>
                                <v-flex xs12>
                                    <!--
                                    <v-img
                                            :src="require('../assets/logo-pro-saude.png')"
                                            class="my-3"
                                            contain
                                            height="50"
                                    ></v-img>
                                    -->
                                </v-flex>
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                        placeholder="exemplo@gmail.com"
                                        outlined
                                        label="E-mail"
                                        v-model="email"
                                        prepend-icon="alternate_email"
                                        type="text"
                                ></v-text-field>

                                <v-text-field
                                        outlined
                                        label="Senha"
                                        v-model="password"
                                        prepend-icon="lock"
                                        :append-icon="show ? 'visibility' : 'visibility_off'"
                                        :type="show ? 'text' : 'password'"
                                        @click:append="show = !show"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                    color="primary"
                                    outlined
                                    :to="{ name: 'Register'}"
                            >
                                Cadastro
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="primary"
                                    :disabled="!formIsValid"
                                    @click="null"
                            >
                                Logar
                            </v-btn>
                        </v-card-actions>
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
            show: false,
        }),
        computed:{
            formIsValid () {
                return this.email && this.password
            },
        },
    }
</script>

<style>
</style>