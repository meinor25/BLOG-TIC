<template>
    <div class="Home">
        <v-app-bar    
                color="transparent"
                flat
                height="100"
                absolute
                class="py-2 navbar"
                :class="{'navbar-container' : this.$vuetify.breakpoint.xl} "
            >
            <h3 class="pl-10 text-h6 text-md-h4  white--text">
                <v-icon  color="white">
                    mdi-laptop
                </v-icon>
                <span class="green--text">
                    TIC
                </span>
                    Blog
            </h3>
            <v-spacer></v-spacer>
            <!-- NAV-MENU -->
            <div class="nav" v-if="this.$vuetify.breakpoint.mdAndUp">
                <a  v-for="(link, i) in navLinks" :key="i" >
                    <v-btn 
                        text
                        rounded
                        class="text-h6  white--text"
                        @click="$vuetify.goTo(link.to)"
                    >
                        {{link.text}}
                    </v-btn>
                </a>
            </div>
            <!-- MOBILE-NAV-MENU -->
            <div class="mobile-nav" v-else>
                <v-app-bar-nav-icon 
                    color="white"
                    @click="drawer = !drawer"
                >
                </v-app-bar-nav-icon>
            </div>
        </v-app-bar>
            <v-navigation-drawer
                v-model="drawer"
                fixed
                color="white"
                height="100vh"
                width="50%"
            >
                <v-list class="d-flex flex-column justify-center align-center">
                    <v-list-item v-for="(link, i) in navLinks" :key="i">
                        <router-link :to="link.to">
                            <v-btn
                                text
                                tile
                            >
                                {{link.text}}
                            </v-btn>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            navLinks: [
                {text : 'Home', to:'#'},
                {text : 'Posts', to:'#posts'},
            ],
            drawer: false,
            
        }
    }
}
</script>

<style scoped lang="scss">
    .navbar-container{
        padding: 0 5rem;
    }
    .change-color{
        background-color: white
    }
</style>