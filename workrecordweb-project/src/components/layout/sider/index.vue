<template>
<div>
   <!-- logo -->
   <div class="pub-aside-title">
      <span class="logo-icon">
        <a-icon theme="twoTone" type="edit"></a-icon>
      </span>
      Work record
    </div>
    <a-menu
      :defaultSelectedKeys="['/Home']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
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
                    <a-icon :type="item.type" />
                    <router-link :to="item.path" class="clear-a-style"><span>{{item.name}}</span></router-link>
                      <!-- <router-link :to="item.path" class="clear-a-style"></router-link> -->
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
  </div>
</template>

<script>
import router from '../../../router/router';
// import SidebarItem from './siderbar.vue'
export default {
  name: 'Sider',
  // components: { SidebarItem },
  data () {
    return {
      router: router,
      collapsed: true
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
      console.log(this.collapsed)
    }
  }
}
</script>

<style lang="less">
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
