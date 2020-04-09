<template>
<div class="page-role">
  <div class="public-page-title">角色管理</div>
    <div class="public-search-add add-role">
      <!-- <div class="public-search">
        <a-input
         placeholder="请输入角色名称"
          />
        <a-button type="primary">查询</a-button>
      </div> -->
      <a-button
        type="default"
        @click="addRole"
      >添加角色</a-button>
    </div>
    <a-table
      :columns="columns"
      :dataSource="list"
    >
    <template slot="action" slot-scope="text, record">
      <a @click="onEdit(record)" class="department-action"><a-icon type="form"></a-icon>修改</a>
          <a-popconfirm
            v-if="list.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record)"
            >
                <a href="javascript:;"><a-icon type="slack"></a-icon>删除</a>
          </a-popconfirm>
    </template>
    </a-table>
</div>
</template>

<script>
const columns = [
  {
    title: 'roleID',
    dataIndex: 'roleID'
  },
  {
    title: 'roleCode',
    dataIndex: 'roleCode'
  },
  {
    title: 'roleName',
    dataIndex: 'roleName'
  },
  {
    title: 'isDel',
    dataIndex: 'isDel'
  },
  {
    title: '操作',
    dataIndex: '操作',
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  data () {
    return {
      list: [],
      columns: columns
    }
  },
  methods: {
    addRole () {
      console.log('121')
    },
    onEdit (item) {
      console.log(item)
    },
    onDelete (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less">
.add-role{
  display:flex;
  justify-content:flex-end;
}
</style>
