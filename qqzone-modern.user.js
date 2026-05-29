// ==UserScript==
// @name         QQ空间现代化美化 - 微博风格
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  基于QQ空间实际DOM结构 - 微博蓝白卡片风格（精准版）
// @author       MiMo
// @match        https://user.qzone.qq.com/*
// @match        https://qzone.qq.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        /* ==================== 隐藏广告和推广模块 ==================== */
        .adFeedsItem,
        .f-vqz-ad,
        .qzone-carousel-ad,
        #tb_qboss_text_ad,
        .extend-module,
        .extend-module-img,
        .extend-module-keyframe,
        .publicity-msg,
        .send-gift-list,
        .gift-bd,
        .gift-ft,
        .special-counter,
        .mod-special-counter,
        .mod-my-cared-list,
        .care_friend_container,
        .the_worlds_end,
        .wing-fly,
        .ad-main-title,
        .ad-info-area,
        .ad-media,
        .ad-title-area,
        .ad-sub-title,
        .ad-close-button,
        .ad-type-icon,
        .ad-type-text,
        .ad-type-label,
        .ad-thumb,
        [id^="gdt_"],
        .qz-gamecenter,
        .shop-item,
        .lay-shop-item-fixed {
            display: none !important;
        }

        /* ==================== 页面背景 ==================== */
        body,
        .bg-body,
        .layout-body,
        .layout-page {
            background-color: #f5f6f7 !important;
        }

        /* ==================== 顶部导航栏 ==================== */
        .top-fix-bar {
            background: #ffffff !important;
            border-bottom: 1px solid #e8e9eb !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05) !important;
        }

        .top-fix-bar .top-fix-inner {
            background: transparent !important;
        }

        .top-fix-bar .top-fix-container {
            background: transparent !important;
        }

        /* 导航链接 */
        .top-fix-bar .nav-list a,
        .top-fix-bar .head-nav a,
        .top-fix-bar .logo {
            color: #4e5969 !important;
        }

        .top-fix-bar .nav-list a:hover,
        .top-fix-bar .head-nav a:hover {
            color: #1e80ff !important;
        }

        .top-fix-bar .logo {
            color: #1e80ff !important;
        }

        /* 搜索框 */
        .top-fix-bar .search-input,
        .top-fix-bar .search-box input {
            background: #f5f6f7 !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 20px !important;
            color: #1d2129 !important;
            outline: none !important;
        }

        .top-fix-bar .search-input:focus,
        .top-fix-bar .search-box input:focus {
            border-color: #1e80ff !important;
            box-shadow: 0 0 0 2px rgba(30,128,255,0.1) !important;
        }

        /* ==================== 主体内容区域 ==================== */
        .qz-main,
        .main-area {
            background: transparent !important;
        }

        /* ==================== 左侧栏 - 用户信息卡片 ==================== */
        .f-aside,
        .side-area,
        .col-main-sidebar {
            background: transparent !important;
        }

        /* 用户头像区域 */
        .head-avatar,
        .head-info,
        .head-detail {
            background: #ffffff !important;
            border-radius: 12px !important;
            border: 1px solid #e8e9eb !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
        }

        .head-avatar img {
            border-radius: 50% !important;
            border: 3px solid #ffffff !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
        }

        .head-detail-name {
            color: #1d2129 !important;
            font-weight: 600 !important;
        }

        .head-detail-info {
            color: #86909c !important;
        }

        /* ==================== 侧栏模块卡片 ==================== */
        .mod_wrap,
        .mod_wrap_bd,
        .mod_wrap_inner,
        .f-aside .mod_wrap,
        .side-area .mod_wrap {
            background: #ffffff !important;
            border-radius: 12px !important;
            border: 1px solid #e8e9eb !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
            margin-bottom: 12px !important;
            overflow: hidden !important;
        }

        .mod_wrap .mod_wrap_bd,
        .mod_wrap .mod_wrap_inner {
            background: transparent !important;
        }

        /* 侧栏模块标题 */
        .mod_wrap .title,
        .mod_wrap .title-text,
        .mod_wrap .box_hd,
        .mod_wrap .in-hd {
            color: #1d2129 !important;
            font-weight: 600 !important;
            border-bottom: 1px solid #f0f1f2 !important;
            padding: 12px 16px !important;
            background: transparent !important;
        }

        /* 侧栏模块内容 */
        .mod_wrap .box_bd,
        .mod_wrap .in-bd,
        .mod_wrap .box_ft {
            background: transparent !important;
            color: #4e5969 !important;
        }

        /* ==================== 访客模块 ==================== */
        .visit-module {
            background: #ffffff !important;
            border-radius: 12px !important;
            border: 1px solid #e8e9eb !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
        }

        .visitor-list {
            background: transparent !important;
        }

        .visitor-list .item {
            background: transparent !important;
        }

        .visitor-list .item:hover {
            background: #f7f8fa !important;
        }

        /* ==================== Tab切换栏 ==================== */
        .feed-control-tab,
        .fn-feed-control-v2 {
            background: #ffffff !important;
            border-radius: 12px !important;
            border: 1px solid #e8e9eb !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
            margin-bottom: 12px !important;
            padding: 0 !important;
        }

        .feed-control-tab a,
        .fn-feed-control-v2 a {
            color: #86909c !important;
            border-bottom: 2px solid transparent !important;
            transition: all 0.25s ease !important;
        }

        .feed-control-tab a:hover,
        .fn-feed-control-v2 a:hover {
            color: #1e80ff !important;
        }

        .feed-control-tab .current,
        .fn-feed-control-v2 .current,
        .feed-control-tab .item-on,
        .fn-feed-control-v2 .item-on {
            color: #1e80ff !important;
            border-bottom-color: #1e80ff !important;
            font-weight: 600 !important;
        }

        /* ==================== 发说说编辑器 ==================== */
        .qz-poster,
        .qz-poster-2026-05-29 {
            background: #ffffff !important;
            border-radius: 12px !important;
            border: 1px solid #e8e9eb !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
            margin-bottom: 12px !important;
        }

        .qz-poster-inner {
            background: transparent !important;
        }

        .qz-poster-top {
            background: transparent !important;
        }

        .qz-poster-bd {
            background: transparent !important;
        }

        .qz-poster-editor-cont {
            background: transparent !important;
        }

        .qz-poster-editor-cont textarea,
        .qz-poster-editor-cont .textinput,
        .qz-poster-editor-cont .textinput-default {
            background: #f5f6f7 !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 8px !important;
            color: #1d2129 !important;
            outline: none !important;
        }

        .qz-poster-editor-cont textarea:focus,
        .qz-poster-editor-cont .textinput:focus {
            border-color: #1e80ff !important;
            box-shadow: 0 0 0 2px rgba(30,128,255,0.1) !important;
        }

        .qz-poster-bottom {
            background: transparent !important;
            border-top: 1px solid #f0f1f2 !important;
        }

        .qz-poster-ft {
            background: transparent !important;
        }

        /* 发送按钮 */
        .qz-poster-ft .button,
        .qz-poster-ft .btn-post {
            background: #1e80ff !important;
            color: #ffffff !important;
            border: none !important;
            border-radius: 20px !important;
            padding: 6px 20px !important;
            font-weight: 500 !important;
            transition: all 0.25s ease !important;
        }

        .qz-poster-ft .button:hover,
        .qz-poster-ft .btn-post:hover {
            background: #4096ff !important;
            box-shadow: 0 2px 8px rgba(30,128,255,0.3) !important;
        }

        /* 编辑器工具栏 */
        .qz-poster-bottom-ext {
            background: transparent !important;
        }

        .qz-poster-bottom-ext-top {
            background: transparent !important;
        }

        /* ==================== 动态/说说卡片 ==================== */
        [id^="feed_"],
        [id^="fct_"] {
            background: #ffffff !important;
            border-radius: 12px !important;
            border: 1px solid #e8e9eb !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
            margin-bottom: 12px !important;
            overflow: hidden !important;
        }

        /* 动态头部 - 头像+昵称+时间 */
        .f-single-head {
            background: transparent !important;
            padding: 16px 16px 0 !important;
        }

        .f-single-head .ui-avatar,
        .f-single-head .avatar,
        .f-single-head .user-avatar {
            border-radius: 50% !important;
            border: 2px solid #ffffff !important;
            box-shadow: 0 1px 4px rgba(0,0,0,0.1) !important;
        }

        .f-single-head .f-name,
        .f-single-head .f-nick,
        .f-single-head .nickname {
            color: #1d2129 !important;
            font-weight: 600 !important;
        }

        .f-single-head .f-info,
        .f-single-head .date {
            color: #86909c !important;
        }

        /* 动态内容 */
        .f-single-content {
            background: transparent !important;
            color: #1d2129 !important;
            padding: 12px 16px !important;
        }

        .f-single-content .f-wrap {
            background: transparent !important;
            color: #1d2129 !important;
        }

        /* 图片网格 */
        .f-single-content .img-box,
        .f-single-content .img-box-row {
            background: transparent !important;
        }

        .f-single-content .img-item {
            border-radius: 8px !important;
            overflow: hidden !important;
        }

        /* 动态底部 - 操作按钮 */
        .f-single-foot {
            background: transparent !important;
            border-top: 1px solid #f0f1f2 !important;
            padding: 8px 16px !important;
        }

        .f-single-foot .f-like,
        .f-single-foot .f-reprint,
        .f-single-foot .f-op-detail,
        .f-single-foot .f-like-cnt {
            color: #86909c !important;
            transition: all 0.25s ease !important;
        }

        .f-single-foot .f-like:hover,
        .f-single-foot .f-reprint:hover,
        .f-single-foot .f-op-detail:hover {
            color: #1e80ff !important;
        }

        .f-single-foot .f-like.active,
        .f-single-foot .f-like-cnt.active {
            color: #ff4d4f !important;
        }

        /* 动态操作图标 */
        .f-single-foot .icon-op-praise,
        .f-single-foot .icon-op-comment,
        .f-single-foot .icon-op-share {
            color: #86909c !important;
        }

        .f-single-foot .icon-op-praise:hover,
        .f-single-foot .icon-op-comment:hover,
        .f-single-foot .icon-op-share:hover {
            color: #1e80ff !important;
        }

        /* ==================== 评论区 ==================== */
        .mod-comments,
        .comments-box {
            background: #f7f8fa !important;
            border-radius: 8px !important;
            margin: 0 16px 12px !important;
            padding: 12px !important;
        }

        .comments-list {
            background: transparent !important;
        }

        .comments-item {
            background: transparent !important;
            border-bottom: 1px solid #f0f1f2 !important;
            padding: 8px 0 !important;
        }

        .comments-item:last-child {
            border-bottom: none !important;
        }

        .comments-item .user-name,
        .comments-item .nickname {
            color: #1e80ff !important;
            font-weight: 500 !important;
        }

        .comments-item .comments-content {
            color: #1d2129 !important;
        }

        .comments-item .comments-op {
            color: #86909c !important;
        }

        .comments-item .comments-op a {
            color: #86909c !important;
        }

        .comments-item .comments-op a:hover {
            color: #1e80ff !important;
        }

        /* 评论输入框 */
        .mod-commnets-poster,
        .comments-poster-default {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 8px !important;
        }

        .mod-commnets-poster textarea,
        .comments-poster-default textarea {
            background: transparent !important;
            color: #1d2129 !important;
            border: none !important;
            outline: none !important;
        }

        /* ==================== 好友列表 ==================== */
        .friends-list-topbar {
            background: transparent !important;
            border-bottom: 1px solid #f0f1f2 !important;
        }

        .friends-list-topbar a {
            color: #86909c !important;
        }

        .friends-list-topbar a:hover,
        .friends-list-topbar .current {
            color: #1e80ff !important;
        }

        /* 好友头像网格 */
        .avatar-list,
        .friends-results-topbar {
            background: transparent !important;
        }

        .avatar-list .item,
        .friends-results-topbar .item {
            background: transparent !important;
        }

        .avatar-list .item:hover,
        .friends-results-topbar .item:hover {
            background: #f7f8fa !important;
        }

        /* ==================== 相册模块 ==================== */
        .mod-pic140,
        .icenter-right-photo {
            background: transparent !important;
        }

        .mod-pic140 .img-item,
        .icenter-right-photo .img-item {
            border-radius: 8px !important;
            overflow: hidden !important;
        }

        /* ==================== 日志模块 ==================== */
        .mod-tuwen,
        .mod-log {
            background: transparent !important;
        }

        .mod-tuwen .item,
        .mod-log .item {
            background: transparent !important;
            border-bottom: 1px solid #f0f1f2 !important;
        }

        .mod-tuwen .item:hover,
        .mod-log .item:hover {
            background: #f7f8fa !important;
        }

        .mod-tuwen .item a,
        .mod-log .item a {
            color: #1d2129 !important;
        }

        .mod-tuwen .item a:hover,
        .mod-log .item a:hover {
            color: #1e80ff !important;
        }

        /* ==================== 签到模块 ==================== */
        .checkin-btn,
        .fn-checkin-btn {
            background: #1e80ff !important;
            color: #ffffff !important;
            border: none !important;
            border-radius: 20px !important;
            padding: 6px 16px !important;
            font-weight: 500 !important;
            transition: all 0.25s ease !important;
        }

        .checkin-btn:hover,
        .fn-checkin-btn:hover {
            background: #4096ff !important;
            box-shadow: 0 2px 8px rgba(30,128,255,0.3) !important;
        }

        /* ==================== 分页器 ==================== */
        .next-page,
        .prev-page,
        .p_next,
        .p_prev {
            background: #ffffff !important;
            color: #4e5969 !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 6px !important;
            transition: all 0.25s ease !important;
        }

        .next-page:hover,
        .prev-page:hover,
        .p_next:hover,
        .p_prev:hover {
            color: #1e80ff !important;
            border-color: #1e80ff !important;
        }

        /* ==================== 弹窗/对话框 ==================== */
        .ui-tooltip,
        .tipsbox,
        .tips {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1) !important;
            color: #1d2129 !important;
        }

        /* ==================== 滚动条 ==================== */
        ::-webkit-scrollbar {
            width: 6px !important;
            height: 6px !important;
        }

        ::-webkit-scrollbar-track {
            background: transparent !important;
        }

        ::-webkit-scrollbar-thumb {
            background: #d0d0d0 !important;
            border-radius: 3px !important;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #b0b0b0 !important;
        }

        /* ==================== 链接颜色 ==================== */
        a {
            color: #1e80ff !important;
        }

        a:hover {
            color: #4096ff !important;
        }

        /* ==================== 文字颜色 ==================== */
        .c_tx,
        .c_tx2,
        .c_tx3,
        .c_tx4,
        .c_tx_2 {
            color: #1d2129 !important;
        }

        .c_tx3 {
            color: #86909c !important;
        }

        /* ==================== 按钮样式 ==================== */
        .button,
        .btn-post,
        .btn-add-care-big {
            background: #1e80ff !important;
            color: #ffffff !important;
            border: none !important;
            border-radius: 20px !important;
            transition: all 0.25s ease !important;
        }

        .button:hover,
        .btn-post:hover,
        .btn-add-care-big:hover {
            background: #4096ff !important;
            box-shadow: 0 2px 8px rgba(30,128,255,0.3) !important;
        }

        /* ==================== 背景图区域 ==================== */
        #layBackground {
            background: #f5f6f7 !important;
        }

        .background-container {
            background: transparent !important;
        }

        .bgimg {
            opacity: 0.1 !important;
        }

        /* ==================== 导航菜单 ==================== */
        .col-menu,
        .nav-list,
        .nav-list-inner {
            background: transparent !important;
        }

        .col-menu a,
        .nav-list a {
            color: #4e5969 !important;
        }

        .col-menu a:hover,
        .nav-list a:hover {
            color: #1e80ff !important;
        }

        /* ==================== 侧栏固定按钮 ==================== */
        .sidebar-care-fixed,
        .sidebar-ic-fixed,
        .fixed-btn,
        .fixed-left {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 12px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
        }

        .sidebar-care-fixed a,
        .sidebar-ic-fixed a,
        .fixed-btn a,
        .fixed-left a {
            color: #4e5969 !important;
        }

        .sidebar-care-fixed a:hover,
        .sidebar-ic-fixed a:hover,
        .fixed-btn a:hover,
        .fixed-left a:hover {
            color: #1e80ff !important;
        }

        /* ==================== 返回顶部 ==================== */
        .return-top,
        #goto_top_btn {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 50% !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
            color: #86909c !important;
            transition: all 0.25s ease !important;
        }

        .return-top:hover,
        #goto_top_btn:hover {
            color: #1e80ff !important;
            border-color: #1e80ff !important;
        }

        /* ==================== 音乐播放器 ==================== */
        .music-container,
        .music-panel,
        .music-play {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 12px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
        }

        /* ==================== 红点提示 ==================== */
        .icon-red-dot,
        .message-num {
            background: #ff4d4f !important;
            color: #ffffff !important;
        }

        /* ==================== VIP标识 ==================== */
        .icon-vip,
        .qz-btn-vip,
        .qz_vip_icon_l,
        .qz_vip_icon_fla_l_7,
        .qz-f-vip-l,
        .qz-f-vip-fla-l-7 {
            color: #ff6b35 !important;
        }

        /* ==================== 等级标识 ==================== */
        .qz-level-flag,
        .qz_qzone_lv {
            color: #1e80ff !important;
        }

        /* ==================== 下拉菜单 ==================== */
        .drop-down-container,
        .nav-drop-down,
        .friends-drop-down,
        .music-drop-down,
        .vip-drop-down,
        .sync-ex-drop,
        .sync-timing-drop,
        .dress-drop-down {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1) !important;
        }

        .drop-down-container a,
        .nav-drop-down a,
        .friends-drop-down a,
        .music-drop-down a,
        .vip-drop-down a,
        .sync-ex-drop a,
        .sync-timing-drop a,
        .dress-drop-down a {
            color: #4e5969 !important;
        }

        .drop-down-container a:hover,
        .nav-drop-down a:hover,
        .friends-drop-down a:hover,
        .music-drop-down a:hover,
        .vip-drop-down a:hover,
        .sync-ex-drop a:hover,
        .sync-timing-drop a:hover,
        .dress-drop-down a:hover {
            background: #f7f8fa !important;
            color: #1e80ff !important;
        }

        /* ==================== 搜索结果 ==================== */
        .search-smart-panel,
        .smart-result-list,
        .search-drop-down {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1) !important;
        }

        .search-smart-panel .item,
        .smart-result-list .item,
        .search-drop-down .item {
            color: #4e5969 !important;
        }

        .search-smart-panel .item:hover,
        .smart-result-list .item:hover,
        .search-drop-down .item:hover {
            background: #f7f8fa !important;
            color: #1e80ff !important;
        }

        /* ==================== 设置面板 ==================== */
        .setting-box,
        .user-setting,
        .vip-setting {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1) !important;
        }

        /* ==================== 应用中心 ==================== */
        .sp-app-center,
        .main-application,
        .main-application-list {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 12px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
        }

        /* ==================== 热门话题 ==================== */
        .fn_hotTopic_v5 {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 12px !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
        }

        .fn_hotTopic_v5 .item {
            color: #4e5969 !important;
        }

        .fn_hotTopic_v5 .item:hover {
            background: #f7f8fa !important;
            color: #1e80ff !important;
        }

        /* ==================== 签到日历 ==================== */
        .ck-btn,
        .ck-day,
        .ck-title,
        .ck-count,
        .ck-count-num,
        .ck-count-word,
        .ck-time,
        .ck-flag {
            background: transparent !important;
            color: #4e5969 !important;
        }

        .ck-btn {
            background: #1e80ff !important;
            color: #ffffff !important;
            border-radius: 20px !important;
        }

        /* ==================== 活动/事件 ==================== */
        .today-wrapper,
        .before-year,
        .beforeyear-pop {
            background: #ffffff !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 12px !important;
        }

        /* ==================== 进度条 ==================== */
        .progress-bar-panel,
        .progress-bar-count,
        .progress-bar-info {
            background: #f0f1f2 !important;
            border-radius: 4px !important;
        }

        .progress-bar-count {
            background: #1e80ff !important;
        }

        /* ==================== 标签/徽章 ==================== */
        .private-label,
        .user-medal {
            background: #f0f1f2 !important;
            color: #4e5969 !important;
            border-radius: 4px !important;
        }

        /* ==================== 分割线 ==================== */
        .divide-line,
        .dividor,
        .line {
            border-color: #f0f1f2 !important;
        }

        /* ==================== 加载状态 ==================== */
        .waiting-box,
        .hot-loading {
            color: #86909c !important;
        }

        /* ==================== 提示信息 ==================== */
        .tips,
        .tips-num,
        .tipsbox {
            background: #ffffff !important;
            color: #4e5969 !important;
            border: 1px solid #e8e9eb !important;
            border-radius: 8px !important;
        }

        /* ==================== 复选框 ==================== */
        .ui-checkbox {
            border-color: #d0d0d0 !important;
        }

        .ui-checkbox-tint {
            background: #1e80ff !important;
        }

        /* ==================== 输入框通用 ==================== */
        input[type="text"],
        input[type="password"],
        input[type="search"],
        textarea {
            background: #f5f6f7 !important;
            border: 1px solid #e8e9eb !important;
            color: #1d2129 !important;
            border-radius: 8px !important;
        }

        input[type="text"]:focus,
        input[type="password"]:focus,
        input[type="search"]:focus,
        textarea:focus {
            border-color: #1e80ff !important;
            box-shadow: 0 0 0 2px rgba(30,128,255,0.1) !important;
            outline: none !important;
        }

        /* ==================== 减少动画 ==================== */
        @media (prefers-reduced-motion: reduce) {
            * {
                transition: none !important;
                animation: none !important;
            }
        }
    `);
})();
