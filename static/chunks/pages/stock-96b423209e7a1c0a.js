(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{5708:function(a,b,c){!function(b,d){a.exports=d(c(7294))}("undefined"!=typeof self?self:this,function(a){return(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=0)})([function(a,b,c){"use strict";function d(){return(d=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function e(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function f(a){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}Object.defineProperty(b,"__esModule",{value:!0}),c.d(b,"HighchartsReact",function(){return j});var g=c(1),h=c.n(g),i="undefined"!=typeof window?g.useLayoutEffect:g.useEffect,j=Object(g.memo)(Object(g.forwardRef)(function(a,b){var c=Object(g.useRef)(),j=Object(g.useRef)(),k=Object(g.useRef)(a.constructorType),l=Object(g.useRef)(a.highcharts);return i(function(){function b(){var b=a.highcharts||"object"===("undefined"==typeof window?"undefined":f(window))&&window.Highcharts,d=a.constructorType||"chart";b?b[d]?a.options?j.current=b[d](c.current,a.options,a.callback):console.warn("The \"options\" property was not passed."):console.warn("The \"constructorType\" property is incorrect or some required module is not imported."):console.warn("The \"highcharts\" property was not passed.")}if(j.current){if(!1!==a.allowChartUpdate)if(a.constructorType!==k.current||a.highcharts!==l.current)k.current=a.constructorType,l.current=a.highcharts,b();else if(!a.immutable&&j.current){var d,g;(d=j.current).update.apply(d,[a.options].concat(function(a){if(Array.isArray(a))return e(a)}(g=a.updateArgs||[!0,!0])||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(g)||function(a,b){if(a){if("string"==typeof a)return e(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?e(a,b):void 0}}(g)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))}else b()}else b()},[a.options,a.allowChartUpdate,a.updateArgs,a.containerProps,a.highcharts,a.constructorType]),i(function(){return function(){j.current&&(j.current.destroy(),j.current=null)}},[]),Object(g.useImperativeHandle)(b,function(){return{get chart(){return j.current},container:c}},[]),h.a.createElement("div",d({},a.containerProps,{ref:c}))}));b.default=j},function(b,c){b.exports=a}])})},5527:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stock",function(){return c(5241)}])},5241:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return w}});var d=c(5893),e=c(5666),f=c.n(e),g=c(1534),h=c.n(g),i=c(7294),j=c(1907),k=c(1163),l=c(2390),m=c.n(l),n=c(5384),o=c.n(n),p=c(5708),q=c.n(p),r=c(387),s=function(a){var b=a.stockDetail,c=a.stockName;a.stockId,a.stockInfo;for(var e=(0,r.useRouter)(),f=e.query,g=f.id,h=f.name,j=(0,i.useState)({}),k=j[0],l=j[1],n=1;n<b.length;n++){var p=b[n].close,s=b[n-1].close,t=p-s;b[n].def=t}for(var u=[],v=[],w=[],x=[],y=[],z=[],A=1;A<b.length;A++)b[A].def<0?(u.push(b[A].Trading_Volume),v.push(b[A].date),w.push(Math.abs(b[A].open-b[A-1].close)),x.push(Math.abs(b[A].max-b[A].min)),y.push(Math.abs(b[A].open-b[A].min)),z.push(Math.abs(b[A].max-b[A].close))):(v.push(b[A].date),u.push(b[A].Trading_Volume),w.push(Math.abs(b[A].max-b[A].open)),x.push(Math.abs(b[A].close-b[A].min)),y.push(Math.abs(b[A-1].close-b[A].open)),z.push(Math.abs(b[A-1].max-b[A].min)));for(var B=[],C=[],D=0;D<w.length;D++)B.push(w[D]+x[D]),C.push(y[D]+z[D]);for(var E=[],F=[],G=0;G<B.length;G++)E.push(Math.floor(u[G]*(B[G]/(B[G]+C[G])))),F.push(Math.floor(u[G]*(C[G]/(B[G]+C[G]))));for(var H=v.slice(20),I=[],J=[],K=0;K<E.length-20;K++){for(var L=0,M=0,N=K;N<K+20;N++)L+=E[N],M+=F[N];I.push(L),J.push(M)}for(var O=[],P=0;P<I.length;P++)O.push([new Date(H[P]).getTime(),J[P]/I[P]]);var Q=b.map(function(a){return[new Date(a.date).getTime(),Math.floor(a.Trading_Volume/1000)]});(0,i.useEffect)(function(){var a=b.map(function(a){return[new Date(a.date).getTime(),a.open,a.max,a.min,a.close]});l({rangeSelector:{selected:2,buttons:[{type:"month",count:1,text:"1月"},{type:"month",count:3,text:"3月"},{type:"all",text:"全部"}]},title:{text:"".concat(g," ").concat(h)},chart:{height:600,width:800},yAxis:[{height:"70%",title:{text:"价格"}},{title:{text:"買賣力道"},opposite:!1,min:0,max:2,tickInterval:0.2,plotLines:[{value:0.6,color:"red",width:2,zIndex:5},{value:1.4,color:"green",width:2,zIndex:5}]},{top:"75%",height:"25%",title:{text:"成交量"},offset:0}],series:[{type:"candlestick",name:"股票价格",data:a,yAxis:0},{type:"spline",name:"買賣力道",data:O,yAxis:1},{type:"column",name:"成交量",data:Q,yAxis:2}],accessibility:{enabled:!1}})},[b,c]);var R=m().pic;return m().category,(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:R,children:(0,d.jsx)(q(),{highcharts:o(),options:k,constructorType:"stockChart"})})})},t=c(9473);function u(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){c(a);return}h.done?b(i):Promise.resolve(i).then(d,e)}var v=function(){var a=(0,k.useRouter)().query.id,b=h().candleContainer,c=h().container,e=(0,i.useState)([]),g=e[0],l=e[1],m=(0,t.v9)(function(a){return a.stockInfoReducer}),n=function(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){u(f,d,e,g,h,"next",a)}function h(a){u(f,d,e,g,h,"throw",a)}g(void 0)})}}(f().mark(function a(b){var c;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,j.j)(b);case 3:l(c=a.sent),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,null,[[0,7]])}));return(0,i.useEffect)(function(){n(a)},[a]),(0,d.jsx)("div",{className:c,children:(0,d.jsx)("div",{className:b,children:(0,d.jsx)(s,{stockDetail:g,stockId:a,stockInfo:m})})})},w=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(v,{})})}},2390:function(a){a.exports={pic:"PresureStick_pic__3K2VP",category:"PresureStick_category__1cssX"}},1534:function(a){a.exports={container:"Stock_container__wtkJx"}}},function(a){a.O(0,[520,774,888,179],function(){return a(a.s=5527)}),_N_E=a.O()}])