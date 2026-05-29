// ==UserScript==
// @name         QzoneCleaner
// @namespace    https://github.com/YiyuMeowzZ/QzoneCleaner
// @version      1.1
// @description  QQ空间净化
// @author       YiyuMeowzZ
// @match        http*://user.qzone.qq.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

function rmClass(clsName) {
    try { document.getElementsByClassName(clsName)[0].style.display = 'none'; }
    catch (e) { console.log(e.name + ':' + e.message) }
}
function rmID(idName) {
    try { document.getElementById(idName).style.display = 'none'; }
    catch (e) { console.log(e.name + ':' + e.message) }
}

function setStyle(selector, styles) {
    try {
        var els = document.querySelectorAll(selector);
        for (var i = 0; i < els.length; i++) {
            for (var key in styles) {
                els[i].style.setProperty(key, styles[key], 'important');
            }
        }
    } catch (e) { console.log(e) }
}

(function () {
    'use strict';

    // 隐藏广告和推广
    rmClass("qz-grid");
    rmClass("ke_gray");
    rmClass("vip-setting");
    rmClass("mod-side-nav mod-side-nav-recently-used");
    rmID("tb_app_li");

    // 顶部导航栏 - 毛玻璃效果
    setStyle('.top-fix-bar', { 'background-color': 'rgba(223,223,223,0.36)' });
    setStyle('.top-fix-inner', { 'background-color': 'rgba(223,223,223,0.36)' });

    // 导航链接
    setStyle('.head-nav .head-nav-menu li a', { 'color': '#079db8', 'font-weight': 'bold' });

    // 导航栏背景
    setStyle('.head-nav', { 'border-radius': '10px', 'background-color': 'rgba(255,255,255,0.73)' });

    // 说说卡片
    setStyle('.feed-v9 .f-single', { 'background-color': 'rgba(255,255,255,0.73)', 'border-radius': '10px' });

    // 侧栏
    setStyle('.mod-side-nav', { 'margin-bottom': '12px', 'border-radius': '10px', 'background-color': 'rgba(255,255,255,0.73)', 'color': '#0f464c' });
    setStyle('.mod-side-nav a', { 'color': '#0f464c' });

    // 侧栏选中/悬停
    setStyle('.mod-side-nav .current .qz-grid', { 'background-color': 'rgba(255,255,255,0.73)', 'border-radius': '10px' });
    setStyle('.mod-side-nav li:hover .qz-grid', { 'background-color': 'rgba(255,255,255,0.73)', 'border-radius': '10px' });
    setStyle('.top-toggle:hover', { 'background-color': 'rgba(255,255,255,0.73)', 'border-radius': '10px' });

    // 说说刷新栏
    setStyle('.fn-feed-control-v2', { 'background-color': 'rgba(255,255,255,0.73)', 'border-radius': '10px' });
    setStyle('.fn-feed-control-v2 .feed-control-tab .item-on-slt', { 'background': 'none' });
    setStyle('.fn-feed-control-v2 .feed-control-tab .item-on', { 'border-style': 'none' });
    setStyle('.fn-feed-control-v2 .control-inner', { 'border-color': 'transparent' });

    // 隐藏黄钻
    setStyle('.layout-head .user-vip-info', { 'display': 'none' });
    setStyle('.layout-head .head-detail-info .detail-info-con', { 'display': 'none' });
    setStyle('.layout-head .head-detail-info .detail-info-level', { 'display': 'none' });

    // 签到
    setStyle('.fn-checkin-btn .checkin-btn', { 'border-radius': '10px' });
    setStyle('.fn-checkin-btn', { 'border-radius': '10px' });

                // 访客模块
    setStyle('.icenter-right-mod', { 'background-color': 'rgba(255,255,255,0.73)', 'border-radius': '10px' });
    setStyle('.visit-module', { 'display': 'none' });
    setStyle('.visit-module .visit-refuse', { 'display': 'none' });
    setStyle('.visit-module .visit-count', { 'display': 'none' });
    setStyle('.visit-module .other-info', { 'display': 'none' });
    setStyle('.visit-module .count-wrapper', { 'display': 'none' });
    setStyle('.visit-module .today-wrapper', { 'display': 'none' });

    // 动态隐藏访客模块（处理异步加载）
    function hideVisitModule() {
        var visitModule = document.querySelector('.visit-module');
        if (visitModule) {
            visitModule.style.display = 'none';
            console.log('QzoneCleaner: 访客模块已隐藏');
        }
    }
    // 立即尝试隐藏
    hideVisitModule();
    // 监听DOM变化
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                hideVisitModule();
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // 主页背景覆盖
    setStyle('.lay_background', { 'background-image': 'none' });
    setStyle('.background-container', { 'background': 'none' });

    // 自定义背景 - 使用二次元壁纸API
    setStyle('body', {
        'background-position': 'center',
        'background-attachment': 'fixed',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-image': 'url("https://www.loliapi.com/acg/pc/")'
    });

    console.log('QzoneCleaner v1.0 已加载');
})();
