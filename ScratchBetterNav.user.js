// ==UserScript==
// @name         ScratchBetterNav
// @namespace    https://github.com/YOYITsM3M8/ScratchBetterNav
// @version      1.0
// @description  Gets rid of 'about' and 'ideas' and replaces with 'discuss' and 'wiki'
// @author       You
// @match        https://*.scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Better Nav (c) YOYITsM3M8 2020")
    if (location.href == "https://scratch.mit.edu/") {
        let ideas = document.getElementsByClassName("link ideas")[0]
        let about = document.getElementsByClassName("link about")[0]
        ideas.innerHTML = "<li class='link ideas' style='position:relative;top:-10px;'><a href='/discuss'><span>Discuss</span></a></li>"
        about.innerHTML = "<li class='link about' style='position:relative;top:-10px;'><a href='https://scratch-wiki.info'><span>Wiki</span></a></li>"
    } else {
        if (location.href == "https://scratch.mit.edu/messages") {
            let ideas = document.getElementsByClassName("link ideas")[0]
            let about = document.getElementsByClassName("link about")[0]
            ideas.innerHTML = "<li class='link ideas' style='position:relative;top:-10px;'><a href='/discuss'><span>Discuss</span></a></li>"
            about.innerHTML = "<li class='link about' style='position:relative;top:-10px;'><a href='https://scratch-wiki.info'><span>Wiki</span></a></li>"
        } else {
            let t_f = location.href.includes("https://scratch.mit.edu/search/")
            if (t_f) {
                let ideas = document.getElementsByClassName("link ideas")[0]
                let about = document.getElementsByClassName("link about")[0]
                ideas.innerHTML = "<li class='link ideas' style='position:relative;top:-10px;'><a href='/discuss'><span>Discuss</span></a></li>"
                about.innerHTML = "<li class='link about' style='position:relative;top:-10px;'><a href='https://scratch-wiki.info'><span>Wiki</span></a></li>"
            } else {
                let t_f = location.href.includes("https://scratch.mit.edu/projects/")
                if (t_f) {
                    let ideas = document.getElementsByClassName("link ideas")[0]
                    let about = document.getElementsByClassName("link about")[0]
                    ideas.innerHTML = "<li class='link ideas' style='position:relative;top:-10px;'><a href='/discuss'><span>Discuss</span></a></li>"
                    about.innerHTML = "<li class='link about' style='position:relative;top:-10px;'><a href='https://scratch-wiki.info'><span>Wiki</span></a></li>"
                } else {
                    let nav = document.getElementsByClassName("site-nav")[0]
                    let nodes = nav.childNodes
                    let ideas = nodes[3]
                    let about = nodes[4]
                    ideas.innerHTML = "<li><a href='/discuss'>Discuss</a></li>"
                    about.innerHTML = "<li><a href='https://scratch-wiki.info'>Wiki</a></li>"
                }
            }
        }
    }
})();
