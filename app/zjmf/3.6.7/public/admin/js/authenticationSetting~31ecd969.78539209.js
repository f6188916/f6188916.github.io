(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["authenticationSetting~31ecd969"],{2532:function(t,e,a){"use strict";var i=a("23e7"),n=a("5a34"),r=a("1d80"),s=a("ab13");i({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(r(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"3bd0":function(t,e,a){},"5a34":function(t,e,a){var i=a("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6a8e":function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"g",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"j",(function(){return _})),a.d(e,"i",(function(){return p})),a.d(e,"a",(function(){return f}));var i=a("a27e");function n(t,e){return Object(i["a"])({url:"common/get_product_list",params:{type:t,id:e}})}function r(t){return Object(i["a"])({url:"common/get_promo_code",params:{type:t}})}function s(){return Object(i["a"])({url:"common/get_getways"})}function o(t){return Object(i["a"])({url:"common/get_email_tem",params:{type:t}})}function l(){return Object(i["a"])({url:"common/get_client_groups"})}function c(t){return Object(i["a"])({url:"common/host_list",params:{uid:t}})}function u(){return Object(i["a"])({url:"common/get_sms_country"})}function _(){return Object(i["a"])({url:"common/product_config_options"})}function p(t){return Object(i["a"])({url:"common/get_upstream_ticket_department_list",params:{id:t}})}function f(t){return Object(i["a"])({url:"check_product_as",method:"post",data:t})}},"9afb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",{staticStyle:{"margin-top":"0"}},[t._v(" "+t._s(t.$lang.authorization_setting_tips_text)+" "),a("el-link",{attrs:{type:"primary",href:"https://bbs.idcsmart.com/forum.php?mod=viewthread&tid=67&extra=page%3D1%26filter%3Dtypeid%26typeid%3D7",target:"blank"}},[t._v(t._s(t.$lang.help_document))])],1),"second"===t.activeName?a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-button",{staticStyle:{position:"absolute",right:"0",top:"2px","z-index":"999"},attrs:{type:"primary",size:"small"},on:{click:t.jumpUrl}},[t._v(" "+t._s(t.$lang.moreInterface1))])],1):t._e(),a("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:t.$lang.basic,name:"first"}},[a("el-row",{staticStyle:{overflow:"auto"},attrs:{gutter:15}},[a("el-form",{ref:"elForm",attrs:{model:t.formData,rules:t.rules,"label-width":"auto"}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"set-div-f"},[a("el-form-item",{attrs:{label:t.$lang.name_authentication,prop:"certifi_open"}},[a("el-switch",{attrs:{"active-text":"","active-value":"1","inactive-value":"2"},model:{value:t.formData.certifi_open,callback:function(e){t.$set(t.formData,"certifi_open",e)},expression:"formData.certifi_open"}})],1),a("el-form-item",{attrs:{label:t.$lang.advanced_setting,prop:"certifi_business_btn"}},[a("el-switch",{attrs:{"active-text":"","active-value":"1","inactive-value":"2"},model:{value:t.formData.certifi_business_btn,callback:function(e){t.$set(t.formData,"certifi_business_btn",e)},expression:"formData.certifi_business_btn"}})],1)],1)]),"1"===t.formData.certifi_open?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$lang.auto_update_name,prop:"certifi_realname"}},[a("el-switch",{attrs:{"active-text":t.$lang.auto_update_name_tips_text,"active-value":"1","inactive-value":"0"},model:{value:t.formData.certifi_realname,callback:function(e){t.$set(t.formData,"certifi_realname",e)},expression:"formData.certifi_realname"}})],1)],1):t._e(),"1"===t.formData.certifi_open?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$lang.phone_num_binding_must,prop:"certifi_isbindphone"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$lang.phone_num_binding_must)+" "),a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover"}},[a("el-row",[a("el-col",{attrs:{span:24}},[t._v(t._s(t.$lang.phone_num_binding_must_tips_text))])],1),a("i",{staticClass:"el-icon-question blue_qus",attrs:{slot:"reference"},slot:"reference"})],1)],1),a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.formData.certifi_isbindphone,callback:function(e){t.$set(t.formData,"certifi_isbindphone",e)},expression:"formData.certifi_isbindphone"}})],1)],1):t._e(),"1"===t.formData.certifi_open?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$lang.send_message_automatically_after_audit,prop:"artificial_auto_send_msg"}},[a("el-switch",{attrs:{"active-text":t.$lang.send_message_automatically_after_audit_tip,"active-value":"1","inactive-value":"0"},on:{change:function(e){return t.switchChange("artificial_auto_send_msg")}},model:{value:t.formData.artificial_auto_send_msg,callback:function(e){t.$set(t.formData,"artificial_auto_send_msg",e)},expression:"formData.artificial_auto_send_msg"}})],1)],1):t._e(),"1"===t.formData.certifi_open?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$lang.no_real_name_down_product,prop:"certifi_is_stop"}},[a("el-switch",{attrs:{"active-text":t.$lang.no_real_name_down_product_tips_text,"active-value":"1","inactive-value":"0"},model:{value:t.formData.certifi_is_stop,callback:function(e){t.$set(t.formData,"certifi_is_stop",e)},expression:"formData.certifi_is_stop"}})],1)],1):t._e(),"1"===t.formData.certifi_is_stop&&"1"===t.formData.certifi_open?a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:t.$lang.suspension_period,prop:"certifi_stop_day"}},[a("el-input-number",{style:{width:"200px"},attrs:{size:"small",placeholder:t.$lang.suspension_period_tips_text,clearable:"",controls:!1,precision:0},model:{value:t.formData.certifi_stop_day,callback:function(e){t.$set(t.formData,"certifi_stop_day",e)},expression:"formData.certifi_stop_day"}})],1)],1):t._e(),"1"===t.formData.certifi_open?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$lang.need_card_id,prop:"certifi_is_upload"}},[a("el-switch",{attrs:{"active-text":t.$lang.need_card_id_tips_text,"active-value":"1","inactive-value":"2"},model:{value:t.formData.certifi_is_upload,callback:function(e){t.$set(t.formData,"certifi_is_upload",e)},expression:"formData.certifi_is_upload"}})],1)],1):t._e(),"1"===t.formData.certifi_open&&"1"===t.formData.certifi_business_btn?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$lang.enterprise_certification_advanced_settings,prop:"certifi_business_open"}},[a("el-switch",{attrs:{"active-text":t.$lang.enterprise_certification_advanced_settings_tip,"active-value":"1","inactive-value":"0"},on:{change:function(e){return t.switchChange("certifi_business_open")}},model:{value:t.formData.certifi_business_open,callback:function(e){t.$set(t.formData,"certifi_business_open",e)},expression:"formData.certifi_business_open"}})],1)],1):t._e(),"1"===t.formData.certifi_open&&"1"===t.formData.certifi_business_open&&"1"===t.formData.certifi_business_btn?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$lang.business_license_upload,prop:"certifi_business_is_upload"}},[a("el-switch",{attrs:{"active-text":t.$lang.business_license_upload_tip,"active-value":"1","inactive-value":"0"},on:{change:function(e){return t.switchChange("certifi_business_is_upload")}},model:{value:t.formData.certifi_business_is_upload,callback:function(e){t.$set(t.formData,"certifi_business_is_upload",e)},expression:"formData.certifi_business_is_upload"}})],1)],1):t._e(),"1"===t.formData.certifi_open&&"1"===t.formData.certifi_business_open&&"1"===t.formData.certifi_business_btn?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$lang.power_of_attorney_upload,prop:"certifi_business_is_author"}},[a("el-switch",{attrs:{"active-text":t.$lang.power_of_attorney_upload_tip,"active-value":"1","inactive-value":"0"},on:{change:function(e){return t.switchChange("certifi_business_is_author")}},model:{value:t.formData.certifi_business_is_author,callback:function(e){t.$set(t.formData,"certifi_business_is_author",e)},expression:"formData.certifi_business_is_author"}})],1)],1):t._e(),"1"===t.formData.certifi_open&&"1"===t.formData.certifi_business_open&&1==t.edition&&"1"===t.formData.certifi_business_btn?a("el-col",{attrs:{span:24}},[t.formData.certifi_business_author_path?a("el-form-item",[a("div",{staticClass:"show-file"},[a("p",[t._v(t._s(t.uploadFileName))]),a("p",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.viewFile}},[t._v(t._s(t.$lang.to_view))]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.downloadFile}},[t._v(t._s(t.$lang.download))]),a("el-button",{attrs:{size:"mini"},on:{click:t.deleteFile}},[t._v(t._s(t.$lang.delete))])],1)])]):a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadAction,limit:1,"show-file-list":!1,"before-upload":t.beforeUpload,"on-success":t.uploadSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v(t._s(t.$lang.upload_sample_file))])],1)],1)],1):t._e()],1)],1),a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:t.submitForm}},[t._v(t._s(t.$lang.submit))]),a("el-button",{attrs:{size:"small"},on:{click:t.resetForm}},[t._v(t._s(t.$lang.reset))])],1)],1),a("el-tab-pane",{attrs:{label:t.$lang.interface_settings,name:"second"}},[t.apiListShow?a("apiSetting"):t._e()],1)],1)],1)},n=[],r=(a("4160"),a("caad"),a("baa5"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("1276"),a("159b"),a("96cf"),a("1da1")),s=a("a27e");function o(t){return Object(s["a"])({url:"certifi_alipay",method:"put",data:t})}function l(){return Object(s["a"])({url:"certifi_three_type"})}function c(){return Object(s["a"])({url:"certifi_types"})}function u(){return Object(s["a"])({url:"config_certifi/setting"})}function _(t){return Object(s["a"])({url:"config_certifi/setting",method:"post",data:t})}function p(t){return Object(s["a"])({url:"config_certifi/authorDel",method:"get",params:t})}var f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{attrs:{data:t.tableData,border:"","row-key":"id"}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?a("span",[a("i",{staticClass:"el-icon-loading"}),t._v(" "+t._s(t.$lang.loading)+" ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():a("span",[t._v(t._s(t.$lang.no_data))])]),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("i",{staticClass:"el-icon-rank cursor-grabbing mr-20"}),a("span",[t._v(t._s(i.id))])]}}])}),a("el-table-column",{attrs:{prop:"title",label:t.$lang.interface_name}}),a("el-table-column",{attrs:{prop:"certifi_type",label:t.$lang.type},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("smsType")(e.row.certifi_type)))])]}}])}),a("el-table-column",{attrs:{prop:"author",label:t.$lang.developer}}),a("el-table-column",{attrs:{prop:"status",label:t.$lang.state,width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?a("i",{staticClass:"el-icon-circle-close no-icon"}):1==e.row.status?a("i",{staticClass:"el-icon-circle-check yes-icon"}):t._e()]}}])}),a("el-table-column",{attrs:{label:t.$lang.operation,width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[3!==i.status?a("el-button",{staticClass:"span-warning",attrs:{size:"small",type:"text"},on:{click:function(e){return t.applyApi(i)}}},[t._v(" "+t._s(t.$lang.interface_apply)+" ")]):t._e(),0===i.status?a("el-button",{staticClass:"span-primary",attrs:{size:"small",type:"text"},on:{click:function(e){return t.plToggleHandleClick(i.id,"enable")}}},[t._v(t._s(t.$lang.start_using))]):t._e(),1===i.status?a("el-button",{staticClass:"span-danger",attrs:{size:"small",type:"text"},on:{click:function(e){return t.plToggleHandleClick(i.id,"disable")}}},[t._v(t._s(t.$lang.forbidden))]):t._e(),3!==i.status?a("el-button",{staticClass:"span-info",attrs:{size:"small",type:"text"},on:{click:function(e){return t.plSettingHandleClick(i.id)}}},[t._v(t._s(t.$lang.configuration)+" ")]):t._e(),3===i.status?a("el-button",{staticClass:"span-success",attrs:{size:"small",type:"text"},on:{click:function(e){return t.plInstallHandleClick(i.name)}}},[t._v(t._s(t.$lang.install)+" ")]):t._e(),3!==i.status?a("el-button",{staticClass:"span-warning",attrs:{size:"small",type:"text"},on:{click:function(e){return t.plUnInstallHandleClick(i.id)}}},[t._v(t._s(t.$lang.uninstall)+" ")]):t._e()]}}])})],1)],1)],1),a("el-dialog",{attrs:{title:t.plInfo.title,visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.plInfo.title===t.$lang.ali_web_pay_text||t.plInfo.title===t.$lang.ali_ewm_pay_text||t.plInfo.title===t.$lang.ali_mdm_pay_text?a("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(t.plInfo.title)+" "),a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover"}},[a("el-row",[a("el-col",{attrs:{span:24}},[t._v(t._s(t.$lang.configuration_dialog_hint))]),a("el-col",{staticClass:"tar",attrs:{span:24}},[a("el-link",{attrs:{type:"primary",href:"https://bbs.idcsmart.com/forum.php?mod=viewthread&tid=68&extra=page%3D1%26filter%3Dtypeid%26typeid%3D7",target:"blank"}},[t._v(t._s(t.$lang.help_document))])],1)],1),a("i",{staticClass:"el-icon-question blue_qus",attrs:{slot:"reference"},slot:"reference"})],1)],1):"微信支付"===t.plInfo.title?a("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(t.plInfo.title)+" "),a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover"}},[a("el-row",[a("el-col",{attrs:{span:24}},[t._v(t._s(t.$lang.configuration_dialog_hint))]),a("el-col",{staticClass:"tar",attrs:{span:24}},[a("el-link",{attrs:{type:"primary",href:"https://bbs.idcsmart.com/forum.php?mod=viewthread&tid=169&page=1&extra=#pid306",target:"blank"}},[t._v(" "+t._s(t.$lang.help_document))])],1)],1),a("i",{staticClass:"el-icon-question blue_qus",attrs:{slot:"reference"},slot:"reference"})],1)],1):t._e(),a("el-form",{ref:"configForm",attrs:{"label-width":t.labelWidth}},t._l(t.plInfo.config,(function(e,i){return a("el-form-item",{key:i,attrs:{label:e.title,prop:""}},["text"===e.type?a("el-input",{style:{width:"100%"},attrs:{size:"small",type:"textarea",rows:3,placeholder:t.$lang.please_enter+e.title,disabled:e.attribute,clearable:""},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}}):t._e(),"select"===e.type?a("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:t.$lang.please_choose+e.title,disabled:e.attribute,clearable:""},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}},t._l(e.options,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),1):t._e(),"radio"===e.type?t._l(e.options,(function(i,n){return a("el-radio",{key:n,attrs:{disabled:e.attribute,label:n.toString()},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}},[t._v(t._s(i))])})):t._e(),"checkbox"===e.type?a("el-checkbox",{attrs:{disabled:e.attribute},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}},[t._v(t._s(t.$lang.alternative_option))]):t._e()],2)})),1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$lang.cancel))]),a("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:t.saveHandleClick}},[t._v(t._s(t.$lang.save_the_changes))])],1)],1),a("el-dialog",{attrs:{title:t.pltitle,visible:t.uninstallDialogVisible,width:"30%"},on:{"update:visible":function(e){t.uninstallDialogVisible=e},open:t.getGetways,close:t.plDialogClose}},[a("span",[t._v(t._s(t.$lang.yes_or_no)+t._s(t.pltitle)+t._s(t.$lang.this_api))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.uninstallDialogVisible=!1}}},[t._v(t._s(t.$lang.cancel))]),a("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:t.sure}},[t._v(t._s(t.$lang.confirm))])],1)])],1)},d=[],m=(a("a15b"),a("d81d"),a("ba28")),g=a("aa47"),b=a("6a8e"),h={metaInfo:{title:window.zjmf_cw_lang.real_name_interface},data:function(){return{tableLoading:!1,labelWidth:window.document.body.clientWidth>768?"auto":null,moduleName:"certification",tableData:[],dialogVisible:!1,plInfo:{},btnLoading:!1,toggleparam:{},plid:0,pltitle:"",uninstallDialogVisible:!1,plModel:{newGatewayId:void 0},gateway:[]}},filters:{statusFilter:function(t){return 0===t?"禁用":1===t?"启用":3===t?"未安装":void 0},smsType:function(t){var e=[];return t.map((function(t){e.push(t.name_zh)})),e.join("/")}},methods:{getData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,Object(m["a"])(t.moduleName);case 3:a=e.sent,i=a.data,200===i.status?t.tableData=i.data:t.$message.error(i.msg),t.tableLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},plInstallHandleClick:function(t){var e=this;this.$confirm(this.$lang.sure_install_text,this.$lang.hint,{confirmButtonText:this.$lang.confirm,cancelButtonText:this.$lang.cancel,type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(m["c"])({name:t,module:"certification"});case 2:i=a.sent,n=i.data,200===n.status?(e.getData(),e.$message.success(n.msg)):e.$message.warning(n.msg);case 5:case"end":return a.stop()}}),a)})))).catch((function(){}))},applyApi:function(t){window.open(t.help_url)},plUnInstallHandleClick:function(t){this.uninstallDialogVisible=!0,this.plid=t,this.pltitle=this.$lang.uninstall},plUnInstallApi:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,Object(m["h"])({id:t.plid,default:t.plModel.newGatewayId});case 3:a=e.sent,i=a.data,200===i.status?(t.getData(),t.$message.success(i.msg),t.uninstallDialogVisible=!1):t.$message.warning(i.msg),t.btnLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},plToggleHandleClick:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a.toggleparam.id=t,a.toggleparam.disable=void 0,a.toggleparam.enable=void 0,a.toggleparam[e]=e,i.next=6,Object(m["g"])(a.toggleparam);case 6:n=i.sent,r=n.data,200===r.status?(a.getData(),a.$message.success(r.msg),a.uninstallDialogVisible=!1):a.$message.warning(r.msg);case 9:case"end":return i.stop()}}),i)})))()},plToggleApi:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,t.toggleparam.default=t.plModel.newGatewayId,e.next=4,Object(m["g"])(t.toggleparam);case 4:a=e.sent,i=a.data,200===i.status?(t.getData(),t.$message.success(i.msg),t.uninstallDialogVisible=!1):t.$message.warning(i.msg),t.btnLoading=!1;case 8:case"end":return e.stop()}}),e)})))()},plSettingHandleClick:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(m["e"])(t);case 2:i=a.sent,n=i.data,200===n.status?e.plInfo=n.data.data:e.$message.error(n.msg),e.dialogVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},plCopyHandleClick:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(m["b"])({name:t.name});case 2:i=a.sent,n=i.data,200!==n.status?e.$message.error(n.msg):(e.$message.success(n.msg),e.getData());case 5:case"end":return a.stop()}}),a)})))()},saveHandleClick:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i in a={id:t.plInfo.id,module:"certification",config:[]},t.plInfo.config)a.config[i]=t.plInfo.config[i].value;return t.btnLoading=!0,e.next=5,Object(m["d"])(t.$qs.stringify(a));case 5:n=e.sent,r=n.data,200!==r.status?t.$message.error(r.msg):(t.$message.success(r.msg),t.dialogVisible=!1,t.getData()),t.btnLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},getGetways:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["d"])();case 2:if(a=e.sent,i=a.data,200===i.status){e.next=6;break}return e.abrupt("return",!1);case 6:t.gateway=i.gateway;case 7:case"end":return e.stop()}}),e)})))()},sure:function(){this.plUnInstallApi()},plDialogClose:function(){},rowDrag:function(){var t=this,e=document.querySelector(".el-table__body-wrapper tbody");setTimeout((function(){g["a"].create(e,{animation:500,handle:".el-icon-rank",onEnd:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i,n,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.tableData[a.oldIndex],n=t.tableData[a.newIndex],a.newIndex!==a.oldIndex){e.next=4;break}return e.abrupt("return",!1);case 4:return a.newIndex>a.oldIndex&&(n=t.tableData[a.newIndex]),a.newIndex<a.oldIndex&&(n=0===a.newIndex?{id:0}:t.tableData[a.newIndex-1]),r={id:i.id,moduleName:i.module,pre_id:n.id},e.next=9,Object(m["f"])(r);case 9:s=e.sent,o=s.data,200!==o.status?t.$message.error(o.msg):(t.$message.success(o.msg),t.getData());case 12:case"end":return e.stop()}}),e)})));function a(t){return e.apply(this,arguments)}return a}()})}),500)}},created:function(){this.getData()},mounted:function(){this.rowDrag()}},v=h,w=a("2877"),y=Object(w["a"])(v,f,d,!1,null,"383b06be",null),D=y.exports,$={inject:["reload"],metaInfo:{title:window.zjmf_cw_lang.real_name_seetings},components:{apiSetting:D},data:function(){return{edition:"",uploadFileName:"",viewFileUrl:"",uploadAction:this.$baseUrl+"/upload_author",activeName:"first",labelWidth:window.document.body.clientWidth>768?"140px":null,areaWidth:window.document.body.clientWidth>768?"640px":"260px",formData:{certifi_open:void 0,certifi_is_stop:void 0,certifi_realname:void 0,certifi_stop_day:void 0,certifi_is_upload:void 0,certifi_select:[],certifi_isbindphone:void 0,artificial_auto_send_msg:void 0,certifi_business_open:void 0,certifi_business_is_upload:void 0,certifi_business_is_author:void 0,certifi_business_author_path:void 0,certifi_business_btn:void 0},settingsFormData:{certifi_phonethree_appcode:"",certifi_type:"",certifi_app_id:void 0,certifi_alipay_public_key:void 0,certifi_merchant_private_key:void 0,certifi_alipay_biz_code:void 0,certifi_appcode:void 0,certifi_three_type:"",name:""},rules:{},settingRules:{certifi_type:[{required:!0,message:this.$lang.please_select_rz_api,trigger:"change"}],certifi_app_id:[{required:!0,message:this.$lang.please_enter+"AppID",trigger:"blur"}],certifi_alipay_public_key:[{required:!0,message:this.$lang.please_input_ali_gy,trigger:"blur"}],certifi_merchant_private_key:[{required:!0,message:this.$lang.please_input_business_gy,trigger:"blur"}],certifi_alipay_biz_code:[{required:!0,message:this.$lang.please_select_rz_fs,trigger:"change"}]},cetifi_typeOptions:[],certifi_selectOptions:[],certifi_alipay_biz_codeOptions:[],threeOptions:[],btnLoading:!1,apiListShow:!1}},methods:{switchChange:function(t){0==this.edition&&(this.$message.error(this.$lang.free_version_this_feature_is_not_available),this.formData[t]=0)},viewFile:function(){open(this.viewFileUrl)},downloadFile:function(){location.href="/admin/config_certifi/authorDown"},deleteFile:function(){var t=this;p().then((function(e){200===e.data.status?(t.$message.success(e.data.msg),t.getData()):t.$message.error(e.data.msg)}))},beforeUpload:function(t){var e=t.name.lastIndexOf("."),a=t.name.substring(e+1,t.name.length),i=["zip","ZIP","rar","RAR"];if(i.includes(a))return this.$message.error(this.$lang.not_uploaded_successfully),!1},uploadSuccess:function(t,e,a){this.uploadFileName=t.data.origin_name,this.formData.certifi_business_author_path=t.data.savename,this.viewFileUrl=t.path},getType:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:a=e.sent,i=a.data,t.cetifi_typeOptions=i.data;case 5:case"end":return e.stop()}}),e)})))()},checkChange:function(t){t.includes("artificial")?(this.formData.certifi_select=["artificial"],this.certifi_selectOptions.forEach((function(t){t.disabled="artificial"!==t.value}))):this.certifi_selectOptions.forEach((function(t){t.disabled=!1})),this.$forceUpdate()},getThree:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:a=e.sent,i=a.data,t.threeOptions=i.data;case 5:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:a=e.sent,i=a.data.data,t.formData.certifi_select=i.certifi_select.split(","),i.certifi_select.split(",").forEach((function(e){"artificial"===e&&(t.formData.certifi_select=["artificial"],t.certifi_selectOptions.forEach((function(t){t.disabled="artificial"!==t.value})))})),t.formData.certifi_open=i.certifi_open||void 0,t.formData.certifi_is_stop=i.certifi_is_stop||void 0,t.formData.certifi_realname=i.certifi_realname||void 0,t.formData.certifi_stop_day=i.certifi_stop_day||void 0,t.formData.certifi_is_upload=i.certifi_is_upload||void 0,t.formData.certifi_isbindphone=i.certifi_isbindphone||void 0,t.formData.artificial_auto_send_msg=i.artificial_auto_send_msg||void 0,t.formData.certifi_business_open=i.certifi_business_open||void 0,t.formData.certifi_business_is_upload=i.certifi_business_is_upload||void 0,t.formData.certifi_business_is_author=i.certifi_business_is_author||void 0,t.formData.certifi_business_author_path=i.certifi_business_author_path||void 0,t.formData.certifi_business_btn=i.certifi_business_btn||void 0,t.uploadFileName=i.certifi_business_author_path?i.certifi_business_author_path.split("^")[1].toString():"",t.viewFileUrl=i.certifi_business_author_path_url,t.edition=a.data.edition,t.settingsFormData.certifi_alipay_biz_code=i.certifi_alipay_biz_code||"",t.settingsFormData.certifi_alipay_public_key=i.certifi_alipay_public_key||"",t.settingsFormData.certifi_app_id=i.certifi_app_id||"",t.settingsFormData.certifi_merchant_private_key=i.certifi_merchant_private_key||"",t.settingsFormData.certifi_phonethree_appcode=i.certifi_phonethree_appcode||"",t.settingsFormData.certifi_type=i.certifi_type||void 0,t.cetifi_typeOptions.forEach((function(e){e.value===t.settingsFormData.certifi_type&&(t.settingsFormData.name=e.name)})),t.settingsFormData.certifi_appcode=i.certifi_appcode||void 0,t.settingsFormData.certifi_three_type=i.certifi_three_type||void 0;case 30:case"end":return e.stop()}}),e)})))()},submitForm:function(){var t=this;this.$refs.elForm.validate(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return",!1);case 2:return t.btnLoading=!0,e.next=5,_(t.formData);case 5:i=e.sent,n=i.data,200!==n.status?t.$message.error(n.msg):(t.$message.success(n.msg),t.getData()),t.btnLoading=!1;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},submitSettingForm:function(){var t=this;this.$refs.elSettingForm.validate(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return",!1);case 2:return t.btnLoading=!0,t.settingsFormData.certifi_select=t.formData.certifi_select,e.next=6,o(t.settingsFormData);case 6:i=e.sent,n=i.data,200!==n.status?t.$message.error(n.msg):(t.getData(),t.$message.success(n.msg)),t.btnLoading=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},resetForm:function(){this.$refs.elForm.resetFields()},tabClick:function(){"second"!=this.activeName||this.apiListShow||(this.apiListShow=!0)},jumpUrl:function(){window.open("https://my.idcsmart.com/shop/shop_app.html?appType=certification")}},created:function(){this.getData()},computed:{idEmpty:function(){return this.formData.certifi_is_stop}},watch:{idEmpty:function(t,e){"2"===t&&(this.formData.certifi_stop_day=void 0)},"settingsFormData.certifi_type":{handler:function(t,e){var a=this;this.cetifi_typeOptions.forEach((function(t){t.value===a.settingsFormData.certifi_type&&(a.settingsFormData.name=t.name)}))},deep:!0}}},x=$,k=(a("a636"),Object(w["a"])(x,i,n,!1,null,"1fd692e1",null));e["default"]=k.exports},a636:function(t,e,a){"use strict";var i=a("3bd0"),n=a.n(i);n.a},ab13:function(t,e,a){var i=a("b622"),n=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,"/./"[t](e)}catch(i){}}return!1}},ba28:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"g",(function(){return s})),a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return l})),a.d(e,"h",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"f",(function(){return _}));var i=a("a27e");function n(t){return Object(i["a"])({url:"pl_index/".concat(t,"/")})}function r(t){return Object(i["a"])({url:"pl_install",method:"post",data:t})}function s(t){return Object(i["a"])({url:"pl_toggle",method:"post",data:t})}function o(t){return Object(i["a"])({url:"pl_setting/certification/".concat(t)})}function l(t){return Object(i["a"])({url:"pl_setting_post",method:"post",data:t})}function c(t){return Object(i["a"])({url:"pl_uninstall",method:"post",data:t})}function u(t){return Object(i["a"])({url:"pl_copy",method:"post",data:t})}function _(t){return Object(i["a"])({url:"pl_sort/".concat(t.moduleName,"/"),method:"post",data:t})}},baa5:function(t,e,a){var i=a("23e7"),n=a("e58c");i({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},caad:function(t,e,a){"use strict";var i=a("23e7"),n=a("4d64").includes,r=a("44d2"),s=a("ae40"),o=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!o},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},e58c:function(t,e,a){"use strict";var i=a("fc6a"),n=a("a691"),r=a("50c4"),s=a("a640"),o=a("ae40"),l=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,_=s("lastIndexOf"),p=o("indexOf",{ACCESSORS:!0,1:0}),f=u||!_||!p;t.exports=f?function(t){if(u)return c.apply(this,arguments)||0;var e=i(this),a=r(e.length),s=a-1;for(arguments.length>1&&(s=l(s,n(arguments[1]))),s<0&&(s=a+s);s>=0;s--)if(s in e&&e[s]===t)return s||0;return-1}:c}}]);