<template>

    <v-container text-xs-center >

        <v-layout >
            <v-flex xs12 sm6 offset-sm3 >
                <v-card>
                    <v-card-text>
                        <v-flex xs12>
                            <v-img
                                    :src="require('../assets/TECHNURSE_logo.jpg')"
                                    class="my-3"
                                    contain
                                    height="300"
                            ></v-img>
                        </v-flex>
                        <div class="text-center">
                            <v-icon x-large color="teal accent-3">check_circle_outline</v-icon>
                            <br>
                            <strong>Tudo Certo</strong>
                        </div>
                        <v-container text-center>
                            <v-flex>
                                <h3>
                                    Seja Bem vindo:
                                </h3>
                                <h2>
                                    {{email}}
                                </h2>
                            </v-flex>

                        </v-container>
                        <v-layout align-center justify-center>
                            <v-dialog v-model="dialog" persistent max-width="355">
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                            dark
                                            v-on="on"
                                    >
                                        Sair
                                        <v-icon right>exit_to_app</v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>Deseja Sair: {{ email }} ?</v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-actions>
                                        <v-btn
                                                color="error"
                                                @click="dialog = false"
                                        >
                                            NÃO
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                color="success"
                                                @click="sair"
                                        >
                                            SIM
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            dialog: false
        }),
        mounted(){
            var token = this.$store.getters.user
            this.$store.dispatch('email',{token:token})
        },
        computed:{
            email(){
                return this.$store.getters.email
            }
        },
        methods:{
            sair(){
                this.$store.dispatch('logOut')
                this.$router.push('/Login')
            },
        }
    }
</script>

<style>
</style>