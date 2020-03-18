<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" test="我测试一下" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
