(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LoginRegister~31ecd969"],{2532:function(e,t,a){"use strict";var r=a("23e7"),o=a("5a34"),l=a("1d80"),i=a("ab13");r({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(l(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},3787:function(e,t,a){},"3f8c8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"theme-template"},[a("h2",[e._v(e._s(e.$lang.register_and_login))]),a("el-row",{staticClass:"topform_wrap",attrs:{gutter:15}},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:e.$lang.basic,name:"1"}},[a("el-form",{ref:"baseForm",staticClass:"mt-20",attrs:{model:e.baseForm,"label-width":"100px","label-position":"top"}},[a("p",{staticStyle:{"font-size":"12px","font-weight":"700"}},[e._v(e._s(e.$lang.international_telephone_master_switch)+" "),a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover"}},[a("el-row",[a("el-col",{attrs:{span:24}},[e._v(" "+e._s(e.$lang.be_unacted_on)+" ")])],1),a("i",{staticClass:"el-icon-question blue_qus",attrs:{slot:"reference"},slot:"reference"})],1)],1),a("el-form-item",{attrs:{label:""}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.baseForm.allow_login_register,callback:function(t){e.$set(e.baseForm,"allow_login_register",t)},expression:"baseForm.allow_login_register"}})],1),a("el-form-item",{attrs:{label:e.$lang.customer_registration}},[a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.baseForm.allow_register_phone,callback:function(t){e.$set(e.baseForm,"allow_register_phone",t)},expression:"baseForm.allow_register_phone"}},[e._v(e._s(e.$lang.cellphone)+" ")]),a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.baseForm.allow_register_email,callback:function(t){e.$set(e.baseForm,"allow_register_email",t)},expression:"baseForm.allow_register_email"}},[e._v(e._s(e.$lang.email)+" ")])],1),a("el-form-item",{attrs:{label:e.$lang.customer_login}},[a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.baseForm.allow_login_phone,callback:function(t){e.$set(e.baseForm,"allow_login_phone",t)},expression:"baseForm.allow_login_phone"}},[e._v(e._s(e.$lang.cellphone)+" ")]),a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.baseForm.allow_login_email,callback:function(t){e.$set(e.baseForm,"allow_login_email",t)},expression:"baseForm.allow_login_email"}},[e._v(e._s(e.$lang.email)+" ")]),a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.baseForm.allow_id,callback:function(t){e.$set(e.baseForm,"allow_id",t)},expression:"baseForm.allow_id"}},[e._v("ID")])],1),a("el-form-item",{attrs:{label:e.$lang.mailbox_registration_needs_validated,prop:"allow_email_register_code"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.baseForm.allow_email_register_code,callback:function(t){e.$set(e.baseForm,"allow_email_register_code",t)},expression:"baseForm.allow_email_register_code"}})],1)],1)],1),a("el-tab-pane",{attrs:{label:e.$lang.optional_fields_for_registration,name:"2"}},[a("el-form",{ref:"registerFrom",staticClass:"mt-20",attrs:{model:e.registerFrom,"label-width":"100px","label-position":"top"}},[a("el-form-item",{attrs:{label:e.$lang.optional_fields_for_registration,prop:"clients_profoptional"}},[e._l(e.regOptions,(function(t,r){return[a("span",{key:r,staticClass:"mr-20 regOptionsWrapper"},[a("el-checkbox",{model:{value:t.check,callback:function(a){e.$set(t,"check",a)},expression:"item.check"}},[e._v(e._s(t.label))]),a("el-checkbox",{attrs:{"true-label":"1","false-label":"0",disabled:!t.check},model:{value:t.require,callback:function(a){e.$set(t,"require",a)},expression:"item.require"}},[e._v(e._s(e.$lang.must_fill_in)+" ")])],1)]}))],2)],1)],1)],1)],1),a("div",{staticClass:"bottomOperationAdd"},[a("el-button",{attrs:{size:"small",type:"primary",loading:e.btnLoading},on:{click:e.submitForm}},[e._v(e._s(e.$lang.save_the_changes))]),a("el-button",{attrs:{size:"small"},on:{click:e.resetForm}},[e._v(e._s(e.$lang.cancel_changes))])],1)],1)},o=[],l=(a("4de4"),a("caad"),a("b0c0"),a("2532"),a("ce3c")),i={metaInfo:{title:window.zjmf_cw_lang.register_and_login},data:function(){return{activeName:"1",btnLoading:!1,baseForm:{allow_login_register:!1,allow_register_phone:"",allow_register_email:"",allow_login_phone:"",allow_login_email:"",allow_id:"",allow_email_register_code:""},registerFrom:{Clients_profoptional_list:"",login_register_custom_require:[],clients_profoptional:[]},regOptions:[]}},mounted:function(){this.getData()},methods:{handleClick:function(){this.getData()},submitForm:function(){var e=this;switch(this.activeName){case"1":this.btnLoading=!0,Object(l["f"])(this.baseForm).then((function(t){200!==t.data.status?(e.$message({message:t.data.msg,type:"error"}),e.btnLoading=!1):(e.$message({message:t.data.msg,type:"success"}),e.getData(),e.btnLoading=!1)}));break;case"2":for(var t=0;t<this.regOptions.length;t++){var a=this.regOptions[t];this.registerFrom.login_register_custom_require[t]={},this.$set(this.registerFrom.login_register_custom_require[t],"name",a.value),this.$set(this.registerFrom.login_register_custom_require[t],"require",a.require)}this.registerFrom.clients_profoptional=[];for(var r=0;r<this.regOptions.length;r++){var o=this.regOptions[r];o.check&&this.registerFrom.clients_profoptional.push(o.value)}this.registerFrom.login_register_custom_require=this.registerFrom.login_register_custom_require.filter((function(t){return e.registerFrom.clients_profoptional.includes(t.name)})),Object(l["f"])(this.registerFrom).then((function(t){200!==t.data.status?(e.$message({message:t.data.msg,type:"error"}),e.btnLoading=!1):(e.$message({message:t.data.msg,type:"success"}),e.getData(),e.btnLoading=!1)}));break;default:break}},resetForm:function(){this.$refs.baseForm.resetFields(),this.$refs.registerFrom.resetFields(),this.getData()},getData:function(){var e=this,t=[];switch(this.activeName){case"1":for(var a in this.baseForm)t.push(a);Object(l["a"])({param:t}).then((function(t){200!==t.data.status?e.$message({message:t.data.msg,type:"error"}):e.baseForm=t.data.data}));break;case"2":t=["Clients_profoptional_list"],Object(l["b"])({param:t}).then((function(t){if(200!==t.data.status)e.$message({message:t.data.msg,type:"error"});else{var a=[];for(var r in t.data.data.Clients_profoptional_list.login_register_custom_require_list){var o=t.data.data.Clients_profoptional_list.login_register_custom_require_list[r],l={label:o,value:r};a.push(l)}for(var i=0;i<a.length;i++){var s=a[i];s.check=t.data.data.Clients_profoptional_list.clients_profoptional_checked.includes(s.value)}for(var n=0;n<t.data.data.Clients_profoptional_list.login_register_custom_require.length;n++)for(var c=t.data.data.Clients_profoptional_list.login_register_custom_require[n],u=0;u<a.length;u++){var _=a[u];c.name===_.value&&(_.require=c.require)}e.regOptions=a}}));break;default:break}}}},s=i,n=(a("7292"),a("2877")),c=Object(n["a"])(s,r,o,!1,null,"2fe73301",null);t["default"]=c.exports},"4de4":function(e,t,a){"use strict";var r=a("23e7"),o=a("b727").filter,l=a("1dde"),i=a("ae40"),s=l("filter"),n=i("filter");r({target:"Array",proto:!0,forced:!s||!n},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,a){var r=a("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},7292:function(e,t,a){"use strict";var r=a("3787"),o=a.n(r);o.a},ab13:function(e,t,a){var r=a("b622"),o=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[o]=!1,"/./"[e](t)}catch(r){}}return!1}},caad:function(e,t,a){"use strict";var r=a("23e7"),o=a("4d64").includes,l=a("44d2"),i=a("ae40"),s=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!s},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l("includes")},ce3c:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"i",(function(){return n})),a.d(t,"g",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return _})),a.d(t,"h",(function(){return g}));var r=a("a27e");function o(e){return Object(r["a"])({url:"config_general/getConfig",method:"post",data:e})}function l(e){return Object(r["a"])({url:"config_general/getConfigOption",method:"post",data:e})}function i(e){return Object(r["a"])({url:"config_general/newGeneral",method:"post",data:e})}function s(){return Object(r["a"])({url:"contract/setting"})}function n(e){return Object(r["a"])({url:"contract/setting",method:"post",data:e})}function c(e){return Object(r["a"])({url:"config_general/debugmodel",method:"post",data:e})}function u(){return Object(r["a"])({url:"config_general/debugmodel"})}function _(){return Object(r["a"])({url:"config_general/new_login"})}function g(e){return Object(r["a"])({url:"config_general/new_login",method:"post",data:e})}}}]);