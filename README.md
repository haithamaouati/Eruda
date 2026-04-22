# Eruda
**Eruda** Console for Mobile Browsers.

![eruda](https://raw.githubusercontent.com/haithamaouati/Eruda/main/eruda.jpeg)

## Demo 
Browse it on your phone: https://eruda.liriliri.io/

Usage Instructions for [Via](https://viayoo.com/en/) Browser

1. ​Open Via Browser.
2. ​Navigate to `Settings` > `Scripts`.
3. Click `New Script`.
4. Paste the code provided below and save.
5. ​Upon visiting any website, a semi-transparent `gear` icon will appear in the bottom corner; tap it to access the Console, Elements, Network, and Resource tabs.

Usage Instructions for [Soul](https://play.google.com/store/apps/details?id=com.mycompany.app.soulbrowser&hl=en) Browser

1. ​Open Soul Browser.
2. ​Navigate to `Settings` > `Web content`.
3. Enable `Use UserScript`.
4. Go to `UserScript list`.
5. Click `+` > `URL`.
6. Paste the code provided below and save.
7. ​Upon visiting any website, a semi-transparent `gear` icon will appear in the bottom corner; tap it to access the Console, Elements, Network, and Resource tabs.

###### Userscript
```javascript
// ==UserScript==
// @name         Eruda
// @namespace    https://eruda.liriliri.io/
// @version      1.0
// @description  Console for mobile browsers
// @author       Haitham Aouati
// @run-at       document-end
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /**
     * Injects the Eruda library and initializes the console.
     */
    function initEruda() {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda';
        script.onload = function () {
            eruda.init();
        };
        document.head.appendChild(script);
    }

    // Execution check to avoid multiple instances
    if (window.top === window.self) {
        initEruda();
    }
})();
```

Import script from URL:
```
https://raw.githubusercontent.com/haithamaouati/Eruda/refs/heads/main/Eruda.js
```
