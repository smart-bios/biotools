<template>
  <div class="login">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum tempore provident ratione in maiores? Animi, corrupti nesciunt mollitia ducimus minima quidem asperiores. Commodi rem minus natus cumque nobis placeat nihil.</p>
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
        <v-btn color="indigo " @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>  
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
      async login(){
        try {
          let res = await this.axios.post('/user/login',this.user)
          this.$store.dispatch("saveToken", res.data.token);
        } catch (error) {
          if (error.response) {
            console.log("error.response.data",error.response.data);
          }
        }
      }
    }
  };
</script>
