
<template src="./position-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form, rangeLengthValidator, requiredValidator} from "@ztwx/form";
import sampleData from "./train-check-page";

@Component({})
export default class positionPage extends Vue{
  //岗位表单
  positionForm:Form=new Form([
    {id:"name",validator:[]},
    {id:"code",validator:[]},
    {id:"status",validator:[]},
  ])
  created(){
    this.positionForm.value.status= '全部'
  }

  /* 表格部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=sampleData.length;
  multipleSelection:any=[] //选中的数组
  //计算属性
  get tableData() {
    return sampleData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
  }
  mounted(){
    this.handleCurrentChange(1)
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
    this.multipleSelection = val;
  }

}
</script>

<style scoped src="./position-page.scss" lang="scss">
</style>
