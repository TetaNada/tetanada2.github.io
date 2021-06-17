(this["webpackJsonplottery-react"]=this["webpackJsonplottery-react"]||[]).push([[0],{208:function(t,e,n){},210:function(t,e,n){},223:function(t,e){},232:function(t,e){},250:function(t,e){},252:function(t,e){},268:function(t,e){},269:function(t,e){},334:function(t,e){},336:function(t,e){},368:function(t,e){},370:function(t,e){},371:function(t,e){},376:function(t,e){},378:function(t,e){},384:function(t,e){},386:function(t,e){},399:function(t,e){},411:function(t,e){},414:function(t,e){},419:function(t,e){},430:function(t,e){},433:function(t,e){},486:function(t,e,n){"use strict";n.r(e);var a=n(50),r=n.n(a),s=n(197),c=n.n(s),i=(n(208),n(20)),u=n.n(i),o=n(72),l=n(5),p=n(6),h=n(11),f=n(10),d=(n.p,n(210),n(198)),b=new(n.n(d).a)(window.ethereum),j=new b.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"enter",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"getPlayers",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pickWinner",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"winner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],"0x971Ed09f67bCb677036ECf3E7dF69EDad06a8676"),m=n(14),y=function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={manager:"",players:[],balance:"",value:"",message:"",winner:""},t.onSubmit=function(){var e=Object(o.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,b.eth.requestAccounts();case 3:return a=e.sent,t.setState({message:"Waiting for transaction to proccess..."}),e.next=7,j.methods.enter().send({from:a[0],value:b.utils.toWei(t.state.value,"ether")});case 7:t.setState({message:"You have been entered!"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onClick=function(){var e=Object(o.a)(u.a.mark((function e(n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.eth.getAccounts();case 2:return a=e.sent,t.setState({message:"Waiting on transaction to proccess..."}),e.next=6,j.methods.pickWinner().send({from:a[0]});case 6:t.setState({message:"A winner has been picked!"}),r=t.state.winner,t.setState({message:"A winner is ",winnerA:r});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(u.a.mark((function t(){var e,n,a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.methods.manager().call();case 2:return e=t.sent,t.next=5,j.methods.getPlayers().call();case 5:return n=t.sent,t.next=8,b.eth.getBalance(j.options.address);case 8:return a=t.sent,t.next=11,j.methods.winner().call();case 11:r=t.sent,this.setState({manager:e,players:n,balance:a,winner:r});case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Lottery Contract"}),Object(m.jsxs)("p",{children:["Contract manager: ",this.state.manager,"."]}),Object(m.jsxs)("p",{children:["There are currently ",this.state.players.length," people that entered, competing to win ",b.utils.fromWei(this.state.balance,"ether")," ether."]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("h4",{children:"Try your luck"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Amount of ether to enter"}),Object(m.jsx)("input",{value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})}})]}),Object(m.jsx)("button",{children:"ENTER"})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("h4",{children:"Want to pick a winner?"}),Object(m.jsx)("button",{onClick:this.onClick,children:"Pick a winner!"}),Object(m.jsx)("hr",{}),Object(m.jsx)("h1",{children:this.state.message})]})}}]),n}(a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,490)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),v()}},[[486,1,2]]]);
//# sourceMappingURL=main.ae936d91.chunk.js.map