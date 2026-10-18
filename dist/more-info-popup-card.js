var L7=Object.create;var d2=Object.defineProperty;var M7=Object.getOwnPropertyDescriptor;var u5=(L,V)=>(V=Symbol[L])?V:Symbol.for("Symbol."+L),i1=L=>{throw TypeError(L)};var S5=(L,V,C)=>V in L?d2(L,V,{enumerable:!0,configurable:!0,writable:!0,value:C}):L[V]=C;var s5=(L,V)=>d2(L,"name",{value:V,configurable:!0});var N=L=>[,,,L7(L?.[u5("metadata")]??null)],h5=["class","method","getter","setter","accessor","field","value","get","set"],l1=L=>L!==void 0&&typeof L!="function"?i1("Function expected"):L,e7=(L,V,C,H,M)=>({kind:h5[L],name:V,metadata:H,addInitializer:e=>C._?i1("Already initialized"):M.push(l1(e||null))}),D=(L,V)=>S5(V,u5("metadata"),L[3]),a=(L,V,C,H)=>{for(var M=0,e=L[V>>1],r=e&&e.length;M<r;M++)V&1?e[M].call(C):H=e[M].call(C,H);return H},x=(L,V,C,H,M,e)=>{var r,t,i,p,v,A=V&7,u=!!(V&8),m=!!(V&16),c=A>3?L.length+1:A?u?1:2:0,w=h5[A+5],Y=A>3&&(L[c-1]=[]),X=L[c]||(L[c]=[]),_=A&&(!m&&!u&&(M=M.prototype),A<5&&(A>3||!m)&&M7(A<4?M:{get[C](){return Z5(this,e)},set[C](g){return c5(this,e,g)}},C));A?m&&A<4&&s5(e,(A>2?"set ":A>1?"get ":"")+C):s5(M,C);for(var J=H.length-1;J>=0;J--)p=e7(A,C,i={},L[3],X),A&&(p.static=u,p.private=m,v=p.access={has:m?g=>r7(M,g):g=>C in g},A^3&&(v.get=m?g=>(A^1?Z5:t7)(g,M,A^4?e:_.get):g=>g[C]),A>2&&(v.set=m?(g,m1)=>c5(g,M,m1,A^4?e:_.set):(g,m1)=>g[C]=m1)),t=(0,H[J])(A?A<4?m?e:_[w]:A>4?void 0:{get:_.get,set:_.set}:M,p),i._=1,A^4||t===void 0?l1(t)&&(A>4?Y.unshift(t):A?m?e=t:_[w]=t:M=t):typeof t!="object"||t===null?i1("Object expected"):(l1(r=t.get)&&(_.get=r),l1(r=t.set)&&(_.set=r),l1(r=t.init)&&Y.unshift(r));return A||D(L,M),_&&d2(M,C,_),m?A^4?e:_:M},n=(L,V,C)=>S5(L,typeof V!="symbol"?V+"":V,C),n2=(L,V,C)=>V.has(L)||i1("Cannot "+C),r7=(L,V)=>Object(V)!==V?i1('Cannot use the "in" operator on this value'):L.has(V),Z5=(L,V,C)=>(n2(L,V,"read from private field"),C?C.call(L):V.get(L)),s=(L,V,C)=>V.has(L)?i1("Cannot add the same private member more than once"):V instanceof WeakSet?V.add(L):V.set(L,C),c5=(L,V,C,H)=>(n2(L,V,"write to private field"),H?H.call(L,C):V.set(L,C),C),t7=(L,V,C)=>(n2(L,V,"access private method"),C);var f5="M17 18H21V16H17V14L14 17L17 20V18M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var p2="M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var E1="M6 14H9L5 18L1 14H4C4 11.3 5.7 6.6 11 6.1V8.1C7.6 8.6 6 11.9 6 14M20 14C20 11.3 18.3 6.6 13 6.1V8.1C16.4 8.7 18 11.9 18 14H15L19 18L23 14H20Z",g5="M13 8.1V6.1C18.3 6.6 20 11.4 20 14H23L20.1 16.9L17.2 14H18C18 11.9 16.4 8.6 13 8.1M7.8 7.1L2.4 1.7L1.1 3L6.3 8.2C4.7 10 4 12.4 4 14H1L5 18L9 14H6C6 12.7 6.6 11 7.9 9.7L20.9 22.7L22.2 21.4L9.3 8.7L7.8 7.1M11 6.1L9.5 6.4L11 7.8V6.1Z";var O5="M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z";var b5="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var D1="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var $1="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z";var N1="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z";var y5="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",k5="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z",w5="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z";var _5="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74";var P5="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var T5="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z";var I1="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z";var B5="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";var R5="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";var v1="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";var F5="M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z";var E5="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z";var D5="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";var $5="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z";var N5="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z";var I5="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z";var W5="M19,13H5V11H19V13Z";var U5="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z";var G5="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z";var z5="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var Q5="M8,5.14V19.14L19,12.14L8,5.14Z";var K5="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var m2="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z";var W1="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var q5="M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z";var j5="M18,18H6V6H18V18Z";var Y5="M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";var X5="M18,11H14.82C14.4,9.84 13.3,9 12,9C10.7,9 9.6,9.84 9.18,11H6C5.67,11 4,10.9 4,9V8C4,6.17 5.54,6 6,6H16.18C16.6,7.16 17.7,8 19,8A3,3 0 0,0 22,5A3,3 0 0,0 19,2C17.7,2 16.6,2.84 16.18,4H6C4.39,4 2,5.06 2,8V9C2,11.94 4.39,13 6,13H9.18C9.6,14.16 10.7,15 12,15C13.3,15 14.4,14.16 14.82,13H18C18.33,13 20,13.1 20,15V16C20,17.83 18.46,18 18,18H7.82C7.4,16.84 6.3,16 5,16A3,3 0 0,0 2,19A3,3 0 0,0 5,22C6.3,22 7.4,21.16 7.82,20H18C19.61,20 22,18.93 22,16V15C22,12.07 19.61,11 18,11M19,4A1,1 0 0,1 20,5A1,1 0 0,1 19,6A1,1 0 0,1 18,5A1,1 0 0,1 19,4M5,20A1,1 0 0,1 4,19A1,1 0 0,1 5,18A1,1 0 0,1 6,19A1,1 0 0,1 5,20Z";var o1="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";var J5="M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z";var U1=globalThis,G1=U1.ShadowRoot&&(U1.ShadyCSS===void 0||U1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l2=Symbol(),C3=new WeakMap,x1=class{constructor(V,C,H){if(this._$cssResult$=!0,H!==l2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=V,this.t=C}get styleSheet(){let V=this.o,C=this.t;if(G1&&V===void 0){let H=C!==void 0&&C.length===1;H&&(V=C3.get(C)),V===void 0&&((this.o=V=new CSSStyleSheet).replaceSync(this.cssText),H&&C3.set(C,V))}return V}toString(){return this.cssText}},H3=L=>new x1(typeof L=="string"?L:L+"",void 0,l2),O=(L,...V)=>{let C=L.length===1?L[0]:V.reduce((H,M,e)=>H+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(M)+L[e+1],L[0]);return new x1(C,L,l2)},V3=(L,V)=>{if(G1)L.adoptedStyleSheets=V.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of V){let H=document.createElement("style"),M=U1.litNonce;M!==void 0&&H.setAttribute("nonce",M),H.textContent=C.cssText,L.appendChild(H)}},v2=G1?L=>L:L=>L instanceof CSSStyleSheet?(V=>{let C="";for(let H of V.cssRules)C+=H.cssText;return H3(C)})(L):L;var{is:i7,defineProperty:o7,getOwnPropertyDescriptor:a7,getOwnPropertyNames:A7,getOwnPropertySymbols:d7,getPrototypeOf:n7}=Object,z1=globalThis,L3=z1.trustedTypes,p7=L3?L3.emptyScript:"",m7=z1.reactiveElementPolyfillSupport,s1=(L,V)=>L,Z1={toAttribute(L,V){switch(V){case Boolean:L=L?p7:null;break;case Object:case Array:L=L==null?L:JSON.stringify(L)}return L},fromAttribute(L,V){let C=L;switch(V){case Boolean:C=L!==null;break;case Number:C=L===null?null:Number(L);break;case Object:case Array:try{C=JSON.parse(L)}catch{C=null}}return C}},Q1=(L,V)=>!i7(L,V),M3={attribute:!0,type:String,converter:Z1,reflect:!1,useDefault:!1,hasChanged:Q1};Symbol.metadata??=Symbol("metadata"),z1.litPropertyMetadata??=new WeakMap;var W=class extends HTMLElement{static addInitializer(V){this._$Ei(),(this.l??=[]).push(V)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(V,C=M3){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(V)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(V,C),!C.noAccessor){let H=Symbol(),M=this.getPropertyDescriptor(V,H,C);M!==void 0&&o7(this.prototype,V,M)}}static getPropertyDescriptor(V,C,H){let{get:M,set:e}=a7(this.prototype,V)??{get(){return this[C]},set(r){this[C]=r}};return{get:M,set(r){let t=M?.call(this);e?.call(this,r),this.requestUpdate(V,t,H)},configurable:!0,enumerable:!0}}static getPropertyOptions(V){return this.elementProperties.get(V)??M3}static _$Ei(){if(this.hasOwnProperty(s1("elementProperties")))return;let V=n7(this);V.finalize(),V.l!==void 0&&(this.l=[...V.l]),this.elementProperties=new Map(V.elementProperties)}static finalize(){if(this.hasOwnProperty(s1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(s1("properties"))){let C=this.properties,H=[...A7(C),...d7(C)];for(let M of H)this.createProperty(M,C[M])}let V=this[Symbol.metadata];if(V!==null){let C=litPropertyMetadata.get(V);if(C!==void 0)for(let[H,M]of C)this.elementProperties.set(H,M)}this._$Eh=new Map;for(let[C,H]of this.elementProperties){let M=this._$Eu(C,H);M!==void 0&&this._$Eh.set(M,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(V){let C=[];if(Array.isArray(V)){let H=new Set(V.flat(1/0).reverse());for(let M of H)C.unshift(v2(M))}else V!==void 0&&C.push(v2(V));return C}static _$Eu(V,C){let H=C.attribute;return H===!1?void 0:typeof H=="string"?H:typeof V=="string"?V.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(V=>this.enableUpdating=V),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(V=>V(this))}addController(V){(this._$EO??=new Set).add(V),this.renderRoot!==void 0&&this.isConnected&&V.hostConnected?.()}removeController(V){this._$EO?.delete(V)}_$E_(){let V=new Map,C=this.constructor.elementProperties;for(let H of C.keys())this.hasOwnProperty(H)&&(V.set(H,this[H]),delete this[H]);V.size>0&&(this._$Ep=V)}createRenderRoot(){let V=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return V3(V,this.constructor.elementStyles),V}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(V=>V.hostConnected?.())}enableUpdating(V){}disconnectedCallback(){this._$EO?.forEach(V=>V.hostDisconnected?.())}attributeChangedCallback(V,C,H){this._$AK(V,H)}_$ET(V,C){let H=this.constructor.elementProperties.get(V),M=this.constructor._$Eu(V,H);if(M!==void 0&&H.reflect===!0){let e=(H.converter?.toAttribute!==void 0?H.converter:Z1).toAttribute(C,H.type);this._$Em=V,e==null?this.removeAttribute(M):this.setAttribute(M,e),this._$Em=null}}_$AK(V,C){let H=this.constructor,M=H._$Eh.get(V);if(M!==void 0&&this._$Em!==M){let e=H.getPropertyOptions(M),r=typeof e.converter=="function"?{fromAttribute:e.converter}:e.converter?.fromAttribute!==void 0?e.converter:Z1;this._$Em=M;let t=r.fromAttribute(C,e.type);this[M]=t??this._$Ej?.get(M)??t,this._$Em=null}}requestUpdate(V,C,H,M=!1,e){if(V!==void 0){let r=this.constructor;if(M===!1&&(e=this[V]),H??=r.getPropertyOptions(V),!((H.hasChanged??Q1)(e,C)||H.useDefault&&H.reflect&&e===this._$Ej?.get(V)&&!this.hasAttribute(r._$Eu(V,H))))return;this.C(V,C,H)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(V,C,{useDefault:H,reflect:M,wrapped:e},r){H&&!(this._$Ej??=new Map).has(V)&&(this._$Ej.set(V,r??C??this[V]),e!==!0||r!==void 0)||(this._$AL.has(V)||(this.hasUpdated||H||(C=void 0),this._$AL.set(V,C)),M===!0&&this._$Em!==V&&(this._$Eq??=new Set).add(V))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let V=this.scheduleUpdate();return V!=null&&await V,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[M,e]of this._$Ep)this[M]=e;this._$Ep=void 0}let H=this.constructor.elementProperties;if(H.size>0)for(let[M,e]of H){let{wrapped:r}=e,t=this[M];r!==!0||this._$AL.has(M)||t===void 0||this.C(M,void 0,e,t)}}let V=!1,C=this._$AL;try{V=this.shouldUpdate(C),V?(this.willUpdate(C),this._$EO?.forEach(H=>H.hostUpdate?.()),this.update(C)):this._$EM()}catch(H){throw V=!1,this._$EM(),H}V&&this._$AE(C)}willUpdate(V){}_$AE(V){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(V)),this.updated(V)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(V){return!0}update(V){this._$Eq&&=this._$Eq.forEach(C=>this._$ET(C,this[C])),this._$EM()}updated(V){}firstUpdated(V){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[s1("elementProperties")]=new Map,W[s1("finalized")]=new Map,m7?.({ReactiveElement:W}),(z1.reactiveElementVersions??=[]).push("2.1.2");var s2=globalThis,e3=L=>L,K1=s2.trustedTypes,r3=K1?K1.createPolicy("lit-html",{createHTML:L=>L}):void 0,Z2="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,c2="?"+U,l7=`<${c2}>`,L1=document,u1=()=>L1.createComment(""),S1=L=>L===null||typeof L!="object"&&typeof L!="function",u2=Array.isArray,d3=L=>u2(L)||typeof L?.[Symbol.iterator]=="function",x2=`[ 	
\f\r]`,c1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,t3=/-->/g,i3=/>/g,H1=RegExp(`>|${x2}(?:([^\\s"'>=/]+)(${x2}*=${x2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),o3=/'/g,a3=/"/g,n3=/^(?:script|style|textarea|title)$/i,S2=L=>(V,...C)=>({_$litType$:L,strings:V,values:C}),o=S2(1),t9=S2(2),i9=S2(3),$=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),A3=new WeakMap,V1=L1.createTreeWalker(L1,129);function p3(L,V){if(!u2(L)||!L.hasOwnProperty("raw"))throw Error("invalid template strings array");return r3!==void 0?r3.createHTML(V):V}var m3=(L,V)=>{let C=L.length-1,H=[],M,e=V===2?"<svg>":V===3?"<math>":"",r=c1;for(let t=0;t<C;t++){let i=L[t],p,v,A=-1,u=0;for(;u<i.length&&(r.lastIndex=u,v=r.exec(i),v!==null);)u=r.lastIndex,r===c1?v[1]==="!--"?r=t3:v[1]!==void 0?r=i3:v[2]!==void 0?(n3.test(v[2])&&(M=RegExp("</"+v[2],"g")),r=H1):v[3]!==void 0&&(r=H1):r===H1?v[0]===">"?(r=M??c1,A=-1):v[1]===void 0?A=-2:(A=r.lastIndex-v[2].length,p=v[1],r=v[3]===void 0?H1:v[3]==='"'?a3:o3):r===a3||r===o3?r=H1:r===t3||r===i3?r=c1:(r=H1,M=void 0);let m=r===H1&&L[t+1].startsWith("/>")?" ":"";e+=r===c1?i+l7:A>=0?(H.push(p),i.slice(0,A)+Z2+i.slice(A)+U+m):i+U+(A===-2?t:m)}return[p3(L,e+(L[C]||"<?>")+(V===2?"</svg>":V===3?"</math>":"")),H]},h1=class L{constructor({strings:V,_$litType$:C},H){let M;this.parts=[];let e=0,r=0,t=V.length-1,i=this.parts,[p,v]=m3(V,C);if(this.el=L.createElement(p,H),V1.currentNode=this.el.content,C===2||C===3){let A=this.el.content.firstChild;A.replaceWith(...A.childNodes)}for(;(M=V1.nextNode())!==null&&i.length<t;){if(M.nodeType===1){if(M.hasAttributes())for(let A of M.getAttributeNames())if(A.endsWith(Z2)){let u=v[r++],m=M.getAttribute(A).split(U),c=/([.?@])?(.*)/.exec(u);i.push({type:1,index:e,name:c[2],strings:m,ctor:c[1]==="."?j1:c[1]==="?"?Y1:c[1]==="@"?X1:e1}),M.removeAttribute(A)}else A.startsWith(U)&&(i.push({type:6,index:e}),M.removeAttribute(A));if(n3.test(M.tagName)){let A=M.textContent.split(U),u=A.length-1;if(u>0){M.textContent=K1?K1.emptyScript:"";for(let m=0;m<u;m++)M.append(A[m],u1()),V1.nextNode(),i.push({type:2,index:++e});M.append(A[u],u1())}}}else if(M.nodeType===8)if(M.data===c2)i.push({type:2,index:e});else{let A=-1;for(;(A=M.data.indexOf(U,A+1))!==-1;)i.push({type:7,index:e}),A+=U.length-1}e++}}static createElement(V,C){let H=L1.createElement("template");return H.innerHTML=V,H}};function M1(L,V,C=L,H){if(V===$)return V;let M=H!==void 0?C._$Co?.[H]:C._$Cl,e=S1(V)?void 0:V._$litDirective$;return M?.constructor!==e&&(M?._$AO?.(!1),e===void 0?M=void 0:(M=new e(L),M._$AT(L,C,H)),H!==void 0?(C._$Co??=[])[H]=M:C._$Cl=M),M!==void 0&&(V=M1(L,M._$AS(L,V.values),M,H)),V}var q1=class{constructor(V,C){this._$AV=[],this._$AN=void 0,this._$AD=V,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(V){let{el:{content:C},parts:H}=this._$AD,M=(V?.creationScope??L1).importNode(C,!0);V1.currentNode=M;let e=V1.nextNode(),r=0,t=0,i=H[0];for(;i!==void 0;){if(r===i.index){let p;i.type===2?p=new a1(e,e.nextSibling,this,V):i.type===1?p=new i.ctor(e,i.name,i.strings,this,V):i.type===6&&(p=new J1(e,this,V)),this._$AV.push(p),i=H[++t]}r!==i?.index&&(e=V1.nextNode(),r++)}return V1.currentNode=L1,M}p(V){let C=0;for(let H of this._$AV)H!==void 0&&(H.strings!==void 0?(H._$AI(V,H,C),C+=H.strings.length-2):H._$AI(V[C])),C++}},a1=class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(V,C,H,M){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=V,this._$AB=C,this._$AM=H,this.options=M,this._$Cv=M?.isConnected??!0}get parentNode(){let V=this._$AA.parentNode,C=this._$AM;return C!==void 0&&V?.nodeType===11&&(V=C.parentNode),V}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(V,C=this){V=M1(this,V,C),S1(V)?V===d||V==null||V===""?(this._$AH!==d&&this._$AR(),this._$AH=d):V!==this._$AH&&V!==$&&this._(V):V._$litType$!==void 0?this.$(V):V.nodeType!==void 0?this.T(V):d3(V)?this.k(V):this._(V)}O(V){return this._$AA.parentNode.insertBefore(V,this._$AB)}T(V){this._$AH!==V&&(this._$AR(),this._$AH=this.O(V))}_(V){this._$AH!==d&&S1(this._$AH)?this._$AA.nextSibling.data=V:this.T(L1.createTextNode(V)),this._$AH=V}$(V){let{values:C,_$litType$:H}=V,M=typeof H=="number"?this._$AC(V):(H.el===void 0&&(H.el=h1.createElement(p3(H.h,H.h[0]),this.options)),H);if(this._$AH?._$AD===M)this._$AH.p(C);else{let e=new q1(M,this),r=e.u(this.options);e.p(C),this.T(r),this._$AH=e}}_$AC(V){let C=A3.get(V.strings);return C===void 0&&A3.set(V.strings,C=new h1(V)),C}k(V){u2(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,H,M=0;for(let e of V)M===C.length?C.push(H=new L(this.O(u1()),this.O(u1()),this,this.options)):H=C[M],H._$AI(e),M++;M<C.length&&(this._$AR(H&&H._$AB.nextSibling,M),C.length=M)}_$AR(V=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);V!==this._$AB;){let H=e3(V).nextSibling;e3(V).remove(),V=H}}setConnected(V){this._$AM===void 0&&(this._$Cv=V,this._$AP?.(V))}},e1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(V,C,H,M,e){this.type=1,this._$AH=d,this._$AN=void 0,this.element=V,this.name=C,this._$AM=M,this.options=e,H.length>2||H[0]!==""||H[1]!==""?(this._$AH=Array(H.length-1).fill(new String),this.strings=H):this._$AH=d}_$AI(V,C=this,H,M){let e=this.strings,r=!1;if(e===void 0)V=M1(this,V,C,0),r=!S1(V)||V!==this._$AH&&V!==$,r&&(this._$AH=V);else{let t=V,i,p;for(V=e[0],i=0;i<e.length-1;i++)p=M1(this,t[H+i],C,i),p===$&&(p=this._$AH[i]),r||=!S1(p)||p!==this._$AH[i],p===d?V=d:V!==d&&(V+=(p??"")+e[i+1]),this._$AH[i]=p}r&&!M&&this.j(V)}j(V){V===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,V??"")}},j1=class extends e1{constructor(){super(...arguments),this.type=3}j(V){this.element[this.name]=V===d?void 0:V}},Y1=class extends e1{constructor(){super(...arguments),this.type=4}j(V){this.element.toggleAttribute(this.name,!!V&&V!==d)}},X1=class extends e1{constructor(V,C,H,M,e){super(V,C,H,M,e),this.type=5}_$AI(V,C=this){if((V=M1(this,V,C,0)??d)===$)return;let H=this._$AH,M=V===d&&H!==d||V.capture!==H.capture||V.once!==H.once||V.passive!==H.passive,e=V!==d&&(H===d||M);M&&this.element.removeEventListener(this.name,this,H),e&&this.element.addEventListener(this.name,this,V),this._$AH=V}handleEvent(V){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,V):this._$AH.handleEvent(V)}},J1=class{constructor(V,C,H){this.element=V,this.type=6,this._$AN=void 0,this._$AM=C,this.options=H}get _$AU(){return this._$AM._$AU}_$AI(V){M1(this,V)}},l3={M:Z2,P:U,A:c2,C:1,L:m3,R:q1,D:d3,V:M1,I:a1,H:e1,N:Y1,U:X1,B:j1,F:J1},v7=s2.litHtmlPolyfillSupport;v7?.(h1,a1),(s2.litHtmlVersions??=[]).push("3.3.3");var v3=(L,V,C)=>{let H=C?.renderBefore??V,M=H._$litPart$;if(M===void 0){let e=C?.renderBefore??null;H._$litPart$=M=new a1(V.insertBefore(u1(),e),e,void 0,C??{})}return M._$AI(L),M};var h2=globalThis,b=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let V=super.createRenderRoot();return this.renderOptions.renderBefore??=V.firstChild,V}update(V){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(V),this._$Do=v3(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};b._$litElement$=!0,b.finalized=!0,h2.litElementHydrateSupport?.({LitElement:b});var x7=h2.litElementPolyfillSupport;x7?.({LitElement:b});(h2.litElementVersions??=[]).push("4.2.2");var s7={attribute:!0,type:String,converter:Z1,reflect:!1,hasChanged:Q1},Z7=(L=s7,V,C)=>{let{kind:H,metadata:M}=C,e=globalThis.litPropertyMetadata.get(M);if(e===void 0&&globalThis.litPropertyMetadata.set(M,e=new Map),H==="setter"&&((L=Object.create(L)).wrapped=!0),e.set(C.name,L),H==="accessor"){let{name:r}=C;return{set(t){let i=V.get.call(this);V.set.call(this,t),this.requestUpdate(r,i,L,!0,t)},init(t){return t!==void 0&&this.C(r,void 0,L,t),t}}}if(H==="setter"){let{name:r}=C;return function(t){let i=this[r];V.call(this,t),this.requestUpdate(r,i,L,!0,t)}}throw Error("Unsupported decorator location: "+H)};function P(L){return(V,C)=>typeof C=="object"?Z7(L,V,C):((H,M,e)=>{let r=M.hasOwnProperty(e);return M.constructor.createProperty(e,H),r?Object.getOwnPropertyDescriptor(M,e):void 0})(L,V,C)}function h(L){return P({...L,state:!0,attribute:!1})}var H2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},A1=L=>(...V)=>({_$litDirective$:L,values:V}),C1=class{constructor(V){}get _$AU(){return this._$AM._$AU}_$AT(V,C,H){this._$Ct=V,this._$AM=C,this._$Ci=H}_$AS(V,C){return this.update(V,C)}update(V,C){return this.render(...C)}};var x3="important",c7=" !"+x3,r1=A1(class extends C1{constructor(L){if(super(L),L.type!==H2.ATTRIBUTE||L.name!=="style"||L.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(L){return Object.keys(L).reduce((V,C)=>{let H=L[C];return H==null?V:V+`${C=C.includes("-")?C:C.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${H};`},"")}update(L,[V]){let{style:C}=L.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(V)),this.render(V);for(let H of this.ft)V[H]==null&&(this.ft.delete(H),H.includes("-")?C.removeProperty(H):C[H]=null);for(let H in V){let M=V[H];if(M!=null){this.ft.add(H);let e=typeof M=="string"&&M.endsWith(c7);H.includes("-")||e?C.setProperty(H,e?M.slice(0,-11):M,e?x3:""):C[H]=M}}return $}});var g2="more-info-popup-card",O2="more-info-popup-card",G="more-info-popup-dialog",f1="more-info-popup-card-editor",g1={breadcrumb:"auto",mode:"auto",width:"medium",height:"auto",column_span:1,show_header_actions:!0,replace_more_info:!1,nested_more_info:"inline",dismissable:!0,auto_close:0,keep_alive:!1},u7=["auto","dialog","bottom_sheet"],S7=["small","medium","large","full","custom"],h7=["auto","custom"],f7=["inline","dialog"],g7=/^[a-z0-9][a-z0-9_-]*$/,O7=/^\d+(\.\d+)?(px|%|vw|vh|dvh|svh|lvh|em|rem)$/,s3=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^[_-]+|[_-]+$/g,"").slice(0,48),V2=(L,V,C)=>{if(V!==void 0&&!C.includes(V))throw new Error(`"${L}" must be one of: ${C.join(", ")}`)},f2=(L,V)=>{if(V!==void 0&&V!==""&&!O7.test(String(V)))throw new Error(`"${L}" must be a CSS length such as 720px or 80vh`)},O1=L=>{if(!L||typeof L!="object")throw new Error("Invalid configuration");let V=L;if(!V.popup_id||typeof V.popup_id!="string")throw new Error('"popup_id" is required');if(!g7.test(V.popup_id))throw new Error('"popup_id" may only contain lowercase letters, digits, "_" and "-"');if(V.entity!==void 0&&(typeof V.entity!="string"||!V.entity.includes(".")))throw new Error('"entity" must be an entity ID');if(V.cards!==void 0&&!Array.isArray(V.cards))throw new Error('"cards" must be a list');if(V2("mode",V.mode,u7),V2("width",V.width,S7),V2("height",V.height,h7),V2("nested_more_info",V.nested_more_info,f7),f2("custom_width",V.custom_width),f2("min_height",V.min_height),f2("max_height",V.max_height),V.column_span!==void 0&&(!Number.isInteger(V.column_span)||V.column_span<1||V.column_span>4))throw new Error('"column_span" must be an integer between 1 and 4');if(V.auto_close!==void 0&&(typeof V.auto_close!="number"||V.auto_close<0))throw new Error('"auto_close" must be a positive number of seconds');return V},L2=L=>({...g1,...L,cards:L.cards??[]}),Z3=L=>L.width==="custom"?"medium":L.width==="medium"&&L.column_span>1?"large":L.width,c3=L=>{let V={};return L.width==="custom"&&L.custom_width&&(V["--ha-dialog-width-md"]=L.custom_width,V["--ha-bottom-sheet-max-width"]=L.custom_width),L.height==="custom"&&(L.min_height&&(V["--ha-dialog-min-height"]=L.min_height,V["--ha-bottom-sheet-height"]=L.min_height),L.max_height&&(V["--ha-dialog-max-height"]=L.max_height,V["--ha-bottom-sheet-max-height"]=L.max_height)),V};var S=L=>L.substring(0,L.indexOf(".")),S3=L=>L.substring(L.indexOf(".")+1),h3=["scene","automation"],f3=["script"],g3=["camera","configurator"],b7=["counter","input_number","number","proximity","sensor"],y7=["alarm_control_panel","automation","camera","climate","configurator","conversation","counter","cover","date","datetime","fan","group","humidifier","image","input_boolean","input_datetime","lawn_mower","light","lock","media_player","person","remote","script","scene","siren","sun","switch","time","timer","update","vacuum","valve","water_heater","weather"],b1=L=>!!L.user?.is_admin,O3=(L,V)=>L.config.components.includes(V),k7=(L,V)=>O3(L,"history")&&!g3.includes(S(V)),w7=(L,V)=>{if(!O3(L,"logbook")||!L.states[V])return!1;let H=S(V);return!(g3.includes(H)||b7.includes(H))},b3=(L,V,C)=>(!C||y7.includes(S(V)))&&(k7(L,V)||w7(L,V)),b2=L=>b1(L)||!!L.auth.external?.config.hasEntityAddTo,y2=(L,V)=>L.entities[V]?.device_id??null,y3=(L,V)=>(V&&L.devices[V]?.entry_type)==="service"?"service":"device",k3=L=>{if(!L)return!1;let V=S(L.entity_id);return h3.includes(V)&&L.attributes.id||f3.includes(V)?!0:V==="person"&&L.attributes.editable!=="false"},w3=(L,V)=>{let C=S(L.entity_id),H=L.entity_id;return(h3.includes(C)||C==="person")&&(H=L.attributes.id),f3.includes(C)&&(H=V),H?`/config/${C}/edit/${H}`:void 0},z=L=>L.attributes.friendly_name??L.entity_id.substring(L.entity_id.indexOf(".")+1),u3=(L,V)=>{let C=V?L.devices[V]:void 0;return C&&(C.name_by_user||C.name)?.trim()||void 0},k2=(L,V)=>{let C=L.states[V],H=L.entities[V];if(!H)return[C?z(C):V];let M=H.device_id?L.devices[H.device_id]:void 0,e=H.area_id||M?.area_id,r=e?L.areas[e]?.name:void 0,t=u=>C&&L.formatEntityName&&L.formatEntityName(C,{type:u})||void 0,i=u3(L,H.device_id),p=t("entity")??(C?z(C):void 0);p&&i&&p===i&&(p=void 0);let v=H.next_name_part==="device"||!p,A=v&&M?.next_name_part==="parent_device"?u3(L,M.parent_device_id):void 0;return[r,A,v?i:void 0,p].filter(u=>!!u)},_3=L=>!!L.translationMetadata?.translations?.[L.language]?.isRTL;var y=(L,V,C,H={})=>{let M=new CustomEvent(V,{bubbles:H.bubbles??!0,cancelable:H.cancelable??!1,composed:H.composed??!0,detail:C??{}});return L.dispatchEvent(M),M};var _7=["ha-adaptive-dialog","ha-dialog","ha-bottom-sheet","ha-dialog-header","ha-icon-button","ha-icon-button-prev","ha-dropdown","ha-dropdown-item","hui-section"],R3={info:"ha-more-info-info",history:"ha-more-info-history-and-logbook",settings:"ha-more-info-settings",related:"ha-more-info-related",details:"ha-more-info-details",add_to:"ha-more-info-add-to"},k1=L=>customElements.get(L)!==void 0,Q=async(L,V=5e3)=>{if(k1(L))return!0;let C,H=await Promise.race([customElements.whenDefined(L).then(()=>!0),new Promise(M=>{C=setTimeout(()=>M(!1),V)})]);return clearTimeout(C),H},P3,F3=()=>(P3??=(async()=>{await Q("ha-more-info-dialog");let L=[];for(let V of _7)await Q(V,2e3)||L.push(V);return L.length&&console.warn("[more-info-popup-card] Missing Home Assistant elements:",L.join(", ")),L})(),P3),T3=async L=>{let V=customElements.get(L);try{await V?.getConfigElement?.()}catch{}},B3,E3=()=>(B3??=(async()=>{await Promise.all([Q("hui-tile-card"),Q("hui-grid-card")]),await Promise.all([T3("hui-tile-card"),T3("hui-grid-card")]),await Promise.all([Q("ha-form"),Q("hui-card-picker"),Q("hui-card-element-editor")])})(),B3),P7=L=>{let V=L?.match(/^(\d{4})\.(\d{1,2})/);return V?[Number(V[1]),Number(V[2])]:void 0},y1=[2026,10],D3=L=>{let V=P7(L);if(!V)return!0;let[C,H]=V;return C>y1[0]||C===y1[0]&&H>=y1[1]};var $3=O`
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
`,N3=O`
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
`,I3=O`
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
`,W3=O`
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
`,M2=O`
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
`,e2=O`
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
`;var w2={"card.name":"More-info popup","card.description":"A container shown as a native more-info popup, with a sections-style grid of cards inside.","card.cards_count":"{count} cards","card.cards_count_one":"1 card","card.hidden_hint":"Hidden on the dashboard \xB7 opens with #{id}","card.missing_elements":"This Home Assistant version is missing elements the popup needs. Check the browser console.","card.unsupported_version":"More-info popup card requires Home Assistant {version} or newer.","dialog.entity_controls":"Entity controls","editor.tab.cards":"Cards","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Appearance","editor.section.behavior":"Behavior","editor.popup_id":"Popup ID","editor.popup_id_helper":"Open it with a Navigate action to #{id}","editor.entity":"Entity","editor.entity_helper":"Optional. Enables the history, settings and menu buttons of the native header.","editor.name":"Title","editor.icon":"Icon","editor.breadcrumb":"Breadcrumb","editor.breadcrumb_helper":"Text above the title. Type your own text or pick an option.","editor.breadcrumb.auto":"Area and device (automatic)","editor.breadcrumb.none":"None","editor.mode":"Presentation","editor.mode.auto":"Automatic (like Home Assistant)","editor.mode.dialog":"Centered dialog","editor.mode.bottom_sheet":"Bottom sheet","editor.width":"Width","editor.width.small":"Small","editor.width.medium":"Medium (default)","editor.width.large":"Large","editor.width.full":"Full width","editor.width.custom":"Custom","editor.custom_width":"Custom width","editor.height":"Height","editor.height.auto":"Fit content","editor.height.custom":"Custom","editor.min_height":"Minimum height","editor.max_height":"Maximum height","editor.length_helper":"CSS length, for example 720px, 80vh or 90%","editor.column_span":"Grid width (sections)","editor.column_span_helper":"1 = 12 columns like a dashboard section; 2 = 24 columns.","editor.show_header_actions":"Show history, settings and menu","editor.replace_more_info":"Replace the entity's more-info","editor.replace_more_info_helper":"Opening the entity from any card on this view shows this popup instead.","editor.nested_more_info":"Entities opened from inside the popup","editor.nested_more_info.inline":"Navigate inside the popup (like Home Assistant)","editor.nested_more_info.dialog":"Open a separate dialog","editor.dismissable":"Close with Esc, outside click or swipe","editor.auto_close":"Close automatically after inactivity","editor.keep_alive":"Keep cards loaded while closed (faster reopen)","editor.test_popup":"Test popup","editor.add_card":"Add card","editor.edit_card":"Edit card","editor.back":"Back","editor.empty":"This popup has no cards yet.","editor.undo":"Undo","editor.card_deleted":"Card deleted","editor.popup_id_invalid":'Use lowercase letters, digits, "_" and "-" only.',"state_card.name":"More-info state","state_card.description":"State header and the big control of a native more-info dialog.","controls_card.name":"More-info controls","controls_card.description":"Row of more-info chips: selects, toggles, numbers and actions.","controls.empty":"Add controls in the editor.","controls.entity":"Entity","controls.control":"Main control","controls.control.auto":"Automatic (like Home Assistant)","controls.control.none":"None","controls.control.toggle":"Toggle","controls.control.brightness":"Brightness slider","controls.control.fan_speed":"Fan speed","controls.control.position":"Cover position","controls.control.tilt":"Cover tilt","controls.control.cover_toggle":"Cover toggle","controls.control.cover_buttons":"Cover buttons","controls.control.valve_position":"Valve position","controls.control.valve_toggle":"Valve toggle","controls.control.valve_buttons":"Valve buttons","controls.control.lock":"Lock","controls.control.alarm_modes":"Alarm modes","controls.control.temperature":"Thermostat","controls.control.climate_humidity":"Climate humidity","controls.control.humidity":"Humidifier","controls.control.water_heater":"Water heater","controls.control.vacuum_status":"Vacuum status","controls.control.lawn_mower_status":"Lawn mower status","controls.control.media_player":"Media player","controls.control.script":"Script (run / cancel)","controls.control.press":"Press button","controls.show_state":"Show state","controls.show_last_changed":"Show last changed","controls.state_override":"State text","controls.appearance":"Appearance","controls.appearance.plain":"Plain (like more-info)","controls.appearance.card":"Card","controls.controls":"Controls","controls.type":"Type","controls.type_helper":"Automatic if empty: select for select entities or attributes, toggle, number or action.","controls.type.select":"Select","controls.type.toggle":"Toggle","controls.type.number":"Number","controls.type.button":"Button (icon)","controls.type.action":"Action","controls.attribute":"Attribute","controls.attribute_helper":"Options shown in the select (effect, preset mode, fan speed\u2026).","controls.attribute.state":"State (on / off)","controls.attribute.effect":"Effect","controls.attribute.preset_mode":"Preset mode","controls.attribute.fan_mode":"Fan mode","controls.attribute.swing_mode":"Swing mode","controls.attribute.swing_horizontal_mode":"Horizontal swing mode","controls.attribute.hvac_mode":"HVAC mode","controls.attribute.fan_speed":"Fan speed (vacuum)","controls.attribute.mode":"Mode","controls.attribute.direction":"Direction","controls.attribute.oscillating":"Oscillating","controls.attribute.operation_mode":"Operation mode","controls.attribute.away_mode":"Away mode","controls.attribute.source":"Source","controls.attribute.sound_mode":"Sound mode","controls.name":"Name","controls.icon":"Icon","controls.options":"Options","controls.options_helper":"Optional: which options to show and in which order.","controls.value":"Secondary text","controls.value_helper":"For actions; defaults to the entity state.","controls.tap_action":"Tap action","controls.show_arrow":"Show arrow","controls.perform_action":"Custom action","controls.perform_action_helper":"domain.action that receives the value, e.g. light.turn_on","controls.data_key":"Value field","controls.data_key_helper":"Field of the custom action that receives the value, e.g. effect","controls.min":"Minimum","controls.max":"Maximum","controls.step":"Step","controls.wrap":"Wrap on phones","controls.wrap_helper":"Chips go to new rows instead of scrolling sideways (Home Assistant scrolls)."};var U3={"card.name":"Popup more-info","card.description":"Un contenedor que se muestra como el popup more-info nativo, con una rejilla de tarjetas como una secci\xF3n.","card.cards_count":"{count} tarjetas","card.cards_count_one":"1 tarjeta","card.hidden_hint":"Oculta en el dashboard \xB7 se abre con #{id}","card.missing_elements":"A esta versi\xF3n de Home Assistant le faltan elementos que el popup necesita. Revisa la consola del navegador.","card.unsupported_version":"More-info popup card requiere Home Assistant {version} o superior.","dialog.entity_controls":"Controles de la entidad","editor.tab.cards":"Tarjetas","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Apariencia","editor.section.behavior":"Comportamiento","editor.popup_id":"ID del popup","editor.popup_id_helper":"\xC1brelo con una acci\xF3n Navegar a #{id}","editor.entity":"Entidad","editor.entity_helper":"Opcional. Habilita los botones de historial, ajustes y men\xFA de la cabecera nativa.","editor.name":"T\xEDtulo","editor.icon":"Icono","editor.breadcrumb":"Ruta","editor.breadcrumb_helper":"Texto sobre el t\xEDtulo. Escribe el tuyo o elige una opci\xF3n.","editor.breadcrumb.auto":"\xC1rea y dispositivo (autom\xE1tico)","editor.breadcrumb.none":"Ninguna","editor.mode":"Presentaci\xF3n","editor.mode.auto":"Autom\xE1tica (como Home Assistant)","editor.mode.dialog":"Di\xE1logo centrado","editor.mode.bottom_sheet":"Hoja inferior deslizante","editor.width":"Ancho","editor.width.small":"Peque\xF1o","editor.width.medium":"Mediano (por defecto)","editor.width.large":"Grande","editor.width.full":"Ancho completo","editor.width.custom":"Personalizado","editor.custom_width":"Ancho personalizado","editor.height":"Alto","editor.height.auto":"Ajustar al contenido","editor.height.custom":"Personalizado","editor.min_height":"Alto m\xEDnimo","editor.max_height":"Alto m\xE1ximo","editor.length_helper":"Longitud CSS, por ejemplo 720px, 80vh o 90%","editor.column_span":"Ancho de la rejilla (secciones)","editor.column_span_helper":"1 = 12 columnas como una secci\xF3n del dashboard; 2 = 24 columnas.","editor.show_header_actions":"Mostrar historial, ajustes y men\xFA","editor.replace_more_info":"Reemplazar el more-info de la entidad","editor.replace_more_info_helper":"Al abrir la entidad desde cualquier tarjeta de esta vista se muestra este popup.","editor.nested_more_info":"Entidades abiertas desde dentro del popup","editor.nested_more_info.inline":"Navegar dentro del popup (como Home Assistant)","editor.nested_more_info.dialog":"Abrir un di\xE1logo aparte","editor.dismissable":"Cerrar con Esc, clic fuera o deslizando","editor.auto_close":"Cerrar autom\xE1ticamente tras inactividad","editor.keep_alive":"Mantener las tarjetas cargadas al cerrar (reapertura m\xE1s r\xE1pida)","editor.test_popup":"Probar popup","editor.add_card":"A\xF1adir tarjeta","editor.edit_card":"Editar tarjeta","editor.back":"Volver","editor.empty":"Este popup a\xFAn no tiene tarjetas.","editor.undo":"Deshacer","editor.card_deleted":"Tarjeta eliminada","editor.popup_id_invalid":'Usa solo min\xFAsculas, n\xFAmeros, "_" y "-".',"state_card.name":"Estado more-info","state_card.description":"Cabecera de estado y control grande de un more-info nativo.","controls_card.name":"Controles more-info","controls_card.description":"Fila de chips del more-info: selectores, interruptores, n\xFAmeros y acciones.","controls.empty":"A\xF1ade controles en el editor.","controls.entity":"Entidad","controls.control":"Control principal","controls.control.auto":"Autom\xE1tico (como Home Assistant)","controls.control.none":"Ninguno","controls.control.toggle":"Interruptor","controls.control.brightness":"Control de brillo","controls.control.fan_speed":"Velocidad del ventilador","controls.control.position":"Posici\xF3n de la persiana","controls.control.tilt":"Inclinaci\xF3n de la persiana","controls.control.cover_toggle":"Interruptor de persiana","controls.control.cover_buttons":"Botones de persiana","controls.control.valve_position":"Posici\xF3n de la v\xE1lvula","controls.control.valve_toggle":"Interruptor de v\xE1lvula","controls.control.valve_buttons":"Botones de v\xE1lvula","controls.control.lock":"Cerradura","controls.control.alarm_modes":"Modos de alarma","controls.control.temperature":"Termostato","controls.control.climate_humidity":"Humedad del clima","controls.control.humidity":"Humidificador","controls.control.water_heater":"Calentador de agua","controls.control.vacuum_status":"Estado de la aspiradora","controls.control.lawn_mower_status":"Estado del cortac\xE9sped","controls.control.media_player":"Reproductor multimedia","controls.control.script":"Script (ejecutar / cancelar)","controls.control.press":"Bot\xF3n de pulsar","controls.show_state":"Mostrar estado","controls.show_last_changed":"Mostrar \xFAltimo cambio","controls.state_override":"Texto del estado","controls.appearance":"Apariencia","controls.appearance.plain":"Sin marco (como more-info)","controls.appearance.card":"Tarjeta","controls.controls":"Controles","controls.type":"Tipo","controls.type_helper":"Autom\xE1tico si se deja vac\xEDo: selector para entidades select o atributos, interruptor, n\xFAmero o acci\xF3n.","controls.type.select":"Selector","controls.type.toggle":"Interruptor","controls.type.number":"N\xFAmero","controls.type.button":"Bot\xF3n (icono)","controls.type.action":"Acci\xF3n","controls.attribute":"Atributo","controls.attribute_helper":"Opciones del selector (efecto, modo predefinido, velocidad\u2026).","controls.attribute.state":"Estado (encendido / apagado)","controls.attribute.effect":"Efecto","controls.attribute.preset_mode":"Modo predefinido","controls.attribute.fan_mode":"Modo del ventilador","controls.attribute.swing_mode":"Oscilaci\xF3n","controls.attribute.swing_horizontal_mode":"Oscilaci\xF3n horizontal","controls.attribute.hvac_mode":"Modo HVAC","controls.attribute.fan_speed":"Potencia de succi\xF3n (aspiradora)","controls.attribute.mode":"Modo","controls.attribute.direction":"Direcci\xF3n","controls.attribute.oscillating":"Oscilaci\xF3n (s\xED / no)","controls.attribute.operation_mode":"Modo de funcionamiento","controls.attribute.away_mode":"Modo ausente","controls.attribute.source":"Fuente","controls.attribute.sound_mode":"Modo de sonido","controls.name":"Nombre","controls.icon":"Icono","controls.options":"Opciones","controls.options_helper":"Opcional: qu\xE9 opciones mostrar y en qu\xE9 orden.","controls.value":"Texto secundario","controls.value_helper":"Para acciones; por defecto, el estado de la entidad.","controls.tap_action":"Acci\xF3n al pulsar","controls.show_arrow":"Mostrar flecha","controls.perform_action":"Acci\xF3n personalizada","controls.perform_action_helper":"dominio.acci\xF3n que recibe el valor, p. ej. light.turn_on","controls.data_key":"Campo del valor","controls.data_key_helper":"Campo de la acci\xF3n personalizada que recibe el valor, p. ej. effect","controls.min":"M\xEDnimo","controls.max":"M\xE1ximo","controls.step":"Paso","controls.wrap":"Saltar de l\xEDnea en m\xF3vil","controls.wrap_helper":"Los chips bajan de l\xEDnea en lugar de desplazarse de lado (Home Assistant los desplaza)."};var G3={en:w2,es:U3},l=(L,V,C)=>{let H=L?.language??(typeof document<"u"&&document.documentElement.lang||"en"),M=H.split("-")[0],e=G3[H]?.[V]??G3[M]?.[V]??w2[V];if(C)for(let[r,t]of Object.entries(C))e=e.replace(`{${r}}`,String(t));return e};var t1=A1(class extends C1{constructor(L){if(super(L),L.type!==H2.ATTRIBUTE||L.name!=="class"||L.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(L){return" "+Object.keys(L).filter(V=>L[V]).join(" ")+" "}update(L,[V]){if(this.st===void 0){this.st=new Set,L.strings!==void 0&&(this.nt=new Set(L.strings.join(" ").split(/\s/).filter(H=>H!=="")));for(let H in V)V[H]&&!this.nt?.has(H)&&this.st.add(H);return this.render(V)}let C=L.element.classList;for(let H of this.st)H in V||(C.remove(H),this.st.delete(H));for(let H in V){let M=!!V[H];M===this.st.has(H)||this.nt?.has(H)||(M?(C.add(H),this.st.add(H)):(C.remove(H),this.st.delete(H)))}return $}});var{I:s4}=l3;var T7={},z3=(L,V=T7)=>L._$AH=V;var Q3=A1(class extends C1{constructor(){super(...arguments),this.key=d}render(L,V){return this.key=L,V}update(L,[V,C]){return V!==this.key&&(z3(L),this.key=V),C}});var _2=(L,V)=>{y(L,"hass-action",{config:{tap_action:{action:"navigate",navigation_path:V}},action:"tap"})};var B7=(L,V)=>{let C=V.entity?k2(L,V.entity):[],H=V.name??C[C.length-1]??"",M=[];return V.breadcrumb==="auto"?M=C.slice(0,-1):V.breadcrumb!=="none"&&V.breadcrumb&&(M=[V.breadcrumb]),[...M,H]},R7=(L,V)=>{let C=V.children[V.children.length-1];switch(V.view){case"details":return L.localize("ui.dialogs.more_info_control.details");case"related":return L.localize("ui.dialogs.more_info_control.related");case"add_to":return L.localize("ui.dialogs.more_info_control.add_to.item");case"settings":return C?.viewTitle||L.localize("ui.dialogs.more_info_control.settings");default:return C?.viewTitle}},r2=(L,V,C)=>{let H=C.entityId&&C.entityId!==V.entity?k2(L,C.entityId):B7(L,V),M=C.view==="root"?void 0:R7(L,C),e=M?H:H.slice(0,-1);return{title:M??H[H.length-1]??"",breadcrumb:e.filter(Boolean),breadcrumbClickable:!!C.entityId&&b1(L)&&(C.view!=="root"||V.breadcrumb==="auto")}},t2=(L,V,C,H,M)=>{let e=_3(L)?" \u25C2 ":" \u25B8 ",r=V.breadcrumb.join(e);return o`
    <span slot=${C} class="title" @click=${H}>
      ${V.breadcrumb.length?V.breadcrumbClickable&&M?o`<button class="breadcrumb" @click=${M}>
                ${r}
              </button>`:o`<p class="breadcrumb">${r}</p>`:d}
      <p class="main">${V.title}</p>
    </span>
  `};var K3,P2=()=>K3,T2=L=>{K3=L};var q3=L=>L.uix??L.card_mod,B2=async(L,V,C,H,M)=>{let e=customElements.get("uix-node");if(e?.applyToElement)try{await e.applyToElement(L,V,C,H,!1,M)}catch(r){console.warn("[more-info-popup-card] UIX styling failed",r)}};var F7=24,E7=4,j3=["pointerdown","keydown","wheel","touchstart"],D7=L=>{let V=document;V.startViewTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches?V.startViewTransition(L):L()},Y3,X3,J3,C0,H0,V0,L0,M0,e0,r0,t0,i0,Z,R2,F2,E2,D2,$2,N2,I2,W2,U2,G2,z2,k=class extends(i0=b,t0=[P({attribute:!1})],r0=[P({type:Boolean,reflect:!0,attribute:"fixed-top"})],e0=[h()],M0=[h()],L0=[h()],V0=[h()],H0=[h()],C0=[h()],J3=[h()],X3=[h()],Y3=[h()],i0){constructor(){super(...arguments);s(this,R2,a(Z,8,this)),a(Z,11,this);s(this,F2,a(Z,12,this,!0)),a(Z,15,this);s(this,E2,a(Z,16,this)),a(Z,19,this);s(this,D2,a(Z,20,this,!1)),a(Z,23,this);s(this,$2,a(Z,24,this,[])),a(Z,27,this);s(this,N2,a(Z,28,this,{})),a(Z,31,this);s(this,I2,a(Z,32,this,!1)),a(Z,35,this);s(this,W2,a(Z,36,this,!0)),a(Z,39,this);s(this,U2,a(Z,40,this,!1)),a(Z,43,this);s(this,G2,a(Z,44,this,!1)),a(Z,47,this);s(this,z2,a(Z,48,this,!1)),a(Z,51,this);n(this,"_section");n(this,"_keepAlive",new Map);n(this,"_sectionConfigKey",new WeakMap);n(this,"_childViews",new WeakMap);n(this,"_childHeaders",new WeakMap);n(this,"_autoCloseTimer");n(this,"_resizeObserver");n(this,"_enableEscape",()=>{this._escapeEnabled=!0});n(this,"_disableEscape",()=>{this._escapeEnabled=!1});n(this,"_closeFromEvent",C=>{C.stopPropagation(),this.closeDialog()});n(this,"_goBackFromEvent",()=>this._goBack());n(this,"_observedContent");n(this,"_uixKey");n(this,"_uixSurface");n(this,"_goBack",()=>{let C=this._frame;if(C){if(C.children.length){this._replaceTop({...C,children:C.children.slice(0,-1)}),this._detailsYaml=!1;return}this._stack.length>1&&(this._detailsYaml=!1,this._stack=this._stack.slice(0,-1))}});n(this,"_enlarge",()=>{D7(()=>{this._fill=!this._fill})});n(this,"_breadcrumbClick",C=>{C.stopPropagation(),this._setView("related")});n(this,"_armAutoClose",()=>{this._clearAutoClose(!1);let C=this._config?.auto_close??0;if(!(C<=0)){for(let H of j3)this.addEventListener(H,this._armAutoClose,{passive:!0});this._autoCloseTimer=setTimeout(()=>this.closeDialog(),C*1e3)}});n(this,"_updateScrollState",()=>{let C=this._observedContent;C&&(this._contentScrolled=C.scrollTop>F7,this._contentScrollable=C.scrollHeight-C.scrollTop-C.clientHeight>E7)})}get _config(){return this._params?.config}get _frame(){return this._stack[this._stack.length-1]}showDialog(C){let{config:H,view:M}=C;this._params=C,this._stack=[{entityId:H.entity,view:"root",children:[]}],M&&H.entity&&this._canShowView(M)&&(this._stack=[...this._stack,{entityId:H.entity,view:M,children:[]}]),this._fill=!1,this._detailsYaml=!1,this._escapeEnabled=!0,this._section=this._getSection(H),this._open=!0,H.entity&&this._loadEntry(H.entity),T2({popupId:H.popup_id,close:()=>this.closeDialog()}),this._armAutoClose()}closeDialog(){return this._open=!1,!0}_dialogClosed(C){if(C.target!==C.currentTarget)return;let H=this._config;H&&!H.keep_alive&&(this._section=void 0),this._params=void 0,this._stack=[],this._entries={},this._fill=!1,this._detailsYaml=!1,this._contentScrolled=!1,this._contentScrollable=!1,this._clearAutoClose(),this._uixKey=void 0,this._uixSurface=void 0,window.removeEventListener("dialog-closed",this._enableEscape),window.removeEventListener("show-dialog",this._disableEscape),T2(void 0),y(this,"dialog-closed",{dialog:this.localName})}_dialogOpened(C){C.target===C.currentTarget&&(window.addEventListener("dialog-closed",this._enableEscape),window.addEventListener("show-dialog",this._disableEscape))}connectedCallback(){super.connectedCallback(),this.addEventListener("close-dialog",this._closeFromEvent),this.addEventListener("close-child-view",this._goBackFromEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("close-dialog",this._closeFromEvent),this.removeEventListener("close-child-view",this._goBackFromEvent),this._resizeObserver?.disconnect(),this._clearAutoClose()}willUpdate(C){C.has("hass")&&this._section&&(this._section.hass=this.hass)}updated(C){super.updated(C);let H=this.renderRoot.querySelector(".content");H&&H!==this._observedContent&&(this._observedContent=H,this._resizeObserver??=new ResizeObserver(()=>this._updateScrollState()),this._resizeObserver.disconnect(),this._resizeObserver.observe(H),H.firstElementChild&&this._resizeObserver.observe(H.firstElementChild),this._updateScrollState()),this._applyUix()}_applyUix(){let C=this._config,H=this.renderRoot.querySelector("ha-adaptive-dialog, ha-dialog, ha-bottom-sheet");if(!C||!H)return;let M=q3(C),e=`${H.localName}:${C.popup_id}:${JSON.stringify(M??null)}`;if(e===this._uixKey&&H===this._uixSurface)return;this._uixKey=e,this._uixSurface=H;let r={config:C,params:{popup_id:C.popup_id}};B2(H,"more-info",void 0,r,"type-more-info-popup"),B2(H,"more-info-popup",M,r,"type-more-info-popup")}_getSection(C){let H=C.keep_alive?this._keepAlive.get(C.popup_id):void 0;H||(H=document.createElement("hui-section"),C.keep_alive&&this._keepAlive.set(C.popup_id,H));let M={type:"grid",column_span:C.column_span,cards:C.cards},e=JSON.stringify(M);return H.hass=this.hass,this._sectionConfigKey.get(H)!==e&&(this._sectionConfigKey.set(H,e),H.config=M),H}async _loadEntry(C){if(C in this._entries)return;let H;try{H=await this.hass.callWS({type:"config/entity_registry/get",entity_id:C})}catch{H=null}this._entries={...this._entries,[C]:H}}_canShowView(C){return k1(R3[C])}_pushFrame(C){if(C.view!=="root"&&!this._canShowView(C.view)){y(this,"hass-more-info",{entityId:C.entityId??null,view:C.view});return}C.entityId&&this._loadEntry(C.entityId),this._detailsYaml=!1,this._stack=[...this._stack,C]}_setView(C){let H=this._frame;H&&this._pushFrame({entityId:H.entityId,view:C,children:[]})}_replaceTop(C){this._stack=[...this._stack.slice(0,-1),C]}_showChildView(C){C.stopPropagation();let H=this._frame;if(!H)return;let M=C.detail;M.viewImport?.(),M.viewHeaderImport?.(),this._replaceTop({...H,children:[...H.children,M]})}_handleMoreInfo(C){if(this._config?.nested_more_info==="dialog")return;C.stopPropagation();let{entityId:H}=C.detail;if(!H)return;let M=C.detail.view??C.detail.tab??"info",e=this._frame;if(e&&e.entityId===H&&e.view!=="root"){e.view!==M&&this._setView(M);return}this._pushFrame({entityId:H,view:M==="details"?M:"info",children:[]})}_entryUpdated(C){let H=C.detail;H?.entity_id&&(this._entries={...this._entries,[H.entity_id]:H})}_handleMenu(C){let M=this._frame?.entityId;if(!M)return;let e=C.detail?.item?.value;switch(e){case"info":case"related":case"details":case"add_to":this._setView(e);break;case"device":{let r=y2(this.hass,M);r&&_2(this,`/config/devices/device/${r}`);break}case"edit":{let r=this.hass.states[M],t=r&&w3(r,this._entries[M]?.unique_id);t&&_2(this,t);break}default:break}}_clearAutoClose(C=!0){if(clearTimeout(this._autoCloseTimer),this._autoCloseTimer=void 0,C)for(let H of j3)this.removeEventListener(H,this._armAutoClose)}render(){let C=this._config,H=this._frame;if(!C||!H||!this.hass)return d;let M=!C.dismissable||H.view==="settings"||!this._escapeEnabled,e=r1(c3(C)),r=this._renderContent(H);if(C.mode==="bottom_sheet")return o`
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
            ${this._renderNavigation(H,"navigationIcon")}
            ${this._renderTitle(C,H,"title")}
            ${this._renderActions(C,H,"actionItems")}
          </ha-dialog-header>
          ${r}
        </ha-bottom-sheet>
      `;let t=C.mode==="dialog"?"ha-dialog":"ha-adaptive-dialog",i=this._fill?"full":Z3(C),p=o`
      ${this._renderNavigation(H,"headerNavigationIcon")}
      ${this._renderTitle(C,H,"headerTitle")}
      ${this._renderActions(C,H,"headerActionItems")} ${r}
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
            ${p}
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
            ${p}
          </ha-adaptive-dialog>
        `}_isDefaultView(C){return(C.view==="root"||C.view==="info")&&!C.children.length}_renderNavigation(C,H){return this._stack.length===1&&!C.children.length?o`
          <ha-icon-button
            slot=${H}
            .label=${this.hass.localize("ui.common.close")}
            .path=${D1}
            @click=${this.closeDialog}
          ></ha-icon-button>
        `:o`
          <ha-icon-button-prev
            slot=${H}
            .label=${this.hass.localize("ui.dialogs.more_info_control.back_to_info")}
            @click=${this._goBack}
          ></ha-icon-button-prev>
        `}_renderTitle(C,H,M){let e=r2(this.hass,C,H);return t2(this.hass,e,M,C.mode==="bottom_sheet"?void 0:this._enlarge,this._breadcrumbClick)}_renderActions(C,H,M){let e=H.entityId,r=H.view==="root";if(!e||r&&!C.show_header_actions)return d;if(!this._isDefaultView(H)){if(H.view==="details"&&!H.children.length)return o`
          <ha-icon-button
            slot=${M}
            .label=${this.hass.localize("ui.dialogs.more_info_control.toggle_yaml_mode")}
            .path=${$1}
            @click=${()=>{this._detailsYaml=!this._detailsYaml}}
          ></ha-icon-button>
        `;let c=H.children[H.children.length-1];if(c?.viewHeaderTag){let w=this._childElement(c,c.viewHeaderTag,"header");return w.slot=M,Object.assign(w,{hass:this.hass,params:c.viewParams}),w}return d}let t=this.hass,i=b1(t),p=b3(t,e,!r)?o`
          <ha-icon-button
            slot=${M}
            .label=${t.localize("ui.dialogs.more_info_control.history")}
            .path=${O5}
            @click=${()=>this._setView("history")}
          ></ha-icon-button>
        `:d;if(!i)return o`
        ${p}
        ${b2(t)?o`
                <ha-icon-button
                  slot=${M}
                  .label=${t.localize("ui.dialogs.more_info_control.add_to.item")}
                  .path=${m2}
                  @click=${()=>this._setView("add_to")}
                ></ha-icon-button>
              `:d}
      `;let v=t.states[e],A=y2(t,e),u=y3(t,A),m=S(e);return o`
      ${p}
      <ha-icon-button
        slot=${M}
        .label=${t.localize("ui.dialogs.more_info_control.settings")}
        .path=${N1}
        @click=${()=>this._setView("settings")}
      ></ha-icon-button>
      <ha-dropdown
        slot=${M}
        placement="bottom-end"
        @closed=${c=>c.stopPropagation()}
        @opened=${c=>c.stopPropagation()}
        @wa-select=${this._handleMenu}
      >
        <ha-icon-button
          slot="trigger"
          .label=${t.localize("ui.common.menu")}
          .path=${B5}
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
        ${b2(t)?o`
                <ha-dropdown-item value="add_to">
                  <ha-svg-icon
                    slot="icon"
                    .path=${m2}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.add_to.item")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:d}
        ${A?o`
                <ha-dropdown-item value="device">
                  <ha-svg-icon
                    slot="icon"
                    .path=${u==="service"?X5:T5}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.device_or_service_info",{type:t.localize(`ui.dialogs.more_info_control.device_type.${u}`)})}
                </ha-dropdown-item>
              `:d}
        ${k3(v)?o`
                <ha-dropdown-item value="edit">
                  <ha-svg-icon
                    slot="icon"
                    .path=${z5}
                  ></ha-svg-icon>
                  ${t.localize(`ui.dialogs.more_info_control.edit_domain.${m}`)||t.localize("ui.dialogs.more_info_control.edit")}
                </ha-dropdown-item>
              `:d}
        <ha-dropdown-item value="related">
          <ha-svg-icon slot="icon" .path=${$5}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.related")}
        </ha-dropdown-item>
        <ha-dropdown-item value="details">
          <ha-svg-icon slot="icon" .path=${D5}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.details")}
        </ha-dropdown-item>
      </ha-dropdown>
    `}_childElement(C,H,M){let e=M==="view"?this._childViews:this._childHeaders,r=e.get(C);return r||(r=document.createElement(H),e.set(C,r)),r}_renderContent(C){let H=`${this._stack.length}:${C.entityId??""}:${C.view}`;return o`
      <div
        class=${t1({"content-wrapper":!0,"settings-view":C.view==="settings"})}
      >
        ${Q3(H,o`
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
          class=${t1({"fade-top":!0,visible:this._contentScrolled})}
        ></div>
        <div
          class=${t1({"fade-bottom":!0,visible:this._contentScrollable})}
        ></div>
      </div>
    `}_renderChild(C){let H=C.children[C.children.length-1];if(!H)return d;let M=this._childElement(H,H.viewTag,"view");return Object.assign(M,{hass:this.hass,entry:C.entityId?this._entries[C.entityId]:void 0,params:H.viewParams}),o`<div class="child-view">${M}</div>`}_renderFrame(C){let H=this.hass,M=C.entityId,e=M?this._entries[M]:void 0;if(C.view==="root")return o`
        <div
          class="body"
          style=${r1({"--column-span":String(this._config.column_span)})}
        >
          ${this._section}
        </div>
      `;if(!M)return d;if(C.view==="settings")return o`
        <div ?hidden=${C.children.length>0}>
          <ha-more-info-settings
            .hass=${H}
            .entityId=${M}
            .entry=${e}
          ></ha-more-info-settings>
        </div>
        ${this._renderChild(C)}
      `;if(C.children.length)return this._renderChild(C);switch(C.view){case"info":return o`
          <ha-more-info-info
            .hass=${H}
            .entityId=${M}
            .entry=${e}
            .editMode=${!1}
          ></ha-more-info-info>
        `;case"history":return o`
          <ha-more-info-history-and-logbook
            .hass=${H}
            .entityId=${M}
          ></ha-more-info-history-and-logbook>
        `;case"related":return o`
          <ha-more-info-related
            .hass=${H}
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
            .hass=${H}
            .entry=${e}
            .params=${{entityId:M}}
            .yamlMode=${this._detailsYaml}
          ></ha-more-info-details>
        `;default:return d}}};Z=N(i0),R2=new WeakMap,F2=new WeakMap,E2=new WeakMap,D2=new WeakMap,$2=new WeakMap,N2=new WeakMap,I2=new WeakMap,W2=new WeakMap,U2=new WeakMap,G2=new WeakMap,z2=new WeakMap,x(Z,4,"hass",t0,k,R2),x(Z,4,"fixedTop",r0,k,F2),x(Z,4,"_params",e0,k,E2),x(Z,4,"_open",M0,k,D2),x(Z,4,"_stack",L0,k,$2),x(Z,4,"_entries",V0,k,N2),x(Z,4,"_fill",H0,k,I2),x(Z,4,"_escapeEnabled",C0,k,W2),x(Z,4,"_detailsYaml",J3,k,U2),x(Z,4,"_contentScrolled",X3,k,G2),x(Z,4,"_contentScrollable",Y3,k,z2),D(Z,k),n(k,"styles",[$3,N3,I3,W3,M2,e2,O`
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
    `]);customElements.get(G)||customElements.define(G,k);var o0=L=>{if(!(!L||L.length<2))try{return decodeURIComponent(L.slice(1))}catch{return}},$7=L=>`${L.pathname}${L.search}`,w1=L=>{L.history.replaceState(L.history.state,"",$7(L.location))},a0=(L,V=500)=>new Promise(C=>{let H=!1,M=()=>{H||(H=!0,L.removeEventListener("popstate",e),clearTimeout(r),L.location.hash&&w1(L),C())},e=()=>M(),r=setTimeout(M,V);L.addEventListener("popstate",e),L.history.back()});var A0=Symbol.for("more-info-popup-card.registry"),Q2=class{constructor(V=window){this._win=V}_win;_hosts=new Set;_installed=!1;_consuming=!1;_checkScheduled=!1;register(V){this._install(),this._hosts.add(V),this._scheduleLocationCheck()}unregister(V){this._hosts.delete(V)}get(V){if(!V)return;let C;for(let H of this._hosts)H.isConnected&&H.popupConfig?.popup_id===V&&(C=H);return C}findByEntity(V){let C;for(let H of this._hosts){let M=H.popupConfig;H.isConnected&&M?.replace_more_info&&M.entity===V&&(C=H)}return C}open(V,C){let H=this.get(V);return H?.openPopup(C),!!H}close(V){let C=P2();C&&(!V||C.popupId===V)&&C.close()}toggle(V){P2()?.popupId===V?this.close(V):this.open(V)}_install(){this._installed||(this._installed=!0,this._win.addEventListener("location-changed",this._onLocationChanged),this._win.addEventListener("popstate",this._onPopState),this._win.addEventListener("ll-custom",this._onCustomAction),this._win.addEventListener("hass-more-info",this._onMoreInfo,{capture:!0}))}_scheduleLocationCheck(){this._checkScheduled||(this._checkScheduled=!0,queueMicrotask(()=>{this._checkScheduled=!1;let V=this._hostForHash();V&&!this._consuming&&(w1(this._win),V.openPopup())}))}_hostForHash(){return this.get(o0(this._win.location.hash))}_onLocationChanged=V=>{if(this._consuming)return;let C=this._hostForHash();if(!C)return;let M=!!!V.detail?.replace&&this._win.history.state?.from===this._win.location.pathname;this._consuming=!0,(M?a0(this._win):Promise.resolve(w1(this._win))).then(()=>{this._consuming=!1,C.openPopup()})};_onPopState=()=>{if(this._consuming)return;let V=this._hostForHash();V&&(w1(this._win),V.openPopup())};_onCustomAction=V=>{let H=V.detail?.more_info_popup;H&&(typeof H=="string"?this.open(H):H.open?this.open(H.open):H.toggle?this.toggle(H.toggle):H.close!==void 0&&this.close(H.close||void 0))};_onMoreInfo=V=>{let C=V.detail;if(!C?.entityId)return;let H=this.findByEntity(C.entityId);if(!H||V.composedPath().some(r=>r.localName===G))return;V.stopImmediatePropagation();let e=C.view??C.tab;H.openPopup({view:e&&e!=="info"?e:void 0})}},K2=()=>{let L=window;return L[A0]??=new Q2(window),L[A0]};var _1=(L,V,C)=>C.map(H=>({value:H,label:l(L,`editor.${V}.${H}`)})),d0=(L,V)=>[{name:"general",type:"expandable",flatten:!0,expanded:!0,iconPath:I1,title:l(L,"editor.section.general"),schema:[{name:"popup_id",required:!0,selector:{text:{prefix:"#"}}},{name:"entity",selector:{entity:{}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]}]},{name:"appearance",type:"expandable",flatten:!0,iconPath:G5,title:l(L,"editor.section.appearance"),schema:[{name:"mode",selector:{select:{mode:"dropdown",options:_1(L,"mode",["auto","dialog","bottom_sheet"])}}},{name:"breadcrumb",selector:{select:{mode:"dropdown",custom_value:!0,options:_1(L,"breadcrumb",["auto","none"])}}},{name:"",type:"grid",schema:[{name:"width",selector:{select:{mode:"dropdown",options:_1(L,"width",["small","medium","large","full","custom"])}}},...V.width==="custom"?[{name:"custom_width",selector:{text:{}}}]:[]]},{name:"",type:"grid",schema:[{name:"height",selector:{select:{mode:"dropdown",options:_1(L,"height",["auto","custom"])}}}]},...V.height==="custom"?[{name:"",type:"grid",schema:[{name:"min_height",selector:{text:{}}},{name:"max_height",selector:{text:{}}}]}]:[],{name:"column_span",selector:{number:{min:1,max:4,step:1,mode:"slider",slider_ticks:!0}}},...V.entity?[{name:"show_header_actions",selector:{boolean:{}}}]:[]]},{name:"behavior",type:"expandable",flatten:!0,iconPath:N1,title:l(L,"editor.section.behavior"),schema:[...V.entity?[{name:"replace_more_info",selector:{boolean:{}}}]:[],{name:"nested_more_info",selector:{select:{mode:"list",options:_1(L,"nested_more_info",["inline","dialog"])}}},{name:"dismissable",selector:{boolean:{}}},{name:"auto_close",selector:{number:{min:0,max:3600,step:5,mode:"box",unit_of_measurement:"s"}}},{name:"keep_alive",selector:{boolean:{}}}]}],N7={entity:"editor.entity_helper",breadcrumb:"editor.breadcrumb_helper",custom_width:"editor.length_helper",min_height:"editor.length_helper",max_height:"editor.length_helper",column_span:"editor.column_span_helper",replace_more_info:"editor.replace_more_info_helper"},I7={popup_id:"editor.popup_id",entity:"editor.entity",name:"editor.name",icon:"editor.icon",breadcrumb:"editor.breadcrumb",mode:"editor.mode",width:"editor.width",custom_width:"editor.custom_width",height:"editor.height",min_height:"editor.min_height",max_height:"editor.max_height",column_span:"editor.column_span",show_header_actions:"editor.show_header_actions",replace_more_info:"editor.replace_more_info",nested_more_info:"editor.nested_more_info",dismissable:"editor.dismissable",auto_close:"editor.auto_close",keep_alive:"editor.keep_alive"},n0=L=>V=>{if(V.title)return V.title;let C=I7[V.name];return C?l(L,C):V.name},p0=(L,V)=>C=>{if(C.name==="popup_id")return l(L,"editor.popup_id_helper",{id:V.popup_id||"\u2026"});let H=N7[C.name];return H?l(L,H):void 0};var m0=L=>{let V={views:[{type:"sections",sections:[L.section]}]};return{config:V,rawConfig:V,editMode:!0,urlPath:null,mode:"storage",locale:L.locale,enableFullEditMode:()=>{},setEditMode:()=>{},saveConfig:async C=>{let H=C.views?.[0]?.sections?.[0]?.cards??[];L.onSave(structuredClone(H))},deleteConfig:async()=>{},showToast:C=>L.onToast(C)}},l0=L=>{if(!Array.isArray(L))return;let V=L[L.length-1];return typeof V=="number"?V:void 0};var W7=30,U7=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]/g,"_").replace(/^[_-]+/,""),s0,Z0,c0,u0,S0,h0,f0,g0,O0,f,q2,j2,Y2,X2,J2,C5,H5,V5,B=class extends(O0=b,g0=[P({attribute:!1})],f0=[P({attribute:!1})],h0=[h()],S0=[h()],u0=[h()],c0=[h()],Z0=[h()],s0=[h()],O0){constructor(){super(...arguments);s(this,q2,a(f,8,this)),a(f,11,this);s(this,j2,a(f,12,this)),a(f,15,this);s(this,Y2,a(f,16,this)),a(f,19,this);s(this,X2,a(f,20,this)),a(f,23,this);s(this,J2,a(f,24,this,!1)),a(f,27,this);s(this,C5,a(f,28,this,!0)),a(f,31,this);s(this,H5,a(f,32,this,!0)),a(f,35,this);n(this,"_section");n(this,"_sectionKey");n(this,"_undo",[]);s(this,V5,a(f,36,this)),a(f,39,this);n(this,"_noticeTimer");n(this,"_undoLast",()=>{let C=this._undo[this._undo.length-1];this._notice=void 0,C&&(this._undo=this._undo.slice(0,-1),this._setCards(C,!1))});n(this,"_toast",C=>{clearTimeout(this._noticeTimer),this._notice={message:C.message,undo:!!C.action&&this._undo.length>0},this._noticeTimer=setTimeout(()=>{this._notice=void 0},C.duration&&C.duration>0?C.duration:6e3)});n(this,"_interceptEdit",{capture:!0,handleEvent:C=>{let H=l0(C.detail?.path);H!==void 0&&(C.stopPropagation(),C.type==="ll-duplicate-card"?this._duplicate(H):this._openEditor(H))}});n(this,"_interceptCreate",{capture:!0,handleEvent:C=>{C.stopPropagation(),this._sub={kind:"add"}}});n(this,"_back",()=>{this._returnToCards()})}setConfig(C){O1(C),this._config=structuredClone(C)}connectedCallback(){super.connectedCallback(),E3().then(()=>{this._ready=!0})}willUpdate(C){(C.has("_config")||C.has("hass"))&&this._config&&this.hass&&this._syncSection()}get _cards(){return this._config?.cards??[]}get _sectionConfig(){return{type:"grid",column_span:this._config?.column_span??g1.column_span,cards:this._cards}}_emit(C){this._config=C,y(this,"config-changed",{config:C})}_setCards(C,H=!0){this._config&&JSON.stringify(C)!==JSON.stringify(this._cards)&&(H&&(this._undo=[...this._undo,structuredClone(this._cards)].slice(-W7)),this._emit({...this._config,cards:C}))}_syncSection(){let C=this._sectionConfig;this._section??=document.createElement("hui-section");let H=this._section;H.hass=this.hass;let M=JSON.stringify(C);M!==this._sectionKey&&(this._sectionKey=M,H.viewIndex=0,H.index=0,H.preview=!0,H.lovelace=m0({section:C,locale:this.hass.locale,onSave:e=>this._setCards(e),onToast:this._toast}),H.config=C)}_copyNative(C){let H=this._section?.firstElementChild??this._section;H&&y(H,"ll-copy-card",{path:[0,0,C]})}_openEditor(C){this._guiMode=!0,this._guiModeAvailable=!0,this._sub={kind:"edit",index:C}}_returnToCards(){this._sub=void 0,this.updateComplete.then(()=>this.renderRoot.querySelector(".cards-header")?.scrollIntoView({block:"start"}))}_duplicate(C){let H=[...this._cards];H.splice(C+1,0,structuredClone(H[C])),this._setCards(H),this._openEditor(C+1)}_delete(C){let H=[...this._cards];H.splice(C,1),this._setCards(H),this._returnToCards(),this._toast({message:l(this.hass,"editor.card_deleted"),action:{text:l(this.hass,"editor.undo"),action:this._undoLast}})}_cut(C){this._copyNative(C);let H=[...this._cards];H.splice(C,1),this._setCards(H),this._returnToCards()}_cardPicked(C){C.stopPropagation();let H=C.detail.config;if(!H?.type)return;let M=[...this._cards,H];this._setCards(M),this._openEditor(M.length-1)}_cardChanged(C){if(C.stopPropagation(),this._sub?.kind!=="edit")return;let H=[...this._cards];H[this._sub.index]=C.detail.config,this._guiModeAvailable=C.detail.guiModeAvailable??!0,this._setCards(H)}_guiModeChanged(C){C.stopPropagation(),this._guiMode=C.detail.guiMode,this._guiModeAvailable=C.detail.guiModeAvailable}_toggleMode(){this.renderRoot.querySelector("hui-card-element-editor")?.toggleMode()}_valueChanged(C){if(C.stopPropagation(),!this._config)return;let H={...C.detail.value};typeof H.popup_id=="string"&&(H.popup_id=U7(H.popup_id));let M={...this._config,...H};for(let[e,r]of Object.entries(g1))M[e]===r&&delete M[e];for(let e of Object.keys(M))(M[e]===""||M[e]===void 0)&&delete M[e];M.width!=="custom"&&delete M.custom_width,M.height!=="custom"&&(delete M.min_height,delete M.max_height),M.entity||(delete M.replace_more_info,delete M.show_header_actions),this._emit(M)}_testPopup(){if(!this._config)return;let C;try{C=L2(O1(this._config))}catch{return}y(this,"show-dialog",{dialogTag:G,dialogImport:()=>Promise.resolve(),dialogParams:{config:C},addHistory:!0})}render(){return!this.hass||!this._config?d:this._ready?this._sub?.kind==="add"?this._renderAdd():this._sub?.kind==="edit"&&this._cards[this._sub.index]?this._renderEdit(this._sub.index):this._renderMain():o`<ha-spinner size="small"></ha-spinner>`}_renderMain(){let C=this.hass,H=this._config,M={...g1,...H};return o`
      <ha-form
        .hass=${C}
        .data=${M}
        .schema=${d0(C,M)}
        .computeLabel=${n0(C)}
        .computeHelper=${p0(C,H)}
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
        style=${r1({"--column-span":String(H.column_span??1)})}
        @ll-edit-card=${this._interceptEdit}
        @ll-duplicate-card=${this._interceptEdit}
        @ll-create-card=${this._interceptCreate}
      >
        ${this._section}
      </div>
    `}_renderSubHeader(C,H=d){return o`
      <div class="sub-header">
        <ha-icon-button-prev
          .label=${l(this.hass,"editor.back")}
          @click=${this._back}
        ></ha-icon-button-prev>
        <span class="sub-title">${C}</span>
        <div class="sub-actions">${H}</div>
      </div>
    `}_renderAdd(){return o`
      ${this._renderSubHeader(l(this.hass,"editor.add_card"))}
      <hui-card-picker
        .hass=${this.hass}
        .lovelace=${this.lovelace??{views:[]}}
        @config-changed=${this._cardPicked}
      ></hui-card-picker>
    `}_renderEdit(C){let H=this.hass,M=this._cards[C],e=t=>H.localize(`ui.panel.lovelace.editor.edit_card.${t}`),r=o`
      <ha-icon-button
        .label=${e(this._guiMode?"show_code_editor":"show_visual_editor")}
        .path=${this._guiMode?$1:N5}
        .disabled=${!this._guiModeAvailable}
        @click=${this._toggleMode}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("duplicate")}
        .path=${w5}
        @click=${()=>this._duplicate(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("copy")}
        .path=${y5}
        @click=${()=>this._copyNative(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("cut")}
        .path=${k5}
        @click=${()=>this._cut(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("delete")}
        .path=${P5}
        @click=${()=>this._delete(C)}
      ></ha-icon-button>
    `;return o`
      ${this._renderSubHeader(l(H,"editor.edit_card"),r)}
      <hui-card-element-editor
        .hass=${H}
        .lovelace=${this.lovelace}
        .value=${M}
        .sectionConfig=${this._sectionConfig}
        show-visibility-tab
        @config-changed=${this._cardChanged}
        @GUImode-changed=${this._guiModeChanged}
      ></hui-card-element-editor>
    `}};f=N(O0),q2=new WeakMap,j2=new WeakMap,Y2=new WeakMap,X2=new WeakMap,J2=new WeakMap,C5=new WeakMap,H5=new WeakMap,V5=new WeakMap,x(f,4,"hass",g0,B,q2),x(f,4,"lovelace",f0,B,j2),x(f,4,"_config",h0,B,Y2),x(f,4,"_sub",S0,B,X2),x(f,4,"_ready",u0,B,J2),x(f,4,"_guiMode",c0,B,C5),x(f,4,"_guiModeAvailable",Z0,B,H5),x(f,4,"_notice",s0,B,V5),D(f,B),n(B,"styles",O`
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
  `);customElements.get(f1)||customElements.define(f1,B);var M5=L=>V=>(V.attributes[L]??[]).map(String),L5=L=>V=>{let C=V.attributes[L];return C==null?void 0:String(C)},I=(L,V,C,H)=>({options:M5(L),value:L5(V),service:M=>[S(M.entity_id),C],data:M=>({[V]:M}),icon:H}),G7=(L,V,C,H)=>({optionIcons:{true:C,false:H},options:()=>["true","false"],value:M=>M.attributes[L]==null?void 0:String(!!M.attributes[L]),service:M=>[S(M.entity_id),V],data:M=>({[L]:M==="true"}),icon:C}),P1={effect:{...I("effect_list","effect","turn_on",_5)},preset_mode:I("preset_modes","preset_mode","set_preset_mode",o1),fan_mode:I("fan_modes","fan_mode","set_fan_mode",v1),swing_mode:I("swing_modes","swing_mode","set_swing_mode",E1),swing_horizontal_mode:I("swing_horizontal_modes","swing_horizontal_mode","set_swing_horizontal_mode",E1),hvac_mode:{options:M5("hvac_modes"),value:L=>L.state,service:()=>["climate","set_hvac_mode"],data:L=>({hvac_mode:L}),icon:Y5,formatAsState:!0},fan_speed:{...I("fan_speed_list","fan_speed","set_fan_speed",v1),attributeIcons:!1},mode:I("available_modes","mode","set_mode",o1),direction:{options:()=>["forward","reverse"],value:L5("direction"),service:()=>["fan","set_direction"],data:L=>({direction:L}),icon:q5},oscillating:G7("oscillating","oscillate",E1,g5),operation_mode:I("operation_list","operation_mode","set_operation_mode",J5),away_mode:{options:()=>["on","off"],value:L5("away_mode"),service:()=>["water_heater","set_away_mode"],data:L=>({away_mode:L==="on"}),icon:p2,optionIcons:{on:p2,off:f5}},source:{...I("source_list","source","select_source",I5),attributeIcons:!1},sound_mode:{...I("sound_mode_list","sound_mode","select_sound_mode",U5),attributeIcons:!1}},i2={options:M5("options"),value:L=>L.state,service:L=>[S(L.entity_id),"select_option"],data:L=>({option:L}),icon:o1,formatAsState:!0},b0={options:()=>["off","on"],value:L=>L.state,service:L=>[S(L.entity_id),"toggle"],data:()=>({}),icon:W1,formatAsState:!0},d1=["select","input_select"],y0=["number","input_number"],k0=["switch","input_boolean","light","fan","siren","automation","script","group","media_player","humidifier","climate","water_heater","remote","valve","cover","lock"];var w0={button:"button.press",input_button:"input_button.press",scene:"scene.turn_on",script:"script.turn_on"},_0=["off","closed","locked","unavailable","unknown","idle","standby","paused","docked"],P0=600,T1=L=>{if(L.type)return L.type;if(L.attribute)return"select";let V=L.entity?S(L.entity):"";return d1.includes(V)?"select":y0.includes(V)?"number":k0.includes(V)?"toggle":"action"},T0=L=>L?.map(V=>typeof V=="string"?{value:V}:{...V,value:String(V.value)}),e5=L=>{let[V,C]=L.split(".",2);return[V,C]};var B1=async(L,V)=>{if(V.every(k1))return!0;try{(await window.loadCardHelpers?.())?.importMoreInfoControl?.(L)}catch(H){console.warn("[more-info-popup-card] Could not load",L,H)}return(await Promise.all(V.map(H=>Q(H,8e3)))).every(Boolean)};var p1={toggle:{tag:"ha-state-control-toggle",load:"switch"},brightness:{tag:"ha-state-control-light-brightness",load:"light"},fan_speed:{tag:"ha-state-control-fan-speed",load:"fan",extraTags:["ha-outlined-icon-button"]},position:{tag:"ha-state-control-cover-position",load:"cover"},tilt:{tag:"ha-state-control-cover-tilt-position",load:"cover"},cover_toggle:{tag:"ha-state-control-cover-toggle",load:"cover"},cover_buttons:{tag:"ha-state-control-cover-buttons",load:"cover"},valve_position:{tag:"ha-state-control-valve-position",load:"valve"},valve_toggle:{tag:"ha-state-control-valve-toggle",load:"valve"},valve_buttons:{tag:"ha-state-control-valve-buttons",load:"valve"},lock:{tag:"ha-state-control-lock-toggle",load:"lock"},alarm_modes:{tag:"ha-state-control-alarm_control_panel-modes",load:"alarm_control_panel"},temperature:{tag:"ha-state-control-climate-temperature",load:"climate"},climate_humidity:{tag:"ha-state-control-climate-humidity",load:"climate"},humidity:{tag:"ha-state-control-humidifier-humidity",load:"humidifier"},water_heater:{tag:"ha-state-control-water_heater-temperature",load:"water_heater"},vacuum_status:{tag:"ha-state-control-vacuum-status",load:"vacuum"},lawn_mower_status:{tag:"ha-state-control-lawn_mower-status",load:"lawn_mower"},media_player:{tag:"more-info-media_player",load:"media_player"},script:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0},press:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button"],inline:!0}},z7=["brightness","color_temp","hs","xy","rgb","rgbw","rgbww","white"],n1=(L,V)=>((L.attributes.supported_features??0)&V)!==0,r5=L=>{switch(S(L.entity_id)){case"light":return L.attributes.supported_color_modes?.some(C=>z7.includes(C))?"brightness":"toggle";case"switch":case"input_boolean":case"siren":case"automation":case"remote":return"toggle";case"fan":return n1(L,1)?"fan_speed":"toggle";case"cover":return n1(L,4)?"position":n1(L,128)?"tilt":"cover_buttons";case"valve":return n1(L,4)?"valve_position":"valve_toggle";case"lock":return"lock";case"alarm_control_panel":return"alarm_modes";case"climate":return"temperature";case"humidifier":return"humidity";case"water_heater":return"water_heater";case"vacuum":return"vacuum_status";case"lawn_mower":return"lawn_mower_status";case"media_player":return"media_player";case"script":return"script";case"button":case"input_button":return"press";default:return}},B0=["climate","humidifier","water_heater","media_player"];var a2=()=>{},R0=L=>l(a2(),`controls.${L}`),o2=(L,V,C=!1)=>({select:{mode:"dropdown",custom_value:C,options:L.map(H=>({value:H,label:l(a2(),`${V}.${H}`)||H}))}}),F0={name:"appearance",selector:o2(["plain","card"],"controls.appearance")},E0=L=>R0(L.name)||L.name,D0=()=>({schema:[{name:"entity",required:!0,selector:{entity:{}}},{name:"control",selector:o2(["auto","none",...Object.keys(p1)],"controls.control")},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}}]},{name:"state_override",selector:{text:{}}},F0],computeLabel:E0}),T=(L,V,C=!1)=>({label:R0(L),description:l(a2(),`controls.${L}_helper`)||void 0,required:C,selector:V}),$0=()=>({schema:[{name:"controls",selector:{object:{multiple:!0,label_field:"entity",description_field:"attribute",fields:{type:T("type",o2(["select","toggle","number","action","button"],"controls.type")),entity:T("entity",{entity:{}}),attribute:T("attribute",o2(["state",...Object.keys(P1)],"controls.attribute",!0)),name:T("name",{text:{}}),icon:T("icon",{icon:{}}),options:T("options",{select:{multiple:!0,custom_value:!0,options:[]}}),value:T("value",{text:{}}),tap_action:T("tap_action",{ui_action:{}}),show_arrow:T("show_arrow",{boolean:{}}),perform_action:T("perform_action",{text:{}}),data_key:T("data_key",{text:{}}),min:T("min",{number:{mode:"box",step:"any"}}),max:T("max",{number:{mode:"box",step:"any"}}),step:T("step",{number:{mode:"box",step:"any"}})}}}},{name:"",type:"grid",schema:[F0,{name:"wrap",selector:{boolean:{}}}]}],computeLabel:E0,computeHelper:L=>l(a2(),`controls.${L.name}_helper`)||void 0,assertConfig:L=>{if(L.controls?.some(V=>V.options?.some(C=>typeof C!="string")))throw new Error("Options with names or icons can only be edited in YAML")}});var A2=O`
  ha-card.plain {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    --ha-card-background: transparent;
  }
`,N0=O`
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
`;var R1="more-info-controls-card",I0,W0,U0,G0,z0,R,t5,i5,o5,a5,K=class extends(z0=b,G0=[P({attribute:!1})],U0=[h()],W0=[h()],I0=[h()],z0){constructor(){super(...arguments);s(this,t5,a(R,8,this)),a(R,11,this);s(this,i5,a(R,12,this)),a(R,15,this);s(this,o5,a(R,16,this,!1)),a(R,19,this);s(this,a5,a(R,20,this,{})),a(R,23,this);n(this,"_timers",{})}static getConfigForm(){return $0()}static getStubConfig(C,H){let M=H.find(i=>i.startsWith("light.")&&C.states[i]?.attributes.effect_list),e=H.find(i=>d1.includes(S(i))),r=H.find(i=>i.startsWith("switch.")),t=[];return M&&t.push({entity:M,attribute:"effect"}),e&&t.push({entity:e}),r&&t.push({entity:r}),!t.length&&H[0]&&t.push({entity:H[0]}),{type:`custom:${R1}`,controls:t}}setConfig(C){if(!Array.isArray(C?.controls))throw new Error('"controls" must be a list');C.controls.forEach((H,M)=>{if(!H||typeof H!="object")throw new Error(`Control ${M+1} is invalid`);let e=T1(H);if(e!=="action"&&e!=="button"&&!H.entity)throw new Error(`Control ${M+1} needs an "entity"`);if(H.attribute&&H.attribute!=="state"&&!P1[H.attribute]&&!H.options)throw new Error(`Control ${M+1}: unknown attribute "${H.attribute}"; add "options" and "perform_action"`)}),this._config=C}connectedCallback(){super.connectedCallback(),B1("light",["ha-more-info-control-select-container","ha-control-select-menu"]).then(()=>{this._ready=!0})}disconnectedCallback(){super.disconnectedCallback(),Object.values(this._timers).forEach(clearTimeout),this._timers={}}getCardSize(){return 1}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}_stateObj(C){return C.entity?this.hass?.states[C.entity]:void 0}_selectSpec(C,H){if(C.attribute)return C.attribute==="state"?b0:P1[C.attribute]??{options:()=>[],value:M=>M.attributes[C.attribute]==null?void 0:String(M.attributes[C.attribute]),service:()=>["",""],data:M=>({[C.data_key??C.attribute]:M}),icon:i2.icon};if(d1.includes(S(H.entity_id)))return i2;if(C.options&&C.perform_action)return{options:()=>[],value:()=>{},service:()=>["",""],data:M=>({[C.data_key??"value"]:M}),icon:i2.icon,attributeIcons:!1}}_call(C,H,M,e){let[r,t]=C.perform_action?e5(C.perform_action):H;if(!r||!t)return;let i={...C.entity?{entity_id:C.entity}:{},...C.perform_action&&C.data_key?{[C.data_key]:e}:M,...C.data};this.hass.callService(r,t,i)}_label(C,H){return C.name?C.name:H?C.attribute&&C.attribute!=="state"?this.hass.formatEntityAttributeName(H,C.attribute):z(H):""}_icon(C,H,M,e){return C.icon?o`<ha-icon
        slot=${e??d}
        .icon=${C.icon}
      ></ha-icon>`:M?o`<ha-svg-icon
        slot=${e??d}
        .path=${M}
      ></ha-svg-icon>`:o`<ha-state-icon
      slot=${e??d}
      .hass=${this.hass}
      .stateObj=${H}
    ></ha-state-icon>`}_renderSelect(C,H){let M=this.hass,e=this._selectSpec(C,H);if(!e)return d;let r=T0(C.options),t=r?r.map(m=>m.value):e.options(H),i=C.attribute&&C.attribute!=="state"?C.attribute:void 0,p=m=>{let c=r?.find(w=>w.value===m);return c?.name?c.name:e.formatAsState||!i?M.formatEntityState(H,m):M.formatEntityAttributeValue(H,i,m==="true"?!0:m==="false"?!1:m)},v=t.map(m=>{let c=r?.find(Y=>Y.value===m)?.icon,w=c?void 0:e.optionIcons?.[m];return{value:m,label:p(m),...c?{icon:c}:{},...w?{iconPath:w}:{}}}),A=m=>i&&!e.formatAsState?o`<ha-attribute-icon
            slot="icon"
            .hass=${M}
            .stateObj=${H}
            .attribute=${i}
            .attributeValue=${m}
          ></ha-attribute-icon>`:o`<ha-state-icon
            slot="icon"
            .hass=${M}
            .stateObj=${H}
            .stateValue=${m}
          ></ha-state-icon>`,u=!i&&d1.includes(S(H.entity_id));return o`
      <ha-control-select-menu
        .label=${this._label(C,H)}
        .value=${e.value(H)}
        .options=${v}
        .renderIcon=${C.icon||e.attributeIcons===!1?void 0:A}
        .disabled=${H.state==="unavailable"}
        @wa-select=${m=>{let c=m.detail?.item?.value;c===void 0||c===e.value(H)||this._call(C,e.service(H),e.data(c),c)}}
      >
        ${this._icon(C,u?H:void 0,u?void 0:e.icon,"icon")}
      </ha-control-select-menu>
    `}_renderToggle(C,H){let M=S(H.entity_id),e=!_0.includes(H.state),r=H.state==="unavailable",t=()=>{C.perform_action?this._call(C,["",""],{},void 0):M==="lock"?this.hass.callService("lock",e?"lock":"unlock",{entity_id:H.entity_id}):M==="cover"||M==="valve"?this.hass.callService(M,"toggle",{entity_id:H.entity_id}):this.hass.callService("homeassistant","toggle",{entity_id:H.entity_id})};return o`
      <button
        class=${t1({chip:!0,toggle:!0,active:e})}
        role="switch"
        aria-checked=${String(e)}
        ?disabled=${r}
        @click=${t}
      >
        <div class="icon">${this._icon(C,H,void 0)}</div>
        <div class="content">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${this.hass.formatEntityState(H)}</p>
        </div>
      </button>
    `}_renderNumber(C,H,M){let e=this.hass,r=H.attributes,t=C.min??Number(r.min??0),i=C.max??Number(r.max??100),p=C.step??Number(r.step??1),v=this._pending[M]??Number(C.attribute?r[C.attribute]:H.state),A=Number.isFinite(v),u=H.state==="unavailable"||!A,m=(String(p).split(".")[1]??"").length,c=A&&(this._pending[M]!==void 0||C.attribute)?`${v.toFixed(m)}${r.unit_of_measurement?` ${r.unit_of_measurement}`:""}`:e.formatEntityState(H),w=Y=>{let X=Math.min(i,Math.max(t,Number((v+Y*p).toFixed(m))));X!==v&&(this._pending={...this._pending,[M]:X},clearTimeout(this._timers[M]),this._timers[M]=setTimeout(()=>{let _=S(H.entity_id);this._call(C,[_,"set_value"],{value:X},X);let J={...this._pending};delete J[M],this._pending=J},P0))};return o`
      <div
        class="chip number"
        ?disabled=${u}
        role="group"
        aria-label=${this._label(C,H)}
      >
        <ha-icon-button
          .label=${e.localize("ui.card.counter.actions.decrement")||"\u2212"}
          .path=${W5}
          .disabled=${u||v<=t}
          @click=${()=>w(-1)}
        ></ha-icon-button>
        <div class="content center">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${c}</p>
        </div>
        <ha-icon-button
          .label=${e.localize("ui.card.counter.actions.increment")||"+"}
          .path=${K5}
          .disabled=${u||v>=i}
          @click=${()=>w(1)}
        ></ha-icon-button>
      </div>
    `}_runAction(C,H){if(H.action!=="none"){if(H.action==="more-info"){let M=H.entity??C.entity;M&&y(this,"hass-more-info",{entityId:M});return}y(this,"hass-action",{config:{entity:C.entity,tap_action:H},action:"tap"})}}_renderButton(C,H){let M=C.entity?S(C.entity):"",e=()=>{if(C.tap_action){this._runAction(C,C.tap_action);return}let r=C.perform_action??w0[M]??(C.entity?"homeassistant.toggle":void 0);if(!r)return;let[t,i]=e5(r);this.hass.callService(t,i,{...C.entity?{entity_id:C.entity}:{},...C.data})};return o`
      <ha-control-button
        .label=${this._label(C,H)}
        .disabled=${H?.state==="unavailable"}
        @click=${e}
      >
        ${this._icon(C,H,void 0)}
      </ha-control-button>
    `}_renderAction(C,H){let M=C.tap_action??{action:H?"more-info":"none"},e=C.show_arrow??["navigate","more-info"].includes(M.action),r=C.value??(H?this.hass.formatEntityState(H):"");return o`
      <button class="chip action" @click=${()=>this._runAction(C,M)}>
        <div class="icon">${this._icon(C,H,void 0)}</div>
        <div class="content">
          <p class="label">${this._label(C,H)}</p>
          ${r?o`<p class="value">${r}</p>`:d}
        </div>
        ${e?o`<div class="icon">
                <ha-svg-icon .path=${b5}></ha-svg-icon>
              </div>`:d}
      </button>
    `}_renderItem(C,H){let M=this._stateObj(C),e=T1(C);if(e==="action")return this._renderAction(C,M);if(e==="button")return this._renderButton(C,M);if(!M)return o`<div class="chip" disabled>
        <div class="content">
          <p class="label">${C.name??C.entity}</p>
          <p class="value">
            ${this.hass.localize("state.default.unavailable")}
          </p>
        </div>
      </div>`;switch(e){case"select":return this._renderSelect(C,M);case"toggle":return this._renderToggle(C,M);case"number":return this._renderNumber(C,M,H);default:return d}}_renderWrapped(C){let H=C.length;return o`
      <div class="wrap-controls">
        <div
          class=${t1({"wrap-scroll":!0,[`items-${H}`]:!0,multiline:H>=4})}
        >
          ${C}
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return d;let C=this._config.appearance??"plain",H=this._config.controls.map((r,t)=>({item:r,index:t})),M=H.filter(({item:r})=>T1(r)==="button"),e=H.filter(({item:r})=>T1(r)!=="button");return o`
      <ha-card class=${C}>
        ${this._ready?H.length?o`
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
    `}};R=N(z0),t5=new WeakMap,i5=new WeakMap,o5=new WeakMap,a5=new WeakMap,x(R,4,"hass",G0,K,t5),x(R,4,"_config",U0,K,i5),x(R,4,"_ready",W0,K,o5),x(R,4,"_pending",I0,K,a5),D(R,K),n(K,"styles",[A2,N0,O`
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
    `]);customElements.get(R1)||customElements.define(R1,K);var F1="more-info-state-card",Q7={temperature:["show-secondary","prevent-interaction-on-scroll"],climate_humidity:["show-current","prevent-interaction-on-scroll"],humidity:["show-secondary","prevent-interaction-on-scroll"],water_heater:["show-current","prevent-interaction-on-scroll"]},K7=16,q7=32,j7=6,Y7=L=>Math.round(100/(L.attributes.percentage_step??1))+1,X7=["queued","parallel"],J7=L=>L.state==="off"||L.state==="on"&&X7.includes(L.attributes.mode)&&L.attributes.current<L.attributes.max,C9=(L,V)=>{let C=S(V.entity_id),H=V.attributes;if(C==="light"&&V.state==="on"&&H.brightness!=null)return L.formatEntityAttributeValue(V,"brightness");if(C==="fan"&&V.state==="on"&&H.percentage)return L.formatEntityAttributeValue(V,"percentage");if(C==="script"){let M=H.current||0;return M?H.mode==="parallel"&&M>1?L.localize("ui.card.script.running_parallel",{active:M}):L.localize("ui.card.script.running_single"):L.localize("ui.card.script.idle")}if((C==="cover"||C==="valve")&&H.current_position!=null&&V.state!=="unavailable")return`${L.formatEntityState(V)} \xB7 ${L.formatEntityAttributeValue(V,"current_position")}`},Q0,K0,q0,j0,Y0,F,A5,d5,n5,p5,q=class extends(Y0=b,j0=[P({attribute:!1})],q0=[h()],K0=[h()],Q0=[h()],Y0){constructor(){super(...arguments);s(this,A5,a(F,8,this)),a(F,11,this);s(this,d5,a(F,12,this)),a(F,15,this);s(this,n5,a(F,16,this,!1)),a(F,19,this);s(this,p5,a(F,20,this,{})),a(F,23,this);n(this,"_controlElement");n(this,"_controlTag");n(this,"_loadingKey")}static getConfigForm(){return D0()}static getStubConfig(C,H){let M=H.find(e=>e.startsWith("light."))??H.find(e=>r5(C.states[e]))??H[0];return{type:`custom:${F1}`,entity:M}}setConfig(C){if(!C?.entity)throw new Error('"entity" is required');if(C.control&&C.control!=="auto"&&C.control!=="none"&&!(C.control in p1))throw new Error(`Unknown control "${C.control}"`);this._config=C,this._ready=!1,this._loadingKey=void 0,this._scriptData={action:C.entity}}getCardSize(){return 7}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _controlName(){let C=this._config?.control??"auto";if(C!=="none")return C!=="auto"?C:this._stateObj?r5(this._stateObj):void 0}willUpdate(){if(this._ready||!this._config||!this._stateObj)return;let C=this._controlName,H=C?p1[C]:void 0,M=this._showState&&this._config.show_last_changed!==!1,e=`${this._config.entity}:${C}:${M}`;if(e===this._loadingKey)return;this._loadingKey=e;let r=[];if(H){let t="extraTags"in H?H.extraTags:[];r.push(B1(H.load,[H.tag,...t]))}M&&r.push(B1("switch",["ha-more-info-state-header"])),Promise.all(r).then(()=>{this._loadingKey===e&&(this._ready=!0)})}get _showState(){let C=S(this._config.entity);return this._config.show_state??!B0.includes(C)}_control(C){let H=this._controlName;if(!H)return d;if(H==="script")return this._script(C);if(H==="press")return this._press(C);let{tag:M}=p1[H];if(this._controlTag!==M){this._controlTag=M,this._controlElement=document.createElement(M);for(let t of Q7[H]??[])this._controlElement.setAttribute(t,"")}let e=this._controlElement;e.stateObj=C,e.hass=this.hass;let r=S(C.entity_id)==="fan";return H==="toggle"&&(e.iconPathOn=r?v1:void 0,e.iconPathOff=r?F5:void 0),H==="fan_speed"&&r&&Y7(C)>j7&&n1(C,q7|K7)?o`${e}${this._fanPowerButton(C)}`:e}_fanPowerButton(C){let H=()=>this.hass.callService("fan",C.state==="on"?"turn_off":"turn_on",{entity_id:C.entity_id});return o`
      <div class="buttons">
        <ha-outlined-icon-button
          .disabled=${C.state==="unavailable"}
          @click=${H}
        >
          <ha-svg-icon .path=${W1}></ha-svg-icon>
        </ha-outlined-icon-button>
      </div>
    `}_script(C){let H=this.hass,M=S3(C.entity_id),e=H.services?.script?.[M],r=e?.fields??{},t=Object.keys(r).length>0,i=C.attributes.current||0,p=C.attributes.mode,v=p==="queued",A=p==="parallel",u=v&&i>1,m=this._scriptData.data,c=Object.entries(r).every(([g,m1])=>!m1.required||m?.[g]!==void 0),Y=!Object.values(r).some(g=>g.required)||c&&J7(C)||p==="restart",X=g=>{g.stopPropagation(),H.callService("script",M,this._scriptData.data)},_=g=>{g.stopPropagation(),H.callService("script","turn_off",{entity_id:C.entity_id})},J=g=>{this._scriptData={...this._scriptData,...g.detail.value}};return o`
      <div class="script">
        ${e?.description?o`<ha-markdown
                breaks
                .content=${e.description}
              ></ha-markdown>`:d}
        <div class="queue ${u?"has-queue":""}">
          ${u?H.localize("ui.card.script.running_queued",{queued:i-1}):""}
        </div>
        ${t?o`
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
                    @value-changed=${J}
                  ></ha-service-control>
                </div>
              `:d}
        <ha-control-button-group>
          <ha-control-button
            class="cancel-button"
            .disabled=${!i}
            @click=${_}
          >
            <ha-svg-icon .path=${j5}></ha-svg-icon>
            ${(v||A)&&i>1?H.localize("ui.card.script.cancel_all"):H.localize("ui.card.script.cancel")}
          </ha-control-button>
          <ha-control-button
            class="run-button"
            .disabled=${C.state==="unavailable"||!Y}
            @click=${X}
          >
            <ha-svg-icon .path=${Q5}></ha-svg-icon>
            ${H.localize("ui.card.script.run")}
          </ha-control-button>
        </ha-control-button-group>
      </div>
    `}_press(C){let H=S(C.entity_id),M=e=>{e.stopPropagation(),this.hass.callService(H==="input_button"?H:"button","press",{entity_id:C.entity_id})};return o`
      <ha-control-button-group class="press">
        <ha-control-button
          .disabled=${C.state==="unavailable"}
          @click=${M}
        >
          <ha-svg-icon .path=${E5}></ha-svg-icon>
          ${this.hass.localize("ui.card.button.press")}
        </ha-control-button>
      </ha-control-button-group>
    `}_header(C){let H=this._config;if(!this._showState)return d;let M=H.state_override||C9(this.hass,C);return H.show_last_changed===!1?o`<p class="state">
        ${M??this.hass.formatEntityState(C)}
      </p>`:o`
      <ha-more-info-state-header
        .hass=${this.hass}
        .stateObj=${C}
        .stateOverride=${M}
        .changedOverride=${S(C.entity_id)==="script"?C.attributes.last_triggered||0:void 0}
      ></ha-more-info-state-header>
    `}render(){if(!this._config||!this.hass)return d;let C=this._stateObj,H=this._config.appearance??"plain";return C?o`
      <ha-card class=${H} .label=${z(C)}>
        ${this._ready?o`
                ${this._header(C)}
                <div class="controls">${this._control(C)}</div>
              `:d}
      </ha-card>
    `:o`<ha-card class=${H}>
        <ha-alert alert-type="warning">
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity})}
        </ha-alert>
      </ha-card>`}};F=N(Y0),A5=new WeakMap,d5=new WeakMap,n5=new WeakMap,p5=new WeakMap,x(F,4,"hass",j0,q,A5),x(F,4,"_config",q0,q,d5),x(F,4,"_ready",K0,q,n5),x(F,4,"_scriptData",Q0,q,p5),D(F,q),n(q,"styles",[A2,O`
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
    `]);customElements.get(F1)||customElements.define(F1,q);var X0,J0,C7,H7,V7,E,m5,l5,v5,x5,j=class extends(V7=b,H7=[P({attribute:!1})],C7=[P({attribute:!1})],J0=[h()],X0=[h()],V7){constructor(){super(...arguments);s(this,m5,a(E,8,this)),a(E,11,this);s(this,l5,a(E,12,this)),a(E,15,this);s(this,v5,a(E,16,this)),a(E,19,this);s(this,x5,a(E,20,this,"hidden")),a(E,23,this);n(this,"connectedWhileHidden",!0);n(this,"_preview",!1);n(this,"_previewSection");n(this,"_previewSectionKey")}static async getConfigElement(){return document.createElement(f1)}static getStubConfig(C,H){let M=H.find(i=>i.startsWith("light."))??H[0],e=M?C.states[M]:void 0,r=e?s3(z(e)):"",t=Math.random().toString(36).slice(2,6);return{type:`custom:${g2}`,popup_id:r?`${r}_${t}`:`popup_${t}`,cards:[]}}get preview(){return this._preview}set preview(C){this._preview=!!C,this._syncSurface()}get popupConfig(){return this._config}setConfig(C){this._config=L2(O1(C)),this._syncSurface()}getCardSize(){return this._surface==="hidden"?0:this._surface==="preview"?6:1}getGridOptions(){return this._computeSurface()==="preview"?{columns:"full",rows:"auto"}:{columns:6,rows:1,min_columns:3,max_rows:1}}openPopup(C){let H=this._config;H&&F3().then(M=>{if(M.includes("ha-adaptive-dialog")||M.includes("hui-section")){y(this,"hass-notification",{message:l(this.hass,"card.missing_elements")});return}y(this,"show-dialog",{dialogTag:G,dialogImport:()=>Promise.resolve(),dialogParams:{config:H,view:C?.view},addHistory:!0})})}connectedCallback(){super.connectedCallback(),K2().register(this),this._syncSurface()}disconnectedCallback(){super.disconnectedCallback(),K2().unregister(this)}_computeSurface(){return this._preview?this.closest("hui-card-edit-mode, hui-card-options")?"placeholder":"preview":"hidden"}_syncSurface(){let C=this._computeSurface();C!==this._surface&&(this._surface=C);let H=C==="hidden";this.hasAttribute("hidden")!==H&&(this.toggleAttribute("hidden",H),this.isConnected&&y(this,"card-visibility-changed",{value:!H}))}willUpdate(C){C.has("hass")&&this._previewSection&&(this._previewSection.hass=this.hass)}render(){return!this._config||!this.hass||this._surface==="hidden"?d:D3(this.hass.config.version)?this._surface==="placeholder"?this._renderPlaceholder(this._config):this._renderPreview(this._config):o`<ha-alert alert-type="warning">
        ${l(this.hass,"card.unsupported_version",{version:y1.join(".")})}
      </ha-alert>`}_renderPlaceholder(C){let H=this.hass,M=C.entity?H.states[C.entity]:void 0,e=C.name??(M?z(M):C.popup_id),r=C.cards.length,t=r===1?l(H,"card.cards_count_one"):l(H,"card.cards_count",{count:r});return o`
      <ha-card class="placeholder">
        <ha-tile-container>
          <ha-tile-icon
            slot="icon"
            .icon=${C.icon}
            .iconPath=${C.icon?void 0:I1}
          >
            ${C.icon||!M?d:o`<ha-state-icon
                    slot="icon"
                    .stateObj=${M}
                    .hass=${H}
                  ></ha-state-icon>`}
          </ha-tile-icon>
          <ha-tile-info slot="info">
            <span slot="primary">${e}</span>
            <span
              slot="secondary"
              class="secondary"
              title=${l(H,"card.hidden_hint",{id:C.popup_id})}
            >
              <ha-svg-icon .path=${R5}></ha-svg-icon>
              #${C.popup_id} · ${t}
            </span>
          </ha-tile-info>
        </ha-tile-container>
      </ha-card>
    `}_renderPreview(C){let H=this.hass,M={type:"grid",column_span:C.column_span,cards:C.cards},e=JSON.stringify(M);this._previewSection??=document.createElement("hui-section"),this._previewSection.hass=H,this._previewSectionKey!==e&&(this._previewSectionKey=e,this._previewSection.config=M);let r=r2(H,C,{entityId:C.entity,view:"root",children:[]});return o`
      <div class="surface" inert>
        <ha-dialog-header>
          <ha-icon-button
            slot="navigationIcon"
            .label=${H.localize("ui.common.close")}
            .path=${D1}
          ></ha-icon-button>
          ${t2(H,r,"title")}
        </ha-dialog-header>
        <div
          class="body"
          style=${r1({"--column-span":String(C.column_span)})}
        >
          ${this._previewSection}
        </div>
      </div>
    `}};E=N(V7),m5=new WeakMap,l5=new WeakMap,v5=new WeakMap,x5=new WeakMap,x(E,4,"hass",H7,j,m5),x(E,4,"layout",C7,j,l5),x(E,4,"_config",J0,j,v5),x(E,4,"_surface",X0,j,x5),D(E,j),n(j,"styles",[M2,e2,O`
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
    `]);customElements.get(O2)||(customElements.define(O2,j),window.customCards=window.customCards??[],window.customCards.push({type:g2,name:l(void 0,"card.name"),description:l(void 0,"card.description"),preview:!1,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),window.customCards.push({type:F1,name:l(void 0,"state_card.name"),description:l(void 0,"state_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"},{type:R1,name:l(void 0,"controls_card.name"),description:l(void 0,"controls_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),console.info("%c MORE-INFO-POPUP-CARD %c 0.1.0 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;"));export{j as MoreInfoPopupCard};
//# sourceMappingURL=more-info-popup-card.js.map
