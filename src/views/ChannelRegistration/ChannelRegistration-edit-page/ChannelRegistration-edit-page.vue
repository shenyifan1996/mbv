
<template src="./ChannelRegistration-edit-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class ChannelRegistrationEditPage extends Vue{
  //编辑频道表单
  channelEditForm:Form=new Form([
    {id:"code",validator:[]},
    {id:"name",validator:[]},
    {id:"desc",validator:[]},
    {id:"targetURL",validator:[]},
    {id:"sort",validator:[]},
    {id:"showType",validator:[]},
    {id:"brand",validator:[]},
    {id:"status",validator:[]},
  ])
  created(){
    console.log(this.$route.query.id)
  }
  //methods
  submit(){

  }
}
</script>

<style scoped src="./ChannelRegistration-edit-page.scss" lang="scss">
</style>
