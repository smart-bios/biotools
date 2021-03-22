<template>
  <div class="busco">
    <h1>Busco</h1>
    {{fastaFiles}}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Busco',
  data(){
    return {
      
    }
    
  },
  
  computed: {
    ...mapGetters(['fastaFiles'])
  }

}
</script>