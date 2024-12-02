"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{1161:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(6631),i=r.n(n),o=r(5192);let l=e=>{var t;let{filePath:r}=e,n=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",i=r.split(n).shift(),o=r.split(".").pop();return{path:i,filename:n.substring(0,n.lastIndexOf("."))||n,extension:o||""}},a=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{filename:i,path:o,extension:a}=l({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(a.toUpperCase()))return e;let s=a;["JPG","JPEG","PNG","GIF"].includes(a.toUpperCase())&&(s="WEBP");let u=o;"/"!=(null==u?void 0:u.substr(-1))&&(u+="/");let d=e.includes("_next/static/media");r&&(u=r.endsWith("/")&&u&&u.startsWith("/")?r+u.slice(1):r.endsWith("/")||!u||u.startsWith("/")?r+u:r+"/"+u);let c="".concat(d?r?r+"/":"":u).concat("nextImageExportOptimizer","/").concat(i,"-opt-").concat(t,".").concat(s.toUpperCase());return n||"/"===c.charAt(0)||(c="/"+c),c},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=3735928559^t,n=1103547991^t;for(let t=0,i;t<e.length;t++)r=Math.imul(r^(i=e.charCodeAt(t)),2654435761),n=Math.imul(n^i,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),4294967296*(2097151&(n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909)))+(r>>>0)},u=e=>{let{src:t,width:r,basePath:n}=e;return a(function(e){try{let t=new URL(e).pathname.split(".").pop();if(t)return s(e).toString().concat(".",t)}catch(t){console.error("Error parsing URL",e,t)}return s(e).toString()}(t),r,n,!0)},d=e=>{let{src:t,width:r,basePath:n}=e,i="object"==typeof t,o=i?t.src:t,l=i&&t.width||void 0;if(i&&l&&r>l){let e=[...[640,750,828,1080,1200,1920,2048,3840].map(Number),...[16,32,48,64,96,128,256,384].map(Number)];(e=e.filter((e,t,r)=>r.indexOf(e)===t)).sort((e,t)=>e-t);let t=null;for(let r=0;r<e.length;r++)Number(e[r])>=l&&(null===t||Number(e[r])<t)&&(t=Number(e[r]));if(null!==t)return a(o,t,n)}return o.startsWith("http")?u({src:o,width:r,basePath:n}):a(o,r,n)},c=e=>{let{src:t}=e,r="object"==typeof t?t.src:t;return r.startsWith("http")||"/"===r.charAt(0)||(r="/"+r),r},f=(0,o.forwardRef)((e,t)=>{let{src:r,priority:n=!1,loading:l,className:s,width:f,height:p,onLoad:m,unoptimized:g,placeholder:h="blur",basePath:b="",alt:y="",blurDataURL:v,style:w,onError:_,overrideSrc:j,...S}=e,[P,x]=(0,o.useState)(!1),C=(0,o.useMemo)(()=>{if(v)return v;let e="object"==typeof r?r.src:r;return!0===g?e:e.startsWith("http")?u({src:e,width:10,basePath:b}):a(e,10,b)},[v,r,g,b]),E="object"==typeof r?r.src.endsWith(".svg"):r.endsWith(".svg"),[O,M]=(0,o.useState)(!1),z="blur"===h&&!E&&C&&C.startsWith("/")&&!O?{backgroundSize:(null==w?void 0:w.objectFit)||"cover",backgroundPosition:(null==w?void 0:w.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("'.concat(C,'")')}:void 0,I="object"==typeof r,k=I?r.src:r;return b&&!I&&k.startsWith("/")&&(k=b+k),!b||I||k.startsWith("/")||(k=b+"/"+k),o.createElement(i(),{ref:t,alt:y,...S,...f&&{width:f},...p&&{height:p},...l&&{loading:l},...s&&{className:s},...m&&{onLoad:m},...j&&{overrideSrc:j},...h&&{placeholder:z||O?"empty":h},...g&&{unoptimized:g},...n&&{priority:n},...E&&{unoptimized:!0},style:{...w,...z},loader:P||!0===g?()=>c({src:j||r}):e=>d({src:r,width:e.width,basePath:b}),blurDataURL:C,onError:e=>{x(!0),M(!0),_&&_(e)},onLoad:e=>{0===e.target.naturalWidth&&x(!0),M(!0),m&&m(e)},src:I?r:k})});f.displayName="ExportedImage";var p=f},7018:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(1927),i=r(1186),o=r(288),l=i._(r(5192)),a=n._(r(9719)),s=n._(r(4827)),u=r(8338),d=r(5316),c=r(1998);r(2717);let f=r(6082),p=n._(r(2249)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/jnext/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:b,fill:y,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:j,sizesInput:S,onLoad:P,onError:x,...C}=e;return(0,o.jsx)("img",{...C,...h(f),loading:m,width:s,height:a,decoding:u,"data-nimg":y?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&g(e,p,v,w,_,b,S))},[r,p,v,w,_,x,b,S,t]),onLoad:e=>{g(e.currentTarget,p,v,w,_,b,S)},onError:e=>{j(!0),"empty"!==p&&_(!0),x&&x(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:s}=e,g=(0,l.useRef)(a);(0,l.useEffect)(()=>{g.current=a},[a]);let h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let[v,w]=(0,l.useState)(!1),[_,j]=(0,l.useState)(!1),{props:S,meta:P}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...S,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),P.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3101:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(1927)._(r(5192)).default.createContext({})},4467:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},8338:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(2717);let n=r(7624),i=r(5316);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:y,fill:v=!1,style:w,overrideSrc:_,onLoad:j,onLoadingComplete:S,placeholder:P="empty",blurDataURL:x,fetchPriority:C,decoding:E="async",layout:O,objectFit:M,objectPosition:z,lazyBoundary:I,lazyRoot:k,...A}=e,{imgConf:R,showAltText:W,blurComplete:N,defaultLoader:G}=t,U=R||i.imageConfigDefault;if("allSizes"in U)a=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);a={...U,allSizes:e,deviceSizes:t}}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=A.loader||G;delete A.loader,delete A.srcSet;let L="__next_img_default"in D;if(L){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let F="",B=l(b),T=l(y);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,x=x||e.blurDataURL,F=e.src,!v){if(B||T){if(B&&!T){let t=B/e.width;T=Math.round(e.height*t)}else if(!B&&T){let t=T/e.height;B=Math.round(e.width*t)}}else B=e.width,T=e.height}}let J=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,J=!1),a.unoptimized&&(f=!0),L&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let V=l(h),H=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:z}:{},W?{}:{color:"transparent"},w),q=N||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:T,blurWidth:s,blurHeight:u,blurDataURL:x||"",objectFit:H.objectFit})+'")':'url("'+P+'")',$=q?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[d]})}}({config:a,src:d,unoptimized:f,width:B,quality:V,sizes:c,loader:D});return{props:{...A,loading:J?"lazy":m,fetchPriority:C,width:B,height:T,decoding:E,className:g,style:{...H,...$},sizes:Y.sizes,srcSet:Y.srcSet,src:_||Y.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:v}}}},4827:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(1927),i=r(1186),o=r(288),l=i._(r(5192)),a=n._(r(6286)),s=r(3101),u=r(8062),d=r(4467);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2717);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,l.useContext)(s.AmpStateContext),n=(0,l.useContext)(u.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7624:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1998:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(1927)._(r(5192)),i=r(5316),o=n.default.createContext(i.imageConfigDefault)},5316:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/jnext/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},6631:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let n=r(1927),i=r(8338),o=r(7018),l=n._(r(2249));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/jnext/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},2249:function(e,t){function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},6286:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(5192),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,l=i?()=>{}:n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),a()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}}]);