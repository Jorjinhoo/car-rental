"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[837,767],{7767:function(e,a,r){r.r(a),r.d(a,{default:function(){return _}});r(2791);var t=r(9230),n=r(9434),c=r(1087),i="carCard_card__KZnip",l="carCard_card2__HUOJZ",s="carCard_carImage__bv-kg",d="carCard_title__BYMiF",o="carCard_items__e3MBm",u="carCard_item__JmQ4J",m="carCard_price__SRks-",h="carCard_amount__wgc-y",p="carCard_selectBttn__8+23B",x=r(184),_=function(e){var a=e.car,r=e.cardType,_=(0,t.$G)().t,v="USD"===(0,n.v9)((function(e){return e.currency.selectedCurrency}))?"".concat(a.price," USD"):"".concat(4*a.price," PLN");return(0,x.jsxs)("div",{className:"".concat(i," ").concat("listCard"===r&&l),children:[(0,x.jsx)("img",{className:s,src:a.image,alt:"Car ".concat(a.id)}),(0,x.jsx)("p",{className:d,children:a.name}),(0,x.jsxs)("div",{className:o,children:[(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{children:_("Engine: ")}),a.engineType]}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{children:_("Transmission: ")}),a.transmission]}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{children:_("Seats: ")}),a.numberOfSeats]}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{children:_("Power: ")}),a.enginePower]}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{children:_("Fuel Consumption: ")}),a.burning]}),"listCard"===r&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{children:_("Available from: ")}),a.availability.from]}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{children:_("Available to: ")}),a.availability.to]}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{children:_("Place: ")}),a.place]})]})]}),(0,x.jsxs)("div",{className:m,children:[_("Price: "),(0,x.jsx)("div",{className:h,children:v})]}),(0,x.jsx)(c.rU,{to:"/rentcar/".concat(a.id),className:p,children:_("Select")})]})}},4794:function(e,a,r){r.d(a,{Z:function(){return D}});var t=r(1413),n=r(9439),c=r(2791),i=r(1134),l=r(7689),s=r(9434),d=r(9230),o=r(7240),u=r(1997),m=r(1251),h=r(184),p=[{value:"City, Random Street 2, 01-110",label:"City, Random Street 2, 01-110"},{value:"City, Random Street 3, 03-53",label:"City, Random Street 3, 03-53"},{value:"City, Random Street 5, 01-55",label:"City, Random Street 5, 01-55"},{value:"City, Random Street 1, 01-54",label:"City, Random Street 1, 01-54"},{value:"City, Random Street 4, 38",label:"City, Random Street 4, 38"}],x=function(e){var a=e.control,r=e.placeholder,n={"@media screen and (max-width: 1400px)":{height:"55px",width:"350px"}},c={"@media screen and (max-width: 400px)":{height:"55px",width:"250px"}};return(0,h.jsx)(i.Qr,{name:"pickupPlace",control:a,rules:{required:!0},render:function(e){var a=e.field;return(0,h.jsx)(m.ZP,(0,t.Z)((0,t.Z)({options:p},a),{},{placeholder:r,styles:{control:function(e,a){return(0,t.Z)((0,t.Z)((0,t.Z)({},e),{},{height:"65px",width:"500px",borderRadius:"5px",marginRight:"5px",cursor:"pointer"},n),c)},option:function(e,a){return(0,t.Z)((0,t.Z)({},e),{},{zIndex:"5"})}}}))}})},_=(r(8639),"rentForm_form__PMFXe"),v="rentForm_error__ORQyO",f="rentForm_selectDate__M1uD5",j="rentForm_submit__QQDJG",D=function(){var e=(0,d.$G)().t,a=(0,i.cI)(),r=a.control,m=a.handleSubmit,p=a.formState.errors,D=(0,c.useState)(null),N=(0,n.Z)(D,2),S=N[0],C=N[1],y=(0,c.useState)(null),Z=(0,n.Z)(y,2),b=Z[0],g=Z[1],k=(0,l.s0)(),P=(0,s.I0)();return(0,h.jsxs)("form",{onSubmit:m((function(e){var a=(0,t.Z)((0,t.Z)({},e),{},{pickupPlace:e.pickupPlace.value});P((0,o.O)(a)),k("/selectedperiod")})),className:_,id:"reservationForm",children:[(0,h.jsx)(x,{control:r,placeholder:e("Pick-up place")}),p.pickupPlace&&(0,h.jsx)("span",{className:v,children:e("This field is required")}),(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)(u.Z,{control:r,name:"pickupDate",firstSelectedDate:S,secondSelectedDate:b,setSelectedDate:C,labelName:e("Pickup date")}),p.pickupDate&&(0,h.jsx)("span",{className:v,children:e("This field is required")})]}),(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)(u.Z,{control:r,name:"returnDate",firstSelectedDate:S,secondSelectedDate:b,setSelectedDate:g,labelName:e("Return date")}),p.returnDate&&(0,h.jsx)("span",{className:v,children:e("This field is required")})]}),(0,h.jsx)("input",{className:j,value:e("Search"),type:"submit",disabled:Object.keys(p).length>0})]})}},1997:function(e,a,r){var t=r(1134),n=r(9513),c=r.n(n),i=r(9040),l=r(1951),s=r(8820),d=(r(8639),r(2507)),o=r(184);a.Z=function(e){var a=e.name,r=e.control,n=e.firstSelectedDate,u=e.secondSelectedDate,m=e.setSelectedDate,h=e.labelName,p=e.minDate,x=e.maxDate,_=p?new Date(p):new Date,v=(0,i.default)(_,1),f=x?new Date(x):null,j=null!==n&&null!==u?[n,u]:null!==n?[n]:null!==u?[u]:[];return(0,o.jsxs)("div",{className:d.Z.container,children:[(0,o.jsx)("div",{className:d.Z.label,children:h}),(0,o.jsx)(s.xHR,{className:d.Z.calendarIcon}),(0,o.jsx)(t.Qr,{name:a,control:r,rules:{required:!0},defaultValue:null,render:function(e){var r=e.field;return(0,o.jsx)(c(),{selected:r.value?new Date(r.value):"pickupDate"===a?_:v,onChange:function(e){r.onChange((0,l.default)(e,"yyyy-MM-dd")),m(e)},dateFormat:"yyyy-MM-dd",minDate:_,className:d.Z.dateInput,highlightDates:j,startDate:n,endDate:u,maxDate:f})}})]})}},7837:function(e,a,r){r.r(a);var t=r(9434),n=r(9230),c=r(4794),i=r(7767),l=r(4725),s=r(184);a.default=function(){var e=(0,n.$G)().t,a=(0,t.v9)((function(e){return e.rentFormData.dataToSend})),r=(0,t.v9)((function(e){return e.cars.cars})),d=function(e,a,r,t){if(!r||!t)return!1;var n=new Date(e),c=new Date(a),i=new Date(r),l=new Date(t);return i>=n&&l<=c},o=function(e,a){return a&&a.pickupPlace&&a.returnDate?e.filter((function(e){return!(!a.pickupDate||null===a.pickupDate||null===a.returnDate)&&(e.place===a.pickupPlace&&d(e.availability.from,e.availability.to,a.pickupDate,a.returnDate))})):e}(r,a);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:l.Z.rentForm,children:(0,s.jsx)(c.Z,{})}),(0,s.jsxs)("div",{className:l.Z.container,children:[(0,s.jsx)("div",{className:l.Z.header,children:e("Searching Results")}),(0,s.jsx)("section",{className:l.Z.cardsContainer,children:o.length>=1?o.map((function(e){return(0,s.jsx)(i.default,{car:e,cardType:"listCard"},e.id)})):(0,s.jsxs)("div",{className:l.Z.notCars,children:["Nothing found...",(0,s.jsx)("div",{children:"Change the search options"})]})})]})]})}},2507:function(e,a){a.Z={container:"dateSelector_container__gf0hI",label:"dateSelector_label__Q3oA6",calendarIcon:"dateSelector_calendarIcon__WNL8Z",dateInput:"dateSelector_dateInput__poaJx"}},4725:function(e,a){a.Z={rentForm:"selectedPeriod_rentForm__Z7Bcn",container:"selectedPeriod_container__KjaUa",header:"selectedPeriod_header__zxzHx",cardsContainer:"selectedPeriod_cardsContainer__TNeSe",notCars:"selectedPeriod_notCars__XjpJt"}}}]);
//# sourceMappingURL=837.fc13790c.chunk.js.map