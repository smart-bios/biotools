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

            <v-list dense>
                <v-list-group
                    v-for="item in items"
                    :key="item.title"
                    :prepend-icon="item.action"
                    no-action
                >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    :to="child.to"
                    
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="child.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                 </v-list-group>
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
            {
                action: 'mdi-content-cut',
                title: 'Pre-assembly',
                items: [
                    { title: 'FastQC', to: 'fastqc'},
                    { title: 'BBDuk', to: 'bbduk' },
                    { title: 'FastQ Screen', to: 'fastq-screen' },
                ]
            },
            {
                action: 'mdi-chart-gantt',
                title: 'Assembly',
                items: [
                    { title: 'Unicycler', to: 'unicycler' },
                    { title: 'MaSuRCA', to: 'masurca' },
                    { title: 'Platanus-allee', to: 'platanus' }

                ]
            },

            {
                action: 'mdi-equal-box',
                title: 'Post-assembly',
                items: [
                    { title: 'Quast', to: 'quast' },
                    { title: 'Busco', to: 'busco' }
                ]
            },
            {
                action: 'mdi-package-variant-closed',
                title: 'Genomic Prediction',
                items: [
                    { title: 'DFAST', to: 'dfast' },
                    { title: 'Prokka', to: 'prokka' },
                    { title: 'Augustus', to: 'augustus' },
                ]
            },
            {
                action: 'mdi-puzzle',
                title: 'Functional Annotation',
                items: [{ title: 'eggNOG', to: 'eggnog' }]
                
            }
        ],
      }
    }
}
</script>