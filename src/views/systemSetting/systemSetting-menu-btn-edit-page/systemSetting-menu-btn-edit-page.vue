
<template src="./systemSetting-menu-btn-edit-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class systemSettingMenuBtnAddPage extends Vue{
  //新增按钮信息表单
  menuBtnEditForm:Form=new Form([
    {id:"code",validator:[]},
    {id:"name",validator:[]},
    {id:"status",validator:[]},
    {id:"desc",validator:[]},
  ])
}
</script>

<style scoped src="./systemSetting-menu-btn-edit-page.scss" lang="scss">
</style>
