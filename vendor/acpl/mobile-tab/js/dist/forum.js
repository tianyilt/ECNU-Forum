(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)o.o(n,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t),o.d(t,{components:()=>k});const n=flarum.core.compat["forum/app"];var r=o.n(n);const e=flarum.core.compat["common/extend"],a=flarum.core.compat["common/Application"];var s=o.n(a);function c(o,t){return c=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o},c(o,t)}function i(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,c(o,t)}const u=flarum.core.compat["common/Component"];var l=o.n(u);const f=flarum.core.compat["common/helpers/listItems"];var p=o.n(f);const d=flarum.core.compat["common/utils/ItemList"];var b=o.n(d);const v=flarum.core.compat["common/components/LinkButton"];var y=o.n(v),h=function(o){function t(){for(var t,n=arguments.length,r=new Array(n),e=0;e<n;e++)r[e]=arguments[e];return(t=o.call.apply(o,[this].concat(r))||this).attrs=void 0,t}return i(t,o),t.prototype.view=function(o){var t=this.attrs,n=t.route,r=t.icon,e=t.label;return m(y(),{href:n,icon:r,title:e},e)},t}(l());const g=flarum.core.compat["common/components/Button"];var _=o.n(g);const w=flarum.core.compat["forum/components/LogInModal"];var M=o.n(w);const N=flarum.core.compat["forum/components/SessionDropdown"];var O=o.n(N);const S=flarum.core.compat["common/helpers/avatar"];var T=o.n(S),j=function(o){function t(){return o.apply(this,arguments)||this}return i(t,o),t.prototype.getButtonContent=function(o){var t=r().session.user;return[T()(t)," ",m("span",{className:"Button-label"},r().translator.trans("core.forum.header.profile_button"))]},t}(O()),B=function(o){function t(){return o.apply(this,arguments)||this}i(t,o);var n=t.prototype;return n.view=function(o){return m("nav",{className:"MobileTab"},m("ul",{className:"MobileTab-items"},p()(this.items().toArray())))},n.items=function(){var o=new(b());if(o.add("home",m(h,{route:"/",icon:"fas fa-home",label:r().translator.trans("acpl-mobile-tab.forum.home")}),100),"flarum-tags"in flarum.extensions&&o.add("tags",m(h,{route:r().route("tags"),icon:"fas fa-tags",label:r().translator.trans("flarum-tags.forum.index.tags_link")}),90),r().session.user){var t=r().session.user.unreadNotificationCount();o.add("notifications",m(y(),{href:r().route("notifications"),icon:"fas fa-bell",title:r().translator.trans("core.forum.notifications.title"),className:"Dropdown NotificationsDropdown"},t?m("span",{className:"NotificationsDropdown-unread"},t):"",r().translator.trans("core.forum.notifications.title")),80),o.add("session",m(j,null),70)}else o.add("logIn",m(_(),{icon:"fas fa-user",className:"Button Button--link",onclick:function(){return r().modal.show(M(),{})}},r().translator.trans("core.forum.header.log_in_link")),70);return o},t}(l()),k={MobileTab:B,MobileTabItem:h,MobileTabSessionDropdown:j};r().initializers.add("acpl/mobile-tab",(function(){(0,e.extend)(s().prototype,"mount",(function(){var o=document.createElement("div");m.mount(document.body.appendChild(o),B)}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map