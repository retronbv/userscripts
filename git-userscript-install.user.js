// ==UserScript==
// @name         Github Userscript Install
// @namespace    http://github.com/retronbv/userscripts/git-userscript-install.user.js/
// @version      3.0
// @description  adds a userscript install button to quickly add the file to your userscript browser extention!
// @author       retronbv
// @match        https://github.com/*.user.js
// @downloadURL    https://retronbv.github.io/userscripts/git-userscript-install.user.js
// @updateURL    https://retronbv.github.io/userscripts/git-userscript-install.user.js
// @grant        none
// ==/UserScript==
(function() {
    var buttons = document.getElementsByClassName("BtnGroup")[1];
    var raw = buttons.childNodes[1]
    raw.innerText = "Install Userscript";
})();
