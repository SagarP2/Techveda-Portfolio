/*! For license information please see main.f570d782.js.LICENSE.txt */
(()=>{var e={43:(e,t,r)=>{"use strict";e.exports=r(202)},82:(e,t)=>{"use strict";var r=60103,n=60106,o=60107,i=60108,a=60114,s=60109,l=60110,c=60112,u=60113,d=60120,p=60115,h=60116,f=60121,m=60122,g=60117,v=60129,y=60131;if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;r=x("react.element"),n=x("react.portal"),o=x("react.fragment"),i=x("react.strict_mode"),a=x("react.profiler"),s=x("react.provider"),l=x("react.context"),c=x("react.forward_ref"),u=x("react.suspense"),d=x("react.suspense_list"),p=x("react.memo"),h=x("react.lazy"),f=x("react.block"),m=x("react.server.block"),g=x("react.fundamental"),v=x("react.debug_trace_mode"),y=x("react.legacy_hidden")}function b(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case a:case i:case u:case d:return e;default:switch(e=e&&e.$$typeof){case l:case c:case h:case p:case s:return e;default:return t}}case n:return t}}}t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===a||e===v||e===i||e===u||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===c||e.$$typeof===g||e.$$typeof===f||e[0]===m)},t.typeOf=b},86:(e,t,r)=>{"use strict";e.exports=r(82)},153:(e,t,r)=>{"use strict";var n=r(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function y(){}function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:j.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var T=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return a=a(l=e),e=""===i?"."+_(l,0):i,w(a)?(o="",null!=e&&(o=e.replace(T,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+_(s=e[c],c);l+=P(s,t,o,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=P(s=s.value,t,o,u=i+_(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function L(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},O={transition:null},z={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:O,ReactCurrentOwner:j};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:L,forEach:function(e,t,r){L(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=x,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=N,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,r){return R.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,r){return R.current.useReducer(e,t,r)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return R.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},219:(e,t,r)=>{"use strict";var n=r(763),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(f){var o=h(r);o&&o!==f&&e(t,o,n)}var a=u(r);d&&(a=a.concat(d(r)));for(var s=l(t),m=l(r),g=0;g<a.length;++g){var v=a[g];if(!i[v]&&(!n||!n[v])&&(!m||!m[v])&&(!s||!s[v])){var y=p(r,v);try{c(t,v,y)}catch(x){}}}}return t}},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(!(0<i(o,t)))break e;e[n]=t,e[r]=o,r=n}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,a=o>>>1;n<a;){var s=2*(n+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,r))c<o&&0>i(u,l)?(e[n]=u,e[c]=r,n=c):(e[n]=l,e[s]=r,n=s);else{if(!(c<o&&0>i(u,r)))break e;e[n]=u,e[c]=r,n=c}}}return t}function i(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=n(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,r(c,t)}t=n(u)}}function w(e){if(g=!1,b(e),!m)if(null!==n(c))m=!0,O(k);else{var t=n(u);null!==t&&z(w,t.startTime-e)}}function k(e,r){m=!1,g&&(g=!1,y(C),C=-1),f=!0;var i=h;try{for(b(r),p=n(c);null!==p&&(!(p.expirationTime>r)||e&&!P());){var a=p.callback;if("function"===typeof a){p.callback=null,h=p.priorityLevel;var s=a(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof s?p.callback=s:p===n(c)&&o(c),b(r)}else o(c);p=n(c)}if(null!==p)var l=!0;else{var d=n(u);null!==d&&z(w,d.startTime-r),l=!1}return l}finally{p=null,h=i,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,E=null,C=-1,T=5,_=-1;function P(){return!(t.unstable_now()-_<T)}function L(){if(null!==E){var e=t.unstable_now();_=e;var r=!0;try{r=E(!0,e)}finally{r?j():(S=!1,E=null)}}else S=!1}if("function"===typeof x)j=function(){x(L)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=L,j=function(){R.postMessage(null)}}else j=function(){v(L,0)};function O(e){E=e,S||(S=!0,j())}function z(e,r){C=v((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,O(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var r=h;h=t;try{return e()}finally{h=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=h;h=e;try{return t()}finally{h=r}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,r(u,e),null===n(c)&&e===n(u)&&(g?(y(C),C=-1):g=!0,z(w,i-a))):(e.sortIndex=s,r(c,e),m||f||(m=!0,O(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=h;return function(){var r=h;h=t;try{return e.apply(this,arguments)}finally{h=r}}}},324:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(o=r?r.call(n,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},391:(e,t,r)=>{"use strict";var n=r(950);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(e,t,r)=>{"use strict";var n=r(43),o=r(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},f={};function m(e,t,r,n,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,r,n){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!d.call(f,e)||!d.call(h,e)&&(p.test(e)?f[e]=!0:(h[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),T=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var D,I=Object.assign;function M(e){if(void 0===D)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var $=!1;function F(e,t){if(!e||$)return"";$=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),i=n.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{$=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?M(e):""}function B(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case E:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case L:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return U(e(t))}catch(r){}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=H(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function G(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=W(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){Q(e,t);var r=W(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&X(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+W(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:W(r)}}function ie(e,t){var r=W(t.value),n=W(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=me(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(he).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ee(e){if(e=bo(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Ce(e){je?Se?Se.push(e):Se=[e]:je=e}function Te(){if(je){var e=je,t=Se;if(Se=je=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function _e(e,t){return e(t)}function Pe(){}var Le=!1;function Ae(e,t,r){if(Le)return e(t,r);Le=!0;try{return _e(e,t,r)}finally{Le=!1,(null!==je||null!==Se)&&(Pe(),Te())}}function Re(e,t){var r=e.stateNode;if(null===r)return null;var n=ko(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var Oe=!1;if(u)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ue){Oe=!1}function Ne(e,t,r,n,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var De=!1,Ie=null,Me=!1,$e=null,Fe={onError:function(e){De=!0,Ie=e}};function Be(e,t,r,n,o,i,a,s,l){De=!1,Ie=null,Ne.apply(Fe,arguments)}function Ue(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Ve(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(i(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(n=o.return)){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return We(o),e;if(a===n)return We(o),t;a=a.sibling}throw Error(i(188))}if(r.return!==n.return)r=o,n=a;else{for(var s=!1,l=o.child;l;){if(l===r){s=!0,r=o,n=a;break}if(l===n){s=!0,n=o,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=o;break}if(l===n){s=!0,n=a,r=o;break}l=l.sibling}if(!s)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=o.unstable_scheduleCallback,Xe=o.unstable_cancelCallback,Ke=o.unstable_shouldYield,Ge=o.unstable_requestPaint,Qe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,rt=o.unstable_LowPriority,nt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&r;if(0!==a){var s=a&~o;0!==s?n=dt(s):0!==(i&=a)&&(n=dt(i))}else 0!==(a=r&~o)?n=dt(a):0!==i&&(n=dt(i));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&o)&&((o=n&-n)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-at(t)),n|=e[r],t&=~o;return n}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=r}function yt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-at(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,jt,St,Et,Ct=!1,Tt=[],_t=null,Pt=null,Lt=null,At=new Map,Rt=new Map,Ot=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":At.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function Dt(e,t,r,n,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=bo(t))&&kt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function It(e){var t=xo(e.target);if(null!==t){var r=Ue(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Ve(r)))return e.blockedOn=t,void Et(e.priority,(function(){jt(r)}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=bo(r))&&kt(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);be=n,r.target.dispatchEvent(n),be=null,t.shift()}return!0}function $t(e,t,r){Mt(e)&&r.delete(t)}function Ft(){Ct=!1,null!==_t&&Mt(_t)&&(_t=null),null!==Pt&&Mt(Pt)&&(Pt=null),null!==Lt&&Mt(Lt)&&(Lt=null),At.forEach($t),Rt.forEach($t)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ft)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Tt.length){Bt(Tt[0],e);for(var r=1;r<Tt.length;r++){var n=Tt[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==_t&&Bt(_t,e),null!==Pt&&Bt(Pt,e),null!==Lt&&Bt(Lt,e),At.forEach(t),Rt.forEach(t),r=0;r<Ot.length;r++)(n=Ot[r]).blockedOn===e&&(n.blockedOn=null);for(;0<Ot.length&&null===(r=Ot[0]).blockedOn;)It(r),null===r.blockedOn&&Ot.shift()}var Vt=b.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,r,n){var o=xt,i=Vt.transition;Vt.transition=null;try{xt=1,Yt(e,t,r,n)}finally{xt=o,Vt.transition=i}}function qt(e,t,r,n){var o=xt,i=Vt.transition;Vt.transition=null;try{xt=4,Yt(e,t,r,n)}finally{xt=o,Vt.transition=i}}function Yt(e,t,r,n){if(Wt){var o=Kt(e,t,r,n);if(null===o)Wn(e,t,n,Xt,r),Nt(e,n);else if(function(e,t,r,n,o){switch(t){case"focusin":return _t=Dt(_t,e,t,r,n,o),!0;case"dragenter":return Pt=Dt(Pt,e,t,r,n,o),!0;case"mouseover":return Lt=Dt(Lt,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return At.set(i,Dt(At.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Rt.set(i,Dt(Rt.get(i)||null,e,t,r,n,o)),!0}return!1}(o,e,t,r,n))n.stopPropagation();else if(Nt(e,n),4&t&&-1<zt.indexOf(e)){for(;null!==o;){var i=bo(o);if(null!==i&&wt(i),null===(i=Kt(e,t,r,n))&&Wn(e,t,n,Xt,r),i===o)break;o=i}null!==o&&n.stopPropagation()}else Wn(e,t,n,null,r)}}var Xt=null;function Kt(e,t,r,n){if(Xt=null,null!==(e=xo(e=we(n))))if(null===(t=Ue(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=Ve(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function er(){if(Zt)return Zt;var e,t,r=Jt,n=r.length,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<n&&r[e]===o[e];e++);var a=n-e;for(t=1;t<=a&&r[n-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function or(e){function t(t,r,n,o,i){for(var a in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ir,ar,sr,lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=or(lr),ur=I({},lr,{view:0,detail:0}),dr=or(ur),pr=I({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&"mousemove"===e.type?(ir=e.screenX-sr.screenX,ar=e.screenY-sr.screenY):ar=ir=0,sr=e),ir)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),hr=or(pr),fr=or(I({},pr,{dataTransfer:0})),mr=or(I({},ur,{relatedTarget:0})),gr=or(I({},lr,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=I({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yr=or(vr),xr=or(I({},lr,{data:0})),br={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function Sr(){return jr}var Er=I({},ur,{key:function(e){if(e.key){var t=br[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cr=or(Er),Tr=or(I({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_r=or(I({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr})),Pr=or(I({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Lr=I({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ar=or(Lr),Rr=[9,13,27,32],Or=u&&"CompositionEvent"in window,zr=null;u&&"documentMode"in document&&(zr=document.documentMode);var Nr=u&&"TextEvent"in window&&!zr,Dr=u&&(!Or||zr&&8<zr&&11>=zr),Ir=String.fromCharCode(32),Mr=!1;function $r(e,t){switch(e){case"keyup":return-1!==Rr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var Ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Ur[e.type]:"textarea"===t}function Wr(e,t,r,n){Ce(n),0<(t=qn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Hr=null,qr=null;function Yr(e){Mn(e,0)}function Xr(e){if(Y(wo(e)))return e}function Kr(e,t){if("change"===e)return t}var Gr=!1;if(u){var Qr;if(u){var Jr="oninput"in document;if(!Jr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Jr="function"===typeof Zr.oninput}Qr=Jr}else Qr=!1;Gr=Qr&&(!document.documentMode||9<document.documentMode)}function en(){Hr&&(Hr.detachEvent("onpropertychange",tn),qr=Hr=null)}function tn(e){if("value"===e.propertyName&&Xr(qr)){var t=[];Wr(t,qr,e,we(e)),Ae(Yr,t)}}function rn(e,t,r){"focusin"===e?(en(),qr=r,(Hr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xr(qr)}function on(e,t){if("click"===e)return Xr(t)}function an(e,t){if("input"===e||"change"===e)return Xr(t)}var sn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ln(e,t){if(sn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!d.call(t,o)||!sn(e[o],t[o]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function un(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=X((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dn(r.ownerDocument.documentElement,r)){if(null!==n&&hn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=void 0===n.end?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=un(r,i);var a=un(r,n);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mn=u&&"documentMode"in document&&11>=document.documentMode,gn=null,vn=null,yn=null,xn=!1;function bn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;xn||null==gn||gn!==X(n)||("selectionStart"in(n=gn)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},yn&&ln(yn,n)||(yn=n,0<(n=qn(vn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},jn={},Sn={};function En(e){if(jn[e])return jn[e];if(!kn[e])return e;var t,r=kn[e];for(t in r)if(r.hasOwnProperty(t)&&t in Sn)return jn[e]=r[t];return e}u&&(Sn=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);var Cn=En("animationend"),Tn=En("animationiteration"),_n=En("animationstart"),Pn=En("transitionend"),Ln=new Map,An="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){Ln.set(e,t),l(t,[e])}for(var On=0;On<An.length;On++){var zn=An[On];Rn(zn.toLowerCase(),"on"+(zn[0].toUpperCase()+zn.slice(1)))}Rn(Cn,"onAnimationEnd"),Rn(Tn,"onAnimationIteration"),Rn(_n,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(Pn,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dn=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function In(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,a,s,l,c){if(Be.apply(this,arguments),De){if(!De)throw Error(i(198));var u=Ie;De=!1,Ie=null,Me||(Me=!0,$e=u)}}(n,t,void 0,e),e.currentTarget=null}function Mn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;In(o,s,c),i=l}else for(a=0;a<n.length;a++){if(l=(s=n[a]).instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;In(o,s,c),i=l}}}if(Me)throw e=$e,Me=!1,$e=null,e}function $n(e,t){var r=t[go];void 0===r&&(r=t[go]=new Set);var n=e+"__bubble";r.has(n)||(Vn(t,e,2,!1),r.add(n))}function Fn(e,t,r){var n=0;t&&(n|=4),Vn(r,e,n,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[Bn]){e[Bn]=!0,a.forEach((function(t){"selectionchange"!==t&&(Dn.has(t)||Fn(t,!1,e),Fn(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bn]||(t[Bn]=!0,Fn("selectionchange",!1,t))}}function Vn(e,t,r,n){switch(Gt(t)){case 1:var o=Ht;break;case 4:o=qt;break;default:o=Yt}r=o.bind(null,t,r,e),o=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Wn(e,t,r,n,o){var i=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var a=n.tag;if(3===a||4===a){var s=n.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=n.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=xo(s)))return;if(5===(l=a.tag)||6===l){n=i=a;continue e}s=s.parentNode}}n=n.return}Ae((function(){var n=i,o=we(r),a=[];e:{var s=Ln.get(e);if(void 0!==s){var l=cr,c=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":l=Cr;break;case"focusin":c="focus",l=mr;break;case"focusout":c="blur",l=mr;break;case"beforeblur":case"afterblur":l=mr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=fr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=_r;break;case Cn:case Tn:case _n:l=gr;break;case Pn:l=Pr;break;case"scroll":l=dr;break;case"wheel":l=Ar;break;case"copy":case"cut":case"paste":l=yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tr}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var h,f=n;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=Re(f,p))&&u.push(Hn(f,m,h)))),d)break;f=f.return}0<u.length&&(s=new l(s,c,null,r,o),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||r===be||!(c=r.relatedTarget||r.fromElement)||!xo(c)&&!c[mo])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=n,null!==(c=(c=r.relatedTarget||r.toElement)?xo(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=n),l!==c)){if(u=hr,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(u=Tr,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==l?s:wo(l),h=null==c?s:wo(c),(s=new u(m,f+"leave",l,r,o)).target=d,s.relatedTarget=h,m=null,xo(o)===n&&((u=new u(p,f+"enter",c,r,o)).target=h,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,f=0,h=u=l;h;h=Yn(h))f++;for(h=0,m=p;m;m=Yn(m))h++;for(;0<f-h;)u=Yn(u),f--;for(;0<h-f;)p=Yn(p),h--;for(;f--;){if(u===p||null!==p&&u===p.alternate)break e;u=Yn(u),p=Yn(p)}u=null}else u=null;null!==l&&Xn(a,s,l,u,!1),null!==c&&null!==d&&Xn(a,d,c,u,!0)}if("select"===(l=(s=n?wo(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Kr;else if(Vr(s))if(Gr)g=an;else{g=nn;var v=rn}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=on);switch(g&&(g=g(e,n))?Wr(a,g,r,o):(v&&v(e,s,n),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=n?wo(n):window,e){case"focusin":(Vr(v)||"true"===v.contentEditable)&&(gn=v,vn=n,yn=null);break;case"focusout":yn=vn=gn=null;break;case"mousedown":xn=!0;break;case"contextmenu":case"mouseup":case"dragend":xn=!1,bn(a,r,o);break;case"selectionchange":if(mn)break;case"keydown":case"keyup":bn(a,r,o)}var y;if(Or)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Br?$r(e,r)&&(x="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(x="onCompositionStart");x&&(Dr&&"ko"!==r.locale&&(Br||"onCompositionStart"!==x?"onCompositionEnd"===x&&Br&&(y=er()):(Jt="value"in(Qt=o)?Qt.value:Qt.textContent,Br=!0)),0<(v=qn(n,x)).length&&(x=new xr(x,e,null,r,o),a.push({event:x,listeners:v}),y?x.data=y:null!==(y=Fr(r))&&(x.data=y))),(y=Nr?function(e,t){switch(e){case"compositionend":return Fr(t);case"keypress":return 32!==t.which?null:(Mr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Mr?null:e;default:return null}}(e,r):function(e,t){if(Br)return"compositionend"===e||!Or&&$r(e,t)?(e=er(),Zt=Jt=Qt=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=qn(n,"onBeforeInput")).length&&(o=new xr("onBeforeInput","beforeinput",null,r,o),a.push({event:o,listeners:n}),o.data=y))}Mn(a,t)}))}function Hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qn(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Re(e,r))&&n.unshift(Hn(e,i,o)),null!=(i=Re(e,t))&&n.push(Hn(e,i,o))),e=e.return}return n}function Yn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xn(e,t,r,n,o){for(var i=t._reactName,a=[];null!==r&&r!==n;){var s=r,l=s.alternate,c=s.stateNode;if(null!==l&&l===n)break;5===s.tag&&null!==c&&(s=c,o?null!=(l=Re(r,i))&&a.unshift(Hn(r,l,s)):o||null!=(l=Re(r,i))&&a.push(Hn(r,l,s))),r=r.return}0!==a.length&&e.push({event:t,listeners:a})}var Kn=/\r\n?/g,Gn=/\u0000|\uFFFD/g;function Qn(e){return("string"===typeof e?e:""+e).replace(Kn,"\n").replace(Gn,"")}function Jn(e,t,r){if(t=Qn(t),Qn(e)!==t&&r)throw Error(i(425))}function Zn(){}var eo=null,to=null;function ro(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var no="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(so)}:no;function so(e){setTimeout((function(){throw e}))}function lo(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType)if("/$"===(r=o.data)){if(0===n)return e.removeChild(o),void Ut(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=o}while(r);Ut(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),ho="__reactFiber$"+po,fo="__reactProps$"+po,mo="__reactContainer$"+po,go="__reactEvents$"+po,vo="__reactListeners$"+po,yo="__reactHandles$"+po;function xo(e){var t=e[ho];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mo]||r[ho]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=uo(e);null!==e;){if(r=e[ho])return r;e=uo(e)}return t}r=(e=r).parentNode}return null}function bo(e){return!(e=e[ho]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[fo]||null}var jo=[],So=-1;function Eo(e){return{current:e}}function Co(e){0>So||(e.current=jo[So],jo[So]=null,So--)}function To(e,t){So++,jo[So]=e.current,e.current=t}var _o={},Po=Eo(_o),Lo=Eo(!1),Ao=_o;function Ro(e,t){var r=e.type.contextTypes;if(!r)return _o;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in r)i[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zo(){Co(Lo),Co(Po)}function No(e,t,r){if(Po.current!==_o)throw Error(i(168));To(Po,t),To(Lo,r)}function Do(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var o in n=n.getChildContext())if(!(o in t))throw Error(i(108,V(e)||"Unknown",o));return I({},r,n)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_o,Ao=Po.current,To(Po,e),To(Lo,Lo.current),!0}function Mo(e,t,r){var n=e.stateNode;if(!n)throw Error(i(169));r?(e=Do(e,t,Ao),n.__reactInternalMemoizedMergedChildContext=e,Co(Lo),Co(Po),To(Po,e)):Co(Lo),To(Lo,r)}var $o=null,Fo=!1,Bo=!1;function Uo(e){null===$o?$o=[e]:$o.push(e)}function Vo(){if(!Bo&&null!==$o){Bo=!0;var e=0,t=xt;try{var r=$o;for(xt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}$o=null,Fo=!1}catch(o){throw null!==$o&&($o=$o.slice(e+1)),Ye(Ze,Vo),o}finally{xt=t,Bo=!1}}return null}var Wo=[],Ho=0,qo=null,Yo=0,Xo=[],Ko=0,Go=null,Qo=1,Jo="";function Zo(e,t){Wo[Ho++]=Yo,Wo[Ho++]=qo,qo=e,Yo=t}function ei(e,t,r){Xo[Ko++]=Qo,Xo[Ko++]=Jo,Xo[Ko++]=Go,Go=e;var n=Qo;e=Jo;var o=32-at(n)-1;n&=~(1<<o),r+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,Qo=1<<32-at(t)+o|r<<o|n,Jo=i+e}else Qo=1<<i|r<<o|n,Jo=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ri(e){for(;e===qo;)qo=Wo[--Ho],Wo[Ho]=null,Yo=Wo[--Ho],Wo[Ho]=null;for(;e===Go;)Go=Xo[--Ko],Xo[Ko]=null,Jo=Xo[--Ko],Xo[Ko]=null,Qo=Xo[--Ko],Xo[Ko]=null}var ni=null,oi=null,ii=!1,ai=null;function si(e,t){var r=Ac(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function li(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,oi=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Go?{id:Qo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=Ac(18,null,null,0)).stateNode=t,r.return=e,e.child=r,ni=e,oi=null,!0);default:return!1}}function ci(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ii){var t=oi;if(t){var r=t;if(!li(e,t)){if(ci(e))throw Error(i(418));t=co(r.nextSibling);var n=ni;t&&li(e,t)?si(n,r):(e.flags=-4097&e.flags|2,ii=!1,ni=e)}}else{if(ci(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ni=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function pi(e){if(e!==ni)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ro(e.type,e.memoizedProps)),t&&(t=oi)){if(ci(e))throw hi(),Error(i(418));for(;t;)si(e,t),t=co(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){oi=co(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}oi=null}}else oi=ni?co(e.stateNode.nextSibling):null;return!0}function hi(){for(var e=oi;e;)e=co(e.nextSibling)}function fi(){oi=ni=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=b.ReactCurrentBatchConfig;function vi(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(i(309));var n=r.stateNode}if(!n)throw Error(i(147,e));var o=n,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Oc(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,r,n){return null===t||6!==t.tag?((t=Ic(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function c(e,t,r,n){var i=r.type;return i===j?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===R&&xi(i)===t.type)?((n=o(t,r.props)).ref=vi(e,t,r),n.return=e,n):((n=zc(r.type,r.key,r.props,null,e.mode,n)).ref=vi(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Mc(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function d(e,t,r,n,i){return null===t||7!==t.tag?((t=Nc(r,e.mode,n,i)).return=e,t):((t=o(t,r)).return=e,t)}function p(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ic(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=zc(t.type,t.key,t.props,null,e.mode,r)).ref=vi(e,null,t),r.return=e,r;case k:return(t=Mc(t,e.mode,r)).return=e,t;case R:return p(e,(0,t._init)(t._payload),r)}if(te(t)||N(t))return(t=Nc(t,e.mode,r,null)).return=e,t;yi(e,t)}return null}function h(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==o?null:l(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===o?c(e,t,r,n):null;case k:return r.key===o?u(e,t,r,n):null;case R:return h(e,t,(o=r._init)(r._payload),n)}if(te(r)||N(r))return null!==o?null:d(e,t,r,n,null);yi(e,r)}return null}function f(e,t,r,n,o){if("string"===typeof n&&""!==n||"number"===typeof n)return l(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return c(t,e=e.get(null===n.key?r:n.key)||null,n,o);case k:return u(t,e=e.get(null===n.key?r:n.key)||null,n,o);case R:return f(e,t,r,(0,n._init)(n._payload),o)}if(te(n)||N(n))return d(t,e=e.get(r)||null,n,o,null);yi(t,n)}return null}function m(o,i,s,l){for(var c=null,u=null,d=i,m=i=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(o,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),i=a(v,i,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===s.length)return r(o,d),ii&&Zo(o,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(o,s[m],l))&&(i=a(d,i,m),null===u?c=d:u.sibling=d,u=d);return ii&&Zo(o,m),c}for(d=n(o,d);m<s.length;m++)null!==(g=f(d,o,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(o,e)})),ii&&Zo(o,m),c}function g(o,s,l,c){var u=N(l);if("function"!==typeof u)throw Error(i(150));if(null==(l=u.call(l)))throw Error(i(151));for(var d=u=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=h(o,m,y.value,c);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(o,m),s=a(x,s,g),null===d?u=x:d.sibling=x,d=x,m=v}if(y.done)return r(o,m),ii&&Zo(o,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(o,y.value,c))&&(s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return ii&&Zo(o,g),u}for(m=n(o,m);!y.done;g++,y=l.next())null!==(y=f(m,o,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(o,e)})),ii&&Zo(o,g),u}return function e(n,i,a,l){if("object"===typeof a&&null!==a&&a.type===j&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=i;null!==u;){if(u.key===c){if((c=a.type)===j){if(7===u.tag){r(n,u.sibling),(i=o(u,a.props.children)).return=n,n=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===R&&xi(c)===u.type){r(n,u.sibling),(i=o(u,a.props)).ref=vi(n,u,a),i.return=n,n=i;break e}r(n,u);break}t(n,u),u=u.sibling}a.type===j?((i=Nc(a.props.children,n.mode,l,a.key)).return=n,n=i):((l=zc(a.type,a.key,a.props,null,n.mode,l)).ref=vi(n,i,a),l.return=n,n=l)}return s(n);case k:e:{for(u=a.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){r(n,i.sibling),(i=o(i,a.children||[])).return=n,n=i;break e}r(n,i);break}t(n,i),i=i.sibling}(i=Mc(a,n.mode,l)).return=n,n=i}return s(n);case R:return e(n,i,(u=a._init)(a._payload),l)}if(te(a))return m(n,i,a,l);if(N(a))return g(n,i,a,l);yi(n,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(r(n,i.sibling),(i=o(i,a)).return=n,n=i):(r(n,i),(i=Ic(a,n.mode,l)).return=n,n=i),s(n)):r(n,i)}}var wi=bi(!0),ki=bi(!1),ji=Eo(null),Si=null,Ei=null,Ci=null;function Ti(){Ci=Ei=Si=null}function _i(e){var t=ji.current;Co(ji),e._currentValue=t}function Pi(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Li(e,t){Si=e,Ci=Ei=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function Ai(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===Ei){if(null===Si)throw Error(i(308));Ei=e,Si.dependencies={lanes:0,firstContext:e}}else Ei=Ei.next=e;return t}var Ri=null;function Oi(e){null===Ri?Ri=[e]:Ri.push(e)}function zi(e,t,r,n){var o=t.interleaved;return null===o?(r.next=r,Oi(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ni(e,n)}function Ni(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var Di=!1;function Ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $i(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&_l)){var o=n.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ni(e,r)}return null===(o=n.interleaved)?(t.next=t,Oi(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ni(e,r)}function Bi(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}function Ui(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,i=null;if(null!==(r=r.firstBaseUpdate)){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===i?o=i=a:i=i.next=a,r=r.next}while(null!==r);null===i?o=i=t:i=i.next=t}else o=i=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Vi(e,t,r,n){var o=e.updateQueue;Di=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?i=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,u=c=l=null,s=i;;){var p=s.lane,h=s.eventTime;if((n&p)===p){null!==u&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(p=t,h=r,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(h,d,p):f)||void 0===p)break e;d=I({},d,p);break e;case 2:Di=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=p;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(p=s).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Dl|=a,e.lanes=a,e.memoizedState=d}}function Wi(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(i(191,o));o.call(n)}}}var Hi={},qi=Eo(Hi),Yi=Eo(Hi),Xi=Eo(Hi);function Ki(e){if(e===Hi)throw Error(i(174));return e}function Gi(e,t){switch(To(Xi,t),To(Yi,e),To(qi,Hi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Co(qi),To(qi,t)}function Qi(){Co(qi),Co(Yi),Co(Xi)}function Ji(e){Ki(Xi.current);var t=Ki(qi.current),r=le(t,e.type);t!==r&&(To(Yi,e),To(qi,r))}function Zi(e){Yi.current===e&&(Co(qi),Co(Yi))}var ea=Eo(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function na(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var oa=b.ReactCurrentDispatcher,ia=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,pa=0,ha=0;function fa(){throw Error(i(321))}function ma(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!sn(e[r],t[r]))return!1;return!0}function ga(e,t,r,n,o,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Za:es,e=r(n,o),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(i(301));a+=1,ca=la=null,t.updateQueue=null,oa.current=ts,e=r(n,o)}while(da)}if(oa.current=Ja,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(i(300));return e}function va(){var e=0!==pa;return pa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function xa(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(i(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=xa(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=la,o=n.baseQueue,a=r.pending;if(null!==a){if(null!==o){var s=o.next;o.next=a.next,a.next=s}n.baseQueue=o=a,r.pending=null}if(null!==o){a=o.next,n=n.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=n):c=c.next=p,sa.lanes|=d,Dl|=d}u=u.next}while(null!==u&&u!==a);null===c?s=n:c.next=l,sn(n,t.memoizedState)||(xs=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(null!==(e=r.interleaved)){o=e;do{a=o.lane,sa.lanes|=a,Dl|=a,o=o.next}while(o!==e)}else null===o&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ka(e){var t=xa(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(null!==o){r.pending=null;var s=o=o.next;do{a=e(a,s.action),s=s.next}while(s!==o);sn(a,t.memoizedState)||(xs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function ja(){}function Sa(e,t){var r=sa,n=xa(),o=t(),a=!sn(n.memoizedState,o);if(a&&(n.memoizedState=o,xs=!0),n=n.queue,Da(Ta.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(r.flags|=2048,Aa(9,Ca.bind(null,r,n,o,t),void 0,null),null===Pl)throw Error(i(349));0!==(30&aa)||Ea(r,t,o)}return o}function Ea(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Ca(e,t,r,n){t.value=r,t.getSnapshot=n,_a(t)&&Pa(e)}function Ta(e,t,r){return r((function(){_a(t)&&Pa(e)}))}function _a(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sn(e,r)}catch(n){return!0}}function Pa(e){var t=Ni(e,1);null!==t&&rc(t,e,1,-1)}function La(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Xa.bind(null,sa,e),[t.memoizedState,e]}function Aa(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Ra(){return xa().memoizedState}function Oa(e,t,r,n){var o=ya();sa.flags|=e,o.memoizedState=Aa(1|t,r,void 0,void 0===n?null:n)}function za(e,t,r,n){var o=xa();n=void 0===n?null:n;var i=void 0;if(null!==la){var a=la.memoizedState;if(i=a.destroy,null!==n&&ma(n,a.deps))return void(o.memoizedState=Aa(t,r,i,n))}sa.flags|=e,o.memoizedState=Aa(1|t,r,i,n)}function Na(e,t){return Oa(8390656,8,e,t)}function Da(e,t){return za(2048,8,e,t)}function Ia(e,t){return za(4,2,e,t)}function Ma(e,t){return za(4,4,e,t)}function $a(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fa(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,za(4,4,$a.bind(null,t,e),r)}function Ba(){}function Ua(e,t){var r=xa();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ma(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Va(e,t){var r=xa();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ma(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Wa(e,t,r){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=r):(sn(r,t)||(r=mt(),sa.lanes|=r,Dl|=r,e.baseState=!0),t)}function Ha(e,t){var r=xt;xt=0!==r&&4>r?r:4,e(!0);var n=ia.transition;ia.transition={};try{e(!1),t()}finally{xt=r,ia.transition=n}}function qa(){return xa().memoizedState}function Ya(e,t,r){var n=tc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ka(e))Ga(t,r);else if(null!==(r=zi(e,t,r,n))){rc(r,e,n,ec()),Qa(r,t,n)}}function Xa(e,t,r){var n=tc(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ka(e))Ga(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,r);if(o.hasEagerState=!0,o.eagerState=s,sn(s,a)){var l=t.interleaved;return null===l?(o.next=o,Oi(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(c){}null!==(r=zi(e,t,o,n))&&(rc(r,e,n,o=ec()),Qa(r,t,n))}}function Ka(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Ga(e,t){da=ua=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Qa(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}var Ja={readContext:Ai,useCallback:fa,useContext:fa,useEffect:fa,useImperativeHandle:fa,useInsertionEffect:fa,useLayoutEffect:fa,useMemo:fa,useReducer:fa,useRef:fa,useState:fa,useDebugValue:fa,useDeferredValue:fa,useTransition:fa,useMutableSource:fa,useSyncExternalStore:fa,useId:fa,unstable_isNewReconciler:!1},Za={readContext:Ai,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Ai,useEffect:Na,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Oa(4194308,4,$a.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oa(4,2,e,t)},useMemo:function(e,t){var r=ya();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ya();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ya.bind(null,sa,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:La,useDebugValue:Ba,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=La(!1),t=e[0];return e=Ha.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=sa,o=ya();if(ii){if(void 0===r)throw Error(i(407));r=r()}else{if(r=t(),null===Pl)throw Error(i(349));0!==(30&aa)||Ea(n,t,r)}o.memoizedState=r;var a={value:r,getSnapshot:t};return o.queue=a,Na(Ta.bind(null,n,a,e),[e]),n.flags|=2048,Aa(9,Ca.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=ya(),t=Pl.identifierPrefix;if(ii){var r=Jo;t=":"+t+"R"+(r=(Qo&~(1<<32-at(Qo)-1)).toString(32)+r),0<(r=pa++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=ha++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ai,useCallback:Ua,useContext:Ai,useEffect:Da,useImperativeHandle:Fa,useInsertionEffect:Ia,useLayoutEffect:Ma,useMemo:Va,useReducer:wa,useRef:Ra,useState:function(){return wa(ba)},useDebugValue:Ba,useDeferredValue:function(e){return Wa(xa(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],xa().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:qa,unstable_isNewReconciler:!1},ts={readContext:Ai,useCallback:Ua,useContext:Ai,useEffect:Da,useImperativeHandle:Fa,useInsertionEffect:Ia,useLayoutEffect:Ma,useMemo:Va,useReducer:ka,useRef:Ra,useState:function(){return ka(ba)},useDebugValue:Ba,useDeferredValue:function(e){var t=xa();return null===la?t.memoizedState=e:Wa(t,la.memoizedState,e)},useTransition:function(){return[ka(ba)[0],xa().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:qa,unstable_isNewReconciler:!1};function rs(e,t){if(e&&e.defaultProps){for(var r in t=I({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}function ns(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:I({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var os={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ec(),o=tc(e),i=$i(n,o);i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=Fi(e,i,o))&&(rc(t,e,o,n),Bi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ec(),o=tc(e),i=$i(n,o);i.tag=1,i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=Fi(e,i,o))&&(rc(t,e,o,n),Bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ec(),n=tc(e),o=$i(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Fi(e,o,n))&&(rc(t,e,n,r),Bi(t,e,n))}};function is(e,t,r,n,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!ln(r,n)||!ln(o,i))}function as(e,t,r){var n=!1,o=_o,i=t.contextType;return"object"===typeof i&&null!==i?i=Ai(i):(o=Oo(t)?Ao:Po.current,i=(n=null!==(n=t.contextTypes)&&void 0!==n)?Ro(e,o):_o),t=new t(r,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=os,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ss(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function ls(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Ii(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ai(i):(i=Oo(t)?Ao:Po.current,o.context=Ro(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(ns(e,t,i,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&os.enqueueReplaceState(o,o.state,null),Vi(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var r="",n=t;do{r+=B(n),n=n.return}while(n);var o=r}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function us(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(r){setTimeout((function(){throw r}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,r){(r=$i(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Wl||(Wl=!0,Hl=n),ds(0,t)},r}function fs(e,t,r){(r=$i(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){ds(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(r.callback=function(){ds(0,t),"function"!==typeof n&&(null===ql?ql=new Set([this]):ql.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function ms(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new ps;var o=new Set;n.set(t,o)}else void 0===(o=n.get(t))&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Ec.bind(null,e,t,r),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,r,n,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=$i(-1,1)).tag=2,Fi(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ys=b.ReactCurrentOwner,xs=!1;function bs(e,t,r,n){t.child=null===e?ki(t,null,r,n):wi(t,e.child,r,n)}function ws(e,t,r,n,o){r=r.render;var i=t.ref;return Li(t,o),n=ga(e,t,r,n,i,o),r=va(),null===e||xs?(ii&&r&&ti(t),t.flags|=1,bs(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ws(e,t,o))}function ks(e,t,r,n,o){if(null===e){var i=r.type;return"function"!==typeof i||Rc(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=zc(r.type,null,n,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,js(e,t,i,n,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((r=null!==(r=r.compare)?r:ln)(a,n)&&e.ref===t.ref)return Ws(e,t,o)}return t.flags|=1,(e=Oc(i,n)).ref=t.ref,e.return=t,t.child=e}function js(e,t,r,n,o){if(null!==e){var i=e.memoizedProps;if(ln(i,n)&&e.ref===t.ref){if(xs=!1,t.pendingProps=n=i,0===(e.lanes&o))return t.lanes=e.lanes,Ws(e,t,o);0!==(131072&e.flags)&&(xs=!0)}}return Cs(e,t,r,n,o)}function Ss(e,t,r){var n=t.pendingProps,o=n.children,i=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},To(Ol,Rl),Rl|=r;else{if(0===(1073741824&r))return e=null!==i?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,To(Ol,Rl),Rl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==i?i.baseLanes:r,To(Ol,Rl),Rl|=n}else null!==i?(n=i.baseLanes|r,t.memoizedState=null):n=r,To(Ol,Rl),Rl|=n;return bs(e,t,o,r),t.child}function Es(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,r,n,o){var i=Oo(r)?Ao:Po.current;return i=Ro(t,i),Li(t,o),r=ga(e,t,r,n,i,o),n=va(),null===e||xs?(ii&&n&&ti(t),t.flags|=1,bs(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ws(e,t,o))}function Ts(e,t,r,n,o){if(Oo(r)){var i=!0;Io(t)}else i=!1;if(Li(t,o),null===t.stateNode)Vs(e,t),as(t,r,n),ls(t,r,n,o),n=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=r.contextType;"object"===typeof c&&null!==c?c=Ai(c):c=Ro(t,c=Oo(r)?Ao:Po.current);var u=r.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==n||l!==c)&&ss(t,a,n,c),Di=!1;var p=t.memoizedState;a.state=p,Vi(t,n,a,o),l=t.memoizedState,s!==n||p!==l||Lo.current||Di?("function"===typeof u&&(ns(t,r,u,n),l=t.memoizedState),(s=Di||is(t,r,s,n,p,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=c,n=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Mi(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rs(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(l=r.contextType)&&null!==l?l=Ai(l):l=Ro(t,l=Oo(r)?Ao:Po.current);var h=r.getDerivedStateFromProps;(u="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,n,l),Di=!1,p=t.memoizedState,a.state=p,Vi(t,n,a,o);var f=t.memoizedState;s!==d||p!==f||Lo.current||Di?("function"===typeof h&&(ns(t,r,h,n),f=t.memoizedState),(c=Di||is(t,r,c,n,p,f,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(n,f,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(n,f,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=f),a.props=n,a.state=f,a.context=l,n=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return _s(e,t,r,n,i,o)}function _s(e,t,r,n,o,i){Es(e,t);var a=0!==(128&t.flags);if(!n&&!a)return o&&Mo(t,r,!1),Ws(e,t,i);n=t.stateNode,ys.current=t;var s=a&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,s,i)):bs(e,t,s,i),t.memoizedState=n.state,o&&Mo(t,r,!0),t.child}function Ps(e){var t=e.stateNode;t.pendingContext?No(0,t.pendingContext,t.pendingContext!==t.context):t.context&&No(0,t.context,!1),Gi(e,t.containerInfo)}function Ls(e,t,r,n,o){return fi(),mi(o),t.flags|=256,bs(e,t,r,n),t.child}var As,Rs,Os,zs,Ns={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Is(e,t,r){var n,o=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&a)),n?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),To(ea,1&a),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&o)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Dc(l,o,0,null),e=Nc(e,o,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ds(r),t.memoizedState=Ns,e):Ms(t,l));if(null!==(a=e.memoizedState)&&null!==(n=a.dehydrated))return function(e,t,r,n,o,a,s){if(r)return 256&t.flags?(t.flags&=-257,$s(e,t,s,n=us(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=n.fallback,o=t.mode,n=Dc({mode:"visible",children:n.children},o,0,null),(a=Nc(a,o,s,null)).flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,0!==(1&t.mode)&&wi(t,e.child,null,s),t.child.memoizedState=Ds(s),t.memoizedState=Ns,a);if(0===(1&t.mode))return $s(e,t,s,null);if("$!"===o.data){if(n=o.nextSibling&&o.nextSibling.dataset)var l=n.dgst;return n=l,$s(e,t,s,n=us(a=Error(i(419)),n,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(n=Pl)){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(n.suspendedLanes|s))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Ni(e,o),rc(n,e,o,-1))}return mc(),$s(e,t,s,n=us(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=co(o.nextSibling),ni=t,ii=!0,ai=null,null!==e&&(Xo[Ko++]=Qo,Xo[Ko++]=Jo,Xo[Ko++]=Go,Qo=e.id,Jo=e.overflow,Go=t),t=Ms(t,n.children),t.flags|=4096,t)}(e,t,l,o,n,a,r);if(s){s=o.fallback,l=t.mode,n=(a=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&l)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Oc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==n?s=Oc(n,s):(s=Nc(s,l,r,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=null===(l=e.child.memoizedState)?Ds(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Ns,o}return e=(s=e.child).sibling,o=Oc(s,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=r),o.return=t,o.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Ms(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function $s(e,t,r,n){return null!==n&&mi(n),wi(t,e.child,null,r),(e=Ms(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fs(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Pi(e.return,t,r)}function Bs(e,t,r,n,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Us(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(bs(e,t,n.children,r),0!==(2&(n=ea.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fs(e,r,t);else if(19===e.tag)Fs(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(To(ea,n),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===ta(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Bs(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Bs(t,!0,r,null,i);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Dl|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=Oc(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Oc(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Hs(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=14680064&o.subtreeFlags,n|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Ys(e,t,r){var n=t.pendingProps;switch(ri(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qs(t),null;case 1:case 17:return Oo(t.type)&&zo(),qs(t),null;case 3:return n=t.stateNode,Qi(),Co(Lo),Co(Po),na(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(ac(ai),ai=null))),Rs(e,t),qs(t),null;case 5:Zi(t);var o=Ki(Xi.current);if(r=t.type,null!==e&&null!=t.stateNode)Os(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(i(166));return qs(t),null}if(e=Ki(qi.current),pi(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[ho]=t,n[fo]=a,e=0!==(1&t.mode),r){case"dialog":$n("cancel",n),$n("close",n);break;case"iframe":case"object":case"embed":$n("load",n);break;case"video":case"audio":for(o=0;o<Nn.length;o++)$n(Nn[o],n);break;case"source":$n("error",n);break;case"img":case"image":case"link":$n("error",n),$n("load",n);break;case"details":$n("toggle",n);break;case"input":G(n,a),$n("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},$n("invalid",n);break;case"textarea":oe(n,a),$n("invalid",n)}for(var l in ye(r,a),o=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?n.textContent!==c&&(!0!==a.suppressHydrationWarning&&Jn(n.textContent,c,e),o=["children",c]):"number"===typeof c&&n.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Jn(n.textContent,c,e),o=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&$n("scroll",n)}switch(r){case"input":q(n),Z(n,a,!0);break;case"textarea":q(n),ae(n);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(n.onclick=Zn)}n=o,t.updateQueue=n,null!==n&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),"select"===r&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[ho]=t,e[fo]=n,As(e,t,!1,!1),t.stateNode=e;e:{switch(l=xe(r,n),r){case"dialog":$n("cancel",e),$n("close",e),o=n;break;case"iframe":case"object":case"embed":$n("load",e),o=n;break;case"video":case"audio":for(o=0;o<Nn.length;o++)$n(Nn[o],e);o=n;break;case"source":$n("error",e),o=n;break;case"img":case"image":case"link":$n("error",e),$n("load",e),o=n;break;case"details":$n("toggle",e),o=n;break;case"input":G(e,n),o=K(e,n),$n("invalid",e);break;case"option":default:o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=I({},n,{value:void 0}),$n("invalid",e);break;case"textarea":oe(e,n),o=ne(e,n),$n("invalid",e)}for(a in ye(r,o),c=o)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==r||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&$n("scroll",e):null!=u&&x(e,a,u,l))}switch(r){case"input":q(e),Z(e,n,!1);break;case"textarea":q(e),ae(e);break;case"option":null!=n.value&&e.setAttribute("value",""+W(n.value));break;case"select":e.multiple=!!n.multiple,null!=(a=n.value)?re(e,!!n.multiple,a,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return qs(t),null;case 6:if(e&&null!=t.stateNode)zs(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));if(r=Ki(Xi.current),Ki(qi.current),pi(t)){if(n=t.stateNode,r=t.memoizedProps,n[ho]=t,(a=n.nodeValue!==r)&&null!==(e=ni))switch(e.tag){case 3:Jn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jn(n.nodeValue,r,0!==(1&e.mode))}a&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[ho]=t,t.stateNode=n}return qs(t),null;case 13:if(Co(ea),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))hi(),fi(),t.flags|=98560,a=!1;else if(a=pi(t),null!==n&&null!==n.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[ho]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),a=!1}else null!==ai&&(ac(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===zl&&(zl=3):mc())),null!==t.updateQueue&&(t.flags|=4),qs(t),null);case 4:return Qi(),Rs(e,t),null===e&&Un(t.stateNode.containerInfo),qs(t),null;case 10:return _i(t.type._context),qs(t),null;case 19:if(Co(ea),null===(a=t.memoizedState))return qs(t),null;if(n=0!==(128&t.flags),null===(l=a.rendering))if(n)Hs(a,!1);else{if(0!==zl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Hs(a,!1),null!==(n=l.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(a=r).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return To(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Qe()>Ul&&(t.flags|=128,n=!0,Hs(a,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=ta(l))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Hs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!ii)return qs(t),null}else 2*Qe()-a.renderingStartTime>Ul&&1073741824!==r&&(t.flags|=128,n=!0,Hs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=a.last)?r.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,r=ea.current,To(ea,n?1&r|2:1&r),t):(qs(t),null);case 22:case 23:return dc(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Rl)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Xs(e,t){switch(ri(t),t.tag){case 1:return Oo(t.type)&&zo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qi(),Co(Lo),Co(Po),na(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Co(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Co(ea),null;case 4:return Qi(),null;case 10:return _i(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}As=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Rs=function(){},Os=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Ki(qi.current);var i,a=null;switch(r){case"input":o=K(e,o),n=K(e,n),a=[];break;case"select":o=I({},o,{value:void 0}),n=I({},n,{value:void 0}),a=[];break;case"textarea":o=ne(e,o),n=ne(e,n),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof n.onClick&&(e.onclick=Zn)}for(u in ye(r,n),r=null,o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var c=n[u];if(l=null!=o?o[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(a||(a=[]),a.push(u,r)),r=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&$n("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},zs=function(e,t,r,n){r!==n&&(t.flags|=4)};var Ks=!1,Gs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){Sc(e,t,n)}else r.current=null}function el(e,t,r){try{r()}catch(n){Sc(e,t,n)}}var tl=!1;function rl(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&el(t,r,i)}o=o.next}while(o!==n)}}function nl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ol(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function il(e){var t=e.alternate;null!==t&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ho],delete t[fo],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Zn));else if(4!==n&&null!==(e=e.child))for(ll(e,t,r),e=e.sibling;null!==e;)ll(e,t,r),e=e.sibling}function cl(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cl(e,t,r),e=e.sibling;null!==e;)cl(e,t,r),e=e.sibling}var ul=null,dl=!1;function pl(e,t,r){for(r=r.child;null!==r;)hl(e,t,r),r=r.sibling}function hl(e,t,r){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,r)}catch(s){}switch(r.tag){case 5:Gs||Zs(r,t);case 6:var n=ul,o=dl;ul=null,pl(e,t,r),dl=o,null!==(ul=n)&&(dl?(e=ul,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):ul.removeChild(r.stateNode));break;case 18:null!==ul&&(dl?(e=ul,r=r.stateNode,8===e.nodeType?lo(e.parentNode,r):1===e.nodeType&&lo(e,r),Ut(e)):lo(ul,r.stateNode));break;case 4:n=ul,o=dl,ul=r.stateNode.containerInfo,dl=!0,pl(e,t,r),ul=n,dl=o;break;case 0:case 11:case 14:case 15:if(!Gs&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&el(r,t,a),o=o.next}while(o!==n)}pl(e,t,r);break;case 1:if(!Gs&&(Zs(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Sc(r,t,s)}pl(e,t,r);break;case 21:pl(e,t,r);break;case 22:1&r.mode?(Gs=(n=Gs)||null!==r.memoizedState,pl(e,t,r),Gs=n):pl(e,t,r);break;default:pl(e,t,r)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Qs),t.forEach((function(t){var n=_c.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function ml(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var o=r[n];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(i(160));hl(a,s,o),ul=null,dl=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){Sc(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),vl(e),4&n){try{rl(3,e,e.return),nl(3,e)}catch(g){Sc(e,e.return,g)}try{rl(5,e,e.return)}catch(g){Sc(e,e.return,g)}}break;case 1:ml(t,e),vl(e),512&n&&null!==r&&Zs(r,r.return);break;case 5:if(ml(t,e),vl(e),512&n&&null!==r&&Zs(r,r.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){Sc(e,e.return,g)}}if(4&n&&null!=(o=e.stateNode)){var a=e.memoizedProps,s=null!==r?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&Q(o,a),xe(l,s);var u=xe(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):x(o,d,p,u)}switch(l){case"input":J(o,a);break;case"textarea":ie(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var f=a.value;null!=f?re(o,!!a.multiple,f,!1):h!==!!a.multiple&&(null!=a.defaultValue?re(o,!!a.multiple,a.defaultValue,!0):re(o,!!a.multiple,a.multiple?[]:"",!1))}o[fo]=a}catch(g){Sc(e,e.return,g)}}break;case 6:if(ml(t,e),vl(e),4&n){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){Sc(e,e.return,g)}}break;case 3:if(ml(t,e),vl(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Sc(e,e.return,g)}break;case 4:default:ml(t,e),vl(e);break;case 13:ml(t,e),vl(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Bl=Qe())),4&n&&fl(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Gs=(u=Gs)||d,ml(t,e),Gs=u):ml(t,e),vl(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(p=Js=d;null!==Js;){switch(f=(h=Js).child,h.tag){case 0:case 11:case 14:case 15:rl(4,h,h.return);break;case 1:Zs(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){n=h,r=h.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Sc(n,r,g)}}break;case 5:Zs(h,h.return);break;case 22:if(null!==h.memoizedState){wl(p);continue}}null!==f?(f.return=h,Js=f):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,u?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){Sc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Sc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),vl(e),4&n&&fl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(al(r)){var n=r;break e}r=r.return}throw Error(i(160))}switch(n.tag){case 5:var o=n.stateNode;32&n.flags&&(pe(o,""),n.flags&=-33),cl(e,sl(e),o);break;case 3:case 4:var a=n.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(i(161))}}catch(s){Sc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,r){Js=e,xl(e,t,r)}function xl(e,t,r){for(var n=0!==(1&e.mode);null!==Js;){var o=Js,i=o.child;if(22===o.tag&&n){var a=null!==o.memoizedState||Ks;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||Gs;s=Ks;var c=Gs;if(Ks=a,(Gs=l)&&!c)for(Js=o;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?kl(o):null!==l?(l.return=a,Js=l):kl(o);for(;null!==i;)Js=i,xl(i,t,r),i=i.sibling;Js=o,Ks=s,Gs=c}bl(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Js=i):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gs||nl(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Gs)if(null===r)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:rs(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wi(t,a,n);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Wi(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(i(163))}Gs||512&t.flags&&ol(t)}catch(h){Sc(t,t.return,h)}}if(t===e){Js=null;break}if(null!==(r=t.sibling)){r.return=t.return,Js=r;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Js=r;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{nl(4,t)}catch(l){Sc(t,r,l)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var o=t.return;try{n.componentDidMount()}catch(l){Sc(t,o,l)}}var i=t.return;try{ol(t)}catch(l){Sc(t,i,l)}break;case 5:var a=t.return;try{ol(t)}catch(l){Sc(t,a,l)}}}catch(l){Sc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var jl,Sl=Math.ceil,El=b.ReactCurrentDispatcher,Cl=b.ReactCurrentOwner,Tl=b.ReactCurrentBatchConfig,_l=0,Pl=null,Ll=null,Al=0,Rl=0,Ol=Eo(0),zl=0,Nl=null,Dl=0,Il=0,Ml=0,$l=null,Fl=null,Bl=0,Ul=1/0,Vl=null,Wl=!1,Hl=null,ql=null,Yl=!1,Xl=null,Kl=0,Gl=0,Ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&_l)?Qe():-1!==Jl?Jl:Jl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&_l)&&0!==Al?Al&-Al:null!==gi.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function rc(e,t,r,n){if(50<Gl)throw Gl=0,Ql=null,Error(i(185));vt(e,r,n),0!==(2&_l)&&e===Pl||(e===Pl&&(0===(2&_l)&&(Il|=r),4===zl&&sc(e,Al)),nc(e,n),1===r&&0===_l&&0===(1&t.mode)&&(Ul=Qe()+500,Fo&&Vo()))}function nc(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),s=1<<a,l=o[a];-1===l?0!==(s&r)&&0===(s&n)||(o[a]=ht(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var n=pt(e,e===Pl?Al:0);if(0===n)null!==r&&Xe(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Xe(r),1===t)0===e.tag?function(e){Fo=!0,Uo(e)}(lc.bind(null,e)):Uo(lc.bind(null,e)),ao((function(){0===(6&_l)&&Vo()})),r=null;else{switch(bt(n)){case 1:r=Ze;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=Pc(r,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function oc(e,t){if(Jl=-1,Zl=0,0!==(6&_l))throw Error(i(327));var r=e.callbackNode;if(kc()&&e.callbackNode!==r)return null;var n=pt(e,e===Pl?Al:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=gc(e,n);else{t=n;var o=_l;_l|=2;var a=fc();for(Pl===e&&Al===t||(Vl=null,Ul=Qe()+500,pc(e,t));;)try{yc();break}catch(l){hc(e,l)}Ti(),El.current=a,_l=o,null!==Ll?t=0:(Pl=null,Al=0,t=zl)}if(0!==t){if(2===t&&(0!==(o=ft(e))&&(n=o,t=ic(e,o))),1===t)throw r=Nl,pc(e,0),sc(e,n),nc(e,Qe()),r;if(6===t)sc(e,n);else{if(o=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!sn(i(),o))return!1}catch(s){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,n))&&(0!==(a=ft(e))&&(n=a,t=ic(e,a))),1===t))throw r=Nl,pc(e,0),sc(e,n),nc(e,Qe()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Fl,Vl);break;case 3:if(sc(e,n),(130023424&n)===n&&10<(t=Bl+500-Qe())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&n)!==n){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=no(wc.bind(null,e,Fl,Vl),t);break}wc(e,Fl,Vl);break;case 4:if(sc(e,n),(4194240&n)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-at(n);a=1<<s,(s=t[s])>o&&(o=s),n&=~a}if(n=o,10<(n=(120>(n=Qe()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Sl(n/1960))-n)){e.timeoutHandle=no(wc.bind(null,e,Fl,Vl),n);break}wc(e,Fl,Vl);break;default:throw Error(i(329))}}}return nc(e,Qe()),e.callbackNode===r?oc.bind(null,e):null}function ic(e,t){var r=$l;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Fl,Fl=r,null!==t&&ac(t)),e}function ac(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function sc(e,t){for(t&=~Ml,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-at(t),n=1<<r;e[r]=-1,t&=~n}}function lc(e){if(0!==(6&_l))throw Error(i(327));kc();var t=pt(e,0);if(0===(1&t))return nc(e,Qe()),null;var r=gc(e,t);if(0!==e.tag&&2===r){var n=ft(e);0!==n&&(t=n,r=ic(e,n))}if(1===r)throw r=Nl,pc(e,0),sc(e,t),nc(e,Qe()),r;if(6===r)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Fl,Vl),nc(e,Qe()),null}function cc(e,t){var r=_l;_l|=1;try{return e(t)}finally{0===(_l=r)&&(Ul=Qe()+500,Fo&&Vo())}}function uc(e){null!==Xl&&0===Xl.tag&&0===(6&_l)&&kc();var t=_l;_l|=1;var r=Tl.transition,n=xt;try{if(Tl.transition=null,xt=1,e)return e()}finally{xt=n,Tl.transition=r,0===(6&(_l=t))&&Vo()}}function dc(){Rl=Ol.current,Co(Ol)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,oo(r)),null!==Ll)for(r=Ll.return;null!==r;){var n=r;switch(ri(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&zo();break;case 3:Qi(),Co(Lo),Co(Po),na();break;case 5:Zi(n);break;case 4:Qi();break;case 13:case 19:Co(ea);break;case 10:_i(n.type._context);break;case 22:case 23:dc()}r=r.return}if(Pl=e,Ll=e=Oc(e.current,null),Al=Rl=t,zl=0,Nl=null,Ml=Il=Dl=0,Fl=$l=null,null!==Ri){for(t=0;t<Ri.length;t++)if(null!==(n=(r=Ri[t]).interleaved)){r.interleaved=null;var o=n.next,i=r.pending;if(null!==i){var a=i.next;i.next=o,n.next=a}r.pending=n}Ri=null}return e}function hc(e,t){for(;;){var r=Ll;try{if(Ti(),oa.current=Ja,ua){for(var n=sa.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,pa=0,Cl.current=null,null===r||null===r.return){zl=1,Nl=t,Ll=null;break}e:{var a=e,s=r.return,l=r,c=t;if(t=Al,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=gs(s);if(null!==f){f.flags&=-257,vs(f,s,l,0,t),1&f.mode&&ms(a,u,t),c=u;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,u,t),mc();break e}c=Error(i(426))}else if(ii&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),mi(cs(c,l));break e}}a=c=cs(c,l),4!==zl&&(zl=2),null===$l?$l=[a]:$l.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Ui(a,hs(0,c,t));break e;case 1:l=c;var y=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===ql||!ql.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Ui(a,fs(a,l,t));break e}}a=a.return}while(null!==a)}bc(r)}catch(b){t=b,Ll===r&&null!==r&&(Ll=r=r.return);continue}break}}function fc(){var e=El.current;return El.current=Ja,null===e?Ja:e}function mc(){0!==zl&&3!==zl&&2!==zl||(zl=4),null===Pl||0===(268435455&Dl)&&0===(268435455&Il)||sc(Pl,Al)}function gc(e,t){var r=_l;_l|=2;var n=fc();for(Pl===e&&Al===t||(Vl=null,pc(e,t));;)try{vc();break}catch(o){hc(e,o)}if(Ti(),_l=r,El.current=n,null!==Ll)throw Error(i(261));return Pl=null,Al=0,zl}function vc(){for(;null!==Ll;)xc(Ll)}function yc(){for(;null!==Ll&&!Ke();)xc(Ll)}function xc(e){var t=jl(e.alternate,e,Rl);e.memoizedProps=e.pendingProps,null===t?bc(e):Ll=t,Cl.current=null}function bc(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Ys(r,t,Rl)))return void(Ll=r)}else{if(null!==(r=Xs(r,t)))return r.flags&=32767,void(Ll=r);if(null===e)return zl=6,void(Ll=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ll=t);Ll=t=e}while(null!==t);0===zl&&(zl=5)}function wc(e,t,r){var n=xt,o=Tl.transition;try{Tl.transition=null,xt=1,function(e,t,r,n){do{kc()}while(null!==Xl);if(0!==(6&_l))throw Error(i(327));r=e.finishedWork;var o=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-at(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}(e,a),e===Pl&&(Ll=Pl=null,Al=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Yl||(Yl=!0,Pc(tt,(function(){return kc(),null}))),a=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||a){a=Tl.transition,Tl.transition=null;var s=xt;xt=1;var l=_l;_l|=4,Cl.current=null,function(e,t){if(eo=Wt,hn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var o=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch(w){r=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==r||0!==o&&3!==p.nodeType||(l=s+o),p!==a||0!==n&&3!==p.nodeType||(c=s+n),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===r&&++u===o&&(l=s),h===a&&++d===n&&(c=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}r=-1===l||-1===c?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(to={focusedElem:e,selectionRange:r},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:rs(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(w){Sc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,r),gl(r,e),fn(to),Wt=!!eo,to=eo=null,e.current=r,yl(r,e,o),Ge(),_l=l,xt=s,Tl.transition=a}else e.current=r;if(Yl&&(Yl=!1,Xl=e,Kl=o),a=e.pendingLanes,0===a&&(ql=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),nc(e,Qe()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Kl)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Ql?Gl++:(Gl=0,Ql=e):Gl=0,Vo()}(e,t,r,n)}finally{Tl.transition=o,xt=n}return null}function kc(){if(null!==Xl){var e=bt(Kl),t=Tl.transition,r=xt;try{if(Tl.transition=null,xt=16>e?16:e,null===Xl)var n=!1;else{if(e=Xl,Xl=null,Kl=0,0!==(6&_l))throw Error(i(331));var o=_l;for(_l|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:rl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Js=p;else for(;null!==Js;){var h=(d=Js).sibling,f=d.return;if(il(d),d===u){Js=null;break}if(null!==h){h.return=f,Js=h;break}Js=f}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:rl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Js=y;break e}Js=a.return}}var x=e.current;for(Js=x;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=x;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(k){Sc(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(_l=o,Vo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(k){}n=!0}return n}finally{xt=r,Tl.transition=t}}return!1}function jc(e,t,r){e=Fi(e,t=hs(0,t=cs(r,t),1),1),t=ec(),null!==e&&(vt(e,1,t),nc(e,t))}function Sc(e,t,r){if(3===e.tag)jc(e,e,r);else for(;null!==t;){if(3===t.tag){jc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===ql||!ql.has(n))){t=Fi(t,e=fs(t,e=cs(r,e),1),1),e=ec(),null!==t&&(vt(t,1,e),nc(t,e));break}}t=t.return}}function Ec(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&r,Pl===e&&(Al&r)===r&&(4===zl||3===zl&&(130023424&Al)===Al&&500>Qe()-Bl?pc(e,0):Ml|=r),nc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var r=ec();null!==(e=Ni(e,t))&&(vt(e,t,r),nc(e,r))}function Tc(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Cc(e,r)}function _c(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;null!==o&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(i(314))}null!==n&&n.delete(t),Cc(e,r)}function Pc(e,t){return Ye(e,t)}function Lc(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ac(e,t,r,n){return new Lc(e,t,r,n)}function Rc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Oc(e,t){var r=e.alternate;return null===r?((r=Ac(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function zc(e,t,r,n,o,a){var s=2;if(n=e,"function"===typeof e)Rc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case j:return Nc(r.children,o,a,t);case S:s=8,o|=8;break;case E:return(e=Ac(12,r,t,2|o)).elementType=E,e.lanes=a,e;case P:return(e=Ac(13,r,t,o)).elementType=P,e.lanes=a,e;case L:return(e=Ac(19,r,t,o)).elementType=L,e.lanes=a,e;case O:return Dc(r,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case T:s=9;break e;case _:s=11;break e;case A:s=14;break e;case R:s=16,n=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Ac(s,r,t,o)).elementType=e,t.type=n,t.lanes=a,t}function Nc(e,t,r,n){return(e=Ac(7,e,n,t)).lanes=r,e}function Dc(e,t,r,n){return(e=Ac(22,e,n,t)).elementType=O,e.lanes=r,e.stateNode={isHidden:!1},e}function Ic(e,t,r){return(e=Ac(6,e,null,t)).lanes=r,e}function Mc(e,t,r){return(t=Ac(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $c(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fc(e,t,r,n,o,i,a,s,l){return e=new $c(e,t,r,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Ac(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ii(i),e}function Bc(e){if(!e)return _o;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var r=e.type;if(Oo(r))return Do(e,r,t)}return t}function Uc(e,t,r,n,o,i,a,s,l){return(e=Fc(r,n,!0,e,0,i,0,s,l)).context=Bc(null),r=e.current,(i=$i(n=ec(),o=tc(r))).callback=void 0!==t&&null!==t?t:null,Fi(r,i,o),e.current.lanes=o,vt(e,o,n),nc(e,n),e}function Vc(e,t,r,n){var o=t.current,i=ec(),a=tc(o);return r=Bc(r),null===t.context?t.context=r:t.pendingContext=r,(t=$i(i,a)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=Fi(o,t,a))&&(rc(e,o,a,i),Bi(e,o,a)),a}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function qc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}jl=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Lo.current)xs=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return xs=!1,function(e,t,r){switch(t.tag){case 3:Ps(t),fi();break;case 5:Ji(t);break;case 1:Oo(t.type)&&Io(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;To(ji,n._currentValue),n._currentValue=o;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(To(ea,1&ea.current),t.flags|=128,null):0!==(r&t.child.childLanes)?Is(e,t,r):(To(ea,1&ea.current),null!==(e=Ws(e,t,r))?e.sibling:null);To(ea,1&ea.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return Us(e,t,r);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),To(ea,ea.current),n)break;return null;case 22:case 23:return t.lanes=0,Ss(e,t,r)}return Ws(e,t,r)}(e,t,r);xs=0!==(131072&e.flags)}else xs=!1,ii&&0!==(1048576&t.flags)&&ei(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Vs(e,t),e=t.pendingProps;var o=Ro(t,Po.current);Li(t,r),o=ga(null,t,n,e,o,r);var a=va();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oo(n)?(a=!0,Io(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Ii(t),o.updater=os,t.stateNode=o,o._reactInternals=t,ls(t,n,e,r),t=_s(null,t,n,!0,a,r)):(t.tag=0,ii&&a&&ti(t),bs(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Vs(e,t),e=t.pendingProps,n=(o=n._init)(n._payload),t.type=n,o=t.tag=function(e){if("function"===typeof e)return Rc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===A)return 14}return 2}(n),e=rs(n,e),o){case 0:t=Cs(null,t,n,e,r);break e;case 1:t=Ts(null,t,n,e,r);break e;case 11:t=ws(null,t,n,e,r);break e;case 14:t=ks(null,t,n,rs(n.type,e),r);break e}throw Error(i(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,Cs(e,t,n,o=t.elementType===n?o:rs(n,o),r);case 1:return n=t.type,o=t.pendingProps,Ts(e,t,n,o=t.elementType===n?o:rs(n,o),r);case 3:e:{if(Ps(t),null===e)throw Error(i(387));n=t.pendingProps,o=(a=t.memoizedState).element,Mi(e,t),Vi(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated){if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ls(e,t,n,r,o=cs(Error(i(423)),t));break e}if(n!==o){t=Ls(e,t,n,r,o=cs(Error(i(424)),t));break e}for(oi=co(t.stateNode.containerInfo.firstChild),ni=t,ii=!0,ai=null,r=ki(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(fi(),n===o){t=Ws(e,t,r);break e}bs(e,t,n,r)}t=t.child}return t;case 5:return Ji(t),null===e&&ui(t),n=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,s=o.children,ro(n,o)?s=null:null!==a&&ro(n,a)&&(t.flags|=32),Es(e,t),bs(e,t,s,r),t.child;case 6:return null===e&&ui(t),null;case 13:return Is(e,t,r);case 4:return Gi(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=wi(t,null,n,r):bs(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,ws(e,t,n,o=t.elementType===n?o:rs(n,o),r);case 7:return bs(e,t,t.pendingProps,r),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,To(ji,n._currentValue),n._currentValue=s,null!==a)if(sn(a.value,s)){if(a.children===o.children&&!Lo.current){t=Ws(e,t,r);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===n){if(1===a.tag){(c=$i(-1,r&-r)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=r,null!==(c=a.alternate)&&(c.lanes|=r),Pi(a.return,r,t),l.lanes|=r;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(i(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),Pi(s,r,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Li(t,r),n=n(o=Ai(o)),t.flags|=1,bs(e,t,n,r),t.child;case 14:return o=rs(n=t.type,t.pendingProps),ks(e,t,n,o=rs(n.type,o),r);case 15:return js(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:rs(n,o),Vs(e,t),t.tag=1,Oo(n)?(e=!0,Io(t)):e=!1,Li(t,r),as(t,n,o),ls(t,n,o,r),_s(null,t,n,!0,e,r);case 19:return Us(e,t,r);case 22:return Ss(e,t,r)}throw Error(i(156,t.tag))};var Yc="function"===typeof reportError?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}function Kc(e){this._internalRoot=e}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if("function"===typeof o){var s=o;o=function(){var e=Wc(a);s.call(e)}}Vc(t,a,e,o)}else a=function(e,t,r,n,o){if(o){if("function"===typeof n){var i=n;n=function(){var e=Wc(a);i.call(e)}}var a=Uc(t,n,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[mo]=a.current,Un(8===e.nodeType?e.parentNode:e),uc(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof n){var s=n;n=function(){var e=Wc(l);s.call(e)}}var l=Fc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[mo]=l.current,Un(8===e.nodeType?e.parentNode:e),uc((function(){Vc(t,l,r,n)})),l}(r,t,e,o,n);return Wc(a)}Kc.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Vc(e,t,null,null)},Kc.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Vc(null,e,null,null)})),t[mo]=null}},Kc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ot.length&&0!==t&&t<Ot[r].priority;r++);Ot.splice(r,0,e),0===r&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dt(t.pendingLanes);0!==r&&(yt(t,1|r),nc(t,Qe()),0===(6&_l)&&(Ul=Qe()+500,Vo()))}break;case 13:uc((function(){var t=Ni(e,1);if(null!==t){var r=ec();rc(t,e,1,r)}})),qc(e,1)}},kt=function(e){if(13===e.tag){var t=Ni(e,134217728);if(null!==t)rc(t,e,134217728,ec());qc(e,134217728)}},jt=function(e){if(13===e.tag){var t=tc(e),r=Ni(e,t);if(null!==r)rc(r,e,t,ec());qc(e,t)}},St=function(){return xt},Et=function(e,t){var r=xt;try{return xt=e,t()}finally{xt=r}},ke=function(e,t,r){switch(t){case"input":if(J(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ko(n);if(!o)throw Error(i(90));Y(n),J(n,o)}}}break;case"textarea":ie(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},_e=cc,Pe=uc;var eu={usingClientEntryPoint:!1,Events:[bo,wo,ko,Ce,Te,cc]},tu={findFiberByHostInstance:xo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ru={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{ot=nu.inject(ru),it=nu}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gc(t))throw Error(i(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!Gc(e))throw Error(i(299));var r=!1,n="",o=Yc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Fc(e,1,!1,null,0,r,0,n,o),e[mo]=t.current,Un(8===e.nodeType?e.parentNode:e),new Xc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,r){if(!Qc(t))throw Error(i(200));return Zc(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!Gc(e))throw Error(i(405));var n=null!=r&&r.hydratedSources||null,o=!1,a="",s=Yc;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(o=!0),void 0!==r.identifierPrefix&&(a=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=Uc(t,null,e,1,null!=r?r:null,o,0,a,s),e[mo]=t.current,Un(e),n)for(e=0;e<n.length;e++)o=(o=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Kc(t)},t.render=function(e,t,r){if(!Qc(t))throw Error(i(200));return Zc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Qc(r))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,r,!1,n)},t.version="18.3.1-next-f1338f8080-20240426"},763:(e,t,r)=>{"use strict";e.exports=r(983)},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)},983:(e,t)=>{"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case d:case i:case s:case a:case h:return e;default:switch(e=e&&e.$$typeof){case c:case p:case g:case m:case l:return e;default:return t}}case o:return t}}}function k(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=l,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=h,t.isAsyncMode=function(e){return k(e)||w(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===s||e===a||e===h||e===f||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===y||e.$$typeof===x||e.$$typeof===b||e.$$typeof===v)},t.typeOf=w}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(i,a),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,(()=>{"use strict";var e={};r.r(e),r.d(e,{hasBrowserEnv:()=>yu,hasStandardBrowserEnv:()=>bu,hasStandardBrowserWebWorkerEnv:()=>wu,navigator:()=>xu,origin:()=>ku});var t,n=r(43),o=r.t(n,2),i=r(391);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const s="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,r,n){return void 0===r&&(r=null),a({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function h(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function f(e,r,n,o){void 0===o&&(o={});let{window:i=document.defaultView,v5Compat:c=!1}=o,h=i.history,f=t.Pop,m=null,g=v();function v(){return(h.state||{idx:null}).idx}function y(){f=t.Pop;let e=v(),r=null==e?null:e-g;g=e,m&&m({action:f,location:b.location,delta:r})}function x(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,r="string"===typeof e?e:p(e);return r=r.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==g&&(g=0,h.replaceState(a({},h.state,{idx:g}),""));let b={get action(){return f},get location(){return e(i,h)},listen(e){if(m)throw new Error("A history only accepts one active listener");return i.addEventListener(s,y),m=e,()=>{i.removeEventListener(s,y),m=null}},createHref:e=>r(i,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,r){f=t.Push;let o=d(b.location,e,r);n&&n(o,e),g=v()+1;let a=u(o,g),s=b.createHref(o);try{h.pushState(a,"",s)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;i.location.assign(s)}c&&m&&m({action:f,location:b.location,delta:1})},replace:function(e,r){f=t.Replace;let o=d(b.location,e,r);n&&n(o,e),g=v();let i=u(o,g),a=b.createHref(o);h.replaceState(i,"",a),c&&m&&m({action:f,location:b.location,delta:0})},go:e=>h.go(e)};return b}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function g(e,t,r){return void 0===r&&(r="/"),v(e,t,r,!1)}function v(e,t,r,n){let o=A(("string"===typeof t?h(t):t).pathname||"/",r);if(null==o)return null;let i=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=L(o);a=_(i[s],e,n)}return a}function y(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(l(a.relativePath.startsWith(n),'Absolute route path "'+a.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(n.length));let s=D([n,a.relativePath]),c=r.concat(a);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),y(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:T(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let n of x(e.path))o(e,t,n);else o(e,t)})),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(0===n.length)return o?[i,""]:[i];let a=x(n.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const b=/^:[\w-]+$/,w=3,k=2,j=1,S=10,E=-2,C=e=>"*"===e;function T(e,t){let r=e.split("/"),n=r.length;return r.some(C)&&(n+=E),t&&(n+=k),r.filter((e=>!C(e))).reduce(((e,t)=>e+(b.test(t)?w:""===t?j:S)),n)}function _(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,o={},i="/",a=[];for(let s=0;s<n.length;++s){let e=n[s],l=s===n.length-1,c="/"===i?t:t.slice(i.length)||"/",u=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&r&&!n[n.length-1].route.index&&(u=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:D([i,u.pathname]),pathnameBase:I(D([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=D([i,u.pathnameBase]))}return a}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(n.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,n]}(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1),l=n.reduce(((e,t,r)=>{let{paramName:n,isOptional:o}=t;if("*"===n){let e=s[r]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[r];return e[n]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:i,pathnameBase:a,pattern:e}}function L(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function R(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function O(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function z(e,t){let r=O(e);return t?r.map(((e,t)=>t===r.length-1?e.pathname:e.pathnameBase)):r.map((e=>e.pathnameBase))}function N(e,t,r,n){let o;void 0===n&&(n=!1),"string"===typeof e?o=h(e):(o=a({},e),l(!o.pathname||!o.pathname.includes("?"),R("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),R("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),R("#","search","hash",o)));let i,s=""===e||""===o.pathname,c=s?"/":o.pathname;if(null==c)i=r;else{let e=t.length-1;if(!n&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:o=""}="string"===typeof e?h(e):e,i=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:i,search:M(n),hash:$(o)}}(o,i),d=c&&"/"!==c&&c.endsWith("/"),p=(s||"."===c)&&r.endsWith("/");return u.pathname.endsWith("/")||!d&&!p||(u.pathname+="/"),u}const D=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",$=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],U=(new Set(B),["get",...B]);new Set(U),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V.apply(this,arguments)}const W=n.createContext(null);const H=n.createContext(null);const q=n.createContext(null);const Y=n.createContext(null);const X=n.createContext({outlet:null,matches:[],isDataRoute:!1});const K=n.createContext(null);function G(){return null!=n.useContext(Y)}function Q(){return G()||l(!1),n.useContext(Y).location}function J(e){n.useContext(q).static||n.useLayoutEffect(e)}function Z(){let{isDataRoute:e}=n.useContext(X);return e?function(){let{router:e}=ue(le.UseNavigateStable),t=pe(ce.UseNavigateStable),r=n.useRef(!1);J((()=>{r.current=!0}));let o=n.useCallback((function(n,o){void 0===o&&(o={}),r.current&&("number"===typeof n?e.navigate(n):e.navigate(n,V({fromRouteId:t},o)))}),[e,t]);return o}():function(){G()||l(!1);let e=n.useContext(W),{basename:t,future:r,navigator:o}=n.useContext(q),{matches:i}=n.useContext(X),{pathname:a}=Q(),s=JSON.stringify(z(i,r.v7_relativeSplatPath)),c=n.useRef(!1);return J((()=>{c.current=!0})),n.useCallback((function(r,n){if(void 0===n&&(n={}),!c.current)return;if("number"===typeof r)return void o.go(r);let i=N(r,JSON.parse(s),a,"path"===n.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:D([t,i.pathname])),(n.replace?o.replace:o.push)(i,n.state,n)}),[t,o,s,a,e])}()}function ee(){let{matches:e}=n.useContext(X),t=e[e.length-1];return t?t.params:{}}function te(e,t){let{relative:r}=void 0===t?{}:t,{future:o}=n.useContext(q),{matches:i}=n.useContext(X),{pathname:a}=Q(),s=JSON.stringify(z(i,o.v7_relativeSplatPath));return n.useMemo((()=>N(e,JSON.parse(s),a,"path"===r)),[e,s,a,r])}function re(e,r,o,i){G()||l(!1);let{navigator:a,static:s}=n.useContext(q),{matches:c}=n.useContext(X),u=c[c.length-1],d=u?u.params:{},p=(u&&u.pathname,u?u.pathnameBase:"/");u&&u.route;let f,m=Q();if(r){var v;let e="string"===typeof r?h(r):r;"/"===p||(null==(v=e.pathname)?void 0:v.startsWith(p))||l(!1),f=e}else f=m;let y=f.pathname||"/",x=y;if("/"!==p){let e=p.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=!s&&o&&o.matches&&o.matches.length>0?o.matches:g(e,{pathname:x});let w=se(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:D([p,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:D([p,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,o,i);return r&&w?n.createElement(Y.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:t.Pop}},w):w}function ne(){let e=function(){var e;let t=n.useContext(K),r=de(ce.UseRouteError),o=pe(ce.UseRouteError);if(void 0!==t)return t;return null==(e=r.errors)?void 0:e[o]}(),t=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:i},r):null,null)}const oe=n.createElement(ne,null);class ie extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(X.Provider,{value:this.props.routeContext},n.createElement(K.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:t,match:r,children:o}=e,i=n.useContext(W);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(X.Provider,{value:t},o)}function se(e,t,r,o){var i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=o)&&a.v7_partialHydration&&0===t.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,c=null==(i=r)?void 0:i.errors;if(null!=c){let e=s.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let n=0;n<s.length;n++){let e=s[n];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=n),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,o,i)=>{let a,l=!1,p=null,h=null;var f;r&&(a=c&&o.route.id?c[o.route.id]:void 0,p=o.route.errorElement||oe,u&&(d<0&&0===i?(f="route-fallback",!1||he[f]||(he[f]=!0),l=!0,h=null):d===i&&(l=!0,h=o.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,i+1)),g=()=>{let t;return t=a?p:l?h:o.route.Component?n.createElement(o.route.Component,null):o.route.element?o.route.element:e,n.createElement(ae,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===i)?n.createElement(ie,{location:r.location,revalidation:r.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let t=n.useContext(W);return t||l(!1),t}function de(e){let t=n.useContext(H);return t||l(!1),t}function pe(e){let t=function(){let e=n.useContext(X);return e||l(!1),e}(),r=t.matches[t.matches.length-1];return r.route.id||l(!1),r.route.id}const he={};function fe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}o.startTransition;function me(e){let{to:t,replace:r,state:o,relative:i}=e;G()||l(!1);let{future:a,static:s}=n.useContext(q),{matches:c}=n.useContext(X),{pathname:u}=Q(),d=Z(),p=N(t,z(c,a.v7_relativeSplatPath),u,"path"===i),h=JSON.stringify(p);return n.useEffect((()=>d(JSON.parse(h),{replace:r,state:o,relative:i})),[d,h,i,r,o]),null}function ge(e){l(!1)}function ve(e){let{basename:r="/",children:o=null,location:i,navigationType:a=t.Pop,navigator:s,static:c=!1,future:u}=e;G()&&l(!1);let d=r.replace(/^\/*/,"/"),p=n.useMemo((()=>({basename:d,navigator:s,static:c,future:V({v7_relativeSplatPath:!1},u)})),[d,u,s,c]);"string"===typeof i&&(i=h(i));let{pathname:f="/",search:m="",hash:g="",state:v=null,key:y="default"}=i,x=n.useMemo((()=>{let e=A(f,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:a}}),[d,f,m,g,v,y,a]);return null==x?null:n.createElement(q.Provider,{value:p},n.createElement(Y.Provider,{children:o,value:x}))}function ye(e){let{children:t,location:r}=e;return re(xe(t),r)}new Promise((()=>{}));n.Component;function xe(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,o)=>{if(!n.isValidElement(e))return;let i=[...t,o];if(e.type===n.Fragment)return void r.push.apply(r,xe(e.props.children,i));e.type!==ge&&l(!1),e.props.index&&e.props.children&&l(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=xe(e.props.children,i)),r.push(a)})),r}var be=r(950),we=r.t(be,2);function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ke.apply(this,arguments)}function je(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Se=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Uw){}new Map;const Ee=o.startTransition;we.flushSync,o.useId;function Ce(e){let{basename:t,children:r,future:o,window:i}=e,a=n.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:i,v5Compat:!0})&&(s={}),f((function(e,t){let{pathname:r,search:n,hash:o}=e.location;return d("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:p(t)}),null,s)));let l=a.current,[c,u]=n.useState({action:l.action,location:l.location}),{v7_startTransition:h}=o||{},m=n.useCallback((e=>{h&&Ee?Ee((()=>u(e))):u(e)}),[u,h]);return n.useLayoutEffect((()=>l.listen(m)),[l,m]),n.useEffect((()=>fe(o)),[o]),n.createElement(ve,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:l,future:o})}const Te="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,_e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=n.forwardRef((function(e,t){let r,{onClick:o,relative:i,reloadDocument:a,replace:s,state:c,target:u,to:d,preventScrollReset:h,viewTransition:f}=e,m=je(e,Se),{basename:g}=n.useContext(q),v=!1;if("string"===typeof d&&_e.test(d)&&(r=d,Te))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),r=A(t.pathname,g);t.origin===e.origin&&null!=r?d=r+t.search+t.hash:v=!0}catch(Uw){}let y=function(e,t){let{relative:r}=void 0===t?{}:t;G()||l(!1);let{basename:o,navigator:i}=n.useContext(q),{hash:a,pathname:s,search:c}=te(e,{relative:r}),u=s;return"/"!==o&&(u="/"===s?o:D([o,s])),i.createHref({pathname:u,search:c,hash:a})}(d,{relative:i}),x=function(e,t){let{target:r,replace:o,state:i,preventScrollReset:a,relative:s,viewTransition:l}=void 0===t?{}:t,c=Z(),u=Q(),d=te(e,{relative:s});return n.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let r=void 0!==o?o:p(u)===p(d);c(e,{replace:r,state:i,preventScrollReset:a,relative:s,viewTransition:l})}}),[u,c,d,o,i,r,e,a,s,l])}(d,{replace:s,state:c,target:u,preventScrollReset:h,relative:i,viewTransition:f});return n.createElement("a",ke({},m,{href:r||y,onClick:v||a?o:function(e){o&&o(e),e.defaultPrevented||x(e)},ref:t,target:u}))}));var Le,Ae;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Le||(Le={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Ae||(Ae={}));var Re=r(86),Oe=r(324),ze=r.n(Oe);const Ne=function(e){function t(e,n,l,c,p){for(var h,f,m,g,b,k=0,j=0,S=0,E=0,C=0,R=0,z=m=h=0,D=0,I=0,M=0,$=0,F=l.length,B=F-1,U="",V="",W="",H="";D<F;){if(f=l.charCodeAt(D),D===B&&0!==j+E+S+k&&(0!==j&&(f=47===j?10:47),E=S=k=0,F++,B++),0===j+E+S+k){if(D===B&&(0<I&&(U=U.replace(d,"")),0<U.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:U+=l.charAt(D)}f=59}switch(f){case 123:for(h=(U=U.trim()).charCodeAt(0),m=1,$=++D;D<F;){switch(f=l.charCodeAt(D)){case 123:m++;break;case 125:m--;break;case 47:switch(f=l.charCodeAt(D+1)){case 42:case 47:e:{for(z=D+1;z<B;++z)switch(l.charCodeAt(z)){case 47:if(42===f&&42===l.charCodeAt(z-1)&&D+2!==z){D=z+1;break e}break;case 10:if(47===f){D=z+1;break e}}D=z}}break;case 91:f++;case 40:f++;case 34:case 39:for(;D++<B&&l.charCodeAt(D)!==f;);}if(0===m)break;D++}if(m=l.substring($,D),0===h&&(h=(U=U.replace(u,"").trim()).charCodeAt(0)),64===h){switch(0<I&&(U=U.replace(d,"")),f=U.charCodeAt(1)){case 100:case 109:case 115:case 45:I=n;break;default:I=A}if($=(m=t(n,I,m,f,p+1)).length,0<O&&(b=s(3,m,I=r(A,U,M),n,_,T,$,f,p,c),U=I.join(""),void 0!==b&&0===($=(m=b.trim()).length)&&(f=0,m="")),0<$)switch(f){case 115:U=U.replace(w,a);case 100:case 109:case 45:m=U+"{"+m+"}";break;case 107:m=(U=U.replace(v,"$1 $2"))+"{"+m+"}",m=1===L||2===L&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=U+m,112===c&&(V+=m,m="")}else m=""}else m=t(n,r(n,U,M),m,c,p+1);W+=m,m=M=I=z=h=0,U="",f=l.charCodeAt(++D);break;case 125:case 59:if(1<($=(U=(0<I?U.replace(d,""):U).trim()).length))switch(0===z&&(h=U.charCodeAt(0),45===h||96<h&&123>h)&&($=(U=U.replace(" ",":")).length),0<O&&void 0!==(b=s(1,U,n,e,_,T,V.length,c,p,c))&&0===($=(U=b.trim()).length)&&(U="\0\0"),h=U.charCodeAt(0),f=U.charCodeAt(1),h){case 0:break;case 64:if(105===f||99===f){H+=U+l.charAt(D);break}default:58!==U.charCodeAt($-1)&&(V+=o(U,h,f,U.charCodeAt(2)))}M=I=z=h=0,U="",f=l.charCodeAt(++D)}}switch(f){case 13:case 10:47===j?j=0:0===1+h&&107!==c&&0<U.length&&(I=1,U+="\0"),0<O*N&&s(0,U,n,e,_,T,V.length,c,p,c),T=1,_++;break;case 59:case 125:if(0===j+E+S+k){T++;break}default:switch(T++,g=l.charAt(D),f){case 9:case 32:if(0===E+k+j)switch(C){case 44:case 58:case 9:case 32:g="";break;default:32!==f&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===E+j+k&&(I=M=1,g="\f"+g);break;case 108:if(0===E+j+k+P&&0<z)switch(D-z){case 2:112===C&&58===l.charCodeAt(D-3)&&(P=C);case 8:111===R&&(P=R)}break;case 58:0===E+j+k&&(z=D);break;case 44:0===j+S+E+k&&(I=1,g+="\r");break;case 34:case 39:0===j&&(E=E===f?0:0===E?f:E);break;case 91:0===E+j+S&&k++;break;case 93:0===E+j+S&&k--;break;case 41:0===E+j+k&&S--;break;case 40:if(0===E+j+k){if(0===h)if(2*C+3*R===533);else h=1;S++}break;case 64:0===j+S+E+k+z+m&&(m=1);break;case 42:case 47:if(!(0<E+k+S))switch(j){case 0:switch(2*f+3*l.charCodeAt(D+1)){case 235:j=47;break;case 220:$=D,j=42}break;case 42:47===f&&42===C&&$+2!==D&&(33===l.charCodeAt($+2)&&(V+=l.substring($,D+1)),g="",j=0)}}0===j&&(U+=g)}R=C,C=f,D++}if(0<($=V.length)){if(I=n,0<O&&(void 0!==(b=s(2,V,I,e,_,T,$,c,p,c))&&0===(V=b).length))return H+V+W;if(V=I.join(",")+"{"+V+"}",0!==L*P){switch(2!==L||i(V,2)||(P=0),P){case 111:V=V.replace(x,":-moz-$1")+V;break;case 112:V=V.replace(y,"::-webkit-input-$1")+V.replace(y,"::-moz-$1")+V.replace(y,":-ms-input-$1")+V}P=0}}return H+V+W}function r(e,t,r){var o=t.trim().split(m);t=o;var i=o.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<i;++s)t[s]=n(e,t[s],r).trim();break;default:var l=s=0;for(t=[];s<i;++s)for(var c=0;c<a;++c)t[l++]=n(e[c]+" ",o[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function o(e,t,r,n){var a=e+";",s=2*t+3*r+4*n;if(944===s){e=a.indexOf(":",9)+1;var l=a.substring(e,a.length-1).trim();return l=a.substring(0,e).trim()+l+";",1===L||2===L&&i(l,1)?"-webkit-"+l+l:l}if(0===L||2===L&&!i(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(C,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(l=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+l+a;case 1005:return h.test(a)?a.replace(p,":-webkit-")+a.replace(p,":-moz-")+a:a;case 1e3:switch(t=(l=a.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=a.replace(b,"tb");break;case 232:l=a.replace(b,"tb-rl");break;case 220:l=a.replace(b,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+l+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(l=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:a=a.replace(l,"-webkit-"+l)+";"+a;break;case 207:case 102:a=a.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(l,"-webkit-"+l)+";"+a.replace(l,"-ms-"+l+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return l=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+l+"-ms-flex-"+l+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(j,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(j,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===E.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?o(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):a.replace(l,"-webkit-"+l)+a.replace(l,"-moz-"+l.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+n&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+a}return a}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),z(2!==t?n:n.replace(S,"$1"),r,t)}function a(e,t){var r=o(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(k," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,o,i,a,s,l,u){for(var d,p=0,h=t;p<O;++p)switch(d=R[p].call(c,e,h,r,n,o,i,a,s,l,u)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==t)return h}function l(e){return void 0!==(e=e.prefix)&&(z=null,e?"function"!==typeof e?L=1:(L=2,z=e):L=0),l}function c(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<O){var o=s(-1,r,n,n,_,T,0,0,0,0);void 0!==o&&"string"===typeof o&&(r=o)}var i=t(A,n,r,0,0);return 0<O&&(void 0!==(o=s(-2,i,n,n,_,T,i.length,0,0,0))&&(i=o)),P=0,T=_=1,i}var u=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,h=/zoo|gra/,f=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,x=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,j=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,C=/([^-])(image-set\()/,T=1,_=1,P=0,L=1,A=[],R=[],O=0,z=null,N=0;return c.use=function e(t){switch(t){case void 0:case null:O=R.length=0;break;default:if("function"===typeof t)R[O++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else N=0|!!t}return e},c.set=l,void 0!==e&&l(e),c};const De={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ie(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var Me=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$e=Ie((function(e){return Me.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),Fe=r(219),Be=r.n(Fe);function Ue(){return(Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Ve=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},We=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,Re.typeOf)(e)},He=Object.freeze([]),qe=Object.freeze({});function Ye(e){return"function"==typeof e}function Xe(e){return e.displayName||e.name||"Component"}function Ke(e){return e&&"string"==typeof e.styledComponentId}var Ge="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_ATTR)||"data-styled",Qe="undefined"!=typeof window&&"HTMLElement"in window,Je=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_DISABLE_SPEEDY))),Ze={};function et(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var tt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)(o<<=1)<0&&et(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),rt=new Map,nt=new Map,ot=1,it=function(e){if(rt.has(e))return rt.get(e);for(;nt.has(ot);)ot++;var t=ot++;return rt.set(e,t),nt.set(t,e),t},at=function(e){return nt.get(e)},st=function(e,t){t>=ot&&(ot=t+1),rt.set(e,t),nt.set(t,e)},lt="style["+Ge+'][data-styled-version="5.3.11"]',ct=new RegExp("^"+Ge+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ut=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},dt=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(ct);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(st(c,l),ut(e,c,s[3]),e.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},pt=function(){return r.nc},ht=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(Ge))return n}}(r),i=void 0!==o?o.nextSibling:null;n.setAttribute(Ge,"active"),n.setAttribute("data-styled-version","5.3.11");var a=pt();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},ft=function(){function e(e){var t=this.element=ht(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}et(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),mt=function(){function e(e){var t=this.element=ht(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gt=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vt=Qe,yt={isServer:!Qe,useCSSOMInjection:!Je},xt=function(){function e(e,t,r){void 0===e&&(e=qe),void 0===t&&(t={}),this.options=Ue({},yt,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Qe&&vt&&(vt=!1,function(e){for(var t=document.querySelectorAll(lt),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(Ge)&&(dt(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return it(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(Ue({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,o=t.target,e=r?new gt(o):n?new ft(o):new mt(o),new tt(e)));var e,t,r,n,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(it(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(it(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(it(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=0;o<r;o++){var i=at(o);if(void 0!==i){var a=e.names.get(i),s=t.getGroup(o);if(a&&s&&a.size){var l=Ge+".g"+o+'[id="'+i+'"]',c="";void 0!==a&&a.forEach((function(e){e.length>0&&(c+=e+",")})),n+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return n}(this)},e}(),bt=/(a)(d)/gi,wt=function(e){return String.fromCharCode(e+(e>25?39:97))};function kt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=wt(t%52)+r;return(wt(t%52)+r).replace(bt,"$1-$2")}var jt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},St=function(e){return jt(5381,e)};function Et(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ye(r)&&!Ke(r))return!1}return!0}var Ct=St("5.3.11"),Tt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Et(e),this.componentId=t,this.baseHash=jt(Ct,t),this.baseStyle=r,xt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))o.push(this.staticRulesId);else{var i=Ht(this.rules,e,t,r).join(""),a=kt(jt(this.baseHash,i)>>>0);if(!t.hasNameForId(n,a)){var s=r(i,"."+a,void 0,n);t.insertRules(n,a,s)}o.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=jt(this.baseHash,r.hash),u="",d=0;d<l;d++){var p=this.rules[d];if("string"==typeof p)u+=p;else if(p){var h=Ht(p,e,t,r),f=Array.isArray(h)?h.join(""):h;c=jt(c,f+d),u+=f}}if(u){var m=kt(c>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}o.push(m)}}return o.join(" ")},e}(),_t=/^\s*\/\/.*$/gm,Pt=[":","[",".","#"];function Lt(e){var t,r,n,o,i=void 0===e?qe:e,a=i.options,s=void 0===a?qe:a,l=i.plugins,c=void 0===l?He:l,u=new Ne(s),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,o,i,a,s,l,c,u,d){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===c)return n+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(o[0]+n),"";default:return n+(0===d?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),h=function(e,n,i){return 0===n&&-1!==Pt.indexOf(i[r.length])||i.match(o)?e:"."+t};function f(e,i,a,s){void 0===s&&(s="&");var l=e.replace(_t,""),c=i&&a?a+" "+i+" { "+l+" }":l;return t=s,r=i,n=new RegExp("\\"+r+"\\b","g"),o=new RegExp("(\\"+r+"\\b){2,}"),u(a||!i?"":i,c)}return u.use([].concat(c,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(r)>0&&(o[0]=o[0].replace(n,h))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),f.hash=c.length?c.reduce((function(e,t){return t.name||et(15),jt(e,t.name)}),5381).toString():"",f}var At=n.createContext(),Rt=(At.Consumer,n.createContext()),Ot=(Rt.Consumer,new xt),zt=Lt();function Nt(){return(0,n.useContext)(At)||Ot}function Dt(){return(0,n.useContext)(Rt)||zt}function It(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],o=t[1],i=Nt(),a=(0,n.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,n.useMemo)((function(){return Lt({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,n.useEffect)((function(){ze()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]),n.createElement(At.Provider,{value:a},n.createElement(Rt.Provider,{value:s},e.children))}var Mt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=zt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return et(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=zt),this.name+e.hash},e}(),$t=/([A-Z])/,Ft=/([A-Z])/g,Bt=/^ms-/,Ut=function(e){return"-"+e.toLowerCase()};function Vt(e){return $t.test(e)?e.replace(Ft,Ut).replace(Bt,"-ms-"):e}var Wt=function(e){return null==e||!1===e||""===e};function Ht(e,t,r,n){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)""!==(o=Ht(e[a],t,r,n))&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}return Wt(e)?"":Ke(e)?"."+e.styledComponentId:Ye(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:Ht(e(t),t,r,n):e instanceof Mt?r?(e.inject(r,n),e.getName(n)):e:We(e)?function e(t,r){var n,o,i=[];for(var a in t)t.hasOwnProperty(a)&&!Wt(t[a])&&(Array.isArray(t[a])&&t[a].isCss||Ye(t[a])?i.push(Vt(a)+":",t[a],";"):We(t[a])?i.push.apply(i,e(t[a],a)):i.push(Vt(a)+": "+(n=a,(null==(o=t[a])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in De||n.startsWith("--")?String(o).trim():o+"px")+";")));return r?[r+" {"].concat(i,["}"]):i}(e):e.toString();var l}var qt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Yt(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Ye(e)||We(e)?qt(Ht(Ve(He,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:qt(Ht(Ve(e,r)))}new Set;var Xt=function(e,t,r){return void 0===r&&(r=qe),e.theme!==r.theme&&e.theme||t||r.theme},Kt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gt=/(^-|-$)/g;function Qt(e){return e.replace(Kt,"-").replace(Gt,"")}var Jt=function(e){return kt(St(e)>>>0)};function Zt(e){return"string"==typeof e&&!0}var er=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},tr=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function rr(e,t,r){var n=e[r];er(t)&&er(n)?nr(n,t):e[r]=t}function nr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var o=0,i=r;o<i.length;o++){var a=i[o];if(er(a))for(var s in a)tr(s)&&rr(e,a[s],s)}return e}var or=n.createContext();or.Consumer;function ir(e){var t=(0,n.useContext)(or),r=(0,n.useMemo)((function(){return function(e,t){return e?Ye(e)?e(t):Array.isArray(e)||"object"!=typeof e?et(8):t?Ue({},t,{},e):e:et(14)}(e.theme,t)}),[e.theme,t]);return e.children?n.createElement(or.Provider,{value:r},e.children):null}var ar={};function sr(e,t,r){var o=Ke(e),i=!Zt(e),a=t.attrs,s=void 0===a?He:a,l=t.componentId,c=void 0===l?function(e,t){var r="string"!=typeof e?"sc":Qt(e);ar[r]=(ar[r]||0)+1;var n=r+"-"+Jt("5.3.11"+r+ar[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):l,u=t.displayName,d=void 0===u?function(e){return Zt(e)?"styled."+e:"Styled("+Xe(e)+")"}(e):u,p=t.displayName&&t.componentId?Qt(t.displayName)+"-"+t.componentId:t.componentId||c,h=o&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,f=t.shouldForwardProp;o&&e.shouldForwardProp&&(f=t.shouldForwardProp?function(r,n,o){return e.shouldForwardProp(r,n,o)&&t.shouldForwardProp(r,n,o)}:e.shouldForwardProp);var m,g=new Tt(r,p,o?e.componentStyle:void 0),v=g.isStatic&&0===s.length,y=function(e,t){return function(e,t,r,o){var i=e.attrs,a=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.shouldForwardProp,u=e.styledComponentId,d=e.target,p=function(e,t,r){void 0===e&&(e=qe);var n=Ue({},t,{theme:e}),o={};return r.forEach((function(e){var t,r,i,a=e;for(t in Ye(a)&&(a=a(n)),a)n[t]=o[t]="className"===t?(r=o[t],i=a[t],r&&i?r+" "+i:r||i):a[t]})),[n,o]}(Xt(t,(0,n.useContext)(or),s)||qe,t,i),h=p[0],f=p[1],m=function(e,t,r){var n=Nt(),o=Dt();return t?e.generateAndInjectStyles(qe,n,o):e.generateAndInjectStyles(r,n,o)}(a,o,h),g=r,v=f.$as||t.$as||f.as||t.as||d,y=Zt(v),x=f!==t?Ue({},t,{},f):t,b={};for(var w in x)"$"!==w[0]&&"as"!==w&&("forwardedAs"===w?b.as=x[w]:(c?c(w,$e,v):!y||$e(w))&&(b[w]=x[w]));return t.style&&f.style!==t.style&&(b.style=Ue({},t.style,{},f.style)),b.className=Array.prototype.concat(l,u,m!==u?m:null,t.className,f.className).filter(Boolean).join(" "),b.ref=g,(0,n.createElement)(v,b)}(m,e,t,v)};return y.displayName=d,(m=n.forwardRef(y)).attrs=h,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=f,m.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):He,m.styledComponentId=p,m.target=o?e.target:e,m.withComponent=function(e){var n=t.componentId,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["componentId"]),i=n&&n+"-"+(Zt(e)?e:Qt(Xe(e)));return sr(e,Ue({},o,{attrs:h,componentId:i}),r)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?nr({},e.defaultProps,t):t}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&Be()(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var lr=function(e){return function e(t,r,n){if(void 0===n&&(n=qe),!(0,Re.isValidElementType)(r))return et(1,String(r));var o=function(){return t(r,n,Yt.apply(void 0,arguments))};return o.withConfig=function(o){return e(t,r,Ue({},n,{},o))},o.attrs=function(o){return e(t,r,Ue({},n,{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},o}(sr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){lr[e]=lr(e)}));var cr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Et(e),xt.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,r,n){var o=n(Ht(this.rules,t,r,n).join(""),""),i=this.componentId+e;r.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&xt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function ur(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=Yt.apply(void 0,[e].concat(r)).join(""),i=Jt(o);return new Mt(i,o)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=pt();return"<style "+[r&&'nonce="'+r+'"',Ge+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?et(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return et(2);var r=((t={})[Ge]="",t["data-styled-version"]="5.3.11",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=pt();return o&&(r.nonce=o),[n.createElement("style",Ue({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new xt({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?et(2):n.createElement(It,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return et(3)}}();const dr=lr,pr="undefined"!==typeof document,hr=pr?n.useLayoutEffect:n.useEffect;function fr(){const e=(0,n.useRef)(!1);return hr((()=>(e.current=!0,()=>{e.current=!1})),[]),e}const mr=e=>e;class gr{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const vr=["prepare","read","update","preRender","render","postRender"];const{schedule:yr,cancel:xr,state:br,steps:wr}=function(e,t){let r=!1,n=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=vr.reduce(((e,t)=>(e[t]=function(e){let t=new gr,r=new gr,n=0,o=!1,i=!1;const a=new WeakSet,s={schedule:function(e){const i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&o,s=i?t:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),s.add(e)&&i&&o&&(n=t.order.length),e},cancel:e=>{r.remove(e),a.delete(e)},process:l=>{if(o)i=!0;else{if(o=!0,[t,r]=[r,t],r.clear(),n=t.order.length,n)for(let r=0;r<n;r++){const n=t.order[r];n(l),a.has(n)&&(s.schedule(n),e())}o=!1,i&&(i=!1,s.process(l))}}};return s}((()=>r=!0)),e)),{}),a=e=>i[e].process(o),s=()=>{const i=performance.now();r=!1,o.delta=n?1e3/60:Math.max(Math.min(i-o.timestamp,40),1),o.timestamp=i,o.isProcessing=!0,vr.forEach(a),o.isProcessing=!1,r&&t&&(n=!1,e(s))},l=vr.reduce(((t,a)=>{const l=i[a];return t[a]=function(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r||(r=!0,n=!0,o.isProcessing||e(s)),l.schedule(t,i,a)},t}),{});return{schedule:l,cancel:e=>vr.forEach((t=>i[t].cancel(e))),state:o,steps:i}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:mr,!0);const kr=(0,n.createContext)(null);function jr(e){const t=(0,n.useRef)(null);return null===t.current&&(t.current=e()),t.current}class Sr extends n.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Er(e){let{children:t,isPresent:r}=e;const o=(0,n.useId)(),i=(0,n.useRef)(null),a=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:s}=a.current;if(r||!i.current||!e||!t)return;i.current.dataset.motionPopId=o;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${o}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[r]),n.createElement(Sr,{isPresent:r,childRef:i,sizeRef:a},n.cloneElement(t,{ref:i}))}const Cr=e=>{let{children:t,initial:r,isPresent:o,onExitComplete:i,custom:a,presenceAffectsLayout:s,mode:l}=e;const c=jr(Tr),u=(0,n.useId)(),d=(0,n.useMemo)((()=>({id:u,initial:r,isPresent:o,custom:a,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;i&&i()},register:e=>(c.set(e,!1),()=>c.delete(e))})),s?void 0:[o]);return(0,n.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[o]),n.useEffect((()=>{!o&&!c.size&&i&&i()}),[o]),"popLayout"===l&&(t=n.createElement(Er,{isPresent:o},t)),n.createElement(kr.Provider,{value:d},t)};function Tr(){return new Map}const _r=(0,n.createContext)({});let Pr=mr,Lr=mr;const Ar=e=>e.key||"";const Rr=e=>{let{children:t,custom:r,initial:o=!0,onExitComplete:i,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:l="sync"}=e;Lr(!a,"Replace exitBeforeEnter with mode='wait'");const c=(0,n.useContext)(_r).forceRender||function(){const e=fr(),[t,r]=(0,n.useState)(0),o=(0,n.useCallback)((()=>{e.current&&r(t+1)}),[t]);return[(0,n.useCallback)((()=>yr.postRender(o)),[o]),t]}()[0],u=fr(),d=function(e){const t=[];return n.Children.forEach(e,(e=>{(0,n.isValidElement)(e)&&t.push(e)})),t}(t);let p=d;const h=(0,n.useRef)(new Map).current,f=(0,n.useRef)(p),m=(0,n.useRef)(new Map).current,g=(0,n.useRef)(!0);var v;if(hr((()=>{g.current=!1,function(e,t){e.forEach((e=>{const r=Ar(e);t.set(r,e)}))}(d,m),f.current=p})),v=()=>{g.current=!0,m.clear(),h.clear()},(0,n.useEffect)((()=>()=>v()),[]),g.current)return n.createElement(n.Fragment,null,p.map((e=>n.createElement(Cr,{key:Ar(e),isPresent:!0,initial:!!o&&void 0,presenceAffectsLayout:s,mode:l},e))));p=[...p];const y=f.current.map(Ar),x=d.map(Ar),b=y.length;for(let n=0;n<b;n++){const e=y[n];-1!==x.indexOf(e)||h.has(e)||h.set(e,void 0)}return"wait"===l&&h.size&&(p=[]),h.forEach(((e,t)=>{if(-1!==x.indexOf(t))return;const o=m.get(t);if(!o)return;const a=y.indexOf(t);let g=e;if(!g){const e=()=>{h.delete(t);const e=Array.from(m.keys()).filter((e=>!x.includes(e)));if(e.forEach((e=>m.delete(e))),f.current=d.filter((r=>{const n=Ar(r);return n===t||e.includes(n)})),!h.size){if(!1===u.current)return;c(),i&&i()}};g=n.createElement(Cr,{key:Ar(o),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:s,mode:l},o),h.set(t,g)}p.splice(a,0,g)})),p=p.map((e=>{const t=e.key;return h.has(t)?e:n.createElement(Cr,{key:Ar(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)})),n.createElement(n.Fragment,null,h.size?p:p.map((e=>(0,n.cloneElement)(e))))},Or=(0,n.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),zr=(0,n.createContext)({}),Nr=(0,n.createContext)({strict:!1}),Dr=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Ir="data-"+Dr("framerAppearId");function Mr(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function $r(e){return"string"===typeof e||Array.isArray(e)}function Fr(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const Br=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ur=["initial",...Br];function Vr(e){return Fr(e.animate)||Ur.some((t=>$r(e[t])))}function Wr(e){return Boolean(Vr(e)||e.variants)}function Hr(e){const{initial:t,animate:r}=function(e,t){if(Vr(e)){const{initial:t,animate:r}=e;return{initial:!1===t||$r(t)?t:void 0,animate:$r(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,n.useContext)(zr));return(0,n.useMemo)((()=>({initial:t,animate:r})),[qr(t),qr(r)])}function qr(e){return Array.isArray(e)?e.join(" "):e}const Yr={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Xr={};for(const r in Yr)Xr[r]={isEnabled:e=>Yr[r].some((t=>!!e[t]))};const Kr=(0,n.createContext)({}),Gr=Symbol.for("motionComponentSymbol");function Qr(e){let{preloadedFeatures:t,createVisualElement:r,useRender:o,useVisualState:i,Component:a}=e;t&&function(e){for(const t in e)Xr[t]={...Xr[t],...e[t]}}(t);const s=(0,n.forwardRef)((function(e,s){let l;const c={...(0,n.useContext)(Or),...e,layoutId:Jr(e)},{isStatic:u}=c,d=Hr(e),p=i(e,u);if(!u&&pr){d.visualElement=function(e,t,r,o){const{visualElement:i}=(0,n.useContext)(zr),a=(0,n.useContext)(Nr),s=(0,n.useContext)(kr),l=(0,n.useContext)(Or).reducedMotion,c=(0,n.useRef)();o=o||a.renderer,!c.current&&o&&(c.current=o(e,{visualState:t,parent:i,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const u=c.current;(0,n.useInsertionEffect)((()=>{u&&u.update(r,s)}));const d=(0,n.useRef)(Boolean(r[Ir]&&!window.HandoffComplete));return hr((()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())})),(0,n.useEffect)((()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))})),u}(a,p,c,r);const e=(0,n.useContext)(Kr),o=(0,n.useContext)(Nr).strict;d.visualElement&&(l=d.visualElement.loadFeatures(c,o,t,e))}return n.createElement(zr.Provider,{value:d},l&&d.visualElement?n.createElement(l,{visualElement:d.visualElement,...c}):null,o(a,e,function(e,t,r){return(0,n.useCallback)((n=>{n&&e.mount&&e.mount(n),t&&(n?t.mount(n):t.unmount()),r&&("function"===typeof r?r(n):Mr(r)&&(r.current=n))}),[t])}(p,d.visualElement,s),p,u,d.visualElement))}));return s[Gr]=a,s}function Jr(e){let{layoutId:t}=e;const r=(0,n.useContext)(_r).id;return r&&void 0!==t?r+"-"+t:t}function Zr(e){function t(t){return Qr(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const r=new Map;return new Proxy(t,{get:(e,n)=>(r.has(n)||r.set(n,t(n)),r.get(n))})}const en=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tn(e){return"string"===typeof e&&!e.includes("-")&&!!(en.indexOf(e)>-1||/[A-Z]/.test(e))}const rn={};const nn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],on=new Set(nn);function an(e,t){let{layout:r,layoutId:n}=t;return on.has(e)||e.startsWith("origin")||(r||void 0!==n)&&(!!rn[e]||"opacity"===e)}const sn=e=>Boolean(e&&e.getVelocity),ln={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cn=nn.length;const un=e=>t=>"string"===typeof t&&t.startsWith(e),dn=un("--"),pn=un("var(--"),hn=(e,t)=>t&&"number"===typeof e?t.transform(e):e,fn=(e,t,r)=>Math.min(Math.max(r,e),t),mn={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},gn={...mn,transform:e=>fn(0,1,e)},vn={...mn,default:1},yn=e=>Math.round(1e5*e)/1e5,xn=/(-)?([\d]*\.?[\d])+/g,bn=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,wn=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function kn(e){return"string"===typeof e}const jn=e=>({test:t=>kn(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Sn=jn("deg"),En=jn("%"),Cn=jn("px"),Tn=jn("vh"),_n=jn("vw"),Pn={...En,parse:e=>En.parse(e)/100,transform:e=>En.transform(100*e)},Ln={...mn,transform:Math.round},An={borderWidth:Cn,borderTopWidth:Cn,borderRightWidth:Cn,borderBottomWidth:Cn,borderLeftWidth:Cn,borderRadius:Cn,radius:Cn,borderTopLeftRadius:Cn,borderTopRightRadius:Cn,borderBottomRightRadius:Cn,borderBottomLeftRadius:Cn,width:Cn,maxWidth:Cn,height:Cn,maxHeight:Cn,size:Cn,top:Cn,right:Cn,bottom:Cn,left:Cn,padding:Cn,paddingTop:Cn,paddingRight:Cn,paddingBottom:Cn,paddingLeft:Cn,margin:Cn,marginTop:Cn,marginRight:Cn,marginBottom:Cn,marginLeft:Cn,rotate:Sn,rotateX:Sn,rotateY:Sn,rotateZ:Sn,scale:vn,scaleX:vn,scaleY:vn,scaleZ:vn,skew:Sn,skewX:Sn,skewY:Sn,distance:Cn,translateX:Cn,translateY:Cn,translateZ:Cn,x:Cn,y:Cn,z:Cn,perspective:Cn,transformPerspective:Cn,opacity:gn,originX:Pn,originY:Pn,originZ:Cn,zIndex:Ln,fillOpacity:gn,strokeOpacity:gn,numOctaves:Ln};function Rn(e,t,r,n){const{style:o,vars:i,transform:a,transformOrigin:s}=e;let l=!1,c=!1,u=!0;for(const d in t){const e=t[d];if(dn(d)){i[d]=e;continue}const r=An[d],n=hn(e,r);if(on.has(d)){if(l=!0,a[d]=n,!u)continue;e!==(r.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,s[d]=n):o[d]=n}if(t.transform||(l||n?o.transform=function(e,t,r,n){let{enableHardwareAcceleration:o=!0,allowTransformNone:i=!0}=t,a="";for(let s=0;s<cn;s++){const t=nn[s];void 0!==e[t]&&(a+=`${ln[t]||t}(${e[t]}) `)}return o&&!e.z&&(a+="translateZ(0)"),a=a.trim(),n?a=n(e,r?"":a):i&&r&&(a="none"),a}(e.transform,r,u,n):o.transform&&(o.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:r=0}=s;o.transformOrigin=`${e} ${t} ${r}`}}const On=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function zn(e,t,r){for(const n in t)sn(t[n])||an(n,r)||(e[n]=t[n])}function Nn(e,t,r){const o={};return zn(o,e.style||{},e),Object.assign(o,function(e,t,r){let{transformTemplate:o}=e;return(0,n.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Rn(e,t,{enableHardwareAcceleration:!r},o),Object.assign({},e.vars,e.style)}),[t])}(e,t,r)),e.transformValues?e.transformValues(o):o}function Dn(e,t,r){const n={},o=Nn(e,t,r);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=o,n}const In=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Mn(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||In.has(e)}let $n=e=>!Mn(e);try{(Fn=require("@emotion/is-prop-valid").default)&&($n=e=>e.startsWith("on")?!Mn(e):Fn(e))}catch(Vw){}var Fn;function Bn(e,t,r){return"string"===typeof e?e:Cn.transform(t+r*e)}const Un={offset:"stroke-dashoffset",array:"stroke-dasharray"},Vn={offset:"strokeDashoffset",array:"strokeDasharray"};function Wn(e,t,r,n,o){let{attrX:i,attrY:a,attrScale:s,originX:l,originY:c,pathLength:u,pathSpacing:d=1,pathOffset:p=0,...h}=t;if(Rn(e,h,r,o),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:f,style:m,dimensions:g}=e;f.transform&&(g&&(m.transform=f.transform),delete f.transform),g&&(void 0!==l||void 0!==c||m.transform)&&(m.transformOrigin=function(e,t,r){return`${Bn(t,e.x,e.width)} ${Bn(r,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==i&&(f.x=i),void 0!==a&&(f.y=a),void 0!==s&&(f.scale=s),void 0!==u&&function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const i=o?Un:Vn;e[i.offset]=Cn.transform(-n);const a=Cn.transform(t),s=Cn.transform(r);e[i.array]=`${a} ${s}`}(f,u,d,p,!1)}const Hn=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),qn=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Yn(e,t,r,o){const i=(0,n.useMemo)((()=>{const r={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Wn(r,t,{enableHardwareAcceleration:!1},qn(o),e.transformTemplate),{...r.attrs,style:{...r.style}}}),[t]);if(e.style){const t={};zn(t,e.style,e),i.style={...t,...i.style}}return i}function Xn(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(t,r,o,i,a)=>{let{latestValues:s}=i;const l=(tn(t)?Yn:Dn)(r,s,a,t),c=function(e,t,r){const n={};for(const o in e)"values"===o&&"object"===typeof e.values||($n(o)||!0===r&&Mn(o)||!t&&!Mn(o)||e.draggable&&o.startsWith("onDrag"))&&(n[o]=e[o]);return n}(r,"string"===typeof t,e),u={...c,...l,ref:o},{children:d}=r,p=(0,n.useMemo)((()=>sn(d)?d.get():d),[d]);return(0,n.createElement)(t,{...u,children:p})}}function Kn(e,t,r,n){let{style:o,vars:i}=t;Object.assign(e.style,o,n&&n.getProjectionStyles(r));for(const a in i)e.style.setProperty(a,i[a])}const Gn=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Qn(e,t,r,n){Kn(e,t,void 0,n);for(const o in t.attrs)e.setAttribute(Gn.has(o)?o:Dr(o),t.attrs[o])}function Jn(e,t){const{style:r}=e,n={};for(const o in r)(sn(r[o])||t.style&&sn(t.style[o])||an(o,e))&&(n[o]=r[o]);return n}function Zn(e,t){const r=Jn(e,t);for(const n in e)if(sn(e[n])||sn(t[n])){r[-1!==nn.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n]=e[n]}return r}function eo(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==r?r:e.custom,n,o)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==r?r:e.custom,n,o)),t}const to=e=>Array.isArray(e),ro=e=>to(e)?e[e.length-1]||0:e;function no(e){const t=sn(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const oo=e=>(t,r)=>{const o=(0,n.useContext)(zr),i=(0,n.useContext)(kr),a=()=>function(e,t,r,n){let{scrapeMotionValuesFromProps:o,createRenderState:i,onMount:a}=e;const s={latestValues:io(t,r,n,o),renderState:i()};return a&&(s.mount=e=>a(t,e,s)),s}(e,t,o,i);return r?a():jr(a)};function io(e,t,r,n){const o={},i=n(e,{});for(const p in i)o[p]=no(i[p]);let{initial:a,animate:s}=e;const l=Vr(e),c=Wr(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!r&&!1===r.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!==typeof d&&!Fr(d)){(Array.isArray(d)?d:[d]).forEach((t=>{const r=eo(e,t);if(!r)return;const{transitionEnd:n,transition:i,...a}=r;for(const e in a){let t=a[e];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(o[e]=t)}for(const e in n)o[e]=n[e]}))}return o}const ao={useVisualState:oo({scrapeMotionValuesFromProps:Zn,createRenderState:Hn,onMount:(e,t,r)=>{let{renderState:n,latestValues:o}=r;yr.read((()=>{try{n.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(Uw){n.dimensions={x:0,y:0,width:0,height:0}}})),yr.render((()=>{Wn(n,o,{enableHardwareAcceleration:!1},qn(t.tagName),e.transformTemplate),Qn(t,n)}))}})},so={useVisualState:oo({scrapeMotionValuesFromProps:Jn,createRenderState:On})};function lo(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const co=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function uo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function po(e,t,r,n){return lo(e,t,(e=>t=>co(t)&&e(t,uo(t)))(r),n)}const ho=(e,t)=>r=>t(e(r)),fo=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(ho)};function mo(e){let t=null;return()=>{const r=()=>{t=null};return null===t&&(t=e,r)}}const go=mo("dragHorizontal"),vo=mo("dragVertical");function yo(e){let t=!1;if("y"===e)t=vo();else if("x"===e)t=go();else{const e=go(),r=vo();e&&r?t=()=>{e(),r()}:(e&&e(),r&&r())}return t}function xo(){const e=yo(!0);return!e||(e(),!1)}class bo{constructor(e){this.isMounted=!1,this.node=e}update(){}}function wo(e,t){const r="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End");return po(e.current,r,((r,o)=>{if("touch"===r.pointerType||xo())return;const i=e.getProps();e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",t),i[n]&&yr.update((()=>i[n](r,o)))}),{passive:!e.getProps()[n]})}const ko=(e,t)=>!!t&&(e===t||ko(e,t.parentElement));function jo(e,t){if(!t)return;const r=new PointerEvent("pointer"+e);t(r,uo(r))}const So=new WeakMap,Eo=new WeakMap,Co=e=>{const t=So.get(e.target);t&&t(e)},To=e=>{e.forEach(Co)};function _o(e,t,r){const n=function(e){let{root:t,...r}=e;const n=t||document;Eo.has(n)||Eo.set(n,{});const o=Eo.get(n),i=JSON.stringify(r);return o[i]||(o[i]=new IntersectionObserver(To,{root:t,...r})),o[i]}(t);return So.set(e,r),n.observe(e),()=>{So.delete(e),n.unobserve(e)}}const Po={some:0,all:1};const Lo={inView:{Feature:class extends bo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:n="some",once:o}=e,i={root:t?t.current:void 0,rootMargin:r,threshold:"number"===typeof n?n:Po[n]};return _o(this.node.current,i,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,o&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:r,onViewportLeave:n}=this.node.getProps(),i=t?r:n;i&&i(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,r=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:r={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==r[e]}(e,t));r&&this.startObserver()}unmount(){}}},tap:{Feature:class extends bo{constructor(){super(...arguments),this.removeStartListeners=mr,this.removeEndListeners=mr,this.removeAccessibleListeners=mr,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),n=po(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:r,onTapCancel:n,globalTapTarget:o}=this.node.getProps();yr.update((()=>{o||ko(this.node.current,e.target)?r&&r(e,t):n&&n(e,t)}))}),{passive:!(r.onTap||r.onPointerUp)}),o=po(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=fo(n,o),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=lo(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=lo(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&jo("up",((e,t)=>{const{onTap:r}=this.node.getProps();r&&yr.update((()=>r(e,t)))}))})),jo("down",((e,t)=>{this.startPress(e,t)}))})),t=lo(this.node.current,"blur",(()=>{this.isPressing&&jo("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=fo(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:r,whileTap:n}=this.node.getProps();n&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&yr.update((()=>r(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!xo()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&yr.update((()=>r(e,t)))}mount(){const e=this.node.getProps(),t=po(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=lo(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=fo(t,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends bo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Uw){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fo(lo(this.node.current,"focus",(()=>this.onFocus())),lo(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends bo{mount(){this.unmount=fo(wo(this.node,!0),wo(this.node,!1))}unmount(){}}}};function Ao(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Ro(e,t,r){const n=e.getProps();return eo(n,t,void 0!==r?r:n.custom,function(e){const t={};return e.values.forEach(((e,r)=>t[r]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,r)=>t[r]=e.getVelocity())),t}(e))}const Oo=e=>1e3*e,zo=e=>e/1e3,No=!1,Do=e=>Array.isArray(e)&&"number"===typeof e[0];function Io(e){return Boolean(!e||"string"===typeof e&&$o[e]||Do(e)||Array.isArray(e)&&e.every(Io))}const Mo=e=>{let[t,r,n,o]=e;return`cubic-bezier(${t}, ${r}, ${n}, ${o})`},$o={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Mo([0,.65,.55,1]),circOut:Mo([.55,0,1,.45]),backIn:Mo([.31,.01,.66,-.59]),backOut:Mo([.33,1.53,.69,.99])};function Fo(e){if(e)return Do(e)?Mo(e):Array.isArray(e)?e.map(Fo):$o[e]}const Bo=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e;function Uo(e,t,r,n){if(e===t&&r===n)return mr;const o=t=>function(e,t,r,n,o){let i,a,s=0;do{a=t+(r-t)/2,i=Bo(a,n,o)-e,i>0?r=a:t=a}while(Math.abs(i)>1e-7&&++s<12);return a}(t,0,1,e,r);return e=>0===e||1===e?e:Bo(o(e),t,n)}const Vo=Uo(.42,0,1,1),Wo=Uo(0,0,.58,1),Ho=Uo(.42,0,.58,1),qo=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Yo=e=>t=>1-e(1-t),Xo=e=>1-Math.sin(Math.acos(e)),Ko=Yo(Xo),Go=qo(Xo),Qo=Uo(.33,1.53,.69,.99),Jo=Yo(Qo),Zo=qo(Jo),ei={linear:mr,easeIn:Vo,easeInOut:Ho,easeOut:Wo,circIn:Xo,circInOut:Go,circOut:Ko,backIn:Jo,backInOut:Zo,backOut:Qo,anticipate:e=>(e*=2)<1?.5*Jo(e):.5*(2-Math.pow(2,-10*(e-1)))},ti=e=>{if(Array.isArray(e)){Lr(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,r,n,o]=e;return Uo(t,r,n,o)}return"string"===typeof e?(Lr(void 0!==ei[e],`Invalid easing type '${e}'`),ei[e]):e},ri=(e,t)=>r=>Boolean(kn(r)&&wn.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),ni=(e,t,r)=>n=>{if(!kn(n))return n;const[o,i,a,s]=n.match(xn);return{[e]:parseFloat(o),[t]:parseFloat(i),[r]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},oi={...mn,transform:e=>Math.round((e=>fn(0,255,e))(e))},ii={test:ri("rgb","red"),parse:ni("red","green","blue"),transform:e=>{let{red:t,green:r,blue:n,alpha:o=1}=e;return"rgba("+oi.transform(t)+", "+oi.transform(r)+", "+oi.transform(n)+", "+yn(gn.transform(o))+")"}};const ai={test:ri("#"),parse:function(e){let t="",r="",n="",o="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),o=e.substring(4,5),t+=t,r+=r,n+=n,o+=o),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:o?parseInt(o,16)/255:1}},transform:ii.transform},si={test:ri("hsl","hue"),parse:ni("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:r,lightness:n,alpha:o=1}=e;return"hsla("+Math.round(t)+", "+En.transform(yn(r))+", "+En.transform(yn(n))+", "+yn(gn.transform(o))+")"}},li={test:e=>ii.test(e)||ai.test(e)||si.test(e),parse:e=>ii.test(e)?ii.parse(e):si.test(e)?si.parse(e):ai.parse(e),transform:e=>kn(e)?e:e.hasOwnProperty("red")?ii.transform(e):si.transform(e)},ci=(e,t,r)=>-r*e+r*t+e;function ui(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}const di=(e,t,r)=>{const n=e*e;return Math.sqrt(Math.max(0,r*(t*t-n)+n))},pi=[ai,ii,si];function hi(e){const t=(e=>pi.find((t=>t.test(e))))(e);Lr(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let r=t.parse(e);return t===si&&(r=function(e){let{hue:t,saturation:r,lightness:n,alpha:o}=e;t/=360,r/=100,n/=100;let i=0,a=0,s=0;if(r){const e=n<.5?n*(1+r):n+r-n*r,o=2*n-e;i=ui(o,e,t+1/3),a=ui(o,e,t),s=ui(o,e,t-1/3)}else i=a=s=n;return{red:Math.round(255*i),green:Math.round(255*a),blue:Math.round(255*s),alpha:o}}(r)),r}const fi=(e,t)=>{const r=hi(e),n=hi(t),o={...r};return e=>(o.red=di(r.red,n.red,e),o.green=di(r.green,n.green,e),o.blue=di(r.blue,n.blue,e),o.alpha=ci(r.alpha,n.alpha,e),ii.transform(o))};const mi={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:mr},gi={regex:bn,countKey:"Colors",token:"${c}",parse:li.parse},vi={regex:xn,countKey:"Numbers",token:"${n}",parse:mn.parse};function yi(e,t){let{regex:r,countKey:n,token:o,parse:i}=t;const a=e.tokenised.match(r);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(r,o),e.values.push(...a.map(i)))}function xi(e){const t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&yi(r,mi),yi(r,gi),yi(r,vi),r}function bi(e){return xi(e).values}function wi(e){const{values:t,numColors:r,numVars:n,tokenised:o}=xi(e),i=t.length;return e=>{let t=o;for(let o=0;o<i;o++)t=o<n?t.replace(mi.token,e[o]):o<n+r?t.replace(gi.token,li.transform(e[o])):t.replace(vi.token,yn(e[o]));return t}}const ki=e=>"number"===typeof e?0:e;const ji={test:function(e){var t,r;return isNaN(e)&&kn(e)&&((null===(t=e.match(xn))||void 0===t?void 0:t.length)||0)+((null===(r=e.match(bn))||void 0===r?void 0:r.length)||0)>0},parse:bi,createTransformer:wi,getAnimatableNone:function(e){const t=bi(e);return wi(e)(t.map(ki))}},Si=(e,t)=>r=>`${r>0?t:e}`;function Ei(e,t){return"number"===typeof e?r=>ci(e,t,r):li.test(e)?fi(e,t):e.startsWith("var(")?Si(e,t):_i(e,t)}const Ci=(e,t)=>{const r=[...e],n=r.length,o=e.map(((e,r)=>Ei(e,t[r])));return e=>{for(let t=0;t<n;t++)r[t]=o[t](e);return r}},Ti=(e,t)=>{const r={...e,...t},n={};for(const o in r)void 0!==e[o]&&void 0!==t[o]&&(n[o]=Ei(e[o],t[o]));return e=>{for(const t in n)r[t]=n[t](e);return r}},_i=(e,t)=>{const r=ji.createTransformer(t),n=xi(e),o=xi(t);return n.numVars===o.numVars&&n.numColors===o.numColors&&n.numNumbers>=o.numNumbers?fo(Ci(n.values,o.values),r):(Pr(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),Si(e,t))},Pi=(e,t,r)=>{const n=t-e;return 0===n?1:(r-e)/n},Li=(e,t)=>r=>ci(e,t,r);function Ai(e,t,r){const n=[],o=r||function(e){return"number"===typeof e?Li:"string"===typeof e?li.test(e)?fi:_i:Array.isArray(e)?Ci:"object"===typeof e?Ti:Li}(e[0]),i=e.length-1;for(let a=0;a<i;a++){let r=o(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||mr:t;r=fo(e,r)}n.push(r)}return n}function Ri(e,t){let{clamp:r=!0,ease:n,mixer:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=e.length;if(Lr(i===t.length,"Both input and output ranges must be the same length"),1===i)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Ai(t,n,o),s=a.length,l=t=>{let r=0;if(s>1)for(;r<e.length-2&&!(t<e[r+1]);r++);const n=Pi(e[r],e[r+1],t);return a[r](n)};return r?t=>l(fn(e[0],e[i-1],t)):l}function Oi(e){const t=[0];return function(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const o=Pi(0,t,n);e.push(ci(r,1,o))}}(t,e.length-1),t}function zi(e){let{duration:t=300,keyframes:r,times:n,ease:o="easeInOut"}=e;const i=(e=>Array.isArray(e)&&"number"!==typeof e[0])(o)?o.map(ti):ti(o),a={done:!1,value:r[0]},s=function(e,t){return e.map((e=>e*t))}(n&&n.length===r.length?n:Oi(r),t),l=Ri(s,r,{ease:Array.isArray(i)?i:(c=r,u=i,c.map((()=>u||Ho)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}function Ni(e,t){return t?e*(1e3/t):0}function Di(e,t,r){const n=Math.max(t-5,0);return Ni(r-e(n),t-n)}const Ii=.001;function Mi(e){let t,r,{duration:n=800,bounce:o=.25,velocity:i=0,mass:a=1}=e;Pr(n<=Oo(10),"Spring duration must be 10 seconds or less");let s=1-o;s=fn(.05,1,s),n=fn(.01,10,zo(n)),s<1?(t=e=>{const t=e*s,r=t*n,o=t-i,a=Fi(e,s),l=Math.exp(-r);return Ii-o/a*l},r=e=>{const r=e*s*n,o=r*i+i,a=Math.pow(s,2)*Math.pow(e,2)*n,l=Math.exp(-r),c=Fi(Math.pow(e,2),s);return(-t(e)+Ii>0?-1:1)*((o-a)*l)/c}):(t=e=>Math.exp(-e*n)*((e-i)*n+1)-.001,r=e=>Math.exp(-e*n)*(n*n*(i-e)));const l=function(e,t,r){let n=r;for(let o=1;o<$i;o++)n-=e(n)/t(n);return n}(t,r,5/n);if(n=Oo(n),isNaN(l))return{stiffness:100,damping:10,duration:n};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:n}}}const $i=12;function Fi(e,t){return e*Math.sqrt(1-t*t)}const Bi=["duration","bounce"],Ui=["stiffness","damping","mass"];function Vi(e,t){return t.some((t=>void 0!==e[t]))}function Wi(e){let{keyframes:t,restDelta:r,restSpeed:n,...o}=e;const i=t[0],a=t[t.length-1],s={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Vi(e,Ui)&&Vi(e,Bi)){const r=Mi(e);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}({...o,velocity:-zo(o.velocity||0)}),f=p||0,m=c/(2*Math.sqrt(l*u)),g=a-i,v=zo(Math.sqrt(l/u)),y=Math.abs(g)<5;let x;if(n||(n=y?.01:2),r||(r=y?.005:.5),m<1){const e=Fi(v,m);x=t=>{const r=Math.exp(-m*v*t);return a-r*((f+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>a-Math.exp(-v*e)*(g+(f+v*g)*e);else{const e=v*Math.sqrt(m*m-1);x=t=>{const r=Math.exp(-m*v*t),n=Math.min(e*t,300);return a-r*((f+m*v*g)*Math.sinh(n)+e*g*Math.cosh(n))/e}}return{calculatedDuration:h&&d||null,next:e=>{const t=x(e);if(h)s.done=e>=d;else{let o=f;0!==e&&(o=m<1?Di(x,e,t):0);const i=Math.abs(o)<=n,l=Math.abs(a-t)<=r;s.done=i&&l}return s.value=s.done?a:t,s}}}function Hi(e){let{keyframes:t,velocity:r=0,power:n=.8,timeConstant:o=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=n*r;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/o),x=e=>v+y(e),b=e=>{const t=y(e),r=x(e);h.done=Math.abs(t)<=u,h.value=h.done?v:r};let w,k;const j=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,k=Wi({keyframes:[h.value,f(h.value)],velocity:Di(x,e,h.value),damping:i,stiffness:a,restDelta:u,restSpeed:d}))};return j(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,b(e),j(e)),void 0!==w&&e>w?k.next(e-w):(!t&&b(e),h)}}}const qi=e=>{const t=t=>{let{timestamp:r}=t;return e(r)};return{start:()=>yr.update(t,!0),stop:()=>xr(t),now:()=>br.isProcessing?br.timestamp:performance.now()}};function Yi(e){let t=0;let r=e.next(t);for(;!r.done&&t<2e4;)t+=50,r=e.next(t);return t>=2e4?1/0:t}const Xi={decay:Hi,inertia:Hi,tween:zi,keyframes:zi,spring:Wi};function Ki(e){let t,r,{autoplay:n=!0,delay:o=0,driver:i=qi,keyframes:a,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",onPlay:d,onStop:p,onComplete:h,onUpdate:f,...m}=e,g=1,v=!1;const y=()=>{r=new Promise((e=>{t=e}))};let x;y();const b=Xi[s]||zi;let w;b!==zi&&"number"!==typeof a[0]&&(w=Ri([0,100],a,{clamp:!1}),a=[0,100]);const k=b({...m,keyframes:a});let j;"mirror"===u&&(j=b({...m,keyframes:[...a].reverse(),velocity:-(m.velocity||0)}));let S="idle",E=null,C=null,T=null;null===k.calculatedDuration&&l&&(k.calculatedDuration=Yi(k));const{calculatedDuration:_}=k;let P=1/0,L=1/0;null!==_&&(P=_+c,L=P*(l+1)-c);let A=0;const R=e=>{if(null===C)return;g>0&&(C=Math.min(C,e)),g<0&&(C=Math.min(e-L/g,C)),A=null!==E?E:Math.round(e-C)*g;const t=A-o*(g>=0?1:-1),r=g>=0?t<0:t>L;A=Math.max(t,0),"finished"===S&&null===E&&(A=L);let n=A,i=k;if(l){const e=Math.min(A,L)/P;let t=Math.floor(e),r=e%1;!r&&e>=1&&(r=1),1===r&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===u?(r=1-r,c&&(r-=c/P)):"mirror"===u&&(i=j)),n=fn(0,1,r)*P}const s=r?{done:!1,value:a[0]}:i.next(n);w&&(s.value=w(s.value));let{done:d}=s;r||null===_||(d=g>=0?A>=L:A<=0);const p=null===E&&("finished"===S||"running"===S&&d);return f&&f(s.value),p&&N(),s},O=()=>{x&&x.stop(),x=void 0},z=()=>{S="idle",O(),t(),y(),C=T=null},N=()=>{S="finished",h&&h(),O(),t()},D=()=>{if(v)return;x||(x=i(R));const e=x.now();d&&d(),null!==E?C=e-E:C&&"finished"!==S||(C=e),"finished"===S&&y(),T=C,E=null,S="running",x.start()};n&&D();const I={then:(e,t)=>r.then(e,t),get time(){return zo(A)},set time(e){e=Oo(e),A=e,null===E&&x&&0!==g?C=x.now()-e/g:E=e},get duration(){const e=null===k.calculatedDuration?Yi(k):k.calculatedDuration;return zo(e)},get speed(){return g},set speed(e){e!==g&&x&&(g=e,I.time=zo(A))},get state(){return S},play:D,pause:()=>{S="paused",E=A},stop:()=>{v=!0,"idle"!==S&&(S="idle",p&&p(),z())},cancel:()=>{null!==T&&R(T),z()},complete:()=>{S="finished"},sample:e=>(C=0,R(e))};return I}const Gi=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Qi=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function Ji(e,t,r){let{onUpdate:n,onComplete:o,...i}=r;if(!(Gi()&&Qi.has(t)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type))return!1;let a,s,l=!1,c=!1;const u=()=>{s=new Promise((e=>{a=e}))};u();let{keyframes:d,duration:p=300,ease:h,times:f}=i;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Io(t.ease))(t,i)){const e=Ki({...i,repeat:0,delay:0});let t={done:!1,value:d[0]};const r=[];let n=0;for(;!t.done&&n<2e4;)t=e.sample(n),r.push(t.value),n+=10;f=void 0,d=r,p=n-10,h="linear"}const m=function(e,t,r){let{delay:n=0,duration:o,repeat:i=0,repeatType:a="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:r};l&&(c.offset=l);const u=Fo(s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:n,duration:o,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:i+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,d,{...i,duration:p,ease:h,times:f}),g=()=>{c=!1,m.cancel()},v=()=>{c=!0,yr.update(g),a(),u()};m.onfinish=()=>{c||(e.set(function(e,t){let{repeat:r,repeatType:n="loop"}=t;return e[r&&"loop"!==n&&r%2===1?0:e.length-1]}(d,i)),o&&o(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(m.timeline=e,m.onfinish=null,mr),get time(){return zo(m.currentTime||0)},set time(e){m.currentTime=Oo(e)},get speed(){return m.playbackRate},set speed(e){m.playbackRate=e},get duration(){return zo(p)},play:()=>{l||(m.play(),xr(g))},pause:()=>m.pause(),stop:()=>{if(l=!0,"idle"===m.playState)return;const{currentTime:t}=m;if(t){const r=Ki({...i,autoplay:!1});e.setWithVelocity(r.sample(t-10).value,r.sample(t).value,10)}v()},complete:()=>{c||m.finish()},cancel:v}}const Zi={type:"spring",stiffness:500,damping:25,restSpeed:10},ea={type:"keyframes",duration:.8},ta={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ra=(e,t)=>{let{keyframes:r}=t;return r.length>2?ea:on.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===r[1]?2*Math.sqrt(550):30,restSpeed:10}:Zi:ta},na=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!ji.test(t)&&"0"!==t||t.startsWith("url("))),oa=new Set(["brightness","contrast","saturate","opacity"]);function ia(e){const[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[n]=r.match(xn)||[];if(!n)return e;const o=r.replace(n,"");let i=oa.has(t)?1:0;return n!==r&&(i*=100),t+"("+i+o+")"}const aa=/([a-z-]*)\(.*?\)/g,sa={...ji,getAnimatableNone:e=>{const t=e.match(aa);return t?t.map(ia).join(" "):e}},la={...An,color:li,backgroundColor:li,outlineColor:li,fill:li,stroke:li,borderColor:li,borderTopColor:li,borderRightColor:li,borderBottomColor:li,borderLeftColor:li,filter:sa,WebkitFilter:sa},ca=e=>la[e];function ua(e,t){let r=ca(e);return r!==sa&&(r=ji),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const da=e=>/^0[^.\s]+$/.test(e);function pa(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||da(e):void 0}function ha(e,t){return e[t]||e.default||e}const fa=!1,ma=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o=>{const i=ha(n,e)||{},a=i.delay||n.delay||0;let{elapsed:s=0}=n;s-=Oo(a);const l=function(e,t,r,n){const o=na(t,r);let i;i=Array.isArray(r)?[...r]:[null,r];const a=void 0!==n.from?n.from:e.get();let s;const l=[];for(let c=0;c<i.length;c++)null===i[c]&&(i[c]=0===c?a:i[c-1]),pa(i[c])&&l.push(c),"string"===typeof i[c]&&"none"!==i[c]&&"0"!==i[c]&&(s=i[c]);if(o&&l.length&&s)for(let c=0;c<l.length;c++)i[l[c]]=ua(t,s);return i}(t,e,r,i),c=l[0],u=l[l.length-1],d=na(e,c),p=na(e,u);Pr(d===p,`You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-s,onUpdate:e=>{t.set(e),i.onUpdate&&i.onUpdate(e)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(function(e){let{when:t,delay:r,delayChildren:n,staggerChildren:o,staggerDirection:i,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length}(i)||(h={...h,...ra(e,h)}),h.duration&&(h.duration=Oo(h.duration)),h.repeatDelay&&(h.repeatDelay=Oo(h.repeatDelay)),!d||!p||No||!1===i.type||fa)return function(e){let{keyframes:t,delay:r,onUpdate:n,onComplete:o}=e;const i=()=>(n&&n(t[t.length-1]),o&&o(),{time:0,speed:1,duration:0,play:mr,pause:mr,stop:mr,then:e=>(e(),Promise.resolve()),cancel:mr,complete:mr});return r?Ki({keyframes:[0,1],duration:0,delay:r,onComplete:i}):i()}(No?{...h,delay:0}:h);if(!n.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const r=Ji(t,e,h);if(r)return r}return Ki(h)}};function ga(e){return Boolean(sn(e)&&e.add)}const va=e=>/^\-?\d*\.?\d+$/.test(e);function ya(e,t){-1===e.indexOf(t)&&e.push(t)}function xa(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class ba{constructor(){this.subscriptions=[]}add(e){return ya(this.subscriptions,e),()=>xa(this.subscriptions,e)}notify(e,t,r){const n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](e,t,r);else for(let o=0;o<n;o++){const n=this.subscriptions[o];n&&n(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wa={current:void 0};class ka{constructor(e){var t=this;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:n,timestamp:o}=br;t.lastUpdated!==o&&(t.timeDelta=n,t.lastUpdated=o,yr.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),r&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>yr.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(n=this.current,!isNaN(parseFloat(n))),this.owner=r.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ba);const r=this.events[e].add(t);return"change"===e?()=>{r(),yr.read((()=>{this.events.change.getSize()||this.stop()}))}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,r){this.set(t),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return wa.current&&wa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ni(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ja(e,t){return new ka(e,t)}const Sa=e=>t=>t.test(e),Ea=[mn,Cn,En,Sn,_n,Tn,{test:e=>"auto"===e,parse:e=>e}],Ca=e=>Ea.find(Sa(e)),Ta=[...Ea,li,ji],_a=e=>Ta.find(Sa(e));function Pa(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,ja(r))}function La(e,t){const r=Ro(e,t);let{transitionEnd:n={},transition:o={},...i}=r?e.makeTargetAnimatable(r,!1):{};i={...i,...n};for(const a in i){Pa(e,a,ro(i[a]))}}function Aa(e,t){if(!t)return;return(t[e]||t.default||t).from}function Ra(e,t){let{protectedKeys:r,needsAnimating:n}=e;const o=r.hasOwnProperty(t)&&!0!==n[t];return n[t]=!1,o}function Oa(e,t){const r=e.get();if(!Array.isArray(t))return r!==t;for(let n=0;n<t.length;n++)if(t[n]!==r)return!0}function za(e,t){let{delay:r=0,transitionOverride:n,type:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:i=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");n&&(i=n);const c=[],u=o&&e.animationState&&e.animationState.getState()[o];for(const d in s){const t=e.getValue(d),n=s[d];if(!t||void 0===n||u&&Ra(u,d))continue;const o={delay:r,elapsed:0,...ha(i||{},d)};if(window.HandoffAppearAnimations){const r=e.getProps()[Ir];if(r){const e=window.HandoffAppearAnimations(r,d,t,yr);null!==e&&(o.elapsed=e,o.isHandoff=!0)}}let a=!o.isHandoff&&!Oa(t,n);if("spring"===o.type&&(t.getVelocity()||o.velocity)&&(a=!1),t.animation&&(a=!1),a)continue;t.start(ma(d,t,n,e.shouldReduceMotion&&on.has(d)?{type:!1}:o));const p=t.animation;ga(l)&&(l.add(d),p.then((()=>l.remove(d)))),c.push(p)}return a&&Promise.all(c).then((()=>{a&&La(e,a)})),c}function Na(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=Ro(e,t,r.custom);let{transition:o=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(o=r.transitionOverride);const i=n?()=>Promise.all(za(e,n,r)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:a,staggerDirection:s}=o;return function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*n,l=1===o?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*n}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*n};return Array.from(e.variantChildren).sort(Da).forEach(((e,n)=>{e.notify("AnimationStart",t),a.push(Na(e,t,{...i,delay:r+l(n)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,i+n,a,s,r)}:()=>Promise.resolve(),{when:s}=o;if(s){const[e,t]="beforeChildren"===s?[i,a]:[a,i];return e().then((()=>t()))}return Promise.all([i(),a(r.delay)])}function Da(e,t){return e.sortNodePosition(t)}const Ia=[...Br].reverse(),Ma=Br.length;function $a(e){return t=>Promise.all(t.map((t=>{let{animation:r,options:n}=t;return function(e,t){let r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const o=t.map((t=>Na(e,t,n)));r=Promise.all(o)}else if("string"===typeof t)r=Na(e,t,n);else{const o="function"===typeof t?Ro(e,t,n.custom):t;r=Promise.all(za(e,o,n))}return r.then((()=>e.notify("AnimationComplete",t)))}(e,r,n)})))}function Fa(e){let t=$a(e);const r={animate:Ua(!0),whileInView:Ua(),whileHover:Ua(),whileTap:Ua(),whileDrag:Ua(),whileFocus:Ua(),exit:Ua()};let n=!0;const o=(t,r)=>{const n=Ro(e,r);if(n){const{transition:e,transitionEnd:r,...o}=n;t={...t,...o,...r}}return t};function i(i,a){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],u=new Set;let d={},p=1/0;for(let t=0;t<Ma;t++){const h=Ia[t],f=r[h],m=void 0!==s[h]?s[h]:l[h],g=$r(m),v=h===a?f.isActive:null;!1===v&&(p=t);let y=m===l[h]&&m!==s[h]&&g;if(y&&n&&e.manuallyAnimateOnMount&&(y=!1),f.protectedKeys={...d},!f.isActive&&null===v||!m&&!f.prevProp||Fr(m)||"boolean"===typeof m)continue;let x=Ba(f.prevProp,m)||h===a&&f.isActive&&!y&&g||t>p&&g,b=!1;const w=Array.isArray(m)?m:[m];let k=w.reduce(o,{});!1===v&&(k={});const{prevResolvedValues:j={}}=f,S={...j,...k},E=e=>{x=!0,u.has(e)&&(b=!0,u.delete(e)),f.needsAnimating[e]=!0};for(const e in S){const t=k[e],r=j[e];if(d.hasOwnProperty(e))continue;let n=!1;n=to(t)&&to(r)?!Ao(t,r):t!==r,n?void 0!==t?E(e):u.add(e):void 0!==t&&u.has(e)?E(e):f.protectedKeys[e]=!0}f.prevProp=m,f.prevResolvedValues=k,f.isActive&&(d={...d,...k}),n&&e.blockInitialAnimation&&(x=!1),!x||y&&!b||c.push(...w.map((e=>({animation:e,options:{type:h,...i}}))))}if(u.size){const t={};u.forEach((r=>{const n=e.getBaseTarget(r);void 0!==n&&(t[r]=n)})),c.push({animation:t})}let h=Boolean(c.length);return!n||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),n=!1,h?t(c):Promise.resolve()}return{animateChanges:i,setActive:function(t,n,o){var a;if(r[t].isActive===n)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach((e=>{var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)})),r[t].isActive=n;const s=i(o,t);for(const e in r)r[e].protectedKeys={};return s},setAnimateFunction:function(r){t=r(e)},getState:()=>r}}function Ba(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Ao(t,e)}function Ua(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let Va=0;const Wa={animation:{Feature:class extends bo{constructor(e){super(e),e.animationState||(e.animationState=Fa(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Fr(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends bo{constructor(){super(...arguments),this.id=Va++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const o=this.node.animationState.setActive("exit",!e,{custom:null!==r&&void 0!==r?r:this.node.getProps().custom});t&&!e&&o.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Ha=(e,t)=>Math.abs(e-t);class qa{constructor(e,t){let{transformPagePoint:r,contextWindow:n,dragSnapToOrigin:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Ka(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,r=function(e,t){const r=Ha(e.x,t.x),n=Ha(e.y,t.y);return Math.sqrt(r**2+n**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!r)return;const{point:n}=e,{timestamp:o}=br;this.history.push({...n,timestamp:o});const{onStart:i,onMove:a}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ya(t,this.transformPagePoint),yr.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:r,onSessionEnd:n,resumeAnimation:o}=this.handlers;if(this.dragSnapToOrigin&&o&&o(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const i=Ka("pointercancel"===e.type?this.lastMoveEventInfo:Ya(t,this.transformPagePoint),this.history);this.startEvent&&r&&r(e,i),n&&n(e,i)},!co(e))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=r,this.contextWindow=n||window;const i=Ya(uo(e),this.transformPagePoint),{point:a}=i,{timestamp:s}=br;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Ka(i,this.history)),this.removeListeners=fo(po(this.contextWindow,"pointermove",this.handlePointerMove),po(this.contextWindow,"pointerup",this.handlePointerUp),po(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),xr(this.updatePoint)}}function Ya(e,t){return t?{point:t(e.point)}:e}function Xa(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ka(e,t){let{point:r}=e;return{point:r,delta:Xa(r,Qa(t)),offset:Xa(r,Ga(t)),velocity:Ja(t,.1)}}function Ga(e){return e[0]}function Qa(e){return e[e.length-1]}function Ja(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const o=Qa(e);for(;r>=0&&(n=e[r],!(o.timestamp-n.timestamp>Oo(t)));)r--;if(!n)return{x:0,y:0};const i=zo(o.timestamp-n.timestamp);if(0===i)return{x:0,y:0};const a={x:(o.x-n.x)/i,y:(o.y-n.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Za(e){return e.max-e.min}function es(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=r}function ts(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=n,e.originPoint=ci(t.min,t.max,e.origin),e.scale=Za(r)/Za(t),(es(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ci(r.min,r.max,e.origin)-e.originPoint,(es(e.translate)||isNaN(e.translate))&&(e.translate=0)}function rs(e,t,r,n){ts(e.x,t.x,r.x,n?n.originX:void 0),ts(e.y,t.y,r.y,n?n.originY:void 0)}function ns(e,t,r){e.min=r.min+t.min,e.max=e.min+Za(t)}function os(e,t,r){e.min=t.min-r.min,e.max=e.min+Za(t)}function is(e,t,r){os(e.x,t.x,r.x),os(e.y,t.y,r.y)}function as(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}function ss(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}const ls=.35;function cs(e,t,r){return{min:us(e,t),max:us(e,r)}}function us(e,t){return"number"===typeof e?e:e[t]||0}function ds(e){return[e("x"),e("y")]}function ps(e){let{top:t,left:r,right:n,bottom:o}=e;return{x:{min:r,max:n},y:{min:t,max:o}}}function hs(e){return void 0===e||1===e}function fs(e){let{scale:t,scaleX:r,scaleY:n}=e;return!hs(t)||!hs(r)||!hs(n)}function ms(e){return fs(e)||gs(e)||e.z||e.rotate||e.rotateX||e.rotateY}function gs(e){return vs(e.x)||vs(e.y)}function vs(e){return e&&"0%"!==e}function ys(e,t,r){return r+t*(e-r)}function xs(e,t,r,n,o){return void 0!==o&&(e=ys(e,o,n)),ys(e,r,n)+t}function bs(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;e.min=xs(e.min,t,r,n,o),e.max=xs(e.max,t,r,n,o)}function ws(e,t){let{x:r,y:n}=t;bs(e.x,r.translate,r.scale,r.originPoint),bs(e.y,n.translate,n.scale,n.originPoint)}function ks(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function js(e,t){e.min=e.min+t,e.max=e.max+t}function Ss(e,t,r){let[n,o,i]=r;const a=void 0!==t[i]?t[i]:.5,s=ci(e.min,e.max,a);bs(e,t[n],t[o],s,t.scale)}const Es=["x","scaleX","originX"],Cs=["y","scaleY","originY"];function Ts(e,t){Ss(e.x,t,Es),Ss(e.y,t,Cs)}function _s(e,t){return ps(function(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}const Ps=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Ls=new WeakMap;class As{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:n}=this.getProps();this.panSession=new qa(e,{onSessionStart:e=>{const{dragSnapToOrigin:r}=this.getProps();r?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(uo(e,"page").point)},onStart:(e,t)=>{const{drag:r,dragPropagation:n,onDragStart:o}=this.getProps();if(r&&!n&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=yo(r),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ds((e=>{let t=this.getAxisMotionValue(e).get()||0;if(En.test(t)){const{projection:r}=this.visualElement;if(r&&r.layout){const n=r.layout.layoutBox[e];if(n){t=Za(n)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),o&&yr.update((()=>o(e,t)),!1,!0);const{animationState:i}=this.visualElement;i&&i.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:r,dragDirectionLock:n,onDirectionLock:o,onDrag:i}=this.getProps();if(!r&&!this.openGlobalLock)return;const{offset:a}=t;if(n&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=null;Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x");return r}(a),void(null!==this.currentDirection&&o&&o(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),i&&i(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>ds((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:n,contextWindow:Ps(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:n}=t;this.startAnimation(n);const{onDragEnd:o}=this.getProps();o&&yr.update((()=>o(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:n}=this.getProps();if(!r||!Rs(e,n,this.currentDirection))return;const o=this.getAxisMotionValue(e);let i=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(i=function(e,t,r){let{min:n,max:o}=t;return void 0!==n&&e<n?e=r?ci(n,e,r.min):Math.max(e,n):void 0!==o&&e>o&&(e=r?ci(o,e,r.max):Math.min(e,o)),e}(i,this.constraints[e],this.elastic[e])),o.set(i)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,o=this.constraints;t&&Mr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!n)&&function(e,t){let{top:r,left:n,bottom:o,right:i}=t;return{x:as(e.x,n,i),y:as(e.y,r,o)}}(n.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ls;return!1===e?e=0:!0===e&&(e=ls),{x:cs(e,"left","right"),y:cs(e,"top","bottom")}}(r),o!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&ds((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Mr(e))return!1;const r=e.current;Lr(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:n}=this.visualElement;if(!n||!n.layout)return!1;const o=function(e,t,r){const n=_s(e,r),{scroll:o}=t;return o&&(js(n.x,o.offset.x),js(n.y,o.offset.y)),n}(r,n.root,this.visualElement.getTransformPagePoint());let i=function(e,t){return{x:ss(e.x,t.x),y:ss(e.y,t.y)}}(n.layout.layoutBox,o);if(t){const e=t(function(e){let{x:t,y:r}=e;return{top:r.min,right:t.max,bottom:r.max,left:t.min}}(i));this.hasMutatedConstraints=!!e,e&&(i=ps(e))}return i}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:n,dragTransition:o,dragSnapToOrigin:i,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=ds((a=>{if(!Rs(a,t,this.currentDirection))return;let l=s&&s[a]||{};i&&(l={min:0,max:0});const c=n?200:1e6,u=n?40:1e7,d={type:"inertia",velocity:r?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...o,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return r.start(ma(e,r,0,t))}stopAnimation(){ds((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){ds((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),n=r[t];return n||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ds((t=>{const{drag:r}=this.getProps();if(!Rs(t,r,this.currentDirection))return;const{projection:n}=this.visualElement,o=this.getAxisMotionValue(t);if(n&&n.layout){const{min:r,max:i}=n.layout.layoutBox[t];o.set(e[t]-ci(r,i,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Mr(t)||!r||!this.constraints)return;this.stopAnimation();const n={x:0,y:0};ds((e=>{const t=this.getAxisMotionValue(e);if(t){const r=t.get();n[e]=function(e,t){let r=.5;const n=Za(e),o=Za(t);return o>n?r=Pi(t.min,t.max-n,e.min):n>o&&(r=Pi(e.min,e.max-o,t.min)),fn(0,1,r)}({min:r,max:r},this.constraints[e])}}));const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ds((t=>{if(!Rs(t,e,null))return;const r=this.getAxisMotionValue(t),{min:o,max:i}=this.constraints[t];r.set(ci(o,i,n[t]))}))}addListeners(){if(!this.visualElement.current)return;Ls.set(this.visualElement,this);const e=po(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:r=!0}=this.getProps();t&&r&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Mr(e)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,n=r.addEventListener("measure",t);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),t();const o=lo(window,"resize",(()=>this.scalePositionWithinConstraints())),i=r.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:r}=e;this.isDragging&&r&&(ds((e=>{const r=this.getAxisMotionValue(e);r&&(this.originPoint[e]+=t[e].translate,r.set(r.get()+t[e].translate))})),this.visualElement.render())}));return()=>{o(),e(),n(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:n=!1,dragConstraints:o=!1,dragElastic:i=ls,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:n,dragConstraints:o,dragElastic:i,dragMomentum:a}}}function Rs(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}const Os=e=>(t,r)=>{e&&yr.update((()=>e(t,r)))};const zs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ns(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ds={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Cn.test(e))return e;e=parseFloat(e)}return`${Ns(e,t.target.x)}% ${Ns(e,t.target.y)}%`}},Is={correct:(e,t)=>{let{treeScale:r,projectionDelta:n}=t;const o=e,i=ji.parse(e);if(i.length>5)return o;const a=ji.createTransformer(e),s="number"!==typeof i[0]?1:0,l=n.x.scale*r.x,c=n.y.scale*r.y;i[0+s]/=l,i[1+s]/=c;const u=ci(l,c,.5);return"number"===typeof i[2+s]&&(i[2+s]/=u),"number"===typeof i[3+s]&&(i[3+s]/=u),a(i)}};class Ms extends n.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:n}=this.props,{projection:o}=e;var i;i=Fs,Object.assign(rn,i),o&&(t.group&&t.group.add(o),r&&r.register&&n&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",(()=>{this.safeToRemove()})),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),zs.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:n,isPresent:o}=this.props,i=r.projection;return i?(i.isPresent=o,n||e.layoutDependency!==t||void 0===t?i.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?i.promote():i.relegate()||yr.postRender((()=>{const e=i.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:n}=e;n&&(n.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(n),r&&r.deregister&&r.deregister(n))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function $s(e){const[t,r]=function(){const e=(0,n.useContext)(kr);if(null===e)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,i=(0,n.useId)();return(0,n.useEffect)((()=>o(i)),[]),!t&&r?[!1,()=>r&&r(i)]:[!0]}(),o=(0,n.useContext)(_r);return n.createElement(Ms,{...e,layoutGroup:o,switchLayoutGroup:(0,n.useContext)(Kr),isPresent:t,safeToRemove:r})}const Fs={borderRadius:{...Ds,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ds,borderTopRightRadius:Ds,borderBottomLeftRadius:Ds,borderBottomRightRadius:Ds,boxShadow:Is},Bs=["TopLeft","TopRight","BottomLeft","BottomRight"],Us=Bs.length,Vs=e=>"string"===typeof e?parseFloat(e):e,Ws=e=>"number"===typeof e||Cn.test(e);function Hs(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const qs=Xs(0,.5,Ko),Ys=Xs(.5,.95,mr);function Xs(e,t,r){return n=>n<e?0:n>t?1:r(Pi(e,t,n))}function Ks(e,t){e.min=t.min,e.max=t.max}function Gs(e,t){Ks(e.x,t.x),Ks(e.y,t.y)}function Qs(e,t,r,n,o){return e=ys(e-=t,1/r,n),void 0!==o&&(e=ys(e,1/o,n)),e}function Js(e,t,r,n,o){let[i,a,s]=r;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;En.test(t)&&(t=parseFloat(t),t=ci(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=ci(i.min,i.max,n);e===i&&(s-=t),e.min=Qs(e.min,t,r,s,o),e.max=Qs(e.max,t,r,s,o)}(e,t[i],t[a],t[s],t.scale,n,o)}const Zs=["x","scaleX","originX"],el=["y","scaleY","originY"];function tl(e,t,r,n){Js(e.x,t,Zs,r?r.x:void 0,n?n.x:void 0),Js(e.y,t,el,r?r.y:void 0,n?n.y:void 0)}function rl(e){return 0===e.translate&&1===e.scale}function nl(e){return rl(e.x)&&rl(e.y)}function ol(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function il(e){return Za(e.x)/Za(e.y)}class al{constructor(){this.members=[]}add(e){ya(this.members,e),e.scheduleRender()}remove(e){if(xa(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let r;for(let n=t;n>=0;n--){const e=this.members[n];if(!1!==e.isPresent){r=e;break}}return!!r&&(this.promote(r),!0)}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:n}=e.options;!1===n&&r.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function sl(e,t,r){let n="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(n=`translate3d(${o}px, ${i}px, 0) `),1===t.x&&1===t.y||(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:e,rotateX:t,rotateY:o}=r;e&&(n+=`rotate(${e}deg) `),t&&(n+=`rotateX(${t}deg) `),o&&(n+=`rotateY(${o}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return 1===a&&1===s||(n+=`scale(${a}, ${s})`),n||"none"}const ll=(e,t)=>e.depth-t.depth;class cl{constructor(){this.children=[],this.isDirty=!1}add(e){ya(this.children,e),this.isDirty=!0}remove(e){xa(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ll),this.isDirty=!1,this.children.forEach(e)}}const ul=["","X","Y","Z"],dl={visibility:"hidden"};let pl=0;const hl={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function fl(e){let{attachResizeListener:t,defaultParent:r,measureScroll:n,checkIsScrollRoot:o,resetTransform:i}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===r||void 0===r?void 0:r();this.id=pl++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,hl.totalNodes=hl.resolvedTargetDeltas=hl.recalculatedProjection=0,this.nodes.forEach(vl),this.nodes.forEach(Sl),this.nodes.forEach(El),this.nodes.forEach(yl),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(hl)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let r=0;r<this.path.length;r++)this.path[r].shouldResetTransform=!0;this.root===this&&(this.nodes=new cl)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ba),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];t&&t.notify(...n)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var n;this.isSVG=(n=e)instanceof SVGElement&&"svg"!==n.tagName,this.instance=e;const{layoutId:o,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(i||o)&&(this.isLayoutDirty=!0),t){let r;const n=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,r&&r(),r=function(e,t){const r=performance.now(),n=o=>{let{timestamp:i}=o;const a=i-r;a>=t&&(xr(n),e(a-t))};return yr.read(n,!0),()=>xr(n)}(n,250),zs.hasAnimatedSinceResize&&(zs.hasAnimatedSinceResize=!1,this.nodes.forEach(jl))}))}o&&this.root.registerSharedNode(o,this),!1!==this.options.animate&&a&&(o||i)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:r,hasRelativeTargetChanged:n,layout:o}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const i=this.options.transition||a.getDefaultTransition()||Al,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!ol(this.targetLayout,o)||n,u=!r&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||r&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...ha(i,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else r||jl(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=o}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,xr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Cl),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let o=0;o<this.path.length;o++){const e=this.path[o];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:r}=this.options;if(void 0===t&&!r)return;const n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(bl);this.isUpdating||this.nodes.forEach(wl),this.isUpdating=!1,this.nodes.forEach(kl),this.nodes.forEach(ml),this.nodes.forEach(gl),this.clearAllSnapshots();const e=performance.now();br.delta=fn(0,1e3/60,e-br.timestamp),br.timestamp=e,br.isProcessing=!0,wr.update.process(br),wr.preRender.process(br),wr.render.process(br),br.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(xl),this.sharedNodes.forEach(Tl)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,yr.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){yr.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let r=0;r<this.path.length;r++){this.path[r].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:o(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!nl(this.projectionDelta),r=this.getTransformTemplate(),n=r?r(this.latestValues,""):void 0,o=n!==this.prevTransformTemplateValue;e&&(t||ms(this.latestValues)||o)&&(i(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let r=this.removeElementScroll(t);var n;return e&&(r=this.removeTransform(r)),zl((n=r).x),zl(n.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:r}=this.root;return r&&(js(t.x,r.offset.x),js(t.y,r.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Gs(t,e);for(let r=0;r<this.path.length;r++){const n=this.path[r],{scroll:o,options:i}=n;if(n!==this.root&&o&&i.layoutScroll){if(o.isRoot){Gs(t,e);const{scroll:r}=this.root;r&&(js(t.x,-r.offset.x),js(t.y,-r.offset.y))}js(t.x,o.offset.x),js(t.y,o.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r={x:{min:0,max:0},y:{min:0,max:0}};Gs(r,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Ts(r,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),ms(e.latestValues)&&Ts(r,e.latestValues)}return ms(this.latestValues)&&Ts(r,this.latestValues),r}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Gs(t,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];if(!e.instance)continue;if(!ms(e.latestValues))continue;fs(e.latestValues)&&e.updateSnapshot();const n={x:{min:0,max:0},y:{min:0,max:0}};Gs(n,e.measurePageBox()),tl(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,n)}return ms(this.latestValues)&&tl(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==br.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const r=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=r.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=r.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=r.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==r;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:o,layoutId:i}=this.options;if(this.layout&&(o||i)){if(this.resolvedRelativeTargetAt=br.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},is(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Gs(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,ns(a.x,s.x,l.x),ns(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Gs(this.target,this.layout.layoutBox),ws(this.target,this.targetDelta)):Gs(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},is(this.relativeTargetOrigin,this.target,e.target),Gs(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}hl.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!fs(this.parent.latestValues)&&!gs(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),r=Boolean(this.resumingFrom)||this!==t;let n=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(n=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===br.timestamp&&(n=!1),n)return;const{layout:o,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!o&&!i)return;Gs(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=r.length;if(!o)return;let i,a;t.x=t.y=1;for(let s=0;s<o;s++){i=r[s],a=i.projectionDelta;const o=i.instance;o&&o.style&&"contents"===o.style.display||(n&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Ts(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,ws(e,a)),n&&ms(i.latestValues)&&Ts(e,i.latestValues))}t.x=ks(t.x),t.y=ks(t.y)}(this.layoutCorrected,this.treeScale,this.path,r),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;rs(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=sl(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===a&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),hl.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=this.snapshot,n=r?r.latestValues:{},o={...this.latestValues},i={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Ll));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const r=t/1e3;var l,p,h,f;_l(i.x,e.x,r),_l(i.y,e.y,r),this.setTargetDelta(i),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(is(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),l=this.relativeTarget,p=this.relativeTargetOrigin,h=a,f=r,Pl(l.x,p.x,h.x,f),Pl(l.y,p.y,h.y,f),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Gs(d,this.relativeTarget)),s&&(this.animationValues=o,function(e,t,r,n,o,i){o?(e.opacity=ci(0,void 0!==r.opacity?r.opacity:1,qs(n)),e.opacityExit=ci(void 0!==t.opacity?t.opacity:1,0,Ys(n))):i&&(e.opacity=ci(void 0!==t.opacity?t.opacity:1,void 0!==r.opacity?r.opacity:1,n));for(let a=0;a<Us;a++){const o=`border${Bs[a]}Radius`;let i=Hs(t,o),s=Hs(r,o);void 0===i&&void 0===s||(i||(i=0),s||(s=0),0===i||0===s||Ws(i)===Ws(s)?(e[o]=Math.max(ci(Vs(i),Vs(s),n),0),(En.test(s)||En.test(i))&&(e[o]+="%")):e[o]=s)}(t.rotate||r.rotate)&&(e.rotate=ci(t.rotate||0,r.rotate||0,n))}(o,n,this.latestValues,r,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(xr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=yr.update((()=>{zs.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,r){const n=sn(e)?e:ja(e);return n.start(ma("",n,t,r)),n.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:r,layout:n,latestValues:o}=e;if(t&&r&&n){if(this!==e&&this.layout&&n&&Nl(this.options.animationType,this.layout.layoutBox,n.layoutBox)){r=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Za(this.layout.layoutBox.x);r.x.min=e.target.x.min,r.x.max=r.x.min+t;const n=Za(this.layout.layoutBox.y);r.y.min=e.target.y.min,r.y.max=r.y.min+n}Gs(t,r),Ts(t,o),rs(this.projectionDeltaWithTransform,this.layoutCorrected,t,o)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new al);this.sharedNodes.get(e).add(t);const r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=this.getStack();n&&n.promote(this,r),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:r}=e;if((r.rotate||r.rotateX||r.rotateY||r.rotateZ)&&(t=!0),!t)return;const n={};for(let o=0;o<ul.length;o++){const t="rotate"+ul[o];r[t]&&(n[t]=r[t],e.setStaticValue(t,0))}e.render();for(const o in n)e.setStaticValue(o,n[o]);e.scheduleRender()}getProjectionStyles(e){var t,r;if(!this.instance||this.isSVG)return;if(!this.isVisible)return dl;const n={visibility:""},o=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,n.opacity="",n.pointerEvents=no(null===e||void 0===e?void 0:e.pointerEvents)||"",n.transform=o?o(this.latestValues,""):"none",n;const i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=no(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!ms(this.latestValues)&&(t.transform=o?o({},""):"none",this.hasProjected=!1),t}const a=i.animationValues||i.latestValues;this.applyTransformsToTarget(),n.transform=sl(this.projectionDeltaWithTransform,this.treeScale,a),o&&(n.transform=o(a,n.transform));const{x:s,y:l}=this.projectionDelta;n.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,i.animationValues?n.opacity=i===this?null!==(r=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:n.opacity=i===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const c in rn){if(void 0===a[c])continue;const{correct:e,applyTo:t}=rn[c],r="none"===n.transform?a[c]:e(a[c],i);if(t){const e=t.length;for(let o=0;o<e;o++)n[t[o]]=r}else n[c]=r}return this.options.layoutId&&(n.pointerEvents=i===this?no(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),n}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(bl),this.root.sharedNodes.clear()}}}function ml(e){e.updateLayout()}function gl(e){var t;const r=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:n}=e.layout,{animationType:o}=e.options,i=r.source!==e.layout.source;"size"===o?ds((e=>{const n=i?r.measuredBox[e]:r.layoutBox[e],o=Za(n);n.min=t[e].min,n.max=n.min+o})):Nl(o,r.layoutBox,t)&&ds((n=>{const o=i?r.measuredBox[n]:r.layoutBox[n],a=Za(t[n]);o.max=o.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[n].max=e.relativeTarget[n].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};rs(a,t,r.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};i?rs(s,e.applyTransform(n,!0),r.measuredBox):rs(s,t,r.layoutBox);const l=!nl(a);let c=!1;if(!e.resumeFrom){const n=e.getClosestProjectingParent();if(n&&!n.resumeFrom){const{snapshot:o,layout:i}=n;if(o&&i){const a={x:{min:0,max:0},y:{min:0,max:0}};is(a,r.layoutBox,o.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};is(s,t,i.layoutBox),ol(a,s)||(c=!0),n.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=n)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:r,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function vl(e){hl.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function yl(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function xl(e){e.clearSnapshot()}function bl(e){e.clearMeasurements()}function wl(e){e.isLayoutDirty=!1}function kl(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function jl(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Sl(e){e.resolveTargetDelta()}function El(e){e.calcProjection()}function Cl(e){e.resetRotation()}function Tl(e){e.removeLeadSnapshot()}function _l(e,t,r){e.translate=ci(t.translate,0,r),e.scale=ci(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Pl(e,t,r,n){e.min=ci(t.min,r.min,n),e.max=ci(t.max,r.max,n)}function Ll(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Al={duration:.45,ease:[.4,0,.1,1]},Rl=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Ol=Rl("applewebkit/")&&!Rl("chrome/")?Math.round:mr;function zl(e){e.min=Ol(e.min),e.max=Ol(e.max)}function Nl(e,t,r){return"position"===e||"preserve-aspect"===e&&!es(il(t),il(r),.2)}const Dl=fl({attachResizeListener:(e,t)=>lo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Il={current:void 0},Ml=fl({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Il.current){const e=new Dl({});e.mount(window),e.setOptions({layoutScroll:!0}),Il.current=e}return Il.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),$l={pan:{Feature:class extends bo{constructor(){super(...arguments),this.removePointerDownListener=mr}onPointerDown(e){this.session=new qa(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ps(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:n}=this.node.getProps();return{onSessionStart:Os(e),onStart:Os(t),onMove:r,onEnd:(e,t)=>{delete this.session,n&&yr.update((()=>n(e,t)))}}}mount(){this.removePointerDownListener=po(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends bo{constructor(e){super(e),this.removeGroupControls=mr,this.removeListeners=mr,this.controls=new As(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mr}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Ml,MeasureLayout:$s}},Fl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Bl(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Lr(r<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[n,o]=function(e){const t=Fl.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]}(e);if(!n)return;const i=window.getComputedStyle(t).getPropertyValue(n);if(i){const e=i.trim();return va(e)?parseFloat(e):e}return pn(o)?Bl(o,t,r+1):o}const Ul=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Vl=e=>Ul.has(e),Wl=e=>e===mn||e===Cn,Hl=(e,t)=>parseFloat(e.split(", ")[t]),ql=(e,t)=>(r,n)=>{let{transform:o}=n;if("none"===o||!o)return 0;const i=o.match(/^matrix3d\((.+)\)$/);if(i)return Hl(i[1],t);{const t=o.match(/^matrix\((.+)\)$/);return t?Hl(t[1],e):0}},Yl=new Set(["x","y","z"]),Xl=nn.filter((e=>!Yl.has(e)));const Kl={width:(e,t)=>{let{x:r}=e,{paddingLeft:n="0",paddingRight:o="0"}=t;return r.max-r.min-parseFloat(n)-parseFloat(o)},height:(e,t)=>{let{y:r}=e,{paddingTop:n="0",paddingBottom:o="0"}=t;return r.max-r.min-parseFloat(n)-parseFloat(o)},top:(e,t)=>{let{top:r}=t;return parseFloat(r)},left:(e,t)=>{let{left:r}=t;return parseFloat(r)},bottom:(e,t)=>{let{y:r}=e,{top:n}=t;return parseFloat(n)+(r.max-r.min)},right:(e,t)=>{let{x:r}=e,{left:n}=t;return parseFloat(n)+(r.max-r.min)},x:ql(4,13),y:ql(5,14)};Kl.translateX=Kl.x,Kl.translateY=Kl.y;const Gl=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},n={...n};const o=Object.keys(t).filter(Vl);let i=[],a=!1;const s=[];if(o.forEach((o=>{const l=e.getValue(o);if(!e.hasValue(o))return;let c=r[o],u=Ca(c);const d=t[o];let p;if(to(d)){const e=d.length,t=null===d[0]?1:0;c=d[t],u=Ca(c);for(let r=t;r<e&&null!==d[r];r++)p?Lr(Ca(d[r])===p,"All keyframes must be of the same type"):(p=Ca(d[r]),Lr(p===u||Wl(u)&&Wl(p),"Keyframes must be of the same dimension as the current value"))}else p=Ca(d);if(u!==p)if(Wl(u)&&Wl(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[o]=parseFloat(d):Array.isArray(d)&&p===Cn&&(t[o]=d.map(parseFloat))}else(null===u||void 0===u?void 0:u.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===d)?0===c?l.set(p.transform(c)):t[o]=u.transform(d):(a||(i=function(e){const t=[];return Xl.forEach((r=>{const n=e.getValue(r);void 0!==n&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),a=!0),s.push(o),n[o]=void 0!==n[o]?n[o]:t[o],l.jump(d))})),s.length){const r=s.indexOf("height")>=0?window.pageYOffset:null,o=((e,t,r)=>{const n=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:a}=i,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),r.forEach((e=>{s[e]=Kl[e](n,i)})),t.render();const l=t.measureViewportBox();return r.forEach((r=>{const n=t.getValue(r);n&&n.jump(s[r]),e[r]=Kl[r](l,i)})),e})(t,e,s);return i.length&&i.forEach((t=>{let[r,n]=t;e.getValue(r).set(n)})),e.render(),pr&&null!==r&&window.scrollTo({top:r}),{target:o,transitionEnd:n}}return{target:t,transitionEnd:n}};function Ql(e,t,r,n){return(e=>Object.keys(e).some(Vl))(t)?Gl(e,t,r,n):{target:t,transitionEnd:n}}const Jl=(e,t,r,n)=>{const o=function(e,t,r){let{...n}=t;const o=e.current;if(!(o instanceof Element))return{target:n,transitionEnd:r};r&&(r={...r}),e.values.forEach((e=>{const t=e.get();if(!pn(t))return;const r=Bl(t,o);r&&e.set(r)}));for(const i in n){const e=n[i];if(!pn(e))continue;const t=Bl(e,o);t&&(n[i]=t,r||(r={}),void 0===r[i]&&(r[i]=e))}return{target:n,transitionEnd:r}}(e,t,n);return Ql(e,t=o.target,r,n=o.transitionEnd)},Zl={current:null},ec={current:!1};function tc(){if(ec.current=!0,pr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Zl.current=e.matches;e.addListener(t),t()}else Zl.current=!1}const rc=new WeakMap,nc=Object.keys(Xr),oc=nc.length,ic=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],ac=Ur.length;class sc{constructor(e){let{parent:t,props:r,presenceContext:n,reducedMotionConfig:o,visualState:i}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>yr.render(this.render,!1,!0);const{latestValues:s,renderState:l}=i;this.latestValues=s,this.baseTarget={...s},this.initialValues=r.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.isControllingVariants=Vr(r),this.isVariantNode=Wr(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(r,{});for(const d in u){const e=u[d];void 0!==s[d]&&sn(e)&&(e.set(s[d],!1),ga(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,rc.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),ec.current||tc(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Zl.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){rc.delete(this.current),this.projection&&this.projection.unmount(),xr(this.notifyUpdate),xr(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const r=on.has(e),n=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&yr.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)})),o=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{n(),o()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,r,n){let o,i,{children:a,...s}=e;for(let l=0;l<oc;l++){const e=nc[l],{isEnabled:t,Feature:r,ProjectionNode:n,MeasureLayout:a}=Xr[e];n&&(o=n),t(s)&&(!this.features[e]&&r&&(this.features[e]=new r(this)),a&&(i=a))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:r,dragConstraints:i,layoutScroll:a,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(r)||i&&Mr(i),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:n,layoutScroll:a,layoutRoot:l})}return i}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<ic.length;r++){const t=ic[r];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const n=e["on"+t];n&&(this.propEventSubscriptions[t]=this.on(t,n))}this.prevMotionValues=function(e,t,r){const{willChange:n}=t;for(const o in t){const i=t[o],a=r[o];if(sn(i))e.addValue(o,i),ga(n)&&n.add(o);else if(sn(a))e.addValue(o,ja(i,{owner:e})),ga(n)&&n.remove(o);else if(a!==i)if(e.hasValue(o)){const t=e.getValue(o);!t.hasAnimated&&t.set(i)}else{const t=e.getStaticValue(o);e.addValue(o,ja(void 0!==t?t:i,{owner:e}))}}for(const o in r)void 0===t[o]&&e.removeValue(o);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<ac;t++){const r=Ur[t],n=this.props[r];($r(n)||!1===n)&&(e[r]=n)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return void 0===r&&void 0!==t&&(r=ja(t,{owner:this}),this.addValue(e,r)),r}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props,n="string"===typeof r||"object"===typeof r?null===(t=eo(this.props,r))||void 0===t?void 0:t[e]:void 0;if(r&&void 0!==n)return n;const o=this.getBaseTargetFromProps(this.props,e);return void 0===o||sn(o)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:o}on(e,t){return this.events[e]||(this.events[e]=new ba),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.events[e].notify(...r)}}}class lc extends sc{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:r,style:n}=t;delete r[e],delete n[e]}makeTargetAnimatableFromInstance(e,t,r){let{transition:n,transitionEnd:o,...i}=e,{transformValues:a}=t,s=function(e,t,r){const n={};for(const o in e){const e=Aa(o,t);if(void 0!==e)n[o]=e;else{const e=r.getValue(o);e&&(n[o]=e.get())}}return n}(i,n||{},this);if(a&&(o&&(o=a(o)),i&&(i=a(i)),s&&(s=a(s))),r){!function(e,t,r){var n,o;const i=Object.keys(t).filter((t=>!e.hasValue(t))),a=i.length;if(a)for(let s=0;s<a;s++){const a=i[s],l=t[a];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(o=null!==(n=r[a])&&void 0!==n?n:e.readValue(a))&&void 0!==o?o:t[a]),void 0!==c&&null!==c&&("string"===typeof c&&(va(c)||da(c))?c=parseFloat(c):!_a(c)&&ji.test(l)&&(c=ua(a,l)),e.addValue(a,ja(c,{owner:e})),void 0===r[a]&&(r[a]=c),null!==c&&e.setBaseTarget(a,c))}}(this,i,s);const e=Jl(this,i,s,o);o=e.transitionEnd,i=e.target}return{transition:n,transitionEnd:o,...i}}}class cc extends lc{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(on.has(t)){const e=ca(t);return e&&e.default||0}{const n=(r=e,window.getComputedStyle(r)),o=(dn(t)?n.getPropertyValue(t):n[t])||0;return"string"===typeof o?o.trim():o}var r}measureInstanceViewportBox(e,t){let{transformPagePoint:r}=t;return _s(e,r)}build(e,t,r,n){Rn(e,t,r,n.transformTemplate)}scrapeMotionValuesFromProps(e,t){return Jn(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;sn(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,r,n){Kn(e,t,r,n)}}class uc extends lc{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(on.has(t)){const e=ca(t);return e&&e.default||0}return t=Gn.has(t)?t:Dr(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return Zn(e,t)}build(e,t,r,n){Wn(e,t,r,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,r,n){Qn(e,t,0,n)}mount(e){this.isSVGTag=qn(e.tagName),super.mount(e)}}const dc=(e,t)=>tn(e)?new uc(t,{enableHardwareAcceleration:!1}):new cc(t,{enableHardwareAcceleration:!0}),pc={...Wa,...Lo,...$l,...{layout:{ProjectionNode:Ml,MeasureLayout:$s}}},hc=Zr(((e,t)=>function(e,t,r,n){let{forwardMotionProps:o=!1}=t;return{...tn(e)?ao:so,preloadedFeatures:r,useRender:Xn(o),createVisualElement:n,Component:e}}(e,t,pc,dc)));const fc=(function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var i=Yt.apply(void 0,[e].concat(r)),a="sc-global-"+Jt(JSON.stringify(i)),s=new cr(i,a);function l(e){var t=Nt(),r=Dt(),o=(0,n.useContext)(or),i=(0,n.useRef)(t.allocateGSInstance(a)).current;return t.server&&c(i,e,t,o,r),(0,n.useLayoutEffect)((function(){if(!t.server)return c(i,e,t,o,r),function(){return s.removeStyles(i,t)}}),[i,e,t,o,r]),null}function c(e,t,r,n,o){if(s.isStatic)s.renderStyles(e,Ze,r,o);else{var i=Ue({},t,{theme:Xt(t,n,l.defaultProps)});s.renderStyles(e,i,r,o)}}return n.memo(l)})`
  :root {
    /* Colors */
    --color-text-primary: #ffffff;
    --color-text-secondary: #b3b3b3;
    --color-primary:hsl(217, 91.20%, 59.80%);
    --color-primary-rgb: 59, 130, 246;
    --color-primary-dark: #2563eb;
    --color-primary-light: #60a5fa;
    --color-heading: #f5f5f5;
    --color-border: #333333;
  }

  /* Font settings */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    color: var(--color-text-primary);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    margin: 0;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text-primary);
    
    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;  /* Chrome, Safari and Opera */
    }
  }

  /* Override cursor for all elements when our custom cursor is active */
  .custom-cursor,
  .custom-cursor * {
    cursor: none !important;
  }

  /* Custom styling for hoverable elements */
  .hoverable {
    transition: transform 0.2s ease;
    
    &:hover {
      /* Subtle indication even if custom cursor is not working */
      transform: translateY(-1px);
    }
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: var(--color-heading);
    margin-top: 0;
  }

  /* Tailwind-like utility classes */
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Larger screens */
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }

  /* Reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Will-change optimizations */
  .optimize-gpu {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .font-heading {
    font-family: 'Poppins', sans-serif;
  }
  
  .font-body {
    font-family: 'Inter', sans-serif;
  }
`,mc={colors:{primary:"#2563eb",secondary:"#5B3DF5",tertiary:"#21C6F7",text:"#FFFFFF",background:"#121212",darkBackground:"#0A0A0A",lightBackground:"#1E1E1E",gray:"#888888",success:"#4BB543",error:"#2563eb"},fonts:{heading:"'Montserrat', sans-serif",body:"'Poppins', sans-serif"},breakpoints:{xs:"576px",sm:"768px",md:"992px",lg:"1200px"},transition:{standard:"all 0.3s ease"},shadows:{small:"0 2px 10px rgba(0, 0, 0, 0.2)",medium:"0 5px 15px rgba(0, 0, 0, 0.3)",large:"0 10px 25px rgba(0, 0, 0, 0.4)"},gradients:{primary:"linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",secondary:"linear-gradient(135deg, #5B3DF5 0%, #3D76F5 100%)"},spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem",xxl:"5rem"}};function gc(e,t){return function(){return e.apply(t,arguments)}}const{toString:vc}=Object.prototype,{getPrototypeOf:yc}=Object,xc=(bc=Object.create(null),e=>{const t=vc.call(e);return bc[t]||(bc[t]=t.slice(8,-1).toLowerCase())});var bc;const wc=e=>(e=e.toLowerCase(),t=>xc(t)===e),kc=e=>t=>typeof t===e,{isArray:jc}=Array,Sc=kc("undefined");const Ec=wc("ArrayBuffer");const Cc=kc("string"),Tc=kc("function"),_c=kc("number"),Pc=e=>null!==e&&"object"===typeof e,Lc=e=>{if("object"!==xc(e))return!1;const t=yc(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ac=wc("Date"),Rc=wc("File"),Oc=wc("Blob"),zc=wc("FileList"),Nc=wc("URLSearchParams"),[Dc,Ic,Mc,$c]=["ReadableStream","Request","Response","Headers"].map(wc);function Fc(e,t){let r,n,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),jc(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{const n=o?Object.getOwnPropertyNames(e):Object.keys(e),i=n.length;let a;for(r=0;r<i;r++)a=n[r],t.call(null,e[a],a,e)}}function Bc(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const Uc="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Vc=e=>!Sc(e)&&e!==Uc;const Wc=(Hc="undefined"!==typeof Uint8Array&&yc(Uint8Array),e=>Hc&&e instanceof Hc);var Hc;const qc=wc("HTMLFormElement"),Yc=(e=>{let{hasOwnProperty:t}=e;return(e,r)=>t.call(e,r)})(Object.prototype),Xc=wc("RegExp"),Kc=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Fc(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)};const Gc=wc("AsyncFunction"),Qc=((e,t)=>{return e?setImmediate:t?(r=`axios@${Math.random()}`,n=[],Uc.addEventListener("message",(e=>{let{source:t,data:o}=e;t===Uc&&o===r&&n.length&&n.shift()()}),!1),e=>{n.push(e),Uc.postMessage(r,"*")}):e=>setTimeout(e);var r,n})("function"===typeof setImmediate,Tc(Uc.postMessage)),Jc="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Uc):"undefined"!==typeof process&&process.nextTick||Qc,Zc={isArray:jc,isArrayBuffer:Ec,isBuffer:function(e){return null!==e&&!Sc(e)&&null!==e.constructor&&!Sc(e.constructor)&&Tc(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||Tc(e.append)&&("formdata"===(t=xc(e))||"object"===t&&Tc(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Ec(e.buffer),t},isString:Cc,isNumber:_c,isBoolean:e=>!0===e||!1===e,isObject:Pc,isPlainObject:Lc,isReadableStream:Dc,isRequest:Ic,isResponse:Mc,isHeaders:$c,isUndefined:Sc,isDate:Ac,isFile:Rc,isBlob:Oc,isRegExp:Xc,isFunction:Tc,isStream:e=>Pc(e)&&Tc(e.pipe),isURLSearchParams:Nc,isTypedArray:Wc,isFileList:zc,forEach:Fc,merge:function e(){const{caseless:t}=Vc(this)&&this||{},r={},n=(n,o)=>{const i=t&&Bc(r,o)||o;Lc(r[i])&&Lc(n)?r[i]=e(r[i],n):Lc(n)?r[i]=e({},n):jc(n)?r[i]=n.slice():r[i]=n};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Fc(arguments[o],n);return r},extend:function(e,t,r){let{allOwnKeys:n}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Fc(t,((t,n)=>{r&&Tc(t)?e[n]=gc(t,r):e[n]=t}),{allOwnKeys:n}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&yc(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:xc,kindOfTest:wc,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(jc(e))return e;let t=e.length;if(!_c(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:qc,hasOwnProperty:Yc,hasOwnProp:Yc,reduceDescriptors:Kc,freezeMethods:e=>{Kc(e,((t,r)=>{if(Tc(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];Tc(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return jc(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Bc,global:Uc,isContextDefined:Vc,isSpecCompliantForm:function(e){return!!(e&&Tc(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(Pc(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=jc(e)?[]:{};return Fc(e,((e,t)=>{const i=r(e,n+1);!Sc(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:Gc,isThenable:e=>e&&(Pc(e)||Tc(e))&&Tc(e.then)&&Tc(e.catch),setImmediate:Qc,asap:Jc};function eu(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}Zc.inherits(eu,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Zc.toJSONObject(this.config),code:this.code,status:this.status}}});const tu=eu.prototype,ru={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ru[e]={value:e}})),Object.defineProperties(eu,ru),Object.defineProperty(tu,"isAxiosError",{value:!0}),eu.from=(e,t,r,n,o,i)=>{const a=Object.create(tu);return Zc.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),eu.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const nu=eu;function ou(e){return Zc.isPlainObject(e)||Zc.isArray(e)}function iu(e){return Zc.endsWith(e,"[]")?e.slice(0,-2):e}function au(e,t,r){return e?e.concat(t).map((function(e,t){return e=iu(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const su=Zc.toFlatObject(Zc,{},null,(function(e){return/^is[A-Z]/.test(e)}));const lu=function(e,t,r){if(!Zc.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=Zc.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Zc.isUndefined(t[e])}))).metaTokens,o=r.visitor||c,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!==typeof Blob&&Blob)&&Zc.isSpecCompliantForm(t);if(!Zc.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Zc.isDate(e))return e.toISOString();if(!s&&Zc.isBlob(e))throw new nu("Blob is not supported. Use a Buffer instead.");return Zc.isArrayBuffer(e)||Zc.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,o){let s=e;if(e&&!o&&"object"===typeof e)if(Zc.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(Zc.isArray(e)&&function(e){return Zc.isArray(e)&&!e.some(ou)}(e)||(Zc.isFileList(e)||Zc.endsWith(r,"[]"))&&(s=Zc.toArray(e)))return r=iu(r),s.forEach((function(e,n){!Zc.isUndefined(e)&&null!==e&&t.append(!0===a?au([r],n,i):null===a?r:r+"[]",l(e))})),!1;return!!ou(e)||(t.append(au(o,r,i),l(e)),!1)}const u=[],d=Object.assign(su,{defaultVisitor:c,convertValue:l,isVisitable:ou});if(!Zc.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Zc.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+n.join("."));u.push(r),Zc.forEach(r,(function(r,i){!0===(!(Zc.isUndefined(r)||null===r)&&o.call(t,r,Zc.isString(i)?i.trim():i,n,d))&&e(r,n?n.concat(i):[i])})),u.pop()}}(e),t};function cu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function uu(e,t){this._pairs=[],e&&lu(e,this,t)}const du=uu.prototype;du.append=function(e,t){this._pairs.push([e,t])},du.toString=function(e){const t=e?function(t){return e.call(this,t,cu)}:cu;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const pu=uu;function hu(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function fu(e,t,r){if(!t)return e;const n=r&&r.encode||hu;Zc.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(i=o?o(t,r):Zc.isURLSearchParams(t)?t.toString():new pu(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const mu=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Zc.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},gu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vu={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:pu,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},yu="undefined"!==typeof window&&"undefined"!==typeof document,xu="object"===typeof navigator&&navigator||void 0,bu=yu&&(!xu||["ReactNative","NativeScript","NS"].indexOf(xu.product)<0),wu="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,ku=yu&&window.location.href||"http://localhost",ju={...e,...vu};const Su=function(e){function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&Zc.isArray(n)?n.length:i,s)return Zc.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a;n[i]&&Zc.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],o)&&Zc.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!a}if(Zc.isFormData(e)&&Zc.isFunction(e.entries)){const r={};return Zc.forEachEntry(e,((e,n)=>{t(function(e){return Zc.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null};const Eu={transitional:gu,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=Zc.isObject(e);o&&Zc.isHTMLForm(e)&&(e=new FormData(e));if(Zc.isFormData(e))return n?JSON.stringify(Su(e)):e;if(Zc.isArrayBuffer(e)||Zc.isBuffer(e)||Zc.isStream(e)||Zc.isFile(e)||Zc.isBlob(e)||Zc.isReadableStream(e))return e;if(Zc.isArrayBufferView(e))return e.buffer;if(Zc.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return lu(e,new ju.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return ju.isNode&&Zc.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Zc.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return lu(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t,r){if(Zc.isString(e))try{return(t||JSON.parse)(e),Zc.trim(e)}catch(Uw){if("SyntaxError"!==Uw.name)throw Uw}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Eu.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Zc.isResponse(e)||Zc.isReadableStream(e))return e;if(e&&Zc.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(Uw){if(r){if("SyntaxError"===Uw.name)throw nu.from(Uw,nu.ERR_BAD_RESPONSE,this,null,this.response);throw Uw}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ju.classes.FormData,Blob:ju.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Zc.forEach(["delete","get","head","post","put","patch"],(e=>{Eu.headers[e]={}}));const Cu=Eu,Tu=Zc.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_u=Symbol("internals");function Pu(e){return e&&String(e).trim().toLowerCase()}function Lu(e){return!1===e||null==e?e:Zc.isArray(e)?e.map(Lu):String(e)}function Au(e,t,r,n,o){return Zc.isFunction(n)?n.call(this,t,r):(o&&(t=r),Zc.isString(t)?Zc.isString(n)?-1!==t.indexOf(n):Zc.isRegExp(n)?n.test(t):void 0:void 0)}class Ru{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=Pu(t);if(!o)throw new Error("header name must be a non-empty string");const i=Zc.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=Lu(e))}const i=(e,t)=>Zc.forEach(e,((e,r)=>o(e,r,t)));if(Zc.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Zc.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&Tu[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(Zc.isHeaders(e))for(const[a,s]of e.entries())o(s,a,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=Pu(e)){const r=Zc.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Zc.isFunction(t))return t.call(this,e,r);if(Zc.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Pu(e)){const r=Zc.findKey(this,e);return!(!r||void 0===this[r]||t&&!Au(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=Pu(e)){const o=Zc.findKey(r,e);!o||t&&!Au(0,r[o],o,t)||(delete r[o],n=!0)}}return Zc.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!Au(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return Zc.forEach(this,((n,o)=>{const i=Zc.findKey(r,o);if(i)return t[i]=Lu(n),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();a!==o&&delete t[o],t[a]=Lu(n),r[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Zc.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Zc.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,r]=e;return t+": "+r})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[_u]=this[_u]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=Pu(e);t[n]||(!function(e,t){const r=Zc.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return Zc.isArray(e)?e.forEach(n):n(e),this}}Ru.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Zc.reduceDescriptors(Ru.prototype,((e,t)=>{let{value:r}=e,n=t[0].toUpperCase()+t.slice(1);return{get:()=>r,set(e){this[n]=e}}})),Zc.freezeMethods(Ru);const Ou=Ru;function zu(e,t){const r=this||Cu,n=t||r,o=Ou.from(n.headers);let i=n.data;return Zc.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Nu(e){return!(!e||!e.__CANCEL__)}function Du(e,t,r){nu.call(this,null==e?"canceled":e,nu.ERR_CANCELED,t,r),this.name="CanceledError"}Zc.inherits(Du,nu,{__CANCEL__:!0});const Iu=Du;function Mu(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new nu("Request failed with status code "+r.status,[nu.ERR_BAD_REQUEST,nu.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}const $u=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=n[a];o||(o=l),r[i]=s,n[i]=l;let u=a,d=0;for(;u!==i;)d+=r[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const p=c&&l-c;return p?Math.round(1e3*d/p):void 0}};const Fu=function(e,t){let r,n,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=i?a(l,e):(r=l,n||(n=setTimeout((()=>{n=null,a(r)}),i-t)))},()=>r&&a(r)]},Bu=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=0;const o=$u(50,250);return Fu((r=>{const i=r.loaded,a=r.lengthComputable?r.total:void 0,s=i-n,l=o(s);n=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),r)},Uu=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Vu=e=>function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Zc.asap((()=>e(...r)))},Wu=ju.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,ju.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(ju.origin),ju.navigator&&/(msie|trident)/i.test(ju.navigator.userAgent)):()=>!0,Hu=ju.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const a=[e+"="+encodeURIComponent(t)];Zc.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),Zc.isString(n)&&a.push("path="+n),Zc.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function qu(e,t,r){let n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Yu=e=>e instanceof Ou?{...e}:e;function Xu(e,t){t=t||{};const r={};function n(e,t,r,n){return Zc.isPlainObject(e)&&Zc.isPlainObject(t)?Zc.merge.call({caseless:n},e,t):Zc.isPlainObject(t)?Zc.merge({},t):Zc.isArray(t)?t.slice():t}function o(e,t,r,o){return Zc.isUndefined(t)?Zc.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function i(e,t){if(!Zc.isUndefined(t))return n(void 0,t)}function a(e,t){return Zc.isUndefined(t)?Zc.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,r)=>o(Yu(e),Yu(t),0,!0)};return Zc.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=l[n]||o,a=i(e[n],t[n],n);Zc.isUndefined(a)&&i!==s||(r[n]=a)})),r}const Ku=e=>{const t=Xu({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=Ou.from(s),t.url=fu(qu(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Zc.isFormData(n))if(ju.hasStandardBrowserEnv||ju.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(r=s.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(ju.hasStandardBrowserEnv&&(o&&Zc.isFunction(o)&&(o=o(t)),o||!1!==o&&Wu(t.url))){const e=i&&a&&Hu.read(a);e&&s.set(i,e)}return t},Gu="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=Ku(e);let o=n.data;const i=Ou.from(n.headers).normalize();let a,s,l,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:h}=n;function f(){c&&c(),u&&u(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const n=Ou.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Mu((function(e){t(e),f()}),(function(e){r(e),f()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(r(new nu("Request aborted",nu.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new nu("Network Error",nu.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||gu;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new nu(t,o.clarifyTimeoutError?nu.ETIMEDOUT:nu.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&Zc.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Zc.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),d&&"json"!==d&&(m.responseType=n.responseType),h&&([l,u]=Bu(h,!0),m.addEventListener("progress",l)),p&&m.upload&&([s,c]=Bu(p),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(a=t=>{m&&(r(!t||t.type?new Iu(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const v=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);v&&-1===ju.protocols.indexOf(v)?r(new nu("Unsupported protocol "+v+":",nu.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Qu=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof nu?t:new Iu(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new nu(`timeout ${t} of ms exceeded`,nu.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=n;return s.unsubscribe=()=>Zc.asap(a),s}},Ju=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},Zu=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},ed=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of Zu(e))yield*Ju(r,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return s(),void e.close();let i=n.byteLength;if(r){let e=a+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},td="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,rd=td&&"function"===typeof ReadableStream,nd=td&&("function"===typeof TextEncoder?(od=new TextEncoder,e=>od.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var od;const id=function(e){try{for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return!!e(...r)}catch(Uw){return!1}},ad=rd&&id((()=>{let e=!1;const t=new Request(ju.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),sd=rd&&id((()=>Zc.isReadableStream(new Response("").body))),ld={stream:sd&&(e=>e.body)};var cd;td&&(cd=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!ld[e]&&(ld[e]=Zc.isFunction(cd[e])?t=>t[e]():(t,r)=>{throw new nu(`Response type '${e}' is not supported`,nu.ERR_NOT_SUPPORT,r)})})));const ud=async(e,t)=>{const r=Zc.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(Zc.isBlob(e))return e.size;if(Zc.isSpecCompliantForm(e)){const t=new Request(ju.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Zc.isArrayBufferView(e)||Zc.isArrayBuffer(e)?e.byteLength:(Zc.isURLSearchParams(e)&&(e+=""),Zc.isString(e)?(await nd(e)).byteLength:void 0)})(t):r},dd=td&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=Ku(e);c=c?(c+"").toLowerCase():"text";let h,f=Qu([o,i&&i.toAbortSignal()],a);const m=f&&f.unsubscribe&&(()=>{f.unsubscribe()});let g;try{if(l&&ad&&"get"!==r&&"head"!==r&&0!==(g=await ud(u,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(Zc.isFormData(n)&&(e=r.headers.get("content-type"))&&u.setContentType(e),r.body){const[e,t]=Uu(g,Bu(Vu(l)));n=ed(r.body,65536,e,t)}}Zc.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;h=new Request(t,{...p,signal:f,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:o?d:void 0});let i=await fetch(h);const a=sd&&("stream"===c||"response"===c);if(sd&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=Zc.toFiniteNumber(i.headers.get("content-length")),[r,n]=s&&Uu(t,Bu(Vu(s),!0))||[];i=new Response(ed(i.body,65536,r,(()=>{n&&n(),m&&m()})),e)}c=c||"text";let v=await ld[Zc.findKey(ld,c)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,r)=>{Mu(t,r,{data:v,headers:Ou.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:h})}))}catch(v){if(m&&m(),v&&"TypeError"===v.name&&/fetch/i.test(v.message))throw Object.assign(new nu("Network Error",nu.ERR_NETWORK,e,h),{cause:v.cause||v});throw nu.from(v,v&&v.code,e,h)}}),pd={http:null,xhr:Gu,fetch:dd};Zc.forEach(pd,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(Uw){}Object.defineProperty(e,"adapterName",{value:t})}}));const hd=e=>`- ${e}`,fd=e=>Zc.isFunction(e)||null===e||!1===e,md=e=>{e=Zc.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){let t;if(r=e[i],n=r,!fd(r)&&(n=pd[(t=String(r)).toLowerCase()],void 0===n))throw new nu(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+i]=n}if(!n){const e=Object.entries(o).map((e=>{let[t,r]=e;return`adapter ${t} `+(!1===r?"is not supported by the environment":"is not available in the build")}));let r=t?e.length>1?"since :\n"+e.map(hd).join("\n"):" "+hd(e[0]):"as no adapter specified";throw new nu("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n};function gd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Iu(null,e)}function vd(e){gd(e),e.headers=Ou.from(e.headers),e.data=zu.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return md(e.adapter||Cu.adapter)(e).then((function(t){return gd(e),t.data=zu.call(e,e.transformResponse,t),t.headers=Ou.from(t.headers),t}),(function(t){return Nu(t)||(gd(e),t&&t.response&&(t.response.data=zu.call(e,e.transformResponse,t.response),t.response.headers=Ou.from(t.response.headers))),Promise.reject(t)}))}const yd="1.8.4",xd={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{xd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const bd={};xd.transitional=function(e,t,r){function n(e,t){return"[Axios v1.8.4] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new nu(n(o," has been removed"+(t?" in "+t:"")),nu.ERR_DEPRECATED);return t&&!bd[o]&&(bd[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}},xd.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const wd={assertOptions:function(e,t,r){if("object"!==typeof e)throw new nu("options must be an object",nu.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const t=e[i],r=void 0===t||a(t,i,e);if(!0!==r)throw new nu("option "+i+" must be "+r,nu.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new nu("Unknown option "+i,nu.ERR_BAD_OPTION)}},validators:xd},kd=wd.validators;class jd{constructor(e){this.defaults=e,this.interceptors={request:new mu,response:new mu}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(Uw){}}throw r}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Xu(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&wd.assertOptions(r,{silentJSONParsing:kd.transitional(kd.boolean),forcedJSONParsing:kd.transitional(kd.boolean),clarifyTimeoutError:kd.transitional(kd.boolean)},!1),null!=n&&(Zc.isFunction(n)?t.paramsSerializer={serialize:n}:wd.assertOptions(n,{encode:kd.function,serialize:kd.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),wd.assertOptions(t,{baseUrl:kd.spelling("baseURL"),withXsrfToken:kd.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Zc.merge(o.common,o[t.method]);o&&Zc.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ou.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!s){const e=[vd.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let p=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{p=e(p)}catch(h){t.call(this,h);break}}try{c=vd.call(this,p)}catch(h){return Promise.reject(h)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return fu(qu((e=Xu(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Zc.forEach(["delete","get","head","options"],(function(e){jd.prototype[e]=function(t,r){return this.request(Xu(r||{},{method:e,url:t,data:(r||{}).data}))}})),Zc.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Xu(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}jd.prototype[e]=t(),jd.prototype[e+"Form"]=t(!0)}));const Sd=jd;class Ed{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new Iu(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Ed((function(t){e=t})),cancel:e}}}const Cd=Ed;const Td={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Td).forEach((e=>{let[t,r]=e;Td[r]=t}));const _d=Td;const Pd=function e(t){const r=new Sd(t),n=gc(Sd.prototype.request,r);return Zc.extend(n,Sd.prototype,r,{allOwnKeys:!0}),Zc.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Xu(t,r))},n}(Cu);Pd.Axios=Sd,Pd.CanceledError=Iu,Pd.CancelToken=Cd,Pd.isCancel=Nu,Pd.VERSION=yd,Pd.toFormData=lu,Pd.AxiosError=nu,Pd.Cancel=Pd.CanceledError,Pd.all=function(e){return Promise.all(e)},Pd.spread=function(e){return function(t){return e.apply(null,t)}},Pd.isAxiosError=function(e){return Zc.isObject(e)&&!0===e.isAxiosError},Pd.mergeConfig=Xu,Pd.AxiosHeaders=Ou,Pd.formToJSON=e=>Su(Zc.isHTMLForm(e)?new FormData(e):e),Pd.getAdapter=md,Pd.HttpStatusCode=_d,Pd.default=Pd;const Ld=Pd,Ad=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;try{if(!e||void 0===t)throw new Error("Invalid cookie parameters");const n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);const o=`${e}=${encodeURIComponent(t)};expires=${n.toUTCString()};path=/;SameSite=Strict;Secure`;if(document.cookie=o,!Rd(e))throw new Error("Failed to set cookie")}catch(n){throw console.error("Error setting cookie:",n),n}},Rd=e=>{try{if(!e)throw new Error("Cookie name is required");const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const n=t[r].split("=");if(n[0].trim()===e)return decodeURIComponent(n[1])}return null}catch(t){return console.error("Error getting cookie:",t),null}},Od=e=>{try{if(!e)throw new Error("Cookie name is required");if(document.cookie=`${e}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Strict;Secure`,Rd(e))throw new Error("Failed to remove cookie")}catch(t){throw console.error("Error removing cookie:",t),t}},zd="admin_session",Nd="admin_token",Dd="admin_user",Id=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{if(!e||!t)throw new Error("Invalid session data");const n=t.replace("Bearer ",""),o=r?30:7;Ad(Nd,n,o),Ad(Dd,JSON.stringify(e),o);const i={createdAt:(new Date).getTime(),expiryDays:o,remember:r};return Ad(zd,JSON.stringify(i),o),localStorage.setItem(Nd,n),localStorage.setItem(Dd,JSON.stringify(e)),localStorage.setItem(zd,JSON.stringify(i)),{userData:e,token:n,session:i}}catch(n){return console.error("Error saving session:",n),$d(),null}},Md=()=>{try{let e=Rd(Nd),t=Rd(Dd),r=Rd(zd);if(e||(e=localStorage.getItem(Nd)),t||(t=localStorage.getItem(Dd)),r||(r=localStorage.getItem(zd)),!e||!t||!r)return null;const n=JSON.parse(t),o=JSON.parse(r),i=(new Date).getTime();return i>o.createdAt+24*o.expiryDays*60*60*1e3?($d(),null):{userData:n,token:e,session:o}}catch(e){return console.error("Error parsing session data:",e),$d(),null}},$d=()=>{try{Od(Nd),Od(Dd),Od(zd),localStorage.removeItem(Nd),localStorage.removeItem(Dd),localStorage.removeItem(zd)}catch(e){console.error("Error clearing session:",e)}},Fd=()=>null!==Md(),Bd=()=>{try{const e=Md();if(e){const{userData:t,token:r,session:n}=e;return n.createdAt=(new Date).getTime(),Id(t,r,n.remember)}return null}catch(e){return console.error("Error refreshing session:",e),null}};var Ud=r(579);Ld.defaults.baseURL="http://localhost:5001",Ld.interceptors.request.use((e=>{const t=Md();return null!==t&&void 0!==t&&t.token&&(e.headers.Authorization=`Bearer ${t.token}`),e}),(e=>Promise.reject(e))),Ld.interceptors.response.use((e=>e),(e=>{var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&($d(),window.location.href="/admin/login"),Promise.reject(e)}));const Vd=(0,n.createContext)(null),Wd=e=>{let{children:t}=e;const[r,o]=(0,n.useState)(null),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null),[c,u]=(0,n.useState)(null);(0,n.useEffect)((()=>{const e=Md();e&&(o(e.userData),d(e.token)),a(!1)}),[]),(0,n.useEffect)((()=>()=>{c&&clearTimeout(c)}),[c]);const d=e=>{const t=setTimeout((()=>{Fd()&&(p(e),Bd(),d(e))}),9e5);u(t)},p=async e=>{try{const e=await Ld.get("/api/auth/me");return o(e.data),e.data}catch(s){return console.error("Auth check failed:",s),h(),null}},h=()=>{$d(),o(null),c&&(clearTimeout(c),u(null))},f={user:r,loading:i,error:s,login:async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{l(null);const n=await Ld.post("/api/auth/login",{email:e,password:t}),{user:i,token:a}=n.data;return Id(i,a,r),o(i),d(a),{user:i,token:a}}catch(s){var n,i;throw console.error("Login error:",s),l((null===(n=s.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.message)||"Login failed"),s}},logout:h,isAuthenticated:()=>null!==r&&Fd(),checkAuth:p};return(0,Ud.jsx)(Vd.Provider,{value:f,children:t})},Hd=()=>{const e=(0,n.useContext)(Vd);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},qd=dr(hc.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Yd=dr(hc.div)`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background: ${e=>"success"===e.type?e.theme.colors.success:e.theme.colors.error};
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 300px;
  max-width: 400px;
`,Xd=dr.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`,Kd=n.createContext(null),Gd=()=>{const e=n.useContext(Kd);if(!e)throw new Error("useToast must be used within a ToastProvider");return e},Qd=e=>{let{children:t}=e;const[r,o]=n.useState([]);return(0,Ud.jsxs)(Kd.Provider,{value:{addToast:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";const r=Date.now();o((n=>[...n,{id:r,message:e,type:t}])),setTimeout((()=>{o((e=>e.filter((e=>e.id!==r))))}),5e3)}},children:[t,(0,Ud.jsx)(qd,{children:(0,Ud.jsx)(Rr,{children:r.map((e=>(0,Ud.jsxs)(Yd,{type:e.type,initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},transition:{duration:.2},children:[(0,Ud.jsx)(Xd,{children:"success"===e.type?(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}):(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.message]},e.id)))})})]})},Jd=dr(hc.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  width: 360px;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,Zd=dr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,ep=dr.div`
  color: ${e=>e.theme.colors.primary};
  margin-right: 0.8rem;
  
  svg {
    width: 24px;
    height: 24px;
  }
`,tp=dr.h3`
  font-size: 1.1rem;
  margin: 0;
  color: ${e=>e.theme.colors.text};
`,rp=dr.p`
  font-size: 0.95rem;
  margin: 0 0 1.25rem;
  color: ${e=>e.theme.colors.gray};
  line-height: 1.5;
`,np=dr.div`
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
  color: ${e=>e.theme.colors.text};
  
  span {
    color: ${e=>e.theme.colors.primary};
    font-weight: 600;
  }
`,op=dr.div`
  display: flex;
  gap: 0.75rem;
`,ip=dr(hc.button)`
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  border: none;
  
  &:focus {
    outline: none;
  }
`,ap=dr(ip)`
  background: ${e=>e.theme.colors.primary};
  color: white;
  
  &:hover {
    background: ${e=>e.theme.colors.secondary};
  }
`,sp=dr(ip)`
  background: rgba(255, 255, 255, 0.1);
  color: ${e=>e.theme.colors.text};
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,lp=()=>{const{logout:e,isAuthenticated:t}=Hd(),r=Z(),[o,i]=(0,n.useState)(!1),[a,s]=(0,n.useState)(60),[l,c]=(0,n.useState)(Date.now()),u=(0,n.useCallback)((()=>{c(Date.now()),o&&d()}),[o]);(0,n.useEffect)((()=>{if(!t())return;const e=["mousedown","mousemove","keydown","scroll","touchstart","click"];return e.forEach((e=>window.addEventListener(e,u))),()=>{e.forEach((e=>window.removeEventListener(e,u)))}}),[u,t]),(0,n.useEffect)((()=>{if(!t())return;const e=setInterval((()=>{Date.now()-l>=174e4&&i(!0)}),6e4);return()=>clearInterval(e)}),[l,t]),(0,n.useEffect)((()=>{if(!o)return;const e=setInterval((()=>{s((t=>t<=1?(clearInterval(e),p(),0):t-1))}),1e3);return()=>clearInterval(e)}),[o]);const d=()=>{Bd(),i(!1),s(60),c(Date.now())},p=()=>{e(),r("/admin/login")};return t()?(0,Ud.jsx)(Rr,{children:o&&(0,Ud.jsxs)(Jd,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:{duration:.3},children:[(0,Ud.jsxs)(Zd,{children:[(0,Ud.jsx)(ep,{children:(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,Ud.jsx)(tp,{children:"Session Timeout Warning"})]}),(0,Ud.jsx)(rp,{children:"Your session is about to expire due to inactivity. You will be automatically logged out if you take no action."}),(0,Ud.jsxs)(np,{children:["Time remaining: ",(0,Ud.jsx)("span",{children:a})," seconds"]}),(0,Ud.jsxs)(op,{children:[(0,Ud.jsx)(ap,{onClick:d,whileHover:{scale:1.03},whileTap:{scale:.98},children:"Stay Logged In"}),(0,Ud.jsx)(sp,{onClick:p,whileHover:{scale:1.03},whileTap:{scale:.98},children:"Logout Now"})]})]})}):null};function cp(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=cp(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const up=function(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=cp(e))&&(n&&(n+=" "),n+=t);return n};!function(e){if(!e||"undefined"==typeof document)return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n');var dp=e=>"number"==typeof e&&!isNaN(e),pp=e=>"string"==typeof e,hp=e=>"function"==typeof e,fp=e=>pp(e)||hp(e)?e:null,mp=(e,t)=>!1===e||dp(e)&&e>0?e:t,gp=e=>(0,n.isValidElement)(e)||pp(e)||hp(e)||dp(e);function vp(e){let{enter:t,exit:r,appendPosition:o=!1,collapse:i=!0,collapseDuration:a=300}=e;return function(e){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p,playToast:h}=e,f=o?`${t}--${l}`:t,m=o?`${r}--${l}`:r,g=(0,n.useRef)(0);return(0,n.useLayoutEffect)((()=>{let e=d.current,t=f.split(" "),r=n=>{n.target===d.current&&(h(),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,n.useEffect)((()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,{scrollHeight:n,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)}))}))}(e,u,a):u()};p||(c?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))}),[p]),n.createElement(n.Fragment,null,s)}}function yp(e,t){return{content:xp(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function xp(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,n.isValidElement)(e)&&!pp(e.type)?(0,n.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:r}):hp(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:r}):e}function bp(e){let{delay:t,isRunning:r,closeToast:o,type:i="default",hide:a,className:s,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:p}=e,h=a||l&&0===c,f={animationDuration:`${t}ms`,animationPlayState:r?"running":"paused"};l&&(f.transform=`scaleX(${c})`);let m=up("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),g=hp(s)?s({rtl:u,type:i,defaultClassName:m}):up(m,s),v={[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&o()}};return n.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":h},n.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${i}`}),n.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:g,style:f,...v}))}var wp=1,kp=()=>""+wp++;function jp(e,t,r){let n=1,o=0,i=[],a=[],s=t,l=new Map,c=new Set,u=()=>{a=Array.from(l.values()),c.forEach((e=>e()))},d=e=>{var t,r;null==(r=null==(t=e.props)?void 0:t.onClose)||r.call(t,e.removalReason),e.isActive=!1},p=e=>{if(null==e)l.forEach(d);else{let t=l.get(e);t&&d(t)}u()},h=e=>{var t,n;let{toastId:o,updateId:i}=e.props,a=null==i;e.staleId&&l.delete(e.staleId),e.isActive=!0,l.set(o,e),u(),r(yp(e,a?"added":"updated")),a&&(null==(n=(t=e.props).onOpen)||n.call(t))};return{id:e,props:s,observe:e=>(c.add(e),()=>c.delete(e)),toggle:(e,t)=>{l.forEach((r=>{var n;(null==t||t===r.props.toastId)&&(null==(n=r.toggle)||n.call(r,e))}))},removeToast:p,toasts:l,clearQueue:()=>{o-=i.length,i=[]},buildToast:(t,a)=>{if((t=>{let{containerId:r,toastId:n,updateId:o}=t,i=r?r!==e:1!==e,a=l.has(n)&&null==o;return i||a})(a))return;let{toastId:c,updateId:d,data:f,staleId:m,delay:g}=a,v=null==d;v&&o++;let y={...s,style:s.toastStyle,key:n++,...Object.fromEntries(Object.entries(a).filter((e=>{let[t,r]=e;return null!=r}))),toastId:c,updateId:d,data:f,isIn:!1,className:fp(a.className||s.toastClassName),progressClassName:fp(a.progressClassName||s.progressClassName),autoClose:!a.isLoading&&mp(a.autoClose,s.autoClose),closeToast(e){l.get(c).removalReason=e,p(c)},deleteToast(){let e=l.get(c);if(null!=e){if(r(yp(e,"removed")),l.delete(c),o--,o<0&&(o=0),i.length>0)return void h(i.shift());u()}}};y.closeButton=s.closeButton,!1===a.closeButton||gp(a.closeButton)?y.closeButton=a.closeButton:!0===a.closeButton&&(y.closeButton=!gp(s.closeButton)||s.closeButton);let x={content:t,props:y,staleId:m};s.limit&&s.limit>0&&o>s.limit&&v?i.push(x):dp(g)?setTimeout((()=>{h(x)}),g):h(x)},setProps(e){s=e},setToggle:(e,t)=>{let r=l.get(e);r&&(r.toggle=t)},isToastActive:e=>{var t;return null==(t=l.get(e))?void 0:t.isActive},getSnapshot:()=>a}}var Sp=new Map,Ep=[],Cp=new Set,Tp=e=>Cp.forEach((t=>t(e))),_p=()=>Sp.size>0;function Pp(e,t){var r;if(t)return!(null==(r=Sp.get(t))||!r.isToastActive(e));let n=!1;return Sp.forEach((t=>{t.isToastActive(e)&&(n=!0)})),n}function Lp(e){if(_p()){if(null==e||(e=>pp(e)||dp(e))(e))Sp.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){let t=Sp.get(e.containerId);t?t.removeToast(e.id):Sp.forEach((t=>{t.removeToast(e.id)}))}}else Ep=Ep.filter((t=>null!=e&&t.options.toastId!==e))}function Ap(e,t){gp(e)&&(_p()||Ep.push({content:e,options:t}),Sp.forEach((r=>{r.buildToast(e,t)})))}function Rp(e,t){Sp.forEach((r=>{(null==t||null==t||!t.containerId||(null==t?void 0:t.containerId)===r.id)&&r.toggle(e,null==t?void 0:t.id)}))}function Op(e){let t=e.containerId||1;return{subscribe(r){let n=jp(t,e,Tp);Sp.set(t,n);let o=n.observe(r);return Ep.forEach((e=>Ap(e.content,e.options))),Ep=[],()=>{o(),Sp.delete(t)}},setProps(e){var r;null==(r=Sp.get(t))||r.setProps(e)},getSnapshot(){var e;return null==(e=Sp.get(t))?void 0:e.getSnapshot()}}}function zp(e){return e&&(pp(e.toastId)||dp(e.toastId))?e.toastId:kp()}function Np(e,t){return Ap(e,t),t.toastId}function Dp(e,t){return{...t,type:t&&t.type||e,toastId:zp(t)}}function Ip(e){return(t,r)=>Np(t,Dp(e,r))}function Mp(e,t){return Np(e,Dp("default",t))}function $p(e){let[t,r]=(0,n.useState)(!1),[o,i]=(0,n.useState)(!1),a=(0,n.useRef)(null),s=(0,n.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:p}=e;function h(){r(!0)}function f(){r(!1)}function m(r){let n=a.current;if(s.canDrag&&n){s.didMove=!0,t&&f(),"x"===e.draggableDirection?s.delta=r.clientX-s.start:s.delta=r.clientY-s.start,s.start!==r.clientX&&(s.canCloseOnClick=!1);let o="x"===e.draggableDirection?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`;n.style.transform=`translate3d(${o},0)`,n.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance))}}function g(){document.removeEventListener("pointermove",m),document.removeEventListener("pointerup",g);let t=a.current;if(s.canDrag&&s.didMove&&t){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),e.closeToast(!0),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}(function(e){var t;null==(t=Sp.get(e.containerId||1))||t.setToggle(e.id,e.fn)})({id:e.toastId,containerId:e.containerId,fn:r}),(0,n.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||f(),window.addEventListener("focus",h),window.addEventListener("blur",f),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",f)}}),[e.pauseOnFocusLoss]);let v={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){s.didMove=!1,document.addEventListener("pointermove",m),document.addEventListener("pointerup",g);let r=a.current;s.canCloseOnClick=!0,s.canDrag=!0,r.style.transition="none","x"===e.draggableDirection?(s.start=t.clientX,s.removalDistance=r.offsetWidth*(e.draggablePercent/100)):(s.start=t.clientY,s.removalDistance=r.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:r,bottom:n,left:o,right:i}=a.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=o&&t.clientX<=i&&t.clientY>=r&&t.clientY<=n?f():h()}};return l&&c&&(v.onMouseEnter=f,e.stacked||(v.onMouseLeave=h)),p&&(v.onClick=e=>{d&&d(e),s.canCloseOnClick&&u(!0)}),{playToast:h,pauseToast:f,isRunning:t,preventExitTransition:o,toastRef:a,eventHandlers:v}}Mp.loading=(e,t)=>Np(e,Dp("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Mp.promise=function(e,t,r){let n,{pending:o,error:i,success:a}=t;o&&(n=pp(o)?Mp.loading(o,r):Mp.loading(o.render,{...r,...o}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void Mp.dismiss(n);let i={type:e,...s,...r,data:o},a=pp(t)?{render:t}:t;return n?Mp.update(n,{...i,...a}):Mp(a.render,{...i,...a}),o},c=hp(e)?e():e;return c.then((e=>l("success",a,e))).catch((e=>l("error",i,e))),c},Mp.success=Ip("success"),Mp.info=Ip("info"),Mp.error=Ip("error"),Mp.warning=Ip("warning"),Mp.warn=Mp.warning,Mp.dark=(e,t)=>Np(e,Dp("default",{theme:"dark",...t})),Mp.dismiss=function(e){Lp(e)},Mp.clearWaitingQueue=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Sp.forEach((t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()}))},Mp.isActive=Pp,Mp.update=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=((e,t)=>{let{containerId:r}=t;var n;return null==(n=Sp.get(r||1))?void 0:n.toasts.get(e)})(e,t);if(r){let{props:n,content:o}=r,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:kp()};i.toastId!==e&&(i.staleId=e);let a=i.render||o;delete i.render,Np(a,i)}},Mp.done=e=>{Mp.update(e,{progress:1})},Mp.onChange=function(e){return Cp.add(e),()=>{Cp.delete(e)}},Mp.play=e=>Rp(!0,e),Mp.pause=e=>Rp(!1,e);var Fp="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,Bp=e=>{let{theme:t,type:r,isLoading:o,...i}=e;return n.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...i})};var Up={info:function(e){return n.createElement(Bp,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return n.createElement(Bp,{...e},n.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return n.createElement(Bp,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return n.createElement(Bp,{...e},n.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return n.createElement("div",{className:"Toastify__spinner"})}};function Vp(e){let{theme:t,type:r,isLoading:o,icon:i}=e,a=null,s={theme:t,type:r};return!1===i||(hp(i)?a=i({...s,isLoading:o}):(0,n.isValidElement)(i)?a=(0,n.cloneElement)(i,s):o?a=Up.spinner():(e=>e in Up)(r)&&(a=Up[r](s))),a}var Wp=e=>{let{isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:i,playToast:a}=$p(e),{closeButton:s,children:l,autoClose:c,onClick:u,type:d,hideProgressBar:p,closeToast:h,transition:f,position:m,className:g,style:v,progressClassName:y,updateId:x,role:b,progress:w,rtl:k,toastId:j,deleteToast:S,isIn:E,isLoading:C,closeOnClick:T,theme:_,ariaLabel:P}=e,L=up("Toastify__toast",`Toastify__toast-theme--${_}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":T}),A=hp(g)?g({rtl:k,position:m,type:d,defaultClassName:L}):up(L,g),R=Vp(e),O=!!w||!c,z={closeToast:h,type:d,theme:_},N=null;return!1===s||(N=hp(s)?s(z):(0,n.isValidElement)(s)?(0,n.cloneElement)(s,z):function(e){let{closeToast:t,theme:r,ariaLabel:o="close"}=e;return n.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(!0)},"aria-label":o},n.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),n.createElement(f,{isIn:E,done:S,position:m,preventExitTransition:r,nodeRef:o,playToast:a},n.createElement("div",{id:j,tabIndex:0,onClick:u,"data-in":E,className:A,...i,style:v,ref:o,...E&&{role:b,"aria-label":P}},null!=R&&n.createElement("div",{className:up("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!C})},R),xp(l,e,!t),N,!e.customProgressBar&&n.createElement(bp,{...x&&!O?{key:`p-${x}`}:{},rtl:k,theme:_,delay:c,isRunning:t,isIn:E,closeToast:h,hide:p,type:d,className:y,controlledProgress:O,progress:w||0})))},Hp=function(e){return{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}},qp=vp(Hp("bounce",!0)),Yp=(vp(Hp("slide",!0)),vp(Hp("zoom")),vp(Hp("flip")),{position:"top-right",transition:qp,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&"KeyT"===e.code});function Xp(e){let t={...Yp,...e},r=e.stacked,[o,i]=(0,n.useState)(!0),a=(0,n.useRef)(null),{getToastToRender:s,isToastActive:l,count:c}=function(e){var t;let{subscribe:r,getSnapshot:o,setProps:i}=(0,n.useRef)(Op(e)).current;i(e);let a=null==(t=(0,n.useSyncExternalStore)(r,o,o))?void 0:t.slice();return{getToastToRender:function(t){if(!a)return[];let r=new Map;return e.newestOnTop&&a.reverse(),a.forEach((e=>{let{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)})),Array.from(r,(e=>t(e[0],e[1])))},isToastActive:Pp,count:null==a?void 0:a.length}}(t),{className:u,style:d,rtl:p,containerId:h,hotKeys:f}=t;function m(e){let t=up("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":p});return hp(u)?u({position:e,rtl:p,defaultClassName:t}):up(t,fp(u))}function g(){r&&(i(!0),Mp.play())}return Fp((()=>{var e;if(r){let r=a.current.querySelectorAll('[data-in="true"]'),n=12,i=null==(e=t.position)?void 0:e.includes("top"),s=0,l=0;Array.from(r).reverse().forEach(((e,t)=>{let r=e;r.classList.add("Toastify__toast--stacked"),t>0&&(r.dataset.collapsed=`${o}`),r.dataset.pos||(r.dataset.pos=i?"top":"bot");let a=s*(o?.2:1)+(o?0:n*t);r.style.setProperty("--y",`${i?a:-1*a}px`),r.style.setProperty("--g",`${n}`),r.style.setProperty("--s",""+(1-(o?l:0))),s+=r.offsetHeight,l+=.025}))}}),[o,c,r]),(0,n.useEffect)((()=>{function e(e){var t;let r=a.current;f(e)&&(null==(t=r.querySelector('[tabIndex="0"]'))||t.focus(),i(!1),Mp.pause()),"Escape"===e.key&&(document.activeElement===r||null!=r&&r.contains(document.activeElement))&&(i(!0),Mp.play())}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[f]),n.createElement("section",{ref:a,className:"Toastify",id:h,onMouseEnter:()=>{r&&(i(!1),Mp.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},s(((e,t)=>{let o=t.length?{...d}:{...d,pointerEvents:"none"};return n.createElement("div",{tabIndex:-1,className:m(e),"data-stacked":r,style:o,key:`c-${e}`},t.map((e=>{let{content:t,props:o}=e;return n.createElement(Wp,{...o,stacked:r,collapseAll:g,isIn:l(o.toastId,o.containerId),key:`t-${o.key}`},t)})))})))}const Kp=()=>{const[e,t]=(0,n.useState)(!1),[r,o]=(0,n.useState)(!1),i=Q();(0,n.useEffect)((()=>{const e=()=>{window.scrollY>50?t(!0):t(!1)};return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}),[]),(0,n.useEffect)((()=>(document.body.style.overflow=r?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[r]),(0,n.useEffect)((()=>{o(!1)}),[i]);const a=e=>i.pathname===e?"text-primary-400 font-medium":"text-gray-300 hover:text-primary-400",s=[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/services",label:"Services"},{path:"/projects",label:"Projects"},{path:"/blog",label:"Blog"},{path:"/contact",label:"Contact"}];return(0,Ud.jsxs)(Ud.Fragment,{children:[(0,Ud.jsx)(Rr,{children:r&&(0,Ud.jsx)(hc.div,{className:"fixed inset-0 backdrop-blur-sm z-40 md:hidden",initial:"hidden",animate:"visible",exit:"hidden",variants:{hidden:{opacity:0},visible:{opacity:1}},onClick:()=>o(!1)})}),(0,Ud.jsxs)(hc.nav,{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 "+(e?"backdrop-blur-md shadow-sm":""),initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:100,damping:15},children:[(0,Ud.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,Ud.jsxs)("div",{className:"flex justify-between items-center py-4 md:justify-start md:space-x-10",children:[(0,Ud.jsx)(hc.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,Ud.jsxs)(Pe,{to:"/",className:"flex items-center text-2xl font-bold text-white font-heading hoverable",children:["TECHVEDA",(0,Ud.jsx)("span",{className:"text-primary-500",children:"."})]})}),(0,Ud.jsx)("div",{className:"hidden md:flex items-center space-x-8",children:s.map((e=>(0,Ud.jsx)(hc.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,Ud.jsx)(Pe,{to:e.path,className:`${a(e.path)} transition-colors duration-200 text-sm font-medium hoverable`,children:e.label})},e.path)))}),(0,Ud.jsx)(hc.button,{onClick:()=>{o(!r)},"aria-label":r?"Close menu":"Open menu",className:"md:hidden flex items-center hoverable z-50",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,Ud.jsxs)("div",{className:"w-6 h-6 flex flex-col justify-between items-center relative",children:[(0,Ud.jsx)(hc.span,{className:"w-full h-0.5 bg-gray-100",animate:{rotate:r?45:0,y:r?10:0},transition:{duration:.3}}),(0,Ud.jsx)(hc.span,{className:"w-full h-0.5 bg-gray-100",animate:{opacity:r?0:1},transition:{duration:.3}}),(0,Ud.jsx)(hc.span,{className:"w-full h-0.5 bg-gray-100",animate:{rotate:r?-45:0,y:r?-10:0},transition:{duration:.3}})]})})]})}),(0,Ud.jsx)(Rr,{children:r&&(0,Ud.jsx)(hc.div,{className:"md:hidden overflow-hidden z-50 backdrop-blur-md",initial:"hidden",animate:"visible",exit:"hidden",variants:{hidden:{opacity:0,height:0,transition:{duration:.3,ease:"easeInOut"}},visible:{opacity:1,height:"auto",transition:{duration:.3,ease:"easeInOut"}}},children:(0,Ud.jsx)("div",{className:"px-4 pt-2 pb-6 space-y-6",children:(0,Ud.jsx)("div",{className:"grid grid-cols-1 gap-y-6",children:s.map((e=>(0,Ud.jsx)(hc.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,Ud.jsx)(Pe,{to:e.path,className:`${a(e.path)} text-lg font-medium block text-center py-2 hoverable`,onClick:()=>o(!1),children:e.label})},e.path)))})})})})]})]})},Gp=()=>{const e=(new Date).getFullYear();return(0,Ud.jsx)("footer",{className:"text-gray-300",children:(0,Ud.jsxs)("div",{className:"container mx-auto py-12 px-4 sm:px-6",children:[(0,Ud.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,Ud.jsxs)("div",{className:"col-span-1 md:col-span-1",children:[(0,Ud.jsxs)(Pe,{to:"/",className:"text-2xl font-bold text-white font-heading hoverable",children:["TECHVEDA",(0,Ud.jsx)("span",{className:"text-primary-500",children:"."})]}),(0,Ud.jsx)("p",{className:"mt-4 text-sm font-body",children:"Building innovative web applications and digital solutions that transform ideas into reality."}),(0,Ud.jsxs)("div",{className:"mt-6 flex space-x-4",children:[(0,Ud.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable","aria-label":"GitHub",children:(0,Ud.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,Ud.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z"})})}),(0,Ud.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable","aria-label":"Twitter",children:(0,Ud.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,Ud.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.002 10.002 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"})})}),(0,Ud.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable","aria-label":"LinkedIn",children:(0,Ud.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,Ud.jsx)("path",{d:"M19.996 0A4.004 4.004 0 0 1 24 4.004v15.992A4.004 4.004 0 0 1 19.996 24H4.004A4.004 4.004 0 0 1 0 19.996V4.004A4.004 4.004 0 0 1 4.004 0h15.992zM8.5 8.5H5.9v9.6h2.6V8.5zm.15-2.6A1.45 1.45 0 0 0 7.2 7.4c0 .8.65 1.45 1.45 1.45.8 0 1.45-.65 1.45-1.45 0-.8-.65-1.45-1.45-1.45zm10.35 5.7c0-2.25-1.75-3.8-3.85-3.8-1.2 0-2.55.55-3.15 1.55v-1.4h-2.6v9.6h2.6v-5.1c0-1.1.55-2.2 1.95-2.2 1.2 0 1.65 1.1 1.65 2.25v5.05h2.6V11.6h.8z"})})}),(0,Ud.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable","aria-label":"Instagram",children:(0,Ud.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,Ud.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2c-2.714 0-3.055.013-4.123.06-1.064.05-1.791.218-2.428.465a4.896 4.896 0 00-1.77 1.153A4.902 4.902 0 002.525 5.45c-.247.637-.416 1.363-.465 2.428C2.013 8.945 2 9.286 2 12c0 2.714.013 3.055.06 4.123.05 1.064.218 1.791.465 2.428a4.91 4.91 0 001.153 1.77c.5.5 1.038.908 1.77 1.153.637.247 1.363.416 2.428.465 1.068.047 1.41.06 4.123.06 2.714 0 3.055-.013 4.123-.06 1.064-.05 1.791-.218 2.428-.465a4.895 4.895 0 001.77-1.153 4.902 4.902 0 001.153-1.77c.247-.637.416-1.363.465-2.428.047-1.068.06-1.41.06-4.123 0-2.714-.013-3.055-.06-4.123-.05-1.064-.218-1.791-.465-2.428a4.91 4.91 0 00-1.153-1.77c-.5-.5-1.038-.908-1.77-1.153-.637-.247-1.363-.416-2.428-.465C15.055 2.013 14.714 2 12 2zm0 1.8c2.67 0 2.985.01 4.04.057.975.045 1.505.208 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.136.353.3.883.344 1.857.047 1.056.057 1.371.057 4.041 0 2.67-.01 2.985-.057 4.04-.045.975-.208 1.505-.344 1.858-.182.467-.399.8-.748 1.15-.35.35-.683.566-1.15.748-.353.136-.883.3-1.857.344-1.056.047-1.371.057-4.041.057-2.67 0-2.985-.01-4.04-.057-.975-.045-1.505-.208-1.858-.344-.467-.182-.8-.399-1.15-.748-.35-.35-.566-.683-.748-1.15-.136-.353-.3-.883-.344-1.857-.047-1.056-.057-1.371-.057-4.041 0-2.67.01-2.985.057-4.04.045-.975.208-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.136.883-.3 1.857-.344 1.056-.047 1.371-.057 4.041-.057zm0 3.064a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.47a3.334 3.334 0 110-6.668 3.334 3.334 0 010 6.667zm6.538-8.674a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"})})})]})]}),(0,Ud.jsxs)("div",{className:"col-span-1",children:[(0,Ud.jsx)("h3",{className:"text-lg font-semibold text-white mb-4 font-heading",children:"Quick Links"}),(0,Ud.jsxs)("ul",{className:"space-y-2 font-body",children:[(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Home"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/about",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"About"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Services"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/projects",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Projects"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/blog",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Blog"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/contact",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Contact"})})]})]}),(0,Ud.jsxs)("div",{className:"col-span-1",children:[(0,Ud.jsx)("h3",{className:"text-lg font-semibold text-white mb-4 font-heading",children:"Services"}),(0,Ud.jsxs)("ul",{className:"space-y-2 font-body",children:[(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Web Development"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"UI/UX Design"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Mobile Development"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"E-commerce"})}),(0,Ud.jsx)("li",{children:(0,Ud.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Digital Marketing"})})]})]}),(0,Ud.jsxs)("div",{className:"col-span-1",children:[(0,Ud.jsx)("h3",{className:"text-lg font-semibold text-white mb-4 font-heading",children:"Contact Us"}),(0,Ud.jsxs)("ul",{className:"space-y-3 font-body",children:[(0,Ud.jsxs)("li",{className:"flex items-start",children:[(0,Ud.jsxs)("svg",{className:"h-6 w-6 text-primary-400 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),(0,Ud.jsx)("span",{children:"Bardoli, Gujarat, India"})]}),(0,Ud.jsxs)("li",{className:"flex items-start",children:[(0,Ud.jsx)("svg",{className:"h-6 w-6 text-primary-400 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),(0,Ud.jsx)("span",{children:"info@techveda.com"})]}),(0,Ud.jsxs)("li",{className:"flex items-start",children:[(0,Ud.jsx)("svg",{className:"h-6 w-6 text-primary-400 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),(0,Ud.jsx)("span",{children:"+91 98765 43210"})]})]})]})]}),(0,Ud.jsxs)("div",{className:"mt-10 pt-3 pb-3 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center",children:[(0,Ud.jsxs)("p",{className:"text-sm text-gray-500 font-body",children:["\xa9 ",e," TECHVEDA. All rights reserved."]}),(0,Ud.jsxs)("div",{className:"mt-4 md:mt-0 space-x-4",children:[(0,Ud.jsx)("a",{href:"#",className:"text-xs text-gray-500 hover:text-primary-400 transition-colors font-body hoverable",children:"Privacy Policy"}),(0,Ud.jsx)("a",{href:"#",className:"text-xs text-gray-500 hover:text-primary-400 transition-colors font-body hoverable",children:"Terms of Service"}),(0,Ud.jsx)("a",{href:"#",className:"text-xs text-gray-500 hover:text-primary-400 transition-colors font-body hoverable",children:"Cookie Policy"})]})]})]})})},Qp=dr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
`,Jp=dr(hc.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 99999;
`,Zp=dr(hc.div)`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(var(--color-primary-rgb), 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99998;
  mix-blend-mode: difference;
`,eh=()=>{const[e,t]=(0,n.useState)({x:0,y:0}),[r,o]=(0,n.useState)(!1),[i,a]=(0,n.useState)(!1),s=(0,n.useCallback)((e=>{t({x:e.clientX,y:e.clientY}),i||a(!0)}),[i]),l=(0,n.useCallback)((e=>{e.target.closest(".hoverable")&&o(!0)}),[]),c=(0,n.useCallback)((e=>{e.target.closest(".hoverable")&&o(!1)}),[]),u=(0,n.useCallback)((()=>{a(!1)}),[]),d=(0,n.useCallback)((()=>{a(!0)}),[]);(0,n.useEffect)((()=>{document.addEventListener("mousemove",s),document.addEventListener("mouseover",l),document.addEventListener("mouseout",c),document.addEventListener("mouseleave",u),document.addEventListener("mouseenter",d),document.documentElement.classList.add("custom-cursor");const e=document.createElement("style");return e.textContent="\n      .custom-cursor, .custom-cursor * {\n        cursor: none !important;\n      }\n    ",document.head.appendChild(e),()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseover",l),document.removeEventListener("mouseout",c),document.removeEventListener("mouseleave",u),document.removeEventListener("mouseenter",d),document.documentElement.classList.remove("custom-cursor"),document.head.removeChild(e)}}),[s,l,c,u,d]);const p={default:{x:e.x-4,y:e.y-4,opacity:i?1:0,transition:{type:"spring",mass:.1,stiffness:800,damping:20,opacity:{duration:.2}}}},h={default:{x:e.x-20,y:e.y-20,scale:r?1.5:1,opacity:i?r?.8:.5:0,transition:{type:"spring",mass:.3,stiffness:200,damping:20,scale:{type:"spring",mass:.3,stiffness:200,damping:20},opacity:{duration:.2}}}};return"undefined"!==typeof window&&("ontouchstart"in window||navigator.maxTouchPoints>0)?null:(0,Ud.jsxs)(Qp,{children:[(0,Ud.jsx)(Jp,{variants:p,animate:"default"}),(0,Ud.jsx)(Zp,{variants:h,animate:"default"})]})},th=ur`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,rh=ur`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,nh=dr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
`,oh=dr.div`
  position: relative;
  width: 50px;
  height: 50px;
`,ih=dr.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(66, 153, 225, 0.1);
  border-top-color: #4299e1;
  border-radius: 50%;
  animation: ${th} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`,ah=dr(ih)`
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-width: 2px;
  animation-duration: 0.8s;
  animation-direction: reverse;
`,sh=dr.div`
  margin-top: 1.5rem;
  color: #4299e1;
  font-size: 1rem;
  font-weight: 500;
  animation: ${rh} 1.5s ease-in-out infinite;
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,lh=()=>(0,Ud.jsxs)(nh,{children:[(0,Ud.jsxs)(oh,{children:[(0,Ud.jsx)(ih,{}),(0,Ud.jsx)(ah,{})]}),(0,Ud.jsx)(sh,{children:"Loading..."})]}),ch=e=>{let{children:t}=e;const{isAuthenticated:r,loading:o}=Hd(),i=Q();return(0,n.useEffect)((()=>{r()&&Bd()}),[r]),o?(0,Ud.jsx)(lh,{}):r()?t:(0,Ud.jsx)(me,{to:"/admin/login",state:{from:i},replace:!0})},uh=()=>{const[e,t]=(0,n.useState)({x:0,y:0}),[r,o]=(0,n.useState)(!1),[i,a]=(0,n.useState)(!1);(0,n.useEffect)((()=>{if("complete"===document.readyState){const e=setTimeout((()=>{a(!0)}),1500);return()=>clearTimeout(e)}{const e=()=>{const e=setTimeout((()=>{a(!0)}),1500);return()=>clearTimeout(e)};return window.addEventListener("load",e),()=>window.removeEventListener("load",e)}}),[]);return(0,Ud.jsxs)("section",{className:"relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden -mt-[36px]",onMouseMove:e=>{const{clientX:r,clientY:n}=e,{innerWidth:o,innerHeight:i}=window;t({x:r/o*2-1,y:n/i*2-1})},children:[(0,Ud.jsx)("div",{className:"container mx-auto max-w-7xl relative z-10",children:(0,Ud.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",children:[(0,Ud.jsxs)("div",{className:"text-center lg:text-left",children:[(0,Ud.jsxs)("h1",{className:"text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-heading leading-tight mb-4",children:["We create ",(0,Ud.jsx)("span",{className:"text-primary-500",children:"digital"})," experiences"]}),(0,Ud.jsx)("h2",{className:"text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 font-body",children:"Techveda delivers innovative web applications and digital solutions that drive growth and enhance user experiences"}),(0,Ud.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8",children:[(0,Ud.jsxs)("a",{href:"#projects",className:"px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center font-body",children:["See Our Work",(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,Ud.jsx)("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),(0,Ud.jsx)("a",{href:"#contact",className:"px-6 py-3 border border-primary-500 text-primary-400 hover:bg-primary-500/10 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center font-body",children:"Contact Us"})]})]}),(0,Ud.jsx)("div",{className:"mt-12 lg:mt-0 relative",style:{transform:`perspective(1000px) rotateX(${-5*e.y}deg) rotateY(${5*e.x}deg)`,transition:"transform 0.1s ease-out"},children:(0,Ud.jsxs)(hc.div,{className:"relative rounded-2xl overflow-hidden aspect-video lg:aspect-square shadow-2xl",initial:{opacity:0,scale:.8},animate:{opacity:r&&i?1:0,scale:r&&i?1:.8,y:r&&i?0:20},transition:{duration:.8,ease:[.22,1,.36,1],delay:.2},children:[(0,Ud.jsx)(hc.div,{className:"absolute inset-0 bg-primary-500/20 z-10",initial:{opacity:0},animate:{opacity:r&&i?.2:0},transition:{duration:.5,delay:.5}}),(0,Ud.jsx)(hc.div,{className:"absolute inset-0 z-0",initial:{clipPath:"inset(100% 0% 0% 0%)"},animate:{clipPath:r&&i?"inset(0% 0% 0% 0%)":"inset(100% 0% 0% 0%)"},transition:{duration:.8,ease:[.22,1,.36,1],delay:.2},children:(0,Ud.jsx)("img",{src:"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",alt:"Digital experience",className:"w-full h-full object-cover",onLoad:()=>{o(!0)}})}),(0,Ud.jsx)(hc.div,{className:"absolute top-0 left-0 w-16 h-16 z-30",initial:{opacity:0,x:-20,y:-20},animate:{opacity:r&&i?.7:0,x:r&&i?0:-20,y:r&&i?0:-20},transition:{duration:.6,delay:1},children:(0,Ud.jsx)("div",{className:"absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"})}),(0,Ud.jsx)(hc.div,{className:"absolute bottom-0 right-0 w-16 h-16 z-30",initial:{opacity:0,x:20,y:20},animate:{opacity:r&&i?.7:0,x:r&&i?0:20,y:r&&i?0:20},transition:{duration:.6,delay:1},children:(0,Ud.jsx)("div",{className:"absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-2xl"})})]})})]})}),(0,Ud.jsxs)(hc.div,{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 cursor-pointer hover:text-primary-500 transition-colors duration-300",initial:{opacity:0,y:-20},animate:{opacity:i?1:0,y:i?0:-20},transition:{delay:1.2,duration:.6},onClick:()=>{const e=document.getElementById("Projects");e&&e.scrollIntoView({behavior:"smooth"})},children:[(0,Ud.jsx)("p",{className:"text-sm mb-2 font-body",children:"Scroll Down"}),(0,Ud.jsx)(hc.svg,{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",animate:{y:[0,5,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})]})},dh=dr(hc.h2)`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${e=>e.theme.spacing.md};
  position: relative;
  display: inline-block;
  color: ${e=>e.theme.colors.text};
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: ${e=>e.theme.colors.primary};
    transition: width 0.3s ease;
    
    @media (max-width: 992px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,ph=dr.section`
  padding: 6rem 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  id: "Projects";
`,hh=dr(hc.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`,fh=dr(hc.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 2.2rem;
`,mh=dr(hc.div)`
  background: #0a0a0a;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(66, 153, 225, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  isolation: isolate;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(66, 153, 225, 0.1);
    border-color: rgba(66, 153, 225, 0.2);
  }
`,gh=dr.div`
  position: relative;
  overflow: hidden;
  height: 200px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${mh}:hover &::after {
    opacity: 1;
  }
`,vh=dr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${mh}:hover & {
    transform: scale(1.08);
  }
`,yh=dr.div`
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(66, 153, 225, 0.2), transparent);
  }
`,xh=dr.h3`
  color: linear-gradient(135deg, #4299e1, #38b2ac);
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  ${mh}:hover & {
    color: #4299e1;
  }
`,bh=dr.p`
  color: #cbd5e0;
  font-size: 1.1rem;
  margin-bottom: 1.75rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 5.1rem;
  transition: color 0.3s ease;

  ${mh}:hover & {
    color: #e2e8f0;
  }
`,wh=dr.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  white-space: nowrap;
  position: relative;
`,kh=dr(hc.span)`
  background: rgba(66, 153, 225, 0.1);
  color: #4299e1;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  cursor: default;

  &:hover {
    background: rgba(66, 153, 225, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.1);
  }
`,jh=dr.div`
  display: flex;
  gap: 1.25rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  ${mh}:hover & {
    opacity: 1;
  }
`,Sh=dr.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`,Eh=dr(Pe)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  background: linear-gradient(90deg, #4299e1, #2563eb);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(66, 153, 225, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 50%);
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(66, 153, 225, 0.4);

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,Ch=dr.span`
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: scaleX(0.7);
    transition: all 0.3s ease;
  }  
`,Th=dr(Pe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.8rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.3rem;
  font-weight: 500;
  transition: background 0.2s ease;
  margin-left:auto;

  &:hover {
    background: #2563eb;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,_h=dr.a`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;

  svg {
    width: 30px;
    height: 30px;
  }
  span{
    padding-left:10px;
  }

  &:hover {
    color: #3b82f6;
  }
`,Ph={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},Lh={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:[.4,0,.2,1]}}},Ah={hover:{y:-2,scale:1.05,transition:{duration:.2,ease:"easeOut"}}},Rh=dr(hc.p)`
  font-size: 1rem;
  max-width: 1200px;
  color: rgba(255, 255, 255, 0.7);
`,Oh=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{(async()=>{try{const e=(await Ld.get("/api/projects")).data.sort(((e,t)=>new Date(t._id)-new Date(e._id))).slice(0,3);t(e),o(!1)}catch(e){console.error("Error fetching projects:",e),o(!1)}})()}),[]),(0,Ud.jsx)(ph,{id:"Projects",children:(0,Ud.jsxs)(hh,{children:[(0,Ud.jsxs)(dh,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:["Latest ",(0,Ud.jsx)(Ch,{children:"Projects"})]}),(0,Ud.jsx)(Rh,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:"At Techveda, we deliver tailored solutions for businesses of all sizes. Explore our portfolio of successfully completed client projects that demonstrate our technical expertise and commitment to excellence."}),r?(0,Ud.jsx)(lh,{}):(0,Ud.jsxs)(Ud.Fragment,{children:[(0,Ud.jsx)(fh,{as:hc.div,variants:Ph,initial:"hidden",animate:"visible",children:e.map((e=>(0,Ud.jsxs)(mh,{variants:Lh,children:[(0,Ud.jsx)(gh,{children:(0,Ud.jsx)(vh,{src:e.mainimage,alt:e.title})}),(0,Ud.jsxs)(yh,{children:[(0,Ud.jsx)(xh,{children:e.title}),(0,Ud.jsx)(bh,{children:e.shortDescription}),(0,Ud.jsx)(wh,{children:e.technologies.map(((e,t)=>(0,Ud.jsx)(kh,{variants:Ah,children:e},t)))}),(0,Ud.jsxs)(jh,{children:[(0,Ud.jsxs)(_h,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),(0,Ud.jsx)("span",{children:"GitHub"})]}),(0,Ud.jsxs)(Th,{to:`/projects/${e._id}`,children:["View Details",(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})]})]},e._id)))}),(0,Ud.jsx)(Sh,{children:(0,Ud.jsxs)(Eh,{to:"/projects",children:["View More Projects",(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})})},zh=dr.section`
  padding-top:2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`,Nh=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.xl};
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,Dh=dr.div`
  @media (max-width: 992px) {
    order: 2;
  }
`,Ih=dr(hc.h2)`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${e=>e.theme.spacing.md};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    transition: width 0.3s ease;
    
    @media (max-width: 992px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,Mh=dr.span`
  color: var(--color-primary);
  font-weight: 600;
`,$h=dr(hc.p)`
  font-size: 1.1rem;
  margin-bottom: ${e=>e.theme.spacing.md};
  line-height: 1.8;
  color: var(--color-gray);
`,Fh=dr(hc.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing.md};
  margin: ${e=>e.theme.spacing.lg} 0;
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: ${e=>e.theme.spacing.lg} auto;
  }
`,Bh=dr.div`
  padding: ${e=>e.theme.spacing.md};
  background: hsla(0, 2.60%, 7.60%, 0.80);
  border: 1px solid rgba(66, 153, 225, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(66, 153, 225, 0.1);
    border-color: rgba(66, 153, 225, 0.2);
  }
`,Uh=dr.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #4299e1;
`,Vh=dr.p`
  font-size: 1rem;
  font-weight: 500;
`,Wh=(dr.div`
  margin-top: ${e=>e.theme.spacing.lg};
`,dr.h3`
  font-size: 1.3rem;
  margin-bottom: ${e=>e.theme.spacing.sm};
  font-weight: 600;
`,dr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`,dr(hc.span)`
  padding: 8px 16px;
  background: hsla(0, 2.60%, 7.60%, 0.80);
  color: #4299e1;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(66, 153, 225, 0.2);
    color: #4299e1;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.1);
  }
`,dr(hc.div)`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }
`),Hh=dr.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: ${e=>e.theme.shadows.medium};
  filter: brightness(0.9);
`,qh=dr(hc.div)`
  position: absolute;
  bottom: -25px;
  left: -25px;
  background: #4299e1;
  padding: ${e=>e.theme.spacing.md};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(66, 153, 225, 0.1);
  border: 1px solid rgba(66, 153, 225, 0.1);
  
  @media (max-width: 992px) {
    left: 0;
  }
`,Yh=dr.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5px;
`,Xh=dr.p`
  font-size: 0.9rem;
  font-weight: 500;
`,Kh=(dr.div`
  position: absolute;
  top: -200px;
  left: -200px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(66, 153, 225, 0.1);
  opacity: 0.05;
  z-index: -1;
`,()=>(0,Ud.jsx)(zh,{id:"about",children:(0,Ud.jsxs)(Nh,{children:[(0,Ud.jsxs)(Dh,{children:[(0,Ud.jsxs)(Ih,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:["About ",(0,Ud.jsx)(Mh,{children:"Techveda"})]}),(0,Ud.jsx)($h,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:"Techveda is a dynamic duo of passionate developers dedicated to creating cutting-edge web applications and innovative digital solutions for businesses across various industries."}),(0,Ud.jsx)($h,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.3},viewport:{once:!0},children:"Founded by Rahul Sharma and Priya Patel, our team combines frontend expertise with backend mastery to deliver complete solutions that are reliable, scalable, and user-friendly."}),(0,Ud.jsxs)(Fh,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:[(0,Ud.jsxs)(Bh,{children:[(0,Ud.jsx)(Uh,{children:"4+"}),(0,Ud.jsx)(Vh,{children:"Years Experience"})]}),(0,Ud.jsxs)(Bh,{children:[(0,Ud.jsx)(Uh,{children:"35+"}),(0,Ud.jsx)(Vh,{children:"Projects Completed"})]}),(0,Ud.jsxs)(Bh,{children:[(0,Ud.jsx)(Uh,{children:"15+"}),(0,Ud.jsx)(Vh,{children:"Happy Clients"})]}),(0,Ud.jsxs)(Bh,{children:[(0,Ud.jsx)(Uh,{children:"5+"}),(0,Ud.jsx)(Vh,{children:"Tech Stacks"})]})]})]}),(0,Ud.jsxs)(Wh,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[(0,Ud.jsx)(Hh,{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",alt:"Techveda Team"}),(0,Ud.jsxs)(qh,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:[(0,Ud.jsx)(Yh,{children:"4+"}),(0,Ud.jsx)(Xh,{children:"Years of Excellence"})]})]})]})})),Gh=Ld.create({baseURL:"http://localhost:5001",headers:{"Content-Type":"application/json"}});Gh.interceptors.request.use((e=>{const t=localStorage.getItem("admin_token");if(t)e.headers.Authorization=`Bearer ${t}`,console.log("Adding token to request:",`Bearer ${t.substring(0,10)}...`);else{const t=sessionStorage.getItem("admin_token");t?(e.headers.Authorization=`Bearer ${t}`,console.log("Using session token for request")):console.warn("No auth token found in storage")}return console.log("Making request to:",e.baseURL+e.url),console.log("Request method:",e.method.toUpperCase()),e}),(e=>(console.error("Request error:",e),Promise.reject(e)))),Gh.interceptors.response.use((e=>(console.log("Response received:",e.data),e)),(e=>{var t,r,n,o,i,a,s,l;return console.error("Response error:",{message:e.message,status:null===(t=e.response)||void 0===t?void 0:t.status,statusText:null===(r=e.response)||void 0===r?void 0:r.statusText,data:null===(n=e.response)||void 0===n?void 0:n.data,config:{url:null===(o=e.config)||void 0===o?void 0:o.url,method:null===(i=e.config)||void 0===i?void 0:i.method,baseURL:null===(a=e.config)||void 0===a?void 0:a.baseURL,headers:null===(s=e.config)||void 0===s?void 0:s.headers}}),401===(null===(l=e.response)||void 0===l?void 0:l.status)&&(localStorage.removeItem("admin_token"),window.location.href="/admin/login"),Promise.reject(e)}));const Qh=()=>Gh.get("/api/technologies"),Jh=Gh,Zh=dr(hc.section)`
  padding: 5rem 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`,ef=dr.div`
  max-width: 1200px;
  margin: 0 auto;
`,tf=dr.div`
  text-align: center;
  margin-bottom: 4rem;
`,rf=dr(hc.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
`,nf=dr(hc.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  color: var(--color-text-light);
`,of=dr(hc.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`,af=dr(hc.button)`
  padding: 0.75rem 2rem;
  background: ${e=>e.active?"rgba(66, 153, 225, 0.2)":"rgba(0, 0, 0, 0.8)"};
  color: ${e=>e.active?"#4299e1":"#cbd5e0"};
  border: 1px solid ${e=>e.active?"rgba(66, 153, 225, 0.3)":"rgba(66, 153, 225, 0.1)"};
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(66, 153, 225, 0.2);
    color: #4299e1;
    transform: translateY(-3px);
  }
`,sf=dr.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
  position: relative;
  display: flex;
  justify-content: center;
`,lf=dr.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  justify-content: ${e=>e.shouldScroll?"flex-start":"center"};
  animation: ${e=>e.shouldScroll?"scroll 20s linear infinite":"none"};
  width: fit-content;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    animation: ${e=>e.shouldScroll?"scroll 30s linear infinite":"none"};
  }
`,cf=dr(hc.div)`
  flex: 0 0 auto;
  width: 160px;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 120px;
  }
`,uf=dr(hc.img)`
  width: 60%;
  height: auto;
  margin-bottom: 0.75rem;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 40%;
  }
`,df=dr(hc.h4)`
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  color: rgb(255, 255, 255);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,pf=()=>{const[e,t]=(0,n.useState)("frontend"),[r,o]=(0,n.useState)({frontend:[],backend:[],database:[],design:[],devops:[]}),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{a(!0),l(null);const e=(await Qh()).data.technologies.filter((e=>e.isSelected)),t={frontend:[],backend:[],database:[],design:[],devops:[]};e.forEach((e=>{t[e.category]&&t[e.category].push({name:e.name,logo:e.logo})})),o(t)}catch(e){l("Failed to load technologies. Please try again later.")}finally{a(!1)}})()}),[]),(0,Ud.jsx)(Zh,{id:"technologies",children:(0,Ud.jsxs)(ef,{children:[(0,Ud.jsxs)(tf,{children:[(0,Ud.jsx)(rf,{children:"Technologies & Platforms"}),(0,Ud.jsx)(nf,{children:"At Techveda, we leverage cutting-edge technologies to build scalable, efficient, and innovative solutions for our clients."})]}),(0,Ud.jsx)(of,{children:[{id:"frontend",label:"Frontend"},{id:"backend",label:"Backend"},{id:"database",label:"Database"},{id:"design",label:"Design"},{id:"devops",label:"DevOps"}].map((r=>(0,Ud.jsx)(af,{active:e===r.id,onClick:()=>t(r.id),children:r.label},r.id)))}),i?(0,Ud.jsx)("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading technologies..."}):s?(0,Ud.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"var(--color-error)"},children:s}):(0,Ud.jsx)(Rr,{mode:"wait",children:(0,Ud.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:(0,Ud.jsx)(sf,{children:(0,Ud.jsx)(lf,{shouldScroll:r[e].length>3,children:r[e].map(((e,t)=>(0,Ud.jsxs)(cf,{children:[(0,Ud.jsx)(uf,{src:e.logo,alt:e.name}),(0,Ud.jsx)(df,{children:e.name})]},`${e.name}-${t}`)))})})})})]})})};function hf(){!ec.current&&tc();const[e]=(0,n.useState)(Zl.current);return e}const ff=new WeakMap;let mf;function gf(e){let{target:t,contentRect:r,borderBoxSize:n}=e;var o;null===(o=ff.get(t))||void 0===o||o.forEach((e=>{e({target:t,contentSize:r,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:r}=t[0];return{width:e,height:r}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(t,n)}})}))}function vf(e){e.forEach(gf)}function yf(e,t){mf||"undefined"!==typeof ResizeObserver&&(mf=new ResizeObserver(vf));const r=function(e,t,r){var n;if("string"===typeof e){let o=document;t&&(Lr(Boolean(t.current),"Scope provided, but no element detected."),o=t.current),r?(null!==(n=r[e])&&void 0!==n||(r[e]=o.querySelectorAll(e)),e=r[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return r.forEach((e=>{let r=ff.get(e);r||(r=new Set,ff.set(e,r)),r.add(t),null===mf||void 0===mf||mf.observe(e)})),()=>{r.forEach((e=>{const r=ff.get(e);null===r||void 0===r||r.delete(t),(null===r||void 0===r?void 0:r.size)||null===mf||void 0===mf||mf.unobserve(e)}))}}const xf=new Set;let bf;function wf(e){return xf.add(e),bf||(bf=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};xf.forEach((e=>e(t)))},window.addEventListener("resize",bf)),()=>{xf.delete(e),!xf.size&&bf&&(bf=void 0)}}const kf={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function jf(e,t,r,n){const o=r[t],{length:i,position:a}=kf[t],s=o.current,l=r.time;o.current=e["scroll"+a],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Pi(0,o.scrollLength,o.current);const c=n-l;o.velocity=c>50?0:Ni(o.current-s,c)}const Sf={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Ef={start:0,center:.5,end:1};function Cf(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=0;if(void 0!==Ef[e]&&(e=Ef[e]),"string"===typeof e){const t=parseFloat(e);e.endsWith("px")?n=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?n=t/100*document.documentElement.clientWidth:e.endsWith("vh")?n=t/100*document.documentElement.clientHeight:e=t}return"number"===typeof e&&(n=t*e),r+n}const Tf=[0,0];function _f(e,t,r,n){let o=Array.isArray(e)?e:Tf,i=0,a=0;return"number"===typeof e?o=[e,e]:"string"===typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,Ef[e]?e:"0"]),i=Cf(o[0],r,n),a=Cf(o[1],t),i-a}const Pf={x:0,y:0};function Lf(e,t,r){let{offset:n=Sf.All}=r;const{target:o=e,axis:i="y"}=r,a="y"===i?"height":"width",s=o!==e?function(e,t){const r={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if("svg"===n.tagName){const e=n.getBoundingClientRect();n=n.parentElement;const t=n.getBoundingClientRect();r.x+=e.left-t.left,r.y+=e.top-t.top}else{if(!(n instanceof SVGGraphicsElement))break;{const{x:e,y:t}=n.getBBox();r.x+=e,r.y+=t;let o=null,i=n.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=n.parentNode;n=o}}return r}(o,e):Pf,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(o),c={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let u=!t[i].interpolate;const d=n.length;for(let p=0;p<d;p++){const e=_f(n[p],c[a],l[a],s[i]);u||e===t[i].interpolatorOffsets[p]||(u=!0),t[i].offset[p]=e}u&&(t[i].interpolate=Ri(t[i].offset,Oi(n)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function Af(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2?arguments[2]:void 0;if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}(e,n.target,r),update:t=>{!function(e,t,r){jf(e,"x",t,r),jf(e,"y",t,r),t.time=r}(e,r,t),(n.offset||n.target)&&Lf(e,r,n)},notify:()=>t(r)}}const Rf=new WeakMap,Of=new WeakMap,zf=new WeakMap,Nf=e=>e===document.documentElement?window:e;function Df(e){let{container:t=document.documentElement,...r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=zf.get(t);n||(n=new Set,zf.set(t,n));const o=Af(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},r);if(n.add(o),!Rf.has(t)){const e=()=>{for(const e of n)e.measure()},r=()=>{for(const e of n)e.update(br.timestamp)},o=()=>{for(const e of n)e.notify()},i=()=>{yr.read(e,!1,!0),yr.read(r,!1,!0),yr.update(o,!1,!0)};Rf.set(t,i);const a=Nf(t);window.addEventListener("resize",i,{passive:!0}),t!==document.documentElement&&Of.set(t,function(e,t){return"function"===typeof e?wf(e):yf(e,t)}(t,i)),a.addEventListener("scroll",i,{passive:!0})}const i=Rf.get(t);return yr.read(i,!1,!0),()=>{var e;xr(i);const r=zf.get(t);if(!r)return;if(r.delete(o),r.size)return;const n=Rf.get(t);Rf.delete(t),n&&(Nf(t).removeEventListener("scroll",n),null===(e=Of.get(t))||void 0===e||e(),window.removeEventListener("resize",n))}}function If(e,t){Pr(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const Mf=()=>({scrollX:ja(0),scrollY:ja(0),scrollXProgress:ja(0),scrollYProgress:ja(0)});const $f=e=>(e=>e&&"object"===typeof e&&e.mix)(e)?e.mix:void 0;function Ff(e){const t=jr((()=>ja(e))),{isStatic:r}=(0,n.useContext)(Or);if(r){const[,r]=(0,n.useState)(e);(0,n.useEffect)((()=>t.on("change",r)),[])}return t}function Bf(e,t){const r=Ff(t()),n=()=>r.set(t());return n(),hr((()=>{const t=()=>yr.update(n,!1,!0),r=e.map((e=>e.on("change",t)));return()=>{r.forEach((e=>e())),xr(n)}})),r}function Uf(e,t,r,n){if("function"===typeof e)return function(e){wa.current=[],e();const t=Bf(wa.current,e);return wa.current=void 0,t}(e);const o="function"===typeof t?t:function(){const e=!Array.isArray(arguments.length<=0?void 0:arguments[0]),t=e?0:-1,r=0+t<0||arguments.length<=0+t?void 0:arguments[0+t],n=2+t<0||arguments.length<=2+t?void 0:arguments[2+t],o=3+t<0||arguments.length<=3+t?void 0:arguments[3+t],i=Ri(1+t<0||arguments.length<=1+t?void 0:arguments[1+t],n,{mixer:$f(n[0]),...o});return e?i(r):i}(t,r,n);return Array.isArray(e)?Vf(e,o):Vf([e],(e=>{let[t]=e;return o(t)}))}function Vf(e,t){const r=jr((()=>[]));return Bf(e,(()=>{r.length=0;const n=e.length;for(let t=0;t<n;t++)r[t]=e[t].get();return t(r)}))}const Wf=()=>(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,Ud.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),Hf=()=>(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),qf=()=>(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,Ud.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),Yf=()=>(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),Xf=()=>(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,Ud.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),(0,Ud.jsx)("circle",{cx:"4",cy:"4",r:"2"})]}),Kf=()=>(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})}),Gf=()=>(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,Ud.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),(0,Ud.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),Qf=dr.span`
  color: var(--color-primary);
  font-weight: 4000;
`,Jf=dr(hc.section)`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`,Zf=dr.div`
  max-width: 1200px;
  margin: 0 auto;
`,em=dr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,tm=dr(hc.div)`
  display: flex;
  flex-direction: column;
`,rm=dr(hc.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
`,nm=dr(hc.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: var(--color-text-light);
`,om=dr(hc.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
`,im=dr.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 1rem;
    color: var(--color-text-light);
  }
`,am=dr(hc.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`,sm=dr(hc.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.2rem;
  }
`,lm=dr(hc.form)`
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2.5rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,cm=dr(hc.h3)`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`,um=dr(hc.div)`
  margin-bottom: 1.5rem;
`,dm=dr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`,pm=dr.label`
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-light);
`,hm=dr(hc.input)`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`,fm=dr(hc.textarea)`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`,mm=dr(hc.button)`
  padding: 0.75rem 2rem;
  background: ${e=>e.theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1.2rem;
  }
`,gm=dr(hc.div)`
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-weight: 500;
  background-color: ${e=>e.success?"rgba(46, 213, 115, 0.15)":`rgba(${e.theme.colors.primary.replace("#","")}, 0.15)`};
  color: ${e=>e.success?"#2ed573":e.theme.colors.primary};
  border: 1px solid ${e=>e.success?"rgba(46, 213, 115, 0.3)":`rgba(${e.theme.colors.primary.replace("#","")}, 0.3)`};
`,vm={initial:{opacity:0,y:50},animate:{opacity:1,y:0,transition:{duration:.6,ease:[.23,1,.32,1],when:"beforeChildren",staggerChildren:.1}},exit:{opacity:0,y:30,transition:{duration:.4,ease:[.43,.13,.23,.96]}}},ym={initial:{opacity:0,x:-50},animate:{opacity:1,x:0,transition:{type:"spring",mass:.8,damping:20,stiffness:100}}},xm={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.6,ease:[.23,1,.32,1]}}},bm={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.6,ease:[.23,1,.32,1],delay:.2}}},wm={initial:{opacity:0,x:-20},animate:e=>({opacity:1,x:0,transition:{type:"spring",mass:.6,damping:15,stiffness:100,delay:.3+.1*e}}),hover:{x:5,transition:{duration:.2,ease:"easeOut"}}},km={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,ease:[.23,1,.32,1],delay:.6,when:"beforeChildren",staggerChildren:.1}}},jm={initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,transition:{type:"spring",stiffness:300,damping:15}},hover:{scale:1.1,backgroundColor:"var(--color-primary)",transition:{duration:.2,ease:"easeOut"}},tap:{scale:.9}},Sm={initial:{opacity:0,y:50},animate:{opacity:1,y:0,transition:{type:"spring",mass:.8,damping:20,stiffness:100,delay:.2,when:"beforeChildren",staggerChildren:.1}}},Em={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,ease:[.23,1,.32,1]}}},Cm={initial:{opacity:0,y:20},animate:e=>({opacity:1,y:0,transition:{type:"spring",mass:.6,damping:15,stiffness:100,delay:.1+.1*e}})},Tm={initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.4,ease:[.23,1,.32,1]}},focus:{boxShadow:"0 0 0 3px rgba(var(--color-primary-rgb), 0.3)",borderColor:"var(--color-primary)",transition:{duration:.2,ease:"easeOut"}}},_m={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,ease:[.23,1,.32,1],delay:.5}},hover:{scale:1.05,backgroundColor:"var(--color-secondary)",transition:{duration:.2,ease:"easeOut"}},tap:{scale:.95}},Pm={initial:{opacity:0,y:-20,height:0,padding:0},animate:{opacity:1,y:0,height:"auto",padding:"1rem",transition:{duration:.4,ease:[.23,1,.32,1]}},exit:{opacity:0,y:-20,height:0,padding:0,transition:{duration:.3,ease:[.43,.13,.23,.96]}}},Lm=()=>{const[e,t]=(0,n.useState)({name:"",email:"",subject:"",message:""}),[r,o]=(0,n.useState)({submitted:!1,success:!1,message:""}),[i,a]=(0,n.useState)(!1),s=hf(),{scrollYProgress:l}=function(){let{container:e,target:t,layoutEffect:r=!0,...o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=jr(Mf);return(r?hr:n.useEffect)((()=>(If("target",t),If("container",e),Df((e=>{let{x:t,y:r}=e;i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(r.current),i.scrollYProgress.set(r.progress)}),{...o,container:(null===e||void 0===e?void 0:e.current)||void 0,target:(null===t||void 0===t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(o.offset)]),i}(),c=(Uf(l,[0,.5],[.3,.5]),Uf(l,[0,.5],[1,1.2]),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{isStatic:r}=(0,n.useContext)(Or),o=(0,n.useRef)(null),i=Ff(sn(e)?e.get():e),a=()=>{o.current&&o.current.stop()};(0,n.useInsertionEffect)((()=>i.attach(((e,n)=>{if(r)return n(e);if(a(),o.current=Ki({keyframes:[i.get(),e],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:n}),!br.isProcessing){const e=performance.now()-br.timestamp;e<30&&(o.current.time=zo(e))}return i.get()}),a)),[JSON.stringify(t)]),hr((()=>{if(sn(e))return e.on("change",(e=>i.set(parseFloat(e))))}),[i])}(l,{stiffness:100,damping:30,restDelta:.001}),e=>{const{name:r,value:n}=e.target;t((e=>({...e,[r]:n})))});return(0,Ud.jsx)(Jf,{variants:s?{}:vm,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.25},exit:"exit",id:"contact",children:(0,Ud.jsx)(Zf,{children:(0,Ud.jsxs)(em,{children:[(0,Ud.jsxs)(tm,{variants:s?{}:ym,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.3},children:[(0,Ud.jsxs)(rm,{variants:s?{}:xm,initial:"initial",whileInView:"animate",viewport:{once:!0},children:["Get In ",(0,Ud.jsx)(Qf,{children:"Touch"})]}),(0,Ud.jsx)(nm,{variants:s?{}:bm,initial:"initial",whileInView:"animate",viewport:{once:!0},children:"Have a project in mind? Looking to partner or work with us? We'd love to hear from you. Reach out and let's create something amazing together."}),(0,Ud.jsxs)(om,{variants:s?{}:wm,initial:"initial",whileInView:"animate",whileHover:"hover",viewport:{once:!0},custom:0,children:[(0,Ud.jsx)(Wf,{}),(0,Ud.jsxs)(im,{children:[(0,Ud.jsx)("h4",{children:"Email"}),(0,Ud.jsx)("p",{children:"info@techveda.com"})]})]}),(0,Ud.jsxs)(om,{variants:s?{}:wm,initial:"initial",whileInView:"animate",whileHover:"hover",viewport:{once:!0},custom:1,children:[(0,Ud.jsx)(Hf,{}),(0,Ud.jsxs)(im,{children:[(0,Ud.jsx)("h4",{children:"Phone"}),(0,Ud.jsx)("p",{children:"+91 98765 43210"})]})]}),(0,Ud.jsxs)(om,{variants:s?{}:wm,initial:"initial",whileInView:"animate",whileHover:"hover",viewport:{once:!0},custom:2,children:[(0,Ud.jsx)(qf,{}),(0,Ud.jsxs)(im,{children:[(0,Ud.jsx)("h4",{children:"Location"}),(0,Ud.jsx)("p",{children:"Surat, Gujarat, India"})]})]}),(0,Ud.jsxs)(am,{variants:s?{}:km,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[(0,Ud.jsx)(sm,{href:"https://github.com/techveda",target:"_blank",rel:"noopener noreferrer",variants:s?{}:jm,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:(0,Ud.jsx)(Yf,{})}),(0,Ud.jsx)(sm,{href:"https://linkedin.com/company/techveda",target:"_blank",rel:"noopener noreferrer",variants:s?{}:jm,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:(0,Ud.jsx)(Xf,{})}),(0,Ud.jsx)(sm,{href:"https://twitter.com/techveda",target:"_blank",rel:"noopener noreferrer",variants:s?{}:jm,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:(0,Ud.jsx)(Kf,{})}),(0,Ud.jsx)(sm,{href:"https://instagram.com/techveda",target:"_blank",rel:"noopener noreferrer",variants:s?{}:jm,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:(0,Ud.jsx)(Gf,{})})]})]}),(0,Ud.jsxs)(lm,{onSubmit:e=>{e.preventDefault(),a(!0),setTimeout((()=>{a(!1),o({submitted:!0,success:!0,message:"Your message has been sent successfully! We will get back to you soon."}),t({name:"",email:"",subject:"",message:""}),setTimeout((()=>{o({submitted:!1,success:!1,message:""})}),5e3)}),1500)},variants:s?{}:Sm,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.3},children:[(0,Ud.jsx)(cm,{variants:s?{}:Em,initial:"initial",animate:"animate",children:"Send us a message"}),(0,Ud.jsx)(Rr,{mode:"wait",children:r.submitted&&(0,Ud.jsx)(gm,{success:r.success,variants:s?{}:Pm,initial:"initial",animate:"animate",exit:"exit",layout:!0,children:r.message})}),(0,Ud.jsxs)(dm,{children:[(0,Ud.jsxs)(um,{variants:s?{}:Cm,initial:"initial",animate:"animate",custom:0,children:[(0,Ud.jsx)(pm,{children:"Your Name"}),(0,Ud.jsx)(hm,{type:"text",name:"name",value:e.name,onChange:c,required:!0,variants:s?{}:Tm,initial:"initial",animate:"animate",whileFocus:"focus"})]}),(0,Ud.jsxs)(um,{variants:s?{}:Cm,initial:"initial",animate:"animate",custom:1,children:[(0,Ud.jsx)(pm,{children:"Your Email"}),(0,Ud.jsx)(hm,{type:"email",name:"email",value:e.email,onChange:c,required:!0,variants:s?{}:Tm,initial:"initial",animate:"animate",whileFocus:"focus"})]})]}),(0,Ud.jsxs)(um,{variants:s?{}:Cm,initial:"initial",animate:"animate",custom:2,children:[(0,Ud.jsx)(pm,{children:"Subject"}),(0,Ud.jsx)(hm,{type:"text",name:"subject",value:e.subject,onChange:c,required:!0,variants:s?{}:Tm,initial:"initial",animate:"animate",whileFocus:"focus"})]}),(0,Ud.jsxs)(um,{variants:s?{}:Cm,initial:"initial",animate:"animate",custom:3,children:[(0,Ud.jsx)(pm,{children:"Your Message"}),(0,Ud.jsx)(fm,{name:"message",value:e.message,onChange:c,required:!0,variants:s?{}:Tm,initial:"initial",animate:"animate",whileFocus:"focus"})]}),(0,Ud.jsxs)(mm,{type:"submit",disabled:i,variants:s?{}:_m,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:[i?"Sending...":"Send Message",(0,Ud.jsx)(hc.svg,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",initial:{x:0},animate:i?{rotate:360}:{x:0},transition:i?{duration:1,repeat:1/0,ease:"linear"}:{},whileHover:{x:5},children:i?(0,Ud.jsx)("path",{d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}):(0,Ud.jsx)("path",{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"})})]})]})]})})})},Am=()=>(0,Ud.jsxs)(hc.div,{className:"relative overflow-hidden",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},style:{background:"linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",borderRadius:"24px"},children:[(0,Ud.jsxs)("div",{className:"absolute inset-0",children:[(0,Ud.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),(0,Ud.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),(0,Ud.jsx)("div",{className:"absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"}),(0,Ud.jsx)("div",{className:"absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"})]}),(0,Ud.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(66,153,225,0.1),_transparent_50%)]"}),(0,Ud.jsx)("div",{className:"absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"}),(0,Ud.jsx)("div",{className:"absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"}),(0,Ud.jsx)(hc.div,{className:"absolute inset-0 z-0 opacity-[0.15]",animate:{backgroundPosition:["0% 0%","100% 100%"]},transition:{duration:20,repeat:1/0,repeatType:"reverse"},style:{backgroundImage:"radial-gradient(circle at center,rgb(27, 62, 90) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),(0,Ud.jsx)("div",{className:"relative z-10 px-8 py-16 max-w-4xl mx-auto",children:(0,Ud.jsxs)(hc.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.5},className:"text-center space-y-6",children:[(0,Ud.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold text-white",children:["Ready to Start Your"," ",(0,Ud.jsx)("span",{className:"bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent",children:"Project"}),"?"]}),(0,Ud.jsx)("p",{className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"Let's collaborate to bring your vision to life with custom solutions designed specifically to meet your unique needs."}),(0,Ud.jsx)(hc.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:(0,Ud.jsx)(Pe,{to:"/contact",className:"inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)] border border-blue-500/20 hover:border-blue-400",children:"Let's Work Together"})})]})})]}),Rm=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem;
  }
`,Om=dr.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #a0aec0;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`,zm=dr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 2rem;
  position: relative;
  padding-bottom: 10rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding-bottom: 6rem;
  }
`,Nm=dr.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 3rem;
  padding: 12px;
  box-shadow: 0 10px 20px rgba(148, 163, 184, 0.1);
  background: rgb(14, 15, 16);
  margin-top: -5.2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-top: -4.5rem;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-top: -4rem;
  }

  svg, img, span {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }
`,Dm=dr(hc.div)`
  background: rgb(14, 15, 16);
  border-radius: 1rem;
  padding: 2.5rem;
  position: relative;
  z-index: 2;
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.75rem;
  }

  &:hover {
  transform: translateY(-5px);
  border-color: #2563eb;
  box-shadow: 0 0 30px rgba(37, 99, 235, 0.0);

  ${Nm} {
    transform: translateY(-5px) scale(1.1) ;
    border-color: #2563eb;
    box-shadow: 0 0 30px rgba(37, 99, 235, 0.0);
  }
}

`,Im=dr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`,Mm=dr.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 5px;
  text-align: center;
  display: -webkit-box;
   -webkit-line-clamp: 3;
     -webkit-box-orient: vertical;
     overflow: hidden;  

  @media (max-width: 768px) {
    font-size: 0.95rem;
    -webkit-line-clamp: 4;
  }
`,$m=dr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,Fm=dr.li`
  color: #94a3b8;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  &::before {
    content: '•';
    color: #2563eb;
  }
`,Bm=dr(Pe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #2563eb;
  border: 1px solid #2563eb;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    padding: 0.6rem 1.25rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: #2563eb;
    color: #000000;
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      width: 14px;
      height: 14px;
    }
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,Um=(dr.div`
  color: #ef4444;
  text-align: center;
  padding: 1rem;
  font-size: 1.1rem;
`,dr.span`
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: scaleX(0.7);
    transition: all 0.3s ease;
  }  
`),Vm=[{_id:"1",title:"Frontend Development",description:"Creating responsive and performant user interfaces using modern frameworks like React, Next.js and Vue.",icon:"\ud83d\udcbb",features:["Responsive Web Design","Interactive UI/UX"],slug:"frontend-development"},{_id:"2",title:"Backend Development",description:"Building robust, scalable server-side applications and APIs with Node.js, Express, and MongoDB.",icon:"\u2699\ufe0f",features:["RESTful API Development","Database Design"],slug:"backend-development"},{_id:"3",title:"SEO Optimization",description:"Improving your website's visibility in search results to drive more organic traffic.",icon:"\ud83d\udd0d",features:["Technical SEO Audits","On-page Optimization"],slug:"seo-optimization"},{_id:"4",title:"Performance Optimization",description:"Enhancing the speed and performance of your web applications for better user experience.",icon:"\u26a1",features:["Core Web Vitals Optimization","Lighthouse Score Improvement"],slug:"performance-optimization"}],Wm=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0),[i,a]=(0,n.useState)(null);if((0,n.useEffect)((()=>{(async()=>{try{o(!0),a(null);const e=await Jh.get("/api/services");if(!e.data.success)throw new Error(e.data.message||"Failed to fetch services");t(e.data.data||[])}catch(e){console.error("Error fetching services:",e),a(e.message||"Failed to load services")}finally{o(!1)}})()}),[]),r)return(0,Ud.jsx)(Rm,{children:(0,Ud.jsx)(lh,{})});if(i)return(0,Ud.jsxs)(Rm,{children:[(0,Ud.jsxs)(Om,{children:[(0,Ud.jsxs)("h1",{children:["What I ",(0,Ud.jsx)(Um,{children:"Offer"})]}),(0,Ud.jsx)("p",{children:"Explore our comprehensive range of services designed to meet your business needs"})]}),(0,Ud.jsx)(zm,{children:Vm.map(((e,t)=>(0,Ud.jsxs)(Dm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:[(0,Ud.jsx)(Nm,{children:(0,Ud.jsx)("span",{children:e.icon})}),(0,Ud.jsx)(Im,{children:e.title}),(0,Ud.jsx)(Mm,{children:e.description}),e.features&&(0,Ud.jsx)($m,{children:e.features.map(((e,t)=>(0,Ud.jsx)(Fm,{children:e},t)))}),(0,Ud.jsxs)(Bm,{to:`/services/${e.slug}`,state:{title:e.title,description:e.description,slug:e.slug,icon:e.icon,features:e.features},children:[(0,Ud.jsx)("span",{children:"Learn More"}),(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M5 12h14"}),(0,Ud.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]},e._id)))}),(0,Ud.jsx)(Am,{})]});const s=e.length>0?e:Vm;return(0,Ud.jsxs)(Rm,{children:[(0,Ud.jsxs)(Om,{children:[(0,Ud.jsxs)("h1",{children:["What I ",(0,Ud.jsx)(Um,{children:"Offer"})]}),(0,Ud.jsx)("p",{children:"Explore our comprehensive range of services designed to meet your business needs"})]}),(0,Ud.jsx)(zm,{children:s.map(((e,t)=>(0,Ud.jsxs)(Dm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:[(0,Ud.jsx)(Nm,{children:e.icon&&(e.icon.startsWith("http")?(0,Ud.jsx)("img",{src:e.icon,alt:e.title}):(0,Ud.jsx)("span",{children:e.icon}))}),(0,Ud.jsx)(Im,{children:e.title}),(0,Ud.jsx)(Mm,{children:e.description}),e.features&&(0,Ud.jsx)($m,{children:e.features.map(((e,t)=>(0,Ud.jsx)(Fm,{children:e},t)))}),(0,Ud.jsxs)(Bm,{to:`/services/${e.slug}`,state:{title:e.title,description:e.description,slug:e.slug,icon:e.icon,features:e.features},children:[(0,Ud.jsx)("span",{children:"Learn More"}),(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M5 12h14"}),(0,Ud.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]},e._id)))}),(0,Ud.jsx)(Am,{})]})},Hm={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.3}}},qm=()=>(n.useEffect((()=>{"scrollBehavior"in document.documentElement.style?window.scrollTo({top:0,behavior:"auto"}):window.scrollTo(0,0)}),[]),(0,Ud.jsxs)(hc.div,{initial:"initial",animate:"animate",exit:"exit",variants:Hm,className:"relative",children:[(0,Ud.jsx)(uh,{}),(0,Ud.jsx)(Oh,{}),(0,Ud.jsx)(Kh,{}),(0,Ud.jsx)(pf,{}),(0,Ud.jsx)(Wm,{}),(0,Ud.jsx)(Lm,{})]}));var Ym={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xm=n.createContext&&n.createContext(Ym),Km=["attr","size","title"];function Gm(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Qm(){return Qm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qm.apply(this,arguments)}function Jm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Zm(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Jm(Object(r),!0).forEach((function(t){eg(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jm(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function eg(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function tg(e){return e&&e.map(((e,t)=>n.createElement(e.tag,Zm({key:t},e.attr),tg(e.child))))}function rg(e){return t=>n.createElement(ng,Qm({attr:Zm({},e.attr)},t),tg(e.child))}function ng(e){var t=t=>{var r,{attr:o,size:i,title:a}=e,s=Gm(e,Km),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",Qm({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:Zm(Zm({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==Xm?n.createElement(Xm.Consumer,null,(e=>t(e))):t(Ym)}function og(e){return rg({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function ig(e){return rg({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function ag(e){return rg({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function sg(e){return rg({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}const lg=Ld.create({baseURL:"http://localhost:5001/api",timeout:5e3,headers:{"Content-Type":"application/json"}}),cg=dr.div`
  min-height: 100vh;
  position: relative;
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: var(--color-background);
  color: var(--color-text);
`,ug=dr.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,dg=dr.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-weight: 700;
  text-align: center;
`,pg=dr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,hg=dr.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,fg=dr.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,mg=dr.p`
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
`,gg=dr.span`
  color: var(--color-primary);
  font-weight: 600;
`,vg=dr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: #ef4444;
  text-align: center;
  padding: 2rem;
`,yg=dr.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
  margin: 4rem 0;
  opacity: 0.3;
`,xg=dr.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-weight: 700;
  text-align: center;
`,bg=dr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`,wg=dr.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  height: 100%;
  min-height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,kg=dr.div`
  margin-top: 4rem;
  width: 100%;
`,jg=dr(xg)`
  margin-top: 2rem;
`,Sg=dr.div`
  display: grid;
  grid-template-columns: ${e=>"left"===e.imagePosition?"250px 1fr":"1fr 250px"};
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem 0;
  background: var(--color-background);
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,Eg=dr.div`
  order: ${e=>"right"===e.imagePosition?2:1};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    order: 1;
  }
`,Cg=dr.div`
  width: 100%;
  height: 250px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Tg=dr.div`
  order: ${e=>"right"===e.imagePosition?1:2};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    order: 2;
  }
`,_g=dr.h3`
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
`,Pg=dr.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
`,Lg=dr.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`,Ag=dr.a`
  color: var(--color-text);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  
  &:hover {
    color: var(--color-primary);
    opacity: 1;
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }
`,Rg=()=>{const[e,t]=(0,n.useState)(null),[r,o]=(0,n.useState)(null),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null);(0,n.useEffect)((()=>{(async()=>{try{a(!0),l(null);const r=await lg.get("/about").catch((e=>(console.error("Error fetching about data:",e),{data:null})));t(r.data||{title:"About Us",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",paragraphs:["At Techveda, we believe in the power of technology to transform businesses and enhance lives. Founded in 2020, our journey began with a simple mission: to create digital solutions that make a difference.","We're a team of passionate designers, developers, and strategists who thrive on solving complex problems through innovative technology. With expertise spanning web development, mobile applications, UI/UX design, and digital marketing, we bring a comprehensive approach to every project.","What sets us apart is our commitment to understanding your unique needs. We don't just build products; we craft experiences that align with your business goals and resonate with your audience. Our collaborative process ensures that your vision is at the heart of everything we create."]});try{const e=await lg.get("/founders");o(e.data)}catch(e){console.log("Using default founders data"),o({title:"Meet Our Founders",founders:[{name:"John Smith",bio:"Founder & CEO with over 10 years of experience in software development and team leadership. Passionate about creating innovative solutions that make a difference.",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",imagePosition:"left",social:{github:"https://github.com",portfolio:"https://portfolio.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"}},{name:"Jane Doe",bio:"Creative Director & Co-founder specializing in UI/UX design. Brings a perfect blend of aesthetics and functionality to every project.",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",imagePosition:"right",social:{github:"https://github.com",portfolio:"https://portfolio.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"}}]})}}catch(e){console.error("Error fetching data:",e),l(e.message||"Failed to load content")}finally{a(!1)}})()}),[]);const c=(e,t)=>e?e.map(((e,r)=>{const n=(null===t||void 0===t?void 0:t.filter((e=>e.paragraphIndex===r)))||[];if(0===n.length)return(0,Ud.jsx)(mg,{children:e},r);let o=e;const i=[];let a=0;const s=[...n].sort(((e,t)=>o.indexOf(e.text)-o.indexOf(t.text)));for(const t of s){const e=o.indexOf(t.text,a);-1!==e&&(e>a&&i.push(o.substring(a,e)),i.push((0,Ud.jsx)(gg,{children:t.text},`highlight-${r}-${e}`)),a=e+t.text.length)}return a<o.length&&i.push(o.substring(a)),(0,Ud.jsx)(mg,{children:i},r)})):null;return i?(0,Ud.jsx)(cg,{children:(0,Ud.jsx)(ug,{children:(0,Ud.jsx)(lh,{})})}):s?(0,Ud.jsx)(cg,{children:(0,Ud.jsx)(ug,{children:(0,Ud.jsx)(vg,{children:s})})}):e?(0,Ud.jsx)(cg,{children:(0,Ud.jsxs)(ug,{children:[(0,Ud.jsx)(dg,{children:e.title||"About Us"}),(0,Ud.jsxs)(pg,{children:[(0,Ud.jsx)(hg,{children:(0,Ud.jsx)("img",{src:e.image||"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"About Techveda",onError:e=>{e.target.onerror=null,e.target.src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}})}),(0,Ud.jsx)(fg,{children:c(e.paragraphs,e.highlights)})]}),e.additionalParagraphs&&e.additionalParagraphs.length>0&&(0,Ud.jsxs)(Ud.Fragment,{children:[(0,Ud.jsx)(yg,{}),(0,Ud.jsx)(xg,{children:"Our Story"}),(0,Ud.jsxs)(bg,{children:[(0,Ud.jsx)(fg,{children:c(e.additionalParagraphs,e.additionalHighlights)}),(0,Ud.jsx)(wg,{children:(0,Ud.jsx)("img",{src:e.sideImage||e.image||"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"About Techveda Side",onError:e=>{e.target.onerror=null,e.target.src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}})})]})]}),r&&r.founders&&r.founders.length>0&&(0,Ud.jsxs)(kg,{children:[(0,Ud.jsx)(yg,{}),(0,Ud.jsx)(jg,{children:r.title||"Meet Our Founders"}),r.founders.map(((e,t)=>{var r,n,o,i;return(0,Ud.jsxs)(Sg,{imagePosition:e.imagePosition||"left",children:[(0,Ud.jsxs)(Eg,{imagePosition:e.imagePosition||"left",children:[(0,Ud.jsx)(Cg,{children:(0,Ud.jsx)("img",{src:e.image,alt:e.name,onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/250"}})}),(0,Ud.jsxs)(Lg,{children:[(null===(r=e.social)||void 0===r?void 0:r.github)&&(0,Ud.jsx)(Ag,{href:e.social.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",children:(0,Ud.jsx)(og,{})}),(null===(n=e.social)||void 0===n?void 0:n.portfolio)&&(0,Ud.jsx)(Ag,{href:e.social.portfolio,target:"_blank",rel:"noopener noreferrer","aria-label":"Portfolio Website",children:(0,Ud.jsx)(sg,{})}),(null===(o=e.social)||void 0===o?void 0:o.linkedin)&&(0,Ud.jsx)(Ag,{href:e.social.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",children:(0,Ud.jsx)(ag,{})}),(null===(i=e.social)||void 0===i?void 0:i.instagram)&&(0,Ud.jsx)(Ag,{href:e.social.instagram,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram Profile",children:(0,Ud.jsx)(ig,{})})]})]}),(0,Ud.jsxs)(Tg,{imagePosition:e.imagePosition||"left",children:[(0,Ud.jsx)(_g,{children:e.name}),(0,Ud.jsx)(Pg,{children:e.bio})]})]},t)}))]})]})}):(0,Ud.jsx)(cg,{children:(0,Ud.jsx)(ug,{children:(0,Ud.jsx)(vg,{children:"No about content available."})})})},Og=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0rem;
  padding-bottom: 10rem;
`,zg=dr.span`
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: scaleX(0.7);
    transition: all 0.3s ease;
  }  
`,Ng=dr.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${e=>e.theme.colors.textSecondary};
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`,Dg=dr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: rem;
  padding-bottom: 10rem;
`,Ig=dr(hc.div)`
 background: #0a0a0a;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(66, 153, 225, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  isolation: isolate;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(66, 153, 225, 0.1);
    border-color: rgba(66, 153, 225, 0.2);
  }
`,Mg=dr.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,$g=dr.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Fg=dr.h3`
  color:linear-gradient(135deg, #4299e1, #38b2ac);
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  ${Ig}:hover & {
    color: #4299e1;
  }
`,Bg=dr.p`
  color: #cbd5e0;
  font-size: 1.1rem;
  margin-bottom: 1.75rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 5.1rem;
  transition: color 0.3s ease;
`,Ug=dr.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  
  & > .scroll-track {
    display: inline-flex;
    white-space: nowrap;
    animation: scroll 15s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`,Vg=dr.span`
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right:10px;
`,Wg=dr.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,Hg=dr(Pe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.8rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.3rem;
  font-weight: 500;
  transition: background 0.2s ease;
  margin-left:auto;

  &:hover {
    background: #2563eb;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,qg=dr.a`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;

  svg {
    width: 30px;
    height: 30px;
  }
  span{
    padding-left:10px;
  }

  &:hover {
    color: #3b82f6;
  }
`,Yg=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0),[i,a]=(0,n.useState)(null);(0,n.useEffect)((()=>{s()}),[]);const s=async()=>{try{const e=await Ld.get("/api/projects");t(e.data),a(null)}catch(i){console.error("Error fetching projects:",i),a("Failed to fetch projects"),t([])}finally{o(!1)}};return r?(0,Ud.jsx)(Og,{children:(0,Ud.jsx)(lh,{})}):i?(0,Ud.jsx)(Og,{children:(0,Ud.jsx)("div",{className:"error-message",children:i})}):(0,Ud.jsxs)(Og,{children:[(0,Ud.jsxs)(Ng,{children:[(0,Ud.jsxs)("h1",{children:["All ",(0,Ud.jsx)(zg,{children:"Projects"})]}),(0,Ud.jsx)("p",{children:"Explore our portfolio of innovative and impactful projects"})]}),(0,Ud.jsx)(Dg,{children:e.map(((e,t)=>(0,Ud.jsxs)(Ig,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,Ud.jsx)(Mg,{src:e.mainimage,alt:e.title}),(0,Ud.jsxs)($g,{children:[(0,Ud.jsx)(Fg,{children:e.title}),(0,Ud.jsx)(Bg,{children:e.shortDescription}),(0,Ud.jsx)(Ug,{children:(0,Ud.jsx)("div",{className:"scroll-track",children:[...e.technologies,...e.technologies].map(((e,t)=>(0,Ud.jsx)(Vg,{children:e},t)))})}),(0,Ud.jsxs)(Wg,{children:[(0,Ud.jsxs)(qg,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),(0,Ud.jsx)("span",{children:"GitHub"})]}),(0,Ud.jsxs)(Hg,{to:`/projects/${e._id}`,children:["View Details",(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})]})]},e._id)))}),(0,Ud.jsx)(Am,{})]})},Xg=dr(hc.div)`
  
  position: relative;
  overflow-x: hidden;
  z-index: 1;
  padding: 1rem 1rem;
`,Kg={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.3}}},Gg=()=>(n.useEffect((()=>{window.scrollTo({top:0,behavior:"auto"})}),[]),(0,Ud.jsx)(Xg,{variants:Kg,initial:"initial",animate:"animate",exit:"exit",children:(0,Ud.jsx)(Lm,{})})),Qg=dr(hc.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`,Jg=dr(hc.h1)`
  font-size: clamp(6rem, 20vw, 15rem);
  line-height: 1;
  margin: 0;
  background: linear-gradient(to right, ${e=>e.theme.colors.primary}, ${e=>e.theme.colors.secondary}, ${e=>e.theme.colors.tertiary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
`,Zg=dr(hc.h2)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin: 1rem 0 2rem;
  text-transform: uppercase;
`,ev=dr(hc.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,tv=dr(hc.div)`
  a {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.text};
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: transparent;
      outline: 2px solid ${e=>e.theme.colors.primary};
    }
  }
`,rv={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.5}}},nv=()=>(0,Ud.jsxs)(Qg,{variants:rv,initial:"initial",animate:"animate",exit:"exit",children:[(0,Ud.jsx)(Jg,{initial:{opacity:0,y:50},animate:{opacity:.8,y:0},transition:{duration:.8},children:"404"}),(0,Ud.jsx)(Zg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Page Not Found"}),(0,Ud.jsx)(ev,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}),(0,Ud.jsx)(tv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,Ud.jsx)(Pe,{to:"/",className:"hoverable",children:"Back to Homepage"})})]}),ov=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 0rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`,iv=dr.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 2.8rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #a0aec0;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      max-width: 90%;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`,av=dr.span`
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: scaleX(0.7);
    transition: all 0.3s ease;
  }  
`,sv=dr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 2rem;
  position: relative;
  padding-bottom: 10rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding-bottom: 6rem;
  }

  @media (max-width: 480px) {
    gap: 3rem;
    padding-bottom: 4rem;
  }
`,lv=dr.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 3rem;
  padding: 12px;
  box-shadow: 0 10px 20px rgba(148, 163, 184, 0.1);
  background: rgb(14, 15, 16);
  margin-top: -5.2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-top: -4.5rem;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-top: -4rem;
    padding: 10px;
  }

  svg, img, span {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`,cv=dr(hc.div)`
  background: rgb(14, 15, 16);
  border-radius: 1rem;
  padding: 2.5rem;
  position: relative;
  z-index: 2;
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.75rem;
    border-radius: 0.75rem;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #2563eb;
    box-shadow: 0 0 30px rgba(37, 99, 235, 0.0);

    ${lv} {
      transform: translateY(-5px) scale(1.1);
      border-color: #2563eb;
      box-shadow: 0 0 30px rgba(37, 99, 235, 0.0);
    }
  }
`,uv=dr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`,dv=dr.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 5px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    -webkit-line-clamp: 4;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`,pv=dr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
  }
`,hv=dr.li`
  color: #94a3b8;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
  }

  &::before {
    content: '•';
    color: #2563eb;
  }
`,fv=dr(Pe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #2563eb;
  border: 1px solid #2563eb;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  &:hover {
    background: #2563eb;
    color: #000000;
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 480px) {
      width: 12px;
      height: 12px;
    }
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,mv=[{_id:"1",title:"Frontend Development",description:"Creating responsive and performant user interfaces using modern frameworks like React, Next.js and Vue.",icon:"\ud83d\udcbb",features:["Responsive Web Design","Interactive UI/UX"],slug:"frontend-development"},{_id:"2",title:"Backend Development",description:"Building robust, scalable server-side applications and APIs with Node.js, Express, and MongoDB.",icon:"\u2699\ufe0f",features:["RESTful API Development","Database Design"],slug:"backend-development"},{_id:"3",title:"SEO Optimization",description:"Improving your website's visibility in search results to drive more organic traffic.",icon:"\ud83d\udd0d",features:["Technical SEO Audits","On-page Optimization"],slug:"seo-optimization"},{_id:"4",title:"Performance Optimization",description:"Enhancing the speed and performance of your web applications for better user experience.",icon:"\u26a1",features:["Core Web Vitals Optimization","Lighthouse Score Improvement"],slug:"performance-optimization"}],gv=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0),[i,a]=(0,n.useState)(null);if((0,n.useEffect)((()=>{(async()=>{try{o(!0),a(null);const e=await Jh.get("/api/services");if(!e.data.success)throw new Error(e.data.message||"Failed to fetch services");t(e.data.data)}catch(e){console.error("Error fetching services:",e),a(e.message||"Failed to load services")}finally{o(!1)}})()}),[]),r)return(0,Ud.jsx)(ov,{children:(0,Ud.jsx)(lh,{})});if(i)return(0,Ud.jsxs)(ov,{children:[(0,Ud.jsxs)(iv,{children:[(0,Ud.jsxs)("h1",{children:["What I ",(0,Ud.jsx)(av,{children:"Offer"})]}),(0,Ud.jsx)("p",{children:"Explore our comprehensive range of services designed to meet your business needs"})]}),(0,Ud.jsx)(sv,{children:mv.map(((e,t)=>(0,Ud.jsxs)(cv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:[(0,Ud.jsx)(lv,{children:(0,Ud.jsx)("span",{children:e.icon})}),(0,Ud.jsx)(uv,{children:e.title}),(0,Ud.jsx)(dv,{children:e.description}),e.features&&(0,Ud.jsx)(pv,{children:e.features.map(((e,t)=>(0,Ud.jsx)(hv,{children:e},t)))}),(0,Ud.jsxs)(fv,{to:`/services/${e.slug}`,state:{title:e.title,description:e.description,slug:e.slug,icon:e.icon,features:e.features},children:[(0,Ud.jsx)("span",{children:"Learn More"}),(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M5 12h14"}),(0,Ud.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]},e._id)))}),(0,Ud.jsx)(Am,{})]});const s=e.length>0?e:mv;return(0,Ud.jsxs)(ov,{children:[(0,Ud.jsxs)(iv,{children:[(0,Ud.jsxs)("h1",{children:["What I ",(0,Ud.jsx)(av,{children:"Offer"})]}),(0,Ud.jsx)("p",{children:"Comprehensive solutions to elevate your digital presence"})]}),(0,Ud.jsx)(sv,{children:s.map((e=>(0,Ud.jsxs)(cv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,Ud.jsx)(lv,{children:e.icon&&(e.icon.startsWith("http")?(0,Ud.jsx)("img",{src:e.icon,alt:e.title}):(0,Ud.jsx)("span",{children:e.icon}))}),(0,Ud.jsx)(uv,{children:e.title}),(0,Ud.jsx)(dv,{children:e.description}),e.features&&(0,Ud.jsx)(pv,{children:e.features.map(((e,t)=>(0,Ud.jsx)(hv,{children:e},t)))}),(0,Ud.jsxs)(fv,{to:`/services/${e.slug}`,state:{title:e.title,description:e.description,slug:e.slug,icon:e.icon,features:e.features},children:[(0,Ud.jsx)("span",{children:"Learn More"}),(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M5 12h14"}),(0,Ud.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]},e._id)))}),(0,Ud.jsx)(Am,{})]})},vv=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`,yv=dr(Pe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.colors.primaryDark};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,xv=dr.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: ${e=>e.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .meta {
    color: ${e=>e.theme.colors.textSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1rem;
    flex-wrap: wrap;
  }
`,bv=dr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`,wv=dr.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
`,kv=dr.img`
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 0.5rem;
`,jv=dr(hc.div)`
  display: inline-block;
  background: #2563eb;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.4em 1.2em;
  margin: 1.6rem 0;
  letter-spacing: 0.05em;
`,Sv=dr(hc.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1.2rem;
  line-height: 1.1;
`,Ev=dr(hc.h2)`
  font-size: 3rem;
  font-weight: 1200;
  background:linear-gradient(80deg, #2563eb , #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 2.5rem;
`,Cv=dr(hc.div)`
  display: grid;
   grid-template-columns: 650px 200px 220px; /* Column 1: fixed 300px, Column 2: flexible, Column 3: fixed 200px */
  gap: 5rem;
  margin: 2rem 0 0 0;
`,Tv=dr(hc.div)`

  

`,_v=dr.div`
  color: #2563eb;
  font-weight: 700;
  margin-bottom: 0.7rem;
  letter-spacing: 0.04em;
  font-size: 1.1rem;
`,Pv=dr(hc.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin:0 0 1rem 0;
`,Lv=dr.div`
  background: #2563eb22;
  color: #2563eb;
  padding: 0.5rem 1.1rem;
  border-radius: 1.2rem;
  font-size: 1rem;
  font-weight: 1200;
`,Av=dr(hc.a)`
  color: #2563eb;
  text-decoration: underline;
  font-weight: 400;
  margin-right: 1.2rem;
  font-size: 1.3rem;
  &:hover {
    color: #fff;
    background: #2563eb;
    text-decoration: none;
    border-radius: 0.3em;
    padding: 0.1em 0.4em;
    transition: all 0.2s;
  }
`,Rv=dr(hc.div)`
 
  padding: 2rem 0rem;
  
`,Ov=dr.h3`
  color: #2563eb;
  font-size: 1.4rem;
  font-weight: 1200;
  margin-bottom: 1.2rem;
`,zv=()=>{const{id:e}=ee(),[t,r]=(0,n.useState)(null),[o,i]=(0,n.useState)(!0),[a,s]=(0,n.useState)(null);(0,n.useEffect)((()=>{l()}),[e]);const l=async()=>{try{const t=await Ld.get(`/api/projects/${e}`);r(t.data),s(null)}catch(a){console.error("Error fetching project:",a),s("Failed to fetch project details"),r(null)}finally{i(!1)}};return o?(0,Ud.jsx)(vv,{children:(0,Ud.jsx)(lh,{})}):a||!t?(0,Ud.jsx)(vv,{children:(0,Ud.jsxs)(xv,{children:[(0,Ud.jsx)("h1",{children:"Project not found"}),(0,Ud.jsxs)(yv,{to:"/projects",children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Projects"]})]})}):(0,Ud.jsxs)(vv,{children:[(0,Ud.jsxs)(yv,{to:"/projects",children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Projects"]}),t.mainimage&&(0,Ud.jsx)(wv,{src:t.mainimage,alt:t.title}),(0,Ud.jsxs)(jv,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:["PUBLISHED IN ",t.publishedYear||"2023"]}),(0,Ud.jsx)(Sv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.2},children:t.title}),(0,Ud.jsx)(Ev,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.3},children:t.subtitle}),(0,Ud.jsxs)(Cv,{initial:"hidden",animate:"visible",variants:{hidden:{},visible:{transition:{staggerChildren:.18,delayChildren:.4}}},children:[(0,Ud.jsxs)(Tv,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7}}},children:[(0,Ud.jsx)("div",{style:{color:"#fff",fontSize:"1.1rem"},children:t.shortDescription}),(0,Ud.jsxs)(hc.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:1},style:{marginTop:"2rem"},children:[t.officialWebsiteLink&&(0,Ud.jsx)(Av,{href:t.officialWebsiteLink,target:"_blank",rel:"noopener noreferrer",children:"Official Website \u2197"}),t.gitHubLink&&(0,Ud.jsx)(Av,{href:t.gitHubLink,target:"_blank",rel:"noopener noreferrer",children:"GitHub \u2197"})]})]}),(0,Ud.jsxs)(Tv,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7}}},children:[(0,Ud.jsx)(_v,{children:"SERVICES"}),t.services&&t.services.map(((e,t)=>(0,Ud.jsx)("div",{style:{color:"#fff",marginBottom:"0.5rem"},children:e},t)))]}),(0,Ud.jsxs)(Tv,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7}}},children:[(0,Ud.jsx)(_v,{children:"INDUSTRIES"}),t.industries&&t.industries.map(((e,t)=>(0,Ud.jsx)("div",{style:{color:"#fff",marginBottom:"0.5rem"},children:e},t)))]})]}),(0,Ud.jsxs)(Rv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:1.2},children:[(0,Ud.jsx)(Ov,{children:"Technical Details"}),(0,Ud.jsx)("div",{style:{color:"#fff",fontSize:"1.08rem",lineHeight:1.7},children:t.technicalDescription})]}),t.technologies&&t.technologies.length>0&&(0,Ud.jsx)(Pv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.8},children:t.technologies.map(((e,t)=>(0,Ud.jsx)(Lv,{children:e},t)))}),(0,Ud.jsxs)(Rv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:1.3},children:[(0,Ud.jsx)(Ov,{children:"Learning Outcomes"}),(0,Ud.jsx)("div",{style:{color:"#fff",fontSize:"1.08rem",lineHeight:1.7},children:t.learningDescription})]}),t.secondaryimage&&(0,Ud.jsx)(bv,{children:(0,Ud.jsx)(kv,{src:t.secondaryimage,alt:`${t.title} - Additional view`})}),(0,Ud.jsx)(Am,{})]})},Nv=dr.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.colors.darkBackground};
  padding: 2rem;
  position: relative;
  overflow: hidden;
`,Dv=dr.div`
  position: absolute;
  top: -50%;
  right: -10%;
  width: 80vw;
  height: 150vh;
  background: ${e=>e.theme.gradients.primary};
  transform: rotate(-12deg);
  opacity: 0.05;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 0;
`,Iv=dr.div`
  position: absolute;
  bottom: -15%;
  left: -5%;
  width: 40vw;
  height: 40vw;
  background: ${e=>e.theme.colors.primary};
  border-radius: 50%;
  opacity: 0.03;
  z-index: 0;
`,Mv=dr(hc.div)`
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 450px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`,$v=dr.div`
  padding: 2.5rem 2.5rem 1.5rem;
  text-align: center;
`,Fv=dr.h1`
  color: ${e=>e.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
`,Bv=dr.p`
  color: ${e=>e.theme.colors.gray};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,Uv=dr.div`
  width: 60px;
  height: 4px;
  background: ${e=>e.theme.gradients.primary};
  margin: 0 auto;
  border-radius: 4px;
`,Vv=dr.form`
  padding: 1.5rem 2.5rem 2.5rem;
`,Wv=dr.div`
  position: relative;
  margin-bottom: 1.75rem;
`,Hv=dr.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
`,qv=dr.input`
  width: 100%;
  padding: 0.9rem;
  padding-left: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`,Yv=dr.div`
  position: absolute;
  left: 12px;
  top: 39px;
  color: ${e=>e.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 18px;
    height: 18px;
  }
`,Xv=dr(hc.button)`
  width: 100%;
  padding: 0.9rem;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
  margin-top: 0.5rem;
  
  &:hover {
    background: ${e=>e.theme.colors.secondary};
  }
  
  &:disabled {
    background: ${e=>e.theme.colors.gray};
    cursor: not-allowed;
    opacity: 0.7;
  }
`,Kv=dr(hc.div)`
  color: ${e=>e.theme.colors.error};
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 0.75rem;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 8px;
  font-size: 0.9rem;
`,Gv=dr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,Qv=dr.label`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
`,Jv=dr.input`
  margin-right: 0.5rem;
`,Zv=dr.span`
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
`,ey=dr(hc.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
`,ty=dr(Pe)`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.text};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: ${e=>e.theme.colors.primary};
  }
  
  svg {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
`,ry=()=>{const[e,t]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),[i,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[c,u]=(0,n.useState)(""),{login:d}=Hd(),p=Z();return(0,Ud.jsxs)(Nv,{children:[(0,Ud.jsx)(Dv,{}),(0,Ud.jsx)(Iv,{}),(0,Ud.jsx)(ey,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.5,duration:.3},children:(0,Ud.jsxs)(ty,{to:"/",children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Website"]})}),(0,Ud.jsxs)(Mv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,Ud.jsxs)($v,{children:[(0,Ud.jsx)(Fv,{children:"Admin Login"}),(0,Ud.jsx)(Bv,{children:"Sign in to access your dashboard"}),(0,Ud.jsx)(Uv,{})]}),(0,Ud.jsxs)(Vv,{onSubmit:async t=>{t.preventDefault(),l(!0),u("");try{var n;console.log("Attempting login with:",{email:e,rememberMe:i});const t=await d(e,r,i);console.log("Login response:",t),"admin"===(null===t||void 0===t||null===(n=t.user)||void 0===n?void 0:n.role)?p("/admin"):u("Access denied. Admin privileges required.")}catch(o){console.error("Login error:",o),u(o.message||"Login failed. Please check your credentials.")}finally{l(!1)}},children:[c&&(0,Ud.jsx)(Kv,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.3},children:c}),(0,Ud.jsxs)(Wv,{children:[(0,Ud.jsx)(Hv,{htmlFor:"email",children:"Email Address"}),(0,Ud.jsx)(Yv,{children:(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),(0,Ud.jsx)(qv,{type:"email",id:"email",value:e,onChange:e=>t(e.target.value),placeholder:"your@email.com",required:!0})]}),(0,Ud.jsxs)(Wv,{children:[(0,Ud.jsx)(Hv,{htmlFor:"password",children:"Password"}),(0,Ud.jsx)(Yv,{children:(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),(0,Ud.jsx)(qv,{type:"password",id:"password",value:r,onChange:e=>o(e.target.value),placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",required:!0})]}),(0,Ud.jsx)(Gv,{children:(0,Ud.jsxs)(Qv,{children:[(0,Ud.jsx)(Jv,{type:"checkbox",id:"rememberMe",checked:i,onChange:e=>a(e.target.checked)}),(0,Ud.jsx)(Zv,{children:"Remember me for 30 days"})]})}),(0,Ud.jsx)(Xv,{type:"submit",disabled:s,whileHover:{scale:1.02},whileTap:{scale:.98},children:s?"Authenticating...":"Sign In"})]})]})]})},ny=dr.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,oy=dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: ${e=>e.theme.colors.primary};
    }
  }
`,iy=dr(hc.button)`
  background: ${e=>e.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`,ay=dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`,sy=dr(hc.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`,ly=dr.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${sy}:hover & {
    transform: scale(1.05);
  }
`,cy=dr.div`
  padding: 1.5rem;
`,uy=dr.h3`
  color: ${e=>e.theme.colors.text};
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${e=>e.theme.colors.primary};
  }
`,dy=dr.h4`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 0.75rem;
`,py=dr.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,hy=dr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,fy=dr.span`
  background: ${e=>e.theme.colors.primary}15;
  color: ${e=>e.theme.colors.primary};
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
  }
`,my=dr.a`
  background: ${e=>e.theme.colors.primary}15;
  color: ${e=>e.theme.colors.primary};
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.primary}25;
    transform: translateY(-2px);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,gy=dr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,vy=dr.span`
  background: ${e=>e.theme.colors.primary}15;
  color: ${e=>e.theme.colors.primary};
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
  }
`,yy=dr.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,xy=dr(hc.button)`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &.edit {
    background: ${e=>e.theme.colors.primary}15;
    color: ${e=>e.theme.colors.primary};
  }

  &.delete {
    background: ${e=>e.theme.colors.error}15;
    color: ${e=>e.theme.colors.error};
  }

  &:hover {
    transform: translateY(-2px);
  }
`,by=dr(hc.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,wy=dr(hc.div)`
  background: ${e=>e.theme.colors.background};
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,ky=dr.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,jy=dr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Sy=dr.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
`,Ey=dr.input`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 0.5rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
`,Cy=dr.textarea`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 0.5rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`,Ty=dr.button`
  background: ${e=>e.theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,_y=()=>{const{user:e}=Hd(),[t,r]=(0,n.useState)([]),[o,i]=(0,n.useState)(!0),[a,s]=(0,n.useState)(!1),[l,c]=(0,n.useState)(null),[u,d]=(0,n.useState)({title:"",subtitle:"",mainimage:"",secondaryimage:"",publishedYear:"",shortDescription:"",officialWebsiteLink:"",gitHubLink:"",services:"",industries:"",technicalDescription:"",learningDescription:"",technologies:""}),[p,h]=(0,n.useState)(!1),{addToast:f}=Gd(),m=async()=>{try{i(!0);const e={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}},t=await Ld.get("/api/projects",e);r(t.data)}catch(a){var e,t,n,o;console.error("Error fetching projects:",a);const r=(null===(e=a.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||(null===(n=a.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.error)||"Error fetching projects";f(r,"error")}finally{i(!1)}};(0,n.useEffect)((()=>{m()}),[]);const g=e=>{const{name:t,value:r}=e.target;d((e=>({...e,[t]:r})))};return o?(0,Ud.jsx)(ny,{children:"Loading..."}):(0,Ud.jsxs)(ny,{children:[(0,Ud.jsxs)(oy,{children:[(0,Ud.jsxs)("h1",{children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),"Project Management"]}),(0,Ud.jsxs)(iy,{onClick:()=>{c(null),d({title:"",subtitle:"",mainimage:"",secondaryimage:"",publishedYear:"",shortDescription:"",officialWebsiteLink:"",gitHubLink:"",services:"",industries:"",technicalDescription:"",learningDescription:"",technologies:""}),s(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Ud.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add New Project"]})]}),(0,Ud.jsx)(ay,{children:t.map((e=>{return(0,Ud.jsxs)(sy,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,Ud.jsx)(ly,{src:(t=e.mainimage,t?t.startsWith("http://")||t.startsWith("https://")?t:`http://localhost:5001${t}`:"https://via.placeholder.com/400x300?text=No+Image"),alt:e.title}),(0,Ud.jsxs)(cy,{children:[(0,Ud.jsxs)(uy,{children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),e.title]}),e.subtitle&&(0,Ud.jsx)(dy,{children:e.subtitle}),(0,Ud.jsx)(py,{children:e.description}),(0,Ud.jsxs)(hy,{children:[e.date&&(0,Ud.jsxs)(fy,{children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Ud.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),e.date]}),e.githubLink&&(0,Ud.jsxs)(fy,{children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),"GitHub"]}),e.websiteLink&&(0,Ud.jsxs)(my,{href:e.websiteLink,target:"_blank",rel:"noopener noreferrer",children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),(0,Ud.jsx)("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),"Visit Website"]})]}),(0,Ud.jsx)(gy,{children:e.technologies.map((e=>(0,Ud.jsxs)(vy,{children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),e]},e)))}),(0,Ud.jsxs)(yy,{children:[(0,Ud.jsxs)(xy,{className:"edit",onClick:()=>(e=>{c(e),d({title:e.title||"",subtitle:e.subtitle||"",mainimage:e.mainimage||"",secondaryimage:e.secondaryimage||"",publishedYear:e.publishedYear||"",shortDescription:e.shortDescription||"",officialWebsiteLink:e.officialWebsiteLink||"",gitHubLink:e.gitHubLink||"",services:e.services?e.services.join(", "):"",industries:e.industries?e.industries.join(", "):"",technicalDescription:e.technicalDescription||"",learningDescription:e.learningDescription||"",technologies:e.technologies?e.technologies.join(", "):""}),s(!0)})(e),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,Ud.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"Edit"]}),(0,Ud.jsxs)(xy,{className:"delete",onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this project?"))try{const t={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}};await Ld.delete(`/api/projects/${e}`,t),f("Project deleted successfully","success"),m()}catch(i){var t,r,n,o;console.error("Error deleting project:",i);const e=(null===(t=i.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||(null===(n=i.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.error)||"Error deleting project";f(e,"error")}})(e._id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,Ud.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"Delete"]})]})]})]},e._id);var t}))}),a&&(0,Ud.jsx)(by,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>s(!1),children:(0,Ud.jsxs)(wy,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,Ud.jsx)("h2",{children:l?"Edit Project":"Add New Project"}),(0,Ud.jsxs)(ky,{onSubmit:async e=>{e.preventDefault(),h(!0);try{const e={title:u.title,subtitle:u.subtitle,mainimage:u.mainimage,secondaryimage:u.secondaryimage,publishedYear:u.publishedYear?parseInt(u.publishedYear):void 0,shortDescription:u.shortDescription,officialWebsiteLink:u.officialWebsiteLink,gitHubLink:u.gitHubLink,services:u.services.split(",").map((e=>e.trim())).filter((e=>e)),industries:u.industries.split(",").map((e=>e.trim())).filter((e=>e)),technicalDescription:u.technicalDescription,learningDescription:u.learningDescription,technologies:u.technologies.split(",").map((e=>e.trim())).filter((e=>e))},t={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`,"Content-Type":"application/json"}};if(l){const r=await Ld.put(`/api/projects/${l._id}`,e,t);console.log("Update response:",r),f("Project updated successfully","success")}else{const r=await Ld.post("/api/projects",e,t);console.log("Create response:",r),f("Project created successfully","success")}s(!1),c(null),d({title:"",subtitle:"",mainimage:"",secondaryimage:"",publishedYear:"",shortDescription:"",officialWebsiteLink:"",gitHubLink:"",services:"",industries:"",technicalDescription:"",learningDescription:"",technologies:""}),m()}catch(i){var t,r,n,o;console.error("Error saving project:",i);const e=(null===(t=i.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||(null===(n=i.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.error)||i.message||"Error saving project";f(e,"error")}finally{h(!1)}},children:[(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Title *"}),(0,Ud.jsx)(Ey,{type:"text",name:"title",value:u.title,onChange:g,required:!0})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Subtitle"}),(0,Ud.jsx)(Ey,{type:"text",name:"subtitle",value:u.subtitle,onChange:g})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Main Image URL *"}),(0,Ud.jsx)(Ey,{type:"url",name:"mainimage",value:u.mainimage,onChange:g,placeholder:"Enter main image URL",required:!0})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Secondary Image URL"}),(0,Ud.jsx)(Ey,{type:"url",name:"secondaryimage",value:u.secondaryimage,onChange:g,placeholder:"Enter secondary image URL"})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Published Year"}),(0,Ud.jsx)(Ey,{type:"number",name:"publishedYear",value:u.publishedYear,onChange:g,placeholder:"e.g., 2024"})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Short Description"}),(0,Ud.jsx)(Cy,{name:"shortDescription",value:u.shortDescription,onChange:g,placeholder:"Brief description of the project"})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Official Website Link"}),(0,Ud.jsx)(Ey,{type:"url",name:"officialWebsiteLink",value:u.officialWebsiteLink,onChange:g,placeholder:"https://example.com"})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"GitHub Link *"}),(0,Ud.jsx)(Ey,{type:"url",name:"gitHubLink",value:u.gitHubLink,onChange:g,placeholder:"https://github.com/...",required:!0})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Services (comma-separated)"}),(0,Ud.jsx)(Ey,{type:"text",name:"services",value:u.services,onChange:g,placeholder:"Web Development, Mobile Apps, ..."})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Industries (comma-separated)"}),(0,Ud.jsx)(Ey,{type:"text",name:"industries",value:u.industries,onChange:g,placeholder:"Healthcare, Finance, ..."})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Technical Description"}),(0,Ud.jsx)(Cy,{name:"technicalDescription",value:u.technicalDescription,onChange:g,placeholder:"Detailed technical description"})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Learning Description"}),(0,Ud.jsx)(Cy,{name:"learningDescription",value:u.learningDescription,onChange:g,placeholder:"What was learned from this project"})]}),(0,Ud.jsxs)(jy,{children:[(0,Ud.jsx)(Sy,{children:"Technologies *"}),(0,Ud.jsx)(Ey,{type:"text",name:"technologies",value:u.technologies,onChange:g,placeholder:"React, Node.js, MongoDB, ...",required:!0})]}),(0,Ud.jsx)(Ty,{type:"submit",disabled:p,children:p?"Saving...":l?"Update Project":"Create Project"})]})]})})]})},Py=dr.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,Ly=dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: ${e=>e.theme.colors.primary};
    }
  }
`,Ay=dr(hc.button)`
  background: ${e=>e.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`,Ry=dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`,Oy=dr(hc.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`,zy=dr.div`
  width: 100%;
  height: 120px;
  background: ${e=>e.theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  svg {
    width: 48px;
    height: 48px;
    color: ${e=>e.theme.colors.primary};
  }
`,Ny=dr.div`
  padding: 1.5rem;
`,Dy=dr.h3`
  color: ${e=>e.theme.colors.text};
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${e=>e.theme.colors.primary};
  }
`,Iy=dr.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,My=dr.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,$y=dr(hc.button)`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &.edit {
    background: ${e=>e.theme.colors.primary}15;
    color: ${e=>e.theme.colors.primary};
  }

  &.delete {
    background: ${e=>e.theme.colors.error}15;
    color: ${e=>e.theme.colors.error};
  }

  &:hover {
    transform: translateY(-2px);
  }
`,Fy=dr(hc.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`,By=dr(hc.div)`
  background: ${e=>e.theme.colors.background};
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`,Uy=dr.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Vy=dr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Wy=dr.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 0.875rem;
`,Hy=dr.input`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  width: 100%;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,qy=dr.textarea`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  width: 100%;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,Yy=dr.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.textSecondary};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
  }
`,Xy=dr.div`
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
`,Ky=dr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`,Gy=dr.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;
`,Qy=dr.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: ${e=>e.theme.colors.error}15;
  color: ${e=>e.theme.colors.error};
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  
  &:hover {
    background: ${e=>e.theme.colors.error}25;
  }
`,Jy=dr(hc.button)`
  margin-top: 1rem;
  background: ${e=>e.theme.colors.primary}15;
  color: ${e=>e.theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  
  &:hover {
    background: ${e=>e.theme.colors.primary}25;
  }
`,Zy=dr(hc.button)`
  background: ${e=>e.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`,ex=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!1),[i,a]=(0,n.useState)(null),[s,l]=(0,n.useState)({title:"",description:"",icon:"",slug:"",subServices:[]}),[c,u]=(0,n.useState)(!0),[d,p]=(0,n.useState)(null),{addToast:h}=Gd(),{user:f}=Hd(),m=Z();(0,n.useEffect)((()=>{g()}),[]);const g=async()=>{try{u(!0),p(null);const e=await Jh.get("/api/services");if(!e.data.success)throw new Error(e.data.message||"Failed to fetch services");if(!Array.isArray(e.data.data))throw new Error("Expected data to be an array");t(e.data.data)}catch(d){console.error("Error fetching services:",d),p(d.message||"Failed to load services"),h(d.message||"Failed to load services","error")}finally{u(!1)}},v=e=>{const{name:t,value:r}=e.target;l((e=>({...e,[t]:r})))},y=(e,t,r)=>{l((n=>{const o=[...n.subServices];return o[e]={...o[e],[t]:r},{...n,subServices:o}}))},x=()=>{a(null),l({title:"",description:"",icon:"",slug:"",subServices:[]}),o(!1)};return c?(0,Ud.jsx)(Py,{children:(0,Ud.jsx)(lh,{})}):(0,Ud.jsxs)(Py,{children:[(0,Ud.jsxs)(Ly,{children:[(0,Ud.jsxs)("h1",{children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"Service Management"]}),(0,Ud.jsxs)(Ay,{onClick:()=>{a(null),l({title:"",description:"",icon:"",slug:"",subServices:[]}),o(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Ud.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add New Service"]})]}),(0,Ud.jsx)(Ry,{children:e.map((e=>(0,Ud.jsxs)(Oy,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,Ud.jsx)(zy,{children:(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),(0,Ud.jsxs)(Ny,{children:[(0,Ud.jsxs)(Dy,{children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ud.jsx)("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),e.title]}),(0,Ud.jsx)(Iy,{children:e.description}),e.features&&e.features.length>0&&(0,Ud.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,Ud.jsx)("h4",{style:{color:e=>e.theme.colors.text,marginBottom:"0.5rem"},children:"Features:"}),(0,Ud.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0},children:e.features.map(((e,t)=>(0,Ud.jsxs)("li",{style:{color:e=>e.theme.colors.textSecondary,marginBottom:"0.25rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"16px",height:"16px"},children:(0,Ud.jsx)("polyline",{points:"20 6 9 17 4 12"})}),e]},t)))})]}),(0,Ud.jsxs)(My,{children:[(0,Ud.jsxs)($y,{className:"edit",onClick:()=>(e=>{a(e),l({title:e.title||"",description:e.description||"",icon:e.icon||"",slug:e.slug||"",subServices:e.subServices||[]}),o(!0)})(e),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,Ud.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"Edit"]}),(0,Ud.jsxs)($y,{className:"delete",onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this service?"))try{await Jh.delete(`/api/services/${e}`),h("Service deleted successfully","success"),g()}catch(d){console.error("Error deleting service:",d),h(d.message||"Failed to delete service","error")}})(e._id),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,Ud.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"Delete"]})]}),(0,Ud.jsxs)(Zy,{onClick:()=>(e=>{console.log("Navigating to service:",e),m(`/services/${e._id}`)})(e),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"16px",height:"16px"},children:[(0,Ud.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,Ud.jsx)("polyline",{points:"15 3 21 3 21 9"}),(0,Ud.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Learn More"]})]})]},e._id)))}),r&&(0,Ud.jsx)(Fy,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>o(!1),children:(0,Ud.jsxs)(By,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,Ud.jsx)(Yy,{onClick:()=>o(!1),children:"\xd7"}),(0,Ud.jsx)("h2",{children:i?"Edit Service":"Add New Service"}),(0,Ud.jsxs)(Uy,{onSubmit:async e=>{e.preventDefault();try{const e={...s,subServices:s.subServices.map((e=>({title:e.title,description:e.description,imageUrl:e.imageUrl})))};i?(await Jh.put(`/api/services/${i._id}`,e),h("Service updated successfully","success")):(await Jh.post("/api/services",e),h("Service created successfully","success")),g(),x()}catch(d){console.error("Error saving service:",d),h(d.message||"Failed to save service","error")}},children:[(0,Ud.jsxs)(Vy,{children:[(0,Ud.jsx)(Wy,{htmlFor:"title",children:"Title"}),(0,Ud.jsx)(Hy,{type:"text",id:"title",name:"title",value:s.title,onChange:v,placeholder:"Enter service title",required:!0})]}),(0,Ud.jsxs)(Vy,{children:[(0,Ud.jsx)(Wy,{htmlFor:"description",children:"Description"}),(0,Ud.jsx)(qy,{id:"description",name:"description",value:s.description,onChange:v,placeholder:"Enter service description",required:!0})]}),(0,Ud.jsxs)(Vy,{children:[(0,Ud.jsx)(Wy,{htmlFor:"icon",children:"Icon (SVG path)"}),(0,Ud.jsx)(Hy,{type:"text",id:"icon",name:"icon",value:s.icon,onChange:v,placeholder:"Enter SVG path",required:!0})]}),(0,Ud.jsxs)(Vy,{children:[(0,Ud.jsx)(Wy,{htmlFor:"slug",children:"Slug"}),(0,Ud.jsx)(Hy,{type:"text",id:"slug",name:"slug",value:s.slug,onChange:v,placeholder:"Enter service slug",required:!0})]}),(0,Ud.jsxs)(Xy,{children:[(0,Ud.jsx)(Wy,{children:"Sub Services"}),(0,Ud.jsx)(Ky,{children:s.subServices.map(((e,t)=>(0,Ud.jsxs)(Gy,{children:[(0,Ud.jsx)(Qy,{onClick:()=>(e=>{l((t=>({...t,subServices:t.subServices.filter(((t,r)=>r!==e))})))})(t),type:"button",children:"\xd7"}),(0,Ud.jsxs)(Vy,{children:[(0,Ud.jsx)(Wy,{children:"Sub Service Title"}),(0,Ud.jsx)(Hy,{type:"text",value:e.title,onChange:e=>y(t,"title",e.target.value),placeholder:"Enter sub service title",required:!0})]}),(0,Ud.jsxs)(Vy,{children:[(0,Ud.jsx)(Wy,{children:"Sub Service Description"}),(0,Ud.jsx)(qy,{value:e.description,onChange:e=>y(t,"description",e.target.value),placeholder:"Enter sub service description",required:!0})]}),(0,Ud.jsxs)(Vy,{children:[(0,Ud.jsx)(Wy,{children:"Image URL"}),(0,Ud.jsx)(Hy,{type:"url",value:e.imageUrl||"",onChange:e=>y(t,"imageUrl",e.target.value),placeholder:"Enter image URL for sub service"})]})]},t)))}),(0,Ud.jsxs)(Jy,{type:"button",onClick:()=>{l((e=>({...e,subServices:[...e.subServices,{title:"",description:"",imageUrl:""}]})))},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"16px",height:"16px"},children:[(0,Ud.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Ud.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add Sub Service"]})]}),(0,Ud.jsx)($y,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:i?"Update Service":"Add Service"})]})]})})]})},tx=dr.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,rx=dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: ${e=>e.theme.colors.primary};
    }
  }
`,nx=dr(hc.button)`
  background: ${e=>e.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`,ox=dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`,ix=dr(hc.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`,ax=dr.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ix}:hover & {
    transform: scale(1.05);
  }
`,sx=dr.div`
  padding: 1.5rem;
`,lx=dr.h3`
  color: ${e=>e.theme.colors.text};
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${e=>e.theme.colors.primary};
  }
`,cx=dr.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,ux=dr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,dx=dr.span`
  background: ${e=>e.theme.colors.primary}15;
  color: ${e=>e.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 12px;
    height: 12px;
  }
`,px=dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,hx=dr.div`
  display: flex;
  gap: 0.75rem;
`,fx=dr(hc.button)`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &.edit {
    background: ${e=>e.theme.colors.primary}15;
    color: ${e=>e.theme.colors.primary};
  }

  &.delete {
    background: ${e=>e.theme.colors.error}15;
    color: ${e=>e.theme.colors.error};
  }

  &:hover {
    transform: translateY(-2px);
  }
`,mx=dr(hc.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`,gx=dr(hc.div)`
  background: ${e=>e.theme.colors.background};
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  h2 {
    color: ${e=>e.theme.colors.text};
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`,vx=dr.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,yx=dr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,xx=dr.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 0.875rem;
`,bx=dr.input`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  width: 100%;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,wx=dr.textarea`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  width: 100%;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,kx=dr.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.textSecondary};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
  }
`,jx=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!1),[i,a]=(0,n.useState)(null),[s,l]=(0,n.useState)({title:"",content:"",author:"",tags:"",image:"",date:(new Date).toISOString().split("T")[0]}),[c,u]=(0,n.useState)(!1),[d,p]=(0,n.useState)(!0),{addToast:h}=Gd();(0,n.useEffect)((()=>{f()}),[]);const f=async()=>{try{p(!0);const e={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}};console.log("Fetching contents with config:",e);const r=await Ld.get("/api/content",e);console.log("Fetch response:",r),t(r.data)}catch(l){var e,r,n,o,i,a,s;console.error("Fetch error details:",{message:l.message,status:null===(e=l.response)||void 0===e?void 0:e.status,statusText:null===(r=l.response)||void 0===r?void 0:r.statusText,data:null===(n=l.response)||void 0===n?void 0:n.data,config:l.config});const t=(null===(o=l.response)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.message)||(null===(a=l.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.error)||"Error fetching blog posts";h(t,"error")}finally{p(!1)}},m=()=>{o(!1),a(null),l({title:"",content:"",author:"",tags:"",image:"",date:(new Date).toISOString().split("T")[0]})};return d?(0,Ud.jsx)(tx,{children:(0,Ud.jsx)(lh,{})}):(0,Ud.jsxs)(tx,{children:[(0,Ud.jsxs)(rx,{children:[(0,Ud.jsxs)("h1",{children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),(0,Ud.jsx)("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),"Blog Management"]}),(0,Ud.jsxs)(nx,{onClick:()=>{a(null),l({title:"",content:"",author:"",tags:"",image:"",date:(new Date).toISOString().split("T")[0]}),o(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Ud.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add New Blog Post"]})]}),(0,Ud.jsx)(ox,{children:e.map((e=>(0,Ud.jsxs)(ix,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.image&&(0,Ud.jsx)(ax,{src:e.image,alt:e.title}),(0,Ud.jsxs)(sx,{children:[(0,Ud.jsxs)(lx,{children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),(0,Ud.jsx)("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),e.title]}),(0,Ud.jsxs)(cx,{children:[e.content.substring(0,150),"..."]}),(0,Ud.jsx)(ux,{children:e.tags.map((e=>(0,Ud.jsxs)(dx,{children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),(0,Ud.jsx)("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),e]},e)))}),(0,Ud.jsxs)(px,{children:[(0,Ud.jsxs)("span",{children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",marginRight:"4px"},children:[(0,Ud.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,Ud.jsx)("circle",{cx:"12",cy:"7",r:"4"})]}),e.author]}),(0,Ud.jsxs)("span",{children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",marginRight:"4px"},children:[(0,Ud.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,Ud.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,Ud.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,Ud.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),new Date(e.date).toLocaleDateString()]})]}),(0,Ud.jsxs)(hx,{children:[(0,Ud.jsxs)(fx,{className:"edit",onClick:()=>(e=>{a(e),l({title:e.title||"",content:e.content||"",author:e.author||"",tags:Array.isArray(e.tags)?e.tags.join(", "):"",image:e.image||"",date:new Date(e.date).toISOString().split("T")[0]}),o(!0)})(e),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,Ud.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"Edit"]}),(0,Ud.jsxs)(fx,{className:"delete",onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this blog post?"))try{const t={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}};await Ld.delete(`/api/content/${e}`,t),h("Blog post deleted successfully","success"),f()}catch(i){var t,r,n,o;console.error("Error deleting blog post:",i);const e=(null===(t=i.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||(null===(n=i.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.error)||"Error deleting blog post";h(e,"error")}})(e._id),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,Ud.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ud.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,Ud.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"Delete"]})]})]})]},e._id)))}),r&&(0,Ud.jsx)(mx,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:m,children:(0,Ud.jsxs)(gx,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,Ud.jsx)(kx,{onClick:m,children:"\xd7"}),(0,Ud.jsx)("h2",{children:i?"Edit Blog Post":"Add New Blog Post"}),(0,Ud.jsxs)(vx,{onSubmit:async e=>{e.preventDefault(),u(!0);try{if(!s.title.trim()||!s.content.trim()||!s.author.trim()||!s.date)return h("Please fill in all required fields","error"),void u(!1);const e={title:s.title.trim(),content:s.content.trim(),author:s.author.trim(),date:s.date,tags:s.tags?s.tags.split(",").map((e=>e.trim())).filter((e=>e)):[],...s.image&&{image:s.image.trim()}},o={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`,"Content-Type":"application/json"}};let a;if(console.log("Submitting with data:",e),console.log("Config:",o),console.log("Admin token:",localStorage.getItem("admin_token")),i){const s=`/api/content/${i._id}`;console.log("Making PATCH request to:",s),console.log("Editing content ID:",i._id),console.log("Editing content full object:",i);try{a=await Ld.patch(s,e,o),console.log("Edit response:",a)}catch(y){var t,r,n;throw console.error("Edit request failed:",{url:s,error:y,status:null===(t=y.response)||void 0===t?void 0:t.status,data:null===(r=y.response)||void 0===r?void 0:r.data,headers:null===(n=y.response)||void 0===n?void 0:n.headers,config:y.config,message:y.message,stack:y.stack}),y}}else a=await Ld.post("/api/content",e,o);h(i?"Blog post updated successfully":"Blog post created successfully","success"),m(),await f()}catch(x){var o,a,l,c;if(console.error("Submit error details:",{message:x.message,status:null===(o=x.response)||void 0===o?void 0:o.status,statusText:null===(a=x.response)||void 0===a?void 0:a.statusText,data:null===(l=x.response)||void 0===l?void 0:l.data,config:x.config,headers:null===(c=x.response)||void 0===c?void 0:c.headers,stack:x.stack}),"Network Error"===x.message)h("Network error. Please check your connection and try again.","error");else{var d,p,g,v;const e=(null===(d=x.response)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.message)||(null===(g=x.response)||void 0===g||null===(v=g.data)||void 0===v?void 0:v.error)||x.message||"Error saving blog post";h(e,"error")}}finally{u(!1)}},children:[(0,Ud.jsxs)(yx,{children:[(0,Ud.jsx)(xx,{htmlFor:"title",children:"Title"}),(0,Ud.jsx)(bx,{type:"text",id:"title",name:"title",value:s.title,onChange:e=>l((t=>({...t,title:e.target.value}))),placeholder:"Enter blog post title",required:!0})]}),(0,Ud.jsxs)(yx,{children:[(0,Ud.jsx)(xx,{htmlFor:"content",children:"Content"}),(0,Ud.jsx)(wx,{id:"content",name:"content",value:s.content,onChange:e=>l((t=>({...t,content:e.target.value}))),placeholder:"Enter blog post content",required:!0})]}),(0,Ud.jsxs)(yx,{children:[(0,Ud.jsx)(xx,{htmlFor:"author",children:"Author"}),(0,Ud.jsx)(bx,{type:"text",id:"author",name:"author",value:s.author,onChange:e=>l((t=>({...t,author:e.target.value}))),placeholder:"Enter author name",required:!0})]}),(0,Ud.jsxs)(yx,{children:[(0,Ud.jsx)(xx,{htmlFor:"image",children:"Image URL"}),(0,Ud.jsx)(bx,{type:"url",id:"image",name:"image",value:s.image,onChange:e=>l((t=>({...t,image:e.target.value}))),placeholder:"Enter image URL"})]}),(0,Ud.jsxs)(yx,{children:[(0,Ud.jsx)(xx,{htmlFor:"tags",children:"Tags (comma-separated)"}),(0,Ud.jsx)(bx,{type:"text",id:"tags",name:"tags",value:s.tags,onChange:e=>l((t=>({...t,tags:e.target.value}))),placeholder:"e.g., technology, business, news",required:!0})]}),(0,Ud.jsxs)(yx,{children:[(0,Ud.jsx)(xx,{htmlFor:"date",children:"Date"}),(0,Ud.jsx)(bx,{type:"date",id:"date",name:"date",value:s.date,onChange:e=>l((t=>({...t,date:e.target.value}))),required:!0})]}),(0,Ud.jsx)(fx,{type:"submit",disabled:c,whileHover:{scale:1.02},whileTap:{scale:.98},children:c?"Saving...":i?"Update Blog Post":"Add Blog Post"})]})]})})]})},Sx=dr.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Ex=dr.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
`,Cx=dr(hc.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Tx=dr.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,_x=dr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Px=dr.label`
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
`,Lx=dr.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,Ax=dr.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,Rx=dr.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: var(--color-primary);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-primary-dark);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Ox=dr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,zx=dr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Nx=dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Dx=dr.div`
  display: flex;
  gap: 0.5rem;
`,Ix=dr.button`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background: ${e=>e.danger?"rgba(220, 38, 38, 0.2)":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.danger?"rgb(248, 113, 113)":"var(--color-text)"};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${e=>e.danger?"rgba(220, 38, 38, 0.3)":"rgba(255, 255, 255, 0.2)"};
  }
`,Mx=dr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`,$x=dr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Fx=dr.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,Bx=dr.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,Ux=dr.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  background: transparent;
  color: var(--color-text);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
  }
`,Vx=dr.div`
  margin-top: 1rem;
  
  img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 8px;
    object-fit: cover;
  }
`,Wx=dr.hr`
  margin: 2rem 0;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Hx=dr(Cx)`
  background: rgba(255, 255, 255, 0.03);
`,qx=dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Yx=dr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`,Xx=dr.select`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,Kx=()=>{const[e,t]=(0,n.useState)({title:"About Us",image:"",paragraphs:[""],highlights:[],founders:{title:"Meet Our Team",founders:[]}}),[r,o]=(0,n.useState)(!0),[i,a]=(0,n.useState)(!1),{addToast:s}=Gd();(0,n.useEffect)((()=>{l()}),[]);const l=async()=>{try{var e,r,n,i;o(!0);const[a,s]=await Promise.all([Ld.get("/api/about"),Ld.get("/api/founders").catch((()=>({data:null})))]);t({title:(null===(e=a.data)||void 0===e?void 0:e.title)||"About Us",image:(null===(r=a.data)||void 0===r?void 0:r.image)||"",paragraphs:(null===(n=a.data)||void 0===n?void 0:n.paragraphs)||[""],highlights:(null===(i=a.data)||void 0===i?void 0:i.highlights)||[],founders:s.data||{title:"Meet Our Team",founders:[]}})}catch(a){console.error("Error fetching content:",a),s("Failed to load content","error")}finally{o(!1)}},c=r=>{const{name:n,value:o}=r.target;t({...e,[n]:o})},u=(r,n,o)=>{const i=[...e.highlights];i[r]={...i[r],[n]:"paragraphIndex"===n?parseInt(o):o},t({...e,highlights:i})},d=(r,n,o)=>{const i=[...e.founders.founders];if(n.startsWith("social.")){const e=n.split(".")[1];i[r]={...i[r],social:{...i[r].social,[e]:o}}}else i[r]={...i[r],[n]:o};t({...e,founders:{...e.founders,founders:i}})};return r?(0,Ud.jsxs)(Sx,{children:[(0,Ud.jsx)(Ex,{children:"About Management"}),(0,Ud.jsx)(Cx,{children:(0,Ud.jsx)("p",{children:"Loading..."})})]}):(0,Ud.jsxs)(Sx,{children:[(0,Ud.jsx)(Ex,{children:"About Management"}),(0,Ud.jsx)(Cx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:(0,Ud.jsxs)(Tx,{onSubmit:async t=>{t.preventDefault(),a(!0);try{const t=localStorage.getItem("admin_token");if(!t)return s("No authentication token found. Please log in again.","error"),void a(!1);if(console.log("Submitting form data:",{about:{title:e.title,image:e.image,paragraphs:e.paragraphs,highlights:e.highlights},founders:{title:e.founders.title,founders:e.founders.founders}}),!e.title.trim())return s("Title is required","error"),void a(!1);if(!e.image.trim())return s("Image URL is required","error"),void a(!1);if(e.paragraphs.some((e=>!e.trim())))return s("All paragraphs must have content","error"),void a(!1);try{console.log("Updating about content...");const r=await Ld.put("/api/about",{title:e.title,image:e.image,paragraphs:e.paragraphs,highlights:e.highlights},{headers:{Authorization:`Bearer ${t}`}});console.log("About update response:",r.data)}catch(l){throw console.error("Error updating about content:",l),l}try{console.log("Updating founders content...");const r={title:e.founders.title,founders:e.founders.founders.map((e=>{var t,r,n,o;return{name:e.name.trim(),bio:e.bio.trim(),image:e.image.trim(),imagePosition:e.imagePosition||"left",social:{github:(null===(t=e.social)||void 0===t?void 0:t.github)||"",portfolio:(null===(r=e.social)||void 0===r?void 0:r.portfolio)||"",linkedin:(null===(n=e.social)||void 0===n?void 0:n.linkedin)||"",instagram:(null===(o=e.social)||void 0===o?void 0:o.instagram)||""}}}))};console.log("Founders data to submit:",r);const n=await Ld.put("/api/founders",r,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},timeout:1e4});console.log("Founders update response:",n.data)}catch(c){throw console.error("Error updating founders content:",c),c.response&&console.error("Founders error response:",c.response.data),c}s("Content updated successfully","success")}catch(u){var r,n,o,i;console.error("Error updating content:",u),console.error("Error response:",null===(r=u.response)||void 0===r?void 0:r.data),console.error("Error request:",u.config),localStorage.getItem("admin_token")?401===(null===(n=u.response)||void 0===n?void 0:n.status)?s("Authentication failed. Please log in again.","error"):400===(null===(o=u.response)||void 0===o?void 0:o.status)?s(u.response.data.message||"Invalid data provided","error"):404===(null===(i=u.response)||void 0===i?void 0:i.status)?s("API endpoint not found. Please check server configuration.","error"):"ECONNABORTED"===u.code?s("Request timed out. Please try again.","error"):u.response?s(`Failed to update content: ${u.message}`,"error"):s("Network error. Please check your connection.","error"):s("No authentication token found. Please log in again.","error")}finally{a(!1)}},children:[(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Title"}),(0,Ud.jsx)(Lx,{type:"text",name:"title",value:e.title,onChange:c,required:!0})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Image URL"}),(0,Ud.jsx)(Lx,{type:"url",name:"image",value:e.image,onChange:c,required:!0}),e.image&&(0,Ud.jsx)(Vx,{children:(0,Ud.jsx)("img",{src:e.image,alt:"About page image preview",onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/800x450?text=Invalid+Image+URL"}})})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Paragraphs"}),(0,Ud.jsx)(Ox,{children:e.paragraphs.map(((r,n)=>(0,Ud.jsxs)(zx,{children:[(0,Ud.jsxs)(Nx,{children:[(0,Ud.jsxs)(Px,{children:["Paragraph ",n+1]}),(0,Ud.jsx)(Dx,{children:(0,Ud.jsx)(Ix,{type:"button",onClick:()=>(r=>{if(e.paragraphs.length<=1)return void s("Cannot remove the last paragraph","error");const n=e.paragraphs.filter(((e,t)=>t!==r)),o=e.highlights.map((e=>e.paragraphIndex===r?null:e.paragraphIndex>r?{...e,paragraphIndex:e.paragraphIndex-1}:e)).filter(Boolean);t({...e,paragraphs:n,highlights:o})})(n),danger:!0,children:"Remove"})})]}),(0,Ud.jsx)(Ax,{value:r,onChange:r=>((r,n)=>{const o=[...e.paragraphs];o[r]=n,t({...e,paragraphs:o})})(n,r.target.value),required:!0})]},n)))}),(0,Ud.jsx)(Ux,{type:"button",onClick:()=>{t({...e,paragraphs:[...e.paragraphs,""]})},children:"+ Add Paragraph"})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Highlights"}),(0,Ud.jsx)(Mx,{children:e.highlights.map(((r,n)=>(0,Ud.jsxs)($x,{children:[(0,Ud.jsx)(Fx,{type:"text",value:r.text,onChange:e=>u(n,"text",e.target.value),placeholder:"Highlight text"}),(0,Ud.jsx)(Bx,{value:r.paragraphIndex,onChange:e=>u(n,"paragraphIndex",e.target.value),children:e.paragraphs.map(((e,t)=>(0,Ud.jsxs)("option",{value:t,children:["Paragraph ",t+1]},t)))}),(0,Ud.jsx)(Ix,{type:"button",onClick:()=>(r=>{const n=e.highlights.filter(((e,t)=>t!==r));t({...e,highlights:n})})(n),danger:!0,children:"Remove"})]},n)))}),(0,Ud.jsx)(Ux,{type:"button",onClick:()=>{t({...e,highlights:[...e.highlights,{text:"",paragraphIndex:0}]})},children:"+ Add Highlight"})]}),(0,Ud.jsx)(Wx,{}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Founders Section Title"}),(0,Ud.jsx)(Lx,{type:"text",value:e.founders.title,onChange:r=>{t({...e,founders:{...e.founders,title:r.target.value}})},required:!0})]}),e.founders.founders.map(((r,n)=>(0,Ud.jsxs)(Hx,{children:[(0,Ud.jsxs)(qx,{children:[(0,Ud.jsxs)(Px,{children:["Founder ",n+1]}),(0,Ud.jsx)(Ix,{type:"button",onClick:()=>(r=>{const n=e.founders.founders.filter(((e,t)=>t!==r));t({...e,founders:{...e.founders,founders:n}})})(n),danger:!0,children:"Remove Founder"})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Name"}),(0,Ud.jsx)(Lx,{type:"text",value:r.name,onChange:e=>d(n,"name",e.target.value),required:!0})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Bio"}),(0,Ud.jsx)(Ax,{value:r.bio,onChange:e=>d(n,"bio",e.target.value),required:!0})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Image URL"}),(0,Ud.jsx)(Lx,{type:"url",value:r.image,onChange:e=>d(n,"image",e.target.value),required:!0}),r.image&&(0,Ud.jsx)(Vx,{children:(0,Ud.jsx)("img",{src:r.image,alt:`${r.name} preview`,onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/250?text=Invalid+Image+URL"}})})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Image Position"}),(0,Ud.jsxs)(Xx,{value:r.imagePosition,onChange:e=>d(n,"imagePosition",e.target.value),children:[(0,Ud.jsx)("option",{value:"left",children:"Left"}),(0,Ud.jsx)("option",{value:"right",children:"Right"})]})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Social Links"}),(0,Ud.jsxs)(Yx,{children:[(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"GitHub"}),(0,Ud.jsx)(Lx,{type:"url",value:r.social.github,onChange:e=>d(n,"social.github",e.target.value),placeholder:"https://github.com/username"})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Portfolio"}),(0,Ud.jsx)(Lx,{type:"url",value:r.social.portfolio,onChange:e=>d(n,"social.portfolio",e.target.value),placeholder:"https://portfolio.com"})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"LinkedIn"}),(0,Ud.jsx)(Lx,{type:"url",value:r.social.linkedin,onChange:e=>d(n,"social.linkedin",e.target.value),placeholder:"https://linkedin.com/in/username"})]}),(0,Ud.jsxs)(_x,{children:[(0,Ud.jsx)(Px,{children:"Instagram"}),(0,Ud.jsx)(Lx,{type:"url",value:r.social.instagram,onChange:e=>d(n,"social.instagram",e.target.value),placeholder:"https://instagram.com/username"})]})]})]})]},n))),(0,Ud.jsx)(Ux,{type:"button",onClick:()=>{t({...e,founders:{...e.founders,founders:[...e.founders.founders,{name:"",bio:"",image:"",imagePosition:"left",social:{github:"",portfolio:"",linkedin:"",instagram:""}}]}})},children:"+ Add Founder"}),(0,Ud.jsx)(Rx,{type:"submit",disabled:i,children:i?"Saving...":"Save All Changes"})]})})]})},Gx=dr.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Qx=dr.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-text);
`,Jx=dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`,Zx=dr.div`
  background: var(--color-bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  ${e=>e.selected&&"\n    border-color: var(--color-primary);\n    background: rgba(var(--color-primary-rgb), 0.05);\n  "}
`,eb=dr.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`,tb=dr.div`
  flex: 1;
`,rb=dr.h3`
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`,nb=dr.span`
  font-size: 0.8rem;
  color: var(--color-text-light);
  background: var(--color-bg-tertiary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: capitalize;
`,ob=dr.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`,ib=dr.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,ab=dr.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: ${e=>e.active?"var(--color-primary)":"var(--color-bg)"};
  color: ${e=>e.active?"white":"var(--color-text)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`,sb=dr.div`
  margin-bottom: 1rem;
  color: var(--color-text-light);
  font-size: 0.9rem;
`,lb=dr.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
  }

  &:disabled {
    background: var(--color-bg);
    color: var(--color-text-light);
    cursor: not-allowed;
    transform: none;
  }
`,cb=dr.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem;
  background: ${e=>"success"===e.type?"var(--color-success)":"var(--color-error)"};
  color: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,ub=dr.button`
  background: var(--color-secondary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-secondary-dark);
    transform: translateY(-2px);
  }

  &:disabled {
    background: var(--color-bg);
    color: var(--color-text-light);
    cursor: not-allowed;
    transform: none;
  }
`,db=dr.button`
  background: var(--color-success);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-success-dark);
    transform: translateY(-2px);
  }
`,pb=dr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,hb=dr.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`,fb=dr.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`,mb=dr.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,gb=dr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,vb=dr.label`
  font-weight: 500;
  color: var(--color-text);
`,yb=dr.input`
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg-secondary);
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,xb=dr.select`
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg-secondary);
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,bb=dr.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`,wb=dr.button`
  background: var(--color-bg-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-bg-tertiary);
  }
`,kb=dr.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-primary-dark);
  }
  
  &:disabled {
    background: var(--color-bg);
    color: var(--color-text-light);
    cursor: not-allowed;
  }
`,jb=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)("all"),[i,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[c,u]=(0,n.useState)(!1),[d,p]=(0,n.useState)(!0),[h,f]=(0,n.useState)(null),[m,g]=(0,n.useState)(!1),[v,y]=(0,n.useState)({name:"",logo:"",category:"frontend",isSelected:!1}),[x,b]=(0,n.useState)(!1),w=["all","frontend","backend","database","design","devops","api"];(0,n.useEffect)((()=>{k()}),[]);const k=async()=>{try{p(!0);const e=await Qh();t(e.data.technologies)}catch(e){console.error("Error fetching technologies:",e),f({type:"error",message:"Failed to fetch technologies. Please try again."})}finally{p(!1)}},j=e=>{const{name:t,value:r,type:n,checked:o}=e.target;y({...v,[t]:"checkbox"===n?o:r})},S="all"===r?e:e.filter((e=>e.category===r)),E=e.filter((e=>e.isSelected)).length;return d?(0,Ud.jsxs)(Gx,{children:[(0,Ud.jsx)(Qx,{children:"Technology Management"}),(0,Ud.jsx)("p",{children:"Loading technologies..."})]}):(0,Ud.jsxs)(Gx,{children:[(0,Ud.jsx)(Qx,{children:"Technology Management"}),h&&(0,Ud.jsx)(cb,{type:h.type,children:h.message}),(0,Ud.jsxs)(sb,{children:[E," technologies selected for display"]}),(0,Ud.jsx)(ib,{children:w.map((e=>(0,Ud.jsx)(ab,{active:r===e,onClick:()=>o(e),children:e.charAt(0).toUpperCase()+e.slice(1)},e)))}),(0,Ud.jsx)(Jx,{children:S.map((r=>(0,Ud.jsxs)(Zx,{selected:r.isSelected,children:[(0,Ud.jsx)(eb,{src:r.logo,alt:r.name}),(0,Ud.jsxs)(tb,{children:[(0,Ud.jsx)(rb,{children:r.name}),(0,Ud.jsx)(nb,{children:r.category})]}),(0,Ud.jsx)(ob,{type:"checkbox",checked:r.isSelected,onChange:()=>(r=>{const n=e.map((e=>e._id===r?{...e,isSelected:!e.isSelected}:e));t(n),a(!0)})(r._id)})]},r._id)))}),(0,Ud.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,Ud.jsx)(lb,{onClick:async()=>{l(!0);try{const r=await(e=>Gh.put("/api/technologies",{technologies:e}))(e);if(!r.data.success)throw new Error(r.data.message||"Failed to save technologies");a(!1),f({type:"success",message:r.data.message||"Technologies saved successfully!"}),r.data.data&&r.data.data.technologies&&t(r.data.data.technologies)}catch(o){var r,n;console.error("Error saving technologies:",o),f({type:"error",message:(null===(r=o.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Failed to save technologies. Please try again."})}finally{l(!1),setTimeout((()=>f(null)),3e3)}},disabled:!i||s,children:s?"Saving...":"Save Changes"}),(0,Ud.jsx)(db,{onClick:()=>g(!0),children:"Add Technology"}),(0,Ud.jsx)(ub,{onClick:async()=>{if(window.confirm("This will initialize the database with technologies from the JSON file. Continue?")){u(!0);try{const e=await Ld.post("/api/technologies/initialize");if(!e.data.success)throw new Error(e.data.message||"Failed to initialize technologies");f({type:"success",message:`Technologies initialized successfully! ${e.data.count} technologies added.`}),k()}catch(r){var e,t;console.error("Error initializing technologies:",r),f({type:"error",message:(null===(e=r.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Failed to initialize technologies. Please try again."})}finally{u(!1),setTimeout((()=>f(null)),3e3)}}},disabled:c||e.length>0,children:c?"Initializing...":"Initialize from JSON"})]}),m&&(0,Ud.jsx)(pb,{children:(0,Ud.jsxs)(hb,{children:[(0,Ud.jsx)(fb,{children:"Add New Technology"}),(0,Ud.jsxs)(mb,{onSubmit:async r=>{r.preventDefault(),b(!0);try{const r=await(e=>Gh.post("/api/technologies",e))(v);if(!r.data)throw new Error("Failed to add technology");f({type:"success",message:"Technology added successfully!"}),t([...e,r.data]),y({name:"",logo:"",category:"frontend",isSelected:!1}),g(!1)}catch(i){var n,o;console.error("Error adding technology:",i),f({type:"error",message:(null===(n=i.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||"Failed to add technology. Please try again."})}finally{b(!1),setTimeout((()=>f(null)),3e3)}},children:[(0,Ud.jsxs)(gb,{children:[(0,Ud.jsx)(vb,{htmlFor:"name",children:"Name"}),(0,Ud.jsx)(yb,{type:"text",id:"name",name:"name",value:v.name,onChange:j,required:!0})]}),(0,Ud.jsxs)(gb,{children:[(0,Ud.jsx)(vb,{htmlFor:"logo",children:"Logo URL"}),(0,Ud.jsx)(yb,{type:"url",id:"logo",name:"logo",value:v.logo,onChange:j,required:!0})]}),(0,Ud.jsxs)(gb,{children:[(0,Ud.jsx)(vb,{htmlFor:"category",children:"Category"}),(0,Ud.jsx)(xb,{id:"category",name:"category",value:v.category,onChange:j,required:!0,children:w.filter((e=>"all"!==e)).map((e=>(0,Ud.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e)))})]}),(0,Ud.jsx)(gb,{children:(0,Ud.jsxs)(vb,{children:[(0,Ud.jsx)(yb,{type:"checkbox",name:"isSelected",checked:v.isSelected,onChange:j}),"Selected for display"]})}),(0,Ud.jsxs)(bb,{children:[(0,Ud.jsx)(wb,{type:"button",onClick:()=>g(!1),children:"Cancel"}),(0,Ud.jsx)(kb,{type:"submit",disabled:x,children:x?"Adding...":"Add Technology"})]})]})]})})]})},Sb=dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,Eb=dr(hc.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid ${e=>e.recent?"rgba(16, 185, 129, 0.3)":"rgba(255, 255, 255, 0.05)"};
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
`,Cb=dr.h3`
  color: ${e=>e.theme.colors.gray};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,Tb=dr.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${e=>e.recent?"#10B981":e.theme.colors.text};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`,_b=dr.div`
  font-size: 0.9rem;
  color: ${e=>e.positive?"#10B981":"#EF4444"};
`,Pb=dr.div`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Lb=dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,Ab=dr.h3`
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.text};
`,Rb=dr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ob=dr.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,zb=dr.div`
  width: 40px;
  height: 40px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
`,Nb=dr.div`
  flex: 1;
`,Db=dr.h4`
  color: ${e=>e.recent?"#10B981":e.theme.colors.text};
  margin: 0;
  font-size: 0.95rem;
  transition: color 0.3s ease;
`,Ib=dr.p`
  color: ${e=>e.theme.colors.gray};
  margin: 0;
  font-size: 0.85rem;
`,Mb=()=>{const[e,t]=(0,n.useState)(!0),[r,o]=(0,n.useState)([]),[i,a]=(0,n.useState)({totalProjects:{count:"0",recent:!1},totalServices:{count:"0",recent:!1},totalBlogs:{count:"0",recent:!1},totalVisitors:{count:"0",recent:!1}}),{addToast:s}=Gd(),l=e=>{const t=new Date(e),r=new Date;return Math.abs(r-t)/36e5<=48};return(0,n.useEffect)((()=>{(async()=>{try{const e={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}},t=(await Ld.get("/api/projects",e)).data,r=t.some((e=>l(e.updatedAt||e.createdAt))),n=(await Ld.get("/api/services",e)).data.data,o=n.some((e=>l(e.createdAt))),i=(await Ld.get("/api/content",e)).data,s=i.some((e=>l(e.date)));a({TotalProjects:{count:t.length.toString(),recent:r},TotalServices:{count:n.length.toString(),recent:o},TotalBlogs:{count:i.length.toString(),recent:s},TotalVisitors:{count:"0",recent:!1}})}catch(e){console.error("Error fetching stats:",e),s("Error fetching statistics","error")}})(),(async()=>{try{t(!0);const e={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}},r=(await Ld.get("/api/content",e)).data.sort(((e,t)=>new Date(t.date)-new Date(e.date))).slice(0,2).map((e=>({icon:"\ud83d\udcdd",title:`New blog post: ${e.title}`,time:new Date(e.date).toLocaleDateString(),date:e.date,isRecent:l(e.date)}))),n=(await Ld.get("/api/projects",e)).data.sort(((e,t)=>new Date(t.createdAt)-new Date(e.createdAt))).slice(0,2).map((e=>({icon:"\ud83d\udee0\ufe0f",title:`Project updated: ${e.title}`,time:new Date(e.updatedAt).toLocaleDateString(),date:e.updatedAt,isRecent:l(e.updatedAt)}))),i=(await Ld.get("/api/services",e)).data.data.sort(((e,t)=>new Date(t.createdAt)-new Date(e.createdAt))).slice(0,2).map((e=>({icon:"\u2b50",title:`New service: ${e.title}`,time:new Date(e.createdAt).toLocaleDateString(),date:e.createdAt,isRecent:l(e.createdAt)}))),a=[...r,...n,...i].sort(((e,t)=>new Date(t.date)-new Date(e.date))).slice(0,4);o(a)}catch(e){console.error("Error fetching recent activities:",e),s("Error fetching recent activities","error")}finally{t(!1)}})()}),[]),e?(0,Ud.jsx)(Sb,{children:(0,Ud.jsx)(lh,{})}):(0,Ud.jsxs)(Ud.Fragment,{children:[(0,Ud.jsx)(Sb,{children:Object.entries(i).map(((e,t)=>{let[r,n]=e;return(0,Ud.jsxs)(Eb,{recent:n.recent,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1*t},children:[(0,Ud.jsx)(Cb,{children:r.replace(/([A-Z])/g," $1").trim()}),(0,Ud.jsx)(Tb,{recent:n.recent,children:n.count}),(0,Ud.jsx)(_b,{positive:n.recent,children:"+0%"})]},r)}))}),(0,Ud.jsxs)(Pb,{children:[(0,Ud.jsx)(Lb,{children:(0,Ud.jsx)(Ab,{children:"Recent Activity"})}),(0,Ud.jsx)(Rb,{children:r.map(((e,t)=>(0,Ud.jsxs)(Ob,{as:hc.div,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:.1*t},children:[(0,Ud.jsx)(zb,{children:e.icon}),(0,Ud.jsxs)(Nb,{children:[(0,Ud.jsx)(Db,{recent:e.isRecent,children:e.title}),(0,Ud.jsx)(Ib,{children:e.time})]})]},e.title)))})]})]})},$b=dr.div`
  min-height: 100vh;
  display: flex;
  background: ${e=>e.theme.colors.darkBackground};
  color: ${e=>e.theme.colors.text};
  position: relative;
  overflow: hidden;
`,Fb=dr.div`
  position: absolute;
  top: -20%;
  right: -10%;
  width: 70vw;
  height: 140vh;
  background: ${e=>e.theme.gradients.primary};
  transform: rotate(-12deg);
  opacity: 0.04;
  z-index: 0;
  filter: blur(60px);
`,Bb=dr(hc.div)`
  width: 280px;
  background: rgba(18, 18, 18, 0.6);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem 1.5rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`,Ub=dr(hc.div)`
  flex: 1;
  padding: 2.5rem;
  background: ${e=>e.theme.colors.background};
  position: relative;
  z-index: 1;
  overflow-y: auto;
`,Vb=dr.div`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,Wb=dr.h1`
  color: ${e=>e.theme.colors.primary};
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`,Hb=dr.div`
  flex: 1;
`,qb=dr.div`
  color: ${e=>e.theme.colors.gray};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
`,Yb=dr(Pe)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  color: ${e=>e.theme.colors.text};
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
  font-weight: 500;
  position: relative;
  
  ${e=>{let{active:t,theme:r}=e;return t&&`\n    background: rgba(37, 99, 235, 0.1);\n    color: ${r.colors.primary};\n    \n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 4px;\n      background: ${r.colors.primary};\n      border-radius: 0 4px 4px 0;\n    }\n  `}}
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(4px);
  }
  
  svg {
    margin-right: 0.75rem;
    width: 18px;
    height: 18px;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  &:hover svg {
    opacity: 1;
  }
`,Xb=dr(hc.button)`
  width: 100%;
  padding: 0.8rem;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  
  &:hover {
    background: ${e=>e.theme.colors.secondary};
  }
  
  svg {
    margin-right: 0.5rem;
    width: 18px;
    height: 18px;
  }
`,Kb=(dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,dr.h2`
  font-size: 1.8rem;
  margin: 0;
`,dr(hc.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,dr.div`
  margin-top: 1rem;
`,dr(Pe)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  color: ${e=>e.theme.colors.text};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${e=>e.theme.colors.primary};
  }
  
  svg {
    margin-right: 0.75rem;
    width: 18px;
    height: 18px;
  }
`,dr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`,dr(hc.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e=>e.theme.gradients.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    opacity: 0.05;
  }

  h3 {
    color: ${e=>e.theme.colors.text};
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 1;
  }

  p {
    color: ${e=>e.theme.colors.textSecondary};
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    z-index: 1;
  }

  svg {
    width: 32px;
    height: 32px;
    color: ${e=>e.theme.colors.primary};
  }
`,dr(hc.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  h2 {
    color: ${e=>e.theme.colors.text};
    margin: 0 0 1.5rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,()=>{const{user:e,logout:t}=Hd(),r=Z(),n=Q();return(0,Ud.jsxs)($b,{children:[(0,Ud.jsx)(Fb,{}),(0,Ud.jsxs)(Bb,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.3},children:[(0,Ud.jsxs)(Vb,{children:[(0,Ud.jsx)(Wb,{children:"Admin Dashboard"}),(0,Ud.jsxs)("p",{children:["Welcome, ",null===e||void 0===e?void 0:e.username]})]}),(0,Ud.jsxs)(Hb,{children:[(0,Ud.jsx)(qb,{children:"Navigation"}),(0,Ud.jsx)(Yb,{to:"/admin",active:"/admin"===n.pathname,children:"Dashboard"}),(0,Ud.jsx)(Yb,{to:"/admin/projects",active:"/admin/projects"===n.pathname,children:"Projects"}),(0,Ud.jsx)(Yb,{to:"/admin/services",active:"/admin/services"===n.pathname,children:"Services"}),(0,Ud.jsx)(Yb,{to:"/admin/content",active:"/admin/content"===n.pathname,children:"Blogs"}),(0,Ud.jsx)(Yb,{to:"/admin/about",active:"/admin/about"===n.pathname,children:"About"}),(0,Ud.jsx)(Yb,{to:"/admin/technologies",active:"/admin/technologies"===n.pathname,children:"Technologies"})]}),(0,Ud.jsx)(Xb,{onClick:()=>{t(),r("/admin/login")},children:"Logout"})]}),(0,Ud.jsx)(Ub,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,Ud.jsxs)(ye,{children:[(0,Ud.jsx)(ge,{path:"/",element:(0,Ud.jsx)(Mb,{})}),(0,Ud.jsx)(ge,{path:"/projects",element:(0,Ud.jsx)(_y,{})}),(0,Ud.jsx)(ge,{path:"/services",element:(0,Ud.jsx)(ex,{})}),(0,Ud.jsx)(ge,{path:"/content",element:(0,Ud.jsx)(jx,{})}),(0,Ud.jsx)(ge,{path:"/about",element:(0,Ud.jsx)(Kx,{})}),(0,Ud.jsx)(ge,{path:"/technologies",element:(0,Ud.jsx)(jb,{})})]})})]})}),Gb=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0rem;
  padding-bottom: 6rem;
`,Qb=dr.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${e=>e.theme.colors.textSecondary};
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`,Jb=dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,Zb=dr(hc.div)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`,ew=dr.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,tw=dr.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,rw=dr.h2`
  color: ${e=>e.theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.4;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${e=>e.theme.colors.primary};
    }
  }
`,nw=dr.p`
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ow=dr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,iw=dr.span`
  background: ${e=>e.theme.colors.primary}20;
  color: ${e=>e.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`,aw=dr.div`
  display: flex;
  justify-content: space-between;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.875rem;
  padding-top: 1rem;
  border-top: 1px solid ${e=>e.theme.colors.border};
`,sw=dr.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`,lw=dr.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 0.5rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}20;
  }
`,cw=dr.select`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 0.5rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}20;
  }
`,uw=dr.span`
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: scaleX(0.7);
    transition: all 0.3s ease;
  }  
`,dw=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0),[i,a]=(0,n.useState)(""),[s,l]=(0,n.useState)("all"),[c,u]=(0,n.useState)([]);(0,n.useEffect)((()=>{d()}),[]);const d=async()=>{try{const e=await Ld.get("/api/content");t(e.data);const r=[...new Set(e.data.flatMap((e=>e.tags)))];u(r),o(!1)}catch(e){console.error("Error fetching blog posts:",e),o(!1)}},p=e.filter((e=>{const t=e.title.toLowerCase().includes(i.toLowerCase())||e.content.toLowerCase().includes(i.toLowerCase())||e.author.toLowerCase().includes(i.toLowerCase()),r="all"===s||e.tags.includes(s);return t&&r}));return(0,Ud.jsxs)(Gb,{children:[(0,Ud.jsxs)(Qb,{children:[(0,Ud.jsxs)("h1",{children:["Our ",(0,Ud.jsx)(uw,{children:"Blog"})]}),(0,Ud.jsx)("p",{children:"Discover insights, updates, and stories from our team"})]}),r?(0,Ud.jsx)(lh,{}):(0,Ud.jsx)(Ud.Fragment,{children:(0,Ud.jsxs)(sw,{children:[(0,Ud.jsx)(lw,{type:"text",placeholder:"Search posts...",value:i,onChange:e=>a(e.target.value)}),(0,Ud.jsxs)(cw,{value:s,onChange:e=>l(e.target.value),children:[(0,Ud.jsx)("option",{value:"all",children:"All Tags"}),c.map((e=>(0,Ud.jsx)("option",{value:e,children:e},e)))]})]})}),(0,Ud.jsx)(Jb,{children:p.map((e=>(0,Ud.jsxs)(Zb,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.image&&(0,Ud.jsx)(ew,{children:(0,Ud.jsx)("img",{src:e.image,alt:e.title})}),(0,Ud.jsxs)(tw,{children:[(0,Ud.jsx)(rw,{children:(0,Ud.jsx)(Pe,{to:`/blog/${e._id}`,children:e.title})}),(0,Ud.jsxs)(nw,{children:[e.content.substring(0,150),"..."]}),(0,Ud.jsx)(ow,{children:e.tags.map((e=>(0,Ud.jsx)(iw,{children:e},e)))}),(0,Ud.jsxs)(aw,{children:[(0,Ud.jsx)("span",{children:e.author}),(0,Ud.jsx)("span",{children:new Date(e.date).toLocaleDateString()})]})]})]},e._id)))})]})},pw=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`,hw=dr.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .meta {
    color: ${e=>e.theme.colors.textSecondary};
    font-size: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .date {
    color: ${e=>e.theme.colors.textSecondary};
    font-size: 0.875rem;
  }
`,fw=dr.div`
  color: ${e=>e.theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1.5rem;
  }
`,mw=dr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`,gw=dr.span`
  background: ${e=>e.theme.colors.primary}20;
  color: ${e=>e.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`,vw=dr(Pe)`
  display: inline-flex;
  align-items: center;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${e=>e.theme.colors.primaryDark};
  }

  svg {
    margin-right: 0.5rem;
    width: 18px;
    height: 18px;
  }
`,yw=dr.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,xw=()=>{const{id:e}=ee(),[t,r]=(0,n.useState)(null),[o,i]=(0,n.useState)(!0);(0,n.useEffect)((()=>{a()}),[e]);const a=async()=>{try{const t=await Ld.get(`/api/content/${e}`);r(t.data),i(!1)}catch(t){console.error("Error fetching blog post:",t),i(!1)}};return t?(0,Ud.jsx)(pw,{children:o?(0,Ud.jsx)(lh,{}):(0,Ud.jsxs)(Ud.Fragment,{children:[(0,Ud.jsxs)(vw,{to:"/blog",children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Blog"]}),(0,Ud.jsxs)(hw,{children:[(0,Ud.jsx)("h1",{children:t.title}),t.image&&(0,Ud.jsx)(yw,{children:(0,Ud.jsx)("img",{src:t.image,alt:t.title})}),(0,Ud.jsxs)("div",{className:"meta",children:[(0,Ud.jsxs)("span",{children:["By ",t.author]}),(0,Ud.jsx)("span",{children:"\u2022"}),(0,Ud.jsx)("span",{className:"date",children:new Date(t.date).toLocaleDateString()})]}),(0,Ud.jsx)(mw,{children:t.tags.map((e=>(0,Ud.jsx)(gw,{children:e},e)))})]}),(0,Ud.jsx)(fw,{children:t.content.split("\n").map(((e,t)=>(0,Ud.jsx)("p",{children:e},t)))})]})}):(0,Ud.jsx)(pw,{children:o?(0,Ud.jsx)(lh,{}):(0,Ud.jsx)(Ud.Fragment,{children:(0,Ud.jsxs)(hw,{children:[(0,Ud.jsx)("h1",{children:"Post not found"}),(0,Ud.jsxs)(vw,{to:"/blog",children:[(0,Ud.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Ud.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Blog"]})]})})})},bw=dr.div`
  padding: 0;
  margin: 0 auto;
  width: 100%;
  font-family: "Inter", sans-serif;
  background: #0a0a0a;
  color: var(--color-text-primary);
  min-height: 100vh;
`,ww=dr.div`
  background: linear-gradient(
    135deg,
    rgba(var(--color-primary-rgb), -0.7) 15%,
    hsl(217, 76.7%, 48.8%) 150%
  );
  padding: 6rem 2rem 6rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  backdrop-filter: blur(10px);
`,kw=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`,jw=dr.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: linear-gradient(
    135deg,
    rgba(var(--color-primary-rgb), 0.1) 0%,
    rgba(var(--color-primary-rgb), 0) 70%
  );
  border-radius: 50%;
  top: -200px;
  left: -200px;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
  filter: blur(40px);

  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(20px, 20px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
`,Sw=dr(hc.h1)`
  font-family: "Poppins", sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  max-width: 1200px;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--color-primary),
      var(--color-primary-light)
    );
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100px;
  }
`,Ew=dr(hc.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: var(--color-text-secondary);
  max-width: 1200px;
  margin-bottom: 2.5rem;
  font-weight: 400;
  position: relative;
  padding-left: 1.5rem;
  border-left: 3px solid rgba(var(--color-primary-rgb), 0.2);
  backdrop-filter: blur(5px);
`,Cw=dr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 6rem;
`,Tw=dr(hc.h2)`
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: var(--color-heading);
  margin-bottom: 3rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--color-primary),
      var(--color-primary-light)
    );
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 120px;
  }
`,_w=dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  padding: 1rem 0 6rem 0rem;
`,Pw=dr(hc.div)`
  background: rgba(30, 30, 30, 0.8);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid var(--color-border);
  transform-origin: center;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(var(--color-primary-rgb), 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(var(--color-primary-rgb), 0.1) 0%,
      rgba(var(--color-primary-rgb), 0) 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,Lw=dr(hc.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  background-color: rgba(var(--color-primary-rgb), 0.2);
  min-height: 240px;
  border-bottom: 1px solid var(--color-border);
  transform-origin: center;
  transition: transform 0.3s ease;
  filter: grayscale(20%);

  ${Pw}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
`,Aw=dr.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`,Rw=dr.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
  position: relative;
  padding-bottom: 0.8rem;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 50px;
    background: linear-gradient(
      90deg,
      var(--color-primary),
      var(--color-primary-light)
    );
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  ${Pw}:hover &::after {
    width: 100px;
  }
`,Ow=dr.p`
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  ${Pw}:hover & {
    color: var(--color-text-primary);
  }
`,zw=dr(hc.button)`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: var(--color-text-primary);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  box-shadow: 0 4px 15px rgba(var(--color-primary-rgb), 0.3);
  position: relative;
  overflow: hidden;
  align-self: flex-start;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(var(--color-primary-rgb), 0.4);
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:active {
    transform: translateY(0);
  }
`,Nw=dr.div`
  text-align: center;
  color: #ff6b6b;
  padding: 2rem;
  font-size: 1.1rem;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 600px;
  border: 1px solid rgba(255, 107, 107, 0.2);
  backdrop-filter: blur(5px);
`,Dw=dr.span`
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: scaleX(0.7);
    transition: all 0.3s ease;
  }
`,Iw=()=>{const{id:e}=ee(),t=Q(),[r,o]=(0,n.useState)(null),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null),c=t.state||{};if((0,n.useEffect)((()=>{o({_id:"67f0e71133569e2019f8aa0f",title:"New Service",slug:"new",description:"New Service demo",icon:"\u2728",createdAt:"1743841041056",updatedAt:"1743841041059",subServices:[{title:"Sub-services",description:"Sub-services Description",imageUrl:"https://placehold.co/800x400/6d43b8/ffffff?text=Sub-services",features:[],_id:"67f0eec59a0bdd0a4cb8741a"},{title:"Second sub service",description:"Second sub",imageUrl:"https://placehold.co/800x400/9a7ed0/ffffff?text=Second+Sub+Service",features:[],_id:"67f0eec59a0bdd0a4cb8741b"}]}),a(!1);e&&(async()=>{try{a(!0);const t=await Jh.get(`/api/services/slug/${e}`);if(!t.data||!t.data.success)throw new Error(t.data&&t.data.message||"Failed to fetch service details");const r=t.data.data;r.subServices||(r.subServices=[]),o(r)}catch(t){console.error("Error fetching service details:",t),l(t.message||"Failed to load service details")}finally{a(!1)}})()}),[e,c]),(0,n.useEffect)((()=>{if(!r||!r.subServices)return;const e=r.subServices;e.length>0&&e.forEach(((e,t)=>{if(e.imageUrl){const r=new Image;r.onload=()=>console.log(`Image ${t} loaded: ${e.imageUrl}`),r.onerror=()=>{console.error(`Image ${t} failed to load: ${e.imageUrl}`)},r.src=e.imageUrl}}))}),[r]),i)return(0,Ud.jsx)(bw,{children:(0,Ud.jsx)(lh,{})});if(s)return(0,Ud.jsx)(bw,{children:(0,Ud.jsx)(Nw,{children:s})});if(!r)return(0,Ud.jsx)(bw,{children:(0,Ud.jsx)(Nw,{children:"Service not found"})});const u=Array.isArray(r.subServices)&&r.subServices.length>0?r.subServices:[];return(0,Ud.jsxs)(bw,{children:[(0,Ud.jsxs)(ww,{children:[(0,Ud.jsx)(jw,{}),(0,Ud.jsx)(kw,{children:(0,Ud.jsxs)(Rr,{children:[(0,Ud.jsx)(Sw,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:r.title}),(0,Ud.jsx)(Ew,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:r.description}),(0,Ud.jsxs)(zw,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},whileHover:{scale:1.02},whileTap:{scale:.98},children:["Request ",r.title]})]})})]}),(0,Ud.jsxs)(Cw,{children:[u.length>0&&(0,Ud.jsxs)(Ud.Fragment,{children:[(0,Ud.jsxs)(Tw,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:["Our ",(0,Ud.jsx)(Dw,{children:"Services"})]}),(0,Ud.jsx)(_w,{children:(0,Ud.jsx)(Rr,{children:u.map(((e,t)=>(0,Ud.jsxs)(Pw,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},whileHover:{y:-8},children:[(0,Ud.jsx)(Lw,{src:e.imageUrl||"https://placehold.co/800x400/cccccc/666666?text=No+Image",alt:e.title||"Untitled Service",onLoad:e=>{e.target.style.display="block"},onError:e=>{e.target.onerror=null,e.target.src="https://placehold.co/800x400/cccccc/666666?text=Image+Not+Available"}}),(0,Ud.jsxs)(Aw,{children:[(0,Ud.jsx)(Rw,{children:e.title||"Untitled Service"}),(0,Ud.jsx)(Ow,{children:e.description||"No description available"})]})]},t)))})})]}),(0,Ud.jsx)(Am,{})]})]})},Mw=()=>{const{pathname:e}=Q();return(0,n.useLayoutEffect)((()=>{window.scrollTo({top:0,left:0,behavior:"auto"})}),[e]),null},$w=()=>{const e=Q();return(0,Ud.jsxs)(ye,{location:e,children:[(0,Ud.jsx)(ge,{path:"/",element:(0,Ud.jsx)(qm,{})}),(0,Ud.jsx)(ge,{path:"/about",element:(0,Ud.jsx)(Rg,{})}),(0,Ud.jsx)(ge,{path:"/projects",element:(0,Ud.jsx)(Yg,{})}),(0,Ud.jsx)(ge,{path:"/projects/:id",element:(0,Ud.jsx)(zv,{})}),(0,Ud.jsx)(ge,{path:"/contact",element:(0,Ud.jsx)(Gg,{})}),(0,Ud.jsx)(ge,{path:"/services",element:(0,Ud.jsx)(gv,{})}),(0,Ud.jsx)(ge,{path:"/services/:id",element:(0,Ud.jsx)(Iw,{})}),(0,Ud.jsx)(ge,{path:"/blog",element:(0,Ud.jsx)(dw,{})}),(0,Ud.jsx)(ge,{path:"/blog/:id",element:(0,Ud.jsx)(xw,{})}),(0,Ud.jsx)(ge,{path:"/admin/login",element:(0,Ud.jsx)(ry,{})}),(0,Ud.jsx)(ge,{path:"/admin/*",element:(0,Ud.jsx)(ch,{children:(0,Ud.jsx)(Kb,{})})}),(0,Ud.jsx)(ge,{path:"*",element:(0,Ud.jsx)(nv,{})})]},e.pathname)},Fw=()=>{const[e,t]=(0,n.useState)(!0),[r,o]=(0,n.useState)(!1),i=Q().pathname.startsWith("/admin");return(0,n.useEffect)((()=>{const e=setTimeout((()=>{t(!1)}),1500),r="ontouchstart"in window||navigator.maxTouchPoints>0;return o(!r),()=>clearTimeout(e)}),[]),(0,Ud.jsxs)("div",{className:"min-h-screen flex flex-col "+(r?"custom-cursor":""),children:[(0,Ud.jsx)(Rr,{mode:"wait",children:e&&(0,Ud.jsx)(hc.div,{className:"fixed inset-0 flex justify-center items-center z-50 bg-gray-900",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.8,ease:"easeInOut"}},transition:{duration:.5},children:(0,Ud.jsxs)(hc.h1,{className:"text-4xl md:text-5xl font-bold text-primary-500 font-heading",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0,transition:{duration:.5,ease:"easeInOut"}},transition:{duration:.5,ease:"easeOut"},children:["TECHVEDA",(0,Ud.jsx)("span",{className:"text-primary-600",children:"."})]})})}),r&&(0,Ud.jsx)(eh,{}),!i&&(0,Ud.jsx)(Kp,{}),(0,Ud.jsxs)("main",{className:"flex-1 "+(i?"":"pt-16"),children:[(0,Ud.jsx)(Mw,{}),(0,Ud.jsx)($w,{})]}),!i&&(0,Ud.jsx)(Gp,{}),(0,Ud.jsx)(lp,{})]})};const Bw=function(){return(0,n.useEffect)((()=>{document.documentElement.classList.add("dark")}),[]),(0,Ud.jsxs)(ir,{theme:mc,children:[(0,Ud.jsx)(fc,{}),(0,Ud.jsx)(Wd,{children:(0,Ud.jsxs)(Qd,{children:[(0,Ud.jsx)(Ce,{children:(0,Ud.jsx)(Fw,{})}),(0,Ud.jsx)(Xp,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})})]})};i.createRoot(document.getElementById("root")).render((0,Ud.jsx)(n.StrictMode,{children:(0,Ud.jsx)(Bw,{})}))})()})();
//# sourceMappingURL=main.f570d782.js.map