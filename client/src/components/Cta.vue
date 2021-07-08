<template>
    <div class="Cta" :style="{ backgroundImage: 'url(' + require('@/assets/bg.jpg') + ')' }">
         <!-- CTA ROW -->
        <v-row 
            class="d-flex cta-row align-center ma-0" 
            :class="this.$vuetify.breakpoint.mdAndUp ? 'padding' : 'justify-center '"
        >
            <v-col 
                data-aos="fade-up"
                data-aos-duration="1000"
                cols="12" 
                md="6"
            >
                <h1 
                    data-aos-delay="100"
                    class="text-h4  text-sm-h2 text-xl-h1 white--text font-weight-medium" 
                    :class="$vuetify.breakpoint.smAndDown ?'text-center px-5' : ''" 
                    id="cta-title"
                >
                    <span class="green--text">Ecosistemas</span> de empresas digitales
                </h1>
                <div class="d-flex" :class="$vuetify.breakpoint.smAndDown ? ' justify-center' : 'px-5' ">
                    <v-btn 
                        data-aos-delay="150"
                        class="mt-7 text-center"
                        outlined
                        :x-large="this.$vuetify.breakpoint.mdAndUp"
                        color="white"
                        @click='$vuetify.goTo("#about")'
                    >
                        Conoce más  
                    </v-btn>
                </div>
            </v-col>
            <v-col 
                v-if="this.$vuetify.breakpoint.mdAndUp"
                cols="12" 
                md="6"
            >
                <!-- BLANK COL -->
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Cta'
}
</script>

<style scoped lang="scss">
    .Cta{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        #cta-title{
            text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.507);
        }
        .cta-row{
            background-color: rgba(0, 0, 0, 0.164);
            height: 100vh;
        }
        .padding{
            padding: 0 10rem;
        }
    }
</style>