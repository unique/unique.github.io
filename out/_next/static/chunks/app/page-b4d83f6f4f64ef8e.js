(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3159:function(e,t,n){Promise.resolve().then(n.t.bind(n,5801,23))},5801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(5321).Z,i=n(1322).Z,a=n(6687).Z,o=n(6239).Z,l=a(n(915)),s=i(n(8858)),u=n(9200),d=n(1145),c=n(2362);n(8251);var f=i(n(9706));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/unique.github.io/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,i,a,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:a,qualityInt:s,className:u,imgStyle:d,blurStyle:c,isLazy:f,fill:p,placeholder:g,loading:m,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:_,onLoadingCompleteRef:S,setBlurComplete:C,setShowAltText:E,onLoad:x,onError:j}=e,O=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},O,n,{width:a,height:i,decoding:"async","data-nimg":p?"fill":"1",className:u,loading:m,style:r({},d,c),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&h(e,v,g,_,S,C,b))},[v,g,_,S,C,j,b,t]),onLoad:e=>{let t=e.currentTarget;h(t,v,g,_,S,C,b)},onError:e=>{E(!0),"blur"===g&&C(!0),j&&j(e)}})))}),y=l.forwardRef((e,t)=>{let n,i;var a,{src:h,sizes:y,unoptimized:b=!1,priority:w=!1,loading:_,className:S,quality:C,width:E,height:x,fill:j,style:O,onLoad:P,onLoadingComplete:k,placeholder:z="empty",blurDataURL:I,layout:A,objectFit:M,objectPosition:R,lazyBoundary:L,lazyRoot:D}=e,N=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=l.useContext(c.ImageConfigContext),Z=l.useMemo(()=>{let e=p||U||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[U]),B=N,T=B.loader||f.default;delete B.loader;let F="__next_img_default"in T;if(F){if("custom"===Z.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=T;T=e=>{let{config:t}=e,n=o(e,["config"]);return W(n)}}if(A){"fill"===A&&(j=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];q&&(O=r({},O,q));let V={responsive:"100vw",fill:"100vw"}[A];V&&!y&&(y=V)}let G="",H=m(E),$=m(x);if("object"==typeof(a=h)&&(g(a)||void 0!==a.src)){let J=g(h)?h.default:h;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(n=J.blurWidth,i=J.blurHeight,I=I||J.blurDataURL,G=J.src,!j){if(H||$){if(H&&!$){let K=H/J.width;$=Math.round(J.height*K)}else if(!H&&$){let Q=$/J.height;H=Math.round(J.width*Q)}}else H=J.width,$=J.height}}let X=!w&&("lazy"===_||void 0===_);((h="string"==typeof h?h:G).startsWith("data:")||h.startsWith("blob:"))&&(b=!0,X=!1),Z.unoptimized&&(b=!0),F&&h.endsWith(".svg")&&!Z.dangerouslyAllowSVG&&(b=!0);let[Y,ee]=l.useState(!1),[et,en]=l.useState(!1),er=m(C),ei=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},et?{}:{color:"transparent"},O),ea="blur"===z&&I&&!Y?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:H,heightInt:$,blurWidth:n,blurHeight:i,blurDataURL:I}),'")')}:{},eo=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:a,sizes:o,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let a=/(^|\s)(1?\d?\d)vw/g,o=[];for(let l;l=a.exec(n);l)o.push(parseInt(l[2]));if(o.length){let s=.01*Math.min(...o);return{widths:i.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let u=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:u,kind:"x"}}(t,i,o),d=s.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===u?e:r+1).concat(u)).join(", "),src:l({config:t,src:n,quality:a,width:s[d]})}}({config:Z,src:h,unoptimized:b,width:H,quality:er,sizes:y,loader:T}),el=h,es={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:B.crossOrigin},eu=l.useRef(P);l.useEffect(()=>{eu.current=P},[P]);let ed=l.useRef(k);l.useEffect(()=>{ed.current=k},[k]);let ec=r({isLazy:X,imgAttributes:eo,heightInt:$,widthInt:H,qualityInt:er,className:S,imgStyle:ei,blurStyle:ea,loading:_,config:Z,fill:j,unoptimized:b,placeholder:z,loader:T,srcString:el,onLoadRef:eu,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:en},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ec,{ref:t})),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},es))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(1322).Z)(n(915));let i=r.default.createContext({});t.AmpStateContext=i},168:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},8858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var r=n(5321).Z,i=n(1322).Z,a=(0,n(6687).Z)(n(915)),o=i(n(7505)),l=n(2211),s=n(5396),u=n(168);function d(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(8251);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let a=!0,o=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){o=!0;let l=i.key.slice(i.key.indexOf("$")+1);e.has(l)?a=!1:e.add(l)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(let s=0,u=f.length;s<u;s++){let d=f[s];if(i.props.hasOwnProperty(d)){if("charSet"===d)n.has(d)?a=!1:n.add(d);else{let c=i.props[d],p=r[d]||new Set;("name"!==d||!o)&&p.has(c)?a=!1:(p.add(c),r[d]=p)}}}}return a}}()).reverse().map((e,t)=>{let i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:i})})}t.default=function(e){let{children:t}=e,n=a.useContext(l.AmpStateContext),r=a.useContext(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:u.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9200:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a}=e,o=r||t,l=i||n,s=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},2362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageConfigContext=void 0;var r=(0,n(1322).Z)(n(915)),i=n(1145);let a=r.default.createContext(i.imageConfigDefault);t.ImageConfigContext=a},1145:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0,t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"],t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",remotePatterns:[],unoptimized:!1}},9706:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},7505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return a(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var r=(0,n(6687).Z)(n(915));let i=!1,a=i?()=>{}:r.useLayoutEffect,o=i?()=>{}:r.useEffect},8251:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n}},function(e){e.O(0,[187,744],function(){return e(e.s=3159)}),_N_E=e.O()}]);