(this.webpackJsonpburgerbuild=this.webpackJsonpburgerbuild||[]).push([[0],[,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom___HuxZP",BreadTop:"BurgerIngredient__BreadTop___10-cT",Seeds1:"BurgerIngredient__Seeds1___3xHtz",Seeds2:"BurgerIngredient__Seeds2___1cUso",Meat:"BurgerIngredient__Meat___13nAN",Cheese:"BurgerIngredient__Cheese___1FxeY",Salad:"BurgerIngredient__Salad___1iTJE",Bacon:"BurgerIngredient__Bacon___3vrAI"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer___21TuB",Open:"SideDrawer__Open___1pVYR",Close:"SideDrawer__Close___3Yv1l",Logo:"SideDrawer__Logo___3TkPv"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl___1jYc3",Label:"BuildControl__Label___33Z-p",Less:"BuildControl__Less___377MJ",More:"BuildControl__More___28-hQ"}},function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar___2JJW-",Logo:"Toolbar__Logo___1efBD",DesktopOnly:"Toolbar__DesktopOnly___WADUd"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem___23bcu",active:"NavigationItem__active___2zJdO"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls___3_01f",OrderButton:"BuildControls__OrderButton___myBwT",enable:"BuildControls__enable___3jYIq"}},function(e,t,a){e.exports={Button:"Button__Button___QI7b2",Success:"Button__Success___2dHUt",Danger:"Button__Danger___2xnhN"}},,,function(e,t,a){e.exports={Content:"Layout__Content___3pLYC"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo__Logo___19WaN"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems____yd_d"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle___26to0"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop___efy1y"}},function(e,t,a){e.exports={Burger:"Burger__Burger___3K4F-"}},function(e,t,a){e.exports={Modal:"Modal__Modal___32_-a"}},,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=(a(29),a(1)),i=a(2),s=a(3),u=a(4),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.children}}]),a}(n.Component),_=a(15),m=a.n(_),p=a(8),h=a.n(p),g=a(16),b=a.n(g),v=a(17),f=a.n(v),E=function(e){return r.a.createElement("div",{className:f.a.Logo,style:{height:e.height}},r.a.createElement("img",{alt:"logo",src:b.a}))},C=a(18),B=a.n(C),k=a(10),w=a.n(k),y=function(e){return r.a.createElement("li",{className:w.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?w.a.active:null},e.children))},N=function(){return r.a.createElement("ul",{className:B.a.NavigationItems},r.a.createElement(y,{link:"/",active:!0},"Burger Builder"),r.a.createElement(y,{link:"/"},"Checkout"))},O=a(19),S=a.n(O),j=function(e){return r.a.createElement("div",{className:S.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){return r.a.createElement("header",{className:h.a.Toolbar},r.a.createElement(j,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:h.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:h.a.DesktopOnly},r.a.createElement(N,null)))},T=a(6),I=a.n(T),x=a(20),L=a.n(x),H=function(e){return e.show?r.a.createElement("div",{className:L.a.Backdrop,onClick:e.clicked}):null},P=function(e){var t=[I.a.SideDrawer,I.a.Close];return e.open&&(t=[I.a.SideDrawer,I.a.Open]),r.a.createElement(d,null,r.a.createElement(H,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:I.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(N,null))))},M=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:m.a.Content},this.props.children))}}]),a}(n.Component),A=a(9),Y=a(23),J=a(21),W=a.n(J),R=a(5),U=a.n(R),F=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:U.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:U.a.BreadTop},r.a.createElement("div",{className:U.a.Seeds1}),r.a.createElement("div",{className:U.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:U.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:U.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:U.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:U.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),z=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(Y.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(F,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients...")),r.a.createElement("div",{className:W.a.Burger},r.a.createElement(F,{type:"bread-top"}),t,r.a.createElement(F,{type:"bread-bottom"}))},Q=a(11),Z=a.n(Q),q=a(7),K=a.n(q),V=function(e){return r.a.createElement("div",{className:K.a.BuildControl},r.a.createElement("div",{className:K.a.Label},e.label),r.a.createElement("button",{className:K.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:K.a.More,onClick:e.added},"More"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],G=function(e){return r.a.createElement("div",{className:Z.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),$.map((function(t){return r.a.createElement(V,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:Z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},X=a(22),ee=a.n(X),te=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(H,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),a}(n.Component),ae=a(12),ne=a.n(ae),re=function(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},le=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(re,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(re,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),a}(n.Component),oe={salad:.5,cheese:.4,meat:1.3,bacon:.7},ce=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(A.a)({},e.state.ingredients);n[t]=a;var r=oe[t]+e.state.totalPrice;e.setState({totalPrice:r,ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var l=oe[t]-e.state.totalPrice;e.setState({totalPrice:l,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){alert("You continued")},e}return Object(i.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(d,null,r.a.createElement(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(le,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(z,{ingredients:this.state.ingredients}),r.a.createElement(G,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),a}(n.Component);var ie=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null,r.a.createElement(ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.26c48298.chunk.js.map