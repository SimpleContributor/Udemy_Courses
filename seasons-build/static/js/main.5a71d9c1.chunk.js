(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),o=a(5),i=a(0),c=a.n(i),l=a(4),u=a.n(l),m=(a(12),{summer:{text:"Lets hit the beach",iconName:"sun"},winter:{text:"Brr it is cold!",iconName:"snowflake"}}),d=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=m[n],s=r.text,o=r.iconName;return c.a.createElement("div",{className:"season-display ".concat(n)},c.a.createElement("i",{className:"massive ".concat(o," icon icon-left")}),c.a.createElement("h1",null,s),c.a.createElement("i",{className:"massive ".concat(o," icon icon-right")}))},h=function(e){return c.a.createElement("div",{className:"ui active dimmer"},c.a.createElement("div",{className:"ui big text loader"},e.message))};h.defaultProps={message:"Loading..."};var v=h,g=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={lat:null,errorMessage:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?c.a.createElement("div",null,"Error: ",this.state.errorMessage):!this.state.errorMessage&&this.state.lat?c.a.createElement(d,{lat:this.state.lat}):c.a.createElement(v,{message:"Please allow location request"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"border red"},this.renderContent())}}]),a}(i.Component);u.a.render(c.a.createElement(g,null),document.querySelector("#root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5a71d9c1.chunk.js.map