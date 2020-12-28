
<template src="./systemSetting-menu-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class systemSettingEditPage extends Vue{
  //系统菜单编辑表单
  systemMenuForm:Form=new Form([
    {id:"code",validator:[]},
    {id:"name",validator:[]},
  ])
  //系统菜单清单数据
  systemMenuData:any=[
    {
      systemName:'经销商生命周期',
      menuCode:'SADASDV',
      menuName:'人员信息管理',
      fatherMenu:'人员管理',
      status:'有效',
      brand:'双品牌'
    }
  ]
  /* 分页部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=this.systemMenuData.length;
  positionSelection:any=[] //选中的数组
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
  //menuSetting
  menuSetting(row:any){
    console.log(row)
    this.$router.push({
      path:'systemSettingMenuEdit',
      query:{
        id:row.menuCode
      },
    })
  }
  butSetting(row:any){
    console.log(row)
    this.$router.push({
      path:'systemSettingMenuBtn',
      query:{
        id:row.menuCode
      },
    })
  }
}
</script>

<style scoped src="./systemSetting-menu-page.scss" lang="scss">
</style>
