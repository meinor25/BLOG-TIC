<template>
    <div class="posts pt-15"  id="posts">
        <h3 class="text-center text-h5 text-xl-h2 text-md-h3 font-weight-light" data-aos="flip-right" data-aos-delay="200"> 
            <span class="green--text delete-bar">/</span>
            ARTICULOS
        </h3>
        <!-- IF THERE ARE NOT ARTICLES -->
        <h2 v-if="posts.length == 0" class="text-h5 text-md-h3 text-xl-h2 pt-15 px-10 text-center" data-aos="flip-right" data-aos-delay="200" >
            No hay articulos en este momento 
            <v-icon 
                class="no-articles"
                x-large
                color="red"
            >   
                mdi-emoticon-sad-outline
            </v-icon>
        </h2>

        <!-- POSTS -->
        <v-container data-aos="flip-left" class="mt-15">
            <v-row>
                <v-col cols='12' md='4' v-for="post in posts" :key="post._id" >
                    <v-card>
                        <v-img
                            max-height="20rem"
                            :src="post.img"
                        />
                        <div class="pa-5    ">
                            <h3 class="text-h6">
                                {{post.title}}
                            </h3>
                            <p class="text-subtitle-1 font-weight-light">
                                {{post.descripcion}}
                            </p>
                            <p class="font-italic grey--text">Fecha: {{post.date | moment("dddd, MMMM Do YYYY")  }}</p>
                            <p class="font-italic grey--text">Autor: {{post.user }}</p>
                            <router-link :to="`/post/${post._id}`" target="_blank">
                                <v-btn text class="mt-5">Leer articulo</v-btn>    
                            </router-link>
                        </div>
                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="d-flex justify-center">
            <router-link to="/create-post" v-if="posts.length < 6">
                <v-btn
                    :disabled="posts.length >= 6"
                    color="green"
                    outlined
                    tile
                >
                    CREA UN ARTICULO
                </v-btn>
            </router-link>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    data(){
        return{
            posts: [],
        }
    },
    created(){
        this.getPosts()
    },
    methods: {
        getPosts(){
            this.axios.get('blog')
                .then(
                    (res)=>{   
                        this.posts = res.data.docs
                    } 
                )
        },
    }
}
</script>

<style>
    .posts{
        height: 100%;
        padding-bottom: 10rem;
    }
    .delete-bar{
        animation: blink 0.7s  infinite;
    }
    .no-articles{
        animation: bounce 0.5s infinite;
    }
    @keyframes blink {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
     @keyframes bounce {
        0%{
            transform: translateY(4px);
        }
        50%{
            transform: translateY(-4px);
        }
        100%{
            transform: translateY(4px);
        }
    }
</style>