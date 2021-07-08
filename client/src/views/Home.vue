<template>
   <div class="Home">
      <Cta/>
      <About/>
      <Posts />
      <Footer />
   </div>
</template>

<script>
  import Cta from '../components/Cta'
  import Posts from '../components/Posts'
  import About from '../components/About'
  import Footer from '../components/Footer'

  export default {
    name: 'Home',
    components: {Cta, Posts, About, Footer},
  }
</script>
