(this["webpackJsonptic-tac-toe-v2"]=this["webpackJsonptic-tac-toe-v2"]||[]).push([[0],{30:function(e,n,r){},42:function(e,n,r){"use strict";r.r(n);var t,a,c,o,i,l,s,u,d,b,p,j,O=r(0),f=r.n(O),y=r(10),h=r.n(y),v=(r(30),r(11)),E=r(12),m=r(15),x=r(14),g=r(5),k=r(2),T=r(3),R=T.a.div(t||(t=Object(k.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),_=T.a.span(a||(a=Object(k.a)(["\n    margin-left: 6.8rem;\n    font-family: 'Patrick Hand', cursive;\n    font-size: 2rem;\n"]))),P=T.a.span(c||(c=Object(k.a)(["\n    font-family: 'Permanent Marker', cursive;\n    font-size: 3.6rem;\n    color: rgb(28, 144, 221);\n    text-align: center;\n"]))),S=r(1),w=function(){return Object(S.jsx)(P,{children:"Tic Tac Toe"})},C=T.a.div(o||(o=Object(k.a)(["\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n"]))),L=T.a.span(i||(i=Object(k.a)(["\n    font-family: 'Patrick Hand', cursive;\n    font-size: 2rem;\n    text-align: center;\n"]))),A=T.a.div(l||(l=Object(k.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 4rem;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 6rem;\n    cursor: pointer;\n"]))),U=Object(T.b)(s||(s=Object(k.a)(["\n    to {\n        stroke-dashoffset: 0;\n    }\n"]))),B=T.a.svg(u||(u=Object(k.a)(["\n    stroke-width: 15px;\n    fill: none;\n    stroke-linecap: round;\n\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n\n    stroke: #bb2b29;\n    background-color: #0d1117;\n    border-radius: 10px;\n    cursor: pointer;\n\n    &:hover {\n        stroke: #d6302d;\n    }\n\n    line:nth-of-type(1) {\n        animation: 1s linear forwards ",";\n    }\n    line:nth-of-type(2) {\n        animation: 1s linear 0.2s forwards ",";\n    }\n"])),U,U),N=function(e){var n=e.clickEvent;return Object(S.jsxs)(B,{width:"100",height:"100",viewBox:"-50 -50 100 100",onClick:n,children:[Object(S.jsx)("line",{x1:"-40",y1:"-40",x2:"40",y2:"40"}),Object(S.jsx)("line",{x1:"-40",y1:"40",x2:"40",y2:"-40"})]})},Y=Object(T.b)(d||(d=Object(k.a)(["\n    to {\n        stroke-dashoffset: 0;\n    }\n"]))),D=T.a.svg(b||(b=Object(k.a)(["\n    stroke-width: 15px;\n    fill: none;\n    stroke-linecap: round;\n\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n\n    stroke: #2ea043;\n    background-color: #0d1117;\n    border-radius: 10px;\n    animation: "," 1s linear forwards;\n    cursor: pointer;\n\n    &:hover {\n        stroke: #38c251;\n    }\n"])),Y),z=function(e){var n=e.clickEvent;return Object(S.jsx)(D,{width:"100",height:"100",viewBox:"-50 -50 100 100",onClick:n,children:Object(S.jsx)("circle",{cx:"0",cy:"0",r:"40"})})},M={SET_NO_OF_PLAYERS:"SET_NO_OF_PLAYERS",SET_PLAYER_1_TOOL:"SET_PLAYER_1_TOOL",SET_MENU_LEVEL:"SET_MENU_LEVEL",RESET_MENU:"RESET_MENU"},H=Object(g.b)((function(e){var n=e.menu;return{level:n.menuLevel,player2:n.player2}}),(function(e){return{setNoOfPlayers:function(n){return e(function(e){return{type:M.SET_NO_OF_PLAYERS,payload:e}}(n))},changeLevel:function(n){return e(function(e){return{type:M.SET_MENU_LEVEL,payload:e}}(n))},changePlayerTool:function(n){return e(function(e){return{type:M.SET_PLAYER_1_TOOL,payload:e}}(n))}}}))((function(e){var n=e.level,r=e.setNoOfPlayers,t=e.changeLevel,a=e.changePlayerTool,c=e.player2;return 0===n?Object(S.jsxs)(C,{children:[Object(S.jsx)(L,{children:"Number of Players"}),Object(S.jsxs)(A,{children:[Object(S.jsx)("span",{onClick:function(){return r(1)},children:"1"}),Object(S.jsx)("span",{onClick:function(){return r(2)},children:"2"})]})]}):Object(S.jsxs)(C,{children:[Object(S.jsx)(L,{children:"Computer"===c?"You take":"Player 1 takes"}),Object(S.jsxs)(A,{style:{marginTop:"2rem"},children:[Object(S.jsx)("span",{onClick:function(){return a("cross")},children:Object(S.jsx)(N,{})}),Object(S.jsx)("span",{onClick:function(){return a("circle")},children:Object(S.jsx)(z,{})})]}),Object(S.jsx)(L,{style:{marginTop:"1rem",cursor:"pointer"},onClick:function(){return t(0)},children:"\u2190 Back"})]})})),F=T.a.div(p||(p=Object(k.a)(["\n    display: grid;\n    max-width: 100vw;\n    max-height: 100vh;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    padding: 7px;\n    border-radius: 14px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    background-color: rgb(28, 120, 182);\n\n    &:hover {\n        background-color: rgb(60, 161, 228);\n    }\n"]))),V=r(17),G=r.n(V),J=r(22),I=r(6),q=T.a.div(j||(j=Object(k.a)(["\n    width: 4.5rem;\n    height: 4.5rem;\n    max-width: 100%;\n    max-height: 100%;\n    background-color: #0d1117;\n    padding: 14px;\n    border-radius: 10px;\n    cursor: pointer;\n"]))),K=function(e){var n=e.clickEvent;return Object(S.jsx)(q,{onClick:n})},Q={RESET_BOARD:"RESET_BOARD",UPDATE_BOARD:"UPDATE_BOARD",SET_CURRENT_PLAYER:"SET_CURRENT_PLAYER"},W=function(){return{type:Q.RESET_BOARD}},X={SET_SCORE:"SET_SCORE",RESET_SCORE:"RESET_SCORE",UPDATE_RESULT:"UPDATE_RESULT"},Z=function(e){return{type:X.UPDATE_RESULT,payload:e}};function $(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;function a(n){return e[0]===t&&(e[1]===n&&e[2]===n||e[3]===n&&e[6]===n||e[4]===n&&e[8]===n)?0:e[1]===t&&(e[0]===n&&e[2]===n||e[4]===n&&e[7]===n)?1:e[2]===t&&(e[0]===n&&e[1]===n||e[5]===n&&e[8]===n||e[4]===n&&e[6]===n)?2:e[3]===t&&(e[4]===n&&e[5]===n||e[0]===n&&e[6]===n)?3:e[4]===t&&(e[3]===n&&e[5]===n||e[1]===n&&e[7]===n||e[0]===n&&e[8]===n||e[2]===n&&e[6]===n)?4:e[5]===t&&(e[3]===n&&e[4]===n||e[2]===n&&e[8]===n)?5:e[6]===t&&(e[7]===n&&e[8]===n||e[0]===n&&e[3]===n||e[4]===n&&e[2]===n)?6:e[7]===t&&(e[6]===n&&e[8]===n||e[1]===n&&e[4]===n)?7:e[8]===t&&(e[6]===n&&e[7]===n||e[2]===n&&e[5]===n||e[4]===n&&e[0]===n)?8:void 0}var c=a(n);if(void 0!==c)return c;var o=a(r);return void 0!==o?o:e.includes(t)?e.indexOf(t):-1}function ee(e){return new Promise((function(n){setTimeout(n,e)}))}function ne(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;function a(n){return e[0]===n&&e[1]===n&&e[2]===n||(e[3]===n&&e[4]===n&&e[5]===n||(e[6]===n&&e[7]===n&&e[8]===n||(e[0]===n&&e[3]===n&&e[6]===n||(e[1]===n&&e[4]===n&&e[7]===n||(e[2]===n&&e[5]===n&&e[8]===n||(e[0]===n&&e[4]===n&&e[8]===n||(e[2]===n&&e[4]===n&&e[6]===n||void 0)))))))}function c(){return e.every((function(e){return e!==t}))}var o=a(n);if(void 0!==o)return n;var i=a(r);if(void 0!==i)return r;var l=c();return l?"tie":null}var re,te,ae,ce,oe,ie=function(e){Object(m.a)(r,e);var n=Object(x.a)(r);function r(){var e;Object(v.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).winnerChecker=function(n,r,t){var a=e.props.setResult,c=null,o="circle"===n?"cross":"circle";switch(c=ne(Object(I.a)(r),n,o)){case n:c="Computer"===t?"You":"Player 1";break;case o:c=t;break;case"tie":c="tie"}return a(c),console.log(c),c},e.handleClick=Object(J.a)(G.a.mark((function n(){var r,t,a,c,o,i,l,s,u,d,b,p,j,O;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.props,t=r.pos,a=r.updateBoard,c=r.updatePlayer,o=r.playingBoard,i=r.currPlayer,l=r.player1Tool,s=r.player2,u=r.setResult,0===o[t]){n.next=3;break}return n.abrupt("return");case 3:if(a(t,d="Player 1"===i?l:"circle"===l?"cross":"circle"),c(b="Player 1"===i?s:"Player 1"),(p=Object(I.a)(o))[t]=d,null===e.winnerChecker(l,Object(I.a)(p),s)){n.next=12;break}return n.abrupt("return");case 12:if("Computer"!==b){n.next=26;break}if(-1!==(O=$(p,j="circle"===l?"cross":"circle",l))){n.next=18;break}return u("tie"),n.abrupt("return");case 18:return n.next=20,ee(200);case 20:if(p[O]=j,a(O,j),c("Player 1"),null===e.winnerChecker(l,Object(I.a)(p),s)){n.next=26;break}return n.abrupt("return");case 26:case"end":return n.stop()}}),n)}))),e}return Object(E.a)(r,[{key:"render",value:function(){switch(this.props.val){case"circle":return Object(S.jsx)(z,{clickEvent:this.handleClick});case"cross":return Object(S.jsx)(N,{clickEvent:this.handleClick});default:return Object(S.jsx)(K,{clickEvent:this.handleClick})}}}]),r}(f.a.Component),le=Object(g.b)((function(e){var n=e.board,r=e.menu;return{currPlayer:n.currentPlayer,playingBoard:n.board,player1Tool:r.player1Tool,player2:r.player2}}),(function(e){return{updateBoard:function(n,r){return e(function(e,n){return{type:Q.UPDATE_BOARD,payload:{pos:e,val:n}}}(n,r))},updatePlayer:function(n){return e(function(e){return{type:Q.SET_CURRENT_PLAYER,payload:e}}(n))},setResult:function(n){return e(Z(n))}}}))(ie),se=Object(g.b)((function(e){return{playingBoard:e.board.board}}))((function(e){var n=e.playingBoard;return Object(S.jsx)(F,{children:n.map((function(e,n){return Object(S.jsx)(le,{val:e,pos:n},n)}))})})),ue=T.a.div(re||(re=Object(k.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-right: 14rem;\n"]))),de=T.a.span(te||(te=Object(k.a)(["\n    font-size: 1.4rem;\n    font-family: 'Patrick Hand', cursive;\n"]))),be=Object(g.b)((function(e){var n=e.menu,r=e.score;return{player2:n.player2,scores:r.scoreArray}}))((function(e){var n=e.player2,r=e.scores;return Object(S.jsxs)(ue,{children:[Object(S.jsxs)(de,{children:["Games: ",r[0]]}),Object(S.jsxs)(de,{children:["Computer"===n?"You":"Player 1",": ",r[1]]}),Object(S.jsxs)(de,{children:[n,": ",r[2]]}),Object(S.jsxs)(de,{children:["Tie: ",r[3]]})]})})),pe=T.a.div(ae||(ae=Object(k.a)(["\n    appearance: none;\n    border: 1px solid;\n    border-radius: 6px;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 2rem;\n    font-weight: 500;\n    line-height: 20px;\n    padding: 5px 16px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    margin-left: 14rem;\n    margin-top: 0.4rem;\n    font-family: 'Patrick Hand', cursive;\n    background-color: #da3633;\n    border-color: #f85149;\n    color: white;\n\n    &:hover {\n        color: #f85149;\n        border-color: #30363d;\n        background-color: #21262d;\n    }\n"]))),je=Object(g.b)(null,(function(e){return{menuReset:function(){return e({type:M.RESET_MENU})},boardReset:function(){return e(W())},scoreReset:function(){return e({type:X.RESET_SCORE})}}}))((function(e){var n=e.menuReset,r=e.boardReset,t=e.scoreReset;return Object(S.jsx)(pe,{onClick:function(){n(),r(),t()},children:"Reset"})})),Oe=T.a.div(ce||(ce=Object(k.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 4em;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.9);\n    color: white;\n    text-align: center;\n"]))),fe=T.a.button(oe||(oe=Object(k.a)(["\n    appearance: none;\n    border: 1px solid;\n    border-radius: 6px;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 2rem;\n    font-weight: 500;\n    line-height: 20px;\n    padding: 5px 16px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    margin-top: 0.4rem;\n    font-family: 'Patrick Hand', cursive;\n    background-color: #dfd32c;\n    border-color: #dceb0c;\n    color: white;\n\n    &:hover {\n        color: #dceb0c;\n        border-color: #30363d;\n        background-color: #21262d;\n    }\n"]))),ye={"Player 1":0,You:0,Computer:1,"Player 2":1,tie:2},he=Object(g.b)(null,(function(e){return{boardReset:function(){return e(W())},scoreUpdater:function(n){return e({type:X.SET_SCORE,payload:n})},resultReset:function(){return e(Z(null))}}}))((function(e){var n=e.winner,r=e.boardReset,t=e.scoreUpdater,a=e.resultReset,c="".concat(n," won the game");return"tie"===n&&(c="Game tied"),t(ye[n]+1),Object(S.jsxs)(Oe,{children:[c,Object(S.jsx)(fe,{onClick:function(){r(),a()},children:"Close"})]})})),ve=function(e){Object(m.a)(r,e);var n=Object(x.a)(r);function r(){return Object(v.a)(this,r),n.apply(this,arguments)}return Object(E.a)(r,[{key:"render",value:function(){var e=this.props,n=e.level,r=e.currPlayer,t=e.player2,a=e.result;return Object(S.jsxs)(R,{children:[null!==a&&Object(S.jsx)(he,{winner:a}),Object(S.jsx)(w,{}),n<2?Object(S.jsx)(H,{}):Object(S.jsxs)("span",{children:[Object(S.jsx)(be,{}),Object(S.jsx)(_,{children:"Player 1"===r&&"Computer"===t?"Your turn":"".concat(r,"'s turn")}),Object(S.jsx)(se,{}),Object(S.jsx)(je,{})]})]})}}]),r}(f.a.Component),Ee=Object(g.b)((function(e){var n=e.menu,r=e.board,t=e.score;return{level:n.menuLevel,currPlayer:r.currentPlayer,player2:n.player2,player1Tool:n.player1Tool,playingBoard:r.board,result:t.result}}))(ve),me=r(23),xe=r(7),ge=r(13),ke=(r(38),r(24)),Te=r(25),Re=r.n(Te),_e=r(4),Pe={player2:null,player1Tool:null,menuLevel:0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M.SET_NO_OF_PLAYERS:return 1===n.payload?Object(_e.a)(Object(_e.a)({},e),{},{player2:"Computer",menuLevel:1}):Object(_e.a)(Object(_e.a)({},e),{},{player2:"Player 2",menuLevel:1});case M.SET_PLAYER_1_TOOL:return Object(_e.a)(Object(_e.a)({},e),{},{player1Tool:n.payload,menuLevel:2});case M.SET_MENU_LEVEL:return Object(_e.a)(Object(_e.a)({},e),{},{menuLevel:n.payload});case M.RESET_MENU:return{noOfPlayers:null,player2:null,player1Tool:null,menuLevel:0};default:return e}},we={board:[0,0,0,0,0,0,0,0,0],currentPlayer:"Player 1"},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Q.RESET_BOARD:return{board:[0,0,0,0,0,0,0,0,0],currentPlayer:"Player 1"};case Q.UPDATE_BOARD:var r=Object(I.a)(e.board),t=n.payload,a=t.pos,c=t.val;return r[a]=c,Object(_e.a)(Object(_e.a)({},e),{},{board:Object(I.a)(r)});case Q.SET_CURRENT_PLAYER:return Object(_e.a)(Object(_e.a)({},e),{},{currentPlayer:n.payload});default:return e}},Le={scoreArray:[0,0,0,0],result:null},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case X.SET_SCORE:var r=Object(I.a)(e.scoreArray);return r[0]+=1,r[n.payload]+=1,Object(_e.a)(Object(_e.a)({},e),{},{scoreArray:Object(I.a)(r)});case X.RESET_SCORE:return Object(_e.a)(Object(_e.a)({},e),{},{scoreArray:[0,0,0,0],result:null});case X.UPDATE_RESULT:return Object(_e.a)(Object(_e.a)({},e),{},{result:n.payload});default:return e}},Ue={key:"root",storage:Re.a,whitelist:["menu","board","score"]},Be=Object(xe.b)({menu:Se,board:Ce,score:Ae}),Ne=Object(ge.a)(Ue,Be),Ye=[ke.a];var De=Object(xe.c)(Ne,xe.a.apply(void 0,Ye)),ze=Object(ge.b)(De);h.a.render(Object(S.jsx)(f.a.StrictMode,{children:Object(S.jsx)(g.a,{store:De,children:Object(S.jsx)(me.a,{persistor:ze,children:Object(S.jsx)(Ee,{})})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d8abec1c.chunk.js.map