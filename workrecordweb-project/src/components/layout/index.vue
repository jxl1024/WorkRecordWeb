<template>
<a-layout>
  <a-layout-sider>Sider</a-layout-sider>
  <a-layout>
    <a-layout-header><Header /></a-layout-header>
    <a-layout-content><router-view /></a-layout-content>
    <a-layout-footer><Footer /></a-layout-footer>
    </a-layout>
</a-layout>

</template>

<script>
import Header from './header/index.vue'
import Footer from './footer'
export default {
  name: 'Layout',
  components: { Header, Footer }
}
</script>

<style lang="less">
.ant-layout-header{
  background:#fff !important;
}
.ant-layout-has-sider{
min-height:100vh !important;
}
</style>
