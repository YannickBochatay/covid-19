(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{140:function(e,t,a){e.exports=a(263)},158:function(e,t){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(15),c=a.n(u),l=(a(145),a(146),a(147),a(33)),s=a.n(l),i=a(57),o=a(20),p=a(21),d=a(22),f=a(23),h=a(138),m=a(47),v=a(139),b=r.a.createContext(),O=b,g=function(e){return function(t){return r.a.createElement(b.Consumer,null,(function(t){var a=t.data,n=t.metadata;return r.a.createElement(e,{data:a,metadata:n})}))}},E=g(function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("pre",null,JSON.stringify(this.props.metadata,null,4)),r.a.createElement("pre",null,JSON.stringify(this.props.data,null,4)))}}]),a}(r.a.Component)),j=a(24),y=a(48),D=a(56),w=g(function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={deps:[]},e.handleChange=function(t){return e.setState({deps:t})},e}return Object(p.a)(a,[{key:"getOptions",value:function(){var e=this.props.data;return Object(y.a)(new Set(e.map((function(e){return e.dep})))).map((function(e){return{label:e,value:e}}))}},{key:"render",value:function(){return r.a.createElement(j.a.Group,{controlId:"departement"},r.a.createElement(j.a.Label,null,"Departement"),r.a.createElement(D.a,{options:this.getOptions(),value:this.state.deps,onChange:this.handleChange,isMulti:!0}))}}]),a}(r.a.Component)),C=["sursaud_cl_age_corona","dep","date_de_passage"],k=g(function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={parameter:""},e.handleChange=function(t){return e.setState({parameter:t})},e}return Object(p.a)(a,[{key:"getOptions",value:function(){return this.props.metadata.filter((function(e){return!C.includes(e.Colonne)})).map((function(e){return{label:e.Description,value:e.Colonne}}))}},{key:"render",value:function(){return r.a.createElement(j.a.Group,{controlId:"parameter"},r.a.createElement(j.a.Label,null,"Param\xe8tre"),r.a.createElement(D.a,{options:this.getOptions(),value:this.state.parameter,onChange:this.handleChange}))}}]),a}(r.a.Component)),x=a(137),M=a(3),S=a.n(M),I=g(function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={startDate:null,endDate:null,focusedInput:null},e.handleChange=function(t){var a=t.startDate,n=t.endDate;return e.setState({startDate:a,endDate:n})},e.handleFocus=function(t){return e.setState({focusedInput:t})},e}return Object(p.a)(a,[{key:"getMaxRange",value:function(){var e=this.props.data,t=new Set(e.map((function(e){return Number(new Date(e.date_de_passage))})).filter((function(e){return!isNaN(e)})));return{minDate:t.length?S()(Math.min.apply(Math,Object(y.a)(t))):S()(),maxDate:t.length?S()(Math.max.apply(Math,Object(y.a)(t))):S()()}}},{key:"render",value:function(){return r.a.createElement(j.a.Group,{controlId:"dateRange"},r.a.createElement(j.a.Label,null,"P\xe9riode"),r.a.createElement("br",null),r.a.createElement(x.DateRangePicker,Object.assign({startDate:this.state.startDate,startDateId:"start_date",endDate:this.state.endDate,endDateId:"end_date",onDatesChange:this.handleChange,focusedInput:this.state.focusedInput,onFocusChange:this.handleFocus},this.getMaxRange())))}}]),a}(r.a.Component)),_=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement(w,null),r.a.createElement(k,null),r.a.createElement(I,null))}}]),a}(r.a.Component),N=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={data:[],metadata:[]},e}return Object(p.a)(a,[{key:"fetchData",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data.csv");case 2:return t=e.sent,e.next=5,t.text();case 5:return a=e.sent,n=a.split(/[\n\r]+/).filter((function(e){return e})),r=n.shift().split(/\s*,/),e.abrupt("return",n.map((function(e){var t=e.split(/\s*,/);return r.reduce((function(e,a,n){return e[a]=t[n],e}),{})})));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMetaData",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("metadata.csv");case 2:return t=e.sent,e.next=5,t.text();case 5:return a=e.sent,(n=a.split(/[\n\r]+/).filter((function(e){return e}))).shift(),r=n.shift().split(/\s*;/),e.abrupt("return",n.map((function(e){var t=e.split(/\s*;/);return r.reduce((function(e,a,n){return e[a]=t[n],e}),{})})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:return t=e.sent,e.next=5,this.fetchMetaData();case 5:a=e.sent,this.setState({data:t,metadata:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},r.a.createElement(h.a,{fluid:!0},r.a.createElement("h1",null,"Graphique interactif des donn\xe9es relatives \xe0 l'\xe9pid\xe9mie du covid-19 "),r.a.createElement(v.a,null,r.a.createElement(m.a,null,r.a.createElement(_,null)),r.a.createElement(m.a,{xs:9},r.a.createElement(E,null))),r.a.createElement("h6",null,"Source\xa0:\xa0",r.a.createElement("a",{href:"https://www.data.gouv.fr/fr/datasets/donnees-relatives-a-lepidemie-du-covid-19/"},"https://www.data.gouv.fr/fr/datasets/donnees-relatives-a-lepidemie-du-covid-19/"))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.87341bbe.chunk.js.map