(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(2),o=c(1),l=(c(11),c(12),c(5));function d(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var i=c(4),r=c.n(i),j=c(0),b=function(e){var t=e.todo,c=e.todoModal,s=e.handleTodoOpen,a=t.completed;return Object(j.jsxs)("tr",{"data-cy":"todo",children:[Object(j.jsx)("td",{className:"is-vcentered",children:t.id}),Object(j.jsx)("td",{className:"is-vcentered",children:a&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!a,"has-text-success":a}),children:t.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":!c,"fa-eye-slash":c})})})})})]})},u=function(e){var t=e.todos,c=e.setTodo,s=e.todoModal,a=e.setTodoModal,n=function(e){var t;a(!0),(t=e.userId,d("/users/".concat(t))).then((function(t){return c(Object(l.a)(Object(l.a)({},e),{},{user:t}))}))};return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(b,{todo:e,todoModal:s,handleTodoOpen:n},e.id)}))})]})},h=function(e){var t=e.query,c=e.onChange,s=e.sortValue,a=e.onSort;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},m=(c(14),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=e.setTodoModal;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),t?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(!1),c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(t.user.email),children:null===t||void 0===t?void 0:t.user.name})]})]})]}):Object(j.jsx)(m,{})]})},x=function(){var e=Object(o.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(""),l=Object(n.a)(a,2),i=l[0],r=l[1],b=Object(o.useState)("all"),x=Object(n.a)(b,2),f=x[0],v=x[1],p=Object(o.useState)(null),N=Object(n.a)(p,2),y=N[0],g=N[1],T=Object(o.useState)(!1),k=Object(n.a)(T,2),S=k[0],C=k[1];Object(o.useEffect)((function(){d("/todos").then((function(e){s(e)}))}),[]);var w=Object(o.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(i.toLowerCase().trim());switch(f){case"active":return t&&!e.completed;case"completed":return t&&e.completed;default:return t}}))}),[c,f,i]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{query:i,onChange:r,sortValue:f,onSort:v})}),Object(j.jsxs)("div",{className:"block",children:[!c.length&&Object(j.jsx)(m,{}),Object(j.jsx)(u,{todos:w,setTodo:g,todoModal:S,setTodoModal:C})]})]})})}),S&&Object(j.jsx)(O,{selectedTodo:y,setSelectedTodo:g,setTodoModal:C})]})};a.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2aab4d4f.chunk.js.map