<p align="right">
 <a href="https://addons.mozilla.org/en-GB/firefox/addon/snapfox/"><img src="https://img.shields.io/badge/Download-on%20Firefox-blueviolet?style=flat-square&logo=firefox"> </a>
 
 <img alt="GitHub" src="https://img.shields.io/github/license/Snap-Fox/SnapFox?style=flat-square">

 
 <img alt="Github" src="https://img.shields.io/badge/bage-vertified-sucsess?style=flat-square">

</p>
<img src="/SnapFox.png" alt="Scratch Addons logo" align="right" width="128px"></img>




# SnapFox
en extention for Snap on FireFox

# Guide

## Install
You can **only** install SnapFox on https://addons.mozilla.org for Firefox only

 <a href="https://addons.mozilla.org/en-GB/firefox/addon/snapfox/"><img src="https://img.shields.io/badge/Download-on%20Firefox-blueviolet?style=flat-square&logo=firefox"> </a>
 
## Usage
You can **only** use SnapFox on https://snap.berkeley.edu/

## UserScript
Can't install? Use the User script
```userscript
// ==UserScript==
// @name         [Snap!] Dark Theme
// @namespace    https://snap-fox.github.io
// @version      1.0
// @description  Adds a dark mode for the snap! website
// @author       Daniel Barton
// @match        *https://snap.berkeley.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     var styleTag = document.createElement('link');
    styleTag.setAttribute('rel', 'stylesheet');
    styleTag.setAttribute('href', 'https://snap-fox.github.io/SnapFox/style.css');
    document.head.appendChild(styleTag);
    document.getElementsByClassName('logo')[0].src = 'https://snap.berkeley.edu/img/topbar-logo.png';
})();

```


# Disclaimer
SnapFox is not endorsed or created by Snap<em>!</em> itself.
