(this["webpackJsonpquicky-age-calulator"]=this["webpackJsonpquicky-age-calulator"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a(8),r=a.n(l),n=a(7),s=a(3),i=a(9),o=a(1),j=function(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),l=a[0],r=a[1],n=Object(c.useState)(null),j=Object(s.a)(n,2),b=j[0],h=j[1],m=Object(i.a)(),d=(m.register,m.handleSubmit,m.getValues,m.formState),u=d.errors,O=(d.touchedFields,function e(t){console.log("value is ",l);var a=t.target.value;if(t.target&&a.length>3){console.log(a),r(a);var c=(new Date).getUTCFullYear(),n=Math.floor(parseInt(c)-parseInt(a)-1);n&&h(n),console.log({calculateAge:e})}});return console.log(u),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"panel year-wise",children:Object(o.jsxs)("form",{className:"calculatorForm form-horizontal",children:[Object(o.jsxs)("div",{className:"form-floating",children:[Object(o.jsxs)("select",{className:"form-select",id:"floatingSelect","aria-label":"Floating label select example",children:[Object(o.jsx)("option",{children:"Open this select menu"}),Object(o.jsx)("option",{value:"1",children:"One"}),Object(o.jsx)("option",{value:"2",children:"Two"}),Object(o.jsx)("option",{value:"3",children:"Three"})]}),Object(o.jsx)("label",{for:"floatingSelect",children:"Date"})]}),Object(o.jsxs)("div",{className:"form-floating",children:[Object(o.jsxs)("select",{className:"form-select",id:"floatingSelect","aria-label":"Floating label select example",children:[Object(o.jsx)("option",{children:"Select Month"}),function(){for(var e=[],t=1;t<=12;t++)e.push(Object(o.jsx)("option",{value:t,children:t}));return console.log(e),e}()]}),Object(o.jsx)("label",{for:"floatingSelect",children:"Month"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"number",className:"form-control",id:"birthYear",name:"birthYear",placeholder:"Birth Year",defaultValue:l,maxLength:"4",minLength:"4",onChange:function(e){return O(e)}}),Object(o.jsx)("label",{htmlFor:"birthYear",children:"Enter Birth Year:"}),b?Object(o.jsxs)("h4",{className:"pt-3",children:["Age is ",Object(o.jsx)("strong",{className:"m-0 p-0",children:b})," or"," ",Object(o.jsx)("strong",{className:"m-0 p-0",children:b+1})," ",Object(o.jsx)("br",{}),"(If birth date is passed in this year!)"]}):""]})]})})})},b=function(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),l=a[0],r=a[1],n=Object(c.useState)(null),i=Object(s.a)(n,2),j=i[0],b=i[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"panel year-wise",children:Object(o.jsx)("form",{className:"calculatorForm form1-horizontal",children:Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"number",className:"form-control",id:"birthYear",name:"birthYear",placeholder:"Birth Year",defaultValue:l,maxLength:"4",minLength:"4",onChange:function(e){return function(e){var t=e.target.value;if(e.target&&t.length>3){r(t);var a=(new Date).getUTCFullYear(),c=Math.floor(parseInt(a)-parseInt(t)-1);c&&b(c)}}(e)}}),Object(o.jsx)("label",{htmlFor:"birthYear",children:"Enter Birth Year:"}),j?Object(o.jsxs)("h4",{className:"pt-3",children:["Age is ",Object(o.jsx)("strong",{className:"m-0 p-0",children:j})," or"," ",Object(o.jsx)("strong",{className:"m-0 p-0",children:j+1})," ",Object(o.jsx)("br",{}),"(If birth date is passed in this year!)"]}):""]})})})})},h=function(e){var t=Object(c.useState)({year:!0}),a=Object(s.a)(t,2),l=a[0],r=a[1],i=function(e,t){console.log("handelpanel",t),r(Object(n.a)(Object(n.a)({},l),{},{year:!(!t||"year"!==t.toLowerCase())}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"panel-wrapper",children:[Object(o.jsxs)("ul",{className:"nav nav-tabs",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:l.year?"nav-link active":"nav-link ",href:"#",onClick:function(e){return i(0,"year")},children:"Year Wise"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#",className:l.year?"nav-link ":"nav-link active",onClick:function(e){return i(0,"fullYear")},children:"Fulldate wise"})})]}),Object(o.jsx)("div",{className:"p-1 mt-2 mb-2\r d-flex align-items-center",children:l&&l.year?Object(o.jsx)(b,{}):Object(o.jsx)(j,{})})]})})};a(16),a(17);function m(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"QA Calculator"}),Object(o.jsx)("h2",{children:"Calculate Age Quickly"}),Object(o.jsx)(h,{})]})}var d=document.getElementById("root");r.a.render(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(m,{})}),d)}},[[18,1,2]]]);
//# sourceMappingURL=main.9f2c6a28.chunk.js.map