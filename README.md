# Eruda
**Eruda** Console for Mobile Browsers.

![eruda](https://raw.githubusercontent.com/haithamaouati/Eruda/main/eruda.jpeg)

## Demo 
Browse it on your phone: https://eruda.liriliri.io/

In order to try it for different sites, execute the script below on [Via](https://viayoo.com/en/) browser

###### Userscript
```javascript
// ==UserScript==
// @name         Eruda
// @namespace    https://eruda.liriliri.io/
// @version      0.1
// @description  Console for mobile browsers
// @author       Haitham Aouati
// @run-at       document-start
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/eruda";
    document.body.append(script);
    
    script.onload = function() {
        eruda.init();
    };
})();
```
