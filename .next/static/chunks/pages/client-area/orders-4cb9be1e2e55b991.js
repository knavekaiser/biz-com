(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{5431:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/client-area/orders",function(){return s(51111)}])},73291:function(e,t,s){"use strict";var a=s(85893),i=s(20846),r=s(98003),c=s.n(r);let n=e=>{let{children:t}=e;return(0,a.jsxs)("div",{className:c().clientDashboard,children:[(0,a.jsx)(i.Z,{}),t]})};t.Z=n},20846:function(e,t,s){"use strict";var a=s(85893),i=s(61150),r=s(41664),c=s.n(r),n=s(11163),l=s(67294),d=s(98003),o=s.n(d);let _=()=>{let e=(0,n.useRouter)(),t=(0,l.useRef)([{label:"Orders",path:i.Hb.clientArea.orders},{label:"Payments",path:i.Hb.clientArea.payments,disabled:!0,tag:"Soon"},{label:"Profile",path:i.Hb.clientArea.profile}]);return(0,a.jsx)("div",{className:o().sidebar,children:(0,a.jsx)("div",{className:o().links,children:t.current.map(t=>(0,a.jsxs)(c(),{href:t.path,className:"".concat(e.pathname===t.path?o().active:""," ").concat(t.disabled?o().disabled:""),tabIndex:t.disabled?"1":"0",children:[t.label,t.tag&&(0,a.jsx)("span",{className:o().tag,children:t.tag})]},t.path))})})};t.Z=_},51111:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return y},default:function(){return Z}});var a=s(85893),i=s(67294),r=s(79711),c=s(90152),n=s(72860),l=s(28380),d=s(73981),o=s.n(d),_=s(46340),u=s(61150),h=s(98003),p=s.n(h),v=s(73291),m=s(88824),x=s(25675),j=s.n(x);let f=()=>{let[e,t]=(0,i.useState)([]),{get:s,loading:r}=(0,_.ib)(u.Hv.orders);return(0,i.useEffect)(()=>{s().then(e=>{let{data:s}=e;if(s&&s.success)return t(s.data);s&&(0,m.N)({type:"error",message:null==s?void 0:s.message})}).catch(e=>(0,m.N)({type:"error",message:e.message}))},[]),(0,a.jsx)(v.Z,{children:(0,a.jsxs)("div",{className:"".concat(p().content," ").concat(p().orders),children:[(0,a.jsx)("h1",{children:"Orders"}),(0,a.jsx)("div",{className:p().items,children:e.map(e=>(0,a.jsx)(b,{order:e},e._id))})]})})},b=e=>{var t,s,c,n,l;let{order:d}=e,{siteConfig:o}=(0,i.useContext)(r.D);return(0,a.jsxs)("div",{className:p().order,children:[(0,a.jsx)("div",{className:p().products,children:d.products.map(e=>(0,a.jsx)(A,{product:e},e._id))}),(0,a.jsxs)("div",{className:p().state,children:[(0,a.jsxs)("p",{className:p().price,children:[null===(t=o.siteConfig)||void 0===t?void 0:t.currency," ",d.products.reduce((e,t)=>{var s;return e+(t.product.price+((null===(s=t.variant)||void 0===s?void 0:s.price)||0))*(t.qty||1)},0).toLocaleString()]}),(0,a.jsx)("p",{className:p().status,children:(null===(s=null===(c=null==o?void 0:null===(n=o.siteConfig)||void 0===n?void 0:n.orderFields.find(e=>"status"===e.name))||void 0===c?void 0:null===(l=c.options)||void 0===l?void 0:l.find(e=>e.value===d.status))||void 0===s?void 0:s.label)||d.status})]})]})},A=e=>{var t,s,c,n;let{product:l}=e,{siteConfig:d}=(0,i.useContext)(r.D);return(0,a.jsxs)("div",{className:p().product,children:[(0,a.jsx)("div",{className:p().thumbnail,children:(0,a.jsx)(j(),{src:((null===(t=l.variant)||void 0===t?void 0:t.images)||l.product.images)[0],height:120,width:120,alt:l.title})}),(0,a.jsxs)("div",{className:p().productDetail,children:[(0,a.jsx)("h4",{children:l.product.title}),"qty"in l&&(0,a.jsx)(N,{label:"Qty",value:l.qty}),null===(s=null==d?void 0:null===(c=d.siteConfig)||void 0===c?void 0:null===(n=c.orderFields)||void 0===n?void 0:n.find(e=>"products"===e.name))||void 0===s?void 0:s.fields.filter(e=>!["product","variant","qty"].includes(e.name)).map(e=>(0,a.jsx)(N,{label:e.label,value:l[e.name]},e.name))]})]})},N=e=>{let{label:t,value:s}=e;return(0,a.jsxs)("p",{className:p().detail,children:[(0,a.jsx)("strong",{children:t}),": ",(0,a.jsx)("span",{children:s})]})};var g=s(87771);let k=e=>{let{siteData:t}=e,{setSiteConfig:s,user:d}=(0,i.useContext)(r.D);return((0,i.useEffect)(()=>{t&&s(t)},[t]),t)?d?(0,a.jsxs)("main",{className:o().checkout,children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)(f,{}),(0,a.jsx)(n.Z,{})]}):(0,a.jsxs)("main",{children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)("div",{className:"privateRouteFallback",children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)(g.YfK,{})}),(0,a.jsx)("span",{children:"Please log in to continue!"})]})}),(0,a.jsx)(n.Z,{})]}):(0,a.jsx)(l.Z,{})};var y=!0,Z=k},73981:function(e){e.exports={container:"checkout_container__wAtOP",summary:"checkout_summary__tTpw_",detail:"checkout_detail__SGew3",actions:"checkout_actions__xszzQ",forms:"checkout_forms__AL7Ec",contact:"checkout_contact__8ij8y",address:"checkout_address__oJrh_",products:"checkout_products__I2jqv",product:"checkout_product__IIiL1"}},98003:function(e){e.exports={clientDashboard:"clientArea_clientDashboard__pbVyb",sidebar:"clientArea_sidebar__yi9Jx",links:"clientArea_links__6AFP1",active:"clientArea_active__ulIWq",disabled:"clientArea_disabled__rrW1I",tag:"clientArea_tag__s3vb8",content:"clientArea_content__bepCT",orders:"clientArea_orders__3iPXl",items:"clientArea_items__CeJNX",order:"clientArea_order__dZjAi",products:"clientArea_products__ZTEsZ",product:"clientArea_product__wXZJW",thumbnail:"clientArea_thumbnail__9UEEh",productDetail:"clientArea_productDetail__HXg8B",detail:"clientArea_detail__w9Yv1",actions:"clientArea_actions__QkSof",devider:"clientArea_devider___EfJN",qty:"clientArea_qty__Dq6SU",price:"clientArea_price__OOc4x",state:"clientArea_state__yhCWl",status:"clientArea_status__3ZuvO",profile:"clientArea_profile__yHqJ5",contact:"clientArea_contact__XLe3n",address:"clientArea_address__PcQsk"}}},function(e){e.O(0,[317,738,365,660,817,255,321,473,594,678,441,774,888,179],function(){return e(e.s=5431)}),_N_E=e.O()}]);