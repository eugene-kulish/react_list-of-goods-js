(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),i=n(6),r=n(8),o=(n(13),n(14),n(1)),a=n(3),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="name",d="length";var h=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(!1),a=Object(i.a)(c,2),h=a[0],g=a[1],f=function(t,e){var n=e.sortField,s=e.isReversed,c=Object(r.a)(t);return n&&c.sort((function(t,e){switch(n){case j:return t.localeCompare(e);case d:return t.length-e.length;default:return 0}})),s&&c.reverse(),c}(b,{sortField:n,isReversed:h});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==d}),onClick:function(){return s(d)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!1===h}),onClick:function(){g((function(t){return!t}))},children:"Reverse"}),(""!==n||!0===h)&&Object(u.jsx)("button",{type:"button",className:l()("button is-danger is-light"),onClick:function(){s(""),g(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:f.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3549bb54.chunk.js.map