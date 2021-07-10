<template>
   <div class="posts">
       <Navbar/>
       <v-container 
            class="post-padding"
            :class="$vuetify.breakpoint.mdAndUp ? 'post-container' : 'px-10'"
       >
           <v-img 
                :src="posts.img"
                height="35rem"
           />
           <span class="text-h6 font-italic">Created at: {{posts.date | moment("dddd, MMMM Do YYYY")  }}</span>
           <h2 
                class="text-h5 text-md-h2 font-weight-medium mt-5 mb-5"
            >
                {{posts.title}}
            </h2>
            <div class="line"></div>

            <div class="content" v-html="posts.content">

            </div>

       </v-container>
   </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    export default {
        components: {Navbar},
        data(){
            return{
                posts: []
            }
        },
        created(){
            this.getPostData()
        },
        methods :{
            getPostData(){
                this.axios.get(`blog/${this.$route.params.id}`)
                    .then(
                        (res)=>{
                            console.log(res.data.data)
                            this.posts = res.data.data
                        }
                    )
                    .catch(
                        (err) => {console.log(err)}
                    )
            }
        }
    }

</script>

<style>
    .post-container{
        width: 50%;
        margin: 0 auto;
    }
    .post-padding{
        padding-top:10rem ;
    }
    .line{
        border-bottom: 1px solid black;
    }
    .content{
        padding-top: 2rem;
    }
</style>