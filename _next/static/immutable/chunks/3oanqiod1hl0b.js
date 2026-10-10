(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32892,(e,t,r)=>{"use strict";var n=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty,o="u">typeof Element;t.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var d,s,l,c=n(t),u=n(r);if(c&&u){if((s=t.length)!=r.length)return!1;for(d=s;0!=d--;)if(!e(t[d],r[d]))return!1;return!0}if(c!=u)return!1;var p=t instanceof Date,f=r instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==r.getTime();var h=t instanceof RegExp,m=r instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==r.toString();var g=i(t);if((s=g.length)!==i(r).length)return!1;for(d=s;0!=d--;)if(!a.call(r,g[d]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(d=s;0!=d--;)if(("_owner"!==(l=g[d])||!t.$$typeof)&&!e(t[l],r[l]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-0x7ff5ffe4===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},52210,(e,t,r)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,i=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,d=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,$=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case u:case p:case o:case s:case d:case h:return e;default:switch(e=e&&e.$$typeof){case c:case f:case $:case g:case l:return e;default:return t}}case a:return t}}}function _(e){return w(e)===p}r.AsyncMode=u,r.ConcurrentMode=p,r.ContextConsumer=c,r.ContextProvider=l,r.Element=i,r.ForwardRef=f,r.Fragment=o,r.Lazy=$,r.Memo=g,r.Portal=a,r.Profiler=s,r.StrictMode=d,r.Suspense=h,r.isAsyncMode=function(e){return _(e)||w(e)===u},r.isConcurrentMode=_,r.isContextConsumer=function(e){return w(e)===c},r.isContextProvider=function(e){return w(e)===l},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},r.isForwardRef=function(e){return w(e)===f},r.isFragment=function(e){return w(e)===o},r.isLazy=function(e){return w(e)===$},r.isMemo=function(e){return w(e)===g},r.isPortal=function(e){return w(e)===a},r.isProfiler=function(e){return w(e)===s},r.isStrictMode=function(e){return w(e)===d},r.isSuspense=function(e){return w(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===p||e===s||e===d||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===$||e.$$typeof===g||e.$$typeof===l||e.$$typeof===c||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===x||e.$$typeof===y)},r.typeOf=w},79684,(e,t,r)=>{"use strict";e.i(47167),t.exports=e.r(52210)},98437,(e,t,r)=>{"use strict";var n=e.r(79684),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};function s(e){return n.isMemo(e)?o:d[e.$$typeof]||i}d[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d[n.Memo]=o;var l=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;t.exports=function e(t,r,n){if("string"!=typeof r){if(h){var i=f(r);i&&i!==h&&e(t,i,n)}var o=c(r);u&&(o=o.concat(u(r)));for(var d=s(t),m=s(r),g=0;g<o.length;++g){var $=o[g];if(!a[$]&&!(n&&n[$])&&!(m&&m[$])&&!(d&&d[$])){var y=p(r,$);try{l(t,$,y)}catch(e){}}}}return t}},29936,(e,t,r)=>{"use strict";function n(e){this._maxSize=e,this.clear()}n.prototype.clear=function(){this._size=0,this._values=Object.create(null)},n.prototype.get=function(e){return this._values[e]},n.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),!(e in this._values)&&this._size++,this._values[e]=t};var i=/[^.^\]^[]+|(?=\[\]|\.\.)/g,a=/^\d+$/,o=/^\d/,d=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,s=/^\s*(['"]?)(.*?)(\1)\s*$/,l=new n(512),c=new n(512),u=new n(512);function p(e){return l.get(e)||l.set(e,f(e).map(function(e){return e.replace(s,"$2")}))}function f(e){return e.match(i)||[""]}function h(e){return"string"==typeof e&&e&&-1!==["'",'"'].indexOf(e.charAt(0))}t.exports={Cache:n,split:f,normalizePath:p,setter:function(e){var t=p(e);return c.get(e)||c.set(e,function(e,r){for(var n=0,i=t.length,a=e;n<i-1;){var o=t[n];if("__proto__"===o||"constructor"===o||"prototype"===o)return e;a=a[t[n++]]}a[t[n]]=r})},getter:function(e,t){var r=p(e);return u.get(e)||u.set(e,function(e){for(var n=0,i=r.length;n<i;)if(null==e&&t)return;else e=e[r[n++]];return e})},join:function(e){return e.reduce(function(e,t){return e+(h(t)||a.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(e,t,r){!function(e,t,r){var n,i,s,l,c=e.length;for(i=0;i<c;i++)(n=e[i])&&(function(e){return!h(e)&&(e.match(o)&&!e.match(a)||d.test(e))}(n)&&(n='"'+n+'"'),s=!(l=h(n))&&/^\d+$/.test(n),t.call(r,n,l,s,i,e))}(Array.isArray(e)?e:f(e),t,r)}}},3873,(e,t,r)=>{let n=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,i=e=>e.match(n)||[],a=e=>e[0].toUpperCase()+e.slice(1),o=(e,t)=>i(e).join(t).toLowerCase(),d=e=>i(e).reduce((e,t)=>`${e}${!e?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()}`,"");t.exports={words:i,upperFirst:a,camelCase:d,pascalCase:e=>a(d(e)),snakeCase:e=>o(e,"_"),kebabCase:e=>o(e,"-"),sentenceCase:e=>a(o(e," ")),titleCase:e=>i(e).map(a).join(" ")}},1439,(e,t,r)=>{function n(e,t){var r=e.length,n=Array(r),i={},a=r,o=function(e){for(var t=new Map,r=0,n=e.length;r<n;r++){var i=e[r];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}(t),d=function(e){for(var t=new Map,r=0,n=e.length;r<n;r++)t.set(e[r],r);return t}(e);for(t.forEach(function(e){if(!d.has(e[0])||!d.has(e[1]))throw Error("Unknown node. There is an unknown node in the supplied edges.")});a--;)i[a]||function e(t,a,s){if(s.has(t)){var l;try{l=", node was:"+JSON.stringify(t)}catch(e){l=""}throw Error("Cyclic dependency"+l)}if(!d.has(t))throw Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(t));if(!i[a]){i[a]=!0;var c=o.get(t)||new Set;if(a=(c=Array.from(c)).length){s.add(t);do{var u=c[--a];e(u,d.get(u),s)}while(a)s.delete(t)}n[--r]=t}}(e[a],a,new Set);return n}t.exports=function(e){return n(function(e){for(var t=new Set,r=0,n=e.length;r<n;r++){var i=e[r];t.add(i[0]),t.add(i[1])}return Array.from(t)}(e),e)},t.exports.array=n},46696,e=>{"use strict";var t=e.i(71645),r=e.i(74080);let n=Array(12).fill(0),i=({visible:e,className:r})=>t.default.createElement("div",{className:["sonner-loading-wrapper",r].filter(Boolean).join(" "),"data-visible":e},t.default.createElement("div",{className:"sonner-spinner"},n.map((e,r)=>t.default.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),a=t.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20","aria-hidden":"true"},t.default.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),o=t.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20","aria-hidden":"true"},t.default.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),d=t.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20","aria-hidden":"true"},t.default.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),s=t.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20","aria-hidden":"true"},t.default.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),l=t.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},t.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),c=1,u=e=>{var t;return"number"==typeof(null==e?void 0:e.id)||(null==e||null==(t=e.id)?void 0:t.length)>0?e.id:c++},p=new class{constructor(){this.subscribe=e=>(this.subscribers.push(e),this.getActiveToasts().forEach(t=>e(t)),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e],this.trimHistory()},this.trimHistory=()=>{let e=this.toasts.length-100;e<=0||(this.toasts=this.toasts.filter(t=>!(e>0&&this.dismissedToasts.has(t.id))||(this.dismissedToasts.delete(t.id),e--,!1)))},this.create=e=>{let{message:t,...r}=e,n=u(e),i=this.pendingDismissals.get(n);void 0!==i&&(cancelAnimationFrame(i),this.pendingDismissals.delete(n),this.dismissedToasts.delete(n));let a=this.dismissedToasts.has(n),o=void 0===e.dismissible||e.dismissible;return a&&(this.dismissedToasts.delete(n),this.toasts=this.toasts.filter(e=>e.id!==n)),(a?void 0:this.toasts.find(e=>e.id===n))?this.toasts=this.toasts.map(r=>r.id===n?(this.publish({...r,...e,id:n,title:t}),{...r,...e,id:n,dismissible:o,title:t}):r):this.addToast({title:t,...r,dismissible:o,id:n}),n},this.dismiss=e=>{if(null==e)return this.getActiveToasts().forEach(e=>{this.dismissedToasts.add(e.id),this.subscribers.forEach(t=>t({id:e.id,dismiss:!0}))}),e;this.dismissedToasts.add(e);let t=this.pendingDismissals.get(e);return void 0!==t&&cancelAnimationFrame(t),this.pendingDismissals.set(e,requestAnimationFrame(()=>{this.pendingDismissals.delete(e),this.subscribers.forEach(t=>t({id:e,dismiss:!0}))})),e},this.message=(e,t)=>this.create({...t,message:e,type:void 0}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,r)=>{let n,i;if(!r)return;void 0!==r.loading&&(i=this.create({...r,promise:e,type:"loading",message:r.loading,description:"function"!=typeof r.description?r.description:void 0}));let a=Promise.resolve(e instanceof Function?e():e),o=void 0!==i,d=a.then(async e=>{if(n=["resolve",e],t.default.isValidElement(e))o=!1,this.create({id:i,type:"default",message:e});else if(f(e)&&!e.ok){o=!1;let n="function"==typeof r.error?await r.error(`HTTP error! status: ${e.status}`):r.error,a="function"==typeof r.description?await r.description(`HTTP error! status: ${e.status}`):r.description,d="object"!=typeof n||t.default.isValidElement(n)?{message:n}:n;this.create({id:i,type:"error",description:a,...d})}else if(e instanceof Error){o=!1;let n="function"==typeof r.error?await r.error(e):r.error,a="function"==typeof r.description?await r.description(e):r.description,d="object"!=typeof n||t.default.isValidElement(n)?{message:n}:n;this.create({id:i,type:"error",description:a,...d})}else if(void 0!==r.success){o=!1;let n="function"==typeof r.success?await r.success(e):r.success,a="function"==typeof r.description?await r.description(e):r.description,d="object"!=typeof n||t.default.isValidElement(n)?{message:n}:n;this.create({id:i,type:"success",description:a,...d})}}).catch(async e=>{if(n=["reject",e],void 0!==r.error){o=!1;let n="function"==typeof r.error?await r.error(e):r.error,a="function"==typeof r.description?await r.description(e):r.description,d="object"!=typeof n||t.default.isValidElement(n)?{message:n}:n;this.create({id:i,type:"error",description:a,...d})}}).finally(()=>{o&&(this.dismiss(i),i=void 0),null==r.finally||r.finally.call(r)}),s=()=>new Promise((e,t)=>d.then(()=>"reject"===n[0]?t(n[1]):e(n[1])).catch(t));return"string"!=typeof i&&"number"!=typeof i?{unwrap:s}:Object.assign(i,{unwrap:s})},this.custom=(e,t)=>{let r=u(t);return this.create({...t,jsx:e(r),id:r,type:void 0}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set,this.pendingDismissals=new Map}},f=e=>e&&"object"==typeof e&&"ok"in e&&"boolean"==typeof e.ok&&"status"in e&&"number"==typeof e.status,h=Object.assign((e,t)=>p.message(e,t),{success:p.success,info:p.info,warning:p.warning,error:p.error,custom:p.custom,message:p.message,promise:p.promise,dismiss:p.dismiss,loading:p.loading},{getHistory:()=>p.toasts,getToasts:()=>p.getActiveToasts()});function m(e){return void 0!==e.label}function g(...e){return e.filter(Boolean).join(" ")}!function(e){if(!e||"u"<typeof document)return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");let $=e=>{var r,n,c,u,p,f,h,$,y,v,b;let{invert:x,toast:w,unstyled:_,interacting:j,setHeights:k,visibleToasts:C,heights:N,index:I,toasts:S,expanded:E,removeToast:T,defaultRichColors:O,closeButton:A,style:P,cancelButtonStyle:F,actionButtonStyle:R,className:L="",descriptionClassName:M="",duration:z,position:D,gap:B,expandByDefault:U,classNames:G,icons:V,closeButtonAriaLabel:H="Close toast"}=e,[W,Y]=t.default.useState(null),[Z,K]=t.default.useState(null),[q,X]=t.default.useState(!1),[J,Q]=t.default.useState(!1),[ee,et]=t.default.useState(!1),[er,en]=t.default.useState(!1),[ei,ea]=t.default.useState(!1),[eo,ed]=t.default.useState(0),[es,el]=t.default.useState(0),ec=t.default.useRef(w.duration||z||4e3),eu=t.default.useRef(null),ep=t.default.useRef(null),ef=0===I,eh=I+1<=C,em=w.type,eg=null!=em?em:"default",e$=!1!==w.dismissible,ey=w.className||"",ev=w.descriptionClassName||"",eb=t.default.useMemo(()=>N.findIndex(e=>e.toastId===w.id)||0,[N,w.id]),ex=t.default.useMemo(()=>{var e;return null!=(e=w.closeButton)?e:A},[w.closeButton,A]),ew=t.default.useMemo(()=>w.duration||z||4e3,[w.duration,z]),e_=t.default.useRef(0),ej=t.default.useRef(0),ek=t.default.useRef(0),eC=t.default.useRef(null),[eN,eI]=D.split("-"),eS=t.default.useMemo(()=>N.reduce((e,t,r)=>r>=eb?e:e+t.height,0),[N,eb]),eE=(()=>{let[e,r]=t.default.useState(document.hidden);return t.default.useEffect(()=>{let e=()=>{r(document.hidden)};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]),e})(),eT=t.default.useMemo(()=>{var t;return null!=(t=e.swipeDirections)?t:function(e){let[t,r]=e.split("-"),n=[];return t&&n.push(t),r&&n.push(r),n}(D)},[e.swipeDirections,D]),eO=w.invert||x,eA="loading"===em;ej.current=t.default.useMemo(()=>eb*B+eS,[eb,eS]),t.default.useEffect(()=>{ec.current=ew},[ew]),t.default.useEffect(()=>{X(!0)},[]),t.default.useEffect(()=>{let e=ep.current;if(e){let t=e.getBoundingClientRect().height;return el(t),k(e=>[{toastId:w.id,height:t,position:w.position},...e]),()=>k(e=>e.filter(e=>e.toastId!==w.id))}},[k,w.id]),t.default.useLayoutEffect(()=>{if(!q)return;let e=ep.current,t=e.style.height;e.style.height="auto";let r=e.getBoundingClientRect().height;e.style.height=t,el(r),k(e=>e.find(e=>e.toastId===w.id)?e.map(e=>e.toastId===w.id?{...e,height:r}:e):[{toastId:w.id,height:r,position:w.position},...e])},[q,w.title,w.description,k,w.id,w.jsx,w.action,w.cancel]);let eP=t.default.useCallback(()=>{Q(!0),ed(ej.current),k(e=>e.filter(e=>e.toastId!==w.id)),setTimeout(()=>{T(w)},200)},[w,T,k,ej]);function eF(){var e,r;return(null==V?void 0:V.loading)?t.default.createElement("div",{className:g(null==G?void 0:G.loader,null==w||null==(r=w.classNames)?void 0:r.loader,"sonner-loader"),"data-visible":"loading"===em},V.loading):t.default.createElement(i,{className:g(null==G?void 0:G.loader,null==w||null==(e=w.classNames)?void 0:e.loader),visible:"loading"===em})}t.default.useEffect(()=>{let e;if((!w.promise||"loading"!==em)&&w.duration!==1/0&&"loading"!==w.type){if(E||j||eE){if(ek.current<e_.current){let e=new Date().getTime()-e_.current;ec.current=ec.current-e}ek.current=new Date().getTime()}else ec.current!==1/0&&(e_.current=new Date().getTime(),e=setTimeout(()=>{null==w.onAutoClose||w.onAutoClose.call(w,w),eP()},ec.current));return()=>clearTimeout(e)}},[E,j,w,em,eE,eP]),t.default.useEffect(()=>{w.delete&&(eP(),null==w.onDismiss||w.onDismiss.call(w,w))},[eP,w.delete]);let eR=w.icon||(null==V?void 0:V[em])||(e=>{switch(e){case"success":return a;case"info":return d;case"warning":return o;case"error":return s;default:return null}})(em);return t.default.createElement("li",{tabIndex:0,ref:ep,className:g(L,ey,null==G?void 0:G.toast,null==w||null==(r=w.classNames)?void 0:r.toast,null==G?void 0:G[eg],null==w||null==(n=w.classNames)?void 0:n[eg]),"data-sonner-toast":"","data-rich-colors":null!=(v=w.richColors)?v:O,"data-styled":!(w.jsx||w.unstyled||_),"data-mounted":q,"data-promise":!!w.promise,"data-swiped":ei,"data-removed":J,"data-visible":eh,"data-y-position":eN,"data-x-position":eI,"data-index":I,"data-front":ef,"data-swiping":ee,"data-dismissible":e$,"data-type":em,"data-invert":eO,"data-swipe-out":er,"data-swipe-direction":Z,"data-expanded":!!(E||U&&q),"data-testid":w.testId,style:{"--index":I,"--toasts-before":I,"--z-index":S.length-I,"--offset":`${J?eo:ej.current}px`,"--initial-height":U?"auto":`${es}px`,...P,...w.style},onDragEnd:()=>{et(!1),Y(null),eC.current=null},onPointerDown:e=>{2===e.button||eA||!e$||(eu.current=new Date,ed(ej.current),e.target.setPointerCapture(e.pointerId),"BUTTON"!==e.target.tagName&&(et(!0),eC.current={x:e.clientX,y:e.clientY}))},onPointerUp:()=>{var e,t,r,n,i;if(er||!e$)return;eC.current=null;let a=Number((null==(e=ep.current)?void 0:e.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),o=Number((null==(t=ep.current)?void 0:t.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),d=new Date().getTime()-(null==(r=eu.current)?void 0:r.getTime()),s="x"===W?a:o,l=Math.abs(s)/d;if(("x"===W?eT.includes(a>0?"right":"left"):eT.includes(o>0?"bottom":"top"))&&(Math.abs(s)>=45||l>.11)){ed(ej.current),null==w.onDismiss||w.onDismiss.call(w,w),"x"===W?K(a>0?"right":"left"):K(o>0?"down":"up"),eP(),en(!0);return}null==(n=ep.current)||n.style.setProperty("--swipe-amount-x","0px"),null==(i=ep.current)||i.style.setProperty("--swipe-amount-y","0px"),ea(!1),et(!1),Y(null)},onPointerMove:e=>{var t,r,n;if(!eC.current||!e$||(null==(t=window.getSelection())?void 0:t.toString().length)>0)return;let i=e.clientY-eC.current.y,a=e.clientX-eC.current.x;!W&&(Math.abs(a)>1||Math.abs(i)>1)&&Y(Math.abs(a)>Math.abs(i)?"x":"y");let o={x:0,y:0},d=e=>1/(1.5+Math.abs(e)/20);if("y"===W){if(eT.includes("top")||eT.includes("bottom"))if(eT.includes("top")&&i<0||eT.includes("bottom")&&i>0)o.y=i;else{let e=i*d(i);o.y=Math.abs(e)<Math.abs(i)?e:i}}else if("x"===W&&(eT.includes("left")||eT.includes("right")))if(eT.includes("left")&&a<0||eT.includes("right")&&a>0)o.x=a;else{let e=a*d(a);o.x=Math.abs(e)<Math.abs(a)?e:a}(Math.abs(o.x)>0||Math.abs(o.y)>0)&&ea(!0),null==(r=ep.current)||r.style.setProperty("--swipe-amount-x",`${o.x}px`),null==(n=ep.current)||n.style.setProperty("--swipe-amount-y",`${o.y}px`)}},ex&&!w.jsx&&"loading"!==em?t.default.createElement("button",{"aria-label":H,"data-disabled":eA,"data-close-button":!0,onClick:eA||!e$?()=>{}:()=>{eP(),null==w.onDismiss||w.onDismiss.call(w,w)},className:g(null==G?void 0:G.closeButton,null==w||null==(c=w.classNames)?void 0:c.closeButton)},null!=(b=null==V?void 0:V.close)?b:l):null,(em||w.icon||w.promise)&&null!==w.icon&&((null==V?void 0:V[em])!==null||w.icon)?t.default.createElement("div",{"data-icon":"",className:g(null==G?void 0:G.icon,null==w||null==(u=w.classNames)?void 0:u.icon)},"loading"===em?w.icon||eF():w.promise?eF():null,"loading"!==em?eR:null):null,t.default.createElement("div",{"data-content":"",className:g(null==G?void 0:G.content,null==w||null==(p=w.classNames)?void 0:p.content)},t.default.createElement("div",{"data-title":"",className:g(null==G?void 0:G.title,null==w||null==(f=w.classNames)?void 0:f.title)},w.jsx?w.jsx:"function"==typeof w.title?w.title():w.title),w.description?t.default.createElement("div",{"data-description":"",className:g(M,ev,null==G?void 0:G.description,null==w||null==(h=w.classNames)?void 0:h.description)},"function"==typeof w.description?w.description():w.description):null),t.default.isValidElement(w.cancel)?w.cancel:w.cancel&&m(w.cancel)?t.default.createElement("button",{"data-button":!0,"data-cancel":!0,style:w.cancelButtonStyle||F,onClick:e=>{!m(w.cancel)||e$&&(null==w.cancel.onClick||w.cancel.onClick.call(w.cancel,e),eP())},className:g(null==G?void 0:G.cancelButton,null==w||null==($=w.classNames)?void 0:$.cancelButton)},w.cancel.label):null,t.default.isValidElement(w.action)?w.action:w.action&&m(w.action)?t.default.createElement("button",{"data-button":!0,"data-action":!0,style:w.actionButtonStyle||R,onClick:e=>{!m(w.action)||(null==w.action.onClick||w.action.onClick.call(w.action,e),e.defaultPrevented||eP())},className:g(null==G?void 0:G.actionButton,null==w||null==(y=w.classNames)?void 0:y.actionButton)},w.action.label):null)};function y(){if("u"<typeof window||"u"<typeof document)return"ltr";let e=document.documentElement.getAttribute("dir");return"auto"!==e&&e?e:window.getComputedStyle(document.documentElement).direction}let v=t.default.forwardRef(function(e,n){let{id:i,invert:a,position:o="bottom-right",hotkey:d=["altKey","KeyT"],expand:s,closeButton:l,className:c,offset:u,mobileOffset:f,theme:h="light",richColors:m,duration:g,style:v,visibleToasts:b=3,toastOptions:x,dir:w=y(),gap:_=14,icons:j,customAriaLabel:k,containerAriaLabel:C="Notifications"}=e,[N,I]=t.default.useState([]),S=t.default.useMemo(()=>i?N.filter(e=>e.toasterId===i):N.filter(e=>!e.toasterId),[N,i]),E=t.default.useMemo(()=>Array.from(new Set([o].concat(S.filter(e=>e.position).map(e=>e.position)))),[S,o]),[T,O]=t.default.useState([]),[A,P]=t.default.useState(!1),[F,R]=t.default.useState(!1),[L,M]=t.default.useState("system"!==h?h:"u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),z=t.default.useRef(null),D=d.join("+").replace(/Key/g,"").replace(/Digit/g,""),B=t.default.useRef(null),U=t.default.useRef(!1),G=t.default.useCallback(e=>{I(t=>{var r;return(null==(r=t.find(t=>t.id===e.id))?void 0:r.delete)||p.dismiss(e.id),t.filter(({id:t})=>t!==e.id)})},[]);return t.default.useEffect(()=>p.subscribe(e=>{e.dismiss?requestAnimationFrame(()=>{I(t=>t.map(t=>t.id===e.id?{...t,delete:!0}:t))}):setTimeout(()=>{r.default.flushSync(()=>{I(t=>{let r=t.findIndex(t=>t.id===e.id);return -1!==r?[...t.slice(0,r),{...t[r],...e},...t.slice(r+1)]:[e,...t]})})})}),[]),t.default.useEffect(()=>{if("system"!==h)return void M(h);if("system"===h&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?M("dark"):M("light")),"u"<typeof window)return;let e=window.matchMedia("(prefers-color-scheme: dark)");try{e.addEventListener("change",({matches:e})=>{e?M("dark"):M("light")})}catch(t){e.addListener(({matches:e})=>{try{e?M("dark"):M("light")}catch(e){console.error(e)}})}},[h]),t.default.useEffect(()=>{N.length<=1&&P(!1)},[N]),t.default.useEffect(()=>{let e=e=>{var t,r;d.length>0&&d.every(t=>e[t]||e.code===t)&&(P(!0),null==(r=z.current)||r.focus()),"Escape"===e.code&&(document.activeElement===z.current||(null==(t=z.current)?void 0:t.contains(document.activeElement)))&&P(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[d]),t.default.useEffect(()=>{if(z.current)return()=>{B.current&&(B.current.focus({preventScroll:!0}),B.current=null,U.current=!1)}},[z.current]),t.default.createElement("section",{ref:n,"aria-label":null!=k?k:`${C} ${D}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0,"data-react-aria-top-layer":!0},E.map((r,n)=>{var i;let o,[d,p]=r.split("-");return S.length?t.default.createElement("ol",{key:r,dir:"auto"===w?y():w,tabIndex:-1,ref:z,className:c,"data-sonner-toaster":!0,"data-sonner-theme":L,"data-y-position":d,"data-x-position":p,style:{"--front-toast-height":`${(null==(i=T[0])?void 0:i.height)||0}px`,"--width":"356px","--gap":`${_}px`,...v,...(o={},[u,f].forEach((e,t)=>{let r=1===t,n=r?"--mobile-offset":"--offset",i=r?"16px":"24px";function a(e){["top","right","bottom","left"].forEach(t=>{o[`${n}-${t}`]="number"==typeof e?`${e}px`:e})}"number"==typeof e||"string"==typeof e?a(e):"object"==typeof e?["top","right","bottom","left"].forEach(t=>{void 0===e[t]?o[`${n}-${t}`]=i:o[`${n}-${t}`]="number"==typeof e[t]?`${e[t]}px`:e[t]}):a(i)}),o)},onBlur:e=>{U.current&&!e.currentTarget.contains(e.relatedTarget)&&(U.current=!1,B.current&&(B.current.focus({preventScroll:!0}),B.current=null))},onFocus:e=>{!(e.target instanceof HTMLElement&&"false"===e.target.dataset.dismissible)&&(U.current||(U.current=!0,B.current=e.relatedTarget))},onMouseEnter:()=>P(!0),onMouseMove:()=>P(!0),onMouseLeave:()=>{F||P(!1)},onDragEnd:()=>P(!1),onPointerDown:e=>{e.target instanceof HTMLElement&&"false"===e.target.dataset.dismissible||R(!0)},onPointerUp:()=>R(!1)},S.filter(e=>!e.position&&0===n||e.position===r).map((n,i)=>{var o,d;return t.default.createElement($,{key:n.id,icons:j,index:i,toast:n,defaultRichColors:m,duration:null!=(o=null==x?void 0:x.duration)?o:g,className:null==x?void 0:x.className,descriptionClassName:null==x?void 0:x.descriptionClassName,invert:a,visibleToasts:b,closeButton:null!=(d=null==x?void 0:x.closeButton)?d:l,interacting:F,position:r,style:null==x?void 0:x.style,unstyled:null==x?void 0:x.unstyled,classNames:null==x?void 0:x.classNames,cancelButtonStyle:null==x?void 0:x.cancelButtonStyle,actionButtonStyle:null==x?void 0:x.actionButtonStyle,closeButtonAriaLabel:null==x?void 0:x.closeButtonAriaLabel,removeToast:G,toasts:S.filter(e=>e.position==n.position),heights:T.filter(e=>e.position==n.position),setHeights:O,expandByDefault:s,gap:_,expanded:A,swipeDirections:e.swipeDirections})})):null}))});e.s(["Toaster",0,v,"toast",0,h,"useSonner",0,function(){let[e,n]=t.default.useState([]);return t.default.useEffect(()=>p.subscribe(e=>{e.dismiss?setTimeout(()=>{r.default.flushSync(()=>{n(t=>t.filter(t=>t.id!==e.id))})}):setTimeout(()=>{r.default.flushSync(()=>{n(t=>{let r=t.findIndex(t=>t.id===e.id);return -1!==r?[...t.slice(0,r),{...t[r],...e},...t.slice(r+1)]:[e,...t]})})})}),[]),{toasts:e}}])},81173,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(18566),i=e.i(97053);e.s(["StyledRegistry",0,function({children:e}){let[a]=(0,r.useState)(()=>new i.ServerStyleSheet);return(0,n.useServerInsertedHTML)(()=>{let e=a.getStyleElement();return a.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}])},52787,e=>{"use strict";let t,r,n;var i,a,o,d,s,l,c,u,p=e.i(43476),f=e.i(97053),h=e.i(72382),m=e.i(69236),g=e.i(71645),$=e.i(52531),y=e.i(53070);function v(){let{brand:e}=(0,h.useConfig)(),t=e.arn.replace(/^ARN-?/i,""),r=e.exchange;return{label:"AMFI Registered Mutual Fund Distributor",logo:(e.amfiLogo??"").trim(),amfiLine:`AMFI ( Association of Mutual Funds in India ) Registered Mutual Fund Distributor. ARN No. ${t}`,validity:e.arnRegisteredOn&&e.arnValidTill?`Initial registration on ${e.arnRegisteredOn} | Valid till ${e.arnValidTill}`:"",exchange:r&&r.code?{logo:(r.logo??"").trim(),line:`${r.name} India ( ${r.fullName} ) [ ${r.name}: ${r.code} ]`,name:r.name}:null}}var b=e.i(38286);let x=f.default.header.withConfig({displayName:"header__Root",componentId:"sc-347dc4f8-0"})`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid
    ${e=>e.$lifted?"var(--color-line)":"transparent"};
  background: ${e=>e.$lifted?"color-mix(in oklch, var(--color-canvas) 78%, transparent)":"var(--color-canvas)"};
  backdrop-filter: ${e=>e.$lifted?"blur(24px) saturate(1.4)":"none"};
  transition: background-color 0.42s, border-color 0.42s, box-shadow 0.42s;
`,w=(0,f.default)(b.Shell).withConfig({displayName:"header__Bar",componentId:"sc-347dc4f8-1"})`
  display: flex;
  height: 4.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 640px) {
    height: 88px;
  }
  @media (min-width: 1280px) {
    gap: 1.5rem;
  }
  @media (min-width: 1280px) {
    gap: 2rem;
  }
`,_=(0,f.default)($.Link).withConfig({displayName:"header__Brand",componentId:"sc-347dc4f8-2"})`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
`,j=f.default.span.withConfig({displayName:"header__BrandTag",componentId:"sc-347dc4f8-3"})`
  display: none;

  @media (min-width: 640px) {
    display: block;
    margin-top: 0.28rem;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 600;
    /* Tracked, but only just: at 0.12em the line ran wider than the
       lockup above it and the overhang read as a mistake. */
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.25;
    text-align: left;
    color: var(--color-ink-soft);
    opacity: 0.85;
  }
`,k=f.default.img.withConfig({displayName:"header__Mark",componentId:"sc-347dc4f8-4"})`
  display: block;
  flex-shrink: 0;
  height: 2rem;
  width: auto;

  @media (min-width: 480px) {
    height: 2.4rem;
  }
  @media (min-width: 640px) {
    height: 2.9rem;
  }
`,C=f.default.span.withConfig({displayName:"header__NameCol",componentId:"sc-347dc4f8-5"})`
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
`,N=f.default.span.withConfig({displayName:"header__Name",componentId:"sc-347dc4f8-6"})`
  white-space: nowrap;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.1;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 1.6rem;
  }
`,I=f.default.nav.withConfig({displayName:"header__Nav",componentId:"sc-347dc4f8-7"})`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 0.125rem;
  }
`,S=f.default.span.withConfig({displayName:"header__Underline",componentId:"sc-347dc4f8-8"})`
  position: absolute;
  inset-inline: 0.75rem;
  bottom: -1px;
  height: 2px;
  border-radius: 999px;
  background: var(--color-gold);
  transform: scaleX(0);
  transition: transform 0.42s;
`,E=f.default.div.withConfig({displayName:"header__NavGroup",componentId:"sc-347dc4f8-9"})`
  position: relative;
`,T=f.default.button.withConfig({displayName:"header__NavTrigger",componentId:"sc-347dc4f8-10"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  /* Geometry and type copied from NavItem: the trigger sits in the same row as
     the plain links, so a rounder corner, wider padding or a half-pixel larger
     face all read as the bar being mis-set. */
  border-radius: 0.5rem;
  padding: 0.5rem 0.625rem;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink-soft);
  transition: color 0.3s;

  &:hover,
  &[aria-expanded='true'] {
    color: var(--color-ink);
  }

  /* NavItem widens here; the trigger has to as well or the two drift apart at
     the width most people are looking at this on. */
  @media (min-width: 1280px) {
    padding-inline: 0.75rem;
  }
`,O=(0,f.default)(y.LuChevronDown).withConfig({displayName:"header__NavCaret",componentId:"sc-347dc4f8-11"})`
  /* An SVG flex item collapses without an explicit basis, which left the
     caret at zero width once NavItem became inline-flex. */
  flex: none;
  width: 14px;
  height: 14px;
  margin-left: 0.25rem;
  transition: transform 0.35s;
  transform: ${e=>e.$open?"rotate(180deg)":"none"};
`,A=f.default.div.withConfig({displayName:"header__NavMenu",componentId:"sc-347dc4f8-12"})`
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 50;
  padding-top: 0.6rem;
  transition:
    opacity 0.3s,
    transform 0.3s;
  pointer-events: ${e=>e.$open?"auto":"none"};
  opacity: ${e=>+!!e.$open};
  transform: ${e=>e.$open?"none":"translateY(-4px)"};
`,P=f.default.ul.withConfig({displayName:"header__NavMenuList",componentId:"sc-347dc4f8-13"})`
  min-width: 17rem;
  padding: 0.5rem;
  border-radius: var(--radius-card);
  background: var(--color-surface);
  box-shadow: var(--shadow-float);
`,F=(0,f.default)($.Link).withConfig({displayName:"header__NavMenuLink",componentId:"sc-347dc4f8-14"})`
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 14px;
  color: var(--color-ink-soft);
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: var(--color-sand);
    color: var(--color-ink);
  }
`,R=f.default.ul.withConfig({displayName:"header__DrawerSubList",componentId:"sc-347dc4f8-15"})`
  margin: -0.35rem 0 0.6rem;
  padding-left: 1.1rem;
  border-left: 1px solid var(--color-line);
  display: flex;
  flex-direction: column;
`,L=(0,f.default)($.Link).withConfig({displayName:"header__DrawerSubLink",componentId:"sc-347dc4f8-16"})`
  display: block;
  padding: 0.55rem 0;
  font-size: 15px;
  color: var(--color-ink-soft);

  &:hover {
    color: var(--color-ink);
  }
`,M=(0,f.default)($.NavLink).withConfig({displayName:"header__NavItem",componentId:"sc-347dc4f8-17"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  border-radius: 0.5rem;
  padding: 0.5rem 0.625rem;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink-soft);
  transition: color 0.3s;

  &:hover {
    color: var(--color-ink);
  }

  &[aria-current='page'] {
    color: var(--color-ink);
  }

  &[aria-current='page'] ${S} {
    transform: scaleX(1);
  }

  @media (min-width: 1280px) {
    padding-inline: 0.75rem;
  }
`,z=f.default.div.withConfig({displayName:"header__Actions",componentId:"sc-347dc4f8-18"})`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    gap: 0.5rem;
  }
`,D=f.default.div.withConfig({displayName:"header__WideOnly",componentId:"sc-347dc4f8-19"})`
  display: none;

  @media (min-width: 1536px) {
    display: inline-flex;
  }
`,B=f.default.button.withConfig({displayName:"header__Toggle",componentId:"sc-347dc4f8-20"})`
  margin-right: -0.5rem;
  display: inline-flex;
  height: 2.75rem;
  width: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  color: var(--color-ink);
  transition: background-color 0.3s;

  &:hover {
    background: var(--color-sand);
  }

  @media (min-width: 1280px) {
    display: none;
  }
`,U=f.default.span.withConfig({displayName:"header__ToggleIcons",componentId:"sc-347dc4f8-21"})`
  position: relative;
  display: block;
  height: 1.25rem;
  width: 1.25rem;
`,G=f.default.span.withConfig({displayName:"header__ToggleIcon",componentId:"sc-347dc4f8-22"})`
  position: absolute;
  inset: 0;
  display: block;
  transition: transform 0.42s, opacity 0.42s;
  transform: ${e=>e.$shown?"rotate(0deg) scale(1)":`rotate(${e.$from}deg) scale(0.75)`};
  opacity: ${e=>+!!e.$shown};
`,V=f.default.div.withConfig({displayName:"header__Drawer",componentId:"sc-347dc4f8-23"})`
  position: fixed;
  inset-inline: 0;
  top: 4rem;
  bottom: 0;
  z-index: 40;
  overflow-y: auto;
  overscroll-behavior: contain;
  border-top: 1px solid var(--color-line);
  background: var(--color-canvas);
  transition: opacity 0.42s, transform 0.42s;
  pointer-events: ${e=>e.$open?"auto":"none"};
  transform: ${e=>e.$open?"translateY(0)":"translateY(-0.75rem)"};
  opacity: ${e=>+!!e.$open};

  @media (min-width: 640px) {
    top: 72px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`,H=(0,f.default)(b.Shell).withConfig({displayName:"header__DrawerNav",componentId:"sc-347dc4f8-24"})`
  display: flex;
  flex-direction: column;
  padding-block: 1rem;
`,W=f.default.span.withConfig({displayName:"header__DrawerDot",componentId:"sc-347dc4f8-25"})`
  display: none;
  height: 0.375rem;
  width: 0.375rem;
  border-radius: 999px;
  background: var(--color-gold);
`,Y=f.default.span.withConfig({displayName:"header__DrawerArrow",componentId:"sc-347dc4f8-26"})`
  display: inline-flex;
  color: var(--color-ink-faint);
`,Z=(0,f.default)($.NavLink).withConfig({displayName:"header__DrawerItem",componentId:"sc-347dc4f8-27"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-line-soft);
  padding-block: 1rem;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--color-ink-soft);
  transition: transform 0.68s, opacity 0.68s, color 0.68s;
  transform: ${e=>e.$open?"translateY(0)":"translateY(0.5rem)"};
  opacity: ${e=>+!!e.$open};

  &[aria-current='page'] {
    color: var(--color-ink);
  }

  &[aria-current='page'] ${W} {
    display: block;
  }

  &[aria-current='page'] ${Y} {
    display: none;
  }
`,K=f.default.div.withConfig({displayName:"header__DrawerActions",componentId:"sc-347dc4f8-28"})`
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding-bottom: 2rem;
`,q=f.default.a.withConfig({displayName:"header__DrawerPhone",componentId:"sc-347dc4f8-29"})`
  margin-top: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-ink-soft);
`,X=f.default.span.withConfig({displayName:"header__Tnum",componentId:"sc-347dc4f8-30"})`
  font-variant-numeric: tabular-nums;
`,J=f.default.img.withConfig({displayName:"brand-mark__Logo",componentId:"sc-8458b3e6-0"})`
  flex-shrink: 0;
  border-radius: 10px;
  object-fit: contain;
`,Q=f.default.span.withConfig({displayName:"brand-mark__Mark",componentId:"sc-8458b3e6-1"})`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  background: var(--color-navy);
`,ee=f.default.svg.withConfig({displayName:"brand-mark__Glyph",componentId:"sc-8458b3e6-2"})`
  height: 100%;
  width: 100%;

  text {
    fill: var(--color-gold);
    font-family: var(--font-serif);
  }
`;var et=e.i(62359);let er=f.default.p.withConfig({displayName:"grievance-line__Line",componentId:"sc-56e641f0-0"})`
  font-size: 12px;
  line-height: 1.6;
  color: ${e=>"dark"===e.$tone?"rgb(255 255 255 / 0.68)":"var(--color-ink-faint)"};

  a {
    transition: color 0.3s;
  }
  a:hover {
    color: ${e=>"dark"===e.$tone?"var(--color-gold)":"var(--color-ink)"};
  }
`,en=f.default.span.withConfig({displayName:"grievance-line__Label",componentId:"sc-56e641f0-1"})`
  font-weight: 600;
  color: ${e=>"dark"===e.$tone?"rgb(255 255 255 / 0.82)":"var(--color-ink-soft)"};
`,ei=f.default.span.withConfig({displayName:"grievance-line__Tnum",componentId:"sc-56e641f0-2"})`
  font-variant-numeric: tabular-nums;
`,ea=f.default.div.withConfig({displayName:"registration-strip__Root",componentId:"sc-cf71dc26-0"})`
  margin-block: 2rem;
  border-radius: var(--radius-card);
  background: var(--color-surface);
  border: 1px solid var(--glass-edge);
  display: grid;
  gap: 1.25rem;
  padding: 1.35rem 1.5rem;

  @media (min-width: 768px) {
    ${e=>e.$two?"grid-template-columns: repeat(2, minmax(0, 1fr));":""}
    gap: 2rem;
    padding: 1.5rem 1.75rem;
  }
`,eo=f.default.div.withConfig({displayName:"registration-strip__Cell",componentId:"sc-cf71dc26-1"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
`,ed=f.default.img.attrs({loading:"lazy",decoding:"async"}).withConfig({displayName:"registration-strip__Logo",componentId:"sc-cf71dc26-2"})`
  height: 3.25rem;
  width: auto;
  flex-shrink: 0;
`,es=f.default.span.withConfig({displayName:"registration-strip__Badge",componentId:"sc-cf71dc26-3"})`
  display: flex;
  height: 3.25rem;
  width: 3.9rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px dashed var(--color-line);
  background: var(--color-mist);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-ink-faint);
`,el=f.default.div.withConfig({displayName:"registration-strip__Body",componentId:"sc-cf71dc26-4"})`
  min-width: 0;
`,ec=f.default.p.withConfig({displayName:"registration-strip__Line",componentId:"sc-cf71dc26-5"})`
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-ink);
`,eu=f.default.p.withConfig({displayName:"registration-strip__Validity",componentId:"sc-cf71dc26-6"})`
  margin-top: 0.25rem;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--color-ink);
`;function ep({className:e}){let t=v();return(0,p.jsxs)(ea,{className:e,$two:!!t.exchange,children:[t.exchange&&(0,p.jsxs)(eo,{children:[t.exchange.logo?(0,p.jsx)(ed,{src:t.exchange.logo,alt:t.exchange.name}):(0,p.jsx)(es,{"aria-hidden":!0,children:t.exchange.name}),(0,p.jsx)(el,{children:(0,p.jsx)(ec,{children:t.exchange.line})})]}),(0,p.jsxs)(eo,{children:[t.logo?(0,p.jsx)(ed,{src:t.logo,alt:t.label}):(0,p.jsx)(es,{"aria-hidden":!0,children:"AMFI"}),(0,p.jsxs)(el,{children:[(0,p.jsx)(ec,{children:t.amfiLine}),t.validity&&(0,p.jsx)(eu,{children:t.validity})]})]})]})}let ef=f.default.footer.withConfig({displayName:"footer__Root",componentId:"sc-9b980077-0"})`
  position: relative;
  background: var(--color-navy-deep);
  color: var(--color-paper);

  &::before {
    content: '';
    position: absolute;
    inset-inline: 0;
    top: 0;
    height: 1px;
    background: var(--prism-sweep);
    opacity: 0.6;
  }
`,eh=(0,f.default)(b.Shell).withConfig({displayName:"footer__Inner",componentId:"sc-9b980077-1"})`
  padding-block: 2.1rem;

  @media (min-width: 640px) {
    padding-block: 2.6rem;
  }
`,em=f.default.div.withConfig({displayName:"footer__Columns",componentId:"sc-9b980077-2"})`
  display: grid;
  gap: 3rem 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`,eg=f.default.div.withConfig({displayName:"footer__BrandColumn",componentId:"sc-9b980077-3"})`
  @media (min-width: 640px) {
    grid-column: span 2 / span 2;
  }
  @media (min-width: 1024px) {
    grid-column: span 3 / span 3;
  }
`,e$=f.default.div.withConfig({displayName:"footer__Column",componentId:"sc-9b980077-4"})`
  @media (min-width: 1024px) {
    grid-column: ${e=>`span ${e.$span} / span ${e.$span}`};
  }
`,ey=(0,f.default)($.Link).withConfig({displayName:"footer__BrandLink",componentId:"sc-9b980077-5"})`
  display: inline-flex;
  flex-direction: column;
  gap: 0.75rem;
`,ev=(0,f.default)(function({className:e}){let{brand:t}=(0,h.useConfig)();if(t.logoImage)return(0,p.jsx)(J,{src:t.logoImage,alt:"","aria-hidden":!0,className:e});let r=(t.logoInitial||t.name.charAt(0)||"A").slice(0,2);return(0,p.jsx)(Q,{"aria-hidden":!0,className:e,children:(0,p.jsx)(ee,{viewBox:"0 0 40 40",role:"presentation",children:(0,p.jsx)("text",{x:"20",y:"20",textAnchor:"middle",dominantBaseline:"central",fontSize:r.length>1?20:24,fontWeight:600,children:r})})})}).withConfig({displayName:"footer__Mark",componentId:"sc-9b980077-6"})`
  height: 2.75rem;
  width: 2.75rem;
  background: rgb(255 255 255 / 0.1);
`,eb=f.default.span.withConfig({displayName:"footer__BrandText",componentId:"sc-9b980077-7"})`
  display: flex;
  flex-direction: column;
  line-height: 1;
`,ex=f.default.span.withConfig({displayName:"footer__BrandName",componentId:"sc-9b980077-8"})`
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.015em;
  text-wrap: balance;
`,ew=f.default.span.withConfig({displayName:"footer__Tagline",componentId:"sc-9b980077-9"})`
  margin-top: 0.5rem;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: color-mix(in oklab, var(--color-paper) 58%, transparent);
`,e_=f.default.p.withConfig({displayName:"footer__Bio",componentId:"sc-9b980077-10"})`
  margin-top: 1.5rem;
  max-width: 24rem;
  font-size: 14px;
  line-height: 1.625;
  color: color-mix(in oklab, var(--color-paper) 72%, transparent);
`,ej=f.default.div.withConfig({displayName:"footer__Socials",componentId:"sc-9b980077-11"})`
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,ek=f.default.a.withConfig({displayName:"footer__Social",componentId:"sc-9b980077-12"})`
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / 0.15);
  padding: 0.5rem 1rem;
  font-size: 12px;
  font-weight: 500;
  color: color-mix(in oklab, var(--color-paper) 78%, transparent);
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: color-mix(in oklch, var(--color-gold) 50%, transparent);
    color: var(--color-gold);
  }
`,eC=f.default.h3.withConfig({displayName:"footer__ColumnTitle",componentId:"sc-9b980077-13"})`
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: color-mix(in oklab, var(--color-paper) 58%, transparent);
`,eN=f.default.ul.withConfig({displayName:"footer__ColumnList",componentId:"sc-9b980077-14"})`
  margin-top: 1.25rem;

  > li + li {
    margin-top: 0.75rem;
  }
`,eI=f.css`
  font-size: 14px;
  color: color-mix(in oklch, var(--color-paper) 65%, transparent);
  transition: color 0.3s;

  &:hover {
    color: var(--color-gold);
  }
`,eS=(0,f.default)($.Link).withConfig({displayName:"footer__FooterLink",componentId:"sc-9b980077-15"})`
  ${eI}
`,eE=f.default.a.withConfig({displayName:"footer__FooterAnchor",componentId:"sc-9b980077-16"})`
  ${eI}
`,eT=f.default.ul.withConfig({displayName:"footer__ContactList",componentId:"sc-9b980077-17"})`
  margin-top: 1.25rem;
  font-size: 14px;
  color: color-mix(in oklch, var(--color-paper) 65%, transparent);

  > li + li {
    margin-top: 1rem;
  }
`,eO=f.default.a.withConfig({displayName:"footer__ContactRow",componentId:"sc-9b980077-18"})`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  transition: color 0.3s;

  &:hover {
    color: var(--color-gold);
  }
`,eA=(0,f.default)(eO).withConfig({displayName:"footer__EmailRow",componentId:"sc-9b980077-19"})`
  word-break: break-all;
`,eP=f.default.li.withConfig({displayName:"footer__AddressRow",componentId:"sc-9b980077-20"})`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`,eF=f.default.span.withConfig({displayName:"footer__Tnum",componentId:"sc-9b980077-21"})`
  font-variant-numeric: tabular-nums;
`,eR=f.default.span.withConfig({displayName:"footer__Relaxed",componentId:"sc-9b980077-22"})`
  line-height: 1.625;
`,eL=f.default.div.withConfig({displayName:"footer__Legal",componentId:"sc-9b980077-23"})`
  margin-top: 1.9rem;
  border-top: 1px solid rgb(255 255 255 / 0.1);
  padding-top: 2rem;
`,eM=f.default.p.withConfig({displayName:"footer__LegalLabel",componentId:"sc-9b980077-24"})`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: color-mix(in oklab, var(--color-paper) 56%, transparent);
`,ez=f.default.p.withConfig({displayName:"footer__LegalText",componentId:"sc-9b980077-25"})`
  margin-top: 0.75rem;
  /* No reading-measure cap here, deliberately.
     A 56rem clamp is right for prose, and this is not prose — it is the
     statutory notice, and it was ending mid-footer with a column of empty
     space beside it, which reads as a layout fault rather than a considered
     line length. It runs the full width of the footer. */
  font-size: 12.5px;
  line-height: 1.625;
  color: color-mix(in oklab, var(--color-paper) 58%, transparent);
`,eD=(0,f.default)(function({tone:e="dark",className:t}){let{compliance:r,contact:n,advisor:i}=(0,h.useConfig)(),a=r.grievanceOfficer||i.name,o=r.grievanceEmail||n.email,d=r.grievancePhone||n.phone;return(0,p.jsxs)(er,{$tone:e,className:t,children:[(0,p.jsx)(en,{$tone:e,children:"Grievance redressal:"})," ",a,o&&(0,p.jsxs)(p.Fragment,{children:[" · ",(0,p.jsx)("a",{href:`mailto:${o}`,children:o})]}),d&&(0,p.jsx)(ei,{children:` \xb7 ${d}`}),". Unresolved complaints may be escalated to ",r.amfiUrl?(0,p.jsx)("a",{href:r.amfiUrl,target:"_blank",rel:"noreferrer",children:"AMFI"}):"AMFI"," or through ",r.sebiScoresUrl?(0,p.jsx)("a",{href:r.sebiScoresUrl,target:"_blank",rel:"noreferrer",children:"SEBI SCORES"}):"SEBI SCORES",". Full details on the ",(0,p.jsx)($.Link,{to:et.LEGAL_PATHS.disclaimer,children:"disclaimer page"}),"."]})}).withConfig({displayName:"footer__Grievance",componentId:"sc-9b980077-26"})`
  margin-top: 1rem;
`,eB=f.default.div.withConfig({displayName:"footer__Colophon",componentId:"sc-9b980077-27"})`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid rgb(255 255 255 / 0.1);
  padding-top: 2rem;
  font-size: 12.5px;
  color: color-mix(in oklab, var(--color-paper) 58%, transparent);

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,eU=f.default.div.withConfig({displayName:"footer__LegalLinks",componentId:"sc-9b980077-28"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1.5rem;
`,eG=(0,f.default)($.Link).withConfig({displayName:"footer__LegalLink",componentId:"sc-9b980077-29"})`
  transition: color 0.3s;

  &:hover {
    color: var(--color-gold);
  }
`,eV=f.default.span.withConfig({displayName:"footer__Bullet",componentId:"sc-9b980077-30"})`
  margin-top: 0.125rem;
  flex-shrink: 0;
  color: color-mix(in oklch, var(--color-gold) 70%, transparent);
  display: inline-flex;
`;function eH({title:e,children:t}){return(0,p.jsxs)("div",{children:[(0,p.jsx)(eC,{children:e}),(0,p.jsx)(eN,{children:t})]})}var eW=e.i(5428);let eY=f.default.section.withConfig({displayName:"page-header__Root",componentId:"sc-c50dbeb5-0"})`
  position: relative;
  overflow: hidden;
  background: var(--color-sand);

  /* The seam, not a border. Every boundary on this site is drawn with light. */
  &::after {
    content: '';
    position: absolute;
    inset-inline: 0;
    bottom: 0;
    height: 1px;
    background: var(--prism-sweep);
    opacity: 0.5;
  }
`,eZ=f.default.span.withConfig({displayName:"page-header__Wash",componentId:"sc-c50dbeb5-1"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0.8;
  background-image:
    radial-gradient(
      ellipse 56% 78% at 88% 0%,
      color-mix(in oklch, var(--prism-cyan) 15%, transparent),
      transparent 70%
    ),
    radial-gradient(
      ellipse 62% 84% at 6% 8%,
      color-mix(in oklch, var(--prism-violet) 22%, transparent),
      transparent 70%
    );
`,eK=(0,f.default)(b.Shell).withConfig({displayName:"page-header__Inner",componentId:"sc-c50dbeb5-2"})`
  position: relative;
  padding-block: 1.9rem 1.2rem;

  @media (min-width: 640px) {
    padding-block: 2.25rem 1.45rem;
  }
  @media (min-width: 1024px) {
    padding-block: 2.9rem 1.8rem;
  }
`,eq=f.default.nav.withConfig({displayName:"page-header__Crumbs",componentId:"sc-c50dbeb5-3"})`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 12.5px;
  color: var(--color-ink-faint);
`,eX=(0,f.default)($.Link).withConfig({displayName:"page-header__Crumb",componentId:"sc-c50dbeb5-4"})`
  transition: color 0.3s;

  &:hover {
    color: var(--color-ink);
  }
`,eJ=f.default.span.withConfig({displayName:"page-header__Current",componentId:"sc-c50dbeb5-5"})`
  color: var(--color-ink-soft);
`,eQ=f.default.div.withConfig({displayName:"page-header__Body",componentId:"sc-c50dbeb5-6"})`
  margin-top: 2rem;
  max-width: 48rem;
`,e0=f.default.h1.withConfig({displayName:"page-header__Title",componentId:"sc-c50dbeb5-7"})`
  animation: var(--animate-rise);
  margin-top: 1rem;
  font-size: clamp(2.1rem, 1.5rem + 2.6vw, 3.4rem);
  line-height: 1.08;
  text-wrap: balance;
  color: var(--color-ink);
`,e1=f.default.p.withConfig({displayName:"page-header__Lead",componentId:"sc-c50dbeb5-8"})`
  animation: var(--animate-rise);
  animation-delay: 90ms;
  margin-top: 1.25rem;
  font-size: 16px;
  line-height: 1.7;
  text-wrap: balance;
  color: var(--color-ink-soft);

  @media (min-width: 640px) {
    font-size: 17px;
  }
`,e2=f.default.div.withConfig({displayName:"page-header__Actions",componentId:"sc-c50dbeb5-9"})`
  margin-top: 2rem;
`;var e3=e.i(78893),e5=e.i(36824);let e4=f.default.section.withConfig({displayName:"hero__Root",componentId:"sc-7547c862-0"})`
  position: relative;
  overflow: hidden;
  background: var(--color-canvas);
  perspective: var(--persp);
  perspective-origin: 50% 46%;
`,e9=(0,f.default)(function({className:e}){let t=(0,g.useRef)(null);return(0,g.useEffect)(()=>{let e=t.current;if(!e)return;let r=e.getContext("2d");if(!r)return;let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=window.matchMedia("(max-width: 767px)").matches,a=0x135282b,o=()=>(a=(1664525*a+0x3c6ef35f)%0x100000000)/0x100000000,d=Array.from({length:i?46:84},()=>({x:(o()-.5)*840,y:(o()-.5)*604.8,z:(o()-.5)*840})),s=0,l=0,c=1,u=()=>{let t=e.getBoundingClientRect();t.width&&t.height&&(c=Math.min(window.devicePixelRatio||1,2),s=t.width,l=t.height,e.width=Math.round(s*c),e.height=Math.round(l*c),r.setTransform(c,0,0,c,0,0))},p=0,f=0,h=0,m=0,g=t=>{let r=e.getBoundingClientRect();p=((t.clientX-r.left)/r.width-.5)*.5,f=((t.clientY-r.top)/r.height-.5)*.32},$=(e,t)=>`oklch(${(.74-.18*e).toFixed(3)} ${(.09+.11*e).toFixed(3)} ${(199+151*e).toFixed(1)} / ${t.toFixed(3)})`,y=0,v=0,b=e=>{let t=v?Math.min((e-v)/1e3,.05):0;v=e,n||(y+=.075*t,h+=(p-h)*.045,m+=(f-m)*.045),r.clearRect(0,0,s,l);let i=(e=>{let t=[],r=Math.cos(e+h),n=Math.sin(e+h),i=Math.cos(m),a=Math.sin(m),o=s/2,c=l/2;for(let e=0;e<d.length;e++){let s=d[e],l=s.x*r-s.z*n,u=s.x*n+s.z*r,p=s.y*i-u*a,f=s.y*a+u*i,h=f+720;if(h<40)continue;let m=620/h;t.push({sx:o+l*m,sy:c+p*m,scale:m,z:f,i:e})}return t.sort((e,t)=>e.z-t.z),t})(y);r.lineWidth=1;for(let e=0;e<i.length;e++){let t=i[e],n=d[t.i];for(let a=e+1;a<i.length;a++){let e=i[a],o=d[e.i],s=n.x-o.x,l=n.y-o.y,c=n.z-o.z,u=Math.sqrt(s*s+l*l+c*c);if(u>168)continue;let p=1-u/168,f=(t.scale+e.scale)/2;r.strokeStyle=$(Math.min(1,Math.max(0,(f-.5)/1.1)),p*f*.16),r.beginPath(),r.moveTo(t.sx,t.sy),r.lineTo(e.sx,e.sy),r.stroke()}}for(let e of i){let t=Math.min(1,Math.max(0,(e.scale-.5)/1.1)),n=Math.max(.6,1.7*e.scale);r.fillStyle=$(t,.14+.5*t),r.beginPath(),r.arc(e.sx,e.sy,n,0,2*Math.PI),r.fill()}},x=0,w=!0,_=!1,j=e=>{b(e),x=requestAnimationFrame(j)},k=()=>{_=!1,cancelAnimationFrame(x)},C=()=>{w&&!document.hidden?_||n||(_=!0,v=0,x=requestAnimationFrame(j)):k()};u(),b(0);let N=new IntersectionObserver(([e])=>{w=e.isIntersecting,C()},{threshold:0});N.observe(e);let I=()=>{u(),b(performance.now())};return document.addEventListener("visibilitychange",C),window.addEventListener("resize",I),n||window.addEventListener("pointermove",g,{passive:!0}),()=>{k(),N.disconnect(),document.removeEventListener("visibilitychange",C),window.removeEventListener("resize",I),window.removeEventListener("pointermove",g)}},[]),(0,p.jsx)("canvas",{ref:t,className:e,"aria-hidden":!0})}).withConfig({displayName:"hero__Field",componentId:"sc-7547c862-1"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
`,e8=f.default.span.withConfig({displayName:"hero__Wash",componentId:"sc-7547c862-2"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(
      62% 74% at 12% 4%,
      color-mix(in oklab, var(--prism-violet) 13%, transparent) 0%,
      transparent 64%
    ),
    radial-gradient(
      48% 62% at 96% 12%,
      color-mix(in oklab, var(--prism-cyan) 12%, transparent) 0%,
      transparent 66%
    ),
    /* The field is drawn edge to edge, so it has to be faded out into the
       page ground before the band ends or it collides with the band below. */
    linear-gradient(
      to bottom,
      transparent 55%,
      color-mix(in oklab, var(--color-canvas) 85%, transparent) 88%,
      var(--color-canvas) 100%
    );
`,e7=(0,f.default)(b.Shell).withConfig({displayName:"hero__Layout",componentId:"sc-7547c862-3"})`
  position: relative;
  display: grid;
  align-items: center;
  gap: 3rem;
  padding-block: 2.4rem;

  @media (min-width: 640px) {
    padding-block: 2.9rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 3.5rem;
    padding-block: 3.4rem;
  }
  @media (min-width: 1280px) {
    padding-block: 4rem;
  }
`,e6=f.default.div.withConfig({displayName:"hero__Copy",componentId:"sc-7547c862-4"})`
  order: 2;

  @media (min-width: 1024px) {
    order: 1;
    grid-column: span 6 / span 6;
  }
`,te=f.default.div.withConfig({displayName:"hero__Rise",componentId:"sc-7547c862-5"})`
  animation: heroLift 1.25s var(--ease-hero) both;
  animation-delay: ${e=>e.$delay??0}ms;
`,tt=f.default.span.withConfig({displayName:"hero__Badge",componentId:"sc-7547c862-6"})`
  animation: heroLift 1.25s var(--ease-hero) both;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 999px;
  border: 1px solid color-mix(in oklch, var(--prism-cyan) 40%, transparent);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
  padding: 0.375rem 0.875rem;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-gold-ink);
`,tr=f.default.h1.withConfig({displayName:"hero__Title",componentId:"sc-7547c862-7"})`
  animation: heroLift 1.25s var(--ease-hero) both;
  animation-delay: 170ms;
  margin-top: 1.5rem;
  font-size: clamp(2.1rem, 1.45rem + 2.6vw, 3.35rem);
  line-height: 1.06;
  letter-spacing: -0.028em;
  text-wrap: balance;
  color: var(--color-ink);
`,tn=f.default.span.withConfig({displayName:"hero__TitleBottom",componentId:"sc-7547c862-8"})`
  background: var(--prism-sweep);
  background-size: 220% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: prismShift 14s linear infinite alternate;
`,ti=f.default.p.withConfig({displayName:"hero__Lead",componentId:"sc-7547c862-9"})`
  animation: heroLift 1.25s var(--ease-hero) both;
  animation-delay: 360ms;
  margin-top: 1.5rem;
  max-width: 36rem;
  font-size: 16px;
  line-height: 1.7;
  text-wrap: pretty;
  color: var(--color-ink-soft);

  @media (min-width: 640px) {
    font-size: 17px;
  }
`,ta=(0,f.default)(te).withConfig({displayName:"hero__Signature",componentId:"sc-7547c862-10"})`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-left: 2px solid var(--color-gold);
  padding-left: 1.25rem;
`,to=f.default.p.withConfig({displayName:"hero__SignatureName",componentId:"sc-7547c862-11"})`
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  color: var(--color-ink);
`,td=f.default.p.withConfig({displayName:"hero__SignatureRole",componentId:"sc-7547c862-12"})`
  margin-top: 0.125rem;
  font-size: 13.5px;
  color: var(--color-ink-faint);
`,ts=(0,f.default)(te).withConfig({displayName:"hero__Actions",componentId:"sc-7547c862-13"})`
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`,tl=(0,f.default)(b.ButtonLink).withConfig({displayName:"hero__Action",componentId:"sc-7547c862-14"})`
  width: 100%;

  @media (min-width: 640px) {
    width: auto;
  }
`,tc=f.default.div.withConfig({displayName:"hero__RigColumn",componentId:"sc-7547c862-15"})`
  order: 1;
  /* Arrives after the copy column has finished its own staggered rise, so the
     eye is led left-to-right rather than both halves landing at once. */
  animation: heroLift 1.45s var(--ease-hero) 300ms both;

  @media (min-width: 1024px) {
    order: 2;
    grid-column: span 6 / span 6;
  }
  @media (min-width: 1280px) {
    grid-column: 8 / span 5;
  }
`,tu=f.default.div.withConfig({displayName:"hero__Rig",componentId:"sc-7547c862-16"})`
  position: relative;
  margin-inline: auto;
  max-width: 460px;
  transform-style: preserve-3d;
  will-change: transform;

  @media (min-width: 1024px) {
    max-width: none;
  }
`,tp=f.default.span.withConfig({displayName:"hero__BackPlate",componentId:"sc-7547c862-17"})`
  position: absolute;
  inset: 8% -7% -9% 7%;
  border-radius: 26px;
  transform: translateZ(-90px);
  background: linear-gradient(
    150deg,
    color-mix(in oklch, var(--prism-violet) 26%, transparent),
    color-mix(in oklch, var(--prism-cyan) 12%, transparent) 60%,
    transparent
  );
  border: 1px solid color-mix(in oklch, var(--prism-violet) 34%, transparent);
`,tf=f.default.span.withConfig({displayName:"hero__MidPlate",componentId:"sc-7547c862-18"})`
  position: absolute;
  inset: -6% 6% 10% -8%;
  border-radius: 24px;
  transform: translateZ(-40px);
  border: 1px solid color-mix(in oklch, var(--prism-cyan) 26%, transparent);
`,th=f.default.div.withConfig({displayName:"hero__Face",componentId:"sc-7547c862-19"})`
  position: relative;
  transform: translateZ(30px);
  overflow: hidden;
  border-radius: 22px;
  background: var(--color-surface);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-float);
`,tm=(0,f.default)(e3.AdvisorPhoto).withConfig({displayName:"hero__Portrait",componentId:"sc-7547c862-20"})`
  aspect-ratio: 4 / 3;

  @media (min-width: 640px) {
    aspect-ratio: 5 / 4;
  }
  @media (min-width: 768px) {
    aspect-ratio: 4 / 5;
  }
`,tg=f.default.span.withConfig({displayName:"hero__Chip",componentId:"sc-7547c862-21"})`
  display: none;

  @media (min-width: 640px) {
    display: flex;
    position: absolute;
    left: -1.75rem;
    bottom: 16%;
    transform: translateZ(78px);
    align-items: center;
    gap: 0.6rem;
    border-radius: 14px;
    background: var(--color-surface);
    border: 1px solid var(--glass-edge);
    box-shadow: var(--shadow-lift);
    padding: 0.7rem 0.95rem;
    animation: floatZ 8s ease-in-out 1.6s infinite;
  }
`,t$=f.default.span.withConfig({displayName:"hero__ChipDot",componentId:"sc-7547c862-22"})`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 999px;
  background: var(--color-gold-deep);
`,ty=f.default.span.withConfig({displayName:"hero__ChipText",componentId:"sc-7547c862-23"})`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
`;var tv=e.i(28478);let tb=f.default.section.withConfig({displayName:"trust-bar__Band",componentId:"sc-6b5cbbf6-0"})`
  position: relative;
  overflow: hidden;
  background: var(--color-sand);
  color: var(--color-ink);
  padding-block: 2.4rem;

  @media (min-width: 1024px) {
    padding-block: 3rem;
  }
`,tx=f.default.span.withConfig({displayName:"trust-bar__Seam",componentId:"sc-6b5cbbf6-1"})`
  position: absolute;
  inset-inline: 0;
  top: 0;
  height: 1px;
  background: var(--prism-sweep);
  opacity: 0.75;
`,tw=f.default.span.withConfig({displayName:"trust-bar__Bloom",componentId:"sc-6b5cbbf6-2"})`
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 120%;
  width: 60rem;
  height: 30rem;
  translate: -50% -50%;
  border-radius: 999px;
  filter: blur(90px);
  opacity: 0.35;
  background: radial-gradient(
    circle,
    color-mix(in oklch, var(--prism-violet) 40%, transparent),
    transparent 70%
  );
`,t_=f.default.dl.withConfig({displayName:"trust-bar__Stats",componentId:"sc-6b5cbbf6-3"})`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  /**
   * Perspective here, NOT transform-style: preserve-3d.
   *
   * These children carry a permanent 3D transform. With preserve-3d on this
   * container the perspective comes from a further ancestor, and Chromium then
   * fails to hit-test the children at all — the pointer falls straight through
   * to this element, so nothing below it can be hovered, clicked or focused by
   * mouse. It is invisible in a screenshot and total in use.
   *
   * Declaring the perspective on the direct parent instead makes each child an
   * ordinary perspective child, which hit-tests normally. Nothing about the
   * rendering changes.
   *
   * The tell: a child whose Z happens to be 0 keeps working, because
   * translateZ(0) collapses to a 2D matrix. That is why the first card in this
   * row responded and the other three did not.
   */
  perspective: 1100px;
  perspective-origin: 50% 50%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
`,tj=(0,f.default)(tv.Reveal).withConfig({displayName:"trust-bar__Facet",componentId:"sc-6b5cbbf6-4"})`
  @media (min-width: 1024px) {
    > div {
      transform: rotateY(${e=>-9*e.$offset}deg)
        translateZ(${e=>-(26*Math.abs(e.$offset))}px);
      transition: transform 0.8s var(--ease-out);
    }

    &:hover > div {
      transform: rotateY(0deg) translateZ(24px);
    }
  }
`,tk=f.default.div.withConfig({displayName:"trust-bar__Tile",componentId:"sc-6b5cbbf6-5"})`
  height: 100%;
  border-radius: var(--radius-card);
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-soft);
  padding: 1.6rem 1.1rem;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 2.1rem 1.5rem;
  }
`,tC=f.default.dt.withConfig({displayName:"trust-bar__Value",componentId:"sc-6b5cbbf6-6"})`
  white-space: nowrap;
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 1.1rem + 1.9vw, 2.5rem);
  font-weight: 600;
  line-height: 1;
  /* Indigo, not the teal accent: teal at fill lightness on a white tile is
     2:1, which fails even the large-text threshold. */
  color: var(--color-navy);
  font-variant-numeric: tabular-nums;
`,tN=f.default.dd.withConfig({displayName:"trust-bar__Label",componentId:"sc-6b5cbbf6-7"})`
  margin-top: 0.75rem;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-ink-faint);

  @media (min-width: 640px) {
    font-size: 12px;
  }
`;var tI=e.i(66393);function tS(){let{config:e}=(0,h.useAdvisor)(),{copy:t}=(0,m.useTemplate)();return function(e,t={}){let r,n={about:{eyebrow:"About the Mutual Fund Distributor",title:"Helping families make informed investment decisions.",lead:""},services:{eyebrow:"What I Do",title:"Investment services built around your life",lead:"Straightforward help with the decisions that matter, explained in plain language, without the jargon."},tools:{eyebrow:"Investment Tools",title:"Plan Your Investments",lead:"Run the numbers yourself before we ever speak. These are the same tools I use with clients, free, instant, and no sign-up required."},why:{eyebrow:"Why Work With Me",title:"A mutual fund distributor, not a salesperson",lead:"No targets to hit, no products to push. Just a considered plan and someone accountable for it over the long run."},goals:{eyebrow:"Your Goals",title:"Every plan starts with a reason",lead:""},process:{eyebrow:"How We Work",title:(r=e.process.length)>0?`A simple, ${(0,tI.countWord)(r).toLowerCase()}-step process`:"A simple process",lead:"No complexity for its own sake. Here is exactly what working together looks like, from first conversation to ongoing review."},insights:{eyebrow:"Insights",title:"Learn before you invest",lead:"Short, plain-English explainers on the ideas that actually move the needle for long-term investors."},testimonials:{eyebrow:"Client Voices",title:"What investors say",lead:"A few words from families who have been on this journey for years."},leadCta:{eyebrow:"",title:"Have an investment goal in mind?",lead:"Let's understand your goals and explore how you can plan for them, a relaxed, no-obligation conversation."},contact:{eyebrow:"Get in Touch",title:"Start a conversation",lead:"Whether you are investing your first ₹5,000 or reviewing an existing portfolio, the first conversation is always free."}},i={};for(let r of et.SECTION_COPY_KEYS){let a=e.sectionCopy?.[r],o=t[r],d=e=>a?.[e]?.trim()||o?.[e]?.trim()||n[r][e];i[r]={eyebrow:d("eyebrow"),title:d("title"),lead:d("lead")}}return i}(e,t)}let tE=(0,f.default)(b.Shell).withConfig({displayName:"about-preview__Layout",componentId:"sc-21d3552-0"})`
  display: grid;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: center;
    gap: 4rem;
  }
`,tT=(0,f.default)(tv.Reveal).withConfig({displayName:"about-preview__PortraitColumn",componentId:"sc-21d3552-1"})`
  @media (min-width: 1024px) {
    grid-column: span 5 / span 5;
  }
`,tO=f.default.div.withConfig({displayName:"about-preview__Frame",componentId:"sc-21d3552-2"})`
  position: relative;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    inset: 6% -6% -7% 6%;
    border-radius: 24px;
    transform: translateZ(-70px);
    background: linear-gradient(
      150deg,
      color-mix(in oklch, var(--prism-violet) 24%, transparent),
      color-mix(in oklch, var(--prism-cyan) 10%, transparent) 62%,
      transparent
    );
    border: 1px solid color-mix(in oklch, var(--prism-violet) 32%, transparent);
    transition: transform 0.8s var(--ease-out);
  }

  &:hover::before {
    transform: translateZ(-40px) translate(-8px, 8px);
  }
`,tA=f.default.div.withConfig({displayName:"about-preview__Crop",componentId:"sc-21d3552-3"})`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: var(--color-mist);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-float);
  transition: transform 0.8s var(--ease-out);
`,tP=(0,f.default)(e3.AdvisorPhoto).withConfig({displayName:"about-preview__Portrait",componentId:"sc-21d3552-4"})`
  aspect-ratio: 4 / 3;

  @media (min-width: 640px) {
    aspect-ratio: 3 / 2;
  }
  @media (min-width: 1024px) {
    aspect-ratio: 4 / 5;
  }
`,tF=f.default.div.withConfig({displayName:"about-preview__CopyColumn",componentId:"sc-21d3552-5"})`
  @media (min-width: 1024px) {
    grid-column: 7 / span 6;
  }
`,tR=f.default.div.withConfig({displayName:"about-preview__Bio",componentId:"sc-21d3552-6"})`
  margin-top: 1.5rem;
  font-size: 15px;
  line-height: 1.75;
  color: var(--color-ink-soft);

  > * + * {
    margin-top: 1rem;
  }

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`,tL=f.default.blockquote.withConfig({displayName:"about-preview__Philosophy",componentId:"sc-21d3552-7"})`
  margin-top: 2rem;
  border-left: 2px solid var(--color-gold);
  padding-left: 1.25rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
  }
`,tM=f.default.p.withConfig({displayName:"about-preview__PhilosophyText",componentId:"sc-21d3552-8"})`
  font-family: var(--font-serif);
  font-size: 17px;
  line-height: 1.6;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 19px;
  }
`,tz=f.default.footer.withConfig({displayName:"about-preview__Attribution",componentId:"sc-21d3552-9"})`
  margin-top: 0.75rem;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-ink-faint);
`,tD=f.default.ul.withConfig({displayName:"about-preview__Qualifications",componentId:"sc-21d3552-10"})`
  margin-top: 2rem;
  display: grid;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,tB=f.default.li.withConfig({displayName:"about-preview__Qualification",componentId:"sc-21d3552-11"})`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
`,tU=f.default.span.withConfig({displayName:"about-preview__Tick",componentId:"sc-21d3552-12"})`
  margin-top: 0.125rem;
  display: flex;
  height: 18px;
  width: 18px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: color-mix(in oklch, var(--color-gold) 20%, transparent);
  color: var(--color-gold-ink);
`,tG=f.default.span.withConfig({displayName:"about-preview__QualificationText",componentId:"sc-21d3552-13"})`
  font-size: 14px;
  line-height: 1.375;
  color: var(--color-ink-soft);
`,tV=(0,f.default)(b.ButtonLink).withConfig({displayName:"about-preview__More",componentId:"sc-21d3552-14"})`
  margin-top: 1.75rem;
`,tH={sm:"4px",md:"12px",lg:"16px",full:"999px"},tW=f.default.img.withConfig({displayName:"member-photo__Img",componentId:"sc-3dad41d9-0"})`
  width: 100%;
  height: 100%;
  background: var(--color-mist);
  object-fit: cover;
  object-position: top;
  border-radius: ${e=>tH[e.$radius]};
`,tY=f.default.div.withConfig({displayName:"member-photo__Plate",componentId:"sc-3dad41d9-1"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: var(--color-navy-deep);
  border-radius: ${e=>tH[e.$radius]};
  overflow: hidden;
  container-type: inline-size;
`,tZ=f.default.span.withConfig({displayName:"member-photo__Wash",componentId:"sc-3dad41d9-2"})`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at 30% 24%,
    color-mix(in oklch, var(--color-gold) 26%, transparent),
    transparent 68%
  );
`,tK=f.default.span.withConfig({displayName:"member-photo__Initials",componentId:"sc-3dad41d9-3"})`
  position: relative;
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 26cqw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: color-mix(in oklch, var(--color-gold) 40%, transparent);
`,tq=f.default.ul.withConfig({displayName:"team__Members",componentId:"sc-4b9f985d-0"})`
  margin-top: 1.75rem;
  display: grid;
  gap: 3rem 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,tX=(0,f.default)(function({src:e,name:t,className:r,rounded:n="md"}){return e?(0,p.jsx)(tW,{src:e,alt:t,loading:"lazy",className:r,$radius:n}):(0,p.jsxs)(tY,{role:"img","aria-label":t,className:r,$radius:n,children:[(0,p.jsx)(tZ,{"aria-hidden":!0}),(0,p.jsx)(tK,{"aria-hidden":!0,children:t.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()??"").join("")})]})}).withConfig({displayName:"team__Portrait",componentId:"sc-4b9f985d-1"})`
  aspect-ratio: 4 / 5;
`,tJ=f.default.div.withConfig({displayName:"team__Detail",componentId:"sc-4b9f985d-2"})`
  margin-top: 1.25rem;
  border-top: 1px solid var(--color-line);
  padding-top: 1rem;
`,tQ=f.default.h3.withConfig({displayName:"team__Name",componentId:"sc-4b9f985d-3"})`
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  color: var(--color-ink);
`,t0=f.default.p.withConfig({displayName:"team__Role",componentId:"sc-4b9f985d-4"})`
  margin-top: 0.25rem;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-gold-ink);
`,t1=f.default.p.withConfig({displayName:"team__Bio",componentId:"sc-4b9f985d-5"})`
  margin-top: 0.75rem;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--color-ink-soft);
`,t2=f.default.ul.withConfig({displayName:"team__Credentials",componentId:"sc-4b9f985d-6"})`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`,t3=f.default.li.withConfig({displayName:"team__Credential",componentId:"sc-4b9f985d-7"})`
  border-radius: 999px;
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
  background: var(--color-canvas);
  padding: 0.25rem 0.625rem;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-ink-soft);
`;var t5=e.i(8424),t4=e.i(89206);let t9=f.default.ul.withConfig({displayName:"services__Grid",componentId:"sc-1eb9939f-0"})`
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;
  transform-style: preserve-3d;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.15rem;
  }
`,t8=f.default.li.withConfig({displayName:"services__Cell",componentId:"sc-1eb9939f-1"})`
  min-width: 0;
  transform-style: preserve-3d;

  /* The Reveal wrapper sits between the cell and the card, so the height has
     to be handed down explicitly or short cards in a row stop matching. */
  > * {
    height: 100%;
  }
`,t7=f.default.span.withConfig({displayName:"services__Plate",componentId:"sc-1eb9939f-2"})`
  display: flex;
  height: 2.75rem;
  width: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: color-mix(in oklab, var(--color-mist) 92%, transparent);
  border: 1px solid color-mix(in oklch, var(--prism-cyan) 24%, transparent);
  color: var(--color-gold-ink);
  box-shadow: inset 0 1px 0 oklch(1 0 0 / 0.08);
  transition:
    background-color 0.5s,
    color 0.5s,
    box-shadow 0.5s;
`,t6=(0,f.default)(y.LuArrowRight).withConfig({displayName:"services__Arrow",componentId:"sc-1eb9939f-3"})`
  transition: transform 0.42s;
`,re=(0,f.default)($.Link).withConfig({displayName:"services__Card",componentId:"sc-1eb9939f-4"})`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1.75rem;
  transform-style: preserve-3d;

  &:hover ${t7} {
    background: var(--color-gold);
    color: var(--color-navy-deep);
    box-shadow: 0 0 24px -6px var(--color-gold);
  }

  &:hover ${t6} {
    transform: translateX(0.25rem);
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`,rt=(0,f.default)(t5.Depth).withConfig({displayName:"services__Body",componentId:"sc-1eb9939f-5"})`
  display: flex;
  flex: 1;
  flex-direction: column;
`,rr=f.default.h3.withConfig({displayName:"services__Title",componentId:"sc-1eb9939f-6"})`
  margin-top: 1.5rem;
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  line-height: 1.375;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 20px;
  }
`,rn=f.default.p.withConfig({displayName:"services__Description",componentId:"sc-1eb9939f-7"})`
  margin-top: 0.75rem;
  flex: 1;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--color-ink-soft);
`,ri=f.default.span.withConfig({displayName:"services__More",componentId:"sc-1eb9939f-8"})`
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-gold-ink);
`;function ra({className:e}){let{services:t,serviceCategories:r}=(0,h.useConfig)(),n=r.length?r.map(e=>({key:e.key,icon:e.icon,title:e.title,description:e.description,count:e.services.length})):t.map((e,t)=>({key:`${t}-${e.title}`,icon:e.icon,title:e.title,description:e.description,count:0}));return(0,p.jsx)(t9,{className:e,children:n.map((e,t)=>{let r=(0,t4.icon)(e.icon);return(0,p.jsx)(t8,{children:(0,p.jsx)(tv.Reveal,{delay:t%3*80,children:(0,p.jsx)(t5.Tilt,{pad:"0",max:7,lift:20,children:(0,p.jsxs)(re,{to:`/services#${e.key}`,children:[(0,p.jsx)(t5.Depth,{$z:46,children:(0,p.jsx)(t7,{children:(0,p.jsx)(r,{size:19,strokeWidth:1.6})})}),(0,p.jsxs)(rt,{$z:24,children:[(0,p.jsx)(rr,{children:e.title}),(0,p.jsx)(rn,{children:e.description})]}),(0,p.jsx)(t5.Depth,{$z:12,children:(0,p.jsxs)(ri,{children:[e.count>0?`${e.count} services`:"Learn More",(0,p.jsx)(t6,{size:14})]})})]})})})},e.key)})})}var ro=e.i(84683),rd=e.i(75379);let rs=[2500,5e3,1e4,25e3],rl=f.default.div.withConfig({displayName:"tools__Preview",componentId:"sc-20754883-0"})`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  background: var(--color-navy-deep);
  padding: 1.75rem;
  color: var(--color-paper);
  box-shadow: var(--shadow-float);

  @media (min-width: 640px) {
    padding: 2.25rem;
  }
`,rc=f.default.div.withConfig({displayName:"tools__PreviewHead",componentId:"sc-20754883-1"})`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`,ru=f.default.span.withConfig({displayName:"tools__PreviewBadge",componentId:"sc-20754883-2"})`
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: color-mix(in oklch, var(--color-gold) 15%, transparent);
  color: var(--color-gold);
`,rp=f.default.p.withConfig({displayName:"tools__PreviewTitle",componentId:"sc-20754883-3"})`
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 600;
`,rf=f.default.p.withConfig({displayName:"tools__PreviewMeta",componentId:"sc-20754883-4"})`
  font-size: 12px;
  color: color-mix(in oklab, var(--color-paper) 64%, transparent);
`,rh=f.default.label.withConfig({displayName:"tools__FieldLabel",componentId:"sc-20754883-5"})`
  margin-top: 2rem;
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: color-mix(in oklab, var(--color-paper) 60%, transparent);
`,rm=f.default.p.withConfig({displayName:"tools__Amount",componentId:"sc-20754883-6"})`
  font-variant-numeric: tabular-nums;
  margin-top: 0.5rem;
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 1.4rem + 1.8vw, 2.6rem);
  font-weight: 600;
  line-height: 1;
  color: var(--color-paper);
`,rg=f.default.input.withConfig({displayName:"tools__Slider",componentId:"sc-20754883-7"})`
  margin-top: 1.25rem;

  &::-webkit-slider-thumb {
    border-color: var(--color-navy-deep);
    background: var(--color-gold);
  }
  &::-moz-range-thumb {
    border-color: var(--color-navy-deep);
    background: var(--color-gold);
  }
`,r$=f.default.div.withConfig({displayName:"tools__Presets",componentId:"sc-20754883-8"})`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,ry=f.default.button.withConfig({displayName:"tools__Preset",componentId:"sc-20754883-9"})`
  font-variant-numeric: tabular-nums;
  border-radius: 999px;
  border: 1px solid
    ${e=>e.$on?"var(--color-gold)":"rgb(255 255 255 / 0.18)"};
  background: ${e=>e.$on?"var(--color-gold)":"transparent"};
  color: ${e=>e.$on?"var(--color-navy-deep)":"color-mix(in oklch, var(--color-paper) 65%, transparent)"};
  padding: 0.375rem 0.875rem;
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    border-color: ${e=>e.$on?"var(--color-gold)":"rgb(255 255 255 / 0.4)"};
    color: ${e=>e.$on?"var(--color-navy-deep)":"var(--color-paper)"};
  }
`,rv=f.default.div.withConfig({displayName:"tools__Result",componentId:"sc-20754883-10"})`
  margin-top: 2rem;
  border-top: 1px solid rgb(255 255 255 / 0.12);
  padding-top: 1.75rem;
`,rb=f.default.p.withConfig({displayName:"tools__ResultLabel",componentId:"sc-20754883-11"})`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: color-mix(in oklab, var(--color-paper) 60%, transparent);
`,rx=f.default.p.withConfig({displayName:"tools__ResultValue",componentId:"sc-20754883-12"})`
  font-variant-numeric: tabular-nums;
  margin-top: 0.5rem;
  font-family: var(--font-serif);
  font-size: clamp(2rem, 1.5rem + 2.2vw, 2.9rem);
  font-weight: 600;
  line-height: 1;
  color: var(--color-gold);
`,rw=f.default.div.withConfig({displayName:"tools__Bar",componentId:"sc-20754883-13"})`
  margin-top: 1.5rem;
  display: flex;
  height: 0.5rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.1);
`,r_=f.default.span.withConfig({displayName:"tools__BarInvested",componentId:"sc-20754883-14"})`
  background: color-mix(in oklch, var(--color-paper) 12%, transparent);
`,rj=f.default.span.withConfig({displayName:"tools__BarGrowth",componentId:"sc-20754883-15"})`
  flex: 1;
  background: var(--color-gold);
`,rk=f.default.dl.withConfig({displayName:"tools__Split",componentId:"sc-20754883-16"})`
  font-variant-numeric: tabular-nums;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  font-size: 13px;
`,rC=f.default.dt.withConfig({displayName:"tools__SplitLabel",componentId:"sc-20754883-17"})`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: color-mix(in oklab, var(--color-paper) 64%, transparent);
`,rN=f.default.span.withConfig({displayName:"tools__Swatch",componentId:"sc-20754883-18"})`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 999px;
  background: ${e=>e.$growth?"var(--color-gold)":"color-mix(in oklch, var(--color-paper) 70%, transparent)"};
`,rI=f.default.dd.withConfig({displayName:"tools__SplitValue",componentId:"sc-20754883-19"})`
  margin-top: 0.25rem;
  font-weight: 500;
  color: var(--color-paper);
`,rS=(0,f.default)(b.ButtonLink).withConfig({displayName:"tools__OpenFull",componentId:"sc-20754883-20"})`
  margin-top: 2rem;
  width: 100%;
`,rE=f.default.p.withConfig({displayName:"tools__Disclaimer",componentId:"sc-20754883-21"})`
  margin-top: 1rem;
  font-size: 12px;
  line-height: 1.625;
  color: color-mix(in oklab, var(--color-paper) 58%, transparent);
`;function rT({name:e}){let t=(0,t4.icon)(e);return(0,p.jsx)(t,{size:20,strokeWidth:1.6})}function rO(){let[e,t]=(0,g.useState)(1e4),r=(0,g.useMemo)(()=>new URLSearchParams({op:"sipcalc",sip_amount:String(e),interest_rate:String(12),period_months:String(180),step_up_percent:"0"}).toString(),[e]),{data:n}=(0,ro.useCalc)(r),i=n?.maturity_amount??0,a=n?.invested_amount??0,o=Math.max(0,i-a),d=i>0?Math.round(a/i*100):0,s=(e-1e3)/49e3*100;return(0,p.jsxs)(rl,{children:[(0,p.jsxs)(rc,{children:[(0,p.jsx)(ru,{children:(0,p.jsx)(y.LuTrendingUp,{size:16,strokeWidth:1.8})}),(0,p.jsxs)("div",{children:[(0,p.jsx)(rp,{children:"SIP Calculator"}),(0,p.jsxs)(rf,{children:[15," years · ",12,"% assumed annual return"]})]})]}),(0,p.jsx)(rh,{htmlFor:"hero-sip",children:"Monthly investment"}),(0,p.jsxs)(rm,{children:["₹",e.toLocaleString("en-IN")]}),(0,p.jsx)(rg,{id:"hero-sip",type:"range",min:1e3,max:5e4,step:500,value:e,onChange:e=>t(Number(e.target.value)),"aria-label":"Monthly SIP amount",style:{background:`linear-gradient(to right, oklch(0.79 0.115 80) ${s}%, oklch(1 0 0 / 0.16) ${s}%)`}}),(0,p.jsx)(r$,{children:rs.map(r=>(0,p.jsxs)(ry,{type:"button",onClick:()=>t(r),"aria-pressed":e===r,$on:e===r,children:["₹",r.toLocaleString("en-IN")]},r))}),(0,p.jsxs)(rv,{children:[(0,p.jsxs)(rb,{children:["Projected value in ",15," years"]}),(0,p.jsx)(rx,{children:(0,rd.formatINRCompact)(i)}),(0,p.jsxs)(rw,{role:"presentation",children:[(0,p.jsx)(r_,{style:{width:`${d}%`}}),(0,p.jsx)(rj,{})]}),(0,p.jsxs)(rk,{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)(rC,{children:[(0,p.jsx)(rN,{"aria-hidden":!0}),"You invest"]}),(0,p.jsx)(rI,{children:(0,rd.formatINRCompact)(a)})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)(rC,{children:[(0,p.jsx)(rN,{$growth:!0,"aria-hidden":!0}),"Potential growth"]}),(0,p.jsx)(rI,{children:(0,rd.formatINRCompact)(o)})]})]})]}),(0,p.jsxs)(rS,{to:"/tools#sip",variant:"accent",size:"md",children:["Open Full Calculator",(0,p.jsx)(y.LuArrowRight,{size:16})]}),(0,p.jsx)(rE,{children:"Illustrative only. Returns are assumed, not guaranteed. Mutual fund investments are subject to market risks."})]})}let rA=f.default.div.withConfig({displayName:"tools__Layout",componentId:"sc-20754883-22"})`
  margin-top: 1.75rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 3rem;
  }
`,rP=(0,f.default)(tv.Reveal).withConfig({displayName:"tools__FeaturedColumn",componentId:"sc-20754883-23"})`
  @media (min-width: 1024px) {
    grid-column: span 5 / span 5;
  }
`,rF=f.default.div.withConfig({displayName:"tools__ListColumn",componentId:"sc-20754883-24"})`
  @media (min-width: 1024px) {
    grid-column: ${e=>e.$narrow?"span 7 / span 7":"span 12 / span 12"};
  }
`,rR=f.default.ul.withConfig({displayName:"tools__List",componentId:"sc-20754883-25"})`
  border-top: 1px solid var(--color-line);
`,rL=f.default.span.withConfig({displayName:"tools__Plate",componentId:"sc-20754883-26"})`
  display: flex;
  height: 3rem;
  width: 3rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
  background: var(--color-surface);
  color: var(--color-gold-ink);
  transition: border-color 0.42s, background-color 0.42s, color 0.42s;

  @media (min-width: 640px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`,rM=(0,f.default)(y.LuArrowRight).withConfig({displayName:"tools__Arrow",componentId:"sc-20754883-27"})`
  transition: transform 0.42s;
`,rz=(0,f.default)($.Link).withConfig({displayName:"tools__Row",componentId:"sc-20754883-28"})`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  border-bottom: 1px solid var(--color-line);
  border-radius: 14px;
  padding-inline: 0.9rem;
  padding-block: 1.5rem;
  transition:
    background-color 0.35s,
    transform 0.5s var(--ease-out),
    box-shadow 0.5s var(--ease-out);

  &:hover {
    background: var(--color-surface);
    /* perspective() as a transform function: the property styles children. */
    transform: perspective(900px) translateZ(16px) rotateX(2.5deg);
    box-shadow: var(--shadow-lift);
    border-bottom-color: transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.35s;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  &:hover ${rL} {
    border-color: color-mix(in oklch, var(--color-gold-deep) 40%, transparent);
    background: color-mix(in oklch, var(--color-gold) 12%, transparent);
    color: var(--color-gold-ink);
  }

  &:hover ${rM} {
    transform: translateX(0.25rem);
  }

  @media (min-width: 640px) {
    gap: 1.5rem;
    padding: 1.75rem 1rem 1.75rem 0.5rem;
  }
`,rD=f.default.div.withConfig({displayName:"tools__RowBody",componentId:"sc-20754883-29"})`
  min-width: 0;
  flex: 1;
`,rB=f.default.h3.withConfig({displayName:"tools__RowTitle",componentId:"sc-20754883-30"})`
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 600;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 19px;
  }
`,rU=f.default.p.withConfig({displayName:"tools__RowText",componentId:"sc-20754883-31"})`
  margin-top: 0.25rem;
  font-size: 14px;
  line-height: 1.375;
  color: var(--color-ink-soft);
`,rG=f.default.span.withConfig({displayName:"tools__RowCta",componentId:"sc-20754883-32"})`
  display: none;

  @media (min-width: 640px) {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 0.375rem;
    font-size: 13px;
    font-weight: 600;
    color: var(--color-gold-ink);
  }
`,rV=(0,f.default)(y.LuArrowRight).withConfig({displayName:"tools__RowChevron",componentId:"sc-20754883-33"})`
  flex-shrink: 0;
  color: var(--color-ink-faint);

  @media (min-width: 640px) {
    display: none;
  }
`,rH=(0,f.default)(b.ButtonLink).withConfig({displayName:"tools__ViewAll",componentId:"sc-20754883-34"})`
  margin-top: 2rem;
`,rW=(0,f.default)(b.Section).withConfig({displayName:"why-choose__Root",componentId:"sc-ac5d2475-0"})`
  position: relative;
  overflow: hidden;
`,rY=(0,f.default)(b.Shell).withConfig({displayName:"why-choose__Layout",componentId:"sc-ac5d2475-1"})`
  position: relative;
  display: grid;
  gap: 3.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 4rem;
  }
`,rZ=f.default.div.withConfig({displayName:"why-choose__Rail",componentId:"sc-ac5d2475-2"})`
  @media (min-width: 1024px) {
    grid-column: span 4 / span 4;
  }
`,rK=f.default.div.withConfig({displayName:"why-choose__Sticky",componentId:"sc-ac5d2475-3"})`
  @media (min-width: 1024px) {
    position: sticky;
    top: 7rem;
  }
`,rq=f.default.figure.withConfig({displayName:"why-choose__Philosophy",componentId:"sc-ac5d2475-4"})`
  margin-top: 1.875rem;
  border-left: 2px solid var(--color-gold);
  padding-left: 1.25rem;
`,rX=f.default.blockquote.withConfig({displayName:"why-choose__Quote",componentId:"sc-ac5d2475-5"})`
  font-family: var(--font-serif);
  font-size: 17px;
  line-height: 1.6;
  color: color-mix(in oklch, var(--color-paper) 90%, transparent);
`,rJ=f.default.figcaption.withConfig({displayName:"why-choose__Attribution",componentId:"sc-ac5d2475-6"})`
  margin-top: 0.75rem;
  font-size: 13px;
  color: color-mix(in oklab, var(--color-paper) 64%, transparent);
`,rQ=(0,f.default)(b.ButtonLink).withConfig({displayName:"why-choose__Cta",componentId:"sc-ac5d2475-7"})`
  margin-top: 1.75rem;
`,r0=f.default.ul.withConfig({displayName:"why-choose__Reasons",componentId:"sc-ac5d2475-8"})`
  display: grid;
  gap: 0.9rem;
  transform-style: preserve-3d;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-column: 6 / span 7;
    gap: 1rem;
  }

  > li {
    min-width: 0;
    transform-style: preserve-3d;
  }
  > li > * {
    height: 100%;
  }
`,r1=f.default.div.withConfig({displayName:"why-choose__Plate",componentId:"sc-ac5d2475-9"})`
  height: 100%;
  padding: 1.4rem 1.5rem 1.6rem;
`,r2=f.default.span.withConfig({displayName:"why-choose__Rule",componentId:"sc-ac5d2475-10"})`
  display: block;
  height: 1px;
  width: 100%;
  background: linear-gradient(
    to right,
    color-mix(in oklch, var(--color-gold) 70%, transparent),
    transparent
  );
`,r3=f.default.div.withConfig({displayName:"why-choose__Head",componentId:"sc-ac5d2475-11"})`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,r5=f.default.h3.withConfig({displayName:"why-choose__Title",componentId:"sc-ac5d2475-12"})`
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-paper);

  @media (min-width: 640px) {
    font-size: 19px;
  }
`,r4=f.default.p.withConfig({displayName:"why-choose__Description",componentId:"sc-ac5d2475-13"})`
  margin-top: 0.75rem;
  font-size: 14.5px;
  line-height: 1.7;
  color: color-mix(in oklch, var(--color-paper) 60%, transparent);
`,r9=f.default.div.withConfig({displayName:"ring__Viewport",componentId:"sc-7699b63b-0"})`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: relative;
    /* The stage for the ring. Deliberately shallower than the page default:
       a long perspective flattens a cylinder into a row. */
    perspective: var(--persp-near);
    perspective-origin: 50% 50%;
  }
`,r8=f.default.div.withConfig({displayName:"ring__Axis",componentId:"sc-7699b63b-1"})`
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transform: translateZ(-${e=>e.$radius}px) rotateY(${e=>-e.$angle}deg);
  transition: transform 1.1s var(--ease-out);
`,r7=f.default.div.withConfig({displayName:"ring__Facet",componentId:"sc-7699b63b-2"})`
  position: absolute;
  inset-block: 0;
  left: 50%;
  transform-origin: 50% 50%;
  transform: translateX(-50%) rotateY(${e=>e.$rotate}deg)
    translateZ(${e=>e.$radius}px);
  /**
   * The faces on the far side of the cylinder are pointing away from the
   * viewer, so what would be drawn is their BACKS: the card mirrored, with the
   * headline running right to left. Hiding the back face is what makes this a
   * solid rather than a ring of double-sided placards, and it is not optional
   * on a light page — a mirrored white card is perfectly legible as a mistake,
   * where on a dark one it was hidden by the dimming.
   */
  backface-visibility: hidden;
  /* Only the face in front and its immediate neighbours are drawn. One card
     either side is enough to say that this is a cylinder; anything past that
     is stacked behind them and adds nothing but clutter. */
  opacity: ${e=>e.$active?1:.38*(1===e.$dist)};
  filter: ${e=>e.$active?"none":"saturate(0.5)"};
  transition: opacity 0.8s var(--ease-out), filter 0.8s var(--ease-out);
  pointer-events: ${e=>e.$active?"auto":"none"};
`,r6=f.default.div.withConfig({displayName:"ring__Spacer",componentId:"sc-7699b63b-3"})`
  visibility: hidden;
  pointer-events: none;
`,ne=f.default.div.withConfig({displayName:"ring__Controls",componentId:"sc-7699b63b-4"})`
  display: none;

  /* They drive the cylinder, which is not on screen under this preference. */
  @media (prefers-reduced-motion: reduce) {
    display: none !important;
  }

  @media (min-width: 1024px) {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`,nt=f.default.button.withConfig({displayName:"ring__Dot",componentId:"sc-7699b63b-5"})`
  height: 0.4rem;
  border-radius: 999px;
  width: ${e=>e.$active?"2rem":"0.4rem"};
  background: ${e=>e.$active?"var(--color-gold)":"var(--color-line)"};
  transition: width 0.6s var(--ease-out), background-color 0.6s var(--ease-out);

  &:hover {
    background: ${e=>e.$active?"var(--color-gold)":"var(--color-ink-faint)"};
  }
`,nr=f.default.div.withConfig({displayName:"ring__RowItem",componentId:"sc-7699b63b-6"})`
  min-width: 0;
`,nn=f.default.div.withConfig({displayName:"ring__Row",componentId:"sc-7699b63b-7"})`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 78%;
  gap: 0.9rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 0.5rem;
  scrollbar-width: none;
  margin-inline: -1.25rem;
  padding-inline: 1.25rem;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    scroll-snap-align: center;
  }

  @media (min-width: 640px) {
    grid-auto-columns: 46%;
    margin-inline: -2rem;
    padding-inline: 2rem;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;function ni({items:e,render:t,faceWidth:r="30rem",interval:n=5200,label:i}){let[a,o]=(0,g.useState)(0),[d,s]=(0,g.useState)(600),l=(0,g.useRef)(null),c=(0,g.useRef)(!1),u=e.length,f=u>0?360/u:0,h=u>0?(a%u+u)%u:0;return((0,g.useEffect)(()=>{let e=l.current;if(!e||u<2)return;let t=()=>{let t=e.querySelector("[data-facet]");s(Math.round((t?.offsetWidth??.6*e.offsetWidth)/2/Math.tan(Math.PI/u)))};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[u]),(0,g.useEffect)(()=>{if(!n||u<2||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=window.setInterval(()=>{c.current||document.hidden||o(e=>e+1)},n);return()=>window.clearInterval(e)},[n,u]),0===u)?null:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r9,{"data-ring-viewport":!0,ref:l,style:{width:"100%"},onPointerEnter:()=>{c.current=!0},onPointerLeave:()=>{c.current=!1},children:[(0,p.jsx)(r8,{$angle:a*f,$radius:d,"data-ring":!0,children:e.map((e,n)=>(0,p.jsx)(r7,{"data-facet":!0,$rotate:n*f,$radius:d,$active:n===h,$dist:Math.min(Math.abs(n-h),u-Math.abs(n-h)),style:{width:r},inert:n!==h,children:t(e,n,n===h)},n))}),(0,p.jsx)(r6,{"aria-hidden":!0,inert:!0,style:{width:r,marginInline:"auto"},children:t(e[0],0,!1)})]}),(0,p.jsx)(ne,{role:"tablist","aria-label":i,children:e.map((e,t)=>(0,p.jsx)(nt,{type:"button",role:"tab","aria-selected":t===h,"aria-label":`${i}: ${t+1} of ${u}`,$active:t===h,onClick:()=>o(e=>e+((t-h)%u+u)%u)},t))}),(0,p.jsx)(nn,{"data-ring-row":!0,children:e.map((e,r)=>(0,p.jsx)(nr,{children:t(e,r,!0)},r))})]})}let na=[[/retire|pension/i,"Umbrella"],[/child|education|college|school/i,"GraduationCap"],[/home|house|proper/i,"Home"],[/travel|trip|holiday/i,"Plane"],[/tax/i,"Receipt"],[/emergency|safety|rainy/i,"ShieldCheck"],[/wealth|growth|corpus|freedom|independen/i,"Sprout"],[/business|venture/i,"Briefcase"],[/wedding|marriage/i,"Handshake"],[/health|medical/i,"HeartPulse"]],no=f.default.div.withConfig({displayName:"goals__Face",componentId:"sc-2b300f57-0"})`
  height: 100%;
  position: relative;
  border-radius: var(--radius-bento);
  background: color-mix(in oklab, var(--color-surface) 84%, transparent);
  backdrop-filter: blur(20px) saturate(1.25);
  -webkit-backdrop-filter: blur(20px) saturate(1.25);
  border: 1px solid oklch(1 0 0 / 0.6);
  box-shadow: var(--shadow-float), inset 0 1px 0 oklch(1 0 0 / 0.75);
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;

  /* The spectrum along the straight part of the top edge, inset by the corner
     radius for the same reason the card edge is. */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: var(--radius-bento);
    right: var(--radius-bento);
    height: 1px;
    border-radius: 999px;
    background: var(--prism-sweep);
    opacity: 0.7;
  }
`,nd=f.default.span.withConfig({displayName:"goals__Well",componentId:"sc-2b300f57-1"})`
  display: flex;
  height: 3.25rem;
  width: 3.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: var(--color-gold-ink);
  background: var(--color-mist);
  border: 1px solid color-mix(in oklch, var(--prism-cyan) 30%, transparent);
`,ns=f.default.span.withConfig({displayName:"goals__Ordinal",componentId:"sc-2b300f57-2"})`
  font-variant-numeric: tabular-nums;
  font-family: var(--font-serif);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--color-ink-faint);
`,nl=f.default.h3.withConfig({displayName:"goals__Label",componentId:"sc-2b300f57-3"})`
  font-family: var(--font-serif);
  font-size: clamp(1.4rem, 1.15rem + 1vw, 1.9rem);
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.02em;
  color: var(--color-ink);
  text-wrap: balance;
`,nc=f.default.p.withConfig({displayName:"goals__Note",componentId:"sc-2b300f57-4"})`
  flex: 1;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--color-ink-soft);
`,nu=(0,f.default)($.Link).withConfig({displayName:"goals__Go",componentId:"sc-2b300f57-5"})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--color-gold-ink);

  svg {
    transition: transform 0.4s var(--ease-out);
  }

  &:hover svg {
    transform: translateX(0.25rem);
  }
`,np=f.default.div.withConfig({displayName:"onboarding-cta__Root",componentId:"sc-fdcd7728-0"})`
  border-radius: 15px;
  border: 1px solid
    ${e=>e.$dark?"rgb(255 255 255 / 0.15)":"var(--color-line)"};
  background: ${e=>e.$dark?"rgb(255 255 255 / 0.04)":"var(--color-sand)"};
  padding: 1.25rem;

  @media (min-width: 640px) {
    padding: 1.75rem;
  }
`,nf=f.default.div.withConfig({displayName:"onboarding-cta__Row",componentId:"sc-fdcd7728-1"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
  }
`,nh=f.default.div.withConfig({displayName:"onboarding-cta__Lead",componentId:"sc-fdcd7728-2"})`
  display: flex;
  min-width: 0;
  gap: 1rem;
`,nm=f.default.span.withConfig({displayName:"onboarding-cta__Badge",componentId:"sc-fdcd7728-3"})`
  display: flex;
  height: 2.75rem;
  width: 2.75rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${e=>e.$dark?"color-mix(in oklch, var(--color-gold) 15%, transparent)":"var(--color-mist)"};
  color: ${e=>e.$dark?"var(--color-gold)":"var(--color-navy)"};
`,ng=f.default.h3.withConfig({displayName:"onboarding-cta__Title",componentId:"sc-fdcd7728-4"})`
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.35;
  color: ${e=>e.$dark?"var(--color-paper)":"var(--color-ink)"};

  @media (min-width: 640px) {
    font-size: 20px;
  }
`,n$=f.default.p.withConfig({displayName:"onboarding-cta__Body",componentId:"sc-fdcd7728-5"})`
  margin-top: 0.5rem;
  max-width: 36rem;
  font-size: 13.5px;
  line-height: 1.6;
  color: ${e=>e.$dark?"rgb(255 255 255 / 0.7)":"var(--color-ink-soft)"};
`,ny=f.default.ul.withConfig({displayName:"onboarding-cta__Actions",componentId:"sc-fdcd7728-6"})`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 0.625rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`,nv=f.default.a.withConfig({displayName:"onboarding-cta__Action",componentId:"sc-fdcd7728-7"})`
  display: inline-flex;
  min-height: 2.75rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  padding: 0.625rem 1.25rem;
  text-align: center;
  font-size: 14px;
  font-weight: ${e=>e.$primary&&e.$dark?600:500};
  transition: background-color 0.3s, border-color 0.3s, filter 0.3s;

  @media (min-width: 640px) {
    width: auto;
  }

  ${e=>e.$primary?e.$dark?`background: var(--color-gold); color: var(--color-navy-deep);
           &:hover { filter: brightness(1.06); }`:`background: var(--color-navy); color: var(--color-paper);
           &:hover { background: var(--color-navy-deep); }`:e.$dark?`border: 1px solid rgb(255 255 255 / 0.25); color: var(--color-paper);
           &:hover { border-color: rgb(255 255 255 / 0.5); background: rgb(255 255 255 / 0.1); }`:`border: 1px solid var(--color-line); background: var(--color-surface);
           color: var(--color-ink);
           &:hover { border-color: color-mix(in oklch, var(--color-navy) 30%, transparent);
                     background: var(--color-surface); }`}
`,nb=f.default.ol.withConfig({displayName:"process__Steps",componentId:"sc-eb13173-0"})`
  position: relative;
  margin-top: 1.9rem;
  display: grid;
  gap: 0.9rem;
  /**
   * Perspective here, NOT transform-style: preserve-3d.
   *
   * These children carry a permanent 3D transform. With preserve-3d on this
   * container the perspective comes from a further ancestor, and Chromium then
   * fails to hit-test the children at all — the pointer falls straight through
   * to this element, so nothing below it can be hovered, clicked or focused by
   * mouse. It is invisible in a screenshot and total in use.
   *
   * Declaring the perspective on the direct parent instead makes each child an
   * ordinary perspective child, which hit-tests normally. Nothing about the
   * rendering changes.
   *
   * The tell: a child whose Z happens to be 0 keeps working, because
   * translateZ(0) collapses to a 2D matrix. That is why the first card in this
   * row responded and the other three did not.
   */
  perspective: 1500px;
  perspective-origin: 50% 50%;

  @media (min-width: 640px) {
    margin-top: 2.1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,nx=f.default.li.withConfig({displayName:"process__Step",componentId:"sc-eb13173-1"})`
  position: relative;
  min-width: 0;

  > * {
    height: 100%;
  }

  @media (min-width: 1024px) {
    transform: translateZ(${e=>-(18*e.$depth)}px);
  }
`,nw=f.default.div.withConfig({displayName:"process__Layout",componentId:"sc-eb13173-2"})`
  display: flex;
  gap: 1.25rem;
  height: 100%;
  padding: 1.5rem 1.5rem 1.7rem;

  @media (min-width: 640px) {
    display: block;
  }
`,n_=f.default.span.withConfig({displayName:"process__Node",componentId:"sc-eb13173-3"})`
  position: relative;
  z-index: 10;
  display: flex;
  height: 26px;
  width: 26px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-soft);
`,nj=f.default.span.withConfig({displayName:"process__Dot",componentId:"sc-eb13173-4"})`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 999px;
  background: var(--color-gold);
  box-shadow: 0 0 12px var(--color-gold);
`,nk=f.default.div.withConfig({displayName:"process__Body",componentId:"sc-eb13173-5"})`
  min-width: 0;
  flex: 1;

  @media (min-width: 640px) {
    margin-top: 1.5rem;
  }
`,nC=f.default.p.withConfig({displayName:"process__Number",componentId:"sc-eb13173-6"})`
  font-variant-numeric: tabular-nums;
  font-family: var(--font-serif);
  font-size: 38px;
  font-weight: 600;
  line-height: 1;
  background: var(--prism-sweep);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.55;

  @media (min-width: 640px) {
    font-size: 46px;
  }
`,nN=f.default.h3.withConfig({displayName:"process__Title",componentId:"sc-eb13173-7"})`
  margin-top: 0.75rem;
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  line-height: 1.375;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 20px;
  }
`,nI=f.default.p.withConfig({displayName:"process__Description",componentId:"sc-eb13173-8"})`
  margin-top: 0.625rem;
  max-width: 20rem;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--color-ink-soft);
`,nS=(0,f.default)(function({tone:e="light",className:t}){let{onboarding:r}=(0,h.useConfig)(),n=[r.kyc,r.start].filter(e=>e.url.trim());if(!r.enabled||0===n.length)return null;let i="dark"===e;return(0,p.jsx)(np,{$dark:i,className:t,children:(0,p.jsxs)(nf,{children:[(0,p.jsxs)(nh,{children:[(0,p.jsx)(nm,{$dark:i,children:(0,p.jsx)(y.LuShieldCheck,{size:19})}),(0,p.jsxs)("div",{style:{minWidth:0},children:[(0,p.jsx)(ng,{$dark:i,children:r.title}),(0,p.jsx)(n$,{$dark:i,children:r.lead})]})]}),(0,p.jsx)(ny,{children:n.map((e,t)=>(0,p.jsx)("li",{children:(0,p.jsxs)(nv,{href:e.url,target:"_blank",rel:"noreferrer",$dark:i,$primary:0===t,children:[e.label,(0,p.jsx)(y.LuArrowUpRight,{size:16,style:{flexShrink:0},"aria-hidden":!0})]})},e.url))})]})})}).withConfig({displayName:"process__Onboarding",componentId:"sc-eb13173-9"})`
  margin-top: 1.9rem;
`,nE=f.default.article.withConfig({displayName:"insight-card__Article",componentId:"sc-95c375c7-0"})`
  height: 100%;
`,nT=(0,f.default)($.Link).withConfig({displayName:"insight-card__Card",componentId:"sc-95c375c7-1"})`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  transition: border-color 0.42s, box-shadow 0.42s, transform 0.42s;

  &:hover {
    transform: translateY(-0.25rem);
    border-color: var(--color-line-soft);
    box-shadow: var(--shadow-lift);
  }
`,nO=f.default.div.withConfig({displayName:"insight-card__Cover",componentId:"sc-95c375c7-2"})`
  position: relative;
  display: flex;
  height: 9rem;
  align-items: center;
  justify-content: center;
  background: var(--color-mist);

  @media (min-width: 640px) {
    height: 10rem;
  }
`,nA=f.default.span.withConfig({displayName:"insight-card__Wash",componentId:"sc-95c375c7-3"})`
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: radial-gradient(
    circle at 30% 20%,
    color-mix(in oklch, var(--color-gold) 22%, transparent),
    transparent 62%
  );
`,nP=f.default.span.withConfig({displayName:"insight-card__CoverIcon",componentId:"sc-95c375c7-4"})`
  position: relative;
  color: color-mix(in oklch, var(--color-navy) 60%, transparent);
  transition: transform 0.68s;

  ${nT}:hover & {
    transform: scale(1.1);
  }
`,nF=f.default.span.withConfig({displayName:"insight-card__Category",componentId:"sc-95c375c7-5"})`
  position: absolute;
  left: 1rem;
  top: 1rem;
  border-radius: 999px;
  background: color-mix(in oklch, var(--color-surface) 90%, transparent);
  backdrop-filter: blur(6px);
  padding: 0.25rem 0.75rem;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold-ink);
`,nR=f.default.div.withConfig({displayName:"insight-card__Body",componentId:"sc-95c375c7-6"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;

  @media (min-width: 640px) {
    padding: 1.75rem;
  }
`,nL=f.default.h3.withConfig({displayName:"insight-card__Title",componentId:"sc-95c375c7-7"})`
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 19px;
  }
`,nM=f.default.p.withConfig({displayName:"insight-card__Description",componentId:"sc-95c375c7-8"})`
  margin-top: 0.75rem;
  flex: 1;
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-ink-soft);
`,nz=f.default.div.withConfig({displayName:"insight-card__Foot",componentId:"sc-95c375c7-9"})`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-line-soft);
  padding-top: 1rem;
`,nD=f.default.p.withConfig({displayName:"insight-card__Meta",componentId:"sc-95c375c7-10"})`
  font-size: 12px;
  color: var(--color-ink-faint);
`,nB=f.default.span.withConfig({displayName:"insight-card__More",componentId:"sc-95c375c7-11"})`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-navy);

  svg {
    transition: transform 0.42s;
  }
  ${nT}:hover & svg {
    transform: translate(0.125rem, -0.125rem);
  }
`;function nU({insight:e,className:t}){let r=(0,t4.icon)(e.icon);return(0,p.jsx)(nE,{className:t,children:(0,p.jsxs)(nT,{to:"/insights",children:[(0,p.jsxs)(nO,{children:[(0,p.jsx)(nA,{"aria-hidden":!0}),(0,p.jsx)(nP,{"aria-hidden":!0,children:(0,p.jsx)(r,{size:36})}),(0,p.jsx)(nF,{children:e.category})]}),(0,p.jsxs)(nR,{children:[(0,p.jsx)(nL,{children:e.title}),(0,p.jsx)(nM,{children:e.description}),(0,p.jsxs)(nz,{children:[(0,p.jsxs)(nD,{children:[(0,p.jsx)("time",{children:e.date}),(0,p.jsx)("span",{"aria-hidden":!0,children:" · "}),e.readTime]}),(0,p.jsxs)(nB,{children:["Read More",(0,p.jsx)(y.LuArrowUpRight,{size:14})]})]})]})]})})}let nG=f.default.div.withConfig({displayName:"insights__Cards",componentId:"sc-1886c883-0"})`
  margin-top: 1.75rem;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,nV=f.default.div.withConfig({displayName:"testimonials__Columns",componentId:"sc-173192c5-0"})`
  margin-top: 1.9rem;
  display: grid;
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);

  > * + * {
    border-top: 1px solid var(--color-line);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    > * + * {
      border-top: 0;
      border-left: 1px solid var(--color-line);
    }
  }
`,nH=(0,f.default)(tv.Reveal).withConfig({displayName:"testimonials__Column",componentId:"sc-173192c5-1"})`
  display: flex;
  flex-direction: column;
  padding: 2.25rem 0;

  @media (min-width: 640px) {
    padding-block: 1.875rem;
  }
  @media (min-width: 1024px) {
    padding: 2.75rem 2.25rem;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`,nW=f.default.span.withConfig({displayName:"testimonials__Mark",componentId:"sc-173192c5-2"})`
  font-family: var(--font-serif);
  font-size: 52px;
  line-height: 0.6;
  color: color-mix(in oklch, var(--color-gold) 45%, transparent);
`,nY=f.default.blockquote.withConfig({displayName:"testimonials__Quote",componentId:"sc-173192c5-3"})`
  margin-top: 1.25rem;
  flex: 1;
`,nZ=f.default.p.withConfig({displayName:"testimonials__QuoteText",componentId:"sc-173192c5-4"})`
  font-family: var(--font-serif);
  font-size: 17px;
  line-height: 1.62;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 18px;
  }
`,nK=f.default.figcaption.withConfig({displayName:"testimonials__Caption",componentId:"sc-173192c5-5"})`
  margin-top: 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
`,nq=f.default.span.withConfig({displayName:"testimonials__Initials",componentId:"sc-173192c5-6"})`
  display: flex;
  height: 2.75rem;
  width: 2.75rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-navy);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.025em;
  color: var(--color-gold);
`,nX=f.default.span.withConfig({displayName:"testimonials__Name",componentId:"sc-173192c5-7"})`
  display: block;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--color-ink);
`,nJ=f.default.span.withConfig({displayName:"testimonials__City",componentId:"sc-173192c5-8"})`
  margin-top: 0.125rem;
  display: block;
  font-size: 12.5px;
  color: var(--color-ink-faint);
`,nQ=f.default.p.withConfig({displayName:"testimonials__Disclaimer",componentId:"sc-173192c5-9"})`
  margin: 2rem auto 0;
  max-width: 42rem;
  text-align: center;
  font-size: 12px;
  line-height: 1.625;
  color: var(--color-ink-faint);
`,n0=f.default.ul.withConfig({displayName:"partners__Grid",componentId:"sc-b9415982-0"})`
  margin-top: 2.5rem;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /**
   * Perspective here, NOT transform-style: preserve-3d.
   *
   * These children carry a permanent 3D transform. With preserve-3d on this
   * container the perspective comes from a further ancestor, and Chromium then
   * fails to hit-test the children at all — the pointer falls straight through
   * to this element, so nothing below it can be hovered, clicked or focused by
   * mouse. It is invisible in a screenshot and total in use.
   *
   * Declaring the perspective on the direct parent instead makes each child an
   * ordinary perspective child, which hit-tests normally. Nothing about the
   * rendering changes.
   *
   * The tell: a child whose Z happens to be 0 keeps working, because
   * translateZ(0) collapses to a 2D matrix. That is why the first card in this
   * row responded and the other three did not.
   */
  perspective: 1500px;
  perspective-origin: 50% 50%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.9rem;
  }

  > li {
    height: 100%;
  }
  > li > * {
    height: 100%;
  }
`,n1=f.default.li.withConfig({displayName:"partners__Facet",componentId:"sc-b9415982-1"})`
  min-width: 0;

  > * {
    height: 100%;
  }

  @media (min-width: 1024px) {
    transform: rotateY(${e=>-5*e.$col}deg)
      translateZ(${e=>-(16*Math.abs(e.$col))}px);
    transition: transform 0.7s var(--ease-out);
  }
`,n2=f.default.div.withConfig({displayName:"partners__Cell",componentId:"sc-b9415982-2"})`
  position: relative;
  display: flex;
  height: 100%;
  min-height: 92px;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-card);
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-soft);
  padding: 1.5rem 1rem;
  text-align: center;
  overflow: hidden;
  transition:
    transform 0.6s var(--ease-out),
    box-shadow 0.6s var(--ease-out),
    border-color 0.5s ease;

  &:hover {
    /* perspective() as a transform function, not the perspective property:
       the property applies to an element's CHILDREN, so it would have done
       nothing for the tile's own lift. */
    transform: perspective(700px) translateZ(18px) rotateX(4deg);
    border-color: color-mix(in oklch, var(--prism-cyan) 38%, transparent);
    box-shadow: var(--shadow-float);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`,n3=f.default.img.withConfig({displayName:"partners__Logo",componentId:"sc-b9415982-3"})`
  max-height: 2.25rem;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`,n5=f.default.span.withConfig({displayName:"partners__Name",componentId:"sc-b9415982-4"})`
  font-family: var(--font-serif);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--color-ink-soft);
  text-wrap: balance;
  transition: color 0.5s ease;

  ${n2}:hover & {
    color: var(--color-ink);
  }
`;function n4(e){return/^(https?:)?\/\//i.test(e)||/^(mailto|tel):/i.test(e)}let n9=(0,f.default)(b.Section).withConfig({displayName:"referral__Band",componentId:"sc-ab9a8a5c-0"})`
  padding-block: 2.1rem;

  @media (min-width: 640px) {
    padding-block: 2.6rem;
  }
  @media (min-width: 1024px) {
    padding-block: 2.9rem;
  }
`,n8=f.default.div.withConfig({displayName:"referral__Panel",componentId:"sc-ab9a8a5c-1"})`
  position: relative;
  border-radius: inherit;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: var(--radius-card);
    bottom: var(--radius-card);
    left: 0;
    width: 2px;
    border-radius: 999px;
    background: linear-gradient(
      to bottom,
      var(--prism-cyan),
      var(--prism-violet),
      var(--prism-magenta)
    );
  }

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
  @media (min-width: 1024px) {
    padding: 3rem;
  }
`,n7=f.default.div.withConfig({displayName:"referral__Row",componentId:"sc-ab9a8a5c-2"})`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
  }
`,n6=f.default.div.withConfig({displayName:"referral__Body",componentId:"sc-ab9a8a5c-3"})`
  max-width: 42rem;
`,ie=f.default.span.withConfig({displayName:"referral__Kicker",componentId:"sc-ab9a8a5c-4"})`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-gold-ink);
`,it=f.default.h2.withConfig({displayName:"referral__Title",componentId:"sc-ab9a8a5c-5"})`
  margin-top: 1rem;
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 1.2rem + 1.4vw, 2.1rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-ink);
  text-wrap: balance;
`,ir=(0,f.default)(function({url:e,fallback:t="/contact",className:r,children:n}){let i=e.trim()||t;return n4(i)?(0,p.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",className:r,children:n}):(0,p.jsx)($.Link,{to:i,className:r,children:n})}).withConfig({displayName:"referral__Ask",componentId:"sc-ab9a8a5c-6"})`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  height: 3.25rem;
  padding-inline: 1.75rem;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  background: var(--color-navy);
  color: var(--color-paper);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.45s var(--ease-out),
    background-color 0.3s,
    box-shadow 0.4s var(--ease-out);

  &:hover {
    background: var(--color-navy-soft);
    box-shadow: var(--shadow-glow);
    transform: perspective(600px) translateZ(14px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`,ii=f.default.p.withConfig({displayName:"referral__Lede",componentId:"sc-ab9a8a5c-7"})`
  margin-top: 1rem;
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-ink-soft);
  text-wrap: pretty;
`,ia=f.default.ul.withConfig({displayName:"downloads__List",componentId:"sc-312fb92a-0"})`
  margin-top: 1.75rem;
  display: grid;
  gap: 0.75rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,io=f.default.a.withConfig({displayName:"downloads__Item",componentId:"sc-312fb92a-1"})`
  display: flex;
  height: 100%;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 13px;
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
  background: var(--color-surface);
  padding: 1.25rem;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-0.125rem);
    border-color: color-mix(in oklch, var(--color-navy) 25%, transparent);
    box-shadow: var(--shadow-lift);
  }
`,id=f.default.span.withConfig({displayName:"downloads__Badge",componentId:"sc-312fb92a-2"})`
  display: flex;
  height: 2.75rem;
  width: 2.75rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--color-mist);
  color: var(--color-navy);
  transition: background-color 0.3s, color 0.3s;

  ${io}:hover & {
    background: color-mix(in oklch, var(--color-gold) 15%, transparent);
    color: var(--color-gold-ink);
  }
`,is=f.default.span.withConfig({displayName:"downloads__Body",componentId:"sc-312fb92a-3"})`
  min-width: 0;
  flex: 1;
`,il=f.default.span.withConfig({displayName:"downloads__TitleRow",componentId:"sc-312fb92a-4"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem 0.75rem;
`,ic=f.default.span.withConfig({displayName:"downloads__Title",componentId:"sc-312fb92a-5"})`
  font-family: var(--font-serif);
  font-size: 16.5px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--color-ink);
`,iu=f.default.span.withConfig({displayName:"downloads__Kind",componentId:"sc-312fb92a-6"})`
  border-radius: 999px;
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
  background: var(--color-sand);
  padding: 0.125rem 0.5rem;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-ink-faint);
`,ip=f.default.span.withConfig({displayName:"downloads__Note",componentId:"sc-312fb92a-7"})`
  margin-top: 0.375rem;
  display: block;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--color-ink-soft);
`,ih=f.default.section.withConfig({displayName:"lead-cta__Band",componentId:"sc-62b15210-0"})`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  perspective: 1200px;
  background: var(--color-navy-deep);
  color: var(--color-paper);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset-inline: 0;
    height: 1px;
    background: var(--prism-sweep);
    opacity: 0.65;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`,im=f.default.img.withConfig({displayName:"lead-cta__Backdrop",componentId:"sc-62b15210-1"})`
  position: absolute;
  inset: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.4;
`,ig=f.default.span.withConfig({displayName:"lead-cta__Scrim",componentId:"sc-62b15210-2"})`
  position: absolute;
  inset: 0;
  z-index: -10;
  background: linear-gradient(
    to bottom,
    color-mix(in oklch, var(--color-navy-deep) 80%, transparent),
    color-mix(in oklch, var(--color-navy-deep) 70%, transparent),
    color-mix(in oklch, var(--color-navy-deep) 92%, transparent)
  );
`,i$=f.default.span.withConfig({displayName:"lead-cta__Depths",componentId:"sc-62b15210-3"})`
  pointer-events: none;
  position: absolute;
  inset: -20%;
  z-index: -5;
  transform-style: preserve-3d;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(70px);
  }
  &::before {
    left: 8%;
    top: 10%;
    width: 34rem;
    height: 22rem;
    background: color-mix(in oklab, var(--prism-cyan) 26%, transparent);
    transform: translateZ(-260px);
    animation: floatZ 17s ease-in-out infinite;
  }
  &::after {
    right: 6%;
    bottom: 4%;
    width: 30rem;
    height: 20rem;
    background: color-mix(in oklab, var(--prism-magenta) 22%, transparent);
    transform: translateZ(-140px);
    animation: floatZ 23s ease-in-out 3s infinite reverse;
  }
`,iy=(0,f.default)(b.Shell).withConfig({displayName:"lead-cta__Inner",componentId:"sc-62b15210-4"})`
  padding-block: 2.6rem;
  text-align: center;

  @media (min-width: 640px) {
    padding-block: 2.9rem;
  }
  @media (min-width: 1024px) {
    padding-block: 3.4rem;
  }
`,iv=(0,f.default)(eW.Eyebrow).withConfig({displayName:"lead-cta__CenteredEyebrow",componentId:"sc-62b15210-5"})`
  justify-content: center;
`,ib=f.default.h2.withConfig({displayName:"lead-cta__Title",componentId:"sc-62b15210-6"})`
  margin: 1.25rem auto 0;
  max-width: 48rem;
  font-size: clamp(2rem, 1.4rem + 2.4vw, 3.25rem);
  line-height: 1.1;
  text-wrap: balance;
  color: var(--color-paper);
`,ix=f.default.p.withConfig({displayName:"lead-cta__Lede",componentId:"sc-62b15210-7"})`
  margin: 1.25rem auto 0;
  max-width: 36rem;
  font-size: 16px;
  line-height: 1.7;
  text-wrap: pretty;
  color: rgb(255 255 255 / 0.7);

  @media (min-width: 640px) {
    font-size: 17px;
  }
`,iw=f.default.div.withConfig({displayName:"lead-cta__Actions",componentId:"sc-62b15210-8"})`
  margin: 2.5rem auto 0;
  display: flex;
  width: 100%;
  max-width: 28rem;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    max-width: none;
    flex-direction: row;
    justify-content: center;
  }
`;var i_=function(e){var t,r,n;return!!(t=e)&&"object"==typeof t&&(r=e,"[object RegExp]"!==(n=Object.prototype.toString.call(r))&&"[object Date]"!==n&&r.$$typeof!==ij)},ij="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function ik(e,t){return!1!==t.clone&&t.isMergeableObject(e)?iN(Array.isArray(e)?[]:{},e,t):e}function iC(e,t,r){return e.concat(t).map(function(e){return ik(e,r)})}function iN(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||iC,r.isMergeableObject=r.isMergeableObject||i_;var n,i,a=Array.isArray(t);return a!==Array.isArray(e)?ik(t,r):a?r.arrayMerge(e,t,r):(i={},(n=r).isMergeableObject(e)&&Object.keys(e).forEach(function(t){i[t]=ik(e[t],n)}),Object.keys(t).forEach(function(r){n.isMergeableObject(t[r])&&e[r]?i[r]=iN(e[r],t[r],n):i[r]=ik(t[r],n)}),i)}iN.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,r){return iN(e,r,t)},{})};let iI=iN;var iS=e.g&&e.g.Object===Object&&e.g,iE="object"==typeof self&&self&&self.Object===Object&&self,iT=iS||iE||Function("return this")(),iO=iT.Symbol,iA=Object.prototype,iP=iA.hasOwnProperty,iF=iA.toString,iR=iO?iO.toStringTag:void 0;let iL=function(e){var t=iP.call(e,iR),r=e[iR];try{e[iR]=void 0;var n=!0}catch(e){}var i=iF.call(e);return n&&(t?e[iR]=r:delete e[iR]),i};var iM=Object.prototype.toString,iz=iO?iO.toStringTag:void 0;let iD=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":iz&&iz in Object(e)?iL(e):iM.call(e)},iB=function(e,t){return function(r){return e(t(r))}};var iU=iB(Object.getPrototypeOf,Object);let iG=function(e){return null!=e&&"object"==typeof e};var iV=Object.prototype,iH=Function.prototype.toString,iW=iV.hasOwnProperty,iY=iH.call(Object);let iZ=function(e){if(!iG(e)||"[object Object]"!=iD(e))return!1;var t=iU(e);if(null===t)return!0;var r=iW.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&iH.call(r)==iY},iK=function(e,t){return e===t||e!=e&&t!=t},iq=function(e,t){for(var r=e.length;r--;)if(iK(e[r][0],t))return r;return -1};var iX=Array.prototype.splice;function iJ(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}iJ.prototype.clear=function(){this.__data__=[],this.size=0},iJ.prototype.delete=function(e){var t=this.__data__,r=iq(t,e);return!(r<0)&&(r==t.length-1?t.pop():iX.call(t,r,1),--this.size,!0)},iJ.prototype.get=function(e){var t=this.__data__,r=iq(t,e);return r<0?void 0:t[r][1]},iJ.prototype.has=function(e){return iq(this.__data__,e)>-1},iJ.prototype.set=function(e,t){var r=this.__data__,n=iq(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};let iQ=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i0=function(e){if(!iQ(e))return!1;var t=iD(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var i1=iT["__core-js_shared__"],i2=(i=/[^.]+$/.exec(i1&&i1.keys&&i1.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",i3=Function.prototype.toString;let i5=function(e){if(null!=e){try{return i3.call(e)}catch(e){}try{return e+""}catch(e){}}return""};var i4=/^\[object .+?Constructor\]$/,i9=Object.prototype,i8=Function.prototype.toString,i7=i9.hasOwnProperty,i6=RegExp("^"+i8.call(i7).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let ae=function(e){return!!iQ(e)&&(!i2||!(i2 in e))&&(i0(e)?i6:i4).test(i5(e))},at=function(e,t){var r=null==e?void 0:e[t];return ae(r)?r:void 0};var ar=at(iT,"Map"),an=at(Object,"create"),ai=Object.prototype.hasOwnProperty,aa=Object.prototype.hasOwnProperty;function ao(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ao.prototype.clear=function(){this.__data__=an?an(null):{},this.size=0},ao.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=!!t,t},ao.prototype.get=function(e){var t=this.__data__;if(an){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ai.call(t,e)?t[e]:void 0},ao.prototype.has=function(e){var t=this.__data__;return an?void 0!==t[e]:aa.call(t,e)},ao.prototype.set=function(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=an&&void 0===t?"__lodash_hash_undefined__":t,this};let ad=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},as=function(e,t){var r=e.__data__;return ad(t)?r["string"==typeof t?"string":"hash"]:r.map};function al(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ac(e){var t=this.__data__=new iJ(e);this.size=t.size}al.prototype.clear=function(){this.size=0,this.__data__={hash:new ao,map:new(ar||iJ),string:new ao}},al.prototype.delete=function(e){var t=as(this,e).delete(e);return this.size-=!!t,t},al.prototype.get=function(e){return as(this,e).get(e)},al.prototype.has=function(e){return as(this,e).has(e)},al.prototype.set=function(e,t){var r=as(this,e),n=r.size;return r.set(e,t),this.size+=+(r.size!=n),this},ac.prototype.clear=function(){this.__data__=new iJ,this.size=0},ac.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},ac.prototype.get=function(e){return this.__data__.get(e)},ac.prototype.has=function(e){return this.__data__.has(e)},ac.prototype.set=function(e,t){var r=this.__data__;if(r instanceof iJ){var n=r.__data__;if(!ar||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new al(n)}return r.set(e,t),this.size=r.size,this};let au=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e};var ap=function(){try{var e=at(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();let af=function(e,t,r){"__proto__"==t&&ap?ap(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r};var ah=Object.prototype.hasOwnProperty;let am=function(e,t,r){var n=e[t];ah.call(e,t)&&iK(n,r)&&(void 0!==r||t in e)||af(e,t,r)},ag=function(e,t,r,n){var i=!r;r||(r={});for(var a=-1,o=t.length;++a<o;){var d=t[a],s=n?n(r[d],e[d],d,r,e):void 0;void 0===s&&(s=e[d]),i?af(r,d,s):am(r,d,s)}return r},a$=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},ay=function(e){return iG(e)&&"[object Arguments]"==iD(e)};var av=Object.prototype,ab=av.hasOwnProperty,ax=av.propertyIsEnumerable,aw=ay(function(){return arguments}())?ay:function(e){return iG(e)&&ab.call(e,"callee")&&!ax.call(e,"callee")},a_=Array.isArray;let aj=function(){return!1};var ak=/^(?:0|[1-9]\d*)$/;let aC=function(e,t){var r=typeof e;return!!(t=null==t?0x1fffffffffffff:t)&&("number"==r||"symbol"!=r&&ak.test(e))&&e>-1&&e%1==0&&e<t},aN=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff};var aI={};aI["[object Float32Array]"]=aI["[object Float64Array]"]=aI["[object Int8Array]"]=aI["[object Int16Array]"]=aI["[object Int32Array]"]=aI["[object Uint8Array]"]=aI["[object Uint8ClampedArray]"]=aI["[object Uint16Array]"]=aI["[object Uint32Array]"]=!0,aI["[object Arguments]"]=aI["[object Array]"]=aI["[object ArrayBuffer]"]=aI["[object Boolean]"]=aI["[object DataView]"]=aI["[object Date]"]=aI["[object Error]"]=aI["[object Function]"]=aI["[object Map]"]=aI["[object Number]"]=aI["[object Object]"]=aI["[object RegExp]"]=aI["[object Set]"]=aI["[object String]"]=aI["[object WeakMap]"]=!1;let aS=function(e){return function(t){return e(t)}};var aE=function(){try{return!1}catch(e){}}(),aT=aE&&aE.isTypedArray,aO=aT?aS(aT):function(e){return iG(e)&&aN(e.length)&&!!aI[iD(e)]},aA=Object.prototype.hasOwnProperty;let aP=function(e,t){var r=a_(e),n=!r&&aw(e),i=!r&&!n&&aj(),a=!r&&!n&&!i&&aO(e),o=r||n||i||a,d=o?a$(e.length,String):[],s=d.length;for(var l in e)(t||aA.call(e,l))&&!(o&&("length"==l||i&&("offset"==l||"parent"==l)||a&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||aC(l,s)))&&d.push(l);return d};var aF=Object.prototype;let aR=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||aF)};var aL=iB(Object.keys,Object),aM=Object.prototype.hasOwnProperty;let az=function(e){if(!aR(e))return aL(e);var t=[];for(var r in Object(e))aM.call(e,r)&&"constructor"!=r&&t.push(r);return t},aD=function(e){return null!=e&&aN(e.length)&&!i0(e)},aB=function(e){return aD(e)?aP(e):az(e)},aU=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t};var aG=Object.prototype.hasOwnProperty;let aV=function(e){if(!iQ(e))return aU(e);var t=aR(e),r=[];for(var n in e)"constructor"==n&&(t||!aG.call(e,n))||r.push(n);return r},aH=function(e){return aD(e)?aP(e,!0):aV(e)},aW=function(e,t){if(t)return e.slice();var r=e.length,n=new e.constructor(r);return e.copy(n),n},aY=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t},aZ=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},aK=function(){return[]};var aq=Object.prototype.propertyIsEnumerable,aX=Object.getOwnPropertySymbols,aJ=aX?function(e){return null==e?[]:aZ(aX(e=Object(e)),function(t){return aq.call(e,t)})}:aK;let aQ=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e};var a0=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)aQ(t,aJ(e)),e=iU(e);return t}:aK;let a1=function(e,t,r){var n=t(e);return a_(e)?n:aQ(n,r(e))},a2=function(e){return a1(e,aB,aJ)},a3=function(e){return a1(e,aH,a0)};var a5=at(iT,"DataView"),a4=at(iT,"Promise"),a9=at(iT,"Set"),a8=at(iT,"WeakMap"),a7="[object Map]",a6="[object Promise]",oe="[object Set]",ot="[object WeakMap]",or="[object DataView]",on=i5(a5),oi=i5(ar),oa=i5(a4),oo=i5(a9),od=i5(a8),os=iD;(a5&&os(new a5(new ArrayBuffer(1)))!=or||ar&&os(new ar)!=a7||a4&&os(a4.resolve())!=a6||a9&&os(new a9)!=oe||a8&&os(new a8)!=ot)&&(os=function(e){var t=iD(e),r="[object Object]"==t?e.constructor:void 0,n=r?i5(r):"";if(n)switch(n){case on:return or;case oi:return a7;case oa:return a6;case oo:return oe;case od:return ot}return t});let ol=os;var oc=Object.prototype.hasOwnProperty;let ou=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&oc.call(e,"index")&&(r.index=e.index,r.input=e.input),r};var op=iT.Uint8Array;let of=function(e){var t=new e.constructor(e.byteLength);return new op(t).set(new op(e)),t},oh=function(e,t){var r=t?of(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)};var om=/\w*$/;let og=function(e){var t=new e.constructor(e.source,om.exec(e));return t.lastIndex=e.lastIndex,t};var o$=iO?iO.prototype:void 0,oy=o$?o$.valueOf:void 0;let ov=function(e,t){var r=t?of(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)},ob=function(e,t,r){var n=e.constructor;switch(t){case"[object ArrayBuffer]":return of(e);case"[object Boolean]":case"[object Date]":return new n(+e);case"[object DataView]":return oh(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ov(e,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(e);case"[object RegExp]":return og(e);case"[object Symbol]":return oy?Object(oy.call(e)):{}}};var ox=Object.create,ow=function(){function e(){}return function(t){if(!iQ(t))return{};if(ox)return ox(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),o_=aE&&aE.isMap,oj=o_?aS(o_):function(e){return iG(e)&&"[object Map]"==ol(e)},ok=aE&&aE.isSet,oC=ok?aS(ok):function(e){return iG(e)&&"[object Set]"==ol(e)},oN="[object Arguments]",oI="[object Function]",oS="[object Object]",oE={};oE[oN]=oE["[object Array]"]=oE["[object ArrayBuffer]"]=oE["[object DataView]"]=oE["[object Boolean]"]=oE["[object Date]"]=oE["[object Float32Array]"]=oE["[object Float64Array]"]=oE["[object Int8Array]"]=oE["[object Int16Array]"]=oE["[object Int32Array]"]=oE["[object Map]"]=oE["[object Number]"]=oE[oS]=oE["[object RegExp]"]=oE["[object Set]"]=oE["[object String]"]=oE["[object Symbol]"]=oE["[object Uint8Array]"]=oE["[object Uint8ClampedArray]"]=oE["[object Uint16Array]"]=oE["[object Uint32Array]"]=!0,oE["[object Error]"]=oE[oI]=oE["[object WeakMap]"]=!1;let oT=function e(t,r,n,i,a,o){var d,s=1&r,l=2&r,c=4&r;if(n&&(d=a?n(t,i,a,o):n(t)),void 0!==d)return d;if(!iQ(t))return t;var u=a_(t);if(u){if(d=ou(t),!s)return aY(t,d)}else{var p,f,h,m,g,$=ol(t),y=$==oI||"[object GeneratorFunction]"==$;if(aj())return aW(t,s);if($==oS||$==oN||y&&!a){if(d=l||y||"function"!=typeof(p=t).constructor||aR(p)?{}:ow(iU(p)),!s)return l?(h=(f=d)&&ag(t,aH(t),f),ag(t,a0(t),h)):(g=(m=d)&&ag(t,aB(t),m),ag(t,aJ(t),g))}else{if(!oE[$])return a?t:{};d=ob(t,$,s)}}o||(o=new ac);var v=o.get(t);if(v)return v;o.set(t,d),oC(t)?t.forEach(function(i){d.add(e(i,r,n,i,t,o))}):oj(t)&&t.forEach(function(i,a){d.set(a,e(i,r,n,a,t,o))});var b=c?l?a3:a2:l?aH:aB,x=u?void 0:b(t);return au(x||t,function(i,a){x&&(i=t[a=i]),am(d,a,e(i,r,n,a,t,o))}),d},oO=function(e){return oT(e,5)};var oA=e.i(32892);let oP=function(e,t){},oF=function(e){return oT(e,4)},oR=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},oL=function(e){return"symbol"==typeof e||iG(e)&&"[object Symbol]"==iD(e)};function oM(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(oM.Cache||al),r}oM.Cache=al;var oz=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oD=/\\(\\)?/g,oB=(o=(a=oM(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(oz,function(e,r,n,i){t.push(n?i.replace(oD,"$1"):r||e)}),t},function(e){return 500===o.size&&o.clear(),e})).cache,a),oU=1/0;let oG=function(e){if("string"==typeof e||oL(e))return e;var t=e+"";return"0"==t&&1/e==-oU?"-0":t};var oV=1/0,oH=iO?iO.prototype:void 0,oW=oH?oH.toString:void 0;let oY=function e(t){if("string"==typeof t)return t;if(a_(t))return oR(t,e)+"";if(oL(t))return oW?oW.call(t):"";var r=t+"";return"0"==r&&1/t==-oV?"-0":r},oZ=function(e){return a_(e)?oR(e,oG):oL(e)?[e]:aY(oB(null==e?"":oY(e)))};var oK=e.i(98437);function oq(){return(oq=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function oX(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function oJ(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}function oQ(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var o0=(0,g.createContext)(void 0);o0.displayName="FormikContext";var o1=o0.Provider,o2=o0.Consumer;function o3(){var e=(0,g.useContext)(o0);return e||oP(!1),e}var o5=function(e){return Array.isArray(e)&&0===e.length},o4=function(e){return"function"==typeof e},o9=function(e){return null!==e&&"object"==typeof e},o8=function(e){return"[object String]"===Object.prototype.toString.call(e)},o7=function(e){return 0===g.Children.count(e)},o6=function(e){return o9(e)&&o4(e.then)};function de(e,t,r,n){void 0===n&&(n=0);for(var i=oZ(t);e&&n<i.length;)e=e[i[n++]];return n===i.length||e?void 0===e?r:e:r}function dt(e,t,r){for(var n=oF(e),i=n,a=0,o=oZ(t);a<o.length-1;a++){var d=o[a],s=de(e,o.slice(0,a+1));if(s&&(o9(s)||Array.isArray(s)))i=i[d]=oF(s);else{var l=o[a+1];i=i[d]=String(Math.floor(Number(l)))===l&&Number(l)>=0?[]:{}}}return(0===a?e:i)[o[a]]===r?e:(void 0===r?delete i[o[a]]:i[o[a]]=r,0===a&&void 0===r&&delete n[o[a]],n)}var dr={},dn={};function di(e){var t,r,n,i,a,o,d,s,l,c,u,p,f,h,m,$,y,v,b,x,w,_,j,k,C,N,I,S,E,T,O,A,P,F,R,L,M,z,D,B,U,G,V,H,W,Y,Z,K,q,X,J,Q,ee,et,er,en=(r=void 0===(t=e.validateOnChange)||t,i=void 0===(n=e.validateOnBlur)||n,o=void 0!==(a=e.validateOnMount)&&a,d=e.isInitialValid,l=void 0!==(s=e.enableReinitialize)&&s,c=e.onSubmit,u=oJ(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=oq({validateOnChange:r,validateOnBlur:i,validateOnMount:o,onSubmit:c},u),f=(0,g.useRef)(p.initialValues),h=(0,g.useRef)(p.initialErrors||dr),m=(0,g.useRef)(p.initialTouched||dn),$=(0,g.useRef)(p.initialStatus),y=(0,g.useRef)(!1),v=(0,g.useRef)({}),(0,g.useEffect)(function(){return y.current=!0,function(){y.current=!1}},[]),b=(0,g.useState)(0)[1],w=(x=(0,g.useRef)({values:oO(p.initialValues),errors:oO(p.initialErrors)||dr,touched:oO(p.initialTouched)||dn,status:oO(p.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0})).current,_=(0,g.useCallback)(function(e){var t=x.current;x.current=function(e,t){switch(t.type){case"SET_VALUES":return oq({},e,{values:t.payload});case"SET_TOUCHED":return oq({},e,{touched:t.payload});case"SET_ERRORS":if((0,oA.default)(e.errors,t.payload))return e;return oq({},e,{errors:t.payload});case"SET_STATUS":return oq({},e,{status:t.payload});case"SET_ISSUBMITTING":return oq({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return oq({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return oq({},e,{values:dt(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return oq({},e,{touched:dt(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return oq({},e,{errors:dt(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return oq({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return oq({},e,{touched:function e(t,r,n,i){void 0===n&&(n=new WeakMap),void 0===i&&(i={});for(var a=0,o=Object.keys(t);a<o.length;a++){var d=o[a],s=t[d];o9(s)?n.get(s)||(n.set(s,!0),i[d]=Array.isArray(s)?[]:{},e(s,r,n,i[d])):i[d]=r}return i}(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return oq({},e,{isSubmitting:!1});default:return e}}(t,e),t!==x.current&&b(function(e){return e+1})},[]),j=(0,g.useCallback)(function(e,t){return new Promise(function(r,n){var i=p.validate(e,t);null==i?r(dr):o6(i)?i.then(function(e){r(e||dr)},function(e){n(e)}):r(i)})},[p.validate]),k=(0,g.useCallback)(function(e,t){var r,n,i,a,o=p.validationSchema,d=o4(o)?o(t):o,s=t&&d.validateAt?d.validateAt(t,e):(r=e,n=d,void 0===i&&(i=!1),a=function e(t){var r=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=String(n);!0===Array.isArray(t[i])?r[i]=t[i].map(function(t){return!0===Array.isArray(t)||iZ(t)?e(t):""!==t?t:void 0}):iZ(t[i])?r[i]=e(t[i]):r[i]=""!==t[i]?t[i]:void 0}return r}(r),n[i?"validateSync":"validate"](a,{abortEarly:!1,context:a}));return new Promise(function(e,t){s.then(function(){e(dr)},function(r){"ValidationError"===r.name?e(function(e){var t={};if(e.inner){if(0===e.inner.length)return dt(t,e.path,e.message);for(var r=e.inner,n=Array.isArray(r),i=0,r=n?r:r[Symbol.iterator]();;){if(n){if(i>=r.length)break;a=r[i++]}else{if((i=r.next()).done)break;a=i.value}var a,o=a;de(t,o.path)||(t=dt(t,o.path,o.message))}}return t}(r)):t(r)})})},[p.validationSchema]),C=(0,g.useCallback)(function(e,t){return new Promise(function(r){return r(v.current[e].validate(t))})},[]),N=(0,g.useCallback)(function(e){var t=Object.keys(v.current).filter(function(e){return o4(v.current[e].validate)});return Promise.all(t.length>0?t.map(function(t){return C(t,de(e,t))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(e){return e.reduce(function(e,r,n){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===r||r&&(e=dt(e,t[n],r)),e},{})})},[C]),I=(0,g.useCallback)(function(e){return Promise.all([N(e),p.validationSchema?k(e):{},p.validate?j(e):{}]).then(function(e){var t=e[0],r=e[1],n=e[2];return iI.all([t,r,n],{arrayMerge:da})})},[p.validate,p.validationSchema,N,j,k]),S=ds(function(e){return void 0===e&&(e=w.values),_({type:"SET_ISVALIDATING",payload:!0}),I(e).then(function(e){return y.current&&(_({type:"SET_ISVALIDATING",payload:!1}),_({type:"SET_ERRORS",payload:e})),e})}),(0,g.useEffect)(function(){o&&!0===y.current&&(0,oA.default)(f.current,p.initialValues)&&S(f.current)},[o,S]),E=(0,g.useCallback)(function(e){var t=e&&e.values?e.values:f.current,r=e&&e.errors?e.errors:h.current?h.current:p.initialErrors||{},n=e&&e.touched?e.touched:m.current?m.current:p.initialTouched||{},i=e&&e.status?e.status:$.current?$.current:p.initialStatus;f.current=t,h.current=r,m.current=n,$.current=i;var a=function(){_({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:r,touched:n,status:i,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"==typeof e.submitCount?e.submitCount:0}})};if(p.onReset){var o=p.onReset(w.values,K);o6(o)?o.then(a):a()}else a()},[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]),(0,g.useEffect)(function(){!0===y.current&&!(0,oA.default)(f.current,p.initialValues)&&l&&(f.current=p.initialValues,E(),o&&S(f.current))},[l,p.initialValues,E,o,S]),(0,g.useEffect)(function(){l&&!0===y.current&&!(0,oA.default)(h.current,p.initialErrors)&&(h.current=p.initialErrors||dr,_({type:"SET_ERRORS",payload:p.initialErrors||dr}))},[l,p.initialErrors]),(0,g.useEffect)(function(){l&&!0===y.current&&!(0,oA.default)(m.current,p.initialTouched)&&(m.current=p.initialTouched||dn,_({type:"SET_TOUCHED",payload:p.initialTouched||dn}))},[l,p.initialTouched]),(0,g.useEffect)(function(){l&&!0===y.current&&!(0,oA.default)($.current,p.initialStatus)&&($.current=p.initialStatus,_({type:"SET_STATUS",payload:p.initialStatus}))},[l,p.initialStatus,p.initialTouched]),T=ds(function(e){if(v.current[e]&&o4(v.current[e].validate)){var t=de(w.values,e),r=v.current[e].validate(t);return o6(r)?(_({type:"SET_ISVALIDATING",payload:!0}),r.then(function(e){return e}).then(function(t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),_({type:"SET_ISVALIDATING",payload:!1})})):(_({type:"SET_FIELD_ERROR",payload:{field:e,value:r}}),Promise.resolve(r))}return p.validationSchema?(_({type:"SET_ISVALIDATING",payload:!0}),k(w.values,e).then(function(e){return e}).then(function(t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:de(t,e)}}),_({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),O=(0,g.useCallback)(function(e,t){var r=t.validate;v.current[e]={validate:r}},[]),A=(0,g.useCallback)(function(e){delete v.current[e]},[]),P=ds(function(e,t){return _({type:"SET_TOUCHED",payload:e}),(void 0===t?i:t)?S(w.values):Promise.resolve()}),F=(0,g.useCallback)(function(e){_({type:"SET_ERRORS",payload:e})},[]),R=ds(function(e,t){var n=o4(e)?e(w.values):e;return _({type:"SET_VALUES",payload:n}),(void 0===t?r:t)?S(n):Promise.resolve()}),L=(0,g.useCallback)(function(e,t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})},[]),M=ds(function(e,t,n){var i=o4(t)?t(de(w.values,e)):t;return _({type:"SET_FIELD_VALUE",payload:{field:e,value:i}}),(void 0===n?r:n)?S(dt(w.values,e,i)):Promise.resolve()}),z=(0,g.useCallback)(function(e,t){var r,n=t,i=e;if(!o8(e)){e.persist&&e.persist();var a=e.target?e.target:e.currentTarget,o=a.type,d=a.name,s=a.id,l=a.value,c=a.checked,u=(a.outerHTML,a.options),p=a.multiple;n=t||d||s,i=/number|range/.test(o)?isNaN(r=parseFloat(l))?"":r:/checkbox/.test(o)?function(e,t,r){if("boolean"==typeof e)return!!t;var n=[],i=!1,a=-1;if(Array.isArray(e))n=e,i=(a=e.indexOf(r))>=0;else if(!r||"true"==r||"false"==r)return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,a).concat(n.slice(a+1)):n}(de(w.values,n),c,l):u&&p?Array.from(u).filter(function(e){return e.selected}).map(function(e){return e.value}):l}n&&M(n,i)},[M,w.values]),D=ds(function(e){if(o8(e))return function(t){return z(t,e)};z(e)}),B=ds(function(e,t,r){return void 0===t&&(t=!0),_({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===r?i:r)?S(w.values):Promise.resolve()}),U=(0,g.useCallback)(function(e,t){e.persist&&e.persist();var r=e.target,n=r.name,i=r.id;r.outerHTML,B(t||n||i,!0)},[B]),G=ds(function(e){if(o8(e))return function(t){return U(t,e)};U(e)}),V=(0,g.useCallback)(function(e){o4(e)?_({type:"SET_FORMIK_STATE",payload:e}):_({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),H=(0,g.useCallback)(function(e){_({type:"SET_STATUS",payload:e})},[]),W=(0,g.useCallback)(function(e){_({type:"SET_ISSUBMITTING",payload:e})},[]),Y=ds(function(){return _({type:"SUBMIT_ATTEMPT"}),S().then(function(e){var t,r=e instanceof Error;if(!r&&0===Object.keys(e).length){try{if(t=q(),void 0===t)return}catch(e){throw e}return Promise.resolve(t).then(function(e){return y.current&&_({type:"SUBMIT_SUCCESS"}),e}).catch(function(e){if(y.current)throw _({type:"SUBMIT_FAILURE"}),e})}if(y.current&&(_({type:"SUBMIT_FAILURE"}),r))throw e})}),Z=ds(function(e){e&&e.preventDefault&&o4(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&o4(e.stopPropagation)&&e.stopPropagation(),Y().catch(function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)})}),K={resetForm:E,validateForm:S,validateField:T,setErrors:F,setFieldError:L,setFieldTouched:B,setFieldValue:M,setStatus:H,setSubmitting:W,setTouched:P,setValues:R,setFormikState:V,submitForm:Y},q=ds(function(){return c(w.values,K)}),X=ds(function(e){e&&e.preventDefault&&o4(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&o4(e.stopPropagation)&&e.stopPropagation(),E()}),J=(0,g.useCallback)(function(e){return{value:de(w.values,e),error:de(w.errors,e),touched:!!de(w.touched,e),initialValue:de(f.current,e),initialTouched:!!de(m.current,e),initialError:de(h.current,e)}},[w.errors,w.touched,w.values]),Q=(0,g.useCallback)(function(e){return{setValue:function(t,r){return M(e,t,r)},setTouched:function(t,r){return B(e,t,r)},setError:function(t){return L(e,t)}}},[M,B,L]),ee=(0,g.useCallback)(function(e){var t=o9(e),r=t?e.name:e,n=de(w.values,r),i={name:r,value:n,onChange:D,onBlur:G};if(t){var a=e.type,o=e.value,d=e.as,s=e.multiple;"checkbox"===a?void 0===o?i.checked=!!n:(i.checked=!!(Array.isArray(n)&&~n.indexOf(o)),i.value=o):"radio"===a?(i.checked=n===o,i.value=o):"select"===d&&s&&(i.value=i.value||[],i.multiple=!0)}return i},[G,D,w.values]),et=(0,g.useMemo)(function(){return!(0,oA.default)(f.current,w.values)},[f.current,w.values]),er=(0,g.useMemo)(function(){return void 0!==d?et?w.errors&&0===Object.keys(w.errors).length:!1!==d&&o4(d)?d(p):d:w.errors&&0===Object.keys(w.errors).length},[d,et,w.errors,p]),oq({},w,{initialValues:f.current,initialErrors:h.current,initialTouched:m.current,initialStatus:$.current,handleBlur:G,handleChange:D,handleReset:X,handleSubmit:Z,resetForm:E,setErrors:F,setFormikState:V,setFieldTouched:B,setFieldValue:M,setFieldError:L,setStatus:H,setSubmitting:W,setTouched:P,setValues:R,submitForm:Y,validateForm:S,validateField:T,isValid:er,dirty:et,unregisterField:A,registerField:O,getFieldProps:ee,getFieldMeta:J,getFieldHelpers:Q,validateOnBlur:i,validateOnChange:r,validateOnMount:o})),ei=e.component,ea=e.children,eo=e.render,ed=e.innerRef;return(0,g.useImperativeHandle)(ed,function(){return en}),(0,g.createElement)(o1,{value:en},ei?(0,g.createElement)(ei,en):eo?eo(en):ea?o4(ea)?ea(en):o7(ea)?null:g.Children.only(ea):null)}function da(e,t,r){var n=e.slice();return t.forEach(function(t,i){if(void 0===n[i]){var a=!1!==r.clone&&r.isMergeableObject(t);n[i]=a?iI(Array.isArray(t)?[]:{},t,r):t}else r.isMergeableObject(t)?n[i]=iI(e[i],t,r):-1===e.indexOf(t)&&n.push(t)}),n}var dd="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement?g.useLayoutEffect:g.useEffect;function ds(e){var t=(0,g.useRef)(e);return dd(function(){t.current=e}),(0,g.useCallback)(function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current.apply(void 0,r)},[])}function dl(e){var t=e.validate,r=e.name,n=e.render,i=e.children,a=e.as,o=e.component,d=e.className,s=oJ(e,["validate","name","render","children","as","component","className"]),l=oJ(o3(),["validate","validationSchema"]),c=l.registerField,u=l.unregisterField;(0,g.useEffect)(function(){return c(r,{validate:t}),function(){u(r)}},[c,u,r,t]);var p=l.getFieldProps(oq({name:r},s)),f=l.getFieldMeta(r),h={field:p,form:l};if(n)return n(oq({},h,{meta:f}));if(o4(i))return i(oq({},h,{meta:f}));if(o){if("string"==typeof o){var m=s.innerRef,$=oJ(s,["innerRef"]);return(0,g.createElement)(o,oq({ref:m},p,$,{className:d}),i)}return(0,g.createElement)(o,oq({field:p,form:l},s,{className:d}),i)}var y=a||"input";if("string"==typeof y){var v=s.innerRef,b=oJ(s,["innerRef"]);return(0,g.createElement)(y,oq({ref:v},p,b,{className:d}),i)}return(0,g.createElement)(y,oq({},p,s,{className:d}),i)}var dc=(0,g.forwardRef)(function(e,t){var r=e.action,n=oJ(e,["action"]),i=o3(),a=i.handleReset,o=i.handleSubmit;return(0,g.createElement)("form",oq({onSubmit:o,ref:t,onReset:a,action:null!=r?r:"#"},n))});dc.displayName="Form";var du=function(e,t,r){var n=dm(e),i=n[t];return n.splice(t,1),n.splice(r,0,i),n},dp=function(e,t,r){var n=dm(e),i=n[t];return n[t]=n[r],n[r]=i,n},df=function(e,t,r){var n=dm(e);return n.splice(t,0,r),n},dh=function(e,t,r){var n=dm(e);return n[t]=r,n},dm=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(oq({},e,{length:t+1}))},dg=function(e,t){var r="function"==typeof e?e:t;return function(e){return Array.isArray(e)||o9(e)?r(dm(e)):e}};(function(e){function t(t){var r;return(r=e.call(this,t)||this).updateArrayField=function(e,t,n){var i=r.props,a=i.name;(0,i.formik.setFormikState)(function(r){var i=dg(n,e),o=dg(t,e),d=dt(r.values,a,e(de(r.values,a))),s=n?i(de(r.errors,a)):void 0,l=t?o(de(r.touched,a)):void 0;return o5(s)&&(s=void 0),o5(l)&&(l=void 0),oq({},r,{values:d,errors:n?dt(r.errors,a,s):r.errors,touched:t?dt(r.touched,a,l):r.touched})})},r.push=function(e){return r.updateArrayField(function(t){return[].concat(dm(t),[oO(e)])},!1,!1)},r.handlePush=function(e){return function(){return r.push(e)}},r.swap=function(e,t){return r.updateArrayField(function(r){return dp(r,e,t)},!0,!0)},r.handleSwap=function(e,t){return function(){return r.swap(e,t)}},r.move=function(e,t){return r.updateArrayField(function(r){return du(r,e,t)},!0,!0)},r.handleMove=function(e,t){return function(){return r.move(e,t)}},r.insert=function(e,t){return r.updateArrayField(function(r){return df(r,e,t)},function(t){return df(t,e,null)},function(t){return df(t,e,null)})},r.handleInsert=function(e,t){return function(){return r.insert(e,t)}},r.replace=function(e,t){return r.updateArrayField(function(r){return dh(r,e,t)},!1,!1)},r.handleReplace=function(e,t){return function(){return r.replace(e,t)}},r.unshift=function(e){var t=-1;return r.updateArrayField(function(r){var n=r?[e].concat(r):[e];return t=n.length,n},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},r.handleUnshift=function(e){return function(){return r.unshift(e)}},r.handleRemove=function(e){return function(){return r.remove(e)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(oQ(r)),r.pop=r.pop.bind(oQ(r)),r}oX(t,e);var r=t.prototype;return r.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,oA.default)(de(e.formik.values,e.name),de(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(e){var t;return this.updateArrayField(function(r){var n=r?dm(r):[];return t||(t=n[e]),o4(n.splice)&&n.splice(e,1),o4(n.every)&&n.every(function(e){return void 0===e})?[]:n},!0,!0),t},r.pop=function(){var e;return this.updateArrayField(function(t){var r=t.slice();return e||(e=r&&r.pop&&r.pop()),r},!0,!0),e},r.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,r=t.component,n=t.render,i=t.children,a=t.name,o=oJ(t.formik,["validate","validationSchema"]),d=oq({},e,{form:o,name:a});return r?(0,g.createElement)(r,d):n?n(d):i?"function"==typeof i?i(d):o7(i)?null:g.Children.only(i):null},t})(g.Component).defaultProps={validateOnChange:!0};var d$=(d=function(e){function t(){return e.apply(this,arguments)||this}oX(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return de(this.props.formik.errors,this.props.name)!==de(e.formik.errors,this.props.name)||de(this.props.formik.touched,this.props.name)!==de(e.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(e).length},r.render=function(){var e=this.props,t=e.component,r=e.formik,n=e.render,i=e.children,a=e.name,o=oJ(e,["component","formik","render","children","name"]),d=de(r.touched,a),s=de(r.errors,a);return d&&s?n?o4(n)?n(s):null:i?o4(i)?i(s):null:t?(0,g.createElement)(t,o,s):s:null},t}(g.Component),s=function(e){return(0,g.createElement)(o2,null,function(t){return t||oP(!1),(0,g.createElement)(d,oq({},e,{formik:t}))})},l=d.displayName||d.name||d.constructor&&d.constructor.name||"Component",s.WrappedComponent=d,s.displayName="FormikConnect("+l+")",(0,oK.default)(s,d));g.Component;var dy=e.i(29936),dv=e.i(3873),db=e.i(1439);let dx=Object.prototype.toString,dw=Error.prototype.toString,d_=RegExp.prototype.toString,dj="u">typeof Symbol?Symbol.prototype.toString:()=>"",dk=/^Symbol\((.*)\)(.*)$/;function dC(e,t=!1){if(null==e||!0===e||!1===e)return""+e;let r=typeof e;if("number"===r)return e!=+e?"NaN":0===e&&1/e<0?"-0":""+e;if("string"===r)return t?`"${e}"`:e;if("function"===r)return"[Function "+(e.name||"anonymous")+"]";if("symbol"===r)return dj.call(e).replace(dk,"Symbol($1)");let n=dx.call(e).slice(8,-1);return"Date"===n?isNaN(e.getTime())?""+e:e.toISOString(e):"Error"===n||e instanceof Error?"["+dw.call(e)+"]":"RegExp"===n?d_.call(e):null}function dN(e,t){let r=dC(e,t);return null!==r?r:JSON.stringify(e,function(e,r){let n=dC(this[e],t);return null!==n?n:r},2)}function dI(e){return null==e?[]:[].concat(e)}let dS=/\$\{\s*(\w+)\s*\}/g;t=Symbol.toStringTag;class dE{constructor(e,r,n,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[t]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=i,this.errors=[],this.inner=[],dI(e).forEach(e=>{if(dT.isError(e)){this.errors.push(...e.errors);let t=e.inner.length?e.inner:[e];this.inner.push(...t)}else this.errors.push(e)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}r=Symbol.hasInstance,n=Symbol.toStringTag;class dT extends Error{static formatError(e,t){let r=t.label||t.path||"this";return(t=Object.assign({},t,{path:r,originalPath:t.path}),"string"==typeof e)?e.replace(dS,(e,r)=>dN(t[r])):"function"==typeof e?e(t):e}static isError(e){return e&&"ValidationError"===e.name}constructor(e,t,r,i,a){const o=new dE(e,t,r,i);if(a)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[n]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,dT)}static[r](e){return dE[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let dO={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:n})=>{let i=null!=n&&n!==r?` (cast from the value \`${dN(n,!0)}\`).`:".";return"mixed"!==t?`${e} must be a \`${t}\` type, but the final value was: \`${dN(r,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${dN(r,!0)}\``+i}},dA={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},dP={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},dF={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},dR={isValue:"${path} field must be ${value}"},dL={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},dM={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},dz={notType:e=>{let{path:t,value:r,spec:n}=e,i=n.types.length;if(Array.isArray(r)){if(r.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${dN(r,!0)}\``;if(r.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${dN(r,!0)}\``}return dT.formatError(dO.notType,e)}};Object.assign(Object.create(null),{mixed:dO,string:dA,number:dP,date:dF,object:dL,array:dM,boolean:dR,tuple:dz});let dD=e=>e&&e.__isYupSchema__;class dB{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:n,otherwise:i}=t,a="function"==typeof r?r:(...e)=>e.every(e=>e===r);return new dB(e,(e,t)=>{var r;let o=a(...e)?n:i;return null!=(r=null==o?void 0:o(t))?r:t})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let r=this.refs.map(e=>e.getValue(null==t?void 0:t.value,null==t?void 0:t.parent,null==t?void 0:t.context)),n=this.fn(r,e,t);if(void 0===n||n===e)return e;if(!dD(n))throw TypeError("conditions must return a schema object");return n.resolve(t)}}class dU{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,"string"!=typeof e)throw TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),""===e)throw TypeError("ref must be a non-empty string");this.isContext="$"===this.key[0],this.isValue="."===this.key[0],this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?"$":this.isValue?".":"";this.path=this.key.slice(r.length),this.getter=this.path&&(0,dy.getter)(this.path,!0),this.map=t.map}getValue(e,t,r){let n=this.isContext?r:this.isValue?e:t;return this.getter&&(n=this.getter(n||{})),this.map&&(n=this.map(n)),n}cast(e,t){return this.getValue(e,null==t?void 0:t.parent,null==t?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}function dG(e){function t({value:r,path:n="",options:i,originalValue:a,schema:o},d,s){let l,{name:c,test:u,params:p,message:f,skipAbsent:h}=e,{parent:m,context:g,abortEarly:$=o.spec.abortEarly,disableStackTrace:y=o.spec.disableStackTrace}=i,v={value:r,parent:m,context:g};function b(e={}){let t=dV(Object.assign({value:r,originalValue:a,label:o.spec.label,path:e.path||n,spec:o.spec,disableStackTrace:e.disableStackTrace||y},p,e.params),v),i=new dT(dT.formatError(e.message||f,t),r,t.path,e.type||c,t.disableStackTrace);return i.params=t,i}let x=$?d:s,w={path:n,parent:m,type:c,from:i.from,createError:b,resolve:e=>dH(e,v),options:i,originalValue:a,schema:o},_=e=>{dT.isError(e)?x(e):e?s(null):x(b())},j=e=>{dT.isError(e)?x(e):d(e)};if(h&&null==r)return _(!0);try{var k;if(l=u.call(w,r,w),"function"==typeof(null==(k=l)?void 0:k.then)){if(i.sync)throw Error(`Validation test of type: "${w.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(l).then(_,j)}}catch(e){j(e);return}_(l)}return t.OPTIONS=e,t}function dV(e,t){if(!e)return e;for(let r of Object.keys(e))e[r]=dH(e[r],t);return e}function dH(e,t){return dU.isRef(e)?e.getValue(t.value,t.parent,t.context):e}dU.prototype.__isYupRef=!0;class dW extends Set{describe(){let e=[];for(let t of this.values())e.push(dU.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(let r of this.values())t.push(e(r));return t}clone(){return new dW(this.values())}merge(e,t){let r=this.clone();return e.forEach(e=>r.add(e)),t.forEach(e=>r.delete(e)),r}}function dY(e,t=new Map){let r;if(dD(e)||!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=Array(e.length),t.set(e,r);for(let n=0;n<e.length;n++)r[n]=dY(e[n],t)}else if(e instanceof Map)for(let[n,i]of(r=new Map,t.set(e,r),e.entries()))r.set(n,dY(i,t));else if(e instanceof Set)for(let n of(r=new Set,t.set(e,r),e))r.add(dY(n,t));else if(e instanceof Object)for(let[n,i]of(r={},t.set(e,r),Object.entries(e)))r[n]=dY(i,t);else throw Error(`Unable to clone ${e}`);return r}function dZ(e,t){var r;if(!(null!=(r=e.inner)&&r.length)&&e.errors.length){let r;return r=t?`${t}.${e.path}`:e.path,e.errors.map(e=>({message:e,path:function(e){if(!(null!=e&&e.length))return;let t=[],r="",n=!1,i=!1;for(let a=0;a<e.length;a++){let o=e[a];if("["===o&&!i){r&&(t.push(...r.split(".").filter(Boolean)),r=""),n=!0;continue}if("]"===o&&!i){r&&(/^\d+$/.test(r)?t.push(r):t.push(r.replace(/^"|"$/g,"")),r=""),n=!1;continue}if('"'===o){i=!i;continue}if("."===o&&!n&&!i){r&&(t.push(r),r="");continue}r+=o}return r&&t.push(...r.split(".").filter(Boolean)),t}(r)}))}let n=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(e=>dZ(e,n))}class dK{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new dW,this._blacklist=new dW,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(dO.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},null==e?void 0:e.spec),this.withMutation(e=>{e.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;let t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=dY(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(0===e.length)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=t,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&"mixed"!==this.type)throw TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=e.clone(),r=Object.assign({},this.spec,t.spec);return t.spec=r,t.internalTests=Object.assign({},this.internalTests,t.internalTests),t._whitelist=this._whitelist.merge(e._whitelist,e._blacklist),t._blacklist=this._blacklist.merge(e._blacklist,e._whitelist),t.tests=this.tests,t.exclusiveTests=this.exclusiveTests,t.withMutation(t=>{e.tests.forEach(e=>{t.test(e.OPTIONS)})}),t.transforms=[...this.transforms,...t.transforms],t}isType(e){return null==e?!!this.spec.nullable&&null===e||!!this.spec.optional&&void 0===e:this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let r=t.conditions;(t=t.clone()).conditions=[],t=(t=r.reduce((t,r)=>r.resolve(t,e),t)).resolve(e)}return t}resolveOptions(e){var t,r,n,i;return Object.assign({},e,{from:e.from||[],strict:null!=(t=e.strict)?t:this.spec.strict,abortEarly:null!=(r=e.abortEarly)?r:this.spec.abortEarly,recursive:null!=(n=e.recursive)?n:this.spec.recursive,disableStackTrace:null!=(i=e.disableStackTrace)?i:this.spec.disableStackTrace})}cast(e,t={}){let r=this.resolve(Object.assign({},t,{value:e})),n="ignore-optionality"===t.assert,i=r._cast(e,t);if(!1!==t.assert&&!r.isType(i)){if(n&&null==i)return i;let a=dN(e),o=dN(i);throw TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(o!==a?`result of cast: ${o}`:""))}return i}_cast(e,t){let r=void 0===e?e:this.transforms.reduce((r,n)=>n.call(this,r,e,this,t),e);return void 0===r&&(r=this.getDefault(t)),r}_validate(e,t={},r,n){let{path:i,originalValue:a=e,strict:o=this.spec.strict}=t,d=e;o||(d=this._cast(d,Object.assign({assert:!1},t)));let s=[];for(let e of Object.values(this.internalTests))e&&s.push(e);this.runTests({path:i,value:d,originalValue:a,options:t,tests:s},r,e=>{if(e.length)return n(e,d);this.runTests({path:i,value:d,originalValue:a,options:t,tests:this.tests},r,n)})}runTests(e,t,r){let n=!1,{tests:i,value:a,originalValue:o,path:d,options:s}=e,l=e=>{n||(n=!0,t(e,a))},c=e=>{n||(n=!0,r(e,a))},u=i.length,p=[];if(!u)return c([]);let f={value:a,originalValue:o,path:d,options:s,schema:this};for(let e=0;e<i.length;e++)(0,i[e])(f,l,function(e){e&&(Array.isArray(e)?p.push(...e):p.push(e)),--u<=0&&c(p)})}asNestedTest({key:e,index:t,parent:r,parentPath:n,originalParent:i,options:a}){let o=null!=e?e:t;if(null==o)throw TypeError("Must include `key` or `index` for nested validations");let d="number"==typeof o,s=r[o],l=Object.assign({},a,{strict:!0,parent:r,value:s,originalValue:i[o],key:void 0,[d?"index":"key"]:o,path:d||o.includes(".")?`${n||""}[${d?o:`"${o}"`}]`:(n?`${n}.`:"")+e});return(e,t,r)=>this.resolve(l)._validate(s,l,t,r)}validate(e,t){var r;let n=this.resolve(Object.assign({},t,{value:e})),i=null!=(r=null==t?void 0:t.disableStackTrace)?r:n.spec.disableStackTrace;return new Promise((r,a)=>n._validate(e,t,(e,t)=>{dT.isError(e)&&(e.value=t),a(e)},(e,t)=>{e.length?a(new dT(e,t,void 0,void 0,i)):r(t)}))}validateSync(e,t){var r;let n,i=this.resolve(Object.assign({},t,{value:e})),a=null!=(r=null==t?void 0:t.disableStackTrace)?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},t,{sync:!0}),(e,t)=>{throw dT.isError(e)&&(e.value=t),e},(t,r)=>{if(t.length)throw new dT(t,e,void 0,void 0,a);n=r}),n}isValid(e,t){return this.validate(e,t).then(()=>!0,e=>{if(dT.isError(e))return!1;throw e})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(e){if(dT.isError(e))return!1;throw e}}_getDefault(e){let t=this.spec.default;return null==t?t:"function"==typeof t?t.call(this,e):dY(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return 0==arguments.length?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){let r=this.clone({nullable:e});return r.internalTests.nullable=dG({message:t,name:"nullable",test(e){return null!==e||this.schema.spec.nullable}}),r}optionality(e,t){let r=this.clone({optional:e});return r.internalTests.optionality=dG({message:t,name:"optionality",test(e){return void 0!==e||this.schema.spec.optional}}),r}optional(){return this.optionality(!0)}defined(e=dO.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=dO.notNull){return this.nullability(!1,e)}required(e=dO.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(void 0===(t=1===e.length?"function"==typeof e[0]?{test:e[0]}:e[0]:2===e.length?{name:e[0],test:e[1]}:{name:e[0],message:e[1],test:e[2]}).message&&(t.message=dO.default),"function"!=typeof t.test)throw TypeError("`test` is a required parameters");let r=this.clone(),n=dG(t),i=t.exclusive||t.name&&!0===r.exclusiveTests[t.name];if(t.exclusive&&!t.name)throw TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(r.exclusiveTests[t.name]=!!t.exclusive),r.tests=r.tests.filter(e=>(e.OPTIONS.name!==t.name||!i&&e.OPTIONS.test!==n.OPTIONS.test)&&!0),r.tests.push(n),r}when(e,t){Array.isArray(e)||"string"==typeof e||(t=e,e=".");let r=this.clone(),n=dI(e).map(e=>new dU(e));return n.forEach(e=>{e.isSibling&&r.deps.push(e.key)}),r.conditions.push("function"==typeof t?new dB(n,t):dB.fromOptions(n,t)),r}typeError(e){let t=this.clone();return t.internalTests.typeError=dG({message:e,name:"typeError",skipAbsent:!0,test(e){return!!this.schema._typeCheck(e)||this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=dO.oneOf){let r=this.clone();return e.forEach(e=>{r._whitelist.add(e),r._blacklist.delete(e)}),r.internalTests.whiteList=dG({message:t,name:"oneOf",skipAbsent:!0,test(e){let t=this.schema._whitelist,r=t.resolveAll(this.resolve);return!!r.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:r}})}}),r}notOneOf(e,t=dO.notOneOf){let r=this.clone();return e.forEach(e=>{r._blacklist.add(e),r._whitelist.delete(e)}),r.internalTests.blacklist=dG({message:t,name:"notOneOf",test(e){let t=this.schema._blacklist,r=t.resolveAll(this.resolve);return!r.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:r}})}}),r}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){let t=(e?this.resolve(e):this).clone(),{label:r,meta:n,optional:i,nullable:a}=t.spec;return{meta:n,label:r,optional:i,nullable:a,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.filter((e,t,r)=>r.findIndex(t=>t.OPTIONS.name===e.OPTIONS.name)===t).map(t=>{let r=t.OPTIONS.params&&e?dV(Object.assign({},t.OPTIONS.params),e):t.OPTIONS.params;return{name:t.OPTIONS.name,params:r}})}}get"~standard"(){let e=this;return{version:1,vendor:"yup",async validate(t){try{return{value:await e.validate(t,{abortEarly:!1})}}catch(e){if(e instanceof dT)return{issues:dZ(e)};throw e}}}}}for(let e of(dK.prototype.__isYupSchema__=!0,["validate","validateSync"]))dK.prototype[`${e}At`]=function(t,r,n={}){let{parent:i,parentPath:a,schema:o}=function(e,t,r,n=r){let i,a,o;return t?((0,dy.forEach)(t,(d,s,l)=>{let c=s?d.slice(1,d.length-1):d,u="tuple"===(e=e.resolve({context:n,parent:i,value:r})).type,p=l?parseInt(c,10):0;if(e.innerType||u){if(u&&!l)throw Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(r&&p>=r.length)throw Error(`Yup.reach cannot resolve an array item at index: ${d}, in the path: ${t}. because there is no value at that index. `);i=r,r=r&&r[p],e=u?e.spec.types[p]:e.innerType}if(!l){if(!e.fields||!e.fields[c])throw Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);i=r,r=r&&r[c],e=e.fields[c]}a=c,o=s?"["+d+"]":"."+d}),{schema:e,parent:i,parentPath:a}):{parent:i,parentPath:t,schema:e}}(this,t,r,n.context);return o[e](i&&i[a],Object.assign({},n,{parent:i,path:t}))};for(let e of["equals","is"])dK.prototype[e]=dK.prototype.oneOf;for(let e of["not","nope"])dK.prototype[e]=dK.prototype.notOneOf;let dq=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function dX(e){var t,r;let n=dq.exec(e);return n?{year:dJ(n[1]),month:dJ(n[2],1)-1,day:dJ(n[3],1),hour:dJ(n[4]),minute:dJ(n[5]),second:dJ(n[6]),millisecond:n[7]?dJ(n[7].substring(0,3)):0,precision:null!=(t=null==(r=n[7])?void 0:r.length)?t:void 0,z:n[8]||void 0,plusMinus:n[9]||void 0,hourOffset:dJ(n[10]),minuteOffset:dJ(n[11])}:null}function dJ(e,t=0){return Number(e)||t}let dQ=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,d0=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,d1=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d2=RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"),d3=e=>null==e||e===e.trim(),d5=({}).toString();function d4(){return new d9}class d9 extends dK{constructor(){super({type:"string",check:e=>(e instanceof String&&(e=e.valueOf()),"string"==typeof e)}),this.withMutation(()=>{this.transform((e,t)=>{if(!this.spec.coerce||this.isType(e)||Array.isArray(e))return e;let r=null!=e&&e.toString?e.toString():e;return r===d5?e:r})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||dO.required,name:"required",skipAbsent:!0,test:e=>!!e.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(e=>"required"!==e.OPTIONS.name),e))}length(e,t=dA.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(t){return t.length===this.resolve(e)}})}min(e,t=dA.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(t){return t.length>=this.resolve(e)}})}max(e,t=dA.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(t){return t.length<=this.resolve(e)}})}matches(e,t){let r,n,i=!1;return t&&("object"==typeof t?{excludeEmptyString:i=!1,message:r,name:n}=t:r=t),this.test({name:n||"matches",message:r||dA.matches,params:{regex:e},skipAbsent:!0,test:t=>""===t&&i||-1!==t.search(e)})}email(e=dA.email){return this.matches(dQ,{name:"email",message:e,excludeEmptyString:!0})}url(e=dA.url){return this.matches(d0,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=dA.uuid){return this.matches(d1,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t,r,n="";return e&&("object"==typeof e?{message:n="",allowOffset:t=!1,precision:r}=e:n=e),this.matches(d2,{name:"datetime",message:n||dA.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||dA.datetime_offset,params:{allowOffset:t},skipAbsent:!0,test:e=>{if(!e||t)return!0;let r=dX(e);return!!r&&!!r.z}}).test({name:"datetime_precision",message:n||dA.datetime_precision,params:{precision:r},skipAbsent:!0,test:e=>{if(!e||void 0==r)return!0;let t=dX(e);return!!t&&t.precision===r}})}ensure(){return this.default("").transform(e=>null===e?"":e)}trim(e=dA.trim){return this.transform(e=>null!=e?e.trim():e).test({message:e,name:"trim",test:d3})}lowercase(e=dA.lowercase){return this.transform(e=>null==e?e:e.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>null==e||e===e.toLowerCase()})}uppercase(e=dA.uppercase){return this.transform(e=>null==e?e:e.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>null==e||e===e.toUpperCase()})}}d4.prototype=d9.prototype;let d8=new Date("");function d7(){return new d6}class d6 extends dK{constructor(){super({type:"date",check:e=>"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())}),this.withMutation(()=>{this.transform((e,t)=>!this.spec.coerce||this.isType(e)||null===e?e:isNaN(e=function(e){let t=dX(e);if(!t)return Date.parse?Date.parse(e):NaN;if(void 0===t.z&&void 0===t.plusMinus)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let r=0;return"Z"!==t.z&&void 0!==t.plusMinus&&(r=60*t.hourOffset+t.minuteOffset,"+"===t.plusMinus&&(r=0-r)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+r,t.second,t.millisecond)}(e))?d6.INVALID_DATE:new Date(e))})}prepareParam(e,t){let r;if(dU.isRef(e))r=e;else{let n=this.cast(e);if(!this._typeCheck(n))throw TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);r=n}return r}min(e,t=dF.min){let r=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(e){return e>=this.resolve(r)}})}max(e,t=dF.max){let r=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(e){return e<=this.resolve(r)}})}}function se(e,t){let r=1/0;return e.some((e,n)=>{var i;if(null!=(i=t.path)&&i.includes(e))return r=n,!0}),r}function st(e){return(t,r)=>se(e,t)-se(e,r)}d6.INVALID_DATE=d8,d7.prototype=d6.prototype,d7.INVALID_DATE=d8;let sr=(e,t,r)=>{if("string"!=typeof e)return e;let n=e;try{n=JSON.parse(e)}catch(e){}return r.isType(n)?n:e},sn=e=>"[object Object]"===Object.prototype.toString.call(e);function si(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(e=>-1===r.indexOf(e))}let sa=st([]);function so(e){return new sd(e)}class sd extends dK{constructor(e){super({type:"object",check:e=>sn(e)||"function"==typeof e}),this.fields=Object.create(null),this._sortErrors=sa,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var r;let n=super._cast(e,t);if(void 0===n)return this.getDefault(t);if(!this._typeCheck(n))return n;let i=this.fields,a=null!=(r=t.stripUnknown)?r:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(n).filter(e=>!this._nodes.includes(e))),d={},s=Object.assign({},t,{parent:d,__validating:t.__validating||!1}),l=!1;for(let e of o){let r=i[e],o=e in n,c=n[e];if(r){let i;s.path=(t.path?`${t.path}.`:"")+e;let a=(r=r.resolve({value:c,context:t.context,parent:d}))instanceof dK?r.spec:void 0,o=null==a?void 0:a.strict;if(null!=a&&a.strip){l=l||e in n;continue}void 0!==(i=t.__validating&&o?c:r.cast(c,s))&&(d[e]=i)}else o&&!a&&(d[e]=c);(o!==e in d||d[e]!==c)&&(l=!0)}return l?d:n}_validate(e,t={},r,n){let{from:i=[],originalValue:a=e,recursive:o=this.spec.recursive}=t;t.from=[{schema:this,value:a},...i],t.__validating=!0,t.originalValue=a,super._validate(e,t,r,(e,i)=>{if(!o||!sn(i))return void n(e,i);a=a||i;let d=[];for(let e of this._nodes){let r=this.fields[e];!r||dU.isRef(r)||d.push(r.asNestedTest({options:t,key:e,parent:i,parentPath:t.path,originalParent:a}))}this.runTests({tests:d,value:i,originalValue:a,options:t},r,t=>{n(t.sort(this._sortErrors).concat(e),i)})})}clone(e){let t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),r=t.fields;for(let[e,t]of Object.entries(this.fields)){let n=r[e];r[e]=void 0===n?t:n}return t.withMutation(t=>t.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(r=>{var n;let i=this.fields[r],a=e;null!=(n=a)&&n.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),t[r]=i&&"getDefault"in i?i.getDefault(a):void 0}),t}setFields(e,t){let r=this.clone();return r.fields=e,r._nodes=function(e,t=[]){let r=[],n=new Set,i=new Set(t.map(([e,t])=>`${e}-${t}`));function a(e,t){let a=(0,dy.split)(e)[0];n.add(a),i.has(`${t}-${a}`)||r.push([t,a])}for(let t of Object.keys(e)){let r=e[t];n.add(t),dU.isRef(r)&&r.isSibling?a(r.path,t):dD(r)&&"deps"in r&&r.deps.forEach(e=>a(e,t))}return db.default.array(Array.from(n),r).reverse()}(e,t),r._sortErrors=st(Object.keys(e)),t&&(r._excludedEdges=t),r}shape(e,t=[]){return this.clone().withMutation(r=>{let n=r._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),n=[...r._excludedEdges,...t]),r.setFields(Object.assign(r.fields,e),n)})}partial(){let e={};for(let[t,r]of Object.entries(this.fields))e[t]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return function e(t){if("fields"in t){let r={};for(let[n,i]of Object.entries(t.fields))r[n]=e(i);return t.setFields(r)}if("array"===t.type){let r=t.optional();return r.innerType&&(r.innerType=e(r.innerType)),r}return"tuple"===t.type?t.optional().clone({types:t.spec.types.map(e)}):"optional"in t?t.optional():t}(this)}pick(e){let t={};for(let r of e)this.fields[r]&&(t[r]=this.fields[r]);return this.setFields(t,this._excludedEdges.filter(([t,r])=>e.includes(t)&&e.includes(r)))}omit(e){let t=[];for(let r of Object.keys(this.fields))e.includes(r)||t.push(r);return this.pick(t)}from(e,t,r){let n=(0,dy.getter)(e,!0);return this.transform(i=>{if(!i)return i;let a=i;return((e,t)=>{let r=[...(0,dy.normalizePath)(t)];if(1===r.length)return r[0]in e;let n=r.pop(),i=(0,dy.getter)((0,dy.join)(r),!0)(e);return!!(i&&n in i)})(i,e)&&(a=Object.assign({},i),r||delete a[e],a[t]=n(i)),a})}json(){return this.transform(sr)}exact(e){return this.test({name:"exact",exclusive:!0,message:e||dL.exact,test(e){if(null==e)return!0;let t=si(this.schema,e);return 0===t.length||this.createError({params:{properties:t.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(e=!0,t=dL.noUnknown){"boolean"!=typeof e&&(t=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:t,test(t){if(null==t)return!0;let r=si(this.schema,t);return!e||0===r.length||this.createError({params:{unknown:r.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,t=dL.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;let r={};for(let n of Object.keys(t))r[e(n)]=t[n];return r})}camelCase(){return this.transformKeys(dv.camelCase)}snakeCase(){return this.transformKeys(dv.snakeCase)}constantCase(){return this.transformKeys(e=>(0,dv.snakeCase)(e).toUpperCase())}describe(e){let t=(e?this.resolve(e):this).clone(),r=super.describe(e);for(let[i,a]of(r.fields={},Object.entries(t.fields))){var n;let t=e;null!=(n=t)&&n.value&&(t=Object.assign({},t,{parent:t.value,value:t.value[i]})),r.fields[i]=a.describe(t)}return r}}so.prototype=sd.prototype;let ss={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[2-467])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]","(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|2[23]"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[024-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[024-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[02-4679]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","(?:01\\d|8)\\d{7}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["0"]]]],BL:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","(?:[2-7]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]|50"]],["(\\d{8})","$1",["[5-7]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37|86)","300|4(?:0(?:0|20)|370|864)"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[178]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-6]|7[246]|8[2-4]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|[78]"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-9]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","[2-9]\\d{9}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["5"],"0$1"]],"0"],CF:["236","00","8776\\d{4}|(?:[27]\\d|61)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-8]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["60|809"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9(?:10|[2-9])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]","(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["46"]],["(\\d{3})(\\d{7})","$1 $2",["6|90"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|9[14]"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["[56]"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9,10,11,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[03568]","15(?:[0568]|3[13])"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{8})","$1 $2",["1"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,0,[["528[89]\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|3[01]|5[0-5]))\\d{6}"],["80[0-7]\\d{6}"],["89\\d{7}"],0,0,0,0,["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","(?:400|[5-9]\\d\\d)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[4-9]"]]]],ET:["251","00","(?:11|[2-57-9]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d{5})","$1",["20[2-59]"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[68])0|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"],["(\\d)(\\d{4,9})","$1 $2",["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,"0|180020",0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]|80[6-9]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0|180020","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","[235]\\d{8}|800\\d{5,6}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2358]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[48]\\d{8}|[2-9]\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|4(?:[0-35]|4[16-9])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[48]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]|80[6-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-8]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","(?:[2-8]\\d{3}|9008)\\d{3}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",[7,8,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6|7[245]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","[2-589]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13,14,15,16,17],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1(?:05|[2-9]))","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0|180020","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["16|[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["18[06]","18[06]0"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11,12],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]|43"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[03]"]]],0,0,0,0,0,0,[["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[2-9]\\d{7,8}|(?:31|43)\\d{8}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],["3[2-8]\\d{9,10}",[11,12]],0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0|180020","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[47]"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]","3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[25-9]"],"0$1"]],"0",0,"(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0","$1"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|[235-9]\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[36]0|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","8\\d{13}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["3"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["4[67]|[56]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(0-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"0 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(0-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(0-$1)",1]],"0",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["20"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["20"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|78|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2679]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{4})(\\d{5})","$1-$2",["892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8(?:0[0-7]|9)"],"0$1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[5-8]"],"0$1"]],"0",0,0,0,0,"[5-8]"],MC:["377","00","(?:[3489]|[67]\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[67]"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|452|678|86","[12]|452|6788|86"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["11|2[16]"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]|8(?:0[6-9]|[36])"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-37-9]"],"0$1"]],"0"],MX:["52","0[09]","[2-9]\\d{9}",[10],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"]]],0,0,0,0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[0467]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:20|9\\d)\\d{8}|[78]\\d{9,13}",[10,11,12,13,14],[["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["20[129]"],"0$1"],["(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[24-9]"]]]],NU:["683","00","(?:[4-7]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-79]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|8|90","50(?:[0367]|88)|8|90"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[589]"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85[02-46-9]"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[78]\\d{8}|[2-9]\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["3[289]|4[246-8]|61|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[136]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","709\\d{6}|(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-9]"],"0$1"]],"0",0,0,0,0,0,[["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"],["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"[3489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],"0"],SA:["966","00","(?:[15]\\d|800|92)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","[6-9]\\d{6}|[1-6]\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","(?:[2489]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10,12],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-9]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[013]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|79)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|9[2-9]"]],["(\\d)(\\d{7})","$1 $2",["[267]|904"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[346-9]"]]],"0"],SR:["597","00","(?:[2-5]|[6-9]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-9]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[25-7]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-359]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-4]|5[1-3]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[59]"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[3689]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[236-9]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:[0-57-9]\\d|66)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["44[02-479]|[34]7"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3(?:[1245]|3[12])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["\\d"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","[1-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["[67]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["826"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["83"],"0$1"],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["82"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[25]0|37|49|8[09]"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-478])|7[1-9]","[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024","20240"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["20[0-35-7]|4(?:6[45]|[7-9])|[7-9]","20(?:[0135-7]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[2-4]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:472[2-47-9]|983[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[02469]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",[4,5,6,7,8,9,10,11,12,13],[["(\\d{4,5})","$1",["21"]],["(\\d{3})(\\d{3,4})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[49]0|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","00","(?:20|33|[5-9]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-9]"]]]],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11,12],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{6,7}|7\\d{6}",[7,8,9,10],[["(\\d{4})(\\d{4,6})","$1 $2",["1(?:2[02]|[89])"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[26]|6"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[357-9]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[47-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",[8,9,10,11,12],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2|39"],"0$1"],["(\\d{2})(\\d{7,10})","$1 $2",["3"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"],["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],["80\\d{7}"],0,0,0,0,0,["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|[579]\\d|63)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[579]"],"0$1"]],"0"],ZW:["263","00","(?:13|8\\d{4})\\d{5}|[235-8]\\d{8}|[2-689]\\d{6}",[7,9,10],[["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|29|58)|67[0-46-9]|(?:55|68)[0-69]"],"0$1"],["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|[27]|48)|37|675|(?:55|68)[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["548"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[256]|39|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["3"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[235-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],0,0,0,0,0,0,["2\\d{8}",[9]]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"6\\d{9}|[0-36-9]\\d{8}",[9,10],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-37-9]"]],["(\\d)(\\d{3})(\\d{5,6})","$1 $2 $3",["6"]]],0,0,0,0,0,0,[0,["6\\d{9}|[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|5[12]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}",[7,8,9,10,12]],0,0,0,["348[57]\\d{7}",[11]],0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};var sl={}.constructor;function sc(e){return null!=e&&e.constructor===sl}function su(e){return(su="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function sp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function sf(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var sh="0-9０-９٠-٩۰-۹",sm="".concat("-‐-―−ー－").concat("／/").concat("．.").concat("  ­​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～"),sg="+＋";function s$(e){return(s$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function sy(e){var t="function"==typeof Map?new Map:void 0;return(sy=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if(sv())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var i=new(e.bind.apply(e,n));return r&&sb(i,r.prototype),i}(e,arguments,sx(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),sb(r,e)})(e)}function sv(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(sv=function(){return!!e})()}function sb(e,t){return(sb=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function sx(e){return(sx=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var sw=function(e){function t(e){var r,n,i;if(!(this instanceof t))throw TypeError("Cannot call a class as a function");return n=t,i=[e],n=sx(n),Object.setPrototypeOf(r=function(e,t){if(t&&("object"==s$(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");var r=e;if(void 0===r)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(this,sv()?Reflect.construct(n,i||[],sx(this).constructor):n.apply(this,i)),t.prototype),r.name=r.constructor.name,r}if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&sb(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(sy(Error));function s_(e,t){e=e.split("-"),t=t.split("-");for(var r=e[0].split("."),n=t[0].split("."),i=0;i<3;i++){var a=Number(r[i]),o=Number(n[i]);if(a>o)return 1;if(o>a)return -1;if(!isNaN(a)&&isNaN(o))return 1;if(isNaN(a)&&!isNaN(o))return -1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}var sj=/^\d+$/;function sk(e){return(sk="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function sC(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function sN(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!=sk(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=sk(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==sk(t)?t:t+""}(n.key),n)}}function sI(e,t,r){return t&&sN(e.prototype,t),r&&sN(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var sS=" ext. ",sE=sI(function e(t){sC(this,e),sR(t),this.metadata=t,sz.call(this,t)},[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(e){return"001"!==e})}},{key:"getCountryMetadata",value:function(e){return this.metadata.countries[e]}},{key:"nonGeographic",value:function(){if(!this.v1&&!this.v2&&!this.v3)return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(e){return void 0!==this.getCountryMetadata(e)}},{key:"hasCallingCode",value:function(e){if(this.getCountryCodesForCallingCode(e))return!0;if(this.nonGeographic()){if(this.nonGeographic()[e])return!0}else{var t=this.countryCallingCodes()[e];if(t&&1===t.length&&"001"===t[0])return!0}}},{key:"isNonGeographicCallingCode",value:function(e){return this.nonGeographic()?!!this.nonGeographic()[e]:!this.getCountryCodesForCallingCode(e)}},{key:"country",value:function(e){return this.selectNumberingPlan(e)}},{key:"selectNumberingPlan",value:function(e,t){e&&(sj.test(e)?n=e:r=e);if(t&&(n=t),r&&"001"!==r){var r,n,i=this.getCountryMetadata(r);if(!i)throw Error("Unknown country: ".concat(r));this.numberingPlan=new sT(i,this)}else if(n){if(!this.hasCallingCode(n))throw Error("Unknown calling code: ".concat(n));this.numberingPlan=new sT(this.getNumberingPlanMetadata(n),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(e){var t=this.countryCallingCodes()[e];if(t){if(1===t.length&&3===t[0].length)return;return t}}},{key:"getCountryCodeForCallingCode",value:function(e){var t=this.getCountryCodesForCallingCode(e);if(t)return t[0]}},{key:"getNumberingPlanMetadata",value:function(e){var t=this.getCountryCodeForCallingCode(e);if(t)return this.getCountryMetadata(t);if(this.nonGeographic()){var r=this.nonGeographic()[e];if(r)return r}else{var n=this.countryCallingCodes()[e];if(n&&1===n.length&&"001"===n[0])return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(e){return this.numberingPlan.type(e)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(e){return this.selectNumberingPlan(e)}},{key:"hasSelectedNumberingPlan",value:function(){return void 0!==this.numberingPlan}}]),sT=sI(function e(t,r){sC(this,e),this.globalMetadataObject=r,this.metadata=t,sz.call(this,r.metadata)},[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"_getDefaultCountryMetadataForThisCallingCode",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this._getDefaultCountryMetadataForThisCallingCode()}},{key:"IDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(e){return e[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var e=this;return(this._getFormats(this.metadata)||this._getFormats(this._getDefaultCountryMetadataForThisCallingCode())||[]).map(function(t){return new sO(t,e)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(e){return e[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return(!this.types()||0!==this.types().length)&&!!this.types()}},{key:"type",value:function(e){if(this.hasTypes()&&sF(this.types(),e))return new sP(sF(this.types(),e),this)}},{key:"ext",value:function(){return this.v1||this.v2?sS:this.metadata[13]||sS}}]),sO=sI(function e(t,r){sC(this,e),this._format=t,this.metadata=r},[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!(!this.nationalPrefixFormattingRule()||sA.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),sA=/^\(?\$1\)?$/,sP=sI(function e(t,r){sC(this,e),this.type=t,this.metadata=r},[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]);function sF(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function sR(e){if(!e)throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!sc(e)||!sc(e.countries))throw Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(sc(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+sL(e)+": "+e,"."))}var sL=function(e){return sk(e)};function sM(e,t){var r=new sE(t);if(r.hasCountry(e))return r.selectNumberingPlan(e).countryCallingCode();throw Error("Unknown country: ".concat(e))}function sz(e){var t=e.version;"number"==typeof t?(this.v1=1===t,this.v2=2===t,this.v3=3===t,this.v4=4===t):t?-1===s_(t,"1.2.0")?this.v2=!0:-1===s_(t,"1.7.35")?this.v3=!0:this.v4=!0:this.v1=!0}var sD=function(e){return"([".concat(sh,"]{1,").concat(e,"})")};function sB(e){var t="[  \\t,]*",r="[:\\.．]?[  \\t,-]*",n="[  \\t]*";return";ext="+sD("20")+"|"+(t+"(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)"+r+sD("20"))+"#?|"+(t+"(?:[xｘ#＃~～]|int|ｉｎｔ)"+r+sD("9"))+"#?|"+("[- ]+"+sD("6"))+"#|"+(n+"(?:,{2}|;)"+r+sD("15"))+"#?|"+(n+"(?:,)+"+r+sD("9"))+"#?"}var sU="["+sg+"]{0,1}(?:["+sm+"]*["+sh+"]){3,}["+sm+sh+"]*",sG=RegExp("^["+sg+"]{0,1}(?:["+sm+"]*["+sh+"]){1,2}$","i"),sV=RegExp("^["+sh+"]{2}$|^"+(sU+"(?:"+sB())+")?$","i"),sH=RegExp("(?:"+sB()+")$","i"),sW={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function sY(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function sZ(e){for(var t,r="",n=function(e){var t="u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e){if(e){if("string"==typeof e)return sY(e,void 0);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?sY(e,void 0):void 0}}(e))){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e.split(""));!(t=n()).done;){var i=t.value;r+=function(e,t){if("+"===e){if(t)return;return"+"}return sW[e]}(i,r)||""}return r}function sK(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function sq(e,t,r){return function e(t,r,n,i){n&&(i=new sE(i.metadata)).selectNumberingPlan(n);var a=i.type(r),o=a&&a.possibleLengths()||i.possibleLengths();if(!o)return"IS_POSSIBLE";if("FIXED_LINE_OR_MOBILE"===r){if(!i.type("FIXED_LINE"))return e(t,"MOBILE",n,i);var d=i.type("MOBILE");d&&(o=function(e,t){for(var r,n=e.slice(),i=function(e){var t="u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e){if(e){if("string"==typeof e)return sK(e,void 0);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?sK(e,void 0):void 0}}(e))){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t);!(r=i()).done;){var a=r.value;0>e.indexOf(a)&&n.push(a)}return n.sort(function(e,t){return e-t})}(o,d.possibleLengths()))}else if(r&&!a)return"INVALID_LENGTH";var s=t.length,l=o[0];return l===s?"IS_POSSIBLE":l>s?"TOO_SHORT":o[o.length-1]<s?"TOO_LONG":o.indexOf(s,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}(e,void 0,t,r)}function sX(e,t){return"IS_POSSIBLE"===sq(e,void 0,t)}function sJ(e,t){return e=e||"",RegExp("^(?:"+t+")$").test(e)}function sQ(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var s0=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function s1(e,t,r){if(t=t||{},e.country||e.countryCallingCode){var n=new sE(r);n.selectNumberingPlan(e.country||e.countryCallingCode);var i=t.v2?e.nationalNumber:e.phone;if(sJ(i,n.nationalNumberPattern())){if(s2(i,"FIXED_LINE",n))return n.type("MOBILE")&&""===n.type("MOBILE").pattern()||!n.type("MOBILE")||s2(i,"MOBILE",n)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE";for(var a,o=function(e){var t="u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e){if(e){if("string"==typeof e)return sQ(e,void 0);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?sQ(e,void 0):void 0}}(e))){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(s0);!(a=o()).done;){var d=a.value;if(s2(i,d,n))return d}}}}function s2(e,t,r){var n=r.type(t);return!(!n||!n.pattern()||n.possibleLengths()&&0>n.possibleLengths().indexOf(e.length))&&sJ(e,n.pattern())}var s3=/^[A-Z]{2}$/,s5=RegExp("(["+sh+"])");function s4(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s9(e,t){var r=t.nationalNumber,n=t.metadata,i=n.getCountryCodesForCallingCode(e);if(i)return 1===i.length?i[0]:function(e,t,r){for(var n,i=new sE(r),a=function(e){var t="u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e){if(e){if("string"==typeof e)return s4(e,void 0);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s4(e,void 0):void 0}}(e))){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t);!(n=a()).done;){var o=n.value;if(i.selectNumberingPlan(o),i.leadingDigits()){if(e&&0===e.search(i.leadingDigits()))return o}else if(s1({phone:e,country:o},void 0,i.metadata))return o}}(r,i,n.metadata)}function s8(e,t,r){var n,i,a,o=function(e,t){if(e&&t.numberingPlan.nationalPrefixForParsing()){var r=RegExp("^(?:"+t.numberingPlan.nationalPrefixForParsing()+")"),n=r.exec(e);if(n){var i,a,o,d=n.length-1,s=d>0&&n[d];if(t.nationalPrefixTransformRule()&&s)i=e.replace(r,t.nationalPrefixTransformRule()),d>1&&(a=n[1]);else{var l=n[0];i=e.slice(l.length),s&&(a=n[1])}if(s){var c=e.indexOf(n[1]);e.slice(0,c)===t.numberingPlan.nationalPrefix()&&(o=t.numberingPlan.nationalPrefix())}else o=n[0];return{nationalNumber:i,nationalPrefix:o,carrierCode:a}}}return{nationalNumber:e}}(e,r),d=o.carrierCode,s=o.nationalNumber;if(s!==e){if(n=e,i=s,!(!sJ(n,(a=r).nationalNumberPattern())||sJ(i,a.nationalNumberPattern()))||r.numberingPlan.possibleLengths()&&(t||(t=s9(r.numberingPlan.callingCode(),{nationalNumber:s,metadata:r})),!function(e,t,r){switch(sq(e,t,r)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}(s,t,r)))return{nationalNumber:e}}return{nationalNumber:s,carrierCode:d}}function s7(e,t,r,n,i){if(!e)return{};if("+"!==e[0]){var a,o=function(e,t,r,n){if(t){var i=new sE(n);i.selectNumberingPlan(t||r);var a=new RegExp(i.IDDPrefix());if(0===e.search(a)){var o=(e=e.slice(e.match(a)[0].length)).match(s5);if(!o||null==o[1]||!(o[1].length>0)||"0"!==o[1])return e}}}(e,t||r,n,i);if(o&&o!==e)a=!0,e="+"+o;else{if(t||r||n){var d=function(e,t,r,n,i){if(!(t||r||n))return{number:e};var a=t||r?sM(t||r,i):n;if(0===e.indexOf(a)){var o=new sE(i);o.selectNumberingPlan(t||r||n);var d=e.slice(a.length),s=s8(d,void 0,o).nationalNumber,l=s8(e,void 0,o).nationalNumber;if(!sJ(l,o.nationalNumberPattern())&&sJ(s,o.nationalNumberPattern())||"TOO_LONG"===sq(l,void 0,o))return{countryCallingCode:a,number:d}}return{number:e}}(e,t,r,n,i),s=d.countryCallingCode,l=d.number;if(s)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:s,number:l}}return{number:e}}}if("0"===e[1])return{};for(var c=new sE(i),u=2;u-1<=3&&u<=e.length;){var p=e.slice(1,u);if(c.hasCallingCode(p))return c.selectNumberingPlan(p),{countryCallingCodeSource:a?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:p,number:e.slice(u)};u++}return{}}var s6=/(\$\d)/,le=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/,lt={formatExtension:function(e,t,r){return"".concat(e).concat(r.ext()).concat(t)}};function lr(e,t,r,n,i){var a,o,d,s,l,c,u=function(e,t){for(var r=e,n=0;n<r.length;){if(function(e){if(e.leadingDigitsPatterns().length>0){var r=e.leadingDigitsPatterns()[e.leadingDigitsPatterns().length-1];if(0!==t.search(r))return!1}return sJ(t,e.pattern())}(r[n]))return r[n];n++}}(n.formats(),e);return u?(a=e,o=u,s=(d={useInternationalFormat:"INTERNATIONAL"===r,withNationalPrefix:!u.nationalPrefixIsOptionalWhenFormattingInNationalFormat()||!i||!1!==i.nationalPrefix,carrierCode:t,metadata:n}).useInternationalFormat,l=d.withNationalPrefix,d.carrierCode,d.metadata,c=a.replace(new RegExp(o.pattern()),s?o.internationalFormat():l&&o.nationalPrefixFormattingRule()?o.format().replace(s6,o.nationalPrefixFormattingRule()):o.format()),s?c.replace(RegExp("[".concat(sm,"]+"),"g")," ").trim():c):e}function ln(e){return(ln="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function li(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function la(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?li(Object(r),!0).forEach(function(t){var n,i,a;n=e,i=t,a=r[t],(i=lo(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):li(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function lo(e){var t=function(e,t){if("object"!=ln(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=ln(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ln(t)?t:t+""}var ld=(c=function e(t,r,n){if(!(this instanceof e))throw TypeError("Cannot call a class as a function");if(!t)throw TypeError("First argument is required");if("string"!=typeof t)throw TypeError("First argument must be a string");if("+"===t[0]&&!r)throw TypeError("`metadata` argument not passed");if(sc(r)&&sc(r.countries)){n=r;var i=t;if(!ls.test(i))throw Error('Invalid `number` argument passed: must consist of a "+" followed by digits');var a=s7(i,void 0,void 0,void 0,n),o=a.countryCallingCode;if(r=a.number,t=o,!r)throw Error("Invalid `number` argument passed: too short")}if(!r)throw TypeError("`nationalNumber` argument is required");if("string"!=typeof r)throw TypeError("`nationalNumber` argument must be a string");sR(n);var d=function(e,t){var r,n,i=new sE(t);return s3.test(e)?(r=e,i.selectNumberingPlan(r),n=i.countryCallingCode()):n=e,{country:r,callingCode:n}}(t,n),s=d.country,l=d.callingCode;this.country=s,this.countryCallingCode=l,this.nationalNumber=r,this.number="+"+this.countryCallingCode+this.nationalNumber,this.getMetadata=function(){return n}},u=[{key:"setExt",value:function(e){this.ext=e}},{key:"getPossibleCountries",value:function(){var e,t,r,n;return this.country?[this.country]:(e=this.countryCallingCode,t=this.nationalNumber,(n=new sE(r=this.getMetadata()).getCountryCodesForCallingCode(e))?n.filter(function(e){var n,i,a;return n=t,i=e,(a=new sE(r)).selectNumberingPlan(i),a.numberingPlan.possibleLengths().indexOf(n.length)>=0}):[])}},{key:"isPossible",value:function(){return function(e,t,r){void 0===t&&(t={});var n=new sE(r);if(t.v2){if(!e.countryCallingCode)throw Error("Invalid phone number object passed");n.selectNumberingPlan(e.country||e.countryCallingCode)}else{if(!e.phone)return!1;if(e.country){if(!n.hasCountry(e.country))throw Error("Unknown country: ".concat(e.country));n.selectNumberingPlan(e.country)}else{if(!e.countryCallingCode)throw Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}}if(n.possibleLengths())return sX(e.phone||e.nationalNumber,n);if(e.countryCallingCode&&n.isNonGeographicCallingCode(e.countryCallingCode))return!0;throw Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}(this,{v2:!0},this.getMetadata())}},{key:"isValid",value:function(){var e,t,r;return e={v2:!0},t=this.getMetadata(),e=e||{},((r=new sE(t)).selectNumberingPlan(this.country||this.countryCallingCode),r.hasTypes())?void 0!==s1(this,e,r.metadata):sJ(e.v2?this.nationalNumber:this.phone,r.nationalNumberPattern())}},{key:"isNonGeographic",value:function(){return new sE(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(e){return this.number===e.number&&this.ext===e.ext}},{key:"getType",value:function(){return s1(this,{v2:!0},this.getMetadata())}},{key:"format",value:function(e,t){return function(e,t,r,n){r=r?function(){for(var e=1,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];for(;e<r.length;){if(r[e])for(var i in r[e])r[0][i]=r[e][i];e++}return r[0]}({},lt,r):lt;var i,a=new sE(n);if(e.country&&"001"!==e.country){if(!a.hasCountry(e.country))throw Error("Unknown country: ".concat(e.country));a.selectNumberingPlan(e.country)}else{if(!e.countryCallingCode)return e.phone||"";a.selectNumberingPlan(e.countryCallingCode)}var o=a.countryCallingCode(),d=r.v2?e.nationalNumber:e.phone;switch(t){case"NATIONAL":if(!d)return"";return u=i=lr(d,e.carrierCode,"NATIONAL",a,r),p=e.ext,f=a,h=r.formatExtension,p?h(u,p,f):u;case"INTERNATIONAL":if(!d)return"+".concat(o);return i=lr(d,null,"INTERNATIONAL",a,r),m=i="+".concat(o," ").concat(i),g=e.ext,$=a,y=r.formatExtension,g?y(m,g,$):m;case"E.164":return"+".concat(o).concat(d);case"RFC3966":var s={number:"+".concat(o).concat(d),ext:e.ext},l=s.number,c=s.ext;if(!l)return"";if("+"!==l[0])throw Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(l).concat(c?";ext="+c:"");case"IDD":if(!r.fromCountry)return;var u,p,f,h,m,g,$,y,v,b,x,w,_=function(e,t,r,n,i){if(sM(n,i.metadata)===r){var a,o,d=lr(e,t,"NATIONAL",i);return"1"===r?r+" "+d:d}var s=(a=void 0,((o=new sE(i.metadata)).selectNumberingPlan(n||a),o.defaultIDDPrefix())?o.defaultIDDPrefix():le.test(o.IDDPrefix())?o.IDDPrefix():void 0);if(s)return"".concat(s," ").concat(r," ").concat(lr(e,null,"INTERNATIONAL",i))}(d,e.carrierCode,o,r.fromCountry,a);if(!_)return;return v=_,b=e.ext,x=a,w=r.formatExtension,b?w(v,b,x):v;default:throw Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t,'"'))}}(this,e,t?la(la({},t),{},{v2:!0}):{v2:!0},this.getMetadata())}},{key:"formatNational",value:function(e){return this.format("NATIONAL",e)}},{key:"formatInternational",value:function(e){return this.format("INTERNATIONAL",e)}},{key:"getURI",value:function(e){return this.format("RFC3966",e)}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,lo(n.key),n)}}(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c),ls=/^\+\d+$/,ll="(["+sh+"]|[\\-\\.\\(\\)]?)",lc=RegExp("^\\+"+ll+"*["+sh+"]"+ll+"*$","g"),lu=RegExp("^("+("["+sh+"]+((\\-)*[")+sh+"])*\\.)*[a-zA-Z]+((\\-)*["+sh+"])*\\.?$","g"),lp="tel:",lf=";phone-context=",lh=RegExp("["+sg+sh+"]"),lm=RegExp("[^"+sh+"#]+$");function lg(e){return(lg="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l$(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ly(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l$(Object(r),!0).forEach(function(t){var n,i,a;n=e,i=t,a=r[t],(i=function(e){var t=function(e,t){if("object"!=lg(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=lg(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==lg(t)?t:t+""}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l$(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function lv(e){return(lv="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function lb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function lx(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?lb(Object(r),!0).forEach(function(t){var n,i,a;n=e,i=t,a=r[t],(i=function(e){var t=function(e,t){if("object"!=lv(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=lv(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==lv(t)?t:t+""}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lb(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function lw(){var e,t,r=function(e){var t,r,n,i,a=function(e){if(Array.isArray(e))return e}(t=Array.prototype.slice.call(e))||function(e){var t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,i,a,o=[],d=!0,s=!1;try{i=(t=t.call(e)).next,!1;for(;!(d=(r=i.call(t)).done)&&(o.push(r.value),4!==o.length);d=!0);}catch(e){s=!0,n=e}finally{try{if(!d&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw n}}return o}}(t)||function(e){if(e){if("string"==typeof e)return sf(e,4);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?sf(e,4):void 0}}(t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=a[0],d=a[1],s=a[2],l=a[3];if("string"==typeof o)r=o;else throw TypeError("A text for parsing must be a string.");if(d&&"string"!=typeof d)if(sc(d))s?(n=d,i=s):i=d;else throw Error("Invalid second argument: ".concat(d));else l?(n=s,i=l):(n=void 0,i=s),d&&(n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sp(Object(r),!0).forEach(function(t){var n,i,a;n=e,i=t,a=r[t],(i=function(e){var t=function(e,t){if("object"!=su(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=su(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==su(t)?t:t+""}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sp(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({defaultCountry:d},n));return{text:r,options:n,metadata:i}}(arguments),n=r.text,i=r.options,a=r.metadata,o=i;o&&o.defaultCountry&&(e=o.defaultCountry,!a.countries.hasOwnProperty(e))&&(o=lx(lx({},o),{},{defaultCountry:void 0}));try{return t=o,function(e,t,r){t=t||{};var n,i,a,o,d=new sE(r);if(t.defaultCountry&&!d.hasCountry(t.defaultCountry)){if(t.v2)throw new sw("INVALID_COUNTRY");throw Error("Unknown country: ".concat(t.defaultCountry))}var s=function(e,t,r){var n=function(e,t){var r=t.extractFormattedPhoneNumber,n=function(e){var t=e.indexOf(lf);if(t<0)return null;var r=t+lf.length;if(r>=e.length)return"";var n=e.indexOf(";",r);return n>=0?e.substring(r,n):e.substring(r)}(e);if(!(null===n||0!==n.length&&(lc.test(n)||lu.test(n))))throw new sw("NOT_A_NUMBER");if(null===n)i=r(e)||"";else{i="","+"===n.charAt(0)&&(i+=n);var i,a,o=e.indexOf(lp);a=o>=0?o+lp.length:0;var d=e.indexOf(lf);i+=e.substring(a,d)}var s=i.indexOf(";isub=");if(s>0&&(i=i.substring(0,s)),""!==i)return i}(e,{extractFormattedPhoneNumber:function(e){if(e){if(e.length>250){if(t)throw new sw("TOO_LONG");return}if(!1===r)return e;var n=e.search(lh);return n<0?void 0:e.slice(n).replace(lm,"")}}});if(!n)return{};if(!(n.length>=2&&sV.test(n)))return sG.test(n)?{error:"TOO_SHORT"}:{};var i=function(e){var t=e.search(sH);if(t<0)return{};for(var r=e.slice(0,t),n=e.match(sH),i=1;i<n.length;){if(n[i])return{number:r,ext:n[i]};i++}}(n);return i.ext?i:{number:n}}(e,t.v2,t.extract),l=s.number,c=s.ext,u=s.error;if(!l){if(t.v2){if("TOO_SHORT"===u)throw new sw("TOO_SHORT");throw new sw("NOT_A_NUMBER")}return{}}var p=function(e,t,r,n){var i,a=s7(sZ(e),void 0,t,r,n.metadata),o=a.countryCallingCodeSource,d=a.countryCallingCode,s=a.number;if(d)n.selectNumberingPlan(d);else{if(!s||!t&&!r)return{};t?(i=t,n.selectNumberingPlan(t),d=n.numberingPlan.callingCode()):(n.selectNumberingPlan(r),d=r)}if(!s)return{countryCallingCodeSource:o,countryCallingCode:d};var l=s8(sZ(s),void 0,n),c=l.nationalNumber,u=l.carrierCode,p=s9(d,{nationalNumber:c,metadata:n});return p&&(i=p,"001"===p||n.selectNumberingPlan(i)),{country:i,countryCallingCode:d,countryCallingCodeSource:o,nationalNumber:c,carrierCode:u}}(l,t.defaultCountry,t.defaultCallingCode,d),f=p.country,h=p.nationalNumber,m=p.countryCallingCode,g=p.countryCallingCodeSource,$=p.carrierCode;if(!d.hasSelectedNumberingPlan()){if(t.v2)throw new sw("INVALID_COUNTRY");return{}}if(!h||h.length<2){if(t.v2)throw new sw("TOO_SHORT");return{}}if(h.length>17){if(t.v2)throw new sw("TOO_LONG");return{}}if(t.v2){var y=new ld(m,h,d.metadata);return f&&(y.country=f),$&&(y.carrierCode=$),c&&(y.ext=c),y.__countryCallingCodeSource=g,y}var v=(t.extended?!!d.hasSelectedNumberingPlan():!!f)&&sJ(h,d.nationalNumberPattern());return t.extended?{country:f,countryCallingCode:m,carrierCode:$,valid:v,possible:!!v||!!(!0===t.extended&&d.possibleLengths()&&sX(h,d)),phone:h,ext:c}:v?(n=f,i=h,a=c,o={country:n,phone:i},a&&(o.ext=a),o):{}}(n,ly(ly({},t),{},{v2:!0}),a)}catch(e){if(e instanceof sw);else throw e}}var l_=e.i(46696);class lj extends Error{status;fields;constructor(e,t,r){super(t),this.status=e,this.fields=r}}async function lk(e,{credentials:t,...r}={}){let n=await fetch(`${e}`,{...r,credentials:t,headers:{Accept:"application/json",...r.body?{"Content-Type":"application/json"}:{},...r.headers}});if(204===n.status)return;let i=await n.json().catch(()=>({}));if(!n.ok)throw new lj(n.status,i.error??`Request failed (${n.status})`,i.fields);return i}let lC={name:"",mobile:"",email:"",goal:"",message:"",company:""},lN=so({name:d4().trim().min(2,"Please enter your full name.").required("Please enter your full name."),mobile:d4().required("Enter your mobile number.").test("valid-in-mobile","Enter a valid Indian mobile number.",e=>{if(!e)return!1;let t=function(){return function(e,t){var r=Array.prototype.slice.call(t);return r.push(ss),e.apply(this,r)}(lw,arguments)}(e,"IN");return!!(t?.isValid()&&"FIXED_LINE"!==t.getType())}),email:d4().trim().email("Enter a valid email address.").required("Enter a valid email address."),goal:d4().required("Select the goal closest to yours."),message:d4().max(4e3),company:d4()}),lI=f.default.div.withConfig({displayName:"contact-form__Panel",componentId:"sc-aa22ef63-0"})`
  border: 1px solid var(--color-line);
  border-radius: 16px;
  background: var(--color-surface);
  box-shadow: var(--shadow-lift);
  padding: 1.5rem;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`,lS=(0,f.default)(lI).withConfig({displayName:"contact-form__Done",componentId:"sc-aa22ef63-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.75rem;
  text-align: center;
`,lE=f.default.h3.withConfig({displayName:"contact-form__Title",componentId:"sc-aa22ef63-2"})`
  font-family: var(--font-serif);
  font-size: 21px;
  font-weight: 600;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 23px;
  }
`,lT=f.default.p.withConfig({displayName:"contact-form__Lede",componentId:"sc-aa22ef63-3"})`
  margin-top: 0.5rem;
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-ink-soft);
`,lO=f.default.div.withConfig({displayName:"contact-form__Grid",componentId:"sc-aa22ef63-4"})`
  margin-top: 1.75rem;
  display: grid;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,lA=f.default.div.withConfig({displayName:"contact-form__Cell",componentId:"sc-aa22ef63-5"})`
  min-width: 0;
  ${e=>e.$full&&"@media (min-width: 640px) { grid-column: span 2; }"}
`,lP=f.default.label.withConfig({displayName:"contact-form__Label",componentId:"sc-aa22ef63-6"})`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-ink-soft);
`,lF=f.default.span.withConfig({displayName:"contact-form__Optional",componentId:"sc-aa22ef63-7"})`
  font-weight: 400;
  color: var(--color-ink-faint);
`,lR=`
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  padding: 0.75rem 1rem;
  font-size: 15px;
  color: var(--color-ink);
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    color: color-mix(in oklch, var(--color-ink-faint) 70%, transparent);
  }
  &:focus {
    border-color: color-mix(in oklch, var(--color-navy) 40%, transparent);
    box-shadow: 0 0 0 4px color-mix(in oklch, var(--color-navy) 8%, transparent);
  }
  &[data-invalid='true'] {
    border-color: #b42318;
  }
`,lL=(0,f.default)(dl).withConfig({displayName:"contact-form__Input",componentId:"sc-aa22ef63-8"})`
  ${lR}
`,lM=(0,f.default)(dl).withConfig({displayName:"contact-form__TextArea",componentId:"sc-aa22ef63-9"})`
  ${lR}
  resize: vertical;
  line-height: 1.6;
`,lz=(0,f.default)(dl).withConfig({displayName:"contact-form__Select",componentId:"sc-aa22ef63-10"})`
  ${lR}
  appearance: none;
`,lD=f.default.p.withConfig({displayName:"contact-form__FieldError",componentId:"sc-aa22ef63-11"})`
  margin-top: 0.375rem;
  font-size: 12.5px;
  color: #b42318;
`,lB=f.default.button.withConfig({displayName:"contact-form__Submit",componentId:"sc-aa22ef63-12"})`
  margin-top: 1.75rem;
  display: inline-flex;
  height: 52px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  background: var(--color-navy);
  padding-inline: 1.75rem;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-paper);
  box-shadow: 0 1px 2px oklch(0.24 0.033 264 / 0.06);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover:not(:disabled) {
    background: var(--color-navy-deep);
    box-shadow: var(--shadow-lift);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,lU=f.default.p.withConfig({displayName:"contact-form__Note",componentId:"sc-aa22ef63-13"})`
  margin-top: 1rem;
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-ink-faint);

  a {
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.3s;
  }
  a:hover {
    color: var(--color-ink);
  }
`,lG=f.default.div.withConfig({displayName:"contact-form__Honeypot",componentId:"sc-aa22ef63-14"})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
`,lV=f.default.span.withConfig({displayName:"contact-form__Badge",componentId:"sc-aa22ef63-15"})`
  display: flex;
  height: 3.5rem;
  width: 3.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: color-mix(in oklch, var(--color-gold) 18%, transparent);
  color: var(--color-gold-ink);
`,lH=f.default.button.withConfig({displayName:"contact-form__Again",componentId:"sc-aa22ef63-16"})`
  margin-top: 1.75rem;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-navy);
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    color: var(--color-gold-ink);
  }
`,lW=(0,f.default)(y.LuLoaderCircle).withConfig({displayName:"contact-form__Spin",componentId:"sc-aa22ef63-17"})`
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function lY({className:e}){let t=(0,h.useConfig)(),{leadForm:r,investmentGoals:n}=t,i=(0,g.useId)(),[a,o]=(0,g.useState)(null);return a?(0,p.jsxs)(lS,{className:e,role:"status","aria-live":"polite",children:[(0,p.jsx)(lV,{children:(0,p.jsx)(y.LuCheck,{size:24,strokeWidth:2.5})}),(0,p.jsxs)(lE,{style:{marginTop:"1.5rem"},children:["Thank you, ",a,"."]}),(0,p.jsx)(lT,{style:{maxWidth:"24rem",marginTop:"0.75rem",fontSize:15},children:r.thanks}),(0,p.jsx)(lH,{type:"button",onClick:()=>o(null),children:"Submit another request"})]}):(0,p.jsx)(di,{initialValues:lC,validationSchema:lN,onSubmit:async(e,r)=>{try{let n;await (n={advisorSlug:t.slug,...e,sourceUrl:window.location.href},lk("/api/leads",{method:"POST",body:JSON.stringify(n)})),o(e.name.trim().split(/\s+/)[0]),r.resetForm()}catch(e){if(e instanceof lj&&e.fields)return void r.setErrors(e.fields);l_.toast.error("We couldn't send that just now.",{description:"Please try again, or call us directly."})}},children:({isSubmitting:t,errors:a,touched:o})=>{let d=e=>!!(o[e]&&a[e]);return(0,p.jsx)(dc,{noValidate:!0,children:(0,p.jsxs)(lI,{className:e,children:[(0,p.jsx)(lE,{children:r.title}),(0,p.jsx)(lT,{children:r.lead}),(0,p.jsxs)(lO,{children:[(0,p.jsxs)(lA,{$full:!0,children:[(0,p.jsx)(lP,{htmlFor:`${i}-name`,children:"Full Name"}),(0,p.jsx)(lL,{id:`${i}-name`,name:"name",type:"text",autoComplete:"name","data-invalid":d("name")}),(0,p.jsx)(d$,{name:"name",component:lD})]}),(0,p.jsxs)(lA,{children:[(0,p.jsx)(lP,{htmlFor:`${i}-mobile`,children:"Mobile Number"}),(0,p.jsx)(lL,{id:`${i}-mobile`,name:"mobile",type:"tel",inputMode:"tel",autoComplete:"tel",placeholder:"+91 90000 00000","data-invalid":d("mobile")}),(0,p.jsx)(d$,{name:"mobile",component:lD})]}),(0,p.jsxs)(lA,{children:[(0,p.jsx)(lP,{htmlFor:`${i}-email`,children:"Email"}),(0,p.jsx)(lL,{id:`${i}-email`,name:"email",type:"email",autoComplete:"email",placeholder:"you@example.com","data-invalid":d("email")}),(0,p.jsx)(d$,{name:"email",component:lD})]}),(0,p.jsxs)(lA,{$full:!0,children:[(0,p.jsx)(lP,{htmlFor:`${i}-goal`,children:"Investment Goal"}),(0,p.jsxs)(lz,{as:"select",id:`${i}-goal`,name:"goal","data-invalid":d("goal"),children:[(0,p.jsx)("option",{value:"",children:"Select a goal"}),n.map(e=>(0,p.jsx)("option",{value:e,children:e},e))]}),(0,p.jsx)(d$,{name:"goal",component:lD})]}),(0,p.jsxs)(lA,{$full:!0,children:[(0,p.jsxs)(lP,{htmlFor:`${i}-message`,children:["Message ",(0,p.jsx)(lF,{children:"(optional)"})]}),(0,p.jsx)(lM,{as:"textarea",id:`${i}-message`,name:"message",rows:4,placeholder:"Anything you would like to mention before we speak?"})]})]}),(0,p.jsx)(lG,{"aria-hidden":!0,children:(0,p.jsx)(dl,{name:"company",tabIndex:-1,autoComplete:"off"})}),(0,p.jsx)(lB,{type:"submit",disabled:t,children:t?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(lW,{size:16}),"Sending…"]}):(0,p.jsxs)(p.Fragment,{children:[r.submitLabel,(0,p.jsx)(y.LuArrowRight,{size:16})]})}),(0,p.jsxs)(lU,{children:["By submitting you agree to be contacted about your enquiry. We never share your details with third parties or sell them to anyone. See the"," ",(0,p.jsx)($.Link,{to:et.LEGAL_PATHS.privacy,children:"privacy policy"})," for what we keep and how to have it removed."]})]})})}})}let lZ=f.default.div.withConfig({displayName:"map-embed__Root",componentId:"sc-f452b76c-0"})`
  min-width: 0;
`,lK=f.default.div.withConfig({displayName:"map-embed__Frame",componentId:"sc-f452b76c-1"})`
  height: 11rem;
  overflow: hidden;
  border: 1px solid var(--color-line);
  background: var(--color-mist);
  border-radius: ${e=>"lg"===e.$radius?"20px":"none"===e.$radius?"0":"13px"};

  @media (min-width: 640px) {
    height: 13rem;
  }
`,lq=f.default.iframe.withConfig({displayName:"map-embed__Embed",componentId:"sc-f452b76c-2"})`
  height: 100%;
  width: 100%;
  border: 0;
`,lX=f.default.a.withConfig({displayName:"map-embed__OpenLink",componentId:"sc-f452b76c-3"})`
  margin-top: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-ink-soft);
  transition: color 0.3s;

  &:hover {
    color: var(--color-ink);
  }
`,lJ=f.default.svg.withConfig({displayName:"map-embed__Drawn",componentId:"sc-f452b76c-4"})`
  height: 100%;
  width: 100%;
`;function lQ({label:e}){return(0,p.jsxs)(lJ,{viewBox:"0 0 400 200",preserveAspectRatio:"xMidYMid slice",role:"img","aria-label":e?`Map showing ${e}`:"Map",children:[(0,p.jsx)("rect",{width:"400",height:"200",fill:"var(--color-mist)"}),(0,p.jsx)("g",{stroke:"var(--color-line)",strokeWidth:"1.5",children:(0,p.jsx)("path",{d:"M0 60h400M0 130h400M90 0v200M250 0v200M330 0v200"})}),(0,p.jsx)("path",{d:"M0 95 L140 95 L160 40 L400 40",stroke:"var(--color-gold)",strokeOpacity:"0.55",strokeWidth:"5",fill:"none"}),(0,p.jsx)("circle",{cx:"196",cy:"100",r:"26",fill:"var(--color-navy)",fillOpacity:"0.08"}),(0,p.jsx)("circle",{cx:"196",cy:"100",r:"7",fill:"var(--color-navy)"}),(0,p.jsx)("circle",{cx:"196",cy:"100",r:"2.5",fill:"var(--color-gold)"})]})}let l0=f.default.div.withConfig({displayName:"contact__Layout",componentId:"sc-22abd990-0"})`
  margin-top: ${e=>e.$spaced?"3rem":"0"};
  display: grid;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 3.5rem;
  }
`,l1=f.default.div.withConfig({displayName:"contact__Details",componentId:"sc-22abd990-1"})`
  min-width: 0;

  @media (min-width: 1024px) {
    grid-column: span 5 / span 5;
    /* Sticky because the details are far shorter than the form beside them —
       without it the left half of a wide viewport is a hole from the map down
       to the end of the form. */
    position: sticky;
    top: 7rem;
    align-self: start;
  }
`,l2=f.default.ul.withConfig({displayName:"contact__Channels",componentId:"sc-22abd990-2"})`
  > li + li {
    margin-top: 0.75rem;
  }
`,l3=f.default.span.withConfig({displayName:"contact__Plate",componentId:"sc-22abd990-3"})`
  display: flex;
  height: 2.75rem;
  width: 2.75rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--color-mist);
  color: var(--color-navy);
  transition: background-color 0.3s, color 0.3s;
`,l5=f.default.a.withConfig({displayName:"contact__Channel",componentId:"sc-22abd990-4"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: var(--radius-card);
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.5s var(--ease-out),
    box-shadow 0.5s var(--ease-out),
    border-color 0.4s;

  &:hover {
    /* perspective() as a transform function: the property styles children. */
    transform: perspective(800px) translateZ(18px) rotateX(3deg);
    border-color: color-mix(in oklch, var(--prism-cyan) 34%, transparent);
    box-shadow: var(--shadow-lift);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
  padding: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: color-mix(in oklch, var(--color-navy) 25%, transparent);
    box-shadow: var(--shadow-lift);
  }

  &:hover ${l3} {
    background: color-mix(in oklch, var(--color-gold) 15%, transparent);
    color: var(--color-gold-ink);
  }

  @media (min-width: 640px) {
    padding: 1.25rem;
  }
`,l4=f.default.span.withConfig({displayName:"contact__ChannelText",componentId:"sc-22abd990-5"})`
  min-width: 0;
  flex: 1;
`,l9=f.default.span.withConfig({displayName:"contact__Label",componentId:"sc-22abd990-6"})`
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  color: var(--color-ink-faint);
`,l8=f.default.span.withConfig({displayName:"contact__Value",componentId:"sc-22abd990-7"})`
  margin-top: 0.25rem;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-ink);
  font-variant-numeric: ${e=>e.$tnum?"tabular-nums":"normal"};
`,l7=f.default.div.withConfig({displayName:"contact__Office",componentId:"sc-22abd990-8"})`
  margin-top: 1.5rem;
  border-radius: var(--radius-card);
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.5s var(--ease-out),
    box-shadow 0.5s var(--ease-out),
    border-color 0.4s;

  &:hover {
    /* perspective() as a transform function: the property styles children. */
    transform: perspective(800px) translateZ(18px) rotateX(3deg);
    border-color: color-mix(in oklch, var(--prism-cyan) 34%, transparent);
    box-shadow: var(--shadow-lift);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
  padding: 1.25rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`,l6=f.default.div.withConfig({displayName:"contact__OfficeRow",componentId:"sc-22abd990-9"})`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,ce=f.default.address.withConfig({displayName:"contact__Address",componentId:"sc-22abd990-10"})`
  margin-top: 0.375rem;
  font-style: normal;
  font-size: 15px;
  line-height: 1.65;
  color: var(--color-ink);
`,ct=f.default.span.withConfig({displayName:"contact__Muted",componentId:"sc-22abd990-11"})`
  color: var(--color-ink-soft);
`,cr=f.default.div.withConfig({displayName:"contact__Hours",componentId:"sc-22abd990-12"})`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-top: 1px solid var(--color-line-soft);
  padding-top: 1.25rem;
  font-size: 14px;
  color: var(--color-ink-soft);
`,cn=(0,f.default)(function({className:e,rounded:t="md",placeholder:r=!0}){let{contact:n}=(0,h.useConfig)(),i=n.mapEmbedUrl.trim(),a=n.mapLink.trim();return i||r?(0,p.jsxs)(lZ,{className:e,children:[(0,p.jsx)(lK,{$radius:t,children:i?(0,p.jsx)(lq,{src:i,title:`Map to ${n.officeLine1}`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}):(0,p.jsx)(lQ,{label:n.officeCity})}),a&&(0,p.jsxs)(lX,{href:a,target:"_blank",rel:"noreferrer",children:["Open in Maps",(0,p.jsx)(y.LuArrowUpRight,{size:14,"aria-hidden":!0})]})]}):null}).withConfig({displayName:"contact__Map",componentId:"sc-22abd990-13"})`
  margin-top: 1.5rem;
`,ci=(0,f.default)(tv.Reveal).withConfig({displayName:"contact__FormColumn",componentId:"sc-22abd990-14"})`
  min-width: 0;

  @media (min-width: 1024px) {
    grid-column: span 7 / span 7;
  }
`,ca=(0,f.default)(y.LuArrowUpRight).withConfig({displayName:"page-parts__CardArrow",componentId:"sc-3191763b-0"})`
  margin-left: auto;
  transition: transform 0.3s;
`,co=(0,f.default)($.Link).withConfig({displayName:"page-parts__Card",componentId:"sc-3191763b-1"})`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: inherit;
  padding: 1.5rem;
  transform-style: preserve-3d;

  &:hover ${ca} {
    transform: translateX(0.125rem);
  }

  ${e=>e.$featured&&"@media (min-width: 640px) { padding: 2rem; }"}
`,cd=f.default.span.withConfig({displayName:"page-parts__CardMeta",componentId:"sc-3191763b-2"})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,cs=f.default.span.withConfig({displayName:"page-parts__CardIcon",componentId:"sc-3191763b-3"})`
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: var(--color-mist);
  border: 1px solid color-mix(in oklch, var(--prism-cyan) 20%, transparent);
  color: var(--color-gold-ink);
`,cl=f.default.span.withConfig({displayName:"page-parts__CardCategory",componentId:"sc-3191763b-4"})`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  color: var(--color-gold-ink);
`,cc=f.default.span.withConfig({displayName:"page-parts__CardTitle",componentId:"sc-3191763b-5"})`
  margin-top: 1.25rem;
  display: block;
  font-family: var(--font-serif);
  font-weight: 600;
  line-height: 1.375;
  color: var(--color-ink);
  font-size: ${e=>e.$featured?"22px":"18px"};

  ${e=>e.$featured&&"@media (min-width: 640px) { font-size: 26px; }"}
`,cu=(0,f.default)(t5.Depth).withConfig({displayName:"page-parts__CardBody",componentId:"sc-3191763b-6"})`
  display: flex;
  flex: 1;
  flex-direction: column;
`,cp=f.default.span.withConfig({displayName:"page-parts__CardText",componentId:"sc-3191763b-7"})`
  margin-top: 0.75rem;
  display: block;
  flex: 1;
  font-size: 14.5px;
  line-height: 1.625;
  color: var(--color-ink-soft);
`,cf=f.default.span.withConfig({displayName:"page-parts__CardFoot",componentId:"sc-3191763b-8"})`
  font-variant-numeric: tabular-nums;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-top: 1px solid var(--color-line-soft);
  padding-top: 1rem;
  font-size: 12.5px;
  color: var(--color-ink-faint);
`;function ch({insight:e,featured:t}){let r=(0,t4.icon)(e.icon);return(0,p.jsx)(t5.Tilt,{pad:"0",max:6,lift:18,children:(0,p.jsxs)(co,{to:`/insights#${e.slug}`,$featured:t,children:[(0,p.jsx)(t5.Depth,{$z:40,children:(0,p.jsxs)(cd,{children:[(0,p.jsx)(cs,{children:(0,p.jsx)(r,{size:16,strokeWidth:1.7})}),(0,p.jsx)(cl,{children:e.category})]})}),(0,p.jsx)(t5.Depth,{$z:24,children:(0,p.jsx)(cc,{$featured:t,children:e.title})}),(0,p.jsx)(cu,{$z:14,children:(0,p.jsx)(cp,{children:e.description})}),(0,p.jsx)(t5.Depth,{$z:8,children:(0,p.jsxs)(cf,{children:[e.date," · ",e.readTime,(0,p.jsx)(ca,{size:16,"aria-hidden":!0})]})})]})})}let cm=f.default.div.withConfig({displayName:"page-parts__FaqList",componentId:"sc-3191763b-9"})`
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);

  > * + * {
    border-top: 1px solid var(--color-line);
  }
`,cg=f.default.span.withConfig({displayName:"page-parts__Stroke",componentId:"sc-3191763b-10"})`
  position: absolute;
  border-radius: 2px;
  background: var(--color-ink-faint);

  ${e=>e.$vertical?`left: 50%; top: 0; height: 100%; width: 1.5px; transform: translateX(-50%);
         transition: transform 0.42s, opacity 0.42s;`:"left: 0; top: 50%; height: 1.5px; width: 100%; transform: translateY(-50%);"}
`,c$=f.default.span.withConfig({displayName:"page-parts__Marker",componentId:"sc-3191763b-11"})`
  position: relative;
  margin-top: 0.375rem;
  height: 0.875rem;
  width: 0.875rem;
  flex-shrink: 0;
`,cy=f.default.summary.withConfig({displayName:"page-parts__Summary",componentId:"sc-3191763b-12"})`
  display: flex;
  cursor: pointer;
  list-style: none;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-ink);

  &::-webkit-details-marker {
    display: none;
  }

  @media (min-width: 640px) {
    font-size: 17px;
  }
`,cv=f.default.details.withConfig({displayName:"page-parts__Faq",componentId:"sc-3191763b-13"})`
  padding-block: 1.25rem;

  &[open] ${cg}[data-vertical] {
    transform: translateX(-50%) rotate(90deg);
    opacity: 0;
  }
`,cb=f.default.p.withConfig({displayName:"page-parts__Answer",componentId:"sc-3191763b-14"})`
  margin-top: 0.875rem;
  max-width: 42rem;
  padding-right: 2.5rem;
  font-size: 14.5px;
  line-height: 1.75;
  color: var(--color-ink-soft);
`,cx=f.default.ol.withConfig({displayName:"page-parts__Track",componentId:"sc-3191763b-15"})`
  position: relative;
  margin: 3.5rem auto 0;
  max-width: 48rem;
`,cw=f.default.span.withConfig({displayName:"page-parts__Rail",componentId:"sc-3191763b-16"})`
  position: absolute;
  left: 7px;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 1px;
  background: var(--color-line);

  @media (min-width: 640px) {
    left: 92px;
  }
`,c_=(0,f.default)(tv.Reveal).withConfig({displayName:"page-parts__Entry",componentId:"sc-3191763b-17"})`
  position: relative;
  padding-bottom: 1.875rem;

  &:last-child {
    padding-bottom: 0;
  }
`,cj=f.default.div.withConfig({displayName:"page-parts__EntryRow",componentId:"sc-3191763b-18"})`
  display: flex;
  gap: 1.5rem;

  @media (min-width: 640px) {
    gap: 2.5rem;
  }
`,ck=f.default.p.withConfig({displayName:"page-parts__YearWide",componentId:"sc-3191763b-19"})`
  display: none;

  @media (min-width: 640px) {
    display: block;
    font-variant-numeric: tabular-nums;
    width: 70px;
    flex-shrink: 0;
    padding-top: 0.125rem;
    text-align: right;
    font-family: var(--font-serif);
    font-size: 20px;
    font-weight: 600;
    color: var(--color-gold-ink);
  }
`,cC=f.default.span.withConfig({displayName:"page-parts__Node",componentId:"sc-3191763b-20"})`
  position: relative;
  z-index: 10;
  margin-top: 0.375rem;
  display: flex;
  height: 15px;
  width: 15px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 2px solid var(--color-gold);
  background: var(--color-surface);
  box-shadow: 0 0 14px -2px color-mix(in oklch, var(--prism-cyan) 70%, transparent);
`,cN=f.default.div.withConfig({displayName:"page-parts__EntryBody",componentId:"sc-3191763b-21"})`
  min-width: 0;
  flex: 1;
`,cI=f.default.p.withConfig({displayName:"page-parts__YearNarrow",componentId:"sc-3191763b-22"})`
  font-variant-numeric: tabular-nums;
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-gold-ink);

  @media (min-width: 640px) {
    display: none;
  }
`,cS=f.default.h3.withConfig({displayName:"page-parts__EntryTitle",componentId:"sc-3191763b-23"})`
  margin-top: 0.25rem;
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-ink);

  @media (min-width: 640px) {
    margin-top: 0;
    font-size: 20px;
  }
`,cE=f.default.p.withConfig({displayName:"page-parts__EntryText",componentId:"sc-3191763b-24"})`
  margin-top: 0.5rem;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--color-ink-soft);
`,cT=f.default.div.withConfig({displayName:"page-parts__Detail",componentId:"sc-3191763b-25"})`
  display: grid;
  scroll-margin-top: 3.4rem;
  gap: 2rem;
  border-top: 1px solid var(--color-line);
  padding-block: 1.75rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 3rem;
  }
`,cO=f.default.div.withConfig({displayName:"page-parts__DetailHead",componentId:"sc-3191763b-26"})`
  @media (min-width: 1024px) {
    grid-column: span 4 / span 4;
  }
`,cA=f.default.div.withConfig({displayName:"page-parts__DetailBody",componentId:"sc-3191763b-27"})`
  @media (min-width: 1024px) {
    grid-column: span 8 / span 8;
  }
`,cP=f.default.span.withConfig({displayName:"page-parts__DetailIcon",componentId:"sc-3191763b-28"})`
  display: flex;
  height: 3rem;
  width: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid color-mix(in oklch, var(--prism-cyan) 24%, transparent);
  background: color-mix(in oklab, var(--color-mist) 92%, transparent);
  color: var(--color-gold-ink);
  box-shadow: inset 0 1px 0 oklch(1 0 0 / 0.08);
`,cF=f.default.h2.withConfig({displayName:"page-parts__DetailTitle",componentId:"sc-3191763b-29"})`
  margin-top: 1.25rem;
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 24px;
  }
`,cR=f.default.p.withConfig({displayName:"page-parts__DetailText",componentId:"sc-3191763b-30"})`
  font-size: 15.5px;
  line-height: 1.8;
  color: var(--color-ink-soft);
`,cL=f.default.ul.withConfig({displayName:"page-parts__Highlights",componentId:"sc-3191763b-31"})`
  margin-top: 1.5rem;
  display: grid;
  gap: 0.75rem 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,cM=f.default.li.withConfig({displayName:"page-parts__Highlight",componentId:"sc-3191763b-32"})`
  display: flex;
  gap: 0.75rem;
  font-size: 14.5px;
  line-height: 1.375;
  color: var(--color-ink-soft);
`,cz=f.default.div.withConfig({displayName:"page-parts__Featured",componentId:"sc-3191763b-33"})`
  margin-bottom: 1.875rem;
`,cD=f.default.div.withConfig({displayName:"page-parts__ArticleGrid",componentId:"sc-3191763b-34"})`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,cB={copy:{about:{eyebrow:"The Mutual Fund Distributor"},services:{eyebrow:"What I Do"},tools:{eyebrow:"Run the Numbers"},why:{eyebrow:"How I Work"},goals:{eyebrow:"What It Is For"},process:{eyebrow:"The Four Steps"},testimonials:{eyebrow:"In Their Words"},contact:{eyebrow:"Start Here"},leadCta:{eyebrow:"Let's Begin"}},Header:function(){let[e,t]=(0,g.useState)(null),r=(0,g.useRef)("");(0,g.useEffect)(()=>{if(!e)return;let r=e=>{"Escape"===e.key&&t(null)};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[e]);let n=v(),{config:i,nav:a}=(0,h.useAdvisor)(),{brand:o,contact:d,clientPortal:s}=i,l=s.enabled&&""!==s.url.trim(),[c,u]=(0,g.useState)(!1),[f,m]=(0,g.useState)(!1),{pathname:J}=(0,$.useLocation)();return(0,g.useEffect)(()=>u(!1),[J]),(0,g.useEffect)(()=>{let e=()=>m(window.scrollY>12);return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,g.useEffect)(()=>(document.body.style.overflow=c?"hidden":"",()=>{document.body.style.overflow=""}),[c]),(0,g.useEffect)(()=>{let e=e=>"Escape"===e.key&&u(!1);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x,{$lifted:f||c,children:(0,p.jsxs)(w,{children:[(0,p.jsxs)(_,{to:"/","aria-label":`${o.name} — home`,children:[(0,p.jsx)(k,{src:o.logoMark||o.logoImage,alt:"","aria-hidden":!0}),(0,p.jsxs)(C,{children:[(0,p.jsx)(N,{children:o.name}),(0,p.jsx)(j,{children:n.label})]})]}),(0,p.jsx)(I,{"aria-label":"Primary",children:a.map(n=>{if(!n.children)return(0,p.jsx)(E,{children:(0,p.jsxs)(M,{to:n.href,end:"/"===n.href,children:[n.label,(0,p.jsx)(S,{"aria-hidden":!0})]})},n.href);let i=e===n.href,a=()=>t(e=>e===n.href?null:e);return(0,p.jsxs)(E,{onPointerEnter:e=>{r.current=e.pointerType,"mouse"===e.pointerType&&t(n.href)},onPointerLeave:e=>{"mouse"===e.pointerType&&a()},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||a()},children:[n.group?(0,p.jsxs)(T,{type:"button","aria-expanded":i,"aria-haspopup":"true",onClick:()=>{"mouse"===r.current?t(n.href):t(i?null:n.href)},onPointerDown:e=>{r.current=e.pointerType},onFocus:()=>t(n.href),children:[n.label,(0,p.jsx)(O,{size:14,$open:i,"aria-hidden":!0})]}):(0,p.jsxs)(M,{to:n.href,end:"/"===n.href,onFocus:()=>t(n.href),children:[n.label,(0,p.jsx)(O,{size:14,$open:i,"aria-hidden":!0}),(0,p.jsx)(S,{"aria-hidden":!0})]}),(0,p.jsx)(A,{$open:i,children:(0,p.jsx)(P,{children:n.children.map(e=>(0,p.jsx)("li",{children:(0,p.jsx)(F,{to:e.href,children:e.label})},e.href))})})]},n.href)})}),(0,p.jsxs)(z,{children:[l?(0,p.jsx)(D,{children:(0,p.jsxs)(b.ButtonAnchor,{href:s.url,target:"_blank",rel:"noreferrer",variant:"outline",size:"sm",children:[s.label,(0,p.jsx)(y.LuArrowUpRight,{size:14})]})}):(0,p.jsx)(D,{children:(0,p.jsx)(b.ButtonLink,{to:"/services",variant:"ghost",size:"sm",children:"Explore Services"})}),(0,p.jsxs)(b.ButtonLink,{to:"/contact",variant:"primary",size:"sm",children:["Talk to us",(0,p.jsx)(y.LuArrowRight,{size:14})]})]}),(0,p.jsx)(B,{type:"button",onClick:()=>u(e=>!e),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,"aria-controls":"mobile-nav",children:(0,p.jsxs)(U,{children:[(0,p.jsx)(G,{$shown:!c,$from:90,children:(0,p.jsx)(y.LuMenu,{size:20})}),(0,p.jsx)(G,{$shown:c,$from:-90,children:(0,p.jsx)(y.LuX,{size:20})})]})})]})}),(0,p.jsx)(V,{id:"mobile-nav","data-mobile-nav":!0,$open:c,"aria-hidden":!c,children:(0,p.jsxs)(H,{as:"nav","aria-label":"Mobile",children:[a.map((e,t)=>(0,p.jsxs)("div",{children:[(0,p.jsxs)(Z,{to:e.href,end:"/"===e.href,tabIndex:c?0:-1,$open:c,style:{transitionDelay:c?`${60+35*t}ms`:"0ms"},children:[(0,p.jsx)("span",{children:e.label}),(0,p.jsx)(W,{"aria-hidden":!0}),(0,p.jsx)(Y,{"aria-hidden":!0,children:(0,p.jsx)(y.LuArrowRight,{size:16})})]}),e.children&&(0,p.jsx)(R,{children:e.children.map(e=>(0,p.jsx)("li",{children:(0,p.jsx)(L,{to:e.href,tabIndex:c?0:-1,children:e.label})},e.href))})]},e.href)),(0,p.jsxs)(K,{children:[l&&(0,p.jsxs)(b.ButtonAnchor,{href:s.url,target:"_blank",rel:"noreferrer",variant:"accent",size:"lg",tabIndex:c?0:-1,children:[s.label,(0,p.jsx)(y.LuArrowUpRight,{size:16})]}),(0,p.jsxs)(b.ButtonLink,{to:"/contact",size:"lg",tabIndex:c?0:-1,children:["Talk to us",(0,p.jsx)(y.LuArrowRight,{size:16})]}),(0,p.jsx)(b.ButtonLink,{to:"/services",variant:"outline",size:"lg",tabIndex:c?0:-1,children:"Explore Services"}),(0,p.jsxs)(q,{href:`tel:${d.phone.replace(/\s/g,"")}`,tabIndex:c?0:-1,children:[(0,p.jsx)(y.LuPhone,{size:16,style:{color:"var(--color-gold-ink)"}}),(0,p.jsx)(X,{children:d.phone})]})]})]})})]})},Footer:function(){let{config:e,nav:t,hasPage:r}=(0,h.useAdvisor)(),{advisor:n,brand:i,contact:a,disclaimer:o,services:d,socialLinks:s,toolCopy:l}=e,c=e.clientPortal.enabled&&""!==e.clientPortal.url.trim(),u=r("tools")?l.filter(t=>e.tools.includes(t.key)):[];return(0,p.jsx)(ef,{children:(0,p.jsxs)(eh,{children:[(0,p.jsxs)(em,{children:[(0,p.jsxs)(eg,{children:[(0,p.jsxs)(ey,{to:"/",children:[(0,p.jsx)(ev,{}),(0,p.jsxs)(eb,{children:[(0,p.jsx)(ex,{children:i.name}),(0,p.jsx)(ew,{children:i.tagline})]})]}),(0,p.jsx)(e_,{children:n.bioShort}),(0,p.jsx)(ej,{children:s.map(e=>(0,p.jsx)(ek,{href:e.href,children:e.label},e.label))})]}),(0,p.jsx)(e$,{$span:2,children:(0,p.jsxs)(eH,{title:"Navigate",children:[t.map(e=>(0,p.jsx)("li",{children:(0,p.jsx)(eS,{to:e.href,children:e.label})},e.href)),c&&(0,p.jsx)("li",{children:(0,p.jsx)(eE,{href:e.clientPortal.url,target:"_blank",rel:"noreferrer",children:e.clientPortal.label})})]})}),(0,p.jsx)(e$,{$span:2,children:(0,p.jsx)(eH,{title:"Services",children:d.slice(0,6).map(e=>(0,p.jsx)("li",{children:(0,p.jsx)(eS,{to:"/services",children:e.title})},e.title))})}),(0,p.jsx)(e$,{$span:2,children:u.length>0&&(0,p.jsx)(eH,{title:"Tools",children:u.map(e=>(0,p.jsx)("li",{children:(0,p.jsx)(eS,{to:`/tools#${e.key}`,children:e.title})},e.title))})}),(0,p.jsxs)(e$,{$span:3,children:[(0,p.jsx)(eC,{children:"Get in touch"}),(0,p.jsxs)(eT,{children:[(0,p.jsx)("li",{children:(0,p.jsxs)(eO,{href:`tel:${a.phone.replace(/\s/g,"")}`,children:[(0,p.jsx)(eV,{children:(0,p.jsx)(y.LuPhone,{size:16})}),(0,p.jsx)(eF,{children:a.phone})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)(eO,{href:a.whatsappLink,target:"_blank",rel:"noreferrer",children:[(0,p.jsx)(eV,{children:(0,p.jsx)(y.LuMessageCircle,{size:16})}),(0,p.jsx)("span",{children:"WhatsApp"})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)(eA,{href:`mailto:${a.email}`,children:[(0,p.jsx)(eV,{children:(0,p.jsx)(y.LuMail,{size:16})}),(0,p.jsx)("span",{children:a.email})]})}),(0,p.jsxs)(eP,{children:[(0,p.jsx)(eV,{children:(0,p.jsx)(y.LuMapPin,{size:16})}),(0,p.jsxs)(eR,{children:[a.officeLine2,(0,p.jsx)("br",{}),a.officeCity]})]})]})]})]}),(0,p.jsxs)(eL,{children:[(0,p.jsx)(ep,{}),(0,p.jsx)(eM,{children:"Statutory disclaimer"}),(0,p.jsx)(ez,{children:o}),(0,p.jsx)(eD,{})]}),(0,p.jsxs)(eB,{children:[(0,p.jsxs)("p",{children:["© ",new Date().getFullYear()," ",i.name,". ",i.arn," · EUIN"," ",i.euin]}),(0,p.jsx)(eU,{children:et.LEGAL_KEYS.map(e=>(0,p.jsx)(eG,{to:et.LEGAL_PATHS[e],children:et.LEGAL_LABELS[e]},e))})]})]})})},PageHeader:function({eyebrow:e,title:t,lead:r,children:n}){return(0,p.jsxs)(eY,{"data-page-header":!0,children:[(0,p.jsx)(eZ,{"aria-hidden":!0}),(0,p.jsxs)(eK,{children:[(0,p.jsxs)(eq,{"aria-label":"Breadcrumb",children:[(0,p.jsx)(eX,{to:"/",children:"Home"}),(0,p.jsx)(y.LuChevronRight,{size:14,"aria-hidden":!0}),(0,p.jsx)(eJ,{children:e})]}),(0,p.jsxs)(eQ,{children:[(0,p.jsx)(eW.Eyebrow,{children:e}),(0,p.jsx)(e0,{children:t}),r&&(0,p.jsx)(e1,{children:r}),n&&(0,p.jsx)(e2,{children:n})]})]})]})},ServiceGrid:ra,pageParts:{Band:function({tone:e="default",className:t,children:r,id:n}){return(0,p.jsx)(b.Section,{tone:{default:"paper",alt:"sand",contrast:"surface"}[e],id:n,className:t,children:(0,p.jsx)(b.Shell,{children:r})})},Heading:function(e){return(0,p.jsx)(b.SectionHeading,{...e})},ArticleIndex:function({featured:e,items:t}){return(0,p.jsxs)(p.Fragment,{children:[e&&(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(cz,{children:(0,p.jsx)(ch,{insight:e,featured:!0})})}),(0,p.jsx)(cD,{children:t.map((e,t)=>(0,p.jsx)(tv.Reveal,{delay:t%3*80,children:(0,p.jsx)(ch,{insight:e})},e.slug))})]})},Faqs:function({items:e}){return(0,p.jsx)(cm,{children:e.map((e,t)=>(0,p.jsx)(tv.Reveal,{delay:70*t,children:(0,p.jsxs)(cv,{children:[(0,p.jsxs)(cy,{children:[e.q,(0,p.jsxs)(c$,{"aria-hidden":!0,children:[(0,p.jsx)(cg,{}),(0,p.jsx)(cg,{$vertical:!0,"data-vertical":!0})]})]}),(0,p.jsx)(cb,{children:e.a})]})},e.q))})},Timeline:function({items:e}){return(0,p.jsxs)(cx,{children:[(0,p.jsx)(cw,{"aria-hidden":!0}),e.map((e,t)=>(0,p.jsx)(c_,{forwardedAs:"li",delay:90*t,children:(0,p.jsxs)(cj,{children:[(0,p.jsx)(ck,{children:e.year}),(0,p.jsx)(cC,{}),(0,p.jsxs)(cN,{children:[(0,p.jsx)(cI,{children:e.year}),(0,p.jsx)(cS,{children:e.title}),(0,p.jsx)(cE,{children:e.body})]})]})},e.year))]})},ServiceDetail:function({service:e}){let t=(0,t4.icon)(e.icon);return(0,p.jsxs)(cT,{id:e.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),children:[(0,p.jsxs)(cO,{children:[(0,p.jsx)(cP,{children:(0,p.jsx)(t,{size:20,strokeWidth:1.6})}),(0,p.jsx)(cF,{children:e.title})]}),(0,p.jsxs)(cA,{children:[(0,p.jsx)(cR,{children:e.detail||e.description}),(e.highlights?.length??0)>0&&(0,p.jsx)(cL,{children:e.highlights?.map(e=>(0,p.jsxs)(cM,{children:[(0,p.jsx)(y.LuCheck,{size:16,strokeWidth:2,style:{marginTop:"0.125rem",flexShrink:0,color:"var(--color-gold-ink)"}}),e]},e))})]})]})}},sections:{hero:function(){let{advisor:e,brand:t,images:r,hero:n}=(0,h.useConfig)(),i=(0,g.useRef)(null);return(0,e5.useTilt)(i,{max:11,lift:0,ease:.09}),(0,p.jsxs)(e4,{children:[(0,p.jsx)(e9,{}),(0,p.jsx)(e8,{"aria-hidden":!0}),(0,p.jsxs)(e7,{children:[(0,p.jsxs)(e6,{children:[(0,p.jsxs)(tt,{children:[(0,p.jsx)(y.LuBadgeCheck,{size:14}),n.badge]}),(0,p.jsxs)(tr,{children:[n.titleTop,(0,p.jsx)("br",{}),(0,p.jsx)(tn,{children:n.titleBottom})]}),(0,p.jsx)(ti,{children:n.lead}),(0,p.jsx)(ta,{$delay:220,children:(0,p.jsxs)("div",{children:[(0,p.jsx)(to,{children:e.name}),(0,p.jsxs)(td,{children:[e.title,t.name!==e.name&&` \xb7 ${t.name}`]})]})}),(0,p.jsxs)(ts,{$delay:280,children:[(0,p.jsxs)(tl,{to:"/contact",size:"lg",children:[n.primaryCta,(0,p.jsx)(y.LuArrowRight,{size:16})]}),(0,p.jsx)(tl,{to:"/services",variant:"outline",size:"lg",children:n.secondaryCta})]})]}),(0,p.jsx)(tc,{children:(0,p.jsxs)(tu,{ref:i,"data-tilt":!0,children:[(0,p.jsx)(tp,{"aria-hidden":!0}),(0,p.jsx)(tf,{"aria-hidden":!0}),(0,p.jsx)(th,{children:(0,p.jsx)(tm,{src:r.portrait,alt:t.name===e.name?`${e.name}, ${e.title}`:`${e.name}, ${e.title} at ${t.name}`,priority:!0})}),(0,p.jsxs)(tg,{"aria-hidden":!0,children:[(0,p.jsx)(t$,{}),(0,p.jsx)(ty,{children:t.arn})]})]})})]})]})},trust:function(){let{stats:e}=(0,h.useConfig)(),t=(e.length-1)/2;return(0,p.jsxs)(tb,{children:[(0,p.jsx)(tx,{"aria-hidden":!0}),(0,p.jsx)(tw,{"aria-hidden":!0}),(0,p.jsx)(b.Shell,{children:(0,p.jsx)(t_,{children:e.map((e,r)=>(0,p.jsx)(tj,{delay:90*r,$offset:r-t,children:(0,p.jsxs)(tk,{children:[(0,p.jsx)(tC,{children:e.value}),(0,p.jsx)(tN,{children:e.label})]})},e.label))})})]})},about:function(){let{advisor:e,images:t}=(0,h.useConfig)(),r=tS();return(0,p.jsx)(b.Section,{tone:"paper",children:(0,p.jsxs)(tE,{children:[(0,p.jsx)(tT,{children:(0,p.jsx)(tO,{children:(0,p.jsx)(tA,{children:(0,p.jsx)(tP,{src:t.meeting,alt:`${e.name} meeting with clients`})})})}),(0,p.jsxs)(tF,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:r.about.eyebrow,title:"Helping families make informed investment decisions."})}),(0,p.jsx)(tv.Reveal,{delay:80,children:(0,p.jsx)(tR,{children:e.bioLong.map((e,t)=>(0,p.jsx)("p",{children:e},t))})}),(0,p.jsx)(tv.Reveal,{delay:140,children:(0,p.jsxs)(tL,{children:[(0,p.jsxs)(tM,{children:["“",e.philosophy,"”"]}),(0,p.jsxs)(tz,{children:["— ",e.name,", ",e.title]})]})}),(0,p.jsx)(tv.Reveal,{delay:200,children:(0,p.jsx)(tD,{children:e.qualifications.map(e=>(0,p.jsxs)(tB,{children:[(0,p.jsx)(tU,{children:(0,p.jsx)(y.LuCheck,{size:10,strokeWidth:3.5})}),(0,p.jsx)(tG,{children:e})]},e))})}),(0,p.jsx)(tv.Reveal,{delay:260,children:(0,p.jsxs)(tV,{to:"/about",variant:"outline",size:"md",children:["Know More About Me",(0,p.jsx)(y.LuArrowRight,{size:16})]})})]})]})})},team:function(){let{team:e}=(0,h.useConfig)();return 0===e.members.length?null:(0,p.jsx)(b.Section,{tone:"surface",id:"team",children:(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:e.eyebrow,title:e.title,lead:e.lead})}),(0,p.jsx)(tq,{children:e.members.map((e,t)=>(0,p.jsxs)(tv.Reveal,{as:"li",delay:t%3*80,children:[(0,p.jsx)(tX,{src:e.photo,name:e.name,rounded:"lg"}),(0,p.jsxs)(tJ,{children:[(0,p.jsx)(tQ,{children:e.name}),(0,p.jsx)(t0,{children:e.role}),e.bio&&(0,p.jsx)(t1,{children:e.bio}),e.credentials.length>0&&(0,p.jsx)(t2,{children:e.credentials.map(e=>(0,p.jsx)(t3,{children:e},e))})]})]},e.name))})]})})},services:function(){let e=tS();return(0,p.jsxs)(b.Section,{tone:"surface",id:"services",children:[(0,p.jsx)(b.Glow,{$x:"12%",$y:"0%",$tone:"violet","aria-hidden":!0}),(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:e.services.eyebrow,title:e.services.title,lead:e.services.lead,action:(0,p.jsxs)(b.ButtonLink,{to:"/services",variant:"outline",size:"md",children:["All Services",(0,p.jsx)(y.LuArrowRight,{size:16})]})})}),(0,p.jsx)(ra,{})]})]})},tools:function(){let{config:e,hasTool:t,hasPage:r}=(0,h.useAdvisor)(),n=tS(),i=e.toolCopy.filter(e=>t(e.key)),a=t("sip"),o=i.filter(e=>"sip"!==e.key);return 0!==i.length&&r("tools")?(0,p.jsx)(b.Section,{tone:"sand",id:"tools",children:(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:n.tools.eyebrow,title:n.tools.title,lead:n.tools.lead})}),(0,p.jsxs)(rA,{children:[a&&(0,p.jsx)(rP,{children:(0,p.jsx)(rO,{})}),(0,p.jsxs)(rF,{$narrow:a,children:[(0,p.jsx)(rR,{children:o.map((e,t)=>(0,p.jsx)(tv.Reveal,{delay:70*t,as:"li",children:(0,p.jsxs)(rz,{to:`/tools#${e.key}`,children:[(0,p.jsx)(rL,{children:(0,p.jsx)(rT,{name:e.icon})}),(0,p.jsxs)(rD,{children:[(0,p.jsx)(rB,{children:e.title}),(0,p.jsx)(rU,{children:e.description})]}),(0,p.jsxs)(rG,{children:[e.cta,(0,p.jsx)(rM,{size:14})]}),(0,p.jsx)(rV,{size:16,"aria-hidden":!0})]})},e.title))}),(0,p.jsx)(tv.Reveal,{delay:140,children:(0,p.jsxs)(rH,{to:"/tools",variant:"outline",size:"md",children:["View All Investment Tools",(0,p.jsx)(y.LuArrowRight,{size:16})]})})]})]})]})}):null},why:function(){let{advisor:e,whyChoose:t}=(0,h.useConfig)(),r=tS();return(0,p.jsx)(rW,{tone:"navy",children:(0,p.jsxs)(rY,{children:[(0,p.jsx)(rZ,{children:(0,p.jsxs)(rK,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{tone:"dark",eyebrow:r.why.eyebrow,title:r.why.title,lead:r.why.lead})}),(0,p.jsx)(tv.Reveal,{delay:120,children:(0,p.jsxs)(rq,{children:[(0,p.jsxs)(rX,{children:["“",e.philosophy,"”"]}),(0,p.jsxs)(rJ,{children:[e.name," · ",e.title]})]})}),(0,p.jsx)(tv.Reveal,{delay:180,children:(0,p.jsxs)(rQ,{to:"/contact",variant:"onDark",size:"md",children:["Talk to us",(0,p.jsx)(y.LuArrowRight,{size:16})]})})]})}),(0,p.jsx)(r0,{children:t.map((e,t)=>{let r=(0,t4.icon)(e.icon);return(0,p.jsx)("li",{children:(0,p.jsx)(tv.Reveal,{delay:t%2*90,children:(0,p.jsx)(t5.Tilt,{pad:"0",tone:"onDark",max:6,lift:16,glow:!1,children:(0,p.jsxs)(r1,{children:[(0,p.jsx)(t5.Depth,{$z:14,children:(0,p.jsx)(r2,{"aria-hidden":!0})}),(0,p.jsx)(t5.Depth,{$z:34,children:(0,p.jsxs)(r3,{children:[(0,p.jsx)(r,{size:18,strokeWidth:1.6,style:{flexShrink:0,color:"var(--color-gold)"}}),(0,p.jsx)(r5,{children:e.title})]})}),(0,p.jsx)(t5.Depth,{$z:18,children:(0,p.jsx)(r4,{children:e.description})})]})})})},e.title)})})]})})},goals:function(){let e=(0,h.useConfig)(),t=tS(),r=e.goals?.items?.length?e.goals.items:e.investmentGoals.filter(e=>!/not sure|other|^n\/?a$/i.test(e.trim())).map(e=>({label:e,icon:na.find(([t])=>t.test(e))?.[1]??"Target"}));return 0===r.length?null:(0,p.jsxs)(b.Section,{tone:"sand",id:"goals",children:[(0,p.jsx)(b.Glow,{$x:"82%",$y:"18%",$tone:"magenta","aria-hidden":!0}),(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:t.goals.eyebrow,title:t.goals.title,lead:t.goals.lead||void 0})}),(0,p.jsx)(tv.Reveal,{delay:90,style:{marginTop:"2.25rem"},children:(0,p.jsx)(ni,{items:r,label:"Investment goals",faceWidth:"clamp(26rem, 34vw, 32rem)",render:(e,t)=>{let n=(0,t4.icon)(e.icon);return(0,p.jsxs)(no,{children:[(0,p.jsx)(nd,{children:(0,p.jsx)(n,{size:22,strokeWidth:1.6})}),(0,p.jsxs)(ns,{children:[String(t+1).padStart(2,"0")," / ",String(r.length).padStart(2,"0")]}),(0,p.jsx)(nl,{children:e.label}),(0,p.jsx)(nc,{children:"Tell me what this one is worth and when you need it, and we will work backwards to the monthly number that gets you there."}),(0,p.jsxs)(nu,{to:"/contact",children:["Plan for this",(0,p.jsx)(y.LuArrowRight,{size:15,"aria-hidden":!0})]})]})}})})]})]})},process:function(){let{process:e}=(0,h.useConfig)(),t=tS();return(0,p.jsx)(b.Section,{tone:"surface",id:"process",children:(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:t.process.eyebrow,title:t.process.title,lead:t.process.lead})}),(0,p.jsx)(nb,{children:e.map((e,t)=>(0,p.jsx)(nx,{$depth:t,children:(0,p.jsx)(tv.Reveal,{delay:110*t,children:(0,p.jsx)(t5.Tilt,{pad:"0",max:6,lift:18,children:(0,p.jsxs)(nw,{children:[(0,p.jsx)(n_,{children:(0,p.jsx)(nj,{"aria-hidden":!0})}),(0,p.jsxs)(nk,{children:[(0,p.jsx)(t5.Depth,{$z:-16,children:(0,p.jsx)(nC,{children:e.step})}),(0,p.jsx)(t5.Depth,{$z:34,children:(0,p.jsx)(nN,{children:e.title})}),(0,p.jsx)(t5.Depth,{$z:16,children:(0,p.jsx)(nI,{children:e.description})})]})]})})})},e.step))}),(0,p.jsx)(tv.Reveal,{delay:120,children:(0,p.jsx)(nS,{})})]})})},partners:function(){let{partners:e}=(0,h.useConfig)();return 0===e.items.length?null:(0,p.jsxs)(b.Section,{tone:"sand",id:"partners",children:[(0,p.jsx)(b.Glow,{$x:"88%",$y:"10%",$tone:"cyan","aria-hidden":!0}),(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:e.eyebrow,title:e.title,lead:e.lead})}),(0,p.jsx)(n0,{children:e.items.map((e,t)=>(0,p.jsx)(n1,{$col:t%4-1.5,children:(0,p.jsx)(tv.Reveal,{delay:45*Math.min(t,8),children:(0,p.jsx)(n2,{children:e.logo?(0,p.jsx)(n3,{src:e.logo,alt:e.name,loading:"lazy"}):(0,p.jsx)(n5,{children:e.name})})})},e.name))})]})]})},insights:function(){let{insights:e}=(0,h.useConfig)(),t=tS();return 0===e.length?null:(0,p.jsx)(b.Section,{tone:"paper",id:"insights",children:(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:t.insights.eyebrow,title:t.insights.title,lead:t.insights.lead,action:(0,p.jsxs)(b.ButtonLink,{to:"/insights",variant:"outline",size:"md",children:["View All Insights",(0,p.jsx)(y.LuArrowRight,{size:16})]})})}),(0,p.jsx)(nG,{children:e.slice(0,3).map((e,t)=>(0,p.jsx)(tv.Reveal,{delay:90*t,children:(0,p.jsx)(nU,{insight:e})},e.slug))})]})})},testimonials:function(){let{testimonials:e}=(0,h.useConfig)(),t=tS();return 0===e.length?null:(0,p.jsx)(b.Section,{tone:"sand",children:(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:t.testimonials.eyebrow,title:t.testimonials.title,lead:t.testimonials.lead})}),(0,p.jsx)(nV,{children:e.map((e,t)=>(0,p.jsxs)(nH,{delay:100*t,children:[(0,p.jsx)(nW,{"aria-hidden":!0,children:"“"}),(0,p.jsx)(nY,{children:(0,p.jsx)(nZ,{children:e.quote})}),(0,p.jsxs)(nK,{children:[(0,p.jsx)(nq,{"aria-hidden":!0,children:e.initials}),(0,p.jsxs)("span",{children:[(0,p.jsx)(nX,{children:e.name}),(0,p.jsx)(nJ,{children:e.city})]})]})]},e.name))}),(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(nQ,{children:"Testimonials reflect individual client experiences and are not a guarantee of future results. Mutual fund investments are subject to market risks."})})]})})},referral:function(){let{referral:e}=(0,h.useConfig)();return(0,p.jsx)(n9,{tone:"paper",children:(0,p.jsx)(b.Shell,{children:(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(t5.Tilt,{pad:"0",max:4,lift:14,children:(0,p.jsx)(n8,{children:(0,p.jsxs)(n7,{children:[(0,p.jsx)(t5.Depth,{$z:26,children:(0,p.jsxs)(n6,{children:[(0,p.jsx)(ie,{children:e.eyebrow}),(0,p.jsx)(it,{children:e.title}),(0,p.jsx)(ii,{children:e.lead})]})}),(0,p.jsx)(t5.Depth,{$z:46,children:(0,p.jsxs)(ir,{url:e.ctaUrl,children:[e.ctaLabel,(0,p.jsx)(y.LuArrowRight,{size:16})]})})]})})})})})})},downloads:function(){let{downloads:e}=(0,h.useConfig)(),t=e.items.filter(e=>e.href.trim());return 0===t.length?null:(0,p.jsx)(b.Section,{tone:"paper",id:"downloads",children:(0,p.jsxs)(b.Shell,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:e.eyebrow,title:e.title,lead:e.lead})}),(0,p.jsx)(ia,{children:t.map((e,t)=>(0,p.jsx)(tv.Reveal,{as:"li",delay:t%2*80,children:(0,p.jsxs)(io,{href:e.href,...n4(e.href)?{target:"_blank",rel:"noreferrer"}:{download:""},children:[(0,p.jsx)(id,{children:(0,p.jsx)(y.LuArrowDownToLine,{size:18})}),(0,p.jsxs)(is,{children:[(0,p.jsxs)(il,{children:[(0,p.jsx)(ic,{children:e.title}),e.kind&&(0,p.jsx)(iu,{children:e.kind})]}),e.description&&(0,p.jsx)(ip,{children:e.description})]})]})},e.title))})]})})},leadCta:function(){let{config:e,hasPage:t}=(0,h.useAdvisor)(),r=tS(),{images:n}=e;return(0,p.jsxs)(ih,{children:[n.skyline&&(0,p.jsx)(im,{src:n.skyline,alt:"","aria-hidden":!0,loading:"lazy"}),(0,p.jsx)(ig,{"aria-hidden":!0}),(0,p.jsx)(i$,{"aria-hidden":!0}),(0,p.jsxs)(iy,{children:[(0,p.jsxs)(tv.Reveal,{children:[r.leadCta.eyebrow&&(0,p.jsx)(iv,{tone:"dark",children:r.leadCta.eyebrow}),(0,p.jsx)(ib,{children:r.leadCta.title}),(0,p.jsx)(ix,{children:r.leadCta.lead})]}),(0,p.jsx)(tv.Reveal,{delay:100,children:(0,p.jsxs)(iw,{children:[(0,p.jsxs)(b.ButtonLink,{to:"/contact",variant:"accent",size:"lg",children:["Talk to us",(0,p.jsx)(y.LuArrowRight,{size:16})]}),t("tools")&&(0,p.jsxs)(b.ButtonLink,{to:"/tools#sip",variant:"onDark",size:"lg",children:[(0,p.jsx)(y.LuCalculator,{size:16}),"Calculate SIP"]})]})})]})]})},contact:function({heading:e=!0}){let{contact:t}=(0,h.useConfig)(),r=tS(),n=[{icon:y.LuPhone,label:"Call",value:t.phone,href:`tel:${t.phone.replace(/\s/g,"")}`,tnum:!0},{icon:y.LuMessageCircle,label:"WhatsApp",value:"Message on WhatsApp",href:t.whatsappLink,external:!0},{icon:y.LuMail,label:"Email",value:t.email,href:`mailto:${t.email}`}];return(0,p.jsx)(b.Section,{tone:"paper",id:"contact",children:(0,p.jsxs)(b.Shell,{children:[e&&(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(b.SectionHeading,{eyebrow:r.contact.eyebrow,title:r.contact.title,lead:r.contact.lead})}),(0,p.jsxs)(l0,{$spaced:e,children:[(0,p.jsxs)(l1,{children:[(0,p.jsx)(tv.Reveal,{children:(0,p.jsx)(l2,{children:n.map(e=>(0,p.jsx)("li",{children:(0,p.jsxs)(l5,{href:e.href,...e.external?{target:"_blank",rel:"noreferrer"}:{},children:[(0,p.jsx)(l3,{children:(0,p.jsx)(e.icon,{size:18,strokeWidth:1.7})}),(0,p.jsxs)(l4,{children:[(0,p.jsx)(l9,{children:e.label}),(0,p.jsx)(l8,{$tnum:e.tnum,children:e.value})]})]})},e.label))})}),(0,p.jsx)(tv.Reveal,{delay:100,children:(0,p.jsxs)(l7,{children:[(0,p.jsxs)(l6,{children:[(0,p.jsx)(l3,{children:(0,p.jsx)(y.LuMapPin,{size:18,strokeWidth:1.7})}),(0,p.jsxs)("div",{children:[(0,p.jsx)(l9,{children:"Office"}),(0,p.jsxs)(ce,{children:[t.officeLine1,(0,p.jsx)("br",{}),(0,p.jsx)(ct,{children:t.officeLine2}),(0,p.jsx)("br",{}),(0,p.jsx)(ct,{children:t.officeCity})]})]})]}),(0,p.jsxs)(cr,{children:[(0,p.jsx)(y.LuClock,{size:16,strokeWidth:1.7,style:{flexShrink:0,color:"var(--color-gold-ink)"}}),t.hours]})]})}),(0,p.jsx)(tv.Reveal,{delay:160,children:(0,p.jsx)(cn,{})})]}),(0,p.jsx)(ci,{delay:80,children:(0,p.jsx)(lY,{})})]})]})})}}};function cU({config:e,children:t}){return(0,p.jsx)(h.AdvisorProvider,{config:e,children:(0,p.jsx)(m.TemplateProvider,{template:cB,children:t})})}function cG(){let{pathname:e,hash:t}=(0,$.useLocation)();return(0,g.useEffect)(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")},[]),(0,g.useEffect)(()=>{if(t){let e=document.getElementById(t.slice(1));if(e)return void requestAnimationFrame(()=>e.scrollIntoView({behavior:"smooth",block:"start"}))}window.scrollTo({top:0,left:0,behavior:"instant"})},[e,t]),null}let cV=f.default.div.withConfig({displayName:"shell__Page",componentId:"sc-854e5662-0"})`
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
`,cH=f.default.main.withConfig({displayName:"shell__Main",componentId:"sc-854e5662-1"})`
  flex: 1;
`,cW=f.default.a.withConfig({displayName:"shell__SkipLink",componentId:"sc-854e5662-2"})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;

  &:focus {
    position: absolute;
    left: 1rem;
    top: 1rem;
    z-index: 100;
    width: auto;
    height: auto;
    clip-path: none;
    border-radius: 999px;
    background: var(--color-navy);
    padding: 0.75rem 1.25rem;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-paper);
  }
`;function cY({children:e}){let{Header:t,Footer:r}=(0,m.useTemplate)();return(0,p.jsxs)(cV,{children:[(0,p.jsx)(cW,{href:"#main",children:"Skip to content"}),(0,p.jsx)(t,{}),(0,p.jsx)(cH,{id:"main",children:e}),(0,p.jsx)(r,{})]})}e.s(["SiteShell",0,function({config:e,children:t}){return(0,p.jsxs)(cU,{config:e,children:[(0,p.jsx)(cG,{}),(0,p.jsx)(cY,{children:t})]})}],52787)}]);