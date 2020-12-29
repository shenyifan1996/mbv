
<template src="./systemSetting-menu-btn-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class systemSettingMenuBtnPage extends Vue{
  //按钮维护表单
  menuBtnForm:Form=new Form([
    {id:"code",validator:[]},
    {id:"name",validator:[]},
  ])
  //按钮维护表格数据
  menuBtnData:any=[
    {
      btnCode:'btn_add_dmp',
      btnName:'新增',
      status:'有效'
    }
  ]
  /* 分页部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=this.menuBtnData.length;
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
  BtnEdit(row:any){
    this.$router.push({
      path:'systemSettingMenuBtnEdit',
      query:{
        id:row.btnCode
      },
    })
  }
}
</script>

<style scoped src="./systemSetting-menu-btn-page.scss" lang="scss">
</style>
