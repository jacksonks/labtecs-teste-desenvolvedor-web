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
                                        outlined
                                        label="Nome Completo"
                                        v-model="name"
                                        prepend-icon="person"
                                        type="text"
                                ></v-text-field>

                                <v-text-field
                                        placeholder="exemplo@gmail.com"
                                        outlined
                                        label="E-mail"
                                        v-model="email"
                                        prepend-icon="alternate_email"
                                        type="email "
                                ></v-text-field>

                                <v-text-field
                                        outlined
                                        label="Senha"
                                        v-model="password"
                                        prepend-icon="lock"
                                        :append-icon="show_password ? 'visibility' : 'visibility_off'"
                                        :type="show_password ? 'text' : 'password'"
                                        @click:append="show_password = !show_password"
                                ></v-text-field>

                                <v-slider
                                        color="teal accent-3"
                                        v-model="value"
                                        step="40"
                                        ticks="always"
                                        tick-size="3"
                                ></v-slider>

                                <v-radio
                                        v-model="abc"
                                        readonly
                                        label="Pelo menos 6 caracteres"
                                        color="teal accent-3"
                                ></v-radio>
                                <v-radio
                                        v-model="AZ"
                                        readonly
                                        label="Pelo menos uma letra maiúscula"
                                        color="teal accent-3"
                                ></v-radio>
                                <v-radio
                                        v-model="number123"
                                        label="Pelo menos 1 número"
                                        color="teal accent-3"
                                ></v-radio>
                                <p></p>
                                <v-text-field
                                        outlined
                                        label="Confirmação de senha"
                                        v-model="confirm_password"
                                        prepend-icon="lock"
                                        :append-icon="show_password ? 'visibility' : 'visibility_off'"
                                        :type="show_password ? 'text' : 'password'"
                                        @click:append="show_password = !show_password"
                                ></v-text-field>
                            </v-form>
                            <v-layout align-center justify-center>
                                <v-btn
                                        dark
                                        large
                                        color="teal accent-3"
                                        :disabled="!formIsValid"
                                >
                                    Criar Conta
                                </v-btn>
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
            value: 0,
            abc: false,
            AZ: true,
            Number123: false,
            name: null,
            email: null,
            password: null,
            confirm_password:null,
            show_password: false,
        }),
        computed:{
            formIsValid () {
                return this.name && this.email && this.password && this.confirm_password
            },
        },
    }
</script>

<style>
</style>