(()=>{var Ao="186";var gu=0,Ec=1,xu=2;var ls=1,_u=2,Ys=3,Bi=0,ke=1,le=2,ti=0,Zs=1,Tc=2,wc=3,Ac=4,vu=5;var cs=100,yu=101,Mu=102,Su=103,bu=104,Eu=200,Tu=201,wu=202,Au=203,Rc=204,Cc=205,Ru=206,Cu=207,Iu=208,Pu=209,Lu=210,Du=211,Uu=212,Nu=213,Fu=214,Va=0,ka=1,Ga=2,zs=3,Wa=4,Xa=5,qa=6,Ya=7,Ro=0,Bu=1,Ou=2,Vn=0,Ic=1,Pc=2,Lc=3,Dc=4,Uc=5,Nc=6,Fc=7;var Bc=300,Oi=301,hs=302,Co=303,Io=304,Wr=306,es=1e3,Jn=1001,Za=1002,Be=1003,zu=1004;var Xr=1005;var Se=1006,Po=1007;var ei=1008;var cn=1009,Oc=1010,zc=1011,Js=1012,Lo=1013,kn=1014,Cn=1015,Ge=1016,Do=1017,Uo=1018,$s=1020,Hc=35902,Vc=35899,kc=1021,Gc=1022,In=1023,$n=1026,zi=1027,Ks=1028,No=1029,Hi=1030,Fo=1031;var Bo=1033,qr=33776,Yr=33777,Zr=33778,Jr=33779,Oo=35840,zo=35841,Ho=35842,Vo=35843,ko=36196,Go=37492,Wo=37496,Xo=37488,qo=37489,$r=37490,Yo=37491,Zo=37808,Jo=37809,$o=37810,Ko=37811,jo=37812,Qo=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,Kr=36285,fl=36286;var Mr=2300,Ja=2301,za=2302,xc=2303,_c=2400,vc=2401,yc=2402;var Hu=3200,pl=3201;var jr=0,Vu=1,xi="",Ce="srgb",Sr="srgb-linear",br="linear",ie="srgb";var Ha=7680;var ku=519,Gu=512,Wu=513,Xu=514,ml=515,qu=516,Yu=517,gl=518,Zu=519,Wc=35044;var Xc="300 es",On=2e3,Hs=2001;function bf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=Er("canvas");return i.style.display="block",i}var kh={},Vs=null;function Tr(...i){let t="THREE."+i.shift();Vs?Vs("log",t,...i):console.log(t,...i)}function $u(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=$u(i);let t="THREE."+i.shift();if(Vs)Vs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Dt(...i){i=$u(i);let t="THREE."+i.shift();if(Vs)Vs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ts(...i){let t=i.join(" ");t in kh||(kh[t]=!0,Pt(...i))}function Ku(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ju={[Va]:ka,[Ga]:qa,[Wa]:Ya,[zs]:Xa,[ka]:Va,[qa]:Ga,[Ya]:Wa,[Xa]:zs},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wl=Math.PI/180,$a=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function zt(i,t,e){return Math.max(t,Math.min(e,i))}function Tf(i,t){return(i%t+t)%t}function Xl(i,t,e){return(1-e)*i+e*t}function Zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kc=class Kc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kc.prototype.isVector2=!0;var st=Kc,He=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,o=Math.sin(o*S)/A,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+x*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+x*o;let S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-o*d,t[e+2]=c*g+u*d+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jc=class jc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ql.copy(this).projectOnVector(t),this.sub(ql)}reflect(t){return this.sub(ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jc.prototype.isVector3=!0;var L=jc,ql=new L,Gh=new He,Qc=class Qc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],A=s[4],v=s[7],T=s[2],M=s[5],w=s[8];return r[0]=a*x+o*S+l*T,r[3]=a*m+o*A+l*M,r[6]=a*p+o*v+l*w,r[1]=c*x+u*S+f*T,r[4]=c*m+u*A+f*M,r[7]=c*p+u*v+f*w,r[2]=h*x+d*S+g*T,r[5]=h*m+d*A+g*M,r[8]=h*p+d*v+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yl.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yl.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qc.prototype.isMatrix3=!0;var Ut=Qc,Yl=new Ut,Wh=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){let i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var qt=wf();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,Ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ys===void 0&&(ys=Er("canvas")),ys.width=t.width,ys.height=t.height;let s=ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Af=0,ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zl(s[a].image)):r.push(Zl(s[a]))}else r=Zl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Rf=0,Jl=new L,sn=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=Se,a=ei,o=In,l=cn,c=i.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Ii(),this.name="",this.source=new ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Bc;sn.DEFAULT_ANISOTROPY=1;var th=class th{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(d+1)/2,T=(p+1)/2,M=(u+h)/4,w=(f+x)/4,_=(g+m)/4;return A>v&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=M/n,r=w/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=_/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};th.prototype.isVector4=!0;var Kt=th,ja=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wo=class wo{constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,x,m)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),a=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-x*c,e[9]=-o*l,e[2]=x-h*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=x+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h-x*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,d=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,If)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ti.crossVectors(n,mn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ti.crossVectors(n,mn)),Ti.normalize(),ga.crossVectors(mn,Ti),s[0]=Ti.x,s[4]=ga.x,s[8]=mn.x,s[1]=Ti.y,s[5]=ga.y,s[9]=mn.y,s[2]=Ti.z,s[6]=ga.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],A=n[7],v=n[11],T=n[15],M=s[0],w=s[4],_=s[8],b=s[12],R=s[1],D=s[5],I=s[9],U=s[13],P=s[2],O=s[6],k=s[10],G=s[14],$=s[3],X=s[7],K=s[11],tt=s[15];return r[0]=a*M+o*R+l*P+c*$,r[4]=a*w+o*D+l*O+c*X,r[8]=a*_+o*I+l*k+c*K,r[12]=a*b+o*U+l*G+c*tt,r[1]=u*M+f*R+h*P+d*$,r[5]=u*w+f*D+h*O+d*X,r[9]=u*_+f*I+h*k+d*K,r[13]=u*b+f*U+h*G+d*tt,r[2]=g*M+x*R+m*P+p*$,r[6]=g*w+x*D+m*O+p*X,r[10]=g*_+x*I+m*k+p*K,r[14]=g*b+x*U+m*G+p*tt,r[3]=S*M+A*R+v*P+T*$,r[7]=S*w+A*D+v*O+T*X,r[11]=S*_+A*I+v*k+T*K,r[15]=S*b+A*U+v*G+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],S=l*d-c*h,A=o*d-c*f,v=o*h-l*f,T=a*d-c*u,M=a*h-l*u,w=a*f-o*u;return e*(x*S-m*A+p*v)-n*(g*S-m*T+p*M)+s*(g*A-x*T+p*w)-r*(g*v-x*M+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=e*o-n*a,A=e*l-s*a,v=e*c-r*a,T=n*l-s*o,M=n*c-r*o,w=s*c-r*l,_=u*x-f*g,b=u*m-h*g,R=u*p-d*g,D=f*m-h*x,I=f*p-d*x,U=h*p-d*m,P=S*U-A*I+v*D+T*R-M*b+w*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return t[0]=(o*U-l*I+c*D)*O,t[1]=(s*I-n*U-r*D)*O,t[2]=(x*w-m*M+p*T)*O,t[3]=(h*M-f*w-d*T)*O,t[4]=(l*R-a*U-c*b)*O,t[5]=(e*U-s*R+r*b)*O,t[6]=(m*v-g*w-p*A)*O,t[7]=(u*w-h*v+d*A)*O,t[8]=(a*I-o*R+c*_)*O,t[9]=(n*R-e*I-r*_)*O,t[10]=(g*M-x*v+p*S)*O,t[11]=(f*v-u*M-d*S)*O,t[12]=(o*b-a*D-l*_)*O,t[13]=(e*D-n*b+s*_)*O,t[14]=(x*A-g*T-m*S)*O,t[15]=(u*T-f*A+h*S)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,x=a*u,m=a*f,p=o*f,S=l*c,A=l*u,v=l*f,T=n.x,M=n.y,w=n.z;return s[0]=(1-(x+p))*T,s[1]=(d+v)*T,s[2]=(g-A)*T,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(h+p))*M,s[6]=(m+S)*M,s[7]=0,s[8]=(g+A)*w,s[9]=(m-S)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),l=Ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let c=1/a,u=1/o,f=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,e.setFromRotationMatrix(Nn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=On,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Hs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===On)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Hs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wo.prototype.isMatrix4=!0;var Gt=wo,Ms=new L,Nn=new Gt,Cf=new L(0,0,0),If=new L(1,1,1),Ti=new L,ga=new L,mn=new L,qh=new Gt,Yh=new He,Ke=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pf=0,Zh=new L,Ss=new He,oi=new Gt,xa=new L,hr=new L,Lf=new L,Df=new He,Jh=new L(1,0,0),$h=new L(0,1,0),Kh=new L(0,0,1),jh={type:"added"},Uf={type:"removed"},bs={type:"childadded",child:null},$l={type:"childremoved",child:null},Ve=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Ke,n=new He,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ut}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(hr,xa,this.up):oi.lookAt(xa,hr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(oi),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),bs.child=t,this.dispatchEvent(bs),bs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new L(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Le=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nf={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Tf(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kl(a,r,t+1/3),this.g=Kl(a,r,t),this.b=Kl(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return qt.workingToColorSpace(Je.copy(this),t),Math.round(zt(Je.r*255,0,255))*65536+Math.round(zt(Je.g*255,0,255))*256+Math.round(zt(Je.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ce){qt.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(_a);let n=Xl(wi.h,_a.h,e),s=Xl(wi.s,_a.s,e),r=Xl(wi.l,_a.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new At;At.NAMES=Qu;var ns=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new L,li=new L,jl=new L,ci=new L,Es=new L,Ts=new L,Qh=new L,Ql=new L,tc=new L,ec=new L,nc=new Kt,ic=new Kt,sc=new Kt,di=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),li.subVectors(n,e),jl.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(li),l=Fn.dot(jl),c=li.dot(li),u=li.dot(jl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return nc.setScalar(0),ic.setScalar(0),sc.setScalar(0),nc.fromBufferAttribute(t,e),ic.fromBufferAttribute(t,n),sc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(nc,r.x),a.addScaledVector(ic,r.y),a.addScaledVector(sc,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),li.subVectors(t,e),Fn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Es.subVectors(s,n),Ts.subVectors(r,n),Ql.subVectors(t,n);let l=Es.dot(Ql),c=Ts.dot(Ql);if(l<=0&&c<=0)return e.copy(n);tc.subVectors(t,s);let u=Es.dot(tc),f=Ts.dot(tc);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Es,a);ec.subVectors(t,r);let d=Es.dot(ec),g=Ts.dot(ec);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ts,o);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Qh.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Qh,o);let p=1/(m+x+h);return a=x*p,o=h*p,e.copy(n).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},on=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),ya.subVectors(this.max,ur),ws.subVectors(t.a,ur),As.subVectors(t.b,ur),Rs.subVectors(t.c,ur),Ai.subVectors(As,ws),Ri.subVectors(Rs,As),$i.subVectors(ws,Rs);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-$i.z,$i.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,$i.z,0,-$i.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-$i.y,$i.x,0];return!rc(e,ws,As,Rs,ya)||(e=[1,0,0,0,1,0,0,0,1],!rc(e,ws,As,Rs,ya))?!1:(Ma.crossVectors(Ai,Ri),e=[Ma.x,Ma.y,Ma.z],rc(e,ws,As,Rs,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hi=[new L,new L,new L,new L,new L,new L,new L,new L],Bn=new L,va=new on,ws=new L,As=new L,Rs=new L,Ai=new L,Ri=new L,$i=new L,ur=new L,ya=new L,Ma=new L,Ki=new L;function rc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var fi=Ff();function Ff(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Bf(i){Math.abs(i)>65504&&Pt("DataUtils.toHalfFloat(): Value out of range."),i=zt(i,-65504,65504),fi.floatView[0]=i;let t=fi.uint32View[0],e=t>>23&511;return fi.baseTable[e]+((t&8388607)>>fi.shiftTable[e])}function Of(i){let t=i>>10;return fi.uint32View[0]=fi.mantissaTable[fi.offsetTable[t]+(i&1023)]+fi.exponentTable[t],fi.floatView[0]}var Rr=class{static toHalfFloat(t){return Bf(t)}static fromHalfFloat(t){return Of(t)}},Re=new L,Sa=new st,zf=0,Me=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var is=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Pi=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ct=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hf=new on,dr=new L,ac=new L,jn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(ac)),this.expandByPoint(dr.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vf=0,wn=new Gt,oc=new Ve,Cs=new L,gn=new on,fr=new on,Fe=new L,Zt=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bf(t)?Pi:is)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(gn.min,fr.min),gn.expandByPoint(Fe),Fe.addVectors(gn.max,fr.max),gn.expandByPoint(Fe)):(gn.expandByPoint(fr.min),gn.expandByPoint(fr.max))}gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Fe.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(t,c),Fe.add(Cs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;let c=new L,u=new L,f=new L,h=new st,d=new st,g=new st,x=new L,m=new L;function p(_,b,R){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[_].add(x),o[b].add(x),o[R].add(x),l[_].add(m),l[b].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,b=S.length;_<b;++_){let R=S[_],D=R.start,I=R.count;for(let U=D,P=D+I;U<P;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let A=new L,v=new L,T=new L,M=new L;function w(_){T.fromBufferAttribute(s,_),M.copy(T);let b=o[_];A.copy(b),A.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(M,b);let D=v.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,D)}for(let _=0,b=S.length;_<b;++_){let R=S[_],D=R.start,I=R.count;for(let U=D,P=D+I;U<P;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Me(h,u,f)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},to=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},nn=new L,Cr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lc=new L,kf=new L,Gf=new Ut,xn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=lc.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(lc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gf.getNormalMatrix(t),s=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wf=0,Qn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Zs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new xn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ws=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Is,pr=new L,Ps=new L,Ls=new L,Ds=new st,mr=new st,td=new Gt,ba=new L,gr=new L,Ea=new L,tu=new st,cc=new st,eu=new st,Ir=class extends Ve{constructor(t=new Ws){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new Zt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new to(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new Cr(n,3,0,!1)),Is.setAttribute("uv",new Cr(n,2,3,!1))}this.geometry=Is,this.material=t,this.center=new st(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ta(ba.set(-.5,-.5,0),Ls,a,Ps,s,r),Ta(gr.set(.5,-.5,0),Ls,a,Ps,s,r),Ta(Ea.set(.5,.5,0),Ls,a,Ps,s,r),tu.set(0,0),cc.set(1,0),eu.set(1,1);let o=t.ray.intersectTriangle(ba,gr,Ea,!1,pr);if(o===null&&(Ta(gr.set(-.5,.5,0),Ls,a,Ps,s,r),cc.set(0,1),o=t.ray.intersectTriangle(ba,Ea,gr,!1,pr),o===null))return;let l=t.ray.origin.distanceTo(pr);l<t.near||l>t.far||e.push({distance:l,point:pr.clone(),uv:di.getInterpolation(pr,ba,gr,Ea,tu,cc,eu,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ta(i,t,e,n,s,r){Ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*Ds.x-s*Ds.y,mr.y=s*Ds.x+r*Ds.y):mr.copy(Ds),i.copy(t),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(td)}var ui=new L,hc=new L,wa=new L,Aa=new L,eo=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hc.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Aa.copy(this.origin).sub(hc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(wa),o=Aa.dot(this.direction),l=-Aa.dot(wa),c=Aa.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(hc).addScaledVector(wa,h),d}intersectSphere(t,e){if(t.radius<0)return null;ui.subVectors(t.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,A=n.z-a.z,v=Math.abs(l),T=Math.abs(c),M=Math.abs(u),w,_,b,R,D,I,U,P,O,k,G,$;if(v>=T&&v>=M?(b=l,I=f,O=g,$=p,l>=0?(w=c,_=u,R=h,D=d,U=x,P=m,k=S,G=A):(w=u,_=c,R=d,D=h,U=m,P=x,k=A,G=S)):T>=M?(b=c,I=h,O=x,$=S,c>=0?(w=u,_=l,R=d,D=f,U=m,P=g,k=A,G=p):(w=l,_=u,R=f,D=d,U=g,P=m,k=p,G=A)):(b=u,I=d,O=m,$=A,u>=0?(w=l,_=c,R=f,D=h,U=g,P=x,k=p,G=S):(w=c,_=l,R=h,D=f,U=x,P=g,k=S,G=p)),b===0)return null;let X=w/b,K=_/b,tt=1/b,Mt=R-X*I,St=D-K*I,ue=U-X*O,Jt=P-K*O,te=k-X*$,Z=G-K*$,et=te*Jt-Z*ue,_t=Mt*Z-St*te,Nt=ue*St-Jt*Mt;if(s){if(et<0||_t<0||Nt<0)return null}else if((et<0||_t<0||Nt<0)&&(et>0||_t>0||Nt>0))return null;let gt=et+_t+Nt;if(gt===0)return null;let Ht=tt*(et*I+_t*O+Nt*$);return(gt>0?Ht<0:Ht>0)?null:this.at(Ht/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pr=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nu=new Gt,ji=new eo,Ra=new jn,iu=new L,Ca=new L,Ia=new L,Pa=new L,uc=new L,La=new L,su=new L,Da=new L,Lt=class extends Ve{constructor(t=new Zt,e=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){La.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(uc.fromBufferAttribute(f,t),a?La.addScaledVector(uc,u):La.addScaledVector(uc.sub(e),u))}e.add(La)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(Ra.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Ra,iu)===null||ji.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(r).invert(),ji.copy(t.ray).applyMatrix4(nu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=A;v<T;v+=3){let M=o.getX(v),w=o.getX(v+1),_=o.getX(v+2);s=Ua(this,p,t,n,c,u,f,M,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=o.getX(m),A=o.getX(m+1),v=o.getX(m+2);s=Ua(this,a,t,n,c,u,f,S,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=A;v<T;v+=3){let M=v,w=v+1,_=v+2;s=Ua(this,p,t,n,c,u,f,M,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=m,A=m+1,v=m+2;s=Ua(this,a,t,n,c,u,f,S,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Xf(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Bi,o),l===null)return null;Da.copy(o),Da.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Da);return c<e.near||c>e.far?null:{distance:c,point:Da.clone(),object:i}}function Ua(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ca),i.getVertexPosition(l,Ia),i.getVertexPosition(c,Pa);let u=Xf(i,t,e,n,Ca,Ia,Pa,su);if(u){let f=new L;di.getBarycoord(su,Ca,Ia,Pa,f),s&&(u.uv=di.getInterpolatedAttribute(s,o,l,c,f,new st)),r&&(u.uv1=di.getInterpolatedAttribute(r,o,l,c,f,new st)),a&&(u.normal=di.getInterpolatedAttribute(a,o,l,c,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};di.getNormal(Ca,Ia,Pa,h.normal),u.face=h,u.barycoord=f}return u}var ss=class extends sn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,u=Be,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Us=new Gt,ru=new Gt,Na=[],au=new on,qf=new Gt,xr=new Lt,_r=new jn,ln=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _n(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new on),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),au.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(au)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),_r.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),t.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),ru.multiplyMatrices(n,Us),xr.matrixWorld=ru,xr.raycast(t,Na);for(let a=0,o=Na.length;a<o;a++){let l=Na[a];l.instanceId=r,l.object=this,e.push(l)}Na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _n(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ss(new Float32Array(s*this.count),s,this.count,Ks,Cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qi=new jn,Yf=new st(.5,.5),Fa=new L,Xs=class{constructor(t=new xn,e=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],A=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,d-u,p-g,T-S).normalize(),s[1].setComponents(c+a,d+u,p+g,T+S).normalize(),s[2].setComponents(c+o,d+f,p+x,T+A).normalize(),s[3].setComponents(c-o,d-f,p-x,T-A).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,d-h,p-m,T-v).normalize();else if(s[4].setComponents(c-l,d-h,p-m,T-v).normalize(),e===On)s[5].setComponents(c+l,d+h,p+m,T+v).normalize();else if(e===Hs)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=Yf.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fa.x=s.normal.x>0?t.max.x:t.min.x,Fa.y=s.normal.y>0?t.max.y:t.min.y,Fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends sn{constructor(t=[],e=Oi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zn=class extends sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Li=class extends sn{constructor(t,e,n=kn,s,r,a,o=Be,l=Be,c,u=$n,f=1){if(u!==$n&&u!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},no=class extends Li{constructor(t,e=kn,n=Oi,s,r,a=Be,o=Be,l,c=$n){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Hn=class i extends Zt{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function g(x,m,p,S,A,v,T,M,w,_,b){let R=v/w,D=T/_,I=v/2,U=T/2,P=M/2,O=w+1,k=_+1,G=0,$=0,X=new L;for(let K=0;K<k;K++){let tt=K*D-U;for(let Mt=0;Mt<O;Mt++){let St=Mt*R-I;X[x]=St*S,X[m]=tt*A,X[p]=P,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=M>0?1:-1,u.push(X.x,X.y,X.z),f.push(Mt/w),f.push(1-K/_),G+=1}}for(let K=0;K<_;K++)for(let tt=0;tt<w;tt++){let Mt=h+tt+O*K,St=h+tt+O*(K+1),ue=h+(tt+1)+O*(K+1),Jt=h+(tt+1)+O*K;l.push(Mt,St,Jt),l.push(St,ue,Jt),$+=6}o.addGroup(d,$,b),d+=$,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var rs=class i extends Zt{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],m=n/2,p=0;S(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Ct(f,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(d,2));function S(){let v=new L,T=new L,M=0,w=(e-t)/n;for(let _=0;_<=r;_++){let b=[],R=_/r,D=R*(e-t)+t;for(let I=0;I<=s;I++){let U=I/s,P=U*l+o,O=Math.sin(P),k=Math.cos(P);T.x=D*O,T.y=-R*n+m,T.z=D*k,f.push(T.x,T.y,T.z),v.set(O,w,k).normalize(),h.push(v.x,v.y,v.z),d.push(U,1-R),b.push(g++)}x.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){let R=x[b][_],D=x[b+1][_],I=x[b+1][_+1],U=x[b][_+1];(t>0||b!==0)&&(u.push(R,D,U),M+=3),(e>0||b!==r-1)&&(u.push(D,I,U),M+=3)}c.addGroup(p,M,0),p+=M}function A(v){let T=g,M=new st,w=new L,_=0,b=v===!0?t:e,R=v===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),g++;let D=g;for(let I=0;I<=s;I++){let P=I/s*l+o,O=Math.cos(P),k=Math.sin(P);w.x=b*k,w.y=m*R,w.z=b*O,f.push(w.x,w.y,w.z),h.push(0,R,0),M.x=O*.5+.5,M.y=k*.5*R+.5,d.push(M.x,M.y),g++}for(let I=0;I<s;I++){let U=T+I,P=D+I;v===!0?u.push(P,P+1,U):u.push(P+1,P,U),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ur=class i extends rs{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new Gt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(zt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},io=class extends Nr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function qc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ou=new L,lu=new L,dc=new qc,fc=new qc,pc=new qc,mi=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(lu.subVectors(s[0],s[1]).add(s[0]),c=lu);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ou.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ou),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),dc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,x,m),fc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,x,m),pc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),fc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),pc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(dc.calc(l),fc.calc(l),pc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Zf(i,t){let e=1-i;return e*e*t}function Jf(i,t){return 2*(1-i)*i*t}function $f(i,t){return i*i*t}function vr(i,t,e,n){return Zf(i,t)+Jf(i,e)+$f(i,n)}function Kf(i,t){let e=1-i;return e*e*e*t}function jf(i,t){let e=1-i;return 3*e*e*i*t}function Qf(i,t){return 3*(1-i)*i*i*t}function tp(i,t){return i*i*i*t}function yr(i,t,e,n,s){return Kf(i,t)+jf(i,e)+Qf(i,n)+tp(i,s)}var so=class extends An{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(t,s.x,r.x,a.x,o.x),yr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends An{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(t,s.x,r.x,a.x,o.x),yr(t,s.y,r.y,a.y,o.y),yr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ao=class extends An{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends An{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends An{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(t,s.x,r.x,a.x),vr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends An{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(t,s.x,r.x,a.x),vr(t,s.y,r.y,a.y),vr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(cu(o,l.x,c.x,u.x,f.x),cu(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},ep=Object.freeze({__proto__:null,ArcCurve:io,CatmullRomCurve3:mi,CubicBezierCurve:so,CubicBezierCurve3:ro,EllipseCurve:Nr,LineCurve:ao,LineCurve3:oo,QuadraticBezierCurve:lo,QuadraticBezierCurve3:Fr,SplineCurve:co});var Br=class i extends Zt{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=zt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,f=new L,h=new st,d=new L,g=new L,x=new L,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let S=0;S<=e;S++){let A=n+S*u*s,v=Math.sin(A),T=Math.cos(A);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*v,f.y=t[M].y,f.z=t[M].x*T,a.push(f.x,f.y,f.z),h.x=S/e,h.y=M/(t.length-1),o.push(h.x,h.y);let w=l[3*M+0]*v,_=l[3*M+1],b=l[3*M+0]*T;c.push(w,_,b)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){let v=A+S*t.length,T=v,M=v+t.length,w=v+t.length+1,_=v+1;r.push(T,M,_),r.push(w,_,M)}this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("uv",new Ct(o,2)),this.setAttribute("normal",new Ct(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var rn=class i extends Zt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let S=p*h-a;for(let A=0;A<c;A++){let v=A*f-r;g.push(v,-S,0),x.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let A=S+c*p,v=S+c*(p+1),T=S+1+c*(p+1),M=S+1+c*p;d.push(A,v,M),d.push(v,T,M)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var gi=class i extends Zt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new L,h=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let S=[],A=p/n,v=a+A*o,T=t*Math.cos(v),M=Math.sqrt(t*t-T*T),w=0;p===0&&a===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let _=0;_<=e;_++){let b=_/e,R=s+b*r;f.x=-M*Math.cos(R),f.y=T,f.z=M*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(b+w,1-A),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let A=u[p][S+1],v=u[p][S],T=u[p+1][S],M=u[p+1][S+1];(p!==0||a>0)&&d.push(A,v,M),(p!==n-1||l<Math.PI)&&d.push(v,T,M)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Or=class i extends Zt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new L,d=new L,g=new L;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let p=0;p<=s;p++){let S=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(S),d.y=(t+e*Math.cos(m))*Math.sin(S),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,S=(s+1)*(x-1)+m-1,A=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(p,S,v),l.push(S,A,v)}this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var qs=class i extends Zt{constructor(t=new Fr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new st,u=new L,f=[],h=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ct(f,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(d,2));function x(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),S(),p()}function m(A){u=t.getPointAt(A/e,u);let v=a.normals[A],T=a.binormals[A];for(let M=0;M<=s;M++){let w=M/s*Math.PI*2,_=Math.sin(w),b=-Math.cos(w);l.x=b*v.x+_*T.x,l.y=b*v.y+_*T.y,l.z=b*v.z+_*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=e;A++)for(let v=1;v<=s;v++){let T=(s+1)*(A-1)+(v-1),M=(s+1)*A+(v-1),w=(s+1)*A+v,_=(s+1)*(A-1)+v;g.push(T,M,_),g.push(M,w,_)}}function S(){for(let A=0;A<=e;A++)for(let v=0;v<=s;v++)c.x=A/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ep[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hu(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function np(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var xl={clone:us,merge:Qe},ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(s.value);break;case"v2":this.uniforms[n].value=new st().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ho=class extends ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},je=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Rn=class extends Qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=Ro,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},as=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uo=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function mc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fo=class extends Di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_c,endingEnd:_c}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vc:r=t,o=2*e-n;break;case yc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:a=t,l=2*n-e;break;case yc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,S=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,A=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+S*a[c+T]+A*a[l+T]+v*a[f+T];return r}},po=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},mo=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},go=class extends Di{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let h=o*2,d=t-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=d*h+g*2,S=f[p],A=f[p+1],v=t*h+g*2,T=u[v],M=u[v+1],w=ap(n,e,S,T,s);r[g]=ed(w,x,A,M,m)}return r}};function ed(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function rp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ap(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ed(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=rp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),mc(t.settings)&&(n.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new go(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break;case xc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;mc(this.settings)&&(uu(this.settings.inTangents,t),uu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Dt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ef(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,mc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ja;var Ui=class extends vn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Mr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="color";var _o=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};_o.prototype.ValueTypeName="number";var vo=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)He.slerpFlat(r,0,a,c-o,a,c,l);return r}},zr=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends vn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Mr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="vector";var Mo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nd=new Mo,So=class{constructor(t){this.manager=t!==void 0?t:nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};So.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vr=class extends Hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},gc=new Gt,du=new L,fu=new L,bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(gc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ba=new L,Oa=new He,Yn=new L,kr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ba,Oa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Oa,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ba,Oa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Oa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new L,pu=new st,mu=new st,$e=class extends kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fi=class extends kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mc=class extends bo{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Mc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var os=class extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fs=-90,Bs=1,Eo=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Fs,Bs,t,e);s.layers=this.layers,this.add(s);let r=new $e(Fs,Bs,t,e);r.layers=this.layers,this.add(r);let a=new $e(Fs,Bs,t,e);a.layers=this.layers,this.add(a);let o=new $e(Fs,Bs,t,e);o.layers=this.layers,this.add(o);let l=new $e(Fs,Bs,t,e);l.layers=this.layers,this.add(l);let c=new $e(Fs,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},To=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zc="\\[\\]\\.:\\/",op=new RegExp("["+Zc+"]","g"),Jc="[^"+Zc+"]",lp="[^"+Zc.replace("\\.","")+"]",cp=/((?:WC+[\/:])*)/.source.replace("WC",Jc),hp=/(WCOD+)?/.source.replace("WCOD",lp),up=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),fp=new RegExp("^"+cp+hp+up+dp+"$"),pp=["material","materials","bones","map"],Sc=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(op,"")}static parseTrackName(t){let e=fp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Sc;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B_=new Float32Array(1);var eh=class eh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};eh.prototype.isMatrix2=!0;var bc=eh;function $c(i,t,e,n){let s=mp(n);switch(e){case kc:return i*t;case Ks:return i*t/s.components*s.byteLength;case No:return i*t/s.components*s.byteLength;case Hi:return i*t*2/s.components*s.byteLength;case Fo:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Bo:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:case Vo:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case Ho:return Math.max(i,8)*Math.max(t,8)/2;case ko:case Go:case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:case $r:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ll:case cl:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kr:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mp(i){switch(i){case cn:case Oc:return{byteLength:1,components:1};case Js:case zc:case Ge:return{byteLength:2,components:1};case Do:case Uo:return{byteLength:2,components:4};case kn:case Lo:case Cn:return{byteLength:4,components:1};case Hc:case Vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);function Ed(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gp(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
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
#endif`,mm=`uniform sampler2D dfgLUT;
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
}`,gm=`
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,V0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:xp,alphahash_pars_fragment:_p,alphamap_fragment:vp,alphamap_pars_fragment:yp,alphatest_fragment:Mp,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:Ep,batching_pars_vertex:Tp,batching_vertex:wp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Ip,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Dp,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Np,color_fragment:Fp,color_pars_fragment:Bp,color_pars_vertex:Op,color_vertex:zp,common:Hp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:$p,envmap_pars_fragment:Kp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:cm,envmap_vertex:Qp,fog_vertex:tm,fog_pars_vertex:em,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:om,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:xm,lights_fragment_end:_m,lightprobes_pars_fragment:vm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:bm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:wm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Im,morphcolor_vertex:Pm,morphnormal_vertex:Lm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Fm,normal_pars_fragment:Bm,normal_pars_vertex:Om,normal_vertex:zm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:Jm,dithering_pars_fragment:$m,roughnessmap_fragment:Km,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:a0,specularmap_fragment:o0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:x0,background_frag:_0,backgroundCube_vert:v0,backgroundCube_frag:y0,cube_vert:M0,cube_frag:S0,depth_vert:b0,depth_frag:E0,distance_vert:T0,distance_frag:w0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:I0,meshbasic_vert:P0,meshbasic_frag:L0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:F0,meshnormal_vert:B0,meshnormal_frag:O0,meshphong_vert:z0,meshphong_frag:H0,meshphysical_vert:V0,meshphysical_frag:k0,meshtoon_vert:G0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:$0},ut={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},ii={basic:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Qe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Qe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new At(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Qe([ut.points,ut.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Qe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Qe([ut.common,ut.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Qe([ut.sprite,ut.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:Qe([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:Qe([ut.lights,ut.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ii.physical={uniforms:Qe([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var _l={r:0,b:0,g:0},K0=new Gt,Td=new Ut;Td.set(-1,0,0,0,1,0,0,0,1);function j0(i,t,e,n,s,r){let a=new At(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let v=S.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(S){let A=!1,v=d(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,A){let v=d(A);v&&(v.isCubeTexture||v.mapping===Wr)?(c===void 0&&(c=new Lt(new Hn(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:us(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Td),c.material.toneMapped=qt.getTransfer(v.colorSpace)!==ie,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Lt(new rn(2,2),new ve({name:"BackgroundMaterial",uniforms:us(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(_l,Yc(i)),e.buffers.color.setClear(_l.r,_l.g,_l.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Q0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(D,I,U,P,O){let k=!1,G=f(D,P,U,I);r!==G&&(r=G,c(r.object)),k=d(D,P,U,O),k&&g(D,P,U,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(D,I,U,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,I,U,P){let O=P.wireframe===!0,k=n[I.id];k===void 0&&(k={},n[I.id]=k);let G=D.isInstancedMesh===!0?D.id:0,$=k[G];$===void 0&&($={},k[G]=$);let X=$[U.id];X===void 0&&(X={},$[U.id]=X);let K=X[O];return K===void 0&&(K=h(l()),X[O]=K),K}function h(D){let I=[],U=[],P=[];for(let O=0;O<e;O++)I[O]=0,U[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,I,U,P){let O=r.attributes,k=I.attributes,G=0,$=U.getAttributes();for(let X in $)if($[X].location>=0){let tt=O[X],Mt=k[X];if(Mt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),tt===void 0||tt.attribute!==Mt||Mt&&tt.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function g(D,I,U,P){let O={},k=I.attributes,G=0,$=U.getAttributes();for(let X in $)if($[X].location>=0){let tt=k[X];tt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let Mt={};Mt.attribute=tt,tt&&tt.data&&(Mt.data=tt.data),O[X]=Mt,G++}r.attributes=O,r.attributesNum=G,r.index=P}function x(){let D=r.newAttributes;for(let I=0,U=D.length;I<U;I++)D[I]=0}function m(D){p(D,0)}function p(D,I){let U=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;U[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),O[D]!==I&&(i.vertexAttribDivisor(D,I),O[D]=I)}function S(){let D=r.newAttributes,I=r.enabledAttributes;for(let U=0,P=I.length;U<P;U++)I[U]!==D[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function A(D,I,U,P,O,k,G){G===!0?i.vertexAttribIPointer(D,I,U,O,k):i.vertexAttribPointer(D,I,U,P,O,k)}function v(D,I,U,P){x();let O=P.attributes,k=U.getAttributes(),G=I.defaultAttributeValues;for(let $ in k){let X=k[$];if(X.location>=0){let K=O[$];if(K===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){let tt=K.normalized,Mt=K.itemSize,St=t.get(K);if(St===void 0)continue;let ue=St.buffer,Jt=St.type,te=St.bytesPerElement,Z=Jt===i.INT||Jt===i.UNSIGNED_INT||K.gpuType===Lo;if(K.isInterleavedBufferAttribute){let et=K.data,_t=et.stride,Nt=K.offset;if(et.isInstancedInterleavedBuffer){for(let gt=0;gt<X.locationSize;gt++)p(X.location+gt,et.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<X.locationSize;gt++)m(X.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let gt=0;gt<X.locationSize;gt++)A(X.location+gt,Mt/X.locationSize,Jt,tt,_t*te,(Nt+Mt/X.locationSize*gt)*te,Z)}else{if(K.isInstancedBufferAttribute){for(let et=0;et<X.locationSize;et++)p(X.location+et,K.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let et=0;et<X.locationSize;et++)m(X.location+et);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let et=0;et<X.locationSize;et++)A(X.location+et,Mt/X.locationSize,Jt,tt,Mt*te,Mt/X.locationSize*et*te,Z)}}else if(G!==void 0){let tt=G[$];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(X.location,tt);break;case 3:i.vertexAttrib3fv(X.location,tt);break;case 4:i.vertexAttrib4fv(X.location,tt);break;default:i.vertexAttrib1fv(X.location,tt)}}}}S()}function T(){b();for(let D in n){let I=n[D];for(let U in I){let P=I[U];for(let O in P){let k=P[O];for(let G in k)u(k[G].object),delete k[G];delete P[O]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let U in I){let P=I[U];for(let O in P){let k=P[O];for(let G in k)u(k[G].object),delete k[G];delete P[O]}}delete n[D.id]}function w(D){for(let I in n){let U=n[I];for(let P in U){let O=U[P];if(O[D.id]===void 0)continue;let k=O[D.id];for(let G in k)u(k[G].object),delete k[G];delete O[D.id]}}}function _(D){for(let I in n){let U=n[I],P=D.isInstancedMesh===!0?D.id:0,O=U[P];if(O!==void 0){for(let k in O){let G=O[k];for(let $ in G)u(G[$].object),delete G[$];delete O[k]}delete U[P],Object.keys(U).length===0&&delete n[I]}}}function b(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function tg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==In&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let _=w===Ge&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==cn&&w!==Cn&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Pt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:v,maxSamples:T,samples:M}}function ng(i){let t=this,e=null,n=0,s=!1,r=!1,a=new xn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,A=S*4,v=p.clippingState||null;l.value=v,v=u(g,h,A,d);for(let T=0;T!==A;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=d;A!==x;++A,v+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Qs=4,ig=6,sg=20,rg=256,Qr=new Fi,id=new At,nh=null,ih=0,sh=0,rh=!1,ag=new L,ds=new L,yl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ag}=r;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=rh,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Ge,format:In,colorSpace:Sr,depthBuffer:!1},s=sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=og(r)),this._blurMaterial=cg(r,t,e),this._ggxMaterial=lg(r,t,e)}return s}_compileMaterial(t){let e=new Lt(new Zt,t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(id),f.toneMapping=Vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new Hn,new Pr({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(id),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let T=this._cubeSize;js(s,v*T,A>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Oi||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Qs?n-g+Qs:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,js(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Qr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,js(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(o,Qr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Qs?s-this._lodMax+Qs:0),h=4*(this._cubeSize-u);js(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Qr)}};function og(i){let t=[],e=[],n=i,s=i-Qs+1+ig;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let S=p%3*2/3-1,A=p>2?0:-1,v=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(v,d*h*p);for(let T=0;T<h;T++){let M=u[T*2]*2-1,w=u[T*2+1]*2-1;p===0?ds.set(1,w,M):p===1?ds.set(-M,1,-w):p===2?ds.set(-M,w,1):p===3?ds.set(-1,w,-M):p===4?ds.set(-M,-1,w):ds.set(M,w,-1),ds.toArray(x,(p*h+T)*d)}}let m=new Zt;m.setAttribute("position",new Me(g,d)),m.setAttribute("outputDirection",new Me(x,d)),e.push(new Lt(m,null)),n>Qs&&n--}return{lodMeshes:e,sizeLods:t}}function sd(i,t,e){let n=new Oe(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lg(i,t,e){return new ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function cg(i,t,e){return new ve({name:"SphericalGaussianBlur",defines:{SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function rd(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ad(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ml=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hn(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:ti});r.uniforms.tEquirect.value=e;let a=new Lt(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=Se),new Eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function hg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Co||d===Io)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Ml(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===Co||d===Io,x=d===Oi||d===hs;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new yl(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new yl(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Co?h.mapping=Oi:d===Io&&(h.mapping=hs),h}function l(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function ug(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ts("WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let S=d.array;x=d.version;for(let A=0,v=S.length;A<v;A+=3){let T=S[A+0],M=S[A+1],w=S[A+2];h.push(T,M,M,w,w,T)}}else{let S=g.array;x=g.version;for(let A=0,v=S.length/3-1;A<v;A+=3){let T=A+0,M=A+1,w=A+2;h.push(T,M,M,w,w,T)}}let m=new(g.count>=65535?Pi:is)(h,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function fg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function pg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mg(i,t,e){let n=new WeakMap,s=new Kt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let v=o.attributes.position.count*A,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*T*4*f),w=new wr(M,v,T,f);w.type=Cn,w.needsUpdate=!0;let _=A*4;for(let R=0;R<f;R++){let D=m[R],I=p[R],U=S[R],P=v*T*4*R;for(let O=0;O<D.count;O++){let k=O*_;d===!0&&(s.fromBufferAttribute(D,O),M[P+k+0]=s.x,M[P+k+1]=s.y,M[P+k+2]=s.z,M[P+k+3]=0),g===!0&&(s.fromBufferAttribute(I,O),M[P+k+4]=s.x,M[P+k+5]=s.y,M[P+k+6]=s.z,M[P+k+7]=0),x===!0&&(s.fromBufferAttribute(U,O),M[P+k+8]=s.x,M[P+k+9]=s.y,M[P+k+10]=s.z,M[P+k+11]=U.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new st(v,T)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function gg(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var xg={[Ic]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Lc]:"CINEON_TONE_MAPPING",[Dc]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function _g(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Zt;c.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let u=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Lt(c,u),h=new Fi(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,S=[],A=!1;this.setSize=function(v,T){a.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let M=0;M<S.length;M++){let w=S[M];w.setSize&&w.setSize(v,T)}},this.setEffects=function(v){S=v,A=S.length>0&&S[0].isRenderPass===!0;let T=a.width,M=a.height;S.length>0&&o===null&&(o=new Oe(T,M,{type:Ge,depthBuffer:!1,stencilBuffer:!1}),l=new Oe(T,M,{type:Ge,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let _=S[w];_.setSize&&_.setSize(T,M)}},this.begin=function(v,T){if(x||v.toneMapping===Vn&&S.length===0)return!1;if(p=T,T!==null){let M=T.width,w=T.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return A===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Vn,!0},this.hasRenderPass=function(){return A},this.end=function(v,T){v.toneMapping=m,x=!0;let M=a,w=o;for(let _=0;_<S.length;_++){let b=S[_];b.enabled!==!1&&(b.render(v,w,M,T),b.needsSwap!==!1&&(M=w,w=w===o?l:o))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,u.defines={},qt.getTransfer(d)===ie&&(u.defines.SRGB_TRANSFER="");let _=xg[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var wd=new sn,lh=new Li(1,1),Ad=new wr,Rd=new Qa,Cd=new Lr,od=[],ld=[],cd=new Float32Array(16),hd=new Float32Array(9),ud=new Float32Array(4);function er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=od[s];if(r===void 0&&(r=new Float32Array(s),od[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function El(i,t){let e=ld[t];e===void 0&&(e=new Int32Array(t),ld[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;ud.set(n),i.uniformMatrix2fv(this.addr,!1,ud),Ue(e,n)}}function Eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),Ue(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;cd.set(n),i.uniformMatrix4fv(this.addr,!1,cd),Ue(e,n)}}function wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=e.isReversedDepthBuffer()?gl:ml,r=lh):r=wd,e.setTexture2D(t||r,s)}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rd,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cd,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ad,s)}function Og(i){switch(i){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Bg}}function zg(i,t){i.uniform1fv(this.addr,t)}function Hg(i,t){let e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function Vg(i,t){let e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function kg(i,t){let e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function Gg(i,t){let e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wg(i,t){let e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xg(i,t){let e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qg(i,t){i.uniform1iv(this.addr,t)}function Yg(i,t){i.uniform2iv(this.addr,t)}function Zg(i,t){i.uniform3iv(this.addr,t)}function Jg(i,t){i.uniform4iv(this.addr,t)}function $g(i,t){i.uniform1uiv(this.addr,t)}function Kg(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function Qg(i,t){i.uniform4uiv(this.addr,t)}function tx(i,t,e){let n=this.cache,s=t.length,r=El(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=lh:a=wd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ex(i,t,e){let n=this.cache,s=t.length,r=El(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rd,r[a])}function nx(i,t,e){let n=this.cache,s=t.length,r=El(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cd,r[a])}function ix(i,t,e){let n=this.cache,s=t.length,r=El(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ad,r[a])}function sx(i){switch(i){case 5126:return zg;case 35664:return Hg;case 35665:return Vg;case 35666:return kg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return $g;case 36294:return Kg;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}var ch=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Og(e.type)}},hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sx(e.type)}},uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;function dd(i,t){i.seq.push(t),i.map[t.id]=t}function rx(i,t,e){let n=i.name,s=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),a=ah.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dd(e,c===void 0?new ch(o,i,t):new hh(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new uh(o),dd(e,f)),e=f}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);rx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function fd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ax=37297,ox=0;function lx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var pd=new Ut;function cx(i){qt._getMatrix(pd,qt.workingColorSpace,i);let t=`mat3( ${pd.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function md(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+lx(i.getShaderSource(t),o)}else return r}function hx(i,t){let e=cx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ux={[Ic]:"Linear",[Pc]:"Reinhard",[Lc]:"Cineon",[Dc]:"ACESFilmic",[Nc]:"AgX",[Fc]:"Neutral",[Uc]:"Custom"};function dx(i,t){let e=ux[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vl=new L;function fx(){qt.getLuminanceCoefficients(vl);let i=vl.x.toFixed(4),t=vl.y.toFixed(4),e=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function mx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ea(i){return i!==""}function gd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(xx,vx)}var _x=new Map;function vx(i,t){let e=Ot[t];if(e===void 0){let n=_x.get(t);if(n!==void 0)e=Ot[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dh(e)}var yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(i){return i.replace(yx,Mx)}function Mx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Sx={[ls]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function bx(i){return Sx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ex={[Oi]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function Tx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ex[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wx={[hs]:"ENVMAP_MODE_REFRACTION"};function Ax(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rx={[Ro]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function Cx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Rx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ix(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Px(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=bx(e),c=Tx(e),u=Ax(e),f=Cx(e),h=Ix(e),d=px(e),g=mx(r),x=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Vn?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,hx("linearToOutputTexel",e.outputColorSpace),fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ea).join(`
`)),a=dh(a),a=gd(a,e),a=xd(a,e),o=dh(o),o=gd(o,e),o=xd(o,e),a=_d(a),o=_d(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=S+m+a,v=S+p+o,T=fd(s,s.VERTEX_SHADER,A),M=fd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(D){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(T)||"",P=s.getShaderInfoLog(M)||"",O=I.trim(),k=U.trim(),G=P.trim(),$=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,M);else{let K=md(s,T,"vertex"),tt=md(s,M,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+K+`
`+tt)}else O!==""?Pt("WebGLProgram: Program Info Log:",O):(k===""||G==="")&&(X=!1);X&&(D.diagnostics={runnable:$,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(T),s.deleteShader(M),_=new tr(s,x),b=gx(s,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,ax)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ox++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=M,this}var Lx=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ph(t),e.set(t,n)),n}},ph=class{constructor(t){this.id=Lx++,this.code=t,this.usedTimes=0}};function Dx(i){return i===Hi||i===$r||i===Kr}function Ux(i,t,e,n,s,r){let a=new Ar,o=new fh,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,b,R,D,I,U){let P=D.fog,O=I.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=t.get(_.envMap||k,G),X=$&&$.mapping===Wr?$.image.height:null,K=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Pt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Mt=tt!==void 0?tt.length:0,St=0;O.morphAttributes.position!==void 0&&(St=1),O.morphAttributes.normal!==void 0&&(St=2),O.morphAttributes.color!==void 0&&(St=3);let ue,Jt,te,Z;if(K){let fe=ii[K];ue=fe.vertexShader,Jt=fe.fragmentShader}else{ue=_.vertexShader,Jt=_.fragmentShader;let fe=o.getVertexShaderStage(_),ee=o.getFragmentShaderStage(_);o.update(_,fe,ee),te=fe.id,Z=ee.id}let et=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Nt=I.isInstancedMesh===!0,gt=I.isBatchedMesh===!0,Ht=!!_.map,Pe=!!_.matcap,Vt=!!$,Qt=!!_.aoMap,de=!!_.lightMap,Xt=!!_.bumpMap&&_.wireframe===!1,_e=!!_.normalMap,Ne=!!_.displacementMap,an=!!_.emissiveMap,ye=!!_.metalnessMap,we=!!_.roughnessMap,B=_.anisotropy>0,qe=_.clearcoat>0,se=_.dispersion>0,C=_.retroreflectivity>0,y=_.iridescence>0,z=_.sheen>0,W=_.transmission>0,Y=B&&!!_.anisotropyMap,it=qe&&!!_.clearcoatMap,rt=qe&&!!_.clearcoatNormalMap,J=qe&&!!_.clearcoatRoughnessMap,Q=y&&!!_.iridescenceMap,at=y&&!!_.iridescenceThicknessMap,Tt=z&&!!_.sheenColorMap,ht=z&&!!_.sheenRoughnessMap,ot=!!_.specularMap,wt=!!_.specularColorMap,It=!!_.specularIntensityMap,Ft=W&&!!_.transmissionMap,F=W&&!!_.thicknessMap,lt=!!_.gradientMap,j=!!_.alphaMap,ct=_.alphaTest>0,pt=!!_.alphaHash,nt=!!_.extensions,Rt=Vn;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Rt=i.toneMapping);let bt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:ue,fragmentShader:Jt,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:gt,batchingColor:gt&&I._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&I.instanceColor!==null,instancingMorph:Nt&&I.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ht,matcap:Pe,envMap:Vt,envMapMode:Vt&&$.mapping,envMapCubeUVHeight:X,aoMap:Qt,lightMap:de,bumpMap:Xt,normalMap:_e,displacementMap:Ne,emissiveMap:an,normalMapObjectSpace:_e&&_.normalMapType===Vu,normalMapTangentSpace:_e&&_.normalMapType===jr,packedNormalMap:_e&&_.normalMapType===jr&&Dx(_.normalMap.format),metalnessMap:ye,roughnessMap:we,anisotropy:B,anisotropyMap:Y,clearcoat:qe,clearcoatMap:it,clearcoatNormalMap:rt,clearcoatRoughnessMap:J,dispersion:se,retroreflection:C,iridescence:y,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:z,sheenColorMap:Tt,sheenRoughnessMap:ht,specularMap:ot,specularColorMap:wt,specularIntensityMap:It,transmission:W,transmissionMap:Ft,thicknessMap:F,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Zs&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:pt,combine:_.combine,mapUv:Ht&&g(_.map.channel),aoMapUv:Qt&&g(_.aoMap.channel),lightMapUv:de&&g(_.lightMap.channel),bumpMapUv:Xt&&g(_.bumpMap.channel),normalMapUv:_e&&g(_.normalMap.channel),displacementMapUv:Ne&&g(_.displacementMap.channel),emissiveMapUv:an&&g(_.emissiveMap.channel),metalnessMapUv:ye&&g(_.metalnessMap.channel),roughnessMapUv:we&&g(_.roughnessMap.channel),anisotropyMapUv:Y&&g(_.anisotropyMap.channel),clearcoatMapUv:it&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ht&&g(_.sheenRoughnessMap.channel),specularMapUv:ot&&g(_.specularMap.channel),specularColorMapUv:wt&&g(_.specularColorMap.channel),specularIntensityMapUv:It&&g(_.specularIntensityMap.channel),transmissionMapUv:Ft&&g(_.transmissionMap.channel),thicknessMapUv:F&&g(_.thicknessMap.channel),alphaMapUv:j&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_e||B),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Ht||j),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&_e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:St,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ht&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:an&&_.emissiveMap.isVideoTexture===!0&&qt.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===le,flipSided:_.side===ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:nt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&_.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)b.push(R),b.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(b,_),S(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let b=d[_.type],R;if(b){let D=ii[b];R=xl.clone(D.uniforms)}else R=_.uniforms;return R}function v(_,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new Px(i,b,_,s),c.push(R),u.set(b,R)),R}function T(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:w}}function Nx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Md(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,x,m,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function l(h,d,g,x,m,p,S){S.reversedDepth===!0&&(m=-m);let A=o(h,d,g,x,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(h,d,g,x,m,p){let S=o(h,d,g,x,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,d){e.length>1&&e.sort(h||Fx),n.length>1&&n.sort(d||yd),s.length>1&&s.sort(d||yd)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Bx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Md,i.set(n,[a])):s>=r.length?(a=new Md,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ox(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new At};break;case"SpotLight":e={position:new L,direction:new L,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hx=0;function Vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kx(i){let t=new Ox,e=zx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Gt,a=new Gt;function o(c){let u=0,f=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,A=0,v=0,T=0,M=0,w=0,_=0,b=0,R=0;c.sort(Vx);for(let I=0,U=c.length;I<U;I++){let P=c[I],O=P.color,k=P.intensity,G=P.distance,$=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hi?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*k,f+=O.g*k,h+=O.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);R++}else if(P.isSunLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,tt=e.get(P);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=$;let Mt=K.getViewportCount();for(let St=0;St<Mt;St++)n.sunShadowMatrix[x+St]=K.getMatrix(St),n.sunShadowCascade[x+St]=K._cascadeData[St];x+=Mt,g++}n.sun[d]=X,d++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,tt=e.get(P);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=X,m++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(k),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[S]=X;let K=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,K.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[S]=K.matrix,P.castShadow){let tt=e.get(P);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.spotShadow[S]=tt,n.spotShadowMap[S]=$,w++}S++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=X,A++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let K=P.shadow,tt=e.get(P);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=X,p++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[v]=X,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==M||D.numSpotShadows!==w||D.numSpotMaps!==_||D.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=M,D.numSpotShadows=w,D.numSpotMaps=_,D.numLightProbes=R,n.version=Hx++)}function l(c,u){let f=0,h=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let v=c[S];if(v.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(v.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Sd(i){let t=new kx(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Sd(i),t.set(s,[o])):r>=a.length?(o=new Sd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xx=`uniform sampler2D shadow_pass;
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
}`,qx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Yx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],bd=new Gt,ta=new L,oh=new L;function Zx(i,t,e){let n=new Xs,s=new st,r=new st,a=new Kt,o=new as,l=new uo,c={},u=e.maxTextureSize,f={[Bi]:ke,[ke]:Bi,[le]:le},h=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Wx,fragmentShader:Xx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ls;let p=this.type;this.render=function(M,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===_u&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ls);let b=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=p!==this.type;U&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=M.length;P<O;P++){let k=M[P],G=k.shadow;if(G===void 0){Pt("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let $=G.getFrameExtents();s.multiply($),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,G.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ys){if(k.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Oe(s.x,s.y,{format:Hi,type:Ge,minFilter:Se,magFilter:Se,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new Li(s.x,s.y,Cn),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=$n,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Be,G.map.depthTexture.magFilter=Be}else k.isPointLight?(G.map=new Ml(s.x),G.map.depthTexture=new no(s.x,kn)):(G.map=new Oe(s.x,s.y),G.map.depthTexture=new Li(s.x,s.y,kn)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=$n,this.type===ls?(G.map.depthTexture.compareFunction=X?gl:ml,G.map.depthTexture.minFilter=Se,G.map.depthTexture.magFilter=Se):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Be,G.map.depthTexture.magFilter=Be);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let K=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();k.isPointLight!==!0&&G.updateMatrices(k,_);for(let tt=0;tt<K;tt++){let Mt=G.getCamera(tt);if(k.isPointLight){let St=G.camera,ue=G.matrix,Jt=k.distance||St.far;Jt!==St.far&&(St.far=Jt,St.updateProjectionMatrix()),ta.setFromMatrixPosition(k.matrixWorld),St.position.copy(ta),oh.copy(St.position),oh.add(qx[tt]),St.up.copy(Yx[tt]),St.lookAt(oh),St.updateMatrixWorld(),ue.makeTranslation(-ta.x,-ta.y,-ta.z),bd.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),G._frustum.setFromProjectionMatrix(bd,St.coordinateSystem,St.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(G.map),i.clear());let St=G.getViewport(tt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),I.viewport(a)}n=G.getFrustum(tt),v(w,_,Mt,k,this.type)}G.isPointLightShadow!==!0&&this.type===Ys&&S(G,_),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,R,D)};function S(M,w){let _=t.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Oe(s.x,s.y,{format:Hi,type:Ge}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,_,h,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,_,d,x,null)}function A(M,w,_,b){let R=null,D=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)R=D;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=R.uuid,U=w.uuid,P=c[I];P===void 0&&(P={},c[I]=P);let O=P[U];O===void 0&&(O=R.clone(),P[U]=O,w.addEventListener("dispose",T)),R=O}if(R.visible=w.visible,R.wireframe=w.wireframe,b===Ys?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=_}return R}function v(M,w,_,b,R){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Ys)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let U=t.update(M),P=M.material;if(Array.isArray(P)){let O=U.groups;for(let k=0,G=O.length;k<G;k++){let $=O[k],X=P[$.materialIndex];if(X&&X.visible){let K=A(M,X,b,R);M.onBeforeShadow(i,M,w,_,U,K,$),i.renderBufferDirect(_,null,U,K,M,$),M.onAfterShadow(i,M,w,_,U,K,$)}}}else if(P.visible){let O=A(M,P,b,R);M.onBeforeShadow(i,M,w,_,U,O,null),i.renderBufferDirect(_,null,U,O,M,null),M.onAfterShadow(i,M,w,_,U,O,null)}}let I=M.children;for(let U=0,P=I.length;U<P;U++)v(I[U],w,_,b,R)}function T(M){M.target.removeEventListener("dispose",T);for(let _ in c){let b=c[_],R=M.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function Jx(i,t){function e(){let F=!1,lt=new Kt,j=null,ct=new Kt(0,0,0,0);return{setMask:function(pt){j!==pt&&!F&&(i.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){F=pt},setClear:function(pt,nt,Rt,bt,fe){fe===!0&&(pt*=bt,nt*=bt,Rt*=bt),lt.set(pt,nt,Rt,bt),ct.equals(lt)===!1&&(i.clearColor(pt,nt,Rt,bt),ct.copy(lt))},reset:function(){F=!1,j=null,ct.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,j=null,ct=null,pt=null;return{setReversed:function(nt){if(lt!==nt){let Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;let bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(nt){nt?et(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(nt){j!==nt&&!F&&(i.depthMask(nt),j=nt)},setFunc:function(nt){if(lt&&(nt=ju[nt]),ct!==nt){switch(nt){case Va:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=nt}},setLocked:function(nt){F=nt},setClear:function(nt){pt!==nt&&(pt=nt,lt&&(nt=1-nt),i.clearDepth(nt))},reset:function(){F=!1,j=null,ct=null,pt=null,lt=!1}}}function s(){let F=!1,lt=null,j=null,ct=null,pt=null,nt=null,Rt=null,bt=null,fe=null;return{setTest:function(ee){F||(ee?et(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ee){lt!==ee&&!F&&(i.stencilMask(ee),lt=ee)},setFunc:function(ee,Un,Xn){(j!==ee||ct!==Un||pt!==Xn)&&(i.stencilFunc(ee,Un,Xn),j=ee,ct=Un,pt=Xn)},setOp:function(ee,Un,Xn){(nt!==ee||Rt!==Un||bt!==Xn)&&(i.stencilOp(ee,Un,Xn),nt=ee,Rt=Un,bt=Xn)},setLocked:function(ee){F=ee},setClear:function(ee){fe!==ee&&(i.clearStencil(ee),fe=ee)},reset:function(){F=!1,lt=null,j=null,ct=null,pt=null,nt=null,Rt=null,bt=null,fe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,S=null,A=null,v=null,T=null,M=null,w=null,_=new At(0,0,0),b=0,R=!1,D=null,I=null,U=null,P=null,O=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=$>=2);let K=null,tt={},Mt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),ue=new Kt().fromArray(Mt),Jt=new Kt().fromArray(St);function te(F,lt,j,ct){let pt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(F,nt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<j;Rt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return nt}let Z={};Z[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(zs),Xt(!1),_e(Ec),et(i.CULL_FACE),Qt(ti);function et(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function _t(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Nt(F,lt){return h[F]!==lt?(i.bindFramebuffer(F,lt),h[F]=lt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(F,lt){let j=g,ct=!1;if(F){j=d.get(lt),j===void 0&&(j=[],d.set(lt,j));let pt=F.textures;if(j.length!==pt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Rt=pt.length;nt<Rt;nt++)j[nt]=i.COLOR_ATTACHMENT0+nt;j.length=pt.length,ct=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ct=!0);ct&&i.drawBuffers(j)}function Ht(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let Pe={[cs]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};Pe[Su]=i.MIN,Pe[bu]=i.MAX;let Vt={[Eu]:i.ZERO,[Tu]:i.ONE,[wu]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(F,lt,j,ct,pt,nt,Rt,bt,fe,ee){if(F===ti){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),F!==vu){if(F!==p||ee!==R){if((S!==cs||T!==cs)&&(i.blendEquation(i.FUNC_ADD),S=cs,T=cs),ee)switch(F){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Dt("WebGLState: Invalid blending: ",F);break}else switch(F){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wc:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",F);break}A=null,v=null,M=null,w=null,_.set(0,0,0),b=0,p=F,R=ee}return}pt=pt||lt,nt=nt||j,Rt=Rt||ct,(lt!==S||pt!==T)&&(i.blendEquationSeparate(Pe[lt],Pe[pt]),S=lt,T=pt),(j!==A||ct!==v||nt!==M||Rt!==w)&&(i.blendFuncSeparate(Vt[j],Vt[ct],Vt[nt],Vt[Rt]),A=j,v=ct,M=nt,w=Rt),(bt.equals(_)===!1||fe!==b)&&(i.blendColor(bt.r,bt.g,bt.b,fe),_.copy(bt),b=fe),p=F,R=!1}function de(F,lt){F.side===le?_t(i.CULL_FACE):et(i.CULL_FACE);let j=F.side===ke;lt&&(j=!j),Xt(j),F.blending===Zs&&F.transparent===!1?Qt(ti):Qt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ct=F.stencilWrite;o.setTest(ct),ct&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),an(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function _e(F){F!==gu?(et(i.CULL_FACE),F!==I&&(F===Ec?i.cullFace(i.BACK):F===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),I=F}function Ne(F){F!==U&&(G&&i.lineWidth(F),U=F)}function an(F,lt,j){F?(et(i.POLYGON_OFFSET_FILL),(P!==lt||O!==j)&&(P=lt,O=j,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,j))):_t(i.POLYGON_OFFSET_FILL)}function ye(F){F?et(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function we(F){F===void 0&&(F=i.TEXTURE0+k-1),K!==F&&(i.activeTexture(F),K=F)}function B(F,lt,j){j===void 0&&(K===null?j=i.TEXTURE0+k-1:j=K);let ct=tt[j];ct===void 0&&(ct={type:void 0,texture:void 0},tt[j]=ct),(ct.type!==F||ct.texture!==lt)&&(K!==j&&(i.activeTexture(j),K=j),i.bindTexture(F,lt||Z[F]),ct.type=F,ct.texture=lt)}function qe(){let F=tt[K];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(F){Dt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Dt("WebGLState:",F)}}function y(){try{i.texSubImage2D(...arguments)}catch(F){Dt("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){Dt("WebGLState:",F)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Dt("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Dt("WebGLState:",F)}}function it(){try{i.texStorage2D(...arguments)}catch(F){Dt("WebGLState:",F)}}function rt(){try{i.texStorage3D(...arguments)}catch(F){Dt("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){Dt("WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){Dt("WebGLState:",F)}}function at(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function Tt(F,lt){f[F]!==lt&&(i.pixelStorei(F,lt),f[F]=lt)}function ht(F){ue.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function ot(F){Jt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Jt.copy(F))}function wt(F,lt){let j=c.get(lt);j===void 0&&(j=new WeakMap,c.set(lt,j));let ct=j.get(F);ct===void 0&&(ct=i.getUniformBlockIndex(lt,F.name),j.set(F,ct))}function It(F,lt){let ct=c.get(lt).get(F);l.get(lt)!==ct&&(i.uniformBlockBinding(lt,ct,F.__bindingPointIndex),l.set(lt,ct))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,tt={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,S=null,A=null,v=null,T=null,M=null,w=null,_=new At(0,0,0),b=0,R=!1,D=null,I=null,U=null,P=null,O=null,ue.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:_t,bindFramebuffer:Nt,drawBuffers:gt,useProgram:Ht,setBlending:Qt,setMaterial:de,setFlipSided:Xt,setCullFace:_e,setLineWidth:Ne,setPolygonOffset:an,setScissorTest:ye,activeTexture:we,bindTexture:B,unbindTexture:qe,compressedTexImage2D:se,compressedTexImage3D:C,texImage2D:J,texImage3D:Q,pixelStorei:Tt,getParameter:at,updateUBOMapping:wt,uniformBlockBinding:It,texStorage2D:it,texStorage3D:rt,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:ht,viewport:ot,reset:Ft}}function $x(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return g?new OffscreenCanvas(C,y):Er("canvas")}function m(C,y,z){let W=1,Y=se(C);if((Y.width>z||Y.height>z)&&(W=z/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let it=Math.floor(W*Y.width),rt=Math.floor(W*Y.height);h===void 0&&(h=x(it,rt));let J=y?x(it,rt):h;return J.width=it,J.height=rt,J.getContext("2d").drawImage(C,0,0,it,rt),Pt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+it+"x"+rt+")."),J}else return"data"in C&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,y,z,W,Y,it=!1){if(C!==null){if(i[C]!==void 0)return i[C];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt;W&&(rt=t.get("EXT_texture_norm16"),rt||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&rt&&(J=rt.R16_EXT),z===i.SHORT&&rt&&(J=rt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),y===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&rt&&(J=rt.RG16_EXT),z===i.SHORT&&rt&&(J=rt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&rt&&(J=rt.RGB16_EXT),z===i.SHORT&&rt&&(J=rt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){let Q=it?br:qt.getTransfer(Y);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Q===ie?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&rt&&(J=rt.RGBA16_EXT),z===i.SHORT&&rt&&(J=rt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function T(C,y){let z;return C?y===null||y===kn||y===$s?z=i.DEPTH24_STENCIL8:y===Cn?z=i.DEPTH32F_STENCIL8:y===Js&&(z=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===kn||y===$s?z=i.DEPTH_COMPONENT24:y===Cn?z=i.DEPTH_COMPONENT32F:y===Js&&(z=i.DEPTH_COMPONENT16),z}function M(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==Se?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){let y=C.target;y.removeEventListener("dispose",w),b(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),D(y)}function b(C){let y=n.get(C);if(y.__webglInit===void 0)return;let z=C.source,W=d.get(z);if(W){let Y=W[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(W).length===0&&d.delete(z)}n.remove(C)}function R(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let z=C.source,W=d.get(z);delete W[y.__cacheKey],a.memory.textures--}function D(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let Y=0;Y<y.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)i.deleteFramebuffer(y.__webglFramebuffer[W]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=C.textures;for(let W=0,Y=z.length;W<Y;W++){let it=n.get(z[W]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(z[W])}n.remove(C)}let I=0;function U(){I=0}function P(){return I}function O(C){I=C}function k(){let C=I;return C>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function G(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function $(C,y){let z=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let W=C.image;if(W===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function X(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){_t(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function K(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){_t(z,C,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function tt(C,y){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Nt(z,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let Mt={[es]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},St={[Be]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Se]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},ue={[Gu]:i.NEVER,[Zu]:i.ALWAYS,[Wu]:i.LESS,[ml]:i.LEQUAL,[Xu]:i.EQUAL,[gl]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function Jt(C,y){if(y.type===Cn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Se||y.magFilter===Po||y.magFilter===Xr||y.magFilter===ei||y.minFilter===Se||y.minFilter===Po||y.minFilter===Xr||y.minFilter===ei)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Mt[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Mt[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Mt[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,St[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,St[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Be||y.minFilter!==Xr&&y.minFilter!==ei||y.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function te(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));let W=y.source,Y=d.get(W);Y===void 0&&(Y={},d.set(W,Y));let it=G(y);if(it!==C.__cacheKey){Y[it]===void 0&&(Y[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[it].usedTimes++;let rt=Y[C.__cacheKey];rt!==void 0&&(Y[C.__cacheKey].usedTimes--,rt.usedTimes===0&&R(y)),C.__cacheKey=it,C.__webglTexture=Y[it].texture}return z}function Z(C,y,z){return Math.floor(Math.floor(C/z)/y)}function et(C,y,z,W){let it=C.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{it.sort((Tt,ht)=>Tt.start-ht.start);let rt=0;for(let Tt=1;Tt<it.length;Tt++){let ht=it[rt],ot=it[Tt],wt=ht.start+ht.count,It=Z(ot.start,y.width,4),Ft=Z(ht.start,y.width,4);ot.start<=wt+1&&It===Ft&&Z(ot.start+ot.count-1,y.width,4)===It?ht.count=Math.max(ht.count,ot.start+ot.count-ht.start):(++rt,it[rt]=ot)}it.length=rt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Tt=0,ht=it.length;Tt<ht;Tt++){let ot=it[Tt],wt=Math.floor(ot.start/4),It=Math.ceil(ot.count/4),Ft=wt%y.width,F=Math.floor(wt/y.width),lt=It,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Ft,F,lt,j,z,W,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function _t(C,y,z){let W=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=i.TEXTURE_3D);let Y=te(C,y),it=y.source;e.bindTexture(W,C.__webglTexture,i.TEXTURE0+z);let rt=n.get(it);if(it.version!==rt.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let j=qt.getPrimaries(qt.workingColorSpace),ct=y.colorSpace===xi?null:qt.getPrimaries(y.colorSpace),pt=y.colorSpace===xi||j===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=m(y.image,!1,s.maxTextureSize);Q=qe(y,Q);let at=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type),ht=v(y.internalFormat,at,Tt,y.normalized,y.colorSpace,y.isVideoTexture);Jt(W,y);let ot,wt=y.mipmaps,It=y.isVideoTexture!==!0,Ft=rt.__version===void 0||Y===!0,F=it.dataReady,lt=M(y,Q);if(y.isDepthTexture)ht=T(y.format===zi,y.type),Ft&&(It?e.texStorage2D(i.TEXTURE_2D,1,ht,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ht,Q.width,Q.height,0,at,Tt,null));else if(y.isDataTexture)if(wt.length>0){It&&Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ht,wt[0].width,wt[0].height);for(let j=0,ct=wt.length;j<ct;j++)ot=wt[j],It?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,at,Tt,ot.data):e.texImage2D(i.TEXTURE_2D,j,ht,ot.width,ot.height,0,at,Tt,ot.data);y.generateMipmaps=!1}else It?(Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ht,Q.width,Q.height),F&&et(y,Q,at,Tt)):e.texImage2D(i.TEXTURE_2D,0,ht,Q.width,Q.height,0,at,Tt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){It&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ht,wt[0].width,wt[0].height,Q.depth);for(let j=0,ct=wt.length;j<ct;j++)if(ot=wt[j],y.format!==In)if(at!==null)if(It){if(F)if(y.layerUpdates.size>0){let pt=$c(ot.width,ot.height,y.format,y.type);for(let nt of y.layerUpdates){let Rt=ot.data.subarray(nt*pt/ot.data.BYTES_PER_ELEMENT,(nt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,nt,ot.width,ot.height,1,at,Rt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,Q.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ht,ot.width,ot.height,Q.depth,0,ot.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,Q.depth,at,Tt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,ht,ot.width,ot.height,Q.depth,0,at,Tt,ot.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{It&&Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ht,wt[0].width,wt[0].height);for(let j=0,ct=wt.length;j<ct;j++)ot=wt[j],y.format!==In?at!==null?It?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,j,ht,ot.width,ot.height,0,ot.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,at,Tt,ot.data):e.texImage2D(i.TEXTURE_2D,j,ht,ot.width,ot.height,0,at,Tt,ot.data)}else if(y.isDataArrayTexture)if(It){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ht,Q.width,Q.height,Q.depth),F)if(y.layerUpdates.size>0){let j=$c(Q.width,Q.height,y.format,y.type);for(let ct of y.layerUpdates){let pt=Q.data.subarray(ct*j/Q.data.BYTES_PER_ELEMENT,(ct+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,Q.width,Q.height,1,at,Tt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,Tt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,Q.width,Q.height,Q.depth,0,at,Tt,Q.data);else if(y.isData3DTexture)It?(Ft&&e.texStorage3D(i.TEXTURE_3D,lt,ht,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,Tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ht,Q.width,Q.height,Q.depth,0,at,Tt,Q.data);else if(y.isFramebufferTexture){if(Ft)if(It)e.texStorage2D(i.TEXTURE_2D,lt,ht,Q.width,Q.height);else{let j=Q.width,ct=Q.height;for(let pt=0;pt<lt;pt++)e.texImage2D(i.TEXTURE_2D,pt,ht,j,ct,0,at,Tt,null),j>>=1,ct>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),f.add(y),j.onpaint=ct=>{let pt=ct.changedElements;for(let nt of f)pt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let pt=i.RGBA,nt=i.RGBA,Rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,nt,Rt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(It&&Ft){let j=se(wt[0]);e.texStorage2D(i.TEXTURE_2D,lt,ht,j.width,j.height)}for(let j=0,ct=wt.length;j<ct;j++)ot=wt[j],It?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,at,Tt,ot):e.texImage2D(i.TEXTURE_2D,j,ht,at,Tt,ot);y.generateMipmaps=!1}else if(It){if(Ft){let j=se(Q);e.texStorage2D(i.TEXTURE_2D,lt,ht,j.width,j.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Tt,Q)}else e.texImage2D(i.TEXTURE_2D,0,ht,at,Tt,Q);p(y)&&S(W),rt.__version=it.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Nt(C,y,z){if(y.image.length!==6)return;let W=te(C,y),Y=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let it=n.get(Y);if(Y.version!==it.__version||W===!0){e.activeTexture(i.TEXTURE0+z);let rt=qt.getPrimaries(qt.workingColorSpace),J=y.colorSpace===xi?null:qt.getPrimaries(y.colorSpace),Q=y.colorSpace===xi||rt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let at=y.isCompressedTexture||y.image[0].isCompressedTexture,Tt=y.image[0]&&y.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!at&&!Tt?ht[nt]=m(y.image[nt],!0,s.maxCubemapSize):ht[nt]=Tt?y.image[nt].image:y.image[nt],ht[nt]=qe(y,ht[nt]);let ot=ht[0],wt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),Ft=v(y.internalFormat,wt,It,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,lt=it.__version===void 0||W===!0,j=Y.dataReady,ct=M(y,ot);Jt(i.TEXTURE_CUBE_MAP,y);let pt;if(at){F&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,ot.width,ot.height);for(let nt=0;nt<6;nt++){pt=ht[nt].mipmaps;for(let Rt=0;Rt<pt.length;Rt++){let bt=pt[Rt];y.format!==In?wt!==null?F?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Ft,bt.width,bt.height,0,bt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,bt.width,bt.height,wt,It,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Ft,bt.width,bt.height,0,wt,It,bt.data)}}}else{if(pt=y.mipmaps,F&&lt){pt.length>0&&ct++;let nt=se(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Tt){F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,wt,It,ht[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ft,ht[nt].width,ht[nt].height,0,wt,It,ht[nt].data);for(let Rt=0;Rt<pt.length;Rt++){let fe=pt[Rt].image[nt].image;F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,fe.width,fe.height,wt,It,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Ft,fe.width,fe.height,0,wt,It,fe.data)}}else{F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt,It,ht[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ft,wt,It,ht[nt]);for(let Rt=0;Rt<pt.length;Rt++){let bt=pt[Rt];F?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,wt,It,bt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Ft,wt,It,bt.image[nt])}}}p(y)&&S(i.TEXTURE_CUBE_MAP),it.__version=Y.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function gt(C,y,z,W,Y,it){let rt=r.convert(z.format,z.colorSpace),J=r.convert(z.type),Q=v(z.internalFormat,rt,J,z.normalized,z.colorSpace),at=n.get(y),Tt=n.get(z);if(Tt.__renderTarget=y,!at.__hasExternalTextures){let ht=Math.max(1,y.width>>it),ot=Math.max(1,y.height>>it);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,it,Q,ht,ot,y.depth,0,rt,J,null):e.texImage2D(Y,it,Q,ht,ot,0,rt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,Tt.__webglTexture,0,ye(y)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,Tt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let W=y.depthTexture,Y=W&&W.isDepthTexture?W.type:null,it=T(y.stencilBuffer,Y),rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(y),it,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(y),it,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,it,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,C)}else{let W=y.textures;for(let Y=0;Y<W.length;Y++){let it=W[Y],rt=r.convert(it.format,it.colorSpace),J=r.convert(it.type),Q=v(it.internalFormat,rt,J,it.normalized,it.colorSpace);we(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(y),Q,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(y),Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(C,y,z){let W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,y.depthTexture);let at=r.convert(y.depthTexture.format),Tt=r.convert(y.depthTexture.type),ht;y.depthTexture.format===$n?ht=i.DEPTH_COMPONENT24:y.depthTexture.format===zi&&(ht=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ht,y.width,y.height,0,at,Tt,null)}}else $(y.depthTexture,0);let it=Y.__webglTexture,rt=ye(y),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Q=y.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===$n)we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,it,0);else if(y.depthTexture.format===zi)we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(C){let y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=W}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Pe(y.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?Pe(y.__webglFramebuffer[0],C,0):Pe(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=i.createRenderbuffer(),Ht(y.__webglDepthbuffer[W],C,!1);else{let Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=y.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ht(y.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(C,y,z){let W=n.get(C);y!==void 0&&gt(W.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Vt(C)}function de(C){let y=C.texture,z=n.get(C),W=n.get(y);C.addEventListener("dispose",_);let Y=C.textures,it=C.isWebGLCubeRenderTarget===!0,rt=Y.length>1;if(rt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=y.version,a.memory.textures++),it){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[J][Q]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(rt)for(let J=0,Q=Y.length;J<Q;J++){let at=n.get(Y[J]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&we(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){let Q=Y[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let at=r.convert(Q.format,Q.colorSpace),Tt=r.convert(Q.type),ht=v(Q.internalFormat,at,Tt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ot=ye(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ht,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)gt(z.__webglFramebuffer[J][Q],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else gt(z.__webglFramebuffer[J],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(y)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let J=0,Q=Y.length;J<Q;J++){let at=Y[J],Tt=n.get(at),ht=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Tt.__webglTexture),Jt(ht,at),gt(z.__webglFramebuffer,C,at,i.COLOR_ATTACHMENT0+J,ht,0),p(at)&&S(ht)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),Jt(J,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)gt(z.__webglFramebuffer[Q],C,y,i.COLOR_ATTACHMENT0,J,Q);else gt(z.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,J,0);p(y)&&S(J),e.unbindTexture()}C.depthBuffer&&Vt(C)}function Xt(C){let y=C.textures;for(let z=0,W=y.length;z<W;z++){let Y=y[z];if(p(Y)){let it=A(C),rt=n.get(Y).__webglTexture;e.bindTexture(it,rt),S(it),e.unbindTexture()}}}let _e=[],Ne=[];function an(C){if(C.samples>0){if(we(C)===!1){let y=C.textures,z=C.width,W=C.height,Y=i.COLOR_BUFFER_BIT,it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(C),J=y.length>1;if(J)for(let at=0;at<y.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<y.length;at++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let Tt=n.get(y[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,Y,i.NEAREST),l===!0&&(_e.length=0,Ne.length=0,_e.push(i.COLOR_ATTACHMENT0+at),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(_e.push(it),Ne.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let at=0;at<y.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let Tt=n.get(y[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ye(C){return Math.min(s.maxSamples,C.samples)}function we(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(C){let y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function qe(C,y){let z=C.colorSpace,W=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Sr&&z!==xi&&(qt.getTransfer(z)===ie?(W!==In||Y!==cn)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",z)),y}function se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.getTextureUnits=P,this.setTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=Qt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kx(i,t){function e(n,s=xi){let r,a=qt.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oc)return i.BYTE;if(n===zc)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Ge)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===In)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Ks)return i.RED;if(n===No)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Bo)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===Jr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===zo||n===Ho||n===Vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Go||n===Wo||n===Xo||n===qo||n===$r||n===Yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Go)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xo)return r.COMPRESSED_R11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Yo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zo||n===Jo||n===$o||n===Ko||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===cl||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ll)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===Kr||n===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:jx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new mh,p={},S=e.getContextAttributes(),A=null,v=null,T=[],M=[],w=new st,_=null,b=null,R=new $e;R.viewport=new Kt;let D=new $e;D.viewport=new Kt;let I=[R,D],U=new To,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=T[Z];return et===void 0&&(et=new Gs,T[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=T[Z];return et===void 0&&(et=new Gs,T[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=T[Z];return et===void 0&&(et=new Gs,T[Z]=et),et.getHandSpace()};function k(Z){let et=M.indexOf(Z.inputSource);if(et===-1)return;let _t=T[et];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||a),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<T.length;Z++){let et=M[Z];et!==null&&(M[Z]=null,T[Z].disconnect(et))}P=null,O=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(A),d=null,h=null,f=null,s=null,v=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(w.width,w.height,!1),b!==null){let Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Nt=null,gt=null;S.depth&&(gt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?zi:$n,Nt=S.stencil?$s:kn);let Ht={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Oe(h.textureWidth,h.textureHeight,{format:In,type:cn,depthTexture:new Li(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Oe(d.framebufferWidth,d.framebufferHeight,{format:In,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Z){for(let et=0;et<Z.removed.length;et++){let _t=Z.removed[et],Nt=M.indexOf(_t);Nt>=0&&(M[Nt]=null,T[Nt].disconnect(_t))}for(let et=0;et<Z.added.length;et++){let _t=Z.added[et],Nt=M.indexOf(_t);if(Nt===-1){for(let Ht=0;Ht<T.length;Ht++)if(Ht>=M.length){M.push(_t),Nt=Ht;break}else if(M[Ht]===null){M[Ht]=_t,Nt=Ht;break}if(Nt===-1)break}let gt=T[Nt];gt&&gt.connect(_t)}}let X=new L,K=new L;function tt(Z,et,_t){X.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);let Nt=X.distanceTo(K),gt=et.projectionMatrix.elements,Ht=_t.projectionMatrix.elements,Pe=gt[14]/(gt[10]-1),Vt=gt[14]/(gt[10]+1),Qt=(gt[9]+1)/gt[5],de=(gt[9]-1)/gt[5],Xt=(gt[8]-1)/gt[0],_e=(Ht[8]+1)/Ht[0],Ne=Pe*Xt,an=Pe*_e,ye=Nt/(-Xt+_e),we=ye*-Xt;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(we),Z.translateZ(ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),gt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let B=Pe+ye,qe=Vt+ye,se=Ne-we,C=an+(Nt-we),y=Qt*Vt/qe*B,z=de*Vt/qe*B;Z.projectionMatrix.makePerspective(se,C,y,z,B,qe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,_t=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),U.near=D.near=R.near=et,U.far=D.far=R.far=_t,(P!==U.near||O!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,O=U.far),U.layers.mask=Z.layers.mask|6,R.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let Nt=Z.parent,gt=U.cameras;Mt(U,Nt);for(let Ht=0;Ht<gt.length;Ht++)Mt(gt[Ht],Nt);gt.length===2?tt(U,R,D):U.projectionMatrix.copy(R.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),St(Z,U,Nt)};function St(Z,et,_t){_t===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$a*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return p[Z]};let ue=null;function Jt(Z,et){if(u=et.getViewerPose(c||a),g=et,u!==null){let _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Nt=!1;_t.length!==U.cameras.length&&(U.cameras.length=0,Nt=!0);for(let Vt=0;Vt<_t.length;Vt++){let Qt=_t[Vt],de=null;if(d!==null)de=d.getViewport(Qt);else{let _e=f.getViewSubImage(h,Qt);de=_e.viewport,Vt===0&&(t.setRenderTargetTextures(v,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(v))}let Xt=I[Vt];Xt===void 0&&(Xt=new $e,Xt.layers.enable(Vt),Xt.viewport=new Kt,I[Vt]=Xt),Xt.matrix.fromArray(Qt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Qt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),Vt===0&&(U.matrix.copy(Xt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Nt===!0&&U.cameras.push(Xt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Vt=f.getDepthInformation(_t[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,s.renderState)}if(gt&&gt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Vt=0;Vt<_t.length;Vt++){let Qt=_t[Vt].camera;if(Qt){let de=p[Qt];de||(de=new Dr,p[Qt]=de);let Xt=f.getCameraImage(Qt);de.sourceTexture=Xt}}}}for(let _t=0;_t<T.length;_t++){let Nt=M[_t],gt=T[_t];Nt!==null&&gt!==void 0&&gt.update(Nt,et,c||a)}ue&&ue(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let te=new Ed;te.setAnimationLoop(Jt),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}},t_=new Gt,Id=new Ut;Id.set(-1,0,0,0,1,0,0,0,1);function e_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),A=S.envMap,v=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Id),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let M=T.program;n.uniformBlockBinding(v,M)}function c(v,T){let M=s[v.id];M===void 0&&(m(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",S));let w=T.program;n.updateUBOMapping(v,w);let _=t.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function u(v){let T=f();v.__bindingPointIndex=T;let M=i.createBuffer(),w=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let T=s[v.id],M=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,b=M.length;_<b;_++){let R=M[_];if(Array.isArray(R))for(let D=0,I=R.length;D<I;D++)d(R[D],_,D,w);else d(R,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,T,M,w){if(x(v,T,M,w)===!0){let _=v.__offset,b=v.value;if(Array.isArray(b)){let R=0;for(let D=0;D<b.length;D++){let I=b[D],U=p(I);g(I,v.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,M){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,M)}function x(v,T,M,w){let _=v.value,b=T+"_"+M;if(w[b]===void 0)return typeof _=="number"||typeof _=="boolean"?w[b]=_:ArrayBuffer.isView(_)?w[b]=_.slice():w[b]=_.clone(),!0;{let R=w[b];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return w[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(v){let T=v.uniforms,M=0,w=16;for(let b=0,R=T.length;b<R;b++){let D=Array.isArray(T[b])?T[b]:[T[b]];for(let I=0,U=D.length;I<U;I++){let P=D[I],O=Array.isArray(P.value)?P.value:[P.value];for(let k=0,G=O.length;k<G;k++){let $=O[k],X=p($),K=M%w,tt=K%X.boundary,Mt=K+tt;M+=tt,Mt!==0&&w-Mt<X.storage&&(M+=w-Mt),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=X.storage}}}let _=M%w;return _>0&&(M+=w-_),v.__size=M,v.__cache={},this}function p(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",v),T}function S(v){let T=v.target;T.removeEventListener("dispose",S);let M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function A(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function s_(){return ni===null&&(ni=new ss(i_,16,16,Hi,Ge),ni.name="DFG_LUT",ni.minFilter=Se,ni.magFilter=Se,ni.wrapS=Jn,ni.wrapT=Jn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Sl=class{constructor(t={}){let{canvas:e=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=cn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=d,m=new Set([Bo,Fo,No]),p=new Set([cn,kn,Js,$s,Do,Uo]),S=new Uint32Array(4),A=new Int32Array(4),v=new L,T=null,M=null,w=[],_=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,I=null,U=null,P=null,O=null;this._outputColorSpace=Ce;let k=0,G=0,$=null,X=-1,K=null,tt=new Kt,Mt=new Kt,St=null,ue=new At(0),Jt=0,te=e.width,Z=e.height,et=1,_t=null,Nt=null,gt=new Kt(0,0,te,Z),Ht=new Kt(0,0,te,Z),Pe=!1,Vt=new Xs,Qt=!1,de=!1,Xt=new Gt,_e=new L,Ne=new Kt,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function we(){return $===null?et:1}let B=n;function qe(E,N){return e.getContext(E,N)}let se,C,y,z,W,Y,it,rt,J,Q,at,Tt,ht,ot,wt,It,Ft,F,lt,j,ct,pt,nt;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ao}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",Un,!1),B===null){let N="webgl2";if(B=qe(N,E),B===null)throw qe(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(E){throw e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Dt("WebGLRenderer: "+E.message),E}function Rt(){se=new ug(B),se.init(),ct=new Kx(B,se),C=new eg(B,se,t,ct),y=new Jx(B,se),C.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),U=B.createFramebuffer(),P=B.createFramebuffer(),O=B.createFramebuffer(),z=new pg(B),W=new Nx,Y=new $x(B,se,y,W,C,ct,z),it=new hg(R),rt=new gp(B),pt=new Q0(B,rt),J=new dg(B,rt,z,pt),Q=new gg(B,J,rt,pt,z),F=new mg(B,C,Y),wt=new ng(W),at=new Ux(R,it,se,C,pt,wt),Tt=new e_(R,W),ht=new Bx,ot=new Gx(se),Ft=new j0(R,it,y,Q,g,l),It=new Zx(R,Q,C),nt=new n_(B,z,C,y),lt=new tg(B,se,z),j=new fg(B,se,z),z.programs=at.programs,R.capabilities=C,R.extensions=se,R.properties=W,R.renderLists=ht,R.shadowMap=It,R.state=y,R.info=z}x!==cn&&(b=new _g(x,e.width,e.height,o,s,r));let bt=new gh(R,B);this.xr=bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(te,Z,!1))},this.getSize=function(E){return E.set(te,Z)},this.setSize=function(E,N,q=!0){if(bt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}te=E,Z=N,e.width=Math.floor(E*et),e.height=Math.floor(N*et),q===!0&&(e.style.width=E+"px",e.style.height=N+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(te*et,Z*et).floor()},this.setDrawingBufferSize=function(E,N,q){te=E,Z=N,et=q,e.width=Math.floor(E*q),e.height=Math.floor(N*q),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(x===cn){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,N,q,H){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,N,q,H),y.viewport(tt.copy(gt).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,N,q,H){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,N,q,H),y.scissor(Mt.copy(Ht).multiplyScalar(et).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(E){y.setScissorTest(Pe=E)},this.setOpaqueSort=function(E){_t=E},this.setTransparentSort=function(E){Nt=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,q=!0){let H=0;if(E){let V=!1;if($!==null){let ft=$.texture.format;V=m.has(ft)}if(V){let ft=$.texture.type,xt=p.has(ft),dt=Ft.getClearColor(),vt=Ft.getClearAlpha(),Et=dt.r,Bt=dt.g,kt=dt.b;xt?(S[0]=Et,S[1]=Bt,S[2]=kt,S[3]=vt,B.clearBufferuiv(B.COLOR,0,S)):(A[0]=Et,A[1]=Bt,A[2]=kt,A[3]=vt,B.clearBufferiv(B.COLOR,0,A))}else H|=B.COLOR_BUFFER_BIT}N&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Ft.dispose(),ht.dispose(),ot.dispose(),W.dispose(),it.dispose(),Q.dispose(),pt.dispose(),nt.dispose(),at.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Dh),bt.removeEventListener("sessionend",Uh),Ji.stop()};function fe(E){E.preventDefault(),Tr("WebGLRenderer: Context Lost."),D=!0}function ee(){Tr("WebGLRenderer: Context Restored."),D=!1;let E=z.autoReset,N=It.enabled,q=It.autoUpdate,H=It.needsUpdate,V=It.type;Rt(),z.autoReset=E,It.enabled=N,It.autoUpdate=q,It.needsUpdate=H,It.type=V}function Un(E){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xn(E){let N=E.target;N.removeEventListener("dispose",Xn),gf(N)}function gf(E){xf(E),W.remove(E)}function xf(E){let N=W.get(E).programs;N!==void 0&&(N.forEach(function(q){at.releaseProgram(q)}),E.isShaderMaterial&&at.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,q,H,V,ft){N===null&&(N=an);let xt=V.isMesh&&V.matrixWorld.determinantAffine()<0,dt=yf(E,N,q,H,V);y.setMaterial(H,xt);let vt=q.index,Et=1;if(H.wireframe===!0){if(vt=J.getWireframeAttribute(q),vt===void 0)return;Et=2}let Bt=q.drawRange,kt=q.attributes.position,yt=Bt.start*Et,ne=(Bt.start+Bt.count)*Et;ft!==null&&(yt=Math.max(yt,ft.start*Et),ne=Math.min(ne,(ft.start+ft.count)*Et)),vt!==null?(yt=Math.max(yt,0),ne=Math.min(ne,vt.count)):kt!=null&&(yt=Math.max(yt,0),ne=Math.min(ne,kt.count));let Ae=ne-yt;if(Ae<0||Ae===1/0)return;pt.setup(V,H,dt,q,vt);let ge,he=lt;if(vt!==null&&(ge=rt.get(vt),he=j,he.setIndex(ge)),V.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*we()),he.setMode(B.LINES)):he.setMode(B.TRIANGLES);else if(V.isLine){let Ye=H.linewidth;Ye===void 0&&(Ye=1),y.setLineWidth(Ye*we()),V.isLineSegments?he.setMode(B.LINES):V.isLineLoop?he.setMode(B.LINE_LOOP):he.setMode(B.LINE_STRIP)}else V.isPoints?he.setMode(B.POINTS):V.isSprite&&he.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(se.get("WEBGL_multi_draw"))he.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ye=V._multiDrawStarts,mt=V._multiDrawCounts,en=V._multiDrawCount,$t=vt?rt.get(vt).bytesPerElement:1,Tn=W.get(H).currentProgram.getUniforms();for(let qn=0;qn<en;qn++)Tn.setValue(B,"_gl_DrawID",qn),he.render(Ye[qn]/$t,mt[qn])}else if(V.isInstancedMesh)he.renderInstances(yt,Ae,V.count);else if(q.isInstancedBufferGeometry){let Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,mt=Math.min(q.instanceCount,Ye);he.renderInstances(yt,Ae,mt)}else he.render(yt,Ae)};function Lh(E,N,q,H){I!==null&&E.isNodeMaterial&&I.setObject(H,E),Qt===!0&&wt.setState(E,q,!1),E.transparent===!0&&E.side===le&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,ma(E,N,H),E.side=Bi,E.needsUpdate=!0,ma(E,N,H),E.side=le):ma(E,N,H)}this.compile=function(E,N,q=null){q===null&&(q=E),I!==null&&I.renderStart(E,N,q),M=ot.get(q),M.init(N),_.push(M),q.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),E!==q&&E.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),de=this.localClippingEnabled,Qt=wt.init(this.clippingPlanes,de),Qt===!0&&wt.setGlobalState(this.clippingPlanes,N),I!==null&&It.render(M.state.shadowsArray,q,N);let H=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ft=V.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){let dt=ft[xt];Lh(dt,q,N,V),H.add(dt)}else Lh(ft,q,N,V),H.add(ft)}),M=_.pop(),I!==null&&I.renderEnd(),H},this.compileAsync=function(E,N,q=null){let H=this.compile(E,N,q);return new Promise(V=>{function ft(){if(H.forEach(function(xt){let vt=W.get(xt).currentProgram;(vt===void 0||vt.isReady())&&H.delete(xt)}),H.size===0){V(E);return}setTimeout(ft,10)}se.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let kl=null;function _f(E){kl&&kl(E)}function Dh(){Ji.stop()}function Uh(){Ji.start()}let Ji=new Ed;Ji.setAnimationLoop(_f),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(E){kl=E,bt.setAnimationLoop(E),E===null?Ji.stop():Ji.start()},bt.addEventListener("sessionstart",Dh),bt.addEventListener("sessionend",Uh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(E,N);let q=bt.enabled===!0&&bt.isPresenting===!0,H=b!==null&&($===null||q)&&b.begin(R,$);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(N),N=bt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,N,$),M=ot.get(E,_.length),M.init(N),M.state.textureUnits=Y.getTextureUnits(),_.push(M),Xt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Vt.setFromProjectionMatrix(Xt,On,N.reversedDepth),de=this.localClippingEnabled,Qt=wt.init(this.clippingPlanes,de),T=ht.get(E,w.length),T.init(),w.push(T),bt.enabled===!0&&bt.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&Gl(xt,N,-1/0,R.sortObjects)}Gl(E,N,0,R.sortObjects),T.finish(),I!==null&&I.updateLights(M.state.lightsArray),R.sortObjects===!0&&T.sort(_t,Nt),ye=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ye&&Ft.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&wt.beginShadows();let V=M.state.shadowsArray;if(It.render(V,E,N),Qt===!0&&wt.endShadows(),(H&&b.hasRenderPass())===!1){let xt=T.opaque,dt=T.transmissive;if(M.setupLights(),N.isArrayCamera){let vt=N.cameras;if(dt.length>0)for(let Et=0,Bt=vt.length;Et<Bt;Et++){let kt=vt[Et];Fh(xt,dt,E,kt)}ye&&Ft.render(E);for(let Et=0,Bt=vt.length;Et<Bt;Et++){let kt=vt[Et];Nh(T,E,kt,kt.viewport)}}else dt.length>0&&Fh(xt,dt,E,N),ye&&Ft.render(E),Nh(T,E,N)}$!==null&&G===0&&(Y.updateMultisampleRenderTarget($),Y.updateRenderTargetMipmap($)),H&&b.end(R),E.isScene===!0&&E.onAfterRender(R,E,N),pt.resetDefaultState(),X=-1,K=null,_.pop(),_.length>0?(M=_[_.length-1],Y.setTextureUnits(M.state.textureUnits),Qt===!0&&wt.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,I!==null&&I.renderEnd()};function Gl(E,N,q,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Vt)){H&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Xt);let xt=Q.update(E),dt=E.material;dt.visible&&T.push(E,xt,dt,q,Ne.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Vt))){let xt=Q.update(E),dt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ne.copy(xt.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(Xt)),Array.isArray(dt)){let vt=xt.groups;for(let Et=0,Bt=vt.length;Et<Bt;Et++){let kt=vt[Et],yt=dt[kt.materialIndex];yt&&yt.visible&&T.push(E,xt,yt,q,Ne.z,kt,N)}}else dt.visible&&T.push(E,xt,dt,q,Ne.z,null,N)}}let ft=E.children;for(let xt=0,dt=ft.length;xt<dt;xt++)Gl(ft[xt],N,q,H)}function Nh(E,N,q,H){let{opaque:V,transmissive:ft,transparent:xt}=E;M.setupLightsView(q),Qt===!0&&wt.setGlobalState(R.clippingPlanes,q),H&&y.viewport(tt.copy(H)),V.length>0&&pa(V,N,q),ft.length>0&&pa(ft,N,q),xt.length>0&&pa(xt,N,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Fh(E,N,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){let yt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new Oe(1,1,{generateMipmaps:!0,type:yt?Ge:cn,minFilter:ei,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let ft=M.state.transmissionRenderTarget[H.id],xt=H.viewport||tt;ft.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),vt=R.getActiveCubeFace(),Et=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(ue),Jt=R.getClearAlpha(),Jt<1&&R.setClearColor(16777215,.5),R.clear(),ye&&Ft.render(q);let Bt=R.toneMapping;R.toneMapping=Vn;let kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),Qt===!0&&wt.setGlobalState(R.clippingPlanes,H),pa(E,q,H),Y.updateMultisampleRenderTarget(ft),Y.updateRenderTargetMipmap(ft),se.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let ne=0,Ae=N.length;ne<Ae;ne++){let ge=N[ne],{object:he,geometry:Ye,material:mt,group:en}=ge;if(mt.side===le&&he.layers.test(H.layers)){let $t=mt.side;mt.side=ke,mt.needsUpdate=!0,Bh(he,q,H,Ye,mt,en),mt.side=$t,mt.needsUpdate=!0,yt=!0}}yt===!0&&(Y.updateMultisampleRenderTarget(ft),Y.updateRenderTargetMipmap(ft))}R.setRenderTarget(dt,vt,Et),R.setClearColor(ue,Jt),kt!==void 0&&(H.viewport=kt),R.toneMapping=Bt}function pa(E,N,q){let H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,ft=E.length;V<ft;V++){let xt=E[V],{object:dt,geometry:vt,group:Et}=xt,Bt=xt.material;Bt.allowOverride===!0&&H!==null&&(Bt=H),dt.layers.test(q.layers)&&Bh(dt,N,q,vt,Bt,Et)}}function Bh(E,N,q,H,V,ft){I!==null&&V.isNodeMaterial&&I.setObject(E,V),E.onBeforeRender(R,N,q,H,V,ft),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(R,N,q,H,E,ft),V.transparent===!0&&V.side===le&&V.forceSinglePass===!1?(V.side=ke,V.needsUpdate=!0,R.renderBufferDirect(q,N,H,V,E,ft),V.side=Bi,V.needsUpdate=!0,R.renderBufferDirect(q,N,H,V,E,ft),V.side=le):R.renderBufferDirect(q,N,H,V,E,ft),E.onAfterRender(R,N,q,H,V,ft)}function ma(E,N,q){N.isScene!==!0&&(N=an);let H=W.get(E),V=M.state.lights,ft=M.state.shadowsArray,xt=V.state.version,dt=at.getParameters(E,V.state,ft,N,q,M.state.lightProbeGridArray),vt=at.getProgramCacheKey(dt),Et=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let Bt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=it.get(E.envMap||H.environment,Bt),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",Xn),Et=new Map,H.programs=Et);let kt=Et.get(vt);if(kt!==void 0){if(H.currentProgram===kt&&H.lightsStateVersion===xt)return zh(E,dt),kt}else dt.uniforms=at.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,q,dt),E.onBeforeCompile(dt,R),kt=at.acquireProgram(dt,vt),Et.set(vt,kt),H.uniforms=dt.uniforms;let yt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(yt.clippingPlanes=wt.uniform),zh(E,dt),H.needsLights=Sf(E),H.lightsStateVersion=xt,H.needsLights&&(yt.ambientLightColor.value=V.state.ambient,yt.lightProbe.value=V.state.probe,yt.sunLights.value=V.state.sun,yt.sunLightShadows.value=V.state.sunShadow,yt.directionalLights.value=V.state.directional,yt.directionalLightShadows.value=V.state.directionalShadow,yt.spotLights.value=V.state.spot,yt.spotLightShadows.value=V.state.spotShadow,yt.rectAreaLights.value=V.state.rectArea,yt.ltc_1.value=V.state.rectAreaLTC1,yt.ltc_2.value=V.state.rectAreaLTC2,yt.pointLights.value=V.state.point,yt.pointLightShadows.value=V.state.pointShadow,yt.hemisphereLights.value=V.state.hemi,yt.sunShadowMatrix.value=V.state.sunShadowMatrix,yt.sunShadowCascade.value=V.state.sunShadowCascade,yt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,yt.spotLightMatrix.value=V.state.spotLightMatrix,yt.spotLightMap.value=V.state.spotLightMap,yt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=kt,H.uniformsList=null,kt}function Oh(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=tr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function zh(E,N){let q=W.get(E);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function vf(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let q=0,H=E.length;q<H;q++){let V=E[q];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function yf(E,N,q,H,V){N.isScene!==!0&&(N=an),Y.resetTextureUnits();let ft=N.fog,xt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,dt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:qt.workingColorSpace,vt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Et=it.get(H.envMap||xt,vt),Bt=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,kt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,Ae=!!q.morphAttributes.color,ge=Vn;H.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ge=R.toneMapping);let he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ye=he!==void 0?he.length:0,mt=W.get(H),en=M.state.lights;if(Qt===!0&&(de===!0||E!==K)){let pe=E===K&&H.id===X;wt.setState(H,E,pe)}let $t=!1;H.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==en.state.version||mt.outputColorSpace!==dt||V.isBatchedMesh&&mt.batching===!1||!V.isBatchedMesh&&mt.batching===!0||V.isBatchedMesh&&mt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&mt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&mt.instancing===!1||!V.isInstancedMesh&&mt.instancing===!0||V.isSkinnedMesh&&mt.skinning===!1||!V.isSkinnedMesh&&mt.skinning===!0||V.isInstancedMesh&&mt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&mt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&mt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&mt.instancingMorph===!1&&V.morphTexture!==null||mt.envMap!==Et||H.fog===!0&&mt.fog!==ft||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==wt.numPlanes||mt.numIntersection!==wt.numIntersection)||mt.vertexAlphas!==Bt||mt.vertexTangents!==kt||mt.morphTargets!==yt||mt.morphNormals!==ne||mt.morphColors!==Ae||mt.toneMapping!==ge||mt.morphTargetsCount!==Ye||!!mt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,mt.__version=H.version);let Tn=mt.currentProgram;$t===!0&&(Tn=ma(H,N,V),I&&H.isNodeMaterial&&I.onUpdateProgram(H,Tn,mt));let qn=!1,Si=!1,_s=!1,ae=Tn.getUniforms(),Ee=mt.uniforms;if(y.useProgram(Tn.program)&&(qn=!0,Si=!0,_s=!0),H.id!==X&&(X=H.id,Si=!0),mt.needsLights){let pe=vf(M.state.lightProbeGridArray,V);mt.lightProbeGrid!==pe&&(mt.lightProbeGrid=pe,Si=!0)}if(qn||K!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ae.setValue(B,"projectionMatrix",E.projectionMatrix),ae.setValue(B,"viewMatrix",E.matrixWorldInverse);let Ei=ae.map.cameraPosition;Ei!==void 0&&Ei.setValue(B,_e.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ae.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ae.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,Si=!0,_s=!0)}if(mt.needsLights&&(en.state.sunShadowMap.length>0&&ae.setValue(B,"sunShadowMap",en.state.sunShadowMap,Y),en.state.directionalShadowMap.length>0&&ae.setValue(B,"directionalShadowMap",en.state.directionalShadowMap,Y),en.state.spotShadowMap.length>0&&ae.setValue(B,"spotShadowMap",en.state.spotShadowMap,Y),en.state.pointShadowMap.length>0&&ae.setValue(B,"pointShadowMap",en.state.pointShadowMap,Y)),V.isSkinnedMesh){ae.setOptional(B,V,"bindMatrix"),ae.setOptional(B,V,"bindMatrixInverse");let pe=V.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),ae.setValue(B,"boneTexture",pe.boneTexture,Y))}V.isBatchedMesh&&(ae.setOptional(B,V,"batchingTexture"),ae.setValue(B,"batchingTexture",V._matricesTexture,Y),ae.setOptional(B,V,"batchingIdTexture"),ae.setValue(B,"batchingIdTexture",V._indirectTexture,Y),ae.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&ae.setValue(B,"batchingColorTexture",V._colorsTexture,Y));let bi=q.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&F.update(V,q,Tn),(Si||mt.receiveShadow!==V.receiveShadow)&&(mt.receiveShadow=V.receiveShadow,ae.setValue(B,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Ee.envMapIntensity.value=N.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=s_()),Si){if(ae.setValue(B,"toneMappingExposure",R.toneMappingExposure),mt.needsLights&&Mf(Ee,_s),ft&&H.fog===!0&&Tt.refreshFogUniforms(Ee,ft),Tt.refreshMaterialUniforms(Ee,H,et,Z,M.state.transmissionRenderTarget[E.id]),mt.needsLights&&mt.lightProbeGrid){let pe=mt.lightProbeGrid;Ee.probesSH.value=pe.texture,Ee.probesMin.value.copy(pe.boundingBox.min),Ee.probesMax.value.copy(pe.boundingBox.max),Ee.probesResolution.value.copy(pe.resolution)}tr.upload(B,Oh(mt),Ee,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(tr.upload(B,Oh(mt),Ee,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ae.setValue(B,"center",V.center),ae.setValue(B,"modelViewMatrix",V.modelViewMatrix),ae.setValue(B,"normalMatrix",V.normalMatrix),ae.setValue(B,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let pe=H.uniformsGroups;for(let Ei=0,vs=pe.length;Ei<vs;Ei++){let Vh=pe[Ei];nt.update(Vh,Tn),nt.bind(Vh,Tn)}}return Tn}function Mf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Sf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(E,N,q){let H=W.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=N,W.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let q=W.get(E);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,q=0){$=E,k=N,G=q;let H=null,V=!1,ft=!1;if(E){let dt=W.get(E);if(dt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,dt.__webglFramebuffer),tt.copy(E.viewport),Mt.copy(E.scissor),St=E.scissorTest,y.viewport(tt),y.scissor(Mt),y.setScissorTest(St),X=-1;return}else if(dt.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(dt.__hasExternalTextures)Y.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Bt=E.depthTexture;if(dt.__boundDepthTexture!==Bt){if(Bt!==null&&W.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}let vt=E.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let Et=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Et[N])?H=Et[N][q]:H=Et[N],V=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?H=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Et)?H=Et[q]:H=Et,tt.copy(E.viewport),Mt.copy(E.scissor),St=E.scissorTest}else tt.copy(gt).multiplyScalar(et).floor(),Mt.copy(Ht).multiplyScalar(et).floor(),St=Pe;if(q!==0&&(H=U),y.bindFramebuffer(B.FRAMEBUFFER,H)&&y.drawBuffers(E,H),y.viewport(tt),y.scissor(Mt),y.setScissorTest(St),V){let dt=W.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,q)}else if(ft){let dt=N;for(let vt=0;vt<E.textures.length;vt++){let Et=W.get(E.textures[vt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+vt,Et.__webglTexture,q,dt)}}else if(E!==null&&q!==0){let dt=W.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dt.__webglTexture,q)}X=-1};function Hh(E){let N=W.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=C.textureFormatReadable(E.format),N.__typeReadable=C.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,q,H,V,ft,xt,dt=0){if(!(E&&E.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt]),vt){y.bindFramebuffer(B.FRAMEBUFFER,vt);try{let Et=E.textures[dt],Bt=Et.format,kt=Et.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+dt);let yt=Hh(Et);if(yt.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&q>=0&&q<=E.height-V&&B.readPixels(N,q,H,V,ct.convert(Bt),ct.convert(kt),ft)}finally{let Et=$!==null?W.get($).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,N,q,H,V,ft,xt,dt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt]),vt)if(N>=0&&N<=E.width-H&&q>=0&&q<=E.height-V){y.bindFramebuffer(B.FRAMEBUFFER,vt);let Et=E.textures[dt],Bt=Et.format,kt=Et.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+dt);let yt=Hh(Et);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ne),B.bufferData(B.PIXEL_PACK_BUFFER,ft.byteLength,B.STREAM_READ),B.readPixels(N,q,H,V,ct.convert(Bt),ct.convert(kt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ae=$!==null?W.get($).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Ae);let ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ku(B,ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ft),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ne),B.deleteSync(ge),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,q=0){let H=Math.pow(2,-q),V=Math.floor(E.image.width*H),ft=Math.floor(E.image.height*H),xt=N!==null?N.x:0,dt=N!==null?N.y:0;Y.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,xt,dt,V,ft),y.unbindTexture()},this.copyTextureToTexture=function(E,N,q=null,H=null,V=0,ft=0){let xt,dt,vt,Et,Bt,kt,yt,ne,Ae,ge=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(q!==null)xt=q.max.x-q.min.x,dt=q.max.y-q.min.y,vt=q.isBox3?q.max.z-q.min.z:1,Et=q.min.x,Bt=q.min.y,kt=q.isBox3?q.min.z:0;else{let Ee=Math.pow(2,-V);xt=Math.floor(ge.width*Ee),dt=Math.floor(ge.height*Ee),E.isDataArrayTexture?vt=ge.depth:E.isData3DTexture?vt=Math.floor(ge.depth*Ee):vt=1,Et=0,Bt=0,kt=0}H!==null?(yt=H.x,ne=H.y,Ae=H.z):(yt=0,ne=0,Ae=0);let he=ct.convert(N.format),Ye=ct.convert(N.type),mt;N.isData3DTexture?(Y.setTexture3D(N,0),mt=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),mt=B.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),mt=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let en=y.getParameter(B.UNPACK_ROW_LENGTH),$t=y.getParameter(B.UNPACK_IMAGE_HEIGHT),Tn=y.getParameter(B.UNPACK_SKIP_PIXELS),qn=y.getParameter(B.UNPACK_SKIP_ROWS),Si=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,ge.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ge.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Et),y.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),y.pixelStorei(B.UNPACK_SKIP_IMAGES,kt);let _s=E.isDataArrayTexture||E.isData3DTexture,ae=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let Ee=W.get(E),bi=W.get(N),pe=W.get(Ee.__renderTarget),Ei=W.get(bi.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,pe.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let vs=0;vs<vt;vs++)_s&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(E).__webglTexture,V,kt+vs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(N).__webglTexture,ft,Ae+vs)),B.blitFramebuffer(Et,Bt,xt,dt,yt,ne,xt,dt,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||W.has(E)){let Ee=W.get(E),bi=W.get(N);y.bindFramebuffer(B.READ_FRAMEBUFFER,P),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,O);for(let pe=0;pe<vt;pe++)_s?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.__webglTexture,V,kt+pe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ee.__webglTexture,V),ae?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bi.__webglTexture,ft,Ae+pe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bi.__webglTexture,ft),V!==0?B.blitFramebuffer(Et,Bt,xt,dt,yt,ne,xt,dt,B.COLOR_BUFFER_BIT,B.NEAREST):ae?B.copyTexSubImage3D(mt,ft,yt,ne,Ae+pe,Et,Bt,xt,dt):B.copyTexSubImage2D(mt,ft,yt,ne,Et,Bt,xt,dt);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ae?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(mt,ft,yt,ne,Ae,xt,dt,vt,he,Ye,ge.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(mt,ft,yt,ne,Ae,xt,dt,vt,he,ge.data):B.texSubImage3D(mt,ft,yt,ne,Ae,xt,dt,vt,he,Ye,ge):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ft,yt,ne,xt,dt,he,Ye,ge.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ft,yt,ne,ge.width,ge.height,he,ge.data):B.texSubImage2D(B.TEXTURE_2D,ft,yt,ne,xt,dt,he,Ye,ge);y.pixelStorei(B.UNPACK_ROW_LENGTH,en),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$t),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Tn),y.pixelStorei(B.UNPACK_SKIP_ROWS,qn),y.pixelStorei(B.UNPACK_SKIP_IMAGES,Si),ft===0&&N.generateMipmaps&&B.generateMipmap(mt),y.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){k=0,G=0,$=null,y.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};function yn(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var fs=new Uint8Array(512);{let i=yn(1337),t=[...Array(256).keys()];for(let e=255;e>0;e--){let n=Math.floor(i()*(e+1));[t[e],t[n]]=[t[n],t[e]]}for(let e=0;e<512;e++)fs[e]=t[e&255]}var xh=[1,-1,1,-1,1,-1,0,0],_h=[1,1,-1,-1,0,0,1,-1],r_=.5*(Math.sqrt(3)-1),na=(3-Math.sqrt(3))/6;function Vi(i,t){let e=(i+t)*r_,n=Math.floor(i+e),s=Math.floor(t+e),r=(n+s)*na,a=i-(n-r),o=t-(s-r),l=a>o?1:0,c=1-l,u=a-l+na,f=o-c+na,h=a-1+2*na,d=o-1+2*na,g=n&255,x=s&255,m=0,p;if(p=.5-a*a-o*o,p>0){let S=fs[g+fs[x]]&7;p*=p,m+=p*p*(xh[S]*a+_h[S]*o)}if(p=.5-u*u-f*f,p>0){let S=fs[g+l+fs[x+c]]&7;p*=p,m+=p*p*(xh[S]*u+_h[S]*f)}if(p=.5-h*h-d*d,p>0){let S=fs[g+1+fs[x+1]]&7;p*=p,m+=p*p*(xh[S]*h+_h[S]*d)}return 70*m}function nr(i,t,e=4){let n=.5,s=1,r=0;for(let a=0;a<e;a++)r+=n*Vi(i*s+a*17.1,t*s-a*9.3),s*=2.03,n*=.5;return r}var me=(i,t,e)=>i<t?t:i>e?e:i,ce=(i,t,e)=>{let n=me((e-i)/(t-i),0,1);return n*n*(3-2*n)},ze=(i,t,e)=>i+(t-i)*e,Gn=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e];function jt(i){return[i>>16&255,i>>8&255,i&255].map(e=>(e/=255,e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)))}var Yt={uTime:{value:0},uSunDir:{value:new L(0,.3,-1).normalize()},uSunView:{value:new L},uSunCol:{value:new At(1,1,1)},uSkyTop:{value:new At},uSkyHor:{value:new At},uHaze:{value:new At},uFog:{value:new Kt(.03,.1,.001,0)},uBoatS:{value:0},uBloomFront:{value:0},uPeach:{value:0},uWind:{value:new st(.6,.2)},uCam:{value:new L},uFar:{value:new At},uDawn:{value:new At}},ki=`
uniform vec3 uSunDir, uSunCol, uSkyTop, uSkyHor, uHaze, uFar, uDawn; uniform vec4 uFog; uniform float uTime;
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
vec3 applyFog(vec3 col, vec3 wp){
  vec3 ro = cameraPosition; vec3 v = wp - ro; float dist = length(v); vec3 rd = v / max(dist, 1e-4);
  float a = uFog.x, b = uFog.y; float ry = rd.y; if (abs(ry) < 1e-3) ry = 1e-3;
  float fh = a * exp(-b * (ro.y - uFog.w)) * (1.0 - exp(-b * ry * dist)) / (b * ry);
  float fd = uFog.z * dist;
  float f = 1.0 - exp(-max(fh + fd, 0.0));
  float hs = clamp(fh / (fh + fd + 1e-5), 0.0, 1.0);
  vec3 fc = mix(skyColor(normalize(vec3(rd.x, max(rd.y, 0.0) * 0.4, rd.z))), uHaze, hs * 0.75);
  fc = mix(fc, uFar, (1.0 - hs) * smoothstep(0.0, 0.5, fd) * 0.6);
  float sd = max(dot(rd, uSunDir), 0.0);
  fc += uSunCol * (pow(sd, 5.0) * 0.42 + pow(sd, 24.0) * 0.3);
  return mix(col, fc, f);
}`;function Te(i,t,e=""){return i.onBeforeCompile=n=>{for(let s in Yt)n.uniforms[s]=Yt[s];n.vertexShader=n.vertexShader.replace("#include <fog_pars_vertex>","varying vec3 vFogW;").replace("#include <fog_vertex>",`{ vec4 fw = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        fw = instanceMatrix * fw;
      #endif
      vFogW = (modelMatrix * fw).xyz; }`),n.fragmentShader=n.fragmentShader.replace("#include <fog_pars_fragment>",`varying vec3 vFogW;
`+ki).replace("#include <fog_fragment>","gl_FragColor.rgb = applyFog(gl_FragColor.rgb, vFogW);"),t&&t(n)},i.customProgramCacheKey=()=>"ruhua"+e,i}function Pd(){let i=new gi(6e3,48,24),t=new ve({uniforms:Yt,side:ke,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; gl_Position.z = gl_Position.w * 0.99999; }",fragmentShader:ki+`
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
        gl_FragColor = vec4(c, 1.0);
      }`}),e=new Lt(i,t);return e.frustumCulled=!1,e.renderOrder=-10,e}var tn={dawn:jt(15381421),sun:new L(-.3,.05,-1).normalize(),sunCol:jt(15782082),sunI:1.35,top:jt(9085613),hor:jt(12832204),haze:jt(11188667),far:jt(10728630),fog:[.022,.16,.0012],hemiSky:jt(10135984),hemiGround:jt(4871504),hemiI:2.9,dirI:.8},Mn={sun:new L(.32,.24,-1).normalize(),sunCol:jt(16769981),sunI:2.6,top:jt(8565451),hor:jt(16181724),haze:jt(15917793),far:jt(10468550),fog:[.0035,.12,42e-5],hemiSky:jt(13820646),hemiGround:jt(8231518),hemiI:2.1,dirI:3.3},a_=new L;function Ld(i){let t=-Math.sin(i),e=-Math.cos(i),n=Math.cos(i),s=-Math.sin(i),r=(a,o,l)=>{let c=Math.cos(a),u=Math.sin(a),f=Math.cos(o);l.set((t*c+n*u)*f,Math.sin(o),(e*c+s*u)*f)};r(-.33,.05,tn.sun),r(.42,.245,Mn.sun)}function Dd(i,t,e){let n=(o,l)=>[ze(o[0],l[0],i),ze(o[1],l[1],i),ze(o[2],l[2],i)];Yt.uSunDir.value.copy(a_.copy(tn.sun).lerp(Mn.sun,i).normalize());let s=n(tn.sunCol,Mn.sunCol),r=ze(tn.sunI,Mn.sunI,i);Yt.uSunCol.value.setRGB(s[0]*r*.35,s[1]*r*.35,s[2]*r*.35);{let o=(1-i)*.3;Yt.uDawn.value.setRGB(tn.dawn[0]*o,tn.dawn[1]*o,tn.dawn[2]*o)}Yt.uSkyTop.value.setRGB(...n(tn.top,Mn.top)),Yt.uSkyHor.value.setRGB(...n(tn.hor,Mn.hor)),Yt.uHaze.value.setRGB(...n(tn.haze,Mn.haze)),Yt.uFar.value.setRGB(...n(tn.far,Mn.far));let a=n(tn.fog,Mn.fog);Yt.uFog.value.set(a[0],a[1],a[2],0),t.color.setRGB(...s),t.intensity=ze(tn.dirI,Mn.dirI,i),e.color.setRGB(...n(tn.hemiSky,Mn.hemiSky)),e.groundColor.setRGB(...n(tn.hemiGround,Mn.hemiGround)),e.intensity=ze(tn.hemiI,Mn.hemiI,i)}var o_=[[0,150],[3,85],[0,20],[-8,-45],[-2,-110],[12,-170],[26,-235],[14,-300],[-12,-360],[-30,-420],[-18,-485],[4,-540],[10,-580]],Nd=new mi(o_.map(([i,t])=>new L(i,0,t)),!1,"centripetal"),Al=Nd.getLength(),hn=Math.ceil(Al)+1,Gi=new Float32Array(hn),_i=new Float32Array(hn),ia=new Float32Array(hn),sa=new Float32Array(hn);{let i=Nd.getSpacedPoints(hn-1);for(let t=0;t<hn;t++)Gi[t]=i[t].x,_i[t]=i[t].z;for(let t=0;t<hn;t++){let e=Math.max(0,t-2),n=Math.min(hn-1,t+2),s=Gi[n]-Gi[e],r=_i[n]-_i[e],a=Math.hypot(s,r)||1;ia[t]=s/a,sa[t]=r/a}}var wl=Al/(hn-1),re={start:150,act2:280,forest0:292,forest1:640,end:Al};function un(i,t={}){let e=me(i/wl,0,hn-1.001),n=Math.floor(e),s=e-n;t.x=ze(Gi[n],Gi[n+1],s),t.z=ze(_i[n],_i[n+1],s);let r=ze(ia[n],ia[n+1],s),a=ze(sa[n],sa[n+1],s),o=Math.hypot(r,a)||1;return t.tx=r/o,t.tz=a/o,t}var Sn=i=>7.2+1.6*Math.sin(i*.021+1)+.9*Math.sin(i*.047+2);function l_(i,t,e){let n=0,s=hn-1;for(;s-n>1;){let p=n+s>>1;_i[p]>t?n=p:s=p}let r=1e18,a=n,o=160,l=Math.max(0,n-o),c=Math.min(hn-1,n+o);for(let p=l;p<=c;p+=4){let S=i-Gi[p],A=t-_i[p],v=S*S+A*A;v<r&&(r=v,a=p)}let u=Math.max(0,a-4),f=Math.min(hn-1,a+4);for(let p=u;p<=f;p++){let S=i-Gi[p],A=t-_i[p],v=S*S+A*A;v<r&&(r=v,a=p)}let h=i-Gi[a],d=t-_i[a],g=h*ia[a]+d*sa[a],x=ia[a]*d-sa[a]*h,m=a*wl+me(g,-wl,wl);return a===0&&g<0||a===hn-1&&g>0?(e.s=m,e.d=Math.sqrt(r),e.side=Math.sign(x)||1,e):(e.s=m,e.d=Math.abs(x),e.side=Math.sign(x)||1,e)}var c_={},ir=un(Al-1);function Ln(i,t,e){let n=l_(i,t,e||c_),s=n.d,r=n.s,a=Sn(r),o;if(s<a){let d=s/a;o=-1.7*(1-d*d)*(1-d*d*.3)}else{let d=s-a;o=(.5+.28*Vi(r*.03,5.3))*ce(0,2.6,d)+nr(i*.018,t*.018,3)*1.3*ce(3,26,d)+d*.012}let l=nr(i*.004+3,t*.004,4);o+=ce(55,230,s)*(46+46*l),o+=ce(180,1500,s)*(200+200*nr(i*.0011,t*.0011,5));let c=i-ir.x,u=t-ir.z,f=c*ir.tx+u*ir.tz,h=ir.tx*u-ir.tz*c;return o+=Math.exp(-(h*h)/(190*190))*ce(-30,140,f)*(150+60*nr(i*.01,t*.01,4)),o}var sr={x0:-280,x1:280,z0:-680,z1:200,step:2};function Fd(i){let t=new Le,e=Ud(sr.x0,sr.x1,sr.z0,sr.z1,sr.step,null,i,!0),n=Ud(-4e3,4e3,-5e3,3e3,40,sr,null,!1);return{near:e,far:n,heightTex:e.userData.heightTex}}var Pn={grassA:jt(10272878),grassB:jt(7249496),grassC:jt(5212782),dryA:jt(9408366),dryB:jt(7304548),ochre:jt(12163686),mud:jt(8219212),bed:jt(5660746),bedDeep:jt(4014663),rock:jt(5991022),qing:jt(3957880),lv:jt(5212782),pink:jt(15910607)},Tl={};function h_(i,t){let e=(i+4e3)/40,n=(t+5e3)/40,s=Math.floor(e),r=Math.floor(n),a=e-s,o=n-r,l=-4e3+s*40,c=-5e3+r*40,u=Ln(l,c,Tl),f=Ln(l+40,c,Tl),h=Ln(l,c+40,Tl),d=Ln(l+40,c+40,Tl);return(u*(1-a)+f*a)*(1-o)+(h*(1-a)+d*a)*o}function Ud(i,t,e,n,s,r,a,o){let l=Math.round((t-i)/s)+1,c=Math.round((n-e)/s)+1,u=new Float32Array(l*c*3),f=new Float32Array(l*c*3),h=new Float32Array(l*c),d={},g=null;if(a){g=new Float32Array(l*c);for(let p of a){if(!p.bloom)continue;let S=4.5*p.scale,A=Math.round((p.x-i)/s),v=Math.round((p.z-e)/s),T=Math.ceil(S/s);for(let M=v-T;M<=v+T;M++)for(let w=A-T;w<=A+T;w++){if(w<0||M<0||w>=l||M>=c)continue;let _=i+w*s-p.x,b=e+M*s-p.z,R=1-Math.hypot(_,b)/S;R>0&&(g[M*l+w]=Math.max(g[M*l+w],R))}}}for(let p=0;p<c;p++)for(let S=0;S<l;S++){let A=p*l+S,v=i+S*s,T=e+p*s,M=Ln(v,T,d);if(o){let G=Math.min(v-i,t-v,T-e,n-T);G<40&&(M=M+(h_(v,T)-M)*ce(40,0,G))}h[A]=M,u[A*3]=v,u[A*3+1]=M,u[A*3+2]=T;let w=d.d,_=d.s,b=Sn(_),R=w-b,D=ce(re.act2-50,re.act2+10,_)*(1-ce(re.forest1+20,re.forest1+90,_)*.5),I=nr(v*.08,T*.08,2),U=Vi(v*.31,T*.31),P=Gn(Gn(Pn.grassB,Pn.grassA,me(.5+I*.9,0,1)),Pn.grassC,me(.35-U*.4,0,1)),O=Gn(Gn(Pn.dryB,Pn.dryA,me(.5+I,0,1)),Pn.ochre,me(U*.5,0,.4));P=Gn(O,P,D),R<1.6&&(P=Gn(P,Pn.mud,ce(1.6,.2,R)*.85)),w<b&&(P=Gn(Pn.bed,Pn.bedDeep,ce(0,1.5,-M)));let k=ce(30,160,M);k>0&&(P=Gn(P,Gn(Pn.lv,Pn.qing,me(.3+I*.8+ce(120,500,M)*.6,0,1)),k)),g&&g[A]>0&&w>b+.4&&(P=Gn(P,Pn.pink,g[A]*.42*(.6+.4*U))),f[A*3]=P[0],f[A*3+1]=P[1],f[A*3+2]=P[2]}let x=[];for(let p=0;p<c-1;p++)for(let S=0;S<l-1;S++){if(r){let w=i+S*s,_=w+s,b=e+p*s,R=b+s;if(w>=r.x0&&_<=r.x1&&b>=r.z0&&R<=r.z1)continue}let A=p*l+S,v=A+1,T=A+l,M=T+1;x.push(A,T,v,v,T,M)}let m=new Zt;if(m.setAttribute("position",new Me(u,3)),m.setAttribute("color",new Me(f,3)),m.setIndex(x.length>65535?new Pi(x,1):new is(x,1)),m.computeVertexNormals(),o){u_(m,l,c);let p=new Uint16Array(l*c);for(let A=0;A<l*c;A++)p[A]=Rr.toHalfFloat(me(h[A],-8,8));let S=new ss(p,l,c,Ks,Ge);S.magFilter=S.minFilter=Se,S.needsUpdate=!0,m.userData.heightTex=S,m.userData.rect=new Kt(i,e,t-i,n-e)}return m.computeBoundingSphere(),m}function u_(i,t,e){let n=i.attributes.position.array,s=i.attributes.color.array,r=i.attributes.normal.array,a=t*e,o=[];for(let h=0;h<t;h++)o.push(h);for(let h=1;h<e;h++)o.push(h*t+t-1);for(let h=t-2;h>=0;h--)o.push((e-1)*t+h);for(let h=e-2;h>0;h--)o.push(h*t);let l=new Float32Array((a+o.length)*3),c=new Float32Array((a+o.length)*3),u=new Float32Array((a+o.length)*3);l.set(n),c.set(s),u.set(r),o.forEach((h,d)=>{let g=a+d;l[g*3]=n[h*3],l[g*3+1]=n[h*3+1]-25,l[g*3+2]=n[h*3+2];for(let x=0;x<3;x++)c[g*3+x]=s[h*3+x],u[g*3+x]=r[h*3+x]});let f=Array.from(i.index.array);for(let h=0;h<o.length;h++){let d=o[h],g=o[(h+1)%o.length],x=a+h,m=a+(h+1)%o.length;f.push(d,g,x,g,m,x,d,x,g,g,x,m)}i.setAttribute("position",new Me(l,3)),i.setAttribute("color",new Me(c,3)),i.setAttribute("normal",new Me(u,3)),i.setIndex(new Pi(f,1))}function d_(){let t=document.createElement("canvas");t.width=t.height=1024;let e=t.getContext("2d"),n=yn(7),s=1024/2;for(let a=0;a<4;a++){let o=a%2*s,l=Math.floor(a/2)*s;e.save(),e.beginPath(),e.rect(o,l,s,s),e.clip(),e.strokeStyle="rgba(70,52,44,1)",e.lineCap="round";for(let u=0;u<3;u++){e.lineWidth=3+n()*3,e.beginPath();let f=o+s*(.2+n()*.6),h=l+s*.95;e.moveTo(f,h);for(let d=0;d<4;d++)f+=(n()-.5)*s*.25,h-=s*(.12+n()*.1),e.lineTo(f,h);e.stroke()}let c=46;for(let u=0;u<c;u++){let f=n()*Math.PI*2,h=Math.pow(n(),.7)*s*.4,d=o+s/2+Math.cos(f)*h,g=l+s/2+Math.sin(f)*h*.9,x=s*(.045+n()*.04)*(1-h/s*.6),m=n()*6.28,p=n()<.1,S=.82+n()*.18;for(let A=0;A<(p?1:5);A++){let v=m+A*1.2566,T=d+Math.cos(v)*x*(p?0:.55),M=g+Math.sin(v)*x*(p?0:.55),w=e.createRadialGradient(d,g,0,T,M,x*(p?.5:.75));w.addColorStop(0,`rgb(${Math.round(232*S)},${Math.round(120*S)},${Math.round(150*S)})`),w.addColorStop(.45,`rgb(${Math.round(250*S)},${Math.round(196*S)},${Math.round(210*S)})`),w.addColorStop(1,`rgb(${Math.round(255*S)},${Math.round(232*S)},${Math.round(238*S)})`),e.fillStyle=w,e.beginPath(),e.ellipse(T,M,x*(p?.42:.58),x*.42,v,0,6.283),e.fill()}if(!p){e.fillStyle="rgb(176,58,92)",e.beginPath(),e.arc(d,g,x*.16,0,6.283),e.fill(),e.fillStyle="rgba(250,214,140,0.9)";for(let A=0;A<5;A++){let v=m+A*1.2566+.6;e.beginPath(),e.arc(d+Math.cos(v)*x*.22,g+Math.sin(v)*x*.22,x*.05,0,6.283),e.fill()}}}e.restore()}let r=new zn(t);return r.colorSpace=Ce,r.anisotropy=4,r.generateMipmaps=!0,r.minFilter=ei,r}var Ie=(i,t,e)=>new L(i,t,e);function f_(i,t,e){let n=Math.abs(i.y)<.95?Ie(0,1,0):Ie(1,0,0),s=Ie().crossVectors(i,n).normalize(),r=Ie().crossVectors(i,s).normalize();return i.clone().multiplyScalar(Math.cos(t)).add(s.multiplyScalar(Math.cos(e)*Math.sin(t))).add(r.multiplyScalar(Math.sin(e)*Math.sin(t))).normalize()}function p_(i,t){let e=yn(i),n=[],s=[],r=[],a=()=>Ie(e()-.5,e()-.5,e()-.5);function o(l,c,u,f,h){let d=h===0?4:3,g=[l.clone()],x=c.clone(),m=l.clone();for(let v=0;v<d;v++)x.add(a().multiplyScalar(h===0?.18:.32)),h>=2?x.y-=.05:x.y+=.03,x.normalize(),m=m.clone().addScaledVector(x,u/d),g.push(m);let p=f*(h===0?.72:.58);if(n.push({pts:g,r0:f,r1:p,depth:h}),h>=1&&r.push({p:g[Math.floor(d/2)].clone(),depth:h}),h>=t.depth){s.push({p:m.clone(),d:x.clone(),depth:h});return}let S=h===0?t.limbs:e()<.55?2:3,A=e()*6.283;for(let v=0;v<S;v++){let T=A+v/S*6.283+(e()-.5)*.9,M=h===0?t.spread*(.75+.5*e()):.32+.42*e(),w=h===0?m:g[d-(e()<.35?1:0)];o(w,f_(x,M,T),u*(.68+.2*e()),p*(.78+.12*e()),h+1)}}return o(Ie(0,-.35,0),Ie(t.lean,1,(e()-.5)*.2).normalize(),t.trunkH,t.trunkR,0),{br:n,tips:s,mids:r}}function Bd(i,t){let e=[],n=[],s=[],r=[],a=[],o=.1;for(let c of i)for(let u of c.pts)o=Math.max(o,u.y);t&&(o=t);for(let c of i){let u=c.depth===0?9:c.depth===1?7:5,f=c.pts.length,h=e.length/3,d=0,g=null;for(let x=0;x<f;x++){let m=c.pts[x],p=Ie().subVectors(c.pts[Math.min(f-1,x+1)],c.pts[Math.max(0,x-1)]).normalize(),S=g?g.clone().sub(p.clone().multiplyScalar(g.dot(p))).normalize():Ie().crossVectors(p,Math.abs(p.y)<.9?Ie(0,1,0):Ie(1,0,0)).normalize();g=S;let A=Ie().crossVectors(p,S).normalize(),v=c.r0+(c.r1-c.r0)*(x/(f-1));c.depth===0&&x===0&&(v*=1.7),c.depth===0&&x===1&&(v*=1.12),x>0&&(d+=c.pts[x].distanceTo(c.pts[x-1]));for(let T=0;T<=u;T++){let M=T/u*6.283,w=S.x*Math.cos(M)+A.x*Math.sin(M),_=S.y*Math.cos(M)+A.y*Math.sin(M),b=S.z*Math.cos(M)+A.z*Math.sin(M),R=1+.12*Vi(M*1.3+x*2.1,c.r0*40)*(c.depth===0?1:.4);e.push(m.x+w*v*R,m.y+_*v*R,m.z+b*v*R),n.push(w,_,b),s.push(T/u,d/(v*6.283+.05)*.5),r.push(Math.pow(Math.max(0,m.y)/o,1.5))}if(x>0){let T=h+(x-1)*(u+1),M=h+x*(u+1);for(let w=0;w<u;w++)a.push(T+w,M+w,T+w+1,T+w+1,M+w,M+w+1)}}}let l=new Zt;return l.setAttribute("position",new Ct(e,3)),l.setAttribute("normal",new Ct(n,3)),l.setAttribute("uv",new Ct(s,2)),l.setAttribute("aSway",new Ct(r,1)),l.setIndex(a),l}function m_(i,t){let e=yn(t*31+5),n=[],s=[],r=[],a=[],o=[],l=[],c=[],u=[];for(let M of i.tips)u.push({c:M.p.clone().addScaledVector(M.d,.2),r:.6+.35*e()});for(let M of i.mids)M.depth>=2&&e()<.55&&u.push({c:M.p.clone(),r:.5+.3*e()});let f=Ie();for(let M of u)f.add(M.c);f.multiplyScalar(1/u.length);let h=.5,d=.1,g=1e9;for(let M of u)h=Math.max(h,M.c.distanceTo(f)),d=Math.max(d,M.c.y),g=Math.min(g,M.c.y);let x=new He,m=new Ke,p=Ie(),S=Ie(),A=Ie(),v=Ie();for(let M of u){let w=7+Math.floor(e()*4);for(let _=0;_<w;_++){let b=M.c.clone().add(Ie(e()-.5,(e()-.5)*.8,e()-.5).multiplyScalar(M.r*1.3)),R=M.r*(.75+.45*e());m.set(e()*6.283,e()*6.283,e()*6.283),x.setFromEuler(m),p.set(1,0,0).applyQuaternion(x),S.set(0,1,0).applyQuaternion(x);let D=Math.floor(e()*4),I=D%2*.5,U=Math.floor(D/2)*.5,P=me(b.distanceTo(f)/(h+.6),0,1)*.75+me((b.y-g)/(d-g+.5),0,1)*.35,O=e(),k=me(.05+e()*.62,0,.7),G=n.length/3;for(let[$,X]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let K=v.copy(b).addScaledVector(p,$*R).addScaledVector(S,X*R);n.push(K.x,K.y,K.z),A.copy(K).sub(M.c).normalize().multiplyScalar(.45).add(Ie().subVectors(K,f).normalize().multiplyScalar(.55)).add(Ie(0,.25,0)).normalize(),s.push(A.x,A.y,A.z),r.push(I+($*.5+.5)*.5,U+(X*.5+.5)*.5),a.push(M.c.x,M.c.y,M.c.z,k),o.push(O,me(P,0,1)),l.push(Math.pow(Math.max(0,K.y)/(d+.5),1.5))}c.push(G,G+1,G+2,G,G+2,G+3)}}let T=new Zt;return T.setAttribute("position",new Ct(n,3)),T.setAttribute("normal",new Ct(s,3)),T.setAttribute("uv",new Ct(r,2)),T.setAttribute("aPuff",new Ct(a,4)),T.setAttribute("aMisc",new Ct(o,2)),T.setAttribute("aSway",new Ct(l,1)),T.setIndex(c),T}var Od=`
attribute float aSway; attribute vec4 aTree;
vec3 swayP(vec3 p){ float t = uTime, ph = aTree.z, w = aSway * uWind.x;
  p.x += (sin(t * 0.9 + ph) * 0.6 + sin(t * 2.3 + ph * 1.7) * 0.22) * 0.07 * w;
  p.z += cos(t * 0.75 + ph * 1.3) * 0.05 * w; return p; }`,g_=`
attribute vec4 aPuff; attribute vec2 aMisc; varying vec2 vMisc; varying float vTint;
vec3 bloomP(vec3 p){
  float bl = clamp((uBloomFront - aTree.x) / 28.0, 0.0, 1.0);
  float sc = smoothstep(aPuff.w, aPuff.w + 0.3, bl); sc *= 1.0 + 0.14 * sin(sc * 3.14159);
  p = aPuff.xyz + (p - aPuff.xyz) * sc;
  p += vec3(sin(uTime * 2.7 + aPuff.w * 40.0), 0.0, cos(uTime * 2.1 + aPuff.w * 30.0)) * 0.025 * aSway;
  return p; }`;function x_(i){let t=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uBloomFront; uniform vec2 uWind;
`+Od+g_).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed = swayP(bloomP(transformed)); vMisc = aMisc; vTint = aTree.y;`)},e=new Rn({map:i,alphaTest:.5,side:le,alphaToCoverage:!0});Te(e,s=>{t(s),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunView; varying vec2 vMisc; varying float vTint;`).replace("#include <map_fragment>",`#include <map_fragment>
        { vec2 dx = dFdx(vMapUv * 512.0), dy = dFdy(vMapUv * 512.0); float lod = 0.5 * log2(max(dot(dx, dx), dot(dy, dy))); diffuseColor.a *= 1.0 + max(lod, 0.0) * 0.25; }
        diffuseColor.rgb *= mix(vec3(1.0, 0.84, 0.88), vec3(1.04, 1.0, 1.0), vMisc.x) * mix(vec3(1.0), vec3(1.05, 0.9, 0.95), vTint);
        diffuseColor.rgb *= mix(0.42, 1.0, vMisc.y);`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
        { vec3 Vd = normalize(vViewPosition); float bk = pow(clamp(dot(-Vd, uSunView), 0.0, 1.0), 3.0);
          reflectedLight.directDiffuse += diffuseColor.rgb * uSunCol * (bk * (0.9 + 0.8 * (1.0 - vMisc.y)) * 1.6 + 0.12); }`)},"crown");let n=new as({depthPacking:pl,map:i,alphaTest:.5,side:le});return n.onBeforeCompile=s=>{s.uniforms.uTime=Yt.uTime,s.uniforms.uBloomFront=Yt.uBloomFront,s.uniforms.uWind=Yt.uWind,t(s),s.vertexShader=s.vertexShader.replace("vMisc = aMisc; vTint = aTree.y;","")},n.customProgramCacheKey=()=>"crownDepth",{mat:e,depth:n}}function __(){let i=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform vec2 uWind;
`+Od).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed = swayP(transformed);`)},t=new je({color:4931125,roughness:.93,metalness:0});Te(t,n=>{i(n),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBark;`).replace("#include <uv_vertex>",`#include <uv_vertex>
 vBark = uv;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vBark; float bh(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 45758.5); } float bn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(bh(i), bh(i+vec2(1,0)), f.x), mix(bh(i+vec2(0,1)), bh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        { float g = bn(vec2(vBark.x * 14.0, vBark.y * 3.0)) * 0.6 + bn(vec2(vBark.x * 40.0, vBark.y * 9.0)) * 0.4; diffuseColor.rgb *= mix(0.55, 1.15, g);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.2, 0.12), smoothstep(0.55, 0.9, bn(vBark * vec2(6.0, 1.5))) * 0.35); }`)},"trunk");let e=new as({depthPacking:pl});return e.onBeforeCompile=n=>{n.uniforms.uTime=Yt.uTime,n.uniforms.uWind=Yt.uWind,i(n)},e.customProgramCacheKey=()=>"trunkDepth",{mat:t,depth:e}}function zd(){let i=yn(99),t=[],e=new Map,n=(o,l)=>`${Math.floor(o/6)},${Math.floor(l/6)}`,s=(o,l,c)=>{for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++){let h=e.get(`${Math.floor(o/6)+u},${Math.floor(l/6)+f}`);if(h){for(let d of h)if(Math.hypot(d.x-o,d.z-l)<c)return!1}}return!0},r=o=>{t.push(o);let l=n(o.x,o.z);e.has(l)||e.set(l,[]),e.get(l).push(o)},a={};for(let o=re.forest0;o<re.forest1;o+=2.2)for(let l of[-1,1])for(let c=0;c<5;c++){if(i()>[.5,.42,.36,.3,.24][c])continue;let u=o+(i()-.5)*3;un(u,a);let h=Sn(u)+2.2+c*6.5+i()*3.5,d=a.x-a.tz*h*l,g=a.z+a.tx*h*l;if(!s(d,g,c===0?4.6:5.4))continue;let x=Ln(d,g);if(x<.15||x>14)continue;let m=Math.atan2(-(a.x-d),-(a.z-g));r({x:d,y:x,z:g,rot:c===0?m-Math.PI/2+(i()-.5)*.5:i()*6.283,scale:.9+i()*.35,variant:c===0?3+Math.floor(i()*3):Math.floor(i()*3),bloomS:u+(i()-.5)*8,bloom:!0,tint:i(),act:2,s:u})}for(let o=re.start-40;o<re.act2-5;o+=9)for(let l of[-1,1]){if(i()>.35)continue;let c=o+i()*6;un(c,a);let f=Sn(c)+2.5+i()*22,h=a.x-a.tz*f*l,d=a.z+a.tx*f*l;if(!s(h,d,7))continue;let g=Ln(h,d);g<.15||r({x:h,y:g,z:d,rot:i()*6.283,scale:.8+i()*.35,variant:Math.floor(i()*6),bloomS:1e5,bloom:!1,tint:i(),act:1,s:c})}return t}var v_=[{trunkH:1.5,trunkR:.2,limbs:3,spread:.72,lean:.05,depth:4},{trunkH:1.3,trunkR:.18,limbs:4,spread:.8,lean:-.05,depth:4},{trunkH:1.7,trunkR:.22,limbs:3,spread:.62,lean:.1,depth:4},{trunkH:1.5,trunkR:.2,limbs:3,spread:.7,lean:.42,depth:4},{trunkH:1.2,trunkR:.19,limbs:3,spread:.85,lean:.55,depth:4},{trunkH:1.6,trunkR:.21,limbs:4,spread:.7,lean:.35,depth:4}],y_=48,M_=55;function vh(i,t){let e=new Zt;for(let n in i.attributes)e.setAttribute(n,i.attributes[n]);return e.setIndex(i.index),e.setAttribute("aTree",t),e.boundingSphere=i.boundingSphere,e.boundingBox=i.boundingBox,e}function Hd(i){let t=new Le,e=d_(),n=x_(e),s=__(),r=new Gt,a=new He,o=new L,l=new L,c=new At,u=[];return v_.forEach((f,h)=>{let d=i.filter(v=>v.variant===h);if(!d.length)return;let g=p_(1e3+h*77,f),x=.1;for(let v of g.br)for(let T of v.pts)x=Math.max(x,T.y);let m=Bd(g.br),p=Bd(g.br.filter(v=>v.depth<=2),x),S=m_(g,h+3);for(let v of[m,p,S])v.computeBoundingSphere(),v.computeBoundingBox();let A=new Map;d.forEach((v,T)=>{let M=v.act===1?"a"+Math.floor(v.s/80):Math.floor(v.s/y_);A.has(M)||A.set(M,[]),A.get(M).push([v,T])});for(let v of A.values()){let T=new Float32Array(v.length*4);v.forEach(([I,U],P)=>T.set([I.bloomS,I.tint,U*1.7+h,I.act],P*4));let M=new _n(T,4),w=new _n(T.slice(),4),_=new ln(vh(m,M),s.mat,v.length),b=new ln(vh(S,w),n.mat,v.length),R=new on;v.forEach(([I],U)=>{a.setFromAxisAngle(l.set(0,1,0),I.rot),r.compose(l.set(I.x,I.y-.05,I.z),a,o.setScalar(I.scale)),_.setMatrixAt(U,r),b.setMatrixAt(U,r),c.setRGB(1,1,1),I.act===1&&c.setRGB(.72,.74,.76),_.setColorAt(U,c),R.expandByPoint(l)}),R.expandByScalar(3);let D=new ln(vh(p,M),s.mat,v.length);D.instanceMatrix=_.instanceMatrix,D.instanceColor=_.instanceColor;for(let I of[_,D,b])I.castShadow=!0,I.receiveShadow=!0,I.computeBoundingSphere(),I.boundingSphere.radius+=1.2;_.customDepthMaterial=D.customDepthMaterial=s.depth,b.customDepthMaterial=n.depth,_.name=D.name="trunk",b.name="crown",D.visible=!1,u.push({box:R,full:_,lod:D}),t.add(_,D,b)}}),t.userData.lod=f=>{for(let h of u){let d=h.box.distanceToPoint(f)>M_;h.full.visible=!d,h.lod.visible=d}},t}function ra(i,t,e,n,s,r=3){let a=yn(s),o=[],l=[],c=[],u=[];for(let h=0;h<i;h++){let d=a()*6.283,g=Math.sqrt(a())*.22,x=Math.cos(d)*g,m=Math.sin(d)*g,p=t+a()*(e-t),S=n*(.7+a()*.6),A=a()*6.283,v=.25+a()*.5,T=Math.cos(A),M=Math.sin(A),w=-M,_=T,b=o.length/3;for(let R=0;R<=r;R++){let D=R/r,I=v*D*D*p,U=S*(1-D*.85),P=x+T*I,O=m+M*I,k=p*D*(1-v*.25*D);o.push(P-w*U,k,O-_*U,P+w*U,k,O+_*U);let G=T*.4,$=M*.4;if(l.push(G,1,$,G,1,$),c.push(D,p,D,p),R>0){let X=b+(R-1)*2;u.push(X,X+2,X+1,X+1,X+2,X+3)}}}let f=new Zt;return f.setAttribute("position",new Ct(o,3)),f.setAttribute("normal",new Ct(l,3)),f.setAttribute("aBlade",new Ct(c,2)),f.setIndex(u),f}function Vd(i,t,e){let n=new Rn({side:le});return Te(n,s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
      attribute vec2 aBlade; uniform float uTime; uniform vec2 uWind; varying float vT;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      { vec4 wp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix * wp;
        #endif
        float ph = dot(wp.xz, vec2(0.21, 0.17));
        float w = (sin(uTime * 1.6 + ph) * 0.6 + sin(uTime * 3.7 + ph * 2.3) * 0.25 + 0.35) * uWind.x;
        float k = aBlade.x * aBlade.x * aBlade.y * 0.35;
        transformed.x += w * k; transformed.z += w * k * 0.5; vT = aBlade.x; }`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
      varying float vT;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb *= mix(vec3(${i.join(",")}), vec3(${t.join(",")}), smoothstep(0.0, 1.0, vT));`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`)},e),n}function kd(i){let t=new Le,e=yn(5),n=ra(6,.22,.55,.022,1),s=ra(5,.3,.7,.025,2),r=ra(6,.22,.55,.022,1,1),a=ra(5,.3,.7,.025,2,1),o=[],l=Vd([.06,.13,.06],[.42,.55,.2],"grass"),c={},u=new Gt,f=new He,h=new L,d=new L,g=new At,x=new L(0,1,0),m=40;for(let b=re.start-30;b<re.forest1+40;b+=m){let R=[];for(let I=0;I<1300;I++){let U=b+e()*m;un(U,c);let P=Sn(U),O=e()<.5?-1:1,k=P+.35+Math.pow(e(),1.6)*26,G=c.x-c.tz*k*O+(e()-.5)*1.5,$=c.z+c.tx*k*O+(e()-.5)*1.5,X=Ln(G,$);if(X<.05)continue;let K=ce(re.act2-40,re.act2+20,U),tt=Vi(G*.15,$*.15),Mt=[.55+tt*.1,.5,.36],St=[.85+tt*.12,1,.8+tt*.1];g.setRGB(Mt[0]+(St[0]-Mt[0])*K,Mt[1]+(St[1]-Mt[1])*K,Mt[2]+(St[2]-Mt[2])*K),R.push({x:G,y:X,z:$,s:.7+e()*.7*(k<P+6?1.2:1),rot:e()*6.283,c:g.clone(),b:e()<.5})}let D=new on;for(let I of R)D.expandByPoint(h.set(I.x,I.y,I.z));D.expandByScalar(1);for(let[I,U,P]of[[n,r,!0],[s,a,!1]]){let O=R.filter($=>$.b===P);if(!O.length)continue;let k=new ln(I,l,O.length);O.forEach(($,X)=>{f.setFromAxisAngle(x,$.rot),u.compose(h.set($.x,$.y-.03,$.z),f,d.setScalar($.s)),k.setMatrixAt(X,u),k.setColorAt(X,$.c)});let G=new ln(U,l,O.length);G.instanceMatrix=k.instanceMatrix,G.instanceColor=k.instanceColor;for(let $ of[k,G])$.receiveShadow=!0,$.computeBoundingSphere(),$.layers.set(1),t.add($);G.visible=!1,o.push({box:D,full:k,lod:G})}}let p=ra(5,1,1.9,.02,9,4),S=Vd([.2,.2,.14],[.62,.55,.4],"reed"),A=[];for(let b=0;b<1400;b++){let R=re.start-30+e()*(re.act2-re.start+30);un(R,c);let D=Sn(R),I=e()<.5?-1:1,U=D-.6+e()*2.4,P=c.x-c.tz*U*I,O=c.z+c.tx*U*I,k=Ln(P,O);k<-.35||A.push({x:P,y:k,z:O,s:.8+e()*.5,rot:e()*6.283})}let v=new ln(p,S,A.length);A.forEach((b,R)=>{f.setFromAxisAngle(x,b.rot),u.compose(h.set(b.x,b.y-.05,b.z),f,d.setScalar(b.s)),v.setMatrixAt(R,u)}),v.castShadow=!0,v.receiveShadow=!0,v.computeBoundingSphere(),t.add(v);let T=new rn(.07,.05);T.rotateX(-Math.PI/2);let M=Te(new Rn({color:16172239,side:le}),null,"gpetal"),w=[];for(let b of i)if(b.bloom)for(let R=0;R<40;R++){let D=e()*6.283,I=Math.sqrt(e())*4.2*b.scale,U=b.x+Math.cos(D)*I,P=b.z+Math.sin(D)*I,O=Ln(U,P);O<.03||w.push([U,O+.03,P,e()*6.283])}let _=new ln(T,M,w.length);return w.forEach((b,R)=>{f.setFromAxisAngle(x,b[3]),u.compose(h.set(b[0],b[1],b[2]),f,d.setScalar(.8+R%7*.08)),_.setMatrixAt(R,u),g.setRGB(1,.9+R%5*.025,.92+R%3*.03),_.setColorAt(R,g)}),_.receiveShadow=!0,_.computeBoundingSphere(),_.layers.set(1),t.add(_),t.userData.lod=b=>{for(let R of o){let D=R.box.distanceToPoint(b)>60;R.full.visible=!D,R.lod.visible=D}},{group:t,groundPetals:_}}var aa=class i extends Lt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=e.color!==void 0?new At(e.color):new At(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new xn,f=new L,h=new L,d=new L,g=new Gt,x=new L(0,0,-1),m=new Kt,p=new L,S=new L,A=new Kt,v=new Gt,T=new Oe(r,a,{samples:c,type:Ge}),M=new ve({name:l.name!==void 0?l.name:"unspecified",uniforms:xl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});M.uniforms.tDiffuse.value=T.texture,M.uniforms.color.value=s,M.uniforms.textureMatrix.value=v,this.material=M,this.onBeforeRender=function(w,_,b){let R=this.getReflectionCamera(b);if(h.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(b.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(h,d),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(h),g.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(d),S.subVectors(h,x),S.reflect(f).negate(),S.add(h),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(g),R.up.reflect(f),R.lookAt(S),R.far=b.far,R.updateMatrixWorld(),R.projectionMatrix.copy(b.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(R.projectionMatrix),v.multiply(R.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,h),u.applyMatrix4(R.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let I=R.projectionMatrix;R.isOrthographicCamera?(A.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],A.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],A.z=-b.far,A.w=1):(A.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],A.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],A.z=-1,A.w=(1+I.elements[10])/I.elements[14]),m.multiplyScalar(2/m.dot(A)),I.elements[2]=m.x,I.elements[6]=m.y,R.isOrthographicCamera?(I.elements[10]=m.z-o,I.elements[14]=m.w-1):(I.elements[10]=m.z+1-o,I.elements[14]=m.w),n.visible=!1;let U=w.getRenderTarget(),P=w.xr.enabled,O=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(T),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(_,R),w.xr.enabled=P,w.shadowMap.autoUpdate=O,w.setRenderTarget(U);let k=b.viewport;k!==void 0&&w.state.viewport(k),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()},this.getReflectionCamera=function(w){let _=this._reflectionCameras.get(w);return _===void 0&&(_=w.clone(),this._reflectionCameras.set(w,_)),_}}};aa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Gd(i,t,e,n){let s=new rn(t.z,t.w,1,1),r={name:"ruhuaWater",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
      uniform mat4 textureMatrix; varying vec4 vR; varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vR = textureMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform sampler2D tDiffuse, uHeight; uniform vec3 color; uniform vec4 uRect; uniform vec3 uDeep, uShallow; uniform vec4 uBoat; uniform vec2 uRes; uniform float uPeach;
      varying vec4 vR; varying vec3 vW;
      ${ki}
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
      }`},a=new aa(s,{textureWidth:e,textureHeight:n,clipBias:.002,multisample:4,shader:r});a.rotation.x=-Math.PI/2,a.position.set(t.x+t.z/2,0,t.y+t.w/2);let o=a.material.uniforms;for(let c in Yt)o[c]=Yt[c];o.uHeight={value:i},o.uRect={value:t},o.uDeep={value:new At().setRGB(...jt(3102054))},o.uShallow={value:new At().setRGB(...jt(7305818))},o.uBoat={value:new Kt},o.uRes={value:new st(e,n)};let l=a.getReflectionCamera;return a.getReflectionCamera=function(c){let u=l.call(this,c);return u.layers.set(0),u},a.setRes=(c,u)=>{a.getRenderTarget().setSize(c,u),o.uRes.value.set(c,u)},a}function yh(){let i=new rn(1,1,2,2),t=i.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),s=t.getY(e);t.setZ(e,-(n*n)*.35-s*s*.1)}return i.computeVertexNormals(),i}var Wd=`
  uniform vec3 uSunView; varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vFade; varying float vTone;
  ${ki}
  void main(){
    vec2 q = vUv * 2.0 - 1.0; float d = length(vec2(q.x * 1.3, q.y * 0.95 + 0.05 * q.x * q.x));
    if (d > 1.0 || (q.y > 0.78 && abs(q.x) < (q.y - 0.78) * 1.3) || vFade < 0.02) discard;
    vec3 base = mix(vec3(0.86, 0.36, 0.48), vec3(0.98, 0.78, 0.82), smoothstep(-1.0, 0.4, q.y)); base = mix(base, vec3(1.0, 0.93, 0.95), vTone * 0.5);
    vec3 n = normalize(vN); float dl = abs(dot(n, uSunDir));
    vec3 V = normalize(cameraPosition - vW); float bk = pow(max(dot(-V, uSunDir), 0.0), 3.0);
    vec3 col = base * (uSkyTop * 0.55 + uHaze * 0.4 + uSunCol * (dl * 0.9 + bk * 1.4));
    gl_FragColor = vec4(applyFog(col, vW), 1.0);
  }`;function Mh(i=2600,t=[56,20,64],e=.085,n=11){let s=yh(),r=new os;r.setIndex(s.index),r.setAttribute("position",s.attributes.position),r.setAttribute("normal",s.attributes.normal),r.setAttribute("uv",s.attributes.uv);let a=yn(n),o=new Float32Array(i*4);for(let u=0;u<i*4;u++)o[u]=a();r.setAttribute("aSeed",new _n(o,4)),r.instanceCount=i;let l=new ve({uniforms:Object.assign({uDensity:{value:0},uBox:{value:new L(...t)},uFwd:{value:new L(0,0,-1)},uSize:{value:e}},Yt),side:le,vertexShader:`
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
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:Wd}),c=new Lt(r,l);return c.frustumCulled=!1,c.layers.set(1),c}function Xd(i,t,e=3200){let n=yh(),s=new os;s.setIndex(n.index),s.setAttribute("position",n.attributes.position),s.setAttribute("normal",n.attributes.normal),s.setAttribute("uv",n.attributes.uv);let r=yn(12),a=new Float32Array(e*4);for(let c=0;c<e*4;c++)a[c]=r();s.setAttribute("aSeed",new _n(a,4)),s.instanceCount=e;let o=new ve({uniforms:Object.assign({uDensity:{value:0},uBox:{value:new L(70,1,110)},uFwd:{value:new L(0,0,-1)},uHeight:{value:i},uRect:{value:t}},Yt),side:le,vertexShader:`
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
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:Wd}),l=new Lt(s,o);return l.frustumCulled=!1,l.layers.set(1),l}function qd(){let i=yh();i.rotateX(-Math.PI/2);let t=new ve({uniforms:Object.assign({uGlow:{value:1}},Yt),side:le,vertexShader:"varying vec3 vW; varying vec2 vUv; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vUv = uv; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uGlow; varying vec3 vW; varying vec2 vUv; ${ki}
      void main(){ vec2 q = vUv * 2.0 - 1.0; float d = length(vec2(q.x * 1.3, q.y * 0.95)); if (d > 1.0 || (q.y > 0.78 && abs(q.x) < (q.y - 0.78) * 1.3)) discard;
        vec3 c = mix(vec3(0.95, 0.42, 0.55), vec3(1.0, 0.82, 0.86), smoothstep(-1.0, 0.5, q.y)); c *= 0.6 + uGlow * 1.6;
        gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),e=new Lt(i,t);e.scale.setScalar(.32),e.layers.set(1);let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(250,196,210,0.95)"),r.addColorStop(.22,"rgba(240,150,176,0.5)"),r.addColorStop(.55,"rgba(236,140,168,0.14)"),r.addColorStop(1,"rgba(236,140,168,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new zn(n);a.colorSpace=Ce;let o=new Ir(new Ws({map:a,transparent:!0,depthWrite:!1,opacity:.6,fog:!1}));return o.scale.setScalar(1/.32*2.1),o.layers.set(1),e.add(o),e.userData.halo=o,e}function Yd(i,t,e,n,s=34){let r=yn(5),a=new Float32Array(s*3),o=new Float32Array(s*3),l={};for(let d=0;d<s;d++){let g=e+(n-e)*(d+r()*.8)/s;i(g,l);let x=(r()*2-1)*(t(g)+5);a[d*3]=l.x-l.tz*x,a[d*3+1]=.5+r()*.7,a[d*3+2]=l.z+l.tx*x,o[d*3]=16+r()*16,o[d*3+1]=1.6+r()*1.6,o[d*3+2]=r()}let c=new rn(1,1),u=new os;u.setIndex(c.index),u.setAttribute("position",c.attributes.position),u.setAttribute("uv",c.attributes.uv),u.setAttribute("aC",new _n(a,3)),u.setAttribute("aS",new _n(o,3)),u.instanceCount=s;let f=new ve({uniforms:Object.assign({uLift:{value:0}},Yt),transparent:!0,depthWrite:!1,side:le,vertexShader:`attribute vec3 aC, aS; uniform float uLift, uTime; varying vec2 vUv; varying vec3 vW; varying float vSeed, vNear;
      void main(){ vec3 c = aC; c.y += uLift * (5.0 + aS.z * 4.0); c.x += sin(uTime * 0.05 + aS.z * 9.0) * 3.0;
        vec3 d = c - cameraPosition; d.y = 0.0; float L = length(d); vec3 rt = normalize(vec3(-d.z, 0.0, d.x)); vec3 wp = c + rt * position.x * aS.x + vec3(0.0, position.y * aS.y, 0.0);
        vUv = uv; vW = wp; vSeed = aS.z; vNear = 1.0; gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0); }`,fragmentShader:`uniform float uLift; varying vec2 vUv; varying vec3 vW; varying float vSeed, vNear; ${ki}
      float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h1(i), h1(i + vec2(1, 0)), f.x), mix(h1(i + vec2(0, 1)), h1(i + vec2(1, 1)), f.x), f.y); }
      void main(){ vec2 q = vUv; float t = uTime * 0.03;
        float n = vn(vec2(q.x * 3.0 + t + vSeed * 7.0, q.y * 1.2)) * 0.6 + vn(vec2(q.x * 7.0 - t * 1.7, q.y * 3.0 + vSeed * 3.0)) * 0.3 + vn(q * 15.0 + t) * 0.1;
        float shape = smoothstep(0.0, 0.3, q.y) * smoothstep(1.0, 0.45, q.y) * smoothstep(0.0, 0.25, q.x) * smoothstep(1.0, 0.75, q.x);
        float a = smoothstep(0.3, 0.75, n * shape * 1.25) * 0.42 * smoothstep(3.0, 12.0, length(vW - cameraPosition)) * (1.0 - uLift) * (1.0 - uLift); // \u9010\u50CF\u7D20\u6309\u8DDD\u79BB\u6DE1\u51FA\uFF1A\u96FE\u7247\u5F88\u5BBD\uFF0C\u6309\u9876\u70B9\u7B97\u4F1A\u5728\u8239\u91CC\u7CCA\u4E00\u7247
        if (a < 0.004) discard;
        vec3 V = normalize(vW - cameraPosition); float sd = max(dot(V, uSunDir), 0.0);
        vec3 col = uHaze * 1.04 + uSunCol * (pow(sd, 6.0) * 0.5 + 0.05);
        gl_FragColor = vec4(applyFog(col, vW), a); }`}),h=new Lt(u,f);return h.frustumCulled=!1,h.layers.set(1),h.renderOrder=5,h}var vi=2,yi=5.4,Jd=i=>.64*Math.pow(Math.sin(Math.PI*(.07+.86*i)),.62),Rl=i=>.48+.42*Math.pow(i,3.2)+.14*Math.pow(1-i,3),$d=i=>-.2+.32*Math.pow(Math.abs(2*i-1),4);function dn(i,t){let e=Jd(i),n=Rl(i),s=$d(i),r=Math.abs(t)*Math.PI/2;return[Math.sign(t)*e*Math.pow(Math.sin(r),.7),s+(n-s)*(1-Math.cos(r)),vi-yi*i]}function Zd(i,t){let e=new je({color:i,roughness:.82,metalness:0,side:le});return Te(e,n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWood;`).replace("#include <uv_vertex>",`#include <uv_vertex>
 vWood = uv;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec2 vWood; float wh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float wn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(wh(i), wh(i+vec2(1,0)), f.x), mix(wh(i+vec2(0,1)), wh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
      { float plank = floor(vWood.y * 7.0); float seam = smoothstep(0.035, 0.0, abs(fract(vWood.y * 7.0) - 0.5) - 0.465);
        float grain = wn(vec2(vWood.x * 3.0, vWood.y * 60.0 + plank * 3.1)) * 0.6 + wn(vec2(vWood.x * 22.0, vWood.y * 200.0)) * 0.4;
        diffuseColor.rgb *= (0.78 + 0.32 * grain) * (0.9 + 0.2 * wh(vec2(plank, 3.0)));
        diffuseColor.rgb *= 1.0 - seam * 0.55;
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.7, 0.75, 0.7), smoothstep(0.3, 0.8, wn(vWood * vec2(4.0, 10.0))) * 0.3); }`)},t),e}function Kd(){let i=new Le,t=48,e=20,n=[],s=[],r=[];for(let u=0;u<=t;u++)for(let f=0;f<=e;f++){let h=u/t,d=f/e*2-1;n.push(...dn(h,d)),s.push(h*4,(d+1)/2)}for(let u=0;u<t;u++)for(let f=0;f<e;f++){let h=u*(e+1)+f,d=h+e+1;r.push(h,d,h+1,h+1,d,d+1)}let a=new Zt;a.setAttribute("position",new Ct(n,3)),a.setAttribute("uv",new Ct(s,2)),a.setIndex(r),a.computeVertexNormals();let o=Zd(7229496,"wood"),l=Zd(4863527,"wood2"),c=new Lt(a,o);c.name="hull",i.add(c);for(let u of[-1,1]){let f=[];for(let d=0;d<=40;d++){let g=d/40,x=dn(g,u);f.push(new L(x[0],x[1]+.02,x[2]))}let h=new qs(new mi(f),80,.045,8,!1);i.add(new Lt(h,l))}for(let u of[.42,.66,.84]){let f=dn(u,1),h=f[0]*2-.04,d=new Lt(new Hn(h,.05,.24),l);d.position.set(0,f[1]-.12,f[2]),i.add(d)}{let f=[],h=[],d=[],g=0;for(let p=0;p<=60;p++){let S=p/60;if($d(S)>.06-.01)continue;let A=0,v=1;for(let M=0;M<24;M++){let w=(A+v)/2;dn(S,w)[1]<.06?A=w:v=w}let T=dn(S,A);if(f.push(-T[0],.06,T[2],T[0],.06,T[2]),h.push(S*4,0,S*4,1),g>0){let M=(g-1)*2;d.push(M,M+2,M+1,M+1,M+2,M+3)}g++}let x=new Zt;x.setAttribute("position",new Ct(f,3)),x.setAttribute("uv",new Ct(h,2)),x.setIndex(d),x.computeVertexNormals();let m=new Lt(x,o);m.name="floor",i.add(m)}for(let u of[0,1]){let f=[0,Rl(u)-.01,vi-yi*u],h=[...f],d=[],g=24;for(let S=0;S<=g;S++){let A=dn(u,S/g*2-1);h.push(A[0],A[1],A[2]),S>0&&d.push(0,S,S+1)}let x=new Zt;x.setAttribute("position",new Ct(h,3)),x.setAttribute("uv",new Ct(new Array(h.length/3*2).fill(0).map((S,A)=>A%2?h[(A>>1)*3+1]:h[(A>>1)*3]+.5),2)),x.setIndex(d),x.computeVertexNormals();let m=new Lt(x,l);m.name="noShadow",i.add(m);let p=new Lt(new Hn(Jd(u)*2+.1,.06,.16),l);p.position.set(0,Rl(u)+.01,vi-yi*u+(u?.05:-.05)),p.name="noShadow",i.add(p)}{let f=vi-yi*.84+.12,h=Rl(.84)-.12+.025,d=(vi-f)/yi,g=(b,R)=>{let D=0,I=1;for(let U=0;U<22;U++){let P=(D+I)/2;dn(b,P)[1]<R?D=P:I=P}return dn(b,D)[0]},x=[],m=[],p=0;for(let b=0;b<=16;b++){let R=d+(1-d)*b/16,D=g(R,h),I=vi-yi*R;if(x.push(-D,h,I,D,h,I),p){let U=(p-1)*2;m.push(U,U+2,U+1,U+1,U+2,U+3)}p++}let S=new Zt;S.setAttribute("position",new Ct(x,3)),S.setAttribute("uv",new Ct(x.map((b,R)=>R%3===0?b+.5:R%3===2?b*.5:null).filter(b=>b!==null),2)),S.setIndex(m),S.computeVertexNormals();let A=new Lt(S,o);A.name="noShadow",i.add(A);let v=[0,h,f],T=[],M=20;for(let b=0;b<=M;b++){let R=b/M*2-1,D=0,I=1;for(let P=0;P<22;P++){let O=(D+I)/2;dn(d,O)[1]<h?D=O:I=O}let U=dn(d,Math.sign(R)*Math.abs(R)*D);v.push(U[0],U[1],f),b&&T.push(0,b,b+1)}let w=new Zt;w.setAttribute("position",new Ct(v,3)),w.setAttribute("uv",new Ct(v.map((b,R)=>R%3===0?b+.5:R%3===1?b*2:null).filter(b=>b!==null),2)),w.setIndex(T),w.computeVertexNormals();let _=new Lt(w,l);_.name="noShadow",i.add(_),i.userData.deckY=h}{let u=new rs(.017,.021,4.6,10,1);u.rotateX(Math.PI/2);let f=Te(new je({color:5986874,roughness:.5}),d=>{d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBu;`).replace("#include <uv_vertex>",`#include <uv_vertex>
 vBu = uv;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vBu;`).replace("#include <color_fragment>",`#include <color_fragment>
        { float f = fract(vBu.y * 11.0); float node = smoothstep(0.03, 0.0, abs(f - 0.5) - 0.47); diffuseColor.rgb *= (0.82 + 0.18 * smoothstep(0.0, 0.5, f)) * (1.0 - node * 0.45); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.08, 1.0, 0.8), smoothstep(0.3, 0.7, sin(vBu.y * 37.0) * 0.5 + 0.5) * 0.25); }`)},"bamboo"),h=new Lt(u,f);h.position.set(.47,.58,.1),h.rotation.y=-.05,h.rotation.x=-.035,i.add(h)}{let u=document.createElement("canvas");u.width=u.height=128;let f=u.getContext("2d");f.clearRect(0,0,128,128),f.strokeStyle="#fff",f.lineWidth=6.5,f.lineCap="round";for(let M=-2;M<=2;M++)f.beginPath(),f.moveTo(M*64-16,-16),f.lineTo(M*64+144,144),f.stroke(),f.beginPath(),f.moveTo(M*64+144,-16),f.lineTo(M*64-16,144),f.stroke();f.fillStyle="#fff";for(let[M,w]of[[0,0],[64,64],[128,0],[0,128],[128,128],[64,0],[0,64],[64,128],[128,64]])(M+w)%128!==64&&(f.beginPath(),f.arc(M,w,7,0,7),f.fill());let h=new zn(u);h.wrapS=h.wrapT=es,h.repeat.set(8,6),h.anisotropy=4;let d=Te(new je({color:5194550,alphaMap:h,alphaTest:.35,side:le,roughness:1}),null,"net");d.alphaToCoverage=!0;let g=M=>{let w=Math.sin(M*91.7)*43758.5453;return w-Math.floor(w)},x=new Le,m=.585,p=vi-yi*m;for(let M=0;M<6;M++){let w=1.15-M*.13,_=.85-M*.09,b=new rn(w,_,46,34);b.rotateX(-Math.PI/2);let R=b.attributes.position;for(let I=0;I<R.count;I++){let U=R.getX(I),P=R.getZ(I),O=(U/(w*.42))**2+(P/(_*.42))**2,k=(.07+M*.04)*Math.exp(-O*1.4)+.03*Math.sin(U*17+M*2+Math.sin(P*9)*2)*Math.cos(P*13-M)*Math.exp(-O*.7)+.012*Math.sin(U*41+P*23);R.setXYZ(I,U+.03*Math.sin(P*11+M),Math.max(k,.002+M*.004),P+.03*Math.cos(U*9-M))}b.computeVertexNormals();let D=new Lt(b,d);D.rotation.y=(g(M+1)-.5)*1.2,D.position.set((g(M+7)-.5)*.12,0,(g(M+13)-.5)*.1),x.add(D)}let S=Te(new je({color:11045468,roughness:.85}),null,"cork"),A=new rs(.032,.032,.075,10);A.rotateZ(Math.PI/2);let v=[];for(let M=0;M<7;M++){let w=-2.3+M*.62,_=.43+.05*Math.sin(M*2.1),b=Math.cos(w)*_*1.1,R=Math.sin(w)*_*.8,D=new Lt(A,S);D.position.set(b,.035+.02*Math.sin(M),R),D.rotation.y=-w+Math.PI/2,x.add(D),v.push(new L(b,.03,R))}let T=new qs(new mi(v),60,.008,5,!1);x.add(new Lt(T,Te(new je({color:6048826,roughness:1}),null,"rope"))),x.position.set(.12,.062,p),x.rotation.y=.25,x.scale.set(.85,1,.85),i.add(x)}{let u=document.createElement("canvas");u.width=128,u.height=128;let f=u.getContext("2d");f.fillStyle="#3a2f22",f.fillRect(0,0,128,128);for(let p=0;p<16;p++)for(let S=0;S<16;S++){let A=(p+S)%2,v=120+(p*37+S*11)%23*2;f.fillStyle=`rgb(${v+18},${v},${v-38})`,A?f.fillRect(S*8+.5,p*8+1,7,6):f.fillRect(S*8+1.5,p*8+.5,5,7)}let h=new zn(u);h.colorSpace=Ce,h.wrapS=h.wrapT=es,h.repeat.set(5,3);let d=[[.001,0],[.1,0],[.145,.04],[.165,.12],[.15,.2],[.105,.26],[.075,.29],[.072,.31],[.09,.335],[.085,.34],[.066,.315]].map(([p,S])=>new st(p,S)),g=new Br(d,28),x=new Lt(g,Te(new je({map:h,roughness:.9,side:le,color:12101258}),null,"basket"));x.position.set(-.32,.06,vi-yi*.6),x.rotation.set(.05,.4,-.08),i.add(x)}{let u=Te(new je({color:6048826,roughness:1}),null,"rope"),f=dn(.95,0);for(let h=0;h<3;h++){let d=new Or(.12-h*.012,.016,6,22);d.rotateX(Math.PI/2);let g=new Lt(d,u);g.position.set(.06+h*.006,i.userData.deckY+.016+h*.03,f[2]+.22),i.add(g)}}{let u=document.createElement("canvas");u.width=u.height=64;let f=u.getContext("2d"),h=f.createRadialGradient(32,40,2,32,34,30);h.addColorStop(0,"#f8cbd6"),h.addColorStop(.6,"#ee9fb5"),h.addColorStop(1,"#d9768f"),f.fillStyle=h,f.beginPath(),f.moveTo(32,62),f.bezierCurveTo(6,48,4,14,22,4),f.lineTo(32,12),f.lineTo(42,4),f.bezierCurveTo(60,14,58,48,32,62),f.fill();let d=new zn(u);d.colorSpace=Ce;let g=Te(new je({map:d,alphaTest:.5,side:le,roughness:.75,emissive:15902904,emissiveIntensity:.05}),null,"bpetal"),x=520,m=new rn(.046,.04);m.rotateX(-Math.PI/2);let p=new ln(m,g,x),S=new Gt,A=new He,v=new Ke,T=new L,M=new L,w=_=>{let b=Math.sin(_*12.9898+4.1)*43758.5453;return b-Math.floor(b)};for(let _=0;_<x;_++){let b,R,D,I=w(_),U=w(_+1e3);if(w(_+2e3)<.12){let k=[.42,.66,.84][_%3],G=dn(k,1);b=(I-.5)*(G[0]*2-.1),R=G[1]-.12+.026,D=G[2]+(U-.5)*.2}else{let k=.2+U*.72,G=0,$=1;for(let K=0;K<16;K++){let tt=(G+$)/2;dn(k,tt)[1]<.062?G=tt:$=tt}let X=dn(k,G)[0];b=(I*2-1)*X*.92,R=.064,D=vi-yi*k}v.set((w(_+3e3)-.5)*.5,w(_+4e3)*6.28,(w(_+5e3)-.5)*.5),A.setFromEuler(v);let O=.8+w(_+6e3)*.6;S.compose(T.set(b,R,D),A,M.set(O,O,O)),p.setMatrixAt(_,S)}p.count=0,p.name="boatPetals",p.frustumCulled=!1,i.add(p),i.userData.petals=p}return i.traverse(u=>{u.isMesh&&(u.castShadow=u.name!=="boatPetals"&&u.name!=="noShadow",u.receiveShadow=!0)}),i}var jd=new L(0,1.12,.95);var oa=[0,.3,.62,1],S_=.84;function b_(){let i=new Zt,t=oa.length*4;i.setAttribute("position",new Me(new Float32Array(t*3),3)),i.setAttribute("normal",new Me(new Float32Array(t*3),3));let e=[];for(let n=0;n<2;n++){let s=n*oa.length*2;for(let r=0;r<oa.length-1;r++){let a=s+r*2,o=a+2;e.push(a,o,a+1,a+1,o,o+1)}}return i.setIndex(e),i.boundingSphere=new jn(new L,1.2),i}function E_(i,t){let e=i.attributes.position.array,n=i.attributes.normal.array,s=0;for(let r of[-1,1]){let a=.05,o=0,l=0;for(let c=0;c<oa.length;c++){let u=oa[c],f=t*(.65+.75*u);if(c>0){let x=(u-l)*S_;a+=Math.cos(f)*x,o+=Math.sin(f)*x}l=u;let h=u*u*.1,d=-.11+.07*u+h,g=.17-.06*u+h;for(let x of[d,g])e[s*3]=r*a,e[s*3+1]=o,e[s*3+2]=x,n[s*3]=-r*Math.sin(f),n[s*3+1]=Math.cos(f),n[s*3+2]=0,s++}}i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0}function Qd(i=3){let t=new Le;t.name="egrets";let e=Te(new Rn({color:16052972,side:le}),null,"egret"),n=Te(new Rn({color:14069324}),null,"egretB"),s=Te(new Rn({color:3026730}),null,"egretL"),r=new gi(1,12,8);r.scale(.068,.072,.3),r.translate(0,0,.03);let a=new gi(1,10,8);a.scale(.045,.05,.1),a.translate(0,.045,-.25);let o=new gi(.047,10,8);o.translate(0,.06,-.33);let l=new Ur(.011,.16,6);l.rotateX(-Math.PI/2),l.translate(0,.052,-.44);let c=new Hn(.013,.013,.42);c.translate(0,-.01,.5);let u=[];for(let g=0;g<i;g++){let x=new Le,m=b_();x.add(new Lt(r,e),new Lt(a,e),new Lt(o,e),new Lt(l,n),new Lt(m,e));for(let p of[-.022,.022]){let S=new Lt(c,s);S.position.x=p,x.add(S)}x.scale.setScalar(1.25+g*.05),x.userData.wing=m,t.add(x),u.push(x)}let f=[{T0:3.2,D:10,dir:1,ahead:27,h:2.3},{T0:12.6,D:11,dir:-1,ahead:33,h:3},{T0:13.5,D:11,dir:-1,ahead:37.5,h:3.6}],h={},d=3;return t.userData.update=(g,x,m,p)=>{t.visible=m<.6,t.visible&&u.forEach((S,A)=>{let v=f[A],T=(x-v.T0)/v.D;if(S.visible=T>-.04&&T<1.04,!S.visible)return;let M=p(v.T0)+v.ahead+(x-v.T0)*d;un(M,h);let w=Sn(M)+8,_=v.dir*(T*2-1)*w,b=v.dir*2*w/v.D,R=ce(-.75,-.1,Math.sin(g*.45+A*2.1)),D=g*14.4+A*1.9,I=v.h+.7*Math.sin(Math.PI*me(T,0,1))+R*.035*Math.sin(D+1.6);S.position.set(h.x-h.tz*_,I,h.z+h.tx*_);let U=h.tx*d-h.tz*b,P=h.tz*d+h.tx*b;S.rotation.set(.05,Math.atan2(-U,-P),.07*Math.sin(g*.7+A),"YXZ"),E_(S.userData.wing,.07+R*(.16+.52*Math.sin(D)))})},t}var T_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function w_(){let i=new Zt;return i.setAttribute("position",new Ct([-1,-1,0,3,-1,0,-1,3,0],3)),i.setAttribute("uv",new Ct([0,0,2,0,0,2],2)),i}var Cl=(i,t,e=0,n=!1)=>new Oe(Math.max(1,i),Math.max(1,t),{type:Ge,samples:e,depthBuffer:n,stencilBuffer:!1,minFilter:Se,magFilter:Se,generateMipmaps:!1}),Il=class{constructor(t){this.r=t,this.cam=new Fi(-1,1,1,-1,0,1),this.mesh=new Lt(w_()),this.mesh.frustumCulled=!1,this.sc=new ns,this.sc.add(this.mesh);let e=(n,s)=>new ve({vertexShader:T_,fragmentShader:n,uniforms:s,depthTest:!1,depthWrite:!1});this.mBright=e(`uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThr; varying vec2 vUv;
      void main(){ vec3 c = (texture2D(tSrc, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, -0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, 0.5)).rgb) * 0.25;
        float l = max(c.r, max(c.g, c.b)); float k = 0.5 * uThr; float s = clamp(l - uThr + k, 0.0, 2.0 * k); s = s * s / (4.0 * k + 1e-4); float w = max(s, l - uThr) / max(l, 1e-4);
        gl_FragColor = vec4(min(c * w, vec3(12.0)), 1.0); }`,{tSrc:{value:null},uTexel:{value:new st},uThr:{value:.9}}),this.mDown=e(`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
      void main(){ vec3 c = texture2D(tSrc, vUv).rgb * 0.5 + (texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb) * 0.125; gl_FragColor = vec4(c, 1.0); }`,{tSrc:{value:null},uTexel:{value:new st}}),this.mUp=e(`uniform sampler2D tSrc, tAdd; uniform vec2 uTexel; varying vec2 vUv;
      void main(){ vec3 c = (texture2D(tSrc, vUv + uTexel * vec2(-1.0, 0.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 0.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.0, 1.0)).rgb) * 0.25;
        gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0); }`,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new st}}),this.mFinal=e(`uniform sampler2D tScene, tBloom, tBright, tRays; uniform vec2 uRes, uSunUv; uniform float uTime, uExpo, uBloom, uRays, uFade, uWarm, uSat;
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
        gl_FragColor = vec4(col, 1.0); }`,{tScene:{value:null},tBloom:{value:null},tBright:{value:null},tRays:{value:null},uRes:{value:new st},uSunUv:{value:new st(.5,.5)},uTime:{value:0},uExpo:{value:1},uBloom:{value:.35},uRays:{value:0},uFade:{value:0},uWarm:{value:1},uSat:{value:1.12}}),this.mRays=e(`uniform sampler2D tBright; uniform vec2 uSunUv; varying vec2 vUv;
      void main(){ vec2 d = (vUv - uSunUv) / 48.0; vec2 q = vUv; float w = 1.0; vec3 acc = vec3(0.0); for (int i = 0; i < 48; i++) { q -= d; acc += texture2D(tBright, q).rgb * w; w *= 0.955; } gl_FragColor = vec4(acc / 48.0, 1.0); }`,{tBright:{value:null},uSunUv:{value:new st(.5,.5)}}),this.levels=5}setSize(t,e,n,s){this.w=t,this.h=e;let r=Math.round(t*n),a=Math.round(e*n);this.scene&&(this.scene.dispose(),this.bloom.forEach(c=>c.dispose()),this.ups.forEach(c=>c.dispose()),this.raysRT.dispose()),this.scene=Cl(r,a,s,!0),this.bloom=[],this.ups=[];let o=r>>1,l=a>>1;for(let c=0;c<this.levels;c++)this.bloom.push(Cl(o,l)),this.ups.push(Cl(o,l)),o=Math.max(1,o>>1),l=Math.max(1,l>>1);this.raysRT=Cl(Math.max(1,r>>2),Math.max(1,a>>2)),this.mFinal.uniforms.uRes.value.set(t,e)}pass(t,e){this.mesh.material=t,this.r.setRenderTarget(e),this.r.render(this.sc,this.cam)}render(t,e,n){let s=this.r;s.setRenderTarget(this.scene),s.clear(),s.render(t,e);let r=this.mBright.uniforms;r.tSrc.value=this.scene.texture,r.uTexel.value.set(1/this.scene.width,1/this.scene.height),r.uThr.value=n.thr,this.pass(this.mBright,this.bloom[0]);for(let l=1;l<this.levels;l++){let c=this.mDown.uniforms;c.tSrc.value=this.bloom[l-1].texture,c.uTexel.value.set(1/this.bloom[l-1].width,1/this.bloom[l-1].height),this.pass(this.mDown,this.bloom[l])}let a=this.bloom[this.levels-1];for(let l=this.levels-2;l>=0;l--){let c=this.mUp.uniforms;c.tSrc.value=a.texture,c.tAdd.value=this.bloom[l].texture,c.uTexel.value.set(1/a.width,1/a.height),this.pass(this.mUp,this.ups[l]),a=this.ups[l]}if(n.rays>0){let l=this.mRays.uniforms;l.tBright.value=this.bloom[1].texture,l.uSunUv.value.copy(n.sunUv),this.pass(this.mRays,this.raysRT)}let o=this.mFinal.uniforms;o.tRays.value=this.raysRT.texture,o.tScene.value=this.scene.texture,o.tBloom.value=a.texture,o.tBright.value=this.bloom[1].texture,o.uTime.value=n.time,o.uExpo.value=n.expo,o.uBloom.value=n.bloom,o.uRays.value=n.rays,o.uSunUv.value.copy(n.sunUv),o.uFade.value=n.fade,o.uWarm.value=n.warm,o.uSat.value=n.sat,this.pass(this.mFinal,null)}};var En=new URLSearchParams(location.search),A_=+(En.get("ready")||40),Ah=En.has("diag"),lr=En.has("bench"),bn=+(En.get("cam")||0),R_=En.has("t")?+En.get("t"):null,C_=En.has("notext"),I_=/iPhone|iPad|Android/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.userAgent),tf={high:{mp:3.4,msaa:4,shadow:2048,refl:.5,grass:1},mid:{mp:1.8,msaa:4,shadow:1024,refl:.4,grass:.7},low:{mp:1,msaa:2,shadow:1024,refl:.33,grass:.45}},Wt=window.__diag={ready:!1,version:"v2-s3.2",tier:"",fps:0,ms:0,res:[0,0],scale:1,dpr:devicePixelRatio,gpu:"",cam:bn,t:0,s:0,draws:0,tris:0,errors:[]};window.addEventListener("error",i=>Wt.errors.push(String(i.message).slice(0,300)));var Zi=document.getElementById("c"),pn=new Sl({canvas:Zi,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1});pn.setPixelRatio(1);pn.shadowMap.enabled=!0;pn.shadowMap.type=ls;pn.info.autoReset=!1;{let i=pn.getContext(),t=i.getExtension("WEBGL_debug_renderer_info");Wt.gpu=t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER)}var zl=En.get("q")||(I_?"mid":"high"),gs=tf[zl]||tf.high;Wt.tier=zl;var P_=/Intel/i.test(Wt.gpu)&&!/Arc/i.test(Wt.gpu),Xe=new ns,be=new $e(52,1,.05,9e3);be.layers.enable(1);var Wn=new Gr(16777215,3);Wn.castShadow=!0;Wn.shadow.mapSize.set(gs.shadow,gs.shadow);Object.assign(Wn.shadow.camera,{left:-42,right:42,top:42,bottom:-42,near:1,far:400});Wn.shadow.bias=-5e-4;Wn.shadow.normalBias=.05;Xe.add(Wn,Wn.target);var lf=new Vr(16777215,4473924,1);Xe.add(lf);Xe.add(Pd());var L_=performance.now(),Rh=zd(),fa=Fd(Rh),cf=Te(new je({vertexColors:!0,roughness:.97,metalness:0}),i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGW;`).replace("#include <fog_vertex>",`#include <fog_vertex>
 vGW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
    varying vec3 vGW; float gh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
    { float n = gn(vGW.xz * 0.9) * 0.5 + gn(vGW.xz * 3.7) * 0.3 + gn(vGW.xz * 11.0) * 0.2; diffuseColor.rgb *= 0.8 + 0.4 * n; }`)},"ground"),Ch=new Lt(fa.near,cf);Ch.receiveShadow=!0;Xe.add(Ch);var hf=new Lt(fa.far,cf);Xe.add(hf);var uf=Hd(Rh);Xe.add(uf);var Ih=kd(Rh);Xe.add(Ih.group);var df=fa.near.userData.rect,xs=null,Fl=Mh(),Sh=Mh(Math.round(420*gs.grass),[11,7,13],.055,23),Bl=Xd(fa.heightTex,df),ai=qd();Xe.add(Fl,Sh,Bl,ai);var ha=Yd(un,Sn,re.start-10,re.act2+50);ha.name="mist";Xe.add(ha);var Mi=Kd();Xe.add(Mi);var or=Qd();Xe.add(or);Fl.name="falling",Bl.name="floating",ai.name="guide";Wt.buildMs=Math.round(performance.now()-L_);var ff=En.has("passes"),ua={};if(ff){let i=pn.renderBufferDirect.bind(pn);pn.renderBufferDirect=function(t,e,n,s,r,a){let o=t===be?"main":t.isOrthographicCamera?t.right-t.left>10?"shadow":"post":"refl",l=n.index?n.index.count:n.attributes.position.count,c=r.isInstancedMesh?r.count:n.isInstancedBufferGeometry?n.instanceCount:1,u=ua[o]||(ua[o]={draws:0,tris:0});return u.draws++,u.tris+=Math.round(l/3*(c===1/0?1:c)),i(t,e,n,s,r,a)}}window.__pass=()=>window.__passLast||null;window.__tris=()=>{let i={};Xe.children.forEach((e,n)=>{let s=0;e.traverse(r=>{if(!r.isMesh&&!r.isInstancedMesh)return;let a=r.geometry,o=(a.index?a.index.count:a.attributes.position.count)/3,l=r.isInstancedMesh?r.count:a.isInstancedBufferGeometry?a.instanceCount:1;s+=o*(l===1/0?1:l)}),i[(e.name||e.type)+"#"+n]=Math.round(s)});let t={};return Xe.traverse(e=>{if(!e.isMesh||!e.name)return;let n=e.geometry,s=(n.index?n.index.count:n.attributes.position.count)/3;t[e.name]=(t[e.name]||0)+Math.round(s*(e.isInstancedMesh?e.count:1))}),i.by=t,i};var pf=new Il(pn),Wi=1,Xi=1,ps=1;function da(){let i=Math.min(devicePixelRatio||1,2);Wi=Math.round(innerWidth*i),Xi=Math.round(innerHeight*i),pn.setSize(Wi,Xi,!1),Zi.style.width=innerWidth+"px",Zi.style.height=innerHeight+"px",ps=me(Math.sqrt(gs.mp*1e6/(Wi*Xi)),.4,1)*qi,pf.setSize(Wi,Xi,ps,gs.msaa);let t=Math.round(Wi*ps*gs.refl),e=Math.round(Xi*ps*gs.refl);xs?xs.setRes(t,e):(xs=Gd(fa.heightTex,df,t,e),Xe.add(xs)),be.aspect=Wi/Xi,be.fov=Wi/Xi<.8?68:52,be.updateProjectionMatrix(),Wt.res=[Math.round(Wi*ps),Math.round(Xi*ps)],Wt.scale=+ps.toFixed(3)}var qi=P_&&!En.get("q")&&!lr&&!bn?.8:1,Pl=0;da();addEventListener("resize",da);xs.name="water";Ch.name="near";hf.name="far";Ih.group.name="grass";if(En.get("hide"))for(let i of En.get("hide").split(","))Xe.traverse(t=>{t.name===i&&(t.visible=!1)});var D_=i=>i<30?4.3:ze(4.6,2.6,ce(30,82,i)),bh=[];{let i=re.start;for(let t=0;t<=1e3;t++)bh.push(i),i+=D_(t*.1)*.1}var ef=i=>{let t=me(i*10,0,999.999),e=Math.floor(t);return ze(bh[e],bh[e+1],t-e)},Ll=84,Ol=document.getElementById("end"),cr=!1,nf=0;document.getElementById("again").addEventListener("click",()=>{cr&&(fn=0,cr=!1,Ol.classList.remove("on"),Ol.setAttribute("aria-hidden","true"))});var Eh={1:{T:8,yaw:0,pitch:-.07},2:{T:22,yaw:.3,pitch:-.2},3:{T:29,yaw:-.05,pitch:-.01},4:{T:46,yaw:.02,pitch:-.03},5:{T:58,yaw:1,pitch:-.1},6:{T:80,yaw:0,pitch:.02}},Hl=0,Vl=0,Yi=null;Zi.addEventListener("pointerdown",i=>{Yi={x:i.clientX,y:i.clientY,yaw:Hl,pitch:Vl},Zi.setPointerCapture(i.pointerId)});Zi.addEventListener("pointermove",i=>{if(!Yi)return;let t=2.2/Math.min(innerWidth,innerHeight);Hl=me(Yi.yaw-(i.clientX-Yi.x)*t,-1.6,1.6),Vl=me(Yi.pitch-(i.clientY-Yi.y)*t,-.5,.45)});Zi.addEventListener("pointerup",()=>Yi=null);Zi.addEventListener("pointercancel",()=>Yi=null);var sf=document.getElementById("txt"),rf=document.getElementById("seal"),U_=[{a:1,T0:2,T1:26,seal:"\u4E00 \xB7 \u7F18\u6EAA",text:"\u664B\u592A\u5143\u4E2D\uFF0C\u6B66\u9675\u4EBA\u6355\u9C7C\u4E3A\u4E1A\u3002\u7F18\u6EAA\u884C\uFF0C\u5FD8\u8DEF\u4E4B\u8FDC\u8FD1\u3002"},{a:2,T0:32,T1:79,seal:"\u4E8C \xB7 \u6843\u6797",text:"\u5FFD\u9022\u6843\u82B1\u6797\uFF0C\u5939\u5CB8\u6570\u767E\u6B65\uFF0C\u4E2D\u65E0\u6742\u6811\uFF0C\u82B3\u8349\u9C9C\u7F8E\uFF0C\u843D\u82F1\u7F24\u7EB7\u3002"}],af=null;function N_(i){if(C_)return;let t=U_.find(n=>i>=n.T0&&i<=n.T1)||null;t!==af&&(af=t,t&&(rf.textContent=t.seal,sf.textContent=t.text));let e=t?Math.min(1,(i-t.T0)/1.5,(t.T1-i)/1.5):0;sf.style.opacity=rf.style.opacity=bn?t?1:0:me(e,0,1)}var ms={},Dn={},rr=new L,la=new L,Dl=new st,of=new Ke(0,0,0,"YXZ"),ri={done:lr||bn||En.has("nocalib"),n:0,acc:0},ar=null,fn=bn?Eh[bn].T:R_??0,We=0,Th=performance.now(),Ul=0,ca=0,Nl=0,mf=[];bn&&(Hl=Eh[bn].yaw,Vl=Eh[bn].pitch);function wh(i){let t=Math.min(.1,(i-Th)/1e3);if(Th=i,Ul++,pn.info.reset(),ff&&(window.__passLast=ua,ua={}),We+=t,!bn&&!cr&&(fn+=lr?t*3:t),!bn&&!lr&&!cr&&fn>Ll+2&&(cr=!0,nf=0,Ol.classList.add("on"),Ol.setAttribute("aria-hidden","false")),cr&&++nf>3){requestAnimationFrame(wh);return}let e=ef(fn);Yt.uTime.value=We,Yt.uBoatS.value=e,Wt.t=+fn.toFixed(2),Wt.s=+e.toFixed(1),Yt.uBloomFront.value=e+42+Math.max(0,e-250)*3.2;let n=ce(re.act2-30,re.act2+60,e),s=Math.sin(e*.045)*.9+Math.sin(e*.013+1)*1.1;un(e,ms),un(e+7,Dn);let r=ms.x-ms.tz*s,a=ms.z+ms.tx*s,o=Dn.x-r,l=Dn.z-a,c=Math.atan2(-o,-l);Mi.position.set(r,.03*Math.sin(We*1.3)-.02,a),Mi.rotation.set(.012*Math.sin(We*1.1+1),c,.018*Math.sin(We*.9),"YXZ"),Mi.updateMatrixWorld(),be.position.copy(jd).applyMatrix4(Mi.matrixWorld),ar=ar===null?c:ar+Math.atan2(Math.sin(c-ar),Math.cos(c-ar))*Math.min(1,t*.5),Ld(ar),Dd(n,Wn,lf),Yt.uPeach.value=n,of.set(-.05+Vl+Mi.rotation.x*.5,c+Hl,Mi.rotation.z*.4),be.quaternion.setFromEuler(of),be.updateMatrixWorld(),be.getWorldDirection(rr),Yt.uCam.value.copy(be.position),uf.userData.lod(be.position),Ih.group.userData.lod(be.position),la.copy(be.position).addScaledVector(rr.clone().setY(0).normalize(),26),Wn.target.position.copy(la),Wn.position.copy(la).addScaledVector(Yt.uSunDir.value,200),Wn.target.updateMatrixWorld(),Yt.uSunView.value.copy(Yt.uSunDir.value).transformDirection(be.matrixWorldInverse);let u=ce(re.act2-25,re.act2+40,e);Fl.material.uniforms.uDensity.value=u,Fl.material.uniforms.uFwd.value.copy(rr).setY(0).normalize(),Sh.material.uniforms.uDensity.value=u*.9,Sh.material.uniforms.uFwd.value.copy(rr).setY(0).normalize(),ha.material.uniforms.uLift.value=ce(re.act2-20,re.act2+45,e),ha.visible=ha.material.uniforms.uLift.value<.995,Bl.material.uniforms.uDensity.value=.04+u*.96,Bl.material.uniforms.uFwd.value.copy(rr).setY(0).normalize();{let x=e+14+Math.sin(We*.3)*.8;un(x,Dn);let m=ce(26,31,fn),p=-Math.sin(c),S=-Math.cos(c),A=la.copy(Mi.position).add(new L(p*15.5+S*2.9,0,S*15.5-p*2.9)),v=-Dn.tz,T=Dn.tx,M=Sn(x)-1.2,w=me((A.x-Dn.x)*v+(A.z-Dn.z)*T+Math.sin(We*.37)*.35,-M,M);ai.position.set(Dn.x+v*w,.03+m*(2.5+Math.sin(We*2)*.3),Dn.z+T*w),ai.position.addScaledVector(new L(Dn.tx,0,Dn.tz),m*12),ai.rotation.set(.55+.1*Math.sin(We*1.3)+m*Math.sin(We*3)*.8,We*.2,.2*Math.sin(We*.9)+m*Math.cos(We*2.5)*.6),ai.visible=fn<33,ai.material.uniforms.uGlow.value=.75+.25*Math.sin(We*2)+(1-n)*.3,ai.userData.halo.material.opacity=(.55+.15*Math.sin(We*2))*(1-ce(28,33,fn))}{let x=ai.position.clone().project(be);Wt.guide=[+x.x.toFixed(3),+x.y.toFixed(3),+x.z.toFixed(4),+ai.position.distanceTo(be.position).toFixed(1)]}if(or.userData.update(We,fn,n,ef),or.visible&&or.children[0].visible){let x=or.children[0].position.clone().project(be);Wt.egret=[+x.x.toFixed(3),+x.y.toFixed(3),+or.children[0].position.distanceTo(be.position).toFixed(1)]}Mi.userData.petals.count=Math.floor(520*ce(re.act2-10,re.act2+170,e)),xs&&xs.material.uniforms.uBoat.value.set(r,a,ms.tx,ms.tz);let f=la.copy(be.position).addScaledVector(Yt.uSunDir.value,1e3).project(be);Dl.set(f.x*.5+.5,f.y*.5+.5);let h=me(rr.dot(Yt.uSunDir.value)*1.6,0,1),d=1-ce(.6,1.4,Math.max(Math.abs(f.x),Math.abs(f.y)));Wt.sun=[+Dl.x.toFixed(3),+Dl.y.toFixed(3),+h.toFixed(2),+d.toFixed(2)];let g=bn?0:Math.max(1-ce(0,1.6,fn),ce(Ll,Ll+1.5,fn));if(pf.render(Xe,be,{thr:1,expo:ze(1.08,1,n),bloom:ze(.18,.32,n),rays:n*h*d*.75,sunUv:Dl,time:We,fade:g,warm:n,sat:ze(.95,1.12,n)}),N_(fn),ca+=t,Nl++,ca>.5&&(Wt.fps=+(Nl/ca).toFixed(1),Wt.ms=+(ca/Nl*1e3).toFixed(2),ca=0,Nl=0,Wt.draws=pn.info.render.calls,Wt.tris=pn.info.render.triangles,Ah&&(Ph.textContent=`${Wt.gpu}
${Wt.res.join("\xD7")} \xD7${Wt.scale} ${zl}  ${Wt.fps} fps  ${Wt.ms} ms
T ${Wt.t}  s ${Wt.s}  draws ${Wt.draws}  tris ${Wt.tris}  calib ${Wt.calib??"-"}`)),!ri.done&&(Ul>8&&(ri.acc+=t,ri.n++),ri.n>=24)){let x=ri.acc/ri.n*1e3;ri.ms=+x.toFixed(1),Wt.calib=ri.ms,x>18.5&&(qi=me(qi*Math.sqrt(15/x),.62,1),da()),ri.done=!0,Pl=i}!lr&&!bn&&i-Pl>2500&&ri.done&&Ul>90&&Wt.fps>0&&(Wt.fps<48&&qi>.62?(qi*=.88,da(),Pl=i):Wt.fps>58.5&&qi<1&&(qi=Math.min(1,qi*1.08),da(),Pl=i)),lr&&fn>1.5&&!window.__bench&&(mf.push(t*1e3),fn>=Ll&&F_()),!Wt.ready&&Ul>A_&&(Wt.ready=!0,document.body.classList.add("ready")),requestAnimationFrame(wh)}function F_(){let i=mf.slice().sort((n,s)=>n-s),t=n=>+i[Math.min(i.length-1,Math.floor(i.length*n))].toFixed(2),e=i.reduce((n,s)=>n+s,0)/i.length;window.__bench={done:!0,frames:i.length,avgMs:+e.toFixed(2),fps:+(1e3/e).toFixed(1),p50:t(.5),p95:t(.95),p99:t(.99),max:t(.999),res:Wt.res,scale:Wt.scale,tier:zl,gpu:Wt.gpu,buildMs:Wt.buildMs},Ah&&(Ph.textContent+=`
BENCH `+JSON.stringify(window.__bench))}var Ph=document.getElementById("diag");Ah&&(Ph.style.display="block");pn.compile(Xe,be);document.getElementById("load").style.opacity=0;requestAnimationFrame(i=>{Th=i,requestAnimationFrame(wh)});})();
