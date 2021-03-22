<template>
  <div class="fastqc">
    <v-card elevation="12">
      <v-card-title>Fastqc</v-card-title>
      <v-card-subtitle><i>Andrews S.</i> (2010). <b>FastQC: a quality control tool for high throughput sequence data</b> Available online at: <a href="http://www.bioinformatics.babraham.ac.uk/projects/fastqc" target="_blank">http://www.bioinformatics.babraham.ac.uk/projects/fastqc</a></v-card-subtitle>
      <v-card-text>
        <p>FastQC permite realizar controles de calidad en archivos de secuencias obtenidos de métodos de secuenciación. Aporta un conjunto de análisis que te pueden dar una idea general rápida de si los datos tienen algún problema antes de proseguir con el análisis o si por el contrario cumplen los estándares de calidad aportados por el sistema.</p> 




      </v-card-text>





    </v-card>
    <!-- h1>Fastqc</h1>
    <v-divider dark></v-divider>
    <p>FastQC permite realizar controles de calidad en archivos de secuencias obtenidos de métodos de secuenciación. Aporta un conjunto de análisis que te pueden dar una idea general rápida de si los datos tienen algún problema antes de proseguir con el análisis o si por el contrario cumplen los estándares de calidad aportados por el sistema.</p> -->
     <!-- <v-select 
      dense 
      v-model="input.file" 
      :items="fastqFiles" 
      item-text="filename" 
      item-value="_id" 
      label="Assembly" 
      hint="Seleccione un ensamble"
      persistent-hint
      outlined>
    </v-select> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src

export default {
  name: 'Fastqc',
  data(){
    return {
      input: {
        file: ''
      }
    }
  },

  computed: {
    ...mapGetters(['fastqFiles'])
  }

}
</script>