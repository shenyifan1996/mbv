
<template src="./regionalism-page.html">

</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form, rangeLengthValidator, requiredValidator} from "@ztwx/form";

@Component({})
export default class regionalismPage extends Vue{
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
  //行政区划表单
  regForm:Form=new Form([
    {id:"name",validator:[]},
    {id:"spell",validator:[]},
    {id:"code",validator:[]},
    {id:"simpleCode",validator:[]},
    {id:"level",validator:[]},

  ])

  //methods
  //点击树状图节点做的事
  handleNodeClick(data:any) {
    this.regForm.value.name = data.label
    console.log(data);
  }
}
</script>

<style scoped src="./regionalism-page.scss" lang="scss">
</style>