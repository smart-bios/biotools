<template>
    <div class="storgae">
        <v-card elevation="18" class="py-5">
            <v-card-title>Storage</v-card-title>
            <v-card-subtitle>Almacenamiento de archivos subidos y resultados generados</v-card-subtitle>
            <v-card-text>
                <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="indigo darken-1" dark v-bind="attrs" v-on="on">
                            Upload File
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title class="headline grey lighten-2">Upload Files</v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-file-input 
                                            v-model="file.file"
                                            counter 
                                            show-size 
                                            accept=".fna, .fasta, .faa, .fa, .faa, .fastq, .fq , .gz"
                                        ></v-file-input>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-select
                                            v-model="file.type"
                                            :items="items"
                                            item-text="text"
                                            item-value="value"
                                            label="Please select the file format *"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        v-model="file.description"
                                        label="Description"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                            <template >
                                <v-progress-linear v-show="progress" :value="value"></v-progress-linear>
                            </template>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="dialog = false">Close</v-btn>
                            <v-btn color="primary" @click="sendFile">Upload</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                
                <v-divider class="my-5"></v-divider>
                
                <v-row>
                    <v-col cols="12" xs="12" sm="4" md="4" lg="2" v-for="item in files" :key="item._id">
                        <v-card elevation="5">
                            <v-card-title>{{item.filename}}</v-card-title>
                            <v-card-subtitle>{{item.type}}</v-card-subtitle>
                            <v-card-text>{{item.description}}</v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="red lighten-1" dark small elevation="3" @click="deleteFile(item._id)">Delete</v-btn>
                                <v-btn color="green lighten-1" dark small elevation="3">Download</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
    export default {
        name:'Storage',
        data() {
            return {
                dialog: false,
                progress:false,
                value: 0,
                items: [
                    {value: 'fastq', text:'Sequencing read data (fastq, fq)'},
                    {value: 'fasta', text:'A sequence record (fasta, fna, fnn, faa, fs)'},
                    {value: 'other', text:'Other file format'},
                ],

                file: {
                    file: null,
                    type: '',
                    description: ''
                }
            }
        },
        computed: {
            ...mapState(['files'])
        },
        mounted () {
        },

        created(){
            
            this.loadStorage(this.$store.state.user._id);
        },

        methods: {
             ...mapActions(['loadStorage']),

            async sendFile(){
                const formData = new FormData;
                formData.append('file', this.file.file)
                formData.append('user', this.$store.state.user._id)
                formData.append('type', this.file.type)
                formData.append('description', this.file.description)
                this.progress = true 

                const response = await this.axios.post('/storage/upload', formData, {
                    onUploadProgress: ProgressEvent => { 
                        let progress  = Math.round((ProgressEvent.loaded / ProgressEvent.total)*100)
                        this.value = progress
                    }
                })
                if(this.value == 100){
                     this.loadStorage(this.$store.state.user._id);
                }
            },

            async deleteFile(id){
                try {
                    confirm('Estás segura de que quieres eliminar este archivo?') &&
                    await this.axios.delete(`/storage/delete/${id}`)
                    this.loadStorage(this.$store.state.user._id);
                } catch (error) {
                    console.log(error)
                }
            }
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
