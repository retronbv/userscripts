// ==UserScript==
// @name         Turbowarp Scratch Mod
// @namespace    YOYITsM3M8
// @version      2.1
// @icon		 https://avatars0.githubusercontent.com/u/67349469?s=200&v=4
// @description  adds a "View in Turbowarp" button next to see inside
// @author       YOYITsM3M8
// @match        https://scratch.mit.edu/projects/*
// @homepageURL  https://github.com/yoyitsm3m8/userscripts
// @supportURL   https://github.com/yoyitsm3m8/userscripts/issues/new/choose
// @updateURL    https://yoyitsm3m8.github.io/userscripts/TurbowarpScratchMod.user.js
// @grant        none
// ==/UserScript==

(function() {
    console.log("Turbowarp Scratch Mod (c) 2020 YOYITsM3M8 has loaded");
    var current_url = document.location; // get url
    var id = current_url.href.split('/')[4]; // get project id from url
    function check() { // check if page loaded
        const el = document.querySelector('.project-buttons');
        try {
            if (el.classList[0] == "project-buttons") {
                console.log("element load")
                var turbobtn = document.createElement("button")
                turbobtn.classList.add("button")
                turbobtn.classList.add("button")
                turbobtn.classList.add("turbowarp-button")
                turbobtn.style="display: inline-block;margin: .5em 0;border: 0;border-radius: .5rem;background-color: hsla(0, 100%, 65%, 1);cursor: pointer;margin-left: .5em;color: white;font-size: .8rem;font-weight: bold;"
                var txt = document.createElement("a");
                txt.href="https://turbowarp.org#"+id
                txt.style="color: white;font-size: .875rem;font-weight: bold;"
                var node = document.createTextNode("View in Turbowarp");
                txt.appendChild(node)
                turbobtn.appendChild(txt)
                el.appendChild(turbobtn)
            } else {
                setTimeout(check, 300); // try again in 300 milliseconds
            }
        }
        catch(err) {setTimeout(check, 300);/* try again in 300 milliseconds */}
    }
    function check2() { // check if page loaded
        const el = document.querySelector('.menu-bar_main-menu_3wjWH');
        try {
            if (el.classList[0] == "menu-bar_main-menu_3wjWH") {
                console.log("element load")
                var turbobtn = document.createElement("div")
                turbobtn.classList.add("menu-bar_menu-bar-item_oLDa-")
                var btninside = document.createElement("span");
                btninside.classList.add("button_outlined-button_1bS__");
                btninside.classList.add("menu-bar_menu-bar-button_3IDN0");
                btninside.classList.add("community-button_community-button_2Lo_g");
                btninside.style="background-color: hsla(0, 100%, 65%, 1);";
                btninside.role = "button"
                var btncontent = document.createElement("div");
                btncontent.classList.add("button_content_3jdgj");
                var span = document.createElement("a");
                span.href="https://turbowarp.org/editor.html#"+id;
                span.style="color: white;font-size: 0.75rem;font-weight: bold;";
                var node = document.createTextNode("Edit in Turbowarp");
                span.appendChild(node);
                btncontent.appendChild(span);
                btninside.appendChild(btncontent);
                turbobtn.appendChild(btninside);
                el.appendChild(turbobtn);
                console.log(turbobtn);
            } else {
                setTimeout(check2, 300); // try again in 300 milliseconds
            }
        }
        catch(err) {setTimeout(check2, 300);/* try again in 300 milliseconds */}
    }

    if (document.location.href.split("/")[5] == "editor") {
        check2() //run check at script start
    } else {
        check()
    }

})();
