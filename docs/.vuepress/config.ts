import {defaultTheme, defineUserConfig} from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
//import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// @ts-ignore
export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: 'Flicker的帮助文档',
    description: '简易的QQBot🐍🦀',
    base: '/',
    head:[
        ['link', { rel: 'icon', href: '/images/favicon.png' }]
    ],
    /*plugins: [
        backToTopPlugin(),
    ],*/

    theme: defaultTheme({
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "返回首页",
        navbar: [
            { text: "简介", link: '/guide/' },
            { text: "功能", children: ['/features/', '/features/cmd_list.md', '/features/event_list.md'] }
        ],
        sidebar: "auto",
    }),
})
