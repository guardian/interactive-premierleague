!function(){function t(t){return t&&(t.ownerDocument||t.document||t).documentElement}function n(t){return t&&(t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView)}function e(t){for(var n=1;t*n%1;)n*=10;return n}function r(t,n,e){return function(){var r=e.apply(n,arguments);return r===n?t:r}}function i(){}function u(t,n){for(var e in n)Object.defineProperty(t.prototype,e,{value:n[e],enumerable:!1})}function a(){this._=Object.create(null)}function o(t){return(t+="")===vn||t[0]===yn?yn+t:t}function s(t){return(t+="")[0]===yn?t.slice(1):t}function l(t){return o(t)in this._}function c(t){return(t=o(t))in this._&&delete this._[t]}function f(){var t=[];for(var n in this._)t.push(s(n));return t}function h(){var t=0;for(var n in this._)++t;return t}function g(){for(var t in this._)return!1;return!0}function d(t,n,e){return this instanceof d?(this.h=+t,this.s=+n,void(this.l=+e)):arguments.length<2?t instanceof d?new d(t.h,t.s,t.l):A(""+t,D,d):new d(t,n,e)}function p(t,n,e){function r(t){return t>360?t-=360:0>t&&(t+=360),60>t?u+(a-u)*t/60:180>t?a:240>t?u+(a-u)*(240-t)/60:u}function i(t){return Math.round(255*r(t))}var u,a;return t=isNaN(t)?0:(t%=360)<0?t+360:t,n=isNaN(n)?0:0>n?0:n>1?1:n,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+n):e+n-e*n,u=2*e-a,new N(i(t+120),i(t),i(t-120))}function m(t,n,e){return this instanceof m?(this.h=+t,this.c=+n,void(this.l=+e)):arguments.length<2?t instanceof m?new m(t.h,t.c,t.l):t instanceof y?_(t.l,t.a,t.b):_((t=C((t=un.rgb(t)).r,t.g,t.b)).l,t.a,t.b):new m(t,n,e)}function v(t,n,e){return isNaN(t)&&(t=0),isNaN(n)&&(n=0),new y(e,Math.cos(t*=bn)*n,Math.sin(t)*n)}function y(t,n,e){return this instanceof y?(this.l=+t,this.a=+n,void(this.b=+e)):arguments.length<2?t instanceof y?new y(t.l,t.a,t.b):t instanceof m?v(t.h,t.c,t.l):C((t=N(t)).r,t.g,t.b):new y(t,n,e)}function w(t,n,e){var r=(t+16)/116,i=r+n/500,u=r-e/200;return i=b(i)*Sn,r=b(r)*kn,u=b(u)*An,new N(x(3.2404542*i-1.5371385*r-.4985314*u),x(-.969266*i+1.8760108*r+.041556*u),x(.0556434*i-.2040259*r+1.0572252*u))}function _(t,n,e){return t>0?new m(Math.atan2(e,n)*Mn,Math.sqrt(n*n+e*e),t):new m(NaN,NaN,t)}function b(t){return t>.206893034?t*t*t:(t-4/29)/7.787037}function M(t){return t>.008856?Math.pow(t,1/3):7.787037*t+4/29}function x(t){return Math.round(255*(.00304>=t?12.92*t:1.055*Math.pow(t,1/2.4)-.055))}function N(t,n,e){return this instanceof N?(this.r=~~t,this.g=~~n,void(this.b=~~e)):arguments.length<2?t instanceof N?new N(t.r,t.g,t.b):A(""+t,N,p):new N(t,n,e)}function S(t){return new N(t>>16,t>>8&255,255&t)}function k(t){return 16>t?"0"+Math.max(0,t).toString(16):Math.min(255,t).toString(16)}function A(t,n,e){var r,i,u,a=0,o=0,s=0;if(r=/([a-z]+)\((.*)\)/i.exec(t))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return n(O(i[0]),O(i[1]),O(i[2]))}return(u=Tn.get(t.toLowerCase()))?n(u.r,u.g,u.b):(null==t||"#"!==t.charAt(0)||isNaN(u=parseInt(t.slice(1),16))||(4===t.length?(a=(3840&u)>>4,a=a>>4|a,o=240&u,o=o>>4|o,s=15&u,s=s<<4|s):7===t.length&&(a=(16711680&u)>>16,o=(65280&u)>>8,s=255&u)),n(a,o,s))}function D(t,n,e){var r,i,u=Math.min(t/=255,n/=255,e/=255),a=Math.max(t,n,e),o=a-u,s=(a+u)/2;return o?(i=.5>s?o/(a+u):o/(2-a-u),r=t==a?(n-e)/o+(e>n?6:0):n==a?(e-t)/o+2:(t-n)/o+4,r*=60):(r=NaN,i=s>0&&1>s?0:r),new d(r,i,s)}function C(t,n,e){t=T(t),n=T(n),e=T(e);var r=M((.4124564*t+.3575761*n+.1804375*e)/Sn),i=M((.2126729*t+.7151522*n+.072175*e)/kn),u=M((.0193339*t+.119192*n+.9503041*e)/An);return y(116*i-16,500*(r-i),200*(i-u))}function T(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function O(t){var n=parseFloat(t);return"%"===t.charAt(t.length-1)?Math.round(2.55*n):n}function E(t,n){t=un.rgb(t),n=un.rgb(n);var e=t.r,r=t.g,i=t.b,u=n.r-e,a=n.g-r,o=n.b-i;return function(t){return"#"+k(Math.round(e+u*t))+k(Math.round(r+a*t))+k(Math.round(i+o*t))}}function F(t,n){var e,r={},i={};for(e in t)e in n?r[e]=U(t[e],n[e]):i[e]=t[e];for(e in n)e in t||(i[e]=n[e]);return function(t){for(e in r)i[e]=r[e](t);return i}}function I(t,n){var e,r=[],i=[],u=t.length,a=n.length,o=Math.min(t.length,n.length);for(e=0;o>e;++e)r.push(U(t[e],n[e]));for(;u>e;++e)i[e]=t[e];for(;a>e;++e)i[e]=n[e];return function(t){for(e=0;o>e;++e)i[e]=r[e](t);return i}}function L(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function Y(t,n){var e,r,i,u=On.lastIndex=En.lastIndex=0,a=-1,o=[],s=[];for(t+="",n+="";(e=On.exec(t))&&(r=En.exec(n));)(i=r.index)>u&&(i=n.slice(u,i),o[a]?o[a]+=i:o[++a]=i),(e=e[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,s.push({i:a,x:L(e,r)})),u=En.lastIndex;return u<n.length&&(i=n.slice(u),o[a]?o[a]+=i:o[++a]=i),o.length<2?s[0]?(n=s[0].x,function(t){return n(t)+""}):function(){return n}:(n=s.length,function(t){for(var e,r=0;n>r;++r)o[(e=s[r]).i]=e.x(t);return o.join("")})}function U(t,n){for(var e,r=un.interpolators.length;--r>=0&&!(e=un.interpolators[r](t,n)););return e}function z(t,n){return n-=t,function(e){return Math.round(t+n*e)}}function P(t,n){return n=(n-=t=+t)||1/n,function(e){return(e-t)/n}}function j(t,n){return n=(n-=t=+t)||1/n,function(e){return Math.max(0,Math.min(1,(e-t)/n))}}function q(t){return t}function H(t,n){return n-(t?Math.ceil(Math.log(t)/Math.LN10):1)}function R(t,n){var e=Math.pow(10,3*mn(8-n));return{scale:n>8?function(t){return t/e}:function(t){return t*e},symbol:t}}function $(t){var n=t.decimal,e=t.thousands,r=t.grouping,i=t.currency,u=r&&e?function(t,n){for(var i=t.length,u=[],a=0,o=r[0],s=0;i>0&&o>0&&(s+o+1>n&&(o=Math.max(1,n-s)),u.push(t.substring(i-=o,i+o)),!((s+=o+1)>n));)o=r[a=(a+1)%r.length];return u.reverse().join(e)}:q;return function(t){var e=In.exec(t),r=e[1]||" ",a=e[2]||">",o=e[3]||"-",s=e[4]||"",l=e[5],c=+e[6],f=e[7],h=e[8],g=e[9],d=1,p="",m="",v=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===a)&&(l=r="0",a="="),g){case"n":f=!0,g="g";break;case"%":d=100,m="%",g="f";break;case"p":d=100,m="%",g="r";break;case"b":case"o":case"x":case"X":"#"===s&&(p="0"+g.toLowerCase());case"c":y=!1;case"d":v=!0,h=0;break;case"s":d=-1,g="r"}"$"===s&&(p=i[0],m=i[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=Ln.get(g)||B;var w=l&&f;return function(t){var e=m;if(v&&t%1)return"";var i=0>t||0===t&&0>1/t?(t=-t,"-"):"-"===o?"":o;if(0>d){var s=un.formatPrefix(t,h);t=s.scale(t),e=s.symbol+m}else t*=d;t=g(t,h);var _,b,M=t.lastIndexOf(".");if(0>M){var x=y?t.lastIndexOf("e"):-1;0>x?(_=t,b=""):(_=t.substring(0,x),b=t.substring(x))}else _=t.substring(0,M),b=n+t.substring(M+1);!l&&f&&(_=u(_,1/0));var N=p.length+_.length+b.length+(w?0:i.length),S=c>N?new Array(N=c-N+1).join(r):"";return w&&(_=u(S+_,S.length?c-b.length:1/0)),i+=p,t=_+b,("<"===a?i+t+S:">"===a?S+i+t:"^"===a?S.substring(0,N>>=1)+i+t+S.substring(N):i+(w?t:S+t))+e}}}function B(t){return t+""}function W(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Z(t,n,e){function r(n){var e=t(n),r=u(e,1);return r-n>n-e?e:r}function i(e){return n(e=t(new zn(e-1)),1),e}function u(t,e){return n(t=new zn(+t),e),t}function a(t,r,u){var a=i(t),o=[];if(u>1)for(;r>a;)e(a)%u||o.push(new Date(+a)),n(a,1);else for(;r>a;)o.push(new Date(+a)),n(a,1);return o}function o(t,n,e){try{zn=W;var r=new W;return r._=t,a(r,n,e)}finally{zn=Date}}t.floor=t,t.round=r,t.ceil=i,t.offset=u,t.range=a;var s=t.utc=X(t);return s.floor=s,s.round=X(r),s.ceil=X(i),s.offset=X(u),s.range=o,t}function X(t){return function(n,e){try{zn=W;var r=new W;return r._=n,t(r,e)._}finally{zn=Date}}}function J(t){function n(t){function n(n){for(var e,i,u,a=[],o=-1,s=0;++o<r;)37===t.charCodeAt(o)&&(a.push(t.slice(s,o)),null!=(i=jn[e=t.charAt(++o)])&&(e=t.charAt(++o)),(u=D[e])&&(e=u(n,null==i?"e"===e?" ":"0":i)),a.push(e),s=o+1);return a.push(t.slice(s,o)),a.join("")}var r=t.length;return n.parse=function(n){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,t,n,0);if(i!=n.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var u=null!=r.Z&&zn!==W,a=new(u?W:zn);return"j"in r?a.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(a.setFullYear(r.y,0,1),a.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(a.getDay()+5)%7:r.w+7*r.U-(a.getDay()+6)%7)):a.setFullYear(r.y,r.m,r.d),a.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),u?a._:a},n.toString=function(){return t},n}function e(t,n,e,r){for(var i,u,a,o=0,s=n.length,l=e.length;s>o;){if(r>=l)return-1;if(i=n.charCodeAt(o++),37===i){if(a=n.charAt(o++),u=C[a in jn?n.charAt(o++):a],!u||(r=u(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(t,n,e){M.lastIndex=0;var r=M.exec(n.slice(e));return r?(t.w=x.get(r[0].toLowerCase()),e+r[0].length):-1}function i(t,n,e){_.lastIndex=0;var r=_.exec(n.slice(e));return r?(t.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function u(t,n,e){k.lastIndex=0;var r=k.exec(n.slice(e));return r?(t.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function a(t,n,e){N.lastIndex=0;var r=N.exec(n.slice(e));return r?(t.m=S.get(r[0].toLowerCase()),e+r[0].length):-1}function o(t,n,r){return e(t,D.c.toString(),n,r)}function s(t,n,r){return e(t,D.x.toString(),n,r)}function l(t,n,r){return e(t,D.X.toString(),n,r)}function c(t,n,e){var r=w.get(n.slice(e,e+=2).toLowerCase());return null==r?-1:(t.p=r,e)}var f=t.dateTime,h=t.date,g=t.time,d=t.periods,p=t.days,m=t.shortDays,v=t.months,y=t.shortMonths;n.utc=function(t){function e(t){try{zn=W;var n=new zn;return n._=t,r(n)}finally{zn=Date}}var r=n(t);return e.parse=function(t){try{zn=W;var n=r.parse(t);return n&&n._}finally{zn=Date}},e.toString=r.toString,e},n.multi=n.utc.multi=pt;var w=un.map(),_=G(p),b=K(p),M=G(m),x=K(m),N=G(v),S=K(v),k=G(y),A=K(y);d.forEach(function(t,n){w.set(t.toLowerCase(),n)});var D={a:function(t){return m[t.getDay()]},A:function(t){return p[t.getDay()]},b:function(t){return y[t.getMonth()]},B:function(t){return v[t.getMonth()]},c:n(f),d:function(t,n){return V(t.getDate(),n,2)},e:function(t,n){return V(t.getDate(),n,2)},H:function(t,n){return V(t.getHours(),n,2)},I:function(t,n){return V(t.getHours()%12||12,n,2)},j:function(t,n){return V(1+Un.dayOfYear(t),n,3)},L:function(t,n){return V(t.getMilliseconds(),n,3)},m:function(t,n){return V(t.getMonth()+1,n,2)},M:function(t,n){return V(t.getMinutes(),n,2)},p:function(t){return d[+(t.getHours()>=12)]},S:function(t,n){return V(t.getSeconds(),n,2)},U:function(t,n){return V(Un.sundayOfYear(t),n,2)},w:function(t){return t.getDay()},W:function(t,n){return V(Un.mondayOfYear(t),n,2)},x:n(h),X:n(g),y:function(t,n){return V(t.getFullYear()%100,n,2)},Y:function(t,n){return V(t.getFullYear()%1e4,n,4)},Z:gt,"%":function(){return"%"}},C={a:r,A:i,b:u,B:a,c:o,d:ot,e:ot,H:lt,I:lt,j:st,L:ht,m:at,M:ct,p:c,S:ft,U:tt,w:Q,W:nt,x:s,X:l,y:rt,Y:et,Z:it,"%":dt};return n}function V(t,n,e){var r=0>t?"-":"",i=(r?-t:t)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(n)+i:i)}function G(t){return new RegExp("^(?:"+t.map(un.requote).join("|")+")","i")}function K(t){for(var n=new a,e=-1,r=t.length;++e<r;)n.set(t[e].toLowerCase(),e);return n}function Q(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function tt(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function nt(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function et(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function rt(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+2));return r?(t.y=ut(+r[0]),e+r[0].length):-1}function it(t,n,e){return/^[+-]\d{4}$/.test(n=n.slice(e,e+5))?(t.Z=-n,e+5):-1}function ut(t){return t+(t>68?1900:2e3)}function at(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function ot(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function st(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+3));return r?(t.j=+r[0],e+r[0].length):-1}function lt(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function ct(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function ft(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function ht(t,n,e){qn.lastIndex=0;var r=qn.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function gt(t){var n=t.getTimezoneOffset(),e=n>0?"-":"+",r=mn(n)/60|0,i=mn(n)%60;return e+V(r,"0",2)+V(i,"0",2)}function dt(t,n,e){Hn.lastIndex=0;var r=Hn.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function pt(t){for(var n=t.length,e=-1;++e<n;)t[e][0]=this(t[e][0]);return function(n){for(var e=0,r=t[e];!r[1](n);)r=t[++e];return r[0](n)}}function mt(t,n,e,r){var i=e(t[0],t[1]),u=r(n[0],n[1]);return function(t){return u(i(t))}}function vt(t,n){var e,r=0,i=t.length-1,u=t[r],a=t[i];return u>a&&(e=r,r=i,i=e,e=u,u=a,a=e),t[r]=n.floor(u),t[i]=n.ceil(a),t}function yt(t){return t?{floor:function(n){return Math.floor(n/t)*t},ceil:function(n){return Math.ceil(n/t)*t}}:$n}function wt(t,n){return n>t?-1:t>n?1:t>=n?0:NaN}function _t(t){return{left:function(n,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=n.length);i>r;){var u=r+i>>>1;t(n[u],e)<0?r=u+1:i=u}return r},right:function(n,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=n.length);i>r;){var u=r+i>>>1;t(n[u],e)>0?i=u:r=u+1}return r}}}function bt(t,n,e,r){var i=[],u=[],a=0,o=Math.min(t.length,n.length)-1;for(t[o]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<=o;)i.push(e(t[a-1],t[a])),u.push(r(n[a-1],n[a]));return function(n){var e=un.bisect(t,n,1,o)-1;return u[e](i[e](n))}}function Mt(t){var n=t[0],e=t[t.length-1];return e>n?[n,e]:[e,n]}function xt(t,n,e,r){function i(){var i=Math.min(t.length,n.length)>2?bt:mt,s=r?j:P;return a=i(t,n,s,e),o=i(n,t,s,U),u}function u(t){return a(t)}var a,o;return u.invert=function(t){return o(t)},u.domain=function(n){return arguments.length?(t=n.map(Number),i()):t},u.range=function(t){return arguments.length?(n=t,i()):n},u.rangeRound=function(t){return u.range(t).interpolate(z)},u.clamp=function(t){return arguments.length?(r=t,i()):r},u.interpolate=function(t){return arguments.length?(e=t,i()):e},u.ticks=function(n){return kt(t,n)},u.tickFormat=function(n,e){return At(t,n,e)},u.nice=function(n){return Nt(t,n),i()},u.copy=function(){return xt(t,n,e,r)},i()}function Nt(t,n){return vt(t,yt(St(t,n)[2]))}function St(t,n){null==n&&(n=10);var e=Mt(t),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/n)/Math.LN10)),u=n/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function kt(t,n){return un.range.apply(un,St(t,n))}function At(t,n,e){var r=St(t,n);if(e){var i=In.exec(e);if(i.shift(),"s"===i[8]){var u=un.formatPrefix(Math.max(mn(r[0]),mn(r[1])));return i[7]||(i[7]="."+Dt(u.scale(r[2]))),i[8]="f",e=un.format(i.join("")),function(t){return e(u.scale(t))+u.symbol}}i[7]||(i[7]="."+Ct(i[8],r)),e=i.join("")}else e=",."+Dt(r[2])+"f";return un.format(e)}function Dt(t){return-Math.floor(Math.log(t)/Math.LN10+.01)}function Ct(t,n){var e=Dt(n[2]);return t in Wn?Math.abs(e-Dt(Math.max(mn(n[0]),mn(n[1]))))+ +("e"!==t):e-2*("%"===t)}function Tt(t,n){function e(e){return u[((i.get(e)||("range"===n.t?i.set(e,t.push(e)):NaN))-1)%u.length]}function r(n,e){return un.range(t.length).map(function(t){return n+e*t})}var i,u,o;return e.domain=function(r){if(!arguments.length)return t;t=[],i=new a;for(var u,o=-1,s=r.length;++o<s;)i.has(u=r[o])||i.set(u,t.push(u));return e[n.t].apply(e,n.a)},e.range=function(t){return arguments.length?(u=t,o=0,n={t:"range",a:arguments},e):u},e.rangePoints=function(i,a){arguments.length<2&&(a=0);var s=i[0],l=i[1],c=t.length<2?(s=(s+l)/2,0):(l-s)/(t.length-1+a);return u=r(s+c*a/2,c),o=0,n={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,a){arguments.length<2&&(a=0);var s=i[0],l=i[1],c=t.length<2?(s=l=Math.round((s+l)/2),0):(l-s)/(t.length-1+a)|0;return u=r(s+Math.round(c*a/2+(l-s-(t.length-1+a)*c)/2),c),o=0,n={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,a,s){arguments.length<2&&(a=0),arguments.length<3&&(s=a);var l=i[1]<i[0],c=i[l-0],f=i[1-l],h=(f-c)/(t.length-a+2*s);return u=r(c+h*s,h),l&&u.reverse(),o=h*(1-a),n={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,a,s){arguments.length<2&&(a=0),arguments.length<3&&(s=a);var l=i[1]<i[0],c=i[l-0],f=i[1-l],h=Math.floor((f-c)/(t.length-a+2*s));return u=r(c+Math.round((f-c-(t.length-a)*h)/2),h),l&&u.reverse(),o=Math.round(h*(1-a)),n={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Mt(n.a[0])},e.copy=function(){return Tt(t,n)},e.domain(t)}function Ot(t,n){if(n in t)return n;n=n.charAt(0).toUpperCase()+n.slice(1);for(var e=0,r=Xn.length;r>e;++e){var i=Xn[e]+n;if(i in t)return i}}function Et(t){return Zn(t,Kn),t}function Ft(t){return"function"==typeof t?t:function(){return Jn(t,this)}}function It(t){return"function"==typeof t?t:function(){return Vn(t,this)}}function Lt(t,n){function e(){this.removeAttribute(t)}function r(){this.removeAttributeNS(t.space,t.local)}function i(){this.setAttribute(t,n)}function u(){this.setAttributeNS(t.space,t.local,n)}function a(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}function o(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}return t=un.ns.qualify(t),null==n?t.local?r:e:"function"==typeof n?t.local?o:a:t.local?u:i}function Yt(t){return t.trim().replace(/\s+/g," ")}function Ut(t){return new RegExp("(?:^|\\s+)"+un.requote(t)+"(?:\\s+|$)","g")}function zt(t){return(t+"").trim().split(/^|\s+/)}function Pt(t,n){function e(){for(var e=-1;++e<i;)t[e](this,n)}function r(){for(var e=-1,r=n.apply(this,arguments);++e<i;)t[e](this,r)}t=zt(t).map(jt);var i=t.length;return"function"==typeof n?r:e}function jt(t){var n=Ut(t);return function(e,r){if(i=e.classList)return r?i.add(t):i.remove(t);var i=e.getAttribute("class")||"";r?(n.lastIndex=0,n.test(i)||e.setAttribute("class",Yt(i+" "+t))):e.setAttribute("class",Yt(i.replace(n," ")))}}function qt(t,n,e){function r(){this.style.removeProperty(t)}function i(){this.style.setProperty(t,n,e)}function u(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}return null==n?r:"function"==typeof n?u:i}function Ht(t,n){function e(){delete this[t]}function r(){this[t]=n}function i(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}return null==n?e:"function"==typeof n?i:r}function Rt(t){function n(){var n=this.ownerDocument,e=this.namespaceURI;return e?n.createElementNS(e,t):n.createElement(t)}function e(){return this.ownerDocument.createElementNS(t.space,t.local)}return"function"==typeof t?t:(t=un.ns.qualify(t)).local?e:n}function $t(){var t=this.parentNode;t&&t.removeChild(this)}function Bt(){this._=Object.create(null)}function Wt(t){return{__data__:t}}function Zt(t){return function(){return Gn(this,t)}}function Xt(t){return arguments.length||(t=wt),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function Jt(){}function Vt(){}function Gt(t){function n(){for(var n,r=e,i=-1,u=r.length;++i<u;)(n=r[i].on)&&n.apply(this,arguments);return t}var e=[],r=new a;return n.on=function(n,i){var u,a=r.get(n);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,u=e.indexOf(a)).concat(e.slice(u+1)),r.remove(n)),i&&e.push(r.set(n,{on:i})),t)},n}function Kt(t,n,e){function r(){var n=this[a];n&&(this.removeEventListener(t,n,n.$),delete this[a])}function i(){var i=s(n,on(arguments));r.call(this),this.addEventListener(t,this[a]=i,i.$=e),i._=n}function u(){var n,e=new RegExp("^__on([^.]+)"+un.requote(t)+"$");for(var r in this)if(n=r.match(e)){var i=this[r];this.removeEventListener(n[1],i,i.$),delete this[r]}}var a="__on"+t,o=t.indexOf("."),s=Qt;o>0&&(t=t.slice(0,o));var l=te.get(t);return l&&(t=l,s=tn),o?n?i:r:n?Jt:u}function Qt(t,n){return function(e){var r=un.event;un.event=e,n[0]=this.__data__;try{t.apply(this,n)}finally{un.event=r}}}function tn(t,n){var e=Qt(t,n);return function(t){var n=this,r=t.relatedTarget;r&&(r===n||8&r.compareDocumentPosition(n))||e.call(n,t)}}function nn(t,n){for(var e=0,r=t.length;r>e;e++)for(var i,u=t[e],a=0,o=u.length;o>a;a++)(i=u[a])&&n(i,a,e);return t}function en(t){return Zn(t,ne),t}function rn(t){var n,e;return function(r,i,u){var a,o=t[u].update,s=o.length;for(u!=e&&(e=u,n=0),i>=n&&(n=i+1);!(a=o[n])&&++n<s;);return a}}var un={version:"3.5.5"},an=[].slice,on=function(t){return an.call(t)},sn=this.document;if(sn)try{on(sn.documentElement.childNodes)[0].nodeType}catch(ln){on=function(t){for(var n=t.length,e=new Array(n);n--;)e[n]=t[n];return e}}if(Date.now||(Date.now=function(){return+new Date}),sn)try{sn.createElement("DIV").style.setProperty("opacity",0,"")}catch(cn){var fn=this.Element.prototype,hn=fn.setAttribute,gn=fn.setAttributeNS,dn=this.CSSStyleDeclaration.prototype,pn=dn.setProperty;fn.setAttribute=function(t,n){hn.call(this,t,n+"")},fn.setAttributeNS=function(t,n,e){gn.call(this,t,n,e+"")},dn.setProperty=function(t,n,e){pn.call(this,t,n+"",e)}}var mn=Math.abs;un.range=function(t,n,r){if(arguments.length<3&&(r=1,arguments.length<2&&(n=t,t=0)),(n-t)/r===1/0)throw new Error("infinite range");var i,u=[],a=e(mn(r)),o=-1;if(t*=a,n*=a,r*=a,0>r)for(;(i=t+r*++o)>n;)u.push(i/a);else for(;(i=t+r*++o)<n;)u.push(i/a);return u},un.rebind=function(t,n){for(var e,i=1,u=arguments.length;++i<u;)t[e=arguments[i]]=r(t,n,n[e]);return t},un.color=i,i.prototype.toString=function(){return this.rgb()+""},un.map=function(t,n){var e=new a;if(t instanceof a)t.forEach(function(t,n){e.set(t,n)});else if(Array.isArray(t)){var r,i=-1,u=t.length;if(1===arguments.length)for(;++i<u;)e.set(i,t[i]);else for(;++i<u;)e.set(n.call(t,r=t[i],i),r)}else for(var o in t)e.set(o,t[o]);return e};var vn="__proto__",yn="\x00";u(a,{has:l,get:function(t){return this._[o(t)]},set:function(t,n){return this._[o(t)]=n},remove:c,keys:f,values:function(){var t=[];for(var n in this._)t.push(this._[n]);return t},entries:function(){var t=[];for(var n in this._)t.push({key:s(n),value:this._[n]});return t},size:h,empty:g,forEach:function(t){for(var n in this._)t.call(this,s(n),this._[n])}}),un.hsl=d;var wn=d.prototype=new i;wn.brighter=function(t){return t=Math.pow(.7,arguments.length?t:1),new d(this.h,this.s,this.l/t)},wn.darker=function(t){return t=Math.pow(.7,arguments.length?t:1),new d(this.h,this.s,t*this.l)},wn.rgb=function(){return p(this.h,this.s,this.l)};var _n=Math.PI,bn=_n/180,Mn=180/_n;un.hcl=m;var xn=m.prototype=new i;xn.brighter=function(t){return new m(this.h,this.c,Math.min(100,this.l+Nn*(arguments.length?t:1)))},xn.darker=function(t){return new m(this.h,this.c,Math.max(0,this.l-Nn*(arguments.length?t:1)))},xn.rgb=function(){return v(this.h,this.c,this.l).rgb()},un.lab=y;var Nn=18,Sn=.95047,kn=1,An=1.08883,Dn=y.prototype=new i;Dn.brighter=function(t){return new y(Math.min(100,this.l+Nn*(arguments.length?t:1)),this.a,this.b)},Dn.darker=function(t){return new y(Math.max(0,this.l-Nn*(arguments.length?t:1)),this.a,this.b)},Dn.rgb=function(){return w(this.l,this.a,this.b)},un.rgb=N;var Cn=N.prototype=new i;Cn.brighter=function(t){t=Math.pow(.7,arguments.length?t:1);var n=this.r,e=this.g,r=this.b,i=30;return n||e||r?(n&&i>n&&(n=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new N(Math.min(255,n/t),Math.min(255,e/t),Math.min(255,r/t))):new N(i,i,i)},Cn.darker=function(t){return t=Math.pow(.7,arguments.length?t:1),new N(t*this.r,t*this.g,t*this.b)},Cn.hsl=function(){return D(this.r,this.g,this.b)},Cn.toString=function(){return"#"+k(this.r)+k(this.g)+k(this.b)};var Tn=un.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Tn.forEach(function(t,n){Tn.set(t,S(n))}),un.interpolateRgb=E,un.interpolateObject=F,un.interpolateArray=I,un.interpolateNumber=L,un.interpolateString=Y;var On=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,En=new RegExp(On.source,"g");un.interpolate=U,un.interpolators=[function(t,n){var e=typeof n;return("string"===e?Tn.has(n)||/^(#|rgb\(|hsl\()/.test(n)?E:Y:n instanceof i?E:Array.isArray(n)?I:"object"===e&&isNaN(n)?F:L)(t,n)}],un.interpolateRound=z,un.round=function(t,n){return n?Math.round(t*(n=Math.pow(10,n)))/n:Math.round(t)};var Fn=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(R);un.formatPrefix=function(t,n){var e=0;return t&&(0>t&&(t*=-1),n&&(t=un.round(t,H(t,n))),e=1+Math.floor(1e-12+Math.log(t)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),Fn[8+e/3]};var In=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,Ln=un.map({b:function(t){return t.toString(2)},c:function(t){return String.fromCharCode(t)},o:function(t){return t.toString(8)},x:function(t){return t.toString(16)},X:function(t){return t.toString(16).toUpperCase()},g:function(t,n){return t.toPrecision(n)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},r:function(t,n){return(t=un.round(t,H(t,n))).toFixed(Math.max(0,Math.min(20,H(t*(1+1e-15),n))))}});un.requote=function(t){return t.replace(Yn,"\\$&")};var Yn=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,Un=un.time={},zn=Date;W.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){Pn.setUTCDate.apply(this._,arguments)},setDay:function(){Pn.setUTCDay.apply(this._,arguments)},setFullYear:function(){Pn.setUTCFullYear.apply(this._,arguments)},setHours:function(){Pn.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){Pn.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){Pn.setUTCMinutes.apply(this._,arguments)},setMonth:function(){Pn.setUTCMonth.apply(this._,arguments)},setSeconds:function(){Pn.setUTCSeconds.apply(this._,arguments)},setTime:function(){Pn.setTime.apply(this._,arguments)}};var Pn=Date.prototype;Un.year=Z(function(t){return t=Un.day(t),t.setMonth(0,1),t},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t){return t.getFullYear()}),Un.years=Un.year.range,Un.years.utc=Un.year.utc.range,Un.day=Z(function(t){var n=new zn(2e3,0);return n.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n},function(t,n){t.setDate(t.getDate()+n)},function(t){return t.getDate()-1}),Un.days=Un.day.range,Un.days.utc=Un.day.utc.range,Un.dayOfYear=function(t){var n=Un.year(t);return Math.floor((t-n-6e4*(t.getTimezoneOffset()-n.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(t,n){n=7-n;var e=Un[t]=Z(function(t){return(t=Un.day(t)).setDate(t.getDate()-(t.getDay()+n)%7),t},function(t,n){t.setDate(t.getDate()+7*Math.floor(n))},function(t){var e=Un.year(t).getDay();return Math.floor((Un.dayOfYear(t)+(e+n)%7)/7)-(e!==n)});Un[t+"s"]=e.range,Un[t+"s"].utc=e.utc.range,Un[t+"OfYear"]=function(t){var e=Un.year(t).getDay();return Math.floor((Un.dayOfYear(t)+(e+n)%7)/7)}}),Un.week=Un.sunday,Un.weeks=Un.sunday.range,Un.weeks.utc=Un.sunday.utc.range,Un.weekOfYear=Un.sundayOfYear;var jn={"-":"",_:" ",0:"0"},qn=/^\s*\d+/,Hn=/^%/;un.locale=function(t){return{numberFormat:$(t),timeFormat:J(t)}};var Rn=un.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});un.format=Rn.numberFormat;var $n={floor:q,ceil:q};un.ascending=wt;var Bn=_t(wt);un.bisectLeft=Bn.left,un.bisect=un.bisectRight=Bn.right,un.bisector=function(t){return _t(1===t.length?function(n,e){return wt(t(n),e)}:t)},un.scale={},un.scale.linear=function(){return xt([0,1],[0,1],U,!1)};var Wn={s:1,g:1,p:1,r:1,e:1};un.scale.ordinal=function(){return Tt([],{t:"range",a:[[]]})};var Zn={}.__proto__?function(t,n){t.__proto__=n}:function(t,n){for(var e in n)t[e]=n[e]},Xn=["webkit","ms","moz","Moz","o","O"],Jn=function(t,n){return n.querySelector(t)},Vn=function(t,n){return n.querySelectorAll(t)},Gn=function(t,n){var e=t.matches||t[Ot(t,"matchesSelector")];return(Gn=function(t,n){return e.call(t,n)})(t,n)};"function"==typeof Sizzle&&(Jn=function(t,n){return Sizzle(t,n)[0]||null},Vn=Sizzle,Gn=Sizzle.matchesSelector),un.selection=function(){return un.select(sn.documentElement)};var Kn=un.selection.prototype=[];Kn.select=function(t){var n,e,r,i,u=[];t=Ft(t);for(var a=-1,o=this.length;++a<o;){u.push(n=[]),n.parentNode=(r=this[a]).parentNode;for(var s=-1,l=r.length;++s<l;)(i=r[s])?(n.push(e=t.call(i,i.__data__,s,a)),e&&"__data__"in i&&(e.__data__=i.__data__)):n.push(null)}return Et(u)},Kn.selectAll=function(t){var n,e,r=[];t=It(t);for(var i=-1,u=this.length;++i<u;)for(var a=this[i],o=-1,s=a.length;++o<s;)(e=a[o])&&(r.push(n=on(t.call(e,e.__data__,o,i))),n.parentNode=e);
return Et(r)};var Qn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};un.ns={prefix:Qn,qualify:function(t){var n=t.indexOf(":"),e=t;return n>=0&&(e=t.slice(0,n),t=t.slice(n+1)),Qn.hasOwnProperty(e)?{space:Qn[e],local:t}:t}},Kn.attr=function(t,n){if(arguments.length<2){if("string"==typeof t){var e=this.node();return t=un.ns.qualify(t),t.local?e.getAttributeNS(t.space,t.local):e.getAttribute(t)}for(n in t)this.each(Lt(n,t[n]));return this}return this.each(Lt(t,n))},Kn.classed=function(t,n){if(arguments.length<2){if("string"==typeof t){var e=this.node(),r=(t=zt(t)).length,i=-1;if(n=e.classList){for(;++i<r;)if(!n.contains(t[i]))return!1}else for(n=e.getAttribute("class");++i<r;)if(!Ut(t[i]).test(n))return!1;return!0}for(n in t)this.each(Pt(n,t[n]));return this}return this.each(Pt(t,n))},Kn.style=function(t,e,r){var i=arguments.length;if(3>i){if("string"!=typeof t){2>i&&(e="");for(r in t)this.each(qt(r,t[r],e));return this}if(2>i){var u=this.node();return n(u).getComputedStyle(u,null).getPropertyValue(t)}r=""}return this.each(qt(t,e,r))},Kn.property=function(t,n){if(arguments.length<2){if("string"==typeof t)return this.node()[t];for(n in t)this.each(Ht(n,t[n]));return this}return this.each(Ht(t,n))},Kn.text=function(t){return arguments.length?this.each("function"==typeof t?function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}:null==t?function(){this.textContent=""}:function(){this.textContent=t}):this.node().textContent},Kn.html=function(t){return arguments.length?this.each("function"==typeof t?function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}:null==t?function(){this.innerHTML=""}:function(){this.innerHTML=t}):this.node().innerHTML},Kn.append=function(t){return t=Rt(t),this.select(function(){return this.appendChild(t.apply(this,arguments))})},Kn.insert=function(t,n){return t=Rt(t),n=Ft(n),this.select(function(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null)})},Kn.remove=function(){return this.each($t)},un.set=function(t){var n=new Bt;if(t)for(var e=0,r=t.length;r>e;++e)n.add(t[e]);return n},u(Bt,{has:l,add:function(t){return this._[o(t+="")]=!0,t},remove:c,values:f,size:h,empty:g,forEach:function(t){for(var n in this._)t.call(this,s(n))}}),Kn.data=function(t,n){function e(t,e){var r,i,u,o=t.length,f=e.length,h=Math.min(o,f),g=new Array(f),d=new Array(f),p=new Array(o);if(n){var m,v=new a,y=new Array(o);for(r=-1;++r<o;)v.has(m=n.call(i=t[r],i.__data__,r))?p[r]=i:v.set(m,i),y[r]=m;for(r=-1;++r<f;)(i=v.get(m=n.call(e,u=e[r],r)))?i!==!0&&(g[r]=i,i.__data__=u):d[r]=Wt(u),v.set(m,!0);for(r=-1;++r<o;)v.get(y[r])!==!0&&(p[r]=t[r])}else{for(r=-1;++r<h;)i=t[r],u=e[r],i?(i.__data__=u,g[r]=i):d[r]=Wt(u);for(;f>r;++r)d[r]=Wt(e[r]);for(;o>r;++r)p[r]=t[r]}d.update=g,d.parentNode=g.parentNode=p.parentNode=t.parentNode,s.push(d),l.push(g),c.push(p)}var r,i,u=-1,o=this.length;if(!arguments.length){for(t=new Array(o=(r=this[0]).length);++u<o;)(i=r[u])&&(t[u]=i.__data__);return t}var s=en([]),l=Et([]),c=Et([]);if("function"==typeof t)for(;++u<o;)e(r=this[u],t.call(r,r.parentNode.__data__,u));else for(;++u<o;)e(r=this[u],t);return l.enter=function(){return s},l.exit=function(){return c},l},Kn.datum=function(t){return arguments.length?this.property("__data__",t):this.property("__data__")},Kn.filter=function(t){var n,e,r,i=[];"function"!=typeof t&&(t=Zt(t));for(var u=0,a=this.length;a>u;u++){i.push(n=[]),n.parentNode=(e=this[u]).parentNode;for(var o=0,s=e.length;s>o;o++)(r=e[o])&&t.call(r,r.__data__,o,u)&&n.push(r)}return Et(i)},Kn.order=function(){for(var t=-1,n=this.length;++t<n;)for(var e,r=this[t],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Kn.sort=function(t){t=Xt.apply(this,arguments);for(var n=-1,e=this.length;++n<e;)this[n].sort(t);return this.order()},un.dispatch=function(){for(var t=new Vt,n=-1,e=arguments.length;++n<e;)t[arguments[n]]=Gt(t);return t},Vt.prototype.on=function(t,n){var e=t.indexOf("."),r="";if(e>=0&&(r=t.slice(e+1),t=t.slice(0,e)),t)return arguments.length<2?this[t].on(r):this[t].on(r,n);if(2===arguments.length){if(null==n)for(t in this)this.hasOwnProperty(t)&&this[t].on(r,null);return this}},un.event=null,Kn.on=function(t,n,e){var r=arguments.length;if(3>r){if("string"!=typeof t){2>r&&(n=!1);for(e in t)this.each(Kt(e,t[e],n));return this}if(2>r)return(r=this.node()["__on"+t])&&r._;e=!1}return this.each(Kt(t,n,e))};var te=un.map({mouseenter:"mouseover",mouseleave:"mouseout"});sn&&te.forEach(function(t){"on"+t in sn&&te.remove(t)}),Kn.each=function(t){return nn(this,function(n,e,r){t.call(n,n.__data__,e,r)})},Kn.call=function(t){var n=on(arguments);return t.apply(n[0]=this,n),this},Kn.empty=function(){return!this.node()},Kn.node=function(){for(var t=0,n=this.length;n>t;t++)for(var e=this[t],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Kn.size=function(){var t=0;return nn(this,function(){++t}),t};var ne=[];un.selection.enter=en,un.selection.enter.prototype=ne,ne.append=Kn.append,ne.empty=Kn.empty,ne.node=Kn.node,ne.call=Kn.call,ne.size=Kn.size,ne.select=function(t){for(var n,e,r,i,u,a=[],o=-1,s=this.length;++o<s;){r=(i=this[o]).update,a.push(n=[]),n.parentNode=i.parentNode;for(var l=-1,c=i.length;++l<c;)(u=i[l])?(n.push(r[l]=e=t.call(i.parentNode,u.__data__,l,o)),e.__data__=u.__data__):n.push(null)}return Et(a)},ne.insert=function(t,n){return arguments.length<2&&(n=rn(this)),Kn.insert.call(this,t,n)},un.select=function(n){var e;return"string"==typeof n?(e=[Jn(n,sn)],e.parentNode=sn.documentElement):(e=[n],e.parentNode=t(n)),Et([e])},un.selectAll=function(t){var n;return"string"==typeof t?(n=on(Vn(t,sn)),n.parentNode=sn.documentElement):(n=t,n.parentNode=null),Et([n])},"function"==typeof define&&define.amd?define(un):"object"==typeof module&&module.exports&&(module.exports=un),this.d3=un}();