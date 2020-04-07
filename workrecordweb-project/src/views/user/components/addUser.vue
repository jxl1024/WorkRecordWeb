<template>
 <div>
  <a-modal
    title="添加用户"
    :visible="visible"
    :maskClosable="false"
    :closeable="false"
    @ok="handleSubmit"
    @cancel="handleOk"
    :okButtonProps="okBtnSubmit"
    :destroyOnClose="true"
    >
  <a-form :form="form"  :label-col="{ span:6 }" :wrapper-col="{ span:18 }" @submit="handleSubmit">
    <a-form-item label="userID" class="add-user-item">
      <a-input
        v-decorator="['userID',
        {
          rules: [{ required: true, message: 'Please input your note!' }],
          initialValue:''
         }
        ]"
      />
    </a-form-item>
      <a-form-item label="account">
      <a-input
        v-decorator="['account', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="password">
      <a-input
        v-decorator="['password', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
      <a-form-item label="userName">
      <a-input
        v-decorator="['userName', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="roleID">
      <a-input
        v-decorator="['roleID', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
      <a-form-item label="departmentID">
      <a-input
        v-decorator="['departmentID', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="isDel">
      <a-input
        v-decorator="['isDel', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
      <a-form-item label="createdUserId">
      <a-input
        v-decorator="['createdUserId', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
        <a-form-item label="createdTime">
      <a-input
        v-decorator="['createdTime', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
      <a-form-item label="updatedUserId">
      <a-input
        v-decorator="['updatedUserId', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
      <a-form-item label="updatedTime">
      <a-input
        v-decorator="['updatedTime', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <!-- <a-form-item label="Gender">
      <a-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item> -->
    <!-- <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item> -->
  </a-form>
  </a-modal>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['visible'],
  data () {
    return {
      name: 'test',
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      okBtnSubmit: {
        htmlType: 'submit'
      }
    }
  },
  methods: {
    handleOk () {
      this.$emit('handleOk', this.name)
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          const params = values;
          this.$store.dispatch('user/addUser', params)
        }
      });
    }
  },
  computed: {
    ...mapState({
      recode: state => state.recode
    })
  }
}
</script>
<style lang="less">
.ant-form-item{
  margin-bottom:0px !important;
  margin:10px 0px !important;
}
</style>
