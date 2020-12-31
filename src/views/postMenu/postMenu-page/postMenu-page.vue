
<template src="./postMenu-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class postMenuPage extends Vue{
  //岗位菜单授权管理表单
  postMenuForm:Form=new Form([
    {id:"code",validator:[]},
    {id:"name",validator:[]},
  ])
  //信息列表表格
  postMenuData:any=[
    {
      number:'12312',
      name:'RBO总经理',
      brand:'斯柯达',
    }
  ]
  /* 分页部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=this.postMenuData.length;

  //methods
  //点击选定人员
  menuPower(row:any){
    console.log(row)
    this.$router.push({
      path:'postMenuAuth',
      query:{
        info:row
      }
    })
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
}
</script>

<style scoped src="./postMenu-page.scss" lang="scss">
</style>
