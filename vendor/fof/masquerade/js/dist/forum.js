module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([,function(e,t){e.exports=flarum.core.compat["common/Model"]},function(e,t){e.exports=flarum.core.compat["forum/app"]},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,"a",(function(){return o}))},function(e,t){e.exports=flarum.core.compat["common/helpers/icon"]},function(e,t){e.exports=flarum.core.compat["common/components/Button"]},function(e,t){e.exports=flarum.core.compat["common/Component"]},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),o=n(1),i=n.n(o),a=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).name=i.a.attribute("name"),t.description=i.a.attribute("description"),t.type=i.a.attribute("type"),t.validation=i.a.attribute("validation"),t.required=i.a.attribute("required"),t.prefix=i.a.attribute("prefix"),t.icon=i.a.attribute("icon"),t.sort=i.a.attribute("sort"),t.deleted_at=i.a.attribute("deleted_at",i.a.transformDate),t.answer=i.a.hasOne("answer"),t.on_bio=i.a.attribute("on_bio"),t}return Object(r.a)(t,e),t.prototype.apiEndpoint=function(){return"/masquerade/fields"+(this.exists?"/"+this.data.id:"")},t}(i.a)},function(e,t){e.exports=flarum.core.compat["common/components/Select"]},,function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/UserPage"]},function(e,t){e.exports=flarum.core.compat["common/models/User"]},,function(e,t){e.exports=flarum.core.compat["common/app"]},function(e,t){e.exports=flarum.core.compat["common/utils/computed"]},function(e,t){e.exports=flarum.core.compat["common/components/LinkButton"]},function(e,t){e.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["common/components/Link"]},function(e,t){e.exports=flarum.core.compat["forum/components/UserCard"]},,,function(e,t,n){"use strict";n.r(t),n.d(t,"components",(function(){return G})),n.d(t,"types",(function(){return H}));var r=n(2),o=n.n(r),i=n(12),a=n.n(i),s=n(7),u=n(3),l=n(14),f=n.n(l),c=n(1),d=n.n(c),p=n(15),h=n.n(p),v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).content=d.a.attribute("content"),t.fieldId=d.a.attribute("fieldId"),t.field=h()("fieldId",(function(e){return f.a.store.getById("masquerade-field",e)})),t.userId=d.a.attribute("user_id"),t}return Object(u.a)(t,e),t}(d.a),y=n(10),b=n(16),w=n.n(b),q=n(11),x=n.n(q),g=n(17),O=n.n(g),A=n(6),_=n.n(A),F=n(4),C=n.n(F),P=function(){function e(e){var t=e.field,n=e.set,r=e.value;this.field=t,this.set=n,this.value=r}var t=e.prototype;return t.readAttribute=function(e,t){return"function"==typeof e[t]?e[t]():e[t]},t.validationRules=function(){return this.readAttribute(this.field,"validation").split("|")},t.validationRule=function(e){var t=null;return this.validationRules().forEach((function(n){var r=n.split(":",2);r[0]===e&&(t=r[1])})),t},t.editorField=function(){return m("div",{class:"Form-group Field"},m("label",null,this.field.icon()?[C()(this.field.icon())," "]:null," ",this.field.name()," ",this.field.required()?"*":null),m("div",{class:"FormField"},this.field.prefix()?m(".prefix",this.field.prefix()):null,this.editorInput(),this.field.description()?m("div",{class:"helpText"},this.field.description()):null))},t.editorInput=function(){return m("input",this.editorInputAttrs())},t.editorInputAttrs=function(){var e=this;return{className:"FormControl",oninput:function(t){e.set(t.target.value)},value:this.value,required:this.field.required()}},t.answerField=function(){var e=this.readAttribute(this.field,"icon");return m("div",{className:"Masquerade-Bio-Set"+(this.hasAnswer()?"":" Masquerade-Bio-Set--empty")},m("span",{class:"Masquerade-Bio-Field"},e&&m("[",null,C()(e)," "),this.readAttribute(this.field,"name"),":"," "),m("span",{class:"Masquerade-Bio-Answer"},this.answerContent()))},t.answerContent=function(){return this.value},t.hasAnswer=function(){var e=this.answerContent();return null!==e&&("object"==typeof e?!!Object.keys(e).length:!(null==e||!e.length))},e.isNoOptionSelectedValue=function(e){return null===e||""===e},e}(),j=function(e){function t(){return e.apply(this,arguments)||this}Object(u.a)(t,e);var n=t.prototype;return n.editorInput=function(){var e=this;return this.options().map((function(t){return m("div",m("label",[m("input[type=radio]",{checked:t.selected(e.value),onclick:function(){e.set(t.key)}})," "+t.label]))}))},n.options=function(){var e=[];return this.readAttribute(this.field,"required")||e.push({selected:function(e){return P.isNoOptionSelectedValue(e)},key:null,label:app.translator.trans("fof-masquerade.forum.fields.select.none-optional")}),e.push({selected:function(e){return-1!==["true","1",1,!0,"yes"].indexOf(e)},key:"true",label:app.translator.trans("fof-masquerade.forum.fields.boolean.yes")}),e.push({selected:function(e){return-1!==["false","0",0,!1,"no"].indexOf(e)},key:"false",label:app.translator.trans("fof-masquerade.forum.fields.boolean.no")}),P.isNoOptionSelectedValue(this.value)||-1!==["true","1",1,!0,"yes","false","0",0,!1,"no"].indexOf(this.value)||e.push({selected:function(){return!0},key:this.value,label:"(invalid) "+this.value}),e},n.answerContent=function(){return P.isNoOptionSelectedValue(this.value)?"":-1!==[1,"1",!0,"true","yes"].indexOf(this.value)?[C()("far fa-check-square")," ",app.translator.trans("fof-masquerade.forum.fields.boolean.yes")]:[C()("far fa-square")," ",app.translator.trans("fof-masquerade.forum.fields.boolean.no")]},t}(P),M=n(5),I=n.n(M),S=function(e){function t(){return e.apply(this,arguments)||this}Object(u.a)(t,e);var n=t.prototype;return n.editorInputAttrs=function(){var t=e.prototype.editorInputAttrs.call(this);return t.type="email",t.placeholder="you@example.com",t},n.answerContent=function(){var e=this,t=this.value;if(!t)return null;var n=t.split(/@|\./).map((function(e){return e.replace(/(.{2})./g,"$1*")})).join("*");return I.a.component({onclick:function(){return e.mailTo()},className:"Button Button--text",icon:"far fa-envelope"},n)},n.mailTo=function(){window.location="mailto:"+this.value},t}(P),V=n(8),B=n.n(V),N=function(e){function t(){return e.apply(this,arguments)||this}Object(u.a)(t,e);var n=t.prototype;return n.editorInput=function(){var e=this;return B.a.component({onchange:function(t){"fof_masquerade_no_option_selected"===t&&(t=null),e.set(t)},value:P.isNoOptionSelectedValue(this.value)?"fof_masquerade_no_option_selected":this.value,options:this.options()})},n.options=function(){var e={};this.readAttribute(this.field,"required")?P.isNoOptionSelectedValue(this.value)&&(e.fof_masquerade_no_option_selected=app.translator.trans("fof-masquerade.forum.fields.select.none-required")):e.fof_masquerade_no_option_selected=app.translator.trans("fof-masquerade.forum.fields.select.none-optional");var t=this.validationRule("in");return t&&t.split(",").forEach((function(t){e[t]=t})),P.isNoOptionSelectedValue(this.value)||void 0!==e[this.value]||(e[this.value]="(invalid) "+this.value),e},t}(P),k=function(e){function t(){return e.apply(this,arguments)||this}Object(u.a)(t,e);var n=t.prototype;return n.editorInputAttrs=function(){var t=e.prototype.editorInputAttrs.call(this);return t.type="url",t.placeholder="https://example.com",t},n.answerContent=function(){var e=this,t=this.value;return t?I.a.component({onclick:function(){return e.to()},className:"Button Button--text",icon:"fas fa-link"},t.replace(/^https?:\/\//,"")):null},n.to=function(){window.open().location=this.value},t}(P),E=function(){function e(){}return e.typeForField=function(e){var t=e.field,n=e.set,r=void 0===n?void 0:n,o=e.value,i=P,a=this.identify(t);return a&&(i=this.types()[a]),new i({field:t,set:r,value:o})},e.fieldAttribute=function(e,t){return"function"==typeof e[t]?e[t]():e[t]},e.types=function(){return{boolean:j,email:S,select:N,url:k}},e.identify=function(e){var t=this,n=(this.fieldAttribute(e,"validation")||"").split(","),r=null,o=this.fieldAttribute(e,"type");return void 0!==this.types()[o]?o:(n.forEach((function(e){e=e.trim(),void 0!==t.types()[e]&&(r=e)})),r)},e}(),R=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).answers=void 0,t.user=void 0,t}Object(u.a)(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.loading=!0,this.answers=[],this.user=this.attrs.user,this.load(this.user)},n.view=function(){var e=this;return m("div",{class:"Masquerade-Bio"},m("div",{class:"Fields"},o.a.store.all("masquerade-field").sort((function(e,t){return e.sort()-t.sort()})).map((function(t){var n=e.answers.find((function(e){return e.field().id()===t.id()}));return e.field(t,(null==n?void 0:n.content())||"")}))))},n.field=function(e,t){return E.typeForField({field:e,value:t}).answerField()},n.load=function(){var e=this;this.answers=this.user.masqueradeAnswers(),!1===this.answers&&(this.answers=[],o.a.store.find("users",this.user.id(),{include:"masqueradeAnswers"}).then((function(){e.answers=e.user.masqueradeAnswers(),m.redraw()}))),m.redraw()},t}(_.a),T=n(18),U=n.n(T),L=function(e){function t(){return e.apply(this,arguments)||this}Object(u.a)(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.loading=!0,this.enforceProfileCompletion=o.a.forum.attribute("masquerade.force-profile-completion")||!1,this.profileCompleted=o.a.forum.attribute("masquerade.profile-completed")||!1,this.profileNowCompleted=!1,this.answers=[],this.answerValues={},this.user=this.attrs.user,this.load(),this.dirty=!this.profileCompleted},n.view=function(){var e=this;return m("form",{class:"ProfileConfigurePane",onsubmit:this.update.bind(this)},!(!this.enforceProfileCompletion||this.profileCompleted)&&m("div",{class:"Alert Alert--Error"},o.a.translator.trans("fof-masquerade.forum.alerts.profile-completion-required")),m("div",{class:"Fields"},o.a.store.all("masquerade-field").sort((function(e,t){return e.sort()-t.sort()})).map((function(t){return e.field(t)}))),m(I.a,{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.dirty},o.a.translator.trans("fof-masquerade.forum.buttons.save-profile")),!!this.profileNowCompleted&&m("span",{class:"Masquerade-NowCompleted"},o.a.translator.trans("fof-masquerade.forum.alerts.profile-completed",{a:m(U.a,{href:o.a.route("index")})})))},n.field=function(e){return E.typeForField({field:e,set:this.set.bind(this,e),value:this.answerValues[e.id()]}).editorField()},n.load=function(){var e=this;this.answers=this.user.masqueradeAnswers(),!1===this.answers?(this.answers=[],o.a.store.find("users",this.user.id(),{include:"masqueradeAnswers"}).then((function(){e.answers=e.user.masqueradeAnswers(),e.answerValues={},o.a.store.all("masquerade-field").forEach((function(t){var n=e.answers.find((function(e){return e.field().id()===t.id()}));e.answerValues[t.id()]=n?n.content():""})),e.loading=!1,m.redraw()}))):(this.loading=!1,o.a.store.all("masquerade-field").forEach((function(t){var n=e.answers.find((function(e){return e.field().id()===t.id()}));e.answerValues[t.id()]=n?n.content():""}))),m.redraw()},n.set=function(e,t){this.answerValues[e.id()]=t,this.dirty=!0},n.update=function(e){var t=this;e.preventDefault(),this.loading=!0,o.a.request({method:"POST",url:o.a.forum.attribute("apiUrl")+"/masquerade/configure/"+this.user.id(),body:this.answerValues}).then((function(e){t.dirty=!1,t.profileCompleted||(t.profileCompleted=!0,t.profileNowCompleted=!0),t.parseResponse(e)})).catch((function(){t.loading=!1,m.redraw()}))},n.parseResponse=function(e){console.log(e),this.answers=o.a.store.pushPayload(e),this.loading=!1,m.redraw()},t}(_.a),D=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).loading=!0,t}Object(u.a)(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.loadUser(m.route.param("username"))},n.pageContentComponent=function(){return this.user?this.user.canEditMasqueradeProfile()?m(L,{user:this.user}):m(R,{user:this.user}):null},n.show=function(t){e.prototype.show.call(this,t),this.loading=!1,m.redraw()},n.content=function(){return m("div",{class:"MasqueradeRoot"},this.loading&&m(O.a,null),this.pageContentComponent())},t}(x.a);var z=n(19),$=n.n(z);o.a.initializers.add("fof-masquerade",(function(e){e.store.models["masquerade-field"]=s.a,e.store.models["masquerade-answer"]=v,a.a.prototype.bioFields=d.a.hasMany("bioFields"),a.a.prototype.masqueradeAnswers=d.a.hasMany("masqueradeAnswers"),a.a.prototype.canEditMasqueradeProfile=d.a.attribute("canEditMasqueradeProfile"),o.a.routes["fof-masquerade"]={path:"/u/:username/masquerade",resolver:{onmatch:function(){if(!o.a.forum.attribute("canViewMasquerade"))throw new Error;return D}}},Object(y.extend)(x.a.prototype,"navItems",(function(e){if(o.a.forum.attribute("canViewMasquerade")||this.user.canEditMasqueradeProfile()){var t=this.user.canEditMasqueradeProfile();e.add("masquerade",w.a.component({href:o.a.route("fof-masquerade",{username:this.user.slug()}),icon:"far fa-id-card","data-editProfile":t},o.a.translator.trans("fof-masquerade.forum.buttons."+(t?"edit":"view")+"-profile")),200)}})),Object(y.extend)($.a.prototype,"infoItems",(function(e){var t=o.a.forum.attribute("canViewMasquerade")&&this.attrs.user.bioFields()||[];e.add("masquerade-bio",m("div",null,t.map((function(e){var t=e.attribute("field");return E.typeForField({field:t,value:e.content()}).answerField()}))))}))}));var G={ProfileConfigurePane:L,ProfilePane:R,RootMasqueradePane:D},H={BaseField:P,BooleanField:j,EmailField:S,SelectField:N,TypeFactory:E,UrlField:k}}]);
//# sourceMappingURL=forum.js.map