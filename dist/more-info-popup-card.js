var n4=Object.create;var u2=Object.defineProperty;var d4=Object.getOwnPropertyDescriptor;var z5=(L,V)=>(V=Symbol[L])?V:Symbol.for("Symbol."+L),d1=L=>{throw TypeError(L)};var G5=(L,V,C)=>V in L?u2(L,V,{enumerable:!0,configurable:!0,writable:!0,value:C}):L[V]=C;var I5=(L,V)=>u2(L,"name",{value:V,configurable:!0});var Q=L=>[,,,n4(L?.[z5("metadata")]??null)],Q5=["class","method","getter","setter","accessor","field","value","get","set"],u1=L=>L!==void 0&&typeof L!="function"?d1("Function expected"):L,p4=(L,V,C,H,M)=>({kind:Q5[L],name:V,metadata:H,addInitializer:e=>C._?d1("Already initialized"):M.push(u1(e||null))}),z=(L,V)=>G5(V,z5("metadata"),L[3]),n=(L,V,C,H)=>{for(var M=0,e=L[V>>1],r=e&&e.length;M<r;M++)V&1?e[M].call(C):H=e[M].call(C,H);return H},s=(L,V,C,H,M,e)=>{var r,t,i,d,p,A=V&7,c=!!(V&8),v=!!(V&16),Z=A>3?L.length+1:A?c?1:2:0,w=Q5[A+5],k=A>3&&(L[Z-1]=[]),U=L[Z]||(L[Z]=[]),B=A&&(!v&&!c&&(M=M.prototype),A<5&&(A>3||!v)&&d4(A<4?M:{get[C](){return W5(this,e)},set[C](y){return U5(this,e,y)}},C));A?v&&A<4&&I5(e,(A>2?"set ":A>1?"get ":"")+C):I5(M,C);for(var L1=H.length-1;L1>=0;L1--)d=p4(A,C,i={},L[3],U),A&&(d.static=c,d.private=v,p=d.access={has:v?y=>m4(M,y):y=>C in y},A^3&&(p.get=v?y=>(A^1?W5:l4)(y,M,A^4?e:B.get):y=>y[C]),A>2&&(p.set=v?(y,c1)=>U5(y,M,c1,A^4?e:B.set):(y,c1)=>y[C]=c1)),t=(0,H[L1])(A?A<4?v?e:B[w]:A>4?void 0:{get:B.get,set:B.set}:M,d),i._=1,A^4||t===void 0?u1(t)&&(A>4?k.unshift(t):A?v?e=t:B[w]=t:M=t):typeof t!="object"||t===null?d1("Object expected"):(u1(r=t.get)&&(B.get=r),u1(r=t.set)&&(B.set=r),u1(r=t.init)&&k.unshift(r));return A||z(L,M),B&&u2(M,C,B),v?A^4?e:B:M},m=(L,V,C)=>G5(L,typeof V!="symbol"?V+"":V,C),Z2=(L,V,C)=>V.has(L)||d1("Cannot "+C),m4=(L,V)=>Object(V)!==V?d1('Cannot use the "in" operator on this value'):L.has(V),W5=(L,V,C)=>(Z2(L,V,"read from private field"),C?C.call(L):V.get(L)),x=(L,V,C)=>V.has(L)?d1("Cannot add the same private member more than once"):V instanceof WeakSet?V.add(L):V.set(L,C),U5=(L,V,C,H)=>(Z2(L,V,"write to private field"),H?H.call(L,C):V.set(L,C),C),l4=(L,V,C)=>(Z2(L,V,"access private method"),C);var K5="M17 18H21V16H17V14L14 17L17 20V18M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var S2="M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14";var W1="M6 14H9L5 18L1 14H4C4 11.3 5.7 6.6 11 6.1V8.1C7.6 8.6 6 11.9 6 14M20 14C20 11.3 18.3 6.6 13 6.1V8.1C16.4 8.7 18 11.9 18 14H15L19 18L23 14H20Z",q5="M13 8.1V6.1C18.3 6.6 20 11.4 20 14H23L20.1 16.9L17.2 14H18C18 11.9 16.4 8.6 13 8.1M7.8 7.1L2.4 1.7L1.1 3L6.3 8.2C4.7 10 4 12.4 4 14H1L5 18L9 14H6C6 12.7 6.6 11 7.9 9.7L20.9 22.7L22.2 21.4L9.3 8.7L7.8 7.1M11 6.1L9.5 6.4L11 7.8V6.1Z";var Y5="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";var X5="M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z";var J5="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var j5="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var U1="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var z1="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z";var G1="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z";var C3="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",H3="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z",V3="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z";var L3="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74";var M3="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var e3="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z";var Q1="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z";var r3="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";var t3="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";var Z1="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";var o3="M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z";var i3="M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z";var a3="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z";var h2="M15 13L11 17V14H2V12H11V9L15 13M5 20V16H7V18H17V10.19L12 5.69L7.21 10H4.22L12 3L22 12H19V20H5Z";var A3="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";var n3="M12,2C9.76,2 7.78,3.05 6.5,4.68L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z";var d3="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var p3="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z";var m3="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z";var l3="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z";var v3="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";var s3="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";var x3="M19,13H5V11H19V13Z";var c3="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z";var u3="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z";var g2="M14,19H18V5H14M6,19H10V5H6V19Z";var Z3="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var K1="M8,5.14V19.14L19,12.14L8,5.14Z";var S3="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5";var h3="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var f2="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z";var S1="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var g3="M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z";var q1="M18,18H6V6H18V18Z";var f3="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z";var O3="M22.08,11.04H20.08V4H13.05V2H11.04V4H4V11.04H2V13.05H4V20.08H11.04V22.08H13.05V20.08H20.08V13.05H22.08V11.04M18.07,18.07H13.05V16.06H11.04V18.07H6V13.05H8.03V11.04H6V6H11.04V8.03H13.05V6H18.07V11.04H16.06V13.05H18.07V18.07M13.05,12.05A1,1 0 0,1 12.05,13.05C11.5,13.05 11.04,12.6 11.04,12.05C11.04,11.5 11.5,11.04 12.05,11.04C12.6,11.04 13.05,11.5 13.05,12.05Z";var y3="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z";var b3="M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";var _3="M18,11H14.82C14.4,9.84 13.3,9 12,9C10.7,9 9.6,9.84 9.18,11H6C5.67,11 4,10.9 4,9V8C4,6.17 5.54,6 6,6H16.18C16.6,7.16 17.7,8 19,8A3,3 0 0,0 22,5A3,3 0 0,0 19,2C17.7,2 16.6,2.84 16.18,4H6C4.39,4 2,5.06 2,8V9C2,11.94 4.39,13 6,13H9.18C9.6,14.16 10.7,15 12,15C13.3,15 14.4,14.16 14.82,13H18C18.33,13 20,13.1 20,15V16C20,17.83 18.46,18 18,18H7.82C7.4,16.84 6.3,16 5,16A3,3 0 0,0 2,19A3,3 0 0,0 5,22C6.3,22 7.4,21.16 7.82,20H18C19.61,20 22,18.93 22,16V15C22,12.07 19.61,11 18,11M19,4A1,1 0 0,1 20,5A1,1 0 0,1 19,6A1,1 0 0,1 18,5A1,1 0 0,1 19,4M5,20A1,1 0 0,1 4,19A1,1 0 0,1 5,18A1,1 0 0,1 6,19A1,1 0 0,1 5,20Z";var p1="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";var w3="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var k3="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var T3="M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z";var Y1=globalThis,X1=Y1.ShadowRoot&&(Y1.ShadyCSS===void 0||Y1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O2=Symbol(),P3=new WeakMap,h1=class{constructor(V,C,H){if(this._$cssResult$=!0,H!==O2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=V,this.t=C}get styleSheet(){let V=this.o,C=this.t;if(X1&&V===void 0){let H=C!==void 0&&C.length===1;H&&(V=P3.get(C)),V===void 0&&((this.o=V=new CSSStyleSheet).replaceSync(this.cssText),H&&P3.set(C,V))}return V}toString(){return this.cssText}},B3=L=>new h1(typeof L=="string"?L:L+"",void 0,O2),b=(L,...V)=>{let C=L.length===1?L[0]:V.reduce((H,M,e)=>H+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(M)+L[e+1],L[0]);return new h1(C,L,O2)},E3=(L,V)=>{if(X1)L.adoptedStyleSheets=V.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of V){let H=document.createElement("style"),M=Y1.litNonce;M!==void 0&&H.setAttribute("nonce",M),H.textContent=C.cssText,L.appendChild(H)}},y2=X1?L=>L:L=>L instanceof CSSStyleSheet?(V=>{let C="";for(let H of V.cssRules)C+=H.cssText;return B3(C)})(L):L;var{is:v4,defineProperty:s4,getOwnPropertyDescriptor:x4,getOwnPropertyNames:c4,getOwnPropertySymbols:u4,getPrototypeOf:Z4}=Object,J1=globalThis,R3=J1.trustedTypes,S4=R3?R3.emptyScript:"",h4=J1.reactiveElementPolyfillSupport,g1=(L,V)=>L,f1={toAttribute(L,V){switch(V){case Boolean:L=L?S4:null;break;case Object:case Array:L=L==null?L:JSON.stringify(L)}return L},fromAttribute(L,V){let C=L;switch(V){case Boolean:C=L!==null;break;case Number:C=L===null?null:Number(L);break;case Object:case Array:try{C=JSON.parse(L)}catch{C=null}}return C}},j1=(L,V)=>!v4(L,V),F3={attribute:!0,type:String,converter:f1,reflect:!1,useDefault:!1,hasChanged:j1};Symbol.metadata??=Symbol("metadata"),J1.litPropertyMetadata??=new WeakMap;var Y=class extends HTMLElement{static addInitializer(V){this._$Ei(),(this.l??=[]).push(V)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(V,C=F3){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(V)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(V,C),!C.noAccessor){let H=Symbol(),M=this.getPropertyDescriptor(V,H,C);M!==void 0&&s4(this.prototype,V,M)}}static getPropertyDescriptor(V,C,H){let{get:M,set:e}=x4(this.prototype,V)??{get(){return this[C]},set(r){this[C]=r}};return{get:M,set(r){let t=M?.call(this);e?.call(this,r),this.requestUpdate(V,t,H)},configurable:!0,enumerable:!0}}static getPropertyOptions(V){return this.elementProperties.get(V)??F3}static _$Ei(){if(this.hasOwnProperty(g1("elementProperties")))return;let V=Z4(this);V.finalize(),V.l!==void 0&&(this.l=[...V.l]),this.elementProperties=new Map(V.elementProperties)}static finalize(){if(this.hasOwnProperty(g1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g1("properties"))){let C=this.properties,H=[...c4(C),...u4(C)];for(let M of H)this.createProperty(M,C[M])}let V=this[Symbol.metadata];if(V!==null){let C=litPropertyMetadata.get(V);if(C!==void 0)for(let[H,M]of C)this.elementProperties.set(H,M)}this._$Eh=new Map;for(let[C,H]of this.elementProperties){let M=this._$Eu(C,H);M!==void 0&&this._$Eh.set(M,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(V){let C=[];if(Array.isArray(V)){let H=new Set(V.flat(1/0).reverse());for(let M of H)C.unshift(y2(M))}else V!==void 0&&C.push(y2(V));return C}static _$Eu(V,C){let H=C.attribute;return H===!1?void 0:typeof H=="string"?H:typeof V=="string"?V.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(V=>this.enableUpdating=V),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(V=>V(this))}addController(V){(this._$EO??=new Set).add(V),this.renderRoot!==void 0&&this.isConnected&&V.hostConnected?.()}removeController(V){this._$EO?.delete(V)}_$E_(){let V=new Map,C=this.constructor.elementProperties;for(let H of C.keys())this.hasOwnProperty(H)&&(V.set(H,this[H]),delete this[H]);V.size>0&&(this._$Ep=V)}createRenderRoot(){let V=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return E3(V,this.constructor.elementStyles),V}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(V=>V.hostConnected?.())}enableUpdating(V){}disconnectedCallback(){this._$EO?.forEach(V=>V.hostDisconnected?.())}attributeChangedCallback(V,C,H){this._$AK(V,H)}_$ET(V,C){let H=this.constructor.elementProperties.get(V),M=this.constructor._$Eu(V,H);if(M!==void 0&&H.reflect===!0){let e=(H.converter?.toAttribute!==void 0?H.converter:f1).toAttribute(C,H.type);this._$Em=V,e==null?this.removeAttribute(M):this.setAttribute(M,e),this._$Em=null}}_$AK(V,C){let H=this.constructor,M=H._$Eh.get(V);if(M!==void 0&&this._$Em!==M){let e=H.getPropertyOptions(M),r=typeof e.converter=="function"?{fromAttribute:e.converter}:e.converter?.fromAttribute!==void 0?e.converter:f1;this._$Em=M;let t=r.fromAttribute(C,e.type);this[M]=t??this._$Ej?.get(M)??t,this._$Em=null}}requestUpdate(V,C,H,M=!1,e){if(V!==void 0){let r=this.constructor;if(M===!1&&(e=this[V]),H??=r.getPropertyOptions(V),!((H.hasChanged??j1)(e,C)||H.useDefault&&H.reflect&&e===this._$Ej?.get(V)&&!this.hasAttribute(r._$Eu(V,H))))return;this.C(V,C,H)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(V,C,{useDefault:H,reflect:M,wrapped:e},r){H&&!(this._$Ej??=new Map).has(V)&&(this._$Ej.set(V,r??C??this[V]),e!==!0||r!==void 0)||(this._$AL.has(V)||(this.hasUpdated||H||(C=void 0),this._$AL.set(V,C)),M===!0&&this._$Em!==V&&(this._$Eq??=new Set).add(V))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let V=this.scheduleUpdate();return V!=null&&await V,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[M,e]of this._$Ep)this[M]=e;this._$Ep=void 0}let H=this.constructor.elementProperties;if(H.size>0)for(let[M,e]of H){let{wrapped:r}=e,t=this[M];r!==!0||this._$AL.has(M)||t===void 0||this.C(M,void 0,e,t)}}let V=!1,C=this._$AL;try{V=this.shouldUpdate(C),V?(this.willUpdate(C),this._$EO?.forEach(H=>H.hostUpdate?.()),this.update(C)):this._$EM()}catch(H){throw V=!1,this._$EM(),H}V&&this._$AE(C)}willUpdate(V){}_$AE(V){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(V)),this.updated(V)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(V){return!0}update(V){this._$Eq&&=this._$Eq.forEach(C=>this._$ET(C,this[C])),this._$EM()}updated(V){}firstUpdated(V){}};Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[g1("elementProperties")]=new Map,Y[g1("finalized")]=new Map,h4?.({ReactiveElement:Y}),(J1.reactiveElementVersions??=[]).push("2.1.2");var _2=globalThis,D3=L=>L,C2=_2.trustedTypes,$3=C2?C2.createPolicy("lit-html",{createHTML:L=>L}):void 0,w2="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,k2="?"+X,g4=`<${k2}>`,o1=document,y1=()=>o1.createComment(""),b1=L=>L===null||typeof L!="object"&&typeof L!="function",T2=Array.isArray,G3=L=>T2(L)||typeof L?.[Symbol.iterator]=="function",b2=`[ 	
\f\r]`,O1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N3=/-->/g,I3=/>/g,r1=RegExp(`>|${b2}(?:([^\\s"'>=/]+)(${b2}*=${b2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W3=/'/g,U3=/"/g,Q3=/^(?:script|style|textarea|title)$/i,P2=L=>(V,...C)=>({_$litType$:L,strings:V,values:C}),o=P2(1),S9=P2(2),h9=P2(3),G=Symbol.for("lit-noChange"),a=Symbol.for("lit-nothing"),z3=new WeakMap,t1=o1.createTreeWalker(o1,129);function K3(L,V){if(!T2(L)||!L.hasOwnProperty("raw"))throw Error("invalid template strings array");return $3!==void 0?$3.createHTML(V):V}var q3=(L,V)=>{let C=L.length-1,H=[],M,e=V===2?"<svg>":V===3?"<math>":"",r=O1;for(let t=0;t<C;t++){let i=L[t],d,p,A=-1,c=0;for(;c<i.length&&(r.lastIndex=c,p=r.exec(i),p!==null);)c=r.lastIndex,r===O1?p[1]==="!--"?r=N3:p[1]!==void 0?r=I3:p[2]!==void 0?(Q3.test(p[2])&&(M=RegExp("</"+p[2],"g")),r=r1):p[3]!==void 0&&(r=r1):r===r1?p[0]===">"?(r=M??O1,A=-1):p[1]===void 0?A=-2:(A=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?r1:p[3]==='"'?U3:W3):r===U3||r===W3?r=r1:r===N3||r===I3?r=O1:(r=r1,M=void 0);let v=r===r1&&L[t+1].startsWith("/>")?" ":"";e+=r===O1?i+g4:A>=0?(H.push(d),i.slice(0,A)+w2+i.slice(A)+X+v):i+X+(A===-2?t:v)}return[K3(L,e+(L[C]||"<?>")+(V===2?"</svg>":V===3?"</math>":"")),H]},_1=class L{constructor({strings:V,_$litType$:C},H){let M;this.parts=[];let e=0,r=0,t=V.length-1,i=this.parts,[d,p]=q3(V,C);if(this.el=L.createElement(d,H),t1.currentNode=this.el.content,C===2||C===3){let A=this.el.content.firstChild;A.replaceWith(...A.childNodes)}for(;(M=t1.nextNode())!==null&&i.length<t;){if(M.nodeType===1){if(M.hasAttributes())for(let A of M.getAttributeNames())if(A.endsWith(w2)){let c=p[r++],v=M.getAttribute(A).split(X),Z=/([.?@])?(.*)/.exec(c);i.push({type:1,index:e,name:Z[2],strings:v,ctor:Z[1]==="."?V2:Z[1]==="?"?L2:Z[1]==="@"?M2:a1}),M.removeAttribute(A)}else A.startsWith(X)&&(i.push({type:6,index:e}),M.removeAttribute(A));if(Q3.test(M.tagName)){let A=M.textContent.split(X),c=A.length-1;if(c>0){M.textContent=C2?C2.emptyScript:"";for(let v=0;v<c;v++)M.append(A[v],y1()),t1.nextNode(),i.push({type:2,index:++e});M.append(A[c],y1())}}}else if(M.nodeType===8)if(M.data===k2)i.push({type:2,index:e});else{let A=-1;for(;(A=M.data.indexOf(X,A+1))!==-1;)i.push({type:7,index:e}),A+=X.length-1}e++}}static createElement(V,C){let H=o1.createElement("template");return H.innerHTML=V,H}};function i1(L,V,C=L,H){if(V===G)return V;let M=H!==void 0?C._$Co?.[H]:C._$Cl,e=b1(V)?void 0:V._$litDirective$;return M?.constructor!==e&&(M?._$AO?.(!1),e===void 0?M=void 0:(M=new e(L),M._$AT(L,C,H)),H!==void 0?(C._$Co??=[])[H]=M:C._$Cl=M),M!==void 0&&(V=i1(L,M._$AS(L,V.values),M,H)),V}var H2=class{constructor(V,C){this._$AV=[],this._$AN=void 0,this._$AD=V,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(V){let{el:{content:C},parts:H}=this._$AD,M=(V?.creationScope??o1).importNode(C,!0);t1.currentNode=M;let e=t1.nextNode(),r=0,t=0,i=H[0];for(;i!==void 0;){if(r===i.index){let d;i.type===2?d=new m1(e,e.nextSibling,this,V):i.type===1?d=new i.ctor(e,i.name,i.strings,this,V):i.type===6&&(d=new e2(e,this,V)),this._$AV.push(d),i=H[++t]}r!==i?.index&&(e=t1.nextNode(),r++)}return t1.currentNode=o1,M}p(V){let C=0;for(let H of this._$AV)H!==void 0&&(H.strings!==void 0?(H._$AI(V,H,C),C+=H.strings.length-2):H._$AI(V[C])),C++}},m1=class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(V,C,H,M){this.type=2,this._$AH=a,this._$AN=void 0,this._$AA=V,this._$AB=C,this._$AM=H,this.options=M,this._$Cv=M?.isConnected??!0}get parentNode(){let V=this._$AA.parentNode,C=this._$AM;return C!==void 0&&V?.nodeType===11&&(V=C.parentNode),V}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(V,C=this){V=i1(this,V,C),b1(V)?V===a||V==null||V===""?(this._$AH!==a&&this._$AR(),this._$AH=a):V!==this._$AH&&V!==G&&this._(V):V._$litType$!==void 0?this.$(V):V.nodeType!==void 0?this.T(V):G3(V)?this.k(V):this._(V)}O(V){return this._$AA.parentNode.insertBefore(V,this._$AB)}T(V){this._$AH!==V&&(this._$AR(),this._$AH=this.O(V))}_(V){this._$AH!==a&&b1(this._$AH)?this._$AA.nextSibling.data=V:this.T(o1.createTextNode(V)),this._$AH=V}$(V){let{values:C,_$litType$:H}=V,M=typeof H=="number"?this._$AC(V):(H.el===void 0&&(H.el=_1.createElement(K3(H.h,H.h[0]),this.options)),H);if(this._$AH?._$AD===M)this._$AH.p(C);else{let e=new H2(M,this),r=e.u(this.options);e.p(C),this.T(r),this._$AH=e}}_$AC(V){let C=z3.get(V.strings);return C===void 0&&z3.set(V.strings,C=new _1(V)),C}k(V){T2(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,H,M=0;for(let e of V)M===C.length?C.push(H=new L(this.O(y1()),this.O(y1()),this,this.options)):H=C[M],H._$AI(e),M++;M<C.length&&(this._$AR(H&&H._$AB.nextSibling,M),C.length=M)}_$AR(V=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);V!==this._$AB;){let H=D3(V).nextSibling;D3(V).remove(),V=H}}setConnected(V){this._$AM===void 0&&(this._$Cv=V,this._$AP?.(V))}},a1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(V,C,H,M,e){this.type=1,this._$AH=a,this._$AN=void 0,this.element=V,this.name=C,this._$AM=M,this.options=e,H.length>2||H[0]!==""||H[1]!==""?(this._$AH=Array(H.length-1).fill(new String),this.strings=H):this._$AH=a}_$AI(V,C=this,H,M){let e=this.strings,r=!1;if(e===void 0)V=i1(this,V,C,0),r=!b1(V)||V!==this._$AH&&V!==G,r&&(this._$AH=V);else{let t=V,i,d;for(V=e[0],i=0;i<e.length-1;i++)d=i1(this,t[H+i],C,i),d===G&&(d=this._$AH[i]),r||=!b1(d)||d!==this._$AH[i],d===a?V=a:V!==a&&(V+=(d??"")+e[i+1]),this._$AH[i]=d}r&&!M&&this.j(V)}j(V){V===a?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,V??"")}},V2=class extends a1{constructor(){super(...arguments),this.type=3}j(V){this.element[this.name]=V===a?void 0:V}},L2=class extends a1{constructor(){super(...arguments),this.type=4}j(V){this.element.toggleAttribute(this.name,!!V&&V!==a)}},M2=class extends a1{constructor(V,C,H,M,e){super(V,C,H,M,e),this.type=5}_$AI(V,C=this){if((V=i1(this,V,C,0)??a)===G)return;let H=this._$AH,M=V===a&&H!==a||V.capture!==H.capture||V.once!==H.once||V.passive!==H.passive,e=V!==a&&(H===a||M);M&&this.element.removeEventListener(this.name,this,H),e&&this.element.addEventListener(this.name,this,V),this._$AH=V}handleEvent(V){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,V):this._$AH.handleEvent(V)}},e2=class{constructor(V,C,H){this.element=V,this.type=6,this._$AN=void 0,this._$AM=C,this.options=H}get _$AU(){return this._$AM._$AU}_$AI(V){i1(this,V)}},Y3={M:w2,P:X,A:k2,C:1,L:q3,R:H2,D:G3,V:i1,I:m1,H:a1,N:L2,U:M2,B:V2,F:e2},f4=_2.litHtmlPolyfillSupport;f4?.(_1,m1),(_2.litHtmlVersions??=[]).push("3.3.3");var X3=(L,V,C)=>{let H=C?.renderBefore??V,M=H._$litPart$;if(M===void 0){let e=C?.renderBefore??null;H._$litPart$=M=new m1(V.insertBefore(y1(),e),e,void 0,C??{})}return M._$AI(L),M};var B2=globalThis,T=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let V=super.createRenderRoot();return this.renderOptions.renderBefore??=V.firstChild,V}update(V){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(V),this._$Do=X3(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}};T._$litElement$=!0,T.finalized=!0,B2.litElementHydrateSupport?.({LitElement:T});var O4=B2.litElementPolyfillSupport;O4?.({LitElement:T});(B2.litElementVersions??=[]).push("4.2.2");var y4={attribute:!0,type:String,converter:f1,reflect:!1,hasChanged:j1},b4=(L=y4,V,C)=>{let{kind:H,metadata:M}=C,e=globalThis.litPropertyMetadata.get(M);if(e===void 0&&globalThis.litPropertyMetadata.set(M,e=new Map),H==="setter"&&((L=Object.create(L)).wrapped=!0),e.set(C.name,L),H==="accessor"){let{name:r}=C;return{set(t){let i=V.get.call(this);V.set.call(this,t),this.requestUpdate(r,i,L,!0,t)},init(t){return t!==void 0&&this.C(r,void 0,L,t),t}}}if(H==="setter"){let{name:r}=C;return function(t){let i=this[r];V.call(this,t),this.requestUpdate(r,i,L,!0,t)}}throw Error("Unsupported decorator location: "+H)};function E(L){return(V,C)=>typeof C=="object"?b4(L,V,C):((H,M,e)=>{let r=M.hasOwnProperty(e);return M.constructor.createProperty(e,H),r?Object.getOwnPropertyDescriptor(M,e):void 0})(L,V,C)}function h(L){return E({...L,state:!0,attribute:!1})}var t2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l1=L=>(...V)=>({_$litDirective$:L,values:V}),M1=class{constructor(V){}get _$AU(){return this._$AM._$AU}_$AT(V,C,H){this._$Ct=V,this._$AM=C,this._$Ci=H}_$AS(V,C){return this.update(V,C)}update(V,C){return this.render(...C)}};var J3="important",_4=" !"+J3,K=l1(class extends M1{constructor(L){if(super(L),L.type!==t2.ATTRIBUTE||L.name!=="style"||L.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(L){return Object.keys(L).reduce((V,C)=>{let H=L[C];return H==null?V:V+`${C=C.includes("-")?C:C.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${H};`},"")}update(L,[V]){let{style:C}=L.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(V)),this.render(V);for(let H of this.ft)V[H]==null&&(this.ft.delete(H),H.includes("-")?C.removeProperty(H):C[H]=null);for(let H in V){let M=V[H];if(M!=null){this.ft.add(H);let e=typeof M=="string"&&M.endsWith(_4);H.includes("-")||e?C.setProperty(H,e?M.slice(0,-11):M,e?J3:""):C[H]=M}}return G}});var R2="more-info-popup-card",F2="more-info-popup-card",J="more-info-popup-dialog",w1="more-info-popup-card-editor",k1={breadcrumb:"auto",mode:"auto",width:"medium",height:"auto",column_span:1,show_header_actions:!0,replace_more_info:!1,nested_more_info:"inline",dismissable:!0,auto_close:0,keep_alive:!1},w4=["auto","dialog","bottom_sheet"],k4=["small","medium","large","full","custom"],T4=["auto","custom"],P4=["inline","dialog"],B4=/^[a-z0-9][a-z0-9_-]*$/,E4=/^\d+(\.\d+)?(px|%|vw|vh|dvh|svh|lvh|em|rem)$/,j3=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^[_-]+|[_-]+$/g,"").slice(0,48),o2=(L,V,C)=>{if(V!==void 0&&!C.includes(V))throw new Error(`"${L}" must be one of: ${C.join(", ")}`)},E2=(L,V)=>{if(V!==void 0&&V!==""&&!E4.test(String(V)))throw new Error(`"${L}" must be a CSS length such as 720px or 80vh`)},T1=L=>{if(!L||typeof L!="object")throw new Error("Invalid configuration");let V=L;if(!V.popup_id||typeof V.popup_id!="string")throw new Error('"popup_id" is required');if(!B4.test(V.popup_id))throw new Error('"popup_id" may only contain lowercase letters, digits, "_" and "-"');if(V.entity!==void 0&&(typeof V.entity!="string"||!V.entity.includes(".")))throw new Error('"entity" must be an entity ID');if(V.cards!==void 0&&!Array.isArray(V.cards))throw new Error('"cards" must be a list');if(o2("mode",V.mode,w4),o2("width",V.width,k4),o2("height",V.height,T4),o2("nested_more_info",V.nested_more_info,P4),E2("custom_width",V.custom_width),E2("min_height",V.min_height),E2("max_height",V.max_height),V.column_span!==void 0&&(!Number.isInteger(V.column_span)||V.column_span<1||V.column_span>4))throw new Error('"column_span" must be an integer between 1 and 4');if(V.auto_close!==void 0&&(typeof V.auto_close!="number"||V.auto_close<0))throw new Error('"auto_close" must be a positive number of seconds');return V},i2=L=>({...k1,...L,cards:L.cards??[]}),C0=L=>L.width==="custom"?"medium":L.width==="medium"&&L.column_span>1?"large":L.width,H0=L=>{let V={};return L.width==="custom"&&L.custom_width&&(V["--ha-dialog-width-md"]=L.custom_width,V["--ha-bottom-sheet-max-width"]=L.custom_width),L.height==="custom"&&(L.min_height&&(V["--ha-dialog-min-height"]=L.min_height,V["--ha-bottom-sheet-height"]=L.min_height),L.max_height&&(V["--ha-dialog-max-height"]=L.max_height,V["--ha-bottom-sheet-max-height"]=L.max_height)),V};var l=L=>L.substring(0,L.indexOf(".")),L0=L=>L.substring(L.indexOf(".")+1),M0=["scene","automation"],e0=["script"],r0=["camera","configurator"],R4=["counter","input_number","number","proximity","sensor"],F4=["alarm_control_panel","automation","camera","climate","configurator","conversation","counter","cover","date","datetime","fan","group","humidifier","image","input_boolean","input_datetime","lawn_mower","light","lock","media_player","person","remote","script","scene","siren","sun","switch","time","timer","update","vacuum","valve","water_heater","weather"],P1=L=>!!L.user?.is_admin,t0=(L,V)=>L.config.components.includes(V),D4=(L,V)=>t0(L,"history")&&!r0.includes(l(V)),$4=(L,V)=>{if(!t0(L,"logbook")||!L.states[V])return!1;let H=l(V);return!(r0.includes(H)||R4.includes(H))},o0=(L,V,C)=>(!C||F4.includes(l(V)))&&(D4(L,V)||$4(L,V)),D2=L=>P1(L)||!!L.auth.external?.config.hasEntityAddTo,$2=(L,V)=>L.entities[V]?.device_id??null,i0=(L,V)=>(V&&L.devices[V]?.entry_type)==="service"?"service":"device",a0=L=>{if(!L)return!1;let V=l(L.entity_id);return M0.includes(V)&&L.attributes.id||e0.includes(V)?!0:V==="person"&&L.attributes.editable!=="false"},A0=(L,V)=>{let C=l(L.entity_id),H=L.entity_id;return(M0.includes(C)||C==="person")&&(H=L.attributes.id),e0.includes(C)&&(H=V),H?`/config/${C}/edit/${H}`:void 0},j=L=>L.attributes.friendly_name??L.entity_id.substring(L.entity_id.indexOf(".")+1),V0=(L,V)=>{let C=V?L.devices[V]:void 0;return C&&(C.name_by_user||C.name)?.trim()||void 0},N2=(L,V)=>{let C=L.states[V],H=L.entities[V];if(!H)return[C?j(C):V];let M=H.device_id?L.devices[H.device_id]:void 0,e=H.area_id||M?.area_id,r=e?L.areas[e]?.name:void 0,t=c=>C&&L.formatEntityName&&L.formatEntityName(C,{type:c})||void 0,i=V0(L,H.device_id),d=t("entity")??(C?j(C):void 0);d&&i&&d===i&&(d=void 0);let p=H.next_name_part==="device"||!d,A=p&&M?.next_name_part==="parent_device"?V0(L,M.parent_device_id):void 0;return[r,A,p?i:void 0,d].filter(c=>!!c)},n0=L=>!!L.translationMetadata?.translations?.[L.language]?.isRTL;var _=(L,V,C,H={})=>{let M=new CustomEvent(V,{bubbles:H.bubbles??!0,cancelable:H.cancelable??!1,composed:H.composed??!0,detail:C??{}});return L.dispatchEvent(M),M};var N4=["ha-adaptive-dialog","ha-dialog","ha-bottom-sheet","ha-dialog-header","ha-icon-button","ha-icon-button-prev","ha-dropdown","ha-dropdown-item","hui-section"],l0={info:"ha-more-info-info",history:"ha-more-info-history-and-logbook",settings:"ha-more-info-settings",related:"ha-more-info-related",details:"ha-more-info-details",add_to:"ha-more-info-add-to"},E1=L=>customElements.get(L)!==void 0,C1=async(L,V=5e3)=>{if(E1(L))return!0;let C,H=await Promise.race([customElements.whenDefined(L).then(()=>!0),new Promise(M=>{C=setTimeout(()=>M(!1),V)})]);return clearTimeout(C),H},d0,v0=()=>(d0??=(async()=>{await C1("ha-more-info-dialog");let L=[];for(let V of N4)await C1(V,2e3)||L.push(V);return L.length&&console.warn("[more-info-popup-card] Missing Home Assistant elements:",L.join(", ")),L})(),d0),p0=async L=>{let V=customElements.get(L);try{await V?.getConfigElement?.()}catch{}},m0,s0=()=>(m0??=(async()=>{await Promise.all([C1("hui-tile-card"),C1("hui-grid-card")]),await Promise.all([p0("hui-tile-card"),p0("hui-grid-card")]),await Promise.all([C1("ha-form"),C1("hui-card-picker"),C1("hui-card-element-editor")])})(),m0),I4=L=>{let V=L?.match(/^(\d{4})\.(\d{1,2})/);return V?[Number(V[1]),Number(V[2])]:void 0},B1=[2026,10],x0=L=>{let V=I4(L);if(!V)return!0;let[C,H]=V;return C>B1[0]||C===B1[0]&&H>=B1[1]},I2=(L,V,C,H)=>{let M=customElements.get(V)?.prototype?.[C];if(typeof M!="function")return console.warn("[more-info-popup-card] Missing",`${V}.${C}`),!1;let e=Object.assign(document.createElement("span"),H);e.hidden=!0,L.appendChild(e);try{M.call(e)}finally{e.remove()}return!0};var c0=b`
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
`,u0=b`
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
`,Z0=b`
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
`,S0=b`
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
`,a2=b`
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
`,A2=b`
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
`;var W2={"card.name":"More-info popup","card.description":"A container shown as a native more-info popup, with a sections-style grid of cards inside.","card.cards_count":"{count} cards","card.cards_count_one":"1 card","card.hidden_hint":"Hidden on the dashboard \xB7 opens with #{id}","card.missing_elements":"This Home Assistant version is missing elements the popup needs. Check the browser console.","card.unsupported_version":"More-info popup card requires Home Assistant {version} or newer.","dialog.entity_controls":"Entity controls","editor.tab.cards":"Cards","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Appearance","editor.section.behavior":"Behavior","editor.popup_id":"Popup ID","editor.popup_id_helper":"Open it with a Navigate action to #{id}","editor.entity":"Entity","editor.entity_helper":"Optional. Enables the history, settings and menu buttons of the native header.","editor.name":"Title","editor.icon":"Icon","editor.breadcrumb":"Breadcrumb","editor.breadcrumb_helper":"Text above the title. Type your own text or pick an option.","editor.breadcrumb.auto":"Area and device (automatic)","editor.breadcrumb.none":"None","editor.mode":"Presentation","editor.mode.auto":"Automatic (like Home Assistant)","editor.mode.dialog":"Centered dialog","editor.mode.bottom_sheet":"Bottom sheet","editor.width":"Width","editor.width.small":"Small","editor.width.medium":"Medium (default)","editor.width.large":"Large","editor.width.full":"Full width","editor.width.custom":"Custom","editor.custom_width":"Custom width","editor.height":"Height","editor.height.auto":"Fit content","editor.height.custom":"Custom","editor.min_height":"Minimum height","editor.max_height":"Maximum height","editor.length_helper":"CSS length, for example 720px, 80vh or 90%","editor.column_span":"Grid width (sections)","editor.column_span_helper":"1 = 12 columns like a dashboard section; 2 = 24 columns.","editor.show_header_actions":"Show history, settings and menu","editor.replace_more_info":"Replace the entity's more-info","editor.replace_more_info_helper":"Opening the entity from any card on this view shows this popup instead.","editor.nested_more_info":"Entities opened from inside the popup","editor.nested_more_info.inline":"Navigate inside the popup (like Home Assistant)","editor.nested_more_info.dialog":"Open a separate dialog","editor.dismissable":"Close with Esc, outside click or swipe","editor.auto_close":"Close automatically after inactivity","editor.keep_alive":"Keep cards loaded while closed (faster reopen)","editor.test_popup":"Test popup","editor.add_card":"Add card","editor.edit_card":"Edit card","editor.back":"Back","editor.empty":"This popup has no cards yet.","editor.undo":"Undo","editor.card_deleted":"Card deleted","editor.popup_id_invalid":'Use lowercase letters, digits, "_" and "-" only.',"state_card.name":"More-info state","state_card.description":"State header and the big control of a native more-info dialog.","controls_card.name":"More-info controls","controls_card.description":"Row of more-info chips: selects, toggles, numbers and actions.","controls.empty":"Add controls in the editor.","controls.entity":"Entity","controls.control":"Main control","controls.control.auto":"Automatic (like Home Assistant)","controls.control.none":"None","controls.control.toggle":"Toggle","controls.control.brightness":"Brightness slider","controls.control.fan_speed":"Fan speed","controls.control.position":"Cover position","controls.control.tilt":"Cover tilt","controls.control.cover_toggle":"Cover toggle","controls.control.cover_buttons":"Cover buttons","controls.control.valve_position":"Valve position","controls.control.valve_toggle":"Valve toggle","controls.control.valve_buttons":"Valve buttons","controls.control.lock":"Lock","controls.control.alarm_modes":"Alarm modes","controls.control.temperature":"Thermostat","controls.control.climate_humidity":"Climate humidity","controls.control.humidity":"Humidifier","controls.control.water_heater":"Water heater","controls.control.vacuum_status":"Vacuum status","controls.control.lawn_mower_status":"Lawn mower status","controls.control.media_player":"Media player","controls.control.more_info":"Native more-info content","controls.control.script":"Script (run / cancel)","controls.control.press":"Press button","controls.show_state":"Show state","controls.show_last_changed":"Show last changed","controls.state_override":"State text","controls.appearance":"Appearance","controls.appearance.plain":"Plain (like more-info)","controls.appearance.card":"Card","controls.controls":"Controls","controls.type":"Type","controls.type_helper":"Automatic if empty: select for select entities or attributes, toggle, number or action.","controls.type.select":"Select","controls.type.toggle":"Toggle","controls.type.number":"Number","controls.type.button":"Button (icon)","controls.type.action":"Action","controls.attribute":"Attribute","controls.attribute_helper":"Options shown in the select (effect, preset mode, fan speed\u2026).","controls.attribute.state":"State (on / off)","controls.attribute.effect":"Effect","controls.attribute.preset_mode":"Preset mode","controls.attribute.fan_mode":"Fan mode","controls.attribute.swing_mode":"Swing mode","controls.attribute.swing_horizontal_mode":"Horizontal swing mode","controls.attribute.hvac_mode":"HVAC mode","controls.attribute.fan_speed":"Fan speed (vacuum)","controls.attribute.mode":"Mode","controls.attribute.direction":"Direction","controls.attribute.oscillating":"Oscillating","controls.attribute.operation_mode":"Operation mode","controls.attribute.away_mode":"Away mode","controls.attribute.source":"Source","controls.attribute.sound_mode":"Sound mode","controls.name":"Name","controls.icon":"Icon","controls.options":"Options","controls.options_helper":"Optional: which options to show and in which order.","controls.value":"Secondary text","controls.value_helper":"For actions; defaults to the entity state.","controls.tap_action":"Tap action","controls.show_arrow":"Show arrow","controls.perform_action":"Custom action","controls.perform_action_helper":"domain.action that receives the value, e.g. light.turn_on","controls.data_key":"Value field","controls.data_key_helper":"Field of the custom action that receives the value, e.g. effect","controls.min":"Minimum","controls.max":"Maximum","controls.step":"Step","controls.wrap":"Wrap on phones","controls.wrap_helper":"Chips go to new rows instead of scrolling sideways (Home Assistant scrolls)."};var h0={"card.name":"Popup more-info","card.description":"Un contenedor que se muestra como el popup more-info nativo, con una rejilla de tarjetas como una secci\xF3n.","card.cards_count":"{count} tarjetas","card.cards_count_one":"1 tarjeta","card.hidden_hint":"Oculta en el dashboard \xB7 se abre con #{id}","card.missing_elements":"A esta versi\xF3n de Home Assistant le faltan elementos que el popup necesita. Revisa la consola del navegador.","card.unsupported_version":"More-info popup card requiere Home Assistant {version} o superior.","dialog.entity_controls":"Controles de la entidad","editor.tab.cards":"Tarjetas","editor.tab.popup":"Popup","editor.section.general":"General","editor.section.appearance":"Apariencia","editor.section.behavior":"Comportamiento","editor.popup_id":"ID del popup","editor.popup_id_helper":"\xC1brelo con una acci\xF3n Navegar a #{id}","editor.entity":"Entidad","editor.entity_helper":"Opcional. Habilita los botones de historial, ajustes y men\xFA de la cabecera nativa.","editor.name":"T\xEDtulo","editor.icon":"Icono","editor.breadcrumb":"Ruta","editor.breadcrumb_helper":"Texto sobre el t\xEDtulo. Escribe el tuyo o elige una opci\xF3n.","editor.breadcrumb.auto":"\xC1rea y dispositivo (autom\xE1tico)","editor.breadcrumb.none":"Ninguna","editor.mode":"Presentaci\xF3n","editor.mode.auto":"Autom\xE1tica (como Home Assistant)","editor.mode.dialog":"Di\xE1logo centrado","editor.mode.bottom_sheet":"Hoja inferior deslizante","editor.width":"Ancho","editor.width.small":"Peque\xF1o","editor.width.medium":"Mediano (por defecto)","editor.width.large":"Grande","editor.width.full":"Ancho completo","editor.width.custom":"Personalizado","editor.custom_width":"Ancho personalizado","editor.height":"Alto","editor.height.auto":"Ajustar al contenido","editor.height.custom":"Personalizado","editor.min_height":"Alto m\xEDnimo","editor.max_height":"Alto m\xE1ximo","editor.length_helper":"Longitud CSS, por ejemplo 720px, 80vh o 90%","editor.column_span":"Ancho de la rejilla (secciones)","editor.column_span_helper":"1 = 12 columnas como una secci\xF3n del dashboard; 2 = 24 columnas.","editor.show_header_actions":"Mostrar historial, ajustes y men\xFA","editor.replace_more_info":"Reemplazar el more-info de la entidad","editor.replace_more_info_helper":"Al abrir la entidad desde cualquier tarjeta de esta vista se muestra este popup.","editor.nested_more_info":"Entidades abiertas desde dentro del popup","editor.nested_more_info.inline":"Navegar dentro del popup (como Home Assistant)","editor.nested_more_info.dialog":"Abrir un di\xE1logo aparte","editor.dismissable":"Cerrar con Esc, clic fuera o deslizando","editor.auto_close":"Cerrar autom\xE1ticamente tras inactividad","editor.keep_alive":"Mantener las tarjetas cargadas al cerrar (reapertura m\xE1s r\xE1pida)","editor.test_popup":"Probar popup","editor.add_card":"A\xF1adir tarjeta","editor.edit_card":"Editar tarjeta","editor.back":"Volver","editor.empty":"Este popup a\xFAn no tiene tarjetas.","editor.undo":"Deshacer","editor.card_deleted":"Tarjeta eliminada","editor.popup_id_invalid":'Usa solo min\xFAsculas, n\xFAmeros, "_" y "-".',"state_card.name":"Estado more-info","state_card.description":"Cabecera de estado y control grande de un more-info nativo.","controls_card.name":"Controles more-info","controls_card.description":"Fila de chips del more-info: selectores, interruptores, n\xFAmeros y acciones.","controls.empty":"A\xF1ade controles en el editor.","controls.entity":"Entidad","controls.control":"Control principal","controls.control.auto":"Autom\xE1tico (como Home Assistant)","controls.control.none":"Ninguno","controls.control.toggle":"Interruptor","controls.control.brightness":"Control de brillo","controls.control.fan_speed":"Velocidad del ventilador","controls.control.position":"Posici\xF3n de la persiana","controls.control.tilt":"Inclinaci\xF3n de la persiana","controls.control.cover_toggle":"Interruptor de persiana","controls.control.cover_buttons":"Botones de persiana","controls.control.valve_position":"Posici\xF3n de la v\xE1lvula","controls.control.valve_toggle":"Interruptor de v\xE1lvula","controls.control.valve_buttons":"Botones de v\xE1lvula","controls.control.lock":"Cerradura","controls.control.alarm_modes":"Modos de alarma","controls.control.temperature":"Termostato","controls.control.climate_humidity":"Humedad del clima","controls.control.humidity":"Humidificador","controls.control.water_heater":"Calentador de agua","controls.control.vacuum_status":"Estado de la aspiradora","controls.control.lawn_mower_status":"Estado del cortac\xE9sped","controls.control.media_player":"Reproductor multimedia","controls.control.more_info":"Contenido nativo de more-info","controls.control.script":"Script (ejecutar / cancelar)","controls.control.press":"Bot\xF3n de pulsar","controls.show_state":"Mostrar estado","controls.show_last_changed":"Mostrar \xFAltimo cambio","controls.state_override":"Texto del estado","controls.appearance":"Apariencia","controls.appearance.plain":"Sin marco (como more-info)","controls.appearance.card":"Tarjeta","controls.controls":"Controles","controls.type":"Tipo","controls.type_helper":"Autom\xE1tico si se deja vac\xEDo: selector para entidades select o atributos, interruptor, n\xFAmero o acci\xF3n.","controls.type.select":"Selector","controls.type.toggle":"Interruptor","controls.type.number":"N\xFAmero","controls.type.button":"Bot\xF3n (icono)","controls.type.action":"Acci\xF3n","controls.attribute":"Atributo","controls.attribute_helper":"Opciones del selector (efecto, modo predefinido, velocidad\u2026).","controls.attribute.state":"Estado (encendido / apagado)","controls.attribute.effect":"Efecto","controls.attribute.preset_mode":"Modo predefinido","controls.attribute.fan_mode":"Modo del ventilador","controls.attribute.swing_mode":"Oscilaci\xF3n","controls.attribute.swing_horizontal_mode":"Oscilaci\xF3n horizontal","controls.attribute.hvac_mode":"Modo HVAC","controls.attribute.fan_speed":"Potencia de succi\xF3n (aspiradora)","controls.attribute.mode":"Modo","controls.attribute.direction":"Direcci\xF3n","controls.attribute.oscillating":"Oscilaci\xF3n (s\xED / no)","controls.attribute.operation_mode":"Modo de funcionamiento","controls.attribute.away_mode":"Modo ausente","controls.attribute.source":"Fuente","controls.attribute.sound_mode":"Modo de sonido","controls.name":"Nombre","controls.icon":"Icono","controls.options":"Opciones","controls.options_helper":"Opcional: qu\xE9 opciones mostrar y en qu\xE9 orden.","controls.value":"Texto secundario","controls.value_helper":"Para acciones; por defecto, el estado de la entidad.","controls.tap_action":"Acci\xF3n al pulsar","controls.show_arrow":"Mostrar flecha","controls.perform_action":"Acci\xF3n personalizada","controls.perform_action_helper":"dominio.acci\xF3n que recibe el valor, p. ej. light.turn_on","controls.data_key":"Campo del valor","controls.data_key_helper":"Campo de la acci\xF3n personalizada que recibe el valor, p. ej. effect","controls.min":"M\xEDnimo","controls.max":"M\xE1ximo","controls.step":"Paso","controls.wrap":"Saltar de l\xEDnea en m\xF3vil","controls.wrap_helper":"Los chips bajan de l\xEDnea en lugar de desplazarse de lado (Home Assistant los desplaza)."};var g0={en:W2,es:h0},u=(L,V,C)=>{let H=L?.language??(typeof document<"u"&&document.documentElement.lang||"en"),M=H.split("-")[0],e=g0[H]?.[V]??g0[M]?.[V]??W2[V];if(C)for(let[r,t]of Object.entries(C))e=e.replace(`{${r}}`,String(t));return e};var A1=l1(class extends M1{constructor(L){if(super(L),L.type!==t2.ATTRIBUTE||L.name!=="class"||L.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(L){return" "+Object.keys(L).filter(V=>L[V]).join(" ")+" "}update(L,[V]){if(this.st===void 0){this.st=new Set,L.strings!==void 0&&(this.nt=new Set(L.strings.join(" ").split(/\s/).filter(H=>H!=="")));for(let H in V)V[H]&&!this.nt?.has(H)&&this.st.add(H);return this.render(V)}let C=L.element.classList;for(let H of this.st)H in V||(C.remove(H),this.st.delete(H));for(let H in V){let M=!!V[H];M===this.st.has(H)||this.nt?.has(H)||(M?(C.add(H),this.st.add(H)):(C.remove(H),this.st.delete(H)))}return G}});var{I:B6}=Y3;var W4={},f0=(L,V=W4)=>L._$AH=V;var O0=l1(class extends M1{constructor(){super(...arguments),this.key=a}render(L,V){return this.key=L,V}update(L,[V,C]){return V!==this.key&&(f0(L),this.key=V),C}});var U2=(L,V)=>{_(L,"hass-action",{config:{tap_action:{action:"navigate",navigation_path:V}},action:"tap"})};var U4=(L,V)=>{let C=V.entity?N2(L,V.entity):[],H=V.name??C[C.length-1]??"",M=[];return V.breadcrumb==="auto"?M=C.slice(0,-1):V.breadcrumb!=="none"&&V.breadcrumb&&(M=[V.breadcrumb]),[...M,H]},z4=(L,V)=>{let C=V.children[V.children.length-1];switch(V.view){case"details":return L.localize("ui.dialogs.more_info_control.details");case"related":return L.localize("ui.dialogs.more_info_control.related");case"add_to":return L.localize("ui.dialogs.more_info_control.add_to.item");case"settings":return C?.viewTitle||L.localize("ui.dialogs.more_info_control.settings");default:return C?.viewTitle}},n2=(L,V,C)=>{let H=C.entityId&&C.entityId!==V.entity?N2(L,C.entityId):U4(L,V),M=C.view==="root"&&!C.children.length?void 0:z4(L,C),e=M?H:H.slice(0,-1);return{title:M??H[H.length-1]??"",breadcrumb:e.filter(Boolean),breadcrumbClickable:!!C.entityId&&P1(L)&&(C.view!=="root"||V.breadcrumb==="auto")}},d2=(L,V,C,H,M)=>{let e=n0(L)?" \u25C2 ":" \u25B8 ",r=V.breadcrumb.join(e);return o`
    <span slot=${C} class="title" @click=${H}>
      ${V.breadcrumb.length?V.breadcrumbClickable&&M?o`<button class="breadcrumb" @click=${M}>
                ${r}
              </button>`:o`<p class="breadcrumb">${r}</p>`:a}
      <p class="main">${V.title}</p>
    </span>
  `};var y0,z2=()=>y0,G2=L=>{y0=L};var v1=async(L,V)=>{if(V.every(E1))return!0;try{(await window.loadCardHelpers?.())?.importMoreInfoControl?.(L)}catch(H){console.warn("[more-info-popup-card] Could not load",L,H)}return(await Promise.all(V.map(H=>C1(H,8e3)))).every(Boolean)};var Q2=["ha-icon-button-group","ha-icon-button-toggle","light-color-rgb-picker","light-color-temp-picker","ha-more-info-light-favorite-colors"],w0={cover:["ha-icon-button-group","ha-icon-button-toggle","ha-state-control-cover-position","ha-state-control-cover-tilt-position","ha-state-control-cover-toggle","ha-state-control-cover-buttons","ha-more-info-cover-favorite-positions"],valve:["ha-icon-button-group","ha-icon-button-toggle","ha-state-control-valve-position","ha-state-control-valve-toggle","ha-state-control-valve-buttons","ha-more-info-valve-favorite-positions"],lock:["ha-control-button","ha-control-button-group","ha-state-icon"],alarm_control_panel:["ha-control-button","ha-state-icon"],siren:["ha-button","more-info-siren"],vacuum:["ha-control-button","ha-control-button-group","ha-battery-icon","ha-icon-next","ha-more-info-control-select-container","more-info-vacuum"],lawn_mower:["ha-control-button","ha-control-button-group","ha-battery-icon"]},s1={toggle:{tag:"ha-state-control-toggle",load:"switch"},brightness:{tag:"ha-state-control-light-brightness",load:"light",extraTags:Q2},fan_speed:{tag:"ha-state-control-fan-speed",load:"fan",extraTags:["ha-outlined-icon-button"]},position:{tag:"ha-state-control-cover-position",load:"cover"},tilt:{tag:"ha-state-control-cover-tilt-position",load:"cover"},cover_toggle:{tag:"ha-state-control-cover-toggle",load:"cover"},cover_buttons:{tag:"ha-state-control-cover-buttons",load:"cover"},valve_position:{tag:"ha-state-control-valve-position",load:"valve"},valve_toggle:{tag:"ha-state-control-valve-toggle",load:"valve"},valve_buttons:{tag:"ha-state-control-valve-buttons",load:"valve"},lock:{tag:"ha-state-control-lock-toggle",load:"lock"},alarm_modes:{tag:"ha-state-control-alarm_control_panel-modes",load:"alarm_control_panel"},temperature:{tag:"ha-state-control-climate-temperature",load:"climate"},climate_humidity:{tag:"ha-state-control-climate-humidity",load:"climate"},humidity:{tag:"ha-state-control-humidifier-humidity",load:"humidifier"},water_heater:{tag:"ha-state-control-water_heater-temperature",load:"water_heater"},vacuum_status:{tag:"ha-state-control-vacuum-status",load:"vacuum"},lawn_mower_status:{tag:"ha-state-control-lawn_mower-status",load:"lawn_mower"},media_player:{tag:"more-info-media_player",load:"media_player"},script:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button","ha-markdown","ha-service-control"],inline:!0},more_info:{tag:"more-info-content",load:"",extraTags:["state-card-content"]},press:{tag:"ha-control-button-group",load:"script",extraTags:["ha-control-button"],inline:!0}},b0=["alarm_control_panel","cover","climate","conversation","fan","humidifier","input_boolean","lawn_mower","light","lock","siren","script","switch","timer","vacuum","valve","water_heater","weather","media_player"],G4=["camera","configurator"],Q4=["automation","camera","conversation","counter","date","datetime","group","image","input_datetime","input_number","input_select","input_text","number","person","remote","scene","select","sun","text","time","timer","update","weather"],K4=L=>{let V=l(L.entity_id);if(V==="group"){let C=new Set((L.attributes.entity_id??[]).map(l)),[H]=C;return C.size===1&&H!=="group"&&b0.includes(H)}return b0.includes(V)},k0=L=>!K4(L)&&!G4.includes(l(L.entity_id)),T0=["hs","xy","rgb","rgbw","rgbww"],q4=[...T0,"color_temp","brightness","white"],p2=(L,V)=>L.attributes.supported_color_modes?.some(C=>V.includes(C))??!1,K2=L=>p2(L,q4),P0=L=>p2(L,T0),B0=L=>p2(L,["color_temp"]),E0=L=>p2(L,["white"]),g=(L,V)=>((L.attributes.supported_features??0)&V)!==0,_0=(L,V)=>((L.attributes.supported_features??0)&3)===3&&!g(L,V),q2=L=>{let V=l(L.entity_id);switch(V){case"light":return K2(L)?"brightness":"toggle";case"switch":case"input_boolean":case"siren":return"toggle";case"fan":return g(L,1)?"fan_speed":"toggle";case"cover":return g(L,4)?"position":g(L,128)?"tilt":_0(L,120)?"cover_toggle":"cover_buttons";case"valve":return g(L,4)?"valve_position":_0(L,8)?"valve_toggle":"valve_buttons";case"lock":return"lock";case"alarm_control_panel":return"alarm_modes";case"climate":return"temperature";case"humidifier":return"humidity";case"water_heater":return"water_heater";case"vacuum":return"vacuum_status";case"lawn_mower":return"lawn_mower_status";case"media_player":return"media_player";case"script":return"script";case"button":case"input_button":return"press";default:return Q4.includes(V)?"more_info":void 0}},R0=["climate","humidifier","water_heater","media_player"];var F={OPEN:1,CLOSE:2,SET_POSITION:4,STOP:8,OPEN_TILT:16,CLOSE_TILT:32,STOP_TILT:64,SET_TILT_POSITION:128},e1={OPEN:1,CLOSE:2,SET_POSITION:4,STOP:8},F0=1,m2={TONES:4,VOLUME_SET:8,DURATION:16},D={PAUSE:4,STOP:8,RETURN_HOME:16,STATUS:128,LOCATE:512,CLEAN_SPOT:1024,STATE:4096,START:8192,CLEAN_AREA:16384},n1={START_MOWING:1,PAUSE:2,DOCK:4,STOP:8},D0=(L,...V)=>V.every(C=>g(L,C)),$0=L=>{let V=g(L,F.SET_POSITION),C=g(L,F.SET_TILT_POSITION),H=g(L,F.OPEN|F.CLOSE|F.STOP),M=g(L,F.OPEN_TILT|F.CLOSE_TILT|F.STOP_TILT),e=D0(L,F.OPEN,F.CLOSE)&&!g(L,F.STOP)&&!M&&!V&&!C;return{position:V,tilt:C,buttons:e?"toggle":H||M?"buttons":void 0,switchMode:(V||C)&&(H||M)}},N0=L=>{let V=g(L,e1.SET_POSITION),C=g(L,e1.OPEN|e1.CLOSE|e1.STOP),H=D0(L,e1.OPEN,e1.CLOSE)&&!g(L,e1.STOP)&&!V;return{position:V,tilt:!1,buttons:H?"toggle":C?"buttons":void 0,switchMode:V&&C}},Y2=L=>L==null||Array.isArray(L)&&L.length>0,I0=(L,V)=>{if(!V)return!1;let C=l(L.entity_id),H=V.options?.[C];return C==="valve"?g(L,e1.SET_POSITION)&&Y2(H?.favorite_positions):g(L,F.SET_POSITION)&&Y2(H?.favorite_positions)||g(L,F.SET_TILT_POSITION)&&Y2(H?.favorite_tilt_positions)},W0=L=>{let V=L.state;if(V==="unavailable"||V==="unknown"||V==="off")return!1;switch(l(L.entity_id)){case"alarm_control_panel":return V!=="disarmed";case"cover":case"valve":return V!=="closed";case"lawn_mower":return!["docked","paused","idle"].includes(V);case"lock":return V!=="locked";case"vacuum":return!["idle","docked","paused"].includes(V);default:return!0}},X2=L=>{if(L.state==="unavailable")return"var(--state-unavailable-color)";let V=l(L.entity_id),C=L.attributes.device_class,H=L.state.toLowerCase().replace(/[^a-z0-9]+/g,"_"),M=W0(L)?"active":"inactive";return[...C?[`--state-${V}-${C}-${H}-color`]:[],`--state-${V}-${H}-color`,`--state-${V}-${M}-color`,`--state-${M}-color`].reduceRight((r,t)=>`var(${t}${r?`, ${r}`:""})`,"")},U0=(L,V)=>{let C=V.attributes,H=W0(V)?C.current_position??(l(V.entity_id)==="cover"?C.current_tilt_position:void 0):void 0;return H&&H!==100?L.formatEntityAttributeValue(V,"current_position",Math.round(H)):""},Y4=L=>["opening","unlocking","locking"].includes(L.state),z0=L=>L.state!=="unavailable"&&(L.attributes.assumed_state===!0||L.state!=="open"&&!Y4(L)),J2=["triggered","arming","pending"],G0=L=>["cleaning","on"].includes(L.state),Q0=L=>!["docked","off","idle"].includes(L.state),K0=L=>L.state!=="unavailable"&&L.state!=="returning",q0=L=>L.state!=="unavailable"&&!["docked","idle"].includes(L.state),Y0=L=>L.state!=="unavailable"&&L.state!=="docked",X0=(L,V)=>{let C=L.entities[V]?.device_id;if(!C)return;let H=Object.values(L.entities).filter(t=>t.device_id===C),M=["sensor","binary_sensor"],e=H.map(t=>L.states[t.entity_id]).filter(t=>t?.attributes.device_class==="battery"&&M.includes(l(t.entity_id))).sort((t,i)=>M.indexOf(l(t.entity_id))-M.indexOf(l(i.entity_id)))[0];if(!e||l(e.entity_id)!=="binary_sensor"&&isNaN(Number(e.state)))return;let r=H.map(t=>L.states[t.entity_id]).find(t=>t?.attributes.device_class==="battery_charging");return{battery:e,charging:r}},J0=L=>["cs","de","fi","fr","sk","sv"].includes(L.locale?.language??L.language)?" ":"",j0=async(L,V)=>{let C=await window.loadCardHelpers?.();if(!C?.showEnterCodeDialog)throw new Error("The code dialog is not available");return C.showEnterCodeDialog(L,V)},j2=async(L,V,C,H,M)=>{let e;if(C.attributes.code_format&&!H?.options?.lock?.default_code){let r=await j0(L,{codeFormat:"text",codePattern:C.attributes.code_format,title:V.localize(`ui.card.lock.${M}`),submitText:V.localize(`ui.card.lock.${M}`)});if(r==null)throw new Error("Code dialog closed");e=r}await V.callService("lock",M,{entity_id:C.entity_id,code:e})},C7=async(L,V,C,H)=>{let M;if(C.attributes.code_format&&!H?.options?.alarm_control_panel?.default_code){let e=await j0(L,{codeFormat:C.attributes.code_format,title:V.localize("ui.card.alarm_control_panel.disarm"),submitText:V.localize("ui.card.alarm_control_panel.disarm")});if(e==null)throw new Error("Code dialog closed");M=e}await V.callService("alarm_control_panel","alarm_disarm",{entity_id:C.entity_id,code:M})};var H5=L=>V=>(V.attributes[L]??[]).map(String),C5=L=>V=>{let C=V.attributes[L];return C==null?void 0:String(C)},q=(L,V,C,H)=>({options:H5(L),value:C5(V),service:M=>[l(M.entity_id),C],data:M=>({[V]:M}),icon:H}),X4=(L,V,C,H)=>({optionIcons:{true:C,false:H},options:()=>["true","false"],value:M=>M.attributes[L]==null?void 0:String(!!M.attributes[L]),service:M=>[l(M.entity_id),V],data:M=>({[L]:M==="true"}),icon:C}),R1={effect:{...q("effect_list","effect","turn_on",L3)},preset_mode:q("preset_modes","preset_mode","set_preset_mode",p1),fan_mode:q("fan_modes","fan_mode","set_fan_mode",Z1),swing_mode:q("swing_modes","swing_mode","set_swing_mode",W1),swing_horizontal_mode:q("swing_horizontal_modes","swing_horizontal_mode","set_swing_horizontal_mode",W1),hvac_mode:{options:H5("hvac_modes"),value:L=>L.state,service:()=>["climate","set_hvac_mode"],data:L=>({hvac_mode:L}),icon:b3,formatAsState:!0},fan_speed:{...q("fan_speed_list","fan_speed","set_fan_speed",Z1),attributeIcons:!1},mode:q("available_modes","mode","set_mode",p1),direction:{options:()=>["forward","reverse"],value:C5("direction"),service:()=>["fan","set_direction"],data:L=>({direction:L}),icon:g3},oscillating:X4("oscillating","oscillate",W1,q5),operation_mode:q("operation_list","operation_mode","set_operation_mode",T3),away_mode:{options:()=>["on","off"],value:C5("away_mode"),service:()=>["water_heater","set_away_mode"],data:L=>({away_mode:L==="on"}),icon:S2,optionIcons:{on:S2,off:K5}},source:{...q("source_list","source","select_source",l3),attributeIcons:!1},sound_mode:{...q("sound_mode_list","sound_mode","select_sound_mode",c3),attributeIcons:!1}},l2={options:H5("options"),value:L=>L.state,service:L=>[l(L.entity_id),"select_option"],data:L=>({option:L}),icon:p1,formatAsState:!0},H7={options:()=>["off","on"],value:L=>L.state,service:L=>[l(L.entity_id),"toggle"],data:()=>({}),icon:S1,formatAsState:!0},x1=["select","input_select"],V7=["number","input_number"],L7=["switch","input_boolean","light","fan","siren","automation","script","group","media_player","humidifier","climate","water_heater","remote","valve","cover","lock"];var s2=()=>{},M7=L=>u(s2(),`controls.${L}`),v2=(L,V,C=!1)=>({select:{mode:"dropdown",custom_value:C,options:L.map(H=>({value:H,label:u(s2(),`${V}.${H}`)||H}))}}),e7={name:"appearance",selector:v2(["plain","card"],"controls.appearance")},r7=L=>M7(L.name)||L.name,t7=()=>({schema:[{name:"entity",required:!0,selector:{entity:{}}},{name:"control",selector:v2(["auto","none",...Object.keys(s1)],"controls.control")},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}}]},{name:"state_override",selector:{text:{}}},e7],computeLabel:r7}),R=(L,V,C=!1)=>({label:M7(L),description:u(s2(),`controls.${L}_helper`)||void 0,required:C,selector:V}),o7=()=>({schema:[{name:"controls",selector:{object:{multiple:!0,label_field:"entity",description_field:"attribute",fields:{type:R("type",v2(["select","toggle","number","action","button"],"controls.type")),entity:R("entity",{entity:{}}),attribute:R("attribute",v2(["state",...Object.keys(R1)],"controls.attribute",!0)),name:R("name",{text:{}}),icon:R("icon",{icon:{}}),options:R("options",{select:{multiple:!0,custom_value:!0,options:[]}}),value:R("value",{text:{}}),tap_action:R("tap_action",{ui_action:{}}),show_arrow:R("show_arrow",{boolean:{}}),perform_action:R("perform_action",{text:{}}),data_key:R("data_key",{text:{}}),min:R("min",{number:{mode:"box",step:"any"}}),max:R("max",{number:{mode:"box",step:"any"}}),step:R("step",{number:{mode:"box",step:"any"}})}}}},{name:"",type:"grid",schema:[e7,{name:"wrap",selector:{boolean:{}}}]}],computeLabel:r7,computeHelper:L=>u(s2(),`controls.${L.name}_helper`)||void 0,assertConfig:L=>{if(L.controls?.some(V=>V.options?.some(C=>typeof C!="string")))throw new Error("Options with names or icons can only be edited in YAML")}});var x2=b`
  ha-card.plain {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    --ha-card-background: transparent;
  }
`,i7=b`
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
`;var F1="more-info-state-card",c2="more-info-popup-fill",J4={temperature:["show-secondary","prevent-interaction-on-scroll"],climate_humidity:["show-current","prevent-interaction-on-scroll"],humidity:["show-secondary","prevent-interaction-on-scroll"],water_heater:["show-current","prevent-interaction-on-scroll"]},j4=16,C9=32,H9=6,V9=L=>Math.round(100/(L.attributes.percentage_step??1))+1,L9=["position","tilt","cover_toggle","cover_buttons","valve_position","valve_toggle","valve_buttons"],M9=5,e9=2,V5=()=>{},r9=["queued","parallel"],t9=L=>L.state==="off"||L.state==="on"&&r9.includes(L.attributes.mode)&&L.attributes.current<L.attributes.max,o9=(L,V)=>{let C=l(V.entity_id),H=V.attributes;if(C==="light"&&V.state==="on"&&H.brightness!=null)return L.formatEntityAttributeValue(V,"brightness");if(C==="fan"&&V.state==="on"&&H.percentage)return L.formatEntityAttributeValue(V,"percentage");if(C==="script"){let M=H.current||0;return M?H.mode==="parallel"&&M>1?L.localize("ui.card.script.running_parallel",{active:M}):L.localize("ui.card.script.running_single"):L.localize("ui.card.script.idle")}if(C==="cover"||C==="valve"){let M=U0(L,V);return M?`${L.formatEntityState(V)} \xB7 ${M}`:void 0}if(C==="vacuum"&&g(V,D.STATUS)&&H.status)return L.formatEntityAttributeValue(V,"status")},a7,A7,n7,d7,p7,m7,l7,v7,s7,f,L5,M5,e5,r5,t5,o5,i5,a5,$=class extends(s7=T,v7=[E({attribute:!1})],l7=[h()],m7=[h()],p7=[h()],d7=[h()],n7=[h()],A7=[h()],a7=[h()],s7){constructor(){super(...arguments);x(this,L5,n(f,8,this)),n(f,11,this);x(this,M5,n(f,12,this)),n(f,15,this);x(this,e5,n(f,16,this,!1)),n(f,19,this);x(this,r5,n(f,20,this,{})),n(f,23,this);x(this,t5,n(f,24,this,"brightness")),n(f,27,this);x(this,o5,n(f,28,this)),n(f,31,this);x(this,i5,n(f,32,this)),n(f,35,this);x(this,a5,n(f,36,this,"normal")),n(f,39,this);m(this,"_openTimeout");m(this,"_controlElement");m(this,"_controlTag");m(this,"_loadingKey");m(this,"_entryLoaded")}static getConfigForm(){return t7()}static getStubConfig(C,H){let M=H.find(e=>e.startsWith("light."))??H.find(e=>q2(C.states[e]))??H[0];return{type:`custom:${F1}`,entity:M}}setConfig(C){if(!C?.entity)throw new Error('"entity" is required');if(C.control&&C.control!=="auto"&&C.control!=="none"&&!(C.control in s1))throw new Error(`Unknown control "${C.control}"`);this._config=C,this._ready=!1,this._loadingKey=void 0,this._scriptData={action:C.entity},this._lightControl="brightness",this._positionMode=void 0,this._setOpenState("normal"),this._entry=void 0,this._entryLoaded=void 0}connectedCallback(){super.connectedCallback(),_(this,c2)}disconnectedCallback(){super.disconnectedCallback(),this._setOpenState("normal")}set popupFill(C){if(this.style.removeProperty("--popup-min-height"),C<=0)return;let H=this.getBoundingClientRect().height;this.style.setProperty("--popup-min-height",`${H+C}px`)}getCardSize(){return 7}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _controlName(){let C=this._config?.control??"auto";if(C!=="none")return C!=="auto"?C:this._stateObj?q2(this._stateObj):void 0}willUpdate(){if(this._ready||!this._config||!this._stateObj)return;let C=this._controlName,H=C?s1[C]:void 0,M=this._showState&&this._config.show_last_changed!==!1,e=`${this._config.entity}:${C}:${M}`;if(e===this._loadingKey)return;this._loadingKey=e;let r=[];if(H){let d="extraTags"in H?H.extraTags:[],p=H.load||l(this._config.entity);r.push(v1(p,[H.tag,...d]))}let t=l(this._config.entity),i=t==="light"?Q2:w0[t];H&&i&&r.push(v1(t,[...i])),M&&r.push(v1("switch",["ha-more-info-state-header"])),Promise.all(r).then(()=>{this._loadingKey===e&&(this._ready=!0)})}get _showState(){let C=l(this._config.entity);return this._config.show_state??(!R0.includes(C)&&this._controlName!=="more_info")}_control(C){let H=this._controlName;if(!H)return a;if(H==="script")return this._script(C);if(H==="press")return this._press(C);if(H==="more_info")return this._moreInfo(C);let M=l(C.entity_id);if(this._positionComposite(C))return this._positionControls(C);let{tag:e}=s1[H];if(this._controlTag!==e){this._controlTag=e,this._controlElement=document.createElement(e);for(let i of J4[H]??[])this._controlElement.setAttribute(i,"");H==="lock"&&this._controlElement.addEventListener("lock-service-called",()=>this._setOpenState("normal"))}let r=this._controlElement;r.stateObj=C,r.hass=this.hass;let t=M==="fan";return H==="toggle"&&(r.iconPathOn=t?Z1:M==="light"?d3:M==="siren"?w3:void 0,r.iconPathOff=t?o3:M==="light"?n3:M==="siren"?k3:void 0),M==="light"&&(H==="toggle"||H==="brightness")?this._light(C,r):M==="siren"&&H==="toggle"?this._siren(C,r):M==="lock"&&H==="lock"?this._lock(C,r):M==="alarm_control_panel"&&H==="alarm_modes"?J2.includes(C.state)?this._statusIcon(C,"alarm"):r:M==="vacuum"&&H==="vacuum_status"?o`${r}${this._vacuumCommands(C)}`:M==="lawn_mower"&&H==="lawn_mower_status"?o`${r}${this._mowerCommands(C)}`:H==="fan_speed"&&t&&V9(C)>H9&&g(C,C9|j4)?o`${r}${this._fanPowerButton(C)}`:r}_light(C,H){let M=this.hass,e=K2(C),r=P0(C),t=B0(C),i=E0(C);if(!e&&!r&&!t)return H;let d=C.state==="unavailable",p=this._lightControl,A=k=>U=>{U.stopPropagation(),this._lightControl=k},c=(k,U={})=>M.callService("light",k,{entity_id:C.entity_id,...U});(r||t)&&this._loadEntry();let v=this._entry,Z=v?.options?.light?.favorite_colors,w=!!(v&&(Z==null||Z.length>0));return o`
      ${e?a:H}
      ${e&&p==="brightness"?H:r&&p==="color"?o`<light-color-rgb-picker
                .hass=${M}
                .stateObj=${C}
              ></light-color-rgb-picker>`:t&&p==="color_temp"?o`<light-color-temp-picker
                  .hass=${M}
                  .stateObj=${C}
                ></light-color-temp-picker>`:a}
      <ha-icon-button-group>
        ${e?o`<ha-icon-button
                .disabled=${d}
                .label=${M.localize("ui.dialogs.more_info_control.light.toggle")}
                @click=${k=>{k.stopPropagation(),c(C.state==="on"?"turn_off":"turn_on")}}
              >
                <ha-svg-icon .path=${S1}></ha-svg-icon>
              </ha-icon-button>`:a}
        ${r||t?o`<div class="separator"></div>
                <ha-icon-button-toggle
                  .selected=${p==="brightness"}
                  .disabled=${d}
                  .label=${M.formatEntityAttributeName(C,"brightness")}
                  @click=${A("brightness")}
                >
                  <ha-svg-icon .path=${Y5}></ha-svg-icon>
                </ha-icon-button-toggle>`:a}
        ${r?o`<ha-icon-button-toggle
                border-only
                .selected=${p==="color"}
                .disabled=${d}
                .label=${M.localize("ui.dialogs.more_info_control.light.color")}
                @click=${A("color")}
              >
                <span class="wheel color"></span>
              </ha-icon-button-toggle>`:a}
        ${t?o`<ha-icon-button-toggle
                border-only
                .selected=${p==="color_temp"}
                .disabled=${d}
                .label=${M.localize("ui.dialogs.more_info_control.light.color_temp")}
                @click=${A("color_temp")}
              >
                <span class="wheel color-temp"></span>
              </ha-icon-button-toggle>`:a}
        ${i?o`<div class="separator"></div>
                <ha-icon-button
                  .disabled=${d}
                  .label=${M.localize("ui.dialogs.more_info_control.light.set_white")}
                  @click=${k=>{k.stopPropagation(),c("turn_on",{white:!0})}}
                >
                  <ha-svg-icon .path=${i3}></ha-svg-icon>
                </ha-icon-button>`:a}
      </ha-icon-button-group>
      ${w?o`<ha-more-info-light-favorite-colors
              .hass=${M}
              .stateObj=${C}
              .entry=${v}
            ></ha-more-info-light-favorite-colors>`:a}
    `}_positionComposite(C){let H=l(C.entity_id);return(H==="cover"||H==="valve")&&(this._config.control??"auto")==="auto"&&L9.includes(this._controlName)}_positionControls(C){let H=this.hass,M=l(C.entity_id),e=M==="cover"?$0(C):N0(C),r=this._positionMode??(e.position||e.tilt?"position":"button"),t=p=>A=>{A.stopPropagation(),this._positionMode=p},i=M==="cover",d=a;return r==="position"?d=o`
        ${e.position?i?o`<ha-state-control-cover-position
                  .hass=${H}
                  .stateObj=${C}
                ></ha-state-control-cover-position>`:o`<ha-state-control-valve-position
                  .hass=${H}
                  .stateObj=${C}
                ></ha-state-control-valve-position>`:a}
        ${e.tilt?o`<ha-state-control-cover-tilt-position
                .hass=${H}
                .stateObj=${C}
              ></ha-state-control-cover-tilt-position>`:a}
      `:e.buttons==="toggle"?d=i?o`<ha-state-control-cover-toggle
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-cover-toggle>`:o`<ha-state-control-valve-toggle
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-valve-toggle>`:e.buttons==="buttons"&&(d=i?o`<ha-state-control-cover-buttons
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-cover-buttons>`:o`<ha-state-control-valve-buttons
            .hass=${H}
            .stateObj=${C}
          ></ha-state-control-valve-buttons>`),o`
      <div class="main-control">${d}</div>
      ${e.switchMode?o`<ha-icon-button-group>
              <ha-icon-button-toggle
                .label=${H.localize(`ui.dialogs.more_info_control.${M}.switch_mode.position`)}
                .selected=${r==="position"}
                .path=${s3}
                @click=${t("position")}
              ></ha-icon-button-toggle>
              <ha-icon-button-toggle
                .label=${H.localize(`ui.dialogs.more_info_control.${M}.switch_mode.button`)}
                .selected=${r==="button"}
                .path=${f3}
                @click=${t("button")}
              ></ha-icon-button-toggle>
            </ha-icon-button-group>`:a}
    `}_favoritePositions(C){return this._loadEntry(),I0(C,this._entry)?l(C.entity_id)==="cover"?o`<ha-more-info-cover-favorite-positions
          .hass=${this.hass}
          .stateObj=${C}
          .entry=${this._entry}
          .editMode=${!1}
        ></ha-more-info-cover-favorite-positions>`:o`<ha-more-info-valve-favorite-positions
          .hass=${this.hass}
          .stateObj=${C}
          .entry=${this._entry}
          .editMode=${!1}
        ></ha-more-info-valve-favorite-positions>`:a}_statusIcon(C,H){return o`
      <div
        class="status ${H}"
        style=${K({"--state-color":X2(C)})}
      >
        <div class="icon">
          <ha-state-icon
            .hass=${this.hass}
            .stateObj=${C}
          ></ha-state-icon>
        </div>
      </div>
    `}_setOpenState(C,H){clearTimeout(this._openTimeout),this._openState=C,H&&(this._openTimeout=setTimeout(()=>{this._openState="normal"},H*1e3))}_lock(C,H){let M=this.hass;this._loadEntry();let e=r=>{if(r.stopPropagation(),this._openState!=="confirm"){this._setOpenState("confirm",M9);return}j2(this,M,C,this._entry,"open").catch(V5),this._setOpenState("done",e9)};return o`
      ${C.state==="jammed"?this._statusIcon(C,"lock"):H}
      ${g(C,F0)?o`<div class="buttons">
              ${this._openState==="done"?o`<p class="open-done">
                      <ha-svg-icon .path=${J5}></ha-svg-icon>
                      ${M.localize("ui.card.lock.open_door_done")}
                    </p>`:o`<ha-control-button
                      .disabled=${!z0(C)}
                      class="open-button ${this._openState}"
                      style=${K({"--state-color":X2(C)})}
                      @click=${e}
                    >
                      ${this._openState==="confirm"?M.localize("ui.card.lock.open_door_confirm"):M.localize("ui.card.lock.open_door")}
                    </ha-control-button>`}
            </div>`:a}
    `}_siren(C,H){let M=g(C,m2.TONES)&&C.attributes.available_tones||g(C,m2.VOLUME_SET|m2.DURATION);return o`
      ${H}
      ${M?o`<ha-button appearance="plain" size="s" @click=${r=>{r.stopPropagation(),I2(this.shadowRoot,"more-info-siren","_showAdvancedControlsDialog",{stateObj:C})}}>
              ${this.hass.localize("ui.components.siren.more_controls")}
            </ha-button>`:a}
    `}_commandButton(C,H,M,e){return o`<ha-control-button
      .label=${C}
      .disabled=${M}
      @click=${r=>{r.stopPropagation(),e()}}
    >
      <ha-svg-icon .path=${H}></ha-svg-icon>
    </ha-control-button>`}_commands(C){return C.length?o`<div class="buttons">
          <ha-control-button-group class="commands">
            ${C}
          </ha-control-button-group>
        </div>`:a}_vacuumCommands(C){let H=this.hass,M=C.state==="unavailable",e=c=>g(C,c),r=c=>()=>H.callService("vacuum",c,{entity_id:C.entity_id}),t=c=>H.localize(`ui.dialogs.more_info_control.vacuum.${c}`),i=G0(C),d=!e(D.STATE)&&!e(D.START),p=i&&e(D.PAUSE),A=[];return(e(D.START)||e(D.PAUSE))&&A.push(this._commandButton(t(d?"start_pause":p?"pause":"start"),d?S3:p?g2:K1,M,d&&e(D.PAUSE)?r("start_pause"):r(i?"pause":"start"))),e(D.STOP)&&A.push(this._commandButton(t("stop"),q1,M||!Q0(C),r("stop"))),e(D.RETURN_HOME)&&A.push(this._commandButton(t("return_home"),h2,M||!K0(C),r("return_to_base"))),e(D.LOCATE)&&A.push(this._commandButton(t("locate"),v3,M,r("locate"))),e(D.CLEAN_SPOT)&&A.push(this._commandButton(t("clean_spot"),O3,M,r("clean_spot"))),this._commands(A)}_mowerCommands(C){let H=this.hass,M=C.state==="unavailable",e=p=>g(C,p),r=p=>()=>H.callService("lawn_mower",p,{entity_id:C.entity_id}),t=p=>H.localize(`ui.dialogs.more_info_control.lawn_mower.${p}`),i=C.state==="mowing"&&e(n1.PAUSE),d=[];return(e(n1.START_MOWING)||e(n1.PAUSE))&&d.push(this._commandButton(t(i?"pause":"start_mowing"),i?g2:K1,M||!i&&(!e(n1.START_MOWING)||C.state==="mowing"),r(i?"pause":"start_mowing"))),e(n1.STOP)&&d.push(this._commandButton(t("stop"),q1,M||!q0(C),r("stop"))),e(n1.DOCK)&&d.push(this._commandButton(t("dock"),h2,M||!Y0(C),r("dock"))),this._commands(d)}_cleanAreas(C){let H=this.hass,M=e=>{e.stopPropagation();let r=!1,t=()=>{r=!0};window.addEventListener("show-child-view",t);let i=I2(this.shadowRoot,"more-info-vacuum","_handleCleanAreas",{stateObj:C,_i18n:{localize:H.localize}});window.removeEventListener("show-child-view",t),(r||!i)&&_(this,"hass-more-info",{entityId:C.entity_id})};return o`
      <ha-more-info-control-select-container>
        <button
          class="clean-areas-button"
          ?disabled=${C.state==="unavailable"}
          @click=${M}
        >
          <div class="icon">
            <ha-svg-icon .path=${y3}></ha-svg-icon>
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
    `}_afterControls(C){let H=this._controlName;if(!H)return a;let M=this.hass,e=l(C.entity_id);if(this._positionComposite(C))return this._favoritePositions(C);if(e==="lock"&&H==="lock"&&C.state==="jammed"){let r=t=>i=>{i.stopPropagation(),j2(this,M,C,this._entry,t).catch(V5)};return o`
        <ha-control-button-group class="jammed">
          <ha-control-button @click=${r("unlock")}>
            ${M.localize("ui.card.lock.unlock")}
          </ha-control-button>
          <ha-control-button @click=${r("lock")}>
            ${M.localize("ui.card.lock.lock")}
          </ha-control-button>
        </ha-control-button-group>
      `}return e==="alarm_control_panel"&&H==="alarm_modes"&&J2.includes(C.state)?(this._loadEntry(),o`
        <ha-control-button class="disarm" @click=${t=>{t.stopPropagation(),C7(this,M,C,this._entry).catch(V5)}}>
          ${M.localize("ui.card.alarm_control_panel.disarm")}
        </ha-control-button>
      `):e==="vacuum"&&H==="vacuum_status"&&g(C,D.CLEAN_AREA)?this._cleanAreas(C):a}_battery(C){let H=l(C.entity_id);if(H!=="vacuum"&&H!=="lawn_mower")return a;let M=this.hass,e=X0(M,C.entity_id);if(!e)return a;let{battery:r,charging:t}=e;return o`
      <span class="battery" slot="after-time">
        ${l(r.entity_id)==="binary_sensor"?a:o`<span
                >${Number(r.state).toFixed()}${J0(M)}%</span
              >`}
        <ha-battery-icon
          .hass=${M}
          .batteryStateObj=${r}
          .batteryChargingStateObj=${t}
        ></ha-battery-icon>
      </span>
    `}_moreInfo(C){this._loadEntry();let H=k0(C);return o`
      ${H?o`<state-card-content
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
    `}_loadEntry(){let C=this._config.entity;this._entryLoaded!==C&&(this._entryLoaded=C,this.hass.callWS({type:"config/entity_registry/get",entity_id:C}).then(H=>{this._entryLoaded===C&&(this._entry=H)},()=>{this._entryLoaded===C&&(this._entry=null)}))}_fanPowerButton(C){let H=()=>this.hass.callService("fan",C.state==="on"?"turn_off":"turn_on",{entity_id:C.entity_id});return o`
      <div class="buttons">
        <ha-outlined-icon-button
          .disabled=${C.state==="unavailable"}
          @click=${H}
        >
          <ha-svg-icon .path=${S1}></ha-svg-icon>
        </ha-outlined-icon-button>
      </div>
    `}_script(C){let H=this.hass,M=L0(C.entity_id),e=H.services?.script?.[M],r=e?.fields??{},t=Object.keys(r).length>0,i=C.attributes.current||0,d=C.attributes.mode,p=d==="queued",A=d==="parallel",c=p&&i>1,v=this._scriptData.data,Z=Object.entries(r).every(([y,c1])=>!c1.required||v?.[y]!==void 0),k=!Object.values(r).some(y=>y.required)||Z&&t9(C)||d==="restart",U=y=>{y.stopPropagation(),H.callService("script",M,this._scriptData.data)},B=y=>{y.stopPropagation(),H.callService("script","turn_off",{entity_id:C.entity_id})},L1=y=>{this._scriptData={...this._scriptData,...y.detail.value}};return o`
      <div class="script">
        ${e?.description?o`<ha-markdown
                breaks
                .content=${e.description}
              ></ha-markdown>`:a}
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
                    @value-changed=${L1}
                  ></ha-service-control>
                </div>
              `:a}
        <ha-control-button-group>
          <ha-control-button
            class="cancel-button"
            .disabled=${!i}
            @click=${B}
          >
            <ha-svg-icon .path=${q1}></ha-svg-icon>
            ${(p||A)&&i>1?H.localize("ui.card.script.cancel_all"):H.localize("ui.card.script.cancel")}
          </ha-control-button>
          <ha-control-button
            class="run-button"
            .disabled=${C.state==="unavailable"||!k}
            @click=${U}
          >
            <ha-svg-icon .path=${K1}></ha-svg-icon>
            ${H.localize("ui.card.script.run")}
          </ha-control-button>
        </ha-control-button-group>
      </div>
    `}_press(C){let H=l(C.entity_id),M=e=>{e.stopPropagation(),this.hass.callService(H==="input_button"?H:"button","press",{entity_id:C.entity_id})};return o`
      <ha-control-button-group class="press">
        <ha-control-button
          .disabled=${C.state==="unavailable"}
          @click=${M}
        >
          <ha-svg-icon .path=${a3}></ha-svg-icon>
          ${this.hass.localize("ui.card.button.press")}
        </ha-control-button>
      </ha-control-button-group>
    `}_header(C){let H=this._config;if(!this._showState)return a;let M=H.state_override||o9(this.hass,C);return H.show_last_changed===!1?o`<p class="state">
        ${M??this.hass.formatEntityState(C)}
      </p>`:o`
      <ha-more-info-state-header
        .hass=${this.hass}
        .stateObj=${C}
        .stateOverride=${M}
        .changedOverride=${l(C.entity_id)==="script"?C.attributes.last_triggered||0:void 0}
      >
        ${this._battery(C)}
      </ha-more-info-state-header>
    `}render(){if(!this._config||!this.hass)return a;let C=this._stateObj,H=this._config.appearance??"plain";return C?o`
      <ha-card class=${H} .label=${j(C)}>
        ${this._ready?o`
                ${this._header(C)}
                <div
                  class="controls ${this._controlName==="more_info"?"more-info":""}"
                >
                  ${this._control(C)}
                </div>
                ${this._afterControls(C)}
              `:a}
      </ha-card>
    `:o`<ha-card class=${H}>
        <ha-alert alert-type="warning">
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity})}
        </ha-alert>
      </ha-card>`}};f=Q(s7),L5=new WeakMap,M5=new WeakMap,e5=new WeakMap,r5=new WeakMap,t5=new WeakMap,o5=new WeakMap,i5=new WeakMap,a5=new WeakMap,s(f,4,"hass",v7,$,L5),s(f,4,"_config",l7,$,M5),s(f,4,"_ready",m7,$,e5),s(f,4,"_scriptData",p7,$,r5),s(f,4,"_lightControl",d7,$,t5),s(f,4,"_entry",n7,$,o5),s(f,4,"_positionMode",A7,$,i5),s(f,4,"_openState",a7,$,a5),z(f,$),m($,"styles",[x2,b`
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
    `]);customElements.get(F1)||customElements.define(F1,$);var x7=L=>L.uix??L.card_mod,A5=async(L,V,C,H,M)=>{let e=customElements.get("uix-node");if(e?.applyToElement)try{await e.applyToElement(L,V,C,H,!1,M)}catch(r){console.warn("[more-info-popup-card] UIX styling failed",r)}};var i9=24,a9=4,c7=["pointerdown","keydown","wheel","touchstart"],A9=L=>{let V=document;V.startViewTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches?V.startViewTransition(L):L()},u7,Z7,S7,h7,g7,f7,O7,y7,b7,_7,w7,k7,S,n5,d5,p5,m5,l5,v5,s5,x5,c5,u5,Z5,P=class extends(k7=T,w7=[E({attribute:!1})],_7=[E({type:Boolean,reflect:!0,attribute:"fixed-top"})],b7=[h()],y7=[h()],O7=[h()],f7=[h()],g7=[h()],h7=[h()],S7=[h()],Z7=[h()],u7=[h()],k7){constructor(){super(...arguments);x(this,n5,n(S,8,this)),n(S,11,this);x(this,d5,n(S,12,this,!0)),n(S,15,this);x(this,p5,n(S,16,this)),n(S,19,this);x(this,m5,n(S,20,this,!1)),n(S,23,this);x(this,l5,n(S,24,this,[])),n(S,27,this);x(this,v5,n(S,28,this,{})),n(S,31,this);x(this,s5,n(S,32,this,!1)),n(S,35,this);x(this,x5,n(S,36,this,!0)),n(S,39,this);x(this,c5,n(S,40,this,!1)),n(S,43,this);x(this,u5,n(S,44,this,!1)),n(S,47,this);x(this,Z5,n(S,48,this,!1)),n(S,51,this);m(this,"_section");m(this,"_keepAlive",new Map);m(this,"_sectionConfigKey",new WeakMap);m(this,"_childViews",new WeakMap);m(this,"_childHeaders",new WeakMap);m(this,"_autoCloseTimer");m(this,"_resizeObserver");m(this,"_fillCards",new Set);m(this,"_enableEscape",()=>{this._escapeEnabled=!0});m(this,"_disableEscape",()=>{this._escapeEnabled=!1});m(this,"_closeFromEvent",C=>{C.stopPropagation(),this.closeDialog()});m(this,"_goBackFromEvent",()=>this._goBack());m(this,"_observedContent");m(this,"_uixKey");m(this,"_uixSurface");m(this,"_goBack",()=>{let C=this._frame;if(C){if(C.children.length){this._replaceTop({...C,children:C.children.slice(0,-1)}),this._detailsYaml=!1;return}this._stack.length>1&&(this._detailsYaml=!1,this._stack=this._stack.slice(0,-1))}});m(this,"_enlarge",()=>{A9(()=>{this._fill=!this._fill})});m(this,"_breadcrumbClick",C=>{C.stopPropagation(),this._setView("related")});m(this,"_armAutoClose",()=>{this._clearAutoClose(!1);let C=this._config?.auto_close??0;if(!(C<=0)){for(let H of c7)this.addEventListener(H,this._armAutoClose,{passive:!0});this._autoCloseTimer=setTimeout(()=>this.closeDialog(),C*1e3)}});m(this,"_registerFillCard",C=>{C.stopPropagation(),this._fillCards.add(C.composedPath()[0]),this._updateFill()});m(this,"_updateScrollState",()=>{let C=this._observedContent;C&&(this._contentScrolled=C.scrollTop>i9,this._contentScrollable=C.scrollHeight-C.scrollTop-C.clientHeight>a9)})}get _config(){return this._params?.config}get _frame(){return this._stack[this._stack.length-1]}showDialog(C){let{config:H,view:M}=C;this._params=C,this._stack=[{entityId:H.entity,view:"root",children:[]}],M&&H.entity&&this._canShowView(M)&&(this._stack=[...this._stack,{entityId:H.entity,view:M,children:[]}]),this._fill=!1,this._detailsYaml=!1,this._escapeEnabled=!0,this._section=this._getSection(H),this._open=!0,H.entity&&this._loadEntry(H.entity),G2({popupId:H.popup_id,close:()=>this.closeDialog()}),this._armAutoClose()}closeDialog(){return this._open=!1,!0}_dialogClosed(C){if(C.target!==C.currentTarget)return;let H=this._config;H&&!H.keep_alive&&(this._section=void 0),this._params=void 0,this._stack=[],this._entries={},this._fill=!1,this._detailsYaml=!1,this._contentScrolled=!1,this._contentScrollable=!1,this._clearAutoClose(),this._uixKey=void 0,this._uixSurface=void 0,window.removeEventListener("dialog-closed",this._enableEscape),window.removeEventListener("show-dialog",this._disableEscape),G2(void 0),_(this,"dialog-closed",{dialog:this.localName})}_dialogOpened(C){C.target===C.currentTarget&&(window.addEventListener("dialog-closed",this._enableEscape),window.addEventListener("show-dialog",this._disableEscape))}connectedCallback(){super.connectedCallback(),this.addEventListener("close-dialog",this._closeFromEvent),this.addEventListener("close-child-view",this._goBackFromEvent),this.addEventListener(c2,this._registerFillCard)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("close-dialog",this._closeFromEvent),this.removeEventListener("close-child-view",this._goBackFromEvent),this.removeEventListener(c2,this._registerFillCard),this._resizeObserver?.disconnect(),this._clearAutoClose()}willUpdate(C){C.has("hass")&&this._section&&(this._section.hass=this.hass)}updated(C){super.updated(C);let H=this.renderRoot.querySelector(".content");H&&H!==this._observedContent&&(this._observedContent=H,this._resizeObserver??=new ResizeObserver(()=>{this._updateFill(),this._updateScrollState()}),this._resizeObserver.disconnect(),this._resizeObserver.observe(H),H.firstElementChild&&this._resizeObserver.observe(H.firstElementChild),this._updateFill(),this._updateScrollState()),this._applyUix()}_applyUix(){let C=this._config,H=this.renderRoot.querySelector("ha-adaptive-dialog, ha-dialog, ha-bottom-sheet");if(!C||!H)return;let M=x7(C),e=`${H.localName}:${C.popup_id}:${JSON.stringify(M??null)}`;if(e===this._uixKey&&H===this._uixSurface)return;this._uixKey=e,this._uixSurface=H;let r={config:C,params:{popup_id:C.popup_id}};A5(H,"more-info",void 0,r,"type-more-info-popup"),A5(H,"more-info-popup",M,r,"type-more-info-popup")}_getSection(C){let H=C.keep_alive?this._keepAlive.get(C.popup_id):void 0;H||(H=document.createElement("hui-section"),C.keep_alive&&this._keepAlive.set(C.popup_id,H));let M={type:"grid",column_span:C.column_span,cards:C.cards},e=JSON.stringify(M);return H.hass=this.hass,this._sectionConfigKey.get(H)!==e&&(this._sectionConfigKey.set(H,e),H.config=M),H}async _loadEntry(C){if(C in this._entries)return;let H;try{H=await this.hass.callWS({type:"config/entity_registry/get",entity_id:C})}catch{H=null}this._entries={...this._entries,[C]:H}}_canShowView(C){return E1(l0[C])}_pushFrame(C){if(C.view!=="root"&&!this._canShowView(C.view)){_(this,"hass-more-info",{entityId:C.entityId??null,view:C.view});return}C.entityId&&this._loadEntry(C.entityId),this._detailsYaml=!1,this._stack=[...this._stack,C]}_setView(C){let H=this._frame;H&&this._pushFrame({entityId:H.entityId,view:C,children:[]})}_replaceTop(C){this._stack=[...this._stack.slice(0,-1),C]}_showChildView(C){C.stopPropagation();let H=this._frame;if(!H)return;let M=C.detail;M.viewImport?.(),M.viewHeaderImport?.(),this._replaceTop({...H,children:[...H.children,M]})}_handleMoreInfo(C){if(this._config?.nested_more_info==="dialog")return;C.stopPropagation();let{entityId:H}=C.detail;if(!H)return;let M=C.detail.view??C.detail.tab??"info",e=this._frame;if(e&&e.entityId===H&&e.view!=="root"){e.view!==M&&this._setView(M);return}this._pushFrame({entityId:H,view:M==="details"?M:"info",children:[]})}_entryUpdated(C){let H=C.detail;H?.entity_id&&(this._entries={...this._entries,[H.entity_id]:H})}_handleMenu(C){let M=this._frame?.entityId;if(!M)return;let e=C.detail?.item?.value;switch(e){case"info":case"related":case"details":case"add_to":this._setView(e);break;case"device":{let r=$2(this.hass,M);r&&U2(this,`/config/devices/device/${r}`);break}case"edit":{let r=this.hass.states[M],t=r&&A0(r,this._entries[M]?.unique_id);t&&U2(this,t);break}default:break}}_clearAutoClose(C=!0){if(clearTimeout(this._autoCloseTimer),this._autoCloseTimer=void 0,C)for(let H of c7)this.removeEventListener(H,this._armAutoClose)}_updateFill(){for(let r of this._fillCards)r.isConnected||this._fillCards.delete(r);let[C,...H]=this._fillCards;for(let r of H)r.popupFill=0;if(!C)return;C.popupFill=0;let M=this._observedContent,e=M?.firstElementChild;!M||!e||this._frame?.view!=="root"||(C.popupFill=Math.floor(M.clientHeight-e.offsetHeight))}render(){let C=this._config,H=this._frame;if(!C||!H||!this.hass)return a;let M=!C.dismissable||H.view==="settings"||!this._escapeEnabled,e=K(H0(C)),r=this._renderContent(H);if(C.mode==="bottom_sheet")return o`
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
      `;let t=C.mode==="dialog"?"ha-dialog":"ha-adaptive-dialog",i=this._fill?"full":C0(C),d=o`
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
            ${d}
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
            ${d}
          </ha-adaptive-dialog>
        `}_isDefaultView(C){return(C.view==="root"||C.view==="info")&&!C.children.length}_renderNavigation(C,H){return this._stack.length===1&&!C.children.length?o`
          <ha-icon-button
            slot=${H}
            .label=${this.hass.localize("ui.common.close")}
            .path=${U1}
            @click=${this.closeDialog}
          ></ha-icon-button>
        `:o`
          <ha-icon-button-prev
            slot=${H}
            .label=${this.hass.localize("ui.dialogs.more_info_control.back_to_info")}
            @click=${this._goBack}
          ></ha-icon-button-prev>
        `}_renderTitle(C,H,M){let e=n2(this.hass,C,H);return d2(this.hass,e,M,C.mode==="bottom_sheet"?void 0:this._enlarge,this._breadcrumbClick)}_renderActions(C,H,M){let e=H.entityId,r=H.view==="root";if(!e)return a;if(!this._isDefaultView(H)){if(H.view==="details"&&!H.children.length)return o`
          <ha-icon-button
            slot=${M}
            .label=${this.hass.localize("ui.dialogs.more_info_control.toggle_yaml_mode")}
            .path=${z1}
            @click=${()=>{this._detailsYaml=!this._detailsYaml}}
          ></ha-icon-button>
        `;let Z=H.children[H.children.length-1];if(Z?.viewHeaderTag){let w=this._childElement(Z,Z.viewHeaderTag,"header");return w.slot=M,Object.assign(w,{hass:this.hass,params:Z.viewParams}),w}return a}if(r&&!C.show_header_actions)return a;let t=this.hass,i=P1(t),d=o0(t,e,!r)?o`
          <ha-icon-button
            slot=${M}
            .label=${t.localize("ui.dialogs.more_info_control.history")}
            .path=${X5}
            @click=${()=>this._setView("history")}
          ></ha-icon-button>
        `:a;if(!i)return o`
        ${d}
        ${D2(t)?o`
                <ha-icon-button
                  slot=${M}
                  .label=${t.localize("ui.dialogs.more_info_control.add_to.item")}
                  .path=${f2}
                  @click=${()=>this._setView("add_to")}
                ></ha-icon-button>
              `:a}
      `;let p=t.states[e],A=$2(t,e),c=i0(t,A),v=l(e);return o`
      ${d}
      <ha-icon-button
        slot=${M}
        .label=${t.localize("ui.dialogs.more_info_control.settings")}
        .path=${G1}
        @click=${()=>this._setView("settings")}
      ></ha-icon-button>
      <ha-dropdown
        slot=${M}
        placement="bottom-end"
        @closed=${Z=>Z.stopPropagation()}
        @opened=${Z=>Z.stopPropagation()}
        @wa-select=${this._handleMenu}
      >
        <ha-icon-button
          slot="trigger"
          .label=${t.localize("ui.common.menu")}
          .path=${r3}
        ></ha-icon-button>
        ${r?o`
                <ha-dropdown-item value="info">
                  <ha-svg-icon
                    slot="icon"
                    .path=${p1}
                  ></ha-svg-icon>
                  ${u(t,"dialog.entity_controls")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:a}
        ${D2(t)?o`
                <ha-dropdown-item value="add_to">
                  <ha-svg-icon
                    slot="icon"
                    .path=${f2}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.add_to.item")}
                </ha-dropdown-item>
                <wa-divider></wa-divider>
              `:a}
        ${A?o`
                <ha-dropdown-item value="device">
                  <ha-svg-icon
                    slot="icon"
                    .path=${c==="service"?_3:e3}
                  ></ha-svg-icon>
                  ${t.localize("ui.dialogs.more_info_control.device_or_service_info",{type:t.localize(`ui.dialogs.more_info_control.device_type.${c}`)})}
                </ha-dropdown-item>
              `:a}
        ${a0(p)?o`
                <ha-dropdown-item value="edit">
                  <ha-svg-icon
                    slot="icon"
                    .path=${Z3}
                  ></ha-svg-icon>
                  ${t.localize(`ui.dialogs.more_info_control.edit_domain.${v}`)||t.localize("ui.dialogs.more_info_control.edit")}
                </ha-dropdown-item>
              `:a}
        <ha-dropdown-item value="related">
          <ha-svg-icon slot="icon" .path=${p3}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.related")}
        </ha-dropdown-item>
        <ha-dropdown-item value="details">
          <ha-svg-icon slot="icon" .path=${A3}></ha-svg-icon>
          ${t.localize("ui.dialogs.more_info_control.details")}
        </ha-dropdown-item>
      </ha-dropdown>
    `}_childElement(C,H,M){let e=M==="view"?this._childViews:this._childHeaders,r=e.get(C);return r||(r=document.createElement(H),e.set(C,r)),r}_renderContent(C){let H=`${this._stack.length}:${C.entityId??""}:${C.view}`;return o`
      <div
        class=${A1({"content-wrapper":!0,"settings-view":C.view==="settings"})}
      >
        ${O0(H,o`
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
          class=${A1({"fade-top":!0,visible:this._contentScrolled})}
        ></div>
        <div
          class=${A1({"fade-bottom":!0,visible:this._contentScrollable})}
        ></div>
      </div>
    `}_renderChild(C){let H=C.children[C.children.length-1];if(!H)return a;let M=this._childElement(H,H.viewTag,"view");return Object.assign(M,{hass:this.hass,entry:C.entityId?this._entries[C.entityId]:void 0,params:H.viewParams}),o`<div class="child-view">${M}</div>`}_renderFrame(C){let H=this.hass,M=C.entityId,e=M?this._entries[M]:void 0;if(C.view==="root")return o`
        <div
          class="body"
          ?hidden=${C.children.length>0}
          style=${K({"--column-span":String(this._config.column_span)})}
        >
          ${this._section}
        </div>
        ${this._renderChild(C)}
      `;if(!M)return a;if(C.view==="settings")return o`
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
        `;default:return a}}};S=Q(k7),n5=new WeakMap,d5=new WeakMap,p5=new WeakMap,m5=new WeakMap,l5=new WeakMap,v5=new WeakMap,s5=new WeakMap,x5=new WeakMap,c5=new WeakMap,u5=new WeakMap,Z5=new WeakMap,s(S,4,"hass",w7,P,n5),s(S,4,"fixedTop",_7,P,d5),s(S,4,"_params",b7,P,p5),s(S,4,"_open",y7,P,m5),s(S,4,"_stack",O7,P,l5),s(S,4,"_entries",f7,P,v5),s(S,4,"_fill",g7,P,s5),s(S,4,"_escapeEnabled",h7,P,x5),s(S,4,"_detailsYaml",S7,P,c5),s(S,4,"_contentScrolled",Z7,P,u5),s(S,4,"_contentScrollable",u7,P,Z5),z(S,P),m(P,"styles",[c0,u0,Z0,S0,a2,A2,b`
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
    `]);customElements.get(J)||customElements.define(J,P);var T7=L=>{if(!(!L||L.length<2))try{return decodeURIComponent(L.slice(1))}catch{return}},n9=L=>`${L.pathname}${L.search}`,D1=L=>{L.history.replaceState(L.history.state,"",n9(L.location))},P7=(L,V=500)=>new Promise(C=>{let H=!1,M=()=>{H||(H=!0,L.removeEventListener("popstate",e),clearTimeout(r),L.location.hash&&D1(L),C())},e=()=>M(),r=setTimeout(M,V);L.addEventListener("popstate",e),L.history.back()});var B7=Symbol.for("more-info-popup-card.registry"),S5=class{constructor(V=window){this._win=V}_win;_hosts=new Set;_installed=!1;_consuming=!1;_checkScheduled=!1;register(V){this._install(),this._hosts.add(V),this._scheduleLocationCheck()}unregister(V){this._hosts.delete(V)}get(V){if(!V)return;let C;for(let H of this._hosts)H.isConnected&&H.popupConfig?.popup_id===V&&(C=H);return C}findByEntity(V){let C;for(let H of this._hosts){let M=H.popupConfig;H.isConnected&&M?.replace_more_info&&M.entity===V&&(C=H)}return C}open(V,C){let H=this.get(V);return H?.openPopup(C),!!H}close(V){let C=z2();C&&(!V||C.popupId===V)&&C.close()}toggle(V){z2()?.popupId===V?this.close(V):this.open(V)}_install(){this._installed||(this._installed=!0,this._win.addEventListener("location-changed",this._onLocationChanged),this._win.addEventListener("popstate",this._onPopState),this._win.addEventListener("ll-custom",this._onCustomAction),this._win.addEventListener("hass-more-info",this._onMoreInfo,{capture:!0}))}_scheduleLocationCheck(){this._checkScheduled||(this._checkScheduled=!0,queueMicrotask(()=>{this._checkScheduled=!1;let V=this._hostForHash();V&&!this._consuming&&(D1(this._win),V.openPopup())}))}_hostForHash(){return this.get(T7(this._win.location.hash))}_onLocationChanged=V=>{if(this._consuming)return;let C=this._hostForHash();if(!C)return;let M=!!!V.detail?.replace&&this._win.history.state?.from===this._win.location.pathname;this._consuming=!0,(M?P7(this._win):Promise.resolve(D1(this._win))).then(()=>{this._consuming=!1,C.openPopup()})};_onPopState=()=>{if(this._consuming)return;let V=this._hostForHash();V&&(D1(this._win),V.openPopup())};_onCustomAction=V=>{let H=V.detail?.more_info_popup;H&&(typeof H=="string"?this.open(H):H.open?this.open(H.open):H.toggle?this.toggle(H.toggle):H.close!==void 0&&this.close(H.close||void 0))};_onMoreInfo=V=>{let C=V.detail;if(!C?.entityId)return;let H=this.findByEntity(C.entityId);if(!H||V.composedPath().some(r=>r.localName===J))return;V.stopImmediatePropagation();let e=C.view??C.tab;H.openPopup({view:e&&e!=="info"?e:void 0})}},h5=()=>{let L=window;return L[B7]??=new S5(window),L[B7]};var $1=(L,V,C)=>C.map(H=>({value:H,label:u(L,`editor.${V}.${H}`)})),E7=(L,V)=>[{name:"general",type:"expandable",flatten:!0,expanded:!0,iconPath:Q1,title:u(L,"editor.section.general"),schema:[{name:"popup_id",required:!0,selector:{text:{prefix:"#"}}},{name:"entity",selector:{entity:{}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]}]},{name:"appearance",type:"expandable",flatten:!0,iconPath:u3,title:u(L,"editor.section.appearance"),schema:[{name:"mode",selector:{select:{mode:"dropdown",options:$1(L,"mode",["auto","dialog","bottom_sheet"])}}},{name:"breadcrumb",selector:{select:{mode:"dropdown",custom_value:!0,options:$1(L,"breadcrumb",["auto","none"])}}},{name:"",type:"grid",schema:[{name:"width",selector:{select:{mode:"dropdown",options:$1(L,"width",["small","medium","large","full","custom"])}}},...V.width==="custom"?[{name:"custom_width",selector:{text:{}}}]:[]]},{name:"",type:"grid",schema:[{name:"height",selector:{select:{mode:"dropdown",options:$1(L,"height",["auto","custom"])}}}]},...V.height==="custom"?[{name:"",type:"grid",schema:[{name:"min_height",selector:{text:{}}},{name:"max_height",selector:{text:{}}}]}]:[],{name:"column_span",selector:{number:{min:1,max:4,step:1,mode:"slider",slider_ticks:!0}}},...V.entity?[{name:"show_header_actions",selector:{boolean:{}}}]:[]]},{name:"behavior",type:"expandable",flatten:!0,iconPath:G1,title:u(L,"editor.section.behavior"),schema:[...V.entity?[{name:"replace_more_info",selector:{boolean:{}}}]:[],{name:"nested_more_info",selector:{select:{mode:"list",options:$1(L,"nested_more_info",["inline","dialog"])}}},{name:"dismissable",selector:{boolean:{}}},{name:"auto_close",selector:{number:{min:0,max:3600,step:5,mode:"box",unit_of_measurement:"s"}}},{name:"keep_alive",selector:{boolean:{}}}]}],d9={entity:"editor.entity_helper",breadcrumb:"editor.breadcrumb_helper",custom_width:"editor.length_helper",min_height:"editor.length_helper",max_height:"editor.length_helper",column_span:"editor.column_span_helper",replace_more_info:"editor.replace_more_info_helper"},p9={popup_id:"editor.popup_id",entity:"editor.entity",name:"editor.name",icon:"editor.icon",breadcrumb:"editor.breadcrumb",mode:"editor.mode",width:"editor.width",custom_width:"editor.custom_width",height:"editor.height",min_height:"editor.min_height",max_height:"editor.max_height",column_span:"editor.column_span",show_header_actions:"editor.show_header_actions",replace_more_info:"editor.replace_more_info",nested_more_info:"editor.nested_more_info",dismissable:"editor.dismissable",auto_close:"editor.auto_close",keep_alive:"editor.keep_alive"},R7=L=>V=>{if(V.title)return V.title;let C=p9[V.name];return C?u(L,C):V.name},F7=(L,V)=>C=>{if(C.name==="popup_id")return u(L,"editor.popup_id_helper",{id:V.popup_id||"\u2026"});let H=d9[C.name];return H?u(L,H):void 0};var D7=L=>{let V={views:[{type:"sections",sections:[L.section]}]};return{config:V,rawConfig:V,editMode:!0,urlPath:null,mode:"storage",locale:L.locale,enableFullEditMode:()=>{},setEditMode:()=>{},saveConfig:async C=>{let H=C.views?.[0]?.sections?.[0]?.cards??[];L.onSave(structuredClone(H))},deleteConfig:async()=>{},showToast:C=>L.onToast(C)}},$7=L=>{if(!Array.isArray(L))return;let V=L[L.length-1];return typeof V=="number"?V:void 0};var m9=30,l9=L=>L.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9_-]/g,"_").replace(/^[_-]+/,""),W7,U7,z7,G7,Q7,K7,q7,Y7,X7,O,g5,f5,O5,y5,b5,_5,w5,k5,N=class extends(X7=T,Y7=[E({attribute:!1})],q7=[E({attribute:!1})],K7=[h()],Q7=[h()],G7=[h()],z7=[h()],U7=[h()],W7=[h()],X7){constructor(){super(...arguments);x(this,g5,n(O,8,this)),n(O,11,this);x(this,f5,n(O,12,this)),n(O,15,this);x(this,O5,n(O,16,this)),n(O,19,this);x(this,y5,n(O,20,this)),n(O,23,this);x(this,b5,n(O,24,this,!1)),n(O,27,this);x(this,_5,n(O,28,this,!0)),n(O,31,this);x(this,w5,n(O,32,this,!0)),n(O,35,this);m(this,"_section");m(this,"_sectionKey");m(this,"_undo",[]);x(this,k5,n(O,36,this)),n(O,39,this);m(this,"_noticeTimer");m(this,"_undoLast",()=>{let C=this._undo[this._undo.length-1];this._notice=void 0,C&&(this._undo=this._undo.slice(0,-1),this._setCards(C,!1))});m(this,"_toast",C=>{clearTimeout(this._noticeTimer),this._notice={message:C.message,undo:!!C.action&&this._undo.length>0},this._noticeTimer=setTimeout(()=>{this._notice=void 0},C.duration&&C.duration>0?C.duration:6e3)});m(this,"_interceptEdit",{capture:!0,handleEvent:C=>{let H=$7(C.detail?.path);H!==void 0&&(C.stopPropagation(),C.type==="ll-duplicate-card"?this._duplicate(H):this._openEditor(H))}});m(this,"_interceptCreate",{capture:!0,handleEvent:C=>{C.stopPropagation(),this._sub={kind:"add"}}});m(this,"_back",()=>{this._returnToCards()})}setConfig(C){T1(C),this._config=structuredClone(C)}connectedCallback(){super.connectedCallback(),s0().then(()=>{this._ready=!0})}willUpdate(C){(C.has("_config")||C.has("hass"))&&this._config&&this.hass&&this._syncSection()}get _cards(){return this._config?.cards??[]}get _sectionConfig(){return{type:"grid",column_span:this._config?.column_span??k1.column_span,cards:this._cards}}_emit(C){this._config=C,_(this,"config-changed",{config:C})}_setCards(C,H=!0){this._config&&JSON.stringify(C)!==JSON.stringify(this._cards)&&(H&&(this._undo=[...this._undo,structuredClone(this._cards)].slice(-m9)),this._emit({...this._config,cards:C}))}_syncSection(){let C=this._sectionConfig;this._section??=document.createElement("hui-section");let H=this._section;H.hass=this.hass;let M=JSON.stringify(C);M!==this._sectionKey&&(this._sectionKey=M,H.viewIndex=0,H.index=0,H.preview=!0,H.lovelace=D7({section:C,locale:this.hass.locale,onSave:e=>this._setCards(e),onToast:this._toast}),H.config=C)}_copyNative(C){let H=this._section?.firstElementChild??this._section;H&&_(H,"ll-copy-card",{path:[0,0,C]})}_openEditor(C){this._guiMode=!0,this._guiModeAvailable=!0,this._sub={kind:"edit",index:C}}_returnToCards(){this._sub=void 0,this.updateComplete.then(()=>this.renderRoot.querySelector(".cards-header")?.scrollIntoView({block:"start"}))}_duplicate(C){let H=[...this._cards];H.splice(C+1,0,structuredClone(H[C])),this._setCards(H),this._openEditor(C+1)}_delete(C){let H=[...this._cards];H.splice(C,1),this._setCards(H),this._returnToCards(),this._toast({message:u(this.hass,"editor.card_deleted"),action:{text:u(this.hass,"editor.undo"),action:this._undoLast}})}_cut(C){this._copyNative(C);let H=[...this._cards];H.splice(C,1),this._setCards(H),this._returnToCards()}_cardPicked(C){C.stopPropagation();let H=C.detail.config;if(!H?.type)return;let M=[...this._cards,H];this._setCards(M),this._openEditor(M.length-1)}_cardChanged(C){if(C.stopPropagation(),this._sub?.kind!=="edit")return;let H=[...this._cards];H[this._sub.index]=C.detail.config,this._guiModeAvailable=C.detail.guiModeAvailable??!0,this._setCards(H)}_guiModeChanged(C){C.stopPropagation(),this._guiMode=C.detail.guiMode,this._guiModeAvailable=C.detail.guiModeAvailable}_toggleMode(){this.renderRoot.querySelector("hui-card-element-editor")?.toggleMode()}_valueChanged(C){if(C.stopPropagation(),!this._config)return;let H={...C.detail.value};typeof H.popup_id=="string"&&(H.popup_id=l9(H.popup_id));let M={...this._config,...H};for(let[e,r]of Object.entries(k1))M[e]===r&&delete M[e];for(let e of Object.keys(M))(M[e]===""||M[e]===void 0)&&delete M[e];M.width!=="custom"&&delete M.custom_width,M.height!=="custom"&&(delete M.min_height,delete M.max_height),M.entity||(delete M.replace_more_info,delete M.show_header_actions),this._emit(M)}_testPopup(){if(!this._config)return;let C;try{C=i2(T1(this._config))}catch{return}_(this,"show-dialog",{dialogTag:J,dialogImport:()=>Promise.resolve(),dialogParams:{config:C},addHistory:!0})}render(){return!this.hass||!this._config?a:this._ready?this._sub?.kind==="add"?this._renderAdd():this._sub?.kind==="edit"&&this._cards[this._sub.index]?this._renderEdit(this._sub.index):this._renderMain():o`<ha-spinner size="small"></ha-spinner>`}_renderMain(){let C=this.hass,H=this._config,M={...k1,...H};return o`
      <ha-form
        .hass=${C}
        .data=${M}
        .schema=${E7(C,M)}
        .computeLabel=${R7(C)}
        .computeHelper=${F7(C,H)}
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
                      </ha-button>`:a}
              </ha-alert>
            `:a}
      ${this._cards.length?a:o`<p class="empty">${u(C,"editor.empty")}</p>`}
      <div
        class="grid"
        style=${K({"--column-span":String(H.column_span??1)})}
        @ll-edit-card=${this._interceptEdit}
        @ll-duplicate-card=${this._interceptEdit}
        @ll-create-card=${this._interceptCreate}
      >
        ${this._section}
      </div>
    `}_renderSubHeader(C,H=a){return o`
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
    `}_renderEdit(C){let H=this.hass,M=this._cards[C],e=t=>H.localize(`ui.panel.lovelace.editor.edit_card.${t}`),r=o`
      <ha-icon-button
        .label=${e(this._guiMode?"show_code_editor":"show_visual_editor")}
        .path=${this._guiMode?z1:m3}
        .disabled=${!this._guiModeAvailable}
        @click=${this._toggleMode}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("duplicate")}
        .path=${V3}
        @click=${()=>this._duplicate(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("copy")}
        .path=${C3}
        @click=${()=>this._copyNative(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("cut")}
        .path=${H3}
        @click=${()=>this._cut(C)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${e("delete")}
        .path=${M3}
        @click=${()=>this._delete(C)}
      ></ha-icon-button>
    `;return o`
      ${this._renderSubHeader(u(H,"editor.edit_card"),r)}
      <hui-card-element-editor
        .hass=${H}
        .lovelace=${this.lovelace}
        .value=${M}
        .sectionConfig=${this._sectionConfig}
        show-visibility-tab
        @config-changed=${this._cardChanged}
        @GUImode-changed=${this._guiModeChanged}
      ></hui-card-element-editor>
    `}};O=Q(X7),g5=new WeakMap,f5=new WeakMap,O5=new WeakMap,y5=new WeakMap,b5=new WeakMap,_5=new WeakMap,w5=new WeakMap,k5=new WeakMap,s(O,4,"hass",Y7,N,g5),s(O,4,"lovelace",q7,N,f5),s(O,4,"_config",K7,N,O5),s(O,4,"_sub",Q7,N,y5),s(O,4,"_ready",G7,N,b5),s(O,4,"_guiMode",z7,N,_5),s(O,4,"_guiModeAvailable",U7,N,w5),s(O,4,"_notice",W7,N,k5),z(O,N),m(N,"styles",b`
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
  `);customElements.get(w1)||customElements.define(w1,N);var J7={button:"button.press",input_button:"input_button.press",scene:"scene.turn_on",script:"script.turn_on"},j7=["off","closed","locked","unavailable","unknown","idle","standby","paused","docked"],C4=600,N1=L=>{if(L.type)return L.type;if(L.attribute)return"select";let V=L.entity?l(L.entity):"";return x1.includes(V)?"select":V7.includes(V)?"number":L7.includes(V)?"toggle":"action"},H4=L=>L?.map(V=>typeof V=="string"?{value:V}:{...V,value:String(V.value)}),T5=L=>{let[V,C]=L.split(".",2);return[V,C]};var I1="more-info-controls-card",V4,L4,M4,e4,r4,I,P5,B5,E5,R5,H1=class extends(r4=T,e4=[E({attribute:!1})],M4=[h()],L4=[h()],V4=[h()],r4){constructor(){super(...arguments);x(this,P5,n(I,8,this)),n(I,11,this);x(this,B5,n(I,12,this)),n(I,15,this);x(this,E5,n(I,16,this,!1)),n(I,19,this);x(this,R5,n(I,20,this,{})),n(I,23,this);m(this,"_timers",{})}static getConfigForm(){return o7()}static getStubConfig(C,H){let M=H.find(i=>i.startsWith("light.")&&C.states[i]?.attributes.effect_list),e=H.find(i=>x1.includes(l(i))),r=H.find(i=>i.startsWith("switch.")),t=[];return M&&t.push({entity:M,attribute:"effect"}),e&&t.push({entity:e}),r&&t.push({entity:r}),!t.length&&H[0]&&t.push({entity:H[0]}),{type:`custom:${I1}`,controls:t}}setConfig(C){if(!Array.isArray(C?.controls))throw new Error('"controls" must be a list');C.controls.forEach((H,M)=>{if(!H||typeof H!="object")throw new Error(`Control ${M+1} is invalid`);let e=N1(H);if(e!=="action"&&e!=="button"&&!H.entity)throw new Error(`Control ${M+1} needs an "entity"`);if(H.attribute&&H.attribute!=="state"&&!R1[H.attribute]&&!H.options)throw new Error(`Control ${M+1}: unknown attribute "${H.attribute}"; add "options" and "perform_action"`)}),this._config=C}connectedCallback(){super.connectedCallback(),v1("light",["ha-more-info-control-select-container","ha-control-select-menu"]).then(()=>{this._ready=!0})}disconnectedCallback(){super.disconnectedCallback(),Object.values(this._timers).forEach(clearTimeout),this._timers={}}getCardSize(){return 1}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}_stateObj(C){return C.entity?this.hass?.states[C.entity]:void 0}_selectSpec(C,H){if(C.attribute)return C.attribute==="state"?H7:R1[C.attribute]??{options:()=>[],value:M=>M.attributes[C.attribute]==null?void 0:String(M.attributes[C.attribute]),service:()=>["",""],data:M=>({[C.data_key??C.attribute]:M}),icon:l2.icon};if(x1.includes(l(H.entity_id)))return l2;if(C.options&&C.perform_action)return{options:()=>[],value:()=>{},service:()=>["",""],data:M=>({[C.data_key??"value"]:M}),icon:l2.icon,attributeIcons:!1}}_call(C,H,M,e){let[r,t]=C.perform_action?T5(C.perform_action):H;if(!r||!t)return;let i={...C.entity?{entity_id:C.entity}:{},...C.perform_action&&C.data_key?{[C.data_key]:e}:M,...C.data};this.hass.callService(r,t,i)}_label(C,H){return C.name?C.name:H?C.attribute&&C.attribute!=="state"?this.hass.formatEntityAttributeName(H,C.attribute):j(H):""}_icon(C,H,M,e){return C.icon?o`<ha-icon
        slot=${e??a}
        .icon=${C.icon}
      ></ha-icon>`:M?o`<ha-svg-icon
        slot=${e??a}
        .path=${M}
      ></ha-svg-icon>`:o`<ha-state-icon
      slot=${e??a}
      .hass=${this.hass}
      .stateObj=${H}
    ></ha-state-icon>`}_renderSelect(C,H){let M=this.hass,e=this._selectSpec(C,H);if(!e)return a;let r=H4(C.options),t=r?r.map(v=>v.value):e.options(H),i=C.attribute&&C.attribute!=="state"?C.attribute:void 0,d=v=>{let Z=r?.find(w=>w.value===v);return Z?.name?Z.name:e.formatAsState||!i?M.formatEntityState(H,v):M.formatEntityAttributeValue(H,i,v==="true"?!0:v==="false"?!1:v)},p=t.map(v=>{let Z=r?.find(k=>k.value===v)?.icon,w=Z?void 0:e.optionIcons?.[v];return{value:v,label:d(v),...Z?{icon:Z}:{},...w?{iconPath:w}:{}}}),A=v=>i&&!e.formatAsState?o`<ha-attribute-icon
            slot="icon"
            .hass=${M}
            .stateObj=${H}
            .attribute=${i}
            .attributeValue=${v}
          ></ha-attribute-icon>`:o`<ha-state-icon
            slot="icon"
            .hass=${M}
            .stateObj=${H}
            .stateValue=${v}
          ></ha-state-icon>`,c=!i&&x1.includes(l(H.entity_id));return o`
      <ha-control-select-menu
        .label=${this._label(C,H)}
        .value=${e.value(H)}
        .options=${p}
        .renderIcon=${C.icon||e.attributeIcons===!1?void 0:A}
        .disabled=${H.state==="unavailable"}
        @wa-select=${v=>{let Z=v.detail?.item?.value;Z===void 0||Z===e.value(H)||this._call(C,e.service(H),e.data(Z),Z)}}
      >
        ${this._icon(C,c?H:void 0,c?void 0:e.icon,"icon")}
      </ha-control-select-menu>
    `}_renderToggle(C,H){let M=l(H.entity_id),e=!j7.includes(H.state),r=H.state==="unavailable",t=()=>{C.perform_action?this._call(C,["",""],{},void 0):M==="lock"?this.hass.callService("lock",e?"lock":"unlock",{entity_id:H.entity_id}):M==="cover"||M==="valve"?this.hass.callService(M,"toggle",{entity_id:H.entity_id}):this.hass.callService("homeassistant","toggle",{entity_id:H.entity_id})};return o`
      <button
        class=${A1({chip:!0,toggle:!0,active:e})}
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
    `}_renderNumber(C,H,M){let e=this.hass,r=H.attributes,t=C.min??Number(r.min??0),i=C.max??Number(r.max??100),d=C.step??Number(r.step??1),p=this._pending[M]??Number(C.attribute?r[C.attribute]:H.state),A=Number.isFinite(p),c=H.state==="unavailable"||!A,v=(String(d).split(".")[1]??"").length,Z=A&&(this._pending[M]!==void 0||C.attribute)?`${p.toFixed(v)}${r.unit_of_measurement?` ${r.unit_of_measurement}`:""}`:e.formatEntityState(H),w=k=>{let U=Math.min(i,Math.max(t,Number((p+k*d).toFixed(v))));U!==p&&(this._pending={...this._pending,[M]:U},clearTimeout(this._timers[M]),this._timers[M]=setTimeout(()=>{let B=l(H.entity_id);this._call(C,[B,"set_value"],{value:U},U);let L1={...this._pending};delete L1[M],this._pending=L1},C4))};return o`
      <div
        class="chip number"
        ?disabled=${c}
        role="group"
        aria-label=${this._label(C,H)}
      >
        <ha-icon-button
          .label=${e.localize("ui.card.counter.actions.decrement")||"\u2212"}
          .path=${x3}
          .disabled=${c||p<=t}
          @click=${()=>w(-1)}
        ></ha-icon-button>
        <div class="content center">
          <p class="label">${this._label(C,H)}</p>
          <p class="value">${Z}</p>
        </div>
        <ha-icon-button
          .label=${e.localize("ui.card.counter.actions.increment")||"+"}
          .path=${h3}
          .disabled=${c||p>=i}
          @click=${()=>w(1)}
        ></ha-icon-button>
      </div>
    `}_runAction(C,H){if(H.action!=="none"){if(H.action==="more-info"){let M=H.entity??C.entity;M&&_(this,"hass-more-info",{entityId:M});return}_(this,"hass-action",{config:{entity:C.entity,tap_action:H},action:"tap"})}}_renderButton(C,H){let M=C.entity?l(C.entity):"",e=()=>{if(C.tap_action){this._runAction(C,C.tap_action);return}let r=C.perform_action??J7[M]??(C.entity?"homeassistant.toggle":void 0);if(!r)return;let[t,i]=T5(r);this.hass.callService(t,i,{...C.entity?{entity_id:C.entity}:{},...C.data})};return o`
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
          ${r?o`<p class="value">${r}</p>`:a}
        </div>
        ${e?o`<div class="icon">
                <ha-svg-icon .path=${j5}></ha-svg-icon>
              </div>`:a}
      </button>
    `}_renderItem(C,H){let M=this._stateObj(C),e=N1(C);if(e==="action")return this._renderAction(C,M);if(e==="button")return this._renderButton(C,M);if(!M)return o`<div class="chip" disabled>
        <div class="content">
          <p class="label">${C.name??C.entity}</p>
          <p class="value">
            ${this.hass.localize("state.default.unavailable")}
          </p>
        </div>
      </div>`;switch(e){case"select":return this._renderSelect(C,M);case"toggle":return this._renderToggle(C,M);case"number":return this._renderNumber(C,M,H);default:return a}}_renderWrapped(C){let H=C.length;return o`
      <div class="wrap-controls">
        <div
          class=${A1({"wrap-scroll":!0,[`items-${H}`]:!0,multiline:H>=4})}
        >
          ${C}
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return a;let C=this._config.appearance??"plain",H=this._config.controls.map((r,t)=>({item:r,index:t})),M=H.filter(({item:r})=>N1(r)==="button"),e=H.filter(({item:r})=>N1(r)!=="button");return o`
      <ha-card class=${C}>
        ${this._ready?H.length?o`
                  ${M.length?o`<div class="buttons">
                          <ha-control-button-group>
                            ${M.map(({item:r,index:t})=>this._renderItem(r,t))}
                          </ha-control-button-group>
                        </div>`:a}
                  ${e.length?this._config.wrap?this._renderWrapped(e.map(({item:r,index:t})=>this._renderItem(r,t))):o`<ha-more-info-control-select-container>
                            ${e.map(({item:r,index:t})=>this._renderItem(r,t))}
                          </ha-more-info-control-select-container>`:a}
                `:o`<p class="empty">
                  ${u(this.hass,"controls.empty")}
                </p>`:a}
      </ha-card>
    `}};I=Q(r4),P5=new WeakMap,B5=new WeakMap,E5=new WeakMap,R5=new WeakMap,s(I,4,"hass",e4,H1,P5),s(I,4,"_config",M4,H1,B5),s(I,4,"_ready",L4,H1,E5),s(I,4,"_pending",V4,H1,R5),z(I,H1),m(H1,"styles",[x2,i7,b`
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
    `]);customElements.get(I1)||customElements.define(I1,H1);var t4,o4,i4,a4,A4,W,F5,D5,$5,N5,V1=class extends(A4=T,a4=[E({attribute:!1})],i4=[E({attribute:!1})],o4=[h()],t4=[h()],A4){constructor(){super(...arguments);x(this,F5,n(W,8,this)),n(W,11,this);x(this,D5,n(W,12,this)),n(W,15,this);x(this,$5,n(W,16,this)),n(W,19,this);x(this,N5,n(W,20,this,"hidden")),n(W,23,this);m(this,"connectedWhileHidden",!0);m(this,"_preview",!1);m(this,"_previewSection");m(this,"_previewSectionKey")}static async getConfigElement(){return document.createElement(w1)}static getStubConfig(C,H){let M=H.find(i=>i.startsWith("light."))??H[0],e=M?C.states[M]:void 0,r=e?j3(j(e)):"",t=Math.random().toString(36).slice(2,6);return{type:`custom:${R2}`,popup_id:r?`${r}_${t}`:`popup_${t}`,cards:[]}}get preview(){return this._preview}set preview(C){this._preview=!!C,this._syncSurface()}get popupConfig(){return this._config}setConfig(C){this._config=i2(T1(C)),this._syncSurface()}getCardSize(){return this._surface==="hidden"?0:this._surface==="preview"?6:1}getGridOptions(){return this._computeSurface()==="preview"?{columns:"full",rows:"auto"}:{columns:6,rows:1,min_columns:3,max_rows:1}}openPopup(C){let H=this._config;H&&v0().then(M=>{if(M.includes("ha-adaptive-dialog")||M.includes("hui-section")){_(this,"hass-notification",{message:u(this.hass,"card.missing_elements")});return}_(this,"show-dialog",{dialogTag:J,dialogImport:()=>Promise.resolve(),dialogParams:{config:H,view:C?.view},addHistory:!0})})}connectedCallback(){super.connectedCallback(),h5().register(this),this._syncSurface()}disconnectedCallback(){super.disconnectedCallback(),h5().unregister(this)}_computeSurface(){return this._preview?this.closest("hui-card-edit-mode, hui-card-options")?"placeholder":"preview":"hidden"}_syncSurface(){let C=this._computeSurface();C!==this._surface&&(this._surface=C);let H=C==="hidden";this.hasAttribute("hidden")!==H&&(this.toggleAttribute("hidden",H),this.isConnected&&_(this,"card-visibility-changed",{value:!H}))}willUpdate(C){C.has("hass")&&this._previewSection&&(this._previewSection.hass=this.hass)}render(){return!this._config||!this.hass||this._surface==="hidden"?a:x0(this.hass.config.version)?this._surface==="placeholder"?this._renderPlaceholder(this._config):this._renderPreview(this._config):o`<ha-alert alert-type="warning">
        ${u(this.hass,"card.unsupported_version",{version:B1.join(".")})}
      </ha-alert>`}_renderPlaceholder(C){let H=this.hass,M=C.entity?H.states[C.entity]:void 0,e=C.name??(M?j(M):C.popup_id),r=C.cards.length,t=r===1?u(H,"card.cards_count_one"):u(H,"card.cards_count",{count:r});return o`
      <ha-card class="placeholder">
        <ha-tile-container>
          <ha-tile-icon
            slot="icon"
            .icon=${C.icon}
            .iconPath=${C.icon?void 0:Q1}
          >
            ${C.icon||!M?a:o`<ha-state-icon
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
              title=${u(H,"card.hidden_hint",{id:C.popup_id})}
            >
              <ha-svg-icon .path=${t3}></ha-svg-icon>
              #${C.popup_id} · ${t}
            </span>
          </ha-tile-info>
        </ha-tile-container>
      </ha-card>
    `}_renderPreview(C){let H=this.hass,M={type:"grid",column_span:C.column_span,cards:C.cards},e=JSON.stringify(M);this._previewSection??=document.createElement("hui-section"),this._previewSection.hass=H,this._previewSectionKey!==e&&(this._previewSectionKey=e,this._previewSection.config=M);let r=n2(H,C,{entityId:C.entity,view:"root",children:[]});return o`
      <div class="surface" inert>
        <ha-dialog-header>
          <ha-icon-button
            slot="navigationIcon"
            .label=${H.localize("ui.common.close")}
            .path=${U1}
          ></ha-icon-button>
          ${d2(H,r,"title")}
        </ha-dialog-header>
        <div
          class="body"
          style=${K({"--column-span":String(C.column_span)})}
        >
          ${this._previewSection}
        </div>
      </div>
    `}};W=Q(A4),F5=new WeakMap,D5=new WeakMap,$5=new WeakMap,N5=new WeakMap,s(W,4,"hass",a4,V1,F5),s(W,4,"layout",i4,V1,D5),s(W,4,"_config",o4,V1,$5),s(W,4,"_surface",t4,V1,N5),z(W,V1),m(V1,"styles",[a2,A2,b`
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
    `]);customElements.get(F2)||(customElements.define(F2,V1),window.customCards=window.customCards??[],window.customCards.push({type:R2,name:u(void 0,"card.name"),description:u(void 0,"card.description"),preview:!1,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),window.customCards.push({type:F1,name:u(void 0,"state_card.name"),description:u(void 0,"state_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"},{type:I1,name:u(void 0,"controls_card.name"),description:u(void 0,"controls_card.description"),preview:!0,documentationURL:"https://github.com/cheerpipe/more-info-popup-card"}),console.info("%c MORE-INFO-POPUP-CARD %c 0.1 ","color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;"));export{V1 as MoreInfoPopupCard};
//# sourceMappingURL=more-info-popup-card.js.map
