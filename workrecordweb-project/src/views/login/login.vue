<template>
<div class="login-page-wrapper">
  <div class="login-page-form">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit">
      <a-form-item>
        <a-input
         size="large"
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: '请输入用户名!' }] },
          ]"
          placeholder="用户名"
        >
      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
       size="large"
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] },
        ]"
        type="password"
        placeholder="密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <!-- <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        记住我
      </a-checkbox> -->
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
        size="large"
        >登录</a-button>
    </a-form-item>
  </a-form>
    </div>
</div>
</template>

<script>
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  }
};
</script>
<style lang="less">
.login-page-wrapper{
  height:100vh;
  background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-position:center 110px;
  background-repeat:no-repeat;
  border:1px solid transparent;
  background-color: #f0f2f5;
  .login-page-form{
   width:350px;
    margin:0 auto;
   margin-top:250px;
    .ant-input{
      background-color:#fff;
      border:none;
    }
    .login-form-button{
      width:100%;
    }
  }
}
</style>
