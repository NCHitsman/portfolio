(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),o=n(18),c=n.n(o),i=(n(27),n(5)),r=(n(28),n.p+"static/media/hitsman.fba13ceb.jpg"),u=n(2),l=function(){return Object(u.jsxs)("div",{className:"AboutMeContentParnetCont",children:[Object(u.jsx)("div",{className:"AboutMeTitle",children:"About Me"}),Object(u.jsxs)("div",{className:"AboutMeTextPictCont",children:[Object(u.jsxs)("div",{className:"AboutMeText",children:["Pharagraph 1",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Pharagraph 2",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Pharagraph 3"]}),Object(u.jsx)("img",{className:"SelfImage",src:r,alt:"Noah Carmichael-Hitsman"})]})]})},j=function(e){var t=e.about,n=e.setAbout,s=e.setHome,o=e.setResume,c=e.resume,r=e.lastPage,j=e.setLastPage,b=e.projects,m=Object(a.useState)(!1),h=Object(i.a)(m,2),d=h[0],x=h[1];return Object(a.useEffect)((function(){setTimeout((function(){x(!!t)}),900)}),[t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:null==t?"AboutMeParentCont":t?"home"===r?"AboutMeParentCont active fromHome":"AboutMeParentCont active fromResume":c||b?"AboutMeParentCont unactive resume":"AboutMeParentCont unactive home",children:Object(u.jsx)(l,{})}),t&&!c&&Object(u.jsx)("div",{className:"UpButtonCont",children:Object(u.jsx)("button",{className:d?"ChangeButton":"ChangeButton unset",onClick:function(){d&&(n(!1),s(!0),j("about"))},children:Object(u.jsx)("div",{className:d?"ButtonText":"ButtonText unset",children:"<"})})}),t&&!c&&Object(u.jsx)("div",{className:"DownButtonCont",children:Object(u.jsx)("button",{className:d?"ChangeButton":"ChangeButton unset",onClick:function(){d&&(o(!0),n(!1),j("about"))},children:Object(u.jsx)("div",{className:d?"ButtonText":"ButtonText unset",children:">"})})})]})},b=n(8),m=n(38),h=(n(16),n(19)),d=function(){var e=Object(a.useRef)(null);return Object(b.b)((function(){e.current.position.z>1?e.current.position.z=0:e.current.position.z+=.05})),Object(u.jsx)("gridHelper",{ref:e,args:[190,170,"#580360","#580360"],position:[0,0,0]})},x=function(){var e=Object(a.useRef)(null);return Object(b.b)((function(){e.current.position.z>1?e.current.position.z=0:e.current.position.z+=.05})),Object(u.jsxs)("mesh",{ref:e,position:[0,-.05,0],rotation:[-Math.PI/2,0,0],children:[Object(u.jsx)("planeBufferGeometry",{args:[190,170]}),Object(u.jsx)("meshBasicMaterial",{color:"#0C345A"})]})},O=function(){var e=Object(a.useRef)(null);return Object(b.b)((function(){e.current.rotation.z-=.001})),Object(u.jsxs)("mesh",{position:[0,5,-150],ref:e,children:[Object(u.jsx)("sphereBufferGeometry",{args:[50,36,36]}),Object(u.jsx)("meshBasicMaterial",{depthWrite:!1,children:Object(u.jsx)(m.a,{stops:[0,.1,.2,.35,.6,1],colors:["#FAE9B3","#F7D050","#F76C26","#EC5409","#9E1E05","#5d0303"],size:1024})})]})},g=function(){return Object(u.jsxs)("mesh",{position:[0,25,-155],children:[Object(u.jsx)("planeBufferGeometry",{args:[575,75]}),Object(u.jsx)("meshBasicMaterial",{children:Object(u.jsx)(m.a,{stops:[0,.3,.4,.8,1],colors:["#2d9ee8","#a78ced","#f86fbe","#ff6b70","#f69109"],size:1024})})]})},f=Object(a.memo)((function(e){var t=e.x,n=e.y,s=Math.random(),o=Math.random(),c=Math.ceil(2*Math.random()),i=Object(a.useRef)(null),r=Object(a.useRef)(null);return Object(b.b)((function(){i.current.rotation.x+=5e-4,i.current.rotation.y+=5e-4,r.current.rotation.x+=5e-4,r.current.rotation.y+=5e-4})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("mesh",{position:[t,.5,n],rotation:[s,0,o],ref:i,children:[Object(u.jsx)("tetrahedronBufferGeometry",{args:[5.01,c]}),Object(u.jsx)("meshBasicMaterial",{color:"#368FD3",wireframe:!0,polygonOffset:!0})]}),Object(u.jsxs)("mesh",{position:[t,.5,n],rotation:[s,0,o],ref:r,children:[Object(u.jsx)("tetrahedronBufferGeometry",{args:[5,c]}),Object(u.jsx)("meshPhongMaterial",{color:"black",wireframe:!1,polygonOffset:!0})]})]})}),(function(e,t){return!0})),p=function(){return Object(u.jsxs)("mesh",{position:[0,.05,-60],rotation:[-Math.PI/2,0,0],children:[Object(u.jsx)("planeBufferGeometry",{args:[190,15]}),Object(u.jsx)("meshBasicMaterial",{children:Object(u.jsx)(m.a,{stops:[0,.5,1],colors:["black","black","#580360"],size:1024})})]})},P=function(){var e="up";return Object(b.b)((function(t){t.camera.rotation.x>-.32?e="down":t.camera.rotation.x<-.45&&(e="up"),"up"===e?t.camera.rotation.x+=5e-5:"down"===e&&(t.camera.rotation.x-=5e-5)})),null},C=function(e){e.home;var t=!0;return Object(u.jsxs)(b.a,{className:"HomeCanvas",camera:{fov:75,near:.1,far:1e3,position:[0,4,9]},children:[Object(u.jsx)(d,{}),Object(u.jsx)(g,{}),Object(u.jsx)(x,{}),Object(u.jsx)(O,{}),Object(h.range)(50).map((function(e,n){return t=!t,Object(u.jsx)(f,{x:5*n-125,y:t?-65:-70},e)})),Object(u.jsx)(p,{}),Object(u.jsx)(P,{})]})},v=function(e){var t=e.home,n=e.setHome,s=e.setAbout,o=e.setLastPage,c=Object(a.useState)(!1),r=Object(i.a)(c,2),l=r[0],j=r[1];return Object(a.useEffect)((function(){null===t?j(!0):setTimeout((function(){j(!!t)}),900)}),[t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C,{home:t}),Object(u.jsxs)("div",{className:null===t?"HomeContentCont":t?"HomeContentCont showCont":"HomeContentCont hideCont",children:[Object(u.jsx)("div",{className:"HomeName",children:"Noah Carmichael-Hitsman"}),Object(u.jsxs)("div",{className:"HomeLinkCont",children:[Object(u.jsx)("div",{className:"HomeLink",onClick:function(){window.open("https://github.com/NCHitsman")},children:"Github"}),Object(u.jsx)("div",{className:"HomeLink",onClick:function(){window.open("https://www.linkedin.com/in/noah-carmichael-hitsman-b024a1203/")},children:"LinkedIn"})]})]}),(t||null===t)&&Object(u.jsx)("div",{className:"DownButtonCont",children:Object(u.jsx)("button",{className:l?"ChangeButton":"ChangeButton unset",onClick:function(){l&&(n(!1),s(!0),o("home"))},children:Object(u.jsx)("div",{className:l?"ButtonText":"ButtonText unset",children:">"})})})]})},T=(n(33),function(e){var t=e.name,n=e.link1,s=e.link2,o=e.about,c=e.about2,r=e.tech,l=e.index,j=e.gif,b=e.projectIndex,m=e.lastProjectIndex,h=Object(a.useState)(!0),d=Object(i.a)(h,2),x=d[0],O=d[1];return Object(u.jsxs)("div",{className:function(){if(null!==m){if(null===b&&0===l)return"ProjectPageParentCont";if(l===b){if(m<l)return"ProjectPageParentCont raise";if(m>l)return"ProjectPageParentCont lower"}if(l===m){if(b===l+1)return"ProjectPageParentCont hide up";if(b===l-1)return"ProjectPageParentCont hide down"}return"ProjectPageParentCont hide"}}(),children:[Object(u.jsx)("img",{className:"BackgroundImage",src:j,alt:"demonstrational gif"}),Object(u.jsxs)("div",{className:l%2===0?x?"ProjectPageInfoParent left open":"ProjectPageInfoParent left closed":x?"ProjectPageInfoParent right open":"ProjectPageInfoParent right closed",children:[l%2!==0&&Object(u.jsx)("div",{className:"ProjectPageTransitionButtonCont",children:Object(u.jsx)("button",{className:"ProjectPageTransitionButton",onClick:function(){return O(!x)},children:x?">":"<"})}),Object(u.jsxs)("div",{className:l%2===0?x?"ProjectPageInfoCont right open":"ProjectPageInfoCont right closed":x?"ProjectPageInfoCont left open":"ProjectPageInfoCont left closed",children:[Object(u.jsxs)("div",{className:"ProjectPageNameAboutCollisionCont",children:[Object(u.jsx)("div",{className:"ProjectPageNameTitleCont",children:Object(u.jsx)("div",{style:l%2===0?{textAlign:"left"}:{textAlign:"right"},className:"ProjectPageNameTitle",children:t})}),Object(u.jsxs)("div",{className:"ProjectPageAboutCont",children:[Object(u.jsx)("div",{style:l%2===0?{textAlign:"left",marginBottom:"25px"}:{textAlign:"right",marginBottom:"25px"},className:"ProjectPageAboutText about1",children:o}),Object(u.jsx)("div",{style:l%2===0?{textAlign:"left"}:{textAlign:"right"},className:"ProjectPageAboutText about2",children:c})]})]}),Object(u.jsxs)("div",{className:"ProjectPageTechCont",children:[Object(u.jsx)("div",{style:l%2===0?{textAlign:"left"}:{textAlign:"right"},className:"ProjectPageTechTitle",children:"Tech Used"}),Object(u.jsx)("ul",{style:l%2===0?{textAlign:"left"}:{textAlign:"right"},className:"ProjectPageTechUl",dir:l%2===0?"ltl":"rtl",children:r.map((function(e,t){return Object(u.jsx)("li",{className:"ProjectPageTechLi",children:e},t)}))})]}),Object(u.jsxs)("div",{className:"ProjectPageLinkCont",children:[Object(u.jsx)("div",{className:"ProjectPageLink",onClick:function(){return window.open(n)},children:"Github"}),Object(u.jsx)("div",{className:"ProjectPageLink",onClick:function(){return window.open(s)},children:"Live Link"})]})]}),l%2===0&&Object(u.jsx)("div",{className:"ProjectPageTransitionButtonCont",children:Object(u.jsx)("button",{className:"ProjectPageTransitionButton",onClick:function(){return O(!x)},children:x?"<":">"})})]})]})}),N=(n(34),n.p+"static/media/example.3352130f.gif"),A=n.p+"static/media/pathing.b22b7c5f.gif",B=[{name:"Planetary Empires",link1:"https://github.com/NCHitsman/Planetary-Empires",link2:"https://planetary-empires.herokuapp.com/",about:"Planetary Empires is an expansion game for Warhammer 40,000 released by Games Workshop. The game rules and accompanying map board and pieces allow you to wage a campaign across a planetary-size landscape. It is designed to assist you in running evocative, narrative-driven campaigns.",about2:"This site helps you organize players, systems, and maps, allowing you to run a Planetary Empires game all in one place!",tech:["Javascript","React","Redux","Sequelize","Postgresql","ThreeJS"],gif:N},{name:"SoundLoud",link1:"https://github.com/NCHitsman/SoundLoud",link2:"https://soundloud-hitsman.herokuapp.com/",about:"About Text About Text About Text About Text About Text About Text About Text About Text About Text",about2:"About Text About Text About Text About Text About Text About Text About Text About Text About Text",tech:["Javascript","React","Redux","Sequelize","Postgresql","ThreeJS"],gif:A},{name:"Planetary Empires",link1:"https://github.com/NCHitsman/Planetary-Empires",link2:"https://planetary-empires.herokuapp.com/",about:"Planetary Empires is an expansion game for Warhammer 40,000 released by Games Workshop. The game rules and accompanying map board and pieces allow you to wage a campaign across a planetary-size landscape. It is designed to assist you in running evocative, narrative-driven campaigns.",about2:"This site helps you organize players, systems, and maps, allowing you to run a Planetary Empires game all in one place!",tech:["1","2","3","4","5","6"],gif:N},{name:"SoundLoud",link1:"https://github.com/NCHitsman/SoundLoud",link2:"https://soundloud-hitsman.herokuapp.com/",about:"About Text About Text About Text About Text About Text About Text About Text About Text About Text",about2:"About Text About Text About Text About Text About Text About Text About Text About Text About Text",tech:["1","2","3","4","5","6"],gif:A}],k=function(e){var t=e.projects,n=e.setProjects,s=e.setResume,o=e.setLastPage,c=Object(a.useState)(null),r=Object(i.a)(c,2),l=r[0],j=r[1],b=Object(a.useState)(0),m=Object(i.a)(b,2),h=m[0],d=m[1],x=B.length-1,O=Object(a.useState)(!1),g=Object(i.a)(O,2),f=g[0],p=g[1];return Object(a.useEffect)((function(){setTimeout((function(){p(!!t)}),900)}),[t,l]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:null==t?"ProjectsParentCont":t?"ProjectsParentCont active":"ProjectsParentCont unactive",children:B.map((function(e,t){return Object(u.jsx)(T,{name:e.name,link1:e.link1,link2:e.link2,about:e.about,about2:e.about2,tech:e.tech,index:t,gif:e.gif,projectIndex:l,lastProjectIndex:h},t)}))}),(null===l||0===l)&&t&&Object(u.jsx)("div",{className:"UpButtonCont",children:Object(u.jsx)("button",{className:f?"ChangeButton":"ChangeButton unset",onClick:function(){f&&(n(!1),s(!0),o("projects"),p(!1))},children:Object(u.jsx)("div",{className:f?"ButtonText":"ButtonText unset",children:"<"})})}),t&&0!==l&&null!==l&&Object(u.jsx)("div",{className:"UpButtonCont",children:Object(u.jsx)("button",{className:f?"ChangeButton":"ChangeButton unset",onClick:function(){f&&(null!==l&&(d(l),j(l-1)),p(!1))},children:Object(u.jsx)("div",{className:f?"ButtonText":"ButtonText unset",children:"<"})})}),t&&l!==x&&Object(u.jsx)("div",{className:"DownButtonCont",children:Object(u.jsx)("button",{className:f?"ChangeButton":"ChangeButton unset",onClick:function(){f&&(null===l?(d(0),j(1)):(d(l),j(l+1)),p(!1))},children:Object(u.jsx)("div",{className:f?"ButtonText":"ButtonText unset",children:">"})})})]})},y=(n(35),function(){return Object(u.jsx)("div",{className:"ResumeContentParnetCont",children:Object(u.jsx)("div",{className:"ResumeTitle",children:"Resume"})})}),w=function(e){e.about;var t=e.setAbout,n=e.setProjects,s=e.projects,o=e.setResume,c=e.resume,r=e.lastPage,l=Object(a.useState)(!1),j=Object(i.a)(l,2),b=j[0],m=j[1];return Object(a.useEffect)((function(){setTimeout((function(){m(!!c)}),900)}),[c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:null==c?"ResumeParentCont":c?"about"===r?"ResumeParentCont active fromAbout":"ResumeParentCont active fromProjects":s?"ResumeParentCont unactive projects":"ResumeParentCont unactive about",children:Object(u.jsx)(y,{})}),c&&!s&&Object(u.jsx)("div",{className:"UpButtonCont",children:Object(u.jsx)("button",{className:b?"ChangeButton":"ChangeButton unset",onClick:function(){b&&(o(!1),t(!0))},children:Object(u.jsx)("div",{className:b?"ButtonText":"ButtonText unset",children:"<"})})}),c&&!s&&Object(u.jsx)("div",{className:"DownButtonCont",children:Object(u.jsx)("button",{className:b?"ChangeButton":"ChangeButton unset",onClick:function(){b&&(n(!0),o(!1))},children:Object(u.jsx)("div",{className:b?"ButtonText":"ButtonText unset",children:">"})})})]})};var R=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(null),c=Object(i.a)(o,2),r=c[0],l=c[1],b=Object(a.useState)(null),m=Object(i.a)(b,2),h=m[0],d=m[1],x=Object(a.useState)(null),O=Object(i.a)(x,2),g=O[0],f=O[1],p=Object(a.useState)(""),P=Object(i.a)(p,2),C=P[0],T=P[1];return Object(u.jsxs)("div",{className:"PageContent",children:[Object(u.jsx)(v,{home:n,setHome:s,setAbout:l,setLastPage:T}),Object(u.jsx)(j,{about:r,setAbout:l,setHome:s,setResume:d,resume:h,lastPage:C,setLastPage:T,projects:g}),Object(u.jsx)(w,{about:r,setAbout:l,setProjects:f,projects:g,setResume:d,resume:h,lastPage:C}),Object(u.jsx)(k,{projects:g,setProjects:f,setResume:d,setLastPage:T})]})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.198e3083.chunk.js.map