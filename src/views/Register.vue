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
                                        placeholder="Nome Completo"
                                        label="Nome Completo"
                                        v-model="name"
                                        prepend-icon="person"
                                        type="text"
                                        color="teal accent-3"
                                ></v-text-field>

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
                                        hide-details
                                ></v-text-field>

                                <v-switch hide-details color="teal accent-3" readonly v-model="size" label="Pelo menos 6 caracteres"></v-switch>
                                <v-switch hide-details color="teal accent-3" readonly v-model="AZ" label="Pelo menos uma letra maiúscula"></v-switch>
                                <v-switch color="teal accent-3" readonly v-model="number" label="Pelo menos 1 número"></v-switch>

                                <v-text-field
                                        outlined
                                        placeholder="Confirmação de senha"
                                        label="Confirmação de senha"
                                        v-model="confirm_password"
                                        prepend-icon="lock"
                                        :append-icon="show_password ? 'visibility' : 'visibility_off'"
                                        :type="show_password ? 'text' : 'password'"
                                        @click:append="show_password = !show_password"
                                        color="teal accent-3"
                                        :rules="[passwords]"
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
                                            Criar Conta
                                        </v-btn>
                                        <br/>
                                        <v-flex xs12>
                                            <div>
                                                <v-btn
                                                        block
                                                        tile
                                                        outlined
                                                        color="teal accent-3"
                                                        to="/Login"
                                                >
                                                    Já tem uma conta? Login
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
            size: false,
            AZ: false,
            number: false,
            name: null,
            email: null,
            password: null,
            confirm_password: null,
            show_password: false,
            samePasswords: false,
        }),
        computed: {
            formIsValid() {
                return this.name && this.email && this.password && this.confirm_password
            },
            passwords() {
                if (this.password !== this.confirm_password) {
                    this.samePasswords = false
                    return "As Senhas Estão Diferentes"
                } else if (this.password == this.confirm_password) {
                    this.samePasswords = true
                    return ''
                }
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
        }
    }
</script>

<style>
</style>