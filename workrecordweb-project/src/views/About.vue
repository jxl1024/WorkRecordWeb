<template>
<div v-if="isShow">{{son2Message}}</div>
</template>
<script>
export default {
  data () {
    return {
      isShow: '',
      son2Message: ''
    }
  },
  created () {
    this.$bus.$on('t', res => {
      this.isShow = res.isShow
      this.son2Message = res.info
    })
  }
}
</script>
