webpackJsonp([17],{Ij2A:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("gRE1"),i=a.n(s),n=a("pWbq"),r=a("2hMI"),o=a("iGF/"),l=a("krqS"),u={data:function(){return{list:[],perList:[],totalClass:"8",currentItem:{id:"",speak:"",sogou:"",duer:"",wenwen:"",naturali:""},addList:{speak:"",sogou:"",duer:"",wenwen:"",naturali:""},searchItem:{speak:""},addRules:{speak:[{required:!0,message:"请输入规则名称",trigger:"change"}],sogou:[{required:!0,message:"请输入sogou引擎优先级",trigger:"change"}],duer:[{required:!0,message:"请输入duer引擎优先级",trigger:"change"}],wenwen:[{required:!0,message:"请输入wenwen引擎优先级",trigger:"change"}],naturali:[{required:!0,message:"请输入naturali引擎优先级",trigger:"change"}]},editRules:{speak:[{required:!0,message:"请输入规则名称",trigger:"blur"}],sogou:[{required:!0,message:"请输入sogou引擎优先级",trigger:"blur"}],duer:[{required:!0,message:"请输入duer引擎优先级",trigger:"blur"}],wenwen:[{required:!0,message:"请输入wenwen引擎优先级",trigger:"blur"}],naturali:[{required:!0,message:"请输入naturali引擎优先级",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,AIMLBtnLoading:!1,listLoading:!0,isshow:!0,btnshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(i()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("user:data")&&(this.isshow=!1),-1==this.perList.indexOf("rule:update")&&-1==this.perList.indexOf("rule:delete")&&(this.btnshow=!1)},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,a=t.clientWidth,s=t.scrollWidth;this.showTitle=!(a<s)},formTime:function(e,t){var a=e.createTime,s=new Date(a);return s.getFullYear()+"-"+Object(n.a)(s.getMonth()+1)+"-"+Object(n.a)(s.getDate())+" "+Object(n.a)(s.getHours())+":"+Object(n.a)(s.getMinutes())},formTime2:function(e,t){var a=e.updateTime,s=new Date(a);return s.getFullYear()+"-"+Object(n.a)(s.getMonth()+1)+"-"+Object(n.a)(s.getDate())+" "+Object(n.a)(s.getHours())+":"+Object(n.a)(s.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleAuditPass:function(e,t){var a=this;console.log(t);var s={id:t.otherid,status:1};Object(o.a)(s).then(function(e){200==e.data.code?(a.$message({message:"审核已通过",type:"success",duration:1500}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1500})})},handleAuditReject:function(e,t){var a=this,s={id:t.otherid,status:2};Object(o.a)(s).then(function(e){200==e.data.code?(a.$message({message:"审核已拒绝",type:"success",duration:1500}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1500})})},handleEdit:function(e,t){var a=JSON.parse(t.answer);this.currentItem={id:t.id,speak:t.speak,sogou:a.sogou,duer:a.duer,wenwen:a.wenwen,naturali:a.naturali},this.editVisible=!0},handleDel:function(e,t){var a=this,s={id:t.id};s.sign=Object(l.a)(s),this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r._115)(s).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1500}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1500})})}).catch(function(e){console.log(e)})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,ruleName:this.currentItem.speak,sogou:this.currentItem.sogou,wenwen:this.currentItem.wenwen,duer:this.currentItem.duer,naturali:this.currentItem.naturali};a.sign=Object(l.a)(a),this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(r._118)(a).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1500}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1500})}).catch(function(e){t.editBtnLoading=!1})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={ruleName:this.addList.speak,sogou:this.addList.sogou,wenwen:this.addList.wenwen,duer:this.addList.duer,naturali:this.addList.naturali};a.sign=Object(l.a)(a),this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(r._114)(a).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1500}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1500})}).catch(function(e){t.addBtnLoading=!1})})},buildAIML:function(){var e=this;this.AIMLBtnLoading=!0,Object(r._117)().then(function(t){e.AIMLBtnLoading=!1,200==t.data.code?e.$message({message:t.data.msg,type:"success",duration:1500}):e.$message({message:t.data.errorMessage,type:"error",duration:1500})}).catch(function(t){e.AIMLBtnLoading=!1})},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.pageSize,pcstr:this.currentPage,condition:this.searchItem.speak};t.sign=Object(l.a)(t),this.list=[],Object(r._116)(t).then(function(t){e.listLoading=!1,200==t.data.code?(t.data.data.map(function(t,a){t.data.otherstatus=t.other.status,t.data.otherid=t.other.id,e.list.push(t.data)}),e.totalCount=t.data.count,e.totalClass=t.data.data.length):e.$message({message:t.data.errorMessage,type:"error",duration:1500})}).catch(function(){e.listLoading=!1})}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table height-85"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/qa/list"}}},[e._v("规则定义")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height50 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height50"},[a("el-form-item",{attrs:{label:"规则名称",prop:"speak"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.speak,callback:function(t){e.$set(e.searchItem,"speak","string"==typeof t?t.trim():t)},expression:"searchItem.speak"}})],1)],1),e._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"rule:pub",expression:"'rule:pub'"}],attrs:{size:"mini",loading:e.AIMLBtnLoading},on:{click:function(t){return e.buildAIML()}}},[e._v("生成AIML")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"rule:save",expression:"'rule:save'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1)]),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list,stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),a("el-table-column",{attrs:{label:"规则名称",prop:"speak",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.speak,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                  "+e._s(t.row.speak)+"\n                  ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                  "+e._s(t.row.speak)+"\n              ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"规则配置",prop:"answer",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.answer,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                  "+e._s(t.row.answer)+"\n                  ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                  "+e._s(t.row.answer)+"\n              ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"添加时间",prop:"createTime",align:"center",formatter:e.formTime,"min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"updateTime",align:"center",formatter:e.formTime2,"min-width":"120"}}),e._v(" "),e.btnshow?a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popconfirm",{attrs:{"hide-icon":!0,"confirm-button-text":"审核通过","cancel-button-text":"审核拒绝","cancel-button-type":"danger"},on:{confirm:function(a){return e.handleAuditPass(t.$index,t.row)},cancel:function(a){return e.handleAuditReject(t.$index,t.row)}}},[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"activiti:pass",expression:"'activiti:pass'"}],attrs:{slot:"reference",size:"mini",disabled:0!=t.row.otherstatus},slot:"reference"},[e._v(e._s(0==t.row.otherstatus?"审核":1==t.row.otherstatus?"审核通过":2==t.row.otherstatus?"审核拒绝":""))])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"rule:update",expression:"'rule:update'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"rule:delete",expression:"'rule:delete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}],null,!1,4066461234)}):e._e()],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"编辑",visible:e.editVisible,width:"40%",top:"10vh","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"80px",size:"small",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"规则名称",prop:"speak"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.speak,callback:function(t){e.$set(e.currentItem,"speak","string"==typeof t?t.trim():t)},expression:"currentItem.speak"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"sogou",prop:"sogou"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.sogou,callback:function(t){e.$set(e.currentItem,"sogou","string"==typeof t?t.trim():t)},expression:"currentItem.sogou"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"duer",prop:"duer"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.duer,callback:function(t){e.$set(e.currentItem,"duer","string"==typeof t?t.trim():t)},expression:"currentItem.duer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"wenwen",prop:"wenwen"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.wenwen,callback:function(t){e.$set(e.currentItem,"wenwen","string"==typeof t?t.trim():t)},expression:"currentItem.wenwen"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"naturali",prop:"naturali"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.naturali,callback:function(t){e.$set(e.currentItem,"naturali","string"==typeof t?t.trim():t)},expression:"currentItem.naturali"}})],1),e._v(" "),a("div",{staticStyle:{"font-size":"12px","padding-left":"80px"}},[e._v("\n            0:代表不使用此引擎. "),a("br"),e._v("\n            2~4:可以使用，但需要等待其他优先级更高的引擎，相同优先级的不需要等待."),a("br"),e._v("\n            7：\t优先 ，可以直接使用，不必等待其他引擎\n        ")])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"新增",visible:e.addVisible,width:"40%",top:"10vh","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"80px",size:"small",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"规则名称",prop:"speak"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.speak,callback:function(t){e.$set(e.addList,"speak","string"==typeof t?t.trim():t)},expression:"addList.speak"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"sogou",prop:"sogou"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.sogou,callback:function(t){e.$set(e.addList,"sogou","string"==typeof t?t.trim():t)},expression:"addList.sogou"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"duer",prop:"duer"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.duer,callback:function(t){e.$set(e.addList,"duer","string"==typeof t?t.trim():t)},expression:"addList.duer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"wenwen",prop:"wenwen"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.wenwen,callback:function(t){e.$set(e.addList,"wenwen","string"==typeof t?t.trim():t)},expression:"addList.wenwen"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"naturali",prop:"naturali"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.naturali,callback:function(t){e.$set(e.addList,"naturali","string"==typeof t?t.trim():t)},expression:"addList.naturali"}})],1),e._v(" "),a("div",{staticStyle:{"font-size":"12px","padding-left":"80px"}},[e._v("\n                0:代表不使用此引擎. "),a("br"),e._v("\n                2~4:可以使用，但需要等待其他优先级更高的引擎，相同优先级的不需要等待."),a("br"),e._v("\n                7：\t优先 ，可以直接使用，不必等待其他引擎\n            ")])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(u,d,!1,function(e){a("iuw9")},"data-v-e5a97606",null);t.default=c.exports},iuw9:function(e,t){}});