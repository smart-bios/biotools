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
                  <v-select 
                    v-model="input.fastq" 
                    :items="fastqFiles" 
                    item-text="filename" 
                    item-value="path"
                    label="Fastq file" 
                  >
                  </v-select>
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
      form :false,
      overlay : false,
      show: false,
      input: {
        fastq: '',
        user: this.$store.state.user
      },
      result: '',
    }
  },

  computed: {
    ...mapGetters(['fastqFiles'])
  },

  methods: {
    runFastqScreen() {
      console.log('run fastq screen')
    }
  },

}
</script>