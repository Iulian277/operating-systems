"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[20670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),h=n,d=f["".concat(l,".").concat(h)]||f[h]||u[h]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o="Child Faults After Write",s={unversionedId:"Lab/Compute/Processes-threads-apache2/quiz/child-faults-after-write",id:"Lab/Compute/Processes-threads-apache2/quiz/child-faults-after-write",title:"Child Faults After Write",description:"Question Text",source:"@site/docs/Lab/Compute/Processes-threads-apache2/quiz/child-faults-after-write.md",sourceDirName:"Lab/Compute/Processes-threads-apache2/quiz",slug:"/Lab/Compute/Processes-threads-apache2/quiz/child-faults-after-write",permalink:"/operating-systems/Lab/Compute/Processes-threads-apache2/quiz/child-faults-after-write",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"child-faults-after-write"},"Child Faults After Write"),(0,n.kt)("h2",{id:"question-text"},"Question Text"),(0,n.kt)("p",null,"What causes the page faults registered by the child after the fifth step?"),(0,n.kt)("h2",{id:"question-answers"},"Question Answers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The child writes data to the frames it previously shared with its parent and the copy-on-write mechanism copies and remaps them before writing said data")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Demand paging propagates the lazy allocation of pages from the parent to the child")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Creating the child process inherently duplicates some frames")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"They are caused by the loader forking itself when creating the child process")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"They are caused by the ",(0,n.kt)("inlineCode",{parentName:"p"},"bash")," process forking itself when creating the child process"))))}u.isMDXComponent=!0}}]);