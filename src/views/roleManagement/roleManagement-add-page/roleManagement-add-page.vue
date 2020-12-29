<template src="./roleManagement-add-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form} from "@ztwx/form";

@Component({})
export default class roleManagementAddPage extends Vue{
//角色维护新增表单
  roleManAddForm:Form=new Form([
    {id:"systemName",validator:[]},
    {id:"roleName",validator:[]},
    {id:"brand",validator:[]},
    {id:"status",validator:[]},
  ])
}
</script>

<style scoped src="./roleManagement-add-page.scss" lang="scss">
</style>
