(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{9547:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category",function(){return n(2705)}])},960:function(t,e,n){"use strict";var r=n(5893),o=n(1801),a=n.n(o),c=n(387),u=(n(8418),n(9473)),i=n(7983),s=a().card,l=a().cardName,f=a().counts,d=a().red;e.Z=function(t){var e=t.item,n=t.stocks,o=t.onStockClick,a=(0,c.useRouter)(),h=a.pathname,p=(0,u.I0)();if("/"===h){var v=n.filter((function(t){return t.industry_category===e}));return(0,r.jsxs)("div",{className:s,onClick:function(){var t,n;t=e,n=v,p((0,i.jc)(t)),p((0,i.$g)(n)),a.push("/category")},children:[(0,r.jsx)("div",{className:l,children:e}),(0,r.jsxs)("div",{className:f,children:[v.length,"\u6a94\u80a1\u7968"]})]})}if("/category"===h&&e.pressure&&e.pressure.length>0){var m=new Date(e.pressure[0]),g=m.getFullYear(),y=(m.getMonth()+1).toString().padStart(2,"0"),_=m.getDate().toString().padStart(2,"0"),b="".concat(g,"/").concat(y,"/").concat(_),k=Number(e.pressure[1]).toFixed(4);return(0,r.jsxs)("div",{className:"".concat(s," ").concat(k<=.6&&d," "),onClick:function(){null===o||void 0===o||o(e.id,e.name)},children:[(0,r.jsx)("div",{className:l,children:e.name}),(0,r.jsxs)("div",{children:["\u4ee3\u78bc: ",e.id]}),(0,r.jsxs)("div",{children:["\u6642\u9593: ",b]}),(0,r.jsxs)("div",{children:["\u529b\u9053: ",k]})]})}}},7983:function(t,e,n){"use strict";n.d(e,{qu:function(){return r},vp:function(){return o},GB:function(){return a},jc:function(){return c},$g:function(){return u}});var r=function(t){return{type:"getTtlStocks",payload:t}},o=function(t){return{type:"getTtlCategories",payload:t}},a=function(t){return{type:"StockInfo",payload:t}},c=function(t){return{type:"categoryClick",payload:t}},u=function(t){return{type:"clickCategoryStocks",payload:t}}},8418:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(6273),u=n(387),i=n(7190);var s={};function l(t,e,n,r){if(t&&c.isLocalURL(e)){t.prefetch(e,n,r).catch((function(t){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:t&&t.locale;s[e+"%"+n+(o?"%"+o:"")]=!0}}},7190:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!c,i=o.useRef(),s=r(o.useState(!1),2),l=s[0],f=s[1],d=o.useCallback((function(t){i.current&&(i.current(),i.current=void 0),n||l||t&&t.tagName&&(i.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=u.get(e);if(n)return n;var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return u.set(e,n={id:e,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(t,e),a.observe(t),function(){c.delete(t),a.unobserve(t),0===c.size&&(a.disconnect(),u.delete(o))}}(t,(function(t){return t&&f(t)}),{rootMargin:e}))}),[n,e,l]);return o.useEffect((function(){if(!c&&!l){var t=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[l]),[d,l]};var o=n(7294),a=n(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map},2705:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var r=n(5666),o=n.n(r),a=n(5893),c=n(960),u=n(9473),i=n(7294),s=n(387),l=n(1907),f=n(7983),d=function(t){for(var e=1;e<t.length;e++){var n=t[e].close-t[e-1].close;t[e].def=n}for(var r=[],o=[],a=[],c=[],u=[],i=[],s=1;s<t.length;s++)t[s].def<0?(r.push(t[s].Trading_Volume),o.push(t[s].date),a.push(Math.abs(t[s].open-t[s-1].close)),c.push(Math.abs(t[s].max-t[s].min)),u.push(Math.abs(t[s].open-t[s].min)),i.push(Math.abs(t[s].max-t[s].close))):(o.push(t[s].date),r.push(t[s].Trading_Volume),a.push(Math.abs(t[s].max-t[s].open)),c.push(Math.abs(t[s].close-t[s].min)),u.push(Math.abs(t[s-1].close-t[s].open)),i.push(Math.abs(t[s-1].max-t[s].min)));for(var l=[],f=[],d=0;d<a.length;d++)l.push(a[d]+c[d]),f.push(u[d]+i[d]);for(var h=[],p=[],v=0;v<l.length;v++)h.push(Math.floor(r[v]*(l[v]/(l[v]+f[v])))),p.push(Math.floor(r[v]*(f[v]/(l[v]+f[v]))));for(var m=o.slice(20),g=[],y=[],_=0;_<h.length-20;_++){for(var b=0,k=0,x=_;x<_+20;x++)b+=h[x],k+=p[x];g.push(b),y.push(k)}for(var w=[],j=0;j<g.length;j++)w.push([new Date(m[j]).getTime(),y[j]/g[j]]);return w[w.length-1]};function h(t,e,n,r,o,a,c){try{var u=t[a](c),i=u.value}catch(s){return void n(s)}u.done?e(i):Promise.resolve(i).then(r,o)}function p(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v=function(){var t,e=(0,u.I0)(),n=((0,u.v9)((function(t){return t.clickCategoryReducer})),(0,u.v9)((function(t){return t.clickCategoryStocksReducer}))),r=((0,u.v9)((function(t){return t.getStockInfoReducer})),(0,i.useState)(!0)),v=r[0],m=r[1],g=(0,i.useState)([]),y=g[0],_=g[1],b=(0,i.useState)([]),k=(b[0],b[1],(0,s.useRouter)()),x=(t=o().mark((function t(n){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.j)(n.stock_id);case 3:(r=t.sent)&&(e((0,f.GB)(r)),a=d(r),0==y.filter((function(t){return t.id===n.stock_id})).length&&_((function(t){return p(t).concat([{name:n.stock_name,id:n.stock_id,pressure:a}])}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){h(a,r,o,c,u,"next",t)}function u(t){h(a,r,o,c,u,"throw",t)}c(void 0)}))}),w=function(t,e){k.push({pathname:"/stock",query:{id:t,name:e}})};return(0,i.useEffect)((function(){var t=n.map((function(t){return x(t)}));Promise.all(t).then((function(){m(!1)})).catch((function(t){console.error(t),m(!1)}))}),[n]),(0,a.jsxs)(a.Fragment,{children:[!0===v&&(0,a.jsx)("div",{className:"position-absolute w-100 h-100 d-flex justify-content-center align-items-center",children:"\u4e00\u9375\u529b\u9053\u8a08\u7b97\u4e2d..."}),!1===v&&(0,a.jsx)("div",{style:{marginTop:"65px",display:"flex",flexWrap:"wrap",gap:"12PX",overflowY:"scroll",justifyContent:"center"},children:y.map((function(t,e){return(0,a.jsx)(c.Z,{item:t,onStockClick:w},e)}))})]})}},1801:function(t){t.exports={card:"ListItem_card__jqs9j",cardName:"ListItem_cardName__3tcdo",counts:"ListItem_counts__gWOfl",red:"ListItem_red__3be1z"}}},function(t){t.O(0,[774,888,179],(function(){return e=9547,t(t.s=e);var e}));var e=t.O();_N_E=e}]);