<template>
    <div class="storgae">
        <h1>Storage</h1>
        <v-sheet color="blue-grey lighten-5" elevation="18" class="pa-5">
            <v-row>
                <v-col cols="12" xs="12" sm="4" md="4" lg="2" v-for="item in files" :key="item._id">
                    <v-card elevation="5">
                        <v-card-title>{{item.filename}}</v-card-title>
                        <v-card-subtitle>{{item.type}}</v-card-subtitle>
                        <v-card-text>{{item.description}}</v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="warning" dark small elevation="3">Delete</v-btn>
                            <v-btn color="succes" dark small elevation="3">Download</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
    export default {
        name:'Storage',

        computed: {
            ...mapState(['files'])
        },
        mounted () {
        },

        created(){
            
            //this.loadStorage('6042a3a2c62d9162af2a0c08');
        },

        methods: {
            //...mapActions(['loadStorage'])
           /*  async loadFiles(){
                
                try {
                    let res= await this.axios.get(`/storage/find/6042a3a2c62d9162af2a0c08`)
                    this.files = res.data.result
                } catch (error) {
                    console.log(error)
                }


            }, */
        }
        
    }
</script>
