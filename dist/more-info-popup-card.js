var j0=Object.create;var a2=Object.defineProperty;var Y0=Object.getOwnPropertyDescriptor;var Z5=(L,H)=>(H=Symbol[L])?H:Symbol.for("Symbol."+L),i1=L=>{throw TypeError(L)};var u5=(L,H,C)=>H in L?a2(L,H,{enumerable:!0,configurable:!0,writable:!0,value:C}):L[H]=C;var v5=(L,H)=>a2(L,"name",{value:H,configurable:!0});var $=L=>[,,,j0(L?.[Z5("metadata")]??null)],c5=["class","method","getter","setter","accessor","field","value","get","set"],p1=L=>L!==void 0&&typeof L!="function"?i1("Function expected"):L,X0=(L,H,C,V,M)=>({kind:c5[L],name:H,metadata:V,addInitializer:e=>C._?i1("Already initialized"):M.push(p1(e||null))}),E=(L,H)=>u5(H,Z5("metadata"),L[3]),a=(L,H,C,V)=>{for(var M=0,e=L[H>>1],r=e&&e.length;M<r;M++)H&1?e[M].call(C):V=e[M].call(C,V);return V},v=(L,H,C,V,M,e)=>{var r,t,i,m,s,A=H&7,c=!!(H&8),p=!!(H&16),u=A>3?L.length+1:A?c?1:2:0,w=c5[A+5],e1=A>3&&(L[u-1]=[]),r1=L[u]||(L[u]=[]),P=A&&(!p&&!c&&(M=M.prototype),A<5&&(A>3||!p)&&Y0(A<4?M:{get[C](){return x5(this,e)},set[C](T){return s5(this,e,T)}},C));A?p&&A<4&&v5(e,(A>2?"set ":A>1?"get ":"")+C):v5(M,C);for(var t1=V.length-1;t1>=0;t1--)m=X0(A,C,i={},L[3],r1),A&&(m.static=c,m.private=p,s=m.access={has:p?T=>J0(M,T):T=>C in T},A^3&&(s.get=p?T=>(A^1?x5:C7)(T,M,A^4?e:P.get):T=>T[C]),A>2&&(s.set=p?(T,o2)=>s5(T,M,o2,A^4?e:P.set):(T,o2)=>T[C]=o2)),t=(0,V[t1])(A?A<4?p?e:P[w]:A>4?void 0:{get:P.get,set:P.set}:M,m),i._=1,A^4||t===void 0?p1(t)&&(A>4?e1.unshift(t):A?p?e=t:P[w]=t:M=t):typeof t!="object"||t===null?i1("Object expected"):(p1(r=t.get)&&(P.get=r),p1(r=t.set)&&(P.set=r),p1(r=t.init)&&e1.unshift(r));return A||E(L,M),P&&a2(M,C,P),p?A^4?e:P:M},n=(L,H,C)=>u5(L,typeof H!="symbol"?H+"":H,C),A2=(L,H,C)=>H.has(L)||i1("Cannot "+C),J0=(L,H)=>Object(H)!==H?i1('Cannot use the "in" operator on this value'):L.has(H),x5=(L,H,C)=>(A2(L,H,"read from private field"),C?C.call(L):H.get(L)),x=(L,H,C)=>H.has(L)?i1("Cannot add the same private member more than once"):H instanceof WeakSet?H.add(L):H.set(L,C),s5=(L,H,C,V)=>(A2(L,H,"write to private field"),V?V.call(L,C):H.set(L,C),C),C7=(L,H,C)=>(A2(L,H,"access private method"),C);var S5="M17 18H21V16H17V14L14 17L17 20V18M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var d2="M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var B1="M6 14H9L5 18L1 14H4C4 11.3 5.7 6.6 11 6.1V8.1C7.6 8.6 6 11.9 6 14M20 14C20 11.3 18.3 6.6 13 6.1V8.1C16.4 8.7 18 11.9 18 14H15L19 18L23 14H20Z",h5="M13 8.1V6.1C18.3 6.6 20 11.4 20 14H23L20.1 16.9L17.2 14H18C18 11.9 16.4 8.6 13 8.1M7.8 7.1L2.4 1.7L1.1 3L6.3 8.2C4.7 10 4 12.4 4 14H1L5 18L9 14H6C6 12.7 6.6 11 7.9 9.7L20.9 22.7L22.2 21.4L9.3 8.7L7.8 7.1M11 6.1L9.5 6.4L11 7.8V6.1Z";var f5="M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z";var g5="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var R1="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var F1="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z";var E1="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z";var O5="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",b5="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z",y5="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z";var k5="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74";var w5="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var _5="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z";var D1="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z";var P5="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";var T5="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";var n2="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";var B5="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";var R5="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z";var F5="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z";var E5="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z";var D5="M19,13H5V11H19V13Z";var $5="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z";var N5="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z";var I5="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var W5="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var p2="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z";var U5="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var G5="M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z";var z5="M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";var Q5="M18,11H14.82C14.4,9.84 13.3,9 12,9C10.7,9 9.6,9.84 9.18,11H6C5.67,11 4,10.9 4,9V8C4,6.17 5.54,6 6,6H16.18C16.6,7.16 17.7,8 19,8A3,3 0 0,0 22,5A3,3 0 0,0 19,2C17.7,2 16.6,2.84 16.18,4H6C4.39,4 2,5.06 2,8V9C2,11.94 4.39,13 6,13H9.18C9.6,14.16 10.7,15 12,15C13.3,15 14.4,14.16 14.82,13H18C18.33,13 20,13.1 20,15V16C20,17.83 18.46,18 18,18H7.82C7.4,16.84 6.3,16 5,16A3,3 0 0,0 2,19A3,3 0 0,0 5,22C6.3,22 7.4,21.16 7.82,20H18C19.61,20 22,18.93 22,16V15C22,12.07 19.61,11 18,11M19,4A1,1 0 0,1 20,5A1,1 0 0,1 19,6A1,1 0 0,1 18,5A1,1 0 0,1 19,4M5,20A1,1 0 0,1 4,19A1,1 0 0,1 5,18A1,1 0 0,1 6,19A1,1 0 0,1 5,20Z";var o1="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";var K5="M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z";var $1=globalThis,N1=$1.ShadowRoot&&($1.ShadyCSS===void 0||$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,m2=Symbol(),q5=new WeakMap,m1=class{constructor(H,C,V){if(this._$cssResult$=!0,V!==m2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=H,this.t=C}get styleSheet(){let H=this.o,C=this.t;if(N1&&H===void 0){let V=C!==void 0&&C.length===1;V&&(H=q5.get(C)),H===void 0&&((this.o=H=new CSSStyleSheet).replaceSync(this.cssText),V&&q5.set(C,H))}return H}toString(){return this.cssText}},j5=L=>new m1(typeof L=="string"?L:L+"",void 0,m2),g=(L,...H)=>{let C=L.length===1?L[0]:H.reduce((V,M,e)=>V+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(M)+L[e+1],L[0]);return new m1(C,L,m2)},Y5=(L,H)=>{if(N1)L.adoptedStyleSheets=H.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of H){let V=document.createElement("style"),M=$1.litNonce;M!==void 0&&V.setAttribute("nonce",M),V.textContent=C.cssText,L.appendChild(V)}},l2=N1?L=>L:L=>L instanceof CSSStyleSheet?(H=>{let C="";for(let V of H.cssRules)C+=V.cssText;return j5(C)})(L):L;var{is:H7,defineProperty:V7,getOwnPropertyDescriptor:L7,getOwnPropertyNames:M7,getOwnPropertySymbols:e7,getPrototypeOf:r7}=Object,I1=globalThis,X5=I1.trustedTypes,t7=X5?X5.emptyScript:"",i7=I1.reactiveElementPolyfillSupport,l1=(L,H)=>L,v1={toAttribute(L,H){switch(H){case Boolean:L=L?t7:null;break;case Object:case Array:L=L==null?L:JSON.stringify(L)}return L},fromAttribute(L,H){let C=L;switch(H){case Boolean:C=L!==null;break;case Number:C=L===null?null:Number(L);break;case Object:case Array:try{C=JSON.parse(L)}catch{C=null}}return C}},W1=(L,H)=>!H7(L,H),J5={attribute:!0,type:String,converter:v1,reflect:!1,useDefault:!1,hasChanged:W1};Symbol.metadata??=Symbol("metadata"),I1.litPropertyMetadata??=new WeakMap;var W=class extends HTMLElement{static addInitializer(H){this._$Ei(),(this.l??=[]).push(H)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(H,C=J5){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(H)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(H,C),!C.noAccessor){let V=Symbol(),M=this.getPropertyDescriptor(H,V,C);M!==void 0&&V7(this.prototype,H,M)}}static getPropertyDescriptor(H,C,V){let{get:M,set:e}=L7(this.prototype,H)??{get(){return this[C]},set(r){this[C]=r}};return{get:M,set(r){let t=M?.call(this);e?.call(this,r),this.requestUpdate(H,t,V)},configurable:!0,enumerable:!0}}static getPropertyOptions(H){return this.elementProperties.get(H)??J5}static _$Ei(){if(this.hasOwnProperty(l1("elementProperties")))return;let H=r7(this);H.finalize(),H.l!==void 0&&(this.l=[...H.l]),this.elementProperties=new Map(H.elementProperties)}static finalize(){if(this.hasOwnProperty(l1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(l1("properties"))){let C=this.properties,V=[...M7(C),...e7(C)];for(let M of V)this.createProperty(M,C[M])}let H=this[Symbol.metadata];if(H!==null){let C=litPropertyMetadata.get(H);if(C!==void 0)for(let[V,M]of C)this.elementProperties.set(V,M)}this._$Eh=new Map;for(let[C,V]of this.elementProperties){let M=this._$Eu(C,V);M!==void 0&&this._$Eh.set(M,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(H){let C=[];if(Array.isArray(H)){let V=new Set(H.flat(1/0).reverse());for(let M of V)C.unshift(l2(M))}else H!==void 0&&C.push(l2(H));return C}static _$Eu(H,C){let V=C.attribute;return V===!1?void 0:typeof V=="string"?V:typeof H=="string"?H.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(H=>this.enableUpdating=H),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(H=>H(this))}addController(H){(this._$EO??=new Set).add(H),this.renderRoot!==void 0&&this.isConnected&&H.hostConnected?.()}removeController(H){this._$EO?.delete(H)}_$E_(){let H=new Map,C=this.constructor.elementProperties;for(let V of C.keys())this.hasOwnProperty(V)&&(H.set(V,this[V]),delete this[V]);H.size>0&&(this._$Ep=H)}createRenderRoot(){let H=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Y5(H,this.constructor.elementStyles),H}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(H=>H.hostConnected?.())}enableUpdating(H){}disconnectedCallback(){this._$EO?.forEach(H=>H.hostDisconnected?.())}attributeChangedCallback(H,C,V){this._$AK(H,V)}_$ET(H,C){let V=this.constructor.elementProperties.get(H),M=this.constructor._$Eu(H,V);if(M!==void 0&&V.reflect===!0){let e=(V.converter?.toAttribute!==void 0?V.converter:v1).toAttribute(C,V.type);this._$Em=H,e==null?this.removeAttribute(M):this.setAttribute(M,e),this._$Em=null}}_$AK(H,C){let V=this.constructor,M=V._$Eh.get(H);if(M!==void 0&&this._$Em!==M){let e=V.getPropertyOptions(M),r=typeof e.converter=="function"?{fromAttribute:e.converter}:e.converter?.fromAttribute!==void 0?e.converter:v1;this._$Em=M;let t=r.fromAttribute(C,e.type);this[M]=t??this._$Ej?.get(M)??t,this._$Em=null}}requestUpdate(H,C,V,M=!1,e){if(H!==void 0){let r=this.constructor;if(M===!1&&(e=this[H]),V??=r.getPropertyOptions(H),!((V.hasChanged??W1)(e,C)||V.useDefault&&V.reflect&&e===this._$Ej?.get(H)&&!this.hasAttribute(r._$Eu(H,V))))return;this.C(H,C,V)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(H,C,{useDefault:V,reflect:M,wrapped:e},r){V&&!(this._$Ej??=new Map).has(H)&&(this._$Ej.set(H,r??C??this[H]),e!==!0||r!==void 0)||(this._$AL.has(H)||(this.hasUpdated||V||(C=void 0),this._$AL.set(H,C)),M===!0&&this._$Em!==H&&(this._$Eq??=new Set).add(H))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let H=this.scheduleUpdate();return H!=null&&await H,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[M,e]of this._$Ep)this[M]=e;this._$Ep=void 0}let V=this.constructor.elementProperties;if(V.size>0)for(let[M,e]of V){let{wrapped:r}=e,t=this[M];r!==!0||this._$AL.has(M)||t===void 0||this.C(M,void 0,e,t)}}let H=!1,C=this._$AL;try{H=this.shouldUpdate(C),H?(this.willUpdate(C),this._$EO?.forEach(V=>V.hostUpdate?.()),this.update(C)):this._$EM()}catch(V){throw H=!1,this._$EM(),V}H&&this._$AE(C)}willUpdate(H){}_$AE(H){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(H)),this.updated(H)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(H){return!0}update(H){this._$Eq&&=this._$Eq.forEach(C=>this._$ET(C,this[C])),this._$EM()}updated(H){}firstUpdated(H){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[l1("elementProperties")]=new Map,W[l1("finalized")]=new Map,i7?.({ReactiveElement:W}),(I1.reactiveElementVersions??=[]).push("2.1.2");var x2=globalThis,C3=L=>L,U1=x2.trustedTypes,H3=U1?U1.createPolicy("lit-html",{createHTML:L=>L}):void 0,s2="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,Z2="?"+U,o7=`<${Z2}>`,C1=document,s1=()=>C1.createComment(""),Z1=L=>L===null||typeof L!="object"&&typeof L!="function",u2=Array.isArray,t3=L=>u2(L)||typeof L?.[Symbol.iterator]=="function",v2=`[ 	
\f\r]`,x1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V3=/-->/g,L3=/>/g,X=RegExp(`>|${v2}(?:([^\\s"'>=/]+)(${v2}*=${v2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),M3=/'/g,e3=/"/g,i3=/^(?:script|style|textarea|title)$/i,c2=L=>(H,...C)=>({_$litType$:L,strings:H,values:C}),o=c2(1),K7=c2(2),q7=c2(3),D=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),r3=new WeakMap,J=C1.createTreeWalker(C1,129);function o3(L,H){if(!u2(L)||!L.hasOwnProperty("raw"))throw Error("invalid template strings array");return H3!==void 0?H3.createHTML(H):H}var a3=(L,H)=>{let C=L.length-1,V=[],M,e=H===2?"<svg>":H===3?"<math>":"",r=x1;for(let t=0;t<C;t++){let i=L[t],m,s,A=-1,c=0;for(;c<i.length&&(r.lastIndex=c,s=r.exec(i),s!==null);)c=r.lastIndex,r===x1?s[1]==="!--"?r=V3:s[1]!==void 0?r=L3:s[2]!==void 0?(i3.test(s[2])&&(M=RegExp("</"+s[2],"g")),r=X):s[3]!==void 0&&(r=X):r===X?s[0]===">"?(r=M??x1,A=-1):s[1]===void 0?A=-2:(A=r.lastIndex-s[2].length,m=s[1],r=s[3]===void 0?X:s[3]==='"'?e3:M3):r===e3||r===M3?r=X:r===V3||r===L3?r=x1:(r=X,M=void 0);let p=r===X&&L[t+1].startsWith("/>")?" ":"";e+=r===x1?i+o7:A>=0?(V.push(m),i.slice(0,A)+s2+i.slice(A)+U+p):i+U+(A===-2?t:p)}return[o3(L,e+(L[C]||"<?>")+(H===2?"</svg>":H===3?"</math>":"")),V]},u1=class L{constructor({strings:H,_$litType$:C},V){let M;this.parts=[];let e=0,r=0,t=H.length-1,i=this.parts,[m,s]=a3(H,C);if(this.el=L.createElement(m,V),J.currentNode=this.el.content,C===2||C===3){let A=this.el.content.firstChild;A.replaceWith(...A.childNodes)}for(;(M=J.nextNode())!==null&&i.length<t;){if(M.nodeType===1){if(M.hasAttributes())for(let A of M.getAttributeNames())if(A.endsWith(s2)){let c=s[r++],p=M.getAttribute(A).split(U),u=/([.?@])?(.*)/.exec(c);i.push({type:1,index:e,name:u[2],strings:p,ctor:u[1]==="."?z1:u[1]==="?"?Q1:u[1]==="@"?K1:V1}),M.removeAttribute(A)}else A.startsWith(U)&&(i.push({type:6,index:e}),M.removeAttribute(A));if(i3.test(M.tagName)){let A=M.textContent.split(U),c=A.length-1;if(c>0){M.textContent=U1?U1.emptyScript:"";for(let p=0;p<c;p++)M.append(A[p],s1()),J.nextNode(),i.push({type:2,index:++e});M.append(A[c],s1())}}}else if(M.nodeType===8)if(M.data===Z2)i.push({type:2,index:e});else{let A=-1;for(;(A=M.data.indexOf(U,A+1))!==-1;)i.push({type:7,index:e}),A+=U.length-1}e++}}static createElement(H,C){let V=C1.createElement("template");return V.innerHTML=H,V}};function H1(L,H,C=L,V){if(H===D)return H;let M=V!==void 0?C._$Co?.[V]:C._$Cl,e=Z1(H)?void 0:H._$litDirective$;return M?.constructor!==e&&(M?._$AO?.(!1),e===void 0?M=void 0:(M=new e(L),M._$AT(L,C,V)),V!==void 0?(C._$Co??=[])[V]=M:C._$Cl=M),M!==void 0&&(H=H1(L,M._$AS(L,H.values),M,V)),H}var G1=class{constructor(H,C){this._$AV=[],this._$AN=void 0,this._$AD=H,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(H){let{el:{content:C},parts:V}=this._$AD,M=(H?.creationScope??C1).importNode(C,!0);J.currentNode=M;let e=J.nextNode(),r=0,t=0,i=V[0];for(;i!==void 0;){if(r===i.index){let m;i.type===2?m=new a1(e,e.nextSibling,this,H):i.type===1?m=new i.ctor(e,i.name,i.strings,this,H):i.type===6&&(m=new q1(e,this,H)),this._$AV.push(m),i=V[++t]}r!==i?.index&&(e=J.nextNode(),r++)}return J.currentNode=C1,M}p(H){let C=0;for(let V of this._$AV)V!==void 0&&(V.strings!==void 0?(V._$AI(H,V,C),C+=V.strings.length-2):V._$AI(H[C])),C++}},a1=class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(H,C,V,M){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=H,this._$AB=C,this._$AM=V,this.options=M,this._$Cv=M?.isConnected??!0}get parentNode(){let H=this._$AA.parentNode,C=this._$AM;return C!==void 0&&H?.nodeType===11&&(H=C.parentNode),H}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(H,C=this){H=H1(this,H,C),Z1(H)?H===d||H==null||H===""?(this._$AH!==d&&this._$AR(),this._$AH=d):H!==this._$AH&&H!==D&&this._(H):H._$litType$!==void 0?this.$(H):H.nodeType!==void 0?this.T(H):t3(H)?this.k(H):this._(H)}O(H){return this._$AA.parentNode.insertBefore(H,this._$AB)}T(H){this._$AH!==H&&(this._$AR(),this._$AH=this.O(H))}_(H){this._$AH!==d&&Z1(this._$AH)?this._$AA.nextSibling.data=H:this.T(C1.createTextNode(H)),this._$AH=H}$(H){let{values:C,_$litType$:V}=H,M=typeof V=="number"?this._$AC(H):(V.el===void 0&&(V.el=u1.createElement(o3(V.h,V.h[0]),this.options)),V);if(this._$AH?._$AD===M)this._$AH.p(C);else{let e=new G1(M,this),r=e.u(this.options);e.p(C),this.T(r),this._$AH=e}}_$AC(H){let C=r3.get(H.strings);return C===void 0&&r3.set(H.strings,C=new u1(H)),C}k(H){u2(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,V,M=0;for(let e of H)M===C.length?C.push(V=new L(this.O(s1()),this.O(s1()),this,this.options)):V=C[M],V._$AI(e),M++;M<C.length&&(this._$AR(V&&V._$AB.nextSibling,M),C.length=M)}_$AR(H=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);H!==this._$AB;){let V=C3(H).nextSibling;C3(H).remove(),H=V}}setConnected(H){this._$AM===void 0&&(this._$Cv=H,this._$AP?.(H))}},V1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(H,C,V,M,e){this.type=1,this._$AH=d,this._$AN=void 0,this.element=H,this.name=C,this._$AM=M,this.options=e,V.length>2||V[0]!==""||V[1]!==""?(this._$AH=Array(V.length-1).fill(new String),this.strings=V):this._$AH=d}_$AI(H,C=this,V,M){let e=this.strings,r=!1;if(e===void 0)H=H1(this,H,C,0),r=!Z1(H)||H!==this._$AH&&H!==D,r&&(this._$AH=H);else{let t=H,i,m;for(H=e[0],i=0;i<e.length-1;i++)m=H1(this,t[V+i],C,i),m===D&&(m=this._$AH[i]),r||=!Z1(m)||m!==this._$AH[i],m===d?H=d:H!==d&&(H+=(m??"")+e[i+1]),this._$AH[i]=m}r&&!M&&this.j(H)}j(H){H===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,H??"")}},z1=class extends V1{constructor(){super(...arguments),this.type=3}j(H){this.element[this.name]=H===d?void 0:H}},Q1=class extends V1{constructor(){super(...arguments),this.type=4}j(H){this.element.toggleAttribute(this.name,!!H&&H!==d)}},K1=class extends V1{constructor(H,C,V,M,e){super(H,C,V,M,e),this.type=5}_$AI(H,C=this){if((H=H1(this,H,C,0)??d)===D)return;let V=this._$AH,M=H===d&&V!==d||H.capture!==V.capture||H.once!==V.once||H.passive!==V.passive,e=H!==d&&(V===d||M);M&&this.element.removeEventListener(this.name,this,V),e&&this.element.addEventListener(this.name,this,H),this._$AH=H}handleEvent(H){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,H):this._$AH.handleEvent(H)}},q1=class{constructor(H,C,V){this.element=H,this.type=6,this._$AN=void 0,this._$AM=C,this.options=V}get _$AU(){return this._$AM._$AU}_$AI(H){H1(this,H)}},A3={M:s2,P:U,A:Z2,C:1,L:a3,R:G1,D:t3,V:H1,I:a1,H:V1,N:Q1,U:K1,B:z1,F:q1},a7=x2.litHtmlPolyfillSupport;a7?.(u1,a1),(x2.litHtmlVersions??=[]).push("3.3.3");var d3=(L,H,C)=>{let V=C?.renderBefore??H,M=V._$litPart$;if(M===void 0){let e=C?.renderBefore??null;V._$litPart$=M=new a1(H.insertBefore(s1(),e),e,void 0,C??{})}return M._$AI(L),M};var S2=globalThis,O=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let H=super.createRenderRoot();return this.renderOptions.renderBefore??=H.firstChild,H}update(H){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(H),this._$Do=d3(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};O._$litElement$=!0,O.finalized=!0,S2.litElementHydrateSupport?.({LitElement:O});var A7=S2.litElementPolyfillSupport;A7?.({LitElement:O});(S2.litElementVersions??=[]).push("4.2.2");var d7={attribute:!0,type:String,converter:v1,reflect:!1,hasChanged:W1},n7=(L=d7,H,C)=>{let{kind:V,metadata:M}=C,e=globalThis.litPropertyMetadata.get(M);if(e===void 0&&globalThis.litPropertyMetadata.set(M,e=new Map),V==="setter"&&((L=Object.create(L)).wrapped=!0),e.set(C.name,L),V==="accessor"){let{name:r}=C;return{set(t){let i=H.get.call(this);H.set.call(this,t),this.requestUpdate(r,i,L,!0,t)},init(t){return t!==void 0&&this.C(r,void 0,L,t),t}}}if(V==="setter"){let{name:r}=C;return function(t){let i=this[r];H.call(this,t),this.requestUpdate(r,i,L,!0,t)}}throw Error("Unsupported decorator location: "+V)};function k(L){return(H,C)=>typeof C=="object"?n7(L,H,C):((V,M,e)=>{let r=M.hasOwnProperty(e);return M.constructor.createProperty(e,V),r?Object.getOwnPropertyDescriptor(M,e):void 0})(L,H,C)}function S(L){return k({...L,state:!0,attribute:!1})}var Y1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},A1=L=>(...H)=>({_$litDirective$:L,values:H}),j=class{constructor(H){}get _$AU(){return this._$AM._$AU}_$AT(H,C,V){this._$Ct=H,this._$AM=C,this._$Ci=V}_$AS(H,C){return this.update(H,C)}update(H,C){return this.render(...C)}};var n3="important",p7=" !"+n3,L1=A1(class extends j{constructor(L){if(super(L),L.type!==Y1.ATTRIBUTE||L.name!=="style"||L.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(L){return Object.keys(L).reduce((H,C)=>{let V=L[C];return V==null?H:H+`${C=C.includes("-")?C:C.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${V};`},"")}update(L,[H]){let{style:C}=L.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(H)),this.render(H);for(let V of this.ft)H[V]==null&&(this.ft.delete(V),V.includes("-")?C.removeProperty(V):C[V]=null);for(let V in H){let M=H[V];if(M!=null){this.ft.add(V);let e=typeof M=="string"&&M.endsWith(p7);V.includes("-")||e?C.setProperty(V,e?M.slice(0,-11):M,e?n3:""):C[V]=M}}return D}});var f2="more-info-popup-card",g2="more-info-popup-card",G="more-info-popup-dialog",c1="more-info-popup-card-editor",S1={breadcrumb:"auto",mode:"auto",width:"medium",height:"auto",column_span:1,show_header_actions:!0,replace_more_info:!1,nested_more_info:"inline",dismissable:!0,auto_close:0,keep_alive:!1},m7=["auto","dialog","bottom_sheet"],l7=["small","medium","large","full","custom"],v7=["auto","custom"],x7=["inline","dialog"],s7=/^[a-z0-9][a-z0-9_-]*$/,Z7=/^\d+(\.\d+)?(px|%|vw|vh|dvh|svh|lvh|em|rem)$/,p3=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^[_-]+|[_-]+$/g,"").slice(0,48),X1=(L,H,C)=>{if(H!==void 0&&!C.includes(H))throw new Error(`"${L}" must be one of: ${C.join(", ")}`)},h2=(L,H)=>{if(H!==void 0&&H!==""&&!Z7.test(String(H)))throw new Error(`"${L}" must be a CSS length such as 720px or 80vh`)},h1=L=>{if(!L||typeof L!="object")throw new Error("Invalid configuration");let H=L;if(!H.popup_id||typeof H.popup_id!="string")throw new Error('"popup_id" is required');if(!s7.test(H.popup_id))throw new Error('"popup_id" may only contain lowercase letters, digits, "_" and "-"');if(H.entity!==void 0&&(typeof H.entity!="string"||!H.entity.includes(".")))throw new Error('"entity" must be an entity ID');if(H.cards!==void 0&&!Array.isArray(H.cards))throw new Error('"cards" must be a list');if(X1("mode",H.mode,m7),X1("width",H.width,l7),X1("height",H.height,v7),X1("nested_more_info",H.nested_more_info,x7),h2("custom_width",H.custom_width),h2("min_height",H.min_height),h2("max_height",H.max_height),H.column_span!==void 0&&(!Number.isInteger(H.column_span)||H.column_span<1||H.column_span>4))throw new Error('"column_span" must be an integer between 1 and 4');if(H.auto_close!==void 0&&(typeof H.auto_close!="number"||H.auto_close<0))throw new Error('"auto_close" must be a positive number of seconds');return H},J1=L=>({...S1,...L,cards:L.cards??[]}),m3=L=>L.width==="custom"?"medium":L.width==="medium"&&L.column_span>1?"large":L.width,l3=L=>{let H={};return L.width==="custom"&&L.custom_width&&(H["--ha-dialog-width-md"]=L.custom_width,H["--ha-bottom-sheet-max-width"]=L.custom_width),L.height==="custom"&&(L.min_height&&(H["--ha-dialog-min-height"]=L.min_height,H["--ha-bottom-sheet-height"]=L.min_height),L.max_height&&(H["--ha-dialog-max-height"]=L.max_height,H["--ha-bottom-sheet-max-height"]=L.max_height)),H};var h=L=>L.substring(0,L.indexOf(".")),x3=["scene","automation"],s3=["script"],Z3=["camera","configurator"],u7=["counter","input_number","number","proximity","sensor"],c7=["alarm_control_panel","automation","camera","climate","configurator","conversation","counter","cover","date","datetime","fan","group","humidifier","image","input_boolean","input_datetime","lawn_mower","light","lock","media_player","person","remote","script","scene","siren","sun","switch","time","timer","update","vacuum","valve","water_heater","weather"],f1=L=>!!L.user?.is_admin,u3=(L,H)=>L.config.components.includes(H),S7=(L,H)=>u3(L,"history")&&!Z3.includes(h(H)),h7=(L,H)=>{if(!u3(L,"logbook")||!L.states[H])return!1;let V=h(H);return!(Z3.includes(V)||u7.includes(V))},c3=(L,H,C)=>(!C||c7.includes(h(H)))&&(S7(L,H)||h7(L,H)),O2=L=>f1(L)||!!L.auth.external?.config.hasEntityAddTo,b2=(L,H)=>L.entities[H]?.device_id??null,S3=(L,H)=>(H&&L.devices[H]?.entry_type)==="service"?"service":"device",h3=L=>{if(!L)return!1;let H=h(L.entity_id);return x3.includes(H)&&L.attributes.id||s3.includes(H)?!0:H==="person"&&L.attributes.editable!=="false"},f3=(L,H)=>{let C=h(L.entity_id),V=L.entity_id;return(x3.includes(C)||C==="person")&&(V=L.attributes.id),s3.includes(C)&&(V=H),V?`/config/${C}/edit/${V}`:void 0},z=L=>L.attributes.friendly_name??L.entity_id.substring(L.entity_id.indexOf(".")+1),v3=(L,H)=>{let C=H?L.devices[H]:void 0;return C&&(C.name_by_user||C.name)?.trim()||void 0},y2=(L,H)=>{let C=L.states[H],V=L.entities[H];if(!V)return[C?z(C):H];let M=V.device_id?L.devices[V.device_id]:void 0,e=V.area_id||M?.area_id,r=e?L.areas[e]?.name:void 0,t=c=>C&&L.formatEntityName&&L.formatEntityName(C,{type:c})||void 0,i=v3(L,V.device_id),m=t("entity")??(C?z(C):void 0);m&&i&&m===i&&(m=void 0);let s=V.next_name_part==="device"||!m,A=s&&M?.next_name_part==="parent_device"?v3(L,M.parent_device_id):void 0;return[r,A,s?i:void 0,m].filter(c=>!!c)},g3=L=>!!L.translationMetadata?.translations?.[L.language]?.isRTL;var b=(L,H,C,V={})=>{let M=new CustomEvent(H,{bubbles:V.bubbles??!0,cancelable:V.cancelable??!1,composed:V.composed??!0,detail:C??{}});return L.dispatchEvent(M),M};var f7=["ha-adaptive-dialog","ha-dialog","ha-bottom-sheet","ha-dialog-header","ha-icon-button","ha-icon-button-prev","ha-dropdown","ha-dropdown-item","hui-section"],k3={info:"ha-more-info-info",history:"ha-more-info-history-and-logbook",settings:"ha-more-info-settings",related:"ha-more-info-related",details:"ha-more-info-details",add_to:"ha-more-info-add-to"},O1=L=>customElements.get(L)!==void 0,Q=async(L,H=5e3)=>{if(O1(L))return!0;let C,V=await Promise.race([customElements.whenDefined(L).then(()=>!0),new Promise(M=>{C=setTimeout(()=>M(!1),H)})]);return clearTimeout(C),V},O3,w3=()=>(O3??=(async()=>{await Q("ha-more-info-dialog");let L=[];for(let H of f7)await Q(H,2e3)||L.push(H);return L.length&&console.warn("[more-info-popup-card] Missing Home Assistant elements:",L.join(", ")),L})(),O3),b3=async L=>{let H=customElements.get(L);try{await H?.getConfigElement?.()}catch{}},y3,_3=()=>(y3??=(async()=>{await Promise.all([Q("hui-tile-card"),Q("hui-grid-card")]),await Promise.all([b3("hui-tile-card"),b3("hui-grid-card")]),await Promise.all([Q("ha-form"),Q("hui-card-picker"),Q("hui-card-element-editor")])})(),y3),g7=L=>{let H=L?.match(/^(\d{4})\.(\d{1,2})/);return H?[Number(H[1]),Number(H[2])]:void 0},g1=[2026,10],P3=L=>{let H=g7(L);if(!H)return!0;let[C,V]=H;return C>g1[0]||C===g1[0]&&V>=g1[1]};var T3=g`
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
`,B3=g`
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
`,R3=g`
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
`,F3=g`
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
`,C2=g`
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
`,H2=g`
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
`;var k2={"card.name":"More-info popup","card.description":"A container shown as a native more-info popup, with a sections-style grid of cards inside.","card.cards_count":"{count} cards","card.cards_count_one":"1 card","card.hidden_hint":"Hidden on the dashboard \xB7 opens with #{id}","card.missing_elements":"This Home Assistant version is missing elements the popup needs. Check the browser console.","card.unsupported_version":"More-info popup card requires Home Assistant {version} or newer.","dialog.entity_controls":"Entity controls","editor.tab.cards":"Cards","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Appearance","editor.section.behavior":"Behavior","editor.popup_id":"Popup ID","editor.popup_id_helper":"Open it with a Navigate action to #{id}","editor.entity":"Entity","editor.entity_helper":"Optional. Enables the history, settings and menu buttons of the native header.","editor.name":"Title","editor.icon":"Icon","editor.breadcrumb":"Breadcrumb","editor.breadcrumb_helper":"Text above the title. Type your own text or pick an option.","editor.breadcrumb.auto":"Area and device (automatic)","editor.breadcrumb.none":"None","editor.mode":"Presentation","editor.mode.auto":"Automatic (like Home Assistant)","editor.mode.dialog":"Centered dialog","editor.mode.bottom_sheet":"Bottom sheet","editor.width":"Width","editor.width.small":"Small","editor.width.medium":"Medium (default)","editor.width.large":"Large","editor.width.full":"Full width","editor.width.custom":"Custom","editor.custom_width":"Custom width","editor.height":"Height","editor.height.auto":"Fit content","editor.height.custom":"Custom","editor.min_height":"Minimum height","editor.max_height":"Maximum height","editor.length_helper":"CSS length, for example 720px, 80vh or 90%","editor.column_span":"Grid width (sections)","editor.column_span_helper":"1 = 12 columns like a dashboard section; 2 = 24 columns.","editor.show_header_actions":"Show history, settings and menu","editor.replace_more_info":"Replace the entity's more-info","editor.replace_more_info_helper":"Opening the entity from any card on this view shows this popup instead.","editor.nested_more_info":"Entities opened from inside the popup","editor.nested_more_info.inline":"Navigate inside the popup (like Home Assistant)","editor.nested_more_info.dialog":"Open a separate dialog","editor.dismissable":"Close with Esc, outside click or swipe","editor.auto_close":"Close automatically after inactivity","editor.keep_alive":"Keep cards loaded while closed (faster reopen)","editor.test_popup":"Test popup","editor.add_card":"Add card","editor.edit_card":"Edit card","editor.back":"Back","editor.empty":"This popup has no cards yet.","editor.undo":"Undo","editor.card_deleted":"Card deleted","editor.popup_id_invalid":'Use lowercase letters, digits, "_" and "-" only.',"state_card.name":"More-info state","state_card.description":"State header and the big control of a native more-info dialog.","controls_card.name":"More-info controls","controls_card.description":"Row of more-info chips: selects, toggles, numbers and actions.","controls.empty":"Add controls in the editor.","controls.entity":"Entity","controls.control":"Main control","controls.control.auto":"Automatic (like Home Assistant)","controls.control.none":"None","controls.control.toggle":"Toggle","controls.control.brightness":"Brightness slider","controls.control.fan_speed":"Fan speed","controls.control.position":"Cover position","controls.control.tilt":"Cover tilt","controls.control.cover_toggle":"Cover toggle","controls.control.cover_buttons":"Cover buttons","controls.control.valve_position":"Valve position","controls.control.valve_toggle":"Valve toggle","controls.control.valve_buttons":"Valve buttons","controls.control.lock":"Lock","controls.control.alarm_modes":"Alarm modes","controls.control.temperature":"Thermostat","controls.control.climate_humidity":"Climate humidity","controls.control.humidity":"Humidifier","controls.control.water_heater":"Water heater","controls.control.vacuum_status":"Vacuum status","controls.control.lawn_mower_status":"Lawn mower status","controls.show_state":"Show state","controls.show_last_changed":"Show last changed","controls.state_override":"State text","controls.appearance":"Appearance","controls.appearance.plain":"Plain (like more-info)","controls.appearance.card":"Card","controls.controls":"Controls","controls.type":"Type","controls.type_helper":"Automatic if empty: select for select entities or attributes, toggle, number or action.","controls.type.select":"Select","controls.type.toggle":"Toggle","controls.type.number":"Number","controls.type.button":"Button (icon)","controls.type.action":"Action","controls.attribute":"Attribute","controls.attribute_helper":"Options shown in the select (effect, preset mode, fan speed\u2026).","controls.attribute.state":"State (on / off)","controls.attribute.effect":"Effect","controls.attribute.preset_mode":"Preset mode","controls.attribute.fan_mode":"Fan mode","controls.attribute.swing_mode":"Swing mode","controls.attribute.swing_horizontal_mode":"Horizontal swing mode","controls.attribute.hvac_mode":"HVAC mode","controls.attribute.fan_speed":"Fan speed (vacuum)","controls.attribute.mode":"Mode","controls.attribute.direction":"Direction","controls.attribute.oscillating":"Oscillating","controls.attribute.operation_mode":"Operation mode","controls.attribute.away_mode":"Away mode","controls.attribute.source":"Source","controls.attribute.sound_mode":"Sound mode","controls.name":"Name","controls.icon":"Icon","controls.options":"Options","controls.options_helper":"Optional: which options to show and in which order.","controls.value":"Secondary text","controls.value_helper":"For actions; defaults to the entity state.","controls.tap_action":"Tap action","controls.show_arrow":"Show arrow","controls.perform_action":"Custom action","controls.perform_action_helper":"domain.action that receives the value, e.g. light.turn_on","controls.data_key":"Value field","controls.data_key_helper":"Field of the custom action that receives the value, e.g. effect","controls.min":"Minimum","controls.max":"Maximum","controls.step":"Step","controls.wrap":"Wrap on phones","controls.wrap_helper":"Chips go to new rows instead of scrolling sideways (Home Assistant scrolls)."};var E3={"card.name":"Popup more-info","card.description":"Un contenedor que se muestra como el popup more-info nativo, con una rejilla de tarjetas como una secci\xF3n.","card.cards_count":"{count} tarjetas","card.cards_count_one":"1 tarjeta","card.hidden_hint":"Oculta en el dashboard \xB7 se abre con #{id}","card.missing_elements":"A esta versi\xF3n de Home Assistant le faltan elementos que el popup necesita. Revisa la consola del navegador.","card.unsupported_version":"More-info popup card requiere Home Assistant {version} o superior.","dialog.entity_controls":"Controles de la entidad","editor.tab.cards":"Tarjetas","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Apariencia","editor.section.behavior":"Comportamiento","editor.popup_id":"ID del popup","editor.popup_id_helper":"\xC1brelo con una acci\xF3n Navegar a #{id}","editor.entity":"Entidad","editor.entity_helper":"Opcional. Habilita los botones de historial, ajustes y men\xFA de la cabecera nativa.","editor.name":"T\xEDtulo","editor.icon":"Icono","editor.breadcrumb":"Ruta","editor.breadcrumb_helper":"Texto sobre el t\xEDtulo. Escribe el tuyo o elige una opci\xF3n.","editor.breadcrumb.auto":"\xC1rea y dispositivo (autom\xE1tico)","editor.breadcrumb.none":"Ninguna","editor.mode":"Presentaci\xF3n","editor.mode.auto":"Autom\xE1tica (como Home Assistant)","editor.mode.dialog":"Di\xE1logo centrado","editor.mode.bottom_sheet":"Hoja inferior deslizante","editor.width":"Ancho","editor.width.small":"Peque\xF1o","editor.width.medium":"Mediano (por defecto)","editor.width.large":"Grande","editor.width.full":"Ancho completo","editor.width.custom":"Personalizado","editor.custom_width":"Ancho personalizado","editor.height":"Alto","editor.height.auto":"Ajustar al contenido","editor.height.custom":"Personalizado","editor.min_height":"Alto m\xEDnimo","editor.max_height":"Alto m\xE1ximo","editor.length_helper":"Longitud CSS, por ejemplo 720px, 80vh o 90%","editor.column_span":"Ancho de la rejilla (secciones)","editor.column_span_helper":"1 = 12 columnas como una secci\xF3n del dashboard; 2 = 24 columnas.","editor.show_header_actions":"Mostrar historial, ajustes y men\xFA","editor.replace_more_info":"Reemplazar el more-info de la entidad","editor.replace_more_info_helper":"Al abrir la entidad desde cualquier tarjeta de esta vista se muestra este popup.","editor.nested_more_info":"Entidades abiertas desde dentro del popup","editor.nested_more_info.inline":"Navegar dentro del popup (como Home Assistant)","editor.nested_more_info.dialog":"Abrir un di\xE1logo aparte","editor.dismissable":"Cerrar con Esc, clic fuera o deslizando","editor.auto_close":"Cerrar autom\xE1ticamente tras inactividad","editor.keep_alive":"Mantener las tarjetas cargadas al cerrar (reapertura m\xE1s r\xE1pida)","editor.test_popup":"Probar popup","editor.add_card":"A\xF1adir tarjeta","editor.edit_card":"Editar tarjeta","editor.back":"Volver","editor.empty":"Este popup a\xFAn no tiene tarjetas.","editor.undo":"Deshacer","editor.card_deleted":"Tarjeta eliminada","editor.popup_id_invalid":'Usa solo min\xFAsculas, n\xFAmeros, "_" y "-".',"state_card.name":"Estado more-info","state_card.description":"Cabecera de estado y control grande de un more-info nativo.","controls_card.name":"Controles more-info","controls_card.description":"Fila de chips del more-info: selectores, interruptores, n\xFAmeros y acciones.","controls.empty":"A\xF1ade controles en el editor.","controls.entity":"Entidad","controls.control":"Control principal","controls.control.auto":"Autom\xE1tico (como Home Assistant)","controls.control.none":"Ninguno","controls.control.toggle":"Interruptor","controls.control.brightness":"Control de brillo","controls.control.fan_speed":"Velocidad del ventilador","controls.control.position":"Posici\xF3n de la persiana","controls.control.tilt":"Inclinaci\xF3n de la persiana","controls.control.cover_toggle":"Interruptor de persiana","controls.control.cover_buttons":"Botones de persiana","controls.control.valve_position":"Posici\xF3n de la v\xE1lvula","controls.control.valve_toggle":"Interruptor de v\xE1lvula","controls.control.valve_buttons":"Botones de v\xE1lvula","controls.control.lock":"Cerradura","controls.control.alarm_modes":"Modos de alarma","controls.control.temperature":"Termostato","controls.control.climate_humidity":"Humedad del clima","controls.control.humidity":"Humidificador","controls.control.water_heater":"Calentador de agua","controls.control.vacuum_status":"Estado de la aspiradora","controls.control.lawn_mower_status":"Estado del cortac\xE9sped","controls.show_state":"Mostrar estado","controls.show_last_changed":"Mostrar \xFAltimo cambio","controls.state_override":"Texto del estado","controls.appearance":"Apariencia","controls.appearance.plain":"Sin marco (como more-info)","controls.appearance.card":"Tarjeta","controls.controls":"Controles","controls.type":"Tipo","controls.type_helper":"Autom\xE1tico si se deja vac\xEDo: selector para entidades select o atributos, interruptor, n\xFAmero o acci\xF3n.","controls.type.select":"Selector","controls.type.toggle":"Interruptor","controls.type.number":"N\xFAmero","controls.type.button":"Bot\xF3n (icono)","controls.type.action":"Acci\xF3n","controls.attribute":"Atributo","controls.attribute_helper":"Opciones del selector (efecto, modo predefinido, velocidad\u2026).","controls.attribute.state":"Estado (encendido / apagado)","controls.attribute.effect":"Efecto","controls.attribute.preset_mode":"Modo predefinido","controls.attribute.fan_mode":"Modo del ventilador","controls.attribute.swing_mode":"Oscilaci\xF3n","controls.attribute.swing_horizontal_mode":"Oscilaci\xF3n horizontal","controls.attribute.hvac_mode":"Modo HVAC","controls.attribute.fan_speed":"Potencia de succi\xF3n (aspiradora)","controls.attribute.mode":"Modo","controls.attribute.direction":"Direcci\xF3n","controls.attribute.oscillating":"Oscilaci\xF3n (s\xED / no)","controls.attribute.operation_mode":"Modo de funcionamiento","controls.attribute.away_mode":"Modo ausente","controls.attribute.source":"Fuente","controls.attribute.sound_mode":"Modo de sonido","controls.name":"Nombre","controls.icon":"Icono","controls.options":"Opciones","controls.options_helper":"Opcional: qu\xE9 opciones mostrar y en qu\xE9 orden.","controls.value":"Texto secundario","controls.value_helper":"Para acciones; por defecto, el estado de la entidad.","controls.tap_action":"Acci\xF3n al pulsar","controls.show_arrow":"Mostrar flecha","controls.perform_action":"Acci\xF3n personalizada","controls.perform_action_helper":"dominio.acci\xF3n que recibe el valor, p. ej. light.turn_on","controls.data_key":"Campo del valor","controls.data_key_helper":"Campo de la acci\xF3n personalizada que recibe el valor, p. ej. effect","controls.min":"M\xEDnimo","controls.max":"M\xE1ximo","controls.step":"Paso","controls.wrap":"Saltar de l\xEDnea en m\xF3vil","controls.wrap_helper":"Los chips bajan de l\xEDnea en lugar de desplazarse de lado (Home Assistant los desplaza)."};var D3={en:k2,es:E3},l=(L,H,C)=>{let V=L?.language??(typeof document<"u"&&document.documentElement.lang||"en"),M=V.split("-")[0],e=D3[V]?.[H]??D3[M]?.[H]??k2[H];if(C)for(let[r,t]of Object.entries(C))e=e.replace(`{${r}}`,String(t));return e};var M1=A1(class extends j{constructor(L){if(super(L),L.type!==Y1.ATTRIBUTE||L.name!=="class"||L.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(L){return" "+Object.keys(L).filter(H=>L[H]).join(" ")+" "}update(L,[H]){if(this.st===void 0){this.st=new Set,L.strings!==void 0&&(this.nt=new Set(L.strings.join(" ").split(/\s/).filter(V=>V!=="")));for(let V in H)H[V]&&!this.nt?.has(V)&&this.st.add(V);return this.render(H)}let C=L.element.classList;for(let V of this.st)V in H||(C.remove(V),this.st.delete(V));for(let V in H){let M=!!H[V];M===this.st.has(V)||this.nt?.has(V)||(M?(C.add(V),this.st.add(V)):(C.remove(V),this.st.delete(V)))}return D}});var{I:r4}=A3;var O7={},$3=(L,H=O7)=>L._$AH=H;var N3=A1(class extends j{constructor(){super(...arguments),this.key=d}render(L,H){return this.key=L,H}update(L,[H,C]){return H!==this.key&&($3(L),this.key=H),C}});var w2=(L,H)=>{b(L,"hass-action",{config:{tap_action:{action:"navigate",navigation_path:H}},action:"tap"})};var b7=(L,H)=>{let C=H.entity?y2(L,H.entity):[],V=H.name??C[C.length-1]??"",M=[];return H.breadcrumb==="auto"?M=C.slice(0,-1):H.breadcrumb!=="none"&&H.breadcrumb&&(M=[H.breadcrumb]),[...M,V]},y7=(L,H)=>{let C=H.children[H.children.length-1];switch(H.view){case"details":return L.localize("ui.dialogs.more_info_control.details");case"related":return L.localize("ui.dialogs.more_info_control.related");case"add_to":return L.localize("ui.dialogs.more_info_control.add_to.item");case"settings":return C?.viewTitle||L.localize("ui.dialogs.more_info_control.settings");default:return C?.viewTitle}},V2=(L,H,C)=>{let V=C.entityId&&C.entityId!==H.entity?y2(L,C.entityId):b7(L,H),M=C.view==="root"?void 0:y7(L,C),e=M?V:V.slice(0,-1);return{title:M??V[V.length-1]??"",breadcrumb:e.filter(Boolean),breadcrumbClickable:!!C.entityId&&f1(L)&&(C.view!=="root"||H.breadcrumb==="auto")}},L2=(L,H,C,V,M)=>{let e=g3(L)?" \u25C2 ":" \u25B8 ",r=H.breadcrumb.join(e);return o`
    <span slot=${C} class="title" @click=${V}>
      ${H.breadcrumb.length?H.breadcrumbClickable&&M?o`<button class="breadcrumb" @click=${M}>
                ${r}
              </button>`:o`<p class="breadcrumb">${r}</p>`:d}
      <p class="main">${H.title}</p>
    </span>
  `};var I3,_2=()=>I3,P2=L=>{I3=L};var W3=L=>L.uix??L.card_mod,T2=async(L,H,C,V,M)=>{let e=customElements.get("uix-node");if(e?.applyToElement)try{await e.applyToElement(L,H,C,V,!1,M)}catch(r){console.warn("[more-info-popup-card] UIX styling failed",r)}};var k7=24,w7=4,U3=["pointerdown","keydown","wheel","touchstart"],_7=L=>{let H=document;H.startViewTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches?H.startViewTransition(L):L()},G3,z3,Q3,K3,q3,j3,Y3,X3,J3,C0,H0,V0,Z,B2,R2,F2,E2,D2,$2,N2,I2,W2,U2,G2,y=class extends(V0=O,H0=[k({attribute:!1})],C0=[k({type:Boolean,reflect:!0,attribute:"fixed-top"})],J3=[S()],X3=[S()],Y3=[S()],j3=[S()],q3=[S()],K3=[S()],Q3=[S()],z3=[S()],G3=[S()],V0){constructor(){super(...arguments);x(this,B2,a(Z,8,this)),a(Z,11,this);x(this,R2,a(Z,12,this,!0)),a(Z,15,this);x(this,F2,a(Z,16,this)),a(Z,19,this);x(this,E2,a(Z,20,this,!1)),a(Z,23,this);x(this,D2,a(Z,24,this,[])),a(Z,27,this);x(this,$2,a(Z,28,this,{})),a(Z,31,this);x(this,N2,a(Z,32,this,!1)),a(Z,35,this);x(this,I2,a(Z,36,this,!0)),a(Z,39,this);x(this,W2,a(Z,40,this,!1)),a(Z,43,this);x(this,U2,a(Z,44,this,!1)),a(Z,47,this);x(this,G2,a(Z,48,this,!1)),a(Z,51,this);n(this,"_section");n(this,"_keepAlive",new Map);n(this,"_sectionConfigKey",new WeakMap);n(this,"_childViews",new WeakMap);n(this,"_childHeaders",new WeakMap);n(this,"_autoCloseTimer");n(this,"_resizeObserver");n(this,"_enableEscape",()=>{this._escapeEnabled=!0});n(this,"_disableEscape",()=>{this._escapeEnabled=!1});n(this,"_closeFromEvent",C=>{C.stopPropagation(),this.closeDialog()});n(this,"_goBackFromEvent",()=>this._goBack());n(this,"_observedContent");n(this,"_uixKey");n(this,"_uixSurface");n(this,"_goBack",()=>{let C=this._frame;if(C){if(C.children.length){this._replaceTop({...C,children:C.children.slice(0,-1)}),this._detailsYaml=!1;return}this._stack.length>1&&(this._detailsYaml=!1,this._stack=this._stack.slice(0,-1))}});n(this,"_enlarge",()=>{_7(()=>{this._fill=!this._fill})});n(this,"_breadcrumbClick",C=>{C.stopPropagation(),this._setView("related")});n(this,"_armAutoClose",()=>{this._clearAutoClose(!1);let C=this._config?.auto_close??0;if(!(C<=0)){for(let V of U3)this.addEventListener(V,this._armAutoClose,{passive:!0});this._autoCloseTimer=setTimeout(()=>this.closeDialog(),C*1e3)}});n(this,"_updateScrollState",()=>{let C=this._observedContent;C&&(this._contentScrolled=C.scrollTop>k7,this._contentScrollable=C.scrollHeight-C.scrollTop-C.clientHeight>w7)})}get _config(){return this._params?.config}get _frame(){return this._stack[this._stack.length-1]}showDialog(C){let{config:V,view:M}=C;this._params=C,this._stack=[{entityId:V.entity,view:"root",children:[]}],M&&V.entity&&this._canShowView(M)&&(this._stack=[...this._stack,{entityId:V.entity,view:M,children:[]}]),this._fill=!1,this._detailsYaml=!1,this._escapeEnabled=!0,this._section=this._getSection(V),this._open=!0,V.entity&&this._loadEntry(V.entity),P2({popupId:V.popup_id,close:()=>this.closeDialog()}),this._armAutoClose()}closeDialog(){return this._open=!1,!0}_dialogClosed(C){if(C.target!==C.currentTarget)return;let V=this._config;V&&!V.keep_alive&&(this._section=void 0),this._params=void 0,this._stack=[],this._entries={},this._fill=!1,this._detailsYaml=!1,this._contentScrolled=!1,this._contentScrollable=!1,this._clearAutoClose(),this._uixKey=void 0,this._uixSurface=void 0,window.removeEventListener("dialog-closed",this._enableEscape),window.removeEventListener("show-dialog",this._disableEscape),P2(void 0),b(this,"dialog-closed",{dialog:this.localName})}_dialogOpened(C){C.target===C.currentTarget&&(window.addEventListener("dialog-closed",this._enableEscape),window.addEventListener("show-dialog",this._disableEscape))}connectedCallback(){super.connectedCallback(),this.addEventListener("close-dialog",this._closeFromEvent),this.addEventListener("close-child-view",this._goBackFromEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("close-dialog",this._closeFromEvent),this.removeEventListener("close-child-view",this._goBackFromEvent),this._resizeObserver?.disconnect(),this._clearAutoClose()}willUpdate(C){C.has("hass")&&this._section&&(this._section.hass=this.hass)}updated(C){super.updated(C);let V=this.renderRoot.querySelector(".content");V&&V!==this._observedContent&&(this._observedContent=V,this._resizeObserver??=new ResizeObserver(()=>this._updateScrollState()),this._resizeObserver.disconnect(),this._resizeObserver.observe(V),V.firstElementChild&&this._resizeObserver.observe(V.firstElementChild),this._updateScrollState()),this._applyUix()}_applyUix(){let C=this._config,V=this.renderRoot.querySelector("ha-adaptive-dialog, ha-dialog, ha-bottom-sheet");if(!C||!V)return;let M=W3(C),e=`${V.localName}:${C.popup_id}:${JSON.stringify(M??null)}`;if(e===this._uixKey&&V===this._uixSurface)return;this._uixKey=e,this._uixSurface=V;let r={config:C,params:{popup_id:C.popup_id}};T2(V,"more-info",void 0,r,"type-more-info-popup"),T2(V,"more-info-popup",M,r,"type-more-info-popup")}_getSection(C){let V=C.keep_alive?this._keepAlive.get(C.popup_id):void 0;V||(V=document.createElement("hui-section"),C.keep_alive&&this._keepAlive.set(C.popup_id,V));let M={type:"grid",column_span:C.column_span,cards:C.cards},e=JSON.stringify(M);return V.hass=this.hass,this._sectionConfigKey.get(V)!==e&&(this._sectionConfigKey.set(V,e),V.config=M),V}async _loadEntry(C){if(C in this._entries)return;let V;try{V=await this.hass.callWS({type:"config/entity_registry/get",entity_id:C})}catch{V=null}this._entries={...this._entries,[C]:V}}_canShowView(C){return O1(k3[C])}_pushFrame(C){if(C.view!=="root"&&!this._canShowView(C.view)){b(this,"hass-more-info",{entityId:C.entityId??null,view:C.view});return}C.entityId&&this._loadEntry(C.entityId),this._detailsYaml=!1,this._stack=[...this._stack,C]}_setView(C){let V=this._frame;V&&this._pushFrame({entityId:V.entityId,view:C,children:[]})}_replaceTop(C){this._stack=[...this._stack.slice(0,-1),C]}_showChildView(C){C.stopPropagation();let V=this._frame;if(!V)return;let M=C.detail;M.viewImport?.(),M.viewHeaderImport?.(),this._replaceTop({...V,children:[...V.children,M]})}_handleMoreInfo(C){if(this._config?.nested_more_info==="dialog")return;C.stopPropagation();let{entityId:V}=C.detail;if(!V)return;let M=C.detail.view??C.detail.tab??"info",e=this._frame;if(e&&e.entityId===V&&e.view!=="root"){e.view!==M&&this._setView(M);return}this._pushFrame({entityId:V,view:M==="details"?M:"info",children:[]})}_entryUpdated(C){let V=C.detail;V?.entity_id&&(this._entries={...this._entries,[V.entity_id]:V})}_handleMenu(C){let M=this._frame?.entityId;if(!M)return;let e=C.detail?.item?.value;switch(e){case"info":case"related":case"details":case"add_to":this._setView(e);break;case"device":{let r=b2(this.hass,M);r&&w2(this,`/config/devices/device/${r}`);break}case"edit":{let r=this.hass.states[M],t=r&&f3(r,this._entries[M]?.unique_id);t&&w2(this,t);break}default:break}}_clearAutoClose(C=!0){if(clearTimeout(this._autoCloseTimer),this._autoCloseTimer=void 0,C)for(let V of U3)this.removeEventListener(V,this._armAutoClose)}render(){let C=this._config,V=this._frame;if(!C||!V||!this.hass)return d;let M=!C.dismissable||V.view==="settings"||!this._escapeEnabled,e=L1(l3(C)),r=this._renderContent(V);if(C.mode==="bottom_sheet")return o`
        <ha-bottom-sheet
          style=${e}
          .open=${this._open}
          .preventScrimClose=${M}
          flexcontent
          @opened=${this._dialogOpened}
          @closed=${this._dialogClosed}
          @show-child-view=${this._showChildView}
        >
          <ha-dialog-header slot="header">
            ${this._renderNavigation(V,"navigationIcon")}
            ${this._renderTitle(C,V,"title")}
            ${this._renderActions(C,V,"actionItems")}
          </ha-dialog-header>
          ${r}
        </ha-bottom-sheet>
      `;let t=C.mode==="dialog"?"ha-dialog":"ha-adaptive-dialog",i=this._fill?"full":m3(C),m=o`
      ${this._renderNavigation(V,"headerNavigationIcon")}
      ${this._renderTitle(C,V,"headerTitle")}
      ${this._renderActions(C,V,"headerActionItems")} ${r}
    `;return t==="ha-dialog"?o`
          <ha-dialog
            style=${e}
            .open=${this._open}
            .width=${i}
            .preventScrimClose=${M}
            flexcontent
            @opened=${this._dialogOpened}
            @closed=${this._dialogClosed}
            @show-child-view=${this._showChildView}
          >
            ${m}
          </ha-dialog>
        `:o`
          <ha-adaptive-dialog
            style=${e}
            .open=${this._open}
            .width=${i}
            .preventScrimClose=${M}
            flexcontent
            @opened=${this._dialogOpened}
            @closed=${this._dialogClosed}
            @show-child-view=${this._showChildView}
          >
            ${m}
          </ha-adaptive-dialog>
        `}_isDefaultView(C){return(C.view==="root"||C.view==="info")&&!C.children.length}_renderNavigation(C,V){return this._stack.length===1&&!C.children.length?o`
          <ha-icon-button
            slot=${V}
            .label=${this.hass.localize("ui.common.close")}
            .path=${R1}
            @click=${this.closeDialog}
          ></ha-icon-button>
        `:o`
          <ha-icon-button-prev
            slot=${V}
            .label=${this.hass.localize("ui.dialogs.more_info_control.back_to_info")}
            @click=${this._goBack}
          ></ha-icon-button-prev>
        `}_renderTitle(C,V,M){let e=V2(this.hass,C,V);return L2(this.hass,e,M,C.mode==="bottom_sheet"?void 0:this._enlarge,this._breadcrumbClick)}_renderActions(C,V,M){let e=V.entityId,r=V.view==="root";if(!e||r&&!C.show_header_actions)return d;if(!this._isDefaultView(V)){if(V.view==="details"&&!V.children.length)return o`
          <ha-icon-button
            slot=${M}
            .label=${this.hass.localize("ui.dialogs.more_info_control.toggle_yaml_mode")}
            .path=${F1}
            @click=${()=>{this._detailsYaml=!this._detailsYaml}}
          ></ha-icon-button>
        `;let u=V.children[V.children.length-1];if(u?.viewHeaderTag){let w=this._childElement(u,u.viewHeaderTag,"header");return w.slot=M,Object.assign(w,{hass:this.hass,params:u.viewParams}),w}return d}let t=this.hass,i=f1(t),m=c3(t,e,!r)?o`
          <ha-icon-button
            slot=${M}
            .label=${t.localize("ui.dialogs.more_info_control.history")}
            .path=${f5}
            @click=${()=>this._setView("history")}
          ></ha-icon-button>
        `:d;if(!i)return o`
        ${m}
        ${O2(t)?o`
                <ha-icon-button
                  slot=${M}
                  .label=${t.localize("ui.dialogs.more_info_control.add_to.item")}
                  .path=${p2}
                  @click=${()=>this._setView("add_to")}
                ></ha-icon-button>
              `:d}
      `;let s=t.states[e],A=b2(t,e),c=S3(t,A),p=h(e);return o`
      ${m}
      <ha-icon-button
        slot=${M}
        .label=${t.localize("ui.dialogs.more_info_control.settings")}
        .path=${E1}
        @click=${()=>this._setView("settings")}
      ></ha-icon-button>
      <ha-dropdown
        slot=${M}
        placement="bottom-end"
        @closed=${u=>u.stopPropagation()}
        @opened=${u=>u.stopPropagation()}
        @wa-select=${this._handleMenu}
      >
        <ha-icon-button
          slot="trigger"
          .label=${t.localize("ui.common.menu")}
          .path=${P5}
        ></ha-icon-button>
        ${r?o`
                <ha-dropdown-item value="info">
                  <ha-svg-icon
                    slot="icon"
                    .path=${o1}
                  ></ha-svg-icon>
                  ${l(t,"dialog.entity_controls")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:d}
        ${O2(t)?o`
                <ha-dropdown-item value="add_to">
                  <ha-svg-icon
                    slot="icon"
                    .path=${p2}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.add_to.item")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:d}
        ${A?o`
                <ha-dropdown-item value="device">
                  <ha-svg-icon
                    slot="icon"
                    .path=${c==="service"?Q5:_5}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.device_or_service_info",{type:t.localize(`ui.dialogs.more_info_control.device_type.${c}`)})}
                </ha-dropdown-item>
              `:d}
        ${h3(s)?o`
                <ha-dropdown-item value="edit">
                  <ha-svg-icon
                    slot="icon"
                    .path=${I5}
                  ></ha-svg-icon>
                  ${t.localize(`ui.dialogs.more_info_control.edit_domain.${p}`)||t.localize("ui.dialogs.more_info_control.edit")}
                </ha-dropdown-item>
              `:d}
        <ha-dropdown-item value="related">
          <ha-svg-icon slot="icon" .path=${R5}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.related")}
        </ha-dropdown-item>
        <ha-dropdown-item value="details">
          <ha-svg-icon slot="icon" .path=${B5}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.details")}
        </ha-dropdown-item>
      </ha-dropdown>
    `}_childElement(C,V,M){let e=M==="view"?this._childViews:this._childHeaders,r=e.get(C);return r||(r=document.createElement(V),e.set(C,r)),r}_renderContent(C){let V=`${this._stack.length}:${C.entityId??""}:${C.view}`;return o`
      <div
        class=${M1({"content-wrapper":!0,"settings-view":C.view==="settings"})}
      >
        ${N3(V,o`
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
          class=${M1({"fade-top":!0,visible:this._contentScrolled})}
        ></div>
        <div
          class=${M1({"fade-bottom":!0,visible:this._contentScrollable})}
        ></div>
      </div>
    `}_renderChild(C){let V=C.children[C.children.length-1];if(!V)return d;let M=this._childElement(V,V.viewTag,"view");return Object.assign(M,{hass:this.hass,entry:C.entityId?this._entries[C.entityId]:void 0,params:V.viewParams}),o`<div class="child-view">${M}</div>`}_renderFrame(C){let V=this.hass,M=C.entityId,e=M?this._entries[M]:void 0;if(C.view==="root")return o`
        <div
          class="body"
          style=${L1({"--column-span":String(this._config.column_span)})}
        >
          ${this._section}
        </div>
      `;if(!M)return d;if(C.view==="settings")return o`
        <div ?hidden=${C.children.length>0}>
          <ha-more-info-settings
            .hass=${V}
            .entityId=${M}
            .entry=${e}
          ></ha-more-info-settings>
        </div>
        ${this._renderChild(C)}
      `;if(C.children.length)return this._renderChild(C);switch(C.view){case"info":return o`
          <ha-more-info-info
            .hass=${V}
            .entityId=${M}
            .entry=${e}
            .editMode=${!1}
          ></ha-more-info-info>
        `;case"history":return o`
          <ha-more-info-history-and-logbook
            .hass=${V}
            .entityId=${M}
          ></ha-more-info-history-and-logbook>
        `;case"related":return o`
          <ha-more-info-related
            .hass=${V}
            .entry=${e}
            .params=${{entityId:M}}
          ></ha-more-info-related>
        `;case"add_to":return o`
          <ha-more-info-add-to
            .entityId=${M}
            @add-to-action-selected=${this._goBack}
          ></ha-more-info-add-to>
        `;case"details":return o`
          <ha-more-info-details
            .hass=${V}
            .entry=${e}
            .params=${{entityId:M}}
            .yamlMode=${this._detailsYaml}
          ></ha-more-info-details>
        `;default:return d}}};Z=$(V0),B2=new WeakMap,R2=new WeakMap,F2=new WeakMap,E2=new WeakMap,D2=new WeakMap,$2=new WeakMap,N2=new WeakMap,I2=new WeakMap,W2=new WeakMap,U2=new WeakMap,G2=new WeakMap,v(Z,4,"hass",H0,y,B2),v(Z,4,"fixedTop",C0,y,R2),v(Z,4,"_params",J3,y,F2),v(Z,4,"_open",X3,y,E2),v(Z,4,"_stack",Y3,y,D2),v(Z,4,"_entries",j3,y,$2),v(Z,4,"_fill",q3,y,N2),v(Z,4,"_escapeEnabled",K3,y,I2),v(Z,4,"_detailsYaml",Q3,y,W2),v(Z,4,"_contentScrolled",z3,y,U2),v(Z,4,"_contentScrollable",G3,y,G2),E(Z,y),n(y,"styles",[T3,B3,R3,F3,C2,H2,g`
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
    `]);customElements.get(G)||customElements.define(G,y);var L0=L=>{if(!(!L||L.length<2))try{return decodeURIComponent(L.slice(1))}catch{return}},P7=L=>`${L.pathname}${L.search}`,b1=L=>{L.history.replaceState(L.history.state,"",P7(L.location))},M0=(L,H=500)=>new Promise(C=>{let V=!1,M=()=>{V||(V=!0,L.removeEventListener("popstate",e),clearTimeout(r),L.location.hash&&b1(L),C())},e=()=>M(),r=setTimeout(M,H);L.addEventListener("popstate",e),L.history.back()});var e0=Symbol.for("more-info-popup-card.registry"),z2=class{constructor(H=window){this._win=H}_win;_hosts=new Set;_installed=!1;_consuming=!1;_checkScheduled=!1;register(H){this._install(),this._hosts.add(H),this._scheduleLocationCheck()}unregister(H){this._hosts.delete(H)}get(H){if(!H)return;let C;for(let V of this._hosts)V.isConnected&&V.popupConfig?.popup_id===H&&(C=V);return C}findByEntity(H){let C;for(let V of this._hosts){let M=V.popupConfig;V.isConnected&&M?.replace_more_info&&M.entity===H&&(C=V)}return C}open(H,C){let V=this.get(H);return V?.openPopup(C),!!V}close(H){let C=_2();C&&(!H||C.popupId===H)&&C.close()}toggle(H){_2()?.popupId===H?this.close(H):this.open(H)}_install(){this._installed||(this._installed=!0,this._win.addEventListener("location-changed",this._onLocationChanged),this._win.addEventListener("popstate",this._onPopState),this._win.addEventListener("ll-custom",this._onCustomAction),this._win.addEventListener("hass-more-info",this._onMoreInfo,{capture:!0}))}_scheduleLocationCheck(){this._checkScheduled||(this._checkScheduled=!0,queueMicrotask(()=>{this._checkScheduled=!1;let H=this._hostForHash();H&&!this._consuming&&(b1(this._win),H.openPopup())}))}_hostForHash(){return this.get(L0(this._win.location.hash))}_onLocationChanged=H=>{if(this._consuming)return;let C=this._hostForHash();if(!C)return;let M=!!!H.detail?.replace&&this._win.history.state?.from===this._win.location.pathname;this._consuming=!0,(M?M0(this._win):Promise.resolve(b1(this._win))).then(()=>{this._consuming=!1,C.openPopup()})};_onPopState=()=>{if(this._consuming)return;let H=this._hostForHash();H&&(b1(this._win),H.openPopup())};_onCustomAction=H=>{let V=H.detail?.more_info_popup;V&&(typeof V=="string"?this.open(V):V.open?this.open(V.open):V.toggle?this.toggle(V.toggle):V.close!==void 0&&this.close(V.close||void 0))};_onMoreInfo=H=>{let C=H.detail;if(!C?.entityId)return;let V=this.findByEntity(C.entityId);if(!V||H.composedPath().some(r=>r.localName===G))return;H.stopImmediatePropagation();let e=C.view??C.tab;V.openPopup({view:e&&e!=="info"?e:void 0})}},Q2=()=>{let L=window;return L[e0]??=new z2(window),L[e0]};var y1=(L,H,C)=>C.map(V=>({value:V,label:l(L,`editor.${H}.${V}`)})),r0=(L,H)=>[{name:"general",type:"expandable",flatten:!0,expanded:!0,iconPath:D1,title:l(L,"editor.section.general"),schema:[{name:"popup_id",required:!0,selector:{text:{prefix:"#"}}},{name:"entity",selector:{entity:{}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]}]},{name:"appearance",type:"expandable",flatten:!0,iconPath:N5,title:l(L,"editor.section.appearance"),schema:[{name:"mode",selector:{select:{mode:"dropdown",options:y1(L,"mode",["auto","dialog","bottom_sheet"])}}},{name:"breadcrumb",selector:{select:{mode:"dropdown",custom_value:!0,options:y1(L,"breadcrumb",["auto","none"])}}},{name:"",type:"grid",schema:[{name:"width",selector:{select:{mode:"dropdown",options:y1(L,"width",["small","medium","large","full","custom"])}}},...H.width==="custom"?[{name:"custom_width",selector:{text:{}}}]:[]]},{name:"",type:"grid",schema:[{name:"height",selector:{select:{mode:"dropdown",options:y1(L,"height",["auto","custom"])}}}]},...H.height==="custom"?[{name:"",type:"grid",schema:[{name:"min_height",selector:{text:{}}},{name:"max_height",selector:{text:{}}}]}]:[],{name:"column_span",selector:{number:{min:1,max:4,step:1,mode:"slider",slider_ticks:!0}}},...H.entity?[{name:"show_header_actions",selector:{boolean:{}}}]:[]]},{name:"behavior",type:"expandable",flatten:!0,iconPath:E1,title:l(L,"editor.section.behavior"),schema:[...H.entity?[{name:"replace_more_info",selector:{boolean:{}}}]:[],{name:"nested_more_info",selector:{select:{mode:"list",options:y1(L,"nested_more_info",["inline","dialog"])}}},{name:"dismissable",selector:{boolean:{}}},{name:"auto_close",selector:{number:{min:0,max:3600,step:5,mode:"box",unit_of_measurement:"s"}}},{name:"keep_alive",selector:{boolean:{}}}]}],T7={entity:"editor.entity_helper",breadcrumb:"editor.breadcrumb_helper",custom_width:"editor.length_helper",min_height:"editor.length_helper",max_height:"editor.length_helper",column_span:"editor.column_span_helper",replace_more_info:"editor.replace_more_info_helper"},B7={popup_id:"editor.popup_id",entity:"editor.entity",name:"editor.name",icon:"editor.icon",breadcrumb:"editor.breadcrumb",mode:"editor.mode",width:"editor.width",custom_width:"editor.custom_width",height:"editor.height",min_height:"editor.min_height",max_height:"editor.max_height",column_span:"editor.column_span",show_header_actions:"editor.show_header_actions",replace_more_info:"editor.replace_more_info",nested_more_info:"editor.nested_more_info",dismissable:"editor.dismissable",auto_close:"editor.auto_close",keep_alive:"editor.keep_alive"},t0=L=>H=>{if(H.title)return H.title;let C=B7[H.name];return C?l(L,C):H.name},i0=(L,H)=>C=>{if(C.name==="popup_id")return l(L,"editor.popup_id_helper",{id:H.popup_id||"\u2026"});let V=T7[C.name];return V?l(L,V):void 0};var o0=L=>{let H={views:[{type:"sections",sections:[L.section]}]};return{config:H,rawConfig:H,editMode:!0,urlPath:null,mode:"storage",locale:L.locale,enableFullEditMode:()=>{},setEditMode:()=>{},saveConfig:async C=>{let V=C.views?.[0]?.sections?.[0]?.cards??[];L.onSave(structuredClone(V))},deleteConfig:async()=>{},showToast:C=>L.onToast(C)}},a0=L=>{if(!Array.isArray(L))return;let H=L[L.length-1];return typeof H=="number"?H:void 0};var R7=30,F7=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]/g,"_").replace(/^[_-]+/,""),n0,p0,m0,l0,v0,x0,s0,Z0,u0,f,K2,q2,j2,Y2,X2,J2,C5,H5,B=class extends(u0=O,Z0=[k({attribute:!1})],s0=[k({attribute:!1})],x0=[S()],v0=[S()],l0=[S()],m0=[S()],p0=[S()],n0=[S()],u0){constructor(){super(...arguments);x(this,K2,a(f,8,this)),a(f,11,this);x(this,q2,a(f,12,this)),a(f,15,this);x(this,j2,a(f,16,this)),a(f,19,this);x(this,Y2,a(f,20,this)),a(f,23,this);x(this,X2,a(f,24,this,!1)),a(f,27,this);x(this,J2,a(f,28,this,!0)),a(f,31,this);x(this,C5,a(f,32,this,!0)),a(f,35,this);n(this,"_section");n(this,"_sectionKey");n(this,"_undo",[]);x(this,H5,a(f,36,this)),a(f,39,this);n(this,"_noticeTimer");n(this,"_undoLast",()=>{let C=this._undo[this._undo.length-1];this._notice=void 0,C&&(this._undo=this._undo.slice(0,-1),this._setCards(C,!1))});n(this,"_toast",C=>{clearTimeout(this._noticeTimer),this._notice={message:C.message,undo:!!C.action&&this._undo.length>0},this._noticeTimer=setTimeout(()=>{this._notice=void 0},C.duration&&C.duration>0?C.duration:6e3)});n(this,"_interceptEdit",{capture:!0,handleEvent:C=>{let V=a0(C.detail?.path);V!==void 0&&(C.stopPropagation(),C.type==="ll-duplicate-card"?this._duplicate(V):this._openEditor(V))}});n(this,"_interceptCreate",{capture:!0,handleEvent:C=>{C.stopPropagation(),this._sub={kind:"add"}}});n(this,"_back",()=>{this._returnToCards()})}setConfig(C){h1(C),this._config=structuredClone(C)}connectedCallback(){super.connectedCallback(),_3().then(()=>{this._ready=!0})}willUpdate(C){(C.has("_config")||C.has("hass"))&&this._config&&this.hass&&this._syncSection()}get _cards(){return this._config?.cards??[]}get _sectionConfig(){return{type:"grid",column_span:this._config?.column_span??S1.column_span,cards:this._cards}}_emit(C){this._config=C,b(this,"config-changed",{config:C})}_setCards(C,V=!0){this._config&&JSON.stringify(C)!==JSON.stringify(this._cards)&&(V&&(this._undo=[...this._undo,structuredClone(this._cards)].slice(-R7)),this._emit({...this._config,cards:C}))}_syncSection(){let C=this._sectionConfig;this._section??=document.createElement("hui-section");let V=this._section;V.hass=this.hass;let M=JSON.stringify(C);M!==this._sectionKey&&(this._sectionKey=M,V.viewIndex=0,V.index=0,V.preview=!0,V.lovelace=o0({section:C,locale:this.hass.locale,onSave:e=>this._setCards(e),onToast:this._toast}),V.config=C)}_copyNative(C){let V=this._section?.firstElementChild??this._section;V&&b(V,"ll-copy-card",{path:[0,0,C]})}_openEditor(C){this._guiMode=!0,this._guiModeAvailable=!0,this._sub={kind:"edit",index:C}}_returnToCards(){this._sub=void 0,this.updateComplete.then(()=>this.renderRoot.querySelector(".cards-header")?.scrollIntoView({block:"start"}))}_duplicate(C){let V=[...this._cards];V.splice(C+1,0,structuredClone(V[C])),this._setCards(V),this._openEditor(C+1)}_delete(C){let V=[...this._cards];V.splice(C,1),this._setCards(V),this._returnToCards(),this._toast({message:l(this.hass,"editor.card_deleted"),action:{text:l(this.hass,"editor.undo"),action:this._undoLast}})}_cut(C){this._copyNative(C);let V=[...this._cards];V.splice(C,1),this._setCards(V),this._returnToCards()}_cardPicked(C){C.stopPropagation();let V=C.detail.config;if(!V?.type)return;let M=[...this._cards,V];this._setCards(M),this._openEditor(M.length-1)}_cardChanged(C){if(C.stopPropagation(),this._sub?.kind!=="edit")return;let V=[...this._cards];V[this._sub.index]=C.detail.config,this._guiModeAvailable=C.detail.guiModeAvailable??!0,this._setCards(V)}_guiModeChanged(C){C.stopPropagation(),this._guiMode=C.detail.guiMode,this._guiModeAvailable=C.detail.guiModeAvailable}_toggleMode(){this.renderRoot.querySelector("hui-card-element-editor")?.toggleMode()}_valueChanged(C){if(C.stopPropagation(),!this._config)return;let V={...C.detail.value};typeof V.popup_id=="string"&&(V.popup_id=F7(V.popup_id));let M={...this._config,...V};for(let[e,r]of Object.entries(S1))M[e]===r&&delete M[e];for(let e of Object.keys(M))(M[e]===""||M[e]===void 0)&&delete M[e];M.width!=="custom"&&delete M.custom_width,M.height!=="custom"&&(delete M.min_height,delete M.max_height),M.entity||(delete M.replace_more_info,delete M.show_header_actions),this._emit(M)}_testPopup(){if(!this._config)return;let C;try{C=J1(h1(this._config))}catch{return}b(this,"show-dialog",{dialogTag:G,dialogImport:()=>Promise.resolve(),dialogParams:{config:C},addHistory:!0})}render(){return!this.hass||!this._config?d:this._ready?this._sub?.kind==="add"?this._renderAdd():this._sub?.kind==="edit"&&this._cards[this._sub.index]?this._renderEdit(this._sub.index):this._renderMain():o`<ha-spinner size="small"></ha-spinner>`}_renderMain(){let C=this.hass,V=this._config,M={...S1,...V};return o`
      <ha-form
        .hass=${C}
        .data=${M}
        .schema=${r0(C,M)}
        .computeLabel=${t0(C)}
        .computeHelper=${i0(C,V)}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="cards-header">
        <h3>${l(C,"editor.tab.cards")}</h3>
        <ha-button appearance="plain" size="small" @click=${this._testPopup}>
          ${l(C,"editor.test_popup")}
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
                        ${l(C,"editor.undo")}
                      </ha-button>`:d}
              </ha-alert>
            `:d}
      ${this._cards.length?d:o`<p class="empty">${l(C,"editor.empty")}</p>`}
      <div
        class="grid"
        style=${L1({"--column-span":String(V.column_span??1)})}
        @ll-edit-card=${this._interceptEdit}
        @ll-duplicate-card=${this._interceptEdit}
        @ll-create-card=${this._interceptCreate}
      >
        ${this._section}
      </div>
    `}_renderSubHeader(C,V=d){return o`
      <div class="sub-header">
        <ha-icon-button-prev
          .label=${l(this.hass,"editor.back")}
          @click=${this._back}
        ></ha-icon-button-prev>
        <span class="sub-title">${C}</span>
        <div class="sub-actions">${V}</div>
      </div>
    `}_renderAdd(){return o`
      ${this._renderSubHeader(l(this.hass,"editor.add_card"))}
      <hui-card-picker
        .hass=${this.hass}
        .lovelace=${this.lovelace??{views:[]}}
        @config-changed=${this._cardPicked}
      ></hui-card-picker>
    `}_renderEdit(C){let V=this.hass,M=this._cards[C],e=t=>V.localize(`ui.panel.lovelace.editor.edit_card.${t}`),r=o`
      <ha-icon-button
        .label=${e(this._guiMode?"show_code_editor":"show_visual_editor")}
        .path=${this._guiMode?F1:F5}
        .disabled=${!this._guiModeAvailable}
        @click=${this._toggleMode}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("duplicate")}
        .path=${y5}
        @click=${()=>this._duplicate(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("copy")}
        .path=${O5}
        @click=${()=>this._copyNative(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("cut")}
        .path=${b5}
        @click=${()=>this._cut(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("delete")}
        .path=${w5}
        @click=${()=>this._delete(C)}
      ></ha-icon-button>
    `;return o`
      ${this._renderSubHeader(l(V,"editor.edit_card"),r)}
      <hui-card-element-editor
        .hass=${V}
        .lovelace=${this.lovelace}
        .value=${M}
        .sectionConfig=${this._sectionConfig}
        show-visibility-tab
        @config-changed=${this._cardChanged}
        @GUImode-changed=${this._guiModeChanged}
      ></hui-card-element-editor>
    `}};f=$(u0),K2=new WeakMap,q2=new WeakMap,j2=new WeakMap,Y2=new WeakMap,X2=new WeakMap,J2=new WeakMap,C5=new WeakMap,H5=new WeakMap,v(f,4,"hass",Z0,B,K2),v(f,4,"lovelace",s0,B,q2),v(f,4,"_config",x0,B,j2),v(f,4,"_sub",v0,B,Y2),v(f,4,"_ready",l0,B,X2),v(f,4,"_guiMode",m0,B,J2),v(f,4,"_guiModeAvailable",p0,B,C5),v(f,4,"_notice",n0,B,H5),E(f,B),n(B,"styles",g`
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
  `);customElements.get(c1)||customElements.define(c1,B);var L5=L=>H=>(H.attributes[L]??[]).map(String),V5=L=>H=>{let C=H.attributes[L];return C==null?void 0:String(C)},N=(L,H,C,V)=>({options:L5(L),value:V5(H),service:M=>[h(M.entity_id),C],data:M=>({[H]:M}),icon:V}),E7=(L,H,C,V)=>({optionIcons:{true:C,false:V},options:()=>["true","false"],value:M=>M.attributes[L]==null?void 0:String(!!M.attributes[L]),service:M=>[h(M.entity_id),H],data:M=>({[L]:M==="true"}),icon:C}),k1={effect:{...N("effect_list","effect","turn_on",k5)},preset_mode:N("preset_modes","preset_mode","set_preset_mode",o1),fan_mode:N("fan_modes","fan_mode","set_fan_mode",n2),swing_mode:N("swing_modes","swing_mode","set_swing_mode",B1),swing_horizontal_mode:N("swing_horizontal_modes","swing_horizontal_mode","set_swing_horizontal_mode",B1),hvac_mode:{options:L5("hvac_modes"),value:L=>L.state,service:()=>["climate","set_hvac_mode"],data:L=>({hvac_mode:L}),icon:z5,formatAsState:!0},fan_speed:{...N("fan_speed_list","fan_speed","set_fan_speed",n2),attributeIcons:!1},mode:N("available_modes","mode","set_mode",o1),direction:{options:()=>["forward","reverse"],value:V5("direction"),service:()=>["fan","set_direction"],data:L=>({direction:L}),icon:G5},oscillating:E7("oscillating","oscillate",B1,h5),operation_mode:N("operation_list","operation_mode","set_operation_mode",K5),away_mode:{options:()=>["on","off"],value:V5("away_mode"),service:()=>["water_heater","set_away_mode"],data:L=>({away_mode:L==="on"}),icon:d2,optionIcons:{on:d2,off:S5}},source:{...N("source_list","source","select_source",E5),attributeIcons:!1},sound_mode:{...N("sound_mode_list","sound_mode","select_sound_mode",$5),attributeIcons:!1}},M2={options:L5("options"),value:L=>L.state,service:L=>[h(L.entity_id),"select_option"],data:L=>({option:L}),icon:o1,formatAsState:!0},c0={options:()=>["off","on"],value:L=>L.state,service:L=>[h(L.entity_id),"toggle"],data:()=>({}),icon:U5,formatAsState:!0},d1=["select","input_select"],S0=["number","input_number"],h0=["switch","input_boolean","light","fan","siren","automation","script","group","media_player","humidifier","climate","water_heater","remote","valve","cover","lock"];var f0={button:"button.press",input_button:"input_button.press",scene:"scene.turn_on",script:"script.turn_on"},g0=["off","closed","locked","unavailable","unknown","idle","standby","paused","docked"],O0=600,w1=L=>{if(L.type)return L.type;if(L.attribute)return"select";let H=L.entity?h(L.entity):"";return d1.includes(H)?"select":S0.includes(H)?"number":h0.includes(H)?"toggle":"action"},b0=L=>L?.map(H=>typeof H=="string"?{value:H}:{...H,value:String(H.value)}),M5=L=>{let[H,C]=L.split(".",2);return[H,C]};var _1=async(L,H)=>{if(H.every(O1))return!0;try{(await window.loadCardHelpers?.())?.importMoreInfoControl?.(L)}catch(V){console.warn("[more-info-popup-card] Could not load",L,V)}return(await Promise.all(H.map(V=>Q(V,8e3)))).every(Boolean)};var n1={toggle:{tag:"ha-state-control-toggle",load:"switch"},brightness:{tag:"ha-state-control-light-brightness",load:"light"},fan_speed:{tag:"ha-state-control-fan-speed",load:"fan"},position:{tag:"ha-state-control-cover-position",load:"cover"},tilt:{tag:"ha-state-control-cover-tilt-position",load:"cover"},cover_toggle:{tag:"ha-state-control-cover-toggle",load:"cover"},cover_buttons:{tag:"ha-state-control-cover-buttons",load:"cover"},valve_position:{tag:"ha-state-control-valve-position",load:"valve"},valve_toggle:{tag:"ha-state-control-valve-toggle",load:"valve"},valve_buttons:{tag:"ha-state-control-valve-buttons",load:"valve"},lock:{tag:"ha-state-control-lock-toggle",load:"lock"},alarm_modes:{tag:"ha-state-control-alarm_control_panel-modes",load:"alarm_control_panel"},temperature:{tag:"ha-state-control-climate-temperature",load:"climate"},climate_humidity:{tag:"ha-state-control-climate-humidity",load:"climate"},humidity:{tag:"ha-state-control-humidifier-humidity",load:"humidifier"},water_heater:{tag:"ha-state-control-water_heater-temperature",load:"water_heater"},vacuum_status:{tag:"ha-state-control-vacuum-status",load:"vacuum"},lawn_mower_status:{tag:"ha-state-control-lawn_mower-status",load:"lawn_mower"}},D7=["brightness","color_temp","hs","xy","rgb","rgbw","rgbww","white"],e2=(L,H)=>((L.attributes.supported_features??0)&H)!==0,e5=L=>{switch(h(L.entity_id)){case"light":return L.attributes.supported_color_modes?.some(C=>D7.includes(C))?"brightness":"toggle";case"switch":case"input_boolean":case"siren":case"automation":case"remote":return"toggle";case"fan":return e2(L,1)?"fan_speed":"toggle";case"cover":return e2(L,4)?"position":e2(L,128)?"tilt":"cover_buttons";case"valve":return e2(L,4)?"valve_position":"valve_toggle";case"lock":return"lock";case"alarm_control_panel":return"alarm_modes";case"climate":return"temperature";case"humidifier":return"humidity";case"water_heater":return"water_heater";case"vacuum":return"vacuum_status";case"lawn_mower":return"lawn_mower_status";default:return}},y0=["climate","humidifier","water_heater"];var t2=()=>{},k0=L=>l(t2(),`controls.${L}`),r2=(L,H,C=!1)=>({select:{mode:"dropdown",custom_value:C,options:L.map(V=>({value:V,label:l(t2(),`${H}.${V}`)||V}))}}),w0={name:"appearance",selector:r2(["plain","card"],"controls.appearance")},_0=L=>k0(L.name)||L.name,P0=()=>({schema:[{name:"entity",required:!0,selector:{entity:{}}},{name:"control",selector:r2(["auto","none",...Object.keys(n1)],"controls.control")},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}}]},{name:"state_override",selector:{text:{}}},w0],computeLabel:_0}),_=(L,H,C=!1)=>({label:k0(L),description:l(t2(),`controls.${L}_helper`)||void 0,required:C,selector:H}),T0=()=>({schema:[{name:"controls",selector:{object:{multiple:!0,label_field:"entity",description_field:"attribute",fields:{type:_("type",r2(["select","toggle","number","action","button"],"controls.type")),entity:_("entity",{entity:{}}),attribute:_("attribute",r2(["state",...Object.keys(k1)],"controls.attribute",!0)),name:_("name",{text:{}}),icon:_("icon",{icon:{}}),options:_("options",{select:{multiple:!0,custom_value:!0,options:[]}}),value:_("value",{text:{}}),tap_action:_("tap_action",{ui_action:{}}),show_arrow:_("show_arrow",{boolean:{}}),perform_action:_("perform_action",{text:{}}),data_key:_("data_key",{text:{}}),min:_("min",{number:{mode:"box",step:"any"}}),max:_("max",{number:{mode:"box",step:"any"}}),step:_("step",{number:{mode:"box",step:"any"}})}}}},{name:"",type:"grid",schema:[w0,{name:"wrap",selector:{boolean:{}}}]}],computeLabel:_0,computeHelper:L=>l(t2(),`controls.${L.name}_helper`)||void 0,assertConfig:L=>{if(L.controls?.some(H=>H.options?.some(C=>typeof C!="string")))throw new Error("Options with names or icons can only be edited in YAML")}});var i2=g`
  ha-card.plain {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    --ha-card-background: transparent;
  }
`,B0=g`
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
`;var P1="more-info-controls-card",R0,F0,E0,D0,$0,R,r5,t5,i5,o5,K=class extends($0=O,D0=[k({attribute:!1})],E0=[S()],F0=[S()],R0=[S()],$0){constructor(){super(...arguments);x(this,r5,a(R,8,this)),a(R,11,this);x(this,t5,a(R,12,this)),a(R,15,this);x(this,i5,a(R,16,this,!1)),a(R,19,this);x(this,o5,a(R,20,this,{})),a(R,23,this);n(this,"_timers",{})}static getConfigForm(){return T0()}static getStubConfig(C,V){let M=V.find(i=>i.startsWith("light.")&&C.states[i]?.attributes.effect_list),e=V.find(i=>d1.includes(h(i))),r=V.find(i=>i.startsWith("switch.")),t=[];return M&&t.push({entity:M,attribute:"effect"}),e&&t.push({entity:e}),r&&t.push({entity:r}),!t.length&&V[0]&&t.push({entity:V[0]}),{type:`custom:${P1}`,controls:t}}setConfig(C){if(!Array.isArray(C?.controls))throw new Error('"controls" must be a list');C.controls.forEach((V,M)=>{if(!V||typeof V!="object")throw new Error(`Control ${M+1} is invalid`);let e=w1(V);if(e!=="action"&&e!=="button"&&!V.entity)throw new Error(`Control ${M+1} needs an "entity"`);if(V.attribute&&V.attribute!=="state"&&!k1[V.attribute]&&!V.options)throw new Error(`Control ${M+1}: unknown attribute "${V.attribute}"; add "options" and "perform_action"`)}),this._config=C}connectedCallback(){super.connectedCallback(),_1("light",["ha-more-info-control-select-container","ha-control-select-menu"]).then(()=>{this._ready=!0})}disconnectedCallback(){super.disconnectedCallback(),Object.values(this._timers).forEach(clearTimeout),this._timers={}}getCardSize(){return 1}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}_stateObj(C){return C.entity?this.hass?.states[C.entity]:void 0}_selectSpec(C,V){if(C.attribute)return C.attribute==="state"?c0:k1[C.attribute]??{options:()=>[],value:M=>M.attributes[C.attribute]==null?void 0:String(M.attributes[C.attribute]),service:()=>["",""],data:M=>({[C.data_key??C.attribute]:M}),icon:M2.icon};if(d1.includes(h(V.entity_id)))return M2;if(C.options&&C.perform_action)return{options:()=>[],value:()=>{},service:()=>["",""],data:M=>({[C.data_key??"value"]:M}),icon:M2.icon,attributeIcons:!1}}_call(C,V,M,e){let[r,t]=C.perform_action?M5(C.perform_action):V;if(!r||!t)return;let i={...C.entity?{entity_id:C.entity}:{},...C.perform_action&&C.data_key?{[C.data_key]:e}:M,...C.data};this.hass.callService(r,t,i)}_label(C,V){return C.name?C.name:V?C.attribute&&C.attribute!=="state"?this.hass.formatEntityAttributeName(V,C.attribute):z(V):""}_icon(C,V,M,e){return C.icon?o`<ha-icon
        slot=${e??d}
        .icon=${C.icon}
      ></ha-icon>`:M?o`<ha-svg-icon
        slot=${e??d}
        .path=${M}
      ></ha-svg-icon>`:o`<ha-state-icon
      slot=${e??d}
      .hass=${this.hass}
      .stateObj=${V}
    ></ha-state-icon>`}_renderSelect(C,V){let M=this.hass,e=this._selectSpec(C,V);if(!e)return d;let r=b0(C.options),t=r?r.map(p=>p.value):e.options(V),i=C.attribute&&C.attribute!=="state"?C.attribute:void 0,m=p=>{let u=r?.find(w=>w.value===p);return u?.name?u.name:e.formatAsState||!i?M.formatEntityState(V,p):M.formatEntityAttributeValue(V,i,p==="true"?!0:p==="false"?!1:p)},s=t.map(p=>{let u=r?.find(e1=>e1.value===p)?.icon,w=u?void 0:e.optionIcons?.[p];return{value:p,label:m(p),...u?{icon:u}:{},...w?{iconPath:w}:{}}}),A=p=>i&&!e.formatAsState?o`<ha-attribute-icon
            slot="icon"
            .hass=${M}
            .stateObj=${V}
            .attribute=${i}
            .attributeValue=${p}
          ></ha-attribute-icon>`:o`<ha-state-icon
            slot="icon"
            .hass=${M}
            .stateObj=${V}
            .stateValue=${p}
          ></ha-state-icon>`,c=!i&&d1.includes(h(V.entity_id));return o`
      <ha-control-select-menu
        .label=${this._label(C,V)}
        .value=${e.value(V)}
        .options=${s}
        .renderIcon=${C.icon||e.attributeIcons===!1?void 0:A}
        .disabled=${V.state==="unavailable"}
        @wa-select=${p=>{let u=p.detail?.item?.value;u===void 0||u===e.value(V)||this._call(C,e.service(V),e.data(u),u)}}
      >
        ${this._icon(C,c?V:void 0,c?void 0:e.icon,"icon")}
      </ha-control-select-menu>
    `}_renderToggle(C,V){let M=h(V.entity_id),e=!g0.includes(V.state),r=V.state==="unavailable",t=()=>{C.perform_action?this._call(C,["",""],{},void 0):M==="lock"?this.hass.callService("lock",e?"lock":"unlock",{entity_id:V.entity_id}):M==="cover"||M==="valve"?this.hass.callService(M,"toggle",{entity_id:V.entity_id}):this.hass.callService("homeassistant","toggle",{entity_id:V.entity_id})};return o`
      <button
        class=${M1({chip:!0,toggle:!0,active:e})}
        role="switch"
        aria-checked=${String(e)}
        ?disabled=${r}
        @click=${t}
      >
        <div class="icon">${this._icon(C,V,void 0)}</div>
        <div class="content">
          <p class="label">${this._label(C,V)}</p>
          <p class="value">${this.hass.formatEntityState(V)}</p>
        </div>
      </button>
    `}_renderNumber(C,V,M){let e=this.hass,r=V.attributes,t=C.min??Number(r.min??0),i=C.max??Number(r.max??100),m=C.step??Number(r.step??1),s=this._pending[M]??Number(C.attribute?r[C.attribute]:V.state),A=Number.isFinite(s),c=V.state==="unavailable"||!A,p=(String(m).split(".")[1]??"").length,u=A&&(this._pending[M]!==void 0||C.attribute)?`${s.toFixed(p)}${r.unit_of_measurement?` ${r.unit_of_measurement}`:""}`:e.formatEntityState(V),w=e1=>{let r1=Math.min(i,Math.max(t,Number((s+e1*m).toFixed(p))));r1!==s&&(this._pending={...this._pending,[M]:r1},clearTimeout(this._timers[M]),this._timers[M]=setTimeout(()=>{let P=h(V.entity_id);this._call(C,[P,"set_value"],{value:r1},r1);let t1={...this._pending};delete t1[M],this._pending=t1},O0))};return o`
      <div
        class="chip number"
        ?disabled=${c}
        role="group"
        aria-label=${this._label(C,V)}
      >
        <ha-icon-button
          .label=${e.localize("ui.card.counter.actions.decrement")||"\u2212"}
          .path=${D5}
          .disabled=${c||s<=t}
          @click=${()=>w(-1)}
        ></ha-icon-button>
        <div class="content center">
          <p class="label">${this._label(C,V)}</p>
          <p class="value">${u}</p>
        </div>
        <ha-icon-button
          .label=${e.localize("ui.card.counter.actions.increment")||"+"}
          .path=${W5}
          .disabled=${c||s>=i}
          @click=${()=>w(1)}
        ></ha-icon-button>
      </div>
    `}_runAction(C,V){if(V.action!=="none"){if(V.action==="more-info"){let M=V.entity??C.entity;M&&b(this,"hass-more-info",{entityId:M});return}b(this,"hass-action",{config:{entity:C.entity,tap_action:V},action:"tap"})}}_renderButton(C,V){let M=C.entity?h(C.entity):"",e=()=>{if(C.tap_action){this._runAction(C,C.tap_action);return}let r=C.perform_action??f0[M]??(C.entity?"homeassistant.toggle":void 0);if(!r)return;let[t,i]=M5(r);this.hass.callService(t,i,{...C.entity?{entity_id:C.entity}:{},...C.data})};return o`
      <ha-control-button
        .label=${this._label(C,V)}
        .disabled=${V?.state==="unavailable"}
        @click=${e}
      >
        ${this._icon(C,V,void 0)}
      </ha-control-button>
    `}_renderAction(C,V){let M=C.tap_action??{action:V?"more-info":"none"},e=C.show_arrow??["navigate","more-info"].includes(M.action),r=C.value??(V?this.hass.formatEntityState(V):"");return o`
      <button class="chip action" @click=${()=>this._runAction(C,M)}>
        <div class="icon">${this._icon(C,V,void 0)}</div>
        <div class="content">
          <p class="label">${this._label(C,V)}</p>
          ${r?o`<p class="value">${r}</p>`:d}
        </div>
        ${e?o`<div class="icon">
                <ha-svg-icon .path=${g5}></ha-svg-icon>
              </div>`:d}
      </button>
    `}_renderItem(C,V){let M=this._stateObj(C),e=w1(C);if(e==="action")return this._renderAction(C,M);if(e==="button")return this._renderButton(C,M);if(!M)return o`<div class="chip" disabled>
        <div class="content">
          <p class="label">${C.name??C.entity}</p>
          <p class="value">
            ${this.hass.localize("state.default.unavailable")}
          </p>
        </div>
      </div>`;switch(e){case"select":return this._renderSelect(C,M);case"toggle":return this._renderToggle(C,M);case"number":return this._renderNumber(C,M,V);default:return d}}_renderWrapped(C){let V=C.length;return o`
      <div class="wrap-controls">
        <div
          class=${M1({"wrap-scroll":!0,[`items-${V}`]:!0,multiline:V>=4})}
        >
          ${C}
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return d;let C=this._config.appearance??"plain",V=this._config.controls.map((r,t)=>({item:r,index:t})),M=V.filter(({item:r})=>w1(r)==="button"),e=V.filter(({item:r})=>w1(r)!=="button");return o`
      <ha-card class=${C}>
        ${this._ready?V.length?o`
                  ${M.length?o`<div class="buttons">
                          <ha-control-button-group>
                            ${M.map(({item:r,index:t})=>this._renderItem(r,t))}
                          </ha-control-button-group>
                        </div>`:d}
                  ${e.length?this._config.wrap?this._renderWrapped(e.map(({item:r,index:t})=>this._renderItem(r,t))):o`<ha-more-info-control-select-container>
                            ${e.map(({item:r,index:t})=>this._renderItem(r,t))}
                          </ha-more-info-control-select-container>`:d}
                `:o`<p class="empty">
                  ${l(this.hass,"controls.empty")}
                </p>`:d}
      </ha-card>
    `}};R=$($0),r5=new WeakMap,t5=new WeakMap,i5=new WeakMap,o5=new WeakMap,v(R,4,"hass",D0,K,r5),v(R,4,"_config",E0,K,t5),v(R,4,"_ready",F0,K,i5),v(R,4,"_pending",R0,K,o5),E(R,K),n(K,"styles",[i2,B0,g`
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
    `]);customElements.get(P1)||customElements.define(P1,K);var T1="more-info-state-card",$7={temperature:["show-secondary","prevent-interaction-on-scroll"],climate_humidity:["show-current","prevent-interaction-on-scroll"],humidity:["show-secondary","prevent-interaction-on-scroll"],water_heater:["show-current","prevent-interaction-on-scroll"]},N7=(L,H)=>{let C=h(H.entity_id),V=H.attributes;if(C==="light"&&H.state==="on"&&V.brightness!=null)return L.formatEntityAttributeValue(H,"brightness");if(C==="fan"&&H.state==="on"&&V.percentage!=null)return L.formatEntityAttributeValue(H,"percentage");if((C==="cover"||C==="valve")&&V.current_position!=null&&H.state!=="unavailable")return`${L.formatEntityState(H)} \xB7 ${L.formatEntityAttributeValue(H,"current_position")}`},N0,I0,W0,U0,I,a5,A5,d5,Y=class extends(U0=O,W0=[k({attribute:!1})],I0=[S()],N0=[S()],U0){constructor(){super(...arguments);x(this,a5,a(I,8,this)),a(I,11,this);x(this,A5,a(I,12,this)),a(I,15,this);x(this,d5,a(I,16,this,!1)),a(I,19,this);n(this,"_controlElement");n(this,"_controlTag");n(this,"_loadingKey")}static getConfigForm(){return P0()}static getStubConfig(C,V){let M=V.find(e=>e.startsWith("light."))??V.find(e=>e5(C.states[e]))??V[0];return{type:`custom:${T1}`,entity:M}}setConfig(C){if(!C?.entity)throw new Error('"entity" is required');if(C.control&&C.control!=="auto"&&C.control!=="none"&&!(C.control in n1))throw new Error(`Unknown control "${C.control}"`);this._config=C,this._ready=!1,this._loadingKey=void 0}getCardSize(){return 7}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _controlName(){let C=this._config?.control??"auto";if(C!=="none")return C!=="auto"?C:this._stateObj?e5(this._stateObj):void 0}willUpdate(){if(this._ready||!this._config||!this._stateObj)return;let C=this._controlName,V=C?n1[C]:void 0,M=this._showState&&this._config.show_last_changed!==!1,e=`${this._config.entity}:${C}:${M}`;if(e===this._loadingKey)return;this._loadingKey=e;let r=[];V&&r.push(_1(V.load,[V.tag])),M&&r.push(_1("switch",["ha-more-info-state-header"])),Promise.all(r).then(()=>{this._loadingKey===e&&(this._ready=!0)})}get _showState(){let C=h(this._config.entity);return this._config.show_state??!y0.includes(C)}_control(C){let V=this._controlName;if(!V)return d;let{tag:M}=n1[V];if(this._controlTag!==M){this._controlTag=M,this._controlElement=document.createElement(M);for(let e of $7[V]??[])this._controlElement.setAttribute(e,"")}return this._controlElement.stateObj=C,this._controlElement.hass=this.hass,this._controlElement}_header(C){let V=this._config;if(!this._showState)return d;let M=V.state_override||N7(this.hass,C);return V.show_last_changed===!1?o`<p class="state">
        ${M??this.hass.formatEntityState(C)}
      </p>`:o`
      <ha-more-info-state-header
        .hass=${this.hass}
        .stateObj=${C}
        .stateOverride=${M}
      ></ha-more-info-state-header>
    `}render(){if(!this._config||!this.hass)return d;let C=this._stateObj,V=this._config.appearance??"plain";return C?o`
      <ha-card class=${V} .label=${z(C)}>
        ${this._ready?o`
                ${this._header(C)}
                <div class="controls">${this._control(C)}</div>
              `:d}
      </ha-card>
    `:o`<ha-card class=${V}>
        <ha-alert alert-type="warning">
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity})}
        </ha-alert>
      </ha-card>`}};I=$(U0),a5=new WeakMap,A5=new WeakMap,d5=new WeakMap,v(I,4,"hass",W0,Y,a5),v(I,4,"_config",I0,Y,A5),v(I,4,"_ready",N0,Y,d5),E(I,Y),n(Y,"styles",[i2,g`
      ha-card {
        display: flex;
        flex-direction: column;
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
      .controls > *:not(:last-child) {
        margin-bottom: var(--ha-space-6);
      }
      /* ha-more-info-state-header .state */
      p.state {
        text-align: center;
        margin: 0 0 var(--ha-space-5);
        font-weight: var(--ha-font-weight-normal);
        font-size: 36px;
        line-height: var(--ha-line-height-condensed);
      }
    `]);customElements.get(T1)||customElements.define(T1,Y);var G0,z0,Q0,K0,q0,F,n5,p5,m5,l5,q=class extends(q0=O,K0=[k({attribute:!1})],Q0=[k({attribute:!1})],z0=[S()],G0=[S()],q0){constructor(){super(...arguments);x(this,n5,a(F,8,this)),a(F,11,this);x(this,p5,a(F,12,this)),a(F,15,this);x(this,m5,a(F,16,this)),a(F,19,this);x(this,l5,a(F,20,this,"hidden")),a(F,23,this);n(this,"connectedWhileHidden",!0);n(this,"_preview",!1);n(this,"_previewSection");n(this,"_previewSectionKey")}static async getConfigElement(){return document.createElement(c1)}static getStubConfig(C,V){let M=V.find(i=>i.startsWith("light."))??V[0],e=M?C.states[M]:void 0,r=e?p3(z(e)):"",t=Math.random().toString(36).slice(2,6);return{type:`custom:${f2}`,popup_id:r?`${r}_${t}`:`popup_${t}`,cards:[]}}get preview(){return this._preview}set preview(C){this._preview=!!C,this._syncSurface()}get popupConfig(){return this._config}setConfig(C){this._config=J1(h1(C)),this._syncSurface()}getCardSize(){return this._surface==="hidden"?0:this._surface==="preview"?6:1}getGridOptions(){return this._computeSurface()==="preview"?{columns:"full",rows:"auto"}:{columns:6,rows:1,min_columns:3,max_rows:1}}openPopup(C){let V=this._config;V&&w3().then(M=>{if(M.includes("ha-adaptive-dialog")||M.includes("hui-section")){b(this,"hass-notification",{message:l(this.hass,"card.missing_elements")});return}b(this,"show-dialog",{dialogTag:G,dialogImport:()=>Promise.resolve(),dialogParams:{config:V,view:C?.view},addHistory:!0})})}connectedCallback(){super.connectedCallback(),Q2().register(this),this._syncSurface()}disconnectedCallback(){super.disconnectedCallback(),Q2().unregister(this)}_computeSurface(){return this._preview?this.closest("hui-card-edit-mode, hui-card-options")?"placeholder":"preview":"hidden"}_syncSurface(){let C=this._computeSurface();C!==this._surface&&(this._surface=C);let V=C==="hidden";this.hasAttribute("hidden")!==V&&(this.toggleAttribute("hidden",V),this.isConnected&&b(this,"card-visibility-changed",{value:!V}))}willUpdate(C){C.has("hass")&&this._previewSection&&(this._previewSection.hass=this.hass)}render(){return!this._config||!this.hass||this._surface==="hidden"?d:P3(this.hass.config.version)?this._surface==="placeholder"?this._renderPlaceholder(this._config):this._renderPreview(this._config):o`<ha-alert alert-type="warning">
        ${l(this.hass,"card.unsupported_version",{version:g1.join(".")})}
      </ha-alert>`}_renderPlaceholder(C){let V=this.hass,M=C.entity?V.states[C.entity]:void 0,e=C.name??(M?z(M):C.popup_id),r=C.cards.length,t=r===1?l(V,"card.cards_count_one"):l(V,"card.cards_count",{count:r});return o`
      <ha-card class="placeholder">
        <ha-tile-container>
          <ha-tile-icon
            slot="icon"
            .icon=${C.icon}
            .iconPath=${C.icon?void 0:D1}
          >
            ${C.icon||!M?d:o`<ha-state-icon
                    slot="icon"
                    .stateObj=${M}
                    .hass=${V}
                  ></ha-state-icon>`}
          </ha-tile-icon>
          <ha-tile-info slot="info">
            <span slot="primary">${e}</span>
            <span
              slot="secondary"
              class="secondary"
              title=${l(V,"card.hidden_hint",{id:C.popup_id})}
            >
              <ha-svg-icon .path=${T5}></ha-svg-icon>
              #${C.popup_id} · ${t}
            </span>
          </ha-tile-info>
        </ha-tile-container>
      </ha-card>
    `}_renderPreview(C){let V=this.hass,M={type:"grid",column_span:C.column_span,cards:C.cards},e=JSON.stringify(M);this._previewSection??=document.createElement("hui-section"),this._previewSection.hass=V,this._previewSectionKey!==e&&(this._previewSectionKey=e,this._previewSection.config=M);let r=V2(V,C,{entityId:C.entity,view:"root",children:[]});return o`
      <div class="surface" inert>
        <ha-dialog-header>
          <ha-icon-button
            slot="navigationIcon"
            .label=${V.localize("ui.common.close")}
            .path=${R1}
          ></ha-icon-button>
          ${L2(V,r,"title")}
        </ha-dialog-header>
        <div
          class="body"
          style=${L1({"--column-span":String(C.column_span)})}
        >
          ${this._previewSection}
        </div>
      </div>
    `}};F=$(q0),n5=new WeakMap,p5=new WeakMap,m5=new WeakMap,l5=new WeakMap,v(F,4,"hass",K0,q,n5),v(F,4,"layout",Q0,q,p5),v(F,4,"_config",z0,q,m5),v(F,4,"_surface",G0,q,l5),E(F,q),n(q,"styles",[C2,H2,g`
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
    `]);customElements.get(g2)||(customElements.define(g2,q),window.customCards=window.customCards??[],window.customCards.push({type:f2,name:l(void 0,"card.name"),description:l(void 0,"card.description"),preview:!1,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),window.customCards.push({type:T1,name:l(void 0,"state_card.name"),description:l(void 0,"state_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"},{type:P1,name:l(void 0,"controls_card.name"),description:l(void 0,"controls_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),console.info("%c MORE-INFO-POPUP-CARD %c 0.1.0 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;"));export{q as MoreInfoPopupCard};
//# sourceMappingURL=more-info-popup-card.js.map
