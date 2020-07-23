(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),l=(a(0),a(217)),o={id:"user_guide",title:"User Guide"},i={id:"version-0.8.0/get_started/user_guide",isDocsHomePage:!0,title:"User Guide",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/get_started/user_guide.md",permalink:"/docs/",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Release Notes",permalink:"/docs/get_started/release_notes"},next:{title:"Developer Guide",permalink:"/docs/get_started/developer_guide"}},s=[{value:"Quick Start",id:"quick-start",children:[]},{value:"Run workloads with YuniKorn Scheduler",id:"run-workloads-with-yunikorn-scheduler",children:[{value:"Running simple sample applications",id:"running-simple-sample-applications",children:[]},{value:"Running a spark application",id:"running-a-spark-application",children:[]},{value:"Running a simple Tensorflow job",id:"running-a-simple-tensorflow-job",children:[]},{value:"Affinity scheduling",id:"affinity-scheduling",children:[]},{value:"Volume examples",id:"volume-examples",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Before reading this guide, we assume you either have a Kubernetes cluster, or a local Kubernetes dev environment, e.g MiniKube.\nIt is also assumed that ",Object(l.b)("inlineCode",{parentName:"p"},"kubectl")," is on your path and properly configured.\nFollow this ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/env_setup"}),"guide")," on how to setup a local Kubernetes cluster using docker-desktop."),Object(l.b)("p",null,"All files mentioned in this user guide are part of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim"}),"yunikorn-k8shim")," repository.\nThey are located in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/scheduler"}),"deployments")," sub directory. The command given assume that you are located in that directory."),Object(l.b)("h2",{id:"quick-start"},"Quick Start"),Object(l.b)("p",null,"The easiest way to get started is to use our Helm Charts to deploy YuniKorn on an existing Kubernetes cluster. Recommand to use Helm 3 or later versions."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"helm repo add yunikorn  https://apache.github.io/incubator-yunikorn-release\nhelm repo update\nhelm install yunikorn/yunikorn\n")),Object(l.b)("p",null,"it will firstly create a ",Object(l.b)("inlineCode",{parentName:"p"},"configmap")," where stores YuniKorn configuration, and then deploy YuniKorn scheduler\nand web UI containers in a pod as a ",Object(l.b)("inlineCode",{parentName:"p"},"deployment")," in the ",Object(l.b)("inlineCode",{parentName:"p"},"default")," namespace. If you want to deploy YuniKorn to another namespace, you can do following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl create namespace yunikorn-ns\nhelm install yunikorn yunikorn/yunikorn --namespace yunikorn-ns\n")),Object(l.b)("p",null,"Uninstall yunikorn:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"helm uninstall yunikorn --namespace yunikorn-ns\n")),Object(l.b)("p",null,"If you don't want to use helm charts, you can find our step-by-step\ntutorial ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment"}),"here"),"."),Object(l.b)("h2",{id:"run-workloads-with-yunikorn-scheduler"},"Run workloads with YuniKorn Scheduler"),Object(l.b)("p",null,"Unlike default Kubernetes scheduler, YuniKorn has ",Object(l.b)("inlineCode",{parentName:"p"},"application")," notion in order to support batch workloads better.\nThere are a few ways to run batch workloads with YuniKorn scheduler"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Add labels ",Object(l.b)("inlineCode",{parentName:"li"},"applicationId")," and ",Object(l.b)("inlineCode",{parentName:"li"},"queue")," in pod's spec."),Object(l.b)("li",{parentName:"ul"},"Pods that have the same applicationId will be considered as tasks from 1 application.")),Object(l.b)("p",null,"Here is an example of the entry to add:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'  labels:\n    applicationId: "MyOwnApplicationId"\n    queue: "root.sandbox"\n')),Object(l.b)("p",null,"All examples provided in the next section have the labels already set. The ",Object(l.b)("inlineCode",{parentName:"p"},"queue")," name must be a known queue name from the configuration.\nUnknown queue names will cause the pod to be rejected by the YuniKorn scheduler.  "),Object(l.b)("h3",{id:"running-simple-sample-applications"},"Running simple sample applications"),Object(l.b)("p",null,"All sample deployments can be found under ",Object(l.b)("inlineCode",{parentName:"p"},"examples")," directory.\nThe list of all examples is in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/examples"}),"README"),".\nNot all examples are given here. Further details can be found in that README."),Object(l.b)("p",null,"A single pod based on a standard nginx image: "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f examples/nginx/nginx.yaml\n")),Object(l.b)("p",null,"A simple sleep job example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f examples/sleep/sleeppods.yaml\n")),Object(l.b)("p",null,"The files for these examples can be found in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#nginx"}),"README nginx")," and the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#sleep"}),"README sleep")," sections."),Object(l.b)("h3",{id:"running-a-spark-application"},"Running a spark application"),Object(l.b)("p",null,"Kubernetes support for Apache Spark is not part of all releases. You must have a current release of Apache Spark with Kubernetes support built in. "),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"examples/spark")," directory contains pod template files for the Apache Spark driver and executor, they can be used if you want to run Spark on K8s using this scheduler."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Get latest spark from github (only latest code supports to specify pod template), URL: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/apache/spark"}),"https://github.com/apache/spark")),Object(l.b)("li",{parentName:"ul"},"Build spark with Kubernetes support:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn -Pyarn -Phadoop-2.7 -Dhadoop.version=2.7.4 -Phive -Pkubernetes -Phive-thriftserver -DskipTests package\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Run spark submit")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"spark-submit --master k8s://http://localhost:8001 --deploy-mode cluster --name spark-pi \\\n  --class org.apache.spark.examples.SparkPi \\\n  --conf spark.executor.instances=1 \\\n  --conf spark.kubernetes.container.image=yunikorn/spark:latest \\\n  --conf spark.kubernetes.driver.podTemplateFile=examples/spark/driver.yaml \\\n  --conf spark.kubernetes.executor.podTemplateFile=examples/spark/executor.yaml \\\n  local:///opt/spark/examples/jars/spark-examples_2.12-3.0.0-SNAPSHOT.jar\n")),Object(l.b)("p",null,"Spark uses its own version of the application ID tag called ",Object(l.b)("em",{parentName:"p"},"spark-app-id"),". This tags is required for the pods to be recognised as specific spark pods.  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"examples/spark/driver.yaml"),Object(l.b)("li",{parentName:"ul"},"examples/spark/executor.yaml\nWhen you run Spark on Kubernetes with pod templates, ",Object(l.b)("em",{parentName:"li"},"spark-app-id")," is considered the applicationId.\nA script to run the spark application and the yaml files are in the ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#spark"}),"README spark")," section.")),Object(l.b)("h3",{id:"running-a-simple-tensorflow-job"},"Running a simple Tensorflow job"),Object(l.b)("p",null,"There is an example for Tensorflow job. You must install tf-operator first.\nYou can install tf-operator by applying all yaml from two website down below:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CRD: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base"}),"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base")),Object(l.b)("li",{parentName:"ul"},"Deployment: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"}),"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"),"\nAlso you can install kubeflow which can auto install tf-operator for you, URL: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.kubeflow.org/docs/started/getting-started/"}),"https://www.kubeflow.org/docs/started/getting-started/"))),Object(l.b)("p",null,"A simple Tensorflow job example:"),Object(l.b)("p",null,"You need to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubeflow/tf-operator/tree/master/examples/v1/dist-mnist"}),"build the image")," which used in example yaml."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f examples/tfjob/tf-job-mnist.yaml\n")),Object(l.b)("p",null,"The file for this example can be found in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#Tensorflow-job"}),"README Tensorflow job")," section."),Object(l.b)("h3",{id:"affinity-scheduling"},"Affinity scheduling"),Object(l.b)("p",null,"The scheduler supports affinity and ati affinity scheduling on kubernetes using predicates:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f examples/predicates/pod-anti-affinity-example.yaml\n")),Object(l.b)("p",null,"This deployment ensures 2 pods cannot be co-located together on same node.\nIf this yaml is deployed on 1 node cluster, expect 1 pod to be started and the other pod should stay in a pending state.\nMore examples on affinity and anti affinity scheduling in the predicates section of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#predicates"}),"README predicates")),Object(l.b)("h3",{id:"volume-examples"},"Volume examples"),Object(l.b)("p",null,"There are three examples with volumes available. The NFS example does not work on docker desktop and requires ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"minikube"),".\nThe EBS volume requires a kubernetes cluster running on AWS (EKS).\nFurther instructions for the volume examples in the section of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#volumes"}),"README Volumes"),"."),Object(l.b)("p",null,"CAUTION: All examples will generate an unending stream of data in a file called ",Object(l.b)("inlineCode",{parentName:"p"},"dates.txt")," on the mounted volume. This could cause a disk to fill up and execution time should be limited. "),Object(l.b)("h4",{id:"local-volume"},"Local volume"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create the local volume and volume claim")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f examples/volume/local-pv.yaml\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create the pod that uses the volume")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f examples/volume/pod-local.yaml\n")),Object(l.b)("h4",{id:"nfs-volume"},"NFS volume"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create the NFS server")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f nfs-server.yaml\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"get the IP address for the NFS server and update the pod yaml by replacing the existing example IP with the one returned:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get services | grep nfs-server | awk '{print $3}'\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create the pod that uses the volume")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f pod-nfs.yaml\n")),Object(l.b)("h4",{id:"ebs-volume"},"EBS volume"),Object(l.b)("p",null,"The Volume for the first two examples must be created before you can run the examples. The ",Object(l.b)("inlineCode",{parentName:"p"},"VolumeId")," must be updated in the yaml files to get this to work.\nTo create a volume you can use the command line or web UI:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"aws ec2 create-volume --volume-type gp2 --size 10 --availability-zone us-west-1\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"VolumeId")," is part of the returned information of the create command."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create the pod that uses a direct volume reference:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f pod-ebs-direct.yaml\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create the persistent volume (pv) and a pod that uses a persistent volume claim (pvc) to claim the existing volume:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f ebs-pv.yaml\nkubectl create -f pod-ebs-exist.yaml\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create a storage class to allow dynamic provisioning and create the pod that uses this mechanism:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f storage-class.yaml\nkubectl create -f pod-ebs-dynamic.yaml\n")),Object(l.b)("p",null,"Dynamic provisioning has a number of pre-requisites for it to work, see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/"}),"Dynamic Volume Provisioning")," in the kubernetes docs.\nThe dynamically created volume will be automatically destroyed as soon as the pod is stopped."))}p.isMDXComponent=!0},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||l;return a?r.a.createElement(d,i(i({ref:t},c),{},{components:a})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);