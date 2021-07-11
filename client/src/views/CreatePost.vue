
<template>
    <div class="create-post">
      <Navbar color="white" textColor="black--text" btnColor="black"/>
      <Form v-if="posts.length < 6"/>
      <h3 class="not-avialable text-center font-weight-light text-h5 text-md-h2" v-else>Se ha llegado al limite de creación de posts</h3>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Form from '../components/create-post/Form'

export default {
  components: { Navbar, Form },
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
    }
  }
}
</script>

<style scoped>
  .not-avialable{
    padding-top: 10rem ;
  }
</style>
