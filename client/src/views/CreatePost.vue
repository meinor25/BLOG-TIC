
<template>
    <div class="create-post">
      <Navbar color="white" textColor="black--text" btnColor="black"/>
      <Form/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Form from '../components/create-post/Form'

export default {
  components: { Navbar, Form },
}
</script>

<style>

</style>
