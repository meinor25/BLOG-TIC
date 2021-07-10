<template>
    <div class="form container">
        <v-form
           class=" d-flex flex-column justify-center"
           :class="$vuetify.breakpoint.mdAndUp ? 'px-15' : 'px-5'"
        >
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field
                    v-model="title"
                    width="20rem"
                    filled
                    rounded
                    label="Titulo"
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field
                    v-model="title"
                    width="20rem"
                    filled
                    rounded
                    label="Descripcion"
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
                        v-model="content"
                        id="editor"
                    >
                    </vue-editor>
                </v-container>
                 <v-btn 
                    @click="push"
                    outlined
                    rounded
                    color="green"
                >
                    post
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'Form',
  
    data(){
        return{
            //inputs
            title: '',
            description: '',
            content: '',
            //vue2editor config
            customToolbar: [
                [ {header : [false, 1, 2, 3, 4, 5, 6, ]},"bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }]
            ],
        }
    },
    methods: {
        push(){
            this.posts.push(this.post)
        }
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