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

];

export default routes;
