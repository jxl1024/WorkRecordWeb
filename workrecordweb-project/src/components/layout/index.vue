<template>
  <!-- <div class="home">content</div> -->
    <a-layout id="components-layout-demo-custom-trigger">
     <!-- 侧边栏 -->
     <Sider
     :router="router"
     :collapsed="collapsed"
     :route="route"
      />
    <a-layout>
    <a-layout-header style="background: #fff; padding: 0">
      <!-- 公共头部 -->
      <Header
        :collapsed="collapsed"
        @toogle-collapsed="collapsed=!collapsed"
      />
    </a-layout-header>
      <a-layout-content
        :style="{ margin: '10px 16px', padding: '24px'}"
      >
      <!-- 页面 -->
        <router-view />
      </a-layout-content>
      <!-- 公共footer -->
        <a-layout-footer><Footer /></a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import router from '../../router/router'
import Sider from './sider/index'
import Footer from './footer/index'
import Header from './header/index'
export default {
  name: 'Home',
  components: {
    Sider,
    Footer,
    Header
  },
  data () {
    return {
      collapsed: false,
      router: router,
      route: this.$route.path
    };
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
    }
  }
}
</script>
<style scoped>
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
.ant-layout{
    min-height:100vh;
    }
/* logo */
.clear-a-style{
    color:#fff !important;
    text-decoration:none !important;
}

ul,li{
  padding-left:0px !important;
}
.pub-aside-title{
      font-size: 24px;
     color: #fff;
    padding: 10px;
}
.logo-icon{
  margin-right:10px;
}
  .layout-header{
    text-align:left;
  }
  .user{
    margin-right:10px;
  }
  .page-title{
    color:#000
  }
</style>
