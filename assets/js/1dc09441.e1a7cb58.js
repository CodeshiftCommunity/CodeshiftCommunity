(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(99)),a={id:"testing",title:"Testing",slug:"/testing"},s={unversionedId:"testing",id:"testing",isDocsHomePage:!1,title:"Testing",description:"It's very likely that consumers will run into all sorts of edge-cases when running your codemod. That's why it's important to always start by writing tests (TDD style) to assert its behavior.",source:"@site/docs/testing.mdx",slug:"/testing",permalink:"/docs/testing",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/testing.mdx",version:"current",sidebar:"docs",previous:{title:"Consuming",permalink:"/docs/consuming"},next:{title:"Contribution",permalink:"/docs/contribution"}},c=[{value:"Folder structure",id:"folder-structure",children:[]},{value:"An example",id:"an-example",children:[]},{value:"Considerations",id:"considerations",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It's very likely that consumers will run into all sorts of edge-cases when running your codemod. That's why it's important to always start by writing tests (TDD style) to assert its behavior.\nThink about a start and end state. How you might be able to achieve that? What edge-cases can potentially arise?"),Object(i.b)("p",null,"CodeshiftCommunity (and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift#unit-testing"},"jscodeshift"),") exposes ",Object(i.b)("a",{parentName:"p",href:"/docs/test-utils"},"testing utilities")," to help."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Codemods are a textbook example of where TDD works. You have an input file, you run the script and you get output. Thus I would really recommend using TDD for codemod projects.\nNot only does it make codemods more stable, but having projects with test workflow setup, will help you learn.\nBecause you can experiment just by running the same test over and over again.")),Object(i.b)("p",null,"\u2013 ",Object(i.b)("a",{parentName:"p",href:"https://katilius.dev/writing-js-codemods/#setting-up-codemod-project-for-tdd-workflow"},"Reference")),Object(i.b)("h2",{id:"folder-structure"},"Folder structure"),Object(i.b)("p",null,"If you're planning to write and publish a codemod to the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"Community folder"),", follow the ",Object(i.b)("a",{parentName:"p",href:"/docs/authoring#initializing"},"Authoring guide"),"."),Object(i.b)("p",null,"Once initialsing your file structure should look something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"community/[package-name]/[version]\n  /transform.ts\n  /transform.spec.ts // Here's where your test should go\n")),Object(i.b)("h2",{id:"an-example"},"An example"),Object(i.b)("p",null,"To give an example, consider you're trying to write a codemod that removes deprecated props from a component.\nIn this case, you would be able to write a simple test using ",Object(i.b)("inlineCode",{parentName:"p"},"jest")," & ",Object(i.b)("inlineCode",{parentName:"p"},"@codeshift/test-utils")," like so.."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import * as transformer from '../transform';\nimport { applyTransform } from '@codeshift/test-utils';\n\nit('should remove all deleted props', () => {\n  const result = applyTransform(\n    transformer,\n    `\n      import Foo from '@mylib/foo';\n\n      const App = () => <Foo isSelected doNotUse='true' />;\n    `,\n    { parser: 'tsx' },\n  );\n\n  expect(result).toMatchInlineSnapshot(`\n    \"\n    import Foo from '@mylib/foo';\n\n    const App = () => <Foo isSelected />;\"\n  `);\n});\n")),Object(i.b)("p",null,"Great, but what have we missed? What might go wrong?"),Object(i.b)("h2",{id:"considerations"},"Considerations"),Object(i.b)("p",null,"Whenever you're writing tests for a codemod, it's usually good to consider a few classic gotchas."),Object(i.b)("p",null,"In general they can include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Import aliasing: ",Object(i.b)("inlineCode",{parentName:"li"},"import { Foo as Bar } from '@mylib/foo';")),Object(i.b)("li",{parentName:"ul"},"Idempotency: Will a codemod produce the same result if run multiple times on the same file"),Object(i.b)("li",{parentName:"ul"},"Indirection: Is the code your modifying being obscured by indirection?"),Object(i.b)("li",{parentName:"ul"},"Equivalent syntax: ",Object(i.b)("inlineCode",{parentName:"li"},"function foo() {}")," vs ",Object(i.b)("inlineCode",{parentName:"li"},"const foo = () => {}"))))}u.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,b=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);