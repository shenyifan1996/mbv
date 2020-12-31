
<template src="./menuSearch-detail-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class menuSearchDetailPage extends Vue{
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

  //点击树状图节点做的事
  handleNodeClick(data:any) {
    console.log(data);
  }

}
</script>

<style scoped src="./menuSearch-detail-page.scss" lang="scss">
</style>
