<template>
  <div>
    <a-modal
    :title="getTitle"
    :visible="visible"
    okText="确定"
    cancelText="取消"
    :maskClosable="false"
    :closeable="false"
    @ok="handleSubmit"
    @cancel="cancel"
    :destroyOnClose="true"
    >
        <div class="depart-item">
          <label class="ant-form-item-required">departmentID</label>
          <a-input
            v-model="params.departmentID"
           />
        </div>
        <div class="depart-item">
        <label class="ant-form-item-required">departmentCode</label>
        <a-input
            v-model="params.departmentCode"
          />
      </div>
      <div class="depart-item">
          <label class="ant-form-item-required">部门名称</label>
          <a-input
            v-model="params.departmentName"
           />
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: ['visible', 'item', 'title'],
  data () {
    return {
      params: {
        departmentCode: '',
        departmentID: '',
        departmentName: ''
      }
    }
  },
  computed: {
    getTitle () {
      if (this.title === 1) {
        return '添加部门'
      } else {
        return '修改部门'
      }
    }
  },
  beforeUpdate () {
    this.params = this.item;
  },
  methods: {
    cancel () {
      this.$emit('cancel');
    },
    error (obj) {
      for (const key in obj) {
        if (!obj[key]) {
          this.$message.error('请输入完整信息');
          return;
        };
      }
    },
    handleSubmit () {
      const param = this.params;
      const action = this.title
      // 用于判断是添加还是修改触发不同的action
      for (const key in param) {
        if (!param[key]) {
          this.$message.error('请输入完整信息');
          return;
        };
      }
      if (action === 1) {
        this.$store.dispatch('department/add', param)
      } else {
        this.$store.dispatch('department/put', param)
      }
      this.cancel();
    }

  }
}
</script>
<style lang="less">
.depart-item{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin:15px 0px;
  label{
    width:200px;
    text-align:right;
    padding-right:10px;
    box-sizing:border-box;
  }
}
</style>
