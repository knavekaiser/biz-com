(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{8717:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/browse",function(){return a(23242)}])},32527:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(85893),r=a(67294),l=a(41664),i=a.n(l),s=a(77807),c=a(61150),o=a(88824),u=a(58908),d=a(10736),m=a.n(d),p=a(25675),h=a.n(p);function g(){let[e,t]=(0,r.useState)([]),{get:a,loading:l}=(0,s.ib)(c.Hv.landingPageCategories);return((0,r.useEffect)(()=>{a().then(e=>{let{data:a}=e;(null==a?void 0:a.success)&&t(a.data)}).catch(e=>(0,o.N)({type:"error",message:e.message}))},[]),l)?(0,n.jsx)("div",{className:"".concat(m().loading),children:(0,n.jsx)(u.IDg,{className:"spinner"})}):(0,n.jsx)("div",{className:m().categories,children:(null==e?void 0:e.length)>0&&(null==e?void 0:e.map((e,t)=>(0,n.jsx)(i(),{href:{pathname:c.Hb.browse,query:{category:e.name}},children:(0,n.jsxs)("div",{className:m().category,children:[(0,n.jsx)(h(),{height:70,width:70,src:"https://crm.comify.in/crm/"+e.image}),(0,n.jsx)("div",{children:e.name})]},t)},e._id)))})}},74382:function(e,t,a){"use strict";a.d(t,{B:function(){return g}});var n=a(85893),r=a(67294),l=a(79711),i=a(2777),s=a(58908),c=a(37094),o=a(41664),u=a.n(o),d=a(82274),m=a.n(d),p=a(25675),h=a.n(p);let g=e=>{var t,a,o,d;let{product:p,onClick:g=()=>{}}=e,{siteConfig:_}=(0,r.useContext)(l.D);return(0,n.jsx)("div",{className:"".concat(m().productThumb),children:(0,n.jsxs)(u(),{href:"/item/".concat(p._id),onClick:g,children:[p.bestSeller&&(0,n.jsx)("div",{className:m().bestSellerTag,children:"Best Seller"}),(0,n.jsx)("div",{className:m().thumbnailWrapper,children:(0,n.jsx)(h(),{src:"https://crm.comify.in/crm/"+p.images[0],height:328,width:328,alt:p.title})}),(0,n.jsxs)("div",{className:m().productDetail,children:[(0,n.jsx)("h4",{children:p.title}),null==_?void 0:null===(t=_.siteConfig)||void 0===t?void 0:null===(a=t.productCard)||void 0===a?void 0:a.map(e=>{if("whatsappNumber"===e)return null;if(["string","number"].includes(typeof p[e])){if("price"===e){var t,a;return(0,n.jsxs)("span",{className:m().price,children:[(0,n.jsxs)("span",{className:m().currentPrice,children:[null==_?void 0:null===(t=_.siteConfig)||void 0===t?void 0:t.currency," ",p.price.toLocaleString()]}),p.originalPrice>p.price&&(0,n.jsxs)("span",{className:m().originalPrice,children:[null==_?void 0:null===(a=_.siteConfig)||void 0===a?void 0:a.currency," ",p.originalPrice.toLocaleString()]})]},e)}return(0,n.jsx)("span",{className:m().description,children:p[e]},e)}return"seller"===e&&p.seller?(0,n.jsxs)("div",{className:m().productSeller,children:[(0,n.jsx)(h(),{src:"https://crm.comify.in/crm/"+(p.seller.logo||p.seller.profileImg),height:20,width:20,alt:p.seller.name}),(0,n.jsx)("span",{className:m().productSeller,children:p.seller.name})]},e):null}),null==_?void 0:null===(o=_.siteConfig)||void 0===o?void 0:null===(d=o.productCard)||void 0===d?void 0:d.map(e=>"whatsappNumber"===e&&(_.whatsappNumber||p.whatsappNumber)?(0,n.jsx)("button",{style:{width:"min-content"},className:m().whatsappBtn,onClick:e=>{e.preventDefault();let t=document.createElement("a");t.href="whatsapp://send/?".concat(new URLSearchParams({phone:_.whatsappNumber||p.whatsappNumber,text:"I am interested to know more about this ".concat(p.title,"\n").concat(window.location.origin,"/item/").concat(p._id)}).toString()),t.rel="noreferrer",t.target="_blank",document.querySelector("body").append(t),t.click(),t.remove()},children:(0,n.jsx)(c.ff9,{})},e):"review"===e?(0,n.jsxs)("div",{className:m().rating,children:[(0,n.jsx)("span",{className:m().value,children:p.rating||0}),(0,n.jsxs)("span",{className:m().stars,children:[p.rating>=1?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{}),p.rating>=2?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{}),p.rating>=3?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{}),p.rating>=4?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{}),p.rating>=5?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{})]}),(0,n.jsx)(i.bTu,{className:m().chev}),(0,n.jsxs)("span",{className:m().reviewCount,children:["(",p.totalReview||0,")"]}),(0,n.jsxs)("div",{className:m().breakdown,children:[(0,n.jsxs)("div",{className:m().title,children:[(0,n.jsxs)("span",{className:m().stars,children:[p.rating>=2?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{}),p.rating>=1?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{}),p.rating>=3?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{}),p.rating>=4?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{}),p.rating>=5?(0,n.jsx)(s.aQ4,{}):(0,n.jsx)(s._9E,{})]}),(0,n.jsxs)("span",{children:[p.rating," out of 5"]})]}),(0,n.jsxs)("div",{className:m().subtitle,children:[p.totalReview," global ratings"]}),(0,n.jsx)("ul",{className:m().graph,children:[5,4,3,2,1].map((e,t)=>{let a=(p.ratingBreakdown||[]).find(t=>t.rating===e);return(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{children:[e," star"]}),(0,n.jsx)("span",{className:m().bar,children:(0,n.jsx)("span",{className:m().fill,style:{width:"".concat((((null==a?void 0:a.total)||0)/5*100).fix(),"%")}})}),(0,n.jsxs)("span",{className:m().percent,children:[(((null==a?void 0:a.total)||0)/5*100).fix(),"%"]})]},e)})})]})]},e):null)]})]})})}},23242:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return P},default:function(){return F}});var n=a(85893),r=a(67294),l=a(79711),i=a(9008),s=a.n(i),c=a(90152),o=a(72860),u=a(28380),d=a(32527),m=a(88824),p=a(83505),h=a(19042),g=a(12713),_=a.n(g),x=a(87536),b=a(77807),v=a(61150),f=a(11163),j=a(78633),y=a(2777);let N=e=>{var t;let{categories:a,subcategory:i,setSubcategory:s,fields:c,setFields:o,open:u,filters:d,setFilters:m}=e,g=(0,r.useRef)(!1),b=(0,r.useRef)({}),{siteConfig:{siteConfig:N}}=(0,r.useContext)(l.D),C=(0,f.useRouter)(),{control:S,reset:k,watch:E,getValues:q,setValue:P}=(0,x.cI)({});return((0,r.useEffect)(()=>{if(!g.current){var e,t,a;let n={sort:(null===(e=C.query)||void 0===e?void 0:e.sort)||"price-asc",category:C.query.category||void 0,subcategories:C.query.subcategories||[]};null==N||null===(t=N.browsePage)||void 0===t||null===(a=t.sidebarFilters)||void 0===a||a.forEach(e=>{C.query[e.fieldName]?n[e.fieldName]=C.query[e.fieldName]:(C.query[e.fieldName+"-min"]||C.query[e.fieldName+"-max"])&&("range"===e.filterType?n[e.fieldName+"-range"]={min:+C.query[e.fieldName+"-min"],max:+C.query[e.fieldName+"-max"]}:(n[e.fieldName+"-min"]=+C.query[e.fieldName+"-min"],n[e.fieldName+"-max"]=+C.query[e.fieldName+"-max"]))}),k(n),m(n),g.current=!0}},[null==N?void 0:null===(t=N.browsePage)||void 0===t?void 0:t.sidebarFilters,C.query]),u)?(0,n.jsxs)("form",{className:_().sidebar,children:[Object.keys(C.query).length>1&&(0,n.jsx)("div",{className:_().clearFilters,children:(0,n.jsxs)("button",{className:"btn",type:"button",onClick:()=>{k(b.current),o(null),C.replace({pathname:v.Hb.browsePage,query:{sort:C.query.sort}},void 0,{shallow:!0}),setTimeout(()=>{m({})},10)},children:[(0,n.jsx)(h.fMW,{}),"Clear All Filters"]})}),(0,n.jsx)(T,{label:"Sort",children:(0,n.jsx)(p.hQ,{control:S,name:"sort",options:[{label:"Price Low to High",value:"price-asc"},{label:"Price High to Low",value:"price-dsc"}],onChange:e=>m({...d,sort:e.value})})}),c?(0,n.jsxs)("section",{className:_().backToCategories,onClick:()=>{o(null),m(e=>({category:e.category,subcategory:void 0}))},children:[(0,n.jsx)(j.And,{style:{fontSize:"1.3em"}})," ",(0,n.jsxs)("p",{className:"flex align-center gap_5",children:[d.category," ",(0,n.jsx)(y.Tfp,{})," ",d.subcategory]})]}):(0,n.jsxs)("section",{className:_().categorySection,children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Categories"})}),(0,n.jsx)("ul",{className:_().categories,children:a.map(e=>{var t;return(0,n.jsxs)("li",{children:[(0,n.jsx)(p.XZ,{label:e.name,checked:d.category===e.name,onChange:t=>{d.category===e.name?m(e=>({...e,category:void 0,subcategories:[]})):m(t=>({...t,category:e.name,subcategories:(e.subcategories||[]).map(e=>e.name)}))}}),(null===(t=e.subcategories)||void 0===t?void 0:t.length)>0&&(0,n.jsx)("ul",{className:_().subcategories,children:e.subcategories.map(t=>(0,n.jsx)("li",{label:t.name,children:(0,n.jsx)(p.XZ,{label:t.name,checked:d.category===e.name&&(d.subcategories||[]).includes(t.name),onChange:a=>{var n,r;d.category===e.name&&(d.subcategories||[]).includes(t.name)?m(e=>({...e,subcategories:e.subcategories.filter(e=>e!==t.name)})):m(a=>({...a,category:e.name,subcategories:a.category!==e.name?[t.name]:[...(a.subcategories||[]).filter(t=>(e.subcategories||[]).some(e=>e.name===t)),t.name]})),o(a.target.checked?null===(n=null==N?void 0:null===(r=N.browsePage)||void 0===r?void 0:r.sidebarFilters.find(a=>a.category===e.name&&a.subcategory===t.name))||void 0===n?void 0:n.filters:null)}})},t.name))})]},e.name)})})]}),(c||[]).map(e=>{let t=N.productFields.find(t=>t.name===e.fieldName);return t?"textSearch"===e.filterType||"match"===e.filterType?(b.current={...b.current,[t.name]:""},(0,n.jsx)(T,{label:t.label,children:(0,n.jsx)(p.II,{control:S,name:t.name,type:t.inputType,onChange:e=>{m(a=>({...a,[t.name]:e.target.value||""}))}})},e.fieldName)):"minMax"===e.filterType?(b.current={...b.current,["".concat(t.name,"-min")]:"",["".concat(t.name,"-max")]:""},(0,n.jsxs)(T,{label:t.label,children:[(0,n.jsx)(p.II,{control:S,name:"".concat(t.name,"-min"),type:t.inputType,placeholder:"MIN",onChange:e=>{let a=q("".concat(t.name,"-max"));+e.target.value<=+a?m(n=>({...n,["".concat(t.name,"-min")]:+e.target.value,["".concat(t.name,"-max")]:+a})):m(e=>({...e,["".concat(t.name,"-min")]:"",["".concat(t.name,"-max")]:""}))}}),(0,n.jsx)(p.II,{control:S,name:"".concat(t.name,"-max"),type:t.inputType,placeholder:"MAX",onChange:e=>{let a=q("".concat(t.name,"-min"));+e.target.value>=+a?m(n=>({...n,["".concat(t.name,"-max")]:+e.target.value,["".concat(t.name,"-min")]:+a})):m(e=>({...e,["".concat(t.name,"-max")]:"",["".concat(t.name,"-min")]:""}))}}),+q("".concat(t.name,"-max"))<+q("".concat(t.name,"-min"))&&(0,n.jsx)("p",{className:"subtitle1",children:"Max must be greater then Min"})]},e.fieldName)):"range"===e.filterType?(0,n.jsx)(T,{label:t.label,children:(0,n.jsx)(p.e6,{control:S,name:"".concat(t.name,"-range"),setValue:P,type:t.inputType,placeholder:"".concat(t.label," range"),onChange:e=>{let{min:a,max:n}=e;a<=n?m(e=>({...e,["".concat(t.name,"-min")]:a,["".concat(t.name,"-max")]:n})):m(e=>({...e,["".concat(t.name,"-min")]:"",["".concat(t.name,"-max")]:""}))},min:+e.min,max:+e.max})},e.fieldName):["list","dropdown"].includes(e.filterStyle)?(b.current={...b.current,[t.name]:[]},(0,n.jsx)(w,{field:t,sidebarItem:e,setFilters:m,control:S},e.fieldName)):void 0:null})]}):null},w=e=>{let{field:t,setFilters:a,sidebarItem:l,control:i}=e,[s,c]=(0,r.useState)([]),[o,u]=(0,r.useState)([]),{get:d}=(0,b.ib)(v.Hv.elements+"/".concat((null==t?void 0:t.collection)||""));return((0,r.useEffect)(()=>{"list"===l.filterStyle&&a(e=>({...e,[t.name]:(null==s?void 0:s.length)?s:""}))},[s]),(0,r.useEffect)(()=>{"collection"===t.optionType&&d().then(e=>{let{data:a}=e;if(null==a?void 0:a.success)return u(a.data.map(e=>({label:e[t.optionLabel],value:e[t.optionValue]})))}).catch(e=>console.log(e))},[]),"list"===l.filterStyle)?(0,n.jsx)(T,{label:t.label,children:(0,n.jsx)("ul",{className:_().filterList,children:("array"===t.optionType?t.options:o).map((e,a)=>(0,n.jsxs)("li",{children:[(0,n.jsx)("input",{id:"".concat(t.name,"_").concat(e.label),type:"checkbox",checked:s.includes(e.value),onChange:t=>{s.includes(e.value)?c(t=>t.filter(t=>t!==e.value)):c(t=>[...t,e.value])}})," ",(0,n.jsx)("label",{htmlFor:"".concat(t.name,"_").concat(e.label),children:e.label})]},a))})}):"dropdown"===l.filterStyle?(0,n.jsx)(T,{label:t.label,children:(0,n.jsx)(p.Ph,{control:i,..."array"===t.optionType&&{options:t.options},..."collection"===t.optionType&&{url:"".concat(v.Hv.elements,"/").concat(t.collection),getQuery:(e,a)=>({...e&&{[t.optionLabel]:e},...a&&{[t.optionValue]:a}}),handleData:e=>({label:e[t.optionLabel],value:e[t.optionValue]})},multiple:!0,name:t.name,formOptions:{required:t.required},className:_().itemName,onChange:e=>{a(a=>({...a,[t.name]:e.length?e.map(e=>e.value):""}))}})}):null},T=e=>{let{label:t,children:a,className:i}=e,{siteConfig:{siteConfig:s}}=(0,r.useContext)(l.D),[c,o]=(0,r.useState)(!0);return(0,n.jsxs)("div",{className:"".concat(_().section," ").concat(i||""),children:[(0,n.jsx)("div",{className:_().head,onClick:()=>o(!c),children:t}),c&&(0,n.jsx)("div",{className:_().sectionContent,onClick:e=>e.stopPropagation(),children:a})]})};var C=a(74382);function S(e){let{showPath:t}=e,a=(0,r.useRef)(),l=(0,f.useRouter)(),[i,s]=(0,r.useState)({sort:"price-asc"}),[c,o]=(0,r.useState)(!1),[u,d]=(0,r.useState)([]),[g,x]=(0,r.useState)({page:1,pageSize:10}),[j,y]=(0,r.useState)(null),[w,T]=(0,r.useState)(null),[S,k]=(0,r.useState)([]),{get:E}=(0,b.ib)(v.Hv.categories),{get:q,loading:P}=(0,b.ib)(v.Hv.browse);(0,r.useEffect)(()=>{l.replace({pathname:v.Hb.browse,query:{...Object.entries({...l.query,...i}).filter((e,t)=>{let[a,n]=e;return 0===n||n}).reduce((e,t)=>(e[t[0]]=t[1],e),{})}},void 0,{shallow:!0})},[i]);let F=(0,r.useCallback)(function(){let{page:e,pageSize:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P||q({query:{...l.query,page:e||(null==g?void 0:g.page)||1,pageSize:t||(null==g?void 0:g.pageSize)||10}}).then(e=>{let{data:t}=e;if(!(null==t?void 0:t.success)){(null==t?void 0:t.message)&&(0,m.N)({type:"error",message:t.message});return}d(e=>{var a;return(null===(a=t.metadata)||void 0===a?void 0:a.page)===1?t.data:[...e,...t.data]}),x(t.metadata)}).catch(e=>(0,m.N)({type:"error",message:e.message}))},[l.query,g,P]);return(0,r.useEffect)(()=>{F({page:1,pageSize:10})},[l.query]),(0,r.useEffect)(()=>{E().then(e=>{let{data:t}=e;(null==t?void 0:t.success)?k(t.data):(0,m.N)({type:"error",message:t.message})}).catch(e=>(0,m.N)({type:"error",message:e.message})),window.innerWidth>480&&o(!0)},[]),(0,r.useEffect)(()=>{let e=window.scrollY,t=()=>{var t;let n=e<window.scrollY?"down":"up";e=window.scrollY;let r=(null===(t=a.current)||void 0===t?void 0:t.getBoundingClientRect().top)<window.innerHeight;"down"===n&&!P&&r&&F({page:((null==g?void 0:g.page)||0)+1,pageSize:(null==g?void 0:g.pageSize)||10})};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[P,g]),(0,n.jsxs)("div",{className:"".concat(_().container," ").concat(c?_().sidebarOpen:""),children:[t&&(0,n.jsx)(p.nB,{paths:[{label:"Home",path:"/"},{label:"Browse"}],className:_().paths}),(0,n.jsxs)("button",{className:"btn ".concat(_().sidebarToggle),onClick:()=>o(!c),children:["Filters ",c?(0,n.jsx)(h.ALZ,{}):(0,n.jsx)(h.kWQ,{})]}),(0,n.jsx)(N,{categories:S,fields:j,setFields:y,subcategory:w,setSubCategory:T,open:c,filters:i,setFilters:s}),(0,n.jsxs)("div",{className:"".concat(_().content," ").concat(_().products),children:[(0,n.jsx)("div",{className:_().products,children:u.length>0?u.map((e,t)=>(0,n.jsx)(C.B,{product:e},e._id)):(0,n.jsx)("div",{className:_().placeholder,children:P?"Loading...":"No Product found"})}),P&&(0,n.jsx)("div",{className:_().loading,children:"Loading..."}),(null==g?void 0:g.totalRecord)>u.length&&!P&&(0,n.jsx)("div",{className:"anchor",ref:a,style:{height:"1rem",width:"1rem"}})]})]})}var k=a(41664),E=a.n(k);let q=e=>{var t,a,i,m;let{siteData:p}=e,{compare:h,setSiteConfig:g}=(0,r.useContext)(l.D);return((0,r.useEffect)(()=>{p&&g(p)},[p]),p)?(0,n.jsxs)("main",{style:{gridTemplateRows:"max-content max-content 1fr max-content"},children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:null===(t=p.siteConfig)||void 0===t?void 0:t.siteTitle}),(0,n.jsx)("meta",{property:"og:title",content:null===(a=p.siteConfig)||void 0===a?void 0:a.siteTitle}),(0,n.jsx)("meta",{property:"og:image",content:p.logo}),(0,n.jsx)("meta",{property:"description",content:p.siteConfig.siteDescription}),(0,n.jsx)("meta",{property:"og:description",content:p.siteConfig.siteDescription}),(null==p?void 0:p.favicon)&&(0,n.jsx)("link",{rel:"icon",href:p.favicon})]}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(d.Z,{}),(0,n.jsx)(S,{showPath:null==p?void 0:null===(i=p.siteConfig)||void 0===i?void 0:null===(m=i.landingPage)||void 0===m?void 0:m.viewLandingPage}),(0,n.jsx)(o.Z,{}),(null==h?void 0:h.length)>0&&(0,n.jsx)(E(),{href:v.Hb.compare,children:"Compare"})]}):(0,n.jsx)(u.Z,{})};var P=!0,F=q},12713:function(e){e.exports={paths:"products_paths__55GlB",container:"products_container__x7d_h",sidebarOpen:"products_sidebarOpen__7Bdu9",sidebar:"products_sidebar__b5QM9",clearFilters:"products_clearFilters__wgank",section:"products_section__a50fI",head:"products_head__pbuC4",sectionContent:"products_sectionContent__6yMTl",filterList:"products_filterList__5ZzyN",categorySection:"products_categorySection__BPRDk",categories:"products_categories__OGk1q",subcategories:"products_subcategories__GIiUY",backToCategories:"products_backToCategories__Nh1Vw",sidebarToggle:"products_sidebarToggle__tHi7m",content:"products_content__Fq2Bz",ribbon:"products_ribbon__b5c7V",products:"products_products__9hKj8",placeholder:"products_placeholder__ZT0QY",loading:"products_loading__tx5k8"}},10736:function(e){e.exports={categories:"categories_categories__MKcxU",category:"categories_category__xdbMO"}},82274:function(e){e.exports={productThumb:"productThumbnail_productThumb__QTSPW",bestSellerTag:"productThumbnail_bestSellerTag__teRxI",thumbnailWrapper:"productThumbnail_thumbnailWrapper__w1LoF",thumbnail:"productThumbnail_thumbnail__U__tr",productDetail:"productThumbnail_productDetail__txvrY",productSeller:"productThumbnail_productSeller__N04U8",productFavorite:"productThumbnail_productFavorite__9RFXc",details:"productThumbnail_details__W1dzM",price:"productThumbnail_price__3PlLI",currentPrice:"productThumbnail_currentPrice__0ldcq",originalPrice:"productThumbnail_originalPrice__vfcuY",rating:"productThumbnail_rating__bE_sw",value:"productThumbnail_value__zlc8K",stars:"productThumbnail_stars__hp6Jc",chev:"productThumbnail_chev__DtMTw",reviewCount:"productThumbnail_reviewCount__KsiBn",breakdown:"productThumbnail_breakdown__xbd7e",subtitle:"productThumbnail_subtitle__YoIhp",title:"productThumbnail_title__Fwpn_",graph:"productThumbnail_graph__dfz_e",bar:"productThumbnail_bar___8F9l",fill:"productThumbnail_fill__9pT6p",percent:"productThumbnail_percent__W0g2_",whatsappBtn:"productThumbnail_whatsappBtn__kJ_Mk",description:"productThumbnail_description__TDaYH"}}},function(e){e.O(0,[317,738,365,660,817,255,321,473,509,510,193,777,441,774,888,179],function(){return e(e.s=8717)}),_N_E=e.O()}]);