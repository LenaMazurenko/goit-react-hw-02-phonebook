(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(17),n(11)),s=n(3),l=n(4),u=n(6),d=n(5),m=n(12),b=n(9),h=n.n(b),j=n(0),p=function(e){var t=e.children;return Object(j.jsx)("section",{className:h.a.Section,children:t})},f=n(10),O=n(2),x=n.n(O),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmitProp(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:x.a.FormContacts,children:[Object(j.jsxs)("label",{className:x.a.Label,children:["Name",Object(j.jsx)("input",{type:"text",placeholder:"Vinny Pooch",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:x.a.Label,children:["Number",Object(j.jsx)("input",{type:"tel",placeholder:"+380800-00-00",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:x.a.SubmitBtn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=C,S=function(e){var t=e.findeName,n=e.onFind;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"find",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:n})]})},y=function(e){var t=e.list,n=e.findeContact;return Object(j.jsx)("ul",{children:n?n.map((function(e){return Object(j.jsx)("li",{children:e.name},e.id)})):t.map((function(e){return Object(j.jsxs)("li",{children:[e.name," - ",e.number]},e.id)}))})},g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHundler=function(t){var n=t.name,a=t.number,r=Object(m.a)();e.state.contacts.find((function(e){return e.name===n}))?alert("".concat(n," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[{id:r,name:n,number:a}])}}))},e.filterHundler=function(t){e.setState({filter:t.target.value})},e.findeContact=function(){var t=e.state.contacts.filter((function(t){return!0===t.name.toLowerCase().includes(e.state.filter.toLowerCase())}));return console.log(t),t!==[]?t:void 0},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(p,{children:[Object(j.jsx)("h1",{children:"Phonebook "}),Object(j.jsx)(v,{onSubmitProp:this.formSubmitHundler}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(S,{findeName:this.state.filter,onFind:this.filterHundler}),Object(j.jsx)(y,{list:this.state.contacts,findeContact:this.findeContact()})]})}}]),n}(a.Component),A=g;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={FormContacts:"FormContacts_FormContacts__nqyRr",Label:"FormContacts_Label__2nDpJ",SubmitBtn:"FormContacts_SubmitBtn__3aXGc"}},9:function(e,t,n){e.exports={Section:"Section_Section__2ePVn"}}},[[19,1,2]]]);
//# sourceMappingURL=main.5444662b.chunk.js.map