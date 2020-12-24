<!--
    auto created by shenyifan
-->

<template>
  <el-card class="cards">
    <div slot="header" class="clearfix">
      <slot name="header"></slot>
    </div>
    <slot name="content"></slot>
  </el-card>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({})
export default class extends Vue{

}
</script>
<style scoped src="./cards-component.scss" lang="scss"></style>