import { NavListItem } from "../ice";

/**
 * 注意 path 去掉/home，取/home 后的路径 .
 */
export const navData: NavListItem[] = [
    {
        label: "鉴权管理", children: [

           {
               label: "员工统一视图", children: [
                   { label: "组织管理", path: "organization" },
                   { label: "岗位管理", path: "position" },
                   { label: "员工管理", path: "employee" },
                   { label: "行政区划", path: "regionalism" },
                   //注销
                   { label: "频道注册", path: "ChannelRegistration" },
                   { label: "系统配置", path: "systemSetting" },
                   { label: "角色管理", path: "roleManagement" },
                   { label: "岗位菜单维护", path: "postMenu" },
                   { label: "菜单权限查询", path: "menuSearch" },
               ]
           }, {
                label: "频道系统维护", children: [
                    { label: "频道注册", path: "ChannelRegistration" },
                    { label: "系统配置", path: "systemSetting" },
                    { label: "角色管理", path: "roleManagement" },
                    { label: "岗位菜单维护", path: "postMenu" },
                    { label: "菜单权限查询", path: "menuSearch" },
                ]
            }

        ]
    }
]
