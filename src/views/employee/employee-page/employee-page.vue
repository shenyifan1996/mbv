
<template src="./employee-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form, rangeLengthValidator, requiredValidator} from "@ztwx/form";
import sampleData from "./employee-page";

@Component({})
export default class employeePage extends Vue{
  //组织树
  data:any= [
    {
      label: '上汽大众',
      children: [{
        label: 'VW营销事业部',
        children: []
      },{
        label: '斯柯达营销事业部',
        children: [{
          label: 'CIM'
        },{
          label: 'SD'
        }]
      }]
    }
  ]
  //组织树配置
  defaultProps:any = {
    children: 'children',
    label: 'label'
  }
  //员工查看表单
  empForm:Form=new Form([
    {id:"employeeName",validator:[]},
    {id:"employeeNumber",validator:[]},
    {id:"employeeSex",validator:[]},
    {id:"employeePhone",validator:[]},
    {id:"employeeEmail",validator:[]},
    {id:"employeeTel",validator:[]},
    {id:"employeePost",validator:[]},
    {id:"status",validator:[]},
    {id:"isSearch",validator:[]},
  ])

  /* 分页部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=sampleData.length;
  positionSelection:any=[] //选中的数组
  //计算属性
  get employeeData() {
    return sampleData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
  }
  //methods
  //点击树状图节点做的事
  handleNodeClick(data:any) {
    console.log(data);
  }
  //当前页码改变
  handleSizeChange(val:any) {
    // console.log(`每页 ${val} 条`);
    this.pageSize=val
  }
  //当前页改变
  handleCurrentChange(val:any) {
    // console.log(`当前页: ${val}`);
    this.currentPage=val
  }
  //选中数组
  handleSelectionChange(val:any) {
    this.positionSelection = val;
    console.log(this.positionSelection)
  }
  //跳转到编辑员工的界面
  changeInfo(row:any){
    // console.log(row)
    this.$router.push({
      path: 'employeeEdit',
      query: {
        id: row.employeeNumber
      }
    })
  }
}
</script>

<style scoped src="./employee-page.scss" lang="scss">
</style>
