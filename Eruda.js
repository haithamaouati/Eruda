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
