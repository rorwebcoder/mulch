// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 102
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var m=this,ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ea=function(a){if(null==a)return String(a);var b=da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ga=function(a){if(!a||"object"!=ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!fa(a,"constructor")&&!fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);return void 0===
c||fa(a,c)},ia=function(a,b){var c=b||("array"==ea(a)?[]:{}),d;for(d in a)if(fa(a,d)){var e=a[d];"array"==ea(e)?("array"!=ea(c[d])&&(c[d]=[]),c[d]=ia(e,c[d])):ga(e)?(ga(c[d])||(c[d]={}),c[d]=ia(e,c[d])):c[d]=e}return c};var ja=function(){},w=function(a){return"function"==typeof a},B=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ka=function(a){return"number"==ea(a)&&!isNaN(a)},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},D=function(a){return Math.round(Number(a))||0},na=function(a){var b=[];if(B(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));
return b},G=function(){return new Date},oa=function(a,b){if(!ka(a)||!ka(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},pa=function(){this.prefix="gtm.";this.ma={}};pa.prototype.set=function(a,b){this.ma[this.prefix+a]=b};pa.prototype.get=function(a){return this.ma[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var qa=function(a,b,c){try{return a["21"](a,b||ja,c||ja)}catch(d){}return!1},sa=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=ma(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},ta=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},ua=function(a){for(var b=0;b<a.length;b++)a[b]()},va=G().getTime(),wa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c};var H=window,I=document,xa=navigator,J=function(a,b){var c=H[a],d="var "+a+";";if(m.execScript)m.execScript(d,"JavaScript");else if(m.eval)if(null==ca&&(m.eval("var _et_ = 1;"),"undefined"!=typeof m._et_?(delete m._et_,ca=!0):ca=!1),ca)m.eval(d);else{var e=m.document,f=e.createElement("script");f.type="text/javascript";f.defer=!1;f.appendChild(e.createTextNode(d));e.body.appendChild(f);e.body.removeChild(f)}else throw Error("goog.globalEval not available");H[a]=void 0===c?b:c;return H[a]},K=function(a,
b,c,d){return(d||"http:"!=H.location.protocol?a:b)+c},ya=function(a){var b=I.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},za=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},M=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;za(d,b);c&&(d.onerror=c);ya(d)},Aa=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display=
"none";c.style.visibility="hidden";ya(c);za(c,b);void 0!==a&&(c.src=a);return c},k=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},N=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},O=function(a){H.setTimeout(a,0)},Ba=!1,Da=[],Ea=function(a){if(!Ba){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||
c||!b&&d){Ba=!0;for(var e=0;e<Da.length;e++)Da[e]()}}},Fa=0,Ia=function(){if(!Ba&&140>Fa){Fa++;try{I.documentElement.doScroll("left"),Ea()}catch(a){H.setTimeout(Ia,50)}}},Ka=function(a){var b=I.getElementById(a);if(b&&Ja(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ja(document.all[a][c],"id")==a)return document.all[a][c];return b},Ja=function(a,b){return a&&b&&a.attributes[b]?a.attributes[b].value:null},La=function(a){return a.target||a.srcElement||{}},Ma=function(a,b){for(var c={},d=0;d<
b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},Na=!1,Oa=[],Pa=function(){if(!Na){Na=!0;for(var a=0;a<Oa.length;a++)Oa[a]()}},Qa=function(a){a=a||H;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)};var Ra=null,Sa=null;var Ta=new pa,Ua={},Va=ja,Wa=[],Xa=!1,$a={set:function(a,b){ia(Ya(a,b),Ua)},get:function(a){return P(a,2)}},ab=function(a){var b=!1;return function(){!b&&w(a)&&O(a);b=!0}},hb=function(){for(var a=!1;!Xa&&0<Wa.length;){Xa=!0;var b=Wa.shift();if(w(b))try{b.call($a)}catch(c){}else if(B(b))e:{var d=b;if("string"==ea(d[0])){for(var e=d[0].split("."),f=e.pop(),g=d.slice(1),h=Ua,n=0;n<e.length;n++){if(void 0===h[e[n]])break e;h=h[e[n]]}try{h[f].apply(h,g)}catch(q){}}}else{var l=b,p=void 0;for(p in l)if(l.hasOwnProperty(p)){var r=
p,s=l[p];Ta.set(r,s);ia(Ya(r,s),Ua)}var E=!1,F=l.event;if(F){Sa=F;var v=ab(l.eventCallback),Q=l.eventTimeout;Q&&H.setTimeout(v,Number(Q));E=Va(F,v)}if(!Ra&&(Ra=l["gtm.start"])){}Sa=null;a=E||a}var x=b,u=Ua;gb();Xa=!1}return!a},P=function(a,b){if(2==b){for(var c=Ua,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return Ta.get(a)},Ya=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var ib={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},jb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],
nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},kb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},cb=function(){var a=P("gtm.whitelist"),b=a&&kb(na(a),ib),c=P("gtm.blacklist")||P("tagTypeBlacklist"),d=c&&kb(na(c),jb),e={};return function(f){var g=f&&f["21"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)e:{if(0>la(b,g.a))if(g.b&&0<g.b.length)for(var n=0;n<g.b.length;n++){if(0>
la(b,g.b[n])){h=!1;break e}}else{h=!1;break e}h=!0}var q=!1;if(c){var l;if(!(l=0<=la(d,g.a)))e:{for(var p=g.b||[],r=new pa,s=0;s<d.length;s++)r.set(d[s],!0);for(s=0;s<p.length;s++)if(r.get(p[s])){l=!0;break e}l=!1}q=l}return e[g.a]=!h||q}};var _c=function(a){return a["36"]};_c.a="c";_c.b=["google"];var lb=function(a,b,c,d,e){var f=a.hash?a.href.replace(a.hash,""):a.href,g=(a.protocol.replace(":","")||H.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||H.location.hostname).split(":")[0].toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:H.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":var f="/"==a.pathname.substr(0,1)?a.pathname:"/"+
a.pathname,n=f.split("/");0<=la(d||[],n[n.length-1])&&(n[n.length-1]="");f=n.join("/");break;case "query":f=a.search.replace("?","");if(e)e:{for(var q=f.split("&"),l=0;l<q.length;l++){var p=q[l].split("=");if(decodeURIComponent(p[0]).replace("+"," ")==e){f=decodeURIComponent(p.slice(1).join("=")).replace("+"," ");break e}}f=void 0}break;case "fragment":f=a.hash.replace("#","")}return f},mb=function(a){var b=I.createElement("a");b.href=a;return b};var _eu=function(a){var b=String(P("gtm.elementUrl")||a[""]||""),c=mb(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Sa};_e.a="e";_e.b=["google"];var _j=function(a){for(var b=String(a["28"]).split("."),c=H,d=0;d<b.length;d++)c=c&&c[b[d]];return c};_j.a="j";_j.b=["google"];var _v=function(a){var b=P(a["28"].replace(/\\\./g,"."),a[""]);return void 0!==b?b:a[""]};_v.a="v";_v.b=["google"];var _r=function(a){return oa(a[""],a[""])};_r.a="r";_r.b=["google"];var _f=function(a){var b=String(P("gtm.referrer")||I.referrer),c=mb(b);return b};_f.a="f";_f.b=["google"];var nb=function(a){var b=H.location,c=b.hash?b.href.replace(b.hash,""):b.href,d;if(d=a[""]?a[""]:P("gtm.url"))c=String(d),b=mb(c);var e,f,g;
a["8"]&&(c=lb(b,a["8"],e,f,g));return c},_u=nb;_u.a="u";_u.b=["google"];var _cn=function(a){return 0<=String(a["1"]).indexOf(String(a["2"]))};_cn.a="cn";_cn.b=["google"];var _ew=function(a){var b=String(a["1"]),c=String(a["2"]),d=b.length-c.length;return 0<=d&&b.indexOf(c,d)==d};_ew.a="ew";_ew.b=["google"];var _eq=function(a){return String(a["1"])==String(a["2"])};_eq.a="eq";_eq.b=["google"];var _re=function(a){return(new RegExp(a["2"],a["24"]?"i":void 0)).test(a["1"])};_re.a="re";_re.b=["google"];
var _asp=function(a,b,c){H.adroll_adv_id=a["11"];H.adroll_pix_id=a["30"];H.adroll_custom_data=a["10"];H.__adroll_loaded=!0;M(K("https://s","http://a",".adroll.com/j/roundtrip.js"),b,c)};_asp.a="asp";_asp.b=["nonGoogleScripts"];var _awct=function(a,b,c){M("//www.googleadservices.com/pagead/conversion_async.js",function(){var d=H.google_trackConversion;w(d)?d({google_conversion_id:a["23"],google_conversion_label:a["26"],google_conversion_value:a["36"]||0,onload_callback:b})||c():c()},c)};_awct.a="awct";_awct.b=["google"];var sb=function(a,b){return a<b?-1:a>b?1:0};var tb;e:{var ub=m.navigator;if(ub){var vb=ub.userAgent;if(vb){tb=vb;break e}}tb=""}var wb=function(a){return-1!=tb.indexOf(a)};var xb=wb("Opera")||wb("OPR"),T=wb("Trident")||wb("MSIE"),yb=wb("Gecko")&&-1==tb.toLowerCase().indexOf("webkit")&&!(wb("Trident")||wb("MSIE")),zb=-1!=tb.toLowerCase().indexOf("webkit"),Ab=function(){var a=m.document;return a?a.documentMode:void 0},Eb=function(){var a="",b;if(xb&&m.opera){var c=m.opera.version;return"function"==ba(c)?c():c}yb?b=/rv\:([^\);]+)(\)|;)/:T?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:zb&&(b=/WebKit\/(\S+)/);if(b)var d=b.exec(tb),a=d?d[1]:"";if(T){var e=Ab();if(e>parseFloat(a))return String(e)}return a}(),
Fb={},W=function(a){var b;if(!(b=Fb[a])){for(var c=0,d=String(Eb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",n=e[g]||"",q=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var p=q.exec(h)||["","",""],r=l.exec(n)||["","",""];if(0==p[0].length&&0==r[0].length)break;c=sb(0==p[1].length?0:parseInt(p[1],10),0==r[1].length?0:parseInt(r[1],10))||sb(0==p[2].length,0==r[2].length)||
sb(p[2],r[2])}while(0==c)}b=Fb[a]=0<=c}return b},Gb=m.document,Hb=Gb&&T?Ab()||("CSS1Compat"==Gb.compatMode?parseInt(Eb,10):5):void 0;if(yb||T){var Ib;if(Ib=T)Ib=T&&9<=Hb;Ib||yb&&W("1.9.1")}T&&W("9");var Jb=function(a){Jb[" "](a);return a};Jb[" "]=function(){};var Qb=function(a,b){var c="";T&&!Kb(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Lb)a.srcdoc=d;else if(Mb){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Pb(a,d)},Lb=zb&&"srcdoc"in document.createElement("iframe"),Mb=yb||zb||T&&W(11),Pb=function(a,b){T&&W(7)&&!W(10)&&6>Rb()&&Sb(b)&&(b=Tb(b));var c=function(){a.contentWindow.goog_content=
b;a.src="javascript:window.goog_content"};T&&!Kb(a)?Ub(a,c):c()},Rb=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Kb=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c){var e;if(e=null!=c.location.href)r:{try{Jb(c.foo);e=!0;break r}catch(f){}e=!1}d=e}b=d}catch(g){b=!1}return b}catch(h){return!1}},Vb=0,Ub=function(a,b){var c="goog_rendering_callback"+Vb++;window[c]=b;T&&W(6)&&!W(7)?a.src="javascript:'<script>window.onload = function() { document.write(\\'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation()})()<\\\\/script>\\');document.close();};\x3c/script>'":a.src="javascript:'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Sb=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Tb=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),
d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2013 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Yb=function(a,b,c,d){return function(){try{if(0<b.length){var e=b.shift(),f=Yb(a,b,c,d);if("SCRIPT"==e.nodeName&&"text/gtmscript"==e.type){var g=I.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var h=e.getAttribute("data-gtmsrc");h&&(g.src=h,za(g,f));a.insertBefore(g,null);h||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var n=[];e.firstChild;)n.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);Yb(e,n,f,d)()}else a.insertBefore(e,null),f()}else c()}catch(q){O(d)}}},Zb=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var ac=function(a,b,c){if(I.body)if(a[""])try{Qb(Aa(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+a["22"]),O(b)}catch(d){O(c)}else a[""]?$b(a,b,c):Yb(I.body,Zb(a["22"]),b,c)();else H.setTimeout(function(){ac(a,b,c)},200)},_html=ac;_html.a="html";_html.b=["customScripts"];var _img=function(a,b,c){var d=String(a["35"]),e=a["3"];if(e)var f=d.charAt(d.length-1),d=d+((0<=d.indexOf("?")?"?"==f||"&"==f?"":"&":"?")+e+"="+a["4"]);k(d,b,c)};_img.a="img";_img.b=["customPixels"];var bc=/(Firefox\D28\D)/g.test(xa.userAgent),dc=function(a,b,c,d){return function(e){e=e||H.event;var f=La(e),g=!1;if(3!==e.which||"CLICK"!=a&&"LINK_CLICK"!=a)if(2!==e.which&&(null!=e.which||4!=e.button)||"LINK_CLICK"!=a)if("LINK_CLICK"==a&&(f=Ma(f,["a","area"]),g=!f||!f.href||e.ctrlKey||e.shiftKey||e.altKey||!0===e.metaKey),e.defaultPrevented||!1===e.returnValue||e.P&&e.P()){if(!c&&f){var h={simulateDefault:!1};X(a,f,h,d)}}else{if(f){var h={},n=X(a,f,h,d),g=g||n||"LINK_CLICK"==a&&bc;h.simulateDefault=
!n&&b&&!g;h.simulateDefault&&(g=cc(f,h)||g,!g&&e.preventDefault&&e.preventDefault());e.returnValue=n||!b||g;return e.returnValue}return!0}}},X=function(a,b,c,d){var e=d||2E3,f={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||Ja(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":f.event="gtm.linkClick";f["gtm.elementUrl"]=b.href;f.eventTimeout=e;f.eventCallback=ec(b,c);break;case "FORM_SUBMIT":f.event="gtm.formSubmit";var g=b.action;g&&
g.tagName&&(g=b.cloneNode(!1).action);f["gtm.elementUrl"]=g;f.eventTimeout=e;f.eventCallback=fc(b,c);break;case "CLICK":f.event="gtm.click";f["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return H["dataLayer"].push(f)},gc=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},cc=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(xa.userAgent),e=gc(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;
f=(e||"_self").substring(1);b.targetWindow=H.frames&&H.frames[f]||H[f];break;case "_blank":d?(b.simulateDefault=!1,c=!0):(b.targetWindowName="gtm_autoEvent_"+G().getTime(),b.targetWindow=H.open("",b.targetWindowName));break;default:d&&!H.frames[e]?(b.simulateDefault=!1,c=!0):(H.frames[e]||(b.targetWindowName=e),b.targetWindow=H.frames[e]||H.open("",e))}return c},ec=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||G().getTime(),500>G().getTime()-
c&&H.setTimeout(ec(a,b,c),25)))}},fc=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);I.gtmSubmitFormNow=!0;hc(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||G().getTime(),500>G().getTime()-c&&H.setTimeout(fc(a,b,c),25)}},ic=function(a,b,c,d){var e,f;switch(a){case "CLICK":if(I.gtmHasClickListenerTag)return;I.gtmHasClickListenerTag=!0;e="click";f=function(a){var b=La(a);b&&X("CLICK",b,{},d);return!0};
break;case "LINK_CLICK":if(I.gtmHasLinkClickListenerTag)return;I.gtmHasLinkClickListenerTag=!0;e="click";f=dc(a,b||!1,c||!1,d);break;case "FORM_SUBMIT":if(I.gtmHasFormSubmitListenerTag)return;I.gtmHasFormSubmitListenerTag=!0;e="submit";f=dc(a,b||!1,c||!1,d);break;default:return}N(I,e,f,!1)},hc=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;I.gtmFormElementSubmitter||(I.gtmFormElementSubmitter=
I.createElement("form"));return I.gtmFormElementSubmitter.submit.call?I.gtmFormElementSubmitter.submit:a.submit};var _cl=function(a,b){ic("CLICK");O(b)};_cl.a="cl";_cl.b=["google"];var lc,mc;
var wc=function(a){return function(){}},xc=function(a){return function(){}};
var Y=function(a,b){var c=a["37"],d=a["6"],e=D(a["38"]);0>=e&&(e=2E3);var f=Y.Ha(c,e),g="undefined"==typeof HTMLFormElement;g||HTMLFormElement.prototype.gtmOldFormSubmit||(HTMLFormElement.prototype.gtmOldFormSubmit=HTMLFormElement.prototype.submit,HTMLFormElement.prototype.submit=f);c&&Y.Ja();if(I.addEventListener)ic("FORM_SUBMIT",c,d,e);else{var h=function(){Y.O()};N(I,"click",h,!1);N(I,"keydown",h,!1);var n=function(a){a=a||
window.event;var b=La(a),f={};if(c||d){if(c&&!d){var g=X("FORM_SUBMIT",b,f,e);f.simulateDefault=!g;if(g)return}a.defaultPrevented||!1===a.returnValue||a.P&&a.P()?f.simulateDefault=!1:b!==I.gtmFormActionSwapped&&(I.gtmFormActionSwapped=b,I.gtmFormActionFunction=Y.Ia(b,c,d,f,e),b.gtmOldAction=Y.ia(b),b.gtmOldTarget=b.target,Y.ga(b,Y.ha+b.gtmOldAction),b.target="")}else X("FORM_SUBMIT",b,f,e),f.simulateDefault=!1};I.gtmForceFormWrappers=!0;for(var q=I.getElementsByTagName("form"),l=0;l<q.length;l++)if(!q[l].gtmFormSubmitListenerAttached&&
(q[l].gtmFormSubmitListenerAttached=!0,N(q[l],"submit",n,!1),g&&!q[l].gtmOldFormSubmit)){q[l].gtmOldFormSubmit=hc(q[l]);try{q[l].submit=f}catch(p){}q[l].gtmReplacedFormSubmit=f}}O(b)};Y.ha="javascript:document.gtmFormActionFunction();//";Y.Ia=function(a,b,c,d,e){return function(){Y.O(a);if(!b&&c)X("FORM_SUBMIT",a,d,e),d.simulateDefault=!1,I.gtmSubmitFormNow=!0,hc(a).call(a),I.gtmSubmitFormNow=!1;else{if(b&&c){var f=X("FORM_SUBMIT",a,d,e);d.simulateDefault=!f;if(f){I.gtmSubmitFormNow=!0;hc(a).call(a);
I.gtmSubmitFormNow=!1;return}}var g=gc(a).toLowerCase();switch(g){case "_blank":d.targetWindowName="gtm_autoEvent_"+G().getTime(),d.targetWindow=H.open("",d.targetWindowName);case "":d.targetWindow=H.frames.self;break;case "_parent":case "_self":case "_top":d.targetWindow=H.frames[g.substring(1)];break;default:H.frames[g]||(d.targetWindowName=g),d.targetWindow=H.frames[g]||H.open("",g)}}}};Y.ia=function(a){return a.action&&a.action.tagName?a.attributes.action.value:a.action};Y.ga=function(a,b){a.action&&
a.action.tagName?a.attributes.action.value=b:a.action=b};Y.Va=function(a){var b=function(b){b=b||H.event;if(a){var d=a(b);!1===d&&(b.returnValue=!1);return d}return!0};b.gtmOnsubmitWrapper=!0;return b};Y.T=function(a){(I.gtmForceFormWrappers||bc)&&a&&a.onsubmit&&!a.onsubmit.gtmOnsubmitWrapper&&(a.onsubmit=Y.Va(a.onsubmit))};Y.Ha=function(a,b){return function(){var c="undefined"==typeof HTMLFormElement;if(I.gtmSubmitFormNow)I.gtmSubmitFormNow=!1,Y.Ma(this),c?this.gtmOldFormSubmit.call?this.gtmOldFormSubmit.call(this):
this.gtmOldFormSubmit():HTMLFormElement.prototype.gtmOldFormSubmit.call(this),Y.Na(this);else{Y.O(this);this.gtmCachedSubmitElement=void 0;var d={},e=X("FORM_SUBMIT",this,d,b),f=!a||e?!0:cc(this,d);d.simulateDefault=!f;f&&(I.gtmSubmitFormNow=!1,c?this.gtmOldFormSubmit.call?this.gtmOldFormSubmit.call(this):this.gtmOldFormSubmit():HTMLFormElement.prototype.gtmOldFormSubmit.call(this))}}};Y.Oa=function(a){var b="",c=Y.ha,d=Y.ia(a);d&&0==d.indexOf(c)&&(b=d.substring(c.length));return b||a.gtmOldAction};
Y.Ja=function(){I.gtmHasSubmitInputListener||(I.gtmHasSubmitInputListener=!0,N(I,"click",function(a){var b=null,c=La(a);if((c=Ma(c,["button","input"])||c)&&("submit"==c.type||"image"==c.type)){var d=c.name&&Ja(c,"value");if(b=Ma(c,["form"]))d&&(b.gtmCachedSubmitElement=c),Y.T(b);else if(c.form)if(c.form.tagName&&"form"==String(c.form.tagName).toLowerCase())d&&(c.form.gtmCachedSubmitElement=c),Y.T(c.form);else for(var e=B(c.form)?c.form:[c.form],f=0;f<e.length;f++)if(b=Ka(e[f]))d&&(b.gtmCachedSubmitElement=
c),Y.T(b)}return!0},!1))};Y.Ma=function(a){var b=a.gtmCachedSubmitElement;if(b)try{for(var c=b.id,d=b.name,e=0;e<a.elements.length;e++)"submit"==a.elements[e].type&&(a.elements[e].id||a.elements[e].name)&&(c&&c==a.elements[e].id&&(a.elements[e].gtmOldId=a.elements[e].id,a.elements[e].id="gtm_sub_"+a.elements[e].id),d&&d==a.elements[e].name&&(a.elements[e].gtmOldName=a.elements[e].name,a.elements[e].name="gtm_sub_"+a.elements[e].name));var f=I.createElement("input");f.type="hidden";f.value=Ja(b,"value");
c&&(f.id=c);d&&(f.name=d);a.gtmTempHiddenSubmit=f;a.appendChild(f)}catch(g){}};Y.Na=function(a){if(a.gtmCachedSubmitElement){try{a.gtmTempHiddenSubmit&&(a.removeChild(a.gtmTempHiddenSubmit),a.gtmTempHiddenSubmit=void 0);for(var b=0;b<a.elements.length;b++)a.elements[b].gtmOldId&&(a.elements[b].id=a.elements[b].gtmOldId,a.elements[b].gtmOldId=void 0),a.elements[b].gtmOldName&&(a.elements[b].name=a.elements[b].gtmOldName,a.elements[b].gtmOldName=void 0)}catch(c){}a.gtmCachedSubmitElement=void 0}};Y.O=
function(a){var b=a||I.gtmFormActionSwapped;b&&(I.gtmFormActionSwapped=void 0,b.gtmOldAction&&Y.ga(b,Y.Oa(b)),b.gtmOldTarget&&(b.target=b.gtmOldTarget),b.gtmOldAction=void 0,b.gtmOldTarget=void 0)};var _fsl=Y;_fsl.a="fsl";_fsl.b=[];
var zc=!1,Ac=!1,_ga=function(a,b,c){function d(a){var b=[].slice.call(arguments,0);b[0]=E+b[0];r.push(b)}function e(b,c){void 0!==a[c]&&d(b,a[c])}function f(b,c){void 0!==a[c]&&d(b,Number(a[c]))}function g(a,b){if(b)for(var c=0;c<b.length;c++){var e=[a];B(b[c])?e.push.apply(e,b[c]):e.push(b[c]);"_setCustomVar"==e[0]&&void 0===e[3]||d.apply(this,e)}}function h(b,c){void 0!==a[c]&&d("_set",b,a[c])}function n(a,b){return void 0===b?b:a(b)}function q(b,c){void 0!==a[c]&&(F+="&"+b+"="+a[c])}function l(a,
b){F+="&"+a+"="+b}function p(a,b){return a.charAt(0)==b?a.substring(1):a}var r=J("_gaq",[]),s=!1,E="";void 0==a[""]?E="gtm"+va++ +".":""!==a[""]&&(E=a[""]+".");e("_setAccount","0");e("_setDomainName","15");


var F="";
if(""!==F){var v=new pa,Q=p(H.location.search,"?"),z=p(H.location.hash,"#");Q&&sa(v,Q);z&&a[""]&&sa(v,z);v.contains("gclid")&&l("gclid",ta(v.get("gclid")));v.contains("gclsrc")&&l("gclsrc",ta(v.get("gclsrc")));v.contains("dclid")&&l("dclid",ta(v.get("dclid")));d("_set","campaignParams",F)}
a["27"]&&d("_require","inpage_linkid","//www.google-analytics.com/plugins/ga/inpage_linkid.js");g("_setPageGroup",a["9"]);

e("_setCampaignTrack","5");
e("_setClientInfo","7");e("_setDetectFlash","13");e("_setDetectTitle","14");void 0!==a["20"]&&a["20"]&&(r.push(["_gat._forceSSL"]),s=!!a["20"]);g("_setCustomVar",a["10"]);
d("_set","hitCallback",function(){if(w(a[""]))a[""]();b()});if(a["33"]){d("_trackEvent",String(a["18"]),String(a["17"]),n(String,a["19"]),n(D,a[""]),Boolean(a["29"]));}else if(a["34"]){
var A=function(a){return P("transaction"+a)},t=A("Id");d("_addTrans",t,A("Affiliation"),A("Total"),A("Tax"),A("Shipping"));for(var x=A("Products")||[],u=0;u<x.length;u++){var L=x[u];d("_addItem",t,L.sku,L.name,L.category,L.price,L.quantity)}d("_trackTrans");}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else d("_trackPageview");
var y=function(){H._gat||c()};if(a["16"])Ac||(Ac=!0,M(K("https","http","://stats.g.doubleclick.net/dc.js",s),y,c));else if(!zc){var aa=a["12"]?".google-analytics.com/u/ga_debug.js":".google-analytics.com/ga.js";zc=!0;M(K("https://ssl","http://www",aa,s),y,c)}};_ga.a="ga";_ga.b=["google"];var Fc=function(a){var b=H||m,c=b.onerror,d=!1;zb&&!W("535.3")&&(d=!d);b.onerror=function(b,f,g,h,n){c&&c(b,f,g,h,n);a({message:b,fileName:f,Ra:g,jb:h,error:n});return d}};
var Kc=function(a,b){var c=wa(a,"37",!0),d=wa(a,"6",!0),e=D(a["38"]);0>=e&&(e=2E3);ic("LINK_CLICK",!!c,!!d,e);if(!I.addEventListener){var f=function(a){a=a||H.event;for(var b=La(a);b;)b.onclick&&!b.onclick.gtmOnclickWrapper&&(b.onclick=Kc.Ua(b.onclick)),b=b.parentElement};N(I,"mousedown",f,!1);N(I,"keydown",function(a){a=a||H.event;13==a.keyCode&&f(a)},!1)}O(b)};Kc.Ua=function(a){var b=function(b){b=b||H.event;var d=a.call(this,
b);b.returnValue=!1!==d&&(b.returnValue||void 0===b.returnValue);return d};b.gtmOnclickWrapper=!0;return b};var _lcl=Kc;_lcl.a="lcl";var _sp=function(a,b,c){M("//www.googleadservices.com/pagead/conversion_async.js",function(){var d=H.google_trackConversion;w(d)?d({google_conversion_id:a["23"],google_conversion_label:a["26"],google_custom_params:a["10"]||{},google_remarketing_only:!0,onload_callback:b})||c():c()},c)};_sp.a="sp";_sp.b=["google"];var gd=function(){this.f=[]};gd.prototype.set=function(a,b){this.f.push([a,b]);return this};gd.prototype.resolve=function(a,b){for(var c={},d=0;d<this.f.length;d++){var e=hd(this.f[d][0],a,b),f=hd(this.f[d][1],a,b);c[e]=f}return c};var id=function(a){this.index=a};id.prototype.resolve=function(a,b){var c=db[this.index];if(c&&!b(c)){var d=c["25"];if(a){if(a.get(d))return;a.set(d,!0)}c=hd(c,a,b);a&&a.set(d,!1);return qa(c)}};
for(var _M=function(a){return new id(a)},kd=function(a){this.resolve=function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(hd(jd[a[e]],b,c));return d.join("")}},_T=function(a){return new kd(arguments)},ld=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.resolve=function(c,d){if(a[0]instanceof id&&b(8)&&b(16))return'google_tag_manager["GTM-MKV6"].macro('+a[0].index+")";for(var e=String(hd(a[0],c,d)),f=1;f<a.length;f++)e=Z[a[f]](e);return e}},_E=function(a,b){return new ld(arguments)},fb=function(a,b){return hd(a,new pa,b)},hd=function(a,b,c){var d=a;if(a instanceof id||a instanceof gd||a instanceof kd||
a instanceof ld)return a.resolve(b,c);if(B(a))for(var d=[],e=0;e<a.length;e++)d[e]=hd(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=hd(a[f],b,c))}return d},md=function(a,b){var c=b[a],d=c;if(c instanceof id||c instanceof ld||c instanceof kd)d=c;else if(B(c))for(var d=[],e=0;e<c.length;e++)d[e]=md(c[e],b);else if("object"==typeof c){var d=new gd,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],md(c[f],b))}return d},pd=function(a,b){for(var c=b?b.split(","):[],
d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=jd[e[1]]);if(1==a)for(var f=nd(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=od[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=nd(e[g])}return c},nd=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<qd;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f=0,f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},
qd=160,rd=[_cn,_e,'event',_M(0),'trackTrans',_ga,'GA Transaction',_c,'Fiverr UA','UA-12078752-1',_M(1),true,'Fiverr.com','fiverr.com',_M(2),false,[],36,_re,_j,'gigData','gigData.id',_M(3),'[0-9].*',_eq,'_event',_M(4),'gtm.js','Gig Page Event','Gig Page',35,_v,'TransactionType','transactionType',_M(5),'FTB',_u,'url',_M(6),'.*',_asp,'Adroll Smart Pixel - FTB','NMRJ6GJHONGWJARPDUJQ22','J467GAI6GJBVPEQQXOOEGW',{},38,'/orders/thank_you',_awct,'Adwords Thank you page conversion','941089032','DoJyCKDxsAUQiMLfwAM','1',4,'virtualPages','GA Virtual Page',37,_sp,'Adwords Main List Remarketing','yAPcCPiswwQQiMLfwAM',32,'gtm.linkClick','Element with Class','gtm.elementClasses',_M(7),'gig-link-main','categories','GA Event Click Gig categories','Categories Pages Gigs','Search or Home Page Gigs',2,'Gigs From HP or Search','From Categories',[69,70,71,69],[72],31,'gtm.dom',_html,'Mentad - All Pages','\n\x3cscript type\x3d\x22text/gtmscript\x22\x3ementad_website_id\x3d\x22A05jbXRvJM_9f\x22;(function(){var a\x3ddocument.createElement(\x22script\x22);a.type\x3d\x22text/javascript\x22;a.async\x3d!0;a.src\x3d(\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https:\x22:\x22http:\x22)+\x22//pixels.mentad.com/mentad-visit-notification.js\x22;var b\x3ddocument.getElementsByTagName(\x22script\x22)[0];b.parentNode.insertBefore(a,b)})();\x3c/script\x3e',34,'Facebook Remarketing','\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(){window._fbds\x3dwindow._fbds||{};_fbds.pixelId\x3d601078379966926;var a\x3ddocument.createElement(\x22script\x22);a.async\x3d!0;a.src\x3d\x22//connect.facebook.net/en_US/fbds.js\x22;var b\x3ddocument.getElementsByTagName(\x22script\x22)[0];b.parentNode.insertBefore(a,b)})();window._fbq\x3dwindow._fbq||[];window._fbq.push([\x22track\x22,\x22PixelInitialized\x22,{}]);\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 border\x3d\x220\x22 alt\x3d\x22\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d601078379966926\x26amp;ev\x3dNoScript\x22\x3e\x3c/noscript\x3e',33,_img,'nanigans Bamboo Order Now','//','api.nanigans.com/event.php?app_id\x3d75308\x26type\x3duser\x26name\x3dorder_now\x26user_id\x3d[Replace:user_id]\x26ut1\x3d[Replace:email_hash]\x26qty[0]\x3d[Replace:qty[0]]\x26value[0]\x3d[Replace:value[0]]\x26sku[0]\x3d[Replace:sku[0]]\x26qty[1]\x3d[Replace:qty[1]]\x26value[1]\x3d[Replace:value[1]]\x26sku[1]\x3d[Replace:sku[1]]',_T(85,86),'gtmcb',_r,'_random',_M(8),43,'Transaction Type',1,[94,93,34,69],[95],11,'registration.fiverr.com',_fsl,'Form Listener',2000,40,'homepage|navigation|order|conversation|mobile|TagSelect|instant-buy|packages|ios-promo|android-promo|category|subcategory|search|proposal|localization|social|promotion|loadmore|deliveries|hp-blog-posts|gig-page|search-autocomplete|onboarding|abandoned-bar|hp-banner-mobile|hp-banner-desktop|landing-page-mobile|landing-page-desktop|desktop-search|fb-campaign|two-step-reg|collections|viralNinja','GA Events','Event Action','action',_M(9),'Label','label',_M(10),9,'nanigans Bamboo Saw Gig','api.nanigans.com/event.php?app_id\x3d75308\x26type\x3duser\x26name\x3dproduct\x26user_id\x3d[Replace:user_id]\x26sku\x3d[Replace:sku]\x26ut1\x3d[Replace:email_hash]',_T(85,113),42,'GA General',8,'nanigans Bamboo All Pages','api.nanigans.com/event.php?app_id\x3d75308\x26type\x3dvisit\x26name\x3dlanding',_T(85,119),41,'Adwords Display Account Thank You Page Order','1010836336','2sY-CMC79AcQ8MaA4gM','0',16,_cl,'Click Listener',27,_ew,'fiverr.com/','GA Event Click Gig HP','Home Page Gigs','From HP',[69,70,134,69],[135],28,_lcl,'Auto Link Click',29,'search','GA Event Click Gig Search','Search Page Gigs','From Search',[69,70,144,69],[145],30,_f,'referrer','url path','path','url hostname','host','V2 GA','UA-36803279-1'],sd=[],td=0;td<rd.length;td++)sd[td]=md(td,rd);var jd=sd,od=pd(0,"21:0,21:1,25:2,1:3,2:4,21:5,25:6,21:7,25:8,36:9,0:10,34:11,25:12,36:13,15:14,16:11,27:15,9:16,5:11,7:11,13:11,14:11,31:11,12:15,20:15,32:17,21:18,21:19,25:20,28:21,1:22,2:23,21:24,25:25,1:26,2:27,25:28,33:11,17:22,18:29,29:11,32:30,21:31,25:32,28:33,1:34,2:35,21:36,25:37,1:38,2:39,21:40,25:41,11:42,30:43,10:44,32:45,2:46,21:47,25:48,23:49,26:50,36:51,32:52,2:53,25:54,32:55,21:56,25:57,26:58,32:59,2:60,25:61,28:62,1:63,2:64,2:65,25:66,17:67,18:68,10:73,32:74,2:75,21:76,25:77,22:78,32:79,25:80,22:81,32:82,21:83,25:84,35:87,3:88,21:89,25:90,4:91,32:92,25:93,17:34,18:93,10:96,32:97,2:98,21:99,25:100,37:15,6:15,38:101,32:102,2:103,24:11,25:104,25:105,28:106,17:107,18:3,25:108,28:109,19:110,32:111,25:112,35:114,32:115,25:116,32:117,25:118,35:120,32:121,25:122,23:123,26:124,36:125,32:126,21:127,25:128,32:129,21:130,2:131,25:132,17:133,10:136,32:137,21:138,25:139,6:11,32:140,2:141,25:142,17:143,10:146,32:147,21:148,25:149,25:150,8:151,25:152,8:153,25:154,36:155"),db=pd(1,"G,AO,ACD,AAAA4,CAAAAI,AAAAAAAH,AAAAAAAgB,AAAAAAABAAAAD,AAAAAAAAAAAAAAAw,AAAAAAABAAAAAAAAAAgB,AAAAAAABAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAAAAAAAM,AAAAAAAgAAAAAAAAAAAAAAAAAw,AAAAAAAgAAAAAAAAAAAAAAAAAAD,ACAAAAAAAAAAAAAAAAAAAAAAAAM"),ud=pd(1,"Z,AAAAED,AAAAA0,BAAAAAAY,AAAAEAAAG,BAAAAAAACI,JAAAAAAAAAQ,JAAAAAAAAAAg,BAAAAAAAAAAAM,BAAAAAAACAAAQ,IAAAAEAAAAAAAQ,BAAAAAAACAAAAAAAAC,IAAAEAAAAAAAAAAAAAM,AAAAAAAACAAAAAAAAAAAAAgB,BAAAAAAACAAAAAAAAAAAAAAAI"),$=pd(1,"gx8_D,gQ8_BA_,AAAAAAAA4H,AAAAAAAAAwP,gQ8_BAAAAAgB,AAAAAAAAACBe,gQ0_BACAAAAAgP,AAAAAAAAAAAAAgH,AAAAAAAAAAAAAg4,AAAAAAAAAAAAAAAPD,gQ8_BACAAAAAAAAA8B,AAAAAAAAAAAAAAAAA8D,gQ8_BACAAAAAAAAAAAQmB,AAAAAAAAAAAAAAAJBAAAO,gQ8_BAAAAAAAAAAAAAAAw,AAAAAAAAAAAAAAAJBAAAAH,AAAAAAAAAQAAAAAAAAAAA4D,AAAAAAAAAAAAAAAAAAAAAAc,gQ8_BACAAAAAACAAAAAAAAAe,AAAAAAAAAAAAAAAAAQBAAAAgH,gQ0_BACAAAAAACAAAAAAAAAAwD"),vd=pd(2,"B:BQ::,G:CAC::,J:E::,k:IAQ::,AB:Q::,U:gEkC::,AO:AB::,QQ:AKI::,Eg:Ag::,AAB:AAB::,AGC:AAAB::,AGE:AAAE::,Q:::E");
var gb=function(){};var Jd=function(){var a=this;this.t=!1;this.w=[];this.K=[];this.ka=function(){a.t||ua(a.w);a.t=!0};this.ja=function(){a.t||ua(a.K);a.t=!0};this.L=ja},Kd=function(){this.j=[];this.Z={};this.M=[];this.o=0};Kd.prototype.addListener=function(a){this.M.push(a)};var Ld=function(a,b,c,d){if(!c.t){a.j[b]=c;void 0!==d&&(a.Z[b]=d);a.o++;var e=function(){0<a.o&&a.o--;0<a.o||ua(a.M)};c.w.push(e);c.K.push(e)}};var Md=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=ud[b]&&fb(ud[b],c);a[b]=[d&&qa(d),d]}return a[b]}},Nd=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.d(c[d],a.c)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.d(e[d],a.c)[0])return!1;return!0},Od=function(a,b){return function(){a["39"]=b.ka;a["40"]=b.ja;qa(a,b.ka,b.ja)}},Va=function(a,b){P("tagTypeBlacklist");for(var c={name:a,Da:b||ja,p:nd(),r:nd(),d:Md(),c:cb()},d=0;d<vd.length;d++)if(Nd(c,
vd[d])){for(var e=c,f=vd[d],g=f[1],h=0;h<g.length;h++)e.p[g[h]]=!0;for(var n=f[3],h=0;h<n.length;h++)e.r[n[h]]=!0}var q=[];for(var l=0;l<qd;l++)if(c.p[l]&&!c.r[l])if(c.c($[l])){}else{q[l]=fb($[l],c.c);}c.A=q;for(var p=
new Kd,r=0;r<qd;r++)if(c.p[r]&&!c.r[r]&&!c.c($[r])){var s=c.A[r],E=new Jd;E.w.push(wc(s));E.K.push(xc(s));E.L=Od(s,E);Ld(p,r,E,s[""])}p.addListener(c.Da);for(var F=[],v=0;v<p.j.length;v++){var Q=p.j[v];if(Q){var z=p.Z[v];void 0!==z?z!=v&&p.j[z]&&p.j[z].w.push(Q.L):F.push(v)}}for(v=0;v<F.length;v++)p.j[F[v]].L();0<p.o||ua(p.M);return 0<c.A.length};var Pd={macro:function(a){return db[a]&&fb(_M(a),cb())}};Pd.dataLayer=$a;Pd.Sa=function(){var a=H.google_tag_manager;a||(a=H.google_tag_manager={});a["GTM-MKV6"]||(a["GTM-MKV6"]=Pd)};Pd.Sa();
(function(){var a=J("dataLayer",[]),b=J("google_tag_manager",{}),b=b["dataLayer"]=b["dataLayer"]||{};Da.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Oa.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Wa.push.apply(Wa,b);300<this.length;)this.shift();return hb()};Wa.push.apply(Wa,a.slice(0));O(hb)})();
if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)Ea();else{N(I,"DOMContentLoaded",Ea);N(I,"readystatechange",Ea);if(I.createEventObject&&I.documentElement.doScroll){var Qd=!0;try{Qd=!H.frameElement}catch(Sd){}Qd&&Ia()}N(H,"load",Ea)}"complete"===I.readyState?Pa():N(H,"load",Pa);var _vs="res_ts:1400496363244000,srv_cl:66584086,ds:live,cv:102";
})()
