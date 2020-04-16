<template>
  <div class="home">
    <Test></Test>
    <About></About>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/views/test/index'
import About from '@/views/About'
export default {
  name: 'Home',
  components: {
    Test,
    About
  },
  data () {
    return {
    };
  },
  methods: {
  }
}
</script>
<style scoped>

</style>
