
<template src="./roleManagement-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class roleManagementPage extends Vue{
  //角色管理表单
  roleManForm:Form=new Form([
    {id:"code",validator:[]},
    {id:"name",validator:[]},
    {id:"status",validator:[]},
  ])

  //信息列表表格
  roleManData:any=[
    {
      roleManCode:'12312',
      roleManName:'经销商全生命周期',
      systemName:'有阿斯顿撒旦效',
      brand:'双品牌',
      status:'有效',
    }
  ]
  /* 分页部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=this.roleManData.length;
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
  // 菜单授权
  menuAuthorization(row:any){
    this.$router.push({
      path:'roleManagementMenu',
      query:{
        id:row.roleManCode
      },
    })
  }
  //角色授权
  roleAuthorization(row:any){
    this.$router.push({
      path:'roleManagementRole',
      query:{
        id:row.roleManCode
      },
    })
  }
}
</script>

<style scoped src="./roleManagement-page.scss" lang="scss">
</style>
