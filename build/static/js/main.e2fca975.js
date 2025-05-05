/*! For license information please see main.e2fca975.js.LICENSE.txt */
(()=>{var e={43:(e,t,r)=>{"use strict";e.exports=r(202)},153:(e,t,r)=>{"use strict";var n=r(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function x(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=v.prototype;var b=y.prototype=new x;b.constructor=y,f(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:r,type:e,key:a,ref:s,props:o,_owner:j.current}}function T(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return a=a(l=e),e=""===o?"."+_(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(C,"$&/")+"/"),P(a,t,i,"",(function(e){return e}))):null!=a&&(T(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var d=o+_(s=e[c],c);l+=P(s,t,i,d,a)}else if(d=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=P(s=s.value,t,i,d=o+_(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function L(e,t,r){if(null==e)return e;var n=[],i=0;return P(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},z={transition:null},O={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:z,ReactCurrentOwner:j};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:L,forEach:function(e,t,r){L(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=y,t.StrictMode=o,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=N,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=f({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:r,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,i=e[n];if(!(0<o(i,t)))break e;e[n]=t,e[r]=i,r=n}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,i=e.length,a=i>>>1;n<a;){var s=2*(n+1)-1,l=e[s],c=s+1,d=e[c];if(0>o(l,r))c<i&&0>o(d,l)?(e[n]=d,e[c]=r,n=c):(e[n]=l,e[s]=r,n=s);else{if(!(c<i&&0>o(d,r)))break e;e[n]=d,e[c]=r,n=c}}}return t}function o(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,h=3,m=!1,f=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=n(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,r(c,t)}t=n(d)}}function w(e){if(g=!1,b(e),!f)if(null!==n(c))f=!0,z(k);else{var t=n(d);null!==t&&O(w,t.startTime-e)}}function k(e,r){f=!1,g&&(g=!1,x(T),T=-1),m=!0;var o=h;try{for(b(r),p=n(c);null!==p&&(!(p.expirationTime>r)||e&&!P());){var a=p.callback;if("function"===typeof a){p.callback=null,h=p.priorityLevel;var s=a(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof s?p.callback=s:p===n(c)&&i(c),b(r)}else i(c);p=n(c)}if(null!==p)var l=!0;else{var u=n(d);null!==u&&O(w,u.startTime-r),l=!1}return l}finally{p=null,h=o,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,E=null,T=-1,C=5,_=-1;function P(){return!(t.unstable_now()-_<C)}function L(){if(null!==E){var e=t.unstable_now();_=e;var r=!0;try{r=E(!0,e)}finally{r?j():(S=!1,E=null)}}else S=!1}if("function"===typeof y)j=function(){y(L)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,A=R.port2;R.port1.onmessage=L,j=function(){A.postMessage(null)}}else j=function(){v(L,0)};function z(e){E=e,S||(S=!0,j())}function O(e,r){T=v((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){f||m||(f=!0,z(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var r=h;h=t;try{return e()}finally{h=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=h;h=e;try{return t()}finally{h=r}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,r(d,e),null===n(c)&&e===n(d)&&(g?(x(T),T=-1):g=!0,O(w,o-a))):(e.sortIndex=s,r(c,e),f||m||(f=!0,z(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=h;return function(){var r=h;h=t;try{return e.apply(this,arguments)}finally{h=r}}}},324:e=>{e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(i=r?r.call(n,d,u,c):void 0)||void 0===i&&d!==u)return!1}return!0}},391:(e,t,r)=>{"use strict";var n=r(950);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(e,t,r)=>{"use strict";var n=r(43),i=r(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},m={};function f(e,t,r,n,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new f(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new f(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new f(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new f(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new f(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new f(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new f(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new f(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new f(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}function y(e,t,r,n){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,i,n)&&(r=null),n||null===i?function(e){return!!u.call(m,e)||!u.call(h,e)&&(p.test(e)?m[e]=!0:(h[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=null===r?3!==i.type&&"":r:(t=i.attributeName,n=i.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(i=i.type)||4===i&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,x);g[t]=new f(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,x);g[t]=new f(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,x);g[t]=new f(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new f(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new f("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new f(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),C=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var D,I=Object.assign;function M(e){if(void 0===D)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var $=!1;function F(e,t){if(!e||$)return"";$=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=n.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{$=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?M(e):""}function B(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case E:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case L:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case T:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return U(e(t))}catch(r){}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=H(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function G(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=W(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){Q(e,t);var r=W(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&X(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+W(r),t=null,i=0;i<e.length;i++){if(e[i].value===r)return e[i].selected=!0,void(n&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(o(92));if(te(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:W(r)}}function oe(e,t){var r=W(t.value),n=W(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,ue=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return de(e,t)}))}:de);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function fe(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),i=fe(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}Object.keys(he).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ee(e){if(e=yi(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Te(e){je?Se?Se.push(e):Se=[e]:je=e}function Ce(){if(je){var e=je,t=Se;if(Se=je=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function _e(e,t){return e(t)}function Pe(){}var Le=!1;function Re(e,t,r){if(Le)return e(t,r);Le=!0;try{return _e(e,t,r)}finally{Le=!1,(null!==je||null!==Se)&&(Pe(),Ce())}}function Ae(e,t){var r=e.stateNode;if(null===r)return null;var n=wi(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(o(231,t,typeof r));return r}var ze=!1;if(d)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(de){ze=!1}function Ne(e,t,r,n,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var De=!1,Ie=null,Me=!1,$e=null,Fe={onError:function(e){De=!0,Ie=e}};function Be(e,t,r,n,i,o,a,s,l){De=!1,Ie=null,Ne.apply(Fe,arguments)}function Ue(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Ve(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(o(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(n=i.return)){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return We(i),e;if(a===n)return We(i),t;a=a.sibling}throw Error(o(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=a;break}if(l===n){s=!0,n=i,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=i;break}if(l===n){s=!0,n=a,r=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(r.alternate!==n)throw Error(o(190))}if(3!==r.tag)throw Error(o(188));return r.stateNode.current===r?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,Xe=i.unstable_cancelCallback,Ke=i.unstable_shouldYield,Ge=i.unstable_requestPaint,Qe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,rt=i.unstable_LowPriority,nt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,dt=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&r;if(0!==a){var s=a&~i;0!==s?n=ut(s):0!==(o&=a)&&(n=ut(o))}else 0!==(a=r&~i)?n=ut(a):0!==o&&(n=ut(o));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&i)&&((i=n&-n)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)i=1<<(r=31-at(t)),n|=e[r],t&=~i;return n}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ft(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=r}function xt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-at(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var yt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,jt,St,Et,Tt=!1,Ct=[],_t=null,Pt=null,Lt=null,Rt=new Map,At=new Map,zt=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function Dt(e,t,r,n,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&kt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function It(e){var t=xi(e.target);if(null!==t){var r=Ue(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Ve(r)))return e.blockedOn=t,void Et(e.priority,(function(){jt(r)}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=yi(r))&&kt(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);be=n,r.target.dispatchEvent(n),be=null,t.shift()}return!0}function $t(e,t,r){Mt(e)&&r.delete(t)}function Ft(){Tt=!1,null!==_t&&Mt(_t)&&(_t=null),null!==Pt&&Mt(Pt)&&(Pt=null),null!==Lt&&Mt(Lt)&&(Lt=null),Rt.forEach($t),At.forEach($t)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Tt||(Tt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ft)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Ct.length){Bt(Ct[0],e);for(var r=1;r<Ct.length;r++){var n=Ct[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==_t&&Bt(_t,e),null!==Pt&&Bt(Pt,e),null!==Lt&&Bt(Lt,e),Rt.forEach(t),At.forEach(t),r=0;r<zt.length;r++)(n=zt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<zt.length&&null===(r=zt[0]).blockedOn;)It(r),null===r.blockedOn&&zt.shift()}var Vt=b.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,r,n){var i=yt,o=Vt.transition;Vt.transition=null;try{yt=1,Yt(e,t,r,n)}finally{yt=i,Vt.transition=o}}function qt(e,t,r,n){var i=yt,o=Vt.transition;Vt.transition=null;try{yt=4,Yt(e,t,r,n)}finally{yt=i,Vt.transition=o}}function Yt(e,t,r,n){if(Wt){var i=Kt(e,t,r,n);if(null===i)Wn(e,t,n,Xt,r),Nt(e,n);else if(function(e,t,r,n,i){switch(t){case"focusin":return _t=Dt(_t,e,t,r,n,i),!0;case"dragenter":return Pt=Dt(Pt,e,t,r,n,i),!0;case"mouseover":return Lt=Dt(Lt,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Rt.set(o,Dt(Rt.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,At.set(o,Dt(At.get(o)||null,e,t,r,n,i)),!0}return!1}(i,e,t,r,n))n.stopPropagation();else if(Nt(e,n),4&t&&-1<Ot.indexOf(e)){for(;null!==i;){var o=yi(i);if(null!==o&&wt(o),null===(o=Kt(e,t,r,n))&&Wn(e,t,n,Xt,r),o===i)break;i=o}null!==i&&n.stopPropagation()}else Wn(e,t,n,null,r)}}var Xt=null;function Kt(e,t,r,n){if(Xt=null,null!==(e=xi(e=we(n))))if(null===(t=Ue(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=Ve(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function er(){if(Zt)return Zt;var e,t,r=Jt,n=r.length,i="value"in Qt?Qt.value:Qt.textContent,o=i.length;for(e=0;e<n&&r[e]===i[e];e++);var a=n-e;for(t=1;t<=a&&r[n-t]===i[o-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function ir(e){function t(t,r,n,i,o){for(var a in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var or,ar,sr,lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=ir(lr),dr=I({},lr,{view:0,detail:0}),ur=ir(dr),pr=I({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&"mousemove"===e.type?(or=e.screenX-sr.screenX,ar=e.screenY-sr.screenY):ar=or=0,sr=e),or)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),hr=ir(pr),mr=ir(I({},pr,{dataTransfer:0})),fr=ir(I({},dr,{relatedTarget:0})),gr=ir(I({},lr,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=I({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xr=ir(vr),yr=ir(I({},lr,{data:0})),br={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function Sr(){return jr}var Er=I({},dr,{key:function(e){if(e.key){var t=br[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tr=ir(Er),Cr=ir(I({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_r=ir(I({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr})),Pr=ir(I({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Lr=I({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rr=ir(Lr),Ar=[9,13,27,32],zr=d&&"CompositionEvent"in window,Or=null;d&&"documentMode"in document&&(Or=document.documentMode);var Nr=d&&"TextEvent"in window&&!Or,Dr=d&&(!zr||Or&&8<Or&&11>=Or),Ir=String.fromCharCode(32),Mr=!1;function $r(e,t){switch(e){case"keyup":return-1!==Ar.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var Ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Ur[e.type]:"textarea"===t}function Wr(e,t,r,n){Te(n),0<(t=qn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Hr=null,qr=null;function Yr(e){Mn(e,0)}function Xr(e){if(Y(bi(e)))return e}function Kr(e,t){if("change"===e)return t}var Gr=!1;if(d){var Qr;if(d){var Jr="oninput"in document;if(!Jr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Jr="function"===typeof Zr.oninput}Qr=Jr}else Qr=!1;Gr=Qr&&(!document.documentMode||9<document.documentMode)}function en(){Hr&&(Hr.detachEvent("onpropertychange",tn),qr=Hr=null)}function tn(e){if("value"===e.propertyName&&Xr(qr)){var t=[];Wr(t,qr,e,we(e)),Re(Yr,t)}}function rn(e,t,r){"focusin"===e?(en(),qr=r,(Hr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xr(qr)}function on(e,t){if("click"===e)return Xr(t)}function an(e,t){if("input"===e||"change"===e)return Xr(t)}var sn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ln(e,t){if(sn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!u.call(t,i)||!sn(e[i],t[i]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dn(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function un(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?un(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=X((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&un(r.ownerDocument.documentElement,r)){if(null!==n&&hn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=void 0===n.end?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=dn(r,o);var a=dn(r,n);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fn=d&&"documentMode"in document&&11>=document.documentMode,gn=null,vn=null,xn=null,yn=!1;function bn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;yn||null==gn||gn!==X(n)||("selectionStart"in(n=gn)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},xn&&ln(xn,n)||(xn=n,0<(n=qn(vn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},jn={},Sn={};function En(e){if(jn[e])return jn[e];if(!kn[e])return e;var t,r=kn[e];for(t in r)if(r.hasOwnProperty(t)&&t in Sn)return jn[e]=r[t];return e}d&&(Sn=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);var Tn=En("animationend"),Cn=En("animationiteration"),_n=En("animationstart"),Pn=En("transitionend"),Ln=new Map,Rn="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){Ln.set(e,t),l(t,[e])}for(var zn=0;zn<Rn.length;zn++){var On=Rn[zn];An(On.toLowerCase(),"on"+(On[0].toUpperCase()+On.slice(1)))}An(Tn,"onAnimationEnd"),An(Cn,"onAnimationIteration"),An(_n,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(Pn,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dn=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function In(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,i,a,s,l,c){if(Be.apply(this,arguments),De){if(!De)throw Error(o(198));var d=Ie;De=!1,Ie=null,Me||(Me=!0,$e=d)}}(n,t,void 0,e),e.currentTarget=null}function Mn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;In(i,s,c),o=l}else for(a=0;a<n.length;a++){if(l=(s=n[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;In(i,s,c),o=l}}}if(Me)throw e=$e,Me=!1,$e=null,e}function $n(e,t){var r=t[fi];void 0===r&&(r=t[fi]=new Set);var n=e+"__bubble";r.has(n)||(Vn(t,e,2,!1),r.add(n))}function Fn(e,t,r){var n=0;t&&(n|=4),Vn(r,e,n,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[Bn]){e[Bn]=!0,a.forEach((function(t){"selectionchange"!==t&&(Dn.has(t)||Fn(t,!1,e),Fn(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bn]||(t[Bn]=!0,Fn("selectionchange",!1,t))}}function Vn(e,t,r,n){switch(Gt(t)){case 1:var i=Ht;break;case 4:i=qt;break;default:i=Yt}r=i.bind(null,t,r,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),n?void 0!==i?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):void 0!==i?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Wn(e,t,r,n,i){var o=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var a=n.tag;if(3===a||4===a){var s=n.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=n.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=xi(s)))return;if(5===(l=a.tag)||6===l){n=o=a;continue e}s=s.parentNode}}n=n.return}Re((function(){var n=o,i=we(r),a=[];e:{var s=Ln.get(e);if(void 0!==s){var l=cr,c=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":l=Tr;break;case"focusin":c="focus",l=fr;break;case"focusout":c="blur",l=fr;break;case"beforeblur":case"afterblur":l=fr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=_r;break;case Tn:case Cn:case _n:l=gr;break;case Pn:l=Pr;break;case"scroll":l=ur;break;case"wheel":l=Rr;break;case"copy":case"cut":case"paste":l=xr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Cr}var d=0!==(4&t),u=!d&&"scroll"===e,p=d?null!==s?s+"Capture":null:s;d=[];for(var h,m=n;null!==m;){var f=(h=m).stateNode;if(5===h.tag&&null!==f&&(h=f,null!==p&&(null!=(f=Ae(m,p))&&d.push(Hn(m,f,h)))),u)break;m=m.return}0<d.length&&(s=new l(s,c,null,r,i),a.push({event:s,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||r===be||!(c=r.relatedTarget||r.fromElement)||!xi(c)&&!c[mi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=n,null!==(c=(c=r.relatedTarget||r.toElement)?xi(c):null)&&(c!==(u=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=n),l!==c)){if(d=hr,f="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=Cr,f="onPointerLeave",p="onPointerEnter",m="pointer"),u=null==l?s:bi(l),h=null==c?s:bi(c),(s=new d(f,m+"leave",l,r,i)).target=u,s.relatedTarget=h,f=null,xi(i)===n&&((d=new d(p,m+"enter",c,r,i)).target=h,d.relatedTarget=u,f=d),u=f,l&&c)e:{for(p=c,m=0,h=d=l;h;h=Yn(h))m++;for(h=0,f=p;f;f=Yn(f))h++;for(;0<m-h;)d=Yn(d),m--;for(;0<h-m;)p=Yn(p),h--;for(;m--;){if(d===p||null!==p&&d===p.alternate)break e;d=Yn(d),p=Yn(p)}d=null}else d=null;null!==l&&Xn(a,s,l,d,!1),null!==c&&null!==u&&Xn(a,u,c,d,!0)}if("select"===(l=(s=n?bi(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Kr;else if(Vr(s))if(Gr)g=an;else{g=nn;var v=rn}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=on);switch(g&&(g=g(e,n))?Wr(a,g,r,i):(v&&v(e,s,n),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=n?bi(n):window,e){case"focusin":(Vr(v)||"true"===v.contentEditable)&&(gn=v,vn=n,xn=null);break;case"focusout":xn=vn=gn=null;break;case"mousedown":yn=!0;break;case"contextmenu":case"mouseup":case"dragend":yn=!1,bn(a,r,i);break;case"selectionchange":if(fn)break;case"keydown":case"keyup":bn(a,r,i)}var x;if(zr)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Br?$r(e,r)&&(y="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(y="onCompositionStart");y&&(Dr&&"ko"!==r.locale&&(Br||"onCompositionStart"!==y?"onCompositionEnd"===y&&Br&&(x=er()):(Jt="value"in(Qt=i)?Qt.value:Qt.textContent,Br=!0)),0<(v=qn(n,y)).length&&(y=new yr(y,e,null,r,i),a.push({event:y,listeners:v}),x?y.data=x:null!==(x=Fr(r))&&(y.data=x))),(x=Nr?function(e,t){switch(e){case"compositionend":return Fr(t);case"keypress":return 32!==t.which?null:(Mr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Mr?null:e;default:return null}}(e,r):function(e,t){if(Br)return"compositionend"===e||!zr&&$r(e,t)?(e=er(),Zt=Jt=Qt=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=qn(n,"onBeforeInput")).length&&(i=new yr("onBeforeInput","beforeinput",null,r,i),a.push({event:i,listeners:n}),i.data=x))}Mn(a,t)}))}function Hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qn(e,t){for(var r=t+"Capture",n=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ae(e,r))&&n.unshift(Hn(e,o,i)),null!=(o=Ae(e,t))&&n.push(Hn(e,o,i))),e=e.return}return n}function Yn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xn(e,t,r,n,i){for(var o=t._reactName,a=[];null!==r&&r!==n;){var s=r,l=s.alternate,c=s.stateNode;if(null!==l&&l===n)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Ae(r,o))&&a.unshift(Hn(r,l,s)):i||null!=(l=Ae(r,o))&&a.push(Hn(r,l,s))),r=r.return}0!==a.length&&e.push({event:t,listeners:a})}var Kn=/\r\n?/g,Gn=/\u0000|\uFFFD/g;function Qn(e){return("string"===typeof e?e:""+e).replace(Kn,"\n").replace(Gn,"")}function Jn(e,t,r){if(t=Qn(t),Qn(e)!==t&&r)throw Error(o(425))}function Zn(){}var ei=null,ti=null;function ri(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ni="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ni;function si(e){setTimeout((function(){throw e}))}function li(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&8===i.nodeType)if("/$"===(r=i.data)){if(0===n)return e.removeChild(i),void Ut(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=i}while(r);Ut(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),pi="__reactFiber$"+ui,hi="__reactProps$"+ui,mi="__reactContainer$"+ui,fi="__reactEvents$"+ui,gi="__reactListeners$"+ui,vi="__reactHandles$"+ui;function xi(e){var t=e[pi];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mi]||r[pi]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=di(e);null!==e;){if(r=e[pi])return r;e=di(e)}return t}r=(e=r).parentNode}return null}function yi(e){return!(e=e[pi]||e[mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[hi]||null}var ki=[],ji=-1;function Si(e){return{current:e}}function Ei(e){0>ji||(e.current=ki[ji],ki[ji]=null,ji--)}function Ti(e,t){ji++,ki[ji]=e.current,e.current=t}var Ci={},_i=Si(Ci),Pi=Si(!1),Li=Ci;function Ri(e,t){var r=e.type.contextTypes;if(!r)return Ci;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in r)o[i]=t[i];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ai(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zi(){Ei(Pi),Ei(_i)}function Oi(e,t,r){if(_i.current!==Ci)throw Error(o(168));Ti(_i,t),Ti(Pi,r)}function Ni(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var i in n=n.getChildContext())if(!(i in t))throw Error(o(108,V(e)||"Unknown",i));return I({},r,n)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ci,Li=_i.current,Ti(_i,e),Ti(Pi,Pi.current),!0}function Ii(e,t,r){var n=e.stateNode;if(!n)throw Error(o(169));r?(e=Ni(e,t,Li),n.__reactInternalMemoizedMergedChildContext=e,Ei(Pi),Ei(_i),Ti(_i,e)):Ei(Pi),Ti(Pi,r)}var Mi=null,$i=!1,Fi=!1;function Bi(e){null===Mi?Mi=[e]:Mi.push(e)}function Ui(){if(!Fi&&null!==Mi){Fi=!0;var e=0,t=yt;try{var r=Mi;for(yt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}Mi=null,$i=!1}catch(i){throw null!==Mi&&(Mi=Mi.slice(e+1)),Ye(Ze,Ui),i}finally{yt=t,Fi=!1}}return null}var Vi=[],Wi=0,Hi=null,qi=0,Yi=[],Xi=0,Ki=null,Gi=1,Qi="";function Ji(e,t){Vi[Wi++]=qi,Vi[Wi++]=Hi,Hi=e,qi=t}function Zi(e,t,r){Yi[Xi++]=Gi,Yi[Xi++]=Qi,Yi[Xi++]=Ki,Ki=e;var n=Gi;e=Qi;var i=32-at(n)-1;n&=~(1<<i),r+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Gi=1<<32-at(t)+i|r<<i|n,Qi=o+e}else Gi=1<<o|r<<i|n,Qi=e}function eo(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function to(e){for(;e===Hi;)Hi=Vi[--Wi],Vi[Wi]=null,qi=Vi[--Wi],Vi[Wi]=null;for(;e===Ki;)Ki=Yi[--Xi],Yi[Xi]=null,Qi=Yi[--Xi],Yi[Xi]=null,Gi=Yi[--Xi],Yi[Xi]=null}var ro=null,no=null,io=!1,oo=null;function ao(e,t){var r=Rc(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function so(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ro=e,no=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ro=e,no=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Ki?{id:Gi,overflow:Qi}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=Rc(18,null,null,0)).stateNode=t,r.return=e,e.child=r,ro=e,no=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=no;if(t){var r=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ci(r.nextSibling);var n=ro;t&&so(e,t)?ao(n,r):(e.flags=-4097&e.flags|2,io=!1,ro=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,ro=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ro=e}function po(e){if(e!==ro)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ri(e.type,e.memoizedProps)),t&&(t=no)){if(lo(e))throw ho(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){no=ci(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}no=null}}else no=ro?ci(e.stateNode.nextSibling):null;return!0}function ho(){for(var e=no;e;)e=ci(e.nextSibling)}function mo(){no=ro=null,io=!1}function fo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function vo(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(o(309));var n=r.stateNode}if(!n)throw Error(o(147,e));var i=n,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function xo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=zc(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,r,n){return null===t||6!==t.tag?((t=Ic(r,e.mode,n)).return=e,t):((t=i(t,r)).return=e,t)}function c(e,t,r,n){var o=r.type;return o===j?u(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===A&&yo(o)===t.type)?((n=i(t,r.props)).ref=vo(e,t,r),n.return=e,n):((n=Oc(r.type,r.key,r.props,null,e.mode,n)).ref=vo(e,t,r),n.return=e,n)}function d(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Mc(r,e.mode,n)).return=e,t):((t=i(t,r.children||[])).return=e,t)}function u(e,t,r,n,o){return null===t||7!==t.tag?((t=Nc(r,e.mode,n,o)).return=e,t):((t=i(t,r)).return=e,t)}function p(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ic(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=Oc(t.type,t.key,t.props,null,e.mode,r)).ref=vo(e,null,t),r.return=e,r;case k:return(t=Mc(t,e.mode,r)).return=e,t;case A:return p(e,(0,t._init)(t._payload),r)}if(te(t)||N(t))return(t=Nc(t,e.mode,r,null)).return=e,t;xo(e,t)}return null}function h(e,t,r,n){var i=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==i?null:l(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===i?c(e,t,r,n):null;case k:return r.key===i?d(e,t,r,n):null;case A:return h(e,t,(i=r._init)(r._payload),n)}if(te(r)||N(r))return null!==i?null:u(e,t,r,n,null);xo(e,r)}return null}function m(e,t,r,n,i){if("string"===typeof n&&""!==n||"number"===typeof n)return l(t,e=e.get(r)||null,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return c(t,e=e.get(null===n.key?r:n.key)||null,n,i);case k:return d(t,e=e.get(null===n.key?r:n.key)||null,n,i);case A:return m(e,t,r,(0,n._init)(n._payload),i)}if(te(n)||N(n))return u(t,e=e.get(r)||null,n,i,null);xo(t,n)}return null}function f(i,o,s,l){for(var c=null,d=null,u=o,f=o=0,g=null;null!==u&&f<s.length;f++){u.index>f?(g=u,u=null):g=u.sibling;var v=h(i,u,s[f],l);if(null===v){null===u&&(u=g);break}e&&u&&null===v.alternate&&t(i,u),o=a(v,o,f),null===d?c=v:d.sibling=v,d=v,u=g}if(f===s.length)return r(i,u),io&&Ji(i,f),c;if(null===u){for(;f<s.length;f++)null!==(u=p(i,s[f],l))&&(o=a(u,o,f),null===d?c=u:d.sibling=u,d=u);return io&&Ji(i,f),c}for(u=n(i,u);f<s.length;f++)null!==(g=m(u,i,f,s[f],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?f:g.key),o=a(g,o,f),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach((function(e){return t(i,e)})),io&&Ji(i,f),c}function g(i,s,l,c){var d=N(l);if("function"!==typeof d)throw Error(o(150));if(null==(l=d.call(l)))throw Error(o(151));for(var u=d=null,f=s,g=s=0,v=null,x=l.next();null!==f&&!x.done;g++,x=l.next()){f.index>g?(v=f,f=null):v=f.sibling;var y=h(i,f,x.value,c);if(null===y){null===f&&(f=v);break}e&&f&&null===y.alternate&&t(i,f),s=a(y,s,g),null===u?d=y:u.sibling=y,u=y,f=v}if(x.done)return r(i,f),io&&Ji(i,g),d;if(null===f){for(;!x.done;g++,x=l.next())null!==(x=p(i,x.value,c))&&(s=a(x,s,g),null===u?d=x:u.sibling=x,u=x);return io&&Ji(i,g),d}for(f=n(i,f);!x.done;g++,x=l.next())null!==(x=m(f,i,g,x.value,c))&&(e&&null!==x.alternate&&f.delete(null===x.key?g:x.key),s=a(x,s,g),null===u?d=x:u.sibling=x,u=x);return e&&f.forEach((function(e){return t(i,e)})),io&&Ji(i,g),d}return function e(n,o,a,l){if("object"===typeof a&&null!==a&&a.type===j&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,d=o;null!==d;){if(d.key===c){if((c=a.type)===j){if(7===d.tag){r(n,d.sibling),(o=i(d,a.props.children)).return=n,n=o;break e}}else if(d.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===A&&yo(c)===d.type){r(n,d.sibling),(o=i(d,a.props)).ref=vo(n,d,a),o.return=n,n=o;break e}r(n,d);break}t(n,d),d=d.sibling}a.type===j?((o=Nc(a.props.children,n.mode,l,a.key)).return=n,n=o):((l=Oc(a.type,a.key,a.props,null,n.mode,l)).ref=vo(n,o,a),l.return=n,n=l)}return s(n);case k:e:{for(d=a.key;null!==o;){if(o.key===d){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){r(n,o.sibling),(o=i(o,a.children||[])).return=n,n=o;break e}r(n,o);break}t(n,o),o=o.sibling}(o=Mc(a,n.mode,l)).return=n,n=o}return s(n);case A:return e(n,o,(d=a._init)(a._payload),l)}if(te(a))return f(n,o,a,l);if(N(a))return g(n,o,a,l);xo(n,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(r(n,o.sibling),(o=i(o,a)).return=n,n=o):(r(n,o),(o=Ic(a,n.mode,l)).return=n,n=o),s(n)):r(n,o)}}var wo=bo(!0),ko=bo(!1),jo=Si(null),So=null,Eo=null,To=null;function Co(){To=Eo=So=null}function _o(e){var t=jo.current;Ei(jo),e._currentValue=t}function Po(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Lo(e,t){So=e,To=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ys=!0),e.firstContext=null)}function Ro(e){var t=e._currentValue;if(To!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===So)throw Error(o(308));Eo=e,So.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var Ao=null;function zo(e){null===Ao?Ao=[e]:Ao.push(e)}function Oo(e,t,r,n){var i=t.interleaved;return null===i?(r.next=r,zo(t)):(r.next=i.next,i.next=r),t.interleaved=r,No(e,n)}function No(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var Do=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $o(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fo(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&_l)){var i=n.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),n.pending=t,No(e,r)}return null===(i=n.interleaved)?(t.next=t,zo(n)):(t.next=i.next,i.next=t),n.interleaved=t,No(e,r)}function Bo(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,xt(e,r)}}function Uo(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var i=null,o=null;if(null!==(r=r.firstBaseUpdate)){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===o?i=o=a:o=o.next=a,r=r.next}while(null!==r);null===o?i=o=t:o=o.next=t}else i=o=t;return r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Vo(e,t,r,n){var i=e.updateQueue;Do=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var d=e.alternate;null!==d&&((s=(d=d.updateQueue).lastBaseUpdate)!==a&&(null===s?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(null!==o){var u=i.baseState;for(a=0,d=c=l=null,s=o;;){var p=s.lane,h=s.eventTime;if((n&p)===p){null!==d&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,f=s;switch(p=t,h=r,f.tag){case 1:if("function"===typeof(m=f.payload)){u=m.call(h,u,p);break e}u=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=f.payload)?m.call(h,u,p):m)||void 0===p)break e;u=I({},u,p);break e;case 2:Do=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===d?(c=d=h,l=u):d=d.next=h,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===d&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Dl|=a,e.lanes=a,e.memoizedState=u}}function Wo(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(null!==i){if(n.callback=null,n=r,"function"!==typeof i)throw Error(o(191,i));i.call(n)}}}var Ho={},qo=Si(Ho),Yo=Si(Ho),Xo=Si(Ho);function Ko(e){if(e===Ho)throw Error(o(174));return e}function Go(e,t){switch(Ti(Xo,t),Ti(Yo,e),Ti(qo,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ei(qo),Ti(qo,t)}function Qo(){Ei(qo),Ei(Yo),Ei(Xo)}function Jo(e){Ko(Xo.current);var t=Ko(qo.current),r=le(t,e.type);t!==r&&(Ti(Yo,e),Ti(qo,r))}function Zo(e){Yo.current===e&&(Ei(qo),Ei(Yo))}var ea=Si(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function na(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,da=!1,ua=!1,pa=0,ha=0;function ma(){throw Error(o(321))}function fa(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!sn(e[r],t[r]))return!1;return!0}function ga(e,t,r,n,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:es,e=r(n,i),ua){a=0;do{if(ua=!1,pa=0,25<=a)throw Error(o(301));a+=1,ca=la=null,t.updateQueue=null,ia.current=ts,e=r(n,i)}while(ua)}if(ia.current=Ja,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,da=!1,t)throw Error(o(300));return e}function va(){var e=0!==pa;return pa=0,e}function xa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function ya(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ya(),r=t.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=e;var n=la,i=n.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(null!==i){a=i.next,n=n.baseState;var l=s=null,c=null,d=a;do{var u=d.lane;if((aa&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=p,s=n):c=c.next=p,sa.lanes|=u,Dl|=u}d=d.next}while(null!==d&&d!==a);null===c?s=n:c.next=l,sn(n,t.memoizedState)||(ys=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(null!==(e=r.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,Dl|=a,i=i.next}while(i!==e)}else null===i&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ka(e){var t=ya(),r=t.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(null!==i){r.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sn(a,t.memoizedState)||(ys=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function ja(){}function Sa(e,t){var r=sa,n=ya(),i=t(),a=!sn(n.memoizedState,i);if(a&&(n.memoizedState=i,ys=!0),n=n.queue,Da(Ca.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(r.flags|=2048,Ra(9,Ta.bind(null,r,n,i,t),void 0,null),null===Pl)throw Error(o(349));0!==(30&aa)||Ea(r,t,i)}return i}function Ea(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Ta(e,t,r,n){t.value=r,t.getSnapshot=n,_a(t)&&Pa(e)}function Ca(e,t,r){return r((function(){_a(t)&&Pa(e)}))}function _a(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sn(e,r)}catch(n){return!0}}function Pa(e){var t=No(e,1);null!==t&&rc(t,e,1,-1)}function La(e){var t=xa();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Xa.bind(null,sa,e),[t.memoizedState,e]}function Ra(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Aa(){return ya().memoizedState}function za(e,t,r,n){var i=xa();sa.flags|=e,i.memoizedState=Ra(1|t,r,void 0,void 0===n?null:n)}function Oa(e,t,r,n){var i=ya();n=void 0===n?null:n;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==n&&fa(n,a.deps))return void(i.memoizedState=Ra(t,r,o,n))}sa.flags|=e,i.memoizedState=Ra(1|t,r,o,n)}function Na(e,t){return za(8390656,8,e,t)}function Da(e,t){return Oa(2048,8,e,t)}function Ia(e,t){return Oa(4,2,e,t)}function Ma(e,t){return Oa(4,4,e,t)}function $a(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fa(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Oa(4,4,$a.bind(null,t,e),r)}function Ba(){}function Ua(e,t){var r=ya();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&fa(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Va(e,t){var r=ya();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&fa(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Wa(e,t,r){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,ys=!0),e.memoizedState=r):(sn(r,t)||(r=ft(),sa.lanes|=r,Dl|=r,e.baseState=!0),t)}function Ha(e,t){var r=yt;yt=0!==r&&4>r?r:4,e(!0);var n=oa.transition;oa.transition={};try{e(!1),t()}finally{yt=r,oa.transition=n}}function qa(){return ya().memoizedState}function Ya(e,t,r){var n=tc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ka(e))Ga(t,r);else if(null!==(r=Oo(e,t,r,n))){rc(r,e,n,ec()),Qa(r,t,n)}}function Xa(e,t,r){var n=tc(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ka(e))Ga(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,r);if(i.hasEagerState=!0,i.eagerState=s,sn(s,a)){var l=t.interleaved;return null===l?(i.next=i,zo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(r=Oo(e,t,i,n))&&(rc(r,e,n,i=ec()),Qa(r,t,n))}}function Ka(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Ga(e,t){ua=da=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Qa(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,xt(e,r)}}var Ja={readContext:Ro,useCallback:ma,useContext:ma,useEffect:ma,useImperativeHandle:ma,useInsertionEffect:ma,useLayoutEffect:ma,useMemo:ma,useReducer:ma,useRef:ma,useState:ma,useDebugValue:ma,useDeferredValue:ma,useTransition:ma,useMutableSource:ma,useSyncExternalStore:ma,useId:ma,unstable_isNewReconciler:!1},Za={readContext:Ro,useCallback:function(e,t){return xa().memoizedState=[e,void 0===t?null:t],e},useContext:Ro,useEffect:Na,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,za(4194308,4,$a.bind(null,t,e),r)},useLayoutEffect:function(e,t){return za(4194308,4,e,t)},useInsertionEffect:function(e,t){return za(4,2,e,t)},useMemo:function(e,t){var r=xa();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=xa();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ya.bind(null,sa,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},xa().memoizedState=e},useState:La,useDebugValue:Ba,useDeferredValue:function(e){return xa().memoizedState=e},useTransition:function(){var e=La(!1),t=e[0];return e=Ha.bind(null,e[1]),xa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=sa,i=xa();if(io){if(void 0===r)throw Error(o(407));r=r()}else{if(r=t(),null===Pl)throw Error(o(349));0!==(30&aa)||Ea(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Na(Ca.bind(null,n,a,e),[e]),n.flags|=2048,Ra(9,Ta.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=xa(),t=Pl.identifierPrefix;if(io){var r=Qi;t=":"+t+"R"+(r=(Gi&~(1<<32-at(Gi)-1)).toString(32)+r),0<(r=pa++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=ha++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ro,useCallback:Ua,useContext:Ro,useEffect:Da,useImperativeHandle:Fa,useInsertionEffect:Ia,useLayoutEffect:Ma,useMemo:Va,useReducer:wa,useRef:Aa,useState:function(){return wa(ba)},useDebugValue:Ba,useDeferredValue:function(e){return Wa(ya(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],ya().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:qa,unstable_isNewReconciler:!1},ts={readContext:Ro,useCallback:Ua,useContext:Ro,useEffect:Da,useImperativeHandle:Fa,useInsertionEffect:Ia,useLayoutEffect:Ma,useMemo:Va,useReducer:ka,useRef:Aa,useState:function(){return ka(ba)},useDebugValue:Ba,useDeferredValue:function(e){var t=ya();return null===la?t.memoizedState=e:Wa(t,la.memoizedState,e)},useTransition:function(){return[ka(ba)[0],ya().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:qa,unstable_isNewReconciler:!1};function rs(e,t){if(e&&e.defaultProps){for(var r in t=I({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}function ns(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:I({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ec(),i=tc(e),o=$o(n,i);o.payload=t,void 0!==r&&null!==r&&(o.callback=r),null!==(t=Fo(e,o,i))&&(rc(t,e,i,n),Bo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ec(),i=tc(e),o=$o(n,i);o.tag=1,o.payload=t,void 0!==r&&null!==r&&(o.callback=r),null!==(t=Fo(e,o,i))&&(rc(t,e,i,n),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ec(),n=tc(e),i=$o(r,n);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Fo(e,i,n))&&(rc(t,e,n,r),Bo(t,e,n))}};function os(e,t,r,n,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!ln(r,n)||!ln(i,o))}function as(e,t,r){var n=!1,i=Ci,o=t.contextType;return"object"===typeof o&&null!==o?o=Ro(o):(i=Ai(t)?Li:_i.current,o=(n=null!==(n=t.contextTypes)&&void 0!==n)?Ri(e,i):Ci),t=new t(r,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Io(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Ro(o):(o=Ai(t)?Li:_i.current,i.context=Ri(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(ns(e,t,o,r),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Vo(e,r,i,n),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var r="",n=t;do{r+=B(n),n=n.return}while(n);var i=r}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function us(e,t){try{console.error(t.value)}catch(r){setTimeout((function(){throw r}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,r){(r=$o(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Wl||(Wl=!0,Hl=n),us(0,t)},r}function ms(e,t,r){(r=$o(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){us(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(r.callback=function(){us(0,t),"function"!==typeof n&&(null===ql?ql=new Set([this]):ql.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function fs(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new ps;var i=new Set;n.set(t,i)}else void 0===(i=n.get(t))&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Ec.bind(null,e,t,r),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,r,n,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=$o(-1,1)).tag=2,Fo(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var xs=b.ReactCurrentOwner,ys=!1;function bs(e,t,r,n){t.child=null===e?ko(t,null,r,n):wo(t,e.child,r,n)}function ws(e,t,r,n,i){r=r.render;var o=t.ref;return Lo(t,i),n=ga(e,t,r,n,o,i),r=va(),null===e||ys?(io&&r&&eo(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function ks(e,t,r,n,i){if(null===e){var o=r.type;return"function"!==typeof o||Ac(o)||void 0!==o.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Oc(r.type,null,n,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,js(e,t,o,n,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((r=null!==(r=r.compare)?r:ln)(a,n)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=zc(o,n)).ref=t.ref,e.return=t,t.child=e}function js(e,t,r,n,i){if(null!==e){var o=e.memoizedProps;if(ln(o,n)&&e.ref===t.ref){if(ys=!1,t.pendingProps=n=o,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(ys=!0)}}return Ts(e,t,r,n,i)}function Ss(e,t,r){var n=t.pendingProps,i=n.children,o=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ti(zl,Al),Al|=r;else{if(0===(1073741824&r))return e=null!==o?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ti(zl,Al),Al|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==o?o.baseLanes:r,Ti(zl,Al),Al|=n}else null!==o?(n=o.baseLanes|r,t.memoizedState=null):n=r,Ti(zl,Al),Al|=n;return bs(e,t,i,r),t.child}function Es(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ts(e,t,r,n,i){var o=Ai(r)?Li:_i.current;return o=Ri(t,o),Lo(t,i),r=ga(e,t,r,n,o,i),n=va(),null===e||ys?(io&&n&&eo(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Cs(e,t,r,n,i){if(Ai(r)){var o=!0;Di(t)}else o=!1;if(Lo(t,i),null===t.stateNode)Vs(e,t),as(t,r,n),ls(t,r,n,i),n=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=r.contextType;"object"===typeof c&&null!==c?c=Ro(c):c=Ri(t,c=Ai(r)?Li:_i.current);var d=r.getDerivedStateFromProps,u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate;u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==n||l!==c)&&ss(t,a,n,c),Do=!1;var p=t.memoizedState;a.state=p,Vo(t,n,a,i),l=t.memoizedState,s!==n||p!==l||Pi.current||Do?("function"===typeof d&&(ns(t,r,d,n),l=t.memoizedState),(s=Do||os(t,r,s,n,p,l,c))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=c,n=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Mo(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rs(t.type,s),a.props=c,u=t.pendingProps,p=a.context,"object"===typeof(l=r.contextType)&&null!==l?l=Ro(l):l=Ri(t,l=Ai(r)?Li:_i.current);var h=r.getDerivedStateFromProps;(d="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==u||p!==l)&&ss(t,a,n,l),Do=!1,p=t.memoizedState,a.state=p,Vo(t,n,a,i);var m=t.memoizedState;s!==u||p!==m||Pi.current||Do?("function"===typeof h&&(ns(t,r,h,n),m=t.memoizedState),(c=Do||os(t,r,c,n,p,m,l)||!1)?(d||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(n,m,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(n,m,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),a.props=n,a.state=m,a.context=l,n=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return _s(e,t,r,n,o,i)}function _s(e,t,r,n,i,o){Es(e,t);var a=0!==(128&t.flags);if(!n&&!a)return i&&Ii(t,r,!1),Ws(e,t,o);n=t.stateNode,xs.current=t;var s=a&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):bs(e,t,s,o),t.memoizedState=n.state,i&&Ii(t,r,!0),t.child}function Ps(e){var t=e.stateNode;t.pendingContext?Oi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Oi(0,t.context,!1),Go(e,t.containerInfo)}function Ls(e,t,r,n,i){return mo(),fo(i),t.flags|=256,bs(e,t,r,n),t.child}var Rs,As,zs,Os,Ns={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Is(e,t,r){var n,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&a)),n?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ti(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Dc(l,i,0,null),e=Nc(e,i,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ds(r),t.memoizedState=Ns,e):Ms(t,l));if(null!==(a=e.memoizedState)&&null!==(n=a.dehydrated))return function(e,t,r,n,i,a,s){if(r)return 256&t.flags?(t.flags&=-257,$s(e,t,s,n=ds(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=Dc({mode:"visible",children:n.children},i,0,null),(a=Nc(a,i,s,null)).flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=Ds(s),t.memoizedState=Ns,a);if(0===(1&t.mode))return $s(e,t,s,null);if("$!"===i.data){if(n=i.nextSibling&&i.nextSibling.dataset)var l=n.dgst;return n=l,$s(e,t,s,n=ds(a=Error(o(419)),n,void 0))}if(l=0!==(s&e.childLanes),ys||l){if(null!==(n=Pl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(n.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,No(e,i),rc(n,e,i,-1))}return fc(),$s(e,t,s,n=ds(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Cc.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,no=ci(i.nextSibling),ro=t,io=!0,oo=null,null!==e&&(Yi[Xi++]=Gi,Yi[Xi++]=Qi,Yi[Xi++]=Ki,Gi=e.id,Qi=e.overflow,Ki=t),t=Ms(t,n.children),t.flags|=4096,t)}(e,t,l,i,n,a,r);if(s){s=i.fallback,l=t.mode,n=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=zc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==n?s=zc(n,s):(s=Nc(s,l,r,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ds(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Ns,i}return e=(s=e.child).sibling,i=zc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=r),i.return=t,i.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Ms(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function $s(e,t,r,n){return null!==n&&fo(n),wo(t,e.child,null,r),(e=Ms(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fs(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Po(e.return,t,r)}function Bs(e,t,r,n,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Us(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(bs(e,t,n.children,r),0!==(2&(n=ea.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fs(e,r,t);else if(19===e.tag)Fs(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ti(ea,n),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;null!==r;)null!==(e=r.alternate)&&null===ta(e)&&(i=r),r=r.sibling;null===(r=i)?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Bs(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Bs(t,!0,r,null,o);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Dl|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(r=zc(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=zc(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Hs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=14680064&i.subtreeFlags,n|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Ys(e,t,r){var n=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qs(t),null;case 1:case 17:return Ai(t.type)&&zi(),qs(t),null;case 3:return n=t.stateNode,Qo(),Ei(Pi),Ei(_i),na(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),As(e,t),qs(t),null;case 5:Zo(t);var i=Ko(Xo.current);if(r=t.type,null!==e&&null!=t.stateNode)zs(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(o(166));return qs(t),null}if(e=Ko(qo.current),po(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[pi]=t,n[hi]=a,e=0!==(1&t.mode),r){case"dialog":$n("cancel",n),$n("close",n);break;case"iframe":case"object":case"embed":$n("load",n);break;case"video":case"audio":for(i=0;i<Nn.length;i++)$n(Nn[i],n);break;case"source":$n("error",n);break;case"img":case"image":case"link":$n("error",n),$n("load",n);break;case"details":$n("toggle",n);break;case"input":G(n,a),$n("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},$n("invalid",n);break;case"textarea":ie(n,a),$n("invalid",n)}for(var l in xe(r,a),i=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?n.textContent!==c&&(!0!==a.suppressHydrationWarning&&Jn(n.textContent,c,e),i=["children",c]):"number"===typeof c&&n.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Jn(n.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&$n("scroll",n)}switch(r){case"input":q(n),Z(n,a,!0);break;case"textarea":q(n),ae(n);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(n.onclick=Zn)}n=i,t.updateQueue=n,null!==n&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),"select"===r&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[pi]=t,e[hi]=n,Rs(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(r,n),r){case"dialog":$n("cancel",e),$n("close",e),i=n;break;case"iframe":case"object":case"embed":$n("load",e),i=n;break;case"video":case"audio":for(i=0;i<Nn.length;i++)$n(Nn[i],e);i=n;break;case"source":$n("error",e),i=n;break;case"img":case"image":case"link":$n("error",e),$n("load",e),i=n;break;case"details":$n("toggle",e),i=n;break;case"input":G(e,n),i=K(e,n),$n("invalid",e);break;case"option":default:i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=I({},n,{value:void 0}),$n("invalid",e);break;case"textarea":ie(e,n),i=ne(e,n),$n("invalid",e)}for(a in xe(r,i),c=i)if(c.hasOwnProperty(a)){var d=c[a];"style"===a?ge(e,d):"dangerouslySetInnerHTML"===a?null!=(d=d?d.__html:void 0)&&ue(e,d):"children"===a?"string"===typeof d?("textarea"!==r||""!==d)&&pe(e,d):"number"===typeof d&&pe(e,""+d):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=d&&"onScroll"===a&&$n("scroll",e):null!=d&&y(e,a,d,l))}switch(r){case"input":q(e),Z(e,n,!1);break;case"textarea":q(e),ae(e);break;case"option":null!=n.value&&e.setAttribute("value",""+W(n.value));break;case"select":e.multiple=!!n.multiple,null!=(a=n.value)?re(e,!!n.multiple,a,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return qs(t),null;case 6:if(e&&null!=t.stateNode)Os(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(o(166));if(r=Ko(Xo.current),Ko(qo.current),po(t)){if(n=t.stateNode,r=t.memoizedProps,n[pi]=t,(a=n.nodeValue!==r)&&null!==(e=ro))switch(e.tag){case 3:Jn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jn(n.nodeValue,r,0!==(1&e.mode))}a&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[pi]=t,t.stateNode=n}return qs(t),null;case 13:if(Ei(ea),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==no&&0!==(1&t.mode)&&0===(128&t.flags))ho(),mo(),t.flags|=98560,a=!1;else if(a=po(t),null!==n&&null!==n.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else mo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ol&&(Ol=3):fc())),null!==t.updateQueue&&(t.flags|=4),qs(t),null);case 4:return Qo(),As(e,t),null===e&&Un(t.stateNode.containerInfo),qs(t),null;case 10:return _o(t.type._context),qs(t),null;case 19:if(Ei(ea),null===(a=t.memoizedState))return qs(t),null;if(n=0!==(128&t.flags),null===(l=a.rendering))if(n)Hs(a,!1);else{if(0!==Ol||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Hs(a,!1),null!==(n=l.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(a=r).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ti(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Qe()>Ul&&(t.flags|=128,n=!0,Hs(a,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=ta(l))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Hs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return qs(t),null}else 2*Qe()-a.renderingStartTime>Ul&&1073741824!==r&&(t.flags|=128,n=!0,Hs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=a.last)?r.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,r=ea.current,Ti(ea,n?1&r|2:1&r),t):(qs(t),null);case 22:case 23:return uc(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Al)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Xs(e,t){switch(to(t),t.tag){case 1:return Ai(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qo(),Ei(Pi),Ei(_i),na(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ei(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));mo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ei(ea),null;case 4:return Qo(),null;case 10:return _o(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Rs=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},As=function(){},zs=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ko(qo.current);var o,a=null;switch(r){case"input":i=K(e,i),n=K(e,n),a=[];break;case"select":i=I({},i,{value:void 0}),n=I({},n,{value:void 0}),a=[];break;case"textarea":i=ne(e,i),n=ne(e,n),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof n.onClick&&(e.onclick=Zn)}for(d in xe(r,n),r=null,i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&null!=i[d])if("style"===d){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(s.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in n){var c=n[d];if(l=null!=i?i[d]:void 0,n.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(a||(a=[]),a.push(d,r)),r=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(d,c)):"children"===d?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(s.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&$n("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}},Os=function(e,t,r,n){r!==n&&(t.flags|=4)};var Ks=!1,Gs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){Sc(e,t,n)}else r.current=null}function el(e,t,r){try{r()}catch(n){Sc(e,t,n)}}var tl=!1;function rl(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,r,o)}i=i.next}while(i!==n)}}function nl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function il(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[hi],delete t[fi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Zn));else if(4!==n&&null!==(e=e.child))for(ll(e,t,r),e=e.sibling;null!==e;)ll(e,t,r),e=e.sibling}function cl(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cl(e,t,r),e=e.sibling;null!==e;)cl(e,t,r),e=e.sibling}var dl=null,ul=!1;function pl(e,t,r){for(r=r.child;null!==r;)hl(e,t,r),r=r.sibling}function hl(e,t,r){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,r)}catch(s){}switch(r.tag){case 5:Gs||Zs(r,t);case 6:var n=dl,i=ul;dl=null,pl(e,t,r),ul=i,null!==(dl=n)&&(ul?(e=dl,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):dl.removeChild(r.stateNode));break;case 18:null!==dl&&(ul?(e=dl,r=r.stateNode,8===e.nodeType?li(e.parentNode,r):1===e.nodeType&&li(e,r),Ut(e)):li(dl,r.stateNode));break;case 4:n=dl,i=ul,dl=r.stateNode.containerInfo,ul=!0,pl(e,t,r),dl=n,ul=i;break;case 0:case 11:case 14:case 15:if(!Gs&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(r,t,a),i=i.next}while(i!==n)}pl(e,t,r);break;case 1:if(!Gs&&(Zs(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Sc(r,t,s)}pl(e,t,r);break;case 21:pl(e,t,r);break;case 22:1&r.mode?(Gs=(n=Gs)||null!==r.memoizedState,pl(e,t,r),Gs=n):pl(e,t,r);break;default:pl(e,t,r)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Qs),t.forEach((function(t){var n=_c.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function fl(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,ul=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,ul=!0;break e}l=l.return}if(null===dl)throw Error(o(160));hl(a,s,i),dl=null,ul=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(d){Sc(i,t,d)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fl(t,e),vl(e),4&n){try{rl(3,e,e.return),nl(3,e)}catch(g){Sc(e,e.return,g)}try{rl(5,e,e.return)}catch(g){Sc(e,e.return,g)}}break;case 1:fl(t,e),vl(e),512&n&&null!==r&&Zs(r,r.return);break;case 5:if(fl(t,e),vl(e),512&n&&null!==r&&Zs(r,r.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Sc(e,e.return,g)}}if(4&n&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==r?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&Q(i,a),ye(l,s);var d=ye(l,a);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];"style"===u?ge(i,p):"dangerouslySetInnerHTML"===u?ue(i,p):"children"===u?pe(i,p):y(i,u,p,d)}switch(l){case"input":J(i,a);break;case"textarea":oe(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;null!=m?re(i,!!a.multiple,m,!1):h!==!!a.multiple&&(null!=a.defaultValue?re(i,!!a.multiple,a.defaultValue,!0):re(i,!!a.multiple,a.multiple?[]:"",!1))}i[hi]=a}catch(g){Sc(e,e.return,g)}}break;case 6:if(fl(t,e),vl(e),4&n){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Sc(e,e.return,g)}}break;case 3:if(fl(t,e),vl(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Sc(e,e.return,g)}break;case 4:default:fl(t,e),vl(e);break;case 13:fl(t,e),vl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Bl=Qe())),4&n&&ml(e);break;case 22:if(u=null!==r&&null!==r.memoizedState,1&e.mode?(Gs=(d=Gs)||u,fl(t,e),Gs=d):fl(t,e),vl(e),8192&n){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&0!==(1&e.mode))for(Js=e,u=e.child;null!==u;){for(p=Js=u;null!==Js;){switch(m=(h=Js).child,h.tag){case 0:case 11:case 14:case 15:rl(4,h,h.return);break;case 1:Zs(h,h.return);var f=h.stateNode;if("function"===typeof f.componentWillUnmount){n=h,r=h.return;try{t=n,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(g){Sc(n,r,g)}}break;case 5:Zs(h,h.return);break;case 22:if(null!==h.memoizedState){wl(p);continue}}null!==m?(m.return=h,Js=m):wl(p)}u=u.sibling}e:for(u=null,p=e;;){if(5===p.tag){if(null===u){u=p;try{i=p.stateNode,d?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=fe("display",s))}catch(g){Sc(e,e.return,g)}}}else if(6===p.tag){if(null===u)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(g){Sc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fl(t,e),vl(e),4&n&&ml(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(al(r)){var n=r;break e}r=r.return}throw Error(o(160))}switch(n.tag){case 5:var i=n.stateNode;32&n.flags&&(pe(i,""),n.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var a=n.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Sc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xl(e,t,r){Js=e,yl(e,t,r)}function yl(e,t,r){for(var n=0!==(1&e.mode);null!==Js;){var i=Js,o=i.child;if(22===i.tag&&n){var a=null!==i.memoizedState||Ks;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Gs;s=Ks;var c=Gs;if(Ks=a,(Gs=l)&&!c)for(Js=i;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?kl(i):null!==l?(l.return=a,Js=l):kl(i);for(;null!==o;)Js=o,yl(o,t,r),o=o.sibling;Js=i,Ks=s,Gs=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Js=o):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gs||nl(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Gs)if(null===r)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:rs(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wo(t,a,n);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Wo(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var p=u.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(o(163))}Gs||512&t.flags&&il(t)}catch(h){Sc(t,t.return,h)}}if(t===e){Js=null;break}if(null!==(r=t.sibling)){r.return=t.return,Js=r;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Js=r;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{nl(4,t)}catch(l){Sc(t,r,l)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var i=t.return;try{n.componentDidMount()}catch(l){Sc(t,i,l)}}var o=t.return;try{il(t)}catch(l){Sc(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Sc(t,a,l)}}}catch(l){Sc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var jl,Sl=Math.ceil,El=b.ReactCurrentDispatcher,Tl=b.ReactCurrentOwner,Cl=b.ReactCurrentBatchConfig,_l=0,Pl=null,Ll=null,Rl=0,Al=0,zl=Si(0),Ol=0,Nl=null,Dl=0,Il=0,Ml=0,$l=null,Fl=null,Bl=0,Ul=1/0,Vl=null,Wl=!1,Hl=null,ql=null,Yl=!1,Xl=null,Kl=0,Gl=0,Ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&_l)?Qe():-1!==Jl?Jl:Jl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&_l)&&0!==Rl?Rl&-Rl:null!==go.transition?(0===Zl&&(Zl=ft()),Zl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function rc(e,t,r,n){if(50<Gl)throw Gl=0,Ql=null,Error(o(185));vt(e,r,n),0!==(2&_l)&&e===Pl||(e===Pl&&(0===(2&_l)&&(Il|=r),4===Ol&&sc(e,Rl)),nc(e,n),1===r&&0===_l&&0===(1&t.mode)&&(Ul=Qe()+500,$i&&Ui()))}function nc(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&r)&&0===(s&n)||(i[a]=ht(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var n=pt(e,e===Pl?Rl:0);if(0===n)null!==r&&Xe(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Xe(r),1===t)0===e.tag?function(e){$i=!0,Bi(e)}(lc.bind(null,e)):Bi(lc.bind(null,e)),ai((function(){0===(6&_l)&&Ui()})),r=null;else{switch(bt(n)){case 1:r=Ze;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=Pc(r,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ic(e,t){if(Jl=-1,Zl=0,0!==(6&_l))throw Error(o(327));var r=e.callbackNode;if(kc()&&e.callbackNode!==r)return null;var n=pt(e,e===Pl?Rl:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=gc(e,n);else{t=n;var i=_l;_l|=2;var a=mc();for(Pl===e&&Rl===t||(Vl=null,Ul=Qe()+500,pc(e,t));;)try{xc();break}catch(l){hc(e,l)}Co(),El.current=a,_l=i,null!==Ll?t=0:(Pl=null,Rl=0,t=Ol)}if(0!==t){if(2===t&&(0!==(i=mt(e))&&(n=i,t=oc(e,i))),1===t)throw r=Nl,pc(e,0),sc(e,n),nc(e,Qe()),r;if(6===t)sc(e,n);else{if(i=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!sn(o(),i))return!1}catch(s){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,n))&&(0!==(a=mt(e))&&(n=a,t=oc(e,a))),1===t))throw r=Nl,pc(e,0),sc(e,n),nc(e,Qe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,Fl,Vl);break;case 3:if(sc(e,n),(130023424&n)===n&&10<(t=Bl+500-Qe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&n)!==n){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ni(wc.bind(null,e,Fl,Vl),t);break}wc(e,Fl,Vl);break;case 4:if(sc(e,n),(4194240&n)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-at(n);a=1<<s,(s=t[s])>i&&(i=s),n&=~a}if(n=i,10<(n=(120>(n=Qe()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Sl(n/1960))-n)){e.timeoutHandle=ni(wc.bind(null,e,Fl,Vl),n);break}wc(e,Fl,Vl);break;default:throw Error(o(329))}}}return nc(e,Qe()),e.callbackNode===r?ic.bind(null,e):null}function oc(e,t){var r=$l;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Fl,Fl=r,null!==t&&ac(t)),e}function ac(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function sc(e,t){for(t&=~Ml,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-at(t),n=1<<r;e[r]=-1,t&=~n}}function lc(e){if(0!==(6&_l))throw Error(o(327));kc();var t=pt(e,0);if(0===(1&t))return nc(e,Qe()),null;var r=gc(e,t);if(0!==e.tag&&2===r){var n=mt(e);0!==n&&(t=n,r=oc(e,n))}if(1===r)throw r=Nl,pc(e,0),sc(e,t),nc(e,Qe()),r;if(6===r)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Fl,Vl),nc(e,Qe()),null}function cc(e,t){var r=_l;_l|=1;try{return e(t)}finally{0===(_l=r)&&(Ul=Qe()+500,$i&&Ui())}}function dc(e){null!==Xl&&0===Xl.tag&&0===(6&_l)&&kc();var t=_l;_l|=1;var r=Cl.transition,n=yt;try{if(Cl.transition=null,yt=1,e)return e()}finally{yt=n,Cl.transition=r,0===(6&(_l=t))&&Ui()}}function uc(){Al=zl.current,Ei(zl)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,ii(r)),null!==Ll)for(r=Ll.return;null!==r;){var n=r;switch(to(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&zi();break;case 3:Qo(),Ei(Pi),Ei(_i),na();break;case 5:Zo(n);break;case 4:Qo();break;case 13:case 19:Ei(ea);break;case 10:_o(n.type._context);break;case 22:case 23:uc()}r=r.return}if(Pl=e,Ll=e=zc(e.current,null),Rl=Al=t,Ol=0,Nl=null,Ml=Il=Dl=0,Fl=$l=null,null!==Ao){for(t=0;t<Ao.length;t++)if(null!==(n=(r=Ao[t]).interleaved)){r.interleaved=null;var i=n.next,o=r.pending;if(null!==o){var a=o.next;o.next=i,n.next=a}r.pending=n}Ao=null}return e}function hc(e,t){for(;;){var r=Ll;try{if(Co(),ia.current=Ja,da){for(var n=sa.memoizedState;null!==n;){var i=n.queue;null!==i&&(i.pending=null),n=n.next}da=!1}if(aa=0,ca=la=sa=null,ua=!1,pa=0,Tl.current=null,null===r||null===r.return){Ol=1,Nl=t,Ll=null;break}e:{var a=e,s=r.return,l=r,c=t;if(t=Rl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var d=c,u=l,p=u.tag;if(0===(1&u.mode)&&(0===p||11===p||15===p)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=gs(s);if(null!==m){m.flags&=-257,vs(m,s,l,0,t),1&m.mode&&fs(a,d,t),c=d;var f=(t=m).updateQueue;if(null===f){var g=new Set;g.add(c),t.updateQueue=g}else f.add(c);break e}if(0===(1&t)){fs(a,d,t),fc();break e}c=Error(o(426))}else if(io&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),fo(cs(c,l));break e}}a=c=cs(c,l),4!==Ol&&(Ol=2),null===$l?$l=[a]:$l.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,hs(0,c,t));break e;case 1:l=c;var x=a.type,y=a.stateNode;if(0===(128&a.flags)&&("function"===typeof x.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===ql||!ql.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,ms(a,l,t));break e}}a=a.return}while(null!==a)}bc(r)}catch(b){t=b,Ll===r&&null!==r&&(Ll=r=r.return);continue}break}}function mc(){var e=El.current;return El.current=Ja,null===e?Ja:e}function fc(){0!==Ol&&3!==Ol&&2!==Ol||(Ol=4),null===Pl||0===(268435455&Dl)&&0===(268435455&Il)||sc(Pl,Rl)}function gc(e,t){var r=_l;_l|=2;var n=mc();for(Pl===e&&Rl===t||(Vl=null,pc(e,t));;)try{vc();break}catch(i){hc(e,i)}if(Co(),_l=r,El.current=n,null!==Ll)throw Error(o(261));return Pl=null,Rl=0,Ol}function vc(){for(;null!==Ll;)yc(Ll)}function xc(){for(;null!==Ll&&!Ke();)yc(Ll)}function yc(e){var t=jl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?bc(e):Ll=t,Tl.current=null}function bc(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Ys(r,t,Al)))return void(Ll=r)}else{if(null!==(r=Xs(r,t)))return r.flags&=32767,void(Ll=r);if(null===e)return Ol=6,void(Ll=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ll=t);Ll=t=e}while(null!==t);0===Ol&&(Ol=5)}function wc(e,t,r){var n=yt,i=Cl.transition;try{Cl.transition=null,yt=1,function(e,t,r,n){do{kc()}while(null!==Xl);if(0!==(6&_l))throw Error(o(327));r=e.finishedWork;var i=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-at(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}(e,a),e===Pl&&(Ll=Pl=null,Rl=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Yl||(Yl=!0,Pc(tt,(function(){return kc(),null}))),a=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||a){a=Cl.transition,Cl.transition=null;var s=yt;yt=1;var l=_l;_l|=4,Tl.current=null,function(e,t){if(ei=Wt,hn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch(w){r=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=e,h=null;t:for(;;){for(var m;p!==r||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==n&&3!==p.nodeType||(c=s+n),3===p.nodeType&&(s+=p.nodeValue.length),null!==(m=p.firstChild);)h=p,p=m;for(;;){if(p===e)break t;if(h===r&&++d===i&&(l=s),h===a&&++u===n&&(c=s),null!==(m=p.nextSibling))break;h=(p=h).parentNode}p=m}r=-1===l||-1===c?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ti={focusedElem:e,selectionRange:r},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var f=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==f){var g=f.memoizedProps,v=f.memoizedState,x=t.stateNode,y=x.getSnapshotBeforeUpdate(t.elementType===t.type?g:rs(t.type,g),v);x.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){Sc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}f=tl,tl=!1}(e,r),gl(r,e),mn(ti),Wt=!!ei,ti=ei=null,e.current=r,xl(r,e,i),Ge(),_l=l,yt=s,Cl.transition=a}else e.current=r;if(Yl&&(Yl=!1,Xl=e,Kl=i),a=e.pendingLanes,0===a&&(ql=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),nc(e,Qe()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Kl)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Ql?Gl++:(Gl=0,Ql=e):Gl=0,Ui()}(e,t,r,n)}finally{Cl.transition=i,yt=n}return null}function kc(){if(null!==Xl){var e=bt(Kl),t=Cl.transition,r=yt;try{if(Cl.transition=null,yt=16>e?16:e,null===Xl)var n=!1;else{if(e=Xl,Xl=null,Kl=0,0!==(6&_l))throw Error(o(331));var i=_l;for(_l|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Js=d;null!==Js;){var u=Js;switch(u.tag){case 0:case 11:case 15:rl(8,u,a)}var p=u.child;if(null!==p)p.return=u,Js=p;else for(;null!==Js;){var h=(u=Js).sibling,m=u.return;if(ol(u),u===d){Js=null;break}if(null!==h){h.return=m,Js=h;break}Js=m}}}var f=a.alternate;if(null!==f){var g=f.child;if(null!==g){f.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:rl(9,a,a.return)}var x=a.sibling;if(null!==x){x.return=a.return,Js=x;break e}Js=a.return}}var y=e.current;for(Js=y;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=y;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(k){Sc(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(_l=i,Ui(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(k){}n=!0}return n}finally{yt=r,Cl.transition=t}}return!1}function jc(e,t,r){e=Fo(e,t=hs(0,t=cs(r,t),1),1),t=ec(),null!==e&&(vt(e,1,t),nc(e,t))}function Sc(e,t,r){if(3===e.tag)jc(e,e,r);else for(;null!==t;){if(3===t.tag){jc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===ql||!ql.has(n))){t=Fo(t,e=ms(t,e=cs(r,e),1),1),e=ec(),null!==t&&(vt(t,1,e),nc(t,e));break}}t=t.return}}function Ec(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&r,Pl===e&&(Rl&r)===r&&(4===Ol||3===Ol&&(130023424&Rl)===Rl&&500>Qe()-Bl?pc(e,0):Ml|=r),nc(e,t)}function Tc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var r=ec();null!==(e=No(e,t))&&(vt(e,t,r),nc(e,r))}function Cc(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Tc(e,r)}function _c(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(o(314))}null!==n&&n.delete(t),Tc(e,r)}function Pc(e,t){return Ye(e,t)}function Lc(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rc(e,t,r,n){return new Lc(e,t,r,n)}function Ac(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zc(e,t){var r=e.alternate;return null===r?((r=Rc(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Oc(e,t,r,n,i,a){var s=2;if(n=e,"function"===typeof e)Ac(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case j:return Nc(r.children,i,a,t);case S:s=8,i|=8;break;case E:return(e=Rc(12,r,t,2|i)).elementType=E,e.lanes=a,e;case P:return(e=Rc(13,r,t,i)).elementType=P,e.lanes=a,e;case L:return(e=Rc(19,r,t,i)).elementType=L,e.lanes=a,e;case z:return Dc(r,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case T:s=10;break e;case C:s=9;break e;case _:s=11;break e;case R:s=14;break e;case A:s=16,n=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Rc(s,r,t,i)).elementType=e,t.type=n,t.lanes=a,t}function Nc(e,t,r,n){return(e=Rc(7,e,n,t)).lanes=r,e}function Dc(e,t,r,n){return(e=Rc(22,e,n,t)).elementType=z,e.lanes=r,e.stateNode={isHidden:!1},e}function Ic(e,t,r){return(e=Rc(6,e,null,t)).lanes=r,e}function Mc(e,t,r){return(t=Rc(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $c(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(e,t,r,n,i,o,a,s,l){return e=new $c(e,t,r,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Rc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(o),e}function Bc(e){if(!e)return Ci;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ai(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var r=e.type;if(Ai(r))return Ni(e,r,t)}return t}function Uc(e,t,r,n,i,o,a,s,l){return(e=Fc(r,n,!0,e,0,o,0,s,l)).context=Bc(null),r=e.current,(o=$o(n=ec(),i=tc(r))).callback=void 0!==t&&null!==t?t:null,Fo(r,o,i),e.current.lanes=i,vt(e,i,n),nc(e,n),e}function Vc(e,t,r,n){var i=t.current,o=ec(),a=tc(i);return r=Bc(r),null===t.context?t.context=r:t.pendingContext=r,(t=$o(o,a)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=Fo(i,t,a))&&(rc(e,i,a,o),Bo(e,i,a)),a}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function qc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}jl=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pi.current)ys=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return ys=!1,function(e,t,r){switch(t.tag){case 3:Ps(t),mo();break;case 5:Jo(t);break;case 1:Ai(t.type)&&Di(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Ti(jo,n._currentValue),n._currentValue=i;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(Ti(ea,1&ea.current),t.flags|=128,null):0!==(r&t.child.childLanes)?Is(e,t,r):(Ti(ea,1&ea.current),null!==(e=Ws(e,t,r))?e.sibling:null);Ti(ea,1&ea.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return Us(e,t,r);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ti(ea,ea.current),n)break;return null;case 22:case 23:return t.lanes=0,Ss(e,t,r)}return Ws(e,t,r)}(e,t,r);ys=0!==(131072&e.flags)}else ys=!1,io&&0!==(1048576&t.flags)&&Zi(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Vs(e,t),e=t.pendingProps;var i=Ri(t,_i.current);Lo(t,r),i=ga(null,t,n,e,i,r);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ai(n)?(a=!0,Di(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Io(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,n,e,r),t=_s(null,t,n,!0,a,r)):(t.tag=0,io&&a&&eo(t),bs(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Vs(e,t),e=t.pendingProps,n=(i=n._init)(n._payload),t.type=n,i=t.tag=function(e){if("function"===typeof e)return Ac(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===R)return 14}return 2}(n),e=rs(n,e),i){case 0:t=Ts(null,t,n,e,r);break e;case 1:t=Cs(null,t,n,e,r);break e;case 11:t=ws(null,t,n,e,r);break e;case 14:t=ks(null,t,n,rs(n.type,e),r);break e}throw Error(o(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,Ts(e,t,n,i=t.elementType===n?i:rs(n,i),r);case 1:return n=t.type,i=t.pendingProps,Cs(e,t,n,i=t.elementType===n?i:rs(n,i),r);case 3:e:{if(Ps(t),null===e)throw Error(o(387));n=t.pendingProps,i=(a=t.memoizedState).element,Mo(e,t),Vo(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated){if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ls(e,t,n,r,i=cs(Error(o(423)),t));break e}if(n!==i){t=Ls(e,t,n,r,i=cs(Error(o(424)),t));break e}for(no=ci(t.stateNode.containerInfo.firstChild),ro=t,io=!0,oo=null,r=ko(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(mo(),n===i){t=Ws(e,t,r);break e}bs(e,t,n,r)}t=t.child}return t;case 5:return Jo(t),null===e&&co(t),n=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ri(n,i)?s=null:null!==a&&ri(n,a)&&(t.flags|=32),Es(e,t),bs(e,t,s,r),t.child;case 6:return null===e&&co(t),null;case 13:return Is(e,t,r);case 4:return Go(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=wo(t,null,n,r):bs(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,ws(e,t,n,i=t.elementType===n?i:rs(n,i),r);case 7:return bs(e,t,t.pendingProps,r),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Ti(jo,n._currentValue),n._currentValue=s,null!==a)if(sn(a.value,s)){if(a.children===i.children&&!Pi.current){t=Ws(e,t,r);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===n){if(1===a.tag){(c=$o(-1,r&-r)).tag=2;var d=a.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=r,null!==(c=a.alternate)&&(c.lanes|=r),Po(a.return,r,t),l.lanes|=r;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),Po(s,r,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Lo(t,r),n=n(i=Ro(i)),t.flags|=1,bs(e,t,n,r),t.child;case 14:return i=rs(n=t.type,t.pendingProps),ks(e,t,n,i=rs(n.type,i),r);case 15:return js(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:rs(n,i),Vs(e,t),t.tag=1,Ai(n)?(e=!0,Di(t)):e=!1,Lo(t,r),as(t,n,i),ls(t,n,i,r),_s(null,t,n,!0,e,r);case 19:return Us(e,t,r);case 22:return Ss(e,t,r)}throw Error(o(156,t.tag))};var Yc="function"===typeof reportError?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}function Kc(e){this._internalRoot=e}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Wc(a);s.call(e)}}Vc(t,a,e,i)}else a=function(e,t,r,n,i){if(i){if("function"===typeof n){var o=n;n=function(){var e=Wc(a);o.call(e)}}var a=Uc(t,n,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[mi]=a.current,Un(8===e.nodeType?e.parentNode:e),dc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof n){var s=n;n=function(){var e=Wc(l);s.call(e)}}var l=Fc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[mi]=l.current,Un(8===e.nodeType?e.parentNode:e),dc((function(){Vc(t,l,r,n)})),l}(r,t,e,i,n);return Wc(a)}Kc.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Vc(e,t,null,null)},Kc.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc((function(){Vc(null,e,null,null)})),t[mi]=null}},Kc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var r=0;r<zt.length&&0!==t&&t<zt[r].priority;r++);zt.splice(r,0,e),0===r&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ut(t.pendingLanes);0!==r&&(xt(t,1|r),nc(t,Qe()),0===(6&_l)&&(Ul=Qe()+500,Ui()))}break;case 13:dc((function(){var t=No(e,1);if(null!==t){var r=ec();rc(t,e,1,r)}})),qc(e,1)}},kt=function(e){if(13===e.tag){var t=No(e,134217728);if(null!==t)rc(t,e,134217728,ec());qc(e,134217728)}},jt=function(e){if(13===e.tag){var t=tc(e),r=No(e,t);if(null!==r)rc(r,e,t,ec());qc(e,t)}},St=function(){return yt},Et=function(e,t){var r=yt;try{return yt=e,t()}finally{yt=r}},ke=function(e,t,r){switch(t){case"input":if(J(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=wi(n);if(!i)throw Error(o(90));Y(n),J(n,i)}}}break;case"textarea":oe(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},_e=cc,Pe=dc;var ed={usingClientEntryPoint:!1,Events:[yi,bi,wi,Te,Ce,cc]},td={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rd={bundleType:td.bundleType,version:td.version,rendererPackageName:td.rendererPackageName,rendererConfig:td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:td.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nd.isDisabled&&nd.supportsFiber)try{it=nd.inject(rd),ot=nd}catch(de){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gc(t))throw Error(o(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!Gc(e))throw Error(o(299));var r=!1,n="",i=Yc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Fc(e,1,!1,null,0,r,0,n,i),e[mi]=t.current,Un(8===e.nodeType?e.parentNode:e),new Xc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return dc(e)},t.hydrate=function(e,t,r){if(!Qc(t))throw Error(o(200));return Zc(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!Gc(e))throw Error(o(405));var n=null!=r&&r.hydratedSources||null,i=!1,a="",s=Yc;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(i=!0),void 0!==r.identifierPrefix&&(a=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=Uc(t,null,e,1,null!=r?r:null,i,0,a,s),e[mi]=t.current,Un(e),n)for(e=0;e<n.length;e++)i=(i=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Kc(t)},t.render=function(e,t,r){if(!Qc(t))throw Error(o(200));return Zc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(o(40));return!!e._reactRootContainer&&(dc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[mi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Qc(r))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zc(e,t,r,!1,n)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var o=Object.create(null);r.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(o,a),o}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,(()=>{"use strict";var e={};r.r(e),r.d(e,{hasBrowserEnv:()=>Au,hasStandardBrowserEnv:()=>Ou,hasStandardBrowserWebWorkerEnv:()=>Nu,navigator:()=>zu,origin:()=>Du});var t,n=r(43),i=r.t(n,2),o=r(391);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const s="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,r,n){return void 0===r&&(r=null),a({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function h(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function m(e,r,n,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:c=!1}=i,h=o.history,m=t.Pop,f=null,g=v();function v(){return(h.state||{idx:null}).idx}function x(){m=t.Pop;let e=v(),r=null==e?null:e-g;g=e,f&&f({action:m,location:b.location,delta:r})}function y(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,r="string"===typeof e?e:p(e);return r=r.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==g&&(g=0,h.replaceState(a({},h.state,{idx:g}),""));let b={get action(){return m},get location(){return e(o,h)},listen(e){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(s,x),f=e,()=>{o.removeEventListener(s,x),f=null}},createHref:e=>r(o,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,r){m=t.Push;let i=u(b.location,e,r);n&&n(i,e),g=v()+1;let a=d(i,g),s=b.createHref(i);try{h.pushState(a,"",s)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;o.location.assign(s)}c&&f&&f({action:m,location:b.location,delta:1})},replace:function(e,r){m=t.Replace;let i=u(b.location,e,r);n&&n(i,e),g=v();let o=d(i,g),a=b.createHref(i);h.replaceState(o,"",a),c&&f&&f({action:m,location:b.location,delta:0})},go:e=>h.go(e)};return b}var f;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(f||(f={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function g(e,t,r){return void 0===r&&(r="/"),v(e,t,r,!1)}function v(e,t,r,n){let i=R(("string"===typeof t?h(t):t).pathname||"/",r);if(null==i)return null;let o=x(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=L(i);a=_(o[s],e,n)}return a}function x(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(l(a.relativePath.startsWith(n),'Absolute route path "'+a.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(n.length));let s=D([n,a.relativePath]),c=r.concat(a);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),x(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:C(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let n of y(e.path))i(e,t,n);else i(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===n.length)return i?[o,""]:[o];let a=y(n.join("/")),s=[];return s.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const b=/^:[\w-]+$/,w=3,k=2,j=1,S=10,E=-2,T=e=>"*"===e;function C(e,t){let r=e.split("/"),n=r.length;return r.some(T)&&(n+=E),t&&(n+=k),r.filter((e=>!T(e))).reduce(((e,t)=>e+(b.test(t)?w:""===t?j:S)),n)}function _(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,i={},o="/",a=[];for(let s=0;s<n.length;++s){let e=n[s],l=s===n.length-1,c="/"===o?t:t.slice(o.length)||"/",d=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),u=e.route;if(!d&&l&&r&&!n[n.length-1].route.index&&(d=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:D([o,d.pathname]),pathnameBase:I(D([o,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(o=D([o,d.pathnameBase]))}return a}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(n.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,n]}(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=n.reduce(((e,t,r)=>{let{paramName:n,isOptional:i}=t;if("*"===n){let e=s[r]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[r];return e[n]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:o,pathnameBase:a,pattern:e}}function L(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function A(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function O(e,t){let r=z(e);return t?r.map(((e,t)=>t===r.length-1?e.pathname:e.pathnameBase)):r.map((e=>e.pathnameBase))}function N(e,t,r,n){let i;void 0===n&&(n=!1),"string"===typeof e?i=h(e):(i=a({},e),l(!i.pathname||!i.pathname.includes("?"),A("?","pathname","search",i)),l(!i.pathname||!i.pathname.includes("#"),A("#","pathname","hash",i)),l(!i.search||!i.search.includes("#"),A("#","search","hash",i)));let o,s=""===e||""===i.pathname,c=s?"/":i.pathname;if(null==c)o=r;else{let e=t.length-1;if(!n&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let d=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:i=""}="string"===typeof e?h(e):e,o=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:o,search:M(n),hash:$(i)}}(i,o),u=c&&"/"!==c&&c.endsWith("/"),p=(s||"."===c)&&r.endsWith("/");return d.pathname.endsWith("/")||!u&&!p||(d.pathname+="/"),d}const D=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",$=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],U=(new Set(B),["get",...B]);new Set(U),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V.apply(this,arguments)}const W=n.createContext(null);const H=n.createContext(null);const q=n.createContext(null);const Y=n.createContext(null);const X=n.createContext({outlet:null,matches:[],isDataRoute:!1});const K=n.createContext(null);function G(){return null!=n.useContext(Y)}function Q(){return G()||l(!1),n.useContext(Y).location}function J(e){n.useContext(q).static||n.useLayoutEffect(e)}function Z(){let{isDataRoute:e}=n.useContext(X);return e?function(){let{router:e}=de(le.UseNavigateStable),t=pe(ce.UseNavigateStable),r=n.useRef(!1);J((()=>{r.current=!0}));let i=n.useCallback((function(n,i){void 0===i&&(i={}),r.current&&("number"===typeof n?e.navigate(n):e.navigate(n,V({fromRouteId:t},i)))}),[e,t]);return i}():function(){G()||l(!1);let e=n.useContext(W),{basename:t,future:r,navigator:i}=n.useContext(q),{matches:o}=n.useContext(X),{pathname:a}=Q(),s=JSON.stringify(O(o,r.v7_relativeSplatPath)),c=n.useRef(!1);return J((()=>{c.current=!0})),n.useCallback((function(r,n){if(void 0===n&&(n={}),!c.current)return;if("number"===typeof r)return void i.go(r);let o=N(r,JSON.parse(s),a,"path"===n.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:D([t,o.pathname])),(n.replace?i.replace:i.push)(o,n.state,n)}),[t,i,s,a,e])}()}function ee(){let{matches:e}=n.useContext(X),t=e[e.length-1];return t?t.params:{}}function te(e,t){let{relative:r}=void 0===t?{}:t,{future:i}=n.useContext(q),{matches:o}=n.useContext(X),{pathname:a}=Q(),s=JSON.stringify(O(o,i.v7_relativeSplatPath));return n.useMemo((()=>N(e,JSON.parse(s),a,"path"===r)),[e,s,a,r])}function re(e,r,i,o){G()||l(!1);let{navigator:a,static:s}=n.useContext(q),{matches:c}=n.useContext(X),d=c[c.length-1],u=d?d.params:{},p=(d&&d.pathname,d?d.pathnameBase:"/");d&&d.route;let m,f=Q();if(r){var v;let e="string"===typeof r?h(r):r;"/"===p||(null==(v=e.pathname)?void 0:v.startsWith(p))||l(!1),m=e}else m=f;let x=m.pathname||"/",y=x;if("/"!==p){let e=p.replace(/^\//,"").split("/");y="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=!s&&i&&i.matches&&i.matches.length>0?i.matches:g(e,{pathname:y});let w=se(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:D([p,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:D([p,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,i,o);return r&&w?n.createElement(Y.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:t.Pop}},w):w}function ne(){let e=function(){var e;let t=n.useContext(K),r=ue(ce.UseRouteError),i=pe(ce.UseRouteError);if(void 0!==t)return t;return null==(e=r.errors)?void 0:e[i]}(),t=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:o},r):null,null)}const ie=n.createElement(ne,null);class oe extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(X.Provider,{value:this.props.routeContext},n.createElement(K.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:t,match:r,children:i}=e,o=n.useContext(W);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(X.Provider,{value:t},i)}function se(e,t,r,i){var o;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===t.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,c=null==(o=r)?void 0:o.errors;if(null!=c){let e=s.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let d=!1,u=-1;if(r&&i&&i.v7_partialHydration)for(let n=0;n<s.length;n++){let e=s[n];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=n),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){d=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight(((e,i,o)=>{let a,l=!1,p=null,h=null;var m;r&&(a=c&&i.route.id?c[i.route.id]:void 0,p=i.route.errorElement||ie,d&&(u<0&&0===o?(m="route-fallback",!1||he[m]||(he[m]=!0),l=!0,h=null):u===o&&(l=!0,h=i.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,o+1)),g=()=>{let t;return t=a?p:l?h:i.route.Component?n.createElement(i.route.Component,null):i.route.element?i.route.element:e,n.createElement(ae,{match:i,routeContext:{outlet:e,matches:f,isDataRoute:null!=r},children:t})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?n.createElement(oe,{location:r.location,revalidation:r.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function de(e){let t=n.useContext(W);return t||l(!1),t}function ue(e){let t=n.useContext(H);return t||l(!1),t}function pe(e){let t=function(){let e=n.useContext(X);return e||l(!1),e}(),r=t.matches[t.matches.length-1];return r.route.id||l(!1),r.route.id}const he={};function me(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}i.startTransition;function fe(e){let{to:t,replace:r,state:i,relative:o}=e;G()||l(!1);let{future:a,static:s}=n.useContext(q),{matches:c}=n.useContext(X),{pathname:d}=Q(),u=Z(),p=N(t,O(c,a.v7_relativeSplatPath),d,"path"===o),h=JSON.stringify(p);return n.useEffect((()=>u(JSON.parse(h),{replace:r,state:i,relative:o})),[u,h,o,r,i]),null}function ge(e){l(!1)}function ve(e){let{basename:r="/",children:i=null,location:o,navigationType:a=t.Pop,navigator:s,static:c=!1,future:d}=e;G()&&l(!1);let u=r.replace(/^\/*/,"/"),p=n.useMemo((()=>({basename:u,navigator:s,static:c,future:V({v7_relativeSplatPath:!1},d)})),[u,d,s,c]);"string"===typeof o&&(o=h(o));let{pathname:m="/",search:f="",hash:g="",state:v=null,key:x="default"}=o,y=n.useMemo((()=>{let e=R(m,u);return null==e?null:{location:{pathname:e,search:f,hash:g,state:v,key:x},navigationType:a}}),[u,m,f,g,v,x,a]);return null==y?null:n.createElement(q.Provider,{value:p},n.createElement(Y.Provider,{children:i,value:y}))}function xe(e){let{children:t,location:r}=e;return re(ye(t),r)}new Promise((()=>{}));n.Component;function ye(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,i)=>{if(!n.isValidElement(e))return;let o=[...t,i];if(e.type===n.Fragment)return void r.push.apply(r,ye(e.props.children,o));e.type!==ge&&l(!1),e.props.index&&e.props.children&&l(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ye(e.props.children,o)),r.push(a)})),r}var be=r(950),we=r.t(be,2);function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ke.apply(this,arguments)}function je(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Se=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(tj){}new Map;const Ee=i.startTransition;we.flushSync,i.useId;function Te(e){let{basename:t,children:r,future:i,window:o}=e,a=n.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),m((function(e,t){let{pathname:r,search:n,hash:i}=e.location;return u("",{pathname:r,search:n,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:p(t)}),null,s)));let l=a.current,[c,d]=n.useState({action:l.action,location:l.location}),{v7_startTransition:h}=i||{},f=n.useCallback((e=>{h&&Ee?Ee((()=>d(e))):d(e)}),[d,h]);return n.useLayoutEffect((()=>l.listen(f)),[l,f]),n.useEffect((()=>me(i)),[i]),n.createElement(ve,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:l,future:i})}const Ce="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,_e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=n.forwardRef((function(e,t){let r,{onClick:i,relative:o,reloadDocument:a,replace:s,state:c,target:d,to:u,preventScrollReset:h,viewTransition:m}=e,f=je(e,Se),{basename:g}=n.useContext(q),v=!1;if("string"===typeof u&&_e.test(u)&&(r=u,Ce))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),r=R(t.pathname,g);t.origin===e.origin&&null!=r?u=r+t.search+t.hash:v=!0}catch(tj){}let x=function(e,t){let{relative:r}=void 0===t?{}:t;G()||l(!1);let{basename:i,navigator:o}=n.useContext(q),{hash:a,pathname:s,search:c}=te(e,{relative:r}),d=s;return"/"!==i&&(d="/"===s?i:D([i,s])),o.createHref({pathname:d,search:c,hash:a})}(u,{relative:o}),y=function(e,t){let{target:r,replace:i,state:o,preventScrollReset:a,relative:s,viewTransition:l}=void 0===t?{}:t,c=Z(),d=Q(),u=te(e,{relative:s});return n.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let r=void 0!==i?i:p(d)===p(u);c(e,{replace:r,state:o,preventScrollReset:a,relative:s,viewTransition:l})}}),[d,c,u,i,o,r,e,a,s,l])}(u,{replace:s,state:c,target:d,preventScrollReset:h,relative:o,viewTransition:m});return n.createElement("a",ke({},f,{href:r||x,onClick:v||a?i:function(e){i&&i(e),e.defaultPrevented||y(e)},ref:t,target:d}))}));var Le,Re;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Le||(Le={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Re||(Re={}));var Ae=function(){return Ae=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ae.apply(this,arguments)};Object.create;function ze(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Oe=r(324),Ne=r.n(Oe),De="-ms-",Ie="-moz-",Me="-webkit-",$e="comm",Fe="rule",Be="decl",Ue="@keyframes",Ve=Math.abs,We=String.fromCharCode,He=Object.assign;function qe(e){return e.trim()}function Ye(e,t){return(e=t.exec(e))?e[0]:e}function Xe(e,t,r){return e.replace(t,r)}function Ke(e,t,r){return e.indexOf(t,r)}function Ge(e,t){return 0|e.charCodeAt(t)}function Qe(e,t,r){return e.slice(t,r)}function Je(e){return e.length}function Ze(e){return e.length}function et(e,t){return t.push(e),e}function tt(e,t){return e.filter((function(e){return!Ye(e,t)}))}var rt=1,nt=1,it=0,ot=0,at=0,st="";function lt(e,t,r,n,i,o,a,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:rt,column:nt,length:a,return:"",siblings:s}}function ct(e,t){return He(lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dt(e){for(;e.root;)e=ct(e.root,{children:[e]});et(e,e.siblings)}function ut(){return at=ot>0?Ge(st,--ot):0,nt--,10===at&&(nt=1,rt--),at}function pt(){return at=ot<it?Ge(st,ot++):0,nt++,10===at&&(nt=1,rt++),at}function ht(){return Ge(st,ot)}function mt(){return ot}function ft(e,t){return Qe(st,e,t)}function gt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vt(e){return rt=nt=1,it=Je(st=e),ot=0,[]}function xt(e){return st="",e}function yt(e){return qe(ft(ot-1,kt(91===e?e+2:40===e?e+1:e)))}function bt(e){for(;(at=ht())&&at<33;)pt();return gt(e)>2||gt(at)>3?"":" "}function wt(e,t){for(;--t&&pt()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return ft(e,mt()+(t<6&&32==ht()&&32==pt()))}function kt(e){for(;pt();)switch(at){case e:return ot;case 34:case 39:34!==e&&39!==e&&kt(at);break;case 40:41===e&&kt(e);break;case 92:pt()}return ot}function jt(e,t){for(;pt()&&e+at!==57&&(e+at!==84||47!==ht()););return"/*"+ft(t,ot-1)+"*"+We(47===e?e:pt())}function St(e){for(;!gt(ht());)pt();return ft(e,ot)}function Et(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Tt(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Be:return e.return=e.return||e.value;case $e:return"";case Ue:return e.return=e.value+"{"+Et(e.children,n)+"}";case Fe:if(!Je(e.value=e.props.join(",")))return""}return Je(r=Et(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ct(e,t,r){switch(function(e,t){return 45^Ge(e,0)?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}(e,t)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 4789:return Ie+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+Ie+e+De+e+e;case 5936:switch(Ge(e,t+11)){case 114:return Me+e+De+Xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+De+Xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+De+Xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Me+e+De+e+e;case 6165:return Me+e+De+"flex-"+e+e;case 5187:return Me+e+Xe(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+De+"flex-$1$2")+e;case 5443:return Me+e+De+"flex-item-"+Xe(e,/flex-|-self/g,"")+(Ye(e,/flex-|baseline/)?"":De+"grid-row-"+Xe(e,/flex-|-self/g,""))+e;case 4675:return Me+e+De+"flex-line-pack"+Xe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Me+e+De+Xe(e,"shrink","negative")+e;case 5292:return Me+e+De+Xe(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+Xe(e,"-grow","")+Me+e+De+Xe(e,"grow","positive")+e;case 4554:return Me+Xe(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return Xe(Xe(Xe(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return Xe(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Xe(Xe(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4200:if(!Ye(e,/flex-|baseline/))return De+"grid-column-align"+Qe(e,t)+e;break;case 2592:case 3360:return De+Xe(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,Ye(e.props,/grid-\w+-end/)}))?~Ke(e+(r=r[t].value),"span",0)?e:De+Xe(e,"-start","")+e+De+"grid-row-span:"+(~Ke(r,"span",0)?Ye(r,/\d+/):+Ye(r,/\d+/)-+Ye(e,/\d+/))+";":De+Xe(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return Ye(e.props,/grid-\w+-start/)}))?e:De+Xe(Xe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Xe(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(45!==Ge(e,t+4))break;case 102:return Xe(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Ie+(108==Ge(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ke(e,"stretch",0)?Ct(Xe(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Xe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,i,o,a,s){return De+r+":"+n+s+(i?De+r+"-span:"+(o?a:+a-+n)+s:"")+e}));case 4949:if(121===Ge(e,t+6))return Xe(e,":",":"+Me)+e;break;case 6444:switch(Ge(e,45===Ge(e,14)?18:11)){case 120:return Xe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(45===Ge(e,14)?"inline-":"")+"box$3$1"+Me+"$2$3$1"+De+"$2box$3")+e;case 100:return Xe(e,":",":"+De)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Xe(e,"scroll-","scroll-snap-")+e}return e}function _t(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Be:return void(e.return=Ct(e.value,e.length,r));case Ue:return Et([ct(e,{value:Xe(e.value,"@","@"+Me)})],n);case Fe:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(Ye(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dt(ct(e,{props:[Xe(t,/:(read-\w+)/,":-moz-$1")]})),dt(ct(e,{props:[t]})),He(e,{props:tt(r,n)});break;case"::placeholder":dt(ct(e,{props:[Xe(t,/:(plac\w+)/,":"+Me+"input-$1")]})),dt(ct(e,{props:[Xe(t,/:(plac\w+)/,":-moz-$1")]})),dt(ct(e,{props:[Xe(t,/:(plac\w+)/,De+"input-$1")]})),dt(ct(e,{props:[t]})),He(e,{props:tt(r,n)})}return""}))}}function Pt(e){return xt(Lt("",null,null,null,[""],e=vt(e),0,[0],e))}function Lt(e,t,r,n,i,o,a,s,l){for(var c=0,d=0,u=a,p=0,h=0,m=0,f=1,g=1,v=1,x=0,y="",b=i,w=o,k=n,j=y;g;)switch(m=x,x=pt()){case 40:if(108!=m&&58==Ge(j,u-1)){-1!=Ke(j+=Xe(yt(x),"&","&\f"),"&\f",Ve(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:j+=yt(x);break;case 9:case 10:case 13:case 32:j+=bt(m);break;case 92:j+=wt(mt()-1,7);continue;case 47:switch(ht()){case 42:case 47:et(At(jt(pt(),mt()),t,r,l),l);break;default:j+="/"}break;case 123*f:s[c++]=Je(j)*v;case 125*f:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+d:-1==v&&(j=Xe(j,/\f/g,"")),h>0&&Je(j)-u&&et(h>32?zt(j+";",n,r,u-1,l):zt(Xe(j," ","")+";",n,r,u-2,l),l);break;case 59:j+=";";default:if(et(k=Rt(j,t,r,c,d,i,s,y,b=[],w=[],u,o),o),123===x)if(0===d)Lt(j,t,k,k,b,o,u,s,w);else switch(99===p&&110===Ge(j,3)?100:p){case 100:case 108:case 109:case 115:Lt(e,k,k,n&&et(Rt(e,k,k,0,0,i,s,y,i,b=[],u,w),w),i,w,u,s,n?b:w);break;default:Lt(j,k,k,k,[""],w,0,s,w)}}c=d=h=0,f=v=1,y=j="",u=a;break;case 58:u=1+Je(j),h=m;default:if(f<1)if(123==x)--f;else if(125==x&&0==f++&&125==ut())continue;switch(j+=We(x),x*f){case 38:v=d>0?1:(j+="\f",-1);break;case 44:s[c++]=(Je(j)-1)*v,v=1;break;case 64:45===ht()&&(j+=yt(pt())),p=ht(),d=u=Je(y=j+=St(mt())),x++;break;case 45:45===m&&2==Je(j)&&(f=0)}}return o}function Rt(e,t,r,n,i,o,a,s,l,c,d,u){for(var p=i-1,h=0===i?o:[""],m=Ze(h),f=0,g=0,v=0;f<n;++f)for(var x=0,y=Qe(e,p+1,p=Ve(g=a[f])),b=e;x<m;++x)(b=qe(g>0?h[x]+" "+y:Xe(y,/&\f/g,h[x])))&&(l[v++]=b);return lt(e,t,r,0===i?Fe:s,l,c,d,u)}function At(e,t,r,n){return lt(e,t,r,$e,We(at),Qe(e,2,-2),0,n)}function zt(e,t,r,n,i){return lt(e,t,r,Be,Qe(e,0,n),Qe(e,n+1,-1),n,i)}var Ot={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_ATTR)||"data-styled",Dt="active",It="data-styled-version",Mt="6.1.16",$t="/*!sc*/\n",Ft="undefined"!=typeof window&&"HTMLElement"in window,Bt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:5001"}.SC_DISABLE_SPEEDY)),Ut={},Vt=(new Set,Object.freeze([])),Wt=Object.freeze({});function Ht(e,t,r){return void 0===r&&(r=Wt),e.theme!==r.theme&&e.theme||t||r.theme}var qt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xt=/(^-|-$)/g;function Kt(e){return e.replace(Yt,"-").replace(Xt,"")}var Gt=/(a)(d)/gi,Qt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Qt(t%52)+r;return(Qt(t%52)+r).replace(Gt,"$1-$2")}var Zt,er=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},tr=function(e){return er(5381,e)};function rr(e){return Jt(tr(e)>>>0)}function nr(e){return e.displayName||e.name||"Component"}function ir(e){return"string"==typeof e&&!0}var or="function"==typeof Symbol&&Symbol.for,ar=or?Symbol.for("react.memo"):60115,sr=or?Symbol.for("react.forward_ref"):60112,lr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ur=((Zt={})[sr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zt[ar]=dr,Zt);function pr(e){return("type"in(t=e)&&t.type.$$typeof)===ar?dr:"$$typeof"in e?ur[e.$$typeof]:lr;var t}var hr=Object.defineProperty,mr=Object.getOwnPropertyNames,fr=Object.getOwnPropertySymbols,gr=Object.getOwnPropertyDescriptor,vr=Object.getPrototypeOf,xr=Object.prototype;function yr(e,t,r){if("string"!=typeof t){if(xr){var n=vr(t);n&&n!==xr&&yr(e,n,r)}var i=mr(t);fr&&(i=i.concat(fr(t)));for(var o=pr(e),a=pr(t),s=0;s<i.length;++s){var l=i[s];if(!(l in cr||r&&r[l]||a&&l in a||o&&l in o)){var c=gr(t,l);try{hr(e,l,c)}catch(e){}}}}return e}function br(e){return"function"==typeof e}function wr(e){return"object"==typeof e&&"styledComponentId"in e}function kr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jr(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Sr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Er(e,t,r){if(void 0===r&&(r=!1),!r&&!Sr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Er(e[n],t[n]);else if(Sr(t))for(var n in t)e[n]=Er(e[n],t[n]);return e}function Tr(e,t){Object.defineProperty(e,"toString",{value:t})}function Cr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _r=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw Cr(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+="".concat(this.tag.getRule(o)).concat($t);return t},e}(),Pr=new Map,Lr=new Map,Rr=1,Ar=function(e){if(Pr.has(e))return Pr.get(e);for(;Lr.has(Rr);)Rr++;var t=Rr++;return Pr.set(e,t),Lr.set(t,e),t},zr=function(e,t){Rr=t+1,Pr.set(e,t),Lr.set(t,e)},Or="style[".concat(Nt,"][").concat(It,'="').concat(Mt,'"]'),Nr=new RegExp("^".concat(Nt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Dr=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},Ir=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split($t),i=[],o=0,a=n.length;o<a;o++){var s=n[o].trim();if(s){var l=s.match(Nr);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(zr(d,c),Dr(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},Mr=function(e){for(var t=document.querySelectorAll(Or),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(Nt)!==Dt&&(Ir(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function $r(){return r.nc}var Fr=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Nt,"]")));return t[t.length-1]}(r),o=void 0!==i?i.nextSibling:null;n.setAttribute(Nt,Dt),n.setAttribute(It,Mt);var a=$r();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},Br=function(){function e(e){this.element=Fr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}throw Cr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ur=function(){function e(e){this.element=Fr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Vr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Wr=Ft,Hr={isServer:!Ft,useCSSOMInjection:!Bt},qr=function(){function e(e,t,r){void 0===e&&(e=Wt),void 0===t&&(t={});var n=this;this.options=Ae(Ae({},Hr),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ft&&Wr&&(Wr=!1,Mr(this)),Tr(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=function(r){var i=function(e){return Lr.get(e)}(r);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(r);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(Nt,".g").concat(r,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),n+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat($t)},o=0;o<r;o++)i(o);return n}(n)}))}return e.registerId=function(e){return Ar(e)},e.prototype.rehydrate=function(){!this.server&&Ft&&Mr(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(Ae(Ae({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new Vr(r):t?new Br(r):new Ur(r)}(this.options),new _r(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Ar(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Ar(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Ar(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yr=/&/g,Xr=/^\s*\/\/.*$/gm;function Kr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Kr(e.children,t)),e}))}function Gr(e){var t,r,n,i=void 0===e?Wt:e,o=i.options,a=void 0===o?Wt:o,s=i.plugins,l=void 0===s?Vt:s,c=function(e,n,i){return i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?".".concat(t):e},d=l.slice();d.push((function(e){e.type===Fe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Yr,r).replace(n,c))})),a.prefix&&d.push(_t),d.push(Tt);var u=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,r=i,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(Xr,""),c=Pt(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Kr(c,a.namespace));var u,p=[];return Et(c,function(e){var t=Ze(e);return function(r,n,i,o){for(var a="",s=0;s<t;s++)a+=e[s](r,n,i,o)||"";return a}}(d.concat((u=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&u(e)})))),p};return u.hash=l.length?l.reduce((function(e,t){return t.name||Cr(15),er(e,t.name)}),5381).toString():"",u}var Qr=new qr,Jr=Gr(),Zr=n.createContext({shouldForwardProp:void 0,styleSheet:Qr,stylis:Jr}),en=(Zr.Consumer,n.createContext(void 0));function tn(){return(0,n.useContext)(Zr)}function rn(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],i=t[1],o=tn().styleSheet,a=(0,n.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,n.useMemo)((function(){return Gr({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,n.useEffect)((function(){Ne()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,n.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return n.createElement(Zr.Provider,{value:l},n.createElement(en.Provider,{value:s},e.children))}var nn=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Jr);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Tr(this,(function(){throw Cr(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Jr),this.name+e.hash},e}(),on=function(e){return e>="A"&&e<="Z"};function an(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;on(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var sn=function(e){return null==e||!1===e||""===e},ln=function(e){var t,r,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!sn(o)&&(Array.isArray(o)&&o.isCss||br(o)?n.push("".concat(an(i),":"),o,";"):Sr(o)?n.push.apply(n,ze(ze(["".concat(i," {")],ln(o),!1),["}"],!1)):n.push("".concat(an(i),": ").concat((t=i,null==(r=o)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in Ot||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function cn(e,t,r,n){return sn(e)?[]:wr(e)?[".".concat(e.styledComponentId)]:br(e)?!br(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:cn(e(t),t,r,n):e instanceof nn?r?(e.inject(r,n),[e.getName(n)]):[e]:Sr(e)?ln(e):Array.isArray(e)?Array.prototype.concat.apply(Vt,e.map((function(e){return cn(e,t,r,n)}))):[e.toString()];var i}function dn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(br(r)&&!wr(r))return!1}return!0}var un=tr(Mt),pn=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&dn(e),this.componentId=t,this.baseHash=er(un,t),this.baseStyle=r,qr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=kr(n,this.staticRulesId);else{var i=jr(cn(this.rules,e,t,r)),o=Jt(er(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=kr(n,o),this.staticRulesId=o}else{for(var s=er(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=jr(cn(d,e,t,r));s=er(s,u+c),l+=u}}if(l){var p=Jt(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=kr(n,p)}}return n},e}(),hn=n.createContext(void 0);hn.Consumer;function mn(e){var t=n.useContext(hn),r=(0,n.useMemo)((function(){return function(e,t){if(!e)throw Cr(14);if(br(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Cr(8);return t?Ae(Ae({},t),e):e}(e.theme,t)}),[e.theme,t]);return e.children?n.createElement(hn.Provider,{value:r},e.children):null}var fn={};new Set;function gn(e,t,r){var i=wr(e),o=e,a=!ir(e),s=t.attrs,l=void 0===s?Vt:s,c=t.componentId,d=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Kt(e);fn[r]=(fn[r]||0)+1;var n="".concat(r,"-").concat(rr(Mt+r+fn[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):c,u=t.displayName,p=void 0===u?function(e){return ir(e)?"styled.".concat(e):"Styled(".concat(nr(e),")")}(e):u,h=t.displayName&&t.componentId?"".concat(Kt(t.displayName),"-").concat(t.componentId):t.componentId||d,m=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,f=t.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;f=function(e,t){return g(e,t)&&v(e,t)}}else f=g}var x=new pn(r,h,i?o.componentStyle:void 0);function y(e,t){return function(e,t,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,d=n.useContext(hn),u=tn(),p=e.shouldForwardProp||u.shouldForwardProp,h=Ht(t,d,a)||Wt,m=function(e,t,r){for(var n,i=Ae(Ae({},t),{className:void 0,theme:r}),o=0;o<e.length;o+=1){var a=br(n=e[o])?n(i):n;for(var s in a)i[s]="className"===s?kr(i[s],a[s]):"style"===s?Ae(Ae({},i[s]),a[s]):a[s]}return t.className&&(i.className=kr(i.className,t.className)),i}(i,t,h),f=m.as||c,g={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===h||("forwardedAs"===v?g.as=m.forwardedAs:p&&!p(v,f)||(g[v]=m[v]));var x=function(e,t){var r=tn();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(o,m),y=kr(s,l);return x&&(y+=" "+x),m.className&&(y+=" "+m.className),g[ir(f)&&!qt.has(f)?"class":"className"]=y,r&&(g.ref=r),(0,n.createElement)(f,g)}(b,e,t)}y.displayName=p;var b=n.forwardRef(y);return b.attrs=m,b.componentStyle=x,b.displayName=p,b.shouldForwardProp=f,b.foldedComponentIds=i?kr(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=h,b.target=i?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,i=t;n<i.length;n++)Er(e,i[n],!0);return e}({},o.defaultProps,e):e}}),Tr(b,(function(){return".".concat(b.styledComponentId)})),a&&yr(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function vn(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var xn=function(e){return Object.assign(e,{isCss:!0})};function yn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(br(e)||Sr(e))return xn(cn(vn(Vt,ze([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?cn(n):xn(cn(vn(n,t)))}function bn(e,t,r){if(void 0===r&&(r=Wt),!t)throw Cr(1,t);var n=function(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,r,yn.apply(void 0,ze([n],i,!1)))};return n.attrs=function(n){return bn(e,t,Ae(Ae({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return bn(e,t,Ae(Ae({},r),n))},n}var wn=function(e){return bn(gn,e)},kn=wn;qt.forEach((function(e){kn[e]=wn(e)}));var jn=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=dn(e),qr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var i=n(jr(cn(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&qr.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function Sn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=jr(yn.apply(void 0,ze([e],t,!1))),i=rr(n);return new nn(i,n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=$r(),n=jr([r&&'nonce="'.concat(r,'"'),"".concat(Nt,'="true"'),"".concat(It,'="').concat(Mt,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Cr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Cr(2);var r=e.instance.toString();if(!r)return[];var i=((t={})[Nt]="",t[It]=Mt,t.dangerouslySetInnerHTML={__html:r},t),o=$r();return o&&(i.nonce=o),[n.createElement("style",Ae({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new qr({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Cr(2);return n.createElement(rn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Cr(3)}})(),"__sc-".concat(Nt,"__");const En="undefined"!==typeof document,Tn=En?n.useLayoutEffect:n.useEffect;function Cn(){const e=(0,n.useRef)(!1);return Tn((()=>(e.current=!0,()=>{e.current=!1})),[]),e}const _n=e=>e;class Pn{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const Ln=["prepare","read","update","preRender","render","postRender"];const{schedule:Rn,cancel:An,state:zn,steps:On}=function(e,t){let r=!1,n=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Ln.reduce(((e,t)=>(e[t]=function(e){let t=new Pn,r=new Pn,n=0,i=!1,o=!1;const a=new WeakSet,s={schedule:function(e){const o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=o?t:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),s.add(e)&&o&&i&&(n=t.order.length),e},cancel:e=>{r.remove(e),a.delete(e)},process:l=>{if(i)o=!0;else{if(i=!0,[t,r]=[r,t],r.clear(),n=t.order.length,n)for(let r=0;r<n;r++){const n=t.order[r];n(l),a.has(n)&&(s.schedule(n),e())}i=!1,o&&(o=!1,s.process(l))}}};return s}((()=>r=!0)),e)),{}),a=e=>o[e].process(i),s=()=>{const o=performance.now();r=!1,i.delta=n?1e3/60:Math.max(Math.min(o-i.timestamp,40),1),i.timestamp=o,i.isProcessing=!0,Ln.forEach(a),i.isProcessing=!1,r&&t&&(n=!1,e(s))},l=Ln.reduce(((t,a)=>{const l=o[a];return t[a]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r||(r=!0,n=!0,i.isProcessing||e(s)),l.schedule(t,o,a)},t}),{});return{schedule:l,cancel:e=>Ln.forEach((t=>o[t].cancel(e))),state:i,steps:o}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:_n,!0);const Nn=(0,n.createContext)(null);function Dn(e){const t=(0,n.useRef)(null);return null===t.current&&(t.current=e()),t.current}class In extends n.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Mn(e){let{children:t,isPresent:r}=e;const i=(0,n.useId)(),o=(0,n.useRef)(null),a=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:s}=a.current;if(r||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[r]),n.createElement(In,{isPresent:r,childRef:o,sizeRef:a},n.cloneElement(t,{ref:o}))}const $n=e=>{let{children:t,initial:r,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:s,mode:l}=e;const c=Dn(Fn),d=(0,n.useId)(),u=(0,n.useMemo)((()=>({id:d,initial:r,isPresent:i,custom:a,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;o&&o()},register:e=>(c.set(e,!1),()=>c.delete(e))})),s?void 0:[i]);return(0,n.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[i]),n.useEffect((()=>{!i&&!c.size&&o&&o()}),[i]),"popLayout"===l&&(t=n.createElement(Mn,{isPresent:i},t)),n.createElement(Nn.Provider,{value:u},t)};function Fn(){return new Map}const Bn=(0,n.createContext)({});let Un=_n,Vn=_n;const Wn=e=>e.key||"";const Hn=e=>{let{children:t,custom:r,initial:i=!0,onExitComplete:o,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:l="sync"}=e;Vn(!a,"Replace exitBeforeEnter with mode='wait'");const c=(0,n.useContext)(Bn).forceRender||function(){const e=Cn(),[t,r]=(0,n.useState)(0),i=(0,n.useCallback)((()=>{e.current&&r(t+1)}),[t]);return[(0,n.useCallback)((()=>Rn.postRender(i)),[i]),t]}()[0],d=Cn(),u=function(e){const t=[];return n.Children.forEach(e,(e=>{(0,n.isValidElement)(e)&&t.push(e)})),t}(t);let p=u;const h=(0,n.useRef)(new Map).current,m=(0,n.useRef)(p),f=(0,n.useRef)(new Map).current,g=(0,n.useRef)(!0);var v;if(Tn((()=>{g.current=!1,function(e,t){e.forEach((e=>{const r=Wn(e);t.set(r,e)}))}(u,f),m.current=p})),v=()=>{g.current=!0,f.clear(),h.clear()},(0,n.useEffect)((()=>()=>v()),[]),g.current)return n.createElement(n.Fragment,null,p.map((e=>n.createElement($n,{key:Wn(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:s,mode:l},e))));p=[...p];const x=m.current.map(Wn),y=u.map(Wn),b=x.length;for(let n=0;n<b;n++){const e=x[n];-1!==y.indexOf(e)||h.has(e)||h.set(e,void 0)}return"wait"===l&&h.size&&(p=[]),h.forEach(((e,t)=>{if(-1!==y.indexOf(t))return;const i=f.get(t);if(!i)return;const a=x.indexOf(t);let g=e;if(!g){const e=()=>{h.delete(t);const e=Array.from(f.keys()).filter((e=>!y.includes(e)));if(e.forEach((e=>f.delete(e))),m.current=u.filter((r=>{const n=Wn(r);return n===t||e.includes(n)})),!h.size){if(!1===d.current)return;c(),o&&o()}};g=n.createElement($n,{key:Wn(i),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:s,mode:l},i),h.set(t,g)}p.splice(a,0,g)})),p=p.map((e=>{const t=e.key;return h.has(t)?e:n.createElement($n,{key:Wn(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)})),n.createElement(n.Fragment,null,h.size?p:p.map((e=>(0,n.cloneElement)(e))))},qn=(0,n.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Yn=(0,n.createContext)({}),Xn=(0,n.createContext)({strict:!1}),Kn=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Gn="data-"+Kn("framerAppearId");function Qn(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Jn(e){return"string"===typeof e||Array.isArray(e)}function Zn(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const ei=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ti=["initial",...ei];function ri(e){return Zn(e.animate)||ti.some((t=>Jn(e[t])))}function ni(e){return Boolean(ri(e)||e.variants)}function ii(e){const{initial:t,animate:r}=function(e,t){if(ri(e)){const{initial:t,animate:r}=e;return{initial:!1===t||Jn(t)?t:void 0,animate:Jn(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,n.useContext)(Yn));return(0,n.useMemo)((()=>({initial:t,animate:r})),[oi(t),oi(r)])}function oi(e){return Array.isArray(e)?e.join(" "):e}const ai={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},si={};for(const r in ai)si[r]={isEnabled:e=>ai[r].some((t=>!!e[t]))};const li=(0,n.createContext)({}),ci=Symbol.for("motionComponentSymbol");function di(e){let{preloadedFeatures:t,createVisualElement:r,useRender:i,useVisualState:o,Component:a}=e;t&&function(e){for(const t in e)si[t]={...si[t],...e[t]}}(t);const s=(0,n.forwardRef)((function(e,s){let l;const c={...(0,n.useContext)(qn),...e,layoutId:ui(e)},{isStatic:d}=c,u=ii(e),p=o(e,d);if(!d&&En){u.visualElement=function(e,t,r,i){const{visualElement:o}=(0,n.useContext)(Yn),a=(0,n.useContext)(Xn),s=(0,n.useContext)(Nn),l=(0,n.useContext)(qn).reducedMotion,c=(0,n.useRef)();i=i||a.renderer,!c.current&&i&&(c.current=i(e,{visualState:t,parent:o,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const d=c.current;(0,n.useInsertionEffect)((()=>{d&&d.update(r,s)}));const u=(0,n.useRef)(Boolean(r[Gn]&&!window.HandoffComplete));return Tn((()=>{d&&(d.render(),u.current&&d.animationState&&d.animationState.animateChanges())})),(0,n.useEffect)((()=>{d&&(d.updateFeatures(),!u.current&&d.animationState&&d.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))})),d}(a,p,c,r);const e=(0,n.useContext)(li),i=(0,n.useContext)(Xn).strict;u.visualElement&&(l=u.visualElement.loadFeatures(c,i,t,e))}return n.createElement(Yn.Provider,{value:u},l&&u.visualElement?n.createElement(l,{visualElement:u.visualElement,...c}):null,i(a,e,function(e,t,r){return(0,n.useCallback)((n=>{n&&e.mount&&e.mount(n),t&&(n?t.mount(n):t.unmount()),r&&("function"===typeof r?r(n):Qn(r)&&(r.current=n))}),[t])}(p,u.visualElement,s),p,d,u.visualElement))}));return s[ci]=a,s}function ui(e){let{layoutId:t}=e;const r=(0,n.useContext)(Bn).id;return r&&void 0!==t?r+"-"+t:t}function pi(e){function t(t){return di(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const r=new Map;return new Proxy(t,{get:(e,n)=>(r.has(n)||r.set(n,t(n)),r.get(n))})}const hi=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mi(e){return"string"===typeof e&&!e.includes("-")&&!!(hi.indexOf(e)>-1||/[A-Z]/.test(e))}const fi={};const gi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vi=new Set(gi);function xi(e,t){let{layout:r,layoutId:n}=t;return vi.has(e)||e.startsWith("origin")||(r||void 0!==n)&&(!!fi[e]||"opacity"===e)}const yi=e=>Boolean(e&&e.getVelocity),bi={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},wi=gi.length;const ki=e=>t=>"string"===typeof t&&t.startsWith(e),ji=ki("--"),Si=ki("var(--"),Ei=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Ti=(e,t,r)=>Math.min(Math.max(r,e),t),Ci={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},_i={...Ci,transform:e=>Ti(0,1,e)},Pi={...Ci,default:1},Li=e=>Math.round(1e5*e)/1e5,Ri=/(-)?([\d]*\.?[\d])+/g,Ai=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,zi=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Oi(e){return"string"===typeof e}const Ni=e=>({test:t=>Oi(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Di=Ni("deg"),Ii=Ni("%"),Mi=Ni("px"),$i=Ni("vh"),Fi=Ni("vw"),Bi={...Ii,parse:e=>Ii.parse(e)/100,transform:e=>Ii.transform(100*e)},Ui={...Ci,transform:Math.round},Vi={borderWidth:Mi,borderTopWidth:Mi,borderRightWidth:Mi,borderBottomWidth:Mi,borderLeftWidth:Mi,borderRadius:Mi,radius:Mi,borderTopLeftRadius:Mi,borderTopRightRadius:Mi,borderBottomRightRadius:Mi,borderBottomLeftRadius:Mi,width:Mi,maxWidth:Mi,height:Mi,maxHeight:Mi,size:Mi,top:Mi,right:Mi,bottom:Mi,left:Mi,padding:Mi,paddingTop:Mi,paddingRight:Mi,paddingBottom:Mi,paddingLeft:Mi,margin:Mi,marginTop:Mi,marginRight:Mi,marginBottom:Mi,marginLeft:Mi,rotate:Di,rotateX:Di,rotateY:Di,rotateZ:Di,scale:Pi,scaleX:Pi,scaleY:Pi,scaleZ:Pi,skew:Di,skewX:Di,skewY:Di,distance:Mi,translateX:Mi,translateY:Mi,translateZ:Mi,x:Mi,y:Mi,z:Mi,perspective:Mi,transformPerspective:Mi,opacity:_i,originX:Bi,originY:Bi,originZ:Mi,zIndex:Ui,fillOpacity:_i,strokeOpacity:_i,numOctaves:Ui};function Wi(e,t,r,n){const{style:i,vars:o,transform:a,transformOrigin:s}=e;let l=!1,c=!1,d=!0;for(const u in t){const e=t[u];if(ji(u)){o[u]=e;continue}const r=Vi[u],n=Ei(e,r);if(vi.has(u)){if(l=!0,a[u]=n,!d)continue;e!==(r.default||0)&&(d=!1)}else u.startsWith("origin")?(c=!0,s[u]=n):i[u]=n}if(t.transform||(l||n?i.transform=function(e,t,r,n){let{enableHardwareAcceleration:i=!0,allowTransformNone:o=!0}=t,a="";for(let s=0;s<wi;s++){const t=gi[s];void 0!==e[t]&&(a+=`${bi[t]||t}(${e[t]}) `)}return i&&!e.z&&(a+="translateZ(0)"),a=a.trim(),n?a=n(e,r?"":a):o&&r&&(a="none"),a}(e.transform,r,d,n):i.transform&&(i.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:r=0}=s;i.transformOrigin=`${e} ${t} ${r}`}}const Hi=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function qi(e,t,r){for(const n in t)yi(t[n])||xi(n,r)||(e[n]=t[n])}function Yi(e,t,r){const i={};return qi(i,e.style||{},e),Object.assign(i,function(e,t,r){let{transformTemplate:i}=e;return(0,n.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Wi(e,t,{enableHardwareAcceleration:!r},i),Object.assign({},e.vars,e.style)}),[t])}(e,t,r)),e.transformValues?e.transformValues(i):i}function Xi(e,t,r){const n={},i=Yi(e,t,r);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const Ki=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Gi(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ki.has(e)}let Qi=e=>!Gi(e);try{(Ji=require("@emotion/is-prop-valid").default)&&(Qi=e=>e.startsWith("on")?!Gi(e):Ji(e))}catch(rj){}var Ji;function Zi(e,t,r){return"string"===typeof e?e:Mi.transform(t+r*e)}const eo={offset:"stroke-dashoffset",array:"stroke-dasharray"},to={offset:"strokeDashoffset",array:"strokeDasharray"};function ro(e,t,r,n,i){let{attrX:o,attrY:a,attrScale:s,originX:l,originY:c,pathLength:d,pathSpacing:u=1,pathOffset:p=0,...h}=t;if(Wi(e,h,r,i),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:m,style:f,dimensions:g}=e;m.transform&&(g&&(f.transform=m.transform),delete m.transform),g&&(void 0!==l||void 0!==c||f.transform)&&(f.transformOrigin=function(e,t,r){return`${Zi(t,e.x,e.width)} ${Zi(r,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==o&&(m.x=o),void 0!==a&&(m.y=a),void 0!==s&&(m.scale=s),void 0!==d&&function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?eo:to;e[o.offset]=Mi.transform(-n);const a=Mi.transform(t),s=Mi.transform(r);e[o.array]=`${a} ${s}`}(m,d,u,p,!1)}const no=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),io=e=>"string"===typeof e&&"svg"===e.toLowerCase();function oo(e,t,r,i){const o=(0,n.useMemo)((()=>{const r={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return ro(r,t,{enableHardwareAcceleration:!1},io(i),e.transformTemplate),{...r.attrs,style:{...r.style}}}),[t]);if(e.style){const t={};qi(t,e.style,e),o.style={...t,...o.style}}return o}function ao(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(t,r,i,o,a)=>{let{latestValues:s}=o;const l=(mi(t)?oo:Xi)(r,s,a,t),c=function(e,t,r){const n={};for(const i in e)"values"===i&&"object"===typeof e.values||(Qi(i)||!0===r&&Gi(i)||!t&&!Gi(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}(r,"string"===typeof t,e),d={...c,...l,ref:i},{children:u}=r,p=(0,n.useMemo)((()=>yi(u)?u.get():u),[u]);return(0,n.createElement)(t,{...d,children:p})}}function so(e,t,r,n){let{style:i,vars:o}=t;Object.assign(e.style,i,n&&n.getProjectionStyles(r));for(const a in o)e.style.setProperty(a,o[a])}const lo=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function co(e,t,r,n){so(e,t,void 0,n);for(const i in t.attrs)e.setAttribute(lo.has(i)?i:Kn(i),t.attrs[i])}function uo(e,t){const{style:r}=e,n={};for(const i in r)(yi(r[i])||t.style&&yi(t.style[i])||xi(i,e))&&(n[i]=r[i]);return n}function po(e,t){const r=uo(e,t);for(const n in e)if(yi(e[n])||yi(t[n])){r[-1!==gi.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n]=e[n]}return r}function ho(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==r?r:e.custom,n,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==r?r:e.custom,n,i)),t}const mo=e=>Array.isArray(e),fo=e=>mo(e)?e[e.length-1]||0:e;function go(e){const t=yi(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const vo=e=>(t,r)=>{const i=(0,n.useContext)(Yn),o=(0,n.useContext)(Nn),a=()=>function(e,t,r,n){let{scrapeMotionValuesFromProps:i,createRenderState:o,onMount:a}=e;const s={latestValues:xo(t,r,n,i),renderState:o()};return a&&(s.mount=e=>a(t,e,s)),s}(e,t,i,o);return r?a():Dn(a)};function xo(e,t,r,n){const i={},o=n(e,{});for(const p in o)i[p]=go(o[p]);let{initial:a,animate:s}=e;const l=ri(e),c=ni(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let d=!!r&&!1===r.initial;d=d||!1===a;const u=d?s:a;if(u&&"boolean"!==typeof u&&!Zn(u)){(Array.isArray(u)?u:[u]).forEach((t=>{const r=ho(e,t);if(!r)return;const{transitionEnd:n,transition:o,...a}=r;for(const e in a){let t=a[e];if(Array.isArray(t)){t=t[d?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in n)i[e]=n[e]}))}return i}const yo={useVisualState:vo({scrapeMotionValuesFromProps:po,createRenderState:no,onMount:(e,t,r)=>{let{renderState:n,latestValues:i}=r;Rn.read((()=>{try{n.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(tj){n.dimensions={x:0,y:0,width:0,height:0}}})),Rn.render((()=>{ro(n,i,{enableHardwareAcceleration:!1},io(t.tagName),e.transformTemplate),co(t,n)}))}})},bo={useVisualState:vo({scrapeMotionValuesFromProps:uo,createRenderState:Hi})};function wo(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const ko=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function jo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function So(e,t,r,n){return wo(e,t,(e=>t=>ko(t)&&e(t,jo(t)))(r),n)}const Eo=(e,t)=>r=>t(e(r)),To=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(Eo)};function Co(e){let t=null;return()=>{const r=()=>{t=null};return null===t&&(t=e,r)}}const _o=Co("dragHorizontal"),Po=Co("dragVertical");function Lo(e){let t=!1;if("y"===e)t=Po();else if("x"===e)t=_o();else{const e=_o(),r=Po();e&&r?t=()=>{e(),r()}:(e&&e(),r&&r())}return t}function Ro(){const e=Lo(!0);return!e||(e(),!1)}class Ao{constructor(e){this.isMounted=!1,this.node=e}update(){}}function zo(e,t){const r="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End");return So(e.current,r,((r,i)=>{if("touch"===r.pointerType||Ro())return;const o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[n]&&Rn.update((()=>o[n](r,i)))}),{passive:!e.getProps()[n]})}const Oo=(e,t)=>!!t&&(e===t||Oo(e,t.parentElement));function No(e,t){if(!t)return;const r=new PointerEvent("pointer"+e);t(r,jo(r))}const Do=new WeakMap,Io=new WeakMap,Mo=e=>{const t=Do.get(e.target);t&&t(e)},$o=e=>{e.forEach(Mo)};function Fo(e,t,r){const n=function(e){let{root:t,...r}=e;const n=t||document;Io.has(n)||Io.set(n,{});const i=Io.get(n),o=JSON.stringify(r);return i[o]||(i[o]=new IntersectionObserver($o,{root:t,...r})),i[o]}(t);return Do.set(e,r),n.observe(e),()=>{Do.delete(e),n.unobserve(e)}}const Bo={some:0,all:1};const Uo={inView:{Feature:class extends Ao{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:n="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:r,threshold:"number"===typeof n?n:Bo[n]};return Fo(this.node.current,o,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:r,onViewportLeave:n}=this.node.getProps(),o=t?r:n;o&&o(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,r=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:r={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==r[e]}(e,t));r&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Ao{constructor(){super(...arguments),this.removeStartListeners=_n,this.removeEndListeners=_n,this.removeAccessibleListeners=_n,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),n=So(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:r,onTapCancel:n,globalTapTarget:i}=this.node.getProps();Rn.update((()=>{i||Oo(this.node.current,e.target)?r&&r(e,t):n&&n(e,t)}))}),{passive:!(r.onTap||r.onPointerUp)}),i=So(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=To(n,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=wo(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=wo(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&No("up",((e,t)=>{const{onTap:r}=this.node.getProps();r&&Rn.update((()=>r(e,t)))}))})),No("down",((e,t)=>{this.startPress(e,t)}))})),t=wo(this.node.current,"blur",(()=>{this.isPressing&&No("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=To(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:r,whileTap:n}=this.node.getProps();n&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Rn.update((()=>r(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Ro()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Rn.update((()=>r(e,t)))}mount(){const e=this.node.getProps(),t=So(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=wo(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=To(t,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends Ao{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(tj){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=To(wo(this.node.current,"focus",(()=>this.onFocus())),wo(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Ao{mount(){this.unmount=To(zo(this.node,!0),zo(this.node,!1))}unmount(){}}}};function Vo(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Wo(e,t,r){const n=e.getProps();return ho(n,t,void 0!==r?r:n.custom,function(e){const t={};return e.values.forEach(((e,r)=>t[r]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,r)=>t[r]=e.getVelocity())),t}(e))}const Ho=e=>1e3*e,qo=e=>e/1e3,Yo=!1,Xo=e=>Array.isArray(e)&&"number"===typeof e[0];function Ko(e){return Boolean(!e||"string"===typeof e&&Qo[e]||Xo(e)||Array.isArray(e)&&e.every(Ko))}const Go=e=>{let[t,r,n,i]=e;return`cubic-bezier(${t}, ${r}, ${n}, ${i})`},Qo={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Go([0,.65,.55,1]),circOut:Go([.55,0,1,.45]),backIn:Go([.31,.01,.66,-.59]),backOut:Go([.33,1.53,.69,.99])};function Jo(e){if(e)return Xo(e)?Go(e):Array.isArray(e)?e.map(Jo):Qo[e]}const Zo=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e;function ea(e,t,r,n){if(e===t&&r===n)return _n;const i=t=>function(e,t,r,n,i){let o,a,s=0;do{a=t+(r-t)/2,o=Zo(a,n,i)-e,o>0?r=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,r);return e=>0===e||1===e?e:Zo(i(e),t,n)}const ta=ea(.42,0,1,1),ra=ea(0,0,.58,1),na=ea(.42,0,.58,1),ia=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,oa=e=>t=>1-e(1-t),aa=e=>1-Math.sin(Math.acos(e)),sa=oa(aa),la=ia(aa),ca=ea(.33,1.53,.69,.99),da=oa(ca),ua=ia(da),pa={linear:_n,easeIn:ta,easeInOut:na,easeOut:ra,circIn:aa,circInOut:la,circOut:sa,backIn:da,backInOut:ua,backOut:ca,anticipate:e=>(e*=2)<1?.5*da(e):.5*(2-Math.pow(2,-10*(e-1)))},ha=e=>{if(Array.isArray(e)){Vn(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,r,n,i]=e;return ea(t,r,n,i)}return"string"===typeof e?(Vn(void 0!==pa[e],`Invalid easing type '${e}'`),pa[e]):e},ma=(e,t)=>r=>Boolean(Oi(r)&&zi.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),fa=(e,t,r)=>n=>{if(!Oi(n))return n;const[i,o,a,s]=n.match(Ri);return{[e]:parseFloat(i),[t]:parseFloat(o),[r]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},ga={...Ci,transform:e=>Math.round((e=>Ti(0,255,e))(e))},va={test:ma("rgb","red"),parse:fa("red","green","blue"),transform:e=>{let{red:t,green:r,blue:n,alpha:i=1}=e;return"rgba("+ga.transform(t)+", "+ga.transform(r)+", "+ga.transform(n)+", "+Li(_i.transform(i))+")"}};const xa={test:ma("#"),parse:function(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}},transform:va.transform},ya={test:ma("hsl","hue"),parse:fa("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:r,lightness:n,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Ii.transform(Li(r))+", "+Ii.transform(Li(n))+", "+Li(_i.transform(i))+")"}},ba={test:e=>va.test(e)||xa.test(e)||ya.test(e),parse:e=>va.test(e)?va.parse(e):ya.test(e)?ya.parse(e):xa.parse(e),transform:e=>Oi(e)?e:e.hasOwnProperty("red")?va.transform(e):ya.transform(e)},wa=(e,t,r)=>-r*e+r*t+e;function ka(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}const ja=(e,t,r)=>{const n=e*e;return Math.sqrt(Math.max(0,r*(t*t-n)+n))},Sa=[xa,va,ya];function Ea(e){const t=(e=>Sa.find((t=>t.test(e))))(e);Vn(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let r=t.parse(e);return t===ya&&(r=function(e){let{hue:t,saturation:r,lightness:n,alpha:i}=e;t/=360,r/=100,n/=100;let o=0,a=0,s=0;if(r){const e=n<.5?n*(1+r):n+r-n*r,i=2*n-e;o=ka(i,e,t+1/3),a=ka(i,e,t),s=ka(i,e,t-1/3)}else o=a=s=n;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:i}}(r)),r}const Ta=(e,t)=>{const r=Ea(e),n=Ea(t),i={...r};return e=>(i.red=ja(r.red,n.red,e),i.green=ja(r.green,n.green,e),i.blue=ja(r.blue,n.blue,e),i.alpha=wa(r.alpha,n.alpha,e),va.transform(i))};const Ca={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:_n},_a={regex:Ai,countKey:"Colors",token:"${c}",parse:ba.parse},Pa={regex:Ri,countKey:"Numbers",token:"${n}",parse:Ci.parse};function La(e,t){let{regex:r,countKey:n,token:i,parse:o}=t;const a=e.tokenised.match(r);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(r,i),e.values.push(...a.map(o)))}function Ra(e){const t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&La(r,Ca),La(r,_a),La(r,Pa),r}function Aa(e){return Ra(e).values}function za(e){const{values:t,numColors:r,numVars:n,tokenised:i}=Ra(e),o=t.length;return e=>{let t=i;for(let i=0;i<o;i++)t=i<n?t.replace(Ca.token,e[i]):i<n+r?t.replace(_a.token,ba.transform(e[i])):t.replace(Pa.token,Li(e[i]));return t}}const Oa=e=>"number"===typeof e?0:e;const Na={test:function(e){var t,r;return isNaN(e)&&Oi(e)&&((null===(t=e.match(Ri))||void 0===t?void 0:t.length)||0)+((null===(r=e.match(Ai))||void 0===r?void 0:r.length)||0)>0},parse:Aa,createTransformer:za,getAnimatableNone:function(e){const t=Aa(e);return za(e)(t.map(Oa))}},Da=(e,t)=>r=>`${r>0?t:e}`;function Ia(e,t){return"number"===typeof e?r=>wa(e,t,r):ba.test(e)?Ta(e,t):e.startsWith("var(")?Da(e,t):Fa(e,t)}const Ma=(e,t)=>{const r=[...e],n=r.length,i=e.map(((e,r)=>Ia(e,t[r])));return e=>{for(let t=0;t<n;t++)r[t]=i[t](e);return r}},$a=(e,t)=>{const r={...e,...t},n={};for(const i in r)void 0!==e[i]&&void 0!==t[i]&&(n[i]=Ia(e[i],t[i]));return e=>{for(const t in n)r[t]=n[t](e);return r}},Fa=(e,t)=>{const r=Na.createTransformer(t),n=Ra(e),i=Ra(t);return n.numVars===i.numVars&&n.numColors===i.numColors&&n.numNumbers>=i.numNumbers?To(Ma(n.values,i.values),r):(Un(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),Da(e,t))},Ba=(e,t,r)=>{const n=t-e;return 0===n?1:(r-e)/n},Ua=(e,t)=>r=>wa(e,t,r);function Va(e,t,r){const n=[],i=r||function(e){return"number"===typeof e?Ua:"string"===typeof e?ba.test(e)?Ta:Fa:Array.isArray(e)?Ma:"object"===typeof e?$a:Ua}(e[0]),o=e.length-1;for(let a=0;a<o;a++){let r=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||_n:t;r=To(e,r)}n.push(r)}return n}function Wa(e,t){let{clamp:r=!0,ease:n,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(Vn(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Va(t,n,i),s=a.length,l=t=>{let r=0;if(s>1)for(;r<e.length-2&&!(t<e[r+1]);r++);const n=Ba(e[r],e[r+1],t);return a[r](n)};return r?t=>l(Ti(e[0],e[o-1],t)):l}function Ha(e){const t=[0];return function(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const i=Ba(0,t,n);e.push(wa(r,1,i))}}(t,e.length-1),t}function qa(e){let{duration:t=300,keyframes:r,times:n,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(ha):ha(i),a={done:!1,value:r[0]},s=function(e,t){return e.map((e=>e*t))}(n&&n.length===r.length?n:Ha(r),t),l=Wa(s,r,{ease:Array.isArray(o)?o:(c=r,d=o,c.map((()=>d||na)).splice(0,c.length-1))});var c,d;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}function Ya(e,t){return t?e*(1e3/t):0}function Xa(e,t,r){const n=Math.max(t-5,0);return Ya(r-e(n),t-n)}const Ka=.001;function Ga(e){let t,r,{duration:n=800,bounce:i=.25,velocity:o=0,mass:a=1}=e;Un(n<=Ho(10),"Spring duration must be 10 seconds or less");let s=1-i;s=Ti(.05,1,s),n=Ti(.01,10,qo(n)),s<1?(t=e=>{const t=e*s,r=t*n,i=t-o,a=Ja(e,s),l=Math.exp(-r);return Ka-i/a*l},r=e=>{const r=e*s*n,i=r*o+o,a=Math.pow(s,2)*Math.pow(e,2)*n,l=Math.exp(-r),c=Ja(Math.pow(e,2),s);return(-t(e)+Ka>0?-1:1)*((i-a)*l)/c}):(t=e=>Math.exp(-e*n)*((e-o)*n+1)-.001,r=e=>Math.exp(-e*n)*(n*n*(o-e)));const l=function(e,t,r){let n=r;for(let i=1;i<Qa;i++)n-=e(n)/t(n);return n}(t,r,5/n);if(n=Ho(n),isNaN(l))return{stiffness:100,damping:10,duration:n};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:n}}}const Qa=12;function Ja(e,t){return e*Math.sqrt(1-t*t)}const Za=["duration","bounce"],es=["stiffness","damping","mass"];function ts(e,t){return t.some((t=>void 0!==e[t]))}function rs(e){let{keyframes:t,restDelta:r,restSpeed:n,...i}=e;const o=t[0],a=t[t.length-1],s={done:!1,value:o},{stiffness:l,damping:c,mass:d,duration:u,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!ts(e,es)&&ts(e,Za)){const r=Ga(e);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-qo(i.velocity||0)}),m=p||0,f=c/(2*Math.sqrt(l*d)),g=a-o,v=qo(Math.sqrt(l/d)),x=Math.abs(g)<5;let y;if(n||(n=x?.01:2),r||(r=x?.005:.5),f<1){const e=Ja(v,f);y=t=>{const r=Math.exp(-f*v*t);return a-r*((m+f*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===f)y=e=>a-Math.exp(-v*e)*(g+(m+v*g)*e);else{const e=v*Math.sqrt(f*f-1);y=t=>{const r=Math.exp(-f*v*t),n=Math.min(e*t,300);return a-r*((m+f*v*g)*Math.sinh(n)+e*g*Math.cosh(n))/e}}return{calculatedDuration:h&&u||null,next:e=>{const t=y(e);if(h)s.done=e>=u;else{let i=m;0!==e&&(i=f<1?Xa(y,e,t):0);const o=Math.abs(i)<=n,l=Math.abs(a-t)<=r;s.done=o&&l}return s.value=s.done?a:t,s}}}function ns(e){let{keyframes:t,velocity:r=0,power:n=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:d=.5,restSpeed:u}=e;const p=t[0],h={done:!1,value:p},m=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let f=n*r;const g=p+f,v=void 0===s?g:s(g);v!==g&&(f=v-p);const x=e=>-f*Math.exp(-e/i),y=e=>v+x(e),b=e=>{const t=x(e),r=y(e);h.done=Math.abs(t)<=d,h.value=h.done?v:r};let w,k;const j=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,k=rs({keyframes:[h.value,m(h.value)],velocity:Xa(y,e,h.value),damping:o,stiffness:a,restDelta:d,restSpeed:u}))};return j(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,b(e),j(e)),void 0!==w&&e>w?k.next(e-w):(!t&&b(e),h)}}}const is=e=>{const t=t=>{let{timestamp:r}=t;return e(r)};return{start:()=>Rn.update(t,!0),stop:()=>An(t),now:()=>zn.isProcessing?zn.timestamp:performance.now()}};function os(e){let t=0;let r=e.next(t);for(;!r.done&&t<2e4;)t+=50,r=e.next(t);return t>=2e4?1/0:t}const as={decay:ns,inertia:ns,tween:qa,keyframes:qa,spring:rs};function ss(e){let t,r,{autoplay:n=!0,delay:i=0,driver:o=is,keyframes:a,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:d="loop",onPlay:u,onStop:p,onComplete:h,onUpdate:m,...f}=e,g=1,v=!1;const x=()=>{r=new Promise((e=>{t=e}))};let y;x();const b=as[s]||qa;let w;b!==qa&&"number"!==typeof a[0]&&(w=Wa([0,100],a,{clamp:!1}),a=[0,100]);const k=b({...f,keyframes:a});let j;"mirror"===d&&(j=b({...f,keyframes:[...a].reverse(),velocity:-(f.velocity||0)}));let S="idle",E=null,T=null,C=null;null===k.calculatedDuration&&l&&(k.calculatedDuration=os(k));const{calculatedDuration:_}=k;let P=1/0,L=1/0;null!==_&&(P=_+c,L=P*(l+1)-c);let R=0;const A=e=>{if(null===T)return;g>0&&(T=Math.min(T,e)),g<0&&(T=Math.min(e-L/g,T)),R=null!==E?E:Math.round(e-T)*g;const t=R-i*(g>=0?1:-1),r=g>=0?t<0:t>L;R=Math.max(t,0),"finished"===S&&null===E&&(R=L);let n=R,o=k;if(l){const e=Math.min(R,L)/P;let t=Math.floor(e),r=e%1;!r&&e>=1&&(r=1),1===r&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===d?(r=1-r,c&&(r-=c/P)):"mirror"===d&&(o=j)),n=Ti(0,1,r)*P}const s=r?{done:!1,value:a[0]}:o.next(n);w&&(s.value=w(s.value));let{done:u}=s;r||null===_||(u=g>=0?R>=L:R<=0);const p=null===E&&("finished"===S||"running"===S&&u);return m&&m(s.value),p&&N(),s},z=()=>{y&&y.stop(),y=void 0},O=()=>{S="idle",z(),t(),x(),T=C=null},N=()=>{S="finished",h&&h(),z(),t()},D=()=>{if(v)return;y||(y=o(A));const e=y.now();u&&u(),null!==E?T=e-E:T&&"finished"!==S||(T=e),"finished"===S&&x(),C=T,E=null,S="running",y.start()};n&&D();const I={then:(e,t)=>r.then(e,t),get time(){return qo(R)},set time(e){e=Ho(e),R=e,null===E&&y&&0!==g?T=y.now()-e/g:E=e},get duration(){const e=null===k.calculatedDuration?os(k):k.calculatedDuration;return qo(e)},get speed(){return g},set speed(e){e!==g&&y&&(g=e,I.time=qo(R))},get state(){return S},play:D,pause:()=>{S="paused",E=R},stop:()=>{v=!0,"idle"!==S&&(S="idle",p&&p(),O())},cancel:()=>{null!==C&&A(C),O()},complete:()=>{S="finished"},sample:e=>(T=0,A(e))};return I}const ls=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),cs=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function ds(e,t,r){let{onUpdate:n,onComplete:i,...o}=r;if(!(ls()&&cs.has(t)&&!o.repeatDelay&&"mirror"!==o.repeatType&&0!==o.damping&&"inertia"!==o.type))return!1;let a,s,l=!1,c=!1;const d=()=>{s=new Promise((e=>{a=e}))};d();let{keyframes:u,duration:p=300,ease:h,times:m}=o;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Ko(t.ease))(t,o)){const e=ss({...o,repeat:0,delay:0});let t={done:!1,value:u[0]};const r=[];let n=0;for(;!t.done&&n<2e4;)t=e.sample(n),r.push(t.value),n+=10;m=void 0,u=r,p=n-10,h="linear"}const f=function(e,t,r){let{delay:n=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:r};l&&(c.offset=l);const d=Jo(s);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:n,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,u,{...o,duration:p,ease:h,times:m}),g=()=>{c=!1,f.cancel()},v=()=>{c=!0,Rn.update(g),a(),d()};f.onfinish=()=>{c||(e.set(function(e,t){let{repeat:r,repeatType:n="loop"}=t;return e[r&&"loop"!==n&&r%2===1?0:e.length-1]}(u,o)),i&&i(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(f.timeline=e,f.onfinish=null,_n),get time(){return qo(f.currentTime||0)},set time(e){f.currentTime=Ho(e)},get speed(){return f.playbackRate},set speed(e){f.playbackRate=e},get duration(){return qo(p)},play:()=>{l||(f.play(),An(g))},pause:()=>f.pause(),stop:()=>{if(l=!0,"idle"===f.playState)return;const{currentTime:t}=f;if(t){const r=ss({...o,autoplay:!1});e.setWithVelocity(r.sample(t-10).value,r.sample(t).value,10)}v()},complete:()=>{c||f.finish()},cancel:v}}const us={type:"spring",stiffness:500,damping:25,restSpeed:10},ps={type:"keyframes",duration:.8},hs={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ms=(e,t)=>{let{keyframes:r}=t;return r.length>2?ps:vi.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===r[1]?2*Math.sqrt(550):30,restSpeed:10}:us:hs},fs=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!Na.test(t)&&"0"!==t||t.startsWith("url("))),gs=new Set(["brightness","contrast","saturate","opacity"]);function vs(e){const[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[n]=r.match(Ri)||[];if(!n)return e;const i=r.replace(n,"");let o=gs.has(t)?1:0;return n!==r&&(o*=100),t+"("+o+i+")"}const xs=/([a-z-]*)\(.*?\)/g,ys={...Na,getAnimatableNone:e=>{const t=e.match(xs);return t?t.map(vs).join(" "):e}},bs={...Vi,color:ba,backgroundColor:ba,outlineColor:ba,fill:ba,stroke:ba,borderColor:ba,borderTopColor:ba,borderRightColor:ba,borderBottomColor:ba,borderLeftColor:ba,filter:ys,WebkitFilter:ys},ws=e=>bs[e];function ks(e,t){let r=ws(e);return r!==ys&&(r=Na),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const js=e=>/^0[^.\s]+$/.test(e);function Ss(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||js(e):void 0}function Es(e,t){return e[t]||e.default||e}const Ts=!1,Cs=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const o=Es(n,e)||{},a=o.delay||n.delay||0;let{elapsed:s=0}=n;s-=Ho(a);const l=function(e,t,r,n){const i=fs(t,r);let o;o=Array.isArray(r)?[...r]:[null,r];const a=void 0!==n.from?n.from:e.get();let s;const l=[];for(let c=0;c<o.length;c++)null===o[c]&&(o[c]=0===c?a:o[c-1]),Ss(o[c])&&l.push(c),"string"===typeof o[c]&&"none"!==o[c]&&"0"!==o[c]&&(s=o[c]);if(i&&l.length&&s)for(let c=0;c<l.length;c++)o[l[c]]=ks(t,s);return o}(t,e,r,o),c=l[0],d=l[l.length-1],u=fs(e,c),p=fs(e,d);Un(u===p,`You are trying to animate ${e} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(function(e){let{when:t,delay:r,delayChildren:n,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:d,...u}=e;return!!Object.keys(u).length}(o)||(h={...h,...ms(e,h)}),h.duration&&(h.duration=Ho(h.duration)),h.repeatDelay&&(h.repeatDelay=Ho(h.repeatDelay)),!u||!p||Yo||!1===o.type||Ts)return function(e){let{keyframes:t,delay:r,onUpdate:n,onComplete:i}=e;const o=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:_n,pause:_n,stop:_n,then:e=>(e(),Promise.resolve()),cancel:_n,complete:_n});return r?ss({keyframes:[0,1],duration:0,delay:r,onComplete:o}):o()}(Yo?{...h,delay:0}:h);if(!n.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const r=ds(t,e,h);if(r)return r}return ss(h)}};function _s(e){return Boolean(yi(e)&&e.add)}const Ps=e=>/^\-?\d*\.?\d+$/.test(e);function Ls(e,t){-1===e.indexOf(t)&&e.push(t)}function Rs(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class As{constructor(){this.subscriptions=[]}add(e){return Ls(this.subscriptions,e),()=>Rs(this.subscriptions,e)}notify(e,t,r){const n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](e,t,r);else for(let i=0;i<n;i++){const n=this.subscriptions[i];n&&n(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const zs={current:void 0};class Os{constructor(e){var t=this;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:n,timestamp:i}=zn;t.lastUpdated!==i&&(t.timeDelta=n,t.lastUpdated=i,Rn.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),r&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>Rn.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(n=this.current,!isNaN(parseFloat(n))),this.owner=r.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new As);const r=this.events[e].add(t);return"change"===e?()=>{r(),Rn.read((()=>{this.events.change.getSize()||this.stop()}))}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,r){this.set(t),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return zs.current&&zs.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ya(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ns(e,t){return new Os(e,t)}const Ds=e=>t=>t.test(e),Is=[Ci,Mi,Ii,Di,Fi,$i,{test:e=>"auto"===e,parse:e=>e}],Ms=e=>Is.find(Ds(e)),$s=[...Is,ba,Na],Fs=e=>$s.find(Ds(e));function Bs(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,Ns(r))}function Us(e,t){const r=Wo(e,t);let{transitionEnd:n={},transition:i={},...o}=r?e.makeTargetAnimatable(r,!1):{};o={...o,...n};for(const a in o){Bs(e,a,fo(o[a]))}}function Vs(e,t){if(!t)return;return(t[e]||t.default||t).from}function Ws(e,t){let{protectedKeys:r,needsAnimating:n}=e;const i=r.hasOwnProperty(t)&&!0!==n[t];return n[t]=!1,i}function Hs(e,t){const r=e.get();if(!Array.isArray(t))return r!==t;for(let n=0;n<t.length;n++)if(t[n]!==r)return!0}function qs(e,t){let{delay:r=0,transitionOverride:n,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");n&&(o=n);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u),n=s[u];if(!t||void 0===n||d&&Ws(d,u))continue;const i={delay:r,elapsed:0,...Es(o||{},u)};if(window.HandoffAppearAnimations){const r=e.getProps()[Gn];if(r){const e=window.HandoffAppearAnimations(r,u,t,Rn);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let a=!i.isHandoff&&!Hs(t,n);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(a=!1),t.animation&&(a=!1),a)continue;t.start(Cs(u,t,n,e.shouldReduceMotion&&vi.has(u)?{type:!1}:i));const p=t.animation;_s(l)&&(l.add(u),p.then((()=>l.remove(u)))),c.push(p)}return a&&Promise.all(c).then((()=>{a&&Us(e,a)})),c}function Ys(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=Wo(e,t,r.custom);let{transition:i=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(i=r.transitionOverride);const o=n?()=>Promise.all(qs(e,n,r)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*n,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*n}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*n};return Array.from(e.variantChildren).sort(Xs).forEach(((e,n)=>{e.notify("AnimationStart",t),a.push(Ys(e,t,{...o,delay:r+l(n)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,o+n,a,s,r)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then((()=>t()))}return Promise.all([o(),a(r.delay)])}function Xs(e,t){return e.sortNodePosition(t)}const Ks=[...ei].reverse(),Gs=ei.length;function Qs(e){return t=>Promise.all(t.map((t=>{let{animation:r,options:n}=t;return function(e,t){let r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>Ys(e,t,n)));r=Promise.all(i)}else if("string"===typeof t)r=Ys(e,t,n);else{const i="function"===typeof t?Wo(e,t,n.custom):t;r=Promise.all(qs(e,i,n))}return r.then((()=>e.notify("AnimationComplete",t)))}(e,r,n)})))}function Js(e){let t=Qs(e);const r={animate:el(!0),whileInView:el(),whileHover:el(),whileTap:el(),whileDrag:el(),whileFocus:el(),exit:el()};let n=!0;const i=(t,r)=>{const n=Wo(e,r);if(n){const{transition:e,transitionEnd:r,...i}=n;t={...t,...i,...r}}return t};function o(o,a){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],d=new Set;let u={},p=1/0;for(let t=0;t<Gs;t++){const h=Ks[t],m=r[h],f=void 0!==s[h]?s[h]:l[h],g=Jn(f),v=h===a?m.isActive:null;!1===v&&(p=t);let x=f===l[h]&&f!==s[h]&&g;if(x&&n&&e.manuallyAnimateOnMount&&(x=!1),m.protectedKeys={...u},!m.isActive&&null===v||!f&&!m.prevProp||Zn(f)||"boolean"===typeof f)continue;let y=Zs(m.prevProp,f)||h===a&&m.isActive&&!x&&g||t>p&&g,b=!1;const w=Array.isArray(f)?f:[f];let k=w.reduce(i,{});!1===v&&(k={});const{prevResolvedValues:j={}}=m,S={...j,...k},E=e=>{y=!0,d.has(e)&&(b=!0,d.delete(e)),m.needsAnimating[e]=!0};for(const e in S){const t=k[e],r=j[e];if(u.hasOwnProperty(e))continue;let n=!1;n=mo(t)&&mo(r)?!Vo(t,r):t!==r,n?void 0!==t?E(e):d.add(e):void 0!==t&&d.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=f,m.prevResolvedValues=k,m.isActive&&(u={...u,...k}),n&&e.blockInitialAnimation&&(y=!1),!y||x&&!b||c.push(...w.map((e=>({animation:e,options:{type:h,...o}}))))}if(d.size){const t={};d.forEach((r=>{const n=e.getBaseTarget(r);void 0!==n&&(t[r]=n)})),c.push({animation:t})}let h=Boolean(c.length);return!n||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),n=!1,h?t(c):Promise.resolve()}return{animateChanges:o,setActive:function(t,n,i){var a;if(r[t].isActive===n)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach((e=>{var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)})),r[t].isActive=n;const s=o(i,t);for(const e in r)r[e].protectedKeys={};return s},setAnimateFunction:function(r){t=r(e)},getState:()=>r}}function Zs(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Vo(t,e)}function el(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let tl=0;const rl={animation:{Feature:class extends Ao{constructor(e){super(e),e.animationState||(e.animationState=Js(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Zn(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends Ao{constructor(){super(...arguments),this.id=tl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==r&&void 0!==r?r:this.node.getProps().custom});t&&!e&&i.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},nl=(e,t)=>Math.abs(e-t);class il{constructor(e,t){let{transformPagePoint:r,contextWindow:n,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=sl(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,r=function(e,t){const r=nl(e.x,t.x),n=nl(e.y,t.y);return Math.sqrt(r**2+n**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!r)return;const{point:n}=e,{timestamp:i}=zn;this.history.push({...n,timestamp:i});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ol(t,this.transformPagePoint),Rn.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:r,onSessionEnd:n,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=sl("pointercancel"===e.type?this.lastMoveEventInfo:ol(t,this.transformPagePoint),this.history);this.startEvent&&r&&r(e,o),n&&n(e,o)},!ko(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=r,this.contextWindow=n||window;const o=ol(jo(e),this.transformPagePoint),{point:a}=o,{timestamp:s}=zn;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,sl(o,this.history)),this.removeListeners=To(So(this.contextWindow,"pointermove",this.handlePointerMove),So(this.contextWindow,"pointerup",this.handlePointerUp),So(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),An(this.updatePoint)}}function ol(e,t){return t?{point:t(e.point)}:e}function al(e,t){return{x:e.x-t.x,y:e.y-t.y}}function sl(e,t){let{point:r}=e;return{point:r,delta:al(r,cl(t)),offset:al(r,ll(t)),velocity:dl(t,.1)}}function ll(e){return e[0]}function cl(e){return e[e.length-1]}function dl(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const i=cl(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>Ho(t)));)r--;if(!n)return{x:0,y:0};const o=qo(i.timestamp-n.timestamp);if(0===o)return{x:0,y:0};const a={x:(i.x-n.x)/o,y:(i.y-n.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function ul(e){return e.max-e.min}function pl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=r}function hl(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=n,e.originPoint=wa(t.min,t.max,e.origin),e.scale=ul(r)/ul(t),(pl(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=wa(r.min,r.max,e.origin)-e.originPoint,(pl(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ml(e,t,r,n){hl(e.x,t.x,r.x,n?n.originX:void 0),hl(e.y,t.y,r.y,n?n.originY:void 0)}function fl(e,t,r){e.min=r.min+t.min,e.max=e.min+ul(t)}function gl(e,t,r){e.min=t.min-r.min,e.max=e.min+ul(t)}function vl(e,t,r){gl(e.x,t.x,r.x),gl(e.y,t.y,r.y)}function xl(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}function yl(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}const bl=.35;function wl(e,t,r){return{min:kl(e,t),max:kl(e,r)}}function kl(e,t){return"number"===typeof e?e:e[t]||0}function jl(e){return[e("x"),e("y")]}function Sl(e){let{top:t,left:r,right:n,bottom:i}=e;return{x:{min:r,max:n},y:{min:t,max:i}}}function El(e){return void 0===e||1===e}function Tl(e){let{scale:t,scaleX:r,scaleY:n}=e;return!El(t)||!El(r)||!El(n)}function Cl(e){return Tl(e)||_l(e)||e.z||e.rotate||e.rotateX||e.rotateY}function _l(e){return Pl(e.x)||Pl(e.y)}function Pl(e){return e&&"0%"!==e}function Ll(e,t,r){return r+t*(e-r)}function Rl(e,t,r,n,i){return void 0!==i&&(e=Ll(e,i,n)),Ll(e,r,n)+t}function Al(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Rl(e.min,t,r,n,i),e.max=Rl(e.max,t,r,n,i)}function zl(e,t){let{x:r,y:n}=t;Al(e.x,r.translate,r.scale,r.originPoint),Al(e.y,n.translate,n.scale,n.originPoint)}function Ol(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Nl(e,t){e.min=e.min+t,e.max=e.max+t}function Dl(e,t,r){let[n,i,o]=r;const a=void 0!==t[o]?t[o]:.5,s=wa(e.min,e.max,a);Al(e,t[n],t[i],s,t.scale)}const Il=["x","scaleX","originX"],Ml=["y","scaleY","originY"];function $l(e,t){Dl(e.x,t,Il),Dl(e.y,t,Ml)}function Fl(e,t){return Sl(function(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}const Bl=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Ul=new WeakMap;class Vl{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:n}=this.getProps();this.panSession=new il(e,{onSessionStart:e=>{const{dragSnapToOrigin:r}=this.getProps();r?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(jo(e,"page").point)},onStart:(e,t)=>{const{drag:r,dragPropagation:n,onDragStart:i}=this.getProps();if(r&&!n&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Lo(r),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jl((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ii.test(t)){const{projection:r}=this.visualElement;if(r&&r.layout){const n=r.layout.layoutBox[e];if(n){t=ul(n)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&Rn.update((()=>i(e,t)),!1,!0);const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:r,dragDirectionLock:n,onDirectionLock:i,onDrag:o}=this.getProps();if(!r&&!this.openGlobalLock)return;const{offset:a}=t;if(n&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=null;Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x");return r}(a),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>jl((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:n,contextWindow:Bl(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:n}=t;this.startAnimation(n);const{onDragEnd:i}=this.getProps();i&&Rn.update((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:n}=this.getProps();if(!r||!Wl(e,n,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=function(e,t,r){let{min:n,max:i}=t;return void 0!==n&&e<n?e=r?wa(n,e,r.min):Math.max(e,n):void 0!==i&&e>i&&(e=r?wa(i,e,r.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Qn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!n)&&function(e,t){let{top:r,left:n,bottom:i,right:o}=t;return{x:xl(e.x,n,o),y:xl(e.y,r,i)}}(n.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bl;return!1===e?e=0:!0===e&&(e=bl),{x:wl(e,"left","right"),y:wl(e,"top","bottom")}}(r),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&jl((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Qn(e))return!1;const r=e.current;Vn(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:n}=this.visualElement;if(!n||!n.layout)return!1;const i=function(e,t,r){const n=Fl(e,r),{scroll:i}=t;return i&&(Nl(n.x,i.offset.x),Nl(n.y,i.offset.y)),n}(r,n.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:yl(e.x,t.x),y:yl(e.y,t.y)}}(n.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:r}=e;return{top:r.min,right:t.max,bottom:r.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=Sl(e))}return o}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:n,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=jl((a=>{if(!Wl(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});const c=n?200:1e6,d=n?40:1e7,u={type:"inertia",velocity:r?e[a]:0,bounceStiffness:c,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,u)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return r.start(Cs(e,r,0,t))}stopAnimation(){jl((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){jl((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),n=r[t];return n||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){jl((t=>{const{drag:r}=this.getProps();if(!Wl(t,r,this.currentDirection))return;const{projection:n}=this.visualElement,i=this.getAxisMotionValue(t);if(n&&n.layout){const{min:r,max:o}=n.layout.layoutBox[t];i.set(e[t]-wa(r,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Qn(t)||!r||!this.constraints)return;this.stopAnimation();const n={x:0,y:0};jl((e=>{const t=this.getAxisMotionValue(e);if(t){const r=t.get();n[e]=function(e,t){let r=.5;const n=ul(e),i=ul(t);return i>n?r=Ba(t.min,t.max-n,e.min):n>i&&(r=Ba(e.min,e.max-i,t.min)),Ti(0,1,r)}({min:r,max:r},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),jl((t=>{if(!Wl(t,e,null))return;const r=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];r.set(wa(i,o,n[t]))}))}addListeners(){if(!this.visualElement.current)return;Ul.set(this.visualElement,this);const e=So(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:r=!0}=this.getProps();t&&r&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Qn(e)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,n=r.addEventListener("measure",t);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),t();const i=wo(window,"resize",(()=>this.scalePositionWithinConstraints())),o=r.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:r}=e;this.isDragging&&r&&(jl((e=>{const r=this.getAxisMotionValue(e);r&&(this.originPoint[e]+=t[e].translate,r.set(r.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),n(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:n=!1,dragConstraints:i=!1,dragElastic:o=bl,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:n,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function Wl(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}const Hl=e=>(t,r)=>{e&&Rn.update((()=>e(t,r)))};const ql={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Yl(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Xl={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Mi.test(e))return e;e=parseFloat(e)}return`${Yl(e,t.target.x)}% ${Yl(e,t.target.y)}%`}},Kl={correct:(e,t)=>{let{treeScale:r,projectionDelta:n}=t;const i=e,o=Na.parse(e);if(o.length>5)return i;const a=Na.createTransformer(e),s="number"!==typeof o[0]?1:0,l=n.x.scale*r.x,c=n.y.scale*r.y;o[0+s]/=l,o[1+s]/=c;const d=wa(l,c,.5);return"number"===typeof o[2+s]&&(o[2+s]/=d),"number"===typeof o[3+s]&&(o[3+s]/=d),a(o)}};class Gl extends n.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:n}=this.props,{projection:i}=e;var o;o=Jl,Object.assign(fi,o),i&&(t.group&&t.group.add(i),r&&r.register&&n&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),ql.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:n,isPresent:i}=this.props,o=r.projection;return o?(o.isPresent=i,n||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||Rn.postRender((()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:n}=e;n&&(n.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(n),r&&r.deregister&&r.deregister(n))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ql(e){const[t,r]=function(){const e=(0,n.useContext)(Nn);if(null===e)return[!0,null];const{isPresent:t,onExitComplete:r,register:i}=e,o=(0,n.useId)();return(0,n.useEffect)((()=>i(o)),[]),!t&&r?[!1,()=>r&&r(o)]:[!0]}(),i=(0,n.useContext)(Bn);return n.createElement(Gl,{...e,layoutGroup:i,switchLayoutGroup:(0,n.useContext)(li),isPresent:t,safeToRemove:r})}const Jl={borderRadius:{...Xl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xl,borderTopRightRadius:Xl,borderBottomLeftRadius:Xl,borderBottomRightRadius:Xl,boxShadow:Kl},Zl=["TopLeft","TopRight","BottomLeft","BottomRight"],ec=Zl.length,tc=e=>"string"===typeof e?parseFloat(e):e,rc=e=>"number"===typeof e||Mi.test(e);function nc(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const ic=ac(0,.5,sa),oc=ac(.5,.95,_n);function ac(e,t,r){return n=>n<e?0:n>t?1:r(Ba(e,t,n))}function sc(e,t){e.min=t.min,e.max=t.max}function lc(e,t){sc(e.x,t.x),sc(e.y,t.y)}function cc(e,t,r,n,i){return e=Ll(e-=t,1/r,n),void 0!==i&&(e=Ll(e,1/i,n)),e}function dc(e,t,r,n,i){let[o,a,s]=r;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Ii.test(t)&&(t=parseFloat(t),t=wa(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=wa(o.min,o.max,n);e===o&&(s-=t),e.min=cc(e.min,t,r,s,i),e.max=cc(e.max,t,r,s,i)}(e,t[o],t[a],t[s],t.scale,n,i)}const uc=["x","scaleX","originX"],pc=["y","scaleY","originY"];function hc(e,t,r,n){dc(e.x,t,uc,r?r.x:void 0,n?n.x:void 0),dc(e.y,t,pc,r?r.y:void 0,n?n.y:void 0)}function mc(e){return 0===e.translate&&1===e.scale}function fc(e){return mc(e.x)&&mc(e.y)}function gc(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function vc(e){return ul(e.x)/ul(e.y)}class xc{constructor(){this.members=[]}add(e){Ls(this.members,e),e.scheduleRender()}remove(e){if(Rs(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let r;for(let n=t;n>=0;n--){const e=this.members[n];if(!1!==e.isPresent){r=e;break}}return!!r&&(this.promote(r),!0)}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:n}=e.options;!1===n&&r.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yc(e,t,r){let n="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(n=`translate3d(${i}px, ${o}px, 0) `),1===t.x&&1===t.y||(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:e,rotateX:t,rotateY:i}=r;e&&(n+=`rotate(${e}deg) `),t&&(n+=`rotateX(${t}deg) `),i&&(n+=`rotateY(${i}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return 1===a&&1===s||(n+=`scale(${a}, ${s})`),n||"none"}const bc=(e,t)=>e.depth-t.depth;class wc{constructor(){this.children=[],this.isDirty=!1}add(e){Ls(this.children,e),this.isDirty=!0}remove(e){Rs(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(bc),this.isDirty=!1,this.children.forEach(e)}}const kc=["","X","Y","Z"],jc={visibility:"hidden"};let Sc=0;const Ec={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Tc(e){let{attachResizeListener:t,defaultParent:r,measureScroll:n,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===r||void 0===r?void 0:r();this.id=Sc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ec.totalNodes=Ec.resolvedTargetDeltas=Ec.recalculatedProjection=0,this.nodes.forEach(Pc),this.nodes.forEach(Dc),this.nodes.forEach(Ic),this.nodes.forEach(Lc),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(Ec)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let r=0;r<this.path.length;r++)this.path[r].shouldResetTransform=!0;this.root===this&&(this.nodes=new wc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new As),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];t&&t.notify(...n)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var n;this.isSVG=(n=e)instanceof SVGElement&&"svg"!==n.tagName,this.instance=e;const{layoutId:i,layout:o,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(o||i)&&(this.isLayoutDirty=!0),t){let r;const n=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,r&&r(),r=function(e,t){const r=performance.now(),n=i=>{let{timestamp:o}=i;const a=o-r;a>=t&&(An(n),e(a-t))};return Rn.read(n,!0),()=>An(n)}(n,250),ql.hasAnimatedSinceResize&&(ql.hasAnimatedSinceResize=!1,this.nodes.forEach(Nc))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&a&&(i||o)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:r,hasRelativeTargetChanged:n,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||Vc,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!gc(this.targetLayout,i)||n,d=!r&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||d||r&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,d);const e={...Es(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else r||Nc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,An(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Mc),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:r}=this.options;if(void 0===t&&!r)return;const n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Ac);this.isUpdating||this.nodes.forEach(zc),this.isUpdating=!1,this.nodes.forEach(Oc),this.nodes.forEach(Cc),this.nodes.forEach(_c),this.clearAllSnapshots();const e=performance.now();zn.delta=Ti(0,1e3/60,e-zn.timestamp),zn.timestamp=e,zn.isProcessing=!0,On.update.process(zn),On.preRender.process(zn),On.render.process(zn),zn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(Rc),this.sharedNodes.forEach($c)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Rn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Rn.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let r=0;r<this.path.length;r++){this.path[r].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!fc(this.projectionDelta),r=this.getTransformTemplate(),n=r?r(this.latestValues,""):void 0,i=n!==this.prevTransformTemplateValue;e&&(t||Cl(this.latestValues)||i)&&(o(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let r=this.removeElementScroll(t);var n;return e&&(r=this.removeTransform(r)),qc((n=r).x),qc(n.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:r}=this.root;return r&&(Nl(t.x,r.offset.x),Nl(t.y,r.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};lc(t,e);for(let r=0;r<this.path.length;r++){const n=this.path[r],{scroll:i,options:o}=n;if(n!==this.root&&i&&o.layoutScroll){if(i.isRoot){lc(t,e);const{scroll:r}=this.root;r&&(Nl(t.x,-r.offset.x),Nl(t.y,-r.offset.y))}Nl(t.x,i.offset.x),Nl(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r={x:{min:0,max:0},y:{min:0,max:0}};lc(r,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&$l(r,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Cl(e.latestValues)&&$l(r,e.latestValues)}return Cl(this.latestValues)&&$l(r,this.latestValues),r}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};lc(t,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];if(!e.instance)continue;if(!Cl(e.latestValues))continue;Tl(e.latestValues)&&e.updateSnapshot();const n={x:{min:0,max:0},y:{min:0,max:0}};lc(n,e.measurePageBox()),hc(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,n)}return Cl(this.latestValues)&&hc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==zn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const r=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=r.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=r.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=r.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==r;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:o}=this.options;if(this.layout&&(i||o)){if(this.resolvedRelativeTargetAt=zn.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},vl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),lc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,fl(a.x,s.x,l.x),fl(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):lc(this.target,this.layout.layoutBox),zl(this.target,this.targetDelta)):lc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},vl(this.relativeTargetOrigin,this.target,e.target),lc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ec.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Tl(this.parent.latestValues)&&!_l(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),r=Boolean(this.resumingFrom)||this!==t;let n=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(n=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===zn.timestamp&&(n=!1),n)return;const{layout:i,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!o)return;lc(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=r.length;if(!i)return;let o,a;t.x=t.y=1;for(let s=0;s<i;s++){o=r[s],a=o.projectionDelta;const i=o.instance;i&&i.style&&"contents"===i.style.display||(n&&o.options.layoutScroll&&o.scroll&&o!==o.root&&$l(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,zl(e,a)),n&&Cl(o.latestValues)&&$l(e,o.latestValues))}t.x=Ol(t.x),t.y=Ol(t.y)}(this.layoutCorrected,this.treeScale,this.path,r),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;ml(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=yc(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===a&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Ec.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=this.snapshot,n=r?r.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,d=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Uc));let u;this.animationProgress=0,this.mixTargetDelta=t=>{const r=t/1e3;Fc(o.x,e.x,r),Fc(o.y,e.y,r),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vl(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,r,n){Bc(e.x,t.x,r.x,n),Bc(e.y,t.y,r.y,n)}(this.relativeTarget,this.relativeTargetOrigin,a,r),u&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,u)&&(this.isProjectionDirty=!1),u||(u={x:{min:0,max:0},y:{min:0,max:0}}),lc(u,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,r,n,i,o){i?(e.opacity=wa(0,void 0!==r.opacity?r.opacity:1,ic(n)),e.opacityExit=wa(void 0!==t.opacity?t.opacity:1,0,oc(n))):o&&(e.opacity=wa(void 0!==t.opacity?t.opacity:1,void 0!==r.opacity?r.opacity:1,n));for(let a=0;a<ec;a++){const i=`border${Zl[a]}Radius`;let o=nc(t,i),s=nc(r,i);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||rc(o)===rc(s)?(e[i]=Math.max(wa(tc(o),tc(s),n),0),(Ii.test(s)||Ii.test(o))&&(e[i]+="%")):e[i]=s)}(t.rotate||r.rotate)&&(e.rotate=wa(t.rotate||0,r.rotate||0,n))}(i,n,this.latestValues,r,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(An(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Rn.update((()=>{ql.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,r){const n=yi(e)?e:Ns(e);return n.start(Cs("",n,t,r)),n.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:r,layout:n,latestValues:i}=e;if(t&&r&&n){if(this!==e&&this.layout&&n&&Yc(this.options.animationType,this.layout.layoutBox,n.layoutBox)){r=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=ul(this.layout.layoutBox.x);r.x.min=e.target.x.min,r.x.max=r.x.min+t;const n=ul(this.layout.layoutBox.y);r.y.min=e.target.y.min,r.y.max=r.y.min+n}lc(t,r),$l(t,i),ml(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new xc);this.sharedNodes.get(e).add(t);const r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=this.getStack();n&&n.promote(this,r),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:r}=e;if((r.rotate||r.rotateX||r.rotateY||r.rotateZ)&&(t=!0),!t)return;const n={};for(let i=0;i<kc.length;i++){const t="rotate"+kc[i];r[t]&&(n[t]=r[t],e.setStaticValue(t,0))}e.render();for(const i in n)e.setStaticValue(i,n[i]);e.scheduleRender()}getProjectionStyles(e){var t,r;if(!this.instance||this.isSVG)return;if(!this.isVisible)return jc;const n={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,n.opacity="",n.pointerEvents=go(null===e||void 0===e?void 0:e.pointerEvents)||"",n.transform=i?i(this.latestValues,""):"none",n;const o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=go(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Cl(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),n.transform=yc(this.projectionDeltaWithTransform,this.treeScale,a),i&&(n.transform=i(a,n.transform));const{x:s,y:l}=this.projectionDelta;n.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?n.opacity=o===this?null!==(r=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:n.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const c in fi){if(void 0===a[c])continue;const{correct:e,applyTo:t}=fi[c],r="none"===n.transform?a[c]:e(a[c],o);if(t){const e=t.length;for(let i=0;i<e;i++)n[t[i]]=r}else n[c]=r}return this.options.layoutId&&(n.pointerEvents=o===this?go(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),n}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(Ac),this.root.sharedNodes.clear()}}}function Cc(e){e.updateLayout()}function _c(e){var t;const r=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:n}=e.layout,{animationType:i}=e.options,o=r.source!==e.layout.source;"size"===i?jl((e=>{const n=o?r.measuredBox[e]:r.layoutBox[e],i=ul(n);n.min=t[e].min,n.max=n.min+i})):Yc(i,r.layoutBox,t)&&jl((n=>{const i=o?r.measuredBox[n]:r.layoutBox[n],a=ul(t[n]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[n].max=e.relativeTarget[n].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};ml(a,t,r.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?ml(s,e.applyTransform(n,!0),r.measuredBox):ml(s,t,r.layoutBox);const l=!fc(a);let c=!1;if(!e.resumeFrom){const n=e.getClosestProjectingParent();if(n&&!n.resumeFrom){const{snapshot:i,layout:o}=n;if(i&&o){const a={x:{min:0,max:0},y:{min:0,max:0}};vl(a,r.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};vl(s,t,o.layoutBox),gc(a,s)||(c=!0),n.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=n)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:r,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Pc(e){Ec.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Lc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Rc(e){e.clearSnapshot()}function Ac(e){e.clearMeasurements()}function zc(e){e.isLayoutDirty=!1}function Oc(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Nc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Dc(e){e.resolveTargetDelta()}function Ic(e){e.calcProjection()}function Mc(e){e.resetRotation()}function $c(e){e.removeLeadSnapshot()}function Fc(e,t,r){e.translate=wa(t.translate,0,r),e.scale=wa(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Bc(e,t,r,n){e.min=wa(t.min,r.min,n),e.max=wa(t.max,r.max,n)}function Uc(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Vc={duration:.45,ease:[.4,0,.1,1]},Wc=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Hc=Wc("applewebkit/")&&!Wc("chrome/")?Math.round:_n;function qc(e){e.min=Hc(e.min),e.max=Hc(e.max)}function Yc(e,t,r){return"position"===e||"preserve-aspect"===e&&!pl(vc(t),vc(r),.2)}const Xc=Tc({attachResizeListener:(e,t)=>wo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Kc={current:void 0},Gc=Tc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Kc.current){const e=new Xc({});e.mount(window),e.setOptions({layoutScroll:!0}),Kc.current=e}return Kc.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Qc={pan:{Feature:class extends Ao{constructor(){super(...arguments),this.removePointerDownListener=_n}onPointerDown(e){this.session=new il(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Bl(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:n}=this.node.getProps();return{onSessionStart:Hl(e),onStart:Hl(t),onMove:r,onEnd:(e,t)=>{delete this.session,n&&Rn.update((()=>n(e,t)))}}}mount(){this.removePointerDownListener=So(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Ao{constructor(e){super(e),this.removeGroupControls=_n,this.removeListeners=_n,this.controls=new Vl(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_n}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Gc,MeasureLayout:Ql}},Jc=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Zc(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Vn(r<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[n,i]=function(e){const t=Jc.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]}(e);if(!n)return;const o=window.getComputedStyle(t).getPropertyValue(n);if(o){const e=o.trim();return Ps(e)?parseFloat(e):e}return Si(i)?Zc(i,t,r+1):i}const ed=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),td=e=>ed.has(e),rd=e=>e===Ci||e===Mi,nd=(e,t)=>parseFloat(e.split(", ")[t]),id=(e,t)=>(r,n)=>{let{transform:i}=n;if("none"===i||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/);if(o)return nd(o[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?nd(t[1],e):0}},od=new Set(["x","y","z"]),ad=gi.filter((e=>!od.has(e)));const sd={width:(e,t)=>{let{x:r}=e,{paddingLeft:n="0",paddingRight:i="0"}=t;return r.max-r.min-parseFloat(n)-parseFloat(i)},height:(e,t)=>{let{y:r}=e,{paddingTop:n="0",paddingBottom:i="0"}=t;return r.max-r.min-parseFloat(n)-parseFloat(i)},top:(e,t)=>{let{top:r}=t;return parseFloat(r)},left:(e,t)=>{let{left:r}=t;return parseFloat(r)},bottom:(e,t)=>{let{y:r}=e,{top:n}=t;return parseFloat(n)+(r.max-r.min)},right:(e,t)=>{let{x:r}=e,{left:n}=t;return parseFloat(n)+(r.max-r.min)},x:id(4,13),y:id(5,14)};sd.translateX=sd.x,sd.translateY=sd.y;const ld=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},n={...n};const i=Object.keys(t).filter(td);let o=[],a=!1;const s=[];if(i.forEach((i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let c=r[i],d=Ms(c);const u=t[i];let p;if(mo(u)){const e=u.length,t=null===u[0]?1:0;c=u[t],d=Ms(c);for(let r=t;r<e&&null!==u[r];r++)p?Vn(Ms(u[r])===p,"All keyframes must be of the same type"):(p=Ms(u[r]),Vn(p===d||rd(d)&&rd(p),"Keyframes must be of the same dimension as the current value"))}else p=Ms(u);if(d!==p)if(rd(d)&&rd(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof u?t[i]=parseFloat(u):Array.isArray(u)&&p===Mi&&(t[i]=u.map(parseFloat))}else(null===d||void 0===d?void 0:d.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===u)?0===c?l.set(p.transform(c)):t[i]=d.transform(u):(a||(o=function(e){const t=[];return ad.forEach((r=>{const n=e.getValue(r);void 0!==n&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),a=!0),s.push(i),n[i]=void 0!==n[i]?n[i]:t[i],l.jump(u))})),s.length){const r=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,r)=>{const n=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),r.forEach((e=>{s[e]=sd[e](n,o)})),t.render();const l=t.measureViewportBox();return r.forEach((r=>{const n=t.getValue(r);n&&n.jump(s[r]),e[r]=sd[r](l,o)})),e})(t,e,s);return o.length&&o.forEach((t=>{let[r,n]=t;e.getValue(r).set(n)})),e.render(),En&&null!==r&&window.scrollTo({top:r}),{target:i,transitionEnd:n}}return{target:t,transitionEnd:n}};function cd(e,t,r,n){return(e=>Object.keys(e).some(td))(t)?ld(e,t,r,n):{target:t,transitionEnd:n}}const dd=(e,t,r,n)=>{const i=function(e,t,r){let{...n}=t;const i=e.current;if(!(i instanceof Element))return{target:n,transitionEnd:r};r&&(r={...r}),e.values.forEach((e=>{const t=e.get();if(!Si(t))return;const r=Zc(t,i);r&&e.set(r)}));for(const o in n){const e=n[o];if(!Si(e))continue;const t=Zc(e,i);t&&(n[o]=t,r||(r={}),void 0===r[o]&&(r[o]=e))}return{target:n,transitionEnd:r}}(e,t,n);return cd(e,t=i.target,r,n=i.transitionEnd)},ud={current:null},pd={current:!1};function hd(){if(pd.current=!0,En)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ud.current=e.matches;e.addListener(t),t()}else ud.current=!1}const md=new WeakMap,fd=Object.keys(si),gd=fd.length,vd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],xd=ti.length;class yd{constructor(e){let{parent:t,props:r,presenceContext:n,reducedMotionConfig:i,visualState:o}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Rn.render(this.render,!1,!0);const{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=r.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=ri(r),this.isVariantNode=ni(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(r,{});for(const u in d){const e=d[u];void 0!==s[u]&&yi(e)&&(e.set(s[u],!1),_s(c)&&c.add(u))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,md.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),pd.current||hd(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||ud.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){md.delete(this.current),this.projection&&this.projection.unmount(),An(this.notifyUpdate),An(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const r=vi.has(e),n=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Rn.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{n(),i()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,r,n){let i,o,{children:a,...s}=e;for(let l=0;l<gd;l++){const e=fd[l],{isEnabled:t,Feature:r,ProjectionNode:n,MeasureLayout:a}=si[e];n&&(i=n),t(s)&&(!this.features[e]&&r&&(this.features[e]=new r(this)),a&&(o=a))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:r,dragConstraints:o,layoutScroll:a,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(r)||o&&Qn(o),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:n,layoutScroll:a,layoutRoot:l})}return o}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<vd.length;r++){const t=vd[r];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const n=e["on"+t];n&&(this.propEventSubscriptions[t]=this.on(t,n))}this.prevMotionValues=function(e,t,r){const{willChange:n}=t;for(const i in t){const o=t[i],a=r[i];if(yi(o))e.addValue(i,o),_s(n)&&n.add(i);else if(yi(a))e.addValue(i,Ns(o,{owner:e})),_s(n)&&n.remove(i);else if(a!==o)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(o)}else{const t=e.getStaticValue(i);e.addValue(i,Ns(void 0!==t?t:o,{owner:e}))}}for(const i in r)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<xd;t++){const r=ti[t],n=this.props[r];(Jn(n)||!1===n)&&(e[r]=n)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return void 0===r&&void 0!==t&&(r=Ns(t,{owner:this}),this.addValue(e,r)),r}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props,n="string"===typeof r||"object"===typeof r?null===(t=ho(this.props,r))||void 0===t?void 0:t[e]:void 0;if(r&&void 0!==n)return n;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||yi(i)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new As),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.events[e].notify(...r)}}}class bd extends yd{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:r,style:n}=t;delete r[e],delete n[e]}makeTargetAnimatableFromInstance(e,t,r){let{transition:n,transitionEnd:i,...o}=e,{transformValues:a}=t,s=function(e,t,r){const n={};for(const i in e){const e=Vs(i,t);if(void 0!==e)n[i]=e;else{const e=r.getValue(i);e&&(n[i]=e.get())}}return n}(o,n||{},this);if(a&&(i&&(i=a(i)),o&&(o=a(o)),s&&(s=a(s))),r){!function(e,t,r){var n,i;const o=Object.keys(t).filter((t=>!e.hasValue(t))),a=o.length;if(a)for(let s=0;s<a;s++){const a=o[s],l=t[a];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(i=null!==(n=r[a])&&void 0!==n?n:e.readValue(a))&&void 0!==i?i:t[a]),void 0!==c&&null!==c&&("string"===typeof c&&(Ps(c)||js(c))?c=parseFloat(c):!Fs(c)&&Na.test(l)&&(c=ks(a,l)),e.addValue(a,Ns(c,{owner:e})),void 0===r[a]&&(r[a]=c),null!==c&&e.setBaseTarget(a,c))}}(this,o,s);const e=dd(this,o,s,i);i=e.transitionEnd,o=e.target}return{transition:n,transitionEnd:i,...o}}}class wd extends bd{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(vi.has(t)){const e=ws(t);return e&&e.default||0}{const n=(r=e,window.getComputedStyle(r)),i=(ji(t)?n.getPropertyValue(t):n[t])||0;return"string"===typeof i?i.trim():i}var r}measureInstanceViewportBox(e,t){let{transformPagePoint:r}=t;return Fl(e,r)}build(e,t,r,n){Wi(e,t,r,n.transformTemplate)}scrapeMotionValuesFromProps(e,t){return uo(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;yi(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,r,n){so(e,t,r,n)}}class kd extends bd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(vi.has(t)){const e=ws(t);return e&&e.default||0}return t=lo.has(t)?t:Kn(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return po(e,t)}build(e,t,r,n){ro(e,t,r,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,r,n){co(e,t,0,n)}mount(e){this.isSVGTag=io(e.tagName),super.mount(e)}}const jd=(e,t)=>mi(e)?new kd(t,{enableHardwareAcceleration:!1}):new wd(t,{enableHardwareAcceleration:!0}),Sd={...rl,...Uo,...Qc,...{layout:{ProjectionNode:Gc,MeasureLayout:Ql}}},Ed=pi(((e,t)=>function(e,t,r,n){let{forwardMotionProps:i=!1}=t;return{...mi(e)?yo:bo,preloadedFeatures:r,useRender:ao(i),createVisualElement:n,Component:e}}(e,t,Sd,jd)));const Td=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=yn.apply(void 0,ze([e],t,!1)),o="sc-global-".concat(rr(JSON.stringify(i))),a=new jn(i,o),s=function(e){var t=tn(),r=n.useContext(hn),i=n.useRef(t.styleSheet.allocateGSInstance(o)).current;return t.styleSheet.server&&l(i,e,t.styleSheet,r,t.stylis),n.useLayoutEffect((function(){if(!t.styleSheet.server)return l(i,e,t.styleSheet,r,t.stylis),function(){return a.removeStyles(i,t.styleSheet)}}),[i,e,t.styleSheet,r,t.stylis]),null};function l(e,t,r,n,i){if(a.isStatic)a.renderStyles(e,Ut,r,i);else{var o=Ae(Ae({},t),{theme:Ht(t,n,s.defaultProps)});a.renderStyles(e,o,r,i)}}return n.memo(s)})`
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
`,Cd={colors:{primary:"#2563eb",secondary:"#5B3DF5",tertiary:"#21C6F7",text:"#FFFFFF",background:"#121212",darkBackground:"#0A0A0A",lightBackground:"#1E1E1E",gray:"#888888",success:"#4BB543",error:"#2563eb"},fonts:{heading:"'Montserrat', sans-serif",body:"'Poppins', sans-serif"},breakpoints:{xs:"576px",sm:"768px",md:"992px",lg:"1200px"},transition:{standard:"all 0.3s ease"},shadows:{small:"0 2px 10px rgba(0, 0, 0, 0.2)",medium:"0 5px 15px rgba(0, 0, 0, 0.3)",large:"0 10px 25px rgba(0, 0, 0, 0.4)"},gradients:{primary:"linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",secondary:"linear-gradient(135deg, #5B3DF5 0%, #3D76F5 100%)"},spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem",xxl:"5rem"}};function _d(e,t){return function(){return e.apply(t,arguments)}}const{toString:Pd}=Object.prototype,{getPrototypeOf:Ld}=Object,Rd=(Ad=Object.create(null),e=>{const t=Pd.call(e);return Ad[t]||(Ad[t]=t.slice(8,-1).toLowerCase())});var Ad;const zd=e=>(e=e.toLowerCase(),t=>Rd(t)===e),Od=e=>t=>typeof t===e,{isArray:Nd}=Array,Dd=Od("undefined");const Id=zd("ArrayBuffer");const Md=Od("string"),$d=Od("function"),Fd=Od("number"),Bd=e=>null!==e&&"object"===typeof e,Ud=e=>{if("object"!==Rd(e))return!1;const t=Ld(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Vd=zd("Date"),Wd=zd("File"),Hd=zd("Blob"),qd=zd("FileList"),Yd=zd("URLSearchParams"),[Xd,Kd,Gd,Qd]=["ReadableStream","Request","Response","Headers"].map(zd);function Jd(e,t){let r,n,{allOwnKeys:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),Nd(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{const n=i?Object.getOwnPropertyNames(e):Object.keys(e),o=n.length;let a;for(r=0;r<o;r++)a=n[r],t.call(null,e[a],a,e)}}function Zd(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,i=r.length;for(;i-- >0;)if(n=r[i],t===n.toLowerCase())return n;return null}const eu="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,tu=e=>!Dd(e)&&e!==eu;const ru=(nu="undefined"!==typeof Uint8Array&&Ld(Uint8Array),e=>nu&&e instanceof nu);var nu;const iu=zd("HTMLFormElement"),ou=(e=>{let{hasOwnProperty:t}=e;return(e,r)=>t.call(e,r)})(Object.prototype),au=zd("RegExp"),su=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Jd(r,((r,i)=>{let o;!1!==(o=t(r,i,e))&&(n[i]=o||r)})),Object.defineProperties(e,n)};const lu=zd("AsyncFunction"),cu=(du="function"===typeof setImmediate,uu=$d(eu.postMessage),du?setImmediate:uu?((e,t)=>(eu.addEventListener("message",(r=>{let{source:n,data:i}=r;n===eu&&i===e&&t.length&&t.shift()()}),!1),r=>{t.push(r),eu.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var du,uu;const pu="undefined"!==typeof queueMicrotask?queueMicrotask.bind(eu):"undefined"!==typeof process&&process.nextTick||cu,hu={isArray:Nd,isArrayBuffer:Id,isBuffer:function(e){return null!==e&&!Dd(e)&&null!==e.constructor&&!Dd(e.constructor)&&$d(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||$d(e.append)&&("formdata"===(t=Rd(e))||"object"===t&&$d(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Id(e.buffer),t},isString:Md,isNumber:Fd,isBoolean:e=>!0===e||!1===e,isObject:Bd,isPlainObject:Ud,isReadableStream:Xd,isRequest:Kd,isResponse:Gd,isHeaders:Qd,isUndefined:Dd,isDate:Vd,isFile:Wd,isBlob:Hd,isRegExp:au,isFunction:$d,isStream:e=>Bd(e)&&$d(e.pipe),isURLSearchParams:Yd,isTypedArray:ru,isFileList:qd,forEach:Jd,merge:function e(){const{caseless:t}=tu(this)&&this||{},r={},n=(n,i)=>{const o=t&&Zd(r,i)||i;Ud(r[o])&&Ud(n)?r[o]=e(r[o],n):Ud(n)?r[o]=e({},n):Nd(n)?r[o]=n.slice():r[o]=n};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&Jd(arguments[i],n);return r},extend:function(e,t,r){let{allOwnKeys:n}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Jd(t,((t,n)=>{r&&$d(t)?e[n]=_d(t,r):e[n]=t}),{allOwnKeys:n}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,o,a;const s={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&Ld(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:Rd,kindOfTest:zd,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(Nd(e))return e;let t=e.length;if(!Fd(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:iu,hasOwnProperty:ou,hasOwnProp:ou,reduceDescriptors:su,freezeMethods:e=>{su(e,((t,r)=>{if($d(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];$d(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return Nd(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Zd,global:eu,isContextDefined:tu,isSpecCompliantForm:function(e){return!!(e&&$d(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(Bd(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const i=Nd(e)?[]:{};return Jd(e,((e,t)=>{const o=r(e,n+1);!Dd(o)&&(i[t]=o)})),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:lu,isThenable:e=>e&&(Bd(e)||$d(e))&&$d(e.then)&&$d(e.catch),setImmediate:cu,asap:pu};function mu(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}hu.inherits(mu,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:hu.toJSONObject(this.config),code:this.code,status:this.status}}});const fu=mu.prototype,gu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{gu[e]={value:e}})),Object.defineProperties(mu,gu),Object.defineProperty(fu,"isAxiosError",{value:!0}),mu.from=(e,t,r,n,i,o)=>{const a=Object.create(fu);return hu.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),mu.call(a,e.message,t,r,n,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const vu=mu;function xu(e){return hu.isPlainObject(e)||hu.isArray(e)}function yu(e){return hu.endsWith(e,"[]")?e.slice(0,-2):e}function bu(e,t,r){return e?e.concat(t).map((function(e,t){return e=yu(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const wu=hu.toFlatObject(hu,{},null,(function(e){return/^is[A-Z]/.test(e)}));const ku=function(e,t,r){if(!hu.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=hu.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!hu.isUndefined(t[e])}))).metaTokens,i=r.visitor||c,o=r.dots,a=r.indexes,s=(r.Blob||"undefined"!==typeof Blob&&Blob)&&hu.isSpecCompliantForm(t);if(!hu.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(hu.isDate(e))return e.toISOString();if(!s&&hu.isBlob(e))throw new vu("Blob is not supported. Use a Buffer instead.");return hu.isArrayBuffer(e)||hu.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,i){let s=e;if(e&&!i&&"object"===typeof e)if(hu.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(hu.isArray(e)&&function(e){return hu.isArray(e)&&!e.some(xu)}(e)||(hu.isFileList(e)||hu.endsWith(r,"[]"))&&(s=hu.toArray(e)))return r=yu(r),s.forEach((function(e,n){!hu.isUndefined(e)&&null!==e&&t.append(!0===a?bu([r],n,o):null===a?r:r+"[]",l(e))})),!1;return!!xu(e)||(t.append(bu(i,r,o),l(e)),!1)}const d=[],u=Object.assign(wu,{defaultVisitor:c,convertValue:l,isVisitable:xu});if(!hu.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!hu.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),hu.forEach(r,(function(r,o){!0===(!(hu.isUndefined(r)||null===r)&&i.call(t,r,hu.isString(o)?o.trim():o,n,u))&&e(r,n?n.concat(o):[o])})),d.pop()}}(e),t};function ju(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Su(e,t){this._pairs=[],e&&ku(e,this,t)}const Eu=Su.prototype;Eu.append=function(e,t){this._pairs.push([e,t])},Eu.toString=function(e){const t=e?function(t){return e.call(this,t,ju)}:ju;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Tu=Su;function Cu(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _u(e,t,r){if(!t)return e;const n=r&&r.encode||Cu;hu.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let o;if(o=i?i(t,r):hu.isURLSearchParams(t)?t.toString():new Tu(t,r).toString(n),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const Pu=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){hu.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Lu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ru={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Tu,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Au="undefined"!==typeof window&&"undefined"!==typeof document,zu="object"===typeof navigator&&navigator||void 0,Ou=Au&&(!zu||["ReactNative","NativeScript","NS"].indexOf(zu.product)<0),Nu="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,Du=Au&&window.location.href||"http://localhost",Iu={...e,...Ru};const Mu=function(e){function t(e,r,n,i){let o=e[i++];if("__proto__"===o)return!0;const a=Number.isFinite(+o),s=i>=e.length;if(o=!o&&hu.isArray(n)?n.length:o,s)return hu.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!a;n[o]&&hu.isObject(n[o])||(n[o]=[]);return t(e,r,n[o],i)&&hu.isArray(n[o])&&(n[o]=function(e){const t={},r=Object.keys(e);let n;const i=r.length;let o;for(n=0;n<i;n++)o=r[n],t[o]=e[o];return t}(n[o])),!a}if(hu.isFormData(e)&&hu.isFunction(e.entries)){const r={};return hu.forEachEntry(e,((e,n)=>{t(function(e){return hu.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null};const $u={transitional:Lu,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,i=hu.isObject(e);i&&hu.isHTMLForm(e)&&(e=new FormData(e));if(hu.isFormData(e))return n?JSON.stringify(Mu(e)):e;if(hu.isArrayBuffer(e)||hu.isBuffer(e)||hu.isStream(e)||hu.isFile(e)||hu.isBlob(e)||hu.isReadableStream(e))return e;if(hu.isArrayBufferView(e))return e.buffer;if(hu.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ku(e,new Iu.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return Iu.isNode&&hu.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((o=hu.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ku(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||n?(t.setContentType("application/json",!1),function(e,t,r){if(hu.isString(e))try{return(t||JSON.parse)(e),hu.trim(e)}catch(tj){if("SyntaxError"!==tj.name)throw tj}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||$u.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(hu.isResponse(e)||hu.isReadableStream(e))return e;if(e&&hu.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(tj){if(r){if("SyntaxError"===tj.name)throw vu.from(tj,vu.ERR_BAD_RESPONSE,this,null,this.response);throw tj}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Iu.classes.FormData,Blob:Iu.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};hu.forEach(["delete","get","head","post","put","patch"],(e=>{$u.headers[e]={}}));const Fu=$u,Bu=hu.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Uu=Symbol("internals");function Vu(e){return e&&String(e).trim().toLowerCase()}function Wu(e){return!1===e||null==e?e:hu.isArray(e)?e.map(Wu):String(e)}function Hu(e,t,r,n,i){return hu.isFunction(n)?n.call(this,t,r):(i&&(t=r),hu.isString(t)?hu.isString(n)?-1!==t.indexOf(n):hu.isRegExp(n)?n.test(t):void 0:void 0)}class qu{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function i(e,t,r){const i=Vu(t);if(!i)throw new Error("header name must be a non-empty string");const o=hu.findKey(n,i);(!o||void 0===n[o]||!0===r||void 0===r&&!1!==n[o])&&(n[o||t]=Wu(e))}const o=(e,t)=>hu.forEach(e,((e,r)=>i(e,r,t)));if(hu.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(hu.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))o((e=>{const t={};let r,n,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),r=e.substring(0,i).trim().toLowerCase(),n=e.substring(i+1).trim(),!r||t[r]&&Bu[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(hu.isHeaders(e))for(const[a,s]of e.entries())i(s,a,r);else null!=e&&i(t,e,r);return this}get(e,t){if(e=Vu(e)){const r=hu.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(hu.isFunction(t))return t.call(this,e,r);if(hu.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Vu(e)){const r=hu.findKey(this,e);return!(!r||void 0===this[r]||t&&!Hu(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function i(e){if(e=Vu(e)){const i=hu.findKey(r,e);!i||t&&!Hu(0,r[i],i,t)||(delete r[i],n=!0)}}return hu.isArray(e)?e.forEach(i):i(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const i=t[r];e&&!Hu(0,this[i],i,e,!0)||(delete this[i],n=!0)}return n}normalize(e){const t=this,r={};return hu.forEach(this,((n,i)=>{const o=hu.findKey(r,i);if(o)return t[o]=Wu(n),void delete t[i];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(i):String(i).trim();a!==i&&delete t[i],t[a]=Wu(n),r[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return hu.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&hu.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,r]=e;return t+": "+r})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[Uu]=this[Uu]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=Vu(e);t[n]||(!function(e,t){const r=hu.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})}))}(r,e),t[n]=!0)}return hu.isArray(e)?e.forEach(n):n(e),this}}qu.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),hu.reduceDescriptors(qu.prototype,((e,t)=>{let{value:r}=e,n=t[0].toUpperCase()+t.slice(1);return{get:()=>r,set(e){this[n]=e}}})),hu.freezeMethods(qu);const Yu=qu;function Xu(e,t){const r=this||Fu,n=t||r,i=Yu.from(n.headers);let o=n.data;return hu.forEach(e,(function(e){o=e.call(r,o,i.normalize(),t?t.status:void 0)})),i.normalize(),o}function Ku(e){return!(!e||!e.__CANCEL__)}function Gu(e,t,r){vu.call(this,null==e?"canceled":e,vu.ERR_CANCELED,t,r),this.name="CanceledError"}hu.inherits(Gu,vu,{__CANCEL__:!0});const Qu=Gu;function Ju(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new vu("Request failed with status code "+r.status,[vu.ERR_BAD_REQUEST,vu.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}const Zu=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i,o=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=n[a];i||(i=l),r[o]=s,n[o]=l;let d=a,u=0;for(;d!==o;)u+=r[d++],d%=e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),l-i<t)return;const p=c&&l-c;return p?Math.round(1e3*u/p):void 0}};const ep=function(e,t){let r,n,i=0,o=1e3/t;const a=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=o,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-i;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=o?a(l,e):(r=l,n||(n=setTimeout((()=>{n=null,a(r)}),o-t)))},()=>r&&a(r)]},tp=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=0;const i=Zu(50,250);return ep((r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,s=o-n,l=i(s);n=o;e({loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),r)},rp=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},np=e=>function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return hu.asap((()=>e(...r)))},ip=Iu.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Iu.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Iu.origin),Iu.navigator&&/(msie|trident)/i.test(Iu.navigator.userAgent)):()=>!0,op=Iu.hasStandardBrowserEnv?{write(e,t,r,n,i,o){const a=[e+"="+encodeURIComponent(t)];hu.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),hu.isString(n)&&a.push("path="+n),hu.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function ap(e,t,r){let n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const sp=e=>e instanceof Yu?{...e}:e;function lp(e,t){t=t||{};const r={};function n(e,t,r,n){return hu.isPlainObject(e)&&hu.isPlainObject(t)?hu.merge.call({caseless:n},e,t):hu.isPlainObject(t)?hu.merge({},t):hu.isArray(t)?t.slice():t}function i(e,t,r,i){return hu.isUndefined(t)?hu.isUndefined(e)?void 0:n(void 0,e,0,i):n(e,t,0,i)}function o(e,t){if(!hu.isUndefined(t))return n(void 0,t)}function a(e,t){return hu.isUndefined(t)?hu.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,i,o){return o in t?n(r,i):o in e?n(void 0,r):void 0}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,r)=>i(sp(e),sp(t),0,!0)};return hu.forEach(Object.keys(Object.assign({},e,t)),(function(n){const o=l[n]||i,a=o(e[n],t[n],n);hu.isUndefined(a)&&o!==s||(r[n]=a)})),r}const cp=e=>{const t=lp({},e);let r,{data:n,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=Yu.from(s),t.url=_u(ap(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),hu.isFormData(n))if(Iu.hasStandardBrowserEnv||Iu.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(r=s.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(Iu.hasStandardBrowserEnv&&(i&&hu.isFunction(i)&&(i=i(t)),i||!1!==i&&ip(t.url))){const e=o&&a&&op.read(a);e&&s.set(o,e)}return t},dp="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=cp(e);let i=n.data;const o=Yu.from(n.headers).normalize();let a,s,l,c,d,{responseType:u,onUploadProgress:p,onDownloadProgress:h}=n;function m(){c&&c(),d&&d(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let f=new XMLHttpRequest;function g(){if(!f)return;const n=Yu.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders());Ju((function(e){t(e),m()}),(function(e){r(e),m()}),{data:u&&"text"!==u&&"json"!==u?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f}),f=null}f.open(n.method.toUpperCase(),n.url,!0),f.timeout=n.timeout,"onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&setTimeout(g)},f.onabort=function(){f&&(r(new vu("Request aborted",vu.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new vu("Network Error",vu.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const i=n.transitional||Lu;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new vu(t,i.clarifyTimeoutError?vu.ETIMEDOUT:vu.ECONNABORTED,e,f)),f=null},void 0===i&&o.setContentType(null),"setRequestHeader"in f&&hu.forEach(o.toJSON(),(function(e,t){f.setRequestHeader(t,e)})),hu.isUndefined(n.withCredentials)||(f.withCredentials=!!n.withCredentials),u&&"json"!==u&&(f.responseType=n.responseType),h&&([l,d]=tp(h,!0),f.addEventListener("progress",l)),p&&f.upload&&([s,c]=tp(p),f.upload.addEventListener("progress",s),f.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(a=t=>{f&&(r(!t||t.type?new Qu(null,e,f):t),f.abort(),f=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const v=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);v&&-1===Iu.protocols.indexOf(v)?r(new vu("Unsupported protocol "+v+":",vu.ERR_BAD_REQUEST,e)):f.send(i||null)}))},up=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const i=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof vu?t:new Qu(t instanceof Error?t.message:t))}};let o=t&&setTimeout((()=>{o=null,i(new vu(`timeout ${t} of ms exceeded`,vu.ETIMEDOUT))}),t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:s}=n;return s.unsubscribe=()=>hu.asap(a),s}},pp=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,i=0;for(;i<r;)n=i+t,yield e.slice(i,n),i=n},hp=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},mp=(e,t,r,n)=>{const i=async function*(e,t){for await(const r of hp(e))yield*pp(r,t)}(e,t);let o,a=0,s=e=>{o||(o=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await i.next();if(t)return s(),void e.close();let o=n.byteLength;if(r){let e=a+=o;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw s(t),t}},cancel:e=>(s(e),i.return())},{highWaterMark:2})},fp="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,gp=fp&&"function"===typeof ReadableStream,vp=fp&&("function"===typeof TextEncoder?(xp=new TextEncoder,e=>xp.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var xp;const yp=function(e){try{for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return!!e(...r)}catch(tj){return!1}},bp=gp&&yp((()=>{let e=!1;const t=new Request(Iu.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),wp=gp&&yp((()=>hu.isReadableStream(new Response("").body))),kp={stream:wp&&(e=>e.body)};var jp;fp&&(jp=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!kp[e]&&(kp[e]=hu.isFunction(jp[e])?t=>t[e]():(t,r)=>{throw new vu(`Response type '${e}' is not supported`,vu.ERR_NOT_SUPPORT,r)})})));const Sp=async(e,t)=>{const r=hu.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(hu.isBlob(e))return e.size;if(hu.isSpecCompliantForm(e)){const t=new Request(Iu.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return hu.isArrayBufferView(e)||hu.isArrayBuffer(e)?e.byteLength:(hu.isURLSearchParams(e)&&(e+=""),hu.isString(e)?(await vp(e)).byteLength:void 0)})(t):r},Ep=fp&&(async e=>{let{url:t,method:r,data:n,signal:i,cancelToken:o,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:d,withCredentials:u="same-origin",fetchOptions:p}=cp(e);c=c?(c+"").toLowerCase():"text";let h,m=up([i,o&&o.toAbortSignal()],a);const f=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let g;try{if(l&&bp&&"get"!==r&&"head"!==r&&0!==(g=await Sp(d,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(hu.isFormData(n)&&(e=r.headers.get("content-type"))&&d.setContentType(e),r.body){const[e,t]=rp(g,tp(np(l)));n=mp(r.body,65536,e,t)}}hu.isString(u)||(u=u?"include":"omit");const i="credentials"in Request.prototype;h=new Request(t,{...p,signal:m,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",credentials:i?u:void 0});let o=await fetch(h);const a=wp&&("stream"===c||"response"===c);if(wp&&(s||a&&f)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=hu.toFiniteNumber(o.headers.get("content-length")),[r,n]=s&&rp(t,tp(np(s),!0))||[];o=new Response(mp(o.body,65536,r,(()=>{n&&n(),f&&f()})),e)}c=c||"text";let v=await kp[hu.findKey(kp,c)||"text"](o,e);return!a&&f&&f(),await new Promise(((t,r)=>{Ju(t,r,{data:v,headers:Yu.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:h})}))}catch(v){if(f&&f(),v&&"TypeError"===v.name&&/fetch/i.test(v.message))throw Object.assign(new vu("Network Error",vu.ERR_NETWORK,e,h),{cause:v.cause||v});throw vu.from(v,v&&v.code,e,h)}}),Tp={http:null,xhr:dp,fetch:Ep};hu.forEach(Tp,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(tj){}Object.defineProperty(e,"adapterName",{value:t})}}));const Cp=e=>`- ${e}`,_p=e=>hu.isFunction(e)||null===e||!1===e,Pp=e=>{e=hu.isArray(e)?e:[e];const{length:t}=e;let r,n;const i={};for(let o=0;o<t;o++){let t;if(r=e[o],n=r,!_p(r)&&(n=Tp[(t=String(r)).toLowerCase()],void 0===n))throw new vu(`Unknown adapter '${t}'`);if(n)break;i[t||"#"+o]=n}if(!n){const e=Object.entries(i).map((e=>{let[t,r]=e;return`adapter ${t} `+(!1===r?"is not supported by the environment":"is not available in the build")}));let r=t?e.length>1?"since :\n"+e.map(Cp).join("\n"):" "+Cp(e[0]):"as no adapter specified";throw new vu("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n};function Lp(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Qu(null,e)}function Rp(e){Lp(e),e.headers=Yu.from(e.headers),e.data=Xu.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Pp(e.adapter||Fu.adapter)(e).then((function(t){return Lp(e),t.data=Xu.call(e,e.transformResponse,t),t.headers=Yu.from(t.headers),t}),(function(t){return Ku(t)||(Lp(e),t&&t.response&&(t.response.data=Xu.call(e,e.transformResponse,t.response),t.response.headers=Yu.from(t.response.headers))),Promise.reject(t)}))}const Ap="1.8.4",zp={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{zp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const Op={};zp.transitional=function(e,t,r){function n(e,t){return"[Axios v1.8.4] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,i,o)=>{if(!1===e)throw new vu(n(i," has been removed"+(t?" in "+t:"")),vu.ERR_DEPRECATED);return t&&!Op[i]&&(Op[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}},zp.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const Np={assertOptions:function(e,t,r){if("object"!==typeof e)throw new vu("options must be an object",vu.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const o=n[i],a=t[o];if(a){const t=e[o],r=void 0===t||a(t,o,e);if(!0!==r)throw new vu("option "+o+" must be "+r,vu.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new vu("Unknown option "+o,vu.ERR_BAD_OPTION)}},validators:zp},Dp=Np.validators;class Ip{constructor(e){this.defaults=e,this.interceptors={request:new Pu,response:new Pu}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(tj){}}throw r}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=lp(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:i}=t;void 0!==r&&Np.assertOptions(r,{silentJSONParsing:Dp.transitional(Dp.boolean),forcedJSONParsing:Dp.transitional(Dp.boolean),clarifyTimeoutError:Dp.transitional(Dp.boolean)},!1),null!=n&&(hu.isFunction(n)?t.paramsSerializer={serialize:n}:Np.assertOptions(n,{encode:Dp.function,serialize:Dp.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Np.assertOptions(t,{baseUrl:Dp.spelling("baseURL"),withXsrfToken:Dp.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&hu.merge(i.common,i[t.method]);i&&hu.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Yu.concat(o,i);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let d,u=0;if(!s){const e=[Rp.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=a.length;let p=t;for(u=0;u<d;){const e=a[u++],t=a[u++];try{p=e(p)}catch(h){t.call(this,h);break}}try{c=Rp.call(this,p)}catch(h){return Promise.reject(h)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return _u(ap((e=lp(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}hu.forEach(["delete","get","head","options"],(function(e){Ip.prototype[e]=function(t,r){return this.request(lp(r||{},{method:e,url:t,data:(r||{}).data}))}})),hu.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(lp(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Ip.prototype[e]=t(),Ip.prototype[e+"Form"]=t(!0)}));const Mp=Ip;class $p{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,i){r.reason||(r.reason=new Qu(e,n,i),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new $p((function(t){e=t})),cancel:e}}}const Fp=$p;const Bp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Bp).forEach((e=>{let[t,r]=e;Bp[r]=t}));const Up=Bp;const Vp=function e(t){const r=new Mp(t),n=_d(Mp.prototype.request,r);return hu.extend(n,Mp.prototype,r,{allOwnKeys:!0}),hu.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(lp(t,r))},n}(Fu);Vp.Axios=Mp,Vp.CanceledError=Qu,Vp.CancelToken=Fp,Vp.isCancel=Ku,Vp.VERSION=Ap,Vp.toFormData=ku,Vp.AxiosError=vu,Vp.Cancel=Vp.CanceledError,Vp.all=function(e){return Promise.all(e)},Vp.spread=function(e){return function(t){return e.apply(null,t)}},Vp.isAxiosError=function(e){return hu.isObject(e)&&!0===e.isAxiosError},Vp.mergeConfig=lp,Vp.AxiosHeaders=Yu,Vp.formToJSON=e=>Mu(hu.isHTMLForm(e)?new FormData(e):e),Vp.getAdapter=Pp,Vp.HttpStatusCode=Up,Vp.default=Vp;const Wp=Vp,Hp=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;try{if(!e||void 0===t)throw new Error("Invalid cookie parameters");const n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);const i=`${e}=${encodeURIComponent(t)};expires=${n.toUTCString()};path=/;SameSite=Strict;Secure`;if(document.cookie=i,!qp(e))throw new Error("Failed to set cookie")}catch(n){throw console.error("Error setting cookie:",n),n}},qp=e=>{try{if(!e)throw new Error("Cookie name is required");const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const n=t[r].split("=");if(n[0].trim()===e)return decodeURIComponent(n[1])}return null}catch(t){return console.error("Error getting cookie:",t),null}},Yp=e=>{try{if(!e)throw new Error("Cookie name is required");if(document.cookie=`${e}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Strict;Secure`,qp(e))throw new Error("Failed to remove cookie")}catch(t){throw console.error("Error removing cookie:",t),t}},Xp="admin_session",Kp="admin_token",Gp="admin_user",Qp=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{if(!e||!t)throw new Error("Invalid session data");const n=t.replace("Bearer ",""),i=r?30:7;Hp(Kp,n,i),Hp(Gp,JSON.stringify(e),i);const o={createdAt:(new Date).getTime(),expiryDays:i,remember:r};return Hp(Xp,JSON.stringify(o),i),localStorage.setItem(Kp,n),localStorage.setItem(Gp,JSON.stringify(e)),localStorage.setItem(Xp,JSON.stringify(o)),{userData:e,token:n,session:o}}catch(n){return console.error("Error saving session:",n),Zp(),null}},Jp=()=>{try{let e=qp(Kp),t=qp(Gp),r=qp(Xp);if(e||(e=localStorage.getItem(Kp)),t||(t=localStorage.getItem(Gp)),r||(r=localStorage.getItem(Xp)),!e||!t||!r)return null;const n=JSON.parse(t),i=JSON.parse(r),o=(new Date).getTime();return o>i.createdAt+24*i.expiryDays*60*60*1e3?(Zp(),null):{userData:n,token:e,session:i}}catch(e){return console.error("Error parsing session data:",e),Zp(),null}},Zp=()=>{try{Yp(Kp),Yp(Gp),Yp(Xp),localStorage.removeItem(Kp),localStorage.removeItem(Gp),localStorage.removeItem(Xp)}catch(e){console.error("Error clearing session:",e)}},eh=()=>null!==Jp(),th=()=>{try{const e=Jp();if(e){const{userData:t,token:r,session:n}=e;return n.createdAt=(new Date).getTime(),Qp(t,r,n.remember)}return null}catch(e){return console.error("Error refreshing session:",e),null}};var rh=r(579);Wp.defaults.baseURL="http://localhost:5001",Wp.interceptors.request.use((e=>{const t=Jp();return null!==t&&void 0!==t&&t.token&&(e.headers.Authorization=`Bearer ${t.token}`),e}),(e=>Promise.reject(e))),Wp.interceptors.response.use((e=>e),(e=>{var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&(Zp(),window.location.href="/admin/login"),Promise.reject(e)}));const nh=(0,n.createContext)(null),ih=e=>{let{children:t}=e;const[r,i]=(0,n.useState)(null),[o,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null),[c,d]=(0,n.useState)(null);(0,n.useEffect)((()=>{const e=Jp();e&&(i(e.userData),u(e.token)),a(!1)}),[]),(0,n.useEffect)((()=>()=>{c&&clearTimeout(c)}),[c]);const u=e=>{const t=setTimeout((()=>{eh()&&(p(e),th(),u(e))}),9e5);d(t)},p=async e=>{try{const e=await Wp.get("/api/auth/me");return i(e.data),e.data}catch(s){return console.error("Auth check failed:",s),h(),null}},h=()=>{Zp(),i(null),c&&(clearTimeout(c),d(null))},m={user:r,loading:o,error:s,login:async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{l(null);const n=await Wp.post("/api/auth/login",{email:e,password:t}),{user:o,token:a}=n.data;return Qp(o,a,r),i(o),u(a),{user:o,token:a}}catch(s){var n,o;throw console.error("Login error:",s),l((null===(n=s.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||"Login failed"),s}},logout:h,isAuthenticated:()=>null!==r&&eh(),checkAuth:p};return(0,rh.jsx)(nh.Provider,{value:m,children:t})},oh=()=>{const e=(0,n.useContext)(nh);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},ah=kn(Ed.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,sh=kn(Ed.div)`
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
`,lh=kn.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`,ch=n.createContext(null),dh=()=>{const e=n.useContext(ch);if(!e)throw new Error("useToast must be used within a ToastProvider");return e},uh=e=>{let{children:t}=e;const[r,i]=n.useState([]);return(0,rh.jsxs)(ch.Provider,{value:{addToast:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";const r=Date.now();i((n=>[...n,{id:r,message:e,type:t}])),setTimeout((()=>{i((e=>e.filter((e=>e.id!==r))))}),5e3)}},children:[t,(0,rh.jsx)(ah,{children:(0,rh.jsx)(Hn,{children:r.map((e=>(0,rh.jsxs)(sh,{type:e.type,initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},transition:{duration:.2},children:[(0,rh.jsx)(lh,{children:"success"===e.type?(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}):(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.message]},e.id)))})})]})},ph=kn(Ed.div)`
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
`,hh=kn.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,mh=kn.div`
  color: ${e=>e.theme.colors.primary};
  margin-right: 0.8rem;
  
  svg {
    width: 24px;
    height: 24px;
  }
`,fh=kn.h3`
  font-size: 1.1rem;
  margin: 0;
  color: ${e=>e.theme.colors.text};
`,gh=kn.p`
  font-size: 0.95rem;
  margin: 0 0 1.25rem;
  color: ${e=>e.theme.colors.gray};
  line-height: 1.5;
`,vh=kn.div`
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
  color: ${e=>e.theme.colors.text};
  
  span {
    color: ${e=>e.theme.colors.primary};
    font-weight: 600;
  }
`,xh=kn.div`
  display: flex;
  gap: 0.75rem;
`,yh=kn(Ed.button)`
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
`,bh=kn(yh)`
  background: ${e=>e.theme.colors.primary};
  color: white;
  
  &:hover {
    background: ${e=>e.theme.colors.secondary};
  }
`,wh=kn(yh)`
  background: rgba(255, 255, 255, 0.1);
  color: ${e=>e.theme.colors.text};
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,kh=()=>{const{logout:e,isAuthenticated:t}=oh(),r=Z(),[i,o]=(0,n.useState)(!1),[a,s]=(0,n.useState)(60),[l,c]=(0,n.useState)(Date.now()),d=(0,n.useCallback)((()=>{c(Date.now()),i&&u()}),[i]);(0,n.useEffect)((()=>{if(!t())return;const e=["mousedown","mousemove","keydown","scroll","touchstart","click"];return e.forEach((e=>window.addEventListener(e,d))),()=>{e.forEach((e=>window.removeEventListener(e,d)))}}),[d,t]),(0,n.useEffect)((()=>{if(!t())return;const e=setInterval((()=>{Date.now()-l>=174e4&&o(!0)}),6e4);return()=>clearInterval(e)}),[l,t]),(0,n.useEffect)((()=>{if(!i)return;const e=setInterval((()=>{s((t=>t<=1?(clearInterval(e),p(),0):t-1))}),1e3);return()=>clearInterval(e)}),[i]);const u=()=>{th(),o(!1),s(60),c(Date.now())},p=()=>{e(),r("/admin/login")};return t()?(0,rh.jsx)(Hn,{children:i&&(0,rh.jsxs)(ph,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:{duration:.3},children:[(0,rh.jsxs)(hh,{children:[(0,rh.jsx)(mh,{children:(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,rh.jsx)(fh,{children:"Session Timeout Warning"})]}),(0,rh.jsx)(gh,{children:"Your session is about to expire due to inactivity. You will be automatically logged out if you take no action."}),(0,rh.jsxs)(vh,{children:["Time remaining: ",(0,rh.jsx)("span",{children:a})," seconds"]}),(0,rh.jsxs)(xh,{children:[(0,rh.jsx)(bh,{onClick:u,whileHover:{scale:1.03},whileTap:{scale:.98},children:"Stay Logged In"}),(0,rh.jsx)(wh,{onClick:p,whileHover:{scale:1.03},whileTap:{scale:.98},children:"Logout Now"})]})]})}):null};function jh(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=jh(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const Sh=function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=jh(e))&&(n&&(n+=" "),n+=t);return n};!function(e){if(!e||"undefined"==typeof document)return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n');var Eh=e=>"number"==typeof e&&!isNaN(e),Th=e=>"string"==typeof e,Ch=e=>"function"==typeof e,_h=e=>Th(e)||Ch(e)?e:null,Ph=(e,t)=>!1===e||Eh(e)&&e>0?e:t,Lh=e=>(0,n.isValidElement)(e)||Th(e)||Ch(e)||Eh(e);function Rh(e){let{enter:t,exit:r,appendPosition:i=!1,collapse:o=!0,collapseDuration:a=300}=e;return function(e){let{children:s,position:l,preventExitTransition:c,done:d,nodeRef:u,isIn:p,playToast:h}=e,m=i?`${t}--${l}`:t,f=i?`${r}--${l}`:r,g=(0,n.useRef)(0);return(0,n.useLayoutEffect)((()=>{let e=u.current,t=m.split(" "),r=n=>{n.target===u.current&&(h(),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,n.useEffect)((()=>{let e=u.current,t=()=>{e.removeEventListener("animationend",t),o?function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,{scrollHeight:n,style:i}=e;requestAnimationFrame((()=>{i.minHeight="initial",i.height=n+"px",i.transition=`all ${r}ms`,requestAnimationFrame((()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,r)}))}))}(e,d,a):d()};p||(c?t():(g.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))}),[p]),n.createElement(n.Fragment,null,s)}}function Ah(e,t){return{content:zh(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function zh(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,n.isValidElement)(e)&&!Th(e.type)?(0,n.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:r}):Ch(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:r}):e}function Oh(e){let{delay:t,isRunning:r,closeToast:i,type:o="default",hide:a,className:s,controlledProgress:l,progress:c,rtl:d,isIn:u,theme:p}=e,h=a||l&&0===c,m={animationDuration:`${t}ms`,animationPlayState:r?"running":"paused"};l&&(m.transform=`scaleX(${c})`);let f=Sh("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),g=Ch(s)?s({rtl:d,type:o,defaultClassName:f}):Sh(f,s),v={[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{u&&i()}};return n.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":h},n.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${o}`}),n.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:g,style:m,...v}))}var Nh=1,Dh=()=>""+Nh++;function Ih(e,t,r){let n=1,i=0,o=[],a=[],s=t,l=new Map,c=new Set,d=()=>{a=Array.from(l.values()),c.forEach((e=>e()))},u=e=>{var t,r;null==(r=null==(t=e.props)?void 0:t.onClose)||r.call(t,e.removalReason),e.isActive=!1},p=e=>{if(null==e)l.forEach(u);else{let t=l.get(e);t&&u(t)}d()},h=e=>{var t,n;let{toastId:i,updateId:o}=e.props,a=null==o;e.staleId&&l.delete(e.staleId),e.isActive=!0,l.set(i,e),d(),r(Ah(e,a?"added":"updated")),a&&(null==(n=(t=e.props).onOpen)||n.call(t))};return{id:e,props:s,observe:e=>(c.add(e),()=>c.delete(e)),toggle:(e,t)=>{l.forEach((r=>{var n;(null==t||t===r.props.toastId)&&(null==(n=r.toggle)||n.call(r,e))}))},removeToast:p,toasts:l,clearQueue:()=>{i-=o.length,o=[]},buildToast:(t,a)=>{if((t=>{let{containerId:r,toastId:n,updateId:i}=t,o=r?r!==e:1!==e,a=l.has(n)&&null==i;return o||a})(a))return;let{toastId:c,updateId:u,data:m,staleId:f,delay:g}=a,v=null==u;v&&i++;let x={...s,style:s.toastStyle,key:n++,...Object.fromEntries(Object.entries(a).filter((e=>{let[t,r]=e;return null!=r}))),toastId:c,updateId:u,data:m,isIn:!1,className:_h(a.className||s.toastClassName),progressClassName:_h(a.progressClassName||s.progressClassName),autoClose:!a.isLoading&&Ph(a.autoClose,s.autoClose),closeToast(e){l.get(c).removalReason=e,p(c)},deleteToast(){let e=l.get(c);if(null!=e){if(r(Ah(e,"removed")),l.delete(c),i--,i<0&&(i=0),o.length>0)return void h(o.shift());d()}}};x.closeButton=s.closeButton,!1===a.closeButton||Lh(a.closeButton)?x.closeButton=a.closeButton:!0===a.closeButton&&(x.closeButton=!Lh(s.closeButton)||s.closeButton);let y={content:t,props:x,staleId:f};s.limit&&s.limit>0&&i>s.limit&&v?o.push(y):Eh(g)?setTimeout((()=>{h(y)}),g):h(y)},setProps(e){s=e},setToggle:(e,t)=>{let r=l.get(e);r&&(r.toggle=t)},isToastActive:e=>{var t;return null==(t=l.get(e))?void 0:t.isActive},getSnapshot:()=>a}}var Mh=new Map,$h=[],Fh=new Set,Bh=e=>Fh.forEach((t=>t(e))),Uh=()=>Mh.size>0;function Vh(e,t){var r;if(t)return!(null==(r=Mh.get(t))||!r.isToastActive(e));let n=!1;return Mh.forEach((t=>{t.isToastActive(e)&&(n=!0)})),n}function Wh(e){if(Uh()){if(null==e||(e=>Th(e)||Eh(e))(e))Mh.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){let t=Mh.get(e.containerId);t?t.removeToast(e.id):Mh.forEach((t=>{t.removeToast(e.id)}))}}else $h=$h.filter((t=>null!=e&&t.options.toastId!==e))}function Hh(e,t){Lh(e)&&(Uh()||$h.push({content:e,options:t}),Mh.forEach((r=>{r.buildToast(e,t)})))}function qh(e,t){Mh.forEach((r=>{(null==t||null==t||!t.containerId||(null==t?void 0:t.containerId)===r.id)&&r.toggle(e,null==t?void 0:t.id)}))}function Yh(e){let t=e.containerId||1;return{subscribe(r){let n=Ih(t,e,Bh);Mh.set(t,n);let i=n.observe(r);return $h.forEach((e=>Hh(e.content,e.options))),$h=[],()=>{i(),Mh.delete(t)}},setProps(e){var r;null==(r=Mh.get(t))||r.setProps(e)},getSnapshot(){var e;return null==(e=Mh.get(t))?void 0:e.getSnapshot()}}}function Xh(e){return e&&(Th(e.toastId)||Eh(e.toastId))?e.toastId:Dh()}function Kh(e,t){return Hh(e,t),t.toastId}function Gh(e,t){return{...t,type:t&&t.type||e,toastId:Xh(t)}}function Qh(e){return(t,r)=>Kh(t,Gh(e,r))}function Jh(e,t){return Kh(e,Gh("default",t))}function Zh(e){let[t,r]=(0,n.useState)(!1),[i,o]=(0,n.useState)(!1),a=(0,n.useRef)(null),s=(0,n.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:d,onClick:u,closeOnClick:p}=e;function h(){r(!0)}function m(){r(!1)}function f(r){let n=a.current;if(s.canDrag&&n){s.didMove=!0,t&&m(),"x"===e.draggableDirection?s.delta=r.clientX-s.start:s.delta=r.clientY-s.start,s.start!==r.clientX&&(s.canCloseOnClick=!1);let i="x"===e.draggableDirection?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`;n.style.transform=`translate3d(${i},0)`,n.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance))}}function g(){document.removeEventListener("pointermove",f),document.removeEventListener("pointerup",g);let t=a.current;if(s.canDrag&&s.didMove&&t){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),e.closeToast(!0),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}(function(e){var t;null==(t=Mh.get(e.containerId||1))||t.setToggle(e.id,e.fn)})({id:e.toastId,containerId:e.containerId,fn:r}),(0,n.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||m(),window.addEventListener("focus",h),window.addEventListener("blur",m),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",m)}}),[e.pauseOnFocusLoss]);let v={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){s.didMove=!1,document.addEventListener("pointermove",f),document.addEventListener("pointerup",g);let r=a.current;s.canCloseOnClick=!0,s.canDrag=!0,r.style.transition="none","x"===e.draggableDirection?(s.start=t.clientX,s.removalDistance=r.offsetWidth*(e.draggablePercent/100)):(s.start=t.clientY,s.removalDistance=r.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:r,bottom:n,left:i,right:o}=a.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=r&&t.clientY<=n?m():h()}};return l&&c&&(v.onMouseEnter=m,e.stacked||(v.onMouseLeave=h)),p&&(v.onClick=e=>{u&&u(e),s.canCloseOnClick&&d(!0)}),{playToast:h,pauseToast:m,isRunning:t,preventExitTransition:i,toastRef:a,eventHandlers:v}}Jh.loading=(e,t)=>Kh(e,Gh("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Jh.promise=function(e,t,r){let n,{pending:i,error:o,success:a}=t;i&&(n=Th(i)?Jh.loading(i,r):Jh.loading(i.render,{...r,...i}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,i)=>{if(null==t)return void Jh.dismiss(n);let o={type:e,...s,...r,data:i},a=Th(t)?{render:t}:t;return n?Jh.update(n,{...o,...a}):Jh(a.render,{...o,...a}),i},c=Ch(e)?e():e;return c.then((e=>l("success",a,e))).catch((e=>l("error",o,e))),c},Jh.success=Qh("success"),Jh.info=Qh("info"),Jh.error=Qh("error"),Jh.warning=Qh("warning"),Jh.warn=Jh.warning,Jh.dark=(e,t)=>Kh(e,Gh("default",{theme:"dark",...t})),Jh.dismiss=function(e){Wh(e)},Jh.clearWaitingQueue=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Mh.forEach((t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()}))},Jh.isActive=Vh,Jh.update=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=((e,t)=>{let{containerId:r}=t;var n;return null==(n=Mh.get(r||1))?void 0:n.toasts.get(e)})(e,t);if(r){let{props:n,content:i}=r,o={delay:100,...n,...t,toastId:t.toastId||e,updateId:Dh()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Kh(a,o)}},Jh.done=e=>{Jh.update(e,{progress:1})},Jh.onChange=function(e){return Fh.add(e),()=>{Fh.delete(e)}},Jh.play=e=>qh(!0,e),Jh.pause=e=>qh(!1,e);var em="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,tm=e=>{let{theme:t,type:r,isLoading:i,...o}=e;return n.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...o})};var rm={info:function(e){return n.createElement(tm,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return n.createElement(tm,{...e},n.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return n.createElement(tm,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return n.createElement(tm,{...e},n.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return n.createElement("div",{className:"Toastify__spinner"})}};function nm(e){let{theme:t,type:r,isLoading:i,icon:o}=e,a=null,s={theme:t,type:r};return!1===o||(Ch(o)?a=o({...s,isLoading:i}):(0,n.isValidElement)(o)?a=(0,n.cloneElement)(o,s):i?a=rm.spinner():(e=>e in rm)(r)&&(a=rm[r](s))),a}var im=e=>{let{isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:o,playToast:a}=Zh(e),{closeButton:s,children:l,autoClose:c,onClick:d,type:u,hideProgressBar:p,closeToast:h,transition:m,position:f,className:g,style:v,progressClassName:x,updateId:y,role:b,progress:w,rtl:k,toastId:j,deleteToast:S,isIn:E,isLoading:T,closeOnClick:C,theme:_,ariaLabel:P}=e,L=Sh("Toastify__toast",`Toastify__toast-theme--${_}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":C}),R=Ch(g)?g({rtl:k,position:f,type:u,defaultClassName:L}):Sh(L,g),A=nm(e),z=!!w||!c,O={closeToast:h,type:u,theme:_},N=null;return!1===s||(N=Ch(s)?s(O):(0,n.isValidElement)(s)?(0,n.cloneElement)(s,O):function(e){let{closeToast:t,theme:r,ariaLabel:i="close"}=e;return n.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(!0)},"aria-label":i},n.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(O)),n.createElement(m,{isIn:E,done:S,position:f,preventExitTransition:r,nodeRef:i,playToast:a},n.createElement("div",{id:j,tabIndex:0,onClick:d,"data-in":E,className:R,...o,style:v,ref:i,...E&&{role:b,"aria-label":P}},null!=A&&n.createElement("div",{className:Sh("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},A),zh(l,e,!t),N,!e.customProgressBar&&n.createElement(Oh,{...y&&!z?{key:`p-${y}`}:{},rtl:k,theme:_,delay:c,isRunning:t,isIn:E,closeToast:h,hide:p,type:u,className:x,controlledProgress:z,progress:w||0})))},om=function(e){return{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}},am=Rh(om("bounce",!0)),sm=(Rh(om("slide",!0)),Rh(om("zoom")),Rh(om("flip")),{position:"top-right",transition:am,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&"KeyT"===e.code});function lm(e){let t={...sm,...e},r=e.stacked,[i,o]=(0,n.useState)(!0),a=(0,n.useRef)(null),{getToastToRender:s,isToastActive:l,count:c}=function(e){var t;let{subscribe:r,getSnapshot:i,setProps:o}=(0,n.useRef)(Yh(e)).current;o(e);let a=null==(t=(0,n.useSyncExternalStore)(r,i,i))?void 0:t.slice();return{getToastToRender:function(t){if(!a)return[];let r=new Map;return e.newestOnTop&&a.reverse(),a.forEach((e=>{let{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)})),Array.from(r,(e=>t(e[0],e[1])))},isToastActive:Vh,count:null==a?void 0:a.length}}(t),{className:d,style:u,rtl:p,containerId:h,hotKeys:m}=t;function f(e){let t=Sh("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":p});return Ch(d)?d({position:e,rtl:p,defaultClassName:t}):Sh(t,_h(d))}function g(){r&&(o(!0),Jh.play())}return em((()=>{var e;if(r){let r=a.current.querySelectorAll('[data-in="true"]'),n=12,o=null==(e=t.position)?void 0:e.includes("top"),s=0,l=0;Array.from(r).reverse().forEach(((e,t)=>{let r=e;r.classList.add("Toastify__toast--stacked"),t>0&&(r.dataset.collapsed=`${i}`),r.dataset.pos||(r.dataset.pos=o?"top":"bot");let a=s*(i?.2:1)+(i?0:n*t);r.style.setProperty("--y",`${o?a:-1*a}px`),r.style.setProperty("--g",`${n}`),r.style.setProperty("--s",""+(1-(i?l:0))),s+=r.offsetHeight,l+=.025}))}}),[i,c,r]),(0,n.useEffect)((()=>{function e(e){var t;let r=a.current;m(e)&&(null==(t=r.querySelector('[tabIndex="0"]'))||t.focus(),o(!1),Jh.pause()),"Escape"===e.key&&(document.activeElement===r||null!=r&&r.contains(document.activeElement))&&(o(!0),Jh.play())}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[m]),n.createElement("section",{ref:a,className:"Toastify",id:h,onMouseEnter:()=>{r&&(o(!1),Jh.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},s(((e,t)=>{let i=t.length?{...u}:{...u,pointerEvents:"none"};return n.createElement("div",{tabIndex:-1,className:f(e),"data-stacked":r,style:i,key:`c-${e}`},t.map((e=>{let{content:t,props:i}=e;return n.createElement(im,{...i,stacked:r,collapseAll:g,isIn:l(i.toastId,i.containerId),key:`t-${i.key}`},t)})))})))}const cm=()=>{const[e,t]=(0,n.useState)(!1),[r,i]=(0,n.useState)(!1),o=Q();(0,n.useEffect)((()=>{const e=()=>{window.scrollY>50?t(!0):t(!1)};return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}),[]),(0,n.useEffect)((()=>(document.body.style.overflow=r?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[r]),(0,n.useEffect)((()=>{i(!1)}),[o]);const a=e=>o.pathname===e?"text-primary-400 font-medium":"text-gray-300 hover:text-primary-400",s=[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/services",label:"Services"},{path:"/projects",label:"Projects"},{path:"/blog",label:"Blog"},{path:"/contact",label:"Contact"}];return(0,rh.jsxs)(rh.Fragment,{children:[(0,rh.jsx)(Hn,{children:r&&(0,rh.jsx)(Ed.div,{className:"fixed inset-0 backdrop-blur-sm z-40 md:hidden",initial:"hidden",animate:"visible",exit:"hidden",variants:{hidden:{opacity:0},visible:{opacity:1}},onClick:()=>i(!1)})}),(0,rh.jsxs)(Ed.nav,{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 "+(e?"backdrop-blur-md shadow-sm":""),initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:100,damping:15},children:[(0,rh.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,rh.jsxs)("div",{className:"flex justify-between items-center py-4 md:justify-start md:space-x-10",children:[(0,rh.jsx)(Ed.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,rh.jsxs)(Pe,{to:"/",className:"flex items-center text-2xl font-bold text-white font-heading hoverable",children:["TECHVEDA",(0,rh.jsx)("span",{className:"text-primary-500",children:"."})]})}),(0,rh.jsx)("div",{className:"hidden md:flex items-center space-x-8",children:s.map((e=>(0,rh.jsx)(Ed.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,rh.jsx)(Pe,{to:e.path,className:`${a(e.path)} transition-colors duration-200 text-sm font-medium hoverable`,children:e.label})},e.path)))}),(0,rh.jsx)(Ed.button,{onClick:()=>{i(!r)},"aria-label":r?"Close menu":"Open menu",className:"md:hidden flex items-center hoverable z-50",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,rh.jsxs)("div",{className:"w-6 h-6 flex flex-col justify-between items-center relative",children:[(0,rh.jsx)(Ed.span,{className:"w-full h-0.5 bg-gray-100",animate:{rotate:r?45:0,y:r?10:0},transition:{duration:.3}}),(0,rh.jsx)(Ed.span,{className:"w-full h-0.5 bg-gray-100",animate:{opacity:r?0:1},transition:{duration:.3}}),(0,rh.jsx)(Ed.span,{className:"w-full h-0.5 bg-gray-100",animate:{rotate:r?-45:0,y:r?-10:0},transition:{duration:.3}})]})})]})}),(0,rh.jsx)(Hn,{children:r&&(0,rh.jsx)(Ed.div,{className:"md:hidden overflow-hidden z-50 backdrop-blur-md",initial:"hidden",animate:"visible",exit:"hidden",variants:{hidden:{opacity:0,height:0,transition:{duration:.3,ease:"easeInOut"}},visible:{opacity:1,height:"auto",transition:{duration:.3,ease:"easeInOut"}}},children:(0,rh.jsx)("div",{className:"px-4 pt-2 pb-6 space-y-6",children:(0,rh.jsx)("div",{className:"grid grid-cols-1 gap-y-6",children:s.map((e=>(0,rh.jsx)(Ed.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,rh.jsx)(Pe,{to:e.path,className:`${a(e.path)} text-lg font-medium block text-center py-2 hoverable`,onClick:()=>i(!1),children:e.label})},e.path)))})})})})]})]})},dm=()=>{const e=(new Date).getFullYear();return(0,rh.jsx)("footer",{className:"text-gray-300",children:(0,rh.jsxs)("div",{className:"container mx-auto py-12 px-4 sm:px-6",children:[(0,rh.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,rh.jsxs)("div",{className:"col-span-1 md:col-span-1",children:[(0,rh.jsxs)(Pe,{to:"/",className:"text-2xl font-bold text-white font-heading hoverable",children:["TECHVEDA",(0,rh.jsx)("span",{className:"text-primary-500",children:"."})]}),(0,rh.jsx)("p",{className:"mt-4 text-sm font-body",children:"Building innovative web applications and digital solutions that transform ideas into reality."}),(0,rh.jsxs)("div",{className:"mt-6 flex space-x-4",children:[(0,rh.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable","aria-label":"GitHub",children:(0,rh.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,rh.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z"})})}),(0,rh.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable","aria-label":"Twitter",children:(0,rh.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,rh.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.002 10.002 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"})})}),(0,rh.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable","aria-label":"LinkedIn",children:(0,rh.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,rh.jsx)("path",{d:"M19.996 0A4.004 4.004 0 0 1 24 4.004v15.992A4.004 4.004 0 0 1 19.996 24H4.004A4.004 4.004 0 0 1 0 19.996V4.004A4.004 4.004 0 0 1 4.004 0h15.992zM8.5 8.5H5.9v9.6h2.6V8.5zm.15-2.6A1.45 1.45 0 0 0 7.2 7.4c0 .8.65 1.45 1.45 1.45.8 0 1.45-.65 1.45-1.45 0-.8-.65-1.45-1.45-1.45zm10.35 5.7c0-2.25-1.75-3.8-3.85-3.8-1.2 0-2.55.55-3.15 1.55v-1.4h-2.6v9.6h2.6v-5.1c0-1.1.55-2.2 1.95-2.2 1.2 0 1.65 1.1 1.65 2.25v5.05h2.6V11.6h.8z"})})}),(0,rh.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable","aria-label":"Instagram",children:(0,rh.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,rh.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2c-2.714 0-3.055.013-4.123.06-1.064.05-1.791.218-2.428.465a4.896 4.896 0 00-1.77 1.153A4.902 4.902 0 002.525 5.45c-.247.637-.416 1.363-.465 2.428C2.013 8.945 2 9.286 2 12c0 2.714.013 3.055.06 4.123.05 1.064.218 1.791.465 2.428a4.91 4.91 0 001.153 1.77c.5.5 1.038.908 1.77 1.153.637.247 1.363.416 2.428.465 1.068.047 1.41.06 4.123.06 2.714 0 3.055-.013 4.123-.06 1.064-.05 1.791-.218 2.428-.465a4.895 4.895 0 001.77-1.153 4.902 4.902 0 001.153-1.77c.247-.637.416-1.363.465-2.428.047-1.068.06-1.41.06-4.123 0-2.714-.013-3.055-.06-4.123-.05-1.064-.218-1.791-.465-2.428a4.91 4.91 0 00-1.153-1.77c-.5-.5-1.038-.908-1.77-1.153-.637-.247-1.363-.416-2.428-.465C15.055 2.013 14.714 2 12 2zm0 1.8c2.67 0 2.985.01 4.04.057.975.045 1.505.208 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.136.353.3.883.344 1.857.047 1.056.057 1.371.057 4.041 0 2.67-.01 2.985-.057 4.04-.045.975-.208 1.505-.344 1.858-.182.467-.399.8-.748 1.15-.35.35-.683.566-1.15.748-.353.136-.883.3-1.857.344-1.056.047-1.371.057-4.041.057-2.67 0-2.985-.01-4.04-.057-.975-.045-1.505-.208-1.858-.344-.467-.182-.8-.399-1.15-.748-.35-.35-.566-.683-.748-1.15-.136-.353-.3-.883-.344-1.857-.047-1.056-.057-1.371-.057-4.041 0-2.67.01-2.985.057-4.04.045-.975.208-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.136.883-.3 1.857-.344 1.056-.047 1.371-.057 4.041-.057zm0 3.064a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.47a3.334 3.334 0 110-6.668 3.334 3.334 0 010 6.667zm6.538-8.674a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"})})})]})]}),(0,rh.jsxs)("div",{className:"col-span-1",children:[(0,rh.jsx)("h3",{className:"text-lg font-semibold text-white mb-4 font-heading",children:"Quick Links"}),(0,rh.jsxs)("ul",{className:"space-y-2 font-body",children:[(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Home"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/about",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"About"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Services"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/projects",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Projects"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/blog",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Blog"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/contact",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Contact"})})]})]}),(0,rh.jsxs)("div",{className:"col-span-1",children:[(0,rh.jsx)("h3",{className:"text-lg font-semibold text-white mb-4 font-heading",children:"Services"}),(0,rh.jsxs)("ul",{className:"space-y-2 font-body",children:[(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Web Development"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"UI/UX Design"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Mobile Development"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"E-commerce"})}),(0,rh.jsx)("li",{children:(0,rh.jsx)(Pe,{to:"/services",className:"text-gray-400 hover:text-primary-400 transition-colors hoverable",children:"Digital Marketing"})})]})]}),(0,rh.jsxs)("div",{className:"col-span-1",children:[(0,rh.jsx)("h3",{className:"text-lg font-semibold text-white mb-4 font-heading",children:"Contact Us"}),(0,rh.jsxs)("ul",{className:"space-y-3 font-body",children:[(0,rh.jsxs)("li",{className:"flex items-start",children:[(0,rh.jsxs)("svg",{className:"h-6 w-6 text-primary-400 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),(0,rh.jsx)("span",{children:"Bardoli, Gujarat, India"})]}),(0,rh.jsxs)("li",{className:"flex items-start",children:[(0,rh.jsx)("svg",{className:"h-6 w-6 text-primary-400 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),(0,rh.jsx)("span",{children:"info@techveda.com"})]}),(0,rh.jsxs)("li",{className:"flex items-start",children:[(0,rh.jsx)("svg",{className:"h-6 w-6 text-primary-400 mr-2 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),(0,rh.jsx)("span",{children:"+91 98765 43210"})]})]})]})]}),(0,rh.jsxs)("div",{className:"mt-10 pt-3 pb-3 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center",children:[(0,rh.jsxs)("p",{className:"text-sm text-gray-500 font-body",children:["\xa9 ",e," TECHVEDA. All rights reserved."]}),(0,rh.jsxs)("div",{className:"mt-4 md:mt-0 space-x-4",children:[(0,rh.jsx)("a",{href:"#",className:"text-xs text-gray-500 hover:text-primary-400 transition-colors font-body hoverable",children:"Privacy Policy"}),(0,rh.jsx)("a",{href:"#",className:"text-xs text-gray-500 hover:text-primary-400 transition-colors font-body hoverable",children:"Terms of Service"}),(0,rh.jsx)("a",{href:"#",className:"text-xs text-gray-500 hover:text-primary-400 transition-colors font-body hoverable",children:"Cookie Policy"})]})]})]})})},um=kn.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
`,pm=kn(Ed.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 99999;
`,hm=kn(Ed.div)`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(var(--color-primary-rgb), 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99998;
  mix-blend-mode: difference;
`,mm=()=>{const[e,t]=(0,n.useState)({x:0,y:0}),[r,i]=(0,n.useState)(!1),[o,a]=(0,n.useState)(!1),s=(0,n.useCallback)((e=>{t({x:e.clientX,y:e.clientY}),o||a(!0)}),[o]),l=(0,n.useCallback)((e=>{e.target.closest(".hoverable")&&i(!0)}),[]),c=(0,n.useCallback)((e=>{e.target.closest(".hoverable")&&i(!1)}),[]),d=(0,n.useCallback)((()=>{a(!1)}),[]),u=(0,n.useCallback)((()=>{a(!0)}),[]);(0,n.useEffect)((()=>{document.addEventListener("mousemove",s),document.addEventListener("mouseover",l),document.addEventListener("mouseout",c),document.addEventListener("mouseleave",d),document.addEventListener("mouseenter",u),document.documentElement.classList.add("custom-cursor");const e=document.createElement("style");return e.textContent="\n      .custom-cursor, .custom-cursor * {\n        cursor: none !important;\n      }\n    ",document.head.appendChild(e),()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseover",l),document.removeEventListener("mouseout",c),document.removeEventListener("mouseleave",d),document.removeEventListener("mouseenter",u),document.documentElement.classList.remove("custom-cursor"),document.head.removeChild(e)}}),[s,l,c,d,u]);const p={default:{x:e.x-4,y:e.y-4,opacity:o?1:0,transition:{type:"spring",mass:.1,stiffness:800,damping:20,opacity:{duration:.2}}}},h={default:{x:e.x-20,y:e.y-20,scale:r?1.5:1,opacity:o?r?.8:.5:0,transition:{type:"spring",mass:.3,stiffness:200,damping:20,scale:{type:"spring",mass:.3,stiffness:200,damping:20},opacity:{duration:.2}}}};return"undefined"!==typeof window&&("ontouchstart"in window||navigator.maxTouchPoints>0)?null:(0,rh.jsxs)(um,{children:[(0,rh.jsx)(pm,{variants:p,animate:"default"}),(0,rh.jsx)(hm,{variants:h,animate:"default"})]})},fm=Sn`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,gm=Sn`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,vm=kn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
`,xm=kn.div`
  position: relative;
  width: 50px;
  height: 50px;
`,ym=kn.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(66, 153, 225, 0.1);
  border-top-color: #4299e1;
  border-radius: 50%;
  animation: ${fm} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`,bm=kn(ym)`
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-width: 2px;
  animation-duration: 0.8s;
  animation-direction: reverse;
`,wm=kn.div`
  margin-top: 1.5rem;
  color: #4299e1;
  font-size: 1rem;
  font-weight: 500;
  animation: ${gm} 1.5s ease-in-out infinite;
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,km=()=>(0,rh.jsxs)(vm,{children:[(0,rh.jsxs)(xm,{children:[(0,rh.jsx)(ym,{}),(0,rh.jsx)(bm,{})]}),(0,rh.jsx)(wm,{children:"Loading..."})]}),jm=e=>{let{children:t}=e;const{isAuthenticated:r,loading:i}=oh(),o=Q();return(0,n.useEffect)((()=>{r()&&th()}),[r]),i?(0,rh.jsx)(km,{}):r()?t:(0,rh.jsx)(fe,{to:"/admin/login",state:{from:o},replace:!0})},Sm=()=>{const[e,t]=(0,n.useState)({x:0,y:0}),[r,i]=(0,n.useState)(!1),[o,a]=(0,n.useState)(!1);(0,n.useEffect)((()=>{if("complete"===document.readyState){const e=setTimeout((()=>{a(!0)}),1500);return()=>clearTimeout(e)}{const e=()=>{const e=setTimeout((()=>{a(!0)}),1500);return()=>clearTimeout(e)};return window.addEventListener("load",e),()=>window.removeEventListener("load",e)}}),[]);return(0,rh.jsxs)("section",{className:"relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden -mt-[36px]",onMouseMove:e=>{const{clientX:r,clientY:n}=e,{innerWidth:i,innerHeight:o}=window;t({x:r/i*2-1,y:n/o*2-1})},children:[(0,rh.jsx)("div",{className:"container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8",children:(0,rh.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",children:[(0,rh.jsxs)("div",{className:"text-center lg:text-left",children:[(0,rh.jsxs)("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-heading leading-tight mb-4",children:["We create ",(0,rh.jsx)("span",{className:"text-primary-500",children:"digital"})," experiences"]}),(0,rh.jsx)("h2",{className:"text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 font-body",children:"Techveda delivers innovative web applications and digital solutions that drive growth and enhance user experiences"}),(0,rh.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6 sm:mt-8",children:[(0,rh.jsxs)("a",{href:"/projects",className:"px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-500 hover:bg-primary-600 text-white text-sm sm:text-base font-medium rounded-lg transition-colors duration-300 flex items-center justify-center font-body",children:["See Our Work",(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 sm:h-5 sm:w-5 ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,rh.jsx)("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),(0,rh.jsx)("a",{href:"#contact",className:"px-4 sm:px-6 py-2.5 sm:py-3 border border-primary-500 text-primary-400 hover:bg-primary-500/10 text-sm sm:text-base font-medium rounded-lg transition-colors duration-300 flex items-center justify-center font-body",children:"Contact Us"})]})]}),(0,rh.jsx)("div",{className:"mt-8 sm:mt-12 lg:mt-0 relative",style:{transform:`perspective(1000px) rotateX(${-5*e.y}deg) rotateY(${5*e.x}deg)`,transition:"transform 0.1s ease-out"},children:(0,rh.jsxs)(Ed.div,{className:"relative rounded-2xl overflow-hidden aspect-video lg:aspect-square shadow-2xl",initial:{opacity:0,scale:.8},animate:{opacity:r&&o?1:0,scale:r&&o?1:.8,y:r&&o?0:20},transition:{duration:.8,ease:[.22,1,.36,1],delay:.2},children:[(0,rh.jsx)(Ed.div,{className:"absolute inset-0 bg-primary-500/20 z-10",initial:{opacity:0},animate:{opacity:r&&o?.2:0},transition:{duration:.5,delay:.5}}),(0,rh.jsx)(Ed.div,{className:"absolute inset-0 z-0",initial:{clipPath:"inset(100% 0% 0% 0%)"},animate:{clipPath:r&&o?"inset(0% 0% 0% 0%)":"inset(100% 0% 0% 0%)"},transition:{duration:.8,ease:[.22,1,.36,1],delay:.2},children:(0,rh.jsx)("img",{src:"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",alt:"Digital experience",className:"w-full h-full object-cover",onLoad:()=>{i(!0)}})}),(0,rh.jsx)(Ed.div,{className:"absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 z-30",initial:{opacity:0,x:-20,y:-20},animate:{opacity:r&&o?.7:0,x:r&&o?0:-20,y:r&&o?0:-20},transition:{duration:.6,delay:1},children:(0,rh.jsx)("div",{className:"absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"})}),(0,rh.jsx)(Ed.div,{className:"absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 z-30",initial:{opacity:0,x:20,y:20},animate:{opacity:r&&o?.7:0,x:r&&o?0:20,y:r&&o?0:20},transition:{duration:.6,delay:1},children:(0,rh.jsx)("div",{className:"absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-white/30 rounded-br-2xl"})})]})})]})}),(0,rh.jsxs)(Ed.div,{className:"absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 cursor-pointer hover:text-primary-500 transition-colors duration-300",initial:{opacity:0,y:-20},animate:{opacity:o?1:0,y:o?0:-20},transition:{delay:1.2,duration:.6},onClick:()=>{const e=document.getElementById("Projects");e&&e.scrollIntoView({behavior:"smooth"})},children:[(0,rh.jsx)("p",{className:"text-xs sm:text-sm mb-2 font-body",children:"Scroll Down"}),(0,rh.jsx)(Ed.svg,{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-6 sm:w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",animate:{y:[0,5,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})]})},Em=kn.section`
  padding: 6rem 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  id: "Projects";

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
  
     padding: 0 1.5rem 3rem;
  }
`,Tm=kn(Ed.h2)`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: ${e=>e.theme.spacing.md};
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    margin-bottom: ${e=>e.theme.spacing.sm};
  }
  
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

    @media (max-width: 480px) {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }
  }
`,Cm=kn(Ed.div)`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`,_m=kn(Ed.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2.2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1.8rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }
`,Pm=kn(Ed.div)`
  background: #0a0a0a;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(66, 153, 225, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  isolation: isolate;

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(66, 153, 225, 0.1);
    border-color: rgba(66, 153, 225, 0.2);
  }
`,Lm=kn.div`
  position: relative;
  overflow: hidden;
  height: 200px;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }

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

  ${Pm}:hover &::after {
    opacity: 1;
  }
`,Rm=kn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${Pm}:hover & {
    transform: scale(1.08);
  }
`,Am=kn.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

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
`,zm=kn.h3`
  color: linear-gradient(135deg, #4299e1, #38b2ac);
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  margin-bottom: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
    

  ${Pm}:hover & {
    color: #4299e1;
  }
`,Om=kn.p`
  color: #cbd5e0;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  margin-bottom: 1.75rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 5.1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    height: 4.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
    height: 4rem;
  }

  ${Pm}:hover & {
    color: #e2e8f0;
  }
`,Nm=kn.div`
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
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }
  
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
`,Dm=kn.span`
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  padding: 0.4rem 0.75rem;
  border-radius: 15px;
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  font-weight: 500;
  margin-right: 10px;

  @media (max-width: 768px) {
    padding: 0.35rem 0.6rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.5rem;
  }
`,Im=kn.div`
  display: flex;
  gap: 1.25rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }

  ${Pm}:hover & {
    opacity: 1;
  }
`,Mm=kn.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    margin-top: 2.5rem;
  }
`,$m=kn(Pe)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
  text-decoration: none;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  background: linear-gradient(90deg, #4299e1, #2563eb);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(66, 153, 225, 0.3);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.25rem;
  }

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
    width: clamp(20px, 2vw, 24px);
    height: clamp(20px, 2vw, 24px);
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,Fm=kn.span`
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
`,Bm=kn(Pe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.3rem;
  font-weight: 500;
  font-size: clamp(0.8rem, 1.1vw, 0.9rem);
  transition: background 0.2s ease;
  margin-left: auto;

  @media (max-width: 768px) {
    padding: 0.5rem 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.45rem 1rem;
  }

  &:hover {
    background: #2563eb;
  }

  svg {
    width: clamp(16px, 1.5vw, 20px);
    height: clamp(16px, 1.5vw, 20px);
  }
`,Um=kn.a`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.8rem, 1.1vw, 0.9rem);

  svg {
    width: clamp(24px, 2vw, 30px);
    height: clamp(24px, 2vw, 30px);
  }
  
  span {
    padding-left: 8px;
    
    @media (max-width: 480px) {
      padding-left: 6px;
    }
  }

  &:hover {
    color: #3b82f6;
  }
`,Vm={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},Wm={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:[.4,0,.2,1]}}},Hm=kn(Ed.p)`
  font-size: 1rem;
  max-width: 1200px;
  color: rgba(255, 255, 255, 0.7);
`,qm=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{(async()=>{try{const e=(await Wp.get("/api/projects")).data.sort(((e,t)=>new Date(t._id)-new Date(e._id))).slice(0,3);t(e),i(!1)}catch(e){console.error("Error fetching projects:",e),i(!1)}})()}),[]),(0,rh.jsx)(Em,{id:"Projects",children:(0,rh.jsxs)(Cm,{children:[(0,rh.jsxs)(Tm,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:["Latest ",(0,rh.jsx)(Fm,{children:"Projects"})]}),(0,rh.jsx)(Hm,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:"At Techveda, we deliver tailored solutions for businesses of all sizes. Explore our portfolio of successfully completed client projects that demonstrate our technical expertise and commitment to excellence."}),r?(0,rh.jsx)(km,{}):(0,rh.jsxs)(rh.Fragment,{children:[(0,rh.jsx)(_m,{as:Ed.div,variants:Vm,initial:"hidden",animate:"visible",children:e.map((e=>(0,rh.jsxs)(Pm,{variants:Wm,children:[(0,rh.jsx)(Lm,{children:(0,rh.jsx)(Rm,{src:e.mainimage,alt:e.title})}),(0,rh.jsxs)(Am,{children:[(0,rh.jsx)(zm,{children:e.title}),(0,rh.jsx)(Om,{children:e.shortDescription}),(0,rh.jsx)(Nm,{children:(0,rh.jsx)("div",{className:"scroll-track",children:[...e.technologies,...e.technologies].map(((e,t)=>(0,rh.jsx)(Dm,{children:e},t)))})}),(0,rh.jsxs)(Im,{children:[(0,rh.jsxs)(Um,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),(0,rh.jsx)("span",{children:"GitHub"})]}),(0,rh.jsxs)(Bm,{to:`/projects/${e._id}`,children:["View Details",(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})]})]},e._id)))}),(0,rh.jsx)(Mm,{children:(0,rh.jsxs)($m,{to:"/projects",children:["View More Projects",(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})})},Ym=kn.section`
  padding-top: 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }

  @media (max-width: 480px) {
  
     padding: 1.5rem 1.5rem 3rem;
  }
`,Xm=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.xl};
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${e=>e.theme.spacing.lg};
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`,Km=kn.div`
  @media (max-width: 992px) {
    order: 2;
  }
`,Gm=kn(Ed.h2)`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: ${e=>e.theme.spacing.md};
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    margin-bottom: ${e=>e.theme.spacing.sm};
  }
  
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

    @media (max-width: 480px) {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }
  }
`,Qm=kn.span`
  color: var(--color-primary);
  font-weight: 600;
`,Jm=kn(Ed.p)`
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  margin-bottom: ${e=>e.theme.spacing.md};
  line-height: 1.8;
  color: var(--color-gray);

  @media (max-width: 768px) {
    margin-bottom: ${e=>e.theme.spacing.sm};
  }
`,Zm=kn(Ed.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing.md};
  margin: ${e=>e.theme.spacing.lg} 0;
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: ${e=>e.theme.spacing.lg} auto;
  }

  @media (max-width: 768px) {
    gap: ${e=>e.theme.spacing.sm};
    margin: ${e=>e.theme.spacing.md} auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${e=>e.theme.spacing.xs};
  }
`,ef=kn.div`
  padding: ${e=>e.theme.spacing.md};
  background: hsla(0, 2.60%, 7.60%, 0.80);
  border: 1px solid rgba(66, 153, 225, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    padding: ${e=>e.theme.spacing.sm};
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(66, 153, 225, 0.1);
    border-color: rgba(66, 153, 225, 0.2);
  }
`,tf=kn.h3`
  font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 5px;
  color: #4299e1;

  @media (max-width: 768px) {
    margin-bottom: 3px;
  }
`,rf=kn.p`
  font-size: clamp(0.8rem, 1.2vw, 1rem);
  font-weight: 500;
`,nf=(kn.div`
  margin-top: ${e=>e.theme.spacing.lg};
`,kn.h3`
  font-size: 1.3rem;
  margin-bottom: ${e=>e.theme.spacing.sm};
  font-weight: 600;
`,kn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`,kn(Ed.span)`
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
`,kn(Ed.div)`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`),of=kn.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: ${e=>e.theme.shadows.medium};
  filter: brightness(0.9);

  @media (max-width: 768px) {
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`,af=kn(Ed.div)`
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

  @media (max-width: 768px) {
    bottom: -20px;
    padding: ${e=>e.theme.spacing.sm};
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    bottom: -15px;
    padding: ${e=>e.theme.spacing.xs};
    border-radius: 8px;
  }
`,sf=kn.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 700;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    margin-bottom: 3px;
  }
`,lf=kn.p`
  font-size: clamp(0.75rem, 1.1vw, 0.9rem);
  font-weight: 500;
`,cf=(kn.div`
  position: absolute;
  top: -200px;
  left: -200px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(66, 153, 225, 0.1);
  opacity: 0.05;
  z-index: -1;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: -150px;
    left: -150px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -100px;
  }
`,()=>(0,rh.jsx)(Ym,{id:"about",children:(0,rh.jsxs)(Xm,{children:[(0,rh.jsxs)(Km,{children:[(0,rh.jsxs)(Gm,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:["About ",(0,rh.jsx)(Qm,{children:"Techveda"})]}),(0,rh.jsx)(Jm,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:"Techveda is a dynamic duo of passionate developers dedicated to creating cutting-edge web applications and innovative digital solutions for businesses across various industries."}),(0,rh.jsx)(Jm,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.3},viewport:{once:!0},children:"Founded by Rahul Sharma and Priya Patel, our team combines frontend expertise with backend mastery to deliver complete solutions that are reliable, scalable, and user-friendly."}),(0,rh.jsxs)(Zm,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:[(0,rh.jsxs)(ef,{children:[(0,rh.jsx)(tf,{children:"4+"}),(0,rh.jsx)(rf,{children:"Years Experience"})]}),(0,rh.jsxs)(ef,{children:[(0,rh.jsx)(tf,{children:"35+"}),(0,rh.jsx)(rf,{children:"Projects Completed"})]}),(0,rh.jsxs)(ef,{children:[(0,rh.jsx)(tf,{children:"15+"}),(0,rh.jsx)(rf,{children:"Happy Clients"})]}),(0,rh.jsxs)(ef,{children:[(0,rh.jsx)(tf,{children:"5+"}),(0,rh.jsx)(rf,{children:"Tech Stacks"})]})]})]}),(0,rh.jsxs)(nf,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[(0,rh.jsx)(of,{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",alt:"Techveda Team"}),(0,rh.jsxs)(af,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:[(0,rh.jsx)(sf,{children:"4+"}),(0,rh.jsx)(lf,{children:"Years of Excellence"})]})]})]})})),df=Wp.create({baseURL:"http://localhost:5001",headers:{"Content-Type":"application/json"}});df.interceptors.request.use((e=>{const t=localStorage.getItem("admin_token");if(t)e.headers.Authorization=`Bearer ${t}`,console.log("Adding token to request:",`Bearer ${t.substring(0,10)}...`);else{const t=sessionStorage.getItem("admin_token");t?(e.headers.Authorization=`Bearer ${t}`,console.log("Using session token for request")):console.warn("No auth token found in storage")}return console.log("Making request to:",e.baseURL+e.url),console.log("Request method:",e.method.toUpperCase()),e}),(e=>(console.error("Request error:",e),Promise.reject(e)))),df.interceptors.response.use((e=>(console.log("Response received:",e.data),e)),(e=>{var t,r,n,i,o,a,s,l;return console.error("Response error:",{message:e.message,status:null===(t=e.response)||void 0===t?void 0:t.status,statusText:null===(r=e.response)||void 0===r?void 0:r.statusText,data:null===(n=e.response)||void 0===n?void 0:n.data,config:{url:null===(i=e.config)||void 0===i?void 0:i.url,method:null===(o=e.config)||void 0===o?void 0:o.method,baseURL:null===(a=e.config)||void 0===a?void 0:a.baseURL,headers:null===(s=e.config)||void 0===s?void 0:s.headers}}),401===(null===(l=e.response)||void 0===l?void 0:l.status)&&(localStorage.removeItem("admin_token"),window.location.href="/admin/login"),Promise.reject(e)}));const uf=()=>df.get("/api/technologies"),pf=df,hf=kn(Ed.section)`
  padding: 5rem 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`,mf=kn.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`,ff=kn.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`,gf=kn(Ed.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  position: relative;

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
  }

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

    @media (max-width: 480px) {
      width: 60px;
      height: 3px;
    }
  }
`,vf=kn(Ed.p)`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  color: var(--color-text-light);
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`,xf=kn(Ed.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`,yf=kn(Ed.button)`
  padding: 0.75rem 2rem;
  background: ${e=>e.active?"rgba(66, 153, 225, 0.2)":"rgba(0, 0, 0, 0.8)"};
  color: ${e=>e.active?"#4299e1":"#cbd5e0"};
  border: 1px solid ${e=>e.active?"rgba(66, 153, 225, 0.3)":"rgba(66, 153, 225, 0.1)"};
  border-radius: 30px;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.2rem;
  }

  &:hover {
    background: rgba(66, 153, 225, 0.2);
    color: #4299e1;
    transform: translateY(-3px);
  }
`,bf=kn.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
  position: relative;
  display: flex;
  justify-content: ${e=>e.shouldScroll?"flex-start":"start"};
`,wf=kn.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  justify-content: ${e=>e.shouldScroll?"flex-start":"start"};
  animation: ${e=>e.shouldScroll?"scroll 20s linear infinite":"none"};
  width: fit-content;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`,kf=kn(Ed.div)`
  flex: 0 0 auto;
  width: clamp(120px, 15vw, 160px);
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: clamp(100px, 12vw, 120px);
  }

  @media (max-width: 480px) {
    width: clamp(80px, 10vw, 100px);
  }
`,jf=kn(Ed.img)`
  width: 60%;
  height: auto;
  margin-bottom: 0.75rem;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    width: 45%;
    margin-bottom: 0.4rem;
  }
`,Sf=kn(Ed.h4)`
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  font-weight: 500;
  text-align: center;
  color: rgb(255, 255, 255);

  @media (max-width: 768px) {
    font-size: clamp(0.6rem, 1.2vw, 0.8rem);
  }
`,Ef=()=>{const[e,t]=(0,n.useState)("frontend"),[r,i]=(0,n.useState)({frontend:[],backend:[],database:[],design:[],devops:[]}),[o,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{a(!0),l(null);const e=(await uf()).data.technologies.filter((e=>e.isSelected)),t={frontend:[],backend:[],database:[],design:[],devops:[]};e.forEach((e=>{t[e.category]&&t[e.category].push({name:e.name,logo:e.logo})})),i(t)}catch(e){l("Failed to load technologies. Please try again later.")}finally{a(!1)}})()}),[]),(0,rh.jsx)(hf,{id:"technologies",children:(0,rh.jsxs)(mf,{children:[(0,rh.jsxs)(ff,{children:[(0,rh.jsx)(gf,{children:"Technologies & Platforms"}),(0,rh.jsx)(vf,{children:"At Techveda, we leverage cutting-edge technologies to build scalable, efficient, and innovative solutions for our clients."})]}),(0,rh.jsx)(xf,{children:[{id:"frontend",label:"Frontend"},{id:"backend",label:"Backend"},{id:"database",label:"Database"},{id:"design",label:"Design"},{id:"devops",label:"DevOps"}].map((r=>(0,rh.jsx)(yf,{active:e===r.id,onClick:()=>t(r.id),children:r.label},r.id)))}),o?(0,rh.jsx)("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading technologies..."}):s?(0,rh.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"var(--color-error)"},children:s}):(0,rh.jsx)(Hn,{mode:"wait",children:(0,rh.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"fitcontent"},children:(0,rh.jsx)(bf,{children:(0,rh.jsx)(wf,{shouldScroll:r[e].length>4,children:[...r[e],...r[e].length>4?r[e]:[]].map(((e,t)=>(0,rh.jsxs)(kf,{children:[(0,rh.jsx)(jf,{src:e.logo,alt:e.name}),(0,rh.jsx)(Sf,{children:e.name})]},`${e.name}-${t}`)))})})})})]})})};function Tf(){!pd.current&&hd();const[e]=(0,n.useState)(ud.current);return e}const Cf=new WeakMap;let _f;function Pf(e){let{target:t,contentRect:r,borderBoxSize:n}=e;var i;null===(i=Cf.get(t))||void 0===i||i.forEach((e=>{e({target:t,contentSize:r,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:r}=t[0];return{width:e,height:r}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(t,n)}})}))}function Lf(e){e.forEach(Pf)}function Rf(e,t){_f||"undefined"!==typeof ResizeObserver&&(_f=new ResizeObserver(Lf));const r=function(e,t,r){var n;if("string"===typeof e){let i=document;t&&(Vn(Boolean(t.current),"Scope provided, but no element detected."),i=t.current),r?(null!==(n=r[e])&&void 0!==n||(r[e]=i.querySelectorAll(e)),e=r[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return r.forEach((e=>{let r=Cf.get(e);r||(r=new Set,Cf.set(e,r)),r.add(t),null===_f||void 0===_f||_f.observe(e)})),()=>{r.forEach((e=>{const r=Cf.get(e);null===r||void 0===r||r.delete(t),(null===r||void 0===r?void 0:r.size)||null===_f||void 0===_f||_f.unobserve(e)}))}}const Af=new Set;let zf;function Of(e){return Af.add(e),zf||(zf=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Af.forEach((e=>e(t)))},window.addEventListener("resize",zf)),()=>{Af.delete(e),!Af.size&&zf&&(zf=void 0)}}const Nf={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Df(e,t,r,n){const i=r[t],{length:o,position:a}=Nf[t],s=i.current,l=r.time;i.current=e["scroll"+a],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Ba(0,i.scrollLength,i.current);const c=n-l;i.velocity=c>50?0:Ya(i.current-s,c)}const If={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Mf={start:0,center:.5,end:1};function $f(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=0;if(void 0!==Mf[e]&&(e=Mf[e]),"string"===typeof e){const t=parseFloat(e);e.endsWith("px")?n=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?n=t/100*document.documentElement.clientWidth:e.endsWith("vh")?n=t/100*document.documentElement.clientHeight:e=t}return"number"===typeof e&&(n=t*e),r+n}const Ff=[0,0];function Bf(e,t,r,n){let i=Array.isArray(e)?e:Ff,o=0,a=0;return"number"===typeof e?i=[e,e]:"string"===typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,Mf[e]?e:"0"]),o=$f(i[0],r,n),a=$f(i[1],t),o-a}const Uf={x:0,y:0};function Vf(e,t,r){let{offset:n=If.All}=r;const{target:i=e,axis:o="y"}=r,a="y"===o?"height":"width",s=i!==e?function(e,t){const r={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if("svg"===n.tagName){const e=n.getBoundingClientRect();n=n.parentElement;const t=n.getBoundingClientRect();r.x+=e.left-t.left,r.y+=e.top-t.top}else{if(!(n instanceof SVGGraphicsElement))break;{const{x:e,y:t}=n.getBBox();r.x+=e,r.y+=t;let i=null,o=n.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=n.parentNode;n=i}}return r}(i,e):Uf,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(i),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const u=n.length;for(let p=0;p<u;p++){const e=Bf(n[p],c[a],l[a],s[o]);d||e===t[o].interpolatorOffsets[p]||(d=!0),t[o].offset[p]=e}d&&(t[o].interpolate=Wa(t[o].offset,Ha(n)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function Wf(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2?arguments[2]:void 0;if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}(e,n.target,r),update:t=>{!function(e,t,r){Df(e,"x",t,r),Df(e,"y",t,r),t.time=r}(e,r,t),(n.offset||n.target)&&Vf(e,r,n)},notify:()=>t(r)}}const Hf=new WeakMap,qf=new WeakMap,Yf=new WeakMap,Xf=e=>e===document.documentElement?window:e;function Kf(e){let{container:t=document.documentElement,...r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Yf.get(t);n||(n=new Set,Yf.set(t,n));const i=Wf(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},r);if(n.add(i),!Hf.has(t)){const e=()=>{for(const e of n)e.measure()},r=()=>{for(const e of n)e.update(zn.timestamp)},i=()=>{for(const e of n)e.notify()},o=()=>{Rn.read(e,!1,!0),Rn.read(r,!1,!0),Rn.update(i,!1,!0)};Hf.set(t,o);const a=Xf(t);window.addEventListener("resize",o,{passive:!0}),t!==document.documentElement&&qf.set(t,function(e,t){return"function"===typeof e?Of(e):Rf(e,t)}(t,o)),a.addEventListener("scroll",o,{passive:!0})}const o=Hf.get(t);return Rn.read(o,!1,!0),()=>{var e;An(o);const r=Yf.get(t);if(!r)return;if(r.delete(i),r.size)return;const n=Hf.get(t);Hf.delete(t),n&&(Xf(t).removeEventListener("scroll",n),null===(e=qf.get(t))||void 0===e||e(),window.removeEventListener("resize",n))}}function Gf(e,t){Un(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const Qf=()=>({scrollX:Ns(0),scrollY:Ns(0),scrollXProgress:Ns(0),scrollYProgress:Ns(0)});const Jf=e=>(e=>e&&"object"===typeof e&&e.mix)(e)?e.mix:void 0;function Zf(e){const t=Dn((()=>Ns(e))),{isStatic:r}=(0,n.useContext)(qn);if(r){const[,r]=(0,n.useState)(e);(0,n.useEffect)((()=>t.on("change",r)),[])}return t}function eg(e,t){const r=Zf(t()),n=()=>r.set(t());return n(),Tn((()=>{const t=()=>Rn.update(n,!1,!0),r=e.map((e=>e.on("change",t)));return()=>{r.forEach((e=>e())),An(n)}})),r}function tg(e,t,r,n){if("function"===typeof e)return function(e){zs.current=[],e();const t=eg(zs.current,e);return zs.current=void 0,t}(e);const i="function"===typeof t?t:function(){const e=!Array.isArray(arguments.length<=0?void 0:arguments[0]),t=e?0:-1,r=0+t<0||arguments.length<=0+t?void 0:arguments[0+t],n=2+t<0||arguments.length<=2+t?void 0:arguments[2+t],i=3+t<0||arguments.length<=3+t?void 0:arguments[3+t],o=Wa(1+t<0||arguments.length<=1+t?void 0:arguments[1+t],n,{mixer:Jf(n[0]),...i});return e?o(r):o}(t,r,n);return Array.isArray(e)?rg(e,i):rg([e],(e=>{let[t]=e;return i(t)}))}function rg(e,t){const r=Dn((()=>[]));return eg(e,(()=>{r.length=0;const n=e.length;for(let t=0;t<n;t++)r[t]=e[t].get();return t(r)}))}const ng=()=>(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,rh.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),ig=()=>(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),og=()=>(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,rh.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),ag=()=>(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),sg=()=>(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,rh.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),(0,rh.jsx)("circle",{cx:"4",cy:"4",r:"2"})]}),lg=()=>(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})}),cg=()=>(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,rh.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),(0,rh.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),dg=kn.span`
  color: var(--color-primary);
  font-weight: 4000;
`,ug=kn(Ed.section)`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`,pg=kn.div`
  max-width: 1200px;
  margin: 0 auto;
`,hg=kn.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,mg=kn(Ed.div)`
  display: flex;
  flex-direction: column;
`,fg=kn(Ed.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
`,gg=kn(Ed.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: var(--color-text-light);
`,vg=kn(Ed.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
`,xg=kn.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 1rem;
    color: var(--color-text-light);
  }
`,yg=kn(Ed.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`,bg=kn(Ed.a)`
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
`,wg=kn(Ed.form)`
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2.5rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,kg=kn(Ed.h3)`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`,jg=kn(Ed.div)`
  margin-bottom: 1.5rem;
`,Sg=kn.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`,Eg=kn.label`
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-light);
`,Tg=kn(Ed.input)`
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
`,Cg=kn(Ed.textarea)`
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
`,_g=kn(Ed.button)`
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
`,Pg=kn(Ed.div)`
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-weight: 500;
  background-color: ${e=>e.success?"rgba(46, 213, 115, 0.15)":`rgba(${e.theme.colors.primary.replace("#","")}, 0.15)`};
  color: ${e=>e.success?"#2ed573":e.theme.colors.primary};
  border: 1px solid ${e=>e.success?"rgba(46, 213, 115, 0.3)":`rgba(${e.theme.colors.primary.replace("#","")}, 0.3)`};
`,Lg={initial:{opacity:0,y:50},animate:{opacity:1,y:0,transition:{duration:.6,ease:[.23,1,.32,1],when:"beforeChildren",staggerChildren:.1}},exit:{opacity:0,y:30,transition:{duration:.4,ease:[.43,.13,.23,.96]}}},Rg={initial:{opacity:0,x:-50},animate:{opacity:1,x:0,transition:{type:"spring",mass:.8,damping:20,stiffness:100}}},Ag={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.6,ease:[.23,1,.32,1]}}},zg={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.6,ease:[.23,1,.32,1],delay:.2}}},Og={initial:{opacity:0,x:-20},animate:e=>({opacity:1,x:0,transition:{type:"spring",mass:.6,damping:15,stiffness:100,delay:.3+.1*e}}),hover:{x:5,transition:{duration:.2,ease:"easeOut"}}},Ng={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,ease:[.23,1,.32,1],delay:.6,when:"beforeChildren",staggerChildren:.1}}},Dg={initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,transition:{type:"spring",stiffness:300,damping:15}},hover:{scale:1.1,backgroundColor:"var(--color-primary)",transition:{duration:.2,ease:"easeOut"}},tap:{scale:.9}},Ig={initial:{opacity:0,y:50},animate:{opacity:1,y:0,transition:{type:"spring",mass:.8,damping:20,stiffness:100,delay:.2,when:"beforeChildren",staggerChildren:.1}}},Mg={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,ease:[.23,1,.32,1]}}},$g={initial:{opacity:0,y:20},animate:e=>({opacity:1,y:0,transition:{type:"spring",mass:.6,damping:15,stiffness:100,delay:.1+.1*e}})},Fg={initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.4,ease:[.23,1,.32,1]}},focus:{boxShadow:"0 0 0 3px rgba(var(--color-primary-rgb), 0.3)",borderColor:"var(--color-primary)",transition:{duration:.2,ease:"easeOut"}}},Bg={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,ease:[.23,1,.32,1],delay:.5}},hover:{scale:1.05,backgroundColor:"var(--color-secondary)",transition:{duration:.2,ease:"easeOut"}},tap:{scale:.95}},Ug={initial:{opacity:0,y:-20,height:0,padding:0},animate:{opacity:1,y:0,height:"auto",padding:"1rem",transition:{duration:.4,ease:[.23,1,.32,1]}},exit:{opacity:0,y:-20,height:0,padding:0,transition:{duration:.3,ease:[.43,.13,.23,.96]}}},Vg=()=>{const[e,t]=(0,n.useState)({name:"",email:"",subject:"",message:""}),[r,i]=(0,n.useState)({submitted:!1,success:!1,message:""}),[o,a]=(0,n.useState)(!1),s=Tf(),{scrollYProgress:l}=function(){let{container:e,target:t,layoutEffect:r=!0,...i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=Dn(Qf);return(r?Tn:n.useEffect)((()=>(Gf("target",t),Gf("container",e),Kf((e=>{let{x:t,y:r}=e;o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(r.current),o.scrollYProgress.set(r.progress)}),{...i,container:(null===e||void 0===e?void 0:e.current)||void 0,target:(null===t||void 0===t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(i.offset)]),o}(),c=(tg(l,[0,.5],[.3,.5]),tg(l,[0,.5],[1,1.2]),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{isStatic:r}=(0,n.useContext)(qn),i=(0,n.useRef)(null),o=Zf(yi(e)?e.get():e),a=()=>{i.current&&i.current.stop()};(0,n.useInsertionEffect)((()=>o.attach(((e,n)=>{if(r)return n(e);if(a(),i.current=ss({keyframes:[o.get(),e],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:n}),!zn.isProcessing){const e=performance.now()-zn.timestamp;e<30&&(i.current.time=qo(e))}return o.get()}),a)),[JSON.stringify(t)]),Tn((()=>{if(yi(e))return e.on("change",(e=>o.set(parseFloat(e))))}),[o])}(l,{stiffness:100,damping:30,restDelta:.001}),e=>{const{name:r,value:n}=e.target;t((e=>({...e,[r]:n})))});return(0,rh.jsx)(ug,{variants:s?{}:Lg,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.25},exit:"exit",id:"contact",children:(0,rh.jsx)(pg,{children:(0,rh.jsxs)(hg,{children:[(0,rh.jsxs)(mg,{variants:s?{}:Rg,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.3},children:[(0,rh.jsxs)(fg,{variants:s?{}:Ag,initial:"initial",whileInView:"animate",viewport:{once:!0},children:["Get In ",(0,rh.jsx)(dg,{children:"Touch"})]}),(0,rh.jsx)(gg,{variants:s?{}:zg,initial:"initial",whileInView:"animate",viewport:{once:!0},children:"Have a project in mind? Looking to partner or work with us? We'd love to hear from you. Reach out and let's create something amazing together."}),(0,rh.jsxs)(vg,{variants:s?{}:Og,initial:"initial",whileInView:"animate",whileHover:"hover",viewport:{once:!0},custom:0,children:[(0,rh.jsx)(ng,{}),(0,rh.jsxs)(xg,{children:[(0,rh.jsx)("h4",{children:"Email"}),(0,rh.jsx)("p",{children:"info@techveda.com"})]})]}),(0,rh.jsxs)(vg,{variants:s?{}:Og,initial:"initial",whileInView:"animate",whileHover:"hover",viewport:{once:!0},custom:1,children:[(0,rh.jsx)(ig,{}),(0,rh.jsxs)(xg,{children:[(0,rh.jsx)("h4",{children:"Phone"}),(0,rh.jsx)("p",{children:"+91 98765 43210"})]})]}),(0,rh.jsxs)(vg,{variants:s?{}:Og,initial:"initial",whileInView:"animate",whileHover:"hover",viewport:{once:!0},custom:2,children:[(0,rh.jsx)(og,{}),(0,rh.jsxs)(xg,{children:[(0,rh.jsx)("h4",{children:"Location"}),(0,rh.jsx)("p",{children:"Surat, Gujarat, India"})]})]}),(0,rh.jsxs)(yg,{variants:s?{}:Ng,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[(0,rh.jsx)(bg,{href:"https://github.com/techveda",target:"_blank",rel:"noopener noreferrer",variants:s?{}:Dg,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:(0,rh.jsx)(ag,{})}),(0,rh.jsx)(bg,{href:"https://linkedin.com/company/techveda",target:"_blank",rel:"noopener noreferrer",variants:s?{}:Dg,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:(0,rh.jsx)(sg,{})}),(0,rh.jsx)(bg,{href:"https://twitter.com/techveda",target:"_blank",rel:"noopener noreferrer",variants:s?{}:Dg,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:(0,rh.jsx)(lg,{})}),(0,rh.jsx)(bg,{href:"https://instagram.com/techveda",target:"_blank",rel:"noopener noreferrer",variants:s?{}:Dg,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:(0,rh.jsx)(cg,{})})]})]}),(0,rh.jsxs)(wg,{onSubmit:async e=>{e.preventDefault(),a(!0);try{const r=e.target,n=new FormData(r);n.append("access_key","81585f28-8058-47d5-a317-976e787c77da");const o=await fetch("https://api.web3forms.com/submit",{method:"POST",body:n}),a=await o.json();a.success?(i({submitted:!0,success:!0,message:"Your message has been sent successfully! We will get back to you soon."}),t({name:"",email:"",subject:"",message:""}),setTimeout((()=>{i({submitted:!1,success:!1,message:""})}),5e3)):i({submitted:!0,success:!1,message:a.message||"Something went wrong. Please try again."})}catch(r){i({submitted:!0,success:!1,message:"Network error. Please check your connection and try again."})}finally{a(!1)}},variants:s?{}:Ig,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.3},children:[(0,rh.jsx)(kg,{variants:s?{}:Mg,initial:"initial",animate:"animate",children:"Send us a message"}),(0,rh.jsx)(Hn,{mode:"wait",children:r.submitted&&(0,rh.jsx)(Pg,{success:r.success,variants:s?{}:Ug,initial:"initial",animate:"animate",exit:"exit",layout:!0,children:r.message})}),(0,rh.jsxs)(Sg,{children:[(0,rh.jsxs)(jg,{variants:s?{}:$g,initial:"initial",animate:"animate",custom:0,children:[(0,rh.jsx)(Eg,{children:"Your Name"}),(0,rh.jsx)(Tg,{type:"text",name:"name",value:e.name,onChange:c,required:!0,variants:s?{}:Fg,initial:"initial",animate:"animate",whileFocus:"focus"})]}),(0,rh.jsxs)(jg,{variants:s?{}:$g,initial:"initial",animate:"animate",custom:1,children:[(0,rh.jsx)(Eg,{children:"Your Email"}),(0,rh.jsx)(Tg,{type:"email",name:"email",value:e.email,onChange:c,required:!0,variants:s?{}:Fg,initial:"initial",animate:"animate",whileFocus:"focus"})]})]}),(0,rh.jsxs)(jg,{variants:s?{}:$g,initial:"initial",animate:"animate",custom:2,children:[(0,rh.jsx)(Eg,{children:"Subject"}),(0,rh.jsx)(Tg,{type:"text",name:"subject",value:e.subject,onChange:c,required:!0,variants:s?{}:Fg,initial:"initial",animate:"animate",whileFocus:"focus"})]}),(0,rh.jsxs)(jg,{variants:s?{}:$g,initial:"initial",animate:"animate",custom:3,children:[(0,rh.jsx)(Eg,{children:"Your Message"}),(0,rh.jsx)(Cg,{name:"message",value:e.message,onChange:c,required:!0,variants:s?{}:Fg,initial:"initial",animate:"animate",whileFocus:"focus"})]}),(0,rh.jsxs)(_g,{type:"submit",disabled:o,variants:s?{}:Bg,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",children:[o?"Sending...":"Send Message",(0,rh.jsx)(Ed.svg,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",initial:{x:0},animate:o?{rotate:360}:{x:0},transition:o?{duration:1,repeat:1/0,ease:"linear"}:{},whileHover:{x:5},children:o?(0,rh.jsx)("path",{d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}):(0,rh.jsx)("path",{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"})})]})]})]})})})},Wg=()=>(0,rh.jsxs)(Ed.div,{className:"relative overflow-hidden",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},style:{background:"linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",borderRadius:"24px"},children:[(0,rh.jsxs)("div",{className:"absolute inset-0",children:[(0,rh.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),(0,rh.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"}),(0,rh.jsx)("div",{className:"absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"}),(0,rh.jsx)("div",{className:"absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"})]}),(0,rh.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(66,153,225,0.1),_transparent_50%)]"}),(0,rh.jsx)("div",{className:"absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"}),(0,rh.jsx)("div",{className:"absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"}),(0,rh.jsx)(Ed.div,{className:"absolute inset-0 z-0 opacity-[0.15]",animate:{backgroundPosition:["0% 0%","100% 100%"]},transition:{duration:20,repeat:1/0,repeatType:"reverse"},style:{backgroundImage:"radial-gradient(circle at center,rgb(27, 62, 90) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),(0,rh.jsx)("div",{className:"relative z-10 px-8 py-16 max-w-4xl mx-auto",children:(0,rh.jsxs)(Ed.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.5},className:"text-center space-y-6",children:[(0,rh.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold text-white",children:["Ready to Start Your"," ",(0,rh.jsx)("span",{className:"bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent",children:"Project"}),"?"]}),(0,rh.jsx)("p",{className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"Let's collaborate to bring your vision to life with custom solutions designed specifically to meet your unique needs."}),(0,rh.jsx)(Ed.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:(0,rh.jsx)(Pe,{to:"/contact",className:"inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)] border border-blue-500/20 hover:border-blue-400",children:"Let's Work Together"})})]})})]}),Hg=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem;
  }
`,qg=kn.div`
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
`,Yg=kn.div`
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
`,Xg=kn.div`
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
`,Kg=kn(Ed.div)`
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

  ${Xg} {
    transform: translateY(-5px) scale(1.1) ;
    border-color: #2563eb;
    box-shadow: 0 0 30px rgba(37, 99, 235, 0.0);
  }
}

`,Gg=kn.h3`
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
`,Qg=kn.p`
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
`,Jg=kn.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,Zg=kn.li`
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
`,ev=kn(Pe)`
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
`,tv=(kn.div`
  color: #ef4444;
  text-align: center;
  padding: 1rem;
  font-size: 1.1rem;
`,kn.span`
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
`),rv=[{_id:"1",title:"Frontend Development",description:"Creating responsive and performant user interfaces using modern frameworks like React, Next.js and Vue.",icon:"\ud83d\udcbb",features:["Responsive Web Design","Interactive UI/UX"],slug:"frontend-development"},{_id:"2",title:"Backend Development",description:"Building robust, scalable server-side applications and APIs with Node.js, Express, and MongoDB.",icon:"\u2699\ufe0f",features:["RESTful API Development","Database Design"],slug:"backend-development"},{_id:"3",title:"SEO Optimization",description:"Improving your website's visibility in search results to drive more organic traffic.",icon:"\ud83d\udd0d",features:["Technical SEO Audits","On-page Optimization"],slug:"seo-optimization"},{_id:"4",title:"Performance Optimization",description:"Enhancing the speed and performance of your web applications for better user experience.",icon:"\u26a1",features:["Core Web Vitals Optimization","Lighthouse Score Improvement"],slug:"performance-optimization"}],nv=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(!0),[o,a]=(0,n.useState)(null);if((0,n.useEffect)((()=>{(async()=>{try{i(!0),a(null);const e=await pf.get("/api/services");if(!e.data.success)throw new Error(e.data.message||"Failed to fetch services");t(e.data.data||[])}catch(e){console.error("Error fetching services:",e),a(e.message||"Failed to load services")}finally{i(!1)}})()}),[]),r)return(0,rh.jsx)(Hg,{children:(0,rh.jsx)(km,{})});if(o)return(0,rh.jsxs)(Hg,{children:[(0,rh.jsxs)(qg,{children:[(0,rh.jsxs)("h1",{children:["What I ",(0,rh.jsx)(tv,{children:"Offer"})]}),(0,rh.jsx)("p",{children:"Explore our comprehensive range of services designed to meet your business needs"})]}),(0,rh.jsx)(Yg,{children:rv.map(((e,t)=>(0,rh.jsxs)(Kg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:[(0,rh.jsx)(Xg,{children:(0,rh.jsx)("span",{children:e.icon})}),(0,rh.jsx)(Gg,{children:e.title}),(0,rh.jsx)(Qg,{children:e.description}),e.features&&(0,rh.jsx)(Jg,{children:e.features.map(((e,t)=>(0,rh.jsx)(Zg,{children:e},t)))}),(0,rh.jsxs)(ev,{to:`/services/${e.slug}`,state:{title:e.title,description:e.description,slug:e.slug,icon:e.icon,features:e.features},children:[(0,rh.jsx)("span",{children:"Learn More"}),(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M5 12h14"}),(0,rh.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]},e._id)))}),(0,rh.jsx)(Wg,{})]});const s=e.length>0?e:rv;return(0,rh.jsxs)(Hg,{children:[(0,rh.jsxs)(qg,{children:[(0,rh.jsxs)("h1",{children:["What I ",(0,rh.jsx)(tv,{children:"Offer"})]}),(0,rh.jsx)("p",{children:"Explore our comprehensive range of services designed to meet your business needs"})]}),(0,rh.jsx)(Yg,{children:s.map(((e,t)=>(0,rh.jsxs)(Kg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:[(0,rh.jsx)(Xg,{children:e.icon&&(e.icon.startsWith("http")?(0,rh.jsx)("img",{src:e.icon,alt:e.title}):(0,rh.jsx)("span",{children:e.icon}))}),(0,rh.jsx)(Gg,{children:e.title}),(0,rh.jsx)(Qg,{children:e.description}),e.features&&(0,rh.jsx)(Jg,{children:e.features.map(((e,t)=>(0,rh.jsx)(Zg,{children:e},t)))}),(0,rh.jsxs)(ev,{to:`/services/${e.slug}`,state:{title:e.title,description:e.description,slug:e.slug,icon:e.icon,features:e.features},children:[(0,rh.jsx)("span",{children:"Learn More"}),(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M5 12h14"}),(0,rh.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]},e._id)))}),(0,rh.jsx)(Wg,{})]})},iv={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.3}}},ov=()=>(n.useEffect((()=>{"scrollBehavior"in document.documentElement.style?window.scrollTo({top:0,behavior:"auto"}):window.scrollTo(0,0)}),[]),(0,rh.jsxs)(Ed.div,{initial:"initial",animate:"animate",exit:"exit",variants:iv,className:"relative",children:[(0,rh.jsx)(Sm,{}),(0,rh.jsx)(qm,{}),(0,rh.jsx)(cf,{}),(0,rh.jsx)(Ef,{}),(0,rh.jsx)(nv,{}),(0,rh.jsx)(Vg,{})]}));var av={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sv=n.createContext&&n.createContext(av),lv=["attr","size","title"];function cv(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function dv(){return dv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},dv.apply(this,arguments)}function uv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pv(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?uv(Object(r),!0).forEach((function(t){hv(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):uv(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function hv(e,t,r){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mv(e){return e&&e.map(((e,t)=>n.createElement(e.tag,pv({key:t},e.attr),mv(e.child))))}function fv(e){return t=>n.createElement(gv,dv({attr:pv({},e.attr)},t),mv(e.child))}function gv(e){var t=t=>{var r,{attr:i,size:o,title:a}=e,s=cv(e,lv),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",dv({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:r,style:pv(pv({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==sv?n.createElement(sv.Consumer,null,(e=>t(e))):t(av)}function vv(e){return fv({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function xv(e){return fv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function yv(e){return fv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function bv(e){return fv({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}const wv=Wp.create({baseURL:"http://localhost:5001/api",timeout:5e3,headers:{"Content-Type":"application/json"}}),kv=kn.div`
  min-height: 100vh;
  position: relative;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: var(--color-background);
  color: var(--color-text);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`,jv=kn.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,Sv=kn(Ed.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,Ev=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Tv=kn(Ed.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  height: 100%;
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`,Cv=kn.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,_v=kn(Ed.p)`
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-text-secondary);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`,Pv=kn.span`
  color: var(--color-primary);
  font-weight: 600;
`,Lv=kn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: #ef4444;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`,Rv=kn(Ed.div)`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
  margin: 4rem 0;
  opacity: 0.3;

  @media (max-width: 768px) {
    margin: 3rem 0;
  }
`,Av=kn(Ed.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,zv=kn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`,Ov=kn(Ed.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  height: 100%;
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`,Nv=kn.div`
  margin-top: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`,Dv=kn(Av)`
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`,Iv=kn(Ed.div)`
  display: grid;
  grid-template-columns: ${e=>"left"===e.imagePosition?"250px 1fr":"1fr 250px"};
  gap: 2rem;
  background: var(--color-background);
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`,Mv=kn.div`
  order: ${e=>"right"===e.imagePosition?2:1};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    order: 1;
  }
`,$v=kn(Ed.div)`
  width: 100%;
  height: 250px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`,Fv=kn.div`
  order: ${e=>"right"===e.imagePosition?1:2};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    order: 2;
  }
`,Bv=kn(Ed.h3)`
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  color: var(--color-heading);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`,Uv=kn(Ed.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`,Vv=kn(Ed.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`,Wv=kn(Ed.a)`
  color: var(--color-text);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.4rem;
  }

  &:hover {
    color: var(--color-primary);
    opacity: 1;
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }
`,Hv=()=>{const[e,t]=(0,n.useState)(null),[r,i]=(0,n.useState)(null),[o,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null);(0,n.useEffect)((()=>{(async()=>{try{a(!0),l(null);const r=await wv.get("/about").catch((e=>(console.error("Error fetching about data:",e),{data:null})));t(r.data||{title:"About Us",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",paragraphs:["At Techveda, we believe in the power of technology to transform businesses and enhance lives. Founded in 2020, our journey began with a simple mission: to create digital solutions that make a difference.","We're a team of passionate designers, developers, and strategists who thrive on solving complex problems through innovative technology. With expertise spanning web development, mobile applications, UI/UX design, and digital marketing, we bring a comprehensive approach to every project.","What sets us apart is our commitment to understanding your unique needs. We don't just build products; we craft experiences that align with your business goals and resonate with your audience. Our collaborative process ensures that your vision is at the heart of everything we create."]});try{const e=await wv.get("/founders");i(e.data)}catch(e){console.log("Using default founders data"),i({title:"Meet Our Founders",founders:[{name:"John Smith",bio:"Founder & CEO with over 10 years of experience in software development and team leadership. Passionate about creating innovative solutions that make a difference.",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",imagePosition:"left",social:{github:"https://github.com",portfolio:"https://portfolio.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"}},{name:"Jane Doe",bio:"Creative Director & Co-founder specializing in UI/UX design. Brings a perfect blend of aesthetics and functionality to every project.",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",imagePosition:"right",social:{github:"https://github.com",portfolio:"https://portfolio.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"}}]})}}catch(e){console.error("Error fetching data:",e),l(e.message||"Failed to load content")}finally{a(!1)}})()}),[]);const c=(e,t)=>e?e.map(((e,r)=>{const n=(null===t||void 0===t?void 0:t.filter((e=>e.paragraphIndex===r)))||[];if(0===n.length)return(0,rh.jsx)(_v,{children:e},r);let i=e;const o=[];let a=0;const s=[...n].sort(((e,t)=>i.indexOf(e.text)-i.indexOf(t.text)));for(const t of s){const e=i.indexOf(t.text,a);-1!==e&&(e>a&&o.push(i.substring(a,e)),o.push((0,rh.jsx)(Pv,{children:t.text},`highlight-${r}-${e}`)),a=e+t.text.length)}return a<i.length&&o.push(i.substring(a)),(0,rh.jsx)(_v,{children:o},r)})):null;return o?(0,rh.jsx)(kv,{children:(0,rh.jsx)(jv,{children:(0,rh.jsx)(km,{})})}):s?(0,rh.jsx)(kv,{children:(0,rh.jsx)(jv,{children:(0,rh.jsx)(Lv,{children:s})})}):e?(0,rh.jsx)(kv,{children:(0,rh.jsxs)(jv,{children:[(0,rh.jsx)(Sv,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:e.title||"About Us"}),(0,rh.jsxs)(Ev,{children:[(0,rh.jsx)(Tv,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:(0,rh.jsx)("img",{src:e.image||"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"About Techveda",onError:e=>{e.target.onerror=null,e.target.src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}})}),(0,rh.jsx)(Cv,{children:c(e.paragraphs,e.highlights)})]}),e.additionalParagraphs&&e.additionalParagraphs.length>0&&(0,rh.jsxs)(rh.Fragment,{children:[(0,rh.jsx)(Rv,{initial:{opacity:0,scaleX:0},animate:{opacity:1,scaleX:1},transition:{duration:.6,delay:.4}}),(0,rh.jsx)(Av,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:"Our Story"}),(0,rh.jsxs)(zv,{children:[(0,rh.jsx)(Cv,{children:c(e.additionalParagraphs,e.additionalHighlights)}),(0,rh.jsx)(Ov,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.6},children:(0,rh.jsx)("img",{src:e.sideImage||e.image||"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"About Techveda Side",onError:e=>{e.target.onerror=null,e.target.src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}})})]})]}),r&&r.founders&&r.founders.length>0&&(0,rh.jsxs)(Nv,{children:[(0,rh.jsx)(Rv,{initial:{opacity:0,scaleX:0},animate:{opacity:1,scaleX:1},transition:{duration:.6,delay:.7}}),(0,rh.jsx)(Dv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:r.title||"Meet Our Founders"}),r.founders.map(((e,t)=>{var r,n,i,o;return(0,rh.jsxs)(Iv,{imagePosition:e.imagePosition||"left",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9+.1*t},children:[(0,rh.jsxs)(Mv,{imagePosition:e.imagePosition||"left",children:[(0,rh.jsx)($v,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:1+.1*t},children:(0,rh.jsx)("img",{src:e.image,alt:e.name,onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/250"}})}),(0,rh.jsxs)(Vv,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.1+.1*t},children:[(null===(r=e.social)||void 0===r?void 0:r.github)&&(0,rh.jsx)(Wv,{href:e.social.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,rh.jsx)(vv,{})}),(null===(n=e.social)||void 0===n?void 0:n.portfolio)&&(0,rh.jsx)(Wv,{href:e.social.portfolio,target:"_blank",rel:"noopener noreferrer","aria-label":"Portfolio Website",whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,rh.jsx)(bv,{})}),(null===(i=e.social)||void 0===i?void 0:i.linkedin)&&(0,rh.jsx)(Wv,{href:e.social.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,rh.jsx)(yv,{})}),(null===(o=e.social)||void 0===o?void 0:o.instagram)&&(0,rh.jsx)(Wv,{href:e.social.instagram,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram Profile",whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,rh.jsx)(xv,{})})]})]}),(0,rh.jsxs)(Fv,{imagePosition:e.imagePosition||"left",children:[(0,rh.jsx)(Bv,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.2+.1*t},children:e.name}),(0,rh.jsx)(Uv,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.3+.1*t},children:e.bio})]})]},t)}))]})]})}):(0,rh.jsx)(kv,{children:(0,rh.jsx)(jv,{children:(0,rh.jsx)(Lv,{children:"No about content available."})})})},qv=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    padding-bottom: 3rem;
  }
`,Yv=kn.span`
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
`,Xv=kn.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 0.8rem;
    }
  }

  p {
    color: ${e=>e.theme.colors.textSecondary};
    font-size: clamp(1rem, 2vw, 1.1rem);
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`,Kv=kn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  padding-bottom: 8rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-bottom: 4rem;
  }
`,Gv=kn(Ed.div)`
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

  @media (max-width: 640px) {
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
`,Qv=kn.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  @media (max-width: 640px) {
    height: 180px;
  }
`,Jv=kn.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 640px) {
    padding: 1rem;
  }
`,Zv=kn.h3`
  color: linear-gradient(135deg, #4299e1, #38b2ac);
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    margin-bottom: 0.8rem;
  }

  ${Gv}:hover & {
    color: #4299e1;
  }
`,ex=kn.p`
  color: #cbd5e0;
  font-size: clamp(1rem, 2vw, 1.1rem);
  margin-bottom: 1.75rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 5.1rem;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 1rem;
    height: 4.5rem;
    margin-bottom: 1.5rem;
  }
`,tx=kn.div`
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

  @media (max-width: 640px) {
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`,rx=kn.span`
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);
  font-weight: 500;
  margin-right: 10px;

  @media (max-width: 640px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`,nx=kn.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`,ix=kn(Pe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.8rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.3rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-left: auto;
  font-size: clamp(0.9rem, 1.5vw, 1rem);

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    padding: 0.6rem 1.5rem;
  }

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,ox=kn(Ed.a)`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 1.5vw, 1rem);

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    padding: 0.6rem 1.5rem;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 0.3rem;
  }

  svg {
    width: 30px;
    height: 30px;
  }
  
  span {
    padding-left: 10px;
  }

  &:hover {
    color: #3b82f6;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,ax=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(!0),[o,a]=(0,n.useState)(null);(0,n.useEffect)((()=>{s()}),[]);const s=async()=>{try{const e=await Wp.get("/api/projects");t(e.data),a(null)}catch(o){console.error("Error fetching projects:",o),a("Failed to fetch projects"),t([])}finally{i(!1)}};return r?(0,rh.jsx)(qv,{children:(0,rh.jsx)(km,{})}):o?(0,rh.jsx)(qv,{children:(0,rh.jsx)("div",{className:"error-message",children:o})}):(0,rh.jsxs)(qv,{children:[(0,rh.jsxs)(Xv,{children:[(0,rh.jsxs)(Ed.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:["All ",(0,rh.jsx)(Yv,{children:"Projects"})]}),(0,rh.jsx)(Ed.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Explore our portfolio of innovative and impactful projects"})]}),(0,rh.jsx)(Kv,{children:e.map(((e,t)=>(0,rh.jsxs)(Gv,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t,type:"spring",stiffness:100},whileHover:{y:-8,transition:{duration:.2}},children:[(0,rh.jsx)(Ed.div,{initial:{scale:1},whileHover:{scale:1.05},transition:{duration:.3},children:(0,rh.jsx)(Qv,{src:e.mainimage,alt:e.title})}),(0,rh.jsxs)(Jv,{children:[(0,rh.jsx)(Zv,{children:e.title}),(0,rh.jsx)(ex,{children:e.shortDescription}),(0,rh.jsx)(tx,{children:(0,rh.jsx)("div",{className:"scroll-track",children:[...e.technologies,...e.technologies].map(((e,t)=>(0,rh.jsx)(rx,{children:e},t)))})}),(0,rh.jsxs)(nx,{children:[(0,rh.jsxs)(ox,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),(0,rh.jsx)("span",{children:"GitHub"})]}),(0,rh.jsxs)(ix,{to:`/projects/${e._id}`,whileHover:{scale:1.05},whileTap:{scale:.95},children:["View Details",(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})]})]},e._id)))}),(0,rh.jsx)(Wg,{})]})},sx=kn(Ed.div)`
  
  position: relative;
  overflow-x: hidden;
  z-index: 1;
  padding: 1rem 1rem;
`,lx={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.3}}},cx=()=>(n.useEffect((()=>{window.scrollTo({top:0,behavior:"auto"})}),[]),(0,rh.jsx)(sx,{variants:lx,initial:"initial",animate:"animate",exit:"exit",children:(0,rh.jsx)(Vg,{})})),dx=kn(Ed.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`,ux=kn(Ed.h1)`
  font-size: clamp(6rem, 20vw, 15rem);
  line-height: 1;
  margin: 0;
  background: linear-gradient(to right, ${e=>e.theme.colors.primary}, ${e=>e.theme.colors.secondary}, ${e=>e.theme.colors.tertiary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
`,px=kn(Ed.h2)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin: 1rem 0 2rem;
  text-transform: uppercase;
`,hx=kn(Ed.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,mx=kn(Ed.div)`
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
`,fx={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.5}}},gx=()=>(0,rh.jsxs)(dx,{variants:fx,initial:"initial",animate:"animate",exit:"exit",children:[(0,rh.jsx)(ux,{initial:{opacity:0,y:50},animate:{opacity:.8,y:0},transition:{duration:.8},children:"404"}),(0,rh.jsx)(px,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Page Not Found"}),(0,rh.jsx)(hx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}),(0,rh.jsx)(mx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,rh.jsx)(Pe,{to:"/",className:"hoverable",children:"Back to Homepage"})})]}),vx=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 0rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`,xx=kn.div`
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
`,yx=kn.span`
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
`,bx=kn.div`
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
`,wx=kn.div`
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
`,kx=kn(Ed.div)`
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

    ${wx} {
      transform: translateY(-5px) scale(1.1);
      border-color: #2563eb;
      box-shadow: 0 0 30px rgba(37, 99, 235, 0.0);
    }
  }
`,jx=kn.h3`
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
`,Sx=kn.p`
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
`,Ex=kn.ul`
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
`,Tx=kn.li`
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
`,Cx=kn(Pe)`
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
`,_x=[{_id:"1",title:"Frontend Development",description:"Creating responsive and performant user interfaces using modern frameworks like React, Next.js and Vue.",icon:"\ud83d\udcbb",features:["Responsive Web Design","Interactive UI/UX"],slug:"frontend-development"},{_id:"2",title:"Backend Development",description:"Building robust, scalable server-side applications and APIs with Node.js, Express, and MongoDB.",icon:"\u2699\ufe0f",features:["RESTful API Development","Database Design"],slug:"backend-development"},{_id:"3",title:"SEO Optimization",description:"Improving your website's visibility in search results to drive more organic traffic.",icon:"\ud83d\udd0d",features:["Technical SEO Audits","On-page Optimization"],slug:"seo-optimization"},{_id:"4",title:"Performance Optimization",description:"Enhancing the speed and performance of your web applications for better user experience.",icon:"\u26a1",features:["Core Web Vitals Optimization","Lighthouse Score Improvement"],slug:"performance-optimization"}],Px=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(!0),[o,a]=(0,n.useState)(null);if((0,n.useEffect)((()=>{(async()=>{try{i(!0),a(null);const e=await pf.get("/api/services");if(!e.data.success)throw new Error(e.data.message||"Failed to fetch services");t(e.data.data)}catch(e){console.error("Error fetching services:",e),a(e.message||"Failed to load services")}finally{i(!1)}})()}),[]),r)return(0,rh.jsx)(vx,{children:(0,rh.jsx)(km,{})});if(o)return(0,rh.jsxs)(vx,{children:[(0,rh.jsxs)(xx,{children:[(0,rh.jsxs)("h1",{children:["What I ",(0,rh.jsx)(yx,{children:"Offer"})]}),(0,rh.jsx)("p",{children:"Explore our comprehensive range of services designed to meet your business needs"})]}),(0,rh.jsx)(bx,{children:_x.map(((e,t)=>(0,rh.jsxs)(kx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:[(0,rh.jsx)(wx,{children:(0,rh.jsx)("span",{children:e.icon})}),(0,rh.jsx)(jx,{children:e.title}),(0,rh.jsx)(Sx,{children:e.description}),e.features&&(0,rh.jsx)(Ex,{children:e.features.map(((e,t)=>(0,rh.jsx)(Tx,{children:e},t)))}),(0,rh.jsxs)(Cx,{to:`/services/${e.slug}`,state:{title:e.title,description:e.description,slug:e.slug,icon:e.icon,features:e.features},children:[(0,rh.jsx)("span",{children:"Learn More"}),(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M5 12h14"}),(0,rh.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]},e._id)))}),(0,rh.jsx)(Wg,{})]});const s=e.length>0?e:_x;return(0,rh.jsxs)(vx,{children:[(0,rh.jsxs)(xx,{children:[(0,rh.jsxs)("h1",{children:["What I ",(0,rh.jsx)(yx,{children:"Offer"})]}),(0,rh.jsx)("p",{children:"Comprehensive solutions to elevate your digital presence"})]}),(0,rh.jsx)(bx,{children:s.map((e=>(0,rh.jsxs)(kx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,rh.jsx)(wx,{children:e.icon&&(e.icon.startsWith("http")?(0,rh.jsx)("img",{src:e.icon,alt:e.title}):(0,rh.jsx)("span",{children:e.icon}))}),(0,rh.jsx)(jx,{children:e.title}),(0,rh.jsx)(Sx,{children:e.description}),e.features&&(0,rh.jsx)(Ex,{children:e.features.map(((e,t)=>(0,rh.jsx)(Tx,{children:e},t)))}),(0,rh.jsxs)(Cx,{to:`/services/${e.slug}`,state:{title:e.title,description:e.description,slug:e.slug,icon:e.icon,features:e.features},children:[(0,rh.jsx)("span",{children:"Learn More"}),(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M5 12h14"}),(0,rh.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]},e._id)))}),(0,rh.jsx)(Wg,{})]})},Lx=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`,Rx=kn(Pe)`
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
`,Ax=kn.div`
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
`,zx=kn.a`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid rgb(255, 255, 255);
  padding: 0.6rem 1.4rem;
  border-radius: 18px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 20px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.8rem;
  }

  svg {
    width: 23px;
    height: 23px;
  }
  
  span {
    padding-left: 6px;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  &:hover {
    color: #3b82f6;
    border: 1px solid #3b82f6;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,Ox=kn.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 8rem;
`,Nx=kn.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 250px;
  }
`,Dx=kn.img`
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 0.5rem;
`,Ix=kn(Ed.div)`
  display: inline-block;
  background: #2563eb;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.4em 1.2em;
  margin: 1.6rem 0;
  letter-spacing: 0.05em;
`,Mx=kn(Ed.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1.2rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`,$x=kn(Ed.h2)`
  font-size: 3rem;
  font-weight: 1200;
  background: linear-gradient(80deg, #2563eb, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,Fx=kn(Ed.div)`
  display: grid;
  grid-template-columns: 650px 200px 220px;
  gap: 5rem;
  margin: 2rem 0 0 0;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 200px 220px;
    gap: 3rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Bx=kn(Ed.div)`

  

`,Ux=kn.div`
 background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 0.7rem;
  letter-spacing: 0.04em;
  font-size: 1.1rem;
`,Vx=kn(Ed.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 0 0 1rem 0;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,Wx=kn.div`
  background: rgba(58, 78, 121, 0.13);
  color: rgb(61, 94, 164);
  padding: 0.5rem 1.1rem;
  border-radius: 1.2rem;
  font-size: 1rem;
  font-weight: 1200;

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`,Hx=(kn(Ed.a)`
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
`,kn(Ed.div)`
 
  padding: 2rem 0rem;
  
`),qx=kn.h3`
  background: linear-gradient(90deg, #2563eb, rgb(255, 255, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.4rem;
  font-weight: 1200;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,Yx=()=>{const{id:e}=ee(),[t,r]=(0,n.useState)(null),[i,o]=(0,n.useState)(!0),[a,s]=(0,n.useState)(null);(0,n.useEffect)((()=>{l()}),[e]);const l=async()=>{try{const t=await Wp.get(`/api/projects/${e}`);r(t.data),s(null)}catch(a){console.error("Error fetching project:",a),s("Failed to fetch project details"),r(null)}finally{o(!1)}};return i?(0,rh.jsx)(Lx,{children:(0,rh.jsx)(km,{})}):a||!t?(0,rh.jsx)(Lx,{children:(0,rh.jsxs)(Ax,{children:[(0,rh.jsx)("h1",{children:"Project not found"}),(0,rh.jsxs)(Rx,{to:"/projects",children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Projects"]})]})}):(0,rh.jsxs)(Lx,{children:[(0,rh.jsxs)(Rx,{to:"/projects",whileHover:{x:-5},whileTap:{x:0},children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Projects"]}),t.mainimage&&(0,rh.jsx)(Ed.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,rh.jsx)(Nx,{src:t.mainimage,alt:t.title})}),(0,rh.jsxs)(Ix,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:["PUBLISHED IN ",t.publishedYear||"2023"]}),(0,rh.jsx)(Mx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.2},children:t.title}),(0,rh.jsx)($x,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.3},children:t.subtitle}),(0,rh.jsxs)(Fx,{initial:"hidden",animate:"visible",variants:{hidden:{},visible:{transition:{staggerChildren:.18,delayChildren:.4}}},children:[(0,rh.jsxs)(Bx,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,type:"spring",stiffness:100}}},children:[(0,rh.jsx)(Ed.div,{style:{color:"#fff",fontSize:"1.1rem"},initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},children:t.shortDescription}),(0,rh.jsxs)(Ed.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:1},style:{marginTop:"2rem"},children:[t.gitHubLink&&(0,rh.jsxs)(zx,{href:t.githubLink,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),(0,rh.jsx)("span",{children:"GitHub"})]}),t.officialWebsiteLink&&(0,rh.jsxs)(zx,{href:t.officialWebsiteLink,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[(0,rh.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,rh.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,rh.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),(0,rh.jsx)("span",{children:"Website"})]})]})]}),(0,rh.jsxs)(Bx,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,type:"spring",stiffness:100}}},children:[(0,rh.jsx)(Ux,{children:"SERVICES"}),t.services&&t.services.map(((e,t)=>(0,rh.jsx)(Ed.div,{style:{color:"#fff",marginBottom:"0.5rem"},initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5+.1*t},children:e},t)))]}),(0,rh.jsxs)(Bx,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,type:"spring",stiffness:100}}},children:[(0,rh.jsx)(Ux,{children:"INDUSTRIES"}),t.industries&&t.industries.map(((e,t)=>(0,rh.jsx)(Ed.div,{style:{color:"#fff",marginBottom:"0.5rem"},initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5+.1*t},children:e},t)))]})]}),(0,rh.jsxs)(Hx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:1.2},children:[(0,rh.jsx)(qx,{children:"Technical Details"}),(0,rh.jsx)(Ed.div,{style:{color:"#fff",fontSize:"1.08rem",lineHeight:1.7},initial:{opacity:0},animate:{opacity:1},transition:{delay:1.4},children:t.technicalDescription})]}),t.technologies&&t.technologies.length>0&&(0,rh.jsx)(Vx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.8},children:t.technologies.map(((e,t)=>(0,rh.jsx)(Ed.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.9+.1*t},children:(0,rh.jsx)(Wx,{children:e})},t)))}),(0,rh.jsxs)(Hx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:1.3},children:[(0,rh.jsx)(qx,{children:"Learning Outcomes"}),(0,rh.jsx)(Ed.div,{style:{color:"#fff",fontSize:"1.1rem",lineHeight:1.7},initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},children:t.learningDescription})]}),t.secondaryimage&&(0,rh.jsx)(Ox,{children:(0,rh.jsx)(Ed.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5,delay:1.6},children:(0,rh.jsx)(Dx,{src:t.secondaryimage,alt:`${t.title} - Additional view`})})}),(0,rh.jsx)(Wg,{})]})},Xx=kn.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.colors.darkBackground};
  padding: 2rem;
  position: relative;
  overflow: hidden;
`,Kx=kn.div`
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
`,Gx=kn.div`
  position: absolute;
  bottom: -15%;
  left: -5%;
  width: 40vw;
  height: 40vw;
  background: ${e=>e.theme.colors.primary};
  border-radius: 50%;
  opacity: 0.03;
  z-index: 0;
`,Qx=kn(Ed.div)`
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
`,Jx=kn.div`
  padding: 2.5rem 2.5rem 1.5rem;
  text-align: center;
`,Zx=kn.h1`
  color: ${e=>e.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
`,ey=kn.p`
  color: ${e=>e.theme.colors.gray};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,ty=kn.div`
  width: 60px;
  height: 4px;
  background: ${e=>e.theme.gradients.primary};
  margin: 0 auto;
  border-radius: 4px;
`,ry=kn.form`
  padding: 1.5rem 2.5rem 2.5rem;
`,ny=kn.div`
  position: relative;
  margin-bottom: 1.75rem;
`,iy=kn.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
`,oy=kn.input`
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
`,ay=kn.div`
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
`,sy=kn(Ed.button)`
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
`,ly=kn(Ed.div)`
  color: ${e=>e.theme.colors.error};
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 0.75rem;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 8px;
  font-size: 0.9rem;
`,cy=kn.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,dy=kn.label`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
`,uy=kn.input`
  margin-right: 0.5rem;
`,py=kn.span`
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
`,hy=kn(Ed.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
`,my=kn(Pe)`
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
`,fy=()=>{const[e,t]=(0,n.useState)(""),[r,i]=(0,n.useState)(""),[o,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(""),{login:u}=oh(),p=Z();return(0,rh.jsxs)(Xx,{children:[(0,rh.jsx)(Kx,{}),(0,rh.jsx)(Gx,{}),(0,rh.jsx)(hy,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.5,duration:.3},children:(0,rh.jsxs)(my,{to:"/",children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Website"]})}),(0,rh.jsxs)(Qx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,rh.jsxs)(Jx,{children:[(0,rh.jsx)(Zx,{children:"Admin Login"}),(0,rh.jsx)(ey,{children:"Sign in to access your dashboard"}),(0,rh.jsx)(ty,{})]}),(0,rh.jsxs)(ry,{onSubmit:async t=>{t.preventDefault(),l(!0),d("");try{var n;console.log("Attempting login with:",{email:e,rememberMe:o});const t=await u(e,r,o);console.log("Login response:",t),"admin"===(null===t||void 0===t||null===(n=t.user)||void 0===n?void 0:n.role)?p("/admin"):d("Access denied. Admin privileges required.")}catch(i){console.error("Login error:",i),d(i.message||"Login failed. Please check your credentials.")}finally{l(!1)}},children:[c&&(0,rh.jsx)(ly,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.3},children:c}),(0,rh.jsxs)(ny,{children:[(0,rh.jsx)(iy,{htmlFor:"email",children:"Email Address"}),(0,rh.jsx)(ay,{children:(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),(0,rh.jsx)(oy,{type:"email",id:"email",value:e,onChange:e=>t(e.target.value),placeholder:"your@email.com",required:!0})]}),(0,rh.jsxs)(ny,{children:[(0,rh.jsx)(iy,{htmlFor:"password",children:"Password"}),(0,rh.jsx)(ay,{children:(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),(0,rh.jsx)(oy,{type:"password",id:"password",value:r,onChange:e=>i(e.target.value),placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",required:!0})]}),(0,rh.jsx)(cy,{children:(0,rh.jsxs)(dy,{children:[(0,rh.jsx)(uy,{type:"checkbox",id:"rememberMe",checked:o,onChange:e=>a(e.target.checked)}),(0,rh.jsx)(py,{children:"Remember me for 30 days"})]})}),(0,rh.jsx)(sy,{type:"submit",disabled:s,whileHover:{scale:1.02},whileTap:{scale:.98},children:s?"Authenticating...":"Sign In"})]})]})]})},gy=kn.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,vy=kn.div`
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
`,xy=kn(Ed.button)`
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
`,yy=kn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`,by=kn(Ed.div)`
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
`,wy=kn.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${by}:hover & {
    transform: scale(1.05);
  }
`,ky=kn.div`
  padding: 1.5rem;
`,jy=kn.h3`
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
`,Sy=kn.h4`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 0.75rem;
`,Ey=kn.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Ty=kn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,Cy=kn.span`
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
`,_y=kn.a`
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
`,Py=kn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,Ly=kn.span`
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
`,Ry=kn.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,Ay=kn(Ed.button)`
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
`,zy=kn(Ed.div)`
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
`,Oy=kn(Ed.div)`
  background: ${e=>e.theme.colors.background};
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,Ny=kn.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Dy=kn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Iy=kn.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
`,My=kn.input`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 0.5rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
`,$y=kn.textarea`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 0.5rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`,Fy=kn.button`
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
`,By=()=>{const{user:e}=oh(),[t,r]=(0,n.useState)([]),[i,o]=(0,n.useState)(!0),[a,s]=(0,n.useState)(!1),[l,c]=(0,n.useState)(null),[d,u]=(0,n.useState)({title:"",subtitle:"",mainimage:"",secondaryimage:"",publishedYear:"",shortDescription:"",officialWebsiteLink:"",gitHubLink:"",services:"",industries:"",technicalDescription:"",learningDescription:"",technologies:""}),[p,h]=(0,n.useState)(!1),{addToast:m}=dh(),f=async()=>{try{o(!0);const e={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}},t=await Wp.get("/api/projects",e);r(t.data)}catch(a){var e,t,n,i;console.error("Error fetching projects:",a);const r=(null===(e=a.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||(null===(n=a.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.error)||"Error fetching projects";m(r,"error")}finally{o(!1)}};(0,n.useEffect)((()=>{f()}),[]);const g=e=>{const{name:t,value:r}=e.target;u((e=>({...e,[t]:r})))};return i?(0,rh.jsx)(gy,{children:"Loading..."}):(0,rh.jsxs)(gy,{children:[(0,rh.jsxs)(vy,{children:[(0,rh.jsxs)("h1",{children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),"Project Management"]}),(0,rh.jsxs)(xy,{onClick:()=>{c(null),u({title:"",subtitle:"",mainimage:"",secondaryimage:"",publishedYear:"",shortDescription:"",officialWebsiteLink:"",gitHubLink:"",services:"",industries:"",technicalDescription:"",learningDescription:"",technologies:""}),s(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,rh.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add New Project"]})]}),(0,rh.jsx)(yy,{children:t.map((e=>{return(0,rh.jsxs)(by,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,rh.jsx)(wy,{src:(t=e.mainimage,t?t.startsWith("http://")||t.startsWith("https://")?t:`http://localhost:5001${t}`:"https://via.placeholder.com/400x300?text=No+Image"),alt:e.title}),(0,rh.jsxs)(ky,{children:[(0,rh.jsxs)(jy,{children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),e.title]}),e.subtitle&&(0,rh.jsx)(Sy,{children:e.subtitle}),(0,rh.jsx)(Ey,{children:e.description}),(0,rh.jsxs)(Ty,{children:[e.date&&(0,rh.jsxs)(Cy,{children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,rh.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),e.date]}),e.githubLink&&(0,rh.jsxs)(Cy,{children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),"GitHub"]}),e.websiteLink&&(0,rh.jsxs)(_y,{href:e.websiteLink,target:"_blank",rel:"noopener noreferrer",children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),(0,rh.jsx)("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),"Visit Website"]})]}),(0,rh.jsx)(Py,{children:e.technologies.map((e=>(0,rh.jsxs)(Ly,{children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),e]},e)))}),(0,rh.jsxs)(Ry,{children:[(0,rh.jsxs)(Ay,{className:"edit",onClick:()=>(e=>{c(e),u({title:e.title||"",subtitle:e.subtitle||"",mainimage:e.mainimage||"",secondaryimage:e.secondaryimage||"",publishedYear:e.publishedYear||"",shortDescription:e.shortDescription||"",officialWebsiteLink:e.officialWebsiteLink||"",gitHubLink:e.gitHubLink||"",services:e.services?e.services.join(", "):"",industries:e.industries?e.industries.join(", "):"",technicalDescription:e.technicalDescription||"",learningDescription:e.learningDescription||"",technologies:e.technologies?e.technologies.join(", "):""}),s(!0)})(e),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,rh.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"Edit"]}),(0,rh.jsxs)(Ay,{className:"delete",onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this project?"))try{const t={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}};await Wp.delete(`/api/projects/${e}`,t),m("Project deleted successfully","success"),f()}catch(o){var t,r,n,i;console.error("Error deleting project:",o);const e=(null===(t=o.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||(null===(n=o.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.error)||"Error deleting project";m(e,"error")}})(e._id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,rh.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"Delete"]})]})]})]},e._id);var t}))}),a&&(0,rh.jsx)(zy,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>s(!1),children:(0,rh.jsxs)(Oy,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,rh.jsx)("h2",{children:l?"Edit Project":"Add New Project"}),(0,rh.jsxs)(Ny,{onSubmit:async e=>{e.preventDefault(),h(!0);try{const e={title:d.title,subtitle:d.subtitle,mainimage:d.mainimage,secondaryimage:d.secondaryimage,publishedYear:d.publishedYear?parseInt(d.publishedYear):void 0,shortDescription:d.shortDescription,officialWebsiteLink:d.officialWebsiteLink,gitHubLink:d.gitHubLink,services:d.services.split(",").map((e=>e.trim())).filter((e=>e)),industries:d.industries.split(",").map((e=>e.trim())).filter((e=>e)),technicalDescription:d.technicalDescription,learningDescription:d.learningDescription,technologies:d.technologies.split(",").map((e=>e.trim())).filter((e=>e))},t={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`,"Content-Type":"application/json"}};if(l){const r=await Wp.put(`/api/projects/${l._id}`,e,t);console.log("Update response:",r),m("Project updated successfully","success")}else{const r=await Wp.post("/api/projects",e,t);console.log("Create response:",r),m("Project created successfully","success")}s(!1),c(null),u({title:"",subtitle:"",mainimage:"",secondaryimage:"",publishedYear:"",shortDescription:"",officialWebsiteLink:"",gitHubLink:"",services:"",industries:"",technicalDescription:"",learningDescription:"",technologies:""}),f()}catch(o){var t,r,n,i;console.error("Error saving project:",o);const e=(null===(t=o.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||(null===(n=o.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.error)||o.message||"Error saving project";m(e,"error")}finally{h(!1)}},children:[(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Title *"}),(0,rh.jsx)(My,{type:"text",name:"title",value:d.title,onChange:g,required:!0})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Subtitle"}),(0,rh.jsx)(My,{type:"text",name:"subtitle",value:d.subtitle,onChange:g})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Main Image URL *"}),(0,rh.jsx)(My,{type:"url",name:"mainimage",value:d.mainimage,onChange:g,placeholder:"Enter main image URL",required:!0})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Secondary Image URL"}),(0,rh.jsx)(My,{type:"url",name:"secondaryimage",value:d.secondaryimage,onChange:g,placeholder:"Enter secondary image URL"})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Published Year"}),(0,rh.jsx)(My,{type:"number",name:"publishedYear",value:d.publishedYear,onChange:g,placeholder:"e.g., 2024"})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Short Description"}),(0,rh.jsx)($y,{name:"shortDescription",value:d.shortDescription,onChange:g,placeholder:"Brief description of the project"})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Official Website Link"}),(0,rh.jsx)(My,{type:"url",name:"officialWebsiteLink",value:d.officialWebsiteLink,onChange:g,placeholder:"https://example.com"})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"GitHub Link *"}),(0,rh.jsx)(My,{type:"url",name:"gitHubLink",value:d.gitHubLink,onChange:g,placeholder:"https://github.com/...",required:!0})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Services (comma-separated)"}),(0,rh.jsx)(My,{type:"text",name:"services",value:d.services,onChange:g,placeholder:"Web Development, Mobile Apps, ..."})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Industries (comma-separated)"}),(0,rh.jsx)(My,{type:"text",name:"industries",value:d.industries,onChange:g,placeholder:"Healthcare, Finance, ..."})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Technical Description"}),(0,rh.jsx)($y,{name:"technicalDescription",value:d.technicalDescription,onChange:g,placeholder:"Detailed technical description"})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Learning Description"}),(0,rh.jsx)($y,{name:"learningDescription",value:d.learningDescription,onChange:g,placeholder:"What was learned from this project"})]}),(0,rh.jsxs)(Dy,{children:[(0,rh.jsx)(Iy,{children:"Technologies *"}),(0,rh.jsx)(My,{type:"text",name:"technologies",value:d.technologies,onChange:g,placeholder:"React, Node.js, MongoDB, ...",required:!0})]}),(0,rh.jsx)(Fy,{type:"submit",disabled:p,children:p?"Saving...":l?"Update Project":"Create Project"})]})]})})]})},Uy=kn.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,Vy=kn.div`
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
`,Wy=kn(Ed.button)`
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
`,Hy=kn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`,qy=kn(Ed.div)`
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
`,Yy=kn.div`
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
`,Xy=kn.div`
  padding: 1.5rem;
`,Ky=kn.h3`
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
`,Gy=kn.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,Qy=kn.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,Jy=kn(Ed.button)`
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
`,Zy=kn(Ed.div)`
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
`,eb=kn(Ed.div)`
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
`,tb=kn.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,rb=kn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,nb=kn.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 0.875rem;
`,ib=kn.input`
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
`,ob=kn.textarea`
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
`,ab=kn.button`
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
`,sb=kn.div`
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
`,lb=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`,cb=kn.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;
`,db=kn.button`
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
`,ub=kn(Ed.button)`
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
`,pb=kn(Ed.button)`
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
`,hb=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(!1),[o,a]=(0,n.useState)(null),[s,l]=(0,n.useState)({title:"",description:"",icon:"",slug:"",subServices:[]}),[c,d]=(0,n.useState)(!0),[u,p]=(0,n.useState)(null),{addToast:h}=dh(),{user:m}=oh(),f=Z();(0,n.useEffect)((()=>{g()}),[]);const g=async()=>{try{d(!0),p(null);const e=await pf.get("/api/services");if(!e.data.success)throw new Error(e.data.message||"Failed to fetch services");if(!Array.isArray(e.data.data))throw new Error("Expected data to be an array");t(e.data.data)}catch(u){console.error("Error fetching services:",u),p(u.message||"Failed to load services"),h(u.message||"Failed to load services","error")}finally{d(!1)}},v=e=>{const{name:t,value:r}=e.target;l((e=>({...e,[t]:r})))},x=(e,t,r)=>{l((n=>{const i=[...n.subServices];return i[e]={...i[e],[t]:r},{...n,subServices:i}}))},y=()=>{a(null),l({title:"",description:"",icon:"",slug:"",subServices:[]}),i(!1)};return c?(0,rh.jsx)(Uy,{children:(0,rh.jsx)(km,{})}):(0,rh.jsxs)(Uy,{children:[(0,rh.jsxs)(Vy,{children:[(0,rh.jsxs)("h1",{children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"Service Management"]}),(0,rh.jsxs)(Wy,{onClick:()=>{a(null),l({title:"",description:"",icon:"",slug:"",subServices:[]}),i(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,rh.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add New Service"]})]}),(0,rh.jsx)(Hy,{children:e.map((e=>(0,rh.jsxs)(qy,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,rh.jsx)(Yy,{children:(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),(0,rh.jsxs)(Xy,{children:[(0,rh.jsxs)(Ky,{children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,rh.jsx)("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),e.title]}),(0,rh.jsx)(Gy,{children:e.description}),e.features&&e.features.length>0&&(0,rh.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,rh.jsx)("h4",{style:{color:e=>e.theme.colors.text,marginBottom:"0.5rem"},children:"Features:"}),(0,rh.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0},children:e.features.map(((e,t)=>(0,rh.jsxs)("li",{style:{color:e=>e.theme.colors.textSecondary,marginBottom:"0.25rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"16px",height:"16px"},children:(0,rh.jsx)("polyline",{points:"20 6 9 17 4 12"})}),e]},t)))})]}),(0,rh.jsxs)(Qy,{children:[(0,rh.jsxs)(Jy,{className:"edit",onClick:()=>(e=>{a(e),l({title:e.title||"",description:e.description||"",icon:e.icon||"",slug:e.slug||"",subServices:e.subServices||[]}),i(!0)})(e),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,rh.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"Edit"]}),(0,rh.jsxs)(Jy,{className:"delete",onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this service?"))try{await pf.delete(`/api/services/${e}`),h("Service deleted successfully","success"),g()}catch(u){console.error("Error deleting service:",u),h(u.message||"Failed to delete service","error")}})(e._id),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,rh.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"Delete"]})]}),(0,rh.jsxs)(pb,{onClick:()=>(e=>{console.log("Navigating to service:",e),f(`/services/${e._id}`)})(e),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"16px",height:"16px"},children:[(0,rh.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,rh.jsx)("polyline",{points:"15 3 21 3 21 9"}),(0,rh.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Learn More"]})]})]},e._id)))}),r&&(0,rh.jsx)(Zy,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>i(!1),children:(0,rh.jsxs)(eb,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,rh.jsx)(ab,{onClick:()=>i(!1),children:"\xd7"}),(0,rh.jsx)("h2",{children:o?"Edit Service":"Add New Service"}),(0,rh.jsxs)(tb,{onSubmit:async e=>{e.preventDefault();try{const e={...s,subServices:s.subServices.map((e=>({title:e.title,description:e.description,imageUrl:e.imageUrl})))};o?(await pf.put(`/api/services/${o._id}`,e),h("Service updated successfully","success")):(await pf.post("/api/services",e),h("Service created successfully","success")),g(),y()}catch(u){console.error("Error saving service:",u),h(u.message||"Failed to save service","error")}},children:[(0,rh.jsxs)(rb,{children:[(0,rh.jsx)(nb,{htmlFor:"title",children:"Title"}),(0,rh.jsx)(ib,{type:"text",id:"title",name:"title",value:s.title,onChange:v,placeholder:"Enter service title",required:!0})]}),(0,rh.jsxs)(rb,{children:[(0,rh.jsx)(nb,{htmlFor:"description",children:"Description"}),(0,rh.jsx)(ob,{id:"description",name:"description",value:s.description,onChange:v,placeholder:"Enter service description",required:!0})]}),(0,rh.jsxs)(rb,{children:[(0,rh.jsx)(nb,{htmlFor:"icon",children:"Icon (SVG path)"}),(0,rh.jsx)(ib,{type:"text",id:"icon",name:"icon",value:s.icon,onChange:v,placeholder:"Enter SVG path",required:!0})]}),(0,rh.jsxs)(rb,{children:[(0,rh.jsx)(nb,{htmlFor:"slug",children:"Slug"}),(0,rh.jsx)(ib,{type:"text",id:"slug",name:"slug",value:s.slug,onChange:v,placeholder:"Enter service slug",required:!0})]}),(0,rh.jsxs)(sb,{children:[(0,rh.jsx)(nb,{children:"Sub Services"}),(0,rh.jsx)(lb,{children:s.subServices.map(((e,t)=>(0,rh.jsxs)(cb,{children:[(0,rh.jsx)(db,{onClick:()=>(e=>{l((t=>({...t,subServices:t.subServices.filter(((t,r)=>r!==e))})))})(t),type:"button",children:"\xd7"}),(0,rh.jsxs)(rb,{children:[(0,rh.jsx)(nb,{children:"Sub Service Title"}),(0,rh.jsx)(ib,{type:"text",value:e.title,onChange:e=>x(t,"title",e.target.value),placeholder:"Enter sub service title",required:!0})]}),(0,rh.jsxs)(rb,{children:[(0,rh.jsx)(nb,{children:"Sub Service Description"}),(0,rh.jsx)(ob,{value:e.description,onChange:e=>x(t,"description",e.target.value),placeholder:"Enter sub service description",required:!0})]}),(0,rh.jsxs)(rb,{children:[(0,rh.jsx)(nb,{children:"Image URL"}),(0,rh.jsx)(ib,{type:"url",value:e.imageUrl||"",onChange:e=>x(t,"imageUrl",e.target.value),placeholder:"Enter image URL for sub service"})]})]},t)))}),(0,rh.jsxs)(ub,{type:"button",onClick:()=>{l((e=>({...e,subServices:[...e.subServices,{title:"",description:"",imageUrl:""}]})))},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"16px",height:"16px"},children:[(0,rh.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,rh.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add Sub Service"]})]}),(0,rh.jsx)(Jy,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:o?"Update Service":"Add Service"})]})]})})]})},mb=kn.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,fb=kn.div`
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
`,gb=kn(Ed.button)`
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
`,vb=kn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`,xb=kn(Ed.div)`
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
`,yb=kn.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${xb}:hover & {
    transform: scale(1.05);
  }
`,bb=kn.div`
  padding: 1.5rem;
`,wb=kn.h3`
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
`,kb=kn.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,jb=kn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Sb=kn.span`
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
`,Eb=kn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,Tb=kn.div`
  display: flex;
  gap: 0.75rem;
`,Cb=kn(Ed.button)`
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
`,_b=kn(Ed.div)`
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
`,Pb=kn(Ed.div)`
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
`,Lb=kn.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Rb=kn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ab=kn.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 0.875rem;
`,zb=kn.input`
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
`,Ob=kn.textarea`
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
`,Nb=kn.button`
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
`,Db=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(!1),[o,a]=(0,n.useState)(null),[s,l]=(0,n.useState)({title:"",content:"",author:"",tags:"",image:"",date:(new Date).toISOString().split("T")[0]}),[c,d]=(0,n.useState)(!1),[u,p]=(0,n.useState)(!0),{addToast:h}=dh();(0,n.useEffect)((()=>{m()}),[]);const m=async()=>{try{p(!0);const e={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}};console.log("Fetching contents with config:",e);const r=await Wp.get("/api/content",e);console.log("Fetch response:",r),t(r.data)}catch(l){var e,r,n,i,o,a,s;console.error("Fetch error details:",{message:l.message,status:null===(e=l.response)||void 0===e?void 0:e.status,statusText:null===(r=l.response)||void 0===r?void 0:r.statusText,data:null===(n=l.response)||void 0===n?void 0:n.data,config:l.config});const t=(null===(i=l.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.message)||(null===(a=l.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.error)||"Error fetching blog posts";h(t,"error")}finally{p(!1)}},f=()=>{i(!1),a(null),l({title:"",content:"",author:"",tags:"",image:"",date:(new Date).toISOString().split("T")[0]})};return u?(0,rh.jsx)(mb,{children:(0,rh.jsx)(km,{})}):(0,rh.jsxs)(mb,{children:[(0,rh.jsxs)(fb,{children:[(0,rh.jsxs)("h1",{children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),(0,rh.jsx)("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),"Blog Management"]}),(0,rh.jsxs)(gb,{onClick:()=>{a(null),l({title:"",content:"",author:"",tags:"",image:"",date:(new Date).toISOString().split("T")[0]}),i(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,rh.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add New Blog Post"]})]}),(0,rh.jsx)(vb,{children:e.map((e=>(0,rh.jsxs)(xb,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.image&&(0,rh.jsx)(yb,{src:e.image,alt:e.title}),(0,rh.jsxs)(bb,{children:[(0,rh.jsxs)(wb,{children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),(0,rh.jsx)("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),e.title]}),(0,rh.jsxs)(kb,{children:[e.content.substring(0,150),"..."]}),(0,rh.jsx)(jb,{children:e.tags.map((e=>(0,rh.jsxs)(Sb,{children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),(0,rh.jsx)("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),e]},e)))}),(0,rh.jsxs)(Eb,{children:[(0,rh.jsxs)("span",{children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",marginRight:"4px"},children:[(0,rh.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,rh.jsx)("circle",{cx:"12",cy:"7",r:"4"})]}),e.author]}),(0,rh.jsxs)("span",{children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",marginRight:"4px"},children:[(0,rh.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,rh.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,rh.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,rh.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),new Date(e.date).toLocaleDateString()]})]}),(0,rh.jsxs)(Tb,{children:[(0,rh.jsxs)(Cb,{className:"edit",onClick:()=>(e=>{a(e),l({title:e.title||"",content:e.content||"",author:e.author||"",tags:Array.isArray(e.tags)?e.tags.join(", "):"",image:e.image||"",date:new Date(e.date).toISOString().split("T")[0]}),i(!0)})(e),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,rh.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"Edit"]}),(0,rh.jsxs)(Cb,{className:"delete",onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this blog post?"))try{const t={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}};await Wp.delete(`/api/content/${e}`,t),h("Blog post deleted successfully","success"),m()}catch(o){var t,r,n,i;console.error("Error deleting blog post:",o);const e=(null===(t=o.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||(null===(n=o.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.error)||"Error deleting blog post";h(e,"error")}})(e._id),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,rh.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,rh.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,rh.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"Delete"]})]})]})]},e._id)))}),r&&(0,rh.jsx)(_b,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:f,children:(0,rh.jsxs)(Pb,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,rh.jsx)(Nb,{onClick:f,children:"\xd7"}),(0,rh.jsx)("h2",{children:o?"Edit Blog Post":"Add New Blog Post"}),(0,rh.jsxs)(Lb,{onSubmit:async e=>{e.preventDefault(),d(!0);try{if(!s.title.trim()||!s.content.trim()||!s.author.trim()||!s.date)return h("Please fill in all required fields","error"),void d(!1);const e={title:s.title.trim(),content:s.content.trim(),author:s.author.trim(),date:s.date,tags:s.tags?s.tags.split(",").map((e=>e.trim())).filter((e=>e)):[],...s.image&&{image:s.image.trim()}},i={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`,"Content-Type":"application/json"}};let a;if(console.log("Submitting with data:",e),console.log("Config:",i),console.log("Admin token:",localStorage.getItem("admin_token")),o){const s=`/api/content/${o._id}`;console.log("Making PATCH request to:",s),console.log("Editing content ID:",o._id),console.log("Editing content full object:",o);try{a=await Wp.patch(s,e,i),console.log("Edit response:",a)}catch(x){var t,r,n;throw console.error("Edit request failed:",{url:s,error:x,status:null===(t=x.response)||void 0===t?void 0:t.status,data:null===(r=x.response)||void 0===r?void 0:r.data,headers:null===(n=x.response)||void 0===n?void 0:n.headers,config:x.config,message:x.message,stack:x.stack}),x}}else a=await Wp.post("/api/content",e,i);h(o?"Blog post updated successfully":"Blog post created successfully","success"),f(),await m()}catch(y){var i,a,l,c;if(console.error("Submit error details:",{message:y.message,status:null===(i=y.response)||void 0===i?void 0:i.status,statusText:null===(a=y.response)||void 0===a?void 0:a.statusText,data:null===(l=y.response)||void 0===l?void 0:l.data,config:y.config,headers:null===(c=y.response)||void 0===c?void 0:c.headers,stack:y.stack}),"Network Error"===y.message)h("Network error. Please check your connection and try again.","error");else{var u,p,g,v;const e=(null===(u=y.response)||void 0===u||null===(p=u.data)||void 0===p?void 0:p.message)||(null===(g=y.response)||void 0===g||null===(v=g.data)||void 0===v?void 0:v.error)||y.message||"Error saving blog post";h(e,"error")}}finally{d(!1)}},children:[(0,rh.jsxs)(Rb,{children:[(0,rh.jsx)(Ab,{htmlFor:"title",children:"Title"}),(0,rh.jsx)(zb,{type:"text",id:"title",name:"title",value:s.title,onChange:e=>l((t=>({...t,title:e.target.value}))),placeholder:"Enter blog post title",required:!0})]}),(0,rh.jsxs)(Rb,{children:[(0,rh.jsx)(Ab,{htmlFor:"content",children:"Content"}),(0,rh.jsx)(Ob,{id:"content",name:"content",value:s.content,onChange:e=>l((t=>({...t,content:e.target.value}))),placeholder:"Enter blog post content",required:!0})]}),(0,rh.jsxs)(Rb,{children:[(0,rh.jsx)(Ab,{htmlFor:"author",children:"Author"}),(0,rh.jsx)(zb,{type:"text",id:"author",name:"author",value:s.author,onChange:e=>l((t=>({...t,author:e.target.value}))),placeholder:"Enter author name",required:!0})]}),(0,rh.jsxs)(Rb,{children:[(0,rh.jsx)(Ab,{htmlFor:"image",children:"Image URL"}),(0,rh.jsx)(zb,{type:"url",id:"image",name:"image",value:s.image,onChange:e=>l((t=>({...t,image:e.target.value}))),placeholder:"Enter image URL"})]}),(0,rh.jsxs)(Rb,{children:[(0,rh.jsx)(Ab,{htmlFor:"tags",children:"Tags (comma-separated)"}),(0,rh.jsx)(zb,{type:"text",id:"tags",name:"tags",value:s.tags,onChange:e=>l((t=>({...t,tags:e.target.value}))),placeholder:"e.g., technology, business, news",required:!0})]}),(0,rh.jsxs)(Rb,{children:[(0,rh.jsx)(Ab,{htmlFor:"date",children:"Date"}),(0,rh.jsx)(zb,{type:"date",id:"date",name:"date",value:s.date,onChange:e=>l((t=>({...t,date:e.target.value}))),required:!0})]}),(0,rh.jsx)(Cb,{type:"submit",disabled:c,whileHover:{scale:1.02},whileTap:{scale:.98},children:c?"Saving...":o?"Update Blog Post":"Add Blog Post"})]})]})})]})},Ib=kn.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Mb=kn.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
`,$b=kn(Ed.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Fb=kn.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Bb=kn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ub=kn.label`
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
`,Vb=kn.input`
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
`,Wb=kn.textarea`
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
`,Hb=kn.button`
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
`,qb=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Yb=kn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Xb=kn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Kb=kn.div`
  display: flex;
  gap: 0.5rem;
`,Gb=kn.button`
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
`,Qb=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`,Jb=kn.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Zb=kn.input`
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
`,ew=kn.select`
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
`,tw=kn.button`
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
`,rw=kn.div`
  margin-top: 1rem;
  
  img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 8px;
    object-fit: cover;
  }
`,nw=kn.hr`
  margin: 2rem 0;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,iw=kn($b)`
  background: rgba(255, 255, 255, 0.03);
`,ow=kn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,aw=kn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`,sw=kn.select`
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
`,lw=()=>{const[e,t]=(0,n.useState)({title:"About Us",image:"",paragraphs:[""],highlights:[],founders:{title:"Meet Our Team",founders:[]}}),[r,i]=(0,n.useState)(!0),[o,a]=(0,n.useState)(!1),{addToast:s}=dh();(0,n.useEffect)((()=>{l()}),[]);const l=async()=>{try{var e,r,n,o;i(!0);const[a,s]=await Promise.all([Wp.get("/api/about"),Wp.get("/api/founders").catch((()=>({data:null})))]);t({title:(null===(e=a.data)||void 0===e?void 0:e.title)||"About Us",image:(null===(r=a.data)||void 0===r?void 0:r.image)||"",paragraphs:(null===(n=a.data)||void 0===n?void 0:n.paragraphs)||[""],highlights:(null===(o=a.data)||void 0===o?void 0:o.highlights)||[],founders:s.data||{title:"Meet Our Team",founders:[]}})}catch(a){console.error("Error fetching content:",a),s("Failed to load content","error")}finally{i(!1)}},c=r=>{const{name:n,value:i}=r.target;t({...e,[n]:i})},d=(r,n,i)=>{const o=[...e.highlights];o[r]={...o[r],[n]:"paragraphIndex"===n?parseInt(i):i},t({...e,highlights:o})},u=(r,n,i)=>{const o=[...e.founders.founders];if(n.startsWith("social.")){const e=n.split(".")[1];o[r]={...o[r],social:{...o[r].social,[e]:i}}}else o[r]={...o[r],[n]:i};t({...e,founders:{...e.founders,founders:o}})};return r?(0,rh.jsxs)(Ib,{children:[(0,rh.jsx)(Mb,{children:"About Management"}),(0,rh.jsx)($b,{children:(0,rh.jsx)("p",{children:"Loading..."})})]}):(0,rh.jsxs)(Ib,{children:[(0,rh.jsx)(Mb,{children:"About Management"}),(0,rh.jsx)($b,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:(0,rh.jsxs)(Fb,{onSubmit:async t=>{t.preventDefault(),a(!0);try{const t=localStorage.getItem("admin_token");if(!t)return s("No authentication token found. Please log in again.","error"),void a(!1);if(console.log("Submitting form data:",{about:{title:e.title,image:e.image,paragraphs:e.paragraphs,highlights:e.highlights},founders:{title:e.founders.title,founders:e.founders.founders}}),!e.title.trim())return s("Title is required","error"),void a(!1);if(!e.image.trim())return s("Image URL is required","error"),void a(!1);if(e.paragraphs.some((e=>!e.trim())))return s("All paragraphs must have content","error"),void a(!1);try{console.log("Updating about content...");const r=await Wp.put("/api/about",{title:e.title,image:e.image,paragraphs:e.paragraphs,highlights:e.highlights},{headers:{Authorization:`Bearer ${t}`}});console.log("About update response:",r.data)}catch(l){throw console.error("Error updating about content:",l),l}try{console.log("Updating founders content...");const r={title:e.founders.title,founders:e.founders.founders.map((e=>{var t,r,n,i;return{name:e.name.trim(),bio:e.bio.trim(),image:e.image.trim(),imagePosition:e.imagePosition||"left",social:{github:(null===(t=e.social)||void 0===t?void 0:t.github)||"",portfolio:(null===(r=e.social)||void 0===r?void 0:r.portfolio)||"",linkedin:(null===(n=e.social)||void 0===n?void 0:n.linkedin)||"",instagram:(null===(i=e.social)||void 0===i?void 0:i.instagram)||""}}}))};console.log("Founders data to submit:",r);const n=await Wp.put("/api/founders",r,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},timeout:1e4});console.log("Founders update response:",n.data)}catch(c){throw console.error("Error updating founders content:",c),c.response&&console.error("Founders error response:",c.response.data),c}s("Content updated successfully","success")}catch(d){var r,n,i,o;console.error("Error updating content:",d),console.error("Error response:",null===(r=d.response)||void 0===r?void 0:r.data),console.error("Error request:",d.config),localStorage.getItem("admin_token")?401===(null===(n=d.response)||void 0===n?void 0:n.status)?s("Authentication failed. Please log in again.","error"):400===(null===(i=d.response)||void 0===i?void 0:i.status)?s(d.response.data.message||"Invalid data provided","error"):404===(null===(o=d.response)||void 0===o?void 0:o.status)?s("API endpoint not found. Please check server configuration.","error"):"ECONNABORTED"===d.code?s("Request timed out. Please try again.","error"):d.response?s(`Failed to update content: ${d.message}`,"error"):s("Network error. Please check your connection.","error"):s("No authentication token found. Please log in again.","error")}finally{a(!1)}},children:[(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Title"}),(0,rh.jsx)(Vb,{type:"text",name:"title",value:e.title,onChange:c,required:!0})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Image URL"}),(0,rh.jsx)(Vb,{type:"url",name:"image",value:e.image,onChange:c,required:!0}),e.image&&(0,rh.jsx)(rw,{children:(0,rh.jsx)("img",{src:e.image,alt:"About page image preview",onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/800x450?text=Invalid+Image+URL"}})})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Paragraphs"}),(0,rh.jsx)(qb,{children:e.paragraphs.map(((r,n)=>(0,rh.jsxs)(Yb,{children:[(0,rh.jsxs)(Xb,{children:[(0,rh.jsxs)(Ub,{children:["Paragraph ",n+1]}),(0,rh.jsx)(Kb,{children:(0,rh.jsx)(Gb,{type:"button",onClick:()=>(r=>{if(e.paragraphs.length<=1)return void s("Cannot remove the last paragraph","error");const n=e.paragraphs.filter(((e,t)=>t!==r)),i=e.highlights.map((e=>e.paragraphIndex===r?null:e.paragraphIndex>r?{...e,paragraphIndex:e.paragraphIndex-1}:e)).filter(Boolean);t({...e,paragraphs:n,highlights:i})})(n),danger:!0,children:"Remove"})})]}),(0,rh.jsx)(Wb,{value:r,onChange:r=>((r,n)=>{const i=[...e.paragraphs];i[r]=n,t({...e,paragraphs:i})})(n,r.target.value),required:!0})]},n)))}),(0,rh.jsx)(tw,{type:"button",onClick:()=>{t({...e,paragraphs:[...e.paragraphs,""]})},children:"+ Add Paragraph"})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Highlights"}),(0,rh.jsx)(Qb,{children:e.highlights.map(((r,n)=>(0,rh.jsxs)(Jb,{children:[(0,rh.jsx)(Zb,{type:"text",value:r.text,onChange:e=>d(n,"text",e.target.value),placeholder:"Highlight text"}),(0,rh.jsx)(ew,{value:r.paragraphIndex,onChange:e=>d(n,"paragraphIndex",e.target.value),children:e.paragraphs.map(((e,t)=>(0,rh.jsxs)("option",{value:t,children:["Paragraph ",t+1]},t)))}),(0,rh.jsx)(Gb,{type:"button",onClick:()=>(r=>{const n=e.highlights.filter(((e,t)=>t!==r));t({...e,highlights:n})})(n),danger:!0,children:"Remove"})]},n)))}),(0,rh.jsx)(tw,{type:"button",onClick:()=>{t({...e,highlights:[...e.highlights,{text:"",paragraphIndex:0}]})},children:"+ Add Highlight"})]}),(0,rh.jsx)(nw,{}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Founders Section Title"}),(0,rh.jsx)(Vb,{type:"text",value:e.founders.title,onChange:r=>{t({...e,founders:{...e.founders,title:r.target.value}})},required:!0})]}),e.founders.founders.map(((r,n)=>(0,rh.jsxs)(iw,{children:[(0,rh.jsxs)(ow,{children:[(0,rh.jsxs)(Ub,{children:["Founder ",n+1]}),(0,rh.jsx)(Gb,{type:"button",onClick:()=>(r=>{const n=e.founders.founders.filter(((e,t)=>t!==r));t({...e,founders:{...e.founders,founders:n}})})(n),danger:!0,children:"Remove Founder"})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Name"}),(0,rh.jsx)(Vb,{type:"text",value:r.name,onChange:e=>u(n,"name",e.target.value),required:!0})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Bio"}),(0,rh.jsx)(Wb,{value:r.bio,onChange:e=>u(n,"bio",e.target.value),required:!0})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Image URL"}),(0,rh.jsx)(Vb,{type:"url",value:r.image,onChange:e=>u(n,"image",e.target.value),required:!0}),r.image&&(0,rh.jsx)(rw,{children:(0,rh.jsx)("img",{src:r.image,alt:`${r.name} preview`,onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/250?text=Invalid+Image+URL"}})})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Image Position"}),(0,rh.jsxs)(sw,{value:r.imagePosition,onChange:e=>u(n,"imagePosition",e.target.value),children:[(0,rh.jsx)("option",{value:"left",children:"Left"}),(0,rh.jsx)("option",{value:"right",children:"Right"})]})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Social Links"}),(0,rh.jsxs)(aw,{children:[(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"GitHub"}),(0,rh.jsx)(Vb,{type:"url",value:r.social.github,onChange:e=>u(n,"social.github",e.target.value),placeholder:"https://github.com/username"})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Portfolio"}),(0,rh.jsx)(Vb,{type:"url",value:r.social.portfolio,onChange:e=>u(n,"social.portfolio",e.target.value),placeholder:"https://portfolio.com"})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"LinkedIn"}),(0,rh.jsx)(Vb,{type:"url",value:r.social.linkedin,onChange:e=>u(n,"social.linkedin",e.target.value),placeholder:"https://linkedin.com/in/username"})]}),(0,rh.jsxs)(Bb,{children:[(0,rh.jsx)(Ub,{children:"Instagram"}),(0,rh.jsx)(Vb,{type:"url",value:r.social.instagram,onChange:e=>u(n,"social.instagram",e.target.value),placeholder:"https://instagram.com/username"})]})]})]})]},n))),(0,rh.jsx)(tw,{type:"button",onClick:()=>{t({...e,founders:{...e.founders,founders:[...e.founders.founders,{name:"",bio:"",image:"",imagePosition:"left",social:{github:"",portfolio:"",linkedin:"",instagram:""}}]}})},children:"+ Add Founder"}),(0,rh.jsx)(Hb,{type:"submit",disabled:o,children:o?"Saving...":"Save All Changes"})]})})]})},cw=kn.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,dw=kn.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-text);
`,uw=kn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`,pw=kn.div`
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
`,hw=kn.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`,mw=kn.div`
  flex: 1;
`,fw=kn.h3`
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`,gw=kn.span`
  font-size: 0.8rem;
  color: var(--color-text-light);
  background: var(--color-bg-tertiary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: capitalize;
`,vw=kn.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`,xw=kn.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,yw=kn.button`
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
`,bw=kn.div`
  margin-bottom: 1rem;
  color: var(--color-text-light);
  font-size: 0.9rem;
`,ww=kn.button`
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
`,kw=kn.div`
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
`,jw=kn.button`
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
`,Sw=kn.button`
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
`,Ew=kn.div`
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
`,Tw=kn.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`,Cw=kn.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`,_w=kn.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Pw=kn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Lw=kn.label`
  font-weight: 500;
  color: var(--color-text);
`,Rw=kn.input`
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg-secondary);
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,Aw=kn.select`
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg-secondary);
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,zw=kn.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`,Ow=kn.button`
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
`,Nw=kn.button`
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
`,Dw=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)("all"),[o,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(!1),[u,p]=(0,n.useState)(!0),[h,m]=(0,n.useState)(null),[f,g]=(0,n.useState)(!1),[v,x]=(0,n.useState)({name:"",logo:"",category:"frontend",isSelected:!1}),[y,b]=(0,n.useState)(!1),w=["all","frontend","backend","database","design","devops","api"];(0,n.useEffect)((()=>{k()}),[]);const k=async()=>{try{p(!0);const e=await uf();t(e.data.technologies)}catch(e){console.error("Error fetching technologies:",e),m({type:"error",message:"Failed to fetch technologies. Please try again."})}finally{p(!1)}},j=e=>{const{name:t,value:r,type:n,checked:i}=e.target;x({...v,[t]:"checkbox"===n?i:r})},S="all"===r?e:e.filter((e=>e.category===r)),E=e.filter((e=>e.isSelected)).length;return u?(0,rh.jsxs)(cw,{children:[(0,rh.jsx)(dw,{children:"Technology Management"}),(0,rh.jsx)("p",{children:"Loading technologies..."})]}):(0,rh.jsxs)(cw,{children:[(0,rh.jsx)(dw,{children:"Technology Management"}),h&&(0,rh.jsx)(kw,{type:h.type,children:h.message}),(0,rh.jsxs)(bw,{children:[E," technologies selected for display"]}),(0,rh.jsx)(xw,{children:w.map((e=>(0,rh.jsx)(yw,{active:r===e,onClick:()=>i(e),children:e.charAt(0).toUpperCase()+e.slice(1)},e)))}),(0,rh.jsx)(uw,{children:S.map((r=>(0,rh.jsxs)(pw,{selected:r.isSelected,children:[(0,rh.jsx)(hw,{src:r.logo,alt:r.name}),(0,rh.jsxs)(mw,{children:[(0,rh.jsx)(fw,{children:r.name}),(0,rh.jsx)(gw,{children:r.category})]}),(0,rh.jsx)(vw,{type:"checkbox",checked:r.isSelected,onChange:()=>(r=>{const n=e.map((e=>e._id===r?{...e,isSelected:!e.isSelected}:e));t(n),a(!0)})(r._id)})]},r._id)))}),(0,rh.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,rh.jsx)(ww,{onClick:async()=>{l(!0);try{const r=await(e=>df.put("/api/technologies",{technologies:e}))(e);if(!r.data.success)throw new Error(r.data.message||"Failed to save technologies");a(!1),m({type:"success",message:r.data.message||"Technologies saved successfully!"}),r.data.data&&r.data.data.technologies&&t(r.data.data.technologies)}catch(i){var r,n;console.error("Error saving technologies:",i),m({type:"error",message:(null===(r=i.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Failed to save technologies. Please try again."})}finally{l(!1),setTimeout((()=>m(null)),3e3)}},disabled:!o||s,children:s?"Saving...":"Save Changes"}),(0,rh.jsx)(Sw,{onClick:()=>g(!0),children:"Add Technology"}),(0,rh.jsx)(jw,{onClick:async()=>{if(window.confirm("This will initialize the database with technologies from the JSON file. Continue?")){d(!0);try{const e=await Wp.post("/api/technologies/initialize");if(!e.data.success)throw new Error(e.data.message||"Failed to initialize technologies");m({type:"success",message:`Technologies initialized successfully! ${e.data.count} technologies added.`}),k()}catch(r){var e,t;console.error("Error initializing technologies:",r),m({type:"error",message:(null===(e=r.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Failed to initialize technologies. Please try again."})}finally{d(!1),setTimeout((()=>m(null)),3e3)}}},disabled:c||e.length>0,children:c?"Initializing...":"Initialize from JSON"})]}),f&&(0,rh.jsx)(Ew,{children:(0,rh.jsxs)(Tw,{children:[(0,rh.jsx)(Cw,{children:"Add New Technology"}),(0,rh.jsxs)(_w,{onSubmit:async r=>{r.preventDefault(),b(!0);try{const r=await(e=>df.post("/api/technologies",e))(v);if(!r.data)throw new Error("Failed to add technology");m({type:"success",message:"Technology added successfully!"}),t([...e,r.data]),x({name:"",logo:"",category:"frontend",isSelected:!1}),g(!1)}catch(o){var n,i;console.error("Error adding technology:",o),m({type:"error",message:(null===(n=o.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.message)||"Failed to add technology. Please try again."})}finally{b(!1),setTimeout((()=>m(null)),3e3)}},children:[(0,rh.jsxs)(Pw,{children:[(0,rh.jsx)(Lw,{htmlFor:"name",children:"Name"}),(0,rh.jsx)(Rw,{type:"text",id:"name",name:"name",value:v.name,onChange:j,required:!0})]}),(0,rh.jsxs)(Pw,{children:[(0,rh.jsx)(Lw,{htmlFor:"logo",children:"Logo URL"}),(0,rh.jsx)(Rw,{type:"url",id:"logo",name:"logo",value:v.logo,onChange:j,required:!0})]}),(0,rh.jsxs)(Pw,{children:[(0,rh.jsx)(Lw,{htmlFor:"category",children:"Category"}),(0,rh.jsx)(Aw,{id:"category",name:"category",value:v.category,onChange:j,required:!0,children:w.filter((e=>"all"!==e)).map((e=>(0,rh.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e)))})]}),(0,rh.jsx)(Pw,{children:(0,rh.jsxs)(Lw,{children:[(0,rh.jsx)(Rw,{type:"checkbox",name:"isSelected",checked:v.isSelected,onChange:j}),"Selected for display"]})}),(0,rh.jsxs)(zw,{children:[(0,rh.jsx)(Ow,{type:"button",onClick:()=>g(!1),children:"Cancel"}),(0,rh.jsx)(Nw,{type:"submit",disabled:y,children:y?"Adding...":"Add Technology"})]})]})]})})]})},Iw=kn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,Mw=kn(Ed.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid ${e=>e.recent?"rgba(16, 185, 129, 0.3)":"rgba(255, 255, 255, 0.05)"};
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
`,$w=kn.h3`
  color: ${e=>e.theme.colors.gray};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,Fw=kn.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${e=>e.recent?"#10B981":e.theme.colors.text};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`,Bw=kn.div`
  font-size: 0.9rem;
  color: ${e=>e.positive?"#10B981":"#EF4444"};
`,Uw=kn.div`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Vw=kn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,Ww=kn.h3`
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.text};
`,Hw=kn.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,qw=kn.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,Yw=kn.div`
  width: 40px;
  height: 40px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
`,Xw=kn.div`
  flex: 1;
`,Kw=kn.h4`
  color: ${e=>e.recent?"#10B981":e.theme.colors.text};
  margin: 0;
  font-size: 0.95rem;
  transition: color 0.3s ease;
`,Gw=kn.p`
  color: ${e=>e.theme.colors.gray};
  margin: 0;
  font-size: 0.85rem;
`,Qw=()=>{const[e,t]=(0,n.useState)(!0),[r,i]=(0,n.useState)([]),[o,a]=(0,n.useState)({totalProjects:{count:"0",recent:!1},totalServices:{count:"0",recent:!1},totalBlogs:{count:"0",recent:!1},totalVisitors:{count:"0",recent:!1}}),{addToast:s}=dh(),l=e=>{const t=new Date(e),r=new Date;return Math.abs(r-t)/36e5<=48};return(0,n.useEffect)((()=>{(async()=>{try{const e={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}},t=(await Wp.get("/api/projects",e)).data,r=t.some((e=>l(e.updatedAt||e.createdAt))),n=(await Wp.get("/api/services",e)).data.data,i=n.some((e=>l(e.createdAt))),o=(await Wp.get("/api/content",e)).data,s=o.some((e=>l(e.date)));a({TotalProjects:{count:t.length.toString(),recent:r},TotalServices:{count:n.length.toString(),recent:i},TotalBlogs:{count:o.length.toString(),recent:s},TotalVisitors:{count:"0",recent:!1}})}catch(e){console.error("Error fetching stats:",e),s("Error fetching statistics","error")}})(),(async()=>{try{t(!0);const e={headers:{Authorization:`Bearer ${localStorage.getItem("admin_token")}`}},r=(await Wp.get("/api/content",e)).data.sort(((e,t)=>new Date(t.date)-new Date(e.date))).slice(0,2).map((e=>({icon:"\ud83d\udcdd",title:`New blog post: ${e.title}`,time:new Date(e.date).toLocaleDateString(),date:e.date,isRecent:l(e.date)}))),n=(await Wp.get("/api/projects",e)).data.sort(((e,t)=>new Date(t.createdAt)-new Date(e.createdAt))).slice(0,2).map((e=>({icon:"\ud83d\udee0\ufe0f",title:`Project updated: ${e.title}`,time:new Date(e.updatedAt).toLocaleDateString(),date:e.updatedAt,isRecent:l(e.updatedAt)}))),o=(await Wp.get("/api/services",e)).data.data.sort(((e,t)=>new Date(t.createdAt)-new Date(e.createdAt))).slice(0,2).map((e=>({icon:"\u2b50",title:`New service: ${e.title}`,time:new Date(e.createdAt).toLocaleDateString(),date:e.createdAt,isRecent:l(e.createdAt)}))),a=[...r,...n,...o].sort(((e,t)=>new Date(t.date)-new Date(e.date))).slice(0,4);i(a)}catch(e){console.error("Error fetching recent activities:",e),s("Error fetching recent activities","error")}finally{t(!1)}})()}),[]),e?(0,rh.jsx)(Iw,{children:(0,rh.jsx)(km,{})}):(0,rh.jsxs)(rh.Fragment,{children:[(0,rh.jsx)(Iw,{children:Object.entries(o).map(((e,t)=>{let[r,n]=e;return(0,rh.jsxs)(Mw,{recent:n.recent,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1*t},children:[(0,rh.jsx)($w,{children:r.replace(/([A-Z])/g," $1").trim()}),(0,rh.jsx)(Fw,{recent:n.recent,children:n.count}),(0,rh.jsx)(Bw,{positive:n.recent,children:"+0%"})]},r)}))}),(0,rh.jsxs)(Uw,{children:[(0,rh.jsx)(Vw,{children:(0,rh.jsx)(Ww,{children:"Recent Activity"})}),(0,rh.jsx)(Hw,{children:r.map(((e,t)=>(0,rh.jsxs)(qw,{as:Ed.div,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:.1*t},children:[(0,rh.jsx)(Yw,{children:e.icon}),(0,rh.jsxs)(Xw,{children:[(0,rh.jsx)(Kw,{recent:e.isRecent,children:e.title}),(0,rh.jsx)(Gw,{children:e.time})]})]},e.title)))})]})]})},Jw=kn.div`
  min-height: 100vh;
  display: flex;
  background: ${e=>e.theme.colors.darkBackground};
  color: ${e=>e.theme.colors.text};
  position: relative;
  overflow: hidden;
`,Zw=kn.div`
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
`,ek=kn(Ed.div)`
  width: 280px;
  background: rgba(18, 18, 18, 0.6);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem 1.5rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`,tk=kn(Ed.div)`
  flex: 1;
  padding: 2.5rem;
  background: ${e=>e.theme.colors.background};
  position: relative;
  z-index: 1;
  overflow-y: auto;
`,rk=kn.div`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,nk=kn.h1`
  color: ${e=>e.theme.colors.primary};
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`,ik=kn.div`
  flex: 1;
`,ok=kn.div`
  color: ${e=>e.theme.colors.gray};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
`,ak=kn(Pe)`
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
`,sk=kn(Ed.button)`
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
`,lk=(kn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,kn.h2`
  font-size: 1.8rem;
  margin: 0;
`,kn(Ed.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,kn.div`
  margin-top: 1rem;
`,kn(Pe)`
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
`,kn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`,kn(Ed.div)`
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
`,kn(Ed.div)`
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
`,()=>{const{user:e,logout:t}=oh(),r=Z(),n=Q();return(0,rh.jsxs)(Jw,{children:[(0,rh.jsx)(Zw,{}),(0,rh.jsxs)(ek,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.3},children:[(0,rh.jsxs)(rk,{children:[(0,rh.jsx)(nk,{children:"Admin Dashboard"}),(0,rh.jsxs)("p",{children:["Welcome, ",null===e||void 0===e?void 0:e.username]})]}),(0,rh.jsxs)(ik,{children:[(0,rh.jsx)(ok,{children:"Navigation"}),(0,rh.jsx)(ak,{to:"/admin",active:"/admin"===n.pathname,children:"Dashboard"}),(0,rh.jsx)(ak,{to:"/admin/projects",active:"/admin/projects"===n.pathname,children:"Projects"}),(0,rh.jsx)(ak,{to:"/admin/services",active:"/admin/services"===n.pathname,children:"Services"}),(0,rh.jsx)(ak,{to:"/admin/content",active:"/admin/content"===n.pathname,children:"Blogs"}),(0,rh.jsx)(ak,{to:"/admin/about",active:"/admin/about"===n.pathname,children:"About"}),(0,rh.jsx)(ak,{to:"/admin/technologies",active:"/admin/technologies"===n.pathname,children:"Technologies"})]}),(0,rh.jsx)(sk,{onClick:()=>{t(),r("/admin/login")},children:"Logout"})]}),(0,rh.jsx)(tk,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,rh.jsxs)(xe,{children:[(0,rh.jsx)(ge,{path:"/",element:(0,rh.jsx)(Qw,{})}),(0,rh.jsx)(ge,{path:"/projects",element:(0,rh.jsx)(By,{})}),(0,rh.jsx)(ge,{path:"/services",element:(0,rh.jsx)(hb,{})}),(0,rh.jsx)(ge,{path:"/content",element:(0,rh.jsx)(Db,{})}),(0,rh.jsx)(ge,{path:"/about",element:(0,rh.jsx)(lw,{})}),(0,rh.jsx)(ge,{path:"/technologies",element:(0,rh.jsx)(Dw,{})})]})})]})}),ck=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    padding-bottom: 3rem;
  }
`,dk=kn.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  h1 {
    color: ${e=>e.theme.colors.text};
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 0.8rem;
    }
  }

  p {
    color: ${e=>e.theme.colors.textSecondary};
    font-size: clamp(1rem, 2vw, 1.1rem);
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`,uk=kn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,pk=kn(Ed.div)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid rgba(66, 153, 225, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`,hk=kn.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  @media (max-width: 480px) {
    height: 180px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,mk=kn.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`,fk=kn.h2`
  color: ${e=>e.theme.colors.text};
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  margin-bottom: 1rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${e=>e.theme.colors.primary};
    }
  }
`,gk=kn.p`
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: clamp(1rem, 2vw, 1.1rem);

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`,vk=kn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 0.8rem;
  }
`,xk=kn.span`
  background: ${e=>e.theme.colors.primary}20;
  color: ${e=>e.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);

  @media (max-width: 480px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
  }
`,yk=kn.div`
  display: flex;
  justify-content: space-between;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);
  padding-top: 1rem;
  border-top: 1px solid ${e=>e.theme.colors.border};

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding-top: 0.8rem;
  }
`,bk=kn.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
`,wk=kn.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 0.5rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 0.6rem;
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}20;
  }
`,kk=kn.select`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 0.5rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 0.6rem;
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}20;
  }
`,jk=kn.span`
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
`,Sk=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(!0),[o,a]=(0,n.useState)(""),[s,l]=(0,n.useState)("all"),[c,d]=(0,n.useState)([]);(0,n.useEffect)((()=>{u()}),[]);const u=async()=>{try{const e=await Wp.get("/api/content");t(e.data);const r=[...new Set(e.data.flatMap((e=>e.tags)))];d(r),i(!1)}catch(e){console.error("Error fetching blog posts:",e),i(!1)}},p=e.filter((e=>{const t=e.title.toLowerCase().includes(o.toLowerCase())||e.content.toLowerCase().includes(o.toLowerCase())||e.author.toLowerCase().includes(o.toLowerCase()),r="all"===s||e.tags.includes(s);return t&&r}));return(0,rh.jsxs)(ck,{children:[(0,rh.jsxs)(dk,{children:[(0,rh.jsxs)(Ed.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:["Our ",(0,rh.jsx)(jk,{children:"Blog"})]}),(0,rh.jsx)(Ed.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Discover insights, updates, and stories from our team"})]}),r?(0,rh.jsx)(km,{}):(0,rh.jsx)(rh.Fragment,{children:(0,rh.jsxs)(bk,{children:[(0,rh.jsx)(Ed.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},style:{flex:1},children:(0,rh.jsx)(wk,{type:"text",placeholder:"Search posts...",value:o,onChange:e=>a(e.target.value)})}),(0,rh.jsx)(Ed.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:(0,rh.jsxs)(kk,{value:s,onChange:e=>l(e.target.value),children:[(0,rh.jsx)("option",{value:"all",children:"All Tags"}),c.map((e=>(0,rh.jsx)("option",{value:e,children:e},e)))]})})]})}),(0,rh.jsx)(uk,{children:p.map(((e,t)=>(0,rh.jsxs)(pk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t,type:"spring",stiffness:100},whileHover:{y:-5,transition:{duration:.2}},children:[e.image&&(0,rh.jsx)(Ed.div,{initial:{scale:1},whileHover:{scale:1.05},transition:{duration:.3},children:(0,rh.jsx)(hk,{children:(0,rh.jsx)("img",{src:e.image,alt:e.title})})}),(0,rh.jsxs)(mk,{children:[(0,rh.jsx)(fk,{children:(0,rh.jsx)(Pe,{to:`/blog/${e._id}`,children:e.title})}),(0,rh.jsxs)(gk,{children:[e.content.substring(0,150),"..."]}),(0,rh.jsx)(vk,{children:e.tags.map(((e,t)=>(0,rh.jsx)(Ed.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.5+.1*t},children:(0,rh.jsx)(xk,{children:e})},e)))}),(0,rh.jsxs)(yk,{children:[(0,rh.jsx)(Ed.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},children:e.author}),(0,rh.jsx)(Ed.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},children:new Date(e.date).toLocaleDateString()})]})]})]},e._id)))})]})},Ek=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    padding-bottom: 3rem;
  }
`,Tk=kn.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    background: linear-gradient(90deg,#2563eb, rgb(255, 255, 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 1rem;
    line-height: 1.3;

    @media (max-width: 768px) {
      margin-bottom: 0.8rem;
    }
  }

  .meta {
    color: ${e=>e.theme.colors.textSecondary};
    max-width: 1200px;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    display: flex;
    justify-content: right;
    gap: 1rem;
    margin-bottom: rem;
    padding: 0rem 0;

    @media (max-width: 480px) {
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      padding-bottom: 1rem ;
    }
  }

  .date {
    color: ${e=>e.theme.colors.textSecondary};
    font-size: clamp(0.9rem, 1.5vw, 1rem);
  }
`,Ck=kn.div`
  color: ${e=>e.theme.colors.text};
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  max-width: 1200px;
  margin: 0 auto;

  p {
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      margin-bottom: 1.2rem;
    }
  }
`,_k=kn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content:left;

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1.5rem;
  }
`,Pk=kn.span`
  background: ${e=>e.theme.colors.primary}20;
  color: ${e=>e.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 0.8rem;
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);

  @media (max-width: 480px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
  }
`,Lk=kn(Pe)`
  display: inline-flex;
  align-items: center;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
  font-size: clamp(0.9rem, 1.5vw, 1rem);

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }

  &:hover {
    color: ${e=>e.theme.colors.primaryDark};
    transform: translateX(-5px);
  }

  svg {
    margin-right: 0.5rem;
    width: clamp(16px, 2vw, 18px);
    height: clamp(16px, 2vw, 18px);
  }
`,Rk=kn.div`
  width: 100%;
  height: clamp(200px, 40vw, 300px);
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,Ak=()=>{const{id:e}=ee(),[t,r]=(0,n.useState)(null),[i,o]=(0,n.useState)(!0);(0,n.useEffect)((()=>{a()}),[e]);const a=async()=>{try{const t=await Wp.get(`/api/content/${e}`);r(t.data),o(!1)}catch(t){console.error("Error fetching blog post:",t),o(!1)}};return t?(0,rh.jsx)(Ek,{children:i?(0,rh.jsx)(km,{}):(0,rh.jsxs)(rh.Fragment,{children:[(0,rh.jsx)(Ed.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},children:(0,rh.jsxs)(Lk,{to:"/blog",children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Blog"]})}),(0,rh.jsxs)(Tk,{children:[(0,rh.jsx)(Ed.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:t.title}),t.image&&(0,rh.jsx)(Ed.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:(0,rh.jsx)(Rk,{children:(0,rh.jsx)("img",{src:t.image,alt:t.title})})}),(0,rh.jsxs)(Ed.div,{className:"meta",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[(0,rh.jsxs)("span",{children:["By ",t.author]}),(0,rh.jsx)("span",{children:"/"}),(0,rh.jsx)("span",{className:"date",children:new Date(t.date).toLocaleDateString()})]}),(0,rh.jsx)(Ed.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:(0,rh.jsx)(_k,{children:t.tags.map(((e,t)=>(0,rh.jsx)(Ed.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.5+.1*t},children:(0,rh.jsx)(Pk,{children:e})},e)))})})]}),(0,rh.jsx)(Ed.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:(0,rh.jsx)(Ck,{children:t.content.split("\n").map(((e,t)=>(0,rh.jsx)("p",{children:e},t)))})})]})}):(0,rh.jsx)(Ek,{children:i?(0,rh.jsx)(km,{}):(0,rh.jsx)(rh.Fragment,{children:(0,rh.jsxs)(Tk,{children:[(0,rh.jsx)("h1",{children:"Post not found"}),(0,rh.jsxs)(Lk,{to:"/blog",children:[(0,rh.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,rh.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Blog"]})]})})})},zk=kn.div`

  margin: 0 auto;
  width: 100%;
  font-family: 'Inter', sans-serif;
  background: #0a0a0a;
  color: var(--color-text-primary);
  min-height: 100vh;
`,Ok=kn.div`
  background: linear-gradient(135deg, rgba(var(--color-primary-rgb), -0.7) 15%,hsl(217, 76.70%,48.80%) 150%);
  padding: clamp(3rem, 8vw, 6rem) 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: clamp(2rem, 5vw, 4rem);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
`,Nk=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(1rem, 3vw, 2rem);

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,Dk=kn.div`
  position: absolute;
  width: clamp(300px, 60vw, 600px);
  height: clamp(300px, 60vw, 600px);
  background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1) 0%, rgba(var(--color-primary-rgb), 0) 70%);
  border-radius: 50%;
  top: -200px;
  left: -200px;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
  filter: blur(40px);

  @media (max-width: 768px) {
    top: -100px;
    left: -100px;
  }

  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(20px, 20px) rotate(5deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
`,Ik=kn(Ed.h1)`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  max-width: 1200px;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    text-align: center;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    border-radius: 2px;
    transition: width 0.3s ease;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover::after {
    width: 100px;
  }
`,Mk=kn(Ed.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: var(--color-text-secondary);
  max-width: 1200px;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  position: relative;
  padding-left: 1.5rem;
  border-left: 3px solid rgba(var(--color-primary-rgb), 0.2);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding-left: 0;
    border-left: none;
    text-align: center;
  }
`,$k=kn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: clamp(3rem, 8vw, 6rem);
`,Fk=kn(Ed.h2)`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--color-heading);
  margin-bottom: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 120px;
  }
`,Bk=kn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  margin-top: clamp(1.5rem, 4vw, 3rem);
  padding: 1rem 0 clamp(3rem, 8vw, 6rem) 0;
`,Uk=kn(Ed.div)`
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

  @media (max-width: 768px) {
    border-radius: 16px;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(var(--color-primary-rgb), 0.3);
  }

  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1) 0%, rgba(var(--color-primary-rgb), 0) 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,Vk=kn(Ed.img)`
  width: 100%;
  height: clamp(180px, 30vw, 240px);
  object-fit: cover;
  display: block;
  background-color: rgba(var(--color-primary-rgb), 0.2);
  border-bottom: 1px solid var(--color-border);
  transform-origin: center;
  transition: transform 0.3s ease;
  filter: grayscale(20%);

  ${Uk}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
`,Wk=kn.div`
  padding: clamp(1.5rem, 3vw, 2rem);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`,Hk=kn.h3`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  margin-bottom: clamp(0.8rem, 2vw, 1rem);
  color: var(--color-heading);
  position: relative;
  padding-bottom: 0.8rem;
  font-weight: 600;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 50px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  ${Uk}:hover &::after {
    width: 100px;
  }
`,qk=kn.p`
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 0.5rem;
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  transition: color 0.3s ease;

  ${Uk}:hover & {
    color: var(--color-text-primary);
  }
`,Yk=kn(Ed.button)`
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-text-primary);
  border: none;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2.5rem);
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: clamp(1rem, 2vw, 1.5rem);
  box-shadow: 0 4px 15px rgba(var(--color-primary-rgb), 0.3);
  position: relative;
  overflow: hidden;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
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
`,Xk=kn.div`
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
`,Kk=kn.span`
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
`,Gk=()=>{const{id:e}=ee(),t=Q(),[r,i]=(0,n.useState)(null),[o,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null),c=t.state||{};if((0,n.useEffect)((()=>{i({_id:"67f0e71133569e2019f8aa0f",title:"New Service",slug:"new",description:"New Service demo",icon:"\u2728",createdAt:"1743841041056",updatedAt:"1743841041059",subServices:[{title:"Sub-services",description:"Sub-services Description",imageUrl:"https://placehold.co/800x400/6d43b8/ffffff?text=Sub-services",features:[],_id:"67f0eec59a0bdd0a4cb8741a"},{title:"Second sub service",description:"Second sub",imageUrl:"https://placehold.co/800x400/9a7ed0/ffffff?text=Second+Sub+Service",features:[],_id:"67f0eec59a0bdd0a4cb8741b"}]}),a(!1);e&&(async()=>{try{a(!0);const t=await pf.get(`/api/services/slug/${e}`);if(!t.data||!t.data.success)throw new Error(t.data&&t.data.message||"Failed to fetch service details");const r=t.data.data;r.subServices||(r.subServices=[]),i(r)}catch(t){console.error("Error fetching service details:",t),l(t.message||"Failed to load service details")}finally{a(!1)}})()}),[e,c]),(0,n.useEffect)((()=>{if(!r||!r.subServices)return;const e=r.subServices;e.length>0&&e.forEach(((e,t)=>{if(e.imageUrl){const r=new Image;r.onload=()=>console.log(`Image ${t} loaded: ${e.imageUrl}`),r.onerror=()=>{console.error(`Image ${t} failed to load: ${e.imageUrl}`)},r.src=e.imageUrl}}))}),[r]),o)return(0,rh.jsx)(zk,{children:(0,rh.jsx)(km,{})});if(s)return(0,rh.jsx)(zk,{children:(0,rh.jsx)(Xk,{children:s})});if(!r)return(0,rh.jsx)(zk,{children:(0,rh.jsx)(Xk,{children:"Service not found"})});const d=Array.isArray(r.subServices)&&r.subServices.length>0?r.subServices:[];return(0,rh.jsxs)(zk,{children:[(0,rh.jsxs)(Ok,{children:[(0,rh.jsx)(Dk,{}),(0,rh.jsx)(Nk,{children:(0,rh.jsxs)(Hn,{children:[(0,rh.jsx)(Ik,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:r.title}),(0,rh.jsx)(Mk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:r.description}),(0,rh.jsx)(Yk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,rh.jsxs)("a",{href:"/contact",children:["Request ",r.title]})})]})})]}),(0,rh.jsxs)($k,{children:[d.length>0&&(0,rh.jsxs)(rh.Fragment,{children:[(0,rh.jsxs)(Fk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:["Our ",(0,rh.jsx)(Kk,{children:"Services"})]}),(0,rh.jsx)(Bk,{children:(0,rh.jsx)(Hn,{children:d.map(((e,t)=>(0,rh.jsxs)(Uk,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},whileHover:{y:-8},children:[(0,rh.jsx)(Vk,{src:e.imageUrl||"https://placehold.co/800x400/cccccc/666666?text=No+Image",alt:e.title||"Untitled Service",onLoad:e=>{e.target.style.display="block"},onError:e=>{e.target.onerror=null,e.target.src="https://placehold.co/800x400/cccccc/666666?text=Image+Not+Available"}}),(0,rh.jsxs)(Wk,{children:[(0,rh.jsx)(Hk,{children:e.title||"Untitled Service"}),(0,rh.jsx)(qk,{children:e.description||"No description available"})]})]},t)))})})]}),(0,rh.jsx)(Wg,{})]})]})},Qk=()=>{const{pathname:e}=Q();return(0,n.useLayoutEffect)((()=>{window.scrollTo({top:0,left:0,behavior:"auto"})}),[e]),null},Jk=()=>{const e=Q();return(0,rh.jsxs)(xe,{location:e,children:[(0,rh.jsx)(ge,{path:"/",element:(0,rh.jsx)(ov,{})}),(0,rh.jsx)(ge,{path:"/about",element:(0,rh.jsx)(Hv,{})}),(0,rh.jsx)(ge,{path:"/projects",element:(0,rh.jsx)(ax,{})}),(0,rh.jsx)(ge,{path:"/projects/:id",element:(0,rh.jsx)(Yx,{})}),(0,rh.jsx)(ge,{path:"/contact",element:(0,rh.jsx)(cx,{})}),(0,rh.jsx)(ge,{path:"/services",element:(0,rh.jsx)(Px,{})}),(0,rh.jsx)(ge,{path:"/services/:id",element:(0,rh.jsx)(Gk,{})}),(0,rh.jsx)(ge,{path:"/blog",element:(0,rh.jsx)(Sk,{})}),(0,rh.jsx)(ge,{path:"/blog/:id",element:(0,rh.jsx)(Ak,{})}),(0,rh.jsx)(ge,{path:"/admin/login",element:(0,rh.jsx)(fy,{})}),(0,rh.jsx)(ge,{path:"/admin/*",element:(0,rh.jsx)(jm,{children:(0,rh.jsx)(lk,{})})}),(0,rh.jsx)(ge,{path:"*",element:(0,rh.jsx)(gx,{})})]},e.pathname)},Zk=()=>{const[e,t]=(0,n.useState)(!0),[r,i]=(0,n.useState)(!1),o=Q().pathname.startsWith("/admin");return(0,n.useEffect)((()=>{const e=setTimeout((()=>{t(!1)}),1500),r="ontouchstart"in window||navigator.maxTouchPoints>0;return i(!r),()=>clearTimeout(e)}),[]),(0,rh.jsxs)("div",{className:"min-h-screen flex flex-col "+(r?"custom-cursor":""),children:[(0,rh.jsx)(Hn,{mode:"wait",children:e&&(0,rh.jsx)(Ed.div,{className:"fixed inset-0 flex justify-center items-center z-50 bg-gray-900",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.8,ease:"easeInOut"}},transition:{duration:.5},children:(0,rh.jsxs)(Ed.h1,{className:"text-4xl md:text-5xl font-bold text-primary-500 font-heading",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0,transition:{duration:.5,ease:"easeInOut"}},transition:{duration:.5,ease:"easeOut"},children:["TECHVEDA",(0,rh.jsx)("span",{className:"text-primary-600",children:"."})]})})}),r&&(0,rh.jsx)(mm,{}),!o&&(0,rh.jsx)(cm,{}),(0,rh.jsxs)("main",{className:"flex-1 "+(o?"":"pt-16"),children:[(0,rh.jsx)(Qk,{}),(0,rh.jsx)(Jk,{})]}),!o&&(0,rh.jsx)(dm,{}),(0,rh.jsx)(kh,{})]})};const ej=function(){return(0,n.useEffect)((()=>{document.documentElement.classList.add("dark")}),[]),(0,rh.jsxs)(mn,{theme:Cd,children:[(0,rh.jsx)(Td,{}),(0,rh.jsx)(ih,{children:(0,rh.jsxs)(uh,{children:[(0,rh.jsx)(Te,{children:(0,rh.jsx)(Zk,{})}),(0,rh.jsx)(lm,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})})]})};o.createRoot(document.getElementById("root")).render((0,rh.jsx)(n.StrictMode,{children:(0,rh.jsx)(ej,{})}))})()})();
//# sourceMappingURL=main.e2fca975.js.map