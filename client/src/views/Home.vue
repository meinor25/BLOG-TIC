<template>
   <div class="Home">
      <Navbar color="transparent" textColor="white--text" btnColor="white"/>
      <Cta/>
      <About/>
      <Posts />
      <Footer />
   </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Cta from '../components/Cta'
  import Posts from '../components/Posts'
  import About from '../components/About'
  import Footer from '../components/Footer'

  export default {
    name: 'Home',
    components: {Cta, Posts, About, Footer, Navbar},
  }
</script>
