<template>
 <div class="layout-header">
   <a-row type="flex" justify="space-between">
     <a-col class="page-title">{{route}}</a-col>
     <a-col >
      <a-dropdown>
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
</template>

<script>
export default {
  props: ['route']
}

</script>

<style lang="less">
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
