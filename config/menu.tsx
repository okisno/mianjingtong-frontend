import { MenuDataItem } from "@ant-design/pro-layout";
import { CrownOutlined } from "@ant-design/icons";
import path from "node:path";

// 菜单列表
export const menus = [
    {
        path: "/",
        name: "主页",
    },
    {
        path: "/questions",
        name: "题目"
    },
    {
        path: "/banks",
        name: "题库"
    },
    {
        path: "https://mianjingtong.com",
        name: "面精通",
        target: "_blank",
    },
    {
        path: "/admin",
        name: "管理",
        icon: <CrownOutlined />,
        children: [
            {
                path: "/admin/user",
                name: "用户管理"
            }
        ]
    },
] as MenuDataItem[];
