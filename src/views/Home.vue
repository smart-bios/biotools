<template>
  <div class="home">
    <v-sheet
      color="white"
      elevation="7"
      class="pa-6"
    >
    
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, reprehenderit itaque ratione corrupti est repellat! Ipsam possimus exercitationem maxime dolores, molestiae id itaque repellendus et dolor quisquam eveniet, amet natus?</p>
    {{files}}
    </v-sheet>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data(){
    return {
      
    }
  },

  computed: {
    ...mapState(['files'])
  },

  created(){
    this.loadFiles();
  },

  methods: {
    
      ...mapActions(['loadFiles'])
  }

}
</script>
