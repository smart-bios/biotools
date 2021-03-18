<template>
  <v-app>
    
    <Appbar />
    
    <v-content>
      <v-container class="pa-3">
        <router-view/>
      </v-container>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Appbar from './components/Appbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Appbar,
    Footer
  },
};
</script>
