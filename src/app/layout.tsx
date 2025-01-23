"use client"
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";
import {useCallback, useEffect} from "react";
import {Provider, useDispatch} from "react-redux";
import store, {AppDispatch} from "@/stores";
import {getLoginUserUsingGet} from "@/api/userController";
import {setLoginUser} from "@/stores/loginUser";
import {usePathname} from "next/navigation";
import AccessLayout from "@/access/AccessLayout";
import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 执行初始化逻辑的布局（多封装一层）
 * @param children
 * @constructor
 */
const InitLayout: React.FC<
    Readonly<{
        children: React.ReactNode;
    }>
> = ({ children }) => {

    const dispatch = useDispatch<AppDispatch>();

    const pathname = usePathname();

    /**
     * 全局初始化函数，有全局单次调用的代码，都可以写到这里
     * 初始化全局用户状态
     */
    const doInitLoginUser = useCallback(async () => {
        const res = await getLoginUserUsingGet()
        // 获取当前页面路径
        if (res.data){
            // 更新全局用户状态
            // @ts-ignore
            dispatch(setLoginUser(res.data));
        } else {



            // // 登录和注册页不用获取登录信息
            // if (
            //     !pathname.startsWith("/user/login") &&
            //     !pathname.startsWith("/user/register")
            // ) {
            //     //TODO: 触发器，登录失败3秒后自动更换为自定义的用户，将来应该做改动，可以是改为直接跳转到登录页面等等，之后修改
            //     // 以下代码用于测试
            //     setTimeout(() => {
            //         const testUser = {userName: "testUser", id: 1, userAvatar: "https://www.code-nav.cn/logo.png", userRole: ACCESS_ENUM.ADMIN};
            //         dispatch(setLoginUser(testUser));
            //     }, 3000);
            // }

        }
        console.log("hello 欢迎来到我的项目");
    }, []);

    // 只执行一次
    useEffect(() => {
        doInitLoginUser();
    }, []);

    return <>{children}</>;
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh">
        <body>
        <AntdRegistry>
            <Provider store={store}>
                <InitLayout>
                    <BasicLayout>
                        <AccessLayout>{children}</AccessLayout>
                    </BasicLayout>
                </InitLayout>
            </Provider>
        </AntdRegistry>
        </body>
        </html>
    );
}
