<template>
    <a-menu
      :defaultSelectedKeys="['/Home']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
  <template v-for="item in router">
    <template v-if="item.meta.keepAlive">
        <a-menu-item v-if="!item.children"  :key="item.path">
                  <a-icon :type="item.type" />
                  <span><router-link :to="item.path" class="clear-a-style">{{item.name}}</router-link></span>
            </a-menu-item>
            <a-sub-menu  v-else :key="item.path">
                <span slot="title"><a-icon :type="item.type" />
                  <span><router-link :to="item.path" class="clear-a-style">{{item.name}}</router-link></span>
                </span>
              <template v-for="i in item.children">
                <a-menu-item  :key="i.path">
                <span><router-link :to="i.path" class="clear-a-style">{{item.name}}</router-link></span>
                </a-menu-item>
              </template>
          </a-sub-menu>
    </template>
  </template>
    </a-menu>
</template>

<script>
import router from '../../../router/router';
// import SidebarItem from './siderbar.vue'
export default {
  name: 'Sider',
  // components: { SidebarItem },
  data () {
    return {
      router: router
    }
  }
}
</script>

<style lang="less">
.clear-a-style{
    color:#fff !important;
    text-decoration:none !important;
}
</style>
