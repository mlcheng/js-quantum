/***********************************************

  "quantum.js"

  Created by Michael Cheng on 02/04/2016 21:46
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/
"use strict";function _toConsumableArray(r){if(Array.isArray(r)){for(var n=0,e=Array(r.length);n<r.length;n++)e[n]=r[n];return e}return Array.from(r)}function _defineProperty(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}var _slicedToArray=function(){function r(r,n){var e=[],t=!0,i=!1,o=void 0;try{for(var a,f=r[Symbol.iterator]();!(t=(a=f.next()).done)&&(e.push(a.value),!n||e.length!==n);t=!0);}catch(c){i=!0,o=c}finally{try{!t&&f["return"]&&f["return"]()}finally{if(i)throw o}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return r(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),iqwerty=iqwerty||{};iqwerty.binding=function(){function r(r){G.hasOwnProperty(r[D])||(G[r[D]]={})}function n(r,n){var e;G[r[D]].hasOwnProperty(n)||(G[r[D]][n]=(e={},_defineProperty(e,w,r[n]),_defineProperty(e,L,[]),_defineProperty(e,O,[]),e))}function e(r,n,e,t){var i=G[r[D]][n];if(e&&e.forEach(function(e){var t=f(r,n,e[T]);if(t){var o;e[x]=e[x].filter(function(r){return~~t[x].indexOf(r)}),t[x]=(o=t[x]).concat.apply(o,_toConsumableArray(e[x]))}else{var a;i[L]=i[L].concat((a={},_defineProperty(a,T,e[T]),_defineProperty(a,x,e[x]),a));var c=Object.keys(W).find(function(r){return!!e[T].parentElement.querySelector(r)});c&&W[c][S].forEach(function(t){e[T].addEventListener(t,function(){r[n]=e[T][W[c][w]]})}),d(e[T])}}),t){var o;i[O]=(o=i[O]).concat.apply(o,_toConsumableArray(t))}}function t(r,n,e){G[r[D]][n][w]=e}function i(r,n){return G[r[D]][n][w]}function o(r,n,e){G[r[D]][n][L].forEach(function(r){r[x].forEach(function(n){r[T][n]!==e&&(r[T][n]=e)})})}function a(r,n,e,t){e!==t&&G[r[D]][n][O].forEach(function(r){r(e,t)})}function f(r,n,e){return G[r[D]][n][L].find(function(r){return r[T]===e})}function c(r){r.hasOwnProperty(D)||(r[D]=F++)}function u(r,n){c(n),J[r]=n}function y(r){return J[r]}function l(r,n){Object.defineProperty(r,n,{get:function(){return i(r,n)},set:function(e){var f=i(r,n);t(r,n,e),o(r,n,e),a(r,n,e,f)}})}function d(r){r.classList.add(H)}function p(r){r.classList.remove(k)}function s(r,n){return Array.from(n.querySelectorAll("*")).find(function(n){return!n.firstElementChild&&n.textContent===r})||n}function v(r){var n=r.dataset.iqBind,e="{ *?"+(n?R:I)+" *?}",t=r.innerHTML;t=t.replace(new RegExp(e,"g"),function(n){var e=s(n,r);return e.classList.contains(k)?n:'<span class="'+k+'">'+n+"</span>"}),r.innerHTML!==t&&(r.innerHTML=t)}function h(r){var n=r.dataset.iqBind,e="{ *?"+(n?R:I)+" *?}",t=r.querySelectorAll("."+k);return Array.from(t).map(function(r){var t,i;e=new RegExp(e,"g");var o=e.exec(r.innerHTML),a=y(n||o[1].trim());if(a)return p(r),i={},_defineProperty(i,M,a),_defineProperty(i,j,n?o[1].trim():o[2].trim()),_defineProperty(i,L,(t={},_defineProperty(t,T,r),_defineProperty(t,x,["innerHTML"]),t)),i})}function _(){var r=document.querySelectorAll("["+B+"]:not(."+H);Array.from(r).forEach(function(r){var n=r.dataset.iqBindTo.split(";");n.forEach(function(n){var e,t=n.split(":"),i=t[0].split(",");i=i.map(function(r){return r.trim()});var o=t[1].split("."),a=_slicedToArray(o,2),f=a[0],c=a[1],u=y(f);u&&m(u,c,(e={},_defineProperty(e,T,r),_defineProperty(e,x,i),e))})})}function P(){var r=document.querySelectorAll("["+C+"]");Array.from(r).forEach(function(r){var n=r.dataset.iqBind.split("."),e=_slicedToArray(n,2),t=e[0],i=e[1];if(i){var o;if(r.classList.contains(""+H))return;var a=y(t);if(!a)return;m(a,i,(o={},_defineProperty(o,T,r),_defineProperty(o,x,["innerHTML"]),o))}else{if(r.querySelector("."+H)&&!r.querySelector("."+k))return;v(r);var f=z(h(r));f.forEach(function(r){m(r[M],r[j],r[L])})}})}function m(t,i,a,f){a=Array.isArray(a)?a:z([a]),f=Array.isArray(f)?f:z([f]),c(t),r(t),n(t,i),e(t,i,a,f),l(t,i),o(t,i,t[i])}function A(r,n,e){m(r,n,null,e)}function b(n){Object.keys(n).forEach(function(e){u(e,n[e]),r(n[e])}),"undefined"!=typeof document&&(_(),P())}var q,g,E,w="value",L="bindings",T="el",x="attrs",O="watchers",S="changer",M="obj",j="prop",H="iq-binding",k="iq-binding-incomplete",B="data-iq-bind-to",C="data-iq-bind",R="([^.}]+)",I=R+"."+R,W={"input:not([type=checkbox])":(q={},_defineProperty(q,S,["change","input"]),_defineProperty(q,w,"value"),q),"input[type=checkbox]":(g={},_defineProperty(g,S,["change","input"]),_defineProperty(g,w,"checked"),g),textarea:(E={},_defineProperty(E,S,["change","input"]),_defineProperty(E,w,"value"),E)},z=function(r){return r.filter(function(r){return!!r})},D="__id",F=1,G={},J={};return{Bind:m,Watch:A,Model:b}}();
"use strict";var iqwerty=iqwerty||{};iqwerty.dragdrop=function(){function t(t){function n(){d.classList.add(e)}function i(){d.classList.remove(e)}function r(t){t.stopPropagation(),t.preventDefault(),n()}function o(t){t.stopPropagation(),t.preventDefault(),i()}function a(t){o(t);var e=t.target.files||t.dataTransfer.files;e=[].slice.call(e),"function"==typeof s&&s(e),e=null}window.File&&window.FileList&&window.FileReader||console.log("File upload not supported");var d=document.getElementById(t);d.addEventListener("dragover",r.bind(this)),d.addEventListener("dragleave",o.bind(this)),d.addEventListener("drop",a.bind(this));var s=null;return this.setOnDropCallback=function(t){s=t},this}var e="iqwerty_dragdrop_over";return{DragDrop:t}}();
"use strict";var iqwerty=iqwerty||{};iqwerty.history=function(){function t(t,n){this.state=t,this.$$length=n}function n(t,n,e){return t=s()+(h===c?c:"")+t,n=n||document.title,e=e||null,window.history.pushState?void(a()!==t&&(window.history.pushState(e,n,t),i())):console.error("History API not supported")}function e(){window.history.back()}function r(n,e){e&&(h=e.base),t.prototype.States=n,i(),window.addEventListener("popstate",function(){i()})}function i(){var n=t.prototype.States,e=o(n);if(e){var r=e.state.split(":")[0];r=l().split(r)[1],n[e.state](r||void 0),n=null,e=null,r=null}}function o(n){var e=Object.keys(n).map(function(n){if(""===n)return new t(n,0);var e=n.split(":")[0],r=0===l().indexOf(e)?e.length:-1;return new t(n,r)}).reduce(function(t,n){return-1===t.$$length?null:t.$$length>=n.$$length?t:n});return l()&&-1===e.$$length?(console.warn("Current state is unhandled"),null):e}function u(){return window.location.pathname}function s(){return h===c?u():h}function l(){var t;return h===c?(t=window.location.hash,t=t.split(c)[1]):t=u().split(s())[1],t?("/"===t.substr(-1)&&(t=t.substring(0,t.length-1)),t):""}function a(){return s()+l()}var c="#!/",h=c;return t.prototype.States={},{Push:n,Pop:e,States:r}}();
"use strict";function $http(t){function n(t,n,c){var i,s=new XMLHttpRequest;if(t===o.GET?(n=function(t,n){if(!n)return t;var o=t+"?",r=0;for(var e in n)n.hasOwnProperty(e)&&(r++&&(o+="&"),o+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]));return o}(n,c),i=null):(i=new FormData,Object.keys(c).forEach(function(t){i.append(t,c[t])})),t===o.GET){var a=iqwerty.http.Cache().getCache(n);if(null!=a)return"function"==typeof e.onLoad?e.onLoad(a):void 0}"function"==typeof e.onLoadStart&&(s.onloadstart=function(){e.onLoadStart(this.readyState)}),"function"==typeof e.onProgress&&(s.upload.onprogress=function(t){e.onProgress(t)}),"function"==typeof e.onError&&(s.onerror=function(){e.onError(this.status)}),s.onload=function(){u.cache&&t===o.GET&&iqwerty.http.Cache().setCache(n,this.response),"function"==typeof e.onLoad&&(this.status===r.OK?e.onLoad(this.response):"function"==typeof e.onError&&e.onError(this.status)),s=null,i=null,e=null},s.open(t,n,!0),s.send(i)}var o={GET:"get",POST:"post",PUT:"put",DELETE:"delete"},r={OK:200},e={},u={};return{cache:function(){return u.cache=!0,this},begin:function(t){return e.onLoadStart=t,this},progress:function(t){return e.onProgress=t,this},success:function(t){return e.onLoad=t,this},error:function(t){return e.onError=t,this},get:function(r){return n(o.GET,t,r)},post:function(r){return n(o.POST,t,r)},put:function(r){return n(o.PUT,t,r)},"delete":function(r){return n(o.DELETE,t,r)}}}var iqwerty=iqwerty||{};iqwerty.http=function(){function t(){var n={},o=t.prototype.cached;return n.getCache=function(t){return o[t]},n.setCache=function(t,r){null==n.getCache(t)&&(o[t]=r)},n}return t.prototype.cached={},{Request:$http,Cache:t}}();
"use strict";var iqwerty=iqwerty||{};iqwerty.template=function(){function e(){setTimeout(function(){var e=document.querySelectorAll("["+n+"]");[].slice.call(e).forEach(function(e){var n=e.dataset.iqTemplateSrc,r=e.dataset.iqTemplateLoaded;r=window[r],t(n,r,e)})},0)}function t(e,t,n){return"undefined"==typeof $http?console.log("The $http library is required. Get it here https://github.com/mlcheng/js-http"):void $http(e).success(function(e){n&&n.insertAdjacentHTML("afterbegin",e),"function"==typeof t?t(e):null!=t&&console.error("Your callback is not defined")}).error(function(){return console.warn("Could not retrieve template")}).cache().get()}var n="data-iq-template-src";return{GetTemplates:e,GetTemplate:t}}(),document.addEventListener("DOMContentLoaded",iqwerty.template.GetTemplates);
"use strict";function Test(t){function e(e){var o={};return o.to=function(o){Promise.resolve(e).then(function(e){Test.prototype.showResult(t,o,e,n)})},o.toBe=o.to,o.toHave=o.to,o}var n,o={};return o.using=function(t){return n=t,o},o["do"]=function(t){return"function"==typeof t&&t(),o},o.expect=function(t){return new e(t)},o.assert=o.expect,o}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};Test.prototype.output=null,Test.prototype.hidePassed=!1,Test.prototype.showResult=function(t,e,n,o){var r=Test.prototype.createResult(t,e,n,o||Test.ValidationFunction.EQUALS);null!==r&&(Test.prototype.output?Test.prototype.output.appendChild(r):console.log(r))},Test.prototype.getResult=function(t,e,n){return t.call(void 0,e,n)},Test.prototype.createResult=function(t,e,n,o){var r=Test.prototype.getResult(o,e,n)===!0;if(Test.prototype.hidePassed&&r)return null;var u=Test.prototype.output?{wrapperBegin:"<strong>",wrapperEnd:"</strong>",newLine:"<br>",separator:""}:{wrapperBegin:'"',wrapperEnd:'"',newLine:"\n  >> ",separator:"\n-------------------------------------\n\n"},i="";o!==Test.ValidationFunction.EQUALS&&(i=" (using custom validation function)");var p,s=u.separator+"Testing: "+t+i+u.newLine;if(r?(s+="[✔] Passed!",p="#c8e6c9"):(s+="[✖] Failed. Expected "+u.wrapperBegin+e+u.wrapperEnd+" ("+("undefined"==typeof e?"undefined":_typeof(e))+"), got "+u.wrapperBegin+n+u.wrapperEnd+" ("+("undefined"==typeof n?"undefined":_typeof(n))+") instead.",p="#ff8a80"),Test.prototype.output){var a=document.createElement("div");Test.prototype.stylize(a,{"line-height":"1.5em",margin:"0.5em 0",padding:"0.5em",background:p}),a.insertAdjacentHTML("beforeend",s),s=a}return r=null,p=null,s},Test.prototype.stylize=function(t,e){Object.keys(e).forEach(function(n){t.style[n]=e[n]})},Test.config=function(){var t={};return t.output=function(t){t instanceof HTMLElement&&(Test.prototype.output=t)},t.hidePassed=function(t){Test.prototype.hidePassed=t,t&&console.warn("Passed tests are hidden!")},t}(),Test.ValidationFunction={EQUALS:function(t,e){return t===e},NOT_EQUALS:function(t,e){return t!==e},CONTAINS:function(t,e){return!!~e.indexOf(t)}},"undefined"!=typeof module&&!function(){var t=require("fs"),e=require("vm"),n=function(n,o){var r=n+"/"+o;e.runInThisContext(t.readFileSync(r,"utf8"),r)};module.exports={Test:Test,inject:n}}();
"use strict";var iqwerty=iqwerty||{};iqwerty.toast=function(){function t(o,r,i){if(null!==e())t.prototype.toastQueue.push({text:o,options:r,transitions:i});else{t.prototype.Transitions=i||n;var a=r||{};a=t.prototype.mergeOptions(t.prototype.DEFAULT_SETTINGS,a),t.prototype.show(o,a),a=null}}function e(){return i}function o(t){i=t}var r=400,n={SHOW:{"-webkit-transition":"opacity "+r+"ms, -webkit-transform "+r+"ms",transition:"opacity "+r+"ms, transform "+r+"ms",opacity:"1","-webkit-transform":"translateY(-100%) translateZ(0)",transform:"translateY(-100%) translateZ(0)"},HIDE:{opacity:"0","-webkit-transform":"translateY(150%) translateZ(0)",transform:"translateY(150%) translateZ(0)"}},i=null;return t.prototype.DEFAULT_SETTINGS={style:{main:{background:"rgba(0, 0, 0, .85)","box-shadow":"0 0 10px rgba(0, 0, 0, .8)","border-radius":"3px","z-index":"99999",color:"rgba(255, 255, 255, .9)",padding:"10px 15px","max-width":"60%","word-break":"keep-all",margin:"0 auto","text-align":"center",position:"fixed",left:"0",right:"0",bottom:"0","-webkit-transform":"translateY(150%) translateZ(0)",transform:"translateY(150%) translateZ(0)","-webkit-filter":"blur(0)",opacity:"0"}},settings:{duration:4e3}},t.prototype.Transitions={},t.prototype.toastQueue=[],t.prototype.timeout=null,t.prototype.mergeOptions=function(e,o){var r=o;for(var n in e)r.hasOwnProperty(n)?null!==e[n]&&e[n].constructor===Object&&(r[n]=t.prototype.mergeOptions(e[n],r[n])):r[n]=e[n];return r},t.prototype.generate=function(r,n){var i=document.createElement("div");"string"==typeof r&&(r=document.createTextNode(r)),i.appendChild(r),o(i),i=null,t.prototype.stylize(e(),n)},t.prototype.stylize=function(t,e){Object.keys(e).forEach(function(o){t.style[o]=e[o]})},t.prototype.show=function(o,r){this.generate(o,r.style.main);var n=e();document.body.insertBefore(n,document.body.firstChild),n.offsetHeight,t.prototype.stylize(n,t.prototype.Transitions.SHOW),n=null,clearTimeout(t.prototype.timeout),t.prototype.timeout=setTimeout(t.prototype.hide,r.settings.duration)},t.prototype.hide=function(){var o=e();t.prototype.stylize(o,t.prototype.Transitions.HIDE),clearTimeout(t.prototype.timeout),o.addEventListener("transitionend",t.prototype.animationListener),o=null},t.prototype.animationListener=function(){e().removeEventListener("transitionend",t.prototype.animationListener),t.prototype.destroy.call(this)},t.prototype.destroy=function(){var r=e();if(document.body.removeChild(r),r=null,o(null),t.prototype.toastQueue.length>0){var n=t.prototype.toastQueue.shift();t(n.text,n.options,n.transitions),n=null}},{Toast:t}}();
"use strict";var iqwerty=iqwerty||{};iqwerty.snackbar=function(){function t(e,r,n,a){var i=a||{};i=t.prototype.mergeOptions(t.prototype.DEFAULT_SETTINGS,i);var c=t.prototype.configureAction(e,r,n,i.style.cta);iqwerty.toast.Toast.call(this,c,i,o),c=null,i=null}var e=400,o={SHOW:{transition:"opacity "+e+"ms",opacity:"1"},HIDE:{opacity:"0"}};return t.prototype=Object.create(iqwerty.toast.Toast.prototype),t.prototype.DEFAULT_SETTINGS={style:{main:{position:"fixed",left:"0",right:"0",bottom:"0",margin:"0","max-width":"600px",background:"#212121",color:"#e0e0e0","box-shadow":"none","border-radius":"0",padding:".8em",display:"flex","flex-flow":"row nowrap","justify-content":"space-between","text-align":"left",opacity:"0","-webkit-transform":"none",transform:"none"},cta:{color:"#f48fb1","letter-spacing":"1px","text-transform":"uppercase",margin:"0 1em",cursor:"pointer"}},settings:{duration:1e4}},t.prototype.configureAction=function(e,o,r,n){var a=this,i=document.createDocumentFragment();i.appendChild(document.createTextNode(e));var c=document.createElement("span");return t.prototype.stylize(c,n),c.addEventListener("click",function(){a.hide(),a=null,r()}),c.appendChild(document.createTextNode(o)),i.appendChild(c),i},{Snackbar:t}}();