(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/plus.063b4119.png"},28:function(e,a,t){e.exports=t(39)},33:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n,r,o,c,l,s,i,m,u,d,g,p=t(0),v=t.n(p),E=t(25),b=t.n(E),f=(t(33),t(10)),h=t(11),N=t(13),q=t(12),w=t(6),C=t(14),I=t(15),R=t(18),y=t.n(R),Y=function(e){Object(N.a)(t,e);var a=Object(q.a)(t);function t(e){var p;return Object(f.a)(this,t),(p=a.call(this,e)).sketch=function(e){var a=Object(I.a)(p),t=null;e.preload=function(){n=e.loadImage("pngs/01.png"),r=e.loadImage("pngs/03.png"),o=e.loadImage("pngs/04.png"),c=e.loadImage("pngs/05.png"),l=e.loadImage("pngs/06.png"),s=e.loadImage("pngs/08.png"),i=e.loadImage("pngs/09.png"),m=e.loadImage("pngs/10.png"),u=e.loadImage("pngs/11.png"),d=e.loadImage("pngs/12.png"),g=e.loadImage("pngs/13.png")},e.setup=function(){t=e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL),a.canvas=t,t.position(0,0),t.style("z-index","1"),t.parent("#root")},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)},e.draw=function(){if(e.windowWidth>500){e.smooth(),e.background(255,0),e.scale(.4+e.mouseY/4e3),e.image(n,-340,-30),e.rotateY(e.mouseX/-12e3),e.image(g,-200,-30),e.rotateY(e.mouseX/-12e3),e.image(r,-80,-30),e.rotateY(e.mouseX/-12e3),e.image(o,30,-30),e.rotateY(e.mouseX/-12e3),e.image(c,140,-30),e.rotateY(e.mouseX/-12e3),e.image(l,260,-30),e.rotateY(e.mouseX/-12e3),e.image(g,390,-30),e.rotateX(e.mouseX/1e4),e.rotateX(e.mouseY/1134),e.image(s,-345,130),e.rotateY(e.mouseX/-12e3),e.image(i,-220,130),e.rotateY(e.mouseX/12e4),e.image(m,-80,130),e.rotateY(e.mouseY/22e3),e.image(u,40,130),e.rotateY(e.mouseY/12e3),e.image(g,210,130),e.rotateY(e.mouseY/12e3),e.image(d,130,130),e.rotateY(e.mouseY/12e3),e.ambientLight(0,255,30);for(var a=0;a<10;a++)e.translate(-200,32),e.rotateY(1e3),e.ambientMaterial(250),e.sphere(e.mouseX/100%20+3*a,25,25)}else{e.smooth();var t=e.millis();e.background(255,0),e.rotateY(t/30%2e3/800),e.translate(-20,-20),e.scale(.35),e.image(n,-340,-30),e.image(g,-200,-30),e.image(r,-80,-30),e.image(o,30,-30),e.image(c,140,-30),e.image(l,260,-30),e.image(g,390,-30),e.image(s,-350,130),e.image(i,-220,130),e.image(m,-80,130),e.image(u,40,130),e.image(g,210,130),e.image(d,130,130),e.ambientLight(0,255,30);for(var p=0;p<10;p++)e.translate(-200,32),e.rotateY(1e3),e.ambientMaterial(250),e.sphere(t/30%2e3/800+3*p,27,27)}}},p.componentDidMount=function(){p.myP5=new y.a(p.sketch,p.myRef.current)},p.componentWillUnmount=function(){p.canvas.remove()},p.myRef=v.a.createRef(),p}return Object(h.a)(t,[{key:"componentDidUpdate",value:function(){this.canvas.remove(),this.myP5=new y.a(this.sketch,this.myRef.current)}},{key:"render",value:function(){return v.a.createElement("section",{ref:this.myRef,className:"Inicio",id:"Inicio"})}}]),t}(v.a.Component),O=t(26),Q=t.n(O),k=function(e){var a=Object(p.useState)(!1),t=Object(C.a)(a,2),n=t[0],r=t[1];return v.a.createElement("div",{className:"nav-content"},v.a.createElement("nav",{className:n?"nav-active":"nav"},v.a.createElement("div",{className:"nav-links"},v.a.createElement("ul",null,v.a.createElement("li",null,v.a.createElement("a",{href:"#Inicio"},"Inicio")),v.a.createElement("li",null,v.a.createElement("a",{href:"#Servicios"},"Servicios")),v.a.createElement("li",null,v.a.createElement("a",{href:"#MenuQR"},"Menu QR")),v.a.createElement("li",null,v.a.createElement("a",{href:"#Nosotros"},"Nosotros")),v.a.createElement("li",null,v.a.createElement("a",{href:"#Contacto"},"Contacto"))))),v.a.createElement("div",{className:"toggle-btn",onClick:function(){return r(!n),void e.setNavAct()}}," ",n?v.a.createElement("span",{style:{fontFamily:"OPTIImprovNewWideNine",fontSize:"0.7em"}}):v.a.createElement("img",{style:{width:"30px"},src:Q.a,alt:"a"})))};function j(){return v.a.createElement("section",{id:"Nosotros",className:"Nosotros"},v.a.createElement("p",{className:"nosotres-texto"},"Collabo studio surge como uni\xf3n de un colectivo diverso dedicado al desarrollo creativo. De las \xe1reas de direcci\xf3n de arte, estrategia, desarrollo web, creative coding, dise\xf1o gr\xe1fico, fotograf\xeda y community management, nos unimos para dar vida a proyectos din\xe1micos con alto impacto digital."))}var X=t(9),D=t.n(X);function M(){return v.a.createElement("section",{id:"MenuQR",className:"MenuQR"},v.a.createElement(w.a,null,v.a.createElement("div",{className:"carrousel-container"},v.a.createElement("div",{className:"carrousel-section img-qr-container"}," ",v.a.createElement("img",{className:"img-qr",src:D.a,alt:""})," "),v.a.createElement("div",{className:"buttons-caption-qr-container"},v.a.createElement("p",{className:"texto-carta-qr"},"Las cartas QR llegaron para protegernos de la amenaza del COVID-19. Conoce m\xe0s sobre la nueva opci\xf2n que adem\xe1s cuida el planeta."),v.a.createElement("div",{className:"buttons-container-qr"},v.a.createElement(w.b,{to:""},v.a.createElement("div",{className:"button-qr QR1"},"Ver Demo")),v.a.createElement("a",{href:"#Contacto"},v.a.createElement("div",{className:"button-qr QR2"},"Saber M\xe0s")))),v.a.createElement("div",{className:"carrousel-section img-qr-container"}," ",v.a.createElement("img",{className:"img-qr",src:D.a,alt:""})," "),v.a.createElement("div",{className:"buttons-caption-qr-container"},v.a.createElement("p",{className:"texto-carta-qr"},"Las cartas QR llegaron para protegernos de la amenaza del COVID-19. Conoce m\xe0s sobre la nueva opci\xf2n que adem\xe1s cuida el planeta."),v.a.createElement("div",{className:"buttons-container-qr"},v.a.createElement(w.b,{to:""},v.a.createElement("div",{className:"button-qr QR1"},"Ver Demo")),v.a.createElement("a",{href:"#Contacto"},v.a.createElement("div",{className:"button-qr QR2"},"Saber M\xe0s")))),v.a.createElement("div",{className:"carrousel-section img-qr-container"}," ",v.a.createElement("img",{className:"img-qr",src:D.a,alt:""})," "),v.a.createElement("div",{className:"buttons-caption-qr-container"},v.a.createElement("p",{className:"texto-carta-qr"},"Las cartas QR llegaron para protegernos de la amenaza del COVID-19. Conoce m\xe0s sobre la nueva opci\xf2n que adem\xe1s cuida el planeta."),v.a.createElement("div",{className:"buttons-container-qr"},v.a.createElement(w.b,{to:""},v.a.createElement("div",{className:"button-qr QR1"},"Ver Demo")),v.a.createElement("a",{href:"#Contacto"},v.a.createElement("div",{className:"button-qr QR2"},"Saber M\xe0s")))),v.a.createElement("div",{className:"carrousel-section img-qr-container"}," ",v.a.createElement("img",{className:"img-qr",src:D.a,alt:""})," "),v.a.createElement("div",{className:"buttons-caption-qr-container"},v.a.createElement("p",{className:"texto-carta-qr"},"Las cartas QR llegaron para protegernos de la amenaza del COVID-19. Conoce m\xe0s sobre la nueva opci\xf2n que adem\xe1s cuida el planeta."),v.a.createElement("div",{className:"buttons-container-qr"},v.a.createElement(w.b,{to:""},v.a.createElement("div",{className:"button-qr QR1"},"Ver Demo")),v.a.createElement("a",{href:"#Contacto"},v.a.createElement("div",{className:"button-qr QR2"},"Saber M\xe0s")))))))}function x(){return v.a.createElement("section",{id:"Contacto",className:"Contacto"})}t(38);var S=window.location.pathname.length>2,z=function(){var e=Object(p.useState)(!0),a=Object(C.a)(e,2),t=a[0],n=a[1],r=function(e){n(!e)};return v.a.createElement("div",{className:"home"},v.a.createElement(k,{setNavAct:function(){return r(t)}}),v.a.createElement("div",{style:{minHeight:"100vh"}},!S&&t?v.a.createElement(Y,null):null),v.a.createElement(j,null),v.a.createElement(M,null),v.a.createElement(x,null))},V=window.location.pathname.slice(1),W=function(e){Object(N.a)(n,e);var a=Object(q.a)(n);function n(){return Object(f.a)(this,n),a.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){if(""===V)return v.a.createElement(z,null);var e=Object(p.lazy)((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,52))}));return v.a.createElement(w.a,null,v.a.createElement(p.Suspense,{fallback:v.a.createElement(z,null)},v.a.createElement(e,null)))}}]),n}(p.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(v.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t.p+"static/media/mobil-qr.90ca306f.png"}},[[28,1,2]]]);
//# sourceMappingURL=main.74c81a9c.chunk.js.map