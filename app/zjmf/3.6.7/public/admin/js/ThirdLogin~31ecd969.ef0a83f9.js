(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ThirdLogin~31ecd969"],{2532:function(t,e,a){"use strict";var n=a("23e7"),r=a("5a34"),s=a("1d80"),i=a("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(s(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").filter,s=a("1dde"),i=a("ae40"),l=s("filter"),o=i("filter");n({target:"Array",proto:!0,forced:!l||!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5a70":function(t,e,a){"use strict";var n=a("6b37"),r=a.n(n);r.a},"6b37":function(t,e,a){},8180:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"i",(function(){return i})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return o})),a.d(e,"j",(function(){return u})),a.d(e,"d",(function(){return c})),a.d(e,"h",(function(){return d})),a.d(e,"k",(function(){return p})),a.d(e,"a",(function(){return f})),a.d(e,"c",(function(){return g}));var n=a("a27e");function r(t){return Object(n["a"])({url:"pl_index/".concat(t,"/")})}function s(t){return Object(n["a"])({url:"pl_install",method:"post",data:t})}function i(t){return Object(n["a"])({url:"pl_toggle",method:"post",data:t})}function l(t){return Object(n["a"])({url:"pl_setting/sms/".concat(t)})}function o(t){return Object(n["a"])({url:"pl_setting_post",method:"post",data:t})}function u(t){return Object(n["a"])({url:"pl_uninstall",method:"post",data:t})}function c(t){return Object(n["a"])({url:"pl_copy",method:"post",data:t})}function d(t){return Object(n["a"])({url:"pl_sort/".concat(t.moduleName,"/"),method:"post",data:t})}function p(t){return Object(n["a"])({url:"pl_update",method:"post",data:t})}function f(){return Object(n["a"])({url:"pl_index/mail/",method:"get"})}function g(t){return Object(n["a"])({url:"pl_setting/mail/".concat(t)})}},ab13:function(t,e,a){var n=a("b622"),r=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,"/./"[t](e)}catch(n){}}return!1}},caad:function(t,e,a){"use strict";var n=a("23e7"),r=a("4d64").includes,s=a("44d2"),i=a("ae40"),l=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!l},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},e1b8:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return o}));var n=a("a27e");function r(){return Object(n["a"])({url:"oauth"})}function s(t){return Object(n["a"])({url:"oauth/active",method:"post",data:t})}function i(){return Object(n["a"])({url:"oauth/config"})}function l(t){return Object(n["a"])({url:"oauth/config_post",method:"post",data:t})}function o(t){return Object(n["a"])({url:"oauth/suspend",method:"post",data:t})}},f957:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-template"},[a("h2",[t._v(t._s(t.$lang.third_party_login))]),a("el-row",{staticClass:"topform_wrap",attrs:{gutter:15}},[a("div",{staticClass:"oauth_msg pl-10"},[t._v(" "+t._s(t.$lang.select_third_party_login)+" "),a("el-link",{staticClass:"ml-10",attrs:{type:"primary",href:"https://www.idcsmart.com/wiki_list/653.html",target:"blank"}},[t._v(t._s(t.$lang.help_document)+" ")])],1),0==t.license_type?a("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"",closable:!1,type:"warning"}},[a("span",[t._v(t._s(t.$lang.zyb_tips_pay_text)),a("el-link",{staticClass:"ml-10",attrs:{type:"primary",href:"https://www.idcsmart.com/finance_business.html",target:"blank"}},[t._v(t._s(t.$lang.mfcw_zyb)+" ")])],1)]):t._e(),a("el-row",{staticStyle:{"margin-bottom":"5px"},attrs:{type:"flex",justify:"end"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.jumpUrl}},[t._v(" "+t._s(t.$lang.moreInterface7))])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.updateLoading,expression:"updateLoading"}],attrs:{data:t.tableData}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?a("span",[a("i",{staticClass:"el-icon-loading"}),t._v(" "+t._s(t.$lang.loading)+" ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():a("span",[t._v(t._s(t.$lang.no_data))])]),a("el-table-column",{attrs:{label:"ID",prop:"id",width:"160",align:"center"}}),a("el-table-column",{attrs:{label:t.$lang.name_designation,prop:"name",align:"center"}}),a("el-table-column",{attrs:{label:t.$lang.developer,prop:"author",align:"center"}}),a("el-table-column",{attrs:{prop:"version",label:t.$lang.current_version}}),a("el-table-column",{attrs:{prop:"app_version",label:t.$lang.latest_version}}),a("el-table-column",{attrs:{label:t.$lang.state,prop:"status",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[0==n.status?a("i",{staticClass:"el-icon-circle-close no-icon"}):1==n.status?a("i",{staticClass:"el-icon-circle-check yes-icon"}):t._e()]}}])}),a("el-table-column",{attrs:{label:t.$lang.operation,width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[3==n.status?a("el-button",{staticStyle:{color:"#3B9113"},attrs:{size:"small",type:"text",disabled:0==t.license_type},on:{click:function(e){return t.setItem(n)}}},[t._v(t._s(t.$lang.install))]):t._e(),0==n.status?a("el-button",{staticStyle:{color:"#2E53E9"},attrs:{size:"small",type:"text",disabled:0==t.license_type},on:{click:function(e){return t.suspend(n)}}},[t._v(t._s(t.$lang.start_using))]):t._e(),1==n.status?a("el-button",{staticStyle:{color:"#D9001B"},attrs:{size:"small",type:"text",disabled:0==t.license_type},on:{click:function(e){return t.suspend(n)}}},[t._v(t._s(t.$lang.forbidden))]):t._e(),3!==n.status?a("el-button",{staticStyle:{color:"#F59A23"},attrs:{size:"small",type:"text",disabled:0==t.license_type},on:{click:function(e){return t.setItem(n)}}},[t._v(t._s(t.$lang.uninstall))]):t._e(),1==n.status?a("el-button",{staticStyle:{color:"#aaaaaa"},attrs:{size:"small",type:"text",disabled:0==t.license_type},on:{click:function(e){return t.config(n)}}},[t._v(t._s(t.$lang.configuration))]):t._e(),3!==n.status&&1==n.update_btn&&1==n.update_disable?a("el-popover",{attrs:{placement:"top-start",title:"",width:"100",trigger:"hover"}},[t._v(" "+t._s(t.$lang.plug_in_expired_please_renew)+" "),a("span",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{staticClass:"ml-10",staticStyle:{color:"#F59A23"},attrs:{size:"small",type:"text",disabled:0==t.license_type||1==n.update_disable},on:{click:function(e){return t.handleUpdate(n)}}},[t._v(t._s(t.$lang.update))])],1)]):[3!==n.status&&1==n.update_btn?a("el-button",{staticClass:"ml-10",staticStyle:{color:"#F59A23"},attrs:{slot:"reference",size:"small",type:"text",disabled:0==t.license_type||1==n.update_disable},on:{click:function(e){return t.handleUpdate(n)}},slot:"reference"},[t._v(t._s(t.$lang.update))]):t._e()]]}}])})],1)],1),a("el-dialog",{attrs:{"before-close":t.handleClose,title:t.$lang.configuration,visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"elForm",staticStyle:{"padding-left":"20px"},attrs:{"label-width":t.labelWidth,size:"small"}},t._l(t.configs,(function(e,n){return a("el-form-item",{key:n,attrs:{label:n,prop:""}},["text"===e.type?a("el-input",{style:{width:"100%"},attrs:{size:"small",placeholder:t.$lang.please_enter,clearable:""},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"subItem.value"}}):t._e(),"textarea"===e.type?a("el-input",{style:{width:"100%"},attrs:{size:"small",type:"textarea",rows:3,placeholder:t.$lang.please_enter,clearable:""},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"subItem.value"}}):t._e(),"select"===e.type?a("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:t.$lang.please_choose,clearable:""},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"subItem.value"}},t._l(t.item.options,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),1):t._e(),"radio"===e.type?a("el-radio",{model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"subItem.value"}},[t._v(t._s(t.$lang.alternative_option))]):t._e(),"checkbox"===e.type?a("el-checkbox",{model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"subItem.value"}},[t._v(t._s(t.$lang.alternative_option))]):t._e()],1)})),1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v(t._s(t.$lang.cancel))]),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v(t._s(t.$lang.confirm))])],1)],1)],1)},r=[],s=(a("4de4"),a("caad"),a("b0c0"),a("2532"),a("96cf"),a("1da1")),i=a("e1b8"),l=a("8180"),o=a("7ded"),u={metaInfo:{title:window.zjmf_cw_lang.third_party_login},data:function(){return{updateLoading:!1,labelWidth:window.document.body.clientWidth>768?"auto":null,row:{},dialogVisible:!1,tableLoading:!1,tableData:[],professionalFunc:void 0,configForm:{},oauthConfigList:[],configs:[],license_type:1}},mounted:function(){this.getCommon(),this.getOauthConfig(),this.getOauth(),this.license_type=sessionStorage.getItem("zjmf_cw_license_type")},methods:{jumpUrl:function(){window.open("https://my.idcsmart.com/shop/#/app-store?type=oauth")},handleUpdate:function(t){var e=this,a={name:t.dirName,module:t.module,id:t.id,app_id:t.app_id};this.updateLoading=!0,Object(l["k"])(a).then((function(t){200===t.data.status?(e.getOauth(),e.getOauthConfig(),e.$message.success(t.data.msg)):e.$message.error(t.data.msg),e.updateLoading=!1})).catch((function(t){e.updateLoading=!1}))},setItem:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.professionalFunc.includes("Oauth")){a.next=14;break}return n={dirName:t.dirName},a.next=4,Object(i["c"])(n);case 4:if(r=a.sent,s=r.data,200===s.status){a.next=9;break}return e.$message.error(s.msg),a.abrupt("return");case 9:e.$message.success(s.msg),e.getOauth(),e.getOauthConfig(),a.next=15;break;case 14:e.$message.warning(e.$lang.free_version_this_feature_is_not_available);case 15:case"end":return a.stop()}}),a)})))()},submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,l,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.professionalFunc.includes("Oauth")){e.next=18;break}for(r in a={dirName:t.row.dirName},n={},t.configs)s=t.configs[r],n[s.name]=s.value;return a.app=n,e.next=7,Object(i["d"])(t.$qs.stringify(a));case 7:if(l=e.sent,o=l.data,200===o.status){e.next=12;break}return t.$message.error(o.msg),e.abrupt("return");case 12:t.$message.success(o.msg),t.getOauth(),t.getOauthConfig(),t.dialogVisible=!1,e.next=19;break;case 18:t.$message.warning(t.$lang.free_version_this_feature_is_not_available);case 19:case"end":return e.stop()}}),e)})))()},getOauthConfig:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])();case 2:if(a=e.sent,n=a.data,200===n.status){e.next=7;break}return t.$message.error(n.msg),e.abrupt("return");case 7:t.oauthConfigList=n.data;case 8:case"end":return e.stop()}}),e)})))()},config:function(t){this.row=t,this.configs=this.oauthConfigList.filter((function(e){return e.dirName===t.dirName}))[0].config,this.dialogVisible=!0},cancel:function(){this.dialogVisible=!1},handleClose:function(t){t()},suspend:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.professionalFunc.includes("Oauth")){a.next=13;break}return n={dirName:t.dirName},a.next=4,Object(i["e"])(n);case 4:if(r=a.sent,s=r.data,200===s.status){a.next=9;break}return e.$message.error(s.msg),a.abrupt("return");case 9:e.$message.success(s.msg),e.getOauth(),a.next=14;break;case 13:e.$message.warning(e.$lang.free_version_this_feature_is_not_available);case 14:case"end":return a.stop()}}),a)})))()},getCommon:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])();case 2:a=e.sent,n=a.data,200!==n.status?t.$message.error(n.msg):t.professionalFunc=n.data.pro_support_features;case 5:case"end":return e.stop()}}),e)})))()},getOauth:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["b"])();case 2:a=e.sent,n=a.data,200!==n.status?t.$message.error(n.msg):t.tableData=n.data;case 5:case"end":return e.stop()}}),e)})))()}}},c=u,d=(a("5a70"),a("2877")),p=Object(d["a"])(c,n,r,!1,null,"495b0d15",null);e["default"]=p.exports}}]);