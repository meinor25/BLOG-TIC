<template>
   <div class="Home">
      <Cta/>
      <About/>
      <Posts />
   </div>
</template>

<script>
  import Cta from '../components/Cta'
  import Posts from '../components/Posts'
  import About from '../components/About'

  export default {
    name: 'Home',
    components: {Cta, Posts, About},
  }
</script>
