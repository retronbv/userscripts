// ==UserScript==
// @name         Github Userscript Install
// @namespace    http://github.com/YOYITsM3M8/userscripts/git-userscript-install.user.js/
// @version      1.0
// @description  adds a userscript install button to quickly add the file to your userscript browser extention!
// @author       YOYITsM3M8
// @match        https://github.com/*/*/*/*/*.user.js
// @updateURL    https://yoyitsm3m8/userscripts/git-userscript-install.user.js
// @grant        none
// ==/UserScript==
(function() {
    var current_url = document.location;
    var username = current_url.href.split('/')[3];
    var repo = current_url.href.split('/')[4];
    var branch = current_url.href.split('/')[6];
    var filename = current_url.href.split('/')[7];
    var new_url = "https://www.github.com/" + username + "/" + repo + "/raw/" + branch + "/" + filename ;
    var buttons = document.querySelectorAll("div.BtnGroup")[2];
    var para = document.createElement("a");
    para.id = "raw-url";
    para.classList.add("btn")
    para.classList.add("btn-sm")
    para.classList.add("BtnGroup-item")
    para.href = new_url
    var node = document.createTextNode("Install Userscript");
    para.appendChild(node);
    buttons.appendChild(para);
})();
