webpackJsonp([8],{XCgB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gRE1"),n=a.n(i),s=a("pWbq"),r=a("2hMI"),o={data:function(){return{list:[],perList:[],currentItem:{id:"",appName:""},addList:{appName:""},searchItem:{appName:""},addRules:{appName:[{required:!0,message:"请输入应用名称",trigger:"change"}]},editRules:{appName:[{required:!0,message:"请输入应用名称",trigger:"blur"}]},editVisible:!1,addVisible:!1,uploadVisible:!1,fileBtnLoading:!1,file:[],currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,listLoading:!0,isshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(n()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("app:appupdate")&&-1==this.perList.indexOf("app:appdel")&&(this.isshow=!1)},methods:{formTime:function(e,t){var a=e.updateTime,i=new Date(a);return i.getFullYear()+"-"+Object(s.a)(i.getMonth()+1)+"-"+Object(s.a)(i.getDate())+" "+Object(s.a)(i.getHours())+":"+Object(s.a)(i.getMinutes())},formTime2:function(e,t){var a=e.createTime,i=new Date(a);return i.getFullYear()+"-"+Object(s.a)(i.getMonth()+1)+"-"+Object(s.a)(i.getDate())+" "+Object(s.a)(i.getHours())+":"+Object(s.a)(i.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,appName:t.appName}},handleDel:function(e,t){var a=this,i={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.g)(i).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,appName:this.currentItem.appName};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(r.j)(a).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.editBtnLoading=!1})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={appName:this.addList.appName};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(r.f)(a).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})},importExcel:function(){this.uploadVisible=!0},beforeUpload:function(e){var t="application/vnd.ms-excel"===e.type,a="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===e.type;return t||a||this.$message.error("上传文件必须是Excel格式!"),t||a},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，请删除后继续上传")},uploadFile:function(e){this.file=e.file},postFile:function(){var e=this,t=this.file,a=new FormData;a.append("ex",t),this.fileBtnLoading=!0,Object(r.i)(a).then(function(t){e.fileBtnLoading=!1,200==t.data.code?(e.$message({message:t.data.msg,type:"success",duration:1e3}),e.$refs.upload.clearFiles(),e.uploadVisible=!1,e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.fileBtnLoading=!1})},closeFile:function(){this.$refs.upload.clearFiles(),this.uploadVisible=!1},getList:function(){var e=this,t={pgstr:this.currentPage,pcstr:this.pageSize,appname:this.searchItem.appName};Object(r.h)(t).then(function(t){e.listLoading=!1,e.list=t.data.data,e.totalCount=t.data.count})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("应用搜索")]),e._v(" "),e._l(e.$route.meta,function(t,i){return a("el-breadcrumb-item",{key:i},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"应用名称",prop:"appName"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.appName,callback:function(t){e.$set(e.searchItem,"appName","string"==typeof t?t.trim():t)},expression:"searchItem.appName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:appadd",expression:"'app:appadd'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:excel",expression:"'app:excel'"}],staticClass:"success",attrs:{icon:"el-icon-upload",size:"mini"},on:{click:function(t){return e.importExcel()}}},[e._v("导入Excel文件")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"应用名称",prop:"appName",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center",formatter:e.formTime2}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"updateTime",align:"center",formatter:e.formTime}}),e._v(" "),e.isshow?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:appupdate",expression:"'app:appupdate'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:appdel",expression:"'app:appdel'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}],null,!1,1917772151)}):e._e()],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"120px",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"应用名称",prop:"appName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.appName,callback:function(t){e.$set(e.currentItem,"appName","string"==typeof t?t.trim():t)},expression:"currentItem.appName"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"应用名称",prop:"appName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.appName,callback:function(t){e.$set(e.addList,"appName","string"==typeof t?t.trim():t)},expression:"addList.appName"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"eldialog",attrs:{title:"上传文件",visible:e.uploadVisible,width:"200","before-close":e.closeFile},on:{"update:visible":function(t){e.uploadVisible=t}}},[a("el-form",{staticClass:"eldialogForm"},[a("el-form-item",{attrs:{label:""}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"","before-upload":e.beforeUpload,"http-request":e.uploadFile,"on-exceed":e.handleExceed2,limit:1,multiple:"",action:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("\n            将文件拖到此处，或\n            "),a("em",[e._v("点击上传")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传Excel文件，且每次只能上传一个文件")])])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeFile()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.fileBtnLoading},on:{click:function(t){return e.postFile()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(o,l,!1,function(e){a("XjZi")},"data-v-db6f97c8",null);t.default=d.exports},XjZi:function(e,t){}});