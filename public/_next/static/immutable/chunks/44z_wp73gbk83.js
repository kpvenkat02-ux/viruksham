(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return v},useLinkStatus:function(){return b}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(90809),i=e.r(43476),l=o._(e.r(71645)),s=e.r(95057),u=e.r(8372),c=e.r(18581),d=e.r(18967),f=e.r(5550),p=e.r(88540),h=e.r(91949),m=e.r(73668),g=e.r(9396);function v(t){var r;let n,a,o,[v,b]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),x=(0,l.useRef)(null),{href:_,as:w,children:P,prefetch:j=null,passHref:C,replace:k,shallow:O,scroll:$,onClick:T,onMouseEnter:S,onTouchStart:N,legacyBehavior:L=!1,onNavigate:R,transitionTypes:E,ref:M,unstable_dynamicOnHover:F,...A}=t;n=P,L&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let B=l.default.useContext(u.AppRouterContext),I=!1!==j,D=!1===j?"none":!0===j?"full":"auto",U="none"!==D?"auto"===D?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,H="string"==typeof(r=w||_)?r:(0,s.formatUrl)(r);if(L){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=l.default.Children.only(n)}let z=L?a&&"object"==typeof a&&a.ref:M,K,V=l.default.useCallback(e=>(null!==B&&(x.current=(0,h.mountLinkInstance)(e,H,B,U,I,b,K)),()=>{x.current&&((0,h.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,h.unmountPrefetchableInstance)(e)}),[I,H,B,U,b,K]),W={ref:(0,c.useMergedRef)(V,z),onClick(t){L||"function"!=typeof T||T(t),L&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!B||t.defaultPrevented||function(t,r,n,a,o,i,s,u="none"){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);l.default.startTransition(()=>{f(r,a?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,s,u)})}}(t,H,x,k,$,R,E,D)},onMouseEnter(e){L||"function"!=typeof S||S(e),L&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),B&&I&&(0,h.onNavigationIntent)(e.currentTarget,!0===F)},onTouchStart:function(e){L||"function"!=typeof N||N(e),L&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),B&&I&&(0,h.onNavigationIntent)(e.currentTarget,!0===F)}};return(0,d.isAbsoluteUrl)(H)?W.href=H:L&&!C&&("a"!==a.type||"href"in a.props)||(W.href=(0,f.addBasePath)(H)),o=L?l.default.cloneElement(a,W):(0,i.jsx)("a",{...A,...W,children:n}),(0,i.jsx)(y.Provider,{value:v,children:o})}let y=(0,l.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,l.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},28298,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useRouterBFCache",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t,r){let[a,o]=(0,n.useState)(()=>({tree:e,cacheNode:t,stateKey:r,next:null}));if(a.tree===e)return a;let i={tree:e,cacheNode:t,stateKey:r,next:null},l=1,s=a,u=i;for(;null!==s&&l<1;){if(s.stateKey===r){u.next=s.next;break}{l++;let e={tree:s.tree,cacheNode:s.cacheNode,stateKey:s.stateKey,next:null};u.next=e,u=e}s=s.next}return o(i),i}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},47257,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ClientPageRoot",{enumerable:!0,get:function(){return u}});let n=e.r(43476),a=e.r(8372),o=e.r(71645),i=e.r(33906),l=e.r(61994),s=e.r(42903);function u({Component:e,serverProvidedParams:t}){let r,c;if(null!==t)r=t.searchParams,c=t.params;else{let e=(0,o.use)(a.LayoutRouterContext);c=null!==e?e.parentParams:{},r=(0,i.urlSearchParamsToParsedUrlQuery)((0,o.use)(l.SearchParamsContext))}let d=(0,s.createClientSearchParams)(r),f=(0,s.createClientParams)(c);return(0,n.jsx)(e,{params:f,searchParams:d})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92825,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ClientSegmentRoot",{enumerable:!0,get:function(){return l}});let n=e.r(43476),a=e.r(8372),o=e.r(71645),i=e.r(42903);function l({Component:e,slots:t,serverProvidedParams:r}){let s;if(null!==r)s=r.params;else{let e=(0,o.use)(a.LayoutRouterContext);s=null!==e?e.parentParams:{}}let u=(0,i.createClientParams)(s);return(0,n.jsx)(e,{...t,params:u})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},68017,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HTTPAccessFallbackBoundary",{enumerable:!0,get:function(){return c}});let n=e.r(90809),a=e.r(43476),o=n._(e.r(71645)),i=e.r(90373),l=e.r(54394),s=e.r(8372);class u extends o.default.Component{constructor(e){super(e),this.state={triggeredStatus:void 0,previousPathname:e.pathname}}componentDidCatch(){}static getDerivedStateFromError(e){if((0,l.isHTTPAccessFallbackError)(e))return{triggeredStatus:(0,l.getAccessFallbackHTTPStatus)(e)};throw e}static getDerivedStateFromProps(e,t){return e.pathname!==t.previousPathname&&t.triggeredStatus?{triggeredStatus:void 0,previousPathname:e.pathname}:{triggeredStatus:t.triggeredStatus,previousPathname:e.pathname}}render(){let{notFound:e,forbidden:t,unauthorized:r,children:n}=this.props,{triggeredStatus:o}=this.state,i={[l.HTTPAccessErrorStatus.NOT_FOUND]:e,[l.HTTPAccessErrorStatus.FORBIDDEN]:t,[l.HTTPAccessErrorStatus.UNAUTHORIZED]:r};if(o){let s=o===l.HTTPAccessErrorStatus.NOT_FOUND&&e,u=o===l.HTTPAccessErrorStatus.FORBIDDEN&&t,c=o===l.HTTPAccessErrorStatus.UNAUTHORIZED&&r;return s||u||c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"robots",content:"noindex"}),!1,i[o]]}):n}return n}}function c({notFound:e,forbidden:t,unauthorized:r,children:n}){let l=(0,i.useUntrackedPathname)(),d=(0,o.useContext)(s.MissingSlotContext);return e||t||r?(0,a.jsx)(u,{pathname:l,notFound:e,forbidden:t,unauthorized:r,missingSlots:d,children:n}):(0,a.jsx)(a.Fragment,{children:n})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},22976,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={InstantValidationBoundaryContext:function(){return o},PlaceValidationBoundaryBelowThisLevel:function(){return i},RenderValidationBoundaryAtThisLevel:function(){return l},SlotMarker:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=null,i=null,l=null,s=null;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},77694,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={InstantValidationBoundaryContext:function(){return o.InstantValidationBoundaryContext},PlaceValidationBoundaryBelowThisLevel:function(){return o.PlaceValidationBoundaryBelowThisLevel},RenderValidationBoundaryAtThisLevel:function(){return o.RenderValidationBoundaryAtThisLevel},SlotMarker:function(){return o.SlotMarker}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(22976);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},39756,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={LoadingBoundaryProvider:function(){return C},default:function(){return O}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(55682),i=e.r(90809),l=e.r(43476),s=i._(e.r(71645)),u=o._(e.r(74080)),c=e.r(8372),d=e.r(1244),f=e.r(72383),p=e.r(91915),h=e.r(58442),m=e.r(68017);e.r(77694);let g=e.r(70725),v=e.r(28298);e.r(74180);let y=e.r(61994),b=e.r(33906),x=e.r(95871);u.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(e,t,r){let n=e.getClientRects();if(0===n.length)return 0;let a=1/0;for(let e=0;e<n.length;e++){let t=n[e];t.top<a&&(a=t.top)}return a>=r()&&a<=t?1:2}s.default.Component;let w=function(e){let t=s.default.useRef(null);return(0,s.useLayoutEffect)(()=>{let{focusAndScrollRef:r,cacheNode:n}=e,a=r.forceScroll?r.scrollRef:n.scrollRef;if(null===a||!a.current)return;let o=null,i=r.hashFragment;if(i){var l;if(null===(o="top"===(l=i)?document.body:document.getElementById(l)??document.getElementsByName(l)[0]??null)){a.current=!1,r.onlyHashChange=!1,r.hashFragment=null;return}}else o=t.current;if(null===o)return;let s=!1;(0,p.disableSmoothScrollDuringRouteTransition)(()=>{let e=document.documentElement,t=null,r=null,n=null,l=()=>{var r,a;let o,i;return null===n&&(r=e,a=t,n=!Number.isFinite(i=Number.parseFloat(o=getComputedStyle(r).scrollPaddingTop))||i<0?0:o.endsWith("px")?i:o.endsWith("%")?i/100*a:0),n};(i||(t=e.clientHeight,0!==(r=_(o,t,l))))&&((s=!0,a.current=!1,i)?o.scrollIntoView():1!==r&&(e.scrollTop=0,2===_(o,t,l)&&o.scrollIntoView()))},{dontForceLayout:!0,onlyHashChange:r.onlyHashChange}),s&&(r.onlyHashChange=!1,r.hashFragment=null)},void 0),(0,l.jsx)(s.Fragment,{ref:t,children:e.children})};function P({children:e,cacheNode:t}){let r=(0,s.useContext)(c.GlobalLayoutRouterContext);if(!r)throw Object.defineProperty(Error("invariant global layout router not mounted"),"__NEXT_ERROR_CODE",{value:"E473",enumerable:!1,configurable:!0});return(0,l.jsx)(w,{focusAndScrollRef:r.focusAndScrollRef,cacheNode:t,children:e})}function j({tree:e,segmentPath:t,debugNameContext:r,cacheNode:n,params:a,url:o,isActive:i}){let u,f=(0,s.useContext)(c.GlobalLayoutRouterContext);if((0,s.useContext)(y.NavigationPromisesContext),!f)throw Object.defineProperty(Error("invariant global layout router not mounted"),"__NEXT_ERROR_CODE",{value:"E473",enumerable:!1,configurable:!0});let p=null!==n?n:(0,s.use)(d.unresolvedThenable),h=null!==p.prefetchRsc?p.prefetchRsc:p.rsc,m=(0,s.useDeferredValue)(p.rsc,h);if((0,x.isDeferredRsc)(m)){let e=(0,s.use)(m);null===e&&(0,s.use)(d.unresolvedThenable),u=e}else null===m&&(0,s.use)(d.unresolvedThenable),u=m;let g=u;return(0,l.jsx)(c.LayoutRouterContext.Provider,{value:{parentTree:e,parentCacheNode:p,parentSegmentPath:t,parentParams:a,parentLoadingData:null,debugNameContext:r,url:o,isActive:i},children:g})}function C({loading:e,children:t}){let r=(0,s.use)(c.LayoutRouterContext);return null===r?t:(0,l.jsx)(c.LayoutRouterContext.Provider,{value:{parentTree:r.parentTree,parentCacheNode:r.parentCacheNode,parentSegmentPath:r.parentSegmentPath,parentParams:r.parentParams,parentLoadingData:e,debugNameContext:r.debugNameContext,url:r.url,isActive:r.isActive},children:t})}function k({name:e,loading:t,children:r}){if(null!==t){let n=t[0],a=t[1],o=t[2];return(0,l.jsx)(s.Suspense,{name:e,fallback:(0,l.jsxs)(l.Fragment,{children:[a,o,n]}),children:r})}return(0,l.jsx)(l.Fragment,{children:r})}function O({parallelRouterKey:e,error:t,errorStyles:r,errorScripts:n,templateStyles:a,templateScripts:o,template:i,notFound:u,forbidden:p,unauthorized:y,segmentViewBoundaries:x}){let _=(0,s.useContext)(c.LayoutRouterContext);if(!_)throw Object.defineProperty(Error("invariant expected layout router to be mounted"),"__NEXT_ERROR_CODE",{value:"E56",enumerable:!1,configurable:!0});let{parentTree:w,parentCacheNode:C,parentSegmentPath:$,parentParams:T,parentLoadingData:S,url:N,isActive:L,debugNameContext:R}=_,E=w[0],M=null===$?[e]:$.concat([E,e]),F=w[1][e],A=C.slots;(void 0===F||null===A)&&(0,s.use)(d.unresolvedThenable);let B=F[0],I=A[e]??null,D=(0,g.createRouterCacheKey)(B,!0),U=(0,v.useRouterBFCache)(F,I,D),H=[];do{let e=U.tree,s=U.cacheNode,d=U.stateKey,g=e[0],v=T;if(Array.isArray(g)){let e=g[0],t=g[1],r=g[2],n=(0,b.getParamValueFromCacheKey)(t,r);null!==n&&(v={...T,[e]:n})}let x=function(e){if("/"===e)return"/";if("string"==typeof e)if("(__SLOT__)"===e)return;else return e+"/";return e[1]+"/"}(g),_=x??R,w=void 0===x?void 0:R,C=(0,l.jsxs)(P,{cacheNode:s,children:[(0,l.jsx)(f.ErrorBoundary,{errorComponent:t,errorStyles:r,errorScripts:n,children:(0,l.jsx)(k,{name:w,loading:S,children:(0,l.jsx)(m.HTTPAccessFallbackBoundary,{notFound:u,forbidden:p,unauthorized:y,children:(0,l.jsxs)(h.RedirectBoundary,{children:[(0,l.jsx)(j,{url:N,tree:e,params:v,cacheNode:s,segmentPath:M,debugNameContext:_,isActive:L&&d===D}),null]})})})}),null]}),O=(0,l.jsxs)(c.TemplateContext.Provider,{value:C,children:[a,o,i]},d);H.push(O),U=U.next}while(null!==U)return H}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},37457,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let n=e.r(90809),a=e.r(43476),o=n._(e.r(71645)),i=e.r(8372);function l(){let e=(0,o.useContext)(i.TemplateContext);return(0,a.jsx)(a.Fragment,{children:e})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},6831,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderParamsFromClient",{enumerable:!0,get:function(){return a}});let n=new WeakMap;function a(e){let t=n.get(e);if(t)return t;let r=Promise.resolve(e);return n.set(e,r),r}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},97689,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderParamsFromClient",{enumerable:!0,get:function(){return n}});let n=e.r(6831).createRenderParamsFromClient;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},93504,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderSearchParamsFromClient",{enumerable:!0,get:function(){return a}});let n=new WeakMap;function a(e){let t=n.get(e);if(t)return t;let r=Promise.resolve(e);return n.set(e,r),r}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},66996,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderSearchParamsFromClient",{enumerable:!0,get:function(){return n}});let n=e.r(93504).createRenderSearchParamsFromClient;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},42903,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={createClientParams:function(){return o.createRenderParamsFromClient},createClientSearchParams:function(){return i.createRenderSearchParamsFromClient}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(97689),i=e.r(66996);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=o(e,n)),t&&(a.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return x},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function u(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},27201,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"IconMark",{enumerable:!0,get:function(){return a}});let n=e.r(43476),a=()=>"u">typeof window?null:(0,n.jsx)("meta",{name:"«nxt-icon»"})},91915,(e,t,r)=>{"use strict";function n(e,t={}){if(t.onlyHashChange)return void e();let r=document.documentElement;if("smooth"!==r.dataset.scrollBehavior)return void e();let a=r.style.scrollBehavior;r.style.scrollBehavior="auto",t.dontForceLayout||r.getClientRects(),e(),r.style.scrollBehavior=a}e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"disableSmoothScrollDuringRouteTransition",{enumerable:!0,get:function(){return n}})},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(18967),a=e.r(52817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return l}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});function o(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(o.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==u?(u="//"+(u||""),a&&"/"!==a[0]&&(a="/"+a)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),a=a.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${u}${a}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},18566,(e,t,r)=>{t.exports=e.r(76562)},78893,e=>{"use strict";var t=e.i(43476),r=e.i(97053),n=e.i(72382);let a=r.default.img.withConfig({displayName:"advisor-photo__Img",componentId:"sc-de4a59b3-0"})`
  width: 100%;
  object-fit: ${e=>e.$fit};
  object-position: ${e=>"contain"===e.$fit?"center":"top"};

  ${e=>"contain"===e.$fit&&r.css`
      background: var(--color-sand);
      padding: 2%;
    `}
`,o=r.default.div.withConfig({displayName:"advisor-photo__Plate",componentId:"sc-de4a59b3-1"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-navy-deep);
  container-type: inline-size;
`,i=r.default.span.withConfig({displayName:"advisor-photo__Wash",componentId:"sc-de4a59b3-2"})`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at 30% 24%,
    color-mix(in oklch, var(--color-gold) 26%, transparent),
    transparent 68%
  );
`,l=r.default.span.withConfig({displayName:"advisor-photo__Initials",componentId:"sc-de4a59b3-3"})`
  position: relative;
  font-family: var(--font-serif);
  font-size: clamp(3rem, 14cqw, 6rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: color-mix(in oklch, var(--color-gold) 35%, transparent);
`;e.s(["AdvisorPhoto",0,function({src:e,alt:r,className:s,imgClassName:u,priority:c}){let{advisor:d,images:f}=(0,n.useConfig)();return e?(0,t.jsx)(a,{$fit:f.fit??"cover",src:e,alt:r,loading:c?"eager":"lazy",className:[u,s].filter(Boolean).join(" ")}):(0,t.jsxs)(o,{role:"img","aria-label":r,className:[u,s].filter(Boolean).join(" "),children:[(0,t.jsx)(i,{"aria-hidden":!0}),(0,t.jsx)(l,{"aria-hidden":!0,children:d.name.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()??"").join("")})]})}])},8424,36824,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(97053);let a=0,o=!1;function i(){a++}function l(e,{max:t=9,lift:n=26,ease:s=.12}={}){let u=(0,r.useRef)({max:t,lift:n,ease:s});u.current={max:t,lift:n,ease:s},(0,r.useEffect)(()=>{let t=e.current;if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;o||(o=!0,window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i,{passive:!0}));let r=t.getBoundingClientRect(),n=a,l=0,s=0,c=0,d=0,f=0,p=0,h=0,m=!1,g=()=>{r=t.getBoundingClientRect(),n=a},v=()=>{let{ease:e}=u.current;if(d+=(l-d)*e,f+=(s-f)*e,p+=(c-p)*e,t.style.transform=`rotateX(${f.toFixed(3)}deg) rotateY(${d.toFixed(3)}deg) translateZ(${p.toFixed(2)}px)`,.01>Math.abs(l-d)&&.01>Math.abs(s-f)&&.05>Math.abs(c-p)){m=!1,0===l&&0===s&&0===c&&(t.style.transform="");return}h=requestAnimationFrame(v)},y=()=>{m||(m=!0,h=requestAnimationFrame(v))},b=()=>{g(),c=u.current.lift,y()},x=e=>{n===a&&r.width&&r.height||g();let o=(e.clientX-r.left)/r.width-.5,i=(e.clientY-r.top)/r.height-.5,{max:c}=u.current;l=o*c*2,s=-i*c*2,t.style.setProperty("--glare-x",`${((o+.5)*100).toFixed(1)}%`),t.style.setProperty("--glare-y",`${((i+.5)*100).toFixed(1)}%`),t.style.setProperty("--glare-on","1"),y()},_=()=>{l=0,s=0,c=0,t.style.setProperty("--glare-on","0"),y()};return t.addEventListener("pointerenter",b),t.addEventListener("pointermove",x),t.addEventListener("pointerleave",_),()=>{cancelAnimationFrame(h),t.removeEventListener("pointerenter",b),t.removeEventListener("pointermove",x),t.removeEventListener("pointerleave",_),t.style.transform=""}},[e])}e.s(["useTilt",0,l],36824);let s=n.default.div.withConfig({displayName:"tilt__Face",componentId:"sc-fb2f1faa-0"})`
  position: relative;
  height: 100%;
  border-radius: inherit;
  padding: ${e=>e.$pad};
  /* Every element between the rotating root and a Depth layer has to preserve
     3D, or the browser flattens the subtree and translateZ collapses to 0. */
  transform-style: preserve-3d;

  ${e=>"panel"===e.$tone&&n.css`
      background: var(--glass);
      box-shadow: var(--shadow-soft);
      border: 1px solid var(--glass-edge);
    `}

  /*
     The window tone is the panel without its fill, and it exists because of a
     rule that is easy to forget: in a preserve-3d subtree an ancestor's
     background is painted in its own plane, so anything a child places at
     NEGATIVE Z is behind it and simply does not show. A card with an opaque
     face cannot have a recessed layer. Such a card supplies its own back wall
     instead, at the same depth as the thing meant to sit behind it.
     (No backticks in here: they close the template literal.)
  */
  ${e=>"window"===e.$tone&&n.css`
      box-shadow: var(--shadow-soft);
      border: 1px solid var(--glass-edge);
    `}

  /* For the deep bands. A white panel on the indigo field would punch a hole
     in it, so this is a wash of white over whatever is underneath plus a lit
     top edge, which reads as a pane catching light rather than a box on top. */
  ${e=>"onDark"===e.$tone&&n.css`
      background: oklch(1 0 0 / 0.05);
      border: 1px solid oklch(1 0 0 / 0.11);
      box-shadow: inset 0 1px 0 oklch(1 0 0 / 0.09);
      transition: background-color 0.5s var(--ease-out), border-color 0.5s;

      &:hover {
        background: oklch(1 0 0 / 0.09);
        border-color: oklch(1 0 0 / 0.2);
      }
    `}
`,u=n.default.span.withConfig({displayName:"tilt__Glare",componentId:"sc-fb2f1faa-1"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: calc(var(--glare-on, 0) * 1);
  transition: opacity 0.45s var(--ease-out);
  background: radial-gradient(
    32rem 32rem at var(--glare-x, 50%) var(--glare-y, 50%),
    color-mix(in oklab, var(--prism-violet) 7%, transparent),
    transparent 52%
  );
`,c=n.default.span.withConfig({displayName:"tilt__Edge",componentId:"sc-fb2f1faa-2"})`
  pointer-events: none;
  position: absolute;
  inset-inline: var(--radius-card);
  top: 0;
  height: 1px;
  background: var(--prism-sweep);
  background-size: 200% 100%;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 8%,
    #000 92%,
    transparent
  );
  opacity: calc(0.28 + var(--glare-on, 0) * 0.72);
  transition: opacity 0.45s var(--ease-out);
`,d=n.default.div.withConfig({displayName:"tilt__Root",componentId:"sc-fb2f1faa-3"})`
  position: relative;
  height: 100%;
  border-radius: var(--radius-card);
  transform-style: preserve-3d;
  will-change: transform;
  /**
   * The card carries its own perspective, and this is not optional.
   *
   * With only the section-wide perspective in force, the vanishing point is
   * the middle of the band — so a card near the left edge is roughly 700px
   * from it, and pushing that card's cover to translateZ(-50px) moved it
   * 700 * 50/1450 = 24px sideways as well as shrinking it. The result was
   * photographs sliding out from under their own cards, worse the further
   * from centre the card sat.
   *
   * A perspective declared here is measured from this card's own centre, so
   * the interior layers move straight back with no lateral drift. The card's
   * own rotation still resolves against the section's perspective, which is
   * what keeps the row of them looking like one scene.
   *
   * Interior compensation, if a layer must fill the card: an element at
   * translateZ(-z) projects at P / (P + z), so scale it by (P + z) / P.
   */
  perspective: 900px;
  perspective-origin: 50% 50%;

  ${e=>e.$glow&&n.css`
      &::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        opacity: calc(var(--glare-on, 0) * 1);
        transition: opacity 0.5s var(--ease-out);
        box-shadow: var(--shadow-float);
        pointer-events: none;
      }
    `}
`,f=n.default.div.attrs({"data-depth":""}).withConfig({displayName:"tilt__Depth",componentId:"sc-fb2f1faa-4"})`
  transform: translateZ(${e=>e.$z??24}px);
  transform-style: preserve-3d;
`;e.s(["Depth",0,f,"Tilt",0,function({children:e,pad:n="1.75rem",tone:a="panel",glare:o=!0,edge:i=!0,glow:f=!0,as:p,className:h,max:m,lift:g,ease:v,...y}){let b=(0,r.useRef)(null);return l(b,{max:m,lift:g,ease:v}),(0,t.jsx)(d,{ref:b,as:p,"data-tilt":!0,$glow:f,className:h,...y,children:(0,t.jsxs)(s,{$pad:n,$tone:a,children:[i&&"bare"!==a&&(0,t.jsx)(c,{"aria-hidden":!0}),e,o&&(0,t.jsx)(u,{"aria-hidden":!0})]})})}],8424)},38286,5428,e=>{"use strict";var t=e.i(43476),r=e.i(97053),n=e.i(52531);let a=r.default.span.withConfig({displayName:"eyebrow__Root",componentId:"sc-ac4fae65-0"})`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: ${e=>"dark"===e.$tone?"var(--color-gold)":"var(--color-gold-ink)"};
`,o=r.default.span.withConfig({displayName:"eyebrow__Rule",componentId:"sc-ac4fae65-1"})`
  height: 1px;
  width: 1.75rem;
  background: ${e=>"dark"===e.$tone?"color-mix(in oklch, var(--color-gold) 70%, transparent)":"color-mix(in oklch, var(--color-gold-deep) 60%, transparent)"};
`;function i({children:e,className:r,tone:n="light"}){return(0,t.jsxs)(a,{$tone:n,className:r,children:[(0,t.jsx)(o,{"aria-hidden":!0,$tone:n}),e]})}e.s(["Eyebrow",0,i],5428);let l={primary:r.css`
    background: var(--color-navy);
    color: var(--color-paper);
    box-shadow: var(--shadow-soft);
    &:hover {
      background: var(--color-navy-soft);
      box-shadow: var(--shadow-glow);
      transform: perspective(600px) translateZ(14px);
    }
  `,accent:r.css`
    background: var(--color-gold);
    color: var(--color-navy-deep);
    font-weight: 600;
    box-shadow: 0 0 0 0 transparent;
    &:hover {
      filter: brightness(1.06);
      box-shadow: 0 14px 34px -16px color-mix(in oklch, var(--prism-cyan) 75%, transparent);
      transform: perspective(600px) translateZ(14px);
    }
  `,outline:r.css`
    background: var(--color-surface);
    color: var(--color-ink);
    border: 1px solid var(--color-line);
    box-shadow: var(--shadow-soft);
    &:hover {
      border-color: color-mix(in oklch, var(--prism-cyan) 45%, transparent);
      background: var(--color-mist);
      transform: perspective(600px) translateZ(14px);
    }
  `,ghost:r.css`
    color: var(--color-ink);
    &:hover {
      background: var(--color-mist);
    }
  `,onDark:r.css`
    border: 1px solid oklch(1 0 0 / 0.34);
    color: var(--color-paper);
    &:hover {
      border-color: oklch(1 0 0 / 0.55);
      background: oklch(1 0 0 / 0.1);
    }
  `},s={sm:r.css`
    height: 2.25rem;
    padding-inline: 1rem;
    font-size: 13px;
  `,md:r.css`
    height: 2.75rem;
    padding-inline: 1.25rem;
    font-size: 14px;
  `,lg:r.css`
    height: 3.25rem;
    padding-inline: 1.75rem;
    font-size: 15px;
  `},u=r.css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  font-weight: 500;
  white-space: nowrap;
  transition:
    transform 0.45s var(--ease-out),
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s,
    box-shadow 0.4s var(--ease-out);

  &:disabled {
    pointer-events: none;
    opacity: 0.55;
  }
  &:active {
    transform: perspective(600px) translateY(1px);
  }

  ${e=>l[e.$variant??"primary"]}
  ${e=>s[e.$size??"md"]}
`;r.default.button.withConfig({displayName:"ui__StyledButton",componentId:"sc-ebfd46a2-0"})`
  ${u}
`;let c=(0,r.default)(n.Link).withConfig({displayName:"ui__StyledButtonLink",componentId:"sc-ebfd46a2-1"})`
  ${u}
`,d=r.default.a.withConfig({displayName:"ui__StyledButtonAnchor",componentId:"sc-ebfd46a2-2"})`
  ${u}
`,f=r.default.div.withConfig({displayName:"ui__Shell",componentId:"sc-ebfd46a2-3"})`
  margin-inline: auto;
  width: 100%;
  max-width: 76rem;
  padding-inline: 1.25rem;

  @media (min-width: 640px) {
    padding-inline: 2rem;
  }
  @media (min-width: 1280px) {
    padding-inline: 2.5rem;
  }
`,p={paper:r.css`
    background: var(--color-canvas);
  `,surface:r.css`
    background: var(--color-mist);
  `,sand:r.css`
    background: var(--color-sand);
  `,navy:r.css`
    background: var(--color-navy-deep);
    color: var(--color-paper);
  `},h=r.default.section.withConfig({displayName:"ui__StyledSection",componentId:"sc-ebfd46a2-4"})`
  position: relative;
  /* The section blooms are wider than the viewport by design, so they have to
     be clipped here or they add horizontal page scroll. */
  overflow: hidden;
  padding-block: 2.9rem;
  perspective: var(--persp);
  perspective-origin: 50% 42%;

  @media (min-width: 640px) {
    padding-block: 3.5rem;
  }
  @media (min-width: 1024px) {
    padding-block: 4.2rem;
  }

  ${e=>p[e.$tone??"paper"]}
`,m=r.default.div.withConfig({displayName:"ui__Panel",componentId:"sc-ebfd46a2-5"})`
  position: relative;
  border-radius: var(--radius-card);
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-soft);
  padding: ${e=>e.$pad??"1.75rem"};
  overflow: hidden;

  ${e=>e.$interactive&&r.css`
      transition:
        transform 0.6s var(--ease-out),
        box-shadow 0.6s var(--ease-out),
        border-color 0.6s var(--ease-out);

      /* The spectrum wipes across the top edge on hover. */
      &::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        top: 0;
        height: 1.5px;
        background: var(--prism-sweep);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.68s var(--ease-out);
      }

      &:hover {
        transform: translateY(-5px);
        border-color: color-mix(in oklch, var(--prism-violet) 40%, transparent);
        box-shadow: var(--shadow-float);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      @media (prefers-reduced-motion: reduce) {
        transition: none;
        &:hover {
          transform: none;
        }
      }
    `}
`;r.default.ul.withConfig({displayName:"ui__Bento",componentId:"sc-ebfd46a2-6"})`
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 2.5rem;
  transform-style: preserve-3d;

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 1.05rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`,r.default.li.withConfig({displayName:"ui__BentoCell",componentId:"sc-ebfd46a2-7"})`
  grid-column: span 2 / span 2;
  transform-style: preserve-3d;

  /* The Reveal wrapper sits between the cell and the tile, so the height has
     to be handed down explicitly or short tiles in a row stop matching. */
  > * {
    height: 100%;
  }

  @media (min-width: 768px) {
    grid-column: span ${e=>Math.min(6,Math.max(2,Math.round((e.$span??4)/2)))} /
      span ${e=>Math.min(6,Math.max(2,Math.round((e.$span??4)/2)))};
  }
  @media (min-width: 1024px) {
    grid-column: span ${e=>e.$span??4} / span ${e=>e.$span??4};
    ${e=>e.$tall&&"grid-row: span 2 / span 2;"}
  }
`;let g=r.default.span.withConfig({displayName:"ui__Glow",componentId:"sc-ebfd46a2-8"})`
  pointer-events: none;
  position: absolute;
  left: ${e=>e.$x??"50%"};
  top: ${e=>e.$y??"0%"};
  width: 46rem;
  height: 46rem;
  translate: -50% -50%;
  border-radius: 999px;
  filter: blur(100px);
  /* Much lower than it needs to be on a dark page: a bloom that reads as light
     on near-black reads as a stain on paper. */
  opacity: 0.16;
  background: radial-gradient(
    circle,
    ${e=>"cyan"===e.$tone?"color-mix(in oklch, var(--prism-cyan) 34%, transparent)":"magenta"===e.$tone?"color-mix(in oklch, var(--prism-magenta) 32%, transparent)":"color-mix(in oklch, var(--prism-violet) 40%, transparent)"}
      0%,
    transparent 70%
  );
`,v=r.default.div.withConfig({displayName:"ui__HeadingWrap",componentId:"sc-ebfd46a2-9"})`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${e=>"center"===e.$align&&r.css`
      align-items: center;
      text-align: center;
    `}

  ${e=>e.$hasAction&&r.css`
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        gap: 2.5rem;
      }
    `}
`,y=r.default.div.withConfig({displayName:"ui__HeadingBody",componentId:"sc-ebfd46a2-10"})`
  max-width: 42rem;
  ${e=>"center"===e.$align&&"margin-inline: auto;"}
`,b=r.default.h2.withConfig({displayName:"ui__HeadingTitle",componentId:"sc-ebfd46a2-11"})`
  margin-top: 1.1rem;
  font-size: clamp(1.9rem, 1.35rem + 2.1vw, 3rem);
  line-height: 1.12;
  text-wrap: balance;
  color: ${e=>"dark"===e.$tone?"var(--color-paper)":"var(--color-ink)"};
`,x=r.default.p.withConfig({displayName:"ui__HeadingLede",componentId:"sc-ebfd46a2-12"})`
  margin-top: 1rem;
  font-size: 15px;
  line-height: 1.7;
  text-wrap: pretty;
  color: ${e=>"dark"===e.$tone?"rgb(255 255 255 / 0.7)":"var(--color-ink-soft)"};

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;e.s(["ButtonAnchor",0,function({variant:e,size:r,...n}){return(0,t.jsx)(d,{$variant:e,$size:r,...n})},"ButtonLink",0,function({variant:e,size:r,...n}){return(0,t.jsx)(c,{$variant:e,$size:r,...n})},"Glow",0,g,"Panel",0,m,"Section",0,function({tone:e,children:r,...n}){return(0,t.jsx)(h,{$tone:e,...n,children:r})},"SectionHeading",0,function({eyebrow:e,title:r,lead:n,align:a="left",tone:o="light",className:l,action:s}){return(0,t.jsxs)(v,{$align:a,$hasAction:!!s,className:l,children:[(0,t.jsxs)(y,{$align:a,children:[e&&(0,t.jsx)(i,{tone:o,children:e}),(0,t.jsx)(b,{$tone:o,children:r}),n&&(0,t.jsx)(x,{$tone:o,children:n})]}),s&&(0,t.jsx)("div",{style:{flexShrink:0},children:s})]})},"Shell",0,f],38286)},84683,e=>{"use strict";var t=e.i(71645);e.s(["accrualSeries",0,function(e,t,r){let n=Math.pow(1+t/100,1/12)-1,a=[{year:0,label:"Now",invested:0,value:0,returns:0}],o=0;for(let t=1;t<=Math.floor(r);t++){for(let t=0;t<12;t++)o=(o+e)*(1+n);let r=12*e*t;a.push({year:t,label:`Yr ${t}`,invested:Math.round(r),value:Math.round(o),returns:Math.round(Math.max(o-r,0))})}return a},"useCalc",0,function(e){let[r,n]=(0,t.useState)({loading:!0});return(0,t.useEffect)(()=>{let t=!1,r=new AbortController;n(e=>({...e,loading:!0}));let a=setTimeout(async()=>{try{let a=await fetch(`/api/research?${e}`,{signal:r.signal}),o=await a.json();if(t)return;"ok"===o.status&&o.data?n({data:o.data,loading:!1}):n({error:"unconfigured"===o.status?"The calculator service is not connected yet.":o.message||"The calculator service did not respond.",loading:!1})}catch(e){if(t||"AbortError"===e.name)return;n({error:"The calculator service could not be reached.",loading:!1})}},350);return()=>{t=!0,r.abort(),clearTimeout(a)}},[e]),r}])},75379,e=>{"use strict";e.s(["formatAxisTick",0,function(e){if(0===e)return"0";if(e>=1e7){let t=e/1e7;return`${t%1==0?t:t.toFixed(1)}Cr`}return e>=1e5?`${Math.round(e/1e5)}L`:e>=1e3?`${Math.round(e/1e3)}k`:`${Math.round(e)}`},"formatINR",0,function(e,t){let r=Math.round(e*(t?.decimals?100:1))/(t?.decimals?100:1);return`₹${r.toLocaleString("en-IN",{maximumFractionDigits:t?.decimals??0})}`},"formatINRCompact",0,function(e){return e>=1e7?`₹${(e/1e7).toFixed(2)} Cr`:e>=1e5?`₹${(e/1e5).toFixed(2)} L`:`₹${Math.round(e).toLocaleString("en-IN")}`}])},89206,e=>{"use strict";var t=e.i(53070);let r={Banknote:t.LuBanknote,BookOpen:t.LuBookOpen,Briefcase:t.LuBriefcase,Building2:t.LuBuilding2,Calculator:t.LuCalculator,CalendarClock:t.LuCalendarClock,Coins:t.LuCoins,Compass:t.LuCompass,Eye:t.LuEye,FileDown:t.LuFileDown,Filter:t.LuFilter,Gift:t.LuGift,GraduationCap:t.LuGraduationCap,Handshake:t.LuHandshake,HeartPulse:t.LuHeartPulse,Home:t.LuHouse,Landmark:t.LuLandmark,LineChart:t.LuChartLine,MessageCircle:t.LuMessageCircle,PiggyBank:t.LuPiggyBank,Plane:t.LuPlane,Receipt:t.LuReceipt,RefreshCw:t.LuRefreshCw,Scale:t.LuScale,ShieldCheck:t.LuShieldCheck,Sprout:t.LuSprout,Target:t.LuTarget,TrendingUp:t.LuTrendingUp,Umbrella:t.LuUmbrella,UserRound:t.LuUserRound,Wallet:t.LuWallet};Object.keys(r),e.s(["icon",0,function(e){return r[e]??t.LuTarget}])},52531,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(18566);e.s(["Link",0,function({to:e,...n}){return(0,t.jsx)(r.default,{href:e,...n})},"NavLink",0,function({to:e,end:a,className:o,children:i,...l}){let s=(0,n.usePathname)()??"/",u=a?s===e:s===e||s.startsWith("/"===e?"//":`${e}/`),c={isActive:u,isPending:!1};return(0,t.jsx)(r.default,{href:e,"aria-current":u?"page":void 0,className:"function"==typeof o?o(c):o,...l,children:"function"==typeof i?i(c):i})},"useLocation",0,function(){return{pathname:(0,n.usePathname)()??"/",search:"",hash:"",state:null,key:"default"}}])},66393,e=>{"use strict";e.s(["countWord",0,function(e){return["No","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve"][e]??String(e)}])}]);