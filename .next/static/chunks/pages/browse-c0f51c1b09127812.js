(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{8717:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/browse",function(){return a(23242)}])},23242:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return P},default:function(){return E}});var n=a(85893),l=a(67294),o=a(79711),i=a(9008),s=a.n(i),r=a(90152),c=a(72860),d=a(28380),u=a(88824),m=a(83505),p=a(53854),g=a(12713),h=a.n(g),v=a(87536),f=a(46340),b=a(61150),x=a(11163),y=a(63750),_=a(86893);let j=e=>{var t,a;let{categories:i,subcategory:s,setSubcategory:r,fields:c,setFields:d,open:u,filters:g,setFilters:f}=e,j=(0,l.useRef)(!1),C=(0,l.useRef)({}),{siteConfig:{siteConfig:S}}=(0,l.useContext)(o.D),T=(0,x.useRouter)(),{control:k,reset:q,watch:P,getValues:E,setValue:F}=(0,v.cI)({defaultValues:{sort:(null===(t=T.query)||void 0===t?void 0:t.sort)||"price-asc"}});return((0,l.useEffect)(()=>{var e,t;if((null==S?void 0:null===(e=S.browsePage)||void 0===e?void 0:null===(t=e.sidebarFilters)||void 0===t?void 0:t.length)&&!j.current){let e={};S.browsePage.sidebarFilters.forEach(t=>{T.query[t.fieldName]?e[t.fieldName]=T.query[t.fieldName]:(T.query[t.fieldName+"-min"]||T.query[t.fieldName+"-max"])&&("range"===t.filterType?e[t.fieldName+"-range"]={min:+T.query[t.fieldName+"-min"],max:+T.query[t.fieldName+"-max"]}:(e[t.fieldName+"-min"]=+T.query[t.fieldName+"-min"],e[t.fieldName+"-max"]=+T.query[t.fieldName+"-max"]))}),q(e),j.current=!0}},[null==S?void 0:null===(a=S.browsePage)||void 0===a?void 0:a.sidebarFilters,T.query]),u)?(0,n.jsxs)("form",{className:h().sidebar,children:[Object.keys(T.query).length>1&&(0,n.jsx)("div",{className:h().clearFilters,children:(0,n.jsxs)("button",{className:"btn",type:"button",onClick:()=>{q(C.current),d(null),T.replace({pathname:b.Hb.browsePage,query:{sort:T.query.sort}},void 0,{shallow:!0}),setTimeout(()=>{f({})},10)},children:[(0,n.jsx)(p.fMW,{}),"Clear All Filters"]})}),(0,n.jsx)(w,{label:"Sort",children:(0,n.jsx)(m.hQ,{control:k,name:"sort",options:[{label:"Price Low to High",value:"price-asc"},{label:"Price High to Low",value:"price-dsc"}],onChange:e=>f({...g,sort:e.value})})}),c?(0,n.jsxs)("section",{className:h().backToCategories,onClick:()=>{d(null),f(e=>({category:e.category,subcategory:void 0}))},children:[(0,n.jsx)(y.And,{style:{fontSize:"1.3em"}})," ",(0,n.jsxs)("p",{className:"flex align-center gap_5",children:[g.category," ",(0,n.jsx)(_.Tfp,{})," ",g.subcategory]})]}):(0,n.jsxs)("section",{className:h().categorySection,children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Categories"})}),(0,n.jsx)("ul",{className:h().categories,children:i.map(e=>{var t;return(0,n.jsxs)("li",{children:[(0,n.jsx)(m.XZ,{label:e.name,checked:g.category===e.name,onChange:t=>{g.category===e.name?f(e=>({...e,category:void 0})):f(t=>({...t,category:e.name}))}}),(null===(t=e.subcategories)||void 0===t?void 0:t.length)>0&&(0,n.jsx)("ul",{className:h().subcategories,children:e.subcategories.map(t=>(0,n.jsx)("li",{label:t.name,children:(0,n.jsx)(m.XZ,{label:t.name,checked:g.subcategory===t.name,onChange:a=>{var n,l;g.subcategory===t.name?f(e=>({...e,subcategory:void 0})):f(a=>({...a,category:e.name,subcategory:t.name})),d(a.target.checked?null===(n=null==S?void 0:null===(l=S.browsePage)||void 0===l?void 0:l.sidebarFilters.find(a=>a.category===e.name&&a.subcategory===t.name))||void 0===n?void 0:n.filters:null)}})},t.name))})]},e.name)})})]}),(c||[]).map(e=>{let t=S.productFields.find(t=>t.name===e.fieldName);return t?"textSearch"===e.filterType||"match"===e.filterType?(C.current={...C.current,[t.name]:""},(0,n.jsx)(w,{label:t.label,children:(0,n.jsx)(m.II,{control:k,name:t.name,type:t.inputType,onChange:e=>{f(a=>({...a,[t.name]:e.target.value||""}))}})},e.fieldName)):"minMax"===e.filterType?(C.current={...C.current,["".concat(t.name,"-min")]:"",["".concat(t.name,"-max")]:""},(0,n.jsxs)(w,{label:t.label,children:[(0,n.jsx)(m.II,{control:k,name:"".concat(t.name,"-min"),type:t.inputType,placeholder:"MIN",onChange:e=>{let a=E("".concat(t.name,"-max"));+e.target.value<=+a?f(n=>({...n,["".concat(t.name,"-min")]:+e.target.value,["".concat(t.name,"-max")]:+a})):f(e=>({...e,["".concat(t.name,"-min")]:"",["".concat(t.name,"-max")]:""}))}}),(0,n.jsx)(m.II,{control:k,name:"".concat(t.name,"-max"),type:t.inputType,placeholder:"MAX",onChange:e=>{let a=E("".concat(t.name,"-min"));+e.target.value>=+a?f(n=>({...n,["".concat(t.name,"-max")]:+e.target.value,["".concat(t.name,"-min")]:+a})):f(e=>({...e,["".concat(t.name,"-max")]:"",["".concat(t.name,"-min")]:""}))}}),+E("".concat(t.name,"-max"))<+E("".concat(t.name,"-min"))&&(0,n.jsx)("p",{className:"subtitle1",children:"Max must be greater then Min"})]},e.fieldName)):"range"===e.filterType?(0,n.jsx)(w,{label:t.label,children:(0,n.jsx)(m.e6,{control:k,name:"".concat(t.name,"-range"),setValue:F,type:t.inputType,placeholder:"".concat(t.label," range"),onChange:e=>{let{min:a,max:n}=e;a<=n?f(e=>({...e,["".concat(t.name,"-min")]:a,["".concat(t.name,"-max")]:n})):f(e=>({...e,["".concat(t.name,"-min")]:"",["".concat(t.name,"-max")]:""}))},min:+e.min,max:+e.max})},e.fieldName):["list","dropdown"].includes(e.filterStyle)?(C.current={...C.current,[t.name]:[]},(0,n.jsx)(N,{field:t,sidebarItem:e,setFilters:f,control:k},e.fieldName)):void 0:null})]}):null},N=e=>{let{field:t,setFilters:a,sidebarItem:o,control:i}=e,[s,r]=(0,l.useState)([]),[c,d]=(0,l.useState)([]),{get:u}=(0,f.ib)(b.Hv.elements+"/".concat((null==t?void 0:t.collection)||""));return((0,l.useEffect)(()=>{"list"===o.filterStyle&&a(e=>({...e,[t.name]:(null==s?void 0:s.length)?s:""}))},[s]),(0,l.useEffect)(()=>{"collection"===t.optionType&&u().then(e=>{let{data:a}=e;if(null==a?void 0:a.success)return d(a.data.map(e=>({label:e[t.optionLabel],value:e[t.optionValue]})))}).catch(e=>console.log(e))},[]),"list"===o.filterStyle)?(0,n.jsx)(w,{label:t.label,children:(0,n.jsx)("ul",{className:h().filterList,children:("array"===t.optionType?t.options:c).map((e,a)=>(0,n.jsxs)("li",{children:[(0,n.jsx)("input",{id:"".concat(t.name,"_").concat(e.label),type:"checkbox",checked:s.includes(e.value),onChange:t=>{s.includes(e.value)?r(t=>t.filter(t=>t!==e.value)):r(t=>[...t,e.value])}})," ",(0,n.jsx)("label",{htmlFor:"".concat(t.name,"_").concat(e.label),children:e.label})]},a))})}):"dropdown"===o.filterStyle?(0,n.jsx)(w,{label:t.label,children:(0,n.jsx)(m.Ph,{control:i,..."array"===t.optionType&&{options:t.options},..."collection"===t.optionType&&{url:"".concat(b.Hv.elements,"/").concat(t.collection),getQuery:(e,a)=>({...e&&{[t.optionLabel]:e},...a&&{[t.optionValue]:a}}),handleData:e=>({label:e[t.optionLabel],value:e[t.optionValue]})},multiple:!0,name:t.name,formOptions:{required:t.required},className:h().itemName,onChange:e=>{a(a=>({...a,[t.name]:e.length?e.map(e=>e.value):""}))}})}):null},w=e=>{let{label:t,children:a,className:i}=e,{siteConfig:{siteConfig:s}}=(0,l.useContext)(o.D),[r,c]=(0,l.useState)(!0);return(0,n.jsxs)("div",{className:"".concat(h().section," ").concat(i||""),children:[(0,n.jsx)("div",{className:h().head,onClick:()=>c(!r),children:t}),r&&(0,n.jsx)("div",{className:h().sectionContent,onClick:e=>e.stopPropagation(),children:a})]})};var C=a(74382);function S(e){let{showPath:t}=e,a=(0,l.useRef)(),o=(0,x.useRouter)(),[i,s]=(0,l.useState)({sort:"price-asc"}),[r,c]=(0,l.useState)(!1),[d,g]=(0,l.useState)([]),[v,y]=(0,l.useState)({page:1,pageSize:10}),[_,N]=(0,l.useState)(null),[w,S]=(0,l.useState)(null),[T,k]=(0,l.useState)([]),{get:q}=(0,f.ib)(b.Hv.categories),{get:P,loading:E}=(0,f.ib)(b.Hv.browse);(0,l.useEffect)(()=>{o.replace({pathname:b.Hb.browse,query:{...Object.entries({...o.query,...i}).filter((e,t)=>{let[a,n]=e;return 0===n||n}).reduce((e,t)=>(e[t[0]]=t[1],e),{})}},void 0,{shallow:!0})},[i]);let F=(0,l.useCallback)(function(){let{page:e,pageSize:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E||P({query:{...o.query,page:e||(null==v?void 0:v.page)||1,pageSize:t||(null==v?void 0:v.pageSize)||10}}).then(e=>{let{data:t}=e;if(!(null==t?void 0:t.success)){(null==t?void 0:t.message)&&(0,u.N)({type:"error",message:t.message});return}g(e=>{var a;return(null===(a=t.metadata)||void 0===a?void 0:a.page)===1?t.data:[...e,...t.data]}),y(t.metadata)}).catch(e=>(0,u.N)({type:"error",message:e.message}))},[o.query,v,E]);return(0,l.useEffect)(()=>{F({page:1,pageSize:10})},[o.query]),(0,l.useEffect)(()=>{q().then(e=>{let{data:t}=e;(null==t?void 0:t.success)?k(t.data):(0,u.N)({type:"error",message:t.message})}).catch(e=>(0,u.N)({type:"error",message:e.message})),window.innerWidth>480&&c(!0)},[]),(0,l.useEffect)(()=>{let e=window.scrollY,t=()=>{var t;let n=e<window.scrollY?"down":"up";e=window.scrollY;let l=(null===(t=a.current)||void 0===t?void 0:t.getBoundingClientRect().top)<window.innerHeight;"down"===n&&!E&&l&&F({page:((null==v?void 0:v.page)||0)+1,pageSize:(null==v?void 0:v.pageSize)||10})};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[E,v]),(0,n.jsxs)("div",{className:"".concat(h().container," ").concat(r?h().sidebarOpen:""),children:[t&&(0,n.jsx)(m.nB,{paths:[{label:"Home",path:"/"},{label:"Browse"}],className:h().paths}),(0,n.jsxs)("button",{className:"btn ".concat(h().sidebarToggle),onClick:()=>c(!r),children:["Filters ",r?(0,n.jsx)(p.ALZ,{}):(0,n.jsx)(p.kWQ,{})]}),(0,n.jsx)(j,{categories:T,fields:_,setFields:N,subcategory:w,setSubCategory:S,open:r,filters:i,setFilters:s}),(0,n.jsxs)("div",{className:"".concat(h().content," ").concat(h().products),children:[(0,n.jsx)("div",{className:h().products,children:d.length>0?d.map((e,t)=>(0,n.jsx)(C.B,{product:e},e._id)):(0,n.jsx)("div",{className:h().placeholder,children:E?"Loading...":"No Product found"})}),E&&(0,n.jsx)("div",{className:h().loading,children:"Loading..."}),(null==v?void 0:v.totalRecord)>d.length&&!E&&(0,n.jsx)("div",{className:"anchor",ref:a,style:{height:"1rem",width:"1rem"}})]})]})}var T=a(41664),k=a.n(T);let q=e=>{var t,a,i,u;let{siteData:m}=e,{compare:p,setSiteConfig:g}=(0,l.useContext)(o.D);return((0,l.useEffect)(()=>{m&&g(m)},[m]),m)?(0,n.jsxs)("main",{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:null===(t=m.siteConfig)||void 0===t?void 0:t.siteTitle}),(0,n.jsx)("meta",{property:"og:title",content:null===(a=m.siteConfig)||void 0===a?void 0:a.siteTitle}),(0,n.jsx)("meta",{property:"og:image",content:m.logo}),(0,n.jsx)("meta",{property:"description",content:m.siteConfig.siteDescription}),(0,n.jsx)("meta",{property:"og:description",content:m.siteConfig.siteDescription}),(null==m?void 0:m.favicon)&&(0,n.jsx)("link",{rel:"icon",href:m.favicon})]}),(0,n.jsx)(r.Z,{}),(0,n.jsx)(S,{showPath:null==m?void 0:null===(i=m.siteConfig)||void 0===i?void 0:null===(u=i.landingPage)||void 0===u?void 0:u.viewLandingPage}),(0,n.jsx)(c.Z,{}),(null==p?void 0:p.length)>0&&(0,n.jsx)(k(),{href:b.Hb.compare,children:"Compare"})]}):(0,n.jsx)(d.Z,{})};var P=!0,E=q},12713:function(e){e.exports={paths:"products_paths__55GlB",container:"products_container__x7d_h",sidebarOpen:"products_sidebarOpen__7Bdu9",sidebar:"products_sidebar__b5QM9",clearFilters:"products_clearFilters__wgank",section:"products_section__a50fI",head:"products_head__pbuC4",sectionContent:"products_sectionContent__6yMTl",filterList:"products_filterList__5ZzyN",categorySection:"products_categorySection__BPRDk",categories:"products_categories__OGk1q",subcategories:"products_subcategories__GIiUY",backToCategories:"products_backToCategories__Nh1Vw",sidebarToggle:"products_sidebarToggle__tHi7m",content:"products_content__Fq2Bz",ribbon:"products_ribbon__b5c7V",products:"products_products__9hKj8",placeholder:"products_placeholder__ZT0QY",loading:"products_loading__tx5k8"}}},function(e){e.O(0,[445,937,13,260,874,255,556,801,441,774,888,179],function(){return e(e.s=8717)}),_N_E=e.O()}]);