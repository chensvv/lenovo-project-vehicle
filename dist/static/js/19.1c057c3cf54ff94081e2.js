webpackJsonp([19],{"7HWV":function(e,t){},Ij2A:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("pWbq");var r=a("2hMI"),n={name:"applicationlist",data:function(){return{list:[],currentItem:{id:"",ruleName:"",sogou:"",duer:"",wenwen:"",naturali:""},addList:{ruleName:"",sogou:"",duer:"",wenwen:"",naturali:""},searchItem:{ruleName:""},addRules:{ruleName:[{required:!0,message:"请输入规则名称",trigger:"change"}],sogou:[{required:!0,message:"请输入sogou引擎优先级",trigger:"change"}],duer:[{required:!0,message:"请输入duer引擎优先级",trigger:"change"}],wenwen:[{required:!0,message:"请输入wenwen引擎优先级",trigger:"change"}],naturali:[{required:!0,message:"请输入naturali引擎优先级",trigger:"change"}]},editRules:{ruleName:[{required:!0,message:"请输入规则名称",trigger:"blur"}],sogou:[{required:!0,message:"请输入sogou引擎优先级",trigger:"blur"}],duer:[{required:!0,message:"请输入duer引擎优先级",trigger:"blur"}],wenwen:[{required:!0,message:"请输入wenwen引擎优先级",trigger:"blur"}],naturali:[{required:!0,message:"请输入naturali引擎优先级",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:30,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,AIMLBtnLoading:!1}},created:function(){this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){var a=JSON.parse(t.ruleResult);this.currentItem={id:t.id,ruleName:t.ruleName,sogou:a.sogou,duer:a.duer,wenwen:a.wenwen,naturali:a.naturali},this.editVisible=!0},handleDel:function(e,t){var a=this,n={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.Y)(n).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,ruleName:this.currentItem.ruleName,sogou:this.currentItem.sogou,wenwen:this.currentItem.wenwen,duer:this.currentItem.duer,naturali:this.currentItem.naturali};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(r._1)(a).then(function(e){200==e.data.code?(t.$message({message:"修改成功",type:"success",duration:1e3}),t.getList(),t.editBtnLoading=!1,t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={ruleName:this.addList.ruleName,sogou:this.addList.sogou,wenwen:this.addList.wenwen,duer:this.addList.duer,naturali:this.addList.naturali};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(r.X)(a).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addBtnLoading=!1,t.addVisible=!1):(t.addBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}))})})},buildAIML:function(){var e=this;this.AIMLBtnLoading=!0,Object(r._0)().then(function(t){200==t.data.code?(e.$message({message:t.data.msg,type:"success",duration:1e3}),e.AIMLBtnLoading=!1):(e.AIMLBtnLoading=!1,e.$message({message:t.data.errorMessage,type:"error",duration:1e3}))})},getList:function(){var e=this,t={pgstr:this.pageSize,pcstr:this.currentPage,condition:this.searchItem.ruleName};Object(r.Z)(t).then(function(t){e.list=t.data.data,e.totalCount=t.data.count})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("规则定义")]),e._v(" "),e._l(e.$route.meta,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"规则名称",prop:"ruleName"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.ruleName,callback:function(t){e.$set(e.searchItem,"ruleName","string"==typeof t?t.trim():t)},expression:"searchItem.ruleName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:72,expression:"72"}],staticClass:"success",attrs:{size:"mini",loading:e.AIMLBtnLoading},on:{click:function(t){return e.buildAIML()}}},[e._v("生成AIML")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:67,expression:"67"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"规则名称",prop:"ruleName",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"规则配置",prop:"ruleResult",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:68,expression:"68"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:71,expression:"71"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"80px",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"规则名称",prop:"ruleName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.ruleName,callback:function(t){e.$set(e.currentItem,"ruleName","string"==typeof t?t.trim():t)},expression:"currentItem.ruleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"sogou",prop:"sogou"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.sogou,callback:function(t){e.$set(e.currentItem,"sogou","string"==typeof t?t.trim():t)},expression:"currentItem.sogou"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"duer",prop:"duer"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.duer,callback:function(t){e.$set(e.currentItem,"duer","string"==typeof t?t.trim():t)},expression:"currentItem.duer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"wenwen",prop:"wenwen"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.wenwen,callback:function(t){e.$set(e.currentItem,"wenwen","string"==typeof t?t.trim():t)},expression:"currentItem.wenwen"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"naturali",prop:"naturali"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.naturali,callback:function(t){e.$set(e.currentItem,"naturali","string"==typeof t?t.trim():t)},expression:"currentItem.naturali"}})],1),e._v(" "),a("div",{staticStyle:{"font-size":"12px","padding-left":"80px"}},[e._v("\n            0:代表不使用此引擎. "),a("br"),e._v("\n            2~4:可以使用，但需要等待其他优先级更高的引擎，相同优先级的不需要等待."),a("br"),e._v("\n            7：\t优先 ，可以直接使用，不必等待其他引擎\n        ")])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"80px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"规则名称",prop:"ruleName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.ruleName,callback:function(t){e.$set(e.addList,"ruleName","string"==typeof t?t.trim():t)},expression:"addList.ruleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"sogou",prop:"sogou"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.sogou,callback:function(t){e.$set(e.addList,"sogou","string"==typeof t?t.trim():t)},expression:"addList.sogou"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"duer",prop:"duer"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.duer,callback:function(t){e.$set(e.addList,"duer","string"==typeof t?t.trim():t)},expression:"addList.duer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"wenwen",prop:"wenwen"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.wenwen,callback:function(t){e.$set(e.addList,"wenwen","string"==typeof t?t.trim():t)},expression:"addList.wenwen"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"naturali",prop:"naturali"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.naturali,callback:function(t){e.$set(e.addList,"naturali","string"==typeof t?t.trim():t)},expression:"addList.naturali"}})],1),e._v(" "),a("div",{staticStyle:{"font-size":"12px","padding-left":"80px"}},[e._v("\n                0:代表不使用此引擎. "),a("br"),e._v("\n                2~4:可以使用，但需要等待其他优先级更高的引擎，相同优先级的不需要等待."),a("br"),e._v("\n                7：\t优先 ，可以直接使用，不必等待其他引擎\n            ")])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(e){a("7HWV")},"data-v-6ec7a43e",null);t.default=s.exports}});