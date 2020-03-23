<template>
    <a-sub-menu v-if="item.children.length>0" :key="item.path">
      {{item}}
          <!-- <span slot="title"><a-icon :type="item.type" />
            <span>{{item.name}}</span>
          </span>
          <SidebarItem v-for="child in item.children" :key="child.path" :item="child" /> -->
    </a-sub-menu>

    <a-menu-item  v-else :key="item.path">
      {{item}}
      <!-- <a-icon :type="item.type" />
      <span>{{item.name}}</span> -->
    </a-menu-item>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: ['item']
}
</script>

<style lang="less">
</style>
