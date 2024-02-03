// inject the script into the page since we need to access the monaco global variable
const s = document.createElement('script');
s.src = chrome.runtime.getURL('scripts/add-syntax.js');
s.onload = function () { this.remove(); };
(document.head || document.documentElement).appendChild(s);