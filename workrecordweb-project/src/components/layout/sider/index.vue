<template>
<a-layout-sider :trigger="null"  collapsible v-model="collapsed">
       <div class="pub-aside-title">
      <span class="logo-icon">
        <a-icon theme="twoTone" type="edit"></a-icon>
      </span>
      {{!collapsed?'Work record':""}}
    </div>
    <a-menu
      :defaultSelectedKeys="route"
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
</template>

<script>
export default {
  name: 'Sider',
  props: ['collapsed', 'router', 'route']
  // components: { SidebarItem },
  // data () {
  // },
  // methods: {
  // }
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
</style>
