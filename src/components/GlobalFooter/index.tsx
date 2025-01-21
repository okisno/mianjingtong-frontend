import React from "react";
import './index.css';


/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter(){

    const  currentYear = new Date().getFullYear();

    return (
        <div className="global-footer">
            <div>© {currentYear} 面试刷题平台</div>
            <div>
                <a href="https://github.com/okisno?tab=repositories" target="_blank">
                    作者：中北大学——xdq
                </a>
            </div>
        </div>
    );
};