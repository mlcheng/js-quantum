/***********************************************

  "quantum.js"

  Created by Michael Cheng on 02/04/2016 21:46
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/
"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var iqwerty=iqwerty||{};iqwerty.binding=function(){function e(e,t){j[e]=t}function t(e){return j[e]}function n(e){e.hasOwnProperty(P.iqdb)||(e[P.iqdb]={})}function r(e,t){if(!e[P.iqdb].hasOwnProperty(t)){var n;e[P.iqdb][t]=(n={},_defineProperty(n,P.model,e[t]),_defineProperty(n,P.bindings,[]),_defineProperty(n,P.watchers,[]),n)}}function i(e,t,n){var r=e[P.iqdb][t];n.forEach(function(n){var i=r[P.bindings].find(function(e){return e[P.el]===n[P.el]});if(i){var a;n[P.attrs]=n[P.attrs].filter(function(e){return!~i[P.attrs].indexOf(e)}),(a=i[P.attrs]).push.apply(a,_toConsumableArray(n[P.attrs]))}else{r[P.bindings]=r[P.bindings].concat(n);var o=Object.keys(x).find(function(e){return!!Array.from(n[P.el].parentElement.querySelectorAll(e)).find(function(e){return e===n[P.el]})});o&&x[o][P.changer].forEach(function(r){n[P.el].addEventListener(r,function(){e[t]=n[P.el][x[o][P.value]]})})}})}function a(e,t,n){var r,i=e[P.iqdb][t];i[P.watchers]=(r=i[P.watchers]).concat.apply(r,_toConsumableArray(n))}function o(e,t,n,r){n!==r&&e[P.iqdb][t][P.watchers].forEach(function(e){e(n,r)})}function c(e,t){try{Object.defineProperty(e,t,{get:function(){return e[P.iqdb][t][P.model]},set:function(n){var r=d(e,t);u(e,t,n),f(e,t,n),o(e,t,n,r)}})}catch(e){}}function d(e,t){return e[P.iqdb][t][P.model]}function u(e,t,n){e[P.iqdb][t][P.model]=n}function f(e,t,n){null==n&&(n=""),e[P.iqdb][t][P.bindings].forEach(function(e){e[P.attrs].forEach(function(t){var r=e[P.el];if(new RegExp(P.regex.dataset).test(t)){var i=t.replace(new RegExp(P.regex.dataset),"");r.dataset[i]!==n&&(r.dataset[i]=w(n))}else r[t]!==n&&(r[t]=w(n))})})}function l(e,t){return Array.from(t.querySelectorAll("*")).find(function(t){return!t.firstElementChild&&t.textContent===e})||t}function s(e){var t=new RegExp(P.regex.obj,"g"),n=e.innerHTML;n=n.replace(t,function(t){var n=l(t,e);return P.dataset.bindIncomplete.cc in n.dataset?t:"<span "+P.dataset.bindIncomplete.dash+">"+t+"</span>"}),e.innerHTML!==n&&(e.innerHTML=n)}function p(){var e=document.querySelectorAll("["+P.dataset.bindTo.dash+"]");Array.from(e).forEach(function(e){e.dataset[P.dataset.bindTo.cc].split(";").forEach(function(t){var n,r=t.split(":"),i=r[0].split(",");i=i.map(function(e){return e.trim()});var a=y(r[1],P.regex.variable),o=a.obj,c=a.prop;(o||c)&&h(o,c,(n={},_defineProperty(n,P.el,e),_defineProperty(n,P.attrs,i),n))})})}function b(){var e=document.querySelectorAll("["+P.dataset.bind.dash+"]:not(["+P.dataset.bindComplete.dash+"]"),t=function(e,t,n){var r;(e||t)&&(h(e,t,(r={},_defineProperty(r,P.el,n),_defineProperty(r,P.attrs,["innerHTML"]),r)),delete n.dataset[P.dataset.bindIncomplete.cc])};Array.from(e).forEach(function(e){if(s(e),""!==e.dataset[P.dataset.bind.cc]){var n=y(e.dataset[P.dataset.bind.cc],P.regex.variable),r=n.obj,i=n.prop;t(r,i,e)}e.dataset[P.dataset.bindComplete.cc]="true"}),e=document.querySelectorAll("["+P.dataset.bindIncomplete.dash+"]"),Array.from(e).forEach(function(e){var n=y(e.innerHTML,P.regex.obj),r=n.obj,i=n.prop;t(r,i,e)})}function y(e,n){var r=new RegExp(n,"g").exec(e),i=r[1].trim().split("."),a=t(i.shift()),o=a,c=void 0;return void 0!==a&&i.forEach(function(e,t){t<i.length-1?o=o[e]||o[P.iqdb][e][P.model]:c=e}),{obj:o,prop:c}}function h(e,t,o,u){o=Array.isArray(o)?o:E([o]),u=Array.isArray(u)?u:E([u]),n(e),r(e,t),i(e,t,o),a(e,t,u),c(e,t),f(e,t,d(e,t))}function g(e,t,n){h(e,t,null,n)}function m(t){Object.keys(t).forEach(function(n){e(n,t[n])}),"undefined"!=typeof document&&setTimeout(function(){p(),b()})}var v,q,A,_,P={iqdb:"__iqdb",model:"model",bindings:"bindings",watchers:"watchers",el:"el",attrs:"attrs",changer:"changer",value:"value",regex:{dataset:"^data-",variable:"([^{}]+)",obj:"{ *?([^{}]+) *?}"},dataset:{bindIncomplete:{cc:"iqBindIncomplete",dash:"data-iq-bind-incomplete"},bindTo:{cc:"iqBindTo",dash:"data-iq-bind-to"},bind:{cc:"iqBind",dash:"data-iq-bind"},bindComplete:{cc:"iqBindComplete",dash:"data-iq-bind-complete"}}},x={"input:not([type=checkbox])":(v={},_defineProperty(v,P.changer,["change","input"]),_defineProperty(v,P.value,"value"),v),"input[type=checkbox]":(q={},_defineProperty(q,P.changer,["change","input"]),_defineProperty(q,P.value,"checked"),q),textarea:(A={},_defineProperty(A,P.changer,["change","input"]),_defineProperty(A,P.value,"value"),A),"[contenteditable]":(_={},_defineProperty(_,P.changer,["change","input"]),_defineProperty(_,P.value,"textContent"),_)},E=function(e){return e.filter(function(e){return e})},w=function(e){return"string"==typeof e||"boolean"==typeof e?e:JSON.stringify(e,null,2)},j={};return{Bind:h,Watch:g,Model:m}}();
"use strict";var iqwerty=iqwerty||{};iqwerty.dragdrop=function(){function t(t){function n(){d.classList.add(e)}function i(){d.classList.remove(e)}function r(t){t.stopPropagation(),t.preventDefault(),n()}function o(t){t.stopPropagation(),t.preventDefault(),i()}function a(t){o(t);var e=t.target.files||t.dataTransfer.files;e=[].slice.call(e),"function"==typeof s&&s(e),e=null}window.File&&window.FileList&&window.FileReader||console.log("File upload not supported");var d=document.getElementById(t);d.addEventListener("dragover",r.bind(this)),d.addEventListener("dragleave",o.bind(this)),d.addEventListener("drop",a.bind(this));var s=null;return this.setOnDropCallback=function(t){s=t},this}var e="iqwerty_dragdrop_over";return{DragDrop:t}}();
"use strict";var iqwerty=iqwerty||{};iqwerty.history=function(){function t(t,n){this.state=t,this.$$length=n}function n(t,n,e){if(t=u()+(h===c?c:"")+t,n=n||document.title,e=e||null,!window.history.pushState)throw"History API not supported";l()!==t&&(window.history.pushState(e,n,t),r())}function e(){window.history.back()}function i(n,e){e&&(h=e.base),t.prototype.States=n,r(),window.addEventListener("popstate",function(){r()})}function r(){var n=t.prototype.States,e=o(n);if(e){var i=e.state.split(":")[0];i=a().split(i)[1],n[e.state](i||void 0)}}function o(n){var e=Object.keys(n).map(function(n){if(""===n)return new t(n,0);var e=n.split(":")[0],i=0===a().indexOf(e)?e.length:-1;return new t(n,i)}).reduce(function(t,n){return t.$$length===-1?null:t.$$length>=n.$$length?t:n});return a()&&e.$$length===-1?(console.warn("Current state is unhandled"),null):e}function s(){return window.location.pathname}function u(){return h===c?s():h}function a(){var t;return h===c?(t=window.location.hash,t=t.split(c)[1]):t=s().split(u())[1],t?("/"===t.substr(-1)&&(t=t.substring(0,t.length-1)),t):""}function l(){return u()+a()}var c="#!/",h=c;return t.prototype.States={},{Push:n,Pop:e,States:i}}();
"use strict";function $http(t){function n(t,n,s){var i,c=new XMLHttpRequest;if(t===e.GET?(n=function(t,n){if(!n)return t;var e=t+"?",o=0;for(var r in n)n.hasOwnProperty(r)&&(o++&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(n[r]));return e}(n,s),i=null):s&&(i=new FormData,Object.keys(s).forEach(function(t){i.append(t,s[t])})),t===e.GET){var a=iqwerty.http.Cache().getCache(n);if(null!=a)return"function"==typeof r.onLoad?r.onLoad(a):Promise.resolve(a)}return"function"==typeof r.onLoadStart&&(c.onloadstart=function(){r.onLoadStart(this.readyState)}),"function"==typeof r.onProgress&&(c.upload.onprogress=function(t){r.onProgress(t)}),new Promise(function(s,a){"function"==typeof r.onError&&(c.onerror=function(){r.onError(this.status),a(this.status)}),c.onload=function(){u.cache&&t===e.GET&&iqwerty.http.Cache().setCache(n,this.response),"function"==typeof r.onLoad&&(this.status===o.OK?r.onLoad(this.response):"function"==typeof r.onError&&r.onError(this.status)),this.status===o.OK?s(this.response):a(this.status)},c.open(t,n,!0),c.send(i)})}var e={GET:"get",POST:"post",PUT:"put",DELETE:"delete"},o={OK:200},r={},u={};return{cache:function(){return u.cache=!0,this},begin:function(t){return r.onLoadStart=t,this},progress:function(t){return r.onProgress=t,this},success:function(t){return r.onLoad=t,this},error:function(t){return r.onError=t,this},get:function(o){return n(e.GET,t,o)},post:function(o){return n(e.POST,t,o)},put:function(o){return n(e.PUT,t,o)},delete:function(o){return n(e.DELETE,t,o)}}}var iqwerty=iqwerty||{};iqwerty.http=function(){function t(){var n={},e=t.prototype.cached;return n.getCache=function(t){return e[t]},n.setCache=function(t,o){null==n.getCache(t)&&(e[t]=o)},n}return t.prototype.cached={},{Request:$http,Cache:t}}(),"undefined"!=typeof module&&(module.exports=iqwerty.http);
"use strict";var iqwerty=iqwerty||{};iqwerty.template=function(){function t(t){var e=t.split(".");if(1===e.length)return window[t];var n=window[e.shift()],r=e.pop();return n=e.reduce(function(t,e){return t[e]},n),n[r]}function e(){setTimeout(function(){var e=document.querySelectorAll("["+r+"]");[].slice.call(e).forEach(function(e){var r=e.dataset.iqTemplateSrc,i=e.dataset.iqTemplateLoaded;i=t(i),n(r,i,e)})},0)}function n(t,e,n){return"undefined"==typeof $http?console.log("The $http library is required. Get it here https://github.com/mlcheng/js-http"):void $http(t).cache().get().then(function(t){n&&n.insertAdjacentHTML("afterbegin",t),"function"==typeof e?e(t):null!=e&&console.error("Your callback is not defined")}).catch(function(){return console.warn("Could not retrieve template")})}var r="data-iq-template-src";return{GetTemplates:e,GetTemplate:n}}(),document.addEventListener("DOMContentLoaded",iqwerty.template.GetTemplates);
"use strict";function Test(t){function e(t,e,n,o){var r=!1;return function(){return(arguments.length<=0?void 0:arguments[0])!==i&&(o&&n.apply(void 0,arguments),r=!0),{called:r,obj:t,fn:e,origFunction:n}}}function n(e){var n={};return n.to=function(n){Promise.resolve(e).then(function(e){Test.prototype.showResult(t,n,e,o)})},n.toBe=n.to,n.toHave=n.to,n.is=n.to,n.equals=n.to,n.toHaveBeenCalled=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];Promise.resolve(e).then(function(e){e=e(i),Test.prototype.showResult(t,e.called,n,o),e.obj[e.fn]=e.origFunction})},n.notToHaveBeenCalled=function(){n.toHaveBeenCalled(!1)},n}var o,r={},i=Symbol("FAKE_CALL");return r.observe=function(t,n){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t[n]=new e(t,n,t[n],o),r},r.using=function(t){return o=t,r},r.do=function(t){return"function"==typeof t&&t(),r},r.expect=function(t){return new n(t)},r.assert=r.expect,r}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};if(Test.ValidationFunction={EQUALS:function(t,e){return t===e},NOT_EQUALS:function(t,e){return t!==e},CONTAINS:function(t,e){return!!~e.indexOf(t)},ARRAY_SHALLOW:function(t,e){var n=t.length;if(e.length!==n)return!1;for(;n--;)if(e[n]!==t[n])return!1;return!0},OBJECT_DEEP:function(t,e){if(null==t||null==e)return t===e;if(t.constructor!==e.constructor)return!1;if(t instanceof Function)return t===e;if(t instanceof RegExp)return t===e;if(t===e||t.valueOf()===e.valueOf())return!0;if(Array.isArray(t)&&t.length!==e.length)return!1;if(t instanceof Date)return!1;if(!(t instanceof Object))return!1;if(!(e instanceof Object))return!1;var n=Object.keys(t);return Object.keys(e).every(function(t){return~n.indexOf(t)})&&n.every(function(n){return Test.ValidationFunction.OBJECT_DEEP(t[n],e[n])})}},Test.Console={CONSOLE:Symbol("console"),TERMINAL:Symbol("terminal")},Test.prototype.output=null,Test.prototype.hidePassed=!1,Test.prototype.colorMethod=Test.Console.CONSOLE,Test.prototype.showResult=function(t,e,n,o){var r=Test.prototype.createResult(t,e,n,o||Test.ValidationFunction.EQUALS);if(null!==r)if(Test.prototype.output)Test.prototype.output.appendChild(r.result);else if(Test.prototype.colorMethod===Test.Console.CONSOLE)console.log("%c"+r.result,"\n\t\t\t\tcolor: "+r.bgColor+";\n\t\t\t\ttext-shadow: 0 0 1px rgba(0, 0, 0, .2);\n\t\t\t\t"+(r.passed?"":"font-size: 150%; font-weight: bold;")+"\n\t\t\t");else{var i={};r.passed?(i.bg="[49m",i.fg="[92m"):(i.bg="[101m",i.fg="[93m"),console.log(""+i.bg+i.fg+r.result+"[0m")}},Test.prototype.getResult=function(t,e,n){return t.call(void 0,e,n)},Test.prototype.createResult=function(t,e,n,o){var r=function(t){return"object"===(void 0===t?"undefined":_typeof(t))?JSON.stringify(t,null,4):t},i=!0===Test.prototype.getResult(o,e,n);if(Test.prototype.hidePassed&&i)return null;var u=Test.prototype.output?{wrapperBegin:"<strong>",wrapperEnd:"</strong>",newLine:"<br>",separator:""}:{wrapperBegin:'"',wrapperEnd:'"',newLine:"\n >> ",separator:"-------------------------------------\n"},s="";o!==Test.ValidationFunction.EQUALS&&(s=" (using custom validation function)");var c,f=u.separator+"Testing: "+t+s+u.newLine;if(i?(f+="[✔] Passed!",c="#c8e6c9"):(f+="[✖] Failed. Expected "+u.wrapperBegin+r(e)+u.wrapperEnd+" ("+(void 0===e?"undefined":_typeof(e))+"), got "+u.wrapperBegin+r(n)+u.wrapperEnd+" ("+(void 0===n?"undefined":_typeof(n))+") instead.",c="#ff8a80"),Test.prototype.output){var l=document.createElement("div");Test.prototype.stylize(l,{"line-height":"1.5em",margin:"0.5em 0",padding:"0.5em",background:c}),l.insertAdjacentHTML("beforeend",f),f=l}return{result:f,passed:i,bgColor:c}},Test.prototype.stylize=function(t,e){Object.keys(e).forEach(function(n){t.style[n]=e[n]})},Test.config=function(){var t={};return t.output=function(t){t instanceof HTMLElement&&(Test.prototype.output=t)},t.hidePassed=function(t){Test.prototype.hidePassed=t,t&&console.warn("Passed tests are hidden!")},t.colorMethod=function(t){Test.prototype.colorMethod=t},t}(),"undefined"!=typeof module){Test.config.colorMethod(Test.Console.TERMINAL);var vm=require("vm"),inject=function(t,e){var n=t+"/"+e;vm.runInThisContext(fs.readFileSync(n,"utf8"),n)};module.exports={Test:Test,inject:inject}}
"use strict";var iqwerty=iqwerty||{};iqwerty.toast=function(){function t(o,r,i){if(null!==e())t.prototype.toastQueue.push({text:o,options:r,transitions:i});else{t.prototype.Transitions=i||n;var a=r||{};a=t.prototype.mergeOptions(t.prototype.DEFAULT_SETTINGS,a),t.prototype.show(o,a),a=null}}function e(){return i}function o(t){i=t}var r=400,n={SHOW:{"-webkit-transition":"opacity "+r+"ms, -webkit-transform "+r+"ms",transition:"opacity "+r+"ms, transform "+r+"ms",opacity:"1","-webkit-transform":"translateY(-100%) translateZ(0)",transform:"translateY(-100%) translateZ(0)"},HIDE:{opacity:"0","-webkit-transform":"translateY(150%) translateZ(0)",transform:"translateY(150%) translateZ(0)"}},i=null;return t.prototype.DEFAULT_SETTINGS={style:{main:{background:"rgba(0, 0, 0, .85)","box-shadow":"0 0 10px rgba(0, 0, 0, .8)","border-radius":"3px","z-index":"99999",color:"rgba(255, 255, 255, .9)",padding:"10px 15px","max-width":"60%",width:"100%","word-break":"keep-all",margin:"0 auto","text-align":"center",position:"fixed",left:"0",right:"0",bottom:"0","-webkit-transform":"translateY(150%) translateZ(0)",transform:"translateY(150%) translateZ(0)","-webkit-filter":"blur(0)",opacity:"0"}},settings:{duration:4e3}},t.prototype.Transitions={},t.prototype.toastQueue=[],t.prototype.timeout=null,t.prototype.mergeOptions=function(e,o){var r=o;for(var n in e)r.hasOwnProperty(n)?null!==e[n]&&e[n].constructor===Object&&(r[n]=t.prototype.mergeOptions(e[n],r[n])):r[n]=e[n];return r},t.prototype.generate=function(r,n){var i=document.createElement("div");"string"==typeof r&&(r=document.createTextNode(r)),i.appendChild(r),o(i),i=null,t.prototype.stylize(e(),n)},t.prototype.stylize=function(t,e){Object.keys(e).forEach(function(o){t.style[o]=e[o]})},t.prototype.show=function(o,r){this.generate(o,r.style.main);var n=e();document.body.insertBefore(n,document.body.firstChild),n.offsetHeight,t.prototype.stylize(n,t.prototype.Transitions.SHOW),n=null,clearTimeout(t.prototype.timeout),t.prototype.timeout=setTimeout(t.prototype.hide,r.settings.duration)},t.prototype.hide=function(){var o=e();t.prototype.stylize(o,t.prototype.Transitions.HIDE),clearTimeout(t.prototype.timeout),o.addEventListener("transitionend",t.prototype.animationListener),o=null},t.prototype.animationListener=function(){e().removeEventListener("transitionend",t.prototype.animationListener),t.prototype.destroy.call(this)},t.prototype.destroy=function(){var r=e();if(document.body.removeChild(r),r=null,o(null),t.prototype.toastQueue.length>0){var n=t.prototype.toastQueue.shift();t(n.text,n.options,n.transitions),n=null}},{Toast:t}}(),"undefined"!=typeof module&&(module.exports=iqwerty.toast);
"use strict";var iqwerty=iqwerty||{};iqwerty.snackbar=function(){function t(e,r,n,a){var i=a||{};i=t.prototype.mergeOptions(t.prototype.DEFAULT_SETTINGS,i);var c=t.prototype.configureAction(e,r,n,i.style.cta);iqwerty.toast.Toast.call(this,c,i,o),c=null,i=null}var e=400,o={SHOW:{transition:"opacity "+e+"ms",opacity:"1"},HIDE:{opacity:"0"}};return t.prototype=Object.create(iqwerty.toast.Toast.prototype),t.prototype.DEFAULT_SETTINGS={style:{main:{position:"fixed",left:"0",right:"0",bottom:"0",margin:"0","max-width":"600px",background:"#212121",color:"#e0e0e0","box-shadow":"none","border-radius":"0",padding:".8em",display:"flex","flex-flow":"row nowrap","justify-content":"space-between","text-align":"left",opacity:"0","-webkit-transform":"none",transform:"none"},cta:{color:"#f48fb1","letter-spacing":"1px","text-transform":"uppercase",margin:"0 1em",cursor:"pointer"}},settings:{duration:1e4}},t.prototype.configureAction=function(e,o,r,n){var a=this,i=document.createDocumentFragment();i.appendChild(document.createTextNode(e));var c=document.createElement("span");return t.prototype.stylize(c,n),c.addEventListener("click",function(){a.hide(),a=null,r()}),c.appendChild(document.createTextNode(o)),i.appendChild(c),i},{Snackbar:t}}();