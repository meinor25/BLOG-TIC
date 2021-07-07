<template>
  <div class="about" id="about">
      <v-container>
          <v-row class="ma-0 px-10 pt-15 d-flex align-center">
              <v-col cols="12" md="6" data-aos="fade-up">
                  <h3 class="green--text text-md-h3 text-h6 font-weight-light">¿Qué es un ecosistema digital?</h3>
                  <p class="text-subtitle1 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, esse illum molestiae nisi, voluptas doloremque ab quisquam dolores iure asperiores obcaecati, tenetur exercitationem temporibus beatae.</p>
              </v-col>
              <v-col cols="12" md="6" data-aos="fade-up" class="d-flex justify-center">
                <div class="img-container">
                    <v-img 
                        contain
                        center
                        id="about-img"
                        :width="this.$vuetify.breakpoint.mdAndUp ? '30rem' : '15rem'"
                        src="@/assets/About-pic.jpg"
                    />
                </div>


                  
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="scss" scoped>
    .about{
        height: 100%;
        #about-img{
            border-radius: 50%;
        }
    }
</style>

