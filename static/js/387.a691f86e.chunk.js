(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3148:function(n,e,t){"use strict";t.d(e,{Bn:function(){return h},LP:function(){return s},fT:function(){return f},gu:function(){return p},qF:function(){return i}});var r=t(5861),a=t(7757),c=t.n(a),o="022c68239ef1f98dfe9e02a4549079c6",u="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/trending/all/week?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3387:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,o,u=t(5861),s=t(9439),i=t(7757),p=t.n(i),f=t(3148),h=t(2791),l=t(7689),v=t(168),d=t(6444),m=d.ZP.ul(r||(r=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 106px);\n  gap: 16px;\n  list-style-type: none;\n"]))),x=d.ZP.li(a||(a=(0,v.Z)(["\n  padding: 5px;\n"]))),y=d.ZP.img(c||(c=(0,v.Z)([""]))),g=d.ZP.h3(o||(o=(0,v.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),w=t(4728),_=t(2007),k=t.n(_),b=t(184);function Z(){var n=(0,l.UO)().movieId,e=(0,h.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1];return(0,h.useEffect)((function(){var e=function(){var e=(0,u.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.fT)(n);case 3:t=e.sent,console.log(t.cast),a(t.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,b.jsx)(b.Fragment,{children:0===r.length?(0,b.jsx)("p",{children:"Cast not find"}):(0,b.jsxs)(m,{children:[r.map((function(n){var e=n.id,t=n.name,r=n.profile_path;return(0,b.jsxs)(x,{children:[(0,b.jsx)(y,{src:r?"https://www.themoviedb.org/t/p/w138_and_h175_face".concat(r):w,alt:t,width:"120"}),(0,b.jsx)(g,{children:t})]},e)}))," "]})})}Z.prototype={cast:k().arrayOf(k().shape({id:k().number,name:k().string,profile_path:k().string}))}},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function c(){}c.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,c,o){if(o!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4728:function(n,e,t){"use strict";n.exports=t.p+"static/media/No_poster _image.7555b15218a0f4733bf7.jpg"},5861:function(n,e,t){"use strict";function r(n,e,t,r,a,c,o){try{var u=n[c](o),s=u.value}catch(i){return void t(i)}u.done?e(s):Promise.resolve(s).then(r,a)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(a,c){var o=n.apply(e,t);function u(n){r(o,a,c,u,s,"next",n)}function s(n){r(o,a,c,u,s,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=387.a691f86e.chunk.js.map