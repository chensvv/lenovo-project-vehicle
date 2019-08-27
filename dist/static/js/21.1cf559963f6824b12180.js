webpackJsonp([21],{RIRX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("D7x1"),i=n("2hMI"),s={name:"applicationlist",components:{iTable:a.a},data:function(){return{appId:"",list:[],skillDetail:[],currentItem:{functionId:"",functionName:""},addList:{skillName:""},searchItem:{functionName:""},addRules:{skillName:[{required:!0,message:"请输入技能描述",trigger:"change"}]},editRules:{functionName:[{required:!0,message:"请输入技能描述",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1}},created:function(){this.appId=this.$route.query.appId,this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={functionId:t.id,functionName:t.functionName}},handleDel:function(e,t){var n=this,a={functionId:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i._14)(a).then(function(e){200==e.data.code?(n.$message({message:"删除成功",type:"success",duration:1e3}),n.getList()):n.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addList={},this.addVisible=!1},editHandleConfirm:function(e){var t=this,n={functionId:this.currentItem.functionId,functionName:this.currentItem.functionName};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(i._15)(n).then(function(e){200==e.data.code?(t.$message({message:"修改成功",type:"success",duration:1e3}),t.getList(),t.editBtnLoading=!1,t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,n={id:this.appId,appName:this.addList.skillName};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(i._13)(n).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1,t.addBtnLoading=!1):(t.$message({message:e.data.errorMessage,type:"error",duration:1e3}),t.addBtnLoading=!1)})})},getList:function(){var e=this,t={id:this.appId};Object(i._16)(t).then(function(t){e.skillDetail=t.data,e.list=t.data.functions,e.totalCount=t.data.count})},handleInfo:function(e,t){this.$router.push({path:"/lasf-kv/skill/detail/speak",query:{functionId:t.id,appId:t.appId}})}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),n("el-breadcrumb-item",[e._v("LASF KV")]),e._v(" "),n("el-breadcrumb-item",{attrs:{to:{path:"/skill/applist"}}},[e._v("应用列表")]),e._v(" "),e._l(e.$route.meta,function(t,a){return n("el-breadcrumb-item",{key:a},[e._v(e._s(t))])})],2),e._v(" "),n("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[n("div",{staticClass:"d_t"},[n("span",{staticClass:"d_title"},[e._v(e._s(e.skillDetail.appName)+"  \n                ")]),n("span",[e._v("("+e._s(e.skillDetail.appType)+")")])]),e._v(" "),n("el-form-item",{attrs:{label:"应用名称",prop:"functionName"}},[n("el-input",{attrs:{clearable:""},model:{value:e.searchItem.functionName,callback:function(t){e.$set(e.searchItem,"functionName","string"==typeof t?t.trim():t)},expression:"searchItem.functionName"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),n("el-button",{directives:[{name:"has",rawName:"v-has",value:131,expression:"131"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),n("div",{staticClass:"table-box"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[n("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"技能描述",prop:"functionName",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"说法数量",prop:"inc",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"答案数量",prop:"inc",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"调用次数",prop:"inc",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"用户数",prop:"inc",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"失败次数",prop:"inc",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"更新时间",prop:"displayUpdateTime",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"has",rawName:"v-has",value:132,expression:"132"}],attrs:{size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),n("el-button",{directives:[{name:"has",rawName:"v-has",value:133,expression:"133"}],attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDel(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),n("el-button",{directives:[{name:"has",rawName:"v-has",value:134,expression:"134"}],attrs:{size:"mini"},on:{click:function(n){return e.handleInfo(t.$index,t.row)}}},[e._v("详情")])]}}])})],1),e._v(" "),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[n("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"120px",rules:e.editRules,model:e.currentItem}},[n("el-form-item",{attrs:{label:"技能描述",prop:"functionName"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.functionName,callback:function(t){e.$set(e.currentItem,"functionName","string"==typeof t?t.trim():t)},expression:"currentItem.functionName"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[n("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:e.addRules,model:e.addList}},[n("el-form-item",{attrs:{label:"技能描述",prop:"skillName"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.skillName,callback:function(t){e.$set(e.addList,"skillName","string"==typeof t?t.trim():t)},expression:"addList.skillName"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=n("VU/8")(s,r,!1,function(e){n("XpyE")},"data-v-527164f9",null);t.default=l.exports},XpyE:function(e,t){}});