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
                                <strong>
                                    Seja Bem vindo à TechNurse
                                </strong>
                                <h4>
                                    {{email}}
                                </h4>
                            </v-flex>

                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            email: 'jkdsgg@gmail.com',
        }),
    }
</script>

<style>
</style>