
<template src="./employee-edit-page.html">
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Form, rangeLengthValidator, requiredValidator} from "@ztwx/form";

@Component({})
export default class employeeEditPage extends Vue{
  imageUrl:string = ''
  //新增岗位表单
  editEmpForm:Form=new Form([
    {id:"employeeNumber",validator:[]},
    {id:"employeeName",validator:[]},
    {id:"employeeSex",validator:[]},
    {id:"employeeBirth",validator:[]},
    {id:"birthNumber",validator:[]},
    {id:"cultureLevel",validator:[]},
    {id:"employeeNation",validator:[]},
    {id:"politicsStatus",validator:[]},
    {id:"postcode",validator:[]},
    {id:"organization",validator:[]},
    {id:"status",validator:[]},
    {id:"technicalPosition",validator:[]},
    {id:"employeeTel",validator:[]},
    {id:"employeePhone",validator:[]},
    {id:"employeeEmail",validator:[]},
    {id:"employeeAddress",validator:[]},
    {id:"employeeType",validator:[]},
    {id:"employeeFile",validator:[]},
  ])
  //弹出框岗位表单
  dialogEditEmpForm:Form=new Form([
    {id:"allJob",validator:[]},
    {id:"postType",validator:[]},
    {id:"useData",validator:[]},
  ])
  //控制组织对话框
  chooseOrg:boolean=false
  //控制岗位对话框
  chooseEmp:boolean=false
  //请求回来的组织树信息
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
  //组织树
  data1:any=[]
  //岗位树
  data2:any=[]
  //组织树配置
  defaultProps:any = {
    children: 'children',
    label: 'label'
  }
  //中转组织名
  orgName:string=''

  created(){
    console.log(this.$route.query.id)
  }
  //岗位信息表格数据
  EditEmpInfoData:any = []
  //图片相关
  handleAvatarSuccess(res:any, file:any) {
    console.log(1)
    this.imageUrl = URL.createObjectURL(file.raw);
  }
  beforeAvatarUpload(file:any) {
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJPG && !isPNG) {
      this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
    }
    if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2MB!');
    }
    console.log(2)
    return isJPG && isPNG && isLt2M;
  }

  //确认修改做的事
  submit(){
    const isPass=this.editEmpForm.checkValidators();
    if(!isPass)return;
    const result=this.editEmpForm.value;
    alert(`
通过校验,表单值为：
    ${JSON.stringify(result,null,4)};
            `);
  }
  //打开选择组织对话框
  openOrganizationTree(){
    this.chooseOrg = true
    this.data1=this.data
  }
  //点击选择（组织）
  handleNodeClickOrg(data:any) {
    this.orgName=data.label
  }
  //取消选择（组织）
  cancelChooseOrg(){
    this.chooseOrg = false
    this.orgName=''
    this.data1=[]
  }
  //确认选择（组织）
  confirmChooseOrg(){
    this.editEmpForm.value.organization=this.orgName
    this.chooseOrg = false
    this.orgName=''
    this.data1=[]
  }
  //打开指定岗位对话框
  openEmployeeTree(){
    this.chooseEmp = true
    this.data2=this.data
  }
  //点击选择（岗位）
  handleNodeClickEmp(data:any) {
  }
  //取消选择（岗位）
  cancelChooseEmp(){
    this.chooseEmp = false
    this.data1=[]
  }
  //确认选择（岗位）
  confirmChooseEmp(){
    this.chooseEmp = false
    this.data1=[]
  }
}
</script>

<style scoped src="./employee-edit-page.scss" lang="scss">
</style>
