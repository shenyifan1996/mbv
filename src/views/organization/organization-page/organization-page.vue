<template src="./organization-page.html">
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
export default class organizationPage extends Vue{
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
  //组织树配置
  defaultProps:any = {
    children: 'children',
    label: 'label'
  }
  //修改表单
  orgForm:Form=new Form([
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

  created(){

  }
  //methods
  //点击树状图节点做的事
  handleNodeClick(data:any,node:any) {
    //获取父节点，如果父节点为空则赋值没有上级部门
    let fatherLabel = node.parent.label
    if(!fatherLabel){
      fatherLabel = '没有上级部门'
    }
    this.orgForm.value.name = data.label
    this.orgForm.value.organization = fatherLabel
  }

  //确认修改做的事
  submit(){
    const isPass=this.orgForm.checkValidators();
    if(!isPass)return;
    const result=this.orgForm.value;
    alert(`
通过校验,表单值为：
    ${JSON.stringify(result,null,4)};
            `);
  }
}
</script>

<style scoped src="./organization-page.scss" lang="scss">
</style>
