<template>
  <!-- <div class="home">content</div> -->
    <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
       <div class="pub-aside-title">
      <span class="logo-icon">
        <a-icon theme="twoTone" type="edit"></a-icon>
      </span>
      {{!collapsed?'Work record':""}}
    </div>
      <a-menu
      :defaultSelectedKeys="['/Home']"
      mode="inline"
      theme="dark"
      v-bind:inlineCollapsed="collapsed"
    >
  <template v-for="item in router">
    <template v-if="item.meta.keepAlive">
        <a-menu-item v-if="!item.children"  :key="item.path">
              <router-link :to="item.path" class="clear-a-style">
                  <a-icon :type="item.type" />
                  <span>{{item.name}}</span>
              </router-link>
          </a-menu-item>
          <a-sub-menu  v-else :key="item.path">
              <span slot="title">
              <router-link :to="item.path" class="clear-a-style">
                <a-icon :type="item.type" />
                <span>{{item.name}}</span>
               </router-link>
              </span>

            <template v-for="i in item.children">
              <a-menu-item  :key="i.path">
                <router-link :to="i.path" class="clear-a-style">
                  <span>{{item.name}}</span>
                </router-link>
              </a-menu-item>
            </template>
        </a-sub-menu>
    </template>
  </template>
    </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="layout-header">

   <a-row type="flex" justify="space-between">
     <a-col><a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        /></a-col>
     <a-col class="page-title">{{route}}</a-col>
     <a-col >
    <a-dropdown :style="{paddingRight:'30px'}">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()"><span class="user">admin</span><a-avatar style="backgroundColor:#87d068" icon="user"/></a>
      <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;">退出登录</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
    </a-col>
   </a-row>
  </div>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
        <a-layout-footer><Footer /></a-layout-footer>

    </a-layout>
  </a-layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import router from '../../router/router'
// import Header from '../layout/header/index.vue'
import Footer from '../layout/footer/index'
export default {
  name: 'Home',
  components: {
    // Header,
    Footer
  },
  data () {
    return {
      collapsed: false,
      router: router
    };
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
