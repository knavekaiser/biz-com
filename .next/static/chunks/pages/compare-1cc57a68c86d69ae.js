(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{58328:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compare",function(){return s(74891)}])},50230:function(e,t,s){"use strict";s.d(t,{Z:function(){return p},v:function(){return m}});var r=s(85893),n=s(67294),a=s(79711),c=s(84196),i=s.n(c),l=s(46340),u=s(61150),o=s(88824),d=s(74382);function p(e){let{product:t}=e;return(0,r.jsx)("div",{className:"".concat(i().container),children:(0,r.jsx)("div",{className:i().wrapper,children:(0,r.jsx)(_,{product:t})})})}let _=()=>{let{compare:e}=(0,n.useContext)(a.D),[t,s]=(0,n.useState)([]),{get:c,loading:d}=(0,l.ib)(u.Hv.browse);return(0,n.useEffect)(()=>{e.length&&c({query:{_ids:e}}).then(e=>{let{data:t}=e;if(!t.success)return(0,o.N)({type:"error",message:t.message});s(t.data)}).catch(e=>(0,o.N)({type:"error",message:e.message}))},[]),(0,r.jsxs)("div",{className:i().products,children:[(0,r.jsx)("h2",{children:"Product Comparison"}),d?(0,r.jsx)("p",{children:"Loading..."}):0===t.length?(0,r.jsx)("p",{children:"No products to compare"}):(0,r.jsx)(m,{products:t})]})},m=e=>{let{products:t}=e,{siteConfig:s}=(0,n.useContext)(a.D),[c,l]=(0,n.useState)([]);return(0,n.useEffect)(()=>{if(t.length){var e;l(null==s?void 0:null===(e=s.siteConfig)||void 0===e?void 0:e.productFields.filter(e=>!e.subCategory||e.subCategory===t[0].subCategory).filter(e=>!["title","description","images","price","whatsappNumber","latlng","specification","variants","category","subCategory"].includes(e.name)))}},[t]),(0,r.jsxs)("div",{className:i().items,children:[(0,r.jsxs)("div",{className:i().product,children:[(0,r.jsx)("div",{}),c.map(e=>(0,r.jsx)("p",{className:i().detailLabel,children:e.label},e.name))]}),t.map((e,t)=>(0,r.jsx)(f,{product:e,fields:c},t))]})},f=e=>{let{product:t,fields:s}=e;return(0,r.jsxs)("div",{className:i().product,children:[(0,r.jsx)(d.B,{product:t}),s.map(e=>{let s=t[e.name];return"array"===e.dataType?(0,r.jsx)("p",{className:i().detail,children:(null==s?void 0:s.join(", "))||"N/A"},e.name):(0,r.jsx)("p",{className:i().detail,children:s||"N/A"},e.name)})]})}},74891:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return _}});var r=s(85893),n=s(67294),a=s(79711),c=s(90152),i=s(72860),l=s(50230),u=s(28380),o=s(84196),d=s.n(o);let p=e=>{let{siteData:t}=e,{setSiteConfig:s}=(0,n.useContext)(a.D);return((0,n.useEffect)(()=>{t&&s(t)},[t]),t)?(0,r.jsxs)("main",{className:d().checkout,children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(i.Z,{})]}):(0,r.jsx)(u.Z,{})};var _=!0;t.default=p},84196:function(e){e.exports={container:"style_container__MVpGC",wrapper:"style_wrapper__MBIS0",products:"style_products__cGXnc",items:"style_items___kUo9",product:"style_product__oAPk0",detailLabel:"style_detailLabel__bgUQv",detail:"style_detail__HYN3T"}}},function(e){e.O(0,[445,937,13,260,874,255,556,801,441,774,888,179],function(){return e(e.s=58328)}),_N_E=e.O()}]);