<template>
  <div class="bbduk">
    <v-card elevation="12">
      <v-card-title>BBDuk</v-card-title>
      <v-card-subtitle>
        Adapter/Quality Trimming and Filtering
      </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12" md=3>
           <v-card class="pa-3">
             <v-form ref="form" v-model="form">
               <v-row>
                 <v-col cols="12">
                   <v-checkbox v-model="input.paired" label="Paired-end Sequencing"></v-checkbox>
                 </v-col>
                 <v-col cols="12" md="4">
                   <v-text-field v-model="input.trimq" label="Quality trimming"></v-text-field>
                 </v-col>
                 <v-col cols="12" md="8">
                   <v-select
                        v-model="input.qtrim"
                        :items="qtrim"
                        label="Side triming"
                        item-text="text"
                        item-value="value"
                    ></v-select>
                 </v-col>
               </v-row>
             </v-form>
             <v-card-actions>
                <v-btn @click="$refs.form.reset()"> Clear</v-btn>
                <v-spacer></v-spacer>
                <v-btn 
                  :disabled="!form" 
                  class="white--text"
                  color="deep-purple accent-4"
                  @click="runBBDuk"
                >
                  Run BBDuk
                </v-btn>
              </v-card-actions>
           </v-card>

          </v-col>
          <v-col cols="12" md=9>
            <v-card>
              <v-card-text>
                <p> “Duk” stands for Decontamination Using Kmers. BBDuk was developed to combine most common data-quality-related trimming, filtering, and masking operations into a single high-performance tool.</p>
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

export default {
  name: 'Bbduk',
  data(){
    return {
      form: false,
      input: {
        paired: true,
        fq1: '',
        fq2: '',
        trimq : 20,
        qtrim : 'Both',
        length: 35,
        user: this.$store.state.user
      },
      qtrim: [
        {text: 'Both', value: 'rl'},
        {text: 'Rigth End', value: 'r'},
        {text: 'Left End', value: 'l'}
      ]
    }
  },

  methods: {
    async runBBDuk() {
      try {
        let res = await this.axios.post('/biotools/bbduk', this.input)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
  },

}
</script>