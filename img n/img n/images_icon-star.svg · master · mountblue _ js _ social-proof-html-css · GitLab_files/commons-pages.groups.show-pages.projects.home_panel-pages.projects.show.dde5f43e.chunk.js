(this.webpackJsonp=this.webpackJsonp||[]).push([[212],{"7Gq8":function(t,e,i){var s=i("BZxG");t.exports=function(t,e,i){for(var o=-1,n=t.criteria,a=e.criteria,r=n.length,l=i.length;++o<r;){var c=s(n[o],a[o]);if(c)return o>=l?c:c*("desc"==i[o]?-1:1)}return t.index-e.index}},"95R8":function(t,e,i){var s=i("90g9"),o=i("aEqC"),n=i("nHTl"),a=i("QwWC"),r=i("uHqx"),l=i("wJPF"),c=i("7Gq8"),d=i("uYOL"),h=i("P/Kr");t.exports=function(t,e,i){e=e.length?s(e,(function(t){return h(t)?function(e){return o(e,1===t.length?t[0]:t)}:t})):[d];var u=-1;e=s(e,l(n));var p=a(t,(function(t,i,o){return{criteria:s(e,(function(e){return e(t)})),index:++u,value:t}}));return r(p,(function(t,e){return c(t,e,i)}))}},BZxG:function(t,e,i){var s=i("G1mR");t.exports=function(t,e){if(t!==e){var i=void 0!==t,o=null===t,n=t==t,a=s(t),r=void 0!==e,l=null===e,c=e==e,d=s(e);if(!l&&!d&&!a&&t>e||a&&r&&c&&!l&&!d||o&&r&&c||!i&&c||!n)return 1;if(!o&&!a&&!d&&t<e||d&&i&&n&&!o&&!a||l&&i&&n||!r&&n||!c)return-1}return 0}},QwWC:function(t,e,i){var s=i("2v8U"),o=i("20jF");t.exports=function(t,e){var i=-1,n=o(t)?Array(t.length):[];return s(t,(function(t,s,o){n[++i]=e(t,s,o)})),n}},TKCn:function(t,e,i){var s=i("4ips"),o=i("95R8"),n=i("Opi0"),a=i("etTJ"),r=n((function(t,e){if(null==t)return[];var i=e.length;return i>1&&a(t,e[0],e[1])?e=[]:i>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),o(t,s(e,1),[])}));t.exports=r},UFYv:function(t,e,i){"use strict";i("3UXl"),i("iyoE");var s=i("Yyc1"),o=i("koWC"),n=i("z1xw"),a=i("qPgm"),r=i("/lV4");const l={notificationTitles:{participating:Object(r.s__)("NotificationLevel|Participate"),mention:Object(r.s__)("NotificationLevel|On mention"),watch:Object(r.s__)("NotificationLevel|Watch"),global:Object(r.s__)("NotificationLevel|Global"),disabled:Object(r.s__)("NotificationLevel|Disabled"),custom:Object(r.s__)("NotificationLevel|Custom")},notificationTooltipTitle:Object(r.__)("Notification setting - %{notification_title}"),notificationDescriptions:{participating:Object(r.__)("You will only receive notifications for items you have participated in"),mention:Object(r.__)("You will receive notifications only for comments in which you were @mentioned"),watch:Object(r.__)("You will receive notifications for any activity"),disabled:Object(r.__)("You will not get any notifications via email"),global:Object(r.__)("Use your global notification setting"),custom:Object(r.__)("You will only receive notifications for items you have participated in and the events you choose"),owner_disabled:Object(r.__)("Notifications have been disabled by the project or group owner")},updateNotificationLevelErrorMessage:Object(r.__)("An error occurred while updating the notification settings. Please try again."),loadNotificationLevelErrorMessage:Object(r.__)("An error occurred while loading the notification settings. Please try again."),customNotificationsModal:{title:Object(r.__)("Custom notification events"),bodyTitle:Object(r.__)("Notification events"),bodyMessage:Object(r.__)("With custom notification levels you receive notifications for the same events as in the Participate level, with additional selected events. For more information, see %{notificationLinkStart}notification emails%{notificationLinkEnd}.")},eventNames:{change_reviewer_merge_request:Object(r.s__)("NotificationEvent|Merge request reviewers are changed"),close_issue:Object(r.s__)("NotificationEvent|Issue is closed"),close_merge_request:Object(r.s__)("NotificationEvent|Merge request is closed"),failed_pipeline:Object(r.s__)("NotificationEvent|Pipeline fails"),fixed_pipeline:Object(r.s__)("NotificationEvent|Pipeline is fixed"),issue_due:Object(r.s__)("NotificationEvent|Issue is due soon"),merge_merge_request:Object(r.s__)("NotificationEvent|Merge request is merged"),moved_project:Object(r.s__)("NotificationEvent|Project is moved"),new_epic:Object(r.s__)("NotificationEvent|Epic is created"),new_issue:Object(r.s__)("NotificationEvent|Issue is created"),new_merge_request:Object(r.s__)("NotificationEvent|Merge request is created"),new_note:Object(r.s__)("NotificationEvent|Comment is added"),new_release:Object(r.s__)("NotificationEvent|Release is created"),push_to_merge_request:Object(r.s__)("NotificationEvent|Merge request receives a push"),reassign_issue:Object(r.s__)("NotificationEvent|Issue is reassigned"),reassign_merge_request:Object(r.s__)("NotificationEvent|Merge request is reassigned"),reopen_issue:Object(r.s__)("NotificationEvent|Issue is reopened"),reopen_merge_request:Object(r.s__)("NotificationEvent|Merge request is reopened"),merge_when_pipeline_succeeds:Object(r.s__)("NotificationEvent|Merge request is set to auto-merge"),success_pipeline:Object(r.s__)("NotificationEvent|Pipeline is successful"),approver:Object(r.s__)("NotificationEvent|You are added as an approver on a merge request")}};var c=i("TKCn"),d=i.n(c),h=i("1cpz"),u=i("30su"),p=i("MV2A"),m=i("FkSe"),b=i("l5WF"),f=i("SeSR"),v={name:"CustomNotificationsModal",components:{GlModal:h.a,GlSprintf:u.a,GlLink:p.a,GlLoadingIcon:m.a,GlFormGroup:b.a,GlFormCheckbox:f.a},inject:{projectId:{default:null},groupId:{default:null},helpPagePath:{default:""}},model:{prop:"visible",event:"change"},props:{modalId:{type:String,required:!1,default:"custom-notifications-modal"},visible:{type:Boolean,required:!1,default:!1}},data:()=>({isLoading:!1,events:[]}),methods:{open(){this.$refs.modal.show()},buildEvents(t){var e=this;const i=Object.keys(t).map((function(i){return{id:i,enabled:Boolean(t[i]),name:e.$options.i18n.eventNames[i]||"",loading:!1}}));return d()(i,"name")},async onOpen(){this.events.length||await this.loadNotificationSettings()},async loadNotificationSettings(){this.isLoading=!0;try{const{data:{events:t}}=await a.b.getNotificationSettings(this.projectId,this.groupId);this.events=this.buildEvents(t)}catch(t){this.$toast.show(this.$options.i18n.loadNotificationLevelErrorMessage)}finally{this.isLoading=!1}},async updateEvent(t,e){const i=this.events.findIndex((function(t){return t.id===e.id}));this.events.splice(i,1,{...this.events[i],loading:!0});try{const{data:{events:i}}=await a.b.updateNotificationSettings(this.projectId,this.groupId,{[e.id]:t});this.events=this.buildEvents(i)}catch(t){this.$toast.show(this.$options.i18n.updateNotificationLevelErrorMessage)}}},i18n:l},g=i("tBpV"),_=Object(g.a)(v,(function(){var t=this,e=t._self._c;return e("gl-modal",t._g({ref:"modal",attrs:{visible:t.visible,"modal-id":t.modalId,title:t.$options.i18n.customNotificationsModal.title},on:{show:t.onOpen}},t.$listeners),[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("h4",{staticClass:"gl-mt-0",attrs:{"data-testid":"modalBodyTitle"}},[t._v("\n          "+t._s(t.$options.i18n.customNotificationsModal.bodyTitle)+"\n        ")]),t._v(" "),e("gl-sprintf",{attrs:{message:t.$options.i18n.customNotificationsModal.bodyMessage},scopedSlots:t._u([{key:"notificationLink",fn:function({content:i}){return[e("gl-link",{attrs:{href:t.helpPagePath,target:"_blank"}},[t._v(t._s(i))])]}}])})],1),t._v(" "),e("div",{staticClass:"col-lg-8"},[t.isLoading?e("gl-loading-icon",{staticClass:"gl-mt-3",attrs:{size:"lg"}}):t._l(t.events,(function(i){return e("gl-form-group",{key:i.id},[e("gl-form-checkbox",{attrs:{"data-testid":"notification-setting-"+i.id},on:{change:function(e){return t.updateEvent(e,i)}},model:{value:i.enabled,callback:function(e){t.$set(i,"enabled",e)},expression:"event.enabled"}},[e("strong",[t._v(t._s(i.name))]),i.loading?e("gl-loading-icon",{staticClass:"gl-ml-2",attrs:{size:"sm",inline:!0}}):t._e()],1)],1)}))],2)])])])}),[],!1,null,null,null).exports,j={name:"NotificationsDropdownItem",components:{GlDropdownItem:i("wP8z").a},props:{level:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},notificationLevel:{type:String,required:!0}},computed:{isActive(){return this.notificationLevel===this.level}}},w=Object(g.a)(j,(function(){var t=this,e=t._self._c;return e("gl-dropdown-item",{class:{"is-active":t.isActive},attrs:{"is-check-item":"","is-checked":t.isActive},on:{click:function(e){return t.$emit("item-selected",t.level)}}},[e("div",{staticClass:"gl-flex gl-flex-col"},[e("span",{staticClass:"gl-font-bold"},[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"gl-text-subtle"},[t._v(t._s(t.description))])])])}),[],!1,null,null,null).exports,O={name:"NotificationsDropdown",components:{GlDropdown:s.a,GlDropdownDivider:o.a,NotificationsDropdownItem:w,CustomNotificationsModal:_},directives:{GlTooltip:n.a},inject:{containerClass:{default:""},emailsDisabled:{default:!1},dropdownItems:{default:[]},buttonSize:{default:"medium"},initialNotificationLevel:{default:""},projectId:{default:null},groupId:{default:null},showLabel:{default:!1},noFlip:{default:!1}},data(){return{selectedNotificationLevel:this.initialNotificationLevel,isLoading:!1,notificationsModalVisible:!1}},computed:{notificationLevels(){var t=this;return this.dropdownItems.map((function(e){return{level:e,title:t.$options.i18n.notificationTitles[e]||"",description:t.$options.i18n.notificationDescriptions[e]||""}}))},isCustomNotification(){return"custom"===this.selectedNotificationLevel},buttonIcon(){return this.isLoading?null:"disabled"===this.selectedNotificationLevel?"notifications-off":"notifications"},buttonText(){return this.showLabel?this.$options.i18n.notificationTitles[this.selectedNotificationLevel]:null},buttonTooltip(){const t=this.$options.i18n.notificationTitles[this.selectedNotificationLevel]||this.selectedNotificationLevel;return this.emailsDisabled?this.$options.i18n.notificationDescriptions.owner_disabled:Object(r.sprintf)(this.$options.i18n.notificationTooltipTitle,{notification_title:t})}},methods:{openNotificationsModal(){this.isCustomNotification&&(this.notificationsModalVisible=!0)},selectItem(t){t!==this.selectedNotificationLevel&&this.updateNotificationLevel(t)},async updateNotificationLevel(t){this.isLoading=!0;try{await a.b.updateNotificationSettings(this.projectId,this.groupId,{level:t}),this.selectedNotificationLevel=t,this.openNotificationsModal()}catch(t){this.$toast.show(this.$options.i18n.updateNotificationLevelErrorMessage)}finally{this.isLoading=!1}}},customLevel:"custom",i18n:l,modalId:"custom-notifications-modal"},T=Object(g.a)(O,(function(){var t=this,e=t._self._c;return e("div",{class:t.containerClass},[e("gl-dropdown",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{title:t.buttonTooltip},expression:"{ title: buttonTooltip }"}],attrs:{"data-testid":"notification-dropdown",size:t.buttonSize,icon:t.buttonIcon,loading:t.isLoading,disabled:t.emailsDisabled,split:t.isCustomNotification,text:t.buttonText,"no-flip":t.noFlip},on:{click:t.openNotificationsModal}},[t._l(t.notificationLevels,(function(i){return e("notifications-dropdown-item",{key:i.level,attrs:{level:i.level,title:i.title,description:i.description,"notification-level":t.selectedNotificationLevel},on:{"item-selected":t.selectItem}})})),t._v(" "),e("gl-dropdown-divider"),t._v(" "),e("notifications-dropdown-item",{key:t.$options.customLevel,attrs:{level:t.$options.customLevel,title:t.$options.i18n.notificationTitles.custom,description:t.$options.i18n.notificationDescriptions.custom,"notification-level":t.selectedNotificationLevel},on:{"item-selected":t.selectItem}})],2),t._v(" "),e("custom-notifications-modal",{attrs:{"modal-id":t.$options.modalId},model:{value:t.notificationsModalVisible,callback:function(e){t.notificationsModalVisible=e},expression:"notificationsModalVisible"}})],1)}),[],!1,null,null,null);e.a=T.exports},sijA:function(t,e,i){"use strict";var s=i("4lAS"),o=i("XiQx"),n=i("fSQg"),a=i("Bo17"),r=i("s1D3"),l=i("z1xw"),c=i("/lV4"),d=i("AxUD"),h={components:{GlButton:s.a,GlDisclosureDropdownItem:o.b,GlDisclosureDropdownGroup:n.a,GlDisclosureDropdown:a.a,GlIcon:r.a},directives:{GlTooltip:l.a},inject:["isGroup","groupOrProjectId","leavePath","leaveConfirmMessage","withdrawPath","withdrawConfirmMessage","requestAccessPath","canEdit","editPath"],data:()=>({isDropdownVisible:!1}),computed:{namespaceType(){return this.isGroup?d.WORKSPACE_GROUP:d.WORKSPACE_PROJECT},hasPath(){return this.leavePath||this.withdrawPath||this.requestAccessPath},settingsTitle(){return this.isGroup?this.$options.i18n.groupSettings:this.$options.i18n.projectSettings},leaveTitle(){return this.isGroup?this.$options.i18n.groupLeaveTitle:this.$options.i18n.projectLeaveTitle},copyTitle(){return this.isGroup?this.$options.i18n.groupCopyTitle:this.$options.i18n.projectCopyTitle},copiedToClipboard(){return this.isGroup?this.$options.i18n.groupCopiedToClipboard:this.$options.i18n.projectCopiedToClipboard},leaveItem(){return{text:this.leaveTitle,href:this.leavePath,extraAttrs:{"aria-label":this.leaveTitle,"data-method":"delete","data-confirm":this.leaveConfirmMessage,"data-confirm-btn-variant":"danger","data-testid":`leave-${this.namespaceType}-link`,rel:"nofollow",class:"!gl-text-danger js-leave-link"}}},withdrawItem(){return{text:this.$options.i18n.withdrawAccessTitle,href:this.withdrawPath,extraAttrs:{"data-method":"delete","data-confirm":this.withdrawConfirmMessage,"data-testid":"withdraw-access-link",rel:"nofollow"}}},requestAccessItem(){return{text:this.$options.i18n.requestAccessTitle,href:this.requestAccessPath,extraAttrs:{"data-method":"post","data-testid":"request-access-link",rel:"nofollow"}}},copyIdItem(){var t=this;return{text:Object(c.sprintf)(this.copyTitle,{id:this.groupOrProjectId}),action:function(){t.$toast.show(t.copiedToClipboard)},extraAttrs:{"data-testid":`copy-${this.namespaceType}-id`}}},settingsItem(){return{text:this.settingsTitle,href:this.editPath,extraAttrs:{"data-testid":`settings-${this.namespaceType}-link`}}},showDropdownTooltip(){return this.isDropdownVisible?"":this.$options.i18n.actionsLabel}},methods:{showDropdown(){this.isDropdownVisible=!0},hideDropdown(){this.isDropdownVisible=!1}},i18n:{actionsLabel:Object(c.__)("More actions"),groupCopiedToClipboard:Object(c.s__)("GroupPage|Group ID copied to clipboard."),projectCopiedToClipboard:Object(c.s__)("ProjectPage|Project ID copied to clipboard."),groupLeaveTitle:Object(c.__)("Leave group"),projectLeaveTitle:Object(c.__)("Leave project"),withdrawAccessTitle:Object(c.__)("Withdraw Access Request"),requestAccessTitle:Object(c.__)("Request Access"),groupCopyTitle:Object(c.s__)("GroupPage|Copy group ID: %{id}"),projectCopyTitle:Object(c.s__)("ProjectPage|Copy project ID: %{id}"),projectSettings:Object(c.s__)("ProjectPage|Project settings"),groupSettings:Object(c.s__)("GroupPage|Group settings")}},u=i("tBpV"),p=Object(u.a)(h,(function(){var t=this,e=t._self._c;return e("gl-disclosure-dropdown",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:t.showDropdownTooltip,expression:"showDropdownTooltip"}],staticClass:"gl-relative gl-w-full sm:gl-w-auto",attrs:{category:"tertiary",icon:"ellipsis_v","no-caret":"","toggle-text":t.$options.i18n.actionsLabel,"text-sr-only":"","data-testid":"groups-projects-more-actions-dropdown"},on:{shown:t.showDropdown,hidden:t.hideDropdown},scopedSlots:t._u([{key:"toggle",fn:function(){return[e("div",{staticClass:"gl-min-h-7"},[e("gl-button",{staticClass:"gl-new-dropdown-toggle gl-absolute gl-left-0 gl-top-0 gl-w-full sm:gl-w-auto md:!gl-hidden",attrs:{"button-text-classes":"gl-w-full",category:"secondary","aria-label":t.$options.i18n.actionsLabel,title:t.$options.i18n.actionsLabel}},[e("span",{staticClass:"gl-new-dropdown-button-text"},[t._v(t._s(t.$options.i18n.actionsLabel))]),t._v(" "),e("gl-icon",{staticClass:"dropdown-chevron",attrs:{name:"chevron-down"}})],1),t._v(" "),e("gl-button",{ref:"moreActionsDropdown",staticClass:"gl-new-dropdown-toggle gl-new-dropdown-icon-only gl-new-dropdown-toggle-no-caret gl-hidden md:!gl-flex",attrs:{category:"tertiary",icon:"ellipsis_v","aria-label":t.$options.i18n.actionsLabel,title:t.$options.i18n.actionsLabel}})],1)]},proxy:!0}])},[t._v(" "),t.groupOrProjectId?e("gl-disclosure-dropdown-item",{attrs:{item:t.copyIdItem,"data-clipboard-text":t.groupOrProjectId}}):t._e(),t._v(" "),t.canEdit?e("gl-disclosure-dropdown-item",{attrs:{item:t.settingsItem}}):t._e(),t._v(" "),t.hasPath?e("gl-disclosure-dropdown-group",{attrs:{bordered:""}},[t.leavePath?e("gl-disclosure-dropdown-item",{ref:"leaveItem",attrs:{item:t.leaveItem}}):t.withdrawPath?e("gl-disclosure-dropdown-item",{attrs:{item:t.withdrawItem}}):t.requestAccessPath?e("gl-disclosure-dropdown-item",{attrs:{item:t.requestAccessItem}}):t._e()],1):t._e()],1)}),[],!1,null,null,null);e.a=p.exports},uHqx:function(t,e){t.exports=function(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].value;return t}},yWhq:function(t,e,i){"use strict";var s=i("KFC0"),o=i.n(s),n=i("3hkr"),a=i("CU79"),r=i("4z8A"),l=i("QiCN"),c=i("ou5p"),d=i("oTzT"),h=i("ZdEn"),u=i("gZSI"),p=i("VuSA"),m=i("d7r4"),b=i("ojJK"),f=i("DCOC"),v=i("J6+d"),g=i("onSc"),_=i("9k56"),j=i("jIK5"),w=i("BBKf"),O=i("35qI"),T=i("9Dxz"),y=i("i8zK"),C=i("KZ4l"),N=i("hII5"),$=i("DlAA"),D=i("g+RJ"),L=i("5TS0"),x=i("qO70"),I=i("aBA8"),E=i("CKxR"),P=i("0M2I"),S=i("QcjV");const A=Object(_.c)({mixins:[I.a],data:()=>({name:"b-toaster"}),methods:{onAfterEnter(t){Object(d.B)(()=>{Object(d.y)(t,this.name+"-enter-to")})}},render(t){return t("transition-group",{props:{tag:"div",name:this.name},on:{afterEnter:this.onAfterEnter}},this.normalizeSlot())}}),k=Object(N.c)({ariaAtomic:Object(N.b)(j.r),ariaLive:Object(N.b)(j.r),name:Object(N.b)(j.r,void 0,!0),role:Object(N.b)(j.r)},n.Y),q=Object(_.c)({name:n.Y,mixins:[x.a],props:k,data(){return{doRender:!1,dead:!1,staticName:this.name}},beforeMount(){const{name:t}=this;this.staticName=t,g.Wormhole.hasTarget(t)?(Object(b.a)(`A "<portal-target>" with name "${t}" already exists in the document.`,n.Y),this.dead=!0):this.doRender=!0},beforeDestroy(){this.doRender&&this.emitOnRoot(Object(h.e)(n.Y,a.i),this.name)},destroyed(){const{$el:t}=this;t&&t.parentNode&&t.parentNode.removeChild(t)},render(t){let e=t("div",{class:["gl-hidden",{"b-dead-toaster":this.dead}]});if(this.doRender){const i=t(g.PortalTarget,{staticClass:"b-toaster-slot",props:{name:this.staticName,multiple:!0,tag:"div",slim:!1,transition:A}});e=t("div",{staticClass:"b-toaster",class:[this.staticName],attrs:{id:this.staticName,role:this.role||null,"aria-live":this.ariaLive,"aria-atomic":this.ariaAtomic}},[i])}return e}}),{mixin:M,props:G,prop:R,event:H}=Object(y.a)("visible",{type:j.g,defaultValue:!1,event:a.d}),B=Object(p.k)(P.b,["href","to"]),V=Object(N.c)(Object(p.m)({...L.b,...G,...B,appendToast:Object(N.b)(j.g,!1),autoHideDelay:Object(N.b)(j.m,5e3),bodyClass:Object(N.b)(j.e),headerClass:Object(N.b)(j.e),headerTag:Object(N.b)(j.r,"header"),isStatus:Object(N.b)(j.g,!1),noAutoHide:Object(N.b)(j.g,!1),noFade:Object(N.b)(j.g,!1),noHoverPause:Object(N.b)(j.g,!1),solid:Object(N.b)(j.g,!1),static:Object(N.b)(j.g,!1),title:Object(N.b)(j.r),toastClass:Object(N.b)(j.e),toaster:Object(N.b)(j.r,"b-toaster-top-right"),variant:Object(N.b)(j.r)}),n.X),z=Object(_.c)({name:n.X,mixins:[D.a,L.a,M,x.a,I.a,E.a],inheritAttrs:!1,props:V,data:()=>({isMounted:!1,doRender:!1,localShow:!1,isTransitioning:!1,isHiding:!1,order:0,dismissStarted:0,resumeDismiss:0}),computed:{toastClasses(){const{appendToast:t,variant:e}=this;return{"b-toast-solid":this.solid,"b-toast-append":t,"b-toast-prepend":!t,["b-toast-"+e]:e}},slotScope(){const{hide:t}=this;return{hide:t}},computedDuration(){return Object(T.b)(Object(C.b)(this.autoHideDelay,0),1e3)},computedToaster(){return String(this.toaster)},transitionHandlers(){return{beforeEnter:this.onBeforeEnter,afterEnter:this.onAfterEnter,beforeLeave:this.onBeforeLeave,afterLeave:this.onAfterLeave}},computedAttrs(){return{...this.bvAttrs,id:this.safeId(),tabindex:"0"}}},watch:{[R](t){this[t?"show":"hide"]()},localShow(t){t!==this[R]&&this.$emit(H,t)},toaster(){this.$nextTick(this.ensureToaster)},static(t){t&&this.localShow&&this.ensureToaster()}},created(){this.$_dismissTimer=null},mounted(){this.isMounted=!0,this.$nextTick(()=>{this[R]&&Object(d.B)(()=>{this.show()})}),this.listenOnRoot(Object(h.d)(n.X,a.L),t=>{t===this.safeId()&&this.show()}),this.listenOnRoot(Object(h.d)(n.X,a.t),t=>{t&&t!==this.safeId()||this.hide()}),this.listenOnRoot(Object(h.e)(n.Y,a.i),t=>{t===this.computedToaster&&this.hide()})},beforeDestroy(){this.clearDismissTimer()},methods:{show(){if(!this.localShow){this.ensureToaster();const t=this.buildEvent(a.L);this.emitEvent(t),this.dismissStarted=this.resumeDismiss=0,this.order=Date.now()*(this.appendToast?1:-1),this.isHiding=!1,this.doRender=!0,this.$nextTick(()=>{Object(d.B)(()=>{this.localShow=!0})})}},hide(){if(this.localShow){const t=this.buildEvent(a.t);this.emitEvent(t),this.setHoverHandler(!1),this.dismissStarted=this.resumeDismiss=0,this.clearDismissTimer(),this.isHiding=!0,Object(d.B)(()=>{this.localShow=!1})}},buildEvent(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new O.a(t,{cancelable:!1,target:this.$el||null,relatedTarget:null,...e,vueTarget:this,componentId:this.safeId()})},emitEvent(t){const{type:e}=t;this.emitOnRoot(Object(h.e)(n.X,e),t),this.$emit(e,t)},ensureToaster(){if(this.static)return;const{computedToaster:t}=this;if(!g.Wormhole.hasTarget(t)){const e=document.createElement("div");document.body.appendChild(e);Object(f.a)(this.bvEventRoot,q,{propsData:{name:t}}).$mount(e)}},startDismissTimer(){this.clearDismissTimer(),this.noAutoHide||(this.$_dismissTimer=setTimeout(this.hide,this.resumeDismiss||this.computedDuration),this.dismissStarted=Date.now(),this.resumeDismiss=0)},clearDismissTimer(){clearTimeout(this.$_dismissTimer),this.$_dismissTimer=null},setHoverHandler(t){const e=this.$refs["b-toast"];Object(h.c)(t,e,"mouseenter",this.onPause,a.Q),Object(h.c)(t,e,"mouseleave",this.onUnPause,a.Q)},onPause(){if(this.noAutoHide||this.noHoverPause||!this.$_dismissTimer||this.resumeDismiss)return;const t=Date.now()-this.dismissStarted;t>0&&(this.clearDismissTimer(),this.resumeDismiss=Object(T.b)(this.computedDuration-t,1e3))},onUnPause(){this.noAutoHide||this.noHoverPause||!this.resumeDismiss?this.resumeDismiss=this.dismissStarted=0:this.startDismissTimer()},onLinkClick(){this.$nextTick(()=>{Object(d.B)(()=>{this.hide()})})},onBeforeEnter(){this.isTransitioning=!0},onAfterEnter(){this.isTransitioning=!1;const t=this.buildEvent(a.M);this.emitEvent(t),this.startDismissTimer(),this.setHoverHandler(!0)},onBeforeLeave(){this.isTransitioning=!0},onAfterLeave(){this.isTransitioning=!1,this.order=0,this.resumeDismiss=this.dismissStarted=0;const t=this.buildEvent(a.s);this.emitEvent(t),this.doRender=!1},makeToast(t){const{slotScope:e}=this,i=Object($.d)(this),s=[],o=this.normalizeSlot(w.B,e);o&&s.push(o);let n=t();s.length>0&&(n=t(this.headerTag,{staticClass:"toast-header",class:this.headerClass},s));const a=t(i?P.a:"div",{staticClass:"toast-body",class:this.bodyClass,props:i?Object(N.d)(B,this):{},on:i?{click:this.onLinkClick}:{}},this.normalizeSlot(w.e,e));return t("div",{staticClass:"toast",class:this.toastClass,attrs:this.computedAttrs,key:"toast-"+this[_.a],ref:"toast"},[n,a])}},render(t){if(!this.doRender||!this.isMounted)return t();const{order:e,static:i,isHiding:s,isStatus:o}=this,n="b-toast-"+this[_.a],a=t("div",{staticClass:"b-toast",class:this.toastClasses,attrs:{...i?{}:this.scopedStyleAttrs,id:this.safeId("_toast_outer"),role:s?null:o?"status":"alert","aria-live":s?null:o?"polite":"assertive","aria-atomic":s?null:"true"},key:n,ref:"b-toast"},[t(S.a,{props:{noFade:this.noFade},on:this.transitionHandlers},[this.localShow?this.makeToast(t):t()])]);return t(g.Portal,{props:{name:n,to:this.computedToaster,order:e,slim:!0,disabled:i}},[a])}}),Y=["id",...Object(p.h)(Object(p.j)(V,["static","visible"]))],F={toastContent:"default",title:"toast-title"},K=t=>Y.reduce((e,i)=>(Object(u.n)(t[i])||(e[i]=t[i]),e),{}),W=Object(m.a)({plugins:{plugin:t=>{const e=t.extend({name:n.Z,extends:z,mixins:[r.a],destroyed(){const{$el:t}=this;t&&t.parentNode&&t.parentNode.removeChild(t)},mounted(){const t=()=>{this.localShow=!1,this.doRender=!1,this.$nextTick(()=>{this.$nextTick(()=>{Object(d.B)(()=>{this.$destroy()})})})};this.bvParent.$once(a.T,t),this.$once(a.s,t),this.listenOnRoot(Object(h.e)(n.Y,a.i),e=>{e===this.toaster&&t()})}});class i{constructor(t){Object(p.a)(this,{_vm:t,_root:Object(v.a)(t)}),Object(p.d)(this,{_vm:Object(p.l)(),_root:Object(p.l)()})}toast(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t&&!Object(b.c)("$bvToast")&&((t,i)=>{if(Object(b.c)("$bvToast"))return;const s=Object(f.a)(i,e,{propsData:{...K(Object(c.b)(n.X)),...Object(p.j)(t,Object(p.h)(F)),static:!1,visible:!0}});Object(p.h)(F).forEach(e=>{const i=t[e];Object(u.n)(i)||(s.$slots[F[e]]=Object(l.b)(i))});const o=document.createElement("div");document.body.appendChild(o),s.$mount(o)})({...K(i),toastContent:t},this._vm)}show(t){t&&this._root.$emit(Object(h.d)(n.X,a.L),t)}hide(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._root.$emit(Object(h.d)(n.X,a.t),t)}}t.mixin({beforeCreate(){this._bv__toast=new i(this)}}),Object(p.g)(t.prototype,"$bvToast")||Object(p.e)(t.prototype,"$bvToast",{get(){return this&&this._bv__toast||Object(b.a)('"$bvToast" must be accessed from a Vue instance "this" context.',n.X),this._bv__toast}})}}}),X=Object(m.a)({components:{BToast:z,BToaster:q},plugins:{BVToastPlugin:W}});var U=i("Ge+5");const J={autoHideDelay:5e3,toastClass:"gl-toast",isStatus:!0,toaster:"b-toaster-bottom-left"};let Q=0;function Z(t,e,i){const s=[t(U.a,{class:["gl-toast-close-button"],on:{click:e.hide}})];return i.action&&s.splice(0,0,t("a",{role:"button",class:["gl-toast-action"],on:{click:t=>i.action.onClick(t,e)}},i.action.text)),s}function tt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i="gl-toast-"+Q;Q+=1;const s=()=>{this.$bvToast.hide(i)},n={id:i,hide:s};if(o()(e.onComplete)){const t=s=>{s.componentId===i&&(this.$root.$off("bv::toast:hidden",t),e.onComplete(s))};this.$root.$on("bv::toast:hidden",t)}const a=Number.isNaN(null==e?void 0:e.autoHideDelay)?null:{autoHideDelay:e.autoHideDelay};return this.$bvToast.toast(t,{...J,...a,id:i,title:Z(this.$createElement,n,e)}),n}var et={install(t){t.use(X),t.mixin({beforeCreate(){this.$toast||(this.$toast={show:tt.bind(this)})}})}};e.a=et}}]);
//# sourceMappingURL=commons-pages.groups.show-pages.projects.home_panel-pages.projects.show.dde5f43e.chunk.js.map