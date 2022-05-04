"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[334],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51876:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"usergroup_resolution",title:"User & Group Resolution"},u=void 0,l={unversionedId:"user_guide/usergroup_resolution",id:"version-0.12.2/user_guide/usergroup_resolution",title:"User & Group Resolution",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/user_guide/usergroup_resolution.md",sourceDirName:"user_guide",slug:"/user_guide/usergroup_resolution",permalink:"/zh-cn/docs/0.12.2/user_guide/usergroup_resolution",tags:[],version:"0.12.2",frontMatter:{id:"usergroup_resolution",title:"User & Group Resolution"},sidebar:"version-0.12.2/docs",previous:{title:"App Placement Rules",permalink:"/zh-cn/docs/0.12.2/user_guide/placement_rules"},next:{title:"Sorting Policies",permalink:"/zh-cn/docs/0.12.2/user_guide/sorting_policies"}},d={},c=[{value:"User resolution",id:"user-resolution",level:2},{value:"Group resolution",id:"group-resolution",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"user-resolution"},"User resolution"),(0,o.kt)("p",null,"User information is an important aspect of the scheduling cycle. It is one of the key identifier that can be used to determine the queue to which a job should be submitted. The Yunikorn Scheduler relies on the K8s Shim to provide user information. In the world of Kubernetes, there is no object defined that identfies the actual user. This is by design and more information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#users-in-kubernetes"},"here")),(0,o.kt)("p",null,"Since, Kubernetes has no pre-defined field or resource for user information and individual cluster deployments with unique user identification tools can vary, we have defined a standard way of identifying the user. Yunikorn requires a Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"Label")," added. Using the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/"},"recommendation")," provided here, the default label is defined as below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Label"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/username"),(0,o.kt)("td",{parentName:"tr",align:null},"User name. It can have duplicate entries but only the first value will be used. The default user is ",(0,o.kt)("inlineCode",{parentName:"td"},"nobody"))))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  labels:\n    yunikorn.apache.org/username: "john"\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order to make this field uniquiely identifiable to the authorized user, the suggestion is to add this label as an immutable field by the user identification tool used by the cluster administrators. The cluster administrators or users are free to use any method or tool to add this field and value. This includes adding it manually at the time of submission. "))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Assumption ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Assumption:\nYunikorn assumes that all pods belonging to an application are owned by the same user. We recommend that the user label is added to every pod of an app. This is to ensure that there is no discrepency. "))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/username")," key can be customized by overriding the default value using the ",(0,o.kt)("inlineCode",{parentName:"p"},"USER_LABEL_KEY"),"env variable to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/master/helm-charts/yunikorn/templates/deployment.yaml"},"K8s"),". This is particularly useful in scenarios where the user label is already being added or if the label has to be modified for some secuirty reasons. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'            env:\n            - name: USER_LABEL_KEY\n              value: "custom_user_label"\n')),(0,o.kt)("h2",{id:"group-resolution"},"Group resolution"),(0,o.kt)("p",null,"Group membership resolution is pluggables and is defined here. Groups do not have to be part of provided user and group object. When the object is added to the cache the groups are automatically resolved based on the resolution that is configured.\nThe resolver which is linked to the cache can be set per partition."),(0,o.kt)("p",null,'The default group resolver is "no resolver".\nThis resolver just echos the user name and a primary group with the same name as the user.'),(0,o.kt)("p",null,"Other resolvers are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS resolver"),(0,o.kt)("li",{parentName:"ul"},"test resolver")))}m.isMDXComponent=!0}}]);