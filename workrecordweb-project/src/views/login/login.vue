<template>
<div class="login-page-wrapper">
  <div class="login-page-form">
    <h2 class="login-form-title">欢迎登录</h2>
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
  // beforeCreate () {
  //    this.form = this.$form.createForm(this, { name: 'normal_login' });
  //   console.log('beforeCreate', this.$el)
  //   console.log('beforeCreate', this.$data)
  //   console.log('beforeCreate', this.message)
  // },
  // created () {
  //   console.log('created', this.$el)
  //   console.log('created', this.$data)
  //   console.log('created', this.message)
  // },
  // beforeMount () {
  //   console.log('beforeMount', this.$el);
  //   console.log('beforeMount', this.$data)
  //   console.log('beforeMount', this.message)
  // },
  // mounted () {
  //   console.log('mounted', this.$el)
  //   console.log('mounted', this.$data)
  //   console.log('mounted', this.message)
  // },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.$router.push({ path: '/Home' })
        }
      });
    }
  }
};
</script>
<style lang="less">
.login-page-wrapper{
  height:100vh;
  background-image:url("../../assets/img/bg1.jpg");
  background-position:center;
  background-repeat:no-repeat;
  border:1px solid transparent;
  background-color: #f0f2f5;
  background-size:100% 100%;
  .login-page-form{
    width:350px;
    margin:0 auto;
    margin-top:250px;
    background: rgba(124,181,201,0.5);
    padding: 20px 20px;
    border-radius:4px;
    .login-form-title{
       color: #fff;
       margin-bottom: 15px;
    }
    .login-form-button{
      width:100%;
    }
  }
}
</style>
