// ==UserScript==
// @name         OpenInColab
// @namespace    https://yoyitsm3m8.github.io/userscripts#OpenInColab.user.js
// @version      1.0
// @description  Adds a button to open a .ipynb in Google Colab
// @author       YOYITsM3M8
// @match        https://github.com/*/*.ipynb
// @grant        none
// ==/UserScript==

(function() {
    var buttons = document.getElementsByClassName("BtnGroup")[1];
    var colab = document.createElement("a");
    colab.innerText = "Open in Colab";
    colab.href="https://colab.research.google.com/github"+window.location.pathname;
    colab.classList.add("btn")
    colab.classList.add("btn-sm")
    colab.classList.add("BtnGroup-item")
    buttons.appendChild(colab)
})();