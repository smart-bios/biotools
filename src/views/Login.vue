<template>
  <div class="login">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum tempore provident ratione in maiores? Animi, corrupti nesciunt mollitia ducimus minima quidem asperiores. Commodi rem minus natus cumque nobis placeat nihil.</p>
    <v-alert v-show="show" dense class="mx-auto" :type="type" max-width="600">{{message}}</v-alert>
    <v-card class="elevation-12 mx-auto my-12" max-width="600">
      <v-toolbar dark color="indigo ">
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account"
            name="login"
            label="Login"
            type="text"
            v-model="user.email"
          ></v-text-field>
          <v-text-field
            id="mdi-lock"
            prepend-icon="mdi-lock"
            name="password"
            label="Password"
            type="password"
            v-model="user.password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark color="indigo " @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>

    
  </div>  
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: 'Login',
    data(){
      return {
        user: {
          email: '',
          password: ''
        },
        message: '',
        type: 'success',
        show: false
        
      }
    },

    methods: {

      ...mapActions(['loadStorage']),

      async login(){
        try {
            this.show = false 
            let res = await this.axios.post('/user/login', this.user)
            let user = await this.$store.dispatch('saveToken', res.data.token)
            this.loadStorage(user._id)
        } catch (error) {
            this.message = error.response.data.msg
            this.type = 'error'
            this.show = true            
        }
      }


      
    }
  };
</script>
