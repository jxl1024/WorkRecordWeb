<template>
  <div id="app">
   <Layout v-if="$route.meta.keepAlive" />
    <!-- 登录页面 -->
    <router-view v-else ></router-view>
  </div>
</template>
<script>
import Layout from './components/layout'
export default {
  components: { Layout },
  data () {
    return {
      route: this.$route
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  background:rgb(240,242,245)
}
ul,li{
  padding-left:0px !important;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
