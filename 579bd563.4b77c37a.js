(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(9),i=(r(0),r(206)),c={id:"roadmap",title:"Roadmap"},o={permalink:"/community/roadmap",source:"@site/community/roadmap.md",description:"\x3c!--",date:"2020-06-21T07:01:20.000Z",tags:[],title:"Roadmap",readingTime:1.905,truncated:!1,prevItem:{title:"Community Sync Up",permalink:"/community/community_sync_up"},nextItem:{title:"How To Contribute",permalink:"/community/how_to_contribute"}},l=[{value:"What&#39;s next",id:"whats-next",children:[]},{value:"v0.8.0 (May 4, 2020)",id:"v080-may-4-2020",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"whats-next"},"What's next"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-core")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-1"}),"YUNIKORN-1"),": Support app/task priority aware scheduling."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-2"}),"YUNIKORN-2"),": Gang Scheduling."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-21"}),"YUNIKORN-21"),": Optimize node sorting algorithms."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-42"}),"YUNIKORN-42"),": High efficient scheduling events framework phase 1."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-33"}),"YUNIKORN-33"),": Performance benchmark with Kubemark."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-131"}),"YUNIKORN-131"),": Prometheus integration - phase 2.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-k8shim")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-133"}),"YUNIKORN-133"),": Performance improvement: optimize predicate function performance."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-42"}),"YUNIKORN-42"),": Publish comprehensive scheduler events to K8s event system.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-web")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-83"}),"YUNIKORN-83"),": Implements the nodes info page.")),Object(i.b)("h2",{id:"v080-may-4-2020"},"v0.8.0 (May 4, 2020)"),Object(i.b)("p",null,"This release ships a fully functional resource scheduler for Kubernetes with a number of useful features that empower\nto run Big Data workloads on K8s. See more at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://yunikorn.apache.org/release/v0.8.0.html"}),"Release Notes"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-scheduler-interface")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Communication protocols between RM and scheduler-shim."),Object(i.b)("li",{parentName:"ul"},"gRPC interfaces."),Object(i.b)("li",{parentName:"ul"},"Scheduler plugin interfaces.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-core")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hierarchy queues with min/max resource quotas."),Object(i.b)("li",{parentName:"ul"},"Resource fairness between queues, users and apps."),Object(i.b)("li",{parentName:"ul"},"Cross-queue preemption based on fairness."),Object(i.b)("li",{parentName:"ul"},"Fair/Bin-packing scheduling policies."),Object(i.b)("li",{parentName:"ul"},"Placement rules (auto queue creation/mapping)."),Object(i.b)("li",{parentName:"ul"},"Customized resource types (like GPU) scheduling support."),Object(i.b)("li",{parentName:"ul"},"Rich placement constraints support."),Object(i.b)("li",{parentName:"ul"},"Automatically map incoming container requests to queues by policies."),Object(i.b)("li",{parentName:"ul"},"Node partition: partition cluster to sub-clusters with dedicated quota/ACL management."),Object(i.b)("li",{parentName:"ul"},"Configuration hot-refresh."),Object(i.b)("li",{parentName:"ul"},"Stateful recovery."),Object(i.b)("li",{parentName:"ul"},"Metrics framework.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-k8shim")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Support K8s predicates. Such as pod affinity/anti-affinity, node selectors."),Object(i.b)("li",{parentName:"ul"},"Support Persistent Volumes, Persistent Volume Claims, etc."),Object(i.b)("li",{parentName:"ul"},"Load scheduler configuration from configmap dynamically (hot-refresh)."),Object(i.b)("li",{parentName:"ul"},"3rd Operator/controller integration, pluggable app discovery."),Object(i.b)("li",{parentName:"ul"},"Helm chart support.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-web")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cluster overview page with brief info about the cluster."),Object(i.b)("li",{parentName:"ul"},"Read-only application view, including app info and task breakdown info."),Object(i.b)("li",{parentName:"ul"},"Read-only queue view, displaying queue structure, queue resource, usage info dynamically.")))}p.isMDXComponent=!0},206:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=a,O=b["".concat(c,".").concat(m)]||b[m]||s[m]||i;return r?n.a.createElement(O,o(o({ref:t},u),{},{components:r})):n.a.createElement(O,o({ref:t},u))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);