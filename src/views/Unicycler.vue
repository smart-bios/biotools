<template>
  <div class="unicycler">
    <v-card elevation="12">
      <v-card-title>Unicycler</v-card-title>
      <v-card-subtitle>
        <i>Wick RR, Judd LM, Gorrie CL, Holt KE</i> (2017) <b>Unicycler: Resolving bacterial genome assemblies from short and long sequencing reads.</b><br> PLOS Computational Biology 13(6): e1005595. <a href="https://doi.org/10.1371/journal.pcbi.1005595" target="_blank">https://doi.org/10.1371/journal.pcbi.1005595</a>
      </v-card-subtitle>
      <v-card-text>
        <p>Unicycler is an assembly pipeline for bacterial genomes. It can assemble Illumina-only read sets where it functions as a SPAdes-optimiser. It can also assembly long-read-only sets (PacBio or Nanopore) where it runs a miniasm+Racon pipeline. For the best possible assemblies, give it both Illumina reads and long reads, and it will conduct a hybrid assembly.</p>
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
      
    }
  }

}
</script>