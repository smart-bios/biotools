<template>
    <div>
        
        <v-navigation-drawer app permanent clipped expand-on-hover  color="teal lighten-5">
            <template v-slot:prepend>
                <v-list-item two-line>
                <v-list-item-avatar>
                    <v-avatar color="orange darken-4" size="25">
                        <v-icon dark> mdi-account-circle</v-icon>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Username</v-list-item-title>
                    <v-list-item-subtitle>Bienvenido.</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
        <v-app-bar 
            app
            clipped-left
            color="indigo" 
            dark
        >
            <v-toolbar-title>
                <h2>BIOTOOLS</h2>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text>
                <span class="mr-2">Login</span>
                <!-- <v-icon>mdi-open-in-new</v-icon> -->
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'Appbar',

    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
      }
    }
}
</script>