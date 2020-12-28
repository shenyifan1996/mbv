import weclomePage from "../views/common/weclome-page/weclome-page.vue";
import { IceRouterConfig } from "./iceRouterConfig.interface";
export {
    IceRouterConfig
}

const routes: IceRouterConfig[] = [
    /**
     * 欢迎页面
     */
    {
        path: "weclome", component: <any>weclomePage, pageName: ""
    },
    //organization组织管理
    {
        path: "organization", component: () => import("../views/organization/organization-page/organization-page.vue"), pageName: "组织管理"
    },{
        path: "organizationAdd", component: () => import("../views/organization/organization-add-page/organization-add-page.vue"), pageName: "新增组织"
    },
    //position岗位管理
    {
        path: "position", component: () => import("../views/position/position-page/position-page.vue"), pageName: "岗位管理"
    },{
        path: "positionAdd", component: () => import("../views/position/position-add-page/position-add-page.vue"), pageName: "岗位新增"
    },{
        path: "positionEdit", component: () => import("../views/position/position-edit-page/position-edit-page.vue"), pageName: "岗位编辑"
    },
    //employee员工管理
    {
        path: "employee", component: () => import("../views/employee/employee-page/employee-page.vue"), pageName: "员工管理"
    },{
        path: "employeeAdd", component: () => import("../views/employee/employee-add-page/employee-add-page.vue"), pageName: "员工新增"
    },{
        path: "employeeEdit", component: () => import("../views/employee/employee-edit-page/employee-edit-page.vue"), pageName: "员工编辑"
    },
    //regionalism行政区划
    {
        path: "regionalism", component: () => import("../views/regionalism/regionalism-page/regionalism-page.vue"), pageName: "行政区划"
    },
    //ChannelRegistration频道注册
    {
        path: "ChannelRegistration", component: () => import("../views/ChannelRegistration/ChannelRegistration-page/ChannelRegistration-page.vue"), pageName: "频道注册"
    },{
        path: "ChannelRegistrationAdd", component: () => import("../views/ChannelRegistration/ChannelRegistration-add-page/ChannelRegistration-add-page.vue"), pageName: "频道新建"
    },{
        path: "ChannelRegistrationEdit", component: () => import("../views/ChannelRegistration/ChannelRegistration-edit-page/ChannelRegistration-edit-page.vue"), pageName: "频道编辑"
    },
    //systemSetting系统配置
    {
        path: "systemSetting", component: () => import("../views/systemSetting/systemSetting-page/systemSetting-page.vue"), pageName: "系统配置"
    },{
        path: "systemSettingMenu", component: () => import("../views/systemSetting/systemSetting-menu-page/systemSetting-menu-page.vue"), pageName: "菜单设置"
    },{
        path: "systemSettingMenuAdd", component: () => import("../views/systemSetting/systemSetting-menu-add-page/systemSetting-menu-add-page.vue"), pageName: "菜单新增"
    },{
        path: "systemSettingMenuEdit", component: () => import("../views/systemSetting/systemSetting-menu-edit-page/systemSetting-menu-edit-page.vue"), pageName: "菜单编辑"
    },{
        path: "systemSettingMenuBtn", component: () => import("../views/systemSetting/systemSetting-menu-btn-page/systemSetting-menu-btn-page.vue"), pageName: "按钮管理"
    },{
        path: "systemSettingMenuBtnAdd", component: () => import("../views/systemSetting/systemSetting-menu-btn-add-page/systemSetting-menu-btn-add-page.vue"), pageName: "新增按钮"
    },{
        path: "systemSettingMenuBtnEdit", component: () => import("../views/systemSetting/systemSetting-menu-btn-edit-page/systemSetting-menu-btn-edit-page.vue"), pageName: "编辑按钮"
    },

];

export default routes;
