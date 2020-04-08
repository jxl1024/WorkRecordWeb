<template>
<a-spin
  size="large"
  :spinning="load"
>
<div class="page-department">
    <div class="public-page-title">部门管理</div>
    <div class="public-search-add">
      <div class="public-search">
        <a-input
         placeholder="请输入部门名称"
          />
        <a-button type="primary">查询</a-button>
      </div>
      <a-button
        type="default"
        @click="addDepart"
      >添加部门</a-button>
    </div>
    <a-table
    :columns="columns"
    :dataSource="list"
     rowKey="departmentID"
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
  <Department
    :visible="visible"
    :item="item"
    :title="title"
    @cancel="toogleVisible"
  />
</a-spin>
</template>

<script>
import { mapState } from 'vuex'
import Department from './components/Department'
const columns = [
  {
    title: 'departmentID',
    dataIndex: 'departmentID'
  },
  {
    title: 'departmentCode',
    dataIndex: 'departmentCode'
  },
  {
    title: '部门名称',
    dataIndex: 'departmentName'
  },
  {
    title: '操作',
    dataIndex: '操作',
    scopedSlots: { customRender: 'action' }
  }
];

export default {
  data () {
    return {
      columns,
      visible: false,
      title: 1,
      item: {
        departmentCode: '',
        departmentID: '',
        departmentName: ''
      },
      pagenation: {
        pageIndex: 1,
        pageSize: 10
      }
    }
  },
  components: {
    Department
  },
  mounted () {
    //  触发action
    this.$store.commit('department/load', true);
    this.$store.dispatch('department/list', this.pagenation).then(() => {
      this.$store.commit('department/load', false);
    })
  },
  computed: {
    ...mapState({
      load: state => state.department.load,
      list: state => state.department.list
    })
  },
  methods: {
    toogleVisible () {
      this.visible = !this.visible;
      this.item = {
        departmentCode: '',
        departmentID: '',
        departmentName: ''
      };
    },
    addDepart () {
      this.title = 1;
      this.toogleVisible();
    },
    onEdit (record) {
      this.title = 2;
      this.toogleVisible();
      const recode = Object.assign({}, record)
      this.item = recode;
    }
  }

}
</script>

<style lang="less">
.department-action{
  margin-right:10px;
}
</style>
