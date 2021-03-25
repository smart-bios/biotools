<template>
  <div class="unicycler">
    <v-card elevation="12" min-height="700">
      <v-card-title>Unicycler</v-card-title>
      <v-card-subtitle>Resolving bacterial genome assemblies from short and long sequencing reads.</v-card-subtitle>
      <v-card-text>
        <p>Unicycler is an assembly pipeline for bacterial genomes. It can assemble Illumina-only read sets where it functions as a SPAdes-optimiser. It can also assembly long-read-only sets (PacBio or Nanopore) where it runs a miniasm+Racon pipeline. For the best possible assemblies, give it both Illumina reads and long reads, and it will conduct a hybrid assembly.</p>
        <v-row>
            <v-col cols="12" md="3">
                <v-card class="pa-3" color="grey lighten-4">
                  <v-form ref="form" v-model="form">
                    <v-text-field 
                      v-model="input.name" 
                      :counter="12" 
                      label="Project Name"
                      :rules="[rules.required, rules.length, rules.upper]"
                    ></v-text-field>
                    <v-select
                        v-model="input.fq1"
                        :items="items"
                        label="Forward reads."
                        :rules="[rules.required]"
                    ></v-select>
                    <v-select
                        v-model="input.fq2"
                        :items="items"
                        label="Forward reads."
                        :rules="[rules.required]"
                    ></v-select>
                    <v-select
                        v-model="input.mode"
                        :items="modes"
                        label="Bridging mode."
                       :rules="[rules.required]"
                    ></v-select>
                    <v-text-field 
                      v-model="input.length_fasta" 
                      label="Min fasta length">
                      :rules="[rules.required]"
                    </v-text-field>
                  </v-form>
                  <v-card-actions>
                    <v-btn @click="$refs.form.reset()"> Clear</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!form" class="white--text" color="deep-purple accent-4">
                      Run Unicycler
                    </v-btn>
                  </v-card-actions>

                   <!--  <v-btn dark color= "indigo">Run Unicycler</v-btn>
                    <v-btn text x-small to="/storage">Upload File</v-btn> -->
                </v-card>
                    
            </v-col>
            <v-col cols="12" md="9">
                <v-card class="pa-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsa quod doloremque eaque quos saepe dolores totam velit enim ipsum, fugit dolore libero harum aliquid nemo mollitia error exercitationem impedit?</p>
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
  name: 'Unicycler',
  data(){
    return {
      form: false,
      input: {
        name: 'UNICYCLER01',
        fq1: null,
        fq2: null,
        mode: 'normal',
        length_fasta: 500,
        user: this.$store.state.user
      },
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      modes: ['conservative','normal', 'bold'],
      rules: {
        upper: v => /^[A-Z]*$/.test(v) || 'Only Uppercase',
        length:  v => (v && v.length <= 15) || `Name must be less than 10 characters`,
        required: v => !!v || 'This field is required',
      },

      
    }
  }
}
</script>