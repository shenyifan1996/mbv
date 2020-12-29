
<template src="./roleManagement-role-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class roleManagementRolePage extends Vue{
//人员角色授权表单
  roleManRoleForm:Form=new Form([
    {id:"roleCode",validator:[]},
    {id:"roleName",validator:[]},
  ])
  //频道列表表格
  roleManagementRoleData:any=[
    {
      number:'12312',
      name:'经销商全生命周期',
    }
  ]
  /* 分页部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=this.roleManagementRoleData.length;
  roleManagementSelection:any=[]
  //methods
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
    this.roleManagementSelection = val;
    console.log(this.roleManagementSelection)
  }
}
</script>

<style scoped src="./roleManagement-role-page.scss" lang="scss">
</style>
