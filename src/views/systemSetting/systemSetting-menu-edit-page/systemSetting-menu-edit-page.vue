
<template src="./systemSetting-menu-edit-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class systemSettingMenuAddPage extends Vue{
  //新增菜单表单
  menuEditForm:Form=new Form([
    {id:"code",validator:[]},
    {id:"name",validator:[]},
    {id:"nameEN",validator:[]},
    {id:"desc",validator:[]},
    {id:"MenuLink",validator:[]},
    {id:"sort",validator:[]},
    {id:"brand",validator:[]},
    {id:"application",validator:[]},
    {id:"fatherMenu",validator:[]},
    {id:"status",validator:[]},
  ])
}
</script>

<style scoped src="./systemSetting-menu-edit-page.scss" lang="scss">
</style>
