(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{55248:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return c(1432)}])},1432:function(e,s,c){"use strict";c.r(s),c.d(s,{__N_SSP:function(){return I},default:function(){return y}});var n=c(85893),t=c(67294),a=c(79711),l=c(90152),r=c(11163),o=c(72860),i=c(88824),u=c(61150),d=c(46340),h=c(73981),m=c.n(h);let x=e=>{let{label:s,value:c}=e;return(0,n.jsxs)("div",{className:m().detail,children:[(0,n.jsx)("span",{className:m().label,children:s}),(0,n.jsx)("span",{className:m().value,children:c})]})},_=()=>{var e,s;let{siteConfig:c,cart:l,emptyCart:o}=(0,t.useContext)(a.D),{post:h,loading:_}=(0,d.ib)(u.Hv.placeOrder),j=(0,r.useRouter)(),p=(0,t.useCallback)(e=>{h({payment_method:e}).then(e=>{let{data:s}=e;(null==s?void 0:s.success)?(0,i.N)({type:"success",message:s.message,callback:()=>{o(),j.push(u.Hb.clientArea.orders)}}):s&&(0,i.N)({type:"error",message:s.message})}).catch(e=>(0,i.N)({type:"error",message:e.message}))},[]);return(0,n.jsxs)("div",{className:m().summary,children:[(0,n.jsx)("h3",{children:"Summary"}),(0,n.jsx)(x,{label:"Total item costs",value:(null===(e=c.siteConfig)||void 0===e?void 0:e.currency)+" "+l.reduce((e,s)=>{var c;return e+(s.product.price+((null===(c=s.variant)||void 0===c?void 0:c.price)||0))*s.qty},0).toLocaleString()}),(0,n.jsx)(x,{label:"Total Shipping",value:(null===(s=c.siteConfig)||void 0===s?void 0:s.currency)+" 0"}),(null==l?void 0:l.length)>0&&(0,n.jsxs)("div",{className:m().actions,children:[(0,n.jsx)("button",{className:"btn secondary fullWidth",disabled:_,onClick:()=>p("payNow"),children:"Pay Now"}),(0,n.jsx)("button",{className:"btn fullWidth",disabled:_,onClick:()=>p("cod"),children:"Cash On delivery"})]})]})};var j=c(83505),p=c(87536);function v(){let{control:e}=(0,p.cI)();return(0,n.jsxs)("div",{className:m().forms,children:[(0,n.jsx)("h2",{children:"Shipping Address"}),(0,n.jsxs)("form",{children:[(0,n.jsxs)("section",{className:m().contact,children:[(0,n.jsx)("h3",{children:"Contact"}),(0,n.jsx)(j.II,{label:"Name",control:e,name:"name"}),(0,n.jsx)(j.II,{label:"Phone",control:e,name:"phone"})]}),(0,n.jsxs)("section",{className:m().address,children:[(0,n.jsx)("h3",{children:"Address"}),(0,n.jsx)(j.II,{label:"Street, house/apartment/unit*",control:e,name:"address"}),(0,n.jsx)(j.II,{label:"Apt, Suit, Unit etc. (Optional)",control:e,name:"address2"}),(0,n.jsx)(j.II,{label:"Country",control:e,name:"country"}),(0,n.jsx)(j.II,{label:"State",control:e,name:"state"}),(0,n.jsx)(j.II,{label:"City",control:e,name:"city"}),(0,n.jsx)(j.II,{label:"Zip Code",control:e,name:"zipCode"})]})]})]})}function N(e){let{product:s}=e;return(0,n.jsxs)("div",{className:"".concat(m().container),children:[(0,n.jsx)(v,{}),(0,n.jsx)(_,{product:s})]})}c(25675);var f=c(28380),b=c(87771);let k=e=>{let{siteData:s}=e,c=(0,r.useRouter)(),{setSiteConfig:i,user:u,cart:d}=(0,t.useContext)(a.D);return((0,t.useEffect)(()=>{s&&i(s)},[s]),(0,t.useEffect)(()=>{(null==d?void 0:d.length)===0&&c.replace("/")},[]),s)?u?(0,n.jsxs)("main",{className:m().checkout,children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)(N,{}),(0,n.jsx)(o.Z,{})]}):(0,n.jsxs)("main",{children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)("div",{className:"privateRouteFallback",children:(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("span",{className:"icon",children:(0,n.jsx)(b.YfK,{})}),(0,n.jsx)("span",{children:"Please log in to continue!"})]})}),(0,n.jsx)(o.Z,{})]}):(0,n.jsx)(f.Z,{})};var I=!0,y=k},73981:function(e){e.exports={container:"checkout_container__wAtOP",summary:"checkout_summary__tTpw_",detail:"checkout_detail__SGew3",actions:"checkout_actions__xszzQ",forms:"checkout_forms__AL7Ec",contact:"checkout_contact__8ij8y",address:"checkout_address__oJrh_",products:"checkout_products__I2jqv",product:"checkout_product__IIiL1"}}},function(e){e.O(0,[317,738,365,660,817,255,321,473,594,678,441,774,888,179],function(){return e(e.s=55248)}),_N_E=e.O()}]);