(()=>{var Pp=0,Vh=1,Ip=2;var Rr=1,Lp=2,wa=3,Ki=0,Dn=1,Lt=2,Yi=0,Ea=1,Ta=2,Wh=3,qh=4,Dp=5;var Cr=100,Fp=101,Np=102,Up=103,Op=104,Bp=200,kp=201,zp=202,Hp=203,Xh=204,jh=205,Gp=206,Vp=207,Wp=208,qp=209,Xp=210,jp=211,Kp=212,Yp=213,Jp=214,tl=0,nl=1,il=2,ha=3,sl=4,rl=5,al=6,ol=7,Nl=0,Zp=1,$p=2,Oi=0,Kh=1,Yh=2,Jh=3,Zh=4,$h=5,Qh=6,ef=7,Fh="attached",Qp="detached",tf=300,js=301,Pr=302,Ul=303,Ol=304,Wo=306,ci=1e3,xi=1001,fa=1002,gn=1003,Bl=1004;var Ir=1005;var Yt=1006,Aa=1007;var ui=1008;var ti=1009,nf=1010,sf=1011,Ra=1012,kl=1013,Bi=1014,hi=1015,Fn=1016,zl=1017,Hl=1018,Ca=1020,rf=35902,af=35899,of=1021,cf=1022,Hn=1023,Wi=1026,Ks=1027,Pa=1028,Gl=1029,Ys=1030,Vl=1031;var Wl=1033,qo=33776,Xo=33777,jo=33778,Ko=33779,ql=35840,Xl=35841,jl=35842,Kl=35843,Yl=36196,Jl=37492,Zl=37496,$l=37488,Ql=37489,Yo=37490,eu=37491,tu=37808,nu=37809,iu=37810,su=37811,ru=37812,au=37813,ou=37814,cu=37815,lu=37816,uu=37817,hu=37818,fu=37819,du=37820,pu=37821,mu=36492,gu=36494,xu=36495,bu=36283,vu=36284,Jo=36285,_u=36286,em=2200,tm=2201,nm=2202,gr=2300,xr=2301,$c=2302,Nh=2303,dr=2400,pr=2401,vo=2402,yu=2500,im=2501,lf=0,Zo=1,Ia=2,sm=3200,La=3201;var $o=0,rm=1,ki="",qt="srgb",Kn="srgb-linear",_o="linear",Xt="srgb";var Qc=7680;var am=519,om=512,cm=513,lm=514,Mu=515,um=516,hm=517,Su=518,fm=519,uf=35044;var hf="300 es",Li=2e3,da=2001;function ig(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dm(){let s=pa("canvas");return s.style.display="block",s}var Gd={},ma=null;function yo(...s){let e="THREE."+s.shift();ma?ma("log",e,...s):console.log(e,...s)}function pm(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function tt(...s){s=pm(s);let e="THREE."+s.shift();if(ma)ma("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ft(...s){s=pm(s);let e="THREE."+s.shift();if(ma)ma("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function mr(...s){let e=s.join(" ");e in Gd||(Gd[e]=!0,tt(...s))}function mm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gm={[tl]:nl,[il]:al,[sl]:ol,[ha]:rl,[nl]:tl,[al]:il,[ol]:sl,[rl]:ha},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=1234567,mo=Math.PI/180,br=180/Math.PI;function Di(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function ff(s,e){return(s%e+e)%e}function rg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ag(s,e,t){return s!==e?(t-s)/(e-s):0}function go(s,e,t){return(1-t)*s+t*e}function og(s,e,t,n){return go(s,e,1-Math.exp(-t*n))}function cg(s,e=1){return e-Math.abs(ff(s,e*2)-e)}function lg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ug(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function hg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fg(s,e){return s+Math.random()*(e-s)}function dg(s){return s*(.5-Math.random())}function pg(s){s!==void 0&&(Vd=s);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mg(s){return s*mo}function gg(s){return s*br}function xg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function bg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _g(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*f,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*f,o*l);break;case"ZXZ":s.set(c*f,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*m,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*m,o*l);break;case"ZYZ":s.set(c*m,c*d,o*u,o*l);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var df={DEG2RAD:mo,RAD2DEG:br,generateUUID:Di,clamp:St,euclideanModulo:ff,mapLinear:rg,inverseLerp:ag,lerp:go,damp:og,pingpong:cg,smoothstep:lg,smootherstep:ug,randInt:hg,randFloat:fg,randFloatSpread:dg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:xg,ceilPowerOfTwo:bg,floorPowerOfTwo:vg,setQuaternionFromProperEuler:_g,normalize:Kt,denormalize:Ii},vf=class vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vf.prototype.isVector2=!0;var ve=vf,zt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(f!==x||c!==h||l!==d||u!==m){let g=c*h+l*d+u*m+f*x;g<0&&(h=-h,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+x*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+x*o;let _=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=_,l*=_,u*=_,f*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[a],h=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*f+c*d-l*h,e[t+1]=c*m+u*h+l*f-o*d,e[t+2]=l*m+u*d+o*h-c*f,e[t+3]=u*m-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),f=o(r/2),h=c(n/2),d=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_f=class _f{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=i+c*f+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_f.prototype.isVector3=!0;var I=_f,ah=new I,Wd=new zt,yf=class yf{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],_=i[1],M=i[4],y=i[7],S=i[2],b=i[5],w=i[8];return r[0]=a*x+o*_+c*S,r[3]=a*g+o*M+c*b,r[6]=a*p+o*y+c*w,r[1]=l*x+u*_+f*S,r[4]=l*g+u*M+f*b,r[7]=l*p+u*y+f*w,r[2]=h*x+d*_+m*S,r[5]=h*g+d*M+m*b,r[8]=h*p+d*y+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,m=t*f+n*h+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(i*l-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=h*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oh.makeScale(e,t)),this}rotate(e){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yf.prototype.isMatrix3=!0;var gt=yf,oh=new gt,qd=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yg(){let s={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Xt&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xt&&(i.r=ua(i.r),i.g=ua(i.g),i.b=ua(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?_o:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Kn]:{primaries:e,whitePoint:n,transfer:_o,toXYZ:qd,fromXYZ:Xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Xt,toXYZ:qd,fromXYZ:Xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),s}var Ct=yg();function fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ua(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xr,cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=pa("canvas")),Xr.width=e.width,Xr.height=e.height;let i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fs(t[n]/255)*255):t[n]=fs(t[n]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mg=0,ga=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ch(i[a].image)):r.push(ch(i[a]))}else r=ch(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ch(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var Sg=0,lh=new I,En=class s extends Fi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=xi,i=xi,r=Yt,a=ui,o=Hn,c=ti,l=s.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Di(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=tf;En.DEFAULT_ANISOTROPY=1;var Mf=class Mf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,y=(d+1)/2,S=(p+1)/2,b=(u+h)/4,w=(f+x)/4,v=(m+g)/4;return M>y&&M>S?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=b/n,r=w/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=v/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=w/r,i=v/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mf.prototype.isVector4=!0;var wt=Mf,ll=class extends Fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new En(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ga(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mo=class extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fl=class Fl{constructor(e,t,n,i,r,a,o,c,l,u,f,h,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,f,h,d,m,x,g)}set(e,t,n,i,r,a,o,c,l,u,f,h,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/jr.setFromMatrixColumn(e,0).length(),r=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,d=a*f,m=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,d=c*f,m=l*u,x=l*f;t[0]=h+x*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,d=c*f,m=l*u,x=l*f;t[0]=h-x*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,d=a*f,m=o*u,x=o*f;t[0]=c*u,t[4]=m*l-d,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,d=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=x-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*f+m,t[10]=h-x*f}else if(e.order==="XZY"){let h=a*c,d=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wg,e,Eg)}lookAt(e,t,n){let i=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ns.crossVectors(n,ri),Ns.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ns.crossVectors(n,ri)),Ns.normalize(),wc.crossVectors(ri,Ns),i[0]=Ns.x,i[4]=wc.x,i[8]=ri.x,i[1]=Ns.y,i[5]=wc.y,i[9]=ri.y,i[2]=Ns.z,i[6]=wc.z,i[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],M=n[7],y=n[11],S=n[15],b=i[0],w=i[4],v=i[8],E=i[12],A=i[1],C=i[5],L=i[9],U=i[13],D=i[2],F=i[6],B=i[10],k=i[14],J=i[3],X=i[7],Y=i[11],Q=i[15];return r[0]=a*b+o*A+c*D+l*J,r[4]=a*w+o*C+c*F+l*X,r[8]=a*v+o*L+c*B+l*Y,r[12]=a*E+o*U+c*k+l*Q,r[1]=u*b+f*A+h*D+d*J,r[5]=u*w+f*C+h*F+d*X,r[9]=u*v+f*L+h*B+d*Y,r[13]=u*E+f*U+h*k+d*Q,r[2]=m*b+x*A+g*D+p*J,r[6]=m*w+x*C+g*F+p*X,r[10]=m*v+x*L+g*B+p*Y,r[14]=m*E+x*U+g*k+p*Q,r[3]=_*b+M*A+y*D+S*J,r[7]=_*w+M*C+y*F+S*X,r[11]=_*v+M*L+y*B+S*Y,r[15]=_*E+M*U+y*k+S*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],_=c*d-l*h,M=o*d-l*f,y=o*h-c*f,S=a*d-l*u,b=a*h-c*u,w=a*f-o*u;return t*(x*_-g*M+p*y)-n*(m*_-g*S+p*b)+i*(m*M-x*S+p*w)-r*(m*y-x*b+g*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=t*o-n*a,M=t*c-i*a,y=t*l-r*a,S=n*c-i*o,b=n*l-r*o,w=i*l-r*c,v=u*x-f*m,E=u*g-h*m,A=u*p-d*m,C=f*g-h*x,L=f*p-d*x,U=h*p-d*g,D=_*U-M*L+y*C+S*A-b*E+w*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return e[0]=(o*U-c*L+l*C)*F,e[1]=(i*L-n*U-r*C)*F,e[2]=(x*w-g*b+p*S)*F,e[3]=(h*b-f*w-d*S)*F,e[4]=(c*A-a*U-l*E)*F,e[5]=(t*U-i*A+r*E)*F,e[6]=(g*y-m*w-p*M)*F,e[7]=(u*w-h*y+d*M)*F,e[8]=(a*L-o*A+l*v)*F,e[9]=(n*A-t*L-r*v)*F,e[10]=(m*b-x*y+p*_)*F,e[11]=(f*y-u*b-d*_)*F,e[12]=(o*E-a*C-c*v)*F,e[13]=(t*C-n*E+i*v)*F,e[14]=(x*M-m*S-g*_)*F,e[15]=(u*S-f*M+h*_)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,m=r*f,x=a*u,g=a*f,p=o*f,_=c*l,M=c*u,y=c*f,S=n.x,b=n.y,w=n.z;return i[0]=(1-(x+p))*S,i[1]=(d+y)*S,i[2]=(m-M)*S,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(h+p))*b,i[6]=(g+_)*b,i[7]=0,i[8]=(m+M)*w,i[9]=(g-_)*w,i[10]=(1-(h+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=jr.set(i[0],i[1],i[2]).length(),o=jr.set(i[4],i[5],i[6]).length(),c=jr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Ri.copy(this);let l=1/a,u=1/o,f=1/c;return Ri.elements[0]*=l,Ri.elements[1]*=l,Ri.elements[2]*=l,Ri.elements[4]*=u,Ri.elements[5]*=u,Ri.elements[6]*=u,Ri.elements[8]*=f,Ri.elements[9]*=f,Ri.elements[10]*=f,t.setFromRotationMatrix(Ri),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=Li,c=!1){let l=this.elements,u=2*r/(t-e),f=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===Li)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===da)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Li,c=!1){let l=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===Li)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===da)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fl.prototype.isMatrix4=!0;var qe=Fl,jr=new I,Ri=new qe,wg=new I(0,0,0),Eg=new I(1,1,1),Ns=new I,wc=new I,ri=new I,jd=new qe,Kd=new zt,Ln=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tg=0,Yd=new I,Kr=new zt,ss=new qe,Ec=new I,io=new I,Ag=new I,Rg=new zt,Jd=new I(1,0,0),Zd=new I(0,1,0),$d=new I(0,0,1),Qd={type:"added"},Cg={type:"removed"},Yr={type:"childadded",child:null},uh={type:"childremoved",child:null},on=class s extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Ln,n=new zt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new gt}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,t){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ec.copy(e):Ec.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(io,Ec,this.up):ss.lookAt(Ec,io,this.up),this.quaternion.setFromRotationMatrix(ss),i&&(ss.extractRotation(i.matrixWorld),Kr.setFromRotationMatrix(ss),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qd),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cg),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qd),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,Ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,Rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new I(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function hh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=ff(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hh(a,r,e+1/3),this.g=hh(a,r,e),this.b=hh(a,r,e-1/3)}return Ct.colorSpaceToWorking(this,i),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=xm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ct.workingToColorSpace(Bn.copy(this),e),Math.round(St(Bn.r*255,0,255))*65536+Math.round(St(Bn.g*255,0,255))*256+Math.round(St(Bn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,i=Bn.g,r=Bn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=qt){Ct.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,i=Bn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+t,Us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Us),e.getHSL(Tc);let n=go(Us.h,Tc.h,t),i=go(Us.s,Tc.s,t),r=go(Us.l,Tc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new Oe;Oe.NAMES=xm;var ds=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ci=new I,rs=new I,fh=new I,as=new I,Jr=new I,Zr=new I,ep=new I,dh=new I,ph=new I,mh=new I,gh=new wt,xh=new wt,bh=new wt,us=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ci.subVectors(e,t),i.cross(Ci);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ci.subVectors(i,t),rs.subVectors(n,t),fh.subVectors(e,t);let a=Ci.dot(Ci),o=Ci.dot(rs),c=Ci.dot(fh),l=rs.dot(rs),u=rs.dot(fh),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-o*u)*h,m=(a*u-o*c)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,as)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,as.x),c.addScaledVector(a,as.y),c.addScaledVector(o,as.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return gh.setScalar(0),xh.setScalar(0),bh.setScalar(0),gh.fromBufferAttribute(e,t),xh.fromBufferAttribute(e,n),bh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(gh,r.x),a.addScaledVector(xh,r.y),a.addScaledVector(bh,r.z),a}static isFrontFacing(e,t,n,i){return Ci.subVectors(n,t),rs.subVectors(e,t),Ci.cross(rs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),Ci.cross(rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Jr.subVectors(i,n),Zr.subVectors(r,n),dh.subVectors(e,n);let c=Jr.dot(dh),l=Zr.dot(dh);if(c<=0&&l<=0)return t.copy(n);ph.subVectors(e,i);let u=Jr.dot(ph),f=Zr.dot(ph);if(u>=0&&f<=u)return t.copy(i);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Jr,a);mh.subVectors(e,r);let d=Jr.dot(mh),m=Zr.dot(mh);if(m>=0&&d<=m)return t.copy(r);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Zr,o);let g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return ep.subVectors(r,i),o=(f-u)/(f-u+(d-m)),t.copy(i).addScaledVector(ep,o);let p=1/(g+x+h);return a=x*p,o=h*p,t.copy(n).addScaledVector(Jr,a).addScaledVector(Zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_n=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pi):Pi.fromBufferAttribute(r,a),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ac.copy(n.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),Rc.subVectors(this.max,so),$r.subVectors(e.a,so),Qr.subVectors(e.b,so),ea.subVectors(e.c,so),Os.subVectors(Qr,$r),Bs.subVectors(ea,Qr),lr.subVectors($r,ea);let t=[0,-Os.z,Os.y,0,-Bs.z,Bs.y,0,-lr.z,lr.y,Os.z,0,-Os.x,Bs.z,0,-Bs.x,lr.z,0,-lr.x,-Os.y,Os.x,0,-Bs.y,Bs.x,0,-lr.y,lr.x,0];return!vh(t,$r,Qr,ea,Rc)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,$r,Qr,ea,Rc))?!1:(Cc.crossVectors(Os,Bs),t=[Cc.x,Cc.y,Cc.z],vh(t,$r,Qr,ea,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},os=[new I,new I,new I,new I,new I,new I,new I,new I],Pi=new I,Ac=new _n,$r=new I,Qr=new I,ea=new I,Os=new I,Bs=new I,lr=new I,so=new I,Rc=new I,Cc=new I,ur=new I;function vh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ur.fromArray(s,r);let o=i.x*Math.abs(ur.x)+i.y*Math.abs(ur.y)+i.z*Math.abs(ur.z),c=e.dot(ur),l=t.dot(ur),u=n.dot(ur);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var hs=Ig();function Ig(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Lg(s){Math.abs(s)>65504&&tt("DataUtils.toHalfFloat(): Value out of range."),s=St(s,-65504,65504),hs.floatView[0]=s;let e=hs.uint32View[0],t=e>>23&511;return hs.baseTable[t]+((e&8388607)>>hs.shiftTable[t])}function Dg(s){let e=s>>10;return hs.uint32View[0]=hs.mantissaTable[hs.offsetTable[e]+(s&1023)]+hs.exponentTable[e],hs.floatView[0]}var wo=class{static toHalfFloat(e){return Lg(e)}static fromHalfFloat(e){return Dg(e)}},bn=new I,Pc=new ve,Fg=0,Pt=class extends Fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uf,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pc.fromBufferAttribute(this,t),Pc.applyMatrix3(e),this.setXY(t,Pc.x,Pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix3(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var vr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hs=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _e=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ng=new _n,ro=new I,_h=new I,kn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ng.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);let t=ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ro,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(_h)),this.expandByPoint(ro.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ug=0,gi=new qe,yh=new on,ta=new I,ai=new _n,ao=new _n,Cn=new I,nt=class s extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?Hs:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ao.setFromBufferAttribute(o),this.morphTargetsRelative?(Cn.addVectors(ai.min,ao.min),ai.expandByPoint(Cn),Cn.addVectors(ai.max,ao.max),ai.expandByPoint(Cn)):(ai.expandByPoint(ao.min),ai.expandByPoint(ao.max))}ai.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Cn.fromBufferAttribute(o,l),c&&(ta.fromBufferAttribute(e,l),Cn.add(ta)),i=Math.max(i,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new I,c[v]=new I;let l=new I,u=new I,f=new I,h=new ve,d=new ve,m=new ve,x=new I,g=new I;function p(v,E,A){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,A),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),u.sub(l),f.sub(l),d.sub(h),m.sub(h);let C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(C),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(C),o[v].add(x),o[E].add(x),o[A].add(x),c[v].add(g),c[E].add(g),c[A].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,E=_.length;v<E;++v){let A=_[v],C=A.start,L=A.count;for(let U=C,D=C+L;U<D;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new I,y=new I,S=new I,b=new I;function w(v){S.fromBufferAttribute(i,v),b.copy(S);let E=o[v];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(b,E);let C=y.dot(c[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,C)}for(let v=0,E=_.length;v<E;++v){let A=_[v],C=A.start,L=A.count;for(let U=C,D=C+L;U<D;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,f=new I;if(e)for(let h=0,d=e.count;h<d;h+=3){let m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),d=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new Pt(h,u,f)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uf,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},jn=new I,Gs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyNormalMatrix(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.transformDirection(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mh=new I,Og=new I,Bg=new gt,oi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Mh.subVectors(n,t).cross(Og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Mh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bg.getNormalMatrix(e),i=this.coplanarPoint(Mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kg=0,zn=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Ea,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=jh,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qc,this.stencilZFail=Qc,this.stencilZPass=Qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new oi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ps=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},na,oo=new I,ia=new I,sa=new I,ra=new ve,co=new ve,bm=new qe,Ic=new I,lo=new I,Lc=new I,tp=new ve,Sh=new ve,np=new ve,Vs=class extends on{constructor(e=new ps){if(super(),this.isSprite=!0,this.type="Sprite",na===void 0){na=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(t,5);na.setIndex([0,1,2,0,2,3]),na.setAttribute("position",new Gs(n,3,0,!1)),na.setAttribute("uv",new Gs(n,2,3,!1))}this.geometry=na,this.material=e,this.center=new ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ia.setFromMatrixScale(this.matrixWorld),bm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ia.multiplyScalar(-sa.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Dc(Ic.set(-.5,-.5,0),sa,a,ia,i,r),Dc(lo.set(.5,-.5,0),sa,a,ia,i,r),Dc(Lc.set(.5,.5,0),sa,a,ia,i,r),tp.set(0,0),Sh.set(1,0),np.set(1,1);let o=e.ray.intersectTriangle(Ic,lo,Lc,!1,oo);if(o===null&&(Dc(lo.set(-.5,.5,0),sa,a,ia,i,r),Sh.set(0,1),o=e.ray.intersectTriangle(Ic,Lc,lo,!1,oo),o===null))return;let c=e.ray.origin.distanceTo(oo);c<e.near||c>e.far||t.push({distance:c,point:oo.clone(),uv:us.getInterpolation(oo,Ic,lo,Lc,tp,Sh,np,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Dc(s,e,t,n,i,r){ra.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(co.x=r*ra.x-i*ra.y,co.y=i*ra.x+r*ra.y):co.copy(ra),s.copy(e),s.x+=co.x,s.y+=co.y,s.applyMatrix4(bm)}var cs=new I,wh=new I,Fc=new I,Nc=new I,yr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wh.copy(e).add(t).multiplyScalar(.5),Fc.copy(t).sub(e).normalize(),Nc.copy(this.origin).sub(wh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fc),o=Nc.dot(this.direction),c=-Nc.dot(Fc),l=Nc.lengthSq(),u=Math.abs(1-a*a),f,h,d,m;if(u>0)if(f=a*c-o,h=a*o-c,m=r*u,f>=0)if(h>=-m)if(h<=m){let x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(wh).addScaledVector(Fc,h),d}intersectSphere(e,t){if(e.radius<0)return null;cs.subVectors(e.center,this.origin);let n=cs.dot(this.direction),i=cs.dot(cs)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,_=n.y-a.y,M=n.z-a.z,y=Math.abs(c),S=Math.abs(l),b=Math.abs(u),w,v,E,A,C,L,U,D,F,B,k,J;if(y>=S&&y>=b?(E=c,L=f,F=m,J=p,c>=0?(w=l,v=u,A=h,C=d,U=x,D=g,B=_,k=M):(w=u,v=l,A=d,C=h,U=g,D=x,B=M,k=_)):S>=b?(E=l,L=h,F=x,J=_,l>=0?(w=u,v=c,A=d,C=f,U=g,D=m,B=M,k=p):(w=c,v=u,A=f,C=d,U=m,D=g,B=p,k=M)):(E=u,L=d,F=g,J=M,u>=0?(w=c,v=l,A=f,C=h,U=m,D=x,B=p,k=_):(w=l,v=c,A=h,C=f,U=x,D=m,B=_,k=p)),E===0)return null;let X=w/E,Y=v/E,Q=1/E,de=A-X*L,ye=C-Y*L,Ve=U-X*F,Ye=D-Y*F,Qe=B-X*J,ee=k-Y*J,se=Qe*Ye-ee*Ve,Ae=de*ee-ye*Qe,Ze=Ve*ye-Ye*de;if(i){if(se<0||Ae<0||Ze<0)return null}else if((se<0||Ae<0||Ze<0)&&(se>0||Ae>0||Ze>0))return null;let Re=se+Ae+Ze;if(Re===0)return null;let vt=Q*(se*L+Ae*F+Ze*J);return(Re>0?vt<0:vt>0)?null:this.at(vt/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ni=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ip=new qe,hr=new yr,Uc=new kn,sp=new I,Oc=new I,Bc=new I,kc=new I,Eh=new I,zc=new I,rp=new I,Hc=new I,ze=class extends on{constructor(e=new nt,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){zc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],f=r[c];u!==0&&(Eh.fromBufferAttribute(f,e),a?zc.addScaledVector(Eh,u):zc.addScaledVector(Eh.sub(t),u))}t.add(zc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(Uc.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Uc,sp)===null||hr.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(ip.copy(r).invert(),hr.copy(e.ray).applyMatrix4(ip),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,S=M;y<S;y+=3){let b=o.getX(y),w=o.getX(y+1),v=o.getX(y+2);i=Gc(this,p,e,n,l,u,f,b,w,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);i=Gc(this,a,e,n,l,u,f,_,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,S=M;y<S;y+=3){let b=y,w=y+1,v=y+2;i=Gc(this,p,e,n,l,u,f,b,w,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,M=g+1,y=g+2;i=Gc(this,a,e,n,l,u,f,_,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function zg(s,e,t,n,i,r,a,o){let c;if(e.side===Dn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Ki,o),c===null)return null;Hc.copy(o),Hc.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Hc);return l<t.near||l>t.far?null:{distance:l,point:Hc.clone(),object:s}}function Gc(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Oc),s.getVertexPosition(c,Bc),s.getVertexPosition(l,kc);let u=zg(s,e,t,n,Oc,Bc,kc,rp);if(u){let f=new I;us.getBarycoord(rp,Oc,Bc,kc,f),i&&(u.uv=us.getInterpolatedAttribute(i,o,c,l,f,new ve)),r&&(u.uv1=us.getInterpolatedAttribute(r,o,c,l,f,new ve)),a&&(u.normal=us.getInterpolatedAttribute(a,o,c,l,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new I,materialIndex:0};us.getNormal(Oc,Bc,kc,h.normal),u.face=h,u.barycoord=f}return u}var uo=new wt,ap=new wt,op=new wt,Hg=new wt,cp=new qe,Vc=new I,Th=new kn,lp=new qe,Ah=new yr,Eo=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vc),this.boundingBox.expandByPoint(Vc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vc),this.boundingSphere.expandByPoint(Vc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Th.copy(this.boundingSphere),Th.applyMatrix4(i),e.ray.intersectsSphere(Th)!==!1&&(lp.copy(i).invert(),Ah.copy(e.ray).applyMatrix4(lp),!(this.boundingBox!==null&&Ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ap.fromBufferAttribute(i.attributes.skinIndex,e),op.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(uo.copy(t),t.set(0,0,0,0)):(uo.set(...t,1),t.set(0,0,0)),uo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=op.getComponent(r);if(a!==0){let o=ap.getComponent(r);cp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Hg.copy(uo).applyMatrix4(cp),a)}}return t.isVector4&&(t.w=uo.w),t.applyMatrix4(this.bindMatrixInverse)}},ba=class extends on{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ui=class extends En{constructor(e=null,t=1,n=1,i,r,a,o,c,l=gn,u=gn,f,h){super(null,a,o,c,l,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},up=new qe,Gg=new qe,To=class s{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Gg;up.multiplyMatrices(o,t[r]),up.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ui(t,e,e,Hn,hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(tt("Skeleton: No bone found with UUID:",r),a=new ba),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},an=class extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},aa=new qe,hp=new qe,Wc=[],fp=new _n,Vg=new qe,ho=new ze,fo=new kn,Qt=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new an(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,aa),fp.copy(e.boundingBox).applyMatrix4(aa),this.boundingBox.union(fp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,aa),fo.copy(e.boundingSphere).applyMatrix4(aa),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,aa),hp.multiplyMatrices(n,aa),ho.matrixWorld=hp,ho.raycast(e,Wc);for(let a=0,o=Wc.length;a<o;a++){let c=Wc[a];c.instanceId=r,c.object=this,t.push(c)}Wc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new an(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ui(new Float32Array(i*this.count),i,this.count,Pa,hi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fr=new kn,Wg=new ve(.5,.5),qc=new I,Ws=class{constructor(e=new oi,t=new oi,n=new oi,i=new oi,r=new oi,a=new oi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],_=r[12],M=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-a,d-u,p-m,S-_).normalize(),i[1].setComponents(l+a,d+u,p+m,S+_).normalize(),i[2].setComponents(l+o,d+f,p+x,S+M).normalize(),i[3].setComponents(l-o,d-f,p-x,S-M).normalize(),n)i[4].setComponents(c,h,g,y).normalize(),i[5].setComponents(l-c,d-h,p-g,S-y).normalize();else if(i[4].setComponents(l-c,d-h,p-g,S-y).normalize(),t===Li)i[5].setComponents(l+c,d+h,p+g,S+y).normalize();else if(t===da)i[5].setComponents(c,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);let t=Wg.distanceTo(e.center);return fr.radius=.7071067811865476+t,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(qc.x=i.normal.x>0?e.max.x:e.min.x,qc.y=i.normal.y>0?e.max.y:e.min.y,qc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var va=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hl=new I,fl=new I,dp=new qe,po=new yr,Xc=new kn,Rh=new I,pp=new I,Mr=class extends on{constructor(e=new nt,t=new va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hl.fromBufferAttribute(t,i-1),fl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hl.distanceTo(fl);e.setAttribute("lineDistance",new _e(n,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(i),Xc.radius+=r,e.ray.intersectsSphere(Xc)===!1)return;dp.copy(i).invert(),po.copy(e.ray).applyMatrix4(dp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=l){let p=u.getX(x),_=u.getX(x+1),M=jc(this,e,po,c,p,_,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=jc(this,e,po,c,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=l){let p=jc(this,e,po,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=jc(this,e,po,c,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function jc(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(hl.fromBufferAttribute(o,i),fl.fromBufferAttribute(o,r),t.distanceSqToSegment(hl,fl,Rh,pp)>n)return;Rh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Rh);if(!(l<e.near||l>e.far))return{distance:l,point:pp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var mp=new I,gp=new I,Ao=class extends Mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)mp.fromBufferAttribute(t,i),gp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mp.distanceTo(gp);e.setAttribute("lineDistance",new _e(n,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ro=class extends Mr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},_a=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xp=new qe,Uh=new yr,Kc=new kn,Yc=new I,Co=class extends on{constructor(e=new nt,t=new _a){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kc.copy(n.boundingSphere),Kc.applyMatrix4(i),Kc.radius+=r,e.ray.intersectsSphere(Kc)===!1)return;xp.copy(i).invert(),Uh.copy(e.ray).applyMatrix4(xp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=h,x=d;m<x;m++){let g=l.getX(m);Yc.fromBufferAttribute(f,g),bp(Yc,g,c,i,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,x=d;m<x;m++)Yc.fromBufferAttribute(f,m),bp(Yc,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bp(s,e,t,n,i,r,a){let o=Uh.distanceSqToPoint(s);if(o<t){let c=new I;Uh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Po=class extends En{constructor(e=[],t=js,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yn=class extends En{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qs=class extends En{constructor(e,t,n=Bi,i,r,a,o=gn,c=gn,l,u=Wi,f=1){if(u!==Wi&&u!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},dl=class extends qs{constructor(e,t=Bi,n=js,i,r,a=gn,o=gn,c,l=Wi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Io=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$n=class s extends nt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(f,2));function m(x,g,p,_,M,y,S,b,w,v,E){let A=y/w,C=S/v,L=y/2,U=S/2,D=b/2,F=w+1,B=v+1,k=0,J=0,X=new I;for(let Y=0;Y<B;Y++){let Q=Y*C-U;for(let de=0;de<F;de++){let ye=de*A-L;X[x]=ye*_,X[g]=Q*M,X[p]=D,l.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=b>0?1:-1,u.push(X.x,X.y,X.z),f.push(de/w),f.push(1-Y/v),k+=1}}for(let Y=0;Y<v;Y++)for(let Q=0;Q<w;Q++){let de=h+Q+F*Y,ye=h+Q+F*(Y+1),Ve=h+(Q+1)+F*(Y+1),Ye=h+(Q+1)+F*Y;c.push(de,ye,Ye),c.push(ye,Ve,Ye),J+=6}o.addGroup(d,J,E),d+=J,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var bi=class s extends nt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],f=[],h=[],d=[],m=0,x=[],g=n/2,p=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(d,2));function _(){let y=new I,S=new I,b=0,w=(t-e)/n;for(let v=0;v<=r;v++){let E=[],A=v/r,C=A*(t-e)+e;for(let L=0;L<=i;L++){let U=L/i,D=U*c+o,F=Math.sin(D),B=Math.cos(D);S.x=C*F,S.y=-A*n+g,S.z=C*B,f.push(S.x,S.y,S.z),y.set(F,w,B).normalize(),h.push(y.x,y.y,y.z),d.push(U,1-A),E.push(m++)}x.push(E)}for(let v=0;v<i;v++)for(let E=0;E<r;E++){let A=x[E][v],C=x[E+1][v],L=x[E+1][v+1],U=x[E][v+1];(e>0||E!==0)&&(u.push(A,C,U),b+=3),(t>0||E!==r-1)&&(u.push(C,L,U),b+=3)}l.addGroup(p,b,0),p+=b}function M(y){let S=m,b=new ve,w=new I,v=0,E=y===!0?e:t,A=y===!0?1:-1;for(let L=1;L<=i;L++)f.push(0,g*A,0),h.push(0,A,0),d.push(.5,.5),m++;let C=m;for(let L=0;L<=i;L++){let D=L/i*c+o,F=Math.cos(D),B=Math.sin(D);w.x=E*B,w.y=g*A,w.z=E*F,f.push(w.x,w.y,w.z),h.push(0,A,0),b.x=F*.5+.5,b.y=B*.5*A+.5,d.push(b.x,b.y),m++}for(let L=0;L<i;L++){let U=S+L,D=C+L;y===!0?u.push(D,D+1,U):u.push(D+1,D,U),v+=3}l.addGroup(p,v,y===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Lo=class s extends bi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pl=class s extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new I,y=new I,S=new I;for(let b=0;b<t.length;b+=3)d(t[b+0],M),d(t[b+1],y),d(t[b+2],S),c(M,y,S,_)}function c(_,M,y,S){let b=S+1,w=[];for(let v=0;v<=b;v++){w[v]=[];let E=_.clone().lerp(y,v/b),A=M.clone().lerp(y,v/b),C=b-v;for(let L=0;L<=C;L++)L===0&&v===b?w[v][L]=E:w[v][L]=E.clone().lerp(A,L/C)}for(let v=0;v<b;v++)for(let E=0;E<2*(b-v)-1;E++){let A=Math.floor(E/2);E%2===0?(h(w[v][A+1]),h(w[v+1][A]),h(w[v][A])):(h(w[v][A+1]),h(w[v+1][A+1]),h(w[v+1][A]))}}function l(_){let M=new I;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let _=new I;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=g(_)/2/Math.PI+.5,S=p(_)/Math.PI+.5;a.push(y,1-S)}m(),f()}function f(){for(let _=0;_<a.length;_+=6){let M=a[_+0],y=a[_+2],S=a[_+4],b=Math.max(M,y,S),w=Math.min(M,y,S);b>.9&&w<.1&&(M<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),S<.2&&(a[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function d(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function m(){let _=new I,M=new I,y=new I,S=new I,b=new ve,w=new ve,v=new ve;for(let E=0,A=0;E<r.length;E+=9,A+=6){_.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),b.set(a[A+0],a[A+1]),w.set(a[A+2],a[A+3]),v.set(a[A+4],a[A+5]),S.copy(_).add(M).add(y).divideScalar(3);let C=g(S);x(b,A+0,_,C),x(w,A+2,M,C),x(v,A+4,y,C)}}function x(_,M,y,S){S<0&&_.x===1&&(a[M]=_.x-1),y.x===0&&y.z===0&&(a[M]=S/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let u=n[i],h=n[i+1]-u,d=(a-u)/h;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ve:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,i=[],r=[],a=[],o=new I,c=new qe;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(St(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(St(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Do=class extends vi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ve){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ml=class extends Do{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pf(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,i(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var vp=new I,_p=new I,Ch=new pf,Ph=new pf,Ih=new pf,li=class extends vi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(_p.subVectors(i[0],i[1]).add(i[0]),l=_p);let f=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(vp.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=vp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ch.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,x,g),Ph.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,x,g),Ih.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Ch.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Ph.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Ih.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Ch.calc(c),Ph.calc(c),Ih.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function qg(s,e){let t=1-s;return t*t*e}function Xg(s,e){return 2*(1-s)*s*e}function jg(s,e){return s*s*e}function xo(s,e,t,n){return qg(s,e)+Xg(s,t)+jg(s,n)}function Kg(s,e){let t=1-s;return t*t*t*e}function Yg(s,e){let t=1-s;return 3*t*t*s*e}function Jg(s,e){return 3*(1-s)*s*s*e}function Zg(s,e){return s*s*s*e}function bo(s,e,t,n,i){return Kg(s,e)+Yg(s,t)+Jg(s,n)+Zg(s,i)}var gl=class extends vi{constructor(e=new ve,t=new ve,n=new ve,i=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ve){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bo(e,i.x,r.x,a.x,o.x),bo(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xl=class extends vi{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bo(e,i.x,r.x,a.x,o.x),bo(e,i.y,r.y,a.y,o.y),bo(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bl=class extends vi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends vi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends vi{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xo(e,i.x,r.x,a.x),xo(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends vi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xo(e,i.x,r.x,a.x),xo(e,i.y,r.y,a.y),xo(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(yp(o,c.x,l.x,u.x,f.x),yp(o,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ve().fromArray(i))}return this}},$g=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:li,CubicBezierCurve:gl,CubicBezierCurve3:xl,EllipseCurve:Do,LineCurve:bl,LineCurve3:vl,QuadraticBezierCurve:_l,QuadraticBezierCurve3:Fo,SplineCurve:yl});var No=class s extends pl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Sr=class s extends nt{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=St(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,f=new I,h=new ve,d=new I,m=new I,x=new I,g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=t;_++){let M=n+_*u*i,y=Math.sin(M),S=Math.cos(M);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*y,f.y=e[b].y,f.z=e[b].x*S,a.push(f.x,f.y,f.z),h.x=_/t,h.y=b/(e.length-1),o.push(h.x,h.y);let w=c[3*b+0]*y,v=c[3*b+1],E=c[3*b+0]*S;l.push(w,v,E)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,S=y,b=y+e.length,w=y+e.length+1,v=y+1;r.push(S,b,v),r.push(w,v,b)}this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("uv",new _e(o,2)),this.setAttribute("normal",new _e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var fn=class s extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,f=e/o,h=t/c,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let _=p*h-a;for(let M=0;M<l;M++){let y=M*f-r;m.push(y,-_,0),x.push(0,0,1),g.push(M/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let M=_+l*p,y=_+l*(p+1),S=_+1+l*(p+1),b=_+1+l*p;d.push(M,y,b),d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ms=class s extends nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new I,h=new I,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],M=p/n,y=a+M*o,S=e*Math.cos(y),b=Math.sqrt(e*e-S*S),w=0;p===0&&a===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let v=0;v<=t;v++){let E=v/t,A=i+E*r;f.x=-b*Math.cos(A),f.y=S,f.z=b*Math.sin(A),m.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),g.push(E+w,1-M),_.push(l++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=u[p][_+1],y=u[p][_],S=u[p+1][_],b=u[p+1][_+1];(p!==0||a>0)&&d.push(M,y,b),(p!==n-1||c<Math.PI)&&d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Uo=class s extends nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],u=[],f=[],h=new I,d=new I,m=new I;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=i;p++){let _=p/i*r;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),l.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(p/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let p=(i+1)*x+g-1,_=(i+1)*(x-1)+g-1,M=(i+1)*(x-1)+g,y=(i+1)*x+g;c.push(p,_,y),c.push(_,M,y)}this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ya=class s extends nt{constructor(e=new Fo(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new ve,u=new I,f=[],h=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(d,2));function x(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),_(),p()}function g(M){u=e.getPointAt(M/t,u);let y=a.normals[M],S=a.binormals[M];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,v=Math.sin(w),E=-Math.cos(w);c.x=E*y.x+v*S.x,c.y=E*y.y+v*S.y,c.z=E*y.z+v*S.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let y=1;y<=i;y++){let S=(i+1)*(M-1)+(y-1),b=(i+1)*M+(y-1),w=(i+1)*M+y,v=(i+1)*(M-1)+y;m.push(S,b,v),m.push(b,w,v)}}function _(){for(let M=0;M<=t;M++)for(let y=0;y<=i;y++)l.x=M/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new $g[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Lr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Mp(i))i.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Mp(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Gn(s){let e={};for(let t=0;t<s.length;t++){let n=Lr(s[t]);for(let i in n)e[i]=n[i]}return e}function Mp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Qg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var wu={clone:Lr,merge:Gn},ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(i.value);break;case"v2":this.uniforms[n].value=new ve().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ml=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qn=class extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var yn=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Nl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gs=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sl=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function el(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function nx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Sp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function ix(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var qi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wl=class extends qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dr,endingEnd:dr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case pr:r=e,o=2*t-n;break;case vo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pr:a=e,c=2*n-t;break;case vo:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-h*g+2*h*x-h*m,_=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,M=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+_*a[l+S]+M*a[c+S]+y*a[f+S];return r}},Oo=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}},El=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Tl=class extends qi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-t)/(i-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*m;return r}let h=o*2,d=e-1;for(let m=0;m!==o;++m){let x=a[l+m],g=a[c+m],p=d*h+m*2,_=f[p],M=f[p+1],y=e*h+m*2,S=u[y],b=u[y+1],w=rx(n,t,_,S,i);r[m]=vm(w,x,M,b,g)}return r}};function vm(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function sx(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function rx(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=vm(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=sx(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ei=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),el(e.settings)&&(n.settings={inTangents:zs(e.settings.inTangents,Array),outTangents:zs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Tl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case $c:t=this.InterpolantFactoryMethodSmooth;break;case Nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return tt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return $c;case this.InterpolantFactoryMethodBezier:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;el(this.settings)&&(wp(this.settings.inTangents,e),wp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ft("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ft("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&sg(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){ft("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$c,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let f=o*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let x=t[f+m];if(x!==t[h+m]||x!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,el(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function wp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=xr;var xs=class extends ei{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=gr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};Bo.prototype.ValueTypeName="color";var bs=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};bs.prototype.ValueTypeName="number";var Al=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)zt.slerpFlat(r,0,a,l-o,a,l,c);return r}},vs=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends ei{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=gr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};Xs.prototype.ValueTypeName="vector";var wr=class{constructor(e="",t=-1,n=[],i=yu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ox(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=nx(c);c=Sp(c,1,u),l=Sp(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new bs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let f=u[1],h=i[f];h||(i[f]=h=[]),h.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ax(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bs;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return Bo;case"quaternion":return vs;case"bool":case"boolean":return xs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ox(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ax(s.type);if(s.times===void 0){let n=[],i=[];ix(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),el(s.settings)&&(t.settings={inTangents:zs(s.settings.inTangents,Float32Array),outTangents:zs(s.settings.outTangents,Float32Array)}),t}var Vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Ep(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Ep(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Ep(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Rl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_m=new Rl,Xi=class{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls={},Oh=class extends Error{constructor(e,t){super(e),this.response=t}},Ma=class extends Xi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ls[e]!==void 0){ls[e].push({onLoad:t,onProgress:n,onError:i});return}ls[e]=[],ls[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=ls[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0,x=0,g=new ReadableStream({start(p){_();function _(){f.read().then(({done:M,value:y})=>{if(M)p.close();else{x+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let b=0,w=u.length;b<w;b++){let v=u[b];v.onProgress&&v.onProgress(S)}p.enqueue(y),_()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Oh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Vi.add(`file:${e}`,l);let u=ls[e];delete ls[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=ls[e];if(u===void 0)throw this.manager.itemError(e),l;delete ls[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var oa=new WeakMap,Cl=class extends Xi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=oa.get(a);f===void 0&&(f=[],oa.set(a,f)),f.push({onLoad:t,onError:i})}return a}let o=pa("img");function c(){u(),t&&t(this);let f=oa.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}oa.delete(this),r.manager.itemEnd(e)}function l(f){u(),i&&i(f),Vi.remove(`image:${e}`);let h=oa.get(this)||[];for(let d=0;d<h.length;d++){let m=h[d];m.onError&&m.onError(f)}oa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Er=class extends Xi{constructor(e){super(e)}load(e,t,n,i){let r=new En,a=new Cl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Tr=class extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ar=class extends Tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lh=new qe,Tp=new I,Ap=new I,Sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tp),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===da||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jc=new I,Zc=new zt,Gi=new I,ko=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jc,Zc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,Zc,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jc,Zc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,Zc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ks=new I,Rp=new ve,Cp=new ve,mn=class extends ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ks.x,ks.y).multiplyScalar(-e/ks.z),ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ks.x,ks.y).multiplyScalar(-e/ks.z)}getViewSize(e,t){return this.getViewBounds(e,Rp,Cp),t.subVectors(Cp,Rp)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bh=class extends Sa{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=br*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zo=class extends Tr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},kh=class extends Sa{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},Ho=class extends Tr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends ko{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zh=class extends Sa{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ms=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},_i=class extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Dh=new WeakMap,Go=class extends Xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Dh.has(a)===!0?(i&&i(Dh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Vi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Dh.set(c,l),Vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ca=-90,la=1,Pl=class extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new mn(ca,la,e,t);i.layers=this.layers,this.add(i);let r=new mn(ca,la,e,t);r.layers=this.layers,this.add(r);let a=new mn(ca,la,e,t);a.layers=this.layers,this.add(a);let o=new mn(ca,la,e,t);o.layers=this.layers,this.add(o);let c=new mn(ca,la,e,t);c.layers=this.layers,this.add(c);let l=new mn(ca,la,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Il=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ll=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;zt.multiplyQuaternionsFlat(e,a,e,t,e,n),zt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},gf="\\[\\]\\.:\\/",cx=new RegExp("["+gf+"]","g"),xf="[^"+gf+"]",lx="[^"+gf.replace("\\.","")+"]",ux=/((?:WC+[\/:])*)/.source.replace("WC",xf),hx=/(WCOD+)?/.source.replace("WCOD",lx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xf),dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xf),px=new RegExp("^"+ux+hx+fx+dx+"$"),mx=["material","materials","bones","map"],Hh=class{constructor(e,t,n){let i=n||$t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$t=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cx,"")}static parseTrackName(e){let t=px.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$t.Composite=Hh;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:dr,endingEnd:dr};for(let l=0;l!==a;++l){let u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case im:for(let u=0,f=c.length;u!==f;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case yu:default:for(let u=0,f=c.length;u!==f;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===nm;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===em){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=pr,i.endingEnd=pr):(e?i.endingStart=this.zeroSlopeAtStart?pr:dr:i.endingStart=vo,t?i.endingEnd=this.zeroSlopeAtEnd?pr:dr:i.endingEnd=vo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},gx=new Float32Array(1),Vo=class extends Fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let f=0;f!==r;++f){let h=i[f],d=h.name,m=u[d];if(m!==void 0)++m.referenceCount,a[f]=m;else{if(m=a[f],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}let x=t&&t._propertyBindings[f].binding.parsedPath;m=new Ll($t.create(n,d,x),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),a[f]=m}o[f].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let f=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Oo(new Float32Array(2),new Float32Array(2),1,gx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?wr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=yu),c!==void 0){let f=c.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let u=new Dl(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?wr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let u=l._cacheIndex,f=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Sf=class Sf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Sf.prototype.isMatrix2=!0;var Gh=Sf;function bf(s,e,t,n){let i=xx(n);switch(t){case of:return s*e;case Pa:return s*e/i.components*i.byteLength;case Gl:return s*e/i.components*i.byteLength;case Ys:return s*e*2/i.components*i.byteLength;case Vl:return s*e*2/i.components*i.byteLength;case cf:return s*e*3/i.components*i.byteLength;case Hn:return s*e*4/i.components*i.byteLength;case Wl:return s*e*4/i.components*i.byteLength;case qo:case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jo:case Ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Kl:return Math.max(s,16)*Math.max(e,8)/4;case ql:case jl:return Math.max(s,8)*Math.max(e,8)/2;case Yl:case Jl:case $l:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Yo:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case iu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case su:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case au:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ou:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case cu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case uu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case du:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mu:case gu:case xu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bu:case vu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jo:case _u:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xx(s){switch(s){case ti:case nf:return{byteLength:1,components:1};case Ra:case sf:case Fn:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case Bi:case kl:case hi:return{byteLength:4,components:1};case rf:case af:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gm(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function vx(s){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let u=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var _x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ov=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Av=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:_x,alphahash_pars_fragment:yx,alphamap_fragment:Mx,alphamap_pars_fragment:Sx,alphatest_fragment:wx,alphatest_pars_fragment:Ex,aomap_fragment:Tx,aomap_pars_fragment:Ax,batching_pars_vertex:Rx,batching_vertex:Cx,begin_vertex:Px,beginnormal_vertex:Ix,bsdfs:Lx,iridescence_fragment:Dx,bumpmap_pars_fragment:Fx,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:Bx,color_fragment:kx,color_pars_fragment:zx,color_pars_vertex:Hx,color_vertex:Gx,common:Vx,cube_uv_reflection_fragment:Wx,defaultnormal_vertex:qx,displacementmap_pars_vertex:Xx,displacementmap_vertex:jx,emissivemap_fragment:Kx,emissivemap_pars_fragment:Yx,colorspace_fragment:Jx,colorspace_pars_fragment:Zx,envmap_fragment:$x,envmap_common_pars_fragment:Qx,envmap_pars_fragment:eb,envmap_pars_vertex:tb,envmap_physical_pars_fragment:fb,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:sb,fog_fragment:rb,fog_pars_fragment:ab,gradientmap_pars_fragment:ob,lightmap_pars_fragment:cb,lights_lambert_fragment:lb,lights_lambert_pars_fragment:ub,lights_pars_begin:hb,lights_toon_fragment:db,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:xb,lights_physical_pars_fragment:bb,lights_fragment_begin:vb,lights_fragment_maps:_b,lights_fragment_end:yb,lightprobes_pars_fragment:Mb,logdepthbuf_fragment:Sb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Eb,logdepthbuf_vertex:Tb,map_fragment:Ab,map_pars_fragment:Rb,map_particle_fragment:Cb,map_particle_pars_fragment:Pb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Db,morphcolor_vertex:Fb,morphnormal_vertex:Nb,morphtarget_pars_vertex:Ub,morphtarget_vertex:Ob,normal_fragment_begin:Bb,normal_fragment_maps:kb,normal_pars_fragment:zb,normal_pars_vertex:Hb,normal_vertex:Gb,normalmap_pars_fragment:Vb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:qb,clearcoat_pars_fragment:Xb,iridescence_pars_fragment:jb,opaque_fragment:Kb,packing:Yb,premultiplied_alpha_fragment:Jb,project_vertex:Zb,dithering_fragment:$b,dithering_pars_fragment:Qb,roughnessmap_fragment:ev,roughnessmap_pars_fragment:tv,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:iv,shadowmap_vertex:sv,shadowmask_pars_fragment:rv,skinbase_vertex:av,skinning_pars_vertex:ov,skinning_vertex:cv,skinnormal_vertex:lv,specularmap_fragment:uv,specularmap_pars_fragment:hv,tonemapping_fragment:fv,tonemapping_pars_fragment:dv,transmission_fragment:pv,transmission_pars_fragment:mv,uv_pars_fragment:gv,uv_pars_vertex:xv,uv_vertex:bv,worldpos_vertex:vv,background_vert:_v,background_frag:yv,backgroundCube_vert:Mv,backgroundCube_frag:Sv,cube_vert:wv,cube_frag:Ev,depth_vert:Tv,depth_frag:Av,distance_vert:Rv,distance_frag:Cv,equirect_vert:Pv,equirect_frag:Iv,linedashed_vert:Lv,linedashed_frag:Dv,meshbasic_vert:Fv,meshbasic_frag:Nv,meshlambert_vert:Uv,meshlambert_frag:Ov,meshmatcap_vert:Bv,meshmatcap_frag:kv,meshnormal_vert:zv,meshnormal_frag:Hv,meshphong_vert:Gv,meshphong_frag:Vv,meshphysical_vert:Wv,meshphysical_frag:qv,meshtoon_vert:Xv,meshtoon_frag:jv,points_vert:Kv,points_frag:Yv,shadow_vert:Jv,shadow_frag:Zv,sprite_vert:$v,sprite_frag:Qv},Ne={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Zi={basic:{uniforms:Gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Gn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Gn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Gn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Gn([Ne.points,Ne.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Gn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Gn([Ne.common,Ne.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Gn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Gn([Ne.sprite,Ne.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Gn([Ne.common,Ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Gn([Ne.lights,Ne.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Zi.physical={uniforms:Gn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var Eu={r:0,b:0,g:0},e_=new qe,Vm=new gt;Vm.set(-1,0,0,0,1,0,0,0,1);function t_(s,e,t,n,i,r){let a=new Oe(0),o=i===!0?0:1,c,l,u=null,f=0,h=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function m(_){let M=!1,y=d(_);y===null?g(a,o):y&&y.isColor&&(g(y,1),M=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===Wo)?(l===void 0&&(l=new ze(new $n(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Lr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vm),l.material.toneMapped=Ct.getTransfer(y.colorSpace)!==Xt,(u!==y||f!==y.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ze(new fn(2,2),new Ht({name:"BackgroundMaterial",uniforms:Lr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(y.colorSpace)!==Xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,M){_.getRGB(Eu,mf(s)),t.buffers.color.setClear(Eu.r,Eu.g,Eu.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:x,dispose:p}}function n_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,a=!1;function o(C,L,U,D,F){let B=!1,k=f(C,D,U,L);r!==k&&(r=k,l(r.object)),B=d(C,D,U,F),B&&m(C,D,U,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(C,L,U,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(C){return s.bindVertexArray(C)}function u(C){return s.deleteVertexArray(C)}function f(C,L,U,D){let F=D.wireframe===!0,B=n[L.id];B===void 0&&(B={},n[L.id]=B);let k=C.isInstancedMesh===!0?C.id:0,J=B[k];J===void 0&&(J={},B[k]=J);let X=J[U.id];X===void 0&&(X={},J[U.id]=X);let Y=X[F];return Y===void 0&&(Y=h(c()),X[F]=Y),Y}function h(C){let L=[],U=[],D=[];for(let F=0;F<t;F++)L[F]=0,U[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:D,object:C,attributes:{},index:null}}function d(C,L,U,D){let F=r.attributes,B=L.attributes,k=0,J=U.getAttributes();for(let X in J)if(J[X].location>=0){let Q=F[X],de=B[X];if(de===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function m(C,L,U,D){let F={},B=L.attributes,k=0,J=U.getAttributes();for(let X in J)if(J[X].location>=0){let Q=B[X];Q===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor));let de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),F[X]=de,k++}r.attributes=F,r.attributesNum=k,r.index=D}function x(){let C=r.newAttributes;for(let L=0,U=C.length;L<U;L++)C[L]=0}function g(C){p(C,0)}function p(C,L){let U=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;U[C]=1,D[C]===0&&(s.enableVertexAttribArray(C),D[C]=1),F[C]!==L&&(s.vertexAttribDivisor(C,L),F[C]=L)}function _(){let C=r.newAttributes,L=r.enabledAttributes;for(let U=0,D=L.length;U<D;U++)L[U]!==C[U]&&(s.disableVertexAttribArray(U),L[U]=0)}function M(C,L,U,D,F,B,k){k===!0?s.vertexAttribIPointer(C,L,U,F,B):s.vertexAttribPointer(C,L,U,D,F,B)}function y(C,L,U,D){x();let F=D.attributes,B=U.getAttributes(),k=L.defaultAttributeValues;for(let J in B){let X=B[J];if(X.location>=0){let Y=F[J];if(Y===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),Y!==void 0){let Q=Y.normalized,de=Y.itemSize,ye=e.get(Y);if(ye===void 0)continue;let Ve=ye.buffer,Ye=ye.type,Qe=ye.bytesPerElement,ee=Ye===s.INT||Ye===s.UNSIGNED_INT||Y.gpuType===kl;if(Y.isInterleavedBufferAttribute){let se=Y.data,Ae=se.stride,Ze=Y.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,se.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<X.locationSize;Re++)g(X.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Re=0;Re<X.locationSize;Re++)M(X.location+Re,de/X.locationSize,Ye,Q,Ae*Qe,(Ze+de/X.locationSize*Re)*Qe,ee)}else{if(Y.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)p(X.location+se,Y.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<X.locationSize;se++)g(X.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let se=0;se<X.locationSize;se++)M(X.location+se,de/X.locationSize,Ye,Q,de*Qe,de/X.locationSize*se*Qe,ee)}}else if(k!==void 0){let Q=k[J];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(X.location,Q);break;case 3:s.vertexAttrib3fv(X.location,Q);break;case 4:s.vertexAttrib4fv(X.location,Q);break;default:s.vertexAttrib1fv(X.location,Q)}}}}_()}function S(){E();for(let C in n){let L=n[C];for(let U in L){let D=L[U];for(let F in D){let B=D[F];for(let k in B)u(B[k].object),delete B[k];delete D[F]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;let L=n[C.id];for(let U in L){let D=L[U];for(let F in D){let B=D[F];for(let k in B)u(B[k].object),delete B[k];delete D[F]}}delete n[C.id]}function w(C){for(let L in n){let U=n[L];for(let D in U){let F=U[D];if(F[C.id]===void 0)continue;let B=F[C.id];for(let k in B)u(B[k].object),delete B[k];delete F[C.id]}}}function v(C){for(let L in n){let U=n[L],D=C.isInstancedMesh===!0?C.id:0,F=U[D];if(F!==void 0){for(let B in F){let k=F[B];for(let J in k)u(k[J].object),delete k[J];delete F[B]}delete U[D],Object.keys(U).length===0&&delete n[L]}}}function E(){A(),a=!0,r!==i&&(r=i,l(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function i_(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function s_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Hn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let v=w===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ti&&w!==hi&&!v&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(tt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:S,samples:b}}function r_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new oi,o=new gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{let _=r?0:n,M=_*4,y=p.clippingState||null;c.value=y,y=u(m,h,M,d);for(let S=0;S!==M;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=d+x*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)a.copy(f[M]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Fa=4,a_=6,o_=20,c_=256,Qo=new ji,ym=new Oe,wf=null,Ef=0,Tf=0,Af=!1,l_=new I,Dr=new I,Au=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=l_}=r;wf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Ef,Tf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Fn,format:Hn,colorSpace:Kn,depthBuffer:!1},i=Mm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=u_(r)),this._blurMaterial=f_(r,e,t),this._ggxMaterial=h_(r,e,t)}return i}_compileMaterial(e){let t=new ze(new nt,e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,n,i,r){let c=new mn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ym),f.toneMapping=Oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new $n,new Ni({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,p=!0):(g.color.copy(ym),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let S=this._cubeSize;Da(i,y*S,M>2?S:0,S,S),f.setRenderTarget(i),p&&f.render(x,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===js||e.mapping===Pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Da(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Fa?n-m+Fa:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,Da(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(o,Qo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Da(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(o,Qo)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],f=3*u*(i>this._lodMax-Fa?i-this._lodMax+Fa:0),h=4*(this._cubeSize-u);Da(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(c,Qo)}};function u_(s){let e=[],t=[],n=s,i=s-Fa+1+a_;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,m=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let _=p%3*2/3-1,M=p>2?0:-1,y=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];m.set(y,d*h*p);for(let S=0;S<h;S++){let b=u[S*2]*2-1,w=u[S*2+1]*2-1;p===0?Dr.set(1,w,b):p===1?Dr.set(-b,1,-w):p===2?Dr.set(-b,w,1):p===3?Dr.set(-1,w,-b):p===4?Dr.set(-b,-1,w):Dr.set(b,w,-1),Dr.toArray(x,(p*h+S)*d)}}let g=new nt;g.setAttribute("position",new Pt(m,d)),g.setAttribute("outputDirection",new Pt(x,d)),t.push(new ze(g,null)),n>Fa&&n--}return{lodMeshes:t,sizeLods:e}}function Mm(s,e,t){let n=new vn(s,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function h_(s,e,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function f_(s,e,t){return new Ht({name:"SphericalGaussianBlur",defines:{SAMPLES:o_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Sm(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function wm(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ru=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Po(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $n(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:Yi});r.uniforms.tEquirect.value=t;let a=new ze(i,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Yt),new Pl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function d_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ul||d===Ol)if(e.has(h)){let m=e.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let x=new Ru(m.height);return x.fromEquirectangularTexture(s,h),e.set(h,x),h.addEventListener("dispose",l),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,m=d===Ul||d===Ol,x=d===js||d===Pr;if(m||x){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Au(s)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let _=h.image;return m&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Au(s)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===Ul?h.mapping=js:d===Ol&&(h.mapping=Pr),h}function c(h){let d=0,m=6;for(let x=0;x<m;x++)h[x]!==void 0&&d++;return d===m}function l(h){let d=h.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function p_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&mr("WebGLRenderer: "+n+" extension not supported."),i}}}function m_(s,e,t,n){let i={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete i[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)e.update(h[d],s.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,m=f.attributes.position,x=0;if(m===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let M=0,y=_.length;M<y;M+=3){let S=_[M+0],b=_[M+1],w=_[M+2];h.push(S,b,b,w,w,S)}}else{let _=m.array;x=m.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let S=M+0,b=M+1,w=M+2;h.push(S,b,b,w,w,S)}}let g=new(m.count>=65535?Hs:vr)(h,1);g.version=x;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function g_(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){s.drawElements(n,h,r,f*a),t.update(h,n,1)}function l(f,h,d){d!==0&&(s.drawElementsInstanced(n,h,r,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function x_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function b_(s,e,t){let n=new WeakMap,i=new wt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let E=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let y=o.attributes.position.count*M,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*S*4*f),w=new Mo(b,y,S,f);w.type=hi,w.needsUpdate=!0;let v=M*4;for(let A=0;A<f;A++){let C=g[A],L=p[A],U=_[A],D=y*S*4*A;for(let F=0;F<C.count;F++){let B=F*v;d===!0&&(i.fromBufferAttribute(C,F),b[D+B+0]=i.x,b[D+B+1]=i.y,b[D+B+2]=i.z,b[D+B+3]=0),m===!0&&(i.fromBufferAttribute(L,F),b[D+B+4]=i.x,b[D+B+5]=i.y,b[D+B+6]=i.z,b[D+B+7]=0),x===!0&&(i.fromBufferAttribute(U,F),b[D+B+8]=i.x,b[D+B+9]=i.y,b[D+B+10]=i.z,b[D+B+11]=U.itemSize===4?i.w:1)}}h={count:f,texture:w,size:new ve(y,S)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function v_(s,e,t,n,i){let r=new WeakMap;function a(l){let u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var __={[Kh]:"LINEAR_TONE_MAPPING",[Yh]:"REINHARD_TONE_MAPPING",[Jh]:"CINEON_TONE_MAPPING",[Zh]:"ACES_FILMIC_TONE_MAPPING",[Qh]:"AGX_TONE_MAPPING",[ef]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function y_(s,e,t,n,i,r){let a=new vn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new nt;l.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _e([0,2,0,0,2,0],2));let u=new Ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ze(l,u),h=new ji(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,_=[],M=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let b=0;b<_.length;b++){let w=_[b];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){_=y,M=_.length>0&&_[0].isRenderPass===!0;let S=a.width,b=a.height;_.length>0&&o===null&&(o=new vn(S,b,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new vn(S,b,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){let v=_[w];v.setSize&&v.setSize(S,b)}},this.begin=function(y,S){if(x||y.toneMapping===Oi&&_.length===0)return!1;if(p=S,S!==null){let b=S.width,w=S.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return M===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Oi,!0},this.hasRenderPass=function(){return M},this.end=function(y,S){y.toneMapping=g,x=!0;let b=a,w=o;for(let v=0;v<_.length;v++){let E=_[v];E.enabled!==!1&&(E.render(y,w,b,S),E.needsSwap!==!1&&(b=w,w=w===o?c:o))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,u.defines={},Ct.getTransfer(d)===Xt&&(u.defines.SRGB_TRANSFER="");let v=__[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Wm=new En,Pf=new qs(1,1),qm=new Mo,Xm=new ul,jm=new Po,Em=[],Tm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function Ua(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Em[i];if(r===void 0&&(r=new Float32Array(i),Em[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function An(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Iu(s,e){let t=Tm[e];t===void 0&&(t=new Int32Array(e),Tm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function M_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function S_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2fv(this.addr,e),An(t,e)}}function w_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;s.uniform3fv(this.addr,e),An(t,e)}}function E_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4fv(this.addr,e),An(t,e)}}function T_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;Cm.set(n),s.uniformMatrix2fv(this.addr,!1,Cm),An(t,n)}}function A_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;Rm.set(n),s.uniformMatrix3fv(this.addr,!1,Rm),An(t,n)}}function R_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;Am.set(n),s.uniformMatrix4fv(this.addr,!1,Am),An(t,n)}}function C_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function P_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2iv(this.addr,e),An(t,e)}}function I_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3iv(this.addr,e),An(t,e)}}function L_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4iv(this.addr,e),An(t,e)}}function D_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function F_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2uiv(this.addr,e),An(t,e)}}function N_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3uiv(this.addr,e),An(t,e)}}function U_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4uiv(this.addr,e),An(t,e)}}function O_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Pf.compareFunction=t.isReversedDepthBuffer()?Su:Mu,r=Pf):r=Wm,t.setTexture2D(e||r,i)}function B_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xm,i)}function k_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jm,i)}function z_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qm,i)}function H_(s){switch(s){case 5126:return M_;case 35664:return S_;case 35665:return w_;case 35666:return E_;case 35674:return T_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return I_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return F_;case 36295:return N_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return z_}}function G_(s,e){s.uniform1fv(this.addr,e)}function V_(s,e){let t=Ua(e,this.size,2);s.uniform2fv(this.addr,t)}function W_(s,e){let t=Ua(e,this.size,3);s.uniform3fv(this.addr,t)}function q_(s,e){let t=Ua(e,this.size,4);s.uniform4fv(this.addr,t)}function X_(s,e){let t=Ua(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function j_(s,e){let t=Ua(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function K_(s,e){let t=Ua(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Y_(s,e){s.uniform1iv(this.addr,e)}function J_(s,e){s.uniform2iv(this.addr,e)}function Z_(s,e){s.uniform3iv(this.addr,e)}function $_(s,e){s.uniform4iv(this.addr,e)}function Q_(s,e){s.uniform1uiv(this.addr,e)}function ey(s,e){s.uniform2uiv(this.addr,e)}function ty(s,e){s.uniform3uiv(this.addr,e)}function ny(s,e){s.uniform4uiv(this.addr,e)}function iy(s,e,t){let n=this.cache,i=e.length,r=Iu(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),An(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Pf:a=Wm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function sy(s,e,t){let n=this.cache,i=e.length,r=Iu(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Xm,r[a])}function ry(s,e,t){let n=this.cache,i=e.length,r=Iu(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||jm,r[a])}function ay(s,e,t){let n=this.cache,i=e.length,r=Iu(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qm,r[a])}function oy(s){switch(s){case 5126:return G_;case 35664:return V_;case 35665:return W_;case 35666:return q_;case 35674:return X_;case 35675:return j_;case 35676:return K_;case 5124:case 35670:return Y_;case 35667:case 35671:return J_;case 35668:case 35672:return Z_;case 35669:case 35673:return $_;case 5125:return Q_;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}var If=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H_(t.type)}},Lf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}},Df=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Rf=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function cy(s,e,t){let n=s.name,i=n.length;for(Rf.lastIndex=0;;){let r=Rf.exec(n),a=Rf.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Pm(t,l===void 0?new If(o,s,e):new Lf(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Df(o),Pm(t,f)),t=f}}}var Na=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);cy(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Im(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var ly=37297,uy=0;function hy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Lm=new gt;function fy(s){Ct._getMatrix(Lm,Ct.workingColorSpace,s);let e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case _o:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hy(s.getShaderSource(e),o)}else return r}function dy(s,e){let t=fy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var py={[Kh]:"Linear",[Yh]:"Reinhard",[Jh]:"Cineon",[Zh]:"ACESFilmic",[Qh]:"AgX",[ef]:"Neutral",[$h]:"Custom"};function my(s,e){let t=py[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tu=new I;function gy(){Ct.getLuminanceCoefficients(Tu);let s=Tu.x.toFixed(4),e=Tu.y.toFixed(4),t=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tc).join(`
`)}function by(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function tc(s){return s!==""}function Fm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ff(s){return s.replace(_y,My)}var yy=new Map;function My(s,e){let t=Et[e];if(t===void 0){let n=yy.get(e);if(n!==void 0)t=Et[n],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ff(t)}var Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(s){return s.replace(Sy,wy)}function wy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Om(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ey={[Rr]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};function Ty(s){return Ey[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ay={[js]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function Ry(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ay[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Cy={[Pr]:"ENVMAP_MODE_REFRACTION"};function Py(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Cy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Iy={[Nl]:"ENVMAP_BLENDING_MULTIPLY",[Zp]:"ENVMAP_BLENDING_MIX",[$p]:"ENVMAP_BLENDING_ADD"};function Ly(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Iy[s.combine]||"ENVMAP_BLENDING_NONE"}function Dy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fy(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ty(t),l=Ry(t),u=Py(t),f=Ly(t),h=Dy(t),d=xy(t),m=by(r),x=i.createProgram(),g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(tc).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(tc).join(`
`),p.length>0&&(p+=`
`)):(g=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tc).join(`
`),p=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Et.tonemapping_pars_fragment:"",t.toneMapping!==Oi?my("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,dy("linearToOutputTexel",t.outputColorSpace),gy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tc).join(`
`)),a=Ff(a),a=Fm(a,t),a=Nm(a,t),o=Ff(o),o=Fm(o,t),o=Nm(o,t),a=Um(a),o=Um(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+g+a,y=_+p+o,S=Im(i,i.VERTEX_SHADER,M),b=Im(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(C){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x)||"",U=i.getShaderInfoLog(S)||"",D=i.getShaderInfoLog(b)||"",F=L.trim(),B=U.trim(),k=D.trim(),J=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,b);else{let Y=Dm(i,S,"vertex"),Q=Dm(i,b,"fragment");ft("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+Y+`
`+Q)}else F!==""?tt("WebGLProgram: Program Info Log:",F):(B===""||k==="")&&(X=!1);X&&(C.diagnostics={runnable:J,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:k,prefix:p}})}i.deleteShader(S),i.deleteShader(b),v=new Na(i,x),E=vy(i,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(x,ly)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var Ny=0,Nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uf(e),t.set(e,n)),n}},Uf=class{constructor(e){this.id=Ny++,this.code=e,this.usedTimes=0}};function Uy(s){return s===Ys||s===Yo||s===Jo}function Oy(s,e,t,n,i,r){let a=new So,o=new Nf,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,E,A,C,L,U){let D=C.fog,F=L.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||B,k),X=J&&J.mapping===Wo?J.image.height:null,Y=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,de=Q!==void 0?Q.length:0,ye=0;F.morphAttributes.position!==void 0&&(ye=1),F.morphAttributes.normal!==void 0&&(ye=2),F.morphAttributes.color!==void 0&&(ye=3);let Ve,Ye,Qe,ee;if(Y){let Gt=Zi[Y];Ve=Gt.vertexShader,Ye=Gt.fragmentShader}else{Ve=v.vertexShader,Ye=v.fragmentShader;let Gt=o.getVertexShaderStage(v),Vt=o.getFragmentShaderStage(v);o.update(v,Gt,Vt),Qe=Gt.id,ee=Vt.id}let se=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ze=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,vt=!!v.map,jt=!!v.matcap,lt=!!J,Ue=!!v.aoMap,ot=!!v.lightMap,pt=!!v.bumpMap&&v.wireframe===!1,oe=!!v.normalMap,xe=!!v.displacementMap,He=!!v.emissiveMap,it=!!v.metalnessMap,st=!!v.roughnessMap,H=v.anisotropy>0,Dt=v.clearcoat>0,mt=v.dispersion>0,N=v.retroreflectivity>0,T=v.iridescence>0,j=v.sheen>0,Z=v.transmission>0,te=H&&!!v.anisotropyMap,be=Dt&&!!v.clearcoatMap,me=Dt&&!!v.clearcoatNormalMap,ne=Dt&&!!v.clearcoatRoughnessMap,ie=T&&!!v.iridescenceMap,Se=T&&!!v.iridescenceThicknessMap,We=j&&!!v.sheenColorMap,Ce=j&&!!v.sheenRoughnessMap,we=!!v.specularMap,Je=!!v.specularColorMap,rt=!!v.specularIntensityMap,ct=Z&&!!v.transmissionMap,V=Z&&!!v.thicknessMap,Pe=!!v.gradientMap,ae=!!v.alphaMap,Ie=v.alphaTest>0,Fe=!!v.alphaHash,ce=!!v.extensions,et=Oi;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(et=s.toneMapping);let ke={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:Ye,defines:v.defines,customVertexShaderID:Qe,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Re,batchingColor:Re&&L._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&L.instanceColor!==null,instancingMorph:Ze&&L.morphTexture!==null,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:vt,matcap:jt,envMap:lt,envMapMode:lt&&J.mapping,envMapCubeUVHeight:X,aoMap:Ue,lightMap:ot,bumpMap:pt,normalMap:oe,displacementMap:xe,emissiveMap:He,normalMapObjectSpace:oe&&v.normalMapType===rm,normalMapTangentSpace:oe&&v.normalMapType===$o,packedNormalMap:oe&&v.normalMapType===$o&&Uy(v.normalMap.format),metalnessMap:it,roughnessMap:st,anisotropy:H,anisotropyMap:te,clearcoat:Dt,clearcoatMap:be,clearcoatNormalMap:me,clearcoatRoughnessMap:ne,dispersion:mt,retroreflection:N,iridescence:T,iridescenceMap:ie,iridescenceThicknessMap:Se,sheen:j,sheenColorMap:We,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Je,specularIntensityMap:rt,transmission:Z,transmissionMap:ct,thicknessMap:V,gradientMap:Pe,opaque:v.transparent===!1&&v.blending===Ea&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ie,alphaHash:Fe,combine:v.combine,mapUv:vt&&m(v.map.channel),aoMapUv:Ue&&m(v.aoMap.channel),lightMapUv:ot&&m(v.lightMap.channel),bumpMapUv:pt&&m(v.bumpMap.channel),normalMapUv:oe&&m(v.normalMap.channel),displacementMapUv:xe&&m(v.displacementMap.channel),emissiveMapUv:He&&m(v.emissiveMap.channel),metalnessMapUv:it&&m(v.metalnessMap.channel),roughnessMapUv:st&&m(v.roughnessMap.channel),anisotropyMapUv:te&&m(v.anisotropyMap.channel),clearcoatMapUv:be&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:We&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(v.sheenRoughnessMap.channel),specularMapUv:we&&m(v.specularMap.channel),specularColorMapUv:Je&&m(v.specularColorMap.channel),specularIntensityMapUv:rt&&m(v.specularIntensityMap.channel),transmissionMapUv:ct&&m(v.transmissionMap.channel),thicknessMapUv:V&&m(v.thicknessMap.channel),alphaMapUv:ae&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(oe||H),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(vt||ae),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&oe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ae,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ye,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:vt&&v.map.isVideoTexture===!0&&Ct.getTransfer(v.map.colorSpace)===Xt,decodeVideoTextureEmissive:He&&v.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(v.emissiveMap.colorSpace)===Xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Lt,flipSided:v.side===Dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)E.push(A),E.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(p(E,v),_(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function _(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){let E=d[v.type],A;if(E){let C=Zi[E];A=wu.clone(C.uniforms)}else A=v.uniforms;return A}function y(v,E){let A=u.get(E);return A!==void 0?++A.usedTimes:(A=new Fy(s,E,v,i),l.push(A),u.set(E,A)),A}function S(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:w}}function By(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ky(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function km(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,x,g,p){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:p},s[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.materialVariant=a(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=g,_.group=p),e++,_}function c(h,d,m,x,g,p,_){_.reversedDepth===!0&&(g=-g);let M=o(h,d,m,x,g,p);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function l(h,d,m,x,g,p){let _=o(h,d,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function u(h,d){t.length>1&&t.sort(h||ky),n.length>1&&n.sort(d||Bm),i.length>1&&i.sort(d||Bm)}function f(){for(let h=e,d=s.length;h<d;h++){let m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:u}}function zy(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new km,s.set(n,[a])):i>=r.length?(a=new km,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Hy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Oe};break;case"SpotLight":t={position:new I,direction:new I,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Gy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Vy=0;function Wy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qy(s){let e=new Hy,t=Gy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new qe,a=new qe;function o(l){let u=0,f=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,M=0,y=0,S=0,b=0,w=0,v=0,E=0,A=0;l.sort(Wy);for(let L=0,U=l.length;L<U;L++){let D=l[L],F=D.color,B=D.intensity,k=D.distance,J=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ys?J=D.shadow.map.texture:J=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=F.r*B,f+=F.g*B,h+=F.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],B);A++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=J;let de=Y.getViewportCount();for(let ye=0;ye<de;ye++)n.sunShadowMatrix[x+ye]=Y.getMatrix(ye),n.sunShadowCascade[x+ye]=Y._cascadeData[ye];x+=de,m++}n.sun[d]=X,d++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=D.shadow.matrix,S++}n.directional[g]=X,g++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=k,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[_]=X;let Y=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,Y.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[_]=Y.matrix,D.castShadow){let Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=J,w++}_++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[M]=X,M++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let Y=D.shadow,Q=t.get(D);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=D.shadow.matrix,b++}n.point[p]=X,p++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[y]=X,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let C=n.hash;(C.sunLength!==d||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==_||C.rectAreaLength!==M||C.hemiLength!==y||C.numSunShadows!==m||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==w||C.numSpotMaps!==v||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.sunLength=d,C.directionalLength=g,C.pointLength=p,C.spotLength=_,C.rectAreaLength=M,C.hemiLength=y,C.numSunShadows=m,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=w,C.numSpotMaps=v,C.numLightProbes=A,n.version=Vy++)}function c(l,u){let f=0,h=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let _=0,M=l.length;_<M;_++){let y=l[_];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(y.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function zm(s){let e=new qy(s),t=[],n=[],i=[];function r(h){f.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){i.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Xy(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new zm(s),e.set(i,[o])):r>=a.length?(o=new zm(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Jy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Hm=new qe,ec=new I,Cf=new I;function Zy(s,e,t){let n=new Ws,i=new ve,r=new ve,a=new wt,o=new gs,c=new Sl,l={},u=t.maxTextureSize,f={[Ki]:Dn,[Dn]:Ki,[Lt]:Lt},h=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:jy,fragmentShader:Ky}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new nt;m.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ze(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let p=this.type;this.render=function(b,w,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Lp&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let E=s.getRenderTarget(),A=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Yi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=p!==this.type;U&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(F=>F.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,F=b.length;D<F;D++){let B=b[D],k=B.shadow;if(k===void 0){tt("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let J=k.getFrameExtents();i.multiply(J),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/J.x),i.x=r.x*J.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/J.y),i.y=r.y*J.y,k.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===wa){if(B.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new vn(i.x,i.y,{format:Ys,type:Fn,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new qs(i.x,i.y,hi),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Wi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=gn,k.map.depthTexture.magFilter=gn}else B.isPointLight?(k.map=new Ru(i.x),k.map.depthTexture=new dl(i.x,Bi)):(k.map=new vn(i.x,i.y),k.map.depthTexture=new qs(i.x,i.y,Bi)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Wi,this.type===Rr?(k.map.depthTexture.compareFunction=X?Su:Mu,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=gn,k.map.depthTexture.magFilter=gn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let Y=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();B.isPointLight!==!0&&k.updateMatrices(B,v);for(let Q=0;Q<Y;Q++){let de=k.getCamera(Q);if(B.isPointLight){let ye=k.camera,Ve=k.matrix,Ye=B.distance||ye.far;Ye!==ye.far&&(ye.far=Ye,ye.updateProjectionMatrix()),ec.setFromMatrixPosition(B.matrixWorld),ye.position.copy(ec),Cf.copy(ye.position),Cf.add(Yy[Q]),ye.up.copy(Jy[Q]),ye.lookAt(Cf),ye.updateMatrixWorld(),Ve.makeTranslation(-ec.x,-ec.y,-ec.z),Hm.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Hm,ye.coordinateSystem,ye.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(k.map),s.clear());let ye=k.getViewport(Q);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),L.viewport(a)}n=k.getFrustum(Q),y(w,v,de,B,this.type)}k.isPointLightShadow!==!0&&this.type===wa&&_(k,v),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,A,C)};function _(b,w){let v=e.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new vn(i.x,i.y,{format:Ys,type:Fn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,v,h,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,v,d,x,null)}function M(b,w,v,E){let A=null,C=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)A=C;else if(A=v.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=A.uuid,U=w.uuid,D=l[L];D===void 0&&(D={},l[L]=D);let F=D[U];F===void 0&&(F=A.clone(),D[U]=F,w.addEventListener("dispose",S)),A=F}if(A.visible=w.visible,A.wireframe=w.wireframe,E===wa?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=s.properties.get(A);L.light=v}return A}function y(b,w,v,E,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===wa)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let U=e.update(b),D=b.material;if(Array.isArray(D)){let F=U.groups;for(let B=0,k=F.length;B<k;B++){let J=F[B],X=D[J.materialIndex];if(X&&X.visible){let Y=M(b,X,E,A);b.onBeforeShadow(s,b,w,v,U,Y,J),s.renderBufferDirect(v,null,U,Y,b,J),b.onAfterShadow(s,b,w,v,U,Y,J)}}}else if(D.visible){let F=M(b,D,E,A);b.onBeforeShadow(s,b,w,v,U,F,null),s.renderBufferDirect(v,null,U,F,b,null),b.onAfterShadow(s,b,w,v,U,F,null)}}let L=b.children;for(let U=0,D=L.length;U<D;U++)y(L[U],w,v,E,A)}function S(b){b.target.removeEventListener("dispose",S);for(let v in l){let E=l[v],A=b.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function $y(s,e){function t(){let V=!1,Pe=new wt,ae=null,Ie=new wt(0,0,0,0);return{setMask:function(Fe){ae!==Fe&&!V&&(s.colorMask(Fe,Fe,Fe,Fe),ae=Fe)},setLocked:function(Fe){V=Fe},setClear:function(Fe,ce,et,ke,Gt){Gt===!0&&(Fe*=ke,ce*=ke,et*=ke),Pe.set(Fe,ce,et,ke),Ie.equals(Pe)===!1&&(s.clearColor(Fe,ce,et,ke),Ie.copy(Pe))},reset:function(){V=!1,ae=null,Ie.set(-1,0,0,0)}}}function n(){let V=!1,Pe=!1,ae=null,Ie=null,Fe=null;return{setReversed:function(ce){if(Pe!==ce){let et=e.get("EXT_clip_control");ce?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Pe=ce;let ke=Fe;Fe=null,this.setClear(ke)}},getReversed:function(){return Pe},setTest:function(ce){ce?se(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!V&&(s.depthMask(ce),ae=ce)},setFunc:function(ce){if(Pe&&(ce=gm[ce]),Ie!==ce){switch(ce){case tl:s.depthFunc(s.NEVER);break;case nl:s.depthFunc(s.ALWAYS);break;case il:s.depthFunc(s.LESS);break;case ha:s.depthFunc(s.LEQUAL);break;case sl:s.depthFunc(s.EQUAL);break;case rl:s.depthFunc(s.GEQUAL);break;case al:s.depthFunc(s.GREATER);break;case ol:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ce}},setLocked:function(ce){V=ce},setClear:function(ce){Fe!==ce&&(Fe=ce,Pe&&(ce=1-ce),s.clearDepth(ce))},reset:function(){V=!1,ae=null,Ie=null,Fe=null,Pe=!1}}}function i(){let V=!1,Pe=null,ae=null,Ie=null,Fe=null,ce=null,et=null,ke=null,Gt=null;return{setTest:function(Vt){V||(Vt?se(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Vt){Pe!==Vt&&!V&&(s.stencilMask(Vt),Pe=Vt)},setFunc:function(Vt,Wt,pi){(ae!==Vt||Ie!==Wt||Fe!==pi)&&(s.stencilFunc(Vt,Wt,pi),ae=Vt,Ie=Wt,Fe=pi)},setOp:function(Vt,Wt,pi){(ce!==Vt||et!==Wt||ke!==pi)&&(s.stencilOp(Vt,Wt,pi),ce=Vt,et=Wt,ke=pi)},setLocked:function(Vt){V=Vt},setClear:function(Vt){Gt!==Vt&&(s.clearStencil(Vt),Gt=Vt)},reset:function(){V=!1,Pe=null,ae=null,Ie=null,Fe=null,ce=null,et=null,ke=null,Gt=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,M=null,y=null,S=null,b=null,w=null,v=new Oe(0,0,0),E=0,A=!1,C=null,L=null,U=null,D=null,F=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=J>=2);let Y=null,Q={},de=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ve=new wt().fromArray(de),Ye=new wt().fromArray(ye);function Qe(V,Pe,ae,Ie){let Fe=new Uint8Array(4),ce=s.createTexture();s.bindTexture(V,ce),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ae;et++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Pe+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return ce}let ee={};ee[s.TEXTURE_2D]=Qe(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=Qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(s.DEPTH_TEST),a.setFunc(ha),pt(!1),oe(Vh),se(s.CULL_FACE),Ue(Yi);function se(V){u[V]!==!0&&(s.enable(V),u[V]=!0)}function Ae(V){u[V]!==!1&&(s.disable(V),u[V]=!1)}function Ze(V,Pe){return h[V]!==Pe?(s.bindFramebuffer(V,Pe),h[V]=Pe,V===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Pe),V===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Re(V,Pe){let ae=m,Ie=!1;if(V){ae=d.get(Pe),ae===void 0&&(ae=[],d.set(Pe,ae));let Fe=V.textures;if(ae.length!==Fe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,et=Fe.length;ce<et;ce++)ae[ce]=s.COLOR_ATTACHMENT0+ce;ae.length=Fe.length,Ie=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ae)}function vt(V){return x!==V?(s.useProgram(V),x=V,!0):!1}let jt={[Cr]:s.FUNC_ADD,[Fp]:s.FUNC_SUBTRACT,[Np]:s.FUNC_REVERSE_SUBTRACT};jt[Up]=s.MIN,jt[Op]=s.MAX;let lt={[Bp]:s.ZERO,[kp]:s.ONE,[zp]:s.SRC_COLOR,[Xh]:s.SRC_ALPHA,[Xp]:s.SRC_ALPHA_SATURATE,[Wp]:s.DST_COLOR,[Gp]:s.DST_ALPHA,[Hp]:s.ONE_MINUS_SRC_COLOR,[jh]:s.ONE_MINUS_SRC_ALPHA,[qp]:s.ONE_MINUS_DST_COLOR,[Vp]:s.ONE_MINUS_DST_ALPHA,[jp]:s.CONSTANT_COLOR,[Kp]:s.ONE_MINUS_CONSTANT_COLOR,[Yp]:s.CONSTANT_ALPHA,[Jp]:s.ONE_MINUS_CONSTANT_ALPHA};function Ue(V,Pe,ae,Ie,Fe,ce,et,ke,Gt,Vt){if(V===Yi){g===!0&&(Ae(s.BLEND),g=!1);return}if(g===!1&&(se(s.BLEND),g=!0),V!==Dp){if(V!==p||Vt!==A){if((_!==Cr||S!==Cr)&&(s.blendEquation(s.FUNC_ADD),_=Cr,S=Cr),Vt)switch(V){case Ea:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ta:s.blendFunc(s.ONE,s.ONE);break;case Wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ft("WebGLState: Invalid blending: ",V);break}else switch(V){case Ea:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ta:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",V);break}M=null,y=null,b=null,w=null,v.set(0,0,0),E=0,p=V,A=Vt}return}Fe=Fe||Pe,ce=ce||ae,et=et||Ie,(Pe!==_||Fe!==S)&&(s.blendEquationSeparate(jt[Pe],jt[Fe]),_=Pe,S=Fe),(ae!==M||Ie!==y||ce!==b||et!==w)&&(s.blendFuncSeparate(lt[ae],lt[Ie],lt[ce],lt[et]),M=ae,y=Ie,b=ce,w=et),(ke.equals(v)===!1||Gt!==E)&&(s.blendColor(ke.r,ke.g,ke.b,Gt),v.copy(ke),E=Gt),p=V,A=!1}function ot(V,Pe){V.side===Lt?Ae(s.CULL_FACE):se(s.CULL_FACE);let ae=V.side===Dn;Pe&&(ae=!ae),pt(ae),V.blending===Ea&&V.transparent===!1?Ue(Yi):Ue(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Ie=V.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),He(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function oe(V){V!==Pp?(se(s.CULL_FACE),V!==L&&(V===Vh?s.cullFace(s.BACK):V===Ip?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),L=V}function xe(V){V!==U&&(k&&s.lineWidth(V),U=V)}function He(V,Pe,ae){V?(se(s.POLYGON_OFFSET_FILL),(D!==Pe||F!==ae)&&(D=Pe,F=ae,a.getReversed()&&(Pe=-Pe),s.polygonOffset(Pe,ae))):Ae(s.POLYGON_OFFSET_FILL)}function it(V){V?se(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function st(V){V===void 0&&(V=s.TEXTURE0+B-1),Y!==V&&(s.activeTexture(V),Y=V)}function H(V,Pe,ae){ae===void 0&&(Y===null?ae=s.TEXTURE0+B-1:ae=Y);let Ie=Q[ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},Q[ae]=Ie),(Ie.type!==V||Ie.texture!==Pe)&&(Y!==ae&&(s.activeTexture(ae),Y=ae),s.bindTexture(V,Pe||ee[V]),Ie.type=V,Ie.texture=Pe)}function Dt(){let V=Q[Y];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function mt(){try{s.compressedTexImage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function T(){try{s.texSubImage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function j(){try{s.texSubImage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function te(){try{s.compressedTexSubImage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function be(){try{s.texStorage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function me(){try{s.texStorage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function ne(){try{s.texImage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function ie(){try{s.texImage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function Se(V){return f[V]!==void 0?f[V]:s.getParameter(V)}function We(V,Pe){f[V]!==Pe&&(s.pixelStorei(V,Pe),f[V]=Pe)}function Ce(V){Ve.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ve.copy(V))}function we(V){Ye.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ye.copy(V))}function Je(V,Pe){let ae=l.get(Pe);ae===void 0&&(ae=new WeakMap,l.set(Pe,ae));let Ie=ae.get(V);Ie===void 0&&(Ie=s.getUniformBlockIndex(Pe,V.name),ae.set(V,Ie))}function rt(V,Pe){let Ie=l.get(Pe).get(V);c.get(Pe)!==Ie&&(s.uniformBlockBinding(Pe,Ie,V.__bindingPointIndex),c.set(Pe,Ie))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},Y=null,Q={},h={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,M=null,y=null,S=null,b=null,w=null,v=new Oe(0,0,0),E=0,A=!1,C=null,L=null,U=null,D=null,F=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Ae,bindFramebuffer:Ze,drawBuffers:Re,useProgram:vt,setBlending:Ue,setMaterial:ot,setFlipSided:pt,setCullFace:oe,setLineWidth:xe,setPolygonOffset:He,setScissorTest:it,activeTexture:st,bindTexture:H,unbindTexture:Dt,compressedTexImage2D:mt,compressedTexImage3D:N,texImage2D:ne,texImage3D:ie,pixelStorei:We,getParameter:Se,updateUBOMapping:Je,uniformBlockBinding:rt,texStorage2D:be,texStorage3D:me,texSubImage2D:T,texSubImage3D:j,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:Ce,viewport:we,reset:ct}}function Qy(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,T){return m?new OffscreenCanvas(N,T):pa("canvas")}function g(N,T,j){let Z=1,te=mt(N);if((te.width>j||te.height>j)&&(Z=j/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let be=Math.floor(Z*te.width),me=Math.floor(Z*te.height);h===void 0&&(h=x(be,me));let ne=T?x(be,me):h;return ne.width=be,ne.height=me,ne.getContext("2d").drawImage(N,0,0,be,me),tt("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+be+"x"+me+")."),ne}else return"data"in N&&tt("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),N;return N}function p(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(N,T,j,Z,te,be=!1){if(N!==null){if(s[N]!==void 0)return s[N];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me;Z&&(me=e.get("EXT_texture_norm16"),me||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=T;if(T===s.RED&&(j===s.FLOAT&&(ne=s.R32F),j===s.HALF_FLOAT&&(ne=s.R16F),j===s.UNSIGNED_BYTE&&(ne=s.R8),j===s.UNSIGNED_SHORT&&me&&(ne=me.R16_EXT),j===s.SHORT&&me&&(ne=me.R16_SNORM_EXT)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ne=s.R8UI),j===s.UNSIGNED_SHORT&&(ne=s.R16UI),j===s.UNSIGNED_INT&&(ne=s.R32UI),j===s.BYTE&&(ne=s.R8I),j===s.SHORT&&(ne=s.R16I),j===s.INT&&(ne=s.R32I)),T===s.RG&&(j===s.FLOAT&&(ne=s.RG32F),j===s.HALF_FLOAT&&(ne=s.RG16F),j===s.UNSIGNED_BYTE&&(ne=s.RG8),j===s.UNSIGNED_SHORT&&me&&(ne=me.RG16_EXT),j===s.SHORT&&me&&(ne=me.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ne=s.RG8UI),j===s.UNSIGNED_SHORT&&(ne=s.RG16UI),j===s.UNSIGNED_INT&&(ne=s.RG32UI),j===s.BYTE&&(ne=s.RG8I),j===s.SHORT&&(ne=s.RG16I),j===s.INT&&(ne=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),j===s.UNSIGNED_INT&&(ne=s.RGB32UI),j===s.BYTE&&(ne=s.RGB8I),j===s.SHORT&&(ne=s.RGB16I),j===s.INT&&(ne=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),j===s.UNSIGNED_INT&&(ne=s.RGBA32UI),j===s.BYTE&&(ne=s.RGBA8I),j===s.SHORT&&(ne=s.RGBA16I),j===s.INT&&(ne=s.RGBA32I)),T===s.RGB&&(j===s.UNSIGNED_SHORT&&me&&(ne=me.RGB16_EXT),j===s.SHORT&&me&&(ne=me.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(ne=s.R11F_G11F_B10F)),T===s.RGBA){let ie=be?_o:Ct.getTransfer(te);j===s.FLOAT&&(ne=s.RGBA32F),j===s.HALF_FLOAT&&(ne=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ne=ie===Xt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&me&&(ne=me.RGBA16_EXT),j===s.SHORT&&me&&(ne=me.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(N,T){let j;return N?T===null||T===Bi||T===Ca?j=s.DEPTH24_STENCIL8:T===hi?j=s.DEPTH32F_STENCIL8:T===Ra&&(j=s.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Bi||T===Ca?j=s.DEPTH_COMPONENT24:T===hi?j=s.DEPTH_COMPONENT32F:T===Ra&&(j=s.DEPTH_COMPONENT16),j}function b(N,T){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==gn&&N.minFilter!==Yt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function w(N){let T=N.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&f.delete(T)}function v(N){let T=N.target;T.removeEventListener("dispose",v),C(T)}function E(N){let T=n.get(N);if(T.__webglInit===void 0)return;let j=N.source,Z=d.get(j);if(Z){let te=Z[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(N),Object.keys(Z).length===0&&d.delete(j)}n.remove(N)}function A(N){let T=n.get(N);s.deleteTexture(T.__webglTexture);let j=N.source,Z=d.get(j);delete Z[T.__cacheKey],a.memory.textures--}function C(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let te=0;te<T.__webglFramebuffer[Z].length;te++)s.deleteFramebuffer(T.__webglFramebuffer[Z][te]);else s.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)s.deleteFramebuffer(T.__webglFramebuffer[Z]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=N.textures;for(let Z=0,te=j.length;Z<te;Z++){let be=n.get(j[Z]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(j[Z])}n.remove(N)}let L=0;function U(){L=0}function D(){return L}function F(N){L=N}function B(){let N=L;return N>=i.maxTextures&&tt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,N}function k(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function J(N,T){let j=n.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){let Z=N.image;if(Z===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(j,N,T);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function X(N,T){let j=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){Ae(j,N,T);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function Y(N,T){let j=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){Ae(j,N,T);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function Q(N,T){let j=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){Ze(j,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}let de={[ci]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},ye={[gn]:s.NEAREST,[Bl]:s.NEAREST_MIPMAP_NEAREST,[Ir]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[Aa]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},Ve={[om]:s.NEVER,[fm]:s.ALWAYS,[cm]:s.LESS,[Mu]:s.LEQUAL,[lm]:s.EQUAL,[Su]:s.GEQUAL,[um]:s.GREATER,[hm]:s.NOTEQUAL};function Ye(N,T){if(T.type===hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yt||T.magFilter===Aa||T.magFilter===Ir||T.magFilter===ui||T.minFilter===Yt||T.minFilter===Aa||T.minFilter===Ir||T.minFilter===ui)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,de[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,de[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,de[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ye[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ye[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Ve[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gn||T.minFilter!==Ir&&T.minFilter!==ui||T.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Qe(N,T){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",w));let Z=T.source,te=d.get(Z);te===void 0&&(te={},d.set(Z,te));let be=k(T);if(be!==N.__cacheKey){te[be]===void 0&&(te[be]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),te[be].usedTimes++;let me=te[N.__cacheKey];me!==void 0&&(te[N.__cacheKey].usedTimes--,me.usedTimes===0&&A(T)),N.__cacheKey=be,N.__webglTexture=te[be].texture}return j}function ee(N,T,j){return Math.floor(Math.floor(N/j)/T)}function se(N,T,j,Z){let be=N.updateRanges;if(be.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,j,Z,T.data);else{be.sort((We,Ce)=>We.start-Ce.start);let me=0;for(let We=1;We<be.length;We++){let Ce=be[me],we=be[We],Je=Ce.start+Ce.count,rt=ee(we.start,T.width,4),ct=ee(Ce.start,T.width,4);we.start<=Je+1&&rt===ct&&ee(we.start+we.count-1,T.width,4)===rt?Ce.count=Math.max(Ce.count,we.start+we.count-Ce.start):(++me,be[me]=we)}be.length=me+1;let ne=t.getParameter(s.UNPACK_ROW_LENGTH),ie=t.getParameter(s.UNPACK_SKIP_PIXELS),Se=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let We=0,Ce=be.length;We<Ce;We++){let we=be[We],Je=Math.floor(we.start/4),rt=Math.ceil(we.count/4),ct=Je%T.width,V=Math.floor(Je/T.width),Pe=rt,ae=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,ct,V,Pe,ae,j,Z,T.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ne),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}function Ae(N,T,j){let Z=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=s.TEXTURE_3D);let te=Qe(N,T),be=T.source;t.bindTexture(Z,N.__webglTexture,s.TEXTURE0+j);let me=n.get(be);if(be.version!==me.__version||te===!0){if(t.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ae=Ct.getPrimaries(Ct.workingColorSpace),Ie=T.colorSpace===ki?null:Ct.getPrimaries(T.colorSpace),Fe=T.colorSpace===ki||ae===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let ie=g(T.image,!1,i.maxTextureSize);ie=Dt(T,ie);let Se=r.convert(T.format,T.colorSpace),We=r.convert(T.type),Ce=y(T.internalFormat,Se,We,T.normalized,T.colorSpace,T.isVideoTexture);Ye(Z,T);let we,Je=T.mipmaps,rt=T.isVideoTexture!==!0,ct=me.__version===void 0||te===!0,V=be.dataReady,Pe=b(T,ie);if(T.isDepthTexture)Ce=S(T.format===Ks,T.type),ct&&(rt?t.texStorage2D(s.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ie.width,ie.height,0,Se,We,null));else if(T.isDataTexture)if(Je.length>0){rt&&ct&&t.texStorage2D(s.TEXTURE_2D,Pe,Ce,Je[0].width,Je[0].height);for(let ae=0,Ie=Je.length;ae<Ie;ae++)we=Je[ae],rt?V&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,we.width,we.height,Se,We,we.data):t.texImage2D(s.TEXTURE_2D,ae,Ce,we.width,we.height,0,Se,We,we.data);T.generateMipmaps=!1}else rt?(ct&&t.texStorage2D(s.TEXTURE_2D,Pe,Ce,ie.width,ie.height),V&&se(T,ie,Se,We)):t.texImage2D(s.TEXTURE_2D,0,Ce,ie.width,ie.height,0,Se,We,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ce,Je[0].width,Je[0].height,ie.depth);for(let ae=0,Ie=Je.length;ae<Ie;ae++)if(we=Je[ae],T.format!==Hn)if(Se!==null)if(rt){if(V)if(T.layerUpdates.size>0){let Fe=bf(we.width,we.height,T.format,T.type);for(let ce of T.layerUpdates){let et=we.data.subarray(ce*Fe/we.data.BYTES_PER_ELEMENT,(ce+1)*Fe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,ce,we.width,we.height,1,Se,et)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,we.width,we.height,ie.depth,Se,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Ce,we.width,we.height,ie.depth,0,we.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,we.width,we.height,ie.depth,Se,We,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,Ce,we.width,we.height,ie.depth,0,Se,We,we.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{rt&&ct&&t.texStorage2D(s.TEXTURE_2D,Pe,Ce,Je[0].width,Je[0].height);for(let ae=0,Ie=Je.length;ae<Ie;ae++)we=Je[ae],T.format!==Hn?Se!==null?rt?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,Ce,we.width,we.height,0,we.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,we.width,we.height,Se,We,we.data):t.texImage2D(s.TEXTURE_2D,ae,Ce,we.width,we.height,0,Se,We,we.data)}else if(T.isDataArrayTexture)if(rt){if(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ce,ie.width,ie.height,ie.depth),V)if(T.layerUpdates.size>0){let ae=bf(ie.width,ie.height,T.format,T.type);for(let Ie of T.layerUpdates){let Fe=ie.data.subarray(Ie*ae/ie.data.BYTES_PER_ELEMENT,(Ie+1)*ae/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ie,ie.width,ie.height,1,Se,We,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,We,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,Se,We,ie.data);else if(T.isData3DTexture)rt?(ct&&t.texStorage3D(s.TEXTURE_3D,Pe,Ce,ie.width,ie.height,ie.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,We,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,Se,We,ie.data);else if(T.isFramebufferTexture){if(ct)if(rt)t.texStorage2D(s.TEXTURE_2D,Pe,Ce,ie.width,ie.height);else{let ae=ie.width,Ie=ie.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,Ce,ae,Ie,0,Se,We,null),ae>>=1,Ie>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ae=s.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ie.parentNode!==ae){ae.appendChild(ie),f.add(T),ae.onpaint=Ie=>{let Fe=Ie.changedElements;for(let ce of f)Fe.includes(ce.image)&&(ce.needsUpdate=!0)},ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ie);else{let Fe=s.RGBA,ce=s.RGBA,et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Fe,ce,et,ie)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Je.length>0){if(rt&&ct){let ae=mt(Je[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Ce,ae.width,ae.height)}for(let ae=0,Ie=Je.length;ae<Ie;ae++)we=Je[ae],rt?V&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Se,We,we):t.texImage2D(s.TEXTURE_2D,ae,Ce,Se,We,we);T.generateMipmaps=!1}else if(rt){if(ct){let ae=mt(ie);t.texStorage2D(s.TEXTURE_2D,Pe,Ce,ae.width,ae.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,We,ie)}else t.texImage2D(s.TEXTURE_2D,0,Ce,Se,We,ie);p(T)&&_(Z),me.__version=be.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ze(N,T,j){if(T.image.length!==6)return;let Z=Qe(N,T),te=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+j);let be=n.get(te);if(te.version!==be.__version||Z===!0){t.activeTexture(s.TEXTURE0+j);let me=Ct.getPrimaries(Ct.workingColorSpace),ne=T.colorSpace===ki?null:Ct.getPrimaries(T.colorSpace),ie=T.colorSpace===ki||me===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Se=T.isCompressedTexture||T.image[0].isCompressedTexture,We=T.image[0]&&T.image[0].isDataTexture,Ce=[];for(let ce=0;ce<6;ce++)!Se&&!We?Ce[ce]=g(T.image[ce],!0,i.maxCubemapSize):Ce[ce]=We?T.image[ce].image:T.image[ce],Ce[ce]=Dt(T,Ce[ce]);let we=Ce[0],Je=r.convert(T.format,T.colorSpace),rt=r.convert(T.type),ct=y(T.internalFormat,Je,rt,T.normalized,T.colorSpace),V=T.isVideoTexture!==!0,Pe=be.__version===void 0||Z===!0,ae=te.dataReady,Ie=b(T,we);Ye(s.TEXTURE_CUBE_MAP,T);let Fe;if(Se){V&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ct,we.width,we.height);for(let ce=0;ce<6;ce++){Fe=Ce[ce].mipmaps;for(let et=0;et<Fe.length;et++){let ke=Fe[et];T.format!==Hn?Je!==null?V?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,et,0,0,ke.width,ke.height,Je,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,et,ct,ke.width,ke.height,0,ke.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,et,0,0,ke.width,ke.height,Je,rt,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,et,ct,ke.width,ke.height,0,Je,rt,ke.data)}}}else{if(Fe=T.mipmaps,V&&Pe){Fe.length>0&&Ie++;let ce=mt(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ct,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(We){V?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce[ce].width,Ce[ce].height,Je,rt,Ce[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ct,Ce[ce].width,Ce[ce].height,0,Je,rt,Ce[ce].data);for(let et=0;et<Fe.length;et++){let Gt=Fe[et].image[ce].image;V?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,et+1,0,0,Gt.width,Gt.height,Je,rt,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,et+1,ct,Gt.width,Gt.height,0,Je,rt,Gt.data)}}else{V?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Je,rt,Ce[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ct,Je,rt,Ce[ce]);for(let et=0;et<Fe.length;et++){let ke=Fe[et];V?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,et+1,0,0,Je,rt,ke.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,et+1,ct,Je,rt,ke.image[ce])}}}p(T)&&_(s.TEXTURE_CUBE_MAP),be.__version=te.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Re(N,T,j,Z,te,be){let me=r.convert(j.format,j.colorSpace),ne=r.convert(j.type),ie=y(j.internalFormat,me,ne,j.normalized,j.colorSpace),Se=n.get(T),We=n.get(j);if(We.__renderTarget=T,!Se.__hasExternalTextures){let Ce=Math.max(1,T.width>>be),we=Math.max(1,T.height>>be);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,be,ie,Ce,we,T.depth,0,me,ne,null):t.texImage2D(te,be,ie,Ce,we,0,me,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),st(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,te,We.__webglTexture,0,it(T)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,te,We.__webglTexture,be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(N,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){let Z=T.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,be=S(T.stencilBuffer,te),me=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;st(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(T),be,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(T),be,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,be,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,N)}else{let Z=T.textures;for(let te=0;te<Z.length;te++){let be=Z[te],me=r.convert(be.format,be.colorSpace),ne=r.convert(be.type),ie=y(be.internalFormat,me,ne,be.normalized,be.colorSpace);st(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(T),ie,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(T),ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ie,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(N,T,j){let Z=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(T.depthTexture);if(te.__renderTarget=T,(!te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Ye(s.TEXTURE_CUBE_MAP,T.depthTexture);let Se=r.convert(T.depthTexture.format),We=r.convert(T.depthTexture.type),Ce;T.depthTexture.format===Wi?Ce=s.DEPTH_COMPONENT24:T.depthTexture.format===Ks&&(Ce=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ce,T.width,T.height,0,Se,We,null)}}else J(T.depthTexture,0);let be=te.__webglTexture,me=it(T),ne=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,ie=T.depthTexture.format===Ks?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wi)st(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ne,be,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,ie,ne,be,0);else if(T.depthTexture.format===Ks)st(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ne,be,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,ie,ne,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(N){let T=n.get(N),j=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let Z=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){let te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=Z}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let Z=0;Z<6;Z++)jt(T.__webglFramebuffer[Z],N,Z);else{let Z=N.texture.mipmaps;Z&&Z.length>0?jt(T.__webglFramebuffer[0],N,0):jt(T.__webglFramebuffer,N,0)}else if(j){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=s.createRenderbuffer(),vt(T.__webglDepthbuffer[Z],N,!1);else{let te=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,be)}}else{let Z=N.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),vt(T.__webglDepthbuffer,N,!1);else{let te=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,be)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(N,T,j){let Z=n.get(N);T!==void 0&&Re(Z.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&lt(N)}function ot(N){let T=N.texture,j=n.get(N),Z=n.get(T);N.addEventListener("dispose",v);let te=N.textures,be=N.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=T.version,a.memory.textures++),be){j.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[ne]=[];for(let ie=0;ie<T.mipmaps.length;ie++)j.__webglFramebuffer[ne][ie]=s.createFramebuffer()}else j.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let ne=0;ne<T.mipmaps.length;ne++)j.__webglFramebuffer[ne]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(me)for(let ne=0,ie=te.length;ne<ie;ne++){let Se=n.get(te[ne]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),a.memory.textures++)}if(N.samples>0&&st(N)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let ie=te[ne];j.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ne]);let Se=r.convert(ie.format,ie.colorSpace),We=r.convert(ie.type),Ce=y(ie.internalFormat,Se,We,ie.normalized,ie.colorSpace,N.isXRRenderTarget===!0),we=it(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ce,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,j.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(be){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ye(s.TEXTURE_CUBE_MAP,T);for(let ne=0;ne<6;ne++)if(T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)Re(j.__webglFramebuffer[ne][ie],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else Re(j.__webglFramebuffer[ne],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ne=0,ie=te.length;ne<ie;ne++){let Se=te[ne],We=n.get(Se),Ce=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,We.__webglTexture),Ye(Ce,Se),Re(j.__webglFramebuffer,N,Se,s.COLOR_ATTACHMENT0+ne,Ce,0),p(Se)&&_(Ce)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ne=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),Ye(ne,T),T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)Re(j.__webglFramebuffer[ie],N,T,s.COLOR_ATTACHMENT0,ne,ie);else Re(j.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,ne,0);p(T)&&_(ne),t.unbindTexture()}N.depthBuffer&&lt(N)}function pt(N){let T=N.textures;for(let j=0,Z=T.length;j<Z;j++){let te=T[j];if(p(te)){let be=M(N),me=n.get(te).__webglTexture;t.bindTexture(be,me),_(be),t.unbindTexture()}}}let oe=[],xe=[];function He(N){if(N.samples>0){if(st(N)===!1){let T=N.textures,j=N.width,Z=N.height,te=s.COLOR_BUFFER_BIT,be=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(N),ne=T.length>1;if(ne)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ie=N.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);let We=n.get(T[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,j,Z,0,0,j,Z,te,s.NEAREST),c===!0&&(oe.length=0,xe.length=0,oe.push(s.COLOR_ATTACHMENT0+Se),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(oe.push(be),xe.push(be),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);let We=n.get(T[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function it(N){return Math.min(i.maxSamples,N.samples)}function st(N){let T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function H(N){let T=a.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function Dt(N,T){let j=N.colorSpace,Z=N.format,te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Kn&&j!==ki&&(Ct.getTransfer(j)===Xt?(Z!==Hn||te!==ti)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",j)),T}function mt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.getTextureUnits=D,this.setTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=Ue,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function e1(s,e){function t(n,i=ki){let r,a=Ct.getTransfer(i);if(n===ti)return s.UNSIGNED_BYTE;if(n===zl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===nf)return s.BYTE;if(n===sf)return s.SHORT;if(n===Ra)return s.UNSIGNED_SHORT;if(n===kl)return s.INT;if(n===Bi)return s.UNSIGNED_INT;if(n===hi)return s.FLOAT;if(n===Fn)return s.HALF_FLOAT;if(n===of)return s.ALPHA;if(n===cf)return s.RGB;if(n===Hn)return s.RGBA;if(n===Wi)return s.DEPTH_COMPONENT;if(n===Ks)return s.DEPTH_STENCIL;if(n===Pa)return s.RED;if(n===Gl)return s.RED_INTEGER;if(n===Ys)return s.RG;if(n===Vl)return s.RG_INTEGER;if(n===Wl)return s.RGBA_INTEGER;if(n===qo||n===Xo||n===jo||n===Ko)if(a===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Xl||n===jl||n===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Jl||n===Zl||n===$l||n===Ql||n===Yo||n===eu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yl||n===Jl)return a===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$l)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yo)return r.COMPRESSED_RG11_EAC;if(n===eu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tu||n===nu||n===iu||n===su||n===ru||n===au||n===ou||n===cu||n===lu||n===uu||n===hu||n===fu||n===du||n===pu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===iu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===su)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===au)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ou)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===du)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pu)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mu||n===gu||n===xu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mu)return a===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bu||n===vu||n===Jo||n===_u)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_u)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ca?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ht({vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bf=class extends Fi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Of,p={},_=t.getContextAttributes(),M=null,y=null,S=[],b=[],w=new ve,v=null,E=null,A=new mn;A.viewport=new wt;let C=new mn;C.viewport=new wt;let L=[A,C],U=new Il,D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=S[ee];return se===void 0&&(se=new xa,S[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=S[ee];return se===void 0&&(se=new xa,S[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=S[ee];return se===void 0&&(se=new xa,S[ee]=se),se.getHandSpace()};function B(ee){let se=b.indexOf(ee.inputSource);if(se===-1)return;let Ae=S[se];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,l||a),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function k(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",J);for(let ee=0;ee<S.length;ee++){let se=b[ee];se!==null&&(b[ee]=null,S[ee].disconnect(se))}D=null,F=null,g.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(M),d=null,h=null,f=null,i=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),E!==null){let ee=E.camera;ee.fov=E.fov,ee.zoom=E.zoom,ee.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",k),i.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ze=null,Re=null;_.depth&&(Re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=_.stencil?Ks:Wi,Ze=_.stencil?Ca:Bi);let vt={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(vt),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new vn(h.textureWidth,h.textureHeight,{format:Hn,type:ti,depthTexture:new qs(h.textureWidth,h.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Ae),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new vn(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(ee){for(let se=0;se<ee.removed.length;se++){let Ae=ee.removed[se],Ze=b.indexOf(Ae);Ze>=0&&(b[Ze]=null,S[Ze].disconnect(Ae))}for(let se=0;se<ee.added.length;se++){let Ae=ee.added[se],Ze=b.indexOf(Ae);if(Ze===-1){for(let vt=0;vt<S.length;vt++)if(vt>=b.length){b.push(Ae),Ze=vt;break}else if(b[vt]===null){b[vt]=Ae,Ze=vt;break}if(Ze===-1)break}let Re=S[Ze];Re&&Re.connect(Ae)}}let X=new I,Y=new I;function Q(ee,se,Ae){X.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(Ae.matrixWorld);let Ze=X.distanceTo(Y),Re=se.projectionMatrix.elements,vt=Ae.projectionMatrix.elements,jt=Re[14]/(Re[10]-1),lt=Re[14]/(Re[10]+1),Ue=(Re[9]+1)/Re[5],ot=(Re[9]-1)/Re[5],pt=(Re[8]-1)/Re[0],oe=(vt[8]+1)/vt[0],xe=jt*pt,He=jt*oe,it=Ze/(-pt+oe),st=it*-pt;if(se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(st),ee.translateZ(it),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Re[10]===-1)ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let H=jt+it,Dt=lt+it,mt=xe-st,N=He+(Ze-st),T=Ue*lt/Dt*H,j=ot*lt/Dt*H;ee.projectionMatrix.makePerspective(mt,N,T,j,H,Dt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function de(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let se=ee.near,Ae=ee.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),U.near=C.near=A.near=se,U.far=C.far=A.far=Ae,(D!==U.near||F!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,F=U.far),U.layers.mask=ee.layers.mask|6,A.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;let Ze=ee.parent,Re=U.cameras;de(U,Ze);for(let vt=0;vt<Re.length;vt++)de(Re[vt],Ze);Re.length===2?Q(U,A,C):U.projectionMatrix.copy(A.projectionMatrix),E===null&&ee.isPerspectiveCamera&&(E={camera:ee,fov:ee.fov,zoom:ee.zoom}),ye(ee,U,Ze)};function ye(ee,se,Ae){Ae===null?ee.matrix.copy(se.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=br*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(ee){c=ee,h!==null&&(h.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(ee){return p[ee]};let Ve=null;function Ye(ee,se){if(u=se.getViewerPose(l||a),m=se,u!==null){let Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ze=!1;Ae.length!==U.cameras.length&&(U.cameras.length=0,Ze=!0);for(let lt=0;lt<Ae.length;lt++){let Ue=Ae[lt],ot=null;if(d!==null)ot=d.getViewport(Ue);else{let oe=f.getViewSubImage(h,Ue);ot=oe.viewport,lt===0&&(e.setRenderTargetTextures(y,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(y))}let pt=L[lt];pt===void 0&&(pt=new mn,pt.layers.enable(lt),pt.viewport=new wt,L[lt]=pt),pt.matrix.fromArray(Ue.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ue.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ot.x,ot.y,ot.width,ot.height),lt===0&&(U.matrix.copy(pt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ze===!0&&U.cameras.push(pt)}let Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let lt=f.getDepthInformation(Ae[0]);lt&&lt.isValid&&lt.texture&&g.init(lt,i.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let lt=0;lt<Ae.length;lt++){let Ue=Ae[lt].camera;if(Ue){let ot=p[Ue];ot||(ot=new Io,p[Ue]=ot);let pt=f.getCameraImage(Ue);ot.sourceTexture=pt}}}}for(let Ae=0;Ae<S.length;Ae++){let Ze=b[Ae],Re=S[Ae];Ze!==null&&Re!==void 0&&Re.update(Ze,se,l||a)}Ve&&Ve(ee,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}let Qe=new Gm;Qe.setAnimationLoop(Ye),this.setAnimationLoop=function(ee){Ve=ee},this.dispose=function(){}}},i1=new qe,Km=new gt;Km.set(-1,0,0,0,1,0,0,0,1);function s1(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,mf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,_,M,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,_,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,y=_.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Km),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,_,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function r1(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function l(y,S){let b=i[y.id];b===void 0&&(g(y),b=u(y),i[y.id]=b,y.addEventListener("dispose",_));let w=S.program;n.updateUBOMapping(y,w);let v=e.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function u(y){let S=f();y.__bindingPointIndex=S;let b=s.createBuffer(),w=y.__size,v=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=i[y.id],b=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let v=0,E=b.length;v<E;v++){let A=b[v];if(Array.isArray(A))for(let C=0,L=A.length;C<L;C++)d(A[C],v,C,w);else d(A,v,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,S,b,w){if(x(y,S,b,w)===!0){let v=y.__offset,E=y.value;if(Array.isArray(E)){let A=0;for(let C=0;C<E.length;C++){let L=E[C],U=p(L);m(L,y.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,y.__data)}}function m(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function x(y,S,b,w){let v=y.value,E=S+"_"+b;if(w[E]===void 0)return typeof v=="number"||typeof v=="boolean"?w[E]=v:ArrayBuffer.isView(v)?w[E]=v.slice():w[E]=v.clone(),!0;{let A=w[E];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function g(y){let S=y.uniforms,b=0,w=16;for(let E=0,A=S.length;E<A;E++){let C=Array.isArray(S[E])?S[E]:[S[E]];for(let L=0,U=C.length;L<U;L++){let D=C[L],F=Array.isArray(D.value)?D.value:[D.value];for(let B=0,k=F.length;B<k;B++){let J=F[B],X=p(J),Y=b%w,Q=Y%X.boundary,de=Y+Q;b+=Q,de!==0&&w-de<X.storage&&(b+=w-de),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=X.storage}}}let v=b%w;return v>0&&(b+=w-v),y.__size=b,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",y),S}function _(y){let S=y.target;S.removeEventListener("dispose",_);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function M(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:M}}var a1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function o1(){return Ji===null&&(Ji=new Ui(a1,16,16,Ys,Fn),Ji.name="DFG_LUT",Ji.minFilter=Yt,Ji.magFilter=Yt,Ji.wrapS=xi,Ji.wrapT=xi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Cu=class{constructor(e={}){let{canvas:t=dm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ti}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=d,g=new Set([Wl,Vl,Gl]),p=new Set([ti,Bi,Ra,Ca,zl,Hl]),_=new Uint32Array(4),M=new Int32Array(4),y=new I,S=null,b=null,w=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,L=null,U=null,D=null,F=null;this._outputColorSpace=qt;let B=0,k=0,J=null,X=-1,Y=null,Q=new wt,de=new wt,ye=null,Ve=new Oe(0),Ye=0,Qe=t.width,ee=t.height,se=1,Ae=null,Ze=null,Re=new wt(0,0,Qe,ee),vt=new wt(0,0,Qe,ee),jt=!1,lt=new Ws,Ue=!1,ot=!1,pt=new qe,oe=new I,xe=new wt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function st(){return J===null?se:1}let H=n;function Dt(R,O){return t.getContext(R,O)}let mt,N,T,j,Z,te,be,me,ne,ie,Se,We,Ce,we,Je,rt,ct,V,Pe,ae,Ie,Fe,ce;try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Vt,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),H===null){let O="webgl2";if(H=Dt(O,R),H===null)throw Dt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(R){throw t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Vt,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),ft("WebGLRenderer: "+R.message),R}function et(){mt=new p_(H),mt.init(),Ie=new e1(H,mt),N=new s_(H,mt,e,Ie),T=new $y(H,mt),N.reversedDepthBuffer&&h&&T.buffers.depth.setReversed(!0),U=H.createFramebuffer(),D=H.createFramebuffer(),F=H.createFramebuffer(),j=new x_(H),Z=new By,te=new Qy(H,mt,T,Z,N,Ie,j),be=new d_(A),me=new vx(H),Fe=new n_(H,me),ne=new m_(H,me,j,Fe),ie=new v_(H,ne,me,Fe,j),V=new b_(H,N,te),Je=new r_(Z),Se=new Oy(A,be,mt,N,Fe,Je),We=new s1(A,Z),Ce=new zy,we=new Xy(mt),ct=new t_(A,be,T,ie,m,c),rt=new Zy(A,ie,N),ce=new r1(H,j,N,T),Pe=new i_(H,mt,j),ae=new g_(H,mt,j),j.programs=Se.programs,A.capabilities=N,A.extensions=mt,A.properties=Z,A.renderLists=Ce,A.shadowMap=rt,A.state=T,A.info=j}x!==ti&&(E=new y_(x,t.width,t.height,o,i,r));let ke=new Bf(A,H);this.xr=ke,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(R){R!==void 0&&(se=R,this.setSize(Qe,ee,!1))},this.getSize=function(R){return R.set(Qe,ee)},this.setSize=function(R,O,q=!0){if(ke.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=R,ee=O,t.width=Math.floor(R*se),t.height=Math.floor(O*se),q===!0&&(t.style.width=R+"px",t.style.height=O+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(Qe*se,ee*se).floor()},this.setDrawingBufferSize=function(R,O,q){Qe=R,ee=O,se=q,t.width=Math.floor(R*q),t.height=Math.floor(O*q),this.setViewport(0,0,R,O)},this.setEffects=function(R){if(x===ti){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let O=0;O<R.length;O++)if(R[O].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Q)},this.getViewport=function(R){return R.copy(Re)},this.setViewport=function(R,O,q,G){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,O,q,G),T.viewport(Q.copy(Re).multiplyScalar(se).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,O,q,G){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,O,q,G),T.scissor(de.copy(vt).multiplyScalar(se).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(R){T.setScissorTest(jt=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){Ze=R},this.getClearColor=function(R){return R.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(R=!0,O=!0,q=!0){let G=0;if(R){let K=!1;if(J!==null){let pe=J.texture.format;K=g.has(pe)}if(K){let pe=J.texture.type,Ee=p.has(pe),ge=ct.getClearColor(),Le=ct.getClearAlpha(),le=ge.r,Xe=ge.g,je=ge.b;Ee?(_[0]=le,_[1]=Xe,_[2]=je,_[3]=Le,H.clearBufferuiv(H.COLOR,0,_)):(M[0]=le,M[1]=Xe,M[2]=je,M[3]=Le,H.clearBufferiv(H.COLOR,0,M))}else G|=H.COLOR_BUFFER_BIT}O&&(G|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Vt,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),ct.dispose(),Ce.dispose(),we.dispose(),Z.dispose(),be.dispose(),ie.dispose(),Fe.dispose(),ce.dispose(),Se.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Qa),ke.removeEventListener("sessionend",eo),Hi.stop()};function Gt(R){R.preventDefault(),yo("WebGLRenderer: Context Lost."),C=!0}function Vt(){yo("WebGLRenderer: Context Restored."),C=!1;let R=j.autoReset,O=rt.enabled,q=rt.autoUpdate,G=rt.needsUpdate,K=rt.type;et(),j.autoReset=R,rt.enabled=O,rt.autoUpdate=q,rt.needsUpdate=G,rt.type=K}function Wt(R){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pi(R){let O=R.target;O.removeEventListener("dispose",pi),sh(O)}function sh(R){rh(R),Z.remove(R)}function rh(R){let O=Z.get(R).programs;O!==void 0&&(O.forEach(function(q){Se.releaseProgram(q)}),R.isShaderMaterial&&Se.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,q,G,K,pe){O===null&&(O=He);let Ee=K.isMesh&&K.matrixWorld.determinantAffine()<0,ge=De(R,O,q,G,K);T.setMaterial(G,Ee);let Le=q.index,le=1;if(G.wireframe===!0){if(Le=ne.getWireframeAttribute(q),Le===void 0)return;le=2}let Xe=q.drawRange,je=q.attributes.position,ue=Xe.start*le,$e=(Xe.start+Xe.count)*le;pe!==null&&(ue=Math.max(ue,pe.start*le),$e=Math.min($e,(pe.start+pe.count)*le)),Le!==null?(ue=Math.max(ue,0),$e=Math.min($e,Le.count)):je!=null&&(ue=Math.max(ue,0),$e=Math.min($e,je.count));let ut=$e-ue;if(ut<0||ut===1/0)return;Fe.setup(K,G,ge,q,Le);let yt,Mt=Pe;if(Le!==null&&(yt=me.get(Le),Mt=ae,Mt.setIndex(yt)),K.isMesh)G.wireframe===!0?(T.setLineWidth(G.wireframeLinewidth*st()),Mt.setMode(H.LINES)):Mt.setMode(H.TRIANGLES);else if(K.isLine){let nn=G.linewidth;nn===void 0&&(nn=1),T.setLineWidth(nn*st()),K.isLineSegments?Mt.setMode(H.LINES):K.isLineLoop?Mt.setMode(H.LINE_LOOP):Mt.setMode(H.LINE_STRIP)}else K.isPoints?Mt.setMode(H.POINTS):K.isSprite&&Mt.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let nn=K._multiDrawStarts,he=K._multiDrawCounts,sn=K._multiDrawCount,Ft=Le?me.get(Le).bytesPerElement:1,qn=Z.get(G).currentProgram.getUniforms();for(let Xn=0;Xn<sn;Xn++)qn.setValue(H,"_gl_DrawID",Xn),Mt.render(nn[Xn]/Ft,he[Xn])}else if(K.isInstancedMesh)Mt.renderInstances(ue,ut,K.count);else if(q.isInstancedBufferGeometry){let nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,he=Math.min(q.instanceCount,nn);Mt.renderInstances(ue,ut,he)}else Mt.render(ue,ut)};function Mc(R,O,q,G){L!==null&&R.isNodeMaterial&&L.setObject(G,R),Ue===!0&&Je.setState(R,q,!1),R.transparent===!0&&R.side===Lt&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,z(R,O,G),R.side=Ki,R.needsUpdate=!0,z(R,O,G),R.side=Lt):z(R,O,G)}this.compile=function(R,O,q=null){q===null&&(q=R),L!==null&&L.renderStart(R,O,q),b=we.get(q),b.init(O),v.push(b),q.traverseVisible(function(K){K.isLight&&K.layers.test(O.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),R!==q&&R.traverseVisible(function(K){K.isLight&&K.layers.test(O.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),ot=this.localClippingEnabled,Ue=Je.init(this.clippingPlanes,ot),Ue===!0&&Je.setGlobalState(this.clippingPlanes,O),L!==null&&rt.render(b.state.shadowsArray,q,O);let G=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let pe=K.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){let ge=pe[Ee];Mc(ge,q,O,K),G.add(ge)}else Mc(pe,q,O,K),G.add(pe)}),b=v.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(R,O,q=null){let G=this.compile(R,O,q);return new Promise(K=>{function pe(){if(G.forEach(function(Ee){let Le=Z.get(Ee).currentProgram;(Le===void 0||Le.isReady())&&G.delete(Ee)}),G.size===0){K(R);return}setTimeout(pe,10)}mt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let $a=null;function Sc(R){$a&&$a(R)}function Qa(){Hi.stop()}function eo(){Hi.start()}let Hi=new Gm;Hi.setAnimationLoop(Sc),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(R){$a=R,ke.setAnimationLoop(R),R===null?Hi.stop():Hi.start()},ke.addEventListener("sessionstart",Qa),ke.addEventListener("sessionend",eo),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(R,O);let q=ke.enabled===!0&&ke.isPresenting===!0,G=E!==null&&(J===null||q)&&E.begin(A,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(O),O=ke.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,O,J),b=we.get(R,v.length),b.init(O),b.state.textureUnits=te.getTextureUnits(),v.push(b),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),lt.setFromProjectionMatrix(pt,Li,O.reversedDepth),ot=this.localClippingEnabled,Ue=Je.init(this.clippingPlanes,ot),S=Ce.get(R,w.length),S.init(),w.push(S),ke.enabled===!0&&ke.isPresenting===!0){let Ee=A.xr.getDepthSensingMesh();Ee!==null&&to(Ee,O,-1/0,A.sortObjects)}to(R,O,0,A.sortObjects),S.finish(),L!==null&&L.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(Ae,Ze),it=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,it&&ct.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ue===!0&&Je.beginShadows();let K=b.state.shadowsArray;if(rt.render(K,R,O),Ue===!0&&Je.endShadows(),(G&&E.hasRenderPass())===!1){let Ee=S.opaque,ge=S.transmissive;if(b.setupLights(),O.isArrayCamera){let Le=O.cameras;if(ge.length>0)for(let le=0,Xe=Le.length;le<Xe;le++){let je=Le[le];Is(Ee,ge,R,je)}it&&ct.render(R);for(let le=0,Xe=Le.length;le<Xe;le++){let je=Le[le];no(S,R,je,je.viewport)}}else ge.length>0&&Is(Ee,ge,R,O),it&&ct.render(R),no(S,R,O)}J!==null&&k===0&&(te.updateMultisampleRenderTarget(J),te.updateRenderTargetMipmap(J)),G&&E.end(A),R.isScene===!0&&R.onAfterRender(A,R,O),Fe.resetDefaultState(),X=-1,Y=null,v.pop(),v.length>0?(b=v[v.length-1],te.setTextureUnits(b.state.textureUnits),Ue===!0&&Je.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,L!==null&&L.renderEnd()};function to(R,O,q,G){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(lt)){G&&xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);let Ee=ie.update(R),ge=R.material;ge.visible&&S.push(R,Ee,ge,q,xe.z,null,O)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(lt))){let Ee=ie.update(R),ge=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xe.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),xe.copy(Ee.boundingSphere.center)),xe.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(ge)){let Le=Ee.groups;for(let le=0,Xe=Le.length;le<Xe;le++){let je=Le[le],ue=ge[je.materialIndex];ue&&ue.visible&&S.push(R,Ee,ue,q,xe.z,je,O)}}else ge.visible&&S.push(R,Ee,ge,q,xe.z,null,O)}}let pe=R.children;for(let Ee=0,ge=pe.length;Ee<ge;Ee++)to(pe[Ee],O,q,G)}function no(R,O,q,G){let{opaque:K,transmissive:pe,transparent:Ee}=R;b.setupLightsView(q),Ue===!0&&Je.setGlobalState(A.clippingPlanes,q),G&&T.viewport(Q.copy(G)),K.length>0&&mi(K,O,q),pe.length>0&&mi(pe,O,q),Ee.length>0&&mi(Ee,O,q),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Is(R,O,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let ue=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new vn(1,1,{generateMipmaps:!0,type:ue?Fn:ti,minFilter:ui,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}let pe=b.state.transmissionRenderTarget[G.id],Ee=G.viewport||Q;pe.setSize(Ee.z*A.transmissionResolutionScale,Ee.w*A.transmissionResolutionScale);let ge=A.getRenderTarget(),Le=A.getActiveCubeFace(),le=A.getActiveMipmapLevel();A.setRenderTarget(pe),A.getClearColor(Ve),Ye=A.getClearAlpha(),Ye<1&&A.setClearColor(16777215,.5),A.clear(),it&&ct.render(q);let Xe=A.toneMapping;A.toneMapping=Oi;let je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Ue===!0&&Je.setGlobalState(A.clippingPlanes,G),mi(R,q,G),te.updateMultisampleRenderTarget(pe),te.updateRenderTargetMipmap(pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let $e=0,ut=O.length;$e<ut;$e++){let yt=O[$e],{object:Mt,geometry:nn,material:he,group:sn}=yt;if(he.side===Lt&&Mt.layers.test(G.layers)){let Ft=he.side;he.side=Dn,he.needsUpdate=!0,P(Mt,q,G,nn,he,sn),he.side=Ft,he.needsUpdate=!0,ue=!0}}ue===!0&&(te.updateMultisampleRenderTarget(pe),te.updateRenderTargetMipmap(pe))}A.setRenderTarget(ge,Le,le),A.setClearColor(Ve,Ye),je!==void 0&&(G.viewport=je),A.toneMapping=Xe}function mi(R,O,q){let G=O.isScene===!0?O.overrideMaterial:null;for(let K=0,pe=R.length;K<pe;K++){let Ee=R[K],{object:ge,geometry:Le,group:le}=Ee,Xe=Ee.material;Xe.allowOverride===!0&&G!==null&&(Xe=G),ge.layers.test(q.layers)&&P(ge,O,q,Le,Xe,le)}}function P(R,O,q,G,K,pe){L!==null&&K.isNodeMaterial&&L.setObject(R,K),R.onBeforeRender(A,O,q,G,K,pe),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(A,O,q,G,R,pe),K.transparent===!0&&K.side===Lt&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,A.renderBufferDirect(q,O,G,K,R,pe),K.side=Ki,K.needsUpdate=!0,A.renderBufferDirect(q,O,G,K,R,pe),K.side=Lt):A.renderBufferDirect(q,O,G,K,R,pe),R.onAfterRender(A,O,q,G,K,pe)}function z(R,O,q){O.isScene!==!0&&(O=He);let G=Z.get(R),K=b.state.lights,pe=b.state.shadowsArray,Ee=K.state.version,ge=Se.getParameters(R,K.state,pe,O,q,b.state.lightProbeGridArray),Le=Se.getProgramCacheKey(ge),le=G.programs;G.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Xe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;G.envMap=be.get(R.envMap||G.environment,Xe),G.envMapRotation=G.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,le===void 0&&(R.addEventListener("dispose",pi),le=new Map,G.programs=le);let je=le.get(Le);if(je!==void 0){if(G.currentProgram===je&&G.lightsStateVersion===Ee)return $(R,ge),je}else ge.uniforms=Se.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,q,ge),R.onBeforeCompile(ge,A),je=Se.acquireProgram(ge,Le),le.set(Le,je),G.uniforms=ge.uniforms;let ue=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ue.clippingPlanes=Je.uniform),$(R,ge),G.needsLights=Ge(R),G.lightsStateVersion=Ee,G.needsLights&&(ue.ambientLightColor.value=K.state.ambient,ue.lightProbe.value=K.state.probe,ue.sunLights.value=K.state.sun,ue.sunLightShadows.value=K.state.sunShadow,ue.directionalLights.value=K.state.directional,ue.directionalLightShadows.value=K.state.directionalShadow,ue.spotLights.value=K.state.spot,ue.spotLightShadows.value=K.state.spotShadow,ue.rectAreaLights.value=K.state.rectArea,ue.ltc_1.value=K.state.rectAreaLTC1,ue.ltc_2.value=K.state.rectAreaLTC2,ue.pointLights.value=K.state.point,ue.pointLightShadows.value=K.state.pointShadow,ue.hemisphereLights.value=K.state.hemi,ue.sunShadowMatrix.value=K.state.sunShadowMatrix,ue.sunShadowCascade.value=K.state.sunShadowCascade,ue.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ue.spotLightMatrix.value=K.state.spotLightMatrix,ue.spotLightMap.value=K.state.spotLightMap,ue.pointShadowMatrix.value=K.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=je,G.uniformsList=null,je}function W(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=Na.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function $(R,O){let q=Z.get(R);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function fe(R,O){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let q=0,G=R.length;q<G;q++){let K=R[q];if(K.texture!==null&&K.boundingBox.containsPoint(y))return K}return null}function De(R,O,q,G,K){O.isScene!==!0&&(O=He),te.resetTextureUnits();let pe=O.fog,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,ge=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ct.workingColorSpace,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,le=be.get(G.envMap||Ee,Le),Xe=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ue=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color,yt=Oi;G.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(yt=A.toneMapping);let Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nn=Mt!==void 0?Mt.length:0,he=Z.get(G),sn=b.state.lights;if(Ue===!0&&(ot===!0||R!==Y)){let rn=R===Y&&G.id===X;Je.setState(G,R,rn)}let Ft=!1;G.version===he.__version?(he.needsLights&&he.lightsStateVersion!==sn.state.version||he.outputColorSpace!==ge||K.isBatchedMesh&&he.batching===!1||!K.isBatchedMesh&&he.batching===!0||K.isBatchedMesh&&he.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&he.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&he.instancing===!1||!K.isInstancedMesh&&he.instancing===!0||K.isSkinnedMesh&&he.skinning===!1||!K.isSkinnedMesh&&he.skinning===!0||K.isInstancedMesh&&he.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&he.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&he.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&he.instancingMorph===!1&&K.morphTexture!==null||he.envMap!==le||G.fog===!0&&he.fog!==pe||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==Je.numPlanes||he.numIntersection!==Je.numIntersection)||he.vertexAlphas!==Xe||he.vertexTangents!==je||he.morphTargets!==ue||he.morphNormals!==$e||he.morphColors!==ut||he.toneMapping!==yt||he.morphTargetsCount!==nn||!!he.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ft=!0):(Ft=!0,he.__version=G.version);let qn=he.currentProgram;Ft===!0&&(qn=z(G,O,K),L&&G.isNodeMaterial&&L.onUpdateProgram(G,qn,he));let Xn=!1,Ls=!1,Wr=!1,Zt=qn.getUniforms(),pn=he.uniforms;if(T.useProgram(qn.program)&&(Xn=!0,Ls=!0,Wr=!0),G.id!==X&&(X=G.id,Ls=!0),he.needsLights){let rn=fe(b.state.lightProbeGridArray,K);he.lightProbeGrid!==rn&&(he.lightProbeGrid=rn,Ls=!0)}if(Xn||Y!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Zt.setValue(H,"projectionMatrix",R.projectionMatrix),Zt.setValue(H,"viewMatrix",R.matrixWorldInverse);let Fs=Zt.map.cameraPosition;Fs!==void 0&&Fs.setValue(H,oe.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&Zt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Zt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,Ls=!0,Wr=!0)}if(he.needsLights&&(sn.state.sunShadowMap.length>0&&Zt.setValue(H,"sunShadowMap",sn.state.sunShadowMap,te),sn.state.directionalShadowMap.length>0&&Zt.setValue(H,"directionalShadowMap",sn.state.directionalShadowMap,te),sn.state.spotShadowMap.length>0&&Zt.setValue(H,"spotShadowMap",sn.state.spotShadowMap,te),sn.state.pointShadowMap.length>0&&Zt.setValue(H,"pointShadowMap",sn.state.pointShadowMap,te)),K.isSkinnedMesh){Zt.setOptional(H,K,"bindMatrix"),Zt.setOptional(H,K,"bindMatrixInverse");let rn=K.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Zt.setValue(H,"boneTexture",rn.boneTexture,te))}K.isBatchedMesh&&(Zt.setOptional(H,K,"batchingTexture"),Zt.setValue(H,"batchingTexture",K._matricesTexture,te),Zt.setOptional(H,K,"batchingIdTexture"),Zt.setValue(H,"batchingIdTexture",K._indirectTexture,te),Zt.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Zt.setValue(H,"batchingColorTexture",K._colorsTexture,te));let Ds=q.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&V.update(K,q,qn),(Ls||he.receiveShadow!==K.receiveShadow)&&(he.receiveShadow=K.receiveShadow,Zt.setValue(H,"receiveShadow",K.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(pn.envMapIntensity.value=O.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=o1()),Ls){if(Zt.setValue(H,"toneMappingExposure",A.toneMappingExposure),he.needsLights&&Me(pn,Wr),pe&&G.fog===!0&&We.refreshFogUniforms(pn,pe),We.refreshMaterialUniforms(pn,G,se,ee,b.state.transmissionRenderTarget[R.id]),he.needsLights&&he.lightProbeGrid){let rn=he.lightProbeGrid;pn.probesSH.value=rn.texture,pn.probesMin.value.copy(rn.boundingBox.min),pn.probesMax.value.copy(rn.boundingBox.max),pn.probesResolution.value.copy(rn.resolution)}Na.upload(H,W(he),pn,te)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Na.upload(H,W(he),pn,te),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Zt.setValue(H,"center",K.center),Zt.setValue(H,"modelViewMatrix",K.modelViewMatrix),Zt.setValue(H,"normalMatrix",K.normalMatrix),Zt.setValue(H,"modelMatrix",K.matrixWorld),G.uniformsGroups!==void 0){let rn=G.uniformsGroups;for(let Fs=0,qr=rn.length;Fs<qr;Fs++){let Hd=rn[Fs];ce.update(Hd,qn),ce.bind(Hd,qn)}}return qn}function Me(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.sunLights.needsUpdate=O,R.sunLightShadows.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Ge(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,O,q){let G=Z.get(R);G.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Z.get(R.texture).__webglTexture=O,Z.get(R.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,O){let q=Z.get(R);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,q=0){J=R,B=O,k=q;let G=null,K=!1,pe=!1;if(R){let ge=Z.get(R);if(ge.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(H.FRAMEBUFFER,ge.__webglFramebuffer),Q.copy(R.viewport),de.copy(R.scissor),ye=R.scissorTest,T.viewport(Q),T.scissor(de),T.setScissorTest(ye),X=-1;return}else if(ge.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(ge.__hasExternalTextures)te.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Xe=R.depthTexture;if(ge.__boundDepthTexture!==Xe){if(Xe!==null&&Z.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}let Le=R.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);let le=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[O])?G=le[O][q]:G=le[O],K=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?G=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?G=le[q]:G=le,Q.copy(R.viewport),de.copy(R.scissor),ye=R.scissorTest}else Q.copy(Re).multiplyScalar(se).floor(),de.copy(vt).multiplyScalar(se).floor(),ye=jt;if(q!==0&&(G=U),T.bindFramebuffer(H.FRAMEBUFFER,G)&&T.drawBuffers(R,G),T.viewport(Q),T.scissor(de),T.setScissorTest(ye),K){let ge=Z.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,q)}else if(pe){let ge=O;for(let Le=0;Le<R.textures.length;Le++){let le=Z.get(R.textures[Le]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Le,le.__webglTexture,q,ge)}}else if(R!==null&&q!==0){let ge=Z.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ge.__webglTexture,q)}X=-1};function Rt(R){let O=Z.get(R);return(O.__readFormat!==R.format||O.__readType!==R.type)&&(O.__readFormat=R.format,O.__readType=R.type,O.__formatReadable=N.textureFormatReadable(R.format),O.__typeReadable=N.textureTypeReadable(R.type)),O}this.readRenderTargetPixels=function(R,O,q,G,K,pe,Ee,ge=0){if(!(R&&R.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){T.bindFramebuffer(H.FRAMEBUFFER,Le);try{let le=R.textures[ge],Xe=le.format,je=le.type;R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ge);let ue=Rt(le);if(ue.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ue.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-G&&q>=0&&q<=R.height-K&&H.readPixels(O,q,G,K,Ie.convert(Xe),Ie.convert(je),pe)}finally{let le=J!==null?Z.get(J).__webglFramebuffer:null;T.bindFramebuffer(H.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(R,O,q,G,K,pe,Ee,ge=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le)if(O>=0&&O<=R.width-G&&q>=0&&q<=R.height-K){T.bindFramebuffer(H.FRAMEBUFFER,Le);let le=R.textures[ge],Xe=le.format,je=le.type;R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ge);let ue=Rt(le);if(ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.bufferData(H.PIXEL_PACK_BUFFER,pe.byteLength,H.STREAM_READ),H.readPixels(O,q,G,K,Ie.convert(Xe),Ie.convert(je),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let ut=J!==null?Z.get(J).__webglFramebuffer:null;T.bindFramebuffer(H.FRAMEBUFFER,ut);let yt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mm(H,yt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,pe),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer($e),H.deleteSync(yt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,O=null,q=0){let G=Math.pow(2,-q),K=Math.floor(R.image.width*G),pe=Math.floor(R.image.height*G),Ee=O!==null?O.x:0,ge=O!==null?O.y:0;te.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,Ee,ge,K,pe),T.unbindTexture()},this.copyTextureToTexture=function(R,O,q=null,G=null,K=0,pe=0){let Ee,ge,Le,le,Xe,je,ue,$e,ut,yt=R.isCompressedTexture?R.mipmaps[pe]:R.image;if(q!==null)Ee=q.max.x-q.min.x,ge=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,le=q.min.x,Xe=q.min.y,je=q.isBox3?q.min.z:0;else{let pn=Math.pow(2,-K);Ee=Math.floor(yt.width*pn),ge=Math.floor(yt.height*pn),R.isDataArrayTexture?Le=yt.depth:R.isData3DTexture?Le=Math.floor(yt.depth*pn):Le=1,le=0,Xe=0,je=0}G!==null?(ue=G.x,$e=G.y,ut=G.z):(ue=0,$e=0,ut=0);let Mt=Ie.convert(O.format),nn=Ie.convert(O.type),he;O.isData3DTexture?(te.setTexture3D(O,0),he=H.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(te.setTexture2DArray(O,0),he=H.TEXTURE_2D_ARRAY):(te.setTexture2D(O,0),he=H.TEXTURE_2D),T.activeTexture(H.TEXTURE0),T.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);let sn=T.getParameter(H.UNPACK_ROW_LENGTH),Ft=T.getParameter(H.UNPACK_IMAGE_HEIGHT),qn=T.getParameter(H.UNPACK_SKIP_PIXELS),Xn=T.getParameter(H.UNPACK_SKIP_ROWS),Ls=T.getParameter(H.UNPACK_SKIP_IMAGES);T.pixelStorei(H.UNPACK_ROW_LENGTH,yt.width),T.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yt.height),T.pixelStorei(H.UNPACK_SKIP_PIXELS,le),T.pixelStorei(H.UNPACK_SKIP_ROWS,Xe),T.pixelStorei(H.UNPACK_SKIP_IMAGES,je);let Wr=R.isDataArrayTexture||R.isData3DTexture,Zt=O.isDataArrayTexture||O.isData3DTexture;if(R.isDepthTexture){let pn=Z.get(R),Ds=Z.get(O),rn=Z.get(pn.__renderTarget),Fs=Z.get(Ds.__renderTarget);T.bindFramebuffer(H.READ_FRAMEBUFFER,rn.__webglFramebuffer),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let qr=0;qr<Le;qr++)Wr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,K,je+qr),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(O).__webglTexture,pe,ut+qr)),H.blitFramebuffer(le,Xe,Ee,ge,ue,$e,Ee,ge,H.DEPTH_BUFFER_BIT,H.NEAREST);T.bindFramebuffer(H.READ_FRAMEBUFFER,null),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Z.has(R)){let pn=Z.get(R),Ds=Z.get(O);T.bindFramebuffer(H.READ_FRAMEBUFFER,D),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,F);for(let rn=0;rn<Le;rn++)Wr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,K,je+rn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,K),Zt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ds.__webglTexture,pe,ut+rn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ds.__webglTexture,pe),K!==0?H.blitFramebuffer(le,Xe,Ee,ge,ue,$e,Ee,ge,H.COLOR_BUFFER_BIT,H.NEAREST):Zt?H.copyTexSubImage3D(he,pe,ue,$e,ut+rn,le,Xe,Ee,ge):H.copyTexSubImage2D(he,pe,ue,$e,le,Xe,Ee,ge);T.bindFramebuffer(H.READ_FRAMEBUFFER,null),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Zt?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(he,pe,ue,$e,ut,Ee,ge,Le,Mt,nn,yt.data):O.isCompressedArrayTexture?H.compressedTexSubImage3D(he,pe,ue,$e,ut,Ee,ge,Le,Mt,yt.data):H.texSubImage3D(he,pe,ue,$e,ut,Ee,ge,Le,Mt,nn,yt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,pe,ue,$e,Ee,ge,Mt,nn,yt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,pe,ue,$e,yt.width,yt.height,Mt,yt.data):H.texSubImage2D(H.TEXTURE_2D,pe,ue,$e,Ee,ge,Mt,nn,yt);T.pixelStorei(H.UNPACK_ROW_LENGTH,sn),T.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft),T.pixelStorei(H.UNPACK_SKIP_PIXELS,qn),T.pixelStorei(H.UNPACK_SKIP_ROWS,Xn),T.pixelStorei(H.UNPACK_SKIP_IMAGES,Ls),pe===0&&O.generateMipmaps&&H.generateMipmap(he),T.unbindTexture()},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){B=0,k=0,J=null,T.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}};function cn(s){let e=s>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Fr=new Uint8Array(512);{let s=cn(1337),e=[...Array(256).keys()];for(let t=255;t>0;t--){let n=Math.floor(s()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)Fr[t]=e[t&255]}var kf=[1,-1,1,-1,1,-1,0,0],zf=[1,1,-1,-1,0,0,1,-1],c1=.5*(Math.sqrt(3)-1),nc=(3-Math.sqrt(3))/6;function dt(s,e){let t=(s+e)*c1,n=Math.floor(s+t),i=Math.floor(e+t),r=(n+i)*nc,a=s-(n-r),o=e-(i-r),c=a>o?1:0,l=1-c,u=a-c+nc,f=o-l+nc,h=a-1+2*nc,d=o-1+2*nc,m=n&255,x=i&255,g=0,p;if(p=.5-a*a-o*o,p>0){let _=Fr[m+Fr[x]]&7;p*=p,g+=p*p*(kf[_]*a+zf[_]*o)}if(p=.5-u*u-f*f,p>0){let _=Fr[m+c+Fr[x+l]]&7;p*=p,g+=p*p*(kf[_]*u+zf[_]*f)}if(p=.5-h*h-d*d,p>0){let _=Fr[m+1+Fr[x+1]]&7;p*=p,g+=p*p*(kf[_]*h+zf[_]*d)}return 70*g}function Nn(s,e,t=4){let n=.5,i=1,r=0;for(let a=0;a<t;a++)r+=n*dt(s*i+a*17.1,e*i-a*9.3),i*=2.03,n*=.5;return r}var at=(s,e,t)=>s<e?e:s>t?t:s,re=(s,e,t)=>{let n=at((t-s)/(e-s),0,1);return n*n*(3-2*n)},Ke=(s,e,t)=>s+(e-s)*t,Ut=(s,e,t)=>[s[0]+(e[0]-s[0])*t,s[1]+(e[1]-s[1])*t,s[2]+(e[2]-s[2])*t];function Te(s){return[s>>16&255,s>>8&255,s&255].map(t=>(t/=255,t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)))}var ht={uTime:{value:0},uSunDir:{value:new I(0,.3,-1).normalize()},uSunView:{value:new I},uSunCol:{value:new Oe(1,1,1)},uSkyTop:{value:new Oe},uSkyHor:{value:new Oe},uHaze:{value:new Oe},uFog:{value:new wt(.03,.1,.001,0)},uBoatS:{value:0},uBloomFront:{value:0},uPeach:{value:0},uWind:{value:new ve(.6,.2)},uCam:{value:new I},uFar:{value:new Oe},uDawn:{value:new Oe},uCloud:{value:0}},Jn=`
uniform vec3 uSunDir, uSunCol, uSkyTop, uSkyHor, uHaze, uFar, uDawn; uniform vec4 uFog; uniform float uTime, uCloud;
vec3 skyColor(vec3 rd){
  float y = rd.y; vec3 c = mix(uSkyHor, uSkyTop, pow(clamp(y, 0.0, 1.0), 0.42));
  c = mix(c, uHaze, smoothstep(0.03, -0.2, y));
  // \u7B2C\u4E00\u5E55\uFF1A\u592A\u9633\u90A3\u4E00\u4FA7\u7684\u5730\u5E73\u7EBF\u4E0A\u4E00\u62B9\u6DE1\u6DE1\u7684\u6843\u8272\u6668\u5149\uFF08\u9884\u793A\u524D\u9762\u7684\u6843\u6797\uFF09\uFF0C\u53EA\u5728\u8D34\u5730\u5E73\u7EBF\u7684\u7A84\u5E26\u91CC
  { vec2 hz = normalize(rd.xz + vec2(1e-5)), sz = normalize(uSunDir.xz + vec2(1e-5)); float az = max(dot(hz, sz), 0.0);
    c += uDawn * exp(-pow((y - 0.02) / 0.07, 2.0)) * (0.25 + 0.75 * az * az * az); }
  float sd = max(dot(rd, uSunDir), 0.0);
  c += uSunCol * (pow(sd, 5.0) * 0.16 + pow(sd, 40.0) * 0.35);
  return c;
}
float fogH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fogN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(fogH(i), fogH(i + vec2(1.0, 0.0)), f.x), mix(fogH(i + vec2(0.0, 1.0)), fogH(i + vec2(1.0, 1.0)), f.x), f.y); }
// \u4E91\u5F71\uFF1A\u6CBF\u592A\u9633\u65B9\u5411\u6295\u5230 520 m \u9AD8\u7684\u4E00\u5C42\u4E91\u4E0A\uFF0C\u6162\u6162\u98D8\u8FC7\u5C71\u8C37\uFF08\u53EA\u6709\u6843\u6E90\u5F00\u7740\uFF09
vec2 cloudQ(vec2 xz){ return xz * 0.0045 + vec2(uTime * 0.008, uTime * 0.003); } // \u4E91\u5C42\u5750\u6807\uFF1A\u4E00\u6735\u4E91\u4E00\u4E24\u767E\u7C73\uFF0C\u6162\u6162\u98D8
float cloudSh(vec3 p){
  if (uCloud <= 0.0) return 1.0;
  vec2 q = cloudQ(p.xz + uSunDir.xz / max(uSunDir.y, 0.12) * (520.0 - p.y));
  float n = fogN(q) * 0.65 + fogN(q * 2.3 + 4.7) * 0.35;
  return 1.0 - uCloud * 0.6 * smoothstep(0.5, 0.7, n);
}
vec3 applyFog(vec3 col, vec3 wp){
  vec3 ro = cameraPosition; vec3 v = wp - ro; float dist = length(v); vec3 rd = v / max(dist, 1e-4);
  float a = uFog.x, b = uFog.y; float ry = rd.y; if (abs(ry) < 1e-3) ry = 1e-3;
  if (uFog.w > 0.0) a *= 1.0 + uFog.w * (fogN(wp.xz * 0.0042 + vec2(uTime * 0.006, 0.0)) * 1.3 + fogN(wp.xz * 0.013 + 7.3) * 0.7 - 1.0); // \u6843\u6E90\uFF1A\u96FE\u4E00\u56E2\u4E00\u56E2\u7684\uFF0C\u4E0D\u662F\u4E00\u6574\u9762\u767D\u5899
  float fh = a * exp(-b * ro.y) * (1.0 - exp(-b * ry * dist)) / (b * ry);
  float fd = uFog.z * dist;
  float f = 1.0 - exp(-max(fh + fd, 0.0));
  float hs = clamp(fh / (fh + fd + 1e-5), 0.0, 1.0);
  vec3 fc = mix(skyColor(normalize(vec3(rd.x, max(rd.y, 0.0) * 0.4, rd.z))), uHaze, hs * 0.75);
  fc = mix(fc, uFar, (1.0 - hs) * smoothstep(0.0, 0.5, fd) * 0.6);
  float sd = max(dot(rd, uSunDir), 0.0);
  fc += uSunCol * (pow(sd, 5.0) * 0.42 + pow(sd, 24.0) * 0.3);
  return mix(col, fc, f);
}`;function Tt(s,e,t=""){return s.onBeforeCompile=n=>{for(let i in ht)n.uniforms[i]=ht[i];n.vertexShader=n.vertexShader.replace("#include <fog_pars_vertex>","varying vec3 vFogW;").replace("#include <fog_vertex>",`{ vec4 fw = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        fw = instanceMatrix * fw;
      #endif
      vFogW = (modelMatrix * fw).xyz; }`),n.fragmentShader=n.fragmentShader.replace("#include <fog_pars_fragment>",`varying vec3 vFogW;
`+Jn).replace("#include <fog_fragment>","gl_FragColor.rgb = applyFog(gl_FragColor.rgb, vFogW);"),n.fragmentShader.includes("ReflectedLight reflectedLight")&&(n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`{ float cs = cloudSh(vFogW); outgoingLight -= (reflectedLight.directDiffuse + reflectedLight.directSpecular) * (1.0 - cs); }
#include <opaque_fragment>`)),e&&e(n)},s.customProgramCacheKey=()=>"ruhua"+t,s}function Lu(){let s=new ms(6e3,48,24),e=new Ht({uniforms:ht,side:Dn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; gl_Position.z = gl_Position.w * 0.99999; }",fragmentShader:Jn+`
      varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ s += a * vn(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
      void main(){
        vec3 rd = normalize(vW - cameraPosition);
        vec3 c = skyColor(rd);
        float sd = max(dot(rd, uSunDir), 0.0);
        c += uSunCol * smoothstep(0.9993, 0.9997, sd) * 2.5;
        // \u6A2A\u5411\u7684\u6DE1\u4E91\uFF08\u50CF\u753B\u4E0A\u7684\u7559\u767D\u4E91\u5E26\uFF09
        vec2 cp = rd.xz / max(rd.y + 0.12, 0.05) * 0.9 + vec2(uTime * 0.004, 0.0);
        float cl = smoothstep(0.52, 0.85, fbm(cp * vec2(0.6, 1.6)));
        float band = smoothstep(0.0, 0.08, rd.y) * smoothstep(0.55, 0.12, rd.y);
        c = mix(c, mix(uHaze, vec3(1.0), 0.35) + uSunCol * pow(sd, 6.0) * 0.4, cl * band * 0.45);
        // \u6843\u6E90\uFF1A\u5929\u4E0A\u4E00\u6735\u6735\u767D\u4E91\uFF0C\u548C\u5730\u4E0A\u7684\u4E91\u5F71\u662F\u540C\u4E00\u5C42\uFF08520 m\uFF09\uFF0C\u6C34\u7530\u91CC\u5012\u6620\u7740\uFF08\u5929\u5149\u4E91\u5F71\u5171\u5F98\u5F8A\uFF09
        if (uCloud > 0.0 && rd.y > 0.015) {
          vec2 q = cloudQ(cameraPosition.xz + rd.xz * (520.0 - cameraPosition.y) / rd.y);
          float n = fogN(q) * 0.65 + fogN(q * 2.3 + 4.7) * 0.35 + (fbm(q * 6.0) - 0.47) * 0.16;
          float cv = smoothstep(0.5, 0.74, n) * smoothstep(0.015, 0.2, rd.y) * smoothstep(0.0, 0.2, uCloud);
          vec3 cc = mix(uHaze, vec3(1.0), 0.55) * (0.78 + 0.22 * smoothstep(0.5, 0.85, n)) + uSunCol * (0.12 + 0.45 * pow(sd, 4.0));
          c = mix(c, cc, cv * 0.9);
        }
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new ze(s,e);return t.frustumCulled=!1,t.renderOrder=-10,t}var Nr={dawn:Te(15381421),sun:new I(-.3,.05,-1).normalize(),sunCol:Te(15782082),sunI:1.35,top:Te(9085613),hor:Te(12832204),haze:Te(11188667),far:Te(10728630),fog:[.022,.16,.0012],hemiSky:Te(10135984),hemiGround:Te(4871504),hemiI:2.9,dirI:.8},Hf={sun:new I(.32,.24,-1).normalize(),sunCol:Te(16769981),sunI:2.6,top:Te(8565451),hor:Te(16181724),haze:Te(15917793),far:Te(10468550),fog:[.0035,.12,42e-5],hemiSky:Te(13820646),hemiGround:Te(8231518),hemiI:2.1,dirI:3.3},Ym={sun:new I,sunCol:Te(16773340),sunI:2.3,top:Te(8366268),hor:Te(14871011),haze:Te(13885402),far:Te(9679542),fog:[.0045,.1,5e-4],hemiSky:Te(13162972),hemiGround:Te(5928534),hemiI:1.75,dirI:3},Jm={sun:new I,sunCol:Te(16769716),sunI:3,top:Te(7251922),hor:Te(15659238),haze:Te(15264738),far:Te(10336701),fog:[.001,.055,3e-4,.7],hemiSky:Te(14673376),hemiGround:Te(8360280),hemiI:1.7,dirI:4.1,cloud:1},l1={sun:new I(-.75,.14,-.55).normalize(),sunCol:Te(16754534),sunI:2.6,top:Te(6981293),hor:Te(15972750),haze:Te(15318943),far:Te(9344941),fog:[.0032,.08,48e-5,.5],hemiSky:Te(12170166),hemiGround:Te(6182466),hemiI:1.25,dirI:2.4,cloud:.3},$i={P1:Nr,P2:Hf,P3:Ym,P5:Jm,P6:l1},u1=new I;function Zm(s){let e=-Math.sin(s),t=-Math.cos(s),n=Math.cos(s),i=-Math.sin(s),r=(a,o,c)=>{let l=Math.cos(a),u=Math.sin(a),f=Math.cos(o);c.set((e*l+n*u)*f,Math.sin(o),(t*l+i*u)*f)};r(-.33,.05,Nr.sun),r(.42,.245,Hf.sun),r(-1.35,.55,Ym.sun)}function $m(s){Jm.sun.copy(s).normalize()}function Qm(s,e,t){Oa(Nr,Hf,s,e,t)}function Oa(s,e,t,n,i){let r=(l,u)=>[Ke(l[0],u[0],t),Ke(l[1],u[1],t),Ke(l[2],u[2],t)];ht.uSunDir.value.copy(u1.copy(s.sun).lerp(e.sun,t).normalize());let a=r(s.sunCol,e.sunCol),o=Ke(s.sunI,e.sunI,t);ht.uSunCol.value.setRGB(a[0]*o*.35,a[1]*o*.35,a[2]*o*.35);{let l=(s===Nr?1-t:0)*.3;ht.uDawn.value.setRGB(Nr.dawn[0]*l,Nr.dawn[1]*l,Nr.dawn[2]*l)}ht.uSkyTop.value.setRGB(...r(s.top,e.top)),ht.uSkyHor.value.setRGB(...r(s.hor,e.hor)),ht.uHaze.value.setRGB(...r(s.haze,e.haze)),ht.uFar.value.setRGB(...r(s.far,e.far));let c=r(s.fog,e.fog);ht.uFog.value.set(c[0],c[1],c[2],Ke(s.fog[3]||0,e.fog[3]||0,t)),ht.uCloud.value=Ke(s.cloud||0,e.cloud||0,t),n.color.setRGB(...a),n.intensity=Ke(s.dirI,e.dirI,t),i.color.setRGB(...r(s.hemiSky,e.hemiSky)),i.groundColor.setRGB(...r(s.hemiGround,e.hemiGround)),i.intensity=Ke(s.hemiI,e.hemiI,t)}var h1=[[0,150],[3,85],[0,20],[-8,-45],[-2,-110],[12,-170],[26,-235],[14,-300],[-12,-360],[-30,-420],[-18,-485],[4,-540],[10,-580]],t0=new li(h1.map(([s,e])=>new I(s,0,e)),!1,"centripetal"),fi=t0.getLength(),ii=Math.ceil(fi)+1,Js=new Float32Array(ii),Ss=new Float32Array(ii),ic=new Float32Array(ii),sc=new Float32Array(ii);{let s=t0.getSpacedPoints(ii-1);for(let e=0;e<ii;e++)Js[e]=s[e].x,Ss[e]=s[e].z;for(let e=0;e<ii;e++){let t=Math.max(0,e-2),n=Math.min(ii-1,e+2),i=Js[n]-Js[t],r=Ss[n]-Ss[t],a=Math.hypot(i,r)||1;ic[e]=i/a,sc[e]=r/a}}var Fu=fi/(ii-1),Jt={start:150,act2:280,forest0:292,forest1:640,end:fi};function Mn(s,e={}){let t=at(s/Fu,0,ii-1.001),n=Math.floor(t),i=t-n;e.x=Ke(Js[n],Js[n+1],i),e.z=Ke(Ss[n],Ss[n+1],i);let r=Ke(ic[n],ic[n+1],i),a=Ke(sc[n],sc[n+1],i),o=Math.hypot(r,a)||1;return e.tx=r/o,e.tz=a/o,e}var Wn=s=>7.2+1.6*Math.sin(s*.021+1)+.9*Math.sin(s*.047+2);function f1(s,e,t){let n=0,i=ii-1;for(;i-n>1;){let p=n+i>>1;Ss[p]>e?n=p:i=p}let r=1e18,a=n,o=160,c=Math.max(0,n-o),l=Math.min(ii-1,n+o);for(let p=c;p<=l;p+=4){let _=s-Js[p],M=e-Ss[p],y=_*_+M*M;y<r&&(r=y,a=p)}let u=Math.max(0,a-4),f=Math.min(ii-1,a+4);for(let p=u;p<=f;p++){let _=s-Js[p],M=e-Ss[p],y=_*_+M*M;y<r&&(r=y,a=p)}let h=s-Js[a],d=e-Ss[a],m=h*ic[a]+d*sc[a],x=ic[a]*d-sc[a]*h,g=a*Fu+at(m,-Fu,Fu);return a===0&&m<0||a===ii-1&&m>0?(t.s=g,t.d=Math.sqrt(r),t.side=Math.sign(x)||1,t):(t.s=g,t.d=Math.abs(x),t.side=Math.sign(x)||1,t)}var d1={},Mi=Mn(fi-1),Qi=s=>12-.0042*s*s+2.5*dt(s*.05,3.1);function Gf(s,e){let t=s-Mi.x,n=e-Mi.z;return[Mi.tx*n-Mi.tz*t,t*Mi.tx+n*Mi.tz]}function p1(s,e){let[t,n]=Gf(s,e);if(t<4.5||t>16.5)return!1;let i=Qi(t);return n>i+.8&&n<i+14}function Vn(s,e,t){let n=f1(s,e,t||d1),i=n.d,r=n.s,a=Wn(r),o;if(i<a){let d=i/a;o=-1.7*(1-d*d)*(1-d*d*.3)}else{let d=i-a;o=(.5+.28*dt(r*.03,5.3))*re(0,2.6,d)+Nn(s*.018,e*.018,3)*1.3*re(3,26,d)+d*.012}let c=Nn(s*.004+3,e*.004,4);o+=re(55,230,i)*(46+46*c),o+=re(180,1500,i)*(200+200*Nn(s*.0011,e*.0011,5));let l=s-Mi.x,u=e-Mi.z,f=l*Mi.tx+u*Mi.tz,h=Mi.tx*u-Mi.tz*l;{let d=Qi(at(h,-170,170)),m=re(d+1.5,d+70,f);o=Ke(o,Math.min(o,1.1+Nn(s*.05,e*.05,2)*.6),re(-40,-10,f)*re(d+1,d-4,f)*(1-re(28,65,Math.abs(h)))*(i>Wn(r)+1?1:0)),o+=Math.exp(-(h*h)/52900)*m*(150+60*Nn(s*.01,e*.01,4))}return o}var Ba={x0:-280,x1:280,z0:-680,z1:200,step:2};function n0(s){let e=new kt,t=e0(Ba.x0,Ba.x1,Ba.z0,Ba.z1,Ba.step,null,s,!0),n=e0(-4e3,4e3,-5e3,3e3,40,Ba,null,!1);return{near:t,far:n,heightTex:t.userData.heightTex}}var yi={grassA:Te(10272878),grassB:Te(7249496),grassC:Te(5212782),dryA:Te(9408366),dryB:Te(7304548),ochre:Te(12163686),mud:Te(8219212),bed:Te(5660746),bedDeep:Te(4014663),rock:Te(5991022),qing:Te(3957880),lv:Te(5212782),pink:Te(15910607)},Du={};function m1(s,e){let t=(s+4e3)/40,n=(e+5e3)/40,i=Math.floor(t),r=Math.floor(n),a=t-i,o=n-r,c=-4e3+i*40,l=-5e3+r*40,u=Vn(c,l,Du),f=Vn(c+40,l,Du),h=Vn(c,l+40,Du),d=Vn(c+40,l+40,Du);return(u*(1-a)+f*a)*(1-o)+(h*(1-a)+d*a)*o}function e0(s,e,t,n,i,r,a,o){let c=Math.round((e-s)/i)+1,l=Math.round((n-t)/i)+1,u=new Float32Array(c*l*3),f=new Float32Array(c*l*3),h=new Float32Array(c*l),d={},m=null;if(a){m=new Float32Array(c*l);for(let p of a){if(!p.bloom)continue;let _=4.5*p.scale,M=Math.round((p.x-s)/i),y=Math.round((p.z-t)/i),S=Math.ceil(_/i);for(let b=y-S;b<=y+S;b++)for(let w=M-S;w<=M+S;w++){if(w<0||b<0||w>=c||b>=l)continue;let v=s+w*i-p.x,E=t+b*i-p.z,A=1-Math.hypot(v,E)/_;A>0&&(m[b*c+w]=Math.max(m[b*c+w],A))}}}for(let p=0;p<l;p++)for(let _=0;_<c;_++){let M=p*c+_,y=s+_*i,S=t+p*i,b=Vn(y,S,d);if(o){let k=Math.min(y-s,e-y,S-t,n-S);k<40&&(b=b+(m1(y,S)-b)*re(40,0,k))}h[M]=b,u[M*3]=y,u[M*3+1]=b,u[M*3+2]=S;let w=d.d,v=d.s,E=Wn(v),A=w-E,C=re(Jt.act2-50,Jt.act2+10,v)*(1-re(Jt.forest1+20,Jt.forest1+90,v)*.5),L=Nn(y*.08,S*.08,2),U=dt(y*.31,S*.31),D=Ut(Ut(yi.grassB,yi.grassA,at(.5+L*.9,0,1)),yi.grassC,at(.35-U*.4,0,1)),F=Ut(Ut(yi.dryB,yi.dryA,at(.5+L,0,1)),yi.ochre,at(U*.5,0,.4));D=Ut(F,D,C),A<1.6&&(D=Ut(D,yi.mud,re(1.6,.2,A)*.85)),w<E&&(D=Ut(yi.bed,yi.bedDeep,re(0,1.5,-b)));let B=re(30,160,b);B>0&&(D=Ut(D,Ut(yi.lv,yi.qing,at(.3+L*.8+re(120,500,b)*.6,0,1)),B)),m&&m[M]>0&&w>E+.4&&(D=Ut(D,yi.pink,m[M]*.42*(.6+.4*U))),f[M*3]=D[0],f[M*3+1]=D[1],f[M*3+2]=D[2]}let x=[];for(let p=0;p<l-1;p++)for(let _=0;_<c-1;_++){if(r){let w=s+_*i,v=w+i,E=t+p*i,A=E+i;if(w>=r.x0&&v<=r.x1&&E>=r.z0&&A<=r.z1)continue}if(o&&p1(s+(_+.5)*i,t+(p+.5)*i))continue;let M=p*c+_,y=M+1,S=M+c,b=S+1;x.push(M,S,y,y,S,b)}let g=new nt;if(g.setAttribute("position",new Pt(u,3)),g.setAttribute("color",new Pt(f,3)),g.setIndex(x.length>65535?new Hs(x,1):new vr(x,1)),g.computeVertexNormals(),o){g1(g,c,l);let p=new Uint16Array(c*l);for(let M=0;M<c*l;M++)p[M]=wo.toHalfFloat(at(h[M],-8,8));let _=new Ui(p,c,l,Pa,Fn);_.magFilter=_.minFilter=Yt,_.needsUpdate=!0,g.userData.heightTex=_,g.userData.rect=new wt(s,t,e-s,n-t)}return g.computeBoundingSphere(),g}function g1(s,e,t){let n=s.attributes.position.array,i=s.attributes.color.array,r=s.attributes.normal.array,a=e*t,o=[];for(let h=0;h<e;h++)o.push(h);for(let h=1;h<t;h++)o.push(h*e+e-1);for(let h=e-2;h>=0;h--)o.push((t-1)*e+h);for(let h=t-2;h>0;h--)o.push(h*e);let c=new Float32Array((a+o.length)*3),l=new Float32Array((a+o.length)*3),u=new Float32Array((a+o.length)*3);c.set(n),l.set(i),u.set(r),o.forEach((h,d)=>{let m=a+d;c[m*3]=n[h*3],c[m*3+1]=n[h*3+1]-25,c[m*3+2]=n[h*3+2];for(let x=0;x<3;x++)l[m*3+x]=i[h*3+x],u[m*3+x]=r[h*3+x]});let f=Array.from(s.index.array);for(let h=0;h<o.length;h++){let d=o[h],m=o[(h+1)%o.length],x=a+h,g=a+(h+1)%o.length;f.push(d,m,x,m,g,x,d,x,m,m,x,g)}s.setAttribute("position",new Pt(c,3)),s.setAttribute("color",new Pt(l,3)),s.setAttribute("normal",new Pt(u,3)),s.setIndex(new Hs(f,1))}var ka=Mn(fi-.5),dn={o:new I(ka.x,0,ka.z),f:new I(ka.tx,0,ka.tz),r:new I(-ka.tz,0,ka.tx)},Un=(s,e,t,n=new I)=>n.set(dn.o.x+dn.r.x*s+dn.f.x*t,e,dn.o.z+dn.r.z*s+dn.f.z*t),Be={lat:10.5,w:.78,h:2.75,skew:.09};Be.fwd=Qi(Be.lat);{let s=Un(Be.lat,0,Be.fwd-.6);Be.yb=Vn(s.x,s.z)-.05}Be.mouth=Un(Be.lat,Be.yb+1.3,Be.fwd-.2);var Zs={tRockN:{value:null},tRockA:{value:null},uRockOn:{value:0}};function r0(s="./tex/"){let e=new Er,t=0,n=()=>{++t===2&&(Zs.uRockOn.value=1)},i=r=>(r.wrapS=r.wrapT=ci,r.colorSpace=ki,r.anisotropy=4,r);Zs.tRockN.value=i(e.load(s+"rock_n.webp",n)),Zs.tRockA.value=i(e.load(s+"rock_a.webp",n))}var a0=`
uniform sampler2D tRockN, tRockA; uniform float uRockOn;
vec3 triW(vec3 n){ vec3 w = pow(abs(n), vec3(4.0)); return w / (w.x + w.y + w.z + 1e-4); }
vec3 rockN(vec3 p, vec3 n, vec3 w, float sc, float k){
  vec3 tx = texture2D(tRockN, p.zy * sc).xyz * 2.0 - 1.0, ty = texture2D(tRockN, p.xz * sc).xyz * 2.0 - 1.0, tz = texture2D(tRockN, p.xy * sc).xyz * 2.0 - 1.0;
  tx.xy *= k; ty.xy *= k; tz.xy *= k;
  tx = vec3(tx.xy + n.zy, abs(tx.z) * n.x); ty = vec3(ty.xy + n.xz, abs(ty.z) * n.y); tz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
  return normalize(tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z); }
float rockA(vec3 p, vec3 w, float sc){ return texture2D(tRockA, p.zy * sc).r * w.x + texture2D(tRockA, p.xz * sc).r * w.y + texture2D(tRockA, p.xy * sc).r * w.z; }`,x1=s=>{for(let e in Zs)s.uniforms[e]=Zs[e]};function i0(s,e){let t=s-Be.lat-Be.skew*(e-Be.yb),n=Be.yb+Be.h*.42;if(e<Be.yb-.7)return 9;let i=e>n?(e-n)/(Be.h*.58):0,r=1+.07*Math.sin(e*6.1)+.05*Math.sin(e*13.7);return Math.hypot(t/(Be.w*r),i)}function rc(s,e){let t=Math.imul(s,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296}function s0(s,e,t){let n=Math.floor(s),i=Math.floor(e),r=9,a=9,o=0;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){let u=n+l,f=i+c,h=u+.12+.76*rc(u,f),d=f+.12+.76*rc(f+71,u-13),m=Math.hypot(s-h,e-d);m<r?(a=r,r=m,o=rc(u*3+7,f*5-3),t.dx=s-h,t.dy=e-d,t.sx=rc(u*7+1,f*3-5)-.5,t.sy=rc(u-11,f*9+2)-.5):m<a&&(a=m)}return t.f1=r,t.f2=a,t.id=o,t}var b1=[[8.5,2.6],[18,3.3],[29.5,3.8],[43,4.3],[58,4.6]];function v1(s){return b1.map(([t,n],i)=>[t+4.2*dt(s*.012,i*3.7)+(i%2?1:-1)*s*.02,n*at(.25+1.3*dt(s*.02+i*5.1,1.7+i),0,1.5)]).sort((t,n)=>t[0]-n[0])}function _1(s,e){let t=0;for(let[n,i]of s)t+=i*re(n-.35,n+.5,e);return t}function y1(s,e,t){let n=0,i=t;for(let[r]of s){if(e<r){i=r;break}n=r}return at((e-n)/Math.max(1.5,i-n),0,1)}var Sn={dai:Te(4014663),ink:Te(2501422),qing:Te(3957880),qingL:Te(6262432),lv:Te(5212782),lvL:Te(7972730),ochre:Te(12163686),ochreD:Te(8810575),pale:Te(11121574),moss:Te(6262613),mossD:Te(4284735),wet:Te(2107435),top:Te(5999196)};function o0(){let s=[];for(let A=-168;A<=168;){s.push(A);let C=Math.abs(A-Be.lat);A+=C<2.4?.1:C<7?.35:C<30?.8:1.2}let e=[];for(let A=-8;A<-.8;A+=1.2)e.push(A);for(let A=-.8;A<4.4;A+=.1)e.push(A);for(let A=4.4;A<24;A+=.3)e.push(A);let t=70,n=s.length,i=e.length+t,r=n*i,a=new Float32Array(r*3),o=new Float32Array(r*3),c=new Float32Array(r),l=new Float32Array(r),u=new Float32Array(r),f=new Float32Array(r),h=new Float32Array(r),d=new Float32Array(r),m=new I,x={},g={};for(let A=0;A<n;A++){let C=s[A],L=50+22*re(20,150,Math.abs(C))+15*Nn(C*.018,7.7,3)+5*dt(C*.09,2.2),U=Qi(C),D=v1(C);for(let F=0;F<i;F++){let B=F<e.length?e[F]:Ke(24,L,(F-e.length+1)/t),k=at((B-4.4)/(L-4.4),0,1),J=i0(C,B),X=Math.max(0,(J-1)*Math.min(Be.w,Be.h*.5));s0(C/8.5+B*.035,B/17+.37,x),s0(C/3.1+B*.05+17.3,B/5.5+3.1,g);let Y=1-re(0,.09,x.f2-x.f1),Q=1-re(0,.11,g.f2-g.f1),de=(x.id-.5)*2.2+x.sx*.65*x.dx*8.5+x.sy*.32*x.dy*17+(g.id-.5)*.8+g.sx*.4*g.dx*3.1+g.sy*.2*g.dy*5.5-.55*Y-.22*Q+.45*Nn(C*.07,B*.055,3)+.2*dt(C*.6,B*.5);de*=re(.25,3.2,X),de=Ke(Math.max(de,.05),de,re(1.4,3.2,X));let ye=.12*Math.pow(1-re(0,.45,X),2),Ve=_1(D,B)*re(.5,5,X+Math.max(0,B-7)),Ye=.05*Math.max(0,B-3)+8*Math.pow(k,2.2)+3*k*Nn(C*.05,1.3,2);Un(C,B,U-de+ye+Ve+Ye,m);let Qe=F*n+A;a[Qe*3]=m.x,a[Qe*3+1]=B+(k>.97?3*dt(C*.2,9):0),a[Qe*3+2]=m.z,c[Qe]=X,l[Qe]=de,u[Qe]=Math.max(Y,Q*.6),f[Qe]=x.id,h[Qe]=k,d[Qe]=y1(D,B,L)}}let p=[];for(let A=0;A<i-1;A++)for(let C=0;C<n-1;C++){let L=A*n+C,U=L+1,D=L+n,F=D+1,B=(s[C]+s[C+1])/2,k=(a[L*3+1]+a[D*3+1])/2;i0(B,k)<1||p.push(L,U,D,U,F,D)}let _=new nt;_.setAttribute("position",new Pt(a,3)),_.setIndex(p),_.computeVertexNormals();let M=_.attributes.normal.array,y=[],S=cn(31);for(let A=0;A<r;A++){let ye=function(){let Ve=Be.yb+Be.h*.42,Ye=Be.h*.58,Qe=oe=>1+.07*Math.sin(oe*6.1)+.05*Math.sin(oe*13.7),ee=[],se=(oe,xe,He,it)=>{let st=Be.w*Qe(oe),H=xe*st*He,Dt=He/st,mt=it/Ye,N=Math.hypot(Dt,mt)||1;ee.push([Be.lat+Be.skew*(oe-Be.yb)+H,oe,Dt/N*xe,mt/N])};for(let oe=Be.yb-.45;oe<Ve;oe+=.08)se(oe,-1,1,0);for(let oe=0;oe<=40;oe++){let xe=Math.PI-oe/40*Math.PI,He=Ve+Ye*Math.sin(xe),it=Be.w*Qe(He),st=it*Math.cos(xe),H=Math.cos(xe)/it,Dt=Math.sin(xe)/Ye,mt=Math.hypot(H,Dt);ee.push([Be.lat+Be.skew*(He-Be.yb)+st,He,H/mt,Dt/mt])}for(let oe=Ve-.08;oe>Be.yb-.45;oe-=.08)se(oe,1,1,0);let Ae=[[.5,.12],[.34,-.06],[.17,-.17],[.02,-.15],[-.08,-.02],[-.1,.25],[-.05,.62],[.06,1.05]],Ze=[],Re=[],vt=[],jt=new I,lt=Ae.length;ee.forEach(([oe,xe,He,it],st)=>{let H=Qi(oe)+.05*Math.max(0,xe-3),Dt=.8+.4*(.5+.5*dt(st*.21,3.3));Ae.forEach(([mt,N],T)=>{let j=mt*(T<4?Dt:1);Un(oe+He*j,xe+it*j,H+N*(T<5?Dt:1),jt),Ze.push(jt.x,jt.y,jt.z);let Z=T<3?1:T<5?.8:.62-.12*(T-5),te=Ut(Ut(Sn.dai,Sn.qing,.35+.3*dt(st*.3,T)),Sn.mossD,T<4?.45:.2);Re.push(te[0]*Z,te[1]*Z,te[2]*Z)})});for(let oe=0;oe<ee.length-1;oe++)for(let xe=0;xe<lt-1;xe++){let He=oe*lt+xe,it=He+1,st=He+lt,H=st+1;vt.push(He,it,st,it,H,st)}let Ue=new nt;Ue.setAttribute("position",new _e(Ze,3)),Ue.setAttribute("color",new _e(Re,3)),Ue.setIndex(vt),Ue.computeVertexNormals();let ot=Ue.attributes.normal.array,pt=dn.f;for(let oe=0;oe<ee.length;oe++)for(let xe=0;xe<lt;xe++){let He=(oe*lt+xe)*3;!(xe>=4)&&ot[He]*pt.x+ot[He+2]*pt.z>.2&&(ot[He]*=-1,ot[He+1]*=-1,ot[He+2]*=-1)}return Ue.computeBoundingSphere(),Ue},C=a[A*3],L=a[A*3+1],U=a[A*3+2],D=M[A*3+1],F=Nn(C*.045,L*.02+U*.01,3),B=dt(C*.21+U*.13,L*.17),k=dt(C*.05+3.3,U*.05+L*.03),J=re(.42,.75,D),X=d[A],Y=Ut(Sn.ochreD,Sn.ochre,at(.45+B*.6+(f[A]-.5)*.4,0,1));Y=Ut(Y,Ut(Sn.qing,Sn.lv,at(.45+k*.9,0,1)),at(Math.pow(X,.75)*.9+.12+(f[A]-.5)*.35+F*.35+.25*re(30,60,L),0,1)),Y=Ut(Y,Sn.dai,at(.2+F*.6,0,.55)*(1-.5*X)),Y=Ut(Y,Sn.ink,u[A]*.6);let Q=Ut(Sn.lv,Sn.qingL,at(.3+k*.8+.3*re(35,65,L),0,1));Q=Ut(Q,Sn.lvL,at(B,0,1)*.35);let de=Ut(Y,Q,J);de=Ut(de,Sn.mossD,(1-re(0,3.5,L))*.55),de=Ut(de,Sn.wet,(1-re(0,1.1,c[A]))*.55),o[A*3]=de[0],o[A*3+1]=de[1],o[A*3+2]=de[2];{let Ve=re(.1,.55,dt(C*.07+5,U*.07+L*.05));L>6&&c[A]>3.5&&(D>.6&&S()<.14*Ve||h[A]>.92&&S()<.1*Ve)&&y.push([C,L,U,D])}}_.setAttribute("color",new Pt(o,3)),_.computeBoundingSphere();let b=Tt(new en({vertexColors:!0,roughness:.9,metalness:0}),A=>{x1(A),A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGW, vGN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vGW = (modelMatrix * vec4(transformed, 1.0)).xyz; vGN = normalize(mat3(modelMatrix) * objectNormal);`),A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vGW, vGN; ${a0}
      float ch(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
      float cn(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(mix(ch(i), ch(i+vec3(1,0,0)), f.x), mix(ch(i+vec3(0,1,0)), ch(i+vec3(1,1,0)), f.x), f.y), mix(mix(ch(i+vec3(0,0,1)), ch(i+vec3(1,0,1)), f.x), mix(ch(i+vec3(0,1,1)), ch(i+vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <color_fragment>",`#include <color_fragment>
      float rDist = length(vGW - cameraPosition); vec3 rW = triW(normalize(vGN)); float rNear = smoothstep(70.0, 22.0, rDist);
      { float n = cn(vGW * vec3(0.5, 0.2, 0.5)) * 0.5 + cn(vGW * 1.9) * 0.3 + cn(vGW * 6.0) * 0.2; float a = 0.5;
        if (uRockOn > 0.5) { a = rockA(vGW, rW, 0.11); if (rNear > 0.0) a = mix(a, rockA(vGW, rW, 0.75), rNear * 0.7); }
        diffuseColor.rgb *= (0.8 + 0.4 * n) * (0.55 + 0.9 * a); }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      if (uRockOn > 0.5) { vec3 wn = normalize(vGN); vec3 pn = rockN(vGW, wn, rW, 0.11, 0.9); if (rNear > 0.0) pn = normalize(mix(pn, rockN(vGW, pn, rW, 0.75, 1.1), rNear));
        normal = normalize((viewMatrix * vec4(pn, 0.0)).xyz);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.85, 1.12, 0.8), smoothstep(0.5, 0.9, pn.y) * 0.45); }`)},"cliff"),w=new ze(_,b);w.receiveShadow=!0,w.castShadow=!0,w.name="cliff";let v=new ze(M1(),b);v.receiveShadow=!0,v.castShadow=!0,v.name="rim";let E=new kt;return E.add(w,v,w1(y),E1()),E.name="cliffGroup",E}function M1(){let s=Be.yb+Be.h*.42,e=Be.h*.58,t=m=>1+.07*Math.sin(m*6.1)+.05*Math.sin(m*13.7),n=[],i=(m,x,g,p)=>{let _=Be.w*t(m),M=x*_*g,y=g/_,S=p/e,b=Math.hypot(y,S)||1;n.push([Be.lat+Be.skew*(m-Be.yb)+M,m,y/b*x,S/b])};for(let m=Be.yb-.45;m<s;m+=.08)i(m,-1,1,0);for(let m=0;m<=40;m++){let x=Math.PI-m/40*Math.PI,g=s+e*Math.sin(x),p=Be.w*t(g),_=p*Math.cos(x),M=Math.cos(x)/p,y=Math.sin(x)/e,S=Math.hypot(M,y);n.push([Be.lat+Be.skew*(g-Be.yb)+_,g,M/S,y/S])}for(let m=s-.08;m>Be.yb-.45;m-=.08)i(m,1,1,0);let r=[[.5,.12],[.34,-.06],[.17,-.17],[.02,-.15],[-.08,-.02],[-.1,.25],[-.05,.62],[.06,1.05]],a=[],o=[],c=[],l=new I,u=r.length;n.forEach(([m,x,g,p],_)=>{let M=Qi(m)+.05*Math.max(0,x-3),y=.8+.4*(.5+.5*dt(_*.21,3.3));r.forEach(([S,b],w)=>{let v=S*(w<4?y:1);Un(m+g*v,x+p*v,M+b*(w<5?y:1),l),a.push(l.x,l.y,l.z);let E=w<3?1:w<5?.8:.62-.12*(w-5),A=Ut(Ut(Sn.dai,Sn.qing,.35+.3*dt(_*.3,w)),Sn.mossD,w<4?.45:.2);o.push(A[0]*E,A[1]*E,A[2]*E)})});for(let m=0;m<n.length-1;m++)for(let x=0;x<u-1;x++){let g=m*u+x,p=g+1,_=g+u,M=_+1;c.push(g,p,_,p,M,_)}let f=new nt;f.setAttribute("position",new _e(a,3)),f.setAttribute("color",new _e(o,3)),f.setIndex(c),f.computeVertexNormals();let h=f.attributes.normal.array,d=dn.f;for(let m=0;m<n.length;m++)for(let x=0;x<u;x++){let g=(m*u+x)*3;!(x>=4)&&h[g]*d.x+h[g+2]*d.z>.2&&(h[g]*=-1,h[g+1]*=-1,h[g+2]*=-1)}return f.computeBoundingSphere(),f}function S1(){let s=cn(5),e=[],t=[],n=[];for(let r=0;r<4;r++){let o=new No(1,1).attributes.position,c=.42+s()*.3,l=(s()-.5)*1.1,u=c*.45+s()*.2,f=(s()-.5)*.7;for(let h=0;h<o.count;h++){let d=o.getX(h),m=o.getY(h),x=o.getZ(h),g=1+.2*dt(d*2.3+r*7,m*2.1+x*1.7);e.push(l+d*c*g,u+m*c*.8*g,f+x*c*g),t.push(d,m,x);let p=.5+.5*at(.5+.6*m,0,1);n.push(p,p,p)}}let i=new nt;return i.setAttribute("position",new _e(e,3)),i.setAttribute("normal",new _e(t,3)),i.setAttribute("color",new _e(n,3)),i}function w1(s){let e=cn(77);if(s.length>1400){for(let u=s.length-1;u>0;u--){let f=Math.floor(e()*(u+1));[s[u],s[f]]=[s[f],s[u]]}s.length=1400}let t=Tt(new yn({color:16777215,vertexColors:!0}),null,"moss"),n=new Qt(S1(),t,s.length),i=new qe,r=new zt,a=new I,o=new I,c=new Oe,l=[Te(3099190),Te(3889724),Te(2572346),Te(4876866),Te(3494458)];return s.forEach(([u,f,h],d)=>{let m=(.55+e()*.8)*(1+f/60);r.setFromAxisAngle(o.set(0,1,0),e()*6.28),i.compose(o.set(u,f-m*.15,h),r,a.set(m,m*(.8+e()*.4),m)),n.setMatrixAt(d,i);let x=l[d%5];c.setRGB(x[0],x[1],x[2]),n.setColorAt(d,c)}),n.castShadow=!0,n.receiveShadow=!0,n.computeBoundingSphere(),n.name="moss",n}function E1(){let s=cn(21),e=10,t=new Float32Array(e*3),n=new Float32Array(e*3),i=new I,r=[17,37];for(let u=0;u<e;u++){let f=r[u%2],h=-150+300*(u+s()*.7)/e;Un(h,f+(s()-.5)*6,Qi(h)-6-s()*12+(f-15)*.25,i),t.set([i.x,i.y,i.z],u*3),n.set([55+s()*70,8+s()*7,s()],u*3)}let a=new fn(1,1),o=new _i;o.setIndex(a.index),o.setAttribute("position",a.attributes.position),o.setAttribute("uv",a.attributes.uv),o.setAttribute("aC",new an(t,3)),o.setAttribute("aS",new an(n,3)),o.instanceCount=e;let c=new Ht({uniforms:Object.assign({uRt:{value:dn.r.clone()},uOp:{value:1}},ht),transparent:!0,depthWrite:!1,side:Lt,vertexShader:`attribute vec3 aC, aS; uniform vec3 uRt; uniform float uTime; varying vec2 vUv; varying vec3 vW; varying float vSeed;
      void main(){ vec3 c = aC + uRt * (sin(uTime * 0.02 + aS.z * 6.0) * 6.0 + uTime * 0.25);
        vec3 wp = c + uRt * position.x * aS.x + vec3(0.0, position.y * aS.y, 0.0); vUv = uv; vW = wp; vSeed = aS.z; gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:`uniform float uOp; varying vec2 vUv; varying vec3 vW; varying float vSeed; ${Jn}
      float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h1(i), h1(i + vec2(1, 0)), f.x), mix(h1(i + vec2(0, 1)), h1(i + vec2(1, 1)), f.x), f.y); }
      void main(){ vec2 q = vUv; float t = uTime * 0.02;
        float n = vn(vec2(q.x * 4.0 + t + vSeed * 7.0, q.y * 1.5)) * 0.55 + vn(vec2(q.x * 9.0 - t * 1.7, q.y * 3.5 + vSeed * 3.0)) * 0.3 + vn(q * vec2(22.0, 8.0) + t) * 0.15;
        float shape = smoothstep(0.0, 0.42, q.y) * smoothstep(1.0, 0.5, q.y) * smoothstep(0.0, 0.3, q.x) * smoothstep(1.0, 0.7, q.x);
        float a = smoothstep(0.2, 0.85, n * shape * 1.3) * 0.42 * uOp * smoothstep(8.0, 30.0, length(vW - cameraPosition));
        if (a < 0.004) discard;
        vec3 V = normalize(vW - cameraPosition); float sd = max(dot(V, uSunDir), 0.0);
        vec3 col = mix(uHaze, vec3(1.0), 0.3) * 1.05 + uSunCol * (pow(sd, 6.0) * 0.4 + 0.06);
        gl_FragColor = vec4(applyFog(col, vW), a); }`}),l=new ze(o,c);return l.frustumCulled=!1,l.renderOrder=4,l.name="cliffMist",l}function c0(){let s=Be.fwd,e=Be.yb,t=[[0,.45,0],[.05,1.8,0],[.3,4.5,.05],[-.45,8.5,.25],[.55,13,.5],[.05,18,.8],[-.6,23,1.1],[-.9,28,1.3],[-1,31.5,1.35]].map(([S,b,w])=>Un(Be.lat+S,e+w,s+b)),n=new li(t,!1,"centripetal"),i=n.getLength(),r=Math.ceil(i*3),a=26,o=[],c=[],l=[],u=[],f=new I(0,1,0),h=new I,d=new I,m=new I;for(let S=0;S<=r;S++){let b=S/r,w=b*i;n.getPointAt(b,m),n.getTangentAt(b,h),d.crossVectors(h,f).normalize();let v=1+.25*re(i-2.5,i,w),E=Math.pow(1-re(0,1.8,w),1.5),A=(Ke(.86,.5,re(0,6,w))+.95*E+.7*re(18,26,w)+1.7*re(26.5,i,w))*v,C=(Ke(1.48,1.2,re(0,6,w))+.45*E+.5*re(19,27,w)+1.3*re(26.5,i,w))*v;for(let L=0;L<=a;L++){let U=L/a*Math.PI*2,D=Math.cos(U),F=Math.sin(U),B=1+(.2*Nn(w*.55+L*.31,U*1.7+3,3)+.08*dt(w*2.1,U*4.3))*(.35+.65*re(.5,2.5,w)),k=D*A*B,J=F*C*B+C*.8;J<0&&(J=.02*dt(w*3,k*5)),o.push(m.x+d.x*k,m.y+J,m.z+d.z*k),u.push(m.x,m.y+C*.8,m.z);let X=.5+.5*dt(w*.9,U*2),Y=Ut(Ut(Sn.dai,Sn.qing,at(.4+dt(w*.3,U)*.8,0,1)),Sn.mossD,J<.15?.6:re(.6,0,J)*.4);c.push(Y[0]*(.8+.4*X),Y[1]*(.8+.4*X),Y[2]*(.8+.4*X)),l.push(w)}}let x=[];for(let S=0;S<r;S++)for(let b=0;b<a;b++){let w=S*(a+1)+b,v=w+1,E=w+a+1,A=E+1;x.push(w,E,v,v,E,A)}let g=new nt;g.setAttribute("position",new _e(o,3)),g.setAttribute("color",new _e(c,3)),g.setAttribute("aU",new _e(l,1)),g.setIndex(x),g.computeVertexNormals(),g.computeBoundingSphere();let p=g.attributes.normal.array;for(let S=0;S<p.length;S+=3){let b=u[S]-o[S],w=u[S+1]-o[S+1],v=u[S+2]-o[S+2];b*p[S]+w*p[S+1]+v*p[S+2]<0&&(p[S]=-p[S],p[S+1]=-p[S+1],p[S+2]=-p[S+2])}let _=Object.assign({uGuide:{value:new I},uGuideI:{value:0},uEntI:{value:1},uExitI:{value:1},uL:{value:i},uGlowK:{value:0}},Zs),M=new Ht({uniforms:_,side:Lt,vertexColors:!0,vertexShader:"attribute float aU; varying vec3 vW, vN, vC; varying float vU; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; vC = color; vU = aU; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uGuide; uniform float uGuideI, uEntI, uExitI, uL, uGlowK; varying vec3 vW, vN, vC; varying float vU; ${a0}
      void main(){
        vec3 n = normalize(vN); vec3 w = triW(n); vec3 V = normalize(cameraPosition - vW); vec3 pn = n; float al = 0.55;
        if (uRockOn > 0.5) { pn = rockN(vW, n, w, 1.1, 1.5); al = rockA(vW, w, 1.1) * 0.6 + rockA(vW, w, 0.23) * 0.4; }
        float le = uEntI * exp(-vU / 2.6), lx = uExitI * exp(-(uL - vU) / 6.5);
        vec3 base = vC * (0.4 + 1.2 * al);
        vec3 c = base * (0.003 + le * (0.55 + 0.45 * pn.y) * vec3(0.85, 0.95, 1.0) + lx * (0.5 + 0.5 * max(pn.y, 0.0) + 0.3 * max(dot(pn, normalize(vec3(0.0, 0.3, 0.0) + V)), 0.0)) * vec3(1.0, 0.88, 0.66));
        vec3 dg = uGuide - vW; float dd = dot(dg, dg); vec3 lg = dg * inversesqrt(dd + 1e-4); float gi = uGuideI / (1.0 + dd * 1.2);
        c += base * gi * (0.1 + 0.9 * max(dot(pn, lg), 0.0)) * vec3(1.0, 0.55, 0.66);
        c += gi * pow(max(dot(pn, normalize(lg + V)), 0.0), 48.0) * 0.7 * vec3(1.0, 0.78, 0.84) * smoothstep(0.35, 0.75, al); // \u6E7F\u5CA9\u4E0A\u7684\u53CD\u5149
        c += (0.1 + base * 2.5) * vec3(1.0, 0.97, 0.9) * uGlowK * smoothstep(3.0, 7.0, vU) * smoothstep(15.0, 8.0, vU); // \u6D1E\u5916\u770B\u8FDB\u53BB\uFF1A\u6DF1\u5904\u4EFF\u4F5B\u82E5\u6709\u5149\uFF08\u53E3\u6CBF\u4E00\u5708\u4ECD\u662F\u6697\u7684\uFF09
        gl_FragColor = vec4(c, 1.0); }`});return{curve:n,L:i,uni:_,mk:()=>{let S=new ze(g,M);return S.frustumCulled=!1,S.name="tunnel",S}}}function l0(){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,252,240,1)"),t.addColorStop(.25,"rgba(250,246,230,0.55)"),t.addColorStop(.6,"rgba(240,240,230,0.12)"),t.addColorStop(1,"rgba(240,240,230,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Yn(s);n.colorSpace=qt;let i=new Vs(new ps({map:n,transparent:!0,depthWrite:!1,depthTest:!0,blending:Ta,opacity:.8,fog:!1}));i.position.copy(Un(Be.lat+.2,Be.yb+1.25,Be.fwd+3.6)),i.scale.set(1.5,2,1),i.name="caveGlow";let r=new Vs(new ps({map:n,transparent:!0,depthWrite:!1,depthTest:!0,blending:Ta,opacity:0,fog:!1}));return r.position.copy(Un(Be.lat+.1,Be.yb+1.5,Be.fwd-1.6)),r.scale.set(7,6,1),r.name="caveFar",i.userData.far=r,i}function T1(){let e=document.createElement("canvas");e.width=e.height=1024;let t=e.getContext("2d"),n=cn(7),i=1024/2;for(let a=0;a<4;a++){let o=a%2*i,c=Math.floor(a/2)*i;t.save(),t.beginPath(),t.rect(o,c,i,i),t.clip(),t.strokeStyle="rgba(70,52,44,1)",t.lineCap="round";for(let u=0;u<3;u++){t.lineWidth=3+n()*3,t.beginPath();let f=o+i*(.2+n()*.6),h=c+i*.95;t.moveTo(f,h);for(let d=0;d<4;d++)f+=(n()-.5)*i*.25,h-=i*(.12+n()*.1),t.lineTo(f,h);t.stroke()}let l=46;for(let u=0;u<l;u++){let f=n()*Math.PI*2,h=Math.pow(n(),.7)*i*.4,d=o+i/2+Math.cos(f)*h,m=c+i/2+Math.sin(f)*h*.9,x=i*(.045+n()*.04)*(1-h/i*.6),g=n()*6.28,p=n()<.1,_=.82+n()*.18;for(let M=0;M<(p?1:5);M++){let y=g+M*1.2566,S=d+Math.cos(y)*x*(p?0:.55),b=m+Math.sin(y)*x*(p?0:.55),w=t.createRadialGradient(d,m,0,S,b,x*(p?.5:.75));w.addColorStop(0,`rgb(${Math.round(232*_)},${Math.round(120*_)},${Math.round(150*_)})`),w.addColorStop(.45,`rgb(${Math.round(250*_)},${Math.round(196*_)},${Math.round(210*_)})`),w.addColorStop(1,`rgb(${Math.round(255*_)},${Math.round(232*_)},${Math.round(238*_)})`),t.fillStyle=w,t.beginPath(),t.ellipse(S,b,x*(p?.42:.58),x*.42,y,0,6.283),t.fill()}if(!p){t.fillStyle="rgb(176,58,92)",t.beginPath(),t.arc(d,m,x*.16,0,6.283),t.fill(),t.fillStyle="rgba(250,214,140,0.9)";for(let M=0;M<5;M++){let y=g+M*1.2566+.6;t.beginPath(),t.arc(d+Math.cos(y)*x*.22,m+Math.sin(y)*x*.22,x*.05,0,6.283),t.fill()}}}t.restore()}let r=new Yn(e);return r.colorSpace=qt,r.anisotropy=4,r.generateMipmaps=!0,r.minFilter=ui,r}var wn=(s,e,t)=>new I(s,e,t);function A1(s,e,t){let n=Math.abs(s.y)<.95?wn(0,1,0):wn(1,0,0),i=wn().crossVectors(s,n).normalize(),r=wn().crossVectors(s,i).normalize();return s.clone().multiplyScalar(Math.cos(e)).add(i.multiplyScalar(Math.cos(t)*Math.sin(e))).add(r.multiplyScalar(Math.sin(t)*Math.sin(e))).normalize()}function R1(s,e){let t=cn(s),n=[],i=[],r=[],a=()=>wn(t()-.5,t()-.5,t()-.5);function o(c,l,u,f,h){let d=h===0?4:3,m=[c.clone()],x=l.clone(),g=c.clone();for(let y=0;y<d;y++)x.add(a().multiplyScalar(h===0?.18:.32)),h>=2?x.y-=.05:x.y+=.03,x.normalize(),g=g.clone().addScaledVector(x,u/d),m.push(g);let p=f*(h===0?.72:.58);if(n.push({pts:m,r0:f,r1:p,depth:h}),h>=1&&r.push({p:m[Math.floor(d/2)].clone(),depth:h}),h>=e.depth){i.push({p:g.clone(),d:x.clone(),depth:h});return}let _=h===0?e.limbs:t()<.55?2:3,M=t()*6.283;for(let y=0;y<_;y++){let S=M+y/_*6.283+(t()-.5)*.9,b=h===0?e.spread*(.75+.5*t()):.32+.42*t(),w=h===0?g:m[d-(t()<.35?1:0)];o(w,A1(x,b,S),u*(.68+.2*t()),p*(.78+.12*t()),h+1)}}return o(wn(0,-.35,0),wn(e.lean,1,(t()-.5)*.2).normalize(),e.trunkH,e.trunkR,0),{br:n,tips:i,mids:r}}function u0(s,e){let t=[],n=[],i=[],r=[],a=[],o=.1;for(let l of s)for(let u of l.pts)o=Math.max(o,u.y);e&&(o=e);for(let l of s){let u=l.depth===0?9:l.depth===1?7:5,f=l.pts.length,h=t.length/3,d=0,m=null;for(let x=0;x<f;x++){let g=l.pts[x],p=wn().subVectors(l.pts[Math.min(f-1,x+1)],l.pts[Math.max(0,x-1)]).normalize(),_=m?m.clone().sub(p.clone().multiplyScalar(m.dot(p))).normalize():wn().crossVectors(p,Math.abs(p.y)<.9?wn(0,1,0):wn(1,0,0)).normalize();m=_;let M=wn().crossVectors(p,_).normalize(),y=l.r0+(l.r1-l.r0)*(x/(f-1));l.depth===0&&x===0&&(y*=1.7),l.depth===0&&x===1&&(y*=1.12),x>0&&(d+=l.pts[x].distanceTo(l.pts[x-1]));for(let S=0;S<=u;S++){let b=S/u*6.283,w=_.x*Math.cos(b)+M.x*Math.sin(b),v=_.y*Math.cos(b)+M.y*Math.sin(b),E=_.z*Math.cos(b)+M.z*Math.sin(b),A=1+.12*dt(b*1.3+x*2.1,l.r0*40)*(l.depth===0?1:.4);t.push(g.x+w*y*A,g.y+v*y*A,g.z+E*y*A),n.push(w,v,E),i.push(S/u,d/(y*6.283+.05)*.5),r.push(Math.pow(Math.max(0,g.y)/o,1.5))}if(x>0){let S=h+(x-1)*(u+1),b=h+x*(u+1);for(let w=0;w<u;w++)a.push(S+w,b+w,S+w+1,S+w+1,b+w,b+w+1)}}}let c=new nt;return c.setAttribute("position",new _e(t,3)),c.setAttribute("normal",new _e(n,3)),c.setAttribute("uv",new _e(i,2)),c.setAttribute("aSway",new _e(r,1)),c.setIndex(a),c}function h0(s,e,t=!1){let n=cn(e*31+5),i=[],r=[],a=[],o=[],c=[],l=[],u=[],f=[];for(let w of s.tips)f.push({c:w.p.clone().addScaledVector(w.d,.2),r:.6+.35*n()});for(let w of s.mids)w.depth>=2&&n()<.55&&f.push({c:w.p.clone(),r:.5+.3*n()});let h=wn();for(let w of f)h.add(w.c);h.multiplyScalar(1/f.length);let d=.5,m=.1,x=1e9;for(let w of f)d=Math.max(d,w.c.distanceTo(h)),m=Math.max(m,w.c.y),x=Math.min(x,w.c.y);let g=new zt,p=new Ln,_=wn(),M=wn(),y=wn(),S=wn();for(let w of f){let v=t?3+Math.floor(n()*2):7+Math.floor(n()*4);for(let E=0;E<v;E++){let A=w.c.clone().add(wn(n()-.5,(n()-.5)*.8,n()-.5).multiplyScalar(w.r*1.3)),C=w.r*(.75+.45*n())*(t?1.42:1);p.set(n()*6.283,n()*6.283,n()*6.283),g.setFromEuler(p),_.set(1,0,0).applyQuaternion(g),M.set(0,1,0).applyQuaternion(g);let L=Math.floor(n()*4),U=L%2*.5,D=Math.floor(L/2)*.5,F=at(A.distanceTo(h)/(d+.6),0,1)*.75+at((A.y-x)/(m-x+.5),0,1)*.35,B=n(),k=at(.05+n()*.62,0,.7),J=i.length/3;for(let[X,Y]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let Q=S.copy(A).addScaledVector(_,X*C).addScaledVector(M,Y*C);i.push(Q.x,Q.y,Q.z),y.copy(Q).sub(w.c).normalize().multiplyScalar(.45).add(wn().subVectors(Q,h).normalize().multiplyScalar(.55)).add(wn(0,.25,0)).normalize(),r.push(y.x,y.y,y.z),a.push(U+(X*.5+.5)*.5,D+(Y*.5+.5)*.5),o.push(w.c.x,w.c.y,w.c.z,k),c.push(B,at(F,0,1)),l.push(Math.pow(Math.max(0,Q.y)/(m+.5),1.5))}u.push(J,J+1,J+2,J,J+2,J+3)}}let b=new nt;return b.setAttribute("position",new _e(i,3)),b.setAttribute("normal",new _e(r,3)),b.setAttribute("uv",new _e(a,2)),b.setAttribute("aPuff",new _e(o,4)),b.setAttribute("aMisc",new _e(c,2)),b.setAttribute("aSway",new _e(l,1)),b.setIndex(u),b}var f0=`
attribute float aSway; attribute vec4 aTree;
vec3 swayP(vec3 p){ float t = uTime, ph = aTree.z, w = aSway * uWind.x;
  p.x += (sin(t * 0.9 + ph) * 0.6 + sin(t * 2.3 + ph * 1.7) * 0.22) * 0.07 * w;
  p.z += cos(t * 0.75 + ph * 1.3) * 0.05 * w; return p; }`,C1=`
attribute vec4 aPuff; attribute vec2 aMisc; varying vec2 vMisc; varying float vTint;
vec3 bloomP(vec3 p){
  float bl = clamp((uBloomFront - aTree.x) / 28.0, 0.0, 1.0);
  float sc = smoothstep(aPuff.w, aPuff.w + 0.3, bl); sc *= 1.0 + 0.14 * sin(sc * 3.14159);
  p = aPuff.xyz + (p - aPuff.xyz) * sc;
  p += vec3(sin(uTime * 2.7 + aPuff.w * 40.0), 0.0, cos(uTime * 2.1 + aPuff.w * 30.0)) * 0.025 * aSway;
  return p; }`;function P1(s,e={value:1}){let t=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uBloomFront; uniform vec2 uWind;
`+f0+C1).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed = swayP(bloomP(transformed)); vMisc = aMisc; vTint = aTree.y;`)},n=new yn({map:s,alphaTest:.5,side:Lt,alphaToCoverage:!0});Tt(n,r=>{t(r),r.uniforms.uGlow=e,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunView; uniform float uGlow; varying vec2 vMisc; varying float vTint;`).replace("#include <map_fragment>",`#include <map_fragment>
        { vec2 dx = dFdx(vMapUv * 512.0), dy = dFdy(vMapUv * 512.0); float lod = 0.5 * log2(max(dot(dx, dx), dot(dy, dy))); diffuseColor.a *= 1.0 + max(lod, 0.0) * 0.25; }
        diffuseColor.rgb *= mix(vec3(1.0, 0.84, 0.88), vec3(1.04, 1.0, 1.0), vMisc.x) * mix(vec3(1.0), vec3(1.05, 0.9, 0.95), vTint);
        diffuseColor.rgb *= mix(0.42, 1.0, vMisc.y) * (0.55 + 0.45 * uGlow) * mix(vec3(1.0), vec3(0.9, 0.94, 1.06), 1.0 - uGlow); // \u9EC4\u660F\uFF08uGlow \u964D\u4E0B\u6765\uFF09\u82B1\u8272\u538B\u6697\u4E00\u70B9\u3001\u504F\u56DE\u6843\u7EA2\uFF0C\u4E0D\u7136\u4E00\u6811\u6A59\u7C89\u53D1\u4EAE`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
        { vec3 Vd = normalize(vViewPosition); float bk = pow(clamp(dot(-Vd, uSunView), 0.0, 1.0), 3.0);
          reflectedLight.directDiffuse += diffuseColor.rgb * uSunCol * (bk * (0.9 + 0.8 * (1.0 - vMisc.y)) * 1.6 * uGlow + 0.12); }`)},"crown");let i=new gs({depthPacking:La,map:s,alphaTest:.5,side:Lt});return i.onBeforeCompile=r=>{r.uniforms.uTime=ht.uTime,r.uniforms.uBloomFront=ht.uBloomFront,r.uniforms.uWind=ht.uWind,t(r),r.vertexShader=r.vertexShader.replace("vMisc = aMisc; vTint = aTree.y;","")},i.customProgramCacheKey=()=>"crownDepth",{mat:n,depth:i}}function I1(){let s=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform vec2 uWind;
`+f0).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed = swayP(transformed);`)},e=new en({color:4931125,roughness:.93,metalness:0});Tt(e,n=>{s(n),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBark;`).replace("#include <uv_vertex>",`#include <uv_vertex>
 vBark = uv;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vBark; float bh(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 45758.5); } float bn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(bh(i), bh(i+vec2(1,0)), f.x), mix(bh(i+vec2(0,1)), bh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        { float g = bn(vec2(vBark.x * 14.0, vBark.y * 3.0)) * 0.6 + bn(vec2(vBark.x * 40.0, vBark.y * 9.0)) * 0.4; diffuseColor.rgb *= mix(0.55, 1.15, g);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.2, 0.12), smoothstep(0.55, 0.9, bn(vBark * vec2(6.0, 1.5))) * 0.35); }`)},"trunk");let t=new gs({depthPacking:La});return t.onBeforeCompile=n=>{n.uniforms.uTime=ht.uTime,n.uniforms.uWind=ht.uWind,s(n)},t.customProgramCacheKey=()=>"trunkDepth",{mat:e,depth:t}}function d0(){let s=cn(99),e=[],t=new Map,n=(o,c)=>`${Math.floor(o/6)},${Math.floor(c/6)}`,i=(o,c,l)=>{for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++){let h=t.get(`${Math.floor(o/6)+u},${Math.floor(c/6)+f}`);if(h){for(let d of h)if(Math.hypot(d.x-o,d.z-c)<l)return!1}}return!0},r=o=>{e.push(o);let c=n(o.x,o.z);t.has(c)||t.set(c,[]),t.get(c).push(o)},a={};for(let o=Jt.forest0;o<Jt.forest1;o+=2.2)for(let c of[-1,1])for(let l=0;l<5;l++){if(s()>[.5,.42,.36,.3,.24][l])continue;let u=o+(s()-.5)*3;Mn(u,a);let h=Wn(u)+2.2+l*6.5+s()*3.5,d=a.x-a.tz*h*c,m=a.z+a.tx*h*c;if(!i(d,m,l===0?4.6:5.4))continue;let x=Vn(d,m);if(x<.15||x>14)continue;let g=Math.atan2(-(a.x-d),-(a.z-m));r({x:d,y:x,z:m,rot:l===0?g-Math.PI/2+(s()-.5)*.5:s()*6.283,scale:.9+s()*.35,variant:l===0?3+Math.floor(s()*3):Math.floor(s()*3),bloomS:u+(s()-.5)*8,bloom:!0,tint:s(),act:2,s:u})}for(let o=Jt.start-40;o<Jt.act2-5;o+=9)for(let c of[-1,1]){if(s()>.35)continue;let l=o+s()*6;Mn(l,a);let f=Wn(l)+2.5+s()*22,h=a.x-a.tz*f*c,d=a.z+a.tx*f*c;if(!i(h,d,7))continue;let m=Vn(h,d);m<.15||r({x:h,y:m,z:d,rot:s()*6.283,scale:.8+s()*.35,variant:Math.floor(s()*6),bloomS:1e5,bloom:!1,tint:s(),act:1,s:l})}return e}var L1=[{trunkH:1.5,trunkR:.2,limbs:3,spread:.72,lean:.05,depth:4},{trunkH:1.3,trunkR:.18,limbs:4,spread:.8,lean:-.05,depth:4},{trunkH:1.7,trunkR:.22,limbs:3,spread:.62,lean:.1,depth:4},{trunkH:1.5,trunkR:.2,limbs:3,spread:.7,lean:.42,depth:4},{trunkH:1.2,trunkR:.19,limbs:3,spread:.85,lean:.55,depth:4},{trunkH:1.6,trunkR:.21,limbs:4,spread:.7,lean:.35,depth:4}],D1=48,F1=55;function Nu(s,e){let t=new nt;for(let n in s.attributes)t.setAttribute(n,s.attributes[n]);return t.setIndex(s.index),t.setAttribute("aTree",e),t.boundingSphere=s.boundingSphere,t.boundingBox=s.boundingBox,t}function Uu(s,e={}){let t=new kt,n=T1(),i=P1(n,e.glow),r=I1(),a=new qe,o=new zt,c=new I,l=new I,u=new Oe,f=[];return L1.forEach((h,d)=>{let m=s.filter(b=>b.variant===d);if(!m.length)return;let x=R1(1e3+d*77,h),g=.1;for(let b of x.br)for(let w of b.pts)g=Math.max(g,w.y);let p=u0(x.br),_=u0(x.br.filter(b=>b.depth<=2),g),M=h0(x,d+3),y=e.crownLod?h0(x,d+3,!0):null;for(let b of[p,_,M,y].filter(Boolean))b.computeBoundingSphere(),b.computeBoundingBox();let S=new Map;m.forEach((b,w)=>{let v=b.act===1?"a"+Math.floor(b.s/80):Math.floor(b.s/D1);S.has(v)||S.set(v,[]),S.get(v).push([b,w])});for(let b of S.values()){let w=new Float32Array(b.length*4);b.forEach(([F,B],k)=>w.set([F.bloomS,F.tint,B*1.7+d,F.act],k*4));let v=new an(w,4),E=new an(w.slice(),4),A=new Qt(Nu(p,v),r.mat,b.length),C=new Qt(Nu(M,E),i.mat,b.length),L=new _n;b.forEach(([F],B)=>{o.setFromAxisAngle(l.set(0,1,0),F.rot),a.compose(l.set(F.x,F.y-.05,F.z),o,c.setScalar(F.scale)),A.setMatrixAt(B,a),C.setMatrixAt(B,a),u.setRGB(1,1,1),F.act===1&&u.setRGB(.72,.74,.76),A.setColorAt(B,u),L.expandByPoint(l)}),L.expandByScalar(3);let U=new Qt(Nu(_,v),r.mat,b.length);U.instanceMatrix=A.instanceMatrix,U.instanceColor=A.instanceColor;for(let F of[A,U,C])F.castShadow=!0,F.receiveShadow=!0,F.computeBoundingSphere(),F.boundingSphere.radius+=1.2;A.customDepthMaterial=U.customDepthMaterial=r.depth,C.customDepthMaterial=i.depth,A.name=U.name="trunk",C.name="crown",U.visible=!1;let D={box:L,full:A,lod:U};if(t.add(A,U,C),y){let F=new Qt(Nu(y,E),i.mat,b.length);F.instanceMatrix=C.instanceMatrix,F.castShadow=F.receiveShadow=!0,F.boundingSphere=C.boundingSphere,F.customDepthMaterial=i.depth,F.name="crown",F.visible=!1,D.cf=C,D.cl=F,t.add(F)}f.push(D)}}),t.userData.lod=h=>{for(let d of f){let m=d.box.distanceToPoint(h)>F1;d.full.visible=!m,d.lod.visible=m,d.cl&&(d.cf.visible=!m,d.cl.visible=m)}},t}function es(s,e,t,n,i,r=3){let a=cn(i),o=[],c=[],l=[],u=[];for(let h=0;h<s;h++){let d=a()*6.283,m=Math.sqrt(a())*.22,x=Math.cos(d)*m,g=Math.sin(d)*m,p=e+a()*(t-e),_=n*(.7+a()*.6),M=a()*6.283,y=.25+a()*.5,S=Math.cos(M),b=Math.sin(M),w=-b,v=S,E=o.length/3;for(let A=0;A<=r;A++){let C=A/r,L=y*C*C*p,U=_*(1-C*.85),D=x+S*L,F=g+b*L,B=p*C*(1-y*.25*C);o.push(D-w*U,B,F-v*U,D+w*U,B,F+v*U);let k=S*.4,J=b*.4;if(c.push(k,1,J,k,1,J),l.push(C,p,C,p),A>0){let X=E+(A-1)*2;u.push(X,X+2,X+1,X+1,X+2,X+3)}}}let f=new nt;return f.setAttribute("position",new _e(o,3)),f.setAttribute("normal",new _e(c,3)),f.setAttribute("aBlade",new _e(l,2)),f.setIndex(u),f}function Ou(s,e,t){let n=new yn({side:Lt});return Tt(n,i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
      attribute vec2 aBlade; uniform float uTime; uniform vec2 uWind; varying float vT;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      { vec4 wp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix * wp;
        #endif
        float ph = dot(wp.xz, vec2(0.21, 0.17));
        float w = (sin(uTime * 1.6 + ph) * 0.6 + sin(uTime * 3.7 + ph * 2.3) * 0.25 + 0.35) * uWind.x;
        float k = aBlade.x * aBlade.x * aBlade.y * 0.35;
        transformed.x += w * k; transformed.z += w * k * 0.5; vT = aBlade.x; }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
      varying float vT;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb *= mix(vec3(${s.join(",")}), vec3(${e.join(",")}), smoothstep(0.0, 1.0, vT));`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`)},t),n}function p0(s){let e=new kt,t=cn(5),n=es(6,.22,.55,.022,1),i=es(5,.3,.7,.025,2),r=es(6,.22,.55,.022,1,1),a=es(5,.3,.7,.025,2,1),o=[],c=Ou([.06,.13,.06],[.42,.55,.2],"grass"),l={},u=new qe,f=new zt,h=new I,d=new I,m=new Oe,x=new I(0,1,0),g=40,p={};Mn(fi-1,p);for(let A=Jt.start-30;A<fi+30;A+=g){let C=[],L=A>=fi-10;for(let D=0;D<1300;D++){let F,B,k,J=!1;if(L){k=fi;let Ve=(t()*2-1)*42,Ye=-6+t()*20;F=p.x-p.tz*Ve+p.tx*Ye,B=p.z+p.tx*Ve+p.tz*Ye}else{k=A+t()*g,Mn(k,l);let Ve=Wn(k),Ye=t()<.5?-1:1,Qe=Ve+.35+Math.pow(t(),1.6)*26;J=Qe<Ve+6,F=l.x-l.tz*Qe*Ye+(t()-.5)*1.5,B=l.z+l.tx*Qe*Ye+(t()-.5)*1.5}if(k>Jt.forest1){let[Ve,Ye]=Gf(F,B);if(Ye>Qi(Ve)-.7)continue}let X=Vn(F,B);if(X<.05)continue;let Y=re(Jt.act2-40,Jt.act2+20,k),Q=dt(F*.15,B*.15),de=[.55+Q*.1,.5,.36],ye=[.85+Q*.12,1,.8+Q*.1];m.setRGB(de[0]+(ye[0]-de[0])*Y,de[1]+(ye[1]-de[1])*Y,de[2]+(ye[2]-de[2])*Y),C.push({x:F,y:X,z:B,s:.7+t()*.7*(J?1.2:1),rot:t()*6.283,c:m.clone(),b:t()<.5})}let U=new _n;for(let D of C)U.expandByPoint(h.set(D.x,D.y,D.z));U.expandByScalar(1);for(let[D,F,B]of[[n,r,!0],[i,a,!1]]){let k=C.filter(Y=>Y.b===B);if(!k.length)continue;let J=new Qt(D,c,k.length);k.forEach((Y,Q)=>{f.setFromAxisAngle(x,Y.rot),u.compose(h.set(Y.x,Y.y-.03,Y.z),f,d.setScalar(Y.s)),J.setMatrixAt(Q,u),J.setColorAt(Q,Y.c)});let X=new Qt(F,c,k.length);X.instanceMatrix=J.instanceMatrix,X.instanceColor=J.instanceColor;for(let Y of[J,X])Y.receiveShadow=!0,Y.computeBoundingSphere(),Y.layers.set(1),e.add(Y);X.visible=!1,o.push({box:U,full:J,lod:X})}}let _=es(5,1,1.9,.02,9,4),M=Ou([.2,.2,.14],[.62,.55,.4],"reed"),y=[];for(let A=0;A<1400;A++){let C=Jt.start-30+t()*(Jt.act2-Jt.start+30);Mn(C,l);let L=Wn(C),U=t()<.5?-1:1,D=L-.6+t()*2.4,F=l.x-l.tz*D*U,B=l.z+l.tx*D*U,k=Vn(F,B);k<-.35||y.push({x:F,y:k,z:B,s:.8+t()*.5,rot:t()*6.283})}let S=new Qt(_,M,y.length);y.forEach((A,C)=>{f.setFromAxisAngle(x,A.rot),u.compose(h.set(A.x,A.y-.05,A.z),f,d.setScalar(A.s)),S.setMatrixAt(C,u)}),S.castShadow=!0,S.receiveShadow=!0,S.computeBoundingSphere(),e.add(S);let b=new fn(.07,.05);b.rotateX(-Math.PI/2);let w=Tt(new yn({color:16172239,side:Lt}),null,"gpetal"),v=[];for(let A of s)if(A.bloom)for(let C=0;C<40;C++){let L=t()*6.283,U=Math.sqrt(t())*4.2*A.scale,D=A.x+Math.cos(L)*U,F=A.z+Math.sin(L)*U,B=Vn(D,F);B<.03||v.push([D,B+.03,F,t()*6.283])}let E=new Qt(b,w,v.length);return v.forEach((A,C)=>{f.setFromAxisAngle(x,A[3]),u.compose(h.set(A[0],A[1],A[2]),f,d.setScalar(.8+C%7*.08)),E.setMatrixAt(C,u),m.setRGB(1,.9+C%5*.025,.92+C%3*.03),E.setColorAt(C,m)}),E.receiveShadow=!0,E.computeBoundingSphere(),E.layers.set(1),e.add(E),e.userData.lod=A=>{for(let C of o){let L=C.box.distanceToPoint(A)>60;C.full.visible=!L,C.lod.visible=L}},{group:e,groundPetals:E}}var Ur=class s extends ze{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,i=t.color!==void 0?new Oe(t.color):new Oe(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||s.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new oi,f=new I,h=new I,d=new I,m=new qe,x=new I(0,0,-1),g=new wt,p=new I,_=new I,M=new wt,y=new qe,S=new vn(r,a,{samples:l,type:Fn}),b=new Ht({name:c.name!==void 0?c.name:"unspecified",uniforms:wu.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});b.uniforms.tDiffuse.value=S.texture,b.uniforms.color.value=i,b.uniforms.textureMatrix.value=y,this.material=b,this.onBeforeRender=function(w,v,E){let A=this.getReflectionCamera(E);if(h.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(E.matrixWorld),m.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(m),p.subVectors(h,d),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(h),m.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(m),x.add(d),_.subVectors(h,x),_.reflect(f).negate(),_.add(h),A.position.copy(p),A.up.set(0,1,0),A.up.applyMatrix4(m),A.up.reflect(f),A.lookAt(_),A.far=E.far,A.updateMatrixWorld(),A.projectionMatrix.copy(E.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(A.projectionMatrix),y.multiply(A.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,h),u.applyMatrix4(A.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let L=A.projectionMatrix;A.isOrthographicCamera?(M.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],M.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],M.z=-E.far,M.w=1):(M.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],M.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],M.z=-1,M.w=(1+L.elements[10])/L.elements[14]),g.multiplyScalar(2/g.dot(M)),L.elements[2]=g.x,L.elements[6]=g.y,A.isOrthographicCamera?(L.elements[10]=g.z-o,L.elements[14]=g.w-1):(L.elements[10]=g.z+1-o,L.elements[14]=g.w),n.visible=!1;let U=w.getRenderTarget(),D=w.xr.enabled,F=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(S),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(v,A),w.xr.enabled=D,w.shadowMap.autoUpdate=F,w.setRenderTarget(U);let B=E.viewport;B!==void 0&&w.state.viewport(B),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()},this.getReflectionCamera=function(w){let v=this._reflectionCameras.get(w);return v===void 0&&(v=w.clone(),this._reflectionCameras.set(w,v)),v}}};Ur.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function m0(s,e,t,n){let i=new fn(e.z,e.w,1,1),r={name:"ruhuaWater",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
      uniform mat4 textureMatrix; varying vec4 vR; varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vR = textureMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform sampler2D tDiffuse, uHeight; uniform vec3 color; uniform vec4 uRect; uniform vec3 uDeep, uShallow; uniform vec4 uBoat; uniform vec2 uRes; uniform float uPeach;
      varying vec4 vR; varying vec3 vW;
      ${Jn}
      float hh(vec2 p){ return texture2D(uHeight, (p - uRect.xy) / uRect.zw).r; }
      float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h1(i), h1(i + vec2(1, 0)), f.x), mix(h1(i + vec2(0, 1)), h1(i + vec2(1, 1)), f.x), f.y); }
      float wv(vec2 p, float t){
        float h = sin(dot(p, vec2(0.9, 0.35)) * 1.7 + t * 1.6) * 0.45 + sin(dot(p, vec2(-0.5, 0.8)) * 2.6 + t * 2.2) * 0.3 + sin(dot(p, vec2(0.25, -1.0)) * 4.1 + t * 3.1) * 0.16;
        h += vn(p * 1.4 + vec2(0.0, t * 0.7)) * 0.7 + vn(p * 3.3 - vec2(t * 0.5, t * 1.1)) * 0.32 + vn(p * 7.1 + vec2(t * 0.9, -t * 0.4)) * 0.12;
        float r = length(p - uBoat.xy); h += sin(r * 7.0 - t * 5.0) * exp(-r * 0.35) * 0.35 * smoothstep(1.2, 2.5, r);
        return h; }
      void main(){
        vec3 V = cameraPosition - vW; float dist = length(V); V /= dist;
        float t = uTime; float amp = 0.07 / (1.0 + dist * 0.035);
        float e = 0.06; float w0 = wv(vW.xz, t), wx = wv(vW.xz + vec2(e, 0.0), t), wz = wv(vW.xz + vec2(0.0, e), t);
        vec3 n = normalize(vec3(-(wx - w0) / e * amp, 1.0, -(wz - w0) / e * amp));
        float depth = max(-hh(vW.xz), 0.0);
        float cosT = clamp(dot(n, V), 0.0, 1.0); float fres = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
        vec2 ruv = vR.xy / vR.w + n.xz * 0.045;
        vec2 px = 1.0 / uRes; float bl = 1.5 + dist * 0.02;
        vec3 refl = texture2D(tDiffuse, ruv).rgb * 0.4 + (texture2D(tDiffuse, ruv + px * vec2(bl, 0.0)).rgb + texture2D(tDiffuse, ruv - px * vec2(bl, 0.0)).rgb + texture2D(tDiffuse, ruv + px * vec2(0.0, bl * 2.0)).rgb + texture2D(tDiffuse, ruv - px * vec2(0.0, bl * 2.0)).rgb) * 0.15;
        vec3 amb = uSkyTop * 0.55 + uHaze * 0.35 + uSunCol * 0.12;
        vec3 body = mix(uShallow, uDeep, smoothstep(0.0, 1.3, depth)) * amb * 1.6;
        float rs = mix(0.5, 1.0, fres);
        vec3 col = mix(body, refl * 0.92, rs);
        vec3 hv = normalize(uSunDir + V); col += uSunCol * pow(max(dot(n, hv), 0.0), 350.0) * mix(0.8, 5.0, uPeach);
        // \u5CB8\u8FB9\u4E00\u9053\u6D45\u6D45\u7684\u6C34\u7EBF
        float edge = smoothstep(0.16, 0.02, depth) * (0.55 + 0.45 * vn(vW.xz * 1.7 + t * 0.3));
        col = mix(col, uHaze * 1.05 + uSunCol * 0.08, edge * 0.42);
        col = mix(col, uShallow * amb * 1.2, smoothstep(0.35, 0.0, depth) * 0.25);
        gl_FragColor = vec4(applyFog(col, vW), 1.0);
      }`},a=new Ur(i,{textureWidth:t,textureHeight:n,clipBias:.002,multisample:4,shader:r});a.rotation.x=-Math.PI/2,a.position.set(e.x+e.z/2,0,e.y+e.w/2);let o=a.material.uniforms;for(let l in ht)o[l]=ht[l];o.uHeight={value:s},o.uRect={value:e},o.uDeep={value:new Oe().setRGB(...Te(3102054))},o.uShallow={value:new Oe().setRGB(...Te(7305818))},o.uBoat={value:new wt},o.uRes={value:new ve(t,n)};let c=a.getReflectionCamera;return a.getReflectionCamera=function(l){let u=c.call(this,l);return u.layers.set(0),u},a.setRes=(l,u)=>{a.getRenderTarget().setSize(l,u),o.uRes.value.set(l,u)},a}function Bu(){let s=new fn(1,1,2,2),e=s.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),i=e.getY(t);e.setZ(t,-(n*n)*.35-i*i*.1)}return s.computeVertexNormals(),s}var Vf=`
  uniform vec3 uSunView; varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vFade; varying float vTone;
  ${Jn}
  void main(){
    vec2 q = vUv * 2.0 - 1.0; float d = length(vec2(q.x * 1.3, q.y * 0.95 + 0.05 * q.x * q.x));
    if (d > 1.0 || (q.y > 0.78 && abs(q.x) < (q.y - 0.78) * 1.3) || vFade < 0.02) discard;
    vec3 base = mix(vec3(0.86, 0.36, 0.48), vec3(0.98, 0.78, 0.82), smoothstep(-1.0, 0.4, q.y)); base = mix(base, vec3(1.0, 0.93, 0.95), vTone * 0.5);
    vec3 n = normalize(vN); float dl = abs(dot(n, uSunDir));
    vec3 V = normalize(cameraPosition - vW); float bk = pow(max(dot(-V, uSunDir), 0.0), 3.0);
    vec3 col = base * (uSkyTop * 0.55 + uHaze * 0.4 + uSunCol * (dl * 0.9 + bk * 1.4));
    gl_FragColor = vec4(applyFog(col, vW), 1.0);
  }`;function za(s=2600,e=[56,20,64],t=.085,n=11){let i=Bu(),r=new _i;r.setIndex(i.index),r.setAttribute("position",i.attributes.position),r.setAttribute("normal",i.attributes.normal),r.setAttribute("uv",i.attributes.uv);let a=cn(n),o=new Float32Array(s*4);for(let u=0;u<s*4;u++)o[u]=a();r.setAttribute("aSeed",new an(o,4)),r.instanceCount=s;let c=new Ht({uniforms:Object.assign({uDensity:{value:0},uBox:{value:new I(...e)},uFwd:{value:new I(0,0,-1)},uSize:{value:t}},ht),side:Lt,vertexShader:`
      attribute vec4 aSeed; uniform float uTime, uDensity, uSize; uniform vec3 uCam, uBox, uFwd; uniform vec2 uWind;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vFade; varying float vTone;
      mat3 rotm(vec3 a){ float cx = cos(a.x), sx = sin(a.x), cy = cos(a.y), sy = sin(a.y), cz = cos(a.z), sz = sin(a.z);
        return mat3(cy*cz, cy*sz, -sy, sx*sy*cz - cx*sz, sx*sy*sz + cx*cz, sx*cy, cx*sy*cz + sx*sz, cx*sy*sz - sx*cz, cx*cy); }
      void main(){
        float t = uTime; vec3 p = aSeed.xyz * uBox;
        p.y -= t * (0.45 + aSeed.w * 0.35); p.x += t * uWind.x * 0.9 + sin(t * 0.8 + aSeed.x * 30.0) * 1.3; p.z += t * uWind.y + cos(t * 0.6 + aSeed.z * 25.0) * 1.1;
        vec3 c = uCam + uFwd * (uBox.z * 0.32) - uBox * 0.5; c.y = uCam.y - 3.0;
        vec3 lp = mod(p - c, uBox); p = c + lp;
        vec3 rel = lp / uBox - 0.5; float edge = max(abs(rel.x), abs(rel.z)); vFade = (1.0 - smoothstep(0.36, 0.5, edge)) * (1.0 - smoothstep(0.38, 0.5, abs(rel.y))) * step(aSeed.w, uDensity);
        vec3 ang = vec3(t * (0.9 + aSeed.x * 1.8), t * (0.6 + aSeed.y), t * (1.1 + aSeed.z * 1.5)) + aSeed.xyz * 6.28;
        mat3 R = rotm(ang); vec3 wp = p + R * (position * vec3(1.0, 0.82, 1.0) * uSize * (0.75 + aSeed.y * 0.5)) * vFade;
        vN = R * normal; vW = wp; vUv = uv; vTone = aSeed.y;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:Vf}),l=new ze(r,c);return l.frustumCulled=!1,l.layers.set(1),l}function g0(s,e,t=3200){let n=Bu(),i=new _i;i.setIndex(n.index),i.setAttribute("position",n.attributes.position),i.setAttribute("normal",n.attributes.normal),i.setAttribute("uv",n.attributes.uv);let r=cn(12),a=new Float32Array(t*4);for(let l=0;l<t*4;l++)a[l]=r();i.setAttribute("aSeed",new an(a,4)),i.instanceCount=t;let o=new Ht({uniforms:Object.assign({uDensity:{value:0},uBox:{value:new I(70,1,110)},uFwd:{value:new I(0,0,-1)},uHeight:{value:s},uRect:{value:e}},ht),side:Lt,vertexShader:`
      attribute vec4 aSeed; uniform float uTime, uDensity; uniform vec3 uCam, uBox, uFwd; uniform sampler2D uHeight; uniform vec4 uRect;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vFade; varying float vTone;
      void main(){
        float t = uTime; vec3 p = vec3(aSeed.x * uBox.x, 0.0, aSeed.z * uBox.z);
        p.z += t * (0.35 + aSeed.y * 0.15); p.x += sin(t * 0.3 + aSeed.w * 20.0) * 0.6;
        vec3 c = uCam + uFwd * (uBox.z * 0.3) - uBox * 0.5; vec3 lp = mod(p - c, uBox); p = c + lp; p.y = 0.015 + sin(t * 1.7 + aSeed.x * 40.0) * 0.006;
        vec2 rel = lp.xz / uBox.xz - 0.5; float hgt = texture2D(uHeight, (p.xz - uRect.xy) / uRect.zw).r;
        vFade = (1.0 - smoothstep(0.38, 0.5, max(abs(rel.x), abs(rel.y)))) * step(aSeed.w, uDensity) * smoothstep(-0.05, -0.25, hgt);
        float ang = aSeed.y * 6.28 + t * 0.2 * (aSeed.z - 0.5); float cs = cos(ang), sn = sin(ang);
        vec3 lpos = vec3(position.x, -position.z * 0.3, position.y) * 0.08 * (0.7 + aSeed.y * 0.6) * vFade; lpos.xz = mat2(cs, sn, -sn, cs) * lpos.xz;
        vec3 wp = p + lpos; vN = vec3(0.0, 1.0, 0.0); vW = wp; vUv = uv; vTone = aSeed.x;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:Vf}),c=new ze(i,o);return c.frustumCulled=!1,c.layers.set(1),c}function x0(){let s=Bu();s.rotateX(-Math.PI/2);let e=new Ht({uniforms:Object.assign({uGlow:{value:1}},ht),side:Lt,vertexShader:"varying vec3 vW; varying vec2 vUv; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vUv = uv; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uGlow; varying vec3 vW; varying vec2 vUv; ${Jn}
      void main(){ vec2 q = vUv * 2.0 - 1.0; float d = length(vec2(q.x * 1.3, q.y * 0.95)); if (d > 1.0 || (q.y > 0.78 && abs(q.x) < (q.y - 0.78) * 1.3)) discard;
        vec3 c = mix(vec3(0.95, 0.42, 0.55), vec3(1.0, 0.82, 0.86), smoothstep(-1.0, 0.5, q.y)); c *= 0.6 + uGlow * 1.6;
        gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),t=new ze(s,e);t.scale.setScalar(.32),t.layers.set(1);let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(250,196,210,0.95)"),r.addColorStop(.22,"rgba(240,150,176,0.5)"),r.addColorStop(.55,"rgba(236,140,168,0.14)"),r.addColorStop(1,"rgba(236,140,168,0)"),i.fillStyle=r,i.fillRect(0,0,128,128);let a=new Yn(n);a.colorSpace=qt;let o=new Vs(new ps({map:a,transparent:!0,depthWrite:!1,opacity:.6,fog:!1}));return o.scale.setScalar(1/.32*2.1),o.layers.set(1),t.add(o),t.userData.halo=o,t}function Wf(s,e,t,n,i=34){let r=cn(5),a=new Float32Array(i*3),o=new Float32Array(i*3),c={};for(let d=0;d<i;d++){let m=t+(n-t)*(d+r()*.8)/i;s(m,c);let x=(r()*2-1)*(e(m)+5);a[d*3]=c.x-c.tz*x,a[d*3+1]=.5+r()*.7,a[d*3+2]=c.z+c.tx*x,o[d*3]=16+r()*16,o[d*3+1]=1.6+r()*1.6,o[d*3+2]=r()}let l=new fn(1,1),u=new _i;u.setIndex(l.index),u.setAttribute("position",l.attributes.position),u.setAttribute("uv",l.attributes.uv),u.setAttribute("aC",new an(a,3)),u.setAttribute("aS",new an(o,3)),u.instanceCount=i;let f=new Ht({uniforms:Object.assign({uLift:{value:0}},ht),transparent:!0,depthWrite:!1,side:Lt,vertexShader:`attribute vec3 aC, aS; uniform float uLift, uTime; varying vec2 vUv; varying vec3 vW; varying float vSeed, vNear;
      void main(){ vec3 c = aC; c.y += uLift * (5.0 + aS.z * 4.0); c.x += sin(uTime * 0.05 + aS.z * 9.0) * 3.0;
        vec3 d = c - cameraPosition; d.y = 0.0; float L = length(d); vec3 rt = normalize(vec3(-d.z, 0.0, d.x)); vec3 wp = c + rt * position.x * aS.x + vec3(0.0, position.y * aS.y, 0.0);
        vUv = uv; vW = wp; vSeed = aS.z; vNear = 1.0; gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:`uniform float uLift; varying vec2 vUv; varying vec3 vW; varying float vSeed, vNear; ${Jn}
      float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h1(i), h1(i + vec2(1, 0)), f.x), mix(h1(i + vec2(0, 1)), h1(i + vec2(1, 1)), f.x), f.y); }
      void main(){ vec2 q = vUv; float t = uTime * 0.03;
        float n = vn(vec2(q.x * 3.0 + t + vSeed * 7.0, q.y * 1.2)) * 0.6 + vn(vec2(q.x * 7.0 - t * 1.7, q.y * 3.0 + vSeed * 3.0)) * 0.3 + vn(q * 15.0 + t) * 0.1;
        float shape = smoothstep(0.0, 0.3, q.y) * smoothstep(1.0, 0.45, q.y) * smoothstep(0.0, 0.25, q.x) * smoothstep(1.0, 0.75, q.x);
        float a = smoothstep(0.3, 0.75, n * shape * 1.25) * 0.42 * smoothstep(3.0, 12.0, length(vW - cameraPosition)) * (1.0 - uLift) * (1.0 - uLift); // \u9010\u50CF\u7D20\u6309\u8DDD\u79BB\u6DE1\u51FA\uFF1A\u96FE\u7247\u5F88\u5BBD\uFF0C\u6309\u9876\u70B9\u7B97\u4F1A\u5728\u8239\u91CC\u7CCA\u4E00\u7247
        if (a < 0.004) discard;
        vec3 V = normalize(vW - cameraPosition); float sd = max(dot(V, uSunDir), 0.0);
        vec3 col = uHaze * 1.04 + uSunCol * (pow(sd, 6.0) * 0.5 + 0.05);
        gl_FragColor = vec4(applyFog(col, vW), a); }`}),h=new ze(u,f);return h.frustumCulled=!1,h.layers.set(1),h.renderOrder=5,h}function b0(s=110){let e=Bu(),t=new _i;t.setIndex(e.index),t.setAttribute("position",e.attributes.position),t.setAttribute("normal",e.attributes.normal),t.setAttribute("uv",e.attributes.uv);let n=cn(23),i=new Float32Array(s*4);for(let o=0;o<s*4;o++)i[o]=n();t.setAttribute("aSeed",new an(i,4)),t.instanceCount=s;let r=new Ht({uniforms:Object.assign({uDensity:{value:0},uTarget:{value:new I},uFrom:{value:new I},uRt:{value:new I(1,0,0)},uFw:{value:new I(0,0,-1)},uSize:{value:.07}},ht),side:Lt,vertexShader:`
      attribute vec4 aSeed; uniform float uTime, uDensity, uSize; uniform vec3 uTarget, uFrom, uRt, uFw;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vFade; varying float vTone;
      mat3 rotm(vec3 a){ float cx = cos(a.x), sx = sin(a.x), cy = cos(a.y), sy = sin(a.y), cz = cos(a.z), sz = sin(a.z);
        return mat3(cy*cz, cy*sz, -sy, sx*sy*cz - cx*sz, sx*sy*sz + cx*cz, sx*cy, cx*sy*cz + sx*sz, cx*sy*sz - sx*cz, cx*cy); }
      void main(){
        float t = uTime; float per = 7.0 + aSeed.w * 6.0; float ph = fract(t / per + aSeed.x);
        vec3 st = uFrom + uRt * (aSeed.y - 0.5) * 18.0 - uFw * aSeed.z * 10.0 + vec3(0.0, 0.3 + aSeed.w * 3.4, 0.0);
        float k = pow(ph, 1.8); vec3 p = mix(st, uTarget, k);
        float sw = (1.0 - k) * (0.6 + aSeed.z);
        p += (uRt * sin(t * 1.3 + aSeed.x * 30.0) * 0.9 + vec3(0.0, sin(t * 1.7 + aSeed.y * 20.0) * 0.45, 0.0) + uFw * cos(t * 0.9 + aSeed.z * 25.0) * 0.6) * sw;
        vFade = smoothstep(0.0, 0.12, ph) * (1.0 - smoothstep(0.93, 1.0, ph)) * step(aSeed.w, uDensity);
        vec3 ang = vec3(t * (1.4 + aSeed.x * 2.0), t * (0.9 + aSeed.y), t * (1.6 + aSeed.z * 1.5)) + aSeed.xyz * 6.28;
        mat3 R = rotm(ang); vec3 wp = p + R * (position * vec3(1.0, 0.82, 1.0) * uSize * (0.75 + aSeed.y * 0.5)) * vFade;
        vN = R * normal; vW = wp; vUv = uv; vTone = aSeed.y;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:Vf}),a=new ze(t,r);return a.frustumCulled=!1,a.layers.set(1),a.name="stream",a}var ws=2,Es=5.4,_0=s=>.64*Math.pow(Math.sin(Math.PI*(.07+.86*s)),.62),ku=s=>.48+.42*Math.pow(s,3.2)+.14*Math.pow(1-s,3),y0=s=>-.2+.32*Math.pow(Math.abs(2*s-1),4);function si(s,e){let t=_0(s),n=ku(s),i=y0(s),r=Math.abs(e)*Math.PI/2;return[Math.sign(e)*t*Math.pow(Math.sin(r),.7),i+(n-i)*(1-Math.cos(r)),ws-Es*s]}function v0(s,e){let t=new en({color:s,roughness:.82,metalness:0,side:Lt});return Tt(t,n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWood;`).replace("#include <uv_vertex>",`#include <uv_vertex>
 vWood = uv;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec2 vWood; float wh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float wn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(wh(i), wh(i+vec2(1,0)), f.x), mix(wh(i+vec2(0,1)), wh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
      { float plank = floor(vWood.y * 7.0); float seam = smoothstep(0.035, 0.0, abs(fract(vWood.y * 7.0) - 0.5) - 0.465);
        float grain = wn(vec2(vWood.x * 3.0, vWood.y * 60.0 + plank * 3.1)) * 0.6 + wn(vec2(vWood.x * 22.0, vWood.y * 200.0)) * 0.4;
        diffuseColor.rgb *= (0.78 + 0.32 * grain) * (0.9 + 0.2 * wh(vec2(plank, 3.0)));
        diffuseColor.rgb *= 1.0 - seam * 0.55;
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.7, 0.75, 0.7), smoothstep(0.3, 0.8, wn(vWood * vec2(4.0, 10.0))) * 0.3); }`)},e),t}function M0(){let s=new kt,e=48,t=20,n=[],i=[],r=[];for(let u=0;u<=e;u++)for(let f=0;f<=t;f++){let h=u/e,d=f/t*2-1;n.push(...si(h,d)),i.push(h*4,(d+1)/2)}for(let u=0;u<e;u++)for(let f=0;f<t;f++){let h=u*(t+1)+f,d=h+t+1;r.push(h,d,h+1,h+1,d,d+1)}let a=new nt;a.setAttribute("position",new _e(n,3)),a.setAttribute("uv",new _e(i,2)),a.setIndex(r),a.computeVertexNormals();let o=v0(7229496,"wood"),c=v0(4863527,"wood2"),l=new ze(a,o);l.name="hull",s.add(l);for(let u of[-1,1]){let f=[];for(let d=0;d<=40;d++){let m=d/40,x=si(m,u);f.push(new I(x[0],x[1]+.02,x[2]))}let h=new ya(new li(f),80,.045,8,!1);s.add(new ze(h,c))}for(let u of[.42,.66,.84]){let f=si(u,1),h=f[0]*2-.04,d=new ze(new $n(h,.05,.24),c);d.position.set(0,f[1]-.12,f[2]),s.add(d)}{let f=[],h=[],d=[],m=0;for(let p=0;p<=60;p++){let _=p/60;if(y0(_)>.06-.01)continue;let M=0,y=1;for(let b=0;b<24;b++){let w=(M+y)/2;si(_,w)[1]<.06?M=w:y=w}let S=si(_,M);if(f.push(-S[0],.06,S[2],S[0],.06,S[2]),h.push(_*4,0,_*4,1),m>0){let b=(m-1)*2;d.push(b,b+2,b+1,b+1,b+2,b+3)}m++}let x=new nt;x.setAttribute("position",new _e(f,3)),x.setAttribute("uv",new _e(h,2)),x.setIndex(d),x.computeVertexNormals();let g=new ze(x,o);g.name="floor",s.add(g)}for(let u of[0,1]){let f=[0,ku(u)-.01,ws-Es*u],h=[...f],d=[],m=24;for(let _=0;_<=m;_++){let M=si(u,_/m*2-1);h.push(M[0],M[1],M[2]),_>0&&d.push(0,_,_+1)}let x=new nt;x.setAttribute("position",new _e(h,3)),x.setAttribute("uv",new _e(new Array(h.length/3*2).fill(0).map((_,M)=>M%2?h[(M>>1)*3+1]:h[(M>>1)*3]+.5),2)),x.setIndex(d),x.computeVertexNormals();let g=new ze(x,c);g.name="noShadow",s.add(g);let p=new ze(new $n(_0(u)*2+.1,.06,.16),c);p.position.set(0,ku(u)+.01,ws-Es*u+(u?.05:-.05)),p.name="noShadow",s.add(p)}{let f=ws-Es*.84+.12,h=ku(.84)-.12+.025,d=(ws-f)/Es,m=(E,A)=>{let C=0,L=1;for(let U=0;U<22;U++){let D=(C+L)/2;si(E,D)[1]<A?C=D:L=D}return si(E,C)[0]},x=[],g=[],p=0;for(let E=0;E<=16;E++){let A=d+(1-d)*E/16,C=m(A,h),L=ws-Es*A;if(x.push(-C,h,L,C,h,L),p){let U=(p-1)*2;g.push(U,U+2,U+1,U+1,U+2,U+3)}p++}let _=new nt;_.setAttribute("position",new _e(x,3)),_.setAttribute("uv",new _e(x.map((E,A)=>A%3===0?E+.5:A%3===2?E*.5:null).filter(E=>E!==null),2)),_.setIndex(g),_.computeVertexNormals();let M=new ze(_,o);M.name="noShadow",s.add(M);let y=[0,h,f],S=[],b=20;for(let E=0;E<=b;E++){let A=E/b*2-1,C=0,L=1;for(let D=0;D<22;D++){let F=(C+L)/2;si(d,F)[1]<h?C=F:L=F}let U=si(d,Math.sign(A)*Math.abs(A)*C);y.push(U[0],U[1],f),E&&S.push(0,E,E+1)}let w=new nt;w.setAttribute("position",new _e(y,3)),w.setAttribute("uv",new _e(y.map((E,A)=>A%3===0?E+.5:A%3===1?E*2:null).filter(E=>E!==null),2)),w.setIndex(S),w.computeVertexNormals();let v=new ze(w,c);v.name="noShadow",s.add(v),s.userData.deckY=h}{let u=new bi(.017,.021,4.6,10,1);u.rotateX(Math.PI/2);let f=Tt(new en({color:5986874,roughness:.5}),d=>{d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBu;`).replace("#include <uv_vertex>",`#include <uv_vertex>
 vBu = uv;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vBu;`).replace("#include <color_fragment>",`#include <color_fragment>
        { float f = fract(vBu.y * 11.0); float node = smoothstep(0.03, 0.0, abs(f - 0.5) - 0.47); diffuseColor.rgb *= (0.82 + 0.18 * smoothstep(0.0, 0.5, f)) * (1.0 - node * 0.45); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.08, 1.0, 0.8), smoothstep(0.3, 0.7, sin(vBu.y * 37.0) * 0.5 + 0.5) * 0.25); }`)},"bamboo"),h=new ze(u,f);h.position.set(.47,.58,.1),h.rotation.y=-.05,h.rotation.x=-.035,s.add(h)}{let u=document.createElement("canvas");u.width=u.height=128;let f=u.getContext("2d");f.clearRect(0,0,128,128),f.strokeStyle="#fff",f.lineWidth=6.5,f.lineCap="round";for(let b=-2;b<=2;b++)f.beginPath(),f.moveTo(b*64-16,-16),f.lineTo(b*64+144,144),f.stroke(),f.beginPath(),f.moveTo(b*64+144,-16),f.lineTo(b*64-16,144),f.stroke();f.fillStyle="#fff";for(let[b,w]of[[0,0],[64,64],[128,0],[0,128],[128,128],[64,0],[0,64],[64,128],[128,64]])(b+w)%128!==64&&(f.beginPath(),f.arc(b,w,7,0,7),f.fill());let h=new Yn(u);h.wrapS=h.wrapT=ci,h.repeat.set(8,6),h.anisotropy=4;let d=Tt(new en({color:5194550,alphaMap:h,alphaTest:.35,side:Lt,roughness:1}),null,"net");d.alphaToCoverage=!0;let m=b=>{let w=Math.sin(b*91.7)*43758.5453;return w-Math.floor(w)},x=new kt,g=.585,p=ws-Es*g;for(let b=0;b<6;b++){let w=1.15-b*.13,v=.85-b*.09,E=new fn(w,v,46,34);E.rotateX(-Math.PI/2);let A=E.attributes.position;for(let L=0;L<A.count;L++){let U=A.getX(L),D=A.getZ(L),F=(U/(w*.42))**2+(D/(v*.42))**2,B=(.07+b*.04)*Math.exp(-F*1.4)+.03*Math.sin(U*17+b*2+Math.sin(D*9)*2)*Math.cos(D*13-b)*Math.exp(-F*.7)+.012*Math.sin(U*41+D*23);A.setXYZ(L,U+.03*Math.sin(D*11+b),Math.max(B,.002+b*.004),D+.03*Math.cos(U*9-b))}E.computeVertexNormals();let C=new ze(E,d);C.rotation.y=(m(b+1)-.5)*1.2,C.position.set((m(b+7)-.5)*.12,0,(m(b+13)-.5)*.1),x.add(C)}let _=Tt(new en({color:11045468,roughness:.85}),null,"cork"),M=new bi(.032,.032,.075,10);M.rotateZ(Math.PI/2);let y=[];for(let b=0;b<7;b++){let w=-2.3+b*.62,v=.43+.05*Math.sin(b*2.1),E=Math.cos(w)*v*1.1,A=Math.sin(w)*v*.8,C=new ze(M,_);C.position.set(E,.035+.02*Math.sin(b),A),C.rotation.y=-w+Math.PI/2,x.add(C),y.push(new I(E,.03,A))}let S=new ya(new li(y),60,.008,5,!1);x.add(new ze(S,Tt(new en({color:6048826,roughness:1}),null,"rope"))),x.position.set(.12,.062,p),x.rotation.y=.25,x.scale.set(.85,1,.85),s.add(x)}{let u=document.createElement("canvas");u.width=128,u.height=128;let f=u.getContext("2d");f.fillStyle="#3a2f22",f.fillRect(0,0,128,128);for(let p=0;p<16;p++)for(let _=0;_<16;_++){let M=(p+_)%2,y=120+(p*37+_*11)%23*2;f.fillStyle=`rgb(${y+18},${y},${y-38})`,M?f.fillRect(_*8+.5,p*8+1,7,6):f.fillRect(_*8+1.5,p*8+.5,5,7)}let h=new Yn(u);h.colorSpace=qt,h.wrapS=h.wrapT=ci,h.repeat.set(5,3);let d=[[.001,0],[.1,0],[.145,.04],[.165,.12],[.15,.2],[.105,.26],[.075,.29],[.072,.31],[.09,.335],[.085,.34],[.066,.315]].map(([p,_])=>new ve(p,_)),m=new Sr(d,28),x=new ze(m,Tt(new en({map:h,roughness:.9,side:Lt,color:12101258}),null,"basket"));x.position.set(-.32,.06,ws-Es*.6),x.rotation.set(.05,.4,-.08),s.add(x)}{let u=Tt(new en({color:6048826,roughness:1}),null,"rope"),f=si(.95,0);for(let h=0;h<3;h++){let d=new Uo(.12-h*.012,.016,6,22);d.rotateX(Math.PI/2);let m=new ze(d,u);m.position.set(.06+h*.006,s.userData.deckY+.016+h*.03,f[2]+.22),s.add(m)}}{let u=document.createElement("canvas");u.width=u.height=64;let f=u.getContext("2d"),h=f.createRadialGradient(32,40,2,32,34,30);h.addColorStop(0,"#f8cbd6"),h.addColorStop(.6,"#ee9fb5"),h.addColorStop(1,"#d9768f"),f.fillStyle=h,f.beginPath(),f.moveTo(32,62),f.bezierCurveTo(6,48,4,14,22,4),f.lineTo(32,12),f.lineTo(42,4),f.bezierCurveTo(60,14,58,48,32,62),f.fill();let d=new Yn(u);d.colorSpace=qt;let m=Tt(new en({map:d,alphaTest:.5,side:Lt,roughness:.75,emissive:15902904,emissiveIntensity:.05}),null,"bpetal"),x=520,g=new fn(.046,.04);g.rotateX(-Math.PI/2);let p=new Qt(g,m,x),_=new qe,M=new zt,y=new Ln,S=new I,b=new I,w=v=>{let E=Math.sin(v*12.9898+4.1)*43758.5453;return E-Math.floor(E)};for(let v=0;v<x;v++){let E,A,C,L=w(v),U=w(v+1e3);if(w(v+2e3)<.12){let B=[.42,.66,.84][v%3],k=si(B,1);E=(L-.5)*(k[0]*2-.1),A=k[1]-.12+.026,C=k[2]+(U-.5)*.2}else{let B=.2+U*.72,k=0,J=1;for(let Y=0;Y<16;Y++){let Q=(k+J)/2;si(B,Q)[1]<.062?k=Q:J=Q}let X=si(B,k)[0];E=(L*2-1)*X*.92,A=.064,C=ws-Es*B}y.set((w(v+3e3)-.5)*.5,w(v+4e3)*6.28,(w(v+5e3)-.5)*.5),M.setFromEuler(y);let F=.8+w(v+6e3)*.6;_.compose(S.set(E,A,C),M,b.set(F,F,F)),p.setMatrixAt(v,_)}p.count=0,p.name="boatPetals",p.frustumCulled=!1,s.add(p),s.userData.petals=p}return s.traverse(u=>{u.isMesh&&(u.castShadow=u.name!=="boatPetals"&&u.name!=="noShadow",u.receiveShadow=!0)}),s}var qf=new I(0,1.12,.95);var ac=[0,.3,.62,1],N1=.84;function U1(){let s=new nt,e=ac.length*4;s.setAttribute("position",new Pt(new Float32Array(e*3),3)),s.setAttribute("normal",new Pt(new Float32Array(e*3),3));let t=[];for(let n=0;n<2;n++){let i=n*ac.length*2;for(let r=0;r<ac.length-1;r++){let a=i+r*2,o=a+2;t.push(a,o,a+1,a+1,o,o+1)}}return s.setIndex(t),s.boundingSphere=new kn(new I,1.2),s}function O1(s,e){let t=s.attributes.position.array,n=s.attributes.normal.array,i=0;for(let r of[-1,1]){let a=.05,o=0,c=0;for(let l=0;l<ac.length;l++){let u=ac[l],f=e*(.65+.75*u);if(l>0){let x=(u-c)*N1;a+=Math.cos(f)*x,o+=Math.sin(f)*x}c=u;let h=u*u*.1,d=-.11+.07*u+h,m=.17-.06*u+h;for(let x of[d,m])t[i*3]=r*a,t[i*3+1]=o,t[i*3+2]=x,n[i*3]=-r*Math.sin(f),n[i*3+1]=Math.cos(f),n[i*3+2]=0,i++}}s.attributes.position.needsUpdate=!0,s.attributes.normal.needsUpdate=!0}function S0(s=3){let e=new kt;e.name="egrets";let t=Tt(new yn({color:16052972,side:Lt}),null,"egret"),n=Tt(new yn({color:14069324}),null,"egretB"),i=Tt(new yn({color:3026730}),null,"egretL"),r=new ms(1,12,8);r.scale(.068,.072,.3),r.translate(0,0,.03);let a=new ms(1,10,8);a.scale(.045,.05,.1),a.translate(0,.045,-.25);let o=new ms(.047,10,8);o.translate(0,.06,-.33);let c=new Lo(.011,.16,6);c.rotateX(-Math.PI/2),c.translate(0,.052,-.44);let l=new $n(.013,.013,.42);l.translate(0,-.01,.5);let u=[];for(let m=0;m<s;m++){let x=new kt,g=U1();x.add(new ze(r,t),new ze(a,t),new ze(o,t),new ze(c,n),new ze(g,t));for(let p of[-.022,.022]){let _=new ze(l,i);_.position.x=p,x.add(_)}x.scale.setScalar(1.25+m*.05),x.userData.wing=g,e.add(x),u.push(x)}let f=[{T0:3.2,D:10,dir:1,ahead:27,h:2.3},{T0:12.6,D:11,dir:-1,ahead:33,h:3},{T0:13.5,D:11,dir:-1,ahead:37.5,h:3.6}],h={},d=3;return e.userData.update=(m,x,g,p)=>{e.visible=g<.6,e.visible&&u.forEach((_,M)=>{let y=f[M],S=(x-y.T0)/y.D;if(_.visible=S>-.04&&S<1.04,!_.visible)return;let b=p(y.T0)+y.ahead+(x-y.T0)*d;Mn(b,h);let w=Wn(b)+8,v=y.dir*(S*2-1)*w,E=y.dir*2*w/y.D,A=re(-.75,-.1,Math.sin(m*.45+M*2.1)),C=m*14.4+M*1.9,L=y.h+.7*Math.sin(Math.PI*at(S,0,1))+A*.035*Math.sin(C+1.6);_.position.set(h.x-h.tz*v,L,h.z+h.tx*v);let U=h.tx*d-h.tz*E,D=h.tz*d+h.tx*E;_.rotation.set(.05,Math.atan2(-U,-D),.07*Math.sin(m*.7+M),"YXZ"),O1(_.userData.wing,.07+A*(.16+.52*Math.sin(C)))})},e}var B1="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function k1(){let s=new nt;return s.setAttribute("position",new _e([-1,-1,0,3,-1,0,-1,3,0],3)),s.setAttribute("uv",new _e([0,0,2,0,0,2],2)),s}var zu=(s,e,t=0,n=!1)=>new vn(Math.max(1,s),Math.max(1,e),{type:Fn,samples:t,depthBuffer:n,stencilBuffer:!1,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),Hu=class{constructor(e){this.r=e,this.cam=new ji(-1,1,1,-1,0,1),this.mesh=new ze(k1()),this.mesh.frustumCulled=!1,this.sc=new ds,this.sc.add(this.mesh);let t=(n,i)=>new Ht({vertexShader:B1,fragmentShader:n,uniforms:i,depthTest:!1,depthWrite:!1});this.mBright=t(`uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThr; varying vec2 vUv;
      void main(){ vec3 c = (texture2D(tSrc, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, -0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, 0.5)).rgb) * 0.25;
        float l = max(c.r, max(c.g, c.b)); float k = 0.5 * uThr; float s = clamp(l - uThr + k, 0.0, 2.0 * k); s = s * s / (4.0 * k + 1e-4); float w = max(s, l - uThr) / max(l, 1e-4);
        gl_FragColor = vec4(min(c * w, vec3(12.0)), 1.0); }`,{tSrc:{value:null},uTexel:{value:new ve},uThr:{value:.9}}),this.mDown=t(`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
      void main(){ vec3 c = texture2D(tSrc, vUv).rgb * 0.5 + (texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb) * 0.125; gl_FragColor = vec4(c, 1.0); }`,{tSrc:{value:null},uTexel:{value:new ve}}),this.mUp=t(`uniform sampler2D tSrc, tAdd; uniform vec2 uTexel; varying vec2 vUv;
      void main(){ vec3 c = (texture2D(tSrc, vUv + uTexel * vec2(-1.0, 0.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 0.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.0, 1.0)).rgb) * 0.25;
        gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0); }`,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ve}}),this.mFinal=t(`uniform sampler2D tScene, tBloom, tBright, tRays; uniform vec2 uRes, uSunUv; uniform float uTime, uExpo, uBloom, uRays, uFade, uWarm, uSat;
      varying vec2 vUv;
      float h2(vec2 p){ vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
      vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
      vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
      void main(){
        vec2 uv = vUv; vec2 dc = uv - 0.5;
        vec3 col = texture2D(tScene, uv).rgb;
        float ca = 0.0008 + 0.002 * dot(dc, dc); col.r = mix(col.r, texture2D(tScene, uv - dc * ca).r, 0.6); col.b = mix(col.b, texture2D(tScene, uv + dc * ca).b, 0.6);
        col += texture2D(tBloom, uv).rgb * uBloom;
        if (uRays > 0.0) col += texture2D(tRays, uv).rgb * uRays * vec3(1.0, 0.9, 0.76);
        col *= uExpo; col = aces(col); col = toSRGB(col);
        float lm = dot(col, vec3(0.299, 0.587, 0.114)); col = mix(vec3(lm), col, uSat); col = clamp(col, 0.0, 1.0); col = mix(col, col * col * (3.0 - 2.0 * col), 0.22);
        // \u7C89\u5F69\u6E10\u53D8\u6620\u5C04\uFF1A\u6697\u90E8\u504F\u9EDB\u9752\uFF0C\u4EAE\u90E8\u504F\u7C73\u767D
        float l = dot(col, vec3(0.299, 0.587, 0.114)); vec3 gm = mix(mix(vec3(0.24, 0.26, 0.3), vec3(0.93, 0.7, 0.76), smoothstep(0.0, 0.6, l)), vec3(0.97, 0.95, 0.9), smoothstep(0.55, 1.0, l));
        col = mix(col, gm, 0.1);
        col = mix(col, col * vec3(1.02, 0.99, 0.97 + 0.04 * (1.0 - uWarm)) + vec3(0.012, 0.008, 0.02), 0.6);
        col *= mix(1.0, 0.66 + 0.34 * pow(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.22), 0.85);
        vec2 fc = gl_FragCoord.xy; float paper = h2(floor(fc * 0.5)) * 0.5 + h2(floor(fc * 0.13)) * 0.5; float fib = h2(floor(vec2(fc.x * 0.05, fc.y * 0.9)));
        col *= 0.982 + paper * 0.03 + fib * 0.008;
        col += (h2(fc + fract(uTime * 0.37) * 311.0) - 0.5) * 0.03;
        col = mix(col, vec3(0.96, 0.94, 0.89), uFade);
        gl_FragColor = vec4(col, 1.0); }`,{tScene:{value:null},tBloom:{value:null},tBright:{value:null},tRays:{value:null},uRes:{value:new ve},uSunUv:{value:new ve(.5,.5)},uTime:{value:0},uExpo:{value:1},uBloom:{value:.35},uRays:{value:0},uFade:{value:0},uWarm:{value:1},uSat:{value:1.12}}),this.mRays=t(`uniform sampler2D tBright; uniform vec2 uSunUv; varying vec2 vUv;
      void main(){ vec2 d = (vUv - uSunUv) / 48.0; vec2 q = vUv; float w = 1.0; vec3 acc = vec3(0.0); for (int i = 0; i < 48; i++) { q -= d; acc += texture2D(tBright, q).rgb * w; w *= 0.955; } gl_FragColor = vec4(acc / 48.0, 1.0); }`,{tBright:{value:null},uSunUv:{value:new ve(.5,.5)}}),this.levels=5}setSize(e,t,n,i){this.w=e,this.h=t;let r=Math.round(e*n),a=Math.round(t*n);this.scene&&(this.scene.dispose(),this.bloom.forEach(l=>l.dispose()),this.ups.forEach(l=>l.dispose()),this.raysRT.dispose()),this.scene=zu(r,a,i,!0),this.bloom=[],this.ups=[];let o=r>>1,c=a>>1;for(let l=0;l<this.levels;l++)this.bloom.push(zu(o,c)),this.ups.push(zu(o,c)),o=Math.max(1,o>>1),c=Math.max(1,c>>1);this.raysRT=zu(Math.max(1,r>>2),Math.max(1,a>>2)),this.mFinal.uniforms.uRes.value.set(e,t)}pass(e,t){this.mesh.material=e,this.r.setRenderTarget(t),this.r.render(this.sc,this.cam)}render(e,t,n){let i=this.r;i.setRenderTarget(this.scene),i.clear(),i.render(e,t);let r=this.mBright.uniforms;r.tSrc.value=this.scene.texture,r.uTexel.value.set(1/this.scene.width,1/this.scene.height),r.uThr.value=n.thr,this.pass(this.mBright,this.bloom[0]);for(let c=1;c<this.levels;c++){let l=this.mDown.uniforms;l.tSrc.value=this.bloom[c-1].texture,l.uTexel.value.set(1/this.bloom[c-1].width,1/this.bloom[c-1].height),this.pass(this.mDown,this.bloom[c])}let a=this.bloom[this.levels-1];for(let c=this.levels-2;c>=0;c--){let l=this.mUp.uniforms;l.tSrc.value=a.texture,l.tAdd.value=this.bloom[c].texture,l.uTexel.value.set(1/a.width,1/a.height),this.pass(this.mUp,this.ups[c]),a=this.ups[c]}if(n.rays>0){let c=this.mRays.uniforms;c.tBright.value=this.bloom[1].texture,c.uSunUv.value.copy(n.sunUv),this.pass(this.mRays,this.raysRT)}let o=this.mFinal.uniforms;o.tRays.value=this.raysRT.texture,o.tScene.value=this.scene.texture,o.tBloom.value=a.texture,o.tBright.value=this.bloom[1].texture,o.uTime.value=n.time,o.uExpo.value=n.expo,o.uBloom.value=n.bloom,o.uRays.value=n.rays,o.uSunUv.value.copy(n.sunUv),o.uFade.value=n.fade,o.uWarm.value=n.warm,o.uSat.value=n.sat,this.pass(this.mFinal,null)}};function Xf(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new nt,l=0;for(let u=0;u<s.length;++u){let f=s[u],h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,f=[];for(let h=0;h<s.length;++h){let d=s[h].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=s[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=w0(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][h]);let m=w0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function w0(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Pt(a,t,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let f=c/t;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<t;m++){let x=u.getComponent(h,m);o.setComponent(h+f,m,x)}}else a.set(u.array,c);c+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function jf(s,e){if(e===lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ia||e===Zo){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ia)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Gu(s){let e=new Map,t=new Map,n=s.clone();return E0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function E0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)E0(s.children[n],e.children[n],t)}var Vu=class extends Xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Wu(t,It.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wu(t,It.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new dd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ms.extractUrlBase(e);a=Ms.resolveURL(l,this.path)}else a=Ms.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ma(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===P0){try{a[It.KHR_BINARY_GLTF]=new pd(e)}catch(f){i&&i(f);return}r=JSON.parse(a[It.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new yd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case It.KHR_MATERIALS_UNLIT:a[f]=new $f;break;case It.KHR_DRACO_MESH_COMPRESSION:a[f]=new md(r,this.dracoLoader);break;case It.KHR_TEXTURE_TRANSFORM:a[f]=new gd;break;case It.KHR_MESH_QUANTIZATION:a[f]=new xd;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function z1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function xn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var It={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zf=class{constructor(e){this.parser=e,this.name=It.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Kn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ys(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ho(u),l.distance=f;break;case"spot":l=new zo(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ts(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},$f=class{constructor(){this.name=It.KHR_MATERIALS_UNLIT}getMaterialType(){return Ni}extendParams(e,t,n){let i=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(i)}},Qf=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(r,r)}return Promise.all(i)}},td=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_DISPERSION}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},nd=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},id=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_SHEEN}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Kn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,qt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},sd=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},rd=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_VOLUME}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(r[0],r[1],r[2],Kn),Promise.all(i)}},ad=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_IOR}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},od=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_SPECULAR}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(r[0],r[1],r[2],Kn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,qt)),Promise.all(i)}},cd=class{constructor(e){this.parser=e,this.name=It.EXT_MATERIALS_BUMP}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},ld=class{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return xn(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=xn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},ud=class{constructor(e){this.parser=e,this.name=It.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},hd=class{constructor(e){this.parser=e,this.name=It.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},fd=class{constructor(e){this.parser=e,this.name=It.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Wu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}},dd=class{constructor(e){this.name=It.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Si.TRIANGLES&&l.mode!==Si.TRIANGLE_STRIP&&l.mode!==Si.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,d=[];for(let m of f){let x=new qe,g=new I,p=new zt,_=new I(1,1,1),M=new Qt(m.geometry,m.material,h);for(let S=0;S<h;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&_.fromBufferAttribute(c.SCALE,S),M.setMatrixAt(S,x.compose(g,p,_));let y=null;for(let S in c)if(S==="_COLOR_0"){let b=c[S];M.instanceColor=new an(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(y===null){let w=M.geometry;y=new nt,y.name=w.name;for(let v in w.attributes)y.setAttribute(v,w.attributes[v]);for(let v in w.morphAttributes)y.morphAttributes[v]=w.morphAttributes[v];w.index!==null&&y.setIndex(w.index),y.morphTargetsRelative=w.morphTargetsRelative;for(let v of w.groups)y.addGroup(v.start,v.count,v.materialIndex);w.boundingBox!==null&&(y.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(y.boundingSphere=w.boundingSphere.clone()),y.drawRange.start=w.drawRange.start,y.drawRange.count=w.drawRange.count,y.userData=Object.assign({},w.userData),M.geometry=y}let b=c[S];y.setAttribute(S,new an(b.array,b.itemSize,b.normalized))}on.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},P0="glTF",oc=12,T0={JSON:1313821514,BIN:5130562},pd=class{constructor(e){this.name=It.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,oc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-oc,r=new DataView(e,oc),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===T0.JSON){let l=new Uint8Array(e,oc+a,o);this.content=n.decode(l)}else if(c===T0.BIN){let l=oc+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},md=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=It.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let f=vd[u]||u.toLowerCase();o[f]=a[u]}for(let u in e.attributes){let f=vd[u]||u.toLowerCase();if(a[u]!==void 0){let h=n.accessors[e.attributes[u]],d=Ha[h.componentType];l[f]=d.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}f(d)},o,l,Kn,h)})})}},gd=class{constructor(){this.name=It.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},xd=class{constructor(){this.name=It.KHR_MESH_QUANTIZATION}},qu=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,m=e*l,x=m-l,g=-2*d+3*h,p=d-h,_=1-g,M=p-h+f;for(let y=0;y!==o;y++){let S=a[x+y+o],b=a[x+y+c]*u,w=a[m+y+o],v=a[m+y]*u;r[y]=_*S+M*b+g*w+p*v}return r}},H1=new zt,bd=class extends qu{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return H1.fromArray(r).normalize().toArray(r),r}},Si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},A0={9728:gn,9729:Yt,9984:Bl,9985:Aa,9986:Ir,9987:ui},R0={33071:xi,33648:fa,10497:ci},Kf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},G1={CUBICSPLINE:void 0,LINEAR:xr,STEP:gr},Yf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function V1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),s.DefaultMaterial}function Or(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ts(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function W1(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let f=e[l];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(h)}if(i){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(h)}if(r){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],f=l[1],h=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function q1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function X1(s){let e,t=s.extensions&&s.extensions[It.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jf(t.attributes):e=s.indices+":"+Jf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jf(s.targets[n]);return e}function Jf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function _d(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var K1=new qe,yd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new z1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Er(this.options.manager):this.textureLoader=new Go(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ma(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Or(r,o,i),ts(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[It.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ms.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Kf[i.type],o=Ha[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Pt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Kf[i.type],l=Ha[i.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(d&&d!==f){let p=Math.floor(h/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,M=t.cache.get(_);M||(x=new l(o,p*d,i.count*d/u),M=new _r(x,d/u),t.cache.add(_,M)),g=new Gs(M,c,h%d/u,m)}else o===null?x=new l(i.count*c):x=new l(o,h,i.count*c),g=new Pt(x,c,m);if(i.sparse!==void 0){let p=Kf.SCALAR,_=Ha[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new _(a[1],M,i.sparse.count*p),b=new l(a[2],y,i.sparse.count*c);o!==null&&(g=new Pt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,v=S.length;w<v;w++){let E=S[w];if(g.setX(E,b[w*c]),c>=2&&g.setY(E,b[w*c+1]),c>=3&&g.setZ(E,b[w*c+2]),c>=4&&g.setW(E,b[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return u.magFilter=A0[h.magFilter]||Yt,u.minFilter=A0[h.minFilter]||ui,u.wrapS=R0[h.wrapS]||ci,u.wrapT=R0[h.wrapT]||ci,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==gn&&u.minFilter!==Yt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;let h=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(f){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(x){let g=new En(x);g.needsUpdate=!0,h(g)}),t.load(Ms.resolveURL(f,r.path),m,void 0,d)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),ts(f,a),f.userData.mimeType=a.mimeType||j1(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[It.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[It.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[It.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new _a,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new va,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return en}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[It.KHR_MATERIALS_UNLIT]){let f=i[It.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,r,t))}else{let f=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Kn),o.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,qt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Lt);let u=r.alphaMode||Yf.OPAQUE;if(u===Yf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Yf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ni&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==Ni&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ni){let f=r.emissiveFactor;o.emissive=new Oe().setRGB(f[0],f[1],f[2],Kn)}return r.emissiveTexture!==void 0&&a!==Ni&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qt)),Promise.all(l).then(function(){let f=new a(o);return r.name&&(f.name=r.name),ts(f,r),t.associations.set(f,{materials:e}),r.extensions&&Or(i,f,r),f})}createUniqueName(e){let t=$t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[It.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return C0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=X1(l),f=i[u];if(f)a.push(f.promise);else{let h;l.extensions&&l.extensions[It.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=C0(new nt,l,t),l.mode===Si.TRIANGLE_STRIP?h=h.then(d=>jf(d,Zo)):l.mode===Si.TRIANGLE_FAN&&(h=h.then(d=>jf(d,Ia))),i[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?V1(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=a[d],p,_=l[d];if(g.mode===Si.TRIANGLES||g.mode===Si.TRIANGLE_STRIP||g.mode===Si.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&y?new Eo(x,_):new ze(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Si.LINES)p=new Ao(x,_);else if(g.mode===Si.LINE_STRIP)p=new Mr(x,_);else if(g.mode===Si.LINE_LOOP)p=new Ro(x,_);else if(g.mode===Si.POINTS)p=new Co(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&q1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ts(p,r),g.extensions&&Or(i,p,g),t.assignFinalMaterial(p),f.push(p)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&Or(i,f[0],r),f[0];let h=new kt;r.extensions&&Or(i,h,r),t.associations.set(h,{meshes:e});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(df.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ji(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ts(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let f=a[l];if(f){o.push(f);let h=new qe;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new To(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){let d=i.channels[f],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,_=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(m),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){let h=f[0],d=f[1],m=f[2],x=f[3],g=f[4],p=[];for(let M=0,y=h.length;M<y;M++){let S=h[M],b=d[M],w=m[M],v=x[M],E=g[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let A=n._createAnimationTracks(S,b,w,v,E);if(A)for(let C=0;C<A.length;C++)p.push(A[C])}let _=new wr(r,void 0,p);return ts(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],f=l[1],h=l[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,K1)});for(let d=0,m=f.length;d<m;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){let d=u.userData.pivot,m=f[0];u.pivot=new I().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new ba:l.length>1?u=new kt:l.length===1?u=l[0]:u=new on,u!==l[0])for(let f=0,h=l.length;f<h;f++)u.add(l[f]);if(r.name&&(u.userData.name=r.name,u.name=a),ts(u,r),r.extensions&&Or(n,u,r),r.matrix!==void 0){let f=new qe;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new kt;n.name&&(r.name=i.createUniqueName(n.name)),ts(r,n),n.extensions&&Or(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,f=c.length;u<f;u++){let h=c[u];h.parent!==null?r.add(Gu(h)):r.add(h)}let l=u=>{let f=new Map;for(let[h,d]of i.associations)(h instanceof zn||h instanceof En)&&f.set(h,d);return u.traverse(h=>{let d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}$s[r.path]===$s.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch($s[r.path]){case $s.weights:u=bs;break;case $s.rotation:u=vs;break;case $s.translation:case $s.scale:u=Xs;break;default:n.itemSize===1?u=bs:u=Xs;break}let f=i.interpolation!==void 0?G1[i.interpolation]:xr,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let x=new u(c[d]+"."+$s[r.path],t.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_d(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof vs?bd:qu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Y1(s,e,t){let n=e.attributes,i=new _n;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let u=_d(Ha[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,c=new I;for(let l=0,u=r.length;l<u;l++){let f=r[l];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){let x=_d(Ha[h.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new kn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function C0(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=vd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ct.workingColorSpace!==Kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),ts(s,e),Y1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?W1(s,e.targets,t):s})}var I0=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),M=0;M<p.length;++M){var y=p.charCodeAt(M);_[M]=y>96?y-97:y>64?y-39:y+4}for(var S=0,M=0;M<p.length;++M)_[S++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,S)}function c(p,_,M,y,S,b,w){var v=p.exports.sbrk,E=y+3&-4,A=v(E*S),C=v(b.length),L=new Uint8Array(p.exports.memory.buffer);L.set(b,C);var U=_(A,y,S,C,b.length);if(U==0&&w&&w(A,E,S),M.set(L.subarray(A,A+y*S)),v(A-v(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],h=0;function d(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(M){var y=M.data;_.pending-=y.count,_.requests[y.id][y.action](y.value),delete _.requests[y.id]},_}function m(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),M=new Blob([_],{type:"text/javascript"}),y=URL.createObjectURL(M),S=f.length;S<p;++S)f[S]=d(y);for(var S=p;S<f.length;++S)f[S].object.postMessage({});f.length=p,URL.revokeObjectURL(y)}function x(p,_,M,y,S){for(var b=f[0],w=1;w<f.length;++w)f[w].pending<b.pending&&(b=f[w]);return new Promise(function(v,E){var A=new Uint8Array(M),C=++h;b.pending+=p,b.requests[C]={resolve:v,reject:E},b.object.postMessage({id:C,count:p,size:_,source:A,mode:y,filter:S},[A.buffer])})}function g(p){var _=p.data;self.ready.then(function(M){if(!_.id)return self.close();try{var y=new Uint8Array(_.count*_.size);c(M,M.exports[_.mode],y,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:y},[y.buffer])}catch(S){self.postMessage({id:_.id,count:_.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,_,M,y,S){c(r,r.exports.meshopt_decodeVertexBuffer,p,_,M,y,r.exports[l[S]])},decodeIndexBuffer:function(p,_,M,y){c(r,r.exports.meshopt_decodeIndexBuffer,p,_,M,y)},decodeIndexSequence:function(p,_,M,y){c(r,r.exports.meshopt_decodeIndexSequence,p,_,M,y)},decodeGltfBuffer:function(p,_,M,y,S,b){c(r,r.exports[u[S]],p,_,M,y,r.exports[l[b]])},decodeGltfBufferAsync:function(p,_,M,y,S){return f.length>0?x(p,_,M,u[y],l[S]):a.then(function(){var b=new Uint8Array(p*_);return c(r,r.exports[u[y]],b,p,_,M,r.exports[l[S]]),b})}}})();function cc(s,e){s.scene.updateMatrixWorld(!0);let t=null;s.scene.traverse(c=>{c.isMesh&&!t&&(t=c)});let n=t.geometry,i=new nt;for(let c of["position","normal","uv"]){let l=n.attributes[c];if(!l)continue;let u=l.count,f=l.itemSize,h=new Float32Array(u*f);for(let d=0;d<u;d++)h[d*f]=l.getX(d),f>1&&(h[d*f+1]=l.getY(d)),f>2&&(h[d*f+2]=l.getZ(d));i.setAttribute(c,new Pt(h,f))}n.index&&i.setIndex(new Pt(n.index.array.slice(),1)),i.applyMatrix4(t.matrixWorld),i.computeBoundingBox();let r=i.boundingBox,a=e||{cx:(r.min.x+r.max.x)/2,y0:r.min.y,cz:(r.min.z+r.max.z)/2,h:r.max.y-r.min.y};i.translate(-a.cx,-a.y0,-a.cz),i.scale(1/a.h,1/a.h,1/a.h),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere();let o=t.material;return o.metalness=0,o.metalnessMap=null,o.roughness=1,o.envMapIntensity=0,o.needsUpdate=!0,{geo:i,mat:o,norm:a}}var lc={x:.418,y:.35,z:.506,w:.232,h:.174},L0=[[-.33,.44,.6],[.24,.44,.6]],J1=[.42,.8,-.35];function Z1(){let s=new Sr([[0,-.2],[.11,-.19],[.18,-.13],[.21,-.02],[.2,.07],[.16,.15],[.09,.2],[0,.21]].map(([a,o])=>new ve(a,o)),12),e=new bi(.085,.095,.05,12).translate(0,.215,0),t=new bi(.095,.085,.05,12).translate(0,-.215,0),n=new bi(.008,.008,.3,4).translate(0,.39,0),i=new bi(.03,.012,.16,6).translate(0,-.32,0);return Xf([[s,1,[.55,.13,.07]],[e,0,[.1,.07,.04]],[t,0,[.1,.07,.04]],[n,0,[.08,.06,.04]],[i,.6,[.5,.12,.06]]].map(([a,o,c])=>{let l=a.attributes.position.count;return a.setAttribute("aGlow",new _e(new Array(l).fill(o),1)),a.setAttribute("color",new _e(Array.from({length:l*3},(u,f)=>c[f%3]),3)),a}))}function $1(){let s=new $n(1.5,.1,.46,8,1,3).translate(0,.39,0),e=new $n(.3,.36,.38,2,2,2).translate(-.5,.17,0),t=e.clone().translate(1,0,0),n=Xf([s,e,t].map(a=>a.toNonIndexed())),i=n.attributes.position,r=[];for(let a=0;a<i.count;a++){let o=i.getX(a),c=i.getY(a),l=i.getZ(a),u=dt(o*3.1+l*2.3,c*4.7);i.setXYZ(a,o*(1+.04*u),c+.012*dt(o*7.3,l*5.1),l*(1+.05*u));let f=.5+.5*dt(o*2.2+3,l*2.2+c*3),h=.36+.08*f;r.push(h*1.02,h,h*.9-.02*f)}return n.setAttribute("color",new _e(r,3)),n.computeVertexNormals(),n}function D0(s,e){let{houses:t,L2W:n,hAt:i,F:r,R:a,TU:o,r:c,free:l,near:u,pond:f}=e;return Promise.all(["house_lo","mulberry_lo","well_lo","house_far","mulberry_far"].map(h=>s.loadAsync("./models/"+h+".glb"))).then(([h,d,m,x,g])=>{let p=new kt;p.name="village";let _=oe=>Math.atan2(a.x*Math.sin(oe)+r.x*Math.cos(oe),a.z*Math.sin(oe)+r.z*Math.cos(oe)),M=new I(0,1,0),y=new zt,S=new I,b=new I,w=new qe,v=new qe,E=new I,A=(oe,xe,He,it)=>{let st=new Qt(oe,xe,He);return st.name=it,st.castShadow=st.receiveShadow=!0,p.add(st),st},C=(oe,xe,He,it,st)=>{let H=He.length,Dt=A(oe.geo,oe.mat,H,st),mt=A(xe.geo,xe.mat,H,st+"Far"),N=new Int8Array(H).fill(-1),T=He.map(Z=>new I().setFromMatrixPosition(Z)),j=(Z,te)=>{let be=!1;for(let ie=0;ie<H;ie++){let Se=!te&&T[ie].distanceToSquared(Z)<it*it?1:0;Se!==N[ie]&&(N[ie]=Se,be=!0)}if(!be)return;let me=0,ne=0;for(let ie=0;ie<H;ie++)N[ie]?Dt.setMatrixAt(me++,He[ie]):mt.setMatrixAt(ne++,He[ie]);Dt.count=me,mt.count=ne,Dt.visible=me>0,mt.visible=ne>0,Dt.instanceMatrix.needsUpdate=mt.instanceMatrix.needsUpdate=!0,me&&Dt.computeBoundingSphere(),ne&&mt.computeBoundingSphere()};return j(new I(1e7,0,1e7),!1),{a:Dt,b:mt,set:j}},L=cc(h);Tt(L.mat,null,"house");let U=cc(x,L.norm);Tt(U.mat,null,"house");let D=[],F=[];t.forEach((oe,xe)=>{let He=6*oe.s,it=i(oe.a,oe.b-4.2*oe.s)-.04;n(oe.a,it,oe.b,S),y.setFromAxisAngle(M,_(Math.PI)+oe.rot),w.compose(S,y,b.setScalar(He)),D.push(w.clone()),oe.smoke&&F.push(E.set(...J1).applyMatrix4(w).clone())});let B=C(L,U,D,55,"houses"),k=t.map((oe,xe)=>xe).filter(()=>c()<.88),J=new Ht({uniforms:Object.assign({uLamp:o.uLamp},ht),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`attribute vec2 aW; uniform float uLamp; varying vec2 vUv; varying float vOn, vSeed; varying vec3 vW;
        void main(){ vUv = uv; vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz; vOn = smoothstep(aW.x, aW.x + 1.6, uLamp); vSeed = aW.y; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`varying vec2 vUv; varying float vOn, vSeed; varying vec3 vW; ${Jn}
        void main(){ if (vOn < 0.004) discard;
          vec2 g = vUv * vec2(4.0, 3.0), f = abs(fract(g) - 0.5), fw = fwidth(g);
          float bar = max(smoothstep(0.41 - fw.x, 0.41 + fw.x, f.x), smoothstep(0.39 - fw.y, 0.39 + fw.y, f.y)); bar = mix(bar, 0.3, smoothstep(0.2, 0.5, max(fw.x, fw.y)));
          float fl = 0.92 + 0.08 * sin(uTime * 6.3 + vSeed * 40.0) * sin(uTime * 2.7 + vSeed * 11.0);
          vec3 glow = vec3(1.0, 0.56, 0.24) * (2.4 - 1.3 * length((vUv - 0.5) * vec2(1.0, 1.4))) * fl;
          vec3 c = mix(glow, vec3(0.05, 0.03, 0.018), bar * 0.88);
          gl_FragColor = vec4(applyFog(c, vW), vOn); }`}),X=new fn(lc.w,lc.h),Y=new Float32Array(k.length*2),Q=new Qt(X,J,k.length);Q.name="windows",Q.renderOrder=2,v.makeTranslation(lc.x,lc.y,lc.z),k.forEach((oe,xe)=>{Q.setMatrixAt(xe,w.multiplyMatrices(D[oe],v)),Y[xe*2]=48+c()*9,Y[xe*2+1]=c()}),X.setAttribute("aW",new an(Y,2)),Q.computeBoundingSphere(),p.add(Q);let de=Z1(),ye=Tt(new yn({color:16777215,vertexColors:!0}),oe=>{oe.uniforms.uLamp=o.uLamp,oe.vertexShader=oe.vertexShader.replace("#include <common>",`#include <common>
attribute float aGlow; attribute vec2 aL; uniform float uLamp, uTime; varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vGlow = aGlow * smoothstep(aL.x, aL.x + 1.2, uLamp) * (0.9 + 0.1 * sin(uTime * 5.0 + aL.y * 30.0));
          { float sw = sin(uTime * 1.3 + aL.y * 20.0) * 0.05; transformed.x += sw * (0.45 - transformed.y); }`),oe.fragmentShader=oe.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vec3(1.0, 0.3, 0.09) * vGlow * 2.6;`)},"lantern"),Ve=[];t.forEach((oe,xe)=>{oe.b<212&&Math.abs(oe.a)<34?L0.forEach(it=>Ve.push([xe,it])):c()<.32&&Ve.push([xe,L0[0]])});let Ye=new Qt(de,ye,Math.max(1,Ve.length));Ye.name="lanterns",Ye.castShadow=!0;let Qe=new Float32Array(Math.max(1,Ve.length)*2);Ve.forEach(([oe,xe],He)=>{let it=t[oe];E.set(...xe).applyMatrix4(D[oe]),y.setFromAxisAngle(M,_(Math.PI)+it.rot),w.compose(E,y,b.setScalar(it.s)),Ye.setMatrixAt(He,w),Qe[He*2]=47.5+c()*6,Qe[He*2+1]=c()}),Ye.count=Ve.length,de.setAttribute("aL",new an(Qe,2)),Ye.computeBoundingSphere(),p.add(Ye);let ee=oe=>{oe.vertexShader=oe.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { vec4 ip = vec4(0.0, 0.0, 0.0, 1.0);
          #ifdef USE_INSTANCING
            ip = instanceMatrix * ip;
          #endif
          float ph = dot(ip.xz, vec2(0.37, 0.21)), k = transformed.y * transformed.y; transformed.x += sin(uTime * 1.1 + ph) * 0.012 * k; transformed.z += cos(uTime * 0.9 + ph * 1.3) * 0.01 * k; }`),oe.fragmentShader=oe.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        { float l = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11)); diffuseColor.rgb = mix(vec3(l), diffuseColor.rgb, 0.66) * vec3(0.72, 0.79, 0.68); }`)},se=cc(d);Tt(se.mat,ee,"mulberry");let Ae=cc(g,se.norm);Tt(Ae.mat,ee,"mulberry");let Ze=[],Re=(oe,xe,He)=>{l(oe,xe,2.6)&&!u(oe,xe,4.2)&&!Ze.some(it=>Math.hypot(it[0]-oe,it[1]-xe)<7)&&Ze.push([oe,xe,He])};for(let oe of[-14,-27,-41,-56,-72,-86,14,27,38])Re(oe+(c()-.5)*3,184.2+c()*2.4,.85+c()*.3);for(let oe=0,xe=0;oe<t.length&&xe<4;oe++){let He=t[(oe*7+3)%t.length];if(He.b<215)continue;let it=c()<.5?-1:1,st=Ze.length;Re(He.a+it*(4.65*He.s+2.4),He.b+3.5,.75+c()*.2),Ze.length>st&&xe++}for(let oe=0;oe<7;oe++){let xe=Math.PI*(.95+oe*.17);Re(f.a+Math.cos(xe)*f.ra*1.2,f.b+Math.sin(xe)*f.rb*1.35,.85+c()*.3)}let vt=Ze.map(([oe,xe,He])=>(n(oe,i(oe,xe)-.06,xe,S),y.setFromAxisAngle(M,c()*6.283),new qe().compose(S,y,b.setScalar(4.8*He)))),jt=C(se,Ae,vt,50,"mulberry"),lt=cc(m);Tt(lt.mat,null,"well");let Ue=new ze(lt.geo,lt.mat);Ue.name="well",Ue.castShadow=Ue.receiveShadow=!0,n(6,i(6,199)-.04,199,Ue.position),Ue.rotation.y=_(Math.PI)+.5,Ue.scale.setScalar(2.4),p.add(Ue);let ot=new ze($1(),Tt(new en({vertexColors:!0,roughness:.95,metalness:0}),null,"bench"));ot.name="bench",ot.castShadow=ot.receiveShadow=!0;{let oe=.75*Math.PI,xe=-6.8-.12*Math.sin(oe),He=189.5-.12*Math.cos(oe);n(xe,i(xe,He)-.02,He,ot.position),ot.rotation.y=_(oe)}p.add(ot);let pt={houses:t.length,windows:k.length,lanterns:Ve.length,mulberry:Ze.length,tris:Math.round(L.geo.index.count/3*t.length+se.geo.index.count/3*Ze.length+lt.geo.index.count/3)};return{group:p,chimneys:F,stats:pt,update(oe,xe,He){B.set(He,!1),jt.set(He,!1)},reflMode(oe,xe){B.set(xe,oe),jt.set(xe,oe),Ye.visible=Ue.visible=ot.visible=!oe}}})}var F0={woman:"woman_v",elder:"elder_v",child:"child_v",farmer:"fisherman_v"},Q1={woman:.663,elder:.598,child:.536,farmer:.65},eM={woman:2.417,child:1.952,elder:1.6,farmer:2.2},N0=.45,tM=.75,Md=Math.PI;function nM(s){let e=[{m:"farmer",H:1.72,y:.44,s:[{t:-10,at:[-86,80.2],clip:"walk",to:[-6,80.2],then:"look_around"}]},{m:"farmer",H:1.66,y:.44,s:[{t:-6,at:[50.1,174.6],clip:"walk",to:[50.1,96],then:"idle"}]},{m:"farmer",H:1.7,y:.44,s:[{t:-4,at:[72,128.3],clip:"walk",to:[-46,128.3],then:"idle"}]},{m:"woman",H:1.58,y:.42,s:[{t:-60,at:[8,146],clip:"lift_heavy",face:-1.9},{t:30.6,clip:"standing_relax",face:"cam"},{t:36.8,clip:"lift_heavy",face:-1.9,off:2}]},{m:"woman",H:1.6,s:[{t:-60,at:[3.5,205.5],clip:"standing_relax",face:Md},{t:"arrive",arrive:45.5,clip:"walk",to:[1.4,187.4],then:"idle",thenFace:"cam",rate:1.12},{t:45.9,clip:"afraid",once:!0,face:"cam"},{t:48.6,clip:"greet_02",once:!0,face:"cam"},{t:53.4,clip:"wave_goodbye_01",once:!0,face:"cam"},{t:56.3,clip:"walk",to:[-17.5,205.4],then:"idle"}]},{m:"elder",H:1.62,s:[{t:-60,at:[-6.8,189.5],clip:"sit",face:.75*Md},{t:44.4,clip:"afraid",once:!0,face:"cam",slide:{to:[-6.42,189.12],d:.7}},{t:47.4,clip:"greet_01",once:!0,face:"cam"},{t:50.9,clip:"laugh_01",once:!0,face:"cam"},{t:56.4,clip:"agree",face:"cam"}]},{m:"child",H:1.12,s:[{t:-60,at:[4.6,191.8],clip:"jump_rope_01",face:-2.75},{t:44,clip:"scared_01",once:!0,face:"cam"},{t:46.9,clip:"run",to:[-7.9,190.9],then:"idle",thenFace:"cam",rate:1.1},{t:53,clip:"cheer",face:"cam"}]},{m:"child",H:1.06,s:[{t:-60,circle:{c:[-1.8,195.2],r:2.6,th0:0},clip:"run",rate:.92},{t:44.3,clip:"afraid",once:!0,face:"cam"},{t:46.9,clip:"idle",face:"cam"},{t:49.2,clip:"clap",face:"cam"}]},{m:"woman",H:1.55,s:[{t:-60,at:[7.35,197.8],clip:"lift_heavy",face:-.85,off:7},{t:44.7,clip:"afraid",once:!0,face:"cam"},{t:47.4,clip:"agree",face:"cam"},{t:51.6,clip:"idle",face:"cam"}]},{m:"elder",H:1.6,s:[{t:-20,at:[-62,214.5],clip:"walk",to:[-12,214.5],then:"idle",thenFace:Md}]}];return(s.paddy||[]).forEach(([t,n],i)=>e.push({m:"woman",paddy:!0,H:1.55+i*.03,y:-.12,s:[{t:-60,at:[t,n],clip:"lift_heavy",face:1.2+i*2.1,off:3+i*5,rate:.8}]})),e}function iM(s,e){let t=[],n=(s.s[0].at||[0,0]).slice(),i=r=>(r.clip==="run"?eM[s.m]:Q1[s.m])*s.H*(r.rate||1);for(let r=0;r<s.s.length;r++){let a={...s.s[r]};a.at&&(n=a.at.slice()),a.p0=n.slice(),a.t==="arrive"&&(a.t=a.arrive-Math.hypot(a.to[0]-n[0],a.to[1]-n[1])/i(a));let o=r+1<s.s.length?s.s[r+1].t==="arrive"?1e9:s.s[r+1].t:1e9;if(a.to){if(a.spd=i(a),a.t1=a.t+Math.hypot(a.to[0]-n[0],a.to[1]-n[1])/a.spd,a.phi=Math.atan2(a.to[0]-n[0],a.to[1]-n[1]),a.face||(a.face="move"),t.push(a),a.t1<o)n=a.to.slice(),t.push({t:a.t1,clip:a.then||"idle",face:a.thenFace??a.phi,p0:n.slice()});else{let c=(o-a.t)/(a.t1-a.t);n=[Ke(n[0],a.to[0],c),Ke(n[1],a.to[1],c)]}continue}if(a.slide){t.push(a),n=a.slide.to.slice();continue}if(a.circle){a.spd=i(a),a.w=a.spd/a.circle.r,a.face||(a.face="move");let c=a.circle.th0+a.w*(Math.min(o,1e5)-a.t);n=[a.circle.c[0]+Math.cos(c)*a.circle.r,a.circle.c[1]+Math.sin(c)*a.circle.r]}t.push(a)}return t.forEach((r,a)=>{r.dur=e[r.clip]?e[r.clip].duration:1,r.rate=r.rate||1,r.ct0=a>0&&t[a-1].clip===r.clip&&t[a-1].rate===r.rate?t[a-1].ct0:r.t-(r.off||0)/r.rate}),t}var sM=s=>Math.atan2(Math.sin(s),Math.cos(s)),rM=(s,e,t)=>s+sM(e-s)*t;function U0(s,e){let{L2W:t,hAt:n,F:i,R:r,camAt:a,ground:o}=e,c=o||n,l=[...new Set(Object.values(F0))];return Promise.all(l.map(u=>s.loadAsync("./models/"+u+".glb"))).then(u=>{let f={};l.forEach((b,w)=>{f[b]=u[w]});for(let b of l)f[b].scene.traverse(w=>{if(!w.isMesh)return;let v=w.material;v.metalness=0,v.metalnessMap=null,v.roughness=1,v.envMapIntensity=0,Tt(v,null,"person")});let h=new kt;h.name="people";let d=b=>Math.atan2(r.x*Math.sin(b)+i.x*Math.cos(b),r.z*Math.sin(b)+i.z*Math.cos(b)),m=nM(e).map((b,w)=>{let v=f[F0[b.m]],E=Gu(v.scene);E.name="person"+w,E.scale.setScalar(b.H);let A=[];E.traverse(D=>{D.isMesh&&(D.castShadow=!0,D.receiveShadow=!0,D.frustumCulled=!1,A.push(D))});let C={};for(let D of v.animations)C[D.name]=D;let L=new Vo(E),U={};for(let D in C){let F=L.clipAction(C[D]);F.play(),F.enabled=!1,U[D]=F}return h.add(E),{c:b,root:E,meshes:A,mixer:L,acts:U,clips:C,S:iM(b,C)}}),x=(b,w)=>{let v=0;for(;v+1<b.length&&w>=b[v+1].t;)v++;return v},g=(b,w,v)=>{if(b.to){let E=at((w-b.t)/(b.t1-b.t),0,1);return v[0]=Ke(b.p0[0],b.to[0],E),v[1]=Ke(b.p0[1],b.to[1],E),v}if(b.circle){let E=b.circle.th0+b.w*(w-b.t);return v[0]=b.circle.c[0]+Math.cos(E)*b.circle.r,v[1]=b.circle.c[1]+Math.sin(E)*b.circle.r,v}if(b.slide){let E=re(b.t,b.t+b.slide.d,w);return v[0]=Ke(b.p0[0],b.slide.to[0],E),v[1]=Ke(b.p0[1],b.slide.to[1],E),v}return v[0]=b.p0[0],v[1]=b.p0[1],v},p=(b,w,v)=>{if(b.face==="move"){if(b.circle){let E=b.circle.th0+b.w*(w-b.t);return Math.atan2(-Math.sin(E),Math.cos(E))}return b.phi}if(b.face==="cam"){let E=a(w);return Math.atan2(E[0]-v[0],E[1]-v[1])}return typeof b.face=="number"?b.face:0},_=[0,0],M=(b,w,v,E=0)=>{let A=b[w];g(A,v,_);let C=p(A,v,_);if(w===0||E>3)return C;let L=re(A.t,A.t+tM,v);if(L>=1)return C;let U=M(b,w-1,A.t,E+1);return rM(U,C,L)},y=(b,w)=>{let v=(w-b.ct0)*b.rate;return b.once?Math.min(Math.max(v,0),b.dur-.01):(v%b.dur+b.dur)%b.dur},S=[0,0];return{group:h,count:m.length,reflMode(b){for(let w of m)w.c.paddy||(w.root.visible=!b)},update(b,w){for(let v of m){let E=v.S,A=x(E,b),C=E[A];if(g(C,b,S),t(S[0],v.c.y??c(S[0],S[1]),S[1],v.root.position),v.root.rotation.y=d(M(E,A,b)),w){let D=v.root.position.distanceToSquared(w)<2500;if(D!==v.sh){v.sh=D;for(let F of v.meshes)F.castShadow=D}}for(let D in v.acts)v.acts[D].enabled=!1;let L=v.acts[C.clip],U=1;if(A>0&&E[A-1].clip!==C.clip&&b-C.t<N0){let D=E[A-1],F=v.acts[D.clip];U=(b-C.t)/N0,F&&(F.enabled=!0,F.weight=1-U,F.time=y(D,b))}L&&(L.enabled=!0,L.weight=U,L.time=y(C,b)),v.mixer.update(0)}}}})}var ns={a0:-150,a1:130,b0:30,b1:176},wi=[[-148.9,2.2],[-100,1.6],[-50,1.6],[0,2.8],[50,1.6],[92,1.6],[128.9,2.2]],Br=[[31.1,2.2],[80,1.6],[128,1.6],[174.9,2.2]],Ot={a:74,b:197,ra:27,rb:13,d:1.4},tn={a0:-100,a1:44,b0:190,b1:272},aM=[206,223,240,257],Qs={a:-10,b:150,ra:255,rb:185},ln={a0:-160,b0:20,w:300,d:200},Ts=0,Xu=1,zr=2,ju=3,As=4,oM=5,cM=6,lM={[Xu]:.95,[zr]:.42,[ju]:.2,[As]:.24},Td=(s,e)=>Math.hypot((s-Qs.a)/Qs.ra,(e-Qs.b)/Qs.rb),uM=s=>.42+.034*Math.max(0,s-190),Ed=(s,e)=>s>ns.a0+.01&&s<ns.a1-.01&&e>ns.b0+.01&&e<ns.b1-.01,uc=(s,e,t)=>{let n=Math.imul(s,374761393)^Math.imul(e,668265263)^Math.imul(t,1440662683);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},hM=[{c:92,q0:.95,k:1,r0:.5,p:.7,h:s=>38+70*re(.95,1.5,s)},{c:240,q0:1.45,k:2,r0:.62,p:.85,h:s=>70+110*re(1.5,3.4,s)},{c:640,q0:3.1,k:3,r0:.7,p:1,h:s=>170+280*re(3.1,9,s)}],k0=(s,e,t)=>{let n=Math.max(t-Math.abs(s-e),0)/t;return Math.max(s,e)+n*n*t*.25};function fM(s,e){let t=0;for(let n of hM){let i=1.3/n.c,r=s+n.c*.2*dt(s*i+n.k*3.1,e*i),a=e+n.c*.2*dt(s*i-5.7,e*i+n.k),o=Math.floor(r/n.c),c=Math.floor(a/n.c);for(let l=c-1;l<=c+1;l++)for(let u=o-1;u<=o+1;u++){let f=(u+.15+.7*uc(u,l,n.k))*n.c,h=(l+.15+.7*uc(u,l,n.k+10))*n.c,d=Td(f,h);if(d<n.q0||uc(u,l,n.k+40)>n.p)continue;let m=n.c*(n.r0+.38*uc(u,l,n.k+20)),x=((r-f)**2+(a-h)**2)/(m*m);if(x>=1)continue;let g=1-x,p=n.h(d)*(.35+.95*uc(u,l,n.k+30))*re(n.q0,n.q0+.15,d);t=k0(t,p*g*g*g,16+n.c*.08)}}return t}function dM(s,e){let t=Td(s,e);if(t<=.84)return 0;let n=t-.84,i=at(.5+.55*Nn(s*.0019+4.2,e*.0019-2.3,3),.15,1.3),r=re(0,.4,n)*(4+10*i)+re(.8,4,n)*150*i,a=k0(r,fM(s,e)*re(0,.2,n),18);return a*=1+.06*dt(s*.009-2.2,e*.009+5.1),re(0,.05,n)*a}function Pn(s,e){if(Ed(s,e))return-.3;let t=Td(s,e),n=.42+.12*Nn(s*.021+3.7,e*.021+1.1,3);{let i=Math.max(ns.a0-s,s-ns.a1,0),r=Math.max(ns.b0-e,e-ns.b1,0);n=Ke(.42,n,re(0,8,Math.hypot(i,r)))}{let i=re(tn.a0-30,tn.a0+5,s)*re(tn.a1+25,tn.a1-2,s)*re(184,194,e);i>0&&(n=Ke(n,uM(e)+.06*dt(s*.1,e*.1),i))}n+=12*Math.pow(re(.6,.9,t),2)*re(25,90,Math.hypot(s,e));{let i=Math.exp(-.5*(s/24)**2),r=e<0?1.95:Ke(1.95,.32,re(0,30,e));r>n&&(n=Ke(n,r,i))}{let i=-.5+3*re(6,16,Math.abs(s)),r=re(i,i-10,e)*(1-re(110,220,Math.abs(s)));r>0&&(n+=r*(36+14*dt(s*.04,2.7)))}{let i=Math.hypot((s-Ot.a)/Ot.ra,(e-Ot.b)/Ot.rb);i<1.15&&(n=Ke(-Ot.d,n,re(.5,1.12,i)))}return n+dM(s,e)}var kr={grassD:Te(5667150),grassL:Te(10007162),earth:Te(11047016),ochre:Te(12163686),lv:Te(5212782),qing:Te(3957880),rock:Te(6253144)};function pM(s,e,t,n){let i=Nn(s*.025+9.1,e*.025-4.4,3),r=dt(s*.004,e*.004),a=Ut(kr.grassD,kr.grassL,at(.55+i*1.1,0,1));{let c=re(tn.a0-6,tn.a0+4,s)*re(tn.a1+6,tn.a1-4,s)*re(186,194,e)*re(tn.b1+10,tn.b1-4,e);a=Ut(a,kr.earth,c*.35)}let o=re(2.5,14,t+3*i);if(o>0){let c=Ut(kr.ochre,kr.lv,re(1.5+5*i,14+10*r,t));c=Ut(c,kr.qing,re(45+40*r,170+60*i,t)*.9),c=Ut(c,kr.rock,re(.8,.5,n)*.5),a=Ut(a,c,o)}return a}var Sd="uniform vec3 uTO, uTR, uTF; vec2 toL(vec3 w){ vec2 d = w.xz - uTO.xz; return vec2(dot(d, uTR.xz), dot(d, uTF.xz)); }",wd=`float gh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`,O0=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGW; varying float vNy;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
  { vec4 gw = vec4(transformed, 1.0);
    #ifdef USE_INSTANCING
      gw = instanceMatrix * gw;
    #endif
    vGW = (modelMatrix * gw).xyz; vNy = normalize(mat3(modelMatrix) * objectNormal).y; }`)};function z0(s,e={}){let t=performance.now(),n=s.curve.getPointAt(1).clone(),i=s.curve.getTangentAt(1),r=new I(i.x,0,i.z).normalize(),a=new I(-r.z,0,r.x),o=(P,z,W,$=new I)=>$.set(n.x+a.x*P+r.x*W,z,n.z+a.z*P+r.z*W),c=(P,z)=>[(P-n.x)*a.x+(z-n.z)*a.z,(P-n.x)*r.x+(z-n.z)*r.z],l={uTO:{value:n.clone()},uTR:{value:a.clone()},uTF:{value:r.clone()},uLamp:{value:0},uSmoke:{value:.35},uDusk:{value:0},uGlow:{value:1}},u=P=>{for(let z in l)P.uniforms[z]=l[z]},f={a0:-160,b0:-10,w:300,d:300},h=new Uint8Array(f.w*f.d*4),d=new Ui(h,f.w,f.d,Hn);d.minFilter=d.magFilter=Yt,l.uPetal={value:d},l.uPetalR={value:new wt(f.a0,f.b0,f.w,f.d)};let m=new ds;m.name="taoyuan";let x=new ys(16777215,3);x.castShadow=!0;let g=e.shadow||2048;x.shadow.mapSize.set(g,g),Object.assign(x.shadow.camera,{left:-42,right:42,top:42,bottom:-42,near:1,far:700}),x.shadow.bias=-6e-4,x.shadow.normalBias=.06;let p=new Ar(16777215,4473924,1);m.add(x,x.target,p,Lu());let _=s.mk();m.add(_);let M=cn(4242),y=(P,z,W)=>{let $=Math.floor(P/W),fe=Math.floor(z/W),De=P/W-$,Me=z/W-fe,Ge=Pn($*W,fe*W),Rt=Pn(($+1)*W,fe*W),R=Pn($*W,(fe+1)*W),O=Pn(($+1)*W,(fe+1)*W);return Ke(Ke(Ge,Rt,De),Ke(R,O,De),Me)};function S({a0:P,a1:z,b0:W,b1:$,step:fe,hole:De,band:Me,coarse:Ge,skirt:Rt,cut:R}){let O=Math.round((z-P)/fe),q=Math.round(($-W)/fe),G=O+1,K=G*(q+1),pe=new Float32Array(K*3),Ee=new Float32Array(K),ge=new I;for(let ue=0;ue<=q;ue++)for(let $e=0;$e<=O;$e++){let ut=P+$e*fe,yt=W+ue*fe,Mt=Pn(ut,yt);if(Ge){let he=Math.min(ut-P,z-ut,yt-W,$-yt),sn=1-re(0,Me,he);sn>0&&(Mt=Ke(Mt,y(ut,yt,Ge),sn))}let nn=ue*G+$e;Ee[nn]=Mt,o(ut,Mt,yt,ge),pe[nn*3]=ge.x,pe[nn*3+1]=Mt,pe[nn*3+2]=ge.z}let Le=[];for(let ue=0;ue<q;ue++)for(let $e=0;$e<O;$e++){let ut=P+($e+.5)*fe,yt=W+(ue+.5)*fe;if(De&&ut>De.a0&&ut<De.a1&&yt>De.b0&&yt<De.b1||R&&R(ut,yt))continue;let Mt=ue*G+$e,nn=Mt+1,he=Mt+G,sn=he+1;Le.push(Mt,nn,sn,Mt,sn,he)}let le=new nt;le.setAttribute("position",new Pt(pe,3)),le.setIndex(Le),le.computeVertexNormals();let Xe=le.attributes.normal.array,je=new Float32Array(K*3);for(let ue=0;ue<=q;ue++)for(let $e=0;$e<=O;$e++){let ut=ue*G+$e,yt=pM(P+$e*fe,W+ue*fe,Ee[ut],Xe[ut*3+1]);je.set(yt,ut*3)}if(le.setAttribute("color",new Pt(je,3)),Rt){let ue=[];for(let he=0;he<O;he++)ue.push(he);for(let he=0;he<q;he++)ue.push(he*G+O);for(let he=O;he>0;he--)ue.push(q*G+he);for(let he=q;he>0;he--)ue.push(he*G);let $e=Array.from(pe),ut=Array.from(Xe),yt=Array.from(je),Mt=Le.slice(),nn=K;ue.forEach(he=>{$e.push(pe[he*3],pe[he*3+1]-Rt,pe[he*3+2]),ut.push(Xe[he*3],Xe[he*3+1],Xe[he*3+2]),yt.push(je[he*3],je[he*3+1],je[he*3+2])});for(let he=0;he<ue.length;he++){let sn=ue[he],Ft=ue[(he+1)%ue.length],qn=nn+he,Xn=nn+(he+1)%ue.length;Mt.push(sn,Ft,Xn,sn,Xn,qn,sn,Xn,Ft,sn,qn,Xn)}le=new nt,le.setAttribute("position",new _e($e,3)),le.setAttribute("normal",new _e(ut,3)),le.setAttribute("color",new _e(yt,3)),le.setIndex(Mt)}return le.computeBoundingSphere(),le}let b={a0:-288,a1:264,b0:-72,b1:360},w={a0:-800,a1:800,b0:-416,b1:1120},v=S({...b,step:3,band:48,coarse:8,skirt:3,cut:(P,z)=>Math.abs(P)<6.5&&z<.5&&z>-10}),E=S({...w,step:8,hole:b,band:96,coarse:32,skirt:10}),A=S({a0:-3200,a1:3200,b0:-1600,b1:4e3,step:32,hole:w}),C=Tt(new en({vertexColors:!0,roughness:.96,metalness:0}),P=>{u(P),O0(P),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGW; varying float vNy; uniform sampler2D uPetal; uniform vec4 uPetalR;
`+Sd+wd).replace("#include <color_fragment>",`#include <color_fragment>
      { vec2 L = toL(vGW); float fd = length(vGW - cameraPosition);
        float n = gn(vGW.xz * 0.9) * 0.5 + mix(0.15, gn(vGW.xz * 3.7), smoothstep(90.0, 30.0, fd)) * 0.3 + mix(0.1, gn(vGW.xz * 11.0), smoothstep(30.0, 10.0, fd)) * 0.2;
        diffuseColor.rgb *= 0.86 + 0.28 * n;
        float wob = (gn(L * 0.7) - 0.5) * 0.35, pm = 0.0;
        if (L.y > -2.0 && L.y < 32.0) pm = (1.0 - smoothstep(0.95, 1.3, abs(L.x - 0.6 * sin(0.105 * L.y)) + wob)) * (1.0 - smoothstep(29.5, 31.5, L.y)); // \u51FA\u6D1E\u7684\u5C0F\u8DEF
        pm = max(pm, (1.0 - smoothstep(1.3, 1.65, abs(L.x) + wob)) * smoothstep(175.0, 177.0, L.y) * (1.0 - smoothstep(212.0, 215.0, L.y))); // \u8FDB\u6751\u7684\u571F\u8DEF
        { vec2 d = abs(L - vec2(0.0, 196.5)) - vec2(16.0, 5.0); float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - 1.5; pm = max(pm, 1.0 - smoothstep(-0.4, 1.0, sd + wob * 2.0)); } // \u6751\u53E3\u6652\u573A
        for (int i = 0; i < 3; i++) { float bl = 214.5 + 17.0 * float(i); pm = max(pm, (1.0 - smoothstep(1.0, 1.45, abs(L.y - bl) + wob)) * smoothstep(-104.0, -100.0, L.x) * smoothstep(48.0, 44.0, L.x)); } // \u5DF7\u5B50
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.565, 0.434, 0.254) * (0.84 + 0.3 * n), pm * 0.9);
        // \u843D\u82F1\u7F24\u7EB7\uFF1A\u6843\u6811\u5E95\u4E0B\u7684\u8349\u5730\u4E0A\u843D\u4E86\u4E00\u5C42\u82B1\u74E3\uFF08\u8FD1\u4E86\u662F\u4E00\u70B9\u4E00\u70B9\uFF0C\u8FDC\u4E86\u6DE1\u6210\u4E00\u5C42\u7C89\uFF09
        float pd = texture2D(uPetal, (L - uPetalR.xy) / uPetalR.zw).r * (1.0 - pm * 0.3);
        if (pd > 0.004) { vec2 pp = L * 9.0; float fwp = length(fwidth(pp));
          float sn = gn(pp) * 0.55 + gn(pp * 2.6 + 3.1) * 0.45, th = 1.0 - pd * 0.82;
          float sp = smoothstep(th, th + 0.05 + fwp * 0.25, sn); sp = mix(sp, pd * pd, smoothstep(0.5, 1.4, fwp)); // \u8FDC\u4E86\u6309\u8986\u76D6\u7387\u6DE1\u6210\u4E00\u5C42\u7C89
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 0.46, 0.53) * (0.9 + 0.2 * gn(pp * 5.3)), sp * 0.9); } }`)},"taoNear"),L=Tt(new en({vertexColors:!0,roughness:.97,metalness:0}),P=>{O0(P),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGW; varying float vNy;
`+wd).replace("#include <color_fragment>",`#include <color_fragment>
      { float n = gn(vGW.xz * 0.08) * 0.6 + gn(vGW.xz * 0.31) * 0.4; diffuseColor.rgb *= 0.88 + 0.24 * n;
        // \u70B9\u82D4\uFF1A\u5C71\u4E0A\u4E00\u7C07\u7C07\u6DF1\u8272\u7684\u6811\uFF08\u8FDC\u4E86\u5C31\u6DE1\u6210\u5E73\u5747\u8272\uFF09
        vec2 tp = vGW.xz * 0.16 + 3.1; float fw = length(fwidth(tp)); float dots = smoothstep(0.6 - fw, 0.7 + fw, gn(tp)); dots = mix(dots, 0.3, smoothstep(0.3, 1.0, fw));
        diffuseColor.rgb *= 1.0 - 0.4 * dots * smoothstep(0.55, 0.8, vNy) * smoothstep(3.0, 14.0, vGW.y); }`)},"taoFar"),U=new ze(v,C),D=new ze(E,L),F=new ze(A,L);U.receiveShadow=D.receiveShadow=!0,U.name="taoNear",D.name="taoMid",F.name="taoFar",m.add(U,D,F);let B=new ze(S({...b,step:8}),L);B.name="taoNearR",B.visible=!1,m.add(B);let k=[],J=[],X=[],Y=(P,z,W)=>{let $=[],fe=0;for(;P-fe>W;){let De=z+M()*(W-z);P-fe-De<z&&(De=(P-fe)/2),$.push(De),fe+=De}return $.push(P-fe),$};for(let[P,z]of wi)X.push({along:"b",c:P,w:z,from:ns.b0,to:ns.b1,top:P===0?.45:.4});for(let[P,z]of Br)for(let W=0;W<wi.length-1;W++)X.push({along:"a",c:P,w:z,from:wi[W][0]+wi[W][1]/2,to:wi[W+1][0]-wi[W+1][1]/2,top:.4});let Q=(P,z)=>{if(Math.abs(P-8)<9&&Math.abs(z-146)<9)return zr;let W=M();if(Math.abs(P)<52&&z>128)return W<.74?Ts:W<.88?As:zr;let $=dt(P*.011+5,z*.011-2);if($>.3&&Math.abs(P)>40)return W<.22?Xu:W<.75?zr:Ts;if($<-.28)return W<.62?Ts:W<.8?As:ju;let fe=W<.34?zr:W<.62?Ts:W<.76?ju:W<.84?zr:As;return fe===ju&&Math.abs(P)<45&&z>85&&z<128?zr:fe},de=.275;for(let P=0;P<wi.length-1;P++)for(let z=0;z<Br.length-1;z++){let W=wi[P][0]+wi[P][1]/2,$=wi[P+1][0]-wi[P+1][1]/2,fe=Br[z][0]+Br[z][1]/2,De=Br[z+1][0]-Br[z+1][1]/2,Me=M()<.55,Ge=Y(Me?$-W:De-fe,10,17),Rt=Me?W:fe;Ge.forEach((R,O)=>{let q=Rt,G=Rt+R;Rt=G,O<Ge.length-1&&J.push({along:Me?"b":"a",c:G,from:Me?fe:W,to:Me?De:$});let K=Y(Me?De-fe:$-W,12,24),pe=Me?fe:W;K.forEach((Ee,ge)=>{let Le=pe,le=pe+Ee;pe=le,ge<K.length-1&&J.push({along:Me?"a":"b",c:le,from:q+(O>0?de:0),to:G-(O<Ge.length-1?de:0)});let[Xe,je,ue,$e]=Me?[q,G,Le,le]:[Le,le,q,G],ut={a0:Xe+(Me?O>0?de:0:ge>0?de:0),a1:je-(Me?O<Ge.length-1?de:0:ge<K.length-1?de:0),b0:ue+(Me?ge>0?de:0:O>0?de:0),b1:$e-(Me?ge<K.length-1?de:0:O<Ge.length-1?de:0),seed:M(),dir:Me?1:0};ut.type=Q((ut.a0+ut.a1)/2,(ut.b0+ut.b1)/2),ut.planted=ut.type===Ts&&M()<.45,k.push(ut)})})}let ye={p:[],n:[],k:[],i:[]},Ve=new I,Ye=(P,z,W,$,fe,De,Me)=>{o(P,z,W,Ve),ye.p.push(Ve.x,z,Ve.z);let Ge=a.x*$+r.x*De,Rt=a.z*$+r.z*De,R=Math.hypot(Ge,fe,Rt)||1;return ye.n.push(Ge/R,fe/R,Rt/R),ye.k.push(Me[0],Me[1],Me[2],Me[3]),ye.p.length/3-1},Qe=(P,z,W,$,fe,De)=>{let Me=ye.p,Ge=Me[z*3]-Me[P*3],Rt=Me[z*3+1]-Me[P*3+1],R=Me[z*3+2]-Me[P*3+2],O=Me[W*3]-Me[P*3],q=Me[W*3+1]-Me[P*3+1],G=Me[W*3+2]-Me[P*3+2],K=Rt*G-R*q,pe=R*O-Ge*G,Ee=Ge*q-Rt*O;K*$+pe*fe+Ee*De>=0?ye.i.push(P,z,W):ye.i.push(P,W,z)},ee=(P,z,W)=>{let $=P.map(([Me,Ge,Rt])=>Ye(Me,Ge,Rt,z[0],z[1],z[2],W)),fe=a.x*z[0]+r.x*z[2],De=a.z*z[0]+r.z*z[2];Qe($[0],$[1],$[2],fe,z[1],De),Qe($[0],$[2],$[3],fe,z[1],De)},se=-.3;function Ae(P,z,W,$,fe,De,Me,Ge,Rt){let R=[fe,De,Me,0],O=[fe,De,Me,1],q=Math.max(1,Math.round((z-P)/Rt)),G=Math.max(1,Math.round(($-W)/Rt)),K=le=>P+(z-P)*le/q,pe=le=>W+($-W)*le/G,Ee=[],ge=.05;for(let le=0;le<=G;le++)for(let Xe=0;Xe<=q;Xe++){let je=K(Xe),ue=pe(le),$e=Ge(je,ue),ut=(Ge(je+ge,ue)-Ge(je-ge,ue))/(2*ge),yt=(Ge(je,ue+ge)-Ge(je,ue-ge))/(2*ge);Ee.push(Ye(je,$e,ue,-ut,1,-yt,R))}for(let le=0;le<G;le++)for(let Xe=0;Xe<q;Xe++){let je=Ee[le*(q+1)+Xe],ue=Ee[le*(q+1)+Xe+1],$e=Ee[(le+1)*(q+1)+Xe],ut=Ee[(le+1)*(q+1)+Xe+1];Qe(je,ue,ut,0,1,0),Qe(je,ut,$e,0,1,0)}let Le=(le,Xe)=>{for(let je=0;je<le.length-1;je++){let[ue,$e]=[le[je],le[je+1]];ee([[ue[0],Ge(ue[0],ue[1]),ue[1]],[$e[0],Ge($e[0],$e[1]),$e[1]],[$e[0],se,$e[1]],[ue[0],se,ue[1]]],Xe,O)}};Le([...Array(q+1).keys()].map(le=>[K(le),W]),[0,0,-1]),Le([...Array(q+1).keys()].map(le=>[K(le),$]),[0,0,1]),Le([...Array(G+1).keys()].map(le=>[P,pe(le)]),[-1,0,0]),Le([...Array(G+1).keys()].map(le=>[z,pe(le)]),[1,0,0])}for(let P of k){if(P.type===Ts)continue;let z=lM[P.type];if(P.type===Xu){let W=($,fe)=>Math.min($-P.a0,P.a1-$,fe-P.b0,P.b1-fe);Ae(P.a0,P.a1,P.b0,P.b1,Xu,P.seed,P.dir,($,fe)=>z+.09*dt($*.55+P.seed*40,fe*.55)+.05*dt($*1.7,fe*1.7+P.seed*9)-.2*(1-re(0,.7,W($,fe))),1.25)}else if(P.type===As){let W=P.dir?"b":"a",$=W==="b"?P.a1-P.a0:P.b1-P.b0,fe=Math.max(1,Math.round($/1.65)),De=$/fe;for(let Me=0;Me<fe;Me++){let Ge=Me*De+.17,Rt=(Me+1)*De-.17;W==="b"?Ae(P.a0+Ge,P.a0+Rt,P.b0,P.b1,As,P.seed,P.dir,(R,O)=>z+.02*dt(R*2,O*2),50):Ae(P.a0,P.a1,P.b0+Ge,P.b0+Rt,As,P.seed,P.dir,(R,O)=>z+.02*dt(R*2,O*2),50)}}else Ae(P.a0,P.a1,P.b0,P.b1,P.type,P.seed,P.dir,()=>z,60)}function Ze(P,z,W,$,fe,De){let Me=Math.max(1,Math.round((P.to-P.from)/6)),Ge=(O,q,G)=>P.along==="a"?[O,G,P.c+q]:[P.c+q,G,O],Rt=(O,q)=>P.along==="a"?[0,q,O]:[O,q,0],R=Math.hypot(fe-se,($-W)/2);for(let O=0;O<Me;O++){let q=P.from+(P.to-P.from)*O/Me,G=P.from+(P.to-P.from)*(O+1)/Me,K=fe+.025*dt(q*.3,P.c),pe=fe+.025*dt(G*.3,P.c),Ee=Le=>[z,.5,Le,0],ge=[z,.5,1,1];if(De){let Le=K+De,le=pe+De;ee([Ge(q,-W/2,K),Ge(G,-W/2,pe),Ge(G,0,le),Ge(q,0,Le)],Rt(-.06,1),Ee(-1)),ee([Ge(q,0,Le),Ge(G,0,le),Ge(G,W/2,pe),Ge(q,W/2,K)],Rt(.06,1),Ee(1));let Xe=ye.k.length;for(let je of[6,5,4,3])ye.k[Xe-je*4+2]=0}else ee([Ge(q,-W/2,K),Ge(G,-W/2,pe),Ge(G,W/2,pe),Ge(q,W/2,K)],Rt(0,1),Ee(0));ee([Ge(q,-$/2,se),Ge(G,-$/2,se),Ge(G,-W/2,pe),Ge(q,-W/2,K)],Rt(-(fe-se)/R,($-W)/2/R),ge),ee([Ge(q,W/2,K),Ge(G,W/2,pe),Ge(G,$/2,se),Ge(q,$/2,se)],Rt((fe-se)/R,($-W)/2/R),ge)}}for(let P of J)Ze(P,oM,.36,.86,.3,0);for(let P of X)Ze(P,cM,P.w,P.w+.6,P.top,.04);let Re=new nt;Re.setAttribute("position",new _e(ye.p,3)),Re.setAttribute("normal",new _e(ye.n,3)),Re.setAttribute("aK",new _e(ye.k,4)),Re.setIndex(ye.i),Re.computeBoundingSphere();let vt=null,jt=Tt(new yn({color:16777215}),P=>{u(P),P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aK; varying vec4 vK; varying vec3 vGW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vK = aK; vGW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vK; varying vec3 vGW; float gP = 0.0; vec3 gAx = vec3(1.0, 0.0, 0.0);
`+Sd+wd).replace("#include <color_fragment>",`#include <color_fragment>
      { vec2 L = toL(vGW); float kind = vK.x, seed = vK.y, side = vK.w; float fd = length(vGW - cameraPosition);
        float rc = vK.z > 0.5 ? L.x : L.y; gAx = vK.z > 0.5 ? uTR : uTF; float fwr = fwidth(rc);
        float n1 = gn(L * 0.35 + seed * 17.0), n2 = gn(L * 1.7 + seed * 5.0), n3 = gn(L * 6.0 + seed * 3.0); vec3 c;
        if (kind < 1.5) { // \u6CB9\u83DC\u82B1
          vec3 yel = vec3(0.4, 0.32, 0.07), yelL = vec3(0.54, 0.44, 0.12), stem = vec3(0.09, 0.17, 0.05); // \u91D1\u91CC\u5E26\u7EFF\uFF0C\u4E0D\u8981\u67E0\u6AAC\u9EC4
          float fl = smoothstep(0.3, 0.75, n2 * 0.6 + n3 * 0.4 + (n1 - 0.5) * 0.5); c = mix(yel, yelL, fl);
          c = mix(c, stem, (1.0 - fl) * mix(0.42, 0.25, smoothstep(25.0, 70.0, fd)));
          if (side > 0.5) c = mix(stem * 0.8, c, smoothstep(0.5, 0.92, vGW.y + (n3 - 0.5) * 0.25));
        } else if (kind < 2.5) { // \u9752\u82D7\uFF1A\u4E00\u884C\u4E00\u884C
          float rw = 0.5 + 0.5 * cos(rc * 6.2832 / 0.32); float aa = smoothstep(0.06, 0.2, fwr); rw = mix(rw, 0.5, aa);
          c = mix(vec3(0.06, 0.135, 0.055), vec3(0.125, 0.245, 0.1), rw * 0.5 + n2 * 0.5) * (0.88 + 0.24 * n1); if (side > 0.5) c *= 0.72; // \u504F\u77F3\u7EFF\uFF1B\u884C\u8DDD\u7684\u660E\u6697\u6DE1\u4E00\u70B9\uFF0C\u4E0D\u50CF\u5272\u8349\u673A\u538B\u51FA\u6765\u7684\u6761\u7EB9
          gP = -sin(rc * 6.2832 / 0.32) * 0.25 * (1.0 - aa);
        } else if (kind < 3.5) { // \u7FFB\u8015\u7684\u5730\uFF1A\u4E00\u9053\u9053\u7281\u6C9F
          float fr = 0.5 + 0.5 * cos(rc * 6.2832 / 0.55); float aa = smoothstep(0.08, 0.3, fwr); fr = mix(fr, 0.5, aa);
          c = mix(vec3(0.2, 0.13, 0.068), vec3(0.37, 0.255, 0.13), fr * 0.75 + n2 * 0.25) * (0.88 + 0.24 * n1); // \u8D6D\u77F3
          gP = -sin(rc * 6.2832 / 0.55) * 0.45 * (1.0 - aa);
        } else if (kind < 4.5) { // \u79E7\u7530\uFF1A\u5AE9\u9EC4\u7EFF
          c = mix(vec3(0.15, 0.29, 0.06), vec3(0.24, 0.39, 0.1), n2 * 0.7 + n3 * 0.3); if (side > 0.5) c *= 0.68;
        } else if (kind < 5.5) { // \u7530\u57C2\uFF1A\u9876\u4E0A\u957F\u8349\uFF0C\u4E24\u8FB9\u662F\u6CE5
          vec3 gr = mix(vec3(0.09, 0.17, 0.04), vec3(0.19, 0.29, 0.075), n2 * 0.7 + n3 * 0.3), mud = vec3(0.19, 0.14, 0.085);
          c = side > 0.5 ? mix(mud, gr, smoothstep(0.08, 0.26, vGW.y) * 0.85) : gr * (0.85 + 0.3 * n3);
        } else { // \u8DEF\uFF1A\u4E2D\u95F4\u662F\u8E29\u5B9E\u7684\u571F\uFF0C\u4E24\u8FB9\u957F\u8349
          vec3 dirt = vec3(0.5, 0.39, 0.23) * (0.84 + 0.3 * n2), gr = vec3(0.13, 0.22, 0.06) * (0.8 + 0.4 * n3);
          float ed = smoothstep(0.62, 0.95, abs(vK.z) + (n3 - 0.5) * 0.3); c = side > 0.5 ? mix(dirt * 0.62, gr, smoothstep(0.1, 0.32, vGW.y)) : mix(dirt, gr, ed);
        }
        diffuseColor.rgb = c; }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      if (gP != 0.0) normal = normalize(normal + (viewMatrix * vec4(gAx * gP, 0.0)).xyz);`)},"taoField"),lt=new ze(Re,jt);lt.receiveShadow=!0,lt.name="fields",m.add(lt);let Ue=ln.w*2,ot=ln.d*2,pt=new Float32Array(Ue*ot),oe=new Float32Array(Ue*ot);for(let P of k){if(P.type!==Ts&&P.type!==As)continue;let z=Math.max(0,Math.floor((P.a0-ln.a0)*2)),W=Math.min(Ue-1,Math.floor((P.a1-ln.a0)*2)),$=Math.max(0,Math.floor((P.b0-ln.b0)*2)),fe=Math.min(ot-1,Math.floor((P.b1-ln.b0)*2));for(let De=$;De<=fe;De++)for(let Me=z;Me<=W;Me++){let Ge=ln.a0+(Me+.5)/2,Rt=ln.b0+(De+.5)/2;if(Ge<P.a0||Ge>P.a1||Rt<P.b0||Rt>P.b1)continue;let R=De*Ue+Me;pt[R]=.3,oe[R]=P.type===As?.25:P.planted?1:.5}}{let P=Math.floor((Ot.a-Ot.ra*1.2-ln.a0)*2),z=Math.ceil((Ot.a+Ot.ra*1.2-ln.a0)*2),W=Math.floor((Ot.b-Ot.rb*1.2-ln.b0)*2),$=Math.min(ot-1,Math.ceil((Ot.b+Ot.rb*1.2-ln.b0)*2));for(let fe=W;fe<=$;fe++)for(let De=P;De<=z;De++){let Me=Pn(ln.a0+(De+.5)/2,ln.b0+(fe+.5)/2);Me<0&&(pt[fe*Ue+De]=-Me,oe[fe*Ue+De]=0)}}let xe=new Float32Array(Ue*ot);for(let P=0;P<Ue*ot;P++)xe[P]=pt[P]>0?1e6:0;for(let P=0;P<ot;P++)for(let z=0;z<Ue;z++){let W=P*Ue+z;if(!xe[W])continue;let $=xe[W];z>0&&($=Math.min($,xe[W-1]+1)),P>0&&($=Math.min($,xe[W-Ue]+1),z>0&&($=Math.min($,xe[W-Ue-1]+1.414)),z<Ue-1&&($=Math.min($,xe[W-Ue+1]+1.414))),xe[W]=$}for(let P=ot-1;P>=0;P--)for(let z=Ue-1;z>=0;z--){let W=P*Ue+z;if(!xe[W])continue;let $=xe[W];z<Ue-1&&($=Math.min($,xe[W+1]+1)),P<ot-1&&($=Math.min($,xe[W+Ue]+1),z<Ue-1&&($=Math.min($,xe[W+Ue+1]+1.414)),z>0&&($=Math.min($,xe[W+Ue-1]+1.414))),xe[W]=$}let He=new Uint8Array(Ue*ot*4);for(let P=0;P<Ue*ot;P++)He[P*4]=Math.min(255,Math.round(pt[P]/2*255)),He[P*4+1]=Math.round(oe[P]*255),He[P*4+2]=Math.min(255,Math.round(Math.max(0,xe[P]-.5)*.5/6*255)),He[P*4+3]=255;let it=new Ui(He,Ue,ot,Hn);it.minFilter=it.magFilter=Yt,it.needsUpdate=!0;let st=new Ur(new fn(ln.w,ln.d,1,1),{textureWidth:e.rw||512,textureHeight:e.rh||512,clipBias:.002,multisample:4,shader:{name:"taoWater",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:"uniform mat4 textureMatrix; varying vec4 vR; varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vR = textureMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform sampler2D tDiffuse, uField; uniform vec3 color; uniform vec4 uWR; uniform vec2 uRes; varying vec4 vR; varying vec3 vW;
      ${Jn}
      ${Sd}
      float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h1(i), h1(i + vec2(1, 0)), f.x), mix(h1(i + vec2(0, 1)), h1(i + vec2(1, 1)), f.x), f.y); }
      float wv(vec2 p, float t){ return sin(dot(p, vec2(0.9, 0.35)) * 1.7 + t * 1.3) * 0.4 + sin(dot(p, vec2(-0.5, 0.8)) * 2.6 + t * 1.9) * 0.25 + vn(p * 1.4 + vec2(0.0, t * 0.5)) * 0.6 + vn(p * 3.3 - vec2(t * 0.4, t * 0.8)) * 0.3; }
      void main(){
        vec2 L = toL(vW); vec4 fm = texture2D(uField, (L - uWR.xy) / uWR.zw);
        float depth = max(fm.r * 2.0, 0.04), kind = fm.g, edge = fm.b * 6.0, pond = 1.0 - step(0.12, kind);
        vec3 V = cameraPosition - vW; float dist = length(V); V /= dist;
        float t = uTime, amp = mix(0.016, 0.05, pond) / (1.0 + dist * 0.03), e = 0.06;
        float w0 = wv(vW.xz, t), wx = wv(vW.xz + vec2(e, 0.0), t), wz = wv(vW.xz + vec2(0.0, e), t);
        vec3 n = normalize(vec3(-(wx - w0) / e * amp, 1.0, -(wz - w0) / e * amp));
        float cosT = clamp(dot(n, V), 0.0, 1.0), fres = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
        vec2 ruv = vR.xy / vR.w + n.xz * 0.03; vec2 px = 1.0 / uRes; float bl = 1.0 + dist * 0.012;
        vec3 refl = texture2D(tDiffuse, ruv).rgb * 0.4 + (texture2D(tDiffuse, ruv + px * vec2(bl, 0.0)).rgb + texture2D(tDiffuse, ruv - px * vec2(bl, 0.0)).rgb + texture2D(tDiffuse, ruv + px * vec2(0.0, bl * 2.0)).rgb + texture2D(tDiffuse, ruv - px * vec2(0.0, bl * 2.0)).rgb) * 0.15;
        vec3 amb = uSkyTop * 0.55 + uHaze * 0.35 + uSunCol * 0.12;
        vec3 mud = vec3(0.17, 0.15, 0.09), deep = vec3(0.05, 0.12, 0.12);
        vec3 body = mix(mud, deep, pond * smoothstep(0.1, 1.2, depth)) * amb * 1.4;
        vec3 col = mix(body, refl * vec3(0.86, 0.95, 1.0), mix(0.58, 1.0, fres)); // \u5012\u5F71\u7565\u504F\u9752\uFF08\u77F3\u9752\uFF09
        vec3 hv = normalize(uSunDir + V); col += uSunCol * (pow(max(dot(n, hv), 0.0), 400.0) * 1.5 + pow(max(dot(reflect(-V, n), uSunDir), 0.0), 5.0) * 0.14); // \u592A\u9633\u90A3\u4E00\u4FA7\u7684\u6C34\u7530\u6CDB\u4E00\u5C42\u6696\u5149
        if (kind > 0.75) { vec2 g = L / vec2(0.3, 0.25); vec2 f = fract(g) - 0.5; float fw = length(fwidth(g)); // \u79E7\u82D7\uFF1A\u4E00\u884C\u884C\u7684\u5C0F\u7EFF\u70B9\uFF08\u8FDC\u4E86\u6DE1\u6210\u4E00\u5C42\u7EFF\uFF09
          float cov = 1.0 - smoothstep(0.15 - fw, 0.15 + fw, length(f)); cov = mix(cov, 0.3, smoothstep(0.25, 0.7, fw)); // \u8FDC\u4E86\u662F\u4E00\u5C42\u5AE9\u7EFF\u7F69\u5728\u6C34\u4E0A
          col = mix(col, vec3(0.15, 0.29, 0.05) * (amb * 1.1 + uSunCol * max(uSunDir.y, 0.0) * 1.3), cov); }
        if (kind > 0.15 && kind < 0.35) col = mix(col, body * 1.1, 0.35);
        col = mix(col, uHaze + uSunCol * 0.06, smoothstep(0.35, 0.0, edge) * 0.3);
        col = mix(col, mud * amb * 1.3, smoothstep(0.6, 0.05, edge) * 0.22);
        gl_FragColor = vec4(applyFog(col, vW), 1.0); }`}});st.rotation.set(-Math.PI/2,Math.atan2(-a.z,a.x),0,"YXZ"),o(ln.a0+ln.w/2,0,ln.b0+ln.d/2,st.position),st.name="taoWater";{let P=st.material.uniforms;for(let W in ht)P[W]=ht[W];for(let W in l)P[W]=l[W];P.uField={value:it},P.uWR={value:new wt(ln.a0,ln.b0,ln.w,ln.d)},P.uRes={value:new ve(e.rw||512,e.rh||512)};let z=st.getReflectionCamera;z&&(st.getReflectionCamera=function(W){let $=z.call(this,W);return $.layers.set(0),$})}m.add(st);let H=[],Dt=[];aM.forEach((P,z)=>{let W=tn.a0+3+M()*3;for(;W<tn.a1-6;){let $=.9+M()*.2,fe=9.3*$,De=W+fe/2,Me=P+(M()-.5)*2.4;z===0&&Math.abs(De)<18+fe/2||M()<.13?Dt.push({a:De,b:Me}):H.push({a:De,b:Me,s:$,rot:(M()-.5)*.08,smoke:M()<.6}),W+=fe+3+M()*4.5}});let mt=(P,z,W)=>H.some($=>Math.abs(P-$.a)<4.9*$.s+W&&Math.abs(z-$.b)<5.2*$.s+W),N=(P,z)=>z>-2&&z<31&&Math.abs(P-.6*Math.sin(.105*z))<1.6||z>174&&z<215&&Math.abs(P)<2||Math.abs(P)<18&&z>189&&z<204,T=(P,z)=>Math.hypot((P-Ot.a)/Ot.ra,(z-Ot.b)/Ot.rb),j=(P,z,W=1.5)=>!Ed(P,z)&&!mt(P,z,W)&&!N(P,z)&&T(P,z)>1.05&&!(Math.abs(P)<7&&z<2),Z=(P,z)=>((Math.floor(P/40)+40)*100+Math.floor(z/40)+40)*48+1,te=[],be=[],me=(P,z,W,$)=>{let fe=$??Pn(P,z),De=o(P,fe,z);be.push([P,z]),te.push({x:De.x,y:fe,z:De.z,rot:M()*6.283,scale:W,variant:Math.floor(M()*3),bloomS:0,bloom:!0,tint:M(),act:2,s:Z(P,z)})};for(let P=4;P<29;P+=4.4+M()*1.6)for(let z of[-1,1])me(z*(4.8+M()*2.4)+.6*Math.sin(.105*P),P+(M()-.5)*1.5,.85+M()*.3);for(let P=0;P<12;P++){let z=(M()<.5?-1:1)*(10+M()*22),W=2+M()*26;j(z,W,0)&&me(z,W,.8+M()*.35)}wi.forEach(([P,z],W)=>Br.forEach(([$,fe],De)=>{if(M()<.4||P===0&&$<100)return;let Me=M()<.5?-1:1,Ge=M()<.5?-1:1;if(P===0){M(),M(),M();return}me(P+Me*(z/2-.35),$+Ge*(fe/2-.35),.8+M()*.3,.4)}));for(let P=-140;P<125;P+=9+M()*14)Math.abs(P)>6&&me(P,177.4+M()*1.2,.85+M()*.3);{let P=cn(515);for(let z=37;z<76;z+=9.5+P()*2.5)for(let W of[-1,1])me(W*1.05,z+W*2.2+(P()-.5)*1.5,.82+P()*.22,.4)}me(-9,191,1.55);for(let P of Dt)(Math.abs(P.a)>20||P.b>210)&&me(P.a+(M()-.5)*3,P.b+(M()-.5)*3,.95+M()*.3);for(let P=0;P<40;P++){let z=tn.a0+M()*(tn.a1-tn.a0),W=210+M()*66;j(z,W,2.2)&&me(z,W,.85+M()*.35)}for(let P=0;P<12;P++){let z=M()*6.283,W=Ot.a+Math.cos(z)*Ot.ra*(1.15+M()*.2),$=Ot.b+Math.sin(z)*Ot.rb*(1.2+M()*.3);j(W,$)&&me(W,$,.9+M()*.3)}for(let P=0;P<9;P++){let z=-.3+P*.72+M()*.3,W=Qs.a+Math.cos(z)*Qs.ra*.74,$=Qs.b+Math.sin(z)*Qs.rb*.74;for(let fe=0;fe<9;fe++){let De=W+(M()-.5)*34,Me=$+(M()-.5)*26;j(De,Me)&&Pn(De,Me)<9&&!(Me>tn.b0-8&&Me<tn.b1+4&&De>tn.a0-8&&De<tn.a1+8)&&me(De,Me,.8+M()*.4)}}{let P=new Float32Array(f.w*f.d);te.forEach((z,W)=>{let[$,fe]=be[W],De=4.6*z.scale,Me=Math.ceil(De),Ge=Math.round($-f.a0),Rt=Math.round(fe-f.b0);if(!(Ge<-Me||Rt<-Me||Ge>=f.w+Me||Rt>=f.d+Me))for(let R=Rt-Me;R<=Rt+Me;R++)for(let O=Ge-Me;O<=Ge+Me;O++){if(O<0||R<0||O>=f.w||R>=f.d)continue;let q=1-Math.hypot(f.a0+O-$,f.b0+R-fe)/De;q>0&&(P[R*f.w+O]+=Math.min(1,q*1.6)*(.75+.25*z.scale))}});for(let z=0;z<P.length;z++)h[z*4]=Math.min(255,Math.round(255*Math.min(1,P[z])*(.85+.3*dt(z%f.w*.21,Math.floor(z/f.w)*.21))));d.needsUpdate=!0}let ne=Uu(te,{crownLod:!0,glow:l.uGlow});ne.name="taoForest",m.add(ne);let ie=[];for(let P=0;P<70;P++){let z=tn.a0-8+M()*(tn.a1-tn.a0+16),W=tn.b1-6+M()*30;j(z,W,2.5)&&ie.push([z,W,.8+M()*.5])}for(let P=0;P<26;P++){let z=M()<.5?-1:1,W=z*(tn.a0<0?z<0?-tn.a0+4+M()*10:tn.a1+2+M()*6:0),$=tn.b0+6+M()*70;j(W,$,2.5)&&T(W,$)>1.2&&ie.push([W,$,.8+M()*.4])}for(let P=0;P<10;P++){let W=(M()<.5?-1:1)*(9+M()*12),$=.5+M()*9;j(W,$,0)&&ie.push([W,$,.7+M()*.3])}let Se=xM(ie,o,Pn);m.add(Se);let We=[];for(let P=0;P<2200;P++){let z=(M()*2-1)*30,W=.6+M()*29.4;Math.abs(z)<6.5&&W<1.5||Math.abs(z-.6*Math.sin(.105*W))<1.25+M()*.3||We.push([z,Pn(z,W),W,.7+M()*.7])}for(let P=0;P<900;P++){let z=(M()*2-1)*60,W=176.3+M()*13;!j(z,W,.5)||Math.abs(z)<1.9||We.push([z,Pn(z,W),W,.6+M()*.6])}for(let P=0;P<600;P++){let z=M()*6.283,W=1+M()*.25,$=Ot.a+Math.cos(z)*Ot.ra*W,fe=Ot.b+Math.sin(z)*Ot.rb*W;j($,fe,0)&&We.push([$,Pn($,fe),fe,.7+M()*.8])}for(let P of J){let z=(P.from+P.to)/2,W=P.along==="a"?z:P.c,$=P.along==="a"?P.c:z;if(Math.abs(W)>46||$<120)continue;let fe=Math.round((P.to-P.from)/1.6);for(let De=0;De<fe;De++){let Me=P.from+(P.to-P.from)*M(),Ge=(M()-.5)*.3;We.push(P.along==="a"?[Me,.3,P.c+Ge,.45+M()*.4]:[P.c+Ge,.3,Me,.45+M()*.4])}}for(let P=32;P<176;P+=.9)for(let z of[-1,1])M()<.6&&We.push([z*(1.32+M()*.12),.43,P+M()*.8,.5+M()*.5]);let Ce=bM(We,o,M);m.add(Ce.group);let we=za(800,[46,16,54],.08,31);we.name="taoFalling",m.add(we);let Je=za(360,[11,7,13],.055,59);Je.name="taoFalling",m.add(Je);let rt=vM(l,260);m.add(rt);let ct=(P,z,W,$)=>[P,z,W??Pn(z,$)+1.5,$],V=[ct(0,0,n.y+1.5,0),ct(4.5,.2,null,6),ct(7,.4,4.2,9),ct(14,2,28,30),ct(21,-1,30,58),ct(31,-1,7,132),ct(35,0,2,158),ct(43,0,2,174),ct(47,0,null,179),ct(61,-.5,null,181)],Pe=[[0,0,3.3,60],[4.5,0,3,60],[9,-3,6,160],[14,-12,5,215],[21,-14,5,220],[31,-2,3,195],[36,-3,1.6,191],[43,-2,1.5,190],[47,0,1.6,185],[52,-6,2.2,196],[61,-16,3.2,206]],ae=B0(V),Ie=B0(Pe),Fe=V[V.length-1][0],ce=[];{let P=0,z=ae(0);for(let W=0;W<=Fe*20;W++){let $=ae(W/20);P+=Math.hypot($[0]-z[0],$[2]-z[2]),ce.push(P),z=$}}let et=P=>{let z=at(P*20,0,ce.length-1.001),W=Math.floor(z);return Ke(ce[W],ce[W+1],z-W)},ke=[0,0,0],Gt=[0,0,0],Wt={scene:m,sun:x,hemi:p,tunnel:_,water:st,forest:ne,grass:Ce,falling:we,smoke:rt,fields:k,houses:H,O:n,F:r,R:a,L2W:o,W2L:c,hAt:Pn,TU:l,cam:(P,z,W)=>{ae(at(P,0,Fe),ke),Ie(at(P,0,Fe),Gt),o(ke[0],ke[1],ke[2],z),o(Gt[0],Gt[1],Gt[2],W);let $=ke[1]-Pn(ke[0],ke[2]),fe=(et(P+.15)-et(P-.15))/.3;return{walk:(1-re(1.8,3,$))*at(fe/1.2,0,1),step:et(P)/.74,h:$}},END:Fe,ready:!1,village:null,people:null},pi=(P,z,W)=>be.some($=>Math.hypot($[0]-P,$[1]-z)<W)||ie.some($=>Math.hypot($[0]-P,$[1]-z)<W+1),sh=P=>(ae(at(P,0,Fe),ke),[ke[0],ke[2]]),rh=(P,z)=>Ed(P,z)?.43:Pn(P,z),Mc=k.filter(P=>P.type===Ts&&P.planted&&P.a1-P.a0>8&&P.b1-P.b0>8).map(P=>[(P.a0+P.a1)/2+(P.seed-.5)*3,(P.b0+P.b1)/2]).filter(([P,z])=>Math.abs(P)>10&&Math.abs(P)<60&&z>84&&z<170).sort((P,z)=>Math.abs(P[0])-Math.abs(z[0])).slice(0,2);Wt.load=(P,z,W)=>Promise.all([D0(P,{houses:H,gaps:Dt,L2W:o,hAt:Pn,F:r,R:a,TU:l,r:cn(77),free:j,near:pi,pond:Ot}),U0(P,{L2W:o,hAt:Pn,F:r,R:a,camAt:sh,ground:rh,paddy:Mc})]).then(([$,fe])=>{Wt.village=$,Wt.people=fe,m.add($.group,fe.group),rt.userData.set($.chimneys)}).then(()=>{Wt.ready=!0}).catch($=>{console.error("taoyuan load",$),Wt.ready=!0,Wt.err=String($)});let $a=new I(1e7,0,1e7),Sc=(P,z,W,$)=>{let fe=new _n,De=new I;for(let[Me,Ge]of[[P,W],[z,W],[P,$],[z,$]])fe.expandByPoint(o(Me,-.3,Ge,De));return fe.max.y=.8,fe},Qa=k.filter(P=>P.type===Ts).map(P=>Sc(P.a0,P.a1,P.b0,P.b1));Qa.push(Sc(Ot.a-Ot.ra*1.1,Ot.a+Ot.ra*1.1,Ot.b-Ot.rb*1.1,Ot.b+Ot.rb*1.1));let eo=new Ws,Hi=new qe,to=P=>(Hi.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),eo.setFromProjectionMatrix(Hi),Qa.some(z=>eo.intersectsBox(z))),no=(P,z)=>{ne.userData.lod(P?$a:z.position),Se.visible=!P,U.visible=!P,B.visible=P,Wt.village&&Wt.village.reflMode(P,z.position),Wt.people&&Wt.people.reflMode(P)};{let P=st.onBeforeRender;st.onBeforeRender=function(z,W,$,...fe){to($)&&(no(!0,$),P.call(this,z,W,$,...fe),no(!1,$))}}Wt.setRes=(P,z)=>{st.getRenderTarget().setSize(P,z),st.material.uniforms.uRes.value.set(P,z)};let Is=new I,mi=new I;return Wt.update=(P,z,W,$)=>{W.getWorldDirection(mi),mi.y=0,mi.normalize(),ne.userData.lod(Is.copy(W.position).addScaledVector(mi,25)),Ce.lod(W.position),l.uDusk.value=re(47,58,P),l.uGlow.value=1-.65*l.uDusk.value,l.uSmoke.value=Ke(.35,1,re(38,56,P)),l.uLamp.value=P,we.material.uniforms.uDensity.value=.32*(1-re(10,16,$?$.h:0))+.06,we.material.uniforms.uFwd.value.copy(mi),Je.material.uniforms.uDensity.value=.85,Je.material.uniforms.uFwd.value.copy(mi);let fe=Ke(42,170,re(3,26,$?$.h:0)),De=x.shadow.camera;Math.abs(De.right-fe)>.5&&(De.left=De.bottom=-fe,De.right=De.top=fe,De.updateProjectionMatrix()),Is.copy(W.position).addScaledVector(mi,fe*.6),Is.y=.5,x.target.position.copy(Is),x.position.copy(Is).addScaledVector(ht.uSunDir.value,400),x.target.updateMatrixWorld(),Wt.village&&Wt.village.update(P,z,W.position),Wt.people&&Wt.people.update(P,W.position)},Wt.buildMs=Math.round(performance.now()-t),Wt.stats={fields:k.length,ridges:J.length,houses:H.length,peach:te.length,bamboo:ie.length,grass:We.length},Wt}function B0(s){let e=s.length,t=s[0].length-1,n=s.map(r=>r[0]),i=[];for(let r=0;r<t;r++){let a=s.map(l=>l[r+1]),o=[];for(let l=0;l<e-1;l++)o.push((a[l+1]-a[l])/(n[l+1]-n[l]));let c=new Array(e).fill(0);for(let l=1;l<e-1;l++){if(o[l-1]*o[l]<=0)continue;let u=n[l]-n[l-1],f=n[l+1]-n[l],h=2*f+u,d=f+2*u;c[l]=(h+d)/(h/o[l-1]+d/o[l])}i.push(c)}return(r,a=new Array(t))=>{let o=0;if(r<=n[0]){for(let h=0;h<t;h++)a[h]=s[0][h+1];return a}if(r>=n[e-1]){for(let h=0;h<t;h++)a[h]=s[e-1][h+1];return a}for(;r>n[o+1];)o++;let c=n[o+1]-n[o],l=(r-n[o])/c,u=l*l,f=u*l;for(let h=0;h<t;h++){let d=s[o][h+1],m=s[o+1][h+1];a[h]=(2*f-3*u+1)*d+(f-2*u+l)*c*i[h][o]+(-2*f+3*u)*m+(f-u)*c*i[h][o+1]}return a}}function mM(){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d"),t=cn(13);for(let i=0;i<9;i++){let r=-.5+i/8*(Math.PI+1)+(t()-.5)*.25,a=70+t()*55,o=9+t()*5,c=128+(t()-.5)*20,l=40+t()*30,u=Math.cos(r),f=Math.abs(Math.sin(r))*.9+.35,h=Math.hypot(u,f),d=u/h,m=f/h,x=-m,g=d,p=.75+t()*.3;e.fillStyle=`rgb(${Math.round(52*p)},${Math.round(92*p)},${Math.round(40*p)})`,e.beginPath(),e.moveTo(c,l),e.quadraticCurveTo(c+d*a*.35+x*o,l+m*a*.35+g*o,c+d*a,l+m*a),e.quadraticCurveTo(c+d*a*.35-x*o,l+m*a*.35-g*o,c,l),e.fill(),e.strokeStyle=`rgba(${Math.round(110*p)},${Math.round(140*p)},${Math.round(80*p)},0.6)`,e.lineWidth=1.2,e.beginPath(),e.moveTo(c,l),e.lineTo(c+d*a*.9,l+m*a*.9),e.stroke()}let n=new Yn(s);return n.colorSpace=qt,n.anisotropy=4,n}function gM(s){let e=cn(s),t=[],n=[],i=[],r=[],a=[],o=[],c=[],l=[],u=9+Math.floor(e()*6);for(let d=0;d<u;d++){let m=e()*6.283,x=Math.sqrt(e())*1.3,g=Math.cos(m)*x,p=Math.sin(m)*x,_=6+e()*4.5,M=.035+e()*.025,y=.03+e()*.1,S=m+(e()-.5),b=5,w=4,v=t.length/3,E=C=>{let L=C/_,U=y*C*L;return[g+Math.cos(S)*U,p+Math.sin(S)*U]};for(let C=0;C<=b;C++){let L=_*C/b,[U,D]=E(L),F=M*(1-.45*C/b);for(let B=0;B<=w;B++){let k=B/w*6.283,J=Math.cos(k),X=Math.sin(k);t.push(U+J*F,L,D+X*F),n.push(J,.1,X);let Y=(C%2?.85:1)*(.85+.2*e());i.push(.2*Y,.3*Y,.1*Y)}}for(let C=0;C<b;C++)for(let L=0;L<w;L++){let U=v+C*(w+1)+L,D=U+1,F=U+w+1,B=F+1;r.push(U,F,D,D,F,B)}let A=10+Math.floor(e()*7);for(let C=0;C<A;C++){let L=_*(.42+.58*Math.pow(e(),.6)),[U,D]=E(L),F=e()*6.283,B=.1+e()*.5,k=U+Math.cos(F)*B,J=D+Math.sin(F)*B,X=.9+e()*.6,Y=F+(e()-.5)*.8,Q=-.25-e()*.5,de=Math.cos(Y),ye=Math.sin(Y),Ve=a.length/3,Ye=de*Math.cos(Q)*X,Qe=Math.sin(Q)*X,ee=ye*Math.cos(Q)*X,se=-ye*X*.5,Ae=de*X*.5;a.push(k-se,L,J-Ae,k+se,L,J+Ae,k+se+Ye,L+Qe,J+Ae+ee,k-se+Ye,L+Qe,J-Ae+ee);for(let Ze=0;Ze<4;Ze++)o.push(de*.3,.9,ye*.3);c.push(0,1,1,1,1,0,0,0),l.push(Ve,Ve+1,Ve+2,Ve,Ve+2,Ve+3)}}let f=new nt;f.setAttribute("position",new _e(t,3)),f.setAttribute("normal",new _e(n,3)),f.setAttribute("color",new _e(i,3)),f.setIndex(r);let h=new nt;return h.setAttribute("position",new _e(a,3)),h.setAttribute("normal",new _e(o,3)),h.setAttribute("uv",new _e(c,2)),h.setIndex(l),[f,h]}function xM(s,e,t){let n=new kt;n.name="bamboo";let i=Tt(new yn({vertexColors:!0}),null,"bamCulm"),r=Tt(new yn({map:mM(),alphaTest:.45,side:Lt,color:16777215}),h=>{h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      { vec4 wp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix * wp;
        #endif
        float ph = dot(wp.xz, vec2(0.31, 0.23)); transformed.x += sin(uTime * 1.3 + ph) * 0.05 * transformed.y / 8.0; transformed.z += cos(uTime * 1.1 + ph) * 0.04 * transformed.y / 8.0; }`).replace("#include <common>",`#include <common>
uniform float uTime;`)},"bamLeaf"),a=[0,1,2].map(h=>gM(500+h*31)),o=new qe,c=new zt,l=new I,u=new I,f=new I(0,1,0);return a.forEach(([h,d],m)=>{let x=s.filter((_,M)=>M%3===m);if(!x.length)return;let g=new Qt(h,i,x.length),p=new Qt(d,r,x.length);x.forEach(([_,M,y],S)=>{c.setFromAxisAngle(f,(_*7.3+M*3.1)%6.283),e(_,t(_,M)-.05,M,l),o.compose(l,c,u.setScalar(y)),g.setMatrixAt(S,o),p.setMatrixAt(S,o)});for(let _ of[g,p])_.castShadow=!0,_.receiveShadow=!0,_.computeBoundingSphere(),n.add(_);p.customDepthMaterial=new gs({depthPacking:La,map:r.map,alphaTest:.45,side:Lt})}),n}function bM(s,e,t){let n=new kt;n.name="taoGrass";let i=es(6,.22,.55,.022,1),r=es(5,.3,.7,.025,2),a=es(6,.22,.55,.022,1,1),o=es(5,.3,.7,.025,2,1),c=Ou([.06,.13,.06],[.42,.55,.2],"grass"),l=new Map;for(let p of s){let _=Math.floor(p[0]/40)+","+Math.floor(p[2]/40);l.has(_)||l.set(_,[]),l.get(_).push(p)}let u=new qe,f=new zt,h=new I,d=new I,m=new I(0,1,0),x=new Oe,g=[];for(let p of l.values()){let _=new _n;for(let[M,y,S]of[[i,a,0],[r,o,1]]){let b=p.filter((E,A)=>A%2===S);if(!b.length)continue;let w=new Qt(M,c,b.length);b.forEach(([E,A,C,L],U)=>{f.setFromAxisAngle(m,t()*6.283),e(E,A-.03,C,h),_.expandByPoint(h),u.compose(h,f,d.setScalar(L)),w.setMatrixAt(U,u);let D=dt(E*.15,C*.15);x.setRGB(.85+D*.12,1,.8+D*.1),w.setColorAt(U,x)});let v=new Qt(y,c,b.length);v.instanceMatrix=w.instanceMatrix,v.instanceColor=w.instanceColor;for(let E of[w,v])E.receiveShadow=!0,E.computeBoundingSphere(),E.layers.set(1),n.add(E);v.visible=!1,g.push({box:_,full:w,lod:v})}_.expandByScalar(1)}return{group:n,lod:p=>{for(let _ of g){let M=_.box.distanceToPoint(p)>60;_.full.visible=!M,_.lod.visible=M}}}}function vM(s,e){let t=new fn(1,1),n=new _i;n.setIndex(t.index),n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let i=new an(new Float32Array(e*4),4);n.setAttribute("aO",i),n.instanceCount=0;let r=new Ht({uniforms:Object.assign({uSmoke:s.uSmoke},ht),transparent:!0,depthWrite:!1,vertexShader:`attribute vec4 aO; uniform float uTime; uniform vec2 uWind; varying vec2 vUv; varying float vA; varying vec3 vW;
      void main(){ float life = 16.0; float age = fract(uTime / life + aO.w);
        vec3 c = aO.xyz + vec3(uWind.x * 2.2 + 0.6, 0.0, uWind.y * 2.2) * age * age * 6.0 + vec3(sin(age * 7.0 + aO.w * 30.0) * 0.25, age * 11.0, cos(age * 5.0 + aO.w * 20.0) * 0.2);
        float s = 0.5 + age * 3.6; vA = smoothstep(0.0, 0.08, age) * (1.0 - smoothstep(0.35, 1.0, age));
        vec3 rt = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        vec3 wp = c + (rt * position.x + up * position.y) * s; vUv = uv; vW = wp; gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:`uniform float uSmoke; varying vec2 vUv; varying float vA; varying vec3 vW; ${Jn}
      float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h1(i), h1(i + vec2(1, 0)), f.x), mix(h1(i + vec2(0, 1)), h1(i + vec2(1, 1)), f.x), f.y); }
      void main(){ vec2 q = vUv - 0.5; float n = vn(vUv * 3.0 + vec2(vW.y * 0.2, uTime * 0.05)) * 0.6 + vn(vUv * 7.0 - uTime * 0.07) * 0.4;
        float a = (1.0 - smoothstep(0.2, 0.5, length(q) + (n - 0.5) * 0.25)) * vA * uSmoke * 0.3; if (a < 0.003) discard;
        vec3 V = normalize(vW - cameraPosition); float sd = max(dot(V, uSunDir), 0.0);
        vec3 col = mix(uHaze, vec3(0.9, 0.91, 0.94), 0.55) + uSunCol * (0.08 + pow(sd, 4.0) * 0.5);
        gl_FragColor = vec4(applyFog(col, vW), a); }`}),a=new ze(n,r);return a.frustumCulled=!1,a.renderOrder=3,a.name="smoke",a.layers.set(1),a.userData.set=o=>{let c=0;for(let l of o)for(let u=0;u<8&&c<e;u++,c++)i.setXYZW(c,l.x,l.y,l.z,u/8+l.x*.37%.1);n.instanceCount=c,i.needsUpdate=!0},a}var Rn=new URLSearchParams(location.search),_M=+(Rn.get("ready")||40),Nd=Rn.has("diag"),Xa=Rn.has("bench"),Zn=+(Rn.get("cam")||0),yM=Rn.has("t")?+Rn.get("t"):null,MM=Rn.has("notext"),SM=/iPhone|iPad|Android/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.userAgent),H0={high:{mp:3.4,msaa:4,shadow:2048,refl:.5,grass:1},mid:{mp:1.8,msaa:4,shadow:1024,refl:.4,grass:.7},low:{mp:1,msaa:2,shadow:1024,refl:.33,grass:.45}},bt=window.__diag={ready:!1,version:"v2-s4.3",tier:"",fps:0,ms:0,res:[0,0],scale:1,dpr:devicePixelRatio,gpu:"",cam:Zn,t:0,s:0,draws:0,tris:0,errors:[]};window.addEventListener("error",s=>bt.errors.push(String(s.message).slice(0,300)));var cr=document.getElementById("c"),In=new Cu({canvas:cr,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1});In.setPixelRatio(1);In.shadowMap.enabled=!0;In.shadowMap.type=Rr;In.info.autoReset=!1;{let s=In.getContext(),e=s.getExtension("WEBGL_debug_renderer_info");bt.gpu=e?s.getParameter(e.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER)}var nh=Rn.get("q")||(SM?"mid":"high"),rr=H0[nh]||H0.high;bt.tier=nh;var wM=/Intel/i.test(bt.gpu)&&!/Arc/i.test(bt.gpu),hn=new ds,xt=new mn(52,1,.05,9e3);xt.layers.enable(1);var Ai=new ys(16777215,3);Ai.castShadow=!0;Ai.shadow.mapSize.set(rr.shadow,rr.shadow);Object.assign(Ai.shadow.camera,{left:-42,right:42,top:42,bottom:-42,near:1,far:400});Ai.shadow.bias=-5e-4;Ai.shadow.normalBias=.05;hn.add(Ai,Ai.target);var Ad=new Ar(16777215,4473924,1);hn.add(Ad);hn.add(Lu());var EM=performance.now(),Ud=d0(),yc=n0(Ud),J0=Tt(new en({vertexColors:!0,roughness:.97,metalness:0}),s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vGW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
    varying vec3 vGW; float gh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
    { float fd = length(vGW - cameraPosition); float n = gn(vGW.xz * 0.9) * 0.5 + mix(0.15, gn(vGW.xz * 3.7), smoothstep(90.0, 30.0, fd)) * 0.3 + mix(0.1, gn(vGW.xz * 11.0), smoothstep(30.0, 10.0, fd)) * 0.2; diffuseColor.rgb *= 0.86 + 0.28 * n; }`)},"ground"),ih=new ze(yc.near,J0);ih.receiveShadow=!0;hn.add(ih);var Od=new ze(yc.far,J0);hn.add(Od);var Rd=Uu(Ud);hn.add(Rd);var $u=p0(Ud);hn.add($u.group);var Z0=yc.near.userData.rect,ar=null,Qu=za(),Cd=za(Math.round(420*rr.grass),[11,7,13],.055,23),eh=g0(yc.heightTex,Z0),un=x0();hn.add(Qu,Cd,eh,un);var gc=Wf(Mn,Wn,Jt.start-10,Jt.act2+50);gc.name="mist";hn.add(gc);var di=M0();hn.add(di);var qa=S0();hn.add(qa);r0();var $0=o0();hn.add($0);var Ka=c0(),TM=Ka.mk();hn.add(TM);var xc=l0();hn.add(xc,xc.userData.far);var hc={fog:+(Rn.get("fogk")||1),bloom:+(Rn.get("bloomk")||1),sat:+(Rn.get("satk")||1)},Nt=z0(Ka,{shadow:rr.shadow});bt.tao={buildMs:Nt.buildMs,stats:Nt.stats,ready:!1,err:null};window.__tao=Nt;$m(new I().addScaledVector(Nt.R,.66).addScaledVector(Nt.F,.44).setY(.6));$i.P6.sun.copy(Nt.R).multiplyScalar(-.72).addScaledVector(Nt.F,.62).setY(.16).normalize();var Za=b0(110);Za.name="stream";Za.frustumCulled=!1;{let s=Za.material.uniforms;s.uFrom.value.copy(Un(Be.lat-4,.9,Be.fwd-7)),s.uTarget.value.copy(Un(Be.lat+.1,Be.yb+1.3,Be.fwd+1.8)),s.uRt.value.copy(dn.r),s.uFw.value.copy(dn.f)}hn.add(Za);var Bd=Wf(Mn,Wn,690,fi-2,10);Bd.name="mist3";hn.add(Bd);Qu.name="falling",eh.name="floating",un.name="guide";bt.buildMs=Math.round(performance.now()-EM);var Q0=Rn.has("passes"),bc={};if(Q0){let s=In.renderBufferDirect.bind(In);In.renderBufferDirect=function(e,t,n,i,r,a){let o=e===xt?"main":e.isOrthographicCamera?e.right-e.left>10?"shadow":"post":"refl",c=n.index?n.index.count:n.attributes.position.count,l=r.isInstancedMesh?r.count:n.isInstancedBufferGeometry?n.instanceCount:1,u=bc[o]||(bc[o]={draws:0,tris:0});u.draws++,u.tris+=Math.round(c/3*(l===1/0?1:l));{let f=r.name||r.parent&&r.parent.name||r.type,h=u.by||(u.by={});h[f]=(h[f]||0)+Math.round(c/3*(l===1/0?1:l))}return s(e,t,n,i,r,a)}}window.__pass=()=>window.__passLast||null;window.__tris=()=>{let s={},e=window.__inTao?Nt.scene:hn;e.children.forEach((n,i)=>{let r=0;n.traverse(a=>{if(!a.isMesh&&!a.isInstancedMesh)return;let o=a.geometry,c=(o.index?o.index.count:o.attributes.position.count)/3,l=a.isInstancedMesh?a.count:o.isInstancedBufferGeometry?o.instanceCount:1;r+=c*(l===1/0?1:l)}),s[(n.name||n.type)+"#"+i]=Math.round(r)});let t={};return e.traverse(n=>{if(!n.isMesh||!n.name)return;let i=n.geometry,r=(i.index?i.index.count:i.attributes.position.count)/3;t[n.name]=(t[n.name]||0)+Math.round(r*(n.isInstancedMesh?n.count:1))}),s.by=t,s};var Pd=new Hu(In),er=1,tr=1,Hr=1;function vc(){let s=Math.min(devicePixelRatio||1,2);er=Math.round(innerWidth*s),tr=Math.round(innerHeight*s),In.setSize(er,tr,!1),cr.style.width=innerWidth+"px",cr.style.height=innerHeight+"px",Hr=at(Math.sqrt(rr.mp*1e6/(er*tr)),.4,1)*ir,Pd.setSize(er,tr,Hr,rr.msaa);let e=Math.round(er*Hr*rr.refl),t=Math.round(tr*Hr*rr.refl);ar?ar.setRes(e,t):(ar=m0(yc.heightTex,Z0,e,t),hn.add(ar)),Nt.setRes(e,t),xt.aspect=er/tr,xt.fov=er/tr<.8?68:52,xt.updateProjectionMatrix(),bt.res=[Math.round(er*Hr),Math.round(tr*Hr)],bt.scale=+Hr.toFixed(3)}var ir=wM&&!Rn.get("q")&&!Xa&&!Zn?.8:1,fc=0;vc();addEventListener("resize",vc);ar.name="water";ih.name="near";Od.name="far";$u.group.name="grass";var G0=(Rn.get("hide")||"").split(",").filter(Boolean),kd=s=>{G0.length&&s.traverse(e=>{G0.includes(e.name)&&(e.visible=!1)})};kd(hn);kd(Nt.scene);var AM=s=>s<30?4.3:Ke(4.6,2.6,re(30,82,s)),Id=[];{let s=Jt.start;for(let e=0;e<=1e3;e++)Id.push(s),s+=AM(e*.1)*.1}var or=84,Ga=87,V0=626,Zu=742,is=119,W0=s=>{if(s<=or+1.5){let n=at(s*10,0,999.999),i=Math.floor(n);return Ke(Id[i],Id[i+1],n-i)}let e=at((s-or-1.5)/(is-or-1.5),0,1),t=e<.6?e/.8:(e-(e-.6)*(e-.6)/.8)/.8;return V0+(Zu-V0)*t},eg=s=>Ke(Math.sin(s*.045)*.9+Math.sin(s*.013+1)*1.1,Wn(s)-1.45,re(688,738,s)),RM=(s,e=.14)=>{let t=1/(1-e);return s<e?.5*t*s*s/e:s>1-e?1-.5*t*(1-s)*(1-s)/e:t*(s-e/2)},_t=(()=>{let s={},e={};Mn(Zu,s),Mn(Zu+7,e);let t=eg(Zu),n=s.x-s.tz*t,i=s.z+s.tx*t,r=Math.atan2(-(e.x-n),-(e.z-i)),a=new qe().compose(new I(n,-.02,i),new zt().setFromEuler(new Ln(0,r,0,"YXZ")),new I(1,1,1)),o=qf.clone().applyMatrix4(a),c=(A,C)=>{let L=Un(A,0,C);return Vn(L.x,L.z)},l=A=>[(A.x-dn.o.x)*dn.r.x+(A.z-dn.o.z)*dn.r.z,(A.x-dn.o.x)*dn.f.x+(A.z-dn.o.z)*dn.f.z],[u,f]=l(o),h=[o,o.clone().add(new I(0,.42,0)).addScaledVector(dn.r,.4),Un(u+2.7,c(u+2.7,f+1.2)+1.6,f+1.2),Un(9.4,c(9.4,2.5)+1.6,2.5),Un(Be.lat-.05,Be.yb+1.6,Be.fwd-2.4)],d=h.length;for(let A=0;A<=9;A++){let C=Ka.curve.getPointAt(A/9);h.push(C.add(new I(0,1.5,0)))}let m=new li(h,!1,"centripetal"),x=m.getLength(),g=m.getLengths(400),p=A=>{let C=0,L=1e9;for(let U=0;U<=400;U++){let D=m.getPoint(U/400).distanceTo(A);D<L&&(L=D,C=U)}return g[C]},_=p(h[1]),M=p(h[d]),y=is+3.2,S=y+(M-1.1-_)/1.2,b=S+2.6,w=b+(x-(M-.8))/1.35,v=[[is+.6,0],[y,_],[S,M-1.1],[b,M-.8],[w,x]];return{curve:m,len:x,dMouth:M,dAt:A=>{if(A<=v[0][0])return 0;for(let C=0;C<v.length-1;C++)if(A<v[C+1][0]){let L=(A-v[C][0])/(v[C+1][0]-v[C][0]);return Ke(v[C][1],v[C+1][1],C===3?RM(L):re(0,1,L))}return x},T2:S,T3:b,T4:w,yaw0:r}})(),Ku=Math.round(_t.T4+61),th=document.getElementById("end"),ja=!1,q0=0;document.getElementById("again").addEventListener("click",()=>{ja&&(At=0,ja=!1,th.classList.remove("on"),th.setAttribute("aria-hidden","true"))});var _c={1:{T:8,yaw:0,pitch:-.07},2:{T:22,yaw:.3,pitch:-.2},3:{T:29,yaw:-.05,pitch:-.01},4:{T:46,yaw:.02,pitch:-.03},5:{T:58,yaw:1,pitch:-.1},6:{T:80,yaw:0,pitch:.02},7:{T:95,yaw:0,pitch:.08},8:{T:112,yaw:0,pitch:.1},9:{T:128,yaw:0,pitch:.02},10:{T:140,yaw:0,pitch:0},11:{T:150,yaw:0,pitch:0}};[-3,1.5,5,15,24,36,45,50,56].forEach((s,e)=>{_c[12+e]={T:_t.T4+s,yaw:0,pitch:0}});Rn.has("ct")&&(_c[99]={T:_t.T4+ +Rn.get("ct"),yaw:+(Rn.get("yaw")||0),pitch:+(Rn.get("pitch")||0)});var Ya=0,Ja=0,sr=null;cr.addEventListener("pointerdown",s=>{sr={x:s.clientX,y:s.clientY,yaw:Ya,pitch:Ja},cr.setPointerCapture(s.pointerId)});cr.addEventListener("pointermove",s=>{if(!sr)return;let e=2.2/Math.min(innerWidth,innerHeight);Ya=at(sr.yaw-(s.clientX-sr.x)*e,-1.6,1.6),Ja=at(sr.pitch-(s.clientY-sr.y)*e,-.5,.45)});cr.addEventListener("pointerup",()=>sr=null);cr.addEventListener("pointercancel",()=>sr=null);var X0=document.getElementById("txt"),j0=document.getElementById("seal"),CM=[{a:1,T0:2,T1:26,seal:"\u4E00 \xB7 \u7F18\u6EAA",text:"\u664B\u592A\u5143\u4E2D\uFF0C\u6B66\u9675\u4EBA\u6355\u9C7C\u4E3A\u4E1A\u3002\u7F18\u6EAA\u884C\uFF0C\u5FD8\u8DEF\u4E4B\u8FDC\u8FD1\u3002"},{a:2,T0:32,T1:79,seal:"\u4E8C \xB7 \u6843\u6797",text:"\u5FFD\u9022\u6843\u82B1\u6797\uFF0C\u5939\u5CB8\u6570\u767E\u6B65\uFF0C\u4E2D\u65E0\u6742\u6811\uFF0C\u82B3\u8349\u9C9C\u7F8E\uFF0C\u843D\u82F1\u7F24\u7EB7\u3002"},{a:3,T0:90,T1:116,seal:"\u4E09 \xB7 \u5C71\u53E3",text:"\u6797\u5C3D\u6C34\u6E90\uFF0C\u4FBF\u5F97\u4E00\u5C71\uFF0C\u5C71\u6709\u5C0F\u53E3\uFF0C\u4EFF\u4F5B\u82E5\u6709\u5149\u3002"},{a:3,T0:119.5,T1:_t.T3,seal:"\u4E09 \xB7 \u5C71\u53E3",text:"\u4FBF\u820D\u8239\uFF0C\u4ECE\u53E3\u5165\u3002"},{a:4,T0:_t.T3+2,T1:_t.T4-1,seal:"\u56DB \xB7 \u8C41\u7136",text:"\u521D\u6781\u72ED\uFF0C\u624D\u901A\u4EBA\u3002\u590D\u884C\u6570\u5341\u6B65\uFF0C\u8C41\u7136\u5F00\u6717\u3002"},...[[3,11,"\u56DB \xB7 \u8C41\u7136","\u571F\u5730\u5E73\u65F7\uFF0C\u5C4B\u820D\u4FE8\u7136\uFF0C\u6709\u826F\u7530\u7F8E\u6C60\u6851\u7AF9\u4E4B\u5C5E\u3002"],[12,19,"\u56DB \xB7 \u8C41\u7136","\u9621\u964C\u4EA4\u901A\uFF0C\u9E21\u72AC\u76F8\u95FB\u3002"],[21,29,"\u4E94 \xB7 \u6751\u843D","\u5176\u4E2D\u5F80\u6765\u79CD\u4F5C\uFF0C\u7537\u5973\u8863\u7740\uFF0C\u6089\u5982\u5916\u4EBA\u3002"],[30,38,"\u4E94 \xB7 \u6751\u843D","\u9EC4\u53D1\u5782\u9AEB\uFF0C\u5E76\u6021\u7136\u81EA\u4E50\u3002"],[42.5,49.5,"\u4E94 \xB7 \u6751\u843D","\u89C1\u6E14\u4EBA\uFF0C\u4E43\u5927\u60CA\uFF0C\u95EE\u6240\u4ECE\u6765\u3002"],[51,59,"\u4E94 \xB7 \u6751\u843D","\u4FBF\u8981\u8FD8\u5BB6\uFF0C\u8BBE\u9152\u6740\u9E21\u4F5C\u98DF\u3002"]].map(([s,e,t,n])=>({a:t[0]==="\u56DB"?4:5,T0:_t.T4+s,T1:_t.T4+e,seal:t,text:n}))],K0=null;function PM(s){if(MM)return;let e=CM.find(n=>s>=n.T0&&s<=n.T1)||null;e!==K0&&(K0=e,e&&(j0.textContent=e.seal,X0.textContent=e.text));let t=e?Math.min(1,(s-e.T0)/1.5,(e.T1-s)/1.5):0;X0.style.opacity=j0.style.opacity=Zn?e?1:0:at(t,0,1)}var Gr={},Ei={},Ti=new I,dc=new I,nr=new I,Va=new I,Ps=new I,Vr=new ve,Rs=new Ln(0,0,0,"YXZ"),Y0=!1,Ld=!1,Yu=0,pc=new mn(52,16/10,.2,9e3),IM=new vn(256,160),LM=new Vu().setMeshoptDecoder(I0),tg=()=>{Ld||(Ld=!0,Nt.load(LM,In,xt).then(()=>kd(Nt.scene)))};function DM(){let s=Nt.cam(15,pc.position,Ps);pc.lookAt(Ps),pc.updateMatrixWorld(),Oa($i.P5,$i.P6,0,Nt.sun,Nt.hemi),Nt.update(15,Bt,pc,s);let e=Nt.TU.uLamp.value;In.setRenderTarget(IM),In.render(Nt.scene,pc),In.setRenderTarget(null),Nt.TU.uLamp.value=e}var zi={done:Xa||Zn||Rn.has("nocalib"),n:0,acc:0},Wa=null,At=Zn?_c[Zn].T:yM??0,Bt=0,Dd=performance.now(),Cs=0,mc=0,Ju=0,ng=[];Zn&&(Ya=_c[Zn].yaw,Ja=_c[Zn].pitch);function Fd(s){let e=Math.min(.1,(s-Dd)/1e3);if(Dd=s,Cs++,In.info.reset(),Q0&&(window.__passLast=bc,bc={}),Bt+=e,!Zn&&!ja&&(At+=Xa?e*3:e),!Zn&&!Xa&&!ja&&At>Ku+2&&(ja=!0,q0=0,th.classList.add("on"),th.setAttribute("aria-hidden","false")),ja&&++q0>3){requestAnimationFrame(Fd);return}let t=W0(At);ht.uTime.value=Bt,ht.uBoatS.value=t,bt.t=+At.toFixed(2),bt.s=+t.toFixed(1),bt.walk=[+_t.T2.toFixed(1),+_t.T3.toFixed(1),+_t.T4.toFixed(1),+_t.dMouth.toFixed(1),+_t.len.toFixed(1)],bt.walk=[+_t.T2.toFixed(1),+_t.T3.toFixed(1),+_t.T4.toFixed(1),+_t.dMouth.toFixed(1),+_t.len.toFixed(1)],ht.uBloomFront.value=t+42+Math.max(0,t-250)*3.2;let n=re(Jt.act2-30,Jt.act2+60,t),i=eg(t);Mn(t,Gr),Mn(t+7,Ei);let r=Gr.x-Gr.tz*i,a=Gr.z+Gr.tx*i,o=Ei.x-r,c=Ei.z-a,l=Math.atan2(-o,-c),u=1-.6*re(is-3,is+1,At);di.position.set(r,.03*Math.sin(Bt*1.3)*u-.02,a),di.rotation.set(.012*Math.sin(Bt*1.1+1)*u,l,.018*Math.sin(Bt*.9)*u,"YXZ"),di.updateMatrixWorld();let f=At>is+.6,h=f?_t.dAt(At):0,d=f?re(_t.dMouth-.5,_t.dMouth+5,h):0,m=_t.T4,x=At-m,g=At>m,p=g||f&&h>_t.dMouth+14;window.__inTao=p;let _=0;{let F=re(99,114,At)*(1-re(is+.6,is+3.4,At));if(F>0){let B=Be.mouth.x-di.position.x,k=Be.mouth.z-di.position.z,J=Math.atan2(-B,-k);_=at(Math.atan2(Math.sin(J-l),Math.cos(J-l)),-.9,.9)*.7*F}}if(!f)xt.position.copy(qf).applyMatrix4(di.matrixWorld),Rs.set(-.05+Ja+di.rotation.x*.5,l+_+Ya,di.rotation.z*.4);else{_t.curve.getPointAt(at(h/_t.len,0,1),xt.position),_t.curve.getPointAt(at((h+2.4)/_t.len,0,.9999),Ti);let F=Ti.x-xt.position.x,B=Ti.y-xt.position.y,k=Ti.z-xt.position.z,J=Math.hypot(F,k);J<.6&&(_t.curve.getTangentAt(.9999,Ti),F=Ti.x,B=Ti.y,k=Ti.z,J=Math.hypot(F,k));let X=Math.atan2(-F,-k),Y=Math.atan2(B,J)*.6,Q=re(is+.6,is+3.4,At),de=(_t.dAt(At+.15)-_t.dAt(At-.15))/.3,ye=at(de/1.25,0,1),Ve=h/.74;xt.position.y+=.022*Math.sin(Ve*Math.PI*2)*ye,Rs.set(Ke(-.05,Y-.03,Q)+Ja,l+_+(Math.atan2(Math.sin(X-l),Math.cos(X-l))-_)*Q+Ya,.005*Math.sin(Ve*Math.PI)*ye)}let M=null;if(g){M=Nt.cam(x,xt.position,Ti);let F=Ti.x-xt.position.x,B=Ti.y-xt.position.y,k=Ti.z-xt.position.z,J=Math.hypot(F,k),X=Math.atan2(-F,-k)+Ya,Y=Math.atan2(B,J)+Ja,Q=re(0,1.5,x),de=M.walk;xt.position.y+=.022*Math.sin(M.step*Math.PI*2)*de,Rs.set(Ke(Rs.x,Y,Q),Rs.y+Math.atan2(Math.sin(X-Rs.y),Math.cos(X-Rs.y))*Q,Ke(Rs.z,.005*Math.sin(M.step*Math.PI)*de,Q))}{let F=p?.2:.05;xt.near!==F&&(xt.near=F,xt.updateProjectionMatrix())}xt.quaternion.setFromEuler(Rs),xt.updateMatrixWorld(),Wa=Wa===null?l:Wa+Math.atan2(Math.sin(l-Wa),Math.cos(l-Wa))*Math.min(1,e*.5),Zm(Wa);let y=re(or+1,Ga+5,At),S=g?Math.max(re(47,58,x),.3*re(28,44,x)):0;p?(g?(Oa($i.P5,$i.P6,S,Nt.sun,Nt.hemi),ht.uCloud.value*=1-.75*re(30,40,x)):Oa($i.P3,$i.P5,re(_t.dMouth+14,_t.len,h),Nt.sun,Nt.hemi),hc.fog!==1&&(ht.uFog.value.x*=hc.fog,ht.uFog.value.z*=hc.fog)):y>0?Oa($i.P2,$i.P3,y,Ai,Ad):Qm(n,Ai,Ad),ht.uPeach.value=n*(1-.6*y);{let F=!(f&&h>_t.dMouth+12);ar.visible=ih.visible=Od.visible=Rd.visible=$u.group.visible=F,$0.visible=!(f&&h>_t.dMouth+4),document.body.classList.toggle("dark",d>.5&&At<m-1)}xt.getWorldDirection(Va),ht.uCam.value.copy(xt.position),Rd.userData.lod(xt.position),$u.group.userData.lod(xt.position),Ps.copy(xt.position).addScaledVector(Va.clone().setY(0).normalize(),26),Ai.target.position.copy(Ps),Ai.position.copy(Ps).addScaledVector(ht.uSunDir.value,200),Ai.target.updateMatrixWorld(),ht.uSunView.value.copy(ht.uSunDir.value).transformDirection(xt.matrixWorldInverse);let b=re(Jt.act2-25,Jt.act2+40,t)*(1-.85*re(645,700,t))*(1-d);if(Qu.material.uniforms.uDensity.value=b,Qu.material.uniforms.uFwd.value.copy(Va).setY(0).normalize(),Cd.material.uniforms.uDensity.value=b*.9,Cd.material.uniforms.uFwd.value.copy(Va).setY(0).normalize(),gc.material.uniforms.uLift.value=re(Jt.act2-20,Jt.act2+45,t),gc.visible=gc.material.uniforms.uLift.value<.995,eh.material.uniforms.uDensity.value=.04+b*.96,eh.material.uniforms.uFwd.value.copy(Va).setY(0).normalize(),At<40){let F=t+14+Math.sin(Bt*.3)*.8;Mn(F,Ei);let B=re(26,31,At),k=-Math.sin(l),J=-Math.cos(l),X=Ps.copy(di.position).add(new I(k*15.5+J*2.9,0,J*15.5-k*2.9)),Y=-Ei.tz,Q=Ei.tx,de=Wn(F)-1.2,ye=at((X.x-Ei.x)*Y+(X.z-Ei.z)*Q+Math.sin(Bt*.37)*.35,-de,de);un.position.set(Ei.x+Y*ye,.03+B*(2.5+Math.sin(Bt*2)*.3),Ei.z+Q*ye),un.position.addScaledVector(new I(Ei.tx,0,Ei.tz),B*12),un.rotation.set(.55+.1*Math.sin(Bt*1.3)+B*Math.sin(Bt*3)*.8,Bt*.2,.2*Math.sin(Bt*.9)+B*Math.cos(Bt*2.5)*.6),un.visible=At<33,un.material.uniforms.uGlow.value=.75+.25*Math.sin(Bt*2)+(1-n)*.3,un.userData.halo.material.opacity=(.55+.15*Math.sin(Bt*2))*(1-re(28,33,At))}else{let F=-Math.sin(l),B=-Math.cos(l);if(dc.set(di.position.x+F*11,1+Math.sin(Bt*1.7)*.15,di.position.z+B*11),Un(Be.lat-1.45+Math.sin(Bt*.8)*.25,Be.yb+1.85+Math.sin(Bt*1.9)*.12,Be.fwd-1.3+Math.sin(Bt*.6)*.25,nr),dc.lerp(nr,re(106,117,At)),f&&(_t.curve.getPointAt(at((h+2.7)/_t.len,0,1),nr),nr.y+=-.15+Math.sin(Bt*1.6)*.08,nr.addScaledVector(dn.r,Math.sin(Bt*.9)*.12),dc.lerp(nr,re(_t.T2-2.5,_t.T2+.5,At))),g){let Y=re(0,9,x);Nt.L2W(-2+Math.sin(Bt*.7)*1.5,Ke(3.2,16,Y)+Math.sin(Bt*1.6)*.3,Ke(5,95,Y),nr),dc.lerp(nr,re(-.3,2.5,x))}un.position.copy(dc),un.rotation.set(.55+.25*Math.sin(Bt*1.3),Bt*.35,.3*Math.sin(Bt*.9));let k=re(97,101,At)*(1-re(m+6,m+10,At));un.visible=k>.01;let J=g?0:d;un.material.uniforms.uGlow.value=(.9+.2*Math.sin(Bt*2))*(1-.6*J)*(g?k:1);let X=Math.max(J,1-re(3,8,un.position.distanceTo(xt.position)));un.userData.halo.material.opacity=(.5+.15*Math.sin(Bt*2))*(1-.3*X)*k,un.userData.halo.scale.setScalar(Ke(6.56,2.4,X))}{let F=re(98,108,At)*(1-re(_t.T3,_t.T3+3,At));Za.material.uniforms.uDensity.value=F,Za.visible=F>.002,Bd.visible=!(f&&h>_t.dMouth+2)}Ka.uni.uGuide.value.copy(un.position),Ka.uni.uGuideI.value=un.visible?1.3:0;let w=re(5,16,xt.position.distanceTo(Be.mouth))*re(Ga,Ga+3,At)*(1-re(0,.3,d));bt.wd=+h.toFixed(2),Ka.uni.uGlowK.value=w,xc.material.opacity=.85*w,xc.visible=w>.01;{let F=xt.position.distanceTo(Be.mouth),B=re(18,45,F)*re(Ga,Ga+3,At),k=xc.userData.far;k.material.opacity=.42*B,k.visible=B>.01,k.scale.set(3+F*.07,2.6+F*.06,1)}{let F=Be.mouth.clone().project(xt);bt.cave=[+F.x.toFixed(3),+F.y.toFixed(3),+F.z.toFixed(4),+Be.mouth.distanceTo(xt.position).toFixed(1)]}{let F=un.position.clone().project(xt);bt.guide=[+F.x.toFixed(3),+F.y.toFixed(3),+F.z.toFixed(4),+un.position.distanceTo(xt.position).toFixed(1)]}if(qa.userData.update(Bt,At,n,W0),qa.visible&&qa.children[0].visible){let F=qa.children[0].position.clone().project(xt);bt.egret=[+F.x.toFixed(3),+F.y.toFixed(3),+qa.children[0].position.distanceTo(xt.position).toFixed(1)]}di.userData.petals.count=Math.floor(520*re(Jt.act2-10,Jt.act2+170,t)),ar&&ar.material.uniforms.uBoat.value.set(r,a,Gr.tx,Gr.tz);let v=Ps.copy(xt.position).addScaledVector(ht.uSunDir.value,1e3).project(xt);Vr.set(v.x*.5+.5,v.y*.5+.5);let E=at(Va.dot(ht.uSunDir.value)*1.6,0,1),A=1-re(.6,1.4,Math.max(Math.abs(v.x),Math.abs(v.y)));bt.sun=[+Vr.x.toFixed(3),+Vr.y.toFixed(3),+E.toFixed(2),+A.toFixed(2)];let C=n*E*A*.75*(1-y);if(p)if(g)C=E*A*Ke(.2,.7,S);else{let F=Ps.copy(Nt.O).setY(Nt.O.y+1.6).project(xt);F.z<1&&(Vr.set(F.x*.5+.5,F.y*.5+.5),C=.55*re(_t.dMouth+14,_t.len-2,h)*(1-re(.7,1.3,Math.max(Math.abs(F.x),Math.abs(F.y)))))}if(w>.01){let F=Ps.copy(Be.mouth).project(xt);F.z<1&&(Vr.set(F.x*.5+.5,F.y*.5+.5),C=.5*w*(1-re(.7,1.3,Math.max(Math.abs(F.x),Math.abs(F.y)))))}let L=re(or-.8,or+.9,At)*(1-re(or+1.9,Ga+.6,At)),U=re(m-2.5,m+.3,At)*(1-re(m+.6,m+4,At)),D=Math.max(Zn?0:Math.max(1-re(0,1.6,At),L,re(Ku,Ku+1.5,At)),.65*U*U);if(p?(Nt.update(x,Bt,xt,M),un.parent!==Nt.scene&&Nt.scene.add(un)):un.parent!==hn&&hn.add(un),bt.tt=+x.toFixed(2),bt.tao.ready=Nt.ready,Nt.err&&(bt.tao.err=Nt.err),p?Pd.render(Nt.scene,xt,{thr:1,expo:Ke(g?Ke(1,1.05,S):1.55,2.4,U),bloom:Ke(.19,.42,S)*hc.bloom,rays:C,sunUv:Vr,time:Bt,fade:D,warm:Ke(.85,1,S),sat:Ke(Ke(1.2,1.1,re(28,38,x)),1.05,S)*hc.sat}):Pd.render(hn,xt,{thr:1,expo:Ke(Ke(1.08,1,n),1.55,d),bloom:Ke(Ke(.18,.32,n),.36,y),rays:C,sunUv:Vr,time:Bt,fade:D,warm:n*(1-.5*y),sat:Ke(.95,1.12,n)*(1-.04*y)}),PM(At),Nt.ready&&!Y0&&!p&&(D>.97||f&&h>_t.dMouth+3)&&(Y0=!0,DM(),fc=s),!Ld&&zi.done&&Cs>40&&tg(),Nt.ready&&!Yu&&(Yu=Cs),mc+=e,Ju++,mc>.5&&(bt.fps=+(Ju/mc).toFixed(1),bt.ms=+(mc/Ju*1e3).toFixed(2),mc=0,Ju=0,bt.draws=In.info.render.calls,bt.tris=In.info.render.triangles,Nd&&(zd.textContent=`${bt.gpu}
${bt.res.join("\xD7")} \xD7${bt.scale} ${nh}  ${bt.fps} fps  ${bt.ms} ms
T ${bt.t}  s ${bt.s}  draws ${bt.draws}  tris ${bt.tris}  calib ${bt.calib??"-"}`)),!zi.done&&(Cs>8&&(zi.acc+=e,zi.n++),zi.n>=24)){let F=zi.acc/zi.n*1e3;zi.ms=+F.toFixed(1),bt.calib=zi.ms,F>18.5&&(ir=at(ir*Math.sqrt(15/F),.62,1),vc()),zi.done=!0,fc=s}!Xa&&!Zn&&s-fc>2500&&zi.done&&Cs>90&&bt.fps>0&&(bt.fps<48&&ir>.62?(ir*=.88,vc(),fc=s):bt.fps>58.5&&ir<1&&(ir=Math.min(1,ir*1.08),vc(),fc=s)),Xa&&At>1.5&&!window.__bench&&(ng.push(e*1e3),At>=Ku&&FM()),!bt.ready&&Cs>_M&&(Zs.uRockOn.value>0||Cs>600)&&(Zn<12||Yu&&Cs>Yu+20||Cs>1500)&&(bt.ready=!0,document.body.classList.add("ready")),requestAnimationFrame(Fd)}function FM(){let s=ng.slice().sort((n,i)=>n-i),e=n=>+s[Math.min(s.length-1,Math.floor(s.length*n))].toFixed(2),t=s.reduce((n,i)=>n+i,0)/s.length;window.__bench={done:!0,frames:s.length,avgMs:+t.toFixed(2),fps:+(1e3/t).toFixed(1),p50:e(.5),p95:e(.95),p99:e(.99),max:e(.999),res:bt.res,scale:bt.scale,tier:nh,gpu:bt.gpu,buildMs:bt.buildMs},Nd&&(zd.textContent+=`
BENCH `+JSON.stringify(window.__bench))}var zd=document.getElementById("diag");Nd&&(zd.style.display="block");In.compile(hn,xt);(Zn>=12||At>or)&&tg();document.getElementById("load").style.opacity=0;requestAnimationFrame(s=>{Dd=s,requestAnimationFrame(Fd)});})();
