<template>
  <div class="fastq-screen">
    <v-card elevation="12" min-height="750">
      <v-card-title>FastQ Screen</v-card-title>
      <v-card-subtitle>
        <i>Wingett SW, Andrews S</i>. <b>FastQ Screen: A tool for multi-genome mapping and quality control.</b> F1000Res. 2018;7:1338. Published 2018 Aug 24. <a href="https://dx.doi.org/10.12688%2Ff1000research.15931.2" target="_blank">doi:10.12688/f1000research.15931.2</a>
      </v-card-subtitle>
      <v-card-text>
        <p> FastQ Screen is an application which allows you to search a FastQ sequence file against a set of sequence databases and summarises the results. It is useful for incorporating into a sequencing pipeline to identify sources of contamination or mislabeled samples.</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'FastqScreen',
  data(){
    return {
      
    }
  }

}
</script>