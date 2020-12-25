<template src="./organization-add-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form,
  requiredValidator,
  rangeLengthValidator,
  emailValidator,
  regExpValidator
} from "@ztwx/form";

@Component({})
export default class organizationAddPage extends Vue{
  //控制对话框
  chooseOrg:boolean=false
  //新增表单
  addQrgForm:Form=new Form([
    {id:"name",validator:[new requiredValidator("不可为空")]},
    {id:"code",validator:[
        new rangeLengthValidator("10>=字符长度需要>=2",2,10),
        new requiredValidator("满足长度的同时，也不能为空。")
      ]},
    {id:"organization",validator:[]},
    {id:"status",validator:[
        new requiredValidator("性别必须选")
      ]},
    {id:"brand",validator:[]},
    {id:"type",validator:[]},
  ])
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
  //中转组织名
  orgName:string=''
  created(){
    this.keepStatus()
  }
  //methods
  //重置状态
  keepStatus(){
    this.addQrgForm.value.status = '有效'
    this.addQrgForm.value.brand = 'SA'
    this.addQrgForm.value.type = '行政组织'
  }
  //确认修改做的事
  submit(){
    const isPass=this.addQrgForm.checkValidators();
    if(!isPass)return;
    const result=this.addQrgForm.value;
    alert(`
通过校验,表单值为：
    ${JSON.stringify(result,null,4)};
            `);
  }
  //打开对话框
  openTree(){
    this.chooseOrg = true
    this.data1=this.data
  }
  //点击选择
  handleNodeClick(data:any) {
    this.orgName=data.label
  }
  //取消选择
  cancelChoose(){
    this.chooseOrg = false
    this.orgName=''
    this.data1=[]
  }
  //确认选择
  confirmChoose(){
    this.addQrgForm.value.organization=this.orgName
    this.chooseOrg = false
    this.orgName=''
    this.data1=[]
  }

}
</script>

<style scoped src="./organization-add-page.scss" lang="scss">
</style>
