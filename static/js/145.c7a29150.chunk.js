"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[145],{3145:function(e,n,c){c.r(n),c.d(n,{default:function(){return H}});var t=c(9439),a=c(2791),o=c(1087),s=c(9230),i=c(9434),r=c(7664),l={container:"desctopNav_container__i97Pv",items:"desctopNav_items__EKEuY",item:"desctopNav_item__Y5SUV",login:"desctopNav_login__RU2TP",logout:"desctopNav_logout__n8U-w",fitem:"desctopNav_fitem__eAQ4Y",scrolled:"desctopNav_scrolled__blx-2"},u={languageMenuDropdown:"languageMenu_languageMenuDropdown__Zhi5r",languageOption:"languageMenu_languageOption__PD8hv"},d=c(184),m=function(e){var n=e.menuType,c=(0,a.useState)("ENG"),o=(0,t.Z)(c,2),m=o[0],_=o[1],v=(0,a.useState)("USD"),N=(0,t.Z)(v,2),f=N[0],h=N[1],g=(0,a.useState)(!1),j=(0,t.Z)(g,2),x=j[0],p=j[1],L=(0,a.useRef)(null),w=(0,s.$G)().i18n,b=(0,i.I0)(),k=function(e){L.current&&!L.current.contains(e.target)&&p(!1)};(0,a.useEffect)((function(){return document.addEventListener("mousedown",k),function(){document.removeEventListener("mousedown",k)}}),[]);var C=function(e,c){"Lan"===n?function(e){_(e),w.changeLanguage(e.toLowerCase()),p(!1)}(e):"Cur"===n&&function(e){h(e),b((0,r.N)(e)),p(!1)}(c)};return(0,d.jsx)("div",{className:"".concat(l.item," ").concat(l.languageMenu),onClick:function(){p(!x)},ref:L,children:x?(0,d.jsxs)("div",{className:u.languageMenuDropdown,children:[(0,d.jsx)("div",{className:u.languageOption,onClick:function(){return C("ENG","USD")},children:"Lan"===n?"ENG":"USD"}),(0,d.jsx)("div",{className:u.languageOption,onClick:function(){return C("PL","PLN")},children:"Lan"===n?"PL":"PLN"})]}):(0,d.jsx)("div",{className:u.selectedLanguage,children:"Lan"===n?m:f})})},_=c(9535),v=function(e){var n=e.Scrolled,c=e.path,t=e.isAuth,a=(0,i.I0)(),r=(0,s.$G)().t;return(0,d.jsxs)("div",{className:"".concat(l.container," ").concat(n?l.scrolled:""),children:[(0,d.jsxs)("div",{className:l.items,children:[(0,d.jsx)(o.rU,{to:c,className:"".concat(l.item," ").concat(l.fitem),children:r("Home")}),(0,d.jsx)(o.rU,{to:"/Offer",className:"".concat(l.item," ").concat(l.fitem),children:r("Offer")}),(0,d.jsx)(o.rU,{to:"/aboutus",className:"".concat(l.item," ").concat(l.fitem),children:r("About")})]}),(0,d.jsxs)("div",{className:l.items,children:[(0,d.jsx)(m,{menuType:"Lan"}),(0,d.jsx)(m,{menuType:"Cur"}),t?(0,d.jsx)(o.rU,{to:"/",onClick:function(){localStorage.removeItem("user"),a((0,_.pn)())},className:"".concat(l.item," ").concat(l.logout),children:r("Log out")}):(0,d.jsx)(o.rU,{to:"/Login",className:"".concat(l.item," ").concat(l.login),children:r("Log in")})]})]})},N=c(8820),f=c(1213),h=c(4373),g=c(458),j="mobileNav_navBar__4NgY0",x="mobileNav_selectors__BwxIw",p="mobileNav_selector__ro2ga",L="mobileNav_menuu__cJOrJ",w="mobileNav_menuIcon__5zWNH",b="mobileNav_mobileMenu__67cMI",k="mobileNav_closeIcon__CaMj-",C="mobileNav_menuItems__KHoYt",E="mobileNav_item__wDWSL",S="mobileNav_login__jl0Ys",U="mobileNav_logoutIcon__cdAlx",A="mobileNav_loginIcon__YFwNJ",I="mobileNav_mobileMenuActive__A0mPk",D="mobileNav_scrolled__sL8VI",M=function(e){var n=e.isAuth,c=e.Scrolled,r=(0,i.I0)(),l=(0,s.$G)().t,u=(0,a.useState)(!1),v=(0,t.Z)(u,2),M=v[0],Z=v[1],O=(0,a.useRef)(null),P=function(){Z(!M)};return(0,a.useEffect)((function(){var e=function(e){M&&O.current&&!O.current.contains(e.target)&&Z(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[M]),(0,d.jsxs)("div",{className:"".concat(j," ").concat(c?D:""),children:[(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)("div",{className:p,children:(0,d.jsx)(m,{menuType:"Lan"})}),(0,d.jsx)("div",{className:p,children:(0,d.jsx)(m,{menuType:"Cur"})})]}),(0,d.jsxs)("div",{className:L,ref:O,children:[(0,d.jsx)(N.qTj,{className:w,onClick:P}),(0,d.jsxs)("div",{className:"".concat(b," ").concat(M&&I),children:[(0,d.jsx)(h.abH,{onClick:P,className:k}),(0,d.jsxs)("ul",{className:C,children:[(0,d.jsx)("li",{className:E,children:(0,d.jsx)(o.rU,{to:n?"/authhome":"/",onClick:P,children:l("Home")})}),(0,d.jsx)("li",{className:E,children:(0,d.jsx)(o.rU,{to:"/offer",onClick:P,children:l("Offer")})}),(0,d.jsx)("li",{className:E,children:(0,d.jsx)(o.rU,{to:"/aboutus",onClick:P,children:l("About")})})]}),n?(0,d.jsxs)(o.rU,{to:"/",className:S,onClick:function(){P(),localStorage.removeItem("user"),r((0,_.pn)())},children:[(0,d.jsx)(f.pGv,{className:U}),l("Log out")]}):(0,d.jsxs)(o.rU,{to:"/login",className:S,onClick:P,children:[l("Log in"),(0,d.jsx)(g.vzj,{className:A})]})]})]})]})},Z=c(5704),O="header_header__eAamr",P="header_container__HyDnm",Y="header_logo__HpDtZ",G="header_scrolled__-0bfV",H=function(){var e=(0,a.useState)(!1),n=(0,t.Z)(e,2),c=n[0],s=n[1],i=(0,a.useState)(window.innerWidth),r=(0,t.Z)(i,2),l=r[0],u=r[1],m=(0,Z.Z)().isAuthenticated,_=m?"/authhome":"/";return(0,a.useEffect)((function(){var e=function(){window.scrollY>0?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),(0,a.useEffect)((function(){var e=function(){return u(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,d.jsx)("div",{className:"".concat(O," ").concat(c?G:""),children:(0,d.jsxs)("div",{className:P,children:[(0,d.jsx)(o.rU,{to:_,className:Y,children:(0,d.jsx)("p",{children:"FreeR"})}),l<=850?(0,d.jsx)(M,{isAuth:m,Scrolled:c}):(0,d.jsx)(v,{Scrolled:c,path:_,isAuth:m})]})})}},5704:function(e,n,c){var t=c(9434);n.Z=function(){return{isAuthenticated:(0,t.v9)((function(e){return e.auth.user})),userDetails:(0,t.v9)((function(e){return e.auth.userDetails}))}}}}]);
//# sourceMappingURL=145.c7a29150.chunk.js.map