(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},50:function(e,t,c){},70:function(e,t,c){},86:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(19),r=c.n(i),s=c(12),o=(c(43),c(13)),d=(c(44),c.p+"static/media/logo.f885b6b5.jpg"),l=c(1),j=function(e){var t=e.onCLickCart;return Object(l.jsx)("header",{children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/last-seen/",children:Object(l.jsx)("img",{src:d,alt:"Logo"})})}),Object(l.jsx)("li",{onClick:t,style:{marginTop:"10px"},children:"Cart"})]})})})},u=c(4),b=c(11),O=(c(50),function(e){var t=e.id,c=e.title,n=e.imageURL,a=e.hoverImageURL,i=e.price,r=e.total;return Object(l.jsx)(o.b,{to:"/products/".concat(function(e){return e.split(" ").join("-")}(c)),children:Object(l.jsxs)("div",{className:"card","data-id":t,children:[Object(l.jsxs)("div",{className:"image",children:[Object(l.jsx)("img",{src:n,alt:c,onMouseOver:function(e){return e.currentTarget.src=a},onMouseOut:function(e){return e.currentTarget.src=n}}),0===r?Object(l.jsx)("div",{className:"status",children:"\u041f\u0440\u043e\u0434\u0430\u043d\u043e"}):null]}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("div",{className:"title",children:c}),Object(l.jsxs)("div",{className:"price",children:[function(e){return String(e).replace(/(\d)(?=(\d{3})+$)/g,"$1 ")}(i)," \u20bd"]})]})]})})}),m=c(10),p=c.n(m),h=function(e){e({type:"SET_LOADED",payload:!1}),p.a.get("https://6112f8ba89c6d00017ac0605.mockapi.io/goods").then((function(t){var c=t.data;return e({type:"SET_PRODUCTS",payload:c})}))},f=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.products.items}));return a.a.useEffect((function(){e(h)}),[e]),Object(l.jsx)("div",{className:"productsList",children:t&&t.map((function(e){return Object(l.jsx)(O,Object(u.a)({},e),e.id)}))})},x=c(3),v=c(26),g=c.n(v),S=c(36),C=(c(70),function(e){var t=e.children,c=e.onClick;return Object(l.jsx)("button",{onClick:c,className:"btn",type:"submit",children:t})}),N=c(37),E=c.n(N);c(86),c(87),c(88);function _(e){var t=e.images;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(E.a,Object(u.a)(Object(u.a)({},{swipeToSlide:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t&&t.map((function(e,t){return Object(l.jsx)("img",{src:e,alt:t},t)}))}))})}var y=a.a.createContext(),T=(c(89),function(e){var t=e.id,c=e.title,n=e.price,i=e.imageURL,r=e.images,o=(e.total,e.description),d=e.sizes,j=a.a.useState(d[0]),u=Object(s.a)(j,2),b=u[0],O=u[1],m=a.a.useContext(y).addCartItem,p={id:t,title:c,price:n,imageURL:i,activeSize:b};return Object(l.jsxs)("div",{className:"good-wrapper","data-id":t,children:[Object(l.jsx)("div",{className:"slider",children:Object(l.jsx)(_,{images:r})}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("h1",{className:"title",children:c}),Object(l.jsxs)("p",{className:"price",children:[function(e){return String(e).replace(/(\d)(?=(\d{3})+$)/g,"$1 ")}(n)," \u0420\u0443\u0431."]}),Object(l.jsx)("div",{className:"chooseSize",children:Object(l.jsx)("select",{value:b,onChange:function(e){return O(e.target.value)},children:d&&d.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})}),Object(l.jsx)(C,{onClick:function(){return m(p)},children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),Object(l.jsx)("p",{className:"description",children:o})]})]})}),L=function(){var e=a.a.useState([]),t=Object(s.a)(e,2),c=t[0],n=t[1],i=document.location.pathname.substring(10).split("-").join(" ");return a.a.useEffect((function(){Object(S.a)(g.a.mark((function e(){var t,c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([p.a.get("https://6112f8ba89c6d00017ac0605.mockapi.io/product-page?search=".concat(i))]);case 3:t=e.sent,c=Object(s.a)(t,1),a=c[0],n(a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[i]),Object(l.jsx)("div",{children:c.map((function(e){return Object(l.jsx)(T,Object(u.a)({},e),e.id)}))})},k=(c(90),function(e){var t=e.opened,c=void 0!==t&&t,n=e.onCloseCart,i=e.items,r=e.removeCartItem;return Object(l.jsx)(a.a.Fragment,{children:Object(l.jsx)("div",{className:"overlay ".concat(c?"overlayVisible":""),onClick:function(e){e.target.classList.contains("overlay")&&n()},children:Object(l.jsxs)("div",{className:"cart",children:[Object(l.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),i&&i.map((function(e){return Object(l.jsxs)("div",{className:"cart-item",children:[Object(l.jsx)("img",{className:"cart-item__image",width:200,src:e.imageURL,alt:"product in cart"}),Object(l.jsxs)("div",{className:"cart-item__info",children:[Object(l.jsxs)("p",{className:"cart-item__info-title",children:[e.title,"\xa0",Object(l.jsxs)("span",{children:["( ",e.activeSize," )"]})]}),Object(l.jsxs)("p",{className:"cart-item__info-price",children:[e.price," \u0420\u0443\u0431."]})]}),Object(l.jsx)("div",{className:"close-btn",children:Object(l.jsx)("img",{src:"./../images/btn-remove.svg",alt:"",onClick:function(){return r(e.id)}})})]},e.id)}))]})})})}),I=function(e){e({type:"SET_LOADED",payload:!1}),p.a.get("https://6112f8ba89c6d00017ac0605.mockapi.io/cartItems").then((function(t){var c=t.data;return e({type:"SET_CARTITEMS",payload:c})}))};var w=function(){var e=a.a.useState(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],i=a.a.useState([]),r=Object(s.a)(i,2),o=r[0],d=r[1],u=Object(b.b)();return Object(b.c)((function(e){return e.cartItems.items})),a.a.useEffect((function(){u(I)}),[]),Object(l.jsx)(y.Provider,{value:{addCartItem:function(e){try{p.a.post("https://6112f8ba89c6d00017ac0605.mockapi.io/cartItems",e),d((function(t){return t.filter((function(t){return t.id!==e.id}))}))}catch(t){console.log(t)}}},children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(j,{onCLickCart:function(){return n(!c)}}),Object(l.jsx)(k,{items:o,opened:c,onCloseCart:function(){return n(!c)},removeCartItem:function(e){try{p.a.delete("https://6112f8ba89c6d00017ac0605.mockapi.io/cartItems/".concat(e)),d((function(t){return t.filter((function(t){return t.id!==e}))}))}catch(t){console.log(t)}}}),Object(l.jsxs)(x.d,{children:[Object(l.jsx)(x.a,{from:"/last-seen/",to:"/last-seen"}),Object(l.jsx)(x.b,{exact:!0,path:"/last-seen/",children:Object(l.jsx)(f,{})})]}),Object(l.jsx)(x.b,{path:"/products/",children:Object(l.jsx)(L,{})})]})})},D=c(15),R=c(38),U={items:[],isLoaded:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return Object(u.a)(Object(u.a)({},e),{},{items:t.payload,isLoaded:!0});case"SET_LOADED":return Object(u.a)(Object(u.a)({},e),{},{isLoaded:t.payload});default:return e}},M={items:[],isLoaded:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CARTITEMS":return Object(u.a)(Object(u.a)({},e),{},{items:t.payload,isLoaded:!0});case"SET_LOADED":return Object(u.a)(Object(u.a)({},e),{},{isLoaded:t.payload});default:return e}},z=Object(D.b)({products:A,cartItems:P}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.c,J=Object(D.d)(z,$(Object(D.a)(R.a)));r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(b.a,{store:J,children:Object(l.jsx)(w,{})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.b47118b1.chunk.js.map