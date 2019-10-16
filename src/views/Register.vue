<template>
    <v-content>
        <v-container fluid fill-heigh>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-6">
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
                                        placeholder="Nome Completo"
                                        outlined
                                        label="Nome Completo"
                                        v-model="name"
                                        prepend-icon="person"
                                        type="text"
                                ></v-text-field>

                                <v-text-field
                                        placeholder="00000"
                                        outlined
                                        label="CRM"
                                        v-model="crm"
                                        prepend-icon="credit_card"
                                        type="number"
                                ></v-text-field>

                                <v-select
                                        prepend-icon="school"
                                        :items="specialtiesOptions"
                                        label="Especialidades"
                                        outlined
                                        multiple
                                        v-model="specialties"
                                        clearable
                                        chips
                                ></v-select>

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
                                        type="password"
                                        label="Senha"
                                        v-model="password"
                                        prepend-icon="lock"
                                        :append-icon="show_password ? 'visibility' : 'visibility_off'"
                                        :type="show_password ? 'text' : 'password'"
                                        @click:append="show_password = !show_password"
                                ></v-text-field>
                                <v-text-field
                                        outlined
                                        type="password"
                                        label="Confirmação de senha"
                                        v-model="confirm_password"
                                        prepend-icon="lock"
                                        :append-icon="show_confirm_password ? 'visibility' : 'visibility_off'"
                                        :type="show_confirm_password ? 'text' : 'password'"
                                        @click:append="show_confirm_password = !show_confirm_password"
                                >
                                </v-text-field>
                            </v-form>
                            <v-layout align-center justify-center>
                                <v-btn
                                        color="primary"
                                        outlined
                                        :to="{ name: 'Login'}"
                                >
                                    Login
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn

                                        @click="null"
                                        color="primary"
                                        :disabled="!formIsValid"
                                >
                                    criar Conta
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
            name: null,
            crm: null,
            email: null,
            password: null,
            confirm_password:null,
            show_password: false,
            show_confirm_password: false,
            specialties: [],
            specialtiesOptions: [
                'Clinico Geral',
                'Cirurgiao Geral',
                'Cardiologia',
                'Dermatologia',
                'Endocrinologia',
                'Fonoaudiologia',
                'Gastrenterologia',
                'Ginecologia',
                'Infectologia',
                'Mastologia',
                'Neurologia',
                'Neuropediatria',
                'Nutricionista',
                'Oncologia',
                'Obstetrícia',
                'Ortopedia',
                'Otorrinolaringologia',
                'Peneumologia',
                'Psiquiatria',
                'Psicologia',
                'Proctologia',
                'Pediatria',
                'Reumatologia',
                'Urologia'
            ],
        }),
        computed:{
            formIsValid () {
                return this.email && this.password && this.name && this.crm && this.specialties.length > 0
            },
        },
    }
</script>

<style>
</style>