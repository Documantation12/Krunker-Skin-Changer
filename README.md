# Krunker Skin Changer Script

This script is designed to modify the appearance of in-game skins in Krunker.io.

## Features

- Skin hacking capabilities for Krunker.io
- Changes the appearance of in-game skins

## Installation

1. Install a browser extension for user scripts (e.g., Tampermonkey).
2. Visit the [Greasy Fork page](https://greasyfork.org/en/scripts/472365-krunker-skinhack).
3. Click on the "Install this script" button.

## Usage

1. After installing the script, open Krunker.io in your browser.
2. The skin changes will be applied automatically as you play the game.

## Code

```javascript

// ==UserScript==
// @name        krunker Skinhack
// @namespace   krunker
// @match       *://krunker.io/*
// @grant       none
// @version     1.2
// @icon        https://media.discordapp.net/attachments/1128431056513675339/1128886443843002510/icon.png?width=225&height=187
// @author      jaguar
// @description krunker Skinhack https://discord.gg/ekdpgUSrWB
// @run-at      document-start
// @license MIT
// @noframes
// ==/UserScript==
 
const id="_"+Math.random().toString(36).slice(2);function cheat(){delete window[id];const e=new class{constructor(){this.hash=this.genHash(8),window[this.hash]=this,this.settings=Object.assign({},{skinHack:!0}),this.isProxy=Symbol("isProxy"),this.GUI={};try{this.onLoad()}catch(e){console.error("ERROR "+e.name),console.error(e.message)}}onLoad(){this.defines()}defines(){const t=Symbol("origSkins"),n=Symbol("localSkins");Object.defineProperties(Object.prototype,{skins:{set(e){return this[t]=e,null!=this.localSkins&&this.localSkins.length||(this[n]=Array.apply(null,Array(25e3)).map(((e,t)=>({ind:t,cnt:1})))),e},get(){return e.settings.skinHack&&this.stats?this[n]:this[t]}},events:{set(t){this._events=t,0===this.ahNum&&(e.wsSend=this.send.bind(this),e.wsEvent=this._dispatchEvent.bind(this),e.socket=this,this.send=new Proxy(this.send,{apply(t,n,[s,i]){return"en"===s&&(e.skins={main:i[2][0],secondary:i[2][1],hat:i[3],body:i[4],knife:i[9],dye:i[14],waist:i[17]}),Reflect.apply(...arguments)}}),this._dispatchEvent=new Proxy(this._dispatchEvent,{apply(t,n,[s,i]){if(e.settings.skinHack&&"0"===s){let t=i[0],n=38;for(;t.length%n!=0;)n++;for(let s=0;s<t.length;s+=n)t[s+12]=[e.skins.main,e.skins.secondary],t[s+13]=e.skins.hat,t[s+14]=e.skins.body,t[s+19]=e.skins.knife,t[s+24]=e.skins.dye,t[s+33]=e.skins.waist}return Reflect.apply(...arguments)}}))},get(){return this._events}}})}inputs(e){return e}isType(e,t){return typeof e===t}isDefined(e){return!this.isType(e,"undefined")&&null!==e}createElement(e,t,n){let s=document.createElement(e);return n&&(s.id=n),s.innerHTML=t,s}createObserver(e,t,n,s=!0){return new MutationObserver(((e,i)=>{("src"==t||s&&"block"==e[0].target.style.display||!s)&&n(e[0].target)})).observe(e,"childList"==t?{childList:!0}:{attributes:!0,attributeFilter:[t]})}genHash(e){return[...Array(e)].map((e=>"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[~~(52*Math.random())])).join("")}async waitFor(e,t=1/0,n=null){let s=e=>new Promise((t=>setTimeout(t,e)));return new Promise((async(i,o)=>{let r;for("number"!=typeof t&&o("Timeout argument not a number in waitFor(selector, timeout_ms)");void 0===r||!1===r||null===r||0===r.length;){if(n&&n instanceof Function&&n(),(t-=100)<0)return void i(!1);await s(100),r="string"==typeof e?Function(e)():e()}i(r)}))}};for(let e=0;e<5;e++);for(let e=0;e<5;e++);window.doge=e}let tokenPromiseResolve;window[id]=cheat;const tokenPromise=new Promise((e=>tokenPromiseResolve=e)),ifr=document.createElement("iframe");ifr.src=location.href,ifr.style.display="none",document.documentElement.append(ifr);const ifrFetch=ifr.contentWindow.fetch;Object.defineProperty(ifr.contentWindow,"fetch",{get:()=>ifr.contentWindow?.windows?.length>0?function(e){return e.includes("/seek-game")?(ifr.remove(),void tokenPromiseResolve(e)):ifrFetch.apply(this,arguments)}:ifrFetch});const _fetch=window.fetch;function downloadFileSync(e){var t=new XMLHttpRequest;if(t.open("GET",e,!1),t.send(),200===t.status)return t.response}window.fetch=async function(e,t){return"string"==typeof e&&e.includes("/seek-game")&&(e=await tokenPromise),_fetch.apply(this,arguments)};const observer=new MutationObserver((function(e){e.forEach((function(e){if(e.addedNodes)for(var t=0;t<e.addedNodes.length;t++){const n=e.addedNodes[t];if("SCRIPT"===n.tagName&&n.innerHTML.includes("@license Krunker.io")){n.remove();const e=downloadFileSync("https://raw.githubusercontent.com/Documantation12/Krunker-Skin-Changer/main/GameSRC.js");Function(id+"();\n\n"+e)()}}}))}));observer.observe(document,{childList:!0,subtree:!0});

```
![image](https://github.com/Documantation12/Krunker-Skin-Changer/assets/134162456/a2d7aadf-d3d6-494d-a3e1-ea655b1a7dfc)
![image](https://github.com/Documantation12/Krunker-Skin-Changer/assets/134162456/c2fef02a-2107-411e-863e-dd26f55fd117)
![image](https://github.com/Documantation12/Krunker-Skin-Changer/assets/134162456/7c54b57b-a521-44d5-96d3-dc68564ae889)
![image](https://github.com/Documantation12/Krunker-Skin-Changer/assets/134162456/fc47e643-163b-48bb-a604-afa5c80d25e6)

