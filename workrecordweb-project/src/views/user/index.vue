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
    <a-spin
    :spinning="loading"
    >
      <a-table
          class="user-list"
          :columns="columns"
          :dataSource="userlist"
          rowKey="userID"
          >
          <template slot="action" slot-scope="text, record">
              <div class="user-item" slot="userItem">
                    <a @click="onEdit(record)" ><a-icon type="form"></a-icon>修改</a>
                    <a-popconfirm
                      v-if="userlist.length"
                      title="Sure to delete?"
                      @confirm="() => onDelete(record)"
                    >
                        <a href="javascript:;"><a-icon type="slack"></a-icon>删除</a>
                    </a-popconfirm>
                </div>
          </template>
        </a-table>
    </a-spin>
    <!--添加用户弹框 -->
    <AddUser
      :visible="visible"
      :record="record"
      :title="title"
      @handleOk="handleAddUser"
     />
  </div>
</template>
<script>
import AddUser from './components/addUser'
import { mapState } from 'vuex'
// import moment from 'moment'
const columns = [
  {
    title: 'userID',
    dataIndex: 'userID'
    // width: '10%'
    // ellipsis: 'true'
  },
  {
    title: '用户账号',
    dataIndex: 'account'
    // width: '15%'
  },
  {
    title: '用户名',
    dataIndex: 'userName'
    // width: '10%'
  },
  {
    title: '用户角色',
    dataIndex: 'roleID'
    // width: '10%'
  },
  {
    title: '部门ID',
    dataIndex: 'departmentID'
    // width: '10%'
  },
  {
    title: '创建时间',
    dataIndex: 'createdTime'
    // width: '10%'

  },
  {
    title: '用户密码',
    dataIndex: 'password',
    width: '15%'
    // ellipsis: true
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'action' }
    // width: '15%'
  }
  // {
  //   title: 'isDel',
  //   dataIndex: 'isDel'
  // },
  // {
  //   title: 'createdUserId',
  //   dataIndex: 'createdUserId'
  // },
  // {
  //   title: 'updatedUserId',
  //   dataIndex: 'updatedUserId'
  // },
  // {
  //   title: 'updatedTime',
  //   dataIndex: 'updatedTime'
  // }
]
export default {
  data () {
    return {
      // data,
      columns,
      visible: false,
      record: null,
      title: '添加用户',
      pagenation: {
        pageIndex: 1,
        pageSize: 10
      }
    }
  },
  components: {
    AddUser
  },
  mounted () {
  // 获取列表数据
    this.$store.commit('user/setLoading', true)
    this.$store.dispatch('user/getUserList', this.pagenation).then(() => {
      this.$store.commit('user/setLoading', false)
    })
  },
  methods: {
    toogleAddModal (record) {
      const { userID } = record;
      this.visible = !this.visible;
      if (userID) {
        this.record = record;
        this.title = '修改用户'
      }
      if (!userID) {
        this.record = null;
        this.title = '添加用户'
      }
    },
    handleAddUser (params) {
      this.visible = !this.visible;
    },
    onEdit (record) {
      this.toogleAddModal(record)
    },
    onDelete (record) {
      const { userID } = record;
      const params = {};
      params.id = userID;
      this.$store.dispatch('user/delete', params)
    }
  },
  computed: {
    ...mapState({
      userlist: state => state.user.userlist,
      loading: state => state.user.load
    })
  }
}
</script>

<style lang="less">
.user-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a{
      margin:0 5px;
    }
}
.ant-table-tbody > tr > td{
  padding:10px !important;
}
</style>
