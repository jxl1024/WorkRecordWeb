<template>
  <div class="page-user">
    <div class="user-title">用户管理</div>
    <div class="add-user">
      <div class="user-search">
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
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    scopedSlots: { customRender: 'age' }
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    scopedSlots: { customRender: 'address' }
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
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
.ant-table-body{
  background:#fff;
}
.ant-pagination{
  margin-right:10px;
}
.user-title{
    text-align: left;
    border-left: 5px solid #1890ff;
    padding-left: 10px;
    font-size: 14px;
}
.add-user{
  margin:20px 0px;
  display:flex;
  justify-content:space-between;
  .user-search{
    display:flex;
    .ant-input{
      margin-right:15px;
    }
  }
}
</style>
