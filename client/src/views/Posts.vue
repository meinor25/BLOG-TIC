<template>
   <div class="posts">
       <Navbar/>
       <v-container 
            class="post-padding"
            :class="$vuetify.breakpoint.mdAndUp ? 'post-container' : 'px-10'"
       >
           <v-img 
                :src="posts.img"
                :height="$vuetify.breakpoint.smAndUp ? '35rem': '15rem'"
                class="mb-5"
                
           />
           <span class="text-subtitle1 font-italic">Fecha de publicacion: {{posts.date | moment("dddd, MMMM Do YYYY")  }}</span>
           <p class="text-subtitle1 font-italic ">Autor: {{posts.user}}</p>

           <h2 
                class="text-h5 text-md-h2 font-weight-medium mt-5 mb-5"
            >
                {{posts.title}}
            </h2>
            <div class="line"></div>

            <div class="content" v-html="posts.content">

            </div>
            <div class="line pt-15"></div>

            <!-- COMENTARIOS -->
            <h3 class="font-weight-light pt-15">Escribe un comentario</h3>
            <v-container>
                <h3 class="text-center gray--text" v-if="comments.length == 0">Los comentarios apareceran aqui</h3>
                <v-card v-for="comment in comments" :key="comment._id" data-aos="" v-else class="mb-5 pa-5 font-weight-light">
                    <v-row>
                        <v-col cols="10">
                            <h3 class="text-subtitle-1 text-md-h6">{{comment.user}}</h3>
                            <p>{{comment.message}}</p>
                            <p class="text-caption grey--text">{{comment.date | moment("dddd, MMMM Do YYYY")  }}</p>
                        </v-col>
                        <v-col cols="2">
                            <div class="d-flex justify-end">
                                <v-btn
                                    icon
                                    color="red"
                                    :small="$vuetify.breakpoint.xs"
                                    @click="deleteComment(comment._id)"
                                >
                                    <v-icon>
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </div>
 
                        </v-col>
                    </v-row>
                    
                    
                </v-card>
            </v-container>
            <div class="comments "></div>
            <v-form
                @submit.prevent="postComment(comment)"
                v-model="valid"
                class="mt-5"
            >
                <v-text-field
                    label="Nombre"
                    :rules ="Rules"
                    v-model="comment.user"
                    required
                    outlined
                >
                </v-text-field>
                <v-textarea
                    label="Mensaje"
                    :rules ="textareaRules"
                    v-model="comment.message"
                    no-resize
                    outlined
                >

                </v-textarea>
                <div class="d-flex justify-center">
                    <v-btn
                        rounded
                        type="submit"
                        :disabled="!valid"
                        :counter="150"
                        outlined
                        color="green"
                        class="mt-5"
                        v-if="comments.length <= 4"
                    >
                        Publicar
                    </v-btn>
                    <h3 v-else class="text-center">Solo se permiten 4 comentarios por publicacion </h3>
                </div>
            </v-form>

       </v-container>
   </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    export default {
        components: {Navbar},
        data(){
            return{
                posts: [],
                comments: [],
                Rules : [ v => (v && v.length > 0)|| 'Campo obligatorio', v=> (v && v.length <= 20) || "El nombre no puede tener más de 20 caracteres"],
                textareaRules : [ 
                    v=> (v && v.length > 0) || 'Campo obligatorio' ,
                    v=> (v && v.length <= 150) || 'Maximo 150 caracteres'
                ],
                valid: false,
                comment: {
                    user: '',
                    message: '',
                    date: ''
                }
            }
        },
        created(){
            this.getPostData()
            this.getPostComments()
        },
        methods :{
            getPostData(){
                this.axios.get(`blog/${this.$route.params.id}`)
                    .then(
                        (res)=>{

                            this.posts = res.data.data
                        }
                    )
                    .catch(
                        (err) => {console.log(err)}
                    )
            },
            getPostComments(){
                this.axios.get(`blog/${this.$route.params.id}/comments`)
                .then(
                    (res)=>{
                        console.log(res.data.docs)
                        this.comments = res.data.docs
                    }
                )
            },
            postComment(item){
                this.axios.post(`blog/${this.$route.params.id}/comments`, item)
                .then(
                    (res)=>{
                        this.comments.unshift(res.data.docs)
                        
                    }
                )
                
                
            },
            deleteComment(id){
                this.axios.delete(`blog/comment/${id}`)
                .then(
                    (res)=>{
                        let index = comment => comment._id === res.data.docs._id
                        this.comments.splice(index, 1)
                    }
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