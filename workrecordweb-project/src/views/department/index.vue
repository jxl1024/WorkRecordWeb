<template>
<div class="page-department">
    <div class="public-page-title">部门管理</div>
    <div class="public-search-add">
      <div class="public-search">
        <a-input
         placeholder="请输入部门名称"
          />
        <a-button type="primary">查询</a-button>
      </div>
      <a-button type="default" @click="toogleAddModal">添加部门</a-button>
    </div>
    <a-table
    :columns="columns"
    :dataSource="data"
    >
    </a-table>
</div>
</template>

<script>
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
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}
export default {
  data () {
    return {
      data,
      columns
    }
  }
}
</script>

<style lang="less">

</style>
