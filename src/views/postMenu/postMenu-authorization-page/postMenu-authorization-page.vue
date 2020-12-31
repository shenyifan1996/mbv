
<template src="./postMenu-authorization-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class postMenuAuthorizationPage extends Vue{
//角色菜单表单
  postMenuAuthForm:Form=new Form([
    {id:"postCode",validator:[]},
    {id:"postName",validator:[]},
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
  //组织树配置
  defaultProps:any = {
    children: 'children',
    label: 'label'
  }

  //选择触发
  handleCheckChange(){
    let el:any =this.$refs.postMenuAuthTree
    console.log(el.getCheckedNodes())
  }
}
</script>

<style scoped src="./postMenu-authorization-page.scss" lang="scss">
</style>