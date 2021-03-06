<template>
  <div class="fastq-screen">
    <v-card elevation="12" min-height="750">
      <v-card-title>FastQ Screen</v-card-title>
      <v-card-subtitle>
        A tool for multi-genome mapping and quality control.
      </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-card color="grey lighten-4">
              <v-card-text>
                <v-form ref="form" v-model="form">

                  <v-text-field 
                    v-model="input.basename" 
                    label="Basename" 
                    type="text"
                    hint=" Specify a directory name in which to save output files."
                    persistent-hint
                    :rules="[rules.required]"
                    class="mb-4"
                  >
                  </v-text-field>

                  <v-select 
                    v-model="input.fastq" 
                    :items="fastqFiles" 
                    item-text="filename" 
                    item-value="path"
                    label="Fastq file" 
                    :rules="[rules.required]"
                  >
                  </v-select>

                  <v-text-field 
                    v-model="input.subset" 
                    label="Subset" 
                    type="number"
                    hint="Don't use the whole sequence file, but create a 
                      temporary dataset of this specified number of 
                      reads. The dataset created will be of 
                      approximately (within a factor of 2) of this size.To process
                      an entire dataset however, adjust --subset to 0."
                    persistent-hint
                    class="mb-5"
                    :rules="[rules.required]"
                  >
                  </v-text-field>
 
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>Databases</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <div v-for="item in databases" :key="item._id">
                          <v-checkbox 
                            v-model="input.databases" 
                            :label="item.name" 
                            :value="item.path"
                          ></v-checkbox>
                        </div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-form>
              </v-card-text>


              <v-card-actions>
                <v-btn 
                  :disabled="!form" 
                  class="white--text"
                  color="deep-purple accent-4"
                  @click="runFastqScreen"
                >
                  Run Fastq Screen
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="9">
            <v-card>
              <v-card-text>
                <p> FastQ Screen is an application which allows you to search a FastQ sequence file against a set of sequence databases and summarises the results. It is useful for incorporating into a sequencing pipeline to identify sources of contamination or mislabeled samples.</p>
               {{result}}
                <!-- <div v-html="result"></div> -->

                <!-- <img alt="Awesome logo" :src="'data:image/png;base64,'+result" /> -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
  name: 'FastqScreen',
  data(){
    return {
      form : false,
      overlay : false,
      show: false,
      databases: ['/bowtie2/adapters', '/bowtie2/vectors', '/bowtie2/viral'],
      input: {
        basename: 'fqscreen',
        fastq: '',
        databases: [],
        subset: 100000,
        user: this.$store.state.user
      },
      rules: {
        required: v => !!v || 'This field is required',
      },
      result: '',
    }
  },

  created () {
    this.getDatabases();;
  },

  computed: {
    ...mapGetters(['fastqFiles'])
  },

  methods: {
    async runFastqScreen() {
      try {
        let res = await this.axios.post('/biotools/fscreen', this.input)
        this.result = res.data
      } catch (error) {
        console.log(error)
      }
    },

    async getDatabases(){
      try {
        let res = await this.axios.get('/database/list/bowtie2')
        console.log(res.data)
        this.databases = res.data.result
      
      } catch (error) {
        console.log(error.response)
      }
    }
  },

}
</script>