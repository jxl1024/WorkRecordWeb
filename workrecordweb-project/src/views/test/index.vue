<template>
  <div @click="clickSon">子组件一号，点我传值</div>
</template>
<script>
export default {
  data () {
    return {
      son1Message: {
        isShow: false,
        info: '我是test'
      }
    }
  },
  created () {
  },
  methods: {
    clickSon () {
      this.son1Message.isShow = !this.son1Message.isShow;
      this.$bus.$emit('t', this.son1Message);
    }
  }
}
</script>
<style lange="less">

</style>
