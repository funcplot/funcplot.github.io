var nivalis_ver_num = 6403807695746032;/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/**
 * MathQuill v0.10.1, by Han, Jeanine, and Mary
 * http://mathquill.com | maintainers@mathquill.com
 *
 * This Source Code Form is subject to the terms of the
 * Mozilla Public License, v. 2.0. If a copy of the MPL
 * was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 */

(function() {

var jQuery = window.jQuery,
  undefined,
  mqCmdId = 'mathquill-command-id',
  mqBlockId = 'mathquill-block-id',
  min = Math.min,
  max = Math.max;

if (!jQuery) throw 'MathQuill requires jQuery 1.5.2+ to be loaded first';

function noop() {}

/**
 * A utility higher-order function that makes defining variadic
 * functions more convenient by letting you essentially define functions
 * with the last argument as a splat, i.e. the last argument "gathers up"
 * remaining arguments to the function:
 *   var doStuff = variadic(function(first, rest) { return rest; });
 *   doStuff(1, 2, 3); // => [2, 3]
 */
var __slice = [].slice;
function variadic(fn) {
  var numFixedArgs = fn.length - 1;
  return function() {
    var args = __slice.call(arguments, 0, numFixedArgs);
    var varArg = __slice.call(arguments, numFixedArgs);
    return fn.apply(this, args.concat([ varArg ]));
  };
}

/**
 * A utility higher-order function that makes combining object-oriented
 * programming and functional programming techniques more convenient:
 * given a method name and any number of arguments to be bound, returns
 * a function that calls it's first argument's method of that name (if
 * it exists) with the bound arguments and any additional arguments that
 * are passed:
 *   var sendMethod = send('method', 1, 2);
 *   var obj = { method: function() { return Array.apply(this, arguments); } };
 *   sendMethod(obj, 3, 4); // => [1, 2, 3, 4]
 *   // or more specifically,
 *   var obj2 = { method: function(one, two, three) { return one*two + three; } };
 *   sendMethod(obj2, 3); // => 5
 *   sendMethod(obj2, 4); // => 6
 */
var send = variadic(function(method, args) {
  return variadic(function(obj, moreArgs) {
    if (method in obj) return obj[method].apply(obj, args.concat(moreArgs));
  });
});

/**
 * A utility higher-order function that creates "implicit iterators"
 * from "generators": given a function that takes in a sole argument,
 * a "yield_" function, that calls "yield_" repeatedly with an object as
 * a sole argument (presumably objects being iterated over), returns
 * a function that calls it's first argument on each of those objects
 * (if the first argument is a function, it is called repeatedly with
 * each object as the first argument, otherwise it is stringified and
 * the method of that name is called on each object (if such a method
 * exists)), passing along all additional arguments:
 *   var a = [
 *     { method: function(list) { list.push(1); } },
 *     { method: function(list) { list.push(2); } },
 *     { method: function(list) { list.push(3); } }
 *   ];
 *   a.each = iterator(function(yield_) {
 *     for (var i in this) yield_(this[i]);
 *   });
 *   var list = [];
 *   a.each('method', list);
 *   list; // => [1, 2, 3]
 *   // Note that the for-in loop will yield 'each', but 'each' maps to
 *   // the function object created by iterator() which does not have a
 *   // .method() method, so that just fails silently.
 */
function iterator(generator) {
  return variadic(function(fn, args) {
    if (typeof fn !== 'function') fn = send(fn);
    var yield_ = function(obj) { return fn.apply(obj, [ obj ].concat(args)); };
    return generator.call(this, yield_);
  });
}

/**
 * sugar to make defining lots of commands easier.
 * TODO: rethink this.
 */
function bind(cons /*, args... */) {
  var args = __slice.call(arguments, 1);
  return function() {
    return cons.apply(this, args);
  };
}

/**
 * a development-only debug method.  This definition and all
 * calls to `pray` will be stripped from the minified
 * build of mathquill.
 *
 * This function must be called by name to be removed
 * at compile time.  Do not define another function
 * with the same name, and only call this function by
 * name.
 */
function pray(message, cond) {
  if (!cond) throw new Error('prayer failed: '+message);
}
var P = (function(prototype, ownProperty, undefined) {
  // helper functions that also help minification
  function isObject(o) { return typeof o === 'object'; }
  function isFunction(f) { return typeof f === 'function'; }

  // used to extend the prototypes of superclasses (which might not
  // have `.Bare`s)
  function SuperclassBare() {}

  return function P(_superclass /* = Object */, definition) {
    // handle the case where no superclass is given
    if (definition === undefined) {
      definition = _superclass;
      _superclass = Object;
    }

    // C is the class to be returned.
    //
    // It delegates to instantiating an instance of `Bare`, so that it
    // will always return a new instance regardless of the calling
    // context.
    //
    //  TODO: the Chrome inspector shows all created objects as `C`
    //        rather than `Object`.  Setting the .name property seems to
    //        have no effect.  Is there a way to override this behavior?
    function C() {
      var self = new Bare;
      if (isFunction(self.init)) self.init.apply(self, arguments);
      return self;
    }

    // C.Bare is a class with a noop constructor.  Its prototype is the
    // same as C, so that instances of C.Bare are also instances of C.
    // New objects can be allocated without initialization by calling
    // `new MyClass.Bare`.
    function Bare() {}
    C.Bare = Bare;

    // Set up the prototype of the new class.
    var _super = SuperclassBare[prototype] = _superclass[prototype];
    var proto = Bare[prototype] = C[prototype] = C.p = new SuperclassBare;

    // other variables, as a minifier optimization
    var extensions;


    // set the constructor property on the prototype, for convenience
    proto.constructor = C;

    C.mixin = function(def) {
      Bare[prototype] = C[prototype] = P(C, def)[prototype];
      return C;
    }

    return (C.open = function(def) {
      extensions = {};

      if (isFunction(def)) {
        // call the defining function with all the arguments you need
        // extensions captures the return value.
        extensions = def.call(C, proto, _super, C, _superclass);
      }
      else if (isObject(def)) {
        // if you passed an object instead, we'll take it
        extensions = def;
      }

      // ...and extend it
      if (isObject(extensions)) {
        for (var ext in extensions) {
          if (ownProperty.call(extensions, ext)) {
            proto[ext] = extensions[ext];
          }
        }
      }

      // if there's no init, we assume we're inheriting a non-pjs class, so
      // we default to applying the superclass's constructor.
      if (!isFunction(proto.init)) {
        proto.init = _superclass;
      }

      return C;
    })(definition);
  }

  // as a minifier optimization, we've closured in a few helper functions
  // and the string 'prototype' (C[p] is much shorter than C.prototype)
})('prototype', ({}).hasOwnProperty);
/*************************************************
 * Base classes of edit tree-related objects
 *
 * Only doing tree node manipulation via these
 * adopt/ disown methods guarantees well-formedness
 * of the tree.
 ************************************************/

// L = 'left'
// R = 'right'
//
// the contract is that they can be used as object properties
// and (-L) === R, and (-R) === L.
var L = -1;
var R = 1;

function prayDirection(dir) {
  pray('a direction was passed', dir === L || dir === R);
}

/**
 * Tiny extension of jQuery adding directionalized DOM manipulation methods.
 *
 * Funny how Pjs v3 almost just works with `jQuery.fn.init`.
 *
 * jQuery features that don't work on $:
 *   - jQuery.*, like jQuery.ajax, obviously (Pjs doesn't and shouldn't
 *                                            copy constructor properties)
 *
 *   - jQuery(function), the shortcut for `jQuery(document).ready(function)`,
 *     because `jQuery.fn.init` is idiosyncratic and Pjs doing, essentially,
 *     `jQuery.fn.init.apply(this, arguments)` isn't quite right, you need:
 *
 *       _.init = function(s, c) { jQuery.fn.init.call(this, s, c, $(document)); };
 *
 *     if you actually give a shit (really, don't bother),
 *     see https://github.com/jquery/jquery/blob/1.7.2/src/core.js#L889
 *
 *   - jQuery(selector), because jQuery translates that to
 *     `jQuery(document).find(selector)`, but Pjs doesn't (should it?) let
 *     you override the result of a constructor call
 *       + note that because of the jQuery(document) shortcut-ness, there's also
 *         the 3rd-argument-needs-to-be-`$(document)` thing above, but the fix
 *         for that (as can be seen above) is really easy. This problem requires
 *         a way more intrusive fix
 *
 * And that's it! Everything else just magically works because jQuery internally
 * uses `this.constructor()` everywhere (hence calling `$`), but never ever does
 * `this.constructor.find` or anything like that, always doing `jQuery.find`.
 */
var $ = P(jQuery, function(_) {
  _.insDirOf = function(dir, el) {
    return dir === L ?
      this.insertBefore(el.first()) : this.insertAfter(el.last());
  };
  _.insAtDirEnd = function(dir, el) {
    return dir === L ? this.prependTo(el) : this.appendTo(el);
  };
});

var Point = P(function(_) {
  _.parent = 0;
  _[L] = 0;
  _[R] = 0;

  _.init = function(parent, leftward, rightward) {
    this.parent = parent;
    this[L] = leftward;
    this[R] = rightward;
  };

  this.copy = function(pt) {
    return Point(pt.parent, pt[L], pt[R]);
  };
});

/**
 * MathQuill virtual-DOM tree-node abstract base class
 */
var Node = P(function(_) {
  _[L] = 0;
  _[R] = 0
  _.parent = 0;

  var id = 0;
  function uniqueNodeId() { return id += 1; }
  this.byId = {};

  _.init = function() {
    this.id = uniqueNodeId();
    Node.byId[this.id] = this;

    this.ends = {};
    this.ends[L] = 0;
    this.ends[R] = 0;
  };

  _.dispose = function() { delete Node.byId[this.id]; };

  _.toString = function() { return '{{ MathQuill Node #'+this.id+' }}'; };

  _.jQ = $();
  _.jQadd = function(jQ) { return this.jQ = this.jQ.add(jQ); };
  _.jQize = function(jQ) {
    // jQuery-ifies this.html() and links up the .jQ of all corresponding Nodes
    var jQ = $(jQ || this.html());

    function jQadd(el) {
      if (el.getAttribute) {
        var cmdId = el.getAttribute('mathquill-command-id');
        var blockId = el.getAttribute('mathquill-block-id');
        if (cmdId) Node.byId[cmdId].jQadd(el);
        if (blockId) Node.byId[blockId].jQadd(el);
      }
      for (el = el.firstChild; el; el = el.nextSibling) {
        jQadd(el);
      }
    }

    for (var i = 0; i < jQ.length; i += 1) jQadd(jQ[i]);
    return jQ;
  };

  _.createDir = function(dir, cursor) {
    prayDirection(dir);
    var node = this;
    node.jQize();
    node.jQ.insDirOf(dir, cursor.jQ);
    cursor[dir] = node.adopt(cursor.parent, cursor[L], cursor[R]);
    return node;
  };
  _.createLeftOf = function(el) { return this.createDir(L, el); };

  _.selectChildren = function(leftEnd, rightEnd) {
    return Selection(leftEnd, rightEnd);
  };

  _.bubble = iterator(function(yield_) {
    for (var ancestor = this; ancestor; ancestor = ancestor.parent) {
      var result = yield_(ancestor);
      if (result === false) break;
    }

    return this;
  });

  _.postOrder = iterator(function(yield_) {
    (function recurse(descendant) {
      descendant.eachChild(recurse);
      yield_(descendant);
    })(this);

    return this;
  });

  _.isEmpty = function() {
    return this.ends[L] === 0 && this.ends[R] === 0;
  };
  
  _.isStyleBlock = function() {
    return false;
  };

  _.children = function() {
    return Fragment(this.ends[L], this.ends[R]);
  };

  _.eachChild = function() {
    var children = this.children();
    children.each.apply(children, arguments);
    return this;
  };

  _.foldChildren = function(fold, fn) {
    return this.children().fold(fold, fn);
  };

  _.withDirAdopt = function(dir, parent, withDir, oppDir) {
    Fragment(this, this).withDirAdopt(dir, parent, withDir, oppDir);
    return this;
  };

  _.adopt = function(parent, leftward, rightward) {
    Fragment(this, this).adopt(parent, leftward, rightward);
    return this;
  };

  _.disown = function() {
    Fragment(this, this).disown();
    return this;
  };

  _.remove = function() {
    this.jQ.remove();
    this.postOrder('dispose');
    return this.disown();
  };
});

function prayWellFormed(parent, leftward, rightward) {
  pray('a parent is always present', parent);
  pray('leftward is properly set up', (function() {
    // either it's empty and `rightward` is the left end child (possibly empty)
    if (!leftward) return parent.ends[L] === rightward;

    // or it's there and its [R] and .parent are properly set up
    return leftward[R] === rightward && leftward.parent === parent;
  })());

  pray('rightward is properly set up', (function() {
    // either it's empty and `leftward` is the right end child (possibly empty)
    if (!rightward) return parent.ends[R] === leftward;

    // or it's there and its [L] and .parent are properly set up
    return rightward[L] === leftward && rightward.parent === parent;
  })());
}


/**
 * An entity outside the virtual tree with one-way pointers (so it's only a
 * "view" of part of the tree, not an actual node/entity in the tree) that
 * delimits a doubly-linked list of sibling nodes.
 * It's like a fanfic love-child between HTML DOM DocumentFragment and the Range
 * classes: like DocumentFragment, its contents must be sibling nodes
 * (unlike Range, whose contents are arbitrary contiguous pieces of subtrees),
 * but like Range, it has only one-way pointers to its contents, its contents
 * have no reference to it and in fact may still be in the visible tree (unlike
 * DocumentFragment, whose contents must be detached from the visible tree
 * and have their 'parent' pointers set to the DocumentFragment).
 */
var Fragment = P(function(_) {
  _.init = function(withDir, oppDir, dir) {
    if (dir === undefined) dir = L;
    prayDirection(dir);

    pray('no half-empty fragments', !withDir === !oppDir);

    this.ends = {};

    if (!withDir) return;

    pray('withDir is passed to Fragment', withDir instanceof Node);
    pray('oppDir is passed to Fragment', oppDir instanceof Node);
    pray('withDir and oppDir have the same parent',
         withDir.parent === oppDir.parent);

    this.ends[dir] = withDir;
    this.ends[-dir] = oppDir;

    // To build the jquery collection for a fragment, accumulate elements
    // into an array and then call jQ.add once on the result. jQ.add sorts the
    // collection according to document order each time it is called, so
    // building a collection by folding jQ.add directly takes more than
    // quadratic time in the number of elements.
    //
    // https://github.com/jquery/jquery/blob/2.1.4/src/traversing.js#L112
    var accum = this.fold([], function (accum, el) {
      accum.push.apply(accum, el.jQ.get());
      return accum;
    });

    this.jQ = this.jQ.add(accum);
  };
  _.jQ = $();

  // like Cursor::withDirInsertAt(dir, parent, withDir, oppDir)
  _.withDirAdopt = function(dir, parent, withDir, oppDir) {
    return (dir === L ? this.adopt(parent, withDir, oppDir)
                      : this.adopt(parent, oppDir, withDir));
  };
  _.adopt = function(parent, leftward, rightward) {
    prayWellFormed(parent, leftward, rightward);

    var self = this;
    self.disowned = false;

    var leftEnd = self.ends[L];
    if (!leftEnd) return this;

    var rightEnd = self.ends[R];

    if (leftward) {
      // NB: this is handled in the ::each() block
      // leftward[R] = leftEnd
    } else {
      parent.ends[L] = leftEnd;
    }

    if (rightward) {
      rightward[L] = rightEnd;
    } else {
      parent.ends[R] = rightEnd;
    }

    self.ends[R][R] = rightward;

    self.each(function(el) {
      el[L] = leftward;
      el.parent = parent;
      if (leftward) leftward[R] = el;

      leftward = el;
    });

    return self;
  };

  _.disown = function() {
    var self = this;
    var leftEnd = self.ends[L];

    // guard for empty and already-disowned fragments
    if (!leftEnd || self.disowned) return self;

    self.disowned = true;

    var rightEnd = self.ends[R]
    var parent = leftEnd.parent;

    prayWellFormed(parent, leftEnd[L], leftEnd);
    prayWellFormed(parent, rightEnd, rightEnd[R]);

    if (leftEnd[L]) {
      leftEnd[L][R] = rightEnd[R];
    } else {
      parent.ends[L] = rightEnd[R];
    }

    if (rightEnd[R]) {
      rightEnd[R][L] = leftEnd[L];
    } else {
      parent.ends[R] = leftEnd[L];
    }

    return self;
  };

  _.remove = function() {
    this.jQ.remove();
    this.each('postOrder', 'dispose');
    return this.disown();
  };

  _.each = iterator(function(yield_) {
    var self = this;
    var el = self.ends[L];
    if (!el) return self;

    for (; el !== self.ends[R][R]; el = el[R]) {
      var result = yield_(el);
      if (result === false) break;
    }

    return self;
  });

  _.fold = function(fold, fn) {
    this.each(function(el) {
      fold = fn.call(this, fold, el);
    });

    return fold;
  };
});


/**
 * Registry of LaTeX commands and commands created when typing
 * a single character.
 *
 * (Commands are all subclasses of Node.)
 */
var LatexCmds = {}, CharCmds = {};
/********************************************
 * Cursor and Selection "singleton" classes
 *******************************************/

/* The main thing that manipulates the Math DOM. Makes sure to manipulate the
HTML DOM to match. */

/* Sort of singletons, since there should only be one per editable math
textbox, but any one HTML document can contain many such textboxes, so any one
JS environment could actually contain many instances. */

//A fake cursor in the fake textbox that the math is rendered in.
var Cursor = P(Point, function(_) {
  _.init = function(initParent, options) {
    this.parent = initParent;
    this.options = options;

    var jQ = this.jQ = this._jQ = $('<span class="mq-cursor">&#8203;</span>');
    //closured for setInterval
    this.blink = function(){ jQ.toggleClass('mq-blink'); };

    this.upDownCache = {};
  };

  _.show = function() {
    this.jQ = this._jQ.removeClass('mq-blink');
    if ('intervalId' in this) //already was shown, just restart interval
      clearInterval(this.intervalId);
    else { //was hidden and detached, insert this.jQ back into HTML DOM
      if (this[R]) {
        if (this.selection && this.selection.ends[L][L] === this[L])
          this.jQ.insertBefore(this.selection.jQ);
        else
          this.jQ.insertBefore(this[R].jQ.first());
      }
      else
        this.jQ.appendTo(this.parent.jQ);
      this.parent.focus();
    }
    this.intervalId = setInterval(this.blink, 500);
    return this;
  };
  _.hide = function() {
    if ('intervalId' in this)
      clearInterval(this.intervalId);
    delete this.intervalId;
    this.jQ.detach();
    this.jQ = $();
    return this;
  };

  _.withDirInsertAt = function(dir, parent, withDir, oppDir) {
    var oldParent = this.parent;
    this.parent = parent;
    this[dir] = withDir;
    this[-dir] = oppDir;
    // by contract, .blur() is called after all has been said and done
    // and the cursor has actually been moved
    // FIXME pass cursor to .blur() so text can fix cursor pointers when removing itself
    if (oldParent !== parent && oldParent.blur) oldParent.blur(this);
  };
  _.insDirOf = function(dir, el) {
    prayDirection(dir);
    this.jQ.insDirOf(dir, el.jQ);
    this.withDirInsertAt(dir, el.parent, el[dir], el);
    this.parent.jQ.addClass('mq-hasCursor');
    return this;
  };
  _.insLeftOf = function(el) { return this.insDirOf(L, el); };
  _.insRightOf = function(el) { return this.insDirOf(R, el); };

  _.insAtDirEnd = function(dir, el) {
    prayDirection(dir);
    this.jQ.insAtDirEnd(dir, el.jQ);
    this.withDirInsertAt(dir, el, 0, el.ends[dir]);
    el.focus();
    return this;
  };
  _.insAtLeftEnd = function(el) { return this.insAtDirEnd(L, el); };
  _.insAtRightEnd = function(el) { return this.insAtDirEnd(R, el); };

  /**
   * jump up or down from one block Node to another:
   * - cache the current Point in the node we're jumping from
   * - check if there's a Point in it cached for the node we're jumping to
   *   + if so put the cursor there,
   *   + if not seek a position in the node that is horizontally closest to
   *     the cursor's current position
   */
  _.jumpUpDown = function(from, to) {
    var self = this;
    self.upDownCache[from.id] = Point.copy(self);
    var cached = self.upDownCache[to.id];
    if (cached) {
      cached[R] ? self.insLeftOf(cached[R]) : self.insAtRightEnd(cached.parent);
    }
    else {
      var pageX = self.offset().left;
      to.seek(pageX, self);
    }
  };
  _.offset = function() {
    //in Opera 11.62, .getBoundingClientRect() and hence jQuery::offset()
    //returns all 0's on inline elements with negative margin-right (like
    //the cursor) at the end of their parent, so temporarily remove the
    //negative margin-right when calling jQuery::offset()
    //Opera bug DSK-360043
    //http://bugs.jquery.com/ticket/11523
    //https://github.com/jquery/jquery/pull/717
    var self = this, offset = self.jQ.removeClass('mq-cursor').offset();
    self.jQ.addClass('mq-cursor');
    return offset;
  }
  _.unwrapGramp = function() {
    var gramp = this.parent.parent;
    var greatgramp = gramp.parent;
    var rightward = gramp[R];
    var cursor = this;

    var leftward = gramp[L];
    gramp.disown().eachChild(function(uncle) {
      if (uncle.isEmpty()) return;

      uncle.children()
        .adopt(greatgramp, leftward, rightward)
        .each(function(cousin) {
          cousin.jQ.insertBefore(gramp.jQ.first());
        })
      ;

      leftward = uncle.ends[R];
    });

    if (!this[R]) { //then find something to be rightward to insLeftOf
      if (this[L])
        this[R] = this[L][R];
      else {
        while (!this[R]) {
          this.parent = this.parent[R];
          if (this.parent)
            this[R] = this.parent.ends[L];
          else {
            this[R] = gramp[R];
            this.parent = greatgramp;
            break;
          }
        }
      }
    }
    if (this[R])
      this.insLeftOf(this[R]);
    else
      this.insAtRightEnd(greatgramp);

    gramp.jQ.remove();

    if (gramp[L].siblingDeleted) gramp[L].siblingDeleted(cursor.options, R);
    if (gramp[R].siblingDeleted) gramp[R].siblingDeleted(cursor.options, L);
  };
  _.startSelection = function() {
    var anticursor = this.anticursor = Point.copy(this);
    var ancestors = anticursor.ancestors = {}; // a map from each ancestor of
      // the anticursor, to its child that is also an ancestor; in other words,
      // the anticursor's ancestor chain in reverse order
    for (var ancestor = anticursor; ancestor.parent; ancestor = ancestor.parent) {
      ancestors[ancestor.parent.id] = ancestor;
    }
  };
  _.endSelection = function() {
    delete this.anticursor;
  };
  _.select = function() {
    var anticursor = this.anticursor;
    if (this[L] === anticursor[L] && this.parent === anticursor.parent) return false;

    // Find the lowest common ancestor (`lca`), and the ancestor of the cursor
    // whose parent is the LCA (which'll be an end of the selection fragment).
    for (var ancestor = this; ancestor.parent; ancestor = ancestor.parent) {
        if (anticursor.ancestors) {
            if (ancestor.parent.id in anticursor.ancestors) {
                var lca = ancestor.parent;
                break;
            }
        }
    }
    pray('cursor and anticursor in the same tree', lca);
    // The cursor and the anticursor should be in the same tree, because the
    // mousemove handler attached to the document, unlike the one attached to
    // the root HTML DOM element, doesn't try to get the math tree node of the
    // mousemove target, and Cursor::seek() based solely on coordinates stays
    // within the tree of `this` cursor's root.

    // The other end of the selection fragment, the ancestor of the anticursor
    // whose parent is the LCA.
    var antiAncestor = anticursor.ancestors[lca.id];

    // Now we have two either Nodes or Points, guaranteed to have a common
    // parent and guaranteed that if both are Points, they are not the same,
    // and we have to figure out which is the left end and which the right end
    // of the selection.
    var leftEnd, rightEnd, dir = R;

    // This is an extremely subtle algorithm.
    // As a special case, `ancestor` could be a Point and `antiAncestor` a Node
    // immediately to `ancestor`'s left.
    // In all other cases,
    // - both Nodes
    // - `ancestor` a Point and `antiAncestor` a Node
    // - `ancestor` a Node and `antiAncestor` a Point
    // `antiAncestor[R] === rightward[R]` for some `rightward` that is
    // `ancestor` or to its right, if and only if `antiAncestor` is to
    // the right of `ancestor`.
    if (ancestor[L] !== antiAncestor) {
      for (var rightward = ancestor; rightward; rightward = rightward[R]) {
        if (rightward[R] === antiAncestor[R]) {
          dir = L;
          leftEnd = ancestor;
          rightEnd = antiAncestor;
          break;
        }
      }
    }
    if (dir === R) {
      leftEnd = antiAncestor;
      rightEnd = ancestor;
    }

    // only want to select Nodes up to Points, can't select Points themselves
    if (leftEnd instanceof Point) leftEnd = leftEnd[R];
    if (rightEnd instanceof Point) rightEnd = rightEnd[L];

    this.hide().selection = lca.selectChildren(leftEnd, rightEnd);
    this.insDirOf(dir, this.selection.ends[dir]);
    this.selectionChanged();
    return true;
  };

  _.clearSelection = function() {
    if (this.selection) {
      this.selection.clear();
      delete this.selection;
      this.selectionChanged();
    }
    return this;
  };
  _.deleteSelection = function() {
    if (!this.selection) return;

    this[L] = this.selection.ends[L][L];
    this[R] = this.selection.ends[R][R];
    this.selection.remove();
    this.selectionChanged();
    delete this.selection;
  };
  _.replaceSelection = function() {
    var seln = this.selection;
    if (seln) {
      this[L] = seln.ends[L][L];
      this[R] = seln.ends[R][R];
      delete this.selection;
    }
    return seln;
  };
});

var Selection = P(Fragment, function(_, super_) {
  _.init = function() {
    super_.init.apply(this, arguments);
    this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent();
      //can't do wrapAll(this.jQ = $(...)) because wrapAll will clone it
  };
  _.adopt = function() {
    this.jQ.replaceWith(this.jQ = this.jQ.children());
    return super_.adopt.apply(this, arguments);
  };
  _.clear = function() {
    // using the browser's native .childNodes property so that we
    // don't discard text nodes.
    this.jQ.replaceWith(this.jQ[0].childNodes);
    return this;
  };
  _.join = function(methodName) {
    return this.fold('', function(fold, child) {
      return fold + child[methodName]();
    });
  };
});
/*********************************************
 * Controller for a MathQuill instance,
 * on which services are registered with
 *
 *   Controller.open(function(_) { ... });
 *
 ********************************************/

var Controller = P(function(_) {
  _.init = function(root, container, options) {
    this.id = root.id;
    this.data = {};

    this.root = root;
    this.container = container;
    this.options = options;

    root.controller = this;

    this.cursor = root.cursor = Cursor(root, options);
    // TODO: stop depending on root.cursor, and rm it
  };

  _.handle = function(name, dir) {
    var handlers = this.options.handlers;
    if (handlers && handlers.fns[name]) {
      var mq = handlers.APIClasses[this.KIND_OF_MQ](this);
      if (dir === L || dir === R) handlers.fns[name](dir, mq);
      else handlers.fns[name](mq);
    }
  };

  var notifyees = [];
  this.onNotify = function(f) { notifyees.push(f); };
  _.notify = function() {
    for (var i = 0; i < notifyees.length; i += 1) {
      notifyees[i].apply(this.cursor, arguments);
    }
    return this;
  };
});
/*********************************************************
 * The publicly exposed MathQuill API.
 ********************************************************/

var API = {}, Options = P(), optionProcessors = {}, Progenote = P(), EMBEDS = {};

/**
 * Interface Versioning (#459, #495) to allow us to virtually guarantee
 * backcompat. v0.10.x introduces it, so for now, don't completely break the
 * API for people who don't know about it, just complain with console.warn().
 *
 * The methods are shimmed in outro.js so that MQ.MathField.prototype etc can
 * be accessed.
 */
function insistOnInterVer() {
  if (window.console) console.warn(
    'You are using the MathQuill API without specifying an interface version, ' +
    'which will fail in v1.0.0. Easiest fix is to do the following before ' +
    'doing anything else:\n' +
    '\n' +
    '    MathQuill = MathQuill.getInterface(1);\n' +
    '    // now MathQuill.MathField() works like it used to\n' +
    '\n' +
    'See also the "`dev` branch (2014\u20132015) \u2192 v0.10.0 Migration Guide" at\n' +
    '  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide'
  );
}
// globally exported API object
function MathQuill(el) {
  insistOnInterVer();
  return MQ1(el);
};
MathQuill.prototype = Progenote.p;
MathQuill.VERSION = "v0.10.1";
MathQuill.interfaceVersion = function(v) {
  // shim for #459-era interface versioning (ended with #495)
  if (v !== 1) throw 'Only interface version 1 supported. You specified: ' + v;
  insistOnInterVer = function() {
    if (window.console) console.warn(
      'You called MathQuill.interfaceVersion(1); to specify the interface ' +
      'version, which will fail in v1.0.0. You can fix this easily by doing ' +
      'this before doing anything else:\n' +
      '\n' +
      '    MathQuill = MathQuill.getInterface(1);\n' +
      '    // now MathQuill.MathField() works like it used to\n' +
      '\n' +
      'See also the "`dev` branch (2014\u20132015) \u2192 v0.10.0 Migration Guide" at\n' +
      '  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide'
    );
  };
  insistOnInterVer();
  return MathQuill;
};
MathQuill.getInterface = getInterface;

var MIN = getInterface.MIN = 1, MAX = getInterface.MAX = 2;
function getInterface(v) {
  if (!(MIN <= v && v <= MAX)) throw 'Only interface versions between ' +
    MIN + ' and ' + MAX + ' supported. You specified: ' + v;

  /**
   * Function that takes an HTML element and, if it's the root HTML element of a
   * static math or math or text field, returns an API object for it (else, null).
   *
   *   var mathfield = MQ.MathField(mathFieldSpan);
   *   assert(MQ(mathFieldSpan).id === mathfield.id);
   *   assert(MQ(mathFieldSpan).id === MQ(mathFieldSpan).id);
   *
   */
  function MQ(el) {
    if (!el || !el.nodeType) return null; // check that `el` is a HTML element, using the
      // same technique as jQuery: https://github.com/jquery/jquery/blob/679536ee4b7a92ae64a5f58d90e9cc38c001e807/src/core/init.js#L92
    var blockId = $(el).children('.mq-root-block').attr(mqBlockId);
    var ctrlr = blockId && Node.byId[blockId].controller;
    return ctrlr ? APIClasses[ctrlr.KIND_OF_MQ](ctrlr) : null;
  };
  var APIClasses = {};

  MQ.L = L;
  MQ.R = R;
  MQ.saneKeyboardEvents = saneKeyboardEvents;

  function config(currentOptions, newOptions) {
    if (newOptions && newOptions.handlers) {
      newOptions.handlers = { fns: newOptions.handlers, APIClasses: APIClasses };
    }
    for (var name in newOptions) if (newOptions.hasOwnProperty(name)) {
      var value = newOptions[name], processor = optionProcessors[name];
      currentOptions[name] = (processor ? processor(value) : value);
    }
  }
  MQ.config = function(opts) { config(Options.p, opts); return this; };
  MQ.registerEmbed = function(name, options) {
    if (!/^[a-z][a-z0-9]*$/i.test(name)) {
      throw 'Embed name must start with letter and be only letters and digits';
    }
    EMBEDS[name] = options;
  };

  var AbstractMathQuill = APIClasses.AbstractMathQuill = P(Progenote, function(_) {
    _.init = function(ctrlr) {
      this.__controller = ctrlr;
      this.__options = ctrlr.options;
      this.id = ctrlr.id;
      this.data = ctrlr.data;
    };
    _.__mathquillify = function(classNames) {
      var ctrlr = this.__controller, root = ctrlr.root, el = ctrlr.container;
      ctrlr.createTextarea();

      var contents = el.addClass(classNames).contents().detach();
      root.jQ =
        $('<span class="mq-root-block"/>').attr(mqBlockId, root.id).appendTo(el);
      this.latex(contents.text());

      this.revert = function() {
        return el.empty().unbind('.mathquill')
        .removeClass('mq-editable-field mq-math-mode mq-text-mode')
        .append(contents);
      };
    };
    _.config = function(opts) { config(this.__options, opts); return this; };
    _.el = function() { return this.__controller.container[0]; };
    _.text = function() { return this.__controller.exportText(); };
    _.latex = function(latex) {
      if (arguments.length > 0) {
        this.__controller.renderLatexMath(latex);
        if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
        return this;
      }
      return this.__controller.exportLatex();
    };
    _.html = function() {
      return this.__controller.root.jQ.html()
        .replace(/ mathquill-(?:command|block)-id="?\d+"?/g, '')
        .replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, '')
        .replace(/ mq-hasCursor|mq-hasCursor ?/, '')
        .replace(/ class=(""|(?= |>))/g, '');
    };
    _.reflow = function() {
      this.__controller.root.postOrder('reflow');
      return this;
    };
  });
  MQ.prototype = AbstractMathQuill.prototype;

  APIClasses.EditableField = P(AbstractMathQuill, function(_, super_) {
    _.__mathquillify = function() {
      super_.__mathquillify.apply(this, arguments);
      this.__controller.editable = true;
      this.__controller.delegateMouseEvents();
      this.__controller.editablesTextareaEvents();
      return this;
    };
    _.focus = function() { this.__controller.textarea.focus(); return this; };
    _.blur = function() { this.__controller.textarea.blur(); return this; };
    _.write = function(latex) {
      this.__controller.writeLatex(latex);
      this.__controller.scrollHoriz();
      if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
      return this;
    };
    _.cmd = function(cmd) {
      var ctrlr = this.__controller.notify(), cursor = ctrlr.cursor;
      if (/^\\[a-z]+$/i.test(cmd)) {
        cmd = cmd.slice(1);
        var klass = LatexCmds[cmd] || Environments[cmd];
        if (klass) {
          cmd = klass(cmd);
          if (cursor.selection) cmd.replaces(cursor.replaceSelection());
          cmd.createLeftOf(cursor.show());
          this.__controller.scrollHoriz();
        }
        else /* TODO: API needs better error reporting */;
      }
      else cursor.parent.write(cursor, cmd);
      if (ctrlr.blurred) cursor.hide().parent.blur();
      return this;
    };
    _.select = function() {
      var ctrlr = this.__controller;
      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
      while (ctrlr.cursor[L]) ctrlr.selectLeft();
      return this;
    };
    _.clearSelection = function() {
      this.__controller.cursor.clearSelection();
      return this;
    };

    _.moveToDirEnd = function(dir) {
      this.__controller.notify('move').cursor.insAtDirEnd(dir, this.__controller.root);
      return this;
    };
    _.moveToLeftEnd = function() { return this.moveToDirEnd(L); };
    _.moveToRightEnd = function() { return this.moveToDirEnd(R); };

    _.keystroke = function(keys) {
      var keys = keys.replace(/^\s+|\s+$/g, '').split(/\s+/);
      for (var i = 0; i < keys.length; i += 1) {
        this.__controller.keystroke(keys[i], { preventDefault: noop });
      }
      return this;
    };
    _.typedText = function(text) {
      for (var i = 0; i < text.length; i += 1) this.__controller.typedText(text.charAt(i));
      return this;
    };
    _.dropEmbedded = function(pageX, pageY, options) {
      var clientX = pageX - $(window).scrollLeft();
      var clientY = pageY - $(window).scrollTop();

      var el = document.elementFromPoint(clientX, clientY);
      this.__controller.seek($(el), pageX, pageY);
      var cmd = Embed().setOptions(options);
      cmd.createLeftOf(this.__controller.cursor);
    };
    _.clickAt = function(clientX, clientY, target) {
      target = target || document.elementFromPoint(clientX, clientY);

      var ctrlr = this.__controller, root = ctrlr.root;
      if (!jQuery.contains(root.jQ[0], target)) target = root.jQ[0];
      ctrlr.seek($(target), clientX + pageXOffset, clientY + pageYOffset);
      if (ctrlr.blurred) this.focus();
      return this;
    };
    _.ignoreNextMousedown = function(fn) {
      this.__controller.cursor.options.ignoreNextMousedown = fn;
      return this;
    };
  });
  MQ.EditableField = function() { throw "wtf don't call me, I'm 'abstract'"; };
  MQ.EditableField.prototype = APIClasses.EditableField.prototype;

  /**
   * Export the API functions that MathQuill-ify an HTML element into API objects
   * of each class. If the element had already been MathQuill-ified but into a
   * different kind (or it's not an HTML element), return null.
   */
  for (var kind in API) (function(kind, defAPIClass) {
    var APIClass = APIClasses[kind] = defAPIClass(APIClasses);
    MQ[kind] = function(el, opts) {
      var mq = MQ(el);
      if (mq instanceof APIClass || !el || !el.nodeType) return mq;
      var ctrlr = Controller(APIClass.RootBlock(), $(el), Options());
      ctrlr.KIND_OF_MQ = kind;
      return APIClass(ctrlr).__mathquillify(opts, v);
    };
    MQ[kind].prototype = APIClass.prototype;
  }(kind, API[kind]));

  return MQ;
}

MathQuill.noConflict = function() {
  window.MathQuill = origMathQuill;
  return MathQuill;
};
var origMathQuill = window.MathQuill;
window.MathQuill = MathQuill;

function RootBlockMixin(_) {
  var names = 'moveOutOf deleteOutOf selectOutOf upOutOf downOutOf'.split(' ');
  for (var i = 0; i < names.length; i += 1) (function(name) {
    _[name] = function(dir) { this.controller.handle(name, dir); };
  }(names[i]));
  _.reflow = function() {
    this.controller.handle('reflow');
    this.controller.handle('edited');
    this.controller.handle('edit');
  };
}
/*************************************************
 * Sane Keyboard Events Shim
 *
 * An abstraction layer wrapping the textarea in
 * an object with methods to manipulate and listen
 * to events on, that hides all the nasty cross-
 * browser incompatibilities behind a uniform API.
 *
 * Design goal: This is a *HARD* internal
 * abstraction barrier. Cross-browser
 * inconsistencies are not allowed to leak through
 * and be dealt with by event handlers. All future
 * cross-browser issues that arise must be dealt
 * with here, and if necessary, the API updated.
 *
 * Organization:
 * - key values map and stringify()
 * - saneKeyboardEvents()
 *    + defer() and flush()
 *    + event handler logic
 *    + attach event handlers and export methods
 ************************************************/

var saneKeyboardEvents = (function() {
  // The following [key values][1] map was compiled from the
  // [DOM3 Events appendix section on key codes][2] and
  // [a widely cited report on cross-browser tests of key codes][3],
  // except for 10: 'Enter', which I've empirically observed in Safari on iOS
  // and doesn't appear to conflict with any other known key codes.
  //
  // [1]: http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120614/#keys-keyvalues
  // [2]: http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120614/#fixed-virtual-key-codes
  // [3]: http://unixpapa.com/js/key.html
  var KEY_VALUES = {
    8: 'Backspace',
    9: 'Tab',

    10: 'Enter', // for Safari on iOS

    13: 'Enter',

    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    20: 'CapsLock',

    27: 'Esc',

    32: 'Spacebar',

    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',

    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',

    45: 'Insert',

    46: 'Del',

    144: 'NumLock'
  };

  // To the extent possible, create a normalized string representation
  // of the key combo (i.e., key code and modifier keys).
  function stringify(evt) {
    var which = evt.which || evt.keyCode;
    var keyVal = KEY_VALUES[which];
    var key;
    var modifiers = [];

    if (evt.ctrlKey) modifiers.push('Ctrl');
    if (evt.originalEvent && evt.originalEvent.metaKey) modifiers.push('Meta');
    if (evt.altKey) modifiers.push('Alt');
    if (evt.shiftKey) modifiers.push('Shift');

    key = keyVal || String.fromCharCode(which);

    if (!modifiers.length && !keyVal) return key;

    modifiers.push(key);
    return modifiers.join('-');
  }

  // create a keyboard events shim that calls callbacks at useful times
  // and exports useful public methods
  return function saneKeyboardEvents(el, handlers) {
    var keydown = null;
    var keypress = null;

    var textarea = jQuery(el);
    var target = jQuery(handlers.container || textarea);

    // checkTextareaFor() is called after key or clipboard events to
    // say "Hey, I think something was just typed" or "pasted" etc,
    // so that at all subsequent opportune times (next event or timeout),
    // will check for expected typed or pasted text.
    // Need to check repeatedly because #135: in Safari 5.1 (at least),
    // after selecting something and then typing, the textarea is
    // incorrectly reported as selected during the input event (but not
    // subsequently).
    var checkTextarea = noop, timeoutId;
    function checkTextareaFor(checker) {
      checkTextarea = checker;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checker);
    }
    function checkTextareaOnce(checker) {
      checkTextareaFor(function(e) {
        checkTextarea = noop;
        clearTimeout(timeoutId);
        checker(e);
      });
    }
    target.bind('keydown keypress input keyup focusout paste', function(e) { checkTextarea(e); });


    // -*- public methods -*- //
    function select(text) {
      // check textarea at least once/one last time before munging (so
      // no race condition if selection happens after keypress/paste but
      // before checkTextarea), then never again ('cos it's been munged)
      checkTextarea();
      checkTextarea = noop;
      clearTimeout(timeoutId);

      textarea.val(text);
      if (text && textarea[0].select) textarea[0].select();
      shouldBeSelected = !!text;
    }
    var shouldBeSelected = false;

    // -*- helper subroutines -*- //

    // Determine whether there's a selection in the textarea.
    // This will always return false in IE < 9, which don't support
    // HTMLTextareaElement::selection{Start,End}.
    function hasSelection() {
      var dom = textarea[0];

      if (!('selectionStart' in dom)) return false;
      return dom.selectionStart !== dom.selectionEnd;
    }

    function handleKey() {
      handlers.keystroke(stringify(keydown), keydown);
    }

    // -*- event handlers -*- //
    function onKeydown(e) {
      keydown = e;
      keypress = null;

      if (shouldBeSelected) checkTextareaOnce(function(e) {
        if (!(e && e.type === 'focusout') && textarea[0].select) {
          // re-select textarea in case it's an unrecognized key that clears
          // the selection, then never again, 'cos next thing might be blur
          textarea[0].select();
        }
      });

      handleKey();
    }

    function onKeypress(e) {
      // call the key handler for repeated keypresses.
      // This excludes keypresses that happen directly
      // after keydown.  In that case, there will be
      // no previous keypress, so we skip it here
      if (keydown && keypress) handleKey();

      keypress = e;

      checkTextareaFor(typedText);
    }
    function onKeyup(e) {
      // Handle case of no keypress event being sent
      if (!!keydown && !keypress) checkTextareaFor(typedText);
    }
    function typedText() {
      // If there is a selection, the contents of the textarea couldn't
      // possibly have just been typed in.
      // This happens in browsers like Firefox and Opera that fire
      // keypress for keystrokes that are not text entry and leave the
      // selection in the textarea alone, such as Ctrl-C.
      // Note: we assume that browsers that don't support hasSelection()
      // also never fire keypress on keystrokes that are not text entry.
      // This seems reasonably safe because:
      // - all modern browsers including IE 9+ support hasSelection(),
      //   making it extremely unlikely any browser besides IE < 9 won't
      // - as far as we know IE < 9 never fires keypress on keystrokes
      //   that aren't text entry, which is only as reliable as our
      //   tests are comprehensive, but the IE < 9 way to do
      //   hasSelection() is poorly documented and is also only as
      //   reliable as our tests are comprehensive
      // If anything like #40 or #71 is reported in IE < 9, see
      // b1318e5349160b665003e36d4eedd64101ceacd8
      if (hasSelection()) return;

      var text = textarea.val();
      if (text.length === 1) {
        textarea.val('');
        handlers.typedText(text);
      } // in Firefox, keys that don't type text, just clear seln, fire keypress
      // https://github.com/mathquill/mathquill/issues/293#issuecomment-40997668
      else if (text && textarea[0].select) textarea[0].select(); // re-select if that's why we're here
    }

    function onBlur() { keydown = keypress = null; }

    function onPaste(e) {
      // browsers are dumb.
      //
      // In Linux, middle-click pasting causes onPaste to be called,
      // when the textarea is not necessarily focused.  We focus it
      // here to ensure that the pasted text actually ends up in the
      // textarea.
      //
      // It's pretty nifty that by changing focus in this handler,
      // we can change the target of the default action.  (This works
      // on keydown too, FWIW).
      //
      // And by nifty, we mean dumb (but useful sometimes).
      textarea.focus();

      checkTextareaFor(pastedText);
    }
    function pastedText() {
      var text = textarea.val();
      textarea.val('');
      if (text) handlers.paste(text);
    }

    // -*- attach event handlers -*- //
    target.bind({
      keydown: onKeydown,
      keypress: onKeypress,
      keyup: onKeyup,
      focusout: onBlur,
      cut: function() { checkTextareaOnce(function() { handlers.cut(); }); },
      copy: function() { checkTextareaOnce(function() { handlers.copy(); }); },
      paste: onPaste
    });

    // -*- export public methods -*- //
    return {
      select: select
    };
  };
}());
var Parser = P(function(_, super_, Parser) {
  // The Parser object is a wrapper for a parser function.
  // Externally, you use one to parse a string by calling
  //   var result = SomeParser.parse('Me Me Me! Parse Me!');
  // You should never call the constructor, rather you should
  // construct your Parser from the base parsers and the
  // parser combinator methods.

  function parseError(stream, message) {
    if (stream) {
      stream = "'"+stream+"'";
    }
    else {
      stream = 'EOF';
    }

    throw 'Parse Error: '+message+' at '+stream;
  }

  _.init = function(body) { this._ = body; };

  _.parse = function(stream) {
    return this.skip(eof)._(''+stream, success, parseError);

    function success(stream, result) { return result; }
  };

  // -*- primitive combinators -*- //
  _.or = function(alternative) {
    pray('or is passed a parser', alternative instanceof Parser);

    var self = this;

    return Parser(function(stream, onSuccess, onFailure) {
      return self._(stream, onSuccess, failure);

      function failure(newStream) {
        return alternative._(stream, onSuccess, onFailure);
      }
    });
  };

  _.then = function(next) {
    var self = this;

    return Parser(function(stream, onSuccess, onFailure) {
      return self._(stream, success, onFailure);

      function success(newStream, result) {
        var nextParser = (next instanceof Parser ? next : next(result));
        pray('a parser is returned', nextParser instanceof Parser);
        return nextParser._(newStream, onSuccess, onFailure);
      }
    });
  };

  // -*- optimized iterative combinators -*- //
  _.many = function() {
    var self = this;

    return Parser(function(stream, onSuccess, onFailure) {
      var xs = [];
      while (self._(stream, success, failure));
      return onSuccess(stream, xs);

      function success(newStream, x) {
        stream = newStream;
        xs.push(x);
        return true;
      }

      function failure() {
        return false;
      }
    });
  };

  _.times = function(min, max) {
    if (arguments.length < 2) max = min;
    var self = this;

    return Parser(function(stream, onSuccess, onFailure) {
      var xs = [];
      var result = true;
      var failure;

      for (var i = 0; i < min; i += 1) {
        result = self._(stream, success, firstFailure);
        if (!result) return onFailure(stream, failure);
      }

      for (; i < max && result; i += 1) {
        result = self._(stream, success, secondFailure);
      }

      return onSuccess(stream, xs);

      function success(newStream, x) {
        xs.push(x);
        stream = newStream;
        return true;
      }

      function firstFailure(newStream, msg) {
        failure = msg;
        stream = newStream;
        return false;
      }

      function secondFailure(newStream, msg) {
        return false;
      }
    });
  };

  // -*- higher-level combinators -*- //
  _.result = function(res) { return this.then(succeed(res)); };
  _.atMost = function(n) { return this.times(0, n); };
  _.atLeast = function(n) {
    var self = this;
    return self.times(n).then(function(start) {
      return self.many().map(function(end) {
        return start.concat(end);
      });
    });
  };

  _.map = function(fn) {
    return this.then(function(result) { return succeed(fn(result)); });
  };

  _.skip = function(two) {
    return this.then(function(result) { return two.result(result); });
  };

  // -*- primitive parsers -*- //
  var string = this.string = function(str) {
    var len = str.length;
    var expected = "expected '"+str+"'";

    return Parser(function(stream, onSuccess, onFailure) {
      var head = stream.slice(0, len);

      if (head === str) {
        return onSuccess(stream.slice(len), head);
      }
      else {
        return onFailure(stream, expected);
      }
    });
  };

  var regex = this.regex = function(re) {
    pray('regexp parser is anchored', re.toString().charAt(1) === '^');

    var expected = 'expected '+re;

    return Parser(function(stream, onSuccess, onFailure) {
      var match = re.exec(stream);

      if (match) {
        var result = match[0];
        return onSuccess(stream.slice(result.length), result);
      }
      else {
        return onFailure(stream, expected);
      }
    });
  };

  var succeed = Parser.succeed = function(result) {
    return Parser(function(stream, onSuccess) {
      return onSuccess(stream, result);
    });
  };

  var fail = Parser.fail = function(msg) {
    return Parser(function(stream, _, onFailure) {
      return onFailure(stream, msg);
    });
  };

  var letter = Parser.letter = regex(/^[a-z]/i);
  var letters = Parser.letters = regex(/^[a-z]*/i);
  var digit = Parser.digit = regex(/^[0-9]/);
  var digits = Parser.digits = regex(/^[0-9]*/);
  var whitespace = Parser.whitespace = regex(/^\s+/);
  var optWhitespace = Parser.optWhitespace = regex(/^\s*/);

  var any = Parser.any = Parser(function(stream, onSuccess, onFailure) {
    if (!stream) return onFailure(stream, 'expected any character');

    return onSuccess(stream.slice(1), stream.charAt(0));
  });

  var all = Parser.all = Parser(function(stream, onSuccess, onFailure) {
    return onSuccess('', stream);
  });

  var eof = Parser.eof = Parser(function(stream, onSuccess, onFailure) {
    if (stream) return onFailure(stream, 'expected EOF');

    return onSuccess(stream, stream);
  });
});
// Parser MathBlock
var latexMathParser = (function() {
  function commandToBlock(cmd) { // can also take in a Fragment
    var block = MathBlock();
    cmd.adopt(block, 0, 0);
    return block;
  }
  function joinBlocks(blocks) {
    var firstBlock = blocks[0] || MathBlock();

    for (var i = 1; i < blocks.length; i += 1) {
      blocks[i].children().adopt(firstBlock, firstBlock.ends[R], 0);
    }

    return firstBlock;
  }

  var string = Parser.string;
  var regex = Parser.regex;
  var letter = Parser.letter;
  var any = Parser.any;
  var optWhitespace = Parser.optWhitespace;
  var succeed = Parser.succeed;
  var fail = Parser.fail;

  // Parsers yielding either MathCommands, or Fragments of MathCommands
  //   (either way, something that can be adopted by a MathBlock)
  var variable = letter.map(function(c) { return Letter(c); });
  var symbol = regex(/^[^${}\\_^]/).map(function(c) { return VanillaSymbol(c); });

  var controlSequence =
    regex(/^[^\\a-eg-zA-Z]/) // hotfix #164; match MathBlock::write
    .or(string('\\').then(
      regex(/^[a-z]+/i)
      .or(regex(/^\s+/).result(' '))
      .or(any)
    )).then(function(ctrlSeq) {
      var cmdKlass = LatexCmds[ctrlSeq];

      if (cmdKlass) {
        return cmdKlass(ctrlSeq).parser();
      }
      else {
        return fail('unknown command: \\'+ctrlSeq);
      }
    })
  ;

  var command =
    controlSequence
    .or(variable)
    .or(symbol)
  ;

  // Parsers yielding MathBlocks
  var mathGroup = string('{').then(function() { return mathSequence; }).skip(string('}'));
  var mathBlock = optWhitespace.then(mathGroup.or(command.map(commandToBlock)));
  var mathSequence = mathBlock.many().map(joinBlocks).skip(optWhitespace);

  var optMathBlock =
    string('[').then(
      mathBlock.then(function(block) {
        return block.join('latex') !== ']' ? succeed(block) : fail();
      })
      .many().map(joinBlocks).skip(optWhitespace)
    ).skip(string(']'))
  ;

  var latexMath = mathSequence;

  latexMath.block = mathBlock;
  latexMath.optBlock = optMathBlock;
  return latexMath;
})();

Controller.open(function(_, super_) {
  _.exportLatex = function() {
    return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/ig,'$1');
  };
  _.writeLatex = function(latex) {
    var cursor = this.notify('edit').cursor;

    var all = Parser.all;
    var eof = Parser.eof;

    var block = latexMathParser.skip(eof).or(all.result(false)).parse(latex);

    if (block && !block.isEmpty()) {
      block.children().adopt(cursor.parent, cursor[L], cursor[R]);
      var jQ = block.jQize();
      jQ.insertBefore(cursor.jQ);
      cursor[L] = block.ends[R];
      block.finalizeInsert(cursor.options, cursor);
      if (block.ends[R][R].siblingCreated) block.ends[R][R].siblingCreated(cursor.options, L);
      if (block.ends[L][L].siblingCreated) block.ends[L][L].siblingCreated(cursor.options, R);
      cursor.parent.bubble('reflow');
    }

    return this;
  };
  _.renderLatexMath = function(latex) {
    var root = this.root, cursor = this.cursor;

    var all = Parser.all;
    var eof = Parser.eof;

    var block = latexMathParser.skip(eof).or(all.result(false)).parse(latex);

    root.eachChild('postOrder', 'dispose');
    root.ends[L] = root.ends[R] = 0;

    if (block) {
      block.children().adopt(root, 0, 0);
    }

    var jQ = root.jQ;

    if (block) {
      var html = block.join('html');
      jQ.html(html);
      root.jQize(jQ.children());
      root.finalizeInsert(cursor.options);
    }
    else {
      jQ.empty();
    }

    delete cursor.selection;
    cursor.insAtRightEnd(root);
  };
  _.renderLatexText = function(latex) {
    var root = this.root, cursor = this.cursor;

    root.jQ.children().slice(1).remove();
    root.eachChild('postOrder', 'dispose');
    root.ends[L] = root.ends[R] = 0;
    delete cursor.selection;
    cursor.show().insAtRightEnd(root);

    var regex = Parser.regex;
    var string = Parser.string;
    var eof = Parser.eof;
    var all = Parser.all;

    // Parser RootMathCommand
    var mathMode = string('$').then(latexMathParser)
      // because TeX is insane, math mode doesn't necessarily
      // have to end.  So we allow for the case that math mode
      // continues to the end of the stream.
      .skip(string('$').or(eof))
      .map(function(block) {
        // HACK FIXME: this shouldn't have to have access to cursor
        var rootMathCommand = RootMathCommand(cursor);

        rootMathCommand.createBlocks();
        var rootMathBlock = rootMathCommand.ends[L];
        block.children().adopt(rootMathBlock, 0, 0);

        return rootMathCommand;
      })
    ;

    var escapedDollar = string('\\$').result('$');
    var textChar = escapedDollar.or(regex(/^[^$]/)).map(VanillaSymbol);
    var latexText = mathMode.or(textChar).many();
    var commands = latexText.skip(eof).or(all.result(false)).parse(latex);

    if (commands) {
      for (var i = 0; i < commands.length; i += 1) {
        commands[i].adopt(root, root.ends[R], 0);
      }

      root.jQize().appendTo(root.jQ);

      root.finalizeInsert(cursor.options);
    }
  };
});
Controller.open(function(_) {
  _.focusBlurEvents = function() {
    var ctrlr = this, root = ctrlr.root, cursor = ctrlr.cursor;
    var blurTimeout;
    ctrlr.textarea.focus(function() {
      ctrlr.blurred = false;
      clearTimeout(blurTimeout);
      ctrlr.container.addClass('mq-focused');
      if (!cursor.parent)
        cursor.insAtRightEnd(root);
      if (cursor.selection) {
        cursor.selection.jQ.removeClass('mq-blur');
        ctrlr.selectionChanged(); //re-select textarea contents after tabbing away and back
      }
      else
        cursor.show();
    }).blur(function() {
      ctrlr.blurred = true;
      blurTimeout = setTimeout(function() { // wait for blur on window; if
        root.postOrder('intentionalBlur'); // none, intentional blur: #264
        cursor.clearSelection().endSelection();
        blur();
      });
      $(window).bind('blur', windowBlur);
    });
    function windowBlur() { // blur event also fired on window, just switching
      clearTimeout(blurTimeout); // tabs/windows, not intentional blur
      if (cursor.selection) cursor.selection.jQ.addClass('mq-blur');
      blur();
    }
    function blur() { // not directly in the textarea blur handler so as to be
      cursor.hide().parent.blur(); // synchronous with/in the same frame as
      ctrlr.container.removeClass('mq-focused'); // clearing/blurring selection
      $(window).unbind('blur', windowBlur);
    }
    ctrlr.blurred = true;
    cursor.hide().parent.blur();
  };
});

/**
 * TODO: I wanted to move MathBlock::focus and blur here, it would clean
 * up lots of stuff like, TextBlock::focus is set to MathBlock::focus
 * and TextBlock::blur calls MathBlock::blur, when instead they could
 * use inheritance and super_.
 *
 * Problem is, there's lots of calls to .focus()/.blur() on nodes
 * outside Controller::focusBlurEvents(), such as .postOrder('blur') on
 * insertion, which if MathBlock::blur becomes Node::blur, would add the
 * 'blur' CSS class to all Symbol's (because .isEmpty() is true for all
 * of them).
 *
 * I'm not even sure there aren't other troublesome calls to .focus() or
 * .blur(), so this is TODO for now.
 */
/***********************************************
 * Export math in a human-readable text format
 * As you can see, only half-baked so far.
 **********************************************/

Controller.open(function(_, super_) {
  _.exportText = function() {
    return this.root.foldChildren('', function(text, child) {
      return text + child.text();
    });
  };
});
/*****************************************
 * Deals with the browser DOM events from
 * interaction with the typist.
 ****************************************/

Controller.open(function(_) {
  _.keystroke = function(key, evt) {
    this.cursor.parent.keystroke(key, evt, this);
  };
});

Node.open(function(_) {
  _.keystroke = function(key, e, ctrlr) {
    var cursor = ctrlr.cursor;

    switch (key) {
    case 'Ctrl-Shift-Backspace':
    case 'Ctrl-Backspace':
      ctrlr.ctrlDeleteDir(L);
      break;

    case 'Shift-Backspace':
    case 'Backspace':
      ctrlr.backspace();
      break;

    // Tab or Esc -> go one block right if it exists, else escape right.
    case 'Esc':
    case 'Tab':
      ctrlr.escapeDir(R, key, e);
      return;

    // Shift-Tab -> go one block left if it exists, else escape left.
    case 'Shift-Tab':
    case 'Shift-Esc':
      ctrlr.escapeDir(L, key, e);
      return;

    // End -> move to the end of the current block.
    case 'End':
      ctrlr.notify('move').cursor.insAtRightEnd(cursor.parent);
      break;

    // Ctrl-End -> move all the way to the end of the root block.
    case 'Ctrl-End':
      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
      break;

    // Shift-End -> select to the end of the current block.
    case 'Shift-End':
      while (cursor[R]) {
        ctrlr.selectRight();
      }
      break;

    // Ctrl-Shift-End -> select to the end of the root block.
    case 'Ctrl-Shift-End':
      while (cursor[R] || cursor.parent !== ctrlr.root) {
        ctrlr.selectRight();
      }
      break;

    // Home -> move to the start of the root block or the current block.
    case 'Home':
      ctrlr.notify('move').cursor.insAtLeftEnd(cursor.parent);
      break;

    // Ctrl-Home -> move to the start of the current block.
    case 'Ctrl-Home':
      ctrlr.notify('move').cursor.insAtLeftEnd(ctrlr.root);
      break;

    // Shift-Home -> select to the start of the current block.
    case 'Shift-Home':
      while (cursor[L]) {
        ctrlr.selectLeft();
      }
      break;

    // Ctrl-Shift-Home -> move to the start of the root block.
    case 'Ctrl-Shift-Home':
      while (cursor[L] || cursor.parent !== ctrlr.root) {
        ctrlr.selectLeft();
      }
      break;

    case 'Left': ctrlr.moveLeft(); break;
    case 'Shift-Left': ctrlr.selectLeft(); break;
    case 'Ctrl-Left': break;

    case 'Right': ctrlr.moveRight(); break;
    case 'Shift-Right': ctrlr.selectRight(); break;
    case 'Ctrl-Right': break;

    case 'Up': ctrlr.moveUp(); break;
    case 'Down': ctrlr.moveDown(); break;

    case 'Shift-Up':
      if (cursor[L]) {
        while (cursor[L]) ctrlr.selectLeft();
      } else {
        ctrlr.selectLeft();
      }

    case 'Shift-Down':
      if (cursor[R]) {
        while (cursor[R]) ctrlr.selectRight();
      }
      else {
        ctrlr.selectRight();
      }

    case 'Ctrl-Up': break;
    case 'Ctrl-Down': break;

    case 'Ctrl-Shift-Del':
    case 'Ctrl-Del':
      ctrlr.ctrlDeleteDir(R);
      break;

    case 'Shift-Del':
    case 'Del':
      ctrlr.deleteForward();
      break;

    case 'Meta-A':
    case 'Ctrl-A':
      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
      while (cursor[L]) ctrlr.selectLeft();
      break;

    default:
      return;
    }
    e.preventDefault();
    ctrlr.scrollHoriz();
  };

  _.moveOutOf = // called by Controller::escapeDir, moveDir
  _.moveTowards = // called by Controller::moveDir
  _.deleteOutOf = // called by Controller::deleteDir
  _.deleteTowards = // called by Controller::deleteDir
  _.unselectInto = // called by Controller::selectDir
  _.selectOutOf = // called by Controller::selectDir
  _.selectTowards = // called by Controller::selectDir
    function() { pray('overridden or never called on this node'); };
});

Controller.open(function(_) {
  this.onNotify(function(e) {
    if (e === 'move' || e === 'upDown') this.show().clearSelection();
  });
  _.escapeDir = function(dir, key, e) {
    prayDirection(dir);
    var cursor = this.cursor;

    // only prevent default of Tab if not in the root editable
    if (cursor.parent !== this.root) e.preventDefault();

    // want to be a noop if in the root editable (in fact, Tab has an unrelated
    // default browser action if so)
    if (cursor.parent === this.root) return;

    cursor.parent.moveOutOf(dir, cursor);
    return this.notify('move');
  };

  optionProcessors.leftRightIntoCmdGoes = function(updown) {
    if (updown && updown !== 'up' && updown !== 'down') {
      throw '"up" or "down" required for leftRightIntoCmdGoes option, '
            + 'got "'+updown+'"';
    }
    return updown;
  };
  _.moveDir = function(dir) {
    prayDirection(dir);
    var cursor = this.cursor, updown = cursor.options.leftRightIntoCmdGoes;

    if (cursor.selection) {
      cursor.insDirOf(dir, cursor.selection.ends[dir]);
    }
    else if (cursor[dir]) cursor[dir].moveTowards(dir, cursor, updown);
    else cursor.parent.moveOutOf(dir, cursor, updown);

    return this.notify('move');
  };
  _.moveLeft = function() { return this.moveDir(L); };
  _.moveRight = function() { return this.moveDir(R); };

  /**
   * moveUp and moveDown have almost identical algorithms:
   * - first check left and right, if so insAtLeft/RightEnd of them
   * - else check the parent's 'upOutOf'/'downOutOf' property:
   *   + if it's a function, call it with the cursor as the sole argument and
   *     use the return value as if it were the value of the property
   *   + if it's a Node, jump up or down into it:
   *     - if there is a cached Point in the block, insert there
   *     - else, seekHoriz within the block to the current x-coordinate (to be
   *       as close to directly above/below the current position as possible)
   *   + unless it's exactly `true`, stop bubbling
   */
  _.moveUp = function() { return moveUpDown(this, 'up'); };
  _.moveDown = function() { return moveUpDown(this, 'down'); };
  function moveUpDown(self, dir) {
    var cursor = self.notify('upDown').cursor;
    var dirInto = dir+'Into', dirOutOf = dir+'OutOf';
    if (cursor[R][dirInto]) cursor.insAtLeftEnd(cursor[R][dirInto]);
    else if (cursor[L][dirInto]) cursor.insAtRightEnd(cursor[L][dirInto]);
    else {
      cursor.parent.bubble(function(ancestor) {
        var prop = ancestor[dirOutOf];
        if (prop) {
          if (typeof prop === 'function') prop = ancestor[dirOutOf](cursor);
          if (prop instanceof Node) cursor.jumpUpDown(ancestor, prop);
          if (prop !== true) return false;
        }
      });
    }
    return self;
  }
  this.onNotify(function(e) { if (e !== 'upDown') this.upDownCache = {}; });

  this.onNotify(function(e) { if (e === 'edit') this.show().deleteSelection(); });
  _.deleteDir = function(dir) {
    prayDirection(dir);
    var cursor = this.cursor;

    var hadSelection = cursor.selection;
    this.notify('edit'); // deletes selection if present
    if (!hadSelection) {
      if (cursor[dir]) cursor[dir].deleteTowards(dir, cursor);
      else cursor.parent.deleteOutOf(dir, cursor);
    }

    if (cursor[L].siblingDeleted) cursor[L].siblingDeleted(cursor.options, R);
    if (cursor[R].siblingDeleted) cursor[R].siblingDeleted(cursor.options, L);
    cursor.parent.bubble('reflow');

    return this;
  };
  _.ctrlDeleteDir = function(dir) {
    prayDirection(dir);
    var cursor = this.cursor;
    if (!cursor[L] || cursor.selection) return this.deleteDir();

    this.notify('edit');
    Fragment(cursor.parent.ends[L], cursor[L]).remove();
    cursor.insAtDirEnd(L, cursor.parent);

    if (cursor[L].siblingDeleted) cursor[L].siblingDeleted(cursor.options, R);
    if (cursor[R].siblingDeleted) cursor[R].siblingDeleted(cursor.options, L);
    cursor.parent.bubble('reflow');

    return this;
  };
  _.backspace = function() { return this.deleteDir(L); };
  _.deleteForward = function() { return this.deleteDir(R); };

  this.onNotify(function(e) { if (e !== 'select') this.endSelection(); });
  _.selectDir = function(dir) {
    var cursor = this.notify('select').cursor, seln = cursor.selection;
    prayDirection(dir);

    if (!cursor.anticursor) cursor.startSelection();

    var node = cursor[dir];
    if (node) {
      // "if node we're selecting towards is inside selection (hence retracting)
      // and is on the *far side* of the selection (hence is only node selected)
      // and the anticursor is *inside* that node, not just on the other side"
      if (seln && seln.ends[dir] === node && cursor.anticursor[-dir] !== node) {
        node.unselectInto(dir, cursor);
      }
      else node.selectTowards(dir, cursor);
    }
    else cursor.parent.selectOutOf(dir, cursor);

    cursor.clearSelection();
    cursor.select() || cursor.show();
  };
  _.selectLeft = function() { return this.selectDir(L); };
  _.selectRight = function() { return this.selectDir(R); };
});
/*********************************************
 * Manage the MathQuill instance's textarea
 * (as owned by the Controller)
 ********************************************/

Controller.open(function(_) {
  Options.p.substituteTextarea = function() {
    return $('<textarea autocapitalize=off autocomplete=off autocorrect=off ' +
               'spellcheck=false x-palm-disable-ste-all=true />')[0];
  };
  _.createTextarea = function() {
    var textareaSpan = this.textareaSpan = $('<span class="mq-textarea"></span>'),
      textarea = this.options.substituteTextarea();
    if (!textarea.nodeType) {
      throw 'substituteTextarea() must return a DOM element, got ' + textarea;
    }
    textarea = this.textarea = $(textarea).appendTo(textareaSpan);

    var ctrlr = this;
    ctrlr.cursor.selectionChanged = function() { ctrlr.selectionChanged(); };
  };
  _.selectionChanged = function() {
    var ctrlr = this;
    forceIERedraw(ctrlr.container[0]);

    // throttle calls to setTextareaSelection(), because setting textarea.value
    // and/or calling textarea.select() can have anomalously bad performance:
    // https://github.com/mathquill/mathquill/issues/43#issuecomment-1399080
    if (ctrlr.textareaSelectionTimeout === undefined) {
      ctrlr.textareaSelectionTimeout = setTimeout(function() {
        ctrlr.setTextareaSelection();
      });
    }
  };
  _.setTextareaSelection = function() {
    this.textareaSelectionTimeout = undefined;
    var latex = '';
    if (this.cursor.selection) {
      latex = this.cursor.selection.join('latex');
      if (this.options.statelessClipboard) {
        // FIXME: like paste, only this works for math fields; should ask parent
        latex = '$' + latex + '$';
      }
    }
    this.selectFn(latex);
  };
  _.staticMathTextareaEvents = function() {
    var ctrlr = this, root = ctrlr.root, cursor = ctrlr.cursor,
      textarea = ctrlr.textarea, textareaSpan = ctrlr.textareaSpan;

    this.container.prepend(jQuery('<span class="mq-selectable">')
      .text('$'+ctrlr.exportLatex()+'$'));
    ctrlr.blurred = true;
    textarea.bind('cut paste', false)
    .bind('copy', function() { ctrlr.setTextareaSelection(); })
    .focus(function() { ctrlr.blurred = false; }).blur(function() {
      if (cursor.selection) cursor.selection.clear();
      setTimeout(detach); //detaching during blur explodes in WebKit
    });
    function detach() {
      textareaSpan.detach();
      ctrlr.blurred = true;
    }

    ctrlr.selectFn = function(text) {
      textarea.val(text);
      if (text) textarea.select();
    };
  };
  Options.p.substituteKeyboardEvents = saneKeyboardEvents;
  _.editablesTextareaEvents = function() {
    var ctrlr = this, textarea = ctrlr.textarea, textareaSpan = ctrlr.textareaSpan;

    var keyboardEventsShim = this.options.substituteKeyboardEvents(textarea, this);
    this.selectFn = function(text) { keyboardEventsShim.select(text); };
    this.container.prepend(textareaSpan);
    this.focusBlurEvents();
  };
  _.typedText = function(ch) {
    if (ch === '\n') return this.handle('enter');
    var cursor = this.notify().cursor;
    cursor.parent.write(cursor, ch);
    this.scrollHoriz();
  };
  _.cut = function() {
    var ctrlr = this, cursor = ctrlr.cursor;
    if (cursor.selection) {
      setTimeout(function() {
        ctrlr.notify('edit'); // deletes selection if present
        cursor.parent.bubble('reflow');
      });
    }
  };
  _.copy = function() {
    this.setTextareaSelection();
  };
  _.paste = function(text) {
    // TODO: document `statelessClipboard` config option in README, after
    // making it work like it should, that is, in both text and math mode
    // (currently only works in math fields, so worse than pointless, it
    //  only gets in the way by \text{}-ifying pasted stuff and $-ifying
    //  cut/copied LaTeX)
    if (this.options.statelessClipboard) {
      if (text.slice(0,1) === '$' && text.slice(-1) === '$') {
        text = text.slice(1, -1);
      }
      else {
        text = '\\text{'+text+'}';
      }
    }
    // FIXME: this always inserts math or a TextBlock, even in a RootTextBlock
    this.writeLatex(text).cursor.show();
  };
});
/********************************************************
 * Deals with mouse events for clicking, drag-to-select
 *******************************************************/

Controller.open(function(_) {
  Options.p.ignoreNextMousedown = noop;
  _.delegateMouseEvents = function() {
    var ultimateRootjQ = this.root.jQ;
    //drag-to-select event handling
    this.container.bind('mousedown.mathquill', function(e) {
      var rootjQ = $(e.target).closest('.mq-root-block');
      var root = Node.byId[rootjQ.attr(mqBlockId) || ultimateRootjQ.attr(mqBlockId)];
      var ctrlr = root.controller, cursor = ctrlr.cursor, blink = cursor.blink;
      var textareaSpan = ctrlr.textareaSpan, textarea = ctrlr.textarea;

      e.preventDefault(); // doesn't work in IE\u22648, but it's a one-line fix:
      e.target.unselectable = true; // http://jsbin.com/yagekiji/1

      if (cursor.options.ignoreNextMousedown(e)) return;
      else cursor.options.ignoreNextMousedown = noop;

      var target;
      function mousemove(e) { target = $(e.target); }
      function docmousemove(e) {
        if (!cursor.anticursor) cursor.startSelection();
        ctrlr.seek(target, e.pageX, e.pageY).cursor.select();
        target = undefined;
      }
      // outside rootjQ, the MathQuill node corresponding to the target (if any)
      // won't be inside this root, so don't mislead Controller::seek with it

      function mouseup(e) {
        cursor.blink = blink;
        if (!cursor.selection) {
          if (ctrlr.editable) {
            cursor.show();
          }
          else {
            textareaSpan.detach();
          }
        }

        // delete the mouse handlers now that we're not dragging anymore
        rootjQ.unbind('mousemove', mousemove);
        $(e.target.ownerDocument).unbind('mousemove', docmousemove).unbind('mouseup', mouseup);
      }

      if (ctrlr.blurred) {
        if (!ctrlr.editable) rootjQ.prepend(textareaSpan);
        textarea.focus();
      }

      cursor.blink = noop;
      ctrlr.seek($(e.target), e.pageX, e.pageY).cursor.startSelection();

      rootjQ.mousemove(mousemove);
      $(e.target.ownerDocument).mousemove(docmousemove).mouseup(mouseup);
      // listen on document not just body to not only hear about mousemove and
      // mouseup on page outside field, but even outside page, except iframes: https://github.com/mathquill/mathquill/commit/8c50028afcffcace655d8ae2049f6e02482346c5#commitcomment-6175800
    });
  }
});

Controller.open(function(_) {
  _.seek = function(target, pageX, pageY) {
    var cursor = this.notify('select').cursor;

    if (target) {
      var nodeId = target.attr(mqBlockId) || target.attr(mqCmdId);
      if (!nodeId) {
        var targetParent = target.parent();
        nodeId = targetParent.attr(mqBlockId) || targetParent.attr(mqCmdId);
      }
    }
    var node = nodeId ? Node.byId[nodeId] : this.root;
    pray('nodeId is the id of some Node that exists', node);

    // don't clear selection until after getting node from target, in case
    // target was selection span, otherwise target will have no parent and will
    // seek from root, which is less accurate (e.g. fraction)
    cursor.clearSelection().show();

    node.seek(pageX, cursor);
    this.scrollHoriz(); // before .selectFrom when mouse-selecting, so
                        // always hits no-selection case in scrollHoriz and scrolls slower
    return this;
  };
});
/***********************************************
 * Horizontal panning for editable fields that
 * overflow their width
 **********************************************/

Controller.open(function(_) {
  _.scrollHoriz = function() {
    var cursor = this.cursor, seln = cursor.selection;
    var rootRect = this.root.jQ[0].getBoundingClientRect();
    if (!seln) {
      var x = cursor.jQ[0].getBoundingClientRect().left;
      if (x > rootRect.right - 20) var scrollBy = x - (rootRect.right - 20);
      else if (x < rootRect.left + 20) var scrollBy = x - (rootRect.left + 20);
      else return;
    }
    else {
      var rect = seln.jQ[0].getBoundingClientRect();
      var overLeft = rect.left - (rootRect.left + 20);
      var overRight = rect.right - (rootRect.right - 20);
      if (seln.ends[L] === cursor[R]) {
        if (overLeft < 0) var scrollBy = overLeft;
        else if (overRight > 0) {
          if (rect.left - overRight < rootRect.left + 20) var scrollBy = overLeft;
          else var scrollBy = overRight;
        }
        else return;
      }
      else {
        if (overRight > 0) var scrollBy = overRight;
        else if (overLeft < 0) {
          if (rect.right - overLeft > rootRect.right - 20) var scrollBy = overRight;
          else var scrollBy = overLeft;
        }
        else return;
      }
    }
    this.root.jQ.stop().animate({ scrollLeft: '+=' + scrollBy}, 100);
  };
});
/*************************************************
 * Abstract classes of math blocks and commands.
 ************************************************/

/**
 * Math tree node base class.
 * Some math-tree-specific extensions to Node.
 * Both MathBlock's and MathCommand's descend from it.
 */
var MathElement = P(Node, function(_, super_) {
  _.finalizeInsert = function(options, cursor) { // `cursor` param is only for
      // SupSub::contactWeld, and is deliberately only passed in by writeLatex,
      // see ea7307eb4fac77c149a11ffdf9a831df85247693
    var self = this;
    self.postOrder('finalizeTree', options);
    self.postOrder('contactWeld', cursor);

    // note: this order is important.
    // empty elements need the empty box provided by blur to
    // be present in order for their dimensions to be measured
    // correctly by 'reflow' handlers.
    self.postOrder('blur');

    self.postOrder('reflow');
    if (self[R].siblingCreated) self[R].siblingCreated(options, L);
    if (self[L].siblingCreated) self[L].siblingCreated(options, R);
    self.bubble('reflow');
  };
});

/**
 * Commands and operators, like subscripts, exponents, or fractions.
 * Descendant commands are organized into blocks.
 */
var MathCommand = P(MathElement, function(_, super_) {
  _.init = function(ctrlSeq, htmlTemplate, textTemplate) {
    var cmd = this;
    super_.init.call(cmd);

    if (!cmd.ctrlSeq) cmd.ctrlSeq = ctrlSeq;
    if (htmlTemplate) cmd.htmlTemplate = htmlTemplate;
    if (textTemplate) cmd.textTemplate = textTemplate;
  };

  // obvious methods
  _.replaces = function(replacedFragment) {
    replacedFragment.disown();
    this.replacedFragment = replacedFragment;
  };
  _.isEmpty = function() {
    return this.foldChildren(true, function(isEmpty, child) {
      return isEmpty && child.isEmpty();
    });
  };

  _.parser = function() {
    var block = latexMathParser.block;
    var self = this;

    return block.times(self.numBlocks()).map(function(blocks) {
      self.blocks = blocks;

      for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].adopt(self, self.ends[R], 0);
      }

      return self;
    });
  };

  // createLeftOf(cursor) and the methods it calls
  _.createLeftOf = function(cursor) {
    var cmd = this;
    var replacedFragment = cmd.replacedFragment;

    cmd.createBlocks();
    super_.createLeftOf.call(cmd, cursor);
    if (replacedFragment) {
      replacedFragment.adopt(cmd.ends[L], 0, 0);
      replacedFragment.jQ.appendTo(cmd.ends[L].jQ);
    }
    cmd.finalizeInsert(cursor.options);
    cmd.placeCursor(cursor);
  };
  _.createBlocks = function() {
    var cmd = this,
      numBlocks = cmd.numBlocks(),
      blocks = cmd.blocks = Array(numBlocks);

    for (var i = 0; i < numBlocks; i += 1) {
      var newBlock = blocks[i] = MathBlock();
      newBlock.adopt(cmd, cmd.ends[R], 0);
    }
  };
  _.placeCursor = function(cursor) {
    //insert the cursor at the right end of the first empty child, searching
    //left-to-right, or if none empty, the right end child
    cursor.insAtRightEnd(this.foldChildren(this.ends[L], function(leftward, child) {
      return leftward.isEmpty() ? leftward : child;
    }));
  };

  // editability methods: called by the cursor for editing, cursor movements,
  // and selection of the MathQuill tree, these all take in a direction and
  // the cursor
  _.moveTowards = function(dir, cursor, updown) {
    var updownInto = updown && this[updown+'Into'];
    cursor.insAtDirEnd(-dir, updownInto || this.ends[-dir]);
  };
  _.deleteTowards = function(dir, cursor) {
    if (this.isEmpty()) cursor[dir] = this.remove()[dir];
    else this.moveTowards(dir, cursor, null);
  };
  _.selectTowards = function(dir, cursor) {
    cursor[-dir] = this;
    cursor[dir] = this[dir];
  };
  _.selectChildren = function() {
    return Selection(this, this);
  };
  _.unselectInto = function(dir, cursor) {
    cursor.insAtDirEnd(-dir, cursor.anticursor.ancestors[this.id]);
  };
  _.seek = function(pageX, cursor) {
    function getBounds(node) {
      var bounds = {}
      bounds[L] = node.jQ.offset().left;
      bounds[R] = bounds[L] + node.jQ.outerWidth();
      return bounds;
    }

    var cmd = this;
    var cmdBounds = getBounds(cmd);

    if (pageX < cmdBounds[L]) return cursor.insLeftOf(cmd);
    if (pageX > cmdBounds[R]) return cursor.insRightOf(cmd);

    var leftLeftBound = cmdBounds[L];
    cmd.eachChild(function(block) {
      var blockBounds = getBounds(block);
      if (pageX < blockBounds[L]) {
        // closer to this block's left bound, or the bound left of that?
        if (pageX - leftLeftBound < blockBounds[L] - pageX) {
          if (block[L]) cursor.insAtRightEnd(block[L]);
          else cursor.insLeftOf(cmd);
        }
        else cursor.insAtLeftEnd(block);
        return false;
      }
      else if (pageX > blockBounds[R]) {
        if (block[R]) leftLeftBound = blockBounds[R]; // continue to next block
        else { // last (rightmost) block
          // closer to this block's right bound, or the cmd's right bound?
          if (cmdBounds[R] - pageX < pageX - blockBounds[R]) {
            cursor.insRightOf(cmd);
          }
          else cursor.insAtRightEnd(block);
        }
      }
      else {
        block.seek(pageX, cursor);
        return false;
      }
    });
  }

  // methods involved in creating and cross-linking with HTML DOM nodes
  /*
    They all expect an .htmlTemplate like
      '<span>&0</span>'
    or
      '<span><span>&0</span><span>&1</span></span>'

    See html.test.js for more examples.

    Requirements:
    - For each block of the command, there must be exactly one "block content
      marker" of the form '&<number>' where <number> is the 0-based index of the
      block. (Like the LaTeX \newcommand syntax, but with a 0-based rather than
      1-based index, because JavaScript because C because Dijkstra.)
    - The block content marker must be the sole contents of the containing
      element, there can't even be surrounding whitespace, or else we can't
      guarantee sticking to within the bounds of the block content marker when
      mucking with the HTML DOM.
    - The HTML not only must be well-formed HTML (of course), but also must
      conform to the XHTML requirements on tags, specifically all tags must
      either be self-closing (like '<br/>') or come in matching pairs.
      Close tags are never optional.

    Note that &<number> isn't well-formed HTML; if you wanted a literal '&123',
    your HTML template would have to have '&amp;123'.
  */
  _.numBlocks = function() {
    var matches = this.htmlTemplate.match(/&\d+/g);
    return matches ? matches.length : 0;
  };
  _.html = function() {
    // Render the entire math subtree rooted at this command, as HTML.
    // Expects .createBlocks() to have been called already, since it uses the
    // .blocks array of child blocks.
    //
    // See html.test.js for example templates and intended outputs.
    //
    // Given an .htmlTemplate as described above,
    // - insert the mathquill-command-id attribute into all top-level tags,
    //   which will be used to set this.jQ in .jQize().
    //   This is straightforward:
    //     * tokenize into tags and non-tags
    //     * loop through top-level tokens:
    //         * add #cmdId attribute macro to top-level self-closing tags
    //         * else add #cmdId attribute macro to top-level open tags
    //             * skip the matching top-level close tag and all tag pairs
    //               in between
    // - for each block content marker,
    //     + replace it with the contents of the corresponding block,
    //       rendered as HTML
    //     + insert the mathquill-block-id attribute into the containing tag
    //   This is even easier, a quick regex replace, since block tags cannot
    //   contain anything besides the block content marker.
    //
    // Two notes:
    // - The outermost loop through top-level tokens should never encounter any
    //   top-level close tags, because we should have first encountered a
    //   matching top-level open tag, all inner tags should have appeared in
    //   matching pairs and been skipped, and then we should have skipped the
    //   close tag in question.
    // - All open tags should have matching close tags, which means our inner
    //   loop should always encounter a close tag and drop nesting to 0. If
    //   a close tag is missing, the loop will continue until i >= tokens.length
    //   and token becomes undefined. This will not infinite loop, even in
    //   production without pray(), because it will then TypeError on .slice().

    var cmd = this;
    var blocks = cmd.blocks;
    var cmdId = ' mathquill-command-id=' + cmd.id;
    var tokens = cmd.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);

    pray('no unmatched angle brackets', tokens.join('') === this.htmlTemplate);

    // add cmdId to all top-level tags
    for (var i = 0, token = tokens[0]; token; i += 1, token = tokens[i]) {
      // top-level self-closing tags
      if (token.slice(-2) === '/>') {
        tokens[i] = token.slice(0,-2) + cmdId + '/>';
      }
      // top-level open tags
      else if (token.charAt(0) === '<') {
        pray('not an unmatched top-level close tag', token.charAt(1) !== '/');

        tokens[i] = token.slice(0,-1) + cmdId + '>';

        // skip matching top-level close tag and all tag pairs in between
        var nesting = 1;
        do {
          i += 1, token = tokens[i];
          pray('no missing close tags', token);
          // close tags
          if (token.slice(0,2) === '</') {
            nesting -= 1;
          }
          // non-self-closing open tags
          else if (token.charAt(0) === '<' && token.slice(-2) !== '/>') {
            nesting += 1;
          }
        } while (nesting > 0);
      }
    }
    return tokens.join('').replace(/>&(\d+)/g, function($0, $1) {
      return ' mathquill-block-id=' + blocks[$1].id + '>' + blocks[$1].join('html');
    });
  };

  // methods to export a string representation of the math tree
  _.latex = function() {
    return this.foldChildren(this.ctrlSeq, function(latex, child) {
      return latex + '{' + (child.latex() || ' ') + '}';
    });
  };
  _.textTemplate = [''];
  _.text = function() {
    var cmd = this, i = 0;
    return cmd.foldChildren(cmd.textTemplate[i], function(text, child) {
      i += 1;
      var child_text = child.text();
      if (text && cmd.textTemplate[i] === '('
          && child_text[0] === '(' && child_text.slice(-1) === ')')
        return text + child_text.slice(1, -1) + cmd.textTemplate[i];
      return text + child.text() + (cmd.textTemplate[i] || '');
    });
  };
});

/**
 * Lightweight command without blocks or children.
 */
var Symbol = P(MathCommand, function(_, super_) {
  _.init = function(ctrlSeq, html, text) {
    if (!text) text = ctrlSeq && ctrlSeq.length > 1 ? ctrlSeq.slice(1) : ctrlSeq;

    super_.init.call(this, ctrlSeq, html, [ text ]);
  };

  _.parser = function() { return Parser.succeed(this); };
  _.numBlocks = function() { return 0; };

  _.replaces = function(replacedFragment) {
    replacedFragment.remove();
  };
  _.createBlocks = noop;

  _.moveTowards = function(dir, cursor) {
    cursor.jQ.insDirOf(dir, this.jQ);
    cursor[-dir] = this;
    cursor[dir] = this[dir];
  };
  _.deleteTowards = function(dir, cursor) {
    cursor[dir] = this.remove()[dir];
  };
  _.seek = function(pageX, cursor) {
    // insert at whichever side the click was closer to
    if (pageX - this.jQ.offset().left < this.jQ.outerWidth()/2)
      cursor.insLeftOf(this);
    else
      cursor.insRightOf(this);
  };

  _.latex = function(){ return this.ctrlSeq; };
  _.text = function(){ return this.textTemplate; };
  _.placeCursor = noop;
  _.isEmpty = function(){ return true; };
});
var VanillaSymbol = P(Symbol, function(_, super_) {
  _.init = function(ch, html) {
    super_.init.call(this, ch, '<span>'+(html || ch)+'</span>');
  };
});
var BinaryOperator = P(Symbol, function(_, super_) {
  _.init = function(ctrlSeq, html, text) {
    super_.init.call(this,
      ctrlSeq, '<span class="mq-binary-operator">'+html+'</span>', text
    );
  };
});

/**
 * Children and parent of MathCommand's. Basically partitions all the
 * symbols and operators that descend (in the Math DOM tree) from
 * ancestor operators.
 */
var MathBlock = P(MathElement, function(_, super_) {
  _.join = function(methodName) {
    return this.foldChildren('', function(fold, child) {
      return fold + child[methodName]();
    });
  };
  _.html = function() { return this.join('html'); };
  _.latex = function() { return this.join('latex'); };
  _.text = function() {
    return (this.ends[L] === this.ends[R] && this.ends[L] !== 0) ?
      this.ends[L].text() :
      this.join('text')
    ;
  };

  _.keystroke = function(key, e, ctrlr) {
    if (ctrlr.options.spaceBehavesLikeTab
        && (key === 'Spacebar' || key === 'Shift-Spacebar')) {
      e.preventDefault();
      ctrlr.escapeDir(key === 'Shift-Spacebar' ? L : R, key, e);
      return;
    }
    return super_.keystroke.apply(this, arguments);
  };

  // editability methods: called by the cursor for editing, cursor movements,
  // and selection of the MathQuill tree, these all take in a direction and
  // the cursor
  _.moveOutOf = function(dir, cursor, updown) {
    var updownInto = updown && this.parent[updown+'Into'];
    if (!updownInto && this[dir]) cursor.insAtDirEnd(-dir, this[dir]);
    else cursor.insDirOf(dir, this.parent);
  };
  _.selectOutOf = function(dir, cursor) {
    cursor.insDirOf(dir, this.parent);
  };
  _.deleteOutOf = function(dir, cursor) {
    cursor.unwrapGramp();
  };
  _.seek = function(pageX, cursor) {
    var node = this.ends[R];
    if (!node || node.jQ.offset().left + node.jQ.outerWidth() < pageX) {
      return cursor.insAtRightEnd(this);
    }
    if (pageX < this.ends[L].jQ.offset().left) return cursor.insAtLeftEnd(this);
    while (pageX < node.jQ.offset().left) node = node[L];
    return node.seek(pageX, cursor);
  };
  _.chToCmd = function(ch, options) {
    var cons;
    // exclude f because it gets a dedicated command with more spacing
    if (ch.match(/^[a-eg-zA-Z]$/))
      return Letter(ch);
    else if (/^\d$/.test(ch))
      return Digit(ch);
    else if (options && options.typingSlashWritesDivisionSymbol && ch === '/')
      return LatexCmds['\u00f7'](ch);
    else if (options && options.typingAsteriskWritesTimesSymbol && ch === '*')
      return LatexCmds['\u00d7'](ch);
    else if (cons = CharCmds[ch] || LatexCmds[ch])
      return cons(ch);
    else
      return VanillaSymbol(ch);
  };
  _.write = function(cursor, ch) {
    var cmd = this.chToCmd(ch, cursor.options);
    if (cursor.selection) cmd.replaces(cursor.replaceSelection());
    cmd.createLeftOf(cursor.show());
  };

  _.focus = function() {
    this.jQ.addClass('mq-hasCursor');
    this.jQ.removeClass('mq-empty');

    return this;
  };
  _.blur = function() {
    this.jQ.removeClass('mq-hasCursor');
    if (this.isEmpty())
      this.jQ.addClass('mq-empty');

    return this;
  };
});

API.StaticMath = function(APIClasses) {
  return P(APIClasses.AbstractMathQuill, function(_, super_) {
    this.RootBlock = MathBlock;
    _.__mathquillify = function(opts, interfaceVersion) {
      this.config(opts);
      super_.__mathquillify.call(this, 'mq-math-mode');
      this.__controller.delegateMouseEvents();
      this.__controller.staticMathTextareaEvents();
      return this;
    };
    _.init = function() {
      super_.init.apply(this, arguments);
      this.__controller.root.postOrder(
        'registerInnerField', this.innerFields = [], APIClasses.MathField);
    };
    _.latex = function() {
      var returned = super_.latex.apply(this, arguments);
      if (arguments.length > 0) {
        this.__controller.root.postOrder(
          'registerInnerField', this.innerFields = [], APIClasses.MathField);
      }
      return returned;
    };
  });
};

var RootMathBlock = P(MathBlock, RootBlockMixin);
API.MathField = function(APIClasses) {
  return P(APIClasses.EditableField, function(_, super_) {
    this.RootBlock = RootMathBlock;
    _.__mathquillify = function(opts, interfaceVersion) {
      this.config(opts);
      if (interfaceVersion > 1) this.__controller.root.reflow = noop;
      super_.__mathquillify.call(this, 'mq-editable-field mq-math-mode');
      delete this.__controller.root.reflow;
      return this;
    };
  });
};
/*************************************************
 * Abstract classes of text blocks
 ************************************************/

/**
 * Blocks of plain text, with one or two TextPiece's as children.
 * Represents flat strings of typically serif-font Roman characters, as
 * opposed to hierchical, nested, tree-structured math.
 * Wraps a single HTMLSpanElement.
 */
var TextBlock = P(Node, function(_, super_) {
  _.ctrlSeq = '\\text';

  _.replaces = function(replacedText) {
    if (replacedText instanceof Fragment)
      this.replacedText = replacedText.remove().jQ.text();
    else if (typeof replacedText === 'string')
      this.replacedText = replacedText;
  };

  _.jQadd = function(jQ) {
    super_.jQadd.call(this, jQ);
    if (this.ends[L]) this.ends[L].jQadd(this.jQ[0].firstChild);
  };

  _.createLeftOf = function(cursor) {
    var textBlock = this;
    super_.createLeftOf.call(this, cursor);

    if (textBlock[R].siblingCreated) textBlock[R].siblingCreated(cursor.options, L);
    if (textBlock[L].siblingCreated) textBlock[L].siblingCreated(cursor.options, R);
    textBlock.bubble('reflow');

    cursor.insAtRightEnd(textBlock);

    if (textBlock.replacedText)
      for (var i = 0; i < textBlock.replacedText.length; i += 1)
        textBlock.write(cursor, textBlock.replacedText.charAt(i));
  };

  _.parser = function() {
    var textBlock = this;

    // TODO: correctly parse text mode
    var string = Parser.string;
    var regex = Parser.regex;
    var optWhitespace = Parser.optWhitespace;
    return optWhitespace
      .then(string('{')).then(regex(/^[^}]*/)).skip(string('}'))
      .map(function(text) {
        if (text.length === 0) return Fragment();

        TextPiece(text).adopt(textBlock, 0, 0);
        return textBlock;
      })
    ;
  };

  _.textContents = function() {
    return this.foldChildren('', function(text, child) {
      return text + child.text;
    });
  };
  _.text = function() { return '"' + this.textContents() + '"'; };
  _.latex = function() {
    var contents = this.textContents();
    if (contents.length === 0) return '';
    return '\\text{' + contents + '}';
  };
  _.html = function() {
    return (
        '<span class="mq-text-mode" mathquill-command-id='+this.id+'>'
      +   this.textContents()
      + '</span>'
    );
  };

  // editability methods: called by the cursor for editing, cursor movements,
  // and selection of the MathQuill tree, these all take in a direction and
  // the cursor
  _.moveTowards = function(dir, cursor) { cursor.insAtDirEnd(-dir, this); };
  _.moveOutOf = function(dir, cursor) { cursor.insDirOf(dir, this); };
  _.unselectInto = _.moveTowards;

  // TODO: make these methods part of a shared mixin or something.
  _.selectTowards = MathCommand.prototype.selectTowards;
  _.deleteTowards = MathCommand.prototype.deleteTowards;

  _.selectOutOf = function(dir, cursor) {
    cursor.insDirOf(dir, this);
  };
  _.deleteOutOf = function(dir, cursor) {
    // backspace and delete at ends of block don't unwrap
    if (this.isEmpty()) cursor.insRightOf(this);
  };
  _.write = function(cursor, ch) {
    cursor.show().deleteSelection();

    if (ch !== '$') {
      if (!cursor[L]) TextPiece(ch).createLeftOf(cursor);
      else cursor[L].appendText(ch);
    }
    else if (this.isEmpty()) {
      cursor.insRightOf(this);
      VanillaSymbol('\\$','$').createLeftOf(cursor);
    }
    else if (!cursor[R]) cursor.insRightOf(this);
    else if (!cursor[L]) cursor.insLeftOf(this);
    else { // split apart
      var leftBlock = TextBlock();
      var leftPc = this.ends[L];
      leftPc.disown().jQ.detach();
      leftPc.adopt(leftBlock, 0, 0);

      cursor.insLeftOf(this);
      super_.createLeftOf.call(leftBlock, cursor);
    }
  };

  _.seek = function(pageX, cursor) {
    cursor.hide();
    var textPc = fuseChildren(this);

    // insert cursor at approx position in DOMTextNode
    var avgChWidth = this.jQ.width()/this.text.length;
    var approxPosition = Math.round((pageX - this.jQ.offset().left)/avgChWidth);
    if (approxPosition <= 0) cursor.insAtLeftEnd(this);
    else if (approxPosition >= textPc.text.length) cursor.insAtRightEnd(this);
    else cursor.insLeftOf(textPc.splitRight(approxPosition));

    // move towards mousedown (pageX)
    var displ = pageX - cursor.show().offset().left; // displacement
    var dir = displ && displ < 0 ? L : R;
    var prevDispl = dir;
    // displ * prevDispl > 0 iff displacement direction === previous direction
    while (cursor[dir] && displ * prevDispl > 0) {
      cursor[dir].moveTowards(dir, cursor);
      prevDispl = displ;
      displ = pageX - cursor.offset().left;
    }
    if (dir*displ < -dir*prevDispl) cursor[-dir].moveTowards(-dir, cursor);

    if (!cursor.anticursor) {
      // about to start mouse-selecting, the anticursor is gonna get put here
      this.anticursorPosition = cursor[L] && cursor[L].text.length;
      // ^ get it? 'cos if there's no cursor[L], it's 0... I'm a terrible person.
    }
    else if (cursor.anticursor.parent === this) {
      // mouse-selecting within this TextBlock, re-insert the anticursor
      var cursorPosition = cursor[L] && cursor[L].text.length;;
      if (this.anticursorPosition === cursorPosition) {
        cursor.anticursor = Point.copy(cursor);
      }
      else {
        if (this.anticursorPosition < cursorPosition) {
          var newTextPc = cursor[L].splitRight(this.anticursorPosition);
          cursor[L] = newTextPc;
        }
        else {
          var newTextPc = cursor[R].splitRight(this.anticursorPosition - cursorPosition);
        }
        cursor.anticursor = Point(this, newTextPc[L], newTextPc);
      }
    }
  };

  _.blur = function(cursor) {
    MathBlock.prototype.blur.call(this);
    if (!cursor) return;
    if (this.textContents() === '') {
      this.remove();
      if (cursor[L] === this) cursor[L] = this[L];
      else if (cursor[R] === this) cursor[R] = this[R];
    }
    else fuseChildren(this);
  };

  function fuseChildren(self) {
    self.jQ[0].normalize();

    var textPcDom = self.jQ[0].firstChild;
    if (!textPcDom) return;
    pray('only node in TextBlock span is Text node', textPcDom.nodeType === 3);
    // nodeType === 3 has meant a Text node since ancient times:
    //   http://reference.sitepoint.com/javascript/Node/nodeType

    var textPc = TextPiece(textPcDom.data);
    textPc.jQadd(textPcDom);

    self.children().disown();
    return textPc.adopt(self, 0, 0);
  }

  _.focus = MathBlock.prototype.focus;
});

/**
 * Piece of plain text, with a TextBlock as a parent and no children.
 * Wraps a single DOMTextNode.
 * For convenience, has a .text property that's just a JavaScript string
 * mirroring the text contents of the DOMTextNode.
 * Text contents must always be nonempty.
 */
var TextPiece = P(Node, function(_, super_) {
  _.init = function(text) {
    super_.init.call(this);
    this.text = text;
  };
  _.jQadd = function(dom) { this.dom = dom; this.jQ = $(dom); };
  _.jQize = function() {
    return this.jQadd(document.createTextNode(this.text));
  };
  _.appendText = function(text) {
    this.text += text;
    this.dom.appendData(text);
  };
  _.prependText = function(text) {
    this.text = text + this.text;
    this.dom.insertData(0, text);
  };
  _.insTextAtDirEnd = function(text, dir) {
    prayDirection(dir);
    if (dir === R) this.appendText(text);
    else this.prependText(text);
  };
  _.splitRight = function(i) {
    var newPc = TextPiece(this.text.slice(i)).adopt(this.parent, this, this[R]);
    newPc.jQadd(this.dom.splitText(i));
    this.text = this.text.slice(0, i);
    return newPc;
  };

  function endChar(dir, text) {
    return text.charAt(dir === L ? 0 : -1 + text.length);
  }

  _.moveTowards = function(dir, cursor) {
    prayDirection(dir);

    var ch = endChar(-dir, this.text)

    var from = this[-dir];
    if (from) from.insTextAtDirEnd(ch, dir);
    else TextPiece(ch).createDir(-dir, cursor);

    return this.deleteTowards(dir, cursor);
  };

  _.latex = function() { return this.text; };

  _.deleteTowards = function(dir, cursor) {
    if (this.text.length > 1) {
      if (dir === R) {
        this.dom.deleteData(0, 1);
        this.text = this.text.slice(1);
      }
      else {
        // note that the order of these 2 lines is annoyingly important
        // (the second line mutates this.text.length)
        this.dom.deleteData(-1 + this.text.length, 1);
        this.text = this.text.slice(0, -1);
      }
    }
    else {
      this.remove();
      this.jQ.remove();
      cursor[dir] = this[dir];
    }
  };

  _.selectTowards = function(dir, cursor) {
    prayDirection(dir);
    var anticursor = cursor.anticursor;

    var ch = endChar(-dir, this.text)

    if (anticursor[dir] === this) {
      var newPc = TextPiece(ch).createDir(dir, cursor);
      anticursor[dir] = newPc;
      cursor.insDirOf(dir, newPc);
    }
    else {
      var from = this[-dir];
      if (from) from.insTextAtDirEnd(ch, dir);
      else {
        var newPc = TextPiece(ch).createDir(-dir, cursor);
        newPc.jQ.insDirOf(-dir, cursor.selection.jQ);
      }

      if (this.text.length === 1 && anticursor[-dir] === this) {
        anticursor[-dir] = this[-dir]; // `this` will be removed in deleteTowards
      }
    }

    return this.deleteTowards(dir, cursor);
  };
});

LatexCmds.text =
LatexCmds.textnormal =
LatexCmds.textrm =
LatexCmds.textup =
LatexCmds.textmd = TextBlock;

function makeTextBlock(latex, tagName, attrs) {
  return P(TextBlock, {
    ctrlSeq: latex,
    htmlTemplate: '<'+tagName+' '+attrs+'>&0</'+tagName+'>'
  });
}

LatexCmds.em = LatexCmds.italic = LatexCmds.italics =
LatexCmds.emph = LatexCmds.textit = LatexCmds.textsl =
  makeTextBlock('\\textit', 'i', 'class="mq-text-mode"');
LatexCmds.strong = LatexCmds.bold = LatexCmds.textbf =
  makeTextBlock('\\textbf', 'b', 'class="mq-text-mode"');
LatexCmds.sf = LatexCmds.textsf =
  makeTextBlock('\\textsf', 'span', 'class="mq-sans-serif mq-text-mode"');
LatexCmds.tt = LatexCmds.texttt =
  makeTextBlock('\\texttt', 'span', 'class="mq-monospace mq-text-mode"');
LatexCmds.textsc =
  makeTextBlock('\\textsc', 'span', 'style="font-variant:small-caps" class="mq-text-mode"');
LatexCmds.uppercase =
  makeTextBlock('\\uppercase', 'span', 'style="text-transform:uppercase" class="mq-text-mode"');
LatexCmds.lowercase =
  makeTextBlock('\\lowercase', 'span', 'style="text-transform:lowercase" class="mq-text-mode"');


var RootMathCommand = P(MathCommand, function(_, super_) {
  _.init = function(cursor) {
    super_.init.call(this, '$');
    this.cursor = cursor;
  };
  _.htmlTemplate = '<span class="mq-math-mode">&0</span>';
  _.createBlocks = function() {
    super_.createBlocks.call(this);

    this.ends[L].cursor = this.cursor;
    this.ends[L].write = function(cursor, ch) {
      if (ch !== '$')
        MathBlock.prototype.write.call(this, cursor, ch);
      else if (this.isEmpty()) {
        cursor.insRightOf(this.parent);
        this.parent.deleteTowards(dir, cursor);
        VanillaSymbol('\\$','$').createLeftOf(cursor.show());
      }
      else if (!cursor[R])
        cursor.insRightOf(this.parent);
      else if (!cursor[L])
        cursor.insLeftOf(this.parent);
      else
        MathBlock.prototype.write.call(this, cursor, ch);
    };
  };
  _.latex = function() {
    return '$' + this.ends[L].latex() + '$';
  };
});

var RootTextBlock = P(RootMathBlock, function(_, super_) {
  _.keystroke = function(key) {
    if (key === 'Spacebar' || key === 'Shift-Spacebar') return;
    return super_.keystroke.apply(this, arguments);
  };
  _.write = function(cursor, ch) {
    cursor.show().deleteSelection();
    if (ch === '$')
      RootMathCommand(cursor).createLeftOf(cursor);
    else {
      var html;
      if (ch === '<') html = '&lt;';
      else if (ch === '>') html = '&gt;';
      VanillaSymbol(ch, html).createLeftOf(cursor);
    }
  };
});
API.TextField = function(APIClasses) {
  return P(APIClasses.EditableField, function(_, super_) {
    this.RootBlock = RootTextBlock;
    _.__mathquillify = function() {
      return super_.__mathquillify.call(this, 'mq-editable-field mq-text-mode');
    };
    _.latex = function(latex) {
      if (arguments.length > 0) {
        this.__controller.renderLatexText(latex);
        if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
        return this;
      }
      return this.__controller.exportLatex();
    };
  });
};
/****************************************
 * Input box to type backslash commands
 ***************************************/

/*
var LatexCommandInput =
CharCmds['\\'] = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\';
  _.replaces = function(replacedFragment) {
    this._replacedFragment = replacedFragment.disown();
    this.isEmpty = function() { return false; };
  };
  _.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>';
  _.textTemplate = ['\\'];
  _.createBlocks = function() {
    super_.createBlocks.call(this);
    this.ends[L].focus = function() {
      this.parent.jQ.addClass('mq-hasCursor');
      if (this.isEmpty())
        this.parent.jQ.removeClass('mq-empty');

      return this;
    };
    this.ends[L].blur = function() {
      this.parent.jQ.removeClass('mq-hasCursor');
      if (this.isEmpty())
        this.parent.jQ.addClass('mq-empty');

      return this;
    };
    this.ends[L].write = function(cursor, ch) {
      cursor.show().deleteSelection();

      if (ch.match(/[a-z]/i)) VanillaSymbol(ch).createLeftOf(cursor);
      else {
        this.parent.renderCommand(cursor);
        if (ch !== '\\' || !this.isEmpty()) this.parent.parent.write(cursor, ch);
      }
    };
    this.ends[L].keystroke = function(key, e, ctrlr) {
      if (key === 'Tab' || key === 'Enter' || key === 'Spacebar') {
        this.parent.renderCommand(ctrlr.cursor);
        e.preventDefault();
        return;
      }
      return super_.keystroke.apply(this, arguments);
    };
  };
  _.createLeftOf = function(cursor) {
    super_.createLeftOf.call(this, cursor);

    if (this._replacedFragment) {
      var el = this.jQ[0];
      this.jQ =
        this._replacedFragment.jQ.addClass('mq-blur').bind(
          'mousedown mousemove', //FIXME: is monkey-patching the mousedown and mousemove handlers the right way to do this?
          function(e) {
            $(e.target = el).trigger(e);
            return false;
          }
        ).insertBefore(this.jQ).add(this.jQ);
    }
  };
  _.latex = function() {
    return '\\' + this.ends[L].latex() + ' ';
  };
  _.renderCommand = function(cursor) {
    this.jQ = this.jQ.last();
    this.remove();
    if (this[R]) {
      cursor.insLeftOf(this[R]);
    } else {
      cursor.insAtRightEnd(this.parent);
    }

    var latex = this.ends[L].latex();
    if (!latex) latex = ' ';
    var cmd = LatexCmds[latex] || Environments[latex];
    if (cmd) {
      cmd = cmd(latex);
      if (this._replacedFragment) cmd.replaces(this._replacedFragment);
      cmd.createLeftOf(cursor);
    }
    else {
      cmd = TextBlock();
      cmd.replaces(latex);
      cmd.createLeftOf(cursor);
      cursor.insRightOf(cmd);
      if (this._replacedFragment)
        this._replacedFragment.remove();
    }
  };
});

*/
/***************************
 * Commands and Operators.
 **************************/

var scale, // = function(jQ, x, y) { ... }
//will use a CSS 2D transform to scale the jQuery-wrapped HTML elements,
//or the filter matrix transform fallback for IE 5.5-8, or gracefully degrade to
//increasing the fontSize to match the vertical Y scaling factor.

//ideas from http://github.com/louisremi/jquery.transform.js
//see also http://msdn.microsoft.com/en-us/library/ms533014(v=vs.85).aspx

  forceIERedraw = noop,
  div = document.createElement('div'),
  div_style = div.style,
  transformPropNames = {
    transform:1,
    WebkitTransform:1,
    MozTransform:1,
    OTransform:1,
    msTransform:1
  },
  transformPropName;

for (var prop in transformPropNames) {
  if (prop in div_style) {
    transformPropName = prop;
    break;
  }
}

if (transformPropName) {
  scale = function(jQ, x, y) {
    jQ.css(transformPropName, 'scale('+x+','+y+')');
  };
}
else if ('filter' in div_style) { //IE 6, 7, & 8 fallback, see https://github.com/laughinghan/mathquill/wiki/Transforms
  forceIERedraw = function(el){ el.className = el.className; };
  scale = function(jQ, x, y) { //NOTE: assumes y > x
    x /= (1+(y-1)/2);
    jQ.css('fontSize', y + 'em');
    if (!jQ.hasClass('mq-matrixed-container')) {
      jQ.addClass('mq-matrixed-container')
      .wrapInner('<span class="mq-matrixed"></span>');
    }
    var innerjQ = jQ.children()
    .css('filter', 'progid:DXImageTransform.Microsoft'
        + '.Matrix(M11=' + x + ",SizingMethod='auto expand')"
    );
    function calculateMarginRight() {
      jQ.css('marginRight', (innerjQ.width()-1)*(x-1)/x + 'px');
    }
    calculateMarginRight();
    var intervalId = setInterval(calculateMarginRight);
    $(window).load(function() {
      clearTimeout(intervalId);
      calculateMarginRight();
    });
  };
}
else {
  scale = function(jQ, x, y) {
    jQ.css('fontSize', y + 'em');
  };
}

var Style = P(MathCommand, function(_, super_) {
  _.init = function(ctrlSeq, tagName, attrs) {
    super_.init.call(this, ctrlSeq, '<'+tagName+' '+attrs+'>&0</'+tagName+'>');
  };
});

//fonts
LatexCmds.mathrm = bind(Style, '\\mathrm', 'span', 'class="mq-roman mq-font"');
LatexCmds.mathit = bind(Style, '\\mathit', 'i', 'class="mq-font"');
LatexCmds.mathbf = bind(Style, '\\mathbf', 'b', 'class="mq-font"');
LatexCmds.mathsf = bind(Style, '\\mathsf', 'span', 'class="mq-sans-serif mq-font"');
LatexCmds.mathtt = bind(Style, '\\mathtt', 'span', 'class="mq-monospace mq-font"');
//text-decoration
LatexCmds.underline = bind(Style, '\\underline', 'span', 'class="mq-non-leaf mq-underline"');
LatexCmds.overline = LatexCmds.bar = bind(Style, '\\overline', 'span', 'class="mq-non-leaf mq-overline"');
LatexCmds.overrightarrow = bind(Style, '\\overrightarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-right"');
LatexCmds.overleftarrow = bind(Style, '\\overleftarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-left"');
LatexCmds.dot = P(MathCommand, function(_, super_) {
    _.init = function() {
        super_.init.call(this, '\\dot', '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner">'
            + '<span class="mq-dot-recurring">&#x2d9;</span>'
            + '<span class="mq-empty-box">&0</span>'
            + '</span></span>'
        );
    };
});

// `\textcolor{color}{math}` will apply a color to the given math content, where
// `color` is any valid CSS Color Value (see [SitePoint docs][] (recommended),
// [Mozilla docs][], or [W3C spec][]).
//
// [SitePoint docs]: http://reference.sitepoint.com/css/colorvalues
// [Mozilla docs]: https://developer.mozilla.org/en-US/docs/CSS/color_value#Values
// [W3C spec]: http://dev.w3.org/csswg/css3-color/#colorunits
var TextColor = LatexCmds.textcolor = P(MathCommand, function(_, super_) {
  _.setColor = function(color) {
    this.color = color;
    this.htmlTemplate =
      '<span class="mq-textcolor" style="color:' + color + '">&0</span>';
  };
  _.latex = function() {
    return '\\textcolor{' + this.color + '}{' + this.blocks[0].latex() + '}';
  };
  _.parser = function() {
    var self = this;
    var optWhitespace = Parser.optWhitespace;
    var string = Parser.string;
    var regex = Parser.regex;

    return optWhitespace
      .then(string('{'))
      .then(regex(/^[#\w\s.,()%-]*/))
      .skip(string('}'))
      .then(function(color) {
        self.setColor(color);
        return super_.parser.call(self);
      })
    ;
  };
  _.isStyleBlock = function() {
    return true;
  };
});

// Very similar to the \textcolor command, but will add the given CSS class.
// Usage: \class{classname}{math}
// Note regex that whitelists valid CSS classname characters:
// https://github.com/mathquill/mathquill/pull/191#discussion_r4327442
var Class = LatexCmds['class'] = P(MathCommand, function(_, super_) {
  _.parser = function() {
    var self = this, string = Parser.string, regex = Parser.regex;
    return Parser.optWhitespace
      .then(string('{'))
      .then(regex(/^[-\w\s\\\xA0-\xFF]*/))
      .skip(string('}'))
      .then(function(cls) {
        self.cls = cls || '';
        self.htmlTemplate = '<span class="mq-class '+cls+'">&0</span>';
        return super_.parser.call(self);
      })
    ;
  };
  _.latex = function() {
    return '\\class{' + this.cls + '}{' + this.blocks[0].latex() + '}';
  };
  _.isStyleBlock = function() {
    return true;
  };
});

var SupSub = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '_{...}^{...}';
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment && !cursor[L] && cursor.options.supSubsRequireOperand) return;
    return super_.createLeftOf.apply(this, arguments);
  };
  _.contactWeld = function(cursor) {
    // Look on either side for a SupSub, if one is found compare my
    // .sub, .sup with its .sub, .sup. If I have one that it doesn't,
    // then call .addBlock() on it with my block; if I have one that
    // it also has, then insert my block's children into its block,
    // unless my block has none, in which case insert the cursor into
    // its block (and not mine, I'm about to remove myself) in the case
    // I was just typed.
    // TODO: simplify

    // equiv. to [L, R].forEach(function(dir) { ... });
    for (var dir = L; dir; dir = (dir === L ? R : false)) {
      if (this[dir] instanceof SupSub) {
        // equiv. to 'sub sup'.split(' ').forEach(function(supsub) { ... });
        for (var supsub = 'sub'; supsub; supsub = (supsub === 'sub' ? 'sup' : false)) {
          var src = this[supsub], dest = this[dir][supsub];
          if (!src) continue;
          if (!dest) this[dir].addBlock(src.disown());
          else if (!src.isEmpty()) { // ins src children at -dir end of dest
            src.jQ.children().insAtDirEnd(-dir, dest.jQ);
            var children = src.children().disown();
            var pt = Point(dest, children.ends[R], dest.ends[L]);
            if (dir === L) children.adopt(dest, dest.ends[R], 0);
            else children.adopt(dest, 0, dest.ends[L]);
          }
          else var pt = Point(dest, 0, dest.ends[L]);
          this.placeCursor = (function(dest, src) { // TODO: don't monkey-patch
            return function(cursor) { cursor.insAtDirEnd(-dir, dest || src); };
          }(dest, src));
        }
        this.remove();
        if (cursor && cursor[L] === this) {
          if (dir === R && pt) {
            pt[L] ? cursor.insRightOf(pt[L]) : cursor.insAtLeftEnd(pt.parent);
          }
          else cursor.insRightOf(this[dir]);
        }
        break;
      }
    }
  };
  Options.p.charsThatBreakOutOfSupSub = '';
  _.finalizeTree = function() {
    this.ends[L].write = function(cursor, ch) {
      if (cursor.options.autoSubscriptNumerals && this === this.parent.sub) {
        if (ch === '_') return;
        var cmd = this.chToCmd(ch, cursor.options);
        if (cmd instanceof Symbol) cursor.deleteSelection();
        else cursor.clearSelection().insRightOf(this.parent);
        return cmd.createLeftOf(cursor.show());
      }
      if (cursor[L] && !cursor[R] && !cursor.selection
          && cursor.options.charsThatBreakOutOfSupSub.indexOf(ch) > -1) {
        cursor.insRightOf(this.parent);
      }
      MathBlock.p.write.apply(this, arguments);
    };
  };
  _.moveTowards = function(dir, cursor, updown) {
    if (cursor.options.autoSubscriptNumerals && !this.sup) {
      cursor.insDirOf(dir, this);
    }
    else super_.moveTowards.apply(this, arguments);
  };
  _.deleteTowards = function(dir, cursor) {
    if (cursor.options.autoSubscriptNumerals && this.sub) {
      var cmd = this.sub.ends[-dir];
      if (cmd instanceof Symbol) cmd.remove();
      else if (cmd) cmd.deleteTowards(dir, cursor.insAtDirEnd(-dir, this.sub));

      // TODO: factor out a .removeBlock() or something
      if (this.sub.isEmpty()) {
        this.sub.deleteOutOf(L, cursor.insAtLeftEnd(this.sub));
        if (this.sup) cursor.insDirOf(-dir, this);
        // Note `-dir` because in e.g. x_1^2| want backspacing (leftward)
        // to delete the 1 but to end up rightward of x^2; with non-negated
        // `dir` (try it), the cursor appears to have gone "through" the ^2.
      }
    }
    else super_.deleteTowards.apply(this, arguments);
  };
  _.latex = function() {
    function latex(prefix, block) {
      var l = block && block.latex();
      return block ? prefix + (l.length === 1 ? l : '{' + (l || ' ') + '}') : '';
    }
    return latex('_', this.sub) + latex('^', this.sup);
  };
  _.addBlock = function(block) {
    if (this.supsub === 'sub') {
      this.sup = this.upInto = this.sub.upOutOf = block;
      block.adopt(this, this.sub, 0).downOutOf = this.sub;
      block.jQ = $('<span class="mq-sup"/>').append(block.jQ.children())
        .attr(mqBlockId, block.id).prependTo(this.jQ);
    }
    else {
      this.sub = this.downInto = this.sup.downOutOf = block;
      block.adopt(this, 0, this.sup).upOutOf = this.sup;
      block.jQ = $('<span class="mq-sub"></span>').append(block.jQ.children())
        .attr(mqBlockId, block.id).appendTo(this.jQ.removeClass('mq-sup-only'));
      this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>');
    }
    // like 'sub sup'.split(' ').forEach(function(supsub) { ... });
    for (var i = 0; i < 2; i += 1) (function(cmd, supsub, oppositeSupsub, updown) {
      cmd[supsub].deleteOutOf = function(dir, cursor) {
        cursor.insDirOf((this[dir] ? -dir : dir), this.parent);
        if (!this.isEmpty()) {
          var end = this.ends[dir];
          this.children().disown()
            .withDirAdopt(dir, cursor.parent, cursor[dir], cursor[-dir])
            .jQ.insDirOf(-dir, cursor.jQ);
          cursor[-dir] = end;
        }
        cmd.supsub = oppositeSupsub;
        delete cmd[supsub];
        delete cmd[updown+'Into'];
        cmd[oppositeSupsub][updown+'OutOf'] = insLeftOfMeUnlessAtEnd;
        delete cmd[oppositeSupsub].deleteOutOf;
        if (supsub === 'sub') $(cmd.jQ.addClass('mq-sup-only')[0].lastChild).remove();
        this.remove();
      };
    }(this, 'sub sup'.split(' ')[i], 'sup sub'.split(' ')[i], 'down up'.split(' ')[i]));
  };
});

function insLeftOfMeUnlessAtEnd(cursor) {
  // cursor.insLeftOf(cmd), unless cursor at the end of block, and every
  // ancestor cmd is at the end of every ancestor block
  var cmd = this.parent, ancestorCmd = cursor;
  do {
    if (ancestorCmd[R]) return cursor.insLeftOf(cmd);
    ancestorCmd = ancestorCmd.parent.parent;
  } while (ancestorCmd !== cmd);
  cursor.insRightOf(cmd);
}

LatexCmds.subscript =
LatexCmds._ = P(SupSub, function(_, super_) {
  _.supsub = 'sub';
  _.htmlTemplate =
      '<span class="mq-supsub mq-non-leaf">'
    +   '<span class="mq-sub">&0</span>'
    +   '<span style="display:inline-block;width:0">&#8203;</span>'
    + '</span>'
  ;
  _.textTemplate = [ '_' ];
  _.finalizeTree = function() {
    this.downInto = this.sub = this.ends[L];
    this.sub.upOutOf = insLeftOfMeUnlessAtEnd;
    super_.finalizeTree.call(this);
  };
});

LatexCmds.superscript =
LatexCmds.supscript =
LatexCmds['^'] = P(SupSub, function(_, super_) {
  _.supsub = 'sup';
  _.htmlTemplate =
      '<span class="mq-supsub mq-non-leaf mq-sup-only">'
    +   '<span class="mq-sup">&0</span>'
    + '</span>'
  ;
  _.textTemplate = [ '^' ];
  _.finalizeTree = function() {
    this.upInto = this.sup = this.ends[R];
    this.sup.downOutOf = insLeftOfMeUnlessAtEnd;
    super_.finalizeTree.call(this);
  };
});

var SummationNotation = P(MathCommand, function(_, super_) {
  _.init = function(ch, html) {
    var htmlTemplate =
      '<span class="mq-large-operator mq-non-leaf">'
    +   '<span class="mq-to"><span>&1</span></span>'
    +   '<big>'+html+'</big>'
    +   '<span class="mq-from"><span>&0</span></span>'
    + '</span>'
    ;
    Symbol.prototype.init.call(this, ch, htmlTemplate);
  };
  _.createLeftOf = function(cursor) {
    super_.createLeftOf.apply(this, arguments);
    if (cursor.options.sumStartsWithNEquals) {
      Letter('n').createLeftOf(cursor);
      Equality().createLeftOf(cursor);
    }
  };
  _.latex = function() {
    function simplify(latex) {
      return latex.length === 1 ? latex : '{' + (latex || ' ') + '}';
    }
    return this.ctrlSeq + '_' + simplify(this.ends[L].latex()) +
      '^' + simplify(this.ends[R].latex());
  };
  _.parser = function() {
    var string = Parser.string;
    var optWhitespace = Parser.optWhitespace;
    var succeed = Parser.succeed;
    var block = latexMathParser.block;

    var self = this;
    var blocks = self.blocks = [ MathBlock(), MathBlock() ];
    for (var i = 0; i < blocks.length; i += 1) {
      blocks[i].adopt(self, self.ends[R], 0);
    }

    return optWhitespace.then(string('_').or(string('^'))).then(function(supOrSub) {
      var child = blocks[supOrSub === '_' ? 0 : 1];
      return block.then(function(block) {
        block.children().adopt(child, child.ends[R], 0);
        return succeed(self);
      });
    }).many().result(self);
  };
  _.finalizeTree = function() {
    this.downInto = this.ends[L];
    this.upInto = this.ends[R];
    this.ends[L].upOutOf = this.ends[R];
    this.ends[R].downOutOf = this.ends[L];
  };
});

LatexCmds['\u2211'] =
LatexCmds.sum =
LatexCmds.summation = bind(SummationNotation,'\\sum ','&sum;');

LatexCmds['\u220f'] =
LatexCmds.prod =
LatexCmds.product = bind(SummationNotation,'\\prod ','&prod;');

LatexCmds.coprod =
LatexCmds.coproduct = bind(SummationNotation,'\\coprod ','&#8720;');

LatexCmds['\u222b'] =
LatexCmds['int'] =
LatexCmds.integral = P(SummationNotation, function(_, super_) {
  _.init = function() {
    var htmlTemplate =
      '<span class="mq-int mq-non-leaf">'
    +   '<big>&int;</big>'
    +   '<span class="mq-supsub mq-non-leaf">'
    +     '<span class="mq-sup"><span class="mq-sup-inner">&1</span></span>'
    +     '<span class="mq-sub">&0</span>'
    +     '<span style="display:inline-block;width:0">&#8203</span>'
    +   '</span>'
    + '</span>'
    ;
    Symbol.prototype.init.call(this, '\\int ', htmlTemplate);
  };
  // FIXME: refactor rather than overriding
  _.createLeftOf = MathCommand.p.createLeftOf;
});

var Fraction =
LatexCmds.frac =
LatexCmds.dfrac =
LatexCmds.cfrac =
LatexCmds.fraction = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\frac';
  _.htmlTemplate =
      '<span class="mq-fraction mq-non-leaf">'
    +   '<span class="mq-numerator">&0</span>'
    +   '<span class="mq-denominator">&1</span>'
    +   '<span style="display:inline-block;width:0">&#8203;</span>'
    + '</span>'
  ;
  _.textTemplate = ['(', ')/(', ')'];
  _.finalizeTree = function() {
    this.upInto = this.ends[R].upOutOf = this.ends[L];
    this.downInto = this.ends[L].downOutOf = this.ends[R];
  };
});

var LiveFraction =
LatexCmds.over =
CharCmds['/'] = P(Fraction, function(_, super_) {
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment) {
      var leftward = cursor[L];
      while (leftward &&
        !(
          leftward instanceof BinaryOperator ||
          leftward instanceof (LatexCmds.text || noop) ||
          leftward instanceof SummationNotation ||
          leftward.ctrlSeq === '\\ ' ||
          /^[,;:]$/.test(leftward.ctrlSeq)
        ) //lookbehind for operator
      ) leftward = leftward[L];

      if (leftward instanceof SummationNotation && leftward[R] instanceof SupSub) {
        leftward = leftward[R];
        if (leftward[R] instanceof SupSub && leftward[R].ctrlSeq != leftward.ctrlSeq)
          leftward = leftward[R];
      }

      if (leftward !== cursor[L]) {
        this.replaces(Fragment(leftward[R] || cursor.parent.ends[L], cursor[L]));
        cursor[L] = leftward;
      }
    }
    super_.createLeftOf.call(this, cursor);
  };
});

var SquareRoot =
LatexCmds.sqrt =
LatexCmds['\u221a'] = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\sqrt';
  _.htmlTemplate =
      '<span class="mq-non-leaf">'
    +   '<span class="mq-scaled mq-sqrt-prefix">&radic;</span>'
    +   '<span class="mq-non-leaf mq-sqrt-stem">&0</span>'
    + '</span>'
  ;
  _.textTemplate = ['sqrt(', ')'];
  _.parser = function() {
    return latexMathParser.optBlock.then(function(optBlock) {
      return latexMathParser.block.map(function(block) {
        var nthroot = NthRoot();
        nthroot.blocks = [ optBlock, block ];
        optBlock.adopt(nthroot, 0, 0);
        block.adopt(nthroot, optBlock, 0);
        return nthroot;
      });
    }).or(super_.parser.call(this));
  };
  _.reflow = function() {
    var block = this.ends[R].jQ;
    scale(block.prev(), 1, block.innerHeight()/+block.css('fontSize').slice(0,-2) - .1);
  };
});

var Hat = LatexCmds.hat = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\hat';
  _.htmlTemplate =
      '<span class="mq-non-leaf">'
    +   '<span class="mq-hat-prefix">^</span>'
    +   '<span class="mq-hat-stem">&0</span>'
    + '</span>'
  ;
  _.textTemplate = ['hat(', ')'];
});

var NthRoot =
LatexCmds.nthroot = P(SquareRoot, function(_, super_) {
  _.htmlTemplate =
      '<sup class="mq-nthroot mq-non-leaf">&0</sup>'
    + '<span class="mq-scaled">'
    +   '<span class="mq-sqrt-prefix mq-scaled">&radic;</span>'
    +   '<span class="mq-sqrt-stem mq-non-leaf">&1</span>'
    + '</span>'
  ;
  _.textTemplate = ['sqrt[', '](', ')'];
  _.latex = function() {
    return '\\sqrt['+this.ends[L].latex()+']{'+this.ends[R].latex()+'}';
  };
});

var DiacriticAbove = P(MathCommand, function(_, super_) {
  _.init = function(ctrlSeq, symbol, textTemplate) {
    var htmlTemplate =
      '<span class="mq-non-leaf">'
      +   '<span class="mq-diacritic-above">'+symbol+'</span>'
      +   '<span class="mq-diacritic-stem">&0</span>'
      + '</span>'
    ;

    super_.init.call(this, ctrlSeq, htmlTemplate, textTemplate);
  };
});
LatexCmds.vec = bind(DiacriticAbove, '\\vec', '&rarr;', ['vec(', ')']);
LatexCmds.tilde = bind(DiacriticAbove, '\\tilde', '~', ['tilde(', ')']);

function DelimsMixin(_, super_) {
  _.jQadd = function() {
    super_.jQadd.apply(this, arguments);
    this.delimjQs = this.jQ.children(':first').add(this.jQ.children(':last'));
    this.contentjQ = this.jQ.children(':eq(1)');
  };
  _.reflow = function() {
    var height = this.contentjQ.outerHeight()
                 / parseFloat(this.contentjQ.css('fontSize'));
    scale(this.delimjQs, min(1 + .2*(height - 1), 1.2), 1.2*height);
  };
}

// Round/Square/Curly/Angle Brackets (aka Parens/Brackets/Braces)
//   first typed as one-sided bracket with matching "ghost" bracket at
//   far end of current block, until you type an opposing one
var Bracket = P(P(MathCommand, DelimsMixin), function(_, super_) {
  _.init = function(side, open, close, ctrlSeq, end) {
    super_.init.call(this, '\\left'+ctrlSeq, undefined, [open, close]);
    this.side = side;
    this.sides = {};
    this.sides[L] = { ch: open, ctrlSeq: ctrlSeq };
    this.sides[R] = { ch: close, ctrlSeq: end };
  };
  _.numBlocks = function() { return 1; };
  _.html = function() { // wait until now so that .side may
    this.htmlTemplate = // be set by createLeftOf or parser
        '<span class="mq-non-leaf">'
      +   '<span class="mq-scaled mq-paren'+(this.side === R ? ' mq-ghost' : '')+'">'
      +     this.sides[L].ch
      +   '</span>'
      +   '<span class="mq-non-leaf">&0</span>'
      +   '<span class="mq-scaled mq-paren'+(this.side === L ? ' mq-ghost' : '')+'">'
      +     this.sides[R].ch
      +   '</span>'
      + '</span>'
    ;
    return super_.html.call(this);
  };
  _.latex = function() {
    return '\\left'+this.sides[L].ctrlSeq+this.ends[L].latex()+'\\right'+this.sides[R].ctrlSeq;
  };
  _.matchBrack = function(opts, expectedSide, node) {
    // return node iff it's a matching 1-sided bracket of expected side (if any)
    return node instanceof Bracket && node.side && node.side !== -expectedSide
      && (!opts.restrictMismatchedBrackets
        || OPP_BRACKS[this.sides[this.side].ch] === node.sides[node.side].ch
        || { '(': ']', '[': ')' }[this.sides[L].ch] === node.sides[R].ch) && node;
  };
  _.closeOpposing = function(brack) {
    brack.side = 0;
    brack.sides[this.side] = this.sides[this.side]; // copy over my info (may be
    brack.delimjQs.eq(this.side === L ? 0 : 1) // mismatched, like [a, b))
      .removeClass('mq-ghost').html(this.sides[this.side].ch);
  };
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment) { // unless wrapping seln in brackets,
        // check if next to or inside an opposing one-sided bracket
      var opts = cursor.options;
      if (this.sides[L].ch === '|') { // check both sides if I'm a pipe
        var brack = this.matchBrack(opts, R, cursor[R])
                 || this.matchBrack(opts, L, cursor[L])
                 || this.matchBrack(opts, 0, cursor.parent.parent);
      }
      else {
        var brack = this.matchBrack(opts, -this.side, cursor[-this.side])
                 || this.matchBrack(opts, -this.side, cursor.parent.parent);
      }
    }
    if (brack) {
      var side = this.side = -brack.side; // may be pipe with .side not yet set
      this.closeOpposing(brack);
      if (brack === cursor.parent.parent && cursor[side]) { // move the stuff between
        Fragment(cursor[side], cursor.parent.ends[side], -side) // me and ghost outside
          .disown().withDirAdopt(-side, brack.parent, brack, brack[side])
          .jQ.insDirOf(side, brack.jQ);
      }
      brack.bubble('reflow');
    }
    else {
      brack = this, side = brack.side;
      if (brack.replacedFragment) brack.side = 0; // wrapping seln, don't be one-sided
      else if (cursor[-side]) { // elsewise, auto-expand so ghost is at far end
        brack.replaces(Fragment(cursor[-side], cursor.parent.ends[-side], side));
        cursor[-side] = 0;
      }
      super_.createLeftOf.call(brack, cursor);
    }
    if (side === L) cursor.insAtLeftEnd(brack.ends[L]);
    else cursor.insRightOf(brack);
  };
  _.placeCursor = noop;
  _.unwrap = function() {
    this.ends[L].children().disown().adopt(this.parent, this, this[R])
      .jQ.insertAfter(this.jQ);
    this.remove();
  };
  _.deleteSide = function(side, outward, cursor) {
    var parent = this.parent, sib = this[side], farEnd = parent.ends[side];

    if (side === this.side) { // deleting non-ghost of one-sided bracket, unwrap
      this.unwrap();
      sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
      return;
    }

    var opts = cursor.options, wasSolid = !this.side;
    this.side = -side;
    // if deleting like, outer close-brace of [(1+2)+3} where inner open-paren
    if (this.matchBrack(opts, side, this.ends[L].ends[this.side])) { // is ghost,
      this.closeOpposing(this.ends[L].ends[this.side]); // then become [1+2)+3
      var origEnd = this.ends[L].ends[side];
      this.unwrap();
      if (origEnd.siblingCreated) origEnd.siblingCreated(cursor.options, side);
      sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
    }
    else { // if deleting like, inner close-brace of ([1+2}+3) where outer
      if (this.matchBrack(opts, side, this.parent.parent)) { // open-paren is
        this.parent.parent.closeOpposing(this); // ghost, then become [1+2+3)
        this.parent.parent.unwrap();
      } // else if deleting outward from a solid pair, unwrap
      else if (outward && wasSolid) {
        this.unwrap();
        sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
        return;
      }
      else { // else deleting just one of a pair of brackets, become one-sided
        this.sides[side] = { ch: OPP_BRACKS[this.sides[this.side].ch],
                             ctrlSeq: OPP_BRACKS[this.sides[this.side].ctrlSeq] };
        this.delimjQs.removeClass('mq-ghost')
          .eq(side === L ? 0 : 1).addClass('mq-ghost').html(this.sides[side].ch);
      }
      if (sib) { // auto-expand so ghost is at far end
        var origEnd = this.ends[L].ends[side];
        Fragment(sib, farEnd, -side).disown()
          .withDirAdopt(-side, this.ends[L], origEnd, 0)
          .jQ.insAtDirEnd(side, this.ends[L].jQ.removeClass('mq-empty'));
        if (origEnd.siblingCreated) origEnd.siblingCreated(cursor.options, side);
        cursor.insDirOf(-side, sib);
      } // didn't auto-expand, cursor goes just outside or just inside parens
      else (outward ? cursor.insDirOf(side, this)
                    : cursor.insAtDirEnd(side, this.ends[L]));
    }
  };
  _.deleteTowards = function(dir, cursor) {
    this.deleteSide(-dir, false, cursor);
  };
  _.finalizeTree = function() {
    this.ends[L].deleteOutOf = function(dir, cursor) {
      this.parent.deleteSide(dir, true, cursor);
    };
    // FIXME HACK: after initial creation/insertion, finalizeTree would only be
    // called if the paren is selected and replaced, e.g. by LiveFraction
    this.finalizeTree = this.intentionalBlur = function() {
      this.delimjQs.eq(this.side === L ? 1 : 0).removeClass('mq-ghost');
      this.side = 0;
    };
  };
  _.siblingCreated = function(opts, dir) { // if something typed between ghost and far
    if (dir === -this.side) this.finalizeTree(); // end of its block, solidify
  };
});

var OPP_BRACKS = {
  '(': ')',
  ')': '(',
  '[': ']',
  ']': '[',
  '{': '}',
  '}': '{',
  '\\{': '\\}',
  '\\}': '\\{',
  '&lang;': '&rang;',
  '&rang;': '&lang;',
  '\\langle ': '\\rangle ',
  '\\rangle ': '\\langle ',
  '|': '|',
  '\\lVert ' : '\\rVert ',
  '\\rVert ' : '\\lVert ',
};

function bindCharBracketPair(open, ctrlSeq) {
  var ctrlSeq = ctrlSeq || open, close = OPP_BRACKS[open], end = OPP_BRACKS[ctrlSeq];
  CharCmds[open] = bind(Bracket, L, open, close, ctrlSeq, end);
  CharCmds[close] = bind(Bracket, R, open, close, ctrlSeq, end);
}
bindCharBracketPair('(');
bindCharBracketPair('[');
bindCharBracketPair('{', '\\{');
LatexCmds.langle = bind(Bracket, L, '&lang;', '&rang;', '\\langle ', '\\rangle ');
LatexCmds.rangle = bind(Bracket, R, '&lang;', '&rang;', '\\langle ', '\\rangle ');
CharCmds['|'] = bind(Bracket, L, '|', '|', '|', '|');
LatexCmds.lVert = bind(Bracket, L, '&#8741;', '&#8741;', '\\lVert ', '\\rVert ');
LatexCmds.rVert = bind(Bracket, R, '&#8741;', '&#8741;', '\\lVert ', '\\rVert ');

LatexCmds.left = P(MathCommand, function(_) {
  _.parser = function() {
    var regex = Parser.regex;
    var string = Parser.string;
    var succeed = Parser.succeed;
    var optWhitespace = Parser.optWhitespace;

    return optWhitespace.then(regex(/^(?:[([|]|\\\{|\\langle\b|\\lVert\b)/))
      .then(function(ctrlSeq) {
        var open = (ctrlSeq.charAt(0) === '\\' ? ctrlSeq.slice(1) : ctrlSeq);
	if (ctrlSeq=="\\langle") { open = '&lang;'; ctrlSeq = ctrlSeq + ' '; }
	if (ctrlSeq=="\\lVert") { open = '&#8741;'; ctrlSeq = ctrlSeq + ' '; }
        return latexMathParser.then(function (block) {
          return string('\\right').skip(optWhitespace)
            .then(regex(/^(?:[\])|]|\\\}|\\rangle\b|\\rVert\b)/)).map(function(end) {
              var close = (end.charAt(0) === '\\' ? end.slice(1) : end);
	      if (end=="\\rangle") { close = '&rang;'; end = end + ' '; }
	      if (end=="\\rVert") { close = '&#8741;'; end = end + ' '; }
              var cmd = Bracket(0, open, close, ctrlSeq, end);
              cmd.blocks = [ block ];
              block.adopt(cmd, 0, 0);
              return cmd;
            })
          ;
        });
      })
    ;
  };
});

LatexCmds.right = P(MathCommand, function(_) {
  _.parser = function() {
    return Parser.fail('unmatched \\right');
  };
});

var Binomial =
LatexCmds.binom =
LatexCmds.binomial = P(P(MathCommand, DelimsMixin), function(_, super_) {
  _.ctrlSeq = '\\binom';
  _.htmlTemplate =
      '<span class="mq-non-leaf">'
    +   '<span class="mq-paren mq-scaled">(</span>'
    +   '<span class="mq-non-leaf">'
    +     '<span class="mq-array mq-non-leaf">'
    +       '<span>&0</span>'
    +       '<span>&1</span>'
    +     '</span>'
    +   '</span>'
    +   '<span class="mq-paren mq-scaled">)</span>'
    + '</span>'
  ;
  _.textTemplate = ['choose(',',',')'];
});

var Choose =
LatexCmds.choose = P(Binomial, function(_) {
  _.createLeftOf = LiveFraction.prototype.createLeftOf;
});

LatexCmds.editable = // backcompat with before cfd3620 on #233
LatexCmds.MathQuillMathField = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\MathQuillMathField';
  _.htmlTemplate =
      '<span class="mq-editable-field">'
    +   '<span class="mq-root-block">&0</span>'
    + '</span>'
  ;
  _.parser = function() {
    var self = this,
      string = Parser.string, regex = Parser.regex, succeed = Parser.succeed;
    return string('[').then(regex(/^[a-z][a-z0-9]*/i)).skip(string(']'))
      .map(function(name) { self.name = name; }).or(succeed())
      .then(super_.parser.call(self));
  };
  _.finalizeTree = function(options) {
    var ctrlr = Controller(this.ends[L], this.jQ, options);
    ctrlr.KIND_OF_MQ = 'MathField';
    ctrlr.editable = true;
    ctrlr.createTextarea();
    ctrlr.editablesTextareaEvents();
    ctrlr.cursor.insAtRightEnd(ctrlr.root);
    RootBlockMixin(ctrlr.root);
  };
  _.registerInnerField = function(innerFields, MathField) {
    innerFields.push(innerFields[this.name] = MathField(this.ends[L].controller));
  };
  _.latex = function(){ return this.ends[L].latex(); };
  _.text = function(){ return this.ends[L].text(); };
});

// Embed arbitrary things
// Probably the closest DOM analogue would be an iframe?
// From MathQuill's perspective, it's a Symbol, it can be
// anywhere and the cursor can go around it but never in it.
// Create by calling public API method .dropEmbedded(),
// or by calling the global public API method .registerEmbed()
// and rendering LaTeX like \embed{registeredName} (see test).
var Embed = LatexCmds.embed = P(Symbol, function(_, super_) {
  _.setOptions = function(options) {
    function noop () { return ""; }
    this.text = options.text || noop;
    this.htmlTemplate = options.htmlString || "";
    this.latex = options.latex || noop;
    return this;
  };
  _.parser = function() {
    var self = this,
      string = Parser.string, regex = Parser.regex, succeed = Parser.succeed;
    return string('{').then(regex(/^[a-z][a-z0-9]*/i)).skip(string('}'))
      .then(function(name) {
        // the chars allowed in the optional data block are arbitrary other than
        // excluding curly braces and square brackets (which'd be too confusing)
        return string('[').then(regex(/^[-\w\s]*/)).skip(string(']'))
          .or(succeed()).map(function(data) {
            return self.setOptions(EMBEDS[name](data));
          })
        ;
      })
    ;
  };
});

// LaTeX environments
// Environments are delimited by an opening \begin{} and a closing
// \end{}. Everything inside those tags will be formatted in a
// special manner depending on the environment type.
var Environments = {};

LatexCmds.begin = P(MathCommand, function(_, super_) {
  _.parser = function() {
    var string = Parser.string;
    var regex = Parser.regex;
    return string('{')
      .then(regex(/^[a-z]+/i))
      .skip(string('}'))
      .then(function (env) {
          return (Environments[env] ?
            Environments[env]().parser() :
            Parser.fail('unknown environment type: '+env)
          ).skip(string('\\end{'+env+'}'));
      })
    ;
  };
});

var Environment = P(MathCommand, function(_, super_) {
  _.template = [['\\begin{', '}'], ['\\end{', '}']];
  _.wrappers = function () {
    return [
      _.template[0].join(this.environment),
      _.template[1].join(this.environment)
    ];
  };
});

var Matrix =
Environments.matrix = P(Environment, function(_, super_) {

  var delimiters = {
    column: '&',
    row: '\\\\'
  };
  _.parentheses = {
    left: null,
    right: null
  };
  _.environment = 'matrix';

  _.reflow = function() {
    var blockjQ = this.jQ.children('table');

    var height = blockjQ.outerHeight()/+blockjQ.css('fontSize').slice(0,-2);

    var parens = this.jQ.children('.mq-paren');
    if (parens.length) {
      scale(parens, min(1 + .2*(height - 1), 1.2), 1.05*height);
    }
  };
  _.latex = function() {
    var latex = '';
    var row;

    this.eachChild(function (cell) {
      if (typeof row !== 'undefined') {
        latex += (row !== cell.row) ?
          delimiters.row :
          delimiters.column;
      }
      row = cell.row;
      latex += cell.latex();
    });

    return this.wrappers().join(latex);
  };
  _.html = function() {
    var cells = [], trs = '', i=0, row;

    function parenHtml(paren) {
      return (paren) ?
          '<span class="mq-scaled mq-paren">'
        +   paren
        + '</span>' : '';
    }

    // Build <tr><td>.. structure from cells
    this.eachChild(function (cell) {
      if (row !== cell.row) {
        row = cell.row;
        trs += '<tr>$tds</tr>';
        cells[row] = [];
      }
      cells[row].push('<td>&'+(i++)+'</td>');
    });

    this.htmlTemplate =
        '<span class="mq-matrix mq-non-leaf">'
      +   parenHtml(this.parentheses.left)
      +   '<table class="mq-non-leaf">'
      +     trs.replace(/\$tds/g, function () {
              return cells.shift().join('');
            })
      +   '</table>'
      +   parenHtml(this.parentheses.right)
      + '</span>'
    ;

    return super_.html.call(this);
  };
  // Create default 4-cell matrix
  _.createBlocks = function() {
    this.blocks = [
      MatrixCell(0, this),
      MatrixCell(0, this),
      MatrixCell(1, this),
      MatrixCell(1, this)
    ];
  };
  _.parser = function() {
    var self = this;
    var optWhitespace = Parser.optWhitespace;
    var string = Parser.string;

    return optWhitespace
    .then(string(delimiters.column)
      .or(string(delimiters.row))
      .or(latexMathParser.block))
    .many()
    .skip(optWhitespace)
    .then(function(items) {
      var blocks = [];
      var row = 0;
      self.blocks = [];

      function addCell() {
        self.blocks.push(MatrixCell(row, self, blocks));
        blocks = [];
      }

      for (var i=0; i<items.length; i+=1) {
        if (items[i] instanceof MathBlock) {
          blocks.push(items[i]);
        } else {
          addCell();
          if (items[i] === delimiters.row) row+=1;
        }
      }
      addCell();
      self.autocorrect();
      return Parser.succeed(self);
    });
  };
  // Relink all the cells after parsing
  _.finalizeTree = function() {
    var table = this.jQ.find('table');
    table.toggleClass('mq-rows-1', table.find('tr').length === 1);
    this.relink();
  };
  // Enter the matrix at the top or bottom row if updown is configured.
  _.getEntryPoint = function(dir, cursor, updown) {
    if (updown === 'up') {
      if (dir === L) {
        return this.blocks[this.rowSize - 1];
      } else {
        return this.blocks[0];
      }
    } else { // updown === 'down'
      if (dir === L) {
        return this.blocks[this.blocks.length - 1];
      } else {
        return this.blocks[this.blocks.length - this.rowSize];
      }
    }
  };
  // Exit the matrix at the first and last columns if updown is configured.
  _.atExitPoint = function(dir, cursor) {
      // Which block are we in?
      var i = this.blocks.indexOf(cursor.parent);
      if (dir === L) {
        // If we're on the left edge and moving left, we should exit.
        return i % this.rowSize === 0;
      } else {
        // If we're on the right edge and moving right, we should exit.
        return (i + 1) % this.rowSize === 0;
      }
  };
  _.moveTowards = function(dir, cursor, updown) {
    var entryPoint = updown && this.getEntryPoint(dir, cursor, updown);
    cursor.insAtDirEnd(-dir, entryPoint || this.ends[-dir]);
  };

  // Set up directional pointers between cells
  _.relink = function() {
    var blocks = this.blocks;
    var rows = [];
    var row, column, cell;

    // The row size will be used by other functions down the track.
    // Begin by assuming we're a one-row matrix, and we'll overwrite this if we find another row.
    this.rowSize = blocks.length;

    // Use a for loop rather than eachChild
    // as we're still making sure children()
    // is set up properly
    for (var i=0; i<blocks.length; i+=1) {
      cell = blocks[i];
      if (row !== cell.row) {
        if (cell.row === 1) {
          // We've just finished iterating the first row.
          this.rowSize = column;
        }
        row = cell.row;
        rows[row] = [];
        column = 0;
      }
      rows[row][column] = cell;

      // Set up horizontal linkage
      cell[R] = blocks[i+1];
      cell[L] = blocks[i-1];

      // Set up vertical linkage
      if (rows[row-1] && rows[row-1][column]) {
        cell.upOutOf = rows[row-1][column];
        rows[row-1][column].downOutOf = cell;
      }

      column+=1;
    }

    // set start and end blocks of matrix
    this.ends[L] = blocks[0];
    this.ends[R] = blocks[blocks.length-1];
  };
  // Ensure consistent row lengths
  _.autocorrect = function(rows) {
    var lengths = [], rows = [];
    var blocks = this.blocks;
    var maxLength, shortfall, position, row, i;

    for (i=0; i<blocks.length; i+=1) {
      row = blocks[i].row;
      rows[row] = rows[row] || [];
      rows[row].push(blocks[i]);
      lengths[row] = rows[row].length;
    }

    maxLength = Math.max.apply(null, lengths);
    if (maxLength !== Math.min.apply(null, lengths)) {
      // Pad shorter rows to correct length
      for (i=0; i<rows.length; i+=1) {
        shortfall = maxLength - rows[i].length;
        while (shortfall) {
          position = maxLength*i + rows[i].length;
          blocks.splice(position, 0, MatrixCell(i, this));
          shortfall-=1;
        }
      }
      this.relink();
    }
  };
  // Deleting a cell will also delete the current row and
  // column if they are empty, and relink the matrix.
  _.deleteCell = function(currentCell) {
    var rows = [], columns = [], myRow = [], myColumn = [];
    var blocks = this.blocks, row, column;

    // Create arrays for cells in the current row / column
    this.eachChild(function (cell) {
      if (row !== cell.row) {
        row = cell.row;
        rows[row] = [];
        column = 0;
      }
      columns[column] = columns[column] || [];
      columns[column].push(cell);
      rows[row].push(cell);

      if (cell === currentCell) {
        myRow = rows[row];
        myColumn = columns[column];
      }

      column+=1;
    });

    function isEmpty(cells) {
      var empties = [];
      for (var i=0; i<cells.length; i+=1) {
        if (cells[i].isEmpty()) empties.push(cells[i]);
      }
      return empties.length === cells.length;
    }

    function remove(cells) {
      for (var i=0; i<cells.length; i+=1) {
        if (blocks.indexOf(cells[i]) > -1) {
          cells[i].remove();
          blocks.splice(blocks.indexOf(cells[i]), 1);
        }
      }
    }

    if (isEmpty(myRow) && myColumn.length > 1) {
      row = rows.indexOf(myRow);
      // Decrease all following row numbers
      this.eachChild(function (cell) {
        if (cell.row > row) cell.row-=1;
      });
      // Dispose of cells and remove <tr>
      remove(myRow);
      this.jQ.find('tr').eq(row).remove();
    }
    if (isEmpty(myColumn) && myRow.length > 1) {
      remove(myColumn);
    }
    this.finalizeTree();
  };
  _.addRow = function(afterCell) {
    var previous = [], newCells = [], next = [];
    var newRow = $('<tr></tr>'), row = afterCell.row;
    var columns = 0, block, column;

    this.eachChild(function (cell) {
      // Cache previous rows
      if (cell.row <= row) {
        previous.push(cell);
      }
      // Work out how many columns
      if (cell.row === row) {
        if (cell === afterCell) column = columns;
        columns+=1;
      }
      // Cache cells after new row
      if (cell.row > row) {
        cell.row+=1;
        next.push(cell);
      }
    });

    // Add new cells, one for each column
    for (var i=0; i<columns; i+=1) {
      block = MatrixCell(row+1);
      block.parent = this;
      newCells.push(block);

      // Create cell <td>s and add to new row
      block.jQ = $('<td class="mq-empty">')
        .attr(mqBlockId, block.id)
        .appendTo(newRow);
    }

    // Insert the new row
    this.jQ.find('tr').eq(row).after(newRow);
    this.blocks = previous.concat(newCells, next);
    return newCells[column];
  };
  _.addColumn = function(afterCell) {
    var rows = [], newCells = [];
    var column, block;

    // Build rows array and find new column index
    this.eachChild(function (cell) {
      rows[cell.row] = rows[cell.row] || [];
      rows[cell.row].push(cell);
      if (cell === afterCell) column = rows[cell.row].length;
    });

    // Add new cells, one for each row
    for (var i=0; i<rows.length; i+=1) {
      block = MatrixCell(i);
      block.parent = this;
      newCells.push(block);
      rows[i].splice(column, 0, block);

      block.jQ = $('<td class="mq-empty">')
        .attr(mqBlockId, block.id);
    }

    // Add cell <td> elements in correct positions
    this.jQ.find('tr').each(function (i) {
      $(this).find('td').eq(column-1).after(rows[i][column].jQ);
    });

    // Flatten the rows array-of-arrays
    this.blocks = [].concat.apply([], rows);
    return newCells[afterCell.row];
  };
  _.insert = function(method, afterCell) {
    var cellToFocus = this[method](afterCell);
    this.cursor = this.cursor || this.parent.cursor;
    this.finalizeTree();
    this.bubble('reflow').cursor.insAtRightEnd(cellToFocus);
  };
  _.backspace = function(cell, dir, cursor, finalDeleteCallback) {
    var dirwards = cell[dir];
    if (cell.isEmpty()) {
      this.deleteCell(cell);
      while (dirwards &&
        dirwards[dir] &&
        this.blocks.indexOf(dirwards) === -1) {
          dirwards = dirwards[dir];
      }
      if (dirwards) {
        cursor.insAtDirEnd(-dir, dirwards);
      }
      if (this.blocks.length === 1 && this.blocks[0].isEmpty()) {
        finalDeleteCallback();
        this.finalizeTree();
      }
      this.bubble('edited');
    }
  };
});

Environments.pmatrix = P(Matrix, function(_, super_) {
  _.environment = 'pmatrix';
  _.parentheses = {
    left: '(',
    right: ')'
  };
});

Environments.bmatrix = P(Matrix, function(_, super_) {
  _.environment = 'bmatrix';
  _.parentheses = {
    left: '[',
    right: ']'
  };
});

Environments.Bmatrix = P(Matrix, function(_, super_) {
  _.environment = 'Bmatrix';
  _.parentheses = {
    left: '{',
    right: '}'
  };
});

Environments.vmatrix = P(Matrix, function(_, super_) {
  _.environment = 'vmatrix';
  _.parentheses = {
    left: '|',
    right: '|'
  };
});

Environments.Vmatrix = P(Matrix, function(_, super_) {
  _.environment = 'Vmatrix';
  _.parentheses = {
    left: '&#8214;',
    right: '&#8214;'
  };
});

// Replacement for mathblocks inside matrix cells
// Adds matrix-specific keyboard commands
var MatrixCell = P(MathBlock, function(_, super_) {
  _.init = function(row, parent, replaces) {
    super_.init.call(this);
    this.row = row;
    if (parent) {
      this.adopt(parent, parent.ends[R], 0);
    }
    if (replaces) {
      for (var i=0; i<replaces.length; i++) {
        replaces[i].children().adopt(this, this.ends[R], 0);
      }
    }
  };
  _.keystroke = function(key, e, ctrlr) {
    switch (key) {
    case 'Shift-Spacebar':
      e.preventDefault();
      return this.parent.insert('addColumn', this);
      break;
    case 'Shift-Enter':
    return this.parent.insert('addRow', this);
      break;
    }
    return super_.keystroke.apply(this, arguments);
  };
  _.deleteOutOf = function(dir, cursor) {
    var self = this, args = arguments;
    this.parent.backspace(this, dir, cursor, function () {
      // called when last cell gets deleted
      return super_.deleteOutOf.apply(self, args);
    });
  };
  _.moveOutOf = function(dir, cursor, updown) {
    var atExitPoint = updown && this.parent.atExitPoint(dir, cursor);
    // Step out of the matrix if we've moved past an edge column
    if (!atExitPoint && this[dir]) cursor.insAtDirEnd(-dir, this[dir]);
    else cursor.insDirOf(dir, this.parent);
  };
});
/************************************
 * Symbols for Advanced Mathematics
 ***********************************/

LatexCmds.notin =
LatexCmds.cong =
LatexCmds.equiv =
LatexCmds.oplus =
LatexCmds.otimes = P(BinaryOperator, function(_, super_) {
  _.init = function(latex) {
    super_.init.call(this, '\\'+latex+' ', '&'+latex+';');
  };
});

LatexCmds['\u2260'] = LatexCmds.ne = LatexCmds.neq = bind(BinaryOperator,'\\ne ','&ne;');

LatexCmds['\u2217'] = LatexCmds.ast = LatexCmds.star = LatexCmds.loast = LatexCmds.lowast =
  bind(BinaryOperator,'\\ast ','&lowast;');

LatexCmds.therefor = LatexCmds.therefore =
  bind(BinaryOperator,'\\therefore ','&there4;');

LatexCmds.cuz = // l33t
LatexCmds.because = bind(BinaryOperator,'\\because ','&#8757;');

LatexCmds.prop = LatexCmds.propto = bind(BinaryOperator,'\\propto ','&prop;');

LatexCmds['\u2248'] = LatexCmds.asymp = LatexCmds.approx = bind(BinaryOperator,'\\approx ','&asymp;');

LatexCmds.isin = LatexCmds['in'] = bind(BinaryOperator,'\\in ','&isin;');

LatexCmds.ni = LatexCmds.contains = bind(BinaryOperator,'\\ni ','&ni;');

LatexCmds.notni = LatexCmds.niton = LatexCmds.notcontains = LatexCmds.doesnotcontain =
  bind(BinaryOperator,'\\not\\ni ','&#8716;');

LatexCmds.sub = LatexCmds.subset = bind(BinaryOperator,'\\subset ','&sub;');

LatexCmds.sup = LatexCmds.supset = LatexCmds.superset =
  bind(BinaryOperator,'\\supset ','&sup;');

LatexCmds.nsub = LatexCmds.notsub =
LatexCmds.nsubset = LatexCmds.notsubset =
  bind(BinaryOperator,'\\not\\subset ','&#8836;');

LatexCmds.nsup = LatexCmds.notsup =
LatexCmds.nsupset = LatexCmds.notsupset =
LatexCmds.nsuperset = LatexCmds.notsuperset =
  bind(BinaryOperator,'\\not\\supset ','&#8837;');

LatexCmds.sube = LatexCmds.subeq = LatexCmds.subsete = LatexCmds.subseteq =
  bind(BinaryOperator,'\\subseteq ','&sube;');

LatexCmds.supe = LatexCmds.supeq =
LatexCmds.supsete = LatexCmds.supseteq =
LatexCmds.supersete = LatexCmds.superseteq =
  bind(BinaryOperator,'\\supseteq ','&supe;');

LatexCmds.nsube = LatexCmds.nsubeq =
LatexCmds.notsube = LatexCmds.notsubeq =
LatexCmds.nsubsete = LatexCmds.nsubseteq =
LatexCmds.notsubsete = LatexCmds.notsubseteq =
  bind(BinaryOperator,'\\not\\subseteq ','&#8840;');

LatexCmds.nsupe = LatexCmds.nsupeq =
LatexCmds.notsupe = LatexCmds.notsupeq =
LatexCmds.nsupsete = LatexCmds.nsupseteq =
LatexCmds.notsupsete = LatexCmds.notsupseteq =
LatexCmds.nsupersete = LatexCmds.nsuperseteq =
LatexCmds.notsupersete = LatexCmds.notsuperseteq =
  bind(BinaryOperator,'\\not\\supseteq ','&#8841;');


//the canonical sets of numbers
LatexCmds.N = LatexCmds.naturals = LatexCmds.Naturals =
  bind(VanillaSymbol,'\\mathbb{N}','&#8469;');

LatexCmds.P =
LatexCmds.primes = LatexCmds.Primes =
LatexCmds.projective = LatexCmds.Projective =
LatexCmds.probability = LatexCmds.Probability =
  bind(VanillaSymbol,'\\mathbb{P}','&#8473;');

LatexCmds.Z = LatexCmds.integers = LatexCmds.Integers =
  bind(VanillaSymbol,'\\mathbb{Z}','&#8484;');

LatexCmds.Q = LatexCmds.rationals = LatexCmds.Rationals =
  bind(VanillaSymbol,'\\mathbb{Q}','&#8474;');

LatexCmds.R = LatexCmds.reals = LatexCmds.Reals =
  bind(VanillaSymbol,'\\mathbb{R}','&#8477;');

LatexCmds.C =
LatexCmds.complex = LatexCmds.Complex =
LatexCmds.complexes = LatexCmds.Complexes =
LatexCmds.complexplane = LatexCmds.Complexplane = LatexCmds.ComplexPlane =
  bind(VanillaSymbol,'\\mathbb{C}','&#8450;');

LatexCmds.H = LatexCmds.Hamiltonian = LatexCmds.quaternions = LatexCmds.Quaternions =
  bind(VanillaSymbol,'\\mathbb{H}','&#8461;');

//spacing
LatexCmds.quad = LatexCmds.emsp = bind(VanillaSymbol,'\\quad ','    ');
LatexCmds.qquad = bind(VanillaSymbol,'\\qquad ','        ');
/* spacing special characters, gonna have to implement this in LatexCommandInput::onText somehow
case ',':
  return VanillaSymbol('\\, ',' ');
case ':':
  return VanillaSymbol('\\: ','  ');
case ';':
  return VanillaSymbol('\\; ','   ');
case '!':
  return Symbol('\\! ','<span style="margin-right:-.2em"></span>');
*/

//binary operators
LatexCmds.diamond = bind(VanillaSymbol, '\\diamond ', '&#9671;');
LatexCmds.bigtriangleup = bind(VanillaSymbol, '\\bigtriangleup ', '&#9651;');
LatexCmds.ominus = bind(VanillaSymbol, '\\ominus ', '&#8854;');
LatexCmds.uplus = bind(VanillaSymbol, '\\uplus ', '&#8846;');
LatexCmds.bigtriangledown = bind(VanillaSymbol, '\\bigtriangledown ', '&#9661;');
LatexCmds.sqcap = bind(VanillaSymbol, '\\sqcap ', '&#8851;');
LatexCmds.triangleleft = bind(VanillaSymbol, '\\triangleleft ', '&#8882;');
LatexCmds.sqcup = bind(VanillaSymbol, '\\sqcup ', '&#8852;');
LatexCmds.triangleright = bind(VanillaSymbol, '\\triangleright ', '&#8883;');
//circledot is not a not real LaTex command see https://github.com/mathquill/mathquill/pull/552 for more details
LatexCmds.odot = LatexCmds.circledot = bind(VanillaSymbol, '\\odot ', '&#8857;');
LatexCmds.bigcirc = bind(VanillaSymbol, '\\bigcirc ', '&#9711;');
LatexCmds.dagger = bind(VanillaSymbol, '\\dagger ', '&#0134;');
LatexCmds.ddagger = bind(VanillaSymbol, '\\ddagger ', '&#135;');
LatexCmds.wr = bind(VanillaSymbol, '\\wr ', '&#8768;');
LatexCmds.amalg = bind(VanillaSymbol, '\\amalg ', '&#8720;');

//relationship symbols
LatexCmds.models = bind(VanillaSymbol, '\\models ', '&#8872;');
LatexCmds.prec = bind(VanillaSymbol, '\\prec ', '&#8826;');
LatexCmds.succ = bind(VanillaSymbol, '\\succ ', '&#8827;');
LatexCmds.preceq = bind(VanillaSymbol, '\\preceq ', '&#8828;');
LatexCmds.succeq = bind(VanillaSymbol, '\\succeq ', '&#8829;');
LatexCmds.simeq = bind(VanillaSymbol, '\\simeq ', '&#8771;');
LatexCmds.mid = bind(VanillaSymbol, '\\mid ', '&#8739;');
LatexCmds.ll = bind(VanillaSymbol, '\\ll ', '&#8810;');
LatexCmds.gg = bind(VanillaSymbol, '\\gg ', '&#8811;');
LatexCmds.parallel = bind(VanillaSymbol, '\\parallel ', '&#8741;');
LatexCmds.nparallel = bind(VanillaSymbol, '\\nparallel ', '&#8742;');
LatexCmds.bowtie = bind(VanillaSymbol, '\\bowtie ', '&#8904;');
LatexCmds.sqsubset = bind(VanillaSymbol, '\\sqsubset ', '&#8847;');
LatexCmds.sqsupset = bind(VanillaSymbol, '\\sqsupset ', '&#8848;');
LatexCmds.smile = bind(VanillaSymbol, '\\smile ', '&#8995;');
LatexCmds.sqsubseteq = bind(VanillaSymbol, '\\sqsubseteq ', '&#8849;');
LatexCmds.sqsupseteq = bind(VanillaSymbol, '\\sqsupseteq ', '&#8850;');
LatexCmds.doteq = bind(VanillaSymbol, '\\doteq ', '&#8784;');
LatexCmds.frown = bind(VanillaSymbol, '\\frown ', '&#8994;');
LatexCmds.vdash = bind(VanillaSymbol, '\\vdash ', '&#8870;');
LatexCmds.dashv = bind(VanillaSymbol, '\\dashv ', '&#8867;');
LatexCmds.nless = bind(VanillaSymbol, '\\nless ', '&#8814;');
LatexCmds.ngtr = bind(VanillaSymbol, '\\ngtr ', '&#8815;');

//arrows
LatexCmds.longleftarrow = bind(VanillaSymbol, '\\longleftarrow ', '&#8592;');
LatexCmds.longrightarrow = bind(VanillaSymbol, '\\longrightarrow ', '&#8594;');
LatexCmds.Longleftarrow = bind(VanillaSymbol, '\\Longleftarrow ', '&#8656;');
LatexCmds.Longrightarrow = bind(VanillaSymbol, '\\Longrightarrow ', '&#8658;');
LatexCmds.longleftrightarrow = bind(VanillaSymbol, '\\longleftrightarrow ', '&#8596;');
LatexCmds.updownarrow = bind(VanillaSymbol, '\\updownarrow ', '&#8597;');
LatexCmds.Longleftrightarrow = bind(VanillaSymbol, '\\Longleftrightarrow ', '&#8660;');
LatexCmds.Updownarrow = bind(VanillaSymbol, '\\Updownarrow ', '&#8661;');
LatexCmds.mapsto = bind(VanillaSymbol, '\\mapsto ', '&#8614;');
LatexCmds.nearrow = bind(VanillaSymbol, '\\nearrow ', '&#8599;');
LatexCmds.hookleftarrow = bind(VanillaSymbol, '\\hookleftarrow ', '&#8617;');
LatexCmds.hookrightarrow = bind(VanillaSymbol, '\\hookrightarrow ', '&#8618;');
LatexCmds.searrow = bind(VanillaSymbol, '\\searrow ', '&#8600;');
LatexCmds.leftharpoonup = bind(VanillaSymbol, '\\leftharpoonup ', '&#8636;');
LatexCmds.rightharpoonup = bind(VanillaSymbol, '\\rightharpoonup ', '&#8640;');
LatexCmds.swarrow = bind(VanillaSymbol, '\\swarrow ', '&#8601;');
LatexCmds.leftharpoondown = bind(VanillaSymbol, '\\leftharpoondown ', '&#8637;');
LatexCmds.rightharpoondown = bind(VanillaSymbol, '\\rightharpoondown ', '&#8641;');
LatexCmds.nwarrow = bind(VanillaSymbol, '\\nwarrow ', '&#8598;');

//Misc
LatexCmds.ldots = bind(VanillaSymbol, '\\ldots ', '&#8230;');
LatexCmds.cdots = bind(VanillaSymbol, '\\cdots ', '&#8943;');
LatexCmds.vdots = bind(VanillaSymbol, '\\vdots ', '&#8942;');
LatexCmds.ddots = bind(VanillaSymbol, '\\ddots ', '&#8945;');
LatexCmds.surd = bind(VanillaSymbol, '\\surd ', '&#8730;');
LatexCmds.triangle = bind(VanillaSymbol, '\\triangle ', '&#9651;');
LatexCmds.ell = bind(VanillaSymbol, '\\ell ', '&#8467;');
LatexCmds.top = bind(VanillaSymbol, '\\top ', '&#8868;');
LatexCmds.flat = bind(VanillaSymbol, '\\flat ', '&#9837;');
LatexCmds.natural = bind(VanillaSymbol, '\\natural ', '&#9838;');
LatexCmds.sharp = bind(VanillaSymbol, '\\sharp ', '&#9839;');
LatexCmds.wp = bind(VanillaSymbol, '\\wp ', '&#8472;');
LatexCmds.bot = bind(VanillaSymbol, '\\bot ', '&#8869;');
LatexCmds.clubsuit = bind(VanillaSymbol, '\\clubsuit ', '&#9827;');
LatexCmds.diamondsuit = bind(VanillaSymbol, '\\diamondsuit ', '&#9826;');
LatexCmds.heartsuit = bind(VanillaSymbol, '\\heartsuit ', '&#9825;');
LatexCmds.spadesuit = bind(VanillaSymbol, '\\spadesuit ', '&#9824;');
//not real LaTex command see https://github.com/mathquill/mathquill/pull/552 for more details
LatexCmds.parallelogram = bind(VanillaSymbol, '\\parallelogram ', '&#9649;');
LatexCmds.square = bind(VanillaSymbol, '\\square ', '&#11036;');

//variable-sized
LatexCmds.oint = bind(VanillaSymbol, '\\oint ', '&#8750;');
LatexCmds.bigcap = bind(VanillaSymbol, '\\bigcap ', '&#8745;');
LatexCmds.bigcup = bind(VanillaSymbol, '\\bigcup ', '&#8746;');
LatexCmds.bigsqcup = bind(VanillaSymbol, '\\bigsqcup ', '&#8852;');
LatexCmds.bigvee = bind(VanillaSymbol, '\\bigvee ', '&#8744;');
LatexCmds.bigwedge = bind(VanillaSymbol, '\\bigwedge ', '&#8743;');
LatexCmds.bigodot = bind(VanillaSymbol, '\\bigodot ', '&#8857;');
LatexCmds.bigotimes = bind(VanillaSymbol, '\\bigotimes ', '&#8855;');
LatexCmds.bigoplus = bind(VanillaSymbol, '\\bigoplus ', '&#8853;');
LatexCmds.biguplus = bind(VanillaSymbol, '\\biguplus ', '&#8846;');

//delimiters
LatexCmds.lfloor = bind(VanillaSymbol, '\\lfloor ', '&#8970;');
LatexCmds.rfloor = bind(VanillaSymbol, '\\rfloor ', '&#8971;');
LatexCmds.lceil = bind(VanillaSymbol, '\\lceil ', '&#8968;');
LatexCmds.rceil = bind(VanillaSymbol, '\\rceil ', '&#8969;');
LatexCmds.opencurlybrace = LatexCmds.lbrace = bind(VanillaSymbol, '\\lbrace ', '{');
LatexCmds.closecurlybrace = LatexCmds.rbrace = bind(VanillaSymbol, '\\rbrace ', '}');
LatexCmds.lbrack = bind(VanillaSymbol, '[');
LatexCmds.rbrack = bind(VanillaSymbol, ']');

//various symbols
LatexCmds.slash = bind(VanillaSymbol, '/');
LatexCmds.vert = bind(VanillaSymbol,'|');
LatexCmds.perp = LatexCmds.perpendicular = bind(VanillaSymbol,'\\perp ','&perp;');
LatexCmds.nabla = LatexCmds.del = bind(VanillaSymbol,'\\nabla ','&nabla;');
LatexCmds.hbar = bind(VanillaSymbol,'\\hbar ','&#8463;');

LatexCmds.AA = LatexCmds.Angstrom = LatexCmds.angstrom =
  bind(VanillaSymbol,'\\text\\AA ','&#8491;');

LatexCmds.ring = LatexCmds.circ = LatexCmds.circle =
  bind(VanillaSymbol,'\\circ ','&#8728;');

LatexCmds.bull = LatexCmds.bullet = bind(VanillaSymbol,'\\bullet ','&bull;');

LatexCmds.setminus = LatexCmds.smallsetminus =
  bind(VanillaSymbol,'\\setminus ','&#8726;');

LatexCmds.not = //bind(Symbol,'\\not ','<span class="not">/</span>');
LatexCmds['\u00ac'] = LatexCmds.neg = bind(VanillaSymbol,'\\neg ','&not;');

LatexCmds['\u2026'] = LatexCmds.dots = LatexCmds.ellip = LatexCmds.hellip =
LatexCmds.ellipsis = LatexCmds.hellipsis =
  bind(VanillaSymbol,'\\dots ','&hellip;');

LatexCmds.converges =
LatexCmds.darr = LatexCmds.dnarr = LatexCmds.dnarrow = LatexCmds.downarrow =
  bind(VanillaSymbol,'\\downarrow ','&darr;');

LatexCmds.dArr = LatexCmds.dnArr = LatexCmds.dnArrow = LatexCmds.Downarrow =
  bind(VanillaSymbol,'\\Downarrow ','&dArr;');

LatexCmds.diverges = LatexCmds.uarr = LatexCmds.uparrow =
  bind(VanillaSymbol,'\\uparrow ','&uarr;');

LatexCmds.uArr = LatexCmds.Uparrow = bind(VanillaSymbol,'\\Uparrow ','&uArr;');

LatexCmds.to = bind(BinaryOperator,'\\to ','&rarr;');

LatexCmds.rarr = LatexCmds.rightarrow = bind(VanillaSymbol,'\\rightarrow ','&rarr;');

LatexCmds.implies = bind(BinaryOperator,'\\Rightarrow ','&rArr;');

LatexCmds.rArr = LatexCmds.Rightarrow = bind(VanillaSymbol,'\\Rightarrow ','&rArr;');

LatexCmds.gets = bind(BinaryOperator,'\\gets ','&larr;');

LatexCmds.larr = LatexCmds.leftarrow = bind(VanillaSymbol,'\\leftarrow ','&larr;');

LatexCmds.impliedby = bind(BinaryOperator,'\\Leftarrow ','&lArr;');

LatexCmds.lArr = LatexCmds.Leftarrow = bind(VanillaSymbol,'\\Leftarrow ','&lArr;');

LatexCmds.harr = LatexCmds.lrarr = LatexCmds.leftrightarrow =
  bind(VanillaSymbol,'\\leftrightarrow ','&harr;');

LatexCmds.iff = bind(BinaryOperator,'\\Leftrightarrow ','&hArr;');

LatexCmds.hArr = LatexCmds.lrArr = LatexCmds.Leftrightarrow =
  bind(VanillaSymbol,'\\Leftrightarrow ','&hArr;');

LatexCmds.Re = LatexCmds.Real = LatexCmds.real = bind(VanillaSymbol,'\\Re ','&real;');

LatexCmds.Im = LatexCmds.imag =
LatexCmds.image = LatexCmds.imagin = LatexCmds.imaginary = LatexCmds.Imaginary =
  bind(VanillaSymbol,'\\Im ','&image;');

LatexCmds.part = LatexCmds.partial = bind(VanillaSymbol,'\\partial ','&part;');

LatexCmds.infty = LatexCmds.infin = LatexCmds.infinity =
  bind(VanillaSymbol,'\\infty ','&infin;');

LatexCmds.alef = LatexCmds.alefsym = LatexCmds.aleph = LatexCmds.alephsym =
  bind(VanillaSymbol,'\\aleph ','&alefsym;');

LatexCmds.xist = //LOL
LatexCmds.xists = LatexCmds.exist = LatexCmds.exists =
  bind(VanillaSymbol,'\\exists ','&exist;');
  
LatexCmds.nexists = LatexCmds.nexist =
      bind(VanillaSymbol, '\\nexists ', '&#8708;');

LatexCmds.and = LatexCmds.land = LatexCmds.wedge =
  bind(BinaryOperator,'\\wedge ','&and;');

LatexCmds.or = LatexCmds.lor = LatexCmds.vee = bind(BinaryOperator,'\\vee ','&or;');

LatexCmds.o = LatexCmds.O =
LatexCmds.empty = LatexCmds.emptyset =
LatexCmds.oslash = LatexCmds.Oslash =
LatexCmds.nothing = LatexCmds.varnothing =
  bind(BinaryOperator,'\\varnothing ','&empty;');

LatexCmds.cup = LatexCmds.union = bind(BinaryOperator,'\\cup ','&cup;');

LatexCmds.cap = LatexCmds.intersect = LatexCmds.intersection =
  bind(BinaryOperator,'\\cap ','&cap;');

// FIXME: the correct LaTeX would be ^\circ but we can't parse that
LatexCmds.deg = LatexCmds.degree = bind(VanillaSymbol,'\\degree ','&deg;');

LatexCmds.ang = LatexCmds.angle = bind(VanillaSymbol,'\\angle ','&ang;');
LatexCmds.measuredangle = bind(VanillaSymbol,'\\measuredangle ','&#8737;');
/*********************************
 * Symbols for Basic Mathematics
 ********************************/

var Digit = P(VanillaSymbol, function(_, super_) {
  _.createLeftOf = function(cursor) {
    if (cursor.options.autoSubscriptNumerals
        && cursor.parent !== cursor.parent.parent.sub
        && ((cursor[L] instanceof Variable && cursor[L].isItalic !== false)
            || (cursor[L] instanceof SupSub
                && cursor[L][L] instanceof Variable
                && cursor[L][L].isItalic !== false))) {
      LatexCmds._().createLeftOf(cursor);
      super_.createLeftOf.call(this, cursor);
      cursor.insRightOf(cursor.parent.parent);
    }
    else super_.createLeftOf.call(this, cursor);
  };
});

var Variable = P(Symbol, function(_, super_) {
  _.init = function(ch, html) {
    super_.init.call(this, ch, '<var>'+(html || ch)+'</var>');
  };
  _.text = function() {
    var text = this.ctrlSeq;
    if (this.isPartOfOperator) {
      if (text[0] == '\\') {
        text = text.slice(1, text.length);
      }
      else if (text[text.length-1] == ' ') {
        text = text.slice (0, -1);
      }
    } else {
      if (this[L] && !(this[L] instanceof Variable)
          && !(this[L] instanceof BinaryOperator)
          && this[L].ctrlSeq !== '\\ ')
        text = '*' + text;
      if (this[R] && !(this[R] instanceof BinaryOperator)
          && !(this[R] instanceof SupSub))
        text += '*';
    }
    return text;
  };
});

Options.p.autoCommands = { _maxLength: 0 };
optionProcessors.autoCommands = function(cmds) {
  if (!/^[a-z]+(?: [a-z]+)*$/i.test(cmds)) {
    throw '"'+cmds+'" not a space-delimited list of only letters';
  }
  var list = cmds.split(' '), dict = {}, maxLength = 0;
  for (var i = 0; i < list.length; i += 1) {
    var cmd = list[i];
    if (cmd.length < 2) {
      throw 'autocommand "'+cmd+'" not minimum length of 2';
    }
    if (LatexCmds[cmd] === OperatorName) {
      throw '"' + cmd + '" is a built-in operator name';
    }
    dict[cmd] = 1;
    maxLength = max(maxLength, cmd.length);
  }
  dict._maxLength = maxLength;
  return dict;
};

var Letter = P(Variable, function(_, super_) {
  _.init = function(ch) { return super_.init.call(this, this.letter = ch); };
  _.createLeftOf = function(cursor) {
    super_.createLeftOf.apply(this, arguments);
    var autoCmds = cursor.options.autoCommands, maxLength = autoCmds._maxLength;
    if (maxLength > 0) {
      // want longest possible autocommand, so join together longest
      // sequence of letters
      var str = '', l = this, i = 0;
      // FIXME: l.ctrlSeq === l.letter checks if first or last in an operator name
      while (l instanceof Letter && l.ctrlSeq === l.letter && i < maxLength) {
        str = l.letter + str, l = l[L], i += 1;
      }
      // check for an autocommand, going thru substrings longest to shortest
      while (str.length) {
        if (autoCmds.hasOwnProperty(str)) {
          for (var i = 1, l = this; i < str.length; i += 1, l = l[L]);
          Fragment(l, this).remove();
          cursor[L] = l[L];
          return LatexCmds[str](str).createLeftOf(cursor);
        }
        str = str.slice(1);
      }
    }
  };
  _.italicize = function(bool) {
    this.isItalic = bool;
    this.isPartOfOperator = !bool;
    this.jQ.toggleClass('mq-operator-name', !bool);
    return this;
  };
  _.finalizeTree = _.siblingDeleted = _.siblingCreated = function(opts, dir) {
    // don't auto-un-italicize if the sibling to my right changed (dir === R or
    // undefined) and it's now a Letter, it will un-italicize everyone
    if (dir !== L && this[R] instanceof Letter) return;
    this.autoUnItalicize(opts);
  };
  _.autoUnItalicize = function(opts) {
    var autoOps = opts.autoOperatorNames;
    if (autoOps._maxLength === 0) return;
    // want longest possible operator names, so join together entire contiguous
    // sequence of letters
    var str = this.letter;
    for (var l = this[L]; l instanceof Letter; l = l[L]) str = l.letter + str;
    for (var r = this[R]; r instanceof Letter; r = r[R]) str += r.letter;

    // removeClass and delete flags from all letters before figuring out
    // which, if any, are part of an operator name
    Fragment(l[R] || this.parent.ends[L], r[L] || this.parent.ends[R]).each(function(el) {
      el.italicize(true).jQ.removeClass('mq-first mq-last mq-followed-by-supsub');
      el.ctrlSeq = el.letter;
    });

    // check for operator names: at each position from left to right, check
    // substrings from longest to shortest
    outer: for (var i = 0, first = l[R] || this.parent.ends[L]; i < str.length; i += 1, first = first[R]) {
      for (var len = min(autoOps._maxLength, str.length - i); len > 0; len -= 1) {
        var word = str.slice(i, i + len);
        if (autoOps.hasOwnProperty(word)) {
          for (var j = 0, letter = first; j < len; j += 1, letter = letter[R]) {
            letter.italicize(false);
            var last = letter;
          }

          var isBuiltIn = BuiltInOpNames.hasOwnProperty(word);
          first.ctrlSeq = (isBuiltIn ? '\\' : '\\operatorname{') + first.ctrlSeq;
          last.ctrlSeq += (isBuiltIn ? ' ' : '}');
          if (TwoWordOpNames.hasOwnProperty(word)) last[L][L][L].jQ.addClass('mq-last');
          if (!shouldOmitPadding(first[L])) first.jQ.addClass('mq-first');
          if (!shouldOmitPadding(last[R])) {
            if (last[R] instanceof SupSub) {
              var supsub = last[R]; // XXX monkey-patching, but what's the right thing here?
              // Have operatorname-specific code in SupSub? A CSS-like language to style the
              // math tree, but which ignores cursor and selection (which CSS can't)?
              var respace = supsub.siblingCreated = supsub.siblingDeleted = function() {
                supsub.jQ.toggleClass('mq-after-operator-name', !(supsub[R] instanceof Bracket));
              };
              respace();
            }
            else {
              last.jQ.toggleClass('mq-last', !(last[R] instanceof Bracket));
            }
          }

          i += len - 1;
          first = last;
          continue outer;
        }
      }
    }
  };
  function shouldOmitPadding(node) {
    // omit padding if no node, or if node already has padding (to avoid double-padding)
    return !node || (node instanceof BinaryOperator) || (node instanceof SummationNotation);
  }
});
var BuiltInOpNames = {}; // the set of operator names like \sin, \cos, etc that
  // are built-into LaTeX, see Section 3.17 of the Short Math Guide: http://tinyurl.com/jm9okjc
  // MathQuill auto-unitalicizes some operator names not in that set, like 'hcf'
  // and 'arsinh', which must be exported as \operatorname{hcf} and
  // \operatorname{arsinh}. Note: over/under line/arrow \lim variants like
  // \varlimsup are not supported
var AutoOpNames = Options.p.autoOperatorNames = { _maxLength: 9 }; // the set
  // of operator names that MathQuill auto-unitalicizes by default; overridable
var TwoWordOpNames = { limsup: 1, liminf: 1, projlim: 1, injlim: 1 };
(function() {
  var mostOps = ('arg deg det dim exp gcd hom inf ker lg lim ln log max min sup'
                 + ' limsup liminf injlim projlim Pr').split(' ');
  for (var i = 0; i < mostOps.length; i += 1) {
    BuiltInOpNames[mostOps[i]] = AutoOpNames[mostOps[i]] = 1;
  }

  var builtInTrigs = // why coth but not sech and csch, LaTeX?
    'sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth'.split(' ');
  for (var i = 0; i < builtInTrigs.length; i += 1) {
    BuiltInOpNames[builtInTrigs[i]] = 1;
  }

  var autoTrigs = 'sin cos tan sec cosec csc cotan cot ctg'.split(' ');
  for (var i = 0; i < autoTrigs.length; i += 1) {
    AutoOpNames[autoTrigs[i]] =
    AutoOpNames['arc'+autoTrigs[i]] =
    AutoOpNames[autoTrigs[i]+'h'] =
    AutoOpNames['ar'+autoTrigs[i]+'h'] =
    AutoOpNames['arc'+autoTrigs[i]+'h'] = 1;
  }

  // compat with some of the nonstandard LaTeX exported by MathQuill
  // before #247. None of these are real LaTeX commands so, seems safe
  var moreNonstandardOps = 'gcf hcf lcm proj span'.split(' ');
  for (var i = 0; i < moreNonstandardOps.length; i += 1) {
    AutoOpNames[moreNonstandardOps[i]] = 1;
  }
}());
optionProcessors.autoOperatorNames = function(cmds) {
  if (!/^[a-z]+(?: [a-z]+)*$/i.test(cmds)) {
    throw '"'+cmds+'" not a space-delimited list of only letters';
  }
  var list = cmds.split(' '), dict = {}, maxLength = 0;
  for (var i = 0; i < list.length; i += 1) {
    var cmd = list[i];
    if (cmd.length < 2) {
      throw '"'+cmd+'" not minimum length of 2';
    }
    dict[cmd] = 1;
    maxLength = max(maxLength, cmd.length);
  }
  dict._maxLength = maxLength;
  return dict;
};
var OperatorName = P(Symbol, function(_, super_) {
  _.init = function(fn) { this.ctrlSeq = fn; };
  _.createLeftOf = function(cursor) {
    var fn = this.ctrlSeq;
    for (var i = 0; i < fn.length; i += 1) {
      Letter(fn.charAt(i)).createLeftOf(cursor);
    }
  };
  _.parser = function() {
    var fn = this.ctrlSeq;
    var block = MathBlock();
    for (var i = 0; i < fn.length; i += 1) {
      Letter(fn.charAt(i)).adopt(block, block.ends[R], 0);
    }
    return Parser.succeed(block.children());
  };
});
for (var fn in AutoOpNames) if (AutoOpNames.hasOwnProperty(fn)) {
  LatexCmds[fn] = OperatorName;
}
LatexCmds.operatorname = P(MathCommand, function(_) {
  _.createLeftOf = noop;
  _.numBlocks = function() { return 1; };
  _.parser = function() {
    return latexMathParser.block.map(function(b) { return b.children(); });
  };
});

LatexCmds.f = P(Letter, function(_, super_) {
  _.init = function() {
    Symbol.p.init.call(this, this.letter = 'f', '<var class="mq-f">f</var>');
  };
  _.italicize = function(bool) {
    this.jQ.html('f').toggleClass('mq-f', bool);
    return super_.italicize.apply(this, arguments);
  };
});

// VanillaSymbol's
LatexCmds[' '] = LatexCmds.space = bind(VanillaSymbol, '\\ ', '&nbsp;');

LatexCmds["'"] = LatexCmds.prime = bind(VanillaSymbol, "'", '&prime;');
LatexCmds['\u2033'] = LatexCmds.dprime = bind(VanillaSymbol, '\u2033', '&Prime;');

LatexCmds.backslash = bind(VanillaSymbol,'\\backslash ','\\');
if (!CharCmds['\\']) CharCmds['\\'] = LatexCmds.backslash;

LatexCmds.$ = bind(VanillaSymbol, '\\$', '$');

// does not use Symbola font
var NonSymbolaSymbol = P(Symbol, function(_, super_) {
  _.init = function(ch, html) {
    super_.init.call(this, ch, '<span class="mq-nonSymbola">'+(html || ch)+'</span>');
  };
});

LatexCmds['@'] = NonSymbolaSymbol;
LatexCmds['&'] = bind(NonSymbolaSymbol, '\\&', '&amp;');
LatexCmds['%'] = bind(NonSymbolaSymbol, '\\%', '%');

//the following are all Greek to me, but this helped a lot: http://www.ams.org/STIX/ion/stixsig03.html

//lowercase Greek letter variables
LatexCmds.alpha =
LatexCmds.beta =
LatexCmds.gamma =
LatexCmds.delta =
LatexCmds.zeta =
LatexCmds.eta =
LatexCmds.theta =
LatexCmds.iota =
LatexCmds.kappa =
LatexCmds.mu =
LatexCmds.nu =
LatexCmds.xi =
LatexCmds.rho =
LatexCmds.sigma =
LatexCmds.tau =
LatexCmds.chi =
LatexCmds.psi =
LatexCmds.omega = P(Variable, function(_, super_) {
  _.init = function(latex) {
    super_.init.call(this,'\\'+latex+' ','&'+latex+';');
  };
});

//why can't anybody FUCKING agree on these
LatexCmds.phi = //W3C or Unicode?
  bind(Variable,'\\phi ','&#981;');

LatexCmds.phiv = //Elsevier and 9573-13
LatexCmds.varphi = //AMS and LaTeX
  bind(Variable,'\\varphi ','&phi;');

LatexCmds.epsilon = //W3C or Unicode?
  bind(Variable,'\\epsilon ','&#1013;');

LatexCmds.epsiv = //Elsevier and 9573-13
LatexCmds.varepsilon = //AMS and LaTeX
  bind(Variable,'\\varepsilon ','&epsilon;');

LatexCmds.piv = //W3C/Unicode and Elsevier and 9573-13
LatexCmds.varpi = //AMS and LaTeX
  bind(Variable,'\\varpi ','&piv;');

LatexCmds.sigmaf = //W3C/Unicode
LatexCmds.sigmav = //Elsevier
LatexCmds.varsigma = //LaTeX
  bind(Variable,'\\varsigma ','&sigmaf;');

LatexCmds.thetav = //Elsevier and 9573-13
LatexCmds.vartheta = //AMS and LaTeX
LatexCmds.thetasym = //W3C/Unicode
  bind(Variable,'\\vartheta ','&thetasym;');

LatexCmds.upsilon = //AMS and LaTeX and W3C/Unicode
LatexCmds.upsi = //Elsevier and 9573-13
  bind(Variable,'\\upsilon ','&upsilon;');

//these aren't even mentioned in the HTML character entity references
LatexCmds.gammad = //Elsevier
LatexCmds.Gammad = //9573-13 -- WTF, right? I dunno if this was a typo in the reference (see above)
LatexCmds.digamma = //LaTeX
  bind(Variable,'\\digamma ','&#989;');

LatexCmds.kappav = //Elsevier
LatexCmds.varkappa = //AMS and LaTeX
  bind(Variable,'\\varkappa ','&#1008;');

LatexCmds.rhov = //Elsevier and 9573-13
LatexCmds.varrho = //AMS and LaTeX
  bind(Variable,'\\varrho ','&#1009;');

//Greek constants, look best in non-italicized Times New Roman
LatexCmds.pi = LatexCmds['\u03c0'] = bind(NonSymbolaSymbol,'\\pi ','&pi;');
LatexCmds.lambda = bind(NonSymbolaSymbol,'\\lambda ','&lambda;');

//uppercase greek letters

LatexCmds.Upsilon = //LaTeX
LatexCmds.Upsi = //Elsevier and 9573-13
LatexCmds.upsih = //W3C/Unicode "upsilon with hook"
LatexCmds.Upsih = //'cos it makes sense to me
  bind(Symbol,'\\Upsilon ','<var style="font-family: serif">&upsih;</var>'); //Symbola's 'upsilon with a hook' is a capital Y without hooks :(

//other symbols with the same LaTeX command and HTML character entity reference
LatexCmds.Gamma =
LatexCmds.Delta =
LatexCmds.Theta =
LatexCmds.Lambda =
LatexCmds.Xi =
LatexCmds.Pi =
LatexCmds.Sigma =
LatexCmds.Phi =
LatexCmds.Psi =
LatexCmds.Omega =
LatexCmds.forall = P(VanillaSymbol, function(_, super_) {
  _.init = function(latex) {
    super_.init.call(this,'\\'+latex+' ','&'+latex+';');
  };
});

// symbols that aren't a single MathCommand, but are instead a whole
// Fragment. Creates the Fragment from a LaTeX string
var LatexFragment = P(MathCommand, function(_) {
  _.init = function(latex) { this.latex = latex; };
  _.createLeftOf = function(cursor) {
    var block = latexMathParser.parse(this.latex);
    block.children().adopt(cursor.parent, cursor[L], cursor[R]);
    cursor[L] = block.ends[R];
    block.jQize().insertBefore(cursor.jQ);
    block.finalizeInsert(cursor.options, cursor);
    if (block.ends[R][R].siblingCreated) block.ends[R][R].siblingCreated(cursor.options, L);
    if (block.ends[L][L].siblingCreated) block.ends[L][L].siblingCreated(cursor.options, R);
    cursor.parent.bubble('reflow');
  };
  _.parser = function() {
    var frag = latexMathParser.parse(this.latex).children();
    return Parser.succeed(frag);
  };
});

// for what seems to me like [stupid reasons][1], Unicode provides
// subscripted and superscripted versions of all ten Arabic numerals,
// as well as [so-called "vulgar fractions"][2].
// Nobody really cares about most of them, but some of them actually
// predate Unicode, dating back to [ISO-8859-1][3], apparently also
// known as "Latin-1", which among other things [Windows-1252][4]
// largely coincides with, so Microsoft Word sometimes inserts them
// and they get copy-pasted into MathQuill.
//
// (Irrelevant but funny story: though not a superset of Latin-1 aka
// ISO-8859-1, Windows-1252 **is** a strict superset of the "closely
// related but distinct"[3] "ISO 8859-1" -- see the lack of a dash
// after "ISO"? Completely different character set, like elephants vs
// elephant seals, or "Zombies" vs "Zombie Redneck Torture Family".
// What kind of idiot would get them confused.
// People in fact got them confused so much, it was so common to
// mislabel Windows-1252 text as ISO-8859-1, that most modern web
// browsers and email clients treat the MIME charset of ISO-8859-1
// as actually Windows-1252, behavior now standard in the HTML5 spec.)
//
// [1]: http://en.wikipedia.org/wiki/Unicode_subscripts_andsuper_scripts
// [2]: http://en.wikipedia.org/wiki/Number_Forms
// [3]: http://en.wikipedia.org/wiki/ISO/IEC_8859-1
// [4]: http://en.wikipedia.org/wiki/Windows-1252
LatexCmds['\u00b9'] = bind(LatexFragment, '^1');
LatexCmds['\u00b2'] = bind(LatexFragment, '^2');
LatexCmds['\u00b3'] = bind(LatexFragment, '^3');
LatexCmds['\u00bc'] = bind(LatexFragment, '\\frac14');
LatexCmds['\u00bd'] = bind(LatexFragment, '\\frac12');
LatexCmds['\u00be'] = bind(LatexFragment, '\\frac34');

var PlusMinus = P(BinaryOperator, function(_) {
  _.init = VanillaSymbol.prototype.init;

  _.contactWeld = _.siblingCreated = _.siblingDeleted = function(opts, dir) {
    function determineOpClassType(node) {
      if (node[L]) {
        // If the left sibling is a binary operator or a separator (comma, semicolon, colon)
        // or an open bracket (open parenthesis, open square bracket)
        // consider the operator to be unary
        if (node[L] instanceof BinaryOperator || /^[,;:\(\[]$/.test(node[L].ctrlSeq)) {
          return '';
        }
      } else if (node.parent && node.parent.parent && node.parent.parent.isStyleBlock()) {
        //if we are in a style block at the leftmost edge, determine unary/binary based on
        //the style block
        //this allows style blocks to be transparent for unary/binary purposes
        return determineOpClassType(node.parent.parent);
      } else {
        return '';
      }

      return 'mq-binary-operator';
    };
    
    if (dir === R) return; // ignore if sibling only changed on the right
    this.jQ[0].className = determineOpClassType(this);
    return this;
  };
});

LatexCmds['+'] = bind(PlusMinus, '+', '+');
//yes, these are different dashes, I think one is an en dash and the other is a hyphen
LatexCmds['\u2013'] = LatexCmds['-'] = bind(PlusMinus, '-', '&minus;');
LatexCmds['\u00b1'] = LatexCmds.pm = LatexCmds.plusmn = LatexCmds.plusminus =
  bind(PlusMinus,'\\pm ','&plusmn;');
LatexCmds.mp = LatexCmds.mnplus = LatexCmds.minusplus =
  bind(PlusMinus,'\\mp ','&#8723;');

CharCmds['*'] = LatexCmds.sdot = LatexCmds.cdot =
  bind(BinaryOperator, '\\cdot ', '&middot;', '*');
//semantically should be &sdot;, but &middot; looks better

var Inequality = P(BinaryOperator, function(_, super_) {
  _.init = function(data, strict) {
    this.data = data;
    this.strict = strict;
    var strictness = (strict ? 'Strict' : '');
    super_.init.call(this, data['ctrlSeq'+strictness], data['html'+strictness],
                     data['text'+strictness]);
  };
  _.swap = function(strict) {
    this.strict = strict;
    var strictness = (strict ? 'Strict' : '');
    this.ctrlSeq = this.data['ctrlSeq'+strictness];
    this.jQ.html(this.data['html'+strictness]);
    this.textTemplate = [ this.data['text'+strictness] ];
  };
  _.deleteTowards = function(dir, cursor) {
    if (dir === L && !this.strict) {
      this.swap(true);
      this.bubble('reflow');
      return;
    }
    super_.deleteTowards.apply(this, arguments);
  };
});

var less = { ctrlSeq: '\\le ', html: '&le;', text: '\u2264',
             ctrlSeqStrict: '<', htmlStrict: '&lt;', textStrict: '<' };
var greater = { ctrlSeq: '\\ge ', html: '&ge;', text: '\u2265',
                ctrlSeqStrict: '>', htmlStrict: '&gt;', textStrict: '>' };

LatexCmds['<'] = LatexCmds.lt = bind(Inequality, less, true);
LatexCmds['>'] = LatexCmds.gt = bind(Inequality, greater, true);
LatexCmds['\u2264'] = LatexCmds.le = LatexCmds.leq = bind(Inequality, less, false);
LatexCmds['\u2265'] = LatexCmds.ge = LatexCmds.geq = bind(Inequality, greater, false);

var Equality = P(BinaryOperator, function(_, super_) {
  _.init = function() {
    super_.init.call(this, '=', '=');
  };
  _.createLeftOf = function(cursor) {
    if (cursor[L] instanceof Inequality && cursor[L].strict) {
      cursor[L].swap(false);
      cursor[L].bubble('reflow');
      return;
    }
    super_.createLeftOf.apply(this, arguments);
  };
});
LatexCmds['='] = Equality;

LatexCmds['\u00d7'] = LatexCmds.times = bind(BinaryOperator, '\\times ', '&times;', '[x]');

LatexCmds['\u00f7'] = LatexCmds.div = LatexCmds.divide = LatexCmds.divides =
  bind(BinaryOperator,'\\div ','&divide;', '[/]');

CharCmds['~'] = LatexCmds.sim = bind(BinaryOperator, '\\sim ', '~', '~');
var MQ1 = getInterface(1);
for (var key in MQ1) (function(key, val) {
  if (typeof val === 'function') {
    MathQuill[key] = function() {
      insistOnInterVer();
      return val.apply(this, arguments);
    };
    MathQuill[key].prototype = val.prototype;
  }
  else MathQuill[key] = val;
}(key, MQ1[key]));

}());
/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});

/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function l(t){var n=this,i=!1;return e(this).one(c.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||c.triggerTransitionEnd(n)}),t),this}var c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&c.isElement(s)?"element":null===(a=s)||"undefined"==typeof a?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};c.jQueryDetection(),e.fn.emulateTransitionEnd=l,e.event.special[c.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var h="alert",u=e.fn[h],d=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=c.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=c.getTransitionDurationFromElement(t);e(t).one(c.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[h]=d._jQueryInterface,e.fn[h].Constructor=d,e.fn[h].noConflict=function(){return e.fn[h]=u,d._jQueryInterface};var f=e.fn.button,g=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"LABEL"===i.tagName&&o&&"checkbox"===o.type&&t.preventDefault(),g._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=g._jQueryInterface,e.fn.button.Constructor=g,e.fn.button.noConflict=function(){return e.fn.button=f,g._jQueryInterface};var m="carousel",p=".bs.carousel",_=e.fn[m],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},b={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},y={TOUCH:"touch",PEN:"pen"},E=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(p),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=a(a({},v),t),c.typeCheckConfig(m,t,b),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,a=this._element.querySelector(".active.carousel-item"),l=this._getItemIndex(a),h=n||a&&this._getItemByDirection(t,a),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&a&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:l,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),c.reflow(h),e(a).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=c.getTransitionDurationFromElement(a);e(a).one(c.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(a).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(a).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=a(a({},v),e(this).data());"object"==typeof n&&(o=a(a({},o),n));var s="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if("undefined"==typeof i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=c.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var s=a(a({},e(o).data()),e(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),t._jQueryInterface.call(e(o),s),r&&e(o).data("bs.carousel").to(r),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return v}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",E._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);E._jQueryInterface.call(o,o.data())}})),e.fn[m]=E._jQueryInterface,e.fn[m].Constructor=E,e.fn[m].noConflict=function(){return e.fn[m]=_,E._jQueryInterface};var w="collapse",T=e.fn[w],C={toggle:!0,parent:""},S={toggle:"boolean",parent:"(string|element)"},D=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=c.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=c.getSelectorFromElement(r);if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=a(a({},C),t)).toggle=Boolean(t.toggle),c.typeCheckConfig(w,t,S),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;c.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=c.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),s=a(a(a({},C),i.data()),"object"==typeof n&&n?n:{});if(!o&&s.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return C}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=c.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();D._jQueryInterface.call(t,i)}))})),e.fn[w]=D._jQueryInterface,e.fn[w].Constructor=D,e.fn[w].noConflict=function(){return e.fn[w]=T,D._jQueryInterface};var k="dropdown",N=e.fn[k],A=new RegExp("38|40|27"),I={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},j=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:c.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=a(a(a({},this.constructor.Default),e(this._element).data()),t),c.typeCheckConfig(k,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a(a({},t),this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=c.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!A.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return I}},{key:"DefaultType",get:function(){return O}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",j._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),j._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[k]=j._jQueryInterface,e.fn[k].Constructor=j,e.fn[k].noConflict=function(){return e.fn[k]=N,j._jQueryInterface};var P=e.fn.modal,x={backdrop:!0,keyboard:!0,focus:!0,show:!0},L={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},R=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=a(a({},x),t),c.typeCheckConfig("modal",t,L),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add("modal-static");var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t._element.classList.remove("modal-static")})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&c.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var a=c.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(c.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&c.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),s=a(a(a({},x),e(this).data()),"object"==typeof n&&n?n:{});if(o||(o=new t(this,s),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else s.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return x}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=c.getSelectorFromElement(this);o&&(n=document.querySelector(o));var s=e(n).data("bs.modal")?"toggle":a(a({},e(n).data()),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));R._jQueryInterface.call(e(n),s,this)})),e.fn.modal=R._jQueryInterface,e.fn.modal.Constructor=R,e.fn.modal.noConflict=function(){return e.fn.modal=P,R._jQueryInterface};var q=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],F={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,B=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===q.indexOf(n)||Boolean(t.nodeValue.match(Q)||t.nodeValue.match(B));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var U="tooltip",M=e.fn[U],W=new RegExp("(^|\\s)bs-tooltip\\S+","g"),V=["sanitize","whiteList","sanitizeFn"],z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},K={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},X={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:F,popperConfig:null},Y={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},$=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=c.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=c.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=c.getTransitionDurationFromElement(this.tip);e(this.tip).one(c.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=c.getTransitionDurationFromElement(i);e(i).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=H(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return a(a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return K[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a(a({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==V.indexOf(t)&&delete n[t]})),"number"==typeof(t=a(a(a({},this.constructor.Default),n),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c.typeCheckConfig(U,t,this.constructor.DefaultType),t.sanitize&&(t.template=H(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(W);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return X}},{key:"NAME",get:function(){return U}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Y}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return z}}]),t}();e.fn[U]=$._jQueryInterface,e.fn[U].Constructor=$,e.fn[U].noConflict=function(){return e.fn[U]=M,$._jQueryInterface};var J="popover",G=e.fn[J],Z=new RegExp("(^|\\s)bs-popover\\S+","g"),tt=a(a({},$.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),et=a(a({},$.DefaultType),{},{content:"(string|element|function)"}),nt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},it=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Z);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return tt}},{key:"NAME",get:function(){return J}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return nt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return et}}]),s}($);e.fn[J]=it._jQueryInterface,e.fn[J].Constructor=it,e.fn[J].noConflict=function(){return e.fn[J]=G,it._jQueryInterface};var ot="scrollspy",st=e.fn[ot],rt={offset:10,method:"auto",target:""},at={offset:"number",method:"string",target:"(string|element)"},lt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=c.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=a(a({},rt),"object"==typeof t&&t?t:{})).target&&c.isElement(t.target)){var n=e(t.target).attr("id");n||(n=c.getUID(ot),e(t.target).attr("id",n)),t.target="#"+n}return c.typeCheckConfig(ot,t,at),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return rt}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);lt._jQueryInterface.call(i,i.data())}})),e.fn[ot]=lt._jQueryInterface,e.fn[ot].Constructor=lt,e.fn[ot].noConflict=function(){return e.fn[ot]=st,lt._jQueryInterface};var ct=e.fn.tab,ht=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=c.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var a=e.Event("hide.bs.tab",{relatedTarget:this._element}),l=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),a=function(){return o._transitionComplete(t,s,i)};if(s&&r){var l=c.getTransitionDurationFromElement(s);e(s).removeClass("show").one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),ht._jQueryInterface.call(e(this),"show")})),e.fn.tab=ht._jQueryInterface,e.fn.tab.Constructor=ht,e.fn.tab.noConflict=function(){return e.fn.tab=ct,ht._jQueryInterface};var ut=e.fn.toast,dt={animation:"boolean",autohide:"boolean",delay:"number"},ft={animation:!0,autohide:!0,delay:500},gt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),c.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=a(a(a({},ft),e(this._element).data()),"object"==typeof t&&t?t:{}),c.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"DefaultType",get:function(){return dt}},{key:"Default",get:function(){return ft}}]),t}();e.fn.toast=gt._jQueryInterface,e.fn.toast.Constructor=gt,e.fn.toast.noConflict=function(){return e.fn.toast=ut,gt._jQueryInterface},t.Alert=d,t.Button=g,t.Carousel=E,t.Collapse=D,t.Dropdown=j,t.Modal=R,t.Popover=it,t.Scrollspy=lt,t.Tab=ht,t.Toast=gt,t.Tooltip=$,t.Util=c,Object.defineProperty(t,"__esModule",{value:!0})}));

/*! Pickr 1.7.0 MIT | https://github.com/Simonwep/pickr */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Pickr=e():t.Pickr=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=145)}([function(t,e,r){var n=r(3),o=r(15).f,i=r(12),a=r(17),c=r(47),u=r(81),s=r(85);t.exports=function(t,e){var r,l,f,p,v,h=t.target,d=t.global,g=t.stat;if(r=d?n:g?n[h]||c(h,{}):(n[h]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(d?l:h+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t)}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(3),o=r(48),i=r(4),a=r(49),c=r(54),u=r(86),s=o("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||a;t.exports=function(t){return i(s,t)||(c&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r(111))},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(1);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(18),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(5),o=r(77),i=r(6),a=r(22),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(21),o=r(11);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n=r(5),o=r(9),i=r(20);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(11);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(5),o=r(1),i=r(4),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var r=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return c[t]=!!r&&!o((function(){if(s&&!n)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,l,f)}))}},function(t,e,r){var n=r(5),o=r(46),i=r(20),a=r(10),c=r(22),u=r(4),s=r(77),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=c(e,!0),s)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(3),o=r(12),i=r(4),a=r(47),c=r(79),u=r(31),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,c){var u=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),l(r).source=f.join("string"==typeof e?e:"")),t!==n?(u?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=r:o(t,e,r)):s?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(89),o=r(21),i=r(13),a=r(8),c=r(57),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,l=4==t,f=6==t,p=5==t||f;return function(v,h,d,g){for(var y,b,m=i(v),x=o(m),S=n(h,d,3),w=a(x.length),O=0,_=g||c,A=e?_(v,w):r?_(v,0):void 0;w>O;O++)if((p||O in x)&&(b=S(y=x[O],O,m),t))if(e)A[O]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:u.call(A,y)}else if(l)return!1;return f?-1:s||l?l:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(1),o=r(16),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,r){var n=r(7);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=!1},function(t,e,r){"use strict";var n=r(22),o=r(9),i=r(20);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},function(t,e,r){var n=r(1),o=r(2),i=r(90),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,r){"use strict";var n=r(1);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e){t.exports={}},function(t,e,r){var n=r(64),o=r(17),i=r(130);n||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,r){"use strict";var n=r(0),o=r(43);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,r){"use strict";var n=r(17),o=r(6),i=r(1),a=r(101),c=RegExp.prototype,u=c.toString,s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(s||l)&&n(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in c)?a.call(t):r)}),{unsafe:!0})},function(t,e,r){var n,o,i,a=r(112),c=r(3),u=r(7),s=r(12),l=r(4),f=r(32),p=r(33),v=c.WeakMap;if(a){var h=new v,d=h.get,g=h.has,y=h.set;n=function(t,e){return y.call(h,t,e),e},o=function(t){return d.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var b=f("state");p[b]=!0,n=function(t,e){return s(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(48),o=r(49),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e,r){var n=r(83),o=r(3),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,r){var n=r(84),o=r(52).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){var n=r(16);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n,o=r(6),i=r(113),a=r(52),c=r(33),u=r(114),s=r(78),l=r(32),f=l("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},h=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;h=n?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;)delete h.prototype[a[r]];return h()};c[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=h(),void 0===e?r:i(r,e)}},function(t,e,r){var n=r(84),o=r(52);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(0),o=r(93);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,r){"use strict";var n=r(10),o=r(62),i=r(27),a=r(31),c=r(95),u=a.set,s=a.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:n(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,r){"use strict";var n=r(5),o=r(3),i=r(85),a=r(17),c=r(4),u=r(16),s=r(128),l=r(22),f=r(1),p=r(37),v=r(35).f,h=r(15).f,d=r(9).f,g=r(99).trim,y=o.Number,b=y.prototype,m="Number"==u(p(b)),x=function(t){var e,r,n,o,i,a,c,u,s=l(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=g(s)).charCodeAt(0))||45===e){if(88===(r=s.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(a=(i=s.slice(2)).length,c=0;c<a;c++)if((u=i.charCodeAt(c))<48||u>o)return NaN;return parseInt(i,n)}return+s};if(i("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var S,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(m?f((function(){b.valueOf.call(r)})):"Number"!=u(r))?s(new y(x(e)),r,w):x(e)},O=n?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;O.length>_;_++)c(y,S=O[_])&&!c(w,S)&&d(w,S,h(y,S));w.prototype=b,b.constructor=w,a(o,"Number",w)}},function(t,e,r){var n=r(0),o=r(13),i=r(38);n({target:"Object",stat:!0,forced:r(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,r){"use strict";var n,o,i=r(101),a=r(131),c=RegExp.prototype.exec,u=String.prototype.replace,s=c,l=(n=/a/,o=/b*/g,c.call(n,"a"),c.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(l||p||f)&&(s=function(t){var e,r,n,o,a=this,s=f&&a.sticky,v=i.call(a),h=a.source,d=0,g=t;return s&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),g=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,d++),r=new RegExp("^(?:"+h+")",v)),p&&(r=new RegExp("^"+h+"$(?!\\s)",v)),l&&(e=a.lastIndex),n=c.call(s?r:a,g),s?n?(n.input=n.input.slice(d),n[0]=n[0].slice(d),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:l&&n&&(a.lastIndex=a.global?n.index+n[0].length:e),p&&n&&n.length>1&&u.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=s},function(t,e,r){var n=r(3),o=r(106),i=r(93),a=r(12);for(var c in o){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,r){"use strict";var n=r(0),o=r(3),i=r(34),a=r(23),c=r(5),u=r(54),s=r(86),l=r(1),f=r(4),p=r(36),v=r(7),h=r(6),d=r(13),g=r(10),y=r(22),b=r(20),m=r(37),x=r(38),S=r(35),w=r(115),O=r(53),_=r(15),A=r(9),E=r(46),j=r(12),C=r(17),P=r(48),k=r(32),I=r(33),R=r(49),T=r(2),L=r(87),N=r(88),F=r(55),M=r(31),D=r(19).forEach,B=k("hidden"),U=T("toPrimitive"),H=M.set,$=M.getterFor("Symbol"),V=Object.prototype,G=o.Symbol,W=i("JSON","stringify"),z=_.f,X=A.f,Y=w.f,K=E.f,q=P("symbols"),J=P("op-symbols"),Q=P("string-to-symbol-registry"),Z=P("symbol-to-string-registry"),tt=P("wks"),et=o.QObject,rt=!et||!et.prototype||!et.prototype.findChild,nt=c&&l((function(){return 7!=m(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(V,e);n&&delete V[e],X(t,e,r),n&&t!==V&&X(V,e,n)}:X,ot=function(t,e){var r=q[t]=m(G.prototype);return H(r,{type:"Symbol",tag:t,description:e}),c||(r.description=e),r},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},at=function(t,e,r){t===V&&at(J,e,r),h(t);var n=y(e,!0);return h(r),f(q,n)?(r.enumerable?(f(t,B)&&t[B][n]&&(t[B][n]=!1),r=m(r,{enumerable:b(0,!1)})):(f(t,B)||X(t,B,b(1,{})),t[B][n]=!0),nt(t,n,r)):X(t,n,r)},ct=function(t,e){h(t);var r=g(e),n=x(r).concat(ft(r));return D(n,(function(e){c&&!ut.call(r,e)||at(t,e,r[e])})),t},ut=function(t){var e=y(t,!0),r=K.call(this,e);return!(this===V&&f(q,e)&&!f(J,e))&&(!(r||!f(this,e)||!f(q,e)||f(this,B)&&this[B][e])||r)},st=function(t,e){var r=g(t),n=y(e,!0);if(r!==V||!f(q,n)||f(J,n)){var o=z(r,n);return!o||!f(q,n)||f(r,B)&&r[B][n]||(o.enumerable=!0),o}},lt=function(t){var e=Y(g(t)),r=[];return D(e,(function(t){f(q,t)||f(I,t)||r.push(t)})),r},ft=function(t){var e=t===V,r=Y(e?J:g(t)),n=[];return D(r,(function(t){!f(q,t)||e&&!f(V,t)||n.push(q[t])})),n};(u||(C((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),r=function(t){this===V&&r.call(J,t),f(this,B)&&f(this[B],e)&&(this[B][e]=!1),nt(this,e,b(1,t))};return c&&rt&&nt(V,e,{configurable:!0,set:r}),ot(e,t)}).prototype,"toString",(function(){return $(this).tag})),C(G,"withoutSetter",(function(t){return ot(R(t),t)})),E.f=ut,A.f=at,_.f=st,S.f=w.f=lt,O.f=ft,L.f=function(t){return ot(T(t),t)},c&&(X(G.prototype,"description",{configurable:!0,get:function(){return $(this).description}}),a||C(V,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:G}),D(x(tt),(function(t){N(t)})),n({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=String(t);if(f(Q,e))return Q[e];var r=G(e);return Q[e]=r,Z[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!c},{create:function(t,e){return void 0===e?m(t):ct(m(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:st}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),n({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(d(t))}}),W)&&n({target:"JSON",stat:!0,forced:!u||l((function(){var t=G();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(v(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),o[1]=e,W.apply(null,o)}});G.prototype[U]||j(G.prototype,U,G.prototype.valueOf),F(G,"Symbol"),I[B]=!0},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(3),o=r(12);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(23),o=r(80);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(10),o=r(8),i=r(51),a=function(t){return function(e,r,a){var c,u=n(e),s=o(u.length),l=i(a,s);if(t&&r!=r){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,r){var n=r(18),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(1);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,r){var n=r(9).f,o=r(4),i=r(2)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,r){var n=r(7),o=r(36),i=r(2)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},function(t,e,r){"use strict";var n=r(0),o=r(5),i=r(3),a=r(4),c=r(7),u=r(9).f,s=r(81),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};s(p,l);var v=p.prototype=l.prototype;v.constructor=p;var h=v.toString,d="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(f,t))return"";var r=d?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},function(t,e,r){r(88)("iterator")},function(t,e,r){"use strict";var n=r(0),o=r(1),i=r(36),a=r(7),c=r(13),u=r(8),s=r(24),l=r(57),f=r(25),p=r(2),v=r(90),h=p("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=f("concat"),y=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!d||!g},{concat:function(t){var e,r,n,o,i,a=c(this),f=l(a,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?a:arguments[e],y(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&s(f,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},function(t,e,r){"use strict";var n=r(0),o=r(19).filter,i=r(25),a=r(14),c=i("filter"),u=a("filter");n({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){var n=r(2),o=r(37),i=r(9),a=n("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},function(t,e,r){var n=r(0),o=r(116);n({target:"Array",stat:!0,forced:!r(120)((function(t){Array.from(t)}))},{from:o})},function(t,e,r){var n={};n[r(2)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,e,r){"use strict";var n=r(0),o=r(7),i=r(36),a=r(51),c=r(8),u=r(10),s=r(24),l=r(2),f=r(25),p=r(14),v=f("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),d=l("species"),g=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!v||!h},{slice:function(t,e){var r,n,l,f=u(this),p=c(f.length),v=a(t,p),h=a(void 0===e?p:e,p);if(i(f)&&("function"!=typeof(r=f.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[d])&&(r=void 0):r=void 0,r===Array||void 0===r))return g.call(f,v,h);for(n=new(void 0===r?Array:r)(y(h-v,0)),l=0;v<h;v++,l++)v in f&&s(n,l,f[v]);return n.length=l,n}})},function(t,e,r){var n=r(5),o=r(9).f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/;n&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},function(t,e,r){var n=r(0),o=r(129);n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,e,r){var n=r(0),o=r(1),i=r(10),a=r(15).f,c=r(5),u=o((function(){a(1)}));n({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},function(t,e,r){var n=r(0),o=r(5),i=r(82),a=r(10),c=r(15),u=r(24);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,r,n=a(t),o=c.f,s=i(n),l={},f=0;s.length>f;)void 0!==(r=o(n,e=s[f++]))&&u(l,e,r);return l}})},function(t,e,r){"use strict";var n=r(102).charAt,o=r(31),i=r(95),a=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,r){"use strict";r(29);var n=r(17),o=r(1),i=r(2),a=r(43),c=r(12),u=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),v=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var h=i(t),d=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=d&&!o((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!d||!g||"replace"===t&&(!s||!l||p)||"split"===t&&!v){var y=/./[h],b=r(h,""[t],(function(t,e,r,n,o){return e.exec===a?d&&!o?{done:!0,value:y.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],x=b[1];n(String.prototype,t,m),n(RegExp.prototype,h,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&c(RegExp.prototype[h],"sham",!0)}},function(t,e,r){"use strict";var n=r(102).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},function(t,e,r){var n=r(16),o=r(43);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var i=r.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,r){"use strict";var n=r(18),o=r(11);t.exports="".repeat||function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},function(t,e,r){var n=r(3),o=r(106),i=r(40),a=r(12),c=r(2),u=c("iterator"),s=c("toStringTag"),l=i.values;for(var f in o){var p=n[f],v=p&&p.prototype;if(v){if(v[u]!==l)try{a(v,u,l)}catch(t){v[u]=l}if(v[s]||a(v,s,f),o[f])for(var h in i)if(v[h]!==i[h])try{a(v,h,i[h])}catch(t){v[h]=i[h]}}}},function(t,e,r){"use strict";var n=r(71),o=r(105),i=r(6),a=r(11),c=r(138),u=r(72),s=r(8),l=r(73),f=r(43),p=r(1),v=[].push,h=Math.min,d=!p((function(){return!RegExp(4294967295,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),i=void 0===r?4294967295:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,i);for(var c,u,s,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=new RegExp(t.source,p+"g");(c=f.call(d,n))&&!((u=d.lastIndex)>h&&(l.push(n.slice(h,c.index)),c.length>1&&c.index<n.length&&v.apply(l,c.slice(1)),s=c[0].length,h=u,l.length>=i));)d.lastIndex===c.index&&d.lastIndex++;return h===n.length?!s&&d.test("")||l.push(""):l.push(n.slice(h)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var a=r(n,t,this,o,n!==e);if(a.done)return a.value;var f=i(t),p=String(this),v=c(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(d?"y":"g"),b=new v(d?f:"^(?:"+f.source+")",y),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===p.length)return null===l(b,p)?[p]:[];for(var x=0,S=0,w=[];S<p.length;){b.lastIndex=d?S:0;var O,_=l(b,d?p:p.slice(S));if(null===_||(O=h(s(b.lastIndex+(d?0:S)),p.length))===x)S=u(p,S,g);else{if(w.push(p.slice(x,S)),w.length===m)return w;for(var A=1;A<=_.length-1;A++)if(w.push(_[A]),w.length===m)return w;S=x=O}}return w.push(p.slice(x)),w}]}),!d)},function(t,e,r){var n=r(5),o=r(1),i=r(78);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(3),o=r(7),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,r){var n=r(80),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n=r(3),o=r(47),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n=r(4),o=r(82),i=r(15),a=r(9);t.exports=function(t,e){for(var r=o(e),c=a.f,u=i.f,s=0;s<r.length;s++){var l=r[s];n(t,l)||c(t,l,u(e,l))}}},function(t,e,r){var n=r(34),o=r(35),i=r(53),a=r(6);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(3);t.exports=n},function(t,e,r){var n=r(4),o=r(10),i=r(50).indexOf,a=r(33);t.exports=function(t,e){var r,c=o(t),u=0,s=[];for(r in c)!n(a,r)&&n(c,r)&&s.push(r);for(;e.length>u;)n(c,r=e[u++])&&(~i(s,r)||s.push(r));return s}},function(t,e,r){var n=r(1),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,r){var n=r(54);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,r){var n=r(2);e.f=n},function(t,e,r){var n=r(83),o=r(4),i=r(87),a=r(9).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},function(t,e,r){var n=r(56);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n,o,i=r(3),a=r(91),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,e,r){var n=r(34);t.exports=n("navigator","userAgent")||""},function(t,e,r){"use strict";var n=r(0),o=r(19).find,i=r(62),a=r(14),c=!0,u=a("find");"find"in[]&&Array(1).find((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,e,r){"use strict";var n=r(19).forEach,o=r(26),i=r(14),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,r){var n=r(64),o=r(16),i=r(2)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},function(t,e,r){"use strict";var n=r(0),o=r(123),i=r(97),a=r(98),c=r(55),u=r(12),s=r(17),l=r(2),f=r(23),p=r(27),v=r(96),h=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,g=l("iterator"),y=function(){return this};t.exports=function(t,e,r,l,v,b,m){o(r,e,l);var x,S,w,O=function(t){if(t===v&&C)return C;if(!d&&t in E)return E[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},_=e+" Iterator",A=!1,E=t.prototype,j=E[g]||E["@@iterator"]||v&&E[v],C=!d&&j||O(v),P="Array"==e&&E.entries||j;if(P&&(x=i(P.call(new t)),h!==Object.prototype&&x.next&&(f||i(x)===h||(a?a(x,h):"function"!=typeof x[g]&&u(x,g,y)),c(x,_,!0,!0),f&&(p[_]=y))),"values"==v&&j&&"values"!==j.name&&(A=!0,C=function(){return j.call(this)}),f&&!m||E[g]===C||u(E,g,C),p[e]=C,v)if(S={values:O("values"),keys:b?C:O("keys"),entries:O("entries")},m)for(w in S)(d||A||!(w in E))&&s(E,w,S[w]);else n({target:e,proto:!0,forced:d||A},S);return S}},function(t,e,r){"use strict";var n,o,i,a=r(97),c=r(12),u=r(4),s=r(2),l=r(23),f=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(n=o):p=!0),null==n&&(n={}),l||u(n,f)||c(n,f,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},function(t,e,r){var n=r(4),o=r(13),i=r(32),a=r(124),c=i("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,r){var n=r(6),o=r(125);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,e,r){var n=r(11),o="["+r(100)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,r){"use strict";var n=r(6);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,r){var n=r(18),o=r(11),i=function(t){return function(e,r){var i,a,c=String(o(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,r){"use strict";var n=r(71),o=r(6),i=r(8),a=r(11),c=r(72),u=r(73);n("match",1,(function(t,e,r){return[function(e){var r=a(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var a=o(t),s=String(this);if(!a.global)return u(a,s);var l=a.unicode;a.lastIndex=0;for(var f,p=[],v=0;null!==(f=u(a,s));){var h=String(f[0]);p[v]=h,""===h&&(a.lastIndex=c(s,i(a.lastIndex),l)),v++}return 0===v?null:p}]}))},function(t,e,r){"use strict";var n,o=r(0),i=r(15).f,a=r(8),c=r(133),u=r(11),s=r(134),l=r(23),f="".startsWith,p=Math.min,v=s("startsWith");o({target:"String",proto:!0,forced:!!(l||v||(n=i(String.prototype,"startsWith"),!n||n.writable))&&!v},{startsWith:function(t){var e=String(u(this));c(t);var r=a(p(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return f?f.call(e,n,r):e.slice(r,r+n.length)===n}})},function(t,e,r){var n=r(7),o=r(16),i=r(2)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){"use strict";var n=r(0),o=r(21),i=r(10),a=r(26),c=[].join,u=o!=Object,s=a("join",",");n({target:"Array",proto:!0,forced:u||!s},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},function(t,e,r){"use strict";var n=r(0),o=r(19).map,i=r(25),a=r(14),c=i("map"),u=a("map");n({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){"use strict";var n=r(0),o=r(141).start;n({target:"String",proto:!0,forced:r(142)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t){t.exports=JSON.parse('{"a":"1.7.0"}')},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(3),o=r(79),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,r){var n=r(5),o=r(9),i=r(6),a=r(38);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),c=n.length,u=0;c>u;)o.f(t,r=n[u++],e[r]);return t}},function(t,e,r){var n=r(34);t.exports=n("document","documentElement")},function(t,e,r){var n=r(10),o=r(35).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(n(t))}},function(t,e,r){"use strict";var n=r(89),o=r(13),i=r(117),a=r(118),c=r(8),u=r(24),s=r(119);t.exports=function(t){var e,r,l,f,p,v,h=o(t),d="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,b=void 0!==y,m=s(h),x=0;if(b&&(y=n(y,g>2?arguments[2]:void 0,2)),null==m||d==Array&&a(m))for(r=new d(e=c(h.length));e>x;x++)v=b?y(h[x],x):h[x],u(r,x,v);else for(p=(f=m.call(h)).next,r=new d;!(l=p.call(f)).done;x++)v=b?i(f,y,[l.value,x],!0):l.value,u(r,x,v);return r.length=x,r}},function(t,e,r){var n=r(6);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){var n=r(2),o=r(27),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},function(t,e,r){var n=r(94),o=r(27),i=r(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){var n=r(2)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(0),o=r(50).includes,i=r(62);n({target:"Array",proto:!0,forced:!r(14)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,e,r){"use strict";var n=r(0),o=r(50).indexOf,i=r(26),a=r(14),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:u||!s||!l},{indexOf:function(t){return u?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){"use strict";var n=r(96).IteratorPrototype,o=r(37),i=r(20),a=r(55),c=r(27),u=function(){return this};t.exports=function(t,e,r){var s=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,s,!1,!0),c[s]=u,t}},function(t,e,r){var n=r(1);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,r){"use strict";var n=r(0),o=r(19).some,i=r(26),a=r(14),c=i("some"),u=a("some");n({target:"Array",proto:!0,forced:!c||!u},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){"use strict";var n=r(0),o=r(51),i=r(18),a=r(8),c=r(13),u=r(57),s=r(24),l=r(25),f=r(14),p=l("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,d=Math.min;n({target:"Array",proto:!0,forced:!p||!v},{splice:function(t,e){var r,n,l,f,p,v,g=c(this),y=a(g.length),b=o(t,y),m=arguments.length;if(0===m?r=n=0:1===m?(r=0,n=y-b):(r=m-2,n=d(h(i(e),0),y-b)),y+r-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=u(g,n),f=0;f<n;f++)(p=b+f)in g&&s(l,f,g[p]);if(l.length=n,r<n){for(f=b;f<y-n;f++)v=f+r,(p=f+n)in g?g[v]=g[p]:delete g[v];for(f=y;f>y-n+r;f--)delete g[f-1]}else if(r>n)for(f=y-n;f>b;f--)v=f+r-1,(p=f+n-1)in g?g[v]=g[p]:delete g[v];for(f=0;f<r;f++)g[f+b]=arguments[f+2];return g.length=y-n+r,l}})},function(t,e,r){var n=r(7),o=r(98);t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},function(t,e,r){"use strict";var n=r(5),o=r(1),i=r(38),a=r(53),c=r(46),u=r(13),s=r(21),l=Object.assign,f=Object.defineProperty;t.exports=!l||o((function(){if(n&&1!==l({b:1},l(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=l({},t)[r]||"abcdefghijklmnopqrst"!=i(l({},e)).join("")}))?function(t,e){for(var r=u(t),o=arguments.length,l=1,f=a.f,p=c.f;o>l;)for(var v,h=s(arguments[l++]),d=f?i(h).concat(f(h)):i(h),g=d.length,y=0;g>y;)v=d[y++],n&&!p.call(h,v)||(r[v]=h[v]);return r}:l},function(t,e,r){"use strict";var n=r(64),o=r(94);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,r){"use strict";var n=r(1);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,r){r(0)({target:"String",proto:!0},{repeat:r(74)})},function(t,e,r){var n=r(105);t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,r){var n=r(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},function(t,e,r){"use strict";var n=r(0),o=r(136).left,i=r(26),a=r(14),c=i("reduce"),u=a("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!u},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){var n=r(56),o=r(13),i=r(21),a=r(8),c=function(t){return function(e,r,c,u){n(r);var s=o(e),l=i(s),f=a(s.length),p=t?f-1:0,v=t?-1:1;if(c<2)for(;;){if(p in l){u=l[p],p+=v;break}if(p+=v,t?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:f>p;p+=v)p in l&&(u=r(u,l[p],p,s));return u}};t.exports={left:c(!1),right:c(!0)}},function(t,e,r){"use strict";var n=r(71),o=r(6),i=r(13),a=r(8),c=r(18),u=r(11),s=r(72),l=r(73),f=Math.max,p=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g;n("replace",2,(function(t,e,r,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=n.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(r,n){var o=u(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!g&&y||"string"==typeof n&&-1===n.indexOf(b)){var i=r(e,t,this,n);if(i.done)return i.value}var u=o(t),v=String(this),h="function"==typeof n;h||(n=String(n));var d=u.global;if(d){var x=u.unicode;u.lastIndex=0}for(var S=[];;){var w=l(u,v);if(null===w)break;if(S.push(w),!d)break;""===String(w[0])&&(u.lastIndex=s(v,a(u.lastIndex),x))}for(var O,_="",A=0,E=0;E<S.length;E++){w=S[E];for(var j=String(w[0]),C=f(p(c(w.index),v.length),0),P=[],k=1;k<w.length;k++)P.push(void 0===(O=w[k])?O:String(O));var I=w.groups;if(h){var R=[j].concat(P,C,v);void 0!==I&&R.push(I);var T=String(n.apply(void 0,R))}else T=m(j,v,C,P,I,n);C>=A&&(_+=v.slice(A,C)+T,A=C+j.length)}return _+v.slice(A)}];function m(t,r,n,o,a,c){var u=n+t.length,s=o.length,l=d;return void 0!==a&&(a=i(a),l=h),e.call(c,l,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>s){var f=v(l/10);return 0===f?e:f<=s?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):e}c=o[l-1]}return void 0===c?"":c}))}}))},function(t,e,r){var n=r(6),o=r(56),i=r(2)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},function(t,e,r){"use strict";var n=r(0),o=r(99).trim;n({target:"String",proto:!0,forced:r(140)("trim")},{trim:function(){return o(this)}})},function(t,e,r){var n=r(1),o=r(100);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,e,r){var n=r(8),o=r(74),i=r(11),a=Math.ceil,c=function(t){return function(e,r,c){var u,s,l=String(i(e)),f=l.length,p=void 0===c?" ":String(c),v=n(r);return v<=f||""==p?l:(u=v-f,(s=o.call(p,a(u/p.length))).length>u&&(s=s.slice(0,u)),t?l+s:s+l)}};t.exports={start:c(!1),end:c(!0)}},function(t,e,r){var n=r(91);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},function(t,e,r){"use strict";var n=r(0),o=r(18),i=r(144),a=r(74),c=r(1),u=1..toFixed,s=Math.floor,l=function(t,e,r){return 0===e?r:e%2==1?l(t,e-1,r*t):l(t*t,e/2,r)};n({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}))},{toFixed:function(t){var e,r,n,c,u=i(this),f=o(t),p=[0,0,0,0,0,0],v="",h="0",d=function(t,e){for(var r=-1,n=e;++r<6;)n+=t*p[r],p[r]=n%1e7,n=s(n/1e7)},g=function(t){for(var e=6,r=0;--e>=0;)r+=p[e],p[e]=s(r/t),r=r%t*1e7},y=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==p[t]){var r=String(p[t]);e=""===e?r:e+a.call("0",7-r.length)+r}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(u*l(2,69,1))-69)<0?u*l(2,-e,1):u/l(2,e,1),r*=4503599627370496,(e=52-e)>0){for(d(0,r),n=f;n>=7;)d(1e7,0),n-=7;for(d(l(10,n,1),0),n=e-1;n>=23;)g(1<<23),n-=23;g(1<<n),d(1,1),g(2),h=y()}else d(0,r),d(1<<-e,0),h=y()+a.call("0",f);return h=f>0?v+((c=h.length)<=f?"0."+a.call("0",f-c)+h:h.slice(0,c-f)+"."+h.slice(c-f)):v+h}})},function(t,e,r){var n=r(16);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"on",(function(){return l})),r.d(n,"off",(function(){return f})),r.d(n,"createElementFromString",(function(){return p})),r.d(n,"createFromTemplate",(function(){return v})),r.d(n,"eventPath",(function(){return h})),r.d(n,"resolveElement",(function(){return d})),r.d(n,"adjustableInputNumbers",(function(){return g}));r(45),r(58),r(59),r(60),r(61),r(92),r(39),r(63),r(121),r(122),r(40),r(65),r(126),r(127),r(66),r(41),r(67),r(68),r(69),r(42),r(28),r(29),r(30),r(70),r(103),r(132),r(104),r(44),r(75),r(135),r(137),r(76),r(139);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){var e=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(r)||(r=[r]);for(var a,u=c(e);!(a=u()).done;)for(var s,l=a.value,f=c(r);!(s=f()).done;){var p=s.value;l[t](p,n,i({capture:!1},o))}return Array.prototype.slice.call(arguments,1)}var l=s.bind(null,"addEventListener"),f=s.bind(null,"removeEventListener");function p(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function v(t){var e=function(t,e){var r=t.getAttribute(e);return t.removeAttribute(e),r};return function t(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e(r,":obj"),i=e(r,":ref"),a=o?n[o]={}:n;i&&(n[i]=r);for(var c=0,u=Array.from(r.children);c<u.length;c++){var s=u[c],l=e(s,":arr"),f=t(s,l?{}:a);l&&(a[l]||(a[l]=[])).push(Object.keys(f).length?f:s)}return n}(p(t))}function h(t){var e=t.path||t.composedPath&&t.composedPath();if(e)return e;var r=t.target.parentElement;for(e=[t.target,r];r=r.parentElement;)e.push(r);return e.push(document,window),e}function d(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((function(t,e,r,n){return t=t.querySelector(e),r<n.length-1?t.shadowRoot:t}),document):null}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};function r(r){var n=[.001,.01,.1][Number(r.shiftKey||2*r.ctrlKey)]*(r.deltaY<0?1:-1),o=0,i=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(function(t,r){return r<=i&&r+t.length>=i?(i=r,e(Number(t),n,o)):(o++,t)})),t.focus(),t.setSelectionRange(i,i),r.preventDefault(),t.dispatchEvent(new Event("input"))}l(t,"focus",(function(){return l(window,"wheel",r,{passive:!1})})),l(t,"blur",(function(){return f(window,"wheel",r)}))}var y=r(110),b=(r(107),r(108),r(109),Math.min),m=Math.max,x=Math.floor,S=Math.round;function w(t,e,r){e/=100,r/=100;var n=x(t=t/360*6),o=t-n,i=r*(1-e),a=r*(1-o*e),c=r*(1-(1-o)*e),u=n%6;return[255*[r,a,i,i,c,r][u],255*[c,r,r,a,i,i][u],255*[i,i,c,r,r,a][u]]}function O(t,e,r){return w(t,e,r).map((function(t){return S(t).toString(16).padStart(2,"0")}))}function _(t,e,r){var n=w(t,e,r),o=n[0]/255,i=n[1]/255,a=n[2]/255,c=b(1-o,1-i,1-a);return[100*(1===c?0:(1-o-c)/(1-c)),100*(1===c?0:(1-i-c)/(1-c)),100*(1===c?0:(1-a-c)/(1-c)),100*c]}function A(t,e,r){var n=(2-(e/=100))*(r/=100)/2;return 0!==n&&(e=1===n?0:n<.5?e*r/(2*n):e*r/(2-2*n)),[t,100*e,100*n]}function E(t,e,r){var n,o,i=b(t/=255,e/=255,r/=255),a=m(t,e,r),c=a-i;if(0===c)n=o=0;else{o=c/a;var u=((a-t)/6+c/2)/c,s=((a-e)/6+c/2)/c,l=((a-r)/6+c/2)/c;t===a?n=l-s:e===a?n=1/3+u-l:r===a&&(n=2/3+s-u),n<0?n+=1:n>1&&(n-=1)}return[360*n,100*o,100*a]}function j(t,e,r,n){e/=100,r/=100;var o=255*(1-b(1,(t/=100)*(1-(n/=100))+n)),i=255*(1-b(1,e*(1-n)+n)),a=255*(1-b(1,r*(1-n)+n));return[].concat(E(o,i,a))}function C(t,e,r){e/=100;var n=2*(e*=(r/=100)<.5?r:1-r)/(r+e)*100,o=100*(r+e);return[t,isNaN(n)?0:n,o]}function P(t){return E.apply(void 0,t.match(/.{2}/g).map((function(t){return parseInt(t,16)})))}function k(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";var e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;var e,r={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},n=function(t){return t.map((function(t){return/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0}))};t:for(var o in r)if(e=r[o].exec(t)){var i=function(t){return!!e[2]==("number"==typeof t)};switch(o){case"cmyk":var a=n(e),c=a[1],u=a[2],s=a[3],l=a[4];if(c>100||u>100||s>100||l>100)break t;return{values:j(c,u,s,l),type:o};case"rgba":var f=n(e),p=f[3],v=f[4],h=f[5],d=f[6];if(p>255||v>255||h>255||d<0||d>1||!i(d))break t;return{values:[].concat(E(p,v,h),[d]),a:d,type:o};case"hexa":var g=e[1];4!==g.length&&3!==g.length||(g=g.split("").map((function(t){return t+t})).join(""));var y=g.substring(0,6),b=g.substring(6);return b=b?parseInt(b,16)/255:void 0,{values:[].concat(P(y),[b]),a:b,type:o};case"hsla":var m=n(e),x=m[3],S=m[4],w=m[5],O=m[6];if(x>360||S>100||w>100||O<0||O>1||!i(O))break t;return{values:[].concat(C(x,S,w),[O]),a:O,type:o};case"hsva":var _=n(e),A=_[3],k=_[4],I=_[5],R=_[6];if(A>360||k>100||I>100||R<0||R>1||!i(R))break t;return{values:[A,k,I,R],a:R,type:o}}}return{values:null,type:null}}r(143);function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=function(t,e){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return e(~r?t.map((function(t){return Number(t.toFixed(r))})):t)}},i={h:t,s:e,v:r,a:n,toHSVA:function(){var t=[i.h,i.s,i.v,i.a];return t.toString=o(t,(function(t){return"hsva("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+i.a+")"})),t},toHSLA:function(){var t=[].concat(A(i.h,i.s,i.v),[i.a]);return t.toString=o(t,(function(t){return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+i.a+")"})),t},toRGBA:function(){var t=[].concat(w(i.h,i.s,i.v),[i.a]);return t.toString=o(t,(function(t){return"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+i.a+")"})),t},toCMYK:function(){var t=_(i.h,i.s,i.v);return t.toString=o(t,(function(t){return"cmyk("+t[0]+"%, "+t[1]+"%, "+t[2]+"%, "+t[3]+"%)"})),t},toHEXA:function(){var t=O(i.h,i.s,i.v),e=i.a>=1?"":Number((255*i.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=function(){return"#"+t.join("").toUpperCase()},t},clone:function(){return I(i.h,i.s,i.v,i.a)}};return i}var R=function(t){return Math.max(Math.min(t,1),0)};function T(t){var e={options:Object.assign({lock:null,onchange:function(){return 0},onstop:function(){return 0}},t),_keyboard:function(t){var r=e.options,n=t.type,o=t.key;if(document.activeElement===r.wrapper){var i=e.options.lock,a="ArrowUp"===o,c="ArrowRight"===o,u="ArrowDown"===o,s="ArrowLeft"===o;if("keydown"===n&&(a||c||u||s)){var l=0,f=0;"v"===i?l=a||c?1:-1:"h"===i?l=a||c?-1:1:(f=a?-1:u?1:0,l=s?-1:c?1:0),e.update(R(e.cache.x+.01*l),R(e.cache.y+.01*f)),t.preventDefault()}else o.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart:function(t){l(document,["mouseup","touchend","touchcancel"],e._tapstop),l(document,["mousemove","touchmove"],e._tapmove),t.cancelable&&t.preventDefault(),e._tapmove(t)},_tapmove:function(t){var r=e.options,n=e.cache,o=r.lock,i=r.element,a=r.wrapper.getBoundingClientRect(),c=0,u=0;if(t){var s=t&&t.touches&&t.touches[0];c=t?(s||t).clientX:0,u=t?(s||t).clientY:0,c<a.left?c=a.left:c>a.left+a.width&&(c=a.left+a.width),u<a.top?u=a.top:u>a.top+a.height&&(u=a.top+a.height),c-=a.left,u-=a.top}else n&&(c=n.x*a.width,u=n.y*a.height);"h"!==o&&(i.style.left="calc("+c/a.width*100+"% - "+i.offsetWidth/2+"px)"),"v"!==o&&(i.style.top="calc("+u/a.height*100+"% - "+i.offsetHeight/2+"px)"),e.cache={x:c/a.width,y:u/a.height};var l=R(c/a.width),f=R(u/a.height);switch(o){case"v":return r.onchange(l);case"h":return r.onchange(f);default:return r.onchange(l,f)}},_tapstop:function(){e.options.onstop(),f(document,["mouseup","touchend","touchcancel"],e._tapstop),f(document,["mousemove","touchmove"],e._tapmove)},trigger:function(){e._tapmove()},update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.options.wrapper.getBoundingClientRect(),o=n.left,i=n.top,a=n.width,c=n.height;"h"===e.options.lock&&(r=t),e._tapmove({clientX:o+a*t,clientY:i+c*r})},destroy:function(){var t=e.options,r=e._tapstart,n=e._keyboard;f(document,["keydown","keyup"],n),f([t.wrapper,t.element],"mousedown",r),f([t.wrapper,t.element],"touchstart",r,{passive:!1})}},r=e.options,n=e._tapstart,o=e._keyboard;return l([r.wrapper,r.element],"mousedown",n),l([r.wrapper,r.element],"touchstart",n,{passive:!1}),l(document,["keydown","keyup"],o),e}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({onchange:function(){return 0},className:"",elements:[]},t);var e=l(t.elements,"click",(function(e){t.elements.forEach((function(r){return r.classList[e.target===r?"add":"remove"](t.className)})),t.onchange(e)}));return{destroy:function(){return f.apply(n,e)}}}function N(t){var e=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(t,e)}(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){B(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}
/*! NanoPop 1.3.0 MIT | https://github.com/Simonwep/nanopop */var U,H=((U=function(){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.positionFlipOrder,i=void 0===o?t.defaultPositionFlipOrder:o,a=n.variantFlipOrder,c=void 0===a?t.defaultVariantFlipOrder:a,u=n.container,s=void 0===u?document.documentElement.getBoundingClientRect():u,l=n.forceApplyOnFailure,f=void 0!==l&&l,p=n.margin,v=void 0===p?8:p,h=n.position,d=void 0===h?"bottom-start":h;this.o={positionFlipOrder:i,variantFlipOrder:c,reference:e,popper:r,position:d,container:s,forceApplyOnFailure:f,margin:v}}return t.prototype.update=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.o,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.o=D(D({},this.o),t),n=r.container,o=r.reference,i=r.popper,a=r.margin,c=r.position,u=r.forceApplyOnFailure,s=r.variantFlipOrder,l=r.positionFlipOrder;i.style.left="0",i.style.top="0";for(var f,p=o.getBoundingClientRect(),v=i.getBoundingClientRect(),h={t:p.top-v.height-a,b:p.bottom+a,r:p.right+a,l:p.left-v.width-a},d={vm:-v.width/2+(p.left+p.width/2),vs:p.left,ve:p.left+p.width-v.width,hs:p.bottom-p.height,he:p.bottom-v.height,hm:p.bottom-p.height/2-v.height/2},g=c.split("-"),y=g[0],b=g[1],m=void 0===b?"middle":b,x=l[y],S=s[m],w=n.top,O=n.left,_=n.bottom,A=n.right,E=N(x);!(f=E()).done;){var j=f.value,C="t"===j||"b"===j,P=h[j],k=C?["top","left"]:["left","top"],I=k[0],R=k[1],T=C?[v.height,v.width]:[v.width,v.height],L=T[0],F=T[1],M=C?[_,A]:[A,_],B=M[0],U=M[1],H=C?[w,O]:[O,w],$=H[0],V=H[1];if(e||!(P<$||P+L>B))for(var G,W=N(S);!(G=W()).done;){var z=G.value,X=d[(C?"v":"h")+z];if(e||!(X<V||X+F>U))return i.style[R]=X-v[R]+"px",i.style[I]=P-v[I]+"px",j+z}}return u?this.update(void 0,!0):null},t}()).version="1.3.0",U.defaultVariantFlipOrder={start:"sme",middle:"mse",end:"ems"},U.defaultPositionFlipOrder={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},U);function $(t){var e=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return V(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(t,e)}(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var z=function(){function t(e){var r=this;W(this,"_initializingActive",!0),W(this,"_recalc",!0),W(this,"_nanopop",null),W(this,"_root",null),W(this,"_color",I()),W(this,"_lastColor",I()),W(this,"_swatchColors",[]),W(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=e=Object.assign(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach((function(e){W(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t.DEFAULT_OPTIONS),e);var n=e,o=n.swatches,i=n.components,a=n.theme,c=n.sliders,u=n.lockOpacity,s=n.padding;["nano","monolith"].includes(a)&&!c&&(e.sliders="h"),i.interaction||(i.interaction={});var l=i.preview,f=i.opacity,p=i.hue,v=i.palette;i.opacity=!u&&f,i.palette=v||l||f||p,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),o&&o.length&&o.forEach((function(t){return r.addSwatch(t)}));var h=this._root,d=h.button,g=h.app;this._nanopop=new H(d,g,{margin:s}),d.setAttribute("role","button"),d.setAttribute("aria-label",this._t("btn:toggle"));var y=this;requestAnimationFrame((function t(){if(!g.offsetWidth&&g.parentElement!==e.container)return requestAnimationFrame(t);y.setColor(e.default),y._rePositioningPicker(),e.defaultRepresentation&&(y._representation=e.defaultRepresentation,y.setColorRepresentation(y._representation)),e.showAlways&&y.show(),y._initializingActive=!1,y._emit("init")}))}var e=t.prototype;return e._preBuild=function(){for(var t,e,r,n,o,i,a,c,u,s,l,f,p=this.options,h=0,g=["el","container"];h<g.length;h++){var y=g[h];p[y]=d(p[y])}this._root=(e=(t=this).options,r=e.components,n=e.useAsButton,o=e.inline,i=e.appClass,a=e.theme,c=e.lockOpacity,u=function(t){return t?"":'style="display:none" hidden'},l=v('\n      <div :ref="root" class="pickr">\n\n        '+(n?"":'<button type="button" :ref="button" class="pcr-button"></button>')+'\n\n        <div :ref="app" class="pcr-app '+(i||"")+'" data-theme="'+a+'" '+(o?'style="position: unset"':"")+' aria-label="'+(s=function(e){return t._t(e)})("ui:dialog")+'" role="window">\n          <div class="pcr-selection" '+u(r.palette)+'>\n            <div :obj="preview" class="pcr-color-preview" '+u(r.preview)+'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="'+s("btn:last-color")+'"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="'+s("aria:palette")+'" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" '+u(r.hue)+'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="'+s("aria:hue")+'" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" '+u(r.opacity)+'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="'+s("aria:opacity")+'" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches '+(r.palette?"":"pcr-last")+'" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" '+u(Object.keys(r.interaction).length)+'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" '+u(r.interaction.input)+' aria-label="'+s("aria:input")+'">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="'+(c?"HEX":"HEXA")+'" type="button" '+u(r.interaction.hex)+'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="'+(c?"RGB":"RGBA")+'" type="button" '+u(r.interaction.rgba)+'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="'+(c?"HSL":"HSLA")+'" type="button" '+u(r.interaction.hsla)+'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="'+(c?"HSV":"HSVA")+'" type="button" '+u(r.interaction.hsva)+'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" '+u(r.interaction.cmyk)+'>\n\n            <input :ref="save" class="pcr-save" value="'+s("btn:save")+'" type="button" '+u(r.interaction.save)+' aria-label="'+s("aria:btn:save")+'">\n            <input :ref="cancel" class="pcr-cancel" value="'+s("btn:cancel")+'" type="button" '+u(r.interaction.cancel)+' aria-label="'+s("aria:btn:cancel")+'">\n            <input :ref="clear" class="pcr-clear" value="'+s("btn:clear")+'" type="button" '+u(r.interaction.clear)+' aria-label="'+s("aria:btn:clear")+'">\n          </div>\n        </div>\n      </div>\n    '),(f=l.interaction).options.find((function(t){return!t.hidden&&!t.classList.add("active")})),f.type=function(){return f.options.find((function(t){return t.classList.contains("active")}))},l),p.useAsButton&&(this._root.button=p.el),p.container.appendChild(this._root.root)},e._finalBuild=function(){var t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){var r=t.el.parentElement;t.el.nextSibling?r.insertBefore(e.app,t.el.nextSibling):r.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()},e._buildComponents=function(){var t=this,e=this,r=this.options.components,n=(e.options.sliders||"v").repeat(2),o=n.match(/^[vh]+$/g)?n:[],i=o[0],a=o[1],c=function(){return t._color||(t._color=t._lastColor.clone())},u={palette:T({element:e._root.palette.picker,wrapper:e._root.palette.palette,onstop:function(){return e._emit("changestop",e)},onchange:function(t,n){if(r.palette){var o=c(),i=e._root,a=e.options,u=i.preview,s=u.lastColor,l=u.currentColor;e._recalc&&(o.s=100*t,o.v=100-100*n,o.v<0&&(o.v=0),e._updateOutput());var f=o.toRGBA().toString(0);this.element.style.background=f,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, "+o.a+"), transparent),\n                        linear-gradient(to left, hsla("+o.h+", 100%, 50%, "+o.a+"), rgba(255, 255, 255, "+o.a+"))\n                    ",a.comparison?a.useAsButton||e._lastColor||(s.style.color=f):(i.button.style.color=f,i.button.classList.remove("clear"));for(var p,v=o.toHEXA().toString(),h=$(e._swatchColors);!(p=h()).done;){var d=p.value,g=d.el,y=d.color;g.classList[v===y.toHEXA().toString()?"add":"remove"]("pcr-active")}l.style.color=f}}}),hue:T({lock:"v"===a?"h":"v",element:e._root.hue.picker,wrapper:e._root.hue.slider,onstop:function(){return e._emit("changestop",e)},onchange:function(t){if(r.hue&&r.palette){var n=c();e._recalc&&(n.h=360*t),this.element.style.backgroundColor="hsl("+n.h+", 100%, 50%)",u.palette.trigger()}}}),opacity:T({lock:"v"===i?"h":"v",element:e._root.opacity.picker,wrapper:e._root.opacity.slider,onstop:function(){return e._emit("changestop",e)},onchange:function(t){if(r.opacity&&r.palette){var n=c();e._recalc&&(n.a=Math.round(100*t)/100),this.element.style.background="rgba(0, 0, 0, "+n.a+")",u.palette.trigger()}}}),selectable:L({elements:e._root.interaction.options,className:"active",onchange:function(t){e._representation=t.target.getAttribute("data-type").toUpperCase(),e._recalc&&e._updateOutput()}})};this._components=u},e._bindEvents=function(){var t=this,e=this._root,r=this.options,n=[l(e.interaction.clear,"click",(function(){return t._clearColor()})),l([e.interaction.cancel,e.preview.lastColor],"click",(function(){t._emit("cancel",t),t.setHSVA.apply(t,(t._lastColor||t._color).toHSVA().concat([!0]))})),l(e.interaction.save,"click",(function(){!t.applyColor()&&!r.showAlways&&t.hide()})),l(e.interaction.result,["keyup","input"],(function(e){t.setColor(e.target.value,!0)&&!t._initializingActive&&t._emit("change",t._color),e.stopImmediatePropagation()})),l(e.interaction.result,["focus","blur"],(function(e){t._recalc="blur"===e.type,t._recalc&&t._updateOutput()})),l([e.palette.palette,e.palette.picker,e.hue.slider,e.hue.picker,e.opacity.slider,e.opacity.picker],["mousedown","touchstart"],(function(){return t._recalc=!0}),{passive:!0})];if(!r.showAlways){var o=r.closeWithKey;n.push(l(e.button,"click",(function(){return t.isOpen()?t.hide():t.show()})),l(document,"keyup",(function(e){return t.isOpen()&&(e.key===o||e.code===o)&&t.hide()})),l(document,["touchstart","mousedown"],(function(r){t.isOpen()&&!h(r).some((function(t){return t===e.app||t===e.button}))&&t.hide()}),{capture:!0}))}if(r.adjustableNumbers){var i={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};g(e.interaction.result,(function(e,r,n){var o=i[t.getColorRepresentation().toLowerCase()];if(o){var a=o[n],c=e+(a>=100?1e3*r:r);return c<=0?0:Number((c<a?c:a).toPrecision(3))}return e}))}if(r.autoReposition&&!r.inline){var a=null,c=this;n.push(l(window,["scroll","resize"],(function(){c.isOpen()&&(r.closeOnScroll&&c.hide(),null===a?(a=setTimeout((function(){return a=null}),100),requestAnimationFrame((function t(){c._rePositioningPicker(),null!==a&&requestAnimationFrame(t)}))):(clearTimeout(a),a=setTimeout((function(){return a=null}),100)))}),{capture:!0}))}this._eventBindings=n},e._rePositioningPicker=function(){var t=this.options;if(!t.inline&&!this._nanopop.update({position:t.position,forceApplyOnFailure:!this._recalc})){var e=this._root.app,r=e.getBoundingClientRect();e.style.top=(window.innerHeight-r.height)/2+"px",e.style.left=(window.innerWidth-r.width)/2+"px"}},e._updateOutput=function(){var t=this._root,e=this._color,r=this.options;if(t.interaction.type()){var n="to"+t.interaction.type().getAttribute("data-type");t.interaction.result.value="function"==typeof e[n]?e[n]().toString(r.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)},e._clearColor=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._root,r=this.options;r.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),r.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))},e._parseLocalColor=function(t){var e=k(t),r=e.values,n=e.type,o=e.a,i=this.options.lockOpacity,a=void 0!==o&&1!==o;return r&&3===r.length&&(r[3]=void 0),{values:!r||i&&a?null:r,type:n}},e._t=function(e){return this.options.i18n[e]||t.I18N_DEFAULTS[e]},e._emit=function(t){for(var e=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this._eventListener[t].forEach((function(t){return t.apply(void 0,n.concat([e]))}))},e.on=function(t,e){return this._eventListener[t].push(e),this},e.off=function(t,e){var r=this._eventListener[t]||[],n=r.indexOf(e);return~n&&r.splice(n,1),this},e.addSwatch=function(t){var e=this,r=this._parseLocalColor(t).values;if(r){var n=this._swatchColors,o=this._root,i=I.apply(void 0,r),a=p('<button type="button" style="color: '+i.toRGBA().toString(0)+'" aria-label="'+this._t("btn:swatch")+'"/>');return o.swatches.appendChild(a),n.push({el:a,color:i}),this._eventBindings.push(l(a,"click",(function(){e.setHSVA.apply(e,i.toHSVA().concat([!0])),e._emit("swatchselect",i),e._emit("change",i)}))),!0}return!1},e.removeSwatch=function(t){var e=this._swatchColors[t];if(e){var r=e.el;return this._root.swatches.removeChild(r),this._swatchColors.splice(t,1),!0}return!1},e.applyColor=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._root,r=e.preview,n=e.button,o=this._color.toRGBA().toString(0);return r.lastColor.style.color=o,this.options.useAsButton||(n.style.color=o),n.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this},e.destroy=function(){var t=this;this._eventBindings.forEach((function(t){return f.apply(n,t)})),Object.keys(this._components).forEach((function(e){return t._components[e].destroy()}))},e.destroyAndRemove=function(){var t=this;this.destroy();var e=this._root,r=e.root,n=e.app;r.parentElement&&r.parentElement.removeChild(r),n.parentElement.removeChild(n),Object.keys(this).forEach((function(e){return t[e]=null}))},e.hide=function(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this},e.show=function(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this},e.isOpen=function(){return this._root.app.classList.contains("visible")},e.setHSVA=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:360,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||r<0||r>100||n<0||n>1)return!1;this._color=I(t,e,r,n);var a=this._components,c=a.hue,u=a.opacity,s=a.palette;return c.update(t/360),u.update(n),s.update(e/100,1-r/100),o||this.applyColor(),i&&this._updateOutput(),this._recalc=i,!0},e.setColor=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null===t)return this._clearColor(e),!0;var r=this._parseLocalColor(t),n=r.values,o=r.type;if(n){var i=o.toUpperCase(),a=this._root.interaction.options,c=a.find((function(t){return t.getAttribute("data-type")===i}));if(c&&!c.hidden)for(var u,s=$(a);!(u=s()).done;){var l=u.value;l.classList[l===c?"add":"remove"]("active")}return!!this.setHSVA.apply(this,n.concat([e]))&&this.setColorRepresentation(i)}return!1},e.setColorRepresentation=function(t){return t=t.toUpperCase(),!!this._root.interaction.options.find((function(e){return e.getAttribute("data-type").startsWith(t)&&!e.click()}))},e.getColorRepresentation=function(){return this._representation},e.getColor=function(){return this._color},e.getSelectedColor=function(){return this._lastColor},e.getRoot=function(){return this._root},e.disable=function(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this},e.enable=function(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this},t}();W(z,"utils",n),W(z,"version",y.a),W(z,"I18N_DEFAULTS",{"ui:dialog":"color picker dialog","btn:toggle":"toggle color picker dialog","btn:swatch":"color swatch","btn:last-color":"use previous color","btn:save":"Save","btn:cancel":"Cancel","btn:clear":"Clear","aria:btn:save":"save and close","aria:btn:cancel":"cancel and close","aria:btn:clear":"clear and close","aria:input":"color input field","aria:palette":"color selection area","aria:hue":"hue selection slider","aria:opacity":"selection slider"}),W(z,"DEFAULT_OPTIONS",{appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},i18n:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"}),W(z,"create",(function(t){return new z(t)}));e.default=z}]).default}));
var SimpleConsole=function(e){if(!e.handleCommand&&!e.outputOnly)throw new Error("You must specify either options.handleCommand(input) or options.outputOnly");var t=e.outputOnly,n=e.handleCommand,o=e.placeholder||"",i=(e.autofocus,e.storageID||"simple-console"),a=function(e,t,n,o="0 0 16 16"){var i=document.createElement("span");i.className=t,i.innerHTML='<svg width="1em" height="1em" viewBox="'+o+'">'+n+"</svg>",e.insertBefore(i,e.firstChild)},r=function(e){a(e,"input-chevron",'<path d="M6,4L10,8L6,12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>')},l=document.createElement("div");l.className="simple-console";var u=document.createElement("div");u.className="simple-console-output",u.setAttribute("role","log"),u.setAttribute("aria-live","polite");var s=document.createElement("div");s.className="simple-console-input-wrapper",r(s);var c,d=document.createElement("input");d.className="simple-console-input",d.setAttribute("autofocus","autofocus"),d.setAttribute("placeholder",o),d.setAttribute("aria-label",o),d.setAttribute("autocorrect","off"),d.setAttribute("autocapitalize","none"),l.appendChild(u),t||l.appendChild(s),s.appendChild(d);var p=function(e){var t=document.createElement("popup-menu");(t=document.createElement("div")).className="popup-menu",t.setAttribute("role","menu"),t.setAttribute("aria-hidden","true"),t.id="popup"+(~~(16777215*Math.random())).toString(16);var n=document.createElement("button");n.className="popup-button",n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-owns",t.id),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-label","Command history"),n.setAttribute("title","Command history"),a(n,"command-history-icon",'<path style="fill:currentColor" d="m 44.77595,87.58531 c -5.22521,-1.50964 -12.71218,-5.59862 -14.75245,-8.05699 -1.11544,-1.34403 -0.96175,-1.96515 1.00404,-4.05763 2.86639,-3.05114 3.32893,-3.0558 7.28918,-0.0735 18.67347,14.0622 46.68328,-0.57603 46.68328,-24.39719 0,-16.97629 -14.94179,-31.06679 -31.5,-29.70533 -14.50484,1.19263 -25.37729,11.25581 -28.04263,25.95533 l -0.67995,3.75 6.6362,0 6.6362,0 -7.98926,8 c -4.39409,4.4 -8.35335,8 -8.79836,8 -0.44502,0 -4.38801,-3.6 -8.7622,-8 l -7.95308,-8 6.11969,0 6.11969,0 1.09387,-6.20999 c 3.5237,-20.00438 20.82127,-33.32106 40.85235,-31.45053 11.43532,1.06785 21.61339,7.05858 27.85464,16.39502 13.06245,19.54044 5.89841,45.46362 -15.33792,55.50045 -7.49404,3.54188 -18.8573,4.55073 -26.47329,2.35036 z m 6.22405,-32.76106 c 0,-6.94142 0,-13.88283 0,-20.82425 2,0 4,0 6,0 0,6.01641 0,12.03283 0,18.04924 4.9478,2.93987 9.88614,5.89561 14.82688,8.84731 l -3.27407,4.64009 c -5.88622,-3.5132 -11.71924,-7.11293 -17.55281,-10.71239 z"/>',"0 0 102 102"),s.appendChild(n),s.appendChild(t),n.addEventListener("keydown",function(e){40===e.keyCode&&(e.preventDefault(),first_item=t.querySelector("[tabindex='0']"),first_item.focus())}),t.addEventListener("keydown",function(e){38===e.keyCode&&(first_item=t.querySelector("[tabindex='0']"),document.activeElement===first_item&&n.focus())},!0);var o=function(){n.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false"),c=n,e(t)},i=function(){n.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true"),c=null},r=function(){return"true"==n.getAttribute("aria-expanded")},l=function(){r()?i():o()};return n.addEventListener("click",l),addEventListener("mousedown",function(e){r()&&e.target.closest(".popup-button")!=n&&e.target.closest(".popup-menu")!=t&&i()}),addEventListener("focusin",function(e){r()&&e.target.closest(".popup-button")!=n&&e.target.closest(".popup-menu")!=t&&(e.preventDefault(),i())}),n.popup=t,n.openPopup=o,n.closePopup=i,n.togglePopup=l,n.popupIsOpen=r,n},m=function(e){var t=p(function(t){t.innerHTML="";for(var n=e(),o=0;o<n.length;o++){var i=n[o];if("divider"===i.type){var a=document.createElement("hr");a.classList.add("menu-divider"),t.appendChild(a)}else{var r=document.createElement("div");r.classList.add("menu-item"),r.setAttribute("tabindex",0),r.addEventListener("click",i.action),r.textContent=i.label,t.appendChild(r)}}}),n=t.popup;return n.addEventListener("click",function(e){e.target.closest(".menu-item")&&t.closePopup()}),n.addEventListener("keydown",function(e){if(38===e.keyCode){e.preventDefault();for(var t=document.activeElement.previousElementSibling;t&&"HR"===t.nodeName;)t=t.previousElementSibling;t&&t.classList.contains("menu-item")&&t.focus()}else if(40===e.keyCode){e.preventDefault();for(var n=document.activeElement.nextElementSibling;n&&"HR"===n.nodeName;)n=n.nextElementSibling;n&&n.classList.contains("menu-item")&&n.focus()}else 13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),document.activeElement.click())}),t};addEventListener("keydown",function(e){if(27===e.keyCode)if(c){e.preventDefault();var t=c;t.closePopup(),t.focus()}else e.target.closest(".simple-console")===l&&d.focus()}),m(function(){var e=[];if(b.length>0){for(var t=0;t<b.length;t++){!function(t,n){e.push({label:t,action:function(){d.value=t,d.focus(),d.setSelectionRange(d.value.length,d.value.length)}})}(b[t])}e.push({type:"divider"}),e.push({label:"Clear command history",action:L})}else e.push({label:"Command history empty",action:function(){}});return e});var f,h=function(){return f},v=function(e){var t=u.is_scrolled_to_bottom(),n=document.createElement("div");return n.className="entry",e instanceof Element?n.appendChild(e):n.innerText=n.textContent=e,u.appendChild(n),requestAnimationFrame(function(){t&&u.scroll_to_bottom()}),f=n,n},g=function(e){v(e),h().classList.add("error")};u.is_scrolled_to_bottom=function(){return u.scrollTop+u.clientHeight+1>=u.scrollHeight},u.scroll_to_bottom=function(){u.scrollTop=u.scrollHeight};var b=[],y=b.length,E=i+" command history",C=function(){try{localStorage[E]=JSON.stringify(b)}catch(e){}},L=function(){b=[],C()};!function(){try{b=JSON.parse(localStorage[E]),y=b.length}catch(e){}}(),d.addEventListener("keydown",function(e){if(13===e.keyCode){var t=d.value;if(""===t)return;d.value="",b[b.length-1]!==t&&b.push(t),y=b.length,C();var o=v(t);o.classList.add("input"),r(o),u.scroll_to_bottom(),n(t)}else 38===e.keyCode?(--y<0?(y=-1,d.value=""):d.value=b[y],d.setSelectionRange(d.value.length,d.value.length),e.preventDefault()):40===e.keyCode?(++y>=b.length?(y=b.length,d.value=""):d.value=b[y],d.setSelectionRange(d.value.length,d.value.length),e.preventDefault()):46===e.keyCode&&e.shiftKey&&(d.value===b[y]&&(b.splice(y,1),y=Math.max(0,y-1),d.value=b[y]||"",C()),e.preventDefault())}),this.element=l,this.input=d,this.addButton=function(e){var t=document.createElement("button");return s.appendChild(t),t.addEventListener("click",e),t},this.addPopupButton=p,this.addPopupMenuButton=m,this.handleUncaughtErrors=function(){window.onerror=g},this.log=v,this.logHTML=function(e){v(""),h().innerHTML=e},this.error=g,this.warn=function(e){v(e),h().classList.add("warning")},this.info=function(e){v(e),h().classList.add("info")},this.success=function(e){v(e),h().classList.add("success")},this.getLastEntry=h,this.clear=function(){u.innerHTML=""}};

var Util = {
    download : function(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none'; document.body.appendChild(element);
        element.click();

        document.body.removeChild(element);
    },
    is_mobile:
        ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
    getFile: function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function() {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    }
};
// Emscripten GLFW monkey patch
// - removed undesired fullscreen request on resize
// - remove e.preventDefault() in keydown handler which broke backspace
var glfwPatch = function() {
    GLFW.setWindowSize = function(winid, width, height) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        // Removed requestFUllscreen, which caused error/weird behavior
        if (GLFW.active.id == win.id) {
            Browser.setCanvasSize(width, height);
            win.width = width;
            win.height = height
        }
        if (!win.windowSizeFunc)
            return;
        dynCall_viii(win.windowSizeFunc, win.id, width, height)
    };
    window.removeEventListener("keydown", GLFW.onKeydown, true);
    GLFW.onKeydown = function (event) {
        // No PreventDefault on backspace
        GLFW.onKeyChanged(event.keyCode, 1);
    };
    window.addEventListener("keydown", GLFW.onKeydown, true);
};
var pickrConfig = {
    theme: 'monolith',
    comparison: false,
    lockOpacity: true,
    padding: 0,
    swatches: [
        '#FF0000', '#4169E1',
        '#008000', '#FFA500',
        '#800080', '#000000',
        'rgba(255, 116, 0, 1)',
    ],
    useAsButton: true,
    components: {

        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: false
        }
    }
};
var Renderer = {
    redraw_cnt: 0,
    _redraw : function() {
        Renderer.redraw_cnt -= 1;
        Module.redraw();
        if (Renderer.redraw_cnt > 0 ||
            Module.is_any_slider_animating()) {
            window.requestAnimationFrame(Renderer._redraw);
        }
    },
    redraw : function() {
        if (Renderer.redraw_cnt <= 0) {
            Renderer.redraw_cnt = 50;
            window.requestAnimationFrame(Renderer._redraw);
        } else {
            Renderer.redraw_cnt = 50;
        }
    },
};

var FuncEdit = {
    func_names: [],
    func_mfields: [],
    func_indices: {},
    reparse : function(name) {
            var idx = FuncEdit.func_indices[name];
            Module.set_func_expr(idx, FuncEdit.func_mfields[idx].latex());
            var uses_t = Module.get_func_uses_t(idx);
            if (uses_t) {
                $('#function-tbounds-' + name).css('display', 'flex');
            } else {
                $('#function-tbounds-' + name).css('display', 'none');
            }
            Module.redraw();
    },
    new_func: function(add) {
        var fidx = FuncEdit.func_names.length;
        if (add) {
            success = Module.add_func();
            if (!success) return;
        }
        var fname = Module.get_func_name(fidx);
        $('#functions').append($('#function-form-template').html().replace(
                new RegExp('{name}', 'g'), fname));
        FuncEdit.func_names.push(fname);
        FuncEdit.func_indices[fname] = fidx;
        var MQ = MathQuill.getInterface(2);
        var sm = MQ.StaticMath($('#function-name-' + fname)[0]);
        sm.latex("f_{" + fname.substr(1) + "}");
        var editor_tb = $('#function-expr-' + fname);
        const mf = MQ.MathField(editor_tb[0],
            {
                handlers: {
                    edit: function(mathField) {
                        var this_name = mathField.el().id.substr(14);
                        FuncEdit.reparse(this_name);
                        let tex = mathField.latex();
                        if (tex == "#") {
                            mathField.write("\ \\text{comment}");
                        } else {
                            const opn_str = "\\operatorname{";
                            if (tex.startsWith(opn_str) && tex[tex.length - 1] == '}') {
                                let tex_opn = tex.substr(opn_str.length, tex.length - opn_str.length - 1);
                                if (tex_opn.length <= 1) return;
                                if (tex_opn[0] == 'f' || tex_opn[0] == 'F')
                                    tex_opn = tex_opn.substr(1);
                                if (tex_opn == "text") {
                                    mathField.write("\\ \\text{edit me}\\ \\operatorname{at}\ \\ \\left(0, 0\\right)");
                                } else if (tex_opn == "poly") {
                                    mathField.write("\\ ");
                                    mathField.typedText("(");
                                } else if (tex_opn == "rect") {
                                    mathField.write("\\ \\left(0,0\\right),\\ \\left(1,1\\right)");
                                } else if (tex_opn == "circ") {
                                    mathField.write("\\ 1\\ \\operatorname{at}\ \\ \\left(0, 0\\right)");
                                } else if (tex_opn == "ellipse") {
                                    mathField.write("\\ (1,1)\\\ \\operatorname{at}\ \\ \\left(0, 0\\right)");
                                }
                            }
                        }
                    },
                    upOutOf: function(mathField) {
                        var this_name = mathField.el().id.substr(14);
                        var idx = FuncEdit.func_indices[this_name];
                        if (idx > 0) {
                            var next_tb = $('#function-expr-' + FuncEdit.func_names[idx - 1]);
                            next_tb.mousedown(); next_tb.mouseup();
                        }
                    },
                    downOutOf: function(mathField) {
                        var this_name = mathField.el().id.substr(14);
                        var idx = FuncEdit.func_indices[this_name];
                        if (idx + 1 === Module.num_funcs()) {
                            FuncEdit.new_func(true);
                        }
                        var next_tb = $('#function-expr-' + FuncEdit.func_names[idx + 1]);
                        next_tb.mousedown(); next_tb.mouseup();
                    },
                }
            });
        FuncEdit.func_mfields.push(mf);
        mf.latex(Module.get_func_expr(fidx));

        editor_tb.mousedown(function() {
            // Focus (change curr func)
            var this_name = this.id.substr(14);
            var idx = FuncEdit.func_indices[this_name];
            if (idx === Module.num_funcs() - 1) {
                // Add function
                FuncEdit.new_func(true);
            }
            $('#function-name-' + this_name).removeClass('inactive');
            $('#function-del-' + this_name).removeClass('inactive');
            Module.set_curr_func(idx);
            Module.redraw();
        });
        editor_tb.keyup(function() {
            var this_name = this.id.substr(14);
            FuncEdit.reparse(this_name);
        });
        $('#function-tmin-' + fname).val(Math.floor(Module.get_func_tmin(fidx) * 1e6)/1e6);
        $('#function-tmax-' + fname).val(Math.ceil(Module.get_func_tmax(fidx) * 1e6)/1e6);
        $('#function-tmin-' + fname).on('input', function() {
            Module.set_func_tmin(fidx, Number.parseFloat(this.value));
            Module.redraw();
        });
        $('#function-tmax-' + fname).on('input', function() {
            Module.set_func_tmax(fidx, Number.parseFloat(this.value));
            Module.redraw();
        });
        $('#function-del-' + fname).click(function() {
            // Delete
            var this_name = this.id.substr(13);
            var idx = FuncEdit.func_indices[this_name];
            if (FuncEdit.func_names.length > idx + 1) {
                Module.delete_func(idx);
                Module.redraw();
                $('#function-widget-' + this_name).remove();
                FuncEdit.func_names.splice(idx, 1);
                delete FuncEdit.func_indices[this_name];
                FuncEdit.func_mfields.splice(idx, 1);
                for (var t = idx; t < FuncEdit.func_names.length; t++) {
                    FuncEdit.func_indices[FuncEdit.func_names[t]] -= 1;
                }
            }
        });
        // Color picker
        const pickr = Pickr.create(Object.assign(
            {el: '#color-picker-' +  fname}, pickrConfig
        ));
        pickr.on("init", function(instance) {
            var this_name = instance.options.el.id.substr(13);
            var idx = FuncEdit.func_indices[this_name];
            pickr.setColor("#" + Module.get_func_color(idx));
        });
        pickr.on("change", function(color, instance) {
            var hex = color.toHEXA().toString().substr(1);
            var this_name = instance.options.el.id.substr(13);
            var idx = FuncEdit.func_indices[this_name];
            Module.set_func_color(idx, hex);
            Module.redraw();
        });
    }
};

var Sliders = {
    slider_ids: [],
    slider_indices: {},
    last_id: 0,
    new_slider: function(add) {
        var sidx = Sliders.slider_ids.length;
        var sid = Sliders.last_id;
        Sliders.last_id += 1;
        if (add) Module.add_slider();
        Sliders.slider_ids.push(sid);
        Sliders.slider_indices[sid] = sidx;
        $('#sliders').append($('#slider-form-template').html().replace(
                new RegExp('{name}', 'g'), sid));
        {
            var slider_var = $('#slider-var-' + sid);
            slider_var.val(Module.get_slider_var(sidx));
            slider_var.on('input', function() {
                var $this = $(this);
                var this_sid = this.id.substr(11);
                var idx = Sliders.slider_indices[this_sid];
                Module.set_slider_var(idx, $this.val());
                Module.redraw();
            });
        }
        var sliderChangeVal = function() {
            var $this = $(this);
            var this_sid = this.id.substr(11);
            var idx = Sliders.slider_indices[this_sid];
            var new_val = Number.parseFloat($this.val());
            Module.set_slider_val(idx, new_val);
            Renderer.redraw();
            if ($this.hasClass('slider-sli')) {
                $('#slider-val-' + this_sid).val(new_val);
            } else {
                $('#slider-sli-' + this_sid).val(new_val);
            }
        };
        var init_min = Module.get_slider_lo(sidx);
        var init_max = Module.get_slider_hi(sidx);
        {
            var sliderChangeBounds = function(e) {
                var this_sid = this.id.substr(11);
                var idx = Sliders.slider_indices[this_sid];
                var new_min = Number.parseFloat($('#slider-min-' + this_sid).val());
                var new_max = Number.parseFloat($('#slider-max-' + this_sid).val());
                Module.set_slider_lo_hi(idx, new_min, new_max);
                var this_slider = $('#slider-sli-' + this_sid);
                this_slider.attr('min', new_min);
                this_slider.attr('max', new_max);
            }
            var slider_min = $('#slider-min-' + sid);
            var slider_max = $('#slider-max-' + sid);
            slider_min.val(init_min)
            slider_max.val(init_max)
            slider_min.on('input', sliderChangeBounds);
            slider_max.on('input', sliderChangeBounds);
        }
        {
            var slider = $('#slider-sli-' + sid);
            slider.attr('min', init_min);
            slider.attr('max', init_max);
            slider.val(Module.get_slider_val(sidx))
            slider.on('input', sliderChangeVal);
        }
        {
            var slider_val = $('#slider-val-' + sid);
            slider_val.val(Module.get_slider_val(sidx))
            slider_val.on('input', sliderChangeVal);
        }
        {
            var slider_del = $('#slider-del-' + sid);
            slider_del.click(function() {
                var this_sid = this.id.substr(11);
                var idx = Sliders.slider_indices[this_sid];
                $('#slider-' + this_sid).remove();
                $('#slider-bounds-' + this_sid).remove();
                Sliders.slider_ids.splice(idx, 1);
                delete Sliders.slider_indices[this_sid];
                for (var t = idx; t < Sliders.slider_ids.length; t++) {
                    Sliders.slider_indices[Sliders.slider_ids[t]] -= 1;
                }
                Module.delete_slider(idx);
                Module.redraw();
            });
        }
        {
            var slider_ani = $('#slider-ani-' + sid);
            slider_ani.click(function() {
                var this_sid = this.id.substr(11);
                var idx = Sliders.slider_indices[this_sid];
                if (Module.slider_animation_dir(idx) != 0) {
                    Module.end_slider_animation(idx);
                    $(this).html('<ion-icon name="play" class="toggle-caret"></ion-icon>')
                } else {
                    Module.begin_slider_animation(idx);
                    $(this).html('<ion-icon name="stop" class="toggle-caret"></ion-icon>')
                }
                Renderer.redraw();
            });
        }
        Module.redraw();
    },
    init: function() {
        $('#btn-add-slider').click(function() {
            Sliders.new_slider(true);
        });
    },
};

var ViewConfig = {
    vbounds : ['xmin', 'xmax', 'ymin', 'ymax'],
    updateViewBounds: function() {
        for (var i = 0; i < ViewConfig.vbounds.length; i++) {
            var b = ViewConfig.vbounds[i];
            var vbound = $('#view-' + b);
            vbound.val(Module['get_' + b]());
        }
    },
    updateViewPolar: function() {
        $('#view-polar').prop('checked', Module.get_is_polar_grid());
    },
    resetView: function() {
        Module.reset_view();
        ViewConfig.updateViewBounds();
        Module.redraw();
    },
    init : function() {
        ViewConfig.updateViewBounds();
        for (var i = 0; i < ViewConfig.vbounds.length; i++) {
            var b = ViewConfig.vbounds[i];
            var vbound = $('#view-' + b);
            vbound.on('input', function() {
                Module.set_view(
                    Number.parseFloat($('#view-xmin').val()),
                    Number.parseFloat($('#view-xmax').val()),
                    Number.parseFloat($('#view-ymin').val()),
                    Number.parseFloat($('#view-ymax').val()));
                Module.redraw();
            });
        }

        $('.reset-view').click(ViewConfig.resetView);

        ViewConfig.updateViewPolar();
        $('#view-polar').change(function(){
            Module.set_is_polar_grid(
                $('#view-polar').prop('checked')
            );
            Module.redraw();
        });
    }
};

var Shell = {
    initialized: false,
    prompt: function() {
        Shell.shell.write('>>> ');
    },
    con : new SimpleConsole({
        placeholder: "Enter Nivalis expression",
        autofocus: false,
        handleCommand: function(command){
            try {
                let ret = Module.shell_exec(command);
                if (ret) {
                    Shell.con.log(Module.get_shell_output());
                } else {
                    Shell.con.error(Module.get_shell_output());
                }
                $("#shell").scrollTop(
                    $('#shell').prop("scrollHeight"));
            } catch(error) {
                Shell.con.error(error);
            }
        },
        storageID: "shell-main",
    }),
    start: function() {
        if (Shell.initialized === false) {
            Shell.initialized = true;
            let init_output = Module.get_shell_output();
            Shell.con.info(init_output);
            $('#shell')[0].appendChild(Shell.con.element);
            $('#shell-close').click(function() {
                Shell.toggle();
            });
        }
    },
    toggle: function() {
        let shell = $('#shell');
        if (shell.css('display') == 'block') {
            shell.hide();
            $('#open-shell').html(
                'Shell '+
                '<ion-icon name="caret-down" class="toggle-caret"></ion-icon>')
            $('#open-shell').removeClass('active');
        } else {
            shell.height(window.innerHeight - 130);
            shell.show();
            $('#open-shell').addClass('active');
            Shell.start();
            $('#open-shell').html(
                'Shell '+
                '<ion-icon name="caret-up"  class="toggle-caret"></ion-icon>');
            $('#open-shell').addClass('active');
            $(this).blur();
            shell.find('input').focus();
        }
    },
};

var Saves = {
    add_save_menu_item: function(i) {
        let savei = localStorage['save' + i] || 0;
        if (savei.length > 0) {
            $('#save-divider-bottom').before($('#save-template').html().replace(
                new RegExp('{name}', 'g'), i));
            let menuitem = $('#save-' + i);
            menuitem.click(function() {
                let this_save = this.id.substr(5);
                Module.import_json(localStorage['save' + this_save]);
                resync();
                Module.redraw();
            });
        }
    },
    _force_dropdown_open: function() {
        // Force dropdown open
        setTimeout(function() {
            if ($('#save-dropdown').is(":hidden")){
                $('#save-dropdown-toggle').dropdown('toggle');
            }
        }, 50);
    },
    init: function() {
        $('#save-btn').click(function() {
            let nsaves = Number.parseInt(localStorage['nsaves']) || 0;
            localStorage.setItem('nsaves', nsaves + 1);
            localStorage.setItem('save' + nsaves, Module.export_json());
            Saves.add_save_menu_item(nsaves);
            Saves._force_dropdown_open();
        });
        $('#save-clear-btn').click(function() {
            let nsaves = Number.parseInt(localStorage['nsaves']) || 0;
            localStorage.setItem('nsaves', 0);
            for (var i = 0; i < nsaves; i++) {
                localStorage.removeItem('save' + i);
                $('#save-' + i).remove();
            }
            Saves._force_dropdown_open();
        });

        let nsaves = Number.parseInt(localStorage['nsaves']) || 0;
        for (var i = 0; i < nsaves; i++) {
            Saves.add_save_menu_item(i);
        }
    }
}

// Re-synchronize all functions/sliders
var resync = function() {
    $('#functions').html('');
    $('#sliders').html('');
    FuncEdit.func_names = [];
    FuncEdit.func_indices = {};
    FuncEdit.func_mfields = [];
    Sliders.slider_ids = [];
    Sliders.slider_indices = [];
    for (let i = 0; i < Module.num_funcs(); i++ ){
        FuncEdit.new_func(false);
        FuncEdit.reparse(FuncEdit.func_names[i]);
    }
    for (let i = 0; i < Module.num_funcs() - 1; i++){
        let fn = FuncEdit.func_names[i];
        $('#function-name-' + fn).removeClass('inactive');
        $('#function-del-' + fn).removeClass('inactive');
    }
    for (let i = 0; i < Module.num_sliders(); i++){
        Sliders.new_slider(false);
    }
    $('#function-expr-' +
        FuncEdit.func_names[Module.get_curr_func()]).focus();
};

let setupHandlers = function() {
    // Resize handler
    window.addEventListener('resize', onResizeCanvas, false);

    let canvas = document.getElementById("canvas");
    FuncEdit.new_func(false);
    $('#function-expr-' + FuncEdit.func_names[0]).focus();
    document.addEventListener('keydown', function(e){
        // Must either have ctrl down OR nothing selected to activate
        if (event.ctrlKey===false &&
            $('*:focus').length > 0) return;
        if (event.ctrlKey===true &&
            (event.which === 61 || event.which === 107 ||
                event.which === 173 || event.which === 109  || event.which === 187  ||
                event.which === 189 || event.which === 72 ||
                event.which === 79 || event.which === 80)) {
            event.preventDefault();
        }
        Module.on_key(e.which, e.ctrlKey, e.shiftKey, e.altKey);
        if (e.which === 69) {
            let tb = $('#function-expr-' + FuncEdit.func_names[
                Module.get_curr_func()]);
            tb.mousedown();
            tb.mouseup();
        } else {
            ViewConfig.updateViewPolar();
            ViewConfig.updateViewBounds();
        }
        Renderer.redraw();
    });
    canvas.addEventListener("mousedown", function(e){
        if (e.button == 0) {
            let oleft = $(canvas).offset().left;
            let otop = $(canvas).offset().top;
            Module.on_mousedown(e.clientX - oleft, e.clientY - otop);
            Renderer.redraw();
        }
    });
    var pinch_zoom_dist = -1.;
    var touch_cen_x = -1.;
    var touch_cen_y = -1.;
    canvas.addEventListener("touchstart", function(e){
        if (e.touches.length > 0) {
            touch_cen_x = 0.; touch_cen_y = 0.;
            for (let i = 0; i < e.touches.length; i++) {
                touch_cen_x += e.touches[i].pageX;
                touch_cen_y += e.touches[i].pageY;
            }
            touch_cen_x /= e.touches.length;
            touch_cen_y /= e.touches.length;
            let oleft = $(canvas).offset().left;
            let otop = $(canvas).offset().top;
            touch_cen_x -= oleft;
            touch_cen_y -= otop;
            if (e.touches.length == 2) {
                let touch1 = e.touches[0],
                    touch2 = e.touches[1];
                let dist = Math.hypot(
                    touch1.pageX - touch2.pageX,
                    touch1.pageY - touch2.pageY);
                pinch_zoom_dist = dist;
            }
            Module.on_mousedown(e.touches[0].pageX - oleft,
                e.touches[0].pageY - otop);
            Renderer.redraw();
            e.preventDefault();
        }
    });
    canvas.addEventListener("mousemove", function(e){
        if (e.button == 0) {
            let oleft = $(canvas).offset().left;
            let otop = $(canvas).offset().top;
            Module.on_mousemove(e.clientX - oleft, e.clientY - otop);
            ViewConfig.updateViewBounds();
            Renderer.redraw();
        }
    });
    canvas.addEventListener("touchmove", function(e){
        if (e.touches.length > 0) {
            if (e.touches.length == 2) {
                let touch1 = e.touches[0],
                    touch2 = e.touches[1];
                let dist = Math.hypot(
                    touch1.pageX - touch2.pageX,
                    touch1.pageY - touch2.pageY);
                if (pinch_zoom_dist > 0.001) {
                    let delta_y = pinch_zoom_dist - dist;
                    Module.on_mousewheel(delta_y < 0,
                        Math.max(Math.abs(delta_y) * 10., 1.0001),
                        touch_cen_x, touch_cen_y);
                }
                pinch_zoom_dist = dist;
            }
            let oleft = $(canvas).offset().left;
            let otop = $(canvas).offset().top;
            Module.on_mousemove(e.touches[0].pageX - oleft,
                e.touches[0].pageY - otop);
            ViewConfig.updateViewBounds();
            Renderer.redraw();
            e.preventDefault();
        }
    });
    canvas.addEventListener("mouseup", function(e){
        if (e.button == 0) {
            let oleft = $(canvas).offset().left;
            let otop = $(canvas).offset().top;
            Module.on_mouseup(e.clientX - oleft, e.clientY - otop);
            Renderer.redraw();
        }
    });
    canvas.addEventListener("touchend", function(){
        Module.on_mouseup(0, 0);
        Renderer.redraw();
        pinch_zoom_dist = -1.;
    });
    canvas.addEventListener("wheel", function(e){
        if(e.ctrlKey)
            event.preventDefault();//prevent zoom
        Module.on_mousewheel(e.deltaY < 0,
            15., e.offsetX, e.offsetY);
        Renderer.redraw();
        ViewConfig.updateViewBounds();
    });
};
let onInit = function() {
    setupHandlers()
    glfwPatch();

    // Hide marker if mouse somehow enters it
    $('#marker').mouseenter(function() {
        $('#marker').css('opacity', '0');
        setTimeout(
            function() {$('#marker').css('display', 'none');}, 200)
    });

    // View
    ViewConfig.init();
    // View toggle
    $('#view-toggle').click(function() {
        if ($('#view-config').css('display') ===  'block') {
            $('#view-config').css('opacity', '0');
            $('#view-toggle').html("View <ion-icon name='caret-down'  class='toggle-caret'></ion-icon>");
            $('#view-toggle').removeClass('active');
            setTimeout(
                function() {$('#view-config').css('display', 'none');}, 500)
        } else {
            $('#view-config').css('display', 'block');
            $('#view-toggle').html("View <ion-icon name='caret-up'  class='toggle-caret'></ion-icon>");
            $('#view-toggle').addClass('active');
            setTimeout(
                function() {$('#view-config').css('opacity', '1');}, 50)
        }
    });

    // Shell
    $('#open-shell').click(Shell.toggle);

    // IO
    $('#export-btn').click(function() {
        var now_str = new Date().toLocaleString().replace(/ /g, '_').replace(',', '');
        Util.download('nivalis_' +now_str + '.json', Module.export_json());
    });
    $('#import-btn').click(function() {
        var err_txt = $('#import-error');
        err_txt.text('');
        var files = $('#import-file')[0].files;
        if (files.length === 0) return;

        var reader = new FileReader();
        reader.onload = function(event) {
            var content = event.target.result;
            try {
                var _ = JSON.parse(content);
            } catch (e) {
                err_txt.text('File is not in JSON format');
                // Force dropdown open
                setTimeout(function() {
                    if ($('#import-file-dropdown').is(":hidden")){
                        $('#import-dropdown-toggle').dropdown('toggle');
                    }
                }, 50);
                return;
            }
            $('#import-file').siblings(".custom-file-label")
                .html('Import json success');
            Module.import_json(content);
            if (Shell.initialized) {
                Shell.con.info("Import JSON success");
            }
            resync();
            Module.redraw();
        };
        reader.readAsText(files[0]);
    });

    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    // Sliders
    Sliders.init();

    // Sidebar resizing
    var sbar_drag_x, sbar_drag_y;
    var sbar_drag = false;
    var sidebar_resize = function(e) {
        if (sbar_drag === true) {
            let touch = e.type == 'touchmove';
            if (touch && e.touches.length == 0) return;
            let x = touch ? e.touches[0].screenX : e.pageX;
            let y = touch ? e.touches[0].screenY : e.pageY;
            const dx = sbar_drag_x - x;
            const dy = sbar_drag_y - y;
            sbar_drag_x = x;
            sbar_drag_y = y;
            let sbar = $('#sidebar');
            let drag = $('#sidebar-dragger');
            if (drag.width() < drag.height()) {
                let new_wid = Math.min(
                    Math.max(sbar.width() - dx,
                        Math.max(150, window.innerWidth * 0.1)),
                    window.innerWidth - 50);
                sbar.css('min-width', new_wid);
                sbar.css('max-width', new_wid);
            } else {
                let new_hi = Math.min(
                    Math.max(sbar.height() + dy, 0),
                    window.innerHeight - 150);
                sbar.css('min-height', new_hi);
                sbar.css('max-height', new_hi);
            }
            onResizeCanvas();
            if (touch) e.preventDefault();
        }
    };
    $(document).on('mousemove', sidebar_resize);
    $('#sidebar-dragger').on('touchmove', sidebar_resize);
    $('#sidebar-dragger').on('mousedown touchstart', function(e) {
        let touch = e.type == 'touchstart';
        if (touch && e.touches.length == 0) return;
        sbar_drag_x = touch ? e.touches[0].screenX : e.pageX;
        sbar_drag_y = touch ? e.touches[0].screenY : e.pageY;
        if (touch) e.preventDefault();
        if ($('#sidebar').hasClass('collapse')) {
            $('#sidebar').removeClass('collapse');
            $('#sidebar-dragger').removeClass('minimize');
            onResizeCanvas();
        } else {
            sbar_drag = true;
        }
    });
    $('#sidebar-dragger').dblclick(function() {
        if (!$('#sidebar').hasClass('collapse')) {
            let drag = $('#sidebar-dragger');
            if (drag.width() < drag.height()) {
                $('#sidebar').addClass('collapse');
                $('#sidebar-dragger').addClass('minimize');
                onResizeCanvas();
            }
        }
    });
    $('#navbar-collapse-toggler').click(function(){
        window.setTimeout(function() {
            onResizeCanvas();
        }, 400);
    });
    $(document).on('mouseup touchend', function(){
        sbar_drag = false;
        pinch_zoom_dist = -1.;
    });
    if (Util.is_mobile) {
        Module.set_marker_clickable_radius(16);
        Module.set_passive_marker_click_drag_view(true);
    } else {
        Module.set_marker_clickable_radius(10);
        Module.set_passive_marker_click_drag_view(false);
    }

    var MQ = MathQuill.getInterface(2);

    MQ.config({
        // spaceBehavesLikeTab: true,
        leftRightIntoCmdGoes: 'up',
        restrictMismatchedBrackets: true,
        sumStartsWithNEquals: true,
        supSubsRequireOperand: true,
        charsThatBreakOutOfSupSub: '=<>',
        autoSubscriptNumerals: true,
        autoCommands: 'pi Pi theta vartheta Theta alpha beta gamma Gamma delta Delta zeta psi Psi phi Phi mu nu epsilon varepsilon eta kappa Kappa chi omega Omega tau Tau rho varrho iota xi Xi sqrt nthroot sum prod int choose binom and or',
        autoOperatorNames: 'sin cos tan arcsin arccos arctan sinh cosh tanh sgn exp log ln mod gcd lcm floor ceil round poly fpoly Fpoly rect frect Frect circ fcirc Fcirc ellipse fellipse Fellipse text lgamma fact ifact rifact fafact at',
        maxDepth: 1,
        // substituteTextarea: function() {
        //     return document.createElement('textarea');
        // },
    });
    let first_view_example = true;
    $('#example-dropdown-toggle').click(function() {
        if (!first_view_example) return;
        first_view_example = false;
        setTimeout(function() {
            // Initialize examples the first time
            // dropdown is opened
            // Must be after open, since o.w.
            // paren heights will be wrong
            $('.example').each(function() {
                if (!$(this).hasClass('nomath')) {
                    let m = MQ.StaticMath(this);
                    if (this.hasAttribute('expr')) {
                        m.latex($(this).attr('expr'));
                    }
                }
            });
        }, 1);
    });
    // Fix weird disappearing parentheses
    // $('.mq-paren').css('transform','scale(1.2, 1.2)')
    $('.example').click(function(){
        let $this = $(this);
        let fidx = FuncEdit.func_names.length-1;
        if (FuncEdit.func_names.length == 2 &&
            Module.get_func_expr(0).trim() === '') {
            fidx = 0;
        }
        if (this.hasAttribute('load')) {
            Util.getFile($this.attr("load"), function(err, data) {
                if (err === null) {
                    Module.import_json(data);
                    resync();
                    Module.redraw();
                } else {
                    console.log("Failed to retrieve sample JSON file");
                }
            });
        } else {
            let fn = FuncEdit.func_names[fidx];
            let mf = FuncEdit.func_mfields[fidx];
            let expr;
            if (this.hasAttribute('expr')) {
                expr = $(this).attr('expr');
            } else {
                expr = $this.children('.mq-selectable').text();
            }
            expr = expr.substr(1, expr.length - 2);
            mf.latex(expr.trim());
            if (this.hasAttribute('tmax')) {
                $('#function-tmax-' + fn).val($this.attr('tmax'));
                Module.set_func_tmax(fidx, Number.parseFloat($this.attr('tmax')));
            }
            if (this.hasAttribute('tmin')) {
                $('#function-tmin-' + fn).val($this.attr('tmin'));
                Module.set_func_tmin(fidx, Number.parseFloat($this.attr('tmin')));
            }
            let expr_ele = $('#function-expr-' + fn);
            expr_ele.mousedown();
            expr_ele.mouseup();
            FuncEdit.reparse(fn);
            Module.redraw();
        }
    });

    // Saves
    Saves.init();

    // Close loading screen
    document.getElementById("loading").style.opacity = '0.0';
        document.getElementById("loading").style.display =
            'none';
    window.setTimeout(function() {
        document.getElementById("loading").style.display =
            'none';
    }, 300);
    onResizeCanvas();
};
var cppNotifyFocusEditor = function(k) {
    // C++ side wants to focus editor
    // (user interaction with canvas/keyboard entry)
    setTimeout(function() {
        $('#function-expr-f' + k).focus();
    }, 250);
};

var cppNotifyMarker = function(x, y) {
    // Marker 'may' have changed
    var marker_text = Module.get_marker_text();
    var canvas_off = $('#canvas').offset();
    if(marker_text.length === 0) {
        if ($('#marker').css('display') === 'block') {
            $('#marker').css('opacity', '0');
            setTimeout(
                function() {$('#marker').css('display', 'none');}, 200)
        }
    } else {
        $('#marker').css('top', canvas_off.top + y +
                         (Util.is_mobile ? -70 : 0));
        $('#marker').css('left', canvas_off.left + x +
                         (Util.is_mobile ? -160 : 0));
        $('#marker').text(marker_text);
        if ($('#marker').css('display') === 'none') {
            $('#marker').css('display', 'block');
            $('#marker').css('opacity', '0');
            setTimeout(
                function() {$('#marker').css('opacity', '1');}, 50)
        }
    }
};

var cppNotifyAnimSlider = function() {
    // Slider animation step occurred, need to update GUI
    for (var i = 0; i < Module.num_sliders(); i++) {
        if (Module.slider_animation_dir(i) != 0) {
            $('#slider-sli-' +
                Sliders.slider_ids[i]).val(Module.get_slider_val(i));
        }
    }
};

var cppNotifyFuncErrorChanged = function() {
    // Function error 'may' have changed
    $('#function-error').text(Module.get_func_error());
};

var cppNotifySliderErrorChanged = function() {
    // Slider error 'may' have changed
    $('#slider-error').text(Module.get_slider_error());
};

var customWidth = -1;
var fromXSMode = false;
var onResizeCanvas = function() {
    // Handle window resize
    let xs = $('#main-wrapper').css('flex-direction') !== 'row';
    let new_wid, new_hi;
    if (xs) {
        new_wid = window.innerWidth;
        let total_height = (window.innerHeight - $('#header').outerHeight());
        new_hi = total_height - $('#sidebar').height()
                    - $('#sidebar-dragger').height();
        $('#sidebar').css('min-width', new_wid);
        $('#sidebar').css('max-width', new_wid);
    } else {
        new_wid = window.innerWidth - $('#sidebar').outerWidth() -
            $('#sidebar-dragger').outerWidth();
        if ($('#sidebar').hasClass('collapse')) {
            new_wid += $('#sidebar').outerWidth();
        }
        new_hi = window.innerHeight - $('#header').outerHeight();
        $('#sidebar').css('min-height', new_hi);
        $('#sidebar').css('max-height', new_hi);
        if (customWidth >= 0 && fromXSMode) {
            $('#sidebar').css('min-width', customWidth);
            $('#sidebar').css('max-width', customWidth);
        }
        else customWidth = $('#sidebar').width();
    }
    fromXSMode = xs;
    let canvas = document.getElementById("canvas");
    if (canvas.width != new_wid) {
        canvas.width = new_wid;
    }
    if (canvas.height != new_hi) {
        canvas.height = new_hi;
    }
    Module.redraw();
};

var Module = {
    preRun: [],
    postRun: [],
    print: (function() {})(),
    printErr: function() {},
    canvas: (function() {
        var canvas = document.getElementById('canvas');
        canvas.addEventListener("webglcontextlost", function(e) {
            e.preventDefault(); }, false);
        return canvas;
    })(),
    setStatus: function() {},
    totalDependencies: 0,
    monitorRunDependencies: function() {},
    onRuntimeInitialized: function() { $(document).ready(onInit); }
};
var Module=typeof Module!=="undefined"?Module:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require("path").dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=function shell_read(filename,binary){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);return nodeFS["readFileSync"](filename,binary?null:"utf8")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(typeof module!=="undefined"){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",abort);quit_=function(status){process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){read_=function shell_read(f){return read(f)}}readBinary=function readBinary(f){var data;if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){arguments_=scriptArgs}else if(typeof arguments!="undefined"){arguments_=arguments}if(typeof quit==="function"){quit_=function(status){quit(status)}}if(typeof print!=="undefined"){if(typeof console==="undefined")console={};console.log=print;console.warn=console.error=typeof printErr!=="undefined"?printErr:print}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var STACK_ALIGN=16;function dynamicAlloc(size){var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=ret+size+15&-16;HEAP32[DYNAMICTOP_PTR>>2]=end;return ret}function getNativeTypeSize(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return 4}else if(type[0]==="i"){var bits=Number(type.substr(1));assert(bits%8===0,"getNativeTypeSize invalid bits "+bits+", type "+type);return bits/8}else{return 0}}}}function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;err(text)}}function convertJsFunctionToWasm(func,sig){if(typeof WebAssembly.Function==="function"){var typeNames={"i":"i32","j":"i64","f":"f32","d":"f64"};var type={parameters:[],results:sig[0]=="v"?[]:[typeNames[sig[0]]]};for(var i=1;i<sig.length;++i){type.parameters.push(typeNames[sig[i]])}return new WebAssembly.Function(type,func)}var typeSection=[1,0,1,96];var sigRet=sig.slice(0,1);var sigParam=sig.slice(1);var typeCodes={"i":127,"j":126,"f":125,"d":124};typeSection.push(sigParam.length);for(var i=0;i<sigParam.length;++i){typeSection.push(typeCodes[sigParam[i]])}if(sigRet=="v"){typeSection.push(0)}else{typeSection=typeSection.concat([1,typeCodes[sigRet]])}typeSection[1]=typeSection.length-2;var bytes=new Uint8Array([0,97,115,109,1,0,0,0].concat(typeSection,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0]));var module=new WebAssembly.Module(bytes);var instance=new WebAssembly.Instance(module,{"e":{"f":func}});var wrappedFunc=instance.exports["f"];return wrappedFunc}var freeTableIndexes=[];var functionsInTableMap;function addFunctionWasm(func,sig){var table=wasmTable;if(!functionsInTableMap){functionsInTableMap=new WeakMap;for(var i=0;i<table.length;i++){var item=table.get(i);if(item){functionsInTableMap.set(item,i)}}}if(functionsInTableMap.has(func)){return functionsInTableMap.get(func)}var ret;if(freeTableIndexes.length){ret=freeTableIndexes.pop()}else{ret=table.length;try{table.grow(1)}catch(err){if(!(err instanceof RangeError)){throw err}throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}}try{table.set(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);table.set(ret,wrapped)}functionsInTableMap.set(func,ret);return ret}function removeFunctionWasm(index){functionsInTableMap.delete(wasmTable.get(index));freeTableIndexes.push(index)}var funcWrappers={};function getFuncWrapper(func,sig){if(!func)return;assert(sig);if(!funcWrappers[sig]){funcWrappers[sig]={}}var sigCache=funcWrappers[sig];if(!sigCache[func]){if(sig.length===1){sigCache[func]=function dynCall_wrapper(){return dynCall(sig,func)}}else if(sig.length===2){sigCache[func]=function dynCall_wrapper(arg){return dynCall(sig,func,[arg])}}else{sigCache[func]=function dynCall_wrapper(){return dynCall(sig,func,Array.prototype.slice.call(arguments))}}}return sigCache[func]}function dynCall(sig,ptr,args){if(args&&args.length){return Module["dynCall_"+sig].apply(null,[ptr].concat(args))}else{return Module["dynCall_"+sig].call(null,ptr)}}var tempRet0=0;var setTempRet0=function(value){tempRet0=value};var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime;if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(typeof WebAssembly!=="object"){err("no native wasm support detected")}function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=1?tempDouble>0?(Math_min(+Math_floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math_ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}var wasmMemory;var wasmTable=new WebAssembly.Table({"initial":611,"maximum":611+0,"element":"anyfunc"});var ABORT=false;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];assert(func,"Cannot call unknown function "+ident+", make sure it is exported");return func}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string")return UTF8ToString(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);ret=convertReturnValue(ret);if(stack!==0)stackRestore(stack);return ret}var ALLOC_NORMAL=0;var ALLOC_NONE=3;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[_malloc,stackAlloc,dynamicAlloc][allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var stop;ptr=ret;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heap,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heap[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heap.subarray&&UTF8Decoder){return UTF8Decoder.decode(heap.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=heap[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heap[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heap[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heap[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127)++len;else if(u<=2047)len+=2;else if(u<=65535)len+=3;else len+=4}return len}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function UTF16ToString(ptr,maxBytesToRead){var endPtr=ptr;var idx=endPtr>>1;var maxIdx=idx+maxBytesToRead/2;while(!(idx>=maxIdx)&&HEAPU16[idx])++idx;endPtr=idx<<1;if(endPtr-ptr>32&&UTF16Decoder){return UTF16Decoder.decode(HEAPU8.subarray(ptr,endPtr))}else{var i=0;var str="";while(1){var codeUnit=HEAP16[ptr+i*2>>1];if(codeUnit==0||i==maxBytesToRead/2)return str;++i;str+=String.fromCharCode(codeUnit)}}}function stringToUTF16(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr}function lengthBytesUTF16(str){return str.length*2}function UTF32ToString(ptr,maxBytesToRead){var i=0;var str="";while(!(i>=maxBytesToRead/4)){var utf32=HEAP32[ptr+i*4>>2];if(utf32==0)break;++i;if(utf32>=65536){var ch=utf32-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}else{str+=String.fromCharCode(utf32)}}return str}function stringToUTF32(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343){var trailSurrogate=str.charCodeAt(++i);codeUnit=65536+((codeUnit&1023)<<10)|trailSurrogate&1023}HEAP32[outPtr>>2]=codeUnit;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr}function lengthBytesUTF32(str){var len=0;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343)++i;len+=4}return len}function allocateUTF8OnStack(str){var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8Array(str,HEAP8,ret,size);return ret}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var WASM_PAGE_SIZE=65536;function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var STACK_BASE=5457696,DYNAMIC_BASE=5457696,DYNAMICTOP_PTR=214656;var INITIAL_INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_INITIAL_MEMORY/WASM_PAGE_SIZE,"maximum":2147483648/WASM_PAGE_SIZE})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_INITIAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.init.initialized)FS.init();TTY.init();callRuntimeCallbacks(__ATINIT__)}function preMain(){FS.ignorePermissions=false;callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var Math_abs=Math.abs;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_min=Math.min;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";out(what);err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";throw new WebAssembly.RuntimeError(what)}function hasPrefix(str,prefix){return String.prototype.startsWith?str.startsWith(prefix):str.indexOf(prefix)===0}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return hasPrefix(filename,dataURIPrefix)}var fileURIPrefix="file://";function isFileURI(filename){return hasPrefix(filename,fileURIPrefix)}var wasmBinaryFile="nivplot.wasm?2281391766944169";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(){try{if(wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(wasmBinaryFile)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&typeof fetch==="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary()})}return new Promise(function(resolve,reject){resolve(getBinary())})}function createWasm(){var info={"env":asmLibraryArg,"wasi_snapshot_preview1":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiatedSource(output){receiveInstance(output["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch==="function"){fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}var tempDouble;var tempI64;function canvas_get_height(){return Module.canvas.height}function canvas_get_width(){return Module.canvas.width}function get_ver(){return nivalis_ver_num}function notify_js_anim_sliders(){cppNotifyAnimSlider()}function notify_js_focus_editor(x){cppNotifyFocusEditor(x)}function notify_js_func_error_changed(){cppNotifyFuncErrorChanged()}function notify_js_marker(x,y){cppNotifyMarker(x,y)}function notify_js_slider_error_changed(){cppNotifySliderErrorChanged()}__ATINIT__.push({func:function(){___wasm_call_ctors()}});function demangle(func){return func}function demangleAll(text){var regex=/\b_Z[\w\d_]+/g;return text.replace(regex,function(x){var y=demangle(x);return x===y?x:y+" ["+x+"]"})}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function stackTrace(){var js=jsStackTrace();if(Module["extraStackTrace"])js+="\n"+Module["extraStackTrace"]();return demangleAll(js)}function ___cxa_allocate_exception(size){return _malloc(size)}function _atexit(func,arg){__ATEXIT__.unshift({func:func,arg:arg})}function ___cxa_atexit(a0,a1){return _atexit(a0,a1)}function ___cxa_thread_atexit(a0,a1){return _atexit(a0,a1)}var ___exception_infos={};var ___exception_last=0;function __ZSt18uncaught_exceptionv(){return __ZSt18uncaught_exceptionv.uncaught_exceptions>0}function ___cxa_throw(ptr,type,destructor){___exception_infos[ptr]={ptr:ptr,adjusted:[ptr],type:type,destructor:destructor,refcount:0,caught:false,rethrown:false};___exception_last=ptr;if(!("uncaught_exception"in __ZSt18uncaught_exceptionv)){__ZSt18uncaught_exceptionv.uncaught_exceptions=1}else{__ZSt18uncaught_exceptionv.uncaught_exceptions++}throw ptr}function setErrNo(value){HEAP32[___errno_location()>>2]=value;return value}function ___map_file(pathname,size){setErrNo(63);return-1}var PATH={splitPath:function(filename){var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:function(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:function(path){var isAbsolute=path.charAt(0)==="/",trailingSlash=path.substr(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:function(path){var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir},basename:function(path){if(path==="/")return"/";var lastSlash=path.lastIndexOf("/");if(lastSlash===-1)return path;return path.substr(lastSlash+1)},extname:function(path){return PATH.splitPath(path)[3]},join:function(){var paths=Array.prototype.slice.call(arguments,0);return PATH.normalize(paths.join("/"))},join2:function(l,r){return PATH.normalize(l+"/"+r)}};var PATH_FS={resolve:function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:FS.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/"}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:function(from,to){from=PATH_FS.resolve(from).substr(1);to=PATH_FS.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var TTY={ttys:[],init:function(){},shutdown:function(){},register:function(dev,ops){TTY.ttys[dev]={input:[],output:[],ops:ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open:function(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close:function(stream){stream.tty.ops.flush(stream.tty)},flush:function(stream){stream.tty.ops.flush(stream.tty)},read:function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead},write:function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.timestamp=Date.now()}return i}},default_tty_ops:{get_char:function(tty){if(!tty.input.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=Buffer.alloc?Buffer.alloc(BUFSIZE):new Buffer(BUFSIZE);var bytesRead=0;try{bytesRead=nodeFS.readSync(process.stdin.fd,buf,0,BUFSIZE,null)}catch(e){if(e.toString().indexOf("EOF")!=-1)bytesRead=0;else throw e}if(bytesRead>0){result=buf.slice(0,bytesRead).toString("utf-8")}else{result=null}}else if(typeof window!="undefined"&&typeof window.prompt=="function"){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else if(typeof readline=="function"){result=readline();if(result!==null){result+="\n"}}if(!result){return null}tty.input=intArrayFromString(result,true)}return tty.input.shift()},put_char:function(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}},flush:function(tty){if(tty.output&&tty.output.length>0){out(UTF8ArrayToString(tty.output,0));tty.output=[]}}},default_tty1_ops:{put_char:function(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}},flush:function(tty){if(tty.output&&tty.output.length>0){err(UTF8ArrayToString(tty.output,0));tty.output=[]}}}};var MEMFS={ops_table:null,mount:function(mount){return MEMFS.createNode(null,"/",16384|511,0)},createNode:function(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}if(!MEMFS.ops_table){MEMFS.ops_table={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,allocate:MEMFS.stream_ops.allocate,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}}}var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.timestamp=Date.now();if(parent){parent.contents[name]=node}return node},getFileDataAsRegularArray:function(node){if(node.contents&&node.contents.subarray){var arr=[];for(var i=0;i<node.usedBytes;++i)arr.push(node.contents[i]);return arr}return node.contents},getFileDataAsTypedArray:function(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage:function(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0);return},resizeFileStorage:function(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0;return}if(!node.contents||node.contents.subarray){var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize;return}if(!node.contents)node.contents=[];if(node.contents.length>newSize)node.contents.length=newSize;else while(node.contents.length<newSize)node.contents.push(0);node.usedBytes=newSize},node_ops:{getattr:function(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.timestamp);attr.mtime=new Date(node.timestamp);attr.ctime=new Date(node.timestamp);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr:function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup:function(parent,name){throw FS.genericErrors[44]},mknod:function(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename:function(old_node,new_dir,new_name){if(FS.isDir(old_node.mode)){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}}delete old_node.parent.contents[old_node.name];old_node.name=new_name;new_dir.contents[new_name]=old_node;old_node.parent=new_dir},unlink:function(parent,name){delete parent.contents[name]},rmdir:function(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name]},readdir:function(node){var entries=[".",".."];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key)}return entries},symlink:function(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink:function(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read:function(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write:function(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.timestamp=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray)node.contents.set(buffer.subarray(offset,offset+length),position);else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek:function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},allocate:function(stream,offset,length){MEMFS.expandFileStorage(stream.node,offset+length);stream.node.usedBytes=Math.max(stream.node.usedBytes,offset+length)},mmap:function(stream,buffer,offset,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents.buffer===buffer.buffer){allocated=false;ptr=contents.byteOffset}else{if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}allocated=true;var fromHeap=buffer.buffer==HEAP8.buffer;ptr=_malloc(length);if(!ptr){throw new FS.ErrnoError(48)}(fromHeap?HEAP8:buffer).set(contents,ptr)}return{ptr:ptr,allocated:allocated}},msync:function(stream,buffer,offset,length,mmapFlags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(mmapFlags&2){return 0}var bytesWritten=MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(e){if(!(e instanceof FS.ErrnoError))throw e+" : "+stackTrace();return setErrNo(e.errno)},lookupPath:function(path,opts){path=PATH_FS.resolve(FS.cwd(),path);opts=opts||{};if(!path)return{path:"",node:null};var defaults={follow_mount:true,recurse_count:0};for(var key in defaults){if(opts[key]===undefined){opts[key]=defaults[key]}}if(opts.recurse_count>8){throw new FS.ErrnoError(32)}var parts=PATH.normalizeArray(path.split("/").filter(function(p){return!!p}),false);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}current=FS.lookupNode(current,parts[i]);current_path=PATH.join2(current_path,parts[i]);if(FS.isMountpoint(current)){if(!islast||islast&&opts.follow_mount){current=current.mounted.root}}if(!islast||opts.follow){var count=0;while(FS.isLink(current.mode)){var link=FS.readlink(current_path);current_path=PATH_FS.resolve(PATH.dirname(current_path),link);var lookup=FS.lookupPath(current_path,{recurse_count:opts.recurse_count});current=lookup.node;if(count++>40){throw new FS.ErrnoError(32)}}}}return{path:current_path,node:current}},getPath:function(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?mount+"/"+path:mount+path}path=path?node.name+"/"+path:node.name;node=node.parent}},hashName:function(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode:function(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode:function(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode:function(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode,parent)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode:function(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode:function(node){FS.hashRemoveNode(node)},isRoot:function(node){return node===node.parent},isMountpoint:function(node){return!!node.mounted},isFile:function(mode){return(mode&61440)===32768},isDir:function(mode){return(mode&61440)===16384},isLink:function(mode){return(mode&61440)===40960},isChrdev:function(mode){return(mode&61440)===8192},isBlkdev:function(mode){return(mode&61440)===24576},isFIFO:function(mode){return(mode&61440)===4096},isSocket:function(mode){return(mode&49152)===49152},flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(str){var flags=FS.flagModes[str];if(typeof flags==="undefined"){throw new Error("Unknown file open mode: "+str)}return flags},flagsToPermissionString:function(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions:function(node,perms){if(FS.ignorePermissions){return 0}if(perms.indexOf("r")!==-1&&!(node.mode&292)){return 2}else if(perms.indexOf("w")!==-1&&!(node.mode&146)){return 2}else if(perms.indexOf("x")!==-1&&!(node.mode&73)){return 2}return 0},mayLookup:function(dir){var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate:function(dir,name){try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete:function(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else{if(FS.isDir(node.mode)){return 31}}return 0},mayOpen:function(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&512){return 31}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))},MAX_OPEN_FDS:4096,nextfd:function(fd_start,fd_end){fd_start=fd_start||0;fd_end=fd_end||FS.MAX_OPEN_FDS;for(var fd=fd_start;fd<=fd_end;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStream:function(fd){return FS.streams[fd]},createStream:function(stream,fd_start,fd_end){if(!FS.FSStream){FS.FSStream=function(){};FS.FSStream.prototype={object:{get:function(){return this.node},set:function(val){this.node=val}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}}}var newStream=new FS.FSStream;for(var p in stream){newStream[p]=stream[p]}stream=newStream;var fd=FS.nextfd(fd_start,fd_end);stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream:function(fd){FS.streams[fd]=null},chrdev_stream_ops:{open:function(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;if(stream.stream_ops.open){stream.stream_ops.open(stream)}},llseek:function(){throw new FS.ErrnoError(70)}},major:function(dev){return dev>>8},minor:function(dev){return dev&255},makedev:function(ma,mi){return ma<<8|mi},registerDevice:function(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:function(dev){return FS.devices[dev]},getMounts:function(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push.apply(check,m.mounts)}return mounts},syncfs:function(populate,callback){if(typeof populate==="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err("warning: "+FS.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work")}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}mounts.forEach(function(mount){if(!mount.type.syncfs){return done(null)}mount.type.syncfs(mount,populate,done)})},mount:function(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type:type,opts:opts,mountpoint:mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount:function(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);Object.keys(FS.nameTable).forEach(function(hash){var current=FS.nameTable[hash];while(current){var next=current.name_next;if(mounts.indexOf(current.mount)!==-1){FS.destroyNode(current)}current=next}});node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup:function(parent,name){return parent.node_ops.lookup(parent,name)},mknod:function(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name||name==="."||name===".."){throw new FS.ErrnoError(28)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},create:function(path,mode){mode=mode!==undefined?mode:438;mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir:function(path,mode){mode=mode!==undefined?mode:511;mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree:function(path,mode){var dirs=path.split("/");var d="";for(var i=0;i<dirs.length;++i){if(!dirs[i])continue;d+="/"+dirs[i];try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev:function(path,mode,dev){if(typeof dev==="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink:function(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename:function(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;try{lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node}catch(e){throw new FS.ErrnoError(10)}if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}try{if(FS.trackingDelegate["willMovePath"]){FS.trackingDelegate["willMovePath"](old_path,new_path)}}catch(e){err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: "+e.message)}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name)}catch(e){throw e}finally{FS.hashAddNode(old_node)}try{if(FS.trackingDelegate["onMovePath"])FS.trackingDelegate["onMovePath"](old_path,new_path)}catch(e){err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: "+e.message)}},rmdir:function(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}try{if(FS.trackingDelegate["willDeletePath"]){FS.trackingDelegate["willDeletePath"](path)}}catch(e){err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: "+e.message)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node);try{if(FS.trackingDelegate["onDeletePath"])FS.trackingDelegate["onDeletePath"](path)}catch(e){err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: "+e.message)}},readdir:function(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node.node_ops.readdir){throw new FS.ErrnoError(54)}return node.node_ops.readdir(node)},unlink:function(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}try{if(FS.trackingDelegate["willDeletePath"]){FS.trackingDelegate["willDeletePath"](path)}}catch(e){err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: "+e.message)}parent.node_ops.unlink(parent,name);FS.destroyNode(node);try{if(FS.trackingDelegate["onDeletePath"])FS.trackingDelegate["onDeletePath"](path)}catch(e){err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: "+e.message)}},readlink:function(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return PATH_FS.resolve(FS.getPath(link.parent),link.node_ops.readlink(link))},stat:function(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;if(!node){throw new FS.ErrnoError(44)}if(!node.node_ops.getattr){throw new FS.ErrnoError(63)}return node.node_ops.getattr(node)},lstat:function(path){return FS.stat(path,true)},chmod:function(path,mode,dontFollow){var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{mode:mode&4095|node.mode&~4095,timestamp:Date.now()})},lchmod:function(path,mode){FS.chmod(path,mode,true)},fchmod:function(fd,mode){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}FS.chmod(stream.node,mode)},chown:function(path,uid,gid,dontFollow){var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{timestamp:Date.now()})},lchown:function(path,uid,gid){FS.chown(path,uid,gid,true)},fchown:function(fd,uid,gid){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}FS.chown(stream.node,uid,gid)},truncate:function(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}node.node_ops.setattr(node,{size:len,timestamp:Date.now()})},ftruncate:function(fd,len){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.truncate(stream.node,len)},utime:function(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;node.node_ops.setattr(node,{timestamp:Math.max(atime,mtime)})},open:function(path,flags,mode,fd_start,fd_end){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags==="string"?FS.modeStringToFlags(flags):flags;mode=typeof mode==="undefined"?438:mode;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;if(typeof path==="object"){node=path}else{path=PATH.normalize(path);try{var lookup=FS.lookupPath(path,{follow:!(flags&131072)});node=lookup.node}catch(e){}}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else{node=FS.mknod(path,mode,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node:node,path:FS.getPath(node),flags:flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false},fd_start,fd_end);if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(Module["logReadFiles"]&&!(flags&1)){if(!FS.readFiles)FS.readFiles={};if(!(path in FS.readFiles)){FS.readFiles[path]=1;err("FS.trackingDelegate error on read file: "+path)}}try{if(FS.trackingDelegate["onOpenFile"]){var trackingFlags=0;if((flags&2097155)!==1){trackingFlags|=FS.tracking.openFlags.READ}if((flags&2097155)!==0){trackingFlags|=FS.tracking.openFlags.WRITE}FS.trackingDelegate["onOpenFile"](path,trackingFlags)}}catch(e){err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: "+e.message)}return stream},close:function(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed:function(stream){return stream.fd===null},llseek:function(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read:function(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!=="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write:function(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!=="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;try{if(stream.path&&FS.trackingDelegate["onWriteToFile"])FS.trackingDelegate["onWriteToFile"](stream.path)}catch(e){err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: "+e.message)}return bytesWritten},allocate:function(stream,offset,length){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(offset<0||length<=0){throw new FS.ErrnoError(28)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(!FS.isFile(stream.node.mode)&&!FS.isDir(stream.node.mode)){throw new FS.ErrnoError(43)}if(!stream.stream_ops.allocate){throw new FS.ErrnoError(138)}stream.stream_ops.allocate(stream,offset,length)},mmap:function(stream,buffer,offset,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}return stream.stream_ops.mmap(stream,buffer,offset,length,position,prot,flags)},msync:function(stream,buffer,offset,length,mmapFlags){if(!stream||!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},munmap:function(stream){return 0},ioctl:function(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile:function(path,opts){opts=opts||{};opts.flags=opts.flags||"r";opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error('Invalid encoding type "'+opts.encoding+'"')}var ret;var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){ret=UTF8ArrayToString(buf,0)}else if(opts.encoding==="binary"){ret=buf}FS.close(stream);return ret},writeFile:function(path,data,opts){opts=opts||{};opts.flags=opts.flags||"w";var stream=FS.open(path,opts.flags,opts.mode);if(typeof data==="string"){var buf=new Uint8Array(lengthBytesUTF8(data)+1);var actualNumBytes=stringToUTF8Array(data,buf,0,buf.length);FS.write(stream,buf,0,actualNumBytes,undefined,opts.canOwn)}else if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{throw new Error("Unsupported data type")}FS.close(stream)},cwd:function(){return FS.currentPath},chdir:function(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories:function(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices:function(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:function(){return 0},write:function(stream,buffer,offset,length,pos){return length}});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var random_device;if(typeof crypto==="object"&&typeof crypto["getRandomValues"]==="function"){var randomBuffer=new Uint8Array(1);random_device=function(){crypto.getRandomValues(randomBuffer);return randomBuffer[0]}}else if(ENVIRONMENT_IS_NODE){try{var crypto_module=require("crypto");random_device=function(){return crypto_module["randomBytes"](1)[0]}}catch(e){}}else{}if(!random_device){random_device=function(){abort("random_device")}}FS.createDevice("/dev","random",random_device);FS.createDevice("/dev","urandom",random_device);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){FS.mkdir("/proc");FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount:function(){var node=FS.createNode("/proc/self","fd",16384|511,73);node.node_ops={lookup:function(parent,name){var fd=+name;var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(8);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return stream.path}}};ret.parent=ret;return ret}};return node}},{},"/proc/self/fd")},createStandardStreams:function(){if(Module["stdin"]){FS.createDevice("/dev","stdin",Module["stdin"])}else{FS.symlink("/dev/tty","/dev/stdin")}if(Module["stdout"]){FS.createDevice("/dev","stdout",null,Module["stdout"])}else{FS.symlink("/dev/tty","/dev/stdout")}if(Module["stderr"]){FS.createDevice("/dev","stderr",null,Module["stderr"])}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin","r");var stdout=FS.open("/dev/stdout","w");var stderr=FS.open("/dev/stderr","w")},ensureErrnoError:function(){if(FS.ErrnoError)return;FS.ErrnoError=function ErrnoError(errno,node){this.node=node;this.setErrno=function(errno){this.errno=errno};this.setErrno(errno);this.message="FS error"};FS.ErrnoError.prototype=new Error;FS.ErrnoError.prototype.constructor=FS.ErrnoError;[44].forEach(function(code){FS.genericErrors[code]=new FS.ErrnoError(code);FS.genericErrors[code].stack="<generic error, no stack>"})},staticInit:function(){FS.ensureErrnoError();FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={"MEMFS":MEMFS}},init:function(input,output,error){FS.init.initialized=true;FS.ensureErrnoError();Module["stdin"]=input||Module["stdin"];Module["stdout"]=output||Module["stdout"];Module["stderr"]=error||Module["stderr"];FS.createStandardStreams()},quit:function(){FS.init.initialized=false;var fflush=Module["_fflush"];if(fflush)fflush(0);for(var i=0;i<FS.streams.length;i++){var stream=FS.streams[i];if(!stream){continue}FS.close(stream)}},getMode:function(canRead,canWrite){var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode},joinPath:function(parts,forceRelative){var path=PATH.join.apply(null,parts);if(forceRelative&&path[0]=="/")path=path.substr(1);return path},absolutePath:function(relative,base){return PATH_FS.resolve(base,relative)},standardizePath:function(path){return PATH.normalize(path)},findObject:function(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(ret.exists){return ret.object}else{setErrNo(ret.error);return null}},analyzePath:function(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createFolder:function(parent,name,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(canRead,canWrite);return FS.mkdir(path,mode)},createPath:function(parent,path,canRead,canWrite){parent=typeof parent==="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){}parent=current}return current},createFile:function(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile:function(parent,name,data,canRead,canWrite,canOwn){var path=name?PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name):parent;var mode=FS.getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data==="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,"w");FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}return node},createDevice:function(parent,name,input,output){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(!!input,!!output);if(!FS.createDevice.major)FS.createDevice.major=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open:function(stream){stream.seekable=false},close:function(stream){if(output&&output.buffer&&output.buffer.length){output(10)}},read:function(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead},write:function(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.timestamp=Date.now()}return i}});return FS.mkdev(path,mode,dev)},createLink:function(parent,name,target,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);return FS.symlink(target,path)},forceLoadFile:function(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;var success=true;if(typeof XMLHttpRequest!=="undefined"){throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else if(read_){try{obj.contents=intArrayFromString(read_(obj.url),true);obj.usedBytes=obj.contents.length}catch(e){success=false}}else{throw new Error("Cannot load without read() or XMLHttpRequest.")}if(!success)setErrNo(29);return success},createLazyFile:function(parent,name,url,canRead,canWrite){function LazyUint8Array(){this.lengthKnown=false;this.chunks=[]}LazyUint8Array.prototype.get=function LazyUint8Array_get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]};LazyUint8Array.prototype.setDataGetter=function LazyUint8Array_setDataGetter(getter){this.getter=getter};LazyUint8Array.prototype.cacheLength=function LazyUint8Array_cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=function(from,to){if(from>to)throw new Error("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)throw new Error("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);if(typeof Uint8Array!="undefined")xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}else{return intArrayFromString(xhr.responseText||"",true)}};var lazyArray=this;lazyArray.setDataGetter(function(chunkNum){var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]==="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]==="undefined")throw new Error("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true};if(typeof XMLHttpRequest!=="undefined"){if(!ENVIRONMENT_IS_WORKER)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var lazyArray=new LazyUint8Array;Object.defineProperties(lazyArray,{length:{get:function(){if(!this.lengthKnown){this.cacheLength()}return this._length}},chunkSize:{get:function(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}});var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url:url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};var keys=Object.keys(node.stream_ops);keys.forEach(function(key){var fn=node.stream_ops[key];stream_ops[key]=function forceLoadLazyFile(){if(!FS.forceLoadFile(node)){throw new FS.ErrnoError(29)}return fn.apply(null,arguments)}});stream_ops.read=function stream_ops_read(stream,buffer,offset,length,position){if(!FS.forceLoadFile(node)){throw new FS.ErrnoError(29)}var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size};node.stream_ops=stream_ops;return node},createPreloadedFile:function(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish){Browser.init();var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency("cp "+fullname);function processData(byteArray){function finish(byteArray){if(preFinish)preFinish();if(!dontCreateFile){FS.createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}if(onload)onload();removeRunDependency(dep)}var handled=false;Module["preloadPlugins"].forEach(function(plugin){if(handled)return;if(plugin["canHandle"](fullname)){plugin["handle"](byteArray,fullname,finish,function(){if(onerror)onerror();removeRunDependency(dep)});handled=true}});if(!handled)finish(byteArray)}addRunDependency(dep);if(typeof url=="string"){Browser.asyncLoad(url,function(byteArray){processData(byteArray)},onerror)}else{processData(url)}},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths,onload,onerror){onload=onload||function(){};onerror=onerror||function(){};var indexedDB=FS.indexedDB();try{var openRequest=indexedDB.open(FS.DB_NAME(),FS.DB_VERSION)}catch(e){return onerror(e)}openRequest.onupgradeneeded=function openRequest_onupgradeneeded(){out("creating db");var db=openRequest.result;db.createObjectStore(FS.DB_STORE_NAME)};openRequest.onsuccess=function openRequest_onsuccess(){var db=openRequest.result;var transaction=db.transaction([FS.DB_STORE_NAME],"readwrite");var files=transaction.objectStore(FS.DB_STORE_NAME);var ok=0,fail=0,total=paths.length;function finish(){if(fail==0)onload();else onerror()}paths.forEach(function(path){var putRequest=files.put(FS.analyzePath(path).object.contents,path);putRequest.onsuccess=function putRequest_onsuccess(){ok++;if(ok+fail==total)finish()};putRequest.onerror=function putRequest_onerror(){fail++;if(ok+fail==total)finish()}});transaction.onerror=onerror};openRequest.onerror=onerror},loadFilesFromDB:function(paths,onload,onerror){onload=onload||function(){};onerror=onerror||function(){};var indexedDB=FS.indexedDB();try{var openRequest=indexedDB.open(FS.DB_NAME(),FS.DB_VERSION)}catch(e){return onerror(e)}openRequest.onupgradeneeded=onerror;openRequest.onsuccess=function openRequest_onsuccess(){var db=openRequest.result;try{var transaction=db.transaction([FS.DB_STORE_NAME],"readonly")}catch(e){onerror(e);return}var files=transaction.objectStore(FS.DB_STORE_NAME);var ok=0,fail=0,total=paths.length;function finish(){if(fail==0)onload();else onerror()}paths.forEach(function(path){var getRequest=files.get(path);getRequest.onsuccess=function getRequest_onsuccess(){if(FS.analyzePath(path).exists){FS.unlink(path)}FS.createDataFile(PATH.dirname(path),PATH.basename(path),getRequest.result,true,true,true);ok++;if(ok+fail==total)finish()};getRequest.onerror=function getRequest_onerror(){fail++;if(ok+fail==total)finish()}});transaction.onerror=onerror};openRequest.onerror=onerror}};var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd,path){if(path[0]!=="/"){var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=FS.getStream(dirfd);if(!dirstream)throw new FS.ErrnoError(8);dir=dirstream.path}path=PATH.join2(dir,path)}return path},doStat:function(func,path,buf){try{var stat=func(path)}catch(e){if(e&&e.node&&PATH.normalize(path)!==PATH.normalize(FS.getPath(e.node))){return-54}throw e}HEAP32[buf>>2]=stat.dev;HEAP32[buf+4>>2]=0;HEAP32[buf+8>>2]=stat.ino;HEAP32[buf+12>>2]=stat.mode;HEAP32[buf+16>>2]=stat.nlink;HEAP32[buf+20>>2]=stat.uid;HEAP32[buf+24>>2]=stat.gid;HEAP32[buf+28>>2]=stat.rdev;HEAP32[buf+32>>2]=0;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math_abs(tempDouble)>=1?tempDouble>0?(Math_min(+Math_floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math_ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAP32[buf+48>>2]=4096;HEAP32[buf+52>>2]=stat.blocks;HEAP32[buf+56>>2]=stat.atime.getTime()/1e3|0;HEAP32[buf+60>>2]=0;HEAP32[buf+64>>2]=stat.mtime.getTime()/1e3|0;HEAP32[buf+68>>2]=0;HEAP32[buf+72>>2]=stat.ctime.getTime()/1e3|0;HEAP32[buf+76>>2]=0;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math_abs(tempDouble)>=1?tempDouble>0?(Math_min(+Math_floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math_ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+80>>2]=tempI64[0],HEAP32[buf+84>>2]=tempI64[1];return 0},doMsync:function(addr,stream,len,flags,offset){var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},doMkdir:function(path,mode){path=PATH.normalize(path);if(path[path.length-1]==="/")path=path.substr(0,path.length-1);FS.mkdir(path,mode,0);return 0},doMknod:function(path,mode,dev){switch(mode&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}FS.mknod(path,mode,dev);return 0},doReadlink:function(path,buf,bufsize){if(bufsize<=0)return-28;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len},doAccess:function(path,amode){if(amode&~7){return-28}var node;var lookup=FS.lookupPath(path,{follow:true});node=lookup.node;if(!node){return-44}var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-2}return 0},doDup:function(path,flags,suggestFD){var suggest=FS.getStream(suggestFD);if(suggest)FS.close(suggest);return FS.open(path,flags,0,suggestFD,suggestFD).fd},doReadv:function(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break}return ret},doWritev:function(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr}return ret},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},getStreamFromFD:function(fd){var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(8);return stream},get64:function(low,high){return low}};function syscallMunmap(addr,len){if((addr|0)===-1||len===0){return-28}var info=SYSCALLS.mappings[addr];if(!info)return 0;if(len===info.len){var stream=FS.getStream(info.fd);if(info.prot&2){SYSCALLS.doMsync(addr,stream,len,info.flags,info.offset)}FS.munmap(stream);SYSCALLS.mappings[addr]=null;if(info.allocated){_free(info.malloc)}}return 0}function ___sys_munmap(addr,len){try{return syscallMunmap(addr,len)}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function getShiftFromSize(size){switch(size){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+size)}}function embind_init_charCodes(){var codes=new Array(256);for(var i=0;i<256;++i){codes[i]=String.fromCharCode(i)}embind_charCodes=codes}var embind_charCodes=undefined;function readLatin1String(ptr){var ret="";var c=ptr;while(HEAPU8[c]){ret+=embind_charCodes[HEAPU8[c++]]}return ret}var awaitingDependencies={};var registeredTypes={};var typeDependencies={};var char_0=48;var char_9=57;function makeLegalFunctionName(name){if(undefined===name){return"_unknown"}name=name.replace(/[^a-zA-Z0-9_]/g,"$");var f=name.charCodeAt(0);if(f>=char_0&&f<=char_9){return"_"+name}else{return name}}function createNamedFunction(name,body){name=makeLegalFunctionName(name);return new Function("body","return function "+name+"() {\n"+'    "use strict";'+"    return body.apply(this, arguments);\n"+"};\n")(body)}function extendError(baseErrorType,errorName){var errorClass=createNamedFunction(errorName,function(message){this.name=errorName;this.message=message;var stack=new Error(message).stack;if(stack!==undefined){this.stack=this.toString()+"\n"+stack.replace(/^Error(:[^\n]*)?\n/,"")}});errorClass.prototype=Object.create(baseErrorType.prototype);errorClass.prototype.constructor=errorClass;errorClass.prototype.toString=function(){if(this.message===undefined){return this.name}else{return this.name+": "+this.message}};return errorClass}var BindingError=undefined;function throwBindingError(message){throw new BindingError(message)}var InternalError=undefined;function throwInternalError(message){throw new InternalError(message)}function whenDependentTypesAreResolved(myTypes,dependentTypes,getTypeConverters){myTypes.forEach(function(type){typeDependencies[type]=dependentTypes});function onComplete(typeConverters){var myTypeConverters=getTypeConverters(typeConverters);if(myTypeConverters.length!==myTypes.length){throwInternalError("Mismatched type converter count")}for(var i=0;i<myTypes.length;++i){registerType(myTypes[i],myTypeConverters[i])}}var typeConverters=new Array(dependentTypes.length);var unregisteredTypes=[];var registered=0;dependentTypes.forEach(function(dt,i){if(registeredTypes.hasOwnProperty(dt)){typeConverters[i]=registeredTypes[dt]}else{unregisteredTypes.push(dt);if(!awaitingDependencies.hasOwnProperty(dt)){awaitingDependencies[dt]=[]}awaitingDependencies[dt].push(function(){typeConverters[i]=registeredTypes[dt];++registered;if(registered===unregisteredTypes.length){onComplete(typeConverters)}})}});if(0===unregisteredTypes.length){onComplete(typeConverters)}}function registerType(rawType,registeredInstance,options){options=options||{};if(!("argPackAdvance"in registeredInstance)){throw new TypeError("registerType registeredInstance requires argPackAdvance")}var name=registeredInstance.name;if(!rawType){throwBindingError('type "'+name+'" must have a positive integer typeid pointer')}if(registeredTypes.hasOwnProperty(rawType)){if(options.ignoreDuplicateRegistrations){return}else{throwBindingError("Cannot register type '"+name+"' twice")}}registeredTypes[rawType]=registeredInstance;delete typeDependencies[rawType];if(awaitingDependencies.hasOwnProperty(rawType)){var callbacks=awaitingDependencies[rawType];delete awaitingDependencies[rawType];callbacks.forEach(function(cb){cb()})}}function __embind_register_bool(rawType,name,size,trueValue,falseValue){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(wt){return!!wt},"toWireType":function(destructors,o){return o?trueValue:falseValue},"argPackAdvance":8,"readValueFromPointer":function(pointer){var heap;if(size===1){heap=HEAP8}else if(size===2){heap=HEAP16}else if(size===4){heap=HEAP32}else{throw new TypeError("Unknown boolean type size: "+name)}return this["fromWireType"](heap[pointer>>shift])},destructorFunction:null})}var emval_free_list=[];var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];function __emval_decref(handle){if(handle>4&&0===--emval_handle_array[handle].refcount){emval_handle_array[handle]=undefined;emval_free_list.push(handle)}}function count_emval_handles(){var count=0;for(var i=5;i<emval_handle_array.length;++i){if(emval_handle_array[i]!==undefined){++count}}return count}function get_first_emval(){for(var i=5;i<emval_handle_array.length;++i){if(emval_handle_array[i]!==undefined){return emval_handle_array[i]}}return null}function init_emval(){Module["count_emval_handles"]=count_emval_handles;Module["get_first_emval"]=get_first_emval}function __emval_register(value){switch(value){case undefined:{return 1}case null:{return 2}case true:{return 3}case false:{return 4}default:{var handle=emval_free_list.length?emval_free_list.pop():emval_handle_array.length;emval_handle_array[handle]={refcount:1,value:value};return handle}}}function simpleReadValueFromPointer(pointer){return this["fromWireType"](HEAPU32[pointer>>2])}function __embind_register_emval(rawType,name){name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(handle){var rv=emval_handle_array[handle].value;__emval_decref(handle);return rv},"toWireType":function(destructors,value){return __emval_register(value)},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:null})}function _embind_repr(v){if(v===null){return"null"}var t=typeof v;if(t==="object"||t==="array"||t==="function"){return v.toString()}else{return""+v}}function floatReadValueFromPointer(name,shift){switch(shift){case 2:return function(pointer){return this["fromWireType"](HEAPF32[pointer>>2])};case 3:return function(pointer){return this["fromWireType"](HEAPF64[pointer>>3])};default:throw new TypeError("Unknown float type: "+name)}}function __embind_register_float(rawType,name,size){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(value){return value},"toWireType":function(destructors,value){if(typeof value!=="number"&&typeof value!=="boolean"){throw new TypeError('Cannot convert "'+_embind_repr(value)+'" to '+this.name)}return value},"argPackAdvance":8,"readValueFromPointer":floatReadValueFromPointer(name,shift),destructorFunction:null})}function new_(constructor,argumentList){if(!(constructor instanceof Function)){throw new TypeError("new_ called with constructor type "+typeof constructor+" which is not a function")}var dummy=createNamedFunction(constructor.name||"unknownFunctionName",function(){});dummy.prototype=constructor.prototype;var obj=new dummy;var r=constructor.apply(obj,argumentList);return r instanceof Object?r:obj}function runDestructors(destructors){while(destructors.length){var ptr=destructors.pop();var del=destructors.pop();del(ptr)}}function craftInvokerFunction(humanName,argTypes,classType,cppInvokerFunc,cppTargetFunc){var argCount=argTypes.length;if(argCount<2){throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!")}var isClassMethodFunc=argTypes[1]!==null&&classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){if(argTypes[i]!==null&&argTypes[i].destructorFunction===undefined){needsDestructorStack=true;break}}var returns=argTypes[0].name!=="void";var argsList="";var argsListWired="";for(var i=0;i<argCount-2;++i){argsList+=(i!==0?", ":"")+"arg"+i;argsListWired+=(i!==0?", ":"")+"arg"+i+"Wired"}var invokerFnBody="return function "+makeLegalFunctionName(humanName)+"("+argsList+") {\n"+"if (arguments.length !== "+(argCount-2)+") {\n"+"throwBindingError('function "+humanName+" called with ' + arguments.length + ' arguments, expected "+(argCount-2)+" args!');\n"+"}\n";if(needsDestructorStack){invokerFnBody+="var destructors = [];\n"}var dtorStack=needsDestructorStack?"destructors":"null";var args1=["throwBindingError","invoker","fn","runDestructors","retType","classParam"];var args2=[throwBindingError,cppInvokerFunc,cppTargetFunc,runDestructors,argTypes[0],argTypes[1]];if(isClassMethodFunc){invokerFnBody+="var thisWired = classParam.toWireType("+dtorStack+", this);\n"}for(var i=0;i<argCount-2;++i){invokerFnBody+="var arg"+i+"Wired = argType"+i+".toWireType("+dtorStack+", arg"+i+"); // "+argTypes[i+2].name+"\n";args1.push("argType"+i);args2.push(argTypes[i+2])}if(isClassMethodFunc){argsListWired="thisWired"+(argsListWired.length>0?", ":"")+argsListWired}invokerFnBody+=(returns?"var rv = ":"")+"invoker(fn"+(argsListWired.length>0?", ":"")+argsListWired+");\n";if(needsDestructorStack){invokerFnBody+="runDestructors(destructors);\n"}else{for(var i=isClassMethodFunc?1:2;i<argTypes.length;++i){var paramName=i===1?"thisWired":"arg"+(i-2)+"Wired";if(argTypes[i].destructorFunction!==null){invokerFnBody+=paramName+"_dtor("+paramName+"); // "+argTypes[i].name+"\n";args1.push(paramName+"_dtor");args2.push(argTypes[i].destructorFunction)}}}if(returns){invokerFnBody+="var ret = retType.fromWireType(rv);\n"+"return ret;\n"}else{}invokerFnBody+="}\n";args1.push(invokerFnBody);var invokerFunction=new_(Function,args1).apply(null,args2);return invokerFunction}function ensureOverloadTable(proto,methodName,humanName){if(undefined===proto[methodName].overloadTable){var prevFunc=proto[methodName];proto[methodName]=function(){if(!proto[methodName].overloadTable.hasOwnProperty(arguments.length)){throwBindingError("Function '"+humanName+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+proto[methodName].overloadTable+")!")}return proto[methodName].overloadTable[arguments.length].apply(this,arguments)};proto[methodName].overloadTable=[];proto[methodName].overloadTable[prevFunc.argCount]=prevFunc}}function exposePublicSymbol(name,value,numArguments){if(Module.hasOwnProperty(name)){if(undefined===numArguments||undefined!==Module[name].overloadTable&&undefined!==Module[name].overloadTable[numArguments]){throwBindingError("Cannot register public name '"+name+"' twice")}ensureOverloadTable(Module,name,name);if(Module.hasOwnProperty(numArguments)){throwBindingError("Cannot register multiple overloads of a function with the same number of arguments ("+numArguments+")!")}Module[name].overloadTable[numArguments]=value}else{Module[name]=value;if(undefined!==numArguments){Module[name].numArguments=numArguments}}}function heap32VectorToArray(count,firstElement){var array=[];for(var i=0;i<count;i++){array.push(HEAP32[(firstElement>>2)+i])}return array}function replacePublicSymbol(name,value,numArguments){if(!Module.hasOwnProperty(name)){throwInternalError("Replacing nonexistant public symbol")}if(undefined!==Module[name].overloadTable&&undefined!==numArguments){Module[name].overloadTable[numArguments]=value}else{Module[name]=value;Module[name].argCount=numArguments}}function embind__requireFunction(signature,rawFunction){signature=readLatin1String(signature);function makeDynCaller(dynCall){var args=[];for(var i=1;i<signature.length;++i){args.push("a"+i)}var name="dynCall_"+signature+"_"+rawFunction;var body="return function "+name+"("+args.join(", ")+") {\n";body+="    return dynCall(rawFunction"+(args.length?", ":"")+args.join(", ")+");\n";body+="};\n";return new Function("dynCall","rawFunction",body)(dynCall,rawFunction)}var dc=Module["dynCall_"+signature];var fp=makeDynCaller(dc);if(typeof fp!=="function"){throwBindingError("unknown function pointer with signature "+signature+": "+rawFunction)}return fp}var UnboundTypeError=undefined;function getTypeName(type){var ptr=___getTypeName(type);var rv=readLatin1String(ptr);_free(ptr);return rv}function throwUnboundTypeError(message,types){var unboundTypes=[];var seen={};function visit(type){if(seen[type]){return}if(registeredTypes[type]){return}if(typeDependencies[type]){typeDependencies[type].forEach(visit);return}unboundTypes.push(type);seen[type]=true}types.forEach(visit);throw new UnboundTypeError(message+": "+unboundTypes.map(getTypeName).join([", "]))}function __embind_register_function(name,argCount,rawArgTypesAddr,signature,rawInvoker,fn){var argTypes=heap32VectorToArray(argCount,rawArgTypesAddr);name=readLatin1String(name);rawInvoker=embind__requireFunction(signature,rawInvoker);exposePublicSymbol(name,function(){throwUnboundTypeError("Cannot call "+name+" due to unbound types",argTypes)},argCount-1);whenDependentTypesAreResolved([],argTypes,function(argTypes){var invokerArgsArray=[argTypes[0],null].concat(argTypes.slice(1));replacePublicSymbol(name,craftInvokerFunction(name,invokerArgsArray,null,rawInvoker,fn),argCount-1);return[]})}function integerReadValueFromPointer(name,shift,signed){switch(shift){case 0:return signed?function readS8FromPointer(pointer){return HEAP8[pointer]}:function readU8FromPointer(pointer){return HEAPU8[pointer]};case 1:return signed?function readS16FromPointer(pointer){return HEAP16[pointer>>1]}:function readU16FromPointer(pointer){return HEAPU16[pointer>>1]};case 2:return signed?function readS32FromPointer(pointer){return HEAP32[pointer>>2]}:function readU32FromPointer(pointer){return HEAPU32[pointer>>2]};default:throw new TypeError("Unknown integer type: "+name)}}function __embind_register_integer(primitiveType,name,size,minRange,maxRange){name=readLatin1String(name);if(maxRange===-1){maxRange=4294967295}var shift=getShiftFromSize(size);var fromWireType=function(value){return value};if(minRange===0){var bitshift=32-8*size;fromWireType=function(value){return value<<bitshift>>>bitshift}}var isUnsignedType=name.indexOf("unsigned")!=-1;registerType(primitiveType,{name:name,"fromWireType":fromWireType,"toWireType":function(destructors,value){if(typeof value!=="number"&&typeof value!=="boolean"){throw new TypeError('Cannot convert "'+_embind_repr(value)+'" to '+this.name)}if(value<minRange||value>maxRange){throw new TypeError('Passing a number "'+_embind_repr(value)+'" from JS side to C/C++ side to an argument of type "'+name+'", which is outside the valid range ['+minRange+", "+maxRange+"]!")}return isUnsignedType?value>>>0:value|0},"argPackAdvance":8,"readValueFromPointer":integerReadValueFromPointer(name,shift,minRange!==0),destructorFunction:null})}function __embind_register_memory_view(rawType,dataTypeIndex,name){var typeMapping=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];var TA=typeMapping[dataTypeIndex];function decodeMemoryView(handle){handle=handle>>2;var heap=HEAPU32;var size=heap[handle];var data=heap[handle+1];return new TA(buffer,data,size)}name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":decodeMemoryView,"argPackAdvance":8,"readValueFromPointer":decodeMemoryView},{ignoreDuplicateRegistrations:true})}function __embind_register_std_string(rawType,name){name=readLatin1String(name);var stdStringIsUTF8=name==="std::string";registerType(rawType,{name:name,"fromWireType":function(value){var length=HEAPU32[value>>2];var str;if(stdStringIsUTF8){var decodeStartPtr=value+4;for(var i=0;i<=length;++i){var currentBytePtr=value+4+i;if(HEAPU8[currentBytePtr]==0||i==length){var maxRead=currentBytePtr-decodeStartPtr;var stringSegment=UTF8ToString(decodeStartPtr,maxRead);if(str===undefined){str=stringSegment}else{str+=String.fromCharCode(0);str+=stringSegment}decodeStartPtr=currentBytePtr+1}}}else{var a=new Array(length);for(var i=0;i<length;++i){a[i]=String.fromCharCode(HEAPU8[value+4+i])}str=a.join("")}_free(value);return str},"toWireType":function(destructors,value){if(value instanceof ArrayBuffer){value=new Uint8Array(value)}var getLength;var valueIsOfTypeString=typeof value==="string";if(!(valueIsOfTypeString||value instanceof Uint8Array||value instanceof Uint8ClampedArray||value instanceof Int8Array)){throwBindingError("Cannot pass non-string to std::string")}if(stdStringIsUTF8&&valueIsOfTypeString){getLength=function(){return lengthBytesUTF8(value)}}else{getLength=function(){return value.length}}var length=getLength();var ptr=_malloc(4+length+1);HEAPU32[ptr>>2]=length;if(stdStringIsUTF8&&valueIsOfTypeString){stringToUTF8(value,ptr+4,length+1)}else{if(valueIsOfTypeString){for(var i=0;i<length;++i){var charCode=value.charCodeAt(i);if(charCode>255){_free(ptr);throwBindingError("String has UTF-16 code units that do not fit in 8 bits")}HEAPU8[ptr+4+i]=charCode}}else{for(var i=0;i<length;++i){HEAPU8[ptr+4+i]=value[i]}}}if(destructors!==null){destructors.push(_free,ptr)}return ptr},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:function(ptr){_free(ptr)}})}function __embind_register_std_wstring(rawType,charSize,name){name=readLatin1String(name);var decodeString,encodeString,getHeap,lengthBytesUTF,shift;if(charSize===2){decodeString=UTF16ToString;encodeString=stringToUTF16;lengthBytesUTF=lengthBytesUTF16;getHeap=function(){return HEAPU16};shift=1}else if(charSize===4){decodeString=UTF32ToString;encodeString=stringToUTF32;lengthBytesUTF=lengthBytesUTF32;getHeap=function(){return HEAPU32};shift=2}registerType(rawType,{name:name,"fromWireType":function(value){var length=HEAPU32[value>>2];var HEAP=getHeap();var str;var decodeStartPtr=value+4;for(var i=0;i<=length;++i){var currentBytePtr=value+4+i*charSize;if(HEAP[currentBytePtr>>shift]==0||i==length){var maxReadBytes=currentBytePtr-decodeStartPtr;var stringSegment=decodeString(decodeStartPtr,maxReadBytes);if(str===undefined){str=stringSegment}else{str+=String.fromCharCode(0);str+=stringSegment}decodeStartPtr=currentBytePtr+charSize}}_free(value);return str},"toWireType":function(destructors,value){if(!(typeof value==="string")){throwBindingError("Cannot pass non-string to C++ string type "+name)}var length=lengthBytesUTF(value);var ptr=_malloc(4+length+charSize);HEAPU32[ptr>>2]=length>>shift;encodeString(value,ptr+4,length+charSize);if(destructors!==null){destructors.push(_free,ptr)}return ptr},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:function(ptr){_free(ptr)}})}function __embind_register_void(rawType,name){name=readLatin1String(name);registerType(rawType,{isVoid:true,name:name,"argPackAdvance":0,"fromWireType":function(){return undefined},"toWireType":function(destructors,o){return undefined}})}function _abort(){abort()}var _emscripten_get_now;if(ENVIRONMENT_IS_NODE){_emscripten_get_now=function(){var t=process["hrtime"]();return t[0]*1e3+t[1]/1e6}}else if(typeof dateNow!=="undefined"){_emscripten_get_now=dateNow}else _emscripten_get_now=function(){return performance.now()};var _emscripten_get_now_is_monotonic=true;function _clock_gettime(clk_id,tp){var now;if(clk_id===0){now=Date.now()}else if((clk_id===1||clk_id===4)&&_emscripten_get_now_is_monotonic){now=_emscripten_get_now()}else{setErrNo(28);return-1}HEAP32[tp>>2]=now/1e3|0;HEAP32[tp+4>>2]=now%1e3*1e3*1e3|0;return 0}function _emscripten_set_main_loop_timing(mode,value){Browser.mainLoop.timingMode=mode;Browser.mainLoop.timingValue=value;if(!Browser.mainLoop.func){return 1}if(mode==0){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setTimeout(){var timeUntilNextTick=Math.max(0,Browser.mainLoop.tickStartTime+value-_emscripten_get_now())|0;setTimeout(Browser.mainLoop.runner,timeUntilNextTick)};Browser.mainLoop.method="timeout"}else if(mode==1){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_rAF(){Browser.requestAnimationFrame(Browser.mainLoop.runner)};Browser.mainLoop.method="rAF"}else if(mode==2){if(typeof setImmediate==="undefined"){var setImmediates=[];var emscriptenMainLoopMessageId="setimmediate";var Browser_setImmediate_messageHandler=function(event){if(event.data===emscriptenMainLoopMessageId||event.data.target===emscriptenMainLoopMessageId){event.stopPropagation();setImmediates.shift()()}};addEventListener("message",Browser_setImmediate_messageHandler,true);setImmediate=function Browser_emulated_setImmediate(func){setImmediates.push(func);if(ENVIRONMENT_IS_WORKER){if(Module["setImmediates"]===undefined)Module["setImmediates"]=[];Module["setImmediates"].push(func);postMessage({target:emscriptenMainLoopMessageId})}else postMessage(emscriptenMainLoopMessageId,"*")}}Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setImmediate(){setImmediate(Browser.mainLoop.runner)};Browser.mainLoop.method="immediate"}return 0}function _emscripten_set_main_loop(func,fps,simulateInfiniteLoop,arg,noSetTiming){noExitRuntime=true;assert(!Browser.mainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Browser.mainLoop.func=func;Browser.mainLoop.arg=arg;var browserIterationFunc;if(typeof arg!=="undefined"){browserIterationFunc=function(){Module["dynCall_vi"](func,arg)}}else{browserIterationFunc=function(){Module["dynCall_v"](func)}}var thisMainLoopId=Browser.mainLoop.currentlyRunningMainloop;Browser.mainLoop.runner=function Browser_mainLoop_runner(){if(ABORT)return;if(Browser.mainLoop.queue.length>0){var start=Date.now();var blocker=Browser.mainLoop.queue.shift();blocker.func(blocker.arg);if(Browser.mainLoop.remainingBlockers){var remaining=Browser.mainLoop.remainingBlockers;var next=remaining%1==0?remaining-1:Math.floor(remaining);if(blocker.counted){Browser.mainLoop.remainingBlockers=next}else{next=next+.5;Browser.mainLoop.remainingBlockers=(8*remaining+next)/9}}console.log('main loop blocker "'+blocker.name+'" took '+(Date.now()-start)+" ms");Browser.mainLoop.updateStatus();if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop)return;setTimeout(Browser.mainLoop.runner,0);return}if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop)return;Browser.mainLoop.currentFrameNumber=Browser.mainLoop.currentFrameNumber+1|0;if(Browser.mainLoop.timingMode==1&&Browser.mainLoop.timingValue>1&&Browser.mainLoop.currentFrameNumber%Browser.mainLoop.timingValue!=0){Browser.mainLoop.scheduler();return}else if(Browser.mainLoop.timingMode==0){Browser.mainLoop.tickStartTime=_emscripten_get_now()}GL.newRenderingFrameStarted();Browser.mainLoop.runIter(browserIterationFunc);if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop)return;if(typeof SDL==="object"&&SDL.audio&&SDL.audio.queueNewAudioData)SDL.audio.queueNewAudioData();Browser.mainLoop.scheduler()};if(!noSetTiming){if(fps&&fps>0)_emscripten_set_main_loop_timing(0,1e3/fps);else _emscripten_set_main_loop_timing(1,1);Browser.mainLoop.scheduler()}if(simulateInfiniteLoop){throw"unwind"}}var Browser={mainLoop:{scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function(){Browser.mainLoop.scheduler=null;Browser.mainLoop.currentlyRunningMainloop++},resume:function(){Browser.mainLoop.currentlyRunningMainloop++;var timingMode=Browser.mainLoop.timingMode;var timingValue=Browser.mainLoop.timingValue;var func=Browser.mainLoop.func;Browser.mainLoop.func=null;_emscripten_set_main_loop(func,0,false,Browser.mainLoop.arg,true);_emscripten_set_main_loop_timing(timingMode,timingValue);Browser.mainLoop.scheduler()},updateStatus:function(){if(Module["setStatus"]){var message=Module["statusMessage"]||"Please wait...";var remaining=Browser.mainLoop.remainingBlockers;var expected=Browser.mainLoop.expectedBlockers;if(remaining){if(remaining<expected){Module["setStatus"](message+" ("+(expected-remaining)+"/"+expected+")")}else{Module["setStatus"](message)}}else{Module["setStatus"]("")}}},runIter:function(func){if(ABORT)return;if(Module["preMainLoop"]){var preRet=Module["preMainLoop"]();if(preRet===false){return}}try{func()}catch(e){if(e instanceof ExitStatus){return}else{if(e&&typeof e==="object"&&e.stack)err("exception thrown: "+[e,e.stack]);throw e}}if(Module["postMainLoop"])Module["postMainLoop"]()}},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function(){if(!Module["preloadPlugins"])Module["preloadPlugins"]=[];if(Browser.initted)return;Browser.initted=true;try{new Blob;Browser.hasBlobConstructor=true}catch(e){Browser.hasBlobConstructor=false;console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Browser.BlobBuilder=typeof MozBlobBuilder!="undefined"?MozBlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:!Browser.hasBlobConstructor?console.log("warning: no BlobBuilder"):null;Browser.URLObject=typeof window!="undefined"?window.URL?window.URL:window.webkitURL:undefined;if(!Module.noImageDecoding&&typeof Browser.URLObject==="undefined"){console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");Module.noImageDecoding=true}var imagePlugin={};imagePlugin["canHandle"]=function imagePlugin_canHandle(name){return!Module.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(name)};imagePlugin["handle"]=function imagePlugin_handle(byteArray,name,onload,onerror){var b=null;if(Browser.hasBlobConstructor){try{b=new Blob([byteArray],{type:Browser.getMimetype(name)});if(b.size!==byteArray.length){b=new Blob([new Uint8Array(byteArray).buffer],{type:Browser.getMimetype(name)})}}catch(e){warnOnce("Blob constructor present but fails: "+e+"; falling back to blob builder")}}if(!b){var bb=new Browser.BlobBuilder;bb.append(new Uint8Array(byteArray).buffer);b=bb.getBlob()}var url=Browser.URLObject.createObjectURL(b);var img=new Image;img.onload=function img_onload(){assert(img.complete,"Image "+name+" could not be decoded");var canvas=document.createElement("canvas");canvas.width=img.width;canvas.height=img.height;var ctx=canvas.getContext("2d");ctx.drawImage(img,0,0);Module["preloadedImages"][name]=canvas;Browser.URLObject.revokeObjectURL(url);if(onload)onload(byteArray)};img.onerror=function img_onerror(event){console.log("Image "+url+" could not be decoded");if(onerror)onerror()};img.src=url};Module["preloadPlugins"].push(imagePlugin);var audioPlugin={};audioPlugin["canHandle"]=function audioPlugin_canHandle(name){return!Module.noAudioDecoding&&name.substr(-4)in{".ogg":1,".wav":1,".mp3":1}};audioPlugin["handle"]=function audioPlugin_handle(byteArray,name,onload,onerror){var done=false;function finish(audio){if(done)return;done=true;Module["preloadedAudios"][name]=audio;if(onload)onload(byteArray)}function fail(){if(done)return;done=true;Module["preloadedAudios"][name]=new Audio;if(onerror)onerror()}if(Browser.hasBlobConstructor){try{var b=new Blob([byteArray],{type:Browser.getMimetype(name)})}catch(e){return fail()}var url=Browser.URLObject.createObjectURL(b);var audio=new Audio;audio.addEventListener("canplaythrough",function(){finish(audio)},false);audio.onerror=function audio_onerror(event){if(done)return;console.log("warning: browser could not fully decode audio "+name+", trying slower base64 approach");function encode64(data){var BASE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var PAD="=";var ret="";var leftchar=0;var leftbits=0;for(var i=0;i<data.length;i++){leftchar=leftchar<<8|data[i];leftbits+=8;while(leftbits>=6){var curr=leftchar>>leftbits-6&63;leftbits-=6;ret+=BASE[curr]}}if(leftbits==2){ret+=BASE[(leftchar&3)<<4];ret+=PAD+PAD}else if(leftbits==4){ret+=BASE[(leftchar&15)<<2];ret+=PAD}return ret}audio.src="data:audio/x-"+name.substr(-3)+";base64,"+encode64(byteArray);finish(audio)};audio.src=url;Browser.safeSetTimeout(function(){finish(audio)},1e4)}else{return fail()}};Module["preloadPlugins"].push(audioPlugin);function pointerLockChange(){Browser.pointerLock=document["pointerLockElement"]===Module["canvas"]||document["mozPointerLockElement"]===Module["canvas"]||document["webkitPointerLockElement"]===Module["canvas"]||document["msPointerLockElement"]===Module["canvas"]}var canvas=Module["canvas"];if(canvas){canvas.requestPointerLock=canvas["requestPointerLock"]||canvas["mozRequestPointerLock"]||canvas["webkitRequestPointerLock"]||canvas["msRequestPointerLock"]||function(){};canvas.exitPointerLock=document["exitPointerLock"]||document["mozExitPointerLock"]||document["webkitExitPointerLock"]||document["msExitPointerLock"]||function(){};canvas.exitPointerLock=canvas.exitPointerLock.bind(document);document.addEventListener("pointerlockchange",pointerLockChange,false);document.addEventListener("mozpointerlockchange",pointerLockChange,false);document.addEventListener("webkitpointerlockchange",pointerLockChange,false);document.addEventListener("mspointerlockchange",pointerLockChange,false);if(Module["elementPointerLock"]){canvas.addEventListener("click",function(ev){if(!Browser.pointerLock&&Module["canvas"].requestPointerLock){Module["canvas"].requestPointerLock();ev.preventDefault()}},false)}}},createContext:function(canvas,useWebGL,setInModule,webGLContextAttributes){if(useWebGL&&Module.ctx&&canvas==Module.canvas)return Module.ctx;var ctx;var contextHandle;if(useWebGL){var contextAttributes={antialias:false,alpha:false,majorVersion:typeof WebGL2RenderingContext!=="undefined"?2:1};if(webGLContextAttributes){for(var attribute in webGLContextAttributes){contextAttributes[attribute]=webGLContextAttributes[attribute]}}if(typeof GL!=="undefined"){contextHandle=GL.createContext(canvas,contextAttributes);if(contextHandle){ctx=GL.getContext(contextHandle).GLctx}}}else{ctx=canvas.getContext("2d")}if(!ctx)return null;if(setInModule){if(!useWebGL)assert(typeof GLctx==="undefined","cannot set in module if GLctx is used, but we are a non-GL context that would replace it");Module.ctx=ctx;if(useWebGL)GL.makeContextCurrent(contextHandle);Module.useWebGL=useWebGL;Browser.moduleContextCreatedCallbacks.forEach(function(callback){callback()});Browser.init()}return ctx},destroyContext:function(canvas,useWebGL,setInModule){},fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen:function(lockPointer,resizeCanvas){Browser.lockPointer=lockPointer;Browser.resizeCanvas=resizeCanvas;if(typeof Browser.lockPointer==="undefined")Browser.lockPointer=true;if(typeof Browser.resizeCanvas==="undefined")Browser.resizeCanvas=false;var canvas=Module["canvas"];function fullscreenChange(){Browser.isFullscreen=false;var canvasContainer=canvas.parentNode;if((document["fullscreenElement"]||document["mozFullScreenElement"]||document["msFullscreenElement"]||document["webkitFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvasContainer){canvas.exitFullscreen=Browser.exitFullscreen;if(Browser.lockPointer)canvas.requestPointerLock();Browser.isFullscreen=true;if(Browser.resizeCanvas){Browser.setFullscreenCanvasSize()}else{Browser.updateCanvasDimensions(canvas)}}else{canvasContainer.parentNode.insertBefore(canvas,canvasContainer);canvasContainer.parentNode.removeChild(canvasContainer);if(Browser.resizeCanvas){Browser.setWindowedCanvasSize()}else{Browser.updateCanvasDimensions(canvas)}}if(Module["onFullScreen"])Module["onFullScreen"](Browser.isFullscreen);if(Module["onFullscreen"])Module["onFullscreen"](Browser.isFullscreen)}if(!Browser.fullscreenHandlersInstalled){Browser.fullscreenHandlersInstalled=true;document.addEventListener("fullscreenchange",fullscreenChange,false);document.addEventListener("mozfullscreenchange",fullscreenChange,false);document.addEventListener("webkitfullscreenchange",fullscreenChange,false);document.addEventListener("MSFullscreenChange",fullscreenChange,false)}var canvasContainer=document.createElement("div");canvas.parentNode.insertBefore(canvasContainer,canvas);canvasContainer.appendChild(canvas);canvasContainer.requestFullscreen=canvasContainer["requestFullscreen"]||canvasContainer["mozRequestFullScreen"]||canvasContainer["msRequestFullscreen"]||(canvasContainer["webkitRequestFullscreen"]?function(){canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"])}:null)||(canvasContainer["webkitRequestFullScreen"]?function(){canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"])}:null);canvasContainer.requestFullscreen()},exitFullscreen:function(){if(!Browser.isFullscreen){return false}var CFS=document["exitFullscreen"]||document["cancelFullScreen"]||document["mozCancelFullScreen"]||document["msExitFullscreen"]||document["webkitCancelFullScreen"]||function(){};CFS.apply(document,[]);return true},nextRAF:0,fakeRequestAnimationFrame:function(func){var now=Date.now();if(Browser.nextRAF===0){Browser.nextRAF=now+1e3/60}else{while(now+2>=Browser.nextRAF){Browser.nextRAF+=1e3/60}}var delay=Math.max(Browser.nextRAF-now,0);setTimeout(func,delay)},requestAnimationFrame:function(func){if(typeof requestAnimationFrame==="function"){requestAnimationFrame(func);return}var RAF=Browser.fakeRequestAnimationFrame;RAF(func)},safeCallback:function(func){return function(){if(!ABORT)return func.apply(null,arguments)}},allowAsyncCallbacks:true,queuedAsyncCallbacks:[],pauseAsyncCallbacks:function(){Browser.allowAsyncCallbacks=false},resumeAsyncCallbacks:function(){Browser.allowAsyncCallbacks=true;if(Browser.queuedAsyncCallbacks.length>0){var callbacks=Browser.queuedAsyncCallbacks;Browser.queuedAsyncCallbacks=[];callbacks.forEach(function(func){func()})}},safeRequestAnimationFrame:function(func){return Browser.requestAnimationFrame(function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}else{Browser.queuedAsyncCallbacks.push(func)}})},safeSetTimeout:function(func,timeout){noExitRuntime=true;return setTimeout(function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}else{Browser.queuedAsyncCallbacks.push(func)}},timeout)},safeSetInterval:function(func,timeout){noExitRuntime=true;return setInterval(function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}},timeout)},getMimetype:function(name){return{"jpg":"image/jpeg","jpeg":"image/jpeg","png":"image/png","bmp":"image/bmp","ogg":"audio/ogg","wav":"audio/wav","mp3":"audio/mpeg"}[name.substr(name.lastIndexOf(".")+1)]},getUserMedia:function(func){if(!window.getUserMedia){window.getUserMedia=navigator["getUserMedia"]||navigator["mozGetUserMedia"]}window.getUserMedia(func)},getMovementX:function(event){return event["movementX"]||event["mozMovementX"]||event["webkitMovementX"]||0},getMovementY:function(event){return event["movementY"]||event["mozMovementY"]||event["webkitMovementY"]||0},getMouseWheelDelta:function(event){var delta=0;switch(event.type){case"DOMMouseScroll":delta=event.detail/3;break;case"mousewheel":delta=event.wheelDelta/120;break;case"wheel":delta=event.deltaY;switch(event.deltaMode){case 0:delta/=100;break;case 1:delta/=3;break;case 2:delta*=80;break;default:throw"unrecognized mouse wheel delta mode: "+event.deltaMode}break;default:throw"unrecognized mouse wheel event: "+event.type}return delta},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(event){if(Browser.pointerLock){if(event.type!="mousemove"&&"mozMovementX"in event){Browser.mouseMovementX=Browser.mouseMovementY=0}else{Browser.mouseMovementX=Browser.getMovementX(event);Browser.mouseMovementY=Browser.getMovementY(event)}if(typeof SDL!="undefined"){Browser.mouseX=SDL.mouseX+Browser.mouseMovementX;Browser.mouseY=SDL.mouseY+Browser.mouseMovementY}else{Browser.mouseX+=Browser.mouseMovementX;Browser.mouseY+=Browser.mouseMovementY}}else{var rect=Module["canvas"].getBoundingClientRect();var cw=Module["canvas"].width;var ch=Module["canvas"].height;var scrollX=typeof window.scrollX!=="undefined"?window.scrollX:window.pageXOffset;var scrollY=typeof window.scrollY!=="undefined"?window.scrollY:window.pageYOffset;if(event.type==="touchstart"||event.type==="touchend"||event.type==="touchmove"){var touch=event.touch;if(touch===undefined){return}var adjustedX=touch.pageX-(scrollX+rect.left);var adjustedY=touch.pageY-(scrollY+rect.top);adjustedX=adjustedX*(cw/rect.width);adjustedY=adjustedY*(ch/rect.height);var coords={x:adjustedX,y:adjustedY};if(event.type==="touchstart"){Browser.lastTouches[touch.identifier]=coords;Browser.touches[touch.identifier]=coords}else if(event.type==="touchend"||event.type==="touchmove"){var last=Browser.touches[touch.identifier];if(!last)last=coords;Browser.lastTouches[touch.identifier]=last;Browser.touches[touch.identifier]=coords}return}var x=event.pageX-(scrollX+rect.left);var y=event.pageY-(scrollY+rect.top);x=x*(cw/rect.width);y=y*(ch/rect.height);Browser.mouseMovementX=x-Browser.mouseX;Browser.mouseMovementY=y-Browser.mouseY;Browser.mouseX=x;Browser.mouseY=y}},asyncLoad:function(url,onload,onerror,noRunDep){var dep=!noRunDep?getUniqueRunDependency("al "+url):"";readAsync(url,function(arrayBuffer){assert(arrayBuffer,'Loading data file "'+url+'" failed (no arrayBuffer).');onload(new Uint8Array(arrayBuffer));if(dep)removeRunDependency(dep)},function(event){if(onerror){onerror()}else{throw'Loading data file "'+url+'" failed.'}});if(dep)addRunDependency(dep)},resizeListeners:[],updateResizeListeners:function(){var canvas=Module["canvas"];Browser.resizeListeners.forEach(function(listener){listener(canvas.width,canvas.height)})},setCanvasSize:function(width,height,noUpdates){var canvas=Module["canvas"];Browser.updateCanvasDimensions(canvas,width,height);if(!noUpdates)Browser.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen>>2];flags=flags|8388608;HEAP32[SDL.screen>>2]=flags}Browser.updateCanvasDimensions(Module["canvas"]);Browser.updateResizeListeners()},setWindowedCanvasSize:function(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen>>2];flags=flags&~8388608;HEAP32[SDL.screen>>2]=flags}Browser.updateCanvasDimensions(Module["canvas"]);Browser.updateResizeListeners()},updateCanvasDimensions:function(canvas,wNative,hNative){if(wNative&&hNative){canvas.widthNative=wNative;canvas.heightNative=hNative}else{wNative=canvas.widthNative;hNative=canvas.heightNative}var w=wNative;var h=hNative;if(Module["forcedAspectRatio"]&&Module["forcedAspectRatio"]>0){if(w/h<Module["forcedAspectRatio"]){w=Math.round(h*Module["forcedAspectRatio"])}else{h=Math.round(w/Module["forcedAspectRatio"])}}if((document["fullscreenElement"]||document["mozFullScreenElement"]||document["msFullscreenElement"]||document["webkitFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvas.parentNode&&typeof screen!="undefined"){var factor=Math.min(screen.width/w,screen.height/h);w=Math.round(w*factor);h=Math.round(h*factor)}if(Browser.resizeCanvas){if(canvas.width!=w)canvas.width=w;if(canvas.height!=h)canvas.height=h;if(typeof canvas.style!="undefined"){canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}else{if(canvas.width!=wNative)canvas.width=wNative;if(canvas.height!=hNative)canvas.height=hNative;if(typeof canvas.style!="undefined"){if(w!=wNative||h!=hNative){canvas.style.setProperty("width",w+"px","important");canvas.style.setProperty("height",h+"px","important")}else{canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}}},wgetRequests:{},nextWgetRequestHandle:0,getNextWgetRequestHandle:function(){var handle=Browser.nextWgetRequestHandle;Browser.nextWgetRequestHandle++;return handle}};function _emscripten_call_worker(id,funcName,data,size,callback,arg){noExitRuntime=true;funcName=UTF8ToString(funcName);var info=Browser.workers[id];var callbackId=-1;if(callback){callbackId=info.callbacks.length;info.callbacks.push({func:getFuncWrapper(callback,"viii"),arg:arg});info.awaited++}var transferObject={"funcName":funcName,"callbackId":callbackId,"data":data?new Uint8Array(HEAPU8.subarray(data,data+size)):0};if(data){info.worker.postMessage(transferObject,[transferObject.data.buffer])}else{info.worker.postMessage(transferObject)}}function _emscripten_create_worker(url){url=UTF8ToString(url);var id=Browser.workers.length;var info={worker:new Worker(url),callbacks:[],awaited:0,buffer:0,bufferSize:0};info.worker.onmessage=function info_worker_onmessage(msg){if(ABORT)return;var info=Browser.workers[id];if(!info)return;var callbackId=msg.data["callbackId"];var callbackInfo=info.callbacks[callbackId];if(!callbackInfo)return;if(msg.data["finalResponse"]){info.awaited--;info.callbacks[callbackId]=null}var data=msg.data["data"];if(data){if(!data.byteLength)data=new Uint8Array(data);if(!info.buffer||info.bufferSize<data.length){if(info.buffer)_free(info.buffer);info.bufferSize=data.length;info.buffer=_malloc(data.length)}HEAPU8.set(data,info.buffer);callbackInfo.func(info.buffer,data.length,callbackInfo.arg)}else{callbackInfo.func(0,0,callbackInfo.arg)}};Browser.workers.push(info);return id}function _emscripten_get_sbrk_ptr(){return 214656}function _emscripten_get_worker_queue_size(id){var info=Browser.workers[id];if(!info)return-1;return info.awaited}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function _emscripten_get_heap_size(){return HEAPU8.length}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){requestedSize=requestedSize>>>0;var oldSize=_emscripten_get_heap_size();var PAGE_MULTIPLE=65536;var maxHeapSize=2147483648;if(requestedSize>maxHeapSize){return false}var minHeapSize=16777216;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(minHeapSize,requestedSize,overGrownHeapSize),PAGE_MULTIPLE));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}var ENV={};function __getExecutableName(){return thisProgram||"./this.program"}function getEnvStrings(){if(!getEnvStrings.strings){var env={"USER":"web_user","LOGNAME":"web_user","PATH":"/","PWD":"/","HOME":"/home/web_user","LANG":(typeof navigator==="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8","_":__getExecutableName()};for(var x in ENV){env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(x+"="+env[x])}getEnvStrings.strings=strings}return getEnvStrings.strings}function _environ_get(__environ,environ_buf){var bufSize=0;getEnvStrings().forEach(function(string,i){var ptr=environ_buf+bufSize;HEAP32[__environ+i*4>>2]=ptr;writeAsciiToMemory(string,ptr);bufSize+=string.length+1});return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){var strings=getEnvStrings();HEAP32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(function(string){bufSize+=string.length+1});HEAP32[penviron_buf_size>>2]=bufSize;return 0}function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=SYSCALLS.doReadv(stream,iov,iovcnt);HEAP32[pnum>>2]=num;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){try{var stream=SYSCALLS.getStreamFromFD(fd);var HIGH_OFFSET=4294967296;var offset=offset_high*HIGH_OFFSET+(offset_low>>>0);var DOUBLE_LIMIT=9007199254740992;if(offset<=-DOUBLE_LIMIT||offset>=DOUBLE_LIMIT){return-61}FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math_abs(tempDouble)>=1?tempDouble>0?(Math_min(+Math_floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math_ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=SYSCALLS.doWritev(stream,iov,iovcnt);HEAP32[pnum>>2]=num;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function __webgl_enable_ANGLE_instanced_arrays(ctx){var ext=ctx.getExtension("ANGLE_instanced_arrays");if(ext){ctx["vertexAttribDivisor"]=function(index,divisor){ext["vertexAttribDivisorANGLE"](index,divisor)};ctx["drawArraysInstanced"]=function(mode,first,count,primcount){ext["drawArraysInstancedANGLE"](mode,first,count,primcount)};ctx["drawElementsInstanced"]=function(mode,count,type,indices,primcount){ext["drawElementsInstancedANGLE"](mode,count,type,indices,primcount)};return 1}}function __webgl_enable_OES_vertex_array_object(ctx){var ext=ctx.getExtension("OES_vertex_array_object");if(ext){ctx["createVertexArray"]=function(){return ext["createVertexArrayOES"]()};ctx["deleteVertexArray"]=function(vao){ext["deleteVertexArrayOES"](vao)};ctx["bindVertexArray"]=function(vao){ext["bindVertexArrayOES"](vao)};ctx["isVertexArray"]=function(vao){return ext["isVertexArrayOES"](vao)};return 1}}function __webgl_enable_WEBGL_draw_buffers(ctx){var ext=ctx.getExtension("WEBGL_draw_buffers");if(ext){ctx["drawBuffers"]=function(n,bufs){ext["drawBuffersWEBGL"](n,bufs)};return 1}}function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx){return!!(ctx.dibvbi=ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"))}var GL={counter:1,lastError:0,buffers:[],mappedBuffers:{},programs:[],framebuffers:[],renderbuffers:[],textures:[],uniforms:[],shaders:[],vaos:[],contexts:[],currentContext:null,offscreenCanvases:{},timerQueriesEXT:[],queries:[],samplers:[],transformFeedbacks:[],syncs:[],currArrayBuffer:0,currElementArrayBuffer:0,byteSizeByTypeRoot:5120,byteSizeByType:[1,1,2,2,4,4,4,2,3,4,8],programInfos:{},stringCache:{},stringiCache:{},unpackAlignment:4,init:function(){var miniTempFloatBuffer=new Float32Array(GL.MINI_TEMP_BUFFER_SIZE);for(var i=0;i<GL.MINI_TEMP_BUFFER_SIZE;i++){GL.miniTempBufferFloatViews[i]=miniTempFloatBuffer.subarray(0,i+1)}var miniTempIntBuffer=new Int32Array(GL.MINI_TEMP_BUFFER_SIZE);for(var i=0;i<GL.MINI_TEMP_BUFFER_SIZE;i++){GL.miniTempBufferIntViews[i]=miniTempIntBuffer.subarray(0,i+1)}},recordError:function recordError(errorCode){if(!GL.lastError){GL.lastError=errorCode}},getNewId:function(table){var ret=GL.counter++;for(var i=table.length;i<ret;i++){table[i]=null}return ret},MINI_TEMP_BUFFER_SIZE:256,miniTempBufferFloatViews:[0],miniTempBufferIntViews:[0],MAX_TEMP_BUFFER_SIZE:2097152,numTempVertexBuffersPerSize:64,log2ceilLookup:function(i){return 32-Math.clz32(i-1)},generateTempBuffers:function(quads,context){var largestIndex=GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);context.tempVertexBufferCounters1=[];context.tempVertexBufferCounters2=[];context.tempVertexBufferCounters1.length=context.tempVertexBufferCounters2.length=largestIndex+1;context.tempVertexBuffers1=[];context.tempVertexBuffers2=[];context.tempVertexBuffers1.length=context.tempVertexBuffers2.length=largestIndex+1;context.tempIndexBuffers=[];context.tempIndexBuffers.length=largestIndex+1;for(var i=0;i<=largestIndex;++i){context.tempIndexBuffers[i]=null;context.tempVertexBufferCounters1[i]=context.tempVertexBufferCounters2[i]=0;var ringbufferLength=GL.numTempVertexBuffersPerSize;context.tempVertexBuffers1[i]=[];context.tempVertexBuffers2[i]=[];var ringbuffer1=context.tempVertexBuffers1[i];var ringbuffer2=context.tempVertexBuffers2[i];ringbuffer1.length=ringbuffer2.length=ringbufferLength;for(var j=0;j<ringbufferLength;++j){ringbuffer1[j]=ringbuffer2[j]=null}}if(quads){context.tempQuadIndexBuffer=GLctx.createBuffer();context.GLctx.bindBuffer(34963,context.tempQuadIndexBuffer);var numIndexes=GL.MAX_TEMP_BUFFER_SIZE>>1;var quadIndexes=new Uint16Array(numIndexes);var i=0,v=0;while(1){quadIndexes[i++]=v;if(i>=numIndexes)break;quadIndexes[i++]=v+1;if(i>=numIndexes)break;quadIndexes[i++]=v+2;if(i>=numIndexes)break;quadIndexes[i++]=v;if(i>=numIndexes)break;quadIndexes[i++]=v+2;if(i>=numIndexes)break;quadIndexes[i++]=v+3;if(i>=numIndexes)break;v+=4}context.GLctx.bufferData(34963,quadIndexes,35044);context.GLctx.bindBuffer(34963,null)}},getTempVertexBuffer:function getTempVertexBuffer(sizeBytes){var idx=GL.log2ceilLookup(sizeBytes);var ringbuffer=GL.currentContext.tempVertexBuffers1[idx];var nextFreeBufferIndex=GL.currentContext.tempVertexBufferCounters1[idx];GL.currentContext.tempVertexBufferCounters1[idx]=GL.currentContext.tempVertexBufferCounters1[idx]+1&GL.numTempVertexBuffersPerSize-1;var vbo=ringbuffer[nextFreeBufferIndex];if(vbo){return vbo}var prevVBO=GLctx.getParameter(34964);ringbuffer[nextFreeBufferIndex]=GLctx.createBuffer();GLctx.bindBuffer(34962,ringbuffer[nextFreeBufferIndex]);GLctx.bufferData(34962,1<<idx,35048);GLctx.bindBuffer(34962,prevVBO);return ringbuffer[nextFreeBufferIndex]},getTempIndexBuffer:function getTempIndexBuffer(sizeBytes){var idx=GL.log2ceilLookup(sizeBytes);var ibo=GL.currentContext.tempIndexBuffers[idx];if(ibo){return ibo}var prevIBO=GLctx.getParameter(34965);GL.currentContext.tempIndexBuffers[idx]=GLctx.createBuffer();GLctx.bindBuffer(34963,GL.currentContext.tempIndexBuffers[idx]);GLctx.bufferData(34963,1<<idx,35048);GLctx.bindBuffer(34963,prevIBO);return GL.currentContext.tempIndexBuffers[idx]},newRenderingFrameStarted:function newRenderingFrameStarted(){if(!GL.currentContext){return}var vb=GL.currentContext.tempVertexBuffers1;GL.currentContext.tempVertexBuffers1=GL.currentContext.tempVertexBuffers2;GL.currentContext.tempVertexBuffers2=vb;vb=GL.currentContext.tempVertexBufferCounters1;GL.currentContext.tempVertexBufferCounters1=GL.currentContext.tempVertexBufferCounters2;GL.currentContext.tempVertexBufferCounters2=vb;var largestIndex=GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);for(var i=0;i<=largestIndex;++i){GL.currentContext.tempVertexBufferCounters1[i]=0}},getSource:function(shader,count,string,length){var source="";for(var i=0;i<count;++i){var len=length?HEAP32[length+i*4>>2]:-1;source+=UTF8ToString(HEAP32[string+i*4>>2],len<0?undefined:len)}return source},calcBufLength:function calcBufLength(size,type,stride,count){if(stride>0){return count*stride}var typeSize=GL.byteSizeByType[type-GL.byteSizeByTypeRoot];return size*typeSize*count},usedTempBuffers:[],preDrawHandleClientVertexAttribBindings:function preDrawHandleClientVertexAttribBindings(count){GL.resetBufferBinding=false;for(var i=0;i<GL.currentContext.maxVertexAttribs;++i){var cb=GL.currentContext.clientBuffers[i];if(!cb.clientside||!cb.enabled)continue;GL.resetBufferBinding=true;var size=GL.calcBufLength(cb.size,cb.type,cb.stride,count);var buf=GL.getTempVertexBuffer(size);GLctx.bindBuffer(34962,buf);GLctx.bufferSubData(34962,0,HEAPU8.subarray(cb.ptr,cb.ptr+size));cb.vertexAttribPointerAdaptor.call(GLctx,i,cb.size,cb.type,cb.normalized,cb.stride,0)}},postDrawHandleClientVertexAttribBindings:function postDrawHandleClientVertexAttribBindings(){if(GL.resetBufferBinding){GLctx.bindBuffer(34962,GL.buffers[GL.currArrayBuffer])}},createContext:function(canvas,webGLContextAttributes){var ctx=webGLContextAttributes.majorVersion>1?canvas.getContext("webgl2",webGLContextAttributes):canvas.getContext("webgl",webGLContextAttributes);if(!ctx)return 0;var handle=GL.registerContext(ctx,webGLContextAttributes);return handle},registerContext:function(ctx,webGLContextAttributes){var handle=GL.getNewId(GL.contexts);var context={handle:handle,attributes:webGLContextAttributes,version:webGLContextAttributes.majorVersion,GLctx:ctx};if(ctx.canvas)ctx.canvas.GLctxObject=context;GL.contexts[handle]=context;if(typeof webGLContextAttributes.enableExtensionsByDefault==="undefined"||webGLContextAttributes.enableExtensionsByDefault){GL.initExtensions(context)}context.maxVertexAttribs=context.GLctx.getParameter(34921);context.clientBuffers=[];for(var i=0;i<context.maxVertexAttribs;i++){context.clientBuffers[i]={enabled:false,clientside:false,size:0,type:0,normalized:0,stride:0,ptr:0,vertexAttribPointerAdaptor:null}}GL.generateTempBuffers(false,context);return handle},makeContextCurrent:function(contextHandle){GL.currentContext=GL.contexts[contextHandle];Module.ctx=GLctx=GL.currentContext&&GL.currentContext.GLctx;return!(contextHandle&&!GLctx)},getContext:function(contextHandle){return GL.contexts[contextHandle]},deleteContext:function(contextHandle){if(GL.currentContext===GL.contexts[contextHandle])GL.currentContext=null;if(typeof JSEvents==="object")JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);if(GL.contexts[contextHandle]&&GL.contexts[contextHandle].GLctx.canvas)GL.contexts[contextHandle].GLctx.canvas.GLctxObject=undefined;GL.contexts[contextHandle]=null},initExtensions:function(context){if(!context)context=GL.currentContext;if(context.initExtensionsDone)return;context.initExtensionsDone=true;var GLctx=context.GLctx;__webgl_enable_ANGLE_instanced_arrays(GLctx);__webgl_enable_OES_vertex_array_object(GLctx);__webgl_enable_WEBGL_draw_buffers(GLctx);__webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);GLctx.disjointTimerQueryExt=GLctx.getExtension("EXT_disjoint_timer_query");var automaticallyEnabledExtensions=["OES_texture_float","OES_texture_half_float","OES_standard_derivatives","OES_vertex_array_object","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","OES_element_index_uint","EXT_texture_filter_anisotropic","EXT_frag_depth","WEBGL_draw_buffers","ANGLE_instanced_arrays","OES_texture_float_linear","OES_texture_half_float_linear","EXT_blend_minmax","EXT_shader_texture_lod","EXT_texture_norm16","WEBGL_compressed_texture_pvrtc","EXT_color_buffer_half_float","WEBGL_color_buffer_float","EXT_sRGB","WEBGL_compressed_texture_etc1","EXT_disjoint_timer_query","WEBGL_compressed_texture_etc","WEBGL_compressed_texture_astc","EXT_color_buffer_float","WEBGL_compressed_texture_s3tc_srgb","EXT_disjoint_timer_query_webgl2","WEBKIT_WEBGL_compressed_texture_pvrtc"];var exts=GLctx.getSupportedExtensions()||[];exts.forEach(function(ext){if(automaticallyEnabledExtensions.indexOf(ext)!=-1){GLctx.getExtension(ext)}})},populateUniformTable:function(program){var p=GL.programs[program];var ptable=GL.programInfos[program]={uniforms:{},maxUniformLength:0,maxAttributeLength:-1,maxUniformBlockNameLength:-1};var utable=ptable.uniforms;var numUniforms=GLctx.getProgramParameter(p,35718);for(var i=0;i<numUniforms;++i){var u=GLctx.getActiveUniform(p,i);var name=u.name;ptable.maxUniformLength=Math.max(ptable.maxUniformLength,name.length+1);if(name.slice(-1)=="]"){name=name.slice(0,name.lastIndexOf("["))}var loc=GLctx.getUniformLocation(p,name);if(loc){var id=GL.getNewId(GL.uniforms);utable[name]=[u.size,id];GL.uniforms[id]=loc;for(var j=1;j<u.size;++j){var n=name+"["+j+"]";loc=GLctx.getUniformLocation(p,n);id=GL.getNewId(GL.uniforms);GL.uniforms[id]=loc}}}}};function _glActiveTexture(x0){GLctx["activeTexture"](x0)}function _glAttachShader(program,shader){GLctx.attachShader(GL.programs[program],GL.shaders[shader])}function _glBindBuffer(target,buffer){if(target==34962){GL.currArrayBuffer=buffer}else if(target==34963){GL.currElementArrayBuffer=buffer}if(target==35051){GLctx.currentPixelPackBufferBinding=buffer}else if(target==35052){GLctx.currentPixelUnpackBufferBinding=buffer}GLctx.bindBuffer(target,GL.buffers[buffer])}function _glBindTexture(target,texture){GLctx.bindTexture(target,GL.textures[texture])}function _glBlendEquation(x0){GLctx["blendEquation"](x0)}function _glBlendEquationSeparate(x0,x1){GLctx["blendEquationSeparate"](x0,x1)}function _glBlendFunc(x0,x1){GLctx["blendFunc"](x0,x1)}function _glBlendFuncSeparate(x0,x1,x2,x3){GLctx["blendFuncSeparate"](x0,x1,x2,x3)}function _glBufferData(target,size,data,usage){if(GL.currentContext.version>=2){if(data){GLctx.bufferData(target,HEAPU8,usage,data,size)}else{GLctx.bufferData(target,size,usage)}}else{GLctx.bufferData(target,data?HEAPU8.subarray(data,data+size):size,usage)}}function _glClear(x0){GLctx["clear"](x0)}function _glClearColor(x0,x1,x2,x3){GLctx["clearColor"](x0,x1,x2,x3)}function _glCompileShader(shader){GLctx.compileShader(GL.shaders[shader])}function _glCreateProgram(){var id=GL.getNewId(GL.programs);var program=GLctx.createProgram();program.name=id;GL.programs[id]=program;return id}function _glCreateShader(shaderType){var id=GL.getNewId(GL.shaders);GL.shaders[id]=GLctx.createShader(shaderType);return id}function _glDisable(x0){GLctx["disable"](x0)}function _glDrawElements(mode,count,type,indices){var buf;if(!GL.currElementArrayBuffer){var size=GL.calcBufLength(1,type,0,count);buf=GL.getTempIndexBuffer(size);GLctx.bindBuffer(34963,buf);GLctx.bufferSubData(34963,0,HEAPU8.subarray(indices,indices+size));indices=0}GL.preDrawHandleClientVertexAttribBindings(count);GLctx.drawElements(mode,count,type,indices);GL.postDrawHandleClientVertexAttribBindings(count);if(!GL.currElementArrayBuffer){GLctx.bindBuffer(34963,null)}}function _glEnable(x0){GLctx["enable"](x0)}function _glEnableVertexAttribArray(index){var cb=GL.currentContext.clientBuffers[index];cb.enabled=true;GLctx.enableVertexAttribArray(index)}function __glGenObject(n,buffers,createFunction,objectTable){for(var i=0;i<n;i++){var buffer=GLctx[createFunction]();var id=buffer&&GL.getNewId(objectTable);if(buffer){buffer.name=id;objectTable[id]=buffer}else{GL.recordError(1282)}HEAP32[buffers+i*4>>2]=id}}function _glGenBuffers(n,buffers){__glGenObject(n,buffers,"createBuffer",GL.buffers)}function _glGenTextures(n,textures){__glGenObject(n,textures,"createTexture",GL.textures)}function _glGetAttribLocation(program,name){return GLctx.getAttribLocation(GL.programs[program],UTF8ToString(name))}function writeI53ToI64(ptr,num){HEAPU32[ptr>>2]=num;HEAPU32[ptr+4>>2]=(num-HEAPU32[ptr>>2])/4294967296}function emscriptenWebGLGet(name_,p,type){if(!p){GL.recordError(1281);return}var ret=undefined;switch(name_){case 36346:ret=1;break;case 36344:if(type!=0&&type!=1){GL.recordError(1280)}return;case 34814:case 36345:ret=0;break;case 34466:var formats=GLctx.getParameter(34467);ret=formats?formats.length:0;break;case 33309:if(GL.currentContext.version<2){GL.recordError(1282);return}var exts=GLctx.getSupportedExtensions()||[];ret=2*exts.length;break;case 33307:case 33308:if(GL.currentContext.version<2){GL.recordError(1280);return}ret=name_==33307?3:0;break}if(ret===undefined){var result=GLctx.getParameter(name_);switch(typeof result){case"number":ret=result;break;case"boolean":ret=result?1:0;break;case"string":GL.recordError(1280);return;case"object":if(result===null){switch(name_){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:{ret=0;break}default:{GL.recordError(1280);return}}}else if(result instanceof Float32Array||result instanceof Uint32Array||result instanceof Int32Array||result instanceof Array){for(var i=0;i<result.length;++i){switch(type){case 0:HEAP32[p+i*4>>2]=result[i];break;case 2:HEAPF32[p+i*4>>2]=result[i];break;case 4:HEAP8[p+i>>0]=result[i]?1:0;break}}return}else{try{ret=result.name|0}catch(e){GL.recordError(1280);err("GL_INVALID_ENUM in glGet"+type+"v: Unknown object returned from WebGL getParameter("+name_+")! (error: "+e+")");return}}break;default:GL.recordError(1280);err("GL_INVALID_ENUM in glGet"+type+"v: Native code calling glGet"+type+"v("+name_+") and it returns "+result+" of type "+typeof result+"!");return}}switch(type){case 1:writeI53ToI64(p,ret);break;case 0:HEAP32[p>>2]=ret;break;case 2:HEAPF32[p>>2]=ret;break;case 4:HEAP8[p>>0]=ret?1:0;break}}function _glGetIntegerv(name_,p){emscriptenWebGLGet(name_,p,0)}function _glGetProgramInfoLog(program,maxLength,length,infoLog){var log=GLctx.getProgramInfoLog(GL.programs[program]);if(log===null)log="(unknown error)";var numBytesWrittenExclNull=maxLength>0&&infoLog?stringToUTF8(log,infoLog,maxLength):0;if(length)HEAP32[length>>2]=numBytesWrittenExclNull}function _glGetProgramiv(program,pname,p){if(!p){GL.recordError(1281);return}if(program>=GL.counter){GL.recordError(1281);return}var ptable=GL.programInfos[program];if(!ptable){GL.recordError(1282);return}if(pname==35716){var log=GLctx.getProgramInfoLog(GL.programs[program]);if(log===null)log="(unknown error)";HEAP32[p>>2]=log.length+1}else if(pname==35719){HEAP32[p>>2]=ptable.maxUniformLength}else if(pname==35722){if(ptable.maxAttributeLength==-1){program=GL.programs[program];var numAttribs=GLctx.getProgramParameter(program,35721);ptable.maxAttributeLength=0;for(var i=0;i<numAttribs;++i){var activeAttrib=GLctx.getActiveAttrib(program,i);ptable.maxAttributeLength=Math.max(ptable.maxAttributeLength,activeAttrib.name.length+1)}}HEAP32[p>>2]=ptable.maxAttributeLength}else if(pname==35381){if(ptable.maxUniformBlockNameLength==-1){program=GL.programs[program];var numBlocks=GLctx.getProgramParameter(program,35382);ptable.maxUniformBlockNameLength=0;for(var i=0;i<numBlocks;++i){var activeBlockName=GLctx.getActiveUniformBlockName(program,i);ptable.maxUniformBlockNameLength=Math.max(ptable.maxUniformBlockNameLength,activeBlockName.length+1)}}HEAP32[p>>2]=ptable.maxUniformBlockNameLength}else{HEAP32[p>>2]=GLctx.getProgramParameter(GL.programs[program],pname)}}function _glGetShaderInfoLog(shader,maxLength,length,infoLog){var log=GLctx.getShaderInfoLog(GL.shaders[shader]);if(log===null)log="(unknown error)";var numBytesWrittenExclNull=maxLength>0&&infoLog?stringToUTF8(log,infoLog,maxLength):0;if(length)HEAP32[length>>2]=numBytesWrittenExclNull}function _glGetShaderiv(shader,pname,p){if(!p){GL.recordError(1281);return}if(pname==35716){var log=GLctx.getShaderInfoLog(GL.shaders[shader]);if(log===null)log="(unknown error)";HEAP32[p>>2]=log.length+1}else if(pname==35720){var source=GLctx.getShaderSource(GL.shaders[shader]);var sourceLength=source===null||source.length==0?0:source.length+1;HEAP32[p>>2]=sourceLength}else{HEAP32[p>>2]=GLctx.getShaderParameter(GL.shaders[shader],pname)}}function jstoi_q(str){return parseInt(str)}function _glGetUniformLocation(program,name){name=UTF8ToString(name);var arrayIndex=0;if(name[name.length-1]=="]"){var leftBrace=name.lastIndexOf("[");arrayIndex=name[leftBrace+1]!="]"?jstoi_q(name.slice(leftBrace+1)):0;name=name.slice(0,leftBrace)}var uniformInfo=GL.programInfos[program]&&GL.programInfos[program].uniforms[name];if(uniformInfo&&arrayIndex>=0&&arrayIndex<uniformInfo[0]){return uniformInfo[1]+arrayIndex}else{return-1}}function _glIsEnabled(x0){return GLctx["isEnabled"](x0)}function _glLinkProgram(program){GLctx.linkProgram(GL.programs[program]);GL.populateUniformTable(program)}function _glScissor(x0,x1,x2,x3){GLctx["scissor"](x0,x1,x2,x3)}function _glShaderSource(shader,count,string,length){var source=GL.getSource(shader,count,string,length);GLctx.shaderSource(GL.shaders[shader],source)}function __computeUnpackAlignedImageSize(width,height,sizePerPixel,alignment){function roundedToNextMultipleOf(x,y){return x+y-1&-y}var plainRowSize=width*sizePerPixel;var alignedRowSize=roundedToNextMultipleOf(plainRowSize,alignment);return height*alignedRowSize}function __colorChannelsInGlTextureFormat(format){var colorChannels={5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4};return colorChannels[format-6402]||1}function __heapObjectForWebGLType(type){type-=5120;if(type==0)return HEAP8;if(type==1)return HEAPU8;if(type==2)return HEAP16;if(type==4)return HEAP32;if(type==6)return HEAPF32;if(type==5||type==28922||type==28520||type==30779||type==30782)return HEAPU32;return HEAPU16}function __heapAccessShiftForWebGLHeap(heap){return 31-Math.clz32(heap.BYTES_PER_ELEMENT)}function emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,internalFormat){var heap=__heapObjectForWebGLType(type);var shift=__heapAccessShiftForWebGLHeap(heap);var byteSize=1<<shift;var sizePerPixel=__colorChannelsInGlTextureFormat(format)*byteSize;var bytes=__computeUnpackAlignedImageSize(width,height,sizePerPixel,GL.unpackAlignment);return heap.subarray(pixels>>shift,pixels+bytes>>shift)}function _glTexImage2D(target,level,internalFormat,width,height,border,format,type,pixels){if(GL.currentContext.version>=2){if(GLctx.currentPixelUnpackBufferBinding){GLctx.texImage2D(target,level,internalFormat,width,height,border,format,type,pixels)}else if(pixels){var heap=__heapObjectForWebGLType(type);GLctx.texImage2D(target,level,internalFormat,width,height,border,format,type,heap,pixels>>__heapAccessShiftForWebGLHeap(heap))}else{GLctx.texImage2D(target,level,internalFormat,width,height,border,format,type,null)}return}GLctx.texImage2D(target,level,internalFormat,width,height,border,format,type,pixels?emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,internalFormat):null)}function _glTexParameteri(x0,x1,x2){GLctx["texParameteri"](x0,x1,x2)}function _glUniform1i(location,v0){GLctx.uniform1i(GL.uniforms[location],v0)}function _glUniformMatrix4fv(location,count,transpose,value){if(GL.currentContext.version>=2){GLctx.uniformMatrix4fv(GL.uniforms[location],!!transpose,HEAPF32,value>>2,count*16);return}if(16*count<=GL.MINI_TEMP_BUFFER_SIZE){var view=GL.miniTempBufferFloatViews[16*count-1];var heap=HEAPF32;value>>=2;for(var i=0;i<16*count;i+=16){var dst=value+i;view[i]=heap[dst];view[i+1]=heap[dst+1];view[i+2]=heap[dst+2];view[i+3]=heap[dst+3];view[i+4]=heap[dst+4];view[i+5]=heap[dst+5];view[i+6]=heap[dst+6];view[i+7]=heap[dst+7];view[i+8]=heap[dst+8];view[i+9]=heap[dst+9];view[i+10]=heap[dst+10];view[i+11]=heap[dst+11];view[i+12]=heap[dst+12];view[i+13]=heap[dst+13];view[i+14]=heap[dst+14];view[i+15]=heap[dst+15]}}else{var view=HEAPF32.subarray(value>>2,value+count*64>>2)}GLctx.uniformMatrix4fv(GL.uniforms[location],!!transpose,view)}function _glUseProgram(program){GLctx.useProgram(GL.programs[program])}function _glVertexAttribPointer(index,size,type,normalized,stride,ptr){var cb=GL.currentContext.clientBuffers[index];if(!GL.currArrayBuffer){cb.size=size;cb.type=type;cb.normalized=normalized;cb.stride=stride;cb.ptr=ptr;cb.clientside=true;cb.vertexAttribPointerAdaptor=function(index,size,type,normalized,stride,ptr){this.vertexAttribPointer(index,size,type,normalized,stride,ptr)};return}cb.clientside=false;GLctx.vertexAttribPointer(index,size,type,!!normalized,stride,ptr)}function _glViewport(x0,x1,x2,x3){GLctx["viewport"](x0,x1,x2,x3)}function GLFW_Window(id,width,height,title,monitor,share){this.id=id;this.x=0;this.y=0;this.fullscreen=false;this.storedX=0;this.storedY=0;this.width=width;this.height=height;this.storedWidth=width;this.storedHeight=height;this.title=title;this.monitor=monitor;this.share=share;this.attributes=GLFW.hints;this.inputModes={208897:212993,208898:0,208899:0};this.buttons=0;this.keys=new Array;this.domKeys=new Array;this.shouldClose=0;this.title=null;this.windowPosFunc=null;this.windowSizeFunc=null;this.windowCloseFunc=null;this.windowRefreshFunc=null;this.windowFocusFunc=null;this.windowIconifyFunc=null;this.framebufferSizeFunc=null;this.mouseButtonFunc=null;this.cursorPosFunc=null;this.cursorEnterFunc=null;this.scrollFunc=null;this.dropFunc=null;this.keyFunc=null;this.charFunc=null;this.userptr=null}var GLFW={WindowFromId:function(id){if(id<=0||!GLFW.windows)return null;return GLFW.windows[id-1]},joystickFunc:null,errorFunc:null,monitorFunc:null,active:null,windows:null,monitors:null,monitorString:null,versionString:null,initialTime:null,extensions:null,hints:null,defaultHints:{131073:0,131074:0,131075:1,131076:1,131077:1,135169:8,135170:8,135171:8,135172:8,135173:24,135174:8,135175:0,135176:0,135177:0,135178:0,135179:0,135180:0,135181:0,135182:0,135183:0,139265:196609,139266:1,139267:0,139268:0,139269:0,139270:0,139271:0,139272:0},DOMToGLFWKeyCode:function(keycode){switch(keycode){case 32:return 32;case 222:return 39;case 188:return 44;case 173:return 45;case 189:return 45;case 190:return 46;case 191:return 47;case 48:return 48;case 49:return 49;case 50:return 50;case 51:return 51;case 52:return 52;case 53:return 53;case 54:return 54;case 55:return 55;case 56:return 56;case 57:return 57;case 59:return 59;case 61:return 61;case 187:return 61;case 65:return 65;case 66:return 66;case 67:return 67;case 68:return 68;case 69:return 69;case 70:return 70;case 71:return 71;case 72:return 72;case 73:return 73;case 74:return 74;case 75:return 75;case 76:return 76;case 77:return 77;case 78:return 78;case 79:return 79;case 80:return 80;case 81:return 81;case 82:return 82;case 83:return 83;case 84:return 84;case 85:return 85;case 86:return 86;case 87:return 87;case 88:return 88;case 89:return 89;case 90:return 90;case 219:return 91;case 220:return 92;case 221:return 93;case 192:return 94;case 27:return 256;case 13:return 257;case 9:return 258;case 8:return 259;case 45:return 260;case 46:return 261;case 39:return 262;case 37:return 263;case 40:return 264;case 38:return 265;case 33:return 266;case 34:return 267;case 36:return 268;case 35:return 269;case 20:return 280;case 145:return 281;case 144:return 282;case 44:return 283;case 19:return 284;case 112:return 290;case 113:return 291;case 114:return 292;case 115:return 293;case 116:return 294;case 117:return 295;case 118:return 296;case 119:return 297;case 120:return 298;case 121:return 299;case 122:return 300;case 123:return 301;case 124:return 302;case 125:return 303;case 126:return 304;case 127:return 305;case 128:return 306;case 129:return 307;case 130:return 308;case 131:return 309;case 132:return 310;case 133:return 311;case 134:return 312;case 135:return 313;case 136:return 314;case 96:return 320;case 97:return 321;case 98:return 322;case 99:return 323;case 100:return 324;case 101:return 325;case 102:return 326;case 103:return 327;case 104:return 328;case 105:return 329;case 110:return 330;case 111:return 331;case 106:return 332;case 109:return 333;case 107:return 334;case 16:return 340;case 17:return 341;case 18:return 342;case 91:return 343;case 93:return 348;default:return-1}},getModBits:function(win){var mod=0;if(win.keys[340])mod|=1;if(win.keys[341])mod|=2;if(win.keys[342])mod|=4;if(win.keys[343])mod|=8;return mod},onKeyPress:function(event){if(!GLFW.active||!GLFW.active.charFunc)return;if(event.ctrlKey||event.metaKey)return;var charCode=event.charCode;if(charCode==0||charCode>=0&&charCode<=31)return;dynCall_vii(GLFW.active.charFunc,GLFW.active.id,charCode)},onKeyChanged:function(keyCode,status){if(!GLFW.active)return;var key=GLFW.DOMToGLFWKeyCode(keyCode);if(key==-1)return;var repeat=status&&GLFW.active.keys[key];GLFW.active.keys[key]=status;GLFW.active.domKeys[keyCode]=status;if(!GLFW.active.keyFunc)return;if(repeat)status=2;dynCall_viiiii(GLFW.active.keyFunc,GLFW.active.id,key,keyCode,status,GLFW.getModBits(GLFW.active))},onGamepadConnected:function(event){GLFW.refreshJoysticks()},onGamepadDisconnected:function(event){GLFW.refreshJoysticks()},onKeydown:function(event){GLFW.onKeyChanged(event.keyCode,1);if(event.keyCode===8||event.keyCode===9){event.preventDefault()}},onKeyup:function(event){GLFW.onKeyChanged(event.keyCode,0)},onBlur:function(event){if(!GLFW.active)return;for(var i=0;i<GLFW.active.domKeys.length;++i){if(GLFW.active.domKeys[i]){GLFW.onKeyChanged(i,0)}}},onMousemove:function(event){if(!GLFW.active)return;Browser.calculateMouseEvent(event);if(event.target!=Module["canvas"]||!GLFW.active.cursorPosFunc)return;dynCall_vidd(GLFW.active.cursorPosFunc,GLFW.active.id,Browser.mouseX,Browser.mouseY)},DOMToGLFWMouseButton:function(event){var eventButton=event["button"];if(eventButton>0){if(eventButton==1){eventButton=2}else{eventButton=1}}return eventButton},onMouseenter:function(event){if(!GLFW.active)return;if(event.target!=Module["canvas"]||!GLFW.active.cursorEnterFunc)return;dynCall_vii(GLFW.active.cursorEnterFunc,GLFW.active.id,1)},onMouseleave:function(event){if(!GLFW.active)return;if(event.target!=Module["canvas"]||!GLFW.active.cursorEnterFunc)return;dynCall_vii(GLFW.active.cursorEnterFunc,GLFW.active.id,0)},onMouseButtonChanged:function(event,status){if(!GLFW.active)return;Browser.calculateMouseEvent(event);if(event.target!=Module["canvas"])return;var eventButton=GLFW.DOMToGLFWMouseButton(event);if(status==1){GLFW.active.buttons|=1<<eventButton;try{event.target.setCapture()}catch(e){}}else{GLFW.active.buttons&=~(1<<eventButton)}if(!GLFW.active.mouseButtonFunc)return;dynCall_viiii(GLFW.active.mouseButtonFunc,GLFW.active.id,eventButton,status,GLFW.getModBits(GLFW.active))},onMouseButtonDown:function(event){if(!GLFW.active)return;GLFW.onMouseButtonChanged(event,1)},onMouseButtonUp:function(event){if(!GLFW.active)return;GLFW.onMouseButtonChanged(event,0)},onMouseWheel:function(event){var delta=-Browser.getMouseWheelDelta(event);delta=delta==0?0:delta>0?Math.max(delta,1):Math.min(delta,-1);GLFW.wheelPos+=delta;if(!GLFW.active||!GLFW.active.scrollFunc||event.target!=Module["canvas"])return;var sx=0;var sy=0;if(event.type=="mousewheel"){sx=event.wheelDeltaX;sy=event.wheelDeltaY}else{sx=event.deltaX;sy=event.deltaY}dynCall_vidd(GLFW.active.scrollFunc,GLFW.active.id,sx,sy);event.preventDefault()},onCanvasResize:function(width,height){if(!GLFW.active)return;var resizeNeeded=true;if(document["fullscreen"]||document["fullScreen"]||document["mozFullScreen"]||document["webkitIsFullScreen"]){GLFW.active.storedX=GLFW.active.x;GLFW.active.storedY=GLFW.active.y;GLFW.active.storedWidth=GLFW.active.width;GLFW.active.storedHeight=GLFW.active.height;GLFW.active.x=GLFW.active.y=0;GLFW.active.width=screen.width;GLFW.active.height=screen.height;GLFW.active.fullscreen=true}else if(GLFW.active.fullscreen==true){GLFW.active.x=GLFW.active.storedX;GLFW.active.y=GLFW.active.storedY;GLFW.active.width=GLFW.active.storedWidth;GLFW.active.height=GLFW.active.storedHeight;GLFW.active.fullscreen=false}else if(GLFW.active.width!=width||GLFW.active.height!=height){GLFW.active.width=width;GLFW.active.height=height}else{resizeNeeded=false}if(resizeNeeded){Browser.setCanvasSize(GLFW.active.width,GLFW.active.height,true);GLFW.onWindowSizeChanged();GLFW.onFramebufferSizeChanged()}},onWindowSizeChanged:function(){if(!GLFW.active)return;if(!GLFW.active.windowSizeFunc)return;dynCall_viii(GLFW.active.windowSizeFunc,GLFW.active.id,GLFW.active.width,GLFW.active.height)},onFramebufferSizeChanged:function(){if(!GLFW.active)return;if(!GLFW.active.framebufferSizeFunc)return;dynCall_viii(GLFW.active.framebufferSizeFunc,GLFW.active.id,GLFW.active.width,GLFW.active.height)},getTime:function(){return _emscripten_get_now()/1e3},setWindowTitle:function(winid,title){var win=GLFW.WindowFromId(winid);if(!win)return;win.title=UTF8ToString(title);if(GLFW.active.id==win.id){document.title=win.title}},setJoystickCallback:function(cbfun){GLFW.joystickFunc=cbfun;GLFW.refreshJoysticks()},joys:{},lastGamepadState:null,lastGamepadStateFrame:null,refreshJoysticks:function(){if(Browser.mainLoop.currentFrameNumber!==GLFW.lastGamepadStateFrame||!Browser.mainLoop.currentFrameNumber){GLFW.lastGamepadState=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads:null;GLFW.lastGamepadStateFrame=Browser.mainLoop.currentFrameNumber;for(var joy=0;joy<GLFW.lastGamepadState.length;++joy){var gamepad=GLFW.lastGamepadState[joy];if(gamepad){if(!GLFW.joys[joy]){console.log("glfw joystick connected:",joy);GLFW.joys[joy]={id:allocate(intArrayFromString(gamepad.id),"i8",ALLOC_NORMAL),buttonsCount:gamepad.buttons.length,axesCount:gamepad.axes.length,buttons:allocate(new Array(gamepad.buttons.length),"i8",ALLOC_NORMAL),axes:allocate(new Array(gamepad.axes.length*4),"float",ALLOC_NORMAL)};if(GLFW.joystickFunc){dynCall_vii(GLFW.joystickFunc,joy,262145)}}var data=GLFW.joys[joy];for(var i=0;i<gamepad.buttons.length;++i){setValue(data.buttons+i,gamepad.buttons[i].pressed,"i8")}for(var i=0;i<gamepad.axes.length;++i){setValue(data.axes+i*4,gamepad.axes[i],"float")}}else{if(GLFW.joys[joy]){console.log("glfw joystick disconnected",joy);if(GLFW.joystickFunc){dynCall_vii(GLFW.joystickFunc,joy,262146)}_free(GLFW.joys[joy].id);_free(GLFW.joys[joy].buttons);_free(GLFW.joys[joy].axes);delete GLFW.joys[joy]}}}}},setKeyCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.keyFunc;win.keyFunc=cbfun;return prevcbfun},setCharCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.charFunc;win.charFunc=cbfun;return prevcbfun},setMouseButtonCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.mouseButtonFunc;win.mouseButtonFunc=cbfun;return prevcbfun},setCursorPosCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.cursorPosFunc;win.cursorPosFunc=cbfun;return prevcbfun},setScrollCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.scrollFunc;win.scrollFunc=cbfun;return prevcbfun},setDropCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.dropFunc;win.dropFunc=cbfun;return prevcbfun},onDrop:function(event){if(!GLFW.active||!GLFW.active.dropFunc)return;if(!event.dataTransfer||!event.dataTransfer.files||event.dataTransfer.files.length==0)return;event.preventDefault();var filenames=allocate(new Array(event.dataTransfer.files.length*4),"i8*",ALLOC_NORMAL);var filenamesArray=[];var count=event.dataTransfer.files.length;var written=0;var drop_dir=".glfw_dropped_files";FS.createPath("/",drop_dir);function save(file){var path="/"+drop_dir+"/"+file.name.replace(/\//g,"_");var reader=new FileReader;reader.onloadend=function(e){if(reader.readyState!=2){++written;console.log("failed to read dropped file: "+file.name+": "+reader.error);return}var data=e.target.result;FS.writeFile(path,new Uint8Array(data));if(++written===count){dynCall_viii(GLFW.active.dropFunc,GLFW.active.id,count,filenames);for(var i=0;i<filenamesArray.length;++i){_free(filenamesArray[i])}_free(filenames)}};reader.readAsArrayBuffer(file);var filename=allocate(intArrayFromString(path),"i8",ALLOC_NORMAL);filenamesArray.push(filename);setValue(filenames+i*4,filename,"i8*")}for(var i=0;i<count;++i){save(event.dataTransfer.files[i])}return false},onDragover:function(event){if(!GLFW.active||!GLFW.active.dropFunc)return;event.preventDefault();return false},setWindowSizeCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowSizeFunc;win.windowSizeFunc=cbfun;return prevcbfun},setWindowCloseCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowCloseFunc;win.windowCloseFunc=cbfun;return prevcbfun},setWindowRefreshCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowRefreshFunc;win.windowRefreshFunc=cbfun;return prevcbfun},onClickRequestPointerLock:function(e){if(!Browser.pointerLock&&Module["canvas"].requestPointerLock){Module["canvas"].requestPointerLock();e.preventDefault()}},setInputMode:function(winid,mode,value){var win=GLFW.WindowFromId(winid);if(!win)return;switch(mode){case 208897:{switch(value){case 212993:{win.inputModes[mode]=value;Module["canvas"].removeEventListener("click",GLFW.onClickRequestPointerLock,true);Module["canvas"].exitPointerLock();break}case 212994:{console.log("glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented.");break}case 212995:{win.inputModes[mode]=value;Module["canvas"].addEventListener("click",GLFW.onClickRequestPointerLock,true);Module["canvas"].requestPointerLock();break}default:{console.log("glfwSetInputMode called with unknown value parameter value: "+value+".");break}}break}case 208898:{console.log("glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented.");break}case 208899:{console.log("glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented.");break}default:{console.log("glfwSetInputMode called with unknown mode parameter value: "+mode+".");break}}},getKey:function(winid,key){var win=GLFW.WindowFromId(winid);if(!win)return 0;return win.keys[key]},getMouseButton:function(winid,button){var win=GLFW.WindowFromId(winid);if(!win)return 0;return(win.buttons&1<<button)>0},getCursorPos:function(winid,x,y){setValue(x,Browser.mouseX,"double");setValue(y,Browser.mouseY,"double")},getMousePos:function(winid,x,y){setValue(x,Browser.mouseX,"i32");setValue(y,Browser.mouseY,"i32")},setCursorPos:function(winid,x,y){},getWindowPos:function(winid,x,y){var wx=0;var wy=0;var win=GLFW.WindowFromId(winid);if(win){wx=win.x;wy=win.y}if(x){setValue(x,wx,"i32")}if(y){setValue(y,wy,"i32")}},setWindowPos:function(winid,x,y){var win=GLFW.WindowFromId(winid);if(!win)return;win.x=x;win.y=y},getWindowSize:function(winid,width,height){var ww=0;var wh=0;var win=GLFW.WindowFromId(winid);if(win){ww=win.width;wh=win.height}if(width){setValue(width,ww,"i32")}if(height){setValue(height,wh,"i32")}},setWindowSize:function(winid,width,height){var win=GLFW.WindowFromId(winid);if(!win)return;if(GLFW.active.id==win.id){if(width==screen.width&&height==screen.height){Browser.requestFullscreen()}else{Browser.exitFullscreen();Browser.setCanvasSize(width,height);win.width=width;win.height=height}}if(!win.windowSizeFunc)return;dynCall_viii(win.windowSizeFunc,win.id,width,height)},createWindow:function(width,height,title,monitor,share){var i,id;for(i=0;i<GLFW.windows.length&&GLFW.windows[i]!==null;i++){}if(i>0)throw"glfwCreateWindow only supports one window at time currently";id=i+1;if(width<=0||height<=0)return 0;if(monitor){Browser.requestFullscreen()}else{Browser.setCanvasSize(width,height)}for(i=0;i<GLFW.windows.length&&GLFW.windows[i]==null;i++){}if(i==GLFW.windows.length){var contextAttributes={antialias:GLFW.hints[135181]>1,depth:GLFW.hints[135173]>0,stencil:GLFW.hints[135174]>0,alpha:GLFW.hints[135172]>0};Module.ctx=Browser.createContext(Module["canvas"],true,true,contextAttributes)}if(!Module.ctx)return 0;var win=new GLFW_Window(id,width,height,title,monitor,share);if(id-1==GLFW.windows.length){GLFW.windows.push(win)}else{GLFW.windows[id-1]=win}GLFW.active=win;return win.id},destroyWindow:function(winid){var win=GLFW.WindowFromId(winid);if(!win)return;if(win.windowCloseFunc)dynCall_vi(win.windowCloseFunc,win.id);GLFW.windows[win.id-1]=null;if(GLFW.active.id==win.id)GLFW.active=null;for(var i=0;i<GLFW.windows.length;i++)if(GLFW.windows[i]!==null)return;Module.ctx=Browser.destroyContext(Module["canvas"],true,true)},swapBuffers:function(winid){},GLFW2ParamToGLFW3Param:function(param){var table={196609:0,196610:0,196611:0,196612:0,196613:0,196614:0,131073:0,131074:0,131075:0,131076:0,131077:135169,131078:135170,131079:135171,131080:135172,131081:135173,131082:135174,131083:135183,131084:135175,131085:135176,131086:135177,131087:135178,131088:135179,131089:135180,131090:0,131091:135181,131092:139266,131093:139267,131094:139270,131095:139271,131096:139272};return table[param]}};function _glfwCreateStandardCursor(shape){}function _glfwCreateWindow(width,height,title,monitor,share){return GLFW.createWindow(width,height,title,monitor,share)}function _glfwCreateWindowSurface(instance,winid,allocator,surface){throw"glfwCreateWindowSurface is not implemented."}function _glfwDestroyWindow(winid){return GLFW.destroyWindow(winid)}function _glfwFocusWindow(winid){}function _glfwGetClipboardString(win){}function _glfwGetCursorPos(winid,x,y){GLFW.getCursorPos(winid,x,y)}function _glfwGetFramebufferSize(winid,width,height){var ww=0;var wh=0;var win=GLFW.WindowFromId(winid);if(win){ww=win.width;wh=win.height}if(width){setValue(width,ww,"i32")}if(height){setValue(height,wh,"i32")}}function _glfwGetInputMode(winid,mode){var win=GLFW.WindowFromId(winid);if(!win)return;switch(mode){case 208897:{if(Browser.pointerLock){win.inputModes[mode]=212995}else{win.inputModes[mode]=212993}}}return win.inputModes[mode]}function _glfwGetJoystickAxes(joy,count){GLFW.refreshJoysticks();var state=GLFW.joys[joy];if(!state||!state.axes){setValue(count,0,"i32");return}setValue(count,state.axesCount,"i32");return state.axes}function _glfwGetJoystickButtons(joy,count){GLFW.refreshJoysticks();var state=GLFW.joys[joy];if(!state||!state.buttons){setValue(count,0,"i32");return}setValue(count,state.buttonsCount,"i32");return state.buttons}function _glfwGetMonitorPos(monitor,x,y){setValue(x,0,"i32");setValue(y,0,"i32")}function _glfwGetMonitors(count){setValue(count,1,"i32");if(!GLFW.monitors){GLFW.monitors=allocate([1,0,0,0],"i32",ALLOC_NORMAL)}return GLFW.monitors}function _glfwGetMouseButton(winid,button){return GLFW.getMouseButton(winid,button)}function _glfwGetTime(){return GLFW.getTime()-GLFW.initialTime}function _glfwGetVideoMode(monitor){return 0}function _glfwGetWindowAttrib(winid,attrib){var win=GLFW.WindowFromId(winid);if(!win)return 0;return win.attributes[attrib]}function _glfwGetWindowPos(winid,x,y){GLFW.getWindowPos(winid,x,y)}function _glfwGetWindowSize(winid,width,height){GLFW.getWindowSize(winid,width,height)}function _glfwInit(){if(GLFW.windows)return 1;GLFW.initialTime=GLFW.getTime();GLFW.hints=GLFW.defaultHints;GLFW.windows=new Array;GLFW.active=null;window.addEventListener("gamepadconnected",GLFW.onGamepadConnected,true);window.addEventListener("gamepaddisconnected",GLFW.onGamepadDisconnected,true);window.addEventListener("keydown",GLFW.onKeydown,true);window.addEventListener("keypress",GLFW.onKeyPress,true);window.addEventListener("keyup",GLFW.onKeyup,true);window.addEventListener("blur",GLFW.onBlur,true);Module["canvas"].addEventListener("touchmove",GLFW.onMousemove,true);Module["canvas"].addEventListener("touchstart",GLFW.onMouseButtonDown,true);Module["canvas"].addEventListener("touchcancel",GLFW.onMouseButtonUp,true);Module["canvas"].addEventListener("touchend",GLFW.onMouseButtonUp,true);Module["canvas"].addEventListener("mousemove",GLFW.onMousemove,true);Module["canvas"].addEventListener("mousedown",GLFW.onMouseButtonDown,true);Module["canvas"].addEventListener("mouseup",GLFW.onMouseButtonUp,true);Module["canvas"].addEventListener("wheel",GLFW.onMouseWheel,true);Module["canvas"].addEventListener("mousewheel",GLFW.onMouseWheel,true);Module["canvas"].addEventListener("mouseenter",GLFW.onMouseenter,true);Module["canvas"].addEventListener("mouseleave",GLFW.onMouseleave,true);Module["canvas"].addEventListener("drop",GLFW.onDrop,true);Module["canvas"].addEventListener("dragover",GLFW.onDragover,true);Browser.resizeListeners.push(function(width,height){GLFW.onCanvasResize(width,height)});return 1}function _glfwMakeContextCurrent(winid){}function _glfwPollEvents(){}function _glfwSetCharCallback(winid,cbfun){return GLFW.setCharCallback(winid,cbfun)}function _glfwSetClipboardString(win,string){}function _glfwSetCursor(winid,cursor){}function _glfwSetCursorPos(winid,x,y){GLFW.setCursorPos(winid,x,y)}function _glfwSetInputMode(winid,mode,value){GLFW.setInputMode(winid,mode,value)}function _glfwSetKeyCallback(winid,cbfun){return GLFW.setKeyCallback(winid,cbfun)}function _glfwSetMonitorCallback(cbfun){var prevcbfun=GLFW.monitorFunc;GLFW.monitorFunc=cbfun;return prevcbfun}function _glfwSetMouseButtonCallback(winid,cbfun){return GLFW.setMouseButtonCallback(winid,cbfun)}function _glfwSetScrollCallback(winid,cbfun){return GLFW.setScrollCallback(winid,cbfun)}function _glfwSetWindowCloseCallback(winid,cbfun){return GLFW.setWindowCloseCallback(winid,cbfun)}function _glfwSetWindowPos(winid,x,y){GLFW.setWindowPos(winid,x,y)}function _glfwSetWindowPosCallback(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowPosFunc;win.windowPosFunc=cbfun;return prevcbfun}function _glfwSetWindowSize(winid,width,height){GLFW.setWindowSize(winid,width,height)}function _glfwSetWindowSizeCallback(winid,cbfun){return GLFW.setWindowSizeCallback(winid,cbfun)}function _glfwSetWindowTitle(winid,title){GLFW.setWindowTitle(winid,title)}function _glfwShowWindow(winid){}function _glfwSwapBuffers(winid){GLFW.swapBuffers(winid)}function _glfwSwapInterval(interval){interval=Math.abs(interval);if(interval==0)_emscripten_set_main_loop_timing(0,0);else _emscripten_set_main_loop_timing(1,interval)}function _glfwTerminate(){window.removeEventListener("gamepadconnected",GLFW.onGamepadConnected,true);window.removeEventListener("gamepaddisconnected",GLFW.onGamepadDisconnected,true);window.removeEventListener("keydown",GLFW.onKeydown,true);window.removeEventListener("keypress",GLFW.onKeyPress,true);window.removeEventListener("keyup",GLFW.onKeyup,true);window.removeEventListener("blur",GLFW.onBlur,true);Module["canvas"].removeEventListener("touchmove",GLFW.onMousemove,true);Module["canvas"].removeEventListener("touchstart",GLFW.onMouseButtonDown,true);Module["canvas"].removeEventListener("touchcancel",GLFW.onMouseButtonUp,true);Module["canvas"].removeEventListener("touchend",GLFW.onMouseButtonUp,true);Module["canvas"].removeEventListener("mousemove",GLFW.onMousemove,true);Module["canvas"].removeEventListener("mousedown",GLFW.onMouseButtonDown,true);Module["canvas"].removeEventListener("mouseup",GLFW.onMouseButtonUp,true);Module["canvas"].removeEventListener("wheel",GLFW.onMouseWheel,true);Module["canvas"].removeEventListener("mousewheel",GLFW.onMouseWheel,true);Module["canvas"].removeEventListener("mouseenter",GLFW.onMouseenter,true);Module["canvas"].removeEventListener("mouseleave",GLFW.onMouseleave,true);Module["canvas"].removeEventListener("drop",GLFW.onDrop,true);Module["canvas"].removeEventListener("dragover",GLFW.onDragover,true);Module["canvas"].width=Module["canvas"].height=1;GLFW.windows=null;GLFW.active=null}function _glfwWindowHint(target,hint){GLFW.hints[target]=hint}function _round(d){d=+d;return d>=+0?+Math_floor(d+ +.5):+Math_ceil(d-+.5)}function _setTempRet0($i){setTempRet0($i|0)}function __isLeapYear(year){return year%4===0&&(year%100!==0||year%400===0)}function __arraySum(array,index){var sum=0;for(var i=0;i<=index;sum+=array[i++]){}return sum}var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function __addDays(date,days){var newDate=new Date(date.getTime());while(days>0){var leap=__isLeapYear(newDate.getFullYear());var currentMonth=newDate.getMonth();var daysInCurrentMonth=(leap?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR)[currentMonth];if(days>daysInCurrentMonth-newDate.getDate()){days-=daysInCurrentMonth-newDate.getDate()+1;newDate.setDate(1);if(currentMonth<11){newDate.setMonth(currentMonth+1)}else{newDate.setMonth(0);newDate.setFullYear(newDate.getFullYear()+1)}}else{newDate.setDate(newDate.getDate()+days);return newDate}}return newDate}function _strftime(s,maxsize,format,tm){var tm_zone=HEAP32[tm+40>>2];var date={tm_sec:HEAP32[tm>>2],tm_min:HEAP32[tm+4>>2],tm_hour:HEAP32[tm+8>>2],tm_mday:HEAP32[tm+12>>2],tm_mon:HEAP32[tm+16>>2],tm_year:HEAP32[tm+20>>2],tm_wday:HEAP32[tm+24>>2],tm_yday:HEAP32[tm+28>>2],tm_isdst:HEAP32[tm+32>>2],tm_gmtoff:HEAP32[tm+36>>2],tm_zone:tm_zone?UTF8ToString(tm_zone):""};var pattern=UTF8ToString(format);var EXPANSION_RULES_1={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var rule in EXPANSION_RULES_1){pattern=pattern.replace(new RegExp(rule,"g"),EXPANSION_RULES_1[rule])}var WEEKDAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];function leadingSomething(value,digits,character){var str=typeof value==="number"?value.toString():value||"";while(str.length<digits){str=character[0]+str}return str}function leadingNulls(value,digits){return leadingSomething(value,digits,"0")}function compareByDay(date1,date2){function sgn(value){return value<0?-1:value>0?1:0}var compare;if((compare=sgn(date1.getFullYear()-date2.getFullYear()))===0){if((compare=sgn(date1.getMonth()-date2.getMonth()))===0){compare=sgn(date1.getDate()-date2.getDate())}}return compare}function getFirstWeekStartDate(janFourth){switch(janFourth.getDay()){case 0:return new Date(janFourth.getFullYear()-1,11,29);case 1:return janFourth;case 2:return new Date(janFourth.getFullYear(),0,3);case 3:return new Date(janFourth.getFullYear(),0,2);case 4:return new Date(janFourth.getFullYear(),0,1);case 5:return new Date(janFourth.getFullYear()-1,11,31);case 6:return new Date(janFourth.getFullYear()-1,11,30)}}function getWeekBasedYear(date){var thisDate=__addDays(new Date(date.tm_year+1900,0,1),date.tm_yday);var janFourthThisYear=new Date(thisDate.getFullYear(),0,4);var janFourthNextYear=new Date(thisDate.getFullYear()+1,0,4);var firstWeekStartThisYear=getFirstWeekStartDate(janFourthThisYear);var firstWeekStartNextYear=getFirstWeekStartDate(janFourthNextYear);if(compareByDay(firstWeekStartThisYear,thisDate)<=0){if(compareByDay(firstWeekStartNextYear,thisDate)<=0){return thisDate.getFullYear()+1}else{return thisDate.getFullYear()}}else{return thisDate.getFullYear()-1}}var EXPANSION_RULES_2={"%a":function(date){return WEEKDAYS[date.tm_wday].substring(0,3)},"%A":function(date){return WEEKDAYS[date.tm_wday]},"%b":function(date){return MONTHS[date.tm_mon].substring(0,3)},"%B":function(date){return MONTHS[date.tm_mon]},"%C":function(date){var year=date.tm_year+1900;return leadingNulls(year/100|0,2)},"%d":function(date){return leadingNulls(date.tm_mday,2)},"%e":function(date){return leadingSomething(date.tm_mday,2," ")},"%g":function(date){return getWeekBasedYear(date).toString().substring(2)},"%G":function(date){return getWeekBasedYear(date)},"%H":function(date){return leadingNulls(date.tm_hour,2)},"%I":function(date){var twelveHour=date.tm_hour;if(twelveHour==0)twelveHour=12;else if(twelveHour>12)twelveHour-=12;return leadingNulls(twelveHour,2)},"%j":function(date){return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900)?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR,date.tm_mon-1),3)},"%m":function(date){return leadingNulls(date.tm_mon+1,2)},"%M":function(date){return leadingNulls(date.tm_min,2)},"%n":function(){return"\n"},"%p":function(date){if(date.tm_hour>=0&&date.tm_hour<12){return"AM"}else{return"PM"}},"%S":function(date){return leadingNulls(date.tm_sec,2)},"%t":function(){return"\t"},"%u":function(date){return date.tm_wday||7},"%U":function(date){var janFirst=new Date(date.tm_year+1900,0,1);var firstSunday=janFirst.getDay()===0?janFirst:__addDays(janFirst,7-janFirst.getDay());var endDate=new Date(date.tm_year+1900,date.tm_mon,date.tm_mday);if(compareByDay(firstSunday,endDate)<0){var februaryFirstUntilEndMonth=__arraySum(__isLeapYear(endDate.getFullYear())?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR,endDate.getMonth()-1)-31;var firstSundayUntilEndJanuary=31-firstSunday.getDate();var days=firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();return leadingNulls(Math.ceil(days/7),2)}return compareByDay(firstSunday,janFirst)===0?"01":"00"},"%V":function(date){var janFourthThisYear=new Date(date.tm_year+1900,0,4);var janFourthNextYear=new Date(date.tm_year+1901,0,4);var firstWeekStartThisYear=getFirstWeekStartDate(janFourthThisYear);var firstWeekStartNextYear=getFirstWeekStartDate(janFourthNextYear);var endDate=__addDays(new Date(date.tm_year+1900,0,1),date.tm_yday);if(compareByDay(endDate,firstWeekStartThisYear)<0){return"53"}if(compareByDay(firstWeekStartNextYear,endDate)<=0){return"01"}var daysDifference;if(firstWeekStartThisYear.getFullYear()<date.tm_year+1900){daysDifference=date.tm_yday+32-firstWeekStartThisYear.getDate()}else{daysDifference=date.tm_yday+1-firstWeekStartThisYear.getDate()}return leadingNulls(Math.ceil(daysDifference/7),2)},"%w":function(date){return date.tm_wday},"%W":function(date){var janFirst=new Date(date.tm_year,0,1);var firstMonday=janFirst.getDay()===1?janFirst:__addDays(janFirst,janFirst.getDay()===0?1:7-janFirst.getDay()+1);var endDate=new Date(date.tm_year+1900,date.tm_mon,date.tm_mday);if(compareByDay(firstMonday,endDate)<0){var februaryFirstUntilEndMonth=__arraySum(__isLeapYear(endDate.getFullYear())?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR,endDate.getMonth()-1)-31;var firstMondayUntilEndJanuary=31-firstMonday.getDate();var days=firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();return leadingNulls(Math.ceil(days/7),2)}return compareByDay(firstMonday,janFirst)===0?"01":"00"},"%y":function(date){return(date.tm_year+1900).toString().substring(2)},"%Y":function(date){return date.tm_year+1900},"%z":function(date){var off=date.tm_gmtoff;var ahead=off>=0;off=Math.abs(off)/60;off=off/60*100+off%60;return(ahead?"+":"-")+String("0000"+off).slice(-4)},"%Z":function(date){return date.tm_zone},"%%":function(){return"%"}};for(var rule in EXPANSION_RULES_2){if(pattern.indexOf(rule)>=0){pattern=pattern.replace(new RegExp(rule,"g"),EXPANSION_RULES_2[rule](date))}}var bytes=intArrayFromString(pattern,false);if(bytes.length>maxsize){return 0}writeArrayToMemory(bytes,s);return bytes.length-1}function _strftime_l(s,maxsize,format,tm){return _strftime(s,maxsize,format,tm)}var FSNode=function(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.mounted=null;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.node_ops={};this.stream_ops={};this.rdev=rdev};var readMode=292|73;var writeMode=146;Object.defineProperties(FSNode.prototype,{read:{get:function(){return(this.mode&readMode)===readMode},set:function(val){val?this.mode|=readMode:this.mode&=~readMode}},write:{get:function(){return(this.mode&writeMode)===writeMode},set:function(val){val?this.mode|=writeMode:this.mode&=~writeMode}},isFolder:{get:function(){return FS.isDir(this.mode)}},isDevice:{get:function(){return FS.isChrdev(this.mode)}}});FS.FSNode=FSNode;FS.staticInit();embind_init_charCodes();BindingError=Module["BindingError"]=extendError(Error,"BindingError");InternalError=Module["InternalError"]=extendError(Error,"InternalError");init_emval();UnboundTypeError=Module["UnboundTypeError"]=extendError(Error,"UnboundTypeError");Module["requestFullscreen"]=function Module_requestFullscreen(lockPointer,resizeCanvas){Browser.requestFullscreen(lockPointer,resizeCanvas)};Module["requestAnimationFrame"]=function Module_requestAnimationFrame(func){Browser.requestAnimationFrame(func)};Module["setCanvasSize"]=function Module_setCanvasSize(width,height,noUpdates){Browser.setCanvasSize(width,height,noUpdates)};Module["pauseMainLoop"]=function Module_pauseMainLoop(){Browser.mainLoop.pause()};Module["resumeMainLoop"]=function Module_resumeMainLoop(){Browser.mainLoop.resume()};Module["getUserMedia"]=function Module_getUserMedia(){Browser.getUserMedia()};Module["createContext"]=function Module_createContext(canvas,useWebGL,setInModule,webGLContextAttributes){return Browser.createContext(canvas,useWebGL,setInModule,webGLContextAttributes)};var GLctx;GL.init();var ASSERTIONS=false;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}var asmLibraryArg={"__cxa_allocate_exception":___cxa_allocate_exception,"__cxa_atexit":___cxa_atexit,"__cxa_thread_atexit":___cxa_thread_atexit,"__cxa_throw":___cxa_throw,"__map_file":___map_file,"__sys_munmap":___sys_munmap,"_embind_register_bool":__embind_register_bool,"_embind_register_emval":__embind_register_emval,"_embind_register_float":__embind_register_float,"_embind_register_function":__embind_register_function,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_void":__embind_register_void,"abort":_abort,"canvas_get_height":canvas_get_height,"canvas_get_width":canvas_get_width,"clock_gettime":_clock_gettime,"emscripten_call_worker":_emscripten_call_worker,"emscripten_create_worker":_emscripten_create_worker,"emscripten_get_sbrk_ptr":_emscripten_get_sbrk_ptr,"emscripten_get_worker_queue_size":_emscripten_get_worker_queue_size,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_set_main_loop_timing":_emscripten_set_main_loop_timing,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"get_ver":get_ver,"glActiveTexture":_glActiveTexture,"glAttachShader":_glAttachShader,"glBindBuffer":_glBindBuffer,"glBindTexture":_glBindTexture,"glBlendEquation":_glBlendEquation,"glBlendEquationSeparate":_glBlendEquationSeparate,"glBlendFunc":_glBlendFunc,"glBlendFuncSeparate":_glBlendFuncSeparate,"glBufferData":_glBufferData,"glClear":_glClear,"glClearColor":_glClearColor,"glCompileShader":_glCompileShader,"glCreateProgram":_glCreateProgram,"glCreateShader":_glCreateShader,"glDisable":_glDisable,"glDrawElements":_glDrawElements,"glEnable":_glEnable,"glEnableVertexAttribArray":_glEnableVertexAttribArray,"glGenBuffers":_glGenBuffers,"glGenTextures":_glGenTextures,"glGetAttribLocation":_glGetAttribLocation,"glGetIntegerv":_glGetIntegerv,"glGetProgramInfoLog":_glGetProgramInfoLog,"glGetProgramiv":_glGetProgramiv,"glGetShaderInfoLog":_glGetShaderInfoLog,"glGetShaderiv":_glGetShaderiv,"glGetUniformLocation":_glGetUniformLocation,"glIsEnabled":_glIsEnabled,"glLinkProgram":_glLinkProgram,"glScissor":_glScissor,"glShaderSource":_glShaderSource,"glTexImage2D":_glTexImage2D,"glTexParameteri":_glTexParameteri,"glUniform1i":_glUniform1i,"glUniformMatrix4fv":_glUniformMatrix4fv,"glUseProgram":_glUseProgram,"glVertexAttribPointer":_glVertexAttribPointer,"glViewport":_glViewport,"glfwCreateStandardCursor":_glfwCreateStandardCursor,"glfwCreateWindow":_glfwCreateWindow,"glfwCreateWindowSurface":_glfwCreateWindowSurface,"glfwDestroyWindow":_glfwDestroyWindow,"glfwFocusWindow":_glfwFocusWindow,"glfwGetClipboardString":_glfwGetClipboardString,"glfwGetCursorPos":_glfwGetCursorPos,"glfwGetFramebufferSize":_glfwGetFramebufferSize,"glfwGetInputMode":_glfwGetInputMode,"glfwGetJoystickAxes":_glfwGetJoystickAxes,"glfwGetJoystickButtons":_glfwGetJoystickButtons,"glfwGetMonitorPos":_glfwGetMonitorPos,"glfwGetMonitors":_glfwGetMonitors,"glfwGetMouseButton":_glfwGetMouseButton,"glfwGetTime":_glfwGetTime,"glfwGetVideoMode":_glfwGetVideoMode,"glfwGetWindowAttrib":_glfwGetWindowAttrib,"glfwGetWindowPos":_glfwGetWindowPos,"glfwGetWindowSize":_glfwGetWindowSize,"glfwInit":_glfwInit,"glfwMakeContextCurrent":_glfwMakeContextCurrent,"glfwPollEvents":_glfwPollEvents,"glfwSetCharCallback":_glfwSetCharCallback,"glfwSetClipboardString":_glfwSetClipboardString,"glfwSetCursor":_glfwSetCursor,"glfwSetCursorPos":_glfwSetCursorPos,"glfwSetInputMode":_glfwSetInputMode,"glfwSetKeyCallback":_glfwSetKeyCallback,"glfwSetMonitorCallback":_glfwSetMonitorCallback,"glfwSetMouseButtonCallback":_glfwSetMouseButtonCallback,"glfwSetScrollCallback":_glfwSetScrollCallback,"glfwSetWindowCloseCallback":_glfwSetWindowCloseCallback,"glfwSetWindowPos":_glfwSetWindowPos,"glfwSetWindowPosCallback":_glfwSetWindowPosCallback,"glfwSetWindowSize":_glfwSetWindowSize,"glfwSetWindowSizeCallback":_glfwSetWindowSizeCallback,"glfwSetWindowTitle":_glfwSetWindowTitle,"glfwShowWindow":_glfwShowWindow,"glfwSwapBuffers":_glfwSwapBuffers,"glfwSwapInterval":_glfwSwapInterval,"glfwTerminate":_glfwTerminate,"glfwWindowHint":_glfwWindowHint,"memory":wasmMemory,"notify_js_anim_sliders":notify_js_anim_sliders,"notify_js_focus_editor":notify_js_focus_editor,"notify_js_func_error_changed":notify_js_func_error_changed,"notify_js_marker":notify_js_marker,"notify_js_slider_error_changed":notify_js_slider_error_changed,"round":_round,"setTempRet0":_setTempRet0,"strftime_l":_strftime_l,"table":wasmTable};var asm=createWasm();Module["asm"]=asm;var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["__wasm_call_ctors"]).apply(null,arguments)};var ___em_js__get_ver=Module["___em_js__get_ver"]=function(){return(___em_js__get_ver=Module["___em_js__get_ver"]=Module["asm"]["__em_js__get_ver"]).apply(null,arguments)};var ___em_js__canvas_get_width=Module["___em_js__canvas_get_width"]=function(){return(___em_js__canvas_get_width=Module["___em_js__canvas_get_width"]=Module["asm"]["__em_js__canvas_get_width"]).apply(null,arguments)};var ___em_js__canvas_get_height=Module["___em_js__canvas_get_height"]=function(){return(___em_js__canvas_get_height=Module["___em_js__canvas_get_height"]=Module["asm"]["__em_js__canvas_get_height"]).apply(null,arguments)};var ___em_js__notify_js_focus_editor=Module["___em_js__notify_js_focus_editor"]=function(){return(___em_js__notify_js_focus_editor=Module["___em_js__notify_js_focus_editor"]=Module["asm"]["__em_js__notify_js_focus_editor"]).apply(null,arguments)};var ___em_js__notify_js_marker=Module["___em_js__notify_js_marker"]=function(){return(___em_js__notify_js_marker=Module["___em_js__notify_js_marker"]=Module["asm"]["__em_js__notify_js_marker"]).apply(null,arguments)};var ___em_js__notify_js_anim_sliders=Module["___em_js__notify_js_anim_sliders"]=function(){return(___em_js__notify_js_anim_sliders=Module["___em_js__notify_js_anim_sliders"]=Module["asm"]["__em_js__notify_js_anim_sliders"]).apply(null,arguments)};var ___em_js__notify_js_func_error_changed=Module["___em_js__notify_js_func_error_changed"]=function(){return(___em_js__notify_js_func_error_changed=Module["___em_js__notify_js_func_error_changed"]=Module["asm"]["__em_js__notify_js_func_error_changed"]).apply(null,arguments)};var ___em_js__notify_js_slider_error_changed=Module["___em_js__notify_js_slider_error_changed"]=function(){return(___em_js__notify_js_slider_error_changed=Module["___em_js__notify_js_slider_error_changed"]=Module["asm"]["__em_js__notify_js_slider_error_changed"]).apply(null,arguments)};var _main=Module["_main"]=function(){return(_main=Module["_main"]=Module["asm"]["main"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return(_malloc=Module["_malloc"]=Module["asm"]["malloc"]).apply(null,arguments)};var ___errno_location=Module["___errno_location"]=function(){return(___errno_location=Module["___errno_location"]=Module["asm"]["__errno_location"]).apply(null,arguments)};var _free=Module["_free"]=function(){return(_free=Module["_free"]=Module["asm"]["free"]).apply(null,arguments)};var ___getTypeName=Module["___getTypeName"]=function(){return(___getTypeName=Module["___getTypeName"]=Module["asm"]["__getTypeName"]).apply(null,arguments)};var ___embind_register_native_and_builtin_types=Module["___embind_register_native_and_builtin_types"]=function(){return(___embind_register_native_and_builtin_types=Module["___embind_register_native_and_builtin_types"]=Module["asm"]["__embind_register_native_and_builtin_types"]).apply(null,arguments)};var _setThrew=Module["_setThrew"]=function(){return(_setThrew=Module["_setThrew"]=Module["asm"]["setThrew"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["stackSave"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["stackAlloc"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["stackRestore"]).apply(null,arguments)};var __growWasmMemory=Module["__growWasmMemory"]=function(){return(__growWasmMemory=Module["__growWasmMemory"]=Module["asm"]["__growWasmMemory"]).apply(null,arguments)};var dynCall_viii=Module["dynCall_viii"]=function(){return(dynCall_viii=Module["dynCall_viii"]=Module["asm"]["dynCall_viii"]).apply(null,arguments)};var dynCall_ii=Module["dynCall_ii"]=function(){return(dynCall_ii=Module["dynCall_ii"]=Module["asm"]["dynCall_ii"]).apply(null,arguments)};var dynCall_vi=Module["dynCall_vi"]=function(){return(dynCall_vi=Module["dynCall_vi"]=Module["asm"]["dynCall_vi"]).apply(null,arguments)};var dynCall_iiii=Module["dynCall_iiii"]=function(){return(dynCall_iiii=Module["dynCall_iiii"]=Module["asm"]["dynCall_iiii"]).apply(null,arguments)};var dynCall_iii=Module["dynCall_iii"]=function(){return(dynCall_iii=Module["dynCall_iii"]=Module["asm"]["dynCall_iii"]).apply(null,arguments)};var dynCall_vii=Module["dynCall_vii"]=function(){return(dynCall_vii=Module["dynCall_vii"]=Module["asm"]["dynCall_vii"]).apply(null,arguments)};var dynCall_v=Module["dynCall_v"]=function(){return(dynCall_v=Module["dynCall_v"]=Module["asm"]["dynCall_v"]).apply(null,arguments)};var dynCall_i=Module["dynCall_i"]=function(){return(dynCall_i=Module["dynCall_i"]=Module["asm"]["dynCall_i"]).apply(null,arguments)};var dynCall_dii=Module["dynCall_dii"]=function(){return(dynCall_dii=Module["dynCall_dii"]=Module["asm"]["dynCall_dii"]).apply(null,arguments)};var dynCall_di=Module["dynCall_di"]=function(){return(dynCall_di=Module["dynCall_di"]=Module["asm"]["dynCall_di"]).apply(null,arguments)};var dynCall_viid=Module["dynCall_viid"]=function(){return(dynCall_viid=Module["dynCall_viid"]=Module["asm"]["dynCall_viid"]).apply(null,arguments)};var dynCall_vid=Module["dynCall_vid"]=function(){return(dynCall_vid=Module["dynCall_vid"]=Module["asm"]["dynCall_vid"]).apply(null,arguments)};var dynCall_vidddd=Module["dynCall_vidddd"]=function(){return(dynCall_vidddd=Module["dynCall_vidddd"]=Module["asm"]["dynCall_vidddd"]).apply(null,arguments)};var dynCall_vdddd=Module["dynCall_vdddd"]=function(){return(dynCall_vdddd=Module["dynCall_vdddd"]=Module["asm"]["dynCall_vdddd"]).apply(null,arguments)};var dynCall_d=Module["dynCall_d"]=function(){return(dynCall_d=Module["dynCall_d"]=Module["asm"]["dynCall_d"]).apply(null,arguments)};var dynCall_viidd=Module["dynCall_viidd"]=function(){return(dynCall_viidd=Module["dynCall_viidd"]=Module["asm"]["dynCall_viidd"]).apply(null,arguments)};var dynCall_vidd=Module["dynCall_vidd"]=function(){return(dynCall_vidd=Module["dynCall_vidd"]=Module["asm"]["dynCall_vidd"]).apply(null,arguments)};var dynCall_viiiii=Module["dynCall_viiiii"]=function(){return(dynCall_viiiii=Module["dynCall_viiiii"]=Module["asm"]["dynCall_viiiii"]).apply(null,arguments)};var dynCall_viiii=Module["dynCall_viiii"]=function(){return(dynCall_viiii=Module["dynCall_viiii"]=Module["asm"]["dynCall_viiii"]).apply(null,arguments)};var dynCall_viijii=Module["dynCall_viijii"]=function(){return(dynCall_viijii=Module["dynCall_viijii"]=Module["asm"]["dynCall_viijii"]).apply(null,arguments)};var dynCall_iiiii=Module["dynCall_iiiii"]=function(){return(dynCall_iiiii=Module["dynCall_iiiii"]=Module["asm"]["dynCall_iiiii"]).apply(null,arguments)};var dynCall_iijii=Module["dynCall_iijii"]=function(){return(dynCall_iijii=Module["dynCall_iijii"]=Module["asm"]["dynCall_iijii"]).apply(null,arguments)};var dynCall_iidiiii=Module["dynCall_iidiiii"]=function(){return(dynCall_iidiiii=Module["dynCall_iidiiii"]=Module["asm"]["dynCall_iidiiii"]).apply(null,arguments)};var dynCall_jiji=Module["dynCall_jiji"]=function(){return(dynCall_jiji=Module["dynCall_jiji"]=Module["asm"]["dynCall_jiji"]).apply(null,arguments)};var dynCall_iiiiii=Module["dynCall_iiiiii"]=function(){return(dynCall_iiiiii=Module["dynCall_iiiiii"]=Module["asm"]["dynCall_iiiiii"]).apply(null,arguments)};var dynCall_iiiiiiiii=Module["dynCall_iiiiiiiii"]=function(){return(dynCall_iiiiiiiii=Module["dynCall_iiiiiiiii"]=Module["asm"]["dynCall_iiiiiiiii"]).apply(null,arguments)};var dynCall_iiiiiii=Module["dynCall_iiiiiii"]=function(){return(dynCall_iiiiiii=Module["dynCall_iiiiiii"]=Module["asm"]["dynCall_iiiiiii"]).apply(null,arguments)};var dynCall_iiiiij=Module["dynCall_iiiiij"]=function(){return(dynCall_iiiiij=Module["dynCall_iiiiij"]=Module["asm"]["dynCall_iiiiij"]).apply(null,arguments)};var dynCall_iiiiid=Module["dynCall_iiiiid"]=function(){return(dynCall_iiiiid=Module["dynCall_iiiiid"]=Module["asm"]["dynCall_iiiiid"]).apply(null,arguments)};var dynCall_iiiiijj=Module["dynCall_iiiiijj"]=function(){return(dynCall_iiiiijj=Module["dynCall_iiiiijj"]=Module["asm"]["dynCall_iiiiijj"]).apply(null,arguments)};var dynCall_iiiiiiii=Module["dynCall_iiiiiiii"]=function(){return(dynCall_iiiiiiii=Module["dynCall_iiiiiiii"]=Module["asm"]["dynCall_iiiiiiii"]).apply(null,arguments)};var dynCall_iiiiiijj=Module["dynCall_iiiiiijj"]=function(){return(dynCall_iiiiiijj=Module["dynCall_iiiiiijj"]=Module["asm"]["dynCall_iiiiiijj"]).apply(null,arguments)};var dynCall_viiiiii=Module["dynCall_viiiiii"]=function(){return(dynCall_viiiiii=Module["dynCall_viiiiii"]=Module["asm"]["dynCall_viiiiii"]).apply(null,arguments)};Module["asm"]=asm;var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}var calledMain=false;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function callMain(args){var entryFunction=Module["_main"];args=args||[];var argc=args.length+1;var argv=stackAlloc((argc+1)*4);HEAP32[argv>>2]=allocateUTF8OnStack(thisProgram);for(var i=1;i<argc;i++){HEAP32[(argv>>2)+i]=allocateUTF8OnStack(args[i-1])}HEAP32[(argv>>2)+argc]=0;try{var ret=entryFunction(argc,argv);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="unwind"){noExitRuntime=true;return}else{var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}err("exception thrown: "+toLog);quit_(1,e)}}finally{calledMain=true}}function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0)return;function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(shouldRunNow)callMain(args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){if(implicit&&noExitRuntime&&status===0){return}if(noExitRuntime){}else{ABORT=true;EXITSTATUS=status;exitRuntime();if(Module["onExit"])Module["onExit"](status)}quit_(status,new ExitStatus(status))}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"])shouldRunNow=false;noExitRuntime=true;run();
