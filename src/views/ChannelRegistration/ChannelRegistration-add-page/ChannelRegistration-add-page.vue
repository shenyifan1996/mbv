
<template src="./ChannelRegistration-add-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class ChannelRegistrationAddPage extends Vue{
  //新建频道表单
  channelAddForm:Form=new Form([
    {id:"code",validator:[]},
    {id:"name",validator:[]},
    {id:"desc",validator:[]},
    {id:"targetURL",validator:[]},
    {id:"sort",validator:[]},
    {id:"showType",validator:[]},
    {id:"brand",validator:[]},
    {id:"status",validator:[]},
  ])
  //methods
  submit(){

  }
}
</script>

<style scoped src="./ChannelRegistration-add-page.scss" lang="scss">
</style>
