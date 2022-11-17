"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[6988],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95210:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Software Stack",c={unversionedId:"Lab/Software-Stack/Introduction/content/introduction",id:"Lab/Software-Stack/Introduction/content/introduction",title:"Software Stack",description:"Setup",source:"@site/docs/Lab/Software-Stack/Introduction/content/introduction.md",sourceDirName:"Lab/Software-Stack/Introduction/content",slug:"/Lab/Software-Stack/Introduction/content/introduction",permalink:"/operating-systems/Lab/Software-Stack/Introduction/content/introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Software-Stack",permalink:"/operating-systems/Software-Stack/"},next:{title:"overview",permalink:"/operating-systems/Lab/Software-Stack/Overview/content/overview"}},l={},s=[{value:"Setup",id:"setup",level:2},{value:"Contents",id:"contents",level:2}],p={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"software-stack"},"Software Stack"),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"If you have already cloned the repository, make sure it is updated.\nRun this command inside the repository clone directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git pull --rebase\n")),(0,a.kt)("p",null,"The command may fail if you have uncommitted changes.\nIf that is the case, commit changes and retry."),(0,a.kt)("p",null,"If you haven't already cloned the repository, do it and enter the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/open-education-hub/operating-systems\ncd operating-sytems\n")),(0,a.kt)("p",null,"While inside the repository clone top directory, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"update-repo.sh")," script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bash util/update-repo.sh software-stack\n")),(0,a.kt)("p",null,"The script may fail if you have uncommitted changes and it will instruct you to commit them.\nIf that is the case, commit changes and re-run the script."),(0,a.kt)("p",null,"Navigate to the chapter lab directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd content/chapters/software-stack/lab/\n")),(0,a.kt)("p",null,"Now go through the items below."),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/overview"},"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/modern-sw-stack"},"Modern Software Stacks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/basic-syscall"},"Basic System Calls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/syscall-wrapper"},"System Call Wrapper")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/common-functions"},"Common Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/libc"},"Libraries and libc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/static-dynamic"},"Statically-linked and Dynamically-linked Libraries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/libcall-syscall"},"Library calls vs system calls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/high-level-lang"},"High-Level Languages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/app-investigate"},"App Investigation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/operating-systems/Lab/Software-Stack/Introduction/content/arena"},"Arena"))))}u.isMDXComponent=!0}}]);