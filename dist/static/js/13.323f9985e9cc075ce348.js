webpackJsonp([13],{EY3k:function(e,t){},y8iu:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("gRE1"),a=i.n(n),s=i("2hMI"),l={data:function(){return{appId:"",list:[],perList:[],skillDetail:[],currentItem:{functionId:"",functionName:""},addList:{skillName:""},searchItem:{functionName:""},addRules:{skillName:[{required:!0,message:"请输入技能描述",trigger:"change"}]},editRules:{functionName:[{required:!0,message:"请输入技能描述",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,listLoading:!0,isshow:!0}},created:function(){var e=this;this.appId=this.$route.query.appId,JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(a()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("skill:functionupdate")&&-1==this.perList.indexOf("skill:functiondelete")&&-1==this.perList.indexOf("skill:speaklist")&&(this.isshow=!1)},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,console.log("当前页: "+e),this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={functionId:t.id,functionName:t.functionName}},handleDel:function(e,t){var i=this;console.log(t);var n={functionId:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s._86)(n).then(function(e){200==e.data.code?(i.$message({message:"删除成功",type:"success",duration:1e3}),i.getList()):i.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){console.log(e)})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addList={},this.addVisible=!1},editHandleConfirm:function(e){var t=this,i={functionId:this.currentItem.functionId,functionName:this.currentItem.functionName};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(s._87)(i).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.editBtnLoading=!1})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,i={id:this.appId,appName:this.addList.skillName};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(s._85)(i).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})},getList:function(){var e=this;this.listLoading=!0;var t={id:this.appId,pgstr:this.currentPage,pcstr:this.pageSize};Object(s._88)(t).then(function(t){e.listLoading=!1,e.skillDetail=t.data.data,e.list=t.data.data.functions,e.totalCount=t.data.count})},handleInfo:function(e,t){this.$router.push({path:"/lasf-kv/skill/detail/speak",query:{functionId:t.id,appId:t.appId}})}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",[e._v("技能管理")]),e._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:"/skill/applist"}}},[e._v("应用列表")]),e._v(" "),e._l(e.$route.meta,function(t,n){return i("el-breadcrumb-item",{key:n},[e._v(e._s(t))])})],2),e._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[i("div",{staticClass:"d_t"},[i("span",{staticClass:"d_title"},[e._v(e._s(e.skillDetail.appName)+"  \n                ")]),i("span",[e._v("("+e._s(e.skillDetail.appType)+")")])]),e._v(" "),i("el-form-item",{attrs:{label:"应用名称",prop:"functionName"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.functionName,callback:function(t){e.$set(e.searchItem,"functionName","string"==typeof t?t.trim():t)},expression:"searchItem.functionName"}})],1),e._v(" "),i("el-form-item",{staticClass:"sub-btn"},[i("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),i("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:functionadd",expression:"'skill:functionadd'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1)],1),e._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalCount<5?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list}},[i("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"技能描述",prop:"functionName",align:"center","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{label:"说法数量",prop:"inc",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"答案数量",prop:"inc",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"调用次数",prop:"inc",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"用户数",prop:"inc",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"失败次数",prop:"inc",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"更新时间",prop:"displayUpdateTime",align:"center","min-width":"120"}}),e._v(" "),e.isshow?i("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:functionupdate",expression:"'skill:functionupdate'"}],attrs:{size:"mini"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:functiondelete",expression:"'skill:functiondelete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDel(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:speaklist",expression:"'skill:speaklist'"}],attrs:{size:"mini"},on:{click:function(i){return e.handleInfo(t.$index,t.row)}}},[e._v("详情")])]}}],null,!1,2474924025)}):e._e()],1),e._v(" "),i("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[i("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"120px",size:"small",rules:e.editRules,model:e.currentItem}},[i("el-form-item",{attrs:{label:"技能描述",prop:"functionName"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.functionName,callback:function(t){e.$set(e.currentItem,"functionName","string"==typeof t?t.trim():t)},expression:"currentItem.functionName"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[i("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"100px",size:"small",rules:e.addRules,model:e.addList}},[i("el-form-item",{attrs:{label:"技能描述",prop:"skillName"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.skillName,callback:function(t){e.$set(e.addList,"skillName","string"==typeof t?t.trim():t)},expression:"addList.skillName"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=i("VU/8")(l,r,!1,function(e){i("EY3k")},"data-v-fd0997d8",null);t.default=o.exports}});