(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{25:function(e,t,c){e.exports={loader:"Loader_loader__2hZcM",rotate:"Loader_rotate__3QseU",loader_wrapper:"Loader_loader_wrapper__3WBvi"}},26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(27),s=c.n(a),n=(c(32),c(6)),i=c(4),r=c(3),l=c(1),o=c(10),d=c.n(o),u=(c(33),c.p+"static/media/Logo.c9417692.svg"),j=c(9),b=c(7),p=c(5),m=c.n(p),h="https://mate-academy.github.io/react_phone-catalog/api/products.json",O=c(0),_=Object(l.createContext)({likedDevices:[],setLikedDevices:function(){},addedDevices:[],setAddedDevices:function(){},query:"",handleQChange:function(){},device:"",handleAddToCartFn:function(){},handleLikeFn:function(){},products:[],setProducts:function(){}}),v=function(e){var t=e.children,c=Object(l.useState)([]),a=Object(r.a)(c,2),s=a[0],o=a[1],d=Object(l.useState)([]),u=Object(r.a)(d,2),p=u[0],v=u[1],x=Object(n.d)(),f=Object(r.a)(x,2),g=f[0],N=f[1],y=Object(i.n)().pathname,w=Object(l.useState)([]),k=Object(r.a)(w,2),S=k[0],C=k[1],P=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,C(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){P()}),[]),Object(l.useEffect)((function(){!function(){if(S.length){var e=Object.entries(localStorage).filter((function(e){return"added"===e[1]})).map((function(e){return e[0]})).map((function(e){var t=e.indexOf("-");return e.slice(t+1)})),t=S.filter((function(t){return e.includes(t.id)}));v(t)}}(),function(){if(S.length){var e=Object.entries(localStorage).filter((function(e){return"liked"===e[1]})).map((function(e){return e[0]})).map((function(e){var t=e.indexOf("-");return e.slice(t+1)})),t=S.filter((function(t){return e.includes(t.id)}));o(t)}}()}),[S.length]);var I=Object(l.useMemo)((function(){var e=y.includes("phones"),t=y.includes("tablets"),c=y.includes("accessories"),a=y.includes("favourites");return e?"phones":t?"tablets":c?"accessories":a?"favourites":""}),[y]),A=g.get("query")||"",L={likedDevices:s,setLikedDevices:o,addedDevices:p,setAddedDevices:v,query:A,handleQChange:function(e){var t=new URLSearchParams(g);e.target.value?t.set("query",e.target.value):t.delete("query"),N(t)},device:I,handleAddToCartFn:function(e,t){e.preventDefault(),e.stopPropagation();var c=p.some((function(e){return e.id===t.id}));c?(v((function(e){return e.filter((function(e){return e.id!==t.id}))})),localStorage.removeItem("addedProduct-".concat(t.id)),localStorage.removeItem(t.id)):(v((function(e){return[].concat(Object(j.a)(e),[t])})),localStorage.setItem("addedProduct-".concat(t.id),"added"),localStorage.setItem(t.id,"1"))},handleLikeFn:function(e,t){e.preventDefault(),e.stopPropagation();var c=s.some((function(e){return e.id===t.id}));c?(o((function(e){return e.filter((function(e){return e.id!==t.id}))})),localStorage.removeItem("likedProduct-".concat(t.id))):(o((function(e){return[].concat(Object(j.a)(e),[t])})),localStorage.setItem("likedProduct-".concat(t.id),"liked"))},products:S,setProducts:C};return Object(O.jsx)(_.Provider,{value:L,children:t})},x=function(){var e=function(e){var t=e.isActive;return d()("nav__link",{"is-active":t})},t=Object(l.useState)(0),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(l.useState)(0),o=Object(r.a)(i,2),j=o[0],b=o[1],p=Object(l.useContext)(_),m=p.likedDevices,h=p.addedDevices,v=Object(l.useContext)(_),x=v.query,f=v.handleQChange,g=v.device;Object(l.useEffect)((function(){s(Object.values(localStorage).filter((function(e){return"liked"===e})).length)}),[m.length]),Object(l.useEffect)((function(){b(Object.values(localStorage).filter((function(e){return"added"===e})).length)}),[h.length]);var N=Object(n.d)(),y=Object(r.a)(N,1)[0];return Object(O.jsxs)("div",{className:"header__wrapper",children:[Object(O.jsxs)("div",{className:"links-wrapper",children:[Object(O.jsx)(n.c,{to:{pathname:"/",search:y.toString()},className:"main-logo",children:Object(O.jsx)("img",{src:u,alt:"Logo",className:"logo__img"})}),Object(O.jsx)("nav",{className:"nav",children:Object(O.jsxs)("ul",{className:"nav__list",children:[Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)(n.c,{to:{pathname:"/",search:y.toString()},className:e,children:"Home"})}),Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)(n.c,{to:{pathname:"/phones",search:y.toString()},className:e,children:"Phones"})}),Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)(n.c,{to:{pathname:"/tablets",search:y.toString()},className:e,children:"Tablets"})}),Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)(n.c,{to:{pathname:"/accessories",search:y.toString()},className:e,children:"Accessories"})})]})})]}),Object(O.jsxs)("div",{className:"logos-wrapper",children:[Object(O.jsx)("div",{className:d()("nav__search",{hidden:!g}),children:Object(O.jsx)("input",{onChange:f,className:"nav__search-input",placeholder:"Search in ".concat(g,"..."),type:"text",value:x})}),Object(O.jsx)("div",{className:"logo--like-wrapper",children:Object(O.jsx)(n.c,{to:"/favorites",className:"logo logo--like",children:0!==a&&Object(O.jsx)("span",{className:"logo--amount",children:a})})}),Object(O.jsx)(n.c,{to:"/cart",className:"logo logo--cart",children:0!==j&&Object(O.jsx)("span",{className:"logo--amount",children:j})})]})]})},f=(c(36),function(){return Object(O.jsx)("div",{className:"main-container",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"footer__wrapper",children:[Object(O.jsx)(n.c,{to:"/",className:"main-logo",children:Object(O.jsx)("img",{src:u,alt:"Logo",className:"logo__img"})}),Object(O.jsx)("nav",{className:"footer-nav",children:Object(O.jsxs)("ul",{className:"footer-nav__list",children:[Object(O.jsx)("li",{className:"footer-nav__item",children:Object(O.jsx)(n.c,{className:"footer-nav__link",to:"/",children:"Github"})}),Object(O.jsx)("li",{className:"footer-nav__item",children:Object(O.jsx)(n.c,{className:"footer-nav__link",to:"/s",children:"Contacts"})}),Object(O.jsx)("li",{className:"footer-nav__item",children:Object(O.jsx)(n.c,{className:"footer-nav__link",to:"/d",children:"Rights"})})]})}),Object(O.jsxs)("div",{className:"footer-button-wrapper",children:["Back to top",Object(O.jsx)("button",{type:"button",className:"footer-button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"^"})]})]})})})}),g=function(){return Object(O.jsxs)(v,{children:[Object(O.jsx)("header",{className:"header",children:Object(O.jsx)(x,{})}),Object(O.jsx)("main",{className:"main",children:Object(O.jsx)(i.a,{})}),Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)(f,{})})]})},N=c(24),y=c.p+"static/media/banner-phones.b4eeda8b.png",w=c.p+"static/media/banner-tablets.a962057c.png",k=c.p+"static/media/banner-accessories.bdd2e0fc.png",S=(c(37),c(38),function(e,t){var c=t?t/100:1;return 1===c?e:Math.round(e-e*c)}),C=function(e){var t=e.product,c=t.imageUrl.replace("phones","products"),a=Object(n.d)(),s=Object(r.a)(a,1)[0],i=Object(l.useContext)(_),o=i.handleAddToCartFn,u=i.handleLikeFn,j=t.name,b=t.price,p=t.discount,m=t.screen,h=t.capacity,v=t.ram,x=t.id;return Object(O.jsx)(n.b,{className:"card__link card--margin-vertical",to:{pathname:"/product/".concat(x),search:s.toString()},children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("img",{className:"card__img",src:c,alt:"device"}),Object(O.jsx)("h2",{className:"card__title",children:j}),Object(O.jsx)("div",{className:"card__price",children:S(b,p)===b?Object(O.jsx)("span",{className:"card__price-discount",children:"$".concat(b)}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"card__price-discount",children:"$".concat(S(b,p))}),Object(O.jsx)("span",{className:"card__price-amount",children:"$".concat(b)})]})}),Object(O.jsx)("div",{className:"card__line"}),Object(O.jsxs)("div",{className:"card__description",children:[Object(O.jsxs)("div",{className:"card__description-about",children:[Object(O.jsx)("span",{className:"about",children:"Screen"}),Object(O.jsx)("span",{className:"about-description",children:m})]}),Object(O.jsxs)("div",{className:"card__description-about",children:[Object(O.jsx)("span",{className:"about",children:"Capacity"}),Object(O.jsx)("span",{className:"about-description",children:h})]}),Object(O.jsxs)("div",{className:"card__description-about",children:[Object(O.jsx)("span",{className:"about",children:"RAM"}),Object(O.jsx)("span",{className:"about-description",children:v})]})]}),Object(O.jsxs)("div",{className:"card__button-wrapper",children:[localStorage.getItem("addedProduct-".concat(t.id))?Object(O.jsx)("button",{className:"card__button-cart card__button-cart--selected",type:"button",onClick:function(e){return o(e,t)},children:"Added to cart"}):Object(O.jsx)("button",{className:"card__button-cart",type:"button",onClick:function(e){return o(e,t)},children:"Add to cart"}),Object(O.jsx)("button",{"aria-label":"like",className:d()("card__button-like",{"card__button-like--white":!localStorage.getItem("likedProduct-".concat(t.id)),"card__button-like--red":!!localStorage.getItem("likedProduct-".concat(t.id))}),type:"button",onClick:function(e){return u(e,t)}})]})]})})},P=function(e){var t=e.products,c=e.title,a=Object(l.useState)(0),s=Object(r.a)(a,2),n=s[0],i=s[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"hot-prices__top-wrapper",children:[Object(O.jsx)("h2",{className:"hot-prices__title",children:c}),Object(O.jsxs)("div",{className:"hot-prices__slider-button-wrapper",children:[Object(O.jsx)("button",{className:"hot-prices__slider-button",type:"button",onClick:function(){i(n-4>=0?n-4:t.length-4)},children:"<"}),Object(O.jsx)("button",{className:"hot-prices__slider-button",type:"button",onClick:function(){n+4<t.length?i(n+4):i(0)},children:">"})]})]}),Object(O.jsx)("div",{className:"slider-container","data-cy":"cardsContainer",children:t.slice(n,n+4).map((function(e){return Object(O.jsx)(C,{product:e,"data-cy":"cardsContainer"},e.id)}))})]})},I=c(25),A=c.n(I);var L,D=function(){return Object(O.jsx)("div",{className:A.a.loader_wrapper,children:Object(O.jsx)("div",{className:A.a.loader})})},M=c.p+"static/media/Phones.cbed3047.png",F=c.p+"static/media/Tablets.c198526a.png",B=c.p+"static/media/Accessories.b914f412.png",E=(c(39),function(e){var t=e.amountOfDevices,c=t.phones,a=t.tablets,s=t.accessories,i=Object(n.d)(),l=Object(r.a)(i,1)[0];return Object(O.jsxs)("div",{className:"shop-by-category",children:[Object(O.jsx)("h2",{className:"shop-by-category__title",children:"Shop by category"}),Object(O.jsxs)("div",{className:"shop-by-category__wrapper","data-cy":"categoryLinksContainer",children:[Object(O.jsx)(n.b,{className:"shop-by-category__link",to:{pathname:"/phones",search:l.toString()},children:Object(O.jsxs)("div",{className:"shop-by-category__img-wrapper",children:[Object(O.jsx)("img",{className:"shop-by-category__img",src:M,alt:"phones"}),Object(O.jsxs)("div",{className:"shop-by-category__img-description",children:[Object(O.jsx)("h3",{className:"shop-by-category__img-title",children:"Mobile phones"}),Object(O.jsx)("p",{className:"shop-by-category__img-amount",children:"".concat(c," models")})]})]})}),Object(O.jsx)(n.b,{className:"shop-by-category__link",to:{pathname:"/tablets",search:l.toString()},children:Object(O.jsxs)("div",{className:"shop-by-category__img-wrapper",children:[Object(O.jsx)("img",{className:"shop-by-category__img",src:F,alt:"tablets"}),Object(O.jsxs)("div",{className:"shop-by-category__img-description",children:[Object(O.jsx)("h3",{className:"shop-by-category__img-title",children:"Tablets"}),Object(O.jsx)("p",{className:"shop-by-category__img-amount",children:"".concat(a," models")})]})]})}),Object(O.jsx)(n.b,{className:"shop-by-category__link",to:{pathname:"/accessories",search:l.toString()},children:Object(O.jsxs)("div",{className:"shop-by-category__img-wrapper",children:[Object(O.jsx)("img",{className:"shop-by-category__img",src:B,alt:"accessories"}),Object(O.jsxs)("div",{className:"shop-by-category__img-description",children:[Object(O.jsx)("h3",{className:"shop-by-category__img-title",children:"Accessories"}),Object(O.jsx)("p",{className:"shop-by-category__img-amount",children:"".concat(s," models")})]})]})})]})]})}),T=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)([]),n=Object(r.a)(s,2),i=n[0],o=n[1],u=Object(l.useState)({phones:0,tablets:0,accessories:0}),j=Object(r.a)(u,2),p=j[0],h=j[1],v=Object(l.useState)(0),x=Object(r.a)(v,2),f=x[0],g=x[1],S=[y,w,k],C=Object(l.useContext)(_).products;Object(l.useEffect)((function(){var e=setInterval((function(){g((function(e){return(e+1)%S.length}))}),5e3);return function(){return clearInterval(e)}}),[]);var I=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=C.filter((function(e){return!e.discount})),c=t.sort((function(e,t){return t.price-e.price})),o(c);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){I(),function(){var e=C.filter((function(e){return e.discount}));a(e)}(),function(){var e=C.filter((function(e){return"phone"===e.type})).length,t=C.filter((function(e){return"tablet"===e.type})).length,c=C.filter((function(e){return"accessory"===e.type})).length;h(Object(N.a)(Object(N.a)({},p),{},{phones:e,tablets:t,accessories:c}))}()}),[C.length]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"container--center",children:Object(O.jsxs)("div",{className:"slider-wrapper",children:[Object(O.jsxs)("div",{className:"slider",id:"top",children:[Object(O.jsx)("button",{className:"slider__button slider__button--left",type:"button",onClick:function(){g(f<1?2:function(e){return e-1})},children:"<"}),Object(O.jsx)("img",{src:S[f],alt:"iPhones",className:"slider__image"}),Object(O.jsx)("button",{className:"slider__button slider__button--right",type:"button",onClick:function(){g(f>=2?0:function(e){return e+1})},children:">"})]}),Object(O.jsxs)("div",{className:"slider-point-wrapper",children:[Object(O.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return g(0)},onKeyPress:function(){return g(0)},"aria-label":"button",className:d()("slider-point",{"slider-point--active":!f})}),Object(O.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return g(1)},onKeyPress:function(){return g(1)},"aria-label":"button",className:d()("slider-point",{"slider-point--active":1===f})}),Object(O.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return g(2)},onKeyPress:function(){return g(2)},"aria-label":"button",className:d()("slider-point",{"slider-point--active":2===f})})]})]})}),Object(O.jsxs)("div",{className:"hot-prices",children:[!c.length&&Object(O.jsx)(D,{}),Object(O.jsx)(P,{title:"Hot prices",products:c})]}),Object(O.jsx)(E,{amountOfDevices:p}),Object(O.jsxs)("div",{className:"brand-new-models",children:[!i.length&&Object(O.jsx)(D,{}),Object(O.jsx)(P,{title:"Brand new models",products:i})]})]})};c(40);!function(e){e.Name="name",e.Age="age",e.Price="price"}(L||(L={}));c(41),c(26);var R=function(e){var t=e.children,c=e.page,a=e.handlePageChange,s=e.amountOfButtons;return Object(O.jsx)("button",{onClick:">"===t?function(){a(+c<s?String(+c+1):"1")}:function(){a(+c>1?String(+c-1):"".concat(s))},type:"button",className:"pagination-button pagination-button--side",children:t})},U=function(e){var t=e.children,c=e.handlePageChange,a=e.page;return Object(O.jsx)("button",{onClick:function(){return c(String(t))},type:"button",className:d()("pagination-button",{"pagination-button-black":+a===t}),children:t})},q=function(e){var t=e.total,c=e.perPage,a=e.handlePageChange,s=e.page,i=Object(n.d)(),o=Object(r.a)(i,2),d=o[0],u=o[1],j=Object(l.useMemo)((function(){return Math.ceil(t/+c)}),[t,c]),b=Object(l.useMemo)((function(){for(var e=[],t=1;t<=j;t+=1)e.push(t);return e}),[j]);return Object(l.useEffect)((function(){var e=new URLSearchParams(d.toString());(16===+c&&+s>0||8===+c&&+s>2)&&(e.delete("page"),u(e.toString()))}),[c,s]),Object(O.jsx)("div",{className:"pagination",children:j>1&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R,{page:s,handlePageChange:a,amountOfButtons:j,children:"<"}),b.map((function(e){return Object(O.jsx)(U,{page:s,handlePageChange:a,children:e})})),Object(O.jsx)(R,{page:s,handlePageChange:a,amountOfButtons:j,children:">"})]})})},z=function(e){var t=e.devices,c=Object(n.d)(),a=Object(r.a)(c,2),s=a[0],i=a[1],o=s.get("sort")||"",d=s.get("perPage")||"16",u=s.get("page")||"1",b=Object(l.useMemo)((function(){return Object(j.a)(t).sort((function(e,t){switch(o){case L.Age:return e.age-t.age;case L.Name:return e.name.localeCompare(t.name);case L.Price:return S(e.price,e.discount)-S(t.price,t.discount);default:return 0}}))}),[d,o]),p=Object(l.useMemo)((function(){return(+u-1)*+d}),[u,d,b]),m=Object(l.useMemo)((function(){return p+ +d}),[u,d,b]);return Object(O.jsxs)("div",{className:"products-list",children:[Object(O.jsxs)("div",{className:"products-list__select-wrapper-main",children:[Object(O.jsxs)("div",{className:"products-list__select-wrapper",children:[Object(O.jsx)("p",{className:"products-list__select-title",children:"Sort by"}),Object(O.jsxs)("select",{className:"products-list__select products-list__select--sort",value:o,onChange:function(e){var t=new URLSearchParams(s);e.target.value?t.set("sort",e.target.value):t.delete("sort"),i(t.toString())},children:[Object(O.jsx)("option",{value:L.Age,children:"Newest"}),Object(O.jsx)("option",{value:L.Name,children:"Alphabetically"}),Object(O.jsx)("option",{value:L.Price,children:"Cheapest"})]})]}),Object(O.jsxs)("div",{className:"products-list__select-wrapper",children:[Object(O.jsx)("p",{className:"products-list__select-title",children:"Items on page"}),Object(O.jsxs)("select",{value:d,onChange:function(e){var t=new URLSearchParams(s);e.target.value?t.set("perPage",e.target.value):t.delete("perPage"),i(t.toString())},className:"products-list__select products-list__select--amount",children:[Object(O.jsx)("option",{value:"4",children:"4"}),Object(O.jsx)("option",{value:"8",children:"8"}),Object(O.jsx)("option",{value:"16",children:"16"}),Object(O.jsx)("option",{value:t.length||4,children:"all"})]})]})]}),Object(O.jsx)("div",{className:"card-container",children:b.slice(p||0,m||40).map((function(e){return Object(O.jsx)(C,{product:e},e.id)}))}),Object(O.jsx)(q,{total:b.length,perPage:d,handlePageChange:function(e){var t=new URLSearchParams(s);e?t.set("page",e):t.delete("page"),i(t.toString())},page:u})]})},$=function(e){var t=Object(l.useState)(!1),c=Object(r.a)(t,2),a=c[0],s=c[1],n=Object(l.useState)(""),i=Object(r.a)(n,2),o=i[0],d=i[1],u=function(){var t=Object(b.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),t.t0 instanceof Error?d(t.t0.message):d("An unknown error occurred.");case 9:return t.prev=9,s(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[u,a,o]},K=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(l.useContext)(_).query,i=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c,n,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.filter((function(e){return"phone"===e.type})),i=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})),a(i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=$(i),d=Object(r.a)(o,3),u=d[0],j=d[1],p=d[2];Object(l.useEffect)((function(){u()}),[s]);var v=Object(n.d)(),x=Object(r.a)(v,1)[0];return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"devices",children:[Object(O.jsxs)("div",{className:"devices__way-wrapper",children:[Object(O.jsx)(n.b,{to:{pathname:"/",search:x.toString()},className:"devices__way devices__way-home"}),Object(O.jsx)("div",{className:"devices__way devices__way-middle"}),Object(O.jsx)("div",{className:"devices__way-devices",children:"Phones"})]}),Object(O.jsx)("h1",{className:"devices__title",children:"Mobile phones"}),Object(O.jsx)("p",{className:"devices__amount",children:"".concat(c.length," models")}),!j&&!p&&Object(O.jsx)(z,{devices:c,"data-cy":"productList"}),j&&!p&&Object(O.jsx)(D,{})]})})},Q=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(l.useContext)(_).query,i=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.filter((function(e){return"tablet"===e.type&&e.name.toLowerCase().includes(s.toLowerCase())})),a(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=$(i),d=Object(r.a)(o,3),u=d[0],j=d[1],p=d[2];Object(l.useEffect)((function(){u()}),[s]);var v=Object(n.d)(),x=Object(r.a)(v,1)[0];return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"devices",children:[Object(O.jsxs)("div",{className:"devices__way-wrapper",children:[Object(O.jsx)(n.b,{to:{pathname:"/",search:x.toString()},className:"devices__way devices__way-home"}),Object(O.jsx)("div",{className:"devices__way devices__way-middle"}),Object(O.jsx)("div",{className:"devices__way-devices",children:"Tablets"})]}),Object(O.jsx)("h1",{className:"devices__title",children:"Tablets"}),Object(O.jsx)("p",{className:"devices__amount",children:"".concat(c.length," models")}),!j&&!p&&Object(O.jsx)(z,{devices:c,"data-cy":"productList"}),j&&Object(O.jsx)(D,{})]})})},H=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(l.useContext)(_).query,i=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.filter((function(e){return"accessory"===e.type&&e.name.toLowerCase().includes(s.toLowerCase())})),a(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=$(i),d=Object(r.a)(o,3),u=d[0],j=d[1],p=d[2];Object(l.useEffect)((function(){u()}),[s]);var v=Object(n.d)(),x=Object(r.a)(v,1)[0];return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"devices",children:[Object(O.jsxs)("div",{className:"devices__way-wrapper",children:[Object(O.jsx)(n.b,{to:{pathname:"/",search:x.toString()},className:"devices__way devices__way-home"}),Object(O.jsx)("div",{className:"devices__way devices__way-middle"}),Object(O.jsx)("div",{className:"devices__way-devices",children:"Accessories"})]}),Object(O.jsx)("h1",{className:"devices__title",children:"Accessories"}),Object(O.jsx)("p",{className:"devices__amount",children:"".concat(c.length," models")}),!j&&!p&&Object(O.jsx)(z,{devices:c,"data-cy":"productList"}),j&&Object(O.jsx)(D,{})]})})},J=function(){var e=Object(n.d)(),t=Object(r.a)(e,1)[0],c=Object(l.useState)(),a=Object(r.a)(c,2),s=a[0],o=a[1],u=Object(l.useState)({age:0,id:"",type:"",imageUrl:"",name:"",snippet:"",price:0,discount:0,screen:"",capacity:"",ram:""}),j=Object(r.a)(u,2),p=j[0],v=j[1],x=Object(l.useState)([]),f=Object(r.a)(x,2),g=f[0],N=f[1],y=p.type,w=p.price,k=p.discount,C=p.id,I=p.ram,A=Object(l.useState)(""),L=Object(r.a)(A,2),M=L[0],F=L[1],B=Object(l.useState)(0),E=Object(r.a)(B,2),T=E[0],R=E[1],U=Object(i.r)().productId,q=Object(i.p)(),z=Object(l.useMemo)((function(){return null===s||void 0===s?void 0:s.images.map((function(e){return e.replace("phones","products")}))}),[null===s||void 0===s?void 0:s.id]),K=Object(l.useState)(""),Q=Object(r.a)(K,2),H=Q[0],J=Q[1],Y=Object(l.useContext)(_),G=Y.handleAddToCartFn,W=Y.handleLikeFn,Z=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_phone-catalog/api/products/").concat(U,".json"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,o(c),J(c.images[0].replace("phones","products"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,N(c),a=c.find((function(e){return e.id===U})),v(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=$(Z),ee=Object(r.a)(X,3),te=ee[0],ce=ee[1],ae=ee[2];Object(l.useEffect)((function(){te(),V()}),[U]);var se=[null===s||void 0===s?void 0:s.display.screenSize,null===s||void 0===s?void 0:s.display.screenResolution,null===s||void 0===s?void 0:s.hardware.cpu,null===s||void 0===s?void 0:s.storage.ram,null===s||void 0===s?void 0:s.storage.flash,null===s||void 0===s?void 0:s.camera.primary,null===s||void 0===s?void 0:s.hardware.usb,null===s||void 0===s?void 0:s.connectivity.cell];return Object(O.jsxs)("div",{className:"container container--details",children:[ce&&!ae&&Object(O.jsx)(D,{}),!ce&&!ae&&Object(O.jsxs)("div",{className:"product-details",children:[Object(O.jsxs)("div",{className:"devices__way-wrapper",children:[Object(O.jsx)(n.b,{to:{pathname:"/",search:t.toString()},className:"devices__way devices__way-home"}),Object(O.jsx)("div",{className:"devices__way devices__way-middle"}),Object(O.jsx)(n.b,{to:{pathname:"/".concat(y,"s"),search:t.toString()},className:"devices__way-devices",children:"".concat(y,"s")}),Object(O.jsx)("div",{className:"devices__way devices__way-middle"}),Object(O.jsx)("div",{className:"devices__way-devices",children:null===s||void 0===s?void 0:s.name})]}),Object(O.jsxs)("button",{"data-cy":"backButton",onClick:function(){return q(-1)},type:"button",className:"button__back",children:[Object(O.jsx)("span",{className:"arrow-left"}),"Back"]}),Object(O.jsx)("h1",{className:"product-details__title",children:null===s||void 0===s?void 0:s.name}),Object(O.jsxs)("div",{className:"product-details__images-wrapper",children:[Object(O.jsx)("div",{className:"product-details__images-wrapper-small",children:z&&z.map((function(e){return Object(O.jsx)("div",{className:d()("product-details__image-small-wrapper",{"selected-image":e===H}),onClick:function(){return J(e)},onKeyPress:function(){return J(e)},role:"button",tabIndex:0,children:Object(O.jsx)("img",{className:"product-details__image-small",src:e,alt:"phone"})},e)}))}),Object(O.jsx)("img",{className:"product-details__image-big",src:H,alt:""}),Object(O.jsxs)("div",{className:"product-details__info-wrapper",children:[Object(O.jsxs)("div",{className:"product-details__info-colors-wrapper",children:[Object(O.jsx)("p",{className:"product-details__info-colors-title",children:"Available colors"}),Object(O.jsx)("div",{className:"product-details__info-colors",children:["gold","green","black","white"].map((function(e){return Object(O.jsx)("button",{onClick:function(){return F(e)},className:d()("product-details__colors-button",{"selected-button":M===e}),type:"button","aria-label":"color",children:Object(O.jsx)("span",{className:"product-details__colors-button-color\n                        product-details__colors-button-color--".concat(e)})},e)}))})]}),Object(O.jsx)("div",{className:"horizontal-line"}),Object(O.jsxs)("div",{className:"product-details__info-capacity",children:[Object(O.jsx)("p",{className:"product-details__info-colors-title",children:"Select capacity"}),Object(O.jsxs)("div",{className:"product-details__info-capacity-wrapper",children:[Object(O.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return R(64)},onKeyPress:function(){return R(64)},className:d()("product-details__info-cap",{"selected-capacity":64===T}),children:"64 gb"}),Object(O.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return R(256)},onKeyPress:function(){return R(256)},className:d()("product-details__info-cap",{"selected-capacity":256===T}),children:"256 gb"}),Object(O.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return R(512)},onKeyPress:function(){return R(512)},className:d()("product-details__info-cap",{"selected-capacity":512===T}),children:"512 gb"})]})]}),Object(O.jsx)("div",{className:"horizontal-line"}),Object(O.jsxs)("div",{className:"product-details__price",children:[Object(O.jsx)("div",{className:"product-details__price-wrapper",children:S(w,k)===w?Object(O.jsx)("span",{className:"product-details__price-discount",children:"$".concat(w)}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"product-details__price-discount",children:"$".concat(S(w,k))}),Object(O.jsx)("span",{className:"product-details__price-amount",children:"$".concat(w)})]})}),Object(O.jsxs)("div",{className:"product-details__price-buttons",children:[localStorage.getItem("addedProduct-".concat(C))?Object(O.jsx)("button",{className:"product-details__button-cart product-details__button-cart--selected",type:"button",onClick:function(e){return G(e,p)},children:"Selected"}):Object(O.jsx)("button",{className:"product-details__button-cart",type:"button",onClick:function(e){return G(e,p)},children:"Add to cart"}),Object(O.jsx)("button",{"aria-label":"like",className:d()("product-details__button-like",{"product-details__button-like--white":!localStorage.getItem("likedProduct-".concat(C)),"product-details__button-like--red":!!localStorage.getItem("likedProduct-".concat(C))}),type:"button",onClick:function(e){return W(e,p)}})]})]}),Object(O.jsxs)("div",{className:"product-details__details",children:[Object(O.jsxs)("ul",{className:"product-details__details-list",children:[Object(O.jsx)("li",{className:"product-details__details-li product-details__details-li--light",children:"Screen"}),Object(O.jsx)("li",{className:"product-details__details-li product-details__details-li--light",children:"Resolution"}),Object(O.jsx)("li",{className:"product-details__details-li product-details__details-li--light",children:"CPU"}),Object(O.jsx)("li",{className:"product-details__details-li product-details__details-li--light",children:"RAM"})]}),Object(O.jsxs)("ul",{className:"product-details__details-list",children:[Object(O.jsx)("li",{className:"product-details__details-li product-details__details-li--dark",children:null===s||void 0===s?void 0:s.display.screenSize}),Object(O.jsx)("li",{className:"product-details__details-li product-details__details-li--dark",children:null===s||void 0===s?void 0:s.display.screenResolution}),Object(O.jsx)("li",{className:"product-details__details-li product-details__details-li--dark",children:null===s||void 0===s?void 0:s.hardware.cpu}),Object(O.jsx)("li",{className:"product-details__details-li product-details__details-li--dark",children:I})]})]})]})]}),Object(O.jsxs)("div",{className:"product-details__about-wrapper",children:[Object(O.jsxs)("div",{className:"product-details__about",children:[Object(O.jsx)("h3",{className:"product-details__about-title",children:"About"}),Object(O.jsx)("div",{className:"horizontal-line"}),Object(O.jsx)("p",{className:"product-details__about-description",children:null===s||void 0===s?void 0:s.description})]}),Object(O.jsxs)("div",{className:"product-details__tech",children:[Object(O.jsx)("h3",{className:"product-details__about-title",children:"Tech specs"}),Object(O.jsx)("div",{className:"horizontal-line"}),Object(O.jsxs)("div",{className:"product-details__tech-wrapper",children:[Object(O.jsx)("ul",{className:"product-details__tech-list",children:["Screen","Resolution","CPU","RAM","Built in memory","Camera","USB","Cell"].map((function(e){return Object(O.jsx)("li",{className:"product-details__tech-list-li product-details__tech-list-li--light",children:e})}))}),Object(O.jsx)("ul",{className:"product-details__tech-list product-details__tech-list--text-align",children:se.map((function(e){return Object(O.jsx)("li",{className:"product-details__tech-list-li product-details__tech-list-li--dark",children:e})}))})]})]})]}),Object(O.jsx)("div",{className:"brand-new-models",children:Object(O.jsx)(P,{title:"You may also like",products:g})})]})]})},Y=function(){var e=Object(n.d)(),t=Object(r.a)(e,1)[0],c=Object(l.useContext)(_).likedDevices;return Object(O.jsx)("div",{className:"container container--min-h",children:Object(O.jsxs)("div",{className:"favorites",children:[Object(O.jsxs)("div",{className:"devices__way-wrapper",children:[Object(O.jsx)(n.b,{to:{pathname:"/",search:t.toString()},className:"devices__way devices__way-home"}),Object(O.jsx)("div",{className:"devices__way devices__way-middle"}),Object(O.jsx)("div",{className:"devices__way-devices",children:"Favorites"})]}),Object(O.jsx)("h1",{className:"devices__title",children:"Favorites"}),Object(O.jsx)("p",{className:"favorites__amount",children:"".concat(c.length," items")}),!!c.length&&Object(O.jsx)("div",{className:"favorites__card-wrapper",children:c.map((function(e){return Object(O.jsx)(C,{product:e})}))}),!c.length&&Object(O.jsx)("p",{className:"cart-total__empty",children:"There are no favorites devices"})]})})},G=(c(42),function(e){var t=e.product,c=e.isClicked,a=e.setIsClicked,s=t.name,n=t.price,i=t.discount,o=t.id,d=t.imageUrl.replace("phones","products"),u=S(n,i),j=Object(l.useContext)(_).handleAddToCartFn,b=function(){var e=localStorage.getItem(o);return e?+e:1},p=Object(l.useState)(b()),m=Object(r.a)(p,2),h=m[0],v=m[1];return Object(O.jsxs)("div",{className:"cart-item",children:[Object(O.jsx)("button",{"data-cy":"cartDeleteButton",className:"cart-item__button-delete",type:"button","aria-label":"delete",onClick:function(e){j(e,t),a(!c)}}),Object(O.jsx)("img",{className:"cart-item__image",src:d,alt:"device"}),Object(O.jsx)("p",{className:"cart-item__name",children:s}),Object(O.jsxs)("div",{className:"cart-item__buttons-wrapper",children:[Object(O.jsx)("button",{type:"button",className:"cart-item__button",onClick:function(){a(!c);var e=localStorage.getItem(o);if(e&&h&&+e>1){var t=+e-1;localStorage.setItem(o,String(t)),v(b())}},children:"-"}),Object(O.jsx)("p",{className:"cart-item__amount",children:h}),Object(O.jsx)("button",{type:"button",className:"cart-item__button",onClick:function(){a(!c);var e=localStorage.getItem(o);if(e&&h){var t=+e+1;localStorage.setItem(o,String(t)),v(b())}},children:"+"})]}),Object(O.jsx)("span",{className:"cart-item__price",children:"$".concat(u)})]})}),W=function(){var e=Object(i.p)(),t=Object(l.useContext)(_).addedDevices,c=Object(l.useState)(!1),a=Object(r.a)(c,2),s=a[0],n=a[1],o=function(e){var t=localStorage.getItem(e);return t?+t:1},d=Object(l.useMemo)((function(){return t.map((function(e){return S(e.price,e.discount)*o(e.id)})).reduce((function(e,t){return e+t}),0)}),[t,s]),u=Object(l.useMemo)((function(){var e=0;return t.forEach((function(t){var c=o(t.id);c&&(e+=+c)})),e}),[t,s]);return Object(O.jsxs)("div",{className:"container container--min-h",children:[Object(O.jsxs)("button",{"data-cy":"backButton",onClick:function(){return e(-1)},type:"button",className:"button__back",children:[Object(O.jsx)("span",{className:"arrow-left"}),"Back"]}),Object(O.jsx)("h1",{className:"devices__title devices__title--cart",children:"Cart"}),!!t.length&&Object(O.jsx)("div",{className:"cart-main-wrapper",children:Object(O.jsxs)("div",{className:"cart-wrapper",children:[Object(O.jsx)("div",{className:"cart",children:t.map((function(e){return Object(O.jsx)(G,{product:e,isClicked:s,setIsClicked:n},e.id)}))}),Object(O.jsxs)("div",{className:"cart-total",children:[Object(O.jsx)("p",{className:"cart-total__price",children:"$".concat(d)}),Object(O.jsx)("p",{className:"cart-total__items",children:"Total for ".concat(u," items")}),Object(O.jsx)("div",{className:"horizontal-line horizontal-line--total"}),Object(O.jsx)("button",{type:"button",className:"cart-total__button",children:"Checkout"})]})]})}),!t.length&&Object(O.jsx)("p",{className:"cart-total__empty",children:"Your cart is empty"})]})},Z=function(){return Object(O.jsx)(n.a,{children:Object(O.jsx)(i.d,{children:Object(O.jsxs)(i.b,{path:"/",element:Object(O.jsx)(g,{}),children:[Object(O.jsx)(i.b,{index:!0,element:Object(O.jsx)(T,{})}),Object(O.jsx)(i.b,{path:"phones",element:Object(O.jsx)(K,{})}),Object(O.jsx)(i.b,{path:"tablets",element:Object(O.jsx)(Q,{})}),Object(O.jsx)(i.b,{path:"accessories",element:Object(O.jsx)(H,{})}),Object(O.jsx)(i.b,{path:"favorites",element:Object(O.jsx)(Y,{})}),Object(O.jsx)(i.b,{path:"cart",element:Object(O.jsx)(W,{})}),Object(O.jsx)(i.b,{path:"/product/:productId",element:Object(O.jsx)(J,{})})]})})})},V=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(Z,{})})};s.a.render(Object(O.jsx)(V,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9e839549.chunk.js.map