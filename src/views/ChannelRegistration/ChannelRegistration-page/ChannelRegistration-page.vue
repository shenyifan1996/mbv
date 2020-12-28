<template src="./ChannelRegistration-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class ChannelRegistrationPage extends Vue{
  //注册频道表单
  channelForm:Form=new Form([
    {id:"name",validator:[]},
    {id:"status",validator:[]},
  ])
  //频道列表表格
  channelData:any=[
    {
      channelCode:'12312',
      channelName:'经销商全生命周期',
      status:'有效',
      brand:'双品牌',
      sort:'1'
    }
  ]
  /* 分页部分 */
  currentPage:number= 1;
  pageSize:number = 5;
  pageSizes:any = [5, 10, 20, 30]
  total:number=this.channelData.length;
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
  InfoEdit(row:any){
    this.$router.push({
      path:'ChannelRegistrationEdit',
      query:{
        id:row.channelCode
      },
    })
  }
}
</script>

<style scoped src="./ChannelRegistration-page.scss" lang="scss">
</style>
