var f6=Object.create;var X2=Object.defineProperty;var g6=Object.getOwnPropertyDescriptor;var i0=(L,V)=>(V=Symbol[L])?V:Symbol.for("Symbol."+L),Z1=L=>{throw TypeError(L)};var a0=(L,V,C)=>V in L?X2(L,V,{enumerable:!0,configurable:!0,writable:!0,value:C}):L[V]=C;var t0=(L,V)=>X2(L,"name",{value:V,configurable:!0});var N=L=>[,,,f6(L?.[i0("metadata")]??null)],A0=["class","method","getter","setter","accessor","field","value","get","set"],T1=L=>L!==void 0&&typeof L!="function"?Z1("Function expected"):L,O6=(L,V,C,H,e)=>({kind:A0[L],name:V,metadata:H,addInitializer:r=>C._?Z1("Already initialized"):e.push(T1(r||null))}),D=(L,V)=>a0(V,i0("metadata"),L[3]),a=(L,V,C,H)=>{for(var e=0,r=L[V>>1],t=r&&r.length;e<t;e++)V&1?r[e].call(C):H=r[e].call(C,H);return H},l=(L,V,C,H,e,r)=>{var t,M,i,p,n,d=V&7,v=!!(V&8),c=!!(V&16),Z=d>3?L.length+1:d?v?1:2:0,k=A0[d+5],_=d>3&&(L[Z-1]=[]),R=L[Z]||(L[Z]=[]),U=d&&(!c&&!v&&(e=e.prototype),d<5&&(d>3||!c)&&g6(d<4?e:{get[C](){return M0(this,r)},set[C](B){return o0(this,r,B)}},C));d?c&&d<4&&t0(r,(d>2?"set ":d>1?"get ":"")+C):t0(e,C);for(var n1=H.length-1;n1>=0;n1--)p=O6(d,C,i={},L[3],R),d&&(p.static=v,p.private=c,n=p.access={has:c?B=>_6(e,B):B=>C in B},d^3&&(n.get=c?B=>(d^1?M0:b6)(B,e,d^4?r:U.get):B=>B[C]),d>2&&(n.set=c?(B,k1)=>o0(B,e,k1,d^4?r:U.set):(B,k1)=>B[C]=k1)),M=(0,H[n1])(d?d<4?c?r:U[k]:d>4?void 0:{get:U.get,set:U.set}:e,p),i._=1,d^4||M===void 0?T1(M)&&(d>4?_.unshift(M):d?c?r=M:U[k]=M:e=M):typeof M!="object"||M===null?Z1("Object expected"):(T1(t=M.get)&&(U.get=t),T1(t=M.set)&&(U.set=t),T1(t=M.init)&&_.unshift(t));return d||D(L,e),U&&X2(e,C,U),c?d^4?r:U:e},s=(L,V,C)=>a0(L,typeof V!="symbol"?V+"":V,C),J2=(L,V,C)=>V.has(L)||Z1("Cannot "+C),_6=(L,V)=>Object(V)!==V?Z1('Cannot use the "in" operator on this value'):L.has(V),M0=(L,V,C)=>(J2(L,V,"read from private field"),C?C.call(L):V.get(L)),m=(L,V,C)=>V.has(L)?Z1("Cannot add the same private member more than once"):V instanceof WeakSet?V.add(L):V.set(L,C),o0=(L,V,C,H)=>(J2(L,V,"write to private field"),H?H.call(L,C):V.set(L,C),C),b6=(L,V,C)=>(J2(L,V,"access private method"),C);var n0="M17 18H21V16H17V14L14 17L17 20V18M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var j2="M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var d0="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z";var M2="M6 14H9L5 18L1 14H4C4 11.3 5.7 6.6 11 6.1V8.1C7.6 8.6 6 11.9 6 14M20 14C20 11.3 18.3 6.6 13 6.1V8.1C16.4 8.7 18 11.9 18 14H15L19 18L23 14H20Z",p0="M13 8.1V6.1C18.3 6.6 20 11.4 20 14H23L20.1 16.9L17.2 14H18C18 11.9 16.4 8.6 13 8.1M7.8 7.1L2.4 1.7L1.1 3L6.3 8.2C4.7 10 4 12.4 4 14H1L5 18L9 14H6C6 12.7 6.6 11 7.9 9.7L20.9 22.7L22.2 21.4L9.3 8.7L7.8 7.1M11 6.1L9.5 6.4L11 7.8V6.1Z";var o2="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";var l0="M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z";var h1="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var i2="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var m0="M22.11 21.46L2.39 1.73L1.11 3L4.06 5.95C2.78 7.63 2 9.72 2 12C2 17.5 6.5 22 12 22C14.28 22 16.37 21.23 18.05 19.94L20.84 22.73L22.11 21.46M12 20C7.58 20 4 16.42 4 12C4 10.27 4.56 8.68 5.5 7.38L16.62 18.5C15.32 19.45 13.73 20 12 20M8.17 4.97L6.72 3.5C8.25 2.56 10.06 2 12 2C17.5 2 22 6.5 22 12C22 13.94 21.44 15.75 20.5 17.28L19.03 15.83C19.65 14.69 20 13.39 20 12C20 7.58 16.42 4 12 4C10.61 4 9.31 4.35 8.17 4.97Z";var a2="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var A2="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z";var n2="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z";var s0="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",v0="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z",c0="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z";var d2="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74";var x0="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var u0="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z";var p2="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z";var Z0="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";var h0="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";var P1="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";var S0="M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z";var l2="M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z";var f0="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z";var g0="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z";var C5="M15 13L11 17V14H2V12H11V9L15 13M5 20V16H7V18H17V10.19L12 5.69L7.21 10H4.22L12 3L22 12H19V20H5Z";var O0="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";var _0="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z";var b0="M12,2C9.76,2 7.78,3.05 6.5,4.68L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z";var y0="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var w0="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z";var k0="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z";var T0="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z";var P0="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";var E0="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";var B0="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";var R0="M19,13H5V11H19V13Z";var F0="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z";var $0="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";var D0="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z";var H5="M14,19H18V5H14M6,19H10V5H6V19Z";var N0="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var m2="M8,5.14V19.14L19,12.14L8,5.14Z";var I0="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5";var W0="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var V5="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z";var r1="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var z0="M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z";var S1="M18,18H6V6H18V18Z";var U0="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z";var G0="M22.08,11.04H20.08V4H13.05V2H11.04V4H4V11.04H2V13.05H4V20.08H11.04V22.08H13.05V20.08H20.08V13.05H22.08V11.04M18.07,18.07H13.05V16.06H11.04V18.07H6V13.05H8.03V11.04H6V6H11.04V8.03H13.05V6H18.07V11.04H16.06V13.05H18.07V18.07M13.05,12.05A1,1 0 0,1 12.05,13.05C11.5,13.05 11.04,12.6 11.04,12.05C11.04,11.5 11.5,11.04 12.05,11.04C12.6,11.04 13.05,11.5 13.05,12.05Z";var Q0="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z";var K0="M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";var q0="M18,11H14.82C14.4,9.84 13.3,9 12,9C10.7,9 9.6,9.84 9.18,11H6C5.67,11 4,10.9 4,9V8C4,6.17 5.54,6 6,6H16.18C16.6,7.16 17.7,8 19,8A3,3 0 0,0 22,5A3,3 0 0,0 19,2C17.7,2 16.6,2.84 16.18,4H6C4.39,4 2,5.06 2,8V9C2,11.94 4.39,13 6,13H9.18C9.6,14.16 10.7,15 12,15C13.3,15 14.4,14.16 14.82,13H18C18.33,13 20,13.1 20,15V16C20,17.83 18.46,18 18,18H7.82C7.4,16.84 6.3,16 5,16A3,3 0 0,0 2,19A3,3 0 0,0 5,22C6.3,22 7.4,21.16 7.82,20H18C19.61,20 22,18.93 22,16V15C22,12.07 19.61,11 18,11M19,4A1,1 0 0,1 20,5A1,1 0 0,1 19,6A1,1 0 0,1 18,5A1,1 0 0,1 19,4M5,20A1,1 0 0,1 4,19A1,1 0 0,1 5,18A1,1 0 0,1 6,19A1,1 0 0,1 5,20Z";var f1="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";var Y0="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z";var s2="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var X0="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var J0="M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z";var j0="M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z";var v2=globalThis,c2=v2.ShadowRoot&&(v2.ShadyCSS===void 0||v2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L5=Symbol(),C7=new WeakMap,E1=class{constructor(V,C,H){if(this._$cssResult$=!0,H!==L5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=V,this.t=C}get styleSheet(){let V=this.o,C=this.t;if(c2&&V===void 0){let H=C!==void 0&&C.length===1;H&&(V=C7.get(C)),V===void 0&&((this.o=V=new CSSStyleSheet).replaceSync(this.cssText),H&&C7.set(C,V))}return V}toString(){return this.cssText}},H7=L=>new E1(typeof L=="string"?L:L+"",void 0,L5),y=(L,...V)=>{let C=L.length===1?L[0]:V.reduce((H,e,r)=>H+(t=>{if(t._$cssResult$===!0)return t.cssText;if(typeof t=="number")return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+L[r+1],L[0]);return new E1(C,L,L5)},V7=(L,V)=>{if(c2)L.adoptedStyleSheets=V.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of V){let H=document.createElement("style"),e=v2.litNonce;e!==void 0&&H.setAttribute("nonce",e),H.textContent=C.cssText,L.appendChild(H)}},e5=c2?L=>L:L=>L instanceof CSSStyleSheet?(V=>{let C="";for(let H of V.cssRules)C+=H.cssText;return H7(C)})(L):L;var{is:y6,defineProperty:w6,getOwnPropertyDescriptor:k6,getOwnPropertyNames:T6,getOwnPropertySymbols:P6,getPrototypeOf:E6}=Object,x2=globalThis,L7=x2.trustedTypes,B6=L7?L7.emptyScript:"",R6=x2.reactiveElementPolyfillSupport,B1=(L,V)=>L,R1={toAttribute(L,V){switch(V){case Boolean:L=L?B6:null;break;case Object:case Array:L=L==null?L:JSON.stringify(L)}return L},fromAttribute(L,V){let C=L;switch(V){case Boolean:C=L!==null;break;case Number:C=L===null?null:Number(L);break;case Object:case Array:try{C=JSON.parse(L)}catch{C=null}}return C}},u2=(L,V)=>!y6(L,V),e7={attribute:!0,type:String,converter:R1,reflect:!1,useDefault:!1,hasChanged:u2};Symbol.metadata??=Symbol("metadata"),x2.litPropertyMetadata??=new WeakMap;var t1=class extends HTMLElement{static addInitializer(V){this._$Ei(),(this.l??=[]).push(V)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(V,C=e7){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(V)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(V,C),!C.noAccessor){let H=Symbol(),e=this.getPropertyDescriptor(V,H,C);e!==void 0&&w6(this.prototype,V,e)}}static getPropertyDescriptor(V,C,H){let{get:e,set:r}=k6(this.prototype,V)??{get(){return this[C]},set(t){this[C]=t}};return{get:e,set(t){let M=e?.call(this);r?.call(this,t),this.requestUpdate(V,M,H)},configurable:!0,enumerable:!0}}static getPropertyOptions(V){return this.elementProperties.get(V)??e7}static _$Ei(){if(this.hasOwnProperty(B1("elementProperties")))return;let V=E6(this);V.finalize(),V.l!==void 0&&(this.l=[...V.l]),this.elementProperties=new Map(V.elementProperties)}static finalize(){if(this.hasOwnProperty(B1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B1("properties"))){let C=this.properties,H=[...T6(C),...P6(C)];for(let e of H)this.createProperty(e,C[e])}let V=this[Symbol.metadata];if(V!==null){let C=litPropertyMetadata.get(V);if(C!==void 0)for(let[H,e]of C)this.elementProperties.set(H,e)}this._$Eh=new Map;for(let[C,H]of this.elementProperties){let e=this._$Eu(C,H);e!==void 0&&this._$Eh.set(e,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(V){let C=[];if(Array.isArray(V)){let H=new Set(V.flat(1/0).reverse());for(let e of H)C.unshift(e5(e))}else V!==void 0&&C.push(e5(V));return C}static _$Eu(V,C){let H=C.attribute;return H===!1?void 0:typeof H=="string"?H:typeof V=="string"?V.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(V=>this.enableUpdating=V),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(V=>V(this))}addController(V){(this._$EO??=new Set).add(V),this.renderRoot!==void 0&&this.isConnected&&V.hostConnected?.()}removeController(V){this._$EO?.delete(V)}_$E_(){let V=new Map,C=this.constructor.elementProperties;for(let H of C.keys())this.hasOwnProperty(H)&&(V.set(H,this[H]),delete this[H]);V.size>0&&(this._$Ep=V)}createRenderRoot(){let V=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return V7(V,this.constructor.elementStyles),V}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(V=>V.hostConnected?.())}enableUpdating(V){}disconnectedCallback(){this._$EO?.forEach(V=>V.hostDisconnected?.())}attributeChangedCallback(V,C,H){this._$AK(V,H)}_$ET(V,C){let H=this.constructor.elementProperties.get(V),e=this.constructor._$Eu(V,H);if(e!==void 0&&H.reflect===!0){let r=(H.converter?.toAttribute!==void 0?H.converter:R1).toAttribute(C,H.type);this._$Em=V,r==null?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(V,C){let H=this.constructor,e=H._$Eh.get(V);if(e!==void 0&&this._$Em!==e){let r=H.getPropertyOptions(e),t=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:R1;this._$Em=e;let M=t.fromAttribute(C,r.type);this[e]=M??this._$Ej?.get(e)??M,this._$Em=null}}requestUpdate(V,C,H,e=!1,r){if(V!==void 0){let t=this.constructor;if(e===!1&&(r=this[V]),H??=t.getPropertyOptions(V),!((H.hasChanged??u2)(r,C)||H.useDefault&&H.reflect&&r===this._$Ej?.get(V)&&!this.hasAttribute(t._$Eu(V,H))))return;this.C(V,C,H)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(V,C,{useDefault:H,reflect:e,wrapped:r},t){H&&!(this._$Ej??=new Map).has(V)&&(this._$Ej.set(V,t??C??this[V]),r!==!0||t!==void 0)||(this._$AL.has(V)||(this.hasUpdated||H||(C=void 0),this._$AL.set(V,C)),e===!0&&this._$Em!==V&&(this._$Eq??=new Set).add(V))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let V=this.scheduleUpdate();return V!=null&&await V,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,r]of this._$Ep)this[e]=r;this._$Ep=void 0}let H=this.constructor.elementProperties;if(H.size>0)for(let[e,r]of H){let{wrapped:t}=r,M=this[e];t!==!0||this._$AL.has(e)||M===void 0||this.C(e,void 0,r,M)}}let V=!1,C=this._$AL;try{V=this.shouldUpdate(C),V?(this.willUpdate(C),this._$EO?.forEach(H=>H.hostUpdate?.()),this.update(C)):this._$EM()}catch(H){throw V=!1,this._$EM(),H}V&&this._$AE(C)}willUpdate(V){}_$AE(V){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(V)),this.updated(V)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(V){return!0}update(V){this._$Eq&&=this._$Eq.forEach(C=>this._$ET(C,this[C])),this._$EM()}updated(V){}firstUpdated(V){}};t1.elementStyles=[],t1.shadowRootOptions={mode:"open"},t1[B1("elementProperties")]=new Map,t1[B1("finalized")]=new Map,R6?.({ReactiveElement:t1}),(x2.reactiveElementVersions??=[]).push("2.1.2");var t5=globalThis,r7=L=>L,Z2=t5.trustedTypes,t7=Z2?Z2.createPolicy("lit-html",{createHTML:L=>L}):void 0,M5="$lit$",M1=`lit$${Math.random().toFixed(9).slice(2)}$`,o5="?"+M1,F6=`<${o5}>`,s1=document,$1=()=>s1.createComment(""),D1=L=>L===null||typeof L!="object"&&typeof L!="function",i5=Array.isArray,n7=L=>i5(L)||typeof L?.[Symbol.iterator]=="function",r5=`[ 	
\f\r]`,F1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M7=/-->/g,o7=/>/g,l1=RegExp(`>|${r5}(?:([^\\s"'>=/]+)(${r5}*=${r5}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),i7=/'/g,a7=/"/g,d7=/^(?:script|style|textarea|title)$/i,a5=L=>(V,...C)=>({_$litType$:L,strings:V,values:C}),o=a5(1),aC=a5(2),AC=a5(3),C1=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),A7=new WeakMap,m1=s1.createTreeWalker(s1,129);function p7(L,V){if(!i5(L)||!L.hasOwnProperty("raw"))throw Error("invalid template strings array");return t7!==void 0?t7.createHTML(V):V}var l7=(L,V)=>{let C=L.length-1,H=[],e,r=V===2?"<svg>":V===3?"<math>":"",t=F1;for(let M=0;M<C;M++){let i=L[M],p,n,d=-1,v=0;for(;v<i.length&&(t.lastIndex=v,n=t.exec(i),n!==null);)v=t.lastIndex,t===F1?n[1]==="!--"?t=M7:n[1]!==void 0?t=o7:n[2]!==void 0?(d7.test(n[2])&&(e=RegExp("</"+n[2],"g")),t=l1):n[3]!==void 0&&(t=l1):t===l1?n[0]===">"?(t=e??F1,d=-1):n[1]===void 0?d=-2:(d=t.lastIndex-n[2].length,p=n[1],t=n[3]===void 0?l1:n[3]==='"'?a7:i7):t===a7||t===i7?t=l1:t===M7||t===o7?t=F1:(t=l1,e=void 0);let c=t===l1&&L[M+1].startsWith("/>")?" ":"";r+=t===F1?i+F6:d>=0?(H.push(p),i.slice(0,d)+M5+i.slice(d)+M1+c):i+M1+(d===-2?M:c)}return[p7(L,r+(L[C]||"<?>")+(V===2?"</svg>":V===3?"</math>":"")),H]},N1=class L{constructor({strings:V,_$litType$:C},H){let e;this.parts=[];let r=0,t=0,M=V.length-1,i=this.parts,[p,n]=l7(V,C);if(this.el=L.createElement(p,H),m1.currentNode=this.el.content,C===2||C===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(e=m1.nextNode())!==null&&i.length<M;){if(e.nodeType===1){if(e.hasAttributes())for(let d of e.getAttributeNames())if(d.endsWith(M5)){let v=n[t++],c=e.getAttribute(d).split(M1),Z=/([.?@])?(.*)/.exec(v);i.push({type:1,index:r,name:Z[2],strings:c,ctor:Z[1]==="."?S2:Z[1]==="?"?f2:Z[1]==="@"?g2:c1}),e.removeAttribute(d)}else d.startsWith(M1)&&(i.push({type:6,index:r}),e.removeAttribute(d));if(d7.test(e.tagName)){let d=e.textContent.split(M1),v=d.length-1;if(v>0){e.textContent=Z2?Z2.emptyScript:"";for(let c=0;c<v;c++)e.append(d[c],$1()),m1.nextNode(),i.push({type:2,index:++r});e.append(d[v],$1())}}}else if(e.nodeType===8)if(e.data===o5)i.push({type:2,index:r});else{let d=-1;for(;(d=e.data.indexOf(M1,d+1))!==-1;)i.push({type:7,index:r}),d+=M1.length-1}r++}}static createElement(V,C){let H=s1.createElement("template");return H.innerHTML=V,H}};function v1(L,V,C=L,H){if(V===C1)return V;let e=H!==void 0?C._$Co?.[H]:C._$Cl,r=D1(V)?void 0:V._$litDirective$;return e?.constructor!==r&&(e?._$AO?.(!1),r===void 0?e=void 0:(e=new r(L),e._$AT(L,C,H)),H!==void 0?(C._$Co??=[])[H]=e:C._$Cl=e),e!==void 0&&(V=v1(L,e._$AS(L,V.values),e,H)),V}var h2=class{constructor(V,C){this._$AV=[],this._$AN=void 0,this._$AD=V,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(V){let{el:{content:C},parts:H}=this._$AD,e=(V?.creationScope??s1).importNode(C,!0);m1.currentNode=e;let r=m1.nextNode(),t=0,M=0,i=H[0];for(;i!==void 0;){if(t===i.index){let p;i.type===2?p=new g1(r,r.nextSibling,this,V):i.type===1?p=new i.ctor(r,i.name,i.strings,this,V):i.type===6&&(p=new O2(r,this,V)),this._$AV.push(p),i=H[++M]}t!==i?.index&&(r=m1.nextNode(),t++)}return m1.currentNode=s1,e}p(V){let C=0;for(let H of this._$AV)H!==void 0&&(H.strings!==void 0?(H._$AI(V,H,C),C+=H.strings.length-2):H._$AI(V[C])),C++}},g1=class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(V,C,H,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=V,this._$AB=C,this._$AM=H,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let V=this._$AA.parentNode,C=this._$AM;return C!==void 0&&V?.nodeType===11&&(V=C.parentNode),V}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(V,C=this){V=v1(this,V,C),D1(V)?V===A||V==null||V===""?(this._$AH!==A&&this._$AR(),this._$AH=A):V!==this._$AH&&V!==C1&&this._(V):V._$litType$!==void 0?this.$(V):V.nodeType!==void 0?this.T(V):n7(V)?this.k(V):this._(V)}O(V){return this._$AA.parentNode.insertBefore(V,this._$AB)}T(V){this._$AH!==V&&(this._$AR(),this._$AH=this.O(V))}_(V){this._$AH!==A&&D1(this._$AH)?this._$AA.nextSibling.data=V:this.T(s1.createTextNode(V)),this._$AH=V}$(V){let{values:C,_$litType$:H}=V,e=typeof H=="number"?this._$AC(V):(H.el===void 0&&(H.el=N1.createElement(p7(H.h,H.h[0]),this.options)),H);if(this._$AH?._$AD===e)this._$AH.p(C);else{let r=new h2(e,this),t=r.u(this.options);r.p(C),this.T(t),this._$AH=r}}_$AC(V){let C=A7.get(V.strings);return C===void 0&&A7.set(V.strings,C=new N1(V)),C}k(V){i5(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,H,e=0;for(let r of V)e===C.length?C.push(H=new L(this.O($1()),this.O($1()),this,this.options)):H=C[e],H._$AI(r),e++;e<C.length&&(this._$AR(H&&H._$AB.nextSibling,e),C.length=e)}_$AR(V=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);V!==this._$AB;){let H=r7(V).nextSibling;r7(V).remove(),V=H}}setConnected(V){this._$AM===void 0&&(this._$Cv=V,this._$AP?.(V))}},c1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(V,C,H,e,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=V,this.name=C,this._$AM=e,this.options=r,H.length>2||H[0]!==""||H[1]!==""?(this._$AH=Array(H.length-1).fill(new String),this.strings=H):this._$AH=A}_$AI(V,C=this,H,e){let r=this.strings,t=!1;if(r===void 0)V=v1(this,V,C,0),t=!D1(V)||V!==this._$AH&&V!==C1,t&&(this._$AH=V);else{let M=V,i,p;for(V=r[0],i=0;i<r.length-1;i++)p=v1(this,M[H+i],C,i),p===C1&&(p=this._$AH[i]),t||=!D1(p)||p!==this._$AH[i],p===A?V=A:V!==A&&(V+=(p??"")+r[i+1]),this._$AH[i]=p}t&&!e&&this.j(V)}j(V){V===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,V??"")}},S2=class extends c1{constructor(){super(...arguments),this.type=3}j(V){this.element[this.name]=V===A?void 0:V}},f2=class extends c1{constructor(){super(...arguments),this.type=4}j(V){this.element.toggleAttribute(this.name,!!V&&V!==A)}},g2=class extends c1{constructor(V,C,H,e,r){super(V,C,H,e,r),this.type=5}_$AI(V,C=this){if((V=v1(this,V,C,0)??A)===C1)return;let H=this._$AH,e=V===A&&H!==A||V.capture!==H.capture||V.once!==H.once||V.passive!==H.passive,r=V!==A&&(H===A||e);e&&this.element.removeEventListener(this.name,this,H),r&&this.element.addEventListener(this.name,this,V),this._$AH=V}handleEvent(V){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,V):this._$AH.handleEvent(V)}},O2=class{constructor(V,C,H){this.element=V,this.type=6,this._$AN=void 0,this._$AM=C,this.options=H}get _$AU(){return this._$AM._$AU}_$AI(V){v1(this,V)}},m7={M:M5,P:M1,A:o5,C:1,L:l7,R:h2,D:n7,V:v1,I:g1,H:c1,N:f2,U:g2,B:S2,F:O2},$6=t5.litHtmlPolyfillSupport;$6?.(N1,g1),(t5.litHtmlVersions??=[]).push("3.3.3");var s7=(L,V,C)=>{let H=C?.renderBefore??V,e=H._$litPart$;if(e===void 0){let r=C?.renderBefore??null;H._$litPart$=e=new g1(V.insertBefore($1(),r),r,void 0,C??{})}return e._$AI(L),e};var A5=globalThis,E=class extends t1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let V=super.createRenderRoot();return this.renderOptions.renderBefore??=V.firstChild,V}update(V){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(V),this._$Do=s7(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C1}};E._$litElement$=!0,E.finalized=!0,A5.litElementHydrateSupport?.({LitElement:E});var D6=A5.litElementPolyfillSupport;D6?.({LitElement:E});(A5.litElementVersions??=[]).push("4.2.2");var N6={attribute:!0,type:String,converter:R1,reflect:!1,hasChanged:u2},I6=(L=N6,V,C)=>{let{kind:H,metadata:e}=C,r=globalThis.litPropertyMetadata.get(e);if(r===void 0&&globalThis.litPropertyMetadata.set(e,r=new Map),H==="setter"&&((L=Object.create(L)).wrapped=!0),r.set(C.name,L),H==="accessor"){let{name:t}=C;return{set(M){let i=V.get.call(this);V.set.call(this,M),this.requestUpdate(t,i,L,!0,M)},init(M){return M!==void 0&&this.C(t,void 0,L,M),M}}}if(H==="setter"){let{name:t}=C;return function(M){let i=this[t];V.call(this,M),this.requestUpdate(t,i,L,!0,M)}}throw Error("Unsupported decorator location: "+H)};function O(L){return(V,C)=>typeof C=="object"?I6(L,V,C):((H,e,r)=>{let t=e.hasOwnProperty(r);return e.constructor.createProperty(r,H),t?Object.getOwnPropertyDescriptor(e,r):void 0})(L,V,C)}function x(L){return O({...L,state:!0,attribute:!1})}var b2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},O1=L=>(...V)=>({_$litDirective$:L,values:V}),d1=class{constructor(V){}get _$AU(){return this._$AM._$AU}_$AT(V,C,H){this._$Ct=V,this._$AM=C,this._$Ci=H}_$AS(V,C){return this.update(V,C)}update(V,C){return this.render(...C)}};var v7="important",W6=" !"+v7,F=O1(class extends d1{constructor(L){if(super(L),L.type!==b2.ATTRIBUTE||L.name!=="style"||L.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(L){return Object.keys(L).reduce((V,C)=>{let H=L[C];return H==null?V:V+`${C=C.includes("-")?C:C.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${H};`},"")}update(L,[V]){let{style:C}=L.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(V)),this.render(V);for(let H of this.ft)V[H]==null&&(this.ft.delete(H),H.includes("-")?C.removeProperty(H):C[H]=null);for(let H in V){let e=V[H];if(e!=null){this.ft.add(H);let r=typeof e=="string"&&e.endsWith(W6);H.includes("-")||r?C.setProperty(H,r?e.slice(0,-11):e,r?v7:""):C[H]=e}}return C1}});var d5="more-info-popup-card",p5="more-info-popup-card",o1="more-info-popup-dialog",I1="more-info-popup-card-editor",W1={breadcrumb:"auto",mode:"auto",width:"medium",height:"auto",column_span:1,show_header_actions:!0,replace_more_info:!1,nested_more_info:"inline",dismissable:!0,auto_close:0,keep_alive:!1},z6=["auto","dialog","bottom_sheet","top_sheet"],U6=["small","medium","large","full","custom"],G6=["auto","custom"],Q6=["inline","dialog"],K6=/^[a-z0-9][a-z0-9_-]*$/,q6=/^\d+(\.\d+)?(px|%|vw|vh|dvh|svh|lvh|em|rem)$/,c7=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^[_-]+|[_-]+$/g,"").slice(0,48),y2=(L,V,C)=>{if(V!==void 0&&!C.includes(V))throw new Error(`"${L}" must be one of: ${C.join(", ")}`)},n5=(L,V)=>{if(V!==void 0&&V!==""&&!q6.test(String(V)))throw new Error(`"${L}" must be a CSS length such as 720px or 80vh`)},z1=L=>{if(!L||typeof L!="object")throw new Error("Invalid configuration");let V=L;if(!V.popup_id||typeof V.popup_id!="string")throw new Error('"popup_id" is required');if(!K6.test(V.popup_id))throw new Error('"popup_id" may only contain lowercase letters, digits, "_" and "-"');if(V.entity!==void 0&&(typeof V.entity!="string"||!V.entity.includes(".")))throw new Error('"entity" must be an entity ID');if(V.cards!==void 0&&!Array.isArray(V.cards))throw new Error('"cards" must be a list');if(y2("mode",V.mode,z6),y2("width",V.width,U6),y2("height",V.height,G6),y2("nested_more_info",V.nested_more_info,Q6),n5("custom_width",V.custom_width),n5("min_height",V.min_height),n5("max_height",V.max_height),V.column_span!==void 0&&(!Number.isInteger(V.column_span)||V.column_span<1||V.column_span>4))throw new Error('"column_span" must be an integer between 1 and 4');if(V.auto_close!==void 0&&(typeof V.auto_close!="number"||V.auto_close<0))throw new Error('"auto_close" must be a positive number of seconds');return V},w2=L=>({...W1,...L,cards:L.cards??[]}),x7=L=>L.width==="custom"?"medium":L.width==="medium"&&L.column_span>1?"large":L.width,u7=L=>{let V={};return L.width==="custom"&&L.custom_width&&(V["--ha-dialog-width-md"]=L.custom_width,V["--ha-bottom-sheet-max-width"]=L.custom_width),L.height==="custom"&&(L.min_height&&(V["--ha-dialog-min-height"]=L.min_height,V["--ha-bottom-sheet-height"]=L.min_height),L.max_height&&(V["--ha-dialog-max-height"]=L.max_height,V["--ha-bottom-sheet-max-height"]=L.max_height)),V};var u=L=>L.substring(0,L.indexOf(".")),k2=L=>L.substring(L.indexOf(".")+1),h7=["scene","automation"],S7=["script"],f7=["camera","configurator"],Y6=["counter","input_number","number","proximity","sensor"],X6=["alarm_control_panel","automation","camera","climate","configurator","conversation","counter","cover","date","datetime","fan","group","humidifier","image","input_boolean","input_datetime","lawn_mower","light","lock","media_player","person","remote","script","scene","siren","sun","switch","time","timer","update","vacuum","valve","water_heater","weather"],U1=L=>!!L.user?.is_admin,g7=(L,V)=>L.config.components.includes(V),J6=(L,V)=>g7(L,"history")&&!f7.includes(u(V)),j6=(L,V)=>{if(!g7(L,"logbook")||!L.states[V])return!1;let H=u(V);return!(f7.includes(H)||Y6.includes(H))},O7=(L,V,C)=>(!C||X6.includes(u(V)))&&(J6(L,V)||j6(L,V)),l5=L=>U1(L)||!!L.auth.external?.config.hasEntityAddTo,m5=(L,V)=>L.entities[V]?.device_id??null,_7=(L,V)=>(V&&L.devices[V]?.entry_type)==="service"?"service":"device",b7=L=>{if(!L)return!1;let V=u(L.entity_id);return h7.includes(V)&&L.attributes.id||S7.includes(V)?!0:V==="person"&&L.attributes.editable!=="false"},y7=(L,V)=>{let C=u(L.entity_id),H=L.entity_id;return(h7.includes(C)||C==="person")&&(H=L.attributes.id),S7.includes(C)&&(H=V),H?`/config/${C}/edit/${H}`:void 0},H1=L=>L.attributes.friendly_name??L.entity_id.substring(L.entity_id.indexOf(".")+1),Z7=(L,V)=>{let C=V?L.devices[V]:void 0;return C&&(C.name_by_user||C.name)?.trim()||void 0},s5=(L,V)=>{let C=L.states[V],H=L.entities[V];if(!H)return[C?H1(C):V];let e=H.device_id?L.devices[H.device_id]:void 0,r=H.area_id||e?.area_id,t=r?L.areas[r]?.name:void 0,M=v=>C&&L.formatEntityName&&L.formatEntityName(C,{type:v})||void 0,i=Z7(L,H.device_id),p=M("entity")??(C?H1(C):void 0);p&&i&&p===i&&(p=void 0);let n=H.next_name_part==="device"||!p,d=n&&e?.next_name_part==="parent_device"?Z7(L,e.parent_device_id):void 0;return[t,d,n?i:void 0,p].filter(v=>!!v)},w7=L=>!!L.translationMetadata?.translations?.[L.language]?.isRTL;var g=(L,V,C,H={})=>{let e=new CustomEvent(V,{bubbles:H.bubbles??!0,cancelable:H.cancelable??!1,composed:H.composed??!0,detail:C??{}});return L.dispatchEvent(e),e};var C8=["ha-adaptive-dialog","ha-dialog","ha-bottom-sheet","ha-dialog-header","ha-icon-button","ha-icon-button-prev","ha-dropdown","ha-dropdown-item","hui-section"],E7={info:"ha-more-info-info",history:"ha-more-info-history-and-logbook",settings:"ha-more-info-settings",related:"ha-more-info-related",details:"ha-more-info-details",add_to:"ha-more-info-add-to"},Q1=L=>customElements.get(L)!==void 0,V1=async(L,V=5e3)=>{if(Q1(L))return!0;let C,H=await Promise.race([customElements.whenDefined(L).then(()=>!0),new Promise(e=>{C=setTimeout(()=>e(!1),V)})]);return clearTimeout(C),H},k7,B7=()=>(k7??=(async()=>{await V1("ha-more-info-dialog");let L=[];for(let V of C8)await V1(V,2e3)||L.push(V);return L.length&&console.warn("[more-info-popup-card] Missing Home Assistant elements:",L.join(", ")),L})(),k7),T7=async L=>{let V=customElements.get(L);try{await V?.getConfigElement?.()}catch{}},P7,R7=()=>(P7??=(async()=>{await Promise.all([V1("hui-tile-card"),V1("hui-grid-card")]),await Promise.all([T7("hui-tile-card"),T7("hui-grid-card")]),await Promise.all([V1("ha-form"),V1("hui-card-picker"),V1("hui-card-element-editor")])})(),P7),H8=L=>{let V=L?.match(/^(\d{4})\.(\d{1,2})/);return V?[Number(V[1]),Number(V[2])]:void 0},G1=[2026,10],F7=L=>{let V=H8(L);if(!V)return!0;let[C,H]=V;return C>G1[0]||C===G1[0]&&H>=G1[1]},v5=(L,V,C,H)=>{let e=customElements.get(V)?.prototype?.[C];if(typeof e!="function")return console.warn("[more-info-popup-card] Missing",`${V}.${C}`),!1;let r=Object.assign(document.createElement("span"),H);r.hidden=!0,L.appendChild(r);try{e.call(r)}finally{r.remove()}return!0};var $7=y`
  ha-dialog,
  ha-adaptive-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-max-width: min(600px, 95vw);
    --justify-action-buttons: space-between;
    --dialog-container-padding: var(--safe-area-inset-top, 0)
      var(--safe-area-inset-right, 0) var(--safe-area-inset-bottom, 0)
      var(--safe-area-inset-left, 0);
    --dialog-surface-padding: 0px;
    --dialog-content-padding: 0;
  }

  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog,
    ha-adaptive-dialog {
      --mdc-dialog-min-width: 100vw;
      --mdc-dialog-max-width: 100vw;
      --mdc-dialog-min-height: 100vh;
      --mdc-dialog-min-height: 100svh;
      --mdc-dialog-max-height: 100vh;
      --mdc-dialog-max-height: 100svh;
      --dialog-container-padding: 0px;
      --dialog-surface-padding: var(--safe-area-inset-top, 0)
        var(--safe-area-inset-right, 0) var(--safe-area-inset-bottom, 0)
        var(--safe-area-inset-left, 0);
      --vertical-align-dialog: flex-end;
    }
    ha-dialog {
      --ha-dialog-border-radius: var(--ha-border-radius-square);
    }
  }

  /* haStyleDialogFixedTop: pin to top so it doesn't jump when content changes */
  :host([fixed-top]) ha-dialog,
  :host([fixed-top]) ha-adaptive-dialog {
    --vertical-align-dialog: flex-start;
    --dialog-surface-margin-top: var(--ha-space-10);
    --mdc-dialog-max-height: calc(
      100vh - var(--dialog-surface-margin-top) - var(--ha-space-2) - var(
          --safe-area-inset-y,
          0px
        )
    );
    --mdc-dialog-max-height: calc(
      100svh - var(--dialog-surface-margin-top) - var(--ha-space-2) - var(
          --safe-area-inset-y,
          0px
        )
    );
  }
`,D7=y`
  ha-bottom-sheet {
    --ha-bottom-sheet-border-radius: var(--ha-border-radius-2xl);
    --ha-bottom-sheet-surface-background: var(
      --ha-dialog-surface-background,
      var(--card-background-color, var(--ha-color-surface-default))
    );
    --ha-bottom-sheet-padding: 0 var(--safe-area-inset-right)
      var(--safe-area-inset-bottom) var(--safe-area-inset-left);
    --ha-bottom-sheet-content-padding: 0;
  }
`,N7=y`
  .ha-scrollbar::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }
  .ha-scrollbar::-webkit-scrollbar-thumb {
    border-radius: var(--ha-border-radius-sm);
    background: var(--scrollbar-thumb-color);
  }
  .ha-scrollbar {
    overflow-y: auto;
    scrollbar-color: var(--scrollbar-thumb-color) transparent;
    scrollbar-width: thin;
  }
`,I7=y`
  .fade-top,
  .fade-bottom {
    position: absolute;
    left: 0;
    right: 0;
    height: var(--ha-space-2);
    pointer-events: none;
    transition: opacity 180ms ease-in-out;
    border-radius: var(--ha-border-radius-square);
    opacity: 0;
    background: linear-gradient(
      to bottom,
      var(--ha-color-shadow-scrollable-fade),
      transparent
    );
  }
  .fade-top {
    top: 0;
  }
  .fade-bottom {
    bottom: 0;
    transform: rotate(180deg);
  }
  .fade-top.visible,
  .fade-bottom.visible {
    opacity: 1;
  }
`,T2=y`
  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 calc(var(--ha-space-2) * -1) 0;
  }
  .title p {
    margin: 0;
    min-width: 0;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .title .main {
    color: var(--primary-text-color);
    font-size: var(--ha-font-size-xl);
    line-height: var(--ha-line-height-condensed);
  }
  .title .breadcrumb {
    color: var(--secondary-text-color);
    font-size: var(--ha-font-size-m);
    font-family: var(--ha-font-family-heading, inherit);
    line-height: 16px;
    --mdc-icon-size: 16px;
    padding: var(--ha-space-1);
    margin: calc(var(--ha-space-1) * -1);
    margin-top: calc(var(--ha-space-2) * -1);
    background: none;
    border: none;
    outline: none;
    display: inline;
    border-radius: var(--ha-border-radius-md);
    transition: background-color 180ms ease-in-out;
    min-width: 0;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
  }
  .title button.breadcrumb {
    cursor: pointer;
  }
  .title button.breadcrumb:focus-visible,
  .title button.breadcrumb:hover {
    background-color: rgba(var(--rgb-secondary-text-color), 0.08);
  }
`,P2=y`
  .content-wrapper {
    flex: 1 1 auto;
    min-height: 0;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .content {
    outline: none;
    flex: 1;
    overflow: auto;
    scrollbar-gutter: stable;
  }
  .content-wrapper.settings-view .fade-bottom {
    bottom: calc(
      var(--ha-space-14) + max(var(--safe-area-inset-bottom), var(--ha-space-4))
    );
  }
  /* ha-more-info-info .content */
  .body {
    display: flex;
    flex-direction: column;
    padding: var(--ha-space-6);
    padding-bottom: max(var(--safe-area-inset-bottom), var(--ha-space-6));
  }
  .body hui-section {
    display: block;
    width: 100%;
  }
  ha-more-info-history-and-logbook {
    padding: var(--ha-space-2) 0 var(--ha-space-6) 0;
    display: block;
  }
`;var c5={"card.name":"More-info popup","card.description":"A container shown as a native more-info popup, with a sections-style grid of cards inside.","card.cards_count":"{count} cards","card.cards_count_one":"1 card","card.hidden_hint":"Hidden on the dashboard \xB7 opens with #{id}","card.missing_elements":"This Home Assistant version is missing elements the popup needs. Check the browser console.","card.unsupported_version":"More-info popup card requires Home Assistant {version} or newer.","dialog.entity_controls":"Entity controls","editor.tab.cards":"Cards","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Appearance","editor.section.behavior":"Behavior","editor.popup_id":"Popup ID","editor.popup_id_helper":"Open it with a Navigate action to #{id}","editor.entity":"Entity","editor.entity_helper":"Optional. Enables the history, settings and menu buttons of the native header.","editor.name":"Title","editor.icon":"Icon","editor.breadcrumb":"Breadcrumb","editor.breadcrumb_helper":"Text above the title. Type your own text or pick an option.","editor.breadcrumb.auto":"Area and device (automatic)","editor.breadcrumb.none":"None","editor.mode":"Presentation","editor.mode.auto":"Automatic (like Home Assistant)","editor.mode.dialog":"Centered dialog","editor.mode.bottom_sheet":"Bottom sheet","editor.mode.top_sheet":"Top sheet (drops from the top)","editor.width":"Width","editor.width.small":"Small","editor.width.medium":"Medium (default)","editor.width.large":"Large","editor.width.full":"Full width","editor.width.custom":"Custom","editor.custom_width":"Custom width","editor.height":"Height","editor.height.auto":"Fit content","editor.height.custom":"Custom","editor.min_height":"Minimum height","editor.max_height":"Maximum height","editor.length_helper":"CSS length, for example 720px, 80vh or 90%","editor.column_span":"Grid width (sections)","editor.column_span_helper":"1 = 12 columns like a dashboard section; 2 = 24 columns.","editor.show_header_actions":"Show history, settings and menu","editor.replace_more_info":"Replace the entity's more-info","editor.replace_more_info_helper":"Opening the entity from any card on this view shows this popup instead.","editor.nested_more_info":"Entities opened from inside the popup","editor.nested_more_info.inline":"Navigate inside the popup (like Home Assistant)","editor.nested_more_info.dialog":"Open a separate dialog","editor.dismissable":"Close with Esc, outside click or swipe","editor.auto_close":"Close automatically after inactivity","editor.keep_alive":"Keep cards loaded while closed (faster reopen)","editor.test_popup":"Test popup","editor.add_card":"Add card","editor.edit_card":"Edit card","editor.back":"Back","editor.empty":"This popup has no cards yet.","editor.undo":"Undo","editor.card_deleted":"Card deleted","editor.popup_id_invalid":'Use lowercase letters, digits, "_" and "-" only.',"state_card.name":"More-info state","state_card.description":"State header and the big control of a native more-info dialog.","controls_card.name":"More-info controls","controls_card.description":"Row of more-info chips: selects, toggles, numbers and actions.","wled_card.name":"More-info WLED","wled_card.description":"The native light more-info for a WLED segment, with secondary color, palette previews and effects grouped like in WLED, with their sliders.","controls.empty":"Add controls in the editor.","controls.entity":"Entity","controls.control":"Main control","controls.control.auto":"Automatic (like Home Assistant)","controls.control.none":"None","controls.control.toggle":"Toggle","controls.control.brightness":"Brightness slider","controls.control.fan_speed":"Fan speed","controls.control.position":"Cover position","controls.control.tilt":"Cover tilt","controls.control.cover_toggle":"Cover toggle","controls.control.cover_buttons":"Cover buttons","controls.control.valve_position":"Valve position","controls.control.valve_toggle":"Valve toggle","controls.control.valve_buttons":"Valve buttons","controls.control.lock":"Lock","controls.control.alarm_modes":"Alarm modes","controls.control.temperature":"Thermostat","controls.control.climate_humidity":"Climate humidity","controls.control.humidity":"Humidifier","controls.control.water_heater":"Water heater","controls.control.vacuum_status":"Vacuum status","controls.control.lawn_mower_status":"Lawn mower status","controls.control.media_player":"Media player","controls.control.more_info":"Native more-info content","controls.control.script":"Script (run / cancel)","controls.control.press":"Press button","controls.control.trigger":"Trigger (momentary switch)","controls.control.push":"Push button (stateless)","controls.show_state":"Show state","controls.show_cancel":"Show Cancel","controls.show_cancel_helper":"Cancel button under a running script (trigger and push controls).","controls.show_last_changed":"Show last changed","controls.state_override":"State text","controls.appearance":"Appearance","controls.appearance.plain":"Plain (like more-info)","controls.appearance.card":"Card","controls.controls":"Controls","controls.type":"Type","controls.type_helper":"Automatic if empty: select for select entities or attributes, toggle, number or action.","controls.type.select":"Select","controls.type.toggle":"Toggle","controls.type.number":"Number","controls.type.button":"Button (icon)","controls.type.action":"Action","controls.attribute":"Attribute","controls.attribute_helper":"Options shown in the select (effect, preset mode, fan speed\u2026).","controls.attribute.state":"State (on / off)","controls.attribute.effect":"Effect","controls.attribute.preset_mode":"Preset mode","controls.attribute.fan_mode":"Fan mode","controls.attribute.swing_mode":"Swing mode","controls.attribute.swing_horizontal_mode":"Horizontal swing mode","controls.attribute.hvac_mode":"HVAC mode","controls.attribute.fan_speed":"Fan speed (vacuum)","controls.attribute.mode":"Mode","controls.attribute.direction":"Direction","controls.attribute.oscillating":"Oscillating","controls.attribute.operation_mode":"Operation mode","controls.attribute.away_mode":"Away mode","controls.attribute.source":"Source","controls.attribute.sound_mode":"Sound mode","controls.name":"Name","controls.icon":"Icon","controls.icon_off":"Icon when off","controls.icon_helper":"Replaces the entity icon of the toggle, trigger and push button (for the toggle, the on icon).","controls.color":"Color","controls.color_helper":"Color of the control while active (any CSS color or a theme color).","controls.color_off":"Color when off","controls.button_layout":"Push button shape","controls.button_layout_helper":"Only for the push button control.","controls.button_layout.vertical":"Vertical (like the toggle)","controls.button_layout.horizontal":"Horizontal","controls.button_layout.square":"Square","controls.button_layout.circle":"Circle","controls.options":"Options","controls.options_helper":"Optional: which options to show and in which order.","controls.value":"Secondary text","controls.value_helper":"For actions; defaults to the entity state.","controls.tap_action":"Tap action","controls.show_arrow":"Show arrow","controls.perform_action":"Custom action","controls.perform_action_helper":"domain.action that receives the value, e.g. light.turn_on","controls.data_key":"Value field","controls.data_key_helper":"Field of the custom action that receives the value, e.g. effect","controls.min":"Minimum","controls.max":"Maximum","controls.step":"Step","controls.wrap":"Wrap on phones","controls.wrap_helper":"Chips go to new rows instead of scrolling sideways (Home Assistant scrolls).","wled.secondary_color":"Secondary color","wled.tertiary_color":"Tertiary color","wled.palette":"Palette","wled.effects":"Effects","wled.search":"Search effects","wled.no_effects":"No effects match","wled.filter.all":"All","wled.filter.1d":"Strip","wled.filter.2d":"Matrix","wled.filter.1.5d":"Strip on matrix","wled.filter.volume":"Audio: volume","wled.filter.frequency":"Audio: frequency","wled.filter.palette":"Uses palette","wled.slider.sx":"Speed","wled.slider.ix":"Intensity","wled.slider.c1":"Custom 1","wled.slider.c2":"Custom 2","wled.slider.c3":"Custom 3","wled.option.o1":"Option 1","wled.option.o2":"Option 2","wled.option.o3":"Option 3","wled.color_black":"Black (off)","wled.not_used":"Not used by this effect","wled.not_wled":"Pick a light of the WLED integration.","wled.main_light":"This is the WLED main light (brightness only): pick one of its segment lights.","wled.unreachable":"Secondary color, palette previews and effect details come straight from WLED ({host}), which this browser can't reach.","wled.mixed_content":"Secondary color, palette previews and effect details come straight from WLED ({host}): this page is on https and the device on http. Open Home Assistant over http on your network, or set an https address for the device.","controls.host":"WLED address","controls.host_helper":"Defaults to the device's address in Home Assistant (its configuration URL).","controls.show_effects":"Show effects"};var W7={"card.name":"Popup more-info","card.description":"Un contenedor que se muestra como el popup more-info nativo, con una rejilla de tarjetas como una secci\xF3n.","card.cards_count":"{count} tarjetas","card.cards_count_one":"1 tarjeta","card.hidden_hint":"Oculta en el dashboard \xB7 se abre con #{id}","card.missing_elements":"A esta versi\xF3n de Home Assistant le faltan elementos que el popup necesita. Revisa la consola del navegador.","card.unsupported_version":"More-info popup card requiere Home Assistant {version} o superior.","dialog.entity_controls":"Controles de la entidad","editor.tab.cards":"Tarjetas","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Apariencia","editor.section.behavior":"Comportamiento","editor.popup_id":"ID del popup","editor.popup_id_helper":"\xC1brelo con una acci\xF3n Navegar a #{id}","editor.entity":"Entidad","editor.entity_helper":"Opcional. Habilita los botones de historial, ajustes y men\xFA de la cabecera nativa.","editor.name":"T\xEDtulo","editor.icon":"Icono","editor.breadcrumb":"Ruta","editor.breadcrumb_helper":"Texto sobre el t\xEDtulo. Escribe el tuyo o elige una opci\xF3n.","editor.breadcrumb.auto":"\xC1rea y dispositivo (autom\xE1tico)","editor.breadcrumb.none":"Ninguna","editor.mode":"Presentaci\xF3n","editor.mode.auto":"Autom\xE1tica (como Home Assistant)","editor.mode.dialog":"Di\xE1logo centrado","editor.mode.bottom_sheet":"Hoja inferior deslizante","editor.mode.top_sheet":"Hoja superior (cae desde arriba)","editor.width":"Ancho","editor.width.small":"Peque\xF1o","editor.width.medium":"Mediano (por defecto)","editor.width.large":"Grande","editor.width.full":"Ancho completo","editor.width.custom":"Personalizado","editor.custom_width":"Ancho personalizado","editor.height":"Alto","editor.height.auto":"Ajustar al contenido","editor.height.custom":"Personalizado","editor.min_height":"Alto m\xEDnimo","editor.max_height":"Alto m\xE1ximo","editor.length_helper":"Longitud CSS, por ejemplo 720px, 80vh o 90%","editor.column_span":"Ancho de la rejilla (secciones)","editor.column_span_helper":"1 = 12 columnas como una secci\xF3n del dashboard; 2 = 24 columnas.","editor.show_header_actions":"Mostrar historial, ajustes y men\xFA","editor.replace_more_info":"Reemplazar el more-info de la entidad","editor.replace_more_info_helper":"Al abrir la entidad desde cualquier tarjeta de esta vista se muestra este popup.","editor.nested_more_info":"Entidades abiertas desde dentro del popup","editor.nested_more_info.inline":"Navegar dentro del popup (como Home Assistant)","editor.nested_more_info.dialog":"Abrir un di\xE1logo aparte","editor.dismissable":"Cerrar con Esc, clic fuera o deslizando","editor.auto_close":"Cerrar autom\xE1ticamente tras inactividad","editor.keep_alive":"Mantener las tarjetas cargadas al cerrar (reapertura m\xE1s r\xE1pida)","editor.test_popup":"Probar popup","editor.add_card":"A\xF1adir tarjeta","editor.edit_card":"Editar tarjeta","editor.back":"Volver","editor.empty":"Este popup a\xFAn no tiene tarjetas.","editor.undo":"Deshacer","editor.card_deleted":"Tarjeta eliminada","editor.popup_id_invalid":'Usa solo min\xFAsculas, n\xFAmeros, "_" y "-".',"state_card.name":"Estado more-info","state_card.description":"Cabecera de estado y control grande de un more-info nativo.","controls_card.name":"Controles more-info","controls_card.description":"Fila de chips del more-info: selectores, interruptores, n\xFAmeros y acciones.","wled_card.name":"More-info WLED","wled_card.description":"El more-info nativo de luces para un segmento WLED, con color secundario, vista previa de paletas y efectos agrupados como en WLED, con sus controles.","controls.empty":"A\xF1ade controles en el editor.","controls.entity":"Entidad","controls.control":"Control principal","controls.control.auto":"Autom\xE1tico (como Home Assistant)","controls.control.none":"Ninguno","controls.control.toggle":"Interruptor","controls.control.brightness":"Control de brillo","controls.control.fan_speed":"Velocidad del ventilador","controls.control.position":"Posici\xF3n de la persiana","controls.control.tilt":"Inclinaci\xF3n de la persiana","controls.control.cover_toggle":"Interruptor de persiana","controls.control.cover_buttons":"Botones de persiana","controls.control.valve_position":"Posici\xF3n de la v\xE1lvula","controls.control.valve_toggle":"Interruptor de v\xE1lvula","controls.control.valve_buttons":"Botones de v\xE1lvula","controls.control.lock":"Cerradura","controls.control.alarm_modes":"Modos de alarma","controls.control.temperature":"Termostato","controls.control.climate_humidity":"Humedad del clima","controls.control.humidity":"Humidificador","controls.control.water_heater":"Calentador de agua","controls.control.vacuum_status":"Estado de la aspiradora","controls.control.lawn_mower_status":"Estado del cortac\xE9sped","controls.control.media_player":"Reproductor multimedia","controls.control.more_info":"Contenido nativo de more-info","controls.control.script":"Script (ejecutar / cancelar)","controls.control.press":"Bot\xF3n de pulsar","controls.control.trigger":"Disparador (interruptor moment\xE1neo)","controls.control.push":"Pulsador (sin estado)","controls.show_state":"Mostrar estado","controls.show_cancel":"Mostrar Cancelar","controls.show_cancel_helper":"Bot\xF3n Cancelar bajo un script en ejecuci\xF3n (controles disparador y pulsador).","controls.show_last_changed":"Mostrar \xFAltimo cambio","controls.state_override":"Texto del estado","controls.appearance":"Apariencia","controls.appearance.plain":"Sin marco (como more-info)","controls.appearance.card":"Tarjeta","controls.controls":"Controles","controls.type":"Tipo","controls.type_helper":"Autom\xE1tico si se deja vac\xEDo: selector para entidades select o atributos, interruptor, n\xFAmero o acci\xF3n.","controls.type.select":"Selector","controls.type.toggle":"Interruptor","controls.type.number":"N\xFAmero","controls.type.button":"Bot\xF3n (icono)","controls.type.action":"Acci\xF3n","controls.attribute":"Atributo","controls.attribute_helper":"Opciones del selector (efecto, modo predefinido, velocidad\u2026).","controls.attribute.state":"Estado (encendido / apagado)","controls.attribute.effect":"Efecto","controls.attribute.preset_mode":"Modo predefinido","controls.attribute.fan_mode":"Modo del ventilador","controls.attribute.swing_mode":"Oscilaci\xF3n","controls.attribute.swing_horizontal_mode":"Oscilaci\xF3n horizontal","controls.attribute.hvac_mode":"Modo HVAC","controls.attribute.fan_speed":"Potencia de succi\xF3n (aspiradora)","controls.attribute.mode":"Modo","controls.attribute.direction":"Direcci\xF3n","controls.attribute.oscillating":"Oscilaci\xF3n (s\xED / no)","controls.attribute.operation_mode":"Modo de funcionamiento","controls.attribute.away_mode":"Modo ausente","controls.attribute.source":"Fuente","controls.attribute.sound_mode":"Modo de sonido","controls.name":"Nombre","controls.icon":"Icono","controls.icon_off":"Icono apagado","controls.icon_helper":"Reemplaza el icono de la entidad en el interruptor, el disparador y el pulsador (en el interruptor, el icono de encendido).","controls.color":"Color","controls.color_helper":"Color del control mientras est\xE1 activo (cualquier color CSS o del tema).","controls.color_off":"Color apagado","controls.button_layout":"Forma del pulsador","controls.button_layout_helper":"Solo para el control de pulsador.","controls.button_layout.vertical":"Vertical (como el interruptor)","controls.button_layout.horizontal":"Horizontal","controls.button_layout.square":"Cuadrado","controls.button_layout.circle":"Circular","controls.options":"Opciones","controls.options_helper":"Opcional: qu\xE9 opciones mostrar y en qu\xE9 orden.","controls.value":"Texto secundario","controls.value_helper":"Para acciones; por defecto, el estado de la entidad.","controls.tap_action":"Acci\xF3n al pulsar","controls.show_arrow":"Mostrar flecha","controls.perform_action":"Acci\xF3n personalizada","controls.perform_action_helper":"dominio.acci\xF3n que recibe el valor, p. ej. light.turn_on","controls.data_key":"Campo del valor","controls.data_key_helper":"Campo de la acci\xF3n personalizada que recibe el valor, p. ej. effect","controls.min":"M\xEDnimo","controls.max":"M\xE1ximo","controls.step":"Paso","controls.wrap":"Saltar de l\xEDnea en m\xF3vil","controls.wrap_helper":"Los chips bajan de l\xEDnea en lugar de desplazarse de lado (Home Assistant los desplaza).","wled.secondary_color":"Color secundario","wled.tertiary_color":"Color terciario","wled.palette":"Paleta","wled.effects":"Efectos","wled.search":"Buscar efectos","wled.no_effects":"Ning\xFAn efecto coincide","wled.filter.all":"Todos","wled.filter.1d":"Tira","wled.filter.2d":"Matriz","wled.filter.1.5d":"Tira en matriz","wled.filter.volume":"Audio: volumen","wled.filter.frequency":"Audio: frecuencia","wled.filter.palette":"Usa paleta","wled.slider.sx":"Velocidad","wled.slider.ix":"Intensidad","wled.slider.c1":"Personalizado 1","wled.slider.c2":"Personalizado 2","wled.slider.c3":"Personalizado 3","wled.option.o1":"Opci\xF3n 1","wled.option.o2":"Opci\xF3n 2","wled.option.o3":"Opci\xF3n 3","wled.color_black":"Negro (apagado)","wled.not_used":"Este efecto no lo usa","wled.not_wled":"Elige una luz de la integraci\xF3n WLED.","wled.main_light":"Esta es la luz principal de WLED (solo brillo): elige una de las luces de sus segmentos.","wled.unreachable":"El color secundario, la vista previa de paletas y el detalle de los efectos vienen directo de WLED ({host}), al que este navegador no llega.","wled.mixed_content":"El color secundario, la vista previa de paletas y el detalle de los efectos vienen directo de WLED ({host}): esta p\xE1gina est\xE1 en https y el dispositivo en http. Abre Home Assistant por http en tu red o indica una direcci\xF3n https para el dispositivo.","controls.host":"Direcci\xF3n de WLED","controls.host_helper":"Por defecto, la direcci\xF3n del dispositivo en Home Assistant (su URL de configuraci\xF3n).","controls.show_effects":"Mostrar efectos"};var z7={en:c5,es:W7},h=(L,V,C)=>{let H=L?.language??(typeof document<"u"&&document.documentElement.lang||"en"),e=H.split("-")[0],r=z7[H]?.[V]??z7[e]?.[V]??c5[V];if(C)for(let[t,M]of Object.entries(C))r=r.replace(`{${t}}`,String(M));return r};var $=O1(class extends d1{constructor(L){if(super(L),L.type!==b2.ATTRIBUTE||L.name!=="class"||L.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(L){return" "+Object.keys(L).filter(V=>L[V]).join(" ")+" "}update(L,[V]){if(this.st===void 0){this.st=new Set,L.strings!==void 0&&(this.nt=new Set(L.strings.join(" ").split(/\s/).filter(H=>H!=="")));for(let H in V)V[H]&&!this.nt?.has(H)&&this.st.add(H);return this.render(V)}let C=L.element.classList;for(let H of this.st)H in V||(C.remove(H),this.st.delete(H));for(let H in V){let e=!!V[H];e===this.st.has(H)||this.nt?.has(H)||(e?(C.add(H),this.st.add(H)):(C.remove(H),this.st.delete(H)))}return C1}});var{I:ZH}=m7;var V8={},U7=(L,V=V8)=>L._$AH=V;var x5=O1(class extends d1{constructor(){super(...arguments),this.key=A}render(L,V){return this.key=L,V}update(L,[V,C]){return V!==this.key&&(U7(L),this.key=V),C}});var u5=(L,V)=>{g(L,"hass-action",{config:{tap_action:{action:"navigate",navigation_path:V}},action:"tap"})};var L8=(L,V)=>{let C=V.entity?s5(L,V.entity):[],H=V.name??C[C.length-1]??"",e=[];return V.breadcrumb==="auto"?e=C.slice(0,-1):V.breadcrumb!=="none"&&V.breadcrumb&&(e=[V.breadcrumb]),[...e,H]},e8=(L,V)=>{let C=V.children[V.children.length-1];switch(V.view){case"details":return L.localize("ui.dialogs.more_info_control.details");case"related":return L.localize("ui.dialogs.more_info_control.related");case"add_to":return L.localize("ui.dialogs.more_info_control.add_to.item");case"settings":return C?.viewTitle||L.localize("ui.dialogs.more_info_control.settings");default:return C?.viewTitle}},E2=(L,V,C)=>{let H=C.entityId&&C.entityId!==V.entity?s5(L,C.entityId):L8(L,V),e=C.view==="root"&&!C.children.length?void 0:e8(L,C),r=e?H:H.slice(0,-1);return{title:e??H[H.length-1]??"",breadcrumb:r.filter(Boolean),breadcrumbClickable:!!C.entityId&&U1(L)&&(C.view!=="root"||V.breadcrumb==="auto")}},B2=(L,V,C,H,e)=>{let r=w7(L)?" \u25C2 ":" \u25B8 ",t=V.breadcrumb.join(r);return o`
    <span slot=${C} class="title" @click=${H}>
      ${V.breadcrumb.length?V.breadcrumbClickable&&e?o`<button class="breadcrumb" @click=${e}>
                ${t}
              </button>`:o`<p class="breadcrumb">${t}</p>`:A}
      <p class="main">${V.title}</p>
    </span>
  `};var G7,Z5=()=>G7,h5=L=>{G7=L};var i1=async(L,V)=>{if(V.every(Q1))return!0;try{(await window.loadCardHelpers?.())?.importMoreInfoControl?.(L)}catch(H){console.warn("[more-info-popup-card] Could not load",L,H)}return(await Promise.all(V.map(H=>V1(H,8e3)))).every(Boolean)};var r8=new Set(["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","disabled"]),S5=L=>r8.has(L)?`var(--${L}-color)`:L,t8=["off","unavailable","unknown","idle","standby","closed","locked","disarmed","docked","not_home"],M8=L=>!t8.includes(L.state),Q7=(L,V,C)=>{let H={},e=u(L.entity_id),r=L.state.toLowerCase().replace(/[^a-z0-9]+/g,"_"),t=L.attributes.device_class,M=(i,p)=>{if(!i)return;let n=S5(i),[d,v]=p?["on","active"]:["off","inactive"];H[`--state-${v}-color`]=n,H[`--state-${e}-${v}-color`]=n,H[`--state-${e}-${d}-color`]=n,M8(L)===p&&(H[`--state-${e}-${r}-color`]=n,t&&(H[`--state-${e}-${t}-${r}-color`]=n))};return M(V,!0),M(C,!1),H};var K7=new Map,o8=L=>new Promise(V=>setTimeout(V,L)),i8=async L=>{if(!await V1("ha-icon"))return;let V=document.createElement("ha-icon");V.style.cssText="position:fixed;visibility:hidden;pointer-events:none",V.icon=L,document.body.append(V);try{for(let C=0;C<50;C++){await V.updateComplete;let H=V.shadowRoot?.querySelector("ha-svg-icon");if(H?.path)return H.path;await o8(100)}return}finally{V.remove()}},f5=L=>{let V=K7.get(L);return V||(V=i8(L),K7.set(L,V)),V};var q7="more-info-popup-trigger-control",a8=["automation","script"],g5=(L,V)=>{let[C,H]=V?["on","active"]:["off","inactive"],e=a8.includes(L)?`var(--state-${H}-color)`:V?"var(--primary-color)":"var(--disabled-color)";return`var(--state-${L}-${C}-color, var(--state-${L}-${H}-color, ${e}))`},t4=["queued","parallel"],A8=L=>L.state==="off"||L.attributes.mode==="restart"||L.state==="on"&&t4.includes(L.attributes.mode)&&L.attributes.current<L.attributes.max,n8=1100,d8=350,p8=1500,Y7=L=>new Promise(V=>setTimeout(V,L)),X7,J7,j7,C4,H4,V4,L4,e4,r4,T,O5,_5,b5,y5,w5,k5,T5,P5,K=class extends(r4=E,e4=[O({attribute:!1})],L4=[O({attribute:!1})],V4=[O({attribute:!1})],H4=[O({attribute:!1})],C4=[O({attribute:!1})],j7=[O({attribute:!1})],J7=[x()],X7=[x()],r4){constructor(){super(...arguments);m(this,O5,a(T,8,this)),a(T,11,this);m(this,_5,a(T,12,this)),a(T,15,this);m(this,b5,a(T,16,this)),a(T,19,this);m(this,y5,a(T,20,this,"switch")),a(T,23,this);m(this,w5,a(T,24,this,"vertical")),a(T,27,this);m(this,k5,a(T,28,this,!0)),a(T,31,this);m(this,T5,a(T,32,this,"idle")),a(T,35,this);m(this,P5,a(T,36,this,{})),a(T,39,this);s(this,"_timer")}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),this._phase="idle"}get _domain(){return u(this.stateObj.entity_id)}get _scriptFields(){let C=k2(this.stateObj.entity_id);return this.hass.services?.script?.[C]}_requiredFilled(){let C=this._scriptFields?.fields??{},H=this._scriptData.data;return Object.entries(C).every(([e,r])=>!r.required||H?.[e]!==void 0)}_call(){let C=this.hass,H=this.stateObj.entity_id;switch(this._domain){case"script":return C.callService("script","turn_on",{entity_id:H,...this._scriptData.data?{variables:this._scriptData.data}:{}});case"automation":return C.callService("automation","trigger",{entity_id:H,skip_condition:!0});default:return C.callService(this._domain==="input_button"?"input_button":"button","press",{entity_id:H})}}async _fire(C){if(C.stopPropagation(),!this._canFire)return;clearTimeout(this._timer),g(window,"haptic","light"),this._phase="firing";let H=Promise.race([this._call(),Y7(p8)]),e=!0;try{await Promise.all([H,Y7(d8)])}catch{e=!1,g(window,"haptic","failure")}this._phase=e?"done":"error",this._timer=setTimeout(()=>{this._phase="idle"},n8)}_keyDown(C){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),this._fire(C))}get _unavailable(){return this.stateObj.state==="unavailable"}get _running(){return this._domain==="script"&&this.stateObj.state==="on"}get _canFire(){return this._unavailable||this._phase==="firing"?!1:this._domain!=="script"?!0:A8(this.stateObj)&&this._requiredFilled()}get _label(){let C=this.hass;switch(this._domain){case"script":return C.localize("ui.card.script.run");case"automation":return C.localize("ui.card.automation.trigger");default:return C.localize("ui.card.button.press")}}_handleIcon(){let C=this._phase==="done"?h1:this._phase==="error"?d0:void 0;return o`
      <ha-state-icon
        class=${$({hidden:!!C})}
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        .icon=${this.icon}
      ></ha-state-icon>
      ${C?o`<ha-svg-icon class="feedback" .path=${C}></ha-svg-icon>`:A}
    `}get _caption(){return this._running&&this._phase==="idle"?this.hass.localize("ui.card.script.running_single"):this._label}render(){if(!this.hass||!this.stateObj)return A;let C=this._domain,H=this._phase!=="idle"||this._running,e=this.variant==="button";return o`
      <div
        class=${$({pad:!0,push:e,[this.layout]:e,up:H,running:this._running&&this._phase==="idle",error:this._phase==="error",disabled:this._unavailable||!H&&!this._canFire})}
        role="button"
        tabindex=${this._unavailable?-1:0}
        aria-label=${this._label}
        aria-disabled=${!this._canFire}
        style=${F({"--on-color":g5(C,!0),"--off-color":g5(C,!1)})}
        @click=${this._fire}
        @keydown=${this._keyDown}
      >
        <div class="track"></div>
        ${e?o`<div class="fill"></div>
                <div class="face">
                  <div class="icon">${this._handleIcon()}</div>
                  <span class="caption">${this._caption}</span>
                </div>`:o`<div class="handle">${this._handleIcon()}</div>`}
      </div>
      ${C==="script"?this._scriptExtras():A}
      ${C==="automation"?this._automationBar():A}
    `}_automationBar(){let C=this.stateObj,H=C.state==="on",e=r=>{r.stopPropagation(),this.hass.callService("automation",H?"turn_off":"turn_on",{entity_id:C.entity_id})};return o`
      <ha-control-button-group class="bar">
        <ha-control-button
          class=${$({active:H})}
          style=${F({"--color":g5("automation",!0)})}
          .label=${this.hass.localize(H?"ui.card.common.turn_off":"ui.card.common.turn_on")}
          .disabled=${this._unavailable}
          @click=${e}
        >
          <ha-svg-icon .path=${r1}></ha-svg-icon>
          <span class="label">${this.hass.formatEntityState(C)}</span>
        </ha-control-button>
      </ha-control-button-group>
    `}_scriptExtras(){let C=this.hass,H=this.stateObj,e=this._scriptFields,r=e?.fields??{},t=H.attributes.current||0,M=t4.includes(H.attributes.mode)&&t>1,i=n=>{n.stopPropagation(),C.callService("script","turn_off",{entity_id:H.entity_id})},p=n=>{this._scriptData={...this._scriptData,...n.detail.value}};return o`
      ${this.showCancel?o`<ha-control-button-group class="bar">
              <ha-control-button .disabled=${!t} @click=${i}>
                <ha-svg-icon .path=${S1}></ha-svg-icon>
                ${C.localize(M?"ui.card.script.cancel_all":"ui.card.script.cancel")}
              </ha-control-button>
            </ha-control-button-group>`:A}
      ${e?.description?o`<ha-markdown
              breaks
              .content=${e.description}
            ></ha-markdown>`:A}
      ${Object.keys(r).length?o`
              <div class="fields">
                <ha-service-control
                  hide-picker
                  hide-description
                  .hass=${C}
                  .value=${{action:H.entity_id,...this._scriptData}}
                  .narrow=${window.matchMedia("(max-width: 870px)").matches}
                  @value-changed=${p}
                ></ha-service-control>
              </div>
            `:A}
    `}};T=N(r4),O5=new WeakMap,_5=new WeakMap,b5=new WeakMap,y5=new WeakMap,w5=new WeakMap,k5=new WeakMap,T5=new WeakMap,P5=new WeakMap,l(T,4,"hass",e4,K,O5),l(T,4,"stateObj",L4,K,_5),l(T,4,"icon",V4,K,b5),l(T,4,"variant",H4,K,y5),l(T,4,"layout",C4,K,w5),l(T,4,"showCancel",j7,K,k5),l(T,4,"_phase",J7,K,T5),l(T,4,"_scriptData",X7,K,P5),D(T,K),s(K,"styles",y`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: stretch;
      gap: var(--ha-space-6);
    }
    /* Same box as ha-control-switch in state-control-styles.ts. */
    .pad {
      --pad-padding: 6px;
      --pad-radius: var(--ha-border-radius-6xl, 36px);
      position: relative;
      box-sizing: border-box;
      width: 130px;
      height: 45vh;
      max-height: 320px;
      min-height: 200px;
      padding: var(--pad-padding);
      border-radius: var(--pad-radius);
      display: flex;
      flex-direction: column-reverse;
      cursor: pointer;
      outline: none;
      user-select: none;
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      --mdc-icon-size: 24px;
    }
    .pad:focus-visible {
      box-shadow: 0 0 0 2px var(--off-color);
    }
    .pad.up:focus-visible {
      box-shadow: 0 0 0 2px var(--on-color);
    }
    .pad.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .track {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: var(--off-color);
      opacity: 0.2;
      transition:
        background-color 180ms ease-in-out,
        opacity 180ms ease-in-out;
    }
    .pad:not(.disabled):hover .track {
      opacity: 0.4;
    }
    .handle {
      position: relative;
      height: 50%;
      width: 100%;
      border-radius: calc(var(--pad-radius) - var(--pad-padding));
      background-color: var(--off-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1.15),
        scale 120ms ease-out,
        background-color 180ms ease-in-out;
    }
    /* scale, not transform: pressing must not cancel the trip up. */
    .pad:not(.disabled):active .handle {
      scale: 0.97;
    }
    .handle ha-state-icon {
      transition: opacity 120ms ease-in-out;
    }
    .handle ha-state-icon.hidden {
      opacity: 0;
    }
    .handle .feedback {
      position: absolute;
    }
    .pad.up .track {
      background-color: var(--on-color);
    }
    .pad.up .handle {
      transform: translateY(-100%);
      background-color: var(--on-color);
    }
    /* Push button: one surface, filled from the middle while it acts. */
    .pad.push {
      flex-direction: column;
      overflow: hidden;
      transition: scale 120ms ease-out;
    }
    .pad.push:not(.disabled):active {
      scale: 0.98;
    }
    .pad.push.horizontal {
      width: 100%;
      max-width: 320px;
      height: 130px;
      min-height: 0;
      max-height: none;
    }
    .pad.push.horizontal .face {
      flex-direction: row;
      gap: var(--ha-space-3);
    }
    .pad.push.square,
    .pad.push.circle {
      width: 200px;
      height: 200px;
      min-height: 0;
      max-height: none;
    }
    .pad.push.circle {
      border-radius: 50%;
    }
    .fill {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: var(--on-color);
      opacity: 0;
      transform: scale(0.4);
      transition:
        transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1),
        opacity 200ms ease-in-out,
        background-color 180ms ease-in-out;
    }
    .pad.push.up .fill {
      opacity: 1;
      transform: none;
    }
    .face {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--ha-space-2);
      color: var(--primary-text-color);
      transition: color 180ms ease-in-out;
      --mdc-icon-size: 32px;
    }
    .face .icon {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pad.push.up .face {
      color: white;
    }
    .caption {
      font-size: var(--ha-font-size-m);
      font-weight: var(--ha-font-weight-medium);
      line-height: 1.4;
      text-align: center;
      padding: 0 var(--ha-space-2);
    }
    .pad.push.error .fill {
      background-color: var(--error-color);
    }
    .pad.push.error .face {
      animation: shake-x 400ms ease-in-out;
    }
    .pad.push.running .fill {
      animation: breathe-fill 1.6s ease-in-out infinite;
    }
    .pad.push.running .face ha-state-icon {
      animation: pulse 1.6s ease-in-out infinite;
    }
    @keyframes breathe-fill {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
    @keyframes shake-x {
      0%,
      100% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-6px);
      }
      75% {
        transform: translateX(6px);
      }
    }
    .pad.error .track,
    .pad.error .handle {
      background-color: var(--error-color);
    }
    .pad.error .handle {
      animation: shake 400ms ease-in-out;
    }
    .pad.running .track {
      animation: breathe 1.6s ease-in-out infinite;
    }
    .pad.running .handle ha-state-icon {
      animation: pulse 1.6s ease-in-out infinite;
    }
    .feedback {
      animation: pop 260ms cubic-bezier(0.2, 0.9, 0.3, 1.4);
    }
    @keyframes breathe {
      0%,
      100% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.45;
      }
    }
    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }
    @keyframes pop {
      from {
        transform: scale(0.4);
        opacity: 0;
      }
    }
    @keyframes shake {
      0%,
      100% {
        transform: translateY(-100%) translateX(0);
      }
      25% {
        transform: translateY(-100%) translateX(-6px);
      }
      75% {
        transform: translateY(-100%) translateX(6px);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .handle,
      .track,
      .fill,
      .face {
        transition: none;
      }
      .pad.running .track,
      .pad.running .handle ha-state-icon,
      .pad.push.running .fill,
      .pad.push.running .face ha-state-icon,
      .pad.push.error .face,
      .pad.error .handle,
      .feedback {
        animation: none;
      }
    }
    /* Button bar under the control, as in more-info-vacuum / -lock. */
    .bar {
      width: 100%;
      max-width: 264px;
      --control-button-group-thickness: 48px;
    }
    .bar ha-control-button {
      --control-button-border-radius: var(--ha-border-radius-xl, 18px);
    }
    .bar ha-control-button.active {
      --control-button-icon-color: white;
      --control-button-background-color: var(--color);
      --control-button-focus-color: var(--color);
      --control-button-background-opacity: 1;
    }
    .bar ha-svg-icon {
      margin-inline-end: var(--ha-space-1);
    }
    /* Above the button background, which is opaque when active. */
    .bar .label {
      position: relative;
    }
    ha-markdown {
      align-self: stretch;
      text-align: center;
      padding: 0 var(--ha-space-4);
    }
    .fields {
      align-self: stretch;
      padding: var(--ha-space-4);
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-border-radius-md);
    }
    ha-service-control {
      --service-control-padding: 0;
      --service-control-items-border-top: none;
    }
  `);customElements.get(q7)||customElements.define(q7,K);var K1=["ha-icon-button-group","ha-icon-button-toggle","light-color-rgb-picker","light-color-temp-picker","ha-more-info-light-favorite-colors"],i4={cover:["ha-icon-button-group","ha-icon-button-toggle","ha-state-control-cover-position","ha-state-control-cover-tilt-position","ha-state-control-cover-toggle","ha-state-control-cover-buttons","ha-more-info-cover-favorite-positions"],valve:["ha-icon-button-group","ha-icon-button-toggle","ha-state-control-valve-position","ha-state-control-valve-toggle","ha-state-control-valve-buttons","ha-more-info-valve-favorite-positions"],lock:["ha-control-button","ha-control-button-group","ha-state-icon"],alarm_control_panel:["ha-control-button","ha-state-icon"],siren:["ha-button","more-info-siren"],vacuum:["ha-control-button","ha-control-button-group","ha-battery-icon","ha-icon-next","ha-more-info-control-select-container","more-info-vacuum"],lawn_mower:["ha-control-button","ha-control-button-group","ha-battery-icon"]},_1={toggle:{tag:"ha-state-control-toggle",load:"switch"},brightness:{tag:"ha-state-control-light-brightness",load:"light",extraTags:K1},fan_speed:{tag:"ha-state-control-fan-speed",load:"fan",extraTags:["ha-outlined-icon-button"]},position:{tag:"ha-state-control-cover-position",load:"cover"},tilt:{tag:"ha-state-control-cover-tilt-position",load:"cover"},cover_toggle:{tag:"ha-state-control-cover-toggle",load:"cover"},cover_buttons:{tag:"ha-state-control-cover-buttons",load:"cover"},valve_position:{tag:"ha-state-control-valve-position",load:"valve"},valve_toggle:{tag:"ha-state-control-valve-toggle",load:"valve"},valve_buttons:{tag:"ha-state-control-valve-buttons",load:"valve"},lock:{tag:"ha-state-control-lock-toggle",load:"lock"},alarm_modes:{tag:"ha-state-control-alarm_control_panel-modes",load:"alarm_control_panel"},temperature:{tag:"ha-state-control-climate-temperature",load:"climate"},climate_humidity:{tag:"ha-state-control-climate-humidity",load:"climate"},humidity:{tag:"ha-state-control-humidifier-humidity",load:"humidifier"},water_heater:{tag:"ha-state-control-water_heater-temperature",load:"water_heater"},vacuum_status:{tag:"ha-state-control-vacuum-status",load:"vacuum"},lawn_mower_status:{tag:"ha-state-control-lawn_mower-status",load:"lawn_mower"},media_player:{tag:"more-info-media_player",load:"media_player"},script:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0},more_info:{tag:"more-info-content",load:"",extraTags:["state-card-content"]},press:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button"],inline:!0},trigger:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0},push:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0}},M4=["alarm_control_panel","cover","climate","conversation","fan","humidifier","input_boolean","lawn_mower","light","lock","siren","script","switch","timer","vacuum","valve","water_heater","weather","media_player"],l8=["camera","configurator"],m8=["camera","conversation","counter","date","datetime","group","image","input_datetime","input_number","input_select","input_text","number","person","remote","scene","select","sun","text","time","timer","update","weather"],s8=L=>{let V=u(L.entity_id);if(V==="group"){let C=new Set((L.attributes.entity_id??[]).map(u)),[H]=C;return C.size===1&&H!=="group"&&M4.includes(H)}return M4.includes(V)},a4=L=>!s8(L)&&!l8.includes(u(L.entity_id)),A4=["hs","xy","rgb","rgbw","rgbww"],v8=[...A4,"color_temp","brightness","white"],R2=(L,V)=>L.attributes.supported_color_modes?.some(C=>V.includes(C))??!1,q1=L=>R2(L,v8),F2=L=>R2(L,A4),$2=L=>R2(L,["color_temp"]),D2=L=>R2(L,["white"]),w=(L,V)=>((L.attributes.supported_features??0)&V)!==0,o4=(L,V)=>((L.attributes.supported_features??0)&3)===3&&!w(L,V),E5=L=>{let V=u(L.entity_id);switch(V){case"light":return q1(L)?"brightness":"toggle";case"switch":case"input_boolean":case"siren":return"toggle";case"fan":return w(L,1)?"fan_speed":"toggle";case"cover":return w(L,4)?"position":w(L,128)?"tilt":o4(L,120)?"cover_toggle":"cover_buttons";case"valve":return w(L,4)?"valve_position":o4(L,8)?"valve_toggle":"valve_buttons";case"lock":return"lock";case"alarm_control_panel":return"alarm_modes";case"climate":return"temperature";case"humidifier":return"humidity";case"water_heater":return"water_heater";case"vacuum":return"vacuum_status";case"lawn_mower":return"lawn_mower_status";case"media_player":return"media_player";case"script":case"button":case"input_button":case"automation":return"trigger";default:return m8.includes(V)?"more_info":void 0}},c8=["climate","humidifier","water_heater","media_player"],N2=(L,V)=>{let C=L??"auto";if(C!=="none")return C!=="auto"?C:V?E5(V):void 0},I2=(L,V)=>!c8.includes(u(L))&&V!=="more_info";var q={OPEN:1,CLOSE:2,SET_POSITION:4,STOP:8,OPEN_TILT:16,CLOSE_TILT:32,STOP_TILT:64,SET_TILT_POSITION:128},p1={OPEN:1,CLOSE:2,SET_POSITION:4,STOP:8},n4=1,W2={TONES:4,VOLUME_SET:8,DURATION:16},Y={PAUSE:4,STOP:8,RETURN_HOME:16,STATUS:128,LOCATE:512,CLEAN_SPOT:1024,STATE:4096,START:8192,CLEAN_AREA:16384},x1={START_MOWING:1,PAUSE:2,DOCK:4,STOP:8},d4=(L,...V)=>V.every(C=>w(L,C)),p4=L=>{let V=w(L,q.SET_POSITION),C=w(L,q.SET_TILT_POSITION),H=w(L,q.OPEN|q.CLOSE|q.STOP),e=w(L,q.OPEN_TILT|q.CLOSE_TILT|q.STOP_TILT),r=d4(L,q.OPEN,q.CLOSE)&&!w(L,q.STOP)&&!e&&!V&&!C;return{position:V,tilt:C,buttons:r?"toggle":H||e?"buttons":void 0,switchMode:(V||C)&&(H||e)}},l4=L=>{let V=w(L,p1.SET_POSITION),C=w(L,p1.OPEN|p1.CLOSE|p1.STOP),H=d4(L,p1.OPEN,p1.CLOSE)&&!w(L,p1.STOP)&&!V;return{position:V,tilt:!1,buttons:H?"toggle":C?"buttons":void 0,switchMode:V&&C}},B5=L=>L==null||Array.isArray(L)&&L.length>0,m4=(L,V)=>{if(!V)return!1;let C=u(L.entity_id),H=V.options?.[C];return C==="valve"?w(L,p1.SET_POSITION)&&B5(H?.favorite_positions):w(L,q.SET_POSITION)&&B5(H?.favorite_positions)||w(L,q.SET_TILT_POSITION)&&B5(H?.favorite_tilt_positions)},s4=L=>{let V=L.state;if(V==="unavailable"||V==="unknown"||V==="off")return!1;switch(u(L.entity_id)){case"alarm_control_panel":return V!=="disarmed";case"cover":case"valve":return V!=="closed";case"lawn_mower":return!["docked","paused","idle"].includes(V);case"lock":return V!=="locked";case"vacuum":return!["idle","docked","paused"].includes(V);default:return!0}},R5=L=>{if(L.state==="unavailable")return"var(--state-unavailable-color)";let V=u(L.entity_id),C=L.attributes.device_class,H=L.state.toLowerCase().replace(/[^a-z0-9]+/g,"_"),e=s4(L)?"active":"inactive";return[...C?[`--state-${V}-${C}-${H}-color`]:[],`--state-${V}-${H}-color`,`--state-${V}-${e}-color`,`--state-${e}-color`].reduceRight((t,M)=>`var(${M}${t?`, ${t}`:""})`,"")},v4=(L,V)=>{let C=V.attributes,H=s4(V)?C.current_position??(u(V.entity_id)==="cover"?C.current_tilt_position:void 0):void 0;return H&&H!==100?L.formatEntityAttributeValue(V,"current_position",Math.round(H)):""},x8=L=>["opening","unlocking","locking"].includes(L.state),c4=L=>L.state!=="unavailable"&&(L.attributes.assumed_state===!0||L.state!=="open"&&!x8(L)),F5=["triggered","arming","pending"],x4=L=>["cleaning","on"].includes(L.state),u4=L=>!["docked","off","idle"].includes(L.state),Z4=L=>L.state!=="unavailable"&&L.state!=="returning",h4=L=>L.state!=="unavailable"&&!["docked","idle"].includes(L.state),S4=L=>L.state!=="unavailable"&&L.state!=="docked",f4=(L,V)=>{let C=L.entities[V]?.device_id;if(!C)return;let H=Object.values(L.entities).filter(M=>M.device_id===C),e=["sensor","binary_sensor"],r=H.map(M=>L.states[M.entity_id]).filter(M=>M?.attributes.device_class==="battery"&&e.includes(u(M.entity_id))).sort((M,i)=>e.indexOf(u(M.entity_id))-e.indexOf(u(i.entity_id)))[0];if(!r||u(r.entity_id)!=="binary_sensor"&&isNaN(Number(r.state)))return;let t=H.map(M=>L.states[M.entity_id]).find(M=>M?.attributes.device_class==="battery_charging");return{battery:r,charging:t}},g4=L=>["cs","de","fi","fr","sk","sv"].includes(L.locale?.language??L.language)?" ":"",O4=async(L,V)=>{let C=await window.loadCardHelpers?.();if(!C?.showEnterCodeDialog)throw new Error("The code dialog is not available");return C.showEnterCodeDialog(L,V)},$5=async(L,V,C,H,e)=>{let r;if(C.attributes.code_format&&!H?.options?.lock?.default_code){let t=await O4(L,{codeFormat:"text",codePattern:C.attributes.code_format,title:V.localize(`ui.card.lock.${e}`),submitText:V.localize(`ui.card.lock.${e}`)});if(t==null)throw new Error("Code dialog closed");r=t}await V.callService("lock",e,{entity_id:C.entity_id,code:r})},_4=async(L,V,C,H)=>{let e;if(C.attributes.code_format&&!H?.options?.alarm_control_panel?.default_code){let r=await O4(L,{codeFormat:C.attributes.code_format,title:V.localize("ui.card.alarm_control_panel.disarm"),submitText:V.localize("ui.card.alarm_control_panel.disarm")});if(r==null)throw new Error("Code dialog closed");e=r}await V.callService("alarm_control_panel","alarm_disarm",{entity_id:C.entity_id,code:e})};var N5=L=>V=>(V.attributes[L]??[]).map(String),D5=L=>V=>{let C=V.attributes[L];return C==null?void 0:String(C)},L1=(L,V,C,H)=>({options:N5(L),value:D5(V),service:e=>[u(e.entity_id),C],data:e=>({[V]:e}),icon:H}),u8=(L,V,C,H)=>({optionIcons:{true:C,false:H},options:()=>["true","false"],value:e=>e.attributes[L]==null?void 0:String(!!e.attributes[L]),service:e=>[u(e.entity_id),V],data:e=>({[L]:e==="true"}),icon:C}),Y1={effect:{...L1("effect_list","effect","turn_on",d2)},preset_mode:L1("preset_modes","preset_mode","set_preset_mode",f1),fan_mode:L1("fan_modes","fan_mode","set_fan_mode",P1),swing_mode:L1("swing_modes","swing_mode","set_swing_mode",M2),swing_horizontal_mode:L1("swing_horizontal_modes","swing_horizontal_mode","set_swing_horizontal_mode",M2),hvac_mode:{options:N5("hvac_modes"),value:L=>L.state,service:()=>["climate","set_hvac_mode"],data:L=>({hvac_mode:L}),icon:K0,formatAsState:!0},fan_speed:{...L1("fan_speed_list","fan_speed","set_fan_speed",P1),attributeIcons:!1},mode:L1("available_modes","mode","set_mode",f1),direction:{options:()=>["forward","reverse"],value:D5("direction"),service:()=>["fan","set_direction"],data:L=>({direction:L}),icon:z0},oscillating:u8("oscillating","oscillate",M2,p0),operation_mode:L1("operation_list","operation_mode","set_operation_mode",J0),away_mode:{options:()=>["on","off"],value:D5("away_mode"),service:()=>["water_heater","set_away_mode"],data:L=>({away_mode:L==="on"}),icon:j2,optionIcons:{on:j2,off:n0}},source:{...L1("source_list","source","select_source",T0),attributeIcons:!1},sound_mode:{...L1("sound_mode_list","sound_mode","select_sound_mode",F0),attributeIcons:!1}},z2={options:N5("options"),value:L=>L.state,service:L=>[u(L.entity_id),"select_option"],data:L=>({option:L}),icon:f1,formatAsState:!0},b4={options:()=>["off","on"],value:L=>L.state,service:L=>[u(L.entity_id),"toggle"],data:()=>({}),icon:r1,formatAsState:!0},b1=["select","input_select"],y4=["number","input_number"],w4=["switch","input_boolean","light","fan","siren","automation","script","group","media_player","humidifier","climate","water_heater","remote","valve","cover","lock"];var U2=(L,V)=>["navigate","more-info"].includes((L.tap_action??{action:V?"more-info":"none"}).action),k4={button:"button.press",input_button:"input_button.press",scene:"scene.turn_on",script:"script.turn_on"},T4=["off","closed","locked","unavailable","unknown","idle","standby","paused","docked"],P4=600,X1=L=>{if(L.type)return L.type;if(L.attribute)return"select";let V=L.entity?u(L.entity):"";return b1.includes(V)?"select":y4.includes(V)?"number":w4.includes(V)?"toggle":"action"},E4=L=>L?.map(V=>typeof V=="string"?{value:V}:{...V,value:String(V.value)}),I5=L=>{let[V,C]=L.split(".",2);return[V,C]};var G2=(L,V)=>{let C={...L};for(let[H,e]of Object.entries(V))C[H]===e&&delete C[H];return C},B4=(L,V)=>({...L.entity?{show_state:I2(L.entity,N2(L.control,V?.states[L.entity]))}:{},show_last_changed:!0,show_cancel:!0}),F4={fill:(L,V)=>({...B4(L,V),...L}),strip:(L,V)=>G2(L,B4(L,V))},R4=(L,V,C)=>({...L,controls:(L.controls??[]).map(H=>C(H,{show_arrow:U2(H,!!(H.entity&&V?.states[H.entity]))}))}),$4={fill:(L,V)=>R4(L,V,(C,H)=>({...H,...C})),strip:(L,V)=>R4(L,V,G2)};var J1=(L,V,C)=>{var e,r,t,M,i,p;class H extends(t=E,r=[O({attribute:!1})],e=[x()],t){constructor(){super(...arguments);m(this,i,a(M,8,this)),a(M,11,this);m(this,p,a(M,12,this)),a(M,15,this);s(this,"_form",V())}setConfig(v){this._form.assertConfig?.(v),this._config=v}render(){return this._config?o`
        <ha-form
          .hass=${this.hass}
          .data=${C.fill(this._config,this.hass)}
          .schema=${this._form.schema}
          .computeLabel=${this._form.computeLabel}
          .computeHelper=${this._form.computeHelper}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `:A}_valueChanged(v){v.stopPropagation(),g(this,"config-changed",{config:C.strip(v.detail.value,this.hass)})}}M=N(t),i=new WeakMap,p=new WeakMap,l(M,4,"hass",r,H,i),l(M,4,"_config",e,H,p),D(M,H),customElements.get(L)||customElements.define(L,H)};var C2=()=>{},D4=L=>h(C2(),`controls.${L}`),j1=(L,V,C=!1)=>({select:{mode:"dropdown",custom_value:C,options:L.map(H=>({value:H,label:h(C2(),`${V}.${H}`)||H}))}}),N4={name:"appearance",selector:j1(["plain","card"],"controls.appearance")},I4=L=>D4(L.name)||L.name,W4=()=>({schema:[{name:"entity",required:!0,selector:{entity:{}}},{name:"control",selector:j1(["auto","none",...Object.keys(_1)],"controls.control")},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}},{name:"show_cancel",selector:{boolean:{}}}]},{name:"state_override",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"icon",selector:{icon:{}}},{name:"icon_off",selector:{icon:{}}},{name:"color",selector:{ui_color:{}}},{name:"color_off",selector:{ui_color:{}}}]},{name:"button_layout",selector:j1(["vertical","horizontal","square","circle"],"controls.button_layout")},N4],computeLabel:I4,computeHelper:L=>h(C2(),`controls.${L.name}_helper`)||void 0}),G=(L,V,C=!1)=>({label:D4(L),description:h(C2(),`controls.${L}_helper`)||void 0,required:C,selector:V}),z4=()=>({schema:[{name:"controls",selector:{object:{multiple:!0,label_field:"entity",description_field:"attribute",fields:{type:G("type",j1(["select","toggle","number","action","button"],"controls.type")),entity:G("entity",{entity:{}}),attribute:G("attribute",j1(["state",...Object.keys(Y1)],"controls.attribute",!0)),name:G("name",{text:{}}),icon:G("icon",{icon:{}}),color:G("color",{ui_color:{}}),options:G("options",{select:{multiple:!0,custom_value:!0,options:[]}}),value:G("value",{text:{}}),tap_action:G("tap_action",{ui_action:{}}),show_arrow:G("show_arrow",{boolean:{}}),perform_action:G("perform_action",{text:{}}),data_key:G("data_key",{text:{}}),min:G("min",{number:{mode:"box",step:"any"}}),max:G("max",{number:{mode:"box",step:"any"}}),step:G("step",{number:{mode:"box",step:"any"}})}}}},{name:"",type:"grid",schema:[N4,{name:"wrap",selector:{boolean:{}}}]}],computeLabel:I4,computeHelper:L=>h(C2(),`controls.${L.name}_helper`)||void 0,assertConfig:L=>{if(L.controls?.some(V=>V.options?.some(C=>typeof C!="string")))throw new Error("Options with names or icons can only be edited in YAML")}});var W5="more-info-state-card-editor",z5="more-info-controls-card-editor";J1(W5,W4,F4);J1(z5,z4,$4);var y1=y`
  ha-card.plain {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    --ha-card-background: transparent;
  }
`,Q2=y`
  .chip {
    --mdc-icon-size: 20px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    /* No width rules: the native container sizes its slotted chips. */
    height: var(--control-select-menu-height, 48px);
    padding: var(--control-select-menu-padding, 6px 10px);
    border: none;
    border-radius: var(
      --control-select-menu-border-radius,
      var(--ha-border-radius-lg)
    );
    background: none;
    color: var(--control-select-menu-text-color, var(--primary-text-color));
    font-family: inherit;
    font-size: var(--ha-font-size-m);
    font-weight: var(--ha-font-weight-normal);
    line-height: 1.4;
    letter-spacing: 0.25px;
    text-align: start;
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    z-index: 0;
    transition: box-shadow 180ms ease-in-out;
  }
  .chip::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: var(
      --control-select-menu-background-color,
      var(--disabled-color)
    );
    opacity: var(--control-select-menu-background-opacity, 0.2);
    transition:
      background-color 180ms ease-in-out,
      opacity 180ms ease-in-out;
  }
  button.chip:hover::before {
    background-color: var(--ha-color-on-neutral-quiet);
  }
  .chip:focus-visible,
  .chip:focus-within:has(:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 2px
      var(--control-select-menu-focus-color, var(--secondary-text-color));
  }
  .chip[disabled] {
    cursor: not-allowed;
    color: var(--disabled-color);
  }
  .chip .icon {
    display: flex;
    flex: none;
    --mdc-icon-size: 20px;
  }
  .chip .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }
  .chip .content p {
    margin: 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .chip .label {
    font-size: var(--ha-font-size-s);
    letter-spacing: 0.4px;
  }
  .chip .value {
    font-size: var(--ha-font-size-m);
  }
`;var H2="more-info-state-card",w1="more-info-popup-fill",Z8={temperature:["show-secondary","prevent-interaction-on-scroll"],climate_humidity:["show-current","prevent-interaction-on-scroll"],humidity:["show-secondary","prevent-interaction-on-scroll"],water_heater:["show-current","prevent-interaction-on-scroll"]},h8=16,S8=32,f8=6,g8=L=>Math.round(100/(L.attributes.percentage_step??1))+1,O8=["position","tilt","cover_toggle","cover_buttons","valve_position","valve_toggle","valve_buttons"],_8=5,b8=2,U5=()=>{},y8=["queued","parallel"],w8=L=>L.state==="off"||L.state==="on"&&y8.includes(L.attributes.mode)&&L.attributes.current<L.attributes.max,k8=(L,V)=>{let C=u(V.entity_id),H=V.attributes;if(C==="light"&&V.state==="on"&&H.brightness!=null)return L.formatEntityAttributeValue(V,"brightness");if(C==="fan"&&V.state==="on"&&H.percentage)return L.formatEntityAttributeValue(V,"percentage");if(C==="script"){let e=H.current||0;return e?H.mode==="parallel"&&e>1?L.localize("ui.card.script.running_parallel",{active:e}):L.localize("ui.card.script.running_single"):L.localize("ui.card.script.idle")}if((C==="button"||C==="input_button")&&V.state!=="unavailable")return L.localize("ui.card.button.press");if(C==="cover"||C==="valve"){let e=v4(L,V);return e?`${L.formatEntityState(V)} \xB7 ${e}`:void 0}if(C==="vacuum"&&w(V,Y.STATUS)&&H.status)return L.formatEntityAttributeValue(V,"status")},U4,G4,Q4,K4,q4,Y4,X4,J4,j4,C9,b,G5,Q5,K5,q5,Y5,X5,J5,j5,C3,Q=class extends(C9=E,j4=[O({attribute:!1})],J4=[x()],X4=[x()],Y4=[x()],q4=[x()],K4=[x()],Q4=[x()],G4=[x()],U4=[x()],C9){constructor(){super(...arguments);m(this,G5,a(b,8,this)),a(b,11,this);m(this,Q5,a(b,12,this)),a(b,15,this);m(this,K5,a(b,16,this,!1)),a(b,19,this);m(this,q5,a(b,20,this,{})),a(b,23,this);m(this,Y5,a(b,24,this,"brightness")),a(b,27,this);m(this,X5,a(b,28,this)),a(b,31,this);m(this,J5,a(b,32,this)),a(b,35,this);m(this,j5,a(b,36,this,"normal")),a(b,39,this);s(this,"_openTimeout");s(this,"_controlElement");s(this,"_controlTag");m(this,C3,a(b,40,this,{})),a(b,43,this);s(this,"_loadingKey");s(this,"_entryLoaded")}static getConfigElement(){return document.createElement(W5)}static getStubConfig(C,H){let e=H.find(r=>r.startsWith("light."))??H.find(r=>E5(C.states[r]))??H[0];return{type:`custom:${H2}`,entity:e}}setConfig(C){if(!C?.entity)throw new Error('"entity" is required');if(C.control&&C.control!=="auto"&&C.control!=="none"&&!(C.control in _1))throw new Error(`Unknown control "${C.control}"`);this._config=C,this._ready=!1,this._loadingKey=void 0,this._scriptData={action:C.entity},this._lightControl="brightness",this._positionMode=void 0,this._setOpenState("normal"),this._entry=void 0,this._entryLoaded=void 0,this._loadIconPaths(C)}_loadIconPaths(C){let{icon:H,icon_off:e}=C;this._iconPaths={},!(!H&&!e)&&Promise.all([H?f5(H):void 0,e?f5(e):void 0]).then(([r,t])=>{this._config===C&&(this._iconPaths={on:r,off:t})})}connectedCallback(){super.connectedCallback(),g(this,w1)}disconnectedCallback(){super.disconnectedCallback(),this._setOpenState("normal")}set popupFill(C){if(this.style.removeProperty("--popup-min-height"),C<=0)return;let H=this.getBoundingClientRect().height;this.style.setProperty("--popup-min-height",`${H+C}px`)}getCardSize(){return 7}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _controlName(){return N2(this._config?.control,this._stateObj)}willUpdate(){if(this._ready||!this._config||!this._stateObj)return;let C=this._controlName,H=C?_1[C]:void 0,e=this._showState&&this._config.show_last_changed!==!1,r=`${this._config.entity}:${C}:${e}`;if(r===this._loadingKey)return;this._loadingKey=r;let t=[];if(H){let p="extraTags"in H?H.extraTags:[],n=H.load||u(this._config.entity);t.push(i1(n,[H.tag,...p]))}let M=u(this._config.entity),i=M==="light"?K1:i4[M];H&&i&&t.push(i1(M,[...i])),e&&t.push(i1("switch",["ha-more-info-state-header"])),Promise.all(t).then(()=>{this._loadingKey===r&&(this._ready=!0)})}get _showState(){return this._config.show_state??I2(this._config.entity,this._controlName)}_control(C){let H=this._controlName;if(!H)return A;if(H==="script")return this._script(C);if(H==="press")return this._press(C);if(H==="trigger"||H==="push")return o`<more-info-popup-trigger-control
        .hass=${this.hass}
        .stateObj=${C}
        .variant=${H==="push"?"button":"switch"}
        .icon=${this._config.icon}
        .layout=${this._config.button_layout??"vertical"}
        .showCancel=${this._config.show_cancel!==!1}
      ></more-info-popup-trigger-control>`;if(H==="more_info")return this._moreInfo(C);let e=u(C.entity_id);if(this._positionComposite(C))return this._positionControls(C);let{tag:r}=_1[H];if(this._controlTag!==r){this._controlTag=r,this._controlElement=document.createElement(r);for(let i of Z8[H]??[])this._controlElement.setAttribute(i,"");H==="lock"&&this._controlElement.addEventListener("lock-service-called",()=>this._setOpenState("normal"))}let t=this._controlElement;t.stateObj=C,t.hass=this.hass;let M=e==="fan";return H==="toggle"&&(this._iconPaths.on||this._iconPaths.off)?(t.iconPathOn=this._iconPaths.on??this._iconPaths.off,t.iconPathOff=this._iconPaths.off??this._iconPaths.on):H==="toggle"&&(t.iconPathOn=M?P1:e==="light"?y0:e==="siren"?s2:void 0,t.iconPathOff=M?S0:e==="light"?b0:e==="siren"?X0:void 0),e==="light"&&(H==="toggle"||H==="brightness")?this._light(C,t):e==="siren"&&H==="toggle"?this._siren(C,t):e==="lock"&&H==="lock"?this._lock(C,t):e==="alarm_control_panel"&&H==="alarm_modes"?F5.includes(C.state)?this._statusIcon(C,"alarm"):t:e==="vacuum"&&H==="vacuum_status"?o`${t}${this._vacuumCommands(C)}`:e==="lawn_mower"&&H==="lawn_mower_status"?o`${t}${this._mowerCommands(C)}`:H==="fan_speed"&&M&&g8(C)>f8&&w(C,S8|h8)?o`${t}${this._fanPowerButton(C)}`:t}_light(C,H){let e=this.hass,r=q1(C),t=F2(C),M=$2(C),i=D2(C);if(!r&&!t&&!M)return H;let p=C.state==="unavailable",n=this._lightControl,d=_=>R=>{R.stopPropagation(),this._lightControl=_},v=(_,R={})=>e.callService("light",_,{entity_id:C.entity_id,...R});(t||M)&&this._loadEntry();let c=this._entry,Z=c?.options?.light?.favorite_colors,k=!!(c&&(Z==null||Z.length>0));return o`
      ${r?A:H}
      ${r&&n==="brightness"?H:t&&n==="color"?o`<light-color-rgb-picker
                .hass=${e}
                .stateObj=${C}
              ></light-color-rgb-picker>`:M&&n==="color_temp"?o`<light-color-temp-picker
                  .hass=${e}
                  .stateObj=${C}
                ></light-color-temp-picker>`:A}
      <ha-icon-button-group>
        ${r?o`<ha-icon-button
                .disabled=${p}
                .label=${e.localize("ui.dialogs.more_info_control.light.toggle")}
                @click=${_=>{_.stopPropagation(),v(C.state==="on"?"turn_off":"turn_on")}}
              >
                <ha-svg-icon .path=${r1}></ha-svg-icon>
              </ha-icon-button>`:A}
        ${t||M?o`<div class="separator"></div>
                <ha-icon-button-toggle
                  .selected=${n==="brightness"}
                  .disabled=${p}
                  .label=${e.formatEntityAttributeName(C,"brightness")}
                  @click=${d("brightness")}
                >
                  <ha-svg-icon .path=${o2}></ha-svg-icon>
                </ha-icon-button-toggle>`:A}
        ${t?o`<ha-icon-button-toggle
                border-only
                .selected=${n==="color"}
                .disabled=${p}
                .label=${e.localize("ui.dialogs.more_info_control.light.color")}
                @click=${d("color")}
              >
                <span class="wheel color"></span>
              </ha-icon-button-toggle>`:A}
        ${M?o`<ha-icon-button-toggle
                border-only
                .selected=${n==="color_temp"}
                .disabled=${p}
                .label=${e.localize("ui.dialogs.more_info_control.light.color_temp")}
                @click=${d("color_temp")}
              >
                <span class="wheel color-temp"></span>
              </ha-icon-button-toggle>`:A}
        ${i?o`<div class="separator"></div>
                <ha-icon-button
                  .disabled=${p}
                  .label=${e.localize("ui.dialogs.more_info_control.light.set_white")}
                  @click=${_=>{_.stopPropagation(),v("turn_on",{white:!0})}}
                >
                  <ha-svg-icon .path=${l2}></ha-svg-icon>
                </ha-icon-button>`:A}
      </ha-icon-button-group>
      ${k?o`<ha-more-info-light-favorite-colors
              .hass=${e}
              .stateObj=${C}
              .entry=${c}
            ></ha-more-info-light-favorite-colors>`:A}
    `}_positionComposite(C){let H=u(C.entity_id);return(H==="cover"||H==="valve")&&(this._config.control??"auto")==="auto"&&O8.includes(this._controlName)}_positionControls(C){let H=this.hass,e=u(C.entity_id),r=e==="cover"?p4(C):l4(C),t=this._positionMode??(r.position||r.tilt?"position":"button"),M=n=>d=>{d.stopPropagation(),this._positionMode=n},i=e==="cover",p=A;return t==="position"?p=o`
        ${r.position?i?o`<ha-state-control-cover-position
                  .hass=${H}
                  .stateObj=${C}
                ></ha-state-control-cover-position>`:o`<ha-state-control-valve-position
                  .hass=${H}
                  .stateObj=${C}
                ></ha-state-control-valve-position>`:A}
        ${r.tilt?o`<ha-state-control-cover-tilt-position
                .hass=${H}
                .stateObj=${C}
              ></ha-state-control-cover-tilt-position>`:A}
      `:r.buttons==="toggle"?p=i?o`<ha-state-control-cover-toggle
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-cover-toggle>`:o`<ha-state-control-valve-toggle
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-valve-toggle>`:r.buttons==="buttons"&&(p=i?o`<ha-state-control-cover-buttons
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-cover-buttons>`:o`<ha-state-control-valve-buttons
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-valve-buttons>`),o`
      <div class="main-control">${p}</div>
      ${r.switchMode?o`<ha-icon-button-group>
              <ha-icon-button-toggle
                .label=${H.localize(`ui.dialogs.more_info_control.${e}.switch_mode.position`)}
                .selected=${t==="position"}
                .path=${B0}
                @click=${M("position")}
              ></ha-icon-button-toggle>
              <ha-icon-button-toggle
                .label=${H.localize(`ui.dialogs.more_info_control.${e}.switch_mode.button`)}
                .selected=${t==="button"}
                .path=${U0}
                @click=${M("button")}
              ></ha-icon-button-toggle>
            </ha-icon-button-group>`:A}
    `}_favoritePositions(C){return this._loadEntry(),m4(C,this._entry)?u(C.entity_id)==="cover"?o`<ha-more-info-cover-favorite-positions
          .hass=${this.hass}
          .stateObj=${C}
          .entry=${this._entry}
          .editMode=${!1}
        ></ha-more-info-cover-favorite-positions>`:o`<ha-more-info-valve-favorite-positions
          .hass=${this.hass}
          .stateObj=${C}
          .entry=${this._entry}
          .editMode=${!1}
        ></ha-more-info-valve-favorite-positions>`:A}_statusIcon(C,H){return o`
      <div
        class="status ${H}"
        style=${F({"--state-color":R5(C)})}
      >
        <div class="icon">
          <ha-state-icon
            .hass=${this.hass}
            .stateObj=${C}
          ></ha-state-icon>
        </div>
      </div>
    `}_setOpenState(C,H){clearTimeout(this._openTimeout),this._openState=C,H&&(this._openTimeout=setTimeout(()=>{this._openState="normal"},H*1e3))}_lock(C,H){let e=this.hass;this._loadEntry();let r=t=>{if(t.stopPropagation(),this._openState!=="confirm"){this._setOpenState("confirm",_8);return}$5(this,e,C,this._entry,"open").catch(U5),this._setOpenState("done",b8)};return o`
      ${C.state==="jammed"?this._statusIcon(C,"lock"):H}
      ${w(C,n4)?o`<div class="buttons">
              ${this._openState==="done"?o`<p class="open-done">
                      <ha-svg-icon .path=${h1}></ha-svg-icon>
                      ${e.localize("ui.card.lock.open_door_done")}
                    </p>`:o`<ha-control-button
                      .disabled=${!c4(C)}
                      class="open-button ${this._openState}"
                      style=${F({"--state-color":R5(C)})}
                      @click=${r}
                    >
                      ${this._openState==="confirm"?e.localize("ui.card.lock.open_door_confirm"):e.localize("ui.card.lock.open_door")}
                    </ha-control-button>`}
            </div>`:A}
    `}_siren(C,H){let e=w(C,W2.TONES)&&C.attributes.available_tones||w(C,W2.VOLUME_SET|W2.DURATION);return o`
      ${H}
      ${e?o`<ha-button appearance="plain" size="s" @click=${t=>{t.stopPropagation(),v5(this.shadowRoot,"more-info-siren","_showAdvancedControlsDialog",{stateObj:C})}}>
              ${this.hass.localize("ui.components.siren.more_controls")}
            </ha-button>`:A}
    `}_commandButton(C,H,e,r){return o`<ha-control-button
      .label=${C}
      .disabled=${e}
      @click=${t=>{t.stopPropagation(),r()}}
    >
      <ha-svg-icon .path=${H}></ha-svg-icon>
    </ha-control-button>`}_commands(C){return C.length?o`<div class="buttons">
          <ha-control-button-group class="commands">
            ${C}
          </ha-control-button-group>
        </div>`:A}_vacuumCommands(C){let H=this.hass,e=C.state==="unavailable",r=v=>w(C,v),t=v=>()=>H.callService("vacuum",v,{entity_id:C.entity_id}),M=v=>H.localize(`ui.dialogs.more_info_control.vacuum.${v}`),i=x4(C),p=!r(Y.STATE)&&!r(Y.START),n=i&&r(Y.PAUSE),d=[];return(r(Y.START)||r(Y.PAUSE))&&d.push(this._commandButton(M(p?"start_pause":n?"pause":"start"),p?I0:n?H5:m2,e,p&&r(Y.PAUSE)?t("start_pause"):t(i?"pause":"start"))),r(Y.STOP)&&d.push(this._commandButton(M("stop"),S1,e||!u4(C),t("stop"))),r(Y.RETURN_HOME)&&d.push(this._commandButton(M("return_home"),C5,e||!Z4(C),t("return_to_base"))),r(Y.LOCATE)&&d.push(this._commandButton(M("locate"),E0,e,t("locate"))),r(Y.CLEAN_SPOT)&&d.push(this._commandButton(M("clean_spot"),G0,e,t("clean_spot"))),this._commands(d)}_mowerCommands(C){let H=this.hass,e=C.state==="unavailable",r=n=>w(C,n),t=n=>()=>H.callService("lawn_mower",n,{entity_id:C.entity_id}),M=n=>H.localize(`ui.dialogs.more_info_control.lawn_mower.${n}`),i=C.state==="mowing"&&r(x1.PAUSE),p=[];return(r(x1.START_MOWING)||r(x1.PAUSE))&&p.push(this._commandButton(M(i?"pause":"start_mowing"),i?H5:m2,e||!i&&(!r(x1.START_MOWING)||C.state==="mowing"),t(i?"pause":"start_mowing"))),r(x1.STOP)&&p.push(this._commandButton(M("stop"),S1,e||!h4(C),t("stop"))),r(x1.DOCK)&&p.push(this._commandButton(M("dock"),C5,e||!S4(C),t("dock"))),this._commands(p)}_cleanAreas(C){let H=this.hass,e=r=>{r.stopPropagation();let t=!1,M=()=>{t=!0};window.addEventListener("show-child-view",M);let i=v5(this.shadowRoot,"more-info-vacuum","_handleCleanAreas",{stateObj:C,_i18n:{localize:H.localize}});window.removeEventListener("show-child-view",M),(t||!i)&&g(this,"hass-more-info",{entityId:C.entity_id})};return o`
      <ha-more-info-control-select-container>
        <button
          class="clean-areas-button"
          ?disabled=${C.state==="unavailable"}
          @click=${e}
        >
          <div class="icon">
            <ha-svg-icon .path=${Q0}></ha-svg-icon>
          </div>
          <div class="content">
            <p class="label">
              ${H.localize("ui.dialogs.more_info_control.vacuum.cleaning")}
            </p>
            <p class="value">
              ${H.localize("ui.dialogs.more_info_control.vacuum.by_area")}
            </p>
          </div>
          <div class="icon"><ha-icon-next></ha-icon-next></div>
        </button>
      </ha-more-info-control-select-container>
    `}_afterControls(C){let H=this._controlName;if(!H)return A;let e=this.hass,r=u(C.entity_id);if(this._positionComposite(C))return this._favoritePositions(C);if(r==="lock"&&H==="lock"&&C.state==="jammed"){let t=M=>i=>{i.stopPropagation(),$5(this,e,C,this._entry,M).catch(U5)};return o`
        <ha-control-button-group class="jammed">
          <ha-control-button @click=${t("unlock")}>
            ${e.localize("ui.card.lock.unlock")}
          </ha-control-button>
          <ha-control-button @click=${t("lock")}>
            ${e.localize("ui.card.lock.lock")}
          </ha-control-button>
        </ha-control-button-group>
      `}return r==="alarm_control_panel"&&H==="alarm_modes"&&F5.includes(C.state)?(this._loadEntry(),o`
        <ha-control-button class="disarm" @click=${M=>{M.stopPropagation(),_4(this,e,C,this._entry).catch(U5)}}>
          ${e.localize("ui.card.alarm_control_panel.disarm")}
        </ha-control-button>
      `):r==="vacuum"&&H==="vacuum_status"&&w(C,Y.CLEAN_AREA)?this._cleanAreas(C):A}_battery(C){let H=u(C.entity_id);if(H!=="vacuum"&&H!=="lawn_mower")return A;let e=this.hass,r=f4(e,C.entity_id);if(!r)return A;let{battery:t,charging:M}=r;return o`
      <span class="battery" slot="after-time">
        ${u(t.entity_id)==="binary_sensor"?A:o`<span
                >${Number(t.state).toFixed()}${g4(e)}%</span
              >`}
        <ha-battery-icon
          .hass=${e}
          .batteryStateObj=${t}
          .batteryChargingStateObj=${M}
        ></ha-battery-icon>
      </span>
    `}_moreInfo(C){this._loadEntry();let H=a4(C);return o`
      ${H?o`<state-card-content
              in-dialog
              .hass=${this.hass}
              .stateObj=${C}
            ></state-card-content>`:A}
      <more-info-content
        ?full-height=${!H}
        .hass=${this.hass}
        .stateObj=${C}
        .entry=${this._entry}
        .editMode=${!1}
      ></more-info-content>
    `}_loadEntry(){let C=this._config.entity;this._entryLoaded!==C&&(this._entryLoaded=C,this.hass.callWS({type:"config/entity_registry/get",entity_id:C}).then(H=>{this._entryLoaded===C&&(this._entry=H)},()=>{this._entryLoaded===C&&(this._entry=null)}))}_fanPowerButton(C){let H=()=>this.hass.callService("fan",C.state==="on"?"turn_off":"turn_on",{entity_id:C.entity_id});return o`
      <div class="buttons">
        <ha-outlined-icon-button
          .disabled=${C.state==="unavailable"}
          @click=${H}
        >
          <ha-svg-icon .path=${r1}></ha-svg-icon>
        </ha-outlined-icon-button>
      </div>
    `}_script(C){let H=this.hass,e=k2(C.entity_id),r=H.services?.script?.[e],t=r?.fields??{},M=Object.keys(t).length>0,i=C.attributes.current||0,p=C.attributes.mode,n=p==="queued",d=p==="parallel",v=n&&i>1,c=this._scriptData.data,Z=Object.entries(t).every(([B,k1])=>!k1.required||c?.[B]!==void 0),_=!Object.values(t).some(B=>B.required)||Z&&w8(C)||p==="restart",R=B=>{B.stopPropagation(),H.callService("script",e,this._scriptData.data)},U=B=>{B.stopPropagation(),H.callService("script","turn_off",{entity_id:C.entity_id})},n1=B=>{this._scriptData={...this._scriptData,...B.detail.value}};return o`
      <div class="script">
        ${r?.description?o`<ha-markdown
                breaks
                .content=${r.description}
              ></ha-markdown>`:A}
        <div class="queue ${v?"has-queue":""}">
          ${v?H.localize("ui.card.script.running_queued",{queued:i-1}):""}
        </div>
        ${M?o`
                <div class="fields">
                  <div class="title">
                    ${H.localize("ui.card.script.run_script")}
                  </div>
                  <ha-service-control
                    hide-picker
                    hide-description
                    .hass=${H}
                    .value=${this._scriptData}
                    .narrow=${window.matchMedia("(max-width: 870px)").matches}
                    @value-changed=${n1}
                  ></ha-service-control>
                </div>
              `:A}
        <ha-control-button-group>
          <ha-control-button
            class="cancel-button"
            .disabled=${!i}
            @click=${U}
          >
            <ha-svg-icon .path=${S1}></ha-svg-icon>
            ${(n||d)&&i>1?H.localize("ui.card.script.cancel_all"):H.localize("ui.card.script.cancel")}
          </ha-control-button>
          <ha-control-button
            class="run-button"
            .disabled=${C.state==="unavailable"||!_}
            @click=${R}
          >
            <ha-svg-icon .path=${m2}></ha-svg-icon>
            ${H.localize("ui.card.script.run")}
          </ha-control-button>
        </ha-control-button-group>
      </div>
    `}_press(C){let H=u(C.entity_id),e=r=>{r.stopPropagation(),this.hass.callService(H==="input_button"?H:"button","press",{entity_id:C.entity_id})};return o`
      <ha-control-button-group class="press">
        <ha-control-button
          .disabled=${C.state==="unavailable"}
          @click=${e}
        >
          <ha-svg-icon .path=${f0}></ha-svg-icon>
          ${this.hass.localize("ui.card.button.press")}
        </ha-control-button>
      </ha-control-button-group>
    `}_header(C){let H=this._config;if(!this._showState)return A;let e=H.state_override||k8(this.hass,C);return H.show_last_changed===!1?o`<p class="state">
        ${e??this.hass.formatEntityState(C)}
      </p>`:o`
      <ha-more-info-state-header
        .hass=${this.hass}
        .stateObj=${C}
        .stateOverride=${e}
        .changedOverride=${["script","automation"].includes(u(C.entity_id))?C.attributes.last_triggered||0:void 0}
      >
        ${this._battery(C)}
      </ha-more-info-state-header>
    `}render(){if(!this._config||!this.hass)return A;let C=this._stateObj,H=this._config.appearance??"plain";return C?o`
      <ha-card
        class=${H}
        .label=${H1(C)}
        style=${F(Q7(C,this._config.color,this._config.color_off))}
      >
        ${this._ready?o`
                ${this._header(C)}
                <div
                  class="controls ${this._controlName==="more_info"?"more-info":""}"
                >
                  ${this._control(C)}
                </div>
                ${this._afterControls(C)}
              `:A}
      </ha-card>
    `:o`<ha-card class=${H}>
        <ha-alert alert-type="warning">
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity})}
        </ha-alert>
      </ha-card>`}};b=N(C9),G5=new WeakMap,Q5=new WeakMap,K5=new WeakMap,q5=new WeakMap,Y5=new WeakMap,X5=new WeakMap,J5=new WeakMap,j5=new WeakMap,C3=new WeakMap,l(b,4,"hass",j4,Q,G5),l(b,4,"_config",J4,Q,Q5),l(b,4,"_ready",X4,Q,K5),l(b,4,"_scriptData",Y4,Q,q5),l(b,4,"_lightControl",q4,Q,Y5),l(b,4,"_entry",K4,Q,X5),l(b,4,"_positionMode",Q4,Q,J5),l(b,4,"_openState",G4,Q,j5),l(b,4,"_iconPaths",U4,Q,C3),D(b,Q),s(Q,"styles",[y1,y`
      :host {
        display: flex;
        flex-direction: column;
        min-height: var(--popup-min-height, auto);
      }
      ha-card {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      /* Spacing between the main control and the next block in more-info. */
      ha-card.plain {
        padding-bottom: var(--ha-space-4);
      }
      ha-card.card {
        padding: var(--ha-space-6) var(--ha-space-4);
      }
      /* more-info-control-style.ts */
      .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
      }
      /* The native content lays itself out (more-info-content). */
      .controls.more-info {
        align-items: stretch;
        justify-content: flex-start;
      }
      more-info-content {
        position: relative;
        display: flex;
        flex-direction: column;
      }
      more-info-content[full-height] {
        flex: 1;
      }
      /* ha-more-info-info.ts */
      .controls.more-info > state-card-content {
        display: block;
        margin-bottom: var(--ha-space-4);
      }
      .controls > *:not(:last-child) {
        margin-bottom: var(--ha-space-6);
      }
      .controls:not(:last-child) {
        margin-bottom: var(--ha-space-6);
      }
      /* more-info-cover.ts / more-info-valve.ts */
      .main-control {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .main-control > * {
        margin: 0 var(--ha-space-2);
      }
      /* more-info-lock.ts */
      .open-button,
      ha-control-button-group.jammed ha-control-button {
        font-size: var(--ha-font-size-m);
        height: 60px;
        --control-button-border-radius: var(--ha-border-radius-3xl);
      }
      .open-button {
        width: 130px;
        --control-button-background-color: var(--state-color);
      }
      .open-button.confirm {
        --control-button-background-color: var(--warning-color);
      }
      .open-done {
        line-height: 60px;
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: var(--ha-space-2);
        font-weight: var(--ha-font-weight-medium);
        color: var(--success-color);
        margin: 0;
      }
      ha-control-button-group.jammed {
        --control-button-group-thickness: 60px;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
      }
      /* Jammed lock / triggered alarm (more-info-lock, -alarm_control_panel) */
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .status {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .status.lock {
        justify-content: center;
        height: 45vh;
        max-height: 320px;
        min-height: 200px;
      }
      .status .icon {
        position: relative;
        --mdc-icon-size: 80px;
        animation: pulse 1s infinite;
        color: var(--state-color);
        border-radius: var(--ha-border-radius-circle);
        width: 144px;
        height: 144px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .status .icon::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: var(--ha-border-radius-circle);
        background-color: var(--state-color);
        transition: background-color 180ms ease-in-out;
        opacity: 0.2;
      }
      ha-control-button.disarm {
        height: 60px;
        min-width: 130px;
        max-width: 200px;
        margin: 0 auto;
        --control-button-border-radius: var(--ha-border-radius-3xl);
      }
      /* more-info-vacuum.ts / more-info-lawn_mower.ts */
      .battery {
        display: inline-flex;
        align-items: center;
        gap: var(--ha-space-1);
        font-size: var(--ha-font-size-m);
        color: var(--secondary-text-color);
        --mdc-icon-size: 18px;
      }
      .battery span {
        height: var(--mdc-icon-size);
        line-height: var(--mdc-icon-size);
      }
      ha-control-button-group.commands {
        --control-button-group-thickness: 48px;
        justify-content: center;
      }
      ha-control-button-group.commands ha-control-button {
        flex: 0 0 auto;
        width: var(--control-button-group-thickness);
        --control-button-border-radius: var(--ha-border-radius-lg);
      }
      .commands ha-control-button ha-svg-icon {
        z-index: auto;
        margin-right: 0;
      }
      .clean-areas-button {
        --mdc-icon-size: 20px;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        width: auto;
        max-width: 100%;
        height: 48px;
        padding: 6px 10px;
        border: none;
        border-radius: var(--ha-border-radius-lg);
        background: none;
        color: var(--primary-text-color);
        font-family: inherit;
        font-size: var(--ha-font-size-m);
        font-weight: var(--ha-font-weight-normal);
        line-height: 1.4;
        letter-spacing: 0.25px;
        text-align: left;
        cursor: pointer;
        overflow: hidden;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        z-index: 0;
        transition: box-shadow 180ms ease-in-out;
      }
      .clean-areas-button::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--disabled-color);
        opacity: 0.2;
        transition:
          background-color 180ms ease-in-out,
          opacity 180ms ease-in-out;
      }
      .clean-areas-button:hover::before {
        background-color: var(--ha-color-on-neutral-quiet);
      }
      .clean-areas-button:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--secondary-text-color);
      }
      .clean-areas-button[disabled] {
        cursor: not-allowed;
        color: var(--disabled-color);
      }
      .clean-areas-button .icon {
        display: flex;
        --mdc-icon-size: 20px;
      }
      .clean-areas-button .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        flex: 1;
        min-width: 0;
        overflow: hidden;
      }
      .clean-areas-button .content p {
        margin: 0;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .clean-areas-button .label {
        font-size: var(--ha-font-size-s);
        letter-spacing: 0.4px;
      }
      .clean-areas-button .value {
        font-size: var(--ha-font-size-m);
      }
      /* ha-more-info-state-header .state */
      /* more-info-control-style.ts .buttons (fan power button) */
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--ha-space-3);
      }
      .buttons > * {
        margin: var(--ha-space-2);
      }
      /* more-info-light.ts */
      .wheel {
        width: 28px;
        height: 28px;
        flex: none;
        border-radius: var(--ha-border-radius-circle);
      }
      .wheel.color {
        background-image: url("/static/images/color_wheel.png");
        background-size: cover;
      }
      .wheel.color-temp {
        background: linear-gradient(
          0,
          rgb(166, 209, 255) 0%,
          white 50%,
          rgb(255, 160, 0) 100%
        );
      }
      *[disabled] .wheel {
        filter: grayscale(1) opacity(0.5);
      }
      /* The media player draws its own full-width layout. */
      more-info-media_player {
        align-self: stretch;
      }
      /* more-info-script.ts */
      .script {
        align-self: stretch;
        display: flex;
        flex-direction: column;
      }
      .script .queue {
        visibility: hidden;
        color: var(--secondary-text-color);
        text-align: center;
        margin-bottom: var(--ha-space-4);
        height: 21px;
      }
      .script .queue.has-queue {
        visibility: visible;
      }
      .script .fields {
        padding: var(--ha-space-4);
        border: 1px solid var(--divider-color);
        border-radius: var(--ha-border-radius-md);
        margin-bottom: var(--ha-space-4);
      }
      .script .fields .title {
        font-weight: var(--ha-font-weight-bold);
      }
      ha-control-button ha-svg-icon {
        z-index: -1;
        margin-right: var(--ha-space-1);
      }
      ha-control-button-group.press {
        align-self: stretch;
      }
      ha-service-control {
        --service-control-padding: 0;
        --service-control-items-border-top: none;
      }
      .script ha-markdown {
        text-align: center;
        padding: 0 var(--ha-space-4);
      }
      p.state {
        text-align: center;
        margin: 0 0 var(--ha-space-5);
        font-weight: var(--ha-font-weight-normal);
        font-size: 36px;
        line-height: var(--ha-line-height-condensed);
      }
    `]);customElements.get(H2)||customElements.define(H2,Q);var H9=L=>L.uix??L.card_mod,H3=async(L,V,C,H,e)=>{let r=customElements.get("uix-node");if(r?.applyToElement)try{await r.applyToElement(L,V,C,H,!1,e)}catch(t){console.warn("[more-info-popup-card] UIX styling failed",t)}};var V9="var(--ha-bottom-sheet-border-radius, var(--ha-dialog-border-radius, var(--ha-border-radius-2xl)))",T8=`
  wa-drawer::part(body) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: ${V9};
    border-bottom-right-radius: ${V9};
  }
  .handle-wrapper {
    display: none;
  }
`,L9=new WeakSet,e9=async L=>{if(L9.has(L))return!0;await L.updateComplete;let V=L.shadowRoot?.querySelector("wa-drawer");if(!V)return!1;V.placement="top";let C=new CSSStyleSheet;C.replaceSync(T8);let H=L.shadowRoot;return H.adoptedStyleSheets=[...H.adoptedStyleSheets,C],L9.add(L),!0},r9=L=>L.stopPropagation(),t9=(L,V,C)=>{if(L.stopPropagation(),V.hasAttribute("prevent-scrim-close"))return;let H=L.touches[0].clientY,e=L.timeStamp,r=0,t=i=>{r=Math.min(0,i.touches[0].clientY-H),r<0&&i.preventDefault(),V.style.setProperty("--dialog-transform",`translateY(${r}px)`)},M=i=>{document.removeEventListener("touchmove",t),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M);let p=V.shadowRoot?.querySelector("wa-drawer")?.shadowRoot?.querySelector('[part="body"]')?.offsetHeight??0,n=r/Math.max(1,i.timeStamp-e);if(r<0&&(n<-.5||-r>p*.25)){C(),setTimeout(()=>V.style.removeProperty("--dialog-transform"),300);return}V.style.setProperty("--dialog-transition","transform 300ms ease-out"),V.style.removeProperty("--dialog-transform"),setTimeout(()=>V.style.removeProperty("--dialog-transition"),300)};document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)};var P8=24,E8=4,M9=["pointerdown","keydown","wheel","touchstart"],B8=L=>{let V=document;V.startViewTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches?V.startViewTransition(L):L()},o9,i9,a9,A9,n9,d9,p9,l9,m9,s9,v9,c9,x9,f,V3,L3,e3,r3,t3,M3,o3,i3,a3,A3,n3,d3,W=class extends(x9=E,c9=[O({attribute:!1})],v9=[O({type:Boolean,reflect:!0,attribute:"fixed-top"})],s9=[x()],m9=[x()],l9=[x()],p9=[x()],d9=[x()],n9=[x()],A9=[x()],a9=[x()],i9=[x()],o9=[x()],x9){constructor(){super(...arguments);m(this,V3,a(f,8,this)),a(f,11,this);m(this,L3,a(f,12,this,!0)),a(f,15,this);m(this,e3,a(f,16,this)),a(f,19,this);m(this,r3,a(f,20,this,!1)),a(f,23,this);m(this,t3,a(f,24,this,[])),a(f,27,this);m(this,M3,a(f,28,this,{})),a(f,31,this);m(this,o3,a(f,32,this,!1)),a(f,35,this);m(this,i3,a(f,36,this,!0)),a(f,39,this);m(this,a3,a(f,40,this,!1)),a(f,43,this);m(this,A3,a(f,44,this,!1)),a(f,47,this);m(this,n3,a(f,48,this,!1)),a(f,51,this);s(this,"_section");s(this,"_keepAlive",new Map);s(this,"_sectionConfigKey",new WeakMap);s(this,"_childViews",new WeakMap);s(this,"_childHeaders",new WeakMap);s(this,"_autoCloseTimer");s(this,"_resizeObserver");s(this,"_fillCards",new Set);s(this,"_enableEscape",()=>{this._escapeEnabled=!0});s(this,"_disableEscape",()=>{this._escapeEnabled=!1});s(this,"_closeFromEvent",C=>{C.stopPropagation(),this.closeDialog()});s(this,"_goBackFromEvent",()=>this._goBack());s(this,"_observedContent");m(this,d3,a(f,52,this,!1)),a(f,55,this);s(this,"_topSheet");s(this,"_topSwipe",C=>{let H=this.renderRoot.querySelector("ha-bottom-sheet");H&&t9(C,H,()=>this.closeDialog())});s(this,"_uixKey");s(this,"_uixSurface");s(this,"_goBack",()=>{let C=this._frame;if(C){if(C.children.length){this._replaceTop({...C,children:C.children.slice(0,-1)}),this._detailsYaml=!1;return}this._stack.length>1&&(this._detailsYaml=!1,this._stack=this._stack.slice(0,-1))}});s(this,"_enlarge",()=>{B8(()=>{this._fill=!this._fill})});s(this,"_breadcrumbClick",C=>{C.stopPropagation(),this._setView("related")});s(this,"_armAutoClose",()=>{this._clearAutoClose(!1);let C=this._config?.auto_close??0;if(!(C<=0)){for(let H of M9)this.addEventListener(H,this._armAutoClose,{passive:!0});this._autoCloseTimer=setTimeout(()=>this.closeDialog(),C*1e3)}});s(this,"_registerFillCard",C=>{C.stopPropagation(),this._fillCards.add(C.composedPath()[0]),this._updateFill()});s(this,"_updateScrollState",()=>{let C=this._observedContent;C&&(this._contentScrolled=C.scrollTop>P8,this._contentScrollable=C.scrollHeight-C.scrollTop-C.clientHeight>E8)})}get _config(){return this._params?.config}get _frame(){return this._stack[this._stack.length-1]}showDialog(C){let{config:H,view:e}=C;this._params=C,this._stack=[{entityId:H.entity,view:"root",children:[]}],e&&H.entity&&this._canShowView(e)&&(this._stack=[...this._stack,{entityId:H.entity,view:e,children:[]}]),this._fill=!1,this._detailsYaml=!1,this._escapeEnabled=!0,this._section=this._getSection(H),this._open=!0,H.entity&&this._loadEntry(H.entity),h5({popupId:H.popup_id,close:()=>this.closeDialog()}),this._armAutoClose()}closeDialog(){return this._open=!1,!0}_dialogClosed(C){if(C.target!==C.currentTarget)return;let H=this._config;H&&!H.keep_alive&&(this._section=void 0),this._params=void 0,this._stack=[],this._entries={},this._fill=!1,this._detailsYaml=!1,this._contentScrolled=!1,this._contentScrollable=!1,this._clearAutoClose(),this._uixKey=void 0,this._uixSurface=void 0,window.removeEventListener("dialog-closed",this._enableEscape),window.removeEventListener("show-dialog",this._disableEscape),h5(void 0),g(this,"dialog-closed",{dialog:this.localName})}_dialogOpened(C){C.target===C.currentTarget&&(window.addEventListener("dialog-closed",this._enableEscape),window.addEventListener("show-dialog",this._disableEscape))}connectedCallback(){super.connectedCallback(),this.addEventListener("close-dialog",this._closeFromEvent),this.addEventListener("close-child-view",this._goBackFromEvent),this.addEventListener(w1,this._registerFillCard)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("close-dialog",this._closeFromEvent),this.removeEventListener("close-child-view",this._goBackFromEvent),this.removeEventListener(w1,this._registerFillCard),this._resizeObserver?.disconnect(),this._clearAutoClose()}willUpdate(C){C.has("hass")&&this._section&&(this._section.hass=this.hass)}updated(C){super.updated(C);let H=this.renderRoot.querySelector(".content");H&&H!==this._observedContent&&(this._observedContent=H,this._resizeObserver??=new ResizeObserver(()=>{this._updateFill(),this._updateScrollState()}),this._resizeObserver.disconnect(),this._resizeObserver.observe(H),H.firstElementChild&&this._resizeObserver.observe(H.firstElementChild),this._updateFill(),this._updateScrollState()),this._applyUix(),this._prepareTopSheet()}async _prepareTopSheet(){if(this._config?.mode!=="top_sheet")return;let C=this.renderRoot.querySelector("ha-bottom-sheet");!C||C===this._topSheet||(this._topSheet=C,this._topSheetReady=!1,C.querySelectorAll(":scope > *").forEach(H=>{H.addEventListener("touchstart",r9)}),this._topSheetReady=await e9(C))}_applyUix(){let C=this._config,H=this.renderRoot.querySelector("ha-adaptive-dialog, ha-dialog, ha-bottom-sheet");if(!C||!H)return;let e=H9(C),r=`${H.localName}:${C.popup_id}:${JSON.stringify(e??null)}`;if(r===this._uixKey&&H===this._uixSurface)return;this._uixKey=r,this._uixSurface=H;let t={config:C,params:{popup_id:C.popup_id}};H3(H,"more-info",void 0,t,"type-more-info-popup"),H3(H,"more-info-popup",e,t,"type-more-info-popup")}_getSection(C){let H=C.keep_alive?this._keepAlive.get(C.popup_id):void 0;H||(H=document.createElement("hui-section"),C.keep_alive&&this._keepAlive.set(C.popup_id,H));let e={type:"grid",column_span:C.column_span,cards:C.cards},r=JSON.stringify(e);return H.hass=this.hass,this._sectionConfigKey.get(H)!==r&&(this._sectionConfigKey.set(H,r),H.config=e),H}async _loadEntry(C){if(C in this._entries)return;let H;try{H=await this.hass.callWS({type:"config/entity_registry/get",entity_id:C})}catch{H=null}this._entries={...this._entries,[C]:H}}_canShowView(C){return Q1(E7[C])}_pushFrame(C){if(C.view!=="root"&&!this._canShowView(C.view)){g(this,"hass-more-info",{entityId:C.entityId??null,view:C.view});return}C.entityId&&this._loadEntry(C.entityId),this._detailsYaml=!1,this._stack=[...this._stack,C]}_setView(C){let H=this._frame;H&&this._pushFrame({entityId:H.entityId,view:C,children:[]})}_replaceTop(C){this._stack=[...this._stack.slice(0,-1),C]}_showChildView(C){C.stopPropagation();let H=this._frame;if(!H)return;let e=C.detail;e.viewImport?.(),e.viewHeaderImport?.(),this._replaceTop({...H,children:[...H.children,e]})}_handleMoreInfo(C){if(this._config?.nested_more_info==="dialog")return;C.stopPropagation();let{entityId:H}=C.detail;if(!H)return;let e=C.detail.view??C.detail.tab??"info",r=this._frame;if(r&&r.entityId===H&&r.view!=="root"){r.view!==e&&this._setView(e);return}this._pushFrame({entityId:H,view:e==="details"?e:"info",children:[]})}_entryUpdated(C){let H=C.detail;H?.entity_id&&(this._entries={...this._entries,[H.entity_id]:H})}_handleMenu(C){let e=this._frame?.entityId;if(!e)return;let r=C.detail?.item?.value;switch(r){case"info":case"related":case"details":case"add_to":this._setView(r);break;case"device":{let t=m5(this.hass,e);t&&u5(this,`/config/devices/device/${t}`);break}case"edit":{let t=this.hass.states[e],M=t&&y7(t,this._entries[e]?.unique_id);M&&u5(this,M);break}default:break}}_clearAutoClose(C=!0){if(clearTimeout(this._autoCloseTimer),this._autoCloseTimer=void 0,C)for(let H of M9)this.removeEventListener(H,this._armAutoClose)}_updateFill(){for(let t of this._fillCards)t.isConnected||this._fillCards.delete(t);let[C,...H]=this._fillCards;for(let t of H)t.popupFill=0;if(!C)return;C.popupFill=0;let e=this._observedContent,r=e?.firstElementChild;!e||!r||this._frame?.view!=="root"||(C.popupFill=Math.floor(e.clientHeight-r.offsetHeight))}render(){let C=this._config,H=this._frame;if(!C||!H||!this.hass)return A;let e=!C.dismissable||H.view==="settings"||!this._escapeEnabled,r=F(u7(C)),t=this._renderContent(H);if(C.mode==="bottom_sheet"||C.mode==="top_sheet"){let n=C.mode==="top_sheet";return x5(C.mode,o`
          <ha-bottom-sheet
            class=${$({top:n})}
            style=${r}
            .open=${this._open&&(!n||this._topSheetReady)}
            .preventScrimClose=${e}
            flexcontent
            @opened=${this._dialogOpened}
            @closed=${this._dialogClosed}
            @show-child-view=${this._showChildView}
          >
            <ha-dialog-header
              slot="header"
              @touchstart=${n?this._topSwipe:A}
            >
              ${this._renderNavigation(H,"navigationIcon")}
              ${this._renderTitle(C,H,"title")}
              ${this._renderActions(C,H,"actionItems")}
            </ha-dialog-header>
            ${t}
            ${n?o`<div
                    slot="footer"
                    class="top-sheet-handle"
                    aria-hidden="true"
                    @touchstart=${this._topSwipe}
                  ></div>`:A}
          </ha-bottom-sheet>
        `)}let M=C.mode==="dialog"?"ha-dialog":"ha-adaptive-dialog",i=this._fill?"full":x7(C),p=o`
      ${this._renderNavigation(H,"headerNavigationIcon")}
      ${this._renderTitle(C,H,"headerTitle")}
      ${this._renderActions(C,H,"headerActionItems")} ${t}
    `;return M==="ha-dialog"?o`
          <ha-dialog
            style=${r}
            .open=${this._open}
            .width=${i}
            .preventScrimClose=${e}
            flexcontent
            @opened=${this._dialogOpened}
            @closed=${this._dialogClosed}
            @show-child-view=${this._showChildView}
          >
            ${p}
          </ha-dialog>
        `:o`
          <ha-adaptive-dialog
            style=${r}
            .open=${this._open}
            .width=${i}
            .preventScrimClose=${e}
            flexcontent
            @opened=${this._dialogOpened}
            @closed=${this._dialogClosed}
            @show-child-view=${this._showChildView}
          >
            ${p}
          </ha-adaptive-dialog>
        `}_isDefaultView(C){return(C.view==="root"||C.view==="info")&&!C.children.length}_renderNavigation(C,H){return this._stack.length===1&&!C.children.length?o`
          <ha-icon-button
            slot=${H}
            .label=${this.hass.localize("ui.common.close")}
            .path=${a2}
            @click=${this.closeDialog}
          ></ha-icon-button>
        `:o`
          <ha-icon-button-prev
            slot=${H}
            .label=${this.hass.localize("ui.dialogs.more_info_control.back_to_info")}
            @click=${this._goBack}
          ></ha-icon-button-prev>
        `}_renderTitle(C,H,e){let r=E2(this.hass,C,H);return B2(this.hass,r,e,C.mode==="bottom_sheet"||C.mode==="top_sheet"?void 0:this._enlarge,this._breadcrumbClick)}_renderActions(C,H,e){let r=H.entityId,t=H.view==="root";if(!r)return A;if(!this._isDefaultView(H)){if(H.view==="details"&&!H.children.length)return o`
          <ha-icon-button
            slot=${e}
            .label=${this.hass.localize("ui.dialogs.more_info_control.toggle_yaml_mode")}
            .path=${A2}
            @click=${()=>{this._detailsYaml=!this._detailsYaml}}
          ></ha-icon-button>
        `;let Z=H.children[H.children.length-1];if(Z?.viewHeaderTag){let k=this._childElement(Z,Z.viewHeaderTag,"header");return k.slot=e,Object.assign(k,{hass:this.hass,params:Z.viewParams}),k}return A}if(t&&!C.show_header_actions)return A;let M=this.hass,i=U1(M),p=O7(M,r,!t)?o`
          <ha-icon-button
            slot=${e}
            .label=${M.localize("ui.dialogs.more_info_control.history")}
            .path=${l0}
            @click=${()=>this._setView("history")}
          ></ha-icon-button>
        `:A;if(!i)return o`
        ${p}
        ${l5(M)?o`
                <ha-icon-button
                  slot=${e}
                  .label=${M.localize("ui.dialogs.more_info_control.add_to.item")}
                  .path=${V5}
                  @click=${()=>this._setView("add_to")}
                ></ha-icon-button>
              `:A}
      `;let n=M.states[r],d=m5(M,r),v=_7(M,d),c=u(r);return o`
      ${p}
      <ha-icon-button
        slot=${e}
        .label=${M.localize("ui.dialogs.more_info_control.settings")}
        .path=${n2}
        @click=${()=>this._setView("settings")}
      ></ha-icon-button>
      <ha-dropdown
        slot=${e}
        placement="bottom-end"
        @closed=${Z=>Z.stopPropagation()}
        @opened=${Z=>Z.stopPropagation()}
        @wa-select=${this._handleMenu}
      >
        <ha-icon-button
          slot="trigger"
          .label=${M.localize("ui.common.menu")}
          .path=${Z0}
        ></ha-icon-button>
        ${t?o`
                <ha-dropdown-item value="info">
                  <ha-svg-icon
                    slot="icon"
                    .path=${f1}
                  ></ha-svg-icon>
                  ${h(M,"dialog.entity_controls")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:A}
        ${l5(M)?o`
                <ha-dropdown-item value="add_to">
                  <ha-svg-icon
                    slot="icon"
                    .path=${V5}
                  ></ha-svg-icon>
                  ${M.localize("ui.dialogs.more_info_control.add_to.item")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:A}
        ${d?o`
                <ha-dropdown-item value="device">
                  <ha-svg-icon
                    slot="icon"
                    .path=${v==="service"?q0:u0}
                  ></ha-svg-icon>
                  ${M.localize("ui.dialogs.more_info_control.device_or_service_info",{type:M.localize(`ui.dialogs.more_info_control.device_type.${v}`)})}
                </ha-dropdown-item>
              `:A}
        ${b7(n)?o`
                <ha-dropdown-item value="edit">
                  <ha-svg-icon
                    slot="icon"
                    .path=${N0}
                  ></ha-svg-icon>
                  ${M.localize(`ui.dialogs.more_info_control.edit_domain.${c}`)||M.localize("ui.dialogs.more_info_control.edit")}
                </ha-dropdown-item>
              `:A}
        <ha-dropdown-item value="related">
          <ha-svg-icon slot="icon" .path=${w0}></ha-svg-icon>
          ${M.localize("ui.dialogs.more_info_control.related")}
        </ha-dropdown-item>
        <ha-dropdown-item value="details">
          <ha-svg-icon slot="icon" .path=${O0}></ha-svg-icon>
          ${M.localize("ui.dialogs.more_info_control.details")}
        </ha-dropdown-item>
      </ha-dropdown>
    `}_childElement(C,H,e){let r=e==="view"?this._childViews:this._childHeaders,t=r.get(C);return t||(t=document.createElement(H),r.set(C,t)),t}_renderContent(C){let H=`${this._stack.length}:${C.entityId??""}:${C.view}`;return o`
      <div
        class=${$({"content-wrapper":!0,"settings-view":C.view==="settings"})}
      >
        ${x5(H,o`
            <div
              class="content ha-scrollbar"
              tabindex="-1"
              @scroll=${this._updateScrollState}
              @hass-more-info=${this._handleMoreInfo}
              @entity-entry-updated=${this._entryUpdated}
            >
              ${this._renderFrame(C)}
            </div>
          `)}
        <div
          class=${$({"fade-top":!0,visible:this._contentScrolled})}
        ></div>
        <div
          class=${$({"fade-bottom":!0,visible:this._contentScrollable})}
        ></div>
      </div>
    `}_renderChild(C){let H=C.children[C.children.length-1];if(!H)return A;let e=this._childElement(H,H.viewTag,"view");return Object.assign(e,{hass:this.hass,entry:C.entityId?this._entries[C.entityId]:void 0,params:H.viewParams}),o`<div class="child-view">${e}</div>`}_renderFrame(C){let H=this.hass,e=C.entityId,r=e?this._entries[e]:void 0;if(C.view==="root")return o`
        <div
          class="body"
          ?hidden=${C.children.length>0}
          style=${F({"--column-span":String(this._config.column_span)})}
        >
          ${this._section}
        </div>
        ${this._renderChild(C)}
      `;if(!e)return A;if(C.view==="settings")return o`
        <div ?hidden=${C.children.length>0}>
          <ha-more-info-settings
            .hass=${H}
            .entityId=${e}
            .entry=${r}
          ></ha-more-info-settings>
        </div>
        ${this._renderChild(C)}
      `;if(C.children.length)return this._renderChild(C);switch(C.view){case"info":return o`
          <ha-more-info-info
            .hass=${H}
            .entityId=${e}
            .entry=${r}
            .editMode=${!1}
          ></ha-more-info-info>
        `;case"history":return o`
          <ha-more-info-history-and-logbook
            .hass=${H}
            .entityId=${e}
          ></ha-more-info-history-and-logbook>
        `;case"related":return o`
          <ha-more-info-related
            .hass=${H}
            .entry=${r}
            .params=${{entityId:e}}
          ></ha-more-info-related>
        `;case"add_to":return o`
          <ha-more-info-add-to
            .entityId=${e}
            @add-to-action-selected=${this._goBack}
          ></ha-more-info-add-to>
        `;case"details":return o`
          <ha-more-info-details
            .hass=${H}
            .entry=${r}
            .params=${{entityId:e}}
            .yamlMode=${this._detailsYaml}
          ></ha-more-info-details>
        `;default:return A}}};f=N(x9),V3=new WeakMap,L3=new WeakMap,e3=new WeakMap,r3=new WeakMap,t3=new WeakMap,M3=new WeakMap,o3=new WeakMap,i3=new WeakMap,a3=new WeakMap,A3=new WeakMap,n3=new WeakMap,d3=new WeakMap,l(f,4,"hass",c9,W,V3),l(f,4,"fixedTop",v9,W,L3),l(f,4,"_params",s9,W,e3),l(f,4,"_open",m9,W,r3),l(f,4,"_stack",l9,W,t3),l(f,4,"_entries",p9,W,M3),l(f,4,"_fill",d9,W,o3),l(f,4,"_escapeEnabled",n9,W,i3),l(f,4,"_detailsYaml",A9,W,a3),l(f,4,"_contentScrolled",a9,W,A3),l(f,4,"_contentScrollable",i9,W,n3),l(f,4,"_topSheetReady",o9,W,d3),D(f,W),s(W,"styles",[$7,D7,N7,I7,T2,P2,y`
      :host {
        /* Same full-height bottom sheet as the native more-info */
        --ha-bottom-sheet-height: calc(
          100vh - max(var(--safe-area-inset-top), 48px)
        );
        --ha-bottom-sheet-height: calc(
          100dvh - max(var(--safe-area-inset-top), 48px)
        );
        --ha-bottom-sheet-max-height: var(--ha-bottom-sheet-height);
      }
      [hidden] {
        display: none !important;
      }
      /* top-sheet.ts: the safe area moves to the top edge. */
      ha-bottom-sheet.top {
        --ha-bottom-sheet-padding: var(--safe-area-inset-top)
          var(--safe-area-inset-right) 0 var(--safe-area-inset-left);
        --ha-bottom-sheet-content-padding: 0;
      }
      /* The drag handle of ha-bottom-sheet, at the bottom edge. */
      .top-sheet-handle {
        display: flex;
        justify-content: center;
        padding: var(--ha-space-2) 0 var(--ha-space-3);
        cursor: grab;
        touch-action: none;
      }
      .top-sheet-handle::after {
        content: "";
        width: 40px;
        height: 4px;
        border-radius: var(--ha-border-radius-md);
        background: var(--ha-bottom-sheet-handle-color, var(--divider-color));
      }
    `]);customElements.get(o1)||customElements.define(o1,W);var u9=L=>{if(!(!L||L.length<2))try{return decodeURIComponent(L.slice(1))}catch{return}},R8=L=>`${L.pathname}${L.search}`,V2=L=>{L.history.replaceState(L.history.state,"",R8(L.location))},Z9=(L,V=500)=>new Promise(C=>{let H=!1,e=()=>{H||(H=!0,L.removeEventListener("popstate",r),clearTimeout(t),L.location.hash&&V2(L),C())},r=()=>e(),t=setTimeout(e,V);L.addEventListener("popstate",r),L.history.back()});var h9=Symbol.for("more-info-popup-card.registry"),p3=class{constructor(V=window){this._win=V}_win;_hosts=new Set;_installed=!1;_consuming=!1;_checkScheduled=!1;register(V){this._install(),this._hosts.add(V),this._scheduleLocationCheck()}unregister(V){this._hosts.delete(V)}get(V){if(!V)return;let C;for(let H of this._hosts)H.isConnected&&H.popupConfig?.popup_id===V&&(C=H);return C}findByEntity(V){let C;for(let H of this._hosts){let e=H.popupConfig;H.isConnected&&e?.replace_more_info&&e.entity===V&&(C=H)}return C}open(V,C){let H=this.get(V);return H?.openPopup(C),!!H}close(V){let C=Z5();C&&(!V||C.popupId===V)&&C.close()}toggle(V){Z5()?.popupId===V?this.close(V):this.open(V)}_install(){this._installed||(this._installed=!0,this._win.addEventListener("location-changed",this._onLocationChanged),this._win.addEventListener("popstate",this._onPopState),this._win.addEventListener("ll-custom",this._onCustomAction),this._win.addEventListener("hass-more-info",this._onMoreInfo,{capture:!0}))}_scheduleLocationCheck(){this._checkScheduled||(this._checkScheduled=!0,queueMicrotask(()=>{this._checkScheduled=!1;let V=this._hostForHash();V&&!this._consuming&&(V2(this._win),V.openPopup())}))}_hostForHash(){return this.get(u9(this._win.location.hash))}_onLocationChanged=V=>{if(this._consuming)return;let C=this._hostForHash();if(!C)return;let e=!!!V.detail?.replace&&this._win.history.state?.from===this._win.location.pathname;this._consuming=!0,(e?Z9(this._win):Promise.resolve(V2(this._win))).then(()=>{this._consuming=!1,C.openPopup()})};_onPopState=()=>{if(this._consuming)return;let V=this._hostForHash();V&&(V2(this._win),V.openPopup())};_onCustomAction=V=>{let H=V.detail?.more_info_popup;H&&(typeof H=="string"?this.open(H):H.open?this.open(H.open):H.toggle?this.toggle(H.toggle):H.close!==void 0&&this.close(H.close||void 0))};_onMoreInfo=V=>{let C=V.detail;if(!C?.entityId)return;let H=this.findByEntity(C.entityId);if(!H||V.composedPath().some(t=>t.localName===o1))return;V.stopImmediatePropagation();let r=C.view??C.tab;H.openPopup({view:r&&r!=="info"?r:void 0})}},l3=()=>{let L=window;return L[h9]??=new p3(window),L[h9]};var L2=(L,V,C)=>C.map(H=>({value:H,label:h(L,`editor.${V}.${H}`)})),S9=(L,V)=>[{name:"general",type:"expandable",flatten:!0,expanded:!0,iconPath:p2,title:h(L,"editor.section.general"),schema:[{name:"popup_id",required:!0,selector:{text:{prefix:"#"}}},{name:"entity",selector:{entity:{}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]}]},{name:"appearance",type:"expandable",flatten:!0,iconPath:D0,title:h(L,"editor.section.appearance"),schema:[{name:"mode",selector:{select:{mode:"dropdown",options:L2(L,"mode",["auto","dialog","bottom_sheet","top_sheet"])}}},{name:"breadcrumb",selector:{select:{mode:"dropdown",custom_value:!0,options:L2(L,"breadcrumb",["auto","none"])}}},{name:"",type:"grid",schema:[{name:"width",selector:{select:{mode:"dropdown",options:L2(L,"width",["small","medium","large","full","custom"])}}},...V.width==="custom"?[{name:"custom_width",selector:{text:{}}}]:[]]},{name:"",type:"grid",schema:[{name:"height",selector:{select:{mode:"dropdown",options:L2(L,"height",["auto","custom"])}}}]},...V.height==="custom"?[{name:"",type:"grid",schema:[{name:"min_height",selector:{text:{}}},{name:"max_height",selector:{text:{}}}]}]:[],{name:"column_span",selector:{number:{min:1,max:4,step:1,mode:"slider",slider_ticks:!0}}},...V.entity?[{name:"show_header_actions",selector:{boolean:{}}}]:[]]},{name:"behavior",type:"expandable",flatten:!0,iconPath:n2,title:h(L,"editor.section.behavior"),schema:[...V.entity?[{name:"replace_more_info",selector:{boolean:{}}}]:[],{name:"nested_more_info",selector:{select:{mode:"list",options:L2(L,"nested_more_info",["inline","dialog"])}}},{name:"dismissable",selector:{boolean:{}}},{name:"auto_close",selector:{number:{min:0,max:3600,step:5,mode:"box",unit_of_measurement:"s"}}},{name:"keep_alive",selector:{boolean:{}}}]}],F8={entity:"editor.entity_helper",breadcrumb:"editor.breadcrumb_helper",custom_width:"editor.length_helper",min_height:"editor.length_helper",max_height:"editor.length_helper",column_span:"editor.column_span_helper",replace_more_info:"editor.replace_more_info_helper"},$8={popup_id:"editor.popup_id",entity:"editor.entity",name:"editor.name",icon:"editor.icon",breadcrumb:"editor.breadcrumb",mode:"editor.mode",width:"editor.width",custom_width:"editor.custom_width",height:"editor.height",min_height:"editor.min_height",max_height:"editor.max_height",column_span:"editor.column_span",show_header_actions:"editor.show_header_actions",replace_more_info:"editor.replace_more_info",nested_more_info:"editor.nested_more_info",dismissable:"editor.dismissable",auto_close:"editor.auto_close",keep_alive:"editor.keep_alive"},f9=L=>V=>{if(V.title)return V.title;let C=$8[V.name];return C?h(L,C):V.name},g9=(L,V)=>C=>{if(C.name==="popup_id")return h(L,"editor.popup_id_helper",{id:V.popup_id||"\u2026"});let H=F8[C.name];return H?h(L,H):void 0};var O9=L=>{let V={views:[{type:"sections",sections:[L.section]}]};return{config:V,rawConfig:V,editMode:!0,urlPath:null,mode:"storage",locale:L.locale,enableFullEditMode:()=>{},setEditMode:()=>{},saveConfig:async C=>{let H=C.views?.[0]?.sections?.[0]?.cards??[];L.onSave(structuredClone(H))},deleteConfig:async()=>{},showToast:C=>L.onToast(C)}},_9=L=>{if(!Array.isArray(L))return;let V=L[L.length-1];return typeof V=="number"?V:void 0};var D8=30,N8=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]/g,"_").replace(/^[_-]+/,""),w9,k9,T9,P9,E9,B9,R9,F9,$9,P,m3,s3,v3,c3,x3,u3,Z3,h3,X=class extends($9=E,F9=[O({attribute:!1})],R9=[O({attribute:!1})],B9=[x()],E9=[x()],P9=[x()],T9=[x()],k9=[x()],w9=[x()],$9){constructor(){super(...arguments);m(this,m3,a(P,8,this)),a(P,11,this);m(this,s3,a(P,12,this)),a(P,15,this);m(this,v3,a(P,16,this)),a(P,19,this);m(this,c3,a(P,20,this)),a(P,23,this);m(this,x3,a(P,24,this,!1)),a(P,27,this);m(this,u3,a(P,28,this,!0)),a(P,31,this);m(this,Z3,a(P,32,this,!0)),a(P,35,this);s(this,"_section");s(this,"_sectionKey");s(this,"_undo",[]);m(this,h3,a(P,36,this)),a(P,39,this);s(this,"_noticeTimer");s(this,"_undoLast",()=>{let C=this._undo[this._undo.length-1];this._notice=void 0,C&&(this._undo=this._undo.slice(0,-1),this._setCards(C,!1))});s(this,"_toast",C=>{clearTimeout(this._noticeTimer),this._notice={message:C.message,undo:!!C.action&&this._undo.length>0},this._noticeTimer=setTimeout(()=>{this._notice=void 0},C.duration&&C.duration>0?C.duration:6e3)});s(this,"_interceptEdit",{capture:!0,handleEvent:C=>{let H=_9(C.detail?.path);H!==void 0&&(C.stopPropagation(),C.type==="ll-duplicate-card"?this._duplicate(H):this._openEditor(H))}});s(this,"_interceptCreate",{capture:!0,handleEvent:C=>{C.stopPropagation(),this._sub={kind:"add"}}});s(this,"_back",()=>{this._returnToCards()})}setConfig(C){z1(C),this._config=structuredClone(C)}connectedCallback(){super.connectedCallback(),R7().then(()=>{this._ready=!0})}willUpdate(C){(C.has("_config")||C.has("hass"))&&this._config&&this.hass&&this._syncSection()}get _cards(){return this._config?.cards??[]}get _sectionConfig(){return{type:"grid",column_span:this._config?.column_span??W1.column_span,cards:this._cards}}_emit(C){this._config=C,g(this,"config-changed",{config:C})}_setCards(C,H=!0){this._config&&JSON.stringify(C)!==JSON.stringify(this._cards)&&(H&&(this._undo=[...this._undo,structuredClone(this._cards)].slice(-D8)),this._emit({...this._config,cards:C}))}_syncSection(){let C=this._sectionConfig;this._section??=document.createElement("hui-section");let H=this._section;H.hass=this.hass;let e=JSON.stringify(C);e!==this._sectionKey&&(this._sectionKey=e,H.viewIndex=0,H.index=0,H.preview=!0,H.lovelace=O9({section:C,locale:this.hass.locale,onSave:r=>this._setCards(r),onToast:this._toast}),H.config=C)}_copyNative(C){let H=this._section?.firstElementChild??this._section;H&&g(H,"ll-copy-card",{path:[0,0,C]})}_openEditor(C){this._guiMode=!0,this._guiModeAvailable=!0,this._sub={kind:"edit",index:C}}_returnToCards(){this._sub=void 0,this.updateComplete.then(()=>this.renderRoot.querySelector(".cards-header")?.scrollIntoView({block:"start"}))}_duplicate(C){let H=[...this._cards];H.splice(C+1,0,structuredClone(H[C])),this._setCards(H),this._openEditor(C+1)}_delete(C){let H=[...this._cards];H.splice(C,1),this._setCards(H),this._returnToCards(),this._toast({message:h(this.hass,"editor.card_deleted"),action:{text:h(this.hass,"editor.undo"),action:this._undoLast}})}_cut(C){this._copyNative(C);let H=[...this._cards];H.splice(C,1),this._setCards(H),this._returnToCards()}_cardPicked(C){C.stopPropagation();let H=C.detail.config;if(!H?.type)return;let e=[...this._cards,H];this._setCards(e),this._openEditor(e.length-1)}_cardChanged(C){if(C.stopPropagation(),this._sub?.kind!=="edit")return;let H=[...this._cards];H[this._sub.index]=C.detail.config,this._guiModeAvailable=C.detail.guiModeAvailable??!0,this._setCards(H)}_guiModeChanged(C){C.stopPropagation(),this._guiMode=C.detail.guiMode,this._guiModeAvailable=C.detail.guiModeAvailable}_toggleMode(){this.renderRoot.querySelector("hui-card-element-editor")?.toggleMode()}_valueChanged(C){if(C.stopPropagation(),!this._config)return;let H={...C.detail.value};typeof H.popup_id=="string"&&(H.popup_id=N8(H.popup_id));let e={...this._config,...H};for(let[r,t]of Object.entries(W1))e[r]===t&&delete e[r];for(let r of Object.keys(e))(e[r]===""||e[r]===void 0)&&delete e[r];e.width!=="custom"&&delete e.custom_width,e.height!=="custom"&&(delete e.min_height,delete e.max_height),e.entity||(delete e.replace_more_info,delete e.show_header_actions),this._emit(e)}_testPopup(){if(!this._config)return;let C;try{C=w2(z1(this._config))}catch{return}g(this,"show-dialog",{dialogTag:o1,dialogImport:()=>Promise.resolve(),dialogParams:{config:C},addHistory:!0})}render(){return!this.hass||!this._config?A:this._ready?this._sub?.kind==="add"?this._renderAdd():this._sub?.kind==="edit"&&this._cards[this._sub.index]?this._renderEdit(this._sub.index):this._renderMain():o`<ha-spinner size="small"></ha-spinner>`}_renderMain(){let C=this.hass,H=this._config,e={...W1,...H};return o`
      <ha-form
        .hass=${C}
        .data=${e}
        .schema=${S9(C,e)}
        .computeLabel=${f9(C)}
        .computeHelper=${g9(C,H)}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="cards-header">
        <h3>${h(C,"editor.tab.cards")}</h3>
        <ha-button appearance="plain" size="small" @click=${this._testPopup}>
          ${h(C,"editor.test_popup")}
        </ha-button>
      </div>
      ${this._notice?o`
              <ha-alert alert-type="info" class="notice">
                ${this._notice.message}
                ${this._notice.undo?o`<ha-button
                        slot="action"
                        appearance="plain"
                        size="small"
                        @click=${this._undoLast}
                      >
                        ${h(C,"editor.undo")}
                      </ha-button>`:A}
              </ha-alert>
            `:A}
      ${this._cards.length?A:o`<p class="empty">${h(C,"editor.empty")}</p>`}
      <div
        class="grid"
        style=${F({"--column-span":String(H.column_span??1)})}
        @ll-edit-card=${this._interceptEdit}
        @ll-duplicate-card=${this._interceptEdit}
        @ll-create-card=${this._interceptCreate}
      >
        ${this._section}
      </div>
    `}_renderSubHeader(C,H=A){return o`
      <div class="sub-header">
        <ha-icon-button-prev
          .label=${h(this.hass,"editor.back")}
          @click=${this._back}
        ></ha-icon-button-prev>
        <span class="sub-title">${C}</span>
        <div class="sub-actions">${H}</div>
      </div>
    `}_renderAdd(){return o`
      ${this._renderSubHeader(h(this.hass,"editor.add_card"))}
      <hui-card-picker
        .hass=${this.hass}
        .lovelace=${this.lovelace??{views:[]}}
        @config-changed=${this._cardPicked}
      ></hui-card-picker>
    `}_renderEdit(C){let H=this.hass,e=this._cards[C],r=M=>H.localize(`ui.panel.lovelace.editor.edit_card.${M}`),t=o`
      <ha-icon-button
        .label=${r(this._guiMode?"show_code_editor":"show_visual_editor")}
        .path=${this._guiMode?A2:k0}
        .disabled=${!this._guiModeAvailable}
        @click=${this._toggleMode}
      ></ha-icon-button>
      <ha-icon-button
        .label=${r("duplicate")}
        .path=${c0}
        @click=${()=>this._duplicate(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${r("copy")}
        .path=${s0}
        @click=${()=>this._copyNative(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${r("cut")}
        .path=${v0}
        @click=${()=>this._cut(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${r("delete")}
        .path=${x0}
        @click=${()=>this._delete(C)}
      ></ha-icon-button>
    `;return o`
      ${this._renderSubHeader(h(H,"editor.edit_card"),t)}
      <hui-card-element-editor
        .hass=${H}
        .lovelace=${this.lovelace}
        .value=${e}
        .sectionConfig=${this._sectionConfig}
        show-visibility-tab
        @config-changed=${this._cardChanged}
        @GUImode-changed=${this._guiModeChanged}
      ></hui-card-element-editor>
    `}};P=N($9),m3=new WeakMap,s3=new WeakMap,v3=new WeakMap,c3=new WeakMap,x3=new WeakMap,u3=new WeakMap,Z3=new WeakMap,h3=new WeakMap,l(P,4,"hass",F9,X,m3),l(P,4,"lovelace",R9,X,s3),l(P,4,"_config",B9,X,v3),l(P,4,"_sub",E9,X,c3),l(P,4,"_ready",P9,X,x3),l(P,4,"_guiMode",T9,X,u3),l(P,4,"_guiModeAvailable",k9,X,Z3),l(P,4,"_notice",w9,X,h3),D(P,X),s(X,"styles",y`
    :host {
      display: block;
    }
    .cards-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: var(--ha-space-6) 0 var(--ha-space-2);
    }
    .cards-header h3 {
      margin: 0;
      font-size: var(--ha-font-size-l);
      font-weight: var(--ha-font-weight-medium);
    }
    .notice {
      display: block;
      margin-bottom: var(--ha-space-2);
    }
    .empty {
      color: var(--secondary-text-color);
      margin: 0 0 var(--ha-space-2);
    }
    .grid {
      display: block;
      padding: var(--ha-space-2) 0;
    }
    .sub-header {
      display: flex;
      align-items: center;
      gap: var(--ha-space-1);
      margin: 0 0 var(--ha-space-4);
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: var(--ha-space-2);
    }
    .sub-title {
      flex: 1;
      font-size: var(--ha-font-size-l);
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sub-actions {
      display: flex;
    }
  `);customElements.get(I1)||customElements.define(I1,X);var e2="more-info-controls-card",D9,N9,I9,W9,z9,J,S3,f3,g3,O3,a1=class extends(z9=E,W9=[O({attribute:!1})],I9=[x()],N9=[x()],D9=[x()],z9){constructor(){super(...arguments);m(this,S3,a(J,8,this)),a(J,11,this);m(this,f3,a(J,12,this)),a(J,15,this);m(this,g3,a(J,16,this,!1)),a(J,19,this);m(this,O3,a(J,20,this,{})),a(J,23,this);s(this,"_timers",{})}static getConfigElement(){return document.createElement(z5)}static getStubConfig(C,H){let e=H.find(i=>i.startsWith("light.")&&C.states[i]?.attributes.effect_list),r=H.find(i=>b1.includes(u(i))),t=H.find(i=>i.startsWith("switch.")),M=[];return e&&M.push({entity:e,attribute:"effect"}),r&&M.push({entity:r}),t&&M.push({entity:t}),!M.length&&H[0]&&M.push({entity:H[0]}),{type:`custom:${e2}`,controls:M}}setConfig(C){if(!Array.isArray(C?.controls))throw new Error('"controls" must be a list');C.controls.forEach((H,e)=>{if(!H||typeof H!="object")throw new Error(`Control ${e+1} is invalid`);let r=X1(H);if(r!=="action"&&r!=="button"&&!H.entity)throw new Error(`Control ${e+1} needs an "entity"`);if(H.attribute&&H.attribute!=="state"&&!Y1[H.attribute]&&!H.options)throw new Error(`Control ${e+1}: unknown attribute "${H.attribute}"; add "options" and "perform_action"`)}),this._config=C}connectedCallback(){super.connectedCallback(),i1("light",["ha-more-info-control-select-container","ha-control-select-menu"]).then(()=>{this._ready=!0})}disconnectedCallback(){super.disconnectedCallback(),Object.values(this._timers).forEach(clearTimeout),this._timers={}}getCardSize(){return 1}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}_stateObj(C){return C.entity?this.hass?.states[C.entity]:void 0}_selectSpec(C,H){if(C.attribute)return C.attribute==="state"?b4:Y1[C.attribute]??{options:()=>[],value:e=>e.attributes[C.attribute]==null?void 0:String(e.attributes[C.attribute]),service:()=>["",""],data:e=>({[C.data_key??C.attribute]:e}),icon:z2.icon};if(b1.includes(u(H.entity_id)))return z2;if(C.options&&C.perform_action)return{options:()=>[],value:()=>{},service:()=>["",""],data:e=>({[C.data_key??"value"]:e}),icon:z2.icon,attributeIcons:!1}}_call(C,H,e,r){let[t,M]=C.perform_action?I5(C.perform_action):H;if(!t||!M)return;let i={...C.entity?{entity_id:C.entity}:{},...C.perform_action&&C.data_key?{[C.data_key]:r}:e,...C.data};this.hass.callService(t,M,i)}_label(C,H){return C.name?C.name:H?C.attribute&&C.attribute!=="state"?this.hass.formatEntityAttributeName(H,C.attribute):H1(H):""}_icon(C,H,e,r,t=!0){let M=F({color:C.color&&t?S5(C.color):void 0});return C.icon?o`<ha-icon
        slot=${r??A}
        style=${M}
        .icon=${C.icon}
      ></ha-icon>`:e?o`<ha-svg-icon
        slot=${r??A}
        style=${M}
        .path=${e}
      ></ha-svg-icon>`:o`<ha-state-icon
      slot=${r??A}
      style=${M}
      .hass=${this.hass}
      .stateObj=${H}
    ></ha-state-icon>`}_renderSelect(C,H){let e=this.hass,r=this._selectSpec(C,H);if(!r)return A;let t=E4(C.options),M=t?t.map(c=>c.value):r.options(H),i=C.attribute&&C.attribute!=="state"?C.attribute:void 0,p=c=>{let Z=t?.find(k=>k.value===c);return Z?.name?Z.name:r.formatAsState||!i?e.formatEntityState(H,c):e.formatEntityAttributeValue(H,i,c==="true"?!0:c==="false"?!1:c)},n=M.map(c=>{let Z=t?.find(_=>_.value===c)?.icon,k=Z?void 0:r.optionIcons?.[c];return{value:c,label:p(c),...Z?{icon:Z}:{},...k?{iconPath:k}:{}}}),d=c=>i&&!r.formatAsState?o`<ha-attribute-icon
            slot="icon"
            .hass=${e}
            .stateObj=${H}
            .attribute=${i}
            .attributeValue=${c}
          ></ha-attribute-icon>`:o`<ha-state-icon
            slot="icon"
            .hass=${e}
            .stateObj=${H}
            .stateValue=${c}
          ></ha-state-icon>`,v=!i&&b1.includes(u(H.entity_id));return o`
      <ha-control-select-menu
        .label=${this._label(C,H)}
        .value=${r.value(H)}
        .options=${n}
        .renderIcon=${C.icon||r.attributeIcons===!1?void 0:d}
        .disabled=${H.state==="unavailable"}
        @wa-select=${c=>{let Z=c.detail?.item?.value;Z===void 0||Z===r.value(H)||this._call(C,r.service(H),r.data(Z),Z)}}
      >
        ${this._icon(C,v?H:void 0,v?void 0:r.icon,"icon")}
      </ha-control-select-menu>
    `}_renderToggle(C,H){let e=u(H.entity_id),r=!T4.includes(H.state),t=H.state==="unavailable",M=()=>{C.perform_action?this._call(C,["",""],{},void 0):e==="lock"?this.hass.callService("lock",r?"lock":"unlock",{entity_id:H.entity_id}):e==="cover"||e==="valve"?this.hass.callService(e,"toggle",{entity_id:H.entity_id}):this.hass.callService("homeassistant","toggle",{entity_id:H.entity_id})};return o`
      <button
        class=${$({chip:!0,toggle:!0,active:r})}
        role="switch"
        aria-checked=${String(r)}
        ?disabled=${t}
        @click=${M}
      >
        <div class="icon">
          ${this._icon(C,H,void 0,void 0,r)}
        </div>
        <div class="content">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${this.hass.formatEntityState(H)}</p>
        </div>
      </button>
    `}_renderNumber(C,H,e){let r=this.hass,t=H.attributes,M=C.min??Number(t.min??0),i=C.max??Number(t.max??100),p=C.step??Number(t.step??1),n=this._pending[e]??Number(C.attribute?t[C.attribute]:H.state),d=Number.isFinite(n),v=H.state==="unavailable"||!d,c=(String(p).split(".")[1]??"").length,Z=d&&(this._pending[e]!==void 0||C.attribute)?`${n.toFixed(c)}${t.unit_of_measurement?` ${t.unit_of_measurement}`:""}`:r.formatEntityState(H),k=_=>{let R=Math.min(i,Math.max(M,Number((n+_*p).toFixed(c))));R!==n&&(this._pending={...this._pending,[e]:R},clearTimeout(this._timers[e]),this._timers[e]=setTimeout(()=>{let U=u(H.entity_id);this._call(C,[U,"set_value"],{value:R},R);let n1={...this._pending};delete n1[e],this._pending=n1},P4))};return o`
      <div
        class="chip number"
        ?disabled=${v}
        role="group"
        aria-label=${this._label(C,H)}
      >
        <ha-icon-button
          .label=${r.localize("ui.card.counter.actions.decrement")||"\u2212"}
          .path=${R0}
          .disabled=${v||n<=M}
          @click=${()=>k(-1)}
        ></ha-icon-button>
        <div class="content center">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${Z}</p>
        </div>
        <ha-icon-button
          .label=${r.localize("ui.card.counter.actions.increment")||"+"}
          .path=${W0}
          .disabled=${v||n>=i}
          @click=${()=>k(1)}
        ></ha-icon-button>
      </div>
    `}_runAction(C,H){if(H.action!=="none"){if(H.action==="more-info"){let e=H.entity??C.entity;e&&g(this,"hass-more-info",{entityId:e});return}g(this,"hass-action",{config:{entity:C.entity,tap_action:H},action:"tap"})}}_renderButton(C,H){let e=C.entity?u(C.entity):"",r=()=>{if(C.tap_action){this._runAction(C,C.tap_action);return}let t=C.perform_action??k4[e]??(C.entity?"homeassistant.toggle":void 0);if(!t)return;let[M,i]=I5(t);this.hass.callService(M,i,{...C.entity?{entity_id:C.entity}:{},...C.data})};return o`
      <ha-control-button
        .label=${this._label(C,H)}
        .disabled=${H?.state==="unavailable"}
        @click=${r}
      >
        ${this._icon(C,H,void 0)}
      </ha-control-button>
    `}_renderAction(C,H){let e=C.tap_action??{action:H?"more-info":"none"},r=C.show_arrow??U2(C,!!H),t=C.value??(H?this.hass.formatEntityState(H):"");return o`
      <button class="chip action" @click=${()=>this._runAction(C,e)}>
        <div class="icon">${this._icon(C,H,void 0)}</div>
        <div class="content">
          <p class="label">${this._label(C,H)}</p>
          ${t?o`<p class="value">${t}</p>`:A}
        </div>
        ${r?o`<div class="icon">
                <ha-svg-icon .path=${i2}></ha-svg-icon>
              </div>`:A}
      </button>
    `}_renderItem(C,H){let e=this._stateObj(C),r=X1(C);if(r==="action")return this._renderAction(C,e);if(r==="button")return this._renderButton(C,e);if(!e)return o`<div class="chip" disabled>
        <div class="content">
          <p class="label">${C.name??C.entity}</p>
          <p class="value">
            ${this.hass.localize("state.default.unavailable")}
          </p>
        </div>
      </div>`;switch(r){case"select":return this._renderSelect(C,e);case"toggle":return this._renderToggle(C,e);case"number":return this._renderNumber(C,e,H);default:return A}}_renderWrapped(C){let H=C.length;return o`
      <div class="wrap-controls">
        <div
          class=${$({"wrap-scroll":!0,[`items-${H}`]:!0,multiline:H>=4})}
        >
          ${C}
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return A;let C=this._config.appearance??"plain",H=this._config.controls.map((t,M)=>({item:t,index:M})),e=H.filter(({item:t})=>X1(t)==="button"),r=H.filter(({item:t})=>X1(t)!=="button");return o`
      <ha-card class=${C}>
        ${this._ready?H.length?o`
                  ${e.length?o`<div class="buttons">
                          <ha-control-button-group>
                            ${e.map(({item:t,index:M})=>this._renderItem(t,M))}
                          </ha-control-button-group>
                        </div>`:A}
                  ${r.length?this._config.wrap?this._renderWrapped(r.map(({item:t,index:M})=>this._renderItem(t,M))):o`<ha-more-info-control-select-container>
                            ${r.map(({item:t,index:M})=>this._renderItem(t,M))}
                          </ha-more-info-control-select-container>`:A}
                `:o`<p class="empty">
                  ${h(this.hass,"controls.empty")}
                </p>`:A}
      </ha-card>
    `}};J=N(z9),S3=new WeakMap,f3=new WeakMap,g3=new WeakMap,O3=new WeakMap,l(J,4,"hass",W9,a1,S3),l(J,4,"_config",I9,a1,f3),l(J,4,"_ready",N9,a1,g3),l(J,4,"_pending",D9,a1,O3),D(J,a1),s(a1,"styles",[y1,Q2,y`
      ha-card.card {
        padding: var(--ha-space-4);
      }
      .chip.toggle.active .icon {
        color: var(--state-active-color, var(--primary-color));
      }
      .chip.number {
        gap: 0;
        padding: 0 2px;
        cursor: default;
      }
      .chip.number ha-icon-button {
        --ha-icon-button-size: 40px;
        --mdc-icon-size: 20px;
        flex: none;
      }
      .chip .content.center {
        align-items: center;
        text-align: center;
      }
      .chip.number[disabled] {
        color: var(--disabled-color);
      }
      /* ha-more-info-control-select-container, large-screen rules */
      .wrap-controls {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .wrap-scroll {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--ha-space-3);
        width: 100%;
        max-width: 450px;
        margin: auto;
      }
      .wrap-scroll > * {
        min-width: 120px;
        max-width: 160px;
        flex: none;
      }
      .wrap-scroll.items-4 {
        max-width: 300px;
      }
      .wrap-scroll.items-3 > * {
        max-width: 140px;
      }
      .wrap-scroll.multiline > * {
        width: 140px;
      }
      /* more-info-vacuum.ts command buttons */
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--ha-space-3);
      }
      .buttons:not(:last-child) {
        margin-bottom: var(--ha-space-6);
      }
      ha-control-button-group {
        --control-button-group-thickness: 48px;
        justify-content: center;
      }
      ha-control-button-group ha-control-button {
        flex: 0 0 auto;
        width: var(--control-button-group-thickness);
        --control-button-border-radius: var(--ha-border-radius-lg);
      }
      .empty {
        margin: 0;
        text-align: center;
        color: var(--secondary-text-color);
      }
    `]);customElements.get(e2)||customElements.define(e2,a1);var U9=L=>(/^https?:\/\//i.test(L)?L:`http://${L}`).replace(/\/+$/,""),K2=L=>window.location.protocol==="https:"&&L.startsWith("http:"),u1=async(L,V,C)=>{let H=new AbortController,e=setTimeout(()=>H.abort(),5e3);try{let r=await fetch(`${L}${V}`,{method:C===void 0?"GET":"POST",headers:C===void 0?void 0:{"Content-Type":"application/json"},body:C===void 0?void 0:JSON.stringify(C),signal:H.signal});if(!r.ok)throw new Error(`WLED ${V}: ${r.status}`);return await r.json()}finally{clearTimeout(e)}},_3=new Map,I8=(L,V)=>`more-info-popup-card:wled:${L}:${V}`,W8=L=>{try{let V=localStorage.getItem(L);return V?JSON.parse(V):void 0}catch{return}},z8=(L,V)=>{try{localStorage.setItem(L,JSON.stringify(V))}catch{}},U8=async L=>{let V=await u1(L,"/json/info"),C=I8(L,V.ver),H=W8(C);if(H)return H;let e=await u1(L,"/json/eff"),r=await u1(L,"/json/fxdata"),t=await u1(L,"/json/pal"),M={},i=0;for(let n=0;n<=i;n++){let d=await u1(L,`/json/palx?page=${n}`);i=d.m,Object.assign(M,d.p)}let p={version:V.ver,effectNames:e,fxdata:r,paletteNames:t,palx:M};return z8(C,p),p},q2=L=>{let V=_3.get(L);return V||(V=U8(L),_3.set(L,V),V.catch(()=>_3.delete(L))),V},b3=async L=>(await u1(L,"/json/state")).seg,G9=async(L,V,C)=>(await u1(L,"/json/state",{seg:[{id:V,...C}],v:!0})).seg;var G8=["sx","ix","c1","c2","c3"],Q8=["o1","o2","o3"],K8=L=>L!==""&&!Number.isNaN(Number(L)),y3=L=>{let V=L.split("=")[0].trim();return V==="!"?void 0:V},q8=L=>{let V=new Set;for(let C of(L||"1").split(",")){let H=C.trim().toLowerCase();if(!(!H||H.includes("="))){if(H==="1.5d"){V.add("1.5d");continue}H.includes("0")&&V.add("0d"),H.includes("1")&&V.add("1d"),H.includes("2")&&V.add("2d"),H.includes("v")&&V.add("volume"),H.includes("f")&&V.add("frequency")}}return[...V]},Y8=(L,V,C)=>{let H=C??"";if(H==="")return{id:L,name:V,sliders:L===0?[]:[{key:"sx"},{key:"ix"}],options:[],colors:[void 0,void 0,void 0],palette:L!==0,categories:L===0?[]:["1d"]};let[e="",r="",t="",M]=H.split(";"),i=e===""?[]:e.split(","),p=r===""?[]:r.split(","),n=t===""?[]:t.split(","),d=[];G8.forEach((k,_)=>{let R=i[_];R!==void 0&&R.trim()!==""&&d.push({key:k,label:y3(R)})});let v=[];Q8.forEach((k,_)=>{let R=i[5+_];R!==void 0&&R.trim()!==""&&v.push({key:k,label:y3(R)})});let c=k=>{let _=p[k];return _===void 0||_.trim()===""?null:y3(_)},Z=n[0]?.split("=")[0]?.trim()??"";return{id:L,name:V,sliders:d,options:v,colors:[c(0),c(1),c(2)],palette:Z!==""&&!K8(Z),categories:L===0?[]:q8(M)}},q9=(L,V)=>L.map((C,H)=>Y8(H,C,V?.[H])).filter(C=>!C.name.includes("RSVD")),Q9=([L,V,C])=>`rgb(${L}, ${V}, ${C})`,K9=[[255,0,90],[255,170,0],[0,210,120],[0,120,255]],Y9=(L,V)=>{if(!L?.length)return;let C=[];return L.forEach((H,e)=>{if(typeof H=="string"){let r=H==="r"?K9[e%K9.length]:V[Number(H.slice(1))-1]??[0,0,0],t=L.length===1?0:e/(L.length-1)*100;C.push(`${Q9(r)} ${t.toFixed(1)}%`)}else{let[r,t,M,i]=H;C.push(`${Q9([t,M,i])} ${(r/255*100).toFixed(1)}%`)}}),C.length===1&&C.push(C[0].replace(/ [\d.]+%$/," 100%")),`linear-gradient(90deg, ${C.join(", ")})`},X9=([L,V,C])=>{let H=Math.max(L,V,C),e=Math.min(L,V,C),r=H-e,t=H===0?0:r/H,M=0;return r&&(H===L?M=(V-C)/r%6:H===V?M=(C-L)/r+2:M=(L-V)/r+4),[(M*60+360)%360,t]},w3=([L,V])=>{let C=H=>{let e=(H+L/60)%6;return 1-V*Math.max(0,Math.min(e,4-e,1))};return[C(5),C(3),C(1)].map(H=>Math.round(H*255))};var Y2="more-info-wled-effect-picker",X8=["all","1d","2d","1.5d","volume","frequency","palette"],r2={"1d":_0,"2d":g0,"1.5d":Y0,volume:s2,frequency:j0,palette:$0},k3=new Map,F3=L=>{let V=k3.get(L);return V||(V=q2(L).then(C=>q9(C.effectNames,C.fxdata)),k3.set(L,V),V.catch(()=>k3.delete(L))),V},J9,j9,C6,H6,V6,L6,z,T3,P3,E3,B3,R3,e1=class extends(L6=E,V6=[O({attribute:!1})],H6=[O({attribute:!1})],C6=[x()],j9=[x()],J9=[x()],L6){constructor(){super(...arguments);m(this,T3,a(z,8,this)),a(z,11,this);m(this,P3,a(z,12,this)),a(z,15,this);m(this,E3,a(z,16,this)),a(z,19,this);m(this,B3,a(z,20,this,"all")),a(z,23,this);m(this,R3,a(z,24,this,"")),a(z,27,this);s(this,"_loadedHost")}willUpdate(){let C=this.params?.host;!C||C===this._loadedHost||K2(C)||(this._loadedHost=C,F3(C).then(H=>{this._effects=new Map(H.map(e=>[e.name,e]))},()=>{}))}_t(C){return h(this.hass,C)}_select(C){let H=this.params.entityId;this.hass.callService("light","turn_on",{entity_id:H,effect:C}),g(this,"wled-effect-picked",{effect:C}),g(this,"close-child-view")}_matches(C){if(this._search&&!C.toLowerCase().includes(this._search))return!1;if(this._filter==="all")return!0;let H=this._effects?.get(C);return H?this._filter==="palette"?H.palette:H.categories.includes(this._filter):!1}render(){let C=this.hass,H=this.params?.entityId,e=H?C?.states[H]:void 0;if(!C||!e)return A;let r=e.attributes.effect_list??[],t=e.attributes.effect??this.params?.current,M=this._effects,i=M?X8.filter(n=>n==="all"||[...M.values()].some(d=>n==="palette"?d.palette:d.categories.includes(n))):[],p=r.filter(n=>this._matches(n));return o`
      <div class="search">
        <ha-svg-icon .path=${P0}></ha-svg-icon>
        <input
          type="search"
          .value=${this._search}
          placeholder=${this._t("wled.search")}
          aria-label=${this._t("wled.search")}
          @input=${n=>{this._search=n.target.value.trim().toLowerCase()}}
        />
      </div>
      ${i.length>1?o`<div class="filters" role="toolbar">
              ${i.map(n=>o`
                  <button
                    class=${$({filter:!0,selected:this._filter===n})}
                    aria-pressed=${this._filter===n}
                    @click=${()=>{this._filter=n}}
                  >
                    ${r2[n]?o`<ha-svg-icon
                            .path=${r2[n]}
                          ></ha-svg-icon>`:A}
                    ${this._t(`wled.filter.${n}`)}
                  </button>
                `)}
            </div>`:A}
      <div class="list" role="listbox">
        ${p.map(n=>{let d=M?.get(n),v=n===t;return o`
            <button
              class=${$({row:!0,selected:v})}
              role="option"
              aria-selected=${v}
              @click=${()=>this._select(n)}
            >
              <span class="name">${n}</span>
              <span class="tags">
                ${[...(d?.categories??[]).filter(c=>c!=="0d"),...d?.palette?["palette"]:[]].map(c=>o`<ha-svg-icon
                      title=${this._t(`wled.filter.${c}`)}
                      .path=${r2[c]}
                    ></ha-svg-icon>`)}
              </span>
              <ha-svg-icon
                class="check"
                .path=${v?h1:""}
              ></ha-svg-icon>
            </button>
          `})}
        ${p.length?A:o`<p class="empty">${this._t("wled.no_effects")}</p>`}
      </div>
    `}};z=N(L6),T3=new WeakMap,P3=new WeakMap,E3=new WeakMap,B3=new WeakMap,R3=new WeakMap,l(z,4,"hass",V6,e1,T3),l(z,4,"params",H6,e1,P3),l(z,4,"_effects",C6,e1,E3),l(z,4,"_filter",j9,e1,B3),l(z,4,"_search",J9,e1,R3),D(z,e1),s(e1,"styles",y`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--ha-space-3);
      padding: var(--ha-space-4) var(--ha-space-6) var(--ha-space-6);
      box-sizing: border-box;
    }
    :host([inline]) {
      padding: 0;
    }
    /* Search field like HA's search-input. */
    .search,
    .filters,
    .row {
      flex-shrink: 0;
    }
    .search {
      display: flex;
      align-items: center;
      gap: var(--ha-space-2);
      height: 48px;
      padding: 0 var(--ha-space-3);
      border-radius: var(--ha-border-radius-lg);
      background: var(
        --ha-color-fill-neutral-quiet-resting,
        rgba(139, 145, 151, 0.1)
      );
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
    }
    .search input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-m);
    }
    /* Filter chips like ha-filter-chip. */
    /* One row that scrolls sideways, like HA's chip rows. */
    .filters {
      display: flex;
      gap: var(--ha-space-2);
      overflow-x: auto;
      scrollbar-width: none;
    }
    .filters::-webkit-scrollbar {
      display: none;
    }
    .filter {
      display: inline-flex;
      align-items: center;
      gap: var(--ha-space-1);
      flex: none;
      height: 32px;
      padding: 0 var(--ha-space-3);
      border: 1px solid var(--outline-color, var(--divider-color));
      border-radius: var(--ha-border-radius-md);
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-s);
      font-weight: var(--ha-font-weight-medium);
      cursor: pointer;
      --mdc-icon-size: 18px;
    }
    .filter.selected {
      border-color: transparent;
      background: var(
        --ha-color-fill-primary-normal-resting,
        rgba(var(--rgb-primary-color), 0.2)
      );
      color: var(--ha-color-on-primary-normal, var(--primary-color));
    }
    .list {
      display: flex;
      flex-direction: column;
    }
    .row {
      display: flex;
      align-items: center;
      gap: var(--ha-space-3);
      min-height: 48px;
      padding: 0 var(--ha-space-3);
      border: none;
      border-radius: var(--ha-border-radius-md);
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-m);
      text-align: start;
      cursor: pointer;
      --mdc-icon-size: 18px;
    }
    .row:hover,
    .row:focus-visible {
      background: var(
        --ha-color-fill-neutral-quiet-hover,
        rgba(139, 145, 151, 0.12)
      );
      outline: none;
    }
    .row.selected {
      color: var(--primary-color);
      font-weight: var(--ha-font-weight-medium);
    }
    .name {
      flex: 1;
    }
    .tags {
      display: flex;
      gap: var(--ha-space-1);
      color: var(--secondary-text-color);
    }
    .check {
      --mdc-icon-size: 20px;
      width: 20px;
    }
    .empty {
      margin: var(--ha-space-4) 0;
      text-align: center;
      color: var(--secondary-text-color);
    }
  `);customElements.get(Y2)||customElements.define(Y2,e1);var J8=L=>{let V=/^(.+)_(\d+)$/.exec(L);return V?{mac:V[1],segment:Number(V[2])}:void 0},e6=async(L,V,C)=>{let H=L.entities[V];if(!V.startsWith("light.")||H?.platform!=="wled")return"not_wled";let e=H.device_id??void 0,r=Object.values(L.entities).filter(Z=>e&&Z.device_id===e).map(Z=>Z.entity_id),t=await L.callWS({type:"config/entity_registry/get_entries",entity_ids:r.includes(V)?r:[V,...r]}),M=t[V],i=M&&J8(M.unique_id);if(!i)return"main_light";let p=new Map(Object.values(t).filter(Z=>!!Z).map(Z=>[Z.unique_id,Z.entity_id])),{mac:n,segment:d}=i,v=e?L.devices[e]?.configuration_url:void 0,c=C||v;return{segment:d,host:c?U9(c):void 0,palette:p.get(`${n}_palette_${d}`),speed:p.get(`${n}_speed_${d}`),intensity:p.get(`${n}_intensity_${d}`)}};var D3="more-info-wled-state-card-editor",j8=()=>{},$3=L=>h(j8(),`controls.${L}`)||void 0,r6={show_state:!0,show_last_changed:!0,show_effects:!0},CC=()=>({schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"light",integration:"wled"}}}},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}},{name:"show_effects",selector:{boolean:{}}}]},{name:"host",selector:{text:{}}},{name:"appearance",selector:{select:{mode:"dropdown",options:["plain","card"].map(L=>({value:L,label:$3(`appearance.${L}`)??L}))}}}],computeLabel:L=>$3(L.name)??L.name,computeHelper:L=>$3(`${L.name}_helper`)});J1(D3,CC,{fill:L=>({...r6,...L}),strip:L=>G2(L,r6)});var t2="more-info-wled-state-card",HC={sx:255,ix:255,c1:255,c2:255,c3:31},VC=15e3,LC=400,N3=L=>L?`rgb(${L[0]}, ${L[1]}, ${L[2]})`:void 0,I3=L=>!L||L[0]===0&&L[1]===0&&L[2]===0,t6,M6,o6,i6,a6,A6,n6,d6,p6,l6,m6,s6,v6,c6,S,W3,z3,U3,G3,Q3,K3,q3,Y3,X3,J3,j3,C0,H0,I=class extends(c6=E,v6=[O({attribute:!1})],s6=[x()],m6=[x()],l6=[x()],p6=[x()],d6=[x()],n6=[x()],A6=[x()],a6=[x()],i6=[x()],o6=[x()],M6=[x()],t6=[x()],c6){constructor(){super(...arguments);m(this,W3,a(S,8,this)),a(S,11,this);m(this,z3,a(S,12,this)),a(S,15,this);m(this,U3,a(S,16,this,!1)),a(S,19,this);m(this,G3,a(S,20,this)),a(S,23,this);m(this,Q3,a(S,24,this)),a(S,27,this);m(this,K3,a(S,28,this)),a(S,31,this);m(this,q3,a(S,32,this)),a(S,35,this);m(this,Y3,a(S,36,this)),a(S,39,this);m(this,X3,a(S,40,this,"brightness")),a(S,43,this);m(this,J3,a(S,44,this,1)),a(S,47,this);m(this,j3,a(S,48,this)),a(S,51,this);m(this,C0,a(S,52,this,{})),a(S,55,this);m(this,H0,a(S,56,this,!1)),a(S,59,this);s(this,"_linkKey");s(this,"_pollTimer");s(this,"_refreshTimer");s(this,"_lastUpdated");s(this,"_openPicker",C=>{if(C.stopPropagation(),this._pickerOpen){this._pickerOpen=!1;return}let H=this._stateObj,e={entityId:H.entity_id,host:this._deviceError?void 0:this._host,current:this._effectName},r={viewTag:Y2,viewTitle:this.hass.formatEntityAttributeName(H,"effect"),viewParams:e},t=!1,M=()=>{t=!0};window.addEventListener("show-child-view",M),g(this,"show-child-view",r),window.removeEventListener("show-child-view",M),t&&(this._pickerOpen=!0)})}static getConfigElement(){return document.createElement(D3)}static getStubConfig(C){let H=Object.values(C.entities).find(e=>e.platform==="wled"&&e.entity_id.startsWith("light.")&&e.translation_key==="segment")?.entity_id??"";return{type:`custom:${t2}`,entity:H}}setConfig(C){if(!C?.entity)throw new Error('"entity" is required');this._config=C,this._linkKey=void 0,this._link=void 0,this._segment=void 0,this._effects=void 0,this._catalog=void 0,this._deviceError=void 0,this._mode="brightness",this._pickerOpen=!1}getCardSize(){return 10}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}set popupFill(C){if(this.style.removeProperty("--popup-min-height"),C<=0)return;let H=this.getBoundingClientRect().height;this.style.setProperty("--popup-min-height",`${H+C}px`)}connectedCallback(){super.connectedCallback(),g(this,w1),this._pollTimer=setInterval(()=>this._refreshSegment(),VC)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._pollTimer),clearTimeout(this._refreshTimer)}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _host(){return typeof this._link=="object"?this._link.host:void 0}willUpdate(C){if(!this._config||!this.hass)return;!this._ready&&this._stateObj&&(this._ready=!0,i1("light",["ha-state-control-light-brightness","ha-more-info-state-header","ha-hs-color-picker","ha-control-slider",...K1]).then(()=>this.requestUpdate()),i1("vacuum",["ha-more-info-control-select-container","ha-control-button","ha-control-button-group"]).then(()=>this.requestUpdate()));let H=`${this._config.entity}|${this._config.host??""}`;this._linkKey!==H&&this.hass.entities[this._config.entity]&&(this._linkKey=H,e6(this.hass,this._config.entity,this._config.host).then(r=>{this._linkKey===H&&(this._link=r,this._loadDevice())},()=>{this._linkKey===H&&(this._link="not_wled")}));let e=this._stateObj?.last_updated;C.has("hass")&&e&&e!==this._lastUpdated&&(this._lastUpdated=e,this._scheduleRefresh())}_loadDevice(){let C=this._host;if(C){if(K2(C)){this._deviceError="mixed_content";return}Promise.all([F3(C),q2(C),b3(C)]).then(([H,e,r])=>{this._host===C&&(this._effects=new Map(H.map(t=>[t.name,t])),this._catalog=e,this._applySegments(r),this._deviceError=void 0)},()=>{this._host===C&&(this._deviceError="unreachable")})}}_scheduleRefresh(){clearTimeout(this._refreshTimer),this._refreshTimer=setTimeout(()=>this._refreshSegment(),LC)}_refreshSegment(){let C=this._host;!C||this._deviceError||!this.isConnected||b3(C).then(H=>this._applySegments(H),()=>{})}_applySegments(C){let H=typeof this._link=="object"?this._link.segment:-1;this._segment=C.find(e=>e.id===H)}async _setSegment(C){let H=this._host;if(!(!H||typeof this._link!="object"))try{this._applySegments(await G9(H,this._link.segment,C))}catch{this._scheduleRefresh()}}_t(C,H){return h(this.hass,C,H)}get _effectName(){let C=this._stateObj?.attributes.effect;if(C)return C;let H=this._segment?.fx;return H!==void 0?this._catalog?.effectNames[H]:void 0}get _effect(){let C=this._effectName;return C?this._effects?.get(C):void 0}_color(C){let H=this._segment?.col?.[C];if(H&&H.length>=3)return[H[0],H[1],H[2]];if(C===0)return this._stateObj?.attributes.rgb_color}_usesColor(C){let H=this._effect;return!H||H.colors[C]!==null}get _paletteEntity(){return typeof this._link=="object"?this._link.palette:void 0}get _paletteNames(){let C=this._paletteEntity;return(C?this.hass.states[C]?.attributes.options:void 0)??this._catalog?.paletteNames??[]}get _currentPalette(){let C=this._paletteEntity;if(C)return this.hass.states[C]?.state;let H=this._segment?.pal;return H!==void 0?this._catalog?.paletteNames[H]:void 0}_paletteCss(C){let H=this._catalog;if(!H||!C)return;let e=H.paletteNames.indexOf(C);if(e<0)return;let r=[0,1,2].map(t=>this._color(t)??[0,0,0]);return Y9(H.palx[String(e)],r)}render(){if(!this._config||!this.hass)return A;let C=this._stateObj,H=this._config.appearance??"plain",e=C?this._link==="not_wled"?this._t("wled.not_wled"):this._link==="main_light"?this._t("wled.main_light"):void 0:this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity});return e||!C?o`<ha-card class=${H}>
        <ha-alert alert-type="warning">${e}</ha-alert>
      </ha-card>`:o`
      <ha-card class=${H} .label=${H1(C)}>
        ${this._header(C)}
        <div class="controls">
          ${this._mainControl(C)} ${this._buttonBar(C)}
        </div>
        ${this._config.show_effects===!1?A:this._effectsSection(C)}
        ${this._deviceNote()}
      </ha-card>
    `}_header(C){let H=this._config;if(H.show_state===!1)return A;let e=C.state==="on"&&C.attributes.brightness!=null?this.hass.formatEntityAttributeValue(C,"brightness"):void 0;return H.show_last_changed===!1?o`<p class="state">
        ${e??this.hass.formatEntityState(C)}
      </p>`:o`<ha-more-info-state-header
      .hass=${this.hass}
      .stateObj=${C}
      .stateOverride=${e}
    ></ha-more-info-state-header>`}_mainControl(C){let H=this.hass;switch(this._mode){case"color":return o`<light-color-rgb-picker
          .hass=${H}
          .stateObj=${C}
        ></light-color-rgb-picker>`;case"color_temp":return o`<light-color-temp-picker
          .hass=${H}
          .stateObj=${C}
        ></light-color-temp-picker>`;case"secondary":return this._secondaryPicker();case"palette":return this._palettePicker();default:return o`<ha-state-control-light-brightness
          .hass=${H}
          .stateObj=${C}
        ></ha-state-control-light-brightness>`}}_secondaryPicker(){let C=this._slot,H=this._preview??this._color(C),e=i=>{i.stopPropagation(),this._preview=void 0;let p=i.detail.value;if(!p)return;let n=[[],[],[]];n[C]=w3(p),this._setSegment({col:n})},r=i=>{i.stopPropagation(),this._preview=i.detail.value?w3(i.detail.value):void 0},t=()=>{let i=[[],[],[]];i[C]=[0,0,0],this._setSegment({col:i})},M=i=>this._effect?.colors[i]??this._t(i===1?"wled.secondary_color":"wled.tertiary_color");return o`
      <div class="color-container">
        <ha-hs-color-picker
          .value=${I3(H)?void 0:X9(H)}
          .colorBrightness=${255}
          @value-changed=${e}
          @cursor-moved=${r}
        ></ha-hs-color-picker>
      </div>
      <div class="slot-bar">
        ${this._usesColor(2)||this._slot===2?o`<ha-control-button-group class="slots">
                ${[1,2].map(i=>o`<ha-control-button
                      class=${$({active:C===i})}
                      @click=${()=>{this._slot=i}}
                    >
                      <span
                        class="dot"
                        style=${F({background:N3(this._color(i))})}
                      ></span>
                      <span class="label">${M(i)}</span>
                    </ha-control-button>`)}
              </ha-control-button-group>`:o`<span class="slot-title">${M(1)}</span>`}
        <ha-icon-button
          .label=${this._t("wled.color_black")}
          .path=${m0}
          @click=${t}
        ></ha-icon-button>
      </div>
    `}_palettePicker(){let C=this._currentPalette,H=e=>{let r=this._paletteEntity;if(r)this.hass.callService("select","select_option",{entity_id:r,option:e});else{let t=this._catalog?.paletteNames.indexOf(e)??-1;t>=0&&this._setSegment({pal:t})}};return o`
      <div
        class="palettes"
        role="listbox"
        aria-label=${this._t("wled.palette")}
      >
        ${this._paletteNames.map(e=>{let r=e===C,t=this._paletteCss(e);return o`
            <button
              class=${$({"palette-row":!0,selected:r})}
              role="option"
              aria-selected=${r}
              @click=${()=>H(e)}
            >
              <span
                class=${$({preview:!0,empty:!t})}
                style=${F({backgroundImage:t})}
              ></span>
              <span class="name">${e}</span>
            </button>
          `})}
      </div>
    `}updated(C){super.updated(C),C.has("_mode")&&this._mode==="palette"&&this.renderRoot.querySelector(".palette-row.selected")?.scrollIntoView({block:"center"})}_buttonBar(C){let H=this.hass,e=C.state==="unavailable",r=q1(C),t=F2(C),M=$2(C),i=D2(C),p=!!this._segment,n=!!(this._paletteEntity||this._catalog),d=this._mode,v=_=>R=>{R.stopPropagation(),this._mode=_},c=_=>{_.stopPropagation(),H.callService("light",C.state==="on"?"turn_off":"turn_on",{entity_id:C.entity_id})},Z=this._color(1),k=this._paletteCss(this._currentPalette);return o`
      <ha-icon-button-group>
        <ha-icon-button
          .disabled=${e}
          .label=${H.localize("ui.dialogs.more_info_control.light.toggle")}
          @click=${c}
        >
          <ha-svg-icon .path=${r1}></ha-svg-icon>
        </ha-icon-button>
        <div class="separator"></div>
        ${r?o`<ha-icon-button-toggle
                .selected=${d==="brightness"}
                .disabled=${e}
                .label=${H.formatEntityAttributeName(C,"brightness")}
                @click=${v("brightness")}
              >
                <ha-svg-icon .path=${o2}></ha-svg-icon>
              </ha-icon-button-toggle>`:A}
        ${t?o`<ha-icon-button-toggle
                border-only
                .selected=${d==="color"}
                .disabled=${e}
                .label=${H.localize("ui.dialogs.more_info_control.light.color")}
                @click=${v("color")}
              >
                <span class="wheel color"></span>
              </ha-icon-button-toggle>`:A}
        ${t&&p?o`<ha-icon-button-toggle
                border-only
                .selected=${d==="secondary"}
                .disabled=${e||!this._usesColor(1)}
                .label=${this._usesColor(1)?this._t("wled.secondary_color"):this._t("wled.not_used")}
                @click=${v("secondary")}
              >
                <span
                  class=${$({wheel:!0,swatch:!0,off:I3(Z)})}
                  style=${F({background:I3(Z)?void 0:N3(Z)})}
                ></span>
              </ha-icon-button-toggle>`:A}
        ${M?o`<ha-icon-button-toggle
                border-only
                .selected=${d==="color_temp"}
                .disabled=${e}
                .label=${H.localize("ui.dialogs.more_info_control.light.color_temp")}
                @click=${v("color_temp")}
              >
                <span class="wheel color-temp"></span>
              </ha-icon-button-toggle>`:A}
        ${n?o`<ha-icon-button-toggle
                border-only
                .selected=${d==="palette"}
                .disabled=${e||this._effect?.palette===!1}
                .label=${this._effect?.palette===!1?this._t("wled.not_used"):this._t("wled.palette")}
                @click=${v("palette")}
              >
                <span
                  class=${$({wheel:!0,palette:!0,empty:!k})}
                  style=${F({backgroundImage:k})}
                ></span>
              </ha-icon-button-toggle>`:A}
        ${i?o`<div class="separator"></div>
                <ha-icon-button
                  .disabled=${e}
                  .label=${H.localize("ui.dialogs.more_info_control.light.set_white")}
                  @click=${()=>H.callService("light","turn_on",{entity_id:C.entity_id,white:!0})}
                >
                  <ha-svg-icon .path=${l2}></ha-svg-icon>
                </ha-icon-button>`:A}
      </ha-icon-button-group>
    `}_effectsSection(C){let H=this.hass,e=this._effectName;if(!C.attributes.effect_list?.length)return A;let r=this._effect,t=[...(r?.categories??[]).filter(M=>M!=="0d"),...r?.palette?["palette"]:[]];return o`
      <div class="effects">
        <button
          class="chip effect"
          ?disabled=${C.state==="unavailable"}
          aria-expanded=${this._pickerOpen}
          @click=${this._openPicker}
        >
          <div class="icon">
            <ha-svg-icon .path=${d2}></ha-svg-icon>
          </div>
          <div class="content">
            <p class="label">
              ${H.formatEntityAttributeName(C,"effect")}
            </p>
            <p class="value">${e??"\u2014"}</p>
          </div>
          <div class="tags">
            ${t.map(M=>o`<ha-svg-icon .path=${r2[M]}></ha-svg-icon>`)}
          </div>
          <div class="icon">
            <ha-svg-icon .path=${i2}></ha-svg-icon>
          </div>
        </button>
        ${this._pickerOpen?o`<more-info-wled-effect-picker
                inline
                .hass=${H}
                .params=${{entityId:C.entity_id,host:this._deviceError?void 0:this._host,current:this._effectName}}
                @wled-effect-picked=${()=>{this._pickerOpen=!1}}
                @close-child-view=${M=>M.stopPropagation()}
              ></more-info-wled-effect-picker>`:A}
        ${this._sliders(C)} ${this._options()}
      </div>
    `}_sliderValue(C){let H=this._moving[C];if(H!==void 0)return H;let e=typeof this._link=="object"?this._link:void 0,r=C==="sx"?e?.speed:C==="ix"?e?.intensity:void 0,t=r?this.hass.states[r]?.state:void 0;return t!==void 0&&!Number.isNaN(Number(t))?Number(t):this._segment?.[C]}_setSlider(C,H){let e=typeof this._link=="object"?this._link:void 0,r=C==="sx"?e?.speed:C==="ix"?e?.intensity:void 0;r?this.hass.callService("number","set_value",{entity_id:r,value:H}):this._setSegment({[C]:H})}_sliders(C){let H=this._effect,e=typeof this._link=="object"?this._link:void 0,r=H?H.sliders:[...e?.speed?[{key:"sx"}]:[],...e?.intensity?[{key:"ix"}]:[]],t=F({"--control-slider-color":N3(this._color(0))??"var(--state-light-active-color, var(--state-active-color))"}),M=r.map(i=>({...i,value:this._sliderValue(i.key)})).filter(i=>i.value!==void 0);return M.length?o`
      <div class="sliders">
        ${M.map(i=>{let p=i.label??this._t(`wled.slider.${i.key}`),n=HC[i.key];return o`
            <div class="slider">
              <div class="slider-label">
                <span>${p}</span>
                <span class="slider-value"
                  >${Math.round((i.value??0)/n*100)} %</span
                >
              </div>
              <ha-control-slider
                style=${t}
                .value=${i.value}
                .min=${0}
                .max=${n}
                .step=${1}
                .label=${p}
                .disabled=${C.state==="unavailable"}
                @slider-moved=${d=>{d.stopPropagation(),this._moving={...this._moving,[i.key]:d.detail.value}}}
                @value-changed=${d=>{d.stopPropagation();let v={...this._moving};delete v[i.key],this._moving=v,this._setSlider(i.key,d.detail.value)}}
              ></ha-control-slider>
            </div>
          `})}
      </div>
    `:A}_options(){let C=this._effect?.options??[],H=this._segment;return!C.length||!H?A:o`
      <ha-control-button-group class="options">
        ${C.map(({key:e,label:r})=>{let t=!!H[e];return o`<ha-control-button
            class=${$({active:t})}
            aria-pressed=${t}
            @click=${()=>this._setSegment({[e]:!t})}
          >
            <span class="label"
              >${r??this._t(`wled.option.${e}`)}</span
            >
          </ha-control-button>`})}
      </ha-control-button-group>
    `}_deviceNote(){let C=this._deviceError;return C?o`<p class="note">
      ${this._t(C==="mixed_content"?"wled.mixed_content":"wled.unreachable",{host:this._host??""})}
    </p>`:A}};S=N(c6),W3=new WeakMap,z3=new WeakMap,U3=new WeakMap,G3=new WeakMap,Q3=new WeakMap,K3=new WeakMap,q3=new WeakMap,Y3=new WeakMap,X3=new WeakMap,J3=new WeakMap,j3=new WeakMap,C0=new WeakMap,H0=new WeakMap,l(S,4,"hass",v6,I,W3),l(S,4,"_config",s6,I,z3),l(S,4,"_ready",m6,I,U3),l(S,4,"_link",l6,I,G3),l(S,4,"_effects",p6,I,Q3),l(S,4,"_catalog",d6,I,K3),l(S,4,"_segment",n6,I,q3),l(S,4,"_deviceError",A6,I,Y3),l(S,4,"_mode",a6,I,X3),l(S,4,"_slot",i6,I,J3),l(S,4,"_preview",o6,I,j3),l(S,4,"_moving",M6,I,C0),l(S,4,"_pickerOpen",t6,I,H0),D(S,I),s(I,"styles",[y1,Q2,y`
      :host {
        display: flex;
        flex-direction: column;
        min-height: var(--popup-min-height, auto);
      }
      ha-card {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      ha-card.plain {
        padding-bottom: var(--ha-space-4);
      }
      ha-card.card {
        padding: var(--ha-space-6) var(--ha-space-4);
      }
      p.state {
        text-align: center;
        margin: 0 0 var(--ha-space-5);
        font-size: var(--ha-font-size-3xl, 28px);
        line-height: var(--ha-line-height-condensed, 1.2);
      }
      /* more-info-control-style.ts */
      .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
      }
      .controls > *:not(:last-child) {
        margin-bottom: var(--ha-space-6);
      }
      /* more-info-light.ts */
      .wheel {
        width: 28px;
        height: 28px;
        flex: none;
        border-radius: var(--ha-border-radius-circle);
        box-sizing: border-box;
      }
      .wheel.color {
        background-image: url("/static/images/color_wheel.png");
        background-size: cover;
      }
      .wheel.color-temp {
        background: linear-gradient(
          0,
          rgb(166, 209, 255) 0%,
          white 50%,
          rgb(255, 160, 0) 100%
        );
      }
      .wheel.swatch {
        border: 1px solid var(--divider-color);
      }
      .wheel.off,
      .wheel.empty {
        border: 2px dashed var(--secondary-text-color);
      }
      *[disabled] .wheel {
        filter: grayscale(1) opacity(0.5);
      }
      /* light-color-rgb-picker.ts */
      .color-container {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 320px;
      }
      ha-hs-color-picker {
        height: 45vh;
        max-height: 320px;
        min-height: 200px;
        aspect-ratio: 1;
      }
      .slot-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--ha-space-2);
        width: 100%;
        max-width: 320px;
      }
      .slot-title {
        color: var(--secondary-text-color);
      }
      .slots {
        flex: 1;
        --control-button-group-thickness: 40px;
      }
      .dot {
        position: relative;
        width: 14px;
        height: 14px;
        flex: none;
        border-radius: var(--ha-border-radius-circle);
        border: 1px solid var(--divider-color);
        margin-inline-end: var(--ha-space-2);
      }
      ha-control-button .label {
        position: relative;
      }
      ha-control-button.active {
        --control-button-background-color: var(--primary-color);
        --control-button-background-opacity: 0.2;
        --control-button-icon-color: var(--primary-color);
      }
      /* Palette list: WLED previews in the size of the main control. */
      .palettes {
        display: flex;
        flex-direction: column;
        gap: var(--ha-space-1);
        width: 100%;
        max-width: 360px;
        height: 45vh;
        max-height: 320px;
        min-height: 200px;
        overflow-y: auto;
        padding: var(--ha-space-1);
        box-sizing: border-box;
        scrollbar-width: thin;
      }
      .palette-row {
        display: flex;
        align-items: center;
        gap: var(--ha-space-3);
        min-height: 44px;
        padding: var(--ha-space-1) var(--ha-space-2);
        border: none;
        border-radius: var(--ha-border-radius-lg);
        background: none;
        color: var(--primary-text-color);
        font: inherit;
        font-size: var(--ha-font-size-m);
        text-align: start;
        cursor: pointer;
      }
      .palette-row:hover,
      .palette-row:focus-visible {
        background: var(
          --ha-color-fill-neutral-quiet-hover,
          rgba(139, 145, 151, 0.12)
        );
        outline: none;
      }
      .palette-row.selected {
        background: var(
          --ha-color-fill-primary-quiet-resting,
          rgba(var(--rgb-primary-color), 0.12)
        );
        font-weight: var(--ha-font-weight-medium);
      }
      .palette-row .preview {
        width: 96px;
        height: 24px;
        flex: none;
        border-radius: var(--ha-border-radius-md);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
      }
      .palette-row .preview.empty {
        background: var(--disabled-color);
        opacity: 0.3;
      }
      .palette-row .name {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* Effects */
      .effects {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--ha-space-4);
      }
      .effects > * {
        width: 100%;
        max-width: 400px;
      }
      .effects {
        margin-top: var(--ha-space-6);
      }
      .chip.effect {
        width: 100%;
      }
      .chip.effect .content {
        flex: 1;
      }
      .chip.effect .tags {
        display: flex;
        gap: var(--ha-space-1);
        color: var(--secondary-text-color);
        --mdc-icon-size: 18px;
      }
      more-info-wled-effect-picker {
        max-height: 420px;
        overflow-y: auto;
      }
      .sliders {
        display: flex;
        flex-direction: column;
        gap: var(--ha-space-3);
      }
      .slider-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--ha-space-1);
        font-size: var(--ha-font-size-s);
        color: var(--secondary-text-color);
      }
      .slider-value {
        font-variant-numeric: tabular-nums;
      }
      ha-control-slider {
        --control-slider-thickness: 40px;
        --control-slider-border-radius: var(--ha-border-radius-lg);
      }
      .options {
        --control-button-group-thickness: 40px;
      }
      .note {
        margin: var(--ha-space-4) var(--ha-space-4) 0;
        font-size: var(--ha-font-size-s);
        color: var(--secondary-text-color);
        text-align: center;
      }
    `]);customElements.get(t2)||customElements.define(t2,I);var x6,u6,Z6,h6,S6,j,V0,L0,e0,r0,A1=class extends(S6=E,h6=[O({attribute:!1})],Z6=[O({attribute:!1})],u6=[x()],x6=[x()],S6){constructor(){super(...arguments);m(this,V0,a(j,8,this)),a(j,11,this);m(this,L0,a(j,12,this)),a(j,15,this);m(this,e0,a(j,16,this)),a(j,19,this);m(this,r0,a(j,20,this,"hidden")),a(j,23,this);s(this,"connectedWhileHidden",!0);s(this,"_preview",!1);s(this,"_previewSection");s(this,"_previewSectionKey")}static async getConfigElement(){return document.createElement(I1)}static getStubConfig(C,H){let e=H.find(i=>i.startsWith("light."))??H[0],r=e?C.states[e]:void 0,t=r?c7(H1(r)):"",M=Math.random().toString(36).slice(2,6);return{type:`custom:${d5}`,popup_id:t?`${t}_${M}`:`popup_${M}`,cards:[]}}get preview(){return this._preview}set preview(C){this._preview=!!C,this._syncSurface()}get popupConfig(){return this._config}setConfig(C){this._config=w2(z1(C)),this._syncSurface()}getCardSize(){return this._surface==="hidden"?0:this._surface==="preview"?6:1}getGridOptions(){return this._computeSurface()==="preview"?{columns:"full",rows:"auto"}:{columns:6,rows:1,min_columns:3,max_rows:1}}openPopup(C){let H=this._config;H&&B7().then(e=>{if(e.includes("ha-adaptive-dialog")||e.includes("hui-section")){g(this,"hass-notification",{message:h(this.hass,"card.missing_elements")});return}g(this,"show-dialog",{dialogTag:o1,dialogImport:()=>Promise.resolve(),dialogParams:{config:H,view:C?.view},addHistory:!0})})}connectedCallback(){super.connectedCallback(),l3().register(this),this._syncSurface()}disconnectedCallback(){super.disconnectedCallback(),l3().unregister(this)}_computeSurface(){return this._preview?this.closest("hui-card-edit-mode, hui-card-options")?"placeholder":"preview":"hidden"}_syncSurface(){let C=this._computeSurface();C!==this._surface&&(this._surface=C);let H=C==="hidden";this.hasAttribute("hidden")!==H&&(this.toggleAttribute("hidden",H),this.isConnected&&g(this,"card-visibility-changed",{value:!H}))}willUpdate(C){C.has("hass")&&this._previewSection&&(this._previewSection.hass=this.hass)}render(){return!this._config||!this.hass||this._surface==="hidden"?A:F7(this.hass.config.version)?this._surface==="placeholder"?this._renderPlaceholder(this._config):this._renderPreview(this._config):o`<ha-alert alert-type="warning">
        ${h(this.hass,"card.unsupported_version",{version:G1.join(".")})}
      </ha-alert>`}_renderPlaceholder(C){let H=this.hass,e=C.entity?H.states[C.entity]:void 0,r=C.name??(e?H1(e):C.popup_id),t=C.cards.length,M=t===1?h(H,"card.cards_count_one"):h(H,"card.cards_count",{count:t});return o`
      <ha-card class="placeholder">
        <ha-tile-container>
          <ha-tile-icon
            slot="icon"
            .icon=${C.icon}
            .iconPath=${C.icon?void 0:p2}
          >
            ${C.icon||!e?A:o`<ha-state-icon
                    slot="icon"
                    .stateObj=${e}
                    .hass=${H}
                  ></ha-state-icon>`}
          </ha-tile-icon>
          <ha-tile-info slot="info">
            <span slot="primary">${r}</span>
            <span
              slot="secondary"
              class="secondary"
              title=${h(H,"card.hidden_hint",{id:C.popup_id})}
            >
              <ha-svg-icon .path=${h0}></ha-svg-icon>
              #${C.popup_id} · ${M}
            </span>
          </ha-tile-info>
        </ha-tile-container>
      </ha-card>
    `}_renderPreview(C){let H=this.hass,e={type:"grid",column_span:C.column_span,cards:C.cards},r=JSON.stringify(e);this._previewSection??=document.createElement("hui-section"),this._previewSection.hass=H,this._previewSectionKey!==r&&(this._previewSectionKey=r,this._previewSection.config=e);let t=E2(H,C,{entityId:C.entity,view:"root",children:[]});return o`
      <div class="surface" inert>
        <ha-dialog-header>
          <ha-icon-button
            slot="navigationIcon"
            .label=${H.localize("ui.common.close")}
            .path=${a2}
          ></ha-icon-button>
          ${B2(H,t,"title")}
        </ha-dialog-header>
        <div
          class="body"
          style=${F({"--column-span":String(C.column_span)})}
        >
          ${this._previewSection}
        </div>
      </div>
    `}};j=N(S6),V0=new WeakMap,L0=new WeakMap,e0=new WeakMap,r0=new WeakMap,l(j,4,"hass",h6,A1,V0),l(j,4,"layout",Z6,A1,L0),l(j,4,"_config",u6,A1,e0),l(j,4,"_surface",x6,A1,r0),D(j,A1),s(A1,"styles",[T2,P2,y`
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
      ha-card.placeholder {
        height: 100%;
        border-style: dashed;
        --tile-color: var(--primary-color);
        position: relative;
      }
      ha-tile-icon {
        --tile-icon-color: var(--tile-color);
      }
      .secondary {
        display: inline-flex;
        align-items: center;
        gap: var(--ha-space-1);
      }
      .secondary ha-svg-icon {
        --mdc-icon-size: 14px;
        flex: none;
      }
      .surface {
        display: flex;
        flex-direction: column;
        background: var(
          --ha-dialog-surface-background,
          var(--card-background-color, var(--ha-color-surface-default))
        );
        border-radius: var(
          --ha-dialog-border-radius,
          var(--ha-border-radius-3xl)
        );
        box-shadow: var(--dialog-box-shadow, var(--wa-shadow-l));
        overflow: hidden;
      }
    `]);customElements.get(p5)||(customElements.define(p5,A1),window.customCards=window.customCards??[],window.customCards.push({type:d5,name:h(void 0,"card.name"),description:h(void 0,"card.description"),preview:!1,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),window.customCards.push({type:H2,name:h(void 0,"state_card.name"),description:h(void 0,"state_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"},{type:e2,name:h(void 0,"controls_card.name"),description:h(void 0,"controls_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"},{type:t2,name:h(void 0,"wled_card.name"),description:h(void 0,"wled_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),console.info("%c MORE-INFO-POPUP-CARD %c 0.4 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;"));export{A1 as MoreInfoPopupCard};
//# sourceMappingURL=more-info-popup-card.js.map
