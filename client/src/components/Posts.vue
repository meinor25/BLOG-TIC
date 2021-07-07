<template>
    <div class="posts pt-15" data-aos="flip-right" id="posts">
        <h3 class="text-center text-xl-h2 text-md-h3 font-weight-light"> <span class="green--text delete-bar">/</span>ARTICULOS</h3>
    </div>
</template>

<script>
export default {
    name: 'Posts'
}
</script>

<style>
    .posts{
        height: 100vh;
    }
    .delete-bar{
        animation: blink 0.7s  infinite;
    }
    @keyframes blink {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
</style>