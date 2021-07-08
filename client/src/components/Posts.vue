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
        <v-container data-aos="flip-left">
            <v-row>
                <v-col cols='12' md='4' v-for="post in posts" :key="post._id" >
                    <v-card>
                        <v-img
                            contain
                            :src="post.img"
                        />
                        <div class="pa-5    ">
                            <h3 class="text-h6">
                                {{post.title}}
                            </h3>
                            <p class="text-subtitle-1 font-weight-light">
                                {{post.content}}
                            </p>
                            <span class="font-italic grey--text">Created: {{post.date | moment("dddd, MMMM Do YYYY")  }}</span>
                            <v-btn text class="mt-2">Leer articulo</v-btn> 
                        </div>
                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="d-flex justify-center">
            <v-btn
                :disabled="posts.length >= 6"
                color="green"
                outlined
                tile
            >
                CREA UN ARTICULO
            </v-btn>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    data(){
        return{
            posts: []
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
                        const {docs} = res.data.items
                        this.posts = docs
                    }
                )
        }
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