<p align="right">
  <a href="#Install"><img src="https://img.shields.io/badge/Download%20for-other%20browser-lightgrey?style=flat-square"></a>
 <a href="https://addons.mozilla.org/en-GB/firefox/addon/snapfox/"><img src="https://img.shields.io/badge/Download-on%20Firefox-blueviolet?style=flat-square&logo=firefox"></a>
 <img alt="GitHub" src="https://img.shields.io/github/license/Snap-Fox/SnapFox?style=flat-square">
<img alt="Github" src="https://img.shields.io/badge/bage-vertified-sucsess?style=flat-square">
</p>
<img src="/SnapFox.png" alt="Scratch Addons logo" align="right" width="128px"></img>




# SnapFox
en extention for Snap on FireFox

# Guide

## Install

### FireFox
You can install SnapFox from the Firefox Addons (https://addons.mozilla.org) store

 <a href="https://addons.mozilla.org/en-GB/firefox/addon/snapfox/"><img src="https://img.shields.io/badge/Download-on%20Firefox-blueviolet?style=flat-square&logo=firefox"> </a>

### Chrome / Brave
Download the lastest zip version of SnapFox from https://github.com/Snap-Fox/SnapFox/releases/latest then, go to *chrome://extensions*, turn on developer mode and
load the file as a "unpacked extension" into chrome.

### Opera / Opera GX
Download the lastest zip version of SnapFox from https://github.com/Snap-Fox/SnapFox/releases/latest then, go to extensions and
load the file as a "unpacked extension" into opera.

### For dummies
Download this https://github.com/Snap-Fox/SnapFox/releases/latest then follow the video.
https://youtu.be/vW8W19W_X0I?t=107

 
## Usage
You can **only** use SnapFox on https://snap.berkeley.edu/

## UserScript
Can't install? Use the User script
```userscript
// ==UserScript==
// @name         [Snap!] Dark Theme
// @namespace    https://snap-fox.github.io-
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
