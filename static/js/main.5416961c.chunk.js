(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{16:function(e,s,a){e.exports={userWin:"HistoryElement_userWin__1JTp3",opponentWin:"HistoryElement_opponentWin__e_-S2",draw:"HistoryElement_draw__RhGs9",clicked:"HistoryElement_clicked__3Ae8v",bottomText:"HistoryElement_bottomText__3Aizv"}},19:function(e,s,a){e.exports={user:"GamesWon_user__3p6i3",opponent:"GamesWon_opponent__eYds6",draw:"GamesWon_draw__1Ocib",gamesWonName:"GamesWon_gamesWonName__3nyvN",gamesWonNumber:"GamesWon_gamesWonNumber__2l8sU"}},21:function(e,s,a){e.exports={saveGameDiv:"SaveGame_saveGameDiv__2ZYDr",topSectionSave:"SaveGame_topSectionSave__13WZ_",whitePlayer:"SaveGame_whitePlayer__1Qvcd",blackPlayer:"SaveGame_blackPlayer__2kVEs",flip:"SaveGame_flip__yUqne",gradientButton:"SaveGame_gradientButton__3g8pY"}},26:function(e,s,a){e.exports={gameHistory:"GameHistory_gameHistory__3cY-d",topSectionHistory:"GameHistory_topSectionHistory__1XjZH",gradientButton:"GameHistory_gradientButton__1zgSu"}},42:function(e,s,a){},43:function(e,s,a){},44:function(e,s,a){},49:function(e,s,a){},50:function(e,s,a){},51:function(e,s,a){},56:function(e,s,a){"use strict";a.r(s);var t=a(3),c=a.n(t),n=a(34),i=a.n(n),r=(a(42),a(14)),l=(a(43),a(44),a(17)),o=(l.a.initializeApp({apiKey:"AIzaSyAUnSTzTKczAmfrBcp-W5iQwmtw9h-6WOA",authDomain:"chessgamestracker.firebaseapp.com",projectId:"chessgamestracker",storageBucket:"chessgamestracker.appspot.com",messagingSenderId:"548118462221",appId:"1:548118462221:web:ab2366432156df46a8ba44"}),l.a.database()),j=l.a.auth(),d=new l.a.auth.GoogleAuthProvider,m=a(37),h=a(2);var b=function(){return Object(h.jsx)("div",{className:"background",children:Object(h.jsxs)("div",{className:"loginBox",children:[Object(h.jsx)("div",{className:"circleBackground"}),Object(h.jsx)("div",{className:"nameTitle",children:Object(h.jsxs)("h3",{children:[Object(h.jsx)("span",{className:"bold",children:"chess"}),"tracker"]})}),Object(h.jsx)("div",{className:"signUpText",children:Object(h.jsx)("h3",{children:"Sign up/Sign in"})}),Object(h.jsxs)("div",{className:"signInGoogle",onClick:function(e){e.preventDefault(),j.signInWithPopup(d).catch((function(e){console.log(e)}))},children:[Object(h.jsx)(m.a,{className:"react-icons"}),Object(h.jsx)("h3",{children:"Google"})]})]})})},O=(a(49),a(21)),u=a.n(O),x=a(29),p=a(22);var v=function(){var e=Object(p.a)(j),s=Object(r.a)(e,2),a=s[0],c=(s[1],Object(t.useState)(!0)),n=Object(r.a)(c,2),i=n[0],d=n[1],m="Rohit",b=Object(t.useState)("potato"),O=Object(r.a)(b,2),x=O[0],v=O[1],N=o.ref("/"+a.uid);return Object(h.jsxs)("div",{className:u.a.saveGameDiv,children:[Object(h.jsxs)("div",{className:u.a.topSectionSave,children:[Object(h.jsx)("div",{className:u.a.whitePlayer,onClick:function(){v("White"===x?"potato":"White")},children:Object(h.jsx)("h1",{children:i?a.displayName.charAt(0).toUpperCase()+a.displayName.substring(0,a.displayName.lastIndexOf(" ")).toLowerCase().slice(1):m})}),Object(h.jsx)("h1",{children:"vs"}),Object(h.jsx)("div",{className:u.a.blackPlayer,onClick:function(){v("Black"===x?"potato":"Black")},children:Object(h.jsx)("h1",{children:i?m:a.displayName.charAt(0).toUpperCase()+a.displayName.substring(0,a.displayName.lastIndexOf(" ")).toLowerCase().slice(1)})}),Object(h.jsx)("div",{className:u.a.flip,onClick:function(){d(!i)},children:Object(h.jsx)("h3",{children:"flip sides"})})]}),Object(h.jsx)("div",{className:u.a.gradientButton,onClick:function(){var e=new Date,s=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),c=e.getFullYear();if(e=t+"/"+s+"/"+c,console.log(e),"potato"!==x){var n="White"===x&&i||"Black"===x&&!i,r=n?a.displayName.substring(0,a.displayName.lastIndexOf(" ")).toLowerCase().slice(1):m;N.push({isUser:n,name:r,timestamp:l.a.firestore.FieldValue.serverTimestamp(),date:e,color:x})}},children:Object(h.jsx)("h1",{children:"Save Results"})})]})},N=a(19),g=a.n(N);var _=function(e){var s=e.isUser,a=e.name,t=e.wins,c=e.total;return"draw"===s?Object(h.jsxs)("div",{className:g.a.draw,children:[Object(h.jsx)("h1",{className:g.a.gamesWonName,children:a}),Object(h.jsxs)("h1",{className:g.a.gamesWonNumber,children:[t,"/",c," Games"]})]}):Object(h.jsxs)("div",{className:s?g.a.user:g.a.opponent,children:[Object(h.jsxs)("h1",{className:g.a.gamesWonName,children:[a," Wins"]}),Object(h.jsxs)("h1",{className:g.a.gamesWonNumber,children:[t,"/",c," Games"]})]})},f=a(26),k=a.n(f),y=a(16),S=a.n(y);var W=function(e){var s=e.isUser,a=e.name,t=e.date,c=e.color,n=e.isClicked;return"draw"===s?(console.log(n),Object(h.jsxs)("div",{className:S.a.draw+" "+(n?S.a.clicked:""),children:[Object(h.jsx)("h1",{className:S.a.nameWin,children:"Draw"}),Object(h.jsxs)("div",{className:S.a.bottomText,children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("h3",{children:"Draw Game"})]})]})):Object(h.jsxs)("div",{className:("user"===s?S.a.userWin:S.a.opponentWin)+" "+(n?S.a.clicked:""),children:[Object(h.jsxs)("h1",{className:S.a.nameWin,children:[a," Win"]}),Object(h.jsxs)("div",{className:S.a.bottomText,children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("h3",{children:["Won as ",c]})]})]})};var w=function(){var e=Object(p.a)(j),s=Object(r.a)(e,2),a=s[0],c=(s[1],o.ref("/"+a.uid)),n=Object(x.a)(c),i=Object(r.a)(n,3),l=i[0],d=i[1],m=(i[2],Object(t.useState)("potato")),b=Object(r.a)(m,2),O=b[0],u=b[1];return Object(h.jsxs)("div",{className:k.a.gameHistory,children:[Object(h.jsx)("div",{className:k.a.topSectionHistory,children:!d&&l?l.map((function(e,s){return Object(h.jsx)("div",{onClick:function(){O===e.key?u("potato"):u(e.key)},children:Object(h.jsx)(W,{isUser:e.val().isUser,name:e.val().name,date:e.val().date,color:e.val().color,isClicked:O===e.key})},s)})):Object(h.jsx)("h1",{children:"error"})}),Object(h.jsx)("div",{className:k.a.gradientButton,onClick:function(){return c.child(O).remove()},children:Object(h.jsx)("h1",{children:"Deleted Selected"})})]})};var G=function(){return Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)("div",{className:"opponentTextDiv",children:Object(h.jsx)("h1",{children:"Tarun vs Rohit"})}),Object(h.jsxs)("div",{className:"widgets",children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"gamesWon",children:[Object(h.jsx)(_,{isUser:!0,name:"Tarun",wins:"100",total:"150"}),Object(h.jsx)(_,{name:"Rohit",wins:"50",total:"150"}),Object(h.jsx)(_,{isUser:"draw",name:"Draws",wins:"0",total:"150"})]}),Object(h.jsx)(w,{})]}),Object(h.jsx)("div",{className:"totalWinsBar"})]})},C=a(25),T=a(9);a(50);var H=function(){return Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Pedro_luis_romani_ruiz.gif"})})},B=(a(51),[{title:"Home",path:"/home"},{title:"Statistics",path:"/stats"},{title:"Settings",path:"/settings"}]);var D=function(){var e=Object(t.useState)(!1),s=Object(r.a)(e,2),a=s[0],c=s[1],n=function(){return c(!a)};return Object(h.jsxs)("nav",{className:"Navbar",children:[Object(h.jsxs)("h1",{className:"titleText",children:[Object(h.jsx)("span",{className:"bold",children:"chess"}),"tracker"]}),Object(h.jsxs)("ul",{className:a?"navOptions mobile":"navOptions",children:[B.map((function(e,s){return Object(h.jsx)("li",{className:"navLinks",children:Object(h.jsx)(C.b,{to:e.path,style:{textDecoration:"none"},children:Object(h.jsx)("h1",{className:"navLinkText",onClick:n,children:e.title})})},s)})),Object(h.jsx)("li",{className:"navLinks",onClick:function(){console.log("clicked"),j.signOut().catch((function(e){console.log(e)}))},children:Object(h.jsx)("h1",{className:"navLinkText",children:"Log Out"})})]}),Object(h.jsx)("div",{className:"profile",children:Object(h.jsx)("h1",{children:"Tarun Ravi"})}),Object(h.jsxs)("div",{className:"menu",onClick:n,children:[Object(h.jsx)("div",{className:a?"line1 cross":"line1"}),Object(h.jsx)("div",{className:a?"line2 cross":"line2"}),Object(h.jsx)("div",{className:a?"line3 cross":"line3"})]})]})};var U=function(){var e=Object(p.a)(j),s=Object(r.a)(e,2),a=s[0];return s[1]?Object(h.jsx)(H,{}):Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(C.a,{children:a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(D,{}),Object(h.jsx)(T.c,{children:Object(h.jsx)(T.a,{path:"/home",exact:!0,component:G})})]}):Object(h.jsx)(b,{})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(s){var a=s.getCLS,t=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;a(e),t(e),c(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root")),A()}},[[56,1,2]]]);
//# sourceMappingURL=main.5416961c.chunk.js.map