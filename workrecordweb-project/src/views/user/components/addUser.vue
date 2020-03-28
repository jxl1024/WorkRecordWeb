<template>
 <div>
  <a-modal
    title="添加用户"
    :visible="visible"
    :centered="true"
    :maskClosable="false"
    :closeable="false"
    @ok="handleOk"
    @cancel="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
  </a-modal>
 </div>
</template>

<script>
export default {
  props: ['visible'],
  data () {
    return {
      name: 'test'
    }
  },
  methods: {
    handleOk () {
      this.$emit('handleOk', this.name)
    }
  }
}
</script>
<style lang="less">
</style>
