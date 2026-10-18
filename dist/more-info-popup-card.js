var b4=Object.create;var g2=Object.defineProperty;var y4=Object.getOwnPropertyDescriptor;var C3=(L,V)=>(V=Symbol[L])?V:Symbol.for("Symbol."+L),l1=L=>{throw TypeError(L)};var H3=(L,V,C)=>V in L?g2(L,V,{enumerable:!0,configurable:!0,writable:!0,value:C}):L[V]=C;var X5=(L,V)=>g2(L,"name",{value:V,configurable:!0});var K=L=>[,,,b4(L?.[C3("metadata")]??null)],V3=["class","method","getter","setter","accessor","field","value","get","set"],g1=L=>L!==void 0&&typeof L!="function"?l1("Function expected"):L,_4=(L,V,C,H,e)=>({kind:V3[L],name:V,metadata:H,addInitializer:M=>C._?l1("Already initialized"):e.push(g1(M||null))}),F=(L,V)=>H3(V,C3("metadata"),L[3]),A=(L,V,C,H)=>{for(var e=0,M=L[V>>1],r=M&&M.length;e<r;e++)V&1?M[e].call(C):H=M[e].call(C,H);return H},v=(L,V,C,H,e,M)=>{var r,t,o,d,p,n=V&7,c=!!(V&8),s=!!(V&16),Z=n>3?L.length+1:n?c?1:2:0,T=V3[n+5],P=n>3&&(L[Z-1]=[]),Q=L[Z]||(L[Z]=[]),E=n&&(!s&&!c&&(e=e.prototype),n<5&&(n>3||!s)&&y4(n<4?e:{get[C](){return J5(this,M)},set[C](b){return j5(this,M,b)}},C));n?s&&n<4&&X5(M,(n>2?"set ":n>1?"get ":"")+C):X5(e,C);for(var r1=H.length-1;r1>=0;r1--)d=_4(n,C,o={},L[3],Q),n&&(d.static=c,d.private=s,p=d.access={has:s?b=>k4(e,b):b=>C in b},n^3&&(p.get=s?b=>(n^1?J5:w4)(b,e,n^4?M:E.get):b=>b[C]),n>2&&(p.set=s?(b,h1)=>j5(b,e,h1,n^4?M:E.set):(b,h1)=>b[C]=h1)),t=(0,H[r1])(n?n<4?s?M:E[T]:n>4?void 0:{get:E.get,set:E.set}:e,d),o._=1,n^4||t===void 0?g1(t)&&(n>4?P.unshift(t):n?s?M=t:E[T]=t:e=t):typeof t!="object"||t===null?l1("Object expected"):(g1(r=t.get)&&(E.get=r),g1(r=t.set)&&(E.set=r),g1(r=t.init)&&P.unshift(r));return n||F(L,e),E&&g2(e,C,E),s?n^4?M:E:e},m=(L,V,C)=>H3(L,typeof V!="symbol"?V+"":V,C),f2=(L,V,C)=>V.has(L)||l1("Cannot "+C),k4=(L,V)=>Object(V)!==V?l1('Cannot use the "in" operator on this value'):L.has(V),J5=(L,V,C)=>(f2(L,V,"read from private field"),C?C.call(L):V.get(L)),x=(L,V,C)=>V.has(L)?l1("Cannot add the same private member more than once"):V instanceof WeakSet?V.add(L):V.set(L,C),j5=(L,V,C,H)=>(f2(L,V,"write to private field"),H?H.call(L,C):V.set(L,C),C),w4=(L,V,C)=>(f2(L,V,"access private method"),C);var L3="M17 18H21V16H17V14L14 17L17 20V18M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var O2="M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var e3="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z";var G1="M6 14H9L5 18L1 14H4C4 11.3 5.7 6.6 11 6.1V8.1C7.6 8.6 6 11.9 6 14M20 14C20 11.3 18.3 6.6 13 6.1V8.1C16.4 8.7 18 11.9 18 14H15L19 18L23 14H20Z",M3="M13 8.1V6.1C18.3 6.6 20 11.4 20 14H23L20.1 16.9L17.2 14H18C18 11.9 16.4 8.6 13 8.1M7.8 7.1L2.4 1.7L1.1 3L6.3 8.2C4.7 10 4 12.4 4 14H1L5 18L9 14H6C6 12.7 6.6 11 7.9 9.7L20.9 22.7L22.2 21.4L9.3 8.7L7.8 7.1M11 6.1L9.5 6.4L11 7.8V6.1Z";var r3="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";var t3="M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z";var Q1="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var i3="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var K1="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var q1="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z";var Y1="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z";var o3="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",a3="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z",A3="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z";var n3="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74";var d3="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var p3="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z";var X1="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z";var m3="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";var l3="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";var f1="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";var s3="M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z";var v3="M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z";var x3="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z";var b2="M15 13L11 17V14H2V12H11V9L15 13M5 20V16H7V18H17V10.19L12 5.69L7.21 10H4.22L12 3L22 12H19V20H5Z";var c3="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";var u3="M12,2C9.76,2 7.78,3.05 6.5,4.68L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z";var Z3="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var S3="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z";var h3="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z";var g3="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z";var f3="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";var O3="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";var b3="M19,13H5V11H19V13Z";var y3="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z";var _3="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z";var y2="M14,19H18V5H14M6,19H10V5H6V19Z";var k3="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var J1="M8,5.14V19.14L19,12.14L8,5.14Z";var w3="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5";var T3="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var _2="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z";var o1="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var P3="M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z";var s1="M18,18H6V6H18V18Z";var B3="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z";var E3="M22.08,11.04H20.08V4H13.05V2H11.04V4H4V11.04H2V13.05H4V20.08H11.04V22.08H13.05V20.08H20.08V13.05H22.08V11.04M18.07,18.07H13.05V16.06H11.04V18.07H6V13.05H8.03V11.04H6V6H11.04V8.03H13.05V6H18.07V11.04H16.06V13.05H18.07V18.07M13.05,12.05A1,1 0 0,1 12.05,13.05C11.5,13.05 11.04,12.6 11.04,12.05C11.04,11.5 11.5,11.04 12.05,11.04C12.6,11.04 13.05,11.5 13.05,12.05Z";var R3="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z";var F3="M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";var D3="M18,11H14.82C14.4,9.84 13.3,9 12,9C10.7,9 9.6,9.84 9.18,11H6C5.67,11 4,10.9 4,9V8C4,6.17 5.54,6 6,6H16.18C16.6,7.16 17.7,8 19,8A3,3 0 0,0 22,5A3,3 0 0,0 19,2C17.7,2 16.6,2.84 16.18,4H6C4.39,4 2,5.06 2,8V9C2,11.94 4.39,13 6,13H9.18C9.6,14.16 10.7,15 12,15C13.3,15 14.4,14.16 14.82,13H18C18.33,13 20,13.1 20,15V16C20,17.83 18.46,18 18,18H7.82C7.4,16.84 6.3,16 5,16A3,3 0 0,0 2,19A3,3 0 0,0 5,22C6.3,22 7.4,21.16 7.82,20H18C19.61,20 22,18.93 22,16V15C22,12.07 19.61,11 18,11M19,4A1,1 0 0,1 20,5A1,1 0 0,1 19,6A1,1 0 0,1 18,5A1,1 0 0,1 19,4M5,20A1,1 0 0,1 4,19A1,1 0 0,1 5,18A1,1 0 0,1 6,19A1,1 0 0,1 5,20Z";var v1="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";var $3="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var N3="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var I3="M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z";var j1=globalThis,C2=j1.ShadowRoot&&(j1.ShadyCSS===void 0||j1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k2=Symbol(),W3=new WeakMap,O1=class{constructor(V,C,H){if(this._$cssResult$=!0,H!==k2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=V,this.t=C}get styleSheet(){let V=this.o,C=this.t;if(C2&&V===void 0){let H=C!==void 0&&C.length===1;H&&(V=W3.get(C)),V===void 0&&((this.o=V=new CSSStyleSheet).replaceSync(this.cssText),H&&W3.set(C,V))}return V}toString(){return this.cssText}},U3=L=>new O1(typeof L=="string"?L:L+"",void 0,k2),y=(L,...V)=>{let C=L.length===1?L[0]:V.reduce((H,e,M)=>H+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+L[M+1],L[0]);return new O1(C,L,k2)},z3=(L,V)=>{if(C2)L.adoptedStyleSheets=V.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of V){let H=document.createElement("style"),e=j1.litNonce;e!==void 0&&H.setAttribute("nonce",e),H.textContent=C.cssText,L.appendChild(H)}},w2=C2?L=>L:L=>L instanceof CSSStyleSheet?(V=>{let C="";for(let H of V.cssRules)C+=H.cssText;return U3(C)})(L):L;var{is:T4,defineProperty:P4,getOwnPropertyDescriptor:B4,getOwnPropertyNames:E4,getOwnPropertySymbols:R4,getPrototypeOf:F4}=Object,H2=globalThis,G3=H2.trustedTypes,D4=G3?G3.emptyScript:"",$4=H2.reactiveElementPolyfillSupport,b1=(L,V)=>L,y1={toAttribute(L,V){switch(V){case Boolean:L=L?D4:null;break;case Object:case Array:L=L==null?L:JSON.stringify(L)}return L},fromAttribute(L,V){let C=L;switch(V){case Boolean:C=L!==null;break;case Number:C=L===null?null:Number(L);break;case Object:case Array:try{C=JSON.parse(L)}catch{C=null}}return C}},V2=(L,V)=>!T4(L,V),Q3={attribute:!0,type:String,converter:y1,reflect:!1,useDefault:!1,hasChanged:V2};Symbol.metadata??=Symbol("metadata"),H2.litPropertyMetadata??=new WeakMap;var J=class extends HTMLElement{static addInitializer(V){this._$Ei(),(this.l??=[]).push(V)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(V,C=Q3){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(V)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(V,C),!C.noAccessor){let H=Symbol(),e=this.getPropertyDescriptor(V,H,C);e!==void 0&&P4(this.prototype,V,e)}}static getPropertyDescriptor(V,C,H){let{get:e,set:M}=B4(this.prototype,V)??{get(){return this[C]},set(r){this[C]=r}};return{get:e,set(r){let t=e?.call(this);M?.call(this,r),this.requestUpdate(V,t,H)},configurable:!0,enumerable:!0}}static getPropertyOptions(V){return this.elementProperties.get(V)??Q3}static _$Ei(){if(this.hasOwnProperty(b1("elementProperties")))return;let V=F4(this);V.finalize(),V.l!==void 0&&(this.l=[...V.l]),this.elementProperties=new Map(V.elementProperties)}static finalize(){if(this.hasOwnProperty(b1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b1("properties"))){let C=this.properties,H=[...E4(C),...R4(C)];for(let e of H)this.createProperty(e,C[e])}let V=this[Symbol.metadata];if(V!==null){let C=litPropertyMetadata.get(V);if(C!==void 0)for(let[H,e]of C)this.elementProperties.set(H,e)}this._$Eh=new Map;for(let[C,H]of this.elementProperties){let e=this._$Eu(C,H);e!==void 0&&this._$Eh.set(e,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(V){let C=[];if(Array.isArray(V)){let H=new Set(V.flat(1/0).reverse());for(let e of H)C.unshift(w2(e))}else V!==void 0&&C.push(w2(V));return C}static _$Eu(V,C){let H=C.attribute;return H===!1?void 0:typeof H=="string"?H:typeof V=="string"?V.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(V=>this.enableUpdating=V),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(V=>V(this))}addController(V){(this._$EO??=new Set).add(V),this.renderRoot!==void 0&&this.isConnected&&V.hostConnected?.()}removeController(V){this._$EO?.delete(V)}_$E_(){let V=new Map,C=this.constructor.elementProperties;for(let H of C.keys())this.hasOwnProperty(H)&&(V.set(H,this[H]),delete this[H]);V.size>0&&(this._$Ep=V)}createRenderRoot(){let V=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return z3(V,this.constructor.elementStyles),V}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(V=>V.hostConnected?.())}enableUpdating(V){}disconnectedCallback(){this._$EO?.forEach(V=>V.hostDisconnected?.())}attributeChangedCallback(V,C,H){this._$AK(V,H)}_$ET(V,C){let H=this.constructor.elementProperties.get(V),e=this.constructor._$Eu(V,H);if(e!==void 0&&H.reflect===!0){let M=(H.converter?.toAttribute!==void 0?H.converter:y1).toAttribute(C,H.type);this._$Em=V,M==null?this.removeAttribute(e):this.setAttribute(e,M),this._$Em=null}}_$AK(V,C){let H=this.constructor,e=H._$Eh.get(V);if(e!==void 0&&this._$Em!==e){let M=H.getPropertyOptions(e),r=typeof M.converter=="function"?{fromAttribute:M.converter}:M.converter?.fromAttribute!==void 0?M.converter:y1;this._$Em=e;let t=r.fromAttribute(C,M.type);this[e]=t??this._$Ej?.get(e)??t,this._$Em=null}}requestUpdate(V,C,H,e=!1,M){if(V!==void 0){let r=this.constructor;if(e===!1&&(M=this[V]),H??=r.getPropertyOptions(V),!((H.hasChanged??V2)(M,C)||H.useDefault&&H.reflect&&M===this._$Ej?.get(V)&&!this.hasAttribute(r._$Eu(V,H))))return;this.C(V,C,H)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(V,C,{useDefault:H,reflect:e,wrapped:M},r){H&&!(this._$Ej??=new Map).has(V)&&(this._$Ej.set(V,r??C??this[V]),M!==!0||r!==void 0)||(this._$AL.has(V)||(this.hasUpdated||H||(C=void 0),this._$AL.set(V,C)),e===!0&&this._$Em!==V&&(this._$Eq??=new Set).add(V))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let V=this.scheduleUpdate();return V!=null&&await V,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,M]of this._$Ep)this[e]=M;this._$Ep=void 0}let H=this.constructor.elementProperties;if(H.size>0)for(let[e,M]of H){let{wrapped:r}=M,t=this[e];r!==!0||this._$AL.has(e)||t===void 0||this.C(e,void 0,M,t)}}let V=!1,C=this._$AL;try{V=this.shouldUpdate(C),V?(this.willUpdate(C),this._$EO?.forEach(H=>H.hostUpdate?.()),this.update(C)):this._$EM()}catch(H){throw V=!1,this._$EM(),H}V&&this._$AE(C)}willUpdate(V){}_$AE(V){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(V)),this.updated(V)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(V){return!0}update(V){this._$Eq&&=this._$Eq.forEach(C=>this._$ET(C,this[C])),this._$EM()}updated(V){}firstUpdated(V){}};J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[b1("elementProperties")]=new Map,J[b1("finalized")]=new Map,$4?.({ReactiveElement:J}),(H2.reactiveElementVersions??=[]).push("2.1.2");var P2=globalThis,K3=L=>L,L2=P2.trustedTypes,q3=L2?L2.createPolicy("lit-html",{createHTML:L=>L}):void 0,B2="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,E2="?"+j,N4=`<${E2}>`,n1=document,k1=()=>n1.createComment(""),w1=L=>L===null||typeof L!="object"&&typeof L!="function",R2=Array.isArray,H0=L=>R2(L)||typeof L?.[Symbol.iterator]=="function",T2=`[ 	
\f\r]`,_1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y3=/-->/g,X3=/>/g,a1=RegExp(`>|${T2}(?:([^\\s"'>=/]+)(${T2}*=${T2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J3=/'/g,j3=/"/g,V0=/^(?:script|style|textarea|title)$/i,F2=L=>(V,...C)=>({_$litType$:L,strings:V,values:C}),i=F2(1),U9=F2(2),z9=F2(3),q=Symbol.for("lit-noChange"),a=Symbol.for("lit-nothing"),C0=new WeakMap,A1=n1.createTreeWalker(n1,129);function L0(L,V){if(!R2(L)||!L.hasOwnProperty("raw"))throw Error("invalid template strings array");return q3!==void 0?q3.createHTML(V):V}var e0=(L,V)=>{let C=L.length-1,H=[],e,M=V===2?"<svg>":V===3?"<math>":"",r=_1;for(let t=0;t<C;t++){let o=L[t],d,p,n=-1,c=0;for(;c<o.length&&(r.lastIndex=c,p=r.exec(o),p!==null);)c=r.lastIndex,r===_1?p[1]==="!--"?r=Y3:p[1]!==void 0?r=X3:p[2]!==void 0?(V0.test(p[2])&&(e=RegExp("</"+p[2],"g")),r=a1):p[3]!==void 0&&(r=a1):r===a1?p[0]===">"?(r=e??_1,n=-1):p[1]===void 0?n=-2:(n=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?a1:p[3]==='"'?j3:J3):r===j3||r===J3?r=a1:r===Y3||r===X3?r=_1:(r=a1,e=void 0);let s=r===a1&&L[t+1].startsWith("/>")?" ":"";M+=r===_1?o+N4:n>=0?(H.push(d),o.slice(0,n)+B2+o.slice(n)+j+s):o+j+(n===-2?t:s)}return[L0(L,M+(L[C]||"<?>")+(V===2?"</svg>":V===3?"</math>":"")),H]},T1=class L{constructor({strings:V,_$litType$:C},H){let e;this.parts=[];let M=0,r=0,t=V.length-1,o=this.parts,[d,p]=e0(V,C);if(this.el=L.createElement(d,H),A1.currentNode=this.el.content,C===2||C===3){let n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(e=A1.nextNode())!==null&&o.length<t;){if(e.nodeType===1){if(e.hasAttributes())for(let n of e.getAttributeNames())if(n.endsWith(B2)){let c=p[r++],s=e.getAttribute(n).split(j),Z=/([.?@])?(.*)/.exec(c);o.push({type:1,index:M,name:Z[2],strings:s,ctor:Z[1]==="."?M2:Z[1]==="?"?r2:Z[1]==="@"?t2:p1}),e.removeAttribute(n)}else n.startsWith(j)&&(o.push({type:6,index:M}),e.removeAttribute(n));if(V0.test(e.tagName)){let n=e.textContent.split(j),c=n.length-1;if(c>0){e.textContent=L2?L2.emptyScript:"";for(let s=0;s<c;s++)e.append(n[s],k1()),A1.nextNode(),o.push({type:2,index:++M});e.append(n[c],k1())}}}else if(e.nodeType===8)if(e.data===E2)o.push({type:2,index:M});else{let n=-1;for(;(n=e.data.indexOf(j,n+1))!==-1;)o.push({type:7,index:M}),n+=j.length-1}M++}}static createElement(V,C){let H=n1.createElement("template");return H.innerHTML=V,H}};function d1(L,V,C=L,H){if(V===q)return V;let e=H!==void 0?C._$Co?.[H]:C._$Cl,M=w1(V)?void 0:V._$litDirective$;return e?.constructor!==M&&(e?._$AO?.(!1),M===void 0?e=void 0:(e=new M(L),e._$AT(L,C,H)),H!==void 0?(C._$Co??=[])[H]=e:C._$Cl=e),e!==void 0&&(V=d1(L,e._$AS(L,V.values),e,H)),V}var e2=class{constructor(V,C){this._$AV=[],this._$AN=void 0,this._$AD=V,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(V){let{el:{content:C},parts:H}=this._$AD,e=(V?.creationScope??n1).importNode(C,!0);A1.currentNode=e;let M=A1.nextNode(),r=0,t=0,o=H[0];for(;o!==void 0;){if(r===o.index){let d;o.type===2?d=new x1(M,M.nextSibling,this,V):o.type===1?d=new o.ctor(M,o.name,o.strings,this,V):o.type===6&&(d=new i2(M,this,V)),this._$AV.push(d),o=H[++t]}r!==o?.index&&(M=A1.nextNode(),r++)}return A1.currentNode=n1,e}p(V){let C=0;for(let H of this._$AV)H!==void 0&&(H.strings!==void 0?(H._$AI(V,H,C),C+=H.strings.length-2):H._$AI(V[C])),C++}},x1=class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(V,C,H,e){this.type=2,this._$AH=a,this._$AN=void 0,this._$AA=V,this._$AB=C,this._$AM=H,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let V=this._$AA.parentNode,C=this._$AM;return C!==void 0&&V?.nodeType===11&&(V=C.parentNode),V}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(V,C=this){V=d1(this,V,C),w1(V)?V===a||V==null||V===""?(this._$AH!==a&&this._$AR(),this._$AH=a):V!==this._$AH&&V!==q&&this._(V):V._$litType$!==void 0?this.$(V):V.nodeType!==void 0?this.T(V):H0(V)?this.k(V):this._(V)}O(V){return this._$AA.parentNode.insertBefore(V,this._$AB)}T(V){this._$AH!==V&&(this._$AR(),this._$AH=this.O(V))}_(V){this._$AH!==a&&w1(this._$AH)?this._$AA.nextSibling.data=V:this.T(n1.createTextNode(V)),this._$AH=V}$(V){let{values:C,_$litType$:H}=V,e=typeof H=="number"?this._$AC(V):(H.el===void 0&&(H.el=T1.createElement(L0(H.h,H.h[0]),this.options)),H);if(this._$AH?._$AD===e)this._$AH.p(C);else{let M=new e2(e,this),r=M.u(this.options);M.p(C),this.T(r),this._$AH=M}}_$AC(V){let C=C0.get(V.strings);return C===void 0&&C0.set(V.strings,C=new T1(V)),C}k(V){R2(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,H,e=0;for(let M of V)e===C.length?C.push(H=new L(this.O(k1()),this.O(k1()),this,this.options)):H=C[e],H._$AI(M),e++;e<C.length&&(this._$AR(H&&H._$AB.nextSibling,e),C.length=e)}_$AR(V=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);V!==this._$AB;){let H=K3(V).nextSibling;K3(V).remove(),V=H}}setConnected(V){this._$AM===void 0&&(this._$Cv=V,this._$AP?.(V))}},p1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(V,C,H,e,M){this.type=1,this._$AH=a,this._$AN=void 0,this.element=V,this.name=C,this._$AM=e,this.options=M,H.length>2||H[0]!==""||H[1]!==""?(this._$AH=Array(H.length-1).fill(new String),this.strings=H):this._$AH=a}_$AI(V,C=this,H,e){let M=this.strings,r=!1;if(M===void 0)V=d1(this,V,C,0),r=!w1(V)||V!==this._$AH&&V!==q,r&&(this._$AH=V);else{let t=V,o,d;for(V=M[0],o=0;o<M.length-1;o++)d=d1(this,t[H+o],C,o),d===q&&(d=this._$AH[o]),r||=!w1(d)||d!==this._$AH[o],d===a?V=a:V!==a&&(V+=(d??"")+M[o+1]),this._$AH[o]=d}r&&!e&&this.j(V)}j(V){V===a?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,V??"")}},M2=class extends p1{constructor(){super(...arguments),this.type=3}j(V){this.element[this.name]=V===a?void 0:V}},r2=class extends p1{constructor(){super(...arguments),this.type=4}j(V){this.element.toggleAttribute(this.name,!!V&&V!==a)}},t2=class extends p1{constructor(V,C,H,e,M){super(V,C,H,e,M),this.type=5}_$AI(V,C=this){if((V=d1(this,V,C,0)??a)===q)return;let H=this._$AH,e=V===a&&H!==a||V.capture!==H.capture||V.once!==H.once||V.passive!==H.passive,M=V!==a&&(H===a||e);e&&this.element.removeEventListener(this.name,this,H),M&&this.element.addEventListener(this.name,this,V),this._$AH=V}handleEvent(V){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,V):this._$AH.handleEvent(V)}},i2=class{constructor(V,C,H){this.element=V,this.type=6,this._$AN=void 0,this._$AM=C,this.options=H}get _$AU(){return this._$AM._$AU}_$AI(V){d1(this,V)}},M0={M:B2,P:j,A:E2,C:1,L:e0,R:e2,D:H0,V:d1,I:x1,H:p1,N:r2,U:t2,B:M2,F:i2},I4=P2.litHtmlPolyfillSupport;I4?.(T1,x1),(P2.litHtmlVersions??=[]).push("3.3.3");var r0=(L,V,C)=>{let H=C?.renderBefore??V,e=H._$litPart$;if(e===void 0){let M=C?.renderBefore??null;H._$litPart$=e=new x1(V.insertBefore(k1(),M),M,void 0,C??{})}return e._$AI(L),e};var D2=globalThis,k=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let V=super.createRenderRoot();return this.renderOptions.renderBefore??=V.firstChild,V}update(V){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(V),this._$Do=r0(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};k._$litElement$=!0,k.finalized=!0,D2.litElementHydrateSupport?.({LitElement:k});var W4=D2.litElementPolyfillSupport;W4?.({LitElement:k});(D2.litElementVersions??=[]).push("4.2.2");var U4={attribute:!0,type:String,converter:y1,reflect:!1,hasChanged:V2},z4=(L=U4,V,C)=>{let{kind:H,metadata:e}=C,M=globalThis.litPropertyMetadata.get(e);if(M===void 0&&globalThis.litPropertyMetadata.set(e,M=new Map),H==="setter"&&((L=Object.create(L)).wrapped=!0),M.set(C.name,L),H==="accessor"){let{name:r}=C;return{set(t){let o=V.get.call(this);V.set.call(this,t),this.requestUpdate(r,o,L,!0,t)},init(t){return t!==void 0&&this.C(r,void 0,L,t),t}}}if(H==="setter"){let{name:r}=C;return function(t){let o=this[r];V.call(this,t),this.requestUpdate(r,o,L,!0,t)}}throw Error("Unsupported decorator location: "+H)};function w(L){return(V,C)=>typeof C=="object"?z4(L,V,C):((H,e,M)=>{let r=e.hasOwnProperty(M);return e.constructor.createProperty(M,H),r?Object.getOwnPropertyDescriptor(e,M):void 0})(L,V,C)}function S(L){return w({...L,state:!0,attribute:!1})}var a2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c1=L=>(...V)=>({_$litDirective$:L,values:V}),t1=class{constructor(V){}get _$AU(){return this._$AM._$AU}_$AT(V,C,H){this._$Ct=V,this._$AM=C,this._$Ci=H}_$AS(V,C){return this.update(V,C)}update(V,C){return this.render(...C)}};var t0="important",G4=" !"+t0,D=c1(class extends t1{constructor(L){if(super(L),L.type!==a2.ATTRIBUTE||L.name!=="style"||L.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(L){return Object.keys(L).reduce((V,C)=>{let H=L[C];return H==null?V:V+`${C=C.includes("-")?C:C.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${H};`},"")}update(L,[V]){let{style:C}=L.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(V)),this.render(V);for(let H of this.ft)V[H]==null&&(this.ft.delete(H),H.includes("-")?C.removeProperty(H):C[H]=null);for(let H in V){let e=V[H];if(e!=null){this.ft.add(H);let M=typeof e=="string"&&e.endsWith(G4);H.includes("-")||M?C.setProperty(H,M?e.slice(0,-11):e,M?t0:""):C[H]=e}}return q}});var N2="more-info-popup-card",I2="more-info-popup-card",C1="more-info-popup-dialog",P1="more-info-popup-card-editor",B1={breadcrumb:"auto",mode:"auto",width:"medium",height:"auto",column_span:1,show_header_actions:!0,replace_more_info:!1,nested_more_info:"inline",dismissable:!0,auto_close:0,keep_alive:!1},Q4=["auto","dialog","bottom_sheet"],K4=["small","medium","large","full","custom"],q4=["auto","custom"],Y4=["inline","dialog"],X4=/^[a-z0-9][a-z0-9_-]*$/,J4=/^\d+(\.\d+)?(px|%|vw|vh|dvh|svh|lvh|em|rem)$/,i0=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^[_-]+|[_-]+$/g,"").slice(0,48),A2=(L,V,C)=>{if(V!==void 0&&!C.includes(V))throw new Error(`"${L}" must be one of: ${C.join(", ")}`)},$2=(L,V)=>{if(V!==void 0&&V!==""&&!J4.test(String(V)))throw new Error(`"${L}" must be a CSS length such as 720px or 80vh`)},E1=L=>{if(!L||typeof L!="object")throw new Error("Invalid configuration");let V=L;if(!V.popup_id||typeof V.popup_id!="string")throw new Error('"popup_id" is required');if(!X4.test(V.popup_id))throw new Error('"popup_id" may only contain lowercase letters, digits, "_" and "-"');if(V.entity!==void 0&&(typeof V.entity!="string"||!V.entity.includes(".")))throw new Error('"entity" must be an entity ID');if(V.cards!==void 0&&!Array.isArray(V.cards))throw new Error('"cards" must be a list');if(A2("mode",V.mode,Q4),A2("width",V.width,K4),A2("height",V.height,q4),A2("nested_more_info",V.nested_more_info,Y4),$2("custom_width",V.custom_width),$2("min_height",V.min_height),$2("max_height",V.max_height),V.column_span!==void 0&&(!Number.isInteger(V.column_span)||V.column_span<1||V.column_span>4))throw new Error('"column_span" must be an integer between 1 and 4');if(V.auto_close!==void 0&&(typeof V.auto_close!="number"||V.auto_close<0))throw new Error('"auto_close" must be a positive number of seconds');return V},n2=L=>({...B1,...L,cards:L.cards??[]}),o0=L=>L.width==="custom"?"medium":L.width==="medium"&&L.column_span>1?"large":L.width,a0=L=>{let V={};return L.width==="custom"&&L.custom_width&&(V["--ha-dialog-width-md"]=L.custom_width,V["--ha-bottom-sheet-max-width"]=L.custom_width),L.height==="custom"&&(L.min_height&&(V["--ha-dialog-min-height"]=L.min_height,V["--ha-bottom-sheet-height"]=L.min_height),L.max_height&&(V["--ha-dialog-max-height"]=L.max_height,V["--ha-bottom-sheet-max-height"]=L.max_height)),V};var l=L=>L.substring(0,L.indexOf(".")),d2=L=>L.substring(L.indexOf(".")+1),n0=["scene","automation"],d0=["script"],p0=["camera","configurator"],j4=["counter","input_number","number","proximity","sensor"],C9=["alarm_control_panel","automation","camera","climate","configurator","conversation","counter","cover","date","datetime","fan","group","humidifier","image","input_boolean","input_datetime","lawn_mower","light","lock","media_player","person","remote","script","scene","siren","sun","switch","time","timer","update","vacuum","valve","water_heater","weather"],R1=L=>!!L.user?.is_admin,m0=(L,V)=>L.config.components.includes(V),H9=(L,V)=>m0(L,"history")&&!p0.includes(l(V)),V9=(L,V)=>{if(!m0(L,"logbook")||!L.states[V])return!1;let H=l(V);return!(p0.includes(H)||j4.includes(H))},l0=(L,V,C)=>(!C||C9.includes(l(V)))&&(H9(L,V)||V9(L,V)),W2=L=>R1(L)||!!L.auth.external?.config.hasEntityAddTo,U2=(L,V)=>L.entities[V]?.device_id??null,s0=(L,V)=>(V&&L.devices[V]?.entry_type)==="service"?"service":"device",v0=L=>{if(!L)return!1;let V=l(L.entity_id);return n0.includes(V)&&L.attributes.id||d0.includes(V)?!0:V==="person"&&L.attributes.editable!=="false"},x0=(L,V)=>{let C=l(L.entity_id),H=L.entity_id;return(n0.includes(C)||C==="person")&&(H=L.attributes.id),d0.includes(C)&&(H=V),H?`/config/${C}/edit/${H}`:void 0},H1=L=>L.attributes.friendly_name??L.entity_id.substring(L.entity_id.indexOf(".")+1),A0=(L,V)=>{let C=V?L.devices[V]:void 0;return C&&(C.name_by_user||C.name)?.trim()||void 0},z2=(L,V)=>{let C=L.states[V],H=L.entities[V];if(!H)return[C?H1(C):V];let e=H.device_id?L.devices[H.device_id]:void 0,M=H.area_id||e?.area_id,r=M?L.areas[M]?.name:void 0,t=c=>C&&L.formatEntityName&&L.formatEntityName(C,{type:c})||void 0,o=A0(L,H.device_id),d=t("entity")??(C?H1(C):void 0);d&&o&&d===o&&(d=void 0);let p=H.next_name_part==="device"||!d,n=p&&e?.next_name_part==="parent_device"?A0(L,e.parent_device_id):void 0;return[r,n,p?o:void 0,d].filter(c=>!!c)},c0=L=>!!L.translationMetadata?.translations?.[L.language]?.isRTL;var _=(L,V,C,H={})=>{let e=new CustomEvent(V,{bubbles:H.bubbles??!0,cancelable:H.cancelable??!1,composed:H.composed??!0,detail:C??{}});return L.dispatchEvent(e),e};var L9=["ha-adaptive-dialog","ha-dialog","ha-bottom-sheet","ha-dialog-header","ha-icon-button","ha-icon-button-prev","ha-dropdown","ha-dropdown-item","hui-section"],h0={info:"ha-more-info-info",history:"ha-more-info-history-and-logbook",settings:"ha-more-info-settings",related:"ha-more-info-related",details:"ha-more-info-details",add_to:"ha-more-info-add-to"},D1=L=>customElements.get(L)!==void 0,V1=async(L,V=5e3)=>{if(D1(L))return!0;let C,H=await Promise.race([customElements.whenDefined(L).then(()=>!0),new Promise(e=>{C=setTimeout(()=>e(!1),V)})]);return clearTimeout(C),H},u0,g0=()=>(u0??=(async()=>{await V1("ha-more-info-dialog");let L=[];for(let V of L9)await V1(V,2e3)||L.push(V);return L.length&&console.warn("[more-info-popup-card] Missing Home Assistant elements:",L.join(", ")),L})(),u0),Z0=async L=>{let V=customElements.get(L);try{await V?.getConfigElement?.()}catch{}},S0,f0=()=>(S0??=(async()=>{await Promise.all([V1("hui-tile-card"),V1("hui-grid-card")]),await Promise.all([Z0("hui-tile-card"),Z0("hui-grid-card")]),await Promise.all([V1("ha-form"),V1("hui-card-picker"),V1("hui-card-element-editor")])})(),S0),e9=L=>{let V=L?.match(/^(\d{4})\.(\d{1,2})/);return V?[Number(V[1]),Number(V[2])]:void 0},F1=[2026,10],O0=L=>{let V=e9(L);if(!V)return!0;let[C,H]=V;return C>F1[0]||C===F1[0]&&H>=F1[1]},G2=(L,V,C,H)=>{let e=customElements.get(V)?.prototype?.[C];if(typeof e!="function")return console.warn("[more-info-popup-card] Missing",`${V}.${C}`),!1;let M=Object.assign(document.createElement("span"),H);M.hidden=!0,L.appendChild(M);try{e.call(M)}finally{M.remove()}return!0};var b0=y`
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
`,y0=y`
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
`,_0=y`
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
`,k0=y`
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
`,p2=y`
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
`,m2=y`
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
`;var Q2={"card.name":"More-info popup","card.description":"A container shown as a native more-info popup, with a sections-style grid of cards inside.","card.cards_count":"{count} cards","card.cards_count_one":"1 card","card.hidden_hint":"Hidden on the dashboard \xB7 opens with #{id}","card.missing_elements":"This Home Assistant version is missing elements the popup needs. Check the browser console.","card.unsupported_version":"More-info popup card requires Home Assistant {version} or newer.","dialog.entity_controls":"Entity controls","editor.tab.cards":"Cards","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Appearance","editor.section.behavior":"Behavior","editor.popup_id":"Popup ID","editor.popup_id_helper":"Open it with a Navigate action to #{id}","editor.entity":"Entity","editor.entity_helper":"Optional. Enables the history, settings and menu buttons of the native header.","editor.name":"Title","editor.icon":"Icon","editor.breadcrumb":"Breadcrumb","editor.breadcrumb_helper":"Text above the title. Type your own text or pick an option.","editor.breadcrumb.auto":"Area and device (automatic)","editor.breadcrumb.none":"None","editor.mode":"Presentation","editor.mode.auto":"Automatic (like Home Assistant)","editor.mode.dialog":"Centered dialog","editor.mode.bottom_sheet":"Bottom sheet","editor.width":"Width","editor.width.small":"Small","editor.width.medium":"Medium (default)","editor.width.large":"Large","editor.width.full":"Full width","editor.width.custom":"Custom","editor.custom_width":"Custom width","editor.height":"Height","editor.height.auto":"Fit content","editor.height.custom":"Custom","editor.min_height":"Minimum height","editor.max_height":"Maximum height","editor.length_helper":"CSS length, for example 720px, 80vh or 90%","editor.column_span":"Grid width (sections)","editor.column_span_helper":"1 = 12 columns like a dashboard section; 2 = 24 columns.","editor.show_header_actions":"Show history, settings and menu","editor.replace_more_info":"Replace the entity's more-info","editor.replace_more_info_helper":"Opening the entity from any card on this view shows this popup instead.","editor.nested_more_info":"Entities opened from inside the popup","editor.nested_more_info.inline":"Navigate inside the popup (like Home Assistant)","editor.nested_more_info.dialog":"Open a separate dialog","editor.dismissable":"Close with Esc, outside click or swipe","editor.auto_close":"Close automatically after inactivity","editor.keep_alive":"Keep cards loaded while closed (faster reopen)","editor.test_popup":"Test popup","editor.add_card":"Add card","editor.edit_card":"Edit card","editor.back":"Back","editor.empty":"This popup has no cards yet.","editor.undo":"Undo","editor.card_deleted":"Card deleted","editor.popup_id_invalid":'Use lowercase letters, digits, "_" and "-" only.',"state_card.name":"More-info state","state_card.description":"State header and the big control of a native more-info dialog.","controls_card.name":"More-info controls","controls_card.description":"Row of more-info chips: selects, toggles, numbers and actions.","controls.empty":"Add controls in the editor.","controls.entity":"Entity","controls.control":"Main control","controls.control.auto":"Automatic (like Home Assistant)","controls.control.none":"None","controls.control.toggle":"Toggle","controls.control.brightness":"Brightness slider","controls.control.fan_speed":"Fan speed","controls.control.position":"Cover position","controls.control.tilt":"Cover tilt","controls.control.cover_toggle":"Cover toggle","controls.control.cover_buttons":"Cover buttons","controls.control.valve_position":"Valve position","controls.control.valve_toggle":"Valve toggle","controls.control.valve_buttons":"Valve buttons","controls.control.lock":"Lock","controls.control.alarm_modes":"Alarm modes","controls.control.temperature":"Thermostat","controls.control.climate_humidity":"Climate humidity","controls.control.humidity":"Humidifier","controls.control.water_heater":"Water heater","controls.control.vacuum_status":"Vacuum status","controls.control.lawn_mower_status":"Lawn mower status","controls.control.media_player":"Media player","controls.control.more_info":"Native more-info content","controls.control.script":"Script (run / cancel)","controls.control.press":"Press button","controls.control.trigger":"Trigger (momentary switch)","controls.show_state":"Show state","controls.show_last_changed":"Show last changed","controls.state_override":"State text","controls.appearance":"Appearance","controls.appearance.plain":"Plain (like more-info)","controls.appearance.card":"Card","controls.controls":"Controls","controls.type":"Type","controls.type_helper":"Automatic if empty: select for select entities or attributes, toggle, number or action.","controls.type.select":"Select","controls.type.toggle":"Toggle","controls.type.number":"Number","controls.type.button":"Button (icon)","controls.type.action":"Action","controls.attribute":"Attribute","controls.attribute_helper":"Options shown in the select (effect, preset mode, fan speed\u2026).","controls.attribute.state":"State (on / off)","controls.attribute.effect":"Effect","controls.attribute.preset_mode":"Preset mode","controls.attribute.fan_mode":"Fan mode","controls.attribute.swing_mode":"Swing mode","controls.attribute.swing_horizontal_mode":"Horizontal swing mode","controls.attribute.hvac_mode":"HVAC mode","controls.attribute.fan_speed":"Fan speed (vacuum)","controls.attribute.mode":"Mode","controls.attribute.direction":"Direction","controls.attribute.oscillating":"Oscillating","controls.attribute.operation_mode":"Operation mode","controls.attribute.away_mode":"Away mode","controls.attribute.source":"Source","controls.attribute.sound_mode":"Sound mode","controls.name":"Name","controls.icon":"Icon","controls.options":"Options","controls.options_helper":"Optional: which options to show and in which order.","controls.value":"Secondary text","controls.value_helper":"For actions; defaults to the entity state.","controls.tap_action":"Tap action","controls.show_arrow":"Show arrow","controls.perform_action":"Custom action","controls.perform_action_helper":"domain.action that receives the value, e.g. light.turn_on","controls.data_key":"Value field","controls.data_key_helper":"Field of the custom action that receives the value, e.g. effect","controls.min":"Minimum","controls.max":"Maximum","controls.step":"Step","controls.wrap":"Wrap on phones","controls.wrap_helper":"Chips go to new rows instead of scrolling sideways (Home Assistant scrolls)."};var w0={"card.name":"Popup more-info","card.description":"Un contenedor que se muestra como el popup more-info nativo, con una rejilla de tarjetas como una secci\xF3n.","card.cards_count":"{count} tarjetas","card.cards_count_one":"1 tarjeta","card.hidden_hint":"Oculta en el dashboard \xB7 se abre con #{id}","card.missing_elements":"A esta versi\xF3n de Home Assistant le faltan elementos que el popup necesita. Revisa la consola del navegador.","card.unsupported_version":"More-info popup card requiere Home Assistant {version} o superior.","dialog.entity_controls":"Controles de la entidad","editor.tab.cards":"Tarjetas","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Apariencia","editor.section.behavior":"Comportamiento","editor.popup_id":"ID del popup","editor.popup_id_helper":"\xC1brelo con una acci\xF3n Navegar a #{id}","editor.entity":"Entidad","editor.entity_helper":"Opcional. Habilita los botones de historial, ajustes y men\xFA de la cabecera nativa.","editor.name":"T\xEDtulo","editor.icon":"Icono","editor.breadcrumb":"Ruta","editor.breadcrumb_helper":"Texto sobre el t\xEDtulo. Escribe el tuyo o elige una opci\xF3n.","editor.breadcrumb.auto":"\xC1rea y dispositivo (autom\xE1tico)","editor.breadcrumb.none":"Ninguna","editor.mode":"Presentaci\xF3n","editor.mode.auto":"Autom\xE1tica (como Home Assistant)","editor.mode.dialog":"Di\xE1logo centrado","editor.mode.bottom_sheet":"Hoja inferior deslizante","editor.width":"Ancho","editor.width.small":"Peque\xF1o","editor.width.medium":"Mediano (por defecto)","editor.width.large":"Grande","editor.width.full":"Ancho completo","editor.width.custom":"Personalizado","editor.custom_width":"Ancho personalizado","editor.height":"Alto","editor.height.auto":"Ajustar al contenido","editor.height.custom":"Personalizado","editor.min_height":"Alto m\xEDnimo","editor.max_height":"Alto m\xE1ximo","editor.length_helper":"Longitud CSS, por ejemplo 720px, 80vh o 90%","editor.column_span":"Ancho de la rejilla (secciones)","editor.column_span_helper":"1 = 12 columnas como una secci\xF3n del dashboard; 2 = 24 columnas.","editor.show_header_actions":"Mostrar historial, ajustes y men\xFA","editor.replace_more_info":"Reemplazar el more-info de la entidad","editor.replace_more_info_helper":"Al abrir la entidad desde cualquier tarjeta de esta vista se muestra este popup.","editor.nested_more_info":"Entidades abiertas desde dentro del popup","editor.nested_more_info.inline":"Navegar dentro del popup (como Home Assistant)","editor.nested_more_info.dialog":"Abrir un di\xE1logo aparte","editor.dismissable":"Cerrar con Esc, clic fuera o deslizando","editor.auto_close":"Cerrar autom\xE1ticamente tras inactividad","editor.keep_alive":"Mantener las tarjetas cargadas al cerrar (reapertura m\xE1s r\xE1pida)","editor.test_popup":"Probar popup","editor.add_card":"A\xF1adir tarjeta","editor.edit_card":"Editar tarjeta","editor.back":"Volver","editor.empty":"Este popup a\xFAn no tiene tarjetas.","editor.undo":"Deshacer","editor.card_deleted":"Tarjeta eliminada","editor.popup_id_invalid":'Usa solo min\xFAsculas, n\xFAmeros, "_" y "-".',"state_card.name":"Estado more-info","state_card.description":"Cabecera de estado y control grande de un more-info nativo.","controls_card.name":"Controles more-info","controls_card.description":"Fila de chips del more-info: selectores, interruptores, n\xFAmeros y acciones.","controls.empty":"A\xF1ade controles en el editor.","controls.entity":"Entidad","controls.control":"Control principal","controls.control.auto":"Autom\xE1tico (como Home Assistant)","controls.control.none":"Ninguno","controls.control.toggle":"Interruptor","controls.control.brightness":"Control de brillo","controls.control.fan_speed":"Velocidad del ventilador","controls.control.position":"Posici\xF3n de la persiana","controls.control.tilt":"Inclinaci\xF3n de la persiana","controls.control.cover_toggle":"Interruptor de persiana","controls.control.cover_buttons":"Botones de persiana","controls.control.valve_position":"Posici\xF3n de la v\xE1lvula","controls.control.valve_toggle":"Interruptor de v\xE1lvula","controls.control.valve_buttons":"Botones de v\xE1lvula","controls.control.lock":"Cerradura","controls.control.alarm_modes":"Modos de alarma","controls.control.temperature":"Termostato","controls.control.climate_humidity":"Humedad del clima","controls.control.humidity":"Humidificador","controls.control.water_heater":"Calentador de agua","controls.control.vacuum_status":"Estado de la aspiradora","controls.control.lawn_mower_status":"Estado del cortac\xE9sped","controls.control.media_player":"Reproductor multimedia","controls.control.more_info":"Contenido nativo de more-info","controls.control.script":"Script (ejecutar / cancelar)","controls.control.press":"Bot\xF3n de pulsar","controls.control.trigger":"Disparador (interruptor moment\xE1neo)","controls.show_state":"Mostrar estado","controls.show_last_changed":"Mostrar \xFAltimo cambio","controls.state_override":"Texto del estado","controls.appearance":"Apariencia","controls.appearance.plain":"Sin marco (como more-info)","controls.appearance.card":"Tarjeta","controls.controls":"Controles","controls.type":"Tipo","controls.type_helper":"Autom\xE1tico si se deja vac\xEDo: selector para entidades select o atributos, interruptor, n\xFAmero o acci\xF3n.","controls.type.select":"Selector","controls.type.toggle":"Interruptor","controls.type.number":"N\xFAmero","controls.type.button":"Bot\xF3n (icono)","controls.type.action":"Acci\xF3n","controls.attribute":"Atributo","controls.attribute_helper":"Opciones del selector (efecto, modo predefinido, velocidad\u2026).","controls.attribute.state":"Estado (encendido / apagado)","controls.attribute.effect":"Efecto","controls.attribute.preset_mode":"Modo predefinido","controls.attribute.fan_mode":"Modo del ventilador","controls.attribute.swing_mode":"Oscilaci\xF3n","controls.attribute.swing_horizontal_mode":"Oscilaci\xF3n horizontal","controls.attribute.hvac_mode":"Modo HVAC","controls.attribute.fan_speed":"Potencia de succi\xF3n (aspiradora)","controls.attribute.mode":"Modo","controls.attribute.direction":"Direcci\xF3n","controls.attribute.oscillating":"Oscilaci\xF3n (s\xED / no)","controls.attribute.operation_mode":"Modo de funcionamiento","controls.attribute.away_mode":"Modo ausente","controls.attribute.source":"Fuente","controls.attribute.sound_mode":"Modo de sonido","controls.name":"Nombre","controls.icon":"Icono","controls.options":"Opciones","controls.options_helper":"Opcional: qu\xE9 opciones mostrar y en qu\xE9 orden.","controls.value":"Texto secundario","controls.value_helper":"Para acciones; por defecto, el estado de la entidad.","controls.tap_action":"Acci\xF3n al pulsar","controls.show_arrow":"Mostrar flecha","controls.perform_action":"Acci\xF3n personalizada","controls.perform_action_helper":"dominio.acci\xF3n que recibe el valor, p. ej. light.turn_on","controls.data_key":"Campo del valor","controls.data_key_helper":"Campo de la acci\xF3n personalizada que recibe el valor, p. ej. effect","controls.min":"M\xEDnimo","controls.max":"M\xE1ximo","controls.step":"Paso","controls.wrap":"Saltar de l\xEDnea en m\xF3vil","controls.wrap_helper":"Los chips bajan de l\xEDnea en lugar de desplazarse de lado (Home Assistant los desplaza)."};var T0={en:Q2,es:w0},u=(L,V,C)=>{let H=L?.language??(typeof document<"u"&&document.documentElement.lang||"en"),e=H.split("-")[0],M=T0[H]?.[V]??T0[e]?.[V]??Q2[V];if(C)for(let[r,t]of Object.entries(C))M=M.replace(`{${r}}`,String(t));return M};var Y=c1(class extends t1{constructor(L){if(super(L),L.type!==a2.ATTRIBUTE||L.name!=="class"||L.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(L){return" "+Object.keys(L).filter(V=>L[V]).join(" ")+" "}update(L,[V]){if(this.st===void 0){this.st=new Set,L.strings!==void 0&&(this.nt=new Set(L.strings.join(" ").split(/\s/).filter(H=>H!=="")));for(let H in V)V[H]&&!this.nt?.has(H)&&this.st.add(H);return this.render(V)}let C=L.element.classList;for(let H of this.st)H in V||(C.remove(H),this.st.delete(H));for(let H in V){let e=!!V[H];e===this.st.has(H)||this.nt?.has(H)||(e?(C.add(H),this.st.add(H)):(C.remove(H),this.st.delete(H)))}return q}});var{I:V8}=M0;var M9={},P0=(L,V=M9)=>L._$AH=V;var B0=c1(class extends t1{constructor(){super(...arguments),this.key=a}render(L,V){return this.key=L,V}update(L,[V,C]){return V!==this.key&&(P0(L),this.key=V),C}});var K2=(L,V)=>{_(L,"hass-action",{config:{tap_action:{action:"navigate",navigation_path:V}},action:"tap"})};var r9=(L,V)=>{let C=V.entity?z2(L,V.entity):[],H=V.name??C[C.length-1]??"",e=[];return V.breadcrumb==="auto"?e=C.slice(0,-1):V.breadcrumb!=="none"&&V.breadcrumb&&(e=[V.breadcrumb]),[...e,H]},t9=(L,V)=>{let C=V.children[V.children.length-1];switch(V.view){case"details":return L.localize("ui.dialogs.more_info_control.details");case"related":return L.localize("ui.dialogs.more_info_control.related");case"add_to":return L.localize("ui.dialogs.more_info_control.add_to.item");case"settings":return C?.viewTitle||L.localize("ui.dialogs.more_info_control.settings");default:return C?.viewTitle}},l2=(L,V,C)=>{let H=C.entityId&&C.entityId!==V.entity?z2(L,C.entityId):r9(L,V),e=C.view==="root"&&!C.children.length?void 0:t9(L,C),M=e?H:H.slice(0,-1);return{title:e??H[H.length-1]??"",breadcrumb:M.filter(Boolean),breadcrumbClickable:!!C.entityId&&R1(L)&&(C.view!=="root"||V.breadcrumb==="auto")}},s2=(L,V,C,H,e)=>{let M=c0(L)?" \u25C2 ":" \u25B8 ",r=V.breadcrumb.join(M);return i`
    <span slot=${C} class="title" @click=${H}>
      ${V.breadcrumb.length?V.breadcrumbClickable&&e?i`<button class="breadcrumb" @click=${e}>
                ${r}
              </button>`:i`<p class="breadcrumb">${r}</p>`:a}
      <p class="main">${V.title}</p>
    </span>
  `};var E0,q2=()=>E0,Y2=L=>{E0=L};var u1=async(L,V)=>{if(V.every(D1))return!0;try{(await window.loadCardHelpers?.())?.importMoreInfoControl?.(L)}catch(H){console.warn("[more-info-popup-card] Could not load",L,H)}return(await Promise.all(V.map(H=>V1(H,8e3)))).every(Boolean)};var R0="more-info-popup-trigger-control",i9=["automation","script"],X2=(L,V)=>{if(!i9.includes(L))return V?"var(--primary-color)":"var(--disabled-color)";let[C,H]=V?["on","active"]:["off","inactive"];return`var(--state-${L}-${C}-color, var(--state-${L}-${H}-color, var(--state-${H}-color)))`},U0=["queued","parallel"],o9=L=>L.state==="off"||L.attributes.mode==="restart"||L.state==="on"&&U0.includes(L.attributes.mode)&&L.attributes.current<L.attributes.max,a9=1100,A9=350,n9=1500,F0=L=>new Promise(V=>setTimeout(V,L)),D0,$0,N0,I0,W0,$,J2,j2,C5,H5,L1=class extends(W0=k,I0=[w({attribute:!1})],N0=[w({attribute:!1})],$0=[S()],D0=[S()],W0){constructor(){super(...arguments);x(this,J2,A($,8,this)),A($,11,this);x(this,j2,A($,12,this)),A($,15,this);x(this,C5,A($,16,this,"idle")),A($,19,this);x(this,H5,A($,20,this,{})),A($,23,this);m(this,"_timer")}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),this._phase="idle"}get _domain(){return l(this.stateObj.entity_id)}get _scriptFields(){let C=d2(this.stateObj.entity_id);return this.hass.services?.script?.[C]}_requiredFilled(){let C=this._scriptFields?.fields??{},H=this._scriptData.data;return Object.entries(C).every(([e,M])=>!M.required||H?.[e]!==void 0)}_call(){let C=this.hass,H=this.stateObj.entity_id;switch(this._domain){case"script":return C.callService("script","turn_on",{entity_id:H,...this._scriptData.data?{variables:this._scriptData.data}:{}});case"automation":return C.callService("automation","trigger",{entity_id:H,skip_condition:!0});default:return C.callService(this._domain==="input_button"?"input_button":"button","press",{entity_id:H})}}async _fire(C){if(C.stopPropagation(),!this._canFire)return;clearTimeout(this._timer),_(window,"haptic","light"),this._phase="firing";let H=Promise.race([this._call(),F0(n9)]),e=!0;try{await Promise.all([H,F0(A9)])}catch{e=!1,_(window,"haptic","failure")}this._phase=e?"done":"error",this._timer=setTimeout(()=>{this._phase="idle"},a9)}_keyDown(C){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),this._fire(C))}get _unavailable(){return this.stateObj.state==="unavailable"}get _running(){return this._domain==="script"&&this.stateObj.state==="on"}get _canFire(){return this._unavailable||this._phase==="firing"?!1:this._domain!=="script"?!0:o9(this.stateObj)&&this._requiredFilled()}get _label(){let C=this.hass;switch(this._domain){case"script":return C.localize("ui.card.script.run");case"automation":return C.localize("ui.card.automation.trigger");default:return C.localize("ui.card.button.press")}}_handleIcon(){let C=this._phase==="done"?Q1:this._phase==="error"?e3:void 0;return i`
      <ha-state-icon
        class=${Y({hidden:!!C})}
        .hass=${this.hass}
        .stateObj=${this.stateObj}
      ></ha-state-icon>
      ${C?i`<ha-svg-icon class="feedback" .path=${C}></ha-svg-icon>`:a}
    `}render(){if(!this.hass||!this.stateObj)return a;let C=this._domain,H=this._phase!=="idle"||this._running;return i`
      <div
        class=${Y({pad:!0,up:H,running:this._running&&this._phase==="idle",error:this._phase==="error",disabled:this._unavailable||!H&&!this._canFire})}
        role="button"
        tabindex=${this._unavailable?-1:0}
        aria-label=${this._label}
        aria-disabled=${!this._canFire}
        style=${D({"--on-color":X2(C,!0),"--off-color":X2(C,!1)})}
        @click=${this._fire}
        @keydown=${this._keyDown}
      >
        <div class="track"></div>
        <div class="handle">${this._handleIcon()}</div>
      </div>
      ${C==="script"?this._scriptExtras():a}
      ${C==="automation"?this._automationBar():a}
    `}_automationBar(){let C=this.stateObj,H=C.state==="on",e=M=>{M.stopPropagation(),this.hass.callService("automation",H?"turn_off":"turn_on",{entity_id:C.entity_id})};return i`
      <ha-control-button-group class="bar">
        <ha-control-button
          class=${Y({active:H})}
          style=${D({"--color":X2("automation",!0)})}
          .label=${this.hass.localize(H?"ui.card.common.turn_off":"ui.card.common.turn_on")}
          .disabled=${this._unavailable}
          @click=${e}
        >
          <ha-svg-icon .path=${o1}></ha-svg-icon>
          <span class="label">${this.hass.formatEntityState(C)}</span>
        </ha-control-button>
      </ha-control-button-group>
    `}_scriptExtras(){let C=this.hass,H=this.stateObj,e=this._scriptFields,M=e?.fields??{},r=H.attributes.current||0,t=U0.includes(H.attributes.mode)&&r>1,o=p=>{p.stopPropagation(),C.callService("script","turn_off",{entity_id:H.entity_id})},d=p=>{this._scriptData={...this._scriptData,...p.detail.value}};return i`
      <ha-control-button-group class="bar">
        <ha-control-button .disabled=${!r} @click=${o}>
          <ha-svg-icon .path=${s1}></ha-svg-icon>
          ${C.localize(t?"ui.card.script.cancel_all":"ui.card.script.cancel")}
        </ha-control-button>
      </ha-control-button-group>
      ${e?.description?i`<ha-markdown
              breaks
              .content=${e.description}
            ></ha-markdown>`:a}
      ${Object.keys(M).length?i`
              <div class="fields">
                <ha-service-control
                  hide-picker
                  hide-description
                  .hass=${C}
                  .value=${{action:H.entity_id,...this._scriptData}}
                  .narrow=${window.matchMedia("(max-width: 870px)").matches}
                  @value-changed=${d}
                ></ha-service-control>
              </div>
            `:a}
    `}};$=K(W0),J2=new WeakMap,j2=new WeakMap,C5=new WeakMap,H5=new WeakMap,v($,4,"hass",I0,L1,J2),v($,4,"stateObj",N0,L1,j2),v($,4,"_phase",$0,L1,C5),v($,4,"_scriptData",D0,L1,H5),F($,L1),m(L1,"styles",y`
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
      .track {
        transition: none;
      }
      .pad.running .track,
      .pad.running .handle ha-state-icon,
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
  `);customElements.get(R0)||customElements.define(R0,L1);var V5=["ha-icon-button-group","ha-icon-button-toggle","light-color-rgb-picker","light-color-temp-picker","ha-more-info-light-favorite-colors"],Q0={cover:["ha-icon-button-group","ha-icon-button-toggle","ha-state-control-cover-position","ha-state-control-cover-tilt-position","ha-state-control-cover-toggle","ha-state-control-cover-buttons","ha-more-info-cover-favorite-positions"],valve:["ha-icon-button-group","ha-icon-button-toggle","ha-state-control-valve-position","ha-state-control-valve-toggle","ha-state-control-valve-buttons","ha-more-info-valve-favorite-positions"],lock:["ha-control-button","ha-control-button-group","ha-state-icon"],alarm_control_panel:["ha-control-button","ha-state-icon"],siren:["ha-button","more-info-siren"],vacuum:["ha-control-button","ha-control-button-group","ha-battery-icon","ha-icon-next","ha-more-info-control-select-container","more-info-vacuum"],lawn_mower:["ha-control-button","ha-control-button-group","ha-battery-icon"]},Z1={toggle:{tag:"ha-state-control-toggle",load:"switch"},brightness:{tag:"ha-state-control-light-brightness",load:"light",extraTags:V5},fan_speed:{tag:"ha-state-control-fan-speed",load:"fan",extraTags:["ha-outlined-icon-button"]},position:{tag:"ha-state-control-cover-position",load:"cover"},tilt:{tag:"ha-state-control-cover-tilt-position",load:"cover"},cover_toggle:{tag:"ha-state-control-cover-toggle",load:"cover"},cover_buttons:{tag:"ha-state-control-cover-buttons",load:"cover"},valve_position:{tag:"ha-state-control-valve-position",load:"valve"},valve_toggle:{tag:"ha-state-control-valve-toggle",load:"valve"},valve_buttons:{tag:"ha-state-control-valve-buttons",load:"valve"},lock:{tag:"ha-state-control-lock-toggle",load:"lock"},alarm_modes:{tag:"ha-state-control-alarm_control_panel-modes",load:"alarm_control_panel"},temperature:{tag:"ha-state-control-climate-temperature",load:"climate"},climate_humidity:{tag:"ha-state-control-climate-humidity",load:"climate"},humidity:{tag:"ha-state-control-humidifier-humidity",load:"humidifier"},water_heater:{tag:"ha-state-control-water_heater-temperature",load:"water_heater"},vacuum_status:{tag:"ha-state-control-vacuum-status",load:"vacuum"},lawn_mower_status:{tag:"ha-state-control-lawn_mower-status",load:"lawn_mower"},media_player:{tag:"more-info-media_player",load:"media_player"},script:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0},more_info:{tag:"more-info-content",load:"",extraTags:["state-card-content"]},press:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button"],inline:!0},trigger:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0}},z0=["alarm_control_panel","cover","climate","conversation","fan","humidifier","input_boolean","lawn_mower","light","lock","siren","script","switch","timer","vacuum","valve","water_heater","weather","media_player"],d9=["camera","configurator"],p9=["camera","conversation","counter","date","datetime","group","image","input_datetime","input_number","input_select","input_text","number","person","remote","scene","select","sun","text","time","timer","update","weather"],m9=L=>{let V=l(L.entity_id);if(V==="group"){let C=new Set((L.attributes.entity_id??[]).map(l)),[H]=C;return C.size===1&&H!=="group"&&z0.includes(H)}return z0.includes(V)},K0=L=>!m9(L)&&!d9.includes(l(L.entity_id)),q0=["hs","xy","rgb","rgbw","rgbww"],l9=[...q0,"color_temp","brightness","white"],v2=(L,V)=>L.attributes.supported_color_modes?.some(C=>V.includes(C))??!1,L5=L=>v2(L,l9),Y0=L=>v2(L,q0),X0=L=>v2(L,["color_temp"]),J0=L=>v2(L,["white"]),g=(L,V)=>((L.attributes.supported_features??0)&V)!==0,G0=(L,V)=>((L.attributes.supported_features??0)&3)===3&&!g(L,V),e5=L=>{let V=l(L.entity_id);switch(V){case"light":return L5(L)?"brightness":"toggle";case"switch":case"input_boolean":case"siren":return"toggle";case"fan":return g(L,1)?"fan_speed":"toggle";case"cover":return g(L,4)?"position":g(L,128)?"tilt":G0(L,120)?"cover_toggle":"cover_buttons";case"valve":return g(L,4)?"valve_position":G0(L,8)?"valve_toggle":"valve_buttons";case"lock":return"lock";case"alarm_control_panel":return"alarm_modes";case"climate":return"temperature";case"humidifier":return"humidity";case"water_heater":return"water_heater";case"vacuum":return"vacuum_status";case"lawn_mower":return"lawn_mower_status";case"media_player":return"media_player";case"script":case"button":case"input_button":case"automation":return"trigger";default:return p9.includes(V)?"more_info":void 0}},j0=["climate","humidifier","water_heater","media_player"];var N={OPEN:1,CLOSE:2,SET_POSITION:4,STOP:8,OPEN_TILT:16,CLOSE_TILT:32,STOP_TILT:64,SET_TILT_POSITION:128},i1={OPEN:1,CLOSE:2,SET_POSITION:4,STOP:8},C7=1,x2={TONES:4,VOLUME_SET:8,DURATION:16},I={PAUSE:4,STOP:8,RETURN_HOME:16,STATUS:128,LOCATE:512,CLEAN_SPOT:1024,STATE:4096,START:8192,CLEAN_AREA:16384},m1={START_MOWING:1,PAUSE:2,DOCK:4,STOP:8},H7=(L,...V)=>V.every(C=>g(L,C)),V7=L=>{let V=g(L,N.SET_POSITION),C=g(L,N.SET_TILT_POSITION),H=g(L,N.OPEN|N.CLOSE|N.STOP),e=g(L,N.OPEN_TILT|N.CLOSE_TILT|N.STOP_TILT),M=H7(L,N.OPEN,N.CLOSE)&&!g(L,N.STOP)&&!e&&!V&&!C;return{position:V,tilt:C,buttons:M?"toggle":H||e?"buttons":void 0,switchMode:(V||C)&&(H||e)}},L7=L=>{let V=g(L,i1.SET_POSITION),C=g(L,i1.OPEN|i1.CLOSE|i1.STOP),H=H7(L,i1.OPEN,i1.CLOSE)&&!g(L,i1.STOP)&&!V;return{position:V,tilt:!1,buttons:H?"toggle":C?"buttons":void 0,switchMode:V&&C}},M5=L=>L==null||Array.isArray(L)&&L.length>0,e7=(L,V)=>{if(!V)return!1;let C=l(L.entity_id),H=V.options?.[C];return C==="valve"?g(L,i1.SET_POSITION)&&M5(H?.favorite_positions):g(L,N.SET_POSITION)&&M5(H?.favorite_positions)||g(L,N.SET_TILT_POSITION)&&M5(H?.favorite_tilt_positions)},M7=L=>{let V=L.state;if(V==="unavailable"||V==="unknown"||V==="off")return!1;switch(l(L.entity_id)){case"alarm_control_panel":return V!=="disarmed";case"cover":case"valve":return V!=="closed";case"lawn_mower":return!["docked","paused","idle"].includes(V);case"lock":return V!=="locked";case"vacuum":return!["idle","docked","paused"].includes(V);default:return!0}},r5=L=>{if(L.state==="unavailable")return"var(--state-unavailable-color)";let V=l(L.entity_id),C=L.attributes.device_class,H=L.state.toLowerCase().replace(/[^a-z0-9]+/g,"_"),e=M7(L)?"active":"inactive";return[...C?[`--state-${V}-${C}-${H}-color`]:[],`--state-${V}-${H}-color`,`--state-${V}-${e}-color`,`--state-${e}-color`].reduceRight((r,t)=>`var(${t}${r?`, ${r}`:""})`,"")},r7=(L,V)=>{let C=V.attributes,H=M7(V)?C.current_position??(l(V.entity_id)==="cover"?C.current_tilt_position:void 0):void 0;return H&&H!==100?L.formatEntityAttributeValue(V,"current_position",Math.round(H)):""},s9=L=>["opening","unlocking","locking"].includes(L.state),t7=L=>L.state!=="unavailable"&&(L.attributes.assumed_state===!0||L.state!=="open"&&!s9(L)),t5=["triggered","arming","pending"],i7=L=>["cleaning","on"].includes(L.state),o7=L=>!["docked","off","idle"].includes(L.state),a7=L=>L.state!=="unavailable"&&L.state!=="returning",A7=L=>L.state!=="unavailable"&&!["docked","idle"].includes(L.state),n7=L=>L.state!=="unavailable"&&L.state!=="docked",d7=(L,V)=>{let C=L.entities[V]?.device_id;if(!C)return;let H=Object.values(L.entities).filter(t=>t.device_id===C),e=["sensor","binary_sensor"],M=H.map(t=>L.states[t.entity_id]).filter(t=>t?.attributes.device_class==="battery"&&e.includes(l(t.entity_id))).sort((t,o)=>e.indexOf(l(t.entity_id))-e.indexOf(l(o.entity_id)))[0];if(!M||l(M.entity_id)!=="binary_sensor"&&isNaN(Number(M.state)))return;let r=H.map(t=>L.states[t.entity_id]).find(t=>t?.attributes.device_class==="battery_charging");return{battery:M,charging:r}},p7=L=>["cs","de","fi","fr","sk","sv"].includes(L.locale?.language??L.language)?" ":"",m7=async(L,V)=>{let C=await window.loadCardHelpers?.();if(!C?.showEnterCodeDialog)throw new Error("The code dialog is not available");return C.showEnterCodeDialog(L,V)},i5=async(L,V,C,H,e)=>{let M;if(C.attributes.code_format&&!H?.options?.lock?.default_code){let r=await m7(L,{codeFormat:"text",codePattern:C.attributes.code_format,title:V.localize(`ui.card.lock.${e}`),submitText:V.localize(`ui.card.lock.${e}`)});if(r==null)throw new Error("Code dialog closed");M=r}await V.callService("lock",e,{entity_id:C.entity_id,code:M})},l7=async(L,V,C,H)=>{let e;if(C.attributes.code_format&&!H?.options?.alarm_control_panel?.default_code){let M=await m7(L,{codeFormat:C.attributes.code_format,title:V.localize("ui.card.alarm_control_panel.disarm"),submitText:V.localize("ui.card.alarm_control_panel.disarm")});if(M==null)throw new Error("Code dialog closed");e=M}await V.callService("alarm_control_panel","alarm_disarm",{entity_id:C.entity_id,code:e})};var a5=L=>V=>(V.attributes[L]??[]).map(String),o5=L=>V=>{let C=V.attributes[L];return C==null?void 0:String(C)},X=(L,V,C,H)=>({options:a5(L),value:o5(V),service:e=>[l(e.entity_id),C],data:e=>({[V]:e}),icon:H}),v9=(L,V,C,H)=>({optionIcons:{true:C,false:H},options:()=>["true","false"],value:e=>e.attributes[L]==null?void 0:String(!!e.attributes[L]),service:e=>[l(e.entity_id),V],data:e=>({[L]:e==="true"}),icon:C}),$1={effect:{...X("effect_list","effect","turn_on",n3)},preset_mode:X("preset_modes","preset_mode","set_preset_mode",v1),fan_mode:X("fan_modes","fan_mode","set_fan_mode",f1),swing_mode:X("swing_modes","swing_mode","set_swing_mode",G1),swing_horizontal_mode:X("swing_horizontal_modes","swing_horizontal_mode","set_swing_horizontal_mode",G1),hvac_mode:{options:a5("hvac_modes"),value:L=>L.state,service:()=>["climate","set_hvac_mode"],data:L=>({hvac_mode:L}),icon:F3,formatAsState:!0},fan_speed:{...X("fan_speed_list","fan_speed","set_fan_speed",f1),attributeIcons:!1},mode:X("available_modes","mode","set_mode",v1),direction:{options:()=>["forward","reverse"],value:o5("direction"),service:()=>["fan","set_direction"],data:L=>({direction:L}),icon:P3},oscillating:v9("oscillating","oscillate",G1,M3),operation_mode:X("operation_list","operation_mode","set_operation_mode",I3),away_mode:{options:()=>["on","off"],value:o5("away_mode"),service:()=>["water_heater","set_away_mode"],data:L=>({away_mode:L==="on"}),icon:O2,optionIcons:{on:O2,off:L3}},source:{...X("source_list","source","select_source",g3),attributeIcons:!1},sound_mode:{...X("sound_mode_list","sound_mode","select_sound_mode",y3),attributeIcons:!1}},c2={options:a5("options"),value:L=>L.state,service:L=>[l(L.entity_id),"select_option"],data:L=>({option:L}),icon:v1,formatAsState:!0},s7={options:()=>["off","on"],value:L=>L.state,service:L=>[l(L.entity_id),"toggle"],data:()=>({}),icon:o1,formatAsState:!0},S1=["select","input_select"],v7=["number","input_number"],x7=["switch","input_boolean","light","fan","siren","automation","script","group","media_player","humidifier","climate","water_heater","remote","valve","cover","lock"];var Z2=()=>{},c7=L=>u(Z2(),`controls.${L}`),u2=(L,V,C=!1)=>({select:{mode:"dropdown",custom_value:C,options:L.map(H=>({value:H,label:u(Z2(),`${V}.${H}`)||H}))}}),u7={name:"appearance",selector:u2(["plain","card"],"controls.appearance")},Z7=L=>c7(L.name)||L.name,S7=()=>({schema:[{name:"entity",required:!0,selector:{entity:{}}},{name:"control",selector:u2(["auto","none",...Object.keys(Z1)],"controls.control")},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}}]},{name:"state_override",selector:{text:{}}},u7],computeLabel:Z7}),R=(L,V,C=!1)=>({label:c7(L),description:u(Z2(),`controls.${L}_helper`)||void 0,required:C,selector:V}),h7=()=>({schema:[{name:"controls",selector:{object:{multiple:!0,label_field:"entity",description_field:"attribute",fields:{type:R("type",u2(["select","toggle","number","action","button"],"controls.type")),entity:R("entity",{entity:{}}),attribute:R("attribute",u2(["state",...Object.keys($1)],"controls.attribute",!0)),name:R("name",{text:{}}),icon:R("icon",{icon:{}}),options:R("options",{select:{multiple:!0,custom_value:!0,options:[]}}),value:R("value",{text:{}}),tap_action:R("tap_action",{ui_action:{}}),show_arrow:R("show_arrow",{boolean:{}}),perform_action:R("perform_action",{text:{}}),data_key:R("data_key",{text:{}}),min:R("min",{number:{mode:"box",step:"any"}}),max:R("max",{number:{mode:"box",step:"any"}}),step:R("step",{number:{mode:"box",step:"any"}})}}}},{name:"",type:"grid",schema:[u7,{name:"wrap",selector:{boolean:{}}}]}],computeLabel:Z7,computeHelper:L=>u(Z2(),`controls.${L.name}_helper`)||void 0,assertConfig:L=>{if(L.controls?.some(V=>V.options?.some(C=>typeof C!="string")))throw new Error("Options with names or icons can only be edited in YAML")}});var S2=y`
  ha-card.plain {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    --ha-card-background: transparent;
  }
`,g7=y`
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
`;var N1="more-info-state-card",h2="more-info-popup-fill",x9={temperature:["show-secondary","prevent-interaction-on-scroll"],climate_humidity:["show-current","prevent-interaction-on-scroll"],humidity:["show-secondary","prevent-interaction-on-scroll"],water_heater:["show-current","prevent-interaction-on-scroll"]},c9=16,u9=32,Z9=6,S9=L=>Math.round(100/(L.attributes.percentage_step??1))+1,h9=["position","tilt","cover_toggle","cover_buttons","valve_position","valve_toggle","valve_buttons"],g9=5,f9=2,A5=()=>{},O9=["queued","parallel"],b9=L=>L.state==="off"||L.state==="on"&&O9.includes(L.attributes.mode)&&L.attributes.current<L.attributes.max,y9=(L,V)=>{let C=l(V.entity_id),H=V.attributes;if(C==="light"&&V.state==="on"&&H.brightness!=null)return L.formatEntityAttributeValue(V,"brightness");if(C==="fan"&&V.state==="on"&&H.percentage)return L.formatEntityAttributeValue(V,"percentage");if(C==="script"){let e=H.current||0;return e?H.mode==="parallel"&&e>1?L.localize("ui.card.script.running_parallel",{active:e}):L.localize("ui.card.script.running_single"):L.localize("ui.card.script.idle")}if((C==="button"||C==="input_button")&&V.state!=="unavailable")return L.localize("ui.card.button.press");if(C==="cover"||C==="valve"){let e=r7(L,V);return e?`${L.formatEntityState(V)} \xB7 ${e}`:void 0}if(C==="vacuum"&&g(V,I.STATUS)&&H.status)return L.formatEntityAttributeValue(V,"status")},f7,O7,b7,y7,_7,k7,w7,T7,P7,f,n5,d5,p5,m5,l5,s5,v5,x5,W=class extends(P7=k,T7=[w({attribute:!1})],w7=[S()],k7=[S()],_7=[S()],y7=[S()],b7=[S()],O7=[S()],f7=[S()],P7){constructor(){super(...arguments);x(this,n5,A(f,8,this)),A(f,11,this);x(this,d5,A(f,12,this)),A(f,15,this);x(this,p5,A(f,16,this,!1)),A(f,19,this);x(this,m5,A(f,20,this,{})),A(f,23,this);x(this,l5,A(f,24,this,"brightness")),A(f,27,this);x(this,s5,A(f,28,this)),A(f,31,this);x(this,v5,A(f,32,this)),A(f,35,this);x(this,x5,A(f,36,this,"normal")),A(f,39,this);m(this,"_openTimeout");m(this,"_controlElement");m(this,"_controlTag");m(this,"_loadingKey");m(this,"_entryLoaded")}static getConfigForm(){return S7()}static getStubConfig(C,H){let e=H.find(M=>M.startsWith("light."))??H.find(M=>e5(C.states[M]))??H[0];return{type:`custom:${N1}`,entity:e}}setConfig(C){if(!C?.entity)throw new Error('"entity" is required');if(C.control&&C.control!=="auto"&&C.control!=="none"&&!(C.control in Z1))throw new Error(`Unknown control "${C.control}"`);this._config=C,this._ready=!1,this._loadingKey=void 0,this._scriptData={action:C.entity},this._lightControl="brightness",this._positionMode=void 0,this._setOpenState("normal"),this._entry=void 0,this._entryLoaded=void 0}connectedCallback(){super.connectedCallback(),_(this,h2)}disconnectedCallback(){super.disconnectedCallback(),this._setOpenState("normal")}set popupFill(C){if(this.style.removeProperty("--popup-min-height"),C<=0)return;let H=this.getBoundingClientRect().height;this.style.setProperty("--popup-min-height",`${H+C}px`)}getCardSize(){return 7}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _controlName(){let C=this._config?.control??"auto";if(C!=="none")return C!=="auto"?C:this._stateObj?e5(this._stateObj):void 0}willUpdate(){if(this._ready||!this._config||!this._stateObj)return;let C=this._controlName,H=C?Z1[C]:void 0,e=this._showState&&this._config.show_last_changed!==!1,M=`${this._config.entity}:${C}:${e}`;if(M===this._loadingKey)return;this._loadingKey=M;let r=[];if(H){let d="extraTags"in H?H.extraTags:[],p=H.load||l(this._config.entity);r.push(u1(p,[H.tag,...d]))}let t=l(this._config.entity),o=t==="light"?V5:Q0[t];H&&o&&r.push(u1(t,[...o])),e&&r.push(u1("switch",["ha-more-info-state-header"])),Promise.all(r).then(()=>{this._loadingKey===M&&(this._ready=!0)})}get _showState(){let C=l(this._config.entity);return this._config.show_state??(!j0.includes(C)&&this._controlName!=="more_info")}_control(C){let H=this._controlName;if(!H)return a;if(H==="script")return this._script(C);if(H==="press")return this._press(C);if(H==="trigger")return i`<more-info-popup-trigger-control
        .hass=${this.hass}
        .stateObj=${C}
      ></more-info-popup-trigger-control>`;if(H==="more_info")return this._moreInfo(C);let e=l(C.entity_id);if(this._positionComposite(C))return this._positionControls(C);let{tag:M}=Z1[H];if(this._controlTag!==M){this._controlTag=M,this._controlElement=document.createElement(M);for(let o of x9[H]??[])this._controlElement.setAttribute(o,"");H==="lock"&&this._controlElement.addEventListener("lock-service-called",()=>this._setOpenState("normal"))}let r=this._controlElement;r.stateObj=C,r.hass=this.hass;let t=e==="fan";return H==="toggle"&&(r.iconPathOn=t?f1:e==="light"?Z3:e==="siren"?$3:void 0,r.iconPathOff=t?s3:e==="light"?u3:e==="siren"?N3:void 0),e==="light"&&(H==="toggle"||H==="brightness")?this._light(C,r):e==="siren"&&H==="toggle"?this._siren(C,r):e==="lock"&&H==="lock"?this._lock(C,r):e==="alarm_control_panel"&&H==="alarm_modes"?t5.includes(C.state)?this._statusIcon(C,"alarm"):r:e==="vacuum"&&H==="vacuum_status"?i`${r}${this._vacuumCommands(C)}`:e==="lawn_mower"&&H==="lawn_mower_status"?i`${r}${this._mowerCommands(C)}`:H==="fan_speed"&&t&&S9(C)>Z9&&g(C,u9|c9)?i`${r}${this._fanPowerButton(C)}`:r}_light(C,H){let e=this.hass,M=L5(C),r=Y0(C),t=X0(C),o=J0(C);if(!M&&!r&&!t)return H;let d=C.state==="unavailable",p=this._lightControl,n=P=>Q=>{Q.stopPropagation(),this._lightControl=P},c=(P,Q={})=>e.callService("light",P,{entity_id:C.entity_id,...Q});(r||t)&&this._loadEntry();let s=this._entry,Z=s?.options?.light?.favorite_colors,T=!!(s&&(Z==null||Z.length>0));return i`
      ${M?a:H}
      ${M&&p==="brightness"?H:r&&p==="color"?i`<light-color-rgb-picker
                .hass=${e}
                .stateObj=${C}
              ></light-color-rgb-picker>`:t&&p==="color_temp"?i`<light-color-temp-picker
                  .hass=${e}
                  .stateObj=${C}
                ></light-color-temp-picker>`:a}
      <ha-icon-button-group>
        ${M?i`<ha-icon-button
                .disabled=${d}
                .label=${e.localize("ui.dialogs.more_info_control.light.toggle")}
                @click=${P=>{P.stopPropagation(),c(C.state==="on"?"turn_off":"turn_on")}}
              >
                <ha-svg-icon .path=${o1}></ha-svg-icon>
              </ha-icon-button>`:a}
        ${r||t?i`<div class="separator"></div>
                <ha-icon-button-toggle
                  .selected=${p==="brightness"}
                  .disabled=${d}
                  .label=${e.formatEntityAttributeName(C,"brightness")}
                  @click=${n("brightness")}
                >
                  <ha-svg-icon .path=${r3}></ha-svg-icon>
                </ha-icon-button-toggle>`:a}
        ${r?i`<ha-icon-button-toggle
                border-only
                .selected=${p==="color"}
                .disabled=${d}
                .label=${e.localize("ui.dialogs.more_info_control.light.color")}
                @click=${n("color")}
              >
                <span class="wheel color"></span>
              </ha-icon-button-toggle>`:a}
        ${t?i`<ha-icon-button-toggle
                border-only
                .selected=${p==="color_temp"}
                .disabled=${d}
                .label=${e.localize("ui.dialogs.more_info_control.light.color_temp")}
                @click=${n("color_temp")}
              >
                <span class="wheel color-temp"></span>
              </ha-icon-button-toggle>`:a}
        ${o?i`<div class="separator"></div>
                <ha-icon-button
                  .disabled=${d}
                  .label=${e.localize("ui.dialogs.more_info_control.light.set_white")}
                  @click=${P=>{P.stopPropagation(),c("turn_on",{white:!0})}}
                >
                  <ha-svg-icon .path=${v3}></ha-svg-icon>
                </ha-icon-button>`:a}
      </ha-icon-button-group>
      ${T?i`<ha-more-info-light-favorite-colors
              .hass=${e}
              .stateObj=${C}
              .entry=${s}
            ></ha-more-info-light-favorite-colors>`:a}
    `}_positionComposite(C){let H=l(C.entity_id);return(H==="cover"||H==="valve")&&(this._config.control??"auto")==="auto"&&h9.includes(this._controlName)}_positionControls(C){let H=this.hass,e=l(C.entity_id),M=e==="cover"?V7(C):L7(C),r=this._positionMode??(M.position||M.tilt?"position":"button"),t=p=>n=>{n.stopPropagation(),this._positionMode=p},o=e==="cover",d=a;return r==="position"?d=i`
        ${M.position?o?i`<ha-state-control-cover-position
                  .hass=${H}
                  .stateObj=${C}
                ></ha-state-control-cover-position>`:i`<ha-state-control-valve-position
                  .hass=${H}
                  .stateObj=${C}
                ></ha-state-control-valve-position>`:a}
        ${M.tilt?i`<ha-state-control-cover-tilt-position
                .hass=${H}
                .stateObj=${C}
              ></ha-state-control-cover-tilt-position>`:a}
      `:M.buttons==="toggle"?d=o?i`<ha-state-control-cover-toggle
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-cover-toggle>`:i`<ha-state-control-valve-toggle
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-valve-toggle>`:M.buttons==="buttons"&&(d=o?i`<ha-state-control-cover-buttons
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-cover-buttons>`:i`<ha-state-control-valve-buttons
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-valve-buttons>`),i`
      <div class="main-control">${d}</div>
      ${M.switchMode?i`<ha-icon-button-group>
              <ha-icon-button-toggle
                .label=${H.localize(`ui.dialogs.more_info_control.${e}.switch_mode.position`)}
                .selected=${r==="position"}
                .path=${O3}
                @click=${t("position")}
              ></ha-icon-button-toggle>
              <ha-icon-button-toggle
                .label=${H.localize(`ui.dialogs.more_info_control.${e}.switch_mode.button`)}
                .selected=${r==="button"}
                .path=${B3}
                @click=${t("button")}
              ></ha-icon-button-toggle>
            </ha-icon-button-group>`:a}
    `}_favoritePositions(C){return this._loadEntry(),e7(C,this._entry)?l(C.entity_id)==="cover"?i`<ha-more-info-cover-favorite-positions
          .hass=${this.hass}
          .stateObj=${C}
          .entry=${this._entry}
          .editMode=${!1}
        ></ha-more-info-cover-favorite-positions>`:i`<ha-more-info-valve-favorite-positions
          .hass=${this.hass}
          .stateObj=${C}
          .entry=${this._entry}
          .editMode=${!1}
        ></ha-more-info-valve-favorite-positions>`:a}_statusIcon(C,H){return i`
      <div
        class="status ${H}"
        style=${D({"--state-color":r5(C)})}
      >
        <div class="icon">
          <ha-state-icon
            .hass=${this.hass}
            .stateObj=${C}
          ></ha-state-icon>
        </div>
      </div>
    `}_setOpenState(C,H){clearTimeout(this._openTimeout),this._openState=C,H&&(this._openTimeout=setTimeout(()=>{this._openState="normal"},H*1e3))}_lock(C,H){let e=this.hass;this._loadEntry();let M=r=>{if(r.stopPropagation(),this._openState!=="confirm"){this._setOpenState("confirm",g9);return}i5(this,e,C,this._entry,"open").catch(A5),this._setOpenState("done",f9)};return i`
      ${C.state==="jammed"?this._statusIcon(C,"lock"):H}
      ${g(C,C7)?i`<div class="buttons">
              ${this._openState==="done"?i`<p class="open-done">
                      <ha-svg-icon .path=${Q1}></ha-svg-icon>
                      ${e.localize("ui.card.lock.open_door_done")}
                    </p>`:i`<ha-control-button
                      .disabled=${!t7(C)}
                      class="open-button ${this._openState}"
                      style=${D({"--state-color":r5(C)})}
                      @click=${M}
                    >
                      ${this._openState==="confirm"?e.localize("ui.card.lock.open_door_confirm"):e.localize("ui.card.lock.open_door")}
                    </ha-control-button>`}
            </div>`:a}
    `}_siren(C,H){let e=g(C,x2.TONES)&&C.attributes.available_tones||g(C,x2.VOLUME_SET|x2.DURATION);return i`
      ${H}
      ${e?i`<ha-button appearance="plain" size="s" @click=${r=>{r.stopPropagation(),G2(this.shadowRoot,"more-info-siren","_showAdvancedControlsDialog",{stateObj:C})}}>
              ${this.hass.localize("ui.components.siren.more_controls")}
            </ha-button>`:a}
    `}_commandButton(C,H,e,M){return i`<ha-control-button
      .label=${C}
      .disabled=${e}
      @click=${r=>{r.stopPropagation(),M()}}
    >
      <ha-svg-icon .path=${H}></ha-svg-icon>
    </ha-control-button>`}_commands(C){return C.length?i`<div class="buttons">
          <ha-control-button-group class="commands">
            ${C}
          </ha-control-button-group>
        </div>`:a}_vacuumCommands(C){let H=this.hass,e=C.state==="unavailable",M=c=>g(C,c),r=c=>()=>H.callService("vacuum",c,{entity_id:C.entity_id}),t=c=>H.localize(`ui.dialogs.more_info_control.vacuum.${c}`),o=i7(C),d=!M(I.STATE)&&!M(I.START),p=o&&M(I.PAUSE),n=[];return(M(I.START)||M(I.PAUSE))&&n.push(this._commandButton(t(d?"start_pause":p?"pause":"start"),d?w3:p?y2:J1,e,d&&M(I.PAUSE)?r("start_pause"):r(o?"pause":"start"))),M(I.STOP)&&n.push(this._commandButton(t("stop"),s1,e||!o7(C),r("stop"))),M(I.RETURN_HOME)&&n.push(this._commandButton(t("return_home"),b2,e||!a7(C),r("return_to_base"))),M(I.LOCATE)&&n.push(this._commandButton(t("locate"),f3,e,r("locate"))),M(I.CLEAN_SPOT)&&n.push(this._commandButton(t("clean_spot"),E3,e,r("clean_spot"))),this._commands(n)}_mowerCommands(C){let H=this.hass,e=C.state==="unavailable",M=p=>g(C,p),r=p=>()=>H.callService("lawn_mower",p,{entity_id:C.entity_id}),t=p=>H.localize(`ui.dialogs.more_info_control.lawn_mower.${p}`),o=C.state==="mowing"&&M(m1.PAUSE),d=[];return(M(m1.START_MOWING)||M(m1.PAUSE))&&d.push(this._commandButton(t(o?"pause":"start_mowing"),o?y2:J1,e||!o&&(!M(m1.START_MOWING)||C.state==="mowing"),r(o?"pause":"start_mowing"))),M(m1.STOP)&&d.push(this._commandButton(t("stop"),s1,e||!A7(C),r("stop"))),M(m1.DOCK)&&d.push(this._commandButton(t("dock"),b2,e||!n7(C),r("dock"))),this._commands(d)}_cleanAreas(C){let H=this.hass,e=M=>{M.stopPropagation();let r=!1,t=()=>{r=!0};window.addEventListener("show-child-view",t);let o=G2(this.shadowRoot,"more-info-vacuum","_handleCleanAreas",{stateObj:C,_i18n:{localize:H.localize}});window.removeEventListener("show-child-view",t),(r||!o)&&_(this,"hass-more-info",{entityId:C.entity_id})};return i`
      <ha-more-info-control-select-container>
        <button
          class="clean-areas-button"
          ?disabled=${C.state==="unavailable"}
          @click=${e}
        >
          <div class="icon">
            <ha-svg-icon .path=${R3}></ha-svg-icon>
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
    `}_afterControls(C){let H=this._controlName;if(!H)return a;let e=this.hass,M=l(C.entity_id);if(this._positionComposite(C))return this._favoritePositions(C);if(M==="lock"&&H==="lock"&&C.state==="jammed"){let r=t=>o=>{o.stopPropagation(),i5(this,e,C,this._entry,t).catch(A5)};return i`
        <ha-control-button-group class="jammed">
          <ha-control-button @click=${r("unlock")}>
            ${e.localize("ui.card.lock.unlock")}
          </ha-control-button>
          <ha-control-button @click=${r("lock")}>
            ${e.localize("ui.card.lock.lock")}
          </ha-control-button>
        </ha-control-button-group>
      `}return M==="alarm_control_panel"&&H==="alarm_modes"&&t5.includes(C.state)?(this._loadEntry(),i`
        <ha-control-button class="disarm" @click=${t=>{t.stopPropagation(),l7(this,e,C,this._entry).catch(A5)}}>
          ${e.localize("ui.card.alarm_control_panel.disarm")}
        </ha-control-button>
      `):M==="vacuum"&&H==="vacuum_status"&&g(C,I.CLEAN_AREA)?this._cleanAreas(C):a}_battery(C){let H=l(C.entity_id);if(H!=="vacuum"&&H!=="lawn_mower")return a;let e=this.hass,M=d7(e,C.entity_id);if(!M)return a;let{battery:r,charging:t}=M;return i`
      <span class="battery" slot="after-time">
        ${l(r.entity_id)==="binary_sensor"?a:i`<span
                >${Number(r.state).toFixed()}${p7(e)}%</span
              >`}
        <ha-battery-icon
          .hass=${e}
          .batteryStateObj=${r}
          .batteryChargingStateObj=${t}
        ></ha-battery-icon>
      </span>
    `}_moreInfo(C){this._loadEntry();let H=K0(C);return i`
      ${H?i`<state-card-content
              in-dialog
              .hass=${this.hass}
              .stateObj=${C}
            ></state-card-content>`:a}
      <more-info-content
        ?full-height=${!H}
        .hass=${this.hass}
        .stateObj=${C}
        .entry=${this._entry}
        .editMode=${!1}
      ></more-info-content>
    `}_loadEntry(){let C=this._config.entity;this._entryLoaded!==C&&(this._entryLoaded=C,this.hass.callWS({type:"config/entity_registry/get",entity_id:C}).then(H=>{this._entryLoaded===C&&(this._entry=H)},()=>{this._entryLoaded===C&&(this._entry=null)}))}_fanPowerButton(C){let H=()=>this.hass.callService("fan",C.state==="on"?"turn_off":"turn_on",{entity_id:C.entity_id});return i`
      <div class="buttons">
        <ha-outlined-icon-button
          .disabled=${C.state==="unavailable"}
          @click=${H}
        >
          <ha-svg-icon .path=${o1}></ha-svg-icon>
        </ha-outlined-icon-button>
      </div>
    `}_script(C){let H=this.hass,e=d2(C.entity_id),M=H.services?.script?.[e],r=M?.fields??{},t=Object.keys(r).length>0,o=C.attributes.current||0,d=C.attributes.mode,p=d==="queued",n=d==="parallel",c=p&&o>1,s=this._scriptData.data,Z=Object.entries(r).every(([b,h1])=>!h1.required||s?.[b]!==void 0),P=!Object.values(r).some(b=>b.required)||Z&&b9(C)||d==="restart",Q=b=>{b.stopPropagation(),H.callService("script",e,this._scriptData.data)},E=b=>{b.stopPropagation(),H.callService("script","turn_off",{entity_id:C.entity_id})},r1=b=>{this._scriptData={...this._scriptData,...b.detail.value}};return i`
      <div class="script">
        ${M?.description?i`<ha-markdown
                breaks
                .content=${M.description}
              ></ha-markdown>`:a}
        <div class="queue ${c?"has-queue":""}">
          ${c?H.localize("ui.card.script.running_queued",{queued:o-1}):""}
        </div>
        ${t?i`
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
                    @value-changed=${r1}
                  ></ha-service-control>
                </div>
              `:a}
        <ha-control-button-group>
          <ha-control-button
            class="cancel-button"
            .disabled=${!o}
            @click=${E}
          >
            <ha-svg-icon .path=${s1}></ha-svg-icon>
            ${(p||n)&&o>1?H.localize("ui.card.script.cancel_all"):H.localize("ui.card.script.cancel")}
          </ha-control-button>
          <ha-control-button
            class="run-button"
            .disabled=${C.state==="unavailable"||!P}
            @click=${Q}
          >
            <ha-svg-icon .path=${J1}></ha-svg-icon>
            ${H.localize("ui.card.script.run")}
          </ha-control-button>
        </ha-control-button-group>
      </div>
    `}_press(C){let H=l(C.entity_id),e=M=>{M.stopPropagation(),this.hass.callService(H==="input_button"?H:"button","press",{entity_id:C.entity_id})};return i`
      <ha-control-button-group class="press">
        <ha-control-button
          .disabled=${C.state==="unavailable"}
          @click=${e}
        >
          <ha-svg-icon .path=${x3}></ha-svg-icon>
          ${this.hass.localize("ui.card.button.press")}
        </ha-control-button>
      </ha-control-button-group>
    `}_header(C){let H=this._config;if(!this._showState)return a;let e=H.state_override||y9(this.hass,C);return H.show_last_changed===!1?i`<p class="state">
        ${e??this.hass.formatEntityState(C)}
      </p>`:i`
      <ha-more-info-state-header
        .hass=${this.hass}
        .stateObj=${C}
        .stateOverride=${e}
        .changedOverride=${["script","automation"].includes(l(C.entity_id))?C.attributes.last_triggered||0:void 0}
      >
        ${this._battery(C)}
      </ha-more-info-state-header>
    `}render(){if(!this._config||!this.hass)return a;let C=this._stateObj,H=this._config.appearance??"plain";return C?i`
      <ha-card class=${H} .label=${H1(C)}>
        ${this._ready?i`
                ${this._header(C)}
                <div
                  class="controls ${this._controlName==="more_info"?"more-info":""}"
                >
                  ${this._control(C)}
                </div>
                ${this._afterControls(C)}
              `:a}
      </ha-card>
    `:i`<ha-card class=${H}>
        <ha-alert alert-type="warning">
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity})}
        </ha-alert>
      </ha-card>`}};f=K(P7),n5=new WeakMap,d5=new WeakMap,p5=new WeakMap,m5=new WeakMap,l5=new WeakMap,s5=new WeakMap,v5=new WeakMap,x5=new WeakMap,v(f,4,"hass",T7,W,n5),v(f,4,"_config",w7,W,d5),v(f,4,"_ready",k7,W,p5),v(f,4,"_scriptData",_7,W,m5),v(f,4,"_lightControl",y7,W,l5),v(f,4,"_entry",b7,W,s5),v(f,4,"_positionMode",O7,W,v5),v(f,4,"_openState",f7,W,x5),F(f,W),m(W,"styles",[S2,y`
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
    `]);customElements.get(N1)||customElements.define(N1,W);var B7=L=>L.uix??L.card_mod,c5=async(L,V,C,H,e)=>{let M=customElements.get("uix-node");if(M?.applyToElement)try{await M.applyToElement(L,V,C,H,!1,e)}catch(r){console.warn("[more-info-popup-card] UIX styling failed",r)}};var _9=24,k9=4,E7=["pointerdown","keydown","wheel","touchstart"],w9=L=>{let V=document;V.startViewTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches?V.startViewTransition(L):L()},R7,F7,D7,$7,N7,I7,W7,U7,z7,G7,Q7,K7,h,u5,Z5,S5,h5,g5,f5,O5,b5,y5,_5,k5,B=class extends(K7=k,Q7=[w({attribute:!1})],G7=[w({type:Boolean,reflect:!0,attribute:"fixed-top"})],z7=[S()],U7=[S()],W7=[S()],I7=[S()],N7=[S()],$7=[S()],D7=[S()],F7=[S()],R7=[S()],K7){constructor(){super(...arguments);x(this,u5,A(h,8,this)),A(h,11,this);x(this,Z5,A(h,12,this,!0)),A(h,15,this);x(this,S5,A(h,16,this)),A(h,19,this);x(this,h5,A(h,20,this,!1)),A(h,23,this);x(this,g5,A(h,24,this,[])),A(h,27,this);x(this,f5,A(h,28,this,{})),A(h,31,this);x(this,O5,A(h,32,this,!1)),A(h,35,this);x(this,b5,A(h,36,this,!0)),A(h,39,this);x(this,y5,A(h,40,this,!1)),A(h,43,this);x(this,_5,A(h,44,this,!1)),A(h,47,this);x(this,k5,A(h,48,this,!1)),A(h,51,this);m(this,"_section");m(this,"_keepAlive",new Map);m(this,"_sectionConfigKey",new WeakMap);m(this,"_childViews",new WeakMap);m(this,"_childHeaders",new WeakMap);m(this,"_autoCloseTimer");m(this,"_resizeObserver");m(this,"_fillCards",new Set);m(this,"_enableEscape",()=>{this._escapeEnabled=!0});m(this,"_disableEscape",()=>{this._escapeEnabled=!1});m(this,"_closeFromEvent",C=>{C.stopPropagation(),this.closeDialog()});m(this,"_goBackFromEvent",()=>this._goBack());m(this,"_observedContent");m(this,"_uixKey");m(this,"_uixSurface");m(this,"_goBack",()=>{let C=this._frame;if(C){if(C.children.length){this._replaceTop({...C,children:C.children.slice(0,-1)}),this._detailsYaml=!1;return}this._stack.length>1&&(this._detailsYaml=!1,this._stack=this._stack.slice(0,-1))}});m(this,"_enlarge",()=>{w9(()=>{this._fill=!this._fill})});m(this,"_breadcrumbClick",C=>{C.stopPropagation(),this._setView("related")});m(this,"_armAutoClose",()=>{this._clearAutoClose(!1);let C=this._config?.auto_close??0;if(!(C<=0)){for(let H of E7)this.addEventListener(H,this._armAutoClose,{passive:!0});this._autoCloseTimer=setTimeout(()=>this.closeDialog(),C*1e3)}});m(this,"_registerFillCard",C=>{C.stopPropagation(),this._fillCards.add(C.composedPath()[0]),this._updateFill()});m(this,"_updateScrollState",()=>{let C=this._observedContent;C&&(this._contentScrolled=C.scrollTop>_9,this._contentScrollable=C.scrollHeight-C.scrollTop-C.clientHeight>k9)})}get _config(){return this._params?.config}get _frame(){return this._stack[this._stack.length-1]}showDialog(C){let{config:H,view:e}=C;this._params=C,this._stack=[{entityId:H.entity,view:"root",children:[]}],e&&H.entity&&this._canShowView(e)&&(this._stack=[...this._stack,{entityId:H.entity,view:e,children:[]}]),this._fill=!1,this._detailsYaml=!1,this._escapeEnabled=!0,this._section=this._getSection(H),this._open=!0,H.entity&&this._loadEntry(H.entity),Y2({popupId:H.popup_id,close:()=>this.closeDialog()}),this._armAutoClose()}closeDialog(){return this._open=!1,!0}_dialogClosed(C){if(C.target!==C.currentTarget)return;let H=this._config;H&&!H.keep_alive&&(this._section=void 0),this._params=void 0,this._stack=[],this._entries={},this._fill=!1,this._detailsYaml=!1,this._contentScrolled=!1,this._contentScrollable=!1,this._clearAutoClose(),this._uixKey=void 0,this._uixSurface=void 0,window.removeEventListener("dialog-closed",this._enableEscape),window.removeEventListener("show-dialog",this._disableEscape),Y2(void 0),_(this,"dialog-closed",{dialog:this.localName})}_dialogOpened(C){C.target===C.currentTarget&&(window.addEventListener("dialog-closed",this._enableEscape),window.addEventListener("show-dialog",this._disableEscape))}connectedCallback(){super.connectedCallback(),this.addEventListener("close-dialog",this._closeFromEvent),this.addEventListener("close-child-view",this._goBackFromEvent),this.addEventListener(h2,this._registerFillCard)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("close-dialog",this._closeFromEvent),this.removeEventListener("close-child-view",this._goBackFromEvent),this.removeEventListener(h2,this._registerFillCard),this._resizeObserver?.disconnect(),this._clearAutoClose()}willUpdate(C){C.has("hass")&&this._section&&(this._section.hass=this.hass)}updated(C){super.updated(C);let H=this.renderRoot.querySelector(".content");H&&H!==this._observedContent&&(this._observedContent=H,this._resizeObserver??=new ResizeObserver(()=>{this._updateFill(),this._updateScrollState()}),this._resizeObserver.disconnect(),this._resizeObserver.observe(H),H.firstElementChild&&this._resizeObserver.observe(H.firstElementChild),this._updateFill(),this._updateScrollState()),this._applyUix()}_applyUix(){let C=this._config,H=this.renderRoot.querySelector("ha-adaptive-dialog, ha-dialog, ha-bottom-sheet");if(!C||!H)return;let e=B7(C),M=`${H.localName}:${C.popup_id}:${JSON.stringify(e??null)}`;if(M===this._uixKey&&H===this._uixSurface)return;this._uixKey=M,this._uixSurface=H;let r={config:C,params:{popup_id:C.popup_id}};c5(H,"more-info",void 0,r,"type-more-info-popup"),c5(H,"more-info-popup",e,r,"type-more-info-popup")}_getSection(C){let H=C.keep_alive?this._keepAlive.get(C.popup_id):void 0;H||(H=document.createElement("hui-section"),C.keep_alive&&this._keepAlive.set(C.popup_id,H));let e={type:"grid",column_span:C.column_span,cards:C.cards},M=JSON.stringify(e);return H.hass=this.hass,this._sectionConfigKey.get(H)!==M&&(this._sectionConfigKey.set(H,M),H.config=e),H}async _loadEntry(C){if(C in this._entries)return;let H;try{H=await this.hass.callWS({type:"config/entity_registry/get",entity_id:C})}catch{H=null}this._entries={...this._entries,[C]:H}}_canShowView(C){return D1(h0[C])}_pushFrame(C){if(C.view!=="root"&&!this._canShowView(C.view)){_(this,"hass-more-info",{entityId:C.entityId??null,view:C.view});return}C.entityId&&this._loadEntry(C.entityId),this._detailsYaml=!1,this._stack=[...this._stack,C]}_setView(C){let H=this._frame;H&&this._pushFrame({entityId:H.entityId,view:C,children:[]})}_replaceTop(C){this._stack=[...this._stack.slice(0,-1),C]}_showChildView(C){C.stopPropagation();let H=this._frame;if(!H)return;let e=C.detail;e.viewImport?.(),e.viewHeaderImport?.(),this._replaceTop({...H,children:[...H.children,e]})}_handleMoreInfo(C){if(this._config?.nested_more_info==="dialog")return;C.stopPropagation();let{entityId:H}=C.detail;if(!H)return;let e=C.detail.view??C.detail.tab??"info",M=this._frame;if(M&&M.entityId===H&&M.view!=="root"){M.view!==e&&this._setView(e);return}this._pushFrame({entityId:H,view:e==="details"?e:"info",children:[]})}_entryUpdated(C){let H=C.detail;H?.entity_id&&(this._entries={...this._entries,[H.entity_id]:H})}_handleMenu(C){let e=this._frame?.entityId;if(!e)return;let M=C.detail?.item?.value;switch(M){case"info":case"related":case"details":case"add_to":this._setView(M);break;case"device":{let r=U2(this.hass,e);r&&K2(this,`/config/devices/device/${r}`);break}case"edit":{let r=this.hass.states[e],t=r&&x0(r,this._entries[e]?.unique_id);t&&K2(this,t);break}default:break}}_clearAutoClose(C=!0){if(clearTimeout(this._autoCloseTimer),this._autoCloseTimer=void 0,C)for(let H of E7)this.removeEventListener(H,this._armAutoClose)}_updateFill(){for(let r of this._fillCards)r.isConnected||this._fillCards.delete(r);let[C,...H]=this._fillCards;for(let r of H)r.popupFill=0;if(!C)return;C.popupFill=0;let e=this._observedContent,M=e?.firstElementChild;!e||!M||this._frame?.view!=="root"||(C.popupFill=Math.floor(e.clientHeight-M.offsetHeight))}render(){let C=this._config,H=this._frame;if(!C||!H||!this.hass)return a;let e=!C.dismissable||H.view==="settings"||!this._escapeEnabled,M=D(a0(C)),r=this._renderContent(H);if(C.mode==="bottom_sheet")return i`
        <ha-bottom-sheet
          style=${M}
          .open=${this._open}
          .preventScrimClose=${e}
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
      `;let t=C.mode==="dialog"?"ha-dialog":"ha-adaptive-dialog",o=this._fill?"full":o0(C),d=i`
      ${this._renderNavigation(H,"headerNavigationIcon")}
      ${this._renderTitle(C,H,"headerTitle")}
      ${this._renderActions(C,H,"headerActionItems")} ${r}
    `;return t==="ha-dialog"?i`
          <ha-dialog
            style=${M}
            .open=${this._open}
            .width=${o}
            .preventScrimClose=${e}
            flexcontent
            @opened=${this._dialogOpened}
            @closed=${this._dialogClosed}
            @show-child-view=${this._showChildView}
          >
            ${d}
          </ha-dialog>
        `:i`
          <ha-adaptive-dialog
            style=${M}
            .open=${this._open}
            .width=${o}
            .preventScrimClose=${e}
            flexcontent
            @opened=${this._dialogOpened}
            @closed=${this._dialogClosed}
            @show-child-view=${this._showChildView}
          >
            ${d}
          </ha-adaptive-dialog>
        `}_isDefaultView(C){return(C.view==="root"||C.view==="info")&&!C.children.length}_renderNavigation(C,H){return this._stack.length===1&&!C.children.length?i`
          <ha-icon-button
            slot=${H}
            .label=${this.hass.localize("ui.common.close")}
            .path=${K1}
            @click=${this.closeDialog}
          ></ha-icon-button>
        `:i`
          <ha-icon-button-prev
            slot=${H}
            .label=${this.hass.localize("ui.dialogs.more_info_control.back_to_info")}
            @click=${this._goBack}
          ></ha-icon-button-prev>
        `}_renderTitle(C,H,e){let M=l2(this.hass,C,H);return s2(this.hass,M,e,C.mode==="bottom_sheet"?void 0:this._enlarge,this._breadcrumbClick)}_renderActions(C,H,e){let M=H.entityId,r=H.view==="root";if(!M)return a;if(!this._isDefaultView(H)){if(H.view==="details"&&!H.children.length)return i`
          <ha-icon-button
            slot=${e}
            .label=${this.hass.localize("ui.dialogs.more_info_control.toggle_yaml_mode")}
            .path=${q1}
            @click=${()=>{this._detailsYaml=!this._detailsYaml}}
          ></ha-icon-button>
        `;let Z=H.children[H.children.length-1];if(Z?.viewHeaderTag){let T=this._childElement(Z,Z.viewHeaderTag,"header");return T.slot=e,Object.assign(T,{hass:this.hass,params:Z.viewParams}),T}return a}if(r&&!C.show_header_actions)return a;let t=this.hass,o=R1(t),d=l0(t,M,!r)?i`
          <ha-icon-button
            slot=${e}
            .label=${t.localize("ui.dialogs.more_info_control.history")}
            .path=${t3}
            @click=${()=>this._setView("history")}
          ></ha-icon-button>
        `:a;if(!o)return i`
        ${d}
        ${W2(t)?i`
                <ha-icon-button
                  slot=${e}
                  .label=${t.localize("ui.dialogs.more_info_control.add_to.item")}
                  .path=${_2}
                  @click=${()=>this._setView("add_to")}
                ></ha-icon-button>
              `:a}
      `;let p=t.states[M],n=U2(t,M),c=s0(t,n),s=l(M);return i`
      ${d}
      <ha-icon-button
        slot=${e}
        .label=${t.localize("ui.dialogs.more_info_control.settings")}
        .path=${Y1}
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
          .label=${t.localize("ui.common.menu")}
          .path=${m3}
        ></ha-icon-button>
        ${r?i`
                <ha-dropdown-item value="info">
                  <ha-svg-icon
                    slot="icon"
                    .path=${v1}
                  ></ha-svg-icon>
                  ${u(t,"dialog.entity_controls")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:a}
        ${W2(t)?i`
                <ha-dropdown-item value="add_to">
                  <ha-svg-icon
                    slot="icon"
                    .path=${_2}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.add_to.item")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:a}
        ${n?i`
                <ha-dropdown-item value="device">
                  <ha-svg-icon
                    slot="icon"
                    .path=${c==="service"?D3:p3}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.device_or_service_info",{type:t.localize(`ui.dialogs.more_info_control.device_type.${c}`)})}
                </ha-dropdown-item>
              `:a}
        ${v0(p)?i`
                <ha-dropdown-item value="edit">
                  <ha-svg-icon
                    slot="icon"
                    .path=${k3}
                  ></ha-svg-icon>
                  ${t.localize(`ui.dialogs.more_info_control.edit_domain.${s}`)||t.localize("ui.dialogs.more_info_control.edit")}
                </ha-dropdown-item>
              `:a}
        <ha-dropdown-item value="related">
          <ha-svg-icon slot="icon" .path=${S3}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.related")}
        </ha-dropdown-item>
        <ha-dropdown-item value="details">
          <ha-svg-icon slot="icon" .path=${c3}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.details")}
        </ha-dropdown-item>
      </ha-dropdown>
    `}_childElement(C,H,e){let M=e==="view"?this._childViews:this._childHeaders,r=M.get(C);return r||(r=document.createElement(H),M.set(C,r)),r}_renderContent(C){let H=`${this._stack.length}:${C.entityId??""}:${C.view}`;return i`
      <div
        class=${Y({"content-wrapper":!0,"settings-view":C.view==="settings"})}
      >
        ${B0(H,i`
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
          class=${Y({"fade-top":!0,visible:this._contentScrolled})}
        ></div>
        <div
          class=${Y({"fade-bottom":!0,visible:this._contentScrollable})}
        ></div>
      </div>
    `}_renderChild(C){let H=C.children[C.children.length-1];if(!H)return a;let e=this._childElement(H,H.viewTag,"view");return Object.assign(e,{hass:this.hass,entry:C.entityId?this._entries[C.entityId]:void 0,params:H.viewParams}),i`<div class="child-view">${e}</div>`}_renderFrame(C){let H=this.hass,e=C.entityId,M=e?this._entries[e]:void 0;if(C.view==="root")return i`
        <div
          class="body"
          ?hidden=${C.children.length>0}
          style=${D({"--column-span":String(this._config.column_span)})}
        >
          ${this._section}
        </div>
        ${this._renderChild(C)}
      `;if(!e)return a;if(C.view==="settings")return i`
        <div ?hidden=${C.children.length>0}>
          <ha-more-info-settings
            .hass=${H}
            .entityId=${e}
            .entry=${M}
          ></ha-more-info-settings>
        </div>
        ${this._renderChild(C)}
      `;if(C.children.length)return this._renderChild(C);switch(C.view){case"info":return i`
          <ha-more-info-info
            .hass=${H}
            .entityId=${e}
            .entry=${M}
            .editMode=${!1}
          ></ha-more-info-info>
        `;case"history":return i`
          <ha-more-info-history-and-logbook
            .hass=${H}
            .entityId=${e}
          ></ha-more-info-history-and-logbook>
        `;case"related":return i`
          <ha-more-info-related
            .hass=${H}
            .entry=${M}
            .params=${{entityId:e}}
          ></ha-more-info-related>
        `;case"add_to":return i`
          <ha-more-info-add-to
            .entityId=${e}
            @add-to-action-selected=${this._goBack}
          ></ha-more-info-add-to>
        `;case"details":return i`
          <ha-more-info-details
            .hass=${H}
            .entry=${M}
            .params=${{entityId:e}}
            .yamlMode=${this._detailsYaml}
          ></ha-more-info-details>
        `;default:return a}}};h=K(K7),u5=new WeakMap,Z5=new WeakMap,S5=new WeakMap,h5=new WeakMap,g5=new WeakMap,f5=new WeakMap,O5=new WeakMap,b5=new WeakMap,y5=new WeakMap,_5=new WeakMap,k5=new WeakMap,v(h,4,"hass",Q7,B,u5),v(h,4,"fixedTop",G7,B,Z5),v(h,4,"_params",z7,B,S5),v(h,4,"_open",U7,B,h5),v(h,4,"_stack",W7,B,g5),v(h,4,"_entries",I7,B,f5),v(h,4,"_fill",N7,B,O5),v(h,4,"_escapeEnabled",$7,B,b5),v(h,4,"_detailsYaml",D7,B,y5),v(h,4,"_contentScrolled",F7,B,_5),v(h,4,"_contentScrollable",R7,B,k5),F(h,B),m(B,"styles",[b0,y0,_0,k0,p2,m2,y`
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
    `]);customElements.get(C1)||customElements.define(C1,B);var q7=L=>{if(!(!L||L.length<2))try{return decodeURIComponent(L.slice(1))}catch{return}},T9=L=>`${L.pathname}${L.search}`,I1=L=>{L.history.replaceState(L.history.state,"",T9(L.location))},Y7=(L,V=500)=>new Promise(C=>{let H=!1,e=()=>{H||(H=!0,L.removeEventListener("popstate",M),clearTimeout(r),L.location.hash&&I1(L),C())},M=()=>e(),r=setTimeout(e,V);L.addEventListener("popstate",M),L.history.back()});var X7=Symbol.for("more-info-popup-card.registry"),w5=class{constructor(V=window){this._win=V}_win;_hosts=new Set;_installed=!1;_consuming=!1;_checkScheduled=!1;register(V){this._install(),this._hosts.add(V),this._scheduleLocationCheck()}unregister(V){this._hosts.delete(V)}get(V){if(!V)return;let C;for(let H of this._hosts)H.isConnected&&H.popupConfig?.popup_id===V&&(C=H);return C}findByEntity(V){let C;for(let H of this._hosts){let e=H.popupConfig;H.isConnected&&e?.replace_more_info&&e.entity===V&&(C=H)}return C}open(V,C){let H=this.get(V);return H?.openPopup(C),!!H}close(V){let C=q2();C&&(!V||C.popupId===V)&&C.close()}toggle(V){q2()?.popupId===V?this.close(V):this.open(V)}_install(){this._installed||(this._installed=!0,this._win.addEventListener("location-changed",this._onLocationChanged),this._win.addEventListener("popstate",this._onPopState),this._win.addEventListener("ll-custom",this._onCustomAction),this._win.addEventListener("hass-more-info",this._onMoreInfo,{capture:!0}))}_scheduleLocationCheck(){this._checkScheduled||(this._checkScheduled=!0,queueMicrotask(()=>{this._checkScheduled=!1;let V=this._hostForHash();V&&!this._consuming&&(I1(this._win),V.openPopup())}))}_hostForHash(){return this.get(q7(this._win.location.hash))}_onLocationChanged=V=>{if(this._consuming)return;let C=this._hostForHash();if(!C)return;let e=!!!V.detail?.replace&&this._win.history.state?.from===this._win.location.pathname;this._consuming=!0,(e?Y7(this._win):Promise.resolve(I1(this._win))).then(()=>{this._consuming=!1,C.openPopup()})};_onPopState=()=>{if(this._consuming)return;let V=this._hostForHash();V&&(I1(this._win),V.openPopup())};_onCustomAction=V=>{let H=V.detail?.more_info_popup;H&&(typeof H=="string"?this.open(H):H.open?this.open(H.open):H.toggle?this.toggle(H.toggle):H.close!==void 0&&this.close(H.close||void 0))};_onMoreInfo=V=>{let C=V.detail;if(!C?.entityId)return;let H=this.findByEntity(C.entityId);if(!H||V.composedPath().some(r=>r.localName===C1))return;V.stopImmediatePropagation();let M=C.view??C.tab;H.openPopup({view:M&&M!=="info"?M:void 0})}},T5=()=>{let L=window;return L[X7]??=new w5(window),L[X7]};var W1=(L,V,C)=>C.map(H=>({value:H,label:u(L,`editor.${V}.${H}`)})),J7=(L,V)=>[{name:"general",type:"expandable",flatten:!0,expanded:!0,iconPath:X1,title:u(L,"editor.section.general"),schema:[{name:"popup_id",required:!0,selector:{text:{prefix:"#"}}},{name:"entity",selector:{entity:{}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]}]},{name:"appearance",type:"expandable",flatten:!0,iconPath:_3,title:u(L,"editor.section.appearance"),schema:[{name:"mode",selector:{select:{mode:"dropdown",options:W1(L,"mode",["auto","dialog","bottom_sheet"])}}},{name:"breadcrumb",selector:{select:{mode:"dropdown",custom_value:!0,options:W1(L,"breadcrumb",["auto","none"])}}},{name:"",type:"grid",schema:[{name:"width",selector:{select:{mode:"dropdown",options:W1(L,"width",["small","medium","large","full","custom"])}}},...V.width==="custom"?[{name:"custom_width",selector:{text:{}}}]:[]]},{name:"",type:"grid",schema:[{name:"height",selector:{select:{mode:"dropdown",options:W1(L,"height",["auto","custom"])}}}]},...V.height==="custom"?[{name:"",type:"grid",schema:[{name:"min_height",selector:{text:{}}},{name:"max_height",selector:{text:{}}}]}]:[],{name:"column_span",selector:{number:{min:1,max:4,step:1,mode:"slider",slider_ticks:!0}}},...V.entity?[{name:"show_header_actions",selector:{boolean:{}}}]:[]]},{name:"behavior",type:"expandable",flatten:!0,iconPath:Y1,title:u(L,"editor.section.behavior"),schema:[...V.entity?[{name:"replace_more_info",selector:{boolean:{}}}]:[],{name:"nested_more_info",selector:{select:{mode:"list",options:W1(L,"nested_more_info",["inline","dialog"])}}},{name:"dismissable",selector:{boolean:{}}},{name:"auto_close",selector:{number:{min:0,max:3600,step:5,mode:"box",unit_of_measurement:"s"}}},{name:"keep_alive",selector:{boolean:{}}}]}],P9={entity:"editor.entity_helper",breadcrumb:"editor.breadcrumb_helper",custom_width:"editor.length_helper",min_height:"editor.length_helper",max_height:"editor.length_helper",column_span:"editor.column_span_helper",replace_more_info:"editor.replace_more_info_helper"},B9={popup_id:"editor.popup_id",entity:"editor.entity",name:"editor.name",icon:"editor.icon",breadcrumb:"editor.breadcrumb",mode:"editor.mode",width:"editor.width",custom_width:"editor.custom_width",height:"editor.height",min_height:"editor.min_height",max_height:"editor.max_height",column_span:"editor.column_span",show_header_actions:"editor.show_header_actions",replace_more_info:"editor.replace_more_info",nested_more_info:"editor.nested_more_info",dismissable:"editor.dismissable",auto_close:"editor.auto_close",keep_alive:"editor.keep_alive"},j7=L=>V=>{if(V.title)return V.title;let C=B9[V.name];return C?u(L,C):V.name},C4=(L,V)=>C=>{if(C.name==="popup_id")return u(L,"editor.popup_id_helper",{id:V.popup_id||"\u2026"});let H=P9[C.name];return H?u(L,H):void 0};var H4=L=>{let V={views:[{type:"sections",sections:[L.section]}]};return{config:V,rawConfig:V,editMode:!0,urlPath:null,mode:"storage",locale:L.locale,enableFullEditMode:()=>{},setEditMode:()=>{},saveConfig:async C=>{let H=C.views?.[0]?.sections?.[0]?.cards??[];L.onSave(structuredClone(H))},deleteConfig:async()=>{},showToast:C=>L.onToast(C)}},V4=L=>{if(!Array.isArray(L))return;let V=L[L.length-1];return typeof V=="number"?V:void 0};var E9=30,R9=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]/g,"_").replace(/^[_-]+/,""),M4,r4,t4,i4,o4,a4,A4,n4,d4,O,P5,B5,E5,R5,F5,D5,$5,N5,U=class extends(d4=k,n4=[w({attribute:!1})],A4=[w({attribute:!1})],a4=[S()],o4=[S()],i4=[S()],t4=[S()],r4=[S()],M4=[S()],d4){constructor(){super(...arguments);x(this,P5,A(O,8,this)),A(O,11,this);x(this,B5,A(O,12,this)),A(O,15,this);x(this,E5,A(O,16,this)),A(O,19,this);x(this,R5,A(O,20,this)),A(O,23,this);x(this,F5,A(O,24,this,!1)),A(O,27,this);x(this,D5,A(O,28,this,!0)),A(O,31,this);x(this,$5,A(O,32,this,!0)),A(O,35,this);m(this,"_section");m(this,"_sectionKey");m(this,"_undo",[]);x(this,N5,A(O,36,this)),A(O,39,this);m(this,"_noticeTimer");m(this,"_undoLast",()=>{let C=this._undo[this._undo.length-1];this._notice=void 0,C&&(this._undo=this._undo.slice(0,-1),this._setCards(C,!1))});m(this,"_toast",C=>{clearTimeout(this._noticeTimer),this._notice={message:C.message,undo:!!C.action&&this._undo.length>0},this._noticeTimer=setTimeout(()=>{this._notice=void 0},C.duration&&C.duration>0?C.duration:6e3)});m(this,"_interceptEdit",{capture:!0,handleEvent:C=>{let H=V4(C.detail?.path);H!==void 0&&(C.stopPropagation(),C.type==="ll-duplicate-card"?this._duplicate(H):this._openEditor(H))}});m(this,"_interceptCreate",{capture:!0,handleEvent:C=>{C.stopPropagation(),this._sub={kind:"add"}}});m(this,"_back",()=>{this._returnToCards()})}setConfig(C){E1(C),this._config=structuredClone(C)}connectedCallback(){super.connectedCallback(),f0().then(()=>{this._ready=!0})}willUpdate(C){(C.has("_config")||C.has("hass"))&&this._config&&this.hass&&this._syncSection()}get _cards(){return this._config?.cards??[]}get _sectionConfig(){return{type:"grid",column_span:this._config?.column_span??B1.column_span,cards:this._cards}}_emit(C){this._config=C,_(this,"config-changed",{config:C})}_setCards(C,H=!0){this._config&&JSON.stringify(C)!==JSON.stringify(this._cards)&&(H&&(this._undo=[...this._undo,structuredClone(this._cards)].slice(-E9)),this._emit({...this._config,cards:C}))}_syncSection(){let C=this._sectionConfig;this._section??=document.createElement("hui-section");let H=this._section;H.hass=this.hass;let e=JSON.stringify(C);e!==this._sectionKey&&(this._sectionKey=e,H.viewIndex=0,H.index=0,H.preview=!0,H.lovelace=H4({section:C,locale:this.hass.locale,onSave:M=>this._setCards(M),onToast:this._toast}),H.config=C)}_copyNative(C){let H=this._section?.firstElementChild??this._section;H&&_(H,"ll-copy-card",{path:[0,0,C]})}_openEditor(C){this._guiMode=!0,this._guiModeAvailable=!0,this._sub={kind:"edit",index:C}}_returnToCards(){this._sub=void 0,this.updateComplete.then(()=>this.renderRoot.querySelector(".cards-header")?.scrollIntoView({block:"start"}))}_duplicate(C){let H=[...this._cards];H.splice(C+1,0,structuredClone(H[C])),this._setCards(H),this._openEditor(C+1)}_delete(C){let H=[...this._cards];H.splice(C,1),this._setCards(H),this._returnToCards(),this._toast({message:u(this.hass,"editor.card_deleted"),action:{text:u(this.hass,"editor.undo"),action:this._undoLast}})}_cut(C){this._copyNative(C);let H=[...this._cards];H.splice(C,1),this._setCards(H),this._returnToCards()}_cardPicked(C){C.stopPropagation();let H=C.detail.config;if(!H?.type)return;let e=[...this._cards,H];this._setCards(e),this._openEditor(e.length-1)}_cardChanged(C){if(C.stopPropagation(),this._sub?.kind!=="edit")return;let H=[...this._cards];H[this._sub.index]=C.detail.config,this._guiModeAvailable=C.detail.guiModeAvailable??!0,this._setCards(H)}_guiModeChanged(C){C.stopPropagation(),this._guiMode=C.detail.guiMode,this._guiModeAvailable=C.detail.guiModeAvailable}_toggleMode(){this.renderRoot.querySelector("hui-card-element-editor")?.toggleMode()}_valueChanged(C){if(C.stopPropagation(),!this._config)return;let H={...C.detail.value};typeof H.popup_id=="string"&&(H.popup_id=R9(H.popup_id));let e={...this._config,...H};for(let[M,r]of Object.entries(B1))e[M]===r&&delete e[M];for(let M of Object.keys(e))(e[M]===""||e[M]===void 0)&&delete e[M];e.width!=="custom"&&delete e.custom_width,e.height!=="custom"&&(delete e.min_height,delete e.max_height),e.entity||(delete e.replace_more_info,delete e.show_header_actions),this._emit(e)}_testPopup(){if(!this._config)return;let C;try{C=n2(E1(this._config))}catch{return}_(this,"show-dialog",{dialogTag:C1,dialogImport:()=>Promise.resolve(),dialogParams:{config:C},addHistory:!0})}render(){return!this.hass||!this._config?a:this._ready?this._sub?.kind==="add"?this._renderAdd():this._sub?.kind==="edit"&&this._cards[this._sub.index]?this._renderEdit(this._sub.index):this._renderMain():i`<ha-spinner size="small"></ha-spinner>`}_renderMain(){let C=this.hass,H=this._config,e={...B1,...H};return i`
      <ha-form
        .hass=${C}
        .data=${e}
        .schema=${J7(C,e)}
        .computeLabel=${j7(C)}
        .computeHelper=${C4(C,H)}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="cards-header">
        <h3>${u(C,"editor.tab.cards")}</h3>
        <ha-button appearance="plain" size="small" @click=${this._testPopup}>
          ${u(C,"editor.test_popup")}
        </ha-button>
      </div>
      ${this._notice?i`
              <ha-alert alert-type="info" class="notice">
                ${this._notice.message}
                ${this._notice.undo?i`<ha-button
                        slot="action"
                        appearance="plain"
                        size="small"
                        @click=${this._undoLast}
                      >
                        ${u(C,"editor.undo")}
                      </ha-button>`:a}
              </ha-alert>
            `:a}
      ${this._cards.length?a:i`<p class="empty">${u(C,"editor.empty")}</p>`}
      <div
        class="grid"
        style=${D({"--column-span":String(H.column_span??1)})}
        @ll-edit-card=${this._interceptEdit}
        @ll-duplicate-card=${this._interceptEdit}
        @ll-create-card=${this._interceptCreate}
      >
        ${this._section}
      </div>
    `}_renderSubHeader(C,H=a){return i`
      <div class="sub-header">
        <ha-icon-button-prev
          .label=${u(this.hass,"editor.back")}
          @click=${this._back}
        ></ha-icon-button-prev>
        <span class="sub-title">${C}</span>
        <div class="sub-actions">${H}</div>
      </div>
    `}_renderAdd(){return i`
      ${this._renderSubHeader(u(this.hass,"editor.add_card"))}
      <hui-card-picker
        .hass=${this.hass}
        .lovelace=${this.lovelace??{views:[]}}
        @config-changed=${this._cardPicked}
      ></hui-card-picker>
    `}_renderEdit(C){let H=this.hass,e=this._cards[C],M=t=>H.localize(`ui.panel.lovelace.editor.edit_card.${t}`),r=i`
      <ha-icon-button
        .label=${M(this._guiMode?"show_code_editor":"show_visual_editor")}
        .path=${this._guiMode?q1:h3}
        .disabled=${!this._guiModeAvailable}
        @click=${this._toggleMode}
      ></ha-icon-button>
      <ha-icon-button
        .label=${M("duplicate")}
        .path=${A3}
        @click=${()=>this._duplicate(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${M("copy")}
        .path=${o3}
        @click=${()=>this._copyNative(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${M("cut")}
        .path=${a3}
        @click=${()=>this._cut(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${M("delete")}
        .path=${d3}
        @click=${()=>this._delete(C)}
      ></ha-icon-button>
    `;return i`
      ${this._renderSubHeader(u(H,"editor.edit_card"),r)}
      <hui-card-element-editor
        .hass=${H}
        .lovelace=${this.lovelace}
        .value=${e}
        .sectionConfig=${this._sectionConfig}
        show-visibility-tab
        @config-changed=${this._cardChanged}
        @GUImode-changed=${this._guiModeChanged}
      ></hui-card-element-editor>
    `}};O=K(d4),P5=new WeakMap,B5=new WeakMap,E5=new WeakMap,R5=new WeakMap,F5=new WeakMap,D5=new WeakMap,$5=new WeakMap,N5=new WeakMap,v(O,4,"hass",n4,U,P5),v(O,4,"lovelace",A4,U,B5),v(O,4,"_config",a4,U,E5),v(O,4,"_sub",o4,U,R5),v(O,4,"_ready",i4,U,F5),v(O,4,"_guiMode",t4,U,D5),v(O,4,"_guiModeAvailable",r4,U,$5),v(O,4,"_notice",M4,U,N5),F(O,U),m(U,"styles",y`
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
  `);customElements.get(P1)||customElements.define(P1,U);var p4={button:"button.press",input_button:"input_button.press",scene:"scene.turn_on",script:"script.turn_on"},m4=["off","closed","locked","unavailable","unknown","idle","standby","paused","docked"],l4=600,U1=L=>{if(L.type)return L.type;if(L.attribute)return"select";let V=L.entity?l(L.entity):"";return S1.includes(V)?"select":v7.includes(V)?"number":x7.includes(V)?"toggle":"action"},s4=L=>L?.map(V=>typeof V=="string"?{value:V}:{...V,value:String(V.value)}),I5=L=>{let[V,C]=L.split(".",2);return[V,C]};var z1="more-info-controls-card",v4,x4,c4,u4,Z4,z,W5,U5,z5,G5,e1=class extends(Z4=k,u4=[w({attribute:!1})],c4=[S()],x4=[S()],v4=[S()],Z4){constructor(){super(...arguments);x(this,W5,A(z,8,this)),A(z,11,this);x(this,U5,A(z,12,this)),A(z,15,this);x(this,z5,A(z,16,this,!1)),A(z,19,this);x(this,G5,A(z,20,this,{})),A(z,23,this);m(this,"_timers",{})}static getConfigForm(){return h7()}static getStubConfig(C,H){let e=H.find(o=>o.startsWith("light.")&&C.states[o]?.attributes.effect_list),M=H.find(o=>S1.includes(l(o))),r=H.find(o=>o.startsWith("switch.")),t=[];return e&&t.push({entity:e,attribute:"effect"}),M&&t.push({entity:M}),r&&t.push({entity:r}),!t.length&&H[0]&&t.push({entity:H[0]}),{type:`custom:${z1}`,controls:t}}setConfig(C){if(!Array.isArray(C?.controls))throw new Error('"controls" must be a list');C.controls.forEach((H,e)=>{if(!H||typeof H!="object")throw new Error(`Control ${e+1} is invalid`);let M=U1(H);if(M!=="action"&&M!=="button"&&!H.entity)throw new Error(`Control ${e+1} needs an "entity"`);if(H.attribute&&H.attribute!=="state"&&!$1[H.attribute]&&!H.options)throw new Error(`Control ${e+1}: unknown attribute "${H.attribute}"; add "options" and "perform_action"`)}),this._config=C}connectedCallback(){super.connectedCallback(),u1("light",["ha-more-info-control-select-container","ha-control-select-menu"]).then(()=>{this._ready=!0})}disconnectedCallback(){super.disconnectedCallback(),Object.values(this._timers).forEach(clearTimeout),this._timers={}}getCardSize(){return 1}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}_stateObj(C){return C.entity?this.hass?.states[C.entity]:void 0}_selectSpec(C,H){if(C.attribute)return C.attribute==="state"?s7:$1[C.attribute]??{options:()=>[],value:e=>e.attributes[C.attribute]==null?void 0:String(e.attributes[C.attribute]),service:()=>["",""],data:e=>({[C.data_key??C.attribute]:e}),icon:c2.icon};if(S1.includes(l(H.entity_id)))return c2;if(C.options&&C.perform_action)return{options:()=>[],value:()=>{},service:()=>["",""],data:e=>({[C.data_key??"value"]:e}),icon:c2.icon,attributeIcons:!1}}_call(C,H,e,M){let[r,t]=C.perform_action?I5(C.perform_action):H;if(!r||!t)return;let o={...C.entity?{entity_id:C.entity}:{},...C.perform_action&&C.data_key?{[C.data_key]:M}:e,...C.data};this.hass.callService(r,t,o)}_label(C,H){return C.name?C.name:H?C.attribute&&C.attribute!=="state"?this.hass.formatEntityAttributeName(H,C.attribute):H1(H):""}_icon(C,H,e,M){return C.icon?i`<ha-icon
        slot=${M??a}
        .icon=${C.icon}
      ></ha-icon>`:e?i`<ha-svg-icon
        slot=${M??a}
        .path=${e}
      ></ha-svg-icon>`:i`<ha-state-icon
      slot=${M??a}
      .hass=${this.hass}
      .stateObj=${H}
    ></ha-state-icon>`}_renderSelect(C,H){let e=this.hass,M=this._selectSpec(C,H);if(!M)return a;let r=s4(C.options),t=r?r.map(s=>s.value):M.options(H),o=C.attribute&&C.attribute!=="state"?C.attribute:void 0,d=s=>{let Z=r?.find(T=>T.value===s);return Z?.name?Z.name:M.formatAsState||!o?e.formatEntityState(H,s):e.formatEntityAttributeValue(H,o,s==="true"?!0:s==="false"?!1:s)},p=t.map(s=>{let Z=r?.find(P=>P.value===s)?.icon,T=Z?void 0:M.optionIcons?.[s];return{value:s,label:d(s),...Z?{icon:Z}:{},...T?{iconPath:T}:{}}}),n=s=>o&&!M.formatAsState?i`<ha-attribute-icon
            slot="icon"
            .hass=${e}
            .stateObj=${H}
            .attribute=${o}
            .attributeValue=${s}
          ></ha-attribute-icon>`:i`<ha-state-icon
            slot="icon"
            .hass=${e}
            .stateObj=${H}
            .stateValue=${s}
          ></ha-state-icon>`,c=!o&&S1.includes(l(H.entity_id));return i`
      <ha-control-select-menu
        .label=${this._label(C,H)}
        .value=${M.value(H)}
        .options=${p}
        .renderIcon=${C.icon||M.attributeIcons===!1?void 0:n}
        .disabled=${H.state==="unavailable"}
        @wa-select=${s=>{let Z=s.detail?.item?.value;Z===void 0||Z===M.value(H)||this._call(C,M.service(H),M.data(Z),Z)}}
      >
        ${this._icon(C,c?H:void 0,c?void 0:M.icon,"icon")}
      </ha-control-select-menu>
    `}_renderToggle(C,H){let e=l(H.entity_id),M=!m4.includes(H.state),r=H.state==="unavailable",t=()=>{C.perform_action?this._call(C,["",""],{},void 0):e==="lock"?this.hass.callService("lock",M?"lock":"unlock",{entity_id:H.entity_id}):e==="cover"||e==="valve"?this.hass.callService(e,"toggle",{entity_id:H.entity_id}):this.hass.callService("homeassistant","toggle",{entity_id:H.entity_id})};return i`
      <button
        class=${Y({chip:!0,toggle:!0,active:M})}
        role="switch"
        aria-checked=${String(M)}
        ?disabled=${r}
        @click=${t}
      >
        <div class="icon">${this._icon(C,H,void 0)}</div>
        <div class="content">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${this.hass.formatEntityState(H)}</p>
        </div>
      </button>
    `}_renderNumber(C,H,e){let M=this.hass,r=H.attributes,t=C.min??Number(r.min??0),o=C.max??Number(r.max??100),d=C.step??Number(r.step??1),p=this._pending[e]??Number(C.attribute?r[C.attribute]:H.state),n=Number.isFinite(p),c=H.state==="unavailable"||!n,s=(String(d).split(".")[1]??"").length,Z=n&&(this._pending[e]!==void 0||C.attribute)?`${p.toFixed(s)}${r.unit_of_measurement?` ${r.unit_of_measurement}`:""}`:M.formatEntityState(H),T=P=>{let Q=Math.min(o,Math.max(t,Number((p+P*d).toFixed(s))));Q!==p&&(this._pending={...this._pending,[e]:Q},clearTimeout(this._timers[e]),this._timers[e]=setTimeout(()=>{let E=l(H.entity_id);this._call(C,[E,"set_value"],{value:Q},Q);let r1={...this._pending};delete r1[e],this._pending=r1},l4))};return i`
      <div
        class="chip number"
        ?disabled=${c}
        role="group"
        aria-label=${this._label(C,H)}
      >
        <ha-icon-button
          .label=${M.localize("ui.card.counter.actions.decrement")||"\u2212"}
          .path=${b3}
          .disabled=${c||p<=t}
          @click=${()=>T(-1)}
        ></ha-icon-button>
        <div class="content center">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${Z}</p>
        </div>
        <ha-icon-button
          .label=${M.localize("ui.card.counter.actions.increment")||"+"}
          .path=${T3}
          .disabled=${c||p>=o}
          @click=${()=>T(1)}
        ></ha-icon-button>
      </div>
    `}_runAction(C,H){if(H.action!=="none"){if(H.action==="more-info"){let e=H.entity??C.entity;e&&_(this,"hass-more-info",{entityId:e});return}_(this,"hass-action",{config:{entity:C.entity,tap_action:H},action:"tap"})}}_renderButton(C,H){let e=C.entity?l(C.entity):"",M=()=>{if(C.tap_action){this._runAction(C,C.tap_action);return}let r=C.perform_action??p4[e]??(C.entity?"homeassistant.toggle":void 0);if(!r)return;let[t,o]=I5(r);this.hass.callService(t,o,{...C.entity?{entity_id:C.entity}:{},...C.data})};return i`
      <ha-control-button
        .label=${this._label(C,H)}
        .disabled=${H?.state==="unavailable"}
        @click=${M}
      >
        ${this._icon(C,H,void 0)}
      </ha-control-button>
    `}_renderAction(C,H){let e=C.tap_action??{action:H?"more-info":"none"},M=C.show_arrow??["navigate","more-info"].includes(e.action),r=C.value??(H?this.hass.formatEntityState(H):"");return i`
      <button class="chip action" @click=${()=>this._runAction(C,e)}>
        <div class="icon">${this._icon(C,H,void 0)}</div>
        <div class="content">
          <p class="label">${this._label(C,H)}</p>
          ${r?i`<p class="value">${r}</p>`:a}
        </div>
        ${M?i`<div class="icon">
                <ha-svg-icon .path=${i3}></ha-svg-icon>
              </div>`:a}
      </button>
    `}_renderItem(C,H){let e=this._stateObj(C),M=U1(C);if(M==="action")return this._renderAction(C,e);if(M==="button")return this._renderButton(C,e);if(!e)return i`<div class="chip" disabled>
        <div class="content">
          <p class="label">${C.name??C.entity}</p>
          <p class="value">
            ${this.hass.localize("state.default.unavailable")}
          </p>
        </div>
      </div>`;switch(M){case"select":return this._renderSelect(C,e);case"toggle":return this._renderToggle(C,e);case"number":return this._renderNumber(C,e,H);default:return a}}_renderWrapped(C){let H=C.length;return i`
      <div class="wrap-controls">
        <div
          class=${Y({"wrap-scroll":!0,[`items-${H}`]:!0,multiline:H>=4})}
        >
          ${C}
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return a;let C=this._config.appearance??"plain",H=this._config.controls.map((r,t)=>({item:r,index:t})),e=H.filter(({item:r})=>U1(r)==="button"),M=H.filter(({item:r})=>U1(r)!=="button");return i`
      <ha-card class=${C}>
        ${this._ready?H.length?i`
                  ${e.length?i`<div class="buttons">
                          <ha-control-button-group>
                            ${e.map(({item:r,index:t})=>this._renderItem(r,t))}
                          </ha-control-button-group>
                        </div>`:a}
                  ${M.length?this._config.wrap?this._renderWrapped(M.map(({item:r,index:t})=>this._renderItem(r,t))):i`<ha-more-info-control-select-container>
                            ${M.map(({item:r,index:t})=>this._renderItem(r,t))}
                          </ha-more-info-control-select-container>`:a}
                `:i`<p class="empty">
                  ${u(this.hass,"controls.empty")}
                </p>`:a}
      </ha-card>
    `}};z=K(Z4),W5=new WeakMap,U5=new WeakMap,z5=new WeakMap,G5=new WeakMap,v(z,4,"hass",u4,e1,W5),v(z,4,"_config",c4,e1,U5),v(z,4,"_ready",x4,e1,z5),v(z,4,"_pending",v4,e1,G5),F(z,e1),m(e1,"styles",[S2,g7,y`
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
    `]);customElements.get(z1)||customElements.define(z1,e1);var S4,h4,g4,f4,O4,G,Q5,K5,q5,Y5,M1=class extends(O4=k,f4=[w({attribute:!1})],g4=[w({attribute:!1})],h4=[S()],S4=[S()],O4){constructor(){super(...arguments);x(this,Q5,A(G,8,this)),A(G,11,this);x(this,K5,A(G,12,this)),A(G,15,this);x(this,q5,A(G,16,this)),A(G,19,this);x(this,Y5,A(G,20,this,"hidden")),A(G,23,this);m(this,"connectedWhileHidden",!0);m(this,"_preview",!1);m(this,"_previewSection");m(this,"_previewSectionKey")}static async getConfigElement(){return document.createElement(P1)}static getStubConfig(C,H){let e=H.find(o=>o.startsWith("light."))??H[0],M=e?C.states[e]:void 0,r=M?i0(H1(M)):"",t=Math.random().toString(36).slice(2,6);return{type:`custom:${N2}`,popup_id:r?`${r}_${t}`:`popup_${t}`,cards:[]}}get preview(){return this._preview}set preview(C){this._preview=!!C,this._syncSurface()}get popupConfig(){return this._config}setConfig(C){this._config=n2(E1(C)),this._syncSurface()}getCardSize(){return this._surface==="hidden"?0:this._surface==="preview"?6:1}getGridOptions(){return this._computeSurface()==="preview"?{columns:"full",rows:"auto"}:{columns:6,rows:1,min_columns:3,max_rows:1}}openPopup(C){let H=this._config;H&&g0().then(e=>{if(e.includes("ha-adaptive-dialog")||e.includes("hui-section")){_(this,"hass-notification",{message:u(this.hass,"card.missing_elements")});return}_(this,"show-dialog",{dialogTag:C1,dialogImport:()=>Promise.resolve(),dialogParams:{config:H,view:C?.view},addHistory:!0})})}connectedCallback(){super.connectedCallback(),T5().register(this),this._syncSurface()}disconnectedCallback(){super.disconnectedCallback(),T5().unregister(this)}_computeSurface(){return this._preview?this.closest("hui-card-edit-mode, hui-card-options")?"placeholder":"preview":"hidden"}_syncSurface(){let C=this._computeSurface();C!==this._surface&&(this._surface=C);let H=C==="hidden";this.hasAttribute("hidden")!==H&&(this.toggleAttribute("hidden",H),this.isConnected&&_(this,"card-visibility-changed",{value:!H}))}willUpdate(C){C.has("hass")&&this._previewSection&&(this._previewSection.hass=this.hass)}render(){return!this._config||!this.hass||this._surface==="hidden"?a:O0(this.hass.config.version)?this._surface==="placeholder"?this._renderPlaceholder(this._config):this._renderPreview(this._config):i`<ha-alert alert-type="warning">
        ${u(this.hass,"card.unsupported_version",{version:F1.join(".")})}
      </ha-alert>`}_renderPlaceholder(C){let H=this.hass,e=C.entity?H.states[C.entity]:void 0,M=C.name??(e?H1(e):C.popup_id),r=C.cards.length,t=r===1?u(H,"card.cards_count_one"):u(H,"card.cards_count",{count:r});return i`
      <ha-card class="placeholder">
        <ha-tile-container>
          <ha-tile-icon
            slot="icon"
            .icon=${C.icon}
            .iconPath=${C.icon?void 0:X1}
          >
            ${C.icon||!e?a:i`<ha-state-icon
                    slot="icon"
                    .stateObj=${e}
                    .hass=${H}
                  ></ha-state-icon>`}
          </ha-tile-icon>
          <ha-tile-info slot="info">
            <span slot="primary">${M}</span>
            <span
              slot="secondary"
              class="secondary"
              title=${u(H,"card.hidden_hint",{id:C.popup_id})}
            >
              <ha-svg-icon .path=${l3}></ha-svg-icon>
              #${C.popup_id} · ${t}
            </span>
          </ha-tile-info>
        </ha-tile-container>
      </ha-card>
    `}_renderPreview(C){let H=this.hass,e={type:"grid",column_span:C.column_span,cards:C.cards},M=JSON.stringify(e);this._previewSection??=document.createElement("hui-section"),this._previewSection.hass=H,this._previewSectionKey!==M&&(this._previewSectionKey=M,this._previewSection.config=e);let r=l2(H,C,{entityId:C.entity,view:"root",children:[]});return i`
      <div class="surface" inert>
        <ha-dialog-header>
          <ha-icon-button
            slot="navigationIcon"
            .label=${H.localize("ui.common.close")}
            .path=${K1}
          ></ha-icon-button>
          ${s2(H,r,"title")}
        </ha-dialog-header>
        <div
          class="body"
          style=${D({"--column-span":String(C.column_span)})}
        >
          ${this._previewSection}
        </div>
      </div>
    `}};G=K(O4),Q5=new WeakMap,K5=new WeakMap,q5=new WeakMap,Y5=new WeakMap,v(G,4,"hass",f4,M1,Q5),v(G,4,"layout",g4,M1,K5),v(G,4,"_config",h4,M1,q5),v(G,4,"_surface",S4,M1,Y5),F(G,M1),m(M1,"styles",[p2,m2,y`
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
    `]);customElements.get(I2)||(customElements.define(I2,M1),window.customCards=window.customCards??[],window.customCards.push({type:N2,name:u(void 0,"card.name"),description:u(void 0,"card.description"),preview:!1,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),window.customCards.push({type:N1,name:u(void 0,"state_card.name"),description:u(void 0,"state_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"},{type:z1,name:u(void 0,"controls_card.name"),description:u(void 0,"controls_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),console.info("%c MORE-INFO-POPUP-CARD %c 0.1 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;"));export{M1 as MoreInfoPopupCard};
//# sourceMappingURL=more-info-popup-card.js.map
