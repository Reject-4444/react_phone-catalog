(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{25:function(e,t,c){e.exports={loader:"Loader_loader__2hZcM",rotate:"Loader_rotate__3QseU",loader_wrapper:"Loader_loader_wrapper__3WBvi"}},26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(27),a=c.n(s),n=(c(32),c(6)),r=c(4),i=c(3),l=c(1),o=c(10),d=c.n(o),j=(c(33),c.p+"static/media/Logo.c9417692.svg"),u=c(9),b=c(0),p=Object(l.createContext)({likedDevices:[],setLikedDevices:function(){},addedDevices:[],setAddedDevices:function(){},query:"",handleQChange:function(){},device:"",handleAddFn:function(){},handleLikeFn:function(){}}),h=function(e){var t=e.children,c=Object(l.useState)([]),s=Object(i.a)(c,2),a=s[0],o=s[1],d=Object(l.useState)([]),j=Object(i.a)(d,2),h=j[0],m=j[1],O=Object(n.d)(),_=Object(i.a)(O,2),x=_[0],v=_[1],f=Object(r.n)().pathname,g=Object(l.useMemo)((function(){var e=f.includes("phones"),t=f.includes("tablets"),c=f.includes("accessories"),s=f.includes("favourites");return e?"phones":t?"tablets":c?"accessories":s?"favourites":""}),[f]),N=x.get("query")||"",y={likedDevices:a,setLikedDevices:o,addedDevices:h,setAddedDevices:m,query:N,handleQChange:function(e){var t=new URLSearchParams(x);e.target.value?t.set("query",e.target.value):t.delete("query"),v(t)},device:g,handleAddFn:function(e,t){e.preventDefault(),e.stopPropagation();var c=h.some((function(e){return e.id===t.id}));c?(m((function(e){return e.filter((function(e){return e.id!==t.id}))})),localStorage.removeItem("added")):(m((function(e){return[].concat(Object(u.a)(e),[t])})),localStorage.setItem("added","".concat(t.id)))},handleLikeFn:function(e,t){e.preventDefault(),e.stopPropagation();var c=a.some((function(e){return e.id===t.id}));c?(o((function(e){return e.filter((function(e){return e.id!==t.id}))})),localStorage.removeItem("liked")):(o((function(e){return[].concat(Object(u.a)(e),[t])})),localStorage.setItem("liked","".concat(t.id)))}};return Object(b.jsx)(p.Provider,{value:y,children:t})},m=function(){var e=function(e){var t=e.isActive;return d()("nav__link",{"is-active":t})},t=Object(l.useState)(0),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(l.useState)(0),o=Object(i.a)(r,2),u=o[0],h=o[1],m=Object(l.useContext)(p),O=m.likedDevices,_=m.addedDevices,x=Object(l.useContext)(p),v=x.query,f=x.handleQChange,g=x.device;Object(l.useEffect)((function(){a(Object.keys(localStorage).filter((function(e){return"liked"===e})).length)}),[O.length]),Object(l.useEffect)((function(){h(Object.keys(localStorage).filter((function(e){return"added"===e})).length)}),[_.length]);var N=Object(n.d)(),y=Object(i.a)(N,1)[0];return Object(b.jsxs)("div",{className:"header__wrapper",children:[Object(b.jsxs)("div",{className:"links-wrapper",children:[Object(b.jsx)(n.c,{to:{pathname:"/",search:y.toString()},className:"main-logo",children:Object(b.jsx)("img",{src:j,alt:"Logo",className:"logo__img"})}),Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{className:"nav__list",children:[Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsx)(n.c,{to:{pathname:"/",search:y.toString()},className:e,children:"Home"})}),Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsx)(n.c,{to:{pathname:"/phones",search:y.toString()},className:e,children:"Phones"})}),Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsx)(n.c,{to:{pathname:"/tablets",search:y.toString()},className:e,children:"Tablets"})}),Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsx)(n.c,{to:{pathname:"/accessories",search:y.toString()},className:e,children:"Accessories"})})]})})]}),Object(b.jsxs)("div",{className:"logos-wrapper",children:[Object(b.jsx)("div",{className:d()("nav__search",{hidden:!g}),children:Object(b.jsx)("input",{onChange:f,className:"nav__search-input",placeholder:"Search in ".concat(g,"..."),type:"text",value:v})}),Object(b.jsx)("div",{className:"logo--like-wrapper",children:Object(b.jsx)(n.c,{to:"/",className:"logo logo--like",children:0!==s&&Object(b.jsx)("span",{className:"logo--amount",children:s})})}),Object(b.jsx)(n.c,{to:"/",className:"logo logo--cart",children:0!==u&&Object(b.jsx)("span",{className:"logo--amount",children:u})})]})]})},O=(c(36),function(){return Object(b.jsx)("div",{className:"main-container",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"footer__wrapper",children:[Object(b.jsx)(n.c,{to:"/",className:"main-logo",children:Object(b.jsx)("img",{src:j,alt:"Logo",className:"logo__img"})}),Object(b.jsx)("nav",{className:"footer-nav",children:Object(b.jsxs)("ul",{className:"footer-nav__list",children:[Object(b.jsx)("li",{className:"footer-nav__item",children:Object(b.jsx)(n.c,{className:"footer-nav__link",to:"/",children:"Github"})}),Object(b.jsx)("li",{className:"footer-nav__item",children:Object(b.jsx)(n.c,{className:"footer-nav__link",to:"/s",children:"Contacts"})}),Object(b.jsx)("li",{className:"footer-nav__item",children:Object(b.jsx)(n.c,{className:"footer-nav__link",to:"/d",children:"Rights"})})]})}),Object(b.jsxs)("div",{className:"footer-button-wrapper",children:["Back to top",Object(b.jsx)(n.b,{to:"/",className:"footer-button",children:"^"})]})]})})})}),_=function(){return Object(b.jsxs)(h,{children:[Object(b.jsx)("header",{className:"header",children:Object(b.jsx)(m,{})}),Object(b.jsx)("main",{className:"main",children:Object(b.jsx)(r.a,{})}),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)(O,{})})]})},x=c(24),v=c(7),f=c(5),g=c.n(f),N=c.p+"static/media/home-page-slider-picture1.3fb173f0.png",y=function(e){var t=Object(l.useState)(!1),c=Object(i.a)(t,2),s=c[0],a=c[1],n=Object(l.useState)(""),r=Object(i.a)(n,2),o=r[0],d=r[1],j=function(){var t=Object(v.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),t.t0 instanceof Error?d(t.t0.message):d("An unknown error occurred.");case 9:return t.prev=9,a(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[j,s,o]},w=(c(37),c(38),function(e,t){var c=t?t/100:1;return 1===c?e:Math.round(e-e*c)}),k=function(e){var t=e.product,c=t.imageUrl.replace("phones","products"),s=Object(n.d)(),a=Object(i.a)(s,1)[0],r=Object(l.useContext)(p),o=r.handleAddFn,j=r.handleLikeFn,u=t.name,h=t.price,m=t.discount,O=t.screen,_=t.capacity,x=t.ram,v=t.id,f=Object(l.useState)(!1),g=Object(i.a)(f,2),N=g[0],y=g[1],k=Object(l.useState)(!1),S=Object(i.a)(k,2),C=S[0],P=S[1];return Object(l.useEffect)((function(){P(localStorage.getItem("liked")===v.toString())}),[localStorage.getItem("liked")]),Object(l.useEffect)((function(){return y(localStorage.getItem("added")===v.toString())}),[localStorage.getItem("added")]),Object(b.jsx)(n.b,{className:"card__link card--margin-vertical",to:{pathname:"/product/".concat(v),search:a.toString()},children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{className:"card__img",src:c,alt:"device"}),Object(b.jsx)("h2",{className:"card__title",children:u}),Object(b.jsx)("div",{className:"card__price",children:w(h,m)===h?Object(b.jsx)("span",{className:"card__price-discount",children:"$".concat(h)}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{className:"card__price-discount",children:"$".concat(w(h,m))}),Object(b.jsx)("span",{className:"card__price-amount",children:"$".concat(h)})]})}),Object(b.jsx)("div",{className:"card__line"}),Object(b.jsxs)("div",{className:"card__description",children:[Object(b.jsxs)("div",{className:"card__description-about",children:[Object(b.jsx)("span",{className:"about",children:"Screen"}),Object(b.jsx)("span",{className:"about-description",children:O})]}),Object(b.jsxs)("div",{className:"card__description-about",children:[Object(b.jsx)("span",{className:"about",children:"Capacity"}),Object(b.jsx)("span",{className:"about-description",children:_})]}),Object(b.jsxs)("div",{className:"card__description-about",children:[Object(b.jsx)("span",{className:"about",children:"RAM"}),Object(b.jsx)("span",{className:"about-description",children:x})]})]}),Object(b.jsxs)("div",{className:"card__button-wrapper",children:[N?Object(b.jsx)("button",{className:"card__button-cart card__button-cart--selected",type:"button",onClick:function(e){return o(e,t)},children:"Selected"}):Object(b.jsx)("button",{className:"card__button-cart",type:"button",onClick:function(e){return o(e,t)},children:"Add to cart"}),Object(b.jsx)("button",{"aria-label":"like",className:d()("card__button-like",{"card__button-like--white":!C,"card__button-like--red":C}),type:"button",onClick:function(e){return j(e,t)}})]})]})})},S=function(e){var t=e.products,c=e.title,s=Object(l.useState)(0),a=Object(i.a)(s,2),n=a[0],r=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"hot-prices__top-wrapper",children:[Object(b.jsx)("h2",{className:"hot-prices__title",children:c}),Object(b.jsxs)("div",{className:"hot-prices__slider-button-wrapper",children:[Object(b.jsx)("button",{className:"hot-prices__slider-button",type:"button",onClick:function(){r(n-4>=0?n-4:t.length-4)},children:"<"}),Object(b.jsx)("button",{className:"hot-prices__slider-button",type:"button",onClick:function(){n+4<t.length?r(n+4):r(0)},children:">"})]})]}),Object(b.jsx)("div",{className:"slider-container","data-cy":"cardsContainer",children:t.slice(n,n+4).map((function(e){return Object(b.jsx)(k,{product:e,"data-cy":"cardsContainer"},e.id)}))})]})},C=c(25),P=c.n(C);var L,A=function(){return Object(b.jsx)("div",{className:P.a.loader_wrapper,children:Object(b.jsx)("div",{className:P.a.loader})})},I=c.p+"static/media/Phones.cbed3047.png",M=c.p+"static/media/Tablets.c198526a.png",D=c.p+"static/media/Accessories.b914f412.png",E=(c(39),function(e){var t=e.amountOfDevices,c=t.phones,s=t.tablets,a=t.accessories,r=Object(n.d)(),l=Object(i.a)(r,1)[0];return Object(b.jsxs)("div",{className:"shop-by-category",children:[Object(b.jsx)("h2",{className:"shop-by-category__title",children:"Shop by category"}),Object(b.jsxs)("div",{className:"shop-by-category__wrapper","data-cy":"categoryLinksContainer",children:[Object(b.jsx)(n.b,{className:"shop-by-category__link",to:{pathname:"/phones",search:l.toString()},children:Object(b.jsxs)("div",{className:"shop-by-category__img-wrapper",children:[Object(b.jsx)("img",{className:"shop-by-category__img",src:I,alt:"phones"}),Object(b.jsxs)("div",{className:"shop-by-category__img-description",children:[Object(b.jsx)("h3",{className:"shop-by-category__img-title",children:"Mobile phones"}),Object(b.jsx)("p",{className:"shop-by-category__img-amount",children:"".concat(c," models")})]})]})}),Object(b.jsx)(n.b,{className:"shop-by-category__link",to:{pathname:"/tablets",search:l.toString()},children:Object(b.jsxs)("div",{className:"shop-by-category__img-wrapper",children:[Object(b.jsx)("img",{className:"shop-by-category__img",src:M,alt:"tablets"}),Object(b.jsxs)("div",{className:"shop-by-category__img-description",children:[Object(b.jsx)("h3",{className:"shop-by-category__img-title",children:"Tablets"}),Object(b.jsx)("p",{className:"shop-by-category__img-amount",children:"".concat(s," models")})]})]})}),Object(b.jsx)(n.b,{className:"shop-by-category__link",to:{pathname:"/accessories",search:l.toString()},children:Object(b.jsxs)("div",{className:"shop-by-category__img-wrapper",children:[Object(b.jsx)("img",{className:"shop-by-category__img",src:D,alt:"accessories"}),Object(b.jsxs)("div",{className:"shop-by-category__img-description",children:[Object(b.jsx)("h3",{className:"shop-by-category__img-title",children:"Accessories"}),Object(b.jsx)("p",{className:"shop-by-category__img-amount",children:"".concat(a," models")})]})]})})]})]})}),F="https://mate-academy.github.io/react_phone-catalog/api/products.json",R=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)([]),n=Object(i.a)(a,2),r=n[0],o=n[1],d=Object(l.useState)({phones:0,tablets:0,accessories:0}),j=Object(i.a)(d,2),u=j[0],p=j[1],h=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c,s,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s=c.filter((function(e){return"phone"===e.type})).length,a=c.filter((function(e){return"tablet"===e.type})).length,n=c.filter((function(e){return"accessory"===e.type})).length,p(Object(x.a)(Object(x.a)({},u),{},{phones:s,tablets:a,accessories:n}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a=c.filter((function(e){return e.discount})),s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c,s,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s=c.filter((function(e){return!e.discount})),a=s.sort((function(e,t){return t.price-e.price})),o(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=y(m),f=Object(i.a)(_,3),w=f[0],k=f[1],C=f[2],P=y(O),L=Object(i.a)(P,3),I=L[0],M=L[1],D=L[2];return Object(l.useEffect)((function(){w(),I(),h()}),[]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"container--center",children:Object(b.jsxs)("div",{className:"slider-wrapper",children:[Object(b.jsxs)("div",{className:"slider",id:"top",children:[Object(b.jsx)("button",{className:"slider__button",type:"button",children:"<"}),Object(b.jsx)("img",{src:N,alt:"iPhones"}),Object(b.jsx)("button",{className:"slider__button",type:"button",children:">"})]}),Object(b.jsxs)("div",{className:"slider-point-wrapper",children:[Object(b.jsx)("div",{className:"slider-point slider-point--active"}),Object(b.jsx)("div",{className:"slider-point"}),Object(b.jsx)("div",{className:"slider-point"})]})]})}),Object(b.jsxs)("div",{className:"hot-prices",children:[k&&!C&&Object(b.jsx)(A,{}),Object(b.jsx)(S,{title:"Hot prices",products:c})]}),Object(b.jsx)(E,{amountOfDevices:u}),Object(b.jsxs)("div",{className:"brand-new-models",children:[M&&!D&&Object(b.jsx)(A,{}),Object(b.jsx)(S,{title:"Brand new models",products:r})]})]})};c(40);!function(e){e.Name="name",e.Age="age",e.Price="price"}(L||(L={}));c(41),c(26);var q=function(e){var t=e.children,c=e.page,s=e.handlePageChange,a=e.amountOfButtons;return Object(b.jsx)("button",{onClick:">"===t?function(){s(+c<a?String(+c+1):"1")}:function(){s(+c>1?String(+c-1):"".concat(a))},type:"button",className:"pagination-button pagination-button--side",children:t})},B=function(e){var t=e.children,c=e.handlePageChange,s=e.page;return Object(b.jsx)("button",{onClick:function(){return c(String(t))},type:"button",className:d()("pagination-button",{"pagination-button-black":+s===t}),children:t})},U=function(e){var t=e.total,c=e.perPage,s=e.handlePageChange,a=e.page,r=Object(n.d)(),o=Object(i.a)(r,2),d=o[0],j=o[1],u=Object(l.useMemo)((function(){return Math.ceil(t/+c)}),[t,c]),p=Object(l.useMemo)((function(){for(var e=[],t=1;t<=u;t+=1)e.push(t);return e}),[u]);return Object(l.useEffect)((function(){var e=new URLSearchParams(d.toString());(16===+c&&+a>0||8===+c&&+a>2)&&(e.delete("page"),j(e.toString()))}),[c,a]),Object(b.jsx)("div",{className:"pagination",children:u>1&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{page:a,handlePageChange:s,amountOfButtons:u,children:"<"}),p.map((function(e){return Object(b.jsx)(B,{page:a,handlePageChange:s,children:e})})),Object(b.jsx)(q,{page:a,handlePageChange:s,amountOfButtons:u,children:">"})]})})},$=function(e){var t=e.devices,c=Object(n.d)(),s=Object(i.a)(c,2),a=s[0],r=s[1],o=a.get("sort")||"",d=a.get("perPage")||"16",j=a.get("page")||"1",p=Object(l.useMemo)((function(){return Object(u.a)(t).sort((function(e,t){switch(o){case L.Age:return e.age-t.age;case L.Name:return e.name.localeCompare(t.name);case L.Price:return w(e.price,e.discount)-w(t.price,t.discount);default:return 0}}))}),[d,o]),h=Object(l.useMemo)((function(){return(+j-1)*+d}),[j,d,p]),m=Object(l.useMemo)((function(){return h+ +d}),[j,d,p]);return Object(b.jsxs)("div",{className:"products-list",children:[Object(b.jsxs)("div",{className:"products-list__select-wrapper-main",children:[Object(b.jsxs)("div",{className:"products-list__select-wrapper",children:[Object(b.jsx)("p",{className:"products-list__select-title",children:"Sort by"}),Object(b.jsxs)("select",{className:"products-list__select products-list__select--sort",value:o,onChange:function(e){var t=new URLSearchParams(a);e.target.value?t.set("sort",e.target.value):t.delete("sort"),r(t.toString())},children:[Object(b.jsx)("option",{value:L.Age,children:"Newest"}),Object(b.jsx)("option",{value:L.Name,children:"Alphabetically"}),Object(b.jsx)("option",{value:L.Price,children:"Cheapest"})]})]}),Object(b.jsxs)("div",{className:"products-list__select-wrapper",children:[Object(b.jsx)("p",{className:"products-list__select-title",children:"Items on page"}),Object(b.jsxs)("select",{value:d,onChange:function(e){var t=new URLSearchParams(a);e.target.value?t.set("perPage",e.target.value):t.delete("perPage"),r(t.toString())},className:"products-list__select products-list__select--amount",children:[Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"8",children:"8"}),Object(b.jsx)("option",{value:"16",children:"16"}),Object(b.jsx)("option",{value:t.length,children:"all"})]})]})]}),Object(b.jsx)("div",{className:"card-container",children:p.slice(h||0,m||40).map((function(e){return Object(b.jsx)(k,{product:e},e.id)}))}),Object(b.jsx)(U,{total:p.length,perPage:d,handlePageChange:function(e){var t=new URLSearchParams(a);e?t.set("page",e):t.delete("page"),r(t.toString())},page:j})]})},T=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(l.useContext)(p).query,r=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.filter((function(e){return"phone"===e.type})),r=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),s(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=y(r),d=Object(i.a)(o,3),j=d[0],u=d[1],h=d[2];Object(l.useEffect)((function(){j()}),[a]);var m=Object(n.d)(),O=Object(i.a)(m,1)[0];return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"devices",children:[Object(b.jsxs)("div",{className:"devices__way-wrapper",children:[Object(b.jsx)(n.b,{to:{pathname:"/",search:O.toString()},className:"devices__way devices__way-home"}),Object(b.jsx)("div",{className:"devices__way devices__way-middle"}),Object(b.jsx)("div",{className:"devices__way-devices",children:"Phones"})]}),Object(b.jsx)("h1",{className:"devices__title",children:"Mobile phones"}),Object(b.jsx)("p",{className:"devices__amount",children:"".concat(c.length," models")}),!u&&!h&&Object(b.jsx)($,{devices:c,"data-cy":"productList"}),u&&Object(b.jsx)(A,{})]})})},K=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(l.useContext)(p).query,r=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.filter((function(e){return"tablet"===e.type&&e.name.toLowerCase().includes(a.toLowerCase())})),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=y(r),d=Object(i.a)(o,3),j=d[0],u=d[1],h=d[2];Object(l.useEffect)((function(){j()}),[a]);var m=Object(n.d)(),O=Object(i.a)(m,1)[0];return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"devices",children:[Object(b.jsxs)("div",{className:"devices__way-wrapper",children:[Object(b.jsx)(n.b,{to:{pathname:"/",search:O.toString()},className:"devices__way devices__way-home"}),Object(b.jsx)("div",{className:"devices__way devices__way-middle"}),Object(b.jsx)("div",{className:"devices__way-devices",children:"Tablets"})]}),Object(b.jsx)("h1",{className:"devices__title",children:"Tablets"}),Object(b.jsx)("p",{className:"devices__amount",children:"".concat(c.length," models")}),!u&&!h&&Object(b.jsx)($,{devices:c,"data-cy":"productList"}),u&&Object(b.jsx)(A,{})]})})},Q=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(l.useContext)(p).query,r=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.filter((function(e){return"accessory"===e.type&&e.name.toLowerCase().includes(a.toLowerCase())})),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=y(r),d=Object(i.a)(o,3),j=d[0],u=d[1],h=d[2];Object(l.useEffect)((function(){j()}),[a]);var m=Object(n.d)(),O=Object(i.a)(m,1)[0];return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"devices",children:[Object(b.jsxs)("div",{className:"devices__way-wrapper",children:[Object(b.jsx)(n.b,{to:{pathname:"/",search:O.toString()},className:"devices__way devices__way-home"}),Object(b.jsx)("div",{className:"devices__way devices__way-middle"}),Object(b.jsx)("div",{className:"devices__way-devices",children:"Accessories"})]}),Object(b.jsx)("h1",{className:"devices__title",children:"Accessories"}),Object(b.jsx)("p",{className:"devices__amount",children:"".concat(c.length," models")}),!u&&!h&&Object(b.jsx)($,{devices:c,"data-cy":"productList"}),u&&Object(b.jsx)(A,{})]})})},z=function(){var e=Object(n.d)(),t=Object(i.a)(e,1)[0],c=Object(l.useState)(),s=Object(i.a)(c,2),a=s[0],o=s[1],j=Object(l.useState)({age:0,id:"",type:"",imageUrl:"",name:"",snippet:"",price:0,discount:0,screen:"",capacity:"",ram:""}),u=Object(i.a)(j,2),h=u[0],m=u[1],O=h.type,_=h.price,x=h.discount,f=h.id,N=Object(l.useState)(""),k=Object(i.a)(N,2),S=k[0],C=k[1],P=Object(l.useState)(0),L=Object(i.a)(P,2),I=L[0],M=L[1],D=Object(r.r)().productId,E=Object(r.p)(),R=Object(l.useState)(!1),q=Object(i.a)(R,2),B=q[0],U=q[1],$=Object(l.useState)(!1),T=Object(i.a)($,2),K=T[0],Q=T[1],z=Object(l.useMemo)((function(){return null===a||void 0===a?void 0:a.images.map((function(e){return e.replace("phones","products")}))}),[null===a||void 0===a?void 0:a.id]),H=Object(l.useState)(""),J=Object(i.a)(H,2),G=J[0],W=J[1],Z=Object(l.useContext)(p),V=Z.handleAddFn,X=Z.handleLikeFn,Y=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_phone-catalog/api/products/").concat(D,".json"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,o(c),W(c.images[0].replace("phones","products"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s=c.find((function(e){return e.id===D})),m(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){Q(localStorage.getItem("liked")===f.toString())}),[localStorage.getItem("liked"),f]),Object(l.useEffect)((function(){U(localStorage.getItem("added")===f.toString())}),[localStorage.getItem("added"),f]);var te=y(Y),ce=Object(i.a)(te,3),se=ce[0],ae=ce[1],ne=ce[2];return Object(l.useEffect)((function(){se(),ee()}),[D]),Object(b.jsxs)("div",{className:"container container--details",children:[ae&&!ne&&Object(b.jsx)(A,{}),!ae&&!ne&&Object(b.jsxs)("div",{className:"product-details",children:[Object(b.jsxs)("div",{className:"devices__way-wrapper",children:[Object(b.jsx)(n.b,{to:{pathname:"/",search:t.toString()},className:"devices__way devices__way-home"}),Object(b.jsx)("div",{className:"devices__way devices__way-middle"}),Object(b.jsx)(n.b,{to:{pathname:"/".concat(O,"s"),search:t.toString()},className:"devices__way-devices",children:"".concat(O,"s")}),Object(b.jsx)("div",{className:"devices__way devices__way-middle"}),Object(b.jsx)("div",{className:"devices__way-devices",children:null===a||void 0===a?void 0:a.name})]}),Object(b.jsxs)("button",{"data-cy":"backButton",onClick:function(){return E(-1)},type:"button",className:"button__back",children:[Object(b.jsx)("span",{className:"arrow-left"}),"Back"]}),Object(b.jsx)("h1",{className:"product-details__title",children:null===a||void 0===a?void 0:a.name}),Object(b.jsxs)("div",{className:"product-details__images-wrapper",children:[Object(b.jsx)("div",{className:"product-details__images-wrapper-small",children:z&&z.map((function(e){return Object(b.jsx)("div",{role:"button",tabIndex:0,className:d()("product-details__image-small-wrapper",{"selected-image":e===G}),onClick:function(){return W(e)},onKeyPress:function(){return W(e)},children:Object(b.jsx)("img",{className:"product-details__image-small",src:e,alt:"phone"})},e)}))}),Object(b.jsx)("img",{className:"product-details__image-big",src:G,alt:""}),Object(b.jsxs)("div",{className:"product-details__info-wrapper",children:[Object(b.jsxs)("div",{className:"product-details__info-colors-wrapper",children:[Object(b.jsx)("p",{className:"product-details__info-colors-title",children:"Available colors"}),Object(b.jsx)("div",{className:"product-details__info-colors",children:["gold","green","black","white"].map((function(e){return Object(b.jsx)("button",{onClick:function(){return C(e)},className:d()("product-details__colors-button",{"selected-button":S===e}),type:"button","aria-label":"color",children:Object(b.jsx)("span",{className:"product-details__colors-button-color\n                        product-details__colors-button-color--".concat(e)})},e)}))})]}),Object(b.jsx)("div",{className:"horizontal-line"}),Object(b.jsxs)("div",{className:"product-details__info-capacity",children:[Object(b.jsx)("p",{className:"product-details__info-colors-title",children:"Select capacity"}),Object(b.jsxs)("div",{className:"product-details__info-capacity-wrapper",children:[Object(b.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return M(64)},onKeyPress:function(){return M(64)},className:d()("product-details__info-cap",{"selected-capacity":64===I}),children:"64 gb"}),Object(b.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return M(256)},onKeyPress:function(){return M(256)},className:d()("product-details__info-cap",{"selected-capacity":256===I}),children:"256 gb"}),Object(b.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return M(512)},onKeyPress:function(){return M(512)},className:d()("product-details__info-cap",{"selected-capacity":512===I}),children:"512 gb"})]})]}),Object(b.jsx)("div",{className:"horizontal-line"}),Object(b.jsxs)("div",{className:"product-details__price",children:[Object(b.jsx)("div",{className:"product-details__price-wrapper",children:w(_,x)===_?Object(b.jsx)("span",{className:"product-details__price-discount",children:"$".concat(_)}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{className:"product-details__price-discount",children:"$".concat(w(_,x))}),Object(b.jsx)("span",{className:"product-details__price-amount",children:"$".concat(_)})]})}),Object(b.jsxs)("div",{className:"product-details__price-buttons",children:[B?Object(b.jsx)("button",{className:"product-details__button-cart product-details__button-cart--selected",type:"button",onClick:function(e){return V(e,h)},children:"Selected"}):Object(b.jsx)("button",{className:"product-details__button-cart",type:"button",onClick:function(e){return V(e,h)},children:"Add to cart"}),Object(b.jsx)("button",{"aria-label":"like",className:d()("product-details__button-like",{"product-details__button-like--white":!K,"product-details__button-like--red":K}),type:"button",onClick:function(e){return X(e,h)}})]})]}),Object(b.jsxs)("div",{className:"product-details__details",children:[Object(b.jsxs)("ul",{className:"product-details__details-list",children:[Object(b.jsx)("li",{className:"product-details__details-li product-details__details-li--light",children:"Screen"}),Object(b.jsx)("li",{className:"product-details__details-li product-details__details-li--light",children:"Resolution"}),Object(b.jsx)("li",{className:"product-details__details-li product-details__details-li--light",children:"Processor"}),Object(b.jsx)("li",{className:"product-details__details-li product-details__details-li--light",children:"RAM"})]}),Object(b.jsxs)("ul",{className:"product-details__details-list",children:[Object(b.jsx)("li",{className:"product-details__details-li product-details__details-li--dark",children:null===a||void 0===a?void 0:a.display.screenSize}),Object(b.jsx)("li",{className:"product-details__details-li product-details__details-li--dark",children:null===a||void 0===a?void 0:a.display.screenResolution}),Object(b.jsx)("li",{className:"product-details__details-li product-details__details-li--dark",children:"Processor"}),Object(b.jsx)("li",{className:"product-details__details-li product-details__details-li--dark",children:"RAM"})]})]})]})]})]})]})},H=function(){return Object(b.jsx)(n.a,{children:Object(b.jsx)(r.d,{children:Object(b.jsxs)(r.b,{path:"/",element:Object(b.jsx)(_,{}),children:[Object(b.jsx)(r.b,{index:!0,element:Object(b.jsx)(R,{})}),Object(b.jsx)(r.b,{path:"phones",element:Object(b.jsx)(T,{})}),Object(b.jsx)(r.b,{path:"tablets",element:Object(b.jsx)(K,{})}),Object(b.jsx)(r.b,{path:"accessories",element:Object(b.jsx)(Q,{})}),Object(b.jsx)(r.b,{path:"/product/:productId",element:Object(b.jsx)(z,{})})]})})})},J=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(H,{})})};a.a.render(Object(b.jsx)(J,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1310cb8b.chunk.js.map