// ==UserScript==
// @name         Github Userscript Install
// @namespace    http://github.com/YOYITsM3M8/userscripts/git-userscript-install.user.js/
// @version      2.o
// @description  adds a userscript install button to quickly add the file to your userscript browser extention!
// @author       YOYITsM3M8
// @match        https://github.com/*.user.js
// @updateURL    https://yoyitsm3m8/userscripts/git-userscript-install.user.js
// @grant        none
// ==/UserScript==
(function() {
    var buttons = document.getElementsByClassName("BtnGroup")[0];
    var raw = buttons.childNodes[2]
    raw.innerText = "Install Userscript";
})();
