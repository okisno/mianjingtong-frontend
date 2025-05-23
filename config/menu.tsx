import { MenuDataItem } from "@ant-design/pro-layout";
import { CrownOutlined } from "@ant-design/icons";
import path from "node:path";
import ACCESS_ENUM from "@/access/accessEnum";

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
        hideInMenu: true,   //隐藏在菜单中
    },
    {
        path: "/deepSeek",
        name: "AI问答",
    },
    {
        path: "/admin",
        name: "管理",
        icon: <CrownOutlined />,
        access: ACCESS_ENUM.ADMIN,
        children: [
            {
                path: "/admin/user",
                name: "用户管理",
                access: ACCESS_ENUM.ADMIN,
            },
            {
                path: "/admin/bank",
                name: "题库管理",
                access: ACCESS_ENUM.ADMIN,
            },
            {
                path: "/admin/question",
                name: "题目管理",
                access: ACCESS_ENUM.ADMIN,
            },
        ],
    },


] as MenuDataItem[];


// 根据路径查找所有菜单
export const findAllMenuItemByPath = (path: string): MenuDataItem | null => {
    return findMenuItemByPath(menus, path);
};

// 根据路径查找菜单
export const findMenuItemByPath = (
    menus: MenuDataItem[],
    path: string,
): MenuDataItem | null => {
    for (const menu of menus) {
        if (menu.path === path) {
            return menu;
        }
        if (menu.children) {
            const matchedMenuItem = findMenuItemByPath(menu.children, path);
            if (matchedMenuItem) {
                return matchedMenuItem;
            }
        }
    }
    return null;
};

