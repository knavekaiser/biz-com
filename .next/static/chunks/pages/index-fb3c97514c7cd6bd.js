(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(42407)}])},32527:function(e,n,l){"use strict";l.d(n,{Z:function(){return g}});var a=l(85893),r=l(67294),t=l(41664),s=l.n(t),o=l(77807),c=l(61150),d=l(88824),u=l(58908),_=l(10736),h=l.n(_),p=l(25675),m=l.n(p);function g(){let[e,n]=(0,r.useState)([]),{get:l,loading:t}=(0,o.ib)(c.Hv.landingPageCategories);return((0,r.useEffect)(()=>{l().then(e=>{let{data:l}=e;(null==l?void 0:l.success)&&n(l.data)}).catch(e=>(0,d.N)({type:"error",message:e.message}))},[]),t)?(0,a.jsx)("div",{className:"".concat(h().loading),children:(0,a.jsx)(u.IDg,{className:"spinner"})}):(0,a.jsx)("div",{className:h().categories,children:(null==e?void 0:e.length)>0&&(null==e?void 0:e.map((e,n)=>(0,a.jsx)(s(),{href:{pathname:c.Hb.browse,query:{category:e.name}},children:(0,a.jsxs)("div",{className:h().category,children:[(0,a.jsx)(m(),{height:70,width:70,src:"https://crm.comify.in/crm/"+e.image}),(0,a.jsx)("div",{children:e.name})]},n)},e._id)))})}},74382:function(e,n,l){"use strict";l.d(n,{B:function(){return g}});var a=l(85893),r=l(67294),t=l(79711),s=l(2777),o=l(58908),c=l(37094),d=l(41664),u=l.n(d),_=l(82274),h=l.n(_),p=l(25675),m=l.n(p);let g=e=>{var n,l,d,_;let{product:p,onClick:g=()=>{}}=e,{siteConfig:x}=(0,r.useContext)(t.D);return(0,a.jsx)("div",{className:"".concat(h().productThumb),children:(0,a.jsxs)(u(),{href:"/item/".concat(p._id),onClick:g,children:[p.bestSeller&&(0,a.jsx)("div",{className:h().bestSellerTag,children:"Best Seller"}),(0,a.jsx)("div",{className:h().thumbnailWrapper,children:(0,a.jsx)(m(),{src:"https://crm.comify.in/crm/"+p.images[0],height:328,width:328,alt:p.title})}),(0,a.jsxs)("div",{className:h().productDetail,children:[(0,a.jsx)("h4",{children:p.title}),null==x?void 0:null===(n=x.siteConfig)||void 0===n?void 0:null===(l=n.productCard)||void 0===l?void 0:l.map(e=>{if("whatsappNumber"===e)return null;if(["string","number"].includes(typeof p[e])){if("price"===e){var n,l;return(0,a.jsxs)("span",{className:h().price,children:[(0,a.jsxs)("span",{className:h().currentPrice,children:[null==x?void 0:null===(n=x.siteConfig)||void 0===n?void 0:n.currency," ",p.price.toLocaleString()]}),p.originalPrice>p.price&&(0,a.jsxs)("span",{className:h().originalPrice,children:[null==x?void 0:null===(l=x.siteConfig)||void 0===l?void 0:l.currency," ",p.originalPrice.toLocaleString()]})]},e)}return(0,a.jsx)("span",{className:h().description,children:p[e]},e)}return"seller"===e&&p.seller?(0,a.jsxs)("div",{className:h().productSeller,children:[(0,a.jsx)(m(),{src:"https://crm.comify.in/crm/"+(p.seller.logo||p.seller.profileImg),height:20,width:20,alt:p.seller.name}),(0,a.jsx)("span",{className:h().productSeller,children:p.seller.name})]},e):null}),null==x?void 0:null===(d=x.siteConfig)||void 0===d?void 0:null===(_=d.productCard)||void 0===_?void 0:_.map(e=>"whatsappNumber"===e&&(x.whatsappNumber||p.whatsappNumber)?(0,a.jsx)("button",{style:{width:"min-content"},className:h().whatsappBtn,onClick:e=>{e.preventDefault();let n=document.createElement("a");n.href="whatsapp://send/?".concat(new URLSearchParams({phone:x.whatsappNumber||p.whatsappNumber,text:"I am interested to know more about this ".concat(p.title,"\n").concat(window.location.origin,"/item/").concat(p._id)}).toString()),n.rel="noreferrer",n.target="_blank",document.querySelector("body").append(n),n.click(),n.remove()},children:(0,a.jsx)(c.ff9,{})},e):"review"===e?(0,a.jsxs)("div",{className:h().rating,children:[(0,a.jsx)("span",{className:h().value,children:p.rating||0}),(0,a.jsxs)("span",{className:h().stars,children:[p.rating>=1?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{}),p.rating>=2?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{}),p.rating>=3?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{}),p.rating>=4?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{}),p.rating>=5?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{})]}),(0,a.jsx)(s.bTu,{className:h().chev}),(0,a.jsxs)("span",{className:h().reviewCount,children:["(",p.totalReview||0,")"]}),(0,a.jsxs)("div",{className:h().breakdown,children:[(0,a.jsxs)("div",{className:h().title,children:[(0,a.jsxs)("span",{className:h().stars,children:[p.rating>=2?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{}),p.rating>=1?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{}),p.rating>=3?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{}),p.rating>=4?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{}),p.rating>=5?(0,a.jsx)(o.aQ4,{}):(0,a.jsx)(o._9E,{})]}),(0,a.jsxs)("span",{children:[p.rating," out of 5"]})]}),(0,a.jsxs)("div",{className:h().subtitle,children:[p.totalReview," global ratings"]}),(0,a.jsx)("ul",{className:h().graph,children:[5,4,3,2,1].map((e,n)=>{let l=(p.ratingBreakdown||[]).find(n=>n.rating===e);return(0,a.jsxs)("li",{children:[(0,a.jsxs)("span",{children:[e," star"]}),(0,a.jsx)("span",{className:h().bar,children:(0,a.jsx)("span",{className:h().fill,style:{width:"".concat((((null==l?void 0:l.total)||0)/5*100).fix(),"%")}})}),(0,a.jsxs)("span",{className:h().percent,children:[(((null==l?void 0:l.total)||0)/5*100).fix(),"%"]})]},e)})})]})]},e):null)]})]})})}},42407:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSP:function(){return k},default:function(){return E}});var a=l(85893),r=l(67294),t=l(79711),s=l(9008),o=l.n(s),c=l(90152),d=l(72860),u=l(28380),_=l(32527),h=l(86529),p=l(80100),m=l.n(p);function g(){var e,n,l,s,o,c,d,u,_,p;let{siteConfig:g}=(0,r.useContext)(t.D);return(null===(e=g.siteConfig)||void 0===e?void 0:null===(n=e.landingPage)||void 0===n?void 0:null===(l=n.hero)||void 0===l?void 0:l.viewHeroSection)&&(null===(s=g.siteConfig)||void 0===s?void 0:null===(o=s.landingPage)||void 0===o?void 0:null===(c=o.hero)||void 0===c?void 0:null===(d=c.slides)||void 0===d?void 0:d.length)>0?(0,a.jsx)("div",{className:"".concat(m().hero," heroGlobal"),children:(0,a.jsx)(h.default,{containerClass:m().wrapper,responsive:{desktop:{breakpoint:{max:3e3,min:0},items:1}},dotListClass:m().dot,autoPlaySpeed:1e3,infinite:!0,showDots:!0,draggable:!1,children:null===(u=g.siteConfig)||void 0===u?void 0:null===(_=u.landingPage)||void 0===_?void 0:null===(p=_.hero)||void 0===p?void 0:p.slides.map(e=>(0,a.jsx)("img",{src:"https://crm.comify.in/crm/"+e},e))})}):null}var x=l(41664),v=l.n(x),j=l(74382),b=l(77807),f=l(61150),w=l(88824),N=l(19042),T=l(58908),P=l(29801),S=l.n(P);function y(){let[e,n]=(0,r.useState)([]),{get:l,loading:t}=(0,b.ib)(f.Hv.landingPageShelves);return((0,r.useEffect)(()=>{l().then(e=>{let{data:l}=e;(null==l?void 0:l.success)&&n(l.data)}).catch(e=>(0,w.N)({type:"error",message:e.message}))},[]),t)?(0,a.jsx)("div",{className:"".concat(S().loading),children:(0,a.jsx)(T.IDg,{className:"spinner"})}):(0,a.jsx)(a.Fragment,{children:(null==e?void 0:e.length)>0?null==e?void 0:e.map(e=>{var n;return(0,a.jsxs)("div",{className:"".concat(S().shelf," ").concat(S().products),children:[(0,a.jsxs)("div",{className:S().shelfHead,children:[(0,a.jsx)("span",{className:S().shelfTitle,children:(0,a.jsx)("h2",{children:e.title})}),(0,a.jsx)(v(),{href:{pathname:f.Hb.browse,query:e.query},children:(0,a.jsxs)("button",{className:"btn primary ".concat(S().more),children:["See All ",(0,a.jsx)(N.T7S,{})]})})]}),(0,a.jsx)("div",{className:"".concat(S().content," ").concat(e.horizontalSlide?S().horizontal:""),children:null===(n=e.products)||void 0===n?void 0:n.map((e,n)=>(0,a.jsx)(j.B,{product:e},e._id))})]},e.title||i)}):(0,a.jsx)("div",{className:S().shelfPlaceholder,children:(0,a.jsx)(v(),{href:f.Hb.browse,children:(0,a.jsxs)("button",{className:"btn primary",children:["Browse all of our products ",(0,a.jsx)(N.T7S,{})]})})})})}let C=e=>{var n,l,s,h;let{siteData:p}=e,{setSiteConfig:m}=(0,r.useContext)(t.D);return((0,r.useEffect)(()=>{p&&m(p)},[p]),p)?(0,a.jsxs)("main",{className:S().landingPage,children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("title",{children:null===(n=p.siteConfig)||void 0===n?void 0:n.siteTitle}),(0,a.jsx)("meta",{property:"og:title",content:null===(l=p.siteConfig)||void 0===l?void 0:l.siteTitle}),(0,a.jsx)("meta",{property:"og:image",content:p.logo}),(0,a.jsx)("meta",{property:"description",content:null===(s=p.siteConfig)||void 0===s?void 0:s.siteDescription}),(0,a.jsx)("meta",{property:"og:description",content:null===(h=p.siteConfig)||void 0===h?void 0:h.siteDescription}),(null==p?void 0:p.favicon)&&(0,a.jsx)("link",{rel:"icon",href:p.favicon})]}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(g,{}),(0,a.jsx)(_.Z,{}),(0,a.jsx)(y,{}),(0,a.jsx)(d.Z,{})]}):(0,a.jsx)(u.Z,{})};var k=!0,E=C},80100:function(e){e.exports={hero:"hero_hero__E71zm",background:"hero_background__d42AQ",wrapper:"hero_wrapper___mea1","react-multi-carousel-track":"hero_react-multi-carousel-track__VTQ4Z","react-multi-carousel-list":"hero_react-multi-carousel-list__gBGow",heroOne:"hero_heroOne__41jwv",heroItem:"hero_heroItem__nw1es",heroTitle:"hero_heroTitle__mOsVx",image:"hero_image__Sz7ec",heroThumbnail:"hero_heroThumbnail__msRVa",thumbnailWrapper:"hero_thumbnailWrapper__s4jTU",selected:"hero_selected__a_o4x","hero-item":"hero_hero-item__ywrQ0","hero-thumbnail":"hero_hero-thumbnail__l33X7","thumbnail-wrapper":"hero_thumbnail-wrapper__S7lr9"}},29801:function(e){e.exports={landingPage:"landingPage_landingPage__dxI4J",shelf:"landingPage_shelf__pDo49",shelfHead:"landingPage_shelfHead__2Cb_G",shelfTitle:"landingPage_shelfTitle__62M4q",more:"landingPage_more__lFu9F",content:"landingPage_content__pKncH",seller:"landingPage_seller__UTSyA",sellerBenner:"landingPage_sellerBenner__a_AIU",sellerDetail:"landingPage_sellerDetail__Y1dA_",sellerProfilePic:"landingPage_sellerProfilePic__dLXuM",detail:"landingPage_detail__EGsCN",usdc:"landingPage_usdc__0nWf9",horizontal:"landingPage_horizontal__TP1ub",explore:"landingPage_explore__6MaX6",devider:"landingPage_devider__gYXlr",filters:"landingPage_filters__PrRR2",chip:"landingPage_chip__ETZz4",selected:"landingPage_selected__4mRkD",shelfPlaceholder:"landingPage_shelfPlaceholder__cCoi0",loading:"landingPage_loading__o_5QX",countdown:"landingPage_countdown__0Ze9j"}},10736:function(e){e.exports={categories:"categories_categories__MKcxU",category:"categories_category__xdbMO"}},82274:function(e){e.exports={productThumb:"productThumbnail_productThumb__QTSPW",bestSellerTag:"productThumbnail_bestSellerTag__teRxI",thumbnailWrapper:"productThumbnail_thumbnailWrapper__w1LoF",thumbnail:"productThumbnail_thumbnail__U__tr",productDetail:"productThumbnail_productDetail__txvrY",productSeller:"productThumbnail_productSeller__N04U8",productFavorite:"productThumbnail_productFavorite__9RFXc",details:"productThumbnail_details__W1dzM",price:"productThumbnail_price__3PlLI",currentPrice:"productThumbnail_currentPrice__0ldcq",originalPrice:"productThumbnail_originalPrice__vfcuY",rating:"productThumbnail_rating__bE_sw",value:"productThumbnail_value__zlc8K",stars:"productThumbnail_stars__hp6Jc",chev:"productThumbnail_chev__DtMTw",reviewCount:"productThumbnail_reviewCount__KsiBn",breakdown:"productThumbnail_breakdown__xbd7e",subtitle:"productThumbnail_subtitle__YoIhp",title:"productThumbnail_title__Fwpn_",graph:"productThumbnail_graph__dfz_e",bar:"productThumbnail_bar___8F9l",fill:"productThumbnail_fill__9pT6p",percent:"productThumbnail_percent__W0g2_",whatsappBtn:"productThumbnail_whatsappBtn__kJ_Mk",description:"productThumbnail_description__TDaYH"}}},function(e){e.O(0,[317,738,365,660,817,255,321,473,509,510,193,777,529,441,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);