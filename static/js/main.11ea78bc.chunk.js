(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var o=c(4),n=c.n(o),s=c(5),a=c(6),r=c(8),i=c(7),d=c(1),l=c.n(d),u=c(3),b=c.n(u),j=(c(13),c(14),c(0)),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(r.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(s.a)(this,c);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.pickGood=function(t){e.setState({selectedGood:t})},e.removeGood=function(){e.setState({selectedGood:""})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("main",{className:"section container",children:[Object(j.jsxs)("h1",{className:b()("title",{"is-flex is-align-items-center":t}),children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.removeGood})]}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:m.map((function(c){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":t===c}),children:[Object(j.jsx)("td",{children:t===c?Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.removeGood,children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.pickGood(c)},children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(l.a.Component);n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.11ea78bc.chunk.js.map