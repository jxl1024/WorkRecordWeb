<template>
<a-layout id="components-layout-demo-custom-trigger">
  <a-layout-sider :trigger="null"><Sider /></a-layout-sider>
  <a-layout>
    <a-layout-header><Header :route="route" /></a-layout-header>
    <a-layout-content><router-view /></a-layout-content>
    <a-layout-footer><Footer /></a-layout-footer>
    </a-layout>
</a-layout>

</template>

<script>
import Header from './header/index.vue'
import Footer from './footer'
import Sider from './sider/index.vue'
export default {
  name: 'Layout',
  props: ['route'],
  components: { Header, Footer, Sider }
}
</script>

<style lang="less">
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
.ant-layout-header{
  background:#fff !important;
}
.ant-layout-has-sider{
min-height:100vh !important;
}
</style>
