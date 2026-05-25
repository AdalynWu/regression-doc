import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QA Team Regression Test",
  srcDir: './docs',
  description: "Web Full Test Document",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search:{
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
      text: 'Onboarding',
      collapsed: false,
      items: [
        { text: '測試環境與帳號準備', link: '/onboarding/env-setup' },
        { text: '回歸測試流程規範', link: '/onboarding/workflow' }
      ]
    },
    {
      text: 'Auth',
      collapsed: false,
      items: [
        { text: 'landing page(海外/非海外)', link: '/regression/auth/landingPage' },
        { text: '會員登入/註冊流程', link: '/regression/auth/index' }
      ]
    },
    {
      text: 'Navigation',
      collapsed: true, // 預設收合，畫面比較乾淨
      items: [
        { text: '探索與分類', link: '/nav/explore' },
        { text: '直播與影片', link: '/nav/content' },
        { text: '追蹤中動態', link: '/nav/following' }
      ]
    },
    {
      text: '商店與金流 (P0)', // 加上 P0 標籤提醒重要性
      collapsed: false,
      items: [
        { text: '鑽石儲值流程', link: '/economy/recharge' },
        { text: '解鎖項目與背包', link: '/economy/assets' }
      ]
    },
    {
      text: '帳號與互動功能',
      collapsed: true,
      items: [
        { text: '搜尋與私訊', link: '/features/social' },
        { text: '漢堡選單與設定', link: '/features/profile' }
      ]
    }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
