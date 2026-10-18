var E9=Object.create;var $2=Object.defineProperty;var R9=Object.getOwnPropertyDescriptor;var k3=(L,V)=>(V=Symbol[L])?V:Symbol.for("Symbol."+L),x1=L=>{throw TypeError(L)};var T3=(L,V,C)=>V in L?$2(L,V,{enumerable:!0,configurable:!0,writable:!0,value:C}):L[V]=C;var y3=(L,V)=>$2(L,"name",{value:V,configurable:!0});var I=L=>[,,,E9(L?.[k3("metadata")]??null)],P3=["class","method","getter","setter","accessor","field","value","get","set"],_1=L=>L!==void 0&&typeof L!="function"?x1("Function expected"):L,F9=(L,V,C,H,e)=>({kind:P3[L],name:V,metadata:H,addInitializer:r=>C._?x1("Already initialized"):e.push(_1(r||null))}),D=(L,V)=>T3(V,k3("metadata"),L[3]),a=(L,V,C,H)=>{for(var e=0,r=L[V>>1],M=r&&r.length;e<M;e++)V&1?r[e].call(C):H=r[e].call(C,H);return H},m=(L,V,C,H,e,r)=>{var M,t,i,n,p,d=V&7,c=!!(V&8),x=!!(V&16),h=d>3?L.length+1:d?c?1:2:0,B=P3[d+5],R=d>3&&(L[h-1]=[]),Y=L[h]||(L[h]=[]),$=d&&(!x&&!c&&(e=e.prototype),d<5&&(d>3||!x)&&R9(d<4?e:{get[C](){return _3(this,r)},set[C](k){return w3(this,r,k)}},C));d?x&&d<4&&y3(r,(d>2?"set ":d>1?"get ":"")+C):y3(e,C);for(var o1=H.length-1;o1>=0;o1--)n=F9(d,C,i={},L[3],Y),d&&(n.static=c,n.private=x,p=n.access={has:x?k=>$9(e,k):k=>C in k},d^3&&(p.get=x?k=>(d^1?_3:D9)(k,e,d^4?r:$.get):k=>k[C]),d>2&&(p.set=x?(k,y1)=>w3(k,e,y1,d^4?r:$.set):(k,y1)=>k[C]=y1)),t=(0,H[o1])(d?d<4?x?r:$[B]:d>4?void 0:{get:$.get,set:$.set}:e,n),i._=1,d^4||t===void 0?_1(t)&&(d>4?R.unshift(t):d?x?r=t:$[B]=t:e=t):typeof t!="object"||t===null?x1("Object expected"):(_1(M=t.get)&&($.get=M),_1(M=t.set)&&($.set=M),_1(M=t.init)&&R.unshift(M));return d||D(L,e),$&&$2(e,C,$),x?d^4?r:$:e},l=(L,V,C)=>T3(L,typeof V!="symbol"?V+"":V,C),D2=(L,V,C)=>V.has(L)||x1("Cannot "+C),$9=(L,V)=>Object(V)!==V?x1('Cannot use the "in" operator on this value'):L.has(V),_3=(L,V,C)=>(D2(L,V,"read from private field"),C?C.call(L):V.get(L)),s=(L,V,C)=>V.has(L)?x1("Cannot add the same private member more than once"):V instanceof WeakSet?V.add(L):V.set(L,C),w3=(L,V,C,H)=>(D2(L,V,"write to private field"),H?H.call(L,C):V.set(L,C),C),D9=(L,V,C)=>(D2(L,V,"access private method"),C);var B3="M17 18H21V16H17V14L14 17L17 20V18M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var N2="M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var E3="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z";var H2="M6 14H9L5 18L1 14H4C4 11.3 5.7 6.6 11 6.1V8.1C7.6 8.6 6 11.9 6 14M20 14C20 11.3 18.3 6.6 13 6.1V8.1C16.4 8.7 18 11.9 18 14H15L19 18L23 14H20Z",R3="M13 8.1V6.1C18.3 6.6 20 11.4 20 14H23L20.1 16.9L17.2 14H18C18 11.9 16.4 8.6 13 8.1M7.8 7.1L2.4 1.7L1.1 3L6.3 8.2C4.7 10 4 12.4 4 14H1L5 18L9 14H6C6 12.7 6.6 11 7.9 9.7L20.9 22.7L22.2 21.4L9.3 8.7L7.8 7.1M11 6.1L9.5 6.4L11 7.8V6.1Z";var F3="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";var $3="M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z";var V2="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var D3="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var L2="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var e2="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z";var r2="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z";var N3="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",I3="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z",z3="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z";var W3="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74";var U3="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var G3="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z";var M2="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z";var Q3="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";var K3="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";var w1="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";var q3="M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z";var Y3="M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z";var j3="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z";var X3="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z";var I2="M15 13L11 17V14H2V12H11V9L15 13M5 20V16H7V18H17V10.19L12 5.69L7.21 10H4.22L12 3L22 12H19V20H5Z";var J3="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";var C0="M12,2C9.76,2 7.78,3.05 6.5,4.68L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z";var H0="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var V0="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z";var L0="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z";var e0="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z";var r0="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";var M0="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";var t0="M19,13H5V11H19V13Z";var o0="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z";var i0="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z";var z2="M14,19H18V5H14M6,19H10V5H6V19Z";var a0="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var t2="M8,5.14V19.14L19,12.14L8,5.14Z";var A0="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5";var n0="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var W2="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z";var d1="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var d0="M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z";var u1="M18,18H6V6H18V18Z";var p0="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z";var l0="M22.08,11.04H20.08V4H13.05V2H11.04V4H4V11.04H2V13.05H4V20.08H11.04V22.08H13.05V20.08H20.08V13.05H22.08V11.04M18.07,18.07H13.05V16.06H11.04V18.07H6V13.05H8.03V11.04H6V6H11.04V8.03H13.05V6H18.07V11.04H16.06V13.05H18.07V18.07M13.05,12.05A1,1 0 0,1 12.05,13.05C11.5,13.05 11.04,12.6 11.04,12.05C11.04,11.5 11.5,11.04 12.05,11.04C12.6,11.04 13.05,11.5 13.05,12.05Z";var m0="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z";var s0="M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";var v0="M18,11H14.82C14.4,9.84 13.3,9 12,9C10.7,9 9.6,9.84 9.18,11H6C5.67,11 4,10.9 4,9V8C4,6.17 5.54,6 6,6H16.18C16.6,7.16 17.7,8 19,8A3,3 0 0,0 22,5A3,3 0 0,0 19,2C17.7,2 16.6,2.84 16.18,4H6C4.39,4 2,5.06 2,8V9C2,11.94 4.39,13 6,13H9.18C9.6,14.16 10.7,15 12,15C13.3,15 14.4,14.16 14.82,13H18C18.33,13 20,13.1 20,15V16C20,17.83 18.46,18 18,18H7.82C7.4,16.84 6.3,16 5,16A3,3 0 0,0 2,19A3,3 0 0,0 5,22C6.3,22 7.4,21.16 7.82,20H18C19.61,20 22,18.93 22,16V15C22,12.07 19.61,11 18,11M19,4A1,1 0 0,1 20,5A1,1 0 0,1 19,6A1,1 0 0,1 18,5A1,1 0 0,1 19,4M5,20A1,1 0 0,1 4,19A1,1 0 0,1 5,18A1,1 0 0,1 6,19A1,1 0 0,1 5,20Z";var Z1="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";var c0="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var x0="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var u0="M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z";var o2=globalThis,i2=o2.ShadowRoot&&(o2.ShadyCSS===void 0||o2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,U2=Symbol(),Z0=new WeakMap,k1=class{constructor(V,C,H){if(this._$cssResult$=!0,H!==U2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=V,this.t=C}get styleSheet(){let V=this.o,C=this.t;if(i2&&V===void 0){let H=C!==void 0&&C.length===1;H&&(V=Z0.get(C)),V===void 0&&((this.o=V=new CSSStyleSheet).replaceSync(this.cssText),H&&Z0.set(C,V))}return V}toString(){return this.cssText}},S0=L=>new k1(typeof L=="string"?L:L+"",void 0,U2),O=(L,...V)=>{let C=L.length===1?L[0]:V.reduce((H,e,r)=>H+(M=>{if(M._$cssResult$===!0)return M.cssText;if(typeof M=="number")return M;throw Error("Value passed to 'css' function must be a 'css' function result: "+M+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+L[r+1],L[0]);return new k1(C,L,U2)},h0=(L,V)=>{if(i2)L.adoptedStyleSheets=V.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of V){let H=document.createElement("style"),e=o2.litNonce;e!==void 0&&H.setAttribute("nonce",e),H.textContent=C.cssText,L.appendChild(H)}},G2=i2?L=>L:L=>L instanceof CSSStyleSheet?(V=>{let C="";for(let H of V.cssRules)C+=H.cssText;return S0(C)})(L):L;var{is:N9,defineProperty:I9,getOwnPropertyDescriptor:z9,getOwnPropertyNames:W9,getOwnPropertySymbols:U9,getPrototypeOf:G9}=Object,a2=globalThis,f0=a2.trustedTypes,Q9=f0?f0.emptyScript:"",K9=a2.reactiveElementPolyfillSupport,T1=(L,V)=>L,P1={toAttribute(L,V){switch(V){case Boolean:L=L?Q9:null;break;case Object:case Array:L=L==null?L:JSON.stringify(L)}return L},fromAttribute(L,V){let C=L;switch(V){case Boolean:C=L!==null;break;case Number:C=L===null?null:Number(L);break;case Object:case Array:try{C=JSON.parse(L)}catch{C=null}}return C}},A2=(L,V)=>!N9(L,V),g0={attribute:!0,type:String,converter:P1,reflect:!1,useDefault:!1,hasChanged:A2};Symbol.metadata??=Symbol("metadata"),a2.litPropertyMetadata??=new WeakMap;var C1=class extends HTMLElement{static addInitializer(V){this._$Ei(),(this.l??=[]).push(V)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(V,C=g0){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(V)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(V,C),!C.noAccessor){let H=Symbol(),e=this.getPropertyDescriptor(V,H,C);e!==void 0&&I9(this.prototype,V,e)}}static getPropertyDescriptor(V,C,H){let{get:e,set:r}=z9(this.prototype,V)??{get(){return this[C]},set(M){this[C]=M}};return{get:e,set(M){let t=e?.call(this);r?.call(this,M),this.requestUpdate(V,t,H)},configurable:!0,enumerable:!0}}static getPropertyOptions(V){return this.elementProperties.get(V)??g0}static _$Ei(){if(this.hasOwnProperty(T1("elementProperties")))return;let V=G9(this);V.finalize(),V.l!==void 0&&(this.l=[...V.l]),this.elementProperties=new Map(V.elementProperties)}static finalize(){if(this.hasOwnProperty(T1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T1("properties"))){let C=this.properties,H=[...W9(C),...U9(C)];for(let e of H)this.createProperty(e,C[e])}let V=this[Symbol.metadata];if(V!==null){let C=litPropertyMetadata.get(V);if(C!==void 0)for(let[H,e]of C)this.elementProperties.set(H,e)}this._$Eh=new Map;for(let[C,H]of this.elementProperties){let e=this._$Eu(C,H);e!==void 0&&this._$Eh.set(e,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(V){let C=[];if(Array.isArray(V)){let H=new Set(V.flat(1/0).reverse());for(let e of H)C.unshift(G2(e))}else V!==void 0&&C.push(G2(V));return C}static _$Eu(V,C){let H=C.attribute;return H===!1?void 0:typeof H=="string"?H:typeof V=="string"?V.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(V=>this.enableUpdating=V),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(V=>V(this))}addController(V){(this._$EO??=new Set).add(V),this.renderRoot!==void 0&&this.isConnected&&V.hostConnected?.()}removeController(V){this._$EO?.delete(V)}_$E_(){let V=new Map,C=this.constructor.elementProperties;for(let H of C.keys())this.hasOwnProperty(H)&&(V.set(H,this[H]),delete this[H]);V.size>0&&(this._$Ep=V)}createRenderRoot(){let V=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h0(V,this.constructor.elementStyles),V}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(V=>V.hostConnected?.())}enableUpdating(V){}disconnectedCallback(){this._$EO?.forEach(V=>V.hostDisconnected?.())}attributeChangedCallback(V,C,H){this._$AK(V,H)}_$ET(V,C){let H=this.constructor.elementProperties.get(V),e=this.constructor._$Eu(V,H);if(e!==void 0&&H.reflect===!0){let r=(H.converter?.toAttribute!==void 0?H.converter:P1).toAttribute(C,H.type);this._$Em=V,r==null?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(V,C){let H=this.constructor,e=H._$Eh.get(V);if(e!==void 0&&this._$Em!==e){let r=H.getPropertyOptions(e),M=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:P1;this._$Em=e;let t=M.fromAttribute(C,r.type);this[e]=t??this._$Ej?.get(e)??t,this._$Em=null}}requestUpdate(V,C,H,e=!1,r){if(V!==void 0){let M=this.constructor;if(e===!1&&(r=this[V]),H??=M.getPropertyOptions(V),!((H.hasChanged??A2)(r,C)||H.useDefault&&H.reflect&&r===this._$Ej?.get(V)&&!this.hasAttribute(M._$Eu(V,H))))return;this.C(V,C,H)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(V,C,{useDefault:H,reflect:e,wrapped:r},M){H&&!(this._$Ej??=new Map).has(V)&&(this._$Ej.set(V,M??C??this[V]),r!==!0||M!==void 0)||(this._$AL.has(V)||(this.hasUpdated||H||(C=void 0),this._$AL.set(V,C)),e===!0&&this._$Em!==V&&(this._$Eq??=new Set).add(V))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let V=this.scheduleUpdate();return V!=null&&await V,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,r]of this._$Ep)this[e]=r;this._$Ep=void 0}let H=this.constructor.elementProperties;if(H.size>0)for(let[e,r]of H){let{wrapped:M}=r,t=this[e];M!==!0||this._$AL.has(e)||t===void 0||this.C(e,void 0,r,t)}}let V=!1,C=this._$AL;try{V=this.shouldUpdate(C),V?(this.willUpdate(C),this._$EO?.forEach(H=>H.hostUpdate?.()),this.update(C)):this._$EM()}catch(H){throw V=!1,this._$EM(),H}V&&this._$AE(C)}willUpdate(V){}_$AE(V){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(V)),this.updated(V)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(V){return!0}update(V){this._$Eq&&=this._$Eq.forEach(C=>this._$ET(C,this[C])),this._$EM()}updated(V){}firstUpdated(V){}};C1.elementStyles=[],C1.shadowRootOptions={mode:"open"},C1[T1("elementProperties")]=new Map,C1[T1("finalized")]=new Map,K9?.({ReactiveElement:C1}),(a2.reactiveElementVersions??=[]).push("2.1.2");var K2=globalThis,O0=L=>L,n2=K2.trustedTypes,b0=n2?n2.createPolicy("lit-html",{createHTML:L=>L}):void 0,q2="$lit$",H1=`lit$${Math.random().toFixed(9).slice(2)}$`,Y2="?"+H1,q9=`<${Y2}>`,m1=document,E1=()=>m1.createComment(""),R1=L=>L===null||typeof L!="object"&&typeof L!="function",j2=Array.isArray,P0=L=>j2(L)||typeof L?.[Symbol.iterator]=="function",Q2=`[ 	
\f\r]`,B1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y0=/-->/g,_0=/>/g,p1=RegExp(`>|${Q2}(?:([^\\s"'>=/]+)(${Q2}*=${Q2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),w0=/'/g,k0=/"/g,B0=/^(?:script|style|textarea|title)$/i,X2=L=>(V,...C)=>({_$litType$:L,strings:V,values:C}),o=X2(1),s8=X2(2),v8=X2(3),j=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),T0=new WeakMap,l1=m1.createTreeWalker(m1,129);function E0(L,V){if(!j2(L)||!L.hasOwnProperty("raw"))throw Error("invalid template strings array");return b0!==void 0?b0.createHTML(V):V}var R0=(L,V)=>{let C=L.length-1,H=[],e,r=V===2?"<svg>":V===3?"<math>":"",M=B1;for(let t=0;t<C;t++){let i=L[t],n,p,d=-1,c=0;for(;c<i.length&&(M.lastIndex=c,p=M.exec(i),p!==null);)c=M.lastIndex,M===B1?p[1]==="!--"?M=y0:p[1]!==void 0?M=_0:p[2]!==void 0?(B0.test(p[2])&&(e=RegExp("</"+p[2],"g")),M=p1):p[3]!==void 0&&(M=p1):M===p1?p[0]===">"?(M=e??B1,d=-1):p[1]===void 0?d=-2:(d=M.lastIndex-p[2].length,n=p[1],M=p[3]===void 0?p1:p[3]==='"'?k0:w0):M===k0||M===w0?M=p1:M===y0||M===_0?M=B1:(M=p1,e=void 0);let x=M===p1&&L[t+1].startsWith("/>")?" ":"";r+=M===B1?i+q9:d>=0?(H.push(n),i.slice(0,d)+q2+i.slice(d)+H1+x):i+H1+(d===-2?t:x)}return[E0(L,r+(L[C]||"<?>")+(V===2?"</svg>":V===3?"</math>":"")),H]},F1=class L{constructor({strings:V,_$litType$:C},H){let e;this.parts=[];let r=0,M=0,t=V.length-1,i=this.parts,[n,p]=R0(V,C);if(this.el=L.createElement(n,H),l1.currentNode=this.el.content,C===2||C===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(e=l1.nextNode())!==null&&i.length<t;){if(e.nodeType===1){if(e.hasAttributes())for(let d of e.getAttributeNames())if(d.endsWith(q2)){let c=p[M++],x=e.getAttribute(d).split(H1),h=/([.?@])?(.*)/.exec(c);i.push({type:1,index:r,name:h[2],strings:x,ctor:h[1]==="."?p2:h[1]==="?"?l2:h[1]==="@"?m2:v1}),e.removeAttribute(d)}else d.startsWith(H1)&&(i.push({type:6,index:r}),e.removeAttribute(d));if(B0.test(e.tagName)){let d=e.textContent.split(H1),c=d.length-1;if(c>0){e.textContent=n2?n2.emptyScript:"";for(let x=0;x<c;x++)e.append(d[x],E1()),l1.nextNode(),i.push({type:2,index:++r});e.append(d[c],E1())}}}else if(e.nodeType===8)if(e.data===Y2)i.push({type:2,index:r});else{let d=-1;for(;(d=e.data.indexOf(H1,d+1))!==-1;)i.push({type:7,index:r}),d+=H1.length-1}r++}}static createElement(V,C){let H=m1.createElement("template");return H.innerHTML=V,H}};function s1(L,V,C=L,H){if(V===j)return V;let e=H!==void 0?C._$Co?.[H]:C._$Cl,r=R1(V)?void 0:V._$litDirective$;return e?.constructor!==r&&(e?._$AO?.(!1),r===void 0?e=void 0:(e=new r(L),e._$AT(L,C,H)),H!==void 0?(C._$Co??=[])[H]=e:C._$Cl=e),e!==void 0&&(V=s1(L,e._$AS(L,V.values),e,H)),V}var d2=class{constructor(V,C){this._$AV=[],this._$AN=void 0,this._$AD=V,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(V){let{el:{content:C},parts:H}=this._$AD,e=(V?.creationScope??m1).importNode(C,!0);l1.currentNode=e;let r=l1.nextNode(),M=0,t=0,i=H[0];for(;i!==void 0;){if(M===i.index){let n;i.type===2?n=new S1(r,r.nextSibling,this,V):i.type===1?n=new i.ctor(r,i.name,i.strings,this,V):i.type===6&&(n=new s2(r,this,V)),this._$AV.push(n),i=H[++t]}M!==i?.index&&(r=l1.nextNode(),M++)}return l1.currentNode=m1,e}p(V){let C=0;for(let H of this._$AV)H!==void 0&&(H.strings!==void 0?(H._$AI(V,H,C),C+=H.strings.length-2):H._$AI(V[C])),C++}},S1=class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(V,C,H,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=V,this._$AB=C,this._$AM=H,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let V=this._$AA.parentNode,C=this._$AM;return C!==void 0&&V?.nodeType===11&&(V=C.parentNode),V}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(V,C=this){V=s1(this,V,C),R1(V)?V===A||V==null||V===""?(this._$AH!==A&&this._$AR(),this._$AH=A):V!==this._$AH&&V!==j&&this._(V):V._$litType$!==void 0?this.$(V):V.nodeType!==void 0?this.T(V):P0(V)?this.k(V):this._(V)}O(V){return this._$AA.parentNode.insertBefore(V,this._$AB)}T(V){this._$AH!==V&&(this._$AR(),this._$AH=this.O(V))}_(V){this._$AH!==A&&R1(this._$AH)?this._$AA.nextSibling.data=V:this.T(m1.createTextNode(V)),this._$AH=V}$(V){let{values:C,_$litType$:H}=V,e=typeof H=="number"?this._$AC(V):(H.el===void 0&&(H.el=F1.createElement(E0(H.h,H.h[0]),this.options)),H);if(this._$AH?._$AD===e)this._$AH.p(C);else{let r=new d2(e,this),M=r.u(this.options);r.p(C),this.T(M),this._$AH=r}}_$AC(V){let C=T0.get(V.strings);return C===void 0&&T0.set(V.strings,C=new F1(V)),C}k(V){j2(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,H,e=0;for(let r of V)e===C.length?C.push(H=new L(this.O(E1()),this.O(E1()),this,this.options)):H=C[e],H._$AI(r),e++;e<C.length&&(this._$AR(H&&H._$AB.nextSibling,e),C.length=e)}_$AR(V=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);V!==this._$AB;){let H=O0(V).nextSibling;O0(V).remove(),V=H}}setConnected(V){this._$AM===void 0&&(this._$Cv=V,this._$AP?.(V))}},v1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(V,C,H,e,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=V,this.name=C,this._$AM=e,this.options=r,H.length>2||H[0]!==""||H[1]!==""?(this._$AH=Array(H.length-1).fill(new String),this.strings=H):this._$AH=A}_$AI(V,C=this,H,e){let r=this.strings,M=!1;if(r===void 0)V=s1(this,V,C,0),M=!R1(V)||V!==this._$AH&&V!==j,M&&(this._$AH=V);else{let t=V,i,n;for(V=r[0],i=0;i<r.length-1;i++)n=s1(this,t[H+i],C,i),n===j&&(n=this._$AH[i]),M||=!R1(n)||n!==this._$AH[i],n===A?V=A:V!==A&&(V+=(n??"")+r[i+1]),this._$AH[i]=n}M&&!e&&this.j(V)}j(V){V===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,V??"")}},p2=class extends v1{constructor(){super(...arguments),this.type=3}j(V){this.element[this.name]=V===A?void 0:V}},l2=class extends v1{constructor(){super(...arguments),this.type=4}j(V){this.element.toggleAttribute(this.name,!!V&&V!==A)}},m2=class extends v1{constructor(V,C,H,e,r){super(V,C,H,e,r),this.type=5}_$AI(V,C=this){if((V=s1(this,V,C,0)??A)===j)return;let H=this._$AH,e=V===A&&H!==A||V.capture!==H.capture||V.once!==H.once||V.passive!==H.passive,r=V!==A&&(H===A||e);e&&this.element.removeEventListener(this.name,this,H),r&&this.element.addEventListener(this.name,this,V),this._$AH=V}handleEvent(V){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,V):this._$AH.handleEvent(V)}},s2=class{constructor(V,C,H){this.element=V,this.type=6,this._$AN=void 0,this._$AM=C,this.options=H}get _$AU(){return this._$AM._$AU}_$AI(V){s1(this,V)}},F0={M:q2,P:H1,A:Y2,C:1,L:R0,R:d2,D:P0,V:s1,I:S1,H:v1,N:l2,U:m2,B:p2,F:s2},Y9=K2.litHtmlPolyfillSupport;Y9?.(F1,S1),(K2.litHtmlVersions??=[]).push("3.3.3");var $0=(L,V,C)=>{let H=C?.renderBefore??V,e=H._$litPart$;if(e===void 0){let r=C?.renderBefore??null;H._$litPart$=e=new S1(V.insertBefore(E1(),r),r,void 0,C??{})}return e._$AI(L),e};var J2=globalThis,T=class extends C1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let V=super.createRenderRoot();return this.renderOptions.renderBefore??=V.firstChild,V}update(V){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(V),this._$Do=$0(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};T._$litElement$=!0,T.finalized=!0,J2.litElementHydrateSupport?.({LitElement:T});var j9=J2.litElementPolyfillSupport;j9?.({LitElement:T});(J2.litElementVersions??=[]).push("4.2.2");var X9={attribute:!0,type:String,converter:P1,reflect:!1,hasChanged:A2},J9=(L=X9,V,C)=>{let{kind:H,metadata:e}=C,r=globalThis.litPropertyMetadata.get(e);if(r===void 0&&globalThis.litPropertyMetadata.set(e,r=new Map),H==="setter"&&((L=Object.create(L)).wrapped=!0),r.set(C.name,L),H==="accessor"){let{name:M}=C;return{set(t){let i=V.get.call(this);V.set.call(this,t),this.requestUpdate(M,i,L,!0,t)},init(t){return t!==void 0&&this.C(M,void 0,L,t),t}}}if(H==="setter"){let{name:M}=C;return function(t){let i=this[M];V.call(this,t),this.requestUpdate(M,i,L,!0,t)}}throw Error("Unsupported decorator location: "+H)};function _(L){return(V,C)=>typeof C=="object"?J9(L,V,C):((H,e,r)=>{let M=e.hasOwnProperty(r);return e.constructor.createProperty(r,H),M?Object.getOwnPropertyDescriptor(e,r):void 0})(L,V,C)}function Z(L){return _({...L,state:!0,attribute:!1})}var H5="more-info-popup-card",V5="more-info-popup-card",L1="more-info-popup-dialog",D1="more-info-popup-card-editor",e1={breadcrumb:"auto",mode:"auto",width:"medium",height:"auto",column_span:1,layout:"single",vertical_align:"top",horizontal_align:"left",card_borders:!0,show_header_actions:!0,replace_more_info:!1,nested_more_info:"inline",dismissable:!0,auto_close:0,keep_alive:!1},C6=["auto","dialog","bottom_sheet","top_sheet"],H6=["small","medium","large","full","custom"],V6=["auto","custom"],L6=["inline","dialog"],N0=["top","center","bottom"],I0=["left","center","right"],e6=["single","zones"],r6=/^[a-z0-9][a-z0-9_-]*$/,M6=/^\d+(\.\d+)?(px|%|vw|vh|dvh|svh|lvh|em|rem)$/,z0=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^[_-]+|[_-]+$/g,"").slice(0,48),V1=(L,V,C)=>{if(V!==void 0&&!C.includes(V))throw new Error(`"${L}" must be one of: ${C.join(", ")}`)},c2=(L,V)=>{if(V!==void 0&&V!==""&&!M6.test(String(V)))throw new Error(`"${L}" must be a CSS length such as 720px or 80vh`)},C5=["cards","vertical_align","horizontal_align","min_height"],D0=(L,V)=>{if(V===void 0)return;if(!V||typeof V!="object"||Array.isArray(V))throw new Error(`"${L}" must be an object with: ${C5.join(", ")}`);let C=V,H=Object.keys(C).find(e=>!C5.includes(e));if(H)throw new Error(`Unknown "${L}.${H}"; use: ${C5.join(", ")}`);if(C.cards!==void 0&&!Array.isArray(C.cards))throw new Error(`"${L}.cards" must be a list`);V1(`${L}.vertical_align`,C.vertical_align,N0),V1(`${L}.horizontal_align`,C.horizontal_align,I0),c2(`${L}.min_height`,C.min_height)},$1=["integration","domain","entities","entity_glob"],t6=L=>{if(L===void 0)return;if(!L||typeof L!="object"||Array.isArray(L))throw new Error(`"match" must be an object with: ${$1.join(", ")}`);let V=L,C=Object.keys(V).find(H=>!$1.includes(H));if(C)throw new Error(`Unknown "match.${C}"; use: ${$1.join(", ")}`);if(!$1.some(H=>V[H]!==void 0))throw new Error(`"match" needs one of: ${$1.join(", ")}`);for(let H of["integration","domain","entity_glob"])if(V[H]!==void 0&&(typeof V[H]!="string"||!V[H]))throw new Error(`"match.${H}" must be a text`);if(V.domain!==void 0&&!/^[a-z0-9_]+$/.test(V.domain))throw new Error('"match.domain" must be a domain such as light');if(V.entities!==void 0&&(!Array.isArray(V.entities)||V.entities.some(H=>typeof H!="string"||!H.includes("."))))throw new Error('"match.entities" must be a list of entity IDs')},N1=L=>{if(!L||typeof L!="object")throw new Error("Invalid configuration");let V=L;if(!V.popup_id||typeof V.popup_id!="string")throw new Error('"popup_id" is required');if(!r6.test(V.popup_id))throw new Error('"popup_id" may only contain lowercase letters, digits, "_" and "-"');if(V.entity!==void 0&&(typeof V.entity!="string"||!V.entity.includes(".")))throw new Error('"entity" must be an entity ID');if(t6(V.match),V.cards!==void 0&&!Array.isArray(V.cards))throw new Error('"cards" must be a list');if(V1("mode",V.mode,C6),V1("width",V.width,H6),V1("height",V.height,V6),V1("nested_more_info",V.nested_more_info,L6),V1("layout",V.layout,e6),D0("header",V.header),D0("footer",V.footer),V1("vertical_align",V.vertical_align,N0),V1("horizontal_align",V.horizontal_align,I0),V.card_borders!==void 0&&typeof V.card_borders!="boolean")throw new Error('"card_borders" must be true or false');if(c2("custom_width",V.custom_width),c2("min_height",V.min_height),c2("max_height",V.max_height),V.column_span!==void 0&&(!Number.isInteger(V.column_span)||V.column_span<1||V.column_span>4))throw new Error('"column_span" must be an integer between 1 and 4');if(V.auto_close!==void 0&&(typeof V.auto_close!="number"||V.auto_close<0))throw new Error('"auto_close" must be a positive number of seconds');return V},x2=L=>({...e1,...L,cards:L.cards??[]}),W0=L=>L.width==="custom"?"medium":L.width==="medium"&&L.column_span>1?"large":L.width,U0=L=>{let V={};return L.width==="custom"&&L.custom_width&&(V["--ha-dialog-width-md"]=L.custom_width,V["--ha-bottom-sheet-max-width"]=L.custom_width),L.height==="custom"&&(L.min_height&&(V["--ha-dialog-min-height"]=L.min_height,V["--ha-bottom-sheet-height"]=L.min_height),L.max_height&&(V["--ha-dialog-max-height"]=L.max_height,V["--ha-bottom-sheet-max-height"]=L.max_height)),V};var v=L=>L.substring(0,L.indexOf(".")),u2=L=>L.substring(L.indexOf(".")+1),Q0=["scene","automation"],K0=["script"],q0=["camera","configurator"],o6=["counter","input_number","number","proximity","sensor"],i6=["alarm_control_panel","automation","camera","climate","configurator","conversation","counter","cover","date","datetime","fan","group","humidifier","image","input_boolean","input_datetime","lawn_mower","light","lock","media_player","person","remote","script","scene","siren","sun","switch","time","timer","update","vacuum","valve","water_heater","weather"],I1=L=>!!L.user?.is_admin,Y0=(L,V)=>L.config.components.includes(V),a6=(L,V)=>Y0(L,"history")&&!q0.includes(v(V)),A6=(L,V)=>{if(!Y0(L,"logbook")||!L.states[V])return!1;let H=v(V);return!(q0.includes(H)||o6.includes(H))},j0=(L,V,C)=>(!C||i6.includes(v(V)))&&(a6(L,V)||A6(L,V)),L5=L=>I1(L)||!!L.auth.external?.config.hasEntityAddTo,e5=(L,V)=>L.entities[V]?.device_id??null,X0=(L,V)=>(V&&L.devices[V]?.entry_type)==="service"?"service":"device",J0=L=>{if(!L)return!1;let V=v(L.entity_id);return Q0.includes(V)&&L.attributes.id||K0.includes(V)?!0:V==="person"&&L.attributes.editable!=="false"},C7=(L,V)=>{let C=v(L.entity_id),H=L.entity_id;return(Q0.includes(C)||C==="person")&&(H=L.attributes.id),K0.includes(C)&&(H=V),H?`/config/${C}/edit/${H}`:void 0},r1=L=>L.attributes.friendly_name??L.entity_id.substring(L.entity_id.indexOf(".")+1),G0=(L,V)=>{let C=V?L.devices[V]:void 0;return C&&(C.name_by_user||C.name)?.trim()||void 0},r5=(L,V)=>{let C=L.states[V],H=L.entities[V];if(!H)return[C?r1(C):V];let e=H.device_id?L.devices[H.device_id]:void 0,r=H.area_id||e?.area_id,M=r?L.areas[r]?.name:void 0,t=c=>C&&L.formatEntityName&&L.formatEntityName(C,{type:c})||void 0,i=G0(L,H.device_id),n=t("entity")??(C?r1(C):void 0);n&&i&&n===i&&(n=void 0);let p=H.next_name_part==="device"||!n,d=p&&e?.next_name_part==="parent_device"?G0(L,e.parent_device_id):void 0;return[M,d,p?i:void 0,n].filter(c=>!!c)},H7=L=>!!L.translationMetadata?.translations?.[L.language]?.isRTL;var w=(L,V,C,H={})=>{let e=new CustomEvent(V,{bubbles:H.bubbles??!0,cancelable:H.cancelable??!1,composed:H.composed??!0,detail:C??{}});return L.dispatchEvent(e),e};var n6=["ha-adaptive-dialog","ha-dialog","ha-bottom-sheet","ha-dialog-header","ha-icon-button","ha-icon-button-prev","ha-dropdown","ha-dropdown-item","hui-section"],r7={info:"ha-more-info-info",history:"ha-more-info-history-and-logbook",settings:"ha-more-info-settings",related:"ha-more-info-related",details:"ha-more-info-details",add_to:"ha-more-info-add-to"},W1=L=>customElements.get(L)!==void 0,X=async(L,V=5e3)=>{if(W1(L))return!0;let C,H=await Promise.race([customElements.whenDefined(L).then(()=>!0),new Promise(e=>{C=setTimeout(()=>e(!1),V)})]);return clearTimeout(C),H},V7,M7=()=>(V7??=(async()=>{await X("ha-more-info-dialog");let L=[];for(let V of n6)await X(V,2e3)||L.push(V);return L.length&&console.warn("[more-info-popup-card] Missing Home Assistant elements:",L.join(", ")),L})(),V7),L7=async L=>{let V=customElements.get(L);try{await V?.getConfigElement?.()}catch{}},e7,t7=()=>(e7??=(async()=>{await Promise.all([X("hui-tile-card"),X("hui-grid-card")]),await Promise.all([L7("hui-tile-card"),L7("hui-grid-card")]),await Promise.all([X("ha-form"),X("hui-card-picker"),X("hui-card-element-editor")])})(),e7),d6=L=>{let V=L?.match(/^(\d{4})\.(\d{1,2})/);return V?[Number(V[1]),Number(V[2])]:void 0},z1=[2026,10],o7=L=>{let V=d6(L);if(!V)return!0;let[C,H]=V;return C>z1[0]||C===z1[0]&&H>=z1[1]},M5=(L,V,C,H)=>{let e=customElements.get(V)?.prototype?.[C];if(typeof e!="function")return console.warn("[more-info-popup-card] Missing",`${V}.${C}`),!1;let r=Object.assign(document.createElement("span"),H);r.hidden=!0,L.appendChild(r);try{e.call(r)}finally{r.remove()}return!0};var Z2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},h1=L=>(...V)=>({_$litDirective$:L,values:V}),i1=class{constructor(V){}get _$AU(){return this._$AM._$AU}_$AT(V,C,H){this._$Ct=V,this._$AM=C,this._$Ci=H}_$AS(V,C){return this.update(V,C)}update(V,C){return this.render(...C)}};var P=h1(class extends i1{constructor(L){if(super(L),L.type!==Z2.ATTRIBUTE||L.name!=="class"||L.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(L){return" "+Object.keys(L).filter(V=>L[V]).join(" ")+" "}update(L,[V]){if(this.st===void 0){this.st=new Set,L.strings!==void 0&&(this.nt=new Set(L.strings.join(" ").split(/\s/).filter(H=>H!=="")));for(let H in V)V[H]&&!this.nt?.has(H)&&this.st.add(H);return this.render(V)}let C=L.element.classList;for(let H of this.st)H in V||(C.remove(H),this.st.delete(H));for(let H in V){let e=!!V[H];e===this.st.has(H)||this.nt?.has(H)||(e?(C.add(H),this.st.add(H)):(C.remove(H),this.st.delete(H)))}return j}});var i7="important",p6=" !"+i7,F=h1(class extends i1{constructor(L){if(super(L),L.type!==Z2.ATTRIBUTE||L.name!=="style"||L.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(L){return Object.keys(L).reduce((V,C)=>{let H=L[C];return H==null?V:V+`${C=C.includes("-")?C:C.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${H};`},"")}update(L,[V]){let{style:C}=L.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(V)),this.render(V);for(let H of this.ft)V[H]==null&&(this.ft.delete(H),H.includes("-")?C.removeProperty(H):C[H]=null);for(let H in V){let e=V[H];if(e!=null){this.ft.add(H);let r=typeof e=="string"&&e.endsWith(p6);H.includes("-")||r?C.setProperty(H,r?e.slice(0,-11):e,r?i7:""):C[H]=e}}return j}});var a1="popup-align",l6=`
  :host([${a1}]) .container {
    display: flex;
    flex-wrap: wrap;
  }
  :host([${a1}="center"]) .container {
    justify-content: center;
  }
  :host([${a1}="right"]) .container {
    justify-content: flex-end;
  }
  :host([${a1}]) .card {
    flex: 0 0 auto;
    box-sizing: border-box;
    width: calc(
      (100% + var(--column-gap)) *
        min(var(--column-size, 1), var(--grid-column-count)) /
        var(--grid-column-count) - var(--column-gap)
    );
  }
  :host([${a1}]) .card.full-width {
    width: 100%;
  }
  /* "Add card" button of the editor preview (3 columns wide) */
  :host([${a1}]) .add {
    flex: 0 0 auto;
    width: calc(
      (100% + var(--column-gap)) * 3 / var(--grid-column-count) -
        var(--column-gap)
    );
  }
`,U1,a7=(L,V)=>{let C=L.shadowRoot;return C?(U1??=new CSSStyleSheet,U1.cssRules.length||U1.replaceSync(l6),C.adoptedStyleSheets.includes(U1)||(C.adoptedStyleSheets=[...C.adoptedStyleSheets,U1]),V==="left"?L.removeAttribute(a1):L.setAttribute(a1,V),!0):!1},A7=new WeakMap,t5=new WeakMap,S2=(L,V)=>{t5.set(L,V);let C=()=>{let H=L.querySelector("hui-grid-section");H&&(a7(H,t5.get(L))||H.updateComplete?.then(()=>a7(H,t5.get(L))))};if(!A7.has(L)){let H=new MutationObserver(C);H.observe(L,{childList:!0}),A7.set(L,H)}C()};var G1=L=>{let V={id:"main",cards:L.cards??[],vertical_align:L.vertical_align??e1.vertical_align,horizontal_align:L.horizontal_align??e1.horizontal_align};if(L.layout!=="zones")return[V];let C=H=>({id:H,cards:L[H]?.cards??[],vertical_align:L[H]?.vertical_align??"top",horizontal_align:L[H]?.horizontal_align??"left",min_height:L[H]?.min_height});return[C("header"),V,C("footer")]},d7=(L,V)=>(V==="main"?L.cards:L[V]?.cards)??[],p7=(L,V,C)=>{if(V==="main")return{...L,cards:C};let H={...L[V],cards:C};C.length||delete H.cards;let e={...L,[V]:H};return Object.keys(H).length||delete e[V],e},l7=L=>G1(L).flatMap(V=>V.cards),o5=(L,V)=>({type:"grid",column_span:L.column_span??e1.column_span,cards:V}),f1=class{_sections=new Map;_keys=new Map;update(V,C){let H=new Map;for(let e of G1(V)){let r=this._sections.get(e.id);r||(r=document.createElement("hui-section"),this._sections.set(e.id,r)),r.hass=C;let M=o5(V,e.cards),t=JSON.stringify(M);this._keys.get(e.id)!==t&&(this._keys.set(e.id,t),r.config=M),S2(r,e.horizontal_align),H.set(e.id,r)}return H}set hass(V){for(let C of this._sections.values())C.hass=V}},m6=L=>L.id==="main"||L.cards.length>0,n7=(L,V,C)=>o`
  <div
    class="zone zone-${L.id} align-${L.vertical_align} ${C?"ha-scrollbar":""}"
    style=${F({"min-height":L.min_height||void 0})}
    @scroll=${C}
  >
    ${V}
  </div>
`,h2=(L,V,C={})=>{let H=G1(L),e=F({"--column-span":String(L.column_span??e1.column_span)}),r=L.card_borders===!1;if(L.layout!=="zones"){let[M]=H;return o`
      <div
        class=${P({body:!0,[`align-${M.vertical_align}`]:!0,borderless:r})}
        ?hidden=${C.hidden??!1}
        style=${e}
      >
        ${V.get("main")}
      </div>
    `}return o`
    <div
      class=${P({body:!0,zones:!0,borderless:r})}
      ?hidden=${C.hidden??!1}
      style=${e}
    >
      ${H.filter(m6).map(M=>M.id!=="main"?n7(M,V.get(M.id)):o`
              <div class="zone-main-frame">
                ${n7(M,V.get(M.id),C.onScroll)}
                ${C.onScroll?o`
                        <div
                          class=${P({"fade-top":!0,visible:!!C.fadeTop})}
                        ></div>
                        <div
                          class=${P({"fade-bottom":!0,visible:!!C.fadeBottom})}
                        ></div>
                      `:""}
              </div>
            `)}
    </div>
  `},f2=O`
  .body.zones {
    padding: 0;
  }
  .zone {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: var(--ha-space-3) var(--ha-space-6);
  }
  .zone-header {
    flex: none;
    padding-top: var(--ha-space-6);
  }
  .zone-footer {
    flex: none;
    padding-bottom: max(var(--safe-area-inset-bottom), var(--ha-space-6));
  }
  .zone-main-frame {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
  .zone-main {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
  }
  .zone-main-frame:first-child .zone-main {
    padding-top: var(--ha-space-6);
  }
  .zone-main-frame:last-child .zone-main {
    padding-bottom: max(var(--safe-area-inset-bottom), var(--ha-space-6));
  }
  /* Auto margins (not justify-content) keep the top of a main zone taller
     than the popup reachable by scrolling. */
  .zone.align-center > hui-section {
    margin-block: auto;
  }
  .zone.align-bottom > hui-section {
    margin-top: auto;
  }
  .zone hui-section {
    display: block;
    width: 100%;
  }
`;var m7=O`
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
`,s7=O`
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
`,v7=O`
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
`,c7=O`
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
`,g2=O`
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
`,O2=O`
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
  /* card_borders: false */
  .body.borderless {
    --ha-card-border-width: 0;
    --ha-card-box-shadow: none;
  }
  ha-more-info-history-and-logbook {
    padding: var(--ha-space-2) 0 var(--ha-space-6) 0;
    display: block;
  }
`;var i5={"card.name":"More-info popup","card.description":"A container shown as a native more-info popup, with a sections-style grid of cards inside.","card.cards_count":"{count} cards","card.cards_count_one":"1 card","card.hidden_hint":"Hidden on the dashboard \xB7 opens with #{id}","card.missing_elements":"This Home Assistant version is missing elements the popup needs. Check the browser console.","card.unsupported_version":"More-info popup card requires Home Assistant {version} or newer.","dialog.entity_controls":"Entity controls","editor.tab.cards":"Cards","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Appearance","editor.section.behavior":"Behavior","editor.popup_id":"Popup ID","editor.popup_id_helper":"Open it with a Navigate action to #{id}","editor.entity":"Entity","editor.entity_helper":"Optional. Enables the history, settings and menu buttons of the native header.","editor.name":"Title","editor.icon":"Icon","editor.breadcrumb":"Breadcrumb","editor.breadcrumb_helper":"Text above the title. Type your own text or pick an option.","editor.breadcrumb.auto":"Area and device (automatic)","editor.breadcrumb.none":"None","editor.mode":"Presentation","editor.mode.auto":"Automatic (like Home Assistant)","editor.mode.dialog":"Centered dialog","editor.mode.bottom_sheet":"Bottom sheet","editor.mode.top_sheet":"Top sheet (drops from the top)","editor.width":"Width","editor.width.small":"Small","editor.width.medium":"Medium (default)","editor.width.large":"Large","editor.width.full":"Full width","editor.width.custom":"Custom","editor.custom_width":"Custom width","editor.height":"Height","editor.height.auto":"Fit content","editor.height.custom":"Custom","editor.min_height":"Minimum height","editor.max_height":"Maximum height","editor.length_helper":"CSS length, for example 720px, 80vh or 90%","editor.column_span":"Grid width (sections)","editor.column_span_helper":"1 = 12 columns like a dashboard section; 2 = 24 columns.","editor.layout":"Layout","editor.layout.single":"One zone","editor.layout.zones":"Header, main and footer","editor.layout_helper":"With three zones the header and footer stay pinned and the main zone takes the free height (and scrolls).","editor.zone.header":"Header","editor.zone.header_hint":"Pinned at the top","editor.zone.main":"Main","editor.zone.main_hint":"Takes the free height and scrolls","editor.zone.footer":"Footer","editor.zone.footer_hint":"Pinned at the bottom","editor.vertical_align":"Vertical alignment","editor.vertical_align.top":"Top","editor.vertical_align.center":"Center","editor.vertical_align.bottom":"Bottom","editor.horizontal_align":"Horizontal alignment","editor.horizontal_align.left":"Left","editor.horizontal_align.center":"Center","editor.horizontal_align.right":"Right","editor.horizontal_align_helper":"For rows narrower than the grid (cards with fewer columns in Layout).","editor.card_borders":"Show card borders","editor.show_header_actions":"Show history, settings and menu","editor.replace_more_info":"Replace the entity's more-info","editor.replace_more_info_helper":"Opening the entity, or any entity matched below, from any card on this view shows this popup instead.","editor.match":"Also for these entities (template popup)","editor.match_integration":"Integration","editor.match_domain":"Domain","editor.entity_glob":"Entity ID pattern","editor.entity_glob_helper":"For example light.wled_*. * matches any text. Integration, domain and pattern must all match.","editor.match_entities":"Entities","editor.match_entities_helper":"Always included. Use entity: this in the cards for the entity that was opened.","editor.nested_more_info":"Entities opened from inside the popup","editor.nested_more_info.inline":"Navigate inside the popup (like Home Assistant)","editor.nested_more_info.dialog":"Open a separate dialog","editor.dismissable":"Close with Esc, outside click or swipe","editor.auto_close":"Close automatically after inactivity","editor.keep_alive":"Keep cards loaded while closed (faster reopen)","editor.test_popup":"Test popup","editor.add_card":"Add card","editor.edit_card":"Edit card","editor.back":"Back","editor.empty":"This popup has no cards yet.","editor.undo":"Undo","editor.card_deleted":"Card deleted","editor.popup_id_invalid":'Use lowercase letters, digits, "_" and "-" only.',"state_card.name":"More-info state","state_card.description":"State header and the big control of a native more-info dialog.","controls_card.name":"More-info controls","controls_card.description":"Row of more-info chips: selects, toggles, numbers and actions.","controls.empty":"Add controls in the editor.","controls.entity":"Entity","controls.control":"Main control","controls.control.auto":"Automatic (like Home Assistant)","controls.control.none":"None","controls.control.toggle":"Toggle","controls.control.brightness":"Brightness slider","controls.control.fan_speed":"Fan speed","controls.control.position":"Cover position","controls.control.tilt":"Cover tilt","controls.control.cover_toggle":"Cover toggle","controls.control.cover_buttons":"Cover buttons","controls.control.valve_position":"Valve position","controls.control.valve_toggle":"Valve toggle","controls.control.valve_buttons":"Valve buttons","controls.control.lock":"Lock","controls.control.alarm_modes":"Alarm modes","controls.control.temperature":"Thermostat","controls.control.climate_humidity":"Climate humidity","controls.control.humidity":"Humidifier","controls.control.water_heater":"Water heater","controls.control.vacuum_status":"Vacuum status","controls.control.lawn_mower_status":"Lawn mower status","controls.control.media_player":"Media player","controls.control.more_info":"Native more-info content","controls.control.script":"Script (run / cancel)","controls.control.press":"Press button","controls.control.trigger":"Trigger (momentary switch)","controls.control.push":"Push button (stateless)","controls.show_state":"Show state","controls.show_cancel":"Show Cancel","controls.show_cancel_helper":"Cancel button under a running script (trigger and push controls).","controls.show_last_changed":"Show last changed","controls.state_override":"State text","controls.appearance":"Appearance","controls.appearance.plain":"Plain (like more-info)","controls.appearance.card":"Card","controls.controls":"Controls","controls.type":"Type","controls.type_helper":"Automatic if empty: select for select entities or attributes, toggle, number or action.","controls.type.select":"Select","controls.type.toggle":"Toggle","controls.type.number":"Number","controls.type.button":"Button (icon)","controls.type.action":"Action","controls.attribute":"Attribute","controls.attribute_helper":"Options shown in the select (effect, preset mode, fan speed\u2026).","controls.attribute.state":"State (on / off)","controls.attribute.effect":"Effect","controls.attribute.preset_mode":"Preset mode","controls.attribute.fan_mode":"Fan mode","controls.attribute.swing_mode":"Swing mode","controls.attribute.swing_horizontal_mode":"Horizontal swing mode","controls.attribute.hvac_mode":"HVAC mode","controls.attribute.fan_speed":"Fan speed (vacuum)","controls.attribute.mode":"Mode","controls.attribute.direction":"Direction","controls.attribute.oscillating":"Oscillating","controls.attribute.operation_mode":"Operation mode","controls.attribute.away_mode":"Away mode","controls.attribute.source":"Source","controls.attribute.sound_mode":"Sound mode","controls.name":"Name","controls.icon":"Icon","controls.icon_off":"Icon when off","controls.icon_helper":"Replaces the entity icon of the toggle, trigger and push button (for the toggle, the on icon).","controls.color":"Color","controls.color_helper":"Color of the control while active (any CSS color or a theme color).","controls.color_off":"Color when off","controls.button_layout":"Push button shape","controls.button_layout_helper":"Only for the push button control.","controls.button_layout.vertical":"Vertical (like the toggle)","controls.button_layout.horizontal":"Horizontal","controls.button_layout.square":"Square","controls.button_layout.circle":"Circle","controls.options":"Options","controls.options_helper":"Optional: which options to show and in which order.","controls.value":"Secondary text","controls.value_helper":"For actions; defaults to the entity state.","controls.tap_action":"Tap action","controls.show_arrow":"Show arrow","controls.perform_action":"Custom action","controls.perform_action_helper":"domain.action that receives the value, e.g. light.turn_on","controls.data_key":"Value field","controls.data_key_helper":"Field of the custom action that receives the value, e.g. effect","controls.min":"Minimum","controls.max":"Maximum","controls.step":"Step","controls.wrap":"Wrap on phones","controls.wrap_helper":"Chips go to new rows instead of scrolling sideways (Home Assistant scrolls)."};var x7={"card.name":"Popup more-info","card.description":"Un contenedor que se muestra como el popup more-info nativo, con una rejilla de tarjetas como una secci\xF3n.","card.cards_count":"{count} tarjetas","card.cards_count_one":"1 tarjeta","card.hidden_hint":"Oculta en el dashboard \xB7 se abre con #{id}","card.missing_elements":"A esta versi\xF3n de Home Assistant le faltan elementos que el popup necesita. Revisa la consola del navegador.","card.unsupported_version":"More-info popup card requiere Home Assistant {version} o superior.","dialog.entity_controls":"Controles de la entidad","editor.tab.cards":"Tarjetas","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Apariencia","editor.section.behavior":"Comportamiento","editor.popup_id":"ID del popup","editor.popup_id_helper":"\xC1brelo con una acci\xF3n Navegar a #{id}","editor.entity":"Entidad","editor.entity_helper":"Opcional. Habilita los botones de historial, ajustes y men\xFA de la cabecera nativa.","editor.name":"T\xEDtulo","editor.icon":"Icono","editor.breadcrumb":"Ruta","editor.breadcrumb_helper":"Texto sobre el t\xEDtulo. Escribe el tuyo o elige una opci\xF3n.","editor.breadcrumb.auto":"\xC1rea y dispositivo (autom\xE1tico)","editor.breadcrumb.none":"Ninguna","editor.mode":"Presentaci\xF3n","editor.mode.auto":"Autom\xE1tica (como Home Assistant)","editor.mode.dialog":"Di\xE1logo centrado","editor.mode.bottom_sheet":"Hoja inferior deslizante","editor.mode.top_sheet":"Hoja superior (cae desde arriba)","editor.width":"Ancho","editor.width.small":"Peque\xF1o","editor.width.medium":"Mediano (por defecto)","editor.width.large":"Grande","editor.width.full":"Ancho completo","editor.width.custom":"Personalizado","editor.custom_width":"Ancho personalizado","editor.height":"Alto","editor.height.auto":"Ajustar al contenido","editor.height.custom":"Personalizado","editor.min_height":"Alto m\xEDnimo","editor.max_height":"Alto m\xE1ximo","editor.length_helper":"Longitud CSS, por ejemplo 720px, 80vh o 90%","editor.column_span":"Ancho de la rejilla (secciones)","editor.column_span_helper":"1 = 12 columnas como una secci\xF3n del dashboard; 2 = 24 columnas.","editor.layout":"Distribuci\xF3n","editor.layout.single":"Una zona","editor.layout.zones":"Cabecera, centro y pie","editor.layout_helper":"Con tres zonas la cabecera y el pie quedan fijos y el centro ocupa el alto libre (y hace scroll).","editor.zone.header":"Cabecera","editor.zone.header_hint":"Fija arriba","editor.zone.main":"Centro","editor.zone.main_hint":"Ocupa el alto libre y hace scroll","editor.zone.footer":"Pie","editor.zone.footer_hint":"Fijo abajo","editor.vertical_align":"Alineaci\xF3n vertical","editor.vertical_align.top":"Arriba","editor.vertical_align.center":"Centro","editor.vertical_align.bottom":"Abajo","editor.horizontal_align":"Alineaci\xF3n horizontal","editor.horizontal_align.left":"Izquierda","editor.horizontal_align.center":"Centro","editor.horizontal_align.right":"Derecha","editor.horizontal_align_helper":"Para filas m\xE1s estrechas que la rejilla (tarjetas con menos columnas en Dise\xF1o).","editor.card_borders":"Mostrar bordes de las tarjetas","editor.show_header_actions":"Mostrar historial, ajustes y men\xFA","editor.replace_more_info":"Reemplazar el more-info de la entidad","editor.replace_more_info_helper":"Al abrir la entidad, o cualquier entidad que coincida abajo, desde cualquier tarjeta de esta vista se muestra este popup.","editor.match":"Tambi\xE9n para estas entidades (popup plantilla)","editor.match_integration":"Integraci\xF3n","editor.match_domain":"Dominio","editor.entity_glob":"Patr\xF3n de ID de entidad","editor.entity_glob_helper":"Por ejemplo light.wled_*. * coincide con cualquier texto. Integraci\xF3n, dominio y patr\xF3n deben coincidir todos.","editor.match_entities":"Entidades","editor.match_entities_helper":"Siempre incluidas. Usa entity: this en las tarjetas para la entidad que se abri\xF3.","editor.nested_more_info":"Entidades abiertas desde dentro del popup","editor.nested_more_info.inline":"Navegar dentro del popup (como Home Assistant)","editor.nested_more_info.dialog":"Abrir un di\xE1logo aparte","editor.dismissable":"Cerrar con Esc, clic fuera o deslizando","editor.auto_close":"Cerrar autom\xE1ticamente tras inactividad","editor.keep_alive":"Mantener las tarjetas cargadas al cerrar (reapertura m\xE1s r\xE1pida)","editor.test_popup":"Probar popup","editor.add_card":"A\xF1adir tarjeta","editor.edit_card":"Editar tarjeta","editor.back":"Volver","editor.empty":"Este popup a\xFAn no tiene tarjetas.","editor.undo":"Deshacer","editor.card_deleted":"Tarjeta eliminada","editor.popup_id_invalid":'Usa solo min\xFAsculas, n\xFAmeros, "_" y "-".',"state_card.name":"Estado more-info","state_card.description":"Cabecera de estado y control grande de un more-info nativo.","controls_card.name":"Controles more-info","controls_card.description":"Fila de chips del more-info: selectores, interruptores, n\xFAmeros y acciones.","controls.empty":"A\xF1ade controles en el editor.","controls.entity":"Entidad","controls.control":"Control principal","controls.control.auto":"Autom\xE1tico (como Home Assistant)","controls.control.none":"Ninguno","controls.control.toggle":"Interruptor","controls.control.brightness":"Control de brillo","controls.control.fan_speed":"Velocidad del ventilador","controls.control.position":"Posici\xF3n de la persiana","controls.control.tilt":"Inclinaci\xF3n de la persiana","controls.control.cover_toggle":"Interruptor de persiana","controls.control.cover_buttons":"Botones de persiana","controls.control.valve_position":"Posici\xF3n de la v\xE1lvula","controls.control.valve_toggle":"Interruptor de v\xE1lvula","controls.control.valve_buttons":"Botones de v\xE1lvula","controls.control.lock":"Cerradura","controls.control.alarm_modes":"Modos de alarma","controls.control.temperature":"Termostato","controls.control.climate_humidity":"Humedad del clima","controls.control.humidity":"Humidificador","controls.control.water_heater":"Calentador de agua","controls.control.vacuum_status":"Estado de la aspiradora","controls.control.lawn_mower_status":"Estado del cortac\xE9sped","controls.control.media_player":"Reproductor multimedia","controls.control.more_info":"Contenido nativo de more-info","controls.control.script":"Script (ejecutar / cancelar)","controls.control.press":"Bot\xF3n de pulsar","controls.control.trigger":"Disparador (interruptor moment\xE1neo)","controls.control.push":"Pulsador (sin estado)","controls.show_state":"Mostrar estado","controls.show_cancel":"Mostrar Cancelar","controls.show_cancel_helper":"Bot\xF3n Cancelar bajo un script en ejecuci\xF3n (controles disparador y pulsador).","controls.show_last_changed":"Mostrar \xFAltimo cambio","controls.state_override":"Texto del estado","controls.appearance":"Apariencia","controls.appearance.plain":"Sin marco (como more-info)","controls.appearance.card":"Tarjeta","controls.controls":"Controles","controls.type":"Tipo","controls.type_helper":"Autom\xE1tico si se deja vac\xEDo: selector para entidades select o atributos, interruptor, n\xFAmero o acci\xF3n.","controls.type.select":"Selector","controls.type.toggle":"Interruptor","controls.type.number":"N\xFAmero","controls.type.button":"Bot\xF3n (icono)","controls.type.action":"Acci\xF3n","controls.attribute":"Atributo","controls.attribute_helper":"Opciones del selector (efecto, modo predefinido, velocidad\u2026).","controls.attribute.state":"Estado (encendido / apagado)","controls.attribute.effect":"Efecto","controls.attribute.preset_mode":"Modo predefinido","controls.attribute.fan_mode":"Modo del ventilador","controls.attribute.swing_mode":"Oscilaci\xF3n","controls.attribute.swing_horizontal_mode":"Oscilaci\xF3n horizontal","controls.attribute.hvac_mode":"Modo HVAC","controls.attribute.fan_speed":"Potencia de succi\xF3n (aspiradora)","controls.attribute.mode":"Modo","controls.attribute.direction":"Direcci\xF3n","controls.attribute.oscillating":"Oscilaci\xF3n (s\xED / no)","controls.attribute.operation_mode":"Modo de funcionamiento","controls.attribute.away_mode":"Modo ausente","controls.attribute.source":"Fuente","controls.attribute.sound_mode":"Modo de sonido","controls.name":"Nombre","controls.icon":"Icono","controls.icon_off":"Icono apagado","controls.icon_helper":"Reemplaza el icono de la entidad en el interruptor, el disparador y el pulsador (en el interruptor, el icono de encendido).","controls.color":"Color","controls.color_helper":"Color del control mientras est\xE1 activo (cualquier color CSS o del tema).","controls.color_off":"Color apagado","controls.button_layout":"Forma del pulsador","controls.button_layout_helper":"Solo para el control de pulsador.","controls.button_layout.vertical":"Vertical (como el interruptor)","controls.button_layout.horizontal":"Horizontal","controls.button_layout.square":"Cuadrado","controls.button_layout.circle":"Circular","controls.options":"Opciones","controls.options_helper":"Opcional: qu\xE9 opciones mostrar y en qu\xE9 orden.","controls.value":"Texto secundario","controls.value_helper":"Para acciones; por defecto, el estado de la entidad.","controls.tap_action":"Acci\xF3n al pulsar","controls.show_arrow":"Mostrar flecha","controls.perform_action":"Acci\xF3n personalizada","controls.perform_action_helper":"dominio.acci\xF3n que recibe el valor, p. ej. light.turn_on","controls.data_key":"Campo del valor","controls.data_key_helper":"Campo de la acci\xF3n personalizada que recibe el valor, p. ej. effect","controls.min":"M\xEDnimo","controls.max":"M\xE1ximo","controls.step":"Paso","controls.wrap":"Saltar de l\xEDnea en m\xF3vil","controls.wrap_helper":"Los chips bajan de l\xEDnea en lugar de desplazarse de lado (Home Assistant los desplaza)."};var u7={en:i5,es:x7},u=(L,V,C)=>{let H=L?.language??(typeof document<"u"&&document.documentElement.lang||"en"),e=H.split("-")[0],r=u7[H]?.[V]??u7[e]?.[V]??i5[V];if(C)for(let[M,t]of Object.entries(C))r=r.replace(`{${M}}`,String(t));return r};var{I:EC}=F0;var s6={},Z7=(L,V=s6)=>L._$AH=V;var a5=h1(class extends i1{constructor(){super(...arguments),this.key=A}render(L,V){return this.key=L,V}update(L,[V,C]){return V!==this.key&&(Z7(L),this.key=V),C}});var A5=(L,V)=>{w(L,"hass-action",{config:{tap_action:{action:"navigate",navigation_path:V}},action:"tap"})};var v6=(L,V)=>{let C=V.entity?r5(L,V.entity):[],H=V.name??C[C.length-1]??"",e=[];return V.breadcrumb==="auto"?e=C.slice(0,-1):V.breadcrumb!=="none"&&V.breadcrumb&&(e=[V.breadcrumb]),[...e,H]},c6=(L,V)=>{let C=V.children[V.children.length-1];switch(V.view){case"details":return L.localize("ui.dialogs.more_info_control.details");case"related":return L.localize("ui.dialogs.more_info_control.related");case"add_to":return L.localize("ui.dialogs.more_info_control.add_to.item");case"settings":return C?.viewTitle||L.localize("ui.dialogs.more_info_control.settings");default:return C?.viewTitle}},b2=(L,V,C)=>{let H=C.entityId&&C.entityId!==V.entity?r5(L,C.entityId):v6(L,V),e=C.view==="root"&&!C.children.length?void 0:c6(L,C),r=e?H:H.slice(0,-1);return{title:e??H[H.length-1]??"",breadcrumb:r.filter(Boolean),breadcrumbClickable:!!C.entityId&&I1(L)&&(C.view!=="root"||V.breadcrumb==="auto")}},y2=(L,V,C,H,e)=>{let r=H7(L)?" \u25C2 ":" \u25B8 ",M=V.breadcrumb.join(r);return o`
    <span slot=${C} class="title" @click=${H}>
      ${V.breadcrumb.length?V.breadcrumbClickable&&e?o`<button class="breadcrumb" @click=${e}>
                ${M}
              </button>`:o`<p class="breadcrumb">${M}</p>`:A}
      <p class="main">${V.title}</p>
    </span>
  `};var S7,n5=()=>S7,d5=L=>{S7=L};var g1=async(L,V)=>{if(V.every(W1))return!0;try{(await window.loadCardHelpers?.())?.importMoreInfoControl?.(L)}catch(H){console.warn("[more-info-popup-card] Could not load",L,H)}return(await Promise.all(V.map(H=>X(H,8e3)))).every(Boolean)};var x6=new Set(["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","disabled"]),p5=L=>x6.has(L)?`var(--${L}-color)`:L,u6=["off","unavailable","unknown","idle","standby","closed","locked","disarmed","docked","not_home"],Z6=L=>!u6.includes(L.state),h7=(L,V,C)=>{let H={},e=v(L.entity_id),r=L.state.toLowerCase().replace(/[^a-z0-9]+/g,"_"),M=L.attributes.device_class,t=(i,n)=>{if(!i)return;let p=p5(i),[d,c]=n?["on","active"]:["off","inactive"];H[`--state-${c}-color`]=p,H[`--state-${e}-${c}-color`]=p,H[`--state-${e}-${d}-color`]=p,Z6(L)===n&&(H[`--state-${e}-${r}-color`]=p,M&&(H[`--state-${e}-${M}-${r}-color`]=p))};return t(V,!0),t(C,!1),H};var f7=new Map,S6=L=>new Promise(V=>setTimeout(V,L)),h6=async L=>{if(!await X("ha-icon"))return;let V=document.createElement("ha-icon");V.style.cssText="position:fixed;visibility:hidden;pointer-events:none",V.icon=L,document.body.append(V);try{for(let C=0;C<50;C++){await V.updateComplete;let H=V.shadowRoot?.querySelector("ha-svg-icon");if(H?.path)return H.path;await S6(100)}return}finally{V.remove()}},l5=L=>{let V=f7.get(L);return V||(V=h6(L),f7.set(L,V)),V};var g7="more-info-popup-trigger-control",f6=["automation","script"],m5=(L,V)=>{let[C,H]=V?["on","active"]:["off","inactive"],e=f6.includes(L)?`var(--state-${H}-color)`:V?"var(--primary-color)":"var(--disabled-color)";return`var(--state-${L}-${C}-color, var(--state-${L}-${H}-color, ${e}))`},R7=["queued","parallel"],g6=L=>L.state==="off"||L.attributes.mode==="restart"||L.state==="on"&&R7.includes(L.attributes.mode)&&L.attributes.current<L.attributes.max,O6=1100,b6=350,y6=1500,O7=L=>new Promise(V=>setTimeout(V,L)),b7,y7,_7,w7,k7,T7,P7,B7,E7,b,s5,v5,c5,x5,u5,Z5,S5,h5,W=class extends(E7=T,B7=[_({attribute:!1})],P7=[_({attribute:!1})],T7=[_({attribute:!1})],k7=[_({attribute:!1})],w7=[_({attribute:!1})],_7=[_({attribute:!1})],y7=[Z()],b7=[Z()],E7){constructor(){super(...arguments);s(this,s5,a(b,8,this)),a(b,11,this);s(this,v5,a(b,12,this)),a(b,15,this);s(this,c5,a(b,16,this)),a(b,19,this);s(this,x5,a(b,20,this,"switch")),a(b,23,this);s(this,u5,a(b,24,this,"vertical")),a(b,27,this);s(this,Z5,a(b,28,this,!0)),a(b,31,this);s(this,S5,a(b,32,this,"idle")),a(b,35,this);s(this,h5,a(b,36,this,{})),a(b,39,this);l(this,"_timer")}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),this._phase="idle"}get _domain(){return v(this.stateObj.entity_id)}get _scriptFields(){let C=u2(this.stateObj.entity_id);return this.hass.services?.script?.[C]}_requiredFilled(){let C=this._scriptFields?.fields??{},H=this._scriptData.data;return Object.entries(C).every(([e,r])=>!r.required||H?.[e]!==void 0)}_call(){let C=this.hass,H=this.stateObj.entity_id;switch(this._domain){case"script":return C.callService("script","turn_on",{entity_id:H,...this._scriptData.data?{variables:this._scriptData.data}:{}});case"automation":return C.callService("automation","trigger",{entity_id:H,skip_condition:!0});default:return C.callService(this._domain==="input_button"?"input_button":"button","press",{entity_id:H})}}async _fire(C){if(C.stopPropagation(),!this._canFire)return;clearTimeout(this._timer),w(window,"haptic","light"),this._phase="firing";let H=Promise.race([this._call(),O7(y6)]),e=!0;try{await Promise.all([H,O7(b6)])}catch{e=!1,w(window,"haptic","failure")}this._phase=e?"done":"error",this._timer=setTimeout(()=>{this._phase="idle"},O6)}_keyDown(C){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),this._fire(C))}get _unavailable(){return this.stateObj.state==="unavailable"}get _running(){return this._domain==="script"&&this.stateObj.state==="on"}get _canFire(){return this._unavailable||this._phase==="firing"?!1:this._domain!=="script"?!0:g6(this.stateObj)&&this._requiredFilled()}get _label(){let C=this.hass;switch(this._domain){case"script":return C.localize("ui.card.script.run");case"automation":return C.localize("ui.card.automation.trigger");default:return C.localize("ui.card.button.press")}}_handleIcon(){let C=this._phase==="done"?V2:this._phase==="error"?E3:void 0;return o`
      <ha-state-icon
        class=${P({hidden:!!C})}
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        .icon=${this.icon}
      ></ha-state-icon>
      ${C?o`<ha-svg-icon class="feedback" .path=${C}></ha-svg-icon>`:A}
    `}get _caption(){return this._running&&this._phase==="idle"?this.hass.localize("ui.card.script.running_single"):this._label}render(){if(!this.hass||!this.stateObj)return A;let C=this._domain,H=this._phase!=="idle"||this._running,e=this.variant==="button";return o`
      <div
        class=${P({pad:!0,push:e,[this.layout]:e,up:H,running:this._running&&this._phase==="idle",error:this._phase==="error",disabled:this._unavailable||!H&&!this._canFire})}
        role="button"
        tabindex=${this._unavailable?-1:0}
        aria-label=${this._label}
        aria-disabled=${!this._canFire}
        style=${F({"--on-color":m5(C,!0),"--off-color":m5(C,!1)})}
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
          class=${P({active:H})}
          style=${F({"--color":m5("automation",!0)})}
          .label=${this.hass.localize(H?"ui.card.common.turn_off":"ui.card.common.turn_on")}
          .disabled=${this._unavailable}
          @click=${e}
        >
          <ha-svg-icon .path=${d1}></ha-svg-icon>
          <span class="label">${this.hass.formatEntityState(C)}</span>
        </ha-control-button>
      </ha-control-button-group>
    `}_scriptExtras(){let C=this.hass,H=this.stateObj,e=this._scriptFields,r=e?.fields??{},M=H.attributes.current||0,t=R7.includes(H.attributes.mode)&&M>1,i=p=>{p.stopPropagation(),C.callService("script","turn_off",{entity_id:H.entity_id})},n=p=>{this._scriptData={...this._scriptData,...p.detail.value}};return o`
      ${this.showCancel?o`<ha-control-button-group class="bar">
              <ha-control-button .disabled=${!M} @click=${i}>
                <ha-svg-icon .path=${u1}></ha-svg-icon>
                ${C.localize(t?"ui.card.script.cancel_all":"ui.card.script.cancel")}
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
                  @value-changed=${n}
                ></ha-service-control>
              </div>
            `:A}
    `}};b=I(E7),s5=new WeakMap,v5=new WeakMap,c5=new WeakMap,x5=new WeakMap,u5=new WeakMap,Z5=new WeakMap,S5=new WeakMap,h5=new WeakMap,m(b,4,"hass",B7,W,s5),m(b,4,"stateObj",P7,W,v5),m(b,4,"icon",T7,W,c5),m(b,4,"variant",k7,W,x5),m(b,4,"layout",w7,W,u5),m(b,4,"showCancel",_7,W,Z5),m(b,4,"_phase",y7,W,S5),m(b,4,"_scriptData",b7,W,h5),D(b,W),l(W,"styles",O`
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
  `);customElements.get(g7)||customElements.define(g7,W);var f5=["ha-icon-button-group","ha-icon-button-toggle","light-color-rgb-picker","light-color-temp-picker","ha-more-info-light-favorite-colors"],D7={cover:["ha-icon-button-group","ha-icon-button-toggle","ha-state-control-cover-position","ha-state-control-cover-tilt-position","ha-state-control-cover-toggle","ha-state-control-cover-buttons","ha-more-info-cover-favorite-positions"],valve:["ha-icon-button-group","ha-icon-button-toggle","ha-state-control-valve-position","ha-state-control-valve-toggle","ha-state-control-valve-buttons","ha-more-info-valve-favorite-positions"],lock:["ha-control-button","ha-control-button-group","ha-state-icon"],alarm_control_panel:["ha-control-button","ha-state-icon"],siren:["ha-button","more-info-siren"],vacuum:["ha-control-button","ha-control-button-group","ha-battery-icon","ha-icon-next","ha-more-info-control-select-container","more-info-vacuum"],lawn_mower:["ha-control-button","ha-control-button-group","ha-battery-icon"]},O1={toggle:{tag:"ha-state-control-toggle",load:"switch"},brightness:{tag:"ha-state-control-light-brightness",load:"light",extraTags:f5},fan_speed:{tag:"ha-state-control-fan-speed",load:"fan",extraTags:["ha-outlined-icon-button"]},position:{tag:"ha-state-control-cover-position",load:"cover"},tilt:{tag:"ha-state-control-cover-tilt-position",load:"cover"},cover_toggle:{tag:"ha-state-control-cover-toggle",load:"cover"},cover_buttons:{tag:"ha-state-control-cover-buttons",load:"cover"},valve_position:{tag:"ha-state-control-valve-position",load:"valve"},valve_toggle:{tag:"ha-state-control-valve-toggle",load:"valve"},valve_buttons:{tag:"ha-state-control-valve-buttons",load:"valve"},lock:{tag:"ha-state-control-lock-toggle",load:"lock"},alarm_modes:{tag:"ha-state-control-alarm_control_panel-modes",load:"alarm_control_panel"},temperature:{tag:"ha-state-control-climate-temperature",load:"climate"},climate_humidity:{tag:"ha-state-control-climate-humidity",load:"climate"},humidity:{tag:"ha-state-control-humidifier-humidity",load:"humidifier"},water_heater:{tag:"ha-state-control-water_heater-temperature",load:"water_heater"},vacuum_status:{tag:"ha-state-control-vacuum-status",load:"vacuum"},lawn_mower_status:{tag:"ha-state-control-lawn_mower-status",load:"lawn_mower"},media_player:{tag:"more-info-media_player",load:"media_player"},script:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0},more_info:{tag:"more-info-content",load:"",extraTags:["state-card-content"]},press:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button"],inline:!0},trigger:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0},push:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0}},F7=["alarm_control_panel","cover","climate","conversation","fan","humidifier","input_boolean","lawn_mower","light","lock","siren","script","switch","timer","vacuum","valve","water_heater","weather","media_player"],_6=["camera","configurator"],w6=["camera","conversation","counter","date","datetime","group","image","input_datetime","input_number","input_select","input_text","number","person","remote","scene","select","sun","text","time","timer","update","weather"],k6=L=>{let V=v(L.entity_id);if(V==="group"){let C=new Set((L.attributes.entity_id??[]).map(v)),[H]=C;return C.size===1&&H!=="group"&&F7.includes(H)}return F7.includes(V)},N7=L=>!k6(L)&&!_6.includes(v(L.entity_id)),I7=["hs","xy","rgb","rgbw","rgbww"],T6=[...I7,"color_temp","brightness","white"],_2=(L,V)=>L.attributes.supported_color_modes?.some(C=>V.includes(C))??!1,g5=L=>_2(L,T6),z7=L=>_2(L,I7),W7=L=>_2(L,["color_temp"]),U7=L=>_2(L,["white"]),g=(L,V)=>((L.attributes.supported_features??0)&V)!==0,$7=(L,V)=>((L.attributes.supported_features??0)&3)===3&&!g(L,V),O5=L=>{let V=v(L.entity_id);switch(V){case"light":return g5(L)?"brightness":"toggle";case"switch":case"input_boolean":case"siren":return"toggle";case"fan":return g(L,1)?"fan_speed":"toggle";case"cover":return g(L,4)?"position":g(L,128)?"tilt":$7(L,120)?"cover_toggle":"cover_buttons";case"valve":return g(L,4)?"valve_position":$7(L,8)?"valve_toggle":"valve_buttons";case"lock":return"lock";case"alarm_control_panel":return"alarm_modes";case"climate":return"temperature";case"humidifier":return"humidity";case"water_heater":return"water_heater";case"vacuum":return"vacuum_status";case"lawn_mower":return"lawn_mower_status";case"media_player":return"media_player";case"script":case"button":case"input_button":case"automation":return"trigger";default:return w6.includes(V)?"more_info":void 0}},P6=["climate","humidifier","water_heater","media_player"],w2=(L,V)=>{let C=L??"auto";if(C!=="none")return C!=="auto"?C:V?O5(V):void 0},k2=(L,V)=>!P6.includes(v(L))&&V!=="more_info";var U={OPEN:1,CLOSE:2,SET_POSITION:4,STOP:8,OPEN_TILT:16,CLOSE_TILT:32,STOP_TILT:64,SET_TILT_POSITION:128},A1={OPEN:1,CLOSE:2,SET_POSITION:4,STOP:8},G7=1,T2={TONES:4,VOLUME_SET:8,DURATION:16},G={PAUSE:4,STOP:8,RETURN_HOME:16,STATUS:128,LOCATE:512,CLEAN_SPOT:1024,STATE:4096,START:8192,CLEAN_AREA:16384},c1={START_MOWING:1,PAUSE:2,DOCK:4,STOP:8},Q7=(L,...V)=>V.every(C=>g(L,C)),K7=L=>{let V=g(L,U.SET_POSITION),C=g(L,U.SET_TILT_POSITION),H=g(L,U.OPEN|U.CLOSE|U.STOP),e=g(L,U.OPEN_TILT|U.CLOSE_TILT|U.STOP_TILT),r=Q7(L,U.OPEN,U.CLOSE)&&!g(L,U.STOP)&&!e&&!V&&!C;return{position:V,tilt:C,buttons:r?"toggle":H||e?"buttons":void 0,switchMode:(V||C)&&(H||e)}},q7=L=>{let V=g(L,A1.SET_POSITION),C=g(L,A1.OPEN|A1.CLOSE|A1.STOP),H=Q7(L,A1.OPEN,A1.CLOSE)&&!g(L,A1.STOP)&&!V;return{position:V,tilt:!1,buttons:H?"toggle":C?"buttons":void 0,switchMode:V&&C}},b5=L=>L==null||Array.isArray(L)&&L.length>0,Y7=(L,V)=>{if(!V)return!1;let C=v(L.entity_id),H=V.options?.[C];return C==="valve"?g(L,A1.SET_POSITION)&&b5(H?.favorite_positions):g(L,U.SET_POSITION)&&b5(H?.favorite_positions)||g(L,U.SET_TILT_POSITION)&&b5(H?.favorite_tilt_positions)},j7=L=>{let V=L.state;if(V==="unavailable"||V==="unknown"||V==="off")return!1;switch(v(L.entity_id)){case"alarm_control_panel":return V!=="disarmed";case"cover":case"valve":return V!=="closed";case"lawn_mower":return!["docked","paused","idle"].includes(V);case"lock":return V!=="locked";case"vacuum":return!["idle","docked","paused"].includes(V);default:return!0}},y5=L=>{if(L.state==="unavailable")return"var(--state-unavailable-color)";let V=v(L.entity_id),C=L.attributes.device_class,H=L.state.toLowerCase().replace(/[^a-z0-9]+/g,"_"),e=j7(L)?"active":"inactive";return[...C?[`--state-${V}-${C}-${H}-color`]:[],`--state-${V}-${H}-color`,`--state-${V}-${e}-color`,`--state-${e}-color`].reduceRight((M,t)=>`var(${t}${M?`, ${M}`:""})`,"")},X7=(L,V)=>{let C=V.attributes,H=j7(V)?C.current_position??(v(V.entity_id)==="cover"?C.current_tilt_position:void 0):void 0;return H&&H!==100?L.formatEntityAttributeValue(V,"current_position",Math.round(H)):""},B6=L=>["opening","unlocking","locking"].includes(L.state),J7=L=>L.state!=="unavailable"&&(L.attributes.assumed_state===!0||L.state!=="open"&&!B6(L)),_5=["triggered","arming","pending"],C4=L=>["cleaning","on"].includes(L.state),H4=L=>!["docked","off","idle"].includes(L.state),V4=L=>L.state!=="unavailable"&&L.state!=="returning",L4=L=>L.state!=="unavailable"&&!["docked","idle"].includes(L.state),e4=L=>L.state!=="unavailable"&&L.state!=="docked",r4=(L,V)=>{let C=L.entities[V]?.device_id;if(!C)return;let H=Object.values(L.entities).filter(t=>t.device_id===C),e=["sensor","binary_sensor"],r=H.map(t=>L.states[t.entity_id]).filter(t=>t?.attributes.device_class==="battery"&&e.includes(v(t.entity_id))).sort((t,i)=>e.indexOf(v(t.entity_id))-e.indexOf(v(i.entity_id)))[0];if(!r||v(r.entity_id)!=="binary_sensor"&&isNaN(Number(r.state)))return;let M=H.map(t=>L.states[t.entity_id]).find(t=>t?.attributes.device_class==="battery_charging");return{battery:r,charging:M}},M4=L=>["cs","de","fi","fr","sk","sv"].includes(L.locale?.language??L.language)?" ":"",t4=async(L,V)=>{let C=await window.loadCardHelpers?.();if(!C?.showEnterCodeDialog)throw new Error("The code dialog is not available");return C.showEnterCodeDialog(L,V)},w5=async(L,V,C,H,e)=>{let r;if(C.attributes.code_format&&!H?.options?.lock?.default_code){let M=await t4(L,{codeFormat:"text",codePattern:C.attributes.code_format,title:V.localize(`ui.card.lock.${e}`),submitText:V.localize(`ui.card.lock.${e}`)});if(M==null)throw new Error("Code dialog closed");r=M}await V.callService("lock",e,{entity_id:C.entity_id,code:r})},o4=async(L,V,C,H)=>{let e;if(C.attributes.code_format&&!H?.options?.alarm_control_panel?.default_code){let r=await t4(L,{codeFormat:C.attributes.code_format,title:V.localize("ui.card.alarm_control_panel.disarm"),submitText:V.localize("ui.card.alarm_control_panel.disarm")});if(r==null)throw new Error("Code dialog closed");e=r}await V.callService("alarm_control_panel","alarm_disarm",{entity_id:C.entity_id,code:e})};var T5=L=>V=>(V.attributes[L]??[]).map(String),k5=L=>V=>{let C=V.attributes[L];return C==null?void 0:String(C)},J=(L,V,C,H)=>({options:T5(L),value:k5(V),service:e=>[v(e.entity_id),C],data:e=>({[V]:e}),icon:H}),E6=(L,V,C,H)=>({optionIcons:{true:C,false:H},options:()=>["true","false"],value:e=>e.attributes[L]==null?void 0:String(!!e.attributes[L]),service:e=>[v(e.entity_id),V],data:e=>({[L]:e==="true"}),icon:C}),Q1={effect:{...J("effect_list","effect","turn_on",W3)},preset_mode:J("preset_modes","preset_mode","set_preset_mode",Z1),fan_mode:J("fan_modes","fan_mode","set_fan_mode",w1),swing_mode:J("swing_modes","swing_mode","set_swing_mode",H2),swing_horizontal_mode:J("swing_horizontal_modes","swing_horizontal_mode","set_swing_horizontal_mode",H2),hvac_mode:{options:T5("hvac_modes"),value:L=>L.state,service:()=>["climate","set_hvac_mode"],data:L=>({hvac_mode:L}),icon:s0,formatAsState:!0},fan_speed:{...J("fan_speed_list","fan_speed","set_fan_speed",w1),attributeIcons:!1},mode:J("available_modes","mode","set_mode",Z1),direction:{options:()=>["forward","reverse"],value:k5("direction"),service:()=>["fan","set_direction"],data:L=>({direction:L}),icon:d0},oscillating:E6("oscillating","oscillate",H2,R3),operation_mode:J("operation_list","operation_mode","set_operation_mode",u0),away_mode:{options:()=>["on","off"],value:k5("away_mode"),service:()=>["water_heater","set_away_mode"],data:L=>({away_mode:L==="on"}),icon:N2,optionIcons:{on:N2,off:B3}},source:{...J("source_list","source","select_source",e0),attributeIcons:!1},sound_mode:{...J("sound_mode_list","sound_mode","select_sound_mode",o0),attributeIcons:!1}},P2={options:T5("options"),value:L=>L.state,service:L=>[v(L.entity_id),"select_option"],data:L=>({option:L}),icon:Z1,formatAsState:!0},i4={options:()=>["off","on"],value:L=>L.state,service:L=>[v(L.entity_id),"toggle"],data:()=>({}),icon:d1,formatAsState:!0},b1=["select","input_select"],a4=["number","input_number"],A4=["switch","input_boolean","light","fan","siren","automation","script","group","media_player","humidifier","climate","water_heater","remote","valve","cover","lock"];var B2=(L,V)=>["navigate","more-info"].includes((L.tap_action??{action:V?"more-info":"none"}).action),n4={button:"button.press",input_button:"input_button.press",scene:"scene.turn_on",script:"script.turn_on"},d4=["off","closed","locked","unavailable","unknown","idle","standby","paused","docked"],p4=600,K1=L=>{if(L.type)return L.type;if(L.attribute)return"select";let V=L.entity?v(L.entity):"";return b1.includes(V)?"select":a4.includes(V)?"number":A4.includes(V)?"toggle":"action"},l4=L=>L?.map(V=>typeof V=="string"?{value:V}:{...V,value:String(V.value)}),P5=L=>{let[V,C]=L.split(".",2);return[V,C]};var v4=(L,V)=>{let C={...L};for(let[H,e]of Object.entries(V))C[H]===e&&delete C[H];return C},m4=(L,V)=>({...L.entity?{show_state:k2(L.entity,w2(L.control,V?.states[L.entity]))}:{},show_last_changed:!0,show_cancel:!0}),c4={fill:(L,V)=>({...m4(L,V),...L}),strip:(L,V)=>v4(L,m4(L,V))},s4=(L,V,C)=>({...L,controls:(L.controls??[]).map(H=>C(H,{show_arrow:B2(H,!!(H.entity&&V?.states[H.entity]))}))}),x4={fill:(L,V)=>s4(L,V,(C,H)=>({...H,...C})),strip:(L,V)=>s4(L,V,v4)};var B5=(L,V,C)=>{var e,r,M,t,i,n;class H extends(M=T,r=[_({attribute:!1})],e=[Z()],M){constructor(){super(...arguments);s(this,i,a(t,8,this)),a(t,11,this);s(this,n,a(t,12,this)),a(t,15,this);l(this,"_form",V())}setConfig(c){this._form.assertConfig?.(c),this._config=c}render(){return this._config?o`
        <ha-form
          .hass=${this.hass}
          .data=${C.fill(this._config,this.hass)}
          .schema=${this._form.schema}
          .computeLabel=${this._form.computeLabel}
          .computeHelper=${this._form.computeHelper}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `:A}_valueChanged(c){c.stopPropagation(),w(this,"config-changed",{config:C.strip(c.detail.value,this.hass)})}}t=I(M),i=new WeakMap,n=new WeakMap,m(t,4,"hass",r,H,i),m(t,4,"_config",e,H,n),D(t,H),customElements.get(L)||customElements.define(L,H)};var Y1=()=>{},u4=L=>u(Y1(),`controls.${L}`),q1=(L,V,C=!1)=>({select:{mode:"dropdown",custom_value:C,options:L.map(H=>({value:H,label:u(Y1(),`${V}.${H}`)||H}))}}),Z4={name:"appearance",selector:q1(["plain","card"],"controls.appearance")},S4=L=>u4(L.name)||L.name,h4=()=>({schema:[{name:"entity",required:!0,selector:{entity:{}}},{name:"control",selector:q1(["auto","none",...Object.keys(O1)],"controls.control")},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}},{name:"show_cancel",selector:{boolean:{}}}]},{name:"state_override",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"icon",selector:{icon:{}}},{name:"icon_off",selector:{icon:{}}},{name:"color",selector:{ui_color:{}}},{name:"color_off",selector:{ui_color:{}}}]},{name:"button_layout",selector:q1(["vertical","horizontal","square","circle"],"controls.button_layout")},Z4],computeLabel:S4,computeHelper:L=>u(Y1(),`controls.${L.name}_helper`)||void 0}),N=(L,V,C=!1)=>({label:u4(L),description:u(Y1(),`controls.${L}_helper`)||void 0,required:C,selector:V}),f4=()=>({schema:[{name:"controls",selector:{object:{multiple:!0,label_field:"entity",description_field:"attribute",fields:{type:N("type",q1(["select","toggle","number","action","button"],"controls.type")),entity:N("entity",{entity:{}}),attribute:N("attribute",q1(["state",...Object.keys(Q1)],"controls.attribute",!0)),name:N("name",{text:{}}),icon:N("icon",{icon:{}}),color:N("color",{ui_color:{}}),options:N("options",{select:{multiple:!0,custom_value:!0,options:[]}}),value:N("value",{text:{}}),tap_action:N("tap_action",{ui_action:{}}),show_arrow:N("show_arrow",{boolean:{}}),perform_action:N("perform_action",{text:{}}),data_key:N("data_key",{text:{}}),min:N("min",{number:{mode:"box",step:"any"}}),max:N("max",{number:{mode:"box",step:"any"}}),step:N("step",{number:{mode:"box",step:"any"}})}}}},{name:"",type:"grid",schema:[Z4,{name:"wrap",selector:{boolean:{}}}]}],computeLabel:S4,computeHelper:L=>u(Y1(),`controls.${L.name}_helper`)||void 0,assertConfig:L=>{if(L.controls?.some(V=>V.options?.some(C=>typeof C!="string")))throw new Error("Options with names or icons can only be edited in YAML")}});var E5="more-info-state-card-editor",R5="more-info-controls-card-editor";B5(E5,h4,c4);B5(R5,f4,x4);var E2=O`
  ha-card.plain {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    --ha-card-background: transparent;
  }
`,g4=O`
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
`;var j1="more-info-state-card",R2="more-info-popup-fill",R6={temperature:["show-secondary","prevent-interaction-on-scroll"],climate_humidity:["show-current","prevent-interaction-on-scroll"],humidity:["show-secondary","prevent-interaction-on-scroll"],water_heater:["show-current","prevent-interaction-on-scroll"]},F6=16,$6=32,D6=6,N6=L=>Math.round(100/(L.attributes.percentage_step??1))+1,I6=["position","tilt","cover_toggle","cover_buttons","valve_position","valve_toggle","valve_buttons"],z6=5,W6=2,F5=()=>{},U6=["queued","parallel"],G6=L=>L.state==="off"||L.state==="on"&&U6.includes(L.attributes.mode)&&L.attributes.current<L.attributes.max,Q6=(L,V)=>{let C=v(V.entity_id),H=V.attributes;if(C==="light"&&V.state==="on"&&H.brightness!=null)return L.formatEntityAttributeValue(V,"brightness");if(C==="fan"&&V.state==="on"&&H.percentage)return L.formatEntityAttributeValue(V,"percentage");if(C==="script"){let e=H.current||0;return e?H.mode==="parallel"&&e>1?L.localize("ui.card.script.running_parallel",{active:e}):L.localize("ui.card.script.running_single"):L.localize("ui.card.script.idle")}if((C==="button"||C==="input_button")&&V.state!=="unavailable")return L.localize("ui.card.button.press");if(C==="cover"||C==="valve"){let e=X7(L,V);return e?`${L.formatEntityState(V)} \xB7 ${e}`:void 0}if(C==="vacuum"&&g(V,G.STATUS)&&H.status)return L.formatEntityAttributeValue(V,"status")},O4,b4,y4,_4,w4,k4,T4,P4,B4,E4,f,$5,D5,N5,I5,z5,W5,U5,G5,Q5,z=class extends(E4=T,B4=[_({attribute:!1})],P4=[Z()],T4=[Z()],k4=[Z()],w4=[Z()],_4=[Z()],y4=[Z()],b4=[Z()],O4=[Z()],E4){constructor(){super(...arguments);s(this,$5,a(f,8,this)),a(f,11,this);s(this,D5,a(f,12,this)),a(f,15,this);s(this,N5,a(f,16,this,!1)),a(f,19,this);s(this,I5,a(f,20,this,{})),a(f,23,this);s(this,z5,a(f,24,this,"brightness")),a(f,27,this);s(this,W5,a(f,28,this)),a(f,31,this);s(this,U5,a(f,32,this)),a(f,35,this);s(this,G5,a(f,36,this,"normal")),a(f,39,this);l(this,"_openTimeout");l(this,"_controlElement");l(this,"_controlTag");s(this,Q5,a(f,40,this,{})),a(f,43,this);l(this,"_loadingKey");l(this,"_entryLoaded")}static getConfigElement(){return document.createElement(E5)}static getStubConfig(C,H){let e=H.find(r=>r.startsWith("light."))??H.find(r=>O5(C.states[r]))??H[0];return{type:`custom:${j1}`,entity:e}}setConfig(C){if(!C?.entity)throw new Error('"entity" is required');if(C.control&&C.control!=="auto"&&C.control!=="none"&&!(C.control in O1))throw new Error(`Unknown control "${C.control}"`);this._config=C,this._ready=!1,this._loadingKey=void 0,this._scriptData={action:C.entity},this._lightControl="brightness",this._positionMode=void 0,this._setOpenState("normal"),this._entry=void 0,this._entryLoaded=void 0,this._loadIconPaths(C)}_loadIconPaths(C){let{icon:H,icon_off:e}=C;this._iconPaths={},!(!H&&!e)&&Promise.all([H?l5(H):void 0,e?l5(e):void 0]).then(([r,M])=>{this._config===C&&(this._iconPaths={on:r,off:M})})}connectedCallback(){super.connectedCallback(),w(this,R2)}disconnectedCallback(){super.disconnectedCallback(),this._setOpenState("normal")}set popupFill(C){if(this.style.removeProperty("--popup-min-height"),C<=0)return;let H=this.getBoundingClientRect().height;this.style.setProperty("--popup-min-height",`${H+C}px`)}getCardSize(){return 7}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _controlName(){return w2(this._config?.control,this._stateObj)}willUpdate(){if(this._ready||!this._config||!this._stateObj)return;let C=this._controlName,H=C?O1[C]:void 0,e=this._showState&&this._config.show_last_changed!==!1,r=`${this._config.entity}:${C}:${e}`;if(r===this._loadingKey)return;this._loadingKey=r;let M=[];if(H){let n="extraTags"in H?H.extraTags:[],p=H.load||v(this._config.entity);M.push(g1(p,[H.tag,...n]))}let t=v(this._config.entity),i=t==="light"?f5:D7[t];H&&i&&M.push(g1(t,[...i])),e&&M.push(g1("switch",["ha-more-info-state-header"])),Promise.all(M).then(()=>{this._loadingKey===r&&(this._ready=!0)})}get _showState(){return this._config.show_state??k2(this._config.entity,this._controlName)}_control(C){let H=this._controlName;if(!H)return A;if(H==="script")return this._script(C);if(H==="press")return this._press(C);if(H==="trigger"||H==="push")return o`<more-info-popup-trigger-control
        .hass=${this.hass}
        .stateObj=${C}
        .variant=${H==="push"?"button":"switch"}
        .icon=${this._config.icon}
        .layout=${this._config.button_layout??"vertical"}
        .showCancel=${this._config.show_cancel!==!1}
      ></more-info-popup-trigger-control>`;if(H==="more_info")return this._moreInfo(C);let e=v(C.entity_id);if(this._positionComposite(C))return this._positionControls(C);let{tag:r}=O1[H];if(this._controlTag!==r){this._controlTag=r,this._controlElement=document.createElement(r);for(let i of R6[H]??[])this._controlElement.setAttribute(i,"");H==="lock"&&this._controlElement.addEventListener("lock-service-called",()=>this._setOpenState("normal"))}let M=this._controlElement;M.stateObj=C,M.hass=this.hass;let t=e==="fan";return H==="toggle"&&(this._iconPaths.on||this._iconPaths.off)?(M.iconPathOn=this._iconPaths.on??this._iconPaths.off,M.iconPathOff=this._iconPaths.off??this._iconPaths.on):H==="toggle"&&(M.iconPathOn=t?w1:e==="light"?H0:e==="siren"?c0:void 0,M.iconPathOff=t?q3:e==="light"?C0:e==="siren"?x0:void 0),e==="light"&&(H==="toggle"||H==="brightness")?this._light(C,M):e==="siren"&&H==="toggle"?this._siren(C,M):e==="lock"&&H==="lock"?this._lock(C,M):e==="alarm_control_panel"&&H==="alarm_modes"?_5.includes(C.state)?this._statusIcon(C,"alarm"):M:e==="vacuum"&&H==="vacuum_status"?o`${M}${this._vacuumCommands(C)}`:e==="lawn_mower"&&H==="lawn_mower_status"?o`${M}${this._mowerCommands(C)}`:H==="fan_speed"&&t&&N6(C)>D6&&g(C,$6|F6)?o`${M}${this._fanPowerButton(C)}`:M}_light(C,H){let e=this.hass,r=g5(C),M=z7(C),t=W7(C),i=U7(C);if(!r&&!M&&!t)return H;let n=C.state==="unavailable",p=this._lightControl,d=R=>Y=>{Y.stopPropagation(),this._lightControl=R},c=(R,Y={})=>e.callService("light",R,{entity_id:C.entity_id,...Y});(M||t)&&this._loadEntry();let x=this._entry,h=x?.options?.light?.favorite_colors,B=!!(x&&(h==null||h.length>0));return o`
      ${r?A:H}
      ${r&&p==="brightness"?H:M&&p==="color"?o`<light-color-rgb-picker
                .hass=${e}
                .stateObj=${C}
              ></light-color-rgb-picker>`:t&&p==="color_temp"?o`<light-color-temp-picker
                  .hass=${e}
                  .stateObj=${C}
                ></light-color-temp-picker>`:A}
      <ha-icon-button-group>
        ${r?o`<ha-icon-button
                .disabled=${n}
                .label=${e.localize("ui.dialogs.more_info_control.light.toggle")}
                @click=${R=>{R.stopPropagation(),c(C.state==="on"?"turn_off":"turn_on")}}
              >
                <ha-svg-icon .path=${d1}></ha-svg-icon>
              </ha-icon-button>`:A}
        ${M||t?o`<div class="separator"></div>
                <ha-icon-button-toggle
                  .selected=${p==="brightness"}
                  .disabled=${n}
                  .label=${e.formatEntityAttributeName(C,"brightness")}
                  @click=${d("brightness")}
                >
                  <ha-svg-icon .path=${F3}></ha-svg-icon>
                </ha-icon-button-toggle>`:A}
        ${M?o`<ha-icon-button-toggle
                border-only
                .selected=${p==="color"}
                .disabled=${n}
                .label=${e.localize("ui.dialogs.more_info_control.light.color")}
                @click=${d("color")}
              >
                <span class="wheel color"></span>
              </ha-icon-button-toggle>`:A}
        ${t?o`<ha-icon-button-toggle
                border-only
                .selected=${p==="color_temp"}
                .disabled=${n}
                .label=${e.localize("ui.dialogs.more_info_control.light.color_temp")}
                @click=${d("color_temp")}
              >
                <span class="wheel color-temp"></span>
              </ha-icon-button-toggle>`:A}
        ${i?o`<div class="separator"></div>
                <ha-icon-button
                  .disabled=${n}
                  .label=${e.localize("ui.dialogs.more_info_control.light.set_white")}
                  @click=${R=>{R.stopPropagation(),c("turn_on",{white:!0})}}
                >
                  <ha-svg-icon .path=${Y3}></ha-svg-icon>
                </ha-icon-button>`:A}
      </ha-icon-button-group>
      ${B?o`<ha-more-info-light-favorite-colors
              .hass=${e}
              .stateObj=${C}
              .entry=${x}
            ></ha-more-info-light-favorite-colors>`:A}
    `}_positionComposite(C){let H=v(C.entity_id);return(H==="cover"||H==="valve")&&(this._config.control??"auto")==="auto"&&I6.includes(this._controlName)}_positionControls(C){let H=this.hass,e=v(C.entity_id),r=e==="cover"?K7(C):q7(C),M=this._positionMode??(r.position||r.tilt?"position":"button"),t=p=>d=>{d.stopPropagation(),this._positionMode=p},i=e==="cover",n=A;return M==="position"?n=o`
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
      `:r.buttons==="toggle"?n=i?o`<ha-state-control-cover-toggle
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-cover-toggle>`:o`<ha-state-control-valve-toggle
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-valve-toggle>`:r.buttons==="buttons"&&(n=i?o`<ha-state-control-cover-buttons
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-cover-buttons>`:o`<ha-state-control-valve-buttons
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-valve-buttons>`),o`
      <div class="main-control">${n}</div>
      ${r.switchMode?o`<ha-icon-button-group>
              <ha-icon-button-toggle
                .label=${H.localize(`ui.dialogs.more_info_control.${e}.switch_mode.position`)}
                .selected=${M==="position"}
                .path=${M0}
                @click=${t("position")}
              ></ha-icon-button-toggle>
              <ha-icon-button-toggle
                .label=${H.localize(`ui.dialogs.more_info_control.${e}.switch_mode.button`)}
                .selected=${M==="button"}
                .path=${p0}
                @click=${t("button")}
              ></ha-icon-button-toggle>
            </ha-icon-button-group>`:A}
    `}_favoritePositions(C){return this._loadEntry(),Y7(C,this._entry)?v(C.entity_id)==="cover"?o`<ha-more-info-cover-favorite-positions
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
        style=${F({"--state-color":y5(C)})}
      >
        <div class="icon">
          <ha-state-icon
            .hass=${this.hass}
            .stateObj=${C}
          ></ha-state-icon>
        </div>
      </div>
    `}_setOpenState(C,H){clearTimeout(this._openTimeout),this._openState=C,H&&(this._openTimeout=setTimeout(()=>{this._openState="normal"},H*1e3))}_lock(C,H){let e=this.hass;this._loadEntry();let r=M=>{if(M.stopPropagation(),this._openState!=="confirm"){this._setOpenState("confirm",z6);return}w5(this,e,C,this._entry,"open").catch(F5),this._setOpenState("done",W6)};return o`
      ${C.state==="jammed"?this._statusIcon(C,"lock"):H}
      ${g(C,G7)?o`<div class="buttons">
              ${this._openState==="done"?o`<p class="open-done">
                      <ha-svg-icon .path=${V2}></ha-svg-icon>
                      ${e.localize("ui.card.lock.open_door_done")}
                    </p>`:o`<ha-control-button
                      .disabled=${!J7(C)}
                      class="open-button ${this._openState}"
                      style=${F({"--state-color":y5(C)})}
                      @click=${r}
                    >
                      ${this._openState==="confirm"?e.localize("ui.card.lock.open_door_confirm"):e.localize("ui.card.lock.open_door")}
                    </ha-control-button>`}
            </div>`:A}
    `}_siren(C,H){let e=g(C,T2.TONES)&&C.attributes.available_tones||g(C,T2.VOLUME_SET|T2.DURATION);return o`
      ${H}
      ${e?o`<ha-button appearance="plain" size="s" @click=${M=>{M.stopPropagation(),M5(this.shadowRoot,"more-info-siren","_showAdvancedControlsDialog",{stateObj:C})}}>
              ${this.hass.localize("ui.components.siren.more_controls")}
            </ha-button>`:A}
    `}_commandButton(C,H,e,r){return o`<ha-control-button
      .label=${C}
      .disabled=${e}
      @click=${M=>{M.stopPropagation(),r()}}
    >
      <ha-svg-icon .path=${H}></ha-svg-icon>
    </ha-control-button>`}_commands(C){return C.length?o`<div class="buttons">
          <ha-control-button-group class="commands">
            ${C}
          </ha-control-button-group>
        </div>`:A}_vacuumCommands(C){let H=this.hass,e=C.state==="unavailable",r=c=>g(C,c),M=c=>()=>H.callService("vacuum",c,{entity_id:C.entity_id}),t=c=>H.localize(`ui.dialogs.more_info_control.vacuum.${c}`),i=C4(C),n=!r(G.STATE)&&!r(G.START),p=i&&r(G.PAUSE),d=[];return(r(G.START)||r(G.PAUSE))&&d.push(this._commandButton(t(n?"start_pause":p?"pause":"start"),n?A0:p?z2:t2,e,n&&r(G.PAUSE)?M("start_pause"):M(i?"pause":"start"))),r(G.STOP)&&d.push(this._commandButton(t("stop"),u1,e||!H4(C),M("stop"))),r(G.RETURN_HOME)&&d.push(this._commandButton(t("return_home"),I2,e||!V4(C),M("return_to_base"))),r(G.LOCATE)&&d.push(this._commandButton(t("locate"),r0,e,M("locate"))),r(G.CLEAN_SPOT)&&d.push(this._commandButton(t("clean_spot"),l0,e,M("clean_spot"))),this._commands(d)}_mowerCommands(C){let H=this.hass,e=C.state==="unavailable",r=p=>g(C,p),M=p=>()=>H.callService("lawn_mower",p,{entity_id:C.entity_id}),t=p=>H.localize(`ui.dialogs.more_info_control.lawn_mower.${p}`),i=C.state==="mowing"&&r(c1.PAUSE),n=[];return(r(c1.START_MOWING)||r(c1.PAUSE))&&n.push(this._commandButton(t(i?"pause":"start_mowing"),i?z2:t2,e||!i&&(!r(c1.START_MOWING)||C.state==="mowing"),M(i?"pause":"start_mowing"))),r(c1.STOP)&&n.push(this._commandButton(t("stop"),u1,e||!L4(C),M("stop"))),r(c1.DOCK)&&n.push(this._commandButton(t("dock"),I2,e||!e4(C),M("dock"))),this._commands(n)}_cleanAreas(C){let H=this.hass,e=r=>{r.stopPropagation();let M=!1,t=()=>{M=!0};window.addEventListener("show-child-view",t);let i=M5(this.shadowRoot,"more-info-vacuum","_handleCleanAreas",{stateObj:C,_i18n:{localize:H.localize}});window.removeEventListener("show-child-view",t),(M||!i)&&w(this,"hass-more-info",{entityId:C.entity_id})};return o`
      <ha-more-info-control-select-container>
        <button
          class="clean-areas-button"
          ?disabled=${C.state==="unavailable"}
          @click=${e}
        >
          <div class="icon">
            <ha-svg-icon .path=${m0}></ha-svg-icon>
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
    `}_afterControls(C){let H=this._controlName;if(!H)return A;let e=this.hass,r=v(C.entity_id);if(this._positionComposite(C))return this._favoritePositions(C);if(r==="lock"&&H==="lock"&&C.state==="jammed"){let M=t=>i=>{i.stopPropagation(),w5(this,e,C,this._entry,t).catch(F5)};return o`
        <ha-control-button-group class="jammed">
          <ha-control-button @click=${M("unlock")}>
            ${e.localize("ui.card.lock.unlock")}
          </ha-control-button>
          <ha-control-button @click=${M("lock")}>
            ${e.localize("ui.card.lock.lock")}
          </ha-control-button>
        </ha-control-button-group>
      `}return r==="alarm_control_panel"&&H==="alarm_modes"&&_5.includes(C.state)?(this._loadEntry(),o`
        <ha-control-button class="disarm" @click=${t=>{t.stopPropagation(),o4(this,e,C,this._entry).catch(F5)}}>
          ${e.localize("ui.card.alarm_control_panel.disarm")}
        </ha-control-button>
      `):r==="vacuum"&&H==="vacuum_status"&&g(C,G.CLEAN_AREA)?this._cleanAreas(C):A}_battery(C){let H=v(C.entity_id);if(H!=="vacuum"&&H!=="lawn_mower")return A;let e=this.hass,r=r4(e,C.entity_id);if(!r)return A;let{battery:M,charging:t}=r;return o`
      <span class="battery" slot="after-time">
        ${v(M.entity_id)==="binary_sensor"?A:o`<span
                >${Number(M.state).toFixed()}${M4(e)}%</span
              >`}
        <ha-battery-icon
          .hass=${e}
          .batteryStateObj=${M}
          .batteryChargingStateObj=${t}
        ></ha-battery-icon>
      </span>
    `}_moreInfo(C){this._loadEntry();let H=N7(C);return o`
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
          <ha-svg-icon .path=${d1}></ha-svg-icon>
        </ha-outlined-icon-button>
      </div>
    `}_script(C){let H=this.hass,e=u2(C.entity_id),r=H.services?.script?.[e],M=r?.fields??{},t=Object.keys(M).length>0,i=C.attributes.current||0,n=C.attributes.mode,p=n==="queued",d=n==="parallel",c=p&&i>1,x=this._scriptData.data,h=Object.entries(M).every(([k,y1])=>!y1.required||x?.[k]!==void 0),R=!Object.values(M).some(k=>k.required)||h&&G6(C)||n==="restart",Y=k=>{k.stopPropagation(),H.callService("script",e,this._scriptData.data)},$=k=>{k.stopPropagation(),H.callService("script","turn_off",{entity_id:C.entity_id})},o1=k=>{this._scriptData={...this._scriptData,...k.detail.value}};return o`
      <div class="script">
        ${r?.description?o`<ha-markdown
                breaks
                .content=${r.description}
              ></ha-markdown>`:A}
        <div class="queue ${c?"has-queue":""}">
          ${c?H.localize("ui.card.script.running_queued",{queued:i-1}):""}
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
                    @value-changed=${o1}
                  ></ha-service-control>
                </div>
              `:A}
        <ha-control-button-group>
          <ha-control-button
            class="cancel-button"
            .disabled=${!i}
            @click=${$}
          >
            <ha-svg-icon .path=${u1}></ha-svg-icon>
            ${(p||d)&&i>1?H.localize("ui.card.script.cancel_all"):H.localize("ui.card.script.cancel")}
          </ha-control-button>
          <ha-control-button
            class="run-button"
            .disabled=${C.state==="unavailable"||!R}
            @click=${Y}
          >
            <ha-svg-icon .path=${t2}></ha-svg-icon>
            ${H.localize("ui.card.script.run")}
          </ha-control-button>
        </ha-control-button-group>
      </div>
    `}_press(C){let H=v(C.entity_id),e=r=>{r.stopPropagation(),this.hass.callService(H==="input_button"?H:"button","press",{entity_id:C.entity_id})};return o`
      <ha-control-button-group class="press">
        <ha-control-button
          .disabled=${C.state==="unavailable"}
          @click=${e}
        >
          <ha-svg-icon .path=${X3}></ha-svg-icon>
          ${this.hass.localize("ui.card.button.press")}
        </ha-control-button>
      </ha-control-button-group>
    `}_header(C){let H=this._config;if(!this._showState)return A;let e=H.state_override||Q6(this.hass,C);return H.show_last_changed===!1?o`<p class="state">
        ${e??this.hass.formatEntityState(C)}
      </p>`:o`
      <ha-more-info-state-header
        .hass=${this.hass}
        .stateObj=${C}
        .stateOverride=${e}
        .changedOverride=${["script","automation"].includes(v(C.entity_id))?C.attributes.last_triggered||0:void 0}
      >
        ${this._battery(C)}
      </ha-more-info-state-header>
    `}render(){if(!this._config||!this.hass)return A;let C=this._stateObj,H=this._config.appearance??"plain";return C?o`
      <ha-card
        class=${H}
        .label=${r1(C)}
        style=${F(h7(C,this._config.color,this._config.color_off))}
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
      </ha-card>`}};f=I(E4),$5=new WeakMap,D5=new WeakMap,N5=new WeakMap,I5=new WeakMap,z5=new WeakMap,W5=new WeakMap,U5=new WeakMap,G5=new WeakMap,Q5=new WeakMap,m(f,4,"hass",B4,z,$5),m(f,4,"_config",P4,z,D5),m(f,4,"_ready",T4,z,N5),m(f,4,"_scriptData",k4,z,I5),m(f,4,"_lightControl",w4,z,z5),m(f,4,"_entry",_4,z,W5),m(f,4,"_positionMode",y4,z,U5),m(f,4,"_openState",b4,z,G5),m(f,4,"_iconPaths",O4,z,Q5),D(f,z),l(z,"styles",[E2,O`
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
    `]);customElements.get(j1)||customElements.define(j1,z);var R4=L=>L.uix??L.card_mod,K5=async(L,V,C,H,e)=>{let r=customElements.get("uix-node");if(r?.applyToElement)try{await r.applyToElement(L,V,C,H,!1,e)}catch(M){console.warn("[more-info-popup-card] UIX styling failed",M)}};var F4="var(--ha-bottom-sheet-border-radius, var(--ha-dialog-border-radius, var(--ha-border-radius-2xl)))",K6=`
  wa-drawer::part(body) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: ${F4};
    border-bottom-right-radius: ${F4};
  }
  .handle-wrapper {
    display: none;
  }
`,$4=new WeakSet,D4=async L=>{if($4.has(L))return!0;await L.updateComplete;let V=L.shadowRoot?.querySelector("wa-drawer");if(!V)return!1;V.placement="top";let C=new CSSStyleSheet;C.replaceSync(K6);let H=L.shadowRoot;return H.adoptedStyleSheets=[...H.adoptedStyleSheets,C],$4.add(L),!0},N4=L=>L.stopPropagation(),I4=(L,V,C)=>{if(L.stopPropagation(),V.hasAttribute("prevent-scrim-close"))return;let H=L.touches[0].clientY,e=L.timeStamp,r=0,M=i=>{r=Math.min(0,i.touches[0].clientY-H),r<0&&i.preventDefault(),V.style.setProperty("--dialog-transform",`translateY(${r}px)`)},t=i=>{document.removeEventListener("touchmove",M),document.removeEventListener("touchend",t),document.removeEventListener("touchcancel",t);let n=V.shadowRoot?.querySelector("wa-drawer")?.shadowRoot?.querySelector('[part="body"]')?.offsetHeight??0,p=r/Math.max(1,i.timeStamp-e);if(r<0&&(p<-.5||-r>n*.25)){C(),setTimeout(()=>V.style.removeProperty("--dialog-transform"),300);return}V.style.setProperty("--dialog-transition","transform 300ms ease-out"),V.style.removeProperty("--dialog-transform"),setTimeout(()=>V.style.removeProperty("--dialog-transition"),300)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",t),document.addEventListener("touchcancel",t)};var q6=24,Y6=4,z4=["pointerdown","keydown","wheel","touchstart"],j6=L=>{let V=document;V.startViewTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches?V.startViewTransition(L):L()},W4,U4,G4,Q4,K4,q4,Y4,j4,X4,J4,C9,H9,V9,S,q5,Y5,j5,X5,J5,C3,H3,V3,L3,e3,r3,M3,E=class extends(V9=T,H9=[_({attribute:!1})],C9=[_({type:Boolean,reflect:!0,attribute:"fixed-top"})],J4=[Z()],X4=[Z()],j4=[Z()],Y4=[Z()],q4=[Z()],K4=[Z()],Q4=[Z()],G4=[Z()],U4=[Z()],W4=[Z()],V9){constructor(){super(...arguments);s(this,q5,a(S,8,this)),a(S,11,this);s(this,Y5,a(S,12,this,!0)),a(S,15,this);s(this,j5,a(S,16,this)),a(S,19,this);s(this,X5,a(S,20,this,!1)),a(S,23,this);s(this,J5,a(S,24,this,[])),a(S,27,this);s(this,C3,a(S,28,this,{})),a(S,31,this);s(this,H3,a(S,32,this,!1)),a(S,35,this);s(this,V3,a(S,36,this,!0)),a(S,39,this);s(this,L3,a(S,40,this,!1)),a(S,43,this);s(this,e3,a(S,44,this,!1)),a(S,47,this);s(this,r3,a(S,48,this,!1)),a(S,51,this);l(this,"_zones");l(this,"_sections",new Map);l(this,"_keepAlive",new Map);l(this,"_childViews",new WeakMap);l(this,"_childHeaders",new WeakMap);l(this,"_autoCloseTimer");l(this,"_resizeObserver");l(this,"_fillCards",new Set);l(this,"_enableEscape",()=>{this._escapeEnabled=!0});l(this,"_disableEscape",()=>{this._escapeEnabled=!1});l(this,"_closeFromEvent",C=>{C.stopPropagation(),this.closeDialog()});l(this,"_goBackFromEvent",()=>this._goBack());l(this,"_observedContent");s(this,M3,a(S,52,this,!1)),a(S,55,this);l(this,"_topSheet");l(this,"_topSwipe",C=>{let H=this.renderRoot.querySelector("ha-bottom-sheet");H&&I4(C,H,()=>this.closeDialog())});l(this,"_uixKey");l(this,"_uixSurface");l(this,"_goBack",()=>{let C=this._frame;if(C){if(C.children.length){this._replaceTop({...C,children:C.children.slice(0,-1)}),this._detailsYaml=!1;return}this._stack.length>1&&(this._detailsYaml=!1,this._stack=this._stack.slice(0,-1))}});l(this,"_enlarge",()=>{j6(()=>{this._fill=!this._fill})});l(this,"_breadcrumbClick",C=>{C.stopPropagation(),this._setView("related")});l(this,"_armAutoClose",()=>{this._clearAutoClose(!1);let C=this._config?.auto_close??0;if(!(C<=0)){for(let H of z4)this.addEventListener(H,this._armAutoClose,{passive:!0});this._autoCloseTimer=setTimeout(()=>this.closeDialog(),C*1e3)}});l(this,"_registerFillCard",C=>{C.stopPropagation(),this._fillCards.add(C.composedPath()[0]),this._updateFill()});l(this,"_updateScrollState",()=>{let C=this._observedContent;C&&(this._contentScrolled=C.scrollTop>q6,this._contentScrollable=C.scrollHeight-C.scrollTop-C.clientHeight>Y6)})}get _config(){return this._params?.config}get _frame(){return this._stack[this._stack.length-1]}showDialog(C){let{config:H,view:e}=C;this._params=C,this._stack=[{entityId:H.entity,view:"root",children:[]}],e&&H.entity&&this._canShowView(e)&&(this._stack=[...this._stack,{entityId:H.entity,view:e,children:[]}]),this._fill=!1,this._detailsYaml=!1,this._escapeEnabled=!0,this._syncZones(H),this._open=!0,H.entity&&this._loadEntry(H.entity),d5({popupId:H.popup_id,close:()=>this.closeDialog()}),this._armAutoClose()}closeDialog(){return this._open=!1,!0}_dialogClosed(C){if(C.target!==C.currentTarget)return;let H=this._config;H&&!H.keep_alive&&(this._zones=void 0,this._sections=new Map),this._params=void 0,this._stack=[],this._entries={},this._fill=!1,this._detailsYaml=!1,this._contentScrolled=!1,this._contentScrollable=!1,this._clearAutoClose(),this._uixKey=void 0,this._uixSurface=void 0,window.removeEventListener("dialog-closed",this._enableEscape),window.removeEventListener("show-dialog",this._disableEscape),d5(void 0),w(this,"dialog-closed",{dialog:this.localName})}_dialogOpened(C){C.target===C.currentTarget&&(window.addEventListener("dialog-closed",this._enableEscape),window.addEventListener("show-dialog",this._disableEscape))}connectedCallback(){super.connectedCallback(),this.addEventListener("close-dialog",this._closeFromEvent),this.addEventListener("close-child-view",this._goBackFromEvent),this.addEventListener(R2,this._registerFillCard)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("close-dialog",this._closeFromEvent),this.removeEventListener("close-child-view",this._goBackFromEvent),this.removeEventListener(R2,this._registerFillCard),this._resizeObserver?.disconnect(),this._clearAutoClose()}willUpdate(C){C.has("hass")&&this._zones&&(this._zones.hass=this.hass)}updated(C){super.updated(C);let H=this.renderRoot.querySelector(".body.zones .zone-main")??this.renderRoot.querySelector(".content");H&&H!==this._observedContent&&(this._observedContent=H,this._resizeObserver??=new ResizeObserver(()=>{this._updateFill(),this._updateScrollState()}),this._resizeObserver.disconnect(),this._resizeObserver.observe(H),H.firstElementChild&&this._resizeObserver.observe(H.firstElementChild),this._updateFill(),this._updateScrollState()),this._applyUix(),this._prepareTopSheet()}async _prepareTopSheet(){if(this._config?.mode!=="top_sheet")return;let C=this.renderRoot.querySelector("ha-bottom-sheet");!C||C===this._topSheet||(this._topSheet=C,this._topSheetReady=!1,C.querySelectorAll(":scope > *").forEach(H=>{H.addEventListener("touchstart",N4)}),this._topSheetReady=await D4(C))}_applyUix(){let C=this._config,H=this.renderRoot.querySelector("ha-adaptive-dialog, ha-dialog, ha-bottom-sheet");if(!C||!H)return;let e=R4(C),r=`${H.localName}:${C.popup_id}:${JSON.stringify(e??null)}`;if(r===this._uixKey&&H===this._uixSurface)return;this._uixKey=r,this._uixSurface=H;let M={config:C,params:{popup_id:C.popup_id}};K5(H,"more-info",void 0,M,"type-more-info-popup"),K5(H,"more-info-popup",e,M,"type-more-info-popup")}_syncZones(C){let H=`${C.popup_id}:${C.entity??""}`,e=C.keep_alive?this._keepAlive.get(H):void 0;e||(e=new f1,C.keep_alive&&this._keepAlive.set(H,e)),this._zones=e,this._sections=e.update(C,this.hass)}async _loadEntry(C){if(C in this._entries)return;let H;try{H=await this.hass.callWS({type:"config/entity_registry/get",entity_id:C})}catch{H=null}this._entries={...this._entries,[C]:H}}_canShowView(C){return W1(r7[C])}_pushFrame(C){if(C.view!=="root"&&!this._canShowView(C.view)){w(this,"hass-more-info",{entityId:C.entityId??null,view:C.view});return}C.entityId&&this._loadEntry(C.entityId),this._detailsYaml=!1,this._stack=[...this._stack,C]}_setView(C){let H=this._frame;H&&this._pushFrame({entityId:H.entityId,view:C,children:[]})}_replaceTop(C){this._stack=[...this._stack.slice(0,-1),C]}_showChildView(C){C.stopPropagation();let H=this._frame;if(!H)return;let e=C.detail;e.viewImport?.(),e.viewHeaderImport?.(),this._replaceTop({...H,children:[...H.children,e]})}_handleMoreInfo(C){if(this._config?.nested_more_info==="dialog")return;C.stopPropagation();let{entityId:H}=C.detail;if(!H)return;let e=C.detail.view??C.detail.tab??"info",r=this._frame;if(r&&r.entityId===H&&r.view!=="root"){r.view!==e&&this._setView(e);return}this._pushFrame({entityId:H,view:e==="details"?e:"info",children:[]})}_entryUpdated(C){let H=C.detail;H?.entity_id&&(this._entries={...this._entries,[H.entity_id]:H})}_handleMenu(C){let e=this._frame?.entityId;if(!e)return;let r=C.detail?.item?.value;switch(r){case"info":case"related":case"details":case"add_to":this._setView(r);break;case"device":{let M=e5(this.hass,e);M&&A5(this,`/config/devices/device/${M}`);break}case"edit":{let M=this.hass.states[e],t=M&&C7(M,this._entries[e]?.unique_id);t&&A5(this,t);break}default:break}}_clearAutoClose(C=!0){if(clearTimeout(this._autoCloseTimer),this._autoCloseTimer=void 0,C)for(let H of z4)this.removeEventListener(H,this._armAutoClose)}_updateFill(){for(let M of this._fillCards)M.isConnected||this._fillCards.delete(M);let[C,...H]=this._fillCards;for(let M of H)M.popupFill=0;if(!C)return;if(this._config?.layout==="zones"){C.popupFill=0;return}C.popupFill=0;let e=this._observedContent,r=e?.firstElementChild;!e||!r||this._frame?.view!=="root"||(C.popupFill=Math.floor(e.clientHeight-r.offsetHeight))}render(){let C=this._config,H=this._frame;if(!C||!H||!this.hass)return A;let e=!C.dismissable||H.view==="settings"||!this._escapeEnabled,r=F(U0(C)),M=this._renderContent(H);if(C.mode==="bottom_sheet"||C.mode==="top_sheet"){let p=C.mode==="top_sheet";return a5(C.mode,o`
          <ha-bottom-sheet
            class=${P({top:p})}
            style=${r}
            .open=${this._open&&(!p||this._topSheetReady)}
            .preventScrimClose=${e}
            flexcontent
            @opened=${this._dialogOpened}
            @closed=${this._dialogClosed}
            @show-child-view=${this._showChildView}
          >
            <ha-dialog-header
              slot="header"
              @touchstart=${p?this._topSwipe:A}
            >
              ${this._renderNavigation(H,"navigationIcon")}
              ${this._renderTitle(C,H,"title")}
              ${this._renderActions(C,H,"actionItems")}
            </ha-dialog-header>
            ${M}
            ${p?o`<div
                    slot="footer"
                    class="top-sheet-handle"
                    aria-hidden="true"
                    @touchstart=${this._topSwipe}
                  ></div>`:A}
          </ha-bottom-sheet>
        `)}let t=C.mode==="dialog"?"ha-dialog":"ha-adaptive-dialog",i=this._fill?"full":W0(C),n=o`
      ${this._renderNavigation(H,"headerNavigationIcon")}
      ${this._renderTitle(C,H,"headerTitle")}
      ${this._renderActions(C,H,"headerActionItems")} ${M}
    `;return t==="ha-dialog"?o`
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
            ${n}
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
            ${n}
          </ha-adaptive-dialog>
        `}_isDefaultView(C){return(C.view==="root"||C.view==="info")&&!C.children.length}_renderNavigation(C,H){return this._stack.length===1&&!C.children.length?o`
          <ha-icon-button
            slot=${H}
            .label=${this.hass.localize("ui.common.close")}
            .path=${L2}
            @click=${this.closeDialog}
          ></ha-icon-button>
        `:o`
          <ha-icon-button-prev
            slot=${H}
            .label=${this.hass.localize("ui.dialogs.more_info_control.back_to_info")}
            @click=${this._goBack}
          ></ha-icon-button-prev>
        `}_renderTitle(C,H,e){let r=b2(this.hass,C,H);return y2(this.hass,r,e,C.mode==="bottom_sheet"||C.mode==="top_sheet"?void 0:this._enlarge,this._breadcrumbClick)}_renderActions(C,H,e){let r=H.entityId,M=H.view==="root";if(!r)return A;if(!this._isDefaultView(H)){if(H.view==="details"&&!H.children.length)return o`
          <ha-icon-button
            slot=${e}
            .label=${this.hass.localize("ui.dialogs.more_info_control.toggle_yaml_mode")}
            .path=${e2}
            @click=${()=>{this._detailsYaml=!this._detailsYaml}}
          ></ha-icon-button>
        `;let h=H.children[H.children.length-1];if(h?.viewHeaderTag){let B=this._childElement(h,h.viewHeaderTag,"header");return B.slot=e,Object.assign(B,{hass:this.hass,params:h.viewParams}),B}return A}if(M&&!C.show_header_actions)return A;let t=this.hass,i=I1(t),n=j0(t,r,!M)?o`
          <ha-icon-button
            slot=${e}
            .label=${t.localize("ui.dialogs.more_info_control.history")}
            .path=${$3}
            @click=${()=>this._setView("history")}
          ></ha-icon-button>
        `:A;if(!i)return o`
        ${n}
        ${L5(t)?o`
                <ha-icon-button
                  slot=${e}
                  .label=${t.localize("ui.dialogs.more_info_control.add_to.item")}
                  .path=${W2}
                  @click=${()=>this._setView("add_to")}
                ></ha-icon-button>
              `:A}
      `;let p=t.states[r],d=e5(t,r),c=X0(t,d),x=v(r);return o`
      ${n}
      <ha-icon-button
        slot=${e}
        .label=${t.localize("ui.dialogs.more_info_control.settings")}
        .path=${r2}
        @click=${()=>this._setView("settings")}
      ></ha-icon-button>
      <ha-dropdown
        slot=${e}
        placement="bottom-end"
        @closed=${h=>h.stopPropagation()}
        @opened=${h=>h.stopPropagation()}
        @wa-select=${this._handleMenu}
      >
        <ha-icon-button
          slot="trigger"
          .label=${t.localize("ui.common.menu")}
          .path=${Q3}
        ></ha-icon-button>
        ${M?o`
                <ha-dropdown-item value="info">
                  <ha-svg-icon
                    slot="icon"
                    .path=${Z1}
                  ></ha-svg-icon>
                  ${u(t,"dialog.entity_controls")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:A}
        ${L5(t)?o`
                <ha-dropdown-item value="add_to">
                  <ha-svg-icon
                    slot="icon"
                    .path=${W2}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.add_to.item")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:A}
        ${d?o`
                <ha-dropdown-item value="device">
                  <ha-svg-icon
                    slot="icon"
                    .path=${c==="service"?v0:G3}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.device_or_service_info",{type:t.localize(`ui.dialogs.more_info_control.device_type.${c}`)})}
                </ha-dropdown-item>
              `:A}
        ${J0(p)?o`
                <ha-dropdown-item value="edit">
                  <ha-svg-icon
                    slot="icon"
                    .path=${a0}
                  ></ha-svg-icon>
                  ${t.localize(`ui.dialogs.more_info_control.edit_domain.${x}`)||t.localize("ui.dialogs.more_info_control.edit")}
                </ha-dropdown-item>
              `:A}
        <ha-dropdown-item value="related">
          <ha-svg-icon slot="icon" .path=${V0}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.related")}
        </ha-dropdown-item>
        <ha-dropdown-item value="details">
          <ha-svg-icon slot="icon" .path=${J3}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.details")}
        </ha-dropdown-item>
      </ha-dropdown>
    `}_childElement(C,H,e){let r=e==="view"?this._childViews:this._childHeaders,M=r.get(C);return M||(M=document.createElement(H),r.set(C,M)),M}_renderContent(C){let H=`${this._stack.length}:${C.entityId??""}:${C.view}`,e=C.view==="root"&&!C.children.length&&this._config?.layout==="zones";return o`
      <div
        class=${P({"content-wrapper":!0,"settings-view":C.view==="settings"})}
      >
        ${a5(H,o`
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
          class=${P({"fade-top":!0,visible:this._contentScrolled&&!e})}
        ></div>
        <div
          class=${P({"fade-bottom":!0,visible:this._contentScrollable&&!e})}
        ></div>
      </div>
    `}_renderChild(C){let H=C.children[C.children.length-1];if(!H)return A;let e=this._childElement(H,H.viewTag,"view");return Object.assign(e,{hass:this.hass,entry:C.entityId?this._entries[C.entityId]:void 0,params:H.viewParams}),o`<div class="child-view">${e}</div>`}_renderFrame(C){let H=this.hass,e=C.entityId,r=e?this._entries[e]:void 0;if(C.view==="root")return o`
        ${h2(this._config,this._sections,{hidden:C.children.length>0,onScroll:this._updateScrollState,fadeTop:this._contentScrolled,fadeBottom:this._contentScrollable})}
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
        `;default:return A}}};S=I(V9),q5=new WeakMap,Y5=new WeakMap,j5=new WeakMap,X5=new WeakMap,J5=new WeakMap,C3=new WeakMap,H3=new WeakMap,V3=new WeakMap,L3=new WeakMap,e3=new WeakMap,r3=new WeakMap,M3=new WeakMap,m(S,4,"hass",H9,E,q5),m(S,4,"fixedTop",C9,E,Y5),m(S,4,"_params",J4,E,j5),m(S,4,"_open",X4,E,X5),m(S,4,"_stack",j4,E,J5),m(S,4,"_entries",Y4,E,C3),m(S,4,"_fill",q4,E,H3),m(S,4,"_escapeEnabled",K4,E,V3),m(S,4,"_detailsYaml",Q4,E,L3),m(S,4,"_contentScrolled",G4,E,e3),m(S,4,"_contentScrollable",U4,E,r3),m(S,4,"_topSheetReady",W4,E,M3),D(S,E),l(E,"styles",[m7,s7,v7,c7,g2,O2,f2,O`
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
      /* vertical_align: the body fills the free space of a taller popup. */
      .content:has(> .body:is(.align-center, .align-bottom):not([hidden])) {
        display: flex;
        flex-direction: column;
      }
      .body.align-center,
      .body.align-bottom {
        flex: 1 0 auto;
      }
      .body.align-center {
        justify-content: center;
      }
      .body.align-bottom {
        justify-content: flex-end;
      }
      /* layout: zones. The main zone takes the free height; the header and
         footer stay pinned while it scrolls between them. */
      .content:has(> .body.zones:not([hidden])) {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .body.zones {
        flex: 1 1 auto;
        min-height: 0;
        display: flex;
        flex-direction: column;
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
    `]);customElements.get(L1)||customElements.define(L1,E);var L9=L=>{if(!(!L||L.length<2))try{return decodeURIComponent(L.slice(1))}catch{return}},X6=L=>`${L.pathname}${L.search}`,X1=L=>{L.history.replaceState(L.history.state,"",X6(L.location))},e9=(L,V=500)=>new Promise(C=>{let H=!1,e=()=>{H||(H=!0,L.removeEventListener("popstate",r),clearTimeout(M),L.location.hash&&X1(L),C())},r=()=>e(),M=setTimeout(e,V);L.addEventListener("popstate",r),L.history.back()});var r9="this",J6=new Set(["entity","entity_id"]),C8=new Set(["entities","entity_id"]),H8=100,V8=10,M9=new Map,L8=L=>{let V=M9.get(L);if(!V){let C=L.split("").map(H=>H==="*"?".*":H==="?"?".":H.replace(/[.+^${}()|[\]\\]/g,"\\$&")).join("");V=new RegExp(`^${C}$`),M9.set(L,V)}return V},o3=(L,V,C)=>{if(!L.replace_more_info)return-1;if(L.entity===V)return H8;let H=L.match;if(!H)return-1;if(H.entities?.includes(V))return V8;let e=[H.integration===void 0||C?.entities?.[V]?.platform===H.integration,H.domain===void 0||V.split(".")[0]===H.domain,H.entity_glob===void 0||L8(H.entity_glob).test(V)],r=[H.integration,H.domain,H.entity_glob].filter(M=>M!==void 0).length;return r&&e.every(Boolean)?r:-1},F2=(L,V)=>Object.keys(V.states).filter(C=>o3(L,C,V)>0),t3=(L,V,C)=>L===r9&&J6.has(V)?C:Array.isArray(L)?L.map(H=>H===r9&&C8.has(V)?C:t3(H,"",C)):L&&typeof L=="object"?Object.fromEntries(Object.entries(L).map(([H,e])=>[H,t3(e,H,C)])):L,t9=(L,V)=>V?t3(L,"",V):L,J1=(L,V)=>{let C=V??L.entity,H=e=>e?.cards?{...e,cards:t9(e.cards,C)}:e;return{...L,entity:C,cards:t9(L.cards,C),header:H(L.header),footer:H(L.footer)}},o9=L=>{if(!L||typeof L!="object")return;let V=Object.entries(L).filter(([,C])=>C!=null&&C!==""&&!(Array.isArray(C)&&!C.length));return V.length?Object.fromEntries(V):void 0};var i9=Symbol.for("more-info-popup-card.registry"),i3=class{constructor(V=window){this._win=V}_win;_hosts=new Set;_installed=!1;_consuming=!1;_checkScheduled=!1;register(V){this._install(),this._hosts.add(V),this._scheduleLocationCheck()}unregister(V){this._hosts.delete(V)}get(V){if(!V)return;let C;for(let H of this._hosts)H.isConnected&&H.popupConfig?.popup_id===V&&(C=H);return C}findByEntity(V){let C,H=0;for(let e of this._hosts){let r=e.popupConfig;if(!e.isConnected||!r)continue;let M=o3(r,V,e.hass??this._hass());M>0&&M>=H&&(C=e,H=M)}return C}_hass(){return this._win.document?.querySelector("home-assistant")?.hass}open(V,C){let H=this.get(V);return H?.openPopup(C),!!H}close(V){let C=n5();C&&(!V||C.popupId===V)&&C.close()}toggle(V,C){n5()?.popupId===V?this.close(V):this.open(V,{entity:C})}_install(){this._installed||(this._installed=!0,this._win.addEventListener("location-changed",this._onLocationChanged),this._win.addEventListener("popstate",this._onPopState),this._win.addEventListener("ll-custom",this._onCustomAction),this._win.addEventListener("hass-more-info",this._onMoreInfo,{capture:!0}))}_scheduleLocationCheck(){this._checkScheduled||(this._checkScheduled=!0,queueMicrotask(()=>{this._checkScheduled=!1;let V=this._hostForHash();V&&!this._consuming&&(X1(this._win),V.openPopup())}))}_hostForHash(){return this.get(L9(this._win.location.hash))}_onLocationChanged=V=>{if(this._consuming)return;let C=this._hostForHash();if(!C)return;let e=!!!V.detail?.replace&&this._win.history.state?.from===this._win.location.pathname;this._consuming=!0,(e?e9(this._win):Promise.resolve(X1(this._win))).then(()=>{this._consuming=!1,C.openPopup()})};_onPopState=()=>{if(this._consuming)return;let V=this._hostForHash();V&&(X1(this._win),V.openPopup())};_onCustomAction=V=>{let H=V.detail?.more_info_popup;H&&(typeof H=="string"?this.open(H):H.open?this.open(H.open,{entity:H.entity}):H.toggle?this.toggle(H.toggle,H.entity):H.close!==void 0&&this.close(H.close||void 0))};_onMoreInfo=V=>{let C=V.detail;if(!C?.entityId)return;let H=this.findByEntity(C.entityId);if(!H||V.composedPath().some(M=>M.localName===L1))return;V.stopImmediatePropagation();let r=C.view??C.tab;H.openPopup({view:r&&r!=="info"?r:void 0,entity:C.entityId})}},a3=()=>{let L=window;return L[i9]??=new i3(window),L[i9]};var n1=(L,V,C)=>C.map(H=>({value:H,label:u(L,`editor.${V}.${H}`)})),a9=L=>L.sort((V,C)=>V.label.localeCompare(C.label)),e8=L=>a9([...new Set(Object.values(L.entities??{}).map(V=>V.platform).filter(V=>!!V))].map(V=>({value:V,label:L.localize(`component.${V}.title`)||V}))),r8=L=>a9([...new Set(Object.keys(L.states).map(V=>V.split(".")[0]))].map(V=>({value:V,label:L.localize(`component.${V}.title`)||V}))),M8=L=>({name:"match",type:"expandable",expanded:!0,iconPath:j3,title:u(L,"editor.match"),schema:[{name:"",type:"grid",schema:[{name:"integration",selector:{select:{mode:"dropdown",custom_value:!0,options:e8(L)}}},{name:"domain",selector:{select:{mode:"dropdown",custom_value:!0,options:r8(L)}}}]},{name:"entity_glob",selector:{text:{}}},{name:"entities",selector:{entity:{multiple:!0}}}]}),A9=(L,V)=>[{name:"general",type:"expandable",flatten:!0,expanded:!0,iconPath:M2,title:u(L,"editor.section.general"),schema:[{name:"popup_id",required:!0,selector:{text:{prefix:"#"}}},{name:"entity",selector:{entity:{}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]}]},{name:"appearance",type:"expandable",flatten:!0,iconPath:i0,title:u(L,"editor.section.appearance"),schema:[{name:"mode",selector:{select:{mode:"dropdown",options:n1(L,"mode",["auto","dialog","bottom_sheet","top_sheet"])}}},{name:"breadcrumb",selector:{select:{mode:"dropdown",custom_value:!0,options:n1(L,"breadcrumb",["auto","none"])}}},{name:"",type:"grid",schema:[{name:"width",selector:{select:{mode:"dropdown",options:n1(L,"width",["small","medium","large","full","custom"])}}},...V.width==="custom"?[{name:"custom_width",selector:{text:{}}}]:[]]},{name:"",type:"grid",schema:[{name:"height",selector:{select:{mode:"dropdown",options:n1(L,"height",["auto","custom"])}}}]},...V.height==="custom"?[{name:"",type:"grid",schema:[{name:"min_height",selector:{text:{}}},{name:"max_height",selector:{text:{}}}]}]:[],{name:"column_span",selector:{number:{min:1,max:4,step:1,mode:"slider",slider_ticks:!0}}},{name:"layout",selector:{select:{mode:"list",options:n1(L,"layout",["single","zones"])}}},...V.layout==="zones"?[]:[n9(L)],{name:"card_borders",selector:{boolean:{}}},...V.entity||V.match?[{name:"show_header_actions",selector:{boolean:{}}}]:[]]},{name:"behavior",type:"expandable",flatten:!0,iconPath:r2,title:u(L,"editor.section.behavior"),schema:[{name:"replace_more_info",selector:{boolean:{}}},...V.replace_more_info?[M8(L)]:[],{name:"nested_more_info",selector:{select:{mode:"list",options:n1(L,"nested_more_info",["inline","dialog"])}}},{name:"dismissable",selector:{boolean:{}}},{name:"auto_close",selector:{number:{min:0,max:3600,step:5,mode:"box",unit_of_measurement:"s"}}},{name:"keep_alive",selector:{boolean:{}}}]}],n9=(L,V=!1)=>({name:"",type:"grid",schema:[{name:"vertical_align",selector:{select:{mode:"dropdown",options:n1(L,"vertical_align",["top","center","bottom"])}}},{name:"horizontal_align",selector:{select:{mode:"dropdown",options:n1(L,"horizontal_align",["left","center","right"])}}},...V?[{name:"min_height",selector:{text:{}}}]:[]]}),d9=(L,V)=>[n9(L,V!=="main")],t8={entity:"editor.entity_helper",breadcrumb:"editor.breadcrumb_helper",custom_width:"editor.length_helper",min_height:"editor.length_helper",max_height:"editor.length_helper",column_span:"editor.column_span_helper",layout:"editor.layout_helper",horizontal_align:"editor.horizontal_align_helper",replace_more_info:"editor.replace_more_info_helper",entity_glob:"editor.entity_glob_helper",entities:"editor.match_entities_helper"},o8={popup_id:"editor.popup_id",entity:"editor.entity",name:"editor.name",icon:"editor.icon",breadcrumb:"editor.breadcrumb",mode:"editor.mode",width:"editor.width",custom_width:"editor.custom_width",height:"editor.height",min_height:"editor.min_height",max_height:"editor.max_height",column_span:"editor.column_span",layout:"editor.layout",vertical_align:"editor.vertical_align",horizontal_align:"editor.horizontal_align",card_borders:"editor.card_borders",show_header_actions:"editor.show_header_actions",replace_more_info:"editor.replace_more_info",integration:"editor.match_integration",domain:"editor.match_domain",entity_glob:"editor.entity_glob",entities:"editor.match_entities",nested_more_info:"editor.nested_more_info",dismissable:"editor.dismissable",auto_close:"editor.auto_close",keep_alive:"editor.keep_alive"},A3=L=>V=>{if(V.title)return V.title;let C=o8[V.name];return C?u(L,C):V.name},n3=(L,V)=>C=>{if(C.name==="popup_id")return u(L,"editor.popup_id_helper",{id:V.popup_id||"\u2026"});let H=t8[C.name];return H?u(L,H):void 0};var p9=L=>{let V={views:[{type:"sections",sections:L.sections}]};return{config:V,rawConfig:V,editMode:!0,urlPath:null,mode:"storage",locale:L.locale,enableFullEditMode:()=>{},setEditMode:()=>{},saveConfig:async C=>{let H=C.views?.[0]?.sections??[];L.onSave(L.sections.map((e,r)=>structuredClone(H[r]?.cards??[])))},deleteConfig:async()=>{},showToast:C=>L.onToast(C)}},l9=L=>{if(!Array.isArray(L)||L.length<3)return;let[,V,C]=L.slice(-3);return typeof V=="number"&&typeof C=="number"?{section:V,card:C}:void 0};var i8=30,a8=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]/g,"_").replace(/^[_-]+/,""),s9,v9,c9,x9,u9,Z9,S9,h9,f9,y,d3,p3,l3,m3,s3,v3,c3,x3,Q=class extends(f9=T,h9=[_({attribute:!1})],S9=[_({attribute:!1})],Z9=[Z()],u9=[Z()],x9=[Z()],c9=[Z()],v9=[Z()],s9=[Z()],f9){constructor(){super(...arguments);s(this,d3,a(y,8,this)),a(y,11,this);s(this,p3,a(y,12,this)),a(y,15,this);s(this,l3,a(y,16,this)),a(y,19,this);s(this,m3,a(y,20,this)),a(y,23,this);s(this,s3,a(y,24,this,!1)),a(y,27,this);s(this,v3,a(y,28,this,!0)),a(y,31,this);s(this,c3,a(y,32,this,!0)),a(y,35,this);l(this,"_sections",new Map);l(this,"_sectionsKey");l(this,"_undo",[]);s(this,x3,a(y,36,this)),a(y,39,this);l(this,"_noticeTimer");l(this,"_titlesRequested",!1);l(this,"_undoLast",()=>{let C=this._undo[this._undo.length-1];this._notice=void 0,C&&(this._undo=this._undo.slice(0,-1),this._setCards(C,!1))});l(this,"_toast",C=>{clearTimeout(this._noticeTimer),this._notice={message:C.message,undo:!!C.action&&this._undo.length>0},this._noticeTimer=setTimeout(()=>{this._notice=void 0},C.duration&&C.duration>0?C.duration:6e3)});l(this,"_interceptEdit",{capture:!0,handleEvent:C=>{let H=l9(C.detail?.path),e=H&&this._zoneAt(H.section);!H||!e||(C.stopPropagation(),C.type==="ll-duplicate-card"?this._duplicate(e,H.card):this._openEditor(e,H.card))}});l(this,"_interceptCreate",{capture:!0,handleEvent:C=>{C.stopPropagation();let H=C.currentTarget.dataset.zone;this._sub={kind:"add",zone:H??"main"}}});l(this,"_back",()=>{this._returnToCards()})}setConfig(C){N1(C),this._config=structuredClone(C)}connectedCallback(){super.connectedCallback(),t7().then(()=>{this._ready=!0})}willUpdate(C){this.hass&&!this._titlesRequested&&(this._titlesRequested=!0,this.hass.loadBackendTranslation?.("title")),(C.has("_config")||C.has("hass"))&&this._config&&this.hass&&this._syncSections()}get _zones(){return this._config?G1(this._config):[]}_cards(C){return this._config?d7(this._config,C):[]}_zoneSectionConfig(C){return o5(this._config??{},this._cards(C))}_emit(C){this._config=C,w(this,"config-changed",{config:C})}_snapshot(){return Object.fromEntries(this._zones.map(C=>[C.id,structuredClone(C.cards)]))}_setCards(C,H=!0){if(!this._config)return;let e=this._config;for(let[r,M]of Object.entries(C))e=p7(e,r,M);JSON.stringify(e)!==JSON.stringify(this._config)&&(H&&(this._undo=[...this._undo,this._snapshot()].slice(-i8)),this._emit(e))}_syncSections(){let C=this._zones,H=C.map(M=>this._zoneSectionConfig(M.id));for(let M of C){this._sections.has(M.id)||this._sections.set(M.id,document.createElement("hui-section"));let t=this._sections.get(M.id);t.hass=this.hass,S2(t,M.horizontal_align)}let e=JSON.stringify(H);if(e===this._sectionsKey)return;this._sectionsKey=e;let r=p9({sections:H,locale:this.hass.locale,onSave:M=>this._setCards(Object.fromEntries(C.map((t,i)=>[t.id,M[i]??[]]))),onToast:this._toast});C.forEach((M,t)=>{let i=this._sections.get(M.id);i.viewIndex=0,i.index=t,i.preview=!0,i.lovelace=r,i.config=H[t]})}_zoneAt(C){return this._zones[C]?.id}_copyNative(C,H){let e=this._sections.get(C),r=e?.firstElementChild??e;r&&w(r,"ll-copy-card",{path:[0,e.index??0,H]})}_openEditor(C,H){this._guiMode=!0,this._guiModeAvailable=!0,this._sub={kind:"edit",zone:C,index:H}}_returnToCards(){this._sub=void 0,this.updateComplete.then(()=>this.renderRoot.querySelector(".cards-header")?.scrollIntoView({block:"start"}))}_duplicate(C,H){let e=[...this._cards(C)];e.splice(H+1,0,structuredClone(e[H])),this._setCards({[C]:e}),this._openEditor(C,H+1)}_delete(C,H){let e=[...this._cards(C)];e.splice(H,1),this._setCards({[C]:e}),this._returnToCards(),this._toast({message:u(this.hass,"editor.card_deleted"),action:{text:u(this.hass,"editor.undo"),action:this._undoLast}})}_cut(C,H){this._copyNative(C,H);let e=[...this._cards(C)];e.splice(H,1),this._setCards({[C]:e}),this._returnToCards()}_cardPicked(C){C.stopPropagation();let H=C.detail.config;if(!H?.type||this._sub?.kind!=="add")return;let e=this._sub.zone,r=[...this._cards(e),H];this._setCards({[e]:r}),this._openEditor(e,r.length-1)}_cardChanged(C){if(C.stopPropagation(),this._sub?.kind!=="edit")return;let{zone:H,index:e}=this._sub,r=[...this._cards(H)];r[e]=C.detail.config,this._guiModeAvailable=C.detail.guiModeAvailable??!0,this._setCards({[H]:r})}_guiModeChanged(C){C.stopPropagation(),this._guiMode=C.detail.guiMode,this._guiModeAvailable=C.detail.guiModeAvailable}_toggleMode(){this.renderRoot.querySelector("hui-card-element-editor")?.toggleMode()}_valueChanged(C){if(C.stopPropagation(),!this._config)return;let H={...C.detail.value};typeof H.popup_id=="string"&&(H.popup_id=a8(H.popup_id));let e={...this._config,...H};for(let[M,t]of Object.entries(e1))e[M]===t&&delete e[M];for(let M of Object.keys(e))(e[M]===""||e[M]===void 0)&&delete e[M];e.width!=="custom"&&delete e.custom_width,e.height!=="custom"&&(delete e.min_height,delete e.max_height);let r=o9(e.match);r?e.match=r:delete e.match,e.replace_more_info||delete e.match,!e.entity&&!e.match&&delete e.show_header_actions,this._emit(e)}_zoneChanged(C,H){if(H.stopPropagation(),!this._config)return;let e=H.detail.value;if(C==="main"){this._valueChanged(new CustomEvent("value-changed",{detail:{value:{vertical_align:e.vertical_align,horizontal_align:e.horizontal_align}}}));return}let r={...this._config[C]},M={vertical_align:"top",horizontal_align:"left"};for(let i of["vertical_align","horizontal_align","min_height"]){let n=e[i];!n||n===M[i]?delete r[i]:r[i]=n}let t={...this._config,[C]:r};Object.keys(r).length||delete t[C],this._emit(t)}_testPopup(){if(!this._config)return;let C;try{C=x2(N1(this._config))}catch{return}C=J1(C,C.entity??F2(C,this.hass)[0]),w(this,"show-dialog",{dialogTag:L1,dialogImport:()=>Promise.resolve(),dialogParams:{config:C},addHistory:!0})}render(){return!this.hass||!this._config?A:this._ready?this._sub?.kind==="add"?this._renderAdd():this._sub?.kind==="edit"&&this._cards(this._sub.zone)[this._sub.index]?this._renderEdit(this._sub.zone,this._sub.index):this._renderMain():o`<ha-spinner size="small"></ha-spinner>`}_renderMain(){let C=this.hass,H=this._config,e={...e1,...H};return o`
      <ha-form
        .hass=${C}
        .data=${e}
        .schema=${A9(C,e)}
        .computeLabel=${A3(C)}
        .computeHelper=${n3(C,H)}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="cards-header">
        <h3>${u(C,"editor.tab.cards")}</h3>
        <ha-button appearance="plain" size="small" @click=${this._testPopup}>
          ${u(C,"editor.test_popup")}
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
                        ${u(C,"editor.undo")}
                      </ha-button>`:A}
              </ha-alert>
            `:A}
      ${H.layout==="zones"?o`<div class="zones">
              ${this._zones.map(r=>this._renderZone(r))}
            </div>`:o`
              ${this._cards("main").length?A:o`<p class="empty">${u(C,"editor.empty")}</p>`}
              ${this._renderGrid("main")}
            `}
    `}_renderGrid(C){let H=this._config;return o`
      <div
        class=${P({grid:!0,borderless:H.card_borders===!1})}
        data-zone=${C}
        style=${F({"--column-span":String(H.column_span??1)})}
        @ll-edit-card=${this._interceptEdit}
        @ll-duplicate-card=${this._interceptEdit}
        @ll-create-card=${this._interceptCreate}
      >
        ${this._sections.get(C)}
      </div>
    `}_renderZone(C){let H=this.hass;return o`
      <section class="zone zone-${C.id}">
        <div class="zone-header">
          <span class="zone-title">
            ${u(H,`editor.zone.${C.id}`)}
          </span>
          <span class="zone-hint">
            ${u(H,`editor.zone.${C.id}_hint`)}
          </span>
        </div>
        <ha-form
          class="zone-options"
          .hass=${H}
          .data=${C}
          .schema=${d9(H,C.id)}
          .computeLabel=${A3(H)}
          .computeHelper=${n3(H,this._config)}
          @value-changed=${e=>this._zoneChanged(C.id,e)}
        ></ha-form>
        ${this._renderGrid(C.id)}
      </section>
    `}_renderSubHeader(C,H=A){return o`
      <div class="sub-header">
        <ha-icon-button-prev
          .label=${u(this.hass,"editor.back")}
          @click=${this._back}
        ></ha-icon-button-prev>
        <span class="sub-title">${C}</span>
        <div class="sub-actions">${H}</div>
      </div>
    `}_renderAdd(){return o`
      ${this._renderSubHeader(u(this.hass,"editor.add_card"))}
      <hui-card-picker
        .hass=${this.hass}
        .lovelace=${this.lovelace??{views:[]}}
        @config-changed=${this._cardPicked}
      ></hui-card-picker>
    `}_renderEdit(C,H){let e=this.hass,r=this._cards(C)[H],M=i=>e.localize(`ui.panel.lovelace.editor.edit_card.${i}`),t=o`
      <ha-icon-button
        .label=${M(this._guiMode?"show_code_editor":"show_visual_editor")}
        .path=${this._guiMode?e2:L0}
        .disabled=${!this._guiModeAvailable}
        @click=${this._toggleMode}
      ></ha-icon-button>
      <ha-icon-button
        .label=${M("duplicate")}
        .path=${z3}
        @click=${()=>this._duplicate(C,H)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${M("copy")}
        .path=${N3}
        @click=${()=>this._copyNative(C,H)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${M("cut")}
        .path=${I3}
        @click=${()=>this._cut(C,H)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${M("delete")}
        .path=${U3}
        @click=${()=>this._delete(C,H)}
      ></ha-icon-button>
    `;return o`
      ${this._renderSubHeader(u(e,"editor.edit_card"),t)}
      <hui-card-element-editor
        .hass=${e}
        .lovelace=${this.lovelace}
        .value=${r}
        .sectionConfig=${this._zoneSectionConfig(C)}
        show-visibility-tab
        @config-changed=${this._cardChanged}
        @GUImode-changed=${this._guiModeChanged}
      ></hui-card-element-editor>
    `}};y=I(f9),d3=new WeakMap,p3=new WeakMap,l3=new WeakMap,m3=new WeakMap,s3=new WeakMap,v3=new WeakMap,c3=new WeakMap,x3=new WeakMap,m(y,4,"hass",h9,Q,d3),m(y,4,"lovelace",S9,Q,p3),m(y,4,"_config",Z9,Q,l3),m(y,4,"_sub",u9,Q,m3),m(y,4,"_ready",x9,Q,s3),m(y,4,"_guiMode",c9,Q,v3),m(y,4,"_guiModeAvailable",v9,Q,c3),m(y,4,"_notice",s9,Q,x3),D(y,Q),l(Q,"styles",O`
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
    /* card_borders: false, as in the popup */
    .grid.borderless {
      --ha-card-border-width: 0;
      --ha-card-box-shadow: none;
    }
    /* layout: zones, drawn as the popup frame */
    .zones {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-border-radius-lg);
      overflow: hidden;
    }
    .zone {
      padding: var(--ha-space-2) var(--ha-space-3) 0;
    }
    .zone + .zone {
      border-top: 1px dashed var(--divider-color);
    }
    .zone-main {
      background: var(--secondary-background-color);
      padding-bottom: var(--ha-space-4);
    }
    .zone-header {
      display: flex;
      align-items: baseline;
      gap: var(--ha-space-2);
      margin-bottom: var(--ha-space-2);
    }
    .zone-title {
      font-weight: var(--ha-font-weight-medium);
    }
    .zone-hint {
      color: var(--secondary-text-color);
      font-size: var(--ha-font-size-s);
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
  `);customElements.get(D1)||customElements.define(D1,Q);var C2="more-info-controls-card",g9,O9,b9,y9,_9,K,u3,Z3,S3,h3,M1=class extends(_9=T,y9=[_({attribute:!1})],b9=[Z()],O9=[Z()],g9=[Z()],_9){constructor(){super(...arguments);s(this,u3,a(K,8,this)),a(K,11,this);s(this,Z3,a(K,12,this)),a(K,15,this);s(this,S3,a(K,16,this,!1)),a(K,19,this);s(this,h3,a(K,20,this,{})),a(K,23,this);l(this,"_timers",{})}static getConfigElement(){return document.createElement(R5)}static getStubConfig(C,H){let e=H.find(i=>i.startsWith("light.")&&C.states[i]?.attributes.effect_list),r=H.find(i=>b1.includes(v(i))),M=H.find(i=>i.startsWith("switch.")),t=[];return e&&t.push({entity:e,attribute:"effect"}),r&&t.push({entity:r}),M&&t.push({entity:M}),!t.length&&H[0]&&t.push({entity:H[0]}),{type:`custom:${C2}`,controls:t}}setConfig(C){if(!Array.isArray(C?.controls))throw new Error('"controls" must be a list');C.controls.forEach((H,e)=>{if(!H||typeof H!="object")throw new Error(`Control ${e+1} is invalid`);let r=K1(H);if(r!=="action"&&r!=="button"&&!H.entity)throw new Error(`Control ${e+1} needs an "entity"`);if(H.attribute&&H.attribute!=="state"&&!Q1[H.attribute]&&!H.options)throw new Error(`Control ${e+1}: unknown attribute "${H.attribute}"; add "options" and "perform_action"`)}),this._config=C}connectedCallback(){super.connectedCallback(),g1("light",["ha-more-info-control-select-container","ha-control-select-menu"]).then(()=>{this._ready=!0})}disconnectedCallback(){super.disconnectedCallback(),Object.values(this._timers).forEach(clearTimeout),this._timers={}}getCardSize(){return 1}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}_stateObj(C){return C.entity?this.hass?.states[C.entity]:void 0}_selectSpec(C,H){if(C.attribute)return C.attribute==="state"?i4:Q1[C.attribute]??{options:()=>[],value:e=>e.attributes[C.attribute]==null?void 0:String(e.attributes[C.attribute]),service:()=>["",""],data:e=>({[C.data_key??C.attribute]:e}),icon:P2.icon};if(b1.includes(v(H.entity_id)))return P2;if(C.options&&C.perform_action)return{options:()=>[],value:()=>{},service:()=>["",""],data:e=>({[C.data_key??"value"]:e}),icon:P2.icon,attributeIcons:!1}}_call(C,H,e,r){let[M,t]=C.perform_action?P5(C.perform_action):H;if(!M||!t)return;let i={...C.entity?{entity_id:C.entity}:{},...C.perform_action&&C.data_key?{[C.data_key]:r}:e,...C.data};this.hass.callService(M,t,i)}_label(C,H){return C.name?C.name:H?C.attribute&&C.attribute!=="state"?this.hass.formatEntityAttributeName(H,C.attribute):r1(H):""}_icon(C,H,e,r,M=!0){let t=F({color:C.color&&M?p5(C.color):void 0});return C.icon?o`<ha-icon
        slot=${r??A}
        style=${t}
        .icon=${C.icon}
      ></ha-icon>`:e?o`<ha-svg-icon
        slot=${r??A}
        style=${t}
        .path=${e}
      ></ha-svg-icon>`:o`<ha-state-icon
      slot=${r??A}
      style=${t}
      .hass=${this.hass}
      .stateObj=${H}
    ></ha-state-icon>`}_renderSelect(C,H){let e=this.hass,r=this._selectSpec(C,H);if(!r)return A;let M=l4(C.options),t=M?M.map(x=>x.value):r.options(H),i=C.attribute&&C.attribute!=="state"?C.attribute:void 0,n=x=>{let h=M?.find(B=>B.value===x);return h?.name?h.name:r.formatAsState||!i?e.formatEntityState(H,x):e.formatEntityAttributeValue(H,i,x==="true"?!0:x==="false"?!1:x)},p=t.map(x=>{let h=M?.find(R=>R.value===x)?.icon,B=h?void 0:r.optionIcons?.[x];return{value:x,label:n(x),...h?{icon:h}:{},...B?{iconPath:B}:{}}}),d=x=>i&&!r.formatAsState?o`<ha-attribute-icon
            slot="icon"
            .hass=${e}
            .stateObj=${H}
            .attribute=${i}
            .attributeValue=${x}
          ></ha-attribute-icon>`:o`<ha-state-icon
            slot="icon"
            .hass=${e}
            .stateObj=${H}
            .stateValue=${x}
          ></ha-state-icon>`,c=!i&&b1.includes(v(H.entity_id));return o`
      <ha-control-select-menu
        .label=${this._label(C,H)}
        .value=${r.value(H)}
        .options=${p}
        .renderIcon=${C.icon||r.attributeIcons===!1?void 0:d}
        .disabled=${H.state==="unavailable"}
        @wa-select=${x=>{let h=x.detail?.item?.value;h===void 0||h===r.value(H)||this._call(C,r.service(H),r.data(h),h)}}
      >
        ${this._icon(C,c?H:void 0,c?void 0:r.icon,"icon")}
      </ha-control-select-menu>
    `}_renderToggle(C,H){let e=v(H.entity_id),r=!d4.includes(H.state),M=H.state==="unavailable",t=()=>{C.perform_action?this._call(C,["",""],{},void 0):e==="lock"?this.hass.callService("lock",r?"lock":"unlock",{entity_id:H.entity_id}):e==="cover"||e==="valve"?this.hass.callService(e,"toggle",{entity_id:H.entity_id}):this.hass.callService("homeassistant","toggle",{entity_id:H.entity_id})};return o`
      <button
        class=${P({chip:!0,toggle:!0,active:r})}
        role="switch"
        aria-checked=${String(r)}
        ?disabled=${M}
        @click=${t}
      >
        <div class="icon">
          ${this._icon(C,H,void 0,void 0,r)}
        </div>
        <div class="content">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${this.hass.formatEntityState(H)}</p>
        </div>
      </button>
    `}_renderNumber(C,H,e){let r=this.hass,M=H.attributes,t=C.min??Number(M.min??0),i=C.max??Number(M.max??100),n=C.step??Number(M.step??1),p=this._pending[e]??Number(C.attribute?M[C.attribute]:H.state),d=Number.isFinite(p),c=H.state==="unavailable"||!d,x=(String(n).split(".")[1]??"").length,h=d&&(this._pending[e]!==void 0||C.attribute)?`${p.toFixed(x)}${M.unit_of_measurement?` ${M.unit_of_measurement}`:""}`:r.formatEntityState(H),B=R=>{let Y=Math.min(i,Math.max(t,Number((p+R*n).toFixed(x))));Y!==p&&(this._pending={...this._pending,[e]:Y},clearTimeout(this._timers[e]),this._timers[e]=setTimeout(()=>{let $=v(H.entity_id);this._call(C,[$,"set_value"],{value:Y},Y);let o1={...this._pending};delete o1[e],this._pending=o1},p4))};return o`
      <div
        class="chip number"
        ?disabled=${c}
        role="group"
        aria-label=${this._label(C,H)}
      >
        <ha-icon-button
          .label=${r.localize("ui.card.counter.actions.decrement")||"\u2212"}
          .path=${t0}
          .disabled=${c||p<=t}
          @click=${()=>B(-1)}
        ></ha-icon-button>
        <div class="content center">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${h}</p>
        </div>
        <ha-icon-button
          .label=${r.localize("ui.card.counter.actions.increment")||"+"}
          .path=${n0}
          .disabled=${c||p>=i}
          @click=${()=>B(1)}
        ></ha-icon-button>
      </div>
    `}_runAction(C,H){if(H.action!=="none"){if(H.action==="more-info"){let e=H.entity??C.entity;e&&w(this,"hass-more-info",{entityId:e});return}w(this,"hass-action",{config:{entity:C.entity,tap_action:H},action:"tap"})}}_renderButton(C,H){let e=C.entity?v(C.entity):"",r=()=>{if(C.tap_action){this._runAction(C,C.tap_action);return}let M=C.perform_action??n4[e]??(C.entity?"homeassistant.toggle":void 0);if(!M)return;let[t,i]=P5(M);this.hass.callService(t,i,{...C.entity?{entity_id:C.entity}:{},...C.data})};return o`
      <ha-control-button
        .label=${this._label(C,H)}
        .disabled=${H?.state==="unavailable"}
        @click=${r}
      >
        ${this._icon(C,H,void 0)}
      </ha-control-button>
    `}_renderAction(C,H){let e=C.tap_action??{action:H?"more-info":"none"},r=C.show_arrow??B2(C,!!H),M=C.value??(H?this.hass.formatEntityState(H):"");return o`
      <button class="chip action" @click=${()=>this._runAction(C,e)}>
        <div class="icon">${this._icon(C,H,void 0)}</div>
        <div class="content">
          <p class="label">${this._label(C,H)}</p>
          ${M?o`<p class="value">${M}</p>`:A}
        </div>
        ${r?o`<div class="icon">
                <ha-svg-icon .path=${D3}></ha-svg-icon>
              </div>`:A}
      </button>
    `}_renderItem(C,H){let e=this._stateObj(C),r=K1(C);if(r==="action")return this._renderAction(C,e);if(r==="button")return this._renderButton(C,e);if(!e)return o`<div class="chip" disabled>
        <div class="content">
          <p class="label">${C.name??C.entity}</p>
          <p class="value">
            ${this.hass.localize("state.default.unavailable")}
          </p>
        </div>
      </div>`;switch(r){case"select":return this._renderSelect(C,e);case"toggle":return this._renderToggle(C,e);case"number":return this._renderNumber(C,e,H);default:return A}}_renderWrapped(C){let H=C.length;return o`
      <div class="wrap-controls">
        <div
          class=${P({"wrap-scroll":!0,[`items-${H}`]:!0,multiline:H>=4})}
        >
          ${C}
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return A;let C=this._config.appearance??"plain",H=this._config.controls.map((M,t)=>({item:M,index:t})),e=H.filter(({item:M})=>K1(M)==="button"),r=H.filter(({item:M})=>K1(M)!=="button");return o`
      <ha-card class=${C}>
        ${this._ready?H.length?o`
                  ${e.length?o`<div class="buttons">
                          <ha-control-button-group>
                            ${e.map(({item:M,index:t})=>this._renderItem(M,t))}
                          </ha-control-button-group>
                        </div>`:A}
                  ${r.length?this._config.wrap?this._renderWrapped(r.map(({item:M,index:t})=>this._renderItem(M,t))):o`<ha-more-info-control-select-container>
                            ${r.map(({item:M,index:t})=>this._renderItem(M,t))}
                          </ha-more-info-control-select-container>`:A}
                `:o`<p class="empty">
                  ${u(this.hass,"controls.empty")}
                </p>`:A}
      </ha-card>
    `}};K=I(_9),u3=new WeakMap,Z3=new WeakMap,S3=new WeakMap,h3=new WeakMap,m(K,4,"hass",y9,M1,u3),m(K,4,"_config",b9,M1,Z3),m(K,4,"_ready",O9,M1,S3),m(K,4,"_pending",g9,M1,h3),D(K,M1),l(M1,"styles",[E2,g4,O`
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
    `]);customElements.get(C2)||customElements.define(C2,M1);var w9,k9,T9,P9,B9,q,f3,g3,O3,b3,t1=class extends(B9=T,P9=[_({attribute:!1})],T9=[_({attribute:!1})],k9=[Z()],w9=[Z()],B9){constructor(){super(...arguments);s(this,f3,a(q,8,this)),a(q,11,this);s(this,g3,a(q,12,this)),a(q,15,this);s(this,O3,a(q,16,this)),a(q,19,this);s(this,b3,a(q,20,this,"hidden")),a(q,23,this);l(this,"connectedWhileHidden",!0);l(this,"_preview",!1);l(this,"_previewZones")}static async getConfigElement(){return document.createElement(D1)}static getStubConfig(C,H){let e=H.find(i=>i.startsWith("light."))??H[0],r=e?C.states[e]:void 0,M=r?z0(r1(r)):"",t=Math.random().toString(36).slice(2,6);return{type:`custom:${H5}`,popup_id:M?`${M}_${t}`:`popup_${t}`,cards:[]}}get preview(){return this._preview}set preview(C){this._preview=!!C,this._syncSurface()}get popupConfig(){return this._config}setConfig(C){this._config=x2(N1(C)),this._syncSurface()}getCardSize(){return this._surface==="hidden"?0:this._surface==="preview"?6:1}getGridOptions(){return this._computeSurface()==="preview"?{columns:"full",rows:"auto"}:{columns:6,rows:1,min_columns:3,max_rows:1}}openPopup(C){if(!this._config)return;let H=J1(this._config,C?.entity);M7().then(e=>{if(e.includes("ha-adaptive-dialog")||e.includes("hui-section")){w(this,"hass-notification",{message:u(this.hass,"card.missing_elements")});return}w(this,"show-dialog",{dialogTag:L1,dialogImport:()=>Promise.resolve(),dialogParams:{config:H,view:C?.view},addHistory:!0})})}connectedCallback(){super.connectedCallback(),a3().register(this),this._syncSurface()}disconnectedCallback(){super.disconnectedCallback(),a3().unregister(this)}_computeSurface(){return this._preview?this.closest("hui-card-edit-mode, hui-card-options")?"placeholder":"preview":"hidden"}_syncSurface(){let C=this._computeSurface();C!==this._surface&&(this._surface=C);let H=C==="hidden";this.hasAttribute("hidden")!==H&&(this.toggleAttribute("hidden",H),this.isConnected&&w(this,"card-visibility-changed",{value:!H}))}willUpdate(C){C.has("hass")&&this._previewZones&&(this._previewZones.hass=this.hass)}render(){return!this._config||!this.hass||this._surface==="hidden"?A:o7(this.hass.config.version)?this._surface==="placeholder"?this._renderPlaceholder(this._config):this._renderPreview(this._config):o`<ha-alert alert-type="warning">
        ${u(this.hass,"card.unsupported_version",{version:z1.join(".")})}
      </ha-alert>`}_renderPlaceholder(C){let H=this.hass,e=C.entity?H.states[C.entity]:void 0,r=C.name??(e?r1(e):C.popup_id),M=l7(C).length,t=M===1?u(H,"card.cards_count_one"):u(H,"card.cards_count",{count:M});return o`
      <ha-card class="placeholder">
        <ha-tile-container>
          <ha-tile-icon
            slot="icon"
            .icon=${C.icon}
            .iconPath=${C.icon?void 0:M2}
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
              title=${u(H,"card.hidden_hint",{id:C.popup_id})}
            >
              <ha-svg-icon .path=${K3}></ha-svg-icon>
              #${C.popup_id} · ${t}
            </span>
          </ha-tile-info>
        </ha-tile-container>
      </ha-card>
    `}_renderPreview(C){let H=this.hass,e=J1(C,C.entity??F2(C,H)[0]);this._previewZones??=new f1;let r=this._previewZones.update(e,H),M=b2(H,e,{entityId:e.entity,view:"root",children:[]});return o`
      <div class="surface" inert>
        <ha-dialog-header>
          <ha-icon-button
            slot="navigationIcon"
            .label=${H.localize("ui.common.close")}
            .path=${L2}
          ></ha-icon-button>
          ${y2(H,M,"title")}
        </ha-dialog-header>
        ${h2(e,r)}
      </div>
    `}};q=I(B9),f3=new WeakMap,g3=new WeakMap,O3=new WeakMap,b3=new WeakMap,m(q,4,"hass",P9,t1,f3),m(q,4,"layout",T9,t1,g3),m(q,4,"_config",k9,t1,O3),m(q,4,"_surface",w9,t1,b3),D(q,t1),l(t1,"styles",[g2,O2,f2,O`
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
    `]);customElements.get(V5)||(customElements.define(V5,t1),window.customCards=window.customCards??[],window.customCards.push({type:H5,name:u(void 0,"card.name"),description:u(void 0,"card.description"),preview:!1,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),window.customCards.push({type:j1,name:u(void 0,"state_card.name"),description:u(void 0,"state_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"},{type:C2,name:u(void 0,"controls_card.name"),description:u(void 0,"controls_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),console.info("%c MORE-INFO-POPUP-CARD %c 0.10 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;"));export{t1 as MoreInfoPopupCard};
//# sourceMappingURL=more-info-popup-card.js.map
