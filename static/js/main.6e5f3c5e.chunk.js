(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{16:function(e,s,a){e.exports={user:"GamesWon_user__3p6i3",opponent:"GamesWon_opponent__eYds6",draw:"GamesWon_draw__1Ocib",gamesWonName:"GamesWon_gamesWonName__3nyvN",gamesWonNumber:"GamesWon_gamesWonNumber__2l8sU"}},17:function(e,s,a){e.exports={userWin:"HistoryElement_userWin__1JTp3",opponentWin:"HistoryElement_opponentWin__e_-S2",draw:"HistoryElement_draw__RhGs9",bottomText:"HistoryElement_bottomText__3Aizv"}},19:function(e,s,a){e.exports={saveGameDiv:"SaveGame_saveGameDiv__2ZYDr",topSectionSave:"SaveGame_topSectionSave__13WZ_",whitePlayer:"SaveGame_whitePlayer__1Qvcd",blackPlayer:"SaveGame_blackPlayer__2kVEs",flip:"SaveGame_flip__yUqne",gradientButton:"SaveGame_gradientButton__3g8pY"}},24:function(e,s,a){e.exports={gameHistory:"GameHistory_gameHistory__3cY-d",topSectionHistory:"GameHistory_topSectionHistory__1XjZH",gradientButton:"GameHistory_gradientButton__1zgSu"}},41:function(e,s,a){},42:function(e,s,a){},43:function(e,s,a){},48:function(e,s,a){},49:function(e,s,a){},50:function(e,s,a){},55:function(e,s,a){"use strict";a.r(s);var t=a(3),c=a.n(t),n=a(32),i=a.n(n),r=(a(41),a(23)),l=(a(42),a(43),a(25)),o=(l.a.initializeApp({apiKey:"AIzaSyAUnSTzTKczAmfrBcp-W5iQwmtw9h-6WOA",authDomain:"chessgamestracker.firebaseapp.com",projectId:"chessgamestracker",storageBucket:"chessgamestracker.appspot.com",messagingSenderId:"548118462221",appId:"1:548118462221:web:ab2366432156df46a8ba44"}).firestore(),l.a.auth()),j=new l.a.auth.GoogleAuthProvider,d=a(36),m=a(2);var h=function(){return Object(m.jsx)("div",{className:"background",children:Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsx)("div",{className:"circleBackground"}),Object(m.jsx)("div",{className:"nameTitle",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)("span",{className:"bold",children:"chess"}),"tracker"]})}),Object(m.jsx)("div",{className:"signUpText",children:Object(m.jsx)("h3",{children:"Sign up/Sign in"})}),Object(m.jsxs)("div",{className:"signInGoogle",onClick:function(e){e.preventDefault(),o.signInWithPopup(j).catch((function(e){console.log(e)}))},children:[Object(m.jsx)(d.a,{className:"react-icons"}),Object(m.jsx)("h3",{children:"Google"})]})]})})},b=(a(48),a(19)),x=a.n(b);var O=function(){return Object(m.jsxs)("div",{className:x.a.saveGameDiv,children:[Object(m.jsxs)("div",{className:x.a.topSectionSave,children:[Object(m.jsx)("div",{className:x.a.whitePlayer,children:Object(m.jsx)("h1",{children:"Tarun"})}),Object(m.jsx)("h1",{children:"vs"}),Object(m.jsx)("div",{className:x.a.blackPlayer,children:Object(m.jsx)("h1",{children:"Rohit"})}),Object(m.jsx)("div",{className:x.a.flip,children:Object(m.jsx)("h3",{children:"flip sides"})})]}),Object(m.jsx)("div",{className:x.a.gradientButton,children:Object(m.jsx)("h1",{children:"Save Results"})})]})},u=a(16),v=a.n(u);var p=function(e){var s=e.isUser,a=e.name,t=e.wins,c=e.total;return"draw"===s?Object(m.jsxs)("div",{className:v.a.draw,children:[Object(m.jsx)("h1",{className:v.a.gamesWonName,children:a}),Object(m.jsxs)("h1",{className:v.a.gamesWonNumber,children:[t,"/",c," Games"]})]}):Object(m.jsxs)("div",{className:s?v.a.user:v.a.opponent,children:[Object(m.jsxs)("h1",{className:v.a.gamesWonName,children:[a," Wins"]}),Object(m.jsxs)("h1",{className:v.a.gamesWonNumber,children:[t,"/",c," Games"]})]})},N=a(24),_=a.n(N),g=a(17),f=a.n(g);var k=function(e){var s=e.isUser,a=e.name,t=e.date,c=e.color;return"draw"===s?Object(m.jsxs)("div",{className:f.a.draw,children:[Object(m.jsx)("h1",{className:f.a.nameWin,children:"Draw"}),Object(m.jsxs)("div",{className:f.a.bottomText,children:[Object(m.jsx)("h3",{children:t}),Object(m.jsx)("h3",{children:"Draw Game"})]})]}):Object(m.jsxs)("div",{className:s?f.a.userWin:f.a.opponentWin,children:[Object(m.jsxs)("h1",{className:f.a.nameWin,children:[a," Win"]}),Object(m.jsxs)("div",{className:f.a.bottomText,children:[Object(m.jsx)("h3",{children:t}),Object(m.jsxs)("h3",{children:["Won as ",c]})]})]})};var w=function(){return Object(m.jsxs)("div",{className:_.a.gameHistory,children:[Object(m.jsxs)("div",{className:_.a.topSectionHistory,children:[Object(m.jsx)(k,{isUser:!0,name:"Tarun",date:"3/11/2021",color:"Black"}),Object(m.jsx)(k,{name:"Rohit",date:"3/11/2021",color:"Black"}),Object(m.jsx)(k,{isUser:"draww",name:"Potato",date:"3/11/2021",color:"Black"}),Object(m.jsx)(k,{isUser:!0,name:"Tarun",date:"3/10/2021",color:"Black"}),Object(m.jsx)(k,{isUser:!0,name:"Tarun",date:"3/09/2021",color:"Black"}),Object(m.jsx)(k,{isUser:!0,name:"Tarun",date:"3/09/2021",color:"Black"}),Object(m.jsx)(k,{name:"Rohit",date:"3/09/2021",color:"Black"}),Object(m.jsx)(k,{isUser:"draw",name:"Potato",date:"3/09/2021",color:"Black"})]}),Object(m.jsx)("div",{className:_.a.gradientButton,children:Object(m.jsx)("h1",{children:"Deleted Selected"})})]})};var W=function(){return Object(m.jsxs)("div",{className:"Home",children:[Object(m.jsx)("div",{className:"opponentTextDiv",children:Object(m.jsx)("h1",{children:"Tarun vs Rohit"})}),Object(m.jsxs)("div",{className:"widgets",children:[Object(m.jsx)(O,{}),Object(m.jsxs)("div",{className:"gamesWon",children:[Object(m.jsx)(p,{isUser:!0,name:"Tarun",wins:"100",total:"150"}),Object(m.jsx)(p,{name:"Rohit",wins:"50",total:"150"}),Object(m.jsx)(p,{isUser:"draw",name:"Draws",wins:"0",total:"150"})]}),Object(m.jsx)(w,{})]}),Object(m.jsx)("div",{className:"totalWinsBar"})]})},S=a(22),y=a(9),G=a(34);a(49);var T=function(){return Object(m.jsx)("div",{className:"loading",children:Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Pedro_luis_romani_ruiz.gif"})})},B=(a(50),[{title:"Home",path:"/"},{title:"Statistics",path:"/stats"},{title:"Settings",path:"/settings"}]);var H=function(){var e=Object(t.useState)(!1),s=Object(r.a)(e,2),a=s[0],c=s[1],n=function(){return c(!a)};return Object(m.jsxs)("nav",{className:"Navbar",children:[Object(m.jsxs)("h1",{className:"titleText",children:[Object(m.jsx)("span",{className:"bold",children:"chess"}),"tracker"]}),Object(m.jsxs)("ul",{className:a?"navOptions mobile":"navOptions",children:[B.map((function(e,s){return Object(m.jsx)("li",{className:"navLinks",children:Object(m.jsx)(S.b,{to:e.path,style:{textDecoration:"none"},children:Object(m.jsx)("h1",{className:"navLinkText",onClick:n,children:e.title})})},s)})),Object(m.jsx)("li",{className:"navLinks",onClick:function(){console.log("clicked"),o.signOut().catch((function(e){console.log(e)}))},children:Object(m.jsx)("h1",{className:"navLinkText",children:"Log Out"})})]}),Object(m.jsx)("div",{className:"profile",children:Object(m.jsx)("h1",{children:"Tarun Ravi"})}),Object(m.jsxs)("div",{className:"menu",onClick:n,children:[Object(m.jsx)("div",{className:a?"line1 cross":"line1"}),Object(m.jsx)("div",{className:a?"line2 cross":"line2"}),Object(m.jsx)("div",{className:a?"line3 cross":"line3"})]})]})};var U=function(){var e=Object(G.a)(o),s=Object(r.a)(e,2),a=s[0];return s[1]?Object(m.jsx)(T,{}):Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(S.a,{children:a?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(H,{}),Object(m.jsx)(y.c,{children:Object(m.jsx)(y.a,{path:"/",exact:!0,component:W})})]}):Object(m.jsx)(h,{})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(s){var a=s.getCLS,t=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;a(e),t(e),c(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root")),D()}},[[55,1,2]]]);
//# sourceMappingURL=main.6e5f3c5e.chunk.js.map