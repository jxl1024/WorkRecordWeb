<template>
  <div class="page-user">
    <div class="public-page-title">用户管理</div>
    <div class="public-search-add">
      <div class="public-search">
        <a-input
         placeholder="请输入用户名"
          />
        <a-button type="primary">查询</a-button>
      </div>
      <a-button type="default" @click="toogleAddModal">添加用户</a-button>
    </div>
    <a-table class="user-list" :columns="columns" :dataSource="data"></a-table>
    <!--添加用户弹框 -->
    <AddUser
      :visible="visible"
      @handleOk="handleAddUser"
     />
  </div>
</template>

<script>
import AddUser from './components/addUser'
// const data = [{
//   "userID": "string",
//   "account": "string",
//   "password": "string",
//   "userName": "string",
//   "roleID": "string",
//   "departmentID": "string",
//   "isDel": true,
//   "createdUserId": "string",
//   "createdTime": "2020-04-02T02:26:33.742Z",
//   "updatedUserId": "string",
//   "updatedTime": "2020-04-02T02:26:33.742Z"
// }]

const columns = [
  {
    title: 'userID',
    dataIndex: 'userID'
  },
  {
    title: '用户账号',
    dataIndex: 'account'
  },
  {
    title: '用户密码',
    dataIndex: 'password'
  },
  {
    title: '用户名',
    dataIndex: 'userName'
  },
  {
    title: '用户角色',
    dataIndex: 'roleID'
  },
  {
    title: '部门ID',
    dataIndex: 'departmentID'
  },
  {
    title: 'isDel',
    dataIndex: 'isDel'
  },
  {
    title: 'createdUserId',
    dataIndex: 'createdUserId'
  },
  {
    title: 'createdTime',
    dataIndex: 'createdTime'
  },
  {
    title: 'updatedUserId',
    dataIndex: 'updatedUserId'
  },
  {
    title: 'updatedTime',
    dataIndex: 'updatedTime'
  },
  // {
  //   title: 'operation',
  //   dataIndex: 'operation',
  //   scopedSlots: { customRender: 'operation' }
  // }
]
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  })
}
export default {
  data () {
    return {
      data,
      columns,
      visible: false
    }
  },
  components: {
    AddUser
  },
  methods: {
    toogleAddModal () {
      this.visible = !this.visible
    },
    handleAddUser (msg) {
      console.log(msg);
      this.toogleAddModal()
    }
  },
  computed: {
  }
}
</script>

<style lang="less">

</style>
