<template>
    <div class="posts pt-15" data-aos="flip-right" id="posts">
        <h3 class="text-center text-xl-h2 text-md-h3 font-weight-light"> 
            <span class="green--text delete-bar">/</span>
            ARTICULOS
        </h3>
        <!-- IF THERE ARE NOT ARTICLES -->
        <h2 v-if="posts.length == 0" class="text-h2 pt-15 text-center">
            No hay articulos en este momento 
            <v-icon 
                class="no-articles"
                x-large
                color="red"
            >   
                mdi-emoticon-sad-outline
            </v-icon>
        </h2>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    data(){
        return{
            posts: []
        }
    }
}
</script>

<style>
    .posts{
        height: 100vh;
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