<template >
      <a-sub-menu  :key="item.path">
        {{item}}
          <span slot="title"><a-icon :type="item.type" />
            <span>{{item.name}}</span>
          </span>
        <template v-for="i in item">
          <a-menu-item :key="i.path">
          <span>{{i.name}}</span>
          </a-menu-item>
        </template>
    </a-sub-menu>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: ['item']
}
</script>

<style lang="less">
</style>
