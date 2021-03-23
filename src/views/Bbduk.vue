<template>
  <div class="bbduk">
    <v-card elevation="12">
      <v-card-title>BBduk</v-card-title>
      <v-card-subtitle>
        
      </v-card-subtitle>
      <v-card-text>
        <p> “Duk” stands for Decontamination Using Kmers. BBDuk was developed to combine most common data-quality-related trimming, filtering, and masking operations into a single high-performance tool.</p>
        <v-row>
                    <v-col cols="12" md=3>
                       <v-card class="pa-3">
                           <v-select :items="items" label="Assembly" dense outlined></v-select>
                       </v-card>
                        <v-card class="pa-3">
                           <v-select :items="items" label="Database" dense outlined></v-select>
                       </v-card>
                    </v-col>
                    <v-col cols="12" md=9>
                        <v-card class="pa-3">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem debitis explicabo quisquam delectus accusamus, et reprehenderit possimus assumenda ducimus veritatis consectetur voluptatum odit consequuntur optio iusto, esse aperiam! Perferendis!
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
      
    }
  }

}
</script>