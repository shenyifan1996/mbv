
<template src="./systemSetting-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class systemSettingPage extends Vue{
  //注册频道表单
  systemForm:Form=new Form([
    {id:"name",validator:[]},
    {id:"status",validator:[]},
  ])
  //频道列表表格
  systemData:any=[
    {
      systemCode:'12312',
      channelName:'经销商全生命周期',
      status:'有效',
      brand:'双品牌',
    }
  ]
  /* 分页部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=this.systemData.length;
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
  //编辑
  menuSetting(row:any){
    this.$router.push({
      path:'systemSettingMenu',
      query:{
        id:row.systemCode
      },
    })
  }
}
</script>

<style scoped src="./systemSetting-page.scss" lang="scss">
</style>
