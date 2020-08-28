// ==UserScript==
// @name         Turbowarp Scratch Mod
// @namespace    YOYITsM3M8
// @version      1.0
// @description  adds a "View in Turbowarp" button next to see inside
// @author       YOYITsM3M8
// @match        https://scratch.mit.edu/projects/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
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
    check() //run check at script start
})();