webpackJsonp([21],{"+mNw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("D7x1");var n=a("2hMI"),s={name:"applicationlist",components:{iTable:i.a},data:function(){var e=this;return{list:[],currentItem:{id:"",appName:""},addList:{appName:"",appPackageName:"",appType:""},searchItem:{appName:""},columns:[{prop:"appName",label:"应用名称",align:"center",hasSort:!0},{prop:"inc",label:"技能数",align:"center",hasSort:!0},{prop:"inc",label:"调用次数",align:"center",hasSort:!0},{prop:"inc",label:"调用用户数",align:"center",hasSort:!0},{prop:"inc",label:"失败次数",align:"center",hasSort:!0},{prop:"displayUpdateTime",label:"修改时间",align:"center",hasSort:!0}],options:{stripe:!1,loading:!1,highlightCurrentRow:!1,mutiSelect:!1,border:!1},operates:{width:200,show:!1,list:[{id:"1",label:"编辑",show:!0,plain:!0,disabled:!1,method:function(t,a){e.handleEdit(t,a)}},{id:"2",label:"删除",type:"danger",show:!0,plain:!1,disabled:!1,method:function(t,a){e.handleDel(t,a)}},{id:"3",label:"详情",show:!0,plain:!1,disabled:!1,method:function(t,a){e.handleInfo(t,a)}}]},addRules:{appName:[{required:!0,message:"请输入应用名称",trigger:"change"}],appPackageName:[{required:!0,message:"请输入应用包名",trigger:"change"}],appType:[{required:!0,message:"请输入应用类型",trigger:"change"}]},editRules:{appName:[{required:!0,message:"请输入应用名称",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:30,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1}},created:function(){this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,appName:t.appName}},handleDel:function(e,t){var a=this,i={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n._1)(i).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},editHandleClose:function(){this.editVisible=!1},addHandClose:function(){this.addVisible=!1},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},addHandleClose:function(e){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,appName:this.currentItem.appName};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(n._7)(a).then(function(e){200==e.data.code?(t.$message({message:"修改成功",type:"success",duration:1e3}),t.getList(),t.editBtnLoading=!1,t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})})})},handleAdd:function(e){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={appName:this.addList.appName,appPackageName:this.addList.appPackageName,appType:this.addList.appType};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(n._0)(a).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1,t.addBtnLoading=!1):(t.$message({message:e.data.errorMessage,type:"error",duration:1e3}),t.addBtnLoading=!1)})})},getList:function(){var e=this,t={pgstr:this.currentPage,pcstr:this.pageSize,appName:this.searchItem.appName};Object(n._6)(t).then(function(t){e.list=t.data.data,e.totalCount=t.data.count})},handleInfo:function(e,t){this.$router.push({path:"/lasf-kv/skill/detail",query:{appId:t.id}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("LASF KV")]),e._v(" "),e._l(e.$route.meta,function(t,i){return a("el-breadcrumb-item",{key:i},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"应用名称",prop:"appName"}},[a("el-input",{model:{value:e.searchItem.appName,callback:function(t){e.$set(e.searchItem,"appName",t)},expression:"searchItem.appName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:127,expression:"127"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"技能名称",prop:"appName",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"技能数",prop:"inc",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"调用次数",prop:"inc",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"调用用户数",prop:"inc",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"失败次数",prop:"inc",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"displayUpdateTime",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:128,expression:"128"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:129,expression:"129"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:130,expression:"130"}],attrs:{size:"mini"},on:{click:function(a){return e.handleInfo(t.$index,t.row)}}},[e._v("详情")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"120px",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"应用名称",prop:"appName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.appName,callback:function(t){e.$set(e.currentItem,"appName",t)},expression:"currentItem.appName"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"应用名称",prop:"appName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.appName,callback:function(t){e.$set(e.addList,"appName",t)},expression:"addList.appName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"应用包名",prop:"appPackageName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.appPackageName,callback:function(t){e.$set(e.addList,"appPackageName",t)},expression:"addList.appPackageName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"应用类型",prop:"appType"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.appType,callback:function(t){e.$set(e.addList,"appType",t)},expression:"addList.appType"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.addHandleClose("addList")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,r,!1,function(e){a("qP2Q")},"data-v-48e011e1",null);t.default=l.exports},qP2Q:function(e,t){}});