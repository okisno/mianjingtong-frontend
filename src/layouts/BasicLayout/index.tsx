// @ts-ignore
"use client";

import {
  GithubFilled,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import React, { useState } from "react";
import {Dropdown, Input, theme} from "antd";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import GlobalFooter from "@/components/GlobalFooter";
import './index.css';
import {menus} from "../../../config/menu";
import {listQuestionBankByPageUsingPost} from "@/api/questionBankController";
import {useSelector} from "react-redux";
import {RootState} from "@/stores";

/**
 * 搜索条
 * @constructor
 */
const SearchInput = () => {
    const { token } = theme.useToken();
    return (
        <div
            key="SearchOutlined"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: token.colorBgTextHover,
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            color: token.colorTextLightSolid,
                        }}
                    />
                }
                placeholder="搜索题目"
                variant="borderless"
            />
        </div>
    );
};

interface Props {
    children: React.ReactNode;
}

/**
 * 通用布局
 * @param children
 * @constructor
 */
export default function BasicLayout({ children} : Props){

    const pathname = usePathname();

    const loginUser = useSelector((state: RootState) => state.loginUser);



    return (
            <div
                id="basicLayout"
                style={{
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                        <ProLayout
                            title={"面精通"}
                            layout={"top"}
                            logo={
                                <Image src="/assets/logo.png" height={32} width={32} alt="面精通——xdq" />
                            }
                            location={{
                                pathname,
                            }}
                            avatarProps={{
                                src: loginUser.userAvatar || "/assets.logo.png",
                                size: 'small',
                                title: loginUser.userName || "心荡秋",
                                render: (props, dom) => {
                                    return (
                                        <Dropdown
                                            menu={{
                                                items: [
                                                    {
                                                        key: 'logout',
                                                        icon: <LogoutOutlined />,
                                                        label: '退出登录',
                                                    },
                                                ],
                                            }}
                                        >
                                            {dom}
                                        </Dropdown>
                                    );
                                },
                            }}
                            actionsRender={(props) => {
                                if (props.isMobile) return [];
                                return [
                                    <SearchInput key="search" />,
                                    <a key="github" href="https://github.com/okisno?tab=repositories" target="_blank">
                                        <GithubFilled key="GithubFilled" />
                                    </a>
                                ];
                            }}
                            headerTitleRender={(logo, title, _) => {
                                return (
                                    <a>
                                        {logo}
                                        {title}
                                    </a>
                                );
                            }}

                            //渲染底部栏
                            footerRender={() => <GlobalFooter />}


                            onMenuHeaderClick={(e) => console.log(e)}
                            // 定义有哪些菜单
                            menuDataRender={() => {
                                return menus;
                            }}

                            // 定义了菜单项如何渲染，例如跳转到哪里，打开方式，新标签还是当前
                            // 由于使用了Link，有的部分不需要请求页面
                            menuItemRender={(item, dom) => (
                                <Link href={item.path || "/"} target={item.target}>
                                    {dom}
                                </Link>
                            )}
                        >
                            { JSON.stringify(loginUser) }
                            {children}

                        </ProLayout>
            </div>
        );
};