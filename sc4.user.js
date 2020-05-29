// ==UserScript==
// @name         Scratch Client 4
// @namespace    http://scratch-client-4.glitch.me/
// @version      1.0
// @description  Requeired for Scratch Client 4
// @author       YOYITsM3M8
// @match        https://scratch-client-4.glitch.me/
// @match        https://sc4-editor.glitch.me/
// @updateURL    https://yoyitsm3m8/userscripts/sc4.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    console.log("SC4 Userscript Installed")
    var url = location.href;
    if (url.includes("https://scratch-client-4.glitch.me/")) {
        let userscript_on = document.getElementById("userscript-on?")
        userscript_on.innerHTML = "Userscript is installed!";
        let userscript_icon = document.getElementById("userscript-icon")
        userscript_icon.classList.remove("icon-user-x");
        userscript_icon.classList.add("icon-user-check");
    } else {
        editorHandler()
    }
    function editorHandler() {
       console.log("SC4 Editor initialized")
        GM_addStyle(".blocklyFlyoutBackground {fill: #1A1A1A;fill-opacity: .8;}")
        GM_addStyle(".blocklyFlyoutLabelText {font-family: 'Helvetica Neue', Helvetica, sans-serif;font-size: 14pt;fill: #ffffff;font-weight: bold;}")
        GM_addStyle(".blocklyFlyoutButton .blocklyText {fill: #ffffff;}")
        GM_addStyle(".scratchCategoryMenu {background: #292929;color: #ffffff}")
        GM_addStyle(".scratchCategoryMenuItem.categorySelected {background: #1a1a1a;}")
        GM_addStyle(".blocklyToolboxDiv {background-color: #1a1a1a;color: #ffffff;}")
        GM_addStyle(".blocklySvg{background-color: #1a1a1a;}");
        GM_addStyle(".gui_body-wrapper_-N0sA {background-color: #292929;}")
        GM_addStyle(".gui_tab_27Unf.gui_is-selected_sHAiu {color: #ffffff;background-color: #1a1a1a;}")
        GM_addStyle(".gui_tab_27Unf {background-color: #1b1b1b;color: #ffffff;}")
        GM_addStyle(".gui_tab_27Unf:hover {background-color: #2c2c2c;}")
        GM_addStyle(".menu-bar_menu-bar_JcuHF {background-color: #1c1c1c;color: #ffffff;}")
        GM_addStyle(".sprite-selector_sprite-selector_2KgCX {background-color: #2a2a2a;}")
        GM_addStyle(".sprite-info_sprite-info_3EyZh {background-color: #2b2b2b;color: #ffffff;}")
        GM_addStyle(".stage-selector_stage-selector_3oWOr {background-color: #2d2d2d;color: #ffffff;}")
        GM_addStyle(".stage-selector_header_2GVr1 {background-color: #2e2e2e;color: #ffffff;}")
        GM_addStyle(".stage-selector_header-title_33xCt {color: #ffffff;}")
        GM_addStyle(".stage-selector_label_1MCfr {color: #ffffff;}")
        GM_addStyle(".stage-selector_count_2QK7D {color: #ffffff;}");
        GM_addStyle(".backpack_backpack-header_6ltCS {background: #2f2f2f;color: #ffffff;}")
        GM_addStyle(".selector_wrapper_8_BHs {background: #1c1d1c;}")
        GM_addStyle(".sprite-selector-item_is-selected_24tQj .sprite-selector-item_sprite-info_-I0i_ {background: #2b2b2b;color: #ffffff;}")
        GM_addStyle(".sprite-selector-item_sprite-selector-item_kQm-i:hover {border: 2px solid #3c3c3c;background: #3b3b3b;}")
        GM_addStyle(".asset-panel_wrapper_366X0 {background: #3a3a3a;}")
        GM_addStyle("span.label_input-label_1s1ft {color: white;}")
        GM_addStyle(".paint-editor_row_1oLDq {color: white;}")
        GM_addStyle(".stage_stage-wrapper-overlay_fmZuD.box_box_2jjDp {background-color: #4c4c4c;}")
        GM_addStyle(".stage-header_stage-header-wrapper-overlay_5vfJa.box_box_2jjDp {background-color: #3c3c3c;}")
    }
})();
