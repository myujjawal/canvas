(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(38),a=n.n(s),i=(n(103),n(9)),r=(n(104),n(183)),j=n(182),l=n(184),b=n(186),u=n(185),d=n(87),O=n.n(d),x=n(4);function v(e){var t=e.name,n=void 0===t?"Box 1":t;return Object(x.jsx)(j.a,{sx:{flexGrow:1},children:Object(x.jsx)(r.a,{position:"static",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(u.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(x.jsx)(O.a,{})}),Object(x.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:n})]})})})}var f=n(13),h=n(71),m=n(90);function p(e){var t=Object(c.useRef)(),n=Object(c.useState)(e.position),o=Object(i.a)(n,2),s=o[0],a=o[1],r=Object(h.c)(),j=r.size,l=r.viewport,b=j.width/l.width,u=Object(c.useState)(!1),d=Object(i.a)(u,2),O=d[0],v=d[1];Object(h.b)((function(e,n){return t.current.rotation.x+=.01}));var p=Object(m.a)((function(e){var t=Object(i.a)(e.offset,2),n=t[0],c=t[1],o=Object(i.a)(s,3)[2];a([n/b,-c/b,o])}),{pointerEvents:!0});return Object(x.jsxs)("mesh",Object(f.a)(Object(f.a)(Object(f.a)({},e),{},{position:s},p()),{},{ref:t,onClick:function(){e.boxClicked(t.current.position),e.setBox(e._id)},onPointerOver:function(e){return v(!0)},onPointerOut:function(e){return v(!1)},children:[Object(x.jsx)("boxGeometry",{args:[1,1,1]}),Object(x.jsx)("meshStandardMaterial",{color:O?"white":e.color})]}))}function g(e){var t=e.boxClicked,n=e.setBox,o=e.color,s=e.box,a=Object(c.useState)("orange"),r=Object(i.a)(a,2),j=r[0],l=r[1],b=Object(c.useState)("orange"),u=Object(i.a)(b,2),d=u[0],O=u[1];return Object(c.useEffect)((function(){1===s?l(o):2===s&&O(o)}),[o]),Object(x.jsxs)(h.a,{children:[Object(x.jsx)("ambientLight",{intensity:.5}),Object(x.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),Object(x.jsx)("pointLight",{position:[-10,-10,-10]}),Object(x.jsx)(p,{position:[-1,0,0],boxClicked:t,_id:1,setBox:n,color:j}),Object(x.jsx)(p,{position:[1,0,0],boxClicked:t,_id:2,setBox:n,color:d})]})}var w=n(177),C=n(179),S=n(187),B=n(180),k=n(176),L=(n(117),function(e){var t=e.x,n=e.y,c=e.color,o=e.setcolor;return Object(x.jsxs)("div",{className:"panel",children:[Object(x.jsxs)("div",{className:"item",children:["X : ",t]}),Object(x.jsxs)("div",{className:"item",children:["Y : ",n]}),Object(x.jsx)(k.a,{sx:{minWidth:120},children:Object(x.jsxs)(S.a,{fullWidth:!0,children:[Object(x.jsx)(B.a,{id:"demo-simple-select-label",children:"Color "}),Object(x.jsxs)(w.a,{value:c,label:"Color",onChange:function(e){o(e.target.value)},children:[Object(x.jsx)(C.a,{value:"red",children:"Red"}),Object(x.jsx)(C.a,{value:"blue",children:"Blue"}),Object(x.jsx)(C.a,{value:"green",children:"Green"})]})]})})]})});var N=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(268),j=Object(i.a)(r,2),l=j[0],b=j[1],u=o.a.useCallback((function(e){a(!0)}),[]),d=o.a.useCallback((function(){a(!1)}),[]),O=o.a.useCallback((function(t){s&&b(t.clientX-e.current.getBoundingClientRect().left)}),[s]);o.a.useEffect((function(){return window.addEventListener("mousemove",O),window.addEventListener("mouseup",d),function(){window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",d)}}),[O,d]);var f=Object(c.useState)(1),h=Object(i.a)(f,2),m=h[0],p=h[1],w=Object(c.useState)(0),C=Object(i.a)(w,2),S=C[0],B=C[1],k=Object(c.useState)(1),N=Object(i.a)(k,2),E=N[0],y=N[1],D=o.a.useState("orange"),F=Object(i.a)(D,2),G=F[0],M=F[1];return console.log(G),Object(x.jsxs)("div",{className:"app-container",children:[Object(x.jsx)(v,{name:1===E?"Box 1":"Box 2"}),Object(x.jsxs)("div",{className:"main-container",children:[Object(x.jsxs)("div",{ref:e,className:"app-sidebar",style:{width:l},onMouseDown:function(e){return e.preventDefault()},children:[Object(x.jsx)(g,{className:"app-sidebar-content",boxClicked:function(e){p(e.x),B(e.y)},box:E,setBox:y,color:G}),Object(x.jsx)("div",{className:"app-sidebar-resizer",onMouseDown:u})]}),Object(x.jsx)("div",{className:"app-frame",children:Object(x.jsx)(L,{x:m,y:S,color:G,setcolor:M})})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root")),E()}},[[119,1,2]]]);
//# sourceMappingURL=main.35c4ea88.chunk.js.map