(this["webpackJsonpdev-data"]=this["webpackJsonpdev-data"]||[]).push([[0],{190:function(t,e,n){},192:function(t,e,n){},349:function(t,e,n){},350:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(59),o=n.n(r),s=(n(190),n(369)),d=["ethers","web3","web3modal","@openzeppelin/cli","ganache-cli","hardhat","truffle","@solana/web3.js","@project-serum/anchor-cli","@project-serum/anchor","stellar-sdk"],i=n(34),l=n.n(i),j=n(81),u=n(18),h=(n(192),n(156)),b=n.n(h),p=function(){var t=Object(j.a)(l.a.mark((function t(e,n,a){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.npmjs.org/downloads/range/".concat(n,":").concat(a,"/").concat(e));case 2:return c=t.sent,t.abrupt("return",c.data.downloads);case 4:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),f=function(t){for(var e=[],n={downloads:0,day:t[0].day},a=0;a<t.length;a++)a%7==0&&0!=a&&(e.push(n),n={downloads:0,day:t[a].day}),n.downloads+=t[a].downloads;return e.push(n),e},x=n(364),O=n(365),w=n(179),v=n(176),m=n(177),g=n(70),k=n(14),y=function(t,e){return Object(k.jsx)("button",{onClick:function(){var e="Downloads,Week\n";t.data.forEach((function(t){e+=[t.downloads,t.day,","],e+="\n"})),console.log(e);var n=document.createElement("a");n.href="data:text/csv;charset=utf-8,"+encodeURI(e),n.target="_blank",n.download="".concat(t.project,".csv"),n.click()},children:"Download CSV"})},C=function(t){var e=Object(a.useState)(),n=Object(u.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString().slice(0,10),e.next=3,p(t.project,"2014-01-01",n);case 3:a=e.sent,c=f(a),r(c);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(k.jsx)(s.a,{item:!0,xs:6,children:Object(k.jsxs)("div",{className:"chart",children:[Object(k.jsxs)("div",{className:"chart-head",children:[Object(k.jsx)("h2",{className:"title",children:t.project}),Object(k.jsx)(y,{data:c,project:t.project})]}),Object(k.jsx)(x.a,{width:"50%",height:200,children:Object(k.jsxs)(O.a,{data:c,children:[Object(k.jsx)(w.a,{type:"monotone",dataKey:"downloads",stroke:"#C49662",strokeWidth:3,dot:!1,activeDot:{r:8}}),Object(k.jsx)(v.a,{dataKey:"day",tick:{fill:"#B6B8C0"},stroke:"#B6B8C0"}),Object(k.jsx)(m.a,{tick:{fill:"#B6B8C0"},stroke:"#B6B8C0"}),Object(k.jsx)(g.a,{})]})})]})})},B=(n(349),function(){return Object(k.jsx)("div",{className:"App",style:{backgroundColor:"#3D4875"},children:Object(k.jsxs)("div",{className:"charts-body",children:[Object(k.jsx)("h2",{className:"dash-title",children:"NPM Downloads Dashboard"}),Object(k.jsx)(s.a,{container:!0,spacing:2,children:d.map((function(t){return Object(k.jsx)(C,{project:t})}))})]})})}),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,371)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root")),D()}},[[350,1,2]]]);
//# sourceMappingURL=main.4039334a.chunk.js.map