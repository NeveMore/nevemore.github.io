(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{5774:function(e,t,n){"use strict";function r(e,t){var n=t&&t.cache?t.cache:l,r=t&&t.serializer?t.serializer:a;return(t&&t.strategy?t.strategy:function(e,t){var n,r,a=1===e.length?o:i;return n=t.cache.create(),r=t.serializer,a.bind(this,e,n,r)})(e,{cache:n,serializer:r})}function o(e,t,n,r){var o=null==r||"number"==typeof r||"boolean"==typeof r?r:n(r),i=t.get(o);return void 0===i&&(i=e.call(this,r),t.set(o,i)),i}function i(e,t,n){var r=Array.prototype.slice.call(arguments,3),o=n(r),i=t.get(o);return void 0===i&&(i=e.apply(this,r),t.set(o,i)),i}n.r(t),n.d(t,{memoize:function(){return r},strategies:function(){return s}});var a=function(){return JSON.stringify(arguments)};function u(){this.cache=Object.create(null)}u.prototype.get=function(e){return this.cache[e]},u.prototype.set=function(e,t){this.cache[e]=t};var l={create:function(){return new u}},s={variadic:function(e,t){var n,r;return n=t.cache.create(),r=t.serializer,i.bind(this,e,n,r)},monadic:function(e,t){var n,r;return n=t.cache.create(),r=t.serializer,o.bind(this,e,n,r)}}},4062:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,{g:function(){return r}})},9446:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(4062),o=n(6509),i=n(7525),a=n(4149),u=n(4281),l=(0,a.forwardRef)(function(e,t){let{defaultLocale:n,href:l,locale:s,localeCookie:c,onClick:f,prefetch:d,unprefixed:h,...p}=e,m=(0,u.Z)(),g=null!=s&&s!==m,y=s||m,b=function(){let[e,t]=(0,a.useState)();return(0,a.useEffect)(()=>{t(window.location.host)},[]),e}(),v=b&&h&&(h.domains[b]===y||!Object.keys(h.domains).includes(b)&&m===n&&!s)?h.pathname:l,P=(0,i.usePathname)();return g&&(d&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),d=!1),a.createElement(o.default,(0,r.g)({ref:t,href:v,hrefLang:g?s:void 0,onClick:function(e){(function(e,t,n,r){if(!e||!(r!==n&&null!=r)||!t)return;let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(t),{name:i,...a}=e;a.path||(a.path=""!==o?o:"/");let u="".concat(i,"=").concat(r,";");for(let[e,t]of Object.entries(a))u+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(u+="="+t),u+=";";document.cookie=u})(c,P,m,s),f&&f(e)},prefetch:d},p))})},2541:function(e,t,n){"use strict";n.d(t,{default:function(){return f}});var r=n(4062),o=n(7525),i=n(4149),a=n(4281);function u(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function l(e,t){let n;return"string"==typeof e?n=s(t,e):(n={...e},e.pathname&&(n.pathname=s(t,e.pathname))),n}function s(e,t){let n=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),n+=t}n(9767);var c=n(9446);let f=(0,i.forwardRef)(function(e,t){let{href:n,locale:s,localeCookie:f,localePrefixMode:d,prefix:h,...p}=e,m=(0,o.usePathname)(),g=(0,a.Z)(),y=s!==g,[b,v]=(0,i.useState)(()=>u(n)&&("never"!==d||y)?l(n,h):n);return(0,i.useEffect)(()=>{m&&v(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!u(e))return e;let i=r===o||r.startsWith("".concat(o,"/"));return(t!==n||i)&&null!=o?l(e,o):e}(n,s,g,m,h))},[g,n,s,m,h]),i.createElement(c.default,(0,r.g)({ref:t,href:b,locale:s,localeCookie:f},p))});f.displayName="ClientLink"},4281:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7525),o=n(4720);let i="locale";function a(){let e;let t=(0,r.useParams)();try{e=(0,o.useLocale)()}catch(n){if("string"!=typeof(null==t?void 0:t[i]))throw n;e=t[i]}return e}},4879:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var r=n(4062),o=n(4149),i=n(8240);function a(e){let{locale:t,...n}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return o.createElement(i.IntlProvider,(0,r.g)({locale:t},n))}},6509:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(6196),o=n.n(r)},7525:function(e,t,n){"use strict";n.r(t);var r=n(9886),o={};for(var i in r)"default"!==i&&(o[i]=(function(e){return r[e]}).bind(0,i));n.d(t,o)},712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(2168);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6650:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2168),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});let r=n(8806),o=n(881),i=r._(n(4149)),a=n(8301),u=n(2570),l=n(8120),s=n(3331),c=n(712),f=n(4072),d=n(1223),h=n(5232),p=n(6650),m=n(1221),g=n(9024),y=new Set;function b(e,t,n,r,o,i){if("undefined"!=typeof window&&(i||(0,u.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let P=i.default.forwardRef(function(e,t){let n,r;let{href:l,as:y,children:P,prefetch:_=null,passHref:R,replace:O,shallow:j,scroll:w,locale:E,onClick:x,onMouseEnter:M,onTouchStart:C,legacyBehavior:S=!1,...N}=e;n=P,S&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let T=i.default.useContext(f.RouterContext),k=i.default.useContext(d.AppRouterContext),I=null!=T?T:k,L=!T,A=!1!==_,U=null===_?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:F,as:W}=i.default.useMemo(()=>{if(!T){let e=v(l);return{href:e,as:y?v(y):e}}let[e,t]=(0,a.resolveHref)(T,l,!0);return{href:e,as:y?(0,a.resolveHref)(T,y):t||e}},[T,l,y]),z=i.default.useRef(F),D=i.default.useRef(W);S&&(r=i.default.Children.only(n));let K=S?r&&"object"==typeof r&&r.ref:t,[q,$,B]=(0,h.useIntersection)({rootMargin:"200px"}),Z=i.default.useCallback(e=>{(D.current!==W||z.current!==F)&&(B(),D.current=W,z.current=F),q(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[W,K,F,B,q]);i.default.useEffect(()=>{I&&$&&A&&b(I,F,W,{locale:E},{kind:U},L)},[W,F,$,E,A,null==T?void 0:T.locale,I,L,U]);let V={ref:Z,onClick(e){S||"function"!=typeof x||x(e),S&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,a,l,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?i.default.startTransition(d):d()}(e,I,F,W,O,j,w,E,L)},onMouseEnter(e){S||"function"!=typeof M||M(e),S&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(A||!L)&&b(I,F,W,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart:function(e){S||"function"!=typeof C||C(e),S&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(A||!L)&&b(I,F,W,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,s.isAbsoluteUrl)(W))V.href=W;else if(!S||R||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,p.getDomainLocale)(W,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);V.href=t||(0,m.addBasePath)((0,c.addLocale)(W,e,null==T?void 0:T.defaultLocale))}return S?i.default.cloneElement(r,V):(0,o.jsx)("a",{...N,...V,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7500:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(7419),o=n(8120),i=n(6667),a=n(3331),u=n(2168),l=n(2570),s=n(2495),c=n(1198);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),h=d.match(/^[a-zA-Z]{1,}:\/\//),p=h?d.slice(h[0].length):d;if((p.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(p);d=(h?h[0]:"")+t}if(!(0,l.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:a,params:u}=(0,c.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(n,u)}))}let a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(e){return n?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(4149),o=n(7500),i="function"==typeof IntersectionObserver,a=new Map,u=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,s=l||!i,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[h,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1156:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},4072:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(8806)._(n(4149)).default.createContext(null)},8120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return u},urlObjectKeys:function(){return a}});let r=n(9994)._(n(7419)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:n}=e,i=e.protocol||"",a=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(r.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+i+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return i(e)}},2495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let r=n(7202),o=n(7360)},1198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let r=n(1371),o=n(5970);function i(e,t,n){let i="",a=(0,o.getRouteRegex)(e),u=a.groups,l=(t!==e?(0,r.getRouteMatcher)(a)(t):"")||n;i=e;let s=Object.keys(u);return s.every(e=>{let t=l[e]||"",{repeat:n,optional:r}=u[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in l)&&(i=i.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:s,result:i}}},7360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return i}});let r=n(1693),o=/\/\[[^/]+?\](?=\/|$)/;function i(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},2570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=n(3331),o=n(5282);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},6667:function(e,t){"use strict";function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},7419:function(e,t){"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},1371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(3331);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},a={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(a[e]=~r.indexOf("/")?r.split("/").map(e=>i(e)):t.repeat?[i(r)]:i(r))}),a}}},5970:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return l},parseParameter:function(){return a}});let r=n(1693),o=n(1156),i=n(5466);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function u(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),n={},u=1;return{parameterizedRoute:t.map(e=>{let t=r.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:r,repeat:l}=a(i[1]);return n[e]={pos:u++,repeat:l,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:r}=a(i[1]);return n[e]={pos:u++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function l(e){let{parameterizedRoute:t,groups:n}=u(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function s(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:i,keyPrefix:u}=e,{key:l,optional:s,repeat:c}=a(r),f=l.replace(/\W/g,"");u&&(f=""+u+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=n()),u?i[f]=""+u+l:i[f]=l;let h=t?(0,o.escapeStringRegexp)(t):"";return c?s?"(?:/"+h+"(?<"+f+">.+?))?":"/"+h+"(?<"+f+">.+?)":"/"+h+"(?<"+f+">[^/]+?)"}function c(e,t){let n;let a=(0,i.removeTrailingSlash)(e).slice(1).split("/"),u=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:a.map(e=>{let n=r.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&i){let[n]=e.split(i[0]);return s({getSafeRouteKey:u,interceptionMarker:n,segment:i[1],routeKeys:l,keyPrefix:t?"nxtI":void 0})}return i?s({getSafeRouteKey:u,segment:i[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function f(e,t){let n=c(e,t);return{...l(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){let{parameterizedRoute:n}=u(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},7202:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let n=o.slice(1,-1),a=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),a=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function i(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(a){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');i(this.optionalRestSlugName,n),this.optionalRestSlugName=n,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');i(this.restSlugName,n),this.restSlugName=n,o="[...]"}}else{if(a)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');i(this.slugName,n),this.slugName=n,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},3331:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return p},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return h},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return l},getLocationOrigin:function(){return a},getURL:function(){return u},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function u(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,h=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},8223:function(e,t,n){"use strict";let r=n(4149).createContext(void 0);t.IntlContext=r},8240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4149),o=n(5508),i=n(8223);n(5774);var a=r&&r.__esModule?r:{default:r};t.IntlProvider=function(e){let{children:t,defaultTranslationValues:n,formats:u,getMessageFallback:l,locale:s,messages:c,now:f,onError:d,timeZone:h}=e,p=r.useMemo(()=>o.createCache(),[s]),m=r.useMemo(()=>o.createIntlFormatters(p),[p]),g=r.useMemo(()=>({...o.initializeConfig({locale:s,defaultTranslationValues:n,formats:u,getMessageFallback:l,messages:c,now:f,onError:d,timeZone:h}),formatters:m,cache:p}),[p,n,u,m,l,s,c,f,d,h]);return a.default.createElement(i.IntlContext.Provider,{value:g},t)}},6037:function(e,t,n){"use strict";var r=n(4149),o=n(8223);function i(){let e=r.useContext(o.IntlContext);if(!e)throw Error(void 0);return e}t.useIntlContext=i,t.useLocale=function(){return i().locale}},4720:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6037);n(4149),n(8223),t.useLocale=r.useLocale},5508:function(e,t,n){"use strict";var r=n(5774);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(".")}function i(e){return o(e.namespace,e.key)}function a(e){console.error(e)}function u(e,t){return r.memoize(e,{cache:{create:()=>({get:e=>t[e],set(e,n){t[e]=n}})},strategy:r.strategies.variadic})}function l(e,t){return u(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return new e(...n)},t)}t.createCache=function(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}},t.createIntlFormatters=function(e){return{getDateTimeFormat:l(Intl.DateTimeFormat,e.dateTime),getNumberFormat:l(Intl.NumberFormat,e.number),getPluralRules:l(Intl.PluralRules,e.pluralRules),getRelativeTimeFormat:l(Intl.RelativeTimeFormat,e.relativeTime),getListFormat:l(Intl.ListFormat,e.list),getDisplayNames:l(Intl.DisplayNames,e.displayNames)}},t.defaultGetMessageFallback=i,t.defaultOnError=a,t.initializeConfig=function(e){let{getMessageFallback:t,messages:n,onError:r,...o}=e;return{...o,messages:n,onError:r||a,getMessageFallback:t||i}},t.joinPath=o,t.memoFn=u},9767:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],s=!1,c=-1;function f(){s&&r&&(s=!1,r.length?l=r.concat(l):c=-1,l.length&&d())}function d(){if(!s){var e=u(f);s=!0;for(var t=l.length;t;){for(r=l,l=[];++c<t;)r&&r[c].run();c=-1,t=l.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);