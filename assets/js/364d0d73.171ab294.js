"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[6293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Semaphore Equivalent",l={unversionedId:"Lab/Compute/Threads/quiz/semaphore-equivalent",id:"Lab/Compute/Threads/quiz/semaphore-equivalent",title:"Semaphore Equivalent",description:"Question Text",source:"@site/docs/Lab/Compute/Threads/quiz/semaphore-equivalent.md",sourceDirName:"Lab/Compute/Threads/quiz",slug:"/Lab/Compute/Threads/quiz/semaphore-equivalent",permalink:"/operating-systems/Lab/Compute/Threads/quiz/semaphore-equivalent",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semaphore-equivalent"},"Semaphore Equivalent"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"From running and inspecting the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/apache2-simulator/apache2_simulator_semaphore.py"),", which of the following is an an equivalent to the value of the semaphore ",(0,a.kt)("inlineCode",{parentName:"p"},"sem"),"?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The value of ",(0,a.kt)("inlineCode",{parentName:"li"},"msg_mutex")),(0,a.kt)("li",{parentName:"ul"},"The time a worker thread has to wait before running")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The length of the ",(0,a.kt)("inlineCode",{parentName:"li"},"messages")," list")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of worker threads")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sem")," is incremented (",(0,a.kt)("inlineCode",{parentName:"p"},"release()"),") upon adding a message to the ",(0,a.kt)("inlineCode",{parentName:"p"},"messages")," list and decremented (",(0,a.kt)("inlineCode",{parentName:"p"},"acquire()"),") when removing a message from said list.\nSo it's a rough equivalent to the length of this list."))}c.isMDXComponent=!0}}]);