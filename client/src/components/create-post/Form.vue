<template>
    <div class="form container">
        <v-form
            ref="form"
            v-model="valid"
           class=" d-flex flex-column justify-center"
           :class="$vuetify.breakpoint.mdAndUp ? 'px-15' : 'px-5'"
            @submit.prevent="publishPost(posts)"
        >   
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field
                    v-model="posts.title"
                    width="20rem"
                    outlined
                    rounded
                    label="Titulo"
                    required
                    :rules="[v => v.length > 0 || 'Campo obligatorio']"
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field
                    v-model="posts.descripcion"
                    
                    rounded
                    outlined
                    label="Descripcion"
                    requiered
                    :rules="[v => v.length > 0 || 'Campo obligatorio']"
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" md ="6">
                <v-text-field
                    v-model="posts.img"
                    width="20rem"
                    
                    outlined
                    rounded
                    label="URL de la imagen"
                    requiered
                    :rules="[v => v.length > 0 || 'Campo obligatorio']"

                >
                </v-text-field>
            </v-col>
            <v-col cols="12" md ="6">
                <v-text-field
                    v-model="posts.user"
                    width="20rem"
                    
                    outlined
                    rounded
                    label="Autor del Post"
                    requiered
                    :rules="[v => v.length > 0 || 'Campo obligatorio']"
                >
                </v-text-field>
            </v-col>
            
        
        </v-row>
            <h3 
                class="pl-10"
            >
                Contenido
            </h3>
            <div 
                class="Content d-flex flex-column align-center"
            >
                <!-- TEXT-AREA -->
                <v-container>
                    <vue-editor 
                        class="editor" 
                        :editor-toolbar="customToolbar" 
                        v-model="posts.content"
                        id="editor"
                        requiered
                    >
                    </vue-editor>
                </v-container>
                 <v-btn 
                    outlined
                    rounded
                    color="green"
                    type="submit"
                    :disabled="!valid"
                >
                    post
                </v-btn>
                <p class="text-center text-h6 font-italic mt-5 ">El titulo es unico, si ya existe un articulo con el titulo escogido, no se publicara el articulo</p>
                <p class="text-center text-h6 font-italic ">El contenido es requerido, si no existe contenido, no se publicara el articulo</p>
            </div>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'Form',
  
    data(){
        return{
            //Form
            valid: false,
            error: false,
            errorText: '',
            //vue2editor config
            customToolbar: [
                [ {header : [false, 1, 2, 3, 4, 5, 6, ]},"bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ 'font': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['video'],
                [{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}]
            ],
            posts: {
                title: '', 
                descripcion: '',
                content: '',
                img: '',
                user: '',

            }
        }
    },
    methods: {
        publishPost(post){
            this.axios.post('blog', post)
                .then(res =>{
                    console.log(res.data)
                    if(this.error == false){
                        this.$router.push('/')
                    }

                })
        },
    }
}
</script>

<style>
    .form{
        padding-top: 10rem;
    }
    #editor{
        height: 20rem;
    }
</style>