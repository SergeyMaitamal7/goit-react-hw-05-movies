"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[281],{3148:function(n,t,e){e.d(t,{Bn:function(){return d},LP:function(){return u},fT:function(){return f},gu:function(){return p},qF:function(){return s}});var r=e(5861),a=e(7757),i=e.n(a),o="022c68239ef1f98dfe9e02a4549079c6",c="https://api.themoviedb.org/3",u=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/trending/all/week?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9245:function(n,t,e){e.d(t,{a:function(){return u}});var r,a=e(168),i=e(6444).ZP.div(r||(r=(0,a.Z)(["  \n"]))),o=e(8402),c=e(184),u=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(o.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},3174:function(n,t,e){e.d(t,{Z:function(){return b}});var r,a,i,o,c=e(1087),u=e(7689),s=e(168),p=e(6444),f=p.ZP.div(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 280px);\n  gap: 16px;\n  list-style-type: none;\n  text-decoration: none;\n"]))),d=p.ZP.div(a||(a=(0,s.Z)(["\n  position: relative;\n  transition: 0.5s linear;\n  border-radius: 8px;\n  cursor: pointer;\n"]))),l=p.ZP.h3(i||(i=(0,s.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),x=p.ZP.img(o||(o=(0,s.Z)(["\n  display: block;\n  width: 280px;\n  height: 360px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n"]))),h=e(2007),v=e.n(h),g=e(4728),m=e(184);function b(n){var t=n.movies,e=(0,u.TH)();return console.log(t),(0,m.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,a=n.name,i=n.poster_path;return(0,m.jsx)(d,{children:(0,m.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,m.jsx)(x,{src:i?"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(i):g,alt:r}),(0,m.jsx)(l,{children:r||a})]})},t)}))})}b.prototype={movies:v().arrayOf(v().shape({id:v().number,title:v().string,name:v().string,poster_path:v().string}))}},7281:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var r,a,i,o,c,u=e(5861),s=e(9439),p=e(7757),f=e.n(p),d=e(2791),l=e(8185),x=e(168),h=e(6444),v=h.ZP.div(r||(r=(0,x.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1120px;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=h.ZP.form(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),m=h.ZP.button(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  hover {\n    opacity: 1;\n  }\n"]))),b=h.ZP.span(o||(o=(0,x.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),w=h.ZP.input(c||(c=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),y=e(184);function k(n){var t=n.onSubmit,e=(0,d.useState)(""),r=(0,s.Z)(e,2),a=r[0],i=r[1],o=function(){i("")};return(0,y.jsx)(v,{children:(0,y.jsxs)(g,{onSubmit:function(n){if(n.preventDefault(),""===a.trim())return alert("Please enter youre query");t(a),o()},children:[(0,y.jsxs)(m,{type:"submit",children:[(0,y.jsx)(l.dVI,{size:"2rem",color:"black"}),(0,y.jsx)(b,{children:"Search"})]}),(0,y.jsx)(w,{type:"text",name:"name",value:a,onChange:function(n){var t=n.currentTarget.value;i(t.toLowerCase())}})]})})}var Z=e(3174),j=e(3148),_=e(1087),P=e(5264),S=e(9245);function q(){var n,t=(0,d.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],i=(0,_.lr)(),o=(0,s.Z)(i,2),c=o[0],p=o[1],l=(0,d.useState)(!1),x=(0,s.Z)(l,2),h=x[0],v=x[1],g=null!==(n=c.get("query"))&&void 0!==n?n:"";(0,d.useEffect)((function(){var n=function(){var n=(0,u.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==g){n.next=2;break}return n.abrupt("return");case 2:return v(!0),n.prev=3,n.next=6,(0,j.qF)(g);case 6:t=n.sent,0!==(e=t.results).length?a(e):P.Notify.failure("Movies ".concat(g," is not found")),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),console.log(n.t0.message);case 14:return n.prev=14,v(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[3,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[g]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{onSubmit:function(n){p({query:n})}}),h&&(0,y.jsx)(S.a,{}),r&&(0,y.jsx)(Z.Z,{movies:r})]})}},4728:function(n,t,e){n.exports=e.p+"static/media/No_poster _image.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=281.43704010.chunk.js.map