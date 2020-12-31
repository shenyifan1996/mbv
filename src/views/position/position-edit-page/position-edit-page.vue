
<template src="./position-edit-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form, rangeLengthValidator, requiredValidator} from "@ztwx/form";


@Component({})
export default class positionEditPage extends Vue{
  //岗位表单
  editPositionForm:Form=new Form([
    {id:"positionCode",validator:[]},
    {id:"positionName",validator:[]},
    {id:"brand",validator:[]},
    {id:"businessType",validator:[]},
    {id:"status",validator:[]},
  ])
  //组织信息表格数据
  OrgInfoData:any = []

  //控制对话框
  chooseOrg:boolean=false
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
  //中转组织树
  data1:any=[]
  //组织树配置
  defaultProps:any = {
    children: 'children',
    label: 'label'
  }
  created(){
    console.log(this.$route.query.info)
  }
  //打开对话框
  openTree(){
    this.chooseOrg = true
    this.data1=this.data
  }
  //点击选择
  handleNodeClick(data:any) {
    console.log(data)
  }
  //取消选择
  cancelChoose(){
    this.chooseOrg = false
    this.data1=[]
  }
  //确认选择
  confirmChoose(){
    this.chooseOrg = false
    this.data1=[]
  }
}
</script>

<style scoped src="./position-edit-page.scss" lang="scss">
</style>
