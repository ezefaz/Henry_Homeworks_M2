(this["webpackJsonp11-redux"]=this["webpackJsonp11-redux"]||[]).push([[0],{21:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(3),o=n.n(r),u=n(10),i=n(4),s=n(8),a=n(9),p=n(12),b=n(11),j="INCREMENT",d="DECREMENT",O=n(2),l=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).incrementIfOdd=function(){t.props.count%2!==0&&t.props.increment()},t.incrementAsync=function(){setTimeout(t.props.increment,1e3)},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsxs)("p",{children:["Clickeado: ",this.props.count," veces",Object(O.jsx)("button",{onClick:function(){t.props.increment},children:"+ "}),Object(O.jsx)("button",{onClick:function(){t.props.decrement},children:"-  "})]})}}]),n}(c.Component),f=Object(i.b)((function(t){return{count:t.count}}),{increment:function(){return{type:j}},decrement:function(){return{type:d}}})(l),h=n(1),m={count:0},v=Object(u.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(h.a)(Object(h.a)({},t),{},{count:t.count+1});case d:return Object(h.a)(Object(h.a)({},t),{},{count:t.count-1});default:return Object(h.a)({},t)}}));o.a.render(Object(O.jsx)(i.a,{store:v,children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0edfe919.chunk.js.map