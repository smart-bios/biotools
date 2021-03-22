<template>
  <v-app>
    
    <Appbar />
    
    <v-main>
      <v-container fluid class="pa-3">
        <router-view/>
      </v-container>
    </v-main>

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
