(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(2),l=c(1),o=(c(11),c(12),c(5));function d(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var i,r=c(4),j=c.n(r),u=c(0),b=function(e){var t=e.todo,c=e.todoModal,s=e.handleTodoOpen,a=t.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",children:[Object(u.jsx)("td",{className:"is-vcentered",children:t.id}),Object(u.jsx)("td",{className:"is-vcentered",children:a&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!a,"has-text-success":a}),children:t.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"fa-eye":!c,"fa-eye-slash":c})})})})})]})},h=function(e){var t=e.todos,c=e.setTodo,s=e.isOpen,a=e.onOpen,n=function(e){var t;a(!0),(t=e.userId,d("/users/".concat(t))).then((function(t){return c(Object(o.a)(Object(o.a)({},e),{},{user:t}))}))};return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(b,{todo:e,todoModal:s,handleTodoOpen:n},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(i||(i={}));var O=function(e){var t=e.query,c=e.onChange,s=e.selectValue,a=e.onSelect;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){switch(e.target.value){case i.ALL:return a(i.ALL);case i.COMPLETED:return a(i.COMPLETED);case i.ACTIVE:return a(i.ACTIVE);default:return a(i.ALL)}},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},m=(c(14),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),x=function(e){var t=e.selectedTodo,c=e.onClose;return Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),t?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(t.user.email),children:null===t||void 0===t?void 0:t.user.name})]})]})]}):Object(u.jsx)(m,{})]})},f=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),o=Object(n.a)(a,2),r=o[0],j=o[1],b=Object(l.useState)(i.ALL),f=Object(n.a)(b,2),p=f[0],v=f[1],N=Object(l.useState)(null),y=Object(n.a)(N,2),g=y[0],C=y[1],L=Object(l.useState)(!1),T=Object(n.a)(L,2),E=T[0],k=T[1];Object(l.useEffect)((function(){d("/todos").then((function(e){s(e)}))}),[]);var A=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(r.toLowerCase().trim());switch(p){case i.ACTIVE:return t&&!e.completed;case i.COMPLETED:return t&&e.completed;default:return t}}))}),[c,p,r]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(O,{query:r,onChange:j,selectValue:p,onSelect:v})}),Object(u.jsxs)("div",{className:"block",children:[!c.length&&Object(u.jsx)(m,{}),Object(u.jsx)(h,{todos:A,setTodo:C,isOpen:E,onOpen:k})]})]})})}),E&&Object(u.jsx)(x,{selectedTodo:g,onClose:function(){C(null),k(!1)}})]})};a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d86be9f8.chunk.js.map