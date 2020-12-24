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

                        ]
                    }

        ]
    }
]
