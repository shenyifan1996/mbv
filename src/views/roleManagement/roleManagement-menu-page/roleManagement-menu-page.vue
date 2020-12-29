<template src="./roleManagement-menu-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class roleManagementMenuPage extends Vue{
//角色菜单表单
  roleManMenuForm:Form=new Form([
    {id:"roleCode",validator:[]},
    {id:"roleName",validator:[]},
    {id:"channelName",validator:[]},
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

  //
  handleCheckChange(){
    let el:any =this.$refs.roleManMenuTree
    console.log(el.getCheckedNodes())
  }
}
</script>

<style scoped src="./roleManagement-menu-page.scss" lang="scss">
</style>
