(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[190],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9716:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"contribution",title:"Contribution",slug:"/contribution"},l={unversionedId:"contribution",id:"contribution",isDocsHomePage:!1,title:"Contribution",description:"CodemodCommunity only works because of contributions by people like you!",source:"@site/docs/contribution.mdx",sourceDirName:".",slug:"/contribution",permalink:"/docs/contribution",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/contribution.mdx",version:"current",frontMatter:{id:"contribution",title:"Contribution",slug:"/contribution"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/testing"},next:{title:"Your first codemod",permalink:"/docs/your-first-codemod"}},u=[{value:"Rules",id:"rules",children:[]},{value:"Getting setup",id:"getting-setup",children:[]},{value:"Creating a new codemod",id:"creating-a-new-codemod",children:[]},{value:"Editing an existing codemod",id:"editing-an-existing-codemod",children:[]},{value:"Removing a package",id:"removing-a-package",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Raising a pull request",id:"raising-a-pull-request",children:[]},{value:"Thanks",id:"thanks",children:[]}],s={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CodemodCommunity only works because of contributions by people like you!"),(0,i.kt)("p",null,"All forms of contribution are welcome, from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/issues/new/choose"},"issue reports")," to PRs and documentation."),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Be kind:")," Treat maintainers and other contributors with respect"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Be the change:")," If you see a problem, politely raise an issue or consider contributing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Help others:")," We're all learning, be patient and try to help others")),(0,i.kt)("h2",{id:"getting-setup"},"Getting setup"),(0,i.kt)("p",null,"First, fork this repository, clone it, install node and yarn, and run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,i.kt)("h2",{id:"creating-a-new-codemod"},"Creating a new codemod"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the repository onto your machine"),(0,i.kt)("li",{parentName:"ol"},"cd to the project directory ",(0,i.kt)("inlineCode",{parentName:"li"},"cd CodeshiftCommunity")),(0,i.kt)("li",{parentName:"ol"},"Install dependencies ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn")),(0,i.kt)("li",{parentName:"ol"},"Create a new codemod with ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn init:codemods [package name] [version]")),(0,i.kt)("li",{parentName:"ol"},"Write your codemod. See the ",(0,i.kt)("a",{parentName:"li",href:"authoring"},"authoring")," guide."),(0,i.kt)("li",{parentName:"ol"},"Test your changes"),(0,i.kt)("li",{parentName:"ol"},"Create a pull request")),(0,i.kt)("h2",{id:"editing-an-existing-codemod"},"Editing an existing codemod"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the repository onto your machine"),(0,i.kt)("li",{parentName:"ol"},"cd to the project directory ",(0,i.kt)("inlineCode",{parentName:"li"},"cd CodeshiftCommunity")),(0,i.kt)("li",{parentName:"ol"},"Install dependencies ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn")),(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"/community")," directory"),(0,i.kt)("li",{parentName:"ol"},"Make your changes. See the ",(0,i.kt)("a",{parentName:"li",href:"authoring"},"authoring")," guide."),(0,i.kt)("li",{parentName:"ol"},"Test your changes"),(0,i.kt)("li",{parentName:"ol"},"Create a pull request")),(0,i.kt)("h2",{id:"removing-a-package"},"Removing a package"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the repository onto your machine"),(0,i.kt)("li",{parentName:"ol"},"cd to the project directory ",(0,i.kt)("inlineCode",{parentName:"li"},"cd CodeshiftCommunity")),(0,i.kt)("li",{parentName:"ol"},"Install dependencies ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn")),(0,i.kt)("li",{parentName:"ol"},"Remove the codemod"),(0,i.kt)("li",{parentName:"ol"},"Create a pull request")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note:")," Codemods will continue to be hosted on npm even after the codemod has been removed"),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure to write a healthy amount of unit tests"),(0,i.kt)("li",{parentName:"ul"},"This is a great opportunity for test driven development"),(0,i.kt)("li",{parentName:"ul"},"Consider different edge-cases, idempotency, different languages (js, flow, typescript)"),(0,i.kt)("li",{parentName:"ul"},"Before you share your improvement with the world, be sure to use it yourself.")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"testing"},"testing")," guide for help getting started with unit tests."),(0,i.kt)("h2",{id:"raising-a-pull-request"},"Raising a pull request"),(0,i.kt)("p",null,"Once you've tested your package, raise a PR!"),(0,i.kt)("h2",{id:"thanks"},"Thanks"),(0,i.kt)("p",null,"Many thanks for contributing and being a part of the CodeshiftCommunity \ud83d\ude0d"))}c.isMDXComponent=!0}}]);