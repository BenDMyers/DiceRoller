(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{20:function(e,t,n){"use strict";n.r(t);var r={};n.d(r,"addRoll",function(){return y}),n.d(r,"modifyInput",function(){return h});var o=n(1),i=n.n(o),a=n(19),l=n.n(a),u=n(3),c=n(11),s="add roll",p="modify input";function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=Object(c.b)({rolls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return[t.payload].concat(f(e));default:return e}},inputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return document.querySelector(".roll-input").classList.remove("roll-input-validation-error"),document.querySelector(".roll-input-validation-label").style.display="none",t.payload;default:return e}}});function y(e){return{type:s,payload:e}}function h(e){return{type:p,payload:e}}var m=n(0),b=function(e,t,n,r){var o=new m.AmbientLight(t,1),i=new m.PointLight(n,1),a=new m.PointLight(r,1);return i.position.set(-20,-30,40),a.position.set(20,30,40),e.add(o),e.add(i),e.add(a),{update:function(e){}}},w=function(e,t,n,r,o,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=new m.Clock,u=new m.Vector3(0,0,0),c={width:e.width,height:e.height},s={x:0,y:0},p=new m.Scene,f=function(t){var n=t.width,r=t.height,o=new m.WebGLRenderer({canvas:e,alpha:!0,antialias:!0}),i=window.devicePixelRatio?window.devicePixelRatio:1;return o.setPixelRatio(i),o.setSize(n,r),o.gammaInput=!0,o.gammaOutput=!0,o}(c),d=function(e){var t=e.width,n=e.height,r=t/n,o=new m.PerspectiveCamera(60,r,4,100);return o.position.z=40,o}(c),y=function(e){var l;l=a?t(e,15,n,a,.9):t(e,15,n,.93);return[b(e,r,o,i),l]}(p);return{update:function(){for(var e=l.getElapsedTime(),t=0;t<y.length;t++)y[t].update(e);d.position.x+=.01*(.01*s.x-d.position.x),d.position.y+=.01*(-.01*s.y-d.position.y),d.lookAt(u),f.render(p,d)},onWindowResize:function(){var t=e.width,n=e.height;c.width=t,c.height=n,d.aspect=t/n,d.updateProjectionMatrix(),f.setSize(t,n)},onMouseMove:function(e,t){s.x=e,s.y=t}}};function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,S(t).apply(this,arguments))}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.shape,n=e.color,r=e.ambientColor,o=e.strongLightColor,i=e.weakLightColor,a=e.color2,l=void 0===a?null:a;!function(e,t,n,r,o,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=function(e,t){var n=e.createElement("canvas");return t.appendChild(n),n}(document,e),u=w(l,t,n,r,o,i,a);function c(){l.width=window.innerWidth/7,l.height=window.innerWidth/7*.8,u.onWindowResize()}window.onresize=c,c(),function e(t){requestAnimationFrame(e),u.update()}()}(this.threeRootElement,t,n,r,o,i,l)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:function(t){e.threeRootElement=t}})}}])&&E(n.prototype,r),o&&E(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");g(e.prototype,t&&t.prototype),t&&g(e,t)}(t,e),t}(o.Component),L=n(16),C=new(n.n(L).a);function O(e){try{return C.parse(e)}catch(e){return e}}var R=n(7);function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==M(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var P=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=z(this,D(t).call(this,e))).triggerRoll=function(){var e="%"===n.props.sides?100:n.props.sides,t=O("1d".concat(e)),r=Object(R.a)(t);n.props.addRoll({rollData:r,original:"1d".concat(n.props.sides)})},n.state={width:window.innerWidth/7,height:window.innerWidth/7},n}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(t){e.setState({width:t.target.innerWidth/7,height:t.target.innerWidth/7})})}},{key:"render",value:function(){return i.a.createElement("a",{style:{width:this.state.width,height:this.state.height},className:"die-button",onClick:this.triggerRoll},i.a.createElement("div",null,i.a.createElement(k,this.props),i.a.createElement("label",{className:"die-button-label"},"d",this.props.sides)))}}])&&x(n.prototype,r),o&&x(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");j(e.prototype,t&&t.prototype),t&&j(e,t)}(t,e),t}(o.Component),G=Object(u.b)(null,r)(P),N=function(e,t,n,r){var o=new m.Group,i=new m.BoxGeometry(t,t,t),a=new m.MeshLambertMaterial({color:n,side:m.DoubleSide,opacity:r,transparent:!0}),l=new m.Mesh(i,a),u=new m.LineSegments(new m.EdgesGeometry(i),new m.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}},T=function(e,t,n,r){var o=new m.Group,i=new m.DodecahedronGeometry(t),a=new m.MeshLambertMaterial({color:n,side:m.DoubleSide,opacity:r,transparent:!0}),l=new m.Mesh(i,a),u=new m.LineSegments(new m.EdgesGeometry(i),new m.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}},A=n(4),I=n(5),W=n.n(I);window.THREE=m,window.CANNON=W.a;var q=function(e,t,n,r,o){var i=new m.Group,a=new W.a.World;A.DiceManager.setWorld(a);var l=new A.DiceD10({size:t});l.chamfer=1;var u=l.getGeometry(),c=new m.MeshLambertMaterial({color:n,side:m.DoubleSide,opacity:o,transparent:!0}),s=new m.Mesh(u,c),p=new m.LineSegments(new m.EdgesGeometry(u),new m.LineBasicMaterial),f=new A.DiceD10({size:t/3});f.chamfer=1;var d=f.getGeometry(),y=new m.MeshLambertMaterial({color:r,side:m.DoubleSide,opacity:o,transparent:!0}),h=new m.Mesh(d,y),b=new m.LineSegments(new m.EdgesGeometry(d),new m.LineBasicMaterial);i.add(s),i.add(p),h.position.set(.6*-t,.6*t,.6*-t),b.position.set(.6*-t,.6*t,.6*-t),i.add(h),i.add(b),e.add(i);var w=1;return{update:function(e){var t=e*w;i.rotation.z=-t,i.rotation.x=t}}},B=function(e,t,n,r){var o=new m.Group,i=new m.IcosahedronGeometry(t),a=new m.MeshLambertMaterial({color:n,side:m.DoubleSide,opacity:r,transparent:!0}),l=new m.Mesh(i,a),u=new m.LineSegments(new m.EdgesGeometry(i),new m.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}},V=function(e,t,n,r){var o=new m.Group,i=new m.OctahedronGeometry(t),a=new m.MeshLambertMaterial({color:n,side:m.DoubleSide,opacity:r,transparent:!0}),l=new m.Mesh(i,a),u=new m.LineSegments(new m.EdgesGeometry(i),new m.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{group:o,update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}};window.THREE=m,window.CANNON=W.a;var H=function(e,t,n,r){var o=new m.Group,i=new W.a.World;A.DiceManager.setWorld(i);var a=new A.DiceD10({size:t});a.chamfer=1;var l=a.getGeometry(),u=new m.MeshLambertMaterial({color:n,side:m.DoubleSide,opacity:r,transparent:!0}),c=new m.Mesh(l,u),s=new m.LineSegments(new m.EdgesGeometry(l),new m.LineBasicMaterial);o.add(c),o.add(s),e.add(o);var p=1;return{update:function(e){var t=e*p;o.rotation.z=-t,o.rotation.x=t}}},F=function(e,t,n,r){var o=new m.Group,i=new m.TetrahedronGeometry(t),a=new m.MeshLambertMaterial({color:n,side:m.DoubleSide,opacity:r,transparent:!0}),l=new m.Mesh(i,a),u=new m.LineSegments(new m.EdgesGeometry(i),new m.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}},J="#f53b57";function K(e){return(K="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==K(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=X(this,Y(t).call(this,e))).state={forceResize:0},n}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){return e.forceUpdate()})}},{key:"render",value:function(){return i.a.createElement("div",{className:"qr",style:{display:"flex"}},i.a.createElement(G,{sides:4,shape:F,color:"#ef5777",ambientColor:"white",strongLightColor:"#ffc048",weakLightColor:"#ffdd59"}),i.a.createElement(G,{sides:6,shape:N,color:"#ff3f34",ambientColor:"white",strongLightColor:"#ffdd59",weakLightColor:"#0be881"}),i.a.createElement(G,{sides:8,shape:V,color:"#ffdd59",ambientColor:"white",strongLightColor:"#0be881",weakLightColor:"#05c46b"}),i.a.createElement(G,{sides:10,shape:H,color:"#0be881",ambientColor:"white",strongLightColor:"#ffdd59",weakLightColor:"#ffdd59"}),i.a.createElement(G,{sides:12,shape:T,color:"#34e7e4",ambientColor:"white",strongLightColor:"#4bcffa",weakLightColor:"#575fcf"}),i.a.createElement(G,{sides:20,shape:B,color:"#4bcffa",ambientColor:"#575fcf",strongLightColor:"#575fcf",weakLightColor:J}),i.a.createElement(G,{sides:"%",shape:q,color:"#575fcf",color2:J,ambientColor:J,strongLightColor:J,weakLightColor:"#ffc048"}))}}])&&Q(n.prototype,r),o&&Q(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");U(e.prototype,t&&t.prototype),t&&U(e,t)}(t,e),t}(o.Component);function $(e){return($="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t){return!t||"object"!==$(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e){return(re=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var oe=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return ne(r,(n=r=ne(this,(e=re(t)).call.apply(e,[this].concat(i))),r.parseRoll=function(){var e=r.props.inputValue,t=O(e.split("d%").join("d100"));if(t instanceof Error){var n=t.toString(),o=n.substr(n.lastIndexOf("Error: ")+"Error: ".length);if("Invalid term ''."===o)return;document.querySelector("#roll-input-validation-label").innerHTML="* "+o,document.querySelector(".roll-input-validation-label").style.display="block",document.querySelector(".roll-input").classList.add("roll-input-validation-error")}else{if(!t)return;var i=Object(R.a)(t);r.props.addRoll({original:e,rollData:i}),r.props.modifyInput("")}},r.onChangeInput=function(e){r.props.modifyInput(e.target.value),document.querySelector(".roll-input-validation-label").style.display="none",document.querySelector(".roll-input").classList.remove("roll-input-validation-error")},n))}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){document.querySelector(".roll-input").addEventListener("change",function(){document.querySelector(".roll-input").classList.remove("roll-input-validation-error")})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"roll-input-div"},i.a.createElement("span",{style:{width:"90%",display:"inline-block"}},i.a.createElement("input",{id:"roll-input",className:"roll-input",placeholder:"3d12 + 2d8 + 10",value:this.props.inputValue,onChange:this.onChangeInput})),i.a.createElement("span",{style:{width:"10%",display:"inline-block"}},i.a.createElement("button",{className:"roll-input-button",onClick:this.parseRoll},"Roll"))),i.a.createElement("div",{className:"roll-input-validation-label"},i.a.createElement("label",{htmlFor:"roll-input",id:"roll-input-validation-label"})))}}])&&te(n.prototype,r),o&&te(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");ee(e.prototype,t&&t.prototype),t&&ee(e,t)}(t,e),t}(o.Component);var ie=Object(u.b)(function(e){return{inputValue:e.inputValue}},r)(oe);function ae(e){var t=e.rollData;if(t){var n=t.roll;return i.a.createElement("span",{className:"breakdown"},n.map(function(e,t){return function(e,t){if(e.constant)return i.a.createElement("span",{key:t,className:"breakdown-constant"}," ",e.constant," ");if(e.operator)return i.a.createElement("span",{key:t,className:"breakdown-operator"}," ",e.operator," ");console.log(e.synthesizedRolls);var n=i.a.createElement("i",{key:"poly"+t,className:function(e){switch(e){case 4:return"flaticon-tetrahedron poly polyhedron-d4";case 6:return"flaticon-cube poly polyhedron-d6";case 8:return"flaticon-octahedron poly polyhedron-d8";case 10:return"flaticon-dodecahedron-1 poly polyhedron-d10";case 12:return"flaticon-dodecahedron poly polyhedron-d12";case 20:return"flaticon-icosahedron poly polyhedron-d20";case 100:return"flaticon-dodecahedron-1 poly polyhedron-d100";default:return"flaticon-dodecahedron-2 poly polyhedron-dn"}}(e.diceTerm.die.sides)});return e.synthesizedRolls.length<=1?i.a.createElement("span",{key:"term"+t},n,le(e)):i.a.createElement("span",{key:"term"+t},n,"(",le(e),")")}(e,t)}))}}function le(e){return e.synthesizedRolls.map(function(t,n){var r=function(e,t){var n=["breakdown-die"];return e.explosions&&e.explosions[t]?n.push("breakdown-exploded"):e.allRolls[t]===e.diceTerm.die.sides&&n.push("breakdown-critical-hit"),e.rerolls&&e.rerolls[t]&&n.push("breakdown-rerolled"),1==e.synthesizedRolls[t]&&n.push("breakdown-critical-miss"),e.keep[t]||n.push("breakdown-dropped"),n.join(" ")}(e,n),o=[i.a.createElement("span",{key:n,className:r}," ",t)];return n<e.synthesizedRolls.length-1&&o.push(i.a.createElement("span",{key:"plus"+n,className:"breakdown-operator"},"\xa0+\xa0")),o})}function ue(e){return(ue="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return!t||"object"!==ue(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fe(e){return(fe=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var de=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),pe(this,fe(t).apply(this,arguments))}var n,r,o;return n=t,(r=[{key:"renderRolls",value:function(){var e=this;return this.props.rolls?this.props.rolls.map(function(t,n){var r=ae(t),o=n%2!==e.props.rolls.length%2?"roll-table-dark-band":"roll-table-light-band",a="roll-row ".concat(o);return i.a.createElement("tr",{key:n,className:a,onClick:function(){return e.props.modifyInput(t.original)}},i.a.createElement("td",{className:"roll-table-roll-data"},r),i.a.createElement("td",{className:"roll-table-roll-evaluated"},t.rollData.evaluated))}):[]}},{key:"render",value:function(){return i.a.createElement("table",{style:{width:"100%",borderCollapse:"collapse",border:"3px solid #333"}},i.a.createElement("tbody",{style:{width:"100%"},className:"roll-table"},this.renderRolls()))}}])&&se(n.prototype,r),o&&se(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");ce(e.prototype,t&&t.prototype),t&&ce(e,t)}(t,e),t}(o.Component);var ye=Object(u.b)(function(e){return{rolls:e.rolls}},r)(de);function he(e){return(he="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function we(e,t){return!t||"object"!==he(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ve(e){return(ve=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ge=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),we(this,ve(t).apply(this,arguments))}var n,r,o;return n=t,(r=[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Z,null),i.a.createElement(ie,null),i.a.createElement(ye,null))}}])&&be(n.prototype,r),o&&be(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");me(e.prototype,t&&t.prototype),t&&me(e,t)}(t,e),t}(o.Component);l.a.render(i.a.createElement(u.a,{store:Object(c.c)(d)},i.a.createElement(ge,null)),document.getElementById("root"))},44:function(e,t,n){n(43),e.exports=n(20)},7:function(module,__webpack_exports__,__webpack_require__){"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function interpretRoll(roll){var terms=[];roll.forEach(function(e){e.die?terms.push(rollDice(e)):terms.push(e)}),console.log(terms);var toEvaluate=terms.map(function(e){return e.allRolls?e.sum:e.operator?e.operator:e.constant?e.constant:void 0}).join("");return{roll:terms,evaluated:eval(toEvaluate)}}function rollDice(e){for(var t=[],n=0;n<e.count;n++)t.push(generateRoll(e.die.sides));var r=e.die.explode?explode(e,t):null,o=e.die.reroll?rerollLowest(e,t):null,i=synthesizeRolls(t,r,o),a=determineKeep(e,i);return{allRolls:t,explosions:r,rerolls:o,keep:a,sum:sumOfRolls(i,a),synthesizedRolls:i,diceTerm:e}}function generateRoll(e){return Math.floor(Math.random()*e)+1}function compareByRoll(e,t){return e.roll<t.roll?-1:e.roll>t.roll?1:0}function explode(e,t){return t.map(function(t){if(e.die.explode.includes(t)){for(var n=[],r=t;r===e.die.sides;)n.push(r),r=generateRoll(e.die.sides);return n.push(r),n}return null})}function rerollLowest(e,t){return t.map(function(t){return e.die.reroll.includes(t)?[t,generateRoll(e.die.sides)]:null})}function determineKeep(e,t){var n=[],r=t.map(function(e,t){return n.push(!0),{roll:e,index:t}});if(0===e.keep)return n;r.sort(compareByRoll);for(var o=0;o<e.count-e.keep;o++)n[r[o].index]=!1;return n}function sumOfRolls(e,t){return e.reduce(function(e,n,r){return t[r]?e+n:e},0)}function sum(e){return e.reduce(function(e,t){return e+t})}function synthesizeRolls(e,t,n){var r=_toConsumableArray(e);return t&&t.map(function(e,t){e&&(r[t]=sum(e))}),n&&n.map(function(e,t){e&&(r[t]=e[e.length-1])}),r}__webpack_require__.d(__webpack_exports__,"a",function(){return interpretRoll})}},[[44,0,1]]]);
//# sourceMappingURL=main.f97d5ff7.chunk.js.map